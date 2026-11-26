import { spawn, execSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
const EDGE="C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",PORT=9398;
const p=path.join(os.tmpdir(),"edge-aurora-perf-"+Date.now());
const child=spawn(EDGE,["--headless=new","--remote-debugging-port="+PORT,"--remote-allow-origins=*","--user-data-dir="+p,"--window-size=430,900","--hide-scrollbars","--no-first-run","--no-default-browser-check","--autoplay-policy=no-user-gesture-required","--disable-background-timer-throttling","--disable-renderer-backgrounding","--disable-backgrounding-occluded-windows","http://127.0.0.1:8099/"],{stdio:"ignore"});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 let page;for(let i=0;i<100;i++){try{const l=await(await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();page=l.find(t=>t.type==="page"&&t.url.includes("127.0.0.1:8099"));if(page)break}catch{}await sleep(300)}
 const ws=new WebSocket(page.webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});
 let id=0;const m=new Map();const errs=[];
 ws.onmessage=e=>{const x=JSON.parse(e.data);if(x.id&&m.has(x.id)){m.get(x.id)(x);m.delete(x.id)}else if(x.method==="Runtime.exceptionThrown")errs.push((x.params.exceptionDetails.exception&&x.params.exceptionDetails.exception.description)||x.params.exceptionDetails.text)};
 const send=(method,params={})=>new Promise((res,rej)=>{const i=++id;m.set(i,x=>x.error?rej(new Error(x.error.message)):res(x.result));ws.send(JSON.stringify({id:i,method,params}))});
 const ev=async ex=>{const r=await send("Runtime.evaluate",{expression:ex,returnByValue:true,awaitPromise:true});return r.result?.value};
 await send("Runtime.enable");await send("Page.enable");await send("Page.bringToFront");
 await send("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:3,mobile:true});
 await send("Emulation.setCPUThrottlingRate",{rate:4});
 await sleep(1500);
 const fps1=await ev(`new Promise(r=>{let n=0;const t0=performance.now();const f=()=>{n++;if(performance.now()-t0<2000)requestAnimationFrame(f);else r((n/2).toFixed(1))};requestAnimationFrame(f)})`);
 console.log("intro_rAF_fps_mobile_throttled4x",fps1);
 await sleep(9500);
 const before=await ev(`JSON.stringify({intro:!!document.querySelector('.intro'),btn:!!document.querySelector('.intro-enter button')})`);
 console.log("BEFORE",before);
 await ev(`(()=>{const b=document.querySelector('.intro-enter button');if(b)b.click()})()`);
 await sleep(2500);
 const lite=await ev(`(()=>{const a=document.querySelector('.app');return a?JSON.stringify({lite:a.dataset.lite,theme:a.dataset.theme}):'no-app'})()`);
 console.log("APP",lite);
 const fps2=await ev(`new Promise(r=>{let n=0;const t0=performance.now();const f=()=>{n++;if(performance.now()-t0<2000)requestAnimationFrame(f);else r((n/2).toFixed(1))};requestAnimationFrame(f)})`);
 console.log("main_rAF_fps_mobile_throttled4x",fps2);
 console.log("ERRORS",JSON.stringify(errs.slice(-4)));
 ws.close();try{execSync(`taskkill /PID ${child.pid} /T /F`,{stdio:"ignore"})}catch{};process.exit(0);
})().catch(e=>{console.error(e);try{execSync(`taskkill /PID ${child.pid} /T /F`,{stdio:"ignore"})}catch{};process.exit(1)})
