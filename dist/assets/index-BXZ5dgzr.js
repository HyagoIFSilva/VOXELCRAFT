(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Vs=new Set;function th(t=document){t.addEventListener("keydown",e=>{Vs.add(e.code)}),t.addEventListener("keyup",e=>{Vs.delete(e.code)}),t.addEventListener("contextmenu",e=>{document.pointerLockElement&&e.preventDefault()}),window.addEventListener("blur",()=>{Vs.clear()})}function Rn(t){return Vs.has(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="170",nh=0,eu=1,ih=2,Uf=1,rh=2,ti=3,ki=0,Yt=1,xn=2,Bi=0,Zr=1,tu=2,nu=3,iu=4,oh=5,tr=100,sh=101,ah=102,lh=103,ch=104,uh=200,fh=201,dh=202,hh=203,Ml=204,El=205,ph=206,mh=207,gh=208,_h=209,vh=210,xh=211,Sh=212,Mh=213,Eh=214,yl=0,Tl=1,Al=2,to=3,bl=4,Rl=5,wl=6,Cl=7,yc=0,yh=1,Th=2,Gi=0,Ah=1,bh=2,Rh=3,wh=4,Ch=5,Ih=6,Dh=7,Ff=300,no=301,io=302,Il=303,Dl=304,da=306,Ol=1e3,cr=1001,Pl=1002,on=1003,Oh=1004,cs=1005,kn=1006,ya=1007,ur=1008,_i=1009,Bf=1010,Gf=1011,$o=1012,Tc=1013,_r=1014,ci=1015,ts=1016,Ac=1017,bc=1018,ro=1020,Hf=35902,kf=1021,Vf=1022,Mn=1023,Wf=1024,zf=1025,jr=1026,oo=1027,Xf=1028,Rc=1029,qf=1030,wc=1031,Cc=1033,Ws=33776,zs=33777,Xs=33778,qs=33779,Nl=35840,Ll=35841,Ul=35842,Fl=35843,Bl=36196,Gl=37492,Hl=37496,kl=37808,Vl=37809,Wl=37810,zl=37811,Xl=37812,ql=37813,Kl=37814,Yl=37815,$l=37816,Zl=37817,jl=37818,Jl=37819,Ql=37820,ec=37821,Ks=36492,tc=36494,nc=36495,Kf=36283,ic=36284,rc=36285,oc=36286,Ph=3200,Nh=3201,Yf=0,Lh=1,Ni="",en="srgb",fo="srgb-linear",ha="linear",it="srgb",Tr=7680,ru=519,Uh=512,Fh=513,Bh=514,$f=515,Gh=516,Hh=517,kh=518,Vh=519,ou=35044,su="300 es",ui=2e3,Js=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const Jr=Math.PI/180,Zo=180/Math.PI;function po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function Ic(t,e){return(t%e+e)%e}function Wh(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function zh(t,e,n){return t!==e?(n-t)/(e-t):0}function Wo(t,e,n){return(1-n)*t+n*e}function Xh(t,e,n,i){return Wo(t,e,1-Math.exp(-n*i))}function qh(t,e=1){return e-Math.abs(Ic(t,e*2)-e)}function Kh(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Yh(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function $h(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Zh(t,e){return t+Math.random()*(e-t)}function jh(t){return t*(.5-Math.random())}function Jh(t){t!==void 0&&(au=t);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qh(t){return t*Jr}function ep(t){return t*Zo}function tp(t){return(t&t-1)===0&&t!==0}function np(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ip(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rp(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),d=s((e+i)/2),h=o((e-i)/2),f=s((e-i)/2),m=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*d,l*h,l*f,a*u);break;case"YZY":t.set(l*f,a*d,l*h,a*u);break;case"ZXZ":t.set(l*h,l*f,a*d,a*u);break;case"XZX":t.set(a*d,l*_,l*m,a*u);break;case"YXY":t.set(l*m,a*d,l*_,a*u);break;case"ZYZ":t.set(l*_,l*m,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Bt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const op={DEG2RAD:Jr,RAD2DEG:Zo,generateUUID:po,clamp:kt,euclideanModulo:Ic,mapLinear:Wh,inverseLerp:zh,lerp:Wo,damp:Xh,pingpong:qh,smoothstep:Kh,smootherstep:Yh,randInt:$h,randFloat:Zh,randFloatSpread:jh,seededRandom:Jh,degToRad:Qh,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:rp,normalize:Bt,denormalize:kr};class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,o,s,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=r[0],g=r[3],p=r[6],b=r[1],E=r[4],y=r[7],U=r[2],C=r[5],R=r[8];return o[0]=s*v+a*b+l*U,o[3]=s*g+a*E+l*C,o[6]=s*p+a*y+l*R,o[1]=u*v+d*b+h*U,o[4]=u*g+d*E+h*C,o[7]=u*p+d*y+h*R,o[2]=f*v+m*b+_*U,o[5]=f*g+m*E+_*C,o[8]=f*p+m*y+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=d*s-a*u,f=a*l-d*o,m=u*o-s*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*u-d*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(d*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ta.makeScale(e,n)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ta.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new Be;function Zf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sp(){const t=Qs("canvas");return t.style.display="block",t}const lu={};function Oo(t){t in lu||(lu[t]=!0,console.warn(t))}function ap(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function lp(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cp(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===it&&(t.r=hi(t.r),t.g=hi(t.g),t.b=hi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===it&&(t.r=Qr(t.r),t.g=Qr(t.g),t.b=Qr(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ni?ha:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const cu=[.64,.33,.3,.6,.15,.06],uu=[.2126,.7152,.0722],fu=[.3127,.329],du=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[fo]:{primaries:cu,whitePoint:fu,transfer:ha,toXYZ:du,fromXYZ:hu,luminanceCoefficients:uu,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:cu,whitePoint:fu,transfer:it,toXYZ:du,fromXYZ:hu,luminanceCoefficients:uu,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let Ar;class up{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=Qs("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=hi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hi(n[i]/255)*255):n[i]=hi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fp=0;class jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Aa(r[s].image)):o.push(Aa(r[s]))}else o=Aa(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Aa(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?up.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;class Vt extends ho{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,i=cr,r=cr,o=kn,s=ur,a=Mn,l=_i,u=Vt.DEFAULT_ANISOTROPY,d=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=po(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ol:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ol:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Ff;Vt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,n=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,y=(m+1)/2,U=(p+1)/2,C=(d+f)/4,R=(h+v)/4,L=(_+g)/4;return E>y&&E>U?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=C/i,o=R/i):y>U?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=C/r,o=L/r):U<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),i=R/o,r=L/o),this.set(i,r,o,n),this}let b=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(h-v)/b,this.z=(f-d)/b,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jf(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends hp{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jf extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=o[s+0],m=o[s+1],_=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(h!==v||l!==f||u!==m||d!==_){let g=1-a;const p=l*f+u*m+d*_+h*v,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),C=Math.atan2(U,p*b);g=Math.sin(g*C)/U,a=Math.sin(a*C)/U}const y=a*b;if(l=l*g+f*y,u=u*g+m*y,d=d*g+_*y,h=h*g+v*y,g===1-a){const U=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=U,u*=U,d*=U,h*=U}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=o[s],f=o[s+1],m=o[s+2],_=o[s+3];return e[n]=a*_+d*h+l*m-u*f,e[n+1]=l*_+d*f+u*h-a*m,e[n+2]=u*_+d*m+a*f-l*h,e[n+3]=d*_-a*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),h=a(o/2),f=l(i/2),m=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=f*d*h+u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h+f*m*_;break;case"YZX":this._x=f*d*h+u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h-f*m*_;break;case"XZY":this._x=f*d*h-u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*l,this._y=r*d+s*l+o*a-i*u,this._z=o*d+s*u+i*l-r*a,this._w=s*d-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),d=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*d,this.y=i+l*d+a*u-o*h,this.z=r+l*h+o*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new N,pu=new ns;class is{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,gn):gn.fromBufferAttribute(o,s),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),fs.subVectors(this.max,Eo),br.subVectors(e.a,Eo),Rr.subVectors(e.b,Eo),wr.subVectors(e.c,Eo),Mi.subVectors(Rr,br),Ei.subVectors(wr,Rr),Xi.subVectors(br,wr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Xi.z,Xi.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Xi.z,0,-Xi.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Xi.y,Xi.x,0];return!Ra(n,br,Rr,wr,fs)||(n=[1,0,0,0,1,0,0,0,1],!Ra(n,br,Rr,wr,fs))?!1:(ds.crossVectors(Mi,Ei),n=[ds.x,ds.y,ds.z],Ra(n,br,Rr,wr,fs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new N,new N,new N,new N,new N,new N,new N,new N],gn=new N,us=new is,br=new N,Rr=new N,wr=new N,Mi=new N,Ei=new N,Xi=new N,Eo=new N,fs=new N,ds=new N,qi=new N;function Ra(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){qi.fromArray(t,o);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),u=n.dot(qi),d=i.dot(qi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const mp=new is,yo=new N,wa=new N;class rs{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mp.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(wa)),this.expandByPoint(yo.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new N,Ca=new N,hs=new N,yi=new N,Ia=new N,ps=new N,Da=new N;class Dc{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ca.copy(e).add(n).multiplyScalar(.5),hs.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Ca);const o=e.distanceTo(n)*.5,s=-this.direction.dot(hs),a=yi.dot(this.direction),l=-yi.dot(hs),u=yi.lengthSq(),d=Math.abs(1-s*s);let h,f,m,_;if(d>0)if(h=s*l-a,f=s*a-l,_=o*d,h>=0)if(f>=-_)if(f<=_){const v=1/d;h*=v,f*=v,m=h*(h+s*f+2*a)+f*(s*h+f+2*l)+u}else f=o,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+u;else f=-o,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-s*o+a)),f=h>0?-o:Math.min(Math.max(-o,-l),o),m=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+u):(h=Math.max(0,-(s*o+a)),f=h>0?o:Math.min(Math.max(-o,-l),o),m=-h*h+f*(f+2*l)+u);else f=s>0?-o:o,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ca).addScaledVector(hs,f),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(o=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(o=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,o){Ia.subVectors(n,e),ps.subVectors(i,e),Da.crossVectors(Ia,ps);let s=this.direction.dot(Da),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(ps.crossVectors(yi,ps));if(l<0)return null;const u=a*this.direction.dot(Ia.cross(yi));if(u<0||l+u>s)return null;const d=-a*yi.dot(Da);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,o,s,a,l,u,d,h,f,m,_,v,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,d,h,f,m,_,v,g)}set(e,n,i,r,o,s,a,l,u,d,h,f,m,_,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=m,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),o=1/Cr.setFromMatrixColumn(e,1).length(),s=1/Cr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=s*d,m=s*h,_=a*d,v=a*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=m+_*u,n[5]=f-v*u,n[9]=-a*l,n[2]=v-f*u,n[6]=_+m*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=u*d,v=u*h;n[0]=f+v*a,n[4]=_*a-m,n[8]=s*u,n[1]=s*h,n[5]=s*d,n[9]=-a,n[2]=m*a-_,n[6]=v+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=u*d,v=u*h;n[0]=f-v*a,n[4]=-s*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*d,n[9]=v-f*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*d,m=s*h,_=a*d,v=a*h;n[0]=l*d,n[4]=_*u-m,n[8]=f*u+v,n[1]=l*h,n[5]=v*u+f,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*u,_=a*l,v=a*u;n[0]=l*d,n[4]=v-f*h,n[8]=_*h+m,n[1]=h,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=m*h+_,n[10]=f-v*h}else if(e.order==="XZY"){const f=s*l,m=s*u,_=a*l,v=a*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+v,n[5]=s*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*d,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,n,i){const r=this.elements;return Zt.subVectors(e,n),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Ti.crossVectors(i,Zt),Ti.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Ti.crossVectors(i,Zt)),Ti.normalize(),ms.crossVectors(Zt,Ti),r[0]=Ti.x,r[4]=ms.x,r[8]=Zt.x,r[1]=Ti.y,r[5]=ms.y,r[9]=Zt.y,r[2]=Ti.z,r[6]=ms.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],g=i[10],p=i[14],b=i[3],E=i[7],y=i[11],U=i[15],C=r[0],R=r[4],L=r[8],T=r[12],M=r[1],w=r[5],W=r[9],H=r[13],$=r[2],Z=r[6],q=r[10],j=r[14],k=r[3],re=r[7],he=r[11],Te=r[15];return o[0]=s*C+a*M+l*$+u*k,o[4]=s*R+a*w+l*Z+u*re,o[8]=s*L+a*W+l*q+u*he,o[12]=s*T+a*H+l*j+u*Te,o[1]=d*C+h*M+f*$+m*k,o[5]=d*R+h*w+f*Z+m*re,o[9]=d*L+h*W+f*q+m*he,o[13]=d*T+h*H+f*j+m*Te,o[2]=_*C+v*M+g*$+p*k,o[6]=_*R+v*w+g*Z+p*re,o[10]=_*L+v*W+g*q+p*he,o[14]=_*T+v*H+g*j+p*Te,o[3]=b*C+E*M+y*$+U*k,o[7]=b*R+E*w+y*Z+U*re,o[11]=b*L+E*W+y*q+U*he,o[15]=b*T+E*H+y*j+U*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+o*l*h-r*u*h-o*a*f+i*u*f+r*a*m-i*l*m)+v*(+n*l*m-n*u*f+o*s*f-r*s*m+r*u*d-o*l*d)+g*(+n*u*h-n*a*m-o*s*h+i*s*m+o*a*d-i*u*d)+p*(-r*a*d-n*l*h+n*a*f+r*s*h-i*s*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],b=h*g*u-v*f*u+v*l*m-a*g*m-h*l*p+a*f*p,E=_*f*u-d*g*u-_*l*m+s*g*m+d*l*p-s*f*p,y=d*v*u-_*h*u+_*a*m-s*v*m-d*a*p+s*h*p,U=_*h*l-d*v*l-_*a*f+s*v*f+d*a*g-s*h*g,C=n*b+i*E+r*y+o*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(v*f*o-h*g*o-v*r*m+i*g*m+h*r*p-i*f*p)*R,e[2]=(a*g*o-v*l*o+v*r*u-i*g*u-a*r*p+i*l*p)*R,e[3]=(h*l*o-a*f*o-h*r*u+i*f*u+a*r*m-i*l*m)*R,e[4]=E*R,e[5]=(d*g*o-_*f*o+_*r*m-n*g*m-d*r*p+n*f*p)*R,e[6]=(_*l*o-s*g*o-_*r*u+n*g*u+s*r*p-n*l*p)*R,e[7]=(s*f*o-d*l*o+d*r*u-n*f*u-s*r*m+n*l*m)*R,e[8]=y*R,e[9]=(_*h*o-d*v*o-_*i*m+n*v*m+d*i*p-n*h*p)*R,e[10]=(s*v*o-_*a*o+_*i*u-n*v*u-s*i*p+n*a*p)*R,e[11]=(d*a*o-s*h*o-d*i*u+n*h*u+s*i*m-n*a*m)*R,e[12]=U*R,e[13]=(d*v*r-_*h*r+_*i*f-n*v*f-d*i*g+n*h*g)*R,e[14]=(_*a*r-s*v*r-_*i*l+n*v*l+s*i*g-n*a*g)*R,e[15]=(s*h*r-d*a*r+d*i*l-n*h*l-s*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*s,0,u*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,d=s+s,h=a+a,f=o*u,m=o*d,_=o*h,v=s*d,g=s*h,p=a*h,b=l*u,E=l*d,y=l*h,U=i.x,C=i.y,R=i.z;return r[0]=(1-(v+p))*U,r[1]=(m+y)*U,r[2]=(_-E)*U,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(f+p))*C,r[6]=(g+b)*C,r[7]=0,r[8]=(_+E)*R,r[9]=(g-b)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Cr.set(r[0],r[1],r[2]).length();const s=Cr.set(r[4],r[5],r[6]).length(),a=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const u=1/o,d=1/s,h=1/a;return _n.elements[0]*=u,_n.elements[1]*=u,_n.elements[2]*=u,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,n.setFromRotationMatrix(_n),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=ui){const l=this.elements,u=2*o/(n-e),d=2*o/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===ui)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Js)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ui){const l=this.elements,u=1/(n-e),d=1/(i-r),h=1/(s-o),f=(n+e)*u,m=(i+r)*d;let _,v;if(a===ui)_=(s+o)*h,v=-2*h;else if(a===Js)_=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cr=new N,_n=new ft,gp=new N(0,0,0),_p=new N(1,1,1),Ti=new N,ms=new N,Zt=new N,mu=new ft,gu=new ns;class qn{constructor(e=0,n=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vp=0;const _u=new N,Ir=new ns,jn=new ft,gs=new N,To=new N,xp=new N,Sp=new ns,vu=new N(1,0,0),xu=new N(0,1,0),Su=new N(0,0,1),Mu={type:"added"},Mp={type:"removed"},Dr={type:"childadded",child:null},Oa={type:"childremoved",child:null};class yt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new N,n=new qn,i=new ns,r=new N(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Be}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,n){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gs.copy(e):gs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(To,gs,this.up):jn.lookAt(gs,To,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(jn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mp),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),h=s(e.shapes),f=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DEFAULT_UP=new N(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new N,Jn=new N,Pa=new N,Qn=new N,Or=new N,Pr=new N,Eu=new N,Na=new N,La=new N,Ua=new N,Fa=new mt,Ba=new mt,Ga=new mt;class fn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vn.subVectors(e,n),r.cross(vn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){vn.subVectors(r,n),Jn.subVectors(i,n),Pa.subVectors(e,n);const s=vn.dot(vn),a=vn.dot(Jn),l=vn.dot(Pa),u=Jn.dot(Jn),d=Jn.dot(Pa),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,m=(u*l-a*d)*f,_=(s*d-a*l)*f;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Qn.x),l.addScaledVector(s,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Fa.setScalar(0),Ba.setScalar(0),Ga.setScalar(0),Fa.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,i),Ga.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Fa,o.x),s.addScaledVector(Ba,o.y),s.addScaledVector(Ga,o.z),s}static isFrontFacing(e,n,i,r){return vn.subVectors(i,n),Jn.subVectors(e,n),vn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),vn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Or.subVectors(r,i),Pr.subVectors(o,i),Na.subVectors(e,i);const l=Or.dot(Na),u=Pr.dot(Na);if(l<=0&&u<=0)return n.copy(i);La.subVectors(e,r);const d=Or.dot(La),h=Pr.dot(La);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Or,s);Ua.subVectors(e,o);const m=Or.dot(Ua),_=Pr.dot(Ua);if(_>=0&&m<=_)return n.copy(o);const v=m*u-l*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Pr,a);const g=d*_-m*h;if(g<=0&&h-d>=0&&m-_>=0)return Eu.subVectors(o,r),a=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(Eu,a);const p=1/(g+v+f);return s=v*p,a=f*p,n.copy(i).addScaledVector(Or,s).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Ha(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ce{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Ic(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Ha(s,o,e+1/3),this.g=Ha(s,o,e),this.b=Ha(s,o,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=en){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=en){const i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(kt(Lt.r*255,0,255))*65536+Math.round(kt(Lt.g*255,0,255))*256+Math.round(kt(Lt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,r=Lt.g,o=Lt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const d=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=d<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=en){Ze.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,r=Lt.b;return e!==en?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(_s);const i=Wo(Ai.h,_s.h,n),r=Wo(Ai.s,_s.s,n),o=Wo(Ai.l,_s.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ce;Ce.NAMES=ed;let Ep=0;class Er extends ho{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=po(),this.name="",this.blending=Zr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=El,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vi extends Er{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new N,vs=new tt;class yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ou,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vs.fromBufferAttribute(this,n),vs.applyMatrix3(e),this.setXY(n,vs.x,vs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=kr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=kr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=kr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=kr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=kr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Bt(n,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Bt(n,this.array),i=Bt(i,this.array),r=Bt(r,this.array),o=Bt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ou&&(e.usage=this.usage),e}}class td extends yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class nd extends yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let yp=0;const cn=new ft,ka=new yt,Nr=new N,jt=new is,Ao=new is,Rt=new N;class hn extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?nd:td)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,n,i){return cn.makeTranslation(e,n,i),this.applyMatrix4(cn),this}scale(e,n,i){return cn.makeScale(e,n,i),this.applyMatrix4(cn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new sn(i,3))}else{for(let i=0,r=n.count;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];jt.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(jt.min,Ao.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,Ao.max),jt.expandByPoint(Rt)):(jt.expandByPoint(Ao.min),jt.expandByPoint(Ao.max))}jt.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Rt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Rt.fromBufferAttribute(a,u),l&&(Nr.fromBufferAttribute(e,u),Rt.add(Nr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new N,l[L]=new N;const u=new N,d=new N,h=new N,f=new tt,m=new tt,_=new tt,v=new N,g=new N;function p(L,T,M){u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),f.fromBufferAttribute(o,L),m.fromBufferAttribute(o,T),_.fromBufferAttribute(o,M),d.sub(u),h.sub(u),m.sub(f),_.sub(f);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(w),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(w),a[L].add(v),a[T].add(v),a[M].add(v),l[L].add(g),l[T].add(g),l[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,T=b.length;L<T;++L){const M=b[L],w=M.start,W=M.count;for(let H=w,$=w+W;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new N,y=new N,U=new N,C=new N;function R(L){U.fromBufferAttribute(r,L),C.copy(U);const T=a[L];E.copy(T),E.sub(U.multiplyScalar(U.dot(T))).normalize(),y.crossVectors(C,T);const w=y.dot(l[L])<0?-1:1;s.setXYZW(L,E.x,E.y,E.z,w)}for(let L=0,T=b.length;L<T;++L){const M=b[L],w=M.start,W=M.count;for(let H=w,$=w+W;H<$;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new N,o=new N,s=new N,a=new N,l=new N,u=new N,d=new N,h=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(d),l.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(l.length*d);let m=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*d;for(let p=0;p<d;p++)f[_++]=u[m++]}return new yn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],h=o[u];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new ft,Ki=new Dc,xs=new rs,Tu=new N,Ss=new N,Ms=new N,Es=new N,Va=new N,ys=new N,Au=new N,Ts=new N;class ie extends yt{constructor(e=new hn,n=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ys.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const d=a[l],h=o[l];d!==0&&(Va.fromBufferAttribute(h,e),s?ys.addScaledVector(Va,d):ys.addScaledVector(Va.sub(n),d))}n.add(ys)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(o),Ki.copy(e.ray).recast(e.near),!(xs.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(xs,Tu)===null||Ki.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(yu.copy(o).invert(),Ki.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,h=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=b,U=E;y<U;y+=3){const C=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);r=As(this,p,e,i,u,d,h,C,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const b=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);r=As(this,s,e,i,u,d,h,b,E,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=b,U=E;y<U;y+=3){const C=y,R=y+1,L=y+2;r=As(this,p,e,i,u,d,h,C,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const b=g,E=g+1,y=g+2;r=As(this,s,e,i,u,d,h,b,E,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Tp(t,e,n,i,r,o,s,a){let l;if(e.side===Yt?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===ki,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ts);return u<n.near||u>n.far?null:{distance:u,point:Ts.clone(),object:t}}function As(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Ss),t.getVertexPosition(l,Ms),t.getVertexPosition(u,Es);const d=Tp(t,e,n,i,Ss,Ms,Es,Au);if(d){const h=new N;fn.getBarycoord(Au,Ss,Ms,Es,h),r&&(d.uv=fn.getInterpolatedAttribute(r,a,l,u,h,new tt)),o&&(d.uv1=fn.getInterpolatedAttribute(o,a,l,u,h,new tt)),s&&(d.normal=fn.getInterpolatedAttribute(s,a,l,u,h,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new N,materialIndex:0};fn.getNormal(Ss,Ms,Es,f.normal),d.face=f,d.barycoord=h}return d}class fe extends hn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(h,2));function _(v,g,p,b,E,y,U,C,R,L,T){const M=y/R,w=U/L,W=y/2,H=U/2,$=C/2,Z=R+1,q=L+1;let j=0,k=0;const re=new N;for(let he=0;he<q;he++){const Te=he*w-H;for(let ke=0;ke<Z;ke++){const rt=ke*M-W;re[v]=rt*b,re[g]=Te*E,re[p]=$,u.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[p]=C>0?1:-1,d.push(re.x,re.y,re.z),h.push(ke/R),h.push(1-he/L),j+=1}}for(let he=0;he<L;he++)for(let Te=0;Te<R;Te++){const ke=f+Te+Z*he,rt=f+Te+Z*(he+1),X=f+(Te+1)+Z*(he+1),te=f+(Te+1)+Z*he;l.push(ke,rt,te),l.push(rt,X,te),k+=6}a.addGroup(m,k,T),m+=k,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function Ap(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function id(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const bp={clone:so,merge:Gt};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Er{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class rd extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new N,bu=new tt,Ru=new tt;class un extends rd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,bu,Ru),n.subVectors(Ru,bu)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=-90,Ur=1;class Cp extends yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Lr,Ur,e,n);r.layers=this.layers,this.add(r);const o=new un(Lr,Ur,e,n);o.layers=this.layers,this.add(o);const s=new un(Lr,Ur,e,n);s.layers=this.layers,this.add(s);const a=new un(Lr,Ur,e,n);a.layers=this.layers,this.add(a);const l=new un(Lr,Ur,e,n);l.layers=this.layers,this.add(l);const u=new un(Lr,Ur,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class od extends Vt{constructor(e,n,i,r,o,s,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,o,s,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new od(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fe(5,5,5),o=new Vi({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Bi});o.uniforms.tEquirect.value=n;const s=new ie(r,o),a=n.minFilter;return n.minFilter===ur&&(n.minFilter=kn),new Cp(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Wa=new N,Dp=new N,Op=new Be;class Qi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wa.subVectors(i,n).cross(Dp.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Op.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new rs,bs=new N;class Oc{constructor(e=new Qi,n=new Qi,i=new Qi,r=new Qi,o=new Qi,s=new Qi){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],v=r[10],g=r[11],p=r[12],b=r[13],E=r[14],y=r[15];if(i[0].setComponents(l-o,f-u,g-m,y-p).normalize(),i[1].setComponents(l+o,f+u,g+m,y+p).normalize(),i[2].setComponents(l+s,f+d,g+_,y+b).normalize(),i[3].setComponents(l-s,f-d,g-_,y-b).normalize(),i[4].setComponents(l-a,f-h,g-v,y-E).normalize(),n===ui)i[5].setComponents(l+a,f+h,g+v,y+E).normalize();else if(n===Js)i[5].setComponents(a,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bs.x=r.normal.x>0?e.max.x:e.min.x,bs.y=r.normal.y>0?e.max.y:e.min.y,bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sd(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Pp(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const d=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],v=h[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const v=h[m];t.bufferSubData(u,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class pa extends hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,h=e/a,f=n/l,m=[],_=[],v=[],g=[];for(let p=0;p<d;p++){const b=p*f-s;for(let E=0;E<u;E++){const y=E*h-o;_.push(y,-b,0),v.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+u*p,y=b+u*(p+1),U=b+1+u*(p+1),C=b+1+u*p;m.push(E,y,C),m.push(y,U,C)}this.setIndex(m),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,im=`#define PI 3.141592653589793
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#endif`,Om=`struct PhysicalMaterial {
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
}`,Pm=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
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
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,Z0=`#define LAMBERT
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
}`,j0=`#define MATCAP
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
}`,J0=`#define MATCAP
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
}`,Q0=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,sg=`#define TOON
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
}`,ag=`uniform float size;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Np,alphahash_pars_fragment:Lp,alphamap_fragment:Up,alphamap_pars_fragment:Fp,alphatest_fragment:Bp,alphatest_pars_fragment:Gp,aomap_fragment:Hp,aomap_pars_fragment:kp,batching_pars_vertex:Vp,batching_vertex:Wp,begin_vertex:zp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Kp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Jp,color_fragment:Qp,color_pars_fragment:em,color_pars_vertex:tm,color_vertex:nm,common:im,cube_uv_reflection_fragment:rm,defaultnormal_vertex:om,displacementmap_pars_vertex:sm,displacementmap_vertex:am,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:um,colorspace_pars_fragment:fm,envmap_fragment:dm,envmap_common_pars_fragment:hm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:bm,envmap_vertex:gm,fog_vertex:_m,fog_pars_vertex:vm,fog_fragment:xm,fog_pars_fragment:Sm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:Em,lights_lambert_fragment:ym,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Rm,lights_toon_pars_fragment:wm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Im,lights_physical_fragment:Dm,lights_physical_pars_fragment:Om,lights_fragment_begin:Pm,lights_fragment_maps:Nm,lights_fragment_end:Lm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Gm,map_fragment:Hm,map_pars_fragment:km,map_particle_fragment:Vm,map_particle_pars_fragment:Wm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Xm,morphinstance_vertex:qm,morphcolor_vertex:Km,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:Zm,normal_fragment_begin:jm,normal_fragment_maps:Jm,normal_pars_fragment:Qm,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:s0,opaque_fragment:a0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:d0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:_0,shadowmask_pars_fragment:v0,skinbase_vertex:x0,skinning_pars_vertex:S0,skinning_vertex:M0,skinnormal_vertex:E0,specularmap_fragment:y0,specularmap_pars_fragment:T0,tonemapping_fragment:A0,tonemapping_pars_fragment:b0,transmission_fragment:R0,transmission_pars_fragment:w0,uv_pars_fragment:C0,uv_pars_vertex:I0,uv_vertex:D0,worldpos_vertex:O0,background_vert:P0,background_frag:N0,backgroundCube_vert:L0,backgroundCube_frag:U0,cube_vert:F0,cube_frag:B0,depth_vert:G0,depth_frag:H0,distanceRGBA_vert:k0,distanceRGBA_frag:V0,equirect_vert:W0,equirect_frag:z0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:K0,meshbasic_frag:Y0,meshlambert_vert:$0,meshlambert_frag:Z0,meshmatcap_vert:j0,meshmatcap_frag:J0,meshnormal_vert:Q0,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:sg,points_vert:ag,points_frag:lg,shadow_vert:cg,shadow_frag:ug,sprite_vert:fg,sprite_frag:dg},oe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Nn={basic:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Gt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Gt([oe.lights,oe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Nn.physical={uniforms:Gt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Rs={r:0,b:0,g:0},$i=new qn,hg=new ft;function pg(t,e,n,i,r,o,s){const a=new Ce(0);let l=o===!0?0:1,u,d,h=null,f=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?n:e).get(E)),E}function v(b){let E=!1;const y=_(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),E=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(b,E){const y=_(E);y&&(y.isCubeTexture||y.mapping===da)?(d===void 0&&(d=new ie(new fe(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:so(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),$i.copy(E.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler($i)),d.material.toneMapped=Ze.getTransfer(y.colorSpace)!==it,(h!==y||f!==y.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=y,f=y.version,m=t.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new ie(new pa(2,2),new Vi({name:"BackgroundMaterial",uniforms:so(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function p(b,E){b.getRGB(Rs,id(t)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,E,s)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:g}}function mg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(M,w,W,H,$){let Z=!1;const q=h(H,W,w);o!==q&&(o=q,u(o.object)),Z=m(M,H,W,$),Z&&_(M,H,W,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,y(M,w,W,H),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function h(M,w,W){const H=W.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let Z=$[w.id];Z===void 0&&(Z={},$[w.id]=Z);let q=Z[H];return q===void 0&&(q=f(l()),Z[H]=q),q}function f(M){const w=[],W=[],H=[];for(let $=0;$<n;$++)w[$]=0,W[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,w,W,H){const $=o.attributes,Z=w.attributes;let q=0;const j=W.getAttributes();for(const k in j)if(j[k].location>=0){const he=$[k];let Te=Z[k];if(Te===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),he===void 0||he.attribute!==Te||Te&&he.data!==Te.data)return!0;q++}return o.attributesNum!==q||o.index!==H}function _(M,w,W,H){const $={},Z=w.attributes;let q=0;const j=W.getAttributes();for(const k in j)if(j[k].location>=0){let he=Z[k];he===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Te={};Te.attribute=he,he&&he.data&&(Te.data=he.data),$[k]=Te,q++}o.attributes=$,o.attributesNum=q,o.index=H}function v(){const M=o.newAttributes;for(let w=0,W=M.length;w<W;w++)M[w]=0}function g(M){p(M,0)}function p(M,w){const W=o.newAttributes,H=o.enabledAttributes,$=o.attributeDivisors;W[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),$[M]!==w&&(t.vertexAttribDivisor(M,w),$[M]=w)}function b(){const M=o.newAttributes,w=o.enabledAttributes;for(let W=0,H=w.length;W<H;W++)w[W]!==M[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function E(M,w,W,H,$,Z,q){q===!0?t.vertexAttribIPointer(M,w,W,$,Z):t.vertexAttribPointer(M,w,W,H,$,Z)}function y(M,w,W,H){v();const $=H.attributes,Z=W.getAttributes(),q=w.defaultAttributeValues;for(const j in Z){const k=Z[j];if(k.location>=0){let re=$[j];if(re===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const he=re.normalized,Te=re.itemSize,ke=e.get(re);if(ke===void 0)continue;const rt=ke.buffer,X=ke.type,te=ke.bytesPerElement,Me=X===t.INT||X===t.UNSIGNED_INT||re.gpuType===Tc;if(re.isInterleavedBufferAttribute){const ae=re.data,De=ae.stride,Le=re.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<k.locationSize;We++)p(k.location+We,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<k.locationSize;We++)g(k.location+We);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let We=0;We<k.locationSize;We++)E(k.location+We,Te/k.locationSize,X,he,De*te,(Le+Te/k.locationSize*We)*te,Me)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,re.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<k.locationSize;ae++)g(k.location+ae);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let ae=0;ae<k.locationSize;ae++)E(k.location+ae,Te/k.locationSize,X,he,Te*te,Te/k.locationSize*ae*te,Me)}}else if(q!==void 0){const he=q[j];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(k.location,he);break;case 3:t.vertexAttrib3fv(k.location,he);break;case 4:t.vertexAttrib4fv(k.location,he);break;default:t.vertexAttrib1fv(k.location,he)}}}}b()}function U(){L();for(const M in i){const w=i[M];for(const W in w){const H=w[W];for(const $ in H)d(H[$].object),delete H[$];delete w[W]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const W in w){const H=w[W];for(const $ in H)d(H[$].object),delete H[$];delete w[W]}delete i[M.id]}function R(M){for(const w in i){const W=i[w];if(W[M.id]===void 0)continue;const H=W[M.id];for(const $ in H)d(H[$].object),delete H[$];delete W[M.id]}}function L(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function gg(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(u,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)s(u[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=d[v]*f[v];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _g(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==Mn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==_i&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!L)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:C}}function vg(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Qi,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=t.get(h);if(!r||_===null||_.length===0||o&&!g)o?d(null):u();else{const b=o?0:i,E=b*4;let y=p.clippingState||null;l.value=y,y=d(_,f,E,m);for(let U=0;U!==E;++U)y[U]=n[U];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const p=m+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=m;E!==v;++E,y+=4)s.copy(h[E]).applyMatrix4(b,a),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function xg(t){let e=new WeakMap;function n(s,a){return a===Il?s.mapping=no:a===Dl&&(s.mapping=io),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Il||a===Dl)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new Ip(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class ad extends rd{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zr=4,wu=[.125,.215,.35,.446,.526,.582],nr=20,za=new ad,Cu=new Ce;let Xa=null,qa=0,Ka=0,Ya=!1;const er=(1+Math.sqrt(5))/2,Fr=1/er,Iu=[new N(-er,Fr,0),new N(er,Fr,0),new N(-Fr,0,er),new N(Fr,0,er),new N(0,er,-Fr),new N(0,er,Fr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ka),this._renderer.xr.enabled=Ya,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ts,format:Mn,colorSpace:fo,depthBuffer:!1},r=Ou(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sg(o)),this._blurMaterial=Mg(o,e,n)}return r}_compileMaterial(e){const n=new ie(this._lodPlanes[0],e);this._renderer.compile(n,za)}_sceneToCubeUV(e,n,i,r){const a=new un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Cu),d.toneMapping=Gi,d.autoClear=!1;const m=new vi({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new ie(new fe,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(Cu),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const E=this._cubeSize;ws(r,b*E,p>2?E:0,E,E),d.setRenderTarget(r),v&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ie(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,za)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Iu[(r-o-1)%Iu.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ie(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*nr-1),v=o/_,g=isFinite(o)?1+Math.floor(d*v):nr;g>nr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${nr}`);const p=[];let b=0;for(let R=0;R<nr;++R){const L=R/v,T=Math.exp(-L*L/2);p.push(T),R===0?b+=T:R<g&&(b+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const y=this._sizeLods[r],U=3*y*(r>E-zr?r-E+zr:0),C=4*(this._cubeSize-y);ws(n,U,C,3*y,2*y),l.setRenderTarget(n),l.render(h,za)}}function Sg(t){const e=[],n=[],i=[];let r=t;const o=t-zr+1+wu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-zr?l=wu[s-t+zr-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,v=3,g=2,p=1,b=new Float32Array(v*_*m),E=new Float32Array(g*_*m),y=new Float32Array(p*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,L=C>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(T,v*_*C),E.set(f,g*_*C);const M=[C,C,C,C,C,C];y.set(M,p*_*C)}const U=new hn;U.setAttribute("position",new yn(b,v)),U.setAttribute("uv",new yn(E,g)),U.setAttribute("faceIndex",new yn(y,p)),e.push(U),r>zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ou(t,e,n){const i=new vr(t,e,n);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Mg(t,e,n){const i=new Float32Array(nr),r=new N(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Pu(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Nu(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function Eg(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Il||l===Dl,d=l===no||l===io;if(u||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Du(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Du(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function yg(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Oo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tg(t,e,n,i){const r={},o=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let g=0,p=v.length;g<p;g++)e.update(v[g],t.ARRAY_BUFFER)}}function u(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let E=0,y=b.length;E<y;E+=3){const U=b[E+0],C=b[E+1],R=b[E+2];f.push(U,C,C,R,R,U)}}else if(_!==void 0){const b=_.array;v=_.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const U=E+0,C=E+1,R=E+2;f.push(U,C,C,R,R,U)}}else return;const g=new(Zf(f)?nd:td)(f,1);g.version=v;const p=o.get(h);p&&e.remove(p),o.set(h,g)}function d(h){const f=o.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Ag(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){t.drawElements(i,m,o,f*s),n.update(m,i,1)}function u(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,o,f*s,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,f,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];n.update(g,i,1)}function h(f,m,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)u(f[p]/s,m[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,o,f,0,v,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b]*v[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function bg(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Rg(t,e,n){const i=new WeakMap,r=new mt;function o(s,a,l){const u=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let U=a.attributes.position.count*y,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*C*4*h),L=new Jf(R,U,C,h);L.type=ci,L.needsUpdate=!0;const T=y*4;for(let w=0;w<h;w++){const W=p[w],H=b[w],$=E[w],Z=U*C*4*w;for(let q=0;q<W.count;q++){const j=q*T;_===!0&&(r.fromBufferAttribute(W,q),R[Z+j+0]=r.x,R[Z+j+1]=r.y,R[Z+j+2]=r.z,R[Z+j+3]=0),v===!0&&(r.fromBufferAttribute(H,q),R[Z+j+4]=r.x,R[Z+j+5]=r.y,R[Z+j+6]=r.z,R[Z+j+7]=0),g===!0&&(r.fromBufferAttribute($,q),R[Z+j+8]=r.x,R[Z+j+9]=r.y,R[Z+j+10]=r.z,R[Z+j+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new tt(U,C)},i.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function wg(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class ld extends Vt{constructor(e,n,i,r,o,s,a,l,u,d=jr){if(d!==jr&&d!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===jr&&(i=_r),i===void 0&&d===oo&&(i=ro),super(null,r,o,s,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const cd=new Vt,Lu=new ld(1,1),ud=new Jf,fd=new pp,dd=new od,Uu=[],Fu=[],Bu=new Float32Array(16),Gu=new Float32Array(9),Hu=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Uu[r];if(o===void 0&&(o=new Float32Array(r),Uu[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ma(t,e){let n=Fu[e];n===void 0&&(n=new Int32Array(e),Fu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Cg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ig(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function Dg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function Og(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function Pg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Hu.set(i),t.uniformMatrix2fv(this.addr,!1,Hu),At(n,i)}}function Ng(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Gu.set(i),t.uniformMatrix3fv(this.addr,!1,Gu),At(n,i)}}function Lg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Bu.set(i),t.uniformMatrix4fv(this.addr,!1,Bu),At(n,i)}}function Ug(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Fg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function Bg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function Gg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function Hg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function Vg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function Wg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function zg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Lu.compareFunction=$f,o=Lu):o=cd,n.setTexture2D(e||o,r)}function Xg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fd,r)}function qg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dd,r)}function Kg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ud,r)}function Yg(t){switch(t){case 5126:return Cg;case 35664:return Ig;case 35665:return Dg;case 35666:return Og;case 35674:return Pg;case 35675:return Ng;case 35676:return Lg;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return Gg;case 5125:return Hg;case 36294:return kg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Kg}}function $g(t,e){t.uniform1fv(this.addr,e)}function Zg(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function jg(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function Jg(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function Qg(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function e_(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function t_(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function n_(t,e){t.uniform1iv(this.addr,e)}function i_(t,e){t.uniform2iv(this.addr,e)}function r_(t,e){t.uniform3iv(this.addr,e)}function o_(t,e){t.uniform4iv(this.addr,e)}function s_(t,e){t.uniform1uiv(this.addr,e)}function a_(t,e){t.uniform2uiv(this.addr,e)}function l_(t,e){t.uniform3uiv(this.addr,e)}function c_(t,e){t.uniform4uiv(this.addr,e)}function u_(t,e,n){const i=this.cache,r=e.length,o=ma(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||cd,o[s])}function f_(t,e,n){const i=this.cache,r=e.length,o=ma(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||fd,o[s])}function d_(t,e,n){const i=this.cache,r=e.length,o=ma(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||dd,o[s])}function h_(t,e,n){const i=this.cache,r=e.length,o=ma(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||ud,o[s])}function p_(t){switch(t){case 5126:return $g;case 35664:return Zg;case 35665:return jg;case 35666:return Jg;case 35674:return Qg;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return s_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return h_}}class m_{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Yg(n.type)}}class g_{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p_(n.type)}}class __{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function ku(t,e){t.seq.push(e),t.map[e.id]=e}function v_(t,e,n){const i=t.name,r=i.length;for($a.lastIndex=0;;){const o=$a.exec(i),s=$a.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){ku(n,u===void 0?new m_(a,t,e):new g_(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new __(a),ku(n,h)),n=h}}}class Ys{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);v_(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Vu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const x_=37297;let S_=0;function M_(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Wu=new Be;function E_(t){Ze._getMatrix(Wu,Ze.workingColorSpace,t);const e=`mat3( ${Wu.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case ha:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function zu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+M_(t.getShaderSource(e),s)}else return r}function y_(t,e){const n=E_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function T_(t,e){let n;switch(e){case Ah:n="Linear";break;case bh:n="Reinhard";break;case Rh:n="Cineon";break;case wh:n="ACESFilmic";break;case Ih:n="AgX";break;case Dh:n="Neutral";break;case Ch:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cs=new N;function A_(){Ze.getLuminanceCoefficients(Cs);const t=Cs.x.toFixed(4),e=Cs.y.toFixed(4),n=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function R_(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function w_(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Po(t){return t!==""}function Xu(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(t){return t.replace(C_,D_)}const I_=new Map;function D_(t,e){let n=He[e];if(n===void 0){const i=I_.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sc(n)}const O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(t){return t.replace(O_,P_)}function P_(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Yu(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function N_(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function L_(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function F_(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yc:e="ENVMAP_BLENDING_MULTIPLY";break;case yh:e="ENVMAP_BLENDING_MIX";break;case Th:e="ENVMAP_BLENDING_ADD";break}return e}function B_(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function G_(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=N_(n),u=L_(n),d=U_(n),h=F_(n),f=B_(n),m=b_(n),_=R_(o),v=r.createProgram();let g,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Po).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Po).join(`
`),p.length>0&&(p+=`
`)):(g=[Yu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),p=[Yu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?He.tonemapping_pars_fragment:"",n.toneMapping!==Gi?T_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,y_("linearToOutputTexel",n.outputColorSpace),A_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),s=sc(s),s=Xu(s,n),s=qu(s,n),a=sc(a),a=Xu(a,n),a=qu(a,n),s=Ku(s),a=Ku(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+g+s,y=b+p+a,U=Vu(r,r.VERTEX_SHADER,E),C=Vu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,U),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(w){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(U).trim(),$=r.getShaderInfoLog(C).trim();let Z=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,U,C);else{const j=zu(r,U,"vertex"),k=zu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+j+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||$==="")&&(q=!1);q&&(w.diagnostics={runnable:Z,programLog:W,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:p}})}r.deleteShader(U),r.deleteShader(C),L=new Ys(r,v),T=w_(r,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,x_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=C,this}let H_=0;class k_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new V_(e),n.set(e,i)),i}}class V_{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}}function W_(t,e,n,i,r,o,s){const a=new Qf,l=new k_,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,M,w,W,H){const $=W.fog,Z=H.geometry,q=T.isMeshStandardMaterial?W.environment:null,j=(T.isMeshStandardMaterial?n:e).get(T.envMap||q),k=j&&j.mapping===da?j.image.height:null,re=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Te=he!==void 0?he.length:0;let ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let rt,X,te,Me;if(re){const nt=Nn[re];rt=nt.vertexShader,X=nt.fragmentShader}else rt=T.vertexShader,X=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const ae=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,We=H.isBatchedMesh===!0,dt=!!T.map,Ye=!!T.matcap,vt=!!j,P=!!T.aoMap,an=!!T.lightMap,Xe=!!T.bumpMap,qe=!!T.normalMap,we=!!T.displacementMap,lt=!!T.emissiveMap,Re=!!T.metalnessMap,A=!!T.roughnessMap,x=T.anisotropy>0,F=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,z=T.sheen>0,Ee=T.transmission>0,le=x&&!!T.anisotropyMap,me=F&&!!T.clearcoatMap,$e=F&&!!T.clearcoatNormalMap,Q=F&&!!T.clearcoatRoughnessMap,ge=J&&!!T.iridescenceMap,Ie=J&&!!T.iridescenceThicknessMap,Pe=z&&!!T.sheenColorMap,_e=z&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Ge=!!T.specularColorMap,st=!!T.specularIntensityMap,I=Ee&&!!T.transmissionMap,se=Ee&&!!T.thicknessMap,V=!!T.gradientMap,Y=!!T.alphaMap,de=T.alphaTest>0,ce=!!T.alphaHash,Ue=!!T.extensions;let pt=Gi;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=t.toneMapping);const Pt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:X,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:We,batchingColor:We&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:fo,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:Ye,envMap:vt,envMapMode:vt&&j.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:an,bumpMap:Xe,normalMap:qe,displacementMap:f&&we,emissiveMap:lt,normalMapObjectSpace:qe&&T.normalMapType===Lh,normalMapTangentSpace:qe&&T.normalMapType===Yf,metalnessMap:Re,roughnessMap:A,anisotropy:x,anisotropyMap:le,clearcoat:F,clearcoatMap:me,clearcoatNormalMap:$e,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:Ie,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:Ke,specularColorMap:Ge,specularIntensityMap:st,transmission:Ee,transmissionMap:I,thicknessMap:se,gradientMap:V,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:Y,alphaTest:de,alphaHash:ce,combine:T.combine,mapUv:dt&&v(T.map.channel),aoMapUv:P&&v(T.aoMap.channel),lightMapUv:an&&v(T.lightMap.channel),bumpMapUv:Xe&&v(T.bumpMap.channel),normalMapUv:qe&&v(T.normalMap.channel),displacementMapUv:we&&v(T.displacementMap.channel),emissiveMapUv:lt&&v(T.emissiveMap.channel),metalnessMapUv:Re&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:le&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(T.sheenRoughnessMap.channel),specularMapUv:Ke&&v(T.specularMap.channel),specularColorMapUv:Ge&&v(T.specularColorMap.channel),specularIntensityMapUv:st&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:se&&v(T.thicknessMap.channel),alphaMapUv:Y&&v(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(qe||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(dt||Y),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:De,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===it,decodeVideoTextureEmissive:lt&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===it,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xn,flipSided:T.side===Yt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=u.has(1),Pt.vertexUv2s=u.has(2),Pt.vertexUv3s=u.has(3),u.clear(),Pt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)M.push(w),M.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(b(M,T),E(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=_[T.type];let w;if(M){const W=Nn[M];w=bp.clone(W.uniforms)}else w=T.uniforms;return w}function U(T,M){let w;for(let W=0,H=d.length;W<H;W++){const $=d[W];if($.cacheKey===M){w=$,++w.usedTimes;break}}return w===void 0&&(w=new G_(t,M,T,o),d.push(w)),w}function C(T){if(--T.usedTimes===0){const M=d.indexOf(T);d[M]=d[d.length-1],d.pop(),T.destroy()}}function R(T){l.remove(T)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:d,dispose:L}}function z_(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function X_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $u(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zu(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,f,m,_,v,g){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},t[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,f,m,_,v,g){const p=s(h,f,m,_,v,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function l(h,f,m,_,v,g){const p=s(h,f,m,_,v,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function u(h,f){n.length>1&&n.sort(h||X_),i.length>1&&i.sort(f||$u),r.length>1&&r.sort(f||$u)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:u}}function q_(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Zu,t.set(i,[s])):r>=o.length?(s=new Zu,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function K_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Ce};break;case"SpotLight":n={position:new N,direction:new N,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":n={color:new Ce,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function Y_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $_=0;function Z_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function j_(t){const e=new K_,n=Y_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,o=new ft,s=new ft;function a(u){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,b=0,E=0,y=0,U=0,C=0,R=0;u.sort(Z_);for(let T=0,M=u.length;T<M;T++){const w=u[T],W=w.color,H=w.intensity,$=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=W.r*H,h+=W.g*H,f+=W.b*H;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],H);R++}else if(w.isDirectionalLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,k=n.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=w.shadow.matrix,b++}i.directional[m]=q,m++}else if(w.isSpotLight){const q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(W).multiplyScalar(H),q.distance=$,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[v]=q;const j=w.shadow;if(w.map&&(i.spotLightMap[U]=w.map,U++,j.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[v]=j.matrix,w.castShadow){const k=n.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=Z,y++}v++}else if(w.isRectAreaLight){const q=e.get(w);q.color.copy(W).multiplyScalar(H),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=q,g++}else if(w.isPointLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const j=w.shadow,k=n.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=w.shadow.matrix,E++}i.point[_]=q,_++}else if(w.isHemisphereLight){const q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(H),q.groundColor.copy(w.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==U||L.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.directionalLength=m,L.pointLength=_,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=U,L.numLightProbes=R,i.version=$_++)}function l(u,d){let h=0,f=0,m=0,_=0,v=0;const g=d.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const E=u[p];if(E.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(E.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),s.identity(),o.copy(E.matrixWorld),o.premultiply(g),s.extractRotation(o),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function ju(t){const e=new j_(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function J_(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new ju(t),e.set(r,[a])):o>=s.length?(a=new ju(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Q_ extends Er{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ev extends Er{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
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
}`;function iv(t,e,n){let i=new Oc;const r=new tt,o=new tt,s=new mt,a=new Q_({depthPacking:Nh}),l=new ev,u={},d=n.maxTextureSize,h={[ki]:Yt,[Yt]:ki,[xn]:xn},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:tv,fragmentShader:nv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new hn;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ie(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let p=this.type;this.render=function(C,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Bi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=p!==ti&&this.type===ti,$=p===ti&&this.type!==ti;for(let Z=0,q=C.length;Z<q;Z++){const j=C[Z],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const re=k.getFrameExtents();if(r.multiply(re),o.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/re.x),r.x=o.x*re.x,k.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/re.y),r.y=o.y*re.y,k.mapSize.y=o.y)),k.map===null||H===!0||$===!0){const Te=this.type!==ti?{minFilter:on,magFilter:on}:{};k.map!==null&&k.map.dispose(),k.map=new vr(r.x,r.y,Te),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const he=k.getViewportCount();for(let Te=0;Te<he;Te++){const ke=k.getViewport(Te);s.set(o.x*ke.x,o.y*ke.y,o.x*ke.z,o.y*ke.w),W.viewport(s),k.updateMatrices(j,Te),i=k.getFrustum(),y(R,L,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===ti&&b(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(T,M,w)};function b(C,R){const L=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,L,f,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,L,m,v,null)}function E(C,R,L,T){let M=null;const w=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,H=R.uuid;let $=u[W];$===void 0&&($={},u[W]=$);let Z=$[H];Z===void 0&&(Z=M.clone(),$[H]=Z,R.addEventListener("dispose",U)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,T===ti?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=L}return M}function y(C,R,L,T,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const H=e.update(C),$=C.material;if(Array.isArray($)){const Z=H.groups;for(let q=0,j=Z.length;q<j;q++){const k=Z[q],re=$[k.materialIndex];if(re&&re.visible){const he=E(C,re,T,M);C.onBeforeShadow(t,C,R,L,H,he,k),t.renderBufferDirect(L,null,H,he,C,k),C.onAfterShadow(t,C,R,L,H,he,k)}}}else if($.visible){const Z=E(C,$,T,M);C.onBeforeShadow(t,C,R,L,H,Z,null),t.renderBufferDirect(L,null,H,Z,C,null),C.onAfterShadow(t,C,R,L,H,Z,null)}}const W=C.children;for(let H=0,$=W.length;H<$;H++)y(W[H],R,L,T,M)}function U(C){C.target.removeEventListener("dispose",U);for(const L in u){const T=u[L],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const rv={[yl]:Tl,[Al]:wl,[bl]:Cl,[to]:Rl,[Tl]:yl,[wl]:Al,[Cl]:bl,[Rl]:to};function ov(t,e){function n(){let I=!1;const se=new mt;let V=null;const Y=new mt(0,0,0,0);return{setMask:function(de){V!==de&&!I&&(t.colorMask(de,de,de,de),V=de)},setLocked:function(de){I=de},setClear:function(de,ce,Ue,pt,Pt){Pt===!0&&(de*=pt,ce*=pt,Ue*=pt),se.set(de,ce,Ue,pt),Y.equals(se)===!1&&(t.clearColor(de,ce,Ue,pt),Y.copy(se))},reset:function(){I=!1,V=null,Y.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,V=null,Y=null,de=null;return{setReversed:function(ce){if(se!==ce){const Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const pt=de;de=null,this.setClear(pt)}se=ce},getReversed:function(){return se},setTest:function(ce){ce?ae(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ce){V!==ce&&!I&&(t.depthMask(ce),V=ce)},setFunc:function(ce){if(se&&(ce=rv[ce]),Y!==ce){switch(ce){case yl:t.depthFunc(t.NEVER);break;case Tl:t.depthFunc(t.ALWAYS);break;case Al:t.depthFunc(t.LESS);break;case to:t.depthFunc(t.LEQUAL);break;case bl:t.depthFunc(t.EQUAL);break;case Rl:t.depthFunc(t.GEQUAL);break;case wl:t.depthFunc(t.GREATER);break;case Cl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=ce}},setLocked:function(ce){I=ce},setClear:function(ce){de!==ce&&(se&&(ce=1-ce),t.clearDepth(ce),de=ce)},reset:function(){I=!1,V=null,Y=null,de=null,se=!1}}}function r(){let I=!1,se=null,V=null,Y=null,de=null,ce=null,Ue=null,pt=null,Pt=null;return{setTest:function(nt){I||(nt?ae(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(nt){se!==nt&&!I&&(t.stencilMask(nt),se=nt)},setFunc:function(nt,pn,Kn){(V!==nt||Y!==pn||de!==Kn)&&(t.stencilFunc(nt,pn,Kn),V=nt,Y=pn,de=Kn)},setOp:function(nt,pn,Kn){(ce!==nt||Ue!==pn||pt!==Kn)&&(t.stencilOp(nt,pn,Kn),ce=nt,Ue=pn,pt=Kn)},setLocked:function(nt){I=nt},setClear:function(nt){Pt!==nt&&(t.clearStencil(nt),Pt=nt)},reset:function(){I=!1,se=null,V=null,Y=null,de=null,ce=null,Ue=null,pt=null,Pt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let d={},h={},f=new WeakMap,m=[],_=null,v=!1,g=null,p=null,b=null,E=null,y=null,U=null,C=null,R=new Ce(0,0,0),L=0,T=!1,M=null,w=null,W=null,H=null,$=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=j>=2);let re=null,he={};const Te=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),rt=new mt().fromArray(Te),X=new mt().fromArray(ke);function te(I,se,V,Y){const de=new Uint8Array(4),ce=t.createTexture();t.bindTexture(I,ce),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<V;Ue++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(se+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ce}const Me={};Me[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),s.setFunc(to),Xe(!1),qe(eu),ae(t.CULL_FACE),P(Bi);function ae(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function De(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Le(I,se){return h[I]!==se?(t.bindFramebuffer(I,se),h[I]=se,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=se),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=se),!0):!1}function We(I,se){let V=m,Y=!1;if(I){V=f.get(se),V===void 0&&(V=[],f.set(se,V));const de=I.textures;if(V.length!==de.length||V[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ue=de.length;ce<Ue;ce++)V[ce]=t.COLOR_ATTACHMENT0+ce;V.length=de.length,Y=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,Y=!0);Y&&t.drawBuffers(V)}function dt(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const Ye={[tr]:t.FUNC_ADD,[sh]:t.FUNC_SUBTRACT,[ah]:t.FUNC_REVERSE_SUBTRACT};Ye[lh]=t.MIN,Ye[ch]=t.MAX;const vt={[uh]:t.ZERO,[fh]:t.ONE,[dh]:t.SRC_COLOR,[Ml]:t.SRC_ALPHA,[vh]:t.SRC_ALPHA_SATURATE,[gh]:t.DST_COLOR,[ph]:t.DST_ALPHA,[hh]:t.ONE_MINUS_SRC_COLOR,[El]:t.ONE_MINUS_SRC_ALPHA,[_h]:t.ONE_MINUS_DST_COLOR,[mh]:t.ONE_MINUS_DST_ALPHA,[xh]:t.CONSTANT_COLOR,[Sh]:t.ONE_MINUS_CONSTANT_COLOR,[Mh]:t.CONSTANT_ALPHA,[Eh]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,se,V,Y,de,ce,Ue,pt,Pt,nt){if(I===Bi){v===!0&&(De(t.BLEND),v=!1);return}if(v===!1&&(ae(t.BLEND),v=!0),I!==oh){if(I!==g||nt!==T){if((p!==tr||y!==tr)&&(t.blendEquation(t.FUNC_ADD),p=tr,y=tr),nt)switch(I){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tu:t.blendFunc(t.ONE,t.ONE);break;case nu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,U=null,C=null,R.set(0,0,0),L=0,g=I,T=nt}return}de=de||se,ce=ce||V,Ue=Ue||Y,(se!==p||de!==y)&&(t.blendEquationSeparate(Ye[se],Ye[de]),p=se,y=de),(V!==b||Y!==E||ce!==U||Ue!==C)&&(t.blendFuncSeparate(vt[V],vt[Y],vt[ce],vt[Ue]),b=V,E=Y,U=ce,C=Ue),(pt.equals(R)===!1||Pt!==L)&&(t.blendColor(pt.r,pt.g,pt.b,Pt),R.copy(pt),L=Pt),g=I,T=!1}function an(I,se){I.side===xn?De(t.CULL_FACE):ae(t.CULL_FACE);let V=I.side===Yt;se&&(V=!V),Xe(V),I.blending===Zr&&I.transparent===!1?P(Bi):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const Y=I.stencilWrite;a.setTest(Y),Y&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function qe(I){I!==nh?(ae(t.CULL_FACE),I!==w&&(I===eu?t.cullFace(t.BACK):I===ih?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),w=I}function we(I){I!==W&&(q&&t.lineWidth(I),W=I)}function lt(I,se,V){I?(ae(t.POLYGON_OFFSET_FILL),(H!==se||$!==V)&&(t.polygonOffset(se,V),H=se,$=V)):De(t.POLYGON_OFFSET_FILL)}function Re(I){I?ae(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+Z-1),re!==I&&(t.activeTexture(I),re=I)}function x(I,se,V){V===void 0&&(re===null?V=t.TEXTURE0+Z-1:V=re);let Y=he[V];Y===void 0&&(Y={type:void 0,texture:void 0},he[V]=Y),(Y.type!==I||Y.texture!==se)&&(re!==V&&(t.activeTexture(V),re=V),t.bindTexture(I,se||Me[I]),Y.type=I,Y.texture=se)}function F(){const I=he[re];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){rt.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),rt.copy(I))}function _e(I){X.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Ke(I,se){let V=u.get(se);V===void 0&&(V=new WeakMap,u.set(se,V));let Y=V.get(I);Y===void 0&&(Y=t.getUniformBlockIndex(se,I.name),V.set(I,Y))}function Ge(I,se){const Y=u.get(se).get(I);l.get(se)!==Y&&(t.uniformBlockBinding(se,Y,I.__bindingPointIndex),l.set(se,Y))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},re=null,he={},h={},f=new WeakMap,m=[],_=null,v=!1,g=null,p=null,b=null,E=null,y=null,U=null,C=null,R=new Ce(0,0,0),L=0,T=!1,M=null,w=null,W=null,H=null,$=null,rt.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ae,disable:De,bindFramebuffer:Le,drawBuffers:We,useProgram:dt,setBlending:P,setMaterial:an,setFlipSided:Xe,setCullFace:qe,setLineWidth:we,setPolygonOffset:lt,setScissorTest:Re,activeTexture:A,bindTexture:x,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ge,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:$e,texStorage3D:Q,texSubImage2D:z,texSubImage3D:Ee,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Pe,viewport:_e,reset:st}}function Ju(t,e,n,i){const r=sv(i);switch(n){case kf:return t*e;case Wf:return t*e;case zf:return t*e*2;case Xf:return t*e/r.components*r.byteLength;case Rc:return t*e/r.components*r.byteLength;case qf:return t*e*2/r.components*r.byteLength;case wc:return t*e*2/r.components*r.byteLength;case Vf:return t*e*3/r.components*r.byteLength;case Mn:return t*e*4/r.components*r.byteLength;case Cc:return t*e*4/r.components*r.byteLength;case Ws:case zs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Fl:return Math.max(t,16)*Math.max(e,8)/4;case Nl:case Ul:return Math.max(t,8)*Math.max(e,8)/2;case Bl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ks:case tc:case nc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kf:case ic:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rc:case oc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sv(t){switch(t){case _i:case Bf:return{byteLength:1,components:1};case $o:case Gf:case ts:return{byteLength:2,components:1};case Ac:case bc:return{byteLength:2,components:4};case _r:case Tc:case ci:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function av(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):Qs("canvas")}function v(A,x,F){let K=1;const J=Re(A);if((J.width>F||J.height>F)&&(K=F/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const z=Math.floor(K*J.width),Ee=Math.floor(K*J.height);h===void 0&&(h=_(z,Ee));const le=x?_(z,Ee):h;return le.width=z,le.height=Ee,le.getContext("2d").drawImage(A,0,0,z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+z+"x"+Ee+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){t.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(A,x,F,K,J=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let z=x;if(x===t.RED&&(F===t.FLOAT&&(z=t.R32F),F===t.HALF_FLOAT&&(z=t.R16F),F===t.UNSIGNED_BYTE&&(z=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.R8UI),F===t.UNSIGNED_SHORT&&(z=t.R16UI),F===t.UNSIGNED_INT&&(z=t.R32UI),F===t.BYTE&&(z=t.R8I),F===t.SHORT&&(z=t.R16I),F===t.INT&&(z=t.R32I)),x===t.RG&&(F===t.FLOAT&&(z=t.RG32F),F===t.HALF_FLOAT&&(z=t.RG16F),F===t.UNSIGNED_BYTE&&(z=t.RG8)),x===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.RG8UI),F===t.UNSIGNED_SHORT&&(z=t.RG16UI),F===t.UNSIGNED_INT&&(z=t.RG32UI),F===t.BYTE&&(z=t.RG8I),F===t.SHORT&&(z=t.RG16I),F===t.INT&&(z=t.RG32I)),x===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.RGB8UI),F===t.UNSIGNED_SHORT&&(z=t.RGB16UI),F===t.UNSIGNED_INT&&(z=t.RGB32UI),F===t.BYTE&&(z=t.RGB8I),F===t.SHORT&&(z=t.RGB16I),F===t.INT&&(z=t.RGB32I)),x===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),F===t.UNSIGNED_INT&&(z=t.RGBA32UI),F===t.BYTE&&(z=t.RGBA8I),F===t.SHORT&&(z=t.RGBA16I),F===t.INT&&(z=t.RGBA32I)),x===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),x===t.RGBA){const Ee=J?ha:Ze.getTransfer(K);F===t.FLOAT&&(z=t.RGBA32F),F===t.HALF_FLOAT&&(z=t.RGBA16F),F===t.UNSIGNED_BYTE&&(z=Ee===it?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function y(A,x){let F;return A?x===null||x===_r||x===ro?F=t.DEPTH24_STENCIL8:x===ci?F=t.DEPTH32F_STENCIL8:x===$o&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_r||x===ro?F=t.DEPTH_COMPONENT24:x===ci?F=t.DEPTH_COMPONENT32F:x===$o&&(F=t.DEPTH_COMPONENT16),F}function U(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==kn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&d.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),M(x)}function L(A){const x=i.get(A);if(x.__webglInit===void 0)return;const F=A.source,K=f.get(F);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(A),Object.keys(K).length===0&&f.delete(F)}i.remove(A)}function T(A){const x=i.get(A);t.deleteTexture(x.__webglTexture);const F=A.source,K=f.get(F);delete K[x.__cacheKey],s.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[K][J]);else t.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)t.deleteFramebuffer(x.__webglFramebuffer[K]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let K=0,J=F.length;K<J;K++){const z=i.get(F[K]);z.__webglTexture&&(t.deleteTexture(z.__webglTexture),s.memory.textures--),i.remove(F[K])}i.remove(A)}let w=0;function W(){w=0}function H(){const A=w;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),w+=1,A}function $(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Z(A,x){const F=i.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,A,x);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function q(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function j(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function k(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){te(F,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}const re={[Ol]:t.REPEAT,[cr]:t.CLAMP_TO_EDGE,[Pl]:t.MIRRORED_REPEAT},he={[on]:t.NEAREST,[Oh]:t.NEAREST_MIPMAP_NEAREST,[cs]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[ya]:t.LINEAR_MIPMAP_NEAREST,[ur]:t.LINEAR_MIPMAP_LINEAR},Te={[Uh]:t.NEVER,[Vh]:t.ALWAYS,[Fh]:t.LESS,[$f]:t.LEQUAL,[Bh]:t.EQUAL,[kh]:t.GEQUAL,[Gh]:t.GREATER,[Hh]:t.NOTEQUAL};function ke(A,x){if(x.type===ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===kn||x.magFilter===ya||x.magFilter===cs||x.magFilter===ur||x.minFilter===kn||x.minFilter===ya||x.minFilter===cs||x.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,re[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,re[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,re[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,he[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==cs&&x.minFilter!==ur||x.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function rt(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const z=$(x);if(z!==A.__cacheKey){J[z]===void 0&&(J[z]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[z].usedTimes++;const Ee=J[A.__cacheKey];Ee!==void 0&&(J[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(x)),A.__cacheKey=z,A.__webglTexture=J[z].texture}return F}function X(A,x,F){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const J=rt(A,x),z=x.source;n.bindTexture(K,A.__webglTexture,t.TEXTURE0+F);const Ee=i.get(z);if(z.version!==Ee.__version||J===!0){n.activeTexture(t.TEXTURE0+F);const le=Ze.getPrimaries(Ze.workingColorSpace),me=x.colorSpace===Ni?null:Ze.getPrimaries(x.colorSpace),$e=x.colorSpace===Ni||le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Q=v(x.image,!1,r.maxTextureSize);Q=lt(x,Q);const ge=o.convert(x.format,x.colorSpace),Ie=o.convert(x.type);let Pe=E(x.internalFormat,ge,Ie,x.colorSpace,x.isVideoTexture);ke(K,x);let _e;const Ke=x.mipmaps,Ge=x.isVideoTexture!==!0,st=Ee.__version===void 0||J===!0,I=z.dataReady,se=U(x,Q);if(x.isDepthTexture)Pe=y(x.format===oo,x.type),st&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Pe,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Pe,Q.width,Q.height,0,ge,Ie,null));else if(x.isDataTexture)if(Ke.length>0){Ge&&st&&n.texStorage2D(t.TEXTURE_2D,se,Pe,Ke[0].width,Ke[0].height);for(let V=0,Y=Ke.length;V<Y;V++)_e=Ke[V],Ge?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,V,Pe,_e.width,_e.height,0,ge,Ie,_e.data);x.generateMipmaps=!1}else Ge?(st&&n.texStorage2D(t.TEXTURE_2D,se,Pe,Q.width,Q.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,ge,Ie,Q.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,Q.width,Q.height,0,ge,Ie,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Pe,Ke[0].width,Ke[0].height,Q.depth);for(let V=0,Y=Ke.length;V<Y;V++)if(_e=Ke[V],x.format!==Mn)if(ge!==null)if(Ge){if(I)if(x.layerUpdates.size>0){const de=Ju(_e.width,_e.height,x.format,x.type);for(const ce of x.layerUpdates){const Ue=_e.data.subarray(ce*de/_e.data.BYTES_PER_ELEMENT,(ce+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,ce,_e.width,_e.height,1,ge,Ue)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,Q.depth,ge,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Pe,_e.width,_e.height,Q.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,Q.depth,ge,Ie,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Pe,_e.width,_e.height,Q.depth,0,ge,Ie,_e.data)}else{Ge&&st&&n.texStorage2D(t.TEXTURE_2D,se,Pe,Ke[0].width,Ke[0].height);for(let V=0,Y=Ke.length;V<Y;V++)_e=Ke[V],x.format!==Mn?ge!==null?Ge?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,V,Pe,_e.width,_e.height,0,ge,Ie,_e.data)}else if(x.isDataArrayTexture)if(Ge){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Pe,Q.width,Q.height,Q.depth),I)if(x.layerUpdates.size>0){const V=Ju(Q.width,Q.height,x.format,x.type);for(const Y of x.layerUpdates){const de=Q.data.subarray(Y*V/Q.data.BYTES_PER_ELEMENT,(Y+1)*V/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ge,Ie,de)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ie,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,Q.width,Q.height,Q.depth,0,ge,Ie,Q.data);else if(x.isData3DTexture)Ge?(st&&n.texStorage3D(t.TEXTURE_3D,se,Pe,Q.width,Q.height,Q.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ie,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,Q.width,Q.height,Q.depth,0,ge,Ie,Q.data);else if(x.isFramebufferTexture){if(st)if(Ge)n.texStorage2D(t.TEXTURE_2D,se,Pe,Q.width,Q.height);else{let V=Q.width,Y=Q.height;for(let de=0;de<se;de++)n.texImage2D(t.TEXTURE_2D,de,Pe,V,Y,0,ge,Ie,null),V>>=1,Y>>=1}}else if(Ke.length>0){if(Ge&&st){const V=Re(Ke[0]);n.texStorage2D(t.TEXTURE_2D,se,Pe,V.width,V.height)}for(let V=0,Y=Ke.length;V<Y;V++)_e=Ke[V],Ge?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge,Ie,_e):n.texImage2D(t.TEXTURE_2D,V,Pe,ge,Ie,_e);x.generateMipmaps=!1}else if(Ge){if(st){const V=Re(Q);n.texStorage2D(t.TEXTURE_2D,se,Pe,V.width,V.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ie,Q)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ge,Ie,Q);g(x)&&p(K),Ee.__version=z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function te(A,x,F){if(x.image.length!==6)return;const K=rt(A,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const z=i.get(J);if(J.version!==z.__version||K===!0){n.activeTexture(t.TEXTURE0+F);const Ee=Ze.getPrimaries(Ze.workingColorSpace),le=x.colorSpace===Ni?null:Ze.getPrimaries(x.colorSpace),me=x.colorSpace===Ni||Ee===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let Y=0;Y<6;Y++)!$e&&!Q?ge[Y]=v(x.image[Y],!0,r.maxCubemapSize):ge[Y]=Q?x.image[Y].image:x.image[Y],ge[Y]=lt(x,ge[Y]);const Ie=ge[0],Pe=o.convert(x.format,x.colorSpace),_e=o.convert(x.type),Ke=E(x.internalFormat,Pe,_e,x.colorSpace),Ge=x.isVideoTexture!==!0,st=z.__version===void 0||K===!0,I=J.dataReady;let se=U(x,Ie);ke(t.TEXTURE_CUBE_MAP,x);let V;if($e){Ge&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ke,Ie.width,Ie.height);for(let Y=0;Y<6;Y++){V=ge[Y].mipmaps;for(let de=0;de<V.length;de++){const ce=V[de];x.format!==Mn?Pe!==null?Ge?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ce.width,ce.height,Pe,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ke,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ce.width,ce.height,Pe,_e,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ke,ce.width,ce.height,0,Pe,_e,ce.data)}}}else{if(V=x.mipmaps,Ge&&st){V.length>0&&se++;const Y=Re(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ke,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ge[Y].width,ge[Y].height,Pe,_e,ge[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ke,ge[Y].width,ge[Y].height,0,Pe,_e,ge[Y].data);for(let de=0;de<V.length;de++){const Ue=V[de].image[Y].image;Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Ue.width,Ue.height,Pe,_e,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ke,Ue.width,Ue.height,0,Pe,_e,Ue.data)}}else{Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,_e,ge[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ke,Pe,_e,ge[Y]);for(let de=0;de<V.length;de++){const ce=V[de];Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Pe,_e,ce.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ke,Pe,_e,ce.image[Y])}}}g(x)&&p(t.TEXTURE_CUBE_MAP),z.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Me(A,x,F,K,J,z){const Ee=o.convert(F.format,F.colorSpace),le=o.convert(F.type),me=E(F.internalFormat,Ee,le,F.colorSpace),$e=i.get(x),Q=i.get(F);if(Q.__renderTarget=x,!$e.__hasExternalTextures){const ge=Math.max(1,x.width>>z),Ie=Math.max(1,x.height>>z);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,z,me,ge,Ie,x.depth,0,Ee,le,null):n.texImage2D(J,z,me,ge,Ie,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),qe(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,J,Q.__webglTexture,0,Xe(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,J,Q.__webglTexture,z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(A,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,z=y(x.stencilBuffer,J),Ee=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Xe(x);qe(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,z,x.width,x.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,A)}else{const K=x.textures;for(let J=0;J<K.length;J++){const z=K[J],Ee=o.convert(z.format,z.colorSpace),le=o.convert(z.type),me=E(z.internalFormat,Ee,le,z.colorSpace),$e=Xe(x);F&&qe(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,me,x.width,x.height):qe(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,me,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,me,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const J=K.__webglTexture,z=Xe(x);if(x.depthTexture.format===jr)qe(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(x.depthTexture.format===oo)qe(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(A){const x=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),ae(x.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,z),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ae(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(A,x,F){const K=i.get(A);x!==void 0&&Me(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Le(A)}function dt(A){const x=A.texture,F=i.get(A),K=i.get(x);A.addEventListener("dispose",R);const J=A.textures,z=A.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,s.memory.textures++),z){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let me=0;me<x.mipmaps.length;me++)F.__webglFramebuffer[le][me]=t.createFramebuffer()}else F.__webglFramebuffer[le]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)F.__webglFramebuffer[le]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let le=0,me=J.length;le<me;le++){const $e=i.get(J[le]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&qe(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const me=J[le];F.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const $e=o.convert(me.format,me.colorSpace),Q=o.convert(me.type),ge=E(me.internalFormat,$e,Q,me.colorSpace,A.isXRRenderTarget===!0),Ie=Xe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,F.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(z){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ke(t.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(F.__webglFramebuffer[le][me],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else Me(F.__webglFramebuffer[le],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let le=0,me=J.length;le<me;le++){const $e=J[le],Q=i.get($e);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),ke(t.TEXTURE_2D,$e),Me(F.__webglFramebuffer,A,$e,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),g($e)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),ke(le,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(F.__webglFramebuffer[me],A,x,t.COLOR_ATTACHMENT0,le,me);else Me(F.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,le,0);g(x)&&p(le),n.unbindTexture()}A.depthBuffer&&Le(A)}function Ye(A){const x=A.textures;for(let F=0,K=x.length;F<K;F++){const J=x[F];if(g(J)){const z=b(A),Ee=i.get(J).__webglTexture;n.bindTexture(z,Ee),p(z),n.unbindTexture()}}}const vt=[],P=[];function an(A){if(A.samples>0){if(qe(A)===!1){const x=A.textures,F=A.width,K=A.height;let J=t.COLOR_BUFFER_BIT;const z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(A),le=x.length>1;if(le)for(let me=0;me<x.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<x.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const $e=i.get(x[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,F,K,0,0,F,K,J,t.NEAREST),l===!0&&(vt.length=0,P.length=0,vt.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(z),P.push(z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<x.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const $e=i.get(x[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Xe(A){return Math.min(r.maxSamples,A.samples)}function qe(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(A){const x=s.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function lt(A,x){const F=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==fo&&F!==Ni&&(Ze.getTransfer(F)===it?(K!==Mn||J!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=qe}function lv(t,e){function n(i,r=Ni){let o;const s=Ze.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===Ac)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bf)return t.BYTE;if(i===Gf)return t.SHORT;if(i===$o)return t.UNSIGNED_SHORT;if(i===Tc)return t.INT;if(i===_r)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===ts)return t.HALF_FLOAT;if(i===kf)return t.ALPHA;if(i===Vf)return t.RGB;if(i===Mn)return t.RGBA;if(i===Wf)return t.LUMINANCE;if(i===zf)return t.LUMINANCE_ALPHA;if(i===jr)return t.DEPTH_COMPONENT;if(i===oo)return t.DEPTH_STENCIL;if(i===Xf)return t.RED;if(i===Rc)return t.RED_INTEGER;if(i===qf)return t.RG;if(i===wc)return t.RG_INTEGER;if(i===Cc)return t.RGBA_INTEGER;if(i===Ws||i===zs||i===Xs||i===qs)if(s===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ws)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ws)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ll||i===Ul||i===Fl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===Gl||i===Hl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Bl||i===Gl)return s===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Hl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kl||i===Vl||i===Wl||i===zl||i===Xl||i===ql||i===Kl||i===Yl||i===$l||i===Zl||i===jl||i===Jl||i===Ql||i===ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===kl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jl)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ks||i===tc||i===nc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ks)return s===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kf||i===ic||i===rc||i===oc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ks)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class cv extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ft extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
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

}`;class hv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Vt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vi({vertexShader:fv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ie(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends ho{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,d=null,h=null,f=null,m=null,_=null;const v=new hv,g=n.getContextAttributes();let p=null,b=null;const E=[],y=[],U=new tt;let C=null;const R=new un;R.viewport=new mt;const L=new un;L.viewport=new mt;const T=[R,L],M=new cv;let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=E[X];return te===void 0&&(te=new Za,E[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=E[X];return te===void 0&&(te=new Za,E[X]=te),te.getGripSpace()},this.getHand=function(X){let te=E[X];return te===void 0&&(te=new Za,E[X]=te),te.getHandSpace()};function H(X){const te=y.indexOf(X.inputSource);if(te===-1)return;const Me=E[te];Me!==void 0&&(Me.update(X.inputSource,X.frame,u||s),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<E.length;X++){const te=y[X];te!==null&&(y[X]=null,E[X].disconnect(te))}w=null,W=null,v.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,b=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new vr(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,Me=null,ae=null;g.depth&&(ae=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?oo:jr,Me=g.stencil?ro:_r);const De={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:o};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new vr(f.textureWidth,f.textureHeight,{format:Mn,type:_i,depthTexture:new ld(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(X){for(let te=0;te<X.removed.length;te++){const Me=X.removed[te],ae=y.indexOf(Me);ae>=0&&(y[ae]=null,E[ae].disconnect(Me))}for(let te=0;te<X.added.length;te++){const Me=X.added[te];let ae=y.indexOf(Me);if(ae===-1){for(let Le=0;Le<E.length;Le++)if(Le>=y.length){y.push(Me),ae=Le;break}else if(y[Le]===null){y[Le]=Me,ae=Le;break}if(ae===-1)break}const De=E[ae];De&&De.connect(Me)}}const q=new N,j=new N;function k(X,te,Me){q.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);const ae=q.distanceTo(j),De=te.projectionMatrix.elements,Le=Me.projectionMatrix.elements,We=De[14]/(De[10]-1),dt=De[14]/(De[10]+1),Ye=(De[9]+1)/De[5],vt=(De[9]-1)/De[5],P=(De[8]-1)/De[0],an=(Le[8]+1)/Le[0],Xe=We*P,qe=We*an,we=ae/(-P+an),lt=we*-P;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(lt),X.translateZ(we),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Re=We+we,A=dt+we,x=Xe-lt,F=qe+(ae-lt),K=Ye*dt/A*Re,J=vt*dt/A*Re;X.projectionMatrix.makePerspective(x,F,K,J,Re,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function re(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,Me=X.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),M.near=L.near=R.near=te,M.far=L.far=R.far=Me,(w!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,W=M.far),R.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ae=X.parent,De=M.cameras;re(M,ae);for(let Le=0;Le<De.length;Le++)re(De[Le],ae);De.length===2?k(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),he(X,M,ae)};function he(X,te,Me){Me===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Te=null;function ke(X,te){if(d=te.getViewerPose(u||s),_=te,d!==null){const Me=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ae=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Le=0;Le<Me.length;Le++){const We=Me[Le];let dt=null;if(m!==null)dt=m.getViewport(We);else{const vt=h.getViewSubImage(f,We);dt=vt.viewport,Le===0&&(e.setRenderTargetTextures(b,vt.colorTexture,f.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(b))}let Ye=T[Le];Ye===void 0&&(Ye=new un,Ye.layers.enable(Le),Ye.viewport=new mt,T[Le]=Ye),Ye.matrix.fromArray(We.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(We.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(dt.x,dt.y,dt.width,dt.height),Le===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Ye)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Le=h.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,r.renderState)}}for(let Me=0;Me<E.length;Me++){const ae=y[Me],De=E[Me];ae!==null&&De!==void 0&&De.update(ae,te,u||s)}Te&&Te(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const rt=new sd;rt.setAnimationLoop(ke),this.setAnimationLoop=function(X){Te=X},this.dispose=function(){}}}const Zi=new qn,mv=new ft;function gv(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,id(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),h(g,p)):p.isMeshPhongMaterial?(o(g,p),d(g,p)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,E):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,y=b.envMapRotation;E&&(g.envMap.value=E,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Zi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=E*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _v(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const y=E.program;i.uniformBlockBinding(b,y)}function u(b,E){let y=r[b.id];y===void 0&&(_(b),y=d(b),r[b.id]=y,b.addEventListener("dispose",g));const U=E.program;i.updateUBOMapping(b,U);const C=e.render.frame;o[b.id]!==C&&(f(b),o[b.id]=C)}function d(b){const E=h();b.__bindingPointIndex=E;const y=t.createBuffer(),U=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,U,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function h(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=r[b.id],y=b.uniforms,U=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let C=0,R=y.length;C<R;C++){const L=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,M=L.length;T<M;T++){const w=L[T];if(m(w,C,T,U)===!0){const W=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let Z=0;Z<H.length;Z++){const q=H[Z],j=v(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,W+$,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,E,y,U){const C=b.value,R=E+"_"+y;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const L=U[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return U[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(b){const E=b.uniforms;let y=0;const U=16;for(let R=0,L=E.length;R<L;R++){const T=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,w=T.length;M<w;M++){const W=T[M],H=Array.isArray(W.value)?W.value:[W.value];for(let $=0,Z=H.length;$<Z;$++){const q=H[$],j=v(q),k=y%U,re=k%j.boundary,he=k+re;y+=re,he!==0&&U-he<j.storage&&(y+=U-he),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=j.storage}}}const C=y%U;return C>0&&(y+=U-C),b.__size=y,b.__cache={},this}function v(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const y=s.indexOf(E.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:u,dispose:p}}class vv{constructor(e={}){const{canvas:n=sp(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const b=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Gi,this.toneMappingExposure=1;const y=this;let U=!1,C=0,R=0,L=null,T=-1,M=null;const w=new mt,W=new mt;let H=null;const $=new Ce(0);let Z=0,q=n.width,j=n.height,k=1,re=null,he=null;const Te=new mt(0,0,q,j),ke=new mt(0,0,q,j);let rt=!1;const X=new Oc;let te=!1,Me=!1;const ae=new ft,De=new ft,Le=new N,We=new mt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function vt(){return L===null?k:1}let P=i;function an(S,D){return n.getContext(S,D)}try{const S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ec}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ce,!1),P===null){const D="webgl2";if(P=an(D,S),P===null)throw an(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Xe,qe,we,lt,Re,A,x,F,K,J,z,Ee,le,me,$e,Q,ge,Ie,Pe,_e,Ke,Ge,st,I;function se(){Xe=new yg(P),Xe.init(),Ge=new lv(P,Xe),qe=new _g(P,Xe,e,Ge),we=new ov(P,Xe),qe.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),lt=new bg(P),Re=new z_,A=new av(P,Xe,we,Re,qe,Ge,lt),x=new xg(y),F=new Eg(y),K=new Pp(P),st=new mg(P,K),J=new Tg(P,K,lt,st),z=new wg(P,J,K,lt),Pe=new Rg(P,qe,A),Q=new vg(Re),Ee=new W_(y,x,F,Xe,qe,st,Q),le=new gv(y,Re),me=new q_,$e=new J_(Xe),Ie=new pg(y,x,F,we,z,m,l),ge=new iv(y,z,qe),I=new _v(P,lt,qe,we),_e=new gg(P,Xe,lt),Ke=new Ag(P,Xe,lt),lt.programs=Ee.programs,y.capabilities=qe,y.extensions=Xe,y.properties=Re,y.renderLists=me,y.shadowMap=ge,y.state=we,y.info=lt}se();const V=new pv(y,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(q,j,!1))},this.getSize=function(S){return S.set(q,j)},this.setSize=function(S,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,j=D,n.width=Math.floor(S*k),n.height=Math.floor(D*k),B===!0&&(n.style.width=S+"px",n.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(q*k,j*k).floor()},this.setDrawingBufferSize=function(S,D,B){q=S,j=D,k=B,n.width=Math.floor(S*B),n.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,D,B,G){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,D,B,G),we.viewport(w.copy(Te).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(ke)},this.setScissor=function(S,D,B,G){S.isVector4?ke.set(S.x,S.y,S.z,S.w):ke.set(S,D,B,G),we.scissor(W.copy(ke).multiplyScalar(k).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(S){we.setScissorTest(rt=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(S=!0,D=!0,B=!0){let G=0;if(S){let O=!1;if(L!==null){const ee=L.texture.format;O=ee===Cc||ee===wc||ee===Rc}if(O){const ee=L.texture.type,ue=ee===_i||ee===_r||ee===$o||ee===ro||ee===Ac||ee===bc,ve=Ie.getClearColor(),xe=Ie.getClearAlpha(),Ne=ve.r,Fe=ve.g,Se=ve.b;ue?(_[0]=Ne,_[1]=Fe,_[2]=Se,_[3]=xe,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=Ne,v[1]=Fe,v[2]=Se,v[3]=xe,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}D&&(G|=P.DEPTH_BUFFER_BIT),B&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),me.dispose(),$e.dispose(),Re.dispose(),x.dispose(),F.dispose(),z.dispose(),st.dispose(),I.dispose(),Ee.dispose(),V.dispose(),V.removeEventListener("sessionstart",qc),V.removeEventListener("sessionend",Kc),zi.stop()};function Y(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=lt.autoReset,D=ge.enabled,B=ge.autoUpdate,G=ge.needsUpdate,O=ge.type;se(),lt.autoReset=S,ge.enabled=D,ge.autoUpdate=B,ge.needsUpdate=G,ge.type=O}function ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ue(S){const D=S.target;D.removeEventListener("dispose",Ue),pt(D)}function pt(S){Pt(S),Re.remove(S)}function Pt(S){const D=Re.get(S).programs;D!==void 0&&(D.forEach(function(B){Ee.releaseProgram(B)}),S.isShaderMaterial&&Ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,G,O,ee){D===null&&(D=dt);const ue=O.isMesh&&O.matrixWorld.determinant()<0,ve=Jd(S,D,B,G,O);we.setMaterial(G,ue);let xe=B.index,Ne=1;if(G.wireframe===!0){if(xe=J.getWireframeAttribute(B),xe===void 0)return;Ne=2}const Fe=B.drawRange,Se=B.attributes.position;let Je=Fe.start*Ne,at=(Fe.start+Fe.count)*Ne;ee!==null&&(Je=Math.max(Je,ee.start*Ne),at=Math.min(at,(ee.start+ee.count)*Ne)),xe!==null?(Je=Math.max(Je,0),at=Math.min(at,xe.count)):Se!=null&&(Je=Math.max(Je,0),at=Math.min(at,Se.count));const ct=at-Je;if(ct<0||ct===1/0)return;st.setup(O,G,ve,B,xe);let Wt,Qe=_e;if(xe!==null&&(Wt=K.get(xe),Qe=Ke,Qe.setIndex(Wt)),O.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*vt()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(O.isLine){let ye=G.linewidth;ye===void 0&&(ye=1),we.setLineWidth(ye*vt()),O.isLineSegments?Qe.setMode(P.LINES):O.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else O.isPoints?Qe.setMode(P.POINTS):O.isSprite&&Qe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ye=O._multiDrawStarts,Yn=O._multiDrawCounts,et=O._multiDrawCount,mn=xe?K.get(xe).bytesPerElement:1,yr=Re.get(G).currentProgram.getUniforms();for(let $t=0;$t<et;$t++)yr.setValue(P,"_gl_DrawID",$t),Qe.render(ye[$t]/mn,Yn[$t])}else if(O.isInstancedMesh)Qe.renderInstances(Je,ct,O.count);else if(B.isInstancedBufferGeometry){const ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Yn=Math.min(B.instanceCount,ye);Qe.renderInstances(Je,ct,Yn)}else Qe.render(Je,ct)};function nt(S,D,B){S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,ls(S,D,B),S.side=ki,S.needsUpdate=!0,ls(S,D,B),S.side=xn):ls(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),p=$e.get(B),p.init(D),E.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==B&&S.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const ve=ee[ue];nt(ve,B,O),G.add(ve)}else nt(ee,B,O),G.add(ee)}),E.pop(),p=null,G},this.compileAsync=function(S,D,B=null){const G=this.compile(S,D,B);return new Promise(O=>{function ee(){if(G.forEach(function(ue){Re.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){O(S);return}setTimeout(ee,10)}Xe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let pn=null;function Kn(S){pn&&pn(S)}function qc(){zi.stop()}function Kc(){zi.start()}const zi=new sd;zi.setAnimationLoop(Kn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(S){pn=S,V.setAnimationLoop(S),S===null?zi.stop():zi.start()},V.addEventListener("sessionstart",qc),V.addEventListener("sessionend",Kc),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,D,L),p=$e.get(S,E.length),p.init(D),E.push(p),De.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(De),Me=this.localClippingEnabled,te=Q.init(this.clippingPlanes,Me),g=me.get(S,b.length),g.init(),b.push(g),V.enabled===!0&&V.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&Ea(ee,D,-1/0,y.sortObjects)}Ea(S,D,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(re,he),Ye=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ye&&Ie.addToRenderList(g,S),this.info.render.frame++,te===!0&&Q.beginShadows();const B=p.state.shadowsArray;ge.render(B,S,D),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,O=g.transmissive;if(p.setupLights(),D.isArrayCamera){const ee=D.cameras;if(O.length>0)for(let ue=0,ve=ee.length;ue<ve;ue++){const xe=ee[ue];$c(G,O,S,xe)}Ye&&Ie.render(S);for(let ue=0,ve=ee.length;ue<ve;ue++){const xe=ee[ue];Yc(g,S,xe,xe.viewport)}}else O.length>0&&$c(G,O,S,D),Ye&&Ie.render(S),Yc(g,S,D);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,D),st.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],te===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Ea(S,D,B,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){G&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);const ue=z.update(S),ve=S.material;ve.visible&&g.push(S,ue,ve,B,We.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const ue=z.update(S),ve=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),We.copy(ue.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(De)),Array.isArray(ve)){const xe=ue.groups;for(let Ne=0,Fe=xe.length;Ne<Fe;Ne++){const Se=xe[Ne],Je=ve[Se.materialIndex];Je&&Je.visible&&g.push(S,ue,Je,B,We.z,Se)}}else ve.visible&&g.push(S,ue,ve,B,We.z,null)}}const ee=S.children;for(let ue=0,ve=ee.length;ue<ve;ue++)Ea(ee[ue],D,B,G)}function Yc(S,D,B,G){const O=S.opaque,ee=S.transmissive,ue=S.transparent;p.setupLightsView(B),te===!0&&Q.setGlobalState(y.clippingPlanes,B),G&&we.viewport(w.copy(G)),O.length>0&&as(O,D,B),ee.length>0&&as(ee,D,B),ue.length>0&&as(ue,D,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function $c(S,D,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new vr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?ts:_i,minFilter:ur,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ee=p.state.transmissionRenderTarget[G.id],ue=G.viewport||w;ee.setSize(ue.z,ue.w);const ve=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor($),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&Ie.render(B);const xe=y.toneMapping;y.toneMapping=Gi;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),te===!0&&Q.setGlobalState(y.clippingPlanes,G),as(S,B,G),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Se=0,Je=D.length;Se<Je;Se++){const at=D[Se],ct=at.object,Wt=at.geometry,Qe=at.material,ye=at.group;if(Qe.side===xn&&ct.layers.test(G.layers)){const Yn=Qe.side;Qe.side=Yt,Qe.needsUpdate=!0,Zc(ct,B,G,Wt,Qe,ye),Qe.side=Yn,Qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee))}y.setRenderTarget(ve),y.setClearColor($,Z),Ne!==void 0&&(G.viewport=Ne),y.toneMapping=xe}function as(S,D,B){const G=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ee=S.length;O<ee;O++){const ue=S[O],ve=ue.object,xe=ue.geometry,Ne=G===null?ue.material:G,Fe=ue.group;ve.layers.test(B.layers)&&Zc(ve,D,B,xe,Ne,Fe)}}function Zc(S,D,B,G,O,ee){S.onBeforeRender(y,D,B,G,O,ee),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,D,B,G,S,ee),O.transparent===!0&&O.side===xn&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,y.renderBufferDirect(B,D,G,O,S,ee),O.side=ki,O.needsUpdate=!0,y.renderBufferDirect(B,D,G,O,S,ee),O.side=xn):y.renderBufferDirect(B,D,G,O,S,ee),S.onAfterRender(y,D,B,G,O,ee)}function ls(S,D,B){D.isScene!==!0&&(D=dt);const G=Re.get(S),O=p.state.lights,ee=p.state.shadowsArray,ue=O.state.version,ve=Ee.getParameters(S,O.state,ee,D,B),xe=Ee.getProgramCacheKey(ve);let Ne=G.programs;G.environment=S.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(S.isMeshStandardMaterial?F:x).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",Ue),Ne=new Map,G.programs=Ne);let Fe=Ne.get(xe);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===ue)return Jc(S,ve),Fe}else ve.uniforms=Ee.getUniforms(S),S.onBeforeCompile(ve,y),Fe=Ee.acquireProgram(ve,xe),Ne.set(xe,Fe),G.uniforms=ve.uniforms;const Se=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=Q.uniform),Jc(S,ve),G.needsLights=eh(S),G.lightsStateVersion=ue,G.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function jc(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Ys.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Jc(S,D){const B=Re.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Jd(S,D,B,G,O){D.isScene!==!0&&(D=dt),A.resetTextureUnits();const ee=D.fog,ue=G.isMeshStandardMaterial?D.environment:null,ve=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fo,xe=(G.isMeshStandardMaterial?F:x).get(G.envMap||ue),Ne=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!B.morphAttributes.position,Je=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let ct=Gi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ct=y.toneMapping);const Wt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=Wt!==void 0?Wt.length:0,ye=Re.get(G),Yn=p.state.lights;if(te===!0&&(Me===!0||S!==M)){const ln=S===M&&G.id===T;Q.setState(G,S,ln)}let et=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Yn.state.version||ye.outputColorSpace!==ve||O.isBatchedMesh&&ye.batching===!1||!O.isBatchedMesh&&ye.batching===!0||O.isBatchedMesh&&ye.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ye.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ye.instancing===!1||!O.isInstancedMesh&&ye.instancing===!0||O.isSkinnedMesh&&ye.skinning===!1||!O.isSkinnedMesh&&ye.skinning===!0||O.isInstancedMesh&&ye.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ye.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ye.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ye.instancingMorph===!1&&O.morphTexture!==null||ye.envMap!==xe||G.fog===!0&&ye.fog!==ee||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Q.numPlanes||ye.numIntersection!==Q.numIntersection)||ye.vertexAlphas!==Ne||ye.vertexTangents!==Fe||ye.morphTargets!==Se||ye.morphNormals!==Je||ye.morphColors!==at||ye.toneMapping!==ct||ye.morphTargetsCount!==Qe)&&(et=!0):(et=!0,ye.__version=G.version);let mn=ye.currentProgram;et===!0&&(mn=ls(G,D,O));let yr=!1,$t=!1,So=!1;const ut=mn.getUniforms(),bn=ye.uniforms;if(we.useProgram(mn.program)&&(yr=!0,$t=!0,So=!0),G.id!==T&&(T=G.id,$t=!0),yr||M!==S){we.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),lp(ae),cp(ae),ut.setValue(P,"projectionMatrix",ae)):ut.setValue(P,"projectionMatrix",S.projectionMatrix),ut.setValue(P,"viewMatrix",S.matrixWorldInverse);const xi=ut.map.cameraPosition;xi!==void 0&&xi.setValue(P,Le.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,$t=!0,So=!0)}if(O.isSkinnedMesh){ut.setOptional(P,O,"bindMatrix"),ut.setOptional(P,O,"bindMatrixInverse");const ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ut.setValue(P,"boneTexture",ln.boneTexture,A))}O.isBatchedMesh&&(ut.setOptional(P,O,"batchingTexture"),ut.setValue(P,"batchingTexture",O._matricesTexture,A),ut.setOptional(P,O,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",O._indirectTexture,A),ut.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",O._colorsTexture,A));const Mo=B.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0)&&Pe.update(O,B,mn),($t||ye.receiveShadow!==O.receiveShadow)&&(ye.receiveShadow=O.receiveShadow,ut.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(bn.envMap.value=xe,bn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(bn.envMapIntensity.value=D.environmentIntensity),$t&&(ut.setValue(P,"toneMappingExposure",y.toneMappingExposure),ye.needsLights&&Qd(bn,So),ee&&G.fog===!0&&le.refreshFogUniforms(bn,ee),le.refreshMaterialUniforms(bn,G,k,j,p.state.transmissionRenderTarget[S.id]),Ys.upload(P,jc(ye),bn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ys.upload(P,jc(ye),bn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(P,"center",O.center),ut.setValue(P,"modelViewMatrix",O.modelViewMatrix),ut.setValue(P,"normalMatrix",O.normalMatrix),ut.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ln=G.uniformsGroups;for(let xi=0,Si=ln.length;xi<Si;xi++){const Qc=ln[xi];I.update(Qc,mn),I.bind(Qc,mn)}}return mn}function Qd(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function eh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,D,B){Re.get(S.texture).__webglTexture=D,Re.get(S.depthTexture).__webglTexture=B;const G=Re.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const B=Re.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){L=S,C=D,R=B;let G=!0,O=null,ee=!1,ue=!1;if(S){const xe=Re.get(S);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(xe.__hasExternalTextures)A.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&Re.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ue=!0);const Fe=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?O=Fe[D][B]:O=Fe[D],ee=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?O=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[B]:O=Fe,w.copy(S.viewport),W.copy(S.scissor),H=S.scissorTest}else w.copy(Te).multiplyScalar(k).floor(),W.copy(ke).multiplyScalar(k).floor(),H=rt;if(we.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&we.drawBuffers(S,O),we.viewport(w),we.scissor(W),we.setScissorTest(H),ee){const xe=Re.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,B)}else if(ue){const xe=Re.get(S.texture),Ne=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Ne)}T=-1},this.readRenderTargetPixels=function(S,D,B,G,O,ee,ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){we.bindFramebuffer(P.FRAMEBUFFER,ve);try{const xe=S.texture,Ne=xe.format,Fe=xe.type;if(!qe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&B>=0&&B<=S.height-O&&P.readPixels(D,B,G,O,Ge.convert(Ne),Ge.convert(Fe),ee)}finally{const xe=L!==null?Re.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,G,O,ee,ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){const xe=S.texture,Ne=xe.format,Fe=xe.type;if(!qe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-G&&B>=0&&B<=S.height-O){we.bindFramebuffer(P.FRAMEBUFFER,ve);const Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),P.readPixels(D,B,G,O,Ge.convert(Ne),Ge.convert(Fe),0);const Je=L!==null?Re.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,Je);const at=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ap(P,at,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(Se),P.deleteSync(at),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-B),O=Math.floor(S.image.width*G),ee=Math.floor(S.image.height*G),ue=D!==null?D.x:0,ve=D!==null?D.y:0;A.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ue,ve,O,ee),we.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,G=null,O=0){S.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],D=arguments[2],O=arguments[3]||0,B=null);let ee,ue,ve,xe,Ne,Fe,Se,Je,at;const ct=S.isCompressedTexture?S.mipmaps[O]:S.image;B!==null?(ee=B.max.x-B.min.x,ue=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,xe=B.min.x,Ne=B.min.y,Fe=B.isBox3?B.min.z:0):(ee=ct.width,ue=ct.height,ve=ct.depth||1,xe=0,Ne=0,Fe=0),G!==null?(Se=G.x,Je=G.y,at=G.z):(Se=0,Je=0,at=0);const Wt=Ge.convert(D.format),Qe=Ge.convert(D.type);let ye;D.isData3DTexture?(A.setTexture3D(D,0),ye=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),ye=P.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),ye=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Yn=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),yr=P.getParameter(P.UNPACK_SKIP_ROWS),$t=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);const So=S.isDataArrayTexture||S.isData3DTexture,ut=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const bn=Re.get(S),Mo=Re.get(D),ln=Re.get(bn.__renderTarget),xi=Re.get(Mo.__renderTarget);we.bindFramebuffer(P.READ_FRAMEBUFFER,ln.__webglFramebuffer),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Si=0;Si<ve;Si++)So&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.get(S).__webglTexture,O,Fe+Si),S.isDepthTexture?(ut&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.get(D).__webglTexture,O,at+Si),P.blitFramebuffer(xe,Ne,ee,ue,Se,Je,ee,ue,P.DEPTH_BUFFER_BIT,P.NEAREST)):ut?P.copyTexSubImage3D(ye,O,Se,Je,at+Si,xe,Ne,ee,ue):P.copyTexSubImage2D(ye,O,Se,Je,at+Si,xe,Ne,ee,ue);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(ye,O,Se,Je,at,ee,ue,ve,Wt,Qe,ct.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(ye,O,Se,Je,at,ee,ue,ve,Wt,ct.data):P.texSubImage3D(ye,O,Se,Je,at,ee,ue,ve,Wt,Qe,ct):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Se,Je,ee,ue,Wt,Qe,ct.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Se,Je,ct.width,ct.height,Wt,ct.data):P.texSubImage2D(P.TEXTURE_2D,O,Se,Je,ee,ue,Wt,Qe,ct);P.pixelStorei(P.UNPACK_ROW_LENGTH,Yn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,yr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$t),O===0&&D.generateMipmaps&&P.generateMipmap(ye),we.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,G=null,O=0){return S.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,S=arguments[2],D=arguments[3],O=arguments[4]||0),Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,G,O)},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,we.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}class Nc{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=n,this.far=i}clone(){return new Nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xv extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hd extends Er{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new N,ta=new N,Qu=new ft,bo=new Dc,Is=new rs,ja=new N,ef=new N;class Sv extends yt{constructor(e=new hn,n=new hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)ea.fromBufferAttribute(n,r-1),ta.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=o,e.ray.intersectsSphere(Is)===!1)return;Qu.copy(r).invert(),bo.copy(e.ray).applyMatrix4(Qu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let v=m,g=_-1;v<g;v+=u){const p=d.getX(v),b=d.getX(v+1),E=Ds(this,e,bo,l,p,b);E&&n.push(E)}if(this.isLineLoop){const v=d.getX(_-1),g=d.getX(m),p=Ds(this,e,bo,l,v,g);p&&n.push(p)}}else{const m=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let v=m,g=_-1;v<g;v+=u){const p=Ds(this,e,bo,l,v,v+1);p&&n.push(p)}if(this.isLineLoop){const v=Ds(this,e,bo,l,_-1,m);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ds(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(ea.fromBufferAttribute(s,r),ta.fromBufferAttribute(s,o),n.distanceSqToSegment(ea,ta,ja,ef)>i)return;ja.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ja);if(!(l<e.near||l>e.far))return{distance:l,point:ef.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const tf=new N,nf=new N;class Mv extends Sv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)tf.fromBufferAttribute(n,r),nf.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tf.distanceTo(nf);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pd extends Er{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rf=new ft,ac=new Dc,Os=new rs,Ps=new N;class Ev extends yt{constructor(e=new hn,n=new pd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Os.radius+=o,e.ray.intersectsSphere(Os)===!1)return;rf.copy(r).invert(),ac.copy(e.ray).applyMatrix4(rf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let _=f,v=m;_<v;_++){const g=u.getX(_);Ps.fromBufferAttribute(h,g),of(Ps,g,l,r,e,n,this)}}else{const f=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let _=f,v=m;_<v;_++)Ps.fromBufferAttribute(h,_),of(Ps,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function of(t,e,n,i,r,o,s){const a=ac.distanceSqToPoint(t);if(a<n){const l=new N;ac.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class yv extends Vt{constructor(e,n,i,r,o,s,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ns=new N,Ls=new N,Ja=new N,Us=new fn;class Tv extends hn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(Jr*n),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,u=[0,0,0],d=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){s?(u[0]=s.getX(_),u[1]=s.getX(_+1),u[2]=s.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:v,b:g,c:p}=Us;if(v.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),p.fromBufferAttribute(a,u[2]),Us.getNormal(Ja),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const E=(b+1)%3,y=h[b],U=h[E],C=Us[d[b]],R=Us[d[E]],L=`${y}_${U}`,T=`${U}_${y}`;T in f&&f[T]?(Ja.dot(f[T].normal)<=o&&(m.push(C.x,C.y,C.z),m.push(R.x,R.y,R.z)),f[T]=null):L in f||(f[L]={index0:u[b],index1:u[E],normal:Ja.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:g}=f[_];Ns.fromBufferAttribute(a,v),Ls.fromBufferAttribute(a,g),m.push(Ns.x,Ns.y,Ns.z),m.push(Ls.x,Ls.y,Ls.z)}this.setAttribute("position",new sn(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ve extends Er{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lc extends yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Av extends Lc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Qa=new ft,sf=new N,af=new N;class bv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sf.setFromMatrixPosition(e.matrixWorld),n.position.copy(sf),af.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(af),n.updateMatrixWorld(),Qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rv extends bv{constructor(){super(new ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wv extends Lc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Rv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cv extends Lc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);let Br=null;function _t(){if(!Br){const t=window.AudioContext||window.webkitAudioContext;t&&(Br=new t)}return Br&&Br.state==="suspended"&&Br.resume(),Br}if(typeof window<"u"){const t=()=>{_t(),window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t)}function md(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(320,e+.12),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}function Iv(t){const e=_t();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(300,n),i.frequency.exponentialRampToValueAtTime(750,n+.18)):(i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(200,n+.18)),r.gain.setValueAtTime(.22,n),r.gain.exponentialRampToValueAtTime(.01,n+.2),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.2)}function Dv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.sampleRate*.08,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/(n*.3));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,e),s.frequency.exponentialRampToValueAtTime(150,e+.08);const a=t.createGain();a.gain.setValueAtTime(.35,e),a.gain.exponentialRampToValueAtTime(.01,e+.08),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function lf(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(80,e+.07),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.01,e+.07),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.07)}function Ov(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.exponentialRampToValueAtTime(60,e+.15),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.15),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.15)}function gd(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(450,e),n.frequency.exponentialRampToValueAtTime(120,e+.1),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.1)}function Pv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(80,e+.14),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function Nv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(95,e),n.frequency.linearRampToValueAtTime(80,e+.25),n.frequency.exponentialRampToValueAtTime(50,e+.5),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}function Lv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.linearRampToValueAtTime(250,e+.08),n.frequency.linearRampToValueAtTime(360,e+.18),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.18),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.18)}function Et(t=!0){const e=_t();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(260,n),i.frequency.exponentialRampToValueAtTime(420,n+.08)):(i.frequency.setValueAtTime(420,n),i.frequency.exponentialRampToValueAtTime(260,n+.08)),r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.01,n+.08),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.08)}function Uv(t=1){const e=_t();if(!e)return;const n=e.currentTime,i=Math.floor(e.sampleRate*.04),r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);for(let h=0;h<i;h++)o[h]=(Math.random()*2-1)*Math.exp(-h/(i*.25));const s=e.createBufferSource();s.buffer=r;const a=e.createBiquadFilter();a.type="lowpass";let l=380,u=.06;t===3||t===8||t===9||t===13?(l=650,u=.07):t===4?(l=300,u=.05):t===5?(l=400,u=.06):(t===6||t===12||t===16)&&(l=480,u=.06),a.frequency.setValueAtTime(l,n);const d=e.createGain();d.gain.setValueAtTime(u,n),d.gain.exponentialRampToValueAtTime(1e-4,n+.04),s.connect(a),a.connect(d),d.connect(e.destination),s.start(n)}function Fv(t=1){const e=_t();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle";const o=t===3||t===8||t===9||t===13?280:180;i.frequency.setValueAtTime(o,n),i.frequency.exponentialRampToValueAtTime(60,n+.03),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.03),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.03)}function Bv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(880,e+.09),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.09),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.09)}function Tn(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createOscillator(),r=t.createGain();n.type="triangle",i.type="sine",n.frequency.setValueAtTime(523.25,e),n.frequency.setValueAtTime(659.25,e+.07),i.frequency.setValueAtTime(783.99,e+.07),r.gain.setValueAtTime(.25,e),r.gain.exponentialRampToValueAtTime(.01,e+.22),n.connect(r),i.connect(r),r.connect(t.destination),n.start(e),i.start(e+.07),n.stop(e+.22),i.stop(e+.22)}function Gv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(550,e),n.frequency.exponentialRampToValueAtTime(160,e+.14),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function _d(){const t=_t();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.45),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*.7;const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(3200,e),s.Q.setValueAtTime(4,e);const a=t.createGain();a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.01,e+.45),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function Hv(){const t=_t();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.85),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let d=0;d<n;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(n*.4));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,e),s.frequency.exponentialRampToValueAtTime(40,e+.85);const a=t.createGain();a.gain.setValueAtTime(.7,e),a.gain.exponentialRampToValueAtTime(.001,e+.85),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e);const l=t.createOscillator(),u=t.createGain();l.type="sine",l.frequency.setValueAtTime(120,e),l.frequency.exponentialRampToValueAtTime(25,e+.5),u.gain.setValueAtTime(.6,e),u.gain.exponentialRampToValueAtTime(.01,e+.5),l.connect(u),u.connect(t.destination),l.start(e),l.stop(e+.5)}function kv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(90,e+.08),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.08)}function vd(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(240,e),n.frequency.linearRampToValueAtTime(210,e+.35);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(700,e),r.frequency.linearRampToValueAtTime(450,e+.35),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.01,e+.35),n.connect(r),r.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.35)}function Vv(){const t=_t();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(160,e+.6),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.6),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.6)}let el=20;const cf=[261.63,293.66,329.63,392,440,523.25,587.33,659.25];function Wv(t){el-=t,el<=0&&(el=65+Math.random()*45,zv())}function zv(){const t=_t();if(!t)return;const e=4+Math.floor(Math.random()*3);let n=t.currentTime;for(let i=0;i<e;i++){const r=cf[Math.floor(Math.random()*cf.length)],o=1.6+Math.random()*1.2,s=t.createOscillator(),a=t.createGain();s.type="sine",s.frequency.setValueAtTime(r,n),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.04,n+.3),a.gain.exponentialRampToValueAtTime(.001,n+o),s.connect(a),a.connect(t.destination),s.start(n),s.stop(n+o),n+=.8+Math.random()*.6}}const qt={TITLE_SCREEN:"title_screen",PLAYING:"playing",PAUSED:"paused"},gt={NONE:"none",INVENTORY:"inventory",CRAFTING_TABLE:"crafting_table",FURNACE:"furnace",CHEST:"chest",RECIPE_BOOK:"recipe_book",CONTROLS:"controls",SETTINGS:"settings"};let go=qt.TITLE_SCREEN,ao=gt.NONE,jo=null;function Xv(t){jo=t}function No(){return go}function ga(t){go=t}function qv(){return go===qt.TITLE_SCREEN}function Kv(){return go===qt.PAUSED}function xd(t){return ao===t}function zo(){return ao!==gt.NONE}function _o(t){ao=t,document.pointerLockElement&&document.exitPointerLock()}function fi(t=null){t&&ao!==t||(ao=gt.NONE,go===qt.PLAYING&&jo&&jo.requestPointerLock())}function Yv(){ao=gt.NONE,go===qt.PLAYING&&jo&&jo.requestPointerLock()}let zt=null,Jt=null,Xr=null,lc=!1;const Ii={renderDistance:5,fov:75,mouseSensitivity:1};function $v(t){Xr=t||document.querySelector("canvas"),Xv(Xr),document.getElementById("title-screen"),document.getElementById("pause-menu"),zt=document.getElementById("modal-controls"),Jt=document.getElementById("modal-settings"),window.startGame=uf,window.resumeGame=tl,window.returnToMainMenu=df,window.openControls=()=>Gr(zt),window.openSettings=()=>Gr(Jt);const e=["Cavernas 3D & Entradas Naturais!","Fornalha e Fundição de Ferro!","Armaduras, Esqueletos e Aranhas!","Mundo infinito com Biomas!","Construa e explore em 60 FPS!","Receitas reais de sobrevivência!"],n=document.getElementById("splash-text");n&&(n.textContent=e[Math.floor(Math.random()*e.length)]);const i=document.getElementById("btn-play");i&&i.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation();try{md()}catch{}uf()});const r=document.getElementById("btn-controls");r&&r.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Gr(zt)});const o=document.getElementById("btn-settings");o&&o.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Gr(Jt)});const s=document.getElementById("btn-close-controls");s&&s.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),zt&&(zt.style.display="none"),fi(gt.CONTROLS)});const a=document.getElementById("btn-close-settings");a&&a.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Jt&&(Jt.style.display="none"),fi(gt.SETTINGS)});const l=document.getElementById("btn-resume");l&&l.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),tl()});const u=document.getElementById("btn-pause-controls");u&&u.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Gr(zt)});const d=document.getElementById("btn-pause-settings")||document.getElementById("btn-pause-options");d&&d.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Gr(Jt)});const h=document.getElementById("btn-quit-menu")||document.getElementById("btn-exit-main");h&&h.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),df()});const f=document.getElementById("setting-fov"),m=document.getElementById("fov-val");f&&m&&f.addEventListener("input",E=>{Ii.fov=parseInt(E.target.value,10),m.textContent=`${Ii.fov}°`});const _=document.getElementById("setting-distance"),v=document.getElementById("distance-val");_&&v&&_.addEventListener("input",E=>{Ii.renderDistance=parseInt(E.target.value,10),v.textContent=`${Ii.renderDistance} Chunks`});const g=document.getElementById("setting-sens"),p=document.getElementById("sens-val");g&&p&&g.addEventListener("input",E=>{Ii.mouseSensitivity=parseFloat(E.target.value),p.textContent=`${Ii.mouseSensitivity.toFixed(1)}x`}),document.addEventListener("pointerlockchange",()=>{const E=document.pointerLockElement===(Xr||document.querySelector("canvas"));lc&&!E&&No()===qt.PLAYING&&!zo()&&ff(),lc=E}),window.addEventListener("keydown",E=>{if(E.code==="Escape"){if(zt&&zt.style.display==="flex"){zt.style.display="none",fi(gt.CONTROLS);return}if(Jt&&Jt.style.display==="flex"){Jt.style.display="none",fi(gt.SETTINGS);return}if(zo()){Yv();return}No()===qt.PLAYING?(document.exitPointerLock(),ff()):No()===qt.PAUSED&&tl()}});const b=Xr||document.querySelector("canvas");b&&b.addEventListener("click",()=>{if(No()===qt.PLAYING&&!zo()&&!document.pointerLockElement)try{b.requestPointerLock()}catch{}})}function Gr(t){t&&(t.style.display="flex",_o(t===zt?gt.CONTROLS:gt.SETTINGS))}function uf(){ga(qt.PLAYING);const t=document.getElementById("title-screen");t&&(t.style.display="none",t.style.pointerEvents="none",t.style.visibility="hidden",t.style.opacity="0");const e=document.getElementById("pause-menu");e&&(e.style.display="none");const n=document.getElementById("crosshair");n&&(n.style.display="block");const i=document.getElementById("controls-hint");i&&(i.style.display="block");const r=Xr||document.querySelector("canvas");if(r&&typeof r.requestPointerLock=="function")try{const o=r.requestPointerLock();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}}function ff(){if(No()===qt.TITLE_SCREEN)return;ga(qt.PAUSED);const t=document.getElementById("pause-menu");t&&(t.style.display="flex");const e=document.getElementById("crosshair");e&&(e.style.display="none");const n=document.getElementById("controls-hint");n&&(n.style.display="none")}function tl(){ga(qt.PLAYING);const t=document.getElementById("pause-menu");t&&(t.style.display="none"),zt&&(zt.style.display="none"),Jt&&(Jt.style.display="none");const e=document.getElementById("crosshair");e&&(e.style.display="block");const n=document.getElementById("controls-hint");n&&(n.style.display="block");const i=Xr||document.querySelector("canvas");if(i&&typeof i.requestPointerLock=="function")try{const r=i.requestPointerLock();r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}function df(){ga(qt.TITLE_SCREEN),lc=!1;const t=document.getElementById("pause-menu");t&&(t.style.display="none"),zt&&(zt.style.display="none"),Jt&&(Jt.style.display="none");const e=document.getElementById("title-screen");e&&(e.style.display="flex",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.opacity="1");const n=document.getElementById("crosshair");n&&(n.style.display="none");const i=document.getElementById("controls-hint");i&&(i.style.display="none")}const Zv=.0022,hf=1.55;let Li=null,cc=0,Lo=-.15,uc=!1;function jv(t,e={x:0,y:20,z:0}){return Li=new un(Ii.fov||75,t,.05,500),Li.rotation.order="YXZ",Li.position.set(e.x,e.y,e.z),Li.rotation.set(Lo,cc,0),Li}function Jv(t){document.addEventListener("pointerlockchange",()=>{uc=document.pointerLockElement===t}),document.addEventListener("mousemove",e=>{if(!uc||!Li||Math.abs(e.movementX)>250||Math.abs(e.movementY)>250)return;const n=Zv*(Ii.sensitivity||1);cc-=e.movementX*n,Lo-=e.movementY*n,Lo=Math.max(-hf,Math.min(hf,Lo)),Li.rotation.set(Lo,cc,0)})}function os(){return Li}function vo(){return uc}let Sd=!1,fc=0,dc=null,hc=null;function Md(t){if(!Sd)return;const e=Math.min((t-fc)/1e3,.1);fc=t,dc&&dc(e,t/1e3),hc&&hc(e),requestAnimationFrame(Md)}function Qv(t,e){dc=t,hc=e,Sd=!0,fc=performance.now(),requestAnimationFrame(Md)}let Qt=null,Di=null;function ex(){return Qt=new vv({antialias:!0}),Qt.domElement.id="game-canvas",Qt.setSize(window.innerWidth,window.innerHeight),Qt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Qt.setClearColor(7911912),Qt.shadowMap.enabled=!1,document.body.appendChild(Qt.domElement),window.addEventListener("resize",()=>{Qt.setSize(window.innerWidth,window.innerHeight)}),Qt}let pc=null,mc=null,$s=null;function tx(){return Di=new xv,pc=new Av(8900331,5596723,.6),Di.add(pc),mc=new Cv(16777215,.3),Di.add(mc),$s=new wv(16774624,1),$s.position.set(80,120,50),Di.add($s),Di.fog=new Nc(7911912,50,160),Di}function nx(){return{hemiLight:pc,ambientLight:mc,dirLight:$s}}function ix(t){Qt&&Di&&t&&Qt.render(Di,t)}function Ed(){return Qt?Qt.domElement:null}function rx(t){window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()})}const mr=16;function It(t){let e=t|0;return()=>(e=e*1103515245+12345&2147483647,e/2147483647)}function ox(t){const e=document.createElement("canvas");e.width=mr,e.height=mr;const n=e.getContext("2d");return t(n,mr),e}function bt(t,e,n,i,r,o){const s=It(o);t.fillStyle=n,t.fillRect(0,0,e,e);for(let a=0;a<e;a++)for(let l=0;l<e;l++)if(s()<r){const u=Math.floor(s()*i.length);t.fillStyle=i[u],t.fillRect(l,a,1,1)}}function sx(t,e){bt(t,e,"#5ba638",["#4f9430","#6bc043","#458528","#75cc4a"],.4,101);const n=It(202);for(let i=0;i<2;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#f6e05e",t.fillRect(r,o,1,1)}}function ax(t,e){bt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a"],.35,301);const n=It(302);for(let i=0;i<5;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle=n()>.3?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<3?n()>.35&&(t.fillStyle=n()>.5?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<4&&n()>.65&&(t.fillStyle="#458528",t.fillRect(r,i,1,1))}function lx(t,e){bt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a","#584117"],.4,401);const n=It(402);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#584117",t.fillRect(r,o,2,1)}}function _a(t,e){bt(t,e,"#828282",["#737373","#919191","#656565","#9e9e9e","#595959"],.45,501);const n=It(502);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#505050",t.fillRect(r,o,2+Math.floor(n()*2),1)}}function cx(t,e){bt(t,e,"#e5d38a",["#dac67c","#eedd98","#cfbc6f","#f5e6a4","#c5b161"],.45,601)}function ux(t,e){bt(t,e,"#f5f7fa",["#e9ecf2","#ffffff","#dfe3ec","#edf0f7"],.35,701);const n=It(702);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*e);t.fillStyle="#cbd5e1",t.fillRect(r,o,2,1)}}function fx(t,e){bt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,1401);const n=It(1402);for(let i=0;i<4;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle="#f5f7fa",t.fillRect(r,i,1,1)):i<3?n()>.3&&(t.fillStyle="#e9ecf2",t.fillRect(r,i,1,1)):n()>.7&&(t.fillStyle="#dfe3ec",t.fillRect(r,i,1,1))}function dx(t,e){t.fillStyle="#888888",t.fillRect(0,0,e,e),t.fillStyle="#555555",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1);for(let i=0;i<4;i++){const r=i%2===0?0:8,o=i*4;t.fillRect(r,o,1,4),t.fillRect(r+8,o,1,4)}const n=It(801);for(let i=0;i<e;i++)for(let r=0;r<e;r++)n()<.2&&(t.fillStyle=n()>.5?"#9e9e9e":"#737373",t.fillRect(r,i,1,1))}function hx(t,e){bt(t,e,"#6b4524",["#5a391d","#7c512c","#4e3016","#8d5c32"],.35,901);for(let n=0;n<e;n+=3)t.fillStyle="#472c14",t.fillRect(n,0,1,e)}function px(t,e){t.fillStyle="#c5a368",t.fillRect(0,0,e,e),t.fillStyle="#6b4524",t.fillRect(0,0,e,2),t.fillRect(0,14,e,2),t.fillRect(0,0,2,e),t.fillRect(14,0,2,e);const n=7.5,i=7.5,r=[2,4,6];t.fillStyle="#9e804f";for(const o of r)for(let s=0;s<e;s++)for(let a=0;a<e;a++){const l=Math.hypot(a-n,s-i);Math.abs(l-o)<.65&&t.fillRect(a,s,1,1)}t.fillStyle="#7a6036",t.fillRect(7,7,2,2)}function mx(t,e){bt(t,e,"#3c8524",["#2f6d1b","#4fa631","#245614","#5dbd3c","#1b400e"],.5,1001);const n=It(1002);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1b400e",t.fillRect(r,o,1,1)}}function gx(t,e){_a(t,e);const n=It(1101);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#222222",t.fillRect(r,o,2,2),t.fillStyle="#111111",t.fillRect(r+1,o+1,1,1)}}function _x(t,e){_a(t,e);const n=It(1201);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#d4a373",t.fillRect(r,o,2,2),t.fillStyle="#faedcd",t.fillRect(r,o,1,1)}}function vx(t,e){bt(t,e,"#2c75d8",["#2565bf","#3b86e8","#1e52a0","#4a95f5"],.4,1301);const n=It(1302);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#8bc3f7",t.fillRect(r,o,3,1)}}function xx(t,e){bt(t,e,"#15803d",["#166534","#14532d","#22c55e"],.4,1501),t.fillStyle="#14532d",t.fillRect(7,7,2,2)}function Sx(t,e){bt(t,e,"#15803d",["#166534","#15803d","#22c55e","#14532d"],.35,1601);const n=It(1602);for(let i=0;i<e;i+=4)t.fillStyle="#14532d",t.fillRect(i,0,1,e);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#fef08a",t.fillRect(r,o,1,1)}}function ss(t,e){bt(t,e,"#b45309",["#92400e","#78350f","#d97706","#a16207"],.35,1701),t.fillStyle="#451a03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1),t.fillRect(5,0,1,3),t.fillRect(11,4,1,3),t.fillRect(4,8,1,3),t.fillRect(12,12,1,3)}function va(t,e){bt(t,e,"#64748b",["#475569","#334155","#94a3b8","#1e293b"],.45,1801);const n=It(1802);t.fillStyle="#1e293b";for(let i=0;i<5;i++){const r=Math.floor(n()*(e-4)),o=Math.floor(n()*(e-4));t.fillRect(r,o,3,2)}}function Mx(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,7,2,9),t.fillRect(5,11,2,2),t.fillRect(9,9,2,2),t.fillStyle="#dc2626",t.fillRect(6,3,4,4),t.fillStyle="#ef4444",t.fillRect(7,2,2,1),t.fillRect(5,4,1,2),t.fillRect(10,4,1,2),t.fillStyle="#450a0a",t.fillRect(7,4,2,2)}function Ex(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,6,2,10),t.fillRect(5,10,2,2),t.fillRect(9,12,2,2),t.fillStyle="#eab308",t.fillRect(6,2,4,4),t.fillStyle="#facc15",t.fillRect(7,1,2,1),t.fillRect(5,3,1,2),t.fillRect(10,3,1,2),t.fillStyle="#ca8a04",t.fillRect(7,3,2,2)}function yx(t,e){ss(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(2.5,2.5,11,11),t.beginPath(),t.moveTo(6.5,2.5),t.lineTo(6.5,13.5),t.moveTo(10.5,2.5),t.lineTo(10.5,13.5),t.moveTo(2.5,6.5),t.lineTo(13.5,6.5),t.moveTo(2.5,10.5),t.lineTo(13.5,10.5),t.stroke(),t.fillStyle="#fef08a",t.fillRect(3,3,1,1),t.fillRect(12,3,1,1),t.fillRect(3,12,1,1),t.fillRect(12,12,1,1)}function Tx(t,e){ss(t,e),t.fillStyle="#1e293b",t.fillRect(3,4,3,8),t.fillStyle="#94a3b8",t.fillRect(3,4,2,6),t.fillStyle="#78350f",t.fillRect(4,9,1,3),t.fillStyle="#cbd5e1",t.fillRect(10,5,2,2),t.fillStyle="#78350f",t.fillRect(9,7,1,4),t.fillRect(12,7,1,4)}function Ax(t,e){t.clearRect(0,0,e,e),t.fillStyle="#78350f",t.fillRect(7,6,2,10),t.fillStyle="#451a03",t.fillRect(7,6,1,10),t.fillStyle="#f97316",t.fillRect(6,2,4,4),t.fillStyle="#fef08a",t.fillRect(7,3,2,2),t.fillStyle="#ea580c",t.fillRect(7,1,2,1)}function bx(t,e){va(t,e),t.strokeStyle="#1e293b",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function Rx(t,e){va(t,e),t.fillStyle="#0f172a",t.fillRect(4,7,8,7),t.fillStyle="#334155",t.fillRect(5,10,6,1),t.fillRect(5,12,6,1)}function wx(t,e){va(t,e),t.fillStyle="#f97316",t.fillRect(4,7,8,7),t.fillStyle="#fef08a",t.fillRect(5,9,6,4),t.fillStyle="#ef4444",t.fillRect(6,11,4,2)}function Cx(t,e){ss(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function Ix(t,e){ss(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13),t.fillStyle="#cbd5e1",t.fillRect(7,6,2,4),t.fillStyle="#475569",t.fillRect(7,8,2,1)}function Dx(t,e){bt(t,e,"#3b1d0c",["#2e1507","#45220e","#230f04","#4d2812"],.4,2101),t.fillStyle="#1c0b03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1)}function Ox(t,e){bt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,2201),t.fillStyle="#3b1d0c",t.fillRect(0,0,e,3),t.fillStyle="#230f04",t.fillRect(0,2,e,1)}function Px(t,e){t.clearRect(0,0,e,e),t.fillStyle="#65a30d";for(let n=2;n<e;n+=3)t.fillRect(n,12,1,4),t.fillRect(n-1,11,1,2)}function Nx(t,e){t.clearRect(0,0,e,e),t.fillStyle="#84cc16";for(let n=1;n<e;n+=3)t.fillRect(n,6,2,10),t.fillStyle="#ca8a04",t.fillRect(n,6,2,3),t.fillStyle="#84cc16"}function Lx(t,e){t.clearRect(0,0,e,e);for(let n=1;n<e;n+=2)t.fillStyle="#ca8a04",t.fillRect(n,4,1,12),t.fillStyle="#eab308",t.fillRect(n-(n>1?1:0),1,2,5),t.fillStyle="#fef08a",t.fillRect(n,2,1,3)}function Ux(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#475569",t.beginPath(),t.arc(8,8,4,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.fillRect(7,7,2,2)}function Fx(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#f8fafc",t.fillRect(0,5,e,6),t.fillStyle="#0f172a",t.fillRect(1,6,4,1),t.fillRect(2,7,2,3),t.fillRect(6,6,1,4),t.fillRect(7,7,1,2),t.fillRect(8,6,1,4),t.fillRect(10,6,4,1),t.fillRect(11,7,2,3)}function Bx(t,e){t.fillStyle="#b91c1c",t.fillRect(0,0,e,e),t.fillStyle="#7f1d1d",t.fillRect(3,3,10,10),t.fillStyle="#450a0a",t.fillRect(7,7,2,2)}function Gx(t,e){bt(t,e,"#ea580c",["#f97316","#c2410c","#facc15","#b45309","#7c2d12"],.45,2301);const n=It(2302);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*(e-2));t.fillStyle="#fef08a",t.fillRect(r,o,3,2),t.fillStyle="#ea580c",t.fillRect(r+1,o,1,1)}}function Hx(t,e){_a(t,e);const n=It(2401);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#06b6d4",t.fillRect(r,o,2,2),t.fillStyle="#67e8f9",t.fillRect(r,o,1,1),t.fillStyle="#e0f2fe",t.fillRect(r+1,o+1,1,1)}}function kx(t,e){bt(t,e,"#0f172a",["#1e1b4b","#020617","#312e81","#4c1d95","#1e293b"],.45,2501);const n=It(2502);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-2)),o=Math.floor(n()*(e-2));t.fillStyle="#6366f1",t.fillRect(r,o,1,2),t.fillStyle="#a855f7",t.fillRect(r+1,o+1,1,1)}}function Vx(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#b91c1c",t.fillRect(1,6,e-2,e-7),t.fillStyle="#f8fafc",t.fillRect(2,1,12,4),t.fillStyle="#cbd5e1",t.fillRect(2,4,12,1)}function Wx(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,6),t.fillStyle="#b91c1c",t.fillRect(0,5,e,1),t.fillStyle="#78350f",t.fillRect(0,6,e,10),t.fillStyle="#451a03",t.fillRect(2,9,e-4,7)}function zx(t,e){bt(t,e,"#f8fafc",["#f1f5f9","#e2e8f0","#cbd5e1","#ffffff"],.35,2601);const n=It(2602);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#e2e8f0",t.fillRect(r,o,1,1)}}const Xx=[{name:"grass_top",draw:sx},{name:"grass_side",draw:ax},{name:"dirt",draw:lx},{name:"stone",draw:_a},{name:"sand",draw:cx},{name:"snow",draw:ux},{name:"wood_log",draw:hx},{name:"wood_log_top",draw:px},{name:"leaves",draw:mx},{name:"coal_ore",draw:gx},{name:"iron_ore",draw:_x},{name:"water",draw:vx},{name:"stone_bricks",draw:dx},{name:"snow_side",draw:fx},{name:"cactus_top",draw:xx},{name:"cactus_side",draw:Sx},{name:"wood_planks",draw:ss},{name:"cobblestone",draw:va},{name:"flower_red",draw:Mx},{name:"flower_yellow",draw:Ex},{name:"crafting_table_top",draw:yx},{name:"crafting_table_side",draw:Tx},{name:"torch",draw:Ax},{name:"furnace_side",draw:bx},{name:"furnace_front",draw:Rx},{name:"furnace_front_lit",draw:wx},{name:"chest_top",draw:Cx},{name:"chest_side",draw:Ix},{name:"farmland_top",draw:Dx},{name:"farmland_side",draw:Ox},{name:"wheat_stage1",draw:Px},{name:"wheat_stage2",draw:Nx},{name:"wheat_stage3",draw:Lx},{name:"tnt_top",draw:Ux},{name:"tnt_side",draw:Fx},{name:"tnt_bottom",draw:Bx},{name:"lava",draw:Gx},{name:"diamond_ore",draw:Hx},{name:"obsidian",draw:kx},{name:"bed_top",draw:Vx},{name:"bed_side",draw:Wx},{name:"wool",draw:zx}];function yd(){return Xx.map(t=>ox(t.draw))}const fr=4,gc=16,pf=fr*mr,mf=gc*mr;let wi=null;function qx(){const t=yd(),e=document.createElement("canvas");e.width=pf,e.height=mf;const n=e.getContext("2d");return n.clearRect(0,0,pf,mf),t.forEach((i,r)=>{const o=r%fr,s=Math.floor(r/fr),a=o*mr,l=s*mr;n.drawImage(i,a,l)}),wi=new yv(e),wi.magFilter=on,wi.minFilter=on,wi.generateMipmaps=!1,wi.colorSpace=en,wi.needsUpdate=!0,wi}function Uc(t){const e=t%fr,n=Math.floor(t/fr),i=5e-4,r=e/fr+i,o=(e+1)/fr-i,s=1-n/gc-i,a=1-(n+1)/gc+i;return{uMin:r,uMax:o,vMin:a,vMax:s}}function xa(){return wi}const c={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD_LOG:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,WATER:10,CACTUS:11,WOOD_PLANKS:12,COBBLESTONE:13,FLOWER_RED:14,FLOWER_YELLOW:15,CRAFTING_TABLE:16,TORCH:17,FURNACE:18,FURNACE_LIT:19,CHEST:20,FARMLAND:21,WHEAT_STAGE_1:22,WHEAT_STAGE_2:23,WHEAT_STAGE_3:24,TNT:25,LAVA:26,DIAMOND_ORE:27,OBSIDIAN:28,BED:29,WOOL:30,IRON_SWORD:101,IRON_PICKAXE:102,PORKCHOP:103,ROTTEN_FLESH:104,STICK:105,WOODEN_SWORD:106,WOODEN_PICKAXE:107,STONE_SWORD:108,STONE_PICKAXE:109,IRON_INGOT:110,COOKED_PORKCHOP:111,IRON_HELMET:112,IRON_CHESTPLATE:113,IRON_LEGGINGS:114,IRON_BOOTS:115,ARROW:116,BONE:117,STRING:118,SPIDER_EYE:119,BOW:120,WOODEN_HOE:121,STONE_HOE:122,IRON_HOE:123,WHEAT_SEEDS:124,WHEAT:125,BREAD:126,GUNPOWDER:127,DIAMOND:128,DIAMOND_SWORD:129,DIAMOND_PICKAXE:130,DIAMOND_HELMET:131,DIAMOND_CHESTPLATE:132,DIAMOND_LEGGINGS:133,DIAMOND_BOOTS:134,MUTTON:135,COOKED_MUTTON:136},xr={[c.GRASS]:"Grama",[c.DIRT]:"Terra",[c.STONE]:"Pedra",[c.SAND]:"Areia",[c.SNOW]:"Neve",[c.WOOD_LOG]:"Tronco de Carvalho",[c.LEAVES]:"Folhas",[c.COAL_ORE]:"Minério de Carvão",[c.IRON_ORE]:"Minério de Ferro",[c.WATER]:"Balde de Água",[c.CACTUS]:"Cacto",[c.WOOD_PLANKS]:"Tábuas de Madeira",[c.COBBLESTONE]:"Pedregulho",[c.FLOWER_RED]:"Flor Vermelha (Papoula)",[c.FLOWER_YELLOW]:"Flor Amarela (Dente-de-Leão)",[c.CRAFTING_TABLE]:"Bancada de Trabalho",[c.TORCH]:"Tocha",[c.FURNACE]:"Fornalha",[c.FURNACE_LIT]:"Fornalha (Acesa)",[c.CHEST]:"Baú de Madeira",[c.FARMLAND]:"Terra Arada",[c.WHEAT_STAGE_1]:"Brotos de Trigo",[c.WHEAT_STAGE_2]:"Trigo em Crescimento",[c.WHEAT_STAGE_3]:"Trigo Maduro",[c.TNT]:"Bloco de TNT",[c.LAVA]:"Balde de Lava",[c.DIAMOND_ORE]:"Minério de Diamante",[c.OBSIDIAN]:"Bloco de Obsidiana",[c.BED]:"Cama Confortável",[c.WOOL]:"Bloco de Lã Branca",[c.IRON_SWORD]:"Espada de Ferro",[c.IRON_PICKAXE]:"Picareta de Ferro",[c.PORKCHOP]:"Costela de Porco Crua",[c.ROTTEN_FLESH]:"Carne Podre",[c.STICK]:"Graveto",[c.WOODEN_SWORD]:"Espada de Madeira",[c.WOODEN_PICKAXE]:"Picareta de Madeira",[c.STONE_SWORD]:"Espada de Pedra",[c.STONE_PICKAXE]:"Picareta de Pedra",[c.IRON_INGOT]:"Barra de Ferro",[c.COOKED_PORKCHOP]:"Bife de Porco Assado",[c.IRON_HELMET]:"Capacete de Ferro",[c.IRON_CHESTPLATE]:"Peitoral de Ferro",[c.IRON_LEGGINGS]:"Calças de Ferro",[c.IRON_BOOTS]:"Botas de Ferro",[c.ARROW]:"Flecha",[c.BONE]:"Osso",[c.STRING]:"Linha de Teia",[c.SPIDER_EYE]:"Olho de Aranha",[c.BOW]:"Arco e Flecha",[c.WOODEN_HOE]:"Enxada de Madeira",[c.STONE_HOE]:"Enxada de Pedra",[c.IRON_HOE]:"Enxada de Ferro",[c.WHEAT_SEEDS]:"Sementes de Trigo",[c.WHEAT]:"Trigo",[c.BREAD]:"Pão Dourado",[c.GUNPOWDER]:"Pólvora",[c.DIAMOND]:"Gema de Diamante",[c.DIAMOND_SWORD]:"Espada de Diamante",[c.DIAMOND_PICKAXE]:"Picareta de Diamante",[c.DIAMOND_HELMET]:"Capacete de Diamante",[c.DIAMOND_CHESTPLATE]:"Peitoral de Diamante",[c.DIAMOND_LEGGINGS]:"Calças de Diamante",[c.DIAMOND_BOOTS]:"Botas de Diamante",[c.MUTTON]:"Carneiro Cru",[c.COOKED_MUTTON]:"Carneiro Assado"},Jo={[c.GRASS]:{top:0,side:1,bottom:2},[c.DIRT]:{top:2,side:2,bottom:2},[c.STONE]:{top:3,side:3,bottom:3},[c.SAND]:{top:4,side:4,bottom:4},[c.SNOW]:{top:5,side:13,bottom:2},[c.WOOD_LOG]:{top:7,side:6,bottom:7},[c.LEAVES]:{top:8,side:8,bottom:8},[c.COAL_ORE]:{top:9,side:9,bottom:9},[c.IRON_ORE]:{top:10,side:10,bottom:10},[c.WATER]:{top:11,side:11,bottom:11},[c.CACTUS]:{top:14,side:15,bottom:14},[c.WOOD_PLANKS]:{top:16,side:16,bottom:16},[c.COBBLESTONE]:{top:17,side:17,bottom:17},[c.FLOWER_RED]:{top:18,side:18,bottom:18},[c.FLOWER_YELLOW]:{top:19,side:19,bottom:19},[c.CRAFTING_TABLE]:{top:20,side:21,bottom:16},[c.TORCH]:{top:22,side:22,bottom:22},[c.FURNACE]:{top:3,side:23,bottom:3},[c.FURNACE_LIT]:{top:3,side:25,bottom:3},[c.CHEST]:{top:26,side:27,bottom:16},[c.FARMLAND]:{top:28,side:29,bottom:2},[c.WHEAT_STAGE_1]:{top:30,side:30,bottom:30},[c.WHEAT_STAGE_2]:{top:31,side:31,bottom:31},[c.WHEAT_STAGE_3]:{top:32,side:32,bottom:32},[c.TNT]:{top:33,side:34,bottom:35},[c.LAVA]:{top:36,side:36,bottom:36},[c.DIAMOND_ORE]:{top:37,side:37,bottom:37},[c.OBSIDIAN]:{top:38,side:38,bottom:38},[c.BED]:{top:39,side:40,bottom:16},[c.WOOL]:{top:41,side:41,bottom:41}};function Fc(t){return t>c.AIR&&t<100&&t!==c.WATER&&t!==c.LAVA&&t!==c.FLOWER_RED&&t!==c.FLOWER_YELLOW&&t!==c.TORCH&&t!==c.WHEAT_STAGE_1&&t!==c.WHEAT_STAGE_2&&t!==c.WHEAT_STAGE_3}function Kx(t){return t>=c.GRASS&&t<100}function Bc(t){return t===c.DIAMOND_SWORD||t===c.IRON_SWORD||t===c.STONE_SWORD||t===c.WOODEN_SWORD||t===c.BOW}function Yx(t){return t===c.DIAMOND_PICKAXE||t===c.IRON_PICKAXE||t===c.STONE_PICKAXE||t===c.WOODEN_PICKAXE}function Td(t){return t===c.IRON_HOE||t===c.STONE_HOE||t===c.WOODEN_HOE}function $x(t){return t===c.PORKCHOP||t===c.COOKED_PORKCHOP||t===c.MUTTON||t===c.COOKED_MUTTON||t===c.ROTTEN_FLESH||t===c.BREAD}function Zx(t){return t===c.IRON_HELMET||t===c.IRON_CHESTPLATE||t===c.IRON_LEGGINGS||t===c.IRON_BOOTS||t===c.DIAMOND_HELMET||t===c.DIAMOND_CHESTPLATE||t===c.DIAMOND_LEGGINGS||t===c.DIAMOND_BOOTS}function jx(t){switch(t){case c.DIAMOND_HELMET:return 3;case c.DIAMOND_CHESTPLATE:return 8;case c.DIAMOND_LEGGINGS:return 6;case c.DIAMOND_BOOTS:return 3;case c.IRON_HELMET:return 2;case c.IRON_CHESTPLATE:return 6;case c.IRON_LEGGINGS:return 5;case c.IRON_BOOTS:return 2;default:return 0}}function Jx(t){switch(t){case c.COOKED_PORKCHOP:return 8;case c.COOKED_MUTTON:return 6;case c.BREAD:return 5;case c.PORKCHOP:return 3;case c.MUTTON:return 2;case c.ROTTEN_FLESH:return 1;default:return 0}}function Qx(t){return t===c.AIR||t===c.WATER||t===c.LAVA||t===c.FLOWER_RED||t===c.FLOWER_YELLOW||t===c.TORCH||t===c.WHEAT_STAGE_1||t===c.WHEAT_STAGE_2||t===c.WHEAT_STAGE_3||t>=100}function eS(t){switch(t){case c.LEAVES:case c.FLOWER_RED:case c.FLOWER_YELLOW:case c.WHEAT_STAGE_1:case c.WHEAT_STAGE_2:case c.WHEAT_STAGE_3:return .15;case c.DIRT:case c.GRASS:case c.SAND:case c.SNOW:case c.FARMLAND:return .55;case c.TNT:case c.BED:case c.WOOL:return .4;case c.WOOD_LOG:case c.WOOD_PLANKS:case c.CRAFTING_TABLE:case c.CHEST:case c.CACTUS:return 1.4;case c.STONE:case c.COBBLESTONE:case c.FURNACE:case c.FURNACE_LIT:return 2.5;case c.COAL_ORE:case c.IRON_ORE:return 3.5;case c.DIAMOND_ORE:return 4.5;case c.OBSIDIAN:return 9;case c.TORCH:return .05;default:return 1}}function tS(t,e){const n=e===c.DIAMOND_PICKAXE,i=e===c.IRON_PICKAXE,r=e===c.STONE_PICKAXE,o=e===c.WOODEN_PICKAXE,s=e===c.DIAMOND_SWORD,a=e===c.IRON_SWORD,l=e===c.STONE_SWORD,u=e===c.WOODEN_SWORD;return t===c.OBSIDIAN?n?4:.2:t===c.DIAMOND_ORE?n?8:i?6:.4:t===c.STONE||t===c.COBBLESTONE||t===c.COAL_ORE||t===c.IRON_ORE||t===c.FURNACE||t===c.FURNACE_LIT?n?9.5:i?6.5:r?4.2:o?2.6:.65:t===c.LEAVES||t===c.WOOL||t===c.FLOWER_RED||t===c.FLOWER_YELLOW||t===c.WHEAT_STAGE_1||t===c.WHEAT_STAGE_2||t===c.WHEAT_STAGE_3?s?8.5:a||l||u?6:2:t===c.WOOD_LOG||t===c.WOOD_PLANKS||t===c.CRAFTING_TABLE||t===c.CHEST||t===c.BED?n?2.2:i||r||o?1.6:1:1}function Ad(t){switch(t){case c.STONE:return c.COBBLESTONE;case c.GRASS:return c.DIRT;case c.COAL_ORE:return c.COAL_ORE;case c.IRON_ORE:return c.IRON_ORE;case c.DIAMOND_ORE:return c.DIAMOND;case c.OBSIDIAN:return c.OBSIDIAN;case c.FURNACE:case c.FURNACE_LIT:return c.FURNACE;case c.FARMLAND:return c.DIRT;case c.WHEAT_STAGE_3:return c.WHEAT;case c.WHEAT_STAGE_1:case c.WHEAT_STAGE_2:return c.WHEAT_SEEDS;case c.LEAVES:return Math.random()<.35?c.LEAVES:0;case c.TNT:return c.TNT;case c.BED:return c.BED;case c.WOOL:return c.WOOL;default:return t}}const Ae=16,ht=64,nS=[{name:"top",dir:[0,1,0],colorKey:"top",vertices:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"bottom",dir:[0,-1,0],colorKey:"bottom",vertices:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"north",dir:[0,0,-1],colorKey:"side",vertices:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"south",dir:[0,0,1],colorKey:"side",vertices:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"east",dir:[1,0,0],colorKey:"side",vertices:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"west",dir:[-1,0,0],colorKey:"side",vertices:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]}];let nl=null,il=null;function iS(){return nl||(nl=new Ve({map:xa(),alphaTest:.2,side:xn})),nl}function rS(){return il||(il=new Ve({map:xa(),transparent:!0,opacity:.65,side:xn,depthWrite:!1})),il}class oS{constructor(e=0,n=0,i=0){this.cx=e,this.cy=n,this.cz=i,this.blocks=new Uint8Array(Ae*Ae*ht),this.mesh=null}_index(e,n,i){return e+i*Ae+n*Ae*Ae}getBlock(e,n,i){return e<0||e>=Ae||n<0||n>=ht||i<0||i>=Ae?c.AIR:this.blocks[this._index(e,n,i)]}setBlock(e,n,i,r){e<0||e>=Ae||n<0||n>=ht||i<0||i>=Ae||(this.blocks[this._index(e,n,i)]=r)}buildMesh(e){const n=[],i=[],r=[],o=[],s=[],a=[],l=[],u=[];let d=0,h=0;const f=this.cx*Ae,m=this.cy*ht,_=this.cz*Ae;for(let p=0;p<ht;p++)for(let b=0;b<Ae;b++)for(let E=0;E<Ae;E++){const y=this.getBlock(E,p,b);if(y===c.AIR)continue;const U=y===c.WATER,C=Jo[y];if(C)for(const R of nS){const L=E+R.dir[0],T=p+R.dir[1],M=b+R.dir[2];let w;if(L>=0&&L<Ae&&T>=0&&T<ht&&M>=0&&M<Ae?w=this.getBlock(L,T,M):e?w=e(f+L,m+T,_+M):w=c.AIR,U){if(w!==c.AIR)continue}else if(!Qx(w))continue;const W=C[R.colorKey],H=Uc(W),$=U?s:n,Z=U?a:i,q=U?l:r,j=U?u:o,k=U?h:d;for(let re=0;re<4;re++){const he=R.vertices[re];$.push(E+he[0],p+he[1],b+he[2]),Z.push(R.dir[0],R.dir[1],R.dir[2]);const Te=R.localUVs[re][0],ke=R.localUVs[re][1];q.push(H.uMin+Te*(H.uMax-H.uMin),H.vMin+ke*(H.vMax-H.vMin))}j.push(k,k+1,k+2,k,k+2,k+3),U?h+=4:d+=4}}let v=this._makeMesh(n,i,r,o,iS());v.position.set(f,m,_),this.mesh=v;let g=null;return s.length>0&&(g=this._makeMesh(s,a,l,u,rS()),g.position.set(f,m,_),g.renderOrder=1),{solidMesh:v,waterMesh:g}}_makeMesh(e,n,i,r,o){const s=new hn;return s.setAttribute("position",new sn(e,3)),s.setAttribute("normal",new sn(n,3)),s.setAttribute("uv",new sn(i,2)),s.setIndex(r),new ie(s,o)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null)}}const Sn=new Map,na=new Map,ia=new Map,rn=18,Fi=5,sS=7;let gf=NaN,_f=NaN;const rl=[];function ri(t,e){let n=t*374761393+e*668265263+1234567|0;return n=(n^n>>13)*1274126177|0,(n&2147483647)/2147483647}function aS(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,o=e-i,s=r*r*(3-2*r),a=o*o*(3-2*o),l=ri(n,i),u=ri(n+1,i),d=ri(n,i+1),h=ri(n+1,i+1),f=l*(1-s)+u*s,m=d*(1-s)+h*s;return f*(1-a)+m*a}function eo(t,e,n=4,i=.5,r=2){let o=0,s=1,a=1,l=0;for(let u=0;u<n;u++)o+=aS(t*s,e*s)*a,l+=a,a*=i,s*=r;return o/l}const ot={OCEAN:"ocean",PLAINS:"plains",FOREST:"forest",DESERT:"desert",SNOWY_MOUNTAINS:"snowy_mountains"};function lo(t,e){const n=eo(t*.0025,e*.0025,3);if(n<.32)return ot.OCEAN;const i=eo(t*.0035+150,e*.0035+150,3),r=eo(t*.004+300,e*.004+300,3);return n>.58&&i<.38?ot.SNOWY_MOUNTAINS:i>.62&&r<.48?ot.DESERT:r>.52?ot.FOREST:ot.PLAINS}function pi(t,e){const n=lo(t,e),i=eo(t*.025,e*.025,3);switch(n){case ot.OCEAN:{const r=eo(t*.01,e*.01,2),o=rn-2-r*10+i*3;return Math.max(3,Math.min(ht-6,Math.floor(o)))}case ot.DESERT:{const o=21+(Math.sin(t*.03+e*.015)*4+Math.cos(e*.03)*3)+i*2.5;return Math.max(rn+1,Math.min(ht-6,Math.floor(o)))}case ot.SNOWY_MOUNTAINS:{const r=eo(t*.015,e*.015,4),o=28+Math.pow(r,1.8)*32+i*4;return Math.max(24,Math.min(ht-4,Math.floor(o)))}case ot.FOREST:{const o=23+(Math.sin(t*.022)*5+Math.cos(e*.028)*4+Math.sin((t-e)*.035)*2.5)+i*3;return Math.max(rn+1,Math.min(ht-6,Math.floor(o)))}case ot.PLAINS:default:{const o=22+(Math.sin(t*.02)*4+Math.cos(e*.025)*4+Math.sin((t+e)*.04)*2)+i*2.5;return Math.max(rn+1,Math.min(ht-6,Math.floor(o)))}}}function vf(t,e,n,i,r){for(let s=i;s<i+r;s++)s<ht&&t.setBlock(e,s,n,c.WOOD_LOG);const o=i+r-1;for(let s=0;s<3;s++){const a=s<2?2:1;for(let l=-a;l<=a;l++)for(let u=-a;u<=a;u++){if(Math.abs(l)===a&&Math.abs(u)===a&&s<2)continue;const d=e+l,h=o+s,f=n+u;d>=0&&d<Ae&&h>=0&&h<ht&&f>=0&&f<Ae&&t.getBlock(d,h,f)===c.AIR&&t.setBlock(d,h,f,c.LEAVES)}}}function lS(t,e,n,i,r){for(let s=i;s<i+r;s++)s<ht&&t.setBlock(e,s,n,c.WOOD_LOG);const o=i+r;for(let s=i+2;s<=o+1;s++){const l=(o+1-s)%2===0?2:1;for(let u=-l;u<=l;u++)for(let d=-l;d<=l;d++){if(Math.abs(u)===l&&Math.abs(d)===l&&l>1)continue;const h=e+u,f=s,m=n+d;h>=0&&h<Ae&&f>=0&&f<ht&&m>=0&&m<Ae&&t.getBlock(h,f,m)===c.AIR&&t.setBlock(h,f,m,c.LEAVES)}}}function cS(t,e,n,i,r){for(let o=i;o<i+r;o++)o<ht&&t.getBlock(e,o,n)===c.AIR&&t.setBlock(e,o,n,c.CACTUS)}function ol(t,e,n,i,r){e>=0&&e<Ae&&i>=0&&i<Ae&&n<ht&&t.getBlock(e,n,i)===c.AIR&&t.setBlock(e,n,i,r)}function Ri(t,e,n){let i=t*374761393+e*668265263+n*982451653+1234567|0;return i=(i^i>>13)*1274126177|0,(i&2147483647)/2147483647}function xf(t,e,n){const i=Math.floor(t),r=Math.floor(e),o=Math.floor(n),s=t-i,a=e-r,l=n-o,u=s*s*(3-2*s),d=a*a*(3-2*a),h=l*l*(3-2*l),f=Ri(i,r,o),m=Ri(i+1,r,o),_=Ri(i,r+1,o),v=Ri(i+1,r+1,o),g=Ri(i,r,o+1),p=Ri(i+1,r,o+1),b=Ri(i,r+1,o+1),E=Ri(i+1,r+1,o+1),y=f*(1-u)+m*u,U=_*(1-u)+v*u,C=g*(1-u)+p*u,R=b*(1-u)+E*u,L=y*(1-d)+U*d,T=C*(1-d)+R*d;return L*(1-h)+T*h}function bd(t,e,n,i){if(e<2||e>i||i<=rn+1&&e>=i-2)return!1;const r=xf(t*.045,e*.075,n*.045)-.5,o=xf(t*.045+137,e*.075+137,n*.045+137)-.5;return r*r+o*o<.022}function Rd(t,e){const n=new oS(t,0,e),i=t*Ae,r=e*Ae;for(let o=0;o<Ae;o++)for(let s=0;s<Ae;s++){const a=i+s,l=r+o,u=pi(a,l),d=lo(a,l);for(let h=0;h<=u;h++){let f;h===0||h<u-4?f=c.STONE:h<u?d===ot.DESERT||d===ot.OCEAN&&u<=rn+1?f=c.SAND:f=c.DIRT:d===ot.DESERT?f=c.SAND:d===ot.SNOWY_MOUNTAINS?f=u>=36?c.SNOW:c.GRASS:d===ot.OCEAN||u<=rn+1?f=c.SAND:f=c.GRASS,h>=2&&bd(a,h,l,u)&&(h<=8?f=c.LAVA:h<=rn-8?f=c.WATER:f=c.AIR),n.setBlock(s,h,o,f)}for(let h=u+1;h<=rn;h++)n.getBlock(s,h,o)===c.AIR&&n.setBlock(s,h,o,c.WATER)}for(let o=1;o<Ae-1;o++)for(let s=1;s<Ae-1;s++){const a=i+s,l=r+o,u=pi(a,l),d=lo(a,l),h=n.getBlock(s,u,o),f=ri(a,l);if(u>rn){if(d===ot.PLAINS&&h===c.GRASS)if(f<.025&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const m=4+Math.floor(ri(a+555,l+777)*3);u+m+4<ht&&vf(n,s,o,u+1,m)}else f>.94&&f<.97?ol(n,s,u+1,o,c.FLOWER_RED):f>=.97&&ol(n,s,u+1,o,c.FLOWER_YELLOW);else if(d===ot.FOREST&&h===c.GRASS)if(f<.085&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const m=4+Math.floor(ri(a+444,l+666)*4);u+m+4<ht&&vf(n,s,o,u+1,m)}else f>.96&&ol(n,s,u+1,o,c.FLOWER_RED);else if(d===ot.DESERT&&h===c.SAND){if(f<.028){const m=2+(f>.015?1:0);cS(n,s,o,u+1,m)}}else if(d===ot.SNOWY_MOUNTAINS&&(h===c.GRASS||h===c.SNOW)&&f<.035&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const m=5+Math.floor(ri(a+333,l+888)*4);u+m+4<ht&&lS(n,s,o,u+1,m)}}}for(let o=0;o<Ae;o++)for(let s=0;s<Ae;s++){const a=i+s,l=r+o,u=pi(a,l);for(let d=1;d<u-3;d++)if(n.getBlock(s,d,o)===c.STONE){const h=ri(a*31+d*97,l*53+d*13);d<=16&&h>.992?n.setBlock(s,d,o,c.DIAMOND_ORE):h<.018?n.setBlock(s,d,o,c.COAL_ORE):h>.982&&n.setBlock(s,d,o,c.IRON_ORE)}}return n}function Kt(t,e,n){if(e<0||e>=ht)return c.AIR;const i=Math.floor(t/Ae),r=Math.floor(n/Ae),o=`${i},0,${r}`,s=Sn.get(o);if(s){const l=(t%Ae+Ae)%Ae,u=(n%Ae+Ae)%Ae;return s.getBlock(l,e,u)}const a=pi(t,n);if(e>a)return e<=rn?c.WATER:c.AIR;if(e>=2&&bd(t,e,n,a))return e<=8?c.LAVA:e<=rn-8?c.WATER:c.AIR;if(e===a){const l=lo(t,n);return l===ot.DESERT||a<=rn+1?c.SAND:l===ot.SNOWY_MOUNTAINS&&a>=36?c.SNOW:c.GRASS}return e>=a-4?lo(t,n)===ot.DESERT?c.SAND:c.DIRT:c.STONE}function wd(t,e,n){return Fc(Kt(t,e,n))}function Sa(t,e){const n=`${t.cx},0,${t.cz}`,i=na.get(n),r=ia.get(n);i&&(e.remove(i),i.geometry.dispose()),r&&(e.remove(r),r.geometry.dispose());const{solidMesh:o,waterMesh:s}=t.buildMesh(Kt);na.set(n,o),e.add(o),s&&(ia.set(n,s),e.add(s))}function uS(t){console.log("[World] Generating starting biomes and chunks...");for(let e=-Fi;e<=Fi;e++)for(let n=-Fi;n<=Fi;n++){const i=Rd(n,e);Sn.set(`${n},0,${e}`,i)}for(const e of Sn.values())Sa(e,t);console.log(`[World] Ready! ${Sn.size} chunks generated.`)}function Sf(t,e){if(!e)return;const n=Math.floor(t.x/Ae),i=Math.floor(t.z/Ae);if(n!==gf||i!==_f){gf=n,_f=i;for(const[o,s]of Sn.entries())if(Math.max(Math.abs(s.cx-n),Math.abs(s.cz-i))>sS){const l=na.get(o),u=ia.get(o);l&&(e.remove(l),l.geometry.dispose(),na.delete(o)),u&&(e.remove(u),u.geometry.dispose(),ia.delete(o)),s.dispose(),Sn.delete(o)}for(let o=-Fi;o<=Fi;o++)for(let s=-Fi;s<=Fi;s++){const a=n+s,l=i+o,u=`${a},0,${l}`;if(!Sn.has(u)){const d=Rd(a,l);Sn.set(u,d),rl.push(d)}}}const r=Math.min(2,rl.length);for(let o=0;o<r;o++){const s=rl.shift();Sn.has(`${s.cx},0,${s.cz}`)&&Sa(s,e)}}function Gc(){return{x:.5,y:pi(0,0)+2,z:.5}}function mi(t,e,n,i,r){if(n<0||n>=ht)return;if(r===c.WATER){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,m,_]of h)Kt(f,m,_)===c.LAVA&&mi(t,f,m,_,c.OBSIDIAN)}else if(r===c.LAVA){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,m,_]of h)if(Kt(f,m,_)===c.WATER){r=c.OBSIDIAN;break}}const o=Math.floor(e/Ae),s=Math.floor(i/Ae),a=`${o},0,${s}`,l=Sn.get(a);if(!l)return;const u=(e%Ae+Ae)%Ae,d=(i%Ae+Ae)%Ae;l.setBlock(u,n,d,r),Sa(l,t),u===0&&Fs(t,o-1,s),u===Ae-1&&Fs(t,o+1,s),d===0&&Fs(t,o,s-1),d===Ae-1&&Fs(t,o,s+1)}function Fs(t,e,n){const i=Sn.get(`${e},0,${n}`);i&&Sa(i,t)}const Ro=6;function fS(t,e){const n=e.clone().normalize();let i=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const s=n.x>=0?1:-1,a=n.y>=0?1:-1,l=n.z>=0?1:-1,u=n.x!==0?Math.abs(1/n.x):1/0,d=n.y!==0?Math.abs(1/n.y):1/0,h=n.z!==0?Math.abs(1/n.z):1/0;let f=n.x!==0?(n.x>0?i+1-t.x:t.x-i)*u:1/0,m=n.y!==0?(n.y>0?r+1-t.y:t.y-r)*d:1/0,_=n.z!==0?(n.z>0?o+1-t.z:t.z-o)*h:1/0,v=i,g=r,p=o,b=0,E=0,y=0;for(let U=0;U<Ro*3;U++){if(r>=0&&r<ht){const C=Kt(i,r,o);if(Fc(C))return{hit:{x:i,y:r,z:o},normal:{x:b,y:E,z:y},prev:{x:v,y:g,z:p}}}if(v=i,g=r,p=o,f<m)if(f<_){if(f>Ro)break;i+=s,f+=u,b=-s,E=0,y=0}else{if(_>Ro)break;o+=l,_+=h,b=0,E=0,y=-l}else if(m<_){if(m>Ro)break;r+=a,m+=d,b=0,E=-a,y=0}else{if(_>Ro)break;o+=l,_+=h,b=0,E=0,y=-l}}return null}const dS=480;let Vn=.2,ra=null,oa=null,qr=null,oi=null,Ci=null,Vr=null;const hS={dawn:new Ce(16096779),morning:new Ce(9684477),noon:new Ce(6333946),sunset:new Ce(14753096),dusk:new Ce(4405450),midnight:new Ce(329750),predawn:new Ce(1973067)},pS={dawn:new Ce(16498468),morning:new Ce(9684477),noon:new Ce(7911912),sunset:new Ce(16007006),dusk:new Ce(3223169),midnight:new Ce(329489),predawn:new Ce(1973067)};function mS(t,e={}){oi=e.dirLight||null,Ci=e.hemiLight||null,Vr=e.ambientLight||null,qr=new Ft,t.add(qr);const n=new fe(20,20,20),i=new vi({color:16776171});ra=new ie(n,i),qr.add(ra);const r=new fe(16,16,16),o=new vi({color:15857145});oa=new ie(r,o),qr.add(oa),Cd(0,t,null)}function Mf(t,e,n,i=null){Vn+=t/dS,Vn>=1&&(Vn-=1),n&&qr&&qr.position.copy(n.position);const r=Vn*Math.PI*2-Math.PI/2,o=260,s=Math.cos(r)*o,a=Math.sin(r)*o,l=20;ra&&ra.position.set(s,a,l),oa&&oa.position.set(-s,-a,-l),oi&&(co()?oi.position.set(s,Math.max(15,a),l):oi.position.set(-s,Math.max(15,-a),-l)),Cd(t,e,i)}function Ef(t,e){if(e<.15){const n=e/.15;return t.dawn.clone().lerp(t.morning,n)}else if(e<.25){const n=(e-.15)/.1;return t.morning.clone().lerp(t.noon,n)}else if(e<.5){const n=(e-.25)/.25;return t.noon.clone().lerp(t.sunset,n)}else if(e<.58){const n=(e-.5)/.08;return t.sunset.clone().lerp(t.dusk,n)}else if(e<.75){const n=(e-.58)/.17;return t.dusk.clone().lerp(t.midnight,n)}else if(e<.92){const n=(e-.75)/.17;return t.midnight.clone().lerp(t.predawn,n)}else{const n=(e-.92)/.08;return t.predawn.clone().lerp(t.dawn,n)}}function Cd(t,e,n){const i=Ef(hS,Vn),r=Ef(pS,Vn);e&&e.fog&&e.fog.color.copy(r),n&&n.setClearColor(i);const o=Math.sin(Vn*Math.PI*2);oi&&(o>0?(oi.color.set(16774624),oi.intensity=.4+o*.85):(oi.color.set(9741240),oi.intensity=Math.max(.12,-o*.28))),Ci&&(o>0?(Ci.color.set(8900331),Ci.groundColor.set(5596723),Ci.intensity=.3+o*.4):(Ci.color.set(1976635),Ci.groundColor.set(988970),Ci.intensity=.15)),Vr&&(o>0?(Vr.color.set(16777215),Vr.intensity=.25+o*.2):(Vr.color.set(6583435),Vr.intensity=.12))}function co(){return Vn<.5}function gS(){return!co()}function _S(){const t=(Vn*24+6)%24,e=Math.floor(t),n=Math.floor((t-e)*60),i=e<10?"0"+e:""+e,r=n<10?"0"+n:""+n;return`${i}:${r}`}function vS(){Vn=.05}const xS={[c.GRASS]:5938743,[c.DIRT]:9136404,[c.STONE]:8947848,[c.SAND]:15259274,[c.SNOW]:15790320,[c.WOOD_LOG]:7029286,[c.LEAVES]:3832352,[c.COAL_ORE]:4473924,[c.IRON_ORE]:12096874,[c.WATER]:3702992,[c.CACTUS]:1483594,[c.WOOD_PLANKS]:11817737,[c.COBBLESTONE]:6583435,[c.FLOWER_RED]:14427686,[c.FLOWER_YELLOW]:15381256};let Sr=null;const Xo=[],SS=new fe(.12,.12,.12),MS=new fe(.08,.08,.08);function ES(t){Sr=t}function _c(t,e,n,i){if(!Sr)return;const r=xS[i]||11184810,o=12;for(let s=0;s<o;s++){const a=new Ve({color:r}),l=new ie(SS,a);l.position.set(t+.2+Math.random()*.6,e+.2+Math.random()*.6,n+.2+Math.random()*.6);const u=(Math.random()-.5)*4.5,d=Math.random()*4+1.5,h=(Math.random()-.5)*4.5,f=(Math.random()-.5)*10,m=(Math.random()-.5)*10;Sr.add(l),Xo.push({mesh:l,vx:u,vy:d,vz:h,rx:f,ry:m,life:.6+Math.random()*.3,age:0})}}function Id(t,e,n,i=15680580){if(!Sr)return;const r=8;for(let o=0;o<r;o++){const s=new Ve({color:i}),a=new ie(MS,s);a.position.set(t,e,n);const l=(Math.random()-.5)*5,u=Math.random()*3.5+1,d=(Math.random()-.5)*5;Sr.add(a),Xo.push({mesh:a,vx:l,vy:u,vz:d,rx:Math.random()*10,ry:Math.random()*10,life:.35+Math.random()*.2,age:0})}}function yS(t){if(Sr)for(let e=Xo.length-1;e>=0;e--){const n=Xo[e];if(n.age+=t,n.age>=n.life){Sr.remove(n.mesh),n.mesh.material.dispose(),Xo.splice(e,1);continue}n.vy-=18*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.x+=n.rx*t,n.mesh.rotation.y+=n.ry*t;const i=Math.max(.01,1-n.age/n.life);n.mesh.scale.set(i,i,i)}}let gr=null;const dr=[],TS=new fe(.26,.26,.26),AS=30;function bS(t){gr=t}function Ut(t,e,n,i){if(!gr)return;let r,o,s,a;if(typeof t=="number"&&typeof i=="number"?(o=t,s=e,a=n,r=i):(r=t,o=e,s=n,a=i),!r||r===c.AIR)return;if(dr.length>=AS){const h=dr.shift();h&&h.mesh&&gr.remove(h.mesh)}const l=Jo[r]||{side:1};Uc(l.side||0);const u=new Ve({map:xa()}),d=new ie(TS,u);d.position.set(o+(Math.random()-.5)*.2,s+.3,a+(Math.random()-.5)*.2),gr.add(d),dr.push({itemType:r,mesh:d,pos:d.position.clone(),vel:new N((Math.random()-.5)*1.8,3,(Math.random()-.5)*1.8),age:0,bobOffset:Math.random()*Math.PI*2,collected:!1})}function RS(t,e){if(!gr)return;const i=Wi().clone().add(new N(0,.9,0));for(let r=dr.length-1;r>=0;r--){const o=dr[r];if(o.age+=t,o.age>120){gr.remove(o.mesh),dr.splice(r,1);continue}const s=o.pos.distanceTo(i);if(s<2.5&&o.age>.3){const a=Math.min(14,1/(s*.15+.05));if(o.pos.lerp(i,t*a),s<.65&&An(o.itemType)){Bv(),gr.remove(o.mesh),dr.splice(r,1);continue}}else{o.vel.y-=18*t,o.pos.x+=o.vel.x*t,o.pos.z+=o.vel.z*t,o.pos.y+=o.vel.y*t,o.vel.x*=Math.exp(-6*t),o.vel.z*=Math.exp(-6*t);const a=pi(Math.floor(o.pos.x),Math.floor(o.pos.z))+1.15;o.pos.y<=a&&(o.pos.y=a,o.vel.set(0,0,0))}o.mesh.position.copy(o.pos),o.mesh.position.y+=Math.sin(e*3.5+o.bobOffset)*.06,o.mesh.rotation.y+=t*2.2,o.mesh.rotation.x=Math.sin(e*2+o.bobOffset)*.15}}const je={PIG:"pig",SHEEP:"sheep",ZOMBIE:"zombie",SKELETON:"skeleton",SPIDER:"spider",CREEPER:"creeper"};let Ct=null;const En=[],ir=[],Zs=[];let sl=0;const wS=10;function CS(t,e,n,i,r,o){const s=i-t,a=r-e,l=o-n,u=Math.hypot(s,a,l);if(u<.3)return!0;const d=Math.ceil(u*2.2),h=s/d,f=a/d,m=l/d;for(let _=1;_<d;_++){const v=Math.floor(t+h*_),g=Math.floor(e+f*_),p=Math.floor(n+m*_);if(wd(v,g,p))return!1}return!0}function IS(){const t=new Ft,e=new Ve({color:16020150}),n=new Ve({color:16478597}),i=new Ve({color:2042167}),r=new ie(new fe(.7,.5,.9),e);r.position.set(0,.45,0),t.add(r);const o=new ie(new fe(.45,.45,.45),e);o.position.set(0,.65,-.55),t.add(o);const s=new ie(new fe(.24,.16,.12),n);s.position.set(0,.58,-.8),t.add(s);const a=new ie(new fe(.08,.08,.02),i);a.position.set(-.16,.72,-.78);const l=new ie(new fe(.08,.08,.02),i);l.position.set(.16,.72,-.78),t.add(a),t.add(l);const u=new fe(.18,.35,.18),d=[],h=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const f of h){const m=new ie(u,e);m.position.set(...f),t.add(m),d.push(m)}return{group:t,legs:d,head:o,body:r,originalMats:[e,n]}}function DS(){const t=new Ft,e=new Ve({color:16317180}),n=new Ve({color:3359061}),i=new Ve({color:16478597}),r=new Ve({color:988970}),o=new ie(new fe(.75,.6,.95),e);o.position.set(0,.5,0),t.add(o);const s=new ie(new fe(.42,.42,.42),n);s.position.set(0,.68,-.55),t.add(s);const a=new ie(new fe(.44,.2,.44),e);a.position.set(0,.86,-.55),t.add(a);const l=new ie(new fe(.22,.14,.12),i);l.position.set(0,.6,-.78),t.add(l);const u=new ie(new fe(.08,.08,.02),r);u.position.set(-.16,.74,-.76);const d=new ie(new fe(.08,.08,.02),r);d.position.set(.16,.74,-.76),t.add(u),t.add(d);const h=new fe(.16,.36,.16),f=[],m=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const _ of m){const v=new ie(h,n);v.position.set(..._),t.add(v),f.push(v)}return{group:t,legs:f,head:s,body:o,originalMats:[e,n]}}function OS(){const t=new Ft,e=new Ve({color:3899966}),n=new Ve({color:440020}),i=new Ve({color:1981066}),r=new Ve({color:988970}),o=new ie(new fe(.44,.44,.44),e);o.position.set(0,1.45,0),t.add(o);const s=new ie(new fe(.08,.06,.02),r);s.position.set(-.12,1.48,-.23);const a=new ie(new fe(.08,.06,.02),r);a.position.set(.12,1.48,-.23),t.add(s),t.add(a);const l=new ie(new fe(.5,.65,.28),n);l.position.set(0,.9,0),t.add(l);const u=new fe(.16,.16,.55),d=new ie(u,e);d.position.set(-.35,1.05,-.26);const h=new ie(u,e);h.position.set(.35,1.05,-.26),t.add(d),t.add(h);const f=new fe(.2,.6,.22),m=new ie(f,i);m.position.set(-.13,.3,0);const _=new ie(f,i);return _.position.set(.13,.3,0),t.add(m),t.add(_),{group:t,legs:[m,_],arms:[d,h],head:o,body:l,originalMats:[e,n,i]}}function PS(){const t=new Ft,e=new Ve({color:13751771}),n=new Ve({color:988970}),i=new Ve({color:7877903}),r=new ie(new fe(.42,.42,.42),e);r.position.set(0,1.45,0),t.add(r);const o=new ie(new fe(.09,.07,.02),n);o.position.set(-.11,1.46,-.22);const s=new ie(new fe(.09,.07,.02),n);s.position.set(.11,1.46,-.22),t.add(o),t.add(s);const a=new ie(new fe(.42,.6,.22),e);a.position.set(0,.9,0),t.add(a);const l=new fe(.12,.6,.12),u=new ie(l,e);u.position.set(-.3,.9,0);const d=new ie(l,e);d.position.set(.3,.9,0),t.add(u),t.add(d);const h=new ie(new fe(.08,.5,.08),i);h.position.set(-.3,.85,-.2),h.rotation.x=.4,t.add(h);const f=new fe(.14,.6,.14),m=new ie(f,e);m.position.set(-.12,.3,0);const _=new ie(f,e);return _.position.set(.12,.3,0),t.add(m),t.add(_),{group:t,legs:[m,_],arms:[u,d],head:r,body:a,originalMats:[e,i]}}function NS(){const t=new Ft,e=new Ve({color:1976635}),n=new vi({color:15680580}),i=new ie(new fe(.65,.45,.7),e);i.position.set(0,.35,.4),t.add(i);const r=new ie(new fe(.45,.35,.45),e);r.position.set(0,.3,-.25),t.add(r);const o=new fe(.06,.06,.02),s=new ie(o,n);s.position.set(-.12,.32,-.48);const a=new ie(o,n);a.position.set(.12,.32,-.48),t.add(s),t.add(a);const l=new fe(.6,.08,.08),u=[];for(let d=0;d<4;d++){const h=new ie(l,e);h.position.set(-.45,.22,-.3+d*.22),h.rotation.z=.35,t.add(h),u.push(h);const f=new ie(l,e);f.position.set(.45,.22,-.3+d*.22),f.rotation.z=-.35,t.add(f),u.push(f)}return{group:t,legs:u,head:r,body:i,originalMats:[e,n]}}function LS(){const t=new Ft,e=new Ve({color:1409085}),n=new Ve({color:988970}),i=new ie(new fe(.46,.46,.46),e);i.position.set(0,1.45,0),t.add(i);const r=new ie(new fe(.09,.09,.02),n);r.position.set(-.11,1.5,-.24);const o=new ie(new fe(.09,.09,.02),n);o.position.set(.11,1.5,-.24);const s=new ie(new fe(.18,.16,.02),n);s.position.set(0,1.36,-.24),t.add(r),t.add(o),t.add(s);const a=new ie(new fe(.46,.65,.26),e);a.position.set(0,.9,0),t.add(a);const l=new fe(.2,.45,.2),u=[],d=[[-.14,.22,-.16],[.14,.22,-.16],[-.14,.22,.16],[.14,.22,.16]];for(const h of d){const f=new ie(l,e);f.position.set(...h),t.add(f),u.push(f)}return{group:t,legs:u,head:i,body:a,originalMats:[e,n]}}function US(t){Ct=t}function rr(t,e,n,i){if(!Ct)return null;let r,o=10,s=1.4;t===je.PIG?(r=IS(),o=10,s=.6):t===je.SHEEP?(r=DS(),o=10,s=.65):t===je.SKELETON?(r=PS(),o=16,s=1.45):t===je.SPIDER?(r=NS(),o=14,s=.35):t===je.CREEPER?(r=LS(),o=18,s=1.45):(r=OS(),o=20,s=1.45),r.group.position.set(e,n,i),Ct.add(r.group);const a={type:t,model:r,pos:new N(e,n,i),vel:new N(0,0,0),yaw:0,health:o,maxHealth:o,eyeHeight:s,state:"idle",stateTimer:Math.random()*2,lastSeenPos:null,canSeePlayer:!1,losCheckTimer:Math.random()*.25,attackCooldown:0,shootCooldown:2,fuseTimer:0,isFusing:!1,isAngered:!1,burnTimer:0,onGround:!0};return En.push(a),a}function Hc(t,e,n){if(!t||t.health<=0)return;t.health-=e,Pv(),Id(t.pos.x,t.pos.y+t.eyeHeight*.5,t.pos.z);const i=n.clone().multiplyScalar(4.5);t.vel.x+=i.x,t.vel.z+=i.z,t.vel.y=3.5,t.isAngered=!0,t.type===je.PIG?(t.state="flee",t.stateTimer=4.5,Lv()):t.type===je.SHEEP?(t.state="flee",t.stateTimer=4.5,vd()):(t.state="chase",t.lastSeenPos=Wi().clone(),t.type===je.ZOMBIE&&Nv()),t.health<=0&&kc(t)}function kc(t){Ct.remove(t.model.group);const e=En.indexOf(t);e!==-1&&En.splice(e,1),t.type===je.PIG?Ut(c.PORKCHOP,t.pos.x,t.pos.y+.5,t.pos.z):t.type===je.SHEEP?(Ut(c.WOOL,t.pos.x,t.pos.y+.5,t.pos.z),Ut(c.MUTTON,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.ZOMBIE?(Ut(c.ROTTEN_FLESH,t.pos.x,t.pos.y+.5,t.pos.z),Math.random()<.25&&Ut(c.IRON_INGOT,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.SKELETON?(Ut(c.BONE,t.pos.x,t.pos.y+.5,t.pos.z),Ut(c.ARROW,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.SPIDER?(Ut(c.STRING,t.pos.x,t.pos.y+.5,t.pos.z),Ut(c.SPIDER_EYE,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.CREEPER&&Ut(c.GUNPOWDER,t.pos.x,t.pos.y+.5,t.pos.z)}function Dd(t,e,n,i=2.8,r=16){if(!Ct)return;Hv();const o=new N(t,e,n),a=Wi().clone().add(new N(0,.9,0)).sub(o),l=a.length();if(l<i*2.2){const v=1-l/(i*2.2),g=Math.max(2,Math.round(r*v));uo(g,a.clone().normalize())}for(const v of En)v.pos.distanceTo(o)<i*2&&Hc(v,14,v.pos.clone().sub(o).normalize());const u=Math.floor(t-i),d=Math.ceil(t+i),h=Math.max(1,Math.floor(e-i)),f=Math.min(63,Math.ceil(e+i)),m=Math.floor(n-i),_=Math.ceil(n+i);for(let v=m;v<=_;v++)for(let g=u;g<=d;g++)for(let p=h;p<=f;p++)if(Math.hypot(g+.5-t,p+.5-e,v+.5-n)<=i){const E=Kt(g,p,v);if(E!==c.AIR&&E!==c.WATER&&(_c(g,p,v,E),mi(Ct,g,p,v,c.AIR),Math.random()<.4)){const y=Ad(E);y>0&&Ut(y,g+.5,p+.5,v+.5)}}}function FS(t,e,n){if(!Ct)return;mi(Ct,t,e,n,c.AIR);const i=new fe(.98,.98,.98),r=new Ve({color:15680580}),o=new ie(i,r);o.position.set(t+.5,e+.5,n+.5),Ct.add(o),_d(),Zs.push({mesh:o,mat:r,pos:new N(t+.5,e+.5,n+.5),timer:2.2,blinkTimer:0})}function BS(t){for(let e=Zs.length-1;e>=0;e--){const n=Zs[e];n.timer-=t,n.blinkTimer+=t*10,Math.floor(n.blinkTimer)%2===0?n.mat.color.setHex(16777215):n.mat.color.setHex(15680580),n.timer<=0&&(Ct.remove(n.mesh),Zs.splice(e,1),Dd(n.pos.x,n.pos.y,n.pos.z,3.8,20))}}function GS(t,e){if(!Ct)return;Gv();const n=new fe(.08,.08,.6),i=new vi({color:16317180}),r=new ie(n,i);r.position.copy(t),Ct.add(r);const o=e.clone().multiplyScalar(24);ir.push({mesh:r,pos:t.clone(),vel:o,life:5,isPlayerShot:!0})}function HS(t,e){if(!Ct)return;const n=new fe(.08,.08,.5),i=new vi({color:14870768}),r=new ie(n,i);r.position.copy(t),Ct.add(r);const s=e.clone().sub(t).normalize().multiplyScalar(16);ir.push({mesh:r,pos:t.clone(),vel:s,life:4,isPlayerShot:!1})}function kS(t){const e=Wi();for(let n=ir.length-1;n>=0;n--){const i=ir[n];if(i.life-=t,i.vel.y-=12*t,i.pos.addScaledVector(i.vel,t),i.mesh.position.copy(i.pos),i.isPlayerShot){let r=!1;for(const o of En){const s=o.pos.clone().add(new N(0,o.eyeHeight*.5,0));if(i.pos.distanceTo(s)<.9){Hc(o,9,i.vel.clone().normalize()),Ct.remove(i.mesh),ir.splice(n,1),r=!0;break}}if(r)continue}else if(i.pos.distanceTo(e.clone().add(new N(0,.9,0)))<.75){uo(4,i.vel.clone().normalize()),Ct.remove(i.mesh),ir.splice(n,1);continue}(wd(Math.floor(i.pos.x),Math.floor(i.pos.y),Math.floor(i.pos.z))||i.life<=0)&&(Ct.remove(i.mesh),ir.splice(n,1))}}function VS(t){const e=Wi();sl+=t,sl>4&&En.length<wS&&(sl=0,WS(e)),kS(t),BS(t);for(let n=En.length-1;n>=0;n--){const i=En[n],r=i.pos.distanceTo(e);if(r>52){Ct.remove(i.model.group),En.splice(n,1);continue}zS(i,t,e,r)}}function WS(t){const e=Math.random()*Math.PI*2,n=24+Math.random()*14,i=Math.floor(t.x+Math.cos(e)*n),r=Math.floor(t.z+Math.sin(e)*n),o=pi(i,r);if(o>15&&o<55)if(co()){if(En.filter(l=>l.type===je.PIG||l.type===je.SHEEP).length<5){const l=Math.random()<.5?je.PIG:je.SHEEP;rr(l,i+.5,o+1,r+.5)}}else{const a=Math.random();a<.35?rr(je.ZOMBIE,i+.5,o+1,r+.5):a<.6?rr(je.SKELETON,i+.5,o+1,r+.5):a<.8?rr(je.CREEPER,i+.5,o+1,r+.5):rr(je.SPIDER,i+.5,o+1,r+.5)}}function zS(t,e,n,i){if((t.type===je.ZOMBIE||t.type===je.SKELETON)&&co()){const o=pi(Math.floor(t.pos.x),Math.floor(t.pos.z));if(t.pos.y>=o&&(t.burnTimer+=e,t.burnTimer>=1&&(t.burnTimer=0,t.health-=2,Id(t.pos.x,t.pos.y+1,t.pos.z),t.health<=0))){kc(t);return}}if(t.losCheckTimer-=e,t.losCheckTimer<=0){t.losCheckTimer=.3;const o=CS(t.pos.x,t.pos.y+t.eyeHeight,t.pos.z,n.x,n.y+1.2,n.z);t.canSeePlayer=o&&i<16,t.canSeePlayer?(t.lastSeenPos=n.clone(),t.type!==je.PIG&&(t.type===je.SPIDER&&co()&&!t.isAngered?t.state="idle":t.state="chase")):i>22&&t.state==="chase"&&(t.state="idle")}t.type===je.PIG?$S(t,e,n):t.type===je.SHEEP?ZS(t,e,n):t.type===je.SKELETON?KS(t,e,n,i):t.type===je.SPIDER?YS(t,e,n,i):t.type===je.CREEPER?XS(t,e,n,i):qS(t,e,n,i),t.vel.y-=22*e,t.pos.addScaledVector(t.vel,e);const r=pi(Math.floor(t.pos.x),Math.floor(t.pos.z));t.pos.y<=r+1&&(t.pos.y=r+1,t.vel.y=0,t.onGround=!0),t.vel.x*=Math.exp(-8*e),t.vel.z*=Math.exp(-8*e),t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.yaw+Math.PI}function XS(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;if(t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<2.4){t.isFusing||(t.isFusing=!0,_d()),t.fuseTimer+=e,t.vel.x=0,t.vel.z=0;const o=1+t.fuseTimer/1.8*.35;if(t.model.group.scale.set(o,o,o),t.fuseTimer>=1.8){Dd(t.pos.x,t.pos.y+.5,t.pos.z,2.8,16),kc(t);return}}else i>4.5&&t.isFusing&&(t.isFusing=!1,t.fuseTimer=0,t.model.group.scale.set(1,1,1))}}function qS(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<1.4&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1.2,uo(3,new N(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function KS(t,e,n,i){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z),t.canSeePlayer&&(i<8?(t.vel.x=-Math.sin(t.yaw)*1.8,t.vel.z=-Math.cos(t.yaw)*1.8):i>14&&(t.vel.x=Math.sin(t.yaw)*1.8,t.vel.z=Math.cos(t.yaw)*1.8),t.shootCooldown-=e,t.shootCooldown<=0&&i<18&&(t.shootCooldown=2.8,gd(),HS(t.pos.clone().add(new N(0,1.2,0)),n.clone().add(new N(0,.9,0)))))}function YS(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=2.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<4&&t.onGround&&Math.random()<.04&&(t.vel.y=4.8,t.vel.x*=1.4,t.vel.z*=1.4,t.onGround=!1),i<1.3&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1,uo(2,new N(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function $S(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=2.5+Math.random()*3.5,t.yaw+=(Math.random()-.5)*1.8),t.vel.x=Math.sin(t.yaw)*.9,t.vel.z=Math.cos(t.yaw)*.9}function ZS(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else{if(t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=3+Math.random()*4,t.yaw+=(Math.random()-.5)*1.8,Math.random()<.25))try{vd()}catch{}t.vel.x=Math.sin(t.yaw)*.85,t.vel.z=Math.cos(t.yaw)*.85}}function jS(t,e,n=3.8){let i=null,r=n;for(const o of En){if(o.health<=0)continue;const a=o.pos.clone().add(new N(0,o.eyeHeight*.5,0)).clone().sub(t),l=a.dot(e);l>0&&l<r&&a.clone().sub(e.clone().multiplyScalar(l)).length()<.9&&(r=l,i=o)}return i}let al=null;function yf(){return al||(al=yd()),al}function ll(t,e,n,i){const[r,o,s,a]=e,l=(o[0]-r[0])/16,u=(o[1]-r[1])/16,d=(a[0]-r[0])/16,h=(a[1]-r[1])/16;t.save(),t.filter=`brightness(${i})`,t.setTransform(l,u,d,h,r[0],r[1]),t.drawImage(n,0,0,16,16,0,0,16,16),t.restore()}function wt(t,e=46){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");if(t===c.IRON_SWORD||t===c.STONE_SWORD||t===c.WOODEN_SWORD){const f=t===c.IRON_SWORD,m=t===c.STONE_SWORD,_=f?"#f1f5f9":m?"#94a3b8":"#b45309",v=f?"#475569":m?"#334155":"#78350f";return i.lineWidth=3,i.strokeStyle=v,i.fillStyle=_,i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle=f?"#334155":"#451a03",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n}if(t===c.IRON_PICKAXE||t===c.STONE_PICKAXE||t===c.WOODEN_PICKAXE){const f=t===c.IRON_PICKAXE,m=t===c.STONE_PICKAXE,_=f?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.arc(e*.7,e*.3,e*.25,-Math.PI*.75,-Math.PI*.15),i.stroke(),n}if(t===c.STICK)return i.lineWidth=5,i.strokeStyle="#92400e",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.75,e*.25),i.stroke(),n;if(t===c.TORCH)return i.lineWidth=6,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.3,e*.75),i.lineTo(e*.65,e*.4),i.stroke(),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.68,e*.35,e*.15,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.68,e*.35,e*.08,0,Math.PI*2),i.fill(),n;if(t===c.IRON_INGOT)return i.fillStyle="#cbd5e1",i.strokeStyle="#475569",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.4),i.lineTo(e*.65,e*.3),i.lineTo(e*.8,e*.55),i.lineTo(e*.4,e*.65),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.35,e*.42,e*.25,e*.08),n;if(t===c.COOKED_PORKCHOP)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.35,e*.22,Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#451a03",i.fillRect(e*.4,e*.4,e*.2,2),i.fillRect(e*.45,e*.5,e*.2,2),n;if(t===c.IRON_HELMET)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.32,Math.PI,0),i.lineTo(e*.82,e*.65),i.lineTo(e*.65,e*.65),i.lineTo(e*.65,e*.55),i.lineTo(e*.35,e*.55),i.lineTo(e*.35,e*.65),i.lineTo(e*.18,e*.65),i.closePath(),i.fill(),i.stroke(),n;if(t===c.IRON_CHESTPLATE)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.35),i.lineTo(e*.6,e*.35),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.75,e*.5),i.lineTo(e*.75,e*.75),i.lineTo(e*.25,e*.75),i.lineTo(e*.25,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===c.IRON_LEGGINGS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.75),i.lineTo(e*.55,e*.75),i.lineTo(e*.5,e*.45),i.lineTo(e*.45,e*.75),i.lineTo(e*.25,e*.75),i.closePath(),i.fill(),i.stroke(),n;if(t===c.IRON_BOOTS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.fillRect(e*.22,e*.45,e*.18,e*.3),i.fillRect(e*.15,e*.6,e*.25,e*.15),i.fillRect(e*.6,e*.45,e*.18,e*.3),i.fillRect(e*.6,e*.6,e*.25,e*.15),n;if(t===c.ARROW)return i.lineWidth=3,i.strokeStyle="#94a3b8",i.beginPath(),i.moveTo(e*.2,e*.8),i.lineTo(e*.75,e*.25),i.stroke(),i.fillStyle="#475569",i.beginPath(),i.moveTo(e*.82,e*.18),i.lineTo(e*.65,e*.25),i.lineTo(e*.75,e*.35),i.closePath(),i.fill(),n;if(t===c.BONE)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.42,e*.5,e*.16,4),i.fill(),i.stroke(),n;if(t===c.STRING)return i.lineWidth=2,i.strokeStyle="#f8fafc",i.beginPath(),i.arc(e*.5,e*.5,e*.25,0,Math.PI*1.7),i.stroke(),n;if(t===c.SPIDER_EYE)return i.fillStyle="#991b1b",i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.22,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===c.BOW)return i.lineWidth=3.5,i.strokeStyle="#78350f",i.beginPath(),i.arc(e*.4,e*.5,e*.35,-Math.PI*.45,Math.PI*.45),i.stroke(),i.lineWidth=1.5,i.strokeStyle="#f8fafc",i.beginPath(),i.moveTo(e*.4+Math.cos(-Math.PI*.45)*(e*.35),e*.5+Math.sin(-Math.PI*.45)*(e*.35)),i.lineTo(e*.4+Math.cos(Math.PI*.45)*(e*.35),e*.5+Math.sin(Math.PI*.45)*(e*.35)),i.stroke(),n;if(t===c.IRON_HOE||t===c.STONE_HOE||t===c.WOODEN_HOE){const f=t===c.IRON_HOE,m=t===c.STONE_HOE,_=f?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.65,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.moveTo(e*.65,e*.3),i.lineTo(e*.85,e*.3),i.lineTo(e*.85,e*.45),i.stroke(),n}if(t===c.WHEAT_SEEDS)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=1.5,[[e*.35,e*.4],[e*.55,e*.35],[e*.45,e*.6],[e*.65,e*.55]].forEach(([m,_])=>{i.beginPath(),i.arc(m,_,e*.08,0,Math.PI*2),i.fill(),i.stroke()}),n;if(t===c.WHEAT)return i.lineWidth=3,i.strokeStyle="#eab308",i.beginPath(),i.moveTo(e*.3,e*.8),i.lineTo(e*.5,e*.25),i.moveTo(e*.5,e*.8),i.lineTo(e*.5,e*.2),i.moveTo(e*.7,e*.8),i.lineTo(e*.5,e*.25),i.stroke(),i.fillStyle="#ef4444",i.fillRect(e*.38,e*.55,e*.24,4),n;if(t===c.BREAD)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.roundRect(e*.2,e*.35,e*.6,e*.32,8),i.fill(),i.stroke(),i.fillStyle="#fef08a",i.fillRect(e*.32,e*.42,3,e*.18),i.fillRect(e*.48,e*.42,3,e*.18),i.fillRect(e*.64,e*.42,3,e*.18),n;if(t===c.GUNPOWDER)return i.fillStyle="#475569",i.strokeStyle="#1e293b",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.25,e*.7),i.lineTo(e*.5,e*.3),i.lineTo(e*.75,e*.7),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#94a3b8",i.fillRect(e*.45,e*.45,2,2),i.fillRect(e*.55,e*.55,2,2),i.fillRect(e*.35,e*.6,2,2),n;if(t===c.DIAMOND)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.7,e*.3),i.lineTo(e*.85,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#67e8f9",i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.5,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.fillStyle="#e0f2fe",i.beginPath(),i.moveTo(e*.4,e*.32),i.lineTo(e*.6,e*.32),i.lineTo(e*.5,e*.45),i.closePath(),i.fill(),n;if(t===c.DIAMOND_SWORD)return i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle="#0284c7",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n;if(t===c.DIAMOND_PICKAXE)return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.45,e*.2),i.quadraticCurveTo(e*.75,e*.15,e*.85,e*.45),i.lineTo(e*.75,e*.5),i.quadraticCurveTo(e*.65,e*.3,e*.4,e*.3),i.closePath(),i.fill(),i.stroke(),n;if(t===c.DIAMOND_HELMET)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.25,e*.5,e*.45,[8,8,2,2]),i.fill(),i.stroke(),i.clearRect(e*.38,e*.45,e*.24,e*.16),n;if(t===c.DIAMOND_CHESTPLATE)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.25),i.lineTo(e*.5,e*.38),i.lineTo(e*.6,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.72,e*.5),i.lineTo(e*.7,e*.8),i.lineTo(e*.3,e*.8),i.lineTo(e*.28,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===c.DIAMOND_LEGGINGS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.8),i.lineTo(e*.55,e*.8),i.lineTo(e*.5,e*.5),i.lineTo(e*.45,e*.8),i.lineTo(e*.25,e*.8),i.closePath(),i.fill(),i.stroke(),n;if(t===c.DIAMOND_BOOTS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.22,e*.4,e*.24,e*.4,[4,4,6,2]),i.roundRect(e*.54,e*.4,e*.24,e*.4,[4,4,6,2]),i.fill(),i.stroke(),n;if(t===c.MUTTON||t===c.COOKED_MUTTON){const f=t===c.COOKED_MUTTON;return i.fillStyle=f?"#78350f":"#f43f5e",i.strokeStyle=f?"#451a03":"#9f1239",i.lineWidth=2,i.beginPath(),i.ellipse(e*.45,e*.48,e*.26,e*.18,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.62,e*.62,e*.16,e*.08),n}if(t===c.ROTTEN_FLESH)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.32,e*.2,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===c.FLOWER_RED||t===c.FLOWER_YELLOW||t===c.TORCH||t===c.WHEAT_STAGE_1||t===c.WHEAT_STAGE_2||t===c.WHEAT_STAGE_3){const f=yf(),m=Jo[t];if(m){const _=f[m.top];i.imageSmoothingEnabled=!1;const v=e*.08;return i.drawImage(_,v,v,e-v*2,e-v*2),n}}const r=yf(),o=Jo[t];if(!o)return null;const s=r[o.top],a=r[o.side],l=e/4,u=[[e/2,0],[e/2+l,l/2],[e/2,l],[e/2-l,l/2]],d=[[e/2-l,l/2],[e/2,l],[e/2,2*l],[e/2-l,3*l/2]],h=[[e/2,l],[e/2+l,l/2],[e/2+l,3*l/2],[e/2,2*l]];return ll(i,h,a,.8),ll(i,d,a,.66),ll(i,u,s,1),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1.5,[u,d,h].forEach(f=>{i.beginPath(),i.moveTo(f[0][0],f[0][1]);for(let m=1;m<f.length;m++)i.lineTo(f[m][0],f[m][1]);i.closePath(),i.stroke()}),n}let pe={type:0,count:0},Ot=null;function xo(t){return!t||t===c.AIR?0:Bc(t)||Yx(t)||Td(t)||Zx(t)||t===c.BOW?1:64}function JS(){Ot||(Ot=document.createElement("div"),Ot.id="cursor-floating-item",Ot.className="fixed pointer-events-none z-[9999] hidden items-center justify-center",Object.assign(Ot.style,{width:"46px",height:"46px",transform:"translate(-50%, -50%)",transition:"none"}),document.body.appendChild(Ot),window.addEventListener("mousemove",t=>{pe.type>0&&pe.count>0?(Ot.style.display="flex",Ot.style.left=`${t.clientX}px`,Ot.style.top=`${t.clientY}px`):Ot.style.display="none"}))}function di(){if(Ot||JS(),pe.type>0&&pe.count>0){Ot.innerHTML="";const t=wt(pe.type,42);if(t&&Ot.appendChild(t),pe.count>1){const e=document.createElement("span");e.className="absolute bottom-0 right-0 font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.2 rounded shadow-[0_2px_4px_rgba(0,0,0,0.8)]",e.textContent=pe.count,Ot.appendChild(e)}Ot.style.display="flex"}else pe.type=0,pe.count=0,Ot&&(Ot.style.display="none")}function Pn(t,e){pe.type=t,pe.count=t===0?0:e,di()}function Ma(){pe={type:0,count:0},di()}function Wn(t,e,n){e.preventDefault(),e.stopPropagation();const i=t.get(),r=i.type||0,o=i.count||0,s=t.maxStack||xo(pe.type||r);if(e.shiftKey&&e.button===0&&r>0&&t.onShiftClick){t.onShiftClick(r,o),n&&n();return}if(e.button===0){if(pe.type===0&&r>0)Pn(r,o),t.set(0,0),Et(!0);else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;const a=Math.min(pe.count,s);t.set(pe.type,a),pe.count-=a,pe.count<=0?Pn(0,0):di(),Et(!1)}else if(pe.type>0&&r===pe.type){const a=s-o;if(a>0){const l=Math.min(a,pe.count);t.set(r,o+l),pe.count-=l,pe.count<=0?Pn(0,0):di(),Et(!1)}}else if(pe.type>0&&r>0&&pe.type!==r){if(t.allowEquip&&!t.allowEquip(pe.type))return;const a=r,l=o;t.set(pe.type,pe.count),Pn(a,l),Et(!1)}}else if(e.button===2)if(pe.type===0&&r>0){const a=Math.ceil(o/2),l=o-a;Pn(r,a),t.set(l>0?r:0,l),Et(!0)}else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;t.set(pe.type,1),pe.count-=1,pe.count<=0?Pn(0,0):di(),Et(!1)}else pe.type>0&&r===pe.type&&o<s&&(t.set(r,o+1),pe.count-=1,pe.count<=0?Pn(0,0):di(),Et(!1));n&&n()}let Ln=null,Un=null;const Dt=new Array(9).fill(null).map(()=>({type:0,count:0})),Ht=new Array(4).fill(null).map(()=>({type:0,count:0}));let wn=null;const Od=[{id:"planks",name:"Tábuas de Madeira",category:"Blocos",result:c.WOOD_PLANKS,count:4,gridSize:2,layout:[c.WOOD_LOG,0,0,0],desc:"Coloque 1 Tronco de Carvalho em qualquer espaço da grade.",check:t=>{const e=t.filter(i=>i===c.WOOD_LOG).length,n=t.filter(i=>i!==0&&i!==c.WOOD_LOG).length;return e===1&&n===0}},{id:"sticks",name:"Gravetos",category:"Materiais",result:c.STICK,count:4,gridSize:2,layout:[c.WOOD_PLANKS,0,c.WOOD_PLANKS,0],desc:"Coloque 2 Tábuas de Madeira verticalmente.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===c.WOOD_PLANKS&&t[2]===c.WOOD_PLANKS&&t[1]===0&&t[3]===0||t[1]===c.WOOD_PLANKS&&t[3]===c.WOOD_PLANKS&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===c.WOOD_PLANKS&&t[s]===c.WOOD_PLANKS&&t.every((l,u)=>u===o||u===s?!0:l===0))return!0}return!1}},{id:"crafting_table",name:"Bancada de Trabalho",category:"Blocos",result:c.CRAFTING_TABLE,count:1,gridSize:2,layout:[c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS],desc:"Preencha os 4 espaços (2×2) com Tábuas de Madeira.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===c.WOOD_PLANKS);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,s=r+1,a=r+3,l=r+4;if(t[o]===c.WOOD_PLANKS&&t[s]===c.WOOD_PLANKS&&t[a]===c.WOOD_PLANKS&&t[l]===c.WOOD_PLANKS&&t.every((d,h)=>h===o||h===s||h===a||h===l?!0:d===0))return!0}}return!1}},{id:"furnace",name:"Fornalha",category:"Blocos",result:c.FURNACE,count:1,gridSize:3,layout:[c.COBBLESTONE,c.COBBLESTONE,c.COBBLESTONE,c.COBBLESTONE,0,c.COBBLESTONE,c.COBBLESTONE,c.COBBLESTONE,c.COBBLESTONE],desc:"Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===c.COBBLESTONE)&&t[4]===0},{id:"chest",name:"Baú de Madeira",category:"Blocos",result:c.CHEST,count:1,gridSize:3,layout:[c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS,0,c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS],desc:"Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===c.WOOD_PLANKS)&&t[4]===0},{id:"torches",name:"Tochas (4x)",category:"Iluminação",result:c.TORCH,count:4,gridSize:2,layout:[c.COAL_ORE,0,c.STICK,0],desc:"1 Carvão em cima e 1 Graveto logo abaixo.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===c.COAL_ORE&&t[2]===c.STICK&&t[1]===0&&t[3]===0||t[1]===c.COAL_ORE&&t[3]===c.STICK&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===c.COAL_ORE&&t[s]===c.STICK&&t.every((l,u)=>u===o||u===s?!0:l===0))return!0}return!1}},{id:"wooden_pickaxe",name:"Picareta de Madeira",category:"Ferramentas",result:c.WOODEN_PICKAXE,count:1,gridSize:3,layout:[c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS,0,c.STICK,0,0,c.STICK,0],desc:"3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.WOOD_PLANKS&&t[1]===c.WOOD_PLANKS&&t[2]===c.WOOD_PLANKS&&t[4]===c.STICK&&t[7]===c.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"wooden_sword",name:"Espada de Madeira",category:"Armas",result:c.WOODEN_SWORD,count:1,gridSize:3,layout:[0,c.WOOD_PLANKS,0,0,c.WOOD_PLANKS,0,0,c.STICK,0],desc:"2 Tábuas verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===c.WOOD_PLANKS&&t[3+i]===c.WOOD_PLANKS&&t[6+i]===c.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"stone_pickaxe",name:"Picareta de Pedra",category:"Ferramentas",result:c.STONE_PICKAXE,count:1,gridSize:3,layout:[c.COBBLESTONE,c.COBBLESTONE,c.COBBLESTONE,0,c.STICK,0,0,c.STICK,0],desc:"3 Pedregulhos no topo e 2 Gravetos no meio.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.COBBLESTONE&&t[1]===c.COBBLESTONE&&t[2]===c.COBBLESTONE&&t[4]===c.STICK&&t[7]===c.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"stone_sword",name:"Espada de Pedra",category:"Armas",result:c.STONE_SWORD,count:1,gridSize:3,layout:[0,c.COBBLESTONE,0,0,c.COBBLESTONE,0,0,c.STICK,0],desc:"2 Pedregulhos verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===c.COBBLESTONE&&t[3+i]===c.COBBLESTONE&&t[6+i]===c.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_pickaxe",name:"Picareta de Ferro",category:"Ferramentas",result:c.IRON_PICKAXE,count:1,gridSize:3,layout:[c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,0,c.STICK,0,0,c.STICK,0],desc:"3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.IRON_INGOT&&t[1]===c.IRON_INGOT&&t[2]===c.IRON_INGOT&&t[4]===c.STICK&&t[7]===c.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"iron_sword",name:"Espada de Ferro",category:"Armas",result:c.IRON_SWORD,count:1,gridSize:3,layout:[0,c.IRON_INGOT,0,0,c.IRON_INGOT,0,0,c.STICK,0],desc:"2 Barras de Ferro verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===c.IRON_INGOT&&t[3+i]===c.IRON_INGOT&&t[6+i]===c.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_helmet",name:"Capacete de Ferro",category:"Armaduras",result:c.IRON_HELMET,count:1,gridSize:3,layout:[c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,0,c.IRON_INGOT,0,0,0],desc:"5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.IRON_INGOT&&t[1]===c.IRON_INGOT&&t[2]===c.IRON_INGOT&&t[3]===c.IRON_INGOT&&t[4]===0&&t[5]===c.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"iron_chestplate",name:"Peitoral de Ferro",category:"Armaduras",result:c.IRON_CHESTPLATE,count:1,gridSize:3,layout:[c.IRON_INGOT,0,c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT],desc:"8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.IRON_INGOT&&t[1]===0&&t[2]===c.IRON_INGOT&&t[3]===c.IRON_INGOT&&t[4]===c.IRON_INGOT&&t[5]===c.IRON_INGOT&&t[6]===c.IRON_INGOT&&t[7]===c.IRON_INGOT&&t[8]===c.IRON_INGOT},{id:"iron_leggings",name:"Calças de Ferro",category:"Armaduras",result:c.IRON_LEGGINGS,count:1,gridSize:3,layout:[c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,c.IRON_INGOT,0,c.IRON_INGOT,c.IRON_INGOT,0,c.IRON_INGOT],desc:"7 Barras de Ferro em formato de calças (+5 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.IRON_INGOT&&t[1]===c.IRON_INGOT&&t[2]===c.IRON_INGOT&&t[3]===c.IRON_INGOT&&t[4]===0&&t[5]===c.IRON_INGOT&&t[6]===c.IRON_INGOT&&t[7]===0&&t[8]===c.IRON_INGOT},{id:"iron_boots",name:"Botas de Ferro",category:"Armaduras",result:c.IRON_BOOTS,count:1,gridSize:3,layout:[c.IRON_INGOT,0,c.IRON_INGOT,c.IRON_INGOT,0,c.IRON_INGOT,0,0,0],desc:"4 Barras de Ferro em formato de botas (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.IRON_INGOT&&t[1]===0&&t[2]===c.IRON_INGOT&&t[3]===c.IRON_INGOT&&t[4]===0&&t[5]===c.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bow",name:"Arco de Caça",category:"Armas",result:c.BOW,count:1,gridSize:3,layout:[0,c.STICK,c.STRING,c.STICK,0,c.STRING,0,c.STICK,c.STRING],desc:"3 Gravetos e 3 Linhas de Teia na bancada 3×3.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===c.STICK).length,r=t.filter(s=>s===c.STRING).length,o=t.filter(s=>s!==0&&s!==c.STICK&&s!==c.STRING).length;return i===3&&r===3&&o===0}},{id:"wooden_hoe",name:"Enxada de Madeira",category:"Ferramentas",result:c.WOODEN_HOE,count:1,gridSize:3,layout:[c.WOOD_PLANKS,c.WOOD_PLANKS,0,0,c.STICK,0,0,c.STICK,0],desc:"2 Tábuas no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===c.WOOD_PLANKS&&t[1]===c.WOOD_PLANKS&&t[4]===c.STICK&&t[7]===c.STICK||t[1]===c.WOOD_PLANKS&&t[2]===c.WOOD_PLANKS&&t[4]===c.STICK&&t[7]===c.STICK,r=t.filter(a=>a===c.STICK).length,o=t.filter(a=>a===c.WOOD_PLANKS).length,s=t.filter(a=>a!==0&&a!==c.STICK&&a!==c.WOOD_PLANKS).length;return i&&r===2&&o===2&&s===0}},{id:"stone_hoe",name:"Enxada de Pedra",category:"Ferramentas",result:c.STONE_HOE,count:1,gridSize:3,layout:[c.COBBLESTONE,c.COBBLESTONE,0,0,c.STICK,0,0,c.STICK,0],desc:"2 Pedregulhos no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===c.COBBLESTONE&&t[1]===c.COBBLESTONE&&t[4]===c.STICK&&t[7]===c.STICK||t[1]===c.COBBLESTONE&&t[2]===c.COBBLESTONE&&t[4]===c.STICK&&t[7]===c.STICK,r=t.filter(a=>a===c.STICK).length,o=t.filter(a=>a===c.COBBLESTONE).length,s=t.filter(a=>a!==0&&a!==c.STICK&&a!==c.COBBLESTONE).length;return i&&r===2&&o===2&&s===0}},{id:"iron_hoe",name:"Enxada de Ferro",category:"Ferramentas",result:c.IRON_HOE,count:1,gridSize:3,layout:[c.IRON_INGOT,c.IRON_INGOT,0,0,c.STICK,0,0,c.STICK,0],desc:"2 Barras de Ferro no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===c.IRON_INGOT&&t[1]===c.IRON_INGOT&&t[4]===c.STICK&&t[7]===c.STICK||t[1]===c.IRON_INGOT&&t[2]===c.IRON_INGOT&&t[4]===c.STICK&&t[7]===c.STICK,r=t.filter(a=>a===c.STICK).length,o=t.filter(a=>a===c.IRON_INGOT).length,s=t.filter(a=>a!==0&&a!==c.STICK&&a!==c.IRON_INGOT).length;return i&&r===2&&o===2&&s===0}},{id:"bread",name:"Pão Dourado",category:"Alimentação",result:c.BREAD,count:1,gridSize:3,layout:[0,0,0,c.WHEAT,c.WHEAT,c.WHEAT,0,0,0],desc:"3 Trigos colhidos em linha horizontal (+5 Vida).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=i*3,o=i*3+1,s=i*3+2;if(t[r]===c.WHEAT&&t[o]===c.WHEAT&&t[s]===c.WHEAT&&t.every((l,u)=>u===r||u===o||u===s?!0:l===0))return!0}return!1}},{id:"tnt",name:"Bloco de TNT",category:"Explosivos",result:c.TNT,count:1,gridSize:3,layout:[c.GUNPOWDER,c.SAND,c.GUNPOWDER,c.SAND,c.GUNPOWDER,c.SAND,c.GUNPOWDER,c.SAND,c.GUNPOWDER],desc:"5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===c.GUNPOWDER).length,r=t.filter(s=>s===c.SAND).length,o=t.filter(s=>s!==0&&s!==c.GUNPOWDER&&s!==c.SAND).length;return i===5&&r===4&&o===0}},{id:"diamond_sword",name:"Espada de Diamante",category:"Armas",result:c.DIAMOND_SWORD,count:1,gridSize:3,layout:[0,c.DIAMOND,0,0,c.DIAMOND,0,0,c.STICK,0],desc:"2 Diamantes verticais e 1 Graveto na base (+9 Dano).",check:(t,e,n)=>{if(e===3&&n===3){for(let i=0;i<3;i++)if(t[i]===c.DIAMOND&&t[i+3]===c.DIAMOND&&t[i+6]===c.STICK&&t.filter((o,s)=>s===i||s===i+3||s===i+6?!1:o!==0).length===0)return!0}return!1}},{id:"diamond_pickaxe",name:"Picareta de Diamante",category:"Ferramentas",result:c.DIAMOND_PICKAXE,count:1,gridSize:3,layout:[c.DIAMOND,c.DIAMOND,c.DIAMOND,0,c.STICK,0,0,c.STICK,0],desc:"3 Diamantes na linha superior e 2 Gravetos no centro vertical (Capaz de minerar Obsidiana).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.DIAMOND&&t[1]===c.DIAMOND&&t[2]===c.DIAMOND&&t[3]===0&&t[4]===c.STICK&&t[5]===0&&t[6]===0&&t[7]===c.STICK&&t[8]===0},{id:"diamond_helmet",name:"Capacete de Diamante",category:"Armaduras",result:c.DIAMOND_HELMET,count:1,gridSize:3,layout:[c.DIAMOND,c.DIAMOND,c.DIAMOND,c.DIAMOND,0,c.DIAMOND,0,0,0],desc:"5 Diamantes em formato de arco/U invertido (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.DIAMOND&&t[1]===c.DIAMOND&&t[2]===c.DIAMOND&&t[3]===c.DIAMOND&&t[4]===0&&t[5]===c.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"diamond_chestplate",name:"Peitoral de Diamante",category:"Armaduras",result:c.DIAMOND_CHESTPLATE,count:1,gridSize:3,layout:[c.DIAMOND,0,c.DIAMOND,c.DIAMOND,c.DIAMOND,c.DIAMOND,c.DIAMOND,c.DIAMOND,c.DIAMOND],desc:"8 Diamantes em formato de colete com espaço superior central (+8 Defesa máxima).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.DIAMOND&&t[1]===0&&t[2]===c.DIAMOND&&t[3]===c.DIAMOND&&t[4]===c.DIAMOND&&t[5]===c.DIAMOND&&t[6]===c.DIAMOND&&t[7]===c.DIAMOND&&t[8]===c.DIAMOND},{id:"diamond_leggings",name:"Calças de Diamante",category:"Armaduras",result:c.DIAMOND_LEGGINGS,count:1,gridSize:3,layout:[c.DIAMOND,c.DIAMOND,c.DIAMOND,c.DIAMOND,0,c.DIAMOND,c.DIAMOND,0,c.DIAMOND],desc:"7 Diamantes em formato de calças (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.DIAMOND&&t[1]===c.DIAMOND&&t[2]===c.DIAMOND&&t[3]===c.DIAMOND&&t[4]===0&&t[5]===c.DIAMOND&&t[6]===c.DIAMOND&&t[7]===0&&t[8]===c.DIAMOND},{id:"diamond_boots",name:"Botas de Diamante",category:"Armaduras",result:c.DIAMOND_BOOTS,count:1,gridSize:3,layout:[c.DIAMOND,0,c.DIAMOND,c.DIAMOND,0,c.DIAMOND,0,0,0],desc:"4 Diamantes em formato de botas (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===c.DIAMOND&&t[1]===0&&t[2]===c.DIAMOND&&t[3]===c.DIAMOND&&t[4]===0&&t[5]===c.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bed",name:"Cama Confortável",category:"Mobiliário",result:c.BED,count:1,gridSize:3,layout:[0,0,0,c.WOOL,c.WOOL,c.WOOL,c.WOOD_PLANKS,c.WOOD_PLANKS,c.WOOD_PLANKS],desc:"3 Blocos de Lã de Ovelha sobre 3 Tábuas de Madeira (Permite dormir e pular a noite).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===c.WOOL&&t[1]===c.WOOL&&t[2]===c.WOOL&&t[3]===c.WOOD_PLANKS&&t[4]===c.WOOD_PLANKS&&t[5]===c.WOOD_PLANKS&&t[6]===0&&t[7]===0&&t[8]===0,r=t[0]===0&&t[1]===0&&t[2]===0&&t[3]===c.WOOL&&t[4]===c.WOOL&&t[5]===c.WOOL&&t[6]===c.WOOD_PLANKS&&t[7]===c.WOOD_PLANKS&&t[8]===c.WOOD_PLANKS;return i||r}}];function Pd(t,e,n){const i=t.map(r=>r&&typeof r=="object"?r.type||0:r||0);for(const r of Od)if(r.check(i,e,n))return{result:r.result,count:r.count,name:r.name};return null}function Nd(){Ln||(Ln=document.createElement("div"),Ln.id="crafting-table-modal",Ln.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",Ln.innerHTML=`
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
        <span class="font-label-caps text-xs text-secondary uppercase font-semibold block mb-2">Seu Inventário (Botão Esq: Pegar/Colocar • Botão Dir: Colocar 1)</span>
        <div id="table-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `,document.body.appendChild(Ln),document.getElementById("close-table-btn").addEventListener("click",eM),document.getElementById("open-recipe-book-table").addEventListener("click",Ud),Ld(),Oi())}function QS(){Ln||Nd(),Ln.style.display="flex",_o(gt.CRAFTING_TABLE),Et(!0),or(),Oi()}function eM(){if(Ln){Ln.style.display="none",fi(gt.CRAFTING_TABLE),Et(!1),pe.type>0&&pe.count>0&&(An(pe.type,pe.count),Ma());for(let t=0;t<9;t++){const e=Dt[t];e&&e.type>0&&e.count>0&&(An(e.type,e.count),Dt[t]={type:0,count:0})}or()}}function Oi(){const t=document.getElementById("table-craft-grid"),e=document.getElementById("table-output-slot"),n=document.getElementById("table-hotbar-grid");if(!(!t||!e||!n)){if(t.innerHTML="",Dt.forEach((i,r)=>{const o=document.createElement("div");o.className="slot w-14 h-14 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const s=i||{type:0,count:0};if(s.type>0&&s.count>0){const l=wt(s.type,38);if(l&&o.appendChild(l),s.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=s.count,o.appendChild(u)}}const a={get:()=>Dt[r]||{type:0,count:0},set:(l,u)=>{Dt[r]={type:l,count:l===0?0:u},or()}};o.addEventListener("mousedown",l=>Wn(a,l,Oi)),o.addEventListener("contextmenu",l=>l.preventDefault()),t.appendChild(o)}),e.innerHTML="",wn&&wn.result>0){const i=wt(wn.result,48);if(i&&e.appendChild(i),wn.count>1){const r=document.createElement("span");r.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",r.textContent=wn.count,e.appendChild(r)}}e.onmousedown=i=>{if(i.preventDefault(),wn&&wn.result>0){const r=wn.result,o=wn.count;if(i.shiftKey){if(An(r,o)){Tn();for(let s=0;s<9;s++)Dt[s].count>1?Dt[s].count-=1:Dt[s]={type:0,count:0};or(),Oi()}}else{const s=xo(r);if(pe.type===0){Pn(r,o),Tn();for(let a=0;a<9;a++)Dt[a].count>1?Dt[a].count-=1:Dt[a]={type:0,count:0};or(),Oi()}else if(pe.type===r&&pe.count+o<=s){pe.count+=o,di(),Tn();for(let a=0;a<9;a++)Dt[a].count>1?Dt[a].count-=1:Dt[a]={type:0,count:0};or(),Oi()}}}},e.oncontextmenu=i=>i.preventDefault(),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div");r.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative";const o=Oe[i]||{type:0,count:0};if(o.type>0&&o.count>0){const a=wt(o.type,30);if(a&&r.appendChild(a),r.title=`${xr[o.type]||"Item"}`,o.count>1){const l=document.createElement("span");l.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",l.textContent=o.count,r.appendChild(l)}}const s={get:()=>Oe[i]||{type:0,count:0},set:(a,l)=>{Oe[i]={type:a,count:a===0?0:l}},onShiftClick:(a,l)=>{const u=Dt.findIndex(d=>d.type===0||d.count===0);u!==-1&&(Dt[u]={type:a,count:l},Oe[i]={type:0,count:0},or(),Oi())}};r.addEventListener("mousedown",a=>Wn(s,a,Oi)),r.addEventListener("contextmenu",a=>a.preventDefault()),n.appendChild(r)}}}function or(){wn=Pd(Dt,3,3)}function Ld(){Un||(Un=document.createElement("div"),Un.id="recipe-book-modal",Un.className="fixed inset-0 z-[200] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-lg select-none",Un.innerHTML=`
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
  `,document.body.appendChild(Un),document.getElementById("close-recipe-book-btn").addEventListener("click",nM),tM())}function tM(){const t=document.getElementById("recipe-cards-container");t&&(t.innerHTML="",Od.forEach(e=>{const n=document.createElement("div");n.className="flex items-center justify-between bg-surface-container/60 p-3.5 rounded-xl border border-outline-variant hover:border-primary/50 transition-all";const i=document.createElement("div");i.className="flex items-center gap-3.5 max-w-[340px]";const r=document.createElement("div");r.className="w-12 h-12 rounded-xl bg-surface-container-lowest border-2 border-primary flex items-center justify-center relative shrink-0 shadow-[0_0_8px_rgba(120,220,119,0.3)]";const o=wt(e.result,36);if(r.appendChild(o),e.count>1){const h=document.createElement("span");h.className="absolute -bottom-1 -right-1 bg-primary text-on-primary font-label-caps text-[10px] font-bold px-1 rounded",h.textContent=e.count,r.appendChild(h)}i.appendChild(r);const s=document.createElement("div");s.innerHTML=`
      <div class="font-headline-lg-mobile text-sm font-bold text-on-surface">${e.name}</div>
      <div class="font-label-caps text-[10px] font-semibold text-primary uppercase mb-0.5">${e.category}</div>
      <div class="font-body-md text-xs text-on-surface-variant leading-snug">${e.desc}</div>
    `,i.appendChild(s);const a=document.createElement("div");a.className="flex flex-col items-center gap-1 shrink-0";const l=document.createElement("span");l.className="font-label-caps text-[9px] font-bold text-on-surface-variant uppercase tracking-wider",l.textContent=`Grade ${e.gridSize}×${e.gridSize}`,a.appendChild(l);const u=document.createElement("div"),d=e.gridSize;u.className=`grid grid-cols-${d} gap-1 bg-surface-container-lowest p-1.5 rounded-lg border border-outline-variant`,u.style.gridTemplateColumns=`repeat(${d}, 28px)`,e.layout.forEach(h=>{const f=document.createElement("div");if(f.className="w-7 h-7 rounded bg-surface-container/80 border border-outline-variant/60 flex items-center justify-center",h>0){const m=wt(h,22);f.appendChild(m),f.title=xr[h]||""}u.appendChild(f)}),a.appendChild(u),n.appendChild(i),n.appendChild(a),t.appendChild(n)}))}function Ud(){Un||Ld(),Un.style.display="flex",_o(gt.RECIPE_BOOK)}function nM(){Un&&(Un.style.display="none",fi(gt.RECIPE_BOOK))}const qo={[c.IRON_ORE]:{output:c.IRON_INGOT,time:3.5},[c.PORKCHOP]:{output:c.COOKED_PORKCHOP,time:2.5},[c.MUTTON]:{output:c.COOKED_MUTTON,time:2.5},[c.COBBLESTONE]:{output:c.STONE,time:3}},sa={[c.LAVA]:60,[c.COAL_ORE]:16,[c.WOOD_LOG]:6,[c.WOOD_PLANKS]:3,[c.STICK]:1.5},Ko=new Map;let Qo=null,si=null;function iM(t,e,n){const i=`${t},${e},${n}`;return Ko.has(i)||Ko.set(i,{x:t,y:e,z:n,inputItem:0,inputCount:0,fuelItem:0,fuelCount:0,outputItem:0,outputCount:0,burnTimeRemaining:0,maxBurnTime:0,cookProgress:0}),Ko.get(i)}function rM(t,e,n){Qo=`${t},${e},${n}`,iM(t,e,n),si||lM(),si.style.display="flex",_o(gt.FURNACE),Et(!0),In()}function oM(){si&&(si.style.display="none",Qo=null,fi(gt.FURNACE),Et(!1),pe.type>0&&pe.count>0&&(An(pe.type,pe.count),Ma()))}function sM(){return xd(gt.FURNACE)}function aM(t){for(const[e,n]of Ko.entries()){const r=n.inputItem>0&&qo[n.inputItem]?qo[n.inputItem]:null;n.burnTimeRemaining>0&&(n.burnTimeRemaining=Math.max(0,n.burnTimeRemaining-t)),r&&(n.outputItem===0||n.outputItem===r.output)?(n.burnTimeRemaining<=0&&n.fuelCount>0&&sa[n.fuelItem]&&(n.maxBurnTime=sa[n.fuelItem],n.burnTimeRemaining=n.maxBurnTime,n.fuelCount--,n.fuelCount<=0&&(n.fuelItem=0)),n.burnTimeRemaining>0?(n.cookProgress+=t,n.cookProgress>=r.time&&(n.cookProgress=0,n.inputCount--,n.inputCount<=0&&(n.inputItem=0),n.outputItem=r.output,n.outputCount=(n.outputCount||0)+1)):n.cookProgress=Math.max(0,n.cookProgress-t*.5)):n.cookProgress=0}Qo&&sM()&&In()}function lM(){si=document.createElement("div"),si.id="furnace-modal",si.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",si.innerHTML=`
    <div class="glass-panel w-full max-w-xl bg-surface/90 backdrop-blur-xl border border-outline-variant rounded-xl shadow-[0_0_30px_rgba(15,21,14,0.9)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-outline-variant pb-3 mb-6">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-error text-2xl" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase font-bold">Fornalha de Fundição</h2>
        </div>
        <button id="close-furnace-btn" class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container cursor-pointer">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Smelting Chamber View -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 py-6 px-4 bg-surface-container/50 rounded-xl border border-outline-variant relative">
        <!-- Input & Fuel Column -->
        <div class="flex flex-col items-center gap-4">
          <!-- Input Ore / Raw Food -->
          <div id="furnace-input-slot" class="w-16 h-16 rounded-xl bg-surface-container-lowest border-2 border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative" title="Minério Bruto ou Carne Crua"></div>

          <!-- Fire Animated Icon -->
          <div class="relative w-8 h-8 flex items-center justify-center">
            <span class="material-symbols-outlined text-outline-variant text-3xl">local_fire_department</span>
            <div id="furnace-flame-active" class="absolute bottom-0 left-0 w-full overflow-hidden transition-all duration-200" style="height: 0%;">
              <span class="material-symbols-outlined text-error text-3xl drop-shadow-[0_0_8px_rgba(255,108,92,0.8)]" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
            </div>
          </div>

          <!-- Fuel Slot (Coal / Wood / Lava) -->
          <div id="furnace-fuel-slot" class="w-16 h-16 rounded-xl bg-surface-container-lowest border-2 border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative" title="Combustível (Carvão, Madeira ou Lava)"></div>
        </div>

        <!-- Progress Arrow Center -->
        <div class="flex flex-col items-center gap-2">
          <div class="w-24 h-4 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant relative">
            <div id="furnace-progress-bar" class="h-full bg-gradient-to-r from-error to-primary rounded-full transition-all duration-150" style="width: 0%;"></div>
          </div>
          <span class="font-label-caps text-[10px] text-secondary tracking-widest uppercase">FUNDIÇÃO</span>
        </div>

        <!-- Output Slot -->
        <div class="flex flex-col items-center gap-2">
          <div id="furnace-output-slot" class="w-24 h-24 rounded-2xl bg-surface-container-lowest border-2 border-primary shadow-[0_0_20px_rgba(120,220,119,0.4)] flex items-center justify-center cursor-pointer relative" title="Clique para coletar o lingote forjado ou carne assada"></div>
        </div>
      </div>

      <!-- Quick Player Hotbar Transfer -->
      <div class="mt-6 pt-4 border-t border-outline-variant/60">
        <div class="flex justify-between items-center mb-2">
          <span class="font-label-caps text-xs text-secondary uppercase font-semibold">Seu Inventário Rápido (Shift+Clique para carregar na Fornalha)</span>
        </div>
        <div id="furnace-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `,document.body.appendChild(si),document.getElementById("close-furnace-btn").addEventListener("click",oM)}function In(){if(!Qo)return;const t=Ko.get(Qo);if(!t)return;const e=document.getElementById("furnace-input-slot"),n=document.getElementById("furnace-fuel-slot"),i=document.getElementById("furnace-output-slot"),r=document.getElementById("furnace-flame-active"),o=document.getElementById("furnace-progress-bar"),s=document.getElementById("furnace-hotbar-grid");if(!e||!n||!i||!r||!o||!s)return;if(e.innerHTML="",t.inputItem>0&&t.inputCount>0){const f=wt(t.inputItem,44);if(f&&e.appendChild(f),t.inputCount>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=t.inputCount,e.appendChild(m)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="MINÉRIO",e.appendChild(f)}const a={get:()=>({type:t.inputItem,count:t.inputCount}),set:(f,m)=>{t.inputItem=f,t.inputCount=f===0?0:m,t.inputCount<=0&&(t.inputItem=0)},allowEquip:f=>!!qo[f]};if(e.onmousedown=f=>Wn(a,f,In),e.oncontextmenu=f=>f.preventDefault(),n.innerHTML="",t.fuelItem>0&&t.fuelCount>0){const f=wt(t.fuelItem,44);if(f&&n.appendChild(f),t.fuelCount>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=t.fuelCount,n.appendChild(m)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="CARVÃO",n.appendChild(f)}const l={get:()=>({type:t.fuelItem,count:t.fuelCount}),set:(f,m)=>{t.fuelItem=f,t.fuelCount=f===0?0:m,t.fuelCount<=0&&(t.fuelItem=0)},allowEquip:f=>!!sa[f]};n.onmousedown=f=>Wn(l,f,In),n.oncontextmenu=f=>f.preventDefault();const u=t.maxBurnTime>0?Math.min(100,Math.round(t.burnTimeRemaining/t.maxBurnTime*100)):0;r.style.height=`${u}%`;const d=t.inputItem>0?qo[t.inputItem]:null,h=d?Math.min(100,Math.round(t.cookProgress/d.time*100)):0;if(o.style.width=`${h}%`,i.innerHTML="",t.outputItem>0&&t.outputCount>0){const f=wt(t.outputItem,56);if(f&&i.appendChild(f),t.outputCount>1){const m=document.createElement("span");m.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow-[0_0_10px_rgba(120,220,119,0.8)] font-bold",m.textContent=t.outputCount,i.appendChild(m)}}else{const f=document.createElement("span");f.className="font-label-caps text-[11px] text-primary/70 uppercase",f.textContent="PRODUTO",i.appendChild(f)}i.onmousedown=f=>{if(f.preventDefault(),t.outputItem>0&&t.outputCount>0){if(f.shiftKey)An(t.outputItem,t.outputCount)&&(Tn(),t.outputItem=0,t.outputCount=0,In());else if(pe.type===0)Pn(t.outputItem,t.outputCount),Tn(),t.outputItem=0,t.outputCount=0,In();else if(pe.type===t.outputItem){const m=xo(t.outputItem),_=Math.min(t.outputCount,m-pe.count);_>0&&(pe.count+=_,t.outputCount-=_,t.outputCount<=0&&(t.outputItem=0),di(),Tn(),In())}}},i.oncontextmenu=f=>f.preventDefault(),s.innerHTML="";for(let f=0;f<9;f++){const m=document.createElement("div"),_=Oe[f]||{type:0,count:0};if(m.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",_.type>0&&_.count>0){const g=wt(_.type,30);if(g&&m.appendChild(g),m.title=`${xr[_.type]||"Item"}`,_.count>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=_.count,m.appendChild(p)}}const v={get:()=>Oe[f]||{type:0,count:0},set:(g,p)=>{Oe[f]={type:g,count:g===0?0:p},zn()},onShiftClick:(g,p)=>{qo[g]?(t.inputItem===0||t.inputItem===g)&&(t.inputItem=g,t.inputCount=(t.inputCount||0)+p,Oe[f]={type:0,count:0},zn(),In()):sa[g]&&(t.fuelItem===0||t.fuelItem===g)&&(t.fuelItem=g,t.fuelCount=(t.fuelCount||0)+p,Oe[f]={type:0,count:0},zn(),In())}};m.addEventListener("mousedown",g=>Wn(v,g,In)),m.addEventListener("contextmenu",g=>g.preventDefault()),s.appendChild(m)}}const Hi=new Map;let aa=null,ai=null;function cM(t,e,n){const i=`${t},${e},${n}`;return Hi.has(i)||Hi.set(i,new Array(27).fill(null).map(()=>({type:0,count:0}))),Hi.get(i)}function uM(t,e,n){const i=`${t},${e},${n}`;return Hi.has(i)?Hi.get(i).filter(o=>o&&o.type>0&&o.count>0):[]}function fM(t,e,n){const i=`${t},${e},${n}`;Hi.has(i)&&Hi.delete(i)}function dM(t,e,n){aa=`${t},${e},${n}`,cM(t,e,n),ai||pM(),ai.style.display="flex",_o(gt.CHEST),Et(!0),vc()}function hM(){ai&&(ai.style.display="none",aa=null,fi(gt.CHEST),Et(!1),pe.type>0&&pe.count>0&&(An(pe.type,pe.count),Ma()))}function pM(){ai=document.createElement("div"),ai.id="chest-modal",ai.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ai.innerHTML=`
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
        <span class="font-label-caps text-xs text-secondary uppercase font-semibold block mb-2">Conteúdo do Baú (Botão Esq: Pegar/Colocar • Botão Dir: Dividir/Colocar 1)</span>
        <div id="chest-grid" class="grid grid-cols-9 gap-2"></div>
      </div>

      <!-- Quick Player Hotbar Transfer -->
      <div class="pt-4 border-t border-outline-variant/60">
        <span class="font-label-caps text-xs text-primary uppercase font-semibold block mb-2">Seu Inventário (Shift+Clique para transferência rápida)</span>
        <div id="chest-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `,document.body.appendChild(ai),document.getElementById("close-chest-btn").addEventListener("click",hM)}function vc(){if(!aa)return;const t=Hi.get(aa);if(!t)return;const e=document.getElementById("chest-grid"),n=document.getElementById("chest-hotbar-grid");if(!(!e||!n)){e.innerHTML="",t.forEach((i,r)=>{const o=document.createElement("div"),s=i||{type:0,count:0};if(o.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${s.type>0?"border-tertiary/70 shadow-[0_0_8px_rgba(255,180,169,0.2)]":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,s.type>0&&s.count>0){const l=wt(s.type,32);if(l&&o.appendChild(l),o.title=`${xr[s.type]||"Item"}`,s.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=s.count,o.appendChild(u)}}const a={get:()=>t[r]||{type:0,count:0},set:(l,u)=>{t[r]={type:l,count:l===0?0:u}},onShiftClick:(l,u)=>{An(l,u)&&(t[r]={type:0,count:0},Et(!1))}};o.addEventListener("mousedown",l=>Wn(a,l,vc)),o.addEventListener("contextmenu",l=>l.preventDefault()),e.appendChild(o)}),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div"),o=Oe[i]||{type:0,count:0};if(r.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${o.type>0?"border-primary/60":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,o.type>0&&o.count>0){const a=wt(o.type,32);if(a&&r.appendChild(a),r.title=`${xr[o.type]||"Item"}`,o.count>1){const l=document.createElement("span");l.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",l.textContent=o.count,r.appendChild(l)}}const s={get:()=>Oe[i]||{type:0,count:0},set:(a,l)=>{Oe[i]={type:a,count:a===0?0:l},zn()},onShiftClick:(a,l)=>{const u=xo(a);let d=l;for(let h=0;h<27;h++)if(t[h].type===a&&t[h].count<u){const f=u-t[h].count,m=Math.min(f,d);if(t[h].count+=m,d-=m,d<=0)break}if(d>0){for(let h=0;h<27;h++)if(t[h].type===0||t[h].count===0){t[h]={type:a,count:d},d=0;break}}Oe[i]=d>0?{type:a,count:d}:{type:0,count:0},zn(),Et(!1)}};r.addEventListener("mousedown",a=>Wn(s,a,vc)),r.addEventListener("contextmenu",a=>a.preventDefault()),n.appendChild(r)}}}let gi=null,hr=null,nn=null,ze=null,St=c.WOODEN_SWORD,es=!1,pr=!1,Dn=0,Uo={x:NaN,y:NaN,z:NaN},cl=0;const Vc=new Map,mM=new fe(1.002,1.002,1.002),gM=new Tv(mM),_M=new hd({color:0,linewidth:2,transparent:!0,opacity:.6}),vM=new fe(1.006,1.006,1.006),Fd=new vi({color:1973067,wireframe:!0,transparent:!0,opacity:0});function xM(t){gi=t,hr=new Mv(gM,_M),hr.visible=!1,gi.add(hr),nn=new ie(vM,Fd),nn.visible=!1,gi.add(nn),window.addEventListener("mousedown",EM),window.addEventListener("mouseup",yM),window.addEventListener("blur",()=>{es=!1,pr=!1,Dn=0,nn&&(nn.visible=!1)})}function SM(t=.016){if(MM(t),!vo()||zo()){hr.visible=!1,nn.visible=!1,ze=null,pr=!1,es=!1,Dn=0;return}const e=os();if(!e)return;const n=new N(0,0,-1);n.applyQuaternion(e.quaternion);const i=fS(e.position,n);if(i)if(ze=i,hr.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),hr.visible=!0,(i.hit.x!==Uo.x||i.hit.y!==Uo.y||i.hit.z!==Uo.z)&&(Uo={x:i.hit.x,y:i.hit.y,z:i.hit.z},Dn=0),es&&pr){const r=Kt(i.hit.x,i.hit.y,i.hit.z);if(r!==c.AIR&&r!==c.WATER){const o=eS(r),s=tS(r,St);if(Dn+=t*s/o,cl+=t,cl>=.22&&(cl=0,Fv(r),_c(i.hit.x,i.hit.y,i.hit.z,r)),nn.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),nn.visible=!0,Fd.opacity=op.clamp(Dn*.85,.15,.9),Dn>=1){if(Dv(),_c(i.hit.x,i.hit.y,i.hit.z,r),r===c.CHEST&&(uM(i.hit.x,i.hit.y,i.hit.z).forEach(l=>{Ut(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l)}),fM(i.hit.x,i.hit.y,i.hit.z)),r===c.GRASS&&Math.random()<.35&&Ut(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,c.WHEAT_SEEDS),r===c.WHEAT_STAGE_3)Ut(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,c.WHEAT),Ut(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,c.WHEAT_SEEDS),Vc.delete(`${i.hit.x},${i.hit.y},${i.hit.z}`);else{const a=Ad(r);a>0&&Ut(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,a)}mi(gi,i.hit.x,i.hit.y,i.hit.z,c.AIR),Dn=0,pr=!1,nn.visible=!1}}}else nn.visible=!1,Dn=0;else ze=null,hr.visible=!1,nn.visible=!1,Dn=0,pr=!1}function MM(t){for(const[e,n]of Vc.entries())n.timer+=t,n.timer>=16&&(n.timer=0,n.stage===1?(n.stage=2,mi(gi,n.x,n.y,n.z,c.WHEAT_STAGE_2)):n.stage===2&&(n.stage=3,mi(gi,n.x,n.y,n.z,c.WHEAT_STAGE_3)))}function EM(t){if(!vo()||zo())return;const e=os();if(!e)return;const n=new N(0,0,-1);if(n.applyQuaternion(e.quaternion),t.button===0){es=!0;const i=jS(e.position,n,3.8);if(i){const r=St===c.DIAMOND_SWORD,o=St===c.IRON_SWORD,s=St===c.STONE_SWORD,a=St===c.WOODEN_SWORD,l=St===c.DIAMOND_PICKAXE||St===c.IRON_PICKAXE||St===c.STONE_PICKAXE||St===c.WOODEN_PICKAXE,u=r?9:o?7:s?5:a?4:l?3:2;gd(),Hc(i,u,n);return}if(ze){if(Kt(ze.hit.x,ze.hit.y,ze.hit.z)===c.TNT){FS(ze.hit.x,ze.hit.y,ze.hit.z);return}pr=!0,Uo={x:ze.hit.x,y:ze.hit.y,z:ze.hit.z}}}else if(t.button===2){if(t.preventDefault(),St===c.BOW&&kd(c.ARROW)){Bs(c.ARROW),GS(e.position,n);return}if($x(St)){const i=Jx(St);if(i>0){If(i),Tn(),Bs(St);return}}if(ze){const i=Kt(ze.hit.x,ze.hit.y,ze.hit.z);if(i===c.BED)if(gS()){Vv(),vS(),If(4);return}else{Tn();return}if(Td(St)&&(i===c.GRASS||i===c.DIRT)){kv(),mi(gi,ze.hit.x,ze.hit.y,ze.hit.z,c.FARMLAND);return}if(St===c.WHEAT_SEEDS&&i===c.FARMLAND){const r=ze.hit.y+1;if(r<64&&Kt(ze.hit.x,r,ze.hit.z)===c.AIR){lf(),mi(gi,ze.hit.x,r,ze.hit.z,c.WHEAT_STAGE_1),Vc.set(`${ze.hit.x},${r},${ze.hit.z}`,{x:ze.hit.x,y:r,z:ze.hit.z,stage:1,timer:0}),Bs(c.WHEAT_SEEDS);return}}if(i===c.CRAFTING_TABLE){QS();return}if(i===c.FURNACE||i===c.FURNACE_LIT){rM(ze.hit.x,ze.hit.y,ze.hit.z);return}if(i===c.CHEST){dM(ze.hit.x,ze.hit.y,ze.hit.z);return}if(Kx(St)){const{prev:r}=ze;r.y>=0&&r.y<64&&Kt(r.x,r.y,r.z)===c.AIR&&(lf(),mi(gi,r.x,r.y,r.z,St),Bs(St,1))}}}}function yM(t){t.button===0&&(es=!1,pr=!1,Dn=0,nn&&(nn.visible=!1))}function TM(t){St=t}function AM(){return St}const Tf=[{type:c.WOODEN_SWORD,count:1},{type:c.WOODEN_PICKAXE,count:1},{type:c.GRASS,count:64},{type:c.DIRT,count:64},{type:c.WOOD_LOG,count:32},{type:c.COBBLESTONE,count:64},{type:c.TORCH,count:32},{type:c.WATER,count:1},{type:0,count:0}],Oe=new Array(36).fill(null).map(()=>({type:0,count:0}));for(let t=0;t<Tf.length;t++)Oe[t]={...Tf[t]};const li=[0,0,0,0];let Wc=0,Cn=null,Fn=null;function Bd(){Fn||(Fn=document.createElement("div"),Fn.id="inventory-modal",Fn.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",Fn.innerHTML=`
    <div class="glass-panel w-full max-w-[840px] flex flex-col rounded-xl overflow-hidden shadow-2xl bg-surface/90 border border-outline-variant text-on-surface">
      <!-- Header -->
      <div class="px-6 py-3.5 border-b border-outline-variant bg-surface-container-high/80 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">backpack</span>
          <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase font-bold">INVENTÁRIO &amp; CRIAÇÃO</h1>
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
            <span class="font-label-caps text-label-caps text-secondary mb-3 self-start font-semibold">Criação Básica (2×2)</span>
            <div class="flex items-center gap-5">
              <!-- 2x2 Grid -->
              <div id="inv-craft-2x2-grid" class="grid grid-cols-2 gap-2"></div>
              <!-- Arrow -->
              <div class="flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-primary">east</span>
              </div>
              <!-- Output Slot -->
              <div id="inv-craft-2x2-output" class="slot w-16 h-16 rounded-xl active cursor-pointer relative bg-surface-container-lowest border-2 border-primary shadow-[0_0_12px_rgba(120,220,119,0.4)]" title="Clique para coletar o item criado"></div>
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
            <span class="font-label-caps text-[11px] text-on-surface-variant">Botão Esq: Pegar tudo • Botão Dir: Dividir/Colocar 1</span>
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
  `,document.body.appendChild(Fn),document.getElementById("close-inventory-btn").addEventListener("click",Gd),document.getElementById("open-recipe-book-inv").addEventListener("click",Ud),window.addEventListener("keydown",t=>{t.code==="KeyE"&&bM()}),Gn())}function bM(){zc()?Gd():RM()}function RM(){Fn||Bd(),Fn.style.display="flex",_o(gt.INVENTORY),Et(!0),Kr(),Gn()}function Gd(){if(Fn){Fn.style.display="none",fi(gt.INVENTORY),Et(!1),pe.type>0&&pe.count>0&&(An(pe.type,pe.count),Ma());for(let t=0;t<4;t++){const e=Ht[t];e&&e.type>0&&e.count>0&&(An(e.type,e.count),Ht[t]={type:0,count:0})}Kr(),zn()}}function zc(){return xd(gt.INVENTORY)}function wM(){return Oe.slice(0,9).map(t=>t.type)}function CM(){return Oe.slice(0,9)}function IM(t){Wc=t,zn()}function Hd(){let t=0;for(let e=0;e<4;e++)li[e]>0&&(t+=jx(li[e]));return t}function An(t,e=1){if(!t||t===0||e<=0)return!1;let n=e;const i=xo(t);if(i>1){for(let r=0;r<36;r++)if(Oe[r].type===t&&Oe[r].count<i){const o=i-Oe[r].count,s=Math.min(o,n);if(Oe[r].count+=s,n-=s,n<=0)break}}if(n>0){for(let r=0;r<36;r++)if(Oe[r].type===0||Oe[r].count===0){const o=Math.min(i,n);if(Oe[r]={type:t,count:o},n-=o,n<=0)break}}return Gn(),zn(),n===0}function kd(t,e=1){let n=0;for(let i=0;i<36;i++)Oe[i].type===t&&(n+=Oe[i].count);return n>=e}function Bs(t,e=1){if(!kd(t,e))return!1;let n=e;for(let i=0;i<36;i++)if(Oe[i].type===t){const r=Math.min(Oe[i].count,n);if(Oe[i].count-=r,n-=r,Oe[i].count<=0&&(Oe[i]={type:0,count:0}),n<=0)break}return Gn(),zn(),!0}function zn(){var e;const t=((e=Oe[Wc])==null?void 0:e.type)||0;TM(t);for(let n=0;n<9;n++){const i=document.getElementById(`hotbar-slot-${n}`);if(i&&(i.innerHTML="",Oe[n].type>0)){const r=wt(Oe[n].type,38);if(r&&i.appendChild(r),Oe[n].count>1){const o=document.createElement("span");o.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",o.textContent=Oe[n].count,i.appendChild(o)}}}}function Gn(){const t=document.getElementById("inv-armor-grid"),e=document.getElementById("inv-craft-2x2-grid"),n=document.getElementById("inv-craft-2x2-output"),i=document.getElementById("inv-storage-grid"),r=document.getElementById("inv-hotbar-grid");if(!t||!e||!n||!i||!r)return;t.innerHTML="";const o=["security","checkroom","accessibility","directions_run"],s=["Capacete","Peitoral","Calças","Botas"],a=[[c.IRON_HELMET,c.DIAMOND_HELMET],[c.IRON_CHESTPLATE,c.DIAMOND_CHESTPLATE],[c.IRON_LEGGINGS,c.DIAMOND_LEGGINGS],[c.IRON_BOOTS,c.DIAMOND_BOOTS]];for(let l=0;l<4;l++){const u=document.createElement("div");if(u.className="slot w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",u.title=`Slot de ${s[l]}`,li[l]>0){const h=wt(li[l],30);h&&u.appendChild(h)}else{const h=document.createElement("span");h.className="material-symbols-outlined text-on-surface-variant text-base opacity-60",h.textContent=o[l],u.appendChild(h)}const d={get:()=>({type:li[l],count:li[l]>0?1:0}),set:(h,f)=>{li[l]=h},allowEquip:h=>a[l].includes(h),maxStack:1};u.addEventListener("mousedown",h=>Wn(d,h,Gn)),u.addEventListener("contextmenu",h=>h.preventDefault()),t.appendChild(u)}e.innerHTML="";for(let l=0;l<4;l++){const u=document.createElement("div");u.className="slot w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const d=Ht[l]||{type:0,count:0};if(d.type>0&&d.count>0){const f=wt(d.type,32);if(f&&u.appendChild(f),d.count>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=d.count,u.appendChild(m)}}const h={get:()=>Ht[l]||{type:0,count:0},set:(f,m)=>{Ht[l]={type:f,count:f===0?0:m},Kr()}};u.addEventListener("mousedown",f=>Wn(h,f,Gn)),u.addEventListener("contextmenu",f=>f.preventDefault()),e.appendChild(u)}if(n.innerHTML="",Cn&&Cn.result>0){const l=wt(Cn.result,40);if(l&&n.appendChild(l),Cn.count>1){const u=document.createElement("span");u.className="slot-count font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded shadow absolute bottom-1 right-1",u.textContent=Cn.count,n.appendChild(u)}}n.onmousedown=l=>{if(l.preventDefault(),Cn&&Cn.result>0){const u=Cn.result,d=Cn.count;if(l.shiftKey){if(An(u,d)){Tn();for(let h=0;h<4;h++)Ht[h].count>1?Ht[h].count-=1:Ht[h]={type:0,count:0};Kr(),Gn()}}else{const h=xo(u);if(pe.type===0){Pn(u,d),Tn();for(let f=0;f<4;f++)Ht[f].count>1?Ht[f].count-=1:Ht[f]={type:0,count:0};Kr(),Gn()}else if(pe.type===u&&pe.count+d<=h){pe.count+=d,di(),Tn();for(let f=0;f<4;f++)Ht[f].count>1?Ht[f].count-=1:Ht[f]={type:0,count:0};Kr(),Gn()}}}},n.oncontextmenu=l=>l.preventDefault(),i.innerHTML="";for(let l=9;l<36;l++)Af(l,i);r.innerHTML="";for(let l=0;l<9;l++)Af(l,r,!0,l===Wc)}function Af(t,e,n=!1,i=!1){const r=document.createElement("div");r.className=`slot w-full h-11 md:h-12 rounded-lg bg-surface-container-lowest border ${i?"border-primary shadow-[0_0_10px_rgba(120,220,119,0.5)] active":"border-outline-variant hover:border-primary/80"} flex items-center justify-center cursor-pointer relative transition-all`;const o=Oe[t]||{type:0,count:0};if(o.type>0&&o.count>0){const a=wt(o.type,34);if(a&&r.appendChild(a),r.title=xr[o.type]||"Item",o.count>1){const l=document.createElement("span");l.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",l.textContent=o.count,r.appendChild(l)}}const s={get:()=>Oe[t]||{type:0,count:0},set:(a,l)=>{Oe[t]={type:a,count:a===0?0:l},zn()},onShiftClick:(a,l)=>{if(t>=9){for(let u=0;u<9;u++)if(Oe[u].type===0||Oe[u].count===0){Oe[u]={type:a,count:l},Oe[t]={type:0,count:0},Et(!1);return}}else for(let u=9;u<36;u++)if(Oe[u].type===0||Oe[u].count===0){Oe[u]={type:a,count:l},Oe[t]={type:0,count:0},Et(!1);return}}};r.addEventListener("mousedown",a=>Wn(s,a,Gn)),r.addEventListener("contextmenu",a=>a.preventDefault()),e.appendChild(r)}function Kr(){const t=Ht.map(e=>(e==null?void 0:e.type)||0);Cn=Pd(t,2,2)}const Mt=.3,Fo=1.8,la=1.62,bf=28,DM=8.6,OM=5.8,PM=14,Rf=10,NM=3.6;let wo=0;const Mr=20,LM=6,UM=2,FM=5,BM=.5,wf=3.2;let Hn=null;const ne=new N;let be=new N,Xt=Mr,ii=!1,Bn=!1,ni=!1,Bo=!1,Go=0,Ho=!1,ca=0,ua=0,Gs=0,sr=0,On=!1,Co=0,Io=0;const Hr=[];let Cf=!1;function GM(){Hn=os(),Xt=Mr,be.set(0,0,0),Bn=!1;const t=Gc();ne.set(t.x,t.y,t.z),sr=ne.y,On=!1,Hn&&Hn.position.set(ne.x,ne.y+la,ne.z)}function Vd(){return Xt}function HM(){return Mr}function kM(){return ca}function VM(){return Bn}function Wi(){return ne}function WM(){return{onGround:ii,moving:Ho,inWater:ni,submerged:Bo,isFlying:Bn}}function uo(t,e=null){if(Xt<=0)return;const n=Hd(),i=Math.min(.8,n*.04),r=Math.max(1,t*(1-i));Xt=Math.max(0,Xt-r),ca=1,ua=0,Ov(),e&&(be.x+=e.x*5,be.z+=e.z*5,be.y=3.5)}function zM(t){Xt<=0||(Xt=Math.min(Mr,Xt+t))}function If(t){zM(t)}function Df(){Xt=Mr,be.set(0,0,0),ii=!1,Bn=!1,Go=0,ua=0;const t=Gc();ne.set(t.x,t.y,t.z),sr=ne.y,On=!1,Hn&&Hn.position.set(ne.x,ne.y+la,ne.z)}function XM(t,e,n){return e<0?!0:Fc(Kt(t,e,n))}function ji(t,e,n){const i=Math.floor(t-Mt+.001),r=Math.floor(t+Mt-.001),o=Math.floor(e),s=Math.floor(e+Fo-.001),a=Math.floor(n-Mt+.001),l=Math.floor(n+Mt-.001);for(let u=o;u<=s;u++)for(let d=a;d<=l;d++)for(let h=i;h<=r;h++)if(XM(h,u,d))return!0;return!1}function Of(t,e,n){return Kt(t,e,n)===c.WATER}function qM(t){if(Hn||(Hn=os()),!Hn)return;const e=vo();ca=Math.max(0,ca-t*2),ni=Of(Math.floor(ne.x),Math.floor(ne.y+.2),Math.floor(ne.z)),Bo=Of(Math.floor(ne.x),Math.floor(ne.y+la),Math.floor(ne.z));const n=e&&Rn("Space"),i=performance.now()/1e3;if(n&&!Cf){for(Io=.15,Hr.push(i);Hr.length>0&&i-Hr[0]>.55;)Hr.shift();Hr.length>=3&&(Bn=!Bn,be.set(0,0,0),Hr.length=0,On=!1,Iv(Bn))}Cf=n,Io>0&&(Io-=t),ii?Co=.12:Co=Math.max(0,Co-t);let r=0,o=0;e&&(Rn("KeyW")&&(r+=1),Rn("KeyS")&&(r-=1),Rn("KeyD")&&(o+=1),Rn("KeyA")&&(o-=1));const s=Hn.rotation.y,a=-Math.sin(s),l=-Math.cos(s),u=Math.cos(s),d=-Math.sin(s);let h=0,f=0;if(r!==0||o!==0){h=a*r+u*o,f=l*r+d*o;const m=Math.hypot(h,f);m>.001&&(h/=m,f/=m)}if(Ho=r!==0||o!==0,Bn){On=!1;const m=PM,_=1-Math.exp(-65*t);be.x+=(h*(Ho?m:0)-be.x)*_,be.z+=(f*(Ho?m:0)-be.z)*_;let v=0;e&&(Rn("Space")&&(v+=Rf),(Rn("ShiftLeft")||Rn("ShiftRight"))&&(v-=Rf)),be.y+=(v-be.y)*_,ne.x+=be.x*t,ji(ne.x,ne.y,ne.z)&&(be.x>0?ne.x=Math.floor(ne.x+Mt)-Mt-.001:be.x<0&&(ne.x=Math.floor(ne.x-Mt)+1+Mt+.001),be.x=0),ne.z+=be.z*t,ji(ne.x,ne.y,ne.z)&&(be.z>0?ne.z=Math.floor(ne.z+Mt)-Mt-.001:be.z<0&&(ne.z=Math.floor(ne.z-Mt)+1+Mt+.001),be.z=0),ne.y+=be.y*t,ji(ne.x,ne.y,ne.z)&&(be.y>0?ne.y=Math.floor(ne.y+Fo)-Fo-.001:be.y<0&&(ne.y=Math.floor(ne.y)+1),be.y=0)}else{const m=(ii||Co>0)&&!ni;Io>0&&m?(be.y=DM,ii=!1,Co=0,Io=0,sr=ne.y,On=!1,md()):ni&&n&&(be.y=Math.max(be.y,4.5),On=!1);const _=ni?bf*.3:bf;be.y-=_*t;const v=ni?8:36;be.y<-v&&(be.y=-v),be.y<0?On||(On=!0,sr=ne.y):(On=!1,sr=ne.y);const g=(Bo?.7:1)*(ni?NM:OM);if(Ho){const E=1-Math.exp(-65*t);be.x+=(h*g-be.x)*E,be.z+=(f*g-be.z)*E;const y=Math.hypot(be.x,be.z);if(ii&&!ni&&y>1.2&&!Bn){if(wo+=t,wo>=.42){wo=0;const U=Kt(Math.floor(ne.x),Math.floor(ne.y-.2),Math.floor(ne.z));Uv(U)}}else wo=0}else{const E=Math.exp(-14*t);be.x*=E,be.z*=E,wo=0}const p=(E,y)=>{if(!ii)return!1;const U=.55;return ji(ne.x+E,ne.y+U,ne.z+y)?!1:(ne.y+=U,!0)};ne.x+=be.x*t,ji(ne.x,ne.y,ne.z)&&(p(0,0)||(be.x>0?ne.x=Math.floor(ne.x+Mt)-Mt-.001:be.x<0&&(ne.x=Math.floor(ne.x-Mt)+1+Mt+.001),be.x=0)),ne.z+=be.z*t,ji(ne.x,ne.y,ne.z)&&(p(0,0)||(be.z>0?ne.z=Math.floor(ne.z+Mt)-Mt-.001:be.z<0&&(ne.z=Math.floor(ne.z-Mt)+1+Mt+.001),be.z=0));const b=be.y<0;if(ne.y+=be.y*t,ii=!1,ji(ne.x,ne.y,ne.z))if(b){ii=!0;const E=Math.floor(ne.y)+1,y=Math.max(0,sr-E);if(ne.y=E,be.y=0,!ni&&y>wf){const U=Math.floor((y-wf)*1.5);U>0&&uo(U)}On=!1,sr=ne.y}else ne.y=Math.floor(ne.y+Fo)-Fo-.001,be.y=0}ne.y<-10&&Df(),Hn.position.set(ne.x,ne.y+la,ne.z),Bo&&!Bn?(Go+=t,Go>LM&&uo(UM*t)):Go=Math.max(0,Go-t*2.5),Xt>0&&Xt<Mr&&!Bo&&(ua+=t,ua>FM&&(Xt=Math.min(Mr,Xt+BM*t))),Xt<=0?(Gs+=t,e&&Rn("Space")&&Gs>.8&&(Df(),Gs=0)):Gs=0}const Pf=document.getElementById("debug-info");let Pi=null,ul=0,Hs=0,fl=60;const KM={[ot.PLAINS]:"Planície Florida",[ot.FOREST]:"Floresta Densa",[ot.DESERT]:"Deserto de Dunas",[ot.SNOWY_MOUNTAINS]:"Picos Nevados",[ot.OCEAN]:"Costa / Oceano"};function YM(){if(!Pi){Pi=document.createElement("div"),Pi.id="fly-badge",Object.assign(Pi.style,{position:"absolute",top:"58px",left:"50%",transform:"translateX(-50%)",padding:"4px 14px",borderRadius:"20px",background:"linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))",border:"1px solid rgba(255,255,255,0.4)",boxShadow:"0 0 15px rgba(59,130,246,0.6)",color:"#ffffff",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase",pointerEvents:"none",zIndex:"25",display:"none",backdropFilter:"blur(4px)",animation:"pulse 1.8s infinite"}),Pi.innerHTML='⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';const t=document.getElementById("hud");t&&t.appendChild(Pi)}}function $M(t,e){if(YM(),ul++,Hs+=t,Hs>=.5&&(fl=Math.round(ul/Hs),ul=0,Hs=0),Pf&&e.position){const n=e.position,i=lo(Math.floor(n.x),Math.floor(n.z)),r=KM[i]||"Desconhecido",o=_S(),s=co(),a=s?"☀️":"🌙";Pf.innerHTML=`<b>FPS:</b> <span style="color:${fl>=50?"#4ade80":"#f87171"}">${fl}</span><br><b>XYZ:</b> ${n.x.toFixed(1)} / ${n.y.toFixed(1)} / ${n.z.toFixed(1)}<br><b>Bioma:</b> <span style="color:#38bdf8;">${r}</span><br><b>Hora:</b> ${a} <span style="color:#fde047;">${o}</span> (${s?"Dia":"Noite"})`}Pi&&(Pi.style.display=VM()?"block":"none")}let fa=0,xc=null,Yr=null,Nf=!1;function ZM(){const t=document.getElementById("hud"),e=document.createElement("div");e.id="hotbar-frame",Object.assign(e.style,{position:"absolute",bottom:"14px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"4px",padding:"5px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.85)",border:"2px solid rgba(255,255,255,0.15)",boxShadow:"0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",pointerEvents:"none",zIndex:"20"}),xc=e;for(let n=0;n<9;n++){const i=document.createElement("div");i.className="hotbar-slot",i.dataset.index=n,Object.assign(i.style,{width:"46px",height:"46px",borderRadius:"6px",border:"2px solid rgba(0,0,0,0.55)",background:"rgba(30, 41, 59, 0.9)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"75% 75%",position:"relative",transition:"border-color 0.15s, transform 0.15s, box-shadow 0.15s",cursor:"pointer"});const r=document.createElement("span");r.className="hotbar-slot-num",Object.assign(r.style,{position:"absolute",top:"1px",left:"3px",fontSize:"10px",color:"#94a3b8",fontWeight:"bold",opacity:"0.6"}),r.textContent=n+1,i.appendChild(r);const o=document.createElement("span");o.className="hotbar-slot-count",Object.assign(o.style,{position:"absolute",bottom:"1px",right:"3px",fontSize:"11px",color:"#fff",textShadow:"0 1px 2px #000",fontWeight:"bold",display:"none"}),i.appendChild(o),e.appendChild(i)}t.appendChild(e),Yr=document.createElement("div"),Yr.id="hotbar-name",Object.assign(Yr.style,{position:"absolute",bottom:"72px",left:"50%",transform:"translateX(-50%)",color:"#fff",fontSize:"13px",fontWeight:"600",letterSpacing:"0.5px",padding:"4px 14px",borderRadius:"12px",background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255,255,255,0.18)",backdropFilter:"blur(4px)",pointerEvents:"none",zIndex:"20",textAlign:"center",whiteSpace:"nowrap"}),t.appendChild(Yr),Xc()}function jM(){if(!zc()){for(let t=0;t<9;t++)Rn(`Digit${t+1}`)&&Wd(t);Nf||(Nf=!0,document.addEventListener("wheel",JM,{passive:!1})),Xc()}}let ks=0;function JM(t){if(!(!vo()||zc())&&(t.preventDefault(),ks+=Math.sign(t.deltaY),Math.abs(ks)>=1)){const e=ks>0?1:-1;ks=0;const n=(fa+e+9)%9;Wd(n)}}function Wd(t){fa=t,IM(t),Xc()}function Xc(){var n;if(!xc)return;const t=CM(),e=xc.children;for(let i=0;i<e.length;i++){const r=i===fa,o=t[i]||{type:0,count:0},s=o.type||0,a=o.count||0;if(e[i].style.borderColor=r?"rgba(74, 222, 128, 0.95)":"rgba(0,0,0,0.55)",e[i].style.transform=r?"scale(1.14) translateY(-3px)":"scale(1)",e[i].style.boxShadow=r?"0 0 14px rgba(74, 222, 128, 0.4), 0 6px 14px rgba(0,0,0,0.6)":"none",e[i].style.zIndex=r?"2":"1",s>0){const u=wt(s,38);u&&(e[i].style.backgroundImage=`url(${u.toDataURL()})`)}else e[i].style.backgroundImage="none";const l=e[i].querySelector(".hotbar-slot-count");l&&(a>1?(l.textContent=a,l.style.display="block"):l.style.display="none")}if(Yr){const i=((n=t[fa])==null?void 0:n.type)||0;Yr.textContent=xr[i]||""}}let Sc=[],js=[],$r=null,ar=null,Do=null;function QM(){const t=document.getElementById("hud");$r=document.createElement("div"),$r.id="damage-vignette",$r.style.opacity="0",t.appendChild($r);const e=document.createElement("div");e.style.cssText="position:fixed; bottom:82px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; gap:4px; align-items:flex-start; pointer-events:none; z-index:20;",Do=document.createElement("div"),Do.id="armor-bar",Do.style.cssText="display:flex; gap:3px; font-size:16px; color:#38bdf8; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8));";for(let r=0;r<10;r++){const o=document.createElement("span");o.textContent="🛡️",o.style.cssText="font-size:14px; opacity:0; transition:opacity 0.2s;",js.push(o),Do.appendChild(o)}e.appendChild(Do);const n=document.createElement("div");n.id="health-bar",n.style.cssText="display:flex; gap:3px;";const i=HM()/2;for(let r=0;r<i;r++){const o=document.createElement("span");o.className="heart",o.textContent="♥",Sc.push(o),n.appendChild(o)}e.appendChild(n),t.appendChild(e),ar=document.createElement("div"),ar.id="death-overlay",ar.innerHTML='<div class="death-title">☠ VOCÊ MORREU</div><div class="death-hint">Pressione ESPAÇO para renascer</div>',ar.style.display="none",t.appendChild(ar)}function eE(){const t=Vd();for(let i=0;i<Sc.length;i++){const r=t-i*2;Sc[i].className="heart "+(r>=2?"full":r===1?"half":"empty")}const e=Hd(),n=Math.floor(e/2);for(let i=0;i<js.length;i++)i<n?js[i].style.opacity="1":js[i].style.opacity="0";$r&&($r.style.opacity=kM()*.75),ar&&(ar.style.display=t<=0?"flex":"none")}const dl=new Map;function hl(t=14412542){const e=new Ft,n=new Ve({color:t,depthTest:!0}),i=new ie(new fe(.06,.48,.025),n);i.position.set(0,.24,0),e.add(i);const r=new Ve({color:4674921,depthTest:!0}),o=new ie(new fe(.2,.035,.045),r);o.position.set(0,.02,0),e.add(o);const s=new Ve({color:8736014,depthTest:!0}),a=new ie(new fe(.038,.12,.038),s);return a.position.set(0,-.06,0),e.add(a),e}function pl(t=9741240){const e=new Ft,n=new Ve({color:8736014,depthTest:!0}),i=new ie(new fe(.04,.5,.04),n);i.position.set(0,.1,0),e.add(i);const r=new Ve({color:t,depthTest:!0}),o=new ie(new fe(.32,.06,.05),r);return o.position.set(0,.32,0),e.add(o),e}function ml(t=9741240){const e=new Ft,n=new Ve({color:8736014,depthTest:!0}),i=new ie(new fe(.04,.48,.04),n);i.position.set(0,.1,0),e.add(i);const r=new Ve({color:t,depthTest:!0}),o=new ie(new fe(.18,.06,.05),r);return o.position.set(.06,.32,0),e.add(o),e}function tE(){const t=new Ft,e=new Ve({color:7877903,depthTest:!0}),n=new vi({color:16317180,depthTest:!0}),i=new ie(new fe(.035,.26,.035),e);i.position.set(.06,.14,0),i.rotation.z=-.35,t.add(i);const r=new ie(new fe(.035,.26,.035),e);r.position.set(.06,-.14,0),r.rotation.z=.35,t.add(r);const o=new ie(new fe(.045,.1,.045),e);o.position.set(.11,0,0),t.add(o);const s=new ie(new fe(.012,.48,.012),n);return s.position.set(0,0,0),t.add(s),t}function nE(t,e=.22){if(t===c.IRON_SWORD)return hl(14412542);if(t===c.STONE_SWORD)return hl(9741240);if(t===c.WOODEN_SWORD)return hl(11817737);if(t===c.IRON_PICKAXE)return pl(14412542);if(t===c.STONE_PICKAXE)return pl(6583435);if(t===c.WOODEN_PICKAXE)return pl(11817737);if(t===c.IRON_HOE)return ml(14412542);if(t===c.STONE_HOE)return ml(6583435);if(t===c.WOODEN_HOE)return ml(11817737);if(t===c.BOW)return tE();if(t===c.BREAD){const u=new Ve({color:11817737,depthTest:!0});return new ie(new fe(e*.9,e*.45,e*.6),u)}if(t===c.WHEAT){const u=new Ve({color:15381256,depthTest:!0});return new ie(new fe(e*.35,e*.9,e*.35),u)}if(t===c.PORKCHOP){const u=new Ve({color:16020150,depthTest:!0});return new ie(new fe(e,e*.4,e*.8),u)}if(t===c.COOKED_PORKCHOP){const u=new Ve({color:10105874,depthTest:!0});return new ie(new fe(e,e*.4,e*.8),u)}if(t===c.ROTTEN_FLESH){const u=new Ve({color:8702998,depthTest:!0});return new ie(new fe(e,e*.4,e*.8),u)}const n=`${t}:${e}`;if(dl.has(n))return dl.get(n);const i=Jo[t];if(!i)return null;const r=new fe(e,e,e),o=r.attributes.uv.array,s=[i.side,i.side,i.top,i.bottom,i.side,i.side];for(let u=0;u<6;u++){const d=Uc(s[u]),h=u*8;o[h]=d.uMin,o[h+1]=d.vMax,o[h+2]=d.uMax,o[h+3]=d.vMax,o[h+4]=d.uMin,o[h+5]=d.vMin,o[h+6]=d.uMax,o[h+7]=d.vMin}r.attributes.uv.needsUpdate=!0,r.computeVertexNormals();const a=new Ve({map:xa(),depthTest:!0}),l=new ie(r,a);return dl.set(n,l),l}const zd=.38,Xd=-.28,qd=-.46,Kd=-.32,Yd=.35,$d=-.12;let tn=null,gl=null,_l=null,ei=null,Wr=-1,ko=1,iE=5.6,Ji=0;function rE(){const t=os();if(!t)return;tn=new Ft;const e=new Ve({color:13011801,depthTest:!0}),n=new Ve({color:43176,depthTest:!0});gl=new ie(new fe(.1,.1,.34),e),gl.position.set(0,0,.1),tn.add(gl),_l=new ie(new fe(.108,.108,.14),n),_l.position.set(0,0,.22),tn.add(_l),Zd(),tn.position.set(zd,Xd,qd),tn.rotation.set(Kd,Yd,$d),tn.renderOrder=999,t.add(tn),document.addEventListener("mousedown",oE)}function oE(t){vo()&&(t.button===0||t.button===2)&&(ko=0)}function Zd(){const t=AM();if(t!==Wr&&(Wr=t,ei&&(tn.remove(ei),ei=null),Wr>0)){const e=nE(Wr,.22);e&&(ei=e,Bc(Wr)?(ei.position.set(-.02,.14,-.22),ei.rotation.set(.2,.3,-.4)):(ei.position.set(-.02,.08,-.16),ei.rotation.set(.35,.65,-.2)),tn.add(ei))}}function sE(t,e){if(!tn)return;const n=vo();if(tn.visible=n,!n)return;Zd();let i=0,r=0,o=0,s=0,a=0;if(ko<1){const h=Bc(Wr)?6.2:iE;ko=Math.min(1,ko+t*h);const f=Math.sin(ko*Math.PI);i=-f*1.05,r=f*.6,o=-f*.4,s=-f*.09,a=-f*.14}const l=WM();let u=0,d=0;l.onGround&&l.moving?(Ji+=t*10,u=Math.cos(Ji*.5)*.025,d=Math.abs(Math.sin(Ji))*.035):l.isFlying&&l.moving?(Ji+=t*6,u=Math.cos(Ji*.5)*.015,d=Math.sin(Ji)*.015):Ji=0,tn.position.set(zd+u,Xd+d+s,qd+a),tn.rotation.set(Kd+i,Yd+r,$d+o)}const Vo={SUNNY:"sunny",RAIN:"rain"};let vl=Vo.SUNNY,xl=120+Math.random()*60,lr=null,Yo=null;const Mc=800;function aE(t){Yo=new hn;const e=new Float32Array(Mc*3);for(let i=0;i<Mc*3;i+=3)e[i]=(Math.random()-.5)*40,e[i+1]=Math.random()*25,e[i+2]=(Math.random()-.5)*40;Yo.setAttribute("position",new yn(e,3));const n=new pd({color:9684477,size:.12,transparent:!0,opacity:0});lr=new Ev(Yo,n),t.add(lr)}function lE(t,e){if(xl-=t,xl<=0&&(xl=90+Math.random()*120,vl=vl===Vo.SUNNY?Vo.RAIN:Vo.SUNNY),lr&&e){lr.position.set(e.x,e.y,e.z);const i=vl!==Vo.SUNNY?.65:0;if(lr.material.opacity+=(i-lr.material.opacity)*t*2,lr.material.opacity>.01){const r=Yo.attributes.position.array;for(let o=1;o<Mc*3;o+=3)r[o]-=32*t,r[o]<-5&&(r[o]=20+Math.random()*5);Yo.attributes.position.needsUpdate=!0}}}const jd="voxelcraft_world_save_v03";function cE(){try{const t=Wi(),e=wM(),n=Vd(),i={timestamp:Date.now(),player:{x:t.x,y:t.y,z:t.z,health:n,hotbar:e,armor:[...li]}};localStorage.setItem(jd,JSON.stringify(i))}catch(t){console.warn("Could not save world data:",t)}}function uE(){try{const t=localStorage.getItem(jd);if(!t)return!1;const e=JSON.parse(t);if(!e||!e.player)return!1;const n=Wi();if(n&&e.player.x!==void 0&&n.set(e.player.x,e.player.y,e.player.z),e.player.armor)for(let i=0;i<4;i++)li[i]=e.player.armor[i]||0;return!0}catch(t){return console.warn("Could not load world data:",t),!1}}window.addEventListener("contextmenu",t=>t.preventDefault());th(document);console.log("[VoxelCraft] Building texture atlas...");qx();const Lf=ex(),dn=tx();mS(dn,nx());aE(dn);ES(dn);bS(dn);console.log("[VoxelCraft] Generating world biomes & 3D caves...");uS(dn);const Xn=Gc(),Ui=jv(window.innerWidth/window.innerHeight,Xn);dn.add(Ui);rx(Ui);Jv(Ed());$v(Ed());US(dn);rr(je.PIG,Xn.x+4,Xn.y,Xn.z+4);rr(je.SHEEP,Xn.x-3,Xn.y,Xn.z+5);xM(dn);Bd();Nd();ZM();GM();QM();rE();uE();console.log(`[VoxelCraft v0.4.3V] Ready! Spawn at (${Xn.x}, ${Xn.y}, ${Xn.z})`);let Sl=0;function fE(t,e){if(qv()){Sf(Ui.position,dn),Mf(t,dn,Ui,Lf);return}Kv()||(qM(t),Sf(Ui.position,dn),Mf(t,dn,Ui,Lf),lE(t,Wi()),aM(t),VS(t),RS(t,e),yS(t),SM(t),jM(),eE(),sE(t),Wv(t),$M(t,{position:Ui.position}),Sl+=t,Sl>=30&&(Sl=0,cE()))}function dE(){ix(Ui)}Qv(fE,dE);
