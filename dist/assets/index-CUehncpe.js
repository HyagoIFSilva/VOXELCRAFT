(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Lo=new Set;function Xd(n=document){n.addEventListener("keydown",e=>{Lo.add(e.code)}),n.addEventListener("keyup",e=>{Lo.delete(e.code)}),n.addEventListener("contextmenu",e=>{document.pointerLockElement&&e.preventDefault()}),window.addEventListener("blur",()=>{Lo.clear()})}function bn(n){return Lo.has(n)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="170",qd=0,Yc=1,Yd=2,wf=1,Kd=2,jn=3,Fi=0,Vt=1,Dn=2,Li=0,Wr=1,Kc=2,$c=3,jc=4,$d=5,Ji=100,jd=101,Zd=102,Jd=103,Qd=104,eh=200,th=201,nh=202,ih=203,dl=204,hl=205,rh=206,sh=207,oh=208,ah=209,lh=210,ch=211,uh=212,fh=213,dh=214,pl=0,ml=1,gl=2,$r=3,_l=4,vl=5,xl=6,Sl=7,gc=0,hh=1,ph=2,Ni=0,mh=1,gh=2,_h=3,vh=4,xh=5,Sh=6,Mh=7,Cf=300,jr=301,Zr=302,Ml=303,El=304,na=306,yl=1e3,rr=1001,Tl=1002,Qt=1003,Eh=1004,Qs=1005,Bn=1006,ha=1007,sr=1008,di=1009,If=1010,Pf=1011,Hs=1012,_c=1013,ur=1014,ri=1015,zs=1016,vc=1017,xc=1018,Jr=1020,Lf=35902,Nf=1021,Of=1022,En=1023,Df=1024,Uf=1025,zr=1026,Qr=1027,Ff=1028,Sc=1029,Bf=1030,Mc=1031,Ec=1033,No=33776,Oo=33777,Do=33778,Uo=33779,bl=35840,Al=35841,Rl=35842,wl=35843,Cl=36196,Il=37492,Pl=37496,Ll=37808,Nl=37809,Ol=37810,Dl=37811,Ul=37812,Fl=37813,Bl=37814,Gl=37815,Hl=37816,kl=37817,Vl=37818,Wl=37819,zl=37820,Xl=37821,Fo=36492,ql=36494,Yl=36495,Gf=36283,Kl=36284,$l=36285,jl=36286,yh=3200,Th=3201,Hf=0,bh=1,wi="",$t="srgb",ss="srgb-linear",ia="linear",tt="srgb",vr=7680,Zc=519,Ah=512,Rh=513,wh=514,kf=515,Ch=516,Ih=517,Ph=518,Lh=519,Jc=35044,Qc="300 es",si=2e3,Vo=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const Xr=Math.PI/180,ks=180/Math.PI;function as(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function yc(n,e){return(n%e+e)%e}function Nh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Oh(n,e,t){return n!==e?(t-n)/(e-n):0}function Ds(n,e,t){return(1-t)*n+t*e}function Dh(n,e,t,i){return Ds(n,e,1-Math.exp(-t*i))}function Uh(n,e=1){return e-Math.abs(yc(n,e*2)-e)}function Fh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hh(n,e){return n+Math.random()*(e-n)}function kh(n){return n*(.5-Math.random())}function Vh(n){n!==void 0&&(eu=n);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wh(n){return n*Xr}function zh(n){return n*ks}function Xh(n){return(n&n-1)===0&&n!==0}function qh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kh(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*f,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*f,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*f,a*c);break;case"XZX":n.set(a*f,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*f,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $h={DEG2RAD:Xr,RAD2DEG:ks,generateUUID:as,clamp:Nt,euclideanModulo:yc,mapLinear:Nh,inverseLerp:Oh,lerp:Ds,damp:Dh,pingpong:Uh,smoothstep:Fh,smootherstep:Bh,randInt:Gh,randFloat:Hh,randFloatSpread:kh,seededRandom:Vh,degToRad:Wh,radToDeg:zh,isPowerOfTwo:Xh,ceilPowerOfTwo:qh,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:Kh,normalize:Pt,denormalize:Dr};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,r,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],v=r[0],g=r[3],p=r[6],A=r[1],E=r[4],y=r[7],U=r[2],C=r[5],R=r[8];return s[0]=o*v+a*A+l*U,s[3]=o*g+a*E+l*C,s[6]=o*p+a*y+l*R,s[1]=c*v+f*A+d*U,s[4]=c*g+f*E+d*C,s[7]=c*p+f*y+d*R,s[2]=h*v+m*A+_*U,s[5]=h*g+m*E+_*C,s[8]=h*p+m*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,_=t*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(f*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Ue;function Vf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jh(){const n=Wo("canvas");return n.style.display="block",n}const tu={};function ys(n){n in tu||(tu[n]=!0,console.warn(n))}function Zh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Jh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(n.r=li(n.r),n.g=li(n.g),n.b=li(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(n.r=qr(n.r),n.g=qr(n.g),n.b=qr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===wi?ia:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const nu=[.64,.33,.3,.6,.15,.06],iu=[.2126,.7152,.0722],ru=[.3127,.329],su=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[ss]:{primaries:nu,whitePoint:ru,transfer:ia,toXYZ:su,fromXYZ:ou,luminanceCoefficients:iu,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:nu,whitePoint:ru,transfer:tt,toXYZ:su,fromXYZ:ou,luminanceCoefficients:iu,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}});let xr;class ep{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Wo("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tp=0;class Wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ma(r[o].image)):s.push(ma(r[o]))}else s=ma(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ep.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class Ut extends os{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=rr,r=rr,s=Bn,o=sr,a=En,l=di,c=Ut.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=as(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yl:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yl:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Cf;Ut.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(m+1)/2,U=(p+1)/2,C=(f+h)/4,R=(d+v)/4,D=(_+g)/4;return E>y&&E>U?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=R/i):y>U?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=D/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=R/s,r=D/s),this.set(i,r,s,t),this}let A=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(d-v)/A,this.z=(h-f)/A,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends os{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends ip{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zf extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==h||c!==m||f!==_){let g=1-a;const p=l*h+c*m+f*_+d*v,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),C=Math.atan2(U,p*A);g=Math.sin(g*C)/U,a=Math.sin(a*C)/U}const y=a*A;if(l=l*g+h*y,c=c*g+m*y,f=f*g+_*y,d=d*g+v*y,g===1-a){const U=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=U,c*=U,f*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+f*d+l*m-c*h,e[t+1]=l*_+f*h+c*d-a*m,e[t+2]=c*_+f*m+a*h-l*d,e[t+3]=f*_-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],d=t[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new O,au=new Xs;class qs{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),to.subVectors(this.max,ps),Sr.subVectors(e.a,ps),Mr.subVectors(e.b,ps),Er.subVectors(e.c,ps),gi.subVectors(Mr,Sr),_i.subVectors(Er,Mr),Vi.subVectors(Sr,Er);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Vi.z,Vi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Vi.z,0,-Vi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Vi.y,Vi.x,0];return!_a(t,Sr,Mr,Er,to)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Sr,Mr,Er,to))?!1:(no.crossVectors(gi,_i),t=[no.x,no.y,no.z],_a(t,Sr,Mr,Er,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new O,new O,new O,new O,new O,new O,new O,new O],mn=new O,eo=new qs,Sr=new O,Mr=new O,Er=new O,gi=new O,_i=new O,Vi=new O,ps=new O,to=new O,no=new O,Wi=new O;function _a(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wi.fromArray(n,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),f=i.dot(Wi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const sp=new qs,ms=new O,va=new O;class Ys{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(va)),this.expandByPoint(ms.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new O,xa=new O,io=new O,vi=new O,Sa=new O,ro=new O,Ma=new O;class Tc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xa.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(xa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=vi.dot(this.direction),l=-vi.dot(io),c=vi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const v=1/f;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xa).addScaledVector(io,h),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){Sa.subVectors(t,e),ro.subVectors(i,e),Ma.crossVectors(Sa,ro);let o=this.direction.dot(Ma),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(ro.crossVectors(vi,ro));if(l<0)return null;const c=a*this.direction.dot(Sa.cross(vi));if(c<0||l+c>o)return null;const f=-a*vi.dot(Ma);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,a,l,c,f,d,h,m,_,v,g){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,f,d,h,m,_,v,g)}set(e,t,i,r,s,o,a,l,c,f,d,h,m,_,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=h,p[3]=m,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,_=a*f,v=a*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,v=c*d;t[0]=h+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=m*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*f,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,_=a*f,v=a*d;t[0]=l*f,t[4]=_*c-m,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*f,t[4]=v-h*d,t[8]=_*d+m,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=m*d+_,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=h*d+v,t[5]=o*f,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*f,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,ap)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),xi.crossVectors(i,Xt),xi.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),xi.crossVectors(i,Xt)),xi.normalize(),so.crossVectors(Xt,xi),r[0]=xi.x,r[4]=so.x,r[8]=Xt.x,r[1]=xi.y,r[5]=so.y,r[9]=Xt.y,r[2]=xi.z,r[6]=so.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],v=i[6],g=i[10],p=i[14],A=i[3],E=i[7],y=i[11],U=i[15],C=r[0],R=r[4],D=r[8],T=r[12],M=r[1],w=r[5],W=r[9],H=r[13],$=r[2],j=r[6],q=r[10],Z=r[14],k=r[3],ie=r[7],de=r[11],ye=r[15];return s[0]=o*C+a*M+l*$+c*k,s[4]=o*R+a*w+l*j+c*ie,s[8]=o*D+a*W+l*q+c*de,s[12]=o*T+a*H+l*Z+c*ye,s[1]=f*C+d*M+h*$+m*k,s[5]=f*R+d*w+h*j+m*ie,s[9]=f*D+d*W+h*q+m*de,s[13]=f*T+d*H+h*Z+m*ye,s[2]=_*C+v*M+g*$+p*k,s[6]=_*R+v*w+g*j+p*ie,s[10]=_*D+v*W+g*q+p*de,s[14]=_*T+v*H+g*Z+p*ye,s[3]=A*C+E*M+y*$+U*k,s[7]=A*R+E*w+y*j+U*ie,s[11]=A*D+E*W+y*q+U*de,s[15]=A*T+E*H+y*Z+U*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+v*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+g*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+p*(-r*a*f-t*l*d+t*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],A=d*g*c-v*h*c+v*l*m-a*g*m-d*l*p+a*h*p,E=_*h*c-f*g*c-_*l*m+o*g*m+f*l*p-o*h*p,y=f*v*c-_*d*c+_*a*m-o*v*m-f*a*p+o*d*p,U=_*d*l-f*v*l-_*a*h+o*v*h+f*a*g-o*d*g,C=t*A+i*E+r*y+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=A*R,e[1]=(v*h*s-d*g*s-v*r*m+i*g*m+d*r*p-i*h*p)*R,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*p+i*l*p)*R,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*R,e[4]=E*R,e[5]=(f*g*s-_*h*s+_*r*m-t*g*m-f*r*p+t*h*p)*R,e[6]=(_*l*s-o*g*s-_*r*c+t*g*c+o*r*p-t*l*p)*R,e[7]=(o*h*s-f*l*s+f*r*c-t*h*c-o*r*m+t*l*m)*R,e[8]=y*R,e[9]=(_*d*s-f*v*s-_*i*m+t*v*m+f*i*p-t*d*p)*R,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*p+t*a*p)*R,e[11]=(f*a*s-o*d*s-f*i*c+t*d*c+o*i*m-t*a*m)*R,e[12]=U*R,e[13]=(f*v*r-_*d*r+_*i*h-t*v*h-f*i*g+t*d*g)*R,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*g-t*a*g)*R,e[15]=(o*d*r-f*a*r+f*i*l-t*d*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,_=s*d,v=o*f,g=o*d,p=a*d,A=l*c,E=l*f,y=l*d,U=i.x,C=i.y,R=i.z;return r[0]=(1-(v+p))*U,r[1]=(m+y)*U,r[2]=(_-E)*U,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(h+p))*C,r[6]=(g+A)*C,r[7]=0,r[8]=(_+E)*R,r[9]=(g-A)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const c=1/s,f=1/o,d=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=f,gn.elements[5]*=f,gn.elements[6]*=f,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=si){const l=this.elements,c=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(a===si)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vo)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=si){const l=this.elements,c=1/(t-e),f=1/(i-r),d=1/(o-s),h=(t+e)*c,m=(i+r)*f;let _,v;if(a===si)_=(o+s)*d,v=-2*d;else if(a===Vo)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new O,gn=new ct,op=new O(0,0,0),ap=new O(1,1,1),xi=new O,so=new O,Xt=new O,lu=new ct,cu=new Xs;class kn{constructor(e=0,t=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lp=0;const uu=new O,Tr=new Xs,qn=new ct,oo=new O,gs=new O,cp=new O,up=new Xs,fu=new O(1,0,0),du=new O(0,1,0),hu=new O(0,0,1),pu={type:"added"},fp={type:"removed"},br={type:"childadded",child:null},Ea={type:"childremoved",child:null};class vt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new O,t=new kn,i=new Xs,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ue}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(gs,oo,this.up):qn.lookAt(oo,gs,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(qn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new O(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new O,Yn=new O,ya=new O,Kn=new O,Ar=new O,Rr=new O,mu=new O,Ta=new O,ba=new O,Aa=new O,Ra=new ht,wa=new ht,Ca=new ht;class cn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Yn.subVectors(i,t),ya.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Yn),l=_n.dot(ya),c=Yn.dot(Yn),f=Yn.dot(ya),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ra.setScalar(0),wa.setScalar(0),Ca.setScalar(0),Ra.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,i),Ca.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ra,s.x),o.addScaledVector(wa,s.y),o.addScaledVector(Ca,s.z),o}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Yn.subVectors(e,t),_n.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),_n.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,i),Rr.subVectors(s,i),Ta.subVectors(e,i);const l=Ar.dot(Ta),c=Rr.dot(Ta);if(l<=0&&c<=0)return t.copy(i);ba.subVectors(e,r);const f=Ar.dot(ba),d=Rr.dot(ba);if(f>=0&&d<=f)return t.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Ar,o);Aa.subVectors(e,s);const m=Ar.dot(Aa),_=Rr.dot(Aa);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Rr,a);const g=f*_-m*d;if(g<=0&&d-f>=0&&m-_>=0)return mu.subVectors(s,r),a=(d-f)/(d-f+(m-_)),t.copy(r).addScaledVector(mu,a);const p=1/(g+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(Ar,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=yc(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ia(o,s,e+1/3),this.g=Ia(o,s,e),this.b=Ia(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return $e.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Nt(Ct.r*255,0,255))*65536+Math.round(Nt(Ct.g*255,0,255))*256+Math.round(Nt(Ct.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=$t){$e.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ao);const i=Ds(Si.h,ao.h,t),r=Ds(Si.s,ao.s,t),s=Ds(Si.l,ao.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new we;we.NAMES=qf;let dp=0;class gr extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=as(),this.name="",this.blending=Wr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=hl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hi extends gr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,lo=new Qe;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class Yf extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kf extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class en extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hp=0;const sn=new ct,Pa=new vt,wr=new O,qt=new qs,_s=new qs,Et=new O;class dn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vf(e)?Kf:Yf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(qt.min,_s.min),qt.expandByPoint(Et),Et.addVectors(qt.max,_s.max),qt.expandByPoint(Et)):(qt.expandByPoint(_s.min),qt.expandByPoint(_s.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Et.fromBufferAttribute(a,c),l&&(wr.fromBufferAttribute(e,c),Et.add(wr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const c=new O,f=new O,d=new O,h=new Qe,m=new Qe,_=new Qe,v=new O,g=new O;function p(D,T,M){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,M),f.sub(c),d.sub(c),m.sub(h),_.sub(h);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(w),g.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(w),a[D].add(v),a[T].add(v),a[M].add(v),l[D].add(g),l[T].add(g),l[M].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,T=A.length;D<T;++D){const M=A[D],w=M.start,W=M.count;for(let H=w,$=w+W;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new O,y=new O,U=new O,C=new O;function R(D){U.fromBufferAttribute(r,D),C.copy(U);const T=a[D];E.copy(T),E.sub(U.multiplyScalar(U.dot(T))).normalize(),y.crossVectors(C,T);const w=y.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,w)}for(let D=0,T=A.length;D<T;++D){const M=A[D],w=M.start,W=M.count;for(let H=w,$=w+W;H<$;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let p=0;p<f;p++)h[_++]=c[m++]}return new yn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new ct,zi=new Tc,co=new Ys,_u=new O,uo=new O,fo=new O,ho=new O,La=new O,po=new O,vu=new O,mo=new O;class se extends vt{constructor(e=new dn,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(La.fromBufferAttribute(d,e),o?po.addScaledVector(La,f):po.addScaledVector(La.sub(t),f))}t.add(po)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(co.containsPoint(zi.origin)===!1&&(zi.intersectSphere(co,_u)===null||zi.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(s).invert(),zi.copy(e.ray).applyMatrix4(gu),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=o[g.materialIndex],A=Math.max(g.start,m.start),E=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=A,U=E;y<U;y+=3){const C=a.getX(y),R=a.getX(y+1),D=a.getX(y+2);r=go(this,p,e,i,c,f,d,C,R,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const A=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);r=go(this,o,e,i,c,f,d,A,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=o[g.materialIndex],A=Math.max(g.start,m.start),E=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=A,U=E;y<U;y+=3){const C=y,R=y+1,D=y+2;r=go(this,p,e,i,c,f,d,C,R,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const A=g,E=g+1,y=g+2;r=go(this,o,e,i,c,f,d,A,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function pp(n,e,t,i,r,s,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;mo.copy(a),mo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:n}}function go(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,uo),n.getVertexPosition(l,fo),n.getVertexPosition(c,ho);const f=pp(n,e,t,i,uo,fo,ho,vu);if(f){const d=new O;cn.getBarycoord(vu,uo,fo,ho,d),r&&(f.uv=cn.getInterpolatedAttribute(r,a,l,c,d,new Qe)),s&&(f.uv1=cn.getInterpolatedAttribute(s,a,l,c,d,new Qe)),o&&(f.normal=cn.getInterpolatedAttribute(o,a,l,c,d,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};cn.getNormal(uo,fo,ho,h.normal),f.face=h,f.barycoord=d}return f}class he extends dn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(d,2));function _(v,g,p,A,E,y,U,C,R,D,T){const M=y/R,w=U/D,W=y/2,H=U/2,$=C/2,j=R+1,q=D+1;let Z=0,k=0;const ie=new O;for(let de=0;de<q;de++){const ye=de*w-H;for(let Ge=0;Ge<j;Ge++){const nt=Ge*M-W;ie[v]=nt*A,ie[g]=ye*E,ie[p]=$,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[g]=0,ie[p]=C>0?1:-1,f.push(ie.x,ie.y,ie.z),d.push(Ge/R),d.push(1-de/D),Z+=1}}for(let de=0;de<D;de++)for(let ye=0;ye<R;ye++){const Ge=h+ye+j*de,nt=h+ye+j*(de+1),X=h+(ye+1)+j*(de+1),te=h+(ye+1)+j*de;l.push(Ge,nt,te),l.push(nt,X,te),k+=6}a.addGroup(m,k,T),m+=k,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new he(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=es(n[t]);for(const r in i)e[r]=i[r]}return e}function mp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $f(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const gp={clone:es,merge:Lt};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends gr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jf extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new O,xu=new Qe,Su=new Qe;class on extends jf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,xu,Su),t.subVectors(Su,xu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cr=-90,Ir=1;class xp extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Cr,Ir,e,t);r.layers=this.layers,this.add(r);const s=new on(Cr,Ir,e,t);s.layers=this.layers,this.add(s);const o=new on(Cr,Ir,e,t);o.layers=this.layers,this.add(o);const a=new on(Cr,Ir,e,t);a.layers=this.layers,this.add(a);const l=new on(Cr,Ir,e,t);l.layers=this.layers,this.add(l);const c=new on(Cr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zf extends Ut{constructor(e,t,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sp extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new he(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Li});s.uniforms.tEquirect.value=t;const o=new se(r,s),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=Bn),new xp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Na=new O,Mp=new O,Ep=new Ue;class ji{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Na.subVectors(i,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Na),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ep.getNormalMatrix(e),r=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Ys,_o=new O;class bc{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],v=r[10],g=r[11],p=r[12],A=r[13],E=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,g-m,y-p).normalize(),i[1].setComponents(l+s,h+c,g+m,y+p).normalize(),i[2].setComponents(l+o,h+f,g+_,y+A).normalize(),i[3].setComponents(l-o,h-f,g-_,y-A).normalize(),i[4].setComponents(l-a,h-d,g-v,y-E).normalize(),t===si)i[5].setComponents(l+a,h+d,g+v,y+E).normalize();else if(t===Vo)i[5].setComponents(a,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_o.x=r.normal.x>0?e.max.x:e.min.x,_o.y=r.normal.y>0?e.max.y:e.min.y,_o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yp(n){const e=new WeakMap;function t(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,f);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],v=d[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,d[h]=v)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const v=d[m];n.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ra extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=t/l,m=[],_=[],v=[],g=[];for(let p=0;p<f;p++){const A=p*h-o;for(let E=0;E<c;E++){const y=E*d-s;_.push(y,-A,0),v.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const E=A+c*p,y=A+c*(p+1),U=A+1+c*(p+1),C=A+1+c*p;m.push(E,y,C),m.push(y,U,C)}this.setIndex(m),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,Em=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,$0=`#define TOON
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
}`,j0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,tg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Tp,alphahash_pars_fragment:bp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:wp,alphatest_pars_fragment:Cp,aomap_fragment:Ip,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Np,begin_vertex:Op,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Fp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Vp,color_fragment:Wp,color_pars_fragment:zp,color_pars_vertex:Xp,color_vertex:qp,common:Yp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:$p,displacementmap_pars_vertex:jp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Qp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:rm,envmap_pars_vertex:sm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:um,gradientmap_pars_fragment:fm,lightmap_pars_fragment:dm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:vm,lights_phong_fragment:xm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Mm,lights_physical_pars_fragment:Em,lights_fragment_begin:ym,lights_fragment_maps:Tm,lights_fragment_end:bm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Cm,map_fragment:Im,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Um,morphcolor_vertex:Fm,morphnormal_vertex:Bm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Hm,normal_fragment_begin:km,normal_fragment_maps:Vm,normal_pars_fragment:Wm,normal_pars_vertex:zm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:$m,iridescence_pars_fragment:jm,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Qm,project_vertex:e0,dithering_fragment:t0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:o0,shadowmap_vertex:a0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:u0,skinning_vertex:f0,skinnormal_vertex:d0,specularmap_fragment:h0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:v0,uv_pars_fragment:x0,uv_pars_vertex:S0,uv_vertex:M0,worldpos_vertex:E0,background_vert:y0,background_frag:T0,backgroundCube_vert:b0,backgroundCube_frag:A0,cube_vert:R0,cube_frag:w0,depth_vert:C0,depth_frag:I0,distanceRGBA_vert:P0,distanceRGBA_frag:L0,equirect_vert:N0,equirect_frag:O0,linedashed_vert:D0,linedashed_frag:U0,meshbasic_vert:F0,meshbasic_frag:B0,meshlambert_vert:G0,meshlambert_frag:H0,meshmatcap_vert:k0,meshmatcap_frag:V0,meshnormal_vert:W0,meshnormal_frag:z0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:K0,meshtoon_vert:$0,meshtoon_frag:j0,points_vert:Z0,points_frag:J0,shadow_vert:Q0,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},re={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},In={basic:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Lt([re.common,re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Lt([re.lights,re.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};In.physical={uniforms:Lt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const vo={r:0,b:0,g:0},qi=new kn,ig=new ct;function rg(n,e,t,i,r,s,o){const a=new we(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const y=_(A);y===null?p(a,l):y&&y.isColor&&(p(y,1),E=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,E){const y=_(E);y&&(y.isCubeTexture||y.mapping===na)?(f===void 0&&(f=new se(new he(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:es(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),qi.copy(E.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(qi)),f.material.toneMapped=$e.getTransfer(y.colorSpace)!==tt,(d!==y||h!==y.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,d=y,h=y.version,m=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new se(new ra(2,2),new Bi({name:"BackgroundMaterial",uniforms:es(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,E){A.getRGB(vo,$f(n)),i.buffers.color.setClear(vo.r,vo.g,vo.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:v,addToRenderList:g}}function sg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,w,W,H,$){let j=!1;const q=d(H,W,w);s!==q&&(s=q,c(s.object)),j=m(M,H,W,$),j&&_(M,H,W,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(M,w,W,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function f(M){return n.deleteVertexArray(M)}function d(M,w,W){const H=W.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let j=$[w.id];j===void 0&&(j={},$[w.id]=j);let q=j[H];return q===void 0&&(q=h(l()),j[H]=q),q}function h(M){const w=[],W=[],H=[];for(let $=0;$<t;$++)w[$]=0,W[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,w,W,H){const $=s.attributes,j=w.attributes;let q=0;const Z=W.getAttributes();for(const k in Z)if(Z[k].location>=0){const de=$[k];let ye=j[k];if(ye===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),de===void 0||de.attribute!==ye||ye&&de.data!==ye.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function _(M,w,W,H){const $={},j=w.attributes;let q=0;const Z=W.getAttributes();for(const k in Z)if(Z[k].location>=0){let de=j[k];de===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const ye={};ye.attribute=de,de&&de.data&&(ye.data=de.data),$[k]=ye,q++}s.attributes=$,s.attributesNum=q,s.index=H}function v(){const M=s.newAttributes;for(let w=0,W=M.length;w<W;w++)M[w]=0}function g(M){p(M,0)}function p(M,w){const W=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;W[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),$[M]!==w&&(n.vertexAttribDivisor(M,w),$[M]=w)}function A(){const M=s.newAttributes,w=s.enabledAttributes;for(let W=0,H=w.length;W<H;W++)w[W]!==M[W]&&(n.disableVertexAttribArray(W),w[W]=0)}function E(M,w,W,H,$,j,q){q===!0?n.vertexAttribIPointer(M,w,W,$,j):n.vertexAttribPointer(M,w,W,H,$,j)}function y(M,w,W,H){v();const $=H.attributes,j=W.getAttributes(),q=w.defaultAttributeValues;for(const Z in j){const k=j[Z];if(k.location>=0){let ie=$[Z];if(ie===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const de=ie.normalized,ye=ie.itemSize,Ge=e.get(ie);if(Ge===void 0)continue;const nt=Ge.buffer,X=Ge.type,te=Ge.bytesPerElement,Se=X===n.INT||X===n.UNSIGNED_INT||ie.gpuType===_c;if(ie.isInterleavedBufferAttribute){const ae=ie.data,Ie=ae.stride,Ne=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<k.locationSize;He++)p(k.location+He,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<k.locationSize;He++)g(k.location+He);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let He=0;He<k.locationSize;He++)E(k.location+He,ye/k.locationSize,X,de,Ie*te,(Ne+ye/k.locationSize*He)*te,Se)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,ie.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<k.locationSize;ae++)g(k.location+ae);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ae=0;ae<k.locationSize;ae++)E(k.location+ae,ye/k.locationSize,X,de,ye*te,ye/k.locationSize*ae*te,Se)}}else if(q!==void 0){const de=q[Z];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(k.location,de);break;case 3:n.vertexAttrib3fv(k.location,de);break;case 4:n.vertexAttrib4fv(k.location,de);break;default:n.vertexAttrib1fv(k.location,de)}}}}A()}function U(){D();for(const M in i){const w=i[M];for(const W in w){const H=w[W];for(const $ in H)f(H[$].object),delete H[$];delete w[W]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const W in w){const H=w[W];for(const $ in H)f(H[$].object),delete H[$];delete w[W]}delete i[M.id]}function R(M){for(const w in i){const W=i[w];if(W[M.id]===void 0)continue;const H=W[M.id];for(const $ in H)f(H[$].object),delete H[$];delete W[M.id]}}function D(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:A}}function og(n,e,t){let i;function r(c){i=c}function s(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function o(c,f,d){d!==0&&(n.drawArraysInstanced(i,c,f,d),t.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=f[_];t.update(m,i,1)}function l(c,f,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let v=0;v<d;v++)_+=f[v]*h[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ag(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==En&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==di&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ri&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:C}}function lg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ji,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const A=s?0:i,E=A*4;let y=p.clippingState||null;l.value=y,y=f(_,h,E,m);for(let U=0;U!==E;++U)y[U]=t[U];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const p=m+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=m;E!==v;++E,y+=4)o.copy(d[E]).applyMatrix4(A,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function cg(n){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=jr:a===El&&(o.mapping=Zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qf extends jf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Mu=[.125,.215,.35,.446,.526,.582],Qi=20,Oa=new Qf,Eu=new we;let Da=null,Ua=0,Fa=0,Ba=!1;const Zi=(1+Math.sqrt(5))/2,Pr=1/Zi,yu=[new O(-Zi,Pr,0),new O(Zi,Pr,0),new O(-Pr,0,Zi),new O(Pr,0,Zi),new O(0,Zi,-Pr),new O(0,Zi,Pr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Da=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Ua,Fa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:zs,format:En,colorSpace:ss,depthBuffer:!1},r=bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(s)),this._blurMaterial=fg(s,e,t)}return r}_compileMaterial(e){const t=new se(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,r){const a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Eu),f.toneMapping=Ni,f.autoClear=!1;const m=new hi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),_=new se(new he,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(Eu),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;xo(r,A*E,p>2?E:0,E,E),f.setRenderTarget(r),v&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jr||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yu[(r-s-1)%yu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new se(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qi-1),v=s/_,g=isFinite(s)?1+Math.floor(f*v):Qi;g>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);const p=[];let A=0;for(let R=0;R<Qi;++R){const D=R/v,T=Math.exp(-D*D/2);p.push(T),R===0?A+=T:R<g&&(A+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const y=this._sizeLods[r],U=3*y*(r>E-Gr?r-E+Gr:0),C=4*(this._cubeSize-y);xo(t,U,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Oa)}}function ug(n){const e=[],t=[],i=[];let r=n;const s=n-Gr+1+Mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Gr?l=Mu[o-n+Gr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,v=3,g=2,p=1,A=new Float32Array(v*_*m),E=new Float32Array(g*_*m),y=new Float32Array(p*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,D=C>2?0:-1,T=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];A.set(T,v*_*C),E.set(h,g*_*C);const M=[C,C,C,C,C,C];y.set(M,p*_*C)}const U=new dn;U.setAttribute("position",new yn(A,v)),U.setAttribute("uv",new yn(E,g)),U.setAttribute("faceIndex",new yn(y,p)),e.push(U),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bu(n,e,t){const i=new fr(n,e,t);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fg(n,e,t){const i=new Float32Array(Qi),r=new O(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Au(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ru(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function dg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ml||l===El,f=l===jr||l===Zr;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Tu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new Tu(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pg(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const v=m[_];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let E=0,y=A.length;E<y;E+=3){const U=A[E+0],C=A[E+1],R=A[E+2];h.push(U,C,C,R,R,U)}}else if(_!==void 0){const A=_.array;v=_.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const U=E+0,C=E+1,R=E+2;h.push(U,C,C,R,R,U)}}else return;const g=new(Vf(h)?Kf:Yf)(h,1);g.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function mg(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*o,_),t.update(m,i,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,i,1)}function d(h,m,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/o,m[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,_);let p=0;for(let A=0;A<_;A++)p+=m[A]*v[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function gg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _g(n,e,t){const i=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let U=a.attributes.position.count*y,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*C*4*d),D=new zf(R,U,C,d);D.type=ri,D.needsUpdate=!0;const T=y*4;for(let w=0;w<d;w++){const W=p[w],H=A[w],$=E[w],j=U*C*4*w;for(let q=0;q<W.count;q++){const Z=q*T;_===!0&&(r.fromBufferAttribute(W,q),R[j+Z+0]=r.x,R[j+Z+1]=r.y,R[j+Z+2]=r.z,R[j+Z+3]=0),v===!0&&(r.fromBufferAttribute(H,q),R[j+Z+4]=r.x,R[j+Z+5]=r.y,R[j+Z+6]=r.z,R[j+Z+7]=0),g===!0&&(r.fromBufferAttribute($,q),R[j+Z+8]=r.x,R[j+Z+9]=r.y,R[j+Z+10]=r.z,R[j+Z+11]=$.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new Qe(U,C)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function vg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ed extends Ut{constructor(e,t,i,r,s,o,a,l,c,f=zr){if(f!==zr&&f!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===zr&&(i=ur),i===void 0&&f===Qr&&(i=Jr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const td=new Ut,wu=new ed(1,1),nd=new zf,id=new rp,rd=new Zf,Cu=[],Iu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Nu=new Float32Array(4);function ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cu[r];if(s===void 0&&(s=new Float32Array(r),Cu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sa(n,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),Mt(t,i)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),Mt(t,i)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),Mt(t,i)}}function Ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Og(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wu.compareFunction=kf,s=wu):s=td,t.setTexture2D(e||s,r)}function Dg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||id,r)}function Ug(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rd,r)}function Fg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nd,r)}function Bg(n){switch(n){case 5126:return xg;case 35664:return Sg;case 35665:return Mg;case 35666:return Eg;case 35674:return yg;case 35675:return Tg;case 35676:return bg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return wg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}function Gg(n,e){n.uniform1fv(this.addr,e)}function Hg(n,e){const t=ls(e,this.size,2);n.uniform2fv(this.addr,t)}function kg(n,e){const t=ls(e,this.size,3);n.uniform3fv(this.addr,t)}function Vg(n,e){const t=ls(e,this.size,4);n.uniform4fv(this.addr,t)}function Wg(n,e){const t=ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zg(n,e){const t=ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xg(n,e){const t=ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qg(n,e){n.uniform1iv(this.addr,e)}function Yg(n,e){n.uniform2iv(this.addr,e)}function Kg(n,e){n.uniform3iv(this.addr,e)}function $g(n,e){n.uniform4iv(this.addr,e)}function jg(n,e){n.uniform1uiv(this.addr,e)}function Zg(n,e){n.uniform2uiv(this.addr,e)}function Jg(n,e){n.uniform3uiv(this.addr,e)}function Qg(n,e){n.uniform4uiv(this.addr,e)}function e_(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||td,s[o])}function t_(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||id,s[o])}function n_(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rd,s[o])}function i_(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nd,s[o])}function r_(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return kg;case 35666:return Vg;case 35674:return Wg;case 35675:return zg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Kg;case 35669:case 35673:return $g;case 5125:return jg;case 36294:return Zg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class s_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}}class o_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Ou(n,e){n.seq.push(e),n.map[e.id]=e}function l_(n,e,t){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),o=Ga.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ou(t,c===void 0?new s_(a,n,e):new o_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new a_(a),Ou(t,d)),t=d}}}class Bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);l_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const c_=37297;let u_=0;function f_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Uu=new Ue;function d_(n){$e._getMatrix(Uu,$e.workingColorSpace,n);const e=`mat3( ${Uu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case ia:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+f_(n.getShaderSource(e),o)}else return r}function h_(n,e){const t=d_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function p_(n,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case _h:t="Cineon";break;case vh:t="ACESFilmic";break;case Sh:t="AgX";break;case Mh:t="Neutral";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const So=new O;function m_(){$e.getLuminanceCoefficients(So);const n=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function __(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function v_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ts(n){return n!==""}function Bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(x_,M_)}const S_=new Map;function M_(n,e){let t=Be[e];if(t===void 0){const i=S_.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(n){return n.replace(E_,y_)}function y_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ku(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function b_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Zr:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function R_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gc:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case ph:e="ENVMAP_BLENDING_ADD";break}return e}function w_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function C_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=T_(t),c=b_(t),f=A_(t),d=R_(t),h=w_(t),m=g_(t),_=__(s),v=r.createProgram();let g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ts).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(g=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ni?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,h_("linearToOutputTexel",t.outputColorSpace),m_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Zl(o),o=Bu(o,t),o=Gu(o,t),a=Zl(a),a=Bu(a,t),a=Gu(a,t),o=Hu(o),a=Hu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=A+g+o,y=A+p+a,U=Du(r,r.VERTEX_SHADER,E),C=Du(r,r.FRAGMENT_SHADER,y);r.attachShader(v,U),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(w){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(U).trim(),$=r.getShaderInfoLog(C).trim();let j=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,U,C);else{const Z=Fu(r,U,"vertex"),k=Fu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+Z+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||$==="")&&(q=!1);q&&(w.diagnostics={runnable:j,programLog:W,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:p}})}r.deleteShader(U),r.deleteShader(C),D=new Bo(r,v),T=v_(r,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,c_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=C,this}let I_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L_(e),t.set(e,i)),i}}class L_{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}}function N_(n,e,t,i,r,s,o){const a=new Xf,l=new P_,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,w,W,H){const $=W.fog,j=H.geometry,q=T.isMeshStandardMaterial?W.environment:null,Z=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),k=Z&&Z.mapping===na?Z.image.height:null,ie=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=de!==void 0?de.length:0;let Ge=0;j.morphAttributes.position!==void 0&&(Ge=1),j.morphAttributes.normal!==void 0&&(Ge=2),j.morphAttributes.color!==void 0&&(Ge=3);let nt,X,te,Se;if(ie){const et=In[ie];nt=et.vertexShader,X=et.fragmentShader}else nt=T.vertexShader,X=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),Se=l.getFragmentShaderID(T);const ae=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Ne=H.isInstancedMesh===!0,He=H.isBatchedMesh===!0,ut=!!T.map,Ye=!!T.matcap,mt=!!Z,N=!!T.aoMap,nn=!!T.lightMap,ze=!!T.bumpMap,Xe=!!T.normalMap,Re=!!T.displacementMap,ot=!!T.emissiveMap,Ae=!!T.metalnessMap,b=!!T.roughnessMap,x=T.anisotropy>0,F=T.clearcoat>0,Y=T.dispersion>0,J=T.iridescence>0,z=T.sheen>0,Me=T.transmission>0,le=x&&!!T.anisotropyMap,pe=F&&!!T.clearcoatMap,Ke=F&&!!T.clearcoatNormalMap,Q=F&&!!T.clearcoatRoughnessMap,me=J&&!!T.iridescenceMap,Ce=J&&!!T.iridescenceThicknessMap,Pe=z&&!!T.sheenColorMap,ge=z&&!!T.sheenRoughnessMap,qe=!!T.specularMap,Fe=!!T.specularColorMap,rt=!!T.specularIntensityMap,I=Me&&!!T.transmissionMap,oe=Me&&!!T.thicknessMap,V=!!T.gradientMap,K=!!T.alphaMap,fe=T.alphaTest>0,ce=!!T.alphaHash,Oe=!!T.extensions;let dt=Ni;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(dt=n.toneMapping);const Rt={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:nt,fragmentShader:X,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:He,batchingColor:He&&H._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&H.instanceColor!==null,instancingMorph:Ne&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ss,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:Ye,envMap:mt,envMapMode:mt&&Z.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:nn,bumpMap:ze,normalMap:Xe,displacementMap:h&&Re,emissiveMap:ot,normalMapObjectSpace:Xe&&T.normalMapType===bh,normalMapTangentSpace:Xe&&T.normalMapType===Hf,metalnessMap:Ae,roughnessMap:b,anisotropy:x,anisotropyMap:le,clearcoat:F,clearcoatMap:pe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:Ce,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:qe,specularColorMap:Fe,specularIntensityMap:rt,transmission:Me,transmissionMap:I,thicknessMap:oe,gradientMap:V,opaque:T.transparent===!1&&T.blending===Wr&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:fe,alphaHash:ce,combine:T.combine,mapUv:ut&&v(T.map.channel),aoMapUv:N&&v(T.aoMap.channel),lightMapUv:nn&&v(T.lightMap.channel),bumpMapUv:ze&&v(T.bumpMap.channel),normalMapUv:Xe&&v(T.normalMap.channel),displacementMapUv:Re&&v(T.displacementMap.channel),emissiveMapUv:ot&&v(T.emissiveMap.channel),metalnessMapUv:Ae&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:le&&v(T.anisotropyMap.channel),clearcoatMapUv:pe&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(T.sheenRoughnessMap.channel),specularMapUv:qe&&v(T.specularMap.channel),specularColorMapUv:Fe&&v(T.specularColorMap.channel),specularIntensityMapUv:rt&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:oe&&v(T.thicknessMap.channel),alphaMapUv:K&&v(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Xe||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(ut||K),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&$e.getTransfer(T.map.colorSpace)===tt,decodeVideoTextureEmissive:ot&&T.emissiveMap.isVideoTexture===!0&&$e.getTransfer(T.emissiveMap.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Dn,flipSided:T.side===Vt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)M.push(w),M.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(A(M,T),E(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function A(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=_[T.type];let w;if(M){const W=In[M];w=gp.clone(W.uniforms)}else w=T.uniforms;return w}function U(T,M){let w;for(let W=0,H=f.length;W<H;W++){const $=f[W];if($.cacheKey===M){w=$,++w.usedTimes;break}}return w===void 0&&(w=new C_(n,M,T,s),f.push(w)),w}function C(T){if(--T.usedTimes===0){const M=f.indexOf(T);f[M]=f[f.length-1],f.pop(),T.destroy()}}function R(T){l.remove(T)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:f,dispose:D}}function O_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function D_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,_,v,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function a(d,h,m,_,v,g){const p=o(d,h,m,_,v,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,h,m,_,v,g){const p=o(d,h,m,_,v,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||D_),i.length>1&&i.sort(h||Vu),r.length>1&&r.sort(h||Vu)}function f(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function U_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Wu,n.set(i,[o])):r>=s.length?(o=new Wu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function F_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new we};break;case"SpotLight":t={position:new O,direction:new O,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function B_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G_=0;function H_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k_(n){const e=new F_,t=B_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new ct,o=new ct;function a(c){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,A=0,E=0,y=0,U=0,C=0,R=0;c.sort(H_);for(let T=0,M=c.length;T<M;T++){const w=c[T],W=w.color,H=w.intensity,$=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=W.r*H,d+=W.g*H,h+=W.b*H;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],H);R++}else if(w.isDirectionalLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,k=t.get(w);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=w.shadow.matrix,A++}i.directional[m]=q,m++}else if(w.isSpotLight){const q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(W).multiplyScalar(H),q.distance=$,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[v]=q;const Z=w.shadow;if(w.map&&(i.spotLightMap[U]=w.map,U++,Z.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[v]=Z.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=j,y++}v++}else if(w.isRectAreaLight){const q=e.get(w);q.color.copy(W).multiplyScalar(H),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=q,g++}else if(w.isPointLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const Z=w.shadow,k=t.get(w);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=w.shadow.matrix,E++}i.point[_]=q,_++}else if(w.isHemisphereLight){const q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(H),q.groundColor.copy(w.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==U||D.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=m,D.pointLength=_,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=U,D.numLightProbes=R,i.version=G_++)}function l(c,f){let d=0,h=0,m=0,_=0,v=0;const g=f.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(E.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(E.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function zu(n){const e=new k_(n),t=[],i=[];function r(f){c.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function V_(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zu(n),e.set(r,[a])):s>=o.length?(a=new zu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class W_ extends gr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z_ extends gr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`;function Y_(n,e,t){let i=new bc;const r=new Qe,s=new Qe,o=new ht,a=new W_({depthPacking:Th}),l=new z_,c={},f=t.maxTextureSize,d={[Fi]:Vt,[Vt]:Fi,[Dn]:Dn},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new se(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let p=this.type;this.render=function(C,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Li),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=p!==jn&&this.type===jn,$=p===jn&&this.type!==jn;for(let j=0,q=C.length;j<q;j++){const Z=C[j],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ie=k.getFrameExtents();if(r.multiply(ie),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ie.x),r.x=s.x*ie.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ie.y),r.y=s.y*ie.y,k.mapSize.y=s.y)),k.map===null||H===!0||$===!0){const ye=this.type!==jn?{minFilter:Qt,magFilter:Qt}:{};k.map!==null&&k.map.dispose(),k.map=new fr(r.x,r.y,ye),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const de=k.getViewportCount();for(let ye=0;ye<de;ye++){const Ge=k.getViewport(ye);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),W.viewport(o),k.updateMatrices(Z,ye),i=k.getFrustum(),y(R,D,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===jn&&A(k,D),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,M,w)};function A(C,R){const D=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,h,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,m,v,null)}function E(C,R,D,T){let M=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,H=R.uuid;let $=c[W];$===void 0&&($={},c[W]=$);let j=$[H];j===void 0&&(j=M.clone(),$[H]=j,R.addEventListener("dispose",U)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,T===jn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=D}return M}function y(C,R,D,T,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===jn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=e.update(C),$=C.material;if(Array.isArray($)){const j=H.groups;for(let q=0,Z=j.length;q<Z;q++){const k=j[q],ie=$[k.materialIndex];if(ie&&ie.visible){const de=E(C,ie,T,M);C.onBeforeShadow(n,C,R,D,H,de,k),n.renderBufferDirect(D,null,H,de,C,k),C.onAfterShadow(n,C,R,D,H,de,k)}}}else if($.visible){const j=E(C,$,T,M);C.onBeforeShadow(n,C,R,D,H,j,null),n.renderBufferDirect(D,null,H,j,C,null),C.onAfterShadow(n,C,R,D,H,j,null)}}const W=C.children;for(let H=0,$=W.length;H<$;H++)y(W[H],R,D,T,M)}function U(C){C.target.removeEventListener("dispose",U);for(const D in c){const T=c[D],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const K_={[pl]:ml,[gl]:xl,[_l]:Sl,[$r]:vl,[ml]:pl,[xl]:gl,[Sl]:_l,[vl]:$r};function $_(n,e){function t(){let I=!1;const oe=new ht;let V=null;const K=new ht(0,0,0,0);return{setMask:function(fe){V!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),V=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ce,Oe,dt,Rt){Rt===!0&&(fe*=dt,ce*=dt,Oe*=dt),oe.set(fe,ce,Oe,dt),K.equals(oe)===!1&&(n.clearColor(fe,ce,Oe,dt),K.copy(oe))},reset:function(){I=!1,V=null,K.set(-1,0,0,0)}}}function i(){let I=!1,oe=!1,V=null,K=null,fe=null;return{setReversed:function(ce){if(oe!==ce){const Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const dt=fe;fe=null,this.setClear(dt)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?ae(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!I&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(oe&&(ce=K_[ce]),K!==ce){switch(ce){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case $r:n.depthFunc(n.LEQUAL);break;case _l:n.depthFunc(n.EQUAL);break;case vl:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ce}},setLocked:function(ce){I=ce},setClear:function(ce){fe!==ce&&(oe&&(ce=1-ce),n.clearDepth(ce),fe=ce)},reset:function(){I=!1,V=null,K=null,fe=null,oe=!1}}}function r(){let I=!1,oe=null,V=null,K=null,fe=null,ce=null,Oe=null,dt=null,Rt=null;return{setTest:function(et){I||(et?ae(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(et){oe!==et&&!I&&(n.stencilMask(et),oe=et)},setFunc:function(et,hn,Vn){(V!==et||K!==hn||fe!==Vn)&&(n.stencilFunc(et,hn,Vn),V=et,K=hn,fe=Vn)},setOp:function(et,hn,Vn){(ce!==et||Oe!==hn||dt!==Vn)&&(n.stencilOp(et,hn,Vn),ce=et,Oe=hn,dt=Vn)},setLocked:function(et){I=et},setClear:function(et){Rt!==et&&(n.clearStencil(et),Rt=et)},reset:function(){I=!1,oe=null,V=null,K=null,fe=null,ce=null,Oe=null,dt=null,Rt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,m=[],_=null,v=!1,g=null,p=null,A=null,E=null,y=null,U=null,C=null,R=new we(0,0,0),D=0,T=!1,M=null,w=null,W=null,H=null,$=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=Z>=2);let ie=null,de={};const ye=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),nt=new ht().fromArray(ye),X=new ht().fromArray(Ge);function te(I,oe,V,K){const fe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(I,ce),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<V;Oe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(oe+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ce}const Se={};Se[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc($r),ze(!1),Xe(Yc),ae(n.CULL_FACE),N(Li);function ae(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function Ie(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Ne(I,oe){return d[I]!==oe?(n.bindFramebuffer(I,oe),d[I]=oe,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function He(I,oe){let V=m,K=!1;if(I){V=h.get(oe),V===void 0&&(V=[],h.set(oe,V));const fe=I.textures;if(V.length!==fe.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Oe=fe.length;ce<Oe;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=fe.length,K=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,K=!0);K&&n.drawBuffers(V)}function ut(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Ye={[Ji]:n.FUNC_ADD,[jd]:n.FUNC_SUBTRACT,[Zd]:n.FUNC_REVERSE_SUBTRACT};Ye[Jd]=n.MIN,Ye[Qd]=n.MAX;const mt={[eh]:n.ZERO,[th]:n.ONE,[nh]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[lh]:n.SRC_ALPHA_SATURATE,[oh]:n.DST_COLOR,[rh]:n.DST_ALPHA,[ih]:n.ONE_MINUS_SRC_COLOR,[hl]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[sh]:n.ONE_MINUS_DST_ALPHA,[ch]:n.CONSTANT_COLOR,[uh]:n.ONE_MINUS_CONSTANT_COLOR,[fh]:n.CONSTANT_ALPHA,[dh]:n.ONE_MINUS_CONSTANT_ALPHA};function N(I,oe,V,K,fe,ce,Oe,dt,Rt,et){if(I===Li){v===!0&&(Ie(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),I!==$d){if(I!==g||et!==T){if((p!==Ji||y!==Ji)&&(n.blendEquation(n.FUNC_ADD),p=Ji,y=Ji),et)switch(I){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,E=null,U=null,C=null,R.set(0,0,0),D=0,g=I,T=et}return}fe=fe||oe,ce=ce||V,Oe=Oe||K,(oe!==p||fe!==y)&&(n.blendEquationSeparate(Ye[oe],Ye[fe]),p=oe,y=fe),(V!==A||K!==E||ce!==U||Oe!==C)&&(n.blendFuncSeparate(mt[V],mt[K],mt[ce],mt[Oe]),A=V,E=K,U=ce,C=Oe),(dt.equals(R)===!1||Rt!==D)&&(n.blendColor(dt.r,dt.g,dt.b,Rt),R.copy(dt),D=Rt),g=I,T=!1}function nn(I,oe){I.side===Dn?Ie(n.CULL_FACE):ae(n.CULL_FACE);let V=I.side===Vt;oe&&(V=!V),ze(V),I.blending===Wr&&I.transparent===!1?N(Li):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Xe(I){I!==qd?(ae(n.CULL_FACE),I!==w&&(I===Yc?n.cullFace(n.BACK):I===Yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),w=I}function Re(I){I!==W&&(q&&n.lineWidth(I),W=I)}function ot(I,oe,V){I?(ae(n.POLYGON_OFFSET_FILL),(H!==oe||$!==V)&&(n.polygonOffset(oe,V),H=oe,$=V)):Ie(n.POLYGON_OFFSET_FILL)}function Ae(I){I?ae(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function b(I){I===void 0&&(I=n.TEXTURE0+j-1),ie!==I&&(n.activeTexture(I),ie=I)}function x(I,oe,V){V===void 0&&(ie===null?V=n.TEXTURE0+j-1:V=ie);let K=de[V];K===void 0&&(K={type:void 0,texture:void 0},de[V]=K),(K.type!==I||K.texture!==oe)&&(ie!==V&&(n.activeTexture(V),ie=V),n.bindTexture(I,oe||Se[I]),K.type=I,K.texture=oe)}function F(){const I=de[ie];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){nt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),nt.copy(I))}function ge(I){X.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function qe(I,oe){let V=c.get(oe);V===void 0&&(V=new WeakMap,c.set(oe,V));let K=V.get(I);K===void 0&&(K=n.getUniformBlockIndex(oe,I.name),V.set(I,K))}function Fe(I,oe){const K=c.get(oe).get(I);l.get(oe)!==K&&(n.uniformBlockBinding(oe,K,I.__bindingPointIndex),l.set(oe,K))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ie=null,de={},d={},h=new WeakMap,m=[],_=null,v=!1,g=null,p=null,A=null,E=null,y=null,U=null,C=null,R=new we(0,0,0),D=0,T=!1,M=null,w=null,W=null,H=null,$=null,nt.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ie,bindFramebuffer:Ne,drawBuffers:He,useProgram:ut,setBlending:N,setMaterial:nn,setFlipSided:ze,setCullFace:Xe,setLineWidth:Re,setPolygonOffset:ot,setScissorTest:Ae,activeTexture:b,bindTexture:x,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:me,texImage3D:Ce,updateUBOMapping:qe,uniformBlockBinding:Fe,texStorage2D:Ke,texStorage3D:Q,texSubImage2D:z,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Pe,viewport:ge,reset:rt}}function Xu(n,e,t,i){const r=j_(i);switch(t){case Nf:return n*e;case Df:return n*e;case Uf:return n*e*2;case Ff:return n*e/r.components*r.byteLength;case Sc:return n*e/r.components*r.byteLength;case Bf:return n*e*2/r.components*r.byteLength;case Mc:return n*e*2/r.components*r.byteLength;case Of:return n*e*3/r.components*r.byteLength;case En:return n*e*4/r.components*r.byteLength;case Ec:return n*e*4/r.components*r.byteLength;case No:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Do:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:case wl:return Math.max(n,16)*Math.max(e,8)/4;case bl:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Cl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fo:case ql:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gf:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $l:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j_(n){switch(n){case di:case If:return{byteLength:1,components:1};case Hs:case Pf:case zs:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case ur:case _c:case ri:return{byteLength:4,components:1};case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Z_(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return m?new OffscreenCanvas(b,x):Wo("canvas")}function v(b,x,F){let Y=1;const J=Ae(b);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const z=Math.floor(Y*J.width),Me=Math.floor(Y*J.height);d===void 0&&(d=_(z,Me));const le=x?_(z,Me):d;return le.width=z,le.height=Me,le.getContext("2d").drawImage(b,0,0,z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+z+"x"+Me+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,x,F,Y,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let z=x;if(x===n.RED&&(F===n.FLOAT&&(z=n.R32F),F===n.HALF_FLOAT&&(z=n.R16F),F===n.UNSIGNED_BYTE&&(z=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.R8UI),F===n.UNSIGNED_SHORT&&(z=n.R16UI),F===n.UNSIGNED_INT&&(z=n.R32UI),F===n.BYTE&&(z=n.R8I),F===n.SHORT&&(z=n.R16I),F===n.INT&&(z=n.R32I)),x===n.RG&&(F===n.FLOAT&&(z=n.RG32F),F===n.HALF_FLOAT&&(z=n.RG16F),F===n.UNSIGNED_BYTE&&(z=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RG8UI),F===n.UNSIGNED_SHORT&&(z=n.RG16UI),F===n.UNSIGNED_INT&&(z=n.RG32UI),F===n.BYTE&&(z=n.RG8I),F===n.SHORT&&(z=n.RG16I),F===n.INT&&(z=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(z=n.RGB16UI),F===n.UNSIGNED_INT&&(z=n.RGB32UI),F===n.BYTE&&(z=n.RGB8I),F===n.SHORT&&(z=n.RGB16I),F===n.INT&&(z=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),F===n.UNSIGNED_INT&&(z=n.RGBA32UI),F===n.BYTE&&(z=n.RGBA8I),F===n.SHORT&&(z=n.RGBA16I),F===n.INT&&(z=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),x===n.RGBA){const Me=J?ia:$e.getTransfer(Y);F===n.FLOAT&&(z=n.RGBA32F),F===n.HALF_FLOAT&&(z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(z=Me===tt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function y(b,x){let F;return b?x===null||x===ur||x===Jr?F=n.DEPTH24_STENCIL8:x===ri?F=n.DEPTH32F_STENCIL8:x===Hs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ur||x===Jr?F=n.DEPTH_COMPONENT24:x===ri?F=n.DEPTH_COMPONENT32F:x===Hs&&(F=n.DEPTH_COMPONENT16),F}function U(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==Bn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){const x=b.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&f.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),M(x)}function D(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,Y=h.get(F);if(Y){const J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(b),Object.keys(Y).length===0&&h.delete(F)}i.remove(b)}function T(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,Y=h.get(F);delete Y[x.__cacheKey],o.memory.textures--}function M(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let Y=0,J=F.length;Y<J;Y++){const z=i.get(F[Y]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(b)}let w=0;function W(){w=0}function H(){const b=w;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function $(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function j(b,x){const F=i.get(b);if(b.isVideoTexture&&Re(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,b,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function q(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){X(F,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Z(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){X(F,b,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function k(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){te(F,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const ie={[yl]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[Tl]:n.MIRRORED_REPEAT},de={[Qt]:n.NEAREST,[Eh]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[ha]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},ye={[Ah]:n.NEVER,[Lh]:n.ALWAYS,[Rh]:n.LESS,[kf]:n.LEQUAL,[wh]:n.EQUAL,[Ph]:n.GEQUAL,[Ch]:n.GREATER,[Ih]:n.NOTEQUAL};function Ge(b,x){if(x.type===ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Bn||x.magFilter===ha||x.magFilter===Qs||x.magFilter===sr||x.minFilter===Bn||x.minFilter===ha||x.minFilter===Qs||x.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ie[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ie[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ie[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qt||x.minFilter!==Qs&&x.minFilter!==sr||x.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const Y=x.source;let J=h.get(Y);J===void 0&&(J={},h.set(Y,J));const z=$(x);if(z!==b.__cacheKey){J[z]===void 0&&(J[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[z].usedTimes++;const Me=J[b.__cacheKey];Me!==void 0&&(J[b.__cacheKey].usedTimes--,Me.usedTimes===0&&T(x)),b.__cacheKey=z,b.__webglTexture=J[z].texture}return F}function X(b,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const J=nt(b,x),z=x.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+F);const Me=i.get(z);if(z.version!==Me.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const le=$e.getPrimaries($e.workingColorSpace),pe=x.colorSpace===wi?null:$e.getPrimaries(x.colorSpace),Ke=x.colorSpace===wi||le===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Q=v(x.image,!1,r.maxTextureSize);Q=ot(x,Q);const me=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type);let Pe=E(x.internalFormat,me,Ce,x.colorSpace,x.isVideoTexture);Ge(Y,x);let ge;const qe=x.mipmaps,Fe=x.isVideoTexture!==!0,rt=Me.__version===void 0||J===!0,I=z.dataReady,oe=U(x,Q);if(x.isDepthTexture)Pe=y(x.format===Qr,x.type),rt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Pe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Pe,Q.width,Q.height,0,me,Ce,null));else if(x.isDataTexture)if(qe.length>0){Fe&&rt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,qe[0].width,qe[0].height);for(let V=0,K=qe.length;V<K;V++)ge=qe[V],Fe?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ce,ge.data):t.texImage2D(n.TEXTURE_2D,V,Pe,ge.width,ge.height,0,me,Ce,ge.data);x.generateMipmaps=!1}else Fe?(rt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,Q.width,Q.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,me,Ce,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,Q.width,Q.height,0,me,Ce,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,qe[0].width,qe[0].height,Q.depth);for(let V=0,K=qe.length;V<K;V++)if(ge=qe[V],x.format!==En)if(me!==null)if(Fe){if(I)if(x.layerUpdates.size>0){const fe=Xu(ge.width,ge.height,x.format,x.type);for(const ce of x.layerUpdates){const Oe=ge.data.subarray(ce*fe/ge.data.BYTES_PER_ELEMENT,(ce+1)*fe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,ge.width,ge.height,1,me,Oe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,Q.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Pe,ge.width,ge.height,Q.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,Q.depth,me,Ce,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Pe,ge.width,ge.height,Q.depth,0,me,Ce,ge.data)}else{Fe&&rt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,qe[0].width,qe[0].height);for(let V=0,K=qe.length;V<K;V++)ge=qe[V],x.format!==En?me!==null?Fe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ce,ge.data):t.texImage2D(n.TEXTURE_2D,V,Pe,ge.width,ge.height,0,me,Ce,ge.data)}else if(x.isDataArrayTexture)if(Fe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,Q.width,Q.height,Q.depth),I)if(x.layerUpdates.size>0){const V=Xu(Q.width,Q.height,x.format,x.type);for(const K of x.layerUpdates){const fe=Q.data.subarray(K*V/Q.data.BYTES_PER_ELEMENT,(K+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,me,Ce,fe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Ce,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,Q.width,Q.height,Q.depth,0,me,Ce,Q.data);else if(x.isData3DTexture)Fe?(rt&&t.texStorage3D(n.TEXTURE_3D,oe,Pe,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Ce,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,Q.width,Q.height,Q.depth,0,me,Ce,Q.data);else if(x.isFramebufferTexture){if(rt)if(Fe)t.texStorage2D(n.TEXTURE_2D,oe,Pe,Q.width,Q.height);else{let V=Q.width,K=Q.height;for(let fe=0;fe<oe;fe++)t.texImage2D(n.TEXTURE_2D,fe,Pe,V,K,0,me,Ce,null),V>>=1,K>>=1}}else if(qe.length>0){if(Fe&&rt){const V=Ae(qe[0]);t.texStorage2D(n.TEXTURE_2D,oe,Pe,V.width,V.height)}for(let V=0,K=qe.length;V<K;V++)ge=qe[V],Fe?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me,Ce,ge):t.texImage2D(n.TEXTURE_2D,V,Pe,me,Ce,ge);x.generateMipmaps=!1}else if(Fe){if(rt){const V=Ae(Q);t.texStorage2D(n.TEXTURE_2D,oe,Pe,V.width,V.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ce,Q)}else t.texImage2D(n.TEXTURE_2D,0,Pe,me,Ce,Q);g(x)&&p(Y),Me.__version=z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function te(b,x,F){if(x.image.length!==6)return;const Y=nt(b,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const z=i.get(J);if(J.version!==z.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const Me=$e.getPrimaries($e.workingColorSpace),le=x.colorSpace===wi?null:$e.getPrimaries(x.colorSpace),pe=x.colorSpace===wi||Me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ke=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!Ke&&!Q?me[K]=v(x.image[K],!0,r.maxCubemapSize):me[K]=Q?x.image[K].image:x.image[K],me[K]=ot(x,me[K]);const Ce=me[0],Pe=s.convert(x.format,x.colorSpace),ge=s.convert(x.type),qe=E(x.internalFormat,Pe,ge,x.colorSpace),Fe=x.isVideoTexture!==!0,rt=z.__version===void 0||Y===!0,I=J.dataReady;let oe=U(x,Ce);Ge(n.TEXTURE_CUBE_MAP,x);let V;if(Ke){Fe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,qe,Ce.width,Ce.height);for(let K=0;K<6;K++){V=me[K].mipmaps;for(let fe=0;fe<V.length;fe++){const ce=V[fe];x.format!==En?Pe!==null?Fe?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,ce.width,ce.height,Pe,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,qe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,ce.width,ce.height,Pe,ge,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,qe,ce.width,ce.height,0,Pe,ge,ce.data)}}}else{if(V=x.mipmaps,Fe&&rt){V.length>0&&oe++;const K=Ae(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,qe,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,Pe,ge,me[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,me[K].width,me[K].height,0,Pe,ge,me[K].data);for(let fe=0;fe<V.length;fe++){const Oe=V[fe].image[K].image;Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,Oe.width,Oe.height,Pe,ge,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,qe,Oe.width,Oe.height,0,Pe,ge,Oe.data)}}else{Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,ge,me[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,Pe,ge,me[K]);for(let fe=0;fe<V.length;fe++){const ce=V[fe];Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,Pe,ge,ce.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,qe,Pe,ge,ce.image[K])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),z.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Se(b,x,F,Y,J,z){const Me=s.convert(F.format,F.colorSpace),le=s.convert(F.type),pe=E(F.internalFormat,Me,le,F.colorSpace),Ke=i.get(x),Q=i.get(F);if(Q.__renderTarget=x,!Ke.__hasExternalTextures){const me=Math.max(1,x.width>>z),Ce=Math.max(1,x.height>>z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,z,pe,me,Ce,x.depth,0,Me,le,null):t.texImage2D(J,z,pe,me,Ce,0,Me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,Q.__webglTexture,0,ze(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,Q.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,z=y(x.stencilBuffer,J),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=ze(x);Xe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,z,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,b)}else{const Y=x.textures;for(let J=0;J<Y.length;J++){const z=Y[J],Me=s.convert(z.format,z.colorSpace),le=s.convert(z.type),pe=E(z.internalFormat,Me,le,z.colorSpace),Ke=ze(x);F&&Xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,pe,x.width,x.height):Xe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const J=Y.__webglTexture,z=ze(x);if(x.depthTexture.format===zr)Xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===Qr)Xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ne(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[Y],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(b,x,F){const Y=i.get(b);x!==void 0&&Se(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ne(b)}function ut(b){const x=b.texture,F=i.get(b),Y=i.get(x);b.addEventListener("dispose",R);const J=b.textures,z=b.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),z){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let pe=0;pe<x.mipmaps.length;pe++)F.__webglFramebuffer[le][pe]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Me)for(let le=0,pe=J.length;le<pe;le++){const Ke=i.get(J[le]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const pe=J[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Ke=s.convert(pe.format,pe.colorSpace),Q=s.convert(pe.type),me=E(pe.internalFormat,Ke,Q,pe.colorSpace,b.isXRRenderTarget===!0),Ce=ze(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Se(F.__webglFramebuffer[le][pe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else Se(F.__webglFramebuffer[le],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,pe=J.length;le<pe;le++){const Ke=J[le],Q=i.get(Ke);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ge(n.TEXTURE_2D,Ke),Se(F.__webglFramebuffer,b,Ke,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),g(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Ge(le,x),x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Se(F.__webglFramebuffer[pe],b,x,n.COLOR_ATTACHMENT0,le,pe);else Se(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,le,0);g(x)&&p(le),t.unbindTexture()}b.depthBuffer&&Ne(b)}function Ye(b){const x=b.textures;for(let F=0,Y=x.length;F<Y;F++){const J=x[F];if(g(J)){const z=A(b),Me=i.get(J).__webglTexture;t.bindTexture(z,Me),p(z),t.unbindTexture()}}}const mt=[],N=[];function nn(b){if(b.samples>0){if(Xe(b)===!1){const x=b.textures,F=b.width,Y=b.height;let J=n.COLOR_BUFFER_BIT;const z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(b),le=x.length>1;if(le)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const Ke=i.get(x[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,n.NEAREST),l===!0&&(mt.length=0,N.length=0,mt.push(n.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(mt.push(z),N.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const Ke=i.get(x[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ze(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Re(b){const x=o.render.frame;f.get(b)!==x&&(f.set(b,x),b.update())}function ot(b,x){const F=b.colorSpace,Y=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==ss&&F!==wi&&($e.getTransfer(F)===tt?(Y!==En||J!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=He,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xe}function J_(n,e){function t(i,r=wi){let s;const o=$e.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===If)return n.BYTE;if(i===Pf)return n.SHORT;if(i===Hs)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===zs)return n.HALF_FLOAT;if(i===Nf)return n.ALPHA;if(i===Of)return n.RGB;if(i===En)return n.RGBA;if(i===Df)return n.LUMINANCE;if(i===Uf)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Ff)return n.RED;if(i===Sc)return n.RED_INTEGER;if(i===Bf)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===Ec)return n.RGBA_INTEGER;if(i===No||i===Oo||i===Do||i===Uo)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===Al||i===Rl||i===wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Il||i===Pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cl||i===Il)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ll||i===Nl||i===Ol||i===Dl||i===Ul||i===Fl||i===Bl||i===Gl||i===Hl||i===kl||i===Vl||i===Wl||i===zl||i===Xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ll)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===ql||i===Yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fo)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gf||i===Kl||i===$l||i===jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Q_ extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ot extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ev={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nv=`
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

}`;class iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bi({vertexShader:tv,fragmentShader:nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rv extends os{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const v=new iv,g=t.getContextAttributes();let p=null,A=null;const E=[],y=[],U=new Qe;let C=null;const R=new on;R.viewport=new ht;const D=new on;D.viewport=new ht;const T=[R,D],M=new Q_;let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=E[X];return te===void 0&&(te=new Ha,E[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=E[X];return te===void 0&&(te=new Ha,E[X]=te),te.getGripSpace()},this.getHand=function(X){let te=E[X];return te===void 0&&(te=new Ha,E[X]=te),te.getHandSpace()};function H(X){const te=y.indexOf(X.inputSource);if(te===-1)return;const Se=E[te];Se!==void 0&&(Se.update(X.inputSource,X.frame,c||o),Se.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",j);for(let X=0;X<E.length;X++){const te=y[X];te!==null&&(y[X]=null,E[X].disconnect(te))}w=null,W=null,v.reset(),e.setRenderTarget(p),m=null,h=null,d=null,r=null,A=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new fr(m.framebufferWidth,m.framebufferHeight,{format:En,type:di,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,Se=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?Qr:zr,Se=g.stencil?Jr:ur);const Ie={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new fr(h.textureWidth,h.textureHeight,{format:En,type:di,depthTexture:new ed(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(X){for(let te=0;te<X.removed.length;te++){const Se=X.removed[te],ae=y.indexOf(Se);ae>=0&&(y[ae]=null,E[ae].disconnect(Se))}for(let te=0;te<X.added.length;te++){const Se=X.added[te];let ae=y.indexOf(Se);if(ae===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=y.length){y.push(Se),ae=Ne;break}else if(y[Ne]===null){y[Ne]=Se,ae=Ne;break}if(ae===-1)break}const Ie=E[ae];Ie&&Ie.connect(Se)}}const q=new O,Z=new O;function k(X,te,Se){q.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(Se.matrixWorld);const ae=q.distanceTo(Z),Ie=te.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,He=Ie[14]/(Ie[10]-1),ut=Ie[14]/(Ie[10]+1),Ye=(Ie[9]+1)/Ie[5],mt=(Ie[9]-1)/Ie[5],N=(Ie[8]-1)/Ie[0],nn=(Ne[8]+1)/Ne[0],ze=He*N,Xe=He*nn,Re=ae/(-N+nn),ot=Re*-N;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ot),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ae=He+Re,b=ut+Re,x=ze-ot,F=Xe+(ae-ot),Y=Ye*ut/b*Ae,J=mt*ut/b*Ae;X.projectionMatrix.makePerspective(x,F,Y,J,Ae,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,Se=X.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),M.near=D.near=R.near=te,M.far=D.far=R.far=Se,(w!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,W=M.far),R.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const ae=X.parent,Ie=M.cameras;ie(M,ae);for(let Ne=0;Ne<Ie.length;Ne++)ie(Ie[Ne],ae);Ie.length===2?k(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),de(X,M,ae)};function de(X,te,Se){Se===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(Se.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ye=null;function Ge(X,te){if(f=te.getViewerPose(c||o),_=te,f!==null){const Se=f.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let ae=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ne=0;Ne<Se.length;Ne++){const He=Se[Ne];let ut=null;if(m!==null)ut=m.getViewport(He);else{const mt=d.getViewSubImage(h,He);ut=mt.viewport,Ne===0&&(e.setRenderTargetTextures(A,mt.colorTexture,h.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(A))}let Ye=T[Ne];Ye===void 0&&(Ye=new on,Ye.layers.enable(Ne),Ye.viewport=new ht,T[Ne]=Ye),Ye.matrix.fromArray(He.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(He.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),Ne===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Ye)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=d.getDepthInformation(Se[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,r.renderState)}}for(let Se=0;Se<E.length;Se++){const ae=y[Se],Ie=E[Se];ae!==null&&Ie!==void 0&&Ie.update(ae,te,c||o)}ye&&ye(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const nt=new Jf;nt.setAnimationLoop(Ge),this.setAnimationLoop=function(X){ye=X},this.dispose=function(){}}}const Yi=new kn,sv=new ct;function ov(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,$f(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,A,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Vt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Vt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p),E=A.envMap,y=A.envMapRotation;E&&(g.envMap.value=E,Yi.copy(y),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),g.envMapRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Yi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function av(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const y=E.program;i.uniformBlockBinding(A,y)}function c(A,E){let y=r[A.id];y===void 0&&(_(A),y=f(A),r[A.id]=y,A.addEventListener("dispose",g));const U=E.program;i.updateUBOMapping(A,U);const C=e.render.frame;s[A.id]!==C&&(h(A),s[A.id]=C)}function f(A){const E=d();A.__bindingPointIndex=E;const y=n.createBuffer(),U=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const E=r[A.id],y=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,R=y.length;C<R;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,M=D.length;T<M;T++){const w=D[T];if(m(w,C,T,U)===!0){const W=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let j=0;j<H.length;j++){const q=H[j],Z=v(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,W+$,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,E,y,U){const C=A.value,R=E+"_"+y;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const D=U[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return U[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(A){const E=A.uniforms;let y=0;const U=16;for(let R=0,D=E.length;R<D;R++){const T=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,w=T.length;M<w;M++){const W=T[M],H=Array.isArray(W.value)?W.value:[W.value];for(let $=0,j=H.length;$<j;$++){const q=H[$],Z=v(q),k=y%U,ie=k%Z.boundary,de=k+ie;y+=ie,de!==0&&U-de<Z.storage&&(y+=U-de),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=Z.storage}}}const C=y%U;return C>0&&(y+=U-C),A.__size=y,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function g(A){const E=A.target;E.removeEventListener("dispose",g);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class lv{constructor(e={}){const{canvas:t=jh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=Ni,this.toneMappingExposure=1;const y=this;let U=!1,C=0,R=0,D=null,T=-1,M=null;const w=new ht,W=new ht;let H=null;const $=new we(0);let j=0,q=t.width,Z=t.height,k=1,ie=null,de=null;const ye=new ht(0,0,q,Z),Ge=new ht(0,0,q,Z);let nt=!1;const X=new bc;let te=!1,Se=!1;const ae=new ct,Ie=new ct,Ne=new O,He=new ht,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function mt(){return D===null?k:1}let N=i;function nn(S,P){return t.getContext(S,P)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),N===null){const P="webgl2";if(N=nn(P,S),N===null)throw nn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ze,Xe,Re,ot,Ae,b,x,F,Y,J,z,Me,le,pe,Ke,Q,me,Ce,Pe,ge,qe,Fe,rt,I;function oe(){ze=new hg(N),ze.init(),Fe=new J_(N,ze),Xe=new ag(N,ze,e,Fe),Re=new $_(N,ze),Xe.reverseDepthBuffer&&h&&Re.buffers.depth.setReversed(!0),ot=new gg(N),Ae=new O_,b=new Z_(N,ze,Re,Ae,Xe,Fe,ot),x=new cg(y),F=new dg(y),Y=new yp(N),rt=new sg(N,Y),J=new pg(N,Y,ot,rt),z=new vg(N,J,Y,ot),Pe=new _g(N,Xe,b),Q=new lg(Ae),Me=new N_(y,x,F,ze,Xe,rt,Q),le=new ov(y,Ae),pe=new U_,Ke=new V_(ze),Ce=new rg(y,x,F,Re,z,m,l),me=new Y_(y,z,Xe),I=new av(N,ot,Xe,Re),ge=new og(N,ze,ot),qe=new mg(N,ze,ot),ot.programs=Me.programs,y.capabilities=Xe,y.extensions=ze,y.properties=Ae,y.renderLists=pe,y.shadowMap=me,y.state=Re,y.info=ot}oe();const V=new rv(y,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(q,Z,!1))},this.getSize=function(S){return S.set(q,Z)},this.setSize=function(S,P,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,Z=P,t.width=Math.floor(S*k),t.height=Math.floor(P*k),B===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(q*k,Z*k).floor()},this.setDrawingBufferSize=function(S,P,B){q=S,Z=P,k=B,t.width=Math.floor(S*B),t.height=Math.floor(P*B),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,P,B,G){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,P,B,G),Re.viewport(w.copy(ye).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Ge)},this.setScissor=function(S,P,B,G){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,P,B,G),Re.scissor(W.copy(Ge).multiplyScalar(k).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){Re.setScissorTest(nt=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,P=!0,B=!0){let G=0;if(S){let L=!1;if(D!==null){const ee=D.texture.format;L=ee===Ec||ee===Mc||ee===Sc}if(L){const ee=D.texture.type,ue=ee===di||ee===ur||ee===Hs||ee===Jr||ee===vc||ee===xc,_e=Ce.getClearColor(),ve=Ce.getClearAlpha(),Le=_e.r,De=_e.g,xe=_e.b;ue?(_[0]=Le,_[1]=De,_[2]=xe,_[3]=ve,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=Le,v[1]=De,v[2]=xe,v[3]=ve,N.clearBufferiv(N.COLOR,0,v))}else G|=N.COLOR_BUFFER_BIT}P&&(G|=N.DEPTH_BUFFER_BIT),B&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),Ke.dispose(),Ae.dispose(),x.dispose(),F.dispose(),z.dispose(),rt.dispose(),I.dispose(),Me.dispose(),V.dispose(),V.removeEventListener("sessionstart",Gc),V.removeEventListener("sessionend",Hc),ki.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=ot.autoReset,P=me.enabled,B=me.autoUpdate,G=me.needsUpdate,L=me.type;oe(),ot.autoReset=S,me.enabled=P,me.autoUpdate=B,me.needsUpdate=G,me.type=L}function ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oe(S){const P=S.target;P.removeEventListener("dispose",Oe),dt(P)}function dt(S){Rt(S),Ae.remove(S)}function Rt(S){const P=Ae.get(S).programs;P!==void 0&&(P.forEach(function(B){Me.releaseProgram(B)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,B,G,L,ee){P===null&&(P=ut);const ue=L.isMesh&&L.matrixWorld.determinant()<0,_e=Vd(S,P,B,G,L);Re.setMaterial(G,ue);let ve=B.index,Le=1;if(G.wireframe===!0){if(ve=J.getWireframeAttribute(B),ve===void 0)return;Le=2}const De=B.drawRange,xe=B.attributes.position;let je=De.start*Le,st=(De.start+De.count)*Le;ee!==null&&(je=Math.max(je,ee.start*Le),st=Math.min(st,(ee.start+ee.count)*Le)),ve!==null?(je=Math.max(je,0),st=Math.min(st,ve.count)):xe!=null&&(je=Math.max(je,0),st=Math.min(st,xe.count));const at=st-je;if(at<0||at===1/0)return;rt.setup(L,G,_e,B,ve);let Ft,Ze=ge;if(ve!==null&&(Ft=Y.get(ve),Ze=qe,Ze.setIndex(Ft)),L.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*mt()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(L.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*mt()),L.isLineSegments?Ze.setMode(N.LINES):L.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else L.isPoints?Ze.setMode(N.POINTS):L.isSprite&&Ze.setMode(N.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Ze.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ze.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ee=L._multiDrawStarts,Wn=L._multiDrawCounts,Je=L._multiDrawCount,pn=ve?Y.get(ve).bytesPerElement:1,_r=Ae.get(G).currentProgram.getUniforms();for(let zt=0;zt<Je;zt++)_r.setValue(N,"_gl_DrawID",zt),Ze.render(Ee[zt]/pn,Wn[zt])}else if(L.isInstancedMesh)Ze.renderInstances(je,at,L.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Wn=Math.min(B.instanceCount,Ee);Ze.renderInstances(je,at,Wn)}else Ze.render(je,at)};function et(S,P,B){S.transparent===!0&&S.side===Dn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Js(S,P,B),S.side=Fi,S.needsUpdate=!0,Js(S,P,B),S.side=Dn):Js(S,P,B)}this.compile=function(S,P,B=null){B===null&&(B=S),p=Ke.get(B),p.init(P),E.push(p),B.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),S!==B&&S.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const G=new Set;return S.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const _e=ee[ue];et(_e,B,L),G.add(_e)}else et(ee,B,L),G.add(ee)}),E.pop(),p=null,G},this.compileAsync=function(S,P,B=null){const G=this.compile(S,P,B);return new Promise(L=>{function ee(){if(G.forEach(function(ue){Ae.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){L(S);return}setTimeout(ee,10)}ze.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let hn=null;function Vn(S){hn&&hn(S)}function Gc(){ki.stop()}function Hc(){ki.start()}const ki=new Jf;ki.setAnimationLoop(Vn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(S){hn=S,V.setAnimationLoop(S),S===null?ki.stop():ki.start()},V.addEventListener("sessionstart",Gc),V.addEventListener("sessionend",Hc),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,P,D),p=Ke.get(S,E.length),p.init(P),E.push(p),Ie.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(Ie),Se=this.localClippingEnabled,te=Q.init(this.clippingPlanes,Se),g=pe.get(S,A.length),g.init(),A.push(g),V.enabled===!0&&V.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&da(ee,P,-1/0,y.sortObjects)}da(S,P,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ie,de),Ye=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ye&&Ce.addToRenderList(g,S),this.info.render.frame++,te===!0&&Q.beginShadows();const B=p.state.shadowsArray;me.render(B,S,P),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,L=g.transmissive;if(p.setupLights(),P.isArrayCamera){const ee=P.cameras;if(L.length>0)for(let ue=0,_e=ee.length;ue<_e;ue++){const ve=ee[ue];Vc(G,L,S,ve)}Ye&&Ce.render(S);for(let ue=0,_e=ee.length;ue<_e;ue++){const ve=ee[ue];kc(g,S,ve,ve.viewport)}}else L.length>0&&Vc(G,L,S,P),Ye&&Ce.render(S),kc(g,S,P);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(y,S,P),rt.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],te===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function da(S,P,B,G){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){G&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);const ue=z.update(S),_e=S.material;_e.visible&&g.push(S,ue,_e,B,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const ue=z.update(S),_e=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),He.copy(ue.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(_e)){const ve=ue.groups;for(let Le=0,De=ve.length;Le<De;Le++){const xe=ve[Le],je=_e[xe.materialIndex];je&&je.visible&&g.push(S,ue,je,B,He.z,xe)}}else _e.visible&&g.push(S,ue,_e,B,He.z,null)}}const ee=S.children;for(let ue=0,_e=ee.length;ue<_e;ue++)da(ee[ue],P,B,G)}function kc(S,P,B,G){const L=S.opaque,ee=S.transmissive,ue=S.transparent;p.setupLightsView(B),te===!0&&Q.setGlobalState(y.clippingPlanes,B),G&&Re.viewport(w.copy(G)),L.length>0&&Zs(L,P,B),ee.length>0&&Zs(ee,P,B),ue.length>0&&Zs(ue,P,B),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Vc(S,P,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new fr(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?zs:di,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ee=p.state.transmissionRenderTarget[G.id],ue=G.viewport||w;ee.setSize(ue.z,ue.w);const _e=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor($),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&Ce.render(B);const ve=y.toneMapping;y.toneMapping=Ni;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),te===!0&&Q.setGlobalState(y.clippingPlanes,G),Zs(S,B,G),b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee),ze.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let xe=0,je=P.length;xe<je;xe++){const st=P[xe],at=st.object,Ft=st.geometry,Ze=st.material,Ee=st.group;if(Ze.side===Dn&&at.layers.test(G.layers)){const Wn=Ze.side;Ze.side=Vt,Ze.needsUpdate=!0,Wc(at,B,G,Ft,Ze,Ee),Ze.side=Wn,Ze.needsUpdate=!0,De=!0}}De===!0&&(b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee))}y.setRenderTarget(_e),y.setClearColor($,j),Le!==void 0&&(G.viewport=Le),y.toneMapping=ve}function Zs(S,P,B){const G=P.isScene===!0?P.overrideMaterial:null;for(let L=0,ee=S.length;L<ee;L++){const ue=S[L],_e=ue.object,ve=ue.geometry,Le=G===null?ue.material:G,De=ue.group;_e.layers.test(B.layers)&&Wc(_e,P,B,ve,Le,De)}}function Wc(S,P,B,G,L,ee){S.onBeforeRender(y,P,B,G,L,ee),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),L.onBeforeRender(y,P,B,G,S,ee),L.transparent===!0&&L.side===Dn&&L.forceSinglePass===!1?(L.side=Vt,L.needsUpdate=!0,y.renderBufferDirect(B,P,G,L,S,ee),L.side=Fi,L.needsUpdate=!0,y.renderBufferDirect(B,P,G,L,S,ee),L.side=Dn):y.renderBufferDirect(B,P,G,L,S,ee),S.onAfterRender(y,P,B,G,L,ee)}function Js(S,P,B){P.isScene!==!0&&(P=ut);const G=Ae.get(S),L=p.state.lights,ee=p.state.shadowsArray,ue=L.state.version,_e=Me.getParameters(S,L.state,ee,P,B),ve=Me.getProgramCacheKey(_e);let Le=G.programs;G.environment=S.isMeshStandardMaterial?P.environment:null,G.fog=P.fog,G.envMap=(S.isMeshStandardMaterial?F:x).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Oe),Le=new Map,G.programs=Le);let De=Le.get(ve);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===ue)return Xc(S,_e),De}else _e.uniforms=Me.getUniforms(S),S.onBeforeCompile(_e,y),De=Me.acquireProgram(_e,ve),Le.set(ve,De),G.uniforms=_e.uniforms;const xe=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=Q.uniform),Xc(S,_e),G.needsLights=zd(S),G.lightsStateVersion=ue,G.needsLights&&(xe.ambientLightColor.value=L.state.ambient,xe.lightProbe.value=L.state.probe,xe.directionalLights.value=L.state.directional,xe.directionalLightShadows.value=L.state.directionalShadow,xe.spotLights.value=L.state.spot,xe.spotLightShadows.value=L.state.spotShadow,xe.rectAreaLights.value=L.state.rectArea,xe.ltc_1.value=L.state.rectAreaLTC1,xe.ltc_2.value=L.state.rectAreaLTC2,xe.pointLights.value=L.state.point,xe.pointLightShadows.value=L.state.pointShadow,xe.hemisphereLights.value=L.state.hemi,xe.directionalShadowMap.value=L.state.directionalShadowMap,xe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,xe.spotShadowMap.value=L.state.spotShadowMap,xe.spotLightMatrix.value=L.state.spotLightMatrix,xe.spotLightMap.value=L.state.spotLightMap,xe.pointShadowMap.value=L.state.pointShadowMap,xe.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function zc(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=Bo.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Xc(S,P){const B=Ae.get(S);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function Vd(S,P,B,G,L){P.isScene!==!0&&(P=ut),b.resetTextureUnits();const ee=P.fog,ue=G.isMeshStandardMaterial?P.environment:null,_e=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ss,ve=(G.isMeshStandardMaterial?F:x).get(G.envMap||ue),Le=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),xe=!!B.morphAttributes.position,je=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let at=Ni;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(at=y.toneMapping);const Ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=Ft!==void 0?Ft.length:0,Ee=Ae.get(G),Wn=p.state.lights;if(te===!0&&(Se===!0||S!==M)){const rn=S===M&&G.id===T;Q.setState(G,S,rn)}let Je=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Wn.state.version||Ee.outputColorSpace!==_e||L.isBatchedMesh&&Ee.batching===!1||!L.isBatchedMesh&&Ee.batching===!0||L.isBatchedMesh&&Ee.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ee.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ee.instancing===!1||!L.isInstancedMesh&&Ee.instancing===!0||L.isSkinnedMesh&&Ee.skinning===!1||!L.isSkinnedMesh&&Ee.skinning===!0||L.isInstancedMesh&&Ee.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ee.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ee.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ee.instancingMorph===!1&&L.morphTexture!==null||Ee.envMap!==ve||G.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Le||Ee.vertexTangents!==De||Ee.morphTargets!==xe||Ee.morphNormals!==je||Ee.morphColors!==st||Ee.toneMapping!==at||Ee.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ee.__version=G.version);let pn=Ee.currentProgram;Je===!0&&(pn=Js(G,P,L));let _r=!1,zt=!1,ds=!1;const lt=pn.getUniforms(),Tn=Ee.uniforms;if(Re.useProgram(pn.program)&&(_r=!0,zt=!0,ds=!0),G.id!==T&&(T=G.id,zt=!0),_r||M!==S){Re.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),Jh(ae),Qh(ae),lt.setValue(N,"projectionMatrix",ae)):lt.setValue(N,"projectionMatrix",S.projectionMatrix),lt.setValue(N,"viewMatrix",S.matrixWorldInverse);const pi=lt.map.cameraPosition;pi!==void 0&&pi.setValue(N,Ne.setFromMatrixPosition(S.matrixWorld)),Xe.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,zt=!0,ds=!0)}if(L.isSkinnedMesh){lt.setOptional(N,L,"bindMatrix"),lt.setOptional(N,L,"bindMatrixInverse");const rn=L.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),lt.setValue(N,"boneTexture",rn.boneTexture,b))}L.isBatchedMesh&&(lt.setOptional(N,L,"batchingTexture"),lt.setValue(N,"batchingTexture",L._matricesTexture,b),lt.setOptional(N,L,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",L._indirectTexture,b),lt.setOptional(N,L,"batchingColorTexture"),L._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",L._colorsTexture,b));const hs=B.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Pe.update(L,B,pn),(zt||Ee.receiveShadow!==L.receiveShadow)&&(Ee.receiveShadow=L.receiveShadow,lt.setValue(N,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Tn.envMap.value=ve,Tn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&P.environment!==null&&(Tn.envMapIntensity.value=P.environmentIntensity),zt&&(lt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Wd(Tn,ds),ee&&G.fog===!0&&le.refreshFogUniforms(Tn,ee),le.refreshMaterialUniforms(Tn,G,k,Z,p.state.transmissionRenderTarget[S.id]),Bo.upload(N,zc(Ee),Tn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bo.upload(N,zc(Ee),Tn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(N,"center",L.center),lt.setValue(N,"modelViewMatrix",L.modelViewMatrix),lt.setValue(N,"normalMatrix",L.normalMatrix),lt.setValue(N,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const rn=G.uniformsGroups;for(let pi=0,mi=rn.length;pi<mi;pi++){const qc=rn[pi];I.update(qc,pn),I.bind(qc,pn)}}return pn}function Wd(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function zd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,P,B){Ae.get(S.texture).__webglTexture=P,Ae.get(S.depthTexture).__webglTexture=B;const G=Ae.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,P){const B=Ae.get(S);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,B=0){D=S,C=P,R=B;let G=!0,L=null,ee=!1,ue=!1;if(S){const ve=Ae.get(S);if(ve.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(ve.__hasExternalTextures)b.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xe=S.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Ae.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const De=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[P])?L=De[P][B]:L=De[P],ee=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?L=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?L=De[B]:L=De,w.copy(S.viewport),W.copy(S.scissor),H=S.scissorTest}else w.copy(ye).multiplyScalar(k).floor(),W.copy(Ge).multiplyScalar(k).floor(),H=nt;if(Re.bindFramebuffer(N.FRAMEBUFFER,L)&&G&&Re.drawBuffers(S,L),Re.viewport(w),Re.scissor(W),Re.setScissorTest(H),ee){const ve=Ae.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,B)}else if(ue){const ve=Ae.get(S.texture),Le=P||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,B||0,Le)}T=-1},this.readRenderTargetPixels=function(S,P,B,G,L,ee,ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){Re.bindFramebuffer(N.FRAMEBUFFER,_e);try{const ve=S.texture,Le=ve.format,De=ve.type;if(!Xe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-G&&B>=0&&B<=S.height-L&&N.readPixels(P,B,G,L,Fe.convert(Le),Fe.convert(De),ee)}finally{const ve=D!==null?Ae.get(D).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(S,P,B,G,L,ee,ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){const ve=S.texture,Le=ve.format,De=ve.type;if(!Xe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=S.width-G&&B>=0&&B<=S.height-L){Re.bindFramebuffer(N.FRAMEBUFFER,_e);const xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,xe),N.bufferData(N.PIXEL_PACK_BUFFER,ee.byteLength,N.STREAM_READ),N.readPixels(P,B,G,L,Fe.convert(Le),Fe.convert(De),0);const je=D!==null?Ae.get(D).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,je);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Zh(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ee),N.deleteBuffer(xe),N.deleteSync(st),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,P=null,B=0){S.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-B),L=Math.floor(S.image.width*G),ee=Math.floor(S.image.height*G),ue=P!==null?P.x:0,_e=P!==null?P.y:0;b.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ue,_e,L,ee),Re.unbindTexture()},this.copyTextureToTexture=function(S,P,B=null,G=null,L=0){S.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],P=arguments[2],L=arguments[3]||0,B=null);let ee,ue,_e,ve,Le,De,xe,je,st;const at=S.isCompressedTexture?S.mipmaps[L]:S.image;B!==null?(ee=B.max.x-B.min.x,ue=B.max.y-B.min.y,_e=B.isBox3?B.max.z-B.min.z:1,ve=B.min.x,Le=B.min.y,De=B.isBox3?B.min.z:0):(ee=at.width,ue=at.height,_e=at.depth||1,ve=0,Le=0,De=0),G!==null?(xe=G.x,je=G.y,st=G.z):(xe=0,je=0,st=0);const Ft=Fe.convert(P.format),Ze=Fe.convert(P.type);let Ee;P.isData3DTexture?(b.setTexture3D(P,0),Ee=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),Ee=N.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const Wn=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),pn=N.getParameter(N.UNPACK_SKIP_PIXELS),_r=N.getParameter(N.UNPACK_SKIP_ROWS),zt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const ds=S.isDataArrayTexture||S.isData3DTexture,lt=P.isDataArrayTexture||P.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Tn=Ae.get(S),hs=Ae.get(P),rn=Ae.get(Tn.__renderTarget),pi=Ae.get(hs.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let mi=0;mi<_e;mi++)ds&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(S).__webglTexture,L,De+mi),S.isDepthTexture?(lt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(P).__webglTexture,L,st+mi),N.blitFramebuffer(ve,Le,ee,ue,xe,je,ee,ue,N.DEPTH_BUFFER_BIT,N.NEAREST)):lt?N.copyTexSubImage3D(Ee,L,xe,je,st+mi,ve,Le,ee,ue):N.copyTexSubImage2D(Ee,L,xe,je,st+mi,ve,Le,ee,ue);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Ee,L,xe,je,st,ee,ue,_e,Ft,Ze,at.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,L,xe,je,st,ee,ue,_e,Ft,at.data):N.texSubImage3D(Ee,L,xe,je,st,ee,ue,_e,Ft,Ze,at):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,L,xe,je,ee,ue,Ft,Ze,at.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,L,xe,je,at.width,at.height,Ft,at.data):N.texSubImage2D(N.TEXTURE_2D,L,xe,je,ee,ue,Ft,Ze,at);N.pixelStorei(N.UNPACK_ROW_LENGTH,Wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pn),N.pixelStorei(N.UNPACK_SKIP_ROWS,_r),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt),L===0&&P.generateMipmaps&&N.generateMipmap(Ee),Re.unbindTexture()},this.copyTextureToTexture3D=function(S,P,B=null,G=null,L=0){return S.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,S=arguments[2],P=arguments[3],L=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,P,B,G,L)},this.initRenderTarget=function(S){Ae.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){C=0,R=0,D=null,Re.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Rc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new Rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cv extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sd extends gr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new O,Xo=new O,qu=new ct,vs=new Tc,Mo=new Ys,ka=new O,Yu=new O;class uv extends vt{constructor(e=new dn,t=new sd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zo.fromBufferAttribute(t,r-1),Xo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zo.distanceTo(Xo);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=s,e.ray.intersectsSphere(Mo)===!1)return;qu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(qu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=m,g=_-1;v<g;v+=c){const p=f.getX(v),A=f.getX(v+1),E=Eo(this,e,vs,l,p,A);E&&t.push(E)}if(this.isLineLoop){const v=f.getX(_-1),g=f.getX(m),p=Eo(this,e,vs,l,v,g);p&&t.push(p)}}else{const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=m,g=_-1;v<g;v+=c){const p=Eo(this,e,vs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Eo(this,e,vs,l,_-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Eo(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(zo.fromBufferAttribute(o,r),Xo.fromBufferAttribute(o,s),t.distanceSqToSegment(zo,Xo,ka,Yu)>i)return;ka.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ka);if(!(l<e.near||l>e.far))return{distance:l,point:Yu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Ku=new O,$u=new O;class fv extends uv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ku.fromBufferAttribute(t,r),$u.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ku.distanceTo($u);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class od extends gr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ju=new ct,Jl=new Tc,yo=new Ys,To=new O;class dv extends vt{constructor(e=new dn,t=new od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;ju.copy(r).invert(),Jl.copy(e.ray).applyMatrix4(ju);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=h,v=m;_<v;_++){const g=c.getX(_);To.fromBufferAttribute(d,g),Zu(To,g,l,r,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=h,v=m;_<v;_++)To.fromBufferAttribute(d,_),Zu(To,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zu(n,e,t,i,r,s,o){const a=Jl.distanceSqToPoint(n);if(a<t){const l=new O;Jl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hv extends Ut{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const bo=new O,Ao=new O,Va=new O,Ro=new cn;class pv extends dn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Xr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:g,c:p}=Ro;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Ro.getNormal(Va),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let A=0;A<3;A++){const E=(A+1)%3,y=d[A],U=d[E],C=Ro[f[A]],R=Ro[f[E]],D=`${y}_${U}`,T=`${U}_${y}`;T in h&&h[T]?(Va.dot(h[T].normal)<=s&&(m.push(C.x,C.y,C.z),m.push(R.x,R.y,R.z)),h[T]=null):D in h||(h[D]={index0:c[A],index1:c[E],normal:Va.clone()})}}for(const _ in h)if(h[_]){const{index0:v,index1:g}=h[_];bo.fromBufferAttribute(a,v),Ao.fromBufferAttribute(a,g),m.push(bo.x,bo.y,bo.z),m.push(Ao.x,Ao.y,Ao.z)}this.setAttribute("position",new en(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ve extends gr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hf,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wc extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mv extends wc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wa=new ct,Ju=new O,Qu=new O;class gv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _v extends gv{constructor(){super(new Qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vv extends wc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xv extends wc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);let Lr=null;function At(){if(!Lr){const n=window.AudioContext||window.webkitAudioContext;n&&(Lr=new n)}return Lr&&Lr.state==="suspended"&&Lr.resume(),Lr}if(typeof window<"u"){const n=()=>{At(),window.removeEventListener("click",n),window.removeEventListener("keydown",n)};window.addEventListener("click",n),window.addEventListener("keydown",n)}function ad(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="triangle",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(320,e+.12),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.12)}function Sv(n){const e=At();if(!e)return;const t=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",n?(i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(750,t+.18)):(i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(200,t+.18)),r.gain.setValueAtTime(.22,t),r.gain.exponentialRampToValueAtTime(.01,t+.2),i.connect(r),r.connect(e.destination),i.start(t),i.stop(t+.2)}function Mv(){const n=At();if(!n)return;const e=n.currentTime,t=n.sampleRate*.08,i=n.createBuffer(1,t,n.sampleRate),r=i.getChannelData(0);for(let l=0;l<t;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/(t*.3));const s=n.createBufferSource();s.buffer=i;const o=n.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(800,e),o.frequency.exponentialRampToValueAtTime(150,e+.08);const a=n.createGain();a.gain.setValueAtTime(.35,e),a.gain.exponentialRampToValueAtTime(.01,e+.08),s.connect(o),o.connect(a),a.connect(n.destination),s.start(e)}function ef(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(80,e+.07),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.01,e+.07),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.07)}function Ev(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sawtooth",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(60,e+.15),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.15),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.15)}function ld(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(450,e),t.frequency.exponentialRampToValueAtTime(120,e+.1),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.1)}function yv(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="triangle",t.frequency.setValueAtTime(280,e),t.frequency.exponentialRampToValueAtTime(80,e+.14),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.14)}function Gi(n=!0){const e=At();if(!e)return;const t=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",n?(i.frequency.setValueAtTime(260,t),i.frequency.exponentialRampToValueAtTime(420,t+.08)):(i.frequency.setValueAtTime(420,t),i.frequency.exponentialRampToValueAtTime(260,t+.08)),r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.01,t+.08),i.connect(r),r.connect(e.destination),i.start(t),i.stop(t+.08)}function Tv(n=1){const e=At();if(!e)return;const t=e.currentTime,i=Math.floor(e.sampleRate*.04),r=e.createBuffer(1,i,e.sampleRate),s=r.getChannelData(0);for(let d=0;d<i;d++)s[d]=(Math.random()*2-1)*Math.exp(-d/(i*.25));const o=e.createBufferSource();o.buffer=r;const a=e.createBiquadFilter();a.type="lowpass";let l=380,c=.06;n===3||n===8||n===9||n===13?(l=650,c=.07):n===4?(l=300,c=.05):n===5?(l=400,c=.06):(n===6||n===12||n===16)&&(l=480,c=.06),a.frequency.setValueAtTime(l,t);const f=e.createGain();f.gain.setValueAtTime(c,t),f.gain.exponentialRampToValueAtTime(1e-4,t+.04),o.connect(a),a.connect(f),f.connect(e.destination),o.start(t)}function bv(n=1){const e=At();if(!e)return;const t=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle";const s=n===3||n===8||n===9||n===13?280:180;i.frequency.setValueAtTime(s,t),i.frequency.exponentialRampToValueAtTime(60,t+.03),r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.03),i.connect(r),r.connect(e.destination),i.start(t),i.stop(t+.03)}function Av(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(880,e+.09),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.09),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.09)}function dr(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createOscillator(),r=n.createGain();t.type="triangle",i.type="sine",t.frequency.setValueAtTime(523.25,e),t.frequency.setValueAtTime(659.25,e+.07),i.frequency.setValueAtTime(783.99,e+.07),r.gain.setValueAtTime(.25,e),r.gain.exponentialRampToValueAtTime(.01,e+.22),t.connect(r),i.connect(r),r.connect(n.destination),t.start(e),i.start(e+.07),t.stop(e+.22),i.stop(e+.22)}function Rv(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sawtooth",t.frequency.setValueAtTime(550,e),t.frequency.exponentialRampToValueAtTime(160,e+.14),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.14)}function cd(){const n=At();if(!n)return;const e=n.currentTime,t=Math.floor(n.sampleRate*.45),i=n.createBuffer(1,t,n.sampleRate),r=i.getChannelData(0);for(let l=0;l<t;l++)r[l]=(Math.random()*2-1)*.7;const s=n.createBufferSource();s.buffer=i;const o=n.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(3200,e),o.Q.setValueAtTime(4,e);const a=n.createGain();a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.01,e+.45),s.connect(o),o.connect(a),a.connect(n.destination),s.start(e)}function wv(){const n=At();if(!n)return;const e=n.currentTime,t=Math.floor(n.sampleRate*.85),i=n.createBuffer(1,t,n.sampleRate),r=i.getChannelData(0);for(let f=0;f<t;f++)r[f]=(Math.random()*2-1)*Math.exp(-f/(t*.4));const s=n.createBufferSource();s.buffer=i;const o=n.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(450,e),o.frequency.exponentialRampToValueAtTime(40,e+.85);const a=n.createGain();a.gain.setValueAtTime(.7,e),a.gain.exponentialRampToValueAtTime(.001,e+.85),s.connect(o),o.connect(a),a.connect(n.destination),s.start(e);const l=n.createOscillator(),c=n.createGain();l.type="sine",l.frequency.setValueAtTime(120,e),l.frequency.exponentialRampToValueAtTime(25,e+.5),c.gain.setValueAtTime(.6,e),c.gain.exponentialRampToValueAtTime(.01,e+.5),l.connect(c),c.connect(n.destination),l.start(e),l.stop(e+.5)}function Cv(){const n=At();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="triangle",t.frequency.setValueAtTime(280,e),t.frequency.exponentialRampToValueAtTime(90,e+.08),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.08)}const kt={TITLE_SCREEN:"title_screen",PLAYING:"playing",PAUSED:"paused"},pt={NONE:"none",INVENTORY:"inventory",CRAFTING_TABLE:"crafting_table",FURNACE:"furnace",CHEST:"chest",RECIPE_BOOK:"recipe_book",CONTROLS:"controls",SETTINGS:"settings"};let cs=kt.TITLE_SCREEN,ts=pt.NONE,Vs=null;function Iv(n){Vs=n}function bs(){return cs}function oa(n){cs=n}function Pv(){return cs===kt.TITLE_SCREEN}function Lv(){return cs===kt.PAUSED}function ud(n){return ts===n}function Us(){return ts!==pt.NONE}function us(n){ts=n,document.pointerLockElement&&document.exitPointerLock()}function oi(n=null){n&&ts!==n||(ts=pt.NONE,cs===kt.PLAYING&&Vs&&Vs.requestPointerLock())}function Nv(){ts=pt.NONE,cs===kt.PLAYING&&Vs&&Vs.requestPointerLock()}let Bt=null,Yt=null,Hr=null,Ql=!1;const bi={renderDistance:5,fov:75,mouseSensitivity:1};function Ov(n){Hr=n||document.querySelector("canvas"),Iv(Hr),document.getElementById("title-screen"),document.getElementById("pause-menu"),Bt=document.getElementById("modal-controls"),Yt=document.getElementById("modal-settings"),window.startGame=tf,window.resumeGame=za,window.returnToMainMenu=rf,window.openControls=()=>Nr(Bt),window.openSettings=()=>Nr(Yt);const e=["Cavernas 3D & Entradas Naturais!","Fornalha e Fundição de Ferro!","Armaduras, Esqueletos e Aranhas!","Mundo infinito com Biomas!","Construa e explore em 60 FPS!","Receitas reais de sobrevivência!"],t=document.getElementById("splash-text");t&&(t.textContent=e[Math.floor(Math.random()*e.length)]);const i=document.getElementById("btn-play");i&&i.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation();try{ad()}catch{}tf()});const r=document.getElementById("btn-controls");r&&r.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Nr(Bt)});const s=document.getElementById("btn-settings");s&&s.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Nr(Yt)});const o=document.getElementById("btn-close-controls");o&&o.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Bt&&(Bt.style.display="none"),oi(pt.CONTROLS)});const a=document.getElementById("btn-close-settings");a&&a.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Yt&&(Yt.style.display="none"),oi(pt.SETTINGS)});const l=document.getElementById("btn-resume");l&&l.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),za()});const c=document.getElementById("btn-pause-controls");c&&c.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Nr(Bt)});const f=document.getElementById("btn-pause-settings")||document.getElementById("btn-pause-options");f&&f.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Nr(Yt)});const d=document.getElementById("btn-quit-menu")||document.getElementById("btn-exit-main");d&&d.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),rf()});const h=document.getElementById("setting-fov"),m=document.getElementById("fov-val");h&&m&&h.addEventListener("input",E=>{bi.fov=parseInt(E.target.value,10),m.textContent=`${bi.fov}°`});const _=document.getElementById("setting-distance"),v=document.getElementById("distance-val");_&&v&&_.addEventListener("input",E=>{bi.renderDistance=parseInt(E.target.value,10),v.textContent=`${bi.renderDistance} Chunks`});const g=document.getElementById("setting-sens"),p=document.getElementById("sens-val");g&&p&&g.addEventListener("input",E=>{bi.mouseSensitivity=parseFloat(E.target.value),p.textContent=`${bi.mouseSensitivity.toFixed(1)}x`}),document.addEventListener("pointerlockchange",()=>{const E=document.pointerLockElement===(Hr||document.querySelector("canvas"));Ql&&!E&&bs()===kt.PLAYING&&!Us()&&nf(),Ql=E}),window.addEventListener("keydown",E=>{if(E.code==="Escape"){if(Bt&&Bt.style.display==="flex"){Bt.style.display="none",oi(pt.CONTROLS);return}if(Yt&&Yt.style.display==="flex"){Yt.style.display="none",oi(pt.SETTINGS);return}if(Us()){Nv();return}bs()===kt.PLAYING?(document.exitPointerLock(),nf()):bs()===kt.PAUSED&&za()}});const A=Hr||document.querySelector("canvas");A&&A.addEventListener("click",()=>{if(bs()===kt.PLAYING&&!Us()&&!document.pointerLockElement)try{A.requestPointerLock()}catch{}})}function Nr(n){n&&(n.style.display="flex",us(n===Bt?pt.CONTROLS:pt.SETTINGS))}function tf(){oa(kt.PLAYING);const n=document.getElementById("title-screen");n&&(n.style.display="none",n.style.pointerEvents="none",n.style.visibility="hidden",n.style.opacity="0");const e=document.getElementById("pause-menu");e&&(e.style.display="none");const t=document.getElementById("crosshair");t&&(t.style.display="block");const i=document.getElementById("controls-hint");i&&(i.style.display="block");const r=Hr||document.querySelector("canvas");if(r&&typeof r.requestPointerLock=="function")try{const s=r.requestPointerLock();s&&typeof s.catch=="function"&&s.catch(()=>{})}catch{}}function nf(){if(bs()===kt.TITLE_SCREEN)return;oa(kt.PAUSED);const n=document.getElementById("pause-menu");n&&(n.style.display="flex");const e=document.getElementById("crosshair");e&&(e.style.display="none");const t=document.getElementById("controls-hint");t&&(t.style.display="none")}function za(){oa(kt.PLAYING);const n=document.getElementById("pause-menu");n&&(n.style.display="none"),Bt&&(Bt.style.display="none"),Yt&&(Yt.style.display="none");const e=document.getElementById("crosshair");e&&(e.style.display="block");const t=document.getElementById("controls-hint");t&&(t.style.display="block");const i=Hr||document.querySelector("canvas");if(i&&typeof i.requestPointerLock=="function")try{const r=i.requestPointerLock();r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}function rf(){oa(kt.TITLE_SCREEN),Ql=!1;const n=document.getElementById("pause-menu");n&&(n.style.display="none"),Bt&&(Bt.style.display="none"),Yt&&(Yt.style.display="none");const e=document.getElementById("title-screen");e&&(e.style.display="flex",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.opacity="1");const t=document.getElementById("crosshair");t&&(t.style.display="none");const i=document.getElementById("controls-hint");i&&(i.style.display="none")}const Dv=.0022,sf=1.55;let Ci=null,ec=0,As=-.15,tc=!1;function Uv(n,e={x:0,y:20,z:0}){return Ci=new on(bi.fov||75,n,.05,500),Ci.rotation.order="YXZ",Ci.position.set(e.x,e.y,e.z),Ci.rotation.set(As,ec,0),Ci}function Fv(n){document.addEventListener("pointerlockchange",()=>{tc=document.pointerLockElement===n}),document.addEventListener("mousemove",e=>{if(!tc||!Ci||Math.abs(e.movementX)>250||Math.abs(e.movementY)>250)return;const t=Dv*(bi.sensitivity||1);ec-=e.movementX*t,As-=e.movementY*t,As=Math.max(-sf,Math.min(sf,As)),Ci.rotation.set(As,ec,0)})}function Ks(){return Ci}function fs(){return tc}let fd=!1,nc=0,ic=null,rc=null;function dd(n){if(!fd)return;const e=Math.min((n-nc)/1e3,.1);nc=n,ic&&ic(e,n/1e3),rc&&rc(e),requestAnimationFrame(dd)}function Bv(n,e){ic=n,rc=e,fd=!0,nc=performance.now(),requestAnimationFrame(dd)}let Kt=null,Ai=null;function Gv(){return Kt=new lv({antialias:!0}),Kt.domElement.id="game-canvas",Kt.setSize(window.innerWidth,window.innerHeight),Kt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Kt.setClearColor(7911912),Kt.shadowMap.enabled=!1,document.body.appendChild(Kt.domElement),window.addEventListener("resize",()=>{Kt.setSize(window.innerWidth,window.innerHeight)}),Kt}let sc=null,oc=null,Go=null;function Hv(){return Ai=new cv,sc=new mv(8900331,5596723,.6),Ai.add(sc),oc=new xv(16777215,.3),Ai.add(oc),Go=new vv(16774624,1),Go.position.set(80,120,50),Ai.add(Go),Ai.fog=new Rc(7911912,50,160),Ai}function kv(){return{hemiLight:sc,ambientLight:oc,dirLight:Go}}function Vv(n){Kt&&Ai&&n&&Kt.render(Ai,n)}function hd(){return Kt?Kt.domElement:null}function Wv(n){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()})}const cr=16;function Wt(n){let e=n|0;return()=>(e=e*1103515245+12345&2147483647,e/2147483647)}function zv(n){const e=document.createElement("canvas");e.width=cr,e.height=cr;const t=e.getContext("2d");return n(t,cr),e}function It(n,e,t,i,r,s){const o=Wt(s);n.fillStyle=t,n.fillRect(0,0,e,e);for(let a=0;a<e;a++)for(let l=0;l<e;l++)if(o()<r){const c=Math.floor(o()*i.length);n.fillStyle=i[c],n.fillRect(l,a,1,1)}}function Xv(n,e){It(n,e,"#5ba638",["#4f9430","#6bc043","#458528","#75cc4a"],.4,101);const t=Wt(202);for(let i=0;i<2;i++){const r=Math.floor(t()*(e-2))+1,s=Math.floor(t()*(e-2))+1;n.fillStyle="#f6e05e",n.fillRect(r,s,1,1)}}function qv(n,e){It(n,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a"],.35,301);const t=Wt(302);for(let i=0;i<5;i++)for(let r=0;r<e;r++)i<2?(n.fillStyle=t()>.3?"#5ba638":"#4f9430",n.fillRect(r,i,1,1)):i<3?t()>.35&&(n.fillStyle=t()>.5?"#5ba638":"#4f9430",n.fillRect(r,i,1,1)):i<4&&t()>.65&&(n.fillStyle="#458528",n.fillRect(r,i,1,1))}function Yv(n,e){It(n,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a","#584117"],.4,401);const t=Wt(402);for(let i=0;i<3;i++){const r=Math.floor(t()*(e-1)),s=Math.floor(t()*(e-1));n.fillStyle="#584117",n.fillRect(r,s,2,1)}}function Cc(n,e){It(n,e,"#828282",["#737373","#919191","#656565","#9e9e9e","#595959"],.45,501);const t=Wt(502);for(let i=0;i<4;i++){const r=Math.floor(t()*(e-3)),s=Math.floor(t()*e);n.fillStyle="#505050",n.fillRect(r,s,2+Math.floor(t()*2),1)}}function Kv(n,e){It(n,e,"#e5d38a",["#dac67c","#eedd98","#cfbc6f","#f5e6a4","#c5b161"],.45,601)}function $v(n,e){It(n,e,"#f5f7fa",["#e9ecf2","#ffffff","#dfe3ec","#edf0f7"],.35,701);const t=Wt(702);for(let i=0;i<3;i++){const r=Math.floor(t()*(e-1)),s=Math.floor(t()*e);n.fillStyle="#cbd5e1",n.fillRect(r,s,2,1)}}function jv(n,e){It(n,e,"#86652d",["#775924","#957134","#664c1e"],.35,1401);const t=Wt(1402);for(let i=0;i<4;i++)for(let r=0;r<e;r++)i<2?(n.fillStyle="#f5f7fa",n.fillRect(r,i,1,1)):i<3?t()>.3&&(n.fillStyle="#e9ecf2",n.fillRect(r,i,1,1)):t()>.7&&(n.fillStyle="#dfe3ec",n.fillRect(r,i,1,1))}function Zv(n,e){n.fillStyle="#888888",n.fillRect(0,0,e,e),n.fillStyle="#555555",n.fillRect(0,3,e,1),n.fillRect(0,7,e,1),n.fillRect(0,11,e,1),n.fillRect(0,15,e,1);for(let i=0;i<4;i++){const r=i%2===0?0:8,s=i*4;n.fillRect(r,s,1,4),n.fillRect(r+8,s,1,4)}const t=Wt(801);for(let i=0;i<e;i++)for(let r=0;r<e;r++)t()<.2&&(n.fillStyle=t()>.5?"#9e9e9e":"#737373",n.fillRect(r,i,1,1))}function Jv(n,e){It(n,e,"#6b4524",["#5a391d","#7c512c","#4e3016","#8d5c32"],.35,901);for(let t=0;t<e;t+=3)n.fillStyle="#472c14",n.fillRect(t,0,1,e)}function Qv(n,e){n.fillStyle="#c5a368",n.fillRect(0,0,e,e),n.fillStyle="#6b4524",n.fillRect(0,0,e,2),n.fillRect(0,14,e,2),n.fillRect(0,0,2,e),n.fillRect(14,0,2,e);const t=7.5,i=7.5,r=[2,4,6];n.fillStyle="#9e804f";for(const s of r)for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=Math.hypot(a-t,o-i);Math.abs(l-s)<.65&&n.fillRect(a,o,1,1)}n.fillStyle="#7a6036",n.fillRect(7,7,2,2)}function ex(n,e){It(n,e,"#3c8524",["#2f6d1b","#4fa631","#245614","#5dbd3c","#1b400e"],.5,1001);const t=Wt(1002);for(let i=0;i<5;i++){const r=Math.floor(t()*(e-1)),s=Math.floor(t()*(e-1));n.fillStyle="#1b400e",n.fillRect(r,s,1,1)}}function tx(n,e){Cc(n,e);const t=Wt(1101);for(let i=0;i<4;i++){const r=2+Math.floor(t()*(e-5)),s=2+Math.floor(t()*(e-5));n.fillStyle="#222222",n.fillRect(r,s,2,2),n.fillStyle="#111111",n.fillRect(r+1,s+1,1,1)}}function nx(n,e){Cc(n,e);const t=Wt(1201);for(let i=0;i<4;i++){const r=2+Math.floor(t()*(e-5)),s=2+Math.floor(t()*(e-5));n.fillStyle="#d4a373",n.fillRect(r,s,2,2),n.fillStyle="#faedcd",n.fillRect(r,s,1,1)}}function ix(n,e){It(n,e,"#2c75d8",["#2565bf","#3b86e8","#1e52a0","#4a95f5"],.4,1301);const t=Wt(1302);for(let i=0;i<3;i++){const r=Math.floor(t()*(e-3)),s=Math.floor(t()*e);n.fillStyle="#8bc3f7",n.fillRect(r,s,3,1)}}function rx(n,e){It(n,e,"#15803d",["#166534","#14532d","#22c55e"],.4,1501),n.fillStyle="#14532d",n.fillRect(7,7,2,2)}function sx(n,e){It(n,e,"#15803d",["#166534","#15803d","#22c55e","#14532d"],.35,1601);const t=Wt(1602);for(let i=0;i<e;i+=4)n.fillStyle="#14532d",n.fillRect(i,0,1,e);for(let i=0;i<6;i++){const r=Math.floor(t()*(e-2))+1,s=Math.floor(t()*(e-2))+1;n.fillStyle="#fef08a",n.fillRect(r,s,1,1)}}function $s(n,e){It(n,e,"#b45309",["#92400e","#78350f","#d97706","#a16207"],.35,1701),n.fillStyle="#451a03",n.fillRect(0,3,e,1),n.fillRect(0,7,e,1),n.fillRect(0,11,e,1),n.fillRect(0,15,e,1),n.fillRect(5,0,1,3),n.fillRect(11,4,1,3),n.fillRect(4,8,1,3),n.fillRect(12,12,1,3)}function aa(n,e){It(n,e,"#64748b",["#475569","#334155","#94a3b8","#1e293b"],.45,1801);const t=Wt(1802);n.fillStyle="#1e293b";for(let i=0;i<5;i++){const r=Math.floor(t()*(e-4)),s=Math.floor(t()*(e-4));n.fillRect(r,s,3,2)}}function ox(n,e){n.clearRect(0,0,e,e),n.fillStyle="#15803d",n.fillRect(7,7,2,9),n.fillRect(5,11,2,2),n.fillRect(9,9,2,2),n.fillStyle="#dc2626",n.fillRect(6,3,4,4),n.fillStyle="#ef4444",n.fillRect(7,2,2,1),n.fillRect(5,4,1,2),n.fillRect(10,4,1,2),n.fillStyle="#450a0a",n.fillRect(7,4,2,2)}function ax(n,e){n.clearRect(0,0,e,e),n.fillStyle="#15803d",n.fillRect(7,6,2,10),n.fillRect(5,10,2,2),n.fillRect(9,12,2,2),n.fillStyle="#eab308",n.fillRect(6,2,4,4),n.fillStyle="#facc15",n.fillRect(7,1,2,1),n.fillRect(5,3,1,2),n.fillRect(10,3,1,2),n.fillStyle="#ca8a04",n.fillRect(7,3,2,2)}function lx(n,e){$s(n,e),n.strokeStyle="#451a03",n.lineWidth=1,n.strokeRect(2.5,2.5,11,11),n.beginPath(),n.moveTo(6.5,2.5),n.lineTo(6.5,13.5),n.moveTo(10.5,2.5),n.lineTo(10.5,13.5),n.moveTo(2.5,6.5),n.lineTo(13.5,6.5),n.moveTo(2.5,10.5),n.lineTo(13.5,10.5),n.stroke(),n.fillStyle="#fef08a",n.fillRect(3,3,1,1),n.fillRect(12,3,1,1),n.fillRect(3,12,1,1),n.fillRect(12,12,1,1)}function cx(n,e){$s(n,e),n.fillStyle="#1e293b",n.fillRect(3,4,3,8),n.fillStyle="#94a3b8",n.fillRect(3,4,2,6),n.fillStyle="#78350f",n.fillRect(4,9,1,3),n.fillStyle="#cbd5e1",n.fillRect(10,5,2,2),n.fillStyle="#78350f",n.fillRect(9,7,1,4),n.fillRect(12,7,1,4)}function ux(n,e){n.clearRect(0,0,e,e),n.fillStyle="#78350f",n.fillRect(7,6,2,10),n.fillStyle="#451a03",n.fillRect(7,6,1,10),n.fillStyle="#f97316",n.fillRect(6,2,4,4),n.fillStyle="#fef08a",n.fillRect(7,3,2,2),n.fillStyle="#ea580c",n.fillRect(7,1,2,1)}function fx(n,e){aa(n,e),n.strokeStyle="#1e293b",n.lineWidth=1,n.strokeRect(1.5,1.5,13,13)}function dx(n,e){aa(n,e),n.fillStyle="#0f172a",n.fillRect(4,7,8,7),n.fillStyle="#334155",n.fillRect(5,10,6,1),n.fillRect(5,12,6,1)}function hx(n,e){aa(n,e),n.fillStyle="#f97316",n.fillRect(4,7,8,7),n.fillStyle="#fef08a",n.fillRect(5,9,6,4),n.fillStyle="#ef4444",n.fillRect(6,11,4,2)}function px(n,e){$s(n,e),n.strokeStyle="#451a03",n.lineWidth=1,n.strokeRect(1.5,1.5,13,13)}function mx(n,e){$s(n,e),n.strokeStyle="#451a03",n.lineWidth=1,n.strokeRect(1.5,1.5,13,13),n.fillStyle="#cbd5e1",n.fillRect(7,6,2,4),n.fillStyle="#475569",n.fillRect(7,8,2,1)}function gx(n,e){It(n,e,"#3b1d0c",["#2e1507","#45220e","#230f04","#4d2812"],.4,2101),n.fillStyle="#1c0b03",n.fillRect(0,3,e,1),n.fillRect(0,7,e,1),n.fillRect(0,11,e,1),n.fillRect(0,15,e,1)}function _x(n,e){It(n,e,"#86652d",["#775924","#957134","#664c1e"],.35,2201),n.fillStyle="#3b1d0c",n.fillRect(0,0,e,3),n.fillStyle="#230f04",n.fillRect(0,2,e,1)}function vx(n,e){n.clearRect(0,0,e,e),n.fillStyle="#65a30d";for(let t=2;t<e;t+=3)n.fillRect(t,12,1,4),n.fillRect(t-1,11,1,2)}function xx(n,e){n.clearRect(0,0,e,e),n.fillStyle="#84cc16";for(let t=1;t<e;t+=3)n.fillRect(t,6,2,10),n.fillStyle="#ca8a04",n.fillRect(t,6,2,3),n.fillStyle="#84cc16"}function Sx(n,e){n.clearRect(0,0,e,e);for(let t=1;t<e;t+=2)n.fillStyle="#ca8a04",n.fillRect(t,4,1,12),n.fillStyle="#eab308",n.fillRect(t-(t>1?1:0),1,2,5),n.fillStyle="#fef08a",n.fillRect(t,2,1,3)}function Mx(n,e){n.fillStyle="#dc2626",n.fillRect(0,0,e,e),n.fillStyle="#475569",n.beginPath(),n.arc(8,8,4,0,Math.PI*2),n.fill(),n.fillStyle="#0f172a",n.fillRect(7,7,2,2)}function Ex(n,e){n.fillStyle="#dc2626",n.fillRect(0,0,e,e),n.fillStyle="#f8fafc",n.fillRect(0,5,e,6),n.fillStyle="#0f172a",n.fillRect(1,6,4,1),n.fillRect(2,7,2,3),n.fillRect(6,6,1,4),n.fillRect(7,7,1,2),n.fillRect(8,6,1,4),n.fillRect(10,6,4,1),n.fillRect(11,7,2,3)}function yx(n,e){n.fillStyle="#b91c1c",n.fillRect(0,0,e,e),n.fillStyle="#7f1d1d",n.fillRect(3,3,10,10),n.fillStyle="#450a0a",n.fillRect(7,7,2,2)}const Tx=[{name:"grass_top",draw:Xv},{name:"grass_side",draw:qv},{name:"dirt",draw:Yv},{name:"stone",draw:Cc},{name:"sand",draw:Kv},{name:"snow",draw:$v},{name:"wood_log",draw:Jv},{name:"wood_log_top",draw:Qv},{name:"leaves",draw:ex},{name:"coal_ore",draw:tx},{name:"iron_ore",draw:nx},{name:"water",draw:ix},{name:"stone_bricks",draw:Zv},{name:"snow_side",draw:jv},{name:"cactus_top",draw:rx},{name:"cactus_side",draw:sx},{name:"wood_planks",draw:$s},{name:"cobblestone",draw:aa},{name:"flower_red",draw:ox},{name:"flower_yellow",draw:ax},{name:"crafting_table_top",draw:lx},{name:"crafting_table_side",draw:cx},{name:"torch",draw:ux},{name:"furnace_side",draw:fx},{name:"furnace_front",draw:dx},{name:"furnace_front_lit",draw:hx},{name:"chest_top",draw:px},{name:"chest_side",draw:mx},{name:"farmland_top",draw:gx},{name:"farmland_side",draw:_x},{name:"wheat_stage1",draw:vx},{name:"wheat_stage2",draw:xx},{name:"wheat_stage3",draw:Sx},{name:"tnt_top",draw:Mx},{name:"tnt_side",draw:Ex},{name:"tnt_bottom",draw:yx}];function pd(){return Tx.map(n=>zv(n.draw))}const or=4,ac=16,of=or*cr,af=ac*cr;let yi=null;function bx(){const n=pd(),e=document.createElement("canvas");e.width=of,e.height=af;const t=e.getContext("2d");return t.fillStyle="#000000",t.fillRect(0,0,of,af),n.forEach((i,r)=>{const s=r%or,o=Math.floor(r/or),a=s*cr,l=o*cr;t.drawImage(i,a,l)}),yi=new hv(e),yi.magFilter=Qt,yi.minFilter=Qt,yi.generateMipmaps=!1,yi.colorSpace=$t,yi.needsUpdate=!0,yi}function Ic(n){const e=n%or,t=Math.floor(n/or),i=5e-4,r=e/or+i,s=(e+1)/or-i,o=1-t/ac-i,a=1-(t+1)/ac+i;return{uMin:r,uMax:s,vMin:a,vMax:o}}function la(){return yi}const u={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD_LOG:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,WATER:10,CACTUS:11,WOOD_PLANKS:12,COBBLESTONE:13,FLOWER_RED:14,FLOWER_YELLOW:15,CRAFTING_TABLE:16,TORCH:17,FURNACE:18,FURNACE_LIT:19,CHEST:20,FARMLAND:21,WHEAT_STAGE_1:22,WHEAT_STAGE_2:23,WHEAT_STAGE_3:24,TNT:25,IRON_SWORD:101,IRON_PICKAXE:102,PORKCHOP:103,ROTTEN_FLESH:104,STICK:105,WOODEN_SWORD:106,WOODEN_PICKAXE:107,STONE_SWORD:108,STONE_PICKAXE:109,IRON_INGOT:110,COOKED_PORKCHOP:111,IRON_HELMET:112,IRON_CHESTPLATE:113,IRON_LEGGINGS:114,IRON_BOOTS:115,ARROW:116,BONE:117,STRING:118,SPIDER_EYE:119,BOW:120,WOODEN_HOE:121,STONE_HOE:122,IRON_HOE:123,WHEAT_SEEDS:124,WHEAT:125,BREAD:126,GUNPOWDER:127},hr={[u.GRASS]:"Grama",[u.DIRT]:"Terra",[u.STONE]:"Pedra",[u.SAND]:"Areia",[u.SNOW]:"Neve",[u.WOOD_LOG]:"Tronco de Carvalho",[u.LEAVES]:"Folhas",[u.COAL_ORE]:"Minério de Carvão",[u.IRON_ORE]:"Minério de Ferro",[u.WATER]:"Balde de Água",[u.CACTUS]:"Cacto",[u.WOOD_PLANKS]:"Tábuas de Madeira",[u.COBBLESTONE]:"Pedregulho",[u.FLOWER_RED]:"Flor Vermelha (Papoula)",[u.FLOWER_YELLOW]:"Flor Amarela (Dente-de-Leão)",[u.CRAFTING_TABLE]:"Bancada de Trabalho",[u.TORCH]:"Tocha",[u.FURNACE]:"Fornalha",[u.FURNACE_LIT]:"Fornalha (Acesa)",[u.CHEST]:"Baú de Madeira",[u.FARMLAND]:"Terra Arada",[u.WHEAT_STAGE_1]:"Brotos de Trigo",[u.WHEAT_STAGE_2]:"Trigo em Crescimento",[u.WHEAT_STAGE_3]:"Trigo Maduro",[u.TNT]:"Bloco de TNT",[u.IRON_SWORD]:"Espada de Ferro",[u.IRON_PICKAXE]:"Picareta de Ferro",[u.PORKCHOP]:"Costela de Porco Crua",[u.ROTTEN_FLESH]:"Carne Podre",[u.STICK]:"Graveto",[u.WOODEN_SWORD]:"Espada de Madeira",[u.WOODEN_PICKAXE]:"Picareta de Madeira",[u.STONE_SWORD]:"Espada de Pedra",[u.STONE_PICKAXE]:"Picareta de Pedra",[u.IRON_INGOT]:"Barra de Ferro",[u.COOKED_PORKCHOP]:"Bife de Porco Assado",[u.IRON_HELMET]:"Capacete de Ferro",[u.IRON_CHESTPLATE]:"Peitoral de Ferro",[u.IRON_LEGGINGS]:"Calças de Ferro",[u.IRON_BOOTS]:"Botas de Ferro",[u.ARROW]:"Flecha",[u.BONE]:"Osso",[u.STRING]:"Linha de Teia",[u.SPIDER_EYE]:"Olho de Aranha",[u.BOW]:"Arco e Flecha",[u.WOODEN_HOE]:"Enxada de Madeira",[u.STONE_HOE]:"Enxada de Pedra",[u.IRON_HOE]:"Enxada de Ferro",[u.WHEAT_SEEDS]:"Sementes de Trigo",[u.WHEAT]:"Trigo",[u.BREAD]:"Pão",[u.GUNPOWDER]:"Pólvora"},ca={[u.GRASS]:{top:0,side:1,bottom:2},[u.DIRT]:{top:2,side:2,bottom:2},[u.STONE]:{top:3,side:3,bottom:3},[u.SAND]:{top:4,side:4,bottom:4},[u.SNOW]:{top:5,side:13,bottom:2},[u.WOOD_LOG]:{top:7,side:6,bottom:7},[u.LEAVES]:{top:8,side:8,bottom:8},[u.COAL_ORE]:{top:9,side:9,bottom:9},[u.IRON_ORE]:{top:10,side:10,bottom:10},[u.WATER]:{top:11,side:11,bottom:11},[u.CACTUS]:{top:14,side:15,bottom:14},[u.WOOD_PLANKS]:{top:16,side:16,bottom:16},[u.COBBLESTONE]:{top:17,side:17,bottom:17},[u.FLOWER_RED]:{top:18,side:18,bottom:18},[u.FLOWER_YELLOW]:{top:19,side:19,bottom:19},[u.CRAFTING_TABLE]:{top:20,side:21,bottom:16},[u.TORCH]:{top:22,side:22,bottom:22},[u.FURNACE]:{top:3,side:23,bottom:3},[u.FURNACE_LIT]:{top:3,side:25,bottom:3},[u.CHEST]:{top:26,side:27,bottom:16},[u.FARMLAND]:{top:28,side:29,bottom:2},[u.WHEAT_STAGE_1]:{top:30,side:30,bottom:30},[u.WHEAT_STAGE_2]:{top:31,side:31,bottom:31},[u.WHEAT_STAGE_3]:{top:32,side:32,bottom:32},[u.TNT]:{top:33,side:34,bottom:35}};function Pc(n){return n>u.AIR&&n<100&&n!==u.WATER&&n!==u.FLOWER_RED&&n!==u.FLOWER_YELLOW&&n!==u.TORCH&&n!==u.WHEAT_STAGE_1&&n!==u.WHEAT_STAGE_2&&n!==u.WHEAT_STAGE_3}function Ax(n){return n>=u.GRASS&&n<100}function md(n){return n===u.IRON_SWORD||n===u.STONE_SWORD||n===u.WOODEN_SWORD||n===u.BOW}function Rx(n){return n===u.IRON_HOE||n===u.STONE_HOE||n===u.WOODEN_HOE}function wx(n){return n===u.PORKCHOP||n===u.COOKED_PORKCHOP||n===u.ROTTEN_FLESH||n===u.BREAD}function Cx(n){return n===u.IRON_HELMET||n===u.IRON_CHESTPLATE||n===u.IRON_LEGGINGS||n===u.IRON_BOOTS}function Ix(n){switch(n){case u.IRON_HELMET:return 2;case u.IRON_CHESTPLATE:return 6;case u.IRON_LEGGINGS:return 5;case u.IRON_BOOTS:return 2;default:return 0}}function Px(n){switch(n){case u.COOKED_PORKCHOP:return 8;case u.BREAD:return 5;case u.PORKCHOP:return 3;case u.ROTTEN_FLESH:return 1;default:return 0}}function Lx(n){return n===u.AIR||n===u.WATER||n===u.FLOWER_RED||n===u.FLOWER_YELLOW||n===u.TORCH||n===u.WHEAT_STAGE_1||n===u.WHEAT_STAGE_2||n===u.WHEAT_STAGE_3||n>=100}function Nx(n){switch(n){case u.LEAVES:case u.FLOWER_RED:case u.FLOWER_YELLOW:case u.WHEAT_STAGE_1:case u.WHEAT_STAGE_2:case u.WHEAT_STAGE_3:return .15;case u.DIRT:case u.GRASS:case u.SAND:case u.SNOW:case u.FARMLAND:return .55;case u.TNT:return .1;case u.WOOD_LOG:case u.WOOD_PLANKS:case u.CRAFTING_TABLE:case u.CHEST:case u.CACTUS:return 1.4;case u.STONE:case u.COBBLESTONE:case u.FURNACE:case u.FURNACE_LIT:return 2.5;case u.COAL_ORE:case u.IRON_ORE:return 3.5;case u.TORCH:return .05;default:return 1}}function Ox(n,e){const t=e===u.IRON_PICKAXE,i=e===u.STONE_PICKAXE,r=e===u.WOODEN_PICKAXE,s=e===u.IRON_SWORD,o=e===u.STONE_SWORD,a=e===u.WOODEN_SWORD;return n===u.STONE||n===u.COBBLESTONE||n===u.COAL_ORE||n===u.IRON_ORE||n===u.FURNACE||n===u.FURNACE_LIT?t?6.5:i?4.2:r?2.6:.65:n===u.LEAVES||n===u.FLOWER_RED||n===u.FLOWER_YELLOW||n===u.WHEAT_STAGE_1||n===u.WHEAT_STAGE_2||n===u.WHEAT_STAGE_3?s||o||a?6:2:(n===u.WOOD_LOG||n===u.WOOD_PLANKS||n===u.CRAFTING_TABLE||n===u.CHEST)&&(t||i||r)?1.6:1}function gd(n){switch(n){case u.STONE:return u.COBBLESTONE;case u.GRASS:return u.DIRT;case u.COAL_ORE:return u.COAL_ORE;case u.IRON_ORE:return u.IRON_ORE;case u.FURNACE:case u.FURNACE_LIT:return u.FURNACE;case u.FARMLAND:return u.DIRT;case u.WHEAT_STAGE_3:return u.WHEAT;case u.WHEAT_STAGE_1:case u.WHEAT_STAGE_2:return u.WHEAT_SEEDS;case u.LEAVES:return Math.random()<.35?u.LEAVES:0;case u.TNT:return u.TNT;default:return n}}const Te=16,ft=64,Dx=[{name:"top",dir:[0,1,0],colorKey:"top",vertices:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"bottom",dir:[0,-1,0],colorKey:"bottom",vertices:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"north",dir:[0,0,-1],colorKey:"side",vertices:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"south",dir:[0,0,1],colorKey:"side",vertices:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"east",dir:[1,0,0],colorKey:"side",vertices:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"west",dir:[-1,0,0],colorKey:"side",vertices:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]}];let Xa=null,qa=null;function Ux(){return Xa||(Xa=new Ve({map:la()})),Xa}function Fx(){return qa||(qa=new Ve({map:la(),transparent:!0,opacity:.65,side:Dn,depthWrite:!1})),qa}class Bx{constructor(e=0,t=0,i=0){this.cx=e,this.cy=t,this.cz=i,this.blocks=new Uint8Array(Te*Te*ft),this.mesh=null}_index(e,t,i){return e+i*Te+t*Te*Te}getBlock(e,t,i){return e<0||e>=Te||t<0||t>=ft||i<0||i>=Te?u.AIR:this.blocks[this._index(e,t,i)]}setBlock(e,t,i,r){e<0||e>=Te||t<0||t>=ft||i<0||i>=Te||(this.blocks[this._index(e,t,i)]=r)}buildMesh(e){const t=[],i=[],r=[],s=[],o=[],a=[],l=[],c=[];let f=0,d=0;const h=this.cx*Te,m=this.cy*ft,_=this.cz*Te;for(let p=0;p<ft;p++)for(let A=0;A<Te;A++)for(let E=0;E<Te;E++){const y=this.getBlock(E,p,A);if(y===u.AIR)continue;const U=y===u.WATER,C=ca[y];if(C)for(const R of Dx){const D=E+R.dir[0],T=p+R.dir[1],M=A+R.dir[2];let w;if(D>=0&&D<Te&&T>=0&&T<ft&&M>=0&&M<Te?w=this.getBlock(D,T,M):e?w=e(h+D,m+T,_+M):w=u.AIR,U){if(w!==u.AIR)continue}else if(!Lx(w))continue;const W=C[R.colorKey],H=Ic(W),$=U?o:t,j=U?a:i,q=U?l:r,Z=U?c:s,k=U?d:f;for(let ie=0;ie<4;ie++){const de=R.vertices[ie];$.push(E+de[0],p+de[1],A+de[2]),j.push(R.dir[0],R.dir[1],R.dir[2]);const ye=R.localUVs[ie][0],Ge=R.localUVs[ie][1];q.push(H.uMin+ye*(H.uMax-H.uMin),H.vMin+Ge*(H.vMax-H.vMin))}Z.push(k,k+1,k+2,k,k+2,k+3),U?d+=4:f+=4}}let v=this._makeMesh(t,i,r,s,Ux());v.position.set(h,m,_),this.mesh=v;let g=null;return o.length>0&&(g=this._makeMesh(o,a,l,c,Fx()),g.position.set(h,m,_),g.renderOrder=1),{solidMesh:v,waterMesh:g}}_makeMesh(e,t,i,r,s){const o=new dn;return o.setAttribute("position",new en(e,3)),o.setAttribute("normal",new en(t,3)),o.setAttribute("uv",new en(i,2)),o.setIndex(r),new se(o,s)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null)}}const Sn=new Map,qo=new Map,Yo=new Map,Jt=18,Pi=5,Gx=7;let lf=NaN,cf=NaN;const Ya=[];function Qn(n,e){let t=n*374761393+e*668265263+1234567|0;return t=(t^t>>13)*1274126177|0,(t&2147483647)/2147483647}function Hx(n,e){const t=Math.floor(n),i=Math.floor(e),r=n-t,s=e-i,o=r*r*(3-2*r),a=s*s*(3-2*s),l=Qn(t,i),c=Qn(t+1,i),f=Qn(t,i+1),d=Qn(t+1,i+1),h=l*(1-o)+c*o,m=f*(1-o)+d*o;return h*(1-a)+m*a}function Yr(n,e,t=4,i=.5,r=2){let s=0,o=1,a=1,l=0;for(let c=0;c<t;c++)s+=Hx(n*o,e*o)*a,l+=a,a*=i,o*=r;return s/l}const it={OCEAN:"ocean",PLAINS:"plains",FOREST:"forest",DESERT:"desert",SNOWY_MOUNTAINS:"snowy_mountains"};function ns(n,e){const t=Yr(n*.0025,e*.0025,3);if(t<.32)return it.OCEAN;const i=Yr(n*.0035+150,e*.0035+150,3),r=Yr(n*.004+300,e*.004+300,3);return t>.58&&i<.38?it.SNOWY_MOUNTAINS:i>.62&&r<.48?it.DESERT:r>.52?it.FOREST:it.PLAINS}function ci(n,e){const t=ns(n,e),i=Yr(n*.025,e*.025,3);switch(t){case it.OCEAN:{const r=Yr(n*.01,e*.01,2),s=Jt-2-r*10+i*3;return Math.max(3,Math.min(ft-6,Math.floor(s)))}case it.DESERT:{const s=21+(Math.sin(n*.03+e*.015)*4+Math.cos(e*.03)*3)+i*2.5;return Math.max(Jt+1,Math.min(ft-6,Math.floor(s)))}case it.SNOWY_MOUNTAINS:{const r=Yr(n*.015,e*.015,4),s=28+Math.pow(r,1.8)*32+i*4;return Math.max(24,Math.min(ft-4,Math.floor(s)))}case it.FOREST:{const s=23+(Math.sin(n*.022)*5+Math.cos(e*.028)*4+Math.sin((n-e)*.035)*2.5)+i*3;return Math.max(Jt+1,Math.min(ft-6,Math.floor(s)))}case it.PLAINS:default:{const s=22+(Math.sin(n*.02)*4+Math.cos(e*.025)*4+Math.sin((n+e)*.04)*2)+i*2.5;return Math.max(Jt+1,Math.min(ft-6,Math.floor(s)))}}}function uf(n,e,t,i,r){for(let o=i;o<i+r;o++)o<ft&&n.setBlock(e,o,t,u.WOOD_LOG);const s=i+r-1;for(let o=0;o<3;o++){const a=o<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++){if(Math.abs(l)===a&&Math.abs(c)===a&&o<2)continue;const f=e+l,d=s+o,h=t+c;f>=0&&f<Te&&d>=0&&d<ft&&h>=0&&h<Te&&n.getBlock(f,d,h)===u.AIR&&n.setBlock(f,d,h,u.LEAVES)}}}function kx(n,e,t,i,r){for(let o=i;o<i+r;o++)o<ft&&n.setBlock(e,o,t,u.WOOD_LOG);const s=i+r;for(let o=i+2;o<=s+1;o++){const l=(s+1-o)%2===0?2:1;for(let c=-l;c<=l;c++)for(let f=-l;f<=l;f++){if(Math.abs(c)===l&&Math.abs(f)===l&&l>1)continue;const d=e+c,h=o,m=t+f;d>=0&&d<Te&&h>=0&&h<ft&&m>=0&&m<Te&&n.getBlock(d,h,m)===u.AIR&&n.setBlock(d,h,m,u.LEAVES)}}}function Vx(n,e,t,i,r){for(let s=i;s<i+r;s++)s<ft&&n.getBlock(e,s,t)===u.AIR&&n.setBlock(e,s,t,u.CACTUS)}function Ka(n,e,t,i,r){e>=0&&e<Te&&i>=0&&i<Te&&t<ft&&n.getBlock(e,t,i)===u.AIR&&n.setBlock(e,t,i,r)}function Ei(n,e,t){let i=n*374761393+e*668265263+t*982451653+1234567|0;return i=(i^i>>13)*1274126177|0,(i&2147483647)/2147483647}function ff(n,e,t){const i=Math.floor(n),r=Math.floor(e),s=Math.floor(t),o=n-i,a=e-r,l=t-s,c=o*o*(3-2*o),f=a*a*(3-2*a),d=l*l*(3-2*l),h=Ei(i,r,s),m=Ei(i+1,r,s),_=Ei(i,r+1,s),v=Ei(i+1,r+1,s),g=Ei(i,r,s+1),p=Ei(i+1,r,s+1),A=Ei(i,r+1,s+1),E=Ei(i+1,r+1,s+1),y=h*(1-c)+m*c,U=_*(1-c)+v*c,C=g*(1-c)+p*c,R=A*(1-c)+E*c,D=y*(1-f)+U*f,T=C*(1-f)+R*f;return D*(1-d)+T*d}function _d(n,e,t,i){if(e<2||e>i||i<=Jt+1&&e>=i-2)return!1;const r=ff(n*.045,e*.075,t*.045)-.5,s=ff(n*.045+137,e*.075+137,t*.045+137)-.5;return r*r+s*s<.022}function vd(n,e){const t=new Bx(n,0,e),i=n*Te,r=e*Te;for(let s=0;s<Te;s++)for(let o=0;o<Te;o++){const a=i+o,l=r+s,c=ci(a,l),f=ns(a,l);for(let d=0;d<=c;d++){let h;d===0||d<c-4?h=u.STONE:d<c?f===it.DESERT||f===it.OCEAN&&c<=Jt+1?h=u.SAND:h=u.DIRT:f===it.DESERT?h=u.SAND:f===it.SNOWY_MOUNTAINS?h=c>=36?u.SNOW:u.GRASS:f===it.OCEAN||c<=Jt+1?h=u.SAND:h=u.GRASS,d>=2&&_d(a,d,l,c)&&(d<=Jt-8?h=u.WATER:h=u.AIR),t.setBlock(o,d,s,h)}for(let d=c+1;d<=Jt;d++)t.getBlock(o,d,s)===u.AIR&&t.setBlock(o,d,s,u.WATER)}for(let s=1;s<Te-1;s++)for(let o=1;o<Te-1;o++){const a=i+o,l=r+s,c=ci(a,l),f=ns(a,l),d=t.getBlock(o,c,s),h=Qn(a,l);if(c>Jt){if(f===it.PLAINS&&d===u.GRASS)if(h<.025&&o>=2&&o<Te-2&&s>=2&&s<Te-2){const m=4+Math.floor(Qn(a+555,l+777)*3);c+m+4<ft&&uf(t,o,s,c+1,m)}else h>.94&&h<.97?Ka(t,o,c+1,s,u.FLOWER_RED):h>=.97&&Ka(t,o,c+1,s,u.FLOWER_YELLOW);else if(f===it.FOREST&&d===u.GRASS)if(h<.085&&o>=2&&o<Te-2&&s>=2&&s<Te-2){const m=4+Math.floor(Qn(a+444,l+666)*4);c+m+4<ft&&uf(t,o,s,c+1,m)}else h>.96&&Ka(t,o,c+1,s,u.FLOWER_RED);else if(f===it.DESERT&&d===u.SAND){if(h<.028){const m=2+(h>.015?1:0);Vx(t,o,s,c+1,m)}}else if(f===it.SNOWY_MOUNTAINS&&(d===u.GRASS||d===u.SNOW)&&h<.035&&o>=2&&o<Te-2&&s>=2&&s<Te-2){const m=5+Math.floor(Qn(a+333,l+888)*4);c+m+4<ft&&kx(t,o,s,c+1,m)}}}for(let s=0;s<Te;s++)for(let o=0;o<Te;o++){const a=i+o,l=r+s,c=ci(a,l);for(let f=1;f<c-3;f++)if(t.getBlock(o,f,s)===u.STONE){const d=Qn(a*31+f*97,l*53+f*13);d<.018?t.setBlock(o,f,s,u.COAL_ORE):d>.982&&t.setBlock(o,f,s,u.IRON_ORE)}}return t}function un(n,e,t){if(e<0||e>=ft)return u.AIR;const i=Math.floor(n/Te),r=Math.floor(t/Te),s=`${i},0,${r}`,o=Sn.get(s);if(o){const l=(n%Te+Te)%Te,c=(t%Te+Te)%Te;return o.getBlock(l,e,c)}const a=ci(n,t);if(e>a)return e<=Jt?u.WATER:u.AIR;if(e>=2&&_d(n,e,t,a))return e<=Jt-8?u.WATER:u.AIR;if(e===a){const l=ns(n,t);return l===it.DESERT||a<=Jt+1?u.SAND:l===it.SNOWY_MOUNTAINS&&a>=36?u.SNOW:u.GRASS}return e>=a-4?ns(n,t)===it.DESERT?u.SAND:u.DIRT:u.STONE}function xd(n,e,t){return Pc(un(n,e,t))}function ua(n,e){const t=`${n.cx},0,${n.cz}`,i=qo.get(t),r=Yo.get(t);i&&(e.remove(i),i.geometry.dispose()),r&&(e.remove(r),r.geometry.dispose());const{solidMesh:s,waterMesh:o}=n.buildMesh(un);qo.set(t,s),e.add(s),o&&(Yo.set(t,o),e.add(o))}function Wx(n){console.log("[World] Generating starting biomes and chunks...");for(let e=-Pi;e<=Pi;e++)for(let t=-Pi;t<=Pi;t++){const i=vd(t,e);Sn.set(`${t},0,${e}`,i)}for(const e of Sn.values())ua(e,n);console.log(`[World] Ready! ${Sn.size} chunks generated.`)}function df(n,e){if(!e)return;const t=Math.floor(n.x/Te),i=Math.floor(n.z/Te);if(t!==lf||i!==cf){lf=t,cf=i;for(const[s,o]of Sn.entries())if(Math.max(Math.abs(o.cx-t),Math.abs(o.cz-i))>Gx){const l=qo.get(s),c=Yo.get(s);l&&(e.remove(l),l.geometry.dispose(),qo.delete(s)),c&&(e.remove(c),c.geometry.dispose(),Yo.delete(s)),o.dispose(),Sn.delete(s)}for(let s=-Pi;s<=Pi;s++)for(let o=-Pi;o<=Pi;o++){const a=t+o,l=i+s,c=`${a},0,${l}`;if(!Sn.has(c)){const f=vd(a,l);Sn.set(c,f),Ya.push(f)}}}const r=Math.min(2,Ya.length);for(let s=0;s<r;s++){const o=Ya.shift();Sn.has(`${o.cx},0,${o.cz}`)&&ua(o,e)}}function Lc(){return{x:.5,y:ci(0,0)+2,z:.5}}function Oi(n,e,t,i,r){if(t<0||t>=ft)return;const s=Math.floor(e/Te),o=Math.floor(i/Te),a=`${s},0,${o}`,l=Sn.get(a);if(!l)return;const c=(e%Te+Te)%Te,f=(i%Te+Te)%Te;l.setBlock(c,t,f,r),ua(l,n),c===0&&wo(n,s-1,o),c===Te-1&&wo(n,s+1,o),f===0&&wo(n,s,o-1),f===Te-1&&wo(n,s,o+1)}function wo(n,e,t){const i=Sn.get(`${e},0,${t}`);i&&ua(i,n)}const xs=6;function zx(n,e){const t=e.clone().normalize();let i=Math.floor(n.x),r=Math.floor(n.y),s=Math.floor(n.z);const o=t.x>=0?1:-1,a=t.y>=0?1:-1,l=t.z>=0?1:-1,c=t.x!==0?Math.abs(1/t.x):1/0,f=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0;let h=t.x!==0?(t.x>0?i+1-n.x:n.x-i)*c:1/0,m=t.y!==0?(t.y>0?r+1-n.y:n.y-r)*f:1/0,_=t.z!==0?(t.z>0?s+1-n.z:n.z-s)*d:1/0,v=i,g=r,p=s,A=0,E=0,y=0;for(let U=0;U<xs*3;U++){if(r>=0&&r<ft){const C=un(i,r,s);if(Pc(C))return{hit:{x:i,y:r,z:s},normal:{x:A,y:E,z:y},prev:{x:v,y:g,z:p}}}if(v=i,g=r,p=s,h<m)if(h<_){if(h>xs)break;i+=o,h+=c,A=-o,E=0,y=0}else{if(_>xs)break;s+=l,_+=d,A=0,E=0,y=-l}else if(m<_){if(m>xs)break;r+=a,m+=f,A=0,E=-a,y=0}else{if(_>xs)break;s+=l,_+=d,A=0,E=0,y=-l}}return null}const Xx={[u.GRASS]:5938743,[u.DIRT]:9136404,[u.STONE]:8947848,[u.SAND]:15259274,[u.SNOW]:15790320,[u.WOOD_LOG]:7029286,[u.LEAVES]:3832352,[u.COAL_ORE]:4473924,[u.IRON_ORE]:12096874,[u.WATER]:3702992,[u.CACTUS]:1483594,[u.WOOD_PLANKS]:11817737,[u.COBBLESTONE]:6583435,[u.FLOWER_RED]:14427686,[u.FLOWER_YELLOW]:15381256};let pr=null;const Fs=[],qx=new he(.12,.12,.12),Yx=new he(.08,.08,.08);function Kx(n){pr=n}function lc(n,e,t,i){if(!pr)return;const r=Xx[i]||11184810,s=12;for(let o=0;o<s;o++){const a=new Ve({color:r}),l=new se(qx,a);l.position.set(n+.2+Math.random()*.6,e+.2+Math.random()*.6,t+.2+Math.random()*.6);const c=(Math.random()-.5)*4.5,f=Math.random()*4+1.5,d=(Math.random()-.5)*4.5,h=(Math.random()-.5)*10,m=(Math.random()-.5)*10;pr.add(l),Fs.push({mesh:l,vx:c,vy:f,vz:d,rx:h,ry:m,life:.6+Math.random()*.3,age:0})}}function Sd(n,e,t,i=15680580){if(!pr)return;const r=8;for(let s=0;s<r;s++){const o=new Ve({color:i}),a=new se(Yx,o);a.position.set(n,e,t);const l=(Math.random()-.5)*5,c=Math.random()*3.5+1,f=(Math.random()-.5)*5;pr.add(a),Fs.push({mesh:a,vx:l,vy:c,vz:f,rx:Math.random()*10,ry:Math.random()*10,life:.35+Math.random()*.2,age:0})}}function $x(n){if(pr)for(let e=Fs.length-1;e>=0;e--){const t=Fs[e];if(t.age+=n,t.age>=t.life){pr.remove(t.mesh),t.mesh.material.dispose(),Fs.splice(e,1);continue}t.vy-=18*n,t.mesh.position.x+=t.vx*n,t.mesh.position.y+=t.vy*n,t.mesh.position.z+=t.vz*n,t.mesh.rotation.x+=t.rx*n,t.mesh.rotation.y+=t.ry*n;const i=Math.max(.01,1-t.age/t.life);t.mesh.scale.set(i,i,i)}}const jx=480;let ai=.2,Ko=null,$o=null,kr=null,ei=null,Ti=null,Ur=null;const Zx={dawn:new we(16096779),morning:new we(9684477),noon:new we(6333946),sunset:new we(14753096),dusk:new we(4405450),midnight:new we(329750),predawn:new we(1973067)},Jx={dawn:new we(16498468),morning:new we(9684477),noon:new we(7911912),sunset:new we(16007006),dusk:new we(3223169),midnight:new we(329489),predawn:new we(1973067)};function Qx(n,e={}){ei=e.dirLight||null,Ti=e.hemiLight||null,Ur=e.ambientLight||null,kr=new Ot,n.add(kr);const t=new he(20,20,20),i=new hi({color:16776171});Ko=new se(t,i),kr.add(Ko);const r=new he(16,16,16),s=new hi({color:15857145});$o=new se(r,s),kr.add($o),Md(0,n,null)}function hf(n,e,t,i=null){ai+=n/jx,ai>=1&&(ai-=1),t&&kr&&kr.position.copy(t.position);const r=ai*Math.PI*2-Math.PI/2,s=260,o=Math.cos(r)*s,a=Math.sin(r)*s,l=20;Ko&&Ko.position.set(o,a,l),$o&&$o.position.set(-o,-a,-l),ei&&(fa()?ei.position.set(o,Math.max(15,a),l):ei.position.set(-o,Math.max(15,-a),-l)),Md(n,e,i)}function pf(n,e){if(e<.15){const t=e/.15;return n.dawn.clone().lerp(n.morning,t)}else if(e<.25){const t=(e-.15)/.1;return n.morning.clone().lerp(n.noon,t)}else if(e<.5){const t=(e-.25)/.25;return n.noon.clone().lerp(n.sunset,t)}else if(e<.58){const t=(e-.5)/.08;return n.sunset.clone().lerp(n.dusk,t)}else if(e<.75){const t=(e-.58)/.17;return n.dusk.clone().lerp(n.midnight,t)}else if(e<.92){const t=(e-.75)/.17;return n.midnight.clone().lerp(n.predawn,t)}else{const t=(e-.92)/.08;return n.predawn.clone().lerp(n.dawn,t)}}function Md(n,e,t){const i=pf(Zx,ai),r=pf(Jx,ai);e&&e.fog&&e.fog.color.copy(r),t&&t.setClearColor(i);const s=Math.sin(ai*Math.PI*2);ei&&(s>0?(ei.color.set(16774624),ei.intensity=.4+s*.85):(ei.color.set(9741240),ei.intensity=Math.max(.12,-s*.28))),Ti&&(s>0?(Ti.color.set(8900331),Ti.groundColor.set(5596723),Ti.intensity=.3+s*.4):(Ti.color.set(1976635),Ti.groundColor.set(988970),Ti.intensity=.15)),Ur&&(s>0?(Ur.color.set(16777215),Ur.intensity=.25+s*.2):(Ur.color.set(6583435),Ur.intensity=.12))}function fa(){return ai<.5}function eS(){const n=(ai*24+6)%24,e=Math.floor(n),t=Math.floor((n-e)*60),i=e<10?"0"+e:""+e,r=t<10?"0"+t:""+t;return`${i}:${r}`}let Kr=null;const Rs=[],tS=new he(.26,.26,.26);function nS(n){Kr=n}function Gt(n,e,t,i){if(!Kr||!n||n===u.AIR)return;const r=ca[n]||{side:1};Ic(r.side||0);const s=new Ve({map:la()}),o=new se(tS,s);o.position.set(e+(Math.random()-.5)*.2,t+.3,i+(Math.random()-.5)*.2),Kr.add(o),Rs.push({itemType:n,mesh:o,pos:o.position.clone(),vel:new O((Math.random()-.5)*2,3.2,(Math.random()-.5)*2),age:0,bobOffset:Math.random()*Math.PI*2,collected:!1})}function iS(n,e){if(!Kr)return;const i=Hi().clone().add(new O(0,.9,0));for(let r=Rs.length-1;r>=0;r--){const s=Rs[r];if(s.age+=n,s.age>180){Kr.remove(s.mesh),s.mesh.geometry.dispose(),Rs.splice(r,1);continue}const o=s.pos.distanceTo(i);if(o<2.5&&s.age>.4){const a=Math.min(12,1/(o*.2+.05));if(s.pos.lerp(i,n*a),o<.65&&tn(s.itemType)){Av(),Kr.remove(s.mesh),s.mesh.geometry.dispose(),Rs.splice(r,1);continue}}else{s.vel.y-=18*n,s.pos.x+=s.vel.x*n,s.pos.z+=s.vel.z*n,s.pos.y+=s.vel.y*n,s.vel.x*=Math.exp(-6*n),s.vel.z*=Math.exp(-6*n);const a=ci(Math.floor(s.pos.x),Math.floor(s.pos.z))+1.15;s.pos.y<=a&&(s.pos.y=a,s.vel.set(0,0,0))}s.mesh.position.copy(s.pos),s.mesh.position.y+=Math.sin(e*3.5+s.bobOffset)*.06,s.mesh.rotation.y+=n*2.2,s.mesh.rotation.x=Math.sin(e*2+s.bobOffset)*.15}}const We={PIG:"pig",ZOMBIE:"zombie",SKELETON:"skeleton",SPIDER:"spider",CREEPER:"creeper"};let bt=null;const Gn=[],er=[],Ho=[];let $a=0;const rS=12;function sS(n,e,t,i,r,s){const o=i-n,a=r-e,l=s-t,c=Math.hypot(o,a,l);if(c<.3)return!0;const f=Math.ceil(c*2.2),d=o/f,h=a/f,m=l/f;for(let _=1;_<f;_++){const v=Math.floor(n+d*_),g=Math.floor(e+h*_),p=Math.floor(t+m*_);if(xd(v,g,p))return!1}return!0}function oS(){const n=new Ot,e=new Ve({color:16020150}),t=new Ve({color:16478597}),i=new Ve({color:2042167}),r=new se(new he(.7,.5,.9),e);r.position.set(0,.45,0),n.add(r);const s=new se(new he(.45,.45,.45),e);s.position.set(0,.65,-.55),n.add(s);const o=new se(new he(.24,.16,.12),t);o.position.set(0,.58,-.8),n.add(o);const a=new se(new he(.08,.08,.02),i);a.position.set(-.16,.72,-.78);const l=new se(new he(.08,.08,.02),i);l.position.set(.16,.72,-.78),n.add(a),n.add(l);const c=new he(.18,.35,.18),f=[],d=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const h of d){const m=new se(c,e);m.position.set(...h),n.add(m),f.push(m)}return{group:n,legs:f,head:s,body:r,originalMats:[e,t]}}function aS(){const n=new Ot,e=new Ve({color:3899966}),t=new Ve({color:440020}),i=new Ve({color:1981066}),r=new Ve({color:988970}),s=new se(new he(.44,.44,.44),e);s.position.set(0,1.45,0),n.add(s);const o=new se(new he(.08,.06,.02),r);o.position.set(-.12,1.48,-.23);const a=new se(new he(.08,.06,.02),r);a.position.set(.12,1.48,-.23),n.add(o),n.add(a);const l=new se(new he(.5,.65,.28),t);l.position.set(0,.9,0),n.add(l);const c=new he(.16,.16,.55),f=new se(c,e);f.position.set(-.35,1.05,-.26);const d=new se(c,e);d.position.set(.35,1.05,-.26),n.add(f),n.add(d);const h=new he(.2,.6,.22),m=new se(h,i);m.position.set(-.13,.3,0);const _=new se(h,i);return _.position.set(.13,.3,0),n.add(m),n.add(_),{group:n,legs:[m,_],arms:[f,d],head:s,body:l,originalMats:[e,t,i]}}function lS(){const n=new Ot,e=new Ve({color:13751771}),t=new Ve({color:988970}),i=new Ve({color:7877903}),r=new se(new he(.42,.42,.42),e);r.position.set(0,1.45,0),n.add(r);const s=new se(new he(.1,.08,.02),t);s.position.set(-.11,1.47,-.22);const o=new se(new he(.1,.08,.02),t);o.position.set(.11,1.47,-.22),n.add(s),n.add(o);const a=new se(new he(.42,.6,.2),e);a.position.set(0,.9,0),n.add(a);const l=new he(.1,.55,.1),c=new se(l,e);c.position.set(-.28,.9,-.2),c.rotation.x=-Math.PI/2.5;const f=new se(l,e);f.position.set(.28,.9,-.2),f.rotation.x=-Math.PI/2.5,n.add(c),n.add(f);const d=new se(new he(.06,.45,.06),i);d.position.set(.28,.85,-.42),n.add(d);const h=new he(.12,.6,.12),m=new se(h,e);m.position.set(-.11,.3,0);const _=new se(h,e);return _.position.set(.11,.3,0),n.add(m),n.add(_),{group:n,legs:[m,_],arms:[c,f],head:r,body:a,originalMats:[e,i]}}function cS(){const n=new Ot,e=new Ve({color:1976635}),t=new hi({color:15680580}),i=new se(new he(.65,.45,.7),e);i.position.set(0,.35,.4),n.add(i);const r=new se(new he(.45,.35,.45),e);r.position.set(0,.3,-.25),n.add(r);const s=new he(.06,.06,.02),o=new se(s,t);o.position.set(-.12,.32,-.48);const a=new se(s,t);a.position.set(.12,.32,-.48),n.add(o),n.add(a);const l=new he(.6,.08,.08),c=[];for(let f=0;f<4;f++){const d=new se(l,e);d.position.set(-.45,.22,-.3+f*.22),d.rotation.z=.35,n.add(d),c.push(d);const h=new se(l,e);h.position.set(.45,.22,-.3+f*.22),h.rotation.z=-.35,n.add(h),c.push(h)}return{group:n,legs:c,head:r,body:i,originalMats:[e,t]}}function uS(){const n=new Ot,e=new Ve({color:2278750}),t=new Ve({color:1409085}),i=new Ve({color:988970}),r=new se(new he(.48,.7,.28),e);r.position.set(0,.75,0),n.add(r);const s=new se(new he(.48,.48,.48),e);s.position.set(0,1.34,0),n.add(s);const o=new se(new he(.1,.1,.02),i);o.position.set(-.11,1.38,-.25);const a=new se(new he(.1,.1,.02),i);a.position.set(.11,1.38,-.25),n.add(o),n.add(a);const l=new se(new he(.08,.12,.02),i);l.position.set(0,1.3,-.25),n.add(l);const c=new se(new he(.08,.14,.02),i);c.position.set(-.08,1.2,-.25);const f=new se(new he(.08,.14,.02),i);f.position.set(.08,1.2,-.25),n.add(c),n.add(f);const d=new he(.2,.4,.2),h=[],m=[[-.14,.2,-.16],[.14,.2,-.16],[-.14,.2,.16],[.14,.2,.16]];for(const _ of m){const v=new se(d,t);v.position.set(..._),n.add(v),h.push(v)}return{group:n,legs:h,head:s,body:r,originalMats:[e,t]}}function Un(n,e,t,i){if(!bt)return null;let r;n===We.PIG?r=oS():n===We.SKELETON?r=lS():n===We.SPIDER?r=cS():n===We.CREEPER?r=uS():r=aS(),r.group.position.set(e,t,i),bt.add(r.group);const s={type:n,model:r,pos:new O(e,t,i),vel:new O(0,0,0),health:n===We.PIG?10:n===We.SPIDER?16:20,maxHealth:n===We.PIG?10:n===We.SPIDER?16:20,yaw:Math.random()*Math.PI*2,targetYaw:0,stateTimer:1+Math.random()*2,state:"idle",attackCooldown:0,hurtTimer:0,animPhase:0,onGround:!1,eyeHeight:n===We.PIG?.6:n===We.SPIDER?.35:1.45,losCheckTimer:Math.random()*.2,canSeePlayer:!1,lastSeenPos:null,investigateTimer:0,burnTimer:0,isBurning:!1,shootCooldown:1+Math.random()*1.5,fuseTimer:0,isFusing:!1};return Gn.push(s),s}function fS(n){bt=n}function dS(n,e,t=3.8){const i=e.clone().normalize();let r=null,s=t;for(const o of Gn){const l=o.pos.clone().add(new O(0,o.eyeHeight*.6,0)).clone().sub(n),c=l.dot(i);if(c>0&&c<s){const f=l.clone().sub(i.clone().multiplyScalar(c)).length(),d=o.type===We.PIG?.6:o.type===We.SPIDER?.75:.55;f<d&&(s=c,r=o)}}return r}function Nc(n,e,t){n.health-=e,n.hurtTimer=.25,yv(),Sd(n.pos.x,n.pos.y+n.eyeHeight*.5,n.pos.z);const i=t.clone().normalize().multiplyScalar(7.5);n.vel.x+=i.x,n.vel.z+=i.z,n.vel.y=3.5,n.type===We.PIG?(n.state="flee",n.stateTimer=4):(n.state="chase",n.lastSeenPos=Hi().clone()),n.health<=0&&Oc(n)}function Oc(n){bt.remove(n.model.group);const e=Gn.indexOf(n);e!==-1&&Gn.splice(e,1),n.type===We.PIG?Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.PORKCHOP):n.type===We.ZOMBIE?(Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.ROTTEN_FLESH),Math.random()<.25&&Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.IRON_INGOT)):n.type===We.SKELETON?(Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.BONE),Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.ARROW)):n.type===We.SPIDER?(Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.STRING),Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.SPIDER_EYE)):n.type===We.CREEPER&&Gt(n.pos.x,n.pos.y+.5,n.pos.z,u.GUNPOWDER)}function Ed(n,e,t,i=2.8,r=16){if(!bt)return;wv();const s=new O(n,e,t),a=Hi().clone().add(new O(0,.9,0)).sub(s),l=a.length();if(l<i*2.2){const v=1-l/(i*2.2),g=Math.max(2,Math.round(r*v));rs(g,a.clone().normalize())}for(let v=Gn.length-1;v>=0;v--){const g=Gn[v],p=g.pos.distanceTo(s);if(p<i*2){const A=Math.round(r*(1-p/(i*2)));Nc(g,A,g.pos.clone().sub(s).normalize())}}const c=Math.floor(n-i),f=Math.ceil(n+i),d=Math.max(1,Math.floor(e-i)),h=Math.min(63,Math.ceil(e+i)),m=Math.floor(t-i),_=Math.ceil(t+i);for(let v=m;v<=_;v++)for(let g=c;g<=f;g++)for(let p=d;p<=h;p++)if(Math.hypot(g+.5-n,p+.5-e,v+.5-t)<=i){const E=un(g,p,v);if(E!==u.AIR&&E!==u.WATER&&(lc(g,p,v,E),Oi(bt,g,p,v,u.AIR),Math.random()<.4)){const y=gd(E);y>0&&Gt(g+.5,p+.5,v+.5,y)}}}function hS(n,e,t){if(!bt)return;Oi(bt,n,e,t,u.AIR);const i=new he(.98,.98,.98),r=new Ve({color:15680580}),s=new se(i,r);s.position.set(n+.5,e+.5,t+.5),bt.add(s),cd(),Ho.push({mesh:s,mat:r,pos:new O(n+.5,e+.5,t+.5),timer:2.2,blinkTimer:0})}function pS(n){for(let e=Ho.length-1;e>=0;e--){const t=Ho[e];t.timer-=n,t.blinkTimer+=n*10,Math.floor(t.blinkTimer)%2===0?t.mat.color.setHex(16777215):t.mat.color.setHex(15680580),t.timer<=0&&(bt.remove(t.mesh),Ho.splice(e,1),Ed(t.pos.x,t.pos.y,t.pos.z,3.8,20))}}function mS(n,e){if(!bt)return;Rv();const t=new he(.08,.08,.6),i=new hi({color:16317180}),r=new se(t,i);r.position.copy(n),bt.add(r);const o=e.clone().normalize().multiplyScalar(26);er.push({mesh:r,pos:n.clone(),vel:o,life:5,isPlayerShot:!0})}function gS(n,e){if(!bt)return;const t=new he(.08,.08,.5),i=new hi({color:14870768}),r=new se(t,i);r.position.copy(n),bt.add(r);const o=e.clone().sub(n).normalize().multiplyScalar(18);er.push({mesh:r,pos:n.clone(),vel:o,life:4,isPlayerShot:!1})}function _S(n){const e=Hi();for(let t=er.length-1;t>=0;t--){const i=er[t];if(i.life-=n,i.vel.y-=12*n,i.pos.addScaledVector(i.vel,n),i.mesh.position.copy(i.pos),i.isPlayerShot){let r=!1;for(const s of Gn){const o=s.pos.clone().add(new O(0,s.eyeHeight*.5,0));if(i.pos.distanceTo(o)<.9){Nc(s,9,i.vel.clone().normalize()),bt.remove(i.mesh),er.splice(t,1),r=!0;break}}if(r)continue}else if(i.pos.distanceTo(e.clone().add(new O(0,.9,0)))<.75){rs(4,i.vel.clone().normalize()),bt.remove(i.mesh),er.splice(t,1);continue}(xd(Math.floor(i.pos.x),Math.floor(i.pos.y),Math.floor(i.pos.z))||i.life<=0)&&(bt.remove(i.mesh),er.splice(t,1))}}function vS(n){const e=Hi();$a+=n,$a>3&&Gn.length<rS&&($a=0,xS(e)),_S(n),pS(n);for(let t=Gn.length-1;t>=0;t--){const i=Gn[t];SS(i,n,e)}}function xS(n){const e=Math.random()*Math.PI*2,t=18+Math.random()*20,i=Math.floor(n.x+Math.cos(e)*t),r=Math.floor(n.z+Math.sin(e)*t),s=ci(i,r);if(s>18&&s<50)if(fa())Un(We.PIG,i+.5,s+1,r+.5);else{const a=Math.random();a<.35?Un(We.ZOMBIE,i+.5,s+1,r+.5):a<.6?Un(We.SKELETON,i+.5,s+1,r+.5):a<.8?Un(We.CREEPER,i+.5,s+1,r+.5):Un(We.SPIDER,i+.5,s+1,r+.5)}}function SS(n,e,t){const r=t.clone().sub(n.pos).length();if((n.type===We.ZOMBIE||n.type===We.SKELETON)&&fa()){const o=ci(Math.floor(n.pos.x),Math.floor(n.pos.z));if(n.pos.y>=o&&(n.burnTimer+=e,n.burnTimer>=1&&(n.burnTimer=0,n.health-=2,Sd(n.pos.x,n.pos.y+1,n.pos.z),n.health<=0))){Oc(n);return}}if(n.losCheckTimer-=e,n.losCheckTimer<=0){n.losCheckTimer=.25;const o=sS(n.pos.x,n.pos.y+n.eyeHeight,n.pos.z,t.x,t.y+1.2,t.z);n.canSeePlayer=o&&r<24,n.canSeePlayer&&(n.lastSeenPos=t.clone(),n.type!==We.PIG&&(n.state="chase"))}n.type===We.PIG?bS(n,e,t):n.type===We.SKELETON?yS(n,e,t,r):n.type===We.SPIDER?TS(n,e,t,r):n.type===We.CREEPER?MS(n,e,t,r):ES(n,e,t,r),n.vel.y-=22*e,n.pos.addScaledVector(n.vel,e);const s=ci(Math.floor(n.pos.x),Math.floor(n.pos.z));n.pos.y<=s+1&&(n.pos.y=s+1,n.vel.y=0,n.onGround=!0),n.vel.x*=Math.exp(-8*e),n.vel.z*=Math.exp(-8*e),n.model.group.position.copy(n.pos),n.model.group.rotation.y=n.yaw}function MS(n,e,t,i){if(n.state==="chase"){n.yaw=Math.atan2(t.x-n.pos.x,t.z-n.pos.z);const r=2.8;if(n.vel.x=Math.sin(n.yaw)*r,n.vel.z=Math.cos(n.yaw)*r,i<3.2){n.isFusing||(n.isFusing=!0,cd()),n.fuseTimer+=e,n.vel.x=0,n.vel.z=0;const s=1+n.fuseTimer/1.5*.3;if(n.model.group.scale.set(s,s,s),n.fuseTimer>=1.5){Ed(n.pos.x,n.pos.y+.5,n.pos.z,2.8,16),Oc(n);return}}else i>5.5&&n.isFusing&&(n.isFusing=!1,n.fuseTimer=0,n.model.group.scale.set(1,1,1))}}function ES(n,e,t,i){if(n.state==="chase"){n.yaw=Math.atan2(t.x-n.pos.x,t.z-n.pos.z);const r=3.4;n.vel.x=Math.sin(n.yaw)*r,n.vel.z=Math.cos(n.yaw)*r,i<1.4&&(n.attackCooldown-=e,n.attackCooldown<=0&&(n.attackCooldown=1,rs(3,new O(Math.sin(n.yaw),0,Math.cos(n.yaw)))))}}function yS(n,e,t,i){n.yaw=Math.atan2(t.x-n.pos.x,t.z-n.pos.z),n.canSeePlayer&&(i<7?(n.vel.x=-Math.sin(n.yaw)*2.8,n.vel.z=-Math.cos(n.yaw)*2.8):i>12&&(n.vel.x=Math.sin(n.yaw)*2.8,n.vel.z=Math.cos(n.yaw)*2.8),n.shootCooldown-=e,n.shootCooldown<=0&&i<18&&(n.shootCooldown=2.2,ld(),gS(n.pos.clone().add(new O(0,1.2,0)),t.clone().add(new O(0,.9,0)))))}function TS(n,e,t,i){if(n.state==="chase"){n.yaw=Math.atan2(t.x-n.pos.x,t.z-n.pos.z);const r=4.5;n.vel.x=Math.sin(n.yaw)*r,n.vel.z=Math.cos(n.yaw)*r,i<4.5&&n.onGround&&Math.random()<.05&&(n.vel.y=5.5,n.vel.x*=1.5,n.vel.z*=1.5,n.onGround=!1),i<1.3&&(n.attackCooldown-=e,n.attackCooldown<=0&&(n.attackCooldown=.8,rs(2,new O(Math.sin(n.yaw),0,Math.cos(n.yaw)))))}}function bS(n,e,t,i){if(n.state==="flee"){n.stateTimer-=e;const r=n.pos.clone().sub(t).normalize();n.yaw=Math.atan2(r.x,r.z),n.vel.x=r.x*4.2,n.vel.z=r.z*4.2,n.stateTimer<=0&&(n.state="idle")}else n.stateTimer-=e,n.stateTimer<=0&&(n.stateTimer=2+Math.random()*3,n.yaw+=(Math.random()-.5)*1.5),n.vel.x=Math.sin(n.yaw)*1.2,n.vel.z=Math.cos(n.yaw)*1.2}let ja=null;function AS(){return ja||(ja=pd()),ja}function Za(n,e,t,i){const[r,s,o,a]=e,l=(s[0]-r[0])/16,c=(s[1]-r[1])/16,f=(a[0]-r[0])/16,d=(a[1]-r[1])/16;n.save(),n.filter=`brightness(${i})`,n.setTransform(l,c,f,d,r[0],r[1]),n.drawImage(t,0,0,16,16,0,0,16,16),n.restore()}function Tt(n,e=46){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");if(n===u.IRON_SWORD||n===u.STONE_SWORD||n===u.WOODEN_SWORD){const h=n===u.IRON_SWORD,m=n===u.STONE_SWORD,_=h?"#f1f5f9":m?"#94a3b8":"#b45309",v=h?"#475569":m?"#334155":"#78350f";return i.lineWidth=3,i.strokeStyle=v,i.fillStyle=_,i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle=h?"#334155":"#451a03",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),t}if(n===u.IRON_PICKAXE||n===u.STONE_PICKAXE||n===u.WOODEN_PICKAXE){const h=n===u.IRON_PICKAXE,m=n===u.STONE_PICKAXE,_=h?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.arc(e*.7,e*.3,e*.25,-Math.PI*.75,-Math.PI*.15),i.stroke(),t}if(n===u.STICK)return i.lineWidth=5,i.strokeStyle="#92400e",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.75,e*.25),i.stroke(),t;if(n===u.TORCH)return i.lineWidth=6,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.3,e*.75),i.lineTo(e*.65,e*.4),i.stroke(),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.68,e*.35,e*.15,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.68,e*.35,e*.08,0,Math.PI*2),i.fill(),t;if(n===u.IRON_INGOT)return i.fillStyle="#cbd5e1",i.strokeStyle="#475569",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.4),i.lineTo(e*.65,e*.3),i.lineTo(e*.8,e*.55),i.lineTo(e*.4,e*.65),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.35,e*.42,e*.25,e*.08),t;if(n===u.COOKED_PORKCHOP)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.35,e*.22,Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#451a03",i.fillRect(e*.4,e*.4,e*.2,2),i.fillRect(e*.45,e*.5,e*.2,2),t;if(n===u.IRON_HELMET)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.32,Math.PI,0),i.lineTo(e*.82,e*.65),i.lineTo(e*.65,e*.65),i.lineTo(e*.65,e*.55),i.lineTo(e*.35,e*.55),i.lineTo(e*.35,e*.65),i.lineTo(e*.18,e*.65),i.closePath(),i.fill(),i.stroke(),t;if(n===u.IRON_CHESTPLATE)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.35),i.lineTo(e*.6,e*.35),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.75,e*.5),i.lineTo(e*.75,e*.75),i.lineTo(e*.25,e*.75),i.lineTo(e*.25,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),t;if(n===u.IRON_LEGGINGS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.75),i.lineTo(e*.55,e*.75),i.lineTo(e*.5,e*.45),i.lineTo(e*.45,e*.75),i.lineTo(e*.25,e*.75),i.closePath(),i.fill(),i.stroke(),t;if(n===u.IRON_BOOTS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.fillRect(e*.22,e*.45,e*.18,e*.3),i.fillRect(e*.15,e*.6,e*.25,e*.15),i.fillRect(e*.6,e*.45,e*.18,e*.3),i.fillRect(e*.6,e*.6,e*.25,e*.15),t;if(n===u.ARROW)return i.lineWidth=3,i.strokeStyle="#94a3b8",i.beginPath(),i.moveTo(e*.2,e*.8),i.lineTo(e*.75,e*.25),i.stroke(),i.fillStyle="#475569",i.beginPath(),i.moveTo(e*.82,e*.18),i.lineTo(e*.65,e*.25),i.lineTo(e*.75,e*.35),i.closePath(),i.fill(),t;if(n===u.BONE)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.42,e*.5,e*.16,4),i.fill(),i.stroke(),t;if(n===u.STRING)return i.lineWidth=2,i.strokeStyle="#f8fafc",i.beginPath(),i.arc(e*.5,e*.5,e*.25,0,Math.PI*1.7),i.stroke(),t;if(n===u.SPIDER_EYE)return i.fillStyle="#991b1b",i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.22,0,Math.PI*2),i.fill(),i.stroke(),t;if(n===u.BOW)return i.lineWidth=3.5,i.strokeStyle="#78350f",i.beginPath(),i.arc(e*.4,e*.5,e*.35,-Math.PI*.45,Math.PI*.45),i.stroke(),i.lineWidth=1.5,i.strokeStyle="#f8fafc",i.beginPath(),i.moveTo(e*.4+Math.cos(-Math.PI*.45)*(e*.35),e*.5+Math.sin(-Math.PI*.45)*(e*.35)),i.lineTo(e*.4+Math.cos(Math.PI*.45)*(e*.35),e*.5+Math.sin(Math.PI*.45)*(e*.35)),i.stroke(),t;if(n===u.IRON_HOE||n===u.STONE_HOE||n===u.WOODEN_HOE){const h=n===u.IRON_HOE,m=n===u.STONE_HOE,_=h?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.65,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.moveTo(e*.65,e*.3),i.lineTo(e*.85,e*.3),i.lineTo(e*.85,e*.45),i.stroke(),t}if(n===u.WHEAT_SEEDS)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=1.5,[[e*.35,e*.4],[e*.55,e*.35],[e*.45,e*.6],[e*.65,e*.55]].forEach(([m,_])=>{i.beginPath(),i.arc(m,_,e*.08,0,Math.PI*2),i.fill(),i.stroke()}),t;if(n===u.WHEAT)return i.lineWidth=3,i.strokeStyle="#eab308",i.beginPath(),i.moveTo(e*.3,e*.8),i.lineTo(e*.5,e*.25),i.moveTo(e*.5,e*.8),i.lineTo(e*.5,e*.2),i.moveTo(e*.7,e*.8),i.lineTo(e*.5,e*.25),i.stroke(),i.fillStyle="#ef4444",i.fillRect(e*.38,e*.55,e*.24,4),t;if(n===u.BREAD)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.roundRect(e*.2,e*.35,e*.6,e*.32,8),i.fill(),i.stroke(),i.fillStyle="#fef08a",i.fillRect(e*.32,e*.42,3,e*.18),i.fillRect(e*.48,e*.42,3,e*.18),i.fillRect(e*.64,e*.42,3,e*.18),t;if(n===u.GUNPOWDER)return i.fillStyle="#475569",i.strokeStyle="#1e293b",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.25,e*.7),i.lineTo(e*.5,e*.3),i.lineTo(e*.75,e*.7),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#94a3b8",i.fillRect(e*.45,e*.45,2,2),i.fillRect(e*.55,e*.55,2,2),i.fillRect(e*.35,e*.6,2,2),t;if(n===u.ROTTEN_FLESH)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.32,e*.2,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),t;const r=AS(),s=ca[n];if(!s)return null;const o=r[s.top],a=r[s.side],l=e/4,c=[[e/2,0],[e/2+l,l/2],[e/2,l],[e/2-l,l/2]],f=[[e/2-l,l/2],[e/2,l],[e/2,2*l],[e/2-l,3*l/2]],d=[[e/2,l],[e/2+l,l/2],[e/2+l,3*l/2],[e/2,2*l]];return Za(i,d,a,.8),Za(i,f,a,.66),Za(i,c,o,1),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1.5,[c,f,d].forEach(h=>{i.beginPath(),i.moveTo(h[0][0],h[0][1]);for(let m=1;m<h.length;m++)i.lineTo(h[m][0],h[m][1]);i.closePath(),i.stroke()}),t}let Pn=null,Ln=null;const xn=new Array(9).fill(0),an=new Array(4).fill(0);let An=null;const yd=[{id:"planks",name:"Tábuas de Madeira",category:"Blocos",result:u.WOOD_PLANKS,count:4,gridSize:2,layout:[u.WOOD_LOG,0,0,0],desc:"Coloque 1 Tronco de Carvalho em qualquer espaço da grade.",check:n=>{const e=n.filter(i=>i===u.WOOD_LOG).length,t=n.filter(i=>i!==0&&i!==u.WOOD_LOG).length;return e===1&&t===0}},{id:"sticks",name:"Gravetos",category:"Materiais",result:u.STICK,count:4,gridSize:2,layout:[u.WOOD_PLANKS,0,u.WOOD_PLANKS,0],desc:"Coloque 2 Tábuas de Madeira verticalmente.",check:(n,e,t)=>{if(e===2&&t===2)return n[0]===u.WOOD_PLANKS&&n[2]===u.WOOD_PLANKS&&n[1]===0&&n[3]===0||n[1]===u.WOOD_PLANKS&&n[3]===u.WOOD_PLANKS&&n[0]===0&&n[2]===0;if(e===3&&t===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const s=r*3+i,o=(r+1)*3+i;if(n[s]===u.WOOD_PLANKS&&n[o]===u.WOOD_PLANKS&&n.every((l,c)=>c===s||c===o?!0:l===0))return!0}return!1}},{id:"crafting_table",name:"Bancada de Trabalho",category:"Blocos",result:u.CRAFTING_TABLE,count:1,gridSize:2,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS],desc:"Preencha os 4 espaços (2×2) com Tábuas de Madeira.",check:(n,e,t)=>{if(e===2&&t===2)return n.every(i=>i===u.WOOD_PLANKS);if(e===3&&t===3){const i=[0,1,3,4];for(const r of i){const s=r,o=r+1,a=r+3,l=r+4;if(n[s]===u.WOOD_PLANKS&&n[o]===u.WOOD_PLANKS&&n[a]===u.WOOD_PLANKS&&n[l]===u.WOOD_PLANKS&&n.every((f,d)=>d===s||d===o||d===a||d===l?!0:f===0))return!0}}return!1}},{id:"furnace",name:"Fornalha",category:"Blocos",result:u.FURNACE,count:1,gridSize:3,layout:[u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,0,u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE],desc:"Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.",check:(n,e,t)=>e!==3||t!==3?!1:[0,1,2,3,5,6,7,8].every(r=>n[r]===u.COBBLESTONE)&&n[4]===0},{id:"chest",name:"Baú de Madeira",category:"Blocos",result:u.CHEST,count:1,gridSize:3,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,0,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS],desc:"Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.",check:(n,e,t)=>e!==3||t!==3?!1:[0,1,2,3,5,6,7,8].every(r=>n[r]===u.WOOD_PLANKS)&&n[4]===0},{id:"torches",name:"Tochas (4x)",category:"Iluminação",result:u.TORCH,count:4,gridSize:2,layout:[u.COAL_ORE,0,u.STICK,0],desc:"1 Carvão em cima e 1 Graveto logo abaixo.",check:(n,e,t)=>{if(e===2&&t===2)return n[0]===u.COAL_ORE&&n[2]===u.STICK&&n[1]===0&&n[3]===0||n[1]===u.COAL_ORE&&n[3]===u.STICK&&n[0]===0&&n[2]===0;if(e===3&&t===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const s=r*3+i,o=(r+1)*3+i;if(n[s]===u.COAL_ORE&&n[o]===u.STICK&&n.every((l,c)=>c===s||c===o?!0:l===0))return!0}return!1}},{id:"wooden_pickaxe",name:"Picareta de Madeira",category:"Ferramentas",result:u.WOODEN_PICKAXE,count:1,gridSize:3,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,0,u.STICK,0,0,u.STICK,0],desc:"3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).",check:(n,e,t)=>e!==3||t!==3?!1:n[0]===u.WOOD_PLANKS&&n[1]===u.WOOD_PLANKS&&n[2]===u.WOOD_PLANKS&&n[4]===u.STICK&&n[7]===u.STICK&&n[3]===0&&n[5]===0&&n[6]===0&&n[8]===0},{id:"wooden_sword",name:"Espada de Madeira",category:"Armas",result:u.WOODEN_SWORD,count:1,gridSize:3,layout:[0,u.WOOD_PLANKS,0,0,u.WOOD_PLANKS,0,0,u.STICK,0],desc:"2 Tábuas verticais com 1 Graveto embaixo.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;for(let i=0;i<3;i++){const r=n[i]===u.WOOD_PLANKS&&n[3+i]===u.WOOD_PLANKS&&n[6+i]===u.STICK,s=n.every((o,a)=>a===i||a===3+i||a===6+i?!0:o===0);if(r&&s)return!0}return!1}},{id:"stone_pickaxe",name:"Picareta de Pedra",category:"Ferramentas",result:u.STONE_PICKAXE,count:1,gridSize:3,layout:[u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,0,u.STICK,0,0,u.STICK,0],desc:"3 Pedregulhos no topo e 2 Gravetos no meio.",check:(n,e,t)=>e!==3||t!==3?!1:n[0]===u.COBBLESTONE&&n[1]===u.COBBLESTONE&&n[2]===u.COBBLESTONE&&n[4]===u.STICK&&n[7]===u.STICK&&n[3]===0&&n[5]===0&&n[6]===0&&n[8]===0},{id:"stone_sword",name:"Espada de Pedra",category:"Armas",result:u.STONE_SWORD,count:1,gridSize:3,layout:[0,u.COBBLESTONE,0,0,u.COBBLESTONE,0,0,u.STICK,0],desc:"2 Pedregulhos verticais com 1 Graveto embaixo.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;for(let i=0;i<3;i++){const r=n[i]===u.COBBLESTONE&&n[3+i]===u.COBBLESTONE&&n[6+i]===u.STICK,s=n.every((o,a)=>a===i||a===3+i||a===6+i?!0:o===0);if(r&&s)return!0}return!1}},{id:"iron_pickaxe",name:"Picareta de Ferro",category:"Ferramentas",result:u.IRON_PICKAXE,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,0,u.STICK,0,0,u.STICK,0],desc:"3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.",check:(n,e,t)=>e!==3||t!==3?!1:n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[4]===u.STICK&&n[7]===u.STICK&&n[3]===0&&n[5]===0&&n[6]===0&&n[8]===0},{id:"iron_sword",name:"Espada de Ferro",category:"Armas",result:u.IRON_SWORD,count:1,gridSize:3,layout:[0,u.IRON_INGOT,0,0,u.IRON_INGOT,0,0,u.STICK,0],desc:"2 Barras de Ferro verticais com 1 Graveto embaixo.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;for(let i=0;i<3;i++){const r=n[i]===u.IRON_INGOT&&n[3+i]===u.IRON_INGOT&&n[6+i]===u.STICK,s=n.every((o,a)=>a===i||a===3+i||a===6+i?!0:o===0);if(r&&s)return!0}return!1}},{id:"iron_helmet",name:"Capacete de Ferro",category:"Armaduras",result:u.IRON_HELMET,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT,0,0,0],desc:"5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).",check:(n,e,t)=>e!==3||t!==3?!1:n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===0&&n[5]===u.IRON_INGOT&&n[6]===0&&n[7]===0&&n[8]===0},{id:"iron_chestplate",name:"Peitoral de Ferro",category:"Armaduras",result:u.IRON_CHESTPLATE,count:1,gridSize:3,layout:[u.IRON_INGOT,0,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT],desc:"8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).",check:(n,e,t)=>e!==3||t!==3?!1:n[0]===u.IRON_INGOT&&n[1]===0&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===u.IRON_INGOT&&n[5]===u.IRON_INGOT&&n[6]===u.IRON_INGOT&&n[7]===u.IRON_INGOT&&n[8]===u.IRON_INGOT},{id:"iron_leggings",name:"Calças de Ferro",category:"Armaduras",result:u.IRON_LEGGINGS,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT],desc:"7 Barras de Ferro em formato de calças (+5 Defesa).",check:(n,e,t)=>e!==3||t!==3?!1:n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===0&&n[5]===u.IRON_INGOT&&n[6]===u.IRON_INGOT&&n[7]===0&&n[8]===u.IRON_INGOT},{id:"iron_boots",name:"Botas de Ferro",category:"Armaduras",result:u.IRON_BOOTS,count:1,gridSize:3,layout:[u.IRON_INGOT,0,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT,0,0,0],desc:"4 Barras de Ferro em formato de botas (+2 Defesa).",check:(n,e,t)=>e!==3||t!==3?!1:n[0]===u.IRON_INGOT&&n[1]===0&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===0&&n[5]===u.IRON_INGOT&&n[6]===0&&n[7]===0&&n[8]===0},{id:"bow",name:"Arco de Caça",category:"Armas",result:u.BOW,count:1,gridSize:3,layout:[0,u.STICK,u.STRING,u.STICK,0,u.STRING,0,u.STICK,u.STRING],desc:"3 Gravetos e 3 Linhas de Teia na bancada 3×3.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;const i=n.filter(o=>o===u.STICK).length,r=n.filter(o=>o===u.STRING).length,s=n.filter(o=>o!==0&&o!==u.STICK&&o!==u.STRING).length;return i===3&&r===3&&s===0}},{id:"wooden_hoe",name:"Enxada de Madeira",category:"Ferramentas",result:u.WOODEN_HOE,count:1,gridSize:3,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,0,0,u.STICK,0,0,u.STICK,0],desc:"2 Tábuas no topo e 2 Gravetos verticais.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;const i=n[0]===u.WOOD_PLANKS&&n[1]===u.WOOD_PLANKS&&n[4]===u.STICK&&n[7]===u.STICK||n[1]===u.WOOD_PLANKS&&n[2]===u.WOOD_PLANKS&&n[4]===u.STICK&&n[7]===u.STICK,r=n.filter(a=>a===u.STICK).length,s=n.filter(a=>a===u.WOOD_PLANKS).length,o=n.filter(a=>a!==0&&a!==u.STICK&&a!==u.WOOD_PLANKS).length;return i&&r===2&&s===2&&o===0}},{id:"stone_hoe",name:"Enxada de Pedra",category:"Ferramentas",result:u.STONE_HOE,count:1,gridSize:3,layout:[u.COBBLESTONE,u.COBBLESTONE,0,0,u.STICK,0,0,u.STICK,0],desc:"2 Pedregulhos no topo e 2 Gravetos verticais.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;const i=n[0]===u.COBBLESTONE&&n[1]===u.COBBLESTONE&&n[4]===u.STICK&&n[7]===u.STICK||n[1]===u.COBBLESTONE&&n[2]===u.COBBLESTONE&&n[4]===u.STICK&&n[7]===u.STICK,r=n.filter(a=>a===u.STICK).length,s=n.filter(a=>a===u.COBBLESTONE).length,o=n.filter(a=>a!==0&&a!==u.STICK&&a!==u.COBBLESTONE).length;return i&&r===2&&s===2&&o===0}},{id:"iron_hoe",name:"Enxada de Ferro",category:"Ferramentas",result:u.IRON_HOE,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,0,0,u.STICK,0,0,u.STICK,0],desc:"2 Barras de Ferro no topo e 2 Gravetos verticais.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;const i=n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[4]===u.STICK&&n[7]===u.STICK||n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[4]===u.STICK&&n[7]===u.STICK,r=n.filter(a=>a===u.STICK).length,s=n.filter(a=>a===u.IRON_INGOT).length,o=n.filter(a=>a!==0&&a!==u.STICK&&a!==u.IRON_INGOT).length;return i&&r===2&&s===2&&o===0}},{id:"bread",name:"Pão Dourado",category:"Alimentação",result:u.BREAD,count:1,gridSize:3,layout:[0,0,0,u.WHEAT,u.WHEAT,u.WHEAT,0,0,0],desc:"3 Trigos colhidos em linha horizontal (+5 Vida).",check:(n,e,t)=>{if(e!==3||t!==3)return!1;for(let i=0;i<3;i++){const r=i*3,s=i*3+1,o=i*3+2;if(n[r]===u.WHEAT&&n[s]===u.WHEAT&&n[o]===u.WHEAT&&n.every((l,c)=>c===r||c===s||c===o?!0:l===0))return!0}return!1}},{id:"tnt",name:"Bloco de TNT",category:"Explosivos",result:u.TNT,count:1,gridSize:3,layout:[u.GUNPOWDER,u.SAND,u.GUNPOWDER,u.SAND,u.GUNPOWDER,u.SAND,u.GUNPOWDER,u.SAND,u.GUNPOWDER],desc:"5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.",check:(n,e,t)=>{if(e!==3||t!==3)return!1;const i=n.filter(o=>o===u.GUNPOWDER).length,r=n.filter(o=>o===u.SAND).length,s=n.filter(o=>o!==0&&o!==u.GUNPOWDER&&o!==u.SAND).length;return i===5&&r===4&&s===0}}];function Td(n,e,t){for(const i of yd)if(i.check(n,e,t))return{result:i.result,count:i.count,name:i.name};return null}function bd(){Pn||(Pn=document.createElement("div"),Pn.id="crafting-table-modal",Pn.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",Pn.innerHTML=`
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
  `,document.body.appendChild(Pn),document.getElementById("close-table-btn").addEventListener("click",wS),document.getElementById("open-recipe-book-table").addEventListener("click",Rd),Ad(),Bs())}function RS(){Pn||bd(),Pn.style.display="flex",us(pt.CRAFTING_TABLE),Gi(!0),Bs()}function wS(){if(Pn){Pn.style.display="none",oi(pt.CRAFTING_TABLE),Gi(!1);for(let n=0;n<9;n++)xn[n]>0&&(tn(xn[n]),xn[n]=0)}}function Bs(){const n=document.getElementById("table-craft-grid"),e=document.getElementById("table-output-slot"),t=document.getElementById("table-hotbar-grid");if(!n||!e||!t)return;if(n.innerHTML="",xn.forEach((r,s)=>{const o=document.createElement("div");if(o.className="slot w-14 h-14 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all",r>0){const a=Tt(r,38);o.appendChild(a)}o.addEventListener("click",()=>{xn[s]>0&&(tn(xn[s]),xn[s]=0,Ja(),Bs())}),n.appendChild(o)}),e.innerHTML="",An&&An.result>0){const r=Tt(An.result,48);if(e.appendChild(r),An.count>1){const s=document.createElement("span");s.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",s.textContent=An.count,e.appendChild(s)}}e.onclick=()=>{if(An&&An.result>0){for(let r=0;r<An.count;r++)tn(An.result);dr();for(let r=0;r<9;r++)xn[r]=0;Ja(),Bs()}},t.innerHTML="";const i=js();i.forEach((r,s)=>{const o=document.createElement("div");if(o.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all",r>0){const a=Tt(r,30);o.appendChild(a),o.title=`${hr[r]||"Item"} (Clique para colocar na bancada)`,o.addEventListener("click",()=>{const l=xn.findIndex(c=>c===0);l!==-1&&(xn[l]=r,i[s]=0,Ja(),Bs())})}t.appendChild(o)})}function Ja(){An=Td(xn,3,3)}function Ad(){Ln||(Ln=document.createElement("div"),Ln.id="recipe-book-modal",Ln.className="fixed inset-0 z-[200] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-lg select-none",Ln.innerHTML=`
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
  `,document.body.appendChild(Ln),document.getElementById("close-recipe-book-btn").addEventListener("click",IS),CS())}function CS(){const n=document.getElementById("recipe-cards-container");n&&(n.innerHTML="",yd.forEach(e=>{const t=document.createElement("div");t.className="flex items-center justify-between bg-surface-container/60 p-3.5 rounded-xl border border-outline-variant hover:border-primary/50 transition-all";const i=document.createElement("div");i.className="flex items-center gap-3.5 max-w-[340px]";const r=document.createElement("div");r.className="w-12 h-12 rounded-xl bg-surface-container-lowest border-2 border-primary flex items-center justify-center relative shrink-0 shadow-[0_0_8px_rgba(120,220,119,0.3)]";const s=Tt(e.result,36);if(r.appendChild(s),e.count>1){const d=document.createElement("span");d.className="absolute -bottom-1 -right-1 bg-primary text-on-primary font-label-caps text-[10px] font-bold px-1 rounded",d.textContent=e.count,r.appendChild(d)}i.appendChild(r);const o=document.createElement("div");o.innerHTML=`
      <div class="font-headline-lg-mobile text-sm font-bold text-on-surface">${e.name}</div>
      <div class="font-label-caps text-[10px] font-semibold text-primary uppercase mb-0.5">${e.category}</div>
      <div class="font-body-md text-xs text-on-surface-variant leading-snug">${e.desc}</div>
    `,i.appendChild(o);const a=document.createElement("div");a.className="flex flex-col items-center gap-1 shrink-0";const l=document.createElement("span");l.className="font-label-caps text-[9px] font-bold text-on-surface-variant uppercase tracking-wider",l.textContent=`Grade ${e.gridSize}×${e.gridSize}`,a.appendChild(l);const c=document.createElement("div"),f=e.gridSize;c.className=`grid grid-cols-${f} gap-1 bg-surface-container-lowest p-1.5 rounded-lg border border-outline-variant`,c.style.gridTemplateColumns=`repeat(${f}, 28px)`,e.layout.forEach(d=>{const h=document.createElement("div");if(h.className="w-7 h-7 rounded bg-surface-container/80 border border-outline-variant/60 flex items-center justify-center",d>0){const m=Tt(d,22);h.appendChild(m),h.title=hr[d]||""}c.appendChild(h)}),a.appendChild(c),t.appendChild(i),t.appendChild(a),n.appendChild(t)}))}function Rd(){Ln||Ad(),Ln.style.display="flex",us(pt.RECIPE_BOOK)}function IS(){Ln&&(Ln.style.display="none",oi(pt.RECIPE_BOOK))}const jo={[u.IRON_ORE]:{output:u.IRON_INGOT,time:3.5},[u.PORKCHOP]:{output:u.COOKED_PORKCHOP,time:2.5},[u.COBBLESTONE]:{output:u.STONE,time:3}},cc={[u.COAL_ORE]:16,[u.WOOD_LOG]:6,[u.WOOD_PLANKS]:3,[u.STICK]:1.5},ui=new Map;let ln=null,ti=null;function PS(n,e,t){const i=`${n},${e},${t}`;return ui.has(i)||ui.set(i,{x:n,y:e,z:t,inputItem:0,inputCount:0,fuelItem:0,fuelCount:0,outputItem:0,outputCount:0,burnTimeRemaining:0,maxBurnTime:0,cookProgress:0}),ui.get(i)}function LS(n,e,t){ln=`${n},${e},${t}`,PS(n,e,t),ti||US(),ti.style.display="flex",us(pt.FURNACE),Gi(!0),Di()}function NS(){ti&&(ti.style.display="none",ln=null,oi(pt.FURNACE),Gi(!1))}function OS(){return ud(pt.FURNACE)}function DS(n){for(const[e,t]of ui.entries()){const r=t.inputItem>0&&jo[t.inputItem]?jo[t.inputItem]:null;t.burnTimeRemaining>0&&(t.burnTimeRemaining=Math.max(0,t.burnTimeRemaining-n)),r&&(t.outputItem===0||t.outputItem===r.output)?(t.burnTimeRemaining<=0&&t.fuelCount>0&&cc[t.fuelItem]&&(t.maxBurnTime=cc[t.fuelItem],t.burnTimeRemaining=t.maxBurnTime,t.fuelCount--,t.fuelCount<=0&&(t.fuelItem=0)),t.burnTimeRemaining>0?(t.cookProgress+=n,t.cookProgress>=r.time&&(t.cookProgress=0,t.inputCount--,t.inputCount<=0&&(t.inputItem=0),t.outputItem=r.output,t.outputCount=(t.outputCount||0)+1)):t.cookProgress=Math.max(0,t.cookProgress-n*.5)):t.cookProgress=0}OS()&&Di()}function US(){ti=document.createElement("div"),ti.id="furnace-modal",ti.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ti.innerHTML=`
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
  `,document.body.appendChild(ti),document.getElementById("close-furnace-btn").addEventListener("click",NS),document.getElementById("btn-furnace-collect").addEventListener("click",mf),document.getElementById("furnace-output-slot").addEventListener("click",mf),document.getElementById("btn-furnace-stop").addEventListener("click",()=>{if(!ln)return;const n=ui.get(ln);n&&n.inputItem>0&&(tn(n.inputItem),n.inputCount--,n.inputCount<=0&&(n.inputItem=0),Di())}),document.getElementById("furnace-input-slot").addEventListener("click",()=>{if(!ln)return;const n=ui.get(ln);n&&n.inputItem>0&&tn(n.inputItem)&&(n.inputCount--,n.inputCount<=0&&(n.inputItem=0),Di())}),document.getElementById("furnace-fuel-slot").addEventListener("click",()=>{if(!ln)return;const n=ui.get(ln);n&&n.fuelItem>0&&tn(n.fuelItem)&&(n.fuelCount--,n.fuelCount<=0&&(n.fuelItem=0),Di())})}function mf(){if(!ln)return;const n=ui.get(ln);!n||n.outputItem===0||tn(n.outputItem)&&(dr(),n.outputCount--,n.outputCount<=0&&(n.outputItem=0),Di())}function Di(){if(!ln)return;const n=ui.get(ln);if(!n)return;const e=document.getElementById("furnace-input-slot"),t=document.getElementById("furnace-fuel-slot"),i=document.getElementById("furnace-output-slot"),r=document.getElementById("furnace-flame-active"),s=document.getElementById("furnace-progress-bar"),o=document.getElementById("furnace-hotbar-grid");if(!e||!t||!i||!r||!s||!o)return;if(e.innerHTML="",n.inputItem>0){const d=Tt(n.inputItem,48);if(e.appendChild(d),n.inputCount>1){const h=document.createElement("span");h.className="absolute -top-2 -right-2 bg-error text-on-error font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",h.textContent=n.inputCount,e.appendChild(h)}}else{const d=document.createElement("span");d.className="font-label-caps text-[10px] text-on-surface-variant uppercase",d.textContent="INPUT",e.appendChild(d)}if(t.innerHTML="",n.fuelItem>0){const d=Tt(n.fuelItem,48);if(t.appendChild(d),n.fuelCount>1){const h=document.createElement("span");h.className="absolute -top-2 -right-2 bg-error text-on-error font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",h.textContent=n.fuelCount,t.appendChild(h)}}else{const d=document.createElement("span");d.className="font-label-caps text-[10px] text-on-surface-variant uppercase",d.textContent="FUEL",t.appendChild(d)}const a=n.maxBurnTime>0?Math.min(100,Math.round(n.burnTimeRemaining/n.maxBurnTime*100)):0;r.style.height=`${a}%`;const l=n.inputItem>0?jo[n.inputItem]:null,c=l?Math.min(100,Math.round(n.cookProgress/l.time*100)):0;if(s.style.width=`${c}%`,i.innerHTML="",n.outputItem>0){const d=Tt(n.outputItem,64);if(i.appendChild(d),n.outputCount>1){const h=document.createElement("span");h.className="absolute -top-3 -right-3 bg-primary text-on-primary font-label-caps text-sm px-2.5 py-1 rounded shadow-[0_0_10px_rgba(120,220,119,0.8)] font-bold",h.textContent=n.outputCount,i.appendChild(h)}}else{const d=document.createElement("span");d.className="font-label-caps text-[11px] text-primary/70 uppercase",d.textContent="PRODUTO",i.appendChild(d)}o.innerHTML="";const f=js();f.forEach((d,h)=>{const m=document.createElement("div");if(m.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all",d>0){const _=Tt(d,30);m.appendChild(_),m.title=`${hr[d]||"Item"} (Clique para colocar na Fornalha)`,m.addEventListener("click",()=>{jo[d]?(n.inputItem===0||n.inputItem===d)&&(n.inputItem=d,n.inputCount=(n.inputCount||0)+1,f[h]=0,Di()):cc[d]&&(n.fuelItem===0||n.fuelItem===d)&&(n.fuelItem=d,n.fuelCount=(n.fuelCount||0)+1,f[h]=0,Di())})}o.appendChild(m)})}const Ui=new Map;let Zo=null,ni=null;function FS(n,e,t){const i=`${n},${e},${t}`;return Ui.has(i)||Ui.set(i,new Array(27).fill(0)),Ui.get(i)}function BS(n,e,t){const i=`${n},${e},${t}`;return Ui.has(i)?Ui.get(i).filter(s=>s>0):[]}function GS(n,e,t){const i=`${n},${e},${t}`;Ui.has(i)&&Ui.delete(i)}function HS(n,e,t){Zo=`${n},${e},${t}`,FS(n,e,t),ni||VS(),ni.style.display="flex",us(pt.CHEST),Gi(!0),uc()}function kS(){ni&&(ni.style.display="none",Zo=null,oi(pt.CHEST),Gi(!1))}function VS(){ni=document.createElement("div"),ni.id="chest-modal",ni.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ni.innerHTML=`
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
  `,document.body.appendChild(ni),document.getElementById("close-chest-btn").addEventListener("click",kS)}function uc(){if(!Zo)return;const n=Ui.get(Zo);if(!n)return;const e=document.getElementById("chest-grid"),t=document.getElementById("chest-hotbar-grid");if(!e||!t)return;e.innerHTML="",n.forEach((r,s)=>{const o=document.createElement("div");if(o.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${r>0?"border-tertiary/70 shadow-[0_0_8px_rgba(255,180,169,0.2)]":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all`,r>0){const a=Tt(r,32);o.appendChild(a),o.title=`${hr[r]||"Item"} (Clique para retirar)`}o.addEventListener("click",()=>{r>0&&tn(r)&&(n[s]=0,dr(),uc())}),e.appendChild(o)}),t.innerHTML="";const i=js();i.forEach((r,s)=>{const o=document.createElement("div");if(o.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${r>0?"border-primary/60":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all`,r>0){const a=Tt(r,32);o.appendChild(a),o.title=`${hr[r]||"Item"} (Clique para guardar no baú)`,o.addEventListener("click",()=>{const l=n.findIndex(c=>c===0);l!==-1&&(n[l]=r,i[s]=0,dr(),uc())})}t.appendChild(o)})}let fi=null,ar=null,Zt=null,ke=null,yt=u.WOODEN_SWORD,Ws=!1,lr=!1,wn=0,ws={x:NaN,y:NaN,z:NaN},Qa=0;const Dc=new Map,WS=new he(1.002,1.002,1.002),zS=new pv(WS),XS=new sd({color:0,linewidth:2,transparent:!0,opacity:.6}),qS=new he(1.006,1.006,1.006),wd=new hi({color:1973067,wireframe:!0,transparent:!0,opacity:0});function YS(n){fi=n,ar=new fv(zS,XS),ar.visible=!1,fi.add(ar),Zt=new se(qS,wd),Zt.visible=!1,fi.add(Zt),window.addEventListener("mousedown",jS),window.addEventListener("mouseup",ZS),window.addEventListener("blur",()=>{Ws=!1,lr=!1,wn=0,Zt&&(Zt.visible=!1)})}function KS(n=.016){if($S(n),!fs()||Us()){ar.visible=!1,Zt.visible=!1,ke=null,lr=!1,Ws=!1,wn=0;return}const e=Ks();if(!e)return;const t=new O(0,0,-1);t.applyQuaternion(e.quaternion);const i=zx(e.position,t);if(i)if(ke=i,ar.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),ar.visible=!0,(i.hit.x!==ws.x||i.hit.y!==ws.y||i.hit.z!==ws.z)&&(ws={x:i.hit.x,y:i.hit.y,z:i.hit.z},wn=0),Ws&&lr){const r=un(i.hit.x,i.hit.y,i.hit.z);if(r!==u.AIR&&r!==u.WATER){const s=Nx(r),o=Ox(r,yt);if(wn+=n*o/s,Qa+=n,Qa>=.22&&(Qa=0,bv(r),lc(i.hit.x,i.hit.y,i.hit.z,r)),Zt.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),Zt.visible=!0,wd.opacity=$h.clamp(wn*.85,.15,.9),wn>=1){if(Mv(),lc(i.hit.x,i.hit.y,i.hit.z,r),r===u.CHEST&&(BS(i.hit.x,i.hit.y,i.hit.z).forEach(l=>{Gt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l)}),GS(i.hit.x,i.hit.y,i.hit.z)),r===u.GRASS&&Math.random()<.35&&Gt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,u.WHEAT_SEEDS),r===u.WHEAT_STAGE_3)Gt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,u.WHEAT),Gt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,u.WHEAT_SEEDS),Dc.delete(`${i.hit.x},${i.hit.y},${i.hit.z}`);else{const a=gd(r);a>0&&Gt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,a)}Oi(fi,i.hit.x,i.hit.y,i.hit.z,u.AIR),wn=0,lr=!1,Zt.visible=!1}}}else Zt.visible=!1,wn=0;else ke=null,ar.visible=!1,Zt.visible=!1,wn=0,lr=!1}function $S(n){for(const[e,t]of Dc.entries())t.timer+=n,t.timer>=16&&(t.timer=0,t.stage===1?(t.stage=2,Oi(fi,t.x,t.y,t.z,u.WHEAT_STAGE_2)):t.stage===2&&(t.stage=3,Oi(fi,t.x,t.y,t.z,u.WHEAT_STAGE_3)))}function jS(n){if(!fs()||Us())return;const e=Ks();if(!e)return;const t=new O(0,0,-1);if(t.applyQuaternion(e.quaternion),n.button===0){Ws=!0;const i=dS(e.position,t,3.8);if(i){const r=yt===u.IRON_SWORD,s=yt===u.STONE_SWORD,o=yt===u.WOODEN_SWORD,a=yt===u.IRON_PICKAXE||yt===u.STONE_PICKAXE||yt===u.WOODEN_PICKAXE,l=r?7:s?5:o?4:a?3:2;ld(),Nc(i,l,t);return}if(ke){if(un(ke.hit.x,ke.hit.y,ke.hit.z)===u.TNT){hS(ke.hit.x,ke.hit.y,ke.hit.z);return}lr=!0,ws={x:ke.hit.x,y:ke.hit.y,z:ke.hit.z}}}else if(n.button===2){if(n.preventDefault(),yt===u.BOW&&iM(u.ARROW)){el(u.ARROW),mS(e.position,t);return}if(wx(yt)){const i=Px(yt);if(i>0){vM(i),dr(),el(yt);return}}if(ke){const i=un(ke.hit.x,ke.hit.y,ke.hit.z);if(Rx(yt)&&(i===u.GRASS||i===u.DIRT)){Cv(),Oi(fi,ke.hit.x,ke.hit.y,ke.hit.z,u.FARMLAND);return}if(yt===u.WHEAT_SEEDS&&i===u.FARMLAND){const r=ke.hit.y+1;if(r<64&&un(ke.hit.x,r,ke.hit.z)===u.AIR){ef(),Oi(fi,ke.hit.x,r,ke.hit.z,u.WHEAT_STAGE_1),Dc.set(`${ke.hit.x},${r},${ke.hit.z}`,{x:ke.hit.x,y:r,z:ke.hit.z,stage:1,timer:0}),el(u.WHEAT_SEEDS);return}}if(i===u.CRAFTING_TABLE){RS();return}if(i===u.FURNACE||i===u.FURNACE_LIT){LS(ke.hit.x,ke.hit.y,ke.hit.z);return}if(i===u.CHEST){HS(ke.hit.x,ke.hit.y,ke.hit.z);return}if(Ax(yt)){const{prev:r}=ke;r.y>=0&&r.y<64&&un(r.x,r.y,r.z)===u.AIR&&(ef(),Oi(fi,r.x,r.y,r.z,yt))}}}}function ZS(n){n.button===0&&(Ws=!1,lr=!1,wn=0,Zt&&(Zt.visible=!1))}function JS(n){yt=n}function QS(){return yt}const gf=[u.WOODEN_SWORD,u.WOODEN_PICKAXE,u.GRASS,u.DIRT,u.WOOD_LOG,u.COBBLESTONE,u.TORCH,u.WATER,0],Dt=new Array(36).fill(0);for(let n=0;n<gf.length;n++)Dt[n]=gf[n];const Mn=[0,0,0,0];let Uc=0,Rn=null,Nn=null;function Cd(){Nn||(Nn=document.createElement("div"),Nn.id="inventory-modal",Nn.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",Nn.innerHTML=`
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
  `,document.body.appendChild(Nn),document.getElementById("close-inventory-btn").addEventListener("click",Id),document.getElementById("open-recipe-book-inv").addEventListener("click",Rd),window.addEventListener("keydown",n=>{n.code==="KeyE"&&eM()}),Hn())}function eM(){Fc()?Id():tM()}function tM(){Nn||Cd(),Nn.style.display="flex",us(pt.INVENTORY),Gi(!0),Hn()}function Id(){if(Nn){Nn.style.display="none",oi(pt.INVENTORY),Gi(!1);for(let n=0;n<4;n++)an[n]>0&&(tn(an[n]),an[n]=0);is()}}function Fc(){return ud(pt.INVENTORY)}function js(){return Dt.slice(0,9)}function nM(n){Uc=n,is()}function Pd(){let n=0;for(let e=0;e<4;e++)Mn[e]>0&&(n+=Ix(Mn[e]));return n}function tn(n){if(!n||n===0)return!1;for(let e=0;e<9;e++)if(Dt[e]===0)return Dt[e]=n,Hn(),is(),!0;for(let e=9;e<36;e++)if(Dt[e]===0)return Dt[e]=n,Hn(),!0;return!1}function iM(n){return Dt.some(e=>e===n)}function el(n){const e=Dt.findIndex(t=>t===n);return e!==-1?(Dt[e]=0,Hn(),is(),!0):!1}function is(){const n=Dt[Uc]||0;JS(n);for(let e=0;e<9;e++){const t=document.getElementById(`hotbar-slot-${e}`);if(t&&(t.innerHTML="",Dt[e]>0)){const i=Tt(Dt[e],38);t.appendChild(i)}}}function Hn(){const n=document.getElementById("inv-armor-grid"),e=document.getElementById("inv-craft-2x2-grid"),t=document.getElementById("inv-craft-2x2-output"),i=document.getElementById("inv-storage-grid"),r=document.getElementById("inv-hotbar-grid");if(!n||!e||!t||!i||!r)return;n.innerHTML="";const s=["security","checkroom","accessibility","directions_run"],o=["Capacete","Peitoral","Calças","Botas"];for(let a=0;a<4;a++){const l=document.createElement("div");if(l.className="slot w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all",l.title=`Slot de ${o[a]}`,Mn[a]>0){const c=Tt(Mn[a],30);l.appendChild(c)}else{const c=document.createElement("span");c.className="material-symbols-outlined text-on-surface-variant text-base opacity-60",c.textContent=s[a],l.appendChild(c)}l.addEventListener("click",()=>{Mn[a]>0&&tn(Mn[a])&&(Mn[a]=0,Hn())}),n.appendChild(l)}e.innerHTML="";for(let a=0;a<4;a++){const l=document.createElement("div");if(l.className="slot w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all",an[a]>0){const c=Tt(an[a],32);l.appendChild(c)}l.addEventListener("click",()=>{an[a]>0&&(tn(an[a]),an[a]=0,fc(),Hn())}),e.appendChild(l)}if(t.innerHTML="",Rn&&Rn.result>0){const a=Tt(Rn.result,40);if(t.appendChild(a),Rn.count>1){const l=document.createElement("span");l.className="slot-count font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded shadow",l.textContent=Rn.count,t.appendChild(l)}}t.onclick=()=>{if(Rn&&Rn.result>0){for(let a=0;a<Rn.count;a++)tn(Rn.result);dr();for(let a=0;a<4;a++)an[a]=0;fc(),Hn()}},i.innerHTML="";for(let a=9;a<36;a++)_f(a,i);r.innerHTML="";for(let a=0;a<9;a++)_f(a,r,!0,a===Uc)}function _f(n,e,t=!1,i=!1){const r=document.createElement("div");r.className=`slot w-full h-11 md:h-12 rounded-lg bg-surface-container-lowest border ${i?"border-primary shadow-[0_0_10px_rgba(120,220,119,0.5)] active":"border-outline-variant hover:border-primary/80"} flex items-center justify-center cursor-pointer relative transition-all`;const s=Dt[n];if(s>0){const o=Tt(s,34);r.appendChild(o),r.title=hr[s]||"Item"}r.addEventListener("click",()=>{if(s>0&&Cx(s)){let o=-1;if(s===u.IRON_HELMET&&(o=0),s===u.IRON_CHESTPLATE&&(o=1),s===u.IRON_LEGGINGS&&(o=2),s===u.IRON_BOOTS&&(o=3),o!==-1&&Mn[o]===0){Mn[o]=s,Dt[n]=0,dr(),Hn(),is();return}}if(s>0){const o=an.findIndex(a=>a===0);o!==-1&&(an[o]=s,Dt[n]=0,fc(),Hn(),is())}}),e.appendChild(r)}function fc(){Rn=Td(an,2,2)}const _t=.3,Cs=1.8,Jo=1.62,vf=28,rM=8.6,sM=5.8,oM=14,xf=10,aM=3.6;let Ss=0;const mr=20,lM=6,cM=2,uM=5,fM=.5,Sf=3.2;let Fn=null;const ne=new O;let be=new O,Ht=mr,Jn=!1,On=!1,Zn=!1,Is=!1,Ps=0,Ls=!1,Qo=0,ea=0,Co=0,tr=0,Cn=!1,Ms=0,Es=0;const Or=[];let Mf=!1;function dM(){Fn=Ks(),Ht=mr,be.set(0,0,0),On=!1;const n=Lc();ne.set(n.x,n.y,n.z),tr=ne.y,Cn=!1,Fn&&Fn.position.set(ne.x,ne.y+Jo,ne.z)}function Ld(){return Ht}function hM(){return mr}function pM(){return Qo}function mM(){return On}function Hi(){return ne}function gM(){return{onGround:Jn,moving:Ls,inWater:Zn,submerged:Is,isFlying:On}}function rs(n,e=null){if(Ht<=0)return;const t=Pd(),i=Math.min(.8,t*.04),r=Math.max(1,n*(1-i));Ht=Math.max(0,Ht-r),Qo=1,ea=0,Ev(),e&&(be.x+=e.x*5,be.z+=e.z*5,be.y=3.5)}function _M(n){Ht<=0||(Ht=Math.min(mr,Ht+n))}function vM(n){_M(n)}function Ef(){Ht=mr,be.set(0,0,0),Jn=!1,On=!1,Ps=0,ea=0;const n=Lc();ne.set(n.x,n.y,n.z),tr=ne.y,Cn=!1,Fn&&Fn.position.set(ne.x,ne.y+Jo,ne.z)}function xM(n,e,t){return e<0?!0:Pc(un(n,e,t))}function Ki(n,e,t){const i=Math.floor(n-_t+.001),r=Math.floor(n+_t-.001),s=Math.floor(e),o=Math.floor(e+Cs-.001),a=Math.floor(t-_t+.001),l=Math.floor(t+_t-.001);for(let c=s;c<=o;c++)for(let f=a;f<=l;f++)for(let d=i;d<=r;d++)if(xM(d,c,f))return!0;return!1}function yf(n,e,t){return un(n,e,t)===u.WATER}function SM(n){if(Fn||(Fn=Ks()),!Fn)return;const e=fs();Qo=Math.max(0,Qo-n*2),Zn=yf(Math.floor(ne.x),Math.floor(ne.y+.2),Math.floor(ne.z)),Is=yf(Math.floor(ne.x),Math.floor(ne.y+Jo),Math.floor(ne.z));const t=e&&bn("Space"),i=performance.now()/1e3;if(t&&!Mf){for(Es=.15,Or.push(i);Or.length>0&&i-Or[0]>.55;)Or.shift();Or.length>=3&&(On=!On,be.set(0,0,0),Or.length=0,Cn=!1,Sv(On))}Mf=t,Es>0&&(Es-=n),Jn?Ms=.12:Ms=Math.max(0,Ms-n);let r=0,s=0;e&&(bn("KeyW")&&(r+=1),bn("KeyS")&&(r-=1),bn("KeyD")&&(s+=1),bn("KeyA")&&(s-=1));const o=Fn.rotation.y,a=-Math.sin(o),l=-Math.cos(o),c=Math.cos(o),f=-Math.sin(o);let d=0,h=0;if(r!==0||s!==0){d=a*r+c*s,h=l*r+f*s;const m=Math.hypot(d,h);m>.001&&(d/=m,h/=m)}if(Ls=r!==0||s!==0,On){Cn=!1;const m=oM,_=1-Math.exp(-65*n);be.x+=(d*(Ls?m:0)-be.x)*_,be.z+=(h*(Ls?m:0)-be.z)*_;let v=0;e&&(bn("Space")&&(v+=xf),(bn("ShiftLeft")||bn("ShiftRight"))&&(v-=xf)),be.y+=(v-be.y)*_,ne.x+=be.x*n,Ki(ne.x,ne.y,ne.z)&&(be.x>0?ne.x=Math.floor(ne.x+_t)-_t-.001:be.x<0&&(ne.x=Math.floor(ne.x-_t)+1+_t+.001),be.x=0),ne.z+=be.z*n,Ki(ne.x,ne.y,ne.z)&&(be.z>0?ne.z=Math.floor(ne.z+_t)-_t-.001:be.z<0&&(ne.z=Math.floor(ne.z-_t)+1+_t+.001),be.z=0),ne.y+=be.y*n,Ki(ne.x,ne.y,ne.z)&&(be.y>0?ne.y=Math.floor(ne.y+Cs)-Cs-.001:be.y<0&&(ne.y=Math.floor(ne.y)+1),be.y=0)}else{const m=(Jn||Ms>0)&&!Zn;Es>0&&m?(be.y=rM,Jn=!1,Ms=0,Es=0,tr=ne.y,Cn=!1,ad()):Zn&&t&&(be.y=Math.max(be.y,4.5),Cn=!1);const _=Zn?vf*.3:vf;be.y-=_*n;const v=Zn?8:36;be.y<-v&&(be.y=-v),be.y<0?Cn||(Cn=!0,tr=ne.y):(Cn=!1,tr=ne.y);const g=(Is?.7:1)*(Zn?aM:sM);if(Ls){const E=1-Math.exp(-65*n);be.x+=(d*g-be.x)*E,be.z+=(h*g-be.z)*E;const y=Math.hypot(be.x,be.z);if(Jn&&!Zn&&y>1.2&&!On){if(Ss+=n,Ss>=.42){Ss=0;const U=un(Math.floor(ne.x),Math.floor(ne.y-.2),Math.floor(ne.z));Tv(U)}}else Ss=0}else{const E=Math.exp(-14*n);be.x*=E,be.z*=E,Ss=0}const p=(E,y)=>{if(!Jn)return!1;const U=.55;return Ki(ne.x+E,ne.y+U,ne.z+y)?!1:(ne.y+=U,!0)};ne.x+=be.x*n,Ki(ne.x,ne.y,ne.z)&&(p(0,0)||(be.x>0?ne.x=Math.floor(ne.x+_t)-_t-.001:be.x<0&&(ne.x=Math.floor(ne.x-_t)+1+_t+.001),be.x=0)),ne.z+=be.z*n,Ki(ne.x,ne.y,ne.z)&&(p(0,0)||(be.z>0?ne.z=Math.floor(ne.z+_t)-_t-.001:be.z<0&&(ne.z=Math.floor(ne.z-_t)+1+_t+.001),be.z=0));const A=be.y<0;if(ne.y+=be.y*n,Jn=!1,Ki(ne.x,ne.y,ne.z))if(A){Jn=!0;const E=Math.floor(ne.y)+1,y=Math.max(0,tr-E);if(ne.y=E,be.y=0,!Zn&&y>Sf){const U=Math.floor((y-Sf)*1.5);U>0&&rs(U)}Cn=!1,tr=ne.y}else ne.y=Math.floor(ne.y+Cs)-Cs-.001,be.y=0}ne.y<-10&&Ef(),Fn.position.set(ne.x,ne.y+Jo,ne.z),Is&&!On?(Ps+=n,Ps>lM&&rs(cM*n)):Ps=Math.max(0,Ps-n*2.5),Ht>0&&Ht<mr&&!Is&&(ea+=n,ea>uM&&(Ht=Math.min(mr,Ht+fM*n))),Ht<=0?(Co+=n,e&&bn("Space")&&Co>.8&&(Ef(),Co=0)):Co=0}const Tf=document.getElementById("debug-info");let Ri=null,tl=0,Io=0,nl=60;const MM={[it.PLAINS]:"Planície Florida",[it.FOREST]:"Floresta Densa",[it.DESERT]:"Deserto de Dunas",[it.SNOWY_MOUNTAINS]:"Picos Nevados",[it.OCEAN]:"Costa / Oceano"};function EM(){if(!Ri){Ri=document.createElement("div"),Ri.id="fly-badge",Object.assign(Ri.style,{position:"absolute",top:"58px",left:"50%",transform:"translateX(-50%)",padding:"4px 14px",borderRadius:"20px",background:"linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))",border:"1px solid rgba(255,255,255,0.4)",boxShadow:"0 0 15px rgba(59,130,246,0.6)",color:"#ffffff",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase",pointerEvents:"none",zIndex:"25",display:"none",backdropFilter:"blur(4px)",animation:"pulse 1.8s infinite"}),Ri.innerHTML='⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';const n=document.getElementById("hud");n&&n.appendChild(Ri)}}function yM(n,e){if(EM(),tl++,Io+=n,Io>=.5&&(nl=Math.round(tl/Io),tl=0,Io=0),Tf&&e.position){const t=e.position,i=ns(Math.floor(t.x),Math.floor(t.z)),r=MM[i]||"Desconhecido",s=eS(),a=fa()?"☀️":"🌙";Tf.innerHTML=[`<div style="display:flex;justify-content:space-between;gap:24px">
         <span style="color:#becab9">FPS</span>
         <span style="color:${nl>=50?"#78dc77":"#f87171"}">${nl}</span>
       </div>`,`<div style="display:flex;justify-content:space-between;gap:24px">
         <span style="color:#becab9">XYZ</span>
         <span style="color:#dee4d9">${t.x.toFixed(0)}, ${t.y.toFixed(0)}, ${t.z.toFixed(0)}</span>
       </div>`,`<div style="display:flex;justify-content:space-between;gap:24px">
         <span style="color:#becab9">BIOME</span>
         <span style="color:#dee4d9">${r.toUpperCase()}</span>
       </div>`,`<div style="display:flex;justify-content:space-between;gap:24px">
         <span style="color:#becab9">TIME</span>
         <span style="color:#dee4d9">${s} ${a}</span>
       </div>`].join("")}Ri&&(Ri.style.display=mM()?"block":"none")}let ta=0,Fr=null,dc=[],ii=null,bf=!1;function TM(){const n=document.getElementById("hud");Fr=document.createElement("div"),Fr.id="hotbar-frame",Fr.style.cssText=`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
    padding: 4px;
    border-radius: 10px;
    background: rgba(27, 33, 26, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid #3f4a3c;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4);
    pointer-events: none;
    z-index: 20;
  `;for(let e=0;e<9;e++){const t=document.createElement("div");t.className="hotbar-slot",t.dataset.index=e,t.style.cssText=`
      width: 52px;
      height: 52px;
      border-radius: 7px;
      border: 2px solid #3f4a3c;
      background: rgba(48, 54, 46, 0.4);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 70% 70%;
      position: relative;
      transition: border-color 0.15s, transform 0.12s, box-shadow 0.15s;
      cursor: pointer;
      overflow: hidden;
    `;const i=document.createElement("span");i.className="slot-num",i.style.cssText=`
      position: absolute; top: 2px; left: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px; font-weight: 600;
      color: rgba(199,207,200,0.6);
      line-height: 1; letter-spacing: 0.05em;
      pointer-events: none;
    `,i.textContent=e+1,t.appendChild(i);const r=document.createElement("span");r.className="slot-count",r.style.cssText=`
      position: absolute; bottom: 2px; right: 3px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px; font-weight: 700;
      color: #dee4d9;
      text-shadow: 0 1px 3px rgba(0,0,0,0.9);
      line-height: 1;
      display: none;
    `,t.appendChild(r),dc.push(t),Fr.appendChild(t)}n.appendChild(Fr),ii=document.createElement("div"),ii.id="hotbar-name",ii.style.cssText=`
    position: absolute;
    bottom: 76px;
    left: 50%;
    transform: translateX(-50%);
    color: #dee4d9;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 3px 14px;
    border-radius: 12px;
    background: rgba(15, 21, 14, 0.75);
    border: 1px solid #3f4a3c;
    backdrop-filter: blur(6px);
    pointer-events: none;
    z-index: 20;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.25s;
  `,n.appendChild(ii),Bc()}function bM(){if(!Fc()){for(let n=0;n<9;n++)bn(`Digit${n+1}`)&&Nd(n);bf||(bf=!0,document.addEventListener("wheel",AM,{passive:!1})),Bc()}}let Po=0;function AM(n){if(!(!fs()||Fc())&&(n.preventDefault(),Po+=Math.sign(n.deltaY),Math.abs(Po)>=1)){const e=Po>0?1:-1;Po=0,Nd((ta+e+9)%9)}}function Nd(n){ta=n,nM(n),Bc()}let Af=null;function Bc(){if(!Fr)return;const n=js();for(let e=0;e<dc.length;e++){const t=dc[e],i=e===ta,r=n[e]||0;if(i?(t.style.borderColor="#78dc77",t.style.borderWidth="2px",t.style.transform="scale(1.1) translateY(-2px)",t.style.boxShadow="0 0 8px rgba(120,220,119,0.8), inset 0 0 8px rgba(120,220,119,0.4), 0 4px 12px rgba(0,0,0,0.6)",t.style.background="rgba(120,220,119,0.1)",t.style.zIndex="2",t.querySelector(".slot-num").style.color="rgba(120,220,119,0.7)"):(t.style.borderColor="#3f4a3c",t.style.borderWidth="1px",t.style.transform="scale(1)",t.style.boxShadow="none",t.style.background=r>0?"rgba(48,54,46,0.4)":"rgba(48,54,46,0.2)",t.style.zIndex="1",t.querySelector(".slot-num").style.color="rgba(199,207,200,0.5)"),r>0){const s=Tt(r,38);s&&(t.style.backgroundImage=`url(${s.toDataURL()})`);const o=t.querySelector(".slot-count");o&&(o.style.display="none")}else t.style.backgroundImage="none"}if(ii){const e=n[ta]||0,t=hr[e]||"";ii.textContent=t.toUpperCase(),t?(ii.style.opacity="1",clearTimeout(Af),Af=setTimeout(()=>{ii.style.opacity="0"},2200)):ii.style.opacity="0"}}let vn=[],ko=[],hc=[],Vr=null,nr=null,RM=20;function wM(){const n=document.getElementById("hud");Vr=document.createElement("div"),Vr.id="damage-vignette",Object.assign(Vr.style,{position:"absolute",inset:"0",background:"radial-gradient(ellipse at center, transparent 40%, rgba(239,68,68,0.6) 100%)",pointerEvents:"none",zIndex:"15",transition:"opacity 0.15s",opacity:"0"}),n.appendChild(Vr);const e=document.createElement("div");e.id="status-wrapper",Object.assign(e.style,{position:"absolute",bottom:"82px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:"3px",alignItems:"flex-start",pointerEvents:"none",zIndex:"20",width:"510px",maxWidth:"95vw"});const t=document.createElement("div");t.id="armor-bar",Object.assign(t.style,{display:"flex",gap:"2px",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.8))"});for(let a=0;a<10;a++){const l=document.createElement("span");l.textContent="🛡️",Object.assign(l.style,{fontSize:"16px",lineHeight:"1",opacity:"0",transition:"opacity 0.2s"}),hc.push(l),t.appendChild(l)}e.appendChild(t);const i=document.createElement("div");Object.assign(i.style,{display:"flex",justifyContent:"space-between",width:"100%"});const r=document.createElement("div");r.id="health-bar",Object.assign(r.style,{display:"flex",gap:"2px",filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.9))"});const s=hM()/2;for(let a=0;a<s;a++){const l=document.createElement("span");l.className="heart full",l.textContent="♥",Object.assign(l.style,{fontSize:"18px",lineHeight:"1",color:"#ef4444",transition:"color 0.1s"}),vn.push(l),r.appendChild(l)}i.appendChild(r);const o=document.createElement("div");o.id="hunger-bar",Object.assign(o.style,{display:"flex",flexDirection:"row-reverse",gap:"2px",filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.9))"});for(let a=0;a<10;a++){const l=document.createElement("span");l.textContent="🍗",Object.assign(l.style,{fontSize:"16px",lineHeight:"1",opacity:"1",transition:"opacity 0.15s"}),ko.push(l),o.appendChild(l)}i.appendChild(o),e.appendChild(i),n.appendChild(e),nr=document.createElement("div"),nr.id="death-overlay",nr.innerHTML='<div class="death-title">☠ VOCÊ MORREU</div><div class="death-hint">Pressione ESPAÇO para renascer</div>',nr.style.display="none",n.appendChild(nr)}function CM(){const n=Ld();for(let i=0;i<vn.length;i++){const r=n-i*2;r>=2?(vn[i].style.color="#ef4444",vn[i].style.opacity="1",vn[i].textContent="♥"):r===1?(vn[i].style.color="#f97316",vn[i].style.opacity="1",vn[i].textContent="♥"):(vn[i].style.color="rgba(255,255,255,0.18)",vn[i].style.opacity="0.7",vn[i].textContent="♡")}const e=Pd(),t=Math.floor(e/2);for(let i=0;i<hc.length;i++)hc[i].style.opacity=i<t?"1":"0";for(let i=0;i<ko.length;i++){const r=RM-i*2;ko[i].style.opacity=r>0?"1":"0.2",ko[i].style.filter=r>0?"":"grayscale(1)"}Vr&&(Vr.style.opacity=pM()*.75),nr&&(nr.style.display=n<=0?"flex":"none")}const il=new Map;function rl(n=14412542){const e=new Ot,t=new Ve({color:n,depthTest:!0}),i=new se(new he(.06,.48,.025),t);i.position.set(0,.24,0),e.add(i);const r=new Ve({color:4674921,depthTest:!0}),s=new se(new he(.2,.035,.045),r);s.position.set(0,.02,0),e.add(s);const o=new Ve({color:8736014,depthTest:!0}),a=new se(new he(.038,.12,.038),o);return a.position.set(0,-.06,0),e.add(a),e}function sl(n=9741240){const e=new Ot,t=new Ve({color:8736014,depthTest:!0}),i=new se(new he(.04,.5,.04),t);i.position.set(0,.1,0),e.add(i);const r=new Ve({color:n,depthTest:!0}),s=new se(new he(.32,.06,.05),r);return s.position.set(0,.32,0),e.add(s),e}function ol(n=9741240){const e=new Ot,t=new Ve({color:8736014,depthTest:!0}),i=new se(new he(.04,.48,.04),t);i.position.set(0,.1,0),e.add(i);const r=new Ve({color:n,depthTest:!0}),s=new se(new he(.18,.06,.05),r);return s.position.set(.06,.32,0),e.add(s),e}function IM(){const n=new Ot,e=new Ve({color:7877903,depthTest:!0}),t=new hi({color:16317180,depthTest:!0}),i=new se(new he(.035,.26,.035),e);i.position.set(.06,.14,0),i.rotation.z=-.35,n.add(i);const r=new se(new he(.035,.26,.035),e);r.position.set(.06,-.14,0),r.rotation.z=.35,n.add(r);const s=new se(new he(.045,.1,.045),e);s.position.set(.11,0,0),n.add(s);const o=new se(new he(.012,.48,.012),t);return o.position.set(0,0,0),n.add(o),n}function PM(n,e=.22){if(n===u.IRON_SWORD)return rl(14412542);if(n===u.STONE_SWORD)return rl(9741240);if(n===u.WOODEN_SWORD)return rl(11817737);if(n===u.IRON_PICKAXE)return sl(14412542);if(n===u.STONE_PICKAXE)return sl(6583435);if(n===u.WOODEN_PICKAXE)return sl(11817737);if(n===u.IRON_HOE)return ol(14412542);if(n===u.STONE_HOE)return ol(6583435);if(n===u.WOODEN_HOE)return ol(11817737);if(n===u.BOW)return IM();if(n===u.BREAD){const c=new Ve({color:11817737,depthTest:!0});return new se(new he(e*.9,e*.45,e*.6),c)}if(n===u.WHEAT){const c=new Ve({color:15381256,depthTest:!0});return new se(new he(e*.35,e*.9,e*.35),c)}if(n===u.PORKCHOP){const c=new Ve({color:16020150,depthTest:!0});return new se(new he(e,e*.4,e*.8),c)}if(n===u.COOKED_PORKCHOP){const c=new Ve({color:10105874,depthTest:!0});return new se(new he(e,e*.4,e*.8),c)}if(n===u.ROTTEN_FLESH){const c=new Ve({color:8702998,depthTest:!0});return new se(new he(e,e*.4,e*.8),c)}const t=`${n}:${e}`;if(il.has(t))return il.get(t);const i=ca[n];if(!i)return null;const r=new he(e,e,e),s=r.attributes.uv.array,o=[i.side,i.side,i.top,i.bottom,i.side,i.side];for(let c=0;c<6;c++){const f=Ic(o[c]),d=c*8;s[d]=f.uMin,s[d+1]=f.vMax,s[d+2]=f.uMax,s[d+3]=f.vMax,s[d+4]=f.uMin,s[d+5]=f.vMin,s[d+6]=f.uMax,s[d+7]=f.vMin}r.attributes.uv.needsUpdate=!0,r.computeVertexNormals();const a=new Ve({map:la(),depthTest:!0}),l=new se(r,a);return il.set(t,l),l}const Od=.38,Dd=-.28,Ud=-.46,Fd=-.32,Bd=.35,Gd=-.12;let jt=null,al=null,ll=null,$n=null,Br=-1,Ns=1,LM=5.6,$i=0;function NM(){const n=Ks();if(!n)return;jt=new Ot;const e=new Ve({color:13011801,depthTest:!0}),t=new Ve({color:43176,depthTest:!0});al=new se(new he(.1,.1,.34),e),al.position.set(0,0,.1),jt.add(al),ll=new se(new he(.108,.108,.14),t),ll.position.set(0,0,.22),jt.add(ll),Hd(),jt.position.set(Od,Dd,Ud),jt.rotation.set(Fd,Bd,Gd),jt.renderOrder=999,n.add(jt),document.addEventListener("mousedown",OM)}function OM(n){fs()&&(n.button===0||n.button===2)&&(Ns=0)}function Hd(){const n=QS();if(n!==Br&&(Br=n,$n&&(jt.remove($n),$n=null),Br>0)){const e=PM(Br,.22);e&&($n=e,md(Br)?($n.position.set(-.02,.14,-.22),$n.rotation.set(.2,.3,-.4)):($n.position.set(-.02,.08,-.16),$n.rotation.set(.35,.65,-.2)),jt.add($n))}}function DM(n,e){if(!jt)return;const t=fs();if(jt.visible=t,!t)return;Hd();let i=0,r=0,s=0,o=0,a=0;if(Ns<1){const d=md(Br)?6.2:LM;Ns=Math.min(1,Ns+n*d);const h=Math.sin(Ns*Math.PI);i=-h*1.05,r=h*.6,s=-h*.4,o=-h*.09,a=-h*.14}const l=gM();let c=0,f=0;l.onGround&&l.moving?($i+=n*10,c=Math.cos($i*.5)*.025,f=Math.abs(Math.sin($i))*.035):l.isFlying&&l.moving?($i+=n*6,c=Math.cos($i*.5)*.015,f=Math.sin($i)*.015):$i=0,jt.position.set(Od+c,Dd+f+o,Ud+a),jt.rotation.set(Fd+i,Bd+r,Gd+s)}const Os={SUNNY:"sunny",RAIN:"rain"};let cl=Os.SUNNY,ul=120+Math.random()*60,ir=null,Gs=null;const pc=800;function UM(n){Gs=new dn;const e=new Float32Array(pc*3);for(let i=0;i<pc*3;i+=3)e[i]=(Math.random()-.5)*40,e[i+1]=Math.random()*25,e[i+2]=(Math.random()-.5)*40;Gs.setAttribute("position",new yn(e,3));const t=new od({color:9684477,size:.12,transparent:!0,opacity:0});ir=new dv(Gs,t),n.add(ir)}function FM(n,e){if(ul-=n,ul<=0&&(ul=90+Math.random()*120,cl=cl===Os.SUNNY?Os.RAIN:Os.SUNNY),ir&&e){ir.position.set(e.x,e.y,e.z);const i=cl!==Os.SUNNY?.65:0;if(ir.material.opacity+=(i-ir.material.opacity)*n*2,ir.material.opacity>.01){const r=Gs.attributes.position.array;for(let s=1;s<pc*3;s+=3)r[s]-=32*n,r[s]<-5&&(r[s]=20+Math.random()*5);Gs.attributes.position.needsUpdate=!0}}}const kd="voxelcraft_world_save_v03";function BM(){try{const n=Hi(),e=js(),t=Ld(),i={timestamp:Date.now(),player:{x:n.x,y:n.y,z:n.z,health:t,hotbar:e,armor:[...Mn]}};localStorage.setItem(kd,JSON.stringify(i))}catch(n){console.warn("Could not save world data:",n)}}function GM(){try{const n=localStorage.getItem(kd);if(!n)return!1;const e=JSON.parse(n);if(!e||!e.player)return!1;const t=Hi();if(t&&e.player.x!==void 0&&t.set(e.player.x,e.player.y,e.player.z),e.player.armor)for(let i=0;i<4;i++)Mn[i]=e.player.armor[i]||0;return!0}catch(n){return console.warn("Could not load world data:",n),!1}}Xd(document);console.log("[VoxelCraft] Building texture atlas...");bx();const Rf=Gv(),fn=Hv();Qx(fn,kv());UM(fn);Kx(fn);nS(fn);console.log("[VoxelCraft] Generating world biomes & 3D caves...");Wx(fn);const xt=Lc(),Ii=Uv(window.innerWidth/window.innerHeight,xt);fn.add(Ii);Wv(Ii);Fv(hd());Ov(hd());fS(fn);Un(We.PIG,xt.x+4,xt.y,xt.z+4);Un(We.ZOMBIE,xt.x+14,xt.y,xt.z+12);Un(We.SKELETON,xt.x-12,xt.y,xt.z+10);Un(We.SPIDER,xt.x+8,xt.y,xt.z-14);Un(We.CREEPER,xt.x-8,xt.y,xt.z-12);YS(fn);Cd();bd();TM();dM();wM();NM();GM();console.log(`[VoxelCraft v0.4.0] Ready! Spawn at (${xt.x}, ${xt.y}, ${xt.z})`);let fl=0;function HM(n,e){if(Pv()){df(Ii.position,fn),hf(n,fn,Ii,Rf);return}Lv()||(SM(n),df(Ii.position,fn),hf(n,fn,Ii,Rf),FM(n,Hi()),DS(n),vS(n),iS(n,e),$x(n),KS(n),bM(),CM(),DM(n),yM(n,{position:Ii.position}),fl+=n,fl>=30&&(fl=0,BM()))}function kM(){Vv(Ii)}Bv(HM,kM);
