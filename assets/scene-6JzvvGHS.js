import{r as Ln}from"./index-Bv9Yi8XU.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="181",Bi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,il=1,zh=2,Lc=1,Vh=2,An=3,Xn=0,Ne=1,Ie=2,dn=0,zi=1,wn=2,sl=3,rl=4,kh=5,si=100,Gh=101,Hh=102,Wh=103,Xh=104,qh=200,Yh=201,Zh=202,jh=203,Ta=204,Aa=205,Kh=206,Jh=207,$h=208,Qh=209,tu=210,eu=211,nu=212,iu=213,su=214,wa=0,Ca=1,Ra=2,ki=3,Pa=4,Da=5,La=6,Ua=7,yo=0,ru=1,au=2,Wn=0,Uc=1,Ic=2,Nc=3,bo=4,Fc=5,Oc=6,Bc=7,zc=300,Gi=301,Hi=302,Ia=303,Na=304,Pr=306,Mr=1e3,Cn=1001,Fa=1002,qe=1003,ou=1004,Ls=1005,Ke=1006,Br=1007,ai=1008,gn=1009,Vc=1010,kc=1011,xs=1012,So=1013,oi=1014,un=1015,pn=1016,Eo=1017,To=1018,gs=1020,Gc=35902,Hc=35899,Wc=1021,Xc=1022,sn=1023,_s=1026,vs=1027,Ao=1028,wo=1029,Co=1030,Ro=1031,Po=1033,dr=33776,pr=33777,mr=33778,xr=33779,Oa=35840,Ba=35841,za=35842,Va=35843,ka=36196,Ga=37492,Ha=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,ja=37813,Ka=37814,Ja=37815,$a=37816,Qa=37817,to=37818,eo=37819,no=37820,io=37821,so=36492,ro=36494,ao=36495,oo=36283,lo=36284,co=36285,ho=36286,lu=3200,cu=3201,Do=0,hu=1,Gn="",Re="srgb",Wi="srgb-linear",yr="linear",ne="srgb",pi=7680,al=519,uu=512,fu=513,du=514,qc=515,pu=516,mu=517,xu=518,gu=519,uo=35044,_u=35048,ol="300 es",fn=2e3,br=2001;function Yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=Ms("canvas");return i.style.display="block",i}const ll={};function Sr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Wt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function ue(...i){const t="THREE."+i.shift();console.error(t,...i)}function ys(...i){const t=i.join(" ");t in ll||(ll[t]=!0,Wt(...i))}function Mu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const fs=Math.PI/180,bs=180/Math.PI;function mn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Lo(i,t){return(i%t+t)%t}function yu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function Su(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function Eu(i,t=1){return t-Math.abs(Lo(i,t*2)-t)}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cu(i,t){return i+Math.random()*(t-i)}function Ru(i){return i*(.5-Math.random())}function Pu(i){i!==void 0&&(cl=i);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Du(i){return i*fs}function Lu(i){return i*bs}function Uu(i){return(i&i-1)===0&&i!==0}function Iu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*h,o*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:fs,RAD2DEG:bs,generateUUID:mn,clamp:Yt,euclideanModulo:Lo,mapLinear:yu,inverseLerp:bu,lerp:ds,damp:Su,pingpong:Eu,smoothstep:Tu,smootherstep:Au,randInt:wu,randFloat:Cu,randFloatSpread:Ru,seededRandom:Pu,degToRad:Du,radToDeg:Lu,isPowerOfTwo:Uu,ceilPowerOfTwo:Iu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Fu,normalize:ie,denormalize:nn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==x){let m=l*d+c*p+h*x+u*g;m<0&&(d=-d,p=-p,x=-x,g=-g,m=-m);let f=1-o;if(m<.9995){const b=Math.acos(m),_=Math.sin(b);f=Math.sin(f*b)/_,o=Math.sin(o*b)/_,l=l*f+d*o,c=c*f+p*o,h=h*f+x*o,u=u*f+g*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+x*o,u=u*f+g*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*p-c*d,t[e+1]=l*x+h*d+c*u-o*p,t[e+2]=c*x+h*p+o*d-l*u,t[e+3]=h*x-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new D,hl=new rn;class qt{constructor(t,e,n,s,r,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],g=s[0],m=s[3],f=s[6],b=s[1],_=s[4],T=s[7],S=s[2],E=s[5],R=s[8];return r[0]=a*g+o*b+l*S,r[3]=a*m+o*_+l*E,r[6]=a*f+o*T+l*R,r[1]=c*g+h*b+u*S,r[4]=c*m+h*_+u*E,r[7]=c*f+h*T+u*R,r[2]=d*g+p*b+x*S,r[5]=d*m+p*_+x*E,r[8]=d*f+p*T+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new qt,ul=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){const i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}const Qt=Ou();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class Bu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mi===void 0&&(mi=Ms("canvas")),mi.width=t.width,mi.height=t.height;const s=mi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zu=0;class Uo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=mn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let Vu=0;const Gr=new D;class Ae extends hi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Cn,s=Cn,r=Ke,a=ai,o=sn,l=gn,c=Ae.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=mn(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gr).x}get height(){return this.source.getSize(Gr).y}get depth(){return this.source.getSize(Gr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=zc;Ae.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,T=(p+1)/2,S=(f+1)/2,E=(h+d)/4,R=(u+g)/4,U=(x+m)/4;return _>T&&_>S?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=R/n):T>S?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=E/s,r=U/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=U/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(u-g)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ku extends hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ae(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Uo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zc extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Is.subVectors(this.max,Ji),xi.subVectors(t.a,Ji),gi.subVectors(t.b,Ji),_i.subVectors(t.c,Ji),In.subVectors(gi,xi),Nn.subVectors(_i,gi),jn.subVectors(xi,_i);let e=[0,-In.z,In.y,0,-Nn.z,Nn.y,0,-jn.z,jn.y,In.z,0,-In.x,Nn.z,0,-Nn.x,jn.z,0,-jn.x,-In.y,In.x,0,-Nn.y,Nn.x,0,-jn.y,jn.x,0];return!Hr(e,xi,gi,_i,Is)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,xi,gi,_i,Is))?!1:(Ns.crossVectors(In,Nn),e=[Ns.x,Ns.y,Ns.z],Hr(e,xi,gi,_i,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mn=[new D,new D,new D,new D,new D,new D,new D,new D],Qe=new D,Us=new ui,xi=new D,gi=new D,_i=new D,In=new D,Nn=new D,jn=new D,Ji=new D,Is=new D,Ns=new D,Kn=new D;function Hr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hu=new ui,$i=new D,Wr=new D;class fi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Wr)),this.expandByPoint($i.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const yn=new D,Xr=new D,Fs=new D,Fn=new D,qr=new D,Os=new D,Yr=new D;class ws{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Fs),o=Fn.dot(this.direction),l=-Fn.dot(Fs),c=Fn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xr).addScaledVector(Fs,d),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){qr.subVectors(e,t),Os.subVectors(n,t),Yr.crossVectors(qr,Os);let a=this.direction.dot(Yr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const l=o*this.direction.dot(Os.crossVectors(Fn,Os));if(l<0)return null;const c=o*this.direction.dot(qr.cross(Fn));if(c<0||l+c>a)return null;const h=-o*Fn.dot(Yr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,x,g,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,x,g,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,x,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,x=c*h,g=c*u;e[0]=d+g*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-x,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,x=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=x*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+x,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,p=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wu,t,Xu)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),On.crossVectors(n,Ge),On.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),On.crossVectors(n,Ge)),On.normalize(),Bs.crossVectors(Ge,On),s[0]=On.x,s[4]=Bs.x,s[8]=Ge.x,s[1]=On.y,s[5]=Bs.y,s[9]=Ge.y,s[2]=On.z,s[6]=Bs.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],g=n[6],m=n[10],f=n[14],b=n[3],_=n[7],T=n[11],S=n[15],E=s[0],R=s[4],U=s[8],M=s[12],y=s[1],P=s[5],I=s[9],N=s[13],F=s[2],B=s[6],z=s[10],Q=s[14],G=s[3],Y=s[7],j=s[11],ht=s[15];return r[0]=a*E+o*y+l*F+c*G,r[4]=a*R+o*P+l*B+c*Y,r[8]=a*U+o*I+l*z+c*j,r[12]=a*M+o*N+l*Q+c*ht,r[1]=h*E+u*y+d*F+p*G,r[5]=h*R+u*P+d*B+p*Y,r[9]=h*U+u*I+d*z+p*j,r[13]=h*M+u*N+d*Q+p*ht,r[2]=x*E+g*y+m*F+f*G,r[6]=x*R+g*P+m*B+f*Y,r[10]=x*U+g*I+m*z+f*j,r[14]=x*M+g*N+m*Q+f*ht,r[3]=b*E+_*y+T*F+S*G,r[7]=b*R+_*P+T*B+S*Y,r[11]=b*U+_*I+T*z+S*j,r[15]=b*M+_*N+T*Q+S*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],g=t[7],m=t[11],f=t[15];return x*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+g*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],g=t[13],m=t[14],f=t[15],b=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,_=x*d*c-h*m*c-x*l*p+a*m*p+h*l*f-a*d*f,T=h*g*c-x*u*c+x*o*p-a*g*p-h*o*f+a*u*f,S=x*u*l-h*g*l-x*o*d+a*g*d+h*o*m-a*u*m,E=e*b+n*_+s*T+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=b*R,t[1]=(g*d*r-u*m*r-g*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*f+n*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*R,t[4]=_*R,t[5]=(h*m*r-x*d*r+x*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(x*l*r-a*m*r-x*s*c+e*m*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=T*R,t[9]=(x*u*r-h*g*r-x*n*p+e*g*p+h*n*f-e*u*f)*R,t[10]=(a*g*r-x*o*r+x*n*c-e*g*c-a*n*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=S*R,t[13]=(h*g*s-x*u*s+x*n*d-e*g*d-h*n*m+e*u*m)*R,t[14]=(x*o*s-a*g*s-x*n*l+e*g*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,x=r*u,g=a*h,m=a*u,f=o*u,b=l*c,_=l*h,T=l*u,S=n.x,E=n.y,R=n.z;return s[0]=(1-(g+f))*S,s[1]=(p+T)*S,s[2]=(x-_)*S,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(d+f))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(x+_)*R,s[9]=(m-b)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const c=1/r,h=1/a,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===fn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===br)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===fn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===br)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new D,tn=new ee,Wu=new D(0,0,0),Xu=new D(1,1,1),On=new D,Bs=new D,Ge=new D,dl=new ee,pl=new rn;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Io{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qu=0;const ml=new D,Mi=new rn,bn=new ee,zs=new D,Qi=new D,Yu=new D,Zu=new rn,xl=new D(1,0,0),gl=new D(0,1,0),_l=new D(0,0,1),vl={type:"added"},ju={type:"removed"},yi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class _e extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new D,e=new on,n=new rn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new qt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Qi,zs,this.up):bn.lookAt(zs,Qi,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(bn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),yi.child=t,this.dispatchEvent(yi),yi.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new D(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new D,Sn=new D,jr=new D,En=new D,bi=new D,Si=new D,Ml=new D,Kr=new D,Jr=new D,$r=new D,Qr=new oe,ta=new oe,ea=new oe;class je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),Sn.subVectors(n,e),jr.subVectors(t,e);const a=en.dot(en),o=en.dot(Sn),l=en.dot(jr),c=Sn.dot(Sn),h=Sn.dot(jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qr.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qr.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qr,r.x),a.addScaledVector(ta,r.y),a.addScaledVector(ea,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),Sn.subVectors(t,e),en.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;bi.subVectors(s,n),Si.subVectors(r,n),Kr.subVectors(t,n);const l=bi.dot(Kr),c=Si.dot(Kr);if(l<=0&&c<=0)return e.copy(n);Jr.subVectors(t,s);const h=bi.dot(Jr),u=Si.dot(Jr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);$r.subVectors(t,r);const p=bi.dot($r),x=Si.dot($r);if(x>=0&&p<=x)return e.copy(r);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Si,o);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Ml.subVectors(r,s),o=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(Ml,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(bi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Lo(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=na(a,r,t+1/3),this.g=na(a,r,t),this.b=na(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Qt.workingToColorSpace(Ce.copy(this),t),Math.round(Yt(Ce.r*255,0,255))*65536+Math.round(Yt(Ce.g*255,0,255))*256+Math.round(Yt(Ce.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Re){Qt.workingToColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Vs);const n=ds(Bn.h,Vs.h,e),s=ds(Bn.s,Vs.s,e),r=ds(Bn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Bt;Bt.NAMES=jc;let Ku=0;class Un extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=zi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class li extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new D,ks=new it;let Ju=0;class Me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),t}}class Kc extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jc extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $u=0;const Ze=new ee,ia=new _e,Ei=new D,He=new ui,ts=new ui,Ee=new D;class ce extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yc(t)?Jc:Kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(He.min,ts.min),He.expandByPoint(Ee),Ee.addVectors(He.max,ts.max),He.expandByPoint(Ee)):(He.expandByPoint(ts.min),He.expandByPoint(ts.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Ee.add(Ei)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;const c=new D,h=new D,u=new D,d=new it,p=new it,x=new it,g=new D,m=new D;function f(U,M,y){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,M),x.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),x.sub(d);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),o[U].add(g),o[M].add(g),o[y].add(g),l[U].add(m),l[M].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,M=b.length;U<M;++U){const y=b[U],P=y.start,I=y.count;for(let N=P,F=P+I;N<F;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new D,T=new D,S=new D,E=new D;function R(U){S.fromBufferAttribute(s,U),E.copy(S);const M=o[U];_.copy(M),_.sub(S.multiplyScalar(S.dot(M))).normalize(),T.crossVectors(E,M);const P=T.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,P)}for(let U=0,M=b.length;U<M;++U){const y=b[U],P=y.start,I=y.count;for(let N=P,F=P+I;N<F;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new Me(d,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ce,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new ee,Jn=new ws,Gs=new fi,bl=new D,Hs=new D,Ws=new D,Xs=new D,sa=new D,qs=new D,Sl=new D,Ys=new D;class $t extends _e{constructor(t=new ce,e=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(sa.fromBufferAttribute(u,t),a?qs.addScaledVector(sa,h):qs.addScaledVector(sa.sub(e),h))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Gs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Gs,bl)===null||Jn.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],f=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,S=_;T<S;T+=3){const E=o.getX(T),R=o.getX(T+1),U=o.getX(T+2);s=Zs(this,f,t,n,c,h,u,E,R,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const b=o.getX(m),_=o.getX(m+1),T=o.getX(m+2);s=Zs(this,a,t,n,c,h,u,b,_,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],f=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,S=_;T<S;T+=3){const E=T,R=T+1,U=T+2;s=Zs(this,f,t,n,c,h,u,E,R,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const b=m,_=m+1,T=m+2;s=Zs(this,a,t,n,c,h,u,b,_,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Qu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function Zs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);const h=Qu(i,t,e,n,Hs,Ws,Xs,Sl);if(h){const u=new D;je.getBarycoord(Sl,Hs,Ws,Xs,u),s&&(h.uv=je.getInterpolatedAttribute(s,o,l,c,u,new it)),r&&(h.uv1=je.getInterpolatedAttribute(r,o,l,c,u,new it)),a&&(h.normal=je.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};je.getNormal(Hs,Ws,Xs,d.normal),h.face=d,h.barycoord=u}return h}class xn extends ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function x(g,m,f,b,_,T,S,E,R,U,M){const y=T/R,P=S/U,I=T/2,N=S/2,F=E/2,B=R+1,z=U+1;let Q=0,G=0;const Y=new D;for(let j=0;j<z;j++){const ht=j*P-N;for(let ft=0;ft<B;ft++){const Rt=ft*y-I;Y[g]=Rt*b,Y[m]=ht*_,Y[f]=F,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ft/R),u.push(1-j/U),Q+=1}}for(let j=0;j<U;j++)for(let ht=0;ht<R;ht++){const ft=d+ht+B*j,Rt=d+ht+B*(j+1),Lt=d+(ht+1)+B*(j+1),Nt=d+(ht+1)+B*j;l.push(ft,Rt,Nt),l.push(Rt,Lt,Nt),G+=6}o.addGroup(p,G,M),p+=G,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function tf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $c(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Ss={clone:Xi,merge:Le};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class No extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new D,El=new it,Tl=new it;class Xe extends No{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,El,Tl),e.subVectors(Tl,El)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class sf extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(Ti,Ai,t,e);s.layers=this.layers,this.add(s);const r=new Xe(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const a=new Xe(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Ti,Ai,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Ti,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Qc extends Ae{constructor(t=[],e=Gi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rf extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xn(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:dn});r.uniforms.tEquirect.value=e;const a=new $t(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=Ke),new sf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Te extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const af={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(af)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Fo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dr extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class of{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uo,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new D;class Er{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gr extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const es=new D,Ci=new D,Ri=new D,Pi=new it,ns=new it,th=new ee,js=new D,is=new D,Ks=new D,Al=new it,aa=new it,wl=new it;class oa extends _e{constructor(t=new gr){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new of(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new Er(n,3,0,!1)),wi.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new it(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),th.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Ri.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Js(js.set(-.5,-.5,0),Ri,a,Ci,s,r),Js(is.set(.5,-.5,0),Ri,a,Ci,s,r),Js(Ks.set(.5,.5,0),Ri,a,Ci,s,r),Al.set(0,0),aa.set(1,0),wl.set(1,1);let o=t.ray.intersectTriangle(js,is,Ks,!1,es);if(o===null&&(Js(is.set(-.5,.5,0),Ri,a,Ci,s,r),aa.set(0,1),o=t.ray.intersectTriangle(js,Ks,is,!1,es),o===null))return;const l=t.ray.origin.distanceTo(es);l<t.near||l>t.far||e.push({distance:l,point:es.clone(),uv:je.getInterpolation(es,js,is,Ks,Al,aa,wl,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Js(i,t,e,n,s,r){Pi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ns.x=r*Pi.x-s*Pi.y,ns.y=s*Pi.x+r*Pi.y):ns.copy(Pi),i.copy(t),i.x+=ns.x,i.y+=ns.y,i.applyMatrix4(th)}class eh extends Ae{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,h=qe,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new ee,Rl=new ee,$s=[],Pl=new ui,lf=new ee,ss=new $t,rs=new fi;class nh extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),Pl.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(Pl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),rs.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),t.ray.intersectsSphere(rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),Rl.multiplyMatrices(n,Di),ss.matrixWorld=Rl,ss.raycast(t,$s);for(let a=0,o=$s.length;a<o;a++){const l=$s[a];l.instanceId=r,l.object=this,e.push(l)}$s.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eh(new Float32Array(s*this.count),s,this.count,Ao,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const la=new D,cf=new D,hf=new qt;class kn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=la.subVectors(n,e).cross(cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(la),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hf.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new fi,uf=new it(.5,.5),Qs=new D;class Oo{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],x=r[8],g=r[9],m=r[10],f=r[11],b=r[12],_=r[13],T=r[14],S=r[15];if(s[0].setComponents(c-a,p-h,f-x,S-b).normalize(),s[1].setComponents(c+a,p+h,f+x,S+b).normalize(),s[2].setComponents(c+o,p+u,f+g,S+_).normalize(),s[3].setComponents(c-o,p-u,f-g,S-_).normalize(),n)s[4].setComponents(l,d,m,T).normalize(),s[5].setComponents(c-l,p-d,f-m,S-T).normalize();else if(s[4].setComponents(c-l,p-d,f-m,S-T).normalize(),e===fn)s[5].setComponents(c+l,p+d,f+m,S+T).normalize();else if(e===br)s[5].setComponents(l,d,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);const e=uf.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tr=new D,Ar=new D,Dl=new ee,as=new ws,tr=new fi,ca=new D,Ll=new D;class ff extends _e{constructor(t=new ce,e=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Tr.fromBufferAttribute(e,s-1),Ar.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Tr.distanceTo(Ar);t.setAttribute("lineDistance",new Kt(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,t.ray.intersectsSphere(tr)===!1)return;Dl.copy(s).invert(),as.copy(t.ray).applyMatrix4(Dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=p,m=x-1;g<m;g+=c){const f=h.getX(g),b=h.getX(g+1),_=er(this,t,as,l,f,b,g);_&&e.push(_)}if(this.isLineLoop){const g=h.getX(x-1),m=h.getX(p),f=er(this,t,as,l,g,m,x-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=p,m=x-1;g<m;g+=c){const f=er(this,t,as,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){const g=er(this,t,as,l,x-1,p,x-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function er(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Tr.fromBufferAttribute(o,s),Ar.fromBufferAttribute(o,r),e.distanceSqToSegment(Tr,Ar,ca,Ll)>n)return;ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ca);if(!(c<t.near||c>t.far))return{distance:c,point:Ll.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ul=new D,Il=new D;class df extends ff{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ul.fromBufferAttribute(e,s),Il.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ul.distanceTo(Il);t.setAttribute("lineDistance",new Kt(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pf extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nl=new ee,fo=new ws,nr=new fi,ir=new D;class sh extends _e{constructor(t=new ce,e=new pf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;Nl.copy(s).invert(),fo.copy(t.ray).applyMatrix4(Nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=d,g=p;x<g;x++){const m=c.getX(x);ir.fromBufferAttribute(u,m),Fl(ir,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=d,g=p;x<g;x++)ir.fromBufferAttribute(u,x),Fl(ir,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fl(i,t,e,n,s,r,a){const o=fo.distanceSqToPoint(i);if(o<e){const l=new D;fo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Lr extends Ae{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends Ae{constructor(t,e,n=oi,s,r,a,o=qe,l=qe,c,h=_s,u=1){if(h!==_s&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ah extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cs extends ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let x=0;const g=[],m=n/2;let f=0;b(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function b(){const T=new D,S=new D;let E=0;const R=(e-t)/n;for(let U=0;U<=r;U++){const M=[],y=U/r,P=y*(e-t)+t;for(let I=0;I<=s;I++){const N=I/s,F=N*l+o,B=Math.sin(F),z=Math.cos(F);S.x=P*B,S.y=-y*n+m,S.z=P*z,u.push(S.x,S.y,S.z),T.set(B,R,z).normalize(),d.push(T.x,T.y,T.z),p.push(N,1-y),M.push(x++)}g.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){const y=g[M][U],P=g[M+1][U],I=g[M+1][U+1],N=g[M][U+1];(t>0||M!==0)&&(h.push(y,P,N),E+=3),(e>0||M!==r-1)&&(h.push(P,I,N),E+=3)}c.addGroup(f,E,0),f+=E}function _(T){const S=x,E=new it,R=new D;let U=0;const M=T===!0?t:e,y=T===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),x++;const P=x;for(let I=0;I<=s;I++){const F=I/s*l+o,B=Math.cos(F),z=Math.sin(F);R.x=M*z,R.y=m*y,R.z=M*B,u.push(R.x,R.y,R.z),d.push(0,y,0),E.x=B*.5+.5,E.y=z*.5*y+.5,p.push(E.x,E.y),x++}for(let I=0;I<s;I++){const N=S+I,F=P+I;T===!0?h.push(F,F+1,N):h.push(F+1,F,N),U+=3}c.addGroup(f,U,T===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],a=[],o=new D,l=new ee;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Yt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,x))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Yt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bo extends vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mf extends Bo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const sr=new D,ha=new zo,ua=new zo,fa=new zo;class oh extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(sr.subVectors(s[0],s[1]).add(s[0]),c=sr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),ha.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,g,m),ua.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,g,m),fa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ua.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ha.calc(l),ua.calc(l),fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ol(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function xf(i,t){const e=1-i;return e*e*t}function gf(i,t){return 2*(1-i)*i*t}function _f(i,t){return i*i*t}function ps(i,t,e,n){return xf(i,t)+gf(i,e)+_f(i,n)}function vf(i,t){const e=1-i;return e*e*e*t}function Mf(i,t){const e=1-i;return 3*e*e*i*t}function yf(i,t){return 3*(1-i)*i*i*t}function bf(i,t){return i*i*i*t}function ms(i,t,e,n,s){return vf(i,t)+Mf(i,e)+yf(i,n)+bf(i,s)}class lh extends vn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,s.x,r.x,a.x,o.x),ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ch extends vn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,s.x,r.x,a.x,o.x),ms(t,s.y,r.y,a.y,o.y),ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hh extends vn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sf extends vn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends vn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,s.x,r.x,a.x),ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends vn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,s.x,r.x,a.x),ps(t,s.y,r.y,a.y),ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dh extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ol(o,l.x,c.x,h.x,u.x),Ol(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var wr=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:oh,CubicBezierCurve:lh,CubicBezierCurve3:ch,EllipseCurve:Bo,LineCurve:hh,LineCurve3:Sf,QuadraticBezierCurve:uh,QuadraticBezierCurve3:fh,SplineCurve:dh});class Ef extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new wr[s.type]().fromJSON(s))}return this}}class po extends Ef{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hh(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new uh(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new lh(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new dh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Bo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ph extends po{constructor(t){super(t),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new po().fromJSON(s))}return this}}function Tf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=mh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Pf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const p=i[d],x=i[d+1];p<o&&(o=p),x<l&&(l=x),p>h&&(h=p),x>u&&(u=x)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Es(r,a,e,o,l,c,0),a}function mh(i,t,e,n,s){let r;if(s===kf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Bl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Bl(a/n|0,i[a],i[a+1],r);return r&&qi(r,r.next)&&(As(r),r=r.next),r}function ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qi(e,e.next)||pe(e.prev,e,e.next)===0)){if(As(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Es(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Nf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?wf(i,n,s,r):Af(i)){t.push(l.i,i.i,c.i),As(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cf(ci(i),t),Es(i,t,e,n,s,r,2)):a===2&&Rf(i,t,e,n,s,r):Es(ci(i),t,e,n,s,r,1);break}}}function Af(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=p&&cs(s,o,r,l,a,c,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function wf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),x=Math.min(h,u,d),g=Math.max(o,l,c),m=Math.max(h,u,d),f=mo(p,x,t,e,n),b=mo(g,m,t,e,n);let _=i.prevZ,T=i.nextZ;for(;_&&_.z>=f&&T&&T.z<=b;){if(_.x>=p&&_.x<=g&&_.y>=x&&_.y<=m&&_!==s&&_!==a&&cs(o,h,l,u,c,d,_.x,_.y)&&pe(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=g&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&cs(o,h,l,u,c,d,T.x,T.y)&&pe(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=g&&_.y>=x&&_.y<=m&&_!==s&&_!==a&&cs(o,h,l,u,c,d,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=b;){if(T.x>=p&&T.x<=g&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&cs(o,h,l,u,c,d,T.x,T.y)&&pe(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Cf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!qi(n,s)&&gh(n,e,e.next,s)&&Ts(n,s)&&Ts(s,n)&&(t.push(n.i,e.i,s.i),As(e),As(e.next),e=i=s),e=e.next}while(e!==i);return ci(e)}function Rf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bf(a,o)){let l=_h(a,o);a=ci(a,a.next),l=ci(l,l.next),Es(a,t,e,n,s,r,0),Es(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Pf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=mh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Of(c))}s.sort(Df);for(let r=0;r<s.length;r++)e=Lf(s[r],e);return e}function Df(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lf(i,t){const e=Uf(i,t);if(!e)return t;const n=_h(e,i);return ci(n,n.next),ci(e,e.next)}function Uf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(qi(i,e))return e;do{if(qi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&xh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Ts(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&If(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function If(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Nf(i,t,e,n){let s=i;do s.z===0&&(s.z=mo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ff(s)}function Ff(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function mo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Of(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function cs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&xh(i,t,e,n,s,r,a,o)}function Bf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zf(i,t)&&(Ts(i,t)&&Ts(t,i)&&Vf(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||qi(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qi(i,t){return i.x===t.x&&i.y===t.y}function gh(i,t,e,n){const s=ar(pe(i,t,e)),r=ar(pe(i,t,n)),a=ar(pe(e,n,i)),o=ar(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&rr(i,e,t)||r===0&&rr(i,n,t)||a===0&&rr(e,i,n)||o===0&&rr(e,t,n))}function rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ar(i){return i>0?1:i<0?-1:0}function zf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ts(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Vf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _h(i,t){const e=xo(i.i,i.x,i.y),n=xo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bl(i,t,e,n){const s=xo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function As(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Gf{static triangulate(t,e,n=2){return Tf(t,e,n)}}class Oi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Oi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];zl(t),Vl(n,t);let a=t.length;e.forEach(zl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Vl(n,e[l]);const o=Gf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vo extends ce{constructor(t=new ph([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Hf;let _,T=!1,S,E,R,U;f&&(_=f.getSpacedPoints(h),T=!0,d=!1,S=f.computeFrenetFrames(h,!1),E=new D,R=new D,U=new D),d||(m=0,p=0,x=0,g=0);const M=o.extractPoints(c);let y=M.shape;const P=M.holes;if(!Oi.isClockWise(y)){y=y.reverse();for(let $=0,w=P.length;$<w;$++){const tt=P[$];Oi.isClockWise(tt)&&(P[$]=tt.reverse())}}function N($){const tt=10000000000000001e-36;let at=$[0];for(let ut=1;ut<=$.length;ut++){const ot=ut%$.length,wt=$[ot],_t=wt.x-at.x,dt=wt.y-at.y,C=_t*_t+dt*dt,v=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(at.x),Math.abs(at.y)),k=tt*v*v;if(C<=k){$.splice(ot,1),ut--;continue}at=wt}}N(y),P.forEach(N);const F=P.length,B=y;for(let $=0;$<F;$++){const w=P[$];y=y.concat(w)}function z($,w,tt){return w||ue("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(w,tt)}const Q=y.length;function G($,w,tt){let at,ut,ot;const wt=$.x-w.x,_t=$.y-w.y,dt=tt.x-$.x,C=tt.y-$.y,v=wt*wt+_t*_t,k=wt*C-_t*dt;if(Math.abs(k)>Number.EPSILON){const Z=Math.sqrt(v),nt=Math.sqrt(dt*dt+C*C),q=w.x-_t/Z,Ut=w.y+wt/Z,yt=tt.x-C/nt,Ot=tt.y+dt/nt,Dt=((yt-q)*C-(Ot-Ut)*dt)/(wt*C-_t*dt);at=q+wt*Dt-$.x,ut=Ut+_t*Dt-$.y;const rt=at*at+ut*ut;if(rt<=2)return new it(at,ut);ot=Math.sqrt(rt/2)}else{let Z=!1;wt>Number.EPSILON?dt>Number.EPSILON&&(Z=!0):wt<-Number.EPSILON?dt<-Number.EPSILON&&(Z=!0):Math.sign(_t)===Math.sign(C)&&(Z=!0),Z?(at=-_t,ut=wt,ot=Math.sqrt(v)):(at=wt,ut=_t,ot=Math.sqrt(v/2))}return new it(at/ot,ut/ot)}const Y=[];for(let $=0,w=B.length,tt=w-1,at=$+1;$<w;$++,tt++,at++)tt===w&&(tt=0),at===w&&(at=0),Y[$]=G(B[$],B[tt],B[at]);const j=[];let ht,ft=Y.concat();for(let $=0,w=F;$<w;$++){const tt=P[$];ht=[];for(let at=0,ut=tt.length,ot=ut-1,wt=at+1;at<ut;at++,ot++,wt++)ot===ut&&(ot=0),wt===ut&&(wt=0),ht[at]=G(tt[at],tt[ot],tt[wt]);j.push(ht),ft=ft.concat(ht)}let Rt;if(m===0)Rt=Oi.triangulateShape(B,P);else{const $=[],w=[];for(let tt=0;tt<m;tt++){const at=tt/m,ut=p*Math.cos(at*Math.PI/2),ot=x*Math.sin(at*Math.PI/2)+g;for(let wt=0,_t=B.length;wt<_t;wt++){const dt=z(B[wt],Y[wt],ot);Tt(dt.x,dt.y,-ut),at===0&&$.push(dt)}for(let wt=0,_t=F;wt<_t;wt++){const dt=P[wt];ht=j[wt];const C=[];for(let v=0,k=dt.length;v<k;v++){const Z=z(dt[v],ht[v],ot);Tt(Z.x,Z.y,-ut),at===0&&C.push(Z)}at===0&&w.push(C)}}Rt=Oi.triangulateShape($,w)}const Lt=Rt.length,Nt=x+g;for(let $=0;$<Q;$++){const w=d?z(y[$],ft[$],Nt):y[$];T?(R.copy(S.normals[0]).multiplyScalar(w.x),E.copy(S.binormals[0]).multiplyScalar(w.y),U.copy(_[0]).add(R).add(E),Tt(U.x,U.y,U.z)):Tt(w.x,w.y,0)}for(let $=1;$<=h;$++)for(let w=0;w<Q;w++){const tt=d?z(y[w],ft[w],Nt):y[w];T?(R.copy(S.normals[$]).multiplyScalar(tt.x),E.copy(S.binormals[$]).multiplyScalar(tt.y),U.copy(_[$]).add(R).add(E),Tt(U.x,U.y,U.z)):Tt(tt.x,tt.y,u/h*$)}for(let $=m-1;$>=0;$--){const w=$/m,tt=p*Math.cos(w*Math.PI/2),at=x*Math.sin(w*Math.PI/2)+g;for(let ut=0,ot=B.length;ut<ot;ut++){const wt=z(B[ut],Y[ut],at);Tt(wt.x,wt.y,u+tt)}for(let ut=0,ot=P.length;ut<ot;ut++){const wt=P[ut];ht=j[ut];for(let _t=0,dt=wt.length;_t<dt;_t++){const C=z(wt[_t],ht[_t],at);T?Tt(C.x,C.y+_[h-1].y,_[h-1].x+tt):Tt(C.x,C.y,u+tt)}}}X(),K();function X(){const $=s.length/3;if(d){let w=0,tt=Q*w;for(let at=0;at<Lt;at++){const ut=Rt[at];lt(ut[2]+tt,ut[1]+tt,ut[0]+tt)}w=h+m*2,tt=Q*w;for(let at=0;at<Lt;at++){const ut=Rt[at];lt(ut[0]+tt,ut[1]+tt,ut[2]+tt)}}else{for(let w=0;w<Lt;w++){const tt=Rt[w];lt(tt[2],tt[1],tt[0])}for(let w=0;w<Lt;w++){const tt=Rt[w];lt(tt[0]+Q*h,tt[1]+Q*h,tt[2]+Q*h)}}n.addGroup($,s.length/3-$,0)}function K(){const $=s.length/3;let w=0;Mt(B,w),w+=B.length;for(let tt=0,at=P.length;tt<at;tt++){const ut=P[tt];Mt(ut,w),w+=ut.length}n.addGroup($,s.length/3-$,1)}function Mt($,w){let tt=$.length;for(;--tt>=0;){const at=tt;let ut=tt-1;ut<0&&(ut=$.length-1);for(let ot=0,wt=h+m*2;ot<wt;ot++){const _t=Q*ot,dt=Q*(ot+1),C=w+at+_t,v=w+ut+_t,k=w+ut+dt,Z=w+at+dt;Ft(C,v,k,Z)}}}function Tt($,w,tt){l.push($),l.push(w),l.push(tt)}function lt($,w,tt){jt($),jt(w),jt(tt);const at=s.length/3,ut=b.generateTopUV(n,s,at-3,at-2,at-1);mt(ut[0]),mt(ut[1]),mt(ut[2])}function Ft($,w,tt,at){jt($),jt(w),jt(at),jt(w),jt(tt),jt(at);const ut=s.length/3,ot=b.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);mt(ot[0]),mt(ot[1]),mt(ot[3]),mt(ot[1]),mt(ot[2]),mt(ot[3])}function jt($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function mt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wr[s.type]().fromJSON(s)),new Vo(n,t.options)}}const Hf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],x=t[s*3+2],g=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-u),new it(d,1-x),new it(g,1-f)]:[new it(o,1-l),new it(h,1-u),new it(p,1-x),new it(m,1-f)]}};function Wf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qn extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],x=[],g=[],m=[];for(let f=0;f<h;f++){const b=f*d-a;for(let _=0;_<c;_++){const T=_*u-r;x.push(T,-b,0),g.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const _=b+c*f,T=b+c*(f+1),S=b+1+c*(f+1),E=b+1+c*f;p.push(_,T,E),p.push(T,S,E)}this.setIndex(p),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ko extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new D,x=new it;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let g=0;g<s;g++){const m=g*(n+1);for(let f=0;f<n;f++){const b=f+m,_=b,T=b+n+1,S=b+n+2,E=b+1;o.push(_,T,E),o.push(T,S,E)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Go extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],x=[],g=[],m=[];for(let f=0;f<=n;f++){const b=[],_=f/n;let T=0;f===0&&a===0?T=.5/e:f===n&&l===Math.PI&&(T=-.5/e);for(let S=0;S<=e;S++){const E=S/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+T,1-_),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const _=h[f][b+1],T=h[f][b],S=h[f+1][b],E=h[f+1][b+1];(f!==0||a>0)&&p.push(_,T,E),(f!==n-1||l<Math.PI)&&p.push(T,S,E)}this.setIndex(p),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cr extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new D,u=new D,d=new D;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){const g=x/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){const g=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,f=(s+1)*(p-1)+x,b=(s+1)*p+x;a.push(g,m,b),a.push(m,f,b)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ho extends ce{constructor(t=new fh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new it;let h=new D;const u=[],d=[],p=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function g(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),b(),f()}function m(_){h=t.getPointAt(_/e,h);const T=a.normals[_],S=a.binormals[_];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,U=Math.sin(R),M=-Math.cos(R);l.x=M*T.x+U*S.x,l.y=M*T.y+U*S.y,l.z=M*T.z+U*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let _=1;_<=e;_++)for(let T=1;T<=s;T++){const S=(s+1)*(_-1)+(T-1),E=(s+1)*_+(T-1),R=(s+1)*_+T,U=(s+1)*(_-1)+T;x.push(S,E,U),x.push(E,R,U)}}function b(){for(let _=0;_<=e;_++)for(let T=0;T<=s;T++)c.x=_/e,c.y=T/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ho(new wr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Xf extends ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Je extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class go extends Je{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qf extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yf extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zf extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const da={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jf{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Kf=new jf;class Wo{constructor(t){this.manager=t!==void 0?t:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li=new WeakMap;class Jf extends Wo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=da.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Li.get(a);u===void 0&&(u=[],Li.set(a,u)),u.push({onLoad:e,onError:s})}return a}const o=Ms("img");function l(){h(),e&&e(this);const u=Li.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}Li.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),da.remove(`image:${t}`);const d=Li.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(u)}Li.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),da.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class $f extends Wo{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,a=new Jf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Xo extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qf extends Xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pa=new ee,kl=new D,Gl=new D;class vh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hl=new ee,os=new D,ma=new D;class td extends vh{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),ma.copy(n.position),ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ma),n.updateMatrixWorld(),s.makeTranslation(-os.x,-os.y,-os.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,n.coordinateSystem,n.reversedDepth)}}class Mh extends Xo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new td}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qo extends No{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ed extends vh{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xa extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new ed}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nd extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class id{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Wl=new ee;class sd{constructor(t,e,n=0,s=1/0){this.ray=new ws(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(t,e=!0,n=[]){return _o(t,this,n,e),n.sort(Xl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_o(t[s],this,n,e);return n.sort(Xl),n}}function Xl(i,t){return i.distance-t.distance}function _o(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)_o(r[a],t,e,!0)}}class ql{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rd extends hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Wt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Yl(i,t,e,n){const s=ad(n);switch(e){case Wc:return i*t;case Ao:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case Co:return i*t*2/s.components*s.byteLength;case Ro:return i*t*2/s.components*s.byteLength;case Xc:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Po:return i*t*4/s.components*s.byteLength;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Va:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ad(i){switch(i){case gn:case Vc:return{byteLength:1,components:1};case xs:case kc:case pn:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case oi:case So:case un:return{byteLength:4,components:1};case Gc:case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function od(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){const x=u[d],g=u[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){const g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ap=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:ld,alphahash_pars_fragment:cd,alphamap_fragment:hd,alphamap_pars_fragment:ud,alphatest_fragment:fd,alphatest_pars_fragment:dd,aomap_fragment:pd,aomap_pars_fragment:md,batching_pars_vertex:xd,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:vd,bsdfs:Md,iridescence_fragment:yd,bumpmap_pars_fragment:bd,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:wd,color_pars_fragment:Cd,color_pars_vertex:Rd,color_vertex:Pd,common:Dd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Id,displacementmap_vertex:Nd,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:Bd,colorspace_pars_fragment:zd,envmap_fragment:Vd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Gd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:tp,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Yd,fog_pars_fragment:Zd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Kd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:$d,lights_pars_begin:Qd,lights_toon_fragment:ep,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:dp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:xp,map_particle_pars_fragment:gp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:vp,morphinstance_vertex:Mp,morphcolor_vertex:yp,morphnormal_vertex:bp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:wp,normal_pars_vertex:Cp,normal_vertex:Rp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Ip,opaque_fragment:Np,packing:Fp,premultiplied_alpha_fragment:Op,project_vertex:Bp,dithering_fragment:zp,dithering_pars_fragment:Vp,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:Yp,skinning_pars_vertex:Zp,skinning_vertex:jp,skinnormal_vertex:Kp,specularmap_fragment:Jp,specularmap_pars_fragment:$p,tonemapping_fragment:Qp,tonemapping_pars_fragment:tm,transmission_fragment:em,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:hm,cube_vert:um,cube_frag:fm,depth_vert:dm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:xm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:Mm,meshbasic_vert:ym,meshbasic_frag:bm,meshlambert_vert:Sm,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:wm,meshnormal_frag:Cm,meshphong_vert:Rm,meshphong_frag:Pm,meshphysical_vert:Dm,meshphysical_frag:Lm,meshtoon_vert:Um,meshtoon_frag:Im,points_vert:Nm,points_frag:Fm,shadow_vert:Om,shadow_frag:Bm,sprite_vert:zm,sprite_frag:Vm},St={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},cn={basic:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Le([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Le([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Le([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Le([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Le([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Le([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Le([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Le([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Le([St.common,St.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Le([St.lights,St.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};cn.physical={uniforms:Le([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const or={r:0,b:0,g:0},Qn=new on,km=new ee;function Gm(i,t,e,n,s,r,a){const o=new Bt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function x(_){let T=_.isScene===!0?_.background:null;return T&&T.isTexture&&(T=(_.backgroundBlurriness>0?e:t).get(T)),T}function g(_){let T=!1;const S=x(_);S===null?f(o,l):S&&S.isColor&&(f(S,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,T){const S=x(T);S&&(S.isCubeTexture||S.mapping===Pr)?(h===void 0&&(h=new $t(new xn(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:Xi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qn.copy(T.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(Qn)),h.material.toneMapped=Qt.getTransfer(S.colorSpace)!==ne,(u!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $t(new qn(2,2),new ge({name:"BackgroundMaterial",uniforms:Xi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,T){_.getRGB(or,$c(i)),n.buffers.color.setClear(or.r,or.g,or.b,T,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,T=1){o.set(_),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:g,addToRenderList:m,dispose:b}}function Hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,P,I,N,F){let B=!1;const z=u(N,I,P);r!==z&&(r=z,c(r.object)),B=p(y,N,I,F),B&&x(y,N,I,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,T(y,P,I,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,I){const N=I.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let B=F[P.id];B===void 0&&(B={},F[P.id]=B);let z=B[N];return z===void 0&&(z=d(l()),B[N]=z),z}function d(y){const P=[],I=[],N=[];for(let F=0;F<e;F++)P[F]=0,I[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,P,I,N){const F=r.attributes,B=P.attributes;let z=0;const Q=I.getAttributes();for(const G in Q)if(Q[G].location>=0){const j=F[G];let ht=B[G];if(ht===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),j===void 0||j.attribute!==ht||ht&&j.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function x(y,P,I,N){const F={},B=P.attributes;let z=0;const Q=I.getAttributes();for(const G in Q)if(Q[G].location>=0){let j=B[G];j===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));const ht={};ht.attribute=j,j&&j.data&&(ht.data=j.data),F[G]=ht,z++}r.attributes=F,r.attributesNum=z,r.index=N}function g(){const y=r.newAttributes;for(let P=0,I=y.length;P<I;P++)y[P]=0}function m(y){f(y,0)}function f(y,P){const I=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;I[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),F[y]!==P&&(i.vertexAttribDivisor(y,P),F[y]=P)}function b(){const y=r.newAttributes,P=r.enabledAttributes;for(let I=0,N=P.length;I<N;I++)P[I]!==y[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function _(y,P,I,N,F,B,z){z===!0?i.vertexAttribIPointer(y,P,I,F,B):i.vertexAttribPointer(y,P,I,N,F,B)}function T(y,P,I,N){g();const F=N.attributes,B=I.getAttributes(),z=P.defaultAttributeValues;for(const Q in B){const G=B[Q];if(G.location>=0){let Y=F[Q];if(Y===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const j=Y.normalized,ht=Y.itemSize,ft=t.get(Y);if(ft===void 0)continue;const Rt=ft.buffer,Lt=ft.type,Nt=ft.bytesPerElement,X=Lt===i.INT||Lt===i.UNSIGNED_INT||Y.gpuType===So;if(Y.isInterleavedBufferAttribute){const K=Y.data,Mt=K.stride,Tt=Y.offset;if(K.isInstancedInterleavedBuffer){for(let lt=0;lt<G.locationSize;lt++)f(G.location+lt,K.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let lt=0;lt<G.locationSize;lt++)_(G.location+lt,ht/G.locationSize,Lt,j,Mt*Nt,(Tt+ht/G.locationSize*lt)*Nt,X)}else{if(Y.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)f(G.location+K,Y.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let K=0;K<G.locationSize;K++)_(G.location+K,ht/G.locationSize,Lt,j,ht*Nt,ht/G.locationSize*K*Nt,X)}}else if(z!==void 0){const j=z[Q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(G.location,j);break;case 3:i.vertexAttrib3fv(G.location,j);break;case 4:i.vertexAttrib4fv(G.location,j);break;default:i.vertexAttrib1fv(G.location,j)}}}}b()}function S(){U();for(const y in n){const P=n[y];for(const I in P){const N=P[I];for(const F in N)h(N[F].object),delete N[F];delete P[I]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const I in P){const N=P[I];for(const F in N)h(N[F].object),delete N[F];delete P[I]}delete n[y.id]}function R(y){for(const P in n){const I=n[P];if(I[y.id]===void 0)continue;const N=I[y.id];for(const F in N)h(N[F].object),delete N[F];delete I[y.id]}}function U(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function Wm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*d[g];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:S,maxSamples:E}}function qm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new kn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,_=b*4;let T=f.clippingState||null;l.value=T,T=h(x,d,_,p);for(let S=0;S!==_;++S)T[S]=e[S];f.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,T=p;_!==g;++_,T+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ym(i){let t=new WeakMap;function e(a,o){return o===Ia?a.mapping=Gi:o===Na&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ia||o===Na)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Hn=4,Zl=[.125,.215,.35,.446,.526,.582],ri=20,Zm=256,ls=new qo,jl=new Bt;let ga=null,_a=0,va=0,Ma=!1;const jm=new D;class Rr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=jm}=r;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=Ma,t.scissorTest=!1,Ui(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:pn,format:sn,colorSpace:Wi,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Km(r)),this._blurMaterial=$m(r,t,e),this._ggxMaterial=Jm(r,t,e)}return s}_compileMaterial(t){const e=new $t(new ce,t);this._renderer.compile(e,ls)}_sceneToCubeUV(t,e,n,s,r){const l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(jl),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new xn,new li({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let f=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(jl),f=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):T===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const S=this._cubeSize;Ui(s,T*S,_>2?S:0,S,S),u.setRenderTarget(s),f&&u.render(g,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gi||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ui(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ls)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,p=u*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Hn?n-x+Hn:0),f=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,Ui(r,m,f,3*g,2*g),s.setRenderTarget(r),s.render(o,ls),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Ui(t,m,f,3*g,2*g),s.setRenderTarget(t),s.render(o,ls)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ri-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):ri;m>ri&&Wt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const f=[];let b=0;for(let R=0;R<ri;++R){const U=R/g,M=Math.exp(-U*U/2);f.push(M),R===0?b+=M:R<m&&(b+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;const T=this._sizeLods[s],S=3*T*(s>_-Hn?s-_+Hn:0),E=4*(this._cubeSize-T);Ui(e,S,E,3*T,2*T),l.setRenderTarget(e),l.render(u,ls)}}function Km(i){const t=[],e=[],n=[];let s=i;const r=i-Hn+1+Zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Hn?l=Zl[a-i+Hn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,g=3,m=2,f=1,b=new Float32Array(g*x*p),_=new Float32Array(m*x*p),T=new Float32Array(f*x*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,U=E>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(M,g*x*E),_.set(d,m*x*E);const y=[E,E,E,E,E,E];T.set(y,f*x*E)}const S=new ce;S.setAttribute("position",new Me(b,g)),S.setAttribute("uv",new Me(_,m)),S.setAttribute("faceIndex",new Me(T,f)),n.push(new $t(S,null)),s>Hn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Kl(i,t,e){const n=new an(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jm(i,t,e){return new ge({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ur(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function $m(i,t,e){const n=new Float32Array(ri),s=new D(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Jl(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function $l(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Ur(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ia||l===Na,h=l===Gi||l===Hi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Rr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Rr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function t0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function e0(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,x=u.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let _=0,T=b.length;_<T;_+=3){const S=b[_+0],E=b[_+1],R=b[_+2];d.push(S,E,E,R,R,S)}}else if(x!==void 0){const b=x.array;g=x.version;for(let _=0,T=b.length/3-1;_<T;_+=3){const S=_+0,E=_+1,R=_+2;d.push(S,E,E,R,R,S)}}else return;const m=new(Yc(d)?Jc:Kc)(d,1);m.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function n0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,d*a,x),e.update(p,n,x))}function h(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];e.update(m,n,1)}function u(d,p,x,g){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,x);let f=0;for(let b=0;b<x;b++)f+=p[b]*g[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function s0(i,t,e){const n=new WeakMap,s=new oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let T=o.attributes.position.count*_,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const E=new Float32Array(T*S*4*u),R=new Zc(E,T,S,u);R.type=un,R.needsUpdate=!0;const U=_*4;for(let y=0;y<u;y++){const P=m[y],I=f[y],N=b[y],F=T*S*4*y;for(let B=0;B<P.count;B++){const z=B*U;p===!0&&(s.fromBufferAttribute(P,B),E[F+z+0]=s.x,E[F+z+1]=s.y,E[F+z+2]=s.z,E[F+z+3]=0),x===!0&&(s.fromBufferAttribute(I,B),E[F+z+4]=s.x,E[F+z+5]=s.y,E[F+z+6]=s.z,E[F+z+7]=0),g===!0&&(s.fromBufferAttribute(N,B),E[F+z+8]=s.x,E[F+z+9]=s.y,E[F+z+10]=s.z,E[F+z+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new it(T,S)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function r0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const bh=new Ae,Ql=new rh(1,1),Sh=new Zc,Eh=new Gu,Th=new Qc,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),Se(e,n)}}function u0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),Se(e,n)}}function f0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),Se(e,n)}}function d0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function g0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=qc,r=Ql):r=bh,e.setTexture2D(t||r,s)}function b0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eh,s)}function S0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Th,s)}function E0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sh,s)}function T0(i){switch(i){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return x0;case 5125:return g0;case 36294:return _0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}function A0(i,t){i.uniform1fv(this.addr,t)}function w0(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function C0(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function R0(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function P0(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D0(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function L0(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U0(i,t){i.uniform1iv(this.addr,t)}function I0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function F0(i,t){i.uniform4iv(this.addr,t)}function O0(i,t){i.uniform1uiv(this.addr,t)}function B0(i,t){i.uniform2uiv(this.addr,t)}function z0(i,t){i.uniform3uiv(this.addr,t)}function V0(i,t){i.uniform4uiv(this.addr,t)}function k0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||bh,r[a])}function G0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eh,r[a])}function H0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Th,r[a])}function W0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Sh,r[a])}function X0(i){switch(i){case 5126:return A0;case 35664:return w0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return U0;case 35667:case 35671:return I0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return z0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return W0}}class q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}}class Y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X0(e.type)}}class Z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function rc(i,t){i.seq.push(t),i.map[t.id]=t}function j0(i,t,e){const n=i.name,s=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),a=ya.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rc(e,c===void 0?new q0(o,i,t):new Y0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Z0(o),rc(e,u)),e=u}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);j0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const K0=37297;let J0=0;function $0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const oc=new qt;function Q0(i){Qt._getMatrix(oc,Qt.workingColorSpace,i);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$0(i.getShaderSource(t),o)}else return r}function tx(i,t){const e=Q0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ex(i,t){let e;switch(t){case Uc:e="Linear";break;case Ic:e="Reinhard";break;case Nc:e="Cineon";break;case bo:e="ACESFilmic";break;case Oc:e="AgX";break;case Bc:e="Neutral";break;case Fc:e="Custom";break;default:Wt("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new D;function nx(){Qt.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function sx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hs(i){return i!==""}function cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(ax,lx)}const ox=new Map;function lx(i,t){let e=Zt[t];if(e===void 0){const n=ox.get(t);if(n!==void 0)e=Zt[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(i){return i.replace(cx,hx)}function hx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ux(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function fx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Hi:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function px(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yo:t="ENVMAP_BLENDING_MULTIPLY";break;case ru:t="ENVMAP_BLENDING_MIX";break;case au:t="ENVMAP_BLENDING_ADD";break}return t}function mx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ux(e),c=fx(e),h=dx(e),u=px(e),d=mx(e),p=ix(e),x=sx(r),g=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(m=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,tx("linearToOutputTexel",e.outputColorSpace),nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=vo(a),a=cc(a,e),a=hc(a,e),o=vo(o),o=cc(o,e),o=hc(o,e),a=uc(a),o=uc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=b+m+a,T=b+f+o,S=ac(s,s.VERTEX_SHADER,_),E=ac(s,s.FRAGMENT_SHADER,T);s.attachShader(g,S),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(E)||"",B=I.trim(),z=N.trim(),Q=F.trim();let G=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,E);else{const j=lc(s,S,"vertex"),ht=lc(s,E,"fragment");ue("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+j+`
`+ht)}else B!==""?Wt("WebGLProgram: Program Info Log:",B):(z===""||Q==="")&&(Y=!1);Y&&(P.diagnostics={runnable:G,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(S),s.deleteShader(E),U=new _r(s,g),M=rx(s,g)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,K0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}let gx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vx(t),e.set(t,n)),n}}class vx{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}}function Mx(i,t,e,n,s,r,a){const o=new Io,l=new _x,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,I,N){const F=I.fog,B=N.geometry,z=M.isMeshStandardMaterial?I.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),G=Q&&Q.mapping===Pr?Q.image.height:null,Y=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&Wt("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ht=j!==void 0?j.length:0;let ft=0;B.morphAttributes.position!==void 0&&(ft=1),B.morphAttributes.normal!==void 0&&(ft=2),B.morphAttributes.color!==void 0&&(ft=3);let Rt,Lt,Nt,X;if(Y){const se=cn[Y];Rt=se.vertexShader,Lt=se.fragmentShader}else Rt=M.vertexShader,Lt=M.fragmentShader,l.update(M),Nt=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);const K=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Tt=N.isInstancedMesh===!0,lt=N.isBatchedMesh===!0,Ft=!!M.map,jt=!!M.matcap,mt=!!Q,$=!!M.aoMap,w=!!M.lightMap,tt=!!M.bumpMap,at=!!M.normalMap,ut=!!M.displacementMap,ot=!!M.emissiveMap,wt=!!M.metalnessMap,_t=!!M.roughnessMap,dt=M.anisotropy>0,C=M.clearcoat>0,v=M.dispersion>0,k=M.iridescence>0,Z=M.sheen>0,nt=M.transmission>0,q=dt&&!!M.anisotropyMap,Ut=C&&!!M.clearcoatMap,yt=C&&!!M.clearcoatNormalMap,Ot=C&&!!M.clearcoatRoughnessMap,Dt=k&&!!M.iridescenceMap,rt=k&&!!M.iridescenceThicknessMap,xt=Z&&!!M.sheenColorMap,kt=Z&&!!M.sheenRoughnessMap,J=!!M.specularMap,st=!!M.specularColorMap,Et=!!M.specularIntensityMap,L=nt&&!!M.transmissionMap,bt=nt&&!!M.thicknessMap,vt=!!M.gradientMap,pt=!!M.alphaMap,ct=M.alphaTest>0,et=!!M.alphaHash,Pt=!!M.extensions;let Xt=Wn;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const he={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Rt,fragmentShader:Lt,defines:M.defines,customVertexShaderID:Nt,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:lt,batchingColor:lt&&N._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&N.instanceColor!==null,instancingMorph:Tt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Wi,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:jt,envMap:mt,envMapMode:mt&&Q.mapping,envMapCubeUVHeight:G,aoMap:$,lightMap:w,bumpMap:tt,normalMap:at,displacementMap:d&&ut,emissiveMap:ot,normalMapObjectSpace:at&&M.normalMapType===hu,normalMapTangentSpace:at&&M.normalMapType===Do,metalnessMap:wt,roughnessMap:_t,anisotropy:dt,anisotropyMap:q,clearcoat:C,clearcoatMap:Ut,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ot,dispersion:v,iridescence:k,iridescenceMap:Dt,iridescenceThicknessMap:rt,sheen:Z,sheenColorMap:xt,sheenRoughnessMap:kt,specularMap:J,specularColorMap:st,specularIntensityMap:Et,transmission:nt,transmissionMap:L,thicknessMap:bt,gradientMap:vt,opaque:M.transparent===!1&&M.blending===zi&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:ct,alphaHash:et,combine:M.combine,mapUv:Ft&&g(M.map.channel),aoMapUv:$&&g(M.aoMap.channel),lightMapUv:w&&g(M.lightMap.channel),bumpMapUv:tt&&g(M.bumpMap.channel),normalMapUv:at&&g(M.normalMap.channel),displacementMapUv:ut&&g(M.displacementMap.channel),emissiveMapUv:ot&&g(M.emissiveMap.channel),metalnessMapUv:wt&&g(M.metalnessMap.channel),roughnessMapUv:_t&&g(M.roughnessMap.channel),anisotropyMapUv:q&&g(M.anisotropyMap.channel),clearcoatMapUv:Ut&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&g(M.sheenRoughnessMap.channel),specularMapUv:J&&g(M.specularMap.channel),specularColorMapUv:st&&g(M.specularColorMap.channel),specularIntensityMapUv:Et&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:bt&&g(M.thicknessMap.channel),alphaMapUv:pt&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(at||dt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ft||pt),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ne,decodeVideoTextureEmissive:ot&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ie,flipSided:M.side===Ne,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&M.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(b(y,M),_(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function T(M){const y=x[M.type];let P;if(y){const I=cn[y];P=Ss.clone(I.uniforms)}else P=M.uniforms;return P}function S(M,y){let P;for(let I=0,N=h.length;I<N;I++){const F=h[I];if(F.cacheKey===y){P=F,++P.usedTimes;break}}return P===void 0&&(P=new xx(i,y,M,r),h.push(P)),P}function E(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:S,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:U}}function yx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function bx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,x,g,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,x,g,m){const f=a(u,d,p,x,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,x,g,m){const f=a(u,d,p,x,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||bx),n.length>1&&n.sort(d||dc),s.length>1&&s.sort(d||dc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Sx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new pc,i.set(n,[a])):s>=r.length?(a=new pc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ex(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Bt};break;case"SpotLight":e={position:new D,direction:new D,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ax=0;function wx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cx(i){const t=new Ex,e=Tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ee,a=new ee;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,x=0,g=0,m=0,f=0,b=0,_=0,T=0,S=0,E=0,R=0;c.sort(wx);for(let M=0,y=c.length;M<y;M++){const P=c[M],I=P.color,N=P.intensity,F=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*N,u+=I.g*N,d+=I.b*N;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],N);R++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=z,p++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(I).multiplyScalar(N),z.distance=F,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[g]=z;const Q=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=Q.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=B,T++}g++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(I).multiplyScalar(N),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const Q=P.shadow,G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=P.shadow.matrix,_++}n.point[x]=z,x++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(N),z.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==b||U.numPointShadows!==_||U.numSpotShadows!==T||U.numSpotMaps!==S||U.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=T+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,U.directionalLength=p,U.pointLength=x,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=b,U.numPointShadows=_,U.numSpotShadows=T,U.numSpotMaps=S,U.numLightProbes=R,n.version=Ax++)}function l(c,h){let u=0,d=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const _=c[f];if(_.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(_.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function mc(i){const t=new Cx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new mc(i),t.set(s,[o])):r>=a.length?(o=new mc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lx(i,t,e){let n=new Oo;const s=new it,r=new it,a=new oe,o=new Yf({depthPacking:cu}),l=new Zf,c={},h=e.maxTextureSize,u={[Xn]:Ne,[Ne]:Xn,[Ie]:Ie},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Px,fragmentShader:Dx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new ce;x.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let f=this.type;this.render=function(E,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(dn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=f!==An&&this.type===An,F=f===An&&this.type!==An;for(let B=0,z=E.length;B<z;B++){const Q=E[B],G=Q.shadow;if(G===void 0){Wt("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Y=G.getFrameExtents();if(s.multiply(Y),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,G.mapSize.y=r.y)),G.map===null||N===!0||F===!0){const ht=this.type!==An?{minFilter:qe,magFilter:qe}:{};G.map!==null&&G.map.dispose(),G.map=new an(s.x,s.y,ht),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const j=G.getViewportCount();for(let ht=0;ht<j;ht++){const ft=G.getViewport(ht);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),I.viewport(a),G.updateMatrices(Q,ht),n=G.getFrustum(),T(R,U,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===An&&b(G,U),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,P)};function b(E,R){const U=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,U,p,g,null)}function _(E,R,U,M){let y=null;const P=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=y.uuid,N=R.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let B=F[N];B===void 0&&(B=y.clone(),F[N]=B,R.addEventListener("dispose",S)),y=B}if(y.visible=R.visible,y.wireframe=R.wireframe,M===An?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=U}return y}function T(E,R,U,M,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===An)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const N=t.update(E),F=E.material;if(Array.isArray(F)){const B=N.groups;for(let z=0,Q=B.length;z<Q;z++){const G=B[z],Y=F[G.materialIndex];if(Y&&Y.visible){const j=_(E,Y,M,y);E.onBeforeShadow(i,E,R,U,N,j,G),i.renderBufferDirect(U,null,N,j,E,G),E.onAfterShadow(i,E,R,U,N,j,G)}}}else if(F.visible){const B=_(E,F,M,y);E.onBeforeShadow(i,E,R,U,N,B,null),i.renderBufferDirect(U,null,N,B,E,null),E.onAfterShadow(i,E,R,U,N,B,null)}}const I=E.children;for(let N=0,F=I.length;N<F;N++)T(I[N],R,U,M,y)}function S(E){E.target.removeEventListener("dispose",S);for(const U in c){const M=c[U],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Ux={[wa]:Ca,[Ra]:La,[Pa]:Ua,[ki]:Da,[Ca]:wa,[La]:Ra,[Ua]:Pa,[Da]:ki};function Ix(i,t){function e(){let L=!1;const bt=new oe;let vt=null;const pt=new oe(0,0,0,0);return{setMask:function(ct){vt!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),vt=ct)},setLocked:function(ct){L=ct},setClear:function(ct,et,Pt,Xt,he){he===!0&&(ct*=Xt,et*=Xt,Pt*=Xt),bt.set(ct,et,Pt,Xt),pt.equals(bt)===!1&&(i.clearColor(ct,et,Pt,Xt),pt.copy(bt))},reset:function(){L=!1,vt=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,bt=!1,vt=null,pt=null,ct=null;return{setReversed:function(et){if(bt!==et){const Pt=t.get("EXT_clip_control");et?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),bt=et;const Xt=ct;ct=null,this.setClear(Xt)}},getReversed:function(){return bt},setTest:function(et){et?K(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(et){vt!==et&&!L&&(i.depthMask(et),vt=et)},setFunc:function(et){if(bt&&(et=Ux[et]),pt!==et){switch(et){case wa:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=et}},setLocked:function(et){L=et},setClear:function(et){ct!==et&&(bt&&(et=1-et),i.clearDepth(et),ct=et)},reset:function(){L=!1,vt=null,pt=null,ct=null,bt=!1}}}function s(){let L=!1,bt=null,vt=null,pt=null,ct=null,et=null,Pt=null,Xt=null,he=null;return{setTest:function(se){L||(se?K(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(se){bt!==se&&!L&&(i.stencilMask(se),bt=se)},setFunc:function(se,ln,$e){(vt!==se||pt!==ln||ct!==$e)&&(i.stencilFunc(se,ln,$e),vt=se,pt=ln,ct=$e)},setOp:function(se,ln,$e){(et!==se||Pt!==ln||Xt!==$e)&&(i.stencilOp(se,ln,$e),et=se,Pt=ln,Xt=$e)},setLocked:function(se){L=se},setClear:function(se){he!==se&&(i.clearStencil(se),he=se)},reset:function(){L=!1,bt=null,vt=null,pt=null,ct=null,et=null,Pt=null,Xt=null,he=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,f=null,b=null,_=null,T=null,S=null,E=null,R=new Bt(0,0,0),U=0,M=!1,y=null,P=null,I=null,N=null,F=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=Q>=2);let Y=null,j={};const ht=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Rt=new oe().fromArray(ht),Lt=new oe().fromArray(ft);function Nt(L,bt,vt,pt){const ct=new Uint8Array(4),et=i.createTexture();i.bindTexture(L,et),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<vt;Pt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(bt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return et}const X={};X[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(ki),tt(!1),at(il),K(i.CULL_FACE),$(dn);function K(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Mt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Tt(L,bt){return u[L]!==bt?(i.bindFramebuffer(L,bt),u[L]=bt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function lt(L,bt){let vt=p,pt=!1;if(L){vt=d.get(bt),vt===void 0&&(vt=[],d.set(bt,vt));const ct=L.textures;if(vt.length!==ct.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Pt=ct.length;et<Pt;et++)vt[et]=i.COLOR_ATTACHMENT0+et;vt.length=ct.length,pt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(vt)}function Ft(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const jt={[si]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};jt[Wh]=i.MIN,jt[Xh]=i.MAX;const mt={[qh]:i.ZERO,[Yh]:i.ONE,[Zh]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Qh]:i.ONE_MINUS_DST_COLOR,[Jh]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[su]:i.ONE_MINUS_CONSTANT_ALPHA};function $(L,bt,vt,pt,ct,et,Pt,Xt,he,se){if(L===dn){g===!0&&(Mt(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),L!==kh){if(L!==m||se!==M){if((f!==si||T!==si)&&(i.blendEquation(i.FUNC_ADD),f=si,T=si),se)switch(L){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ue("WebGLState: Invalid blending: ",L);break}else switch(L){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sl:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",L);break}b=null,_=null,S=null,E=null,R.set(0,0,0),U=0,m=L,M=se}return}ct=ct||bt,et=et||vt,Pt=Pt||pt,(bt!==f||ct!==T)&&(i.blendEquationSeparate(jt[bt],jt[ct]),f=bt,T=ct),(vt!==b||pt!==_||et!==S||Pt!==E)&&(i.blendFuncSeparate(mt[vt],mt[pt],mt[et],mt[Pt]),b=vt,_=pt,S=et,E=Pt),(Xt.equals(R)===!1||he!==U)&&(i.blendColor(Xt.r,Xt.g,Xt.b,he),R.copy(Xt),U=he),m=L,M=!1}function w(L,bt){L.side===Ie?Mt(i.CULL_FACE):K(i.CULL_FACE);let vt=L.side===Ne;bt&&(vt=!vt),tt(vt),L.blending===zi&&L.transparent===!1?$(dn):$(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function at(L){L!==Bh?(K(i.CULL_FACE),L!==P&&(L===il?i.cullFace(i.BACK):L===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=L}function ut(L){L!==I&&(z&&i.lineWidth(L),I=L)}function ot(L,bt,vt){L?(K(i.POLYGON_OFFSET_FILL),(N!==bt||F!==vt)&&(i.polygonOffset(bt,vt),N=bt,F=vt)):Mt(i.POLYGON_OFFSET_FILL)}function wt(L){L?K(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function _t(L){L===void 0&&(L=i.TEXTURE0+B-1),Y!==L&&(i.activeTexture(L),Y=L)}function dt(L,bt,vt){vt===void 0&&(Y===null?vt=i.TEXTURE0+B-1:vt=Y);let pt=j[vt];pt===void 0&&(pt={type:void 0,texture:void 0},j[vt]=pt),(pt.type!==L||pt.texture!==bt)&&(Y!==vt&&(i.activeTexture(vt),Y=vt),i.bindTexture(L,bt||X[L]),pt.type=L,pt.texture=bt)}function C(){const L=j[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Z(){try{i.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function nt(){try{i.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function yt(){try{i.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ot(){try{i.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Dt(){try{i.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function rt(){try{i.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function xt(L){Rt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Rt.copy(L))}function kt(L){Lt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Lt.copy(L))}function J(L,bt){let vt=c.get(bt);vt===void 0&&(vt=new WeakMap,c.set(bt,vt));let pt=vt.get(L);pt===void 0&&(pt=i.getUniformBlockIndex(bt,L.name),vt.set(L,pt))}function st(L,bt){const pt=c.get(bt).get(L);l.get(bt)!==pt&&(i.uniformBlockBinding(bt,pt,L.__bindingPointIndex),l.set(bt,pt))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,j={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,f=null,b=null,_=null,T=null,S=null,E=null,R=new Bt(0,0,0),U=0,M=!1,y=null,P=null,I=null,N=null,F=null,Rt.set(0,0,i.canvas.width,i.canvas.height),Lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:Mt,bindFramebuffer:Tt,drawBuffers:lt,useProgram:Ft,setBlending:$,setMaterial:w,setFlipSided:tt,setCullFace:at,setLineWidth:ut,setPolygonOffset:ot,setScissorTest:wt,activeTexture:_t,bindTexture:dt,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Dt,texImage3D:rt,updateUBOMapping:J,uniformBlockBinding:st,texStorage2D:yt,texStorage3D:Ot,texSubImage2D:Z,texSubImage3D:nt,compressedTexSubImage2D:q,compressedTexSubImage3D:Ut,scissor:xt,viewport:kt,reset:Et}}function Nx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return p?new OffscreenCanvas(C,v):Ms("canvas")}function g(C,v,k){let Z=1;const nt=dt(C);if((nt.width>k||nt.height>k)&&(Z=k/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(Z*nt.width),Ut=Math.floor(Z*nt.height);u===void 0&&(u=x(q,Ut));const yt=v?x(q,Ut):u;return yt.width=q,yt.height=Ut,yt.getContext("2d").drawImage(C,0,0,q,Ut),Wt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+q+"x"+Ut+")."),yt}else return"data"in C&&Wt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,k,Z,nt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=v;if(v===i.RED&&(k===i.FLOAT&&(q=i.R32F),k===i.HALF_FLOAT&&(q=i.R16F),k===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.R8UI),k===i.UNSIGNED_SHORT&&(q=i.R16UI),k===i.UNSIGNED_INT&&(q=i.R32UI),k===i.BYTE&&(q=i.R8I),k===i.SHORT&&(q=i.R16I),k===i.INT&&(q=i.R32I)),v===i.RG&&(k===i.FLOAT&&(q=i.RG32F),k===i.HALF_FLOAT&&(q=i.RG16F),k===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RG8UI),k===i.UNSIGNED_SHORT&&(q=i.RG16UI),k===i.UNSIGNED_INT&&(q=i.RG32UI),k===i.BYTE&&(q=i.RG8I),k===i.SHORT&&(q=i.RG16I),k===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(q=i.RGB16UI),k===i.UNSIGNED_INT&&(q=i.RGB32UI),k===i.BYTE&&(q=i.RGB8I),k===i.SHORT&&(q=i.RGB16I),k===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),k===i.UNSIGNED_INT&&(q=i.RGBA32UI),k===i.BYTE&&(q=i.RGBA8I),k===i.SHORT&&(q=i.RGBA16I),k===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){const Ut=nt?yr:Qt.getTransfer(Z);k===i.FLOAT&&(q=i.RGBA32F),k===i.HALF_FLOAT&&(q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(q=Ut===ne?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function T(C,v){let k;return C?v===null||v===oi||v===gs?k=i.DEPTH24_STENCIL8:v===un?k=i.DEPTH32F_STENCIL8:v===xs&&(k=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===oi||v===gs?k=i.DEPTH_COMPONENT24:v===un?k=i.DEPTH_COMPONENT32F:v===xs&&(k=i.DEPTH_COMPONENT16),k}function S(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function E(C){const v=C.target;v.removeEventListener("dispose",E),U(v),v.isVideoTexture&&h.delete(v)}function R(C){const v=C.target;v.removeEventListener("dispose",R),y(v)}function U(C){const v=n.get(C);if(v.__webglInit===void 0)return;const k=C.source,Z=d.get(k);if(Z){const nt=Z[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(C),Object.keys(Z).length===0&&d.delete(k)}n.remove(C)}function M(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const k=C.source,Z=d.get(k);delete Z[v.__cacheKey],a.memory.textures--}function y(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let nt=0;nt<v.__webglFramebuffer[Z].length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[Z][nt]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=C.textures;for(let Z=0,nt=k.length;Z<nt;Z++){const q=n.get(k[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(k[Z])}n.remove(C)}let P=0;function I(){P=0}function N(){const C=P;return C>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function F(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function B(C,v){const k=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const Z=C.image;if(Z===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function z(C,v){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){X(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function Q(C,v){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){X(k,C,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function G(C,v){const k=n.get(C);if(C.version>0&&k.__version!==C.version){K(k,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const Y={[Mr]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},j={[qe]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ht={[uu]:i.NEVER,[gu]:i.ALWAYS,[fu]:i.LESS,[qc]:i.LEQUAL,[du]:i.EQUAL,[xu]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function ft(C,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===Br||v.magFilter===Ls||v.magFilter===ai||v.minFilter===Ke||v.minFilter===Br||v.minFilter===Ls||v.minFilter===ai)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Y[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Y[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Y[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,j[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,j[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==Ls&&v.minFilter!==ai||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Rt(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",E));const Z=v.source;let nt=d.get(Z);nt===void 0&&(nt={},d.set(Z,nt));const q=F(v);if(q!==C.__cacheKey){nt[q]===void 0&&(nt[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),nt[q].usedTimes++;const Ut=nt[C.__cacheKey];Ut!==void 0&&(nt[C.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(v)),C.__cacheKey=q,C.__webglTexture=nt[q].texture}return k}function Lt(C,v,k){return Math.floor(Math.floor(C/k)/v)}function Nt(C,v,k,Z){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,Z,v.data);else{q.sort((rt,xt)=>rt.start-xt.start);let Ut=0;for(let rt=1;rt<q.length;rt++){const xt=q[Ut],kt=q[rt],J=xt.start+xt.count,st=Lt(kt.start,v.width,4),Et=Lt(xt.start,v.width,4);kt.start<=J+1&&st===Et&&Lt(kt.start+kt.count-1,v.width,4)===st?xt.count=Math.max(xt.count,kt.start+kt.count-xt.start):(++Ut,q[Ut]=kt)}q.length=Ut+1;const yt=i.getParameter(i.UNPACK_ROW_LENGTH),Ot=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let rt=0,xt=q.length;rt<xt;rt++){const kt=q[rt],J=Math.floor(kt.start/4),st=Math.ceil(kt.count/4),Et=J%v.width,L=Math.floor(J/v.width),bt=st,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Et,L,bt,vt,k,Z,v.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,yt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function X(C,v,k){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const nt=Rt(C,v),q=v.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+k);const Ut=n.get(q);if(q.version!==Ut.__version||nt===!0){e.activeTexture(i.TEXTURE0+k);const yt=Qt.getPrimaries(Qt.workingColorSpace),Ot=v.colorSpace===Gn?null:Qt.getPrimaries(v.colorSpace),Dt=v.colorSpace===Gn||yt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let rt=g(v.image,!1,s.maxTextureSize);rt=_t(v,rt);const xt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type);let J=_(v.internalFormat,xt,kt,v.colorSpace,v.isVideoTexture);ft(Z,v);let st;const Et=v.mipmaps,L=v.isVideoTexture!==!0,bt=Ut.__version===void 0||nt===!0,vt=q.dataReady,pt=S(v,rt);if(v.isDepthTexture)J=T(v.format===vs,v.type),bt&&(L?e.texStorage2D(i.TEXTURE_2D,1,J,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,J,rt.width,rt.height,0,xt,kt,null));else if(v.isDataTexture)if(Et.length>0){L&&bt&&e.texStorage2D(i.TEXTURE_2D,pt,J,Et[0].width,Et[0].height);for(let ct=0,et=Et.length;ct<et;ct++)st=Et[ct],L?vt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,st.width,st.height,xt,kt,st.data):e.texImage2D(i.TEXTURE_2D,ct,J,st.width,st.height,0,xt,kt,st.data);v.generateMipmaps=!1}else L?(bt&&e.texStorage2D(i.TEXTURE_2D,pt,J,rt.width,rt.height),vt&&Nt(v,rt,xt,kt)):e.texImage2D(i.TEXTURE_2D,0,J,rt.width,rt.height,0,xt,kt,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,J,Et[0].width,Et[0].height,rt.depth);for(let ct=0,et=Et.length;ct<et;ct++)if(st=Et[ct],v.format!==sn)if(xt!==null)if(L){if(vt)if(v.layerUpdates.size>0){const Pt=Yl(st.width,st.height,v.format,v.type);for(const Xt of v.layerUpdates){const he=st.data.subarray(Xt*Pt/st.data.BYTES_PER_ELEMENT,(Xt+1)*Pt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Xt,st.width,st.height,1,xt,he)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,st.width,st.height,rt.depth,xt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,J,st.width,st.height,rt.depth,0,st.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,st.width,st.height,rt.depth,xt,kt,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,J,st.width,st.height,rt.depth,0,xt,kt,st.data)}else{L&&bt&&e.texStorage2D(i.TEXTURE_2D,pt,J,Et[0].width,Et[0].height);for(let ct=0,et=Et.length;ct<et;ct++)st=Et[ct],v.format!==sn?xt!==null?L?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,st.width,st.height,xt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,J,st.width,st.height,0,st.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?vt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,st.width,st.height,xt,kt,st.data):e.texImage2D(i.TEXTURE_2D,ct,J,st.width,st.height,0,xt,kt,st.data)}else if(v.isDataArrayTexture)if(L){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,J,rt.width,rt.height,rt.depth),vt)if(v.layerUpdates.size>0){const ct=Yl(rt.width,rt.height,v.format,v.type);for(const et of v.layerUpdates){const Pt=rt.data.subarray(et*ct/rt.data.BYTES_PER_ELEMENT,(et+1)*ct/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,xt,kt,Pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,kt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,J,rt.width,rt.height,rt.depth,0,xt,kt,rt.data);else if(v.isData3DTexture)L?(bt&&e.texStorage3D(i.TEXTURE_3D,pt,J,rt.width,rt.height,rt.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,kt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,J,rt.width,rt.height,rt.depth,0,xt,kt,rt.data);else if(v.isFramebufferTexture){if(bt)if(L)e.texStorage2D(i.TEXTURE_2D,pt,J,rt.width,rt.height);else{let ct=rt.width,et=rt.height;for(let Pt=0;Pt<pt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,J,ct,et,0,xt,kt,null),ct>>=1,et>>=1}}else if(Et.length>0){if(L&&bt){const ct=dt(Et[0]);e.texStorage2D(i.TEXTURE_2D,pt,J,ct.width,ct.height)}for(let ct=0,et=Et.length;ct<et;ct++)st=Et[ct],L?vt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt,kt,st):e.texImage2D(i.TEXTURE_2D,ct,J,xt,kt,st);v.generateMipmaps=!1}else if(L){if(bt){const ct=dt(rt);e.texStorage2D(i.TEXTURE_2D,pt,J,ct.width,ct.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,kt,rt)}else e.texImage2D(i.TEXTURE_2D,0,J,xt,kt,rt);m(v)&&f(Z),Ut.__version=q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function K(C,v,k){if(v.image.length!==6)return;const Z=Rt(C,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const q=n.get(nt);if(nt.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);const Ut=Qt.getPrimaries(Qt.workingColorSpace),yt=v.colorSpace===Gn?null:Qt.getPrimaries(v.colorSpace),Ot=v.colorSpace===Gn||Ut===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let et=0;et<6;et++)!Dt&&!rt?xt[et]=g(v.image[et],!0,s.maxCubemapSize):xt[et]=rt?v.image[et].image:v.image[et],xt[et]=_t(v,xt[et]);const kt=xt[0],J=r.convert(v.format,v.colorSpace),st=r.convert(v.type),Et=_(v.internalFormat,J,st,v.colorSpace),L=v.isVideoTexture!==!0,bt=q.__version===void 0||Z===!0,vt=nt.dataReady;let pt=S(v,kt);ft(i.TEXTURE_CUBE_MAP,v);let ct;if(Dt){L&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Et,kt.width,kt.height);for(let et=0;et<6;et++){ct=xt[et].mipmaps;for(let Pt=0;Pt<ct.length;Pt++){const Xt=ct[Pt];v.format!==sn?J!==null?L?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,Xt.width,Xt.height,J,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,Et,Xt.width,Xt.height,0,Xt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,Xt.width,Xt.height,J,st,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,Et,Xt.width,Xt.height,0,J,st,Xt.data)}}}else{if(ct=v.mipmaps,L&&bt){ct.length>0&&pt++;const et=dt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Et,et.width,et.height)}for(let et=0;et<6;et++)if(rt){L?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,xt[et].width,xt[et].height,J,st,xt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Et,xt[et].width,xt[et].height,0,J,st,xt[et].data);for(let Pt=0;Pt<ct.length;Pt++){const he=ct[Pt].image[et].image;L?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,he.width,he.height,J,st,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,Et,he.width,he.height,0,J,st,he.data)}}else{L?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,J,st,xt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Et,J,st,xt[et]);for(let Pt=0;Pt<ct.length;Pt++){const Xt=ct[Pt];L?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,J,st,Xt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,Et,J,st,Xt.image[et])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),q.__version=nt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Mt(C,v,k,Z,nt,q){const Ut=r.convert(k.format,k.colorSpace),yt=r.convert(k.type),Ot=_(k.internalFormat,Ut,yt,k.colorSpace),Dt=n.get(v),rt=n.get(k);if(rt.__renderTarget=v,!Dt.__hasExternalTextures){const xt=Math.max(1,v.width>>q),kt=Math.max(1,v.height>>q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,q,Ot,xt,kt,v.depth,0,Ut,yt,null):e.texImage2D(nt,q,Ot,xt,kt,0,Ut,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,nt,rt.__webglTexture,0,ut(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,nt,rt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(C,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const Z=v.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,q=T(v.stencilBuffer,nt),Ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ut(v);ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,q,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,C)}else{const Z=v.textures;for(let nt=0;nt<Z.length;nt++){const q=Z[nt],Ut=r.convert(q.format,q.colorSpace),yt=r.convert(q.type),Ot=_(q.internalFormat,Ut,yt,q.colorSpace),Dt=ut(v);k&&ot(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Ot,v.width,v.height):ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,Ot,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);const nt=Z.__webglTexture,q=ut(v);if(v.depthTexture.format===_s)ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(v.depthTexture.format===vs)ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ft(C){const v=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=Z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Z=C.texture.mipmaps;Z&&Z.length>0?lt(v.__webglFramebuffer[0],C):lt(v.__webglFramebuffer,C)}else if(k){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),Tt(v.__webglDepthbuffer[Z],C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,q)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Tt(v.__webglDepthbuffer,C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(C,v,k){const Z=n.get(C);v!==void 0&&Mt(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ft(C)}function mt(C){const v=C.texture,k=n.get(C),Z=n.get(v);C.addEventListener("dispose",R);const nt=C.textures,q=C.isWebGLCubeRenderTarget===!0,Ut=nt.length>1;if(Ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,a.memory.textures++),q){k.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[yt]=[];for(let Ot=0;Ot<v.mipmaps.length;Ot++)k.__webglFramebuffer[yt][Ot]=i.createFramebuffer()}else k.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let yt=0;yt<v.mipmaps.length;yt++)k.__webglFramebuffer[yt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let yt=0,Ot=nt.length;yt<Ot;yt++){const Dt=n.get(nt[yt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ot(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let yt=0;yt<nt.length;yt++){const Ot=nt[yt];k.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[yt]);const Dt=r.convert(Ot.format,Ot.colorSpace),rt=r.convert(Ot.type),xt=_(Ot.internalFormat,Dt,rt,Ot.colorSpace,C.isXRRenderTarget===!0),kt=ut(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,xt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,k.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ft(i.TEXTURE_CUBE_MAP,v);for(let yt=0;yt<6;yt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ot=0;Ot<v.mipmaps.length;Ot++)Mt(k.__webglFramebuffer[yt][Ot],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ot);else Mt(k.__webglFramebuffer[yt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let yt=0,Ot=nt.length;yt<Ot;yt++){const Dt=nt[yt],rt=n.get(Dt);let xt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,rt.__webglTexture),ft(xt,Dt),Mt(k.__webglFramebuffer,C,Dt,i.COLOR_ATTACHMENT0+yt,xt,0),m(Dt)&&f(xt)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Z.__webglTexture),ft(yt,v),v.mipmaps&&v.mipmaps.length>0)for(let Ot=0;Ot<v.mipmaps.length;Ot++)Mt(k.__webglFramebuffer[Ot],C,v,i.COLOR_ATTACHMENT0,yt,Ot);else Mt(k.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,yt,0);m(v)&&f(yt),e.unbindTexture()}C.depthBuffer&&Ft(C)}function $(C){const v=C.textures;for(let k=0,Z=v.length;k<Z;k++){const nt=v[k];if(m(nt)){const q=b(C),Ut=n.get(nt).__webglTexture;e.bindTexture(q,Ut),f(q),e.unbindTexture()}}}const w=[],tt=[];function at(C){if(C.samples>0){if(ot(C)===!1){const v=C.textures,k=C.width,Z=C.height;let nt=i.COLOR_BUFFER_BIT;const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(C),yt=v.length>1;if(yt)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Ot=C.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const rt=n.get(v[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,nt,i.NEAREST),l===!0&&(w.length=0,tt.length=0,w.push(i.COLOR_ATTACHMENT0+Dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(w.push(q),tt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const rt=n.get(v[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ut(C){return Math.min(s.maxSamples,C.samples)}function ot(C){const v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function _t(C,v){const k=C.colorSpace,Z=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Wi&&k!==Gn&&(Qt.getTransfer(k)===ne?(Z!==sn||nt!==gn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",k)),v}function dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=jt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ot}function Fx(i,t){function e(n,s=Gn){let r;const a=Qt.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===To)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===kc)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===sn)return i.RGBA;if(n===_s)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Ao)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===Co)return i.RG;if(n===Ro)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===dr||n===pr||n===mr||n===xr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ga||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ga)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===ja||n===Ka||n===Ja||n===$a||n===Qa||n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ah(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ge({vertexShader:Ox,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends hi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null;const g=typeof XRWebGLBinding<"u",m=new zx,f={},b=e.getContextAttributes();let _=null,T=null;const S=[],E=[],R=new it;let U=null;const M=new Xe;M.viewport=new oe;const y=new Xe;y.viewport=new oe;const P=[M,y],I=new nd;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=S[X];return K===void 0&&(K=new ra,S[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=S[X];return K===void 0&&(K=new ra,S[X]=K),K.getGripSpace()},this.getHand=function(X){let K=S[X];return K===void 0&&(K=new ra,S[X]=K),K.getHandSpace()};function B(X){const K=E.indexOf(X.inputSource);if(K===-1)return;const Mt=S[K];Mt!==void 0&&(Mt.update(X.inputSource,X.frame,c||a),Mt.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Q);for(let X=0;X<S.length;X++){const K=E[X];K!==null&&(E[X]=null,S[X].disconnect(K))}N=null,F=null,m.reset();for(const X in f)delete f[X];t.setRenderTarget(_),p=null,d=null,u=null,s=null,T=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Tt=null,lt=null;b.depth&&(lt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=b.stencil?vs:_s,Tt=b.stencil?gs:oi);const Ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new an(d.textureWidth,d.textureHeight,{format:sn,type:gn,depthTexture:new rh(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new an(p.framebufferWidth,p.framebufferHeight,{format:sn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(X){for(let K=0;K<X.removed.length;K++){const Mt=X.removed[K],Tt=E.indexOf(Mt);Tt>=0&&(E[Tt]=null,S[Tt].disconnect(Mt))}for(let K=0;K<X.added.length;K++){const Mt=X.added[K];let Tt=E.indexOf(Mt);if(Tt===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=E.length){E.push(Mt),Tt=Ft;break}else if(E[Ft]===null){E[Ft]=Mt,Tt=Ft;break}if(Tt===-1)break}const lt=S[Tt];lt&&lt.connect(Mt)}}const G=new D,Y=new D;function j(X,K,Mt){G.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const Tt=G.distanceTo(Y),lt=K.projectionMatrix.elements,Ft=Mt.projectionMatrix.elements,jt=lt[14]/(lt[10]-1),mt=lt[14]/(lt[10]+1),$=(lt[9]+1)/lt[5],w=(lt[9]-1)/lt[5],tt=(lt[8]-1)/lt[0],at=(Ft[8]+1)/Ft[0],ut=jt*tt,ot=jt*at,wt=Tt/(-tt+at),_t=wt*-tt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_t),X.translateZ(wt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),lt[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const dt=jt+wt,C=mt+wt,v=ut-_t,k=ot+(Tt-_t),Z=$*mt/C*dt,nt=w*mt/C*dt;X.projectionMatrix.makePerspective(v,k,Z,nt,dt,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ht(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,Mt=X.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),I.near=y.near=M.near=K,I.far=y.far=M.far=Mt,(N!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,F=I.far),I.layers.mask=X.layers.mask|6,M.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const Tt=X.parent,lt=I.cameras;ht(I,Tt);for(let Ft=0;Ft<lt.length;Ft++)ht(lt[Ft],Tt);lt.length===2?j(I,M,y):I.projectionMatrix.copy(M.projectionMatrix),ft(X,I,Tt)};function ft(X,K,Mt){Mt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(Mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=bs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(X){return f[X]};let Rt=null;function Lt(X,K){if(h=K.getViewerPose(c||a),x=K,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Tt=!1;Mt.length!==I.cameras.length&&(I.cameras.length=0,Tt=!0);for(let mt=0;mt<Mt.length;mt++){const $=Mt[mt];let w=null;if(p!==null)w=p.getViewport($);else{const at=u.getViewSubImage(d,$);w=at.viewport,mt===0&&(t.setRenderTargetTextures(T,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(T))}let tt=P[mt];tt===void 0&&(tt=new Xe,tt.layers.enable(mt),tt.viewport=new oe,P[mt]=tt),tt.matrix.fromArray($.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray($.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(w.x,w.y,w.width,w.height),mt===0&&(I.matrix.copy(tt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Tt===!0&&I.cameras.push(tt)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const mt=u.getDepthInformation(Mt[0]);mt&&mt.isValid&&mt.texture&&m.init(mt,s.renderState)}if(lt&&lt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let mt=0;mt<Mt.length;mt++){const $=Mt[mt].camera;if($){let w=f[$];w||(w=new ah,f[$]=w);const tt=u.getCameraImage($);w.sourceTexture=tt}}}}for(let Mt=0;Mt<S.length;Mt++){const Tt=E[Mt],lt=S[Mt];Tt!==null&&lt!==void 0&&lt.update(Tt,K,c||a)}Rt&&Rt(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const Nt=new yh;Nt.setAnimationLoop(Lt),this.setAnimationLoop=function(X){Rt=X},this.dispose=function(){}}}const ti=new on,kx=new ee;function Gx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$c(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,_,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ne&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ne&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),_=b.envMap,T=b.envMapRotation;_&&(m.envMap.value=_,ti.copy(T),ti.x*=-1,ti.y*=-1,ti.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(ti)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const T=_.program;n.uniformBlockBinding(b,T)}function c(b,_){let T=s[b.id];T===void 0&&(x(b),T=h(b),s[b.id]=T,b.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(b,S);const E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){const _=u();b.__bindingPointIndex=_;const T=i.createBuffer(),S=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=s[b.id],T=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,R=T.length;E<R;E++){const U=Array.isArray(T[E])?T[E]:[T[E]];for(let M=0,y=U.length;M<y;M++){const P=U[M];if(p(P,E,M,S)===!0){const I=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let B=0;B<N.length;B++){const z=N[B],Q=g(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+F,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,_,T,S){const E=b.value,R=_+"_"+T;if(S[R]===void 0)return typeof E=="number"||typeof E=="boolean"?S[R]=E:S[R]=E.clone(),!0;{const U=S[R];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return S[R]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function x(b){const _=b.uniforms;let T=0;const S=16;for(let R=0,U=_.length;R<U;R++){const M=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,P=M.length;y<P;y++){const I=M[y],N=Array.isArray(I.value)?I.value:[I.value];for(let F=0,B=N.length;F<B;F++){const z=N[F],Q=g(z),G=T%S,Y=G%Q.boundary,j=G+Y;T+=Y,j!==0&&S-j<Q.storage&&(T+=S-j),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=Q.storage}}}const E=T%S;return E>0&&(T+=S-E),b.__size=T,b.__cache={},this}function g(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Wt("WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const Wx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Tn=null;function Xx(){return Tn===null&&(Tn=new eh(Wx,32,32,Co,pn),Tn.minFilter=Ke,Tn.magFilter=Ke,Tn.wrapS=Cn,Tn.wrapT=Cn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class qx{constructor(t={}){const{canvas:e=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Set([Po,Ro,wo]),g=new Set([gn,oi,xs,gs,Eo,To]),m=new Uint32Array(4),f=new Int32Array(4);let b=null,_=null;const T=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Re;let U=0,M=0,y=null,P=-1,I=null;const N=new oe,F=new oe;let B=null;const z=new Bt(0);let Q=0,G=e.width,Y=e.height,j=1,ht=null,ft=null;const Rt=new oe(0,0,G,Y),Lt=new oe(0,0,G,Y);let Nt=!1;const X=new Oo;let K=!1,Mt=!1;const Tt=new ee,lt=new D,Ft=new oe,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function $(){return y===null?j:1}let w=n;function tt(A,O){return e.getContext(A,O)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mo}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),w===null){const O="webgl2";if(w=tt(O,A),w===null)throw tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let at,ut,ot,wt,_t,dt,C,v,k,Z,nt,q,Ut,yt,Ot,Dt,rt,xt,kt,J,st,Et,L,bt;function vt(){at=new t0(w),at.init(),Et=new Fx(w,at),ut=new Xm(w,at,t,Et),ot=new Ix(w,at),ut.reversedDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),wt=new i0(w),_t=new yx,dt=new Nx(w,at,ot,_t,ut,Et,wt),C=new Ym(E),v=new Qm(E),k=new od(w),L=new Hm(w,k),Z=new e0(w,k,wt,L),nt=new r0(w,Z,k,wt),kt=new s0(w,ut,dt),Dt=new qm(_t),q=new Mx(E,C,v,at,ut,L,Dt),Ut=new Gx(E,_t),yt=new Sx,Ot=new Rx(at),xt=new Gm(E,C,v,ot,nt,p,l),rt=new Lx(E,nt,ut),bt=new Hx(w,wt,ut,ot),J=new Wm(w,at,wt),st=new n0(w,at,wt),wt.programs=q.programs,E.capabilities=ut,E.extensions=at,E.properties=_t,E.renderLists=yt,E.shadowMap=rt,E.state=ot,E.info=wt}vt();const pt=new Vx(E,w);this.xr=pt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(G,Y,!1))},this.getSize=function(A){return A.set(G,Y)},this.setSize=function(A,O,H=!0){if(pt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Y=O,e.width=Math.floor(A*j),e.height=Math.floor(O*j),H===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(G*j,Y*j).floor()},this.setDrawingBufferSize=function(A,O,H){G=A,Y=O,j=H,e.width=Math.floor(A*H),e.height=Math.floor(O*H),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,O,H,W){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,O,H,W),ot.viewport(N.copy(Rt).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Lt)},this.setScissor=function(A,O,H,W){A.isVector4?Lt.set(A.x,A.y,A.z,A.w):Lt.set(A,O,H,W),ot.scissor(F.copy(Lt).multiplyScalar(j).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(A){ot.setScissorTest(Nt=A)},this.setOpaqueSort=function(A){ht=A},this.setTransparentSort=function(A){ft=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,H=!0){let W=0;if(A){let V=!1;if(y!==null){const gt=y.texture.format;V=x.has(gt)}if(V){const gt=y.texture.type,At=g.has(gt),It=xt.getClearColor(),Ct=xt.getClearAlpha(),Gt=It.r,Ht=It.g,zt=It.b;At?(m[0]=Gt,m[1]=Ht,m[2]=zt,m[3]=Ct,w.clearBufferuiv(w.COLOR,0,m)):(f[0]=Gt,f[1]=Ht,f[2]=zt,f[3]=Ct,w.clearBufferiv(w.COLOR,0,f))}else W|=w.COLOR_BUFFER_BIT}O&&(W|=w.DEPTH_BUFFER_BIT),H&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),xt.dispose(),yt.dispose(),Ot.dispose(),_t.dispose(),C.dispose(),v.dispose(),nt.dispose(),L.dispose(),bt.dispose(),q.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ko),pt.removeEventListener("sessionend",Jo),Yn.stop()};function ct(A){A.preventDefault(),Sr("WebGLRenderer: Context Lost."),R=!0}function et(){Sr("WebGLRenderer: Context Restored."),R=!1;const A=wt.autoReset,O=rt.enabled,H=rt.autoUpdate,W=rt.needsUpdate,V=rt.type;vt(),wt.autoReset=A,rt.enabled=O,rt.autoUpdate=H,rt.needsUpdate=W,rt.type=V}function Pt(A){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xt(A){const O=A.target;O.removeEventListener("dispose",Xt),he(O)}function he(A){se(A),_t.remove(A)}function se(A){const O=_t.get(A).programs;O!==void 0&&(O.forEach(function(H){q.releaseProgram(H)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,H,W,V,gt){O===null&&(O=jt);const At=V.isMesh&&V.matrixWorld.determinant()<0,It=Lh(A,O,H,W,V);ot.setMaterial(W,At);let Ct=H.index,Gt=1;if(W.wireframe===!0){if(Ct=Z.getWireframeAttribute(H),Ct===void 0)return;Gt=2}const Ht=H.drawRange,zt=H.attributes.position;let Jt=Ht.start*Gt,re=(Ht.start+Ht.count)*Gt;gt!==null&&(Jt=Math.max(Jt,gt.start*Gt),re=Math.min(re,(gt.start+gt.count)*Gt)),Ct!==null?(Jt=Math.max(Jt,0),re=Math.min(re,Ct.count)):zt!=null&&(Jt=Math.max(Jt,0),re=Math.min(re,zt.count));const me=re-Jt;if(me<0||me===1/0)return;L.setup(V,W,It,H,Ct);let xe,le=J;if(Ct!==null&&(xe=k.get(Ct),le=st,le.setIndex(xe)),V.isMesh)W.wireframe===!0?(ot.setLineWidth(W.wireframeLinewidth*$()),le.setMode(w.LINES)):le.setMode(w.TRIANGLES);else if(V.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),ot.setLineWidth(Vt*$()),V.isLineSegments?le.setMode(w.LINES):V.isLineLoop?le.setMode(w.LINE_LOOP):le.setMode(w.LINE_STRIP)}else V.isPoints?le.setMode(w.POINTS):V.isSprite&&le.setMode(w.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ys("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))le.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Vt=V._multiDrawStarts,fe=V._multiDrawCounts,te=V._multiDrawCount,Ve=Ct?k.get(Ct).bytesPerElement:1,di=_t.get(W).currentProgram.getUniforms();for(let ke=0;ke<te;ke++)di.setValue(w,"_gl_DrawID",ke),le.render(Vt[ke]/Ve,fe[ke])}else if(V.isInstancedMesh)le.renderInstances(Jt,me,V.count);else if(H.isInstancedBufferGeometry){const Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,fe=Math.min(H.instanceCount,Vt);le.renderInstances(Jt,me,fe)}else le.render(Jt,me)};function ln(A,O,H){A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=Ne,A.needsUpdate=!0,Ds(A,O,H),A.side=Xn,A.needsUpdate=!0,Ds(A,O,H),A.side=Ie):Ds(A,O,H)}this.compile=function(A,O,H=null){H===null&&(H=A),_=Ot.get(H),_.init(O),S.push(_),H.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),A!==H&&A.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights();const W=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const gt=V.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const It=gt[At];ln(It,H,V),W.add(It)}else ln(gt,H,V),W.add(gt)}),_=S.pop(),W},this.compileAsync=function(A,O,H=null){const W=this.compile(A,O,H);return new Promise(V=>{function gt(){if(W.forEach(function(At){_t.get(At).currentProgram.isReady()&&W.delete(At)}),W.size===0){V(A);return}setTimeout(gt,10)}at.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let $e=null;function Dh(A){$e&&$e(A)}function Ko(){Yn.stop()}function Jo(){Yn.start()}const Yn=new yh;Yn.setAnimationLoop(Dh),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){$e=A,pt.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},pt.addEventListener("sessionstart",Ko),pt.addEventListener("sessionend",Jo),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(O),O=pt.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,O,y),_=Ot.get(A,S.length),_.init(O),S.push(_),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(Tt,fn,O.reversedDepth),Mt=this.localClippingEnabled,K=Dt.init(this.clippingPlanes,Mt),b=yt.get(A,T.length),b.init(),T.push(b),pt.enabled===!0&&pt.isPresenting===!0){const gt=E.xr.getDepthSensingMesh();gt!==null&&Fr(gt,O,-1/0,E.sortObjects)}Fr(A,O,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(ht,ft),mt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,mt&&xt.addToRenderList(b,A),this.info.render.frame++,K===!0&&Dt.beginShadows();const H=_.state.shadowsArray;rt.render(H,A,O),K===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=b.opaque,V=b.transmissive;if(_.setupLights(),O.isArrayCamera){const gt=O.cameras;if(V.length>0)for(let At=0,It=gt.length;At<It;At++){const Ct=gt[At];Qo(W,V,A,Ct)}mt&&xt.render(A);for(let At=0,It=gt.length;At<It;At++){const Ct=gt[At];$o(b,A,Ct,Ct.viewport)}}else V.length>0&&Qo(W,V,A,O),mt&&xt.render(A),$o(b,A,O);y!==null&&M===0&&(dt.updateMultisampleRenderTarget(y),dt.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(E,A,O),L.resetDefaultState(),P=-1,I=null,S.pop(),S.length>0?(_=S[S.length-1],K===!0&&Dt.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,T.pop(),T.length>0?b=T[T.length-1]:b=null};function Fr(A,O,H,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){W&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);const At=nt.update(A),It=A.material;It.visible&&b.push(A,At,It,H,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const At=nt.update(A),It=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ft.copy(At.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(It)){const Ct=At.groups;for(let Gt=0,Ht=Ct.length;Gt<Ht;Gt++){const zt=Ct[Gt],Jt=It[zt.materialIndex];Jt&&Jt.visible&&b.push(A,At,Jt,H,Ft.z,zt)}}else It.visible&&b.push(A,At,It,H,Ft.z,null)}}const gt=A.children;for(let At=0,It=gt.length;At<It;At++)Fr(gt[At],O,H,W)}function $o(A,O,H,W){const{opaque:V,transmissive:gt,transparent:At}=A;_.setupLightsView(H),K===!0&&Dt.setGlobalState(E.clippingPlanes,H),W&&ot.viewport(N.copy(W)),V.length>0&&Ps(V,O,H),gt.length>0&&Ps(gt,O,H),At.length>0&&Ps(At,O,H),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Qo(A,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[W.id]===void 0&&(_.state.transmissionRenderTarget[W.id]=new an(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?pn:gn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const gt=_.state.transmissionRenderTarget[W.id],At=W.viewport||N;gt.setSize(At.z*E.transmissionResolutionScale,At.w*E.transmissionResolutionScale);const It=E.getRenderTarget(),Ct=E.getActiveCubeFace(),Gt=E.getActiveMipmapLevel();E.setRenderTarget(gt),E.getClearColor(z),Q=E.getClearAlpha(),Q<1&&E.setClearColor(16777215,.5),E.clear(),mt&&xt.render(H);const Ht=E.toneMapping;E.toneMapping=Wn;const zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),_.setupLightsView(W),K===!0&&Dt.setGlobalState(E.clippingPlanes,W),Ps(A,H,W),dt.updateMultisampleRenderTarget(gt),dt.updateRenderTargetMipmap(gt),at.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let re=0,me=O.length;re<me;re++){const xe=O[re],{object:le,geometry:Vt,material:fe,group:te}=xe;if(fe.side===Ie&&le.layers.test(W.layers)){const Ve=fe.side;fe.side=Ne,fe.needsUpdate=!0,tl(le,H,W,Vt,fe,te),fe.side=Ve,fe.needsUpdate=!0,Jt=!0}}Jt===!0&&(dt.updateMultisampleRenderTarget(gt),dt.updateRenderTargetMipmap(gt))}E.setRenderTarget(It,Ct,Gt),E.setClearColor(z,Q),zt!==void 0&&(W.viewport=zt),E.toneMapping=Ht}function Ps(A,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,gt=A.length;V<gt;V++){const At=A[V],{object:It,geometry:Ct,group:Gt}=At;let Ht=At.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),It.layers.test(H.layers)&&tl(It,O,H,Ct,Ht,Gt)}}function tl(A,O,H,W,V,gt){A.onBeforeRender(E,O,H,W,V,gt),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(E,O,H,W,A,gt),V.transparent===!0&&V.side===Ie&&V.forceSinglePass===!1?(V.side=Ne,V.needsUpdate=!0,E.renderBufferDirect(H,O,W,V,A,gt),V.side=Xn,V.needsUpdate=!0,E.renderBufferDirect(H,O,W,V,A,gt),V.side=Ie):E.renderBufferDirect(H,O,W,V,A,gt),A.onAfterRender(E,O,H,W,V,gt)}function Ds(A,O,H){O.isScene!==!0&&(O=jt);const W=_t.get(A),V=_.state.lights,gt=_.state.shadowsArray,At=V.state.version,It=q.getParameters(A,V.state,gt,O,H),Ct=q.getProgramCacheKey(It);let Gt=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?v:C).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",Xt),Gt=new Map,W.programs=Gt);let Ht=Gt.get(Ct);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===At)return nl(A,It),Ht}else It.uniforms=q.getUniforms(A),A.onBeforeCompile(It,E),Ht=q.acquireProgram(It,Ct),Gt.set(Ct,Ht),W.uniforms=It.uniforms;const zt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Dt.uniform),nl(A,It),W.needsLights=Ih(A),W.lightsStateVersion=At,W.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function el(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=_r.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function nl(A,O){const H=_t.get(A);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Lh(A,O,H,W,V){O.isScene!==!0&&(O=jt),dt.resetTextureUnits();const gt=O.fog,At=W.isMeshStandardMaterial?O.environment:null,It=y===null?E.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Wi,Ct=(W.isMeshStandardMaterial?v:C).get(W.envMap||At),Gt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),zt=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,re=!!H.morphAttributes.color;let me=Wn;W.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(me=E.toneMapping);const xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=xe!==void 0?xe.length:0,Vt=_t.get(W),fe=_.state.lights;if(K===!0&&(Mt===!0||A!==I)){const Pe=A===I&&W.id===P;Dt.setState(W,A,Pe)}let te=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==fe.state.version||Vt.outputColorSpace!==It||V.isBatchedMesh&&Vt.batching===!1||!V.isBatchedMesh&&Vt.batching===!0||V.isBatchedMesh&&Vt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Vt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Vt.instancing===!1||!V.isInstancedMesh&&Vt.instancing===!0||V.isSkinnedMesh&&Vt.skinning===!1||!V.isSkinnedMesh&&Vt.skinning===!0||V.isInstancedMesh&&Vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Vt.instancingMorph===!1&&V.morphTexture!==null||Vt.envMap!==Ct||W.fog===!0&&Vt.fog!==gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Dt.numPlanes||Vt.numIntersection!==Dt.numIntersection)||Vt.vertexAlphas!==Gt||Vt.vertexTangents!==Ht||Vt.morphTargets!==zt||Vt.morphNormals!==Jt||Vt.morphColors!==re||Vt.toneMapping!==me||Vt.morphTargetsCount!==le)&&(te=!0):(te=!0,Vt.__version=W.version);let Ve=Vt.currentProgram;te===!0&&(Ve=Ds(W,O,V));let di=!1,ke=!1,Ki=!1;const de=Ve.getUniforms(),Fe=Vt.uniforms;if(ot.useProgram(Ve.program)&&(di=!0,ke=!0,Ki=!0),W.id!==P&&(P=W.id,ke=!0),di||I!==A){ot.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),de.setValue(w,"projectionMatrix",A.projectionMatrix),de.setValue(w,"viewMatrix",A.matrixWorldInverse);const Oe=de.map.cameraPosition;Oe!==void 0&&Oe.setValue(w,lt.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&de.setValue(w,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(w,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,ke=!0,Ki=!0)}if(V.isSkinnedMesh){de.setOptional(w,V,"bindMatrix"),de.setOptional(w,V,"bindMatrixInverse");const Pe=V.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),de.setValue(w,"boneTexture",Pe.boneTexture,dt))}V.isBatchedMesh&&(de.setOptional(w,V,"batchingTexture"),de.setValue(w,"batchingTexture",V._matricesTexture,dt),de.setOptional(w,V,"batchingIdTexture"),de.setValue(w,"batchingIdTexture",V._indirectTexture,dt),de.setOptional(w,V,"batchingColorTexture"),V._colorsTexture!==null&&de.setValue(w,"batchingColorTexture",V._colorsTexture,dt));const Ye=H.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&kt.update(V,H,Ve),(ke||Vt.receiveShadow!==V.receiveShadow)&&(Vt.receiveShadow=V.receiveShadow,de.setValue(w,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Fe.envMap.value=Ct,Fe.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Fe.envMapIntensity.value=O.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Xx()),ke&&(de.setValue(w,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&Uh(Fe,Ki),gt&&W.fog===!0&&Ut.refreshFogUniforms(Fe,gt),Ut.refreshMaterialUniforms(Fe,W,j,Y,_.state.transmissionRenderTarget[A.id]),_r.upload(w,el(Vt),Fe,dt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_r.upload(w,el(Vt),Fe,dt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(w,"center",V.center),de.setValue(w,"modelViewMatrix",V.modelViewMatrix),de.setValue(w,"normalMatrix",V.normalMatrix),de.setValue(w,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pe=W.uniformsGroups;for(let Oe=0,Or=Pe.length;Oe<Or;Oe++){const Zn=Pe[Oe];bt.update(Zn,Ve),bt.bind(Zn,Ve)}}return Ve}function Uh(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Ih(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,O,H){const W=_t.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),_t.get(A.texture).__webglTexture=O,_t.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const H=_t.get(A);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const Nh=w.createFramebuffer();this.setRenderTarget=function(A,O=0,H=0){y=A,U=O,M=H;let W=!0,V=null,gt=!1,At=!1;if(A){const Ct=_t.get(A);if(Ct.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(Ct.__webglFramebuffer===void 0)dt.setupRenderTarget(A);else if(Ct.__hasExternalTextures)dt.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const zt=A.depthTexture;if(Ct.__boundDepthTexture!==zt){if(zt!==null&&_t.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(At=!0);const Ht=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?V=Ht[O][H]:V=Ht[O],gt=!0):A.samples>0&&dt.useMultisampledRTT(A)===!1?V=_t.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[H]:V=Ht,N.copy(A.viewport),F.copy(A.scissor),B=A.scissorTest}else N.copy(Rt).multiplyScalar(j).floor(),F.copy(Lt).multiplyScalar(j).floor(),B=Nt;if(H!==0&&(V=Nh),ot.bindFramebuffer(w.FRAMEBUFFER,V)&&W&&ot.drawBuffers(A,V),ot.viewport(N),ot.scissor(F),ot.setScissorTest(B),gt){const Ct=_t.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ct.__webglTexture,H)}else if(At){const Ct=O;for(let Gt=0;Gt<A.textures.length;Gt++){const Ht=_t.get(A.textures[Gt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Gt,Ht.__webglTexture,H,Ct)}}else if(A!==null&&H!==0){const Ct=_t.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ct.__webglTexture,H)}P=-1},this.readRenderTargetPixels=function(A,O,H,W,V,gt,At,It=0){if(!(A&&A.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){ot.bindFramebuffer(w.FRAMEBUFFER,Ct);try{const Gt=A.textures[It],Ht=Gt.format,zt=Gt.type;if(!ut.textureFormatReadable(Ht)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(zt)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&H>=0&&H<=A.height-V&&(A.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+It),w.readPixels(O,H,W,V,Et.convert(Ht),Et.convert(zt),gt))}finally{const Gt=y!==null?_t.get(y).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(A,O,H,W,V,gt,At,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(O>=0&&O<=A.width-W&&H>=0&&H<=A.height-V){ot.bindFramebuffer(w.FRAMEBUFFER,Ct);const Gt=A.textures[It],Ht=Gt.format,zt=Gt.type;if(!ut.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.bufferData(w.PIXEL_PACK_BUFFER,gt.byteLength,w.STREAM_READ),A.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+It),w.readPixels(O,H,W,V,Et.convert(Ht),Et.convert(zt),0);const re=y!==null?_t.get(y).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,re);const me=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Mu(w,me,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,gt),w.deleteBuffer(Jt),w.deleteSync(me),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,H=0){const W=Math.pow(2,-H),V=Math.floor(A.image.width*W),gt=Math.floor(A.image.height*W),At=O!==null?O.x:0,It=O!==null?O.y:0;dt.setTexture2D(A,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,At,It,V,gt),ot.unbindTexture()};const Fh=w.createFramebuffer(),Oh=w.createFramebuffer();this.copyTextureToTexture=function(A,O,H=null,W=null,V=0,gt=null){gt===null&&(V!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=V,V=0):gt=0);let At,It,Ct,Gt,Ht,zt,Jt,re,me;const xe=A.isCompressedTexture?A.mipmaps[gt]:A.image;if(H!==null)At=H.max.x-H.min.x,It=H.max.y-H.min.y,Ct=H.isBox3?H.max.z-H.min.z:1,Gt=H.min.x,Ht=H.min.y,zt=H.isBox3?H.min.z:0;else{const Ye=Math.pow(2,-V);At=Math.floor(xe.width*Ye),It=Math.floor(xe.height*Ye),A.isDataArrayTexture?Ct=xe.depth:A.isData3DTexture?Ct=Math.floor(xe.depth*Ye):Ct=1,Gt=0,Ht=0,zt=0}W!==null?(Jt=W.x,re=W.y,me=W.z):(Jt=0,re=0,me=0);const le=Et.convert(O.format),Vt=Et.convert(O.type);let fe;O.isData3DTexture?(dt.setTexture3D(O,0),fe=w.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(dt.setTexture2DArray(O,0),fe=w.TEXTURE_2D_ARRAY):(dt.setTexture2D(O,0),fe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const te=w.getParameter(w.UNPACK_ROW_LENGTH),Ve=w.getParameter(w.UNPACK_IMAGE_HEIGHT),di=w.getParameter(w.UNPACK_SKIP_PIXELS),ke=w.getParameter(w.UNPACK_SKIP_ROWS),Ki=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Gt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ht),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zt);const de=A.isDataArrayTexture||A.isData3DTexture,Fe=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const Ye=_t.get(A),Pe=_t.get(O),Oe=_t.get(Ye.__renderTarget),Or=_t.get(Pe.__renderTarget);ot.bindFramebuffer(w.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Zn=0;Zn<Ct;Zn++)de&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(A).__webglTexture,V,zt+Zn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(O).__webglTexture,gt,me+Zn)),w.blitFramebuffer(Gt,Ht,At,It,Jt,re,At,It,w.DEPTH_BUFFER_BIT,w.NEAREST);ot.bindFramebuffer(w.READ_FRAMEBUFFER,null),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||_t.has(A)){const Ye=_t.get(A),Pe=_t.get(O);ot.bindFramebuffer(w.READ_FRAMEBUFFER,Fh),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,Oh);for(let Oe=0;Oe<Ct;Oe++)de?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ye.__webglTexture,V,zt+Oe):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ye.__webglTexture,V),Fe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pe.__webglTexture,gt,me+Oe):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pe.__webglTexture,gt),V!==0?w.blitFramebuffer(Gt,Ht,At,It,Jt,re,At,It,w.COLOR_BUFFER_BIT,w.NEAREST):Fe?w.copyTexSubImage3D(fe,gt,Jt,re,me+Oe,Gt,Ht,At,It):w.copyTexSubImage2D(fe,gt,Jt,re,Gt,Ht,At,It);ot.bindFramebuffer(w.READ_FRAMEBUFFER,null),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Fe?A.isDataTexture||A.isData3DTexture?w.texSubImage3D(fe,gt,Jt,re,me,At,It,Ct,le,Vt,xe.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(fe,gt,Jt,re,me,At,It,Ct,le,xe.data):w.texSubImage3D(fe,gt,Jt,re,me,At,It,Ct,le,Vt,xe):A.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,gt,Jt,re,At,It,le,Vt,xe.data):A.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,gt,Jt,re,xe.width,xe.height,le,xe.data):w.texSubImage2D(w.TEXTURE_2D,gt,Jt,re,At,It,le,Vt,xe);w.pixelStorei(w.UNPACK_ROW_LENGTH,te),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ve),w.pixelStorei(w.UNPACK_SKIP_PIXELS,di),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ki),gt===0&&O.generateMipmaps&&w.generateMipmap(fe),ot.unbindTexture()},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?dt.setTextureCube(A,0):A.isData3DTexture?dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?dt.setTexture2DArray(A,0):dt.setTexture2D(A,0),ot.unbindTexture()},this.resetState=function(){U=0,M=0,y=null,ot.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const xc={type:"change"},Yo={type:"start"},Ah={type:"end"},cr=new ws,gc=new kn,Yx=Math.cos(70*Rn.DEG2RAD),ye=new D,Be=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ba=1e-6;class Zx extends rd{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new rn,this._lastTargetPosition=new D,this._quat=new rn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ql,this._sphericalDelta=new ql,this._scale=1,this._panOffset=new D,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new D,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kx.bind(this),this._onPointerDown=jx.bind(this),this._onPointerUp=Jx.bind(this),this._onContextMenu=sg.bind(this),this._onMouseWheel=tg.bind(this),this._onKeyDown=eg.bind(this),this._onTouchStart=ng.bind(this),this._onTouchMove=ig.bind(this),this._onMouseDown=$x.bind(this),this._onMouseMove=Qx.bind(this),this._interceptControlDown=rg.bind(this),this._interceptControlUp=ag.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xc),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(cr.origin.copy(this.object.position),cr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cr.direction))<Yx?this.object.lookAt(this.target):(gc.setFromNormalAndCoplanarPoint(this.object.up,this.target),cr.intersectPlane(gc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ba||this._lastTargetPosition.distanceToSquared(this.target)>ba?(this.dispatchEvent(xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Kx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ah),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $x(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case Bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case Bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Yo)}function Qx(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function tg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(Yo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ah))}function eg(i){this.enabled!==!1&&this._handleKeyDown(i)}function ng(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Yo)}function ig(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function sg(i){this.enabled!==!1&&i.preventDefault()}function rg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ag(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class og extends Dr{constructor(){super();const t=new xn;t.deleteAttribute("uv");const e=new Je({side:Ne}),n=new Je,s=new Mh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new $t(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new nh(t,n,6),o=new _e;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new $t(t,Ii(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new $t(t,Ii(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new $t(t,Ii(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new $t(t,Ii(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new $t(t,Ii(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new $t(t,Ii(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ii(i){return new qf({color:0,emissive:16777215,emissiveIntensity:i})}const vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lg=new qo(-1,1,1,-1,0,1);class cg extends ce{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const hg=new cg;class Zo{constructor(t){this._mesh=new $t(hg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,lg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ug extends ji{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ss.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Zo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _c extends ji{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class fg extends ji{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class dg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ug(vr),this.copyPass.material.blending=dn,this.clock=new id}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(a instanceof _c?n=!0:a instanceof fg&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const pg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Yi extends ji{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,a,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new an(r,a,{type:pn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new an(r,a,{type:pn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=pg;this.highPassUniforms=Ss.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new it(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ss.clone(vr.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Bt,this._oldClearAlpha=1,this._basic=new li,this._fsQuad=new Zo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let s=0;s<t;s++)e.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Yi.BlurDirectionX=new it(1,0);Yi.BlurDirectionY=new it(0,1);const hr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mg extends ji{constructor(){super(),this.uniforms=Ss.clone(hr.uniforms),this.material=new Xf({name:hr.name,uniforms:this.uniforms,vertexShader:hr.vertexShader,fragmentShader:hr.fragmentShader}),this._fsQuad=new Zo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const vc=`
  varying vec2 vUv;
  void main(){ vUv=uv; gl_Position=vec4(position.xy, 1.0, 1.0); }
`,xg=`
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
`;function gg(i){const t=new Dr,e=new No,n=new qn(2,2),s={time:{value:0},aspect:{value:1},mobile:{value:0},lightweight:{value:i?1:0},auroraA:{value:new Bt().setRGB(.075,.9,.61)},auroraB:{value:new Bt().setRGB(.38,.095,.62)}},r=new $t(n,new ge({uniforms:s,vertexShader:vc,fragmentShader:xg,depthTest:!1,depthWrite:!1}));r.frustumCulled=!1,t.add(r);const a=new Lr(document.createElement("canvas"));a.colorSpace=Re;const o=new $t(n,new ge({uniforms:{image:{value:a}},vertexShader:vc,fragmentShader:"uniform sampler2D image; varying vec2 vUv; void main(){gl_FragColor=texture2D(image,vUv); #include <colorspace_fragment> }".replace("#include",`
#include`).replace("> }",`>
}`),transparent:!0,depthTest:!1,depthWrite:!1}));return o.frustumCulled=!1,o.renderOrder=1,t.add(o),{scene:t,camera:e,uniforms:s,resize(l,c){s.aspect.value=l/c,s.mobile.value=l<760?1:0,_g(a.image,l,c,i),a.needsUpdate=!0},dispose(){n.dispose(),r.material.dispose(),o.material.dispose(),a.dispose()}}}function _g(i,t,e,n){const s=Math.min(1.6,devicePixelRatio||1);i.width=Math.round(t*s),i.height=Math.round(e*s);const r=i.getContext("2d");r.scale(s,s);const a=t,o=e,l=Ln(8072),c=a<760,h=c?.585:.694,u=(m,f)=>{r.fillStyle=f,r.beginPath(),m.forEach(([b,_],T)=>T?r.lineTo(b*a,_*o):r.moveTo(b*a,_*o)),r.closePath(),r.fill()},d=[{offset:0,height:.17,color:"#152e44",snow:"#456274",shade:"#1c384c",haze:"#163644"},{offset:.034,height:.121,color:"#132b3c",snow:"#3c5969",shade:"#152e3e",haze:"#142d3c"},{offset:.068,height:.086,color:"#0e2634",snow:"#294854",shade:"#102a39",haze:"#122b38"}];for(const[m,f]of d.entries()){const b=h-.052+f.offset,_=[[-.14,b]],T=[];let S=-.16+m*.03;for(;S<1.21;){const R=.067+l()*.18,U=f.height*(.38+l()*.68),M=S+R*(.3+l()*.28),y=b-U,P=[S,b-.003],I=[M,y],N=[S+R,b],F=[S+(M-S)*.57,b-U*.51],B=[M+(S+R-M)*.26,b-U*.69],z=[M+(S+R-M)*.58,b-U*.36];_.push(P,F,I,B,z,N),T.push({left:P,tip:I,right:N,a:F,b:B,c:z,elevation:U,span:R}),S+=R*.87}const E=r.createLinearGradient(0,(b-f.height)*o,0,(b+.06)*o);E.addColorStop(0,f.color),E.addColorStop(1,f.haze),u([..._,[1.2,h+.1],[-.2,h+.1]],E);for(const{tip:R,right:U,a:M,b:y,c:P,elevation:I,span:N}of T){const[F,B]=R,z=[F+N*.13,B+I*.75];u([R,y,P,U,z,[F+N*.024,B+I*.31]],f.shade),r.globalAlpha=.69,u([M,R,y,[F+N*.045,B+I*.22],[F+N*.059,B+I*.45],[F-N*.013,B+I*.34],[F-N*.064,B+I*.51],[F-N*.082,B+I*.43]],f.snow),r.globalAlpha=.27,u([R,[F+N*.018,B+I*.27],z,[F+N*.085,B+I*.55],y],f.snow),r.globalAlpha=1}}function p(m,f,b,_,T){const S=b*T;r.fillStyle=_,r.beginPath(),r.moveTo(m,f-b);for(let E=1;E<=7;E++){const R=E/7,U=f-b+b*R*.94,M=S*R;r.lineTo(m-M,U),r.lineTo(m-M*.55,U-b*.028)}r.lineTo(m-S*.12,f),r.lineTo(m+S*.12,f);for(let E=7;E>0;E--){const R=E/7,U=f-b+b*R*.94,M=S*R;r.lineTo(m+M*.5,U-b*.023),r.lineTo(m+M,U+b*.027)}r.closePath(),r.fill()}for(let m=0;m<3;m++){const f=o*(h+m*.018),b=["#193647","#102b3a","#0a2331"][m];for(let _=-20;_<a+20;_+=4+l()*10){const T=Math.pow(Math.abs(_/a-.57)*1.75,1.5);p(_,f+l()*o*.017+Math.sin(_/a*9+m)*o*.013,(.012+l()*.039)*(1+T*.62)*o,b,.18+l()*.12)}}const x=r.createLinearGradient(0,(h+.022)*o,0,o);x.addColorStop(0,"#163543"),x.addColorStop(.18,"#213e4b"),x.addColorStop(.54,"#142b3c"),x.addColorStop(1,"#05111e"),u([[-.1,h+.034],[.04,h+.043],[.2,h+.025],[.35,h+.047],[.55,h+.038],[.74,h+.045],[.9,h+.023],[1.1,h+.041],[1.1,1],[-.1,1]],x);for(let m=0;m<12;m++){const f=o*(h+.055+m*.021),b=r.createLinearGradient(0,f,0,f+o*.03);b.addColorStop(0,"rgba(119,170,184,0)"),b.addColorStop(.45,"rgba(119,170,184,.09)"),b.addColorStop(1,"rgba(119,170,184,0)"),r.fillStyle=b,r.beginPath(),r.moveTo(-20,f),r.bezierCurveTo(a*.26,f-o*.016,a*.69,f+o*.029,a+20,f-o*.006),r.lineTo(a+20,f+o*.018),r.bezierCurveTo(a*.6,f+o*.04,a*.3,f+o*.012,-20,f+o*.026),r.fill()}for(let m=0;m<(n?3200:13500);m++){const f=l()*a,b=o*(h+.05+l()*(.95-h)),_=(b/o-h)*3;r.fillStyle=l()<.5?"rgba(161,199,212,.10)":"rgba(0,13,29,.15)",r.fillRect(f,b,(.2+l()*4.6)*_,.3+_*l())}for(let m=0;m<34;m++){const f=m%2,b=(f?.84+l()*.19:l()*.18-.01)*a,_=o*(h+.039+l()*.025);p(b,_,o*(.022+l()*.057)*(c?.8:1),f?"#0a202d":"#0b202c",.19+l()*.09)}const g=r.createLinearGradient(0,o*.78,0,o);g.addColorStop(0,"rgba(3,10,18,0)"),g.addColorStop(1,"rgba(3,10,18,.61)"),r.fillStyle=g,r.fillRect(0,o*.78,a,o*.22)}function vg(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ce;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Mc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);const x=Mc(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Mc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Me(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<e;x++){const g=h.getComponent(d,x);o.setComponent(d+u,x,g)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const Dn=Math.PI*2,_n=-5.5,Rs=13.1,Mg=5.15,Ue=i=>new Bt(i),hn=new _e,yg=new D(0,1,0);function Nr(i){return Mg*Math.pow(Math.max(0,1-i),.82)*(.85+.15*Math.min(1,i*10))}function wh(i){const t=i()*Dn,e=i()*2-1,n=Math.pow(i(),.36),s=Math.sqrt(1-e*e)*n;return new D(Math.cos(t)*s*22,1.5+e*n*12.9,Math.sin(t)*s*13)}function yc(i,t){i.onBeforeCompile=e=>{e.uniforms.treeDissolve=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSprigPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSprigPosition = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float treeDissolve;
varying vec3 vSprigPosition;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (treeDissolve > 0.0) {
          vec3 cell = floor(vSprigPosition * 8.0);
          float threshold = fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          if (threshold < treeDissolve) discard;
        }
      `)}}function bg(i){const t=Ln(5479),e=[],n=[],s=[],r=["#10382d","#204e38","#235641","#142f28","#2b614b","#19503b","#3e715c"].map(Ue),a=["#5d8473","#809d8c","#bacfbf"].map(Ue),o=new D,l=new D,c=new Cs(.61,1,1,5,1).toNonIndexed(),h=i?17:23;for(let p=0;p<h;p++){const x=.055+p/(h-1)*.917,g=Math.round(17-x*9);for(let m=0;m<g;m++){const f=m/g*Dn+p*.83+(t()-.5)*.3,b=Nr(x)*(.76+.3*t()),_=_n+Rs*x+(t()-.5)*.34,T=Math.cos(f),S=Math.sin(f),E=(t()-.41)*.41+.17,R=.54+b*.065,U=new ch(new D(T*.12,_,S*.12),new D(T*b*.4,_-.36,S*b*.4),new D(T*b*.76,_+E-R,S*b*.76),new D(T*b,_+E,S*b));for(let y=0;y<4;y++){const P=U.getPoint(y/4),I=U.getPoint((y+1)/4);l.subVectors(I,P),hn.position.copy(P).lerp(I,.5),hn.quaternion.setFromUnitVectors(yg,o.copy(l).normalize());const N=(.027+b*.011)*(1-y*.17);hn.scale.set(N,l.length(),N),hn.updateMatrix(),s.push(c.clone().applyMatrix4(hn.matrix))}const M=i?18:35;for(let y=0;y<M;y++){const P=.08+y/M*.91,I=U.getPoint(P),N=f+(y%2?1:-1)*(.29+t()*1.32),F=Math.cos(N),B=Math.sin(N),z=(.1+b*.175)*Math.pow(1-P,.45)*(.64+.61*t()),Q=.14+t()*.55,G=i?8:15,Y=r[Math.floor(t()*r.length)],j=t()<.22;for(let ht=0;ht<G;ht++){const ft=(ht+.4)/G,Rt=ht*2.399963+(t()-.5)*.78,Lt=I.x+F*z*ft,Nt=I.z+B*z*ft,X=I.y+z*ft*Q,K=(.095+t()*.17+b*.016)*(1-ft*.55),Mt=Math.cos(Rt)*Math.sin(N),Tt=-Math.cos(Rt)*Math.cos(N),lt=Math.sin(Rt)*.78+(j?-.17:.22),Ft=.012+t()*.019,jt=Math.sin(N)*Ft,mt=-Math.cos(N)*Ft;e.push(Lt-jt,X-.007,Nt-mt,Lt+jt,X+.009,Nt+mt,Lt+(Mt+F*.4)*K,X+lt*K,Nt+(Tt+B*.4)*K);const w=lt>.31&&t()<.15&&P>.49?a[Math.floor(t()*a.length)]:Y,tt=.52+t()*.48;n.push(Y.r*.48,Y.g*.48,Y.b*.48,Y.r*tt,Y.g*tt,Y.b*tt,w.r*1.15,w.g*1.15,w.b*1.15)}}}}c.dispose();const u=new ce;u.setAttribute("position",new Kt(e,3)),u.setAttribute("color",new Kt(n,3)),u.computeVertexNormals();const d=vg(s);return s.forEach(p=>p.dispose()),{needles:u,branches:d}}const Sg=`
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
`,Eg=`
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
`;function jo(i,t=!1){const e=new ce;for(const[a,o]of[["position",3],["drift",3],["color",3],["seed",1],["size",1],["kind",1]])e.setAttribute(a,new Kt(i.flatMap(l=>l[a]),o));const n={time:{value:0},spread:{value:0},floating:{value:0},burstWidth:{value:1},pixels:{value:1},audio:{value:0},garland:{value:t?1:0}},s=new ge({uniforms:n,vertexShader:Sg,fragmentShader:Eg,transparent:!0,blending:wn,depthWrite:!1,toneMapped:!1}),r=new sh(e,s);return r.frustumCulled=!1,r}function Tg(i,t){const e=Ln(4618),n=Ln(28749),s=[t.primary,t.accent,"#fff2d5","#a6defb"].map(Ue);return Array.from({length:i},()=>{const r=Math.pow(e(),1.36)*.99,a=e()*Dn,o=Nr(r)*(.55+e()*.49),l=_n+Rs*r+(e()-.5)*.43,c=Math.cos(a)*o,h=Math.sin(a)*o,u=e(),d=e(),p=s[u<.62?0:u<.8?1:u<.92?2:3].clone().multiplyScalar(.14+d*.58),x=wh(n);return{position:[c,l,h],drift:[x.x-c,x.y-l,x.z-h],color:p.toArray(),seed:e(),size:.72+d*d*(d>.978?11.4:4.5),kind:d>.989?.62:0}})}function bc(i,t,e,n=96,s=5){return new $t(new Ho(i,n,t,s,!1),e)}function Ag(i){const t=new Te,e=Ln(36093);function n(x,g=0){const m=.088+.876*x,f=x*Dn*7.15,b=x*Dn*35,_=Nr(m)*1.025+.095+Math.cos(f*2+.8)*.07+Math.cos(b)*g,T=_n+Rs*m+Math.sin(f*2+.9)*.115+Math.sin(b)*g;return new D(Math.cos(f)*_,T,Math.sin(f)*_)}const s=x=>new oh(Array.from({length:420},(g,m)=>n(m/419,x))),r=s(.034),a=s(-.034),o=new Je({color:"#f3ad56",metalness:.64,roughness:.31,emissive:"#ffad48",emissiveIntensity:.79}),l=new Je({color:"#dbad72",metalness:.67,roughness:.34,emissive:"#ffd89e",emissiveIntensity:.4}),c=i?490:720;t.add(bc(r,.019,o,c,5),bc(a,.012,l,c,5));const h=[],u=["#ffc774","#ffdf9e","#fff0c6","#ff9295","#83ead7"].map(Ue),d=i?218:326;for(let x=0;x<d;x++){const g=x/(d-1),m=(x%3===0?a:r).getPointAt(g),f=x%11===4||x%11===8,b=x%23===0,_=u[b?2:f?x%2?3:4:x%3===0?1:0];h.push({position:m.toArray(),drift:[0,0,0],color:_.clone().multiplyScalar(b?1.78:1.39).toArray(),seed:e(),size:b?21:f?11.6:8.1+e()*3.8,kind:b?.85:f?.1:0})}const p=jo(h,!0);return t.add(p),{group:t,points:p,materials:[o,l]}}function wg(){const i=new Te;i.position.y=_n+Rs+.57;const t=new ce,e=[],n=[],s=Ue("#ffb453").multiplyScalar(1.52),r=Ue("#fff0bf").multiplyScalar(2.8),a=[0,0,.29],o=[0,0,-.29],l=Array.from({length:10},(p,x)=>{const g=Math.PI/2+x*Dn/10,m=x%2?.425:.985;return[Math.cos(g)*m,Math.sin(g)*m,0]});for(let p=0;p<10;p++){const x=l[p],g=l[(p+1)%10];e.push(...a,...x,...g,...o,...g,...x);const m=p%2?s:r;n.push(...m.toArray(),...r.toArray(),...s.toArray(),...m.toArray(),...s.toArray(),...r.toArray())}t.setAttribute("position",new Kt(e,3)),t.setAttribute("color",new Kt(n,3)),t.computeVertexNormals();const c=new Je({color:"#ffd48c",vertexColors:!0,emissive:"#ff9d47",emissiveIntensity:.87,metalness:.45,roughness:.24,side:Ie}),h=new $t(t,c),u=jo([{position:[0,0,.05],drift:[0,0,0],color:Ue("#ffc77d").multiplyScalar(.86).toArray(),seed:.4,size:104,kind:.74}]),d=new Mh("#ffc179",13,12,2);return i.add(h,u,d),{group:i,mesh:h,glow:u,lamp:d}}function ei(i,t,e){const n=new nh(i,t,e);return n.instanceMatrix.setUsage(_u),n.frustumCulled=!1,n}function ni(i,t,e,n,s,r,a,o,l=0,c=0,h=0){hn.position.set(e,n,s),hn.rotation.set(l,c,h),hn.scale.set(r,a,o),hn.updateMatrix(),i.setMatrixAt(t,hn.matrix)}function Sc(i,t,e){const n=wh(t);n.y=Math.max(_n+.3,n.y);const s=new D(t()-.5,t()-.5,t()-.5).normalize();return{home:i,target:n,axis:s,spin:(.55+t()*1.9)*(t()<.5?-1:1),lift:e}}function Ec(i,t){const e=i.map(([u,d=1])=>({mesh:u,stride:d,home:u.instanceMatrix.array.slice()})),n=new ee,s=new ee,r=new D,a=new D,o=new rn;let l=0,c=1,h=0;return(u,d,p)=>{if(!(d===l&&p===c&&u===h)){if(d===0){if(l!==0)for(const{mesh:x,home:g}of e)x.instanceMatrix.array.set(g),x.instanceMatrix.needsUpdate=!0}else{const x=Math.sin(d*Math.PI);for(let g=0;g<u;g++){const{home:m,target:f,axis:b,spin:_,lift:T}=t[g];r.set(Rn.lerp(m.x,f.x*p,d),Rn.lerp(m.y,f.y,d)+x*T,Rn.lerp(m.z,f.z*p,d)),o.setFromAxisAngle(b,_*d),a.copy(m).applyQuaternion(o),n.makeRotationFromQuaternion(o).setPosition(r.sub(a));for(const{mesh:S,stride:E,home:R}of e)for(let U=0;U<E;U++){const M=g*E+U;s.fromArray(R,M*16).premultiply(n),S.setMatrixAt(M,s)}}for(const{mesh:g}of e)g.instanceMatrix.needsUpdate=!0}l=d,c=p,h=u}}}function Cg(i){const t=Ln(69917),e=Ln(86147),n=new Te,s=new Te,r=new go({metalness:.74,roughness:.22,clearcoat:.8,clearcoatRoughness:.13,envMapIntensity:1.25}),a=new Je({color:"#f7bb64",metalness:.79,roughness:.29,envMapIntensity:1.22}),o=new Je({roughness:.48,metalness:.37,envMapIntensity:.95}),l=new Je({roughness:.34,metalness:.52,envMapIntensity:1.15}),c=ei(new Cs(.49,.55,.38,9),a,600),h=ei(new Go(1,i?9:14,i?7:10),r,600),u=ei(new Cr(1.005,.026,5,14),a,600),d=ei(new xn(1,1,1),o,600),p=ei(new xn(1,1,1),l,600),x=ei(new xn(1,1,1),l,600),g=ei(new Cr(.26,.085,6,10),l,1200),m=[],f=[],b=[],_=[];for(let R=0;R<600;R++){const U=.112+Math.pow(t(),1.14)*.79,M=t()*Dn,y=Nr(U)*(.86+t()*.16),P=(R<30?.17:.08)+Math.pow(t(),1.7)*(R<30?.2:.16),[I,N,F]=[Math.cos(M)*y,_n+Rs*U,Math.sin(M)*y];ni(h,R,I,N,F,P,P*(.92+t()*.15),P),ni(c,R,I,N+P*.97,F,P,P,P),ni(u,R,I,N,F,P,P,P,Math.PI*.5,0,t()*.25),m.push(t()),b.push(Sc(new D(I,N,F),e,.53));const B=R%9,z=B*Dn/9+(t()-.5)*(.45+R%4*.045),Q=3.4+Math.pow(t(),.73)*(2.75+B%3*.49),G=Math.cos(z)*Q,Y=Math.sin(z)*Q,j=R<26?.45+t()*.72:.12+t()*.36,ht=j*(.47+t()*.62),ft=_n-.41+ht*.5+(R%27===0&&R>12?.29:0),Rt=t()*Dn;ni(d,R,G,ft,Y,j,ht,j,0,Rt),ni(p,R,G,ft,Y,j*.17,ht*1.017,j*1.014,0,Rt),ni(x,R,G,ft,Y,j*1.014,ht*1.019,j*.14,0,Rt);for(let Lt=0;Lt<2;Lt++){const Nt=Lt?1:-1;ni(g,R*2+Lt,G+Math.cos(Rt)*Nt*j*.13,ft+ht*.57,Y-Math.sin(Rt)*Nt*j*.13,j*.66,j*.44,j*.6,Math.PI*.44,0,Nt*.26)}f.push(t()),_.push(Sc(new D(G,ft,Y),e,1.8))}n.add(d,p,x,g),s.add(h,c,u);const T=Ec([[h],[c],[u]],b),S=Ec([[d],[p],[x],[g,2]],_);function E(R){const U=Ue(R.bellColor),M=Ue("#a22642"),y=Ue("#edf0d7"),P=Ue("#387e84"),I=Ue(R.box1),N=Ue(R.box2),F=Ue("#f6c979"),B=Ue("#e5eee0");for(let z=0;z<R.bells;z++){const Q=m[z];h.setColorAt(z,Q<.42?U:Q<.68?M:Q<.84?y:P)}for(let z=0;z<R.boxes;z++){const Q=f[z],G=Q>.86?B:Q>.49?N:I;d.setColorAt(z,G),p.setColorAt(z,Q>.86?I:F),x.setColorAt(z,Q>.86?I:F),g.setColorAt(z*2,Q>.86?I:F),g.setColorAt(z*2+1,Q>.86?I:F)}h.count=c.count=R.bells,u.count=R.bells,d.count=p.count=x.count=R.boxes,g.count=R.boxes*2;for(const z of[h,d,p,x,g])z.instanceColor&&(z.instanceColor.needsUpdate=!0)}return{boxes:n,baubles:s,update:E,frame(R,U){T(h.count,R,U),S(d.count,R,U)}}}function Rg(i,t){const e=new Te,n=new Te,s=bg(i),r=new Je({vertexColors:!0,roughness:.88,side:Ie,envMapIntensity:.72}),a=new Je({color:"#433327",roughness:.93}),o=a.clone(),l={value:0};yc(r,l),yc(o,l);const c={value:new Bt("#ffffff")},h={value:0},u=r.onBeforeCompile;r.onBeforeCompile=S=>{u(S),S.uniforms.needleTint=c,S.uniforms.needleAmount=h,S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 needleTint;
uniform float needleAmount;`).replace("#include <color_fragment>",`#include <color_fragment>
        if(needleAmount>0.001){
          float tone=clamp(diffuseColor.g*2.1+0.18,0.0,1.0);
          diffuseColor.rgb=mix(diffuseColor.rgb,needleTint*(0.44+0.56*tone),needleAmount);
        }
      `)},r.customProgramCacheKey=()=>"needle-theme";const d=new Te;d.add(new $t(s.branches,o),new $t(s.needles,r));const p=new $t(new Cs(.13,.28,2.55,9),a);p.position.y=_n+.68,n.add(p,d);const x=Ag(i),g=wg(),m=Cg(i);n.add(x.group,g.group,m.baubles,m.boxes),e.add(n);function f(S){var R;if(!S)return;c.value.set(S.needleTint||"#ffffff"),h.value=S.needleAmount??0,r.emissive.set(S.needleEmissive||"#000000"),r.emissiveIntensity=(S.needleAmount??0)>0?.22:0;const E=new Bt(S.star||"#ffd48c");g.mesh.material.color.copy(E),g.mesh.material.emissive.copy(E),g.lamp.color.copy(E),(R=x.materials)==null||R.forEach((U,M)=>{const y=new Bt(M?S.pale:S.garland);U.color.copy(y),U.emissive.copy(y)})}let b,_;function T(S){(!_||["particles","primary","accent"].some(E=>_[E]!==S[E]))&&(b&&(e.remove(b),b.geometry.dispose(),b.material.dispose()),b=jo(Tg(S.particles,S)),e.add(b)),(!_||["boxes","bells","box1","box2","bellColor"].some(E=>_[E]!==S[E]))&&m.update(S),_={...S}}return T(t),{root:e,update:T,setTheme:f,frame({time:S,dt:E,spread:R,burstWidth:U,floating:M,audio:y,pixels:P,reduce:I}){!I&&M<.05&&(e.rotation.y+=E*.12),n.visible=M<.98;const N=Math.max(.001,1-M);n.scale.setScalar(N),n.position.y=(1-N)*-.45,l.value=Rn.smoothstep(R,.04,.61),d.visible=l.value<1;const F=1+.21*l.value;d.scale.set(F,1,F),n.visible&&m.frame(R,U),g.mesh.rotation.y=I?.07:Math.sin(S*.54)*.7,g.mesh.rotation.z=I?.04:Math.sin(S*.61)*.085,g.group.scale.setScalar(1+y*.19),g.lamp.intensity=3+y*12;for(const z of[b,x.points,g.glow]){const Q=z.material.uniforms;Q.time.value=S,Q.pixels.value=P,Q.audio.value=y}const B=b.material.uniforms;B.spread.value=R,B.floating.value=M,B.burstWidth.value=U}}}const Ch=Math.PI*2;function Tc(i,t,e,n){const s=t/2,r=e/2;return i.moveTo(-s+n,-r),i.lineTo(s-n,-r),i.quadraticCurveTo(s,-r,s,-r+n),i.lineTo(s,r-n),i.quadraticCurveTo(s,r,s-n,r),i.lineTo(-s+n,r),i.quadraticCurveTo(-s,r,-s,r-n),i.lineTo(-s,-r+n),i.quadraticCurveTo(-s,-r,-s+n,-r),i}function Ac(i,t,e,n,s,r){const a=Tc(new ph,i,t,.044);a.holes.push(Tc(new po,e,e,.024));const o=new Vo(a,{depth:n,bevelEnabled:!0,bevelSegments:2,bevelSize:s,bevelThickness:s,curveSegments:4});return o.translate(0,0,r),o}function Pg(i){const t=new Rr(i),e=new Dr;e.background=new Bt("#0a111c");const n=(r,a,o,l,c)=>{const h=new $t(new qn(r,a),new li({color:new Bt(l).multiplyScalar(c),side:Ie}));h.position.set(...o),h.lookAt(0,0,0),e.add(h)};n(7.2,3.4,[-4.6,2.7,5.4],"#fff2d8",5.4),n(4.4,5.6,[5.1,.9,4.4],"#cfe2ff",2.1),n(.62,7.4,[-1.1,3.4,-4.9],"#ffffff",9),n(.34,6.2,[3.6,-1.4,-3.8],"#ffe4b4",6.5),n(6.4,1.1,[0,-3.9,2.7],"#ffd6a1",2.8);const s=t.fromScene(e,.015).texture;return e.traverse(r=>{var a,o;(a=r.geometry)==null||a.dispose(),(o=r.material)==null||o.dispose()}),t.dispose(),s}function Dg(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#8f8f8f",t.fillRect(0,0,512,512);for(let n=0;n<12e3;n++){const s=95+Math.floor(Math.random()*110);t.fillStyle=`rgba(${s},${s},${s},.22)`,t.fillRect(0,Math.random()*512,512,1)}const e=new Lr(i);return e.wrapS=e.wrapT=Mr,e.repeat.set(2,2),e}function Lg(i,t){const e=Ac(1.34,1.34,1.182,.102,.025,-.052),n=Ac(1.208,1.208,1.154,.02,.008,.054),s=new xn(1.196,1.196,.087),r=new qn(1.159,1.159),a=new go({color:"#e7bd82",metalness:1,roughness:.33,roughnessMap:t,envMap:i,envMapIntensity:3.1,clearcoat:.65,clearcoatRoughness:.07}),o=new go({color:"#fff0c8",metalness:1,roughness:.055,envMap:i,envMapIntensity:4}),l=new Je({color:"#292e34",metalness:.92,roughness:.3,envMap:i,envMapIntensity:1.7}),c=[];for(let d=0;d<6;d++){const p=d*Ch/6+Math.PI/2,x=Math.cos(p),g=Math.sin(p);c.push(0,0,-.046,x*.135,g*.135,-.046),c.push(x*.086,g*.086,-.046,x*.114-g*.036,g*.114+x*.036,-.046),c.push(x*.086,g*.086,-.046,x*.114+g*.036,g*.114-x*.036,-.046)}const h=new ce;h.setAttribute("position",new Kt(c,3));const u=new ih({color:"#ad9471",transparent:!0,opacity:.75});return{make(){const d=new Te,p=new $t(s,l),x=new $t(r,new li({color:"#b5ac95",toneMapped:!1,fog:!1}));return x.position.z=.053,d.add(new $t(e,a),new $t(n,o),p,new df(h,u),x),{pivot:d,box:p,art:x}},dispose(){for(const d of[e,n,s,r,h,a,o,l,u,t,i])d.dispose()}}}function Ug(i,t){const e=new Te,n=new Map,s=new sd,r=new it,a=new it,o=new D,l=new D,c=new rn,h=new rn,u=new rn,d=new D(0,1,0),p=Pg(t),x=t.capabilities.getMaxAnisotropy(),g=Lg(p,Dg()),m=new $f,f=[];let b=[],_=null,T=null,S=null,E=null,R=0,U=0,M=0,y=!1,P=-1,I=null,N=!1;function F(Y){var ht;const j=new Set(Y.map(ft=>ft.id));for(const[ft,Rt]of n)j.has(ft)||(e.remove(Rt.group),(ht=Rt.art.material.map)==null||ht.dispose(),Rt.art.material.dispose(),n.delete(ft));for(const ft of Y){if(n.has(ft.id))continue;const Rt=M++,Lt=Rt*2.399963+.53,Nt=8+Math.floor(Rt/8)%3*.47,X=new D(Math.sin(Lt)*Nt,-3.67+Rt*7%9*.6,Math.cos(Lt)*Nt),K=new Te;K.position.copy(X),K.scale.setScalar(.87);const Mt=g.make();Mt.box.userData.id=ft.id,K.add(Mt.pivot),e.add(K);const Tt={...Mt,group:K,home:X,index:Rt,angle:Lt,id:ft.id,flipTime:1};n.set(ft.id,Tt),m.load(ft.url,lt=>{if(n.get(ft.id)!==Tt){lt.dispose();return}lt.colorSpace=Re,lt.anisotropy=x;const Ft=lt.image.width/lt.image.height;Ft>1?(lt.repeat.x=1/Ft,lt.offset.x=(1-lt.repeat.x)/2):Ft>0&&(lt.repeat.y=Ft,lt.offset.y=(1-Ft)/2),Tt.art.material.color.set("#ffffff"),Tt.art.material.map=lt,Tt.art.material.needsUpdate=!0},void 0,()=>{})}b=[...n.values()].map(ft=>ft.box),n.has(S)||(S=null),n.has(_)||(_=null),n.has(T)||(T=null),n.has(E)||(E=null)}function B(Y,j,ht){var ft;return e.updateWorldMatrix(!0,!0),s.setFromCamera(r.set(j,ht),Y),f.length=0,s.intersectObjects(b,!1,f),((ft=f[0])==null?void 0:ft.object.userData.id)??null}function z(Y,j,ht){const ft=B(Y,j,ht);return S=ft&&ft!==S?ft:null,!!ft}function Q(Y,j,ht){const ft=B(Y,j,ht);return S=ft,!!ft}function G(Y,j,ht,ft,Rt){U+=ft;const Lt=!!j.hand;T&&!j.pinch&&(T=null);const Nt=!T&&j.active?B(Y,j.x,j.y):null,X=j.active&&!T,K=X?Nt:null;X?K?(K!==_&&(_=K,a.copy(r)),R=U):_&&(!(a.distanceTo(r)<.2)||U-R>.18)&&(_=null):_=null;const Mt=Lt&&j.pinch&&!y,Tt=(!Lt||!j.pinch)&&y;if(y=Lt&&j.pinch,Mt&&!N&&U-P>.8&&n.size>0){const mt=[...n.keys()];let $=mt[Math.floor(Math.random()*mt.length)];mt.length>1&&$===I&&($=mt[(mt.indexOf($)+1)%mt.length]),I=$,S=$,N=!0}N&&(Tt||!Lt)&&(S=null,N=!1,P=U),!Lt&&j.pinch&&_&&!T&&(T=_);const lt=S||T;lt&&lt!==E&&!i&&(n.get(lt).flipTime=0),E=lt,e.getWorldQuaternion(c).invert().multiply(Y.quaternion),E&&(l.set(.1,-.14,-5.4).applyQuaternion(Y.quaternion).add(Y.position),e.worldToLocal(l));const Ft=1-Math.exp(-ft*5.6),jt=1-Math.exp(-ft*9);for(const mt of n.values()){const $=mt.id===E,w=Lt&&mt.id===_;o.copy(mt.home),i||(o.y+=Math.sin(ht*.92+mt.index*1.3)*.16),$&&o.copy(l);const tt=$?0:Math.sin(Rt+mt.angle)*.36;if(h.copy(c).multiply(u.setFromAxisAngle(d,tt)),mt.group.position.lerp(o,Ft),mt.group.quaternion.slerp(h,jt),mt.group.scale.setScalar(Rn.damp(mt.group.scale.x,$?1.3:w?.97:.87,5.6,ft)),mt.flipTime<1){mt.flipTime=Math.min(1,mt.flipTime+ft/.76);const at=Rn.smoothstep(mt.flipTime,0,1);mt.pivot.rotation.y=at<1?at*Ch:0}}return!!E}return{root:e,update:F,frame:G,tap:z,click:Q,dispose(){F([]),g.dispose()}}}const wc=Math.PI*2,Cc=i=>Math.min(1,Math.max(0,i)),us=160,We=42,Vn=3,ur=us*We*Vn;function Ig(i){const t=new Float32Array(ur*3),e=new Float32Array(ur*3),n=new Float32Array(ur),s=new Float32Array(ur),r=[];for(let b=0;b<us;b++)for(let _=0;_<We;_++){const T=(b*We+_)*Vn;if(s[T]=0,s[T+1]=1,s[T+2]=0,_<We-1){const S=T,E=T+Vn;r.push(S,S+1,E+1,S,E+1,E,S+1,S+2,E+2,S+1,E+2,E+1)}}const a=new ce;a.setAttribute("position",new Me(t,3)),a.setAttribute("aColor",new Me(e,3)),a.setAttribute("aAlpha",new Me(n,1)),a.setAttribute("aEdge",new Me(s,1)),a.setIndex(r);const o=new ge({vertexShader:`
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aEdge;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vEdge;
      void main(){
        vColor=aColor;
        vAlpha=aAlpha;
        vEdge=aEdge;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      varying float vEdge;
      void main(){
        // 两侧渐隐、中间亮，像一条柔软的发光丝带
        float edge=smoothstep(0.0,0.26,vEdge)*smoothstep(1.0,0.74,vEdge);
        if(vAlpha*edge<=0.001)discard;
        gl_FragColor=vec4(vColor,vAlpha*edge);
      }
    `,transparent:!0,depthWrite:!1,side:Ie,blending:wn}),l=new $t(a,o);l.frustumCulled=!1;const c=new Te;c.add(l);const h=Array.from({length:us},()=>({live:!1,x:0,y:-999,z:0,vx:0,vy:0,vz:0,dirx:0,diry:1,dirz:0,life:0,max:1,width:.1,seed:0,spawnAt:0,r:1,g:1,b:1,lastSample:0,hist:Array.from({length:We},()=>({x:0,y:-999,z:0}))}));let u=0,d=1.8,p=7,x=["#ffffff","#eaf4ff","#9fc7ff","#cfe6ff","#ffe4b8"];function g(b){x=[b.pale,b.primary,b.accent,b.star,"#ffffff","#ffe4b8"]}function m(b){const T=(Math.random()>.5?1:-1)*(5+Math.random()*7),S=7.8+Math.random()*2.4,E=-5+Math.random()*9,R=48;for(let U=0;U<R;U++){const M=h[u];u=(u+1)%us;const y=Math.random()*wc,P=Math.random()*2-1,I=Math.sqrt(1-P*P),N=1.2+Math.random()*3.6,F=new Bt(x[Math.floor(Math.random()*x.length)]);M.live=!0,M.x=T,M.y=S,M.z=E,M.vx=Math.cos(y)*I*N,M.vy=P*N,M.vz=Math.sin(y)*I*N;const B=Math.hypot(M.vx,M.vy,M.vz)||1;M.dirx=M.vx/B,M.diry=M.vy/B,M.dirz=M.vz/B,M.spawnAt=b,M.max=3+Math.random()*.9,M.life=M.max,M.width=.018+Math.random()*.027,M.seed=Math.random()*wc,M.r=F.r,M.g=F.g,M.b=F.b,M.lastSample=b;for(let z=0;z<We;z++)M.hist[z].x=T,M.hist[z].y=S,M.hist[z].z=E}d=b+p}function f(b,_){p>0&&_>=d&&m(_);for(let T=0;T<us;T++){const S=h[T],E=T*We*Vn;if(!S.live){for(let F=0;F<We*Vn;F++)n[E+F]=0;continue}if(S.life-=b,S.life<=0){S.live=!1;for(let F=0;F<We*Vn;F++)n[E+F]=0;continue}const R=_-S.spawnAt,U=Cc((R-.55)/.55),M=Cc((R-.5)/.45),y=_+S.seed,P=Math.hypot(S.vx,S.vy,S.vz)||1;S.vx+=(Math.sin(y*1.35+S.seed)*1.1+Math.sin(y*.63)*.4)*M*b-S.vz/P*Math.sin(y*1.1+S.seed)*1.6*M*b,S.vz+=Math.cos(y*1.2+S.seed*1.7)*1.1*M*b+S.vx/P*Math.cos(y*.9+S.seed)*1.6*M*b,S.vy+=(-2.1*U+Math.cos(y*1.9+S.seed)*.28*M)*b;const I=Math.pow(R<.55?.997:.991,b*60);S.vx*=I,S.vy*=I,S.vz*=I,S.x+=S.vx*b,S.y+=S.vy*b,S.z+=S.vz*b,_-S.lastSample>.012?(S.hist.pop(),S.hist.unshift({x:S.x,y:S.y,z:S.z}),S.lastSample=_):(S.hist[0].x=S.x,S.hist[0].y=S.y,S.hist[0].z=S.z);const N=Math.pow(S.life/S.max,.78);for(let F=0;F<We;F++){const B=S.hist[F],z=S.hist[Math.max(0,F-1)],Q=S.hist[Math.min(We-1,F+1)];let G=Q.x-z.x,Y=Q.y-z.y,j=Q.z-z.z;Math.hypot(G,Y,j)<1e-4&&(G=S.dirx,Y=S.diry,j=S.dirz);const ht=i.position.x-B.x,ft=i.position.y-B.y,Rt=i.position.z-B.z;let Lt=Y*Rt-j*ft,Nt=j*ht-G*Rt,X=G*ft-Y*ht;const K=Math.hypot(Lt,Nt,X)||1,Mt=1-F/We*.35,Tt=S.width*Mt*(.7+.3*N);Lt=Lt/K*Tt,Nt=Nt/K*Tt,X=X/K*Tt;const lt=E+F*Vn;t[lt*3]=B.x+Lt,t[lt*3+1]=B.y+Nt,t[lt*3+2]=B.z+X,t[(lt+1)*3]=B.x,t[(lt+1)*3+1]=B.y,t[(lt+1)*3+2]=B.z,t[(lt+2)*3]=B.x-Lt,t[(lt+2)*3+1]=B.y-Nt,t[(lt+2)*3+2]=B.z-X;const Ft=F===0,jt=Ft?1:S.r,mt=Ft?1:S.g,$=Ft?1:S.b;for(let w=0;w<Vn;w++)e[(lt+w)*3]=jt,e[(lt+w)*3+1]=mt,e[(lt+w)*3+2]=$,n[lt+w]=N*Math.pow(1-F/We,.3)*(Ft?1.1:.78)}}a.attributes.position.needsUpdate=!0,a.attributes.aColor.needsUpdate=!0,a.attributes.aAlpha.needsUpdate=!0}return{points:c,setTheme:g,setPixel(){},setFrequency(b){p=Math.max(0,b||0),p>0&&(d=Math.min(d,2.5))},update:f}}const Sa=Math.PI*2,fr=12;function Rh(i){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);for(const[r,a]of i)n.addColorStop(r,a);e.fillStyle=n,e.fillRect(0,0,64,64);const s=new Lr(t);return s.colorSpace=Re,s}const Ng=Rh([[0,"rgba(255,255,255,1)"],[.18,"rgba(255,255,255,.55)"],[.5,"rgba(255,255,255,.14)"],[1,"rgba(255,255,255,0)"]]),Rc=Rh([[0,"rgba(255,255,255,1)"],[.22,"rgba(255,255,255,.85)"],[.55,"rgba(255,255,255,.18)"],[1,"rgba(255,255,255,0)"]]),Pc=["#eaf6ff","#bfe0ff","#ffd9a8","#fff3d6","#cfe0ff","#ffffff"],Ni=new D,Dc=new D,ze=new D,ii=new D;function Fg(i){const t=new Te,e=Array.from({length:7},(o,l)=>{const c=new Bt(Pc[l%Pc.length]),h=fr+1,u=new ce,d=new Float32Array(h*2*3),p=new Float32Array(h*2),x=new Float32Array(h*2);u.setAttribute("position",new Me(d,3)),u.setAttribute("aEdge",new Me(p,1)),u.setAttribute("aAlpha",new Me(x,1));const g=[];for(let S=0;S<fr;S++){const E=S*2;g.push(E,E+1,E+2,E+1,E+3,E+2)}u.setIndex(g);const m=new ge({uniforms:{uColor:{value:c.clone()},uOpacity:{value:0}},vertexShader:`
        attribute float aEdge;
        attribute float aAlpha;
        varying float vEdge;
        varying float vAlpha;
        void main(){
          vEdge=aEdge;
          vAlpha=aAlpha;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }
      `,fragmentShader:`
        varying float vEdge;
        varying float vAlpha;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main(){
          float edge=smoothstep(0.0,0.38,vEdge)*smoothstep(1.0,0.62,vEdge);
          float a=vAlpha*uOpacity*edge;
          if(a<=0.002)discard;
          gl_FragColor=vec4(uColor,a);
        }
      `,transparent:!0,depthWrite:!1,side:Ie,blending:wn,fog:!1}),f=new $t(u,m);f.frustumCulled=!1;const b=new oa(new gr({map:Ng,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:wn,fog:!1}));b.scale.setScalar(1.5);const _=new oa(new gr({map:Rc,color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:wn,fog:!1}));_.scale.setScalar(.52);const T=Array.from({length:5},()=>{const S=new oa(new gr({map:Rc,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:wn,fog:!1}));return t.add(S),{sprite:S,f:.12+Math.random()*.75,phase:Math.random()*Sa,side:Math.random()>.5?1:-1}});return t.add(f,b,_),{ribbon:f,halo:b,core:_,embers:T,geometry:u,material:m,color:c,live:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,tail:2,width:.06,seed:Math.random()*Sa}});let n=0,s=2.6;function r(o){const l=e[n];n=(n+1)%e.length;const c=Math.random()>.5?1:-1,h=c*(8+Math.random()*8),u=9.5+Math.random()*3.2,d=-7+Math.random()*9,p=7.5+Math.random()*4.5,x=-c*(.95+Math.random()*.35),g=-(.16+Math.random()*.16),m=(Math.random()-.5)*.3,f=Math.hypot(x,g,m)||1;l.live=!0,l.x=h,l.y=u,l.z=d,l.vx=x/f*p,l.vy=g/f*p,l.vz=m/f*p,l.max=1.35+Math.random()*.9,l.life=l.max,l.tail=2.6+Math.random()*2.6,l.width=.05+Math.random()*.05,l.seed=Math.random()*Sa,l.ribbon.visible=!0,l.halo.visible=!0,l.core.visible=!0,s=o+3.4+Math.random()*4.5}function a(o,l){l>=s&&r(l);for(const c of e){if(!c.live){c.material.uniforms.uOpacity.value=0,c.halo.material.opacity=0,c.core.material.opacity=0;for(const g of c.embers)g.sprite.material.opacity=0;c.ribbon.visible=!1,c.halo.visible=!1,c.core.visible=!1;continue}if(c.life-=o,c.life<=0||c.y<1.5){c.live=!1,c.material.uniforms.uOpacity.value=0;continue}c.x+=c.vx*o,c.y+=c.vy*o,c.z+=c.vz*o;const h=Math.min(1,c.life/.35)*Math.min(1,(c.max-c.life)/.18);Ni.set(c.vx,c.vy,c.vz).normalize(),Dc.set(i.position.x-c.x,i.position.y-c.y,i.position.z-c.z).normalize(),ze.crossVectors(Ni,Dc),ze.lengthSq()<1e-4&&ze.set(1,0,0),ze.normalize();const u=c.geometry.attributes.position.array,d=c.geometry.attributes.aEdge.array,p=c.geometry.attributes.aAlpha.array;for(let g=0;g<=fr;g++){const m=g/fr,f=c.width*Math.pow(1-m,1.7),b=Math.sin(m*2.6-l*3.1+c.seed)*c.tail*.035*m;ii.copy(Ni).multiplyScalar(-c.tail*m).add(ze.clone().multiplyScalar(b)).add({x:c.x,y:c.y,z:c.z});const _=g*2;u[_*3]=ii.x+ze.x*f,u[_*3+1]=ii.y+ze.y*f,u[_*3+2]=ii.z+ze.z*f,u[(_+1)*3]=ii.x-ze.x*f,u[(_+1)*3+1]=ii.y-ze.y*f,u[(_+1)*3+2]=ii.z-ze.z*f,d[_]=0,d[_+1]=1,p[_]=h*Math.pow(1-m,1.55),p[_+1]=h*Math.pow(1-m,1.55)}c.geometry.attributes.position.needsUpdate=!0,c.geometry.attributes.aEdge.needsUpdate=!0,c.geometry.attributes.aAlpha.needsUpdate=!0,c.material.uniforms.uOpacity.value=1,c.halo.visible=!0,c.core.visible=!0,c.ribbon.visible=!0;const x=1+Math.sin(l*7+c.seed)*.12;c.halo.material.opacity=h*.55,c.core.material.opacity=h*.95,c.halo.scale.setScalar(1.5*x),c.core.scale.setScalar(.5*x),c.halo.position.set(c.x,c.y,c.z),c.core.position.set(c.x,c.y,c.z);for(const g of c.embers){const m=l*1.8+g.phase,f=.4+.6*(.5+.5*Math.sin(l*6+g.phase)),b=Math.sin(m)*c.tail*.05*g.side,_=Math.cos(m*1.3)*c.tail*.05;g.sprite.position.set(c.x-Ni.x*c.tail*g.f+ze.x*b,c.y-Ni.y*c.tail*g.f+ze.y*b+_,c.z-Ni.z*c.tail*g.f+ze.z*b),g.sprite.material.opacity=h*Math.pow(1-g.f,1.9)*f,g.sprite.scale.setScalar(.16+.1*f)}}}return{points:t,update:a}}const Ph=Math.PI*2,Ea=(i,t,e,n)=>Rn.damp(i,t,e,n);class Og extends ji{constructor(t,e,n){super(),this.sky=t,this.scene=e,this.camera=n,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(this.renderToScreen?null:n),t.clear(),t.render(this.sky.scene,this.sky.camera),t.clearDepth(),t.render(this.scene,this.camera)}}function Bg(){const i=new Te,t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(128,128,10,128,128,128);n.addColorStop(0,"rgba(255,172,85,.49)"),n.addColorStop(.22,"rgba(219,140,75,.36)"),n.addColorStop(.49,"rgba(144,103,78,.28)"),n.addColorStop(.73,"rgba(114,103,92,.1)"),n.addColorStop(1,"rgba(20,20,20,0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const s=Ln(1818);for(let c=0;c<4300;c++){const h=s()*Ph,u=Math.sqrt(s())*124,d=.2+s()*1.75;e.fillStyle=c%5?"rgba(255,224,163,"+(1-u/124)*.29+")":"rgba(10,25,46,"+(1-u/124)*.24+")",e.fillRect(128+Math.cos(h)*u,128+Math.sin(h)*u,d,d*.83)}const r=new Lr(t);r.colorSpace=Re;const a=new $t(new qn(26,22),new li({map:r,transparent:!0,depthWrite:!1,toneMapped:!1}));a.rotation.x=-Math.PI/2,a.position.y=_n-.42,a.renderOrder=-4,i.add(a);const o=new li({color:"#ebb278",transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1,side:Ie}),l=new $t(new ko(6.51,6.55,128),o);return l.rotation.x=-Math.PI/2,l.position.y=_n-.405,l.renderOrder=-3,i.add(l),{group:i,ringMaterial:o}}const zg=`
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
`,Vg=`
  varying float vAlpha;
  void main(){
    float r=length(gl_PointCoord-.5);
    float a=(1.-smoothstep(.07,.48,r))*vAlpha;
    if(a<.018)discard;
    gl_FragColor=vec4(.63,.81,1.,a);
    #include <colorspace_fragment>
  }
`;function kg(i){const t=Ln(4817),e=[],n=[],s=[];for(let o=0;o<(i?400:1400);o++){const l=t()*Ph,c=Math.sqrt(t())*30;e.push(Math.cos(l)*c,t()*28,Math.sin(l)*c),n.push(.85+Math.pow(t(),4)*4.3),s.push(t())}const r=new ce;r.setAttribute("position",new Kt(e,3)),r.setAttribute("seed",new Kt(s,1)),r.setAttribute("size",new Kt(n,1));const a=new sh(r,new ge({uniforms:{time:{value:0},pixels:{value:1}},vertexShader:zg,fragmentShader:Vg,transparent:!0,depthWrite:!1,toneMapped:!1}));return a.frustumCulled=!1,a}function Hg(i,t){const{lite:e,config:n,hand:s,audio:r,onStatus:a,onStats:o,quality:l="auto",refresh:c=60,theme:h}=t,u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=Math.max(60,Math.min(240,c||60));let p=["auto","smooth","sharp"].includes(l)?l:"auto";const x=Math.min(e?60:120,d),g=new qx({alpha:!1,antialias:e,powerPreference:"high-performance",preserveDrawingBuffer:!1});g.autoClear=!1,g.toneMapping=bo,g.toneMappingExposure=1.12,g.domElement.setAttribute("role","img"),g.domElement.setAttribute("aria-label","极光与星雪中的三维圣诞树，拖动旋转，滚动缩放"),i.append(g.domElement);const m=new Dr;m.fog=new Fo("#142b3b",37,72);const f=new Xe(40,1,.3,150);let b=!1;const _=new Zx(f,g.domElement);_.enablePan=!1,_.enableDamping=!u,_.dampingFactor=.085,_.minDistance=8,_.maxDistance=45,_.minPolarAngle=.55,_.maxPolarAngle=Math.PI*.55,_.target.set(0,.74,0);const T=gg(e),S=Rg(e,n),E=Ug(u,g);S.root.add(E.root);const R=kg(e),U=Bg(),M=Ig(f),y=Fg(f);m.add(S.root,R,U.group,M.points,y.points),m.add(new Qf("#b0e2f4","#323b36",1.23));const P=new xa("#a0dfff",1.92);P.position.set(-8,6,-6);const I=new xa("#ffe1a6",1.9);I.position.set(6,5,9);const N=new xa("#69cba3",.77);N.position.set(-6,3,7),m.add(P,I,N);const F=new Rr(g),B=new og,z=F.fromScene(B,.032);m.environment=z.texture,m.environmentIntensity=.39,B.dispose(),F.dispose();function Q(J){var st;J&&((st=S.setTheme)==null||st.call(S,J),M.setTheme(J),P.color.set(J.cool),I.color.set(J.warm),N.color.set(J.rim),U.ringMaterial.color.set(J.garland),T.uniforms.auroraA&&T.uniforms.auroraA.value.set(J.auroraA),T.uniforms.auroraB&&T.uniforms.auroraB.value.set(J.auroraB),m.fog.color.set(J.fog))}Q(h);const G=new Og(T,m,f),Y=e?null:new dg(g),j=e?null:new Yi(new it(1,1),.31,.49,.59),ht=e?null:new mg;Y&&(Y.addPass(G),Y.addPass(j),Y.addPass(ht));let ft="tree",Rt=0,Lt=null,Nt=0,X=0,K=0,Mt=0,Tt=1,lt=1,Ft="",jt=!1,mt=1,$=0,w=0,tt=0,at=performance.now(),ut=0,ot=Math.max(0,n.fireworks??7);M.setFrequency(ot);function wt(){const J=window.devicePixelRatio||1,st=(i.clientWidth||window.innerWidth)<760;return e?Math.min(J,1):p==="smooth"?Math.min(J,st?1:.82):p==="sharp"?Math.min(J,1.45):Math.min(J,st?1.3:1)}function _t(J){const st=i.clientWidth,Et=i.clientHeight;!st||!Et||(mt=Math.max(.55,Math.min(1.45,J)),Tt=mt,g.setPixelRatio(mt),g.setSize(st,Et,!1),Y&&(Y.setPixelRatio(mt),Y.setSize(st,Et)),j&&(j.strength=p==="smooth"?.27:.31))}const dt={x:0,y:0,active:!1,pinch:!1};let C=null;const v=g.domElement;function k(J){const st=v.getBoundingClientRect();!st.width||!st.height||(dt.x=(J.clientX-st.left)/st.width*2-1,dt.y=1-(J.clientY-st.top)/st.height*2,dt.active=J.clientX>=st.left&&J.clientX<=st.right&&J.clientY>=st.top&&J.clientY<=st.bottom)}const Z=J=>{if(!(J.button!==0||C!==null)){if(C=J.pointerId,k(J),J.pointerType==="touch"&&E.tap(f,dt.x,dt.y)){dt.active=!1;return}if(J.pointerType==="mouse"&&E.click(f,dt.x,dt.y)){dt.pinch=!1;return}dt.pinch=!0}},nt=J=>{J.pointerId===C&&(C=null,dt.pinch=!1,(J.pointerType==="touch"||J.type==="pointercancel")&&(dt.active=!1))},q=()=>{dt.active=!1},Ut=()=>{C=null,dt.active=!1,dt.pinch=!1};v.addEventListener("pointermove",k),v.addEventListener("pointerleave",q),v.addEventListener("pointerdown",Z),window.addEventListener("pointerup",nt),window.addEventListener("pointercancel",nt),window.addEventListener("blur",Ut);function yt(){const J=i.clientWidth,st=i.clientHeight;if(!J||!st)return;const Et=J<760,L=J/st;lt=Rn.clamp(L*.81,.43,1),_t(wt()),T.resize(J,st),f.aspect=L,m.fog.near=Et?45:37,b||(f.position.set(0,3.45,Et?Math.min(44,Math.max(40,19.7/L)):29.5),f.lookAt(_.target),b=!0),f.setViewOffset(J,st,Et?0:-J*.083,Et?st*.095:-st*.005,J,st),f.updateProjectionMatrix(),_.update()}function Ot(J){!["auto","smooth","sharp"].includes(J)||J===p||(p=J,$=w=0,tt=0,_t(wt()))}function Dt(J){if(e||u||p!=="auto"||document.hidden||Nt<4)return;const st=performance.now();if(st<tt)return;const Et=wt(),L=.6;J<x*.94&&mt>L+.001?(w=0,++$>=2&&($=0,_t(Math.max(L,mt-.07)),tt=st+1200)):J>x*1.02&&mt<Et-.001?($=0,++w>=4&&(w=0,_t(Math.min(Et,mt+.04)),tt=st+1800)):($=0,w=0)}const rt=new ResizeObserver(yt);rt.observe(i),yt();function xt(J){if(jt)return;Rt=requestAnimationFrame(xt);const st=Lt===null,Et=st?1/60:Math.min(.14,Math.max(0,(J-Lt)/1e3));Lt=J,st&&(at=J,ut=0),u||(Nt+=Et),_.update();const L=s.current,bt=L.present&&!dt.pinch?{x:L.x*2-1,y:1-L.y*2,active:L.gesture!=="fist",pinch:!!L.pinch,hand:!0}:dt,vt=L.present&&(L.gesture==="open"||L.gesture==="pinch"),pt=dt.pinch||vt;X=Ea(X,pt?1:0,pt?7.6:5.9,Et),pt&&X>.999&&(X=1),!pt&&X<7e-4&&(X=0),K=Ea(K,ft==="float"?1:0,2.8,Et),Mt=Ea(Mt,r.current,6,Et),S.frame({time:Nt,dt:Et,spread:X,burstWidth:lt,floating:K,audio:Mt,pixels:Tt,reduce:u}),R.material.uniforms.time.value=Nt,R.material.uniforms.pixels.value=Tt,T.uniforms.time.value=Nt,U.ringMaterial.opacity=.18+Math.sin(Nt*.8)*.045;const ct=E.frame(f,bt,Nt,Et,S.root.rotation.y);u||M.update(Et,Nt),u||y.update(Et,Nt);const et=pt?"burst":ct?"hover":"idle";if(et!==Ft&&(Ft=et,a(et),v.style.cursor=pt?"grabbing":ct?"pointer":"grab"),Y?Y.render(Et):(G.renderToScreen=!0,G.render(g,null,null)),document.hidden)ut=0,at=J;else if(Et>.5)ut=0,at=J;else if(ut++,J-at>=500){const Pt=ut*1e3/(J-at);ut=0,at=J,(Nt>1.5||u)&&(o==null||o(Pt,mt,x,d)),Dt(Pt)}}Rt=requestAnimationFrame(xt);function kt(J){S.update(J),typeof J.fireworks=="number"&&J.fireworks!==ot&&(ot=J.fireworks,M.setFrequency(ot))}return{config:kt,photos:E.update,setMode(J){ft=J},setQuality:Ot,setTheme:Q,dispose(){jt=!0,cancelAnimationFrame(Rt),rt.disconnect(),_.dispose(),v.removeEventListener("pointermove",k),v.removeEventListener("pointerleave",q),v.removeEventListener("pointerdown",Z),window.removeEventListener("pointerup",nt),window.removeEventListener("pointercancel",nt),window.removeEventListener("blur",Ut),E.dispose(),T.dispose(),z.dispose(),m.traverse(J=>{var st,Et,L,bt;(st=J.geometry)==null||st.dispose(),(L=(Et=J.material)==null?void 0:Et.map)==null||L.dispose(),(bt=J.material)==null||bt.dispose()}),j==null||j.dispose(),ht==null||ht.dispose(),Y==null||Y.dispose(),g.dispose(),v.remove()}}}export{Hg as createWorld};
