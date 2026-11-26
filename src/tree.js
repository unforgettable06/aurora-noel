import * as T from 'three'
import { random } from './random'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

const TAU = Math.PI * 2
const startY = -5.5
const height = 13.1
const radius = 5.15
const color = value => new T.Color(value)
const dummy = new T.Object3D()
const up = new T.Vector3(0, 1, 0)

function widthAt(t) { return radius * Math.pow(Math.max(0, 1-t), .82) * (.85+.15*Math.min(1,t*10)) }

function burstTarget(rng) {
  const yaw=rng()*TAU
  const vertical=rng()*2-1
  const reach=Math.pow(rng(),.36)
  const horizontal=Math.sqrt(1-vertical*vertical)*reach
  return new T.Vector3(Math.cos(yaw)*horizontal*22,1.5+vertical*reach*12.9,Math.sin(yaw)*horizontal*13)
}

function dissolveDuringBurst(material, dissolve) {
  material.onBeforeCompile=shader=>{
    shader.uniforms.treeDissolve=dissolve
    shader.vertexShader=shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vSprigPosition;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSprigPosition = position;')
    shader.fragmentShader=shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float treeDissolve;\nvarying vec3 vSprigPosition;')
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        if (treeDissolve > 0.0) {
          vec3 cell = floor(vSprigPosition * 8.0);
          float threshold = fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          if (threshold < treeDissolve) discard;
        }
      `)
  }
}
function needleGeometry(lite) {
  const rng = random(5479)
  const vertices=[], colors=[], wood=[]
  const shades=['#10382d','#204e38','#235641','#142f28','#2b614b','#19503b','#3e715c'].map(color)
  const frosts=['#5d8473','#809d8c','#bacfbf'].map(color)
  const tip = new T.Vector3(), branch = new T.Vector3()
  const stock = new T.CylinderGeometry(.61,1,1,5,1).toNonIndexed()
  const branches = lite ? 17 : 23
  for(let tier=0; tier<branches; tier++) {
    const level=.055+tier/(branches-1)*.917
    const spokes=Math.round(17-level*9)
    for(let j=0; j<spokes; j++) {
      const theta=(j/spokes)*TAU+tier*.83+(rng()-.5)*.30
      const length=widthAt(level)*(.76+.30*rng())
      const y=startY+height*level+(rng()-.5)*.34
      const x=Math.cos(theta), z=Math.sin(theta)
      const lift=(rng()-.41)*.41+.17
      const curl=.54+length*.065
      const curve = new T.CubicBezierCurve3(
        new T.Vector3(x*.12,y,z*.12),
        new T.Vector3(x*length*.40,y-.36,z*length*.40),
        new T.Vector3(x*length*.76,y+lift-curl,z*length*.76),
        new T.Vector3(x*length,y+lift,z*length)
      )
      for(let k=0; k<4; k++) {
        const a=curve.getPoint(k/4), b=curve.getPoint((k+1)/4)
        branch.subVectors(b,a)
        dummy.position.copy(a).lerp(b,.5)
        dummy.quaternion.setFromUnitVectors(up,tip.copy(branch).normalize())
        const thickness=(.027+length*.011)*(1-k*.17)
        dummy.scale.set(thickness,branch.length(),thickness)
        dummy.updateMatrix()
        wood.push(stock.clone().applyMatrix4(dummy.matrix))
      }
      const sprigs=lite?18:35
      for(let k=0;k<sprigs;k++) {
        const u=.08+k/sprigs*.91
        const node=curve.getPoint(u)
        const angle=theta+(k%2?1:-1)*(.29+rng()*1.32)
        const alongX=Math.cos(angle), alongZ=Math.sin(angle)
        const sprigLength=(.10+length*.175)*Math.pow(1-u,.45)*(.64+.61*rng())
        const sprigRise=.14+rng()*.55
        const needles=lite?8:15
        const spruce=shades[Math.floor(rng()*shades.length)]
        const under=rng()<.22
        for(let n=0;n<needles;n++) {
          const v=(n+.4)/needles, spin=n*2.399963+(rng()-.5)*.78
          const xx=node.x+alongX*sprigLength*v
          const zz=node.z+alongZ*sprigLength*v
          const yy=node.y+sprigLength*v*sprigRise
          const slender=(.095+rng()*.17+length*.016)*(1-v*.55)
          const ox=Math.cos(spin)*Math.sin(angle), oz=-Math.cos(spin)*Math.cos(angle)
          const oy=Math.sin(spin)*.78+(under?-.17:.22)
          const blade=.012+rng()*.019
          const blX=Math.sin(angle)*blade, blZ=-Math.cos(angle)*blade
          vertices.push(xx-blX,yy-.007,zz-blZ,xx+blX,yy+.009,zz+blZ,
            xx+(ox+alongX*.40)*slender,yy+oy*slender,zz+(oz+alongZ*.40)*slender)
          const frost=oy>.31 && rng()<.15 && u>.49
          const shade=frost?frosts[Math.floor(rng()*frosts.length)]:spruce
          const value=.52+rng()*.48
          colors.push(spruce.r*.48,spruce.g*.48,spruce.b*.48,
            spruce.r*value,spruce.g*value,spruce.b*value,shade.r*1.15,shade.g*1.15,shade.b*1.15)
        }
      }
    }
  }
  stock.dispose()
  const needles=new T.BufferGeometry()
  needles.setAttribute('position',new T.Float32BufferAttribute(vertices,3))
  needles.setAttribute('color',new T.Float32BufferAttribute(colors,3))
  needles.computeVertexNormals()
  const branchesGeo=mergeGeometries(wood)
  wood.forEach(g=>g.dispose())
  return { needles, branches: branchesGeo }
}

const pointVertex=`
  uniform float time;
  uniform float spread;
  uniform float floating;
  uniform float burstWidth;
  uniform float pixels;
  uniform float audio;
  uniform float garland;
  attribute vec3 drift;
  attribute vec3 color;
  attribute float seed;
  attribute float size;
  attribute float kind;
  varying vec3 vColor;
  varying float vKind;
  varying float vBurst;
  void main(){
    float s=seed*6.283185;
    vec3 target=position+drift;
    target.xz*=burstWidth;
    float expansion=mix(floating*.76,1.,spread);
    vec3 p=mix(position,target,expansion);
    p+=expansion*vec3(sin(time*.61+s)*.61,cos(time*.48+s)*.56,sin(time*.54+s)*.62);
    float wave=.5+.5*sin(time*(1.3+seed*3.)+s*4.);
    vBurst=smoothstep(0.06,.78,spread);
    float chase=pow(.5+.5*sin(position.y*1.58-time*1.85),3.);
    float sparkle=mix(.67+.68*pow(wave,2.),.93+.21*wave+.23*chase,garland);
    vColor=color*(sparkle+audio*.35)*(1.+1.38*vBurst);
    vKind=kind;
    vec4 mv=modelViewMatrix*vec4(p,1.);
    float sparkSize=size+vBurst*(3.8+5.1*seed*seed);
    gl_PointSize=clamp(sparkSize*pixels*35./max(1.,-mv.z)*(1.+audio*.045),1.,94.);
    gl_Position=projectionMatrix*mv;
  }
`
const pointFragment=`
  varying vec3 vColor;
  varying float vKind;
  varying float vBurst;
  void main(){
    vec2 p=gl_PointCoord*2.-1.;
    float r=length(p);
    float core=exp(-r*r*mix(44.,16.,vBurst));
    float halo=exp(-r*r*mix(9.,6.4,vBurst))*(1.-smoothstep(.57,1.,r));
    float glint=exp(-abs(p.x)*36.-abs(p.y)*6.)+exp(-abs(p.y)*41.-abs(p.x)*6.);
    float brightness=halo*(.66+.17*vBurst)+core*.82+glint*vKind*.64;
    if(brightness<.015)discard;
    gl_FragColor=vec4(vColor+core*.67,brightness);
    #include <colorspace_fragment>
  }
`
export function makePoints(rows, garland=false) {
  const geometry=new T.BufferGeometry()
  for(const [name,size] of [['position',3],['drift',3],['color',3],['seed',1],['size',1],['kind',1]]) {
    geometry.setAttribute(name,new T.Float32BufferAttribute(rows.flatMap(row=>row[name]),size))
  }
  const uniforms={ time:{value:0}, spread:{value:0}, floating:{value:0}, burstWidth:{value:1}, pixels:{value:1}, audio:{value:0}, garland:{value:garland?1:0} }
  const material=new T.ShaderMaterial({uniforms,vertexShader:pointVertex,fragmentShader:pointFragment,transparent:true,
    blending:T.AdditiveBlending,depthWrite:false,toneMapped:false})
  const points=new T.Points(geometry,material)
  points.frustumCulled=false
  return points
}

function particleRows(count, config) {
  const rng=random(4618)
  const burstRng=random(28749)
  const tints=[config.primary,config.accent,'#fff2d5','#a6defb'].map(color)
  return Array.from({length:count},()=>{
    const t=Math.pow(rng(),1.36)*.99
    const angle=rng()*TAU, r=widthAt(t)*(.55+rng()*.49)
    const y=startY+height*t+(rng()-.5)*.43
    const x=Math.cos(angle)*r,z=Math.sin(angle)*r
    const p=rng(), bright=rng()
    const tint=tints[p<.62?0:p<.80?1:p<.92?2:3].clone().multiplyScalar(.14+bright*.58)
    const target=burstTarget(burstRng)
    return {
      position:[x,y,z],drift:[target.x-x,target.y-y,target.z-z],
      color:tint.toArray(), seed:rng(), size:.72+bright*bright*(bright>.978?11.4:4.5),kind:bright>.989?.62:0,
    }
  })
}

function curveLine(curve, radius, material, segments=96, sides=5) {
  return new T.Mesh(new T.TubeGeometry(curve,segments,radius,sides,false),material)
}

function garland(lite) {
  const group=new T.Group()
  const rng=random(36093)
  function location(t, braid=0) {
    const k=.088+.876*t
    const a=t*TAU*7.15
    const twist=t*TAU*35
    const r=widthAt(k)*1.025+.095+Math.cos(a*2+.8)*.07+Math.cos(twist)*braid
    const y=startY+height*k+Math.sin(a*2+.9)*.115+Math.sin(twist)*braid
    return new T.Vector3(Math.cos(a)*r,y,Math.sin(a)*r)
  }
  const makeCurve=braid=>new T.CatmullRomCurve3(Array.from({length:420},(_,i)=>location(i/419,braid)))
  const curve=makeCurve(.034)
  const secondary=makeCurve(-.034)
  const gold=new T.MeshStandardMaterial({color:'#f3ad56',metalness:.64,roughness:.31,emissive:'#ffad48',emissiveIntensity:.79})
  const champagne=new T.MeshStandardMaterial({color:'#dbad72',metalness:.67,roughness:.34,emissive:'#ffd89e',emissiveIntensity:.40})
  const segments=lite?490:720
  group.add(curveLine(curve,.019,gold,segments,5),curveLine(secondary,.012,champagne,segments,5))
  const bulbs=[]
  const colors=['#ffc774','#ffdf9e','#fff0c6','#ff9295','#83ead7'].map(color)
  const count=lite?218:326
  for(let i=0;i<count;i++) {
    const progress=i/(count-1)
    const pos=(i%3===0?secondary:curve).getPointAt(progress)
    const accent=i%11===4 || i%11===8
    const glint=i%23===0
    const tint=colors[glint?2:accent?(i%2?3:4):i%3===0?1:0]
    bulbs.push({position:pos.toArray(),drift:[0,0,0],color:tint.clone().multiplyScalar(glint?1.78:1.39).toArray(),
      seed:rng(),size:glint?21:accent?11.6:8.1+rng()*3.8,kind:glint?.85:accent?.10:0})
  }
  const points=makePoints(bulbs,true)
  group.add(points)
  return { group, points, materials:[gold,champagne] }
}

function star() {
  const group=new T.Group()
  group.position.y=startY+height+.57
  const geom=new T.BufferGeometry()
  const vertices=[], colors=[]
  const rim=color('#ffb453').multiplyScalar(1.52), highlight=color('#fff0bf').multiplyScalar(2.8)
  const center=[0,0,.29], back=[0,0,-.29]
  const tips=Array.from({length:10},(_,i)=>{
    const a=Math.PI/2+i*TAU/10, r=i%2?.425:.985
    return [Math.cos(a)*r,Math.sin(a)*r,0]
  })
  for(let i=0;i<10;i++) {
    const a=tips[i], b=tips[(i+1)%10]
    vertices.push(...center,...a,...b,...back,...b,...a)
    const face=i%2?rim:highlight
    colors.push(...face.toArray(),...highlight.toArray(),...rim.toArray(),
      ...face.toArray(),...rim.toArray(),...highlight.toArray())
  }
  geom.setAttribute('position',new T.Float32BufferAttribute(vertices,3))
  geom.setAttribute('color',new T.Float32BufferAttribute(colors,3))
  geom.computeVertexNormals()
  const material=new T.MeshStandardMaterial({color:'#ffd48c',vertexColors:true,emissive:'#ff9d47',emissiveIntensity:.87,
    metalness:.45,roughness:.24,side:T.DoubleSide})
  const mesh=new T.Mesh(geom,material)
  const glow=makePoints([{position:[0,0,.05],drift:[0,0,0],color:color('#ffc77d').multiplyScalar(.86).toArray(),seed:.4,size:104,kind:.74}])
  const lamp=new T.PointLight('#ffc179',13,12,2)
  group.add(mesh,glow,lamp)
  return { group,mesh,glow,lamp }
}

function seedInstances(geometry, material, capacity) {
  const mesh=new T.InstancedMesh(geometry,material,capacity)
  mesh.instanceMatrix.setUsage(T.DynamicDrawUsage)
  mesh.frustumCulled=false
  return mesh
}

function place(mesh, i, x,y,z,sx,sy,sz, ax=0,ay=0,az=0) {
  dummy.position.set(x,y,z)
  dummy.rotation.set(ax,ay,az)
  dummy.scale.set(sx,sy,sz)
  dummy.updateMatrix()
  mesh.setMatrixAt(i,dummy.matrix)
}

function ornamentMotion(home, rng, lift) {
  const target=burstTarget(rng)
  target.y=Math.max(startY+.3,target.y)
  const axis=new T.Vector3(rng()-.5,rng()-.5,rng()-.5).normalize()
  return {home,target,axis,spin:(.55+rng()*1.9)*(rng()<.5?-1:1),lift}
}

function animateOrnaments(parts, motion) {
  const matrices=parts.map(([mesh,stride=1])=>({mesh,stride,home:mesh.instanceMatrix.array.slice()}))
  const transform=new T.Matrix4(), component=new T.Matrix4()
  const position=new T.Vector3(), translatedOrigin=new T.Vector3(), rotation=new T.Quaternion()
  let lastSpread=0, lastWidth=1, lastCount=0
  return (count,spread,width)=>{
    if(spread===lastSpread && width===lastWidth && count===lastCount)return
    if(spread===0) {
      if(lastSpread!==0)for(const {mesh,home} of matrices) {
        mesh.instanceMatrix.array.set(home)
        mesh.instanceMatrix.needsUpdate=true
      }
    } else {
      const rise=Math.sin(spread*Math.PI)
      for(let i=0;i<count;i++) {
        const {home,target,axis,spin,lift}=motion[i]
        position.set(
          T.MathUtils.lerp(home.x,target.x*width,spread),
          T.MathUtils.lerp(home.y,target.y,spread)+rise*lift,
          T.MathUtils.lerp(home.z,target.z*width,spread),
        )
        rotation.setFromAxisAngle(axis,spin*spread)
        translatedOrigin.copy(home).applyQuaternion(rotation)
        transform.makeRotationFromQuaternion(rotation).setPosition(position.sub(translatedOrigin))
        for(const {mesh,stride,home:rest} of matrices) {
          for(let part=0;part<stride;part++) {
            const instance=i*stride+part
            component.fromArray(rest,instance*16).premultiply(transform)
            mesh.setMatrixAt(instance,component)
          }
        }
      }
      for(const {mesh} of matrices)mesh.instanceMatrix.needsUpdate=true
    }
    lastSpread=spread
    lastWidth=width
    lastCount=count
  }
}

function decorations(lite) {
  const rng=random(69917)
  const burstRng=random(86147)
  const boxes=new T.Group(), baubles=new T.Group()
  const ballMaterial=new T.MeshPhysicalMaterial({metalness:.74,roughness:.22,clearcoat:.8,clearcoatRoughness:.13,envMapIntensity:1.25})
  const metal=new T.MeshStandardMaterial({color:'#f7bb64',metalness:.79,roughness:.29,envMapIntensity:1.22})
  const wrap=new T.MeshStandardMaterial({roughness:.48,metalness:.37,envMapIntensity:.95})
  const ribbon=new T.MeshStandardMaterial({roughness:.34,metalness:.52,envMapIntensity:1.15})
  const caps=seedInstances(new T.CylinderGeometry(.49,.55,.38,9),metal,600)
  const balls=seedInstances(new T.SphereGeometry(1,lite?9:14,lite?7:10),ballMaterial,600)
  const bands=seedInstances(new T.TorusGeometry(1.005,.026,5,14),metal,600)
  const packageWrap=seedInstances(new T.BoxGeometry(1,1,1),wrap,600)
  const ribbonA=seedInstances(new T.BoxGeometry(1,1,1),ribbon,600)
  const ribbonB=seedInstances(new T.BoxGeometry(1,1,1),ribbon,600)
  const knots=seedInstances(new T.TorusGeometry(.26,.085,6,10),ribbon,1200)
  const ballRows=[], boxRows=[], ballMotion=[], boxMotion=[]
  for(let i=0;i<600;i++) {
    const k=.112+Math.pow(rng(),1.14)*.79, a=rng()*TAU
    const r=widthAt(k)*(.86+rng()*.16), s=(i<30?.17:.08)+Math.pow(rng(),1.7)*(i<30?.20:.16)
    const [x,y,z]=[Math.cos(a)*r,startY+height*k,Math.sin(a)*r]
    place(balls,i,x,y,z,s,s*(.92+rng()*.15),s)
    place(caps,i,x,y+s*.97,z,s,s,s)
    place(bands,i,x,y,z,s,s,s,Math.PI*.5,0,rng()*.25)
    ballRows.push(rng())
    ballMotion.push(ornamentMotion(new T.Vector3(x,y,z),burstRng,.53))
    const crowd=i%9
    const angle=crowd*TAU/9+(rng()-.5)*(.45+(i%4)*.045)
    const dist=3.4+Math.pow(rng(),.73)*(2.75+(crowd%3)*.49)
    const bx=Math.cos(angle)*dist, bz=Math.sin(angle)*dist
    const size=i<26?.45+rng()*.72:.12+rng()*.36
    const tall=size*(.47+rng()*.62), by=startY-.41+tall*.5+(i%27===0 && i>12?.29:0)
    const rot=rng()*TAU
    place(packageWrap,i,bx,by,bz,size,tall,size,0,rot)
    place(ribbonA,i,bx,by,bz,size*.17,tall*1.017,size*1.014,0,rot)
    place(ribbonB,i,bx,by,bz,size*1.014,tall*1.019,size*.14,0,rot)
    for(let n=0;n<2;n++){
      const sgn=n?1:-1
      place(knots,i*2+n,bx+Math.cos(rot)*sgn*size*.13,by+tall*.57,
        bz-Math.sin(rot)*sgn*size*.13,size*.66,size*.44,size*.6,Math.PI*.44,0,sgn*.26)
    }
    boxRows.push(rng())
    boxMotion.push(ornamentMotion(new T.Vector3(bx,by,bz),burstRng,1.8))
  }
  boxes.add(packageWrap,ribbonA,ribbonB,knots)
  baubles.add(balls,caps,bands)
  const animateBalls=animateOrnaments([[balls],[caps],[bands]],ballMotion)
  const animateBoxes=animateOrnaments([[packageWrap],[ribbonA],[ribbonB],[knots,2]],boxMotion)
  function update(config) {
    const gold=color(config.bellColor), cranberry=color('#a22642'), ivory=color('#edf0d7'), glass=color('#387e84')
    const red=color(config.box1), green=color(config.box2), honey=color('#f6c979'), pearl=color('#e5eee0')
    for(let i=0;i<config.bells;i++){
      const k=ballRows[i]
      balls.setColorAt(i,k<.42?gold:k<.68?cranberry:k<.84?ivory:glass)
    }
    for(let i=0;i<config.boxes;i++){
      const k=boxRows[i], tint=k>.86?pearl:k>.49?green:red
      packageWrap.setColorAt(i,tint)
      ribbonA.setColorAt(i,k>.86?red:honey)
      ribbonB.setColorAt(i,k>.86?red:honey)
      knots.setColorAt(i*2,k>.86?red:honey)
      knots.setColorAt(i*2+1,k>.86?red:honey)
    }
    balls.count=caps.count=config.bells
    bands.count=config.bells
    packageWrap.count=ribbonA.count=ribbonB.count=config.boxes
    knots.count=config.boxes*2
    for(const mesh of [balls,packageWrap,ribbonA,ribbonB,knots]) if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true
  }
  return { boxes, baubles, update, frame(spread,width) {
    animateBalls(balls.count,spread,width)
    animateBoxes(packageWrap.count,spread,width)
  } }
}

export function makeTree(lite, config) {
  const tree=new T.Group(), body=new T.Group()
  const branch=needleGeometry(lite)
  const needleMaterial=new T.MeshStandardMaterial({vertexColors:true,roughness:.88,side:T.DoubleSide,envMapIntensity:.72})
  const wood=new T.MeshStandardMaterial({color:'#433327',roughness:.93})
  const branchWood=wood.clone()
  const dissolve={value:0}
  dissolveDuringBurst(needleMaterial,dissolve)
  dissolveDuringBurst(branchWood,dissolve)

  // 主题染色：把原本的墨绿针叶往主题色混合，保留明暗层次
  const needleTint={value:new T.Color('#ffffff')}
  const needleAmount={value:0}
  const baseNeedleCompile=needleMaterial.onBeforeCompile
  needleMaterial.onBeforeCompile=shader=>{
    baseNeedleCompile(shader)
    shader.uniforms.needleTint=needleTint
    shader.uniforms.needleAmount=needleAmount
    shader.fragmentShader=shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 needleTint;\nuniform float needleAmount;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        if(needleAmount>0.001){
          float tone=clamp(diffuseColor.g*2.1+0.18,0.0,1.0);
          diffuseColor.rgb=mix(diffuseColor.rgb,needleTint*(0.44+0.56*tone),needleAmount);
        }
      `)
  }
  needleMaterial.customProgramCacheKey=()=> 'needle-theme'

  const foliage=new T.Group()
  foliage.add(new T.Mesh(branch.branches,branchWood),new T.Mesh(branch.needles,needleMaterial))
  const trunk=new T.Mesh(new T.CylinderGeometry(.13,.28,2.55,9),wood)
  trunk.position.y=startY+.68
  body.add(trunk,foliage)
  const bulbs=garland(lite), topper=star(), jewelry=decorations(lite)
  body.add(bulbs.group,topper.group,jewelry.baubles,jewelry.boxes)
  tree.add(body)

  function setTheme(theme) {
    if(!theme)return
    needleTint.value.set(theme.needleTint||'#ffffff')
    needleAmount.value=theme.needleAmount??0
    needleMaterial.emissive.set(theme.needleEmissive||'#000000')
    needleMaterial.emissiveIntensity=(theme.needleAmount??0)>0?.22:0
    const starColor=new T.Color(theme.star||'#ffd48c')
    topper.mesh.material.color.copy(starColor)
    topper.mesh.material.emissive.copy(starColor)
    topper.lamp.color.copy(starColor)
    bulbs.materials?.forEach((material,index)=>{
      const tint=new T.Color(index?theme.pale:theme.garland)
      material.color.copy(tint)
      material.emissive.copy(tint)
    })
  }

  let particles, previous
  function update(settings) {
    if(!previous || ['particles','primary','accent'].some(key=>previous[key]!==settings[key])) {
      if(particles) {tree.remove(particles);particles.geometry.dispose();particles.material.dispose()}
      particles=makePoints(particleRows(settings.particles,settings))
      tree.add(particles)
    }
    if(!previous || ['boxes','bells','box1','box2','bellColor'].some(key=>previous[key]!==settings[key])) jewelry.update(settings)
    previous={...settings}
  }
  update(config)
  return {
    root:tree, update, setTheme,
    frame({time,dt,spread,burstWidth,floating,audio,pixels,reduce}) {
      if(!reduce && floating<.05) tree.rotation.y+=dt*.12
      body.visible=floating<.98
      const size=Math.max(.001,1-floating)
      body.scale.setScalar(size)
      body.position.y=(1-size)*-.45
      dissolve.value=T.MathUtils.smoothstep(spread,.04,.61)
      foliage.visible=dissolve.value<1
      const crownWidth=1+.21*dissolve.value
      foliage.scale.set(crownWidth,1,crownWidth)
      if(body.visible)jewelry.frame(spread,burstWidth)
      topper.mesh.rotation.y=reduce?.07:Math.sin(time*.54)*.7
      topper.mesh.rotation.z=reduce?.04:Math.sin(time*.61)*.085
      topper.group.scale.setScalar(1+audio*.19)
      topper.lamp.intensity=3+audio*12
      for(const points of [particles,bulbs.points,topper.glow]) {
        const u=points.material.uniforms
        u.time.value=time;u.pixels.value=pixels;u.audio.value=audio
      }
      const u=particles.material.uniforms
      u.spread.value=spread;u.floating.value=floating;u.burstWidth.value=burstWidth
    },
  }
}

export { startY }
