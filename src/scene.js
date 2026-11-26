import * as T from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { Pass } from 'three/addons/postprocessing/Pass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { makeSky } from './sky'
import { random } from './random'
import { makeTree, startY } from './tree'
import { makeGallery } from './gallery'
import { makeSilkFireworks } from './fireworks'
import { makeMeteors } from './meteors'

const TAU=Math.PI*2
const fit=(a,b,speed,dt)=>T.MathUtils.damp(a,b,speed,dt)

function glowDot() {
  const canvas=document.createElement('canvas')
  canvas.width=canvas.height=64
  const ctx=canvas.getContext('2d')
  const g=ctx.createRadialGradient(32,32,0,32,32,30)
  g.addColorStop(0,'rgba(255,255,255,1)')
  g.addColorStop(.25,'rgba(255,255,255,.75)')
  g.addColorStop(1,'rgba(255,255,255,0)')
  ctx.fillStyle=g
  ctx.fillRect(0,0,64,64)
  const map=new T.CanvasTexture(canvas)
  map.colorSpace=T.SRGBColorSpace
  return map
}

// 夜空烟花：独立粒子池，频率由主界面的「烟花」选项控制
function makeFireworks() {
  const max=5000
  const positions=new Float32Array(max*3)
  const colors=new Float32Array(max*3)
  const sizes=new Float32Array(max)
  const alphas=new Float32Array(max)
  const particles=Array.from({length:max},()=>({
    live:false,x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,max:1,
    r:1,g:1,b:1,size:0,alpha:0,
  }))
  for(let i=0;i<max;i++)positions[i*3+1]=-999
  const geometry=new T.BufferGeometry()
  geometry.setAttribute('position',new T.BufferAttribute(positions,3))
  geometry.setAttribute('aColor',new T.BufferAttribute(colors,3))
  geometry.setAttribute('aSize',new T.BufferAttribute(sizes,1))
  geometry.setAttribute('aAlpha',new T.BufferAttribute(alphas,1))
  const material=new T.ShaderMaterial({
    uniforms:{uPixel:{value:1}},
    vertexShader:`
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aAlpha;
      uniform float uPixel;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vColor=aColor;
        vAlpha=aAlpha;
        vec4 mv=modelViewMatrix*vec4(position,1.0);
        gl_PointSize=aSize*uPixel*(360.0/max(1.0,-mv.z));
        gl_Position=projectionMatrix*mv;
      }
    `,
    fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec2 c=gl_PointCoord-0.5;
        float d=length(c);
        float a=smoothstep(0.5,0.05,d);
        if(a<=0.001)discard;
        gl_FragColor=vec4(vColor,a*vAlpha);
      }
    `,
    transparent:true,
    depthWrite:false,
    blending:T.AdditiveBlending,
  })
  const points=new T.Points(geometry,material)
  points.frustumCulled=false
  let cursor=0,nextAt=1.8
  let palette=['#ffffff','#eaf4ff','#9fc7ff','#cfe6ff','#ffe4b8']
  let frequency=7

  function setTheme(theme) {
    palette=[theme.pale,theme.primary,theme.accent,theme.star,'#ffffff','#ffe4b8']
  }

  function spawnBurst(now) {
    const side=Math.random()>.5?1:-1
    const cx=side*(5+Math.random()*8)
    const cy=8.4+Math.random()*3.3
    const cz=-5+Math.random()*9
    const heads=150
    for(let i=0;i<heads;i++){
      const a=Math.random()*TAU
      const z=Math.random()*2-1
      const radial=Math.sqrt(1-z*z)
      const speed=1.3+Math.random()*4.4
      const vx=Math.cos(a)*radial*speed
      const vy=z*speed
      const vz=Math.sin(a)*radial*speed
      const maxLife=1.5+Math.random()*1.2
      const color=new T.Color(palette[Math.floor(Math.random()*palette.length)])
      const headSize=.72+Math.random()*.48
      // 每个头后面跟 7 个带滞后的粒子，形成长拖尾
      for(let j=0;j<7;j++){
        const p=particles[cursor]
        cursor=(cursor+1)%max
        const lag=j*.04
        p.live=true
        p.x=cx-vx*lag
        p.y=cy-vy*lag
        p.z=cz-vz*lag
        p.vx=vx
        p.vy=vy
        p.vz=vz
        p.max=maxLife
        p.life=maxLife
        p.r=color.r; p.g=color.g; p.b=color.b
        p.size=headSize*(1-j*.105)
        p.alpha=(1-j*.12)*(j===0?1:.72)
      }
    }
    for(let i=0;i<24;i++){
      const p=particles[cursor]
      cursor=(cursor+1)%max
      p.live=true
      p.x=cx; p.y=cy; p.z=cz
      p.vx=(Math.random()-.5)*.5
      p.vy=(Math.random()-.5)*.5
      p.vz=(Math.random()-.5)*.5
      p.max=.45+Math.random()*.35
      p.life=p.max
      p.r=1; p.g=1; p.b=1
      p.size=1.35+Math.random()*.6
      p.alpha=1
    }
    nextAt=now+frequency
  }

  function update(dt,now) {
    if(frequency>0&&now>=nextAt)spawnBurst(now)
    let changed=false
    for(let i=0;i<max;i++){
      const p=particles[i]
      if(!p.live)continue
      p.life-=dt
      if(p.life<=0){
        p.live=false
        positions[i*3+1]=-999
        colors[i*3]=colors[i*3+1]=colors[i*3+2]=0
        alphas[i]=0
        changed=true
        continue
      }
      p.vy-=1.05*dt
      const drag=Math.pow(.987,dt*60)
      p.vx*=drag; p.vy*=drag; p.vz*=drag
      p.x+=p.vx*dt; p.y+=p.vy*dt; p.z+=p.vz*dt
      positions[i*3]=p.x
      positions[i*3+1]=p.y
      positions[i*3+2]=p.z
      const fade=Math.pow(p.life/p.max,.68)
      colors[i*3]=p.r*fade
      colors[i*3+1]=p.g*fade
      colors[i*3+2]=p.b*fade
      sizes[i]=p.size
      alphas[i]=p.alpha*fade
      changed=true
    }
    if(changed){
      geometry.attributes.position.needsUpdate=true
      geometry.attributes.aColor.needsUpdate=true
      geometry.attributes.aSize.needsUpdate=true
      geometry.attributes.aAlpha.needsUpdate=true
    }
  }

  return {
    points,
    setTheme,
    setPixel(value){ material.uniforms.uPixel.value=value },
    setFrequency(value){ frequency=Math.max(0,value||0); if(frequency>0)nextAt=Math.min(nextAt,2.5) },
    update,
  }
}

class WorldPass extends Pass {
  constructor(sky, scene, camera) {
    super()
    this.sky=sky
    this.scene=scene
    this.camera=camera
    this.needsSwap=false
  }
  render(renderer, writeBuffer, readBuffer) {
    renderer.setRenderTarget(this.renderToScreen?null:readBuffer)
    renderer.clear()
    renderer.render(this.sky.scene,this.sky.camera)
    renderer.clearDepth()
    renderer.render(this.scene,this.camera)
  }
}

function ground() {
  const group=new T.Group()
  const canvas=document.createElement('canvas')
  canvas.width=canvas.height=256
  const ctx=canvas.getContext('2d')
  const gradient=ctx.createRadialGradient(128,128,10,128,128,128)
  gradient.addColorStop(0,'rgba(255,172,85,.49)')
  gradient.addColorStop(.22,'rgba(219,140,75,.36)')
  gradient.addColorStop(.49,'rgba(144,103,78,.28)')
  gradient.addColorStop(.73,'rgba(114,103,92,.1)')
  gradient.addColorStop(1,'rgba(20,20,20,0)')
  ctx.fillStyle=gradient
  ctx.fillRect(0,0,256,256)
  const rng=random(1818)
  for(let i=0;i<4300;i++){
    const a=rng()*TAU,r=Math.sqrt(rng())*124,s=.2+rng()*1.75
    ctx.fillStyle=i%5?'rgba(255,224,163,'+((1-r/124)*.29)+')':'rgba(10,25,46,'+((1-r/124)*.24)+')'
    ctx.fillRect(128+Math.cos(a)*r,128+Math.sin(a)*r,s,s*.83)
  }
  const map=new T.CanvasTexture(canvas)
  map.colorSpace=T.SRGBColorSpace
  const glow=new T.Mesh(new T.PlaneGeometry(26,22),new T.MeshBasicMaterial({map,transparent:true,depthWrite:false,toneMapped:false}))
  glow.rotation.x=-Math.PI/2
  glow.position.y=startY-.42
  glow.renderOrder=-4
  group.add(glow)
  const ringMaterial=new T.MeshBasicMaterial({color:'#ebb278',transparent:true,opacity:.22,depthWrite:false,toneMapped:false,side:T.DoubleSide})
  const ring=new T.Mesh(new T.RingGeometry(6.51,6.55,128),ringMaterial)
  ring.rotation.x=-Math.PI/2
  ring.position.y=startY-.405
  ring.renderOrder=-3
  group.add(ring)
  return { group,ringMaterial }
}

const snowVertex=`
  uniform float time; uniform float pixels;
  attribute float seed; attribute float size;
  varying float vAlpha;
  void main(){
    vec3 p=position;
    p.y=mod(p.y-time*(.36+seed*.77)+32.,28.)-10.;
    p.x+=sin(time*.5+seed*37.+p.y*.32)*(.38+seed*.5);
    p.z+=cos(time*.39+seed*41.)*.53;
    vec4 mv=modelViewMatrix*vec4(p,1.);
    vAlpha=smoothstep(3.,11.,-mv.z)*(.24+seed*.61)*smoothstep(-9.5,-6.,p.y);
    gl_PointSize=clamp(size*pixels*38./max(2.,-mv.z),1.,12.);
    gl_Position=projectionMatrix*mv;
  }
`
const snowFragment=`
  varying float vAlpha;
  void main(){
    float r=length(gl_PointCoord-.5);
    float a=(1.-smoothstep(.07,.48,r))*vAlpha;
    if(a<.018)discard;
    gl_FragColor=vec4(.63,.81,1.,a);
    #include <colorspace_fragment>
  }
`

function snowfall(lite) {
  const rng=random(4817), points=[], sizes=[], seeds=[]
  for(let i=0;i<(lite?400:1400);i++){
    const angle=rng()*TAU,r=Math.sqrt(rng())*30
    points.push(Math.cos(angle)*r,rng()*28,Math.sin(angle)*r)
    sizes.push(.85+Math.pow(rng(),4)*4.3)
    seeds.push(rng())
  }
  const geo=new T.BufferGeometry()
  geo.setAttribute('position',new T.Float32BufferAttribute(points,3))
  geo.setAttribute('seed',new T.Float32BufferAttribute(seeds,1))
  geo.setAttribute('size',new T.Float32BufferAttribute(sizes,1))
  const snow=new T.Points(geo,new T.ShaderMaterial({ uniforms:{time:{value:0},pixels:{value:1}},
    vertexShader:snowVertex,fragmentShader:snowFragment,transparent:true,depthWrite:false,toneMapped:false }))
  snow.frustumCulled=false
  return snow
}

export function createWorld(element, options) {
  const { lite, config, hand, audio, onStatus, onStats, quality: initialQuality='auto', refresh=60, theme: initialTheme }=options
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const refreshRate=Math.max(60,Math.min(240,refresh||60))
  let quality=['auto','smooth','sharp'].includes(initialQuality)?initialQuality:'auto'
  const targetFps=lite?Math.min(60,refreshRate):Math.min(120,refreshRate)
  const renderer=new T.WebGLRenderer({alpha:false,antialias:lite,powerPreference:'high-performance', preserveDrawingBuffer:false})
  renderer.autoClear=false
  renderer.toneMapping=T.ACESFilmicToneMapping
  renderer.toneMappingExposure=1.12
  renderer.domElement.setAttribute('role','img')
  renderer.domElement.setAttribute('aria-label','极光与星雪中的三维圣诞树，拖动旋转，滚动缩放')
  element.append(renderer.domElement)
  const scene=new T.Scene()
  scene.fog=new T.Fog('#142b3b',37,72)
  const camera=new T.PerspectiveCamera(40,1,.3,150)
  let initialPosition=false
  const controls=new OrbitControls(camera,renderer.domElement)
  controls.enablePan=false
  controls.enableDamping=!reduce
  controls.dampingFactor=.085
  controls.minDistance=8
  controls.maxDistance=45
  controls.minPolarAngle=.55
  controls.maxPolarAngle=Math.PI*.55
  controls.target.set(0,.74,0)
  const sky=makeSky(lite)
  const tree=makeTree(lite,config)
  const gallery=makeGallery(reduce,renderer)
  tree.root.add(gallery.root)
  const snow=snowfall(lite)
  const field=ground()
  const fireworks=makeSilkFireworks(camera)
  const meteors=makeMeteors(camera)
  scene.add(tree.root,snow,field.group,fireworks.points,meteors.points)
  scene.add(new T.HemisphereLight('#b0e2f4','#323b36',1.23))
  const cool=new T.DirectionalLight('#a0dfff',1.92)
  cool.position.set(-8,6,-6)
  const warm=new T.DirectionalLight('#ffe1a6',1.90)
  warm.position.set(6,5,9)
  const rim=new T.DirectionalLight('#69cba3',.77)
  rim.position.set(-6,3,7)
  scene.add(cool,warm,rim)
  const generator=new T.PMREMGenerator(renderer)
  const studio=new RoomEnvironment()
  const environment=generator.fromScene(studio,.032)
  scene.environment=environment.texture
  scene.environmentIntensity=.39
  studio.dispose()
  generator.dispose()

  function applyTheme(theme) {
    if(!theme)return
    tree.setTheme?.(theme)
    fireworks.setTheme(theme)
    cool.color.set(theme.cool)
    warm.color.set(theme.warm)
    rim.color.set(theme.rim)
    field.ringMaterial.color.set(theme.garland)
    if(sky.uniforms.auroraA)sky.uniforms.auroraA.value.set(theme.auroraA)
    if(sky.uniforms.auroraB)sky.uniforms.auroraB.value.set(theme.auroraB)
    scene.fog.color.set(theme.fog)
  }
  applyTheme(initialTheme)

  const worldPass=new WorldPass(sky,scene,camera)
  const composer=lite?null:new EffectComposer(renderer)
  const bloom=lite?null:new UnrealBloomPass(new T.Vector2(1,1),.31,.49,.59)
  const output=lite?null:new OutputPass()
  if(composer) {
    composer.addPass(worldPass)
    composer.addPass(bloom)
    composer.addPass(output)
  }
  let mode='tree', frameId=0, prev=null, time=0, spread=0, floating=0, level=0, pixels=1, burstWidth=1, status='', disposed=false
  let renderRatio=1, viewW=1, viewH=1, lowFps=0, highFps=0, adaptAt=0
  let statsAt=performance.now(), statsFrames=0
  let fireworkEvery=Math.max(0,config.fireworks??7)
  fireworks.setFrequency(fireworkEvery)

  // 渲染分辨率：自动模式在 0.6×–1× 之间动态调节，牺牲一点锐度换稳定高帧
  function ratioCeiling() {
    const dpr=window.devicePixelRatio||1
    const mobile=(element.clientWidth||window.innerWidth)<760
    if(lite)return Math.min(dpr,1)
    if(quality==='smooth')return Math.min(dpr,mobile?1:.82)
    if(quality==='sharp')return Math.min(dpr,1.45)
    return Math.min(dpr,mobile?1.3:1)
  }
  function applyRenderRatio(ratio) {
    const w=element.clientWidth,h=element.clientHeight
    if(!w||!h)return
    viewW=w; viewH=h
    renderRatio=Math.max(.55,Math.min(1.45,ratio))
    pixels=renderRatio
    fireworks.setPixel(renderRatio)
    renderer.setPixelRatio(renderRatio)
    renderer.setSize(w,h,false)
    if(composer){
      composer.setPixelRatio(renderRatio)
      composer.setSize(w,h)
    }
    if(bloom)bloom.strength=quality==='smooth'?.27:.31
  }
  const mouse={x:0,y:0,active:false,pinch:false}
  let activePointer=null
  const surface=renderer.domElement
  function coordinates(event) {
    const rect=surface.getBoundingClientRect()
    if(!rect.width || !rect.height)return
    mouse.x=(event.clientX-rect.left)/rect.width*2-1
    mouse.y=1-(event.clientY-rect.top)/rect.height*2
    mouse.active=event.clientX>=rect.left && event.clientX<=rect.right && event.clientY>=rect.top && event.clientY<=rect.bottom
  }
  const down=event=>{
    if(event.button!==0 || activePointer!==null)return
    activePointer=event.pointerId
    coordinates(event)
    if(event.pointerType==='touch' && gallery.tap(camera,mouse.x,mouse.y)) {
      mouse.active=false
      return
    }
    if(event.pointerType==='mouse' && gallery.click(camera,mouse.x,mouse.y)) {
      mouse.pinch=false
      return
    }
    mouse.pinch=true
  }
  const up=event=>{
    if(event.pointerId!==activePointer)return
    activePointer=null
    mouse.pinch=false
    if(event.pointerType==='touch' || event.type==='pointercancel')mouse.active=false
  }
  const leave=()=>{ mouse.active=false }
  const blur=()=>{ activePointer=null; mouse.active=false; mouse.pinch=false }
  surface.addEventListener('pointermove',coordinates)
  surface.addEventListener('pointerleave',leave)
  surface.addEventListener('pointerdown',down)
  window.addEventListener('pointerup',up)
  window.addEventListener('pointercancel',up)
  window.addEventListener('blur',blur)
  function resize() {
    const w=element.clientWidth,h=element.clientHeight
    if(!w||!h)return
    const mobile=w<760, ratio=w/h
    burstWidth=T.MathUtils.clamp(ratio*.81,.43,1)
    applyRenderRatio(ratioCeiling())
    sky.resize(w,h)
    camera.aspect=ratio
    scene.fog.near=mobile?45:37
    if(!initialPosition) {
      camera.position.set(0,3.45,mobile?Math.min(44,Math.max(40,19.7/ratio)):29.5)
      camera.lookAt(controls.target)
      initialPosition=true
    }
    camera.setViewOffset(w,h,mobile?0:-w*.083,mobile?h*.095:-h*.005,w,h)
    camera.updateProjectionMatrix()
    controls.update()
  }
  function setQuality(next) {
    if(!['auto','smooth','sharp'].includes(next)||next===quality)return
    quality=next
    lowFps=highFps=0
    adaptAt=0
    applyRenderRatio(ratioCeiling())
  }
  // 自动画质：连续掉帧就降分辨率，稳定富余再慢慢升回去
  function adaptQuality(fps) {
    if(lite||reduce||quality!=='auto'||document.hidden||time<4)return
    const now=performance.now()
    if(now<adaptAt)return
    const ceiling=ratioCeiling(), floor=.6
    if(fps<targetFps*.94&&renderRatio>floor+.001) {
      highFps=0
      if(++lowFps>=2) {
        lowFps=0
        applyRenderRatio(Math.max(floor,renderRatio-.07))
        adaptAt=now+1200
      }
    } else if(fps>targetFps*1.02&&renderRatio<ceiling-.001) {
      lowFps=0
      if(++highFps>=4) {
        highFps=0
        applyRenderRatio(Math.min(ceiling,renderRatio+.04))
        adaptAt=now+1800
      }
    } else {
      lowFps=0; highFps=0
    }
  }
  const observer=new ResizeObserver(resize)
  observer.observe(element)
  resize()

  function tick(now) {
    if(disposed)return
    frameId=requestAnimationFrame(tick)
    const firstFrame=prev===null
    const dt=firstFrame?1/60:Math.min(.14,Math.max(0,(now-prev)/1000))
    prev=now
    if(firstFrame){ statsAt=now; statsFrames=0 }
    if(!reduce)time+=dt
    controls.update()
    const current=hand.current
    const control=current.present && !mouse.pinch
      ? {x:current.x*2-1,y:1-current.y*2,active:current.gesture!=='fist',pinch:Boolean(current.pinch),hand:true}
      : mouse
    const handBurst=current.present && (current.gesture==='open' || current.gesture==='pinch')
    const burst=mouse.pinch || handBurst
    spread=fit(spread,burst?1:0,burst?7.6:5.9,dt)
    if(burst && spread>.999)spread=1
    if(!burst && spread<.0007)spread=0
    floating=fit(floating,mode==='float'?1:0,2.8,dt)
    level=fit(level,audio.current,6,dt)
    tree.frame({time,dt,spread,burstWidth,floating,audio:level,pixels,reduce})
    snow.material.uniforms.time.value=time
    snow.material.uniforms.pixels.value=pixels
    sky.uniforms.time.value=time
    field.ringMaterial.opacity=.18+Math.sin(time*.8)*.045
    const hovered=gallery.frame(camera,control,time,dt,tree.root.rotation.y)
    if(!reduce)fireworks.update(dt,time)
    if(!reduce)meteors.update(dt,time)
    const next=burst?'burst':hovered?'hover':'idle'
    if(next!==status){status=next;onStatus(next);surface.style.cursor=burst?'grabbing':hovered?'pointer':'grab'}
    if(composer)composer.render(dt)
    else {worldPass.renderToScreen=true;worldPass.render(renderer,null,null)}

    // 真实帧率统计：按 rAF 实际回调次数计算，后台/加载初期的抖动不显示
    if(document.hidden){
      statsFrames=0; statsAt=now
    } else if(dt>.5){
      statsFrames=0; statsAt=now
    } else {
      statsFrames++
      if(now-statsAt>=500) {
        const fps=statsFrames*1000/(now-statsAt)
        statsFrames=0; statsAt=now
        if(time>1.5||reduce) onStats?.(fps,renderRatio,targetFps,refreshRate)
        adaptQuality(fps)
      }
    }
  }
  frameId=requestAnimationFrame(tick)
  function updateConfig(next) {
    tree.update(next)
    if(typeof next.fireworks==='number' && next.fireworks!==fireworkEvery) {
      fireworkEvery=next.fireworks
      fireworks.setFrequency(fireworkEvery)
    }
  }
  return {
    config: updateConfig,
    photos: gallery.update,
    setMode(next){ mode=next },
    setQuality,
    setTheme: applyTheme,
    dispose(){
      disposed=true
      cancelAnimationFrame(frameId)
      observer.disconnect()
      controls.dispose()
      surface.removeEventListener('pointermove',coordinates)
      surface.removeEventListener('pointerleave',leave)
      surface.removeEventListener('pointerdown',down)
      window.removeEventListener('pointerup',up)
      window.removeEventListener('pointercancel',up)
      window.removeEventListener('blur',blur)
      gallery.dispose()
      sky.dispose()
      environment.dispose()
      scene.traverse(object=>{
        object.geometry?.dispose()
        object.material?.map?.dispose()
        object.material?.dispose()
      })
      bloom?.dispose()
      output?.dispose()
      composer?.dispose()
      renderer.dispose()
      surface.remove()
    },
  }
}
