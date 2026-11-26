import * as T from 'three'
import { random } from './random'

const screenVertex = `
  varying vec2 vUv;
  void main(){ vUv=uv; gl_Position=vec4(position.xy, 1.0, 1.0); }
`

const skyFragment = `
  uniform float time;
  uniform float aspect;
  uniform float mobile;
  uniform float lightweight;
  uniform vec3 auroraA;
  uniform vec3 auroraB;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i=floor(p), f=fract(p);
    vec2 u=f*f*(3.-2.*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
  }
  float clouds(vec2 p){
    return .54*noise(p)+.25*noise(p*2.1)+.12*noise(p*4.2)+.06*noise(p*8.4);
  }
  vec3 curtain(vec2 p,float id){
    float x=p.x;
    float arc=.69+id*.115+.113*sin(x*2.3+id*1.26+time*.062)
      +.065*sin(x*5.5+id*2.4-time*.075)+.036*sin(x*10.8+id*.8+time*.09);
    float height=p.y-arc;
    float folds=x+.038*sin(10.*x+time*.15+id*2.)+.018*sin(p.y*5.+x*14.);
    float ribs=pow(.15+.85*noise(vec2(folds*75.,id*5.3)),1.6);
    float fine=noise(vec2(folds*220.,p.y*8.+time*.09));
    float vein=sin(folds*63.+id*7.)*.5+.5;
    float band=exp(-abs(height)*56.);
    float rays=smoothstep(-.035,.025,height)*exp(-max(height,0.)*7.5);
    float envelope=smoothstep(-.83,-.47,x)*(1.-smoothstep(.55,1.16,x));
    float variation=.28+.72*clouds(vec2(x*8.+id*9.,time*.14));
    vec3 teal=mix(auroraA*.52,auroraA,pow(band,1.5));
    vec3 violet=auroraB;
    vec3 shade=mix(teal,violet,smoothstep(.025,.17,height)*(.55+.42*sin(x*4.+id)*sin(x*4.+id)));
    return (shade*(band*(.45+.33*fine)+rays*(.17+1.9*ribs*mix(.4,1.,vein)))+
      auroraA*.06*exp(-abs(height)*16.))*variation*envelope*(1.-id*.16);
  }
  float starfield(vec2 p,float grids,float cutoff) {
    vec2 g=p*grids, cell=floor(g), f=fract(g)-.5;
    float h=hash(cell+grids);
    vec2 s=vec2(hash(cell+56.),hash(cell-22.))-.5;
    float d=length(f-s*.70);
    return smoothstep(cutoff,1.,h) * (exp(-d*d*820.)+.19*exp(-d*d*115.))
      * (.82+.18*sin(time*.64+h*110.));
  }
  void main(){
    vec2 uv=vUv;
    vec2 p=vec2((uv.x-.5)*mix(clamp(aspect,.82,2.1),1.30,mobile),uv.y);
    vec3 c=mix(vec3(.045,.135,.191),vec3(.012,.028,.068),smoothstep(.13,.96,uv.y));
    c+=vec3(.037,.026,.092)*exp(-length((uv-vec2(.76,.72))*vec2(2.,3.))*2.);
    c+=vec3(.009,.044,.054)*clouds(vec2(p.x*6.,p.y*11.))*sin(uv.y*3.1);
    vec2 st=vec2(uv.x*aspect,uv.y);
    float stars=starfield(st,mix(163.,102.,lightweight),.73)*.63+starfield(st,mix(73.,48.,lightweight),.94)*.92;
    c+=vec3(.58,.76,1.)*stars*smoothstep(.16,.48,uv.y);
    vec2 a=p;
    a.y+=.20*a.x+.035*sin(a.x*6.+time*.05);
    vec3 lights=curtain(a,0.)*.67+curtain(a+vec2(.25,.16),1.)*.57;
    if(lightweight<.5)lights+=curtain(a-vec2(.20,.002),2.)*.35;
    c+=lights*smoothstep(.28,.57,uv.y);
    vec2 moon=(uv-vec2(mix(.88,.82,mobile),.827))*vec2(aspect,1.);
    float moonR=length(moon);
    float moonMask=1.-smoothstep(.014,.015,moonR);
    vec2 moonSurface=moon*68.;
    float moonLight=.54+.28*clouds(moonSurface*8.)+.24*sqrt(max(0.,1.-length(moonSurface)));
    float crescent=smoothstep(.015,.023,length(moon-vec2(.008,.004)));
    c+=vec3(.73,.80,.82)*moonMask*moonLight*(.09+.91*crescent);
    c+=vec3(.16,.22,.31)*exp(-moonR*31.)*.48;
    float grain=hash(gl_FragCoord.xy+fract(time)*.001)-.5;
    gl_FragColor=vec4(pow(max(c+grain*.013,0.),vec3(2.45)),1.);
    #include <colorspace_fragment>
  }
`

export function makeSky(lite) {
  const scene = new T.Scene()
  const camera = new T.Camera()
  const quad = new T.PlaneGeometry(2, 2)
  const uniforms = { time:{value:0}, aspect:{value:1}, mobile:{value:0}, lightweight:{value:lite?1:0},
    auroraA:{value:new T.Color().setRGB(.075,.90,.61)},
    auroraB:{value:new T.Color().setRGB(.38,.095,.62)},
  }
  const sky = new T.Mesh(quad, new T.ShaderMaterial({ uniforms, vertexShader:screenVertex, fragmentShader:skyFragment, depthTest:false, depthWrite:false }))
  sky.frustumCulled = false
  scene.add(sky)
  const texture = new T.CanvasTexture(document.createElement('canvas'))
  texture.colorSpace = T.SRGBColorSpace
  const terrain = new T.Mesh(quad, new T.ShaderMaterial({
    uniforms:{ image:{value:texture} }, vertexShader:screenVertex,
    fragmentShader:'uniform sampler2D image; varying vec2 vUv; void main(){gl_FragColor=texture2D(image,vUv); #include <colorspace_fragment> }'.replace('#include', '\n#include').replace('> }','>\n}'),
    transparent:true, depthTest:false, depthWrite:false,
  }))
  terrain.frustumCulled = false
  terrain.renderOrder = 1
  scene.add(terrain)
  return {
    scene, camera, uniforms,
    resize(width, height) {
      uniforms.aspect.value = width / height
      uniforms.mobile.value = width < 760 ? 1 : 0
      drawTerrain(texture.image, width, height, lite)
      texture.needsUpdate = true
    },
    dispose() { quad.dispose(); sky.material.dispose(); terrain.material.dispose(); texture.dispose() },
  }
}

function drawTerrain(canvas, width, height, lite) {
  const scale = Math.min(1.6, devicePixelRatio || 1)
  canvas.width = Math.round(width*scale)
  canvas.height = Math.round(height*scale)
  const ctx = canvas.getContext('2d')
  ctx.scale(scale, scale)
  const w=width, h=height, rng=random(8072), narrow=w<760
  const horizon = narrow ? .585 : .694
  const fill= (points, color) => {
    ctx.fillStyle=color
    ctx.beginPath()
    points.forEach(([x,y],i) => i ? ctx.lineTo(x*w,y*h) : ctx.moveTo(x*w,y*h))
    ctx.closePath()
    ctx.fill()
  }

  const ranges = [
    { offset:0, height: .17, color:'#152e44', snow:'#456274', shade:'#1c384c', haze:'#163644' },
    { offset:.034, height:.121, color:'#132b3c', snow:'#3c5969', shade:'#152e3e', haze:'#142d3c' },
    { offset:.068, height:.086, color:'#0e2634', snow:'#294854', shade:'#102a39', haze:'#122b38' },
  ]
  for(const [index, layer] of ranges.entries()) {
    const base=horizon-.052+layer.offset
    const outline=[[-.14,base]]
    const faces=[]
    let x=-.16+index*.03
    while(x<1.21) {
      const span=.067+rng()*.18, elevation=layer.height*(.38+rng()*.68)
      const peak=x+span*(.30+rng()*.28), top=base-elevation
      const left=[x,base-.003], tip=[peak,top], right=[x+span,base]
      const a=[x+(peak-x)*.57,base-elevation*.51], b=[peak+(x+span-peak)*.26,base-elevation*.69]
      const c=[peak+(x+span-peak)*.58,base-elevation*.36]
      outline.push(left,a,tip,b,c,right)
      faces.push({left,tip,right,a,b,c,elevation,span})
      x+=span*.87
    }
    const body=ctx.createLinearGradient(0,(base-layer.height)*h,0,(base+.06)*h)
    body.addColorStop(0,layer.color)
    body.addColorStop(1,layer.haze)
    fill([...outline,[1.2,horizon+.1],[-.2,horizon+.1]],body)
    for(const {tip,right,a,b,c,elevation,span} of faces) {
      const [px,py]=tip
      const ridge=[px+span*.13,py+elevation*.75]
      fill([tip,b,c,right,ridge,[px+span*.024,py+elevation*.31]], layer.shade)
      ctx.globalAlpha=.69
      fill([a,tip,b,[px+span*.045,py+elevation*.22],[px+span*.059,py+elevation*.45],
        [px-span*.013,py+elevation*.34],[px-span*.064,py+elevation*.51],
        [px-span*.082,py+elevation*.43]],layer.snow)
      ctx.globalAlpha=.27
      fill([tip,[px+span*.018,py+elevation*.27],ridge,[px+span*.085,py+elevation*.55],b],layer.snow)
      ctx.globalAlpha=1
    }
  }

  function pine(x,y,height,color,widthFactor) {
    const half=height*widthFactor
    ctx.fillStyle=color
    ctx.beginPath()
    ctx.moveTo(x,y-height)
    for(let i=1;i<=7;i++) {
      const k=i/7, yy=y-height+height*k*.94, xx=half*k
      ctx.lineTo(x-xx,yy)
      ctx.lineTo(x-xx*.55,yy-height*.028)
    }
    ctx.lineTo(x-half*.12,y)
    ctx.lineTo(x+half*.12,y)
    for(let i=7;i>0;i--) {
      const k=i/7, yy=y-height+height*k*.94, xx=half*k
      ctx.lineTo(x+xx*.5,yy-height*.023)
      ctx.lineTo(x+xx,yy+height*.027)
    }
    ctx.closePath()
    ctx.fill()
  }
  for(let row=0;row<3;row++) {
    const y=h*(horizon+row*.018)
    const color=['#193647','#102b3a','#0a2331'][row]
    for(let x=-20;x<w+20;x+=4+rng()*10) {
      const slope=Math.pow(Math.abs(x/w-.57)*1.75,1.5)
      pine(x,y+rng()*h*.017+Math.sin(x/w*9+row)*h*.013,(.012+rng()*.039)*(1+slope*.62)*h,color,.18+rng()*.12)
    }
  }

  const snow=ctx.createLinearGradient(0,(horizon+.022)*h,0,h)
  snow.addColorStop(0,'#163543')
  snow.addColorStop(.18,'#213e4b')
  snow.addColorStop(.54,'#142b3c')
  snow.addColorStop(1,'#05111e')
  fill([[-.1,horizon+.034],[.04,horizon+.043],[.2,horizon+.025],[.35,horizon+.047],[.55,horizon+.038],[.74,horizon+.045],[.9,horizon+.023],[1.1,horizon+.041],[1.1,1],[-.1,1]],snow)

  for(let j=0;j<12;j++) {
    const y=h*(horizon+.055+j*.021)
    const drift=ctx.createLinearGradient(0,y,0,y+h*.030)
    drift.addColorStop(0,'rgba(119,170,184,0)')
    drift.addColorStop(.45,'rgba(119,170,184,.09)')
    drift.addColorStop(1,'rgba(119,170,184,0)')
    ctx.fillStyle=drift
    ctx.beginPath()
    ctx.moveTo(-20,y)
    ctx.bezierCurveTo(w*.26,y-h*.016,w*.69,y+h*.029,w+20,y-h*.006)
    ctx.lineTo(w+20,y+h*.018)
    ctx.bezierCurveTo(w*.6,y+h*.04,w*.3,y+h*.012,-20,y+h*.026)
    ctx.fill()
  }
  for(let i=0;i<(lite?3200:13500);i++) {
    const x=rng()*w, y=h*(horizon+.05+rng()*(.95-horizon))
    const depth=(y/h-horizon)*3
    ctx.fillStyle=rng()<.5?'rgba(161,199,212,.10)':'rgba(0,13,29,.15)'
    ctx.fillRect(x,y,(.2+rng()*4.6)*depth,.3+depth*rng())
  }
  for(let i=0;i<34;i++) {
    const side=i%2, x=(side ? .84+rng()*.19 : rng()*.18-.01)*w
    const y=h*(horizon+.039+rng()*.025)
    pine(x,y,h*(.022+rng()*.057)*(narrow?.8:1),side?'#0a202d':'#0b202c',.19+rng()*.09)
  }
  const vignette=ctx.createLinearGradient(0,h*.78,0,h)
  vignette.addColorStop(0,'rgba(3,10,18,0)')
  vignette.addColorStop(1,'rgba(3,10,18,.61)')
  ctx.fillStyle=vignette
  ctx.fillRect(0,h*.78,w,h*.22)
}
