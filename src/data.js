import { random } from './random'

const database = 'christmas-tree'
const store = 'gallery'
export function photoStorage(action, value) {
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open(database,1)
    request.onupgradeneeded=()=>{
      if(!request.result.objectStoreNames.contains(store))request.result.createObjectStore(store,{keyPath:'id'})
    }
    request.onerror=()=>reject(request.error)
    request.onsuccess=()=>{
      const db=request.result
      const tx=db.transaction(store,action==='getAll'?'readonly':'readwrite')
      const table=tx.objectStore(store)
      const result=action==='getAll'?table.getAll():table[action](value)
      tx.oncomplete=()=>{ db.close(); resolve(result.result) }
      tx.onabort=tx.onerror=()=>{ db.close(); reject(tx.error??result.error) }
    }
  })
}

const palettes=[
  ['#162c36','#37666b','#badcd3','#f5d7a1'],
  ['#301b39','#77425a','#d99894','#f1c393'],
  ['#102746','#305b7a','#a4c9d5','#dfdafa'],
  ['#15302f','#406553','#96b7a2','#e9ce93'],
]
export function defaultPhotos() {
  return palettes.concat(palettes).map(([night,dusk,snow,moon],index)=>{
    const canvas=document.createElement('canvas')
    const size=360
    canvas.width=canvas.height=size
    const c=canvas.getContext('2d')
    const r=random(index+891)
    const bg=c.createLinearGradient(0,0,0,size)
    bg.addColorStop(0,night)
    bg.addColorStop(.76,dusk)
    bg.addColorStop(1,snow)
    c.fillStyle=bg
    c.fillRect(0,0,size,size)
    c.fillStyle=moon
    for(let i=0;i<85;i++){
      c.globalAlpha=.12+r()*.64
      c.fillRect(r()*size,r()*210,.6+r()*1.7,.6+r()*1.7)
    }
    c.globalAlpha=1
    c.beginPath()
    c.arc(81+r()*200,83+r()*61,21+r()*22,0,Math.PI*2)
    c.fill()
    for(let j=0;j<3;j++){
      c.fillStyle=j===2?night:j===1?dusk:snow
      c.globalAlpha=.78+j*.08
      c.beginPath()
      c.moveTo(-40,243+j*24)
      for(let x=-35;x<410;x+=28+r()*43){
        c.lineTo(x,215+j*26-r()*(85-j*20))
        c.lineTo(x+30,245+j*20-r()*31)
      }
      c.lineTo(390,360)
      c.lineTo(0,360)
      c.fill()
    }
    c.globalAlpha=1
    c.strokeStyle=moon
    c.lineWidth=1
    c.strokeRect(15,15,330,330)
    c.fillStyle='#fff2d3'
    c.font='11px Georgia'
    c.textAlign='center'
    c.letterSpacing='3px'
    c.fillText('CHRISTMAS '+String(index+1).padStart(2,'0'),180,322)
    return {id:'default-'+(index+1),name:'冬夜 '+(index+1),url:canvas.toDataURL('image/webp',.84),default:true}
  })
}

export function localRead(key,fallback) {
  try { return JSON.parse(localStorage.getItem(key))??fallback }
  catch { return fallback }
}
export function localWrite(key,value) {
  try { localStorage.setItem(key,JSON.stringify(value)) } catch {}
}

export function dateCountdown(now) {
  const y=now.getFullYear()
  const holiday=new Date(y,11,25)
  const festive=now>=holiday && now<new Date(y,11,26)
  if(now>=new Date(y,11,26))holiday.setFullYear(y+1)
  const seconds=Math.max(0,Math.ceil((holiday-now)/1000))
  return { festive, values:[Math.floor(seconds/86400),Math.floor(seconds/3600)%24,Math.floor(seconds/60)%60,seconds%60] }
}
