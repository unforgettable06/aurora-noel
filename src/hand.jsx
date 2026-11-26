import { useEffect, useRef, useState } from 'react'
import { Camera, ChevronDown, ChevronUp } from 'lucide-react'
import { createHandTracker, idleHand } from './hand-gesture'

const handLinks=[
  [0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],
  [9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20],
]
let handsScript
// 单文件版会把模型资源以 Blob URL 注入到 window.__MEDIAPIPE_ASSETS__
const embeddedAssets=()=>window.__MEDIAPIPE_ASSETS__
function mediapipeUrl(file){
  const embedded=embeddedAssets()
  return embedded&&embedded[file]?embedded[file]:import.meta.env.BASE_URL+'mediapipe/hands/'+file
}
function loadHands() {
  if(!handsScript)handsScript=new Promise((resolve,reject)=>{
    const script=document.createElement('script')
    script.src=mediapipeUrl('hands.js')
    script.onload=resolve
    script.onerror=()=>{script.remove();handsScript=undefined;reject(new Error('MediaPipe failed to load'))}
    document.head.append(script)
  })
  return handsScript
}

export function HandController({ currentHand, onStatus }) {
  const videoRef=useRef(null), canvasRef=useRef(null), ring=useRef(null)
  const [expanded,setExpanded]=useState(true)
  const [status,setStatus]=useState('loading')
  useEffect(()=>{
    let stream, engine, interval, cancelled=false, sending=false, lastTime=-1
    const trackHand=createHandTracker()
    const video=videoRef.current, canvas=canvasRef.current, context=canvas.getContext('2d')
    const updateStatus=value=>{if(!cancelled){setStatus(value);onStatus(value)}}
    function publish(value) {
      currentHand.current=value
      if(ring.current){
        ring.current.style.display=value.present && value.gesture!=='fist'?'block':'none'
        ring.current.style.left=value.x*100+'%'
        ring.current.style.top=value.y*100+'%'
        ring.current.dataset.pinch=value.pinch?'true':'false'
      }
    }
    function stopStream() {
      stream?.getTracks().forEach(track=>track.stop())
      video.srcObject=null
    }
    function closeEngine() {
      if(engine && !sending) {
        const active=engine
        engine=null
        Promise.resolve(active.close()).catch(()=>{})
      }
    }
    function handleError() {
      if(cancelled)return
      clearInterval(interval)
      stopStream()
      publish(idleHand)
      updateStatus('error')
      closeEngine()
    }
    function onResults(results) {
      if(cancelled)return
      const handMarks=results.multiHandLandmarks||[]
      const handWorld=results.multiHandWorldLandmarks||[]
      const w=video.videoWidth,h=video.videoHeight
      if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h}
      publish(trackHand(handMarks,handWorld,w/Math.max(1,h),performance.now()))
      if(!context)return
      context.clearRect(0,0,w,h)
      if(!handMarks.length)return
      for(let index=0;index<handMarks.length;index++){
        const marks=handMarks[index]
        context.strokeStyle=index===0?'#71f0ba':'#8fb8ff'
        context.lineWidth=2
        context.beginPath()
        for(const [a,b] of handLinks){
          context.moveTo(marks[a].x*w,marks[a].y*h)
          context.lineTo(marks[b].x*w,marks[b].y*h)
        }
        context.stroke()
        context.fillStyle=index===0?'#ffe3a8':'#cfe6ff'
        for(const p of marks){
          context.beginPath()
          context.arc(p.x*w,p.y*h,2.7,0,Math.PI*2)
          context.fill()
        }
      }
    }
    async function start() {
      if(location.protocol==='file:'&&!embeddedAssets()){
        updateStatus('local')
        return
      }
      updateStatus('loading')
      try {
        if(!navigator.mediaDevices?.getUserMedia)throw new Error('Camera unavailable')
        stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480}},audio:false})
        if(cancelled){stopStream();return}
        video.srcObject=stream
        await Promise.all([loadHands(),video.play()])
        if(cancelled)return
        engine=new window.Hands({locateFile:file=>mediapipeUrl(file)})
        engine.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.54,minTrackingConfidence:.5})
        engine.onResults(onResults)
        sending=true
        try{await engine.initialize()}finally{sending=false;if(cancelled)closeEngine()}
        if(cancelled)return
        updateStatus('ready')
        interval=setInterval(async()=>{
          if(cancelled||sending||video.readyState<2||lastTime===video.currentTime)return
          lastTime=video.currentTime
          sending=true
          try{await engine.send({image:video})}
          catch{handleError()}
          finally{sending=false;if(cancelled||!video.srcObject)closeEngine()}
        },75)
      } catch { handleError() }
    }
    start()
    return ()=>{
      cancelled=true
      clearInterval(interval)
      stopStream()
      closeEngine()
      currentHand.current=idleHand
    }
  },[currentHand,onStatus])
  const message={loading:'手势引擎加载中',ready:'手势识别中',error:'摄像头不可用',local:'需网址访问'}[status]
  return <>
    <span className="hand-cursor" ref={ring} aria-hidden="true" />
    <aside className="hand-preview" aria-label="手势摄像头">
      <div className="camera-feed" hidden={!expanded}>
        <video ref={videoRef} muted autoPlay playsInline />
        <canvas ref={canvasRef} />
        <span className={'camera-message '+status}>{message}</span>
      </div>
      <button type="button" className="camera-toggle" onClick={()=>setExpanded(v=>!v)} aria-expanded={expanded}>
        <Camera size={14}/>{expanded?'收起画面':message}{expanded?<ChevronDown size={13}/>:<ChevronUp size={13}/>}
      </button>
      <div className="gesture-quick" aria-label="手势功能速查">
        <span><b>食指</b> 光标</span>
        <span><b>捏合</b> 看图</span>
        <span><b>张手</b> 星光</span>
        <span><b>握拳</b> 暂停</span>
      </div>
    </aside>
  </>
}
