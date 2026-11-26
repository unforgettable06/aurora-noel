import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Aperture, ArrowUpRight, ChevronRight, CircleHelp, Hand, ImagePlus, Images, Mouse,
  Music2, Pause, PenLine, Play, RotateCcw, Settings2, SkipBack, SkipForward, Snowflake, Sparkles, Trash2, TreePine, Upload, X,
} from 'lucide-react'
import { dateCountdown, defaultPhotos, localRead, localWrite, photoStorage } from './data'
import { defaultTrack, useSound } from './sound'
import { HandController } from './hand'
import { Intro } from './intro'
import { PRESET_THEMES, THEMES, getTheme } from './theme'
import './styles.css'

const lite=new URLSearchParams(location.search).has('lite')
const shareMode=typeof window!=='undefined' && Boolean(window.__AURORA_SHARE__)
const initialSettings={
  particles:lite?1500:6000,boxes:lite?80:220,bells:lite?80:220,fireworks:7,
  ...THEMES.silver.settings,
}
const emptyHand={x:.5,y:.5,present:false,gesture:'idle'}
const storageKeys={name:'aurora-noel:name',removed:'ct_removed_defaults',quality:'aurora-noel:quality',theme:'aurora-noel:theme2'}
let sceneModule
const loadScene=()=>sceneModule??=import('./scene')

// 用开场动画期间的 rAF 间隔中位数估算屏幕刷新率；120Hz 屏幕才能真的看到 120 帧
function useRefreshRate() {
  const [hz,setHz]=useState(60)
  useEffect(()=>{
    let id=0,start=0,last=0,cancelled=false
    const samples=[]
    function tick(now){
      if(cancelled)return
      if(!start){start=now;last=now;id=requestAnimationFrame(tick);return}
      const dt=now-last
      last=now
      // 忽略加载卡顿和异常抖动的长帧，用中位数推断真实刷新率
      if(dt>1&&dt<70)samples.push(dt)
      if(now-start<1100){id=requestAnimationFrame(tick);return}
      samples.sort((a,b)=>a-b)
      const median=samples.length?samples[Math.floor(samples.length/2)]:16.7
      const measured=1000/median
      const rates=[60,75,90,120,144,165,240]
      const closest=rates.reduce((best,rate)=>Math.abs(rate-measured)<Math.abs(best-measured)?rate:best,60)
      setHz(measured<50?60:closest)
    }
    id=requestAnimationFrame(tick)
    return ()=>{cancelled=true;cancelAnimationFrame(id)}
  },[])
  return hz
}

function Countdown() {
  const [now,setNow]=useState(()=>new Date())
  useEffect(()=>{
    const timer=setInterval(()=>setNow(new Date()),1000)
    return ()=>clearInterval(timer)
  },[])
  const {festive,values}=dateCountdown(now)
  return <div className="countdown" aria-label="圣诞倒计时">
    <div className="countdown-label"><span/>{festive?'今天是圣诞节':'距离圣诞节'}<span/></div>
    <div className="countdown-digits">
      {values.map((value,index)=><div className="countdown-unit" key={index}>
        <strong>{String(value).padStart(2,'0')}</strong><span>{['天','时','分','秒'][index]}</span>
      </div>)}
    </div>
  </div>
}

function FileButton({ accept, multiple, onFiles, children, className='' }) {
  const input=useRef(null)
  return <>
    <button type="button" className={'secondary '+className} onClick={()=>input.current?.click()}>{children}</button>
    <input tabIndex={-1} hidden type="file" ref={input} accept={accept} multiple={multiple} onChange={event=>{
      onFiles(Array.from(event.target.files??[]))
      event.target.value=''
    }}/>
  </>
}

function Color({label,value,onChange}) {
  return <label className="color-control">
    <span>{label}</span>
    <input type="color" aria-label={label} value={value} onChange={e=>onChange(e.target.value)}/>
  </label>
}
function Range({label,value,min,max,step,onChange}) {
  const id=useId()
  return <div className="range-control">
    <span><label htmlFor={id}>{label}</label><output htmlFor={id}>{value.toLocaleString('zh-CN')}</output></span>
    <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))}/>
  </div>
}

function Settings({settings,setSettings,mode,setMode,sound,quality,setQuality,refresh,theme,onTheme}) {
  const set=(key,value)=>setSettings(previous=>({...previous,[key]:value}))
  return <>
    <section className="panel-section">
      <h3>圣诞音乐</h3>
      <div className="track">
        <button type="button" className="track-play" data-sound-toggle aria-label={sound.playing?'暂停音乐':'播放音乐'} onClick={sound.toggle}>
          {sound.playing?<Pause size={17}/>:<Play size={17}/>}
        </button>
        <div className="track-meta"><span>当前曲目</span><strong title={sound.title}>{sound.title}</strong></div>
        <div className="track-nav">
          <button type="button" onClick={sound.prev} aria-label="上一首" title="上一首"><SkipBack size={15}/></button>
          <button type="button" onClick={sound.next} aria-label="下一首" title="下一首"><SkipForward size={15}/></button>
        </div>
      </div>
      <FileButton accept="audio/*" multiple onFiles={files=>sound.upload(files)}><Upload size={15}/> 上传本地音乐（可多选）</FileButton>
      {sound.failed&&<p className="notice" role="status">曲目无法播放，请试试其他音频文件。</p>}
      <div className="playlist">
        <div className="playlist-head"><span>播放列表</span><em>{sound.playlist.length} 首 · 自动轮播</em></div>
        <div className="playlist-rows">
          {sound.playlist.map((track,index)=><div className="playlist-row" key={track.id} data-active={track.id===sound.currentId}>
            <button type="button" className="playlist-pick" onClick={()=>sound.select(track.id)} aria-label={'播放 '+track.title}>
              <span className="playlist-number">{String(index+1).padStart(2,'0')}</span>
              <span className="playlist-title">{track.title}</span>
              {track.id===sound.currentId&&<span className="playlist-state">{sound.playing?'播放中':'暂停'}</span>}
            </button>
            {track.local&&<button type="button" className="playlist-remove" aria-label={'删除 '+track.title} title="从列表移除" onClick={()=>sound.remove(track.id)}><Trash2 size={14}/></button>}
          </div>)}
        </div>
      </div>
      <p className="quality-note">可一次选择多首；一首播完会自动切到下一首，列表循环。本地音频只保存在当前页面会话。</p>
    </section>
    <section className="panel-section">
      <h3>主题色</h3>
      <div className="theme-grid">
        {PRESET_THEMES.map(item=><button
          type="button"
          key={item.id}
          className="theme-option"
          data-active={theme.id===item.id}
          aria-pressed={theme.id===item.id}
          onClick={()=>onTheme(item.id)}
        >
          <i style={{background:`linear-gradient(135deg,${item.primary},${item.accent})`}}/>
          <span>{item.name}</span>
        </button>)}
      </div>
      <label className="theme-custom">
        <span>自定义主题色</span>
        <input type="color" value={theme.primary} onChange={event=>onTheme(event.target.value)} aria-label="自定义主题色"/>
      </label>
      <p className="quality-note">主题会同步开头动画、圣诞树灯光、极光天空和界面强调色。</p>
    </section>
    <section className="panel-section">
      <h3>展示模式</h3>
      <div className="segmented" aria-label="展示模式">
        <button onClick={()=>setMode('tree')} aria-pressed={mode==='tree'}><TreePine size={15}/> 圣诞树</button>
        <button onClick={()=>setMode('float')} aria-pressed={mode==='float'}><Sparkles size={15}/> 星光漂浮</button>
      </div>
    </section>
    <section className="panel-section">
      <h3>夜空烟花</h3>
      <div className="segmented four" aria-label="烟花炸开频率">
        <button type="button" onClick={()=>set('fireworks',0)} aria-pressed={settings.fireworks===0}>关闭</button>
        <button type="button" onClick={()=>set('fireworks',12)} aria-pressed={settings.fireworks===12}>舒缓</button>
        <button type="button" onClick={()=>set('fireworks',7)} aria-pressed={settings.fireworks===7}>常态</button>
        <button type="button" onClick={()=>set('fireworks',4)} aria-pressed={settings.fireworks===4}>热闹</button>
      </div>
      <p className="quality-note">{settings.fireworks?`大约每 ${settings.fireworks} 秒在夜空炸开一簇烟花。`:'烟花已关闭，树和星光仍然保留。'}</p>
    </section>
    <section className="panel-section">
      <h3>画质与帧率</h3>
      <div className="segmented three" aria-label="画质模式">
        <button type="button" onClick={()=>setQuality('auto')} aria-pressed={quality==='auto'}>智能</button>
        <button type="button" onClick={()=>setQuality('smooth')} aria-pressed={quality==='smooth'}>高帧率</button>
        <button type="button" onClick={()=>setQuality('sharp')} aria-pressed={quality==='sharp'}>画质优先</button>
      </div>
      <p className="quality-note">
        屏幕 {refresh}Hz · 目标 {Math.min(120,refresh)} FPS。
        {quality==='auto'?'智能模式会按实际帧率自动增减渲染分辨率。':quality==='smooth'?'高帧率模式优先流畅度，分辨率略降。':'画质优先模式提高渲染分辨率，帧率可能下降。'}
        {refresh<120&&' 120 FPS 需要 120Hz 屏幕。'}
      </p>
    </section>
    <section className="panel-section">
      <h3>星光粒子</h3>
      <Range label="粒子数量" min={1000} max={10000} step={500} value={settings.particles} onChange={value=>set('particles',value)}/>
      <div className="colors">
        <Color label="主色" value={settings.primary} onChange={value=>set('primary',value)}/>
        <Color label="点缀色" value={settings.accent} onChange={value=>set('accent',value)}/>
      </div>
    </section>
    <section className="panel-section">
      <h3>礼物盒与彩球</h3>
      <Range label="礼物盒数量" min={0} max={600} step={1} value={settings.boxes} onChange={value=>set('boxes',value)}/>
      <Range label="彩球数量" min={0} max={600} step={1} value={settings.bells} onChange={value=>set('bells',value)}/>
      <div className="colors">
        <Color label="礼盒主色" value={settings.box1} onChange={value=>set('box1',value)}/>
        <Color label="礼盒点缀" value={settings.box2} onChange={value=>set('box2',value)}/>
        <Color label="彩球主色" value={settings.bellColor} onChange={value=>set('bellColor',value)}/>
      </div>
    </section>
  </>
}

const titles={settings:'圣诞布置',gallery:'回忆相册',name:'定制名字',help:'操作指南'}
function Panel({kind,close,children}) {
  const ref=useRef(null)
  useEffect(()=>{
    const dialog=ref.current
    if(!dialog.open)dialog.showModal()
    return ()=>{if(dialog.open)dialog.close()}
  },[])
  return <dialog className="panel" ref={ref} aria-labelledby="panel-title"
    onCancel={event=>{event.preventDefault();close()}}
    onClick={event=>{if(event.target===event.currentTarget)close()}}>
    <div className="panel-inner">
      <header className="panel-heading">
        <h2 id="panel-title">{titles[kind]}</h2>
        <button type="button" className="icon-button" aria-label="关闭面板" onClick={close}><X size={19}/></button>
      </header>
      <div className="panel-content">{children}</div>
    </div>
  </dialog>
}

function NameForm({name,save}) {
  const [draft,setDraft]=useState(name)
  const field=useRef(null)
  useEffect(()=>{field.current?.focus()},[])
  return <form className="name-form" onSubmit={event=>{event.preventDefault();save(draft.trim().replace(/\s+/g,' '))}}>
    <label htmlFor="greeting-name">想把祝福送给谁？</label>
    <input ref={field} id="greeting-name" value={draft} onChange={event=>setDraft(event.target.value)}
      maxLength={24} placeholder="输入名字" autoComplete="off"/>
    <p className="name-preview">{draft.trim()||'你的名字'}，圣诞快乐！</p>
    <div className="name-actions">
      {name&&<button type="button" className="secondary" onClick={()=>save('')}>清除名字</button>}
      <button type="submit" className="primary">保存祝福 <ChevronRight size={16}/></button>
    </div>
  </form>
}

function Gallery({items,upload,remove,notice}) {
  return <div className="gallery-panel">
    <p>添加照片后，相框会出现在树旁。照片仅保存在当前浏览器。</p>
    <FileButton accept="image/jpeg,image/png,image/webp" multiple onFiles={upload}><ImagePlus size={16}/> 上传照片</FileButton>
    {notice&&<p className="notice" role="status">{notice}</p>}
    <div className="gallery-grid">
      {items.map(item=><figure className="gallery-tile" key={item.id}>
        <img src={item.url} alt={item.name} loading="lazy"/>
        <button type="button" className="remove-photo" aria-label={'删除 '+item.name} onClick={()=>remove(item)}><Trash2 size={15}/></button>
      </figure>)}
    </div>
    {!items.length&&<p className="gallery-empty">相册里还没有照片。</p>}
  </div>
}

function Help() {
  const gestures=[
    ['食指移动','移动光标','光标跟着食指走；同时出现两只手时，优先跟随正在捏合的那只。'],
    ['拇指 + 食指捏合','查看光标所在照片','把光标停在照片上再捏合；松开后照片回到原位，之后约 0.8 秒冷却。'],
    ['张开手掌','星光绽放','两只手都张开时，树、礼物和彩球会散成星光；手收回后慢慢复原。'],
    ['握拳','暂停手势','两只手都握拳时暂时隐藏光标，避免走动时误触；松开拳头继续。'],
  ]
  return <div className="help-list">
    {shareMode&&<p className="notice">这是单文件分享版，不包含摄像头手势；完整手势请使用部署包里带 mediapipe 资源的 index.html。</p>}
    <p><Mouse size={19}/><span><strong>旋转和缩放</strong>拖动画面旋转，滚轮或双指缩放。</span></p>
    <p><Sparkles size={19}/><span><strong>星光绽放</strong>按住画面让星光散开，松手后回到树上。</span></p>
    <p><Images size={19}/><span><strong>查看照片</strong>鼠标点一下相框就能打开，再点空白处关闭，不需要鼠标一直跟着；手势模式下把食指光标停在照片上，再捏合。</span></p>
    <p><Hand size={19}/><span><strong>手势控制</strong>摄像头最多同时追踪两只手；食指移动光标，停在照片上捏合查看，张开手掌绽放星光，握拳暂停。</span></p>
    <section className="gesture-guide">
      <h3><Hand size={17}/> 手势 → 功能</h3>
      <div className="gesture-rows">
        {gestures.map(([name,action,detail])=><div className="gesture-row" key={name}>
          <span className="gesture-pill">{name}</span>
          <div><strong>{action}</strong><p>{detail}</p></div>
        </div>)}
      </div>
      <p className="gesture-note">保持手在画面里、光线充足，手掌距离摄像头约 30–80cm。手势在浏览器本地处理，视频不会上传。</p>
    </section>
  </div>
}

function App() {
  const refresh=useRefreshRate()
  const [intro,setIntro]=useState(true)
  const [introDone,setIntroDone]=useState(false)
  const [introRun,setIntroRun]=useState(0)
  const [revealing,setRevealing]=useState(false)
  const [name,setName]=useState(()=>localRead(storageKeys.name,''))
  const [panel,setPanel]=useState(null)
  const [mode,setMode]=useState('tree')
  const [themeKey,setThemeKey]=useState(()=>localRead(storageKeys.theme,'silver'))
  const theme=useMemo(()=>getTheme(themeKey),[themeKey])
  const [settings,setSettings]=useState(()=>({...initialSettings,...theme.settings}))
  const [quality,setQuality]=useState(()=>localRead(storageKeys.quality,'auto'))
  const [tracking,setTracking]=useState(false)
  const [cameraStatus,setCameraStatus]=useState('off')
  const [status,setStatus]=useState('idle')
  const [error,setError]=useState(false)
  const [defaults]=useState(defaultPhotos)
  const [removed,setRemoved]=useState(()=>localRead(storageKeys.removed,[]))
  const [uploads,setUploads]=useState([])
  const [notice,setNotice]=useState('')
  const [fpsText,setFpsText]=useState('-- FPS')
  const [fpsLevel,setFpsLevel]=useState('idle')
  const [fpsTitle,setFpsTitle]=useState('实时帧率')
  const view=useRef(null), world=useRef(null), hand=useRef(emptyHand), audio=useRef(0), photoUrls=useRef(new Set())
  const replayRef=useRef(null)
  const sound=useSound(audio)
  const photos=[...defaults.filter(item=>!removed.includes(item.id)),...uploads]
  const sceneSettings=useRef(null)

  function updateFps(fps,ratio,target,refreshRate) {
    setFpsText(Math.round(fps)+' FPS')
    setFpsLevel(fps>=target*.94?'good':fps>=target*.78?'ok':'low')
    setFpsTitle(`实时 ${Math.round(fps)} FPS · 目标 ${target} FPS · 渲染 ${ratio.toFixed(2)}× · 屏幕 ${refreshRate}Hz`)
  }
  function chooseTheme(next) {
    setThemeKey(next)
    setSettings(previous=>({...previous,...getTheme(next).settings}))
  }
  sceneSettings.current={settings,photos,mode,quality,refresh,theme,onStats:updateFps}

  useEffect(()=>{localWrite(storageKeys.quality,quality)},[quality])
  useEffect(()=>{localWrite(storageKeys.theme,themeKey)},[themeKey])

  useEffect(()=>{loadScene().catch(()=>{})},[])

  useEffect(()=>{
    let cancelled=false
    photoStorage('getAll').then(items=>{
      if(cancelled)return
      setUploads(items.map(item=>{
        const url=URL.createObjectURL(item.blob)
        photoUrls.current.add(url)
        return {...item,url}
      }))
    }).catch(()=>{})
    return ()=>{
      cancelled=true
      for(const url of photoUrls.current)URL.revokeObjectURL(url)
      photoUrls.current.clear()
    }
  },[])

  useEffect(()=>{
    if(!revealing)return
    let cancelled=false
    loadScene().then(({createWorld})=>{
      if(cancelled)return
      const latest=sceneSettings.current
      world.current=createWorld(view.current,{
        lite,config:latest.settings,hand,audio,onStatus:setStatus,onStats:latest.onStats,
        quality:latest.quality,refresh:latest.refresh,theme:latest.theme,
      })
      world.current.photos(latest.photos)
      world.current.setMode(latest.mode)
    }).catch(error=>{
      if(cancelled)return
      console.error(error)
      setError(true)
    })
    return ()=>{cancelled=true;world.current?.dispose();world.current=null}
  },[revealing])
  useEffect(()=>{world.current?.config(settings)},[settings])
  useEffect(()=>{world.current?.setMode(mode)},[mode])
  useEffect(()=>{world.current?.setQuality(quality)},[quality])
  useEffect(()=>{world.current?.setTheme(theme)},[theme])
  useEffect(()=>{world.current?.photos(photos)},[defaults,removed,uploads])

  async function uploadPhotos(files) {
    const valid=files.filter(file=>['image/jpeg','image/png','image/webp'].includes(file.type)
      ||(!file.type&&/\.(jpe?g|png|webp)$/i.test(file.name)))
    if(!valid.length){if(files.length)setNotice('请选择 JPG、PNG 或 WEBP 格式的照片。');return}
    const results=await Promise.all(valid.map(async file=>{
      const preview=URL.createObjectURL(file)
      try{
        const image=new Image()
        image.src=preview
        await image.decode()
      }catch{
        URL.revokeObjectURL(preview)
        return null
      }
      const record={id:crypto.randomUUID?.()??Date.now()+'-'+Math.random().toString(36).slice(2),name:file.name,blob:file}
      let persisted=true
      try{await photoStorage('put',record)}catch{persisted=false}
      photoUrls.current.add(preview)
      return {...record,url:preview,persisted}
    }))
    const pictures=results.filter(Boolean)
    setUploads(current=>[...current,...pictures])
    setNotice(pictures.length!==files.length?'部分文件无法作为照片读取。':pictures.some(item=>!item.persisted)?'浏览器未能保存部分照片，刷新后可能丢失。':'')
  }
  async function deletePhoto(item) {
    if(item.default) {
      setRemoved(current=>{
        const next=[...current,item.id]
        localWrite(storageKeys.removed,next)
        return next
      })
      return
    }
    if(item.persisted!==false) {
      try{await photoStorage('delete',item.id)}
      catch{setNotice('照片未能删除，请重试。');return}
    }
    setUploads(current=>current.filter(photo=>photo.id!==item.id))
    photoUrls.current.delete(item.url)
    URL.revokeObjectURL(item.url)
  }
  function saveName(value) {
    setName(value)
    localWrite(storageKeys.name,value)
    setPanel(null)
  }
  function toggleHand() {
    setCameraStatus(tracking?'off':'loading')
    setTracking(!tracking)
  }
  function replayIntro() {
    if(!revealing||!introDone)return
    setIntroDone(false)
    setPanel(null)
    setTracking(false)
    setCameraStatus('off')
    setStatus('idle')
    setFpsText('-- FPS')
    setFpsLevel('idle')
    setFpsTitle('实时帧率')
    setRevealing(false)
    setIntroRun(value=>value+1)
    setIntro(true)
  }
  replayRef.current = replayIntro

  useEffect(()=>{
    const onKey=event=>{
      if(event.code!=='KeyR'||event.repeat||event.metaKey||event.ctrlKey||event.altKey)return
      const target=event.target
      if(target instanceof HTMLElement && (target.tagName==='INPUT'||target.tagName==='TEXTAREA'||target.isContentEditable))return
      event.preventDefault()
      replayRef.current?.()
    }
    window.addEventListener('keydown',onKey)
    return ()=>window.removeEventListener('keydown',onKey)
  },[])
  const gestureLabel={idle:'静待星光',burst:'绽放',hover:'翻看'}[status]
  return <div className="app" data-lite={lite} data-theme={theme.id} style={{
    '--gold': theme.ui,
    '--pale': theme.pale,
    '--line': theme.line,
    '--soft': theme.soft,
    '--theme-primary': theme.primary,
    '--theme-accent': theme.accent,
  }} onPointerDownCapture={event=>{
    if(!event.target.closest('[data-sound-toggle]'))sound.unlock()
  }}>
    <audio ref={sound.element} src={defaultTrack} crossOrigin="anonymous" preload="auto"/>
    <div className="world" ref={view}/>
    {revealing&&<>
      <div className="scene-shade" aria-hidden="true"/>
      <header className="topbar">
        <div className="brand"><div className="brand-icon"><Snowflake size={23} strokeWidth={1.35}/></div><span>Aurora <em>Noël</em></span></div>
        <div className="header-actions">
          <div className="fps-pill" data-level={fpsLevel} title={fpsTitle}>{fpsText}</div>
          <div className="status" data-active={status!=='idle'} aria-live="polite">
            <span className="status-dot"/><span>{mode==='tree'?'圣诞树':'星光漂浮'}</span><i/><span>{gestureLabel}</span>{lite&&<small>LITE</small>}
          </div>
          {introDone&&<button type="button" className="icon-button replay-button" aria-label="返回开场，重新播放开头动画" title="返回开场，重新播放开头动画（R）" onClick={replayIntro}>
            <RotateCcw size={17}/><span className="replay-text">返回开场</span>
          </button>}
          <button type="button" className="icon-button music-toggle" data-sound-toggle aria-label={sound.playing?'暂停音乐':'播放音乐'}
            title={sound.playing?'暂停音乐':'播放音乐'} onClick={sound.toggle} aria-pressed={sound.playing}>
            {sound.playing?<Pause size={17}/>:<Music2 size={19}/>}
          </button>
        </div>
      </header>
      <main className="hero">
        <div className="hero-copy">
          <h1 lang="en">Merry <em>Christmas</em></h1>
          {!name&&<p className="hero-wish">愿今夜的星光，落在你身旁。</p>}
          <div className="hero-actions">
            <Countdown/>
            <button type="button" className="name-button" onClick={()=>setPanel('name')}>
              <PenLine size={13}/>{name?'编辑名字':'定制名字'}<ArrowUpRight size={12} className="name-arrow"/>
            </button>
          </div>
          {name&&<p className="hero-wish is-personal"><strong>{name}</strong>，圣诞快乐！</p>}
        </div>
      </main>
      <nav className="dock" aria-label="场景工具">
        <button onClick={()=>setPanel('settings')}><Settings2 size={20}/><span>圣诞布置</span></button>
        <button onClick={()=>setPanel('gallery')}><Images size={20}/><span>回忆相册</span></button>
        {!shareMode&&<button onClick={toggleHand} aria-pressed={tracking} data-camera={cameraStatus}>
          <Hand size={20}/><span>手势控制</span>
        </button>}
      </nav>
      <footer className="footer">
        <div className="quick-hints">
          <span><Mouse size={15}/><span className="mouse-text">拖动旋转 · 滚轮缩放</span><span className="touch-text">拖动旋转 · 双指缩放</span></span>
          <i/>
          <span><Sparkles size={15}/>按住绽放</span>
        </div>
        <button className="help-button" onClick={()=>setPanel('help')}><CircleHelp size={17}/><span>操作指南</span></button>
      </footer>
      {tracking&&<HandController currentHand={hand} onStatus={setCameraStatus}/>}
      {error&&<div className="world-error" role="alert"><Aperture size={21}/> 当前设备无法打开 3D 场景。请检查浏览器的 WebGL 支持。<a href="?lite">试用轻量模式</a></div>}
      {panel&&<Panel key={panel} kind={panel} close={()=>setPanel(null)}>
        {panel==='settings'&&<Settings settings={settings} setSettings={setSettings} mode={mode} setMode={setMode} sound={sound} quality={quality} setQuality={setQuality} refresh={refresh} theme={theme} onTheme={chooseTheme}/>}
        {panel==='gallery'&&<Gallery items={photos} upload={uploadPhotos} remove={deletePhoto} notice={notice}/>}
        {panel==='name'&&<NameForm name={name} save={saveName}/>}
        {panel==='help'&&<Help/>}
      </Panel>}
    </>}
    {intro&&<Intro key={introRun} name={name} blocked={sound.blocked} onUnlock={sound.unlock} onReveal={()=>setRevealing(true)} onFinish={()=>{setIntro(false);setIntroDone(true)}} theme={theme} themeKey={themeKey} themes={PRESET_THEMES} onTheme={chooseTheme}/>} 
  </div>
}
createRoot(document.getElementById('root')).render(<App/>)
