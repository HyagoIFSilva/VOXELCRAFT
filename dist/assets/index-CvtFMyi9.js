(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Os=new Set;function Kd(t=document){t.addEventListener("keydown",e=>{Os.add(e.code)}),t.addEventListener("keyup",e=>{Os.delete(e.code)}),t.addEventListener("contextmenu",e=>{document.pointerLockElement&&e.preventDefault()}),window.addEventListener("blur",()=>{Os.clear()})}function Tn(t){return Os.has(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="170",Yd=0,Kc=1,$d=2,Cf=1,Zd=2,$n=3,Ni=0,Wt=1,Nn=2,Ii=0,Wr=1,Yc=2,$c=3,Zc=4,jd=5,Zi=100,Jd=101,Qd=102,eh=103,th=104,nh=200,ih=201,rh=202,oh=203,hl=204,pl=205,sh=206,ah=207,lh=208,ch=209,uh=210,fh=211,dh=212,hh=213,ph=214,ml=0,gl=1,_l=2,Yr=3,vl=4,xl=5,Sl=6,Ml=7,_c=0,mh=1,gh=2,Di=0,_h=1,vh=2,xh=3,Sh=4,Mh=5,Eh=6,yh=7,If=300,$r=301,Zr=302,El=303,yl=304,na=306,Tl=1e3,ir=1001,Al=1002,Qt=1003,Th=1004,es=1005,Un=1006,ha=1007,rr=1008,ui=1009,Df=1010,Of=1011,ko=1012,vc=1013,fr=1014,ni=1015,Xo=1016,xc=1017,Sc=1018,jr=1020,Pf=35902,Nf=1021,Lf=1022,Sn=1023,Uf=1024,Ff=1025,zr=1026,Jr=1027,Bf=1028,Mc=1029,Gf=1030,Ec=1031,yc=1033,Ps=33776,Ns=33777,Ls=33778,Us=33779,bl=35840,Rl=35841,wl=35842,Cl=35843,Il=36196,Dl=37492,Ol=37496,Pl=37808,Nl=37809,Ll=37810,Ul=37811,Fl=37812,Bl=37813,Gl=37814,Hl=37815,kl=37816,Vl=37817,Wl=37818,zl=37819,Xl=37820,ql=37821,Fs=36492,Kl=36494,Yl=36495,Hf=36283,$l=36284,Zl=36285,jl=36286,Ah=3200,bh=3201,kf=0,Rh=1,bi="",$t="srgb",oo="srgb-linear",ia="linear",tt="srgb",vr=7680,jc=519,wh=512,Ch=513,Ih=514,Vf=515,Dh=516,Oh=517,Ph=518,Nh=519,Jc=35044,Qc="300 es",ii=2e3,Vs=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const Xr=Math.PI/180,Vo=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[t&255]+Ct[t>>8&255]+Ct[t>>16&255]+Ct[t>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[n&63|128]+Ct[n>>8&255]+"-"+Ct[n>>16&255]+Ct[n>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Lt(t,e,n){return Math.max(e,Math.min(n,t))}function Tc(t,e){return(t%e+e)%e}function Lh(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Uh(t,e,n){return t!==e?(n-t)/(e-t):0}function Uo(t,e,n){return(1-n)*t+n*e}function Fh(t,e,n,i){return Uo(t,e,1-Math.exp(-n*i))}function Bh(t,e=1){return e-Math.abs(Tc(t,e*2)-e)}function Gh(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Hh(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function kh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Vh(t,e){return t+Math.random()*(e-t)}function Wh(t){return t*(.5-Math.random())}function zh(t){t!==void 0&&(eu=t);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xh(t){return t*Xr}function qh(t){return t*Vo}function Kh(t){return(t&t-1)===0&&t!==0}function Yh(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $h(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Zh(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),c=s(n/2),u=o((e+i)/2),d=s((e+i)/2),f=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*d,c*f,c*h,a*u);break;case"YZY":t.set(c*h,a*d,c*f,a*u);break;case"ZXZ":t.set(c*f,c*h,a*d,a*u);break;case"XZX":t.set(a*d,c*_,c*m,a*u);break;case"YXY":t.set(c*m,a*d,c*_,a*u);break;case"ZYZ":t.set(c*_,c*m,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Lr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const jh={DEG2RAD:Xr,RAD2DEG:Vo,generateUUID:ao,clamp:Lt,euclideanModulo:Tc,mapLinear:Lh,inverseLerp:Uh,lerp:Uo,damp:Fh,pingpong:Bh,smoothstep:Gh,smootherstep:Hh,randInt:kh,randFloat:Vh,randFloatSpread:Wh,seededRandom:zh,degToRad:Xh,radToDeg:qh,isPowerOfTwo:Kh,ceilPowerOfTwo:Yh,floorPowerOfTwo:$h,setQuaternionFromProperEuler:Zh,normalize:Pt,denormalize:Lr};class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,o,s,a,c,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,c,u)}set(e,n,i,r,o,s,a,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=c,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],c=i[6],u=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],v=r[0],g=r[3],p=r[6],b=r[1],E=r[4],y=r[7],U=r[2],C=r[5],R=r[8];return o[0]=s*v+a*b+c*U,o[3]=s*g+a*E+c*C,o[6]=s*p+a*y+c*R,o[1]=u*v+d*b+f*U,o[4]=u*g+d*E+f*C,o[7]=u*p+d*y+f*R,o[2]=h*v+m*b+_*U,o[5]=h*g+m*E+_*C,o[8]=h*p+m*y+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*c+r*o*u-r*s*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8],f=d*s-a*u,h=a*c-d*o,m=u*o-s*c,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*u-d*i)*v,e[2]=(a*i-r*s)*v,e[3]=h*v,e[4]=(d*n-r*c)*v,e[5]=(r*o-a*n)*v,e[6]=m*v,e[7]=(i*c-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*s+u*a)+s+e,-r*u,r*c,-r*(-u*s+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pa.makeScale(e,n)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,n){return this.premultiply(pa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Ue;function Wf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ws(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Jh(){const t=Ws("canvas");return t.style.display="block",t}const tu={};function Ao(t){t in tu||(tu[t]=!0,console.warn(t))}function Qh(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function ep(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tp(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===tt&&(t.r=oi(t.r),t.g=oi(t.g),t.b=oi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===tt&&(t.r=qr(t.r),t.g=qr(t.g),t.b=qr(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===bi?ia:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const nu=[.64,.33,.3,.6,.15,.06],iu=[.2126,.7152,.0722],ru=[.3127,.329],ou=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[oo]:{primaries:nu,whitePoint:ru,transfer:ia,toXYZ:ou,fromXYZ:su,luminanceCoefficients:iu,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:nu,whitePoint:ru,transfer:tt,toXYZ:ou,fromXYZ:su,luminanceCoefficients:iu,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}});let xr;class np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xr===void 0&&(xr=Ws("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ws("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=oi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(oi(n[i]/255)*255):n[i]=oi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ip=0;class zf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ma(r[s].image)):o.push(ma(r[s]))}else o=ma(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ma(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?np.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class Ft extends so{constructor(e=Ft.DEFAULT_IMAGE,n=Ft.DEFAULT_MAPPING,i=ir,r=ir,o=Un,s=rr,a=Sn,c=ui,u=Ft.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ao(),this.name="",this.source=new zf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=If;Ft.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const c=e.elements,u=c[0],d=c[4],f=c[8],h=c[1],m=c[5],_=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,y=(m+1)/2,U=(p+1)/2,C=(d+h)/4,R=(f+v)/4,L=(_+g)/4;return E>y&&E>U?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=C/i,o=R/i):y>U?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=C/r,o=L/r):U<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),i=R/o,r=L/o),this.set(i,r,o,n),this}let b=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(f-v)/b,this.z=(h-d)/b,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends so{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zf(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends op{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xf extends Ft{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends Ft{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let c=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=o[s+0],m=o[s+1],_=o[s+2],v=o[s+3];if(a===0){e[n+0]=c,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f!==v||c!==h||u!==m||d!==_){let g=1-a;const p=c*h+u*m+d*_+f*v,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),C=Math.atan2(U,p*b);g=Math.sin(g*C)/U,a=Math.sin(a*C)/U}const y=a*b;if(c=c*g+h*y,u=u*g+m*y,d=d*g+_*y,f=f*g+v*y,g===1-a){const U=1/Math.sqrt(c*c+u*u+d*d+f*f);c*=U,u*=U,d*=U,f*=U}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],c=i[r+1],u=i[r+2],d=i[r+3],f=o[s],h=o[s+1],m=o[s+2],_=o[s+3];return e[n]=a*_+d*f+c*m-u*h,e[n+1]=c*_+d*h+u*f-a*m,e[n+2]=u*_+d*m+a*h-c*f,e[n+3]=d*_-a*f-c*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,u=a(i/2),d=a(r/2),f=a(o/2),h=c(i/2),m=c(r/2),_=c(o/2);switch(s){case"XYZ":this._x=h*d*f+u*m*_,this._y=u*m*f-h*d*_,this._z=u*d*_+h*m*f,this._w=u*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+u*m*_,this._y=u*m*f-h*d*_,this._z=u*d*_-h*m*f,this._w=u*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-u*m*_,this._y=u*m*f+h*d*_,this._z=u*d*_+h*m*f,this._w=u*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-u*m*_,this._y=u*m*f+h*d*_,this._z=u*d*_-h*m*f,this._w=u*d*f+h*m*_;break;case"YZX":this._x=h*d*f+u*m*_,this._y=u*m*f+h*d*_,this._z=u*d*_-h*m*f,this._w=u*d*f-h*m*_;break;case"XZY":this._x=h*d*f-u*m*_,this._y=u*m*f-h*d*_,this._z=u*d*_+h*m*f,this._w=u*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],c=n[9],u=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*c,this._y=r*d+s*c+o*a-i*u,this._z=o*d+s*u+i*c-r*a,this._w=s*d-i*a-r*c-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(au.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,u=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+c*u+s*f-a*d,this.y=i+c*d+a*u-o*f,this.z=r+c*f+o*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,c=n.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new N,au=new qo;class Ko{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,pn):pn.fromBufferAttribute(o,s),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),ns.subVectors(this.max,mo),Sr.subVectors(e.a,mo),Mr.subVectors(e.b,mo),Er.subVectors(e.c,mo),pi.subVectors(Mr,Sr),mi.subVectors(Er,Mr),Hi.subVectors(Sr,Er);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Hi.z,Hi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Hi.z,0,-Hi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Hi.y,Hi.x,0];return!_a(n,Sr,Mr,Er,ns)||(n=[1,0,0,0,1,0,0,0,1],!_a(n,Sr,Mr,Er,ns))?!1:(is.crossVectors(pi,mi),n=[is.x,is.y,is.z],_a(n,Sr,Mr,Er,ns))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,ts=new Ko,Sr=new N,Mr=new N,Er=new N,pi=new N,mi=new N,Hi=new N,mo=new N,ns=new N,is=new N,ki=new N;function _a(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){ki.fromArray(t,o);const a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),c=e.dot(ki),u=n.dot(ki),d=i.dot(ki);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}const ap=new Ko,go=new N,va=new N;class Yo{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ap.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(va)),this.expandByPoint(go.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new N,xa=new N,rs=new N,gi=new N,Sa=new N,os=new N,Ma=new N;class Ac{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,n),zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xa.copy(e).add(n).multiplyScalar(.5),rs.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(xa);const o=e.distanceTo(n)*.5,s=-this.direction.dot(rs),a=gi.dot(this.direction),c=-gi.dot(rs),u=gi.lengthSq(),d=Math.abs(1-s*s);let f,h,m,_;if(d>0)if(f=s*c-a,h=s*a-c,_=o*d,f>=0)if(h>=-_)if(h<=_){const v=1/d;f*=v,h*=v,m=f*(f+s*h+2*a)+h*(s*f+h+2*c)+u}else h=o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*c)+u;else h=-o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*c)+u;else h<=-_?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-c),o),m=-f*f+h*(h+2*c)+u):h<=_?(f=0,h=Math.min(Math.max(-o,-c),o),m=h*(h+2*c)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-c),o),m=-f*f+h*(h+2*c)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xa).addScaledVector(rs,h),m}intersectSphere(e,n){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,c;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,n,i,r,o){Sa.subVectors(n,e),os.subVectors(i,e),Ma.crossVectors(Sa,os);let s=this.direction.dot(Ma),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;gi.subVectors(this.origin,e);const c=a*this.direction.dot(os.crossVectors(gi,os));if(c<0)return null;const u=a*this.direction.dot(Sa.cross(gi));if(u<0||c+u>s)return null;const d=-a*gi.dot(Ma);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,o,s,a,c,u,d,f,h,m,_,v,g){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,c,u,d,f,h,m,_,v,g)}set(e,n,i,r,o,s,a,c,u,d,f,h,m,_,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=u,p[6]=d,p[10]=f,p[14]=h,p[3]=m,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),o=1/yr.setFromMatrixColumn(e,1).length(),s=1/yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*d,m=s*f,_=a*d,v=a*f;n[0]=c*d,n[4]=-c*f,n[8]=u,n[1]=m+_*u,n[5]=h-v*u,n[9]=-a*c,n[2]=v-h*u,n[6]=_+m*u,n[10]=s*c}else if(e.order==="YXZ"){const h=c*d,m=c*f,_=u*d,v=u*f;n[0]=h+v*a,n[4]=_*a-m,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=m*a-_,n[6]=v+h*a,n[10]=s*c}else if(e.order==="ZXY"){const h=c*d,m=c*f,_=u*d,v=u*f;n[0]=h-v*a,n[4]=-s*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*d,n[9]=v-h*a,n[2]=-s*u,n[6]=a,n[10]=s*c}else if(e.order==="ZYX"){const h=s*d,m=s*f,_=a*d,v=a*f;n[0]=c*d,n[4]=_*u-m,n[8]=h*u+v,n[1]=c*f,n[5]=v*u+h,n[9]=m*u-_,n[2]=-u,n[6]=a*c,n[10]=s*c}else if(e.order==="YZX"){const h=s*c,m=s*u,_=a*c,v=a*u;n[0]=c*d,n[4]=v-h*f,n[8]=_*f+m,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=m*f+_,n[10]=h-v*f}else if(e.order==="XZY"){const h=s*c,m=s*u,_=a*c,v=a*u;n[0]=c*d,n[4]=-f,n[8]=u*d,n[1]=h*f+v,n[5]=s*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*d,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,cp)}lookAt(e,n,i){const r=this.elements;return Xt.subVectors(e,n),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),_i.crossVectors(i,Xt),_i.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),_i.crossVectors(i,Xt)),_i.normalize(),ss.crossVectors(Xt,_i),r[0]=_i.x,r[4]=ss.x,r[8]=Xt.x,r[1]=_i.y,r[5]=ss.y,r[9]=Xt.y,r[2]=_i.z,r[6]=ss.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],c=i[8],u=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],v=i[6],g=i[10],p=i[14],b=i[3],E=i[7],y=i[11],U=i[15],C=r[0],R=r[4],L=r[8],T=r[12],M=r[1],w=r[5],W=r[9],H=r[13],$=r[2],Z=r[6],q=r[10],j=r[14],k=r[3],re=r[7],he=r[11],ye=r[15];return o[0]=s*C+a*M+c*$+u*k,o[4]=s*R+a*w+c*Z+u*re,o[8]=s*L+a*W+c*q+u*he,o[12]=s*T+a*H+c*j+u*ye,o[1]=d*C+f*M+h*$+m*k,o[5]=d*R+f*w+h*Z+m*re,o[9]=d*L+f*W+h*q+m*he,o[13]=d*T+f*H+h*j+m*ye,o[2]=_*C+v*M+g*$+p*k,o[6]=_*R+v*w+g*Z+p*re,o[10]=_*L+v*W+g*q+p*he,o[14]=_*T+v*H+g*j+p*ye,o[3]=b*C+E*M+y*$+U*k,o[7]=b*R+E*w+y*Z+U*re,o[11]=b*L+E*W+y*q+U*he,o[15]=b*T+E*H+y*j+U*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],u=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+o*c*f-r*u*f-o*a*h+i*u*h+r*a*m-i*c*m)+v*(+n*c*m-n*u*h+o*s*h-r*s*m+r*u*d-o*c*d)+g*(+n*u*f-n*a*m-o*s*f+i*s*m+o*a*d-i*u*d)+p*(-r*a*d-n*c*f+n*a*h+r*s*f-i*s*h+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],b=f*g*u-v*h*u+v*c*m-a*g*m-f*c*p+a*h*p,E=_*h*u-d*g*u-_*c*m+s*g*m+d*c*p-s*h*p,y=d*v*u-_*f*u+_*a*m-s*v*m-d*a*p+s*f*p,U=_*f*c-d*v*c-_*a*h+s*v*h+d*a*g-s*f*g,C=n*b+i*E+r*y+o*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(v*h*o-f*g*o-v*r*m+i*g*m+f*r*p-i*h*p)*R,e[2]=(a*g*o-v*c*o+v*r*u-i*g*u-a*r*p+i*c*p)*R,e[3]=(f*c*o-a*h*o-f*r*u+i*h*u+a*r*m-i*c*m)*R,e[4]=E*R,e[5]=(d*g*o-_*h*o+_*r*m-n*g*m-d*r*p+n*h*p)*R,e[6]=(_*c*o-s*g*o-_*r*u+n*g*u+s*r*p-n*c*p)*R,e[7]=(s*h*o-d*c*o+d*r*u-n*h*u-s*r*m+n*c*m)*R,e[8]=y*R,e[9]=(_*f*o-d*v*o-_*i*m+n*v*m+d*i*p-n*f*p)*R,e[10]=(s*v*o-_*a*o+_*i*u-n*v*u-s*i*p+n*a*p)*R,e[11]=(d*a*o-s*f*o-d*i*u+n*f*u+s*i*m-n*a*m)*R,e[12]=U*R,e[13]=(d*v*r-_*f*r+_*i*h-n*v*h-d*i*g+n*f*g)*R,e[14]=(_*a*r-s*v*r-_*i*c+n*v*c+s*i*g-n*a*g)*R,e[15]=(s*f*r-d*a*r+d*i*c-n*f*c-s*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,c=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*c,u*c+r*a,0,u*a+r*c,d*a+i,d*c-r*s,0,u*c-r*a,d*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,c=n._w,u=o+o,d=s+s,f=a+a,h=o*u,m=o*d,_=o*f,v=s*d,g=s*f,p=a*f,b=c*u,E=c*d,y=c*f,U=i.x,C=i.y,R=i.z;return r[0]=(1-(v+p))*U,r[1]=(m+y)*U,r[2]=(_-E)*U,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(h+p))*C,r[6]=(g+b)*C,r[7]=0,r[8]=(_+E)*R,r[9]=(g-b)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=yr.set(r[0],r[1],r[2]).length();const s=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/o,d=1/s,f=1/a;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=d,mn.elements[5]*=d,mn.elements[6]*=d,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,n.setFromRotationMatrix(mn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=ii){const c=this.elements,u=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===ii)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Vs)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ii){const c=this.elements,u=1/(n-e),d=1/(i-r),f=1/(s-o),h=(n+e)*u,m=(i+r)*d;let _,v;if(a===ii)_=(s+o)*f,v=-2*f;else if(a===Vs)_=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const yr=new N,mn=new ct,lp=new N(0,0,0),cp=new N(1,1,1),_i=new N,ss=new N,Xt=new N,lu=new ct,cu=new qo;class Hn{constructor(e=0,n=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],u=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let up=0;const uu=new N,Tr=new qo,Xn=new ct,as=new N,_o=new N,fp=new N,dp=new qo,fu=new N(1,0,0),du=new N(0,1,0),hu=new N(0,0,1),pu={type:"added"},hp={type:"removed"},Ar={type:"childadded",child:null},Ea={type:"childremoved",child:null};class St extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,n=new Hn,i=new qo,r=new N(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ue}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,n){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?as.copy(e):as.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(_o,as,this.up):Xn.lookAt(as,_o,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(Xn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hp),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const f=c[u];o(e.shapes,f)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(n){const a=s(e.geometries),c=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new N,qn=new N,ya=new N,Kn=new N,br=new N,Rr=new N,mu=new N,Ta=new N,Aa=new N,ba=new N,Ra=new ht,wa=new ht,Ca=new ht;class cn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){gn.subVectors(r,n),qn.subVectors(i,n),ya.subVectors(e,n);const s=gn.dot(gn),a=gn.dot(qn),c=gn.dot(ya),u=qn.dot(qn),d=qn.dot(ya),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,m=(u*c-a*d)*h,_=(s*d-a*c)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,n,i,r,o,s,a,c){return this.getBarycoord(e,n,i,r,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Kn.x),c.addScaledVector(s,Kn.y),c.addScaledVector(a,Kn.z),c)}static getInterpolatedAttribute(e,n,i,r,o,s){return Ra.setScalar(0),wa.setScalar(0),Ca.setScalar(0),Ra.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,i),Ca.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Ra,o.x),s.addScaledVector(wa,o.y),s.addScaledVector(Ca,o.z),s}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),qn.subVectors(e,n),gn.cross(qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;br.subVectors(r,i),Rr.subVectors(o,i),Ta.subVectors(e,i);const c=br.dot(Ta),u=Rr.dot(Ta);if(c<=0&&u<=0)return n.copy(i);Aa.subVectors(e,r);const d=br.dot(Aa),f=Rr.dot(Aa);if(d>=0&&f<=d)return n.copy(r);const h=c*f-d*u;if(h<=0&&c>=0&&d<=0)return s=c/(c-d),n.copy(i).addScaledVector(br,s);ba.subVectors(e,o);const m=br.dot(ba),_=Rr.dot(ba);if(_>=0&&m<=_)return n.copy(o);const v=m*u-c*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Rr,a);const g=d*_-m*f;if(g<=0&&f-d>=0&&m-_>=0)return mu.subVectors(o,r),a=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(mu,a);const p=1/(g+v+h);return s=v*p,a=h*p,n.copy(i).addScaledVector(br,s).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Ia(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class we{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=Tc(e,1),n=Lt(n,0,1),i=Lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Ia(s,o,e+1/3),this.g=Ia(s,o,e),this.b=Ia(s,o,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=$t){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$t){const i=Kf[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ye.fromWorkingColorSpace(It.copy(this),e),Math.round(Lt(It.r*255,0,255))*65536+Math.round(Lt(It.g*255,0,255))*256+Math.round(Lt(It.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,o=It.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,u;const d=(a+s)/2;if(a===s)c=0,u=0;else{const f=s-a;switch(u=d<=.5?f/(s+a):f/(2-s-a),s){case i:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-i)/f+2;break;case o:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=$t){Ye.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==$t?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+n,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vi),e.getHSL(ls);const i=Uo(vi.h,ls.h,n),r=Uo(vi.s,ls.s,n),o=Uo(vi.l,ls.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new we;we.NAMES=Kf;let pp=0;class gr extends so{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ao(),this.name="",this.blending=Wr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=pl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fi extends gr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,cs=new Qe;class En{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cs.fromBufferAttribute(this,n),cs.applyMatrix3(e),this.setXY(n,cs.x,cs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array),o=Pt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class Yf extends En{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $f extends En{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends En{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mp=0;const on=new ct,Da=new St,wr=new N,qt=new Ko,vo=new Ko,Tt=new N;class fn extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wf(e)?$f:Yf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ue().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,n,i){return on.makeTranslation(e,n,i),this.applyMatrix4(on),this}scale(e,n,i){return on.makeScale(e,n,i),this.applyMatrix4(on),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new en(i,3))}else{for(let i=0,r=n.count;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];qt.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(qt.min,vo.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,vo.max),qt.expandByPoint(Tt)):(qt.expandByPoint(vo.min),qt.expandByPoint(vo.max))}qt.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Tt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Tt.fromBufferAttribute(a,u),c&&(wr.fromBufferAttribute(e,u),Tt.add(wr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new N,c[L]=new N;const u=new N,d=new N,f=new N,h=new Qe,m=new Qe,_=new Qe,v=new N,g=new N;function p(L,T,M){u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),h.fromBufferAttribute(o,L),m.fromBufferAttribute(o,T),_.fromBufferAttribute(o,M),d.sub(u),f.sub(u),m.sub(h),_.sub(h);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(w),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(w),a[L].add(v),a[T].add(v),a[M].add(v),c[L].add(g),c[T].add(g),c[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,T=b.length;L<T;++L){const M=b[L],w=M.start,W=M.count;for(let H=w,$=w+W;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new N,y=new N,U=new N,C=new N;function R(L){U.fromBufferAttribute(r,L),C.copy(U);const T=a[L];E.copy(T),E.sub(U.multiplyScalar(U.dot(T))).normalize(),y.crossVectors(C,T);const w=y.dot(c[L])<0?-1:1;s.setXYZW(L,E.x,E.y,E.z,w)}for(let L=0,T=b.length;L<T;++L){const M=b[L],w=M.start,W=M.count;for(let H=w,$=w+W;H<$;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,o=new N,s=new N,a=new N,c=new N,u=new N,d=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(d),c.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(c.length*d);let m=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*d;for(let p=0;p<d;p++)h[_++]=u[m++]}return new En(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const c=[],u=o[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],m=e(h,i);c.push(m)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],f=o[u];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new ct,Vi=new Ac,us=new Yo,_u=new N,fs=new N,ds=new N,hs=new N,Oa=new N,ps=new N,vu=new N,ms=new N;class ie extends St{constructor(e=new fn,n=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ps.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const d=a[c],f=o[c];d!==0&&(Oa.fromBufferAttribute(f,e),s?ps.addScaledVector(Oa,d):ps.addScaledVector(Oa.sub(n),d))}n.add(ps)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(o),Vi.copy(e.ray).recast(e.near),!(us.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(us,_u)===null||Vi.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(o).invert(),Vi.copy(e.ray).applyMatrix4(gu),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vi)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=b,U=E;y<U;y+=3){const C=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);r=gs(this,p,e,i,u,d,f,C,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const b=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);r=gs(this,s,e,i,u,d,f,b,E,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=b,U=E;y<U;y+=3){const C=y,R=y+1,L=y+2;r=gs(this,p,e,i,u,d,f,C,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const b=g,E=g+1,y=g+2;r=gs(this,s,e,i,u,d,f,b,E,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function gp(t,e,n,i,r,o,s,a){let c;if(e.side===Wt?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Ni,a),c===null)return null;ms.copy(a),ms.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ms);return u<n.near||u>n.far?null:{distance:u,point:ms.clone(),object:t}}function gs(t,e,n,i,r,o,s,a,c,u){t.getVertexPosition(a,fs),t.getVertexPosition(c,ds),t.getVertexPosition(u,hs);const d=gp(t,e,n,i,fs,ds,hs,vu);if(d){const f=new N;cn.getBarycoord(vu,fs,ds,hs,f),r&&(d.uv=cn.getInterpolatedAttribute(r,a,c,u,f,new Qe)),o&&(d.uv1=cn.getInterpolatedAttribute(o,a,c,u,f,new Qe)),s&&(d.normal=cn.getInterpolatedAttribute(s,a,c,u,f,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:u,normal:new N,materialIndex:0};cn.getNormal(fs,ds,hs,h.normal),d.face=h,d.barycoord=f}return d}class fe extends fn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],u=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(f,2));function _(v,g,p,b,E,y,U,C,R,L,T){const M=y/R,w=U/L,W=y/2,H=U/2,$=C/2,Z=R+1,q=L+1;let j=0,k=0;const re=new N;for(let he=0;he<q;he++){const ye=he*w-H;for(let Ge=0;Ge<Z;Ge++){const nt=Ge*M-W;re[v]=nt*b,re[g]=ye*E,re[p]=$,u.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[p]=C>0?1:-1,d.push(re.x,re.y,re.z),f.push(Ge/R),f.push(1-he/L),j+=1}}for(let he=0;he<L;he++)for(let ye=0;ye<R;ye++){const Ge=h+ye+Z*he,nt=h+ye+Z*(he+1),X=h+(ye+1)+Z*(he+1),te=h+(ye+1)+Z*he;c.push(Ge,nt,te),c.push(nt,X,te),k+=6}a.addGroup(m,k,T),m+=k,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Nt(t){const e={};for(let n=0;n<t.length;n++){const i=Qr(t[n]);for(const r in i)e[r]=i[r]}return e}function _p(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zf(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const vp={clone:Qr,merge:Nt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends gr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jf extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new N,xu=new Qe,Su=new Qe;class sn extends jf{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,n){return this.getViewBounds(e,xu,Su),n.subVectors(Su,xu)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/c,n-=s.offsetY*i/u,r*=s.width/c,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,Ir=1;class Mp extends St{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Cr,Ir,e,n);r.layers=this.layers,this.add(r);const o=new sn(Cr,Ir,e,n);o.layers=this.layers,this.add(o);const s=new sn(Cr,Ir,e,n);s.layers=this.layers,this.add(s);const a=new sn(Cr,Ir,e,n);a.layers=this.layers,this.add(a);const c=new sn(Cr,Ir,e,n);c.layers=this.layers,this.add(c);const u=new sn(Cr,Ir,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,c]=n;for(const u of n)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Jf extends Ft{constructor(e,n,i,r,o,s,a,c,u,d){e=e!==void 0?e:[],n=n!==void 0?n:$r,super(e,n,i,r,o,s,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jf(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fe(5,5,5),o=new Li({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Ii});o.uniforms.tEquirect.value=n;const s=new ie(r,o),a=n.minFilter;return n.minFilter===rr&&(n.minFilter=Un),new Mp(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Pa=new N,yp=new N,Tp=new Ue;class Yi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pa.subVectors(i,n).cross(yp.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Tp.getNormalMatrix(e),r=this.coplanarPoint(Pa).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Yo,_s=new N;class bc{constructor(e=new Yi,n=new Yi,i=new Yi,r=new Yi,o=new Yi,s=new Yi){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],v=r[10],g=r[11],p=r[12],b=r[13],E=r[14],y=r[15];if(i[0].setComponents(c-o,h-u,g-m,y-p).normalize(),i[1].setComponents(c+o,h+u,g+m,y+p).normalize(),i[2].setComponents(c+s,h+d,g+_,y+b).normalize(),i[3].setComponents(c-s,h-d,g-_,y-b).normalize(),i[4].setComponents(c-a,h-f,g-v,y-E).normalize(),n===ii)i[5].setComponents(c+a,h+f,g+v,y+E).normalize();else if(n===Vs)i[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_s.x=r.normal.x>0?e.max.x:e.min.x,_s.y=r.normal.y>0?e.max.y:e.min.y,_s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qf(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Ap(t){const e=new WeakMap;function n(a,c){const u=a.array,d=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,u,d),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,u){const d=c.array,f=c.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],v=f[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const v=f[m];t.bufferSubData(u,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,c),u.version=a.version}}return{get:r,remove:o,update:s}}class ra extends fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),c=Math.floor(r),u=a+1,d=c+1,f=e/a,h=n/c,m=[],_=[],v=[],g=[];for(let p=0;p<d;p++){const b=p*h-s;for(let E=0;E<u;E++){const y=E*f-o;_.push(y,-b,0),v.push(0,0,1),g.push(E/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const E=b+u*p,y=b+u*(p+1),U=b+1+u*(p+1),C=b+1+u*p;m.push(E,y,C),m.push(y,U,C)}this.setIndex(m),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,Tm=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Am=`
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,z0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,q0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:bp,alphahash_pars_fragment:Rp,alphamap_fragment:wp,alphamap_pars_fragment:Cp,alphatest_fragment:Ip,alphatest_pars_fragment:Dp,aomap_fragment:Op,aomap_pars_fragment:Pp,batching_pars_vertex:Np,batching_vertex:Lp,begin_vertex:Up,beginnormal_vertex:Fp,bsdfs:Bp,iridescence_fragment:Gp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:zp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Kp,color_vertex:Yp,common:$p,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:sm,envmap_pars_vertex:am,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:um,fog_fragment:fm,fog_pars_fragment:dm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:xm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Mm,lights_phong_pars_fragment:Em,lights_physical_fragment:ym,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:bm,lights_fragment_end:Rm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Dm,map_fragment:Om,map_pars_fragment:Pm,map_particle_fragment:Nm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Bm,morphcolor_vertex:Gm,morphnormal_vertex:Hm,morphtarget_pars_vertex:km,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:zm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Km,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Jm,opaque_fragment:Qm,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:r0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:u0,skinbase_vertex:f0,skinning_pars_vertex:d0,skinning_vertex:h0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:S0,uv_pars_fragment:M0,uv_pars_vertex:E0,uv_vertex:y0,worldpos_vertex:T0,background_vert:A0,background_frag:b0,backgroundCube_vert:R0,backgroundCube_frag:w0,cube_vert:C0,cube_frag:I0,depth_vert:D0,depth_frag:O0,distanceRGBA_vert:P0,distanceRGBA_frag:N0,equirect_vert:L0,equirect_frag:U0,linedashed_vert:F0,linedashed_frag:B0,meshbasic_vert:G0,meshbasic_frag:H0,meshlambert_vert:k0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:z0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:K0,meshphong_frag:Y0,meshphysical_vert:$0,meshphysical_frag:Z0,meshtoon_vert:j0,meshtoon_frag:J0,points_vert:Q0,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:rg},oe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Cn={basic:{uniforms:Nt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Nt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Nt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Nt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Nt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Nt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Nt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Nt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Nt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Nt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Nt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Nt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Nt([oe.lights,oe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Cn.physical={uniforms:Nt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const vs={r:0,b:0,g:0},zi=new Hn,og=new ct;function sg(t,e,n,i,r,o,s){const a=new we(0);let c=o===!0?0:1,u,d,f=null,h=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?n:e).get(E)),E}function v(b){let E=!1;const y=_(b);y===null?p(a,c):y&&y.isColor&&(p(y,1),E=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(b,E){const y=_(E);y&&(y.isCubeTexture||y.mapping===na)?(d===void 0&&(d=new ie(new fe(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Qr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),zi.copy(E.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(zi)),d.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,(f!==y||h!==y.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,m=t.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new ie(new ra(2,2),new Li({name:"BackgroundMaterial",uniforms:Qr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function p(b,E){b.getRGB(vs,Zf(t)),i.buffers.color.setClear(vs.r,vs.g,vs.b,E,s)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:g}}function ag(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(M,w,W,H,$){let Z=!1;const q=f(H,W,w);o!==q&&(o=q,u(o.object)),Z=m(M,H,W,$),Z&&_(M,H,W,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,y(M,w,W,H),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,w,W){const H=W.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let Z=$[w.id];Z===void 0&&(Z={},$[w.id]=Z);let q=Z[H];return q===void 0&&(q=h(c()),Z[H]=q),q}function h(M){const w=[],W=[],H=[];for(let $=0;$<n;$++)w[$]=0,W[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,w,W,H){const $=o.attributes,Z=w.attributes;let q=0;const j=W.getAttributes();for(const k in j)if(j[k].location>=0){const he=$[k];let ye=Z[k];if(ye===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;q++}return o.attributesNum!==q||o.index!==H}function _(M,w,W,H){const $={},Z=w.attributes;let q=0;const j=W.getAttributes();for(const k in j)if(j[k].location>=0){let he=Z[k];he===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),$[k]=ye,q++}o.attributes=$,o.attributesNum=q,o.index=H}function v(){const M=o.newAttributes;for(let w=0,W=M.length;w<W;w++)M[w]=0}function g(M){p(M,0)}function p(M,w){const W=o.newAttributes,H=o.enabledAttributes,$=o.attributeDivisors;W[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),$[M]!==w&&(t.vertexAttribDivisor(M,w),$[M]=w)}function b(){const M=o.newAttributes,w=o.enabledAttributes;for(let W=0,H=w.length;W<H;W++)w[W]!==M[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function E(M,w,W,H,$,Z,q){q===!0?t.vertexAttribIPointer(M,w,W,$,Z):t.vertexAttribPointer(M,w,W,H,$,Z)}function y(M,w,W,H){v();const $=H.attributes,Z=W.getAttributes(),q=w.defaultAttributeValues;for(const j in Z){const k=Z[j];if(k.location>=0){let re=$[j];if(re===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const he=re.normalized,ye=re.itemSize,Ge=e.get(re);if(Ge===void 0)continue;const nt=Ge.buffer,X=Ge.type,te=Ge.bytesPerElement,Se=X===t.INT||X===t.UNSIGNED_INT||re.gpuType===vc;if(re.isInterleavedBufferAttribute){const ae=re.data,Ie=ae.stride,Pe=re.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<k.locationSize;ke++)p(k.location+ke,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<k.locationSize;ke++)g(k.location+ke);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let ke=0;ke<k.locationSize;ke++)E(k.location+ke,ye/k.locationSize,X,he,Ie*te,(Pe+ye/k.locationSize*ke)*te,Se)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,re.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<k.locationSize;ae++)g(k.location+ae);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let ae=0;ae<k.locationSize;ae++)E(k.location+ae,ye/k.locationSize,X,he,ye*te,ye/k.locationSize*ae*te,Se)}}else if(q!==void 0){const he=q[j];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(k.location,he);break;case 3:t.vertexAttrib3fv(k.location,he);break;case 4:t.vertexAttrib4fv(k.location,he);break;default:t.vertexAttrib1fv(k.location,he)}}}}b()}function U(){L();for(const M in i){const w=i[M];for(const W in w){const H=w[W];for(const $ in H)d(H[$].object),delete H[$];delete w[W]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const W in w){const H=w[W];for(const $ in H)d(H[$].object),delete H[$];delete w[W]}delete i[M.id]}function R(M){for(const w in i){const W=i[w];if(W[M.id]===void 0)continue;const H=W[M.id];for(const $ in H)d(H[$].object),delete H[$];delete W[M.id]}}function L(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function lg(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function a(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];n.update(m,i,1)}function c(u,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)s(u[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v]*h[v];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cg(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==Sn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ui&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!L)}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:C}}function ug(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Yi,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=t.get(f);if(!r||_===null||_.length===0||o&&!g)o?d(null):u();else{const b=o?0:i,E=b*4;let y=p.clippingState||null;c.value=y,y=d(_,h,E,m);for(let U=0;U!==E;++U)y[U]=n[U];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const p=m+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=m;E!==v;++E,y+=4)s.copy(f[E]).applyMatrix4(b,a),s.normal.toArray(g,y),g[y+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function fg(t){let e=new WeakMap;function n(s,a){return a===El?s.mapping=$r:a===yl&&(s.mapping=Zr),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===El||a===yl)if(e.has(s)){const c=e.get(s).texture;return n(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const u=new Ep(c.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class ed extends jf{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Br=4,Mu=[.125,.215,.35,.446,.526,.582],ji=20,Na=new ed,Eu=new we;let La=null,Ua=0,Fa=0,Ba=!1;const $i=(1+Math.sqrt(5))/2,Dr=1/$i,yu=[new N(-$i,Dr,0),new N($i,Dr,0),new N(-Dr,0,$i),new N(Dr,0,$i),new N(0,$i,-Dr),new N(0,$i,Dr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){La=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ua,Fa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$r||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Xo,format:Sn,colorSpace:oo,depthBuffer:!1},r=Au(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(o)),this._blurMaterial=hg(o,e,n)}return r}_compileMaterial(e){const n=new ie(this._lodPlanes[0],e);this._renderer.compile(n,Na)}_sceneToCubeUV(e,n,i,r){const a=new sn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Eu),d.toneMapping=Di,d.autoClear=!1;const m=new fi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new ie(new fe,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(Eu),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));const E=this._cubeSize;xs(r,b*E,p>2?E:0,E,E),d.setRenderTarget(r),v&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$r||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ie(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;xs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(s,Na)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=yu[(r-o-1)%yu.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const c=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ie(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*ji-1),v=o/_,g=isFinite(o)?1+Math.floor(d*v):ji;g>ji&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);const p=[];let b=0;for(let R=0;R<ji;++R){const L=R/v,T=Math.exp(-L*L/2);p.push(T),R===0?b+=T:R<g&&(b+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const y=this._sizeLods[r],U=3*y*(r>E-Br?r-E+Br:0),C=4*(this._cubeSize-y);xs(n,U,C,3*y,2*y),c.setRenderTarget(n),c.render(f,Na)}}function dg(t){const e=[],n=[],i=[];let r=t;const o=t-Br+1+Mu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let c=1/a;s>t-Br?c=Mu[s-t+Br-1]:s===0&&(c=0),i.push(c);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,v=3,g=2,p=1,b=new Float32Array(v*_*m),E=new Float32Array(g*_*m),y=new Float32Array(p*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,L=C>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(T,v*_*C),E.set(h,g*_*C);const M=[C,C,C,C,C,C];y.set(M,p*_*C)}const U=new fn;U.setAttribute("position",new En(b,v)),U.setAttribute("uv",new En(E,g)),U.setAttribute("faceIndex",new En(y,p)),e.push(U),r>Br&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Au(t,e,n){const i=new dr(t,e,n);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hg(t,e,n){const i=new Float32Array(ji),r=new N(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function bu(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ru(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Rc(){return`

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
	`}function pg(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===El||c===yl,d=c===$r||c===Zr;if(u||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Tu(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Tu(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let c=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&c++;return c===u}function o(a){const c=a.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function mg(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ao("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gg(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const v=m[_];for(let g=0,p=v.length;g<p;g++)e.update(v[g],t.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,_=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let E=0,y=b.length;E<y;E+=3){const U=b[E+0],C=b[E+1],R=b[E+2];h.push(U,C,C,R,R,U)}}else if(_!==void 0){const b=_.array;v=_.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const U=E+0,C=E+1,R=E+2;h.push(U,C,C,R,R,U)}}else return;const g=new(Wf(h)?$f:Yf)(h,1);g.version=v;const p=o.get(f);p&&e.remove(p),o.set(f,g)}function d(f){const h=o.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function _g(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function c(h,m){t.drawElements(i,m,o,h*s),n.update(m,i,1)}function u(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,o,h*s,_),n.update(m,i,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,h,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];n.update(g,i,1)}function f(h,m,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)u(h[p]/s,m[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,o,h,0,v,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b]*v[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function vg(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xg(t,e,n){const i=new WeakMap,r=new ht;function o(s,a,c){const u=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let U=a.attributes.position.count*y,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*C*4*f),L=new Xf(R,U,C,f);L.type=ni,L.needsUpdate=!0;const T=y*4;for(let w=0;w<f;w++){const W=p[w],H=b[w],$=E[w],Z=U*C*4*w;for(let q=0;q<W.count;q++){const j=q*T;_===!0&&(r.fromBufferAttribute(W,q),R[Z+j+0]=r.x,R[Z+j+1]=r.y,R[Z+j+2]=r.z,R[Z+j+3]=0),v===!0&&(r.fromBufferAttribute(H,q),R[Z+j+4]=r.x,R[Z+j+5]=r.y,R[Z+j+6]=r.z,R[Z+j+7]=0),g===!0&&(r.fromBufferAttribute($,q),R[Z+j+8]=r.x,R[Z+j+9]=r.y,R[Z+j+10]=r.z,R[Z+j+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new Qe(U,C)},i.set(a,h),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function Sg(t,e,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class td extends Ft{constructor(e,n,i,r,o,s,a,c,u,d=zr){if(d!==zr&&d!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===zr&&(i=fr),i===void 0&&d===Jr&&(i=jr),super(null,r,o,s,a,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const nd=new Ft,wu=new td(1,1),id=new Xf,rd=new sp,od=new Jf,Cu=[],Iu=[],Du=new Float32Array(16),Ou=new Float32Array(9),Pu=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Cu[r];if(o===void 0&&(o=new Float32Array(r),Cu[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oa(t,e){let n=Iu[e];n===void 0&&(n=new Int32Array(e),Iu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Mg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Eg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function yg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function Tg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function Ag(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Pu.set(i),t.uniformMatrix2fv(this.addr,!1,Pu),Et(n,i)}}function bg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Ou.set(i),t.uniformMatrix3fv(this.addr,!1,Ou),Et(n,i)}}function Rg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Du.set(i),t.uniformMatrix4fv(this.addr,!1,Du),Et(n,i)}}function wg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Cg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function Ig(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function Dg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function Og(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Pg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function Ng(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function Lg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function Ug(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(wu.compareFunction=Vf,o=wu):o=nd,n.setTexture2D(e||o,r)}function Fg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rd,r)}function Bg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||od,r)}function Gg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||id,r)}function Hg(t){switch(t){case 5126:return Mg;case 35664:return Eg;case 35665:return yg;case 35666:return Tg;case 35674:return Ag;case 35675:return bg;case 35676:return Rg;case 5124:case 35670:return wg;case 35667:case 35671:return Cg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Og;case 36294:return Pg;case 36295:return Ng;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Gg}}function kg(t,e){t.uniform1fv(this.addr,e)}function Vg(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function Wg(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function zg(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function Xg(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qg(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Kg(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Yg(t,e){t.uniform1iv(this.addr,e)}function $g(t,e){t.uniform2iv(this.addr,e)}function Zg(t,e){t.uniform3iv(this.addr,e)}function jg(t,e){t.uniform4iv(this.addr,e)}function Jg(t,e){t.uniform1uiv(this.addr,e)}function Qg(t,e){t.uniform2uiv(this.addr,e)}function e_(t,e){t.uniform3uiv(this.addr,e)}function t_(t,e){t.uniform4uiv(this.addr,e)}function n_(t,e,n){const i=this.cache,r=e.length,o=oa(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||nd,o[s])}function i_(t,e,n){const i=this.cache,r=e.length,o=oa(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||rd,o[s])}function r_(t,e,n){const i=this.cache,r=e.length,o=oa(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||od,o[s])}function o_(t,e,n){const i=this.cache,r=e.length,o=oa(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||id,o[s])}function s_(t){switch(t){case 5126:return kg;case 35664:return Vg;case 35665:return Wg;case 35666:return zg;case 35674:return Xg;case 35675:return qg;case 35676:return Kg;case 5124:case 35670:return Yg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return jg;case 5125:return Jg;case 36294:return Qg;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}class a_{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Hg(n.type)}}class l_{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s_(n.type)}}class c_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Nu(t,e){t.seq.push(e),t.map[e.id]=e}function u_(t,e,n){const i=t.name,r=i.length;for(Ga.lastIndex=0;;){const o=Ga.exec(i),s=Ga.lastIndex;let a=o[1];const c=o[2]==="]",u=o[3];if(c&&(a=a|0),u===void 0||u==="["&&s+2===r){Nu(n,u===void 0?new a_(a,t,e):new l_(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new c_(a),Nu(n,f)),n=f}}}class Bs{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);u_(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Lu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const f_=37297;let d_=0;function h_(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Uu=new Ue;function p_(t){Ye._getMatrix(Uu,Ye.workingColorSpace,t);const e=`mat3( ${Uu.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case ia:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+h_(t.getShaderSource(e),s)}else return r}function m_(t,e){const n=p_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function g_(t,e){let n;switch(e){case _h:n="Linear";break;case vh:n="Reinhard";break;case xh:n="Cineon";break;case Sh:n="ACESFilmic";break;case Eh:n="AgX";break;case yh:n="Neutral";break;case Mh:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ss=new N;function __(){Ye.getLuminanceCoefficients(Ss);const t=Ss.x.toFixed(4),e=Ss.y.toFixed(4),n=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function x_(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function S_(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function bo(t){return t!==""}function Bu(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(t){return t.replace(M_,y_)}const E_=new Map;function y_(t,e){let n=Be[e];if(n===void 0){const i=E_.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jl(n)}const T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(t){return t.replace(T_,A_)}function A_(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ku(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b_(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $r:case Zr:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w_(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function C_(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case mh:e="ENVMAP_BLENDING_MIX";break;case gh:e="ENVMAP_BLENDING_ADD";break}return e}function I_(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function D_(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const c=b_(n),u=R_(n),d=w_(n),f=C_(n),h=I_(n),m=v_(n),_=x_(o),v=r.createProgram();let g,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(g=[ku(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[ku(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?Be.tonemapping_pars_fragment:"",n.toneMapping!==Di?g_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,m_("linearToOutputTexel",n.outputColorSpace),__(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),s=Jl(s),s=Bu(s,n),s=Gu(s,n),a=Jl(a),a=Bu(a,n),a=Gu(a,n),s=Hu(s),a=Hu(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+g+s,y=b+p+a,U=Lu(r,r.VERTEX_SHADER,E),C=Lu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,U),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(w){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(U).trim(),$=r.getShaderInfoLog(C).trim();let Z=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,U,C);else{const j=Fu(r,U,"vertex"),k=Fu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+j+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||$==="")&&(q=!1);q&&(w.diagnostics={runnable:Z,programLog:W,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:p}})}r.deleteShader(U),r.deleteShader(C),L=new Bs(r,v),T=S_(r,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,f_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=C,this}let O_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new N_(e),n.set(e,i)),i}}class N_{constructor(e){this.id=O_++,this.code=e,this.usedTimes=0}}function L_(t,e,n,i,r,o,s){const a=new qf,c=new P_,u=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,M,w,W,H){const $=W.fog,Z=H.geometry,q=T.isMeshStandardMaterial?W.environment:null,j=(T.isMeshStandardMaterial?n:e).get(T.envMap||q),k=j&&j.mapping===na?j.image.height:null,re=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ye=he!==void 0?he.length:0;let Ge=0;Z.morphAttributes.position!==void 0&&(Ge=1),Z.morphAttributes.normal!==void 0&&(Ge=2),Z.morphAttributes.color!==void 0&&(Ge=3);let nt,X,te,Se;if(re){const et=Cn[re];nt=et.vertexShader,X=et.fragmentShader}else nt=T.vertexShader,X=T.fragmentShader,c.update(T),te=c.getVertexShaderID(T),Se=c.getFragmentShaderID(T);const ae=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),Pe=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,ut=!!T.map,qe=!!T.matcap,gt=!!j,P=!!T.aoMap,nn=!!T.lightMap,We=!!T.bumpMap,ze=!!T.normalMap,Re=!!T.displacementMap,st=!!T.emissiveMap,be=!!T.metalnessMap,A=!!T.roughnessMap,x=T.anisotropy>0,F=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,z=T.sheen>0,Me=T.transmission>0,le=x&&!!T.anisotropyMap,pe=F&&!!T.clearcoatMap,Ke=F&&!!T.clearcoatNormalMap,Q=F&&!!T.clearcoatRoughnessMap,me=J&&!!T.iridescenceMap,Ce=J&&!!T.iridescenceThicknessMap,De=z&&!!T.sheenColorMap,ge=z&&!!T.sheenRoughnessMap,Xe=!!T.specularMap,Fe=!!T.specularColorMap,rt=!!T.specularIntensityMap,I=Me&&!!T.transmissionMap,se=Me&&!!T.thicknessMap,V=!!T.gradientMap,Y=!!T.alphaMap,de=T.alphaTest>0,ce=!!T.alphaHash,Ne=!!T.extensions;let dt=Di;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(dt=t.toneMapping);const wt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:nt,fragmentShader:X,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:oo,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:qe,envMap:gt,envMapMode:gt&&j.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:nn,bumpMap:We,normalMap:ze,displacementMap:h&&Re,emissiveMap:st,normalMapObjectSpace:ze&&T.normalMapType===Rh,normalMapTangentSpace:ze&&T.normalMapType===kf,metalnessMap:be,roughnessMap:A,anisotropy:x,anisotropyMap:le,clearcoat:F,clearcoatMap:pe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:Ce,sheen:z,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:rt,transmission:Me,transmissionMap:I,thicknessMap:se,gradientMap:V,opaque:T.transparent===!1&&T.blending===Wr&&T.alphaToCoverage===!1,alphaMap:Y,alphaTest:de,alphaHash:ce,combine:T.combine,mapUv:ut&&v(T.map.channel),aoMapUv:P&&v(T.aoMap.channel),lightMapUv:nn&&v(T.lightMap.channel),bumpMapUv:We&&v(T.bumpMap.channel),normalMapUv:ze&&v(T.normalMap.channel),displacementMapUv:Re&&v(T.displacementMap.channel),emissiveMapUv:st&&v(T.emissiveMap.channel),metalnessMapUv:be&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:le&&v(T.anisotropyMap.channel),clearcoatMapUv:pe&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(T.sheenRoughnessMap.channel),specularMapUv:Xe&&v(T.specularMap.channel),specularColorMapUv:Fe&&v(T.specularColorMap.channel),specularIntensityMapUv:rt&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:se&&v(T.thicknessMap.channel),alphaMapUv:Y&&v(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ze||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(ut||Y),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:dt,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&Ye.getTransfer(T.map.colorSpace)===tt,decodeVideoTextureEmissive:st&&T.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(T.emissiveMap.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Nn,flipSided:T.side===Wt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return wt.vertexUv1s=u.has(1),wt.vertexUv2s=u.has(2),wt.vertexUv3s=u.has(3),u.clear(),wt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)M.push(w),M.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(b(M,T),E(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=_[T.type];let w;if(M){const W=Cn[M];w=vp.clone(W.uniforms)}else w=T.uniforms;return w}function U(T,M){let w;for(let W=0,H=d.length;W<H;W++){const $=d[W];if($.cacheKey===M){w=$,++w.usedTimes;break}}return w===void 0&&(w=new D_(t,M,T,o),d.push(w)),w}function C(T){if(--T.usedTimes===0){const M=d.indexOf(T);d[M]=d[d.length-1],d.pop(),T.destroy()}}function R(T){c.remove(T)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:d,dispose:L}}function U_(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,c){t.get(s)[a]=c}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function F_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wu(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,m,_,v,g){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function a(f,h,m,_,v,g){const p=s(f,h,m,_,v,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(f,h,m,_,v,g){const p=s(f,h,m,_,v,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,h){n.length>1&&n.sort(f||F_),i.length>1&&i.sort(h||Vu),r.length>1&&r.sort(h||Vu)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:d,sort:u}}function B_(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Wu,t.set(i,[s])):r>=o.length?(s=new Wu,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function G_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new we};break;case"SpotLight":n={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function H_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let k_=0;function V_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function W_(t){const e=new G_,n=H_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,o=new ct,s=new ct;function a(u){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,b=0,E=0,y=0,U=0,C=0,R=0;u.sort(V_);for(let T=0,M=u.length;T<M;T++){const w=u[T],W=w.color,H=w.intensity,$=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=W.r*H,f+=W.g*H,h+=W.b*H;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],H);R++}else if(w.isDirectionalLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,k=n.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=w.shadow.matrix,b++}i.directional[m]=q,m++}else if(w.isSpotLight){const q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(W).multiplyScalar(H),q.distance=$,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[v]=q;const j=w.shadow;if(w.map&&(i.spotLightMap[U]=w.map,U++,j.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[v]=j.matrix,w.castShadow){const k=n.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=Z,y++}v++}else if(w.isRectAreaLight){const q=e.get(w);q.color.copy(W).multiplyScalar(H),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=q,g++}else if(w.isPointLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const j=w.shadow,k=n.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=w.shadow.matrix,E++}i.point[_]=q,_++}else if(w.isHemisphereLight){const q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(H),q.groundColor.copy(w.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==U||L.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.directionalLength=m,L.pointLength=_,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=U,L.numLightProbes=R,i.version=k_++)}function c(u,d){let f=0,h=0,m=0,_=0,v=0;const g=d.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const E=u[p];if(E.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(E.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),s.identity(),o.copy(E.matrixWorld),o.premultiply(g),s.extractRotation(o),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function zu(t){const e=new W_(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function z_(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new zu(t),e.set(r,[a])):o>=s.length?(a=new zu(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class X_ extends gr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends gr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function $_(t,e,n){let i=new bc;const r=new Qe,o=new Qe,s=new ht,a=new X_({depthPacking:bh}),c=new q_,u={},d=n.maxTextureSize,f={[Ni]:Wt,[Wt]:Ni,[Nn]:Nn},h=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:K_,fragmentShader:Y_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ie(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let p=this.type;this.render=function(C,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ii),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=p!==$n&&this.type===$n,$=p===$n&&this.type!==$n;for(let Z=0,q=C.length;Z<q;Z++){const j=C[Z],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const re=k.getFrameExtents();if(r.multiply(re),o.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/re.x),r.x=o.x*re.x,k.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/re.y),r.y=o.y*re.y,k.mapSize.y=o.y)),k.map===null||H===!0||$===!0){const ye=this.type!==$n?{minFilter:Qt,magFilter:Qt}:{};k.map!==null&&k.map.dispose(),k.map=new dr(r.x,r.y,ye),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const he=k.getViewportCount();for(let ye=0;ye<he;ye++){const Ge=k.getViewport(ye);s.set(o.x*Ge.x,o.y*Ge.y,o.x*Ge.z,o.y*Ge.w),W.viewport(s),k.updateMatrices(j,ye),i=k.getFrustum(),y(R,L,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===$n&&b(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(T,M,w)};function b(C,R){const L=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new dr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,L,h,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,L,m,v,null)}function E(C,R,L,T){let M=null;const w=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=L.isPointLight===!0?c:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,H=R.uuid;let $=u[W];$===void 0&&($={},u[W]=$);let Z=$[H];Z===void 0&&(Z=M.clone(),$[H]=Z,R.addEventListener("dispose",U)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,T===$n?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=L}return M}function y(C,R,L,T,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===$n)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const H=e.update(C),$=C.material;if(Array.isArray($)){const Z=H.groups;for(let q=0,j=Z.length;q<j;q++){const k=Z[q],re=$[k.materialIndex];if(re&&re.visible){const he=E(C,re,T,M);C.onBeforeShadow(t,C,R,L,H,he,k),t.renderBufferDirect(L,null,H,he,C,k),C.onAfterShadow(t,C,R,L,H,he,k)}}}else if($.visible){const Z=E(C,$,T,M);C.onBeforeShadow(t,C,R,L,H,Z,null),t.renderBufferDirect(L,null,H,Z,C,null),C.onAfterShadow(t,C,R,L,H,Z,null)}}const W=C.children;for(let H=0,$=W.length;H<$;H++)y(W[H],R,L,T,M)}function U(C){C.target.removeEventListener("dispose",U);for(const L in u){const T=u[L],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Z_={[ml]:gl,[_l]:Sl,[vl]:Ml,[Yr]:xl,[gl]:ml,[Sl]:_l,[Ml]:vl,[xl]:Yr};function j_(t,e){function n(){let I=!1;const se=new ht;let V=null;const Y=new ht(0,0,0,0);return{setMask:function(de){V!==de&&!I&&(t.colorMask(de,de,de,de),V=de)},setLocked:function(de){I=de},setClear:function(de,ce,Ne,dt,wt){wt===!0&&(de*=dt,ce*=dt,Ne*=dt),se.set(de,ce,Ne,dt),Y.equals(se)===!1&&(t.clearColor(de,ce,Ne,dt),Y.copy(se))},reset:function(){I=!1,V=null,Y.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,V=null,Y=null,de=null;return{setReversed:function(ce){if(se!==ce){const Ne=e.get("EXT_clip_control");se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const dt=de;de=null,this.setClear(dt)}se=ce},getReversed:function(){return se},setTest:function(ce){ce?ae(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(ce){V!==ce&&!I&&(t.depthMask(ce),V=ce)},setFunc:function(ce){if(se&&(ce=Z_[ce]),Y!==ce){switch(ce){case ml:t.depthFunc(t.NEVER);break;case gl:t.depthFunc(t.ALWAYS);break;case _l:t.depthFunc(t.LESS);break;case Yr:t.depthFunc(t.LEQUAL);break;case vl:t.depthFunc(t.EQUAL);break;case xl:t.depthFunc(t.GEQUAL);break;case Sl:t.depthFunc(t.GREATER);break;case Ml:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=ce}},setLocked:function(ce){I=ce},setClear:function(ce){de!==ce&&(se&&(ce=1-ce),t.clearDepth(ce),de=ce)},reset:function(){I=!1,V=null,Y=null,de=null,se=!1}}}function r(){let I=!1,se=null,V=null,Y=null,de=null,ce=null,Ne=null,dt=null,wt=null;return{setTest:function(et){I||(et?ae(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(et){se!==et&&!I&&(t.stencilMask(et),se=et)},setFunc:function(et,dn,kn){(V!==et||Y!==dn||de!==kn)&&(t.stencilFunc(et,dn,kn),V=et,Y=dn,de=kn)},setOp:function(et,dn,kn){(ce!==et||Ne!==dn||dt!==kn)&&(t.stencilOp(et,dn,kn),ce=et,Ne=dn,dt=kn)},setLocked:function(et){I=et},setClear:function(et){wt!==et&&(t.clearStencil(et),wt=et)},reset:function(){I=!1,se=null,V=null,Y=null,de=null,ce=null,Ne=null,dt=null,wt=null}}}const o=new n,s=new i,a=new r,c=new WeakMap,u=new WeakMap;let d={},f={},h=new WeakMap,m=[],_=null,v=!1,g=null,p=null,b=null,E=null,y=null,U=null,C=null,R=new we(0,0,0),L=0,T=!1,M=null,w=null,W=null,H=null,$=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=j>=2);let re=null,he={};const ye=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),nt=new ht().fromArray(ye),X=new ht().fromArray(Ge);function te(I,se,V,Y){const de=new Uint8Array(4),ce=t.createTexture();t.bindTexture(I,ce),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<V;Ne++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(se+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ce}const Se={};Se[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),s.setFunc(Yr),We(!1),ze(Kc),ae(t.CULL_FACE),P(Ii);function ae(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Ie(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Pe(I,se){return f[I]!==se?(t.bindFramebuffer(I,se),f[I]=se,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=se),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=se),!0):!1}function ke(I,se){let V=m,Y=!1;if(I){V=h.get(se),V===void 0&&(V=[],h.set(se,V));const de=I.textures;if(V.length!==de.length||V[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ne=de.length;ce<Ne;ce++)V[ce]=t.COLOR_ATTACHMENT0+ce;V.length=de.length,Y=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,Y=!0);Y&&t.drawBuffers(V)}function ut(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const qe={[Zi]:t.FUNC_ADD,[Jd]:t.FUNC_SUBTRACT,[Qd]:t.FUNC_REVERSE_SUBTRACT};qe[eh]=t.MIN,qe[th]=t.MAX;const gt={[nh]:t.ZERO,[ih]:t.ONE,[rh]:t.SRC_COLOR,[hl]:t.SRC_ALPHA,[uh]:t.SRC_ALPHA_SATURATE,[lh]:t.DST_COLOR,[sh]:t.DST_ALPHA,[oh]:t.ONE_MINUS_SRC_COLOR,[pl]:t.ONE_MINUS_SRC_ALPHA,[ch]:t.ONE_MINUS_DST_COLOR,[ah]:t.ONE_MINUS_DST_ALPHA,[fh]:t.CONSTANT_COLOR,[dh]:t.ONE_MINUS_CONSTANT_COLOR,[hh]:t.CONSTANT_ALPHA,[ph]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,se,V,Y,de,ce,Ne,dt,wt,et){if(I===Ii){v===!0&&(Ie(t.BLEND),v=!1);return}if(v===!1&&(ae(t.BLEND),v=!0),I!==jd){if(I!==g||et!==T){if((p!==Zi||y!==Zi)&&(t.blendEquation(t.FUNC_ADD),p=Zi,y=Zi),et)switch(I){case Wr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yc:t.blendFunc(t.ONE,t.ONE);break;case $c:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zc:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $c:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zc:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,U=null,C=null,R.set(0,0,0),L=0,g=I,T=et}return}de=de||se,ce=ce||V,Ne=Ne||Y,(se!==p||de!==y)&&(t.blendEquationSeparate(qe[se],qe[de]),p=se,y=de),(V!==b||Y!==E||ce!==U||Ne!==C)&&(t.blendFuncSeparate(gt[V],gt[Y],gt[ce],gt[Ne]),b=V,E=Y,U=ce,C=Ne),(dt.equals(R)===!1||wt!==L)&&(t.blendColor(dt.r,dt.g,dt.b,wt),R.copy(dt),L=wt),g=I,T=!1}function nn(I,se){I.side===Nn?Ie(t.CULL_FACE):ae(t.CULL_FACE);let V=I.side===Wt;se&&(V=!V),We(V),I.blending===Wr&&I.transparent===!1?P(Ii):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const Y=I.stencilWrite;a.setTest(Y),Y&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function ze(I){I!==Yd?(ae(t.CULL_FACE),I!==w&&(I===Kc?t.cullFace(t.BACK):I===$d?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),w=I}function Re(I){I!==W&&(q&&t.lineWidth(I),W=I)}function st(I,se,V){I?(ae(t.POLYGON_OFFSET_FILL),(H!==se||$!==V)&&(t.polygonOffset(se,V),H=se,$=V)):Ie(t.POLYGON_OFFSET_FILL)}function be(I){I?ae(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+Z-1),re!==I&&(t.activeTexture(I),re=I)}function x(I,se,V){V===void 0&&(re===null?V=t.TEXTURE0+Z-1:V=re);let Y=he[V];Y===void 0&&(Y={type:void 0,texture:void 0},he[V]=Y),(Y.type!==I||Y.texture!==se)&&(re!==V&&(t.activeTexture(V),re=V),t.bindTexture(I,se||Se[I]),Y.type=I,Y.texture=se)}function F(){const I=he[re];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){nt.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),nt.copy(I))}function ge(I){X.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Xe(I,se){let V=u.get(se);V===void 0&&(V=new WeakMap,u.set(se,V));let Y=V.get(I);Y===void 0&&(Y=t.getUniformBlockIndex(se,I.name),V.set(I,Y))}function Fe(I,se){const Y=u.get(se).get(I);c.get(se)!==Y&&(t.uniformBlockBinding(se,Y,I.__bindingPointIndex),c.set(se,Y))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},re=null,he={},f={},h=new WeakMap,m=[],_=null,v=!1,g=null,p=null,b=null,E=null,y=null,U=null,C=null,R=new we(0,0,0),L=0,T=!1,M=null,w=null,W=null,H=null,$=null,nt.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ae,disable:Ie,bindFramebuffer:Pe,drawBuffers:ke,useProgram:ut,setBlending:P,setMaterial:nn,setFlipSided:We,setCullFace:ze,setLineWidth:Re,setPolygonOffset:st,setScissorTest:be,activeTexture:A,bindTexture:x,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:me,texImage3D:Ce,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:Ke,texStorage3D:Q,texSubImage2D:z,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:De,viewport:ge,reset:rt}}function Xu(t,e,n,i){const r=J_(i);switch(n){case Nf:return t*e;case Uf:return t*e;case Ff:return t*e*2;case Bf:return t*e/r.components*r.byteLength;case Mc:return t*e/r.components*r.byteLength;case Gf:return t*e*2/r.components*r.byteLength;case Ec:return t*e*2/r.components*r.byteLength;case Lf:return t*e*3/r.components*r.byteLength;case Sn:return t*e*4/r.components*r.byteLength;case yc:return t*e*4/r.components*r.byteLength;case Ps:case Ns:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Us:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Cl:return Math.max(t,16)*Math.max(e,8)/4;case bl:case wl:return Math.max(t,8)*Math.max(e,8)/2;case Il:case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fs:case Kl:case Yl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hf:case $l:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zl:case jl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function J_(t){switch(t){case ui:case Df:return{byteLength:1,components:1};case ko:case Of:case Xo:return{byteLength:2,components:1};case xc:case Sc:return{byteLength:2,components:4};case fr:case vc:case ni:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Q_(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Qe,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):Ws("canvas")}function v(A,x,F){let K=1;const J=be(A);if((J.width>F||J.height>F)&&(K=F/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const z=Math.floor(K*J.width),Me=Math.floor(K*J.height);f===void 0&&(f=_(z,Me));const le=x?_(z,Me):f;return le.width=z,le.height=Me,le.getContext("2d").drawImage(A,0,0,z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+z+"x"+Me+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){t.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(A,x,F,K,J=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let z=x;if(x===t.RED&&(F===t.FLOAT&&(z=t.R32F),F===t.HALF_FLOAT&&(z=t.R16F),F===t.UNSIGNED_BYTE&&(z=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.R8UI),F===t.UNSIGNED_SHORT&&(z=t.R16UI),F===t.UNSIGNED_INT&&(z=t.R32UI),F===t.BYTE&&(z=t.R8I),F===t.SHORT&&(z=t.R16I),F===t.INT&&(z=t.R32I)),x===t.RG&&(F===t.FLOAT&&(z=t.RG32F),F===t.HALF_FLOAT&&(z=t.RG16F),F===t.UNSIGNED_BYTE&&(z=t.RG8)),x===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.RG8UI),F===t.UNSIGNED_SHORT&&(z=t.RG16UI),F===t.UNSIGNED_INT&&(z=t.RG32UI),F===t.BYTE&&(z=t.RG8I),F===t.SHORT&&(z=t.RG16I),F===t.INT&&(z=t.RG32I)),x===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.RGB8UI),F===t.UNSIGNED_SHORT&&(z=t.RGB16UI),F===t.UNSIGNED_INT&&(z=t.RGB32UI),F===t.BYTE&&(z=t.RGB8I),F===t.SHORT&&(z=t.RGB16I),F===t.INT&&(z=t.RGB32I)),x===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),F===t.UNSIGNED_INT&&(z=t.RGBA32UI),F===t.BYTE&&(z=t.RGBA8I),F===t.SHORT&&(z=t.RGBA16I),F===t.INT&&(z=t.RGBA32I)),x===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),x===t.RGBA){const Me=J?ia:Ye.getTransfer(K);F===t.FLOAT&&(z=t.RGBA32F),F===t.HALF_FLOAT&&(z=t.RGBA16F),F===t.UNSIGNED_BYTE&&(z=Me===tt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function y(A,x){let F;return A?x===null||x===fr||x===jr?F=t.DEPTH24_STENCIL8:x===ni?F=t.DEPTH32F_STENCIL8:x===ko&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fr||x===jr?F=t.DEPTH_COMPONENT24:x===ni?F=t.DEPTH_COMPONENT32F:x===ko&&(F=t.DEPTH_COMPONENT16),F}function U(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==Un?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&d.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),M(x)}function L(A){const x=i.get(A);if(x.__webglInit===void 0)return;const F=A.source,K=h.get(F);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(A),Object.keys(K).length===0&&h.delete(F)}i.remove(A)}function T(A){const x=i.get(A);t.deleteTexture(x.__webglTexture);const F=A.source,K=h.get(F);delete K[x.__cacheKey],s.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[K][J]);else t.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)t.deleteFramebuffer(x.__webglFramebuffer[K]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let K=0,J=F.length;K<J;K++){const z=i.get(F[K]);z.__webglTexture&&(t.deleteTexture(z.__webglTexture),s.memory.textures--),i.remove(F[K])}i.remove(A)}let w=0;function W(){w=0}function H(){const A=w;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),w+=1,A}function $(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Z(A,x){const F=i.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,A,x);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function q(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function j(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function k(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){te(F,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}const re={[Tl]:t.REPEAT,[ir]:t.CLAMP_TO_EDGE,[Al]:t.MIRRORED_REPEAT},he={[Qt]:t.NEAREST,[Th]:t.NEAREST_MIPMAP_NEAREST,[es]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[ha]:t.LINEAR_MIPMAP_NEAREST,[rr]:t.LINEAR_MIPMAP_LINEAR},ye={[wh]:t.NEVER,[Nh]:t.ALWAYS,[Ch]:t.LESS,[Vf]:t.LEQUAL,[Ih]:t.EQUAL,[Ph]:t.GEQUAL,[Dh]:t.GREATER,[Oh]:t.NOTEQUAL};function Ge(A,x){if(x.type===ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Un||x.magFilter===ha||x.magFilter===es||x.magFilter===rr||x.minFilter===Un||x.minFilter===ha||x.minFilter===es||x.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,re[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,re[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,re[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,he[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qt||x.minFilter!==es&&x.minFilter!==rr||x.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const z=$(x);if(z!==A.__cacheKey){J[z]===void 0&&(J[z]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[z].usedTimes++;const Me=J[A.__cacheKey];Me!==void 0&&(J[A.__cacheKey].usedTimes--,Me.usedTimes===0&&T(x)),A.__cacheKey=z,A.__webglTexture=J[z].texture}return F}function X(A,x,F){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const J=nt(A,x),z=x.source;n.bindTexture(K,A.__webglTexture,t.TEXTURE0+F);const Me=i.get(z);if(z.version!==Me.__version||J===!0){n.activeTexture(t.TEXTURE0+F);const le=Ye.getPrimaries(Ye.workingColorSpace),pe=x.colorSpace===bi?null:Ye.getPrimaries(x.colorSpace),Ke=x.colorSpace===bi||le===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Q=v(x.image,!1,r.maxTextureSize);Q=st(x,Q);const me=o.convert(x.format,x.colorSpace),Ce=o.convert(x.type);let De=E(x.internalFormat,me,Ce,x.colorSpace,x.isVideoTexture);Ge(K,x);let ge;const Xe=x.mipmaps,Fe=x.isVideoTexture!==!0,rt=Me.__version===void 0||J===!0,I=z.dataReady,se=U(x,Q);if(x.isDepthTexture)De=y(x.format===Jr,x.type),rt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,De,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,De,Q.width,Q.height,0,me,Ce,null));else if(x.isDataTexture)if(Xe.length>0){Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,se,De,Xe[0].width,Xe[0].height);for(let V=0,Y=Xe.length;V<Y;V++)ge=Xe[V],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ce,ge.data):n.texImage2D(t.TEXTURE_2D,V,De,ge.width,ge.height,0,me,Ce,ge.data);x.generateMipmaps=!1}else Fe?(rt&&n.texStorage2D(t.TEXTURE_2D,se,De,Q.width,Q.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,me,Ce,Q.data)):n.texImage2D(t.TEXTURE_2D,0,De,Q.width,Q.height,0,me,Ce,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,De,Xe[0].width,Xe[0].height,Q.depth);for(let V=0,Y=Xe.length;V<Y;V++)if(ge=Xe[V],x.format!==Sn)if(me!==null)if(Fe){if(I)if(x.layerUpdates.size>0){const de=Xu(ge.width,ge.height,x.format,x.type);for(const ce of x.layerUpdates){const Ne=ge.data.subarray(ce*de/ge.data.BYTES_PER_ELEMENT,(ce+1)*de/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,ce,ge.width,ge.height,1,me,Ne)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,Q.depth,me,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,De,ge.width,ge.height,Q.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,Q.depth,me,Ce,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,De,ge.width,ge.height,Q.depth,0,me,Ce,ge.data)}else{Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,se,De,Xe[0].width,Xe[0].height);for(let V=0,Y=Xe.length;V<Y;V++)ge=Xe[V],x.format!==Sn?me!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,ge.width,ge.height,me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,V,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ce,ge.data):n.texImage2D(t.TEXTURE_2D,V,De,ge.width,ge.height,0,me,Ce,ge.data)}else if(x.isDataArrayTexture)if(Fe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,De,Q.width,Q.height,Q.depth),I)if(x.layerUpdates.size>0){const V=Xu(Q.width,Q.height,x.format,x.type);for(const Y of x.layerUpdates){const de=Q.data.subarray(Y*V/Q.data.BYTES_PER_ELEMENT,(Y+1)*V/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,me,Ce,de)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Ce,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,Q.width,Q.height,Q.depth,0,me,Ce,Q.data);else if(x.isData3DTexture)Fe?(rt&&n.texStorage3D(t.TEXTURE_3D,se,De,Q.width,Q.height,Q.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Ce,Q.data)):n.texImage3D(t.TEXTURE_3D,0,De,Q.width,Q.height,Q.depth,0,me,Ce,Q.data);else if(x.isFramebufferTexture){if(rt)if(Fe)n.texStorage2D(t.TEXTURE_2D,se,De,Q.width,Q.height);else{let V=Q.width,Y=Q.height;for(let de=0;de<se;de++)n.texImage2D(t.TEXTURE_2D,de,De,V,Y,0,me,Ce,null),V>>=1,Y>>=1}}else if(Xe.length>0){if(Fe&&rt){const V=be(Xe[0]);n.texStorage2D(t.TEXTURE_2D,se,De,V.width,V.height)}for(let V=0,Y=Xe.length;V<Y;V++)ge=Xe[V],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,me,Ce,ge):n.texImage2D(t.TEXTURE_2D,V,De,me,Ce,ge);x.generateMipmaps=!1}else if(Fe){if(rt){const V=be(Q);n.texStorage2D(t.TEXTURE_2D,se,De,V.width,V.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ce,Q)}else n.texImage2D(t.TEXTURE_2D,0,De,me,Ce,Q);g(x)&&p(K),Me.__version=z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function te(A,x,F){if(x.image.length!==6)return;const K=nt(A,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const z=i.get(J);if(J.version!==z.__version||K===!0){n.activeTexture(t.TEXTURE0+F);const Me=Ye.getPrimaries(Ye.workingColorSpace),le=x.colorSpace===bi?null:Ye.getPrimaries(x.colorSpace),pe=x.colorSpace===bi||Me===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ke=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,me=[];for(let Y=0;Y<6;Y++)!Ke&&!Q?me[Y]=v(x.image[Y],!0,r.maxCubemapSize):me[Y]=Q?x.image[Y].image:x.image[Y],me[Y]=st(x,me[Y]);const Ce=me[0],De=o.convert(x.format,x.colorSpace),ge=o.convert(x.type),Xe=E(x.internalFormat,De,ge,x.colorSpace),Fe=x.isVideoTexture!==!0,rt=z.__version===void 0||K===!0,I=J.dataReady;let se=U(x,Ce);Ge(t.TEXTURE_CUBE_MAP,x);let V;if(Ke){Fe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Xe,Ce.width,Ce.height);for(let Y=0;Y<6;Y++){V=me[Y].mipmaps;for(let de=0;de<V.length;de++){const ce=V[de];x.format!==Sn?De!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ce.width,ce.height,De,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ce.width,ce.height,De,ge,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Xe,ce.width,ce.height,0,De,ge,ce.data)}}}else{if(V=x.mipmaps,Fe&&rt){V.length>0&&se++;const Y=be(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Xe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,me[Y].width,me[Y].height,De,ge,me[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,me[Y].width,me[Y].height,0,De,ge,me[Y].data);for(let de=0;de<V.length;de++){const Ne=V[de].image[Y].image;Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Ne.width,Ne.height,De,ge,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Xe,Ne.width,Ne.height,0,De,ge,Ne.data)}}else{Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,De,ge,me[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,De,ge,me[Y]);for(let de=0;de<V.length;de++){const ce=V[de];Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,De,ge,ce.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Xe,De,ge,ce.image[Y])}}}g(x)&&p(t.TEXTURE_CUBE_MAP),z.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Se(A,x,F,K,J,z){const Me=o.convert(F.format,F.colorSpace),le=o.convert(F.type),pe=E(F.internalFormat,Me,le,F.colorSpace),Ke=i.get(x),Q=i.get(F);if(Q.__renderTarget=x,!Ke.__hasExternalTextures){const me=Math.max(1,x.width>>z),Ce=Math.max(1,x.height>>z);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,z,pe,me,Ce,x.depth,0,Me,le,null):n.texImage2D(J,z,pe,me,Ce,0,Me,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ze(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,J,Q.__webglTexture,0,We(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,J,Q.__webglTexture,z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(A,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,z=y(x.stencilBuffer,J),Me=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=We(x);ze(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,z,x.width,x.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,A)}else{const K=x.textures;for(let J=0;J<K.length;J++){const z=K[J],Me=o.convert(z.format,z.colorSpace),le=o.convert(z.type),pe=E(z.internalFormat,Me,le,z.colorSpace),Ke=We(x);F&&ze(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,pe,x.width,x.height):ze(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,pe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,pe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const J=K.__webglTexture,z=We(x);if(x.depthTexture.format===zr)ze(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(x.depthTexture.format===Jr)ze(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const x=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),ae(x.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,z),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ae(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(A,x,F){const K=i.get(A);x!==void 0&&Se(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Pe(A)}function ut(A){const x=A.texture,F=i.get(A),K=i.get(x);A.addEventListener("dispose",R);const J=A.textures,z=A.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,s.memory.textures++),z){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let pe=0;pe<x.mipmaps.length;pe++)F.__webglFramebuffer[le][pe]=t.createFramebuffer()}else F.__webglFramebuffer[le]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)F.__webglFramebuffer[le]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Me)for(let le=0,pe=J.length;le<pe;le++){const Ke=i.get(J[le]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&ze(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const pe=J[le];F.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Ke=o.convert(pe.format,pe.colorSpace),Q=o.convert(pe.type),me=E(pe.internalFormat,Ke,Q,pe.colorSpace,A.isXRRenderTarget===!0),Ce=We(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,me,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,F.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(z){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Se(F.__webglFramebuffer[le][pe],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else Se(F.__webglFramebuffer[le],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let le=0,pe=J.length;le<pe;le++){const Ke=J[le],Q=i.get(Ke);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),Ge(t.TEXTURE_2D,Ke),Se(F.__webglFramebuffer,A,Ke,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),g(Ke)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),Ge(le,x),x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Se(F.__webglFramebuffer[pe],A,x,t.COLOR_ATTACHMENT0,le,pe);else Se(F.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,le,0);g(x)&&p(le),n.unbindTexture()}A.depthBuffer&&Pe(A)}function qe(A){const x=A.textures;for(let F=0,K=x.length;F<K;F++){const J=x[F];if(g(J)){const z=b(A),Me=i.get(J).__webglTexture;n.bindTexture(z,Me),p(z),n.unbindTexture()}}}const gt=[],P=[];function nn(A){if(A.samples>0){if(ze(A)===!1){const x=A.textures,F=A.width,K=A.height;let J=t.COLOR_BUFFER_BIT;const z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(A),le=x.length>1;if(le)for(let pe=0;pe<x.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const Ke=i.get(x[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,F,K,0,0,F,K,J,t.NEAREST),c===!0&&(gt.length=0,P.length=0,gt.push(t.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(gt.push(z),P.push(z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<x.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const Ke=i.get(x[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function We(A){return Math.min(r.maxSamples,A.samples)}function ze(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Re(A){const x=s.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function st(A,x){const F=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==oo&&F!==bi&&(Ye.getTransfer(F)===tt?(K!==Sn||J!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=ke,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ze}function ev(t,e){function n(i,r=bi){let o;const s=Ye.getTransfer(r);if(i===ui)return t.UNSIGNED_BYTE;if(i===xc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Df)return t.BYTE;if(i===Of)return t.SHORT;if(i===ko)return t.UNSIGNED_SHORT;if(i===vc)return t.INT;if(i===fr)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Xo)return t.HALF_FLOAT;if(i===Nf)return t.ALPHA;if(i===Lf)return t.RGB;if(i===Sn)return t.RGBA;if(i===Uf)return t.LUMINANCE;if(i===Ff)return t.LUMINANCE_ALPHA;if(i===zr)return t.DEPTH_COMPONENT;if(i===Jr)return t.DEPTH_STENCIL;if(i===Bf)return t.RED;if(i===Mc)return t.RED_INTEGER;if(i===Gf)return t.RG;if(i===Ec)return t.RG_INTEGER;if(i===yc)return t.RGBA_INTEGER;if(i===Ps||i===Ns||i===Ls||i===Us)if(s===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ns)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ls)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Us)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===Rl||i===wl||i===Cl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Dl||i===Ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Il||i===Dl)return s===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ol)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Nl||i===Ll||i===Ul||i===Fl||i===Bl||i===Gl||i===Hl||i===kl||i===Vl||i===Wl||i===zl||i===Xl||i===ql)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Pl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fs||i===Kl||i===Yl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Fs)return s===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hf||i===$l||i===Zl||i===jl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Fs)return o.COMPRESSED_RED_RGTC1_EXT;if(i===$l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class tv extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ot extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nv={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`;class ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ft,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:iv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ie(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sv extends so{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,u=null,d=null,f=null,h=null,m=null,_=null;const v=new ov,g=n.getContextAttributes();let p=null,b=null;const E=[],y=[],U=new Qe;let C=null;const R=new sn;R.viewport=new ht;const L=new sn;L.viewport=new ht;const T=[R,L],M=new tv;let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=E[X];return te===void 0&&(te=new Ha,E[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=E[X];return te===void 0&&(te=new Ha,E[X]=te),te.getGripSpace()},this.getHand=function(X){let te=E[X];return te===void 0&&(te=new Ha,E[X]=te),te.getHandSpace()};function H(X){const te=y.indexOf(X.inputSource);if(te===-1)return;const Se=E[te];Se!==void 0&&(Se.update(X.inputSource,X.frame,u||s),Se.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<E.length;X++){const te=y[X];te!==null&&(y[X]=null,E[X].disconnect(te))}w=null,W=null,v.reset(),e.setRenderTarget(p),m=null,h=null,f=null,r=null,b=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new dr(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,Se=null,ae=null;g.depth&&(ae=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?Jr:zr,Se=g.stencil?jr:fr);const Ie={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new dr(h.textureWidth,h.textureHeight,{format:Sn,type:ui,depthTexture:new td(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),u=null,s=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(X){for(let te=0;te<X.removed.length;te++){const Se=X.removed[te],ae=y.indexOf(Se);ae>=0&&(y[ae]=null,E[ae].disconnect(Se))}for(let te=0;te<X.added.length;te++){const Se=X.added[te];let ae=y.indexOf(Se);if(ae===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=y.length){y.push(Se),ae=Pe;break}else if(y[Pe]===null){y[Pe]=Se,ae=Pe;break}if(ae===-1)break}const Ie=E[ae];Ie&&Ie.connect(Se)}}const q=new N,j=new N;function k(X,te,Se){q.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const ae=q.distanceTo(j),Ie=te.projectionMatrix.elements,Pe=Se.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),ut=Ie[14]/(Ie[10]+1),qe=(Ie[9]+1)/Ie[5],gt=(Ie[9]-1)/Ie[5],P=(Ie[8]-1)/Ie[0],nn=(Pe[8]+1)/Pe[0],We=ke*P,ze=ke*nn,Re=ae/(-P+nn),st=Re*-P;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(st),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const be=ke+Re,A=ut+Re,x=We-st,F=ze+(ae-st),K=qe*ut/A*be,J=gt*ut/A*be;X.projectionMatrix.makePerspective(x,F,K,J,be,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function re(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,Se=X.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),M.near=L.near=R.near=te,M.far=L.far=R.far=Se,(w!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,W=M.far),R.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ae=X.parent,Ie=M.cameras;re(M,ae);for(let Pe=0;Pe<Ie.length;Pe++)re(Ie[Pe],ae);Ie.length===2?k(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),he(X,M,ae)};function he(X,te,Se){Se===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(Se.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ye=null;function Ge(X,te){if(d=te.getViewerPose(u||s),_=te,d!==null){const Se=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ae=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Pe=0;Pe<Se.length;Pe++){const ke=Se[Pe];let ut=null;if(m!==null)ut=m.getViewport(ke);else{const gt=f.getViewSubImage(h,ke);ut=gt.viewport,Pe===0&&(e.setRenderTargetTextures(b,gt.colorTexture,h.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(b))}let qe=T[Pe];qe===void 0&&(qe=new sn,qe.layers.enable(Pe),qe.viewport=new ht,T[Pe]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ut.x,ut.y,ut.width,ut.height),Pe===0&&(M.matrix.copy(qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(qe)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Pe=f.getDepthInformation(Se[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,r.renderState)}}for(let Se=0;Se<E.length;Se++){const ae=y[Se],Ie=E[Se];ae!==null&&Ie!==void 0&&Ie.update(ae,te,u||s)}ye&&ye(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const nt=new Qf;nt.setAnimationLoop(Ge),this.setAnimationLoop=function(X){ye=X},this.dispose=function(){}}}const Xi=new Hn,av=new ct;function lv(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Zf(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),d(g,p)):p.isMeshStandardMaterial?(o(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,b,E):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,y=b.envMapRotation;E&&(g.envMap.value=E,Xi.copy(y),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(Xi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=E*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cv(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const y=E.program;i.uniformBlockBinding(b,y)}function u(b,E){let y=r[b.id];y===void 0&&(_(b),y=d(b),r[b.id]=y,b.addEventListener("dispose",g));const U=E.program;i.updateUBOMapping(b,U);const C=e.render.frame;o[b.id]!==C&&(h(b),o[b.id]=C)}function d(b){const E=f();b.__bindingPointIndex=E;const y=t.createBuffer(),U=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,U,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function f(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const E=r[b.id],y=b.uniforms,U=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let C=0,R=y.length;C<R;C++){const L=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,M=L.length;T<M;T++){const w=L[T];if(m(w,C,T,U)===!0){const W=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let Z=0;Z<H.length;Z++){const q=H[Z],j=v(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,W+$,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,E,y,U){const C=b.value,R=E+"_"+y;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const L=U[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return U[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(b){const E=b.uniforms;let y=0;const U=16;for(let R=0,L=E.length;R<L;R++){const T=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,w=T.length;M<w;M++){const W=T[M],H=Array.isArray(W.value)?W.value:[W.value];for(let $=0,Z=H.length;$<Z;$++){const q=H[$],j=v(q),k=y%U,re=k%j.boundary,he=k+re;y+=re,he!==0&&U-he<j.storage&&(y+=U-he),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=j.storage}}}const C=y%U;return C>0&&(y+=U-C),b.__size=y,b.__cache={},this}function v(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const y=s.indexOf(E.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:c,update:u,dispose:p}}class uv{constructor(e={}){const{canvas:n=Jh(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const b=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=Di,this.toneMappingExposure=1;const y=this;let U=!1,C=0,R=0,L=null,T=-1,M=null;const w=new ht,W=new ht;let H=null;const $=new we(0);let Z=0,q=n.width,j=n.height,k=1,re=null,he=null;const ye=new ht(0,0,q,j),Ge=new ht(0,0,q,j);let nt=!1;const X=new bc;let te=!1,Se=!1;const ae=new ct,Ie=new ct,Pe=new N,ke=new ht,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function gt(){return L===null?k:1}let P=i;function nn(S,D){return n.getContext(S,D)}try{const S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gc}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ce,!1),P===null){const D="webgl2";if(P=nn(D,S),P===null)throw nn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let We,ze,Re,st,be,A,x,F,K,J,z,Me,le,pe,Ke,Q,me,Ce,De,ge,Xe,Fe,rt,I;function se(){We=new mg(P),We.init(),Fe=new ev(P,We),ze=new cg(P,We,e,Fe),Re=new j_(P,We),ze.reverseDepthBuffer&&h&&Re.buffers.depth.setReversed(!0),st=new vg(P),be=new U_,A=new Q_(P,We,Re,be,ze,Fe,st),x=new fg(y),F=new pg(y),K=new Ap(P),rt=new ag(P,K),J=new gg(P,K,st,rt),z=new Sg(P,J,K,st),De=new xg(P,ze,A),Q=new ug(be),Me=new L_(y,x,F,We,ze,rt,Q),le=new lv(y,be),pe=new B_,Ke=new z_(We),Ce=new sg(y,x,F,Re,z,m,c),me=new $_(y,z,ze),I=new cv(P,st,ze,Re),ge=new lg(P,We,st),Xe=new _g(P,We,st),st.programs=Me.programs,y.capabilities=ze,y.extensions=We,y.properties=be,y.renderLists=pe,y.shadowMap=me,y.state=Re,y.info=st}se();const V=new sv(y,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(q,j,!1))},this.getSize=function(S){return S.set(q,j)},this.setSize=function(S,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,j=D,n.width=Math.floor(S*k),n.height=Math.floor(D*k),B===!0&&(n.style.width=S+"px",n.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(q*k,j*k).floor()},this.setDrawingBufferSize=function(S,D,B){q=S,j=D,k=B,n.width=Math.floor(S*B),n.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,D,B,G){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,D,B,G),Re.viewport(w.copy(ye).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Ge)},this.setScissor=function(S,D,B,G){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,D,B,G),Re.scissor(W.copy(Ge).multiplyScalar(k).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){Re.setScissorTest(nt=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,D=!0,B=!0){let G=0;if(S){let O=!1;if(L!==null){const ee=L.texture.format;O=ee===yc||ee===Ec||ee===Mc}if(O){const ee=L.texture.type,ue=ee===ui||ee===fr||ee===ko||ee===jr||ee===xc||ee===Sc,_e=Ce.getClearColor(),ve=Ce.getClearAlpha(),Oe=_e.r,Le=_e.g,xe=_e.b;ue?(_[0]=Oe,_[1]=Le,_[2]=xe,_[3]=ve,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=Oe,v[1]=Le,v[2]=xe,v[3]=ve,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}D&&(G|=P.DEPTH_BUFFER_BIT),B&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),Ke.dispose(),be.dispose(),x.dispose(),F.dispose(),z.dispose(),rt.dispose(),I.dispose(),Me.dispose(),V.dispose(),V.removeEventListener("sessionstart",Gc),V.removeEventListener("sessionend",Hc),Gi.stop()};function Y(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=st.autoReset,D=me.enabled,B=me.autoUpdate,G=me.needsUpdate,O=me.type;se(),st.autoReset=S,me.enabled=D,me.autoUpdate=B,me.needsUpdate=G,me.type=O}function ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ne(S){const D=S.target;D.removeEventListener("dispose",Ne),dt(D)}function dt(S){wt(S),be.remove(S)}function wt(S){const D=be.get(S).programs;D!==void 0&&(D.forEach(function(B){Me.releaseProgram(B)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,G,O,ee){D===null&&(D=ut);const ue=O.isMesh&&O.matrixWorld.determinant()<0,_e=zd(S,D,B,G,O);Re.setMaterial(G,ue);let ve=B.index,Oe=1;if(G.wireframe===!0){if(ve=J.getWireframeAttribute(B),ve===void 0)return;Oe=2}const Le=B.drawRange,xe=B.attributes.position;let Ze=Le.start*Oe,ot=(Le.start+Le.count)*Oe;ee!==null&&(Ze=Math.max(Ze,ee.start*Oe),ot=Math.min(ot,(ee.start+ee.count)*Oe)),ve!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,ve.count)):xe!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,xe.count));const at=ot-Ze;if(at<0||at===1/0)return;rt.setup(O,G,_e,B,ve);let Bt,je=ge;if(ve!==null&&(Bt=K.get(ve),je=Xe,je.setIndex(Bt)),O.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*gt()),je.setMode(P.LINES)):je.setMode(P.TRIANGLES);else if(O.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*gt()),O.isLineSegments?je.setMode(P.LINES):O.isLineLoop?je.setMode(P.LINE_LOOP):je.setMode(P.LINE_STRIP)}else O.isPoints?je.setMode(P.POINTS):O.isSprite&&je.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,Vn=O._multiDrawCounts,Je=O._multiDrawCount,hn=ve?K.get(ve).bytesPerElement:1,_r=be.get(G).currentProgram.getUniforms();for(let zt=0;zt<Je;zt++)_r.setValue(P,"_gl_DrawID",zt),je.render(Ee[zt]/hn,Vn[zt])}else if(O.isInstancedMesh)je.renderInstances(Ze,at,O.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Vn=Math.min(B.instanceCount,Ee);je.renderInstances(Ze,at,Vn)}else je.render(Ze,at)};function et(S,D,B){S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,Qo(S,D,B),S.side=Ni,S.needsUpdate=!0,Qo(S,D,B),S.side=Nn):Qo(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),p=Ke.get(B),p.init(D),E.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==B&&S.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const _e=ee[ue];et(_e,B,O),G.add(_e)}else et(ee,B,O),G.add(ee)}),E.pop(),p=null,G},this.compileAsync=function(S,D,B=null){const G=this.compile(S,D,B);return new Promise(O=>{function ee(){if(G.forEach(function(ue){be.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){O(S);return}setTimeout(ee,10)}We.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let dn=null;function kn(S){dn&&dn(S)}function Gc(){Gi.stop()}function Hc(){Gi.start()}const Gi=new Qf;Gi.setAnimationLoop(kn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(S){dn=S,V.setAnimationLoop(S),S===null?Gi.stop():Gi.start()},V.addEventListener("sessionstart",Gc),V.addEventListener("sessionend",Hc),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,D,L),p=Ke.get(S,E.length),p.init(D),E.push(p),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Ie),Se=this.localClippingEnabled,te=Q.init(this.clippingPlanes,Se),g=pe.get(S,b.length),g.init(),b.push(g),V.enabled===!0&&V.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&da(ee,D,-1/0,y.sortObjects)}da(S,D,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(re,he),qe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,qe&&Ce.addToRenderList(g,S),this.info.render.frame++,te===!0&&Q.beginShadows();const B=p.state.shadowsArray;me.render(B,S,D),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,O=g.transmissive;if(p.setupLights(),D.isArrayCamera){const ee=D.cameras;if(O.length>0)for(let ue=0,_e=ee.length;ue<_e;ue++){const ve=ee[ue];Vc(G,O,S,ve)}qe&&Ce.render(S);for(let ue=0,_e=ee.length;ue<_e;ue++){const ve=ee[ue];kc(g,S,ve,ve.viewport)}}else O.length>0&&Vc(G,O,S,D),qe&&Ce.render(S),kc(g,S,D);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,D),rt.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],te===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function da(S,D,B,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){G&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);const ue=z.update(S),_e=S.material;_e.visible&&g.push(S,ue,_e,B,ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const ue=z.update(S),_e=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),ke.copy(ue.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(_e)){const ve=ue.groups;for(let Oe=0,Le=ve.length;Oe<Le;Oe++){const xe=ve[Oe],Ze=_e[xe.materialIndex];Ze&&Ze.visible&&g.push(S,ue,Ze,B,ke.z,xe)}}else _e.visible&&g.push(S,ue,_e,B,ke.z,null)}}const ee=S.children;for(let ue=0,_e=ee.length;ue<_e;ue++)da(ee[ue],D,B,G)}function kc(S,D,B,G){const O=S.opaque,ee=S.transmissive,ue=S.transparent;p.setupLightsView(B),te===!0&&Q.setGlobalState(y.clippingPlanes,B),G&&Re.viewport(w.copy(G)),O.length>0&&Jo(O,D,B),ee.length>0&&Jo(ee,D,B),ue.length>0&&Jo(ue,D,B),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Vc(S,D,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new dr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Xo:ui,minFilter:rr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ee=p.state.transmissionRenderTarget[G.id],ue=G.viewport||w;ee.setSize(ue.z,ue.w);const _e=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor($),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Ce.render(B);const ve=y.toneMapping;y.toneMapping=Di;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),te===!0&&Q.setGlobalState(y.clippingPlanes,G),Jo(S,B,G),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),We.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let xe=0,Ze=D.length;xe<Ze;xe++){const ot=D[xe],at=ot.object,Bt=ot.geometry,je=ot.material,Ee=ot.group;if(je.side===Nn&&at.layers.test(G.layers)){const Vn=je.side;je.side=Wt,je.needsUpdate=!0,Wc(at,B,G,Bt,je,Ee),je.side=Vn,je.needsUpdate=!0,Le=!0}}Le===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee))}y.setRenderTarget(_e),y.setClearColor($,Z),Oe!==void 0&&(G.viewport=Oe),y.toneMapping=ve}function Jo(S,D,B){const G=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ee=S.length;O<ee;O++){const ue=S[O],_e=ue.object,ve=ue.geometry,Oe=G===null?ue.material:G,Le=ue.group;_e.layers.test(B.layers)&&Wc(_e,D,B,ve,Oe,Le)}}function Wc(S,D,B,G,O,ee){S.onBeforeRender(y,D,B,G,O,ee),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,D,B,G,S,ee),O.transparent===!0&&O.side===Nn&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,y.renderBufferDirect(B,D,G,O,S,ee),O.side=Ni,O.needsUpdate=!0,y.renderBufferDirect(B,D,G,O,S,ee),O.side=Nn):y.renderBufferDirect(B,D,G,O,S,ee),S.onAfterRender(y,D,B,G,O,ee)}function Qo(S,D,B){D.isScene!==!0&&(D=ut);const G=be.get(S),O=p.state.lights,ee=p.state.shadowsArray,ue=O.state.version,_e=Me.getParameters(S,O.state,ee,D,B),ve=Me.getProgramCacheKey(_e);let Oe=G.programs;G.environment=S.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(S.isMeshStandardMaterial?F:x).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Ne),Oe=new Map,G.programs=Oe);let Le=Oe.get(ve);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===ue)return Xc(S,_e),Le}else _e.uniforms=Me.getUniforms(S),S.onBeforeCompile(_e,y),Le=Me.acquireProgram(_e,ve),Oe.set(ve,Le),G.uniforms=_e.uniforms;const xe=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=Q.uniform),Xc(S,_e),G.needsLights=qd(S),G.lightsStateVersion=ue,G.needsLights&&(xe.ambientLightColor.value=O.state.ambient,xe.lightProbe.value=O.state.probe,xe.directionalLights.value=O.state.directional,xe.directionalLightShadows.value=O.state.directionalShadow,xe.spotLights.value=O.state.spot,xe.spotLightShadows.value=O.state.spotShadow,xe.rectAreaLights.value=O.state.rectArea,xe.ltc_1.value=O.state.rectAreaLTC1,xe.ltc_2.value=O.state.rectAreaLTC2,xe.pointLights.value=O.state.point,xe.pointLightShadows.value=O.state.pointShadow,xe.hemisphereLights.value=O.state.hemi,xe.directionalShadowMap.value=O.state.directionalShadowMap,xe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xe.spotShadowMap.value=O.state.spotShadowMap,xe.spotLightMatrix.value=O.state.spotLightMatrix,xe.spotLightMap.value=O.state.spotLightMap,xe.pointShadowMap.value=O.state.pointShadowMap,xe.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function zc(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Bs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Xc(S,D){const B=be.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function zd(S,D,B,G,O){D.isScene!==!0&&(D=ut),A.resetTextureUnits();const ee=D.fog,ue=G.isMeshStandardMaterial?D.environment:null,_e=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:oo,ve=(G.isMeshStandardMaterial?F:x).get(G.envMap||ue),Oe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),xe=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let at=Di;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(at=y.toneMapping);const Bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=Bt!==void 0?Bt.length:0,Ee=be.get(G),Vn=p.state.lights;if(te===!0&&(Se===!0||S!==M)){const rn=S===M&&G.id===T;Q.setState(G,S,rn)}let Je=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Vn.state.version||Ee.outputColorSpace!==_e||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==ve||G.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==Le||Ee.morphTargets!==xe||Ee.morphNormals!==Ze||Ee.morphColors!==ot||Ee.toneMapping!==at||Ee.morphTargetsCount!==je)&&(Je=!0):(Je=!0,Ee.__version=G.version);let hn=Ee.currentProgram;Je===!0&&(hn=Qo(G,D,O));let _r=!1,zt=!1,ho=!1;const lt=hn.getUniforms(),yn=Ee.uniforms;if(Re.useProgram(hn.program)&&(_r=!0,zt=!0,ho=!0),G.id!==T&&(T=G.id,zt=!0),_r||M!==S){Re.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),ep(ae),tp(ae),lt.setValue(P,"projectionMatrix",ae)):lt.setValue(P,"projectionMatrix",S.projectionMatrix),lt.setValue(P,"viewMatrix",S.matrixWorldInverse);const di=lt.map.cameraPosition;di!==void 0&&di.setValue(P,Pe.setFromMatrixPosition(S.matrixWorld)),ze.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,zt=!0,ho=!0)}if(O.isSkinnedMesh){lt.setOptional(P,O,"bindMatrix"),lt.setOptional(P,O,"bindMatrixInverse");const rn=O.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),lt.setValue(P,"boneTexture",rn.boneTexture,A))}O.isBatchedMesh&&(lt.setOptional(P,O,"batchingTexture"),lt.setValue(P,"batchingTexture",O._matricesTexture,A),lt.setOptional(P,O,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",O._indirectTexture,A),lt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",O._colorsTexture,A));const po=B.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0)&&De.update(O,B,hn),(zt||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,lt.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=ve,yn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),zt&&(lt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Xd(yn,ho),ee&&G.fog===!0&&le.refreshFogUniforms(yn,ee),le.refreshMaterialUniforms(yn,G,k,j,p.state.transmissionRenderTarget[S.id]),Bs.upload(P,zc(Ee),yn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bs.upload(P,zc(Ee),yn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(P,"center",O.center),lt.setValue(P,"modelViewMatrix",O.modelViewMatrix),lt.setValue(P,"normalMatrix",O.normalMatrix),lt.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const rn=G.uniformsGroups;for(let di=0,hi=rn.length;di<hi;di++){const qc=rn[di];I.update(qc,hn),I.bind(qc,hn)}}return hn}function Xd(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,D,B){be.get(S.texture).__webglTexture=D,be.get(S.depthTexture).__webglTexture=B;const G=be.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const B=be.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){L=S,C=D,R=B;let G=!0,O=null,ee=!1,ue=!1;if(S){const ve=be.get(S);if(ve.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(ve.__hasExternalTextures)A.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xe=S.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&be.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ue=!0);const Le=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?O=Le[D][B]:O=Le[D],ee=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?O=be.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[B]:O=Le,w.copy(S.viewport),W.copy(S.scissor),H=S.scissorTest}else w.copy(ye).multiplyScalar(k).floor(),W.copy(Ge).multiplyScalar(k).floor(),H=nt;if(Re.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&Re.drawBuffers(S,O),Re.viewport(w),Re.scissor(W),Re.setScissorTest(H),ee){const ve=be.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,B)}else if(ue){const ve=be.get(S.texture),Oe=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.__webglTexture,B||0,Oe)}T=-1},this.readRenderTargetPixels=function(S,D,B,G,O,ee,ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){Re.bindFramebuffer(P.FRAMEBUFFER,_e);try{const ve=S.texture,Oe=ve.format,Le=ve.type;if(!ze.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&B>=0&&B<=S.height-O&&P.readPixels(D,B,G,O,Fe.convert(Oe),Fe.convert(Le),ee)}finally{const ve=L!==null?be.get(L).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,G,O,ee,ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){const ve=S.texture,Oe=ve.format,Le=ve.type;if(!ze.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-G&&B>=0&&B<=S.height-O){Re.bindFramebuffer(P.FRAMEBUFFER,_e);const xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),P.readPixels(D,B,G,O,Fe.convert(Oe),Fe.convert(Le),0);const Ze=L!==null?be.get(L).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,Ze);const ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Qh(P,ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(xe),P.deleteSync(ot),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-B),O=Math.floor(S.image.width*G),ee=Math.floor(S.image.height*G),ue=D!==null?D.x:0,_e=D!==null?D.y:0;A.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ue,_e,O,ee),Re.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,G=null,O=0){S.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],D=arguments[2],O=arguments[3]||0,B=null);let ee,ue,_e,ve,Oe,Le,xe,Ze,ot;const at=S.isCompressedTexture?S.mipmaps[O]:S.image;B!==null?(ee=B.max.x-B.min.x,ue=B.max.y-B.min.y,_e=B.isBox3?B.max.z-B.min.z:1,ve=B.min.x,Oe=B.min.y,Le=B.isBox3?B.min.z:0):(ee=at.width,ue=at.height,_e=at.depth||1,ve=0,Oe=0,Le=0),G!==null?(xe=G.x,Ze=G.y,ot=G.z):(xe=0,Ze=0,ot=0);const Bt=Fe.convert(D.format),je=Fe.convert(D.type);let Ee;D.isData3DTexture?(A.setTexture3D(D,0),Ee=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Ee=P.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Vn=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hn=P.getParameter(P.UNPACK_SKIP_PIXELS),_r=P.getParameter(P.UNPACK_SKIP_ROWS),zt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,at.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le);const ho=S.isDataArrayTexture||S.isData3DTexture,lt=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const yn=be.get(S),po=be.get(D),rn=be.get(yn.__renderTarget),di=be.get(po.__renderTarget);Re.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),Re.bindFramebuffer(P.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let hi=0;hi<_e;hi++)ho&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(S).__webglTexture,O,Le+hi),S.isDepthTexture?(lt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(D).__webglTexture,O,ot+hi),P.blitFramebuffer(ve,Oe,ee,ue,xe,Ze,ee,ue,P.DEPTH_BUFFER_BIT,P.NEAREST)):lt?P.copyTexSubImage3D(Ee,O,xe,Ze,ot+hi,ve,Oe,ee,ue):P.copyTexSubImage2D(Ee,O,xe,Ze,ot+hi,ve,Oe,ee,ue);Re.bindFramebuffer(P.READ_FRAMEBUFFER,null),Re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else lt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ee,O,xe,Ze,ot,ee,ue,_e,Bt,je,at.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,O,xe,Ze,ot,ee,ue,_e,Bt,at.data):P.texSubImage3D(Ee,O,xe,Ze,ot,ee,ue,_e,Bt,je,at):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,xe,Ze,ee,ue,Bt,je,at.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,xe,Ze,at.width,at.height,Bt,at.data):P.texSubImage2D(P.TEXTURE_2D,O,xe,Ze,ee,ue,Bt,je,at);P.pixelStorei(P.UNPACK_ROW_LENGTH,Vn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hn),P.pixelStorei(P.UNPACK_SKIP_ROWS,_r),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zt),O===0&&D.generateMipmaps&&P.generateMipmap(Ee),Re.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,G=null,O=0){return S.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,S=arguments[2],D=arguments[3],O=arguments[4]||0),Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,G,O)},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,Re.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}class wc{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=n,this.far=i}clone(){return new wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fv extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class sd extends gr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zs=new N,Xs=new N,qu=new ct,xo=new Ac,Ms=new Yo,ka=new N,Ku=new N;class dv extends St{constructor(e=new fn,n=new sd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)zs.fromBufferAttribute(n,r-1),Xs.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=zs.distanceTo(Xs);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=o,e.ray.intersectsSphere(Ms)===!1)return;qu.copy(r).invert(),xo.copy(e.ray).applyMatrix4(qu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const m=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let v=m,g=_-1;v<g;v+=u){const p=d.getX(v),b=d.getX(v+1),E=Es(this,e,xo,c,p,b);E&&n.push(E)}if(this.isLineLoop){const v=d.getX(_-1),g=d.getX(m),p=Es(this,e,xo,c,v,g);p&&n.push(p)}}else{const m=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let v=m,g=_-1;v<g;v+=u){const p=Es(this,e,xo,c,v,v+1);p&&n.push(p)}if(this.isLineLoop){const v=Es(this,e,xo,c,_-1,m);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Es(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(zs.fromBufferAttribute(s,r),Xs.fromBufferAttribute(s,o),n.distanceSqToSegment(zs,Xs,ka,Ku)>i)return;ka.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ka);if(!(c<e.near||c>e.far))return{distance:c,point:Ku.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Yu=new N,$u=new N;class hv extends dv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)Yu.fromBufferAttribute(n,r),$u.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Yu.distanceTo($u);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ad extends gr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zu=new ct,Ql=new Ac,ys=new Yo,Ts=new N;class pv extends St{constructor(e=new fn,n=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),ys.radius+=o,e.ray.intersectsSphere(ys)===!1)return;Zu.copy(r).invert(),Ql.copy(e.ray).applyMatrix4(Zu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let _=h,v=m;_<v;_++){const g=u.getX(_);Ts.fromBufferAttribute(f,g),ju(Ts,g,c,r,e,n,this)}}else{const h=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let _=h,v=m;_<v;_++)Ts.fromBufferAttribute(f,_),ju(Ts,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ju(t,e,n,i,r,o,s){const a=Ql.distanceSqToPoint(t);if(a<n){const c=new N;Ql.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class mv extends Ft{constructor(e,n,i,r,o,s,a,c,u){super(e,n,i,r,o,s,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const As=new N,bs=new N,Va=new N,Rs=new cn;class gv extends fn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(Xr*n),s=e.getIndex(),a=e.getAttribute("position"),c=s?s.count:a.count,u=[0,0,0],d=["a","b","c"],f=new Array(3),h={},m=[];for(let _=0;_<c;_+=3){s?(u[0]=s.getX(_),u[1]=s.getX(_+1),u[2]=s.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:v,b:g,c:p}=Rs;if(v.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),p.fromBufferAttribute(a,u[2]),Rs.getNormal(Va),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const E=(b+1)%3,y=f[b],U=f[E],C=Rs[d[b]],R=Rs[d[E]],L=`${y}_${U}`,T=`${U}_${y}`;T in h&&h[T]?(Va.dot(h[T].normal)<=o&&(m.push(C.x,C.y,C.z),m.push(R.x,R.y,R.z)),h[T]=null):L in h||(h[L]={index0:u[b],index1:u[E],normal:Va.clone()})}}for(const _ in h)if(h[_]){const{index0:v,index1:g}=h[_];As.fromBufferAttribute(a,v),bs.fromBufferAttribute(a,g),m.push(As.x,As.y,As.z),m.push(bs.x,bs.y,bs.z)}this.setAttribute("position",new en(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class He extends gr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cc extends St{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class _v extends Cc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Wa=new ct,Ju=new N,Qu=new N;class vv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qu),n.updateMatrixWorld(),Wa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xv extends vv{constructor(){super(new ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sv extends Cc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new xv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mv extends Cc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);let Or=null;function mt(){if(!Or){const t=window.AudioContext||window.webkitAudioContext;t&&(Or=new t)}return Or&&Or.state==="suspended"&&Or.resume(),Or}if(typeof window<"u"){const t=()=>{mt(),window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t)}function ld(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(320,e+.12),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}function Ev(t){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(300,n),i.frequency.exponentialRampToValueAtTime(750,n+.18)):(i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(200,n+.18)),r.gain.setValueAtTime(.22,n),r.gain.exponentialRampToValueAtTime(.01,n+.2),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.2)}function yv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.sampleRate*.08,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*Math.exp(-c/(n*.3));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,e),s.frequency.exponentialRampToValueAtTime(150,e+.08);const a=t.createGain();a.gain.setValueAtTime(.35,e),a.gain.exponentialRampToValueAtTime(.01,e+.08),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function ef(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(80,e+.07),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.01,e+.07),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.07)}function Tv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.exponentialRampToValueAtTime(60,e+.15),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.15),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.15)}function cd(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(450,e),n.frequency.exponentialRampToValueAtTime(120,e+.1),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.1)}function Av(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(80,e+.14),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function bv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(95,e),n.frequency.linearRampToValueAtTime(80,e+.25),n.frequency.exponentialRampToValueAtTime(50,e+.5),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}function Rv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.linearRampToValueAtTime(250,e+.08),n.frequency.linearRampToValueAtTime(360,e+.18),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.18),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.18)}function Fi(t=!0){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(260,n),i.frequency.exponentialRampToValueAtTime(420,n+.08)):(i.frequency.setValueAtTime(420,n),i.frequency.exponentialRampToValueAtTime(260,n+.08)),r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.01,n+.08),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.08)}function wv(t=1){const e=mt();if(!e)return;const n=e.currentTime,i=Math.floor(e.sampleRate*.04),r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);for(let f=0;f<i;f++)o[f]=(Math.random()*2-1)*Math.exp(-f/(i*.25));const s=e.createBufferSource();s.buffer=r;const a=e.createBiquadFilter();a.type="lowpass";let c=380,u=.06;t===3||t===8||t===9||t===13?(c=650,u=.07):t===4?(c=300,u=.05):t===5?(c=400,u=.06):(t===6||t===12||t===16)&&(c=480,u=.06),a.frequency.setValueAtTime(c,n);const d=e.createGain();d.gain.setValueAtTime(u,n),d.gain.exponentialRampToValueAtTime(1e-4,n+.04),s.connect(a),a.connect(d),d.connect(e.destination),s.start(n)}function Cv(t=1){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle";const o=t===3||t===8||t===9||t===13?280:180;i.frequency.setValueAtTime(o,n),i.frequency.exponentialRampToValueAtTime(60,n+.03),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.03),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.03)}function Iv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(880,e+.09),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.09),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.09)}function Ui(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createOscillator(),r=t.createGain();n.type="triangle",i.type="sine",n.frequency.setValueAtTime(523.25,e),n.frequency.setValueAtTime(659.25,e+.07),i.frequency.setValueAtTime(783.99,e+.07),r.gain.setValueAtTime(.25,e),r.gain.exponentialRampToValueAtTime(.01,e+.22),n.connect(r),i.connect(r),r.connect(t.destination),n.start(e),i.start(e+.07),n.stop(e+.22),i.stop(e+.22)}function Dv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(550,e),n.frequency.exponentialRampToValueAtTime(160,e+.14),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function ud(){const t=mt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.45),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*.7;const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(3200,e),s.Q.setValueAtTime(4,e);const a=t.createGain();a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.01,e+.45),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function Ov(){const t=mt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.85),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let d=0;d<n;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(n*.4));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,e),s.frequency.exponentialRampToValueAtTime(40,e+.85);const a=t.createGain();a.gain.setValueAtTime(.7,e),a.gain.exponentialRampToValueAtTime(.001,e+.85),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e);const c=t.createOscillator(),u=t.createGain();c.type="sine",c.frequency.setValueAtTime(120,e),c.frequency.exponentialRampToValueAtTime(25,e+.5),u.gain.setValueAtTime(.6,e),u.gain.exponentialRampToValueAtTime(.01,e+.5),c.connect(u),u.connect(t.destination),c.start(e),c.stop(e+.5)}function Pv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(90,e+.08),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.08)}function fd(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(240,e),n.frequency.linearRampToValueAtTime(210,e+.35);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(700,e),r.frequency.linearRampToValueAtTime(450,e+.35),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.01,e+.35),n.connect(r),r.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.35)}function Nv(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(160,e+.6),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.6),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.6)}let za=20;const tf=[261.63,293.66,329.63,392,440,523.25,587.33,659.25];function Lv(t){za-=t,za<=0&&(za=65+Math.random()*45,Uv())}function Uv(){const t=mt();if(!t)return;const e=4+Math.floor(Math.random()*3);let n=t.currentTime;for(let i=0;i<e;i++){const r=tf[Math.floor(Math.random()*tf.length)],o=1.6+Math.random()*1.2,s=t.createOscillator(),a=t.createGain();s.type="sine",s.frequency.setValueAtTime(r,n),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.04,n+.3),a.gain.exponentialRampToValueAtTime(.001,n+o),s.connect(a),a.connect(t.destination),s.start(n),s.stop(n+o),n+=.8+Math.random()*.6}}const kt={TITLE_SCREEN:"title_screen",PLAYING:"playing",PAUSED:"paused"},pt={NONE:"none",INVENTORY:"inventory",CRAFTING_TABLE:"crafting_table",FURNACE:"furnace",CHEST:"chest",RECIPE_BOOK:"recipe_book",CONTROLS:"controls",SETTINGS:"settings"};let co=kt.TITLE_SCREEN,eo=pt.NONE,Wo=null;function Fv(t){Wo=t}function Ro(){return co}function sa(t){co=t}function Bv(){return co===kt.TITLE_SCREEN}function Gv(){return co===kt.PAUSED}function dd(t){return eo===t}function Fo(){return eo!==pt.NONE}function uo(t){eo=t,document.pointerLockElement&&document.exitPointerLock()}function ri(t=null){t&&eo!==t||(eo=pt.NONE,co===kt.PLAYING&&Wo&&Wo.requestPointerLock())}function Hv(){eo=pt.NONE,co===kt.PLAYING&&Wo&&Wo.requestPointerLock()}let Gt=null,Kt=null,Gr=null,ec=!1;const yi={renderDistance:5,fov:75,mouseSensitivity:1};function kv(t){Gr=t||document.querySelector("canvas"),Fv(Gr),document.getElementById("title-screen"),document.getElementById("pause-menu"),Gt=document.getElementById("modal-controls"),Kt=document.getElementById("modal-settings"),window.startGame=nf,window.resumeGame=Xa,window.returnToMainMenu=of,window.openControls=()=>Pr(Gt),window.openSettings=()=>Pr(Kt);const e=["Cavernas 3D & Entradas Naturais!","Fornalha e Fundição de Ferro!","Armaduras, Esqueletos e Aranhas!","Mundo infinito com Biomas!","Construa e explore em 60 FPS!","Receitas reais de sobrevivência!"],n=document.getElementById("splash-text");n&&(n.textContent=e[Math.floor(Math.random()*e.length)]);const i=document.getElementById("btn-play");i&&i.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation();try{ld()}catch{}nf()});const r=document.getElementById("btn-controls");r&&r.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Gt)});const o=document.getElementById("btn-settings");o&&o.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Kt)});const s=document.getElementById("btn-close-controls");s&&s.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Gt&&(Gt.style.display="none"),ri(pt.CONTROLS)});const a=document.getElementById("btn-close-settings");a&&a.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Kt&&(Kt.style.display="none"),ri(pt.SETTINGS)});const c=document.getElementById("btn-resume");c&&c.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Xa()});const u=document.getElementById("btn-pause-controls");u&&u.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Gt)});const d=document.getElementById("btn-pause-settings")||document.getElementById("btn-pause-options");d&&d.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Kt)});const f=document.getElementById("btn-quit-menu")||document.getElementById("btn-exit-main");f&&f.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),of()});const h=document.getElementById("setting-fov"),m=document.getElementById("fov-val");h&&m&&h.addEventListener("input",E=>{yi.fov=parseInt(E.target.value,10),m.textContent=`${yi.fov}°`});const _=document.getElementById("setting-distance"),v=document.getElementById("distance-val");_&&v&&_.addEventListener("input",E=>{yi.renderDistance=parseInt(E.target.value,10),v.textContent=`${yi.renderDistance} Chunks`});const g=document.getElementById("setting-sens"),p=document.getElementById("sens-val");g&&p&&g.addEventListener("input",E=>{yi.mouseSensitivity=parseFloat(E.target.value),p.textContent=`${yi.mouseSensitivity.toFixed(1)}x`}),document.addEventListener("pointerlockchange",()=>{const E=document.pointerLockElement===(Gr||document.querySelector("canvas"));ec&&!E&&Ro()===kt.PLAYING&&!Fo()&&rf(),ec=E}),window.addEventListener("keydown",E=>{if(E.code==="Escape"){if(Gt&&Gt.style.display==="flex"){Gt.style.display="none",ri(pt.CONTROLS);return}if(Kt&&Kt.style.display==="flex"){Kt.style.display="none",ri(pt.SETTINGS);return}if(Fo()){Hv();return}Ro()===kt.PLAYING?(document.exitPointerLock(),rf()):Ro()===kt.PAUSED&&Xa()}});const b=Gr||document.querySelector("canvas");b&&b.addEventListener("click",()=>{if(Ro()===kt.PLAYING&&!Fo()&&!document.pointerLockElement)try{b.requestPointerLock()}catch{}})}function Pr(t){t&&(t.style.display="flex",uo(t===Gt?pt.CONTROLS:pt.SETTINGS))}function nf(){sa(kt.PLAYING);const t=document.getElementById("title-screen");t&&(t.style.display="none",t.style.pointerEvents="none",t.style.visibility="hidden",t.style.opacity="0");const e=document.getElementById("pause-menu");e&&(e.style.display="none");const n=document.getElementById("crosshair");n&&(n.style.display="block");const i=document.getElementById("controls-hint");i&&(i.style.display="block");const r=Gr||document.querySelector("canvas");if(r&&typeof r.requestPointerLock=="function")try{const o=r.requestPointerLock();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}}function rf(){if(Ro()===kt.TITLE_SCREEN)return;sa(kt.PAUSED);const t=document.getElementById("pause-menu");t&&(t.style.display="flex");const e=document.getElementById("crosshair");e&&(e.style.display="none");const n=document.getElementById("controls-hint");n&&(n.style.display="none")}function Xa(){sa(kt.PLAYING);const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Gt&&(Gt.style.display="none"),Kt&&(Kt.style.display="none");const e=document.getElementById("crosshair");e&&(e.style.display="block");const n=document.getElementById("controls-hint");n&&(n.style.display="block");const i=Gr||document.querySelector("canvas");if(i&&typeof i.requestPointerLock=="function")try{const r=i.requestPointerLock();r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}function of(){sa(kt.TITLE_SCREEN),ec=!1;const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Gt&&(Gt.style.display="none"),Kt&&(Kt.style.display="none");const e=document.getElementById("title-screen");e&&(e.style.display="flex",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.opacity="1");const n=document.getElementById("crosshair");n&&(n.style.display="none");const i=document.getElementById("controls-hint");i&&(i.style.display="none")}const Vv=.0022,sf=1.55;let Ri=null,tc=0,wo=-.15,nc=!1;function Wv(t,e={x:0,y:20,z:0}){return Ri=new sn(yi.fov||75,t,.05,500),Ri.rotation.order="YXZ",Ri.position.set(e.x,e.y,e.z),Ri.rotation.set(wo,tc,0),Ri}function zv(t){document.addEventListener("pointerlockchange",()=>{nc=document.pointerLockElement===t}),document.addEventListener("mousemove",e=>{if(!nc||!Ri||Math.abs(e.movementX)>250||Math.abs(e.movementY)>250)return;const n=Vv*(yi.sensitivity||1);tc-=e.movementX*n,wo-=e.movementY*n,wo=Math.max(-sf,Math.min(sf,wo)),Ri.rotation.set(wo,tc,0)})}function $o(){return Ri}function fo(){return nc}let hd=!1,ic=0,rc=null,oc=null;function pd(t){if(!hd)return;const e=Math.min((t-ic)/1e3,.1);ic=t,rc&&rc(e,t/1e3),oc&&oc(e),requestAnimationFrame(pd)}function Xv(t,e){rc=t,oc=e,hd=!0,ic=performance.now(),requestAnimationFrame(pd)}let Yt=null,Ti=null;function qv(){return Yt=new uv({antialias:!0}),Yt.domElement.id="game-canvas",Yt.setSize(window.innerWidth,window.innerHeight),Yt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Yt.setClearColor(7911912),Yt.shadowMap.enabled=!1,document.body.appendChild(Yt.domElement),window.addEventListener("resize",()=>{Yt.setSize(window.innerWidth,window.innerHeight)}),Yt}let sc=null,ac=null,Gs=null;function Kv(){return Ti=new fv,sc=new _v(8900331,5596723,.6),Ti.add(sc),ac=new Mv(16777215,.3),Ti.add(ac),Gs=new Sv(16774624,1),Gs.position.set(80,120,50),Ti.add(Gs),Ti.fog=new wc(7911912,50,160),Ti}function Yv(){return{hemiLight:sc,ambientLight:ac,dirLight:Gs}}function $v(t){Yt&&Ti&&t&&Yt.render(Ti,t)}function md(){return Yt?Yt.domElement:null}function Zv(t){window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()})}const cr=16;function bt(t){let e=t|0;return()=>(e=e*1103515245+12345&2147483647,e/2147483647)}function jv(t){const e=document.createElement("canvas");e.width=cr,e.height=cr;const n=e.getContext("2d");return t(n,cr),e}function yt(t,e,n,i,r,o){const s=bt(o);t.fillStyle=n,t.fillRect(0,0,e,e);for(let a=0;a<e;a++)for(let c=0;c<e;c++)if(s()<r){const u=Math.floor(s()*i.length);t.fillStyle=i[u],t.fillRect(c,a,1,1)}}function Jv(t,e){yt(t,e,"#5ba638",["#4f9430","#6bc043","#458528","#75cc4a"],.4,101);const n=bt(202);for(let i=0;i<2;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#f6e05e",t.fillRect(r,o,1,1)}}function Qv(t,e){yt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a"],.35,301);const n=bt(302);for(let i=0;i<5;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle=n()>.3?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<3?n()>.35&&(t.fillStyle=n()>.5?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<4&&n()>.65&&(t.fillStyle="#458528",t.fillRect(r,i,1,1))}function ex(t,e){yt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a","#584117"],.4,401);const n=bt(402);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#584117",t.fillRect(r,o,2,1)}}function aa(t,e){yt(t,e,"#828282",["#737373","#919191","#656565","#9e9e9e","#595959"],.45,501);const n=bt(502);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#505050",t.fillRect(r,o,2+Math.floor(n()*2),1)}}function tx(t,e){yt(t,e,"#e5d38a",["#dac67c","#eedd98","#cfbc6f","#f5e6a4","#c5b161"],.45,601)}function nx(t,e){yt(t,e,"#f5f7fa",["#e9ecf2","#ffffff","#dfe3ec","#edf0f7"],.35,701);const n=bt(702);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*e);t.fillStyle="#cbd5e1",t.fillRect(r,o,2,1)}}function ix(t,e){yt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,1401);const n=bt(1402);for(let i=0;i<4;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle="#f5f7fa",t.fillRect(r,i,1,1)):i<3?n()>.3&&(t.fillStyle="#e9ecf2",t.fillRect(r,i,1,1)):n()>.7&&(t.fillStyle="#dfe3ec",t.fillRect(r,i,1,1))}function rx(t,e){t.fillStyle="#888888",t.fillRect(0,0,e,e),t.fillStyle="#555555",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1);for(let i=0;i<4;i++){const r=i%2===0?0:8,o=i*4;t.fillRect(r,o,1,4),t.fillRect(r+8,o,1,4)}const n=bt(801);for(let i=0;i<e;i++)for(let r=0;r<e;r++)n()<.2&&(t.fillStyle=n()>.5?"#9e9e9e":"#737373",t.fillRect(r,i,1,1))}function ox(t,e){yt(t,e,"#6b4524",["#5a391d","#7c512c","#4e3016","#8d5c32"],.35,901);for(let n=0;n<e;n+=3)t.fillStyle="#472c14",t.fillRect(n,0,1,e)}function sx(t,e){t.fillStyle="#c5a368",t.fillRect(0,0,e,e),t.fillStyle="#6b4524",t.fillRect(0,0,e,2),t.fillRect(0,14,e,2),t.fillRect(0,0,2,e),t.fillRect(14,0,2,e);const n=7.5,i=7.5,r=[2,4,6];t.fillStyle="#9e804f";for(const o of r)for(let s=0;s<e;s++)for(let a=0;a<e;a++){const c=Math.hypot(a-n,s-i);Math.abs(c-o)<.65&&t.fillRect(a,s,1,1)}t.fillStyle="#7a6036",t.fillRect(7,7,2,2)}function ax(t,e){yt(t,e,"#3c8524",["#2f6d1b","#4fa631","#245614","#5dbd3c","#1b400e"],.5,1001);const n=bt(1002);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1b400e",t.fillRect(r,o,1,1)}}function lx(t,e){aa(t,e);const n=bt(1101);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#222222",t.fillRect(r,o,2,2),t.fillStyle="#111111",t.fillRect(r+1,o+1,1,1)}}function cx(t,e){aa(t,e);const n=bt(1201);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#d4a373",t.fillRect(r,o,2,2),t.fillStyle="#faedcd",t.fillRect(r,o,1,1)}}function ux(t,e){yt(t,e,"#2c75d8",["#2565bf","#3b86e8","#1e52a0","#4a95f5"],.4,1301);const n=bt(1302);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#8bc3f7",t.fillRect(r,o,3,1)}}function fx(t,e){yt(t,e,"#15803d",["#166534","#14532d","#22c55e"],.4,1501),t.fillStyle="#14532d",t.fillRect(7,7,2,2)}function dx(t,e){yt(t,e,"#15803d",["#166534","#15803d","#22c55e","#14532d"],.35,1601);const n=bt(1602);for(let i=0;i<e;i+=4)t.fillStyle="#14532d",t.fillRect(i,0,1,e);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#fef08a",t.fillRect(r,o,1,1)}}function Zo(t,e){yt(t,e,"#b45309",["#92400e","#78350f","#d97706","#a16207"],.35,1701),t.fillStyle="#451a03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1),t.fillRect(5,0,1,3),t.fillRect(11,4,1,3),t.fillRect(4,8,1,3),t.fillRect(12,12,1,3)}function la(t,e){yt(t,e,"#64748b",["#475569","#334155","#94a3b8","#1e293b"],.45,1801);const n=bt(1802);t.fillStyle="#1e293b";for(let i=0;i<5;i++){const r=Math.floor(n()*(e-4)),o=Math.floor(n()*(e-4));t.fillRect(r,o,3,2)}}function hx(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,7,2,9),t.fillRect(5,11,2,2),t.fillRect(9,9,2,2),t.fillStyle="#dc2626",t.fillRect(6,3,4,4),t.fillStyle="#ef4444",t.fillRect(7,2,2,1),t.fillRect(5,4,1,2),t.fillRect(10,4,1,2),t.fillStyle="#450a0a",t.fillRect(7,4,2,2)}function px(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,6,2,10),t.fillRect(5,10,2,2),t.fillRect(9,12,2,2),t.fillStyle="#eab308",t.fillRect(6,2,4,4),t.fillStyle="#facc15",t.fillRect(7,1,2,1),t.fillRect(5,3,1,2),t.fillRect(10,3,1,2),t.fillStyle="#ca8a04",t.fillRect(7,3,2,2)}function mx(t,e){Zo(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(2.5,2.5,11,11),t.beginPath(),t.moveTo(6.5,2.5),t.lineTo(6.5,13.5),t.moveTo(10.5,2.5),t.lineTo(10.5,13.5),t.moveTo(2.5,6.5),t.lineTo(13.5,6.5),t.moveTo(2.5,10.5),t.lineTo(13.5,10.5),t.stroke(),t.fillStyle="#fef08a",t.fillRect(3,3,1,1),t.fillRect(12,3,1,1),t.fillRect(3,12,1,1),t.fillRect(12,12,1,1)}function gx(t,e){Zo(t,e),t.fillStyle="#1e293b",t.fillRect(3,4,3,8),t.fillStyle="#94a3b8",t.fillRect(3,4,2,6),t.fillStyle="#78350f",t.fillRect(4,9,1,3),t.fillStyle="#cbd5e1",t.fillRect(10,5,2,2),t.fillStyle="#78350f",t.fillRect(9,7,1,4),t.fillRect(12,7,1,4)}function _x(t,e){t.clearRect(0,0,e,e),t.fillStyle="#78350f",t.fillRect(7,6,2,10),t.fillStyle="#451a03",t.fillRect(7,6,1,10),t.fillStyle="#f97316",t.fillRect(6,2,4,4),t.fillStyle="#fef08a",t.fillRect(7,3,2,2),t.fillStyle="#ea580c",t.fillRect(7,1,2,1)}function vx(t,e){la(t,e),t.strokeStyle="#1e293b",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function xx(t,e){la(t,e),t.fillStyle="#0f172a",t.fillRect(4,7,8,7),t.fillStyle="#334155",t.fillRect(5,10,6,1),t.fillRect(5,12,6,1)}function Sx(t,e){la(t,e),t.fillStyle="#f97316",t.fillRect(4,7,8,7),t.fillStyle="#fef08a",t.fillRect(5,9,6,4),t.fillStyle="#ef4444",t.fillRect(6,11,4,2)}function Mx(t,e){Zo(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function Ex(t,e){Zo(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13),t.fillStyle="#cbd5e1",t.fillRect(7,6,2,4),t.fillStyle="#475569",t.fillRect(7,8,2,1)}function yx(t,e){yt(t,e,"#3b1d0c",["#2e1507","#45220e","#230f04","#4d2812"],.4,2101),t.fillStyle="#1c0b03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1)}function Tx(t,e){yt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,2201),t.fillStyle="#3b1d0c",t.fillRect(0,0,e,3),t.fillStyle="#230f04",t.fillRect(0,2,e,1)}function Ax(t,e){t.clearRect(0,0,e,e),t.fillStyle="#65a30d";for(let n=2;n<e;n+=3)t.fillRect(n,12,1,4),t.fillRect(n-1,11,1,2)}function bx(t,e){t.clearRect(0,0,e,e),t.fillStyle="#84cc16";for(let n=1;n<e;n+=3)t.fillRect(n,6,2,10),t.fillStyle="#ca8a04",t.fillRect(n,6,2,3),t.fillStyle="#84cc16"}function Rx(t,e){t.clearRect(0,0,e,e);for(let n=1;n<e;n+=2)t.fillStyle="#ca8a04",t.fillRect(n,4,1,12),t.fillStyle="#eab308",t.fillRect(n-(n>1?1:0),1,2,5),t.fillStyle="#fef08a",t.fillRect(n,2,1,3)}function wx(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#475569",t.beginPath(),t.arc(8,8,4,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.fillRect(7,7,2,2)}function Cx(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#f8fafc",t.fillRect(0,5,e,6),t.fillStyle="#0f172a",t.fillRect(1,6,4,1),t.fillRect(2,7,2,3),t.fillRect(6,6,1,4),t.fillRect(7,7,1,2),t.fillRect(8,6,1,4),t.fillRect(10,6,4,1),t.fillRect(11,7,2,3)}function Ix(t,e){t.fillStyle="#b91c1c",t.fillRect(0,0,e,e),t.fillStyle="#7f1d1d",t.fillRect(3,3,10,10),t.fillStyle="#450a0a",t.fillRect(7,7,2,2)}function Dx(t,e){yt(t,e,"#ea580c",["#f97316","#c2410c","#facc15","#b45309","#7c2d12"],.45,2301);const n=bt(2302);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*(e-2));t.fillStyle="#fef08a",t.fillRect(r,o,3,2),t.fillStyle="#ea580c",t.fillRect(r+1,o,1,1)}}function Ox(t,e){aa(t,e);const n=bt(2401);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#06b6d4",t.fillRect(r,o,2,2),t.fillStyle="#67e8f9",t.fillRect(r,o,1,1),t.fillStyle="#e0f2fe",t.fillRect(r+1,o+1,1,1)}}function Px(t,e){yt(t,e,"#0f172a",["#1e1b4b","#020617","#312e81","#4c1d95","#1e293b"],.45,2501);const n=bt(2502);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-2)),o=Math.floor(n()*(e-2));t.fillStyle="#6366f1",t.fillRect(r,o,1,2),t.fillStyle="#a855f7",t.fillRect(r+1,o+1,1,1)}}function Nx(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#b91c1c",t.fillRect(1,6,e-2,e-7),t.fillStyle="#f8fafc",t.fillRect(2,1,12,4),t.fillStyle="#cbd5e1",t.fillRect(2,4,12,1)}function Lx(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,6),t.fillStyle="#b91c1c",t.fillRect(0,5,e,1),t.fillStyle="#78350f",t.fillRect(0,6,e,10),t.fillStyle="#451a03",t.fillRect(2,9,e-4,7)}function Ux(t,e){yt(t,e,"#f8fafc",["#f1f5f9","#e2e8f0","#cbd5e1","#ffffff"],.35,2601);const n=bt(2602);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#e2e8f0",t.fillRect(r,o,1,1)}}const Fx=[{name:"grass_top",draw:Jv},{name:"grass_side",draw:Qv},{name:"dirt",draw:ex},{name:"stone",draw:aa},{name:"sand",draw:tx},{name:"snow",draw:nx},{name:"wood_log",draw:ox},{name:"wood_log_top",draw:sx},{name:"leaves",draw:ax},{name:"coal_ore",draw:lx},{name:"iron_ore",draw:cx},{name:"water",draw:ux},{name:"stone_bricks",draw:rx},{name:"snow_side",draw:ix},{name:"cactus_top",draw:fx},{name:"cactus_side",draw:dx},{name:"wood_planks",draw:Zo},{name:"cobblestone",draw:la},{name:"flower_red",draw:hx},{name:"flower_yellow",draw:px},{name:"crafting_table_top",draw:mx},{name:"crafting_table_side",draw:gx},{name:"torch",draw:_x},{name:"furnace_side",draw:vx},{name:"furnace_front",draw:xx},{name:"furnace_front_lit",draw:Sx},{name:"chest_top",draw:Mx},{name:"chest_side",draw:Ex},{name:"farmland_top",draw:yx},{name:"farmland_side",draw:Tx},{name:"wheat_stage1",draw:Ax},{name:"wheat_stage2",draw:bx},{name:"wheat_stage3",draw:Rx},{name:"tnt_top",draw:wx},{name:"tnt_side",draw:Cx},{name:"tnt_bottom",draw:Ix},{name:"lava",draw:Dx},{name:"diamond_ore",draw:Ox},{name:"obsidian",draw:Px},{name:"bed_top",draw:Nx},{name:"bed_side",draw:Lx},{name:"wool",draw:Ux}];function gd(){return Fx.map(t=>jv(t.draw))}const or=4,lc=16,af=or*cr,lf=lc*cr;let Mi=null;function Bx(){const t=gd(),e=document.createElement("canvas");e.width=af,e.height=lf;const n=e.getContext("2d");return n.fillStyle="#000000",n.fillRect(0,0,af,lf),t.forEach((i,r)=>{const o=r%or,s=Math.floor(r/or),a=o*cr,c=s*cr;n.drawImage(i,a,c)}),Mi=new mv(e),Mi.magFilter=Qt,Mi.minFilter=Qt,Mi.generateMipmaps=!1,Mi.colorSpace=$t,Mi.needsUpdate=!0,Mi}function Ic(t){const e=t%or,n=Math.floor(t/or),i=5e-4,r=e/or+i,o=(e+1)/or-i,s=1-n/lc-i,a=1-(n+1)/lc+i;return{uMin:r,uMax:o,vMin:a,vMax:s}}function ca(){return Mi}const l={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD_LOG:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,WATER:10,CACTUS:11,WOOD_PLANKS:12,COBBLESTONE:13,FLOWER_RED:14,FLOWER_YELLOW:15,CRAFTING_TABLE:16,TORCH:17,FURNACE:18,FURNACE_LIT:19,CHEST:20,FARMLAND:21,WHEAT_STAGE_1:22,WHEAT_STAGE_2:23,WHEAT_STAGE_3:24,TNT:25,LAVA:26,DIAMOND_ORE:27,OBSIDIAN:28,BED:29,WOOL:30,IRON_SWORD:101,IRON_PICKAXE:102,PORKCHOP:103,ROTTEN_FLESH:104,STICK:105,WOODEN_SWORD:106,WOODEN_PICKAXE:107,STONE_SWORD:108,STONE_PICKAXE:109,IRON_INGOT:110,COOKED_PORKCHOP:111,IRON_HELMET:112,IRON_CHESTPLATE:113,IRON_LEGGINGS:114,IRON_BOOTS:115,ARROW:116,BONE:117,STRING:118,SPIDER_EYE:119,BOW:120,WOODEN_HOE:121,STONE_HOE:122,IRON_HOE:123,WHEAT_SEEDS:124,WHEAT:125,BREAD:126,GUNPOWDER:127,DIAMOND:128,DIAMOND_SWORD:129,DIAMOND_PICKAXE:130,DIAMOND_HELMET:131,DIAMOND_CHESTPLATE:132,DIAMOND_LEGGINGS:133,DIAMOND_BOOTS:134,MUTTON:135,COOKED_MUTTON:136},hr={[l.GRASS]:"Grama",[l.DIRT]:"Terra",[l.STONE]:"Pedra",[l.SAND]:"Areia",[l.SNOW]:"Neve",[l.WOOD_LOG]:"Tronco de Carvalho",[l.LEAVES]:"Folhas",[l.COAL_ORE]:"Minério de Carvão",[l.IRON_ORE]:"Minério de Ferro",[l.WATER]:"Balde de Água",[l.CACTUS]:"Cacto",[l.WOOD_PLANKS]:"Tábuas de Madeira",[l.COBBLESTONE]:"Pedregulho",[l.FLOWER_RED]:"Flor Vermelha (Papoula)",[l.FLOWER_YELLOW]:"Flor Amarela (Dente-de-Leão)",[l.CRAFTING_TABLE]:"Bancada de Trabalho",[l.TORCH]:"Tocha",[l.FURNACE]:"Fornalha",[l.FURNACE_LIT]:"Fornalha (Acesa)",[l.CHEST]:"Baú de Madeira",[l.FARMLAND]:"Terra Arada",[l.WHEAT_STAGE_1]:"Brotos de Trigo",[l.WHEAT_STAGE_2]:"Trigo em Crescimento",[l.WHEAT_STAGE_3]:"Trigo Maduro",[l.TNT]:"Bloco de TNT",[l.LAVA]:"Balde de Lava",[l.DIAMOND_ORE]:"Minério de Diamante",[l.OBSIDIAN]:"Bloco de Obsidiana",[l.BED]:"Cama Confortável",[l.WOOL]:"Bloco de Lã Branca",[l.IRON_SWORD]:"Espada de Ferro",[l.IRON_PICKAXE]:"Picareta de Ferro",[l.PORKCHOP]:"Costela de Porco Crua",[l.ROTTEN_FLESH]:"Carne Podre",[l.STICK]:"Graveto",[l.WOODEN_SWORD]:"Espada de Madeira",[l.WOODEN_PICKAXE]:"Picareta de Madeira",[l.STONE_SWORD]:"Espada de Pedra",[l.STONE_PICKAXE]:"Picareta de Pedra",[l.IRON_INGOT]:"Barra de Ferro",[l.COOKED_PORKCHOP]:"Bife de Porco Assado",[l.IRON_HELMET]:"Capacete de Ferro",[l.IRON_CHESTPLATE]:"Peitoral de Ferro",[l.IRON_LEGGINGS]:"Calças de Ferro",[l.IRON_BOOTS]:"Botas de Ferro",[l.ARROW]:"Flecha",[l.BONE]:"Osso",[l.STRING]:"Linha de Teia",[l.SPIDER_EYE]:"Olho de Aranha",[l.BOW]:"Arco e Flecha",[l.WOODEN_HOE]:"Enxada de Madeira",[l.STONE_HOE]:"Enxada de Pedra",[l.IRON_HOE]:"Enxada de Ferro",[l.WHEAT_SEEDS]:"Sementes de Trigo",[l.WHEAT]:"Trigo",[l.BREAD]:"Pão Dourado",[l.GUNPOWDER]:"Pólvora",[l.DIAMOND]:"Gema de Diamante",[l.DIAMOND_SWORD]:"Espada de Diamante",[l.DIAMOND_PICKAXE]:"Picareta de Diamante",[l.DIAMOND_HELMET]:"Capacete de Diamante",[l.DIAMOND_CHESTPLATE]:"Peitoral de Diamante",[l.DIAMOND_LEGGINGS]:"Calças de Diamante",[l.DIAMOND_BOOTS]:"Botas de Diamante",[l.MUTTON]:"Carneiro Cru",[l.COOKED_MUTTON]:"Carneiro Assado"},ua={[l.GRASS]:{top:0,side:1,bottom:2},[l.DIRT]:{top:2,side:2,bottom:2},[l.STONE]:{top:3,side:3,bottom:3},[l.SAND]:{top:4,side:4,bottom:4},[l.SNOW]:{top:5,side:13,bottom:2},[l.WOOD_LOG]:{top:7,side:6,bottom:7},[l.LEAVES]:{top:8,side:8,bottom:8},[l.COAL_ORE]:{top:9,side:9,bottom:9},[l.IRON_ORE]:{top:10,side:10,bottom:10},[l.WATER]:{top:11,side:11,bottom:11},[l.CACTUS]:{top:14,side:15,bottom:14},[l.WOOD_PLANKS]:{top:16,side:16,bottom:16},[l.COBBLESTONE]:{top:17,side:17,bottom:17},[l.FLOWER_RED]:{top:18,side:18,bottom:18},[l.FLOWER_YELLOW]:{top:19,side:19,bottom:19},[l.CRAFTING_TABLE]:{top:20,side:21,bottom:16},[l.TORCH]:{top:22,side:22,bottom:22},[l.FURNACE]:{top:3,side:23,bottom:3},[l.FURNACE_LIT]:{top:3,side:25,bottom:3},[l.CHEST]:{top:26,side:27,bottom:16},[l.FARMLAND]:{top:28,side:29,bottom:2},[l.WHEAT_STAGE_1]:{top:30,side:30,bottom:30},[l.WHEAT_STAGE_2]:{top:31,side:31,bottom:31},[l.WHEAT_STAGE_3]:{top:32,side:32,bottom:32},[l.TNT]:{top:33,side:34,bottom:35},[l.LAVA]:{top:36,side:36,bottom:36},[l.DIAMOND_ORE]:{top:37,side:37,bottom:37},[l.OBSIDIAN]:{top:38,side:38,bottom:38},[l.BED]:{top:39,side:40,bottom:16},[l.WOOL]:{top:41,side:41,bottom:41}};function Dc(t){return t>l.AIR&&t<100&&t!==l.WATER&&t!==l.LAVA&&t!==l.FLOWER_RED&&t!==l.FLOWER_YELLOW&&t!==l.TORCH&&t!==l.WHEAT_STAGE_1&&t!==l.WHEAT_STAGE_2&&t!==l.WHEAT_STAGE_3}function Gx(t){return t>=l.GRASS&&t<100}function _d(t){return t===l.DIAMOND_SWORD||t===l.IRON_SWORD||t===l.STONE_SWORD||t===l.WOODEN_SWORD||t===l.BOW}function Hx(t){return t===l.IRON_HOE||t===l.STONE_HOE||t===l.WOODEN_HOE}function kx(t){return t===l.PORKCHOP||t===l.COOKED_PORKCHOP||t===l.MUTTON||t===l.COOKED_MUTTON||t===l.ROTTEN_FLESH||t===l.BREAD}function Vx(t){return t===l.IRON_HELMET||t===l.IRON_CHESTPLATE||t===l.IRON_LEGGINGS||t===l.IRON_BOOTS||t===l.DIAMOND_HELMET||t===l.DIAMOND_CHESTPLATE||t===l.DIAMOND_LEGGINGS||t===l.DIAMOND_BOOTS}function Wx(t){switch(t){case l.DIAMOND_HELMET:return 3;case l.DIAMOND_CHESTPLATE:return 8;case l.DIAMOND_LEGGINGS:return 6;case l.DIAMOND_BOOTS:return 3;case l.IRON_HELMET:return 2;case l.IRON_CHESTPLATE:return 6;case l.IRON_LEGGINGS:return 5;case l.IRON_BOOTS:return 2;default:return 0}}function zx(t){switch(t){case l.COOKED_PORKCHOP:return 8;case l.COOKED_MUTTON:return 6;case l.BREAD:return 5;case l.PORKCHOP:return 3;case l.MUTTON:return 2;case l.ROTTEN_FLESH:return 1;default:return 0}}function Xx(t){return t===l.AIR||t===l.WATER||t===l.LAVA||t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.TORCH||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3||t>=100}function qx(t){switch(t){case l.LEAVES:case l.FLOWER_RED:case l.FLOWER_YELLOW:case l.WHEAT_STAGE_1:case l.WHEAT_STAGE_2:case l.WHEAT_STAGE_3:return .15;case l.DIRT:case l.GRASS:case l.SAND:case l.SNOW:case l.FARMLAND:return .55;case l.TNT:case l.BED:case l.WOOL:return .4;case l.WOOD_LOG:case l.WOOD_PLANKS:case l.CRAFTING_TABLE:case l.CHEST:case l.CACTUS:return 1.4;case l.STONE:case l.COBBLESTONE:case l.FURNACE:case l.FURNACE_LIT:return 2.5;case l.COAL_ORE:case l.IRON_ORE:return 3.5;case l.DIAMOND_ORE:return 4.5;case l.OBSIDIAN:return 9;case l.TORCH:return .05;default:return 1}}function Kx(t,e){const n=e===l.DIAMOND_PICKAXE,i=e===l.IRON_PICKAXE,r=e===l.STONE_PICKAXE,o=e===l.WOODEN_PICKAXE,s=e===l.DIAMOND_SWORD,a=e===l.IRON_SWORD,c=e===l.STONE_SWORD,u=e===l.WOODEN_SWORD;return t===l.OBSIDIAN?n?4:.2:t===l.DIAMOND_ORE?n?8:i?6:.4:t===l.STONE||t===l.COBBLESTONE||t===l.COAL_ORE||t===l.IRON_ORE||t===l.FURNACE||t===l.FURNACE_LIT?n?9.5:i?6.5:r?4.2:o?2.6:.65:t===l.LEAVES||t===l.WOOL||t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3?s?8.5:a||c||u?6:2:t===l.WOOD_LOG||t===l.WOOD_PLANKS||t===l.CRAFTING_TABLE||t===l.CHEST||t===l.BED?n?2.2:i||r||o?1.6:1:1}function vd(t){switch(t){case l.STONE:return l.COBBLESTONE;case l.GRASS:return l.DIRT;case l.COAL_ORE:return l.COAL_ORE;case l.IRON_ORE:return l.IRON_ORE;case l.DIAMOND_ORE:return l.DIAMOND;case l.OBSIDIAN:return l.OBSIDIAN;case l.FURNACE:case l.FURNACE_LIT:return l.FURNACE;case l.FARMLAND:return l.DIRT;case l.WHEAT_STAGE_3:return l.WHEAT;case l.WHEAT_STAGE_1:case l.WHEAT_STAGE_2:return l.WHEAT_SEEDS;case l.LEAVES:return Math.random()<.35?l.LEAVES:0;case l.TNT:return l.TNT;case l.BED:return l.BED;case l.WOOL:return l.WOOL;default:return t}}const Te=16,ft=64,Yx=[{name:"top",dir:[0,1,0],colorKey:"top",vertices:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"bottom",dir:[0,-1,0],colorKey:"bottom",vertices:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"north",dir:[0,0,-1],colorKey:"side",vertices:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"south",dir:[0,0,1],colorKey:"side",vertices:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"east",dir:[1,0,0],colorKey:"side",vertices:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"west",dir:[-1,0,0],colorKey:"side",vertices:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]}];let qa=null,Ka=null;function $x(){return qa||(qa=new He({map:ca()})),qa}function Zx(){return Ka||(Ka=new He({map:ca(),transparent:!0,opacity:.65,side:Nn,depthWrite:!1})),Ka}class jx{constructor(e=0,n=0,i=0){this.cx=e,this.cy=n,this.cz=i,this.blocks=new Uint8Array(Te*Te*ft),this.mesh=null}_index(e,n,i){return e+i*Te+n*Te*Te}getBlock(e,n,i){return e<0||e>=Te||n<0||n>=ft||i<0||i>=Te?l.AIR:this.blocks[this._index(e,n,i)]}setBlock(e,n,i,r){e<0||e>=Te||n<0||n>=ft||i<0||i>=Te||(this.blocks[this._index(e,n,i)]=r)}buildMesh(e){const n=[],i=[],r=[],o=[],s=[],a=[],c=[],u=[];let d=0,f=0;const h=this.cx*Te,m=this.cy*ft,_=this.cz*Te;for(let p=0;p<ft;p++)for(let b=0;b<Te;b++)for(let E=0;E<Te;E++){const y=this.getBlock(E,p,b);if(y===l.AIR)continue;const U=y===l.WATER,C=ua[y];if(C)for(const R of Yx){const L=E+R.dir[0],T=p+R.dir[1],M=b+R.dir[2];let w;if(L>=0&&L<Te&&T>=0&&T<ft&&M>=0&&M<Te?w=this.getBlock(L,T,M):e?w=e(h+L,m+T,_+M):w=l.AIR,U){if(w!==l.AIR)continue}else if(!Xx(w))continue;const W=C[R.colorKey],H=Ic(W),$=U?s:n,Z=U?a:i,q=U?c:r,j=U?u:o,k=U?f:d;for(let re=0;re<4;re++){const he=R.vertices[re];$.push(E+he[0],p+he[1],b+he[2]),Z.push(R.dir[0],R.dir[1],R.dir[2]);const ye=R.localUVs[re][0],Ge=R.localUVs[re][1];q.push(H.uMin+ye*(H.uMax-H.uMin),H.vMin+Ge*(H.vMax-H.vMin))}j.push(k,k+1,k+2,k,k+2,k+3),U?f+=4:d+=4}}let v=this._makeMesh(n,i,r,o,$x());v.position.set(h,m,_),this.mesh=v;let g=null;return s.length>0&&(g=this._makeMesh(s,a,c,u,Zx()),g.position.set(h,m,_),g.renderOrder=1),{solidMesh:v,waterMesh:g}}_makeMesh(e,n,i,r,o){const s=new fn;return s.setAttribute("position",new en(e,3)),s.setAttribute("normal",new en(n,3)),s.setAttribute("uv",new en(i,2)),s.setIndex(r),new ie(s,o)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null)}}const vn=new Map,qs=new Map,Ks=new Map,Jt=18,Ci=5,Jx=7;let cf=NaN,uf=NaN;const Ya=[];function Jn(t,e){let n=t*374761393+e*668265263+1234567|0;return n=(n^n>>13)*1274126177|0,(n&2147483647)/2147483647}function Qx(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,o=e-i,s=r*r*(3-2*r),a=o*o*(3-2*o),c=Jn(n,i),u=Jn(n+1,i),d=Jn(n,i+1),f=Jn(n+1,i+1),h=c*(1-s)+u*s,m=d*(1-s)+f*s;return h*(1-a)+m*a}function Kr(t,e,n=4,i=.5,r=2){let o=0,s=1,a=1,c=0;for(let u=0;u<n;u++)o+=Qx(t*s,e*s)*a,c+=a,a*=i,s*=r;return o/c}const it={OCEAN:"ocean",PLAINS:"plains",FOREST:"forest",DESERT:"desert",SNOWY_MOUNTAINS:"snowy_mountains"};function to(t,e){const n=Kr(t*.0025,e*.0025,3);if(n<.32)return it.OCEAN;const i=Kr(t*.0035+150,e*.0035+150,3),r=Kr(t*.004+300,e*.004+300,3);return n>.58&&i<.38?it.SNOWY_MOUNTAINS:i>.62&&r<.48?it.DESERT:r>.52?it.FOREST:it.PLAINS}function si(t,e){const n=to(t,e),i=Kr(t*.025,e*.025,3);switch(n){case it.OCEAN:{const r=Kr(t*.01,e*.01,2),o=Jt-2-r*10+i*3;return Math.max(3,Math.min(ft-6,Math.floor(o)))}case it.DESERT:{const o=21+(Math.sin(t*.03+e*.015)*4+Math.cos(e*.03)*3)+i*2.5;return Math.max(Jt+1,Math.min(ft-6,Math.floor(o)))}case it.SNOWY_MOUNTAINS:{const r=Kr(t*.015,e*.015,4),o=28+Math.pow(r,1.8)*32+i*4;return Math.max(24,Math.min(ft-4,Math.floor(o)))}case it.FOREST:{const o=23+(Math.sin(t*.022)*5+Math.cos(e*.028)*4+Math.sin((t-e)*.035)*2.5)+i*3;return Math.max(Jt+1,Math.min(ft-6,Math.floor(o)))}case it.PLAINS:default:{const o=22+(Math.sin(t*.02)*4+Math.cos(e*.025)*4+Math.sin((t+e)*.04)*2)+i*2.5;return Math.max(Jt+1,Math.min(ft-6,Math.floor(o)))}}}function ff(t,e,n,i,r){for(let s=i;s<i+r;s++)s<ft&&t.setBlock(e,s,n,l.WOOD_LOG);const o=i+r-1;for(let s=0;s<3;s++){const a=s<2?2:1;for(let c=-a;c<=a;c++)for(let u=-a;u<=a;u++){if(Math.abs(c)===a&&Math.abs(u)===a&&s<2)continue;const d=e+c,f=o+s,h=n+u;d>=0&&d<Te&&f>=0&&f<ft&&h>=0&&h<Te&&t.getBlock(d,f,h)===l.AIR&&t.setBlock(d,f,h,l.LEAVES)}}}function eS(t,e,n,i,r){for(let s=i;s<i+r;s++)s<ft&&t.setBlock(e,s,n,l.WOOD_LOG);const o=i+r;for(let s=i+2;s<=o+1;s++){const c=(o+1-s)%2===0?2:1;for(let u=-c;u<=c;u++)for(let d=-c;d<=c;d++){if(Math.abs(u)===c&&Math.abs(d)===c&&c>1)continue;const f=e+u,h=s,m=n+d;f>=0&&f<Te&&h>=0&&h<ft&&m>=0&&m<Te&&t.getBlock(f,h,m)===l.AIR&&t.setBlock(f,h,m,l.LEAVES)}}}function tS(t,e,n,i,r){for(let o=i;o<i+r;o++)o<ft&&t.getBlock(e,o,n)===l.AIR&&t.setBlock(e,o,n,l.CACTUS)}function $a(t,e,n,i,r){e>=0&&e<Te&&i>=0&&i<Te&&n<ft&&t.getBlock(e,n,i)===l.AIR&&t.setBlock(e,n,i,r)}function Si(t,e,n){let i=t*374761393+e*668265263+n*982451653+1234567|0;return i=(i^i>>13)*1274126177|0,(i&2147483647)/2147483647}function df(t,e,n){const i=Math.floor(t),r=Math.floor(e),o=Math.floor(n),s=t-i,a=e-r,c=n-o,u=s*s*(3-2*s),d=a*a*(3-2*a),f=c*c*(3-2*c),h=Si(i,r,o),m=Si(i+1,r,o),_=Si(i,r+1,o),v=Si(i+1,r+1,o),g=Si(i,r,o+1),p=Si(i+1,r,o+1),b=Si(i,r+1,o+1),E=Si(i+1,r+1,o+1),y=h*(1-u)+m*u,U=_*(1-u)+v*u,C=g*(1-u)+p*u,R=b*(1-u)+E*u,L=y*(1-d)+U*d,T=C*(1-d)+R*d;return L*(1-f)+T*f}function xd(t,e,n,i){if(e<2||e>i||i<=Jt+1&&e>=i-2)return!1;const r=df(t*.045,e*.075,n*.045)-.5,o=df(t*.045+137,e*.075+137,n*.045+137)-.5;return r*r+o*o<.022}function Sd(t,e){const n=new jx(t,0,e),i=t*Te,r=e*Te;for(let o=0;o<Te;o++)for(let s=0;s<Te;s++){const a=i+s,c=r+o,u=si(a,c),d=to(a,c);for(let f=0;f<=u;f++){let h;f===0||f<u-4?h=l.STONE:f<u?d===it.DESERT||d===it.OCEAN&&u<=Jt+1?h=l.SAND:h=l.DIRT:d===it.DESERT?h=l.SAND:d===it.SNOWY_MOUNTAINS?h=u>=36?l.SNOW:l.GRASS:d===it.OCEAN||u<=Jt+1?h=l.SAND:h=l.GRASS,f>=2&&xd(a,f,c,u)&&(f<=8?h=l.LAVA:f<=Jt-8?h=l.WATER:h=l.AIR),n.setBlock(s,f,o,h)}for(let f=u+1;f<=Jt;f++)n.getBlock(s,f,o)===l.AIR&&n.setBlock(s,f,o,l.WATER)}for(let o=1;o<Te-1;o++)for(let s=1;s<Te-1;s++){const a=i+s,c=r+o,u=si(a,c),d=to(a,c),f=n.getBlock(s,u,o),h=Jn(a,c);if(u>Jt){if(d===it.PLAINS&&f===l.GRASS)if(h<.025&&s>=2&&s<Te-2&&o>=2&&o<Te-2){const m=4+Math.floor(Jn(a+555,c+777)*3);u+m+4<ft&&ff(n,s,o,u+1,m)}else h>.94&&h<.97?$a(n,s,u+1,o,l.FLOWER_RED):h>=.97&&$a(n,s,u+1,o,l.FLOWER_YELLOW);else if(d===it.FOREST&&f===l.GRASS)if(h<.085&&s>=2&&s<Te-2&&o>=2&&o<Te-2){const m=4+Math.floor(Jn(a+444,c+666)*4);u+m+4<ft&&ff(n,s,o,u+1,m)}else h>.96&&$a(n,s,u+1,o,l.FLOWER_RED);else if(d===it.DESERT&&f===l.SAND){if(h<.028){const m=2+(h>.015?1:0);tS(n,s,o,u+1,m)}}else if(d===it.SNOWY_MOUNTAINS&&(f===l.GRASS||f===l.SNOW)&&h<.035&&s>=2&&s<Te-2&&o>=2&&o<Te-2){const m=5+Math.floor(Jn(a+333,c+888)*4);u+m+4<ft&&eS(n,s,o,u+1,m)}}}for(let o=0;o<Te;o++)for(let s=0;s<Te;s++){const a=i+s,c=r+o,u=si(a,c);for(let d=1;d<u-3;d++)if(n.getBlock(s,d,o)===l.STONE){const f=Jn(a*31+d*97,c*53+d*13);d<=16&&f>.992?n.setBlock(s,d,o,l.DIAMOND_ORE):f<.018?n.setBlock(s,d,o,l.COAL_ORE):f>.982&&n.setBlock(s,d,o,l.IRON_ORE)}}return n}function Vt(t,e,n){if(e<0||e>=ft)return l.AIR;const i=Math.floor(t/Te),r=Math.floor(n/Te),o=`${i},0,${r}`,s=vn.get(o);if(s){const c=(t%Te+Te)%Te,u=(n%Te+Te)%Te;return s.getBlock(c,e,u)}const a=si(t,n);if(e>a)return e<=Jt?l.WATER:l.AIR;if(e>=2&&xd(t,e,n,a))return e<=8?l.LAVA:e<=Jt-8?l.WATER:l.AIR;if(e===a){const c=to(t,n);return c===it.DESERT||a<=Jt+1?l.SAND:c===it.SNOWY_MOUNTAINS&&a>=36?l.SNOW:l.GRASS}return e>=a-4?to(t,n)===it.DESERT?l.SAND:l.DIRT:l.STONE}function Md(t,e,n){return Dc(Vt(t,e,n))}function fa(t,e){const n=`${t.cx},0,${t.cz}`,i=qs.get(n),r=Ks.get(n);i&&(e.remove(i),i.geometry.dispose()),r&&(e.remove(r),r.geometry.dispose());const{solidMesh:o,waterMesh:s}=t.buildMesh(Vt);qs.set(n,o),e.add(o),s&&(Ks.set(n,s),e.add(s))}function nS(t){console.log("[World] Generating starting biomes and chunks...");for(let e=-Ci;e<=Ci;e++)for(let n=-Ci;n<=Ci;n++){const i=Sd(n,e);vn.set(`${n},0,${e}`,i)}for(const e of vn.values())fa(e,t);console.log(`[World] Ready! ${vn.size} chunks generated.`)}function hf(t,e){if(!e)return;const n=Math.floor(t.x/Te),i=Math.floor(t.z/Te);if(n!==cf||i!==uf){cf=n,uf=i;for(const[o,s]of vn.entries())if(Math.max(Math.abs(s.cx-n),Math.abs(s.cz-i))>Jx){const c=qs.get(o),u=Ks.get(o);c&&(e.remove(c),c.geometry.dispose(),qs.delete(o)),u&&(e.remove(u),u.geometry.dispose(),Ks.delete(o)),s.dispose(),vn.delete(o)}for(let o=-Ci;o<=Ci;o++)for(let s=-Ci;s<=Ci;s++){const a=n+s,c=i+o,u=`${a},0,${c}`;if(!vn.has(u)){const d=Sd(a,c);vn.set(u,d),Ya.push(d)}}}const r=Math.min(2,Ya.length);for(let o=0;o<r;o++){const s=Ya.shift();vn.has(`${s.cx},0,${s.cz}`)&&fa(s,e)}}function Oc(){return{x:.5,y:si(0,0)+2,z:.5}}function ai(t,e,n,i,r){if(n<0||n>=ft)return;if(r===l.WATER){const f=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[h,m,_]of f)Vt(h,m,_)===l.LAVA&&ai(t,h,m,_,l.OBSIDIAN)}else if(r===l.LAVA){const f=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[h,m,_]of f)if(Vt(h,m,_)===l.WATER){r=l.OBSIDIAN;break}}const o=Math.floor(e/Te),s=Math.floor(i/Te),a=`${o},0,${s}`,c=vn.get(a);if(!c)return;const u=(e%Te+Te)%Te,d=(i%Te+Te)%Te;c.setBlock(u,n,d,r),fa(c,t),u===0&&ws(t,o-1,s),u===Te-1&&ws(t,o+1,s),d===0&&ws(t,o,s-1),d===Te-1&&ws(t,o,s+1)}function ws(t,e,n){const i=vn.get(`${e},0,${n}`);i&&fa(i,t)}const So=6;function iS(t,e){const n=e.clone().normalize();let i=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const s=n.x>=0?1:-1,a=n.y>=0?1:-1,c=n.z>=0?1:-1,u=n.x!==0?Math.abs(1/n.x):1/0,d=n.y!==0?Math.abs(1/n.y):1/0,f=n.z!==0?Math.abs(1/n.z):1/0;let h=n.x!==0?(n.x>0?i+1-t.x:t.x-i)*u:1/0,m=n.y!==0?(n.y>0?r+1-t.y:t.y-r)*d:1/0,_=n.z!==0?(n.z>0?o+1-t.z:t.z-o)*f:1/0,v=i,g=r,p=o,b=0,E=0,y=0;for(let U=0;U<So*3;U++){if(r>=0&&r<ft){const C=Vt(i,r,o);if(Dc(C))return{hit:{x:i,y:r,z:o},normal:{x:b,y:E,z:y},prev:{x:v,y:g,z:p}}}if(v=i,g=r,p=o,h<m)if(h<_){if(h>So)break;i+=s,h+=u,b=-s,E=0,y=0}else{if(_>So)break;o+=c,_+=f,b=0,E=0,y=-c}else if(m<_){if(m>So)break;r+=a,m+=d,b=0,E=-a,y=0}else{if(_>So)break;o+=c,_+=f,b=0,E=0,y=-c}}return null}const rS=480;let Fn=.2,Ys=null,$s=null,Hr=null,Qn=null,Ei=null,Ur=null;const oS={dawn:new we(16096779),morning:new we(9684477),noon:new we(6333946),sunset:new we(14753096),dusk:new we(4405450),midnight:new we(329750),predawn:new we(1973067)},sS={dawn:new we(16498468),morning:new we(9684477),noon:new we(7911912),sunset:new we(16007006),dusk:new we(3223169),midnight:new we(329489),predawn:new we(1973067)};function aS(t,e={}){Qn=e.dirLight||null,Ei=e.hemiLight||null,Ur=e.ambientLight||null,Hr=new Ot,t.add(Hr);const n=new fe(20,20,20),i=new fi({color:16776171});Ys=new ie(n,i),Hr.add(Ys);const r=new fe(16,16,16),o=new fi({color:15857145});$s=new ie(r,o),Hr.add($s),Ed(0,t,null)}function pf(t,e,n,i=null){Fn+=t/rS,Fn>=1&&(Fn-=1),n&&Hr&&Hr.position.copy(n.position);const r=Fn*Math.PI*2-Math.PI/2,o=260,s=Math.cos(r)*o,a=Math.sin(r)*o,c=20;Ys&&Ys.position.set(s,a,c),$s&&$s.position.set(-s,-a,-c),Qn&&(no()?Qn.position.set(s,Math.max(15,a),c):Qn.position.set(-s,Math.max(15,-a),-c)),Ed(t,e,i)}function mf(t,e){if(e<.15){const n=e/.15;return t.dawn.clone().lerp(t.morning,n)}else if(e<.25){const n=(e-.15)/.1;return t.morning.clone().lerp(t.noon,n)}else if(e<.5){const n=(e-.25)/.25;return t.noon.clone().lerp(t.sunset,n)}else if(e<.58){const n=(e-.5)/.08;return t.sunset.clone().lerp(t.dusk,n)}else if(e<.75){const n=(e-.58)/.17;return t.dusk.clone().lerp(t.midnight,n)}else if(e<.92){const n=(e-.75)/.17;return t.midnight.clone().lerp(t.predawn,n)}else{const n=(e-.92)/.08;return t.predawn.clone().lerp(t.dawn,n)}}function Ed(t,e,n){const i=mf(oS,Fn),r=mf(sS,Fn);e&&e.fog&&e.fog.color.copy(r),n&&n.setClearColor(i);const o=Math.sin(Fn*Math.PI*2);Qn&&(o>0?(Qn.color.set(16774624),Qn.intensity=.4+o*.85):(Qn.color.set(9741240),Qn.intensity=Math.max(.12,-o*.28))),Ei&&(o>0?(Ei.color.set(8900331),Ei.groundColor.set(5596723),Ei.intensity=.3+o*.4):(Ei.color.set(1976635),Ei.groundColor.set(988970),Ei.intensity=.15)),Ur&&(o>0?(Ur.color.set(16777215),Ur.intensity=.25+o*.2):(Ur.color.set(6583435),Ur.intensity=.12))}function no(){return Fn<.5}function lS(){return!no()}function cS(){const t=(Fn*24+6)%24,e=Math.floor(t),n=Math.floor((t-e)*60),i=e<10?"0"+e:""+e,r=n<10?"0"+n:""+n;return`${i}:${r}`}function uS(){Fn=.05}const fS={[l.GRASS]:5938743,[l.DIRT]:9136404,[l.STONE]:8947848,[l.SAND]:15259274,[l.SNOW]:15790320,[l.WOOD_LOG]:7029286,[l.LEAVES]:3832352,[l.COAL_ORE]:4473924,[l.IRON_ORE]:12096874,[l.WATER]:3702992,[l.CACTUS]:1483594,[l.WOOD_PLANKS]:11817737,[l.COBBLESTONE]:6583435,[l.FLOWER_RED]:14427686,[l.FLOWER_YELLOW]:15381256};let pr=null;const Bo=[],dS=new fe(.12,.12,.12),hS=new fe(.08,.08,.08);function pS(t){pr=t}function cc(t,e,n,i){if(!pr)return;const r=fS[i]||11184810,o=12;for(let s=0;s<o;s++){const a=new He({color:r}),c=new ie(dS,a);c.position.set(t+.2+Math.random()*.6,e+.2+Math.random()*.6,n+.2+Math.random()*.6);const u=(Math.random()-.5)*4.5,d=Math.random()*4+1.5,f=(Math.random()-.5)*4.5,h=(Math.random()-.5)*10,m=(Math.random()-.5)*10;pr.add(c),Bo.push({mesh:c,vx:u,vy:d,vz:f,rx:h,ry:m,life:.6+Math.random()*.3,age:0})}}function yd(t,e,n,i=15680580){if(!pr)return;const r=8;for(let o=0;o<r;o++){const s=new He({color:i}),a=new ie(hS,s);a.position.set(t,e,n);const c=(Math.random()-.5)*5,u=Math.random()*3.5+1,d=(Math.random()-.5)*5;pr.add(a),Bo.push({mesh:a,vx:c,vy:u,vz:d,rx:Math.random()*10,ry:Math.random()*10,life:.35+Math.random()*.2,age:0})}}function mS(t){if(pr)for(let e=Bo.length-1;e>=0;e--){const n=Bo[e];if(n.age+=t,n.age>=n.life){pr.remove(n.mesh),n.mesh.material.dispose(),Bo.splice(e,1);continue}n.vy-=18*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.x+=n.rx*t,n.mesh.rotation.y+=n.ry*t;const i=Math.max(.01,1-n.age/n.life);n.mesh.scale.set(i,i,i)}}let ur=null;const sr=[],gS=new fe(.26,.26,.26),_S=30;function vS(t){ur=t}function Dt(t,e,n,i){if(!ur)return;let r,o,s,a;if(typeof t=="number"&&typeof i=="number"?(o=t,s=e,a=n,r=i):(r=t,o=e,s=n,a=i),!r||r===l.AIR)return;if(sr.length>=_S){const f=sr.shift();f&&f.mesh&&ur.remove(f.mesh)}const c=ua[r]||{side:1};Ic(c.side||0);const u=new He({map:ca()}),d=new ie(gS,u);d.position.set(o+(Math.random()-.5)*.2,s+.3,a+(Math.random()-.5)*.2),ur.add(d),sr.push({itemType:r,mesh:d,pos:d.position.clone(),vel:new N((Math.random()-.5)*1.8,3,(Math.random()-.5)*1.8),age:0,bobOffset:Math.random()*Math.PI*2,collected:!1})}function xS(t,e){if(!ur)return;const i=Bi().clone().add(new N(0,.9,0));for(let r=sr.length-1;r>=0;r--){const o=sr[r];if(o.age+=t,o.age>120){ur.remove(o.mesh),sr.splice(r,1);continue}const s=o.pos.distanceTo(i);if(s<2.5&&o.age>.3){const a=Math.min(14,1/(s*.15+.05));if(o.pos.lerp(i,t*a),s<.65&&tn(o.itemType)){Iv(),ur.remove(o.mesh),sr.splice(r,1);continue}}else{o.vel.y-=18*t,o.pos.x+=o.vel.x*t,o.pos.z+=o.vel.z*t,o.pos.y+=o.vel.y*t,o.vel.x*=Math.exp(-6*t),o.vel.z*=Math.exp(-6*t);const a=si(Math.floor(o.pos.x),Math.floor(o.pos.z))+1.15;o.pos.y<=a&&(o.pos.y=a,o.vel.set(0,0,0))}o.mesh.position.copy(o.pos),o.mesh.position.y+=Math.sin(e*3.5+o.bobOffset)*.06,o.mesh.rotation.y+=t*2.2,o.mesh.rotation.x=Math.sin(e*2+o.bobOffset)*.15}}const $e={PIG:"pig",SHEEP:"sheep",ZOMBIE:"zombie",SKELETON:"skeleton",SPIDER:"spider",CREEPER:"creeper"};let At=null;const Mn=[],Ji=[],Hs=[];let Za=0;const SS=10;function MS(t,e,n,i,r,o){const s=i-t,a=r-e,c=o-n,u=Math.hypot(s,a,c);if(u<.3)return!0;const d=Math.ceil(u*2.2),f=s/d,h=a/d,m=c/d;for(let _=1;_<d;_++){const v=Math.floor(t+f*_),g=Math.floor(e+h*_),p=Math.floor(n+m*_);if(Md(v,g,p))return!1}return!0}function ES(){const t=new Ot,e=new He({color:16020150}),n=new He({color:16478597}),i=new He({color:2042167}),r=new ie(new fe(.7,.5,.9),e);r.position.set(0,.45,0),t.add(r);const o=new ie(new fe(.45,.45,.45),e);o.position.set(0,.65,-.55),t.add(o);const s=new ie(new fe(.24,.16,.12),n);s.position.set(0,.58,-.8),t.add(s);const a=new ie(new fe(.08,.08,.02),i);a.position.set(-.16,.72,-.78);const c=new ie(new fe(.08,.08,.02),i);c.position.set(.16,.72,-.78),t.add(a),t.add(c);const u=new fe(.18,.35,.18),d=[],f=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const h of f){const m=new ie(u,e);m.position.set(...h),t.add(m),d.push(m)}return{group:t,legs:d,head:o,body:r,originalMats:[e,n]}}function yS(){const t=new Ot,e=new He({color:16317180}),n=new He({color:3359061}),i=new He({color:16478597}),r=new He({color:988970}),o=new ie(new fe(.75,.6,.95),e);o.position.set(0,.5,0),t.add(o);const s=new ie(new fe(.42,.42,.42),n);s.position.set(0,.68,-.55),t.add(s);const a=new ie(new fe(.44,.2,.44),e);a.position.set(0,.86,-.55),t.add(a);const c=new ie(new fe(.22,.14,.12),i);c.position.set(0,.6,-.78),t.add(c);const u=new ie(new fe(.08,.08,.02),r);u.position.set(-.16,.74,-.76);const d=new ie(new fe(.08,.08,.02),r);d.position.set(.16,.74,-.76),t.add(u),t.add(d);const f=new fe(.16,.36,.16),h=[],m=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const _ of m){const v=new ie(f,n);v.position.set(..._),t.add(v),h.push(v)}return{group:t,legs:h,head:s,body:o,originalMats:[e,n]}}function TS(){const t=new Ot,e=new He({color:3899966}),n=new He({color:440020}),i=new He({color:1981066}),r=new He({color:988970}),o=new ie(new fe(.44,.44,.44),e);o.position.set(0,1.45,0),t.add(o);const s=new ie(new fe(.08,.06,.02),r);s.position.set(-.12,1.48,-.23);const a=new ie(new fe(.08,.06,.02),r);a.position.set(.12,1.48,-.23),t.add(s),t.add(a);const c=new ie(new fe(.5,.65,.28),n);c.position.set(0,.9,0),t.add(c);const u=new fe(.16,.16,.55),d=new ie(u,e);d.position.set(-.35,1.05,-.26);const f=new ie(u,e);f.position.set(.35,1.05,-.26),t.add(d),t.add(f);const h=new fe(.2,.6,.22),m=new ie(h,i);m.position.set(-.13,.3,0);const _=new ie(h,i);return _.position.set(.13,.3,0),t.add(m),t.add(_),{group:t,legs:[m,_],arms:[d,f],head:o,body:c,originalMats:[e,n,i]}}function AS(){const t=new Ot,e=new He({color:13751771}),n=new He({color:988970}),i=new He({color:7877903}),r=new ie(new fe(.42,.42,.42),e);r.position.set(0,1.45,0),t.add(r);const o=new ie(new fe(.09,.07,.02),n);o.position.set(-.11,1.46,-.22);const s=new ie(new fe(.09,.07,.02),n);s.position.set(.11,1.46,-.22),t.add(o),t.add(s);const a=new ie(new fe(.42,.6,.22),e);a.position.set(0,.9,0),t.add(a);const c=new fe(.12,.6,.12),u=new ie(c,e);u.position.set(-.3,.9,0);const d=new ie(c,e);d.position.set(.3,.9,0),t.add(u),t.add(d);const f=new ie(new fe(.08,.5,.08),i);f.position.set(-.3,.85,-.2),f.rotation.x=.4,t.add(f);const h=new fe(.14,.6,.14),m=new ie(h,e);m.position.set(-.12,.3,0);const _=new ie(h,e);return _.position.set(.12,.3,0),t.add(m),t.add(_),{group:t,legs:[m,_],arms:[u,d],head:r,body:a,originalMats:[e,i]}}function bS(){const t=new Ot,e=new He({color:1976635}),n=new fi({color:15680580}),i=new ie(new fe(.65,.45,.7),e);i.position.set(0,.35,.4),t.add(i);const r=new ie(new fe(.45,.35,.45),e);r.position.set(0,.3,-.25),t.add(r);const o=new fe(.06,.06,.02),s=new ie(o,n);s.position.set(-.12,.32,-.48);const a=new ie(o,n);a.position.set(.12,.32,-.48),t.add(s),t.add(a);const c=new fe(.6,.08,.08),u=[];for(let d=0;d<4;d++){const f=new ie(c,e);f.position.set(-.45,.22,-.3+d*.22),f.rotation.z=.35,t.add(f),u.push(f);const h=new ie(c,e);h.position.set(.45,.22,-.3+d*.22),h.rotation.z=-.35,t.add(h),u.push(h)}return{group:t,legs:u,head:r,body:i,originalMats:[e,n]}}function RS(){const t=new Ot,e=new He({color:1409085}),n=new He({color:988970}),i=new ie(new fe(.46,.46,.46),e);i.position.set(0,1.45,0),t.add(i);const r=new ie(new fe(.09,.09,.02),n);r.position.set(-.11,1.5,-.24);const o=new ie(new fe(.09,.09,.02),n);o.position.set(.11,1.5,-.24);const s=new ie(new fe(.18,.16,.02),n);s.position.set(0,1.36,-.24),t.add(r),t.add(o),t.add(s);const a=new ie(new fe(.46,.65,.26),e);a.position.set(0,.9,0),t.add(a);const c=new fe(.2,.45,.2),u=[],d=[[-.14,.22,-.16],[.14,.22,-.16],[-.14,.22,.16],[.14,.22,.16]];for(const f of d){const h=new ie(c,e);h.position.set(...f),t.add(h),u.push(h)}return{group:t,legs:u,head:i,body:a,originalMats:[e,n]}}function wS(t){At=t}function Qi(t,e,n,i){if(!At)return null;let r,o=10,s=1.4;t===$e.PIG?(r=ES(),o=10,s=.6):t===$e.SHEEP?(r=yS(),o=10,s=.65):t===$e.SKELETON?(r=AS(),o=16,s=1.45):t===$e.SPIDER?(r=bS(),o=14,s=.35):t===$e.CREEPER?(r=RS(),o=18,s=1.45):(r=TS(),o=20,s=1.45),r.group.position.set(e,n,i),At.add(r.group);const a={type:t,model:r,pos:new N(e,n,i),vel:new N(0,0,0),yaw:0,health:o,maxHealth:o,eyeHeight:s,state:"idle",stateTimer:Math.random()*2,lastSeenPos:null,canSeePlayer:!1,losCheckTimer:Math.random()*.25,attackCooldown:0,shootCooldown:2,fuseTimer:0,isFusing:!1,isAngered:!1,burnTimer:0,onGround:!0};return Mn.push(a),a}function Pc(t,e,n){if(!t||t.health<=0)return;t.health-=e,Av(),yd(t.pos.x,t.pos.y+t.eyeHeight*.5,t.pos.z);const i=n.clone().multiplyScalar(4.5);t.vel.x+=i.x,t.vel.z+=i.z,t.vel.y=3.5,t.isAngered=!0,t.type===$e.PIG?(t.state="flee",t.stateTimer=4.5,Rv()):t.type===$e.SHEEP?(t.state="flee",t.stateTimer=4.5,fd()):(t.state="chase",t.lastSeenPos=Bi().clone(),t.type===$e.ZOMBIE&&bv()),t.health<=0&&Nc(t)}function Nc(t){At.remove(t.model.group);const e=Mn.indexOf(t);e!==-1&&Mn.splice(e,1),t.type===$e.PIG?Dt(l.PORKCHOP,t.pos.x,t.pos.y+.5,t.pos.z):t.type===$e.SHEEP?(Dt(l.WOOL,t.pos.x,t.pos.y+.5,t.pos.z),Dt(l.MUTTON,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===$e.ZOMBIE?(Dt(l.ROTTEN_FLESH,t.pos.x,t.pos.y+.5,t.pos.z),Math.random()<.25&&Dt(l.IRON_INGOT,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===$e.SKELETON?(Dt(l.BONE,t.pos.x,t.pos.y+.5,t.pos.z),Dt(l.ARROW,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===$e.SPIDER?(Dt(l.STRING,t.pos.x,t.pos.y+.5,t.pos.z),Dt(l.SPIDER_EYE,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===$e.CREEPER&&Dt(l.GUNPOWDER,t.pos.x,t.pos.y+.5,t.pos.z)}function Td(t,e,n,i=2.8,r=16){if(!At)return;Ov();const o=new N(t,e,n),a=Bi().clone().add(new N(0,.9,0)).sub(o),c=a.length();if(c<i*2.2){const v=1-c/(i*2.2),g=Math.max(2,Math.round(r*v));ro(g,a.clone().normalize())}for(const v of Mn)v.pos.distanceTo(o)<i*2&&Pc(v,14,v.pos.clone().sub(o).normalize());const u=Math.floor(t-i),d=Math.ceil(t+i),f=Math.max(1,Math.floor(e-i)),h=Math.min(63,Math.ceil(e+i)),m=Math.floor(n-i),_=Math.ceil(n+i);for(let v=m;v<=_;v++)for(let g=u;g<=d;g++)for(let p=f;p<=h;p++)if(Math.hypot(g+.5-t,p+.5-e,v+.5-n)<=i){const E=Vt(g,p,v);if(E!==l.AIR&&E!==l.WATER&&(cc(g,p,v,E),ai(At,g,p,v,l.AIR),Math.random()<.4)){const y=vd(E);y>0&&Dt(y,g+.5,p+.5,v+.5)}}}function CS(t,e,n){if(!At)return;ai(At,t,e,n,l.AIR);const i=new fe(.98,.98,.98),r=new He({color:15680580}),o=new ie(i,r);o.position.set(t+.5,e+.5,n+.5),At.add(o),ud(),Hs.push({mesh:o,mat:r,pos:new N(t+.5,e+.5,n+.5),timer:2.2,blinkTimer:0})}function IS(t){for(let e=Hs.length-1;e>=0;e--){const n=Hs[e];n.timer-=t,n.blinkTimer+=t*10,Math.floor(n.blinkTimer)%2===0?n.mat.color.setHex(16777215):n.mat.color.setHex(15680580),n.timer<=0&&(At.remove(n.mesh),Hs.splice(e,1),Td(n.pos.x,n.pos.y,n.pos.z,3.8,20))}}function DS(t,e){if(!At)return;Dv();const n=new fe(.08,.08,.6),i=new fi({color:16317180}),r=new ie(n,i);r.position.copy(t),At.add(r);const o=e.clone().multiplyScalar(24);Ji.push({mesh:r,pos:t.clone(),vel:o,life:5,isPlayerShot:!0})}function OS(t,e){if(!At)return;const n=new fe(.08,.08,.5),i=new fi({color:14870768}),r=new ie(n,i);r.position.copy(t),At.add(r);const s=e.clone().sub(t).normalize().multiplyScalar(16);Ji.push({mesh:r,pos:t.clone(),vel:s,life:4,isPlayerShot:!1})}function PS(t){const e=Bi();for(let n=Ji.length-1;n>=0;n--){const i=Ji[n];if(i.life-=t,i.vel.y-=12*t,i.pos.addScaledVector(i.vel,t),i.mesh.position.copy(i.pos),i.isPlayerShot){let r=!1;for(const o of Mn){const s=o.pos.clone().add(new N(0,o.eyeHeight*.5,0));if(i.pos.distanceTo(s)<.9){Pc(o,9,i.vel.clone().normalize()),At.remove(i.mesh),Ji.splice(n,1),r=!0;break}}if(r)continue}else if(i.pos.distanceTo(e.clone().add(new N(0,.9,0)))<.75){ro(4,i.vel.clone().normalize()),At.remove(i.mesh),Ji.splice(n,1);continue}(Md(Math.floor(i.pos.x),Math.floor(i.pos.y),Math.floor(i.pos.z))||i.life<=0)&&(At.remove(i.mesh),Ji.splice(n,1))}}function NS(t){const e=Bi();Za+=t,Za>4&&Mn.length<SS&&(Za=0,LS(e)),PS(t),IS(t);for(let n=Mn.length-1;n>=0;n--){const i=Mn[n],r=i.pos.distanceTo(e);if(r>52){At.remove(i.model.group),Mn.splice(n,1);continue}US(i,t,e,r)}}function LS(t){const e=Math.random()*Math.PI*2,n=24+Math.random()*14,i=Math.floor(t.x+Math.cos(e)*n),r=Math.floor(t.z+Math.sin(e)*n),o=si(i,r);if(o>15&&o<55)if(no()){if(Mn.filter(c=>c.type===$e.PIG||c.type===$e.SHEEP).length<5){const c=Math.random()<.5?$e.PIG:$e.SHEEP;Qi(c,i+.5,o+1,r+.5)}}else{const a=Math.random();a<.35?Qi($e.ZOMBIE,i+.5,o+1,r+.5):a<.6?Qi($e.SKELETON,i+.5,o+1,r+.5):a<.8?Qi($e.CREEPER,i+.5,o+1,r+.5):Qi($e.SPIDER,i+.5,o+1,r+.5)}}function US(t,e,n,i){if((t.type===$e.ZOMBIE||t.type===$e.SKELETON)&&no()){const o=si(Math.floor(t.pos.x),Math.floor(t.pos.z));if(t.pos.y>=o&&(t.burnTimer+=e,t.burnTimer>=1&&(t.burnTimer=0,t.health-=2,yd(t.pos.x,t.pos.y+1,t.pos.z),t.health<=0))){Nc(t);return}}if(t.losCheckTimer-=e,t.losCheckTimer<=0){t.losCheckTimer=.3;const o=MS(t.pos.x,t.pos.y+t.eyeHeight,t.pos.z,n.x,n.y+1.2,n.z);t.canSeePlayer=o&&i<16,t.canSeePlayer?(t.lastSeenPos=n.clone(),t.type!==$e.PIG&&(t.type===$e.SPIDER&&no()&&!t.isAngered?t.state="idle":t.state="chase")):i>22&&t.state==="chase"&&(t.state="idle")}t.type===$e.PIG?kS(t,e,n):t.type===$e.SHEEP?VS(t,e,n):t.type===$e.SKELETON?GS(t,e,n,i):t.type===$e.SPIDER?HS(t,e,n,i):t.type===$e.CREEPER?FS(t,e,n,i):BS(t,e,n,i),t.vel.y-=22*e,t.pos.addScaledVector(t.vel,e);const r=si(Math.floor(t.pos.x),Math.floor(t.pos.z));t.pos.y<=r+1&&(t.pos.y=r+1,t.vel.y=0,t.onGround=!0),t.vel.x*=Math.exp(-8*e),t.vel.z*=Math.exp(-8*e),t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.yaw+Math.PI}function FS(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;if(t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<2.4){t.isFusing||(t.isFusing=!0,ud()),t.fuseTimer+=e,t.vel.x=0,t.vel.z=0;const o=1+t.fuseTimer/1.8*.35;if(t.model.group.scale.set(o,o,o),t.fuseTimer>=1.8){Td(t.pos.x,t.pos.y+.5,t.pos.z,2.8,16),Nc(t);return}}else i>4.5&&t.isFusing&&(t.isFusing=!1,t.fuseTimer=0,t.model.group.scale.set(1,1,1))}}function BS(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<1.4&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1.2,ro(3,new N(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function GS(t,e,n,i){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z),t.canSeePlayer&&(i<8?(t.vel.x=-Math.sin(t.yaw)*1.8,t.vel.z=-Math.cos(t.yaw)*1.8):i>14&&(t.vel.x=Math.sin(t.yaw)*1.8,t.vel.z=Math.cos(t.yaw)*1.8),t.shootCooldown-=e,t.shootCooldown<=0&&i<18&&(t.shootCooldown=2.8,cd(),OS(t.pos.clone().add(new N(0,1.2,0)),n.clone().add(new N(0,.9,0)))))}function HS(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=2.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<4&&t.onGround&&Math.random()<.04&&(t.vel.y=4.8,t.vel.x*=1.4,t.vel.z*=1.4,t.onGround=!1),i<1.3&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1,ro(2,new N(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function kS(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=2.5+Math.random()*3.5,t.yaw+=(Math.random()-.5)*1.8),t.vel.x=Math.sin(t.yaw)*.9,t.vel.z=Math.cos(t.yaw)*.9}function VS(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else{if(t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=3+Math.random()*4,t.yaw+=(Math.random()-.5)*1.8,Math.random()<.25))try{fd()}catch{}t.vel.x=Math.sin(t.yaw)*.85,t.vel.z=Math.cos(t.yaw)*.85}}function WS(t,e,n=3.8){let i=null,r=n;for(const o of Mn){if(o.health<=0)continue;const a=o.pos.clone().add(new N(0,o.eyeHeight*.5,0)).clone().sub(t),c=a.dot(e);c>0&&c<r&&a.clone().sub(e.clone().multiplyScalar(c)).length()<.9&&(r=c,i=o)}return i}let ja=null;function zS(){return ja||(ja=gd()),ja}function Ja(t,e,n,i){const[r,o,s,a]=e,c=(o[0]-r[0])/16,u=(o[1]-r[1])/16,d=(a[0]-r[0])/16,f=(a[1]-r[1])/16;t.save(),t.filter=`brightness(${i})`,t.setTransform(c,u,d,f,r[0],r[1]),t.drawImage(n,0,0,16,16,0,0,16,16),t.restore()}function Rt(t,e=46){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");if(t===l.IRON_SWORD||t===l.STONE_SWORD||t===l.WOODEN_SWORD){const h=t===l.IRON_SWORD,m=t===l.STONE_SWORD,_=h?"#f1f5f9":m?"#94a3b8":"#b45309",v=h?"#475569":m?"#334155":"#78350f";return i.lineWidth=3,i.strokeStyle=v,i.fillStyle=_,i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle=h?"#334155":"#451a03",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n}if(t===l.IRON_PICKAXE||t===l.STONE_PICKAXE||t===l.WOODEN_PICKAXE){const h=t===l.IRON_PICKAXE,m=t===l.STONE_PICKAXE,_=h?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.arc(e*.7,e*.3,e*.25,-Math.PI*.75,-Math.PI*.15),i.stroke(),n}if(t===l.STICK)return i.lineWidth=5,i.strokeStyle="#92400e",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.75,e*.25),i.stroke(),n;if(t===l.TORCH)return i.lineWidth=6,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.3,e*.75),i.lineTo(e*.65,e*.4),i.stroke(),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.68,e*.35,e*.15,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.68,e*.35,e*.08,0,Math.PI*2),i.fill(),n;if(t===l.IRON_INGOT)return i.fillStyle="#cbd5e1",i.strokeStyle="#475569",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.4),i.lineTo(e*.65,e*.3),i.lineTo(e*.8,e*.55),i.lineTo(e*.4,e*.65),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.35,e*.42,e*.25,e*.08),n;if(t===l.COOKED_PORKCHOP)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.35,e*.22,Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#451a03",i.fillRect(e*.4,e*.4,e*.2,2),i.fillRect(e*.45,e*.5,e*.2,2),n;if(t===l.IRON_HELMET)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.32,Math.PI,0),i.lineTo(e*.82,e*.65),i.lineTo(e*.65,e*.65),i.lineTo(e*.65,e*.55),i.lineTo(e*.35,e*.55),i.lineTo(e*.35,e*.65),i.lineTo(e*.18,e*.65),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_CHESTPLATE)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.35),i.lineTo(e*.6,e*.35),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.75,e*.5),i.lineTo(e*.75,e*.75),i.lineTo(e*.25,e*.75),i.lineTo(e*.25,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_LEGGINGS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.75),i.lineTo(e*.55,e*.75),i.lineTo(e*.5,e*.45),i.lineTo(e*.45,e*.75),i.lineTo(e*.25,e*.75),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_BOOTS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.fillRect(e*.22,e*.45,e*.18,e*.3),i.fillRect(e*.15,e*.6,e*.25,e*.15),i.fillRect(e*.6,e*.45,e*.18,e*.3),i.fillRect(e*.6,e*.6,e*.25,e*.15),n;if(t===l.ARROW)return i.lineWidth=3,i.strokeStyle="#94a3b8",i.beginPath(),i.moveTo(e*.2,e*.8),i.lineTo(e*.75,e*.25),i.stroke(),i.fillStyle="#475569",i.beginPath(),i.moveTo(e*.82,e*.18),i.lineTo(e*.65,e*.25),i.lineTo(e*.75,e*.35),i.closePath(),i.fill(),n;if(t===l.BONE)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.42,e*.5,e*.16,4),i.fill(),i.stroke(),n;if(t===l.STRING)return i.lineWidth=2,i.strokeStyle="#f8fafc",i.beginPath(),i.arc(e*.5,e*.5,e*.25,0,Math.PI*1.7),i.stroke(),n;if(t===l.SPIDER_EYE)return i.fillStyle="#991b1b",i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.22,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===l.BOW)return i.lineWidth=3.5,i.strokeStyle="#78350f",i.beginPath(),i.arc(e*.4,e*.5,e*.35,-Math.PI*.45,Math.PI*.45),i.stroke(),i.lineWidth=1.5,i.strokeStyle="#f8fafc",i.beginPath(),i.moveTo(e*.4+Math.cos(-Math.PI*.45)*(e*.35),e*.5+Math.sin(-Math.PI*.45)*(e*.35)),i.lineTo(e*.4+Math.cos(Math.PI*.45)*(e*.35),e*.5+Math.sin(Math.PI*.45)*(e*.35)),i.stroke(),n;if(t===l.IRON_HOE||t===l.STONE_HOE||t===l.WOODEN_HOE){const h=t===l.IRON_HOE,m=t===l.STONE_HOE,_=h?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.65,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.moveTo(e*.65,e*.3),i.lineTo(e*.85,e*.3),i.lineTo(e*.85,e*.45),i.stroke(),n}if(t===l.WHEAT_SEEDS)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=1.5,[[e*.35,e*.4],[e*.55,e*.35],[e*.45,e*.6],[e*.65,e*.55]].forEach(([m,_])=>{i.beginPath(),i.arc(m,_,e*.08,0,Math.PI*2),i.fill(),i.stroke()}),n;if(t===l.WHEAT)return i.lineWidth=3,i.strokeStyle="#eab308",i.beginPath(),i.moveTo(e*.3,e*.8),i.lineTo(e*.5,e*.25),i.moveTo(e*.5,e*.8),i.lineTo(e*.5,e*.2),i.moveTo(e*.7,e*.8),i.lineTo(e*.5,e*.25),i.stroke(),i.fillStyle="#ef4444",i.fillRect(e*.38,e*.55,e*.24,4),n;if(t===l.BREAD)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.roundRect(e*.2,e*.35,e*.6,e*.32,8),i.fill(),i.stroke(),i.fillStyle="#fef08a",i.fillRect(e*.32,e*.42,3,e*.18),i.fillRect(e*.48,e*.42,3,e*.18),i.fillRect(e*.64,e*.42,3,e*.18),n;if(t===l.GUNPOWDER)return i.fillStyle="#475569",i.strokeStyle="#1e293b",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.25,e*.7),i.lineTo(e*.5,e*.3),i.lineTo(e*.75,e*.7),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#94a3b8",i.fillRect(e*.45,e*.45,2,2),i.fillRect(e*.55,e*.55,2,2),i.fillRect(e*.35,e*.6,2,2),n;if(t===l.DIAMOND)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.7,e*.3),i.lineTo(e*.85,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#67e8f9",i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.5,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.fillStyle="#e0f2fe",i.beginPath(),i.moveTo(e*.4,e*.32),i.lineTo(e*.6,e*.32),i.lineTo(e*.5,e*.45),i.closePath(),i.fill(),n;if(t===l.DIAMOND_SWORD)return i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle="#0284c7",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n;if(t===l.DIAMOND_PICKAXE)return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.45,e*.2),i.quadraticCurveTo(e*.75,e*.15,e*.85,e*.45),i.lineTo(e*.75,e*.5),i.quadraticCurveTo(e*.65,e*.3,e*.4,e*.3),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_HELMET)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.25,e*.5,e*.45,[8,8,2,2]),i.fill(),i.stroke(),i.clearRect(e*.38,e*.45,e*.24,e*.16),n;if(t===l.DIAMOND_CHESTPLATE)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.25),i.lineTo(e*.5,e*.38),i.lineTo(e*.6,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.72,e*.5),i.lineTo(e*.7,e*.8),i.lineTo(e*.3,e*.8),i.lineTo(e*.28,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_LEGGINGS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.8),i.lineTo(e*.55,e*.8),i.lineTo(e*.5,e*.5),i.lineTo(e*.45,e*.8),i.lineTo(e*.25,e*.8),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_BOOTS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.22,e*.4,e*.24,e*.4,[4,4,6,2]),i.roundRect(e*.54,e*.4,e*.24,e*.4,[4,4,6,2]),i.fill(),i.stroke(),n;if(t===l.MUTTON||t===l.COOKED_MUTTON){const h=t===l.COOKED_MUTTON;return i.fillStyle=h?"#78350f":"#f43f5e",i.strokeStyle=h?"#451a03":"#9f1239",i.lineWidth=2,i.beginPath(),i.ellipse(e*.45,e*.48,e*.26,e*.18,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.62,e*.62,e*.16,e*.08),n}if(t===l.ROTTEN_FLESH)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.32,e*.2,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),n;const r=zS(),o=ua[t];if(!o)return null;const s=r[o.top],a=r[o.side],c=e/4,u=[[e/2,0],[e/2+c,c/2],[e/2,c],[e/2-c,c/2]],d=[[e/2-c,c/2],[e/2,c],[e/2,2*c],[e/2-c,3*c/2]],f=[[e/2,c],[e/2+c,c/2],[e/2+c,3*c/2],[e/2,2*c]];return Ja(i,f,a,.8),Ja(i,d,a,.66),Ja(i,u,s,1),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1.5,[u,d,f].forEach(h=>{i.beginPath(),i.moveTo(h[0][0],h[0][1]);for(let m=1;m<h.length;m++)i.lineTo(h[m][0],h[m][1]);i.closePath(),i.stroke()}),n}let In=null,Dn=null;const _n=new Array(9).fill(0),an=new Array(4).fill(0);let An=null;const Ad=[{id:"planks",name:"Tábuas de Madeira",category:"Blocos",result:l.WOOD_PLANKS,count:4,gridSize:2,layout:[l.WOOD_LOG,0,0,0],desc:"Coloque 1 Tronco de Carvalho em qualquer espaço da grade.",check:t=>{const e=t.filter(i=>i===l.WOOD_LOG).length,n=t.filter(i=>i!==0&&i!==l.WOOD_LOG).length;return e===1&&n===0}},{id:"sticks",name:"Gravetos",category:"Materiais",result:l.STICK,count:4,gridSize:2,layout:[l.WOOD_PLANKS,0,l.WOOD_PLANKS,0],desc:"Coloque 2 Tábuas de Madeira verticalmente.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[1]===0&&t[3]===0||t[1]===l.WOOD_PLANKS&&t[3]===l.WOOD_PLANKS&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===l.WOOD_PLANKS&&t[s]===l.WOOD_PLANKS&&t.every((c,u)=>u===o||u===s?!0:c===0))return!0}return!1}},{id:"crafting_table",name:"Bancada de Trabalho",category:"Blocos",result:l.CRAFTING_TABLE,count:1,gridSize:2,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"Preencha os 4 espaços (2×2) com Tábuas de Madeira.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===l.WOOD_PLANKS);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,s=r+1,a=r+3,c=r+4;if(t[o]===l.WOOD_PLANKS&&t[s]===l.WOOD_PLANKS&&t[a]===l.WOOD_PLANKS&&t[c]===l.WOOD_PLANKS&&t.every((d,f)=>f===o||f===s||f===a||f===c?!0:d===0))return!0}}return!1}},{id:"furnace",name:"Fornalha",category:"Blocos",result:l.FURNACE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,0,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE],desc:"Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===l.COBBLESTONE)&&t[4]===0},{id:"chest",name:"Baú de Madeira",category:"Blocos",result:l.CHEST,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,0,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===l.WOOD_PLANKS)&&t[4]===0},{id:"torches",name:"Tochas (4x)",category:"Iluminação",result:l.TORCH,count:4,gridSize:2,layout:[l.COAL_ORE,0,l.STICK,0],desc:"1 Carvão em cima e 1 Graveto logo abaixo.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===l.COAL_ORE&&t[2]===l.STICK&&t[1]===0&&t[3]===0||t[1]===l.COAL_ORE&&t[3]===l.STICK&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===l.COAL_ORE&&t[s]===l.STICK&&t.every((c,u)=>u===o||u===s?!0:c===0))return!0}return!1}},{id:"wooden_pickaxe",name:"Picareta de Madeira",category:"Ferramentas",result:l.WOODEN_PICKAXE,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,0,l.STICK,0,0,l.STICK,0],desc:"3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.WOOD_PLANKS&&t[1]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"wooden_sword",name:"Espada de Madeira",category:"Armas",result:l.WOODEN_SWORD,count:1,gridSize:3,layout:[0,l.WOOD_PLANKS,0,0,l.WOOD_PLANKS,0,0,l.STICK,0],desc:"2 Tábuas verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.WOOD_PLANKS&&t[3+i]===l.WOOD_PLANKS&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"stone_pickaxe",name:"Picareta de Pedra",category:"Ferramentas",result:l.STONE_PICKAXE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,0,l.STICK,0,0,l.STICK,0],desc:"3 Pedregulhos no topo e 2 Gravetos no meio.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.COBBLESTONE&&t[1]===l.COBBLESTONE&&t[2]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"stone_sword",name:"Espada de Pedra",category:"Armas",result:l.STONE_SWORD,count:1,gridSize:3,layout:[0,l.COBBLESTONE,0,0,l.COBBLESTONE,0,0,l.STICK,0],desc:"2 Pedregulhos verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.COBBLESTONE&&t[3+i]===l.COBBLESTONE&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_pickaxe",name:"Picareta de Ferro",category:"Ferramentas",result:l.IRON_PICKAXE,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.STICK,0,0,l.STICK,0],desc:"3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"iron_sword",name:"Espada de Ferro",category:"Armas",result:l.IRON_SWORD,count:1,gridSize:3,layout:[0,l.IRON_INGOT,0,0,l.IRON_INGOT,0,0,l.STICK,0],desc:"2 Barras de Ferro verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.IRON_INGOT&&t[3+i]===l.IRON_INGOT&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_helmet",name:"Capacete de Ferro",category:"Armaduras",result:l.IRON_HELMET,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,0,0,0],desc:"5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"iron_chestplate",name:"Peitoral de Ferro",category:"Armaduras",result:l.IRON_CHESTPLATE,count:1,gridSize:3,layout:[l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT],desc:"8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===0&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===l.IRON_INGOT&&t[5]===l.IRON_INGOT&&t[6]===l.IRON_INGOT&&t[7]===l.IRON_INGOT&&t[8]===l.IRON_INGOT},{id:"iron_leggings",name:"Calças de Ferro",category:"Armaduras",result:l.IRON_LEGGINGS,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT],desc:"7 Barras de Ferro em formato de calças (+5 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===l.IRON_INGOT&&t[7]===0&&t[8]===l.IRON_INGOT},{id:"iron_boots",name:"Botas de Ferro",category:"Armaduras",result:l.IRON_BOOTS,count:1,gridSize:3,layout:[l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,0,0,0],desc:"4 Barras de Ferro em formato de botas (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===0&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bow",name:"Arco de Caça",category:"Armas",result:l.BOW,count:1,gridSize:3,layout:[0,l.STICK,l.STRING,l.STICK,0,l.STRING,0,l.STICK,l.STRING],desc:"3 Gravetos e 3 Linhas de Teia na bancada 3×3.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===l.STICK).length,r=t.filter(s=>s===l.STRING).length,o=t.filter(s=>s!==0&&s!==l.STICK&&s!==l.STRING).length;return i===3&&r===3&&o===0}},{id:"wooden_hoe",name:"Enxada de Madeira",category:"Ferramentas",result:l.WOODEN_HOE,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Tábuas no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.WOOD_PLANKS&&t[1]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.WOOD_PLANKS).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.WOOD_PLANKS).length;return i&&r===2&&o===2&&s===0}},{id:"stone_hoe",name:"Enxada de Pedra",category:"Ferramentas",result:l.STONE_HOE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Pedregulhos no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.COBBLESTONE&&t[1]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.COBBLESTONE&&t[2]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.COBBLESTONE).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.COBBLESTONE).length;return i&&r===2&&o===2&&s===0}},{id:"iron_hoe",name:"Enxada de Ferro",category:"Ferramentas",result:l.IRON_HOE,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Barras de Ferro no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.IRON_INGOT).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.IRON_INGOT).length;return i&&r===2&&o===2&&s===0}},{id:"bread",name:"Pão Dourado",category:"Alimentação",result:l.BREAD,count:1,gridSize:3,layout:[0,0,0,l.WHEAT,l.WHEAT,l.WHEAT,0,0,0],desc:"3 Trigos colhidos em linha horizontal (+5 Vida).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=i*3,o=i*3+1,s=i*3+2;if(t[r]===l.WHEAT&&t[o]===l.WHEAT&&t[s]===l.WHEAT&&t.every((c,u)=>u===r||u===o||u===s?!0:c===0))return!0}return!1}},{id:"tnt",name:"Bloco de TNT",category:"Explosivos",result:l.TNT,count:1,gridSize:3,layout:[l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER],desc:"5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===l.GUNPOWDER).length,r=t.filter(s=>s===l.SAND).length,o=t.filter(s=>s!==0&&s!==l.GUNPOWDER&&s!==l.SAND).length;return i===5&&r===4&&o===0}},{id:"diamond_sword",name:"Espada de Diamante",category:"Armas",result:l.DIAMOND_SWORD,count:1,gridSize:3,layout:[0,l.DIAMOND,0,0,l.DIAMOND,0,0,l.STICK,0],desc:"2 Diamantes verticais e 1 Graveto na base (+9 Dano).",check:(t,e,n)=>{if(e===3&&n===3){for(let i=0;i<3;i++)if(t[i]===l.DIAMOND&&t[i+3]===l.DIAMOND&&t[i+6]===l.STICK&&t.filter((o,s)=>s===i||s===i+3||s===i+6?!1:o!==0).length===0)return!0}return!1}},{id:"diamond_pickaxe",name:"Picareta de Diamante",category:"Ferramentas",result:l.DIAMOND_PICKAXE,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.STICK,0,0,l.STICK,0],desc:"3 Diamantes na linha superior e 2 Gravetos no centro vertical (Capaz de minerar Obsidiana).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===0&&t[4]===l.STICK&&t[5]===0&&t[6]===0&&t[7]===l.STICK&&t[8]===0},{id:"diamond_helmet",name:"Capacete de Diamante",category:"Armaduras",result:l.DIAMOND_HELMET,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,0,0,0],desc:"5 Diamantes em formato de arco/U invertido (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"diamond_chestplate",name:"Peitoral de Diamante",category:"Armaduras",result:l.DIAMOND_CHESTPLATE,count:1,gridSize:3,layout:[l.DIAMOND,0,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND],desc:"8 Diamantes em formato de colete com espaço superior central (+8 Defesa máxima).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===0&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===l.DIAMOND&&t[5]===l.DIAMOND&&t[6]===l.DIAMOND&&t[7]===l.DIAMOND&&t[8]===l.DIAMOND},{id:"diamond_leggings",name:"Calças de Diamante",category:"Armaduras",result:l.DIAMOND_LEGGINGS,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,l.DIAMOND,0,l.DIAMOND],desc:"7 Diamantes em formato de calças (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===l.DIAMOND&&t[7]===0&&t[8]===l.DIAMOND},{id:"diamond_boots",name:"Botas de Diamante",category:"Armaduras",result:l.DIAMOND_BOOTS,count:1,gridSize:3,layout:[l.DIAMOND,0,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,0,0,0],desc:"4 Diamantes em formato de botas (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===0&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bed",name:"Cama Confortável",category:"Mobiliário",result:l.BED,count:1,gridSize:3,layout:[0,0,0,l.WOOL,l.WOOL,l.WOOL,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"3 Blocos de Lã de Ovelha sobre 3 Tábuas de Madeira (Permite dormir e pular a noite).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.WOOL&&t[1]===l.WOOL&&t[2]===l.WOOL&&t[3]===l.WOOD_PLANKS&&t[4]===l.WOOD_PLANKS&&t[5]===l.WOOD_PLANKS&&t[6]===0&&t[7]===0&&t[8]===0,r=t[0]===0&&t[1]===0&&t[2]===0&&t[3]===l.WOOL&&t[4]===l.WOOL&&t[5]===l.WOOL&&t[6]===l.WOOD_PLANKS&&t[7]===l.WOOD_PLANKS&&t[8]===l.WOOD_PLANKS;return i||r}}];function bd(t,e,n){for(const i of Ad)if(i.check(t,e,n))return{result:i.result,count:i.count,name:i.name};return null}function Rd(){In||(In=document.createElement("div"),In.id="crafting-table-modal",In.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",In.innerHTML=`
    <div class="glass-panel w-full max-w-xl bg-surface/90 backdrop-blur-xl border border-outline-variant rounded-xl shadow-[0_0_30px_rgba(15,21,14,0.9)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-outline-variant pb-3 mb-6">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">construction</span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase font-bold">Bancada de Trabalho (3×3)</h2>
        </div>
        <div class="flex items-center gap-3">
          <button id="open-recipe-book-table" class="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 px-3 py-1.5 rounded-lg text-xs font-label-caps flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(120,220,119,0.2)] cursor-pointer">
            <span class="material-symbols-outlined text-sm">menu_book</span>
            <span>Receitas</span>
          </button>
          <button id="close-table-btn" class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container cursor-pointer">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <!-- Crafting Matrix & Output Area -->
      <div class="flex items-center justify-center gap-6 mb-6 bg-surface-container/50 p-6 rounded-xl border border-outline-variant">
        <!-- 3×3 Grid -->
        <div id="table-craft-grid" class="grid grid-cols-3 gap-2"></div>

        <!-- Arrow -->
        <div class="flex items-center justify-center">
          <span class="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_8px_rgba(120,220,119,0.6)]">east</span>
        </div>

        <!-- Output Slot -->
        <div class="flex flex-col items-center gap-2">
          <div id="table-output-slot" class="w-20 h-20 rounded-2xl bg-surface-container-lowest border-2 border-primary shadow-[0_0_16px_rgba(120,220,119,0.5)] flex items-center justify-center cursor-pointer relative" title="Clique para coletar o produto forjado"></div>
          <span class="font-label-caps text-[11px] text-primary uppercase font-semibold">PRODUTO</span>
        </div>
      </div>

      <!-- Player Quick Hotbar Transfer -->
      <div class="pt-4 border-t border-outline-variant/60">
        <span class="font-label-caps text-xs text-secondary uppercase font-semibold block mb-2">Seu Inventário (Clique para colocar na bancada)</span>
        <div id="table-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `,document.body.appendChild(In),document.getElementById("close-table-btn").addEventListener("click",qS),document.getElementById("open-recipe-book-table").addEventListener("click",Cd),wd(),Go())}function XS(){In||Rd(),In.style.display="flex",uo(pt.CRAFTING_TABLE),Fi(!0),Go()}function qS(){if(In){In.style.display="none",ri(pt.CRAFTING_TABLE),Fi(!1);for(let t=0;t<9;t++)_n[t]>0&&(tn(_n[t]),_n[t]=0)}}function Go(){const t=document.getElementById("table-craft-grid"),e=document.getElementById("table-output-slot"),n=document.getElementById("table-hotbar-grid");if(!t||!e||!n)return;if(t.innerHTML="",_n.forEach((r,o)=>{const s=document.createElement("div");if(s.className="slot w-14 h-14 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all",r>0){const a=Rt(r,38);s.appendChild(a)}s.addEventListener("click",()=>{_n[o]>0&&(tn(_n[o]),_n[o]=0,Qa(),Go())}),t.appendChild(s)}),e.innerHTML="",An&&An.result>0){const r=Rt(An.result,48);if(e.appendChild(r),An.count>1){const o=document.createElement("span");o.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",o.textContent=An.count,e.appendChild(o)}}e.onclick=()=>{if(An&&An.result>0){for(let r=0;r<An.count;r++)tn(An.result);Ui();for(let r=0;r<9;r++)_n[r]=0;Qa(),Go()}},n.innerHTML="";const i=jo();i.forEach((r,o)=>{const s=document.createElement("div");if(s.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all",r>0){const a=Rt(r,30);s.appendChild(a),s.title=`${hr[r]||"Item"} (Clique para colocar na bancada)`,s.addEventListener("click",()=>{const c=_n.findIndex(u=>u===0);c!==-1&&(_n[c]=r,i[o]=0,Qa(),Go())})}n.appendChild(s)})}function Qa(){An=bd(_n,3,3)}function wd(){Dn||(Dn=document.createElement("div"),Dn.id="recipe-book-modal",Dn.className="fixed inset-0 z-[200] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-lg select-none",Dn.innerHTML=`
    <div class="glass-panel w-full max-w-2xl max-h-[85vh] bg-surface/95 backdrop-blur-2xl border border-primary/40 rounded-xl shadow-[0_0_40px_rgba(120,220,119,0.2)] overflow-hidden flex flex-col p-6 text-on-surface">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-outline-variant pb-3 mb-4">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">auto_stories</span>
          <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tighter uppercase font-bold">Livro de Receitas (Guia de Fabricação)</h2>
        </div>
        <button id="close-recipe-book-btn" class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container cursor-pointer">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="font-label-caps text-xs text-on-surface-variant mb-4">
        Veja como organizar os blocos e materiais na grade para forjar cada item:
      </div>

      <!-- Recipe Cards List -->
      <div id="recipe-cards-container" class="overflow-y-auto max-h-[60vh] pr-2 flex flex-col gap-3"></div>
    </div>
  `,document.body.appendChild(Dn),document.getElementById("close-recipe-book-btn").addEventListener("click",YS),KS())}function KS(){const t=document.getElementById("recipe-cards-container");t&&(t.innerHTML="",Ad.forEach(e=>{const n=document.createElement("div");n.className="flex items-center justify-between bg-surface-container/60 p-3.5 rounded-xl border border-outline-variant hover:border-primary/50 transition-all";const i=document.createElement("div");i.className="flex items-center gap-3.5 max-w-[340px]";const r=document.createElement("div");r.className="w-12 h-12 rounded-xl bg-surface-container-lowest border-2 border-primary flex items-center justify-center relative shrink-0 shadow-[0_0_8px_rgba(120,220,119,0.3)]";const o=Rt(e.result,36);if(r.appendChild(o),e.count>1){const f=document.createElement("span");f.className="absolute -bottom-1 -right-1 bg-primary text-on-primary font-label-caps text-[10px] font-bold px-1 rounded",f.textContent=e.count,r.appendChild(f)}i.appendChild(r);const s=document.createElement("div");s.innerHTML=`
      <div class="font-headline-lg-mobile text-sm font-bold text-on-surface">${e.name}</div>
      <div class="font-label-caps text-[10px] font-semibold text-primary uppercase mb-0.5">${e.category}</div>
      <div class="font-body-md text-xs text-on-surface-variant leading-snug">${e.desc}</div>
    `,i.appendChild(s);const a=document.createElement("div");a.className="flex flex-col items-center gap-1 shrink-0";const c=document.createElement("span");c.className="font-label-caps text-[9px] font-bold text-on-surface-variant uppercase tracking-wider",c.textContent=`Grade ${e.gridSize}×${e.gridSize}`,a.appendChild(c);const u=document.createElement("div"),d=e.gridSize;u.className=`grid grid-cols-${d} gap-1 bg-surface-container-lowest p-1.5 rounded-lg border border-outline-variant`,u.style.gridTemplateColumns=`repeat(${d}, 28px)`,e.layout.forEach(f=>{const h=document.createElement("div");if(h.className="w-7 h-7 rounded bg-surface-container/80 border border-outline-variant/60 flex items-center justify-center",f>0){const m=Rt(f,22);h.appendChild(m),h.title=hr[f]||""}u.appendChild(h)}),a.appendChild(u),n.appendChild(i),n.appendChild(a),t.appendChild(n)}))}function Cd(){Dn||wd(),Dn.style.display="flex",uo(pt.RECIPE_BOOK)}function YS(){Dn&&(Dn.style.display="none",ri(pt.RECIPE_BOOK))}const Zs={[l.IRON_ORE]:{output:l.IRON_INGOT,time:3.5},[l.PORKCHOP]:{output:l.COOKED_PORKCHOP,time:2.5},[l.MUTTON]:{output:l.COOKED_MUTTON,time:2.5},[l.COBBLESTONE]:{output:l.STONE,time:3}},uc={[l.LAVA]:60,[l.COAL_ORE]:16,[l.WOOD_LOG]:6,[l.WOOD_PLANKS]:3,[l.STICK]:1.5},li=new Map;let ln=null,ei=null;function $S(t,e,n){const i=`${t},${e},${n}`;return li.has(i)||li.set(i,{x:t,y:e,z:n,inputItem:0,inputCount:0,fuelItem:0,fuelCount:0,outputItem:0,outputCount:0,burnTimeRemaining:0,maxBurnTime:0,cookProgress:0}),li.get(i)}function ZS(t,e,n){ln=`${t},${e},${n}`,$S(t,e,n),ei||eM(),ei.style.display="flex",uo(pt.FURNACE),Fi(!0),Oi()}function jS(){ei&&(ei.style.display="none",ln=null,ri(pt.FURNACE),Fi(!1))}function JS(){return dd(pt.FURNACE)}function QS(t){for(const[e,n]of li.entries()){const r=n.inputItem>0&&Zs[n.inputItem]?Zs[n.inputItem]:null;n.burnTimeRemaining>0&&(n.burnTimeRemaining=Math.max(0,n.burnTimeRemaining-t)),r&&(n.outputItem===0||n.outputItem===r.output)?(n.burnTimeRemaining<=0&&n.fuelCount>0&&uc[n.fuelItem]&&(n.maxBurnTime=uc[n.fuelItem],n.burnTimeRemaining=n.maxBurnTime,n.fuelCount--,n.fuelCount<=0&&(n.fuelItem=0)),n.burnTimeRemaining>0?(n.cookProgress+=t,n.cookProgress>=r.time&&(n.cookProgress=0,n.inputCount--,n.inputCount<=0&&(n.inputItem=0),n.outputItem=r.output,n.outputCount=(n.outputCount||0)+1)):n.cookProgress=Math.max(0,n.cookProgress-t*.5)):n.cookProgress=0}JS()&&Oi()}function eM(){ei=document.createElement("div"),ei.id="furnace-modal",ei.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ei.innerHTML=`
    <div class="glass-panel w-full max-w-3xl bg-surface/90 backdrop-blur-xl border border-outline-variant rounded-xl shadow-[0_0_30px_rgba(15,21,14,0.9)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <header class="flex justify-between items-center border-b border-outline-variant pb-3 mb-6">
        <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase flex items-center gap-2 font-bold">
          <span class="material-symbols-outlined text-tertiary-container" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
          <span>Industrial Furnace</span>
        </h1>
        <button id="close-furnace-btn" aria-label="Close" class="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container cursor-pointer">
          <span class="material-symbols-outlined">close</span>
        </button>
      </header>

      <!-- Furnace Interface Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <!-- Left Side: Input & Fuel -->
        <div class="md:col-span-5 flex flex-col items-center gap-4 bg-surface-container/50 p-6 rounded-xl border border-outline-variant">
          <!-- Input Slot -->
          <div id="furnace-input-slot" class="w-24 h-24 bg-surface-container-lowest border border-outline-variant hover:border-primary rounded-xl transition-all cursor-pointer flex items-center justify-center relative group shadow-inner" title="Clique para colocar Minério ou Carne">
            <span class="absolute bottom-1.5 font-label-caps text-[10px] text-on-surface-variant uppercase">INPUT</span>
          </div>

          <!-- Fire Progress (Fuel Consumption) -->
          <div class="flex flex-col items-center gap-1">
            <div class="relative w-12 h-12 flex items-center justify-center overflow-hidden">
              <span id="furnace-flame-bg" class="material-symbols-outlined text-outline-variant text-4xl opacity-30 leading-none">local_fire_department</span>
              <div id="furnace-flame-active" class="absolute bottom-0 w-full overflow-hidden transition-all duration-300 ease-linear flex items-end justify-center" style="height: 0%;">
                <span class="material-symbols-outlined text-tertiary-container text-4xl leading-none" style="font-variation-settings: 'FILL' 1; text-shadow: 0 0 12px #ff6c5c;">local_fire_department</span>
              </div>
            </div>
          </div>

          <!-- Fuel Slot -->
          <div id="furnace-fuel-slot" class="w-24 h-24 bg-surface-container-lowest border border-outline-variant hover:border-primary rounded-xl transition-all cursor-pointer flex items-center justify-center relative group shadow-inner" title="Clique para colocar Carvão ou Madeira">
            <span class="absolute bottom-1.5 font-label-caps text-[10px] text-on-surface-variant uppercase">FUEL</span>
          </div>
        </div>

        <!-- Middle: Smelting Progress Arrow -->
        <div class="md:col-span-2 flex justify-center items-center py-4 md:py-0">
          <div class="relative flex items-center w-full max-w-[120px]">
            <div class="w-full h-7 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant relative">
              <!-- Active Progress Fill -->
              <div id="furnace-progress-bar" class="absolute top-[2px] bottom-[2px] left-[2px] bg-primary rounded-full transition-all duration-200 ease-linear shadow-[0_0_8px_rgba(120,220,119,0.5)]" style="width: 0%;"></div>
            </div>
            <!-- Arrow Head Icon over progress -->
            <span class="material-symbols-outlined text-primary absolute left-1/2 -translate-x-1/2 text-3xl drop-shadow-[0_0_6px_rgba(120,220,119,0.8)]" style="font-variation-settings: 'FILL' 1;">arrow_right_alt</span>
          </div>
        </div>

        <!-- Right Side: Output -->
        <div class="md:col-span-5 flex flex-col items-center gap-5 bg-surface-container/40 p-6 rounded-xl border border-outline-variant h-full justify-center">
          <span class="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">Output Forjado</span>
          <!-- Output Slot -->
          <div id="furnace-output-slot" class="w-36 h-36 bg-surface-container-lowest border-2 border-primary rounded-2xl shadow-[0_0_20px_rgba(120,220,119,0.3)] transition-all cursor-pointer flex items-center justify-center relative group bg-gradient-to-b from-surface-container-lowest to-surface-variant/20" title="Clique para coletar o item">
            <span class="absolute bottom-2 font-label-caps text-[11px] text-primary/70 uppercase">PRODUTO</span>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3 w-full mt-2">
            <button id="btn-furnace-stop" class="flex-1 bg-surface-container-high border border-outline-variant hover:border-error text-on-surface hover:text-error font-body-md py-2.5 px-3 rounded-lg transition-all flex justify-center items-center gap-1.5 cursor-pointer text-sm font-semibold">
              <span class="material-symbols-outlined text-lg">stop_circle</span>
              <span>Parar</span>
            </button>
            <button id="btn-furnace-collect" class="flex-1 bg-primary text-on-primary border border-primary-fixed hover:bg-primary-fixed font-body-md py-2.5 px-3 rounded-lg transition-all flex justify-center items-center gap-1.5 shadow-[0_0_15px_rgba(120,220,119,0.4)] cursor-pointer text-sm font-bold">
              <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">download</span>
              <span>Coletar</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Player Hotbar Transfer -->
      <div class="mt-6 pt-4 border-t border-outline-variant/60">
        <div class="flex justify-between items-center mb-2">
          <span class="font-label-caps text-xs text-secondary uppercase font-semibold">Seu Inventário Rápido (Clique para carregar na Fornalha)</span>
        </div>
        <div id="furnace-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `,document.body.appendChild(ei),document.getElementById("close-furnace-btn").addEventListener("click",jS),document.getElementById("btn-furnace-collect").addEventListener("click",gf),document.getElementById("furnace-output-slot").addEventListener("click",gf),document.getElementById("btn-furnace-stop").addEventListener("click",()=>{if(!ln)return;const t=li.get(ln);t&&t.inputItem>0&&(tn(t.inputItem),t.inputCount--,t.inputCount<=0&&(t.inputItem=0),Oi())}),document.getElementById("furnace-input-slot").addEventListener("click",()=>{if(!ln)return;const t=li.get(ln);t&&t.inputItem>0&&tn(t.inputItem)&&(t.inputCount--,t.inputCount<=0&&(t.inputItem=0),Oi())}),document.getElementById("furnace-fuel-slot").addEventListener("click",()=>{if(!ln)return;const t=li.get(ln);t&&t.fuelItem>0&&tn(t.fuelItem)&&(t.fuelCount--,t.fuelCount<=0&&(t.fuelItem=0),Oi())})}function gf(){if(!ln)return;const t=li.get(ln);!t||t.outputItem===0||tn(t.outputItem)&&(Ui(),t.outputCount--,t.outputCount<=0&&(t.outputItem=0),Oi())}function Oi(){if(!ln)return;const t=li.get(ln);if(!t)return;const e=document.getElementById("furnace-input-slot"),n=document.getElementById("furnace-fuel-slot"),i=document.getElementById("furnace-output-slot"),r=document.getElementById("furnace-flame-active"),o=document.getElementById("furnace-progress-bar"),s=document.getElementById("furnace-hotbar-grid");if(!e||!n||!i||!r||!o||!s)return;if(e.innerHTML="",t.inputItem>0){const f=Rt(t.inputItem,48);if(e.appendChild(f),t.inputCount>1){const h=document.createElement("span");h.className="absolute -top-2 -right-2 bg-error text-on-error font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",h.textContent=t.inputCount,e.appendChild(h)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="INPUT",e.appendChild(f)}if(n.innerHTML="",t.fuelItem>0){const f=Rt(t.fuelItem,48);if(n.appendChild(f),t.fuelCount>1){const h=document.createElement("span");h.className="absolute -top-2 -right-2 bg-error text-on-error font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",h.textContent=t.fuelCount,n.appendChild(h)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="FUEL",n.appendChild(f)}const a=t.maxBurnTime>0?Math.min(100,Math.round(t.burnTimeRemaining/t.maxBurnTime*100)):0;r.style.height=`${a}%`;const c=t.inputItem>0?Zs[t.inputItem]:null,u=c?Math.min(100,Math.round(t.cookProgress/c.time*100)):0;if(o.style.width=`${u}%`,i.innerHTML="",t.outputItem>0){const f=Rt(t.outputItem,64);if(i.appendChild(f),t.outputCount>1){const h=document.createElement("span");h.className="absolute -top-3 -right-3 bg-primary text-on-primary font-label-caps text-sm px-2.5 py-1 rounded shadow-[0_0_10px_rgba(120,220,119,0.8)] font-bold",h.textContent=t.outputCount,i.appendChild(h)}}else{const f=document.createElement("span");f.className="font-label-caps text-[11px] text-primary/70 uppercase",f.textContent="PRODUTO",i.appendChild(f)}s.innerHTML="";const d=jo();d.forEach((f,h)=>{const m=document.createElement("div");if(m.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all",f>0){const _=Rt(f,30);m.appendChild(_),m.title=`${hr[f]||"Item"} (Clique para colocar na Fornalha)`,m.addEventListener("click",()=>{Zs[f]?(t.inputItem===0||t.inputItem===f)&&(t.inputItem=f,t.inputCount=(t.inputCount||0)+1,d[h]=0,Oi()):uc[f]&&(t.fuelItem===0||t.fuelItem===f)&&(t.fuelItem=f,t.fuelCount=(t.fuelCount||0)+1,d[h]=0,Oi())})}s.appendChild(m)})}const Pi=new Map;let js=null,ti=null;function tM(t,e,n){const i=`${t},${e},${n}`;return Pi.has(i)||Pi.set(i,new Array(27).fill(0)),Pi.get(i)}function nM(t,e,n){const i=`${t},${e},${n}`;return Pi.has(i)?Pi.get(i).filter(o=>o>0):[]}function iM(t,e,n){const i=`${t},${e},${n}`;Pi.has(i)&&Pi.delete(i)}function rM(t,e,n){js=`${t},${e},${n}`,tM(t,e,n),ti||sM(),ti.style.display="flex",uo(pt.CHEST),Fi(!0),fc()}function oM(){ti&&(ti.style.display="none",js=null,ri(pt.CHEST),Fi(!1))}function sM(){ti=document.createElement("div"),ti.id="chest-modal",ti.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ti.innerHTML=`
    <div class="glass-panel w-full max-w-xl bg-surface/90 backdrop-blur-xl border border-outline-variant rounded-xl shadow-[0_0_30px_rgba(15,21,14,0.9)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-outline-variant pb-3 mb-6">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-tertiary text-2xl" style="font-variation-settings: 'FILL' 1;">inventory_2</span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase font-bold">Baú de Armazenamento (27 slots)</h2>
        </div>
        <button id="close-chest-btn" class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container cursor-pointer">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Chest 27 Storage Slots -->
      <div class="mb-6 bg-surface-container/50 p-4 rounded-xl border border-outline-variant">
        <span class="font-label-caps text-xs text-secondary uppercase font-semibold block mb-2">Conteúdo do Baú (Clique para retirar)</span>
        <div id="chest-grid" class="grid grid-cols-9 gap-2"></div>
      </div>

      <!-- Quick Player Hotbar Transfer -->
      <div class="pt-4 border-t border-outline-variant/60">
        <span class="font-label-caps text-xs text-primary uppercase font-semibold block mb-2">Seu Inventário Rápido (Clique para guardar no baú)</span>
        <div id="chest-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `,document.body.appendChild(ti),document.getElementById("close-chest-btn").addEventListener("click",oM)}function fc(){if(!js)return;const t=Pi.get(js);if(!t)return;const e=document.getElementById("chest-grid"),n=document.getElementById("chest-hotbar-grid");if(!e||!n)return;e.innerHTML="",t.forEach((r,o)=>{const s=document.createElement("div");if(s.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${r>0?"border-tertiary/70 shadow-[0_0_8px_rgba(255,180,169,0.2)]":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all`,r>0){const a=Rt(r,32);s.appendChild(a),s.title=`${hr[r]||"Item"} (Clique para retirar)`}s.addEventListener("click",()=>{r>0&&tn(r)&&(t[o]=0,Ui(),fc())}),e.appendChild(s)}),n.innerHTML="";const i=jo();i.forEach((r,o)=>{const s=document.createElement("div");if(s.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${r>0?"border-primary/60":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all`,r>0){const a=Rt(r,32);s.appendChild(a),s.title=`${hr[r]||"Item"} (Clique para guardar no baú)`,s.addEventListener("click",()=>{const c=t.findIndex(u=>u===0);c!==-1&&(t[c]=r,i[o]=0,Ui(),fc())})}n.appendChild(s)})}let ci=null,ar=null,jt=null,Ve=null,xt=l.WOODEN_SWORD,zo=!1,lr=!1,Rn=0,Co={x:NaN,y:NaN,z:NaN},el=0;const Lc=new Map,aM=new fe(1.002,1.002,1.002),lM=new gv(aM),cM=new sd({color:0,linewidth:2,transparent:!0,opacity:.6}),uM=new fe(1.006,1.006,1.006),Id=new fi({color:1973067,wireframe:!0,transparent:!0,opacity:0});function fM(t){ci=t,ar=new hv(lM,cM),ar.visible=!1,ci.add(ar),jt=new ie(uM,Id),jt.visible=!1,ci.add(jt),window.addEventListener("mousedown",pM),window.addEventListener("mouseup",mM),window.addEventListener("blur",()=>{zo=!1,lr=!1,Rn=0,jt&&(jt.visible=!1)})}function dM(t=.016){if(hM(t),!fo()||Fo()){ar.visible=!1,jt.visible=!1,Ve=null,lr=!1,zo=!1,Rn=0;return}const e=$o();if(!e)return;const n=new N(0,0,-1);n.applyQuaternion(e.quaternion);const i=iS(e.position,n);if(i)if(Ve=i,ar.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),ar.visible=!0,(i.hit.x!==Co.x||i.hit.y!==Co.y||i.hit.z!==Co.z)&&(Co={x:i.hit.x,y:i.hit.y,z:i.hit.z},Rn=0),zo&&lr){const r=Vt(i.hit.x,i.hit.y,i.hit.z);if(r!==l.AIR&&r!==l.WATER){const o=qx(r),s=Kx(r,xt);if(Rn+=t*s/o,el+=t,el>=.22&&(el=0,Cv(r),cc(i.hit.x,i.hit.y,i.hit.z,r)),jt.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),jt.visible=!0,Id.opacity=jh.clamp(Rn*.85,.15,.9),Rn>=1){if(yv(),cc(i.hit.x,i.hit.y,i.hit.z,r),r===l.CHEST&&(nM(i.hit.x,i.hit.y,i.hit.z).forEach(c=>{Dt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,c)}),iM(i.hit.x,i.hit.y,i.hit.z)),r===l.GRASS&&Math.random()<.35&&Dt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT_SEEDS),r===l.WHEAT_STAGE_3)Dt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT),Dt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT_SEEDS),Lc.delete(`${i.hit.x},${i.hit.y},${i.hit.z}`);else{const a=vd(r);a>0&&Dt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,a)}ai(ci,i.hit.x,i.hit.y,i.hit.z,l.AIR),Rn=0,lr=!1,jt.visible=!1}}}else jt.visible=!1,Rn=0;else Ve=null,ar.visible=!1,jt.visible=!1,Rn=0,lr=!1}function hM(t){for(const[e,n]of Lc.entries())n.timer+=t,n.timer>=16&&(n.timer=0,n.stage===1?(n.stage=2,ai(ci,n.x,n.y,n.z,l.WHEAT_STAGE_2)):n.stage===2&&(n.stage=3,ai(ci,n.x,n.y,n.z,l.WHEAT_STAGE_3)))}function pM(t){if(!fo()||Fo())return;const e=$o();if(!e)return;const n=new N(0,0,-1);if(n.applyQuaternion(e.quaternion),t.button===0){zo=!0;const i=WS(e.position,n,3.8);if(i){const r=xt===l.DIAMOND_SWORD,o=xt===l.IRON_SWORD,s=xt===l.STONE_SWORD,a=xt===l.WOODEN_SWORD,c=xt===l.DIAMOND_PICKAXE||xt===l.IRON_PICKAXE||xt===l.STONE_PICKAXE||xt===l.WOODEN_PICKAXE,u=r?9:o?7:s?5:a?4:c?3:2;cd(),Pc(i,u,n);return}if(Ve){if(Vt(Ve.hit.x,Ve.hit.y,Ve.hit.z)===l.TNT){CS(Ve.hit.x,Ve.hit.y,Ve.hit.z);return}lr=!0,Co={x:Ve.hit.x,y:Ve.hit.y,z:Ve.hit.z}}}else if(t.button===2){if(t.preventDefault(),xt===l.BOW&&MM(l.ARROW)){tl(l.ARROW),DS(e.position,n);return}if(kx(xt)){const i=zx(xt);if(i>0){yf(i),Ui(),tl(xt);return}}if(Ve){const i=Vt(Ve.hit.x,Ve.hit.y,Ve.hit.z);if(i===l.BED)if(lS()){Nv(),uS(),yf(4);return}else{Ui();return}if(Hx(xt)&&(i===l.GRASS||i===l.DIRT)){Pv(),ai(ci,Ve.hit.x,Ve.hit.y,Ve.hit.z,l.FARMLAND);return}if(xt===l.WHEAT_SEEDS&&i===l.FARMLAND){const r=Ve.hit.y+1;if(r<64&&Vt(Ve.hit.x,r,Ve.hit.z)===l.AIR){ef(),ai(ci,Ve.hit.x,r,Ve.hit.z,l.WHEAT_STAGE_1),Lc.set(`${Ve.hit.x},${r},${Ve.hit.z}`,{x:Ve.hit.x,y:r,z:Ve.hit.z,stage:1,timer:0}),tl(l.WHEAT_SEEDS);return}}if(i===l.CRAFTING_TABLE){XS();return}if(i===l.FURNACE||i===l.FURNACE_LIT){ZS(Ve.hit.x,Ve.hit.y,Ve.hit.z);return}if(i===l.CHEST){rM(Ve.hit.x,Ve.hit.y,Ve.hit.z);return}if(Gx(xt)){const{prev:r}=Ve;r.y>=0&&r.y<64&&Vt(r.x,r.y,r.z)===l.AIR&&(ef(),ai(ci,r.x,r.y,r.z,xt))}}}}function mM(t){t.button===0&&(zo=!1,lr=!1,Rn=0,jt&&(jt.visible=!1))}function gM(t){xt=t}function _M(){return xt}const _f=[l.WOODEN_SWORD,l.WOODEN_PICKAXE,l.GRASS,l.DIRT,l.WOOD_LOG,l.COBBLESTONE,l.TORCH,l.WATER,0],Ut=new Array(36).fill(0);for(let t=0;t<_f.length;t++)Ut[t]=_f[t];const xn=[0,0,0,0];let Uc=0,bn=null,On=null;function Dd(){On||(On=document.createElement("div"),On.id="inventory-modal",On.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",On.innerHTML=`
    <div class="glass-panel w-full max-w-[840px] flex flex-col rounded-xl overflow-hidden shadow-2xl bg-surface/90 border border-outline-variant text-on-surface">
      <!-- Header -->
      <div class="px-6 py-3.5 border-b border-outline-variant bg-surface-container-high/80 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">backpack</span>
          <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase font-bold">INVENTORY &amp; CRAFTING</h1>
        </div>
        <div class="flex items-center gap-3">
          <button id="open-recipe-book-inv" class="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 px-3 py-1.5 rounded-lg text-xs font-label-caps flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(120,220,119,0.2)] cursor-pointer">
            <span class="material-symbols-outlined text-sm">menu_book</span>
            <span>Receitas</span>
          </button>
          <button id="close-inventory-btn" class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container cursor-pointer">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-6 flex flex-col gap-6">
        <!-- Top Section: Crafting & Character -->
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <!-- 2x2 Crafting Matrix -->
          <div class="flex-1 flex flex-col items-center justify-center bg-surface-container/50 p-4 rounded-xl border border-outline-variant">
            <span class="font-label-caps text-label-caps text-secondary mb-3 self-start font-semibold">Survival Crafting (2×2)</span>
            <div class="flex items-center gap-5">
              <!-- 2x2 Grid -->
              <div id="inv-craft-2x2-grid" class="grid grid-cols-2 gap-2"></div>
              <!-- Arrow -->
              <div class="flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-primary">east</span>
              </div>
              <!-- Output Slot -->
              <div id="inv-craft-2x2-output" class="slot w-16 h-16 rounded-xl active cursor-pointer relative bg-surface-container-lowest border-2 border-primary shadow-[0_0_12px_rgba(120,220,119,0.4)]" title="Clique para coletar o item"></div>
            </div>
          </div>

          <!-- Character & Armor -->
          <div class="flex-1 flex items-center justify-center gap-5 bg-surface-container/50 p-4 rounded-xl border border-outline-variant">
            <!-- Armor Slots -->
            <div class="flex flex-col gap-2">
              <span class="font-label-caps text-[11px] text-secondary font-semibold uppercase">Armadura</span>
              <div id="inv-armor-grid" class="flex flex-col gap-2"></div>
            </div>
            <!-- Player Preview (Silhouette) -->
            <div class="w-32 h-48 bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner">
              <span class="material-symbols-outlined text-6xl text-primary/40">person</span>
              <div class="absolute bottom-2 right-2 slot w-8 h-8 rounded-lg border-dashed border-outline-variant bg-surface-container-low flex items-center justify-center">
                <span class="material-symbols-outlined text-on-surface-variant text-sm">shield</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-outline-variant w-full"></div>

        <!-- Main 27 Inventory Slots -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <span class="font-label-caps text-label-caps text-secondary font-semibold">Mochila / Armazenamento Geral (27 slots)</span>
            <span class="font-label-caps text-[11px] text-on-surface-variant">Clique para equipar / transferir</span>
          </div>
          <div id="inv-storage-grid" class="grid grid-cols-9 gap-2"></div>
        </div>

        <!-- Hotbar -->
        <div class="flex flex-col gap-2 pt-1 border-t border-outline-variant/60">
          <span class="font-label-caps text-label-caps text-primary font-semibold">Barra Rápida (1 a 9)</span>
          <div id="inv-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(On),document.getElementById("close-inventory-btn").addEventListener("click",Od),document.getElementById("open-recipe-book-inv").addEventListener("click",Cd),window.addEventListener("keydown",t=>{t.code==="KeyE"&&vM()}),Bn())}function vM(){Fc()?Od():xM()}function xM(){On||Dd(),On.style.display="flex",uo(pt.INVENTORY),Fi(!0),Bn()}function Od(){if(On){On.style.display="none",ri(pt.INVENTORY),Fi(!1);for(let t=0;t<4;t++)an[t]>0&&(tn(an[t]),an[t]=0);io()}}function Fc(){return dd(pt.INVENTORY)}function jo(){return Ut.slice(0,9)}function SM(t){Uc=t,io()}function Pd(){let t=0;for(let e=0;e<4;e++)xn[e]>0&&(t+=Wx(xn[e]));return t}function tn(t){if(!t||t===0)return!1;for(let e=0;e<9;e++)if(Ut[e]===0)return Ut[e]=t,Bn(),io(),!0;for(let e=9;e<36;e++)if(Ut[e]===0)return Ut[e]=t,Bn(),!0;return!1}function MM(t){return Ut.some(e=>e===t)}function tl(t){const e=Ut.findIndex(n=>n===t);return e!==-1?(Ut[e]=0,Bn(),io(),!0):!1}function io(){const t=Ut[Uc]||0;gM(t);for(let e=0;e<9;e++){const n=document.getElementById(`hotbar-slot-${e}`);if(n&&(n.innerHTML="",Ut[e]>0)){const i=Rt(Ut[e],38);n.appendChild(i)}}}function Bn(){const t=document.getElementById("inv-armor-grid"),e=document.getElementById("inv-craft-2x2-grid"),n=document.getElementById("inv-craft-2x2-output"),i=document.getElementById("inv-storage-grid"),r=document.getElementById("inv-hotbar-grid");if(!t||!e||!n||!i||!r)return;t.innerHTML="";const o=["security","checkroom","accessibility","directions_run"],s=["Capacete","Peitoral","Calças","Botas"];for(let a=0;a<4;a++){const c=document.createElement("div");if(c.className="slot w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all",c.title=`Slot de ${s[a]}`,xn[a]>0){const u=Rt(xn[a],30);c.appendChild(u)}else{const u=document.createElement("span");u.className="material-symbols-outlined text-on-surface-variant text-base opacity-60",u.textContent=o[a],c.appendChild(u)}c.addEventListener("click",()=>{xn[a]>0&&tn(xn[a])&&(xn[a]=0,Bn())}),t.appendChild(c)}e.innerHTML="";for(let a=0;a<4;a++){const c=document.createElement("div");if(c.className="slot w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all",an[a]>0){const u=Rt(an[a],32);c.appendChild(u)}c.addEventListener("click",()=>{an[a]>0&&(tn(an[a]),an[a]=0,dc(),Bn())}),e.appendChild(c)}if(n.innerHTML="",bn&&bn.result>0){const a=Rt(bn.result,40);if(n.appendChild(a),bn.count>1){const c=document.createElement("span");c.className="slot-count font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded shadow",c.textContent=bn.count,n.appendChild(c)}}n.onclick=()=>{if(bn&&bn.result>0){for(let a=0;a<bn.count;a++)tn(bn.result);Ui();for(let a=0;a<4;a++)an[a]=0;dc(),Bn()}},i.innerHTML="";for(let a=9;a<36;a++)vf(a,i);r.innerHTML="";for(let a=0;a<9;a++)vf(a,r,!0,a===Uc)}function vf(t,e,n=!1,i=!1){const r=document.createElement("div");r.className=`slot w-full h-11 md:h-12 rounded-lg bg-surface-container-lowest border ${i?"border-primary shadow-[0_0_10px_rgba(120,220,119,0.5)] active":"border-outline-variant hover:border-primary/80"} flex items-center justify-center cursor-pointer relative transition-all`;const o=Ut[t];if(o>0){const s=Rt(o,34);r.appendChild(s),r.title=hr[o]||"Item"}r.addEventListener("click",()=>{if(o>0&&Vx(o)){let s=-1;if(o===l.IRON_HELMET&&(s=0),o===l.IRON_CHESTPLATE&&(s=1),o===l.IRON_LEGGINGS&&(s=2),o===l.IRON_BOOTS&&(s=3),s!==-1&&xn[s]===0){xn[s]=o,Ut[t]=0,Ui(),Bn(),io();return}}if(o>0){const s=an.findIndex(a=>a===0);s!==-1&&(an[s]=o,Ut[t]=0,dc(),Bn(),io())}}),e.appendChild(r)}function dc(){bn=bd(an,2,2)}const vt=.3,Io=1.8,Js=1.62,xf=28,EM=8.6,yM=5.8,TM=14,Sf=10,AM=3.6;let Mo=0;const mr=20,bM=6,RM=2,wM=5,CM=.5,Mf=3.2;let Ln=null;const ne=new N;let Ae=new N,Ht=mr,jn=!1,Pn=!1,Zn=!1,Do=!1,Oo=0,Po=!1,Qs=0,ea=0,Cs=0,er=0,wn=!1,Eo=0,yo=0;const Nr=[];let Ef=!1;function IM(){Ln=$o(),Ht=mr,Ae.set(0,0,0),Pn=!1;const t=Oc();ne.set(t.x,t.y,t.z),er=ne.y,wn=!1,Ln&&Ln.position.set(ne.x,ne.y+Js,ne.z)}function Nd(){return Ht}function DM(){return mr}function OM(){return Qs}function PM(){return Pn}function Bi(){return ne}function NM(){return{onGround:jn,moving:Po,inWater:Zn,submerged:Do,isFlying:Pn}}function ro(t,e=null){if(Ht<=0)return;const n=Pd(),i=Math.min(.8,n*.04),r=Math.max(1,t*(1-i));Ht=Math.max(0,Ht-r),Qs=1,ea=0,Tv(),e&&(Ae.x+=e.x*5,Ae.z+=e.z*5,Ae.y=3.5)}function LM(t){Ht<=0||(Ht=Math.min(mr,Ht+t))}function yf(t){LM(t)}function Tf(){Ht=mr,Ae.set(0,0,0),jn=!1,Pn=!1,Oo=0,ea=0;const t=Oc();ne.set(t.x,t.y,t.z),er=ne.y,wn=!1,Ln&&Ln.position.set(ne.x,ne.y+Js,ne.z)}function UM(t,e,n){return e<0?!0:Dc(Vt(t,e,n))}function qi(t,e,n){const i=Math.floor(t-vt+.001),r=Math.floor(t+vt-.001),o=Math.floor(e),s=Math.floor(e+Io-.001),a=Math.floor(n-vt+.001),c=Math.floor(n+vt-.001);for(let u=o;u<=s;u++)for(let d=a;d<=c;d++)for(let f=i;f<=r;f++)if(UM(f,u,d))return!0;return!1}function Af(t,e,n){return Vt(t,e,n)===l.WATER}function FM(t){if(Ln||(Ln=$o()),!Ln)return;const e=fo();Qs=Math.max(0,Qs-t*2),Zn=Af(Math.floor(ne.x),Math.floor(ne.y+.2),Math.floor(ne.z)),Do=Af(Math.floor(ne.x),Math.floor(ne.y+Js),Math.floor(ne.z));const n=e&&Tn("Space"),i=performance.now()/1e3;if(n&&!Ef){for(yo=.15,Nr.push(i);Nr.length>0&&i-Nr[0]>.55;)Nr.shift();Nr.length>=3&&(Pn=!Pn,Ae.set(0,0,0),Nr.length=0,wn=!1,Ev(Pn))}Ef=n,yo>0&&(yo-=t),jn?Eo=.12:Eo=Math.max(0,Eo-t);let r=0,o=0;e&&(Tn("KeyW")&&(r+=1),Tn("KeyS")&&(r-=1),Tn("KeyD")&&(o+=1),Tn("KeyA")&&(o-=1));const s=Ln.rotation.y,a=-Math.sin(s),c=-Math.cos(s),u=Math.cos(s),d=-Math.sin(s);let f=0,h=0;if(r!==0||o!==0){f=a*r+u*o,h=c*r+d*o;const m=Math.hypot(f,h);m>.001&&(f/=m,h/=m)}if(Po=r!==0||o!==0,Pn){wn=!1;const m=TM,_=1-Math.exp(-65*t);Ae.x+=(f*(Po?m:0)-Ae.x)*_,Ae.z+=(h*(Po?m:0)-Ae.z)*_;let v=0;e&&(Tn("Space")&&(v+=Sf),(Tn("ShiftLeft")||Tn("ShiftRight"))&&(v-=Sf)),Ae.y+=(v-Ae.y)*_,ne.x+=Ae.x*t,qi(ne.x,ne.y,ne.z)&&(Ae.x>0?ne.x=Math.floor(ne.x+vt)-vt-.001:Ae.x<0&&(ne.x=Math.floor(ne.x-vt)+1+vt+.001),Ae.x=0),ne.z+=Ae.z*t,qi(ne.x,ne.y,ne.z)&&(Ae.z>0?ne.z=Math.floor(ne.z+vt)-vt-.001:Ae.z<0&&(ne.z=Math.floor(ne.z-vt)+1+vt+.001),Ae.z=0),ne.y+=Ae.y*t,qi(ne.x,ne.y,ne.z)&&(Ae.y>0?ne.y=Math.floor(ne.y+Io)-Io-.001:Ae.y<0&&(ne.y=Math.floor(ne.y)+1),Ae.y=0)}else{const m=(jn||Eo>0)&&!Zn;yo>0&&m?(Ae.y=EM,jn=!1,Eo=0,yo=0,er=ne.y,wn=!1,ld()):Zn&&n&&(Ae.y=Math.max(Ae.y,4.5),wn=!1);const _=Zn?xf*.3:xf;Ae.y-=_*t;const v=Zn?8:36;Ae.y<-v&&(Ae.y=-v),Ae.y<0?wn||(wn=!0,er=ne.y):(wn=!1,er=ne.y);const g=(Do?.7:1)*(Zn?AM:yM);if(Po){const E=1-Math.exp(-65*t);Ae.x+=(f*g-Ae.x)*E,Ae.z+=(h*g-Ae.z)*E;const y=Math.hypot(Ae.x,Ae.z);if(jn&&!Zn&&y>1.2&&!Pn){if(Mo+=t,Mo>=.42){Mo=0;const U=Vt(Math.floor(ne.x),Math.floor(ne.y-.2),Math.floor(ne.z));wv(U)}}else Mo=0}else{const E=Math.exp(-14*t);Ae.x*=E,Ae.z*=E,Mo=0}const p=(E,y)=>{if(!jn)return!1;const U=.55;return qi(ne.x+E,ne.y+U,ne.z+y)?!1:(ne.y+=U,!0)};ne.x+=Ae.x*t,qi(ne.x,ne.y,ne.z)&&(p(0,0)||(Ae.x>0?ne.x=Math.floor(ne.x+vt)-vt-.001:Ae.x<0&&(ne.x=Math.floor(ne.x-vt)+1+vt+.001),Ae.x=0)),ne.z+=Ae.z*t,qi(ne.x,ne.y,ne.z)&&(p(0,0)||(Ae.z>0?ne.z=Math.floor(ne.z+vt)-vt-.001:Ae.z<0&&(ne.z=Math.floor(ne.z-vt)+1+vt+.001),Ae.z=0));const b=Ae.y<0;if(ne.y+=Ae.y*t,jn=!1,qi(ne.x,ne.y,ne.z))if(b){jn=!0;const E=Math.floor(ne.y)+1,y=Math.max(0,er-E);if(ne.y=E,Ae.y=0,!Zn&&y>Mf){const U=Math.floor((y-Mf)*1.5);U>0&&ro(U)}wn=!1,er=ne.y}else ne.y=Math.floor(ne.y+Io)-Io-.001,Ae.y=0}ne.y<-10&&Tf(),Ln.position.set(ne.x,ne.y+Js,ne.z),Do&&!Pn?(Oo+=t,Oo>bM&&ro(RM*t)):Oo=Math.max(0,Oo-t*2.5),Ht>0&&Ht<mr&&!Do&&(ea+=t,ea>wM&&(Ht=Math.min(mr,Ht+CM*t))),Ht<=0?(Cs+=t,e&&Tn("Space")&&Cs>.8&&(Tf(),Cs=0)):Cs=0}const bf=document.getElementById("debug-info");let Ai=null,nl=0,Is=0,il=60;const BM={[it.PLAINS]:"Planície Florida",[it.FOREST]:"Floresta Densa",[it.DESERT]:"Deserto de Dunas",[it.SNOWY_MOUNTAINS]:"Picos Nevados",[it.OCEAN]:"Costa / Oceano"};function GM(){if(!Ai){Ai=document.createElement("div"),Ai.id="fly-badge",Object.assign(Ai.style,{position:"absolute",top:"58px",left:"50%",transform:"translateX(-50%)",padding:"4px 14px",borderRadius:"20px",background:"linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))",border:"1px solid rgba(255,255,255,0.4)",boxShadow:"0 0 15px rgba(59,130,246,0.6)",color:"#ffffff",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase",pointerEvents:"none",zIndex:"25",display:"none",backdropFilter:"blur(4px)",animation:"pulse 1.8s infinite"}),Ai.innerHTML='⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';const t=document.getElementById("hud");t&&t.appendChild(Ai)}}function HM(t,e){if(GM(),nl++,Is+=t,Is>=.5&&(il=Math.round(nl/Is),nl=0,Is=0),bf&&e.position){const n=e.position,i=to(Math.floor(n.x),Math.floor(n.z)),r=BM[i]||"Desconhecido",o=cS(),s=no(),a=s?"☀️":"🌙";bf.innerHTML=`<b>FPS:</b> <span style="color:${il>=50?"#4ade80":"#f87171"}">${il}</span><br><b>XYZ:</b> ${n.x.toFixed(1)} / ${n.y.toFixed(1)} / ${n.z.toFixed(1)}<br><b>Bioma:</b> <span style="color:#38bdf8;">${r}</span><br><b>Hora:</b> ${a} <span style="color:#fde047;">${o}</span> (${s?"Dia":"Noite"})`}Ai&&(Ai.style.display=PM()?"block":"none")}let ta=0,hc=null,kr=null,Rf=!1;function kM(){const t=document.getElementById("hud"),e=document.createElement("div");e.id="hotbar-frame",Object.assign(e.style,{position:"absolute",bottom:"14px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"4px",padding:"5px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.85)",border:"2px solid rgba(255,255,255,0.15)",boxShadow:"0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",pointerEvents:"none",zIndex:"20"}),hc=e;for(let n=0;n<9;n++){const i=document.createElement("div");i.className="hotbar-slot",i.dataset.index=n,Object.assign(i.style,{width:"46px",height:"46px",borderRadius:"6px",border:"2px solid rgba(0,0,0,0.55)",background:"rgba(30, 41, 59, 0.9)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"75% 75%",position:"relative",transition:"border-color 0.15s, transform 0.15s, box-shadow 0.15s",cursor:"pointer"});const r=document.createElement("span");Object.assign(r.style,{position:"absolute",bottom:"1px",right:"3px",fontSize:"11px",color:"#fff",textShadow:"0 1px 2px #000",fontWeight:"bold",opacity:"0.85"}),r.textContent=n+1,i.appendChild(r),e.appendChild(i)}t.appendChild(e),kr=document.createElement("div"),kr.id="hotbar-name",Object.assign(kr.style,{position:"absolute",bottom:"72px",left:"50%",transform:"translateX(-50%)",color:"#fff",fontSize:"13px",fontWeight:"600",letterSpacing:"0.5px",padding:"4px 14px",borderRadius:"12px",background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255,255,255,0.18)",backdropFilter:"blur(4px)",pointerEvents:"none",zIndex:"20",textAlign:"center",whiteSpace:"nowrap"}),t.appendChild(kr),Bc()}function VM(){if(!Fc()){for(let t=0;t<9;t++)Tn(`Digit${t+1}`)&&Ld(t);Rf||(Rf=!0,document.addEventListener("wheel",WM,{passive:!1})),Bc()}}let Ds=0;function WM(t){if(!(!fo()||Fc())&&(t.preventDefault(),Ds+=Math.sign(t.deltaY),Math.abs(Ds)>=1)){const e=Ds>0?1:-1;Ds=0;const n=(ta+e+9)%9;Ld(n)}}function Ld(t){ta=t,SM(t),Bc()}function Bc(){if(!hc)return;const t=jo(),e=hc.children;for(let n=0;n<e.length;n++){const i=n===ta,r=t[n]||0;if(e[n].style.borderColor=i?"rgba(74, 222, 128, 0.95)":"rgba(0,0,0,0.55)",e[n].style.transform=i?"scale(1.14) translateY(-3px)":"scale(1)",e[n].style.boxShadow=i?"0 0 14px rgba(74, 222, 128, 0.4), 0 6px 14px rgba(0,0,0,0.6)":"none",e[n].style.zIndex=i?"2":"1",r>0){const o=Rt(r,38);o&&(e[n].style.backgroundImage=`url(${o.toDataURL()})`)}else e[n].style.backgroundImage="none"}if(kr){const n=t[ta]||0;kr.textContent=hr[n]||""}}let pc=[],ks=[],Vr=null,tr=null,To=null;function zM(){const t=document.getElementById("hud");Vr=document.createElement("div"),Vr.id="damage-vignette",Vr.style.opacity="0",t.appendChild(Vr);const e=document.createElement("div");e.style.cssText="position:fixed; bottom:82px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; gap:4px; align-items:flex-start; pointer-events:none; z-index:20;",To=document.createElement("div"),To.id="armor-bar",To.style.cssText="display:flex; gap:3px; font-size:16px; color:#38bdf8; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8));";for(let r=0;r<10;r++){const o=document.createElement("span");o.textContent="🛡️",o.style.cssText="font-size:14px; opacity:0; transition:opacity 0.2s;",ks.push(o),To.appendChild(o)}e.appendChild(To);const n=document.createElement("div");n.id="health-bar",n.style.cssText="display:flex; gap:3px;";const i=DM()/2;for(let r=0;r<i;r++){const o=document.createElement("span");o.className="heart",o.textContent="♥",pc.push(o),n.appendChild(o)}e.appendChild(n),t.appendChild(e),tr=document.createElement("div"),tr.id="death-overlay",tr.innerHTML='<div class="death-title">☠ VOCÊ MORREU</div><div class="death-hint">Pressione ESPAÇO para renascer</div>',tr.style.display="none",t.appendChild(tr)}function XM(){const t=Nd();for(let i=0;i<pc.length;i++){const r=t-i*2;pc[i].className="heart "+(r>=2?"full":r===1?"half":"empty")}const e=Pd(),n=Math.floor(e/2);for(let i=0;i<ks.length;i++)i<n?ks[i].style.opacity="1":ks[i].style.opacity="0";Vr&&(Vr.style.opacity=OM()*.75),tr&&(tr.style.display=t<=0?"flex":"none")}const rl=new Map;function ol(t=14412542){const e=new Ot,n=new He({color:t,depthTest:!0}),i=new ie(new fe(.06,.48,.025),n);i.position.set(0,.24,0),e.add(i);const r=new He({color:4674921,depthTest:!0}),o=new ie(new fe(.2,.035,.045),r);o.position.set(0,.02,0),e.add(o);const s=new He({color:8736014,depthTest:!0}),a=new ie(new fe(.038,.12,.038),s);return a.position.set(0,-.06,0),e.add(a),e}function sl(t=9741240){const e=new Ot,n=new He({color:8736014,depthTest:!0}),i=new ie(new fe(.04,.5,.04),n);i.position.set(0,.1,0),e.add(i);const r=new He({color:t,depthTest:!0}),o=new ie(new fe(.32,.06,.05),r);return o.position.set(0,.32,0),e.add(o),e}function al(t=9741240){const e=new Ot,n=new He({color:8736014,depthTest:!0}),i=new ie(new fe(.04,.48,.04),n);i.position.set(0,.1,0),e.add(i);const r=new He({color:t,depthTest:!0}),o=new ie(new fe(.18,.06,.05),r);return o.position.set(.06,.32,0),e.add(o),e}function qM(){const t=new Ot,e=new He({color:7877903,depthTest:!0}),n=new fi({color:16317180,depthTest:!0}),i=new ie(new fe(.035,.26,.035),e);i.position.set(.06,.14,0),i.rotation.z=-.35,t.add(i);const r=new ie(new fe(.035,.26,.035),e);r.position.set(.06,-.14,0),r.rotation.z=.35,t.add(r);const o=new ie(new fe(.045,.1,.045),e);o.position.set(.11,0,0),t.add(o);const s=new ie(new fe(.012,.48,.012),n);return s.position.set(0,0,0),t.add(s),t}function KM(t,e=.22){if(t===l.IRON_SWORD)return ol(14412542);if(t===l.STONE_SWORD)return ol(9741240);if(t===l.WOODEN_SWORD)return ol(11817737);if(t===l.IRON_PICKAXE)return sl(14412542);if(t===l.STONE_PICKAXE)return sl(6583435);if(t===l.WOODEN_PICKAXE)return sl(11817737);if(t===l.IRON_HOE)return al(14412542);if(t===l.STONE_HOE)return al(6583435);if(t===l.WOODEN_HOE)return al(11817737);if(t===l.BOW)return qM();if(t===l.BREAD){const u=new He({color:11817737,depthTest:!0});return new ie(new fe(e*.9,e*.45,e*.6),u)}if(t===l.WHEAT){const u=new He({color:15381256,depthTest:!0});return new ie(new fe(e*.35,e*.9,e*.35),u)}if(t===l.PORKCHOP){const u=new He({color:16020150,depthTest:!0});return new ie(new fe(e,e*.4,e*.8),u)}if(t===l.COOKED_PORKCHOP){const u=new He({color:10105874,depthTest:!0});return new ie(new fe(e,e*.4,e*.8),u)}if(t===l.ROTTEN_FLESH){const u=new He({color:8702998,depthTest:!0});return new ie(new fe(e,e*.4,e*.8),u)}const n=`${t}:${e}`;if(rl.has(n))return rl.get(n);const i=ua[t];if(!i)return null;const r=new fe(e,e,e),o=r.attributes.uv.array,s=[i.side,i.side,i.top,i.bottom,i.side,i.side];for(let u=0;u<6;u++){const d=Ic(s[u]),f=u*8;o[f]=d.uMin,o[f+1]=d.vMax,o[f+2]=d.uMax,o[f+3]=d.vMax,o[f+4]=d.uMin,o[f+5]=d.vMin,o[f+6]=d.uMax,o[f+7]=d.vMin}r.attributes.uv.needsUpdate=!0,r.computeVertexNormals();const a=new He({map:ca(),depthTest:!0}),c=new ie(r,a);return rl.set(n,c),c}const Ud=.38,Fd=-.28,Bd=-.46,Gd=-.32,Hd=.35,kd=-.12;let Zt=null,ll=null,cl=null,Yn=null,Fr=-1,No=1,YM=5.6,Ki=0;function $M(){const t=$o();if(!t)return;Zt=new Ot;const e=new He({color:13011801,depthTest:!0}),n=new He({color:43176,depthTest:!0});ll=new ie(new fe(.1,.1,.34),e),ll.position.set(0,0,.1),Zt.add(ll),cl=new ie(new fe(.108,.108,.14),n),cl.position.set(0,0,.22),Zt.add(cl),Vd(),Zt.position.set(Ud,Fd,Bd),Zt.rotation.set(Gd,Hd,kd),Zt.renderOrder=999,t.add(Zt),document.addEventListener("mousedown",ZM)}function ZM(t){fo()&&(t.button===0||t.button===2)&&(No=0)}function Vd(){const t=_M();if(t!==Fr&&(Fr=t,Yn&&(Zt.remove(Yn),Yn=null),Fr>0)){const e=KM(Fr,.22);e&&(Yn=e,_d(Fr)?(Yn.position.set(-.02,.14,-.22),Yn.rotation.set(.2,.3,-.4)):(Yn.position.set(-.02,.08,-.16),Yn.rotation.set(.35,.65,-.2)),Zt.add(Yn))}}function jM(t,e){if(!Zt)return;const n=fo();if(Zt.visible=n,!n)return;Vd();let i=0,r=0,o=0,s=0,a=0;if(No<1){const f=_d(Fr)?6.2:YM;No=Math.min(1,No+t*f);const h=Math.sin(No*Math.PI);i=-h*1.05,r=h*.6,o=-h*.4,s=-h*.09,a=-h*.14}const c=NM();let u=0,d=0;c.onGround&&c.moving?(Ki+=t*10,u=Math.cos(Ki*.5)*.025,d=Math.abs(Math.sin(Ki))*.035):c.isFlying&&c.moving?(Ki+=t*6,u=Math.cos(Ki*.5)*.015,d=Math.sin(Ki)*.015):Ki=0,Zt.position.set(Ud+u,Fd+d+s,Bd+a),Zt.rotation.set(Gd+i,Hd+r,kd+o)}const Lo={SUNNY:"sunny",RAIN:"rain"};let ul=Lo.SUNNY,fl=120+Math.random()*60,nr=null,Ho=null;const mc=800;function JM(t){Ho=new fn;const e=new Float32Array(mc*3);for(let i=0;i<mc*3;i+=3)e[i]=(Math.random()-.5)*40,e[i+1]=Math.random()*25,e[i+2]=(Math.random()-.5)*40;Ho.setAttribute("position",new En(e,3));const n=new ad({color:9684477,size:.12,transparent:!0,opacity:0});nr=new pv(Ho,n),t.add(nr)}function QM(t,e){if(fl-=t,fl<=0&&(fl=90+Math.random()*120,ul=ul===Lo.SUNNY?Lo.RAIN:Lo.SUNNY),nr&&e){nr.position.set(e.x,e.y,e.z);const i=ul!==Lo.SUNNY?.65:0;if(nr.material.opacity+=(i-nr.material.opacity)*t*2,nr.material.opacity>.01){const r=Ho.attributes.position.array;for(let o=1;o<mc*3;o+=3)r[o]-=32*t,r[o]<-5&&(r[o]=20+Math.random()*5);Ho.attributes.position.needsUpdate=!0}}}const Wd="voxelcraft_world_save_v03";function eE(){try{const t=Bi(),e=jo(),n=Nd(),i={timestamp:Date.now(),player:{x:t.x,y:t.y,z:t.z,health:n,hotbar:e,armor:[...xn]}};localStorage.setItem(Wd,JSON.stringify(i))}catch(t){console.warn("Could not save world data:",t)}}function tE(){try{const t=localStorage.getItem(Wd);if(!t)return!1;const e=JSON.parse(t);if(!e||!e.player)return!1;const n=Bi();if(n&&e.player.x!==void 0&&n.set(e.player.x,e.player.y,e.player.z),e.player.armor)for(let i=0;i<4;i++)xn[i]=e.player.armor[i]||0;return!0}catch(t){return console.warn("Could not load world data:",t),!1}}Kd(document);console.log("[VoxelCraft] Building texture atlas...");Bx();const wf=qv(),un=Kv();aS(un,Yv());JM(un);pS(un);vS(un);console.log("[VoxelCraft] Generating world biomes & 3D caves...");nS(un);const Gn=Oc(),wi=Wv(window.innerWidth/window.innerHeight,Gn);un.add(wi);Zv(wi);zv(md());kv(md());wS(un);Qi($e.PIG,Gn.x+4,Gn.y,Gn.z+4);Qi($e.SHEEP,Gn.x-3,Gn.y,Gn.z+5);fM(un);Dd();Rd();kM();IM();zM();$M();tE();console.log(`[VoxelCraft v0.4.2] Ready! Spawn at (${Gn.x}, ${Gn.y}, ${Gn.z})`);let dl=0;function nE(t,e){if(Bv()){hf(wi.position,un),pf(t,un,wi,wf);return}Gv()||(FM(t),hf(wi.position,un),pf(t,un,wi,wf),QM(t,Bi()),QS(t),NS(t),xS(t,e),mS(t),dM(t),VM(),XM(),jM(t),Lv(t),HM(t,{position:wi.position}),dl+=t,dl>=30&&(dl=0,eE()))}function iE(){$v(wi)}Xv(nE,iE);
