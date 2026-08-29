(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ra=new Set;function lp(t=document){t.addEventListener("keydown",e=>{Ra.add(e.code)}),t.addEventListener("keyup",e=>{Ra.delete(e.code)}),t.addEventListener("contextmenu",e=>{document.pointerLockElement&&e.preventDefault()}),window.addEventListener("blur",()=>{Ra.clear()})}function Xn(t){return Ra.has(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gu="170",cp=0,Ku=1,up=2,Ld=1,fp=2,xi=3,sr=0,sn=1,Un=2,er=0,Lo=1,Yu=2,$u=3,Zu=4,dp=5,yr=100,hp=101,pp=102,mp=103,gp=104,_p=200,vp=201,xp=202,Sp=203,mc=204,gc=205,Mp=206,Ep=207,yp=208,Tp=209,Ap=210,bp=211,wp=212,Rp=213,Cp=214,_c=0,vc=1,xc=2,Go=3,Sc=4,Mc=5,Ec=6,yc=7,_u=0,Ip=1,Op=2,tr=0,Dp=1,Np=2,Lp=3,Pp=4,Up=5,Fp=6,Bp=7,Pd=300,Ho=301,ko=302,Tc=303,Ac=304,nl=306,bc=1e3,Or=1001,wc=1002,gn=1003,Gp=1004,$s=1005,ri=1006,gl=1007,Dr=1008,Ni=1009,Ud=1010,Fd=1011,Ls=1012,vu=1013,eo=1014,Ri=1015,Hs=1016,xu=1017,Su=1018,Vo=1020,Bd=35902,Gd=1021,Hd=1022,Bn=1023,kd=1024,Vd=1025,Po=1026,Wo=1027,Wd=1028,Mu=1029,zd=1030,Eu=1031,yu=1033,Ca=33776,Ia=33777,Oa=33778,Da=33779,Rc=35840,Cc=35841,Ic=35842,Oc=35843,Dc=36196,Nc=37492,Lc=37496,Pc=37808,Uc=37809,Fc=37810,Bc=37811,Gc=37812,Hc=37813,kc=37814,Vc=37815,Wc=37816,zc=37817,Xc=37818,qc=37819,Kc=37820,Yc=37821,Na=36492,$c=36494,Zc=36495,Xd=36283,jc=36284,Qc=36285,Jc=36286,Hp=3200,kp=3201,Tu=0,Vp=1,Qi="",dn="srgb",$o="srgb-linear",il="linear",ot="srgb",oo=7680,ju=519,Wp=512,zp=513,Xp=514,qd=515,qp=516,Kp=517,Yp=518,$p=519,Qu=35044,Ju="300 es",Ci=2e3,Ha=2001;class Zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ef=1234567;const Uo=Math.PI/180,Ps=180/Math.PI;function jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Au(t,e){return(t%e+e)%e}function Zp(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function jp(t,e,n){return t!==e?(n-t)/(e-t):0}function Ts(t,e,n){return(1-n)*t+n*e}function Qp(t,e,n,i){return Ts(t,e,1-Math.exp(-n*i))}function Jp(t,e=1){return e-Math.abs(Au(t,e*2)-e)}function e0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function t0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function n0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function i0(t,e){return t+Math.random()*(e-t)}function r0(t){return t*(.5-Math.random())}function o0(t){t!==void 0&&(ef=t);let e=ef+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(t){return t*Uo}function a0(t){return t*Ps}function l0(t){return(t&t-1)===0&&t!==0}function c0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function u0(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function f0(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),c=s(n/2),u=o((e+i)/2),d=s((e+i)/2),h=o((e-i)/2),f=s((e-i)/2),p=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*d,c*h,c*f,a*u);break;case"YZY":t.set(c*f,a*d,c*h,a*u);break;case"ZXZ":t.set(c*h,c*f,a*d,a*u);break;case"XZX":t.set(a*d,c*_,c*p,a*u);break;case"YXY":t.set(c*p,a*d,c*_,a*u);break;case"ZYZ":t.set(c*_,c*p,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const La={DEG2RAD:Uo,RAD2DEG:Ps,generateUUID:jo,clamp:Yt,euclideanModulo:Au,mapLinear:Zp,inverseLerp:jp,lerp:Ts,damp:Qp,pingpong:Jp,smoothstep:e0,smootherstep:t0,randInt:n0,randFloat:i0,randFloatSpread:r0,seededRandom:o0,degToRad:s0,radToDeg:a0,isPowerOfTwo:l0,ceilPowerOfTwo:c0,floorPowerOfTwo:u0,setQuaternionFromProperEuler:f0,normalize:Wt,denormalize:yo};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,o,s,a,c,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,c,u)}set(e,n,i,r,o,s,a,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=c,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],c=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],v=r[0],g=r[3],m=r[6],A=r[1],E=r[4],M=r[7],N=r[2],R=r[5],w=r[8];return o[0]=s*v+a*A+c*N,o[3]=s*g+a*E+c*R,o[6]=s*m+a*M+c*w,o[1]=u*v+d*A+h*N,o[4]=u*g+d*E+h*R,o[7]=u*m+d*M+h*w,o[2]=f*v+p*A+_*N,o[5]=f*g+p*E+_*R,o[8]=f*m+p*M+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*c+r*o*u-r*s*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8],h=d*s-a*u,f=a*c-d*o,p=u*o-s*c,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*u-d*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(d*n-r*c)*v,e[5]=(r*o-a*n)*v,e[6]=p*v,e[7]=(i*c-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*s+u*a)+s+e,-r*u,r*c,-r*(-u*s+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_l.makeScale(e,n)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,n){return this.premultiply(_l.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new ke;function Kd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ka(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function d0(){const t=ka("canvas");return t.style.display="block",t}const tf={};function gs(t){t in tf||(tf[t]=!0,console.warn(t))}function h0(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function p0(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m0(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ot&&(t.r=Di(t.r),t.g=Di(t.g),t.b=Di(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(t.r=Fo(t.r),t.g=Fo(t.g),t.b=Fo(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Qi?il:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const nf=[.64,.33,.3,.6,.15,.06],rf=[.2126,.7152,.0722],of=[.3127,.329],sf=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[$o]:{primaries:nf,whitePoint:of,transfer:il,toXYZ:sf,fromXYZ:af,luminanceCoefficients:rf,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:nf,whitePoint:of,transfer:ot,toXYZ:sf,fromXYZ:af,luminanceCoefficients:rf,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}});let so;class g0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{so===void 0&&(so=ka("canvas")),so.width=e.width,so.height=e.height;const i=so.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=so}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ka("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Di(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class Yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vl(r[s].image)):o.push(vl(r[s]))}else o=vl(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function vl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?g0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v0=0;class Zt extends Zo{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Or,r=Or,o=ri,s=Dr,a=Bn,c=Ni,u=Zt.DEFAULT_ANISOTROPY,d=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=jo(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Pd;Zt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],p=c[5],_=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,M=(p+1)/2,N=(m+1)/2,R=(d+f)/4,w=(h+v)/4,O=(_+g)/4;return E>M&&E>N?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=R/i,o=w/i):M>N?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=R/r,o=O/r):N<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),i=w/o,r=O/o),this.set(i,r,o,n),this}let A=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(h-v)/A,this.z=(f-d)/A,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends Zo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Yd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends x0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $d extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S0 extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let c=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=o[s+0],p=o[s+1],_=o[s+2],v=o[s+3];if(a===0){e[n+0]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(h!==v||c!==f||u!==p||d!==_){let g=1-a;const m=c*f+u*p+d*_+h*v,A=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const N=Math.sqrt(E),R=Math.atan2(N,m*A);g=Math.sin(g*R)/N,a=Math.sin(a*R)/N}const M=a*A;if(c=c*g+f*M,u=u*g+p*M,d=d*g+_*M,h=h*g+v*M,g===1-a){const N=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=N,u*=N,d*=N,h*=N}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],c=i[r+1],u=i[r+2],d=i[r+3],h=o[s],f=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+d*h+c*p-u*f,e[n+1]=c*_+d*f+u*h-a*p,e[n+2]=u*_+d*p+a*f-c*h,e[n+3]=d*_-a*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,u=a(i/2),d=a(r/2),h=a(o/2),f=c(i/2),p=c(r/2),_=c(o/2);switch(s){case"XYZ":this._x=f*d*h+u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h+f*p*_;break;case"YZX":this._x=f*d*h+u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h-f*p*_;break;case"XZY":this._x=f*d*h-u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],c=n[9],u=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*c,this._y=r*d+s*c+o*a-i*u,this._z=o*d+s*u+i*c-r*a,this._w=s*d-i*a-r*c-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,u=2*(s*r-a*i),d=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+c*u+s*h-a*d,this.y=i+c*d+a*u-o*h,this.z=r+c*h+o*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,c=n.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new I,lf=new ks;class Vs{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,wn):wn.fromBufferAttribute(o,s),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),js.subVectors(this.max,rs),ao.subVectors(e.a,rs),lo.subVectors(e.b,rs),co.subVectors(e.c,rs),Fi.subVectors(lo,ao),Bi.subVectors(co,lo),ur.subVectors(ao,co);let n=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-ur.z,ur.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,ur.z,0,-ur.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-ur.y,ur.x,0];return!Sl(n,ao,lo,co,js)||(n=[1,0,0,0,1,0,0,0,1],!Sl(n,ao,lo,co,js))?!1:(Qs.crossVectors(Fi,Bi),n=[Qs.x,Qs.y,Qs.z],Sl(n,ao,lo,co,js))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,Zs=new Vs,ao=new I,lo=new I,co=new I,Fi=new I,Bi=new I,ur=new I,rs=new I,js=new I,Qs=new I,fr=new I;function Sl(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){fr.fromArray(t,o);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),c=e.dot(fr),u=n.dot(fr),d=i.dot(fr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}const M0=new Vs,os=new I,Ml=new I;class Ws{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):M0.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const n=os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Ml)),this.expandByPoint(os.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new I,El=new I,Js=new I,Gi=new I,yl=new I,ea=new I,Tl=new I;class bu{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){El.copy(e).add(n).multiplyScalar(.5),Js.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(El);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Js),a=Gi.dot(this.direction),c=-Gi.dot(Js),u=Gi.lengthSq(),d=Math.abs(1-s*s);let h,f,p,_;if(d>0)if(h=s*c-a,f=s*a-c,_=o*d,h>=0)if(f>=-_)if(f<=_){const v=1/d;h*=v,f*=v,p=h*(h+s*f+2*a)+f*(s*h+f+2*c)+u}else f=o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*c)+u;else f=-o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*c)+u;else f<=-_?(h=Math.max(0,-(-s*o+a)),f=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+u):f<=_?(h=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+u):(h=Math.max(0,-(s*o+a)),f=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+u);else f=s>0?-o:o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(El).addScaledVector(Js,f),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(o=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(o=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,o){yl.subVectors(n,e),ea.subVectors(i,e),Tl.crossVectors(yl,ea);let s=this.direction.dot(Tl),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const c=a*this.direction.dot(ea.crossVectors(Gi,ea));if(c<0)return null;const u=a*this.direction.dot(yl.cross(Gi));if(u<0||c+u>s)return null;const d=-a*Gi.dot(Tl);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,o,s,a,c,u,d,h,f,p,_,v,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,c,u,d,h,f,p,_,v,g)}set(e,n,i,r,o,s,a,c,u,d,h,f,p,_,v,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=c,m[2]=u,m[6]=d,m[10]=h,m[14]=f,m[3]=p,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/uo.setFromMatrixColumn(e,0).length(),o=1/uo.setFromMatrixColumn(e,1).length(),s=1/uo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=s*d,p=s*h,_=a*d,v=a*h;n[0]=c*d,n[4]=-c*h,n[8]=u,n[1]=p+_*u,n[5]=f-v*u,n[9]=-a*c,n[2]=v-f*u,n[6]=_+p*u,n[10]=s*c}else if(e.order==="YXZ"){const f=c*d,p=c*h,_=u*d,v=u*h;n[0]=f+v*a,n[4]=_*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*d,n[9]=-a,n[2]=p*a-_,n[6]=v+f*a,n[10]=s*c}else if(e.order==="ZXY"){const f=c*d,p=c*h,_=u*d,v=u*h;n[0]=f-v*a,n[4]=-s*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*d,n[9]=v-f*a,n[2]=-s*u,n[6]=a,n[10]=s*c}else if(e.order==="ZYX"){const f=s*d,p=s*h,_=a*d,v=a*h;n[0]=c*d,n[4]=_*u-p,n[8]=f*u+v,n[1]=c*h,n[5]=v*u+f,n[9]=p*u-_,n[2]=-u,n[6]=a*c,n[10]=s*c}else if(e.order==="YZX"){const f=s*c,p=s*u,_=a*c,v=a*u;n[0]=c*d,n[4]=v-f*h,n[8]=_*h+p,n[1]=h,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*h+_,n[10]=f-v*h}else if(e.order==="XZY"){const f=s*c,p=s*u,_=a*c,v=a*u;n[0]=c*d,n[4]=-h,n[8]=u*d,n[1]=f*h+v,n[5]=s*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*d,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,y0)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Hi.crossVectors(i,ln),Hi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Hi.crossVectors(i,ln)),Hi.normalize(),ta.crossVectors(ln,Hi),r[0]=Hi.x,r[4]=ta.x,r[8]=ln.x,r[1]=Hi.y,r[5]=ta.y,r[9]=ln.y,r[2]=Hi.z,r[6]=ta.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],c=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],v=i[6],g=i[10],m=i[14],A=i[3],E=i[7],M=i[11],N=i[15],R=r[0],w=r[4],O=r[8],T=r[12],S=r[1],C=r[5],H=r[9],F=r[13],Y=r[2],K=r[6],q=r[10],J=r[14],z=r[3],oe=r[7],ae=r[11],ve=r[15];return o[0]=s*R+a*S+c*Y+u*z,o[4]=s*w+a*C+c*K+u*oe,o[8]=s*O+a*H+c*q+u*ae,o[12]=s*T+a*F+c*J+u*ve,o[1]=d*R+h*S+f*Y+p*z,o[5]=d*w+h*C+f*K+p*oe,o[9]=d*O+h*H+f*q+p*ae,o[13]=d*T+h*F+f*J+p*ve,o[2]=_*R+v*S+g*Y+m*z,o[6]=_*w+v*C+g*K+m*oe,o[10]=_*O+v*H+g*q+m*ae,o[14]=_*T+v*F+g*J+m*ve,o[3]=A*R+E*S+M*Y+N*z,o[7]=A*w+E*C+M*K+N*oe,o[11]=A*O+E*H+M*q+N*ae,o[15]=A*T+E*F+M*J+N*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+o*c*h-r*u*h-o*a*f+i*u*f+r*a*p-i*c*p)+v*(+n*c*p-n*u*f+o*s*f-r*s*p+r*u*d-o*c*d)+g*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*d-i*u*d)+m*(-r*a*d-n*c*h+n*a*f+r*s*h-i*s*f+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],m=e[15],A=h*g*u-v*f*u+v*c*p-a*g*p-h*c*m+a*f*m,E=_*f*u-d*g*u-_*c*p+s*g*p+d*c*m-s*f*m,M=d*v*u-_*h*u+_*a*p-s*v*p-d*a*m+s*h*m,N=_*h*c-d*v*c-_*a*f+s*v*f+d*a*g-s*h*g,R=n*A+i*E+r*M+o*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=A*w,e[1]=(v*f*o-h*g*o-v*r*p+i*g*p+h*r*m-i*f*m)*w,e[2]=(a*g*o-v*c*o+v*r*u-i*g*u-a*r*m+i*c*m)*w,e[3]=(h*c*o-a*f*o-h*r*u+i*f*u+a*r*p-i*c*p)*w,e[4]=E*w,e[5]=(d*g*o-_*f*o+_*r*p-n*g*p-d*r*m+n*f*m)*w,e[6]=(_*c*o-s*g*o-_*r*u+n*g*u+s*r*m-n*c*m)*w,e[7]=(s*f*o-d*c*o+d*r*u-n*f*u-s*r*p+n*c*p)*w,e[8]=M*w,e[9]=(_*h*o-d*v*o-_*i*p+n*v*p+d*i*m-n*h*m)*w,e[10]=(s*v*o-_*a*o+_*i*u-n*v*u-s*i*m+n*a*m)*w,e[11]=(d*a*o-s*h*o-d*i*u+n*h*u+s*i*p-n*a*p)*w,e[12]=N*w,e[13]=(d*v*r-_*h*r+_*i*f-n*v*f-d*i*g+n*h*g)*w,e[14]=(_*a*r-s*v*r-_*i*c+n*v*c+s*i*g-n*a*g)*w,e[15]=(s*h*r-d*a*r+d*i*c-n*h*c-s*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,c=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*c,u*c+r*a,0,u*a+r*c,d*a+i,d*c-r*s,0,u*c-r*a,d*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,c=n._w,u=o+o,d=s+s,h=a+a,f=o*u,p=o*d,_=o*h,v=s*d,g=s*h,m=a*h,A=c*u,E=c*d,M=c*h,N=i.x,R=i.y,w=i.z;return r[0]=(1-(v+m))*N,r[1]=(p+M)*N,r[2]=(_-E)*N,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(f+m))*R,r[6]=(g+A)*R,r[7]=0,r[8]=(_+E)*w,r[9]=(g-A)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=uo.set(r[0],r[1],r[2]).length();const s=uo.set(r[4],r[5],r[6]).length(),a=uo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const u=1/o,d=1/s,h=1/a;return Rn.elements[0]*=u,Rn.elements[1]*=u,Rn.elements[2]*=u,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,n.setFromRotationMatrix(Rn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ci){const c=this.elements,u=2*o/(n-e),d=2*o/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Ci)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Ha)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ci){const c=this.elements,u=1/(n-e),d=1/(i-r),h=1/(s-o),f=(n+e)*u,p=(i+r)*d;let _,v;if(a===Ci)_=(s+o)*h,v=-2*h;else if(a===Ha)_=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const uo=new I,Rn=new ht,E0=new I(0,0,0),y0=new I(1,1,1),Hi=new I,ta=new I,ln=new I,cf=new ht,uf=new ks;class kn{constructor(e=0,n=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T0=0;const ff=new I,fo=new ks,gi=new ht,na=new I,ss=new I,A0=new I,b0=new ks,df=new I(1,0,0),hf=new I(0,1,0),pf=new I(0,0,1),mf={type:"added"},w0={type:"removed"},ho={type:"childadded",child:null},Al={type:"childremoved",child:null};class wt extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,n=new kn,i=new ks,r=new I(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(pf,e)}translateOnAxis(e,n){return ff.copy(e).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?na.copy(e):na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ss,na,this.up):gi.lookAt(na,ss,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),fo.setFromRotationMatrix(gi),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mf),ho.child=e,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(w0),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mf),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,b0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(n){const a=s(e.geometries),c=s(e.materials),u=s(e.textures),d=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new I,_i=new I,bl=new I,vi=new I,po=new I,mo=new I,gf=new I,wl=new I,Rl=new I,Cl=new I,Il=new st,Ol=new st,Dl=new st;class yn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Cn.subVectors(r,n),_i.subVectors(i,n),bl.subVectors(e,n);const s=Cn.dot(Cn),a=Cn.dot(_i),c=Cn.dot(bl),u=_i.dot(_i),d=_i.dot(bl),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,p=(u*c-a*d)*f,_=(s*d-a*c)*f;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,o,s,a,c){return this.getBarycoord(e,n,i,r,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,vi.x),c.addScaledVector(s,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(e,n,i,r,o,s){return Il.setScalar(0),Ol.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,i),Dl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Il,o.x),s.addScaledVector(Ol,o.y),s.addScaledVector(Dl,o.z),s}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),_i.subVectors(e,n),Cn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Cn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;po.subVectors(r,i),mo.subVectors(o,i),wl.subVectors(e,i);const c=po.dot(wl),u=mo.dot(wl);if(c<=0&&u<=0)return n.copy(i);Rl.subVectors(e,r);const d=po.dot(Rl),h=mo.dot(Rl);if(d>=0&&h<=d)return n.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return s=c/(c-d),n.copy(i).addScaledVector(po,s);Cl.subVectors(e,o);const p=po.dot(Cl),_=mo.dot(Cl);if(_>=0&&p<=_)return n.copy(o);const v=p*u-c*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(mo,a);const g=d*_-p*h;if(g<=0&&h-d>=0&&p-_>=0)return gf.subVectors(o,r),a=(h-d)/(h-d+(p-_)),n.copy(r).addScaledVector(gf,a);const m=1/(g+v+f);return s=v*m,a=f*m,n.copy(i).addScaledVector(po,s).addScaledVector(mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Nl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class we{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=Au(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Nl(s,o,e+1/3),this.g=Nl(s,o,e),this.b=Nl(s,o,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,n=dn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=dn){const i=jd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return je.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Yt(Gt.r*255,0,255))*65536+Math.round(Yt(Gt.g*255,0,255))*256+Math.round(Yt(Gt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,o=Gt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,u;const d=(a+s)/2;if(a===s)c=0,u=0;else{const h=s-a;switch(u=d<=.5?h/(s+a):h/(2-s-a),s){case i:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-i)/h+2;break;case o:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=je.workingColorSpace){return je.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=dn){je.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(ia);const i=Ts(ki.h,ia.h,n),r=Ts(ki.s,ia.s,n),o=Ts(ki.l,ia.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new we;we.NAMES=jd;let R0=0;class lr extends Zo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=jo(),this.name="",this.blending=Lo,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mc&&(i.blendSrc=this.blendSrc),this.blendDst!==gc&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _n extends lr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new I,ra=new Xe;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ra.fromBufferAttribute(this,n),ra.applyMatrix3(e),this.setXY(n,ra.x,ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),o=Wt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class Qd extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jd extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vt extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let C0=0;const Mn=new ht,Ll=new wt,go=new I,cn=new Vs,as=new Vs,It=new I;class vn extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?Jd:Qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ke().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];cn.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];as.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(cn.min,as.min),cn.expandByPoint(It),It.addVectors(cn.max,as.max),cn.expandByPoint(It)):(cn.expandByPoint(as.min),cn.expandByPoint(as.max))}cn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)It.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(It));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)It.fromBufferAttribute(a,u),c&&(go.fromBufferAttribute(e,u),It.add(go)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new I,c[O]=new I;const u=new I,d=new I,h=new I,f=new Xe,p=new Xe,_=new Xe,v=new I,g=new I;function m(O,T,S){u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),f.fromBufferAttribute(o,O),p.fromBufferAttribute(o,T),_.fromBufferAttribute(o,S),d.sub(u),h.sub(u),p.sub(f),_.sub(f);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(C),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(C),a[O].add(v),a[T].add(v),a[S].add(v),c[O].add(g),c[T].add(g),c[S].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,T=A.length;O<T;++O){const S=A[O],C=S.start,H=S.count;for(let F=C,Y=C+H;F<Y;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new I,M=new I,N=new I,R=new I;function w(O){N.fromBufferAttribute(r,O),R.copy(N);const T=a[O];E.copy(T),E.sub(N.multiplyScalar(N.dot(T))).normalize(),M.crossVectors(R,T);const C=M.dot(c[O])<0?-1:1;s.setXYZW(O,E.x,E.y,E.z,C)}for(let O=0,T=A.length;O<T;++O){const S=A[O],C=S.start,H=S.count;for(let F=C,Y=C+H;F<Y;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,o=new I,s=new I,a=new I,c=new I,u=new I,d=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(d),c.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(c.length*d);let p=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*d;for(let m=0;m<d;m++)f[_++]=u[p++]}return new Hn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const c=[],u=o[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);c.push(p)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],h=o[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _f=new ht,dr=new bu,oa=new Ws,vf=new I,sa=new I,aa=new I,la=new I,Pl=new I,ca=new I,xf=new I,ua=new I;class B extends wt{constructor(e=new vn,n=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ca.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const d=a[c],h=o[c];d!==0&&(Pl.fromBufferAttribute(h,e),s?ca.addScaledVector(Pl,d):ca.addScaledVector(Pl.sub(n),d))}n.add(ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(o),dr.copy(e.ray).recast(e.near),!(oa.containsPoint(dr.origin)===!1&&(dr.intersectSphere(oa,vf)===null||dr.origin.distanceToSquared(vf)>(e.far-e.near)**2))&&(_f.copy(o).invert(),dr.copy(e.ray).applyMatrix4(_f),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=s[g.materialIndex],A=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=A,N=E;M<N;M+=3){const R=a.getX(M),w=a.getX(M+1),O=a.getX(M+2);r=fa(this,m,e,i,u,d,h,R,w,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const A=a.getX(g),E=a.getX(g+1),M=a.getX(g+2);r=fa(this,s,e,i,u,d,h,A,E,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=s[g.materialIndex],A=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let M=A,N=E;M<N;M+=3){const R=M,w=M+1,O=M+2;r=fa(this,m,e,i,u,d,h,R,w,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const A=g,E=g+1,M=g+2;r=fa(this,s,e,i,u,d,h,A,E,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function I0(t,e,n,i,r,o,s,a){let c;if(e.side===sn?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===sr,a),c===null)return null;ua.copy(a),ua.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ua);return u<n.near||u>n.far?null:{distance:u,point:ua.clone(),object:t}}function fa(t,e,n,i,r,o,s,a,c,u){t.getVertexPosition(a,sa),t.getVertexPosition(c,aa),t.getVertexPosition(u,la);const d=I0(t,e,n,i,sa,aa,la,xf);if(d){const h=new I;yn.getBarycoord(xf,sa,aa,la,h),r&&(d.uv=yn.getInterpolatedAttribute(r,a,c,u,h,new Xe)),o&&(d.uv1=yn.getInterpolatedAttribute(o,a,c,u,h,new Xe)),s&&(d.normal=yn.getInterpolatedAttribute(s,a,c,u,h,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new I,materialIndex:0};yn.getNormal(sa,aa,la,f.normal),d.face=f,d.barycoord=h}return d}class W extends vn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],u=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(h,2));function _(v,g,m,A,E,M,N,R,w,O,T){const S=M/w,C=N/O,H=M/2,F=N/2,Y=R/2,K=w+1,q=O+1;let J=0,z=0;const oe=new I;for(let ae=0;ae<q;ae++){const ve=ae*C-F;for(let Ue=0;Ue<K;Ue++){const et=Ue*S-H;oe[v]=et*A,oe[g]=ve*E,oe[m]=Y,u.push(oe.x,oe.y,oe.z),oe[v]=0,oe[g]=0,oe[m]=R>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(Ue/w),h.push(1-ae/O),J+=1}}for(let ae=0;ae<O;ae++)for(let ve=0;ve<w;ve++){const Ue=f+ve+K*ae,et=f+ve+K*(ae+1),$=f+(ve+1)+K*(ae+1),ie=f+(ve+1)+K*ae;c.push(Ue,et,ie),c.push(et,$,ie),z+=6}a.addGroup(p,z,T),p+=z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new W(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=zo(t[n]);for(const r in i)e[r]=i[r]}return e}function O0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function eh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const D0={clone:zo,merge:zt};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends lr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class th extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new I,Sf=new Xe,Mf=new Xe;class tn extends th{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,Sf,Mf),n.subVectors(Mf,Sf)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/c,n-=s.offsetY*i/u,r*=s.width/c,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _o=-90,vo=1;class P0 extends wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(_o,vo,e,n);r.layers=this.layers,this.add(r);const o=new tn(_o,vo,e,n);o.layers=this.layers,this.add(o);const s=new tn(_o,vo,e,n);s.layers=this.layers,this.add(s);const a=new tn(_o,vo,e,n);a.layers=this.layers,this.add(a);const c=new tn(_o,vo,e,n);c.layers=this.layers,this.add(c);const u=new tn(_o,vo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,c]=n;for(const u of n)this.remove(u);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class nh extends Zt{constructor(e,n,i,r,o,s,a,c,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Ho,super(e,n,i,r,o,s,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U0 extends to{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new W(5,5,5),o=new ar({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:er});o.uniforms.tEquirect.value=n;const s=new B(r,o),a=n.minFilter;return n.minFilter===Dr&&(n.minFilter=ri),new P0(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Ul=new I,F0=new I,B0=new ke;class vr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ul.subVectors(i,n).cross(F0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ul),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||B0.getNormalMatrix(e),r=this.coplanarPoint(Ul).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Ws,da=new I;class wu{constructor(e=new vr,n=new vr,i=new vr,r=new vr,o=new vr,s=new vr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],v=r[10],g=r[11],m=r[12],A=r[13],E=r[14],M=r[15];if(i[0].setComponents(c-o,f-u,g-p,M-m).normalize(),i[1].setComponents(c+o,f+u,g+p,M+m).normalize(),i[2].setComponents(c+s,f+d,g+_,M+A).normalize(),i[3].setComponents(c-s,f-d,g-_,M-A).normalize(),i[4].setComponents(c-a,f-h,g-v,M-E).normalize(),n===Ci)i[5].setComponents(c+a,f+h,g+v,M+E).normalize();else if(n===Ha)i[5].setComponents(a,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function G0(t){const e=new WeakMap;function n(a,c){const u=a.array,d=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,u){const d=c.array,h=c.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];t.bufferSubData(u,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,c),u.version=a.version}}return{get:r,remove:o,update:s}}class rl extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),c=Math.floor(r),u=a+1,d=c+1,h=e/a,f=n/c,p=[],_=[],v=[],g=[];for(let m=0;m<d;m++){const A=m*f-s;for(let E=0;E<u;E++){const M=E*h-o;_.push(M,-A,0),v.push(0,0,1),g.push(E/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let A=0;A<a;A++){const E=A+u*m,M=A+u*(m+1),N=A+1+u*(m+1),R=A+1+u*m;p.push(E,M,R),p.push(M,N,R)}this.setIndex(p),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
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
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
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
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0=`#ifdef USE_BATCHING
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
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J0=`#ifdef USE_IRIDESCENCE
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
#endif`,em=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fm=`vec3 transformedNormal = objectNormal;
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Bm=`struct PhysicalMaterial {
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
}`,Gm=`
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
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
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tg=`float getShadowMask() {
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
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Yg=`#define DISTANCE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#define LAMBERT
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,o_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,a_=`#define PHONG
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
}`,l_=`#define PHONG
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
}`,c_=`#define STANDARD
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
}`,u_=`#define STANDARD
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
}`,f_=`#define TOON
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
}`,d_=`#define TOON
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
}`,h_=`uniform float size;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 color;
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
}`,__=`uniform float rotation;
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
}`,v_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:H0,alphahash_pars_fragment:k0,alphamap_fragment:V0,alphamap_pars_fragment:W0,alphatest_fragment:z0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:K0,batching_pars_vertex:Y0,batching_vertex:$0,begin_vertex:Z0,beginnormal_vertex:j0,bsdfs:Q0,iridescence_fragment:J0,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:sm,color_pars_vertex:am,color_vertex:lm,common:cm,cube_uv_reflection_fragment:um,defaultnormal_vertex:fm,displacementmap_pars_vertex:dm,displacementmap_vertex:hm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:_m,envmap_fragment:vm,envmap_common_pars_fragment:xm,envmap_pars_fragment:Sm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Dm,envmap_vertex:Em,fog_vertex:ym,fog_pars_vertex:Tm,fog_fragment:Am,fog_pars_fragment:bm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Im,lights_pars_begin:Om,lights_toon_fragment:Nm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Um,lights_physical_fragment:Fm,lights_physical_pars_fragment:Bm,lights_fragment_begin:Gm,lights_fragment_maps:Hm,lights_fragment_end:km,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:Km,map_particle_fragment:Ym,map_particle_pars_fragment:$m,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:Jm,morphnormal_vertex:eg,morphtarget_pars_vertex:tg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:rg,normal_pars_fragment:og,normal_pars_vertex:sg,normal_vertex:ag,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:fg,iridescence_pars_fragment:dg,opaque_fragment:hg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:_g,dithering_pars_fragment:vg,roughnessmap_fragment:xg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Eg,shadowmap_vertex:yg,shadowmask_pars_fragment:Tg,skinbase_vertex:Ag,skinning_pars_vertex:bg,skinning_vertex:wg,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Ig,tonemapping_fragment:Og,tonemapping_pars_fragment:Dg,transmission_fragment:Ng,transmission_pars_fragment:Lg,uv_pars_fragment:Pg,uv_pars_vertex:Ug,uv_vertex:Fg,worldpos_vertex:Bg,background_vert:Gg,background_frag:Hg,backgroundCube_vert:kg,backgroundCube_frag:Vg,cube_vert:Wg,cube_frag:zg,depth_vert:Xg,depth_frag:qg,distanceRGBA_vert:Kg,distanceRGBA_frag:Yg,equirect_vert:$g,equirect_frag:Zg,linedashed_vert:jg,linedashed_frag:Qg,meshbasic_vert:Jg,meshbasic_frag:e_,meshlambert_vert:t_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:r_,meshnormal_vert:o_,meshnormal_frag:s_,meshphong_vert:a_,meshphong_frag:l_,meshphysical_vert:c_,meshphysical_frag:u_,meshtoon_vert:f_,meshtoon_frag:d_,points_vert:h_,points_frag:p_,shadow_vert:m_,shadow_frag:g_,sprite_vert:__,sprite_frag:v_},se={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Qn={basic:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:zt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:zt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:zt([se.points,se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:zt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:zt([se.common,se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:zt([se.sprite,se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:zt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:zt([se.lights,se.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qn.physical={uniforms:zt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ha={r:0,b:0,g:0},pr=new kn,x_=new ht;function S_(t,e,n,i,r,o,s){const a=new we(0);let c=o===!0?0:1,u,d,h=null,f=0,p=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?n:e).get(E)),E}function v(A){let E=!1;const M=_(A);M===null?m(a,c):M&&M.isColor&&(m(M,1),E=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,s):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(A,E){const M=_(E);M&&(M.isCubeTexture||M.mapping===nl)?(d===void 0&&(d=new B(new W(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:zo(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),pr.copy(E.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(pr)),d.material.toneMapped=je.getTransfer(M.colorSpace)!==ot,(h!==M||f!==M.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=M,f=M.version,p=t.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new B(new rl(2,2),new ar({name:"BackgroundMaterial",uniforms:zo(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=je.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function m(A,E){A.getRGB(ha,eh(t)),i.buffers.color.setClear(ha.r,ha.g,ha.b,E,s)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),c=E,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,m(a,c)},render:v,addToRenderList:g}}function M_(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(S,C,H,F,Y){let K=!1;const q=h(F,H,C);o!==q&&(o=q,u(o.object)),K=p(S,F,H,Y),K&&_(S,F,H,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,M(S,C,H,F),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,C,H){const F=H.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let K=Y[C.id];K===void 0&&(K={},Y[C.id]=K);let q=K[F];return q===void 0&&(q=f(c()),K[F]=q),q}function f(S){const C=[],H=[],F=[];for(let Y=0;Y<n;Y++)C[Y]=0,H[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,C,H,F){const Y=o.attributes,K=C.attributes;let q=0;const J=H.getAttributes();for(const z in J)if(J[z].location>=0){const ae=Y[z];let ve=K[z];if(ve===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ae===void 0||ae.attribute!==ve||ve&&ae.data!==ve.data)return!0;q++}return o.attributesNum!==q||o.index!==F}function _(S,C,H,F){const Y={},K=C.attributes;let q=0;const J=H.getAttributes();for(const z in J)if(J[z].location>=0){let ae=K[z];ae===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const ve={};ve.attribute=ae,ae&&ae.data&&(ve.data=ae.data),Y[z]=ve,q++}o.attributes=Y,o.attributesNum=q,o.index=F}function v(){const S=o.newAttributes;for(let C=0,H=S.length;C<H;C++)S[C]=0}function g(S){m(S,0)}function m(S,C){const H=o.newAttributes,F=o.enabledAttributes,Y=o.attributeDivisors;H[S]=1,F[S]===0&&(t.enableVertexAttribArray(S),F[S]=1),Y[S]!==C&&(t.vertexAttribDivisor(S,C),Y[S]=C)}function A(){const S=o.newAttributes,C=o.enabledAttributes;for(let H=0,F=C.length;H<F;H++)C[H]!==S[H]&&(t.disableVertexAttribArray(H),C[H]=0)}function E(S,C,H,F,Y,K,q){q===!0?t.vertexAttribIPointer(S,C,H,Y,K):t.vertexAttribPointer(S,C,H,F,Y,K)}function M(S,C,H,F){v();const Y=F.attributes,K=H.getAttributes(),q=C.defaultAttributeValues;for(const J in K){const z=K[J];if(z.location>=0){let oe=Y[J];if(oe===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const ae=oe.normalized,ve=oe.itemSize,Ue=e.get(oe);if(Ue===void 0)continue;const et=Ue.buffer,$=Ue.type,ie=Ue.bytesPerElement,Ee=$===t.INT||$===t.UNSIGNED_INT||oe.gpuType===vu;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Oe=ce.stride,Fe=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<z.locationSize;ze++)m(z.location+ze,ce.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<z.locationSize;ze++)g(z.location+ze);t.bindBuffer(t.ARRAY_BUFFER,et);for(let ze=0;ze<z.locationSize;ze++)E(z.location+ze,ve/z.locationSize,$,ae,Oe*ie,(Fe+ve/z.locationSize*ze)*ie,Ee)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce,oe.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<z.locationSize;ce++)g(z.location+ce);t.bindBuffer(t.ARRAY_BUFFER,et);for(let ce=0;ce<z.locationSize;ce++)E(z.location+ce,ve/z.locationSize,$,ae,ve*ie,ve/z.locationSize*ce*ie,Ee)}}else if(q!==void 0){const ae=q[J];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(z.location,ae);break;case 3:t.vertexAttrib3fv(z.location,ae);break;case 4:t.vertexAttrib4fv(z.location,ae);break;default:t.vertexAttrib1fv(z.location,ae)}}}}A()}function N(){O();for(const S in i){const C=i[S];for(const H in C){const F=C[H];for(const Y in F)d(F[Y].object),delete F[Y];delete C[H]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const H in C){const F=C[H];for(const Y in F)d(F[Y].object),delete F[Y];delete C[H]}delete i[S.id]}function w(S){for(const C in i){const H=i[C];if(H[S.id]===void 0)continue;const F=H[S.id];for(const Y in F)d(F[Y].object),delete F[Y];delete H[S.id]}}function O(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:A}}function E_(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];n.update(p,i,1)}function c(u,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)s(u[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=d[v]*f[v];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function y_(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==Bn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const O=w===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ni&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!O)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:N,maxSamples:R}}function T_(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new vr,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=t.get(h);if(!r||_===null||_.length===0||o&&!g)o?d(null):u();else{const A=o?0:i,E=A*4;let M=m.clippingState||null;c.value=M,M=d(_,f,E,p);for(let N=0;N!==E;++N)M[N]=n[N];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const m=p+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,M=p;E!==v;++E,M+=4)s.copy(h[E]).applyMatrix4(A,a),s.normal.toArray(g,M),g[M+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function A_(t){let e=new WeakMap;function n(s,a){return a===Tc?s.mapping=Ho:a===Ac&&(s.mapping=ko),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Tc||a===Ac)if(e.has(s)){const c=e.get(s).texture;return n(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const u=new U0(c.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class rh extends th{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bo=4,Ef=[.125,.215,.35,.446,.526,.582],Tr=20,Fl=new rh,yf=new we;let Bl=null,Gl=0,Hl=0,kl=!1;const xr=(1+Math.sqrt(5))/2,xo=1/xr,Tf=[new I(-xr,xo,0),new I(xr,xo,0),new I(-xo,0,xr),new I(xo,0,xr),new I(0,xr,-xo),new I(0,xr,xo),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,Gl,Hl),this._renderer.xr.enabled=kl,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ho||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Hs,format:Bn,colorSpace:$o,depthBuffer:!1},r=bf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b_(o)),this._blurMaterial=w_(o,e,n)}return r}_compileMaterial(e){const n=new B(this._lodPlanes[0],e);this._renderer.compile(n,Fl)}_sceneToCubeUV(e,n,i,r){const a=new tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(yf),d.toneMapping=tr,d.autoClear=!1;const p=new _n({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new B(new W,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(yf),v=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,c[m],0),a.lookAt(u[m],0,0)):A===1?(a.up.set(0,0,c[m]),a.lookAt(0,u[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,u[m]));const E=this._cubeSize;pa(r,A*E,m>2?E:0,E,E),d.setRenderTarget(r),v&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ho||e.mapping===ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new B(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;pa(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(s,Fl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Tf[(r-o-1)%Tf.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const c=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new B(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),v=o/_,g=isFinite(o)?1+Math.floor(d*v):Tr;g>Tr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Tr}`);const m=[];let A=0;for(let w=0;w<Tr;++w){const O=w/v,T=Math.exp(-O*O/2);m.push(T),w===0?A+=T:w<g&&(A+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const M=this._sizeLods[r],N=3*M*(r>E-bo?r-E+bo:0),R=4*(this._cubeSize-M);pa(n,N,R,3*M,2*M),c.setRenderTarget(n),c.render(h,Fl)}}function b_(t){const e=[],n=[],i=[];let r=t;const o=t-bo+1+Ef.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let c=1/a;s>t-bo?c=Ef[s-t+bo-1]:s===0&&(c=0),i.push(c);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,v=3,g=2,m=1,A=new Float32Array(v*_*p),E=new Float32Array(g*_*p),M=new Float32Array(m*_*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,O=R>2?0:-1,T=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];A.set(T,v*_*R),E.set(f,g*_*R);const S=[R,R,R,R,R,R];M.set(S,m*_*R)}const N=new vn;N.setAttribute("position",new Hn(A,v)),N.setAttribute("uv",new Hn(E,g)),N.setAttribute("faceIndex",new Hn(M,m)),e.push(N),r>bo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bf(t,e,n){const i=new to(t,e,n);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function w_(t,e,n){const i=new Float32Array(Tr),r=new I(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function wf(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Rf(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function R_(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===Tc||c===Ac,d=c===Ho||c===ko;if(u||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Af(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Af(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let c=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&c++;return c===u}function o(a){const c=a.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function C_(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&gs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function I_(t,e,n,i){const r={},o=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",s),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const v=p[_];for(let g=0,m=v.length;g<m;g++)e.update(v[g],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,_=h.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let E=0,M=A.length;E<M;E+=3){const N=A[E+0],R=A[E+1],w=A[E+2];f.push(N,R,R,w,w,N)}}else if(_!==void 0){const A=_.array;v=_.version;for(let E=0,M=A.length/3-1;E<M;E+=3){const N=E+0,R=E+1,w=E+2;f.push(N,R,R,w,w,N)}}else return;const g=new(Kd(f)?Jd:Qd)(f,1);g.version=v;const m=o.get(h);m&&e.remove(m),o.set(h,g)}function d(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function O_(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,p){t.drawElements(i,p,o,f*s),n.update(p,i,1)}function u(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,o,f*s,_),n.update(p,i,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];n.update(g,i,1)}function h(f,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/s,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,v,0,_);let m=0;for(let A=0;A<_;A++)m+=p[A]*v[A];n.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function D_(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function N_(t,e,n){const i=new WeakMap,r=new st;function o(s,a,c){const u=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let N=a.attributes.position.count*M,R=1;N>e.maxTextureSize&&(R=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const w=new Float32Array(N*R*4*h),O=new $d(w,N,R,h);O.type=Ri,O.needsUpdate=!0;const T=M*4;for(let C=0;C<h;C++){const H=m[C],F=A[C],Y=E[C],K=N*R*4*C;for(let q=0;q<H.count;q++){const J=q*T;_===!0&&(r.fromBufferAttribute(H,q),w[K+J+0]=r.x,w[K+J+1]=r.y,w[K+J+2]=r.z,w[K+J+3]=0),v===!0&&(r.fromBufferAttribute(F,q),w[K+J+4]=r.x,w[K+J+5]=r.y,w[K+J+6]=r.z,w[K+J+7]=0),g===!0&&(r.fromBufferAttribute(Y,q),w[K+J+8]=r.x,w[K+J+9]=r.y,w[K+J+10]=r.z,w[K+J+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:O,size:new Xe(N,R)},i.set(a,f),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function L_(t,e,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function s(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class oh extends Zt{constructor(e,n,i,r,o,s,a,c,u,d=Po){if(d!==Po&&d!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Po&&(i=eo),i===void 0&&d===Wo&&(i=Vo),super(null,r,o,s,a,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sh=new Zt,Cf=new oh(1,1),ah=new $d,lh=new S0,ch=new nh,If=[],Of=[],Df=new Float32Array(16),Nf=new Float32Array(9),Lf=new Float32Array(4);function Qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=If[r];if(o===void 0&&(o=new Float32Array(r),If[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ol(t,e){let n=Of[e];n===void 0&&(n=new Int32Array(e),Of[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function P_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function U_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function F_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function B_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function G_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Lf.set(i),t.uniformMatrix2fv(this.addr,!1,Lf),Ct(n,i)}}function H_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Nf.set(i),t.uniformMatrix3fv(this.addr,!1,Nf),Ct(n,i)}}function k_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Df.set(i),t.uniformMatrix4fv(this.addr,!1,Df),Ct(n,i)}}function V_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function W_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function z_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function X_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function q_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function K_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function Y_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function $_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function Z_(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Cf.compareFunction=qd,o=Cf):o=sh,n.setTexture2D(e||o,r)}function j_(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lh,r)}function Q_(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ch,r)}function J_(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ah,r)}function ev(t){switch(t){case 5126:return P_;case 35664:return U_;case 35665:return F_;case 35666:return B_;case 35674:return G_;case 35675:return H_;case 35676:return k_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return z_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return K_;case 36295:return Y_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return J_}}function tv(t,e){t.uniform1fv(this.addr,e)}function nv(t,e){const n=Qo(e,this.size,2);t.uniform2fv(this.addr,n)}function iv(t,e){const n=Qo(e,this.size,3);t.uniform3fv(this.addr,n)}function rv(t,e){const n=Qo(e,this.size,4);t.uniform4fv(this.addr,n)}function ov(t,e){const n=Qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function sv(t,e){const n=Qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function av(t,e){const n=Qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lv(t,e){t.uniform1iv(this.addr,e)}function cv(t,e){t.uniform2iv(this.addr,e)}function uv(t,e){t.uniform3iv(this.addr,e)}function fv(t,e){t.uniform4iv(this.addr,e)}function dv(t,e){t.uniform1uiv(this.addr,e)}function hv(t,e){t.uniform2uiv(this.addr,e)}function pv(t,e){t.uniform3uiv(this.addr,e)}function mv(t,e){t.uniform4uiv(this.addr,e)}function gv(t,e,n){const i=this.cache,r=e.length,o=ol(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||sh,o[s])}function _v(t,e,n){const i=this.cache,r=e.length,o=ol(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||lh,o[s])}function vv(t,e,n){const i=this.cache,r=e.length,o=ol(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||ch,o[s])}function xv(t,e,n){const i=this.cache,r=e.length,o=ol(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||ah,o[s])}function Sv(t){switch(t){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return ov;case 35675:return sv;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return hv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return xv}}class Mv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ev(n.type)}}class Ev{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Sv(n.type)}}class yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Pf(t,e){t.seq.push(e),t.map[e.id]=e}function Tv(t,e,n){const i=t.name,r=i.length;for(Vl.lastIndex=0;;){const o=Vl.exec(i),s=Vl.lastIndex;let a=o[1];const c=o[2]==="]",u=o[3];if(c&&(a=a|0),u===void 0||u==="["&&s+2===r){Pf(n,u===void 0?new Mv(a,t,e):new Ev(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new yv(a),Pf(n,h)),n=h}}}class Pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);Tv(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Uf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Av=37297;let bv=0;function wv(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Ff=new ke;function Rv(t){je._getMatrix(Ff,je.workingColorSpace,t);const e=`mat3( ${Ff.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case il:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Bf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+wv(t.getShaderSource(e),s)}else return r}function Cv(t,e){const n=Rv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Iv(t,e){let n;switch(e){case Dp:n="Linear";break;case Np:n="Reinhard";break;case Lp:n="Cineon";break;case Pp:n="ACESFilmic";break;case Fp:n="AgX";break;case Bp:n="Neutral";break;case Up:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ma=new I;function Ov(){je.getLuminanceCoefficients(ma);const t=ma.x.toFixed(4),e=ma.y.toFixed(4),n=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Nv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Lv(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function _s(t){return t!==""}function Gf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(t){return t.replace(Pv,Fv)}const Uv=new Map;function Fv(t,e){let n=We[e];if(n===void 0){const i=Uv.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eu(n)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(t){return t.replace(Bv,Gv)}function Gv(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Vf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Hv(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function kv(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ho:case ko:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vv(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function Wv(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case Op:e="ENVMAP_BLENDING_ADD";break}return e}function zv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Xv(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const c=Hv(n),u=kv(n),d=Vv(n),h=Wv(n),f=zv(n),p=Dv(n),_=Nv(o),v=r.createProgram();let g,m,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),m.length>0&&(m+=`
`)):(g=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),m=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?We.tonemapping_pars_fragment:"",n.toneMapping!==tr?Iv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Cv("linearToOutputTexel",n.outputColorSpace),Ov(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_s).join(`
`)),s=eu(s),s=Gf(s,n),s=Hf(s,n),a=eu(a),a=Gf(a,n),a=Hf(a,n),s=kf(s),a=kf(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=A+g+s,M=A+m+a,N=Uf(r,r.VERTEX_SHADER,E),R=Uf(r,r.FRAGMENT_SHADER,M);r.attachShader(v,N),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(C){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(N).trim(),Y=r.getShaderInfoLog(R).trim();let K=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,N,R);else{const J=Bf(r,N,"vertex"),z=Bf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+J+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||Y==="")&&(q=!1);q&&(C.diagnostics={runnable:K,programLog:H,vertexShader:{log:F,prefix:g},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(N),r.deleteShader(R),O=new Pa(r,v),T=Lv(r,v)}let O;this.getUniforms=function(){return O===void 0&&w(this),O};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Av)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}let qv=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Yv(e),n.set(e,i)),i}}class Yv{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}}function $v(t,e,n,i,r,o,s){const a=new Zd,c=new Kv,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,S,C,H,F){const Y=H.fog,K=F.geometry,q=T.isMeshStandardMaterial?H.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||q),z=J&&J.mapping===nl?J.image.height:null,oe=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=ae!==void 0?ae.length:0;let Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let et,$,ie,Ee;if(oe){const rt=Qn[oe];et=rt.vertexShader,$=rt.fragmentShader}else et=T.vertexShader,$=T.fragmentShader,c.update(T),ie=c.getVertexShaderID(T),Ee=c.getFragmentShaderID(T);const ce=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,ze=F.isBatchedMesh===!0,gt=!!T.map,$e=!!T.matcap,Mt=!!J,U=!!T.aoMap,xn=!!T.lightMap,qe=!!T.bumpMap,Ke=!!T.normalMap,Ce=!!T.displacementMap,ut=!!T.emissiveMap,Re=!!T.metalnessMap,b=!!T.roughnessMap,x=T.anisotropy>0,G=T.clearcoat>0,j=T.dispersion>0,ee=T.iridescence>0,Z=T.sheen>0,ye=T.transmission>0,ue=x&&!!T.anisotropyMap,me=G&&!!T.clearcoatMap,Ze=G&&!!T.clearcoatNormalMap,te=G&&!!T.clearcoatRoughnessMap,ge=ee&&!!T.iridescenceMap,Ie=ee&&!!T.iridescenceThicknessMap,Ne=Z&&!!T.sheenColorMap,_e=Z&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Ve=!!T.specularColorMap,lt=!!T.specularIntensityMap,D=ye&&!!T.transmissionMap,le=ye&&!!T.thicknessMap,X=!!T.gradientMap,Q=!!T.alphaMap,he=T.alphaTest>0,fe=!!T.alphaHash,Be=!!T.extensions;let vt=tr;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Ft={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:et,fragmentShader:$,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ze,batchingColor:ze&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:$o,alphaToCoverage:!!T.alphaToCoverage,map:gt,matcap:$e,envMap:Mt,envMapMode:Mt&&J.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:xn,bumpMap:qe,normalMap:Ke,displacementMap:f&&Ce,emissiveMap:ut,normalMapObjectSpace:Ke&&T.normalMapType===Vp,normalMapTangentSpace:Ke&&T.normalMapType===Tu,metalnessMap:Re,roughnessMap:b,anisotropy:x,anisotropyMap:ue,clearcoat:G,clearcoatMap:me,clearcoatNormalMap:Ze,clearcoatRoughnessMap:te,dispersion:j,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Ie,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Ye,specularColorMap:Ve,specularIntensityMap:lt,transmission:ye,transmissionMap:D,thicknessMap:le,gradientMap:X,opaque:T.transparent===!1&&T.blending===Lo&&T.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:fe,combine:T.combine,mapUv:gt&&v(T.map.channel),aoMapUv:U&&v(T.aoMap.channel),lightMapUv:xn&&v(T.lightMap.channel),bumpMapUv:qe&&v(T.bumpMap.channel),normalMapUv:Ke&&v(T.normalMap.channel),displacementMapUv:Ce&&v(T.displacementMap.channel),emissiveMapUv:ut&&v(T.emissiveMap.channel),metalnessMapUv:Re&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:ue&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(T.sheenRoughnessMap.channel),specularMapUv:Ye&&v(T.specularMap.channel),specularColorMapUv:Ve&&v(T.specularColorMap.channel),specularIntensityMapUv:lt&&v(T.specularIntensityMap.channel),transmissionMapUv:D&&v(T.transmissionMap.channel),thicknessMapUv:le&&v(T.thicknessMap.channel),alphaMapUv:Q&&v(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ke||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(gt||Q),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Oe,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:gt&&T.map.isVideoTexture===!0&&je.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:ut&&T.emissiveMap.isVideoTexture===!0&&je.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Un,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=u.has(1),Ft.vertexUv2s=u.has(2),Ft.vertexUv3s=u.has(3),u.clear(),Ft}function m(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)S.push(C),S.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(A(S,T),E(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function A(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function E(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const S=_[T.type];let C;if(S){const H=Qn[S];C=D0.clone(H.uniforms)}else C=T.uniforms;return C}function N(T,S){let C;for(let H=0,F=d.length;H<F;H++){const Y=d[H];if(Y.cacheKey===S){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new Xv(t,S,T,o),d.push(C)),C}function R(T){if(--T.usedTimes===0){const S=d.indexOf(T);d[S]=d[d.length-1],d.pop(),T.destroy()}}function w(T){c.remove(T)}function O(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:N,releaseProgram:R,releaseShaderCache:w,programs:d,dispose:O}}function Zv(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,c){t.get(s)[a]=c}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function jv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zf(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,f,p,_,v,g){let m=t[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},t[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function a(h,f,p,_,v,g){const m=s(h,f,p,_,v,g);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):n.push(m)}function c(h,f,p,_,v,g){const m=s(h,f,p,_,v,g);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):n.unshift(m)}function u(h,f){n.length>1&&n.sort(h||jv),i.length>1&&i.sort(f||Wf),r.length>1&&r.sort(f||Wf)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:d,sort:u}}function Qv(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new zf,t.set(i,[s])):r>=o.length?(s=new zf,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Jv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new we};break;case"SpotLight":n={position:new I,direction:new I,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function ex(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tx=0;function nx(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ix(t){const e=new Jv,n=ex(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,o=new ht,s=new ht;function a(u){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,v=0,g=0,m=0,A=0,E=0,M=0,N=0,R=0,w=0;u.sort(nx);for(let T=0,S=u.length;T<S;T++){const C=u[T],H=C.color,F=C.intensity,Y=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=H.r*F,h+=H.g*F,f+=H.b*F;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],F);w++}else if(C.isDirectionalLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,z=n.get(C);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=q,p++}else if(C.isSpotLight){const q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(H).multiplyScalar(F),q.distance=Y,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[v]=q;const J=C.shadow;if(C.map&&(i.spotLightMap[N]=C.map,N++,J.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[v]=J.matrix,C.castShadow){const z=n.get(C);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=K,M++}v++}else if(C.isRectAreaLight){const q=e.get(C);q.color.copy(H).multiplyScalar(F),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=q,g++}else if(C.isPointLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const J=C.shadow,z=n.get(C);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=C.shadow.matrix,E++}i.point[_]=q,_++}else if(C.isHemisphereLight){const q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(F),q.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[m]=q,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==g||O.hemiLength!==m||O.numDirectionalShadows!==A||O.numPointShadows!==E||O.numSpotShadows!==M||O.numSpotMaps!==N||O.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=g,O.hemiLength=m,O.numDirectionalShadows=A,O.numPointShadows=E,O.numSpotShadows=M,O.numSpotMaps=N,O.numLightProbes=w,i.version=tx++)}function c(u,d){let h=0,f=0,p=0,_=0,v=0;const g=d.matrixWorldInverse;for(let m=0,A=u.length;m<A;m++){const E=u[m];if(E.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(E.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),s.identity(),o.copy(E.matrixWorld),o.premultiply(g),s.extractRotation(o),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Xf(t){const e=new ix(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function rx(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Xf(t),e.set(r,[a])):o>=s.length?(a=new Xf(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ox extends lr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends lr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`;function cx(t,e,n){let i=new wu;const r=new Xe,o=new Xe,s=new st,a=new ox({depthPacking:kp}),c=new sx,u={},d=n.maxTextureSize,h={[sr]:sn,[sn]:sr,[Un]:Un},f=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ax,fragmentShader:lx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new B(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let m=this.type;this.render=function(R,w,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),H=t.state;H.setBlending(er),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=m!==xi&&this.type===xi,Y=m===xi&&this.type!==xi;for(let K=0,q=R.length;K<q;K++){const J=R[K],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const oe=z.getFrameExtents();if(r.multiply(oe),o.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/oe.x),r.x=o.x*oe.x,z.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/oe.y),r.y=o.y*oe.y,z.mapSize.y=o.y)),z.map===null||F===!0||Y===!0){const ve=this.type!==xi?{minFilter:gn,magFilter:gn}:{};z.map!==null&&z.map.dispose(),z.map=new to(r.x,r.y,ve),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ae=z.getViewportCount();for(let ve=0;ve<ae;ve++){const Ue=z.getViewport(ve);s.set(o.x*Ue.x,o.y*Ue.y,o.x*Ue.z,o.y*Ue.w),H.viewport(s),z.updateMatrices(J,ve),i=z.getFrustum(),M(w,O,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===xi&&A(z,O),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(T,S,C)};function A(R,w){const O=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new to(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,O,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,O,p,v,null)}function E(R,w,O,T){let S=null;const C=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=O.isPointLight===!0?c:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,F=w.uuid;let Y=u[H];Y===void 0&&(Y={},u[H]=Y);let K=Y[F];K===void 0&&(K=S.clone(),Y[F]=K,w.addEventListener("dispose",N)),S=K}if(S.visible=w.visible,S.wireframe=w.wireframe,T===xi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=O}return S}function M(R,w,O,T,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===xi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const F=e.update(R),Y=R.material;if(Array.isArray(Y)){const K=F.groups;for(let q=0,J=K.length;q<J;q++){const z=K[q],oe=Y[z.materialIndex];if(oe&&oe.visible){const ae=E(R,oe,T,S);R.onBeforeShadow(t,R,w,O,F,ae,z),t.renderBufferDirect(O,null,F,ae,R,z),R.onAfterShadow(t,R,w,O,F,ae,z)}}}else if(Y.visible){const K=E(R,Y,T,S);R.onBeforeShadow(t,R,w,O,F,K,null),t.renderBufferDirect(O,null,F,K,R,null),R.onAfterShadow(t,R,w,O,F,K,null)}}const H=R.children;for(let F=0,Y=H.length;F<Y;F++)M(H[F],w,O,T,S)}function N(R){R.target.removeEventListener("dispose",N);for(const O in u){const T=u[O],S=R.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const ux={[_c]:vc,[xc]:Ec,[Sc]:yc,[Go]:Mc,[vc]:_c,[Ec]:xc,[yc]:Sc,[Mc]:Go};function fx(t,e){function n(){let D=!1;const le=new st;let X=null;const Q=new st(0,0,0,0);return{setMask:function(he){X!==he&&!D&&(t.colorMask(he,he,he,he),X=he)},setLocked:function(he){D=he},setClear:function(he,fe,Be,vt,Ft){Ft===!0&&(he*=vt,fe*=vt,Be*=vt),le.set(he,fe,Be,vt),Q.equals(le)===!1&&(t.clearColor(he,fe,Be,vt),Q.copy(le))},reset:function(){D=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,X=null,Q=null,he=null;return{setReversed:function(fe){if(le!==fe){const Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const vt=he;he=null,this.setClear(vt)}le=fe},getReversed:function(){return le},setTest:function(fe){fe?ce(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(fe){X!==fe&&!D&&(t.depthMask(fe),X=fe)},setFunc:function(fe){if(le&&(fe=ux[fe]),Q!==fe){switch(fe){case _c:t.depthFunc(t.NEVER);break;case vc:t.depthFunc(t.ALWAYS);break;case xc:t.depthFunc(t.LESS);break;case Go:t.depthFunc(t.LEQUAL);break;case Sc:t.depthFunc(t.EQUAL);break;case Mc:t.depthFunc(t.GEQUAL);break;case Ec:t.depthFunc(t.GREATER);break;case yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=fe}},setLocked:function(fe){D=fe},setClear:function(fe){he!==fe&&(le&&(fe=1-fe),t.clearDepth(fe),he=fe)},reset:function(){D=!1,X=null,Q=null,he=null,le=!1}}}function r(){let D=!1,le=null,X=null,Q=null,he=null,fe=null,Be=null,vt=null,Ft=null;return{setTest:function(rt){D||(rt?ce(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(rt){le!==rt&&!D&&(t.stencilMask(rt),le=rt)},setFunc:function(rt,An,di){(X!==rt||Q!==An||he!==di)&&(t.stencilFunc(rt,An,di),X=rt,Q=An,he=di)},setOp:function(rt,An,di){(fe!==rt||Be!==An||vt!==di)&&(t.stencilOp(rt,An,di),fe=rt,Be=An,vt=di)},setLocked:function(rt){D=rt},setClear:function(rt){Ft!==rt&&(t.clearStencil(rt),Ft=rt)},reset:function(){D=!1,le=null,X=null,Q=null,he=null,fe=null,Be=null,vt=null,Ft=null}}}const o=new n,s=new i,a=new r,c=new WeakMap,u=new WeakMap;let d={},h={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,A=null,E=null,M=null,N=null,R=null,w=new we(0,0,0),O=0,T=!1,S=null,C=null,H=null,F=null,Y=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=J>=2);let oe=null,ae={};const ve=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),et=new st().fromArray(ve),$=new st().fromArray(Ue);function ie(D,le,X,Q){const he=new Uint8Array(4),fe=t.createTexture();t.bindTexture(D,fe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<X;Be++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(le+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return fe}const Ee={};Ee[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Go),qe(!1),Ke(Ku),ce(t.CULL_FACE),U(er);function ce(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Oe(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Fe(D,le){return h[D]!==le?(t.bindFramebuffer(D,le),h[D]=le,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=le),!0):!1}function ze(D,le){let X=p,Q=!1;if(D){X=f.get(le),X===void 0&&(X=[],f.set(le,X));const he=D.textures;if(X.length!==he.length||X[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Be=he.length;fe<Be;fe++)X[fe]=t.COLOR_ATTACHMENT0+fe;X.length=he.length,Q=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Q=!0);Q&&t.drawBuffers(X)}function gt(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const $e={[yr]:t.FUNC_ADD,[hp]:t.FUNC_SUBTRACT,[pp]:t.FUNC_REVERSE_SUBTRACT};$e[mp]=t.MIN,$e[gp]=t.MAX;const Mt={[_p]:t.ZERO,[vp]:t.ONE,[xp]:t.SRC_COLOR,[mc]:t.SRC_ALPHA,[Ap]:t.SRC_ALPHA_SATURATE,[yp]:t.DST_COLOR,[Mp]:t.DST_ALPHA,[Sp]:t.ONE_MINUS_SRC_COLOR,[gc]:t.ONE_MINUS_SRC_ALPHA,[Tp]:t.ONE_MINUS_DST_COLOR,[Ep]:t.ONE_MINUS_DST_ALPHA,[bp]:t.CONSTANT_COLOR,[wp]:t.ONE_MINUS_CONSTANT_COLOR,[Rp]:t.CONSTANT_ALPHA,[Cp]:t.ONE_MINUS_CONSTANT_ALPHA};function U(D,le,X,Q,he,fe,Be,vt,Ft,rt){if(D===er){v===!0&&(Oe(t.BLEND),v=!1);return}if(v===!1&&(ce(t.BLEND),v=!0),D!==dp){if(D!==g||rt!==T){if((m!==yr||M!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,M=yr),rt)switch(D){case Lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.ONE,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,E=null,N=null,R=null,w.set(0,0,0),O=0,g=D,T=rt}return}he=he||le,fe=fe||X,Be=Be||Q,(le!==m||he!==M)&&(t.blendEquationSeparate($e[le],$e[he]),m=le,M=he),(X!==A||Q!==E||fe!==N||Be!==R)&&(t.blendFuncSeparate(Mt[X],Mt[Q],Mt[fe],Mt[Be]),A=X,E=Q,N=fe,R=Be),(vt.equals(w)===!1||Ft!==O)&&(t.blendColor(vt.r,vt.g,vt.b,Ft),w.copy(vt),O=Ft),g=D,T=!1}function xn(D,le){D.side===Un?Oe(t.CULL_FACE):ce(t.CULL_FACE);let X=D.side===sn;le&&(X=!X),qe(X),D.blending===Lo&&D.transparent===!1?U(er):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),o.setMask(D.colorWrite);const Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){S!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),S=D)}function Ke(D){D!==cp?(ce(t.CULL_FACE),D!==C&&(D===Ku?t.cullFace(t.BACK):D===up?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),C=D}function Ce(D){D!==H&&(q&&t.lineWidth(D),H=D)}function ut(D,le,X){D?(ce(t.POLYGON_OFFSET_FILL),(F!==le||Y!==X)&&(t.polygonOffset(le,X),F=le,Y=X)):Oe(t.POLYGON_OFFSET_FILL)}function Re(D){D?ce(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function b(D){D===void 0&&(D=t.TEXTURE0+K-1),oe!==D&&(t.activeTexture(D),oe=D)}function x(D,le,X){X===void 0&&(oe===null?X=t.TEXTURE0+K-1:X=oe);let Q=ae[X];Q===void 0&&(Q={type:void 0,texture:void 0},ae[X]=Q),(Q.type!==D||Q.texture!==le)&&(oe!==X&&(t.activeTexture(X),oe=X),t.bindTexture(D,le||Ee[D]),Q.type=D,Q.texture=le)}function G(){const D=ae[oe];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){et.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function _e(D){$.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Ye(D,le){let X=u.get(le);X===void 0&&(X=new WeakMap,u.set(le,X));let Q=X.get(D);Q===void 0&&(Q=t.getUniformBlockIndex(le,D.name),X.set(D,Q))}function Ve(D,le){const Q=u.get(le).get(D);c.get(le)!==Q&&(t.uniformBlockBinding(le,Q,D.__bindingPointIndex),c.set(le,Q))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},oe=null,ae={},h={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,A=null,E=null,M=null,N=null,R=null,w=new we(0,0,0),O=0,T=!1,S=null,C=null,H=null,F=null,Y=null,et.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ce,disable:Oe,bindFramebuffer:Fe,drawBuffers:ze,useProgram:gt,setBlending:U,setMaterial:xn,setFlipSided:qe,setCullFace:Ke,setLineWidth:Ce,setPolygonOffset:ut,setScissorTest:Re,activeTexture:b,bindTexture:x,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Ie,updateUBOMapping:Ye,uniformBlockBinding:Ve,texStorage2D:Ze,texStorage3D:te,texSubImage2D:Z,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Ne,viewport:_e,reset:lt}}function qf(t,e,n,i){const r=dx(i);switch(n){case Gd:return t*e;case kd:return t*e;case Vd:return t*e*2;case Wd:return t*e/r.components*r.byteLength;case Mu:return t*e/r.components*r.byteLength;case zd:return t*e*2/r.components*r.byteLength;case Eu:return t*e*2/r.components*r.byteLength;case Hd:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case yu:return t*e*4/r.components*r.byteLength;case Ca:case Ia:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Da:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Oc:return Math.max(t,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(t,8)*Math.max(e,8)/2;case Dc:case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Na:case $c:case Zc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xd:case jc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qc:case Jc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dx(t){switch(t){case Ni:case Ud:return{byteLength:1,components:1};case Ls:case Fd:case Hs:return{byteLength:2,components:1};case xu:case Su:return{byteLength:2,components:4};case eo:case vu:case Ri:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function hx(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return p?new OffscreenCanvas(b,x):ka("canvas")}function v(b,x,G){let j=1;const ee=Re(b);if((ee.width>G||ee.height>G)&&(j=G/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(j*ee.width),ye=Math.floor(j*ee.height);h===void 0&&(h=_(Z,ye));const ue=x?_(Z,ye):h;return ue.width=Z,ue.height=ye,ue.getContext("2d").drawImage(b,0,0,Z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+ye+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function g(b){return b.generateMipmaps}function m(b){t.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(b,x,G,j,ee=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===t.RED&&(G===t.FLOAT&&(Z=t.R32F),G===t.HALF_FLOAT&&(Z=t.R16F),G===t.UNSIGNED_BYTE&&(Z=t.R8)),x===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Z=t.R8UI),G===t.UNSIGNED_SHORT&&(Z=t.R16UI),G===t.UNSIGNED_INT&&(Z=t.R32UI),G===t.BYTE&&(Z=t.R8I),G===t.SHORT&&(Z=t.R16I),G===t.INT&&(Z=t.R32I)),x===t.RG&&(G===t.FLOAT&&(Z=t.RG32F),G===t.HALF_FLOAT&&(Z=t.RG16F),G===t.UNSIGNED_BYTE&&(Z=t.RG8)),x===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Z=t.RG8UI),G===t.UNSIGNED_SHORT&&(Z=t.RG16UI),G===t.UNSIGNED_INT&&(Z=t.RG32UI),G===t.BYTE&&(Z=t.RG8I),G===t.SHORT&&(Z=t.RG16I),G===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),G===t.UNSIGNED_INT&&(Z=t.RGB32UI),G===t.BYTE&&(Z=t.RGB8I),G===t.SHORT&&(Z=t.RGB16I),G===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),G===t.UNSIGNED_INT&&(Z=t.RGBA32UI),G===t.BYTE&&(Z=t.RGBA8I),G===t.SHORT&&(Z=t.RGBA16I),G===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),x===t.RGBA){const ye=ee?il:je.getTransfer(j);G===t.FLOAT&&(Z=t.RGBA32F),G===t.HALF_FLOAT&&(Z=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Z=ye===ot?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(b,x){let G;return b?x===null||x===eo||x===Vo?G=t.DEPTH24_STENCIL8:x===Ri?G=t.DEPTH32F_STENCIL8:x===Ls&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===eo||x===Vo?G=t.DEPTH_COMPONENT24:x===Ri?G=t.DEPTH_COMPONENT32F:x===Ls&&(G=t.DEPTH_COMPONENT16),G}function N(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==ri?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),O(x),x.isVideoTexture&&d.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),S(x)}function O(b){const x=i.get(b);if(x.__webglInit===void 0)return;const G=b.source,j=f.get(G);if(j){const ee=j[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(b),Object.keys(j).length===0&&f.delete(G)}i.remove(b)}function T(b){const x=i.get(b);t.deleteTexture(x.__webglTexture);const G=b.source,j=f.get(G);delete j[x.__cacheKey],s.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ee=0;ee<x.__webglFramebuffer[j].length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[j][ee]);else t.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)t.deleteFramebuffer(x.__webglFramebuffer[j]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=b.textures;for(let j=0,ee=G.length;j<ee;j++){const Z=i.get(G[j]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),s.memory.textures--),i.remove(G[j])}i.remove(b)}let C=0;function H(){C=0}function F(){const b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function Y(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function K(b,x){const G=i.get(b);if(b.isVideoTexture&&Ce(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,b,x);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+x)}function q(b,x){const G=i.get(b);if(b.version>0&&G.__version!==b.version){$(G,b,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+x)}function J(b,x){const G=i.get(b);if(b.version>0&&G.__version!==b.version){$(G,b,x);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+x)}function z(b,x){const G=i.get(b);if(b.version>0&&G.__version!==b.version){ie(G,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+x)}const oe={[bc]:t.REPEAT,[Or]:t.CLAMP_TO_EDGE,[wc]:t.MIRRORED_REPEAT},ae={[gn]:t.NEAREST,[Gp]:t.NEAREST_MIPMAP_NEAREST,[$s]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[gl]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},ve={[Wp]:t.NEVER,[$p]:t.ALWAYS,[zp]:t.LESS,[qd]:t.LEQUAL,[Xp]:t.EQUAL,[Yp]:t.GEQUAL,[qp]:t.GREATER,[Kp]:t.NOTEQUAL};function Ue(b,x){if(x.type===Ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ri||x.magFilter===gl||x.magFilter===$s||x.magFilter===Dr||x.minFilter===ri||x.minFilter===gl||x.minFilter===$s||x.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,oe[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,oe[x.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,oe[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ae[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==$s&&x.minFilter!==Dr||x.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function et(b,x){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const j=x.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const Z=Y(x);if(Z!==b.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,G=!0),ee[Z].usedTimes++;const ye=ee[b.__cacheKey];ye!==void 0&&(ee[b.__cacheKey].usedTimes--,ye.usedTimes===0&&T(x)),b.__cacheKey=Z,b.__webglTexture=ee[Z].texture}return G}function $(b,x,G){let j=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=t.TEXTURE_3D);const ee=et(b,x),Z=x.source;n.bindTexture(j,b.__webglTexture,t.TEXTURE0+G);const ye=i.get(Z);if(Z.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const ue=je.getPrimaries(je.workingColorSpace),me=x.colorSpace===Qi?null:je.getPrimaries(x.colorSpace),Ze=x.colorSpace===Qi||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let te=v(x.image,!1,r.maxTextureSize);te=ut(x,te);const ge=o.convert(x.format,x.colorSpace),Ie=o.convert(x.type);let Ne=E(x.internalFormat,ge,Ie,x.colorSpace,x.isVideoTexture);Ue(j,x);let _e;const Ye=x.mipmaps,Ve=x.isVideoTexture!==!0,lt=ye.__version===void 0||ee===!0,D=Z.dataReady,le=N(x,te);if(x.isDepthTexture)Ne=M(x.format===Wo,x.type),lt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Ne,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Ne,te.width,te.height,0,ge,Ie,null));else if(x.isDataTexture)if(Ye.length>0){Ve&&lt&&n.texStorage2D(t.TEXTURE_2D,le,Ne,Ye[0].width,Ye[0].height);for(let X=0,Q=Ye.length;X<Q;X++)_e=Ye[X],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,X,Ne,_e.width,_e.height,0,ge,Ie,_e.data);x.generateMipmaps=!1}else Ve?(lt&&n.texStorage2D(t.TEXTURE_2D,le,Ne,te.width,te.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,ge,Ie,te.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,te.width,te.height,0,ge,Ie,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ne,Ye[0].width,Ye[0].height,te.depth);for(let X=0,Q=Ye.length;X<Q;X++)if(_e=Ye[X],x.format!==Bn)if(ge!==null)if(Ve){if(D)if(x.layerUpdates.size>0){const he=qf(_e.width,_e.height,x.format,x.type);for(const fe of x.layerUpdates){const Be=_e.data.subarray(fe*he/_e.data.BYTES_PER_ELEMENT,(fe+1)*he/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,fe,_e.width,_e.height,1,ge,Be)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,te.depth,ge,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Ne,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,te.depth,ge,Ie,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Ne,_e.width,_e.height,te.depth,0,ge,Ie,_e.data)}else{Ve&&lt&&n.texStorage2D(t.TEXTURE_2D,le,Ne,Ye[0].width,Ye[0].height);for(let X=0,Q=Ye.length;X<Q;X++)_e=Ye[X],x.format!==Bn?ge!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,X,Ne,_e.width,_e.height,0,ge,Ie,_e.data)}else if(x.isDataArrayTexture)if(Ve){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ne,te.width,te.height,te.depth),D)if(x.layerUpdates.size>0){const X=qf(te.width,te.height,x.format,x.type);for(const Q of x.layerUpdates){const he=te.data.subarray(Q*X/te.data.BYTES_PER_ELEMENT,(Q+1)*X/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,ge,Ie,he)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Ie,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,te.width,te.height,te.depth,0,ge,Ie,te.data);else if(x.isData3DTexture)Ve?(lt&&n.texStorage3D(t.TEXTURE_3D,le,Ne,te.width,te.height,te.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Ie,te.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,te.width,te.height,te.depth,0,ge,Ie,te.data);else if(x.isFramebufferTexture){if(lt)if(Ve)n.texStorage2D(t.TEXTURE_2D,le,Ne,te.width,te.height);else{let X=te.width,Q=te.height;for(let he=0;he<le;he++)n.texImage2D(t.TEXTURE_2D,he,Ne,X,Q,0,ge,Ie,null),X>>=1,Q>>=1}}else if(Ye.length>0){if(Ve&&lt){const X=Re(Ye[0]);n.texStorage2D(t.TEXTURE_2D,le,Ne,X.width,X.height)}for(let X=0,Q=Ye.length;X<Q;X++)_e=Ye[X],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge,Ie,_e):n.texImage2D(t.TEXTURE_2D,X,Ne,ge,Ie,_e);x.generateMipmaps=!1}else if(Ve){if(lt){const X=Re(te);n.texStorage2D(t.TEXTURE_2D,le,Ne,X.width,X.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ie,te)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ge,Ie,te);g(x)&&m(j),ye.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ie(b,x,G){if(x.image.length!==6)return;const j=et(b,x),ee=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+G);const Z=i.get(ee);if(ee.version!==Z.__version||j===!0){n.activeTexture(t.TEXTURE0+G);const ye=je.getPrimaries(je.workingColorSpace),ue=x.colorSpace===Qi?null:je.getPrimaries(x.colorSpace),me=x.colorSpace===Qi||ye===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Ze&&!te?ge[Q]=v(x.image[Q],!0,r.maxCubemapSize):ge[Q]=te?x.image[Q].image:x.image[Q],ge[Q]=ut(x,ge[Q]);const Ie=ge[0],Ne=o.convert(x.format,x.colorSpace),_e=o.convert(x.type),Ye=E(x.internalFormat,Ne,_e,x.colorSpace),Ve=x.isVideoTexture!==!0,lt=Z.__version===void 0||j===!0,D=ee.dataReady;let le=N(x,Ie);Ue(t.TEXTURE_CUBE_MAP,x);let X;if(Ze){Ve&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ye,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){X=ge[Q].mipmaps;for(let he=0;he<X.length;he++){const fe=X[he];x.format!==Bn?Ne!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,fe.width,fe.height,Ne,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,fe.width,fe.height,Ne,_e,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ye,fe.width,fe.height,0,Ne,_e,fe.data)}}}else{if(X=x.mipmaps,Ve&&lt){X.length>0&&le++;const Q=Re(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Ne,_e,ge[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,ge[Q].width,ge[Q].height,0,Ne,_e,ge[Q].data);for(let he=0;he<X.length;he++){const Be=X[he].image[Q].image;Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Be.width,Be.height,Ne,_e,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ye,Be.width,Be.height,0,Ne,_e,Be.data)}}else{Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ne,_e,ge[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,Ne,_e,ge[Q]);for(let he=0;he<X.length;he++){const fe=X[he];Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Ne,_e,fe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ye,Ne,_e,fe.image[Q])}}}g(x)&&m(t.TEXTURE_CUBE_MAP),Z.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ee(b,x,G,j,ee,Z){const ye=o.convert(G.format,G.colorSpace),ue=o.convert(G.type),me=E(G.internalFormat,ye,ue,G.colorSpace),Ze=i.get(x),te=i.get(G);if(te.__renderTarget=x,!Ze.__hasExternalTextures){const ge=Math.max(1,x.width>>Z),Ie=Math.max(1,x.height>>Z);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Z,me,ge,Ie,x.depth,0,ye,ue,null):n.texImage2D(ee,Z,me,ge,Ie,0,ye,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ke(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,ee,te.__webglTexture,0,qe(x)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,ee,te.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(b,x,G){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer){const j=x.depthTexture,ee=j&&j.isDepthTexture?j.type:null,Z=M(x.stencilBuffer,ee),ye=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=qe(x);Ke(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Z,x.width,x.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,b)}else{const j=x.textures;for(let ee=0;ee<j.length;ee++){const Z=j[ee],ye=o.convert(Z.format,Z.colorSpace),ue=o.convert(Z.type),me=E(Z.internalFormat,ye,ue,Z.colorSpace),Ze=qe(x);G&&Ke(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,me,x.width,x.height):Ke(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,me,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,me,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const ee=j.__webglTexture,Z=qe(x);if(x.depthTexture.format===Po)Ke(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Wo)Ke(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const x=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=j}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Oe(x.__webglFramebuffer,b)}else if(G){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=t.createRenderbuffer(),ce(x.__webglDepthbuffer[j],b,!1);else{const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ce(x.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(b,x,G){const j=i.get(b);x!==void 0&&Ee(j.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Fe(b)}function gt(b){const x=b.texture,G=i.get(b),j=i.get(x);b.addEventListener("dispose",w);const ee=b.textures,Z=b.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=x.version,s.memory.textures++),Z){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let me=0;me<x.mipmaps.length;me++)G.__webglFramebuffer[ue][me]=t.createFramebuffer()}else G.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)G.__webglFramebuffer[ue]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ye)for(let ue=0,me=ee.length;ue<me;ue++){const Ze=i.get(ee[ue]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),s.memory.textures++)}if(b.samples>0&&Ke(b)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const me=ee[ue];G.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Ze=o.convert(me.format,me.colorSpace),te=o.convert(me.type),ge=E(me.internalFormat,Ze,te,me.colorSpace,b.isXRRenderTarget===!0),Ie=qe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(G.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Ee(G.__webglFramebuffer[ue][me],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else Ee(G.__webglFramebuffer[ue],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(x)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ue=0,me=ee.length;ue<me;ue++){const Ze=ee[ue],te=i.get(Ze);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),Ue(t.TEXTURE_2D,Ze),Ee(G.__webglFramebuffer,b,Ze,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(Ze)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,j.__webglTexture),Ue(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Ee(G.__webglFramebuffer[me],b,x,t.COLOR_ATTACHMENT0,ue,me);else Ee(G.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,ue,0);g(x)&&m(ue),n.unbindTexture()}b.depthBuffer&&Fe(b)}function $e(b){const x=b.textures;for(let G=0,j=x.length;G<j;G++){const ee=x[G];if(g(ee)){const Z=A(b),ye=i.get(ee).__webglTexture;n.bindTexture(Z,ye),m(Z),n.unbindTexture()}}}const Mt=[],U=[];function xn(b){if(b.samples>0){if(Ke(b)===!1){const x=b.textures,G=b.width,j=b.height;let ee=t.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(b),ue=x.length>1;if(ue)for(let me=0;me<x.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<x.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const Ze=i.get(x[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,G,j,0,0,G,j,ee,t.NEAREST),c===!0&&(Mt.length=0,U.length=0,Mt.push(t.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Mt.push(Z),U.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<x.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const Ze=i.get(x[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function qe(b){return Math.min(r.maxSamples,b.samples)}function Ke(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ce(b){const x=s.render.frame;d.get(b)!==x&&(d.set(b,x),b.update())}function ut(b,x){const G=b.colorSpace,j=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==$o&&G!==Qi&&(je.getTransfer(G)===ot?(j!==Bn||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=ze,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ke}function px(t,e){function n(i,r=Qi){let o;const s=je.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===xu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Su)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Bd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return t.BYTE;if(i===Fd)return t.SHORT;if(i===Ls)return t.UNSIGNED_SHORT;if(i===vu)return t.INT;if(i===eo)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===Hs)return t.HALF_FLOAT;if(i===Gd)return t.ALPHA;if(i===Hd)return t.RGB;if(i===Bn)return t.RGBA;if(i===kd)return t.LUMINANCE;if(i===Vd)return t.LUMINANCE_ALPHA;if(i===Po)return t.DEPTH_COMPONENT;if(i===Wo)return t.DEPTH_STENCIL;if(i===Wd)return t.RED;if(i===Mu)return t.RED_INTEGER;if(i===zd)return t.RG;if(i===Eu)return t.RG_INTEGER;if(i===yu)return t.RGBA_INTEGER;if(i===Ca||i===Ia||i===Oa||i===Da)if(s===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Ic||i===Oc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Rc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ic)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dc||i===Nc||i===Lc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Dc||i===Nc)return s===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Lc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pc||i===Uc||i===Fc||i===Bc||i===Gc||i===Hc||i===kc||i===Vc||i===Wc||i===zc||i===Xc||i===qc||i===Kc||i===Yc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Pc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===$c||i===Zc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Na)return s===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===jc||i===Qc||i===Jc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Na)return o.COMPRESSED_RED_RGTC1_EXT;if(i===jc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class mx extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class it extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gx={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),m=this._getHandJoint(u,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vx=`
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

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ar({vertexShader:_x,fragmentShader:vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new B(new rl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Zo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,u=null,d=null,h=null,f=null,p=null,_=null;const v=new xx,g=n.getContextAttributes();let m=null,A=null;const E=[],M=[],N=new Xe;let R=null;const w=new tn;w.viewport=new st;const O=new tn;O.viewport=new st;const T=[w,O],S=new mx;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=E[$];return ie===void 0&&(ie=new Wl,E[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=E[$];return ie===void 0&&(ie=new Wl,E[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=E[$];return ie===void 0&&(ie=new Wl,E[$]=ie),ie.getHandSpace()};function F($){const ie=M.indexOf($.inputSource);if(ie===-1)return;const Ee=E[ie];Ee!==void 0&&(Ee.update($.inputSource,$.frame,u||s),Ee.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let $=0;$<E.length;$++){const ie=M[$];ie!==null&&(M[$]=null,E[$].disconnect(ie))}C=null,H=null,v.reset(),e.setRenderTarget(m),p=null,f=null,h=null,r=null,A=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new to(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,Ee=null,ce=null;g.depth&&(ce=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=g.stencil?Wo:Po,Ee=g.stencil?Vo:eo);const Oe={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:o};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new to(f.textureWidth,f.textureHeight,{format:Bn,type:Ni,depthTexture:new oh(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,s=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K($){for(let ie=0;ie<$.removed.length;ie++){const Ee=$.removed[ie],ce=M.indexOf(Ee);ce>=0&&(M[ce]=null,E[ce].disconnect(Ee))}for(let ie=0;ie<$.added.length;ie++){const Ee=$.added[ie];let ce=M.indexOf(Ee);if(ce===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=M.length){M.push(Ee),ce=Fe;break}else if(M[Fe]===null){M[Fe]=Ee,ce=Fe;break}if(ce===-1)break}const Oe=E[ce];Oe&&Oe.connect(Ee)}}const q=new I,J=new I;function z($,ie,Ee){q.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);const ce=q.distanceTo(J),Oe=ie.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,ze=Oe[14]/(Oe[10]-1),gt=Oe[14]/(Oe[10]+1),$e=(Oe[9]+1)/Oe[5],Mt=(Oe[9]-1)/Oe[5],U=(Oe[8]-1)/Oe[0],xn=(Fe[8]+1)/Fe[0],qe=ze*U,Ke=ze*xn,Ce=ce/(-U+xn),ut=Ce*-U;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ut),$.translateZ(Ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Oe[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Re=ze+Ce,b=gt+Ce,x=qe-ut,G=Ke+(ce-ut),j=$e*gt/b*Re,ee=Mt*gt/b*Re;$.projectionMatrix.makePerspective(x,G,j,ee,Re,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,Ee=$.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),S.near=O.near=w.near=ie,S.far=O.far=w.far=Ee,(C!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,H=S.far),w.layers.mask=$.layers.mask|2,O.layers.mask=$.layers.mask|4,S.layers.mask=w.layers.mask|O.layers.mask;const ce=$.parent,Oe=S.cameras;oe(S,ce);for(let Fe=0;Fe<Oe.length;Fe++)oe(Oe[Fe],ce);Oe.length===2?z(S,w,O):S.projectionMatrix.copy(w.projectionMatrix),ae($,S,ce)};function ae($,ie,Ee){Ee===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(Ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ps*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ve=null;function Ue($,ie){if(d=ie.getViewerPose(u||s),_=ie,d!==null){const Ee=d.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ce=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Fe=0;Fe<Ee.length;Fe++){const ze=Ee[Fe];let gt=null;if(p!==null)gt=p.getViewport(ze);else{const Mt=h.getViewSubImage(f,ze);gt=Mt.viewport,Fe===0&&(e.setRenderTargetTextures(A,Mt.colorTexture,f.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(A))}let $e=T[Fe];$e===void 0&&($e=new tn,$e.layers.enable(Fe),$e.viewport=new st,T[Fe]=$e),$e.matrix.fromArray(ze.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ze.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(gt.x,gt.y,gt.width,gt.height),Fe===0&&(S.matrix.copy($e.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push($e)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Fe=h.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let Ee=0;Ee<E.length;Ee++){const ce=M[Ee],Oe=E[Ee];ce!==null&&Oe!==void 0&&Oe.update(ce,ie,u||s)}ve&&ve($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const et=new ih;et.setAnimationLoop(Ue),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const mr=new kn,Mx=new ht;function Ex(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,eh(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,A,E,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),d(g,m)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(o(g,m),_(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),v(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,A,E):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const A=e.get(m),E=A.envMap,M=A.envMapRotation;E&&(g.envMap.value=E,mr.copy(M),mr.x*=-1,mr.y*=-1,mr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(mr)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,A,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=E*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,A){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const A=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yx(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,E){const M=E.program;i.uniformBlockBinding(A,M)}function u(A,E){let M=r[A.id];M===void 0&&(_(A),M=d(A),r[A.id]=M,A.addEventListener("dispose",g));const N=E.program;i.updateUBOMapping(A,N);const R=e.render.frame;o[A.id]!==R&&(f(A),o[A.id]=R)}function d(A){const E=h();A.__bindingPointIndex=E;const M=t.createBuffer(),N=A.__size,R=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,N,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,M),M}function h(){for(let A=0;A<a;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=r[A.id],M=A.uniforms,N=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let R=0,w=M.length;R<w;R++){const O=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,S=O.length;T<S;T++){const C=O[T];if(p(C,R,T,N)===!0){const H=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let K=0;K<F.length;K++){const q=F[K],J=v(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,H+Y,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,E,M,N){const R=A.value,w=E+"_"+M;if(N[w]===void 0)return typeof R=="number"||typeof R=="boolean"?N[w]=R:N[w]=R.clone(),!0;{const O=N[w];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return N[w]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function _(A){const E=A.uniforms;let M=0;const N=16;for(let w=0,O=E.length;w<O;w++){const T=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,C=T.length;S<C;S++){const H=T[S],F=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,K=F.length;Y<K;Y++){const q=F[Y],J=v(q),z=M%N,oe=z%J.boundary,ae=z+oe;M+=oe,ae!==0&&N-ae<J.storage&&(M+=N-ae),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=J.storage}}}const R=M%N;return R>0&&(M+=N-R),A.__size=M,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function g(A){const E=A.target;E.removeEventListener("dispose",g);const M=s.indexOf(E.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function m(){for(const A in r)t.deleteBuffer(r[A]);s=[],r={},o={}}return{bind:c,update:u,dispose:m}}class uh{constructor(e={}){const{canvas:n=d0(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const A=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=tr,this.toneMappingExposure=1;const M=this;let N=!1,R=0,w=0,O=null,T=-1,S=null;const C=new st,H=new st;let F=null;const Y=new we(0);let K=0,q=n.width,J=n.height,z=1,oe=null,ae=null;const ve=new st(0,0,q,J),Ue=new st(0,0,q,J);let et=!1;const $=new wu;let ie=!1,Ee=!1;const ce=new ht,Oe=new ht,Fe=new I,ze=new st,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Mt(){return O===null?z:1}let U=i;function xn(y,L){return n.getContext(y,L)}try{const y={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gu}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",fe,!1),U===null){const L="webgl2";if(U=xn(L,y),U===null)throw xn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let qe,Ke,Ce,ut,Re,b,x,G,j,ee,Z,ye,ue,me,Ze,te,ge,Ie,Ne,_e,Ye,Ve,lt,D;function le(){qe=new C_(U),qe.init(),Ve=new px(U,qe),Ke=new y_(U,qe,e,Ve),Ce=new fx(U,qe),Ke.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),ut=new D_(U),Re=new Zv,b=new hx(U,qe,Ce,Re,Ke,Ve,ut),x=new A_(M),G=new R_(M),j=new G0(U),lt=new M_(U,j),ee=new I_(U,j,ut,lt),Z=new L_(U,ee,j,ut),Ne=new N_(U,Ke,b),te=new T_(Re),ye=new $v(M,x,G,qe,Ke,lt,te),ue=new Ex(M,Re),me=new Qv,Ze=new rx(qe),Ie=new S_(M,x,G,Ce,Z,p,c),ge=new cx(M,Z,Ke),D=new yx(U,ut,Ke,Ce),_e=new E_(U,qe,ut),Ye=new O_(U,qe,ut),ut.programs=ye.programs,M.capabilities=Ke,M.extensions=qe,M.properties=Re,M.renderLists=me,M.shadowMap=ge,M.state=Ce,M.info=ut}le();const X=new Sx(M,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(q,J,!1))},this.getSize=function(y){return y.set(q,J)},this.setSize=function(y,L,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,J=L,n.width=Math.floor(y*z),n.height=Math.floor(L*z),k===!0&&(n.style.width=y+"px",n.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(q*z,J*z).floor()},this.setDrawingBufferSize=function(y,L,k){q=y,J=L,z=k,n.width=Math.floor(y*k),n.height=Math.floor(L*k),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(ve)},this.setViewport=function(y,L,k,V){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,L,k,V),Ce.viewport(C.copy(ve).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Ue)},this.setScissor=function(y,L,k,V){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,L,k,V),Ce.scissor(H.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){Ce.setScissorTest(et=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(y=!0,L=!0,k=!0){let V=0;if(y){let P=!1;if(O!==null){const ne=O.texture.format;P=ne===yu||ne===Eu||ne===Mu}if(P){const ne=O.texture.type,de=ne===Ni||ne===eo||ne===Ls||ne===Vo||ne===xu||ne===Su,xe=Ie.getClearColor(),Se=Ie.getClearAlpha(),Pe=xe.r,Ge=xe.g,Me=xe.b;de?(_[0]=Pe,_[1]=Ge,_[2]=Me,_[3]=Se,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=Pe,v[1]=Ge,v[2]=Me,v[3]=Se,U.clearBufferiv(U.COLOR,0,v))}else V|=U.COLOR_BUFFER_BIT}L&&(V|=U.DEPTH_BUFFER_BIT),k&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),Ze.dispose(),Re.dispose(),x.dispose(),G.dispose(),Z.dispose(),lt.dispose(),D.dispose(),ye.dispose(),X.dispose(),X.removeEventListener("sessionstart",Gu),X.removeEventListener("sessionend",Hu),cr.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const y=ut.autoReset,L=ge.enabled,k=ge.autoUpdate,V=ge.needsUpdate,P=ge.type;le(),ut.autoReset=y,ge.enabled=L,ge.autoUpdate=k,ge.needsUpdate=V,ge.type=P}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const L=y.target;L.removeEventListener("dispose",Be),vt(L)}function vt(y){Ft(y),Re.remove(y)}function Ft(y){const L=Re.get(y).programs;L!==void 0&&(L.forEach(function(k){ye.releaseProgram(k)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,k,V,P,ne){L===null&&(L=gt);const de=P.isMesh&&P.matrixWorld.determinant()<0,xe=op(y,L,k,V,P);Ce.setMaterial(V,de);let Se=k.index,Pe=1;if(V.wireframe===!0){if(Se=ee.getWireframeAttribute(k),Se===void 0)return;Pe=2}const Ge=k.drawRange,Me=k.attributes.position;let Je=Ge.start*Pe,ct=(Ge.start+Ge.count)*Pe;ne!==null&&(Je=Math.max(Je,ne.start*Pe),ct=Math.min(ct,(ne.start+ne.count)*Pe)),Se!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Se.count)):Me!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,Me.count));const ft=ct-Je;if(ft<0||ft===1/0)return;lt.setup(P,V,xe,k,Se);let jt,tt=_e;if(Se!==null&&(jt=j.get(Se),tt=Ye,tt.setIndex(jt)),P.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*Mt()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(P.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*Mt()),P.isLineSegments?tt.setMode(U.LINES):P.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else P.isPoints?tt.setMode(U.POINTS):P.isSprite&&tt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)tt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))tt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Te=P._multiDrawStarts,hi=P._multiDrawCounts,nt=P._multiDrawCount,bn=Se?j.get(Se).bytesPerElement:1,ro=Re.get(V).currentProgram.getUniforms();for(let an=0;an<nt;an++)ro.setValue(U,"_gl_DrawID",an),tt.render(Te[an]/bn,hi[an])}else if(P.isInstancedMesh)tt.renderInstances(Je,ft,P.count);else if(k.isInstancedBufferGeometry){const Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,hi=Math.min(k.instanceCount,Te);tt.renderInstances(Je,ft,hi)}else tt.render(Je,ft)};function rt(y,L,k){y.transparent===!0&&y.side===Un&&y.forceSinglePass===!1?(y.side=sn,y.needsUpdate=!0,Ys(y,L,k),y.side=sr,y.needsUpdate=!0,Ys(y,L,k),y.side=Un):Ys(y,L,k)}this.compile=function(y,L,k=null){k===null&&(k=y),m=Ze.get(k),m.init(L),E.push(m),k.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),y!==k&&y.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();const V=new Set;return y.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const ne=P.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const xe=ne[de];rt(xe,k,P),V.add(xe)}else rt(ne,k,P),V.add(ne)}),E.pop(),m=null,V},this.compileAsync=function(y,L,k=null){const V=this.compile(y,L,k);return new Promise(P=>{function ne(){if(V.forEach(function(de){Re.get(de).currentProgram.isReady()&&V.delete(de)}),V.size===0){P(y);return}setTimeout(ne,10)}qe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let An=null;function di(y){An&&An(y)}function Gu(){cr.stop()}function Hu(){cr.start()}const cr=new ih;cr.setAnimationLoop(di),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(y){An=y,X.setAnimationLoop(y),y===null?cr.stop():cr.start()},X.addEventListener("sessionstart",Gu),X.addEventListener("sessionend",Hu),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,L,O),m=Ze.get(y,E.length),m.init(L),E.push(m),Oe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$.setFromProjectionMatrix(Oe),Ee=this.localClippingEnabled,ie=te.init(this.clippingPlanes,Ee),g=me.get(y,A.length),g.init(),A.push(g),X.enabled===!0&&X.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&ml(ne,L,-1/0,M.sortObjects)}ml(y,L,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(oe,ae),$e=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,$e&&Ie.addToRenderList(g,y),this.info.render.frame++,ie===!0&&te.beginShadows();const k=m.state.shadowsArray;ge.render(k,y,L),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,P=g.transmissive;if(m.setupLights(),L.isArrayCamera){const ne=L.cameras;if(P.length>0)for(let de=0,xe=ne.length;de<xe;de++){const Se=ne[de];Vu(V,P,y,Se)}$e&&Ie.render(y);for(let de=0,xe=ne.length;de<xe;de++){const Se=ne[de];ku(g,y,Se,Se.viewport)}}else P.length>0&&Vu(V,P,y,L),$e&&Ie.render(y),ku(g,y,L);O!==null&&(b.updateMultisampleRenderTarget(O),b.updateRenderTargetMipmap(O)),y.isScene===!0&&y.onAfterRender(M,y,L),lt.resetDefaultState(),T=-1,S=null,E.pop(),E.length>0?(m=E[E.length-1],ie===!0&&te.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function ml(y,L,k,V){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){V&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);const de=Z.update(y),xe=y.material;xe.visible&&g.push(y,de,xe,k,ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const de=Z.update(y),xe=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ze.copy(de.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(Oe)),Array.isArray(xe)){const Se=de.groups;for(let Pe=0,Ge=Se.length;Pe<Ge;Pe++){const Me=Se[Pe],Je=xe[Me.materialIndex];Je&&Je.visible&&g.push(y,de,Je,k,ze.z,Me)}}else xe.visible&&g.push(y,de,xe,k,ze.z,null)}}const ne=y.children;for(let de=0,xe=ne.length;de<xe;de++)ml(ne[de],L,k,V)}function ku(y,L,k,V){const P=y.opaque,ne=y.transmissive,de=y.transparent;m.setupLightsView(k),ie===!0&&te.setGlobalState(M.clippingPlanes,k),V&&Ce.viewport(C.copy(V)),P.length>0&&Ks(P,L,k),ne.length>0&&Ks(ne,L,k),de.length>0&&Ks(de,L,k),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Vu(y,L,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new to(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Hs:Ni,minFilter:Dr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ne=m.state.transmissionRenderTarget[V.id],de=V.viewport||C;ne.setSize(de.z,de.w);const xe=M.getRenderTarget();M.setRenderTarget(ne),M.getClearColor(Y),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),$e&&Ie.render(k);const Se=M.toneMapping;M.toneMapping=tr;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),ie===!0&&te.setGlobalState(M.clippingPlanes,V),Ks(y,k,V),b.updateMultisampleRenderTarget(ne),b.updateRenderTargetMipmap(ne),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Me=0,Je=L.length;Me<Je;Me++){const ct=L[Me],ft=ct.object,jt=ct.geometry,tt=ct.material,Te=ct.group;if(tt.side===Un&&ft.layers.test(V.layers)){const hi=tt.side;tt.side=sn,tt.needsUpdate=!0,Wu(ft,k,V,jt,tt,Te),tt.side=hi,tt.needsUpdate=!0,Ge=!0}}Ge===!0&&(b.updateMultisampleRenderTarget(ne),b.updateRenderTargetMipmap(ne))}M.setRenderTarget(xe),M.setClearColor(Y,K),Pe!==void 0&&(V.viewport=Pe),M.toneMapping=Se}function Ks(y,L,k){const V=L.isScene===!0?L.overrideMaterial:null;for(let P=0,ne=y.length;P<ne;P++){const de=y[P],xe=de.object,Se=de.geometry,Pe=V===null?de.material:V,Ge=de.group;xe.layers.test(k.layers)&&Wu(xe,L,k,Se,Pe,Ge)}}function Wu(y,L,k,V,P,ne){y.onBeforeRender(M,L,k,V,P,ne),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),P.onBeforeRender(M,L,k,V,y,ne),P.transparent===!0&&P.side===Un&&P.forceSinglePass===!1?(P.side=sn,P.needsUpdate=!0,M.renderBufferDirect(k,L,V,P,y,ne),P.side=sr,P.needsUpdate=!0,M.renderBufferDirect(k,L,V,P,y,ne),P.side=Un):M.renderBufferDirect(k,L,V,P,y,ne),y.onAfterRender(M,L,k,V,P,ne)}function Ys(y,L,k){L.isScene!==!0&&(L=gt);const V=Re.get(y),P=m.state.lights,ne=m.state.shadowsArray,de=P.state.version,xe=ye.getParameters(y,P.state,ne,L,k),Se=ye.getProgramCacheKey(xe);let Pe=V.programs;V.environment=y.isMeshStandardMaterial?L.environment:null,V.fog=L.fog,V.envMap=(y.isMeshStandardMaterial?G:x).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",Be),Pe=new Map,V.programs=Pe);let Ge=Pe.get(Se);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===de)return Xu(y,xe),Ge}else xe.uniforms=ye.getUniforms(y),y.onBeforeCompile(xe,M),Ge=ye.acquireProgram(xe,Se),Pe.set(Se,Ge),V.uniforms=xe.uniforms;const Me=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=te.uniform),Xu(y,xe),V.needsLights=ap(y),V.lightsStateVersion=de,V.needsLights&&(Me.ambientLightColor.value=P.state.ambient,Me.lightProbe.value=P.state.probe,Me.directionalLights.value=P.state.directional,Me.directionalLightShadows.value=P.state.directionalShadow,Me.spotLights.value=P.state.spot,Me.spotLightShadows.value=P.state.spotShadow,Me.rectAreaLights.value=P.state.rectArea,Me.ltc_1.value=P.state.rectAreaLTC1,Me.ltc_2.value=P.state.rectAreaLTC2,Me.pointLights.value=P.state.point,Me.pointLightShadows.value=P.state.pointShadow,Me.hemisphereLights.value=P.state.hemi,Me.directionalShadowMap.value=P.state.directionalShadowMap,Me.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Me.spotShadowMap.value=P.state.spotShadowMap,Me.spotLightMatrix.value=P.state.spotLightMatrix,Me.spotLightMap.value=P.state.spotLightMap,Me.pointShadowMap.value=P.state.pointShadowMap,Me.pointShadowMatrix.value=P.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function zu(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=Pa.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Xu(y,L){const k=Re.get(y);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function op(y,L,k,V,P){L.isScene!==!0&&(L=gt),b.resetTextureUnits();const ne=L.fog,de=V.isMeshStandardMaterial?L.environment:null,xe=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:$o,Se=(V.isMeshStandardMaterial?G:x).get(V.envMap||de),Pe=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ft=tr;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ft=M.toneMapping);const jt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=jt!==void 0?jt.length:0,Te=Re.get(V),hi=m.state.lights;if(ie===!0&&(Ee===!0||y!==S)){const Sn=y===S&&V.id===T;te.setState(V,y,Sn)}let nt=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==hi.state.version||Te.outputColorSpace!==xe||P.isBatchedMesh&&Te.batching===!1||!P.isBatchedMesh&&Te.batching===!0||P.isBatchedMesh&&Te.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Te.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Te.instancing===!1||!P.isInstancedMesh&&Te.instancing===!0||P.isSkinnedMesh&&Te.skinning===!1||!P.isSkinnedMesh&&Te.skinning===!0||P.isInstancedMesh&&Te.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Te.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Te.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Te.instancingMorph===!1&&P.morphTexture!==null||Te.envMap!==Se||V.fog===!0&&Te.fog!==ne||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Ge||Te.morphTargets!==Me||Te.morphNormals!==Je||Te.morphColors!==ct||Te.toneMapping!==ft||Te.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Te.__version=V.version);let bn=Te.currentProgram;nt===!0&&(bn=Ys(V,L,P));let ro=!1,an=!1,ns=!1;const dt=bn.getUniforms(),Wn=Te.uniforms;if(Ce.useProgram(bn.program)&&(ro=!0,an=!0,ns=!0),V.id!==T&&(T=V.id,an=!0),ro||S!==y){Ce.buffers.depth.getReversed()?(ce.copy(y.projectionMatrix),p0(ce),m0(ce),dt.setValue(U,"projectionMatrix",ce)):dt.setValue(U,"projectionMatrix",y.projectionMatrix),dt.setValue(U,"viewMatrix",y.matrixWorldInverse);const Pi=dt.map.cameraPosition;Pi!==void 0&&Pi.setValue(U,Fe.setFromMatrixPosition(y.matrixWorld)),Ke.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,an=!0,ns=!0)}if(P.isSkinnedMesh){dt.setOptional(U,P,"bindMatrix"),dt.setOptional(U,P,"bindMatrixInverse");const Sn=P.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),dt.setValue(U,"boneTexture",Sn.boneTexture,b))}P.isBatchedMesh&&(dt.setOptional(U,P,"batchingTexture"),dt.setValue(U,"batchingTexture",P._matricesTexture,b),dt.setOptional(U,P,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",P._indirectTexture,b),dt.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",P._colorsTexture,b));const is=k.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Ne.update(P,k,bn),(an||Te.receiveShadow!==P.receiveShadow)&&(Te.receiveShadow=P.receiveShadow,dt.setValue(U,"receiveShadow",P.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Wn.envMap.value=Se,Wn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&L.environment!==null&&(Wn.envMapIntensity.value=L.environmentIntensity),an&&(dt.setValue(U,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&sp(Wn,ns),ne&&V.fog===!0&&ue.refreshFogUniforms(Wn,ne),ue.refreshMaterialUniforms(Wn,V,z,J,m.state.transmissionRenderTarget[y.id]),Pa.upload(U,zu(Te),Wn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pa.upload(U,zu(Te),Wn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(U,"center",P.center),dt.setValue(U,"modelViewMatrix",P.modelViewMatrix),dt.setValue(U,"normalMatrix",P.normalMatrix),dt.setValue(U,"modelMatrix",P.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Sn=V.uniformsGroups;for(let Pi=0,Ui=Sn.length;Pi<Ui;Pi++){const qu=Sn[Pi];D.update(qu,bn),D.bind(qu,bn)}}return bn}function sp(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function ap(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,L,k){Re.get(y.texture).__webglTexture=L,Re.get(y.depthTexture).__webglTexture=k;const V=Re.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const k=Re.get(y);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,k=0){O=y,R=L,w=k;let V=!0,P=null,ne=!1,de=!1;if(y){const Se=Re.get(y);if(Se.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Se.__hasExternalTextures)b.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Me=y.depthTexture;if(Se.__boundDepthTexture!==Me){if(Me!==null&&Re.has(Me)&&(y.width!==Me.image.width||y.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(de=!0);const Ge=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ge[L])?P=Ge[L][k]:P=Ge[L],ne=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?P=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(Ge)?P=Ge[k]:P=Ge,C.copy(y.viewport),H.copy(y.scissor),F=y.scissorTest}else C.copy(ve).multiplyScalar(z).floor(),H.copy(Ue).multiplyScalar(z).floor(),F=et;if(Ce.bindFramebuffer(U.FRAMEBUFFER,P)&&V&&Ce.drawBuffers(y,P),Ce.viewport(C),Ce.scissor(H),Ce.setScissorTest(F),ne){const Se=Re.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,Se.__webglTexture,k)}else if(de){const Se=Re.get(y.texture),Pe=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,k||0,Pe)}T=-1},this.readRenderTargetPixels=function(y,L,k,V,P,ne,de){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){Ce.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Se=y.texture,Pe=Se.format,Ge=Se.type;if(!Ke.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-V&&k>=0&&k<=y.height-P&&U.readPixels(L,k,V,P,Ve.convert(Pe),Ve.convert(Ge),ne)}finally{const Se=O!==null?Re.get(O).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(y,L,k,V,P,ne,de){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){const Se=y.texture,Pe=Se.format,Ge=Se.type;if(!Ke.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-V&&k>=0&&k<=y.height-P){Ce.bindFramebuffer(U.FRAMEBUFFER,xe);const Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),U.readPixels(L,k,V,P,Ve.convert(Pe),Ve.convert(Ge),0);const Je=O!==null?Re.get(O).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Je);const ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await h0(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne),U.deleteBuffer(Me),U.deleteSync(ct),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,k=0){y.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-k),P=Math.floor(y.image.width*V),ne=Math.floor(y.image.height*V),de=L!==null?L.x:0,xe=L!==null?L.y:0;b.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,de,xe,P,ne),Ce.unbindTexture()},this.copyTextureToTexture=function(y,L,k=null,V=null,P=0){y.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],L=arguments[2],P=arguments[3]||0,k=null);let ne,de,xe,Se,Pe,Ge,Me,Je,ct;const ft=y.isCompressedTexture?y.mipmaps[P]:y.image;k!==null?(ne=k.max.x-k.min.x,de=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,Se=k.min.x,Pe=k.min.y,Ge=k.isBox3?k.min.z:0):(ne=ft.width,de=ft.height,xe=ft.depth||1,Se=0,Pe=0,Ge=0),V!==null?(Me=V.x,Je=V.y,ct=V.z):(Me=0,Je=0,ct=0);const jt=Ve.convert(L.format),tt=Ve.convert(L.type);let Te;L.isData3DTexture?(b.setTexture3D(L,0),Te=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(b.setTexture2DArray(L,0),Te=U.TEXTURE_2D_ARRAY):(b.setTexture2D(L,0),Te=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const hi=U.getParameter(U.UNPACK_ROW_LENGTH),nt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),bn=U.getParameter(U.UNPACK_SKIP_PIXELS),ro=U.getParameter(U.UNPACK_SKIP_ROWS),an=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const ns=y.isDataArrayTexture||y.isData3DTexture,dt=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Wn=Re.get(y),is=Re.get(L),Sn=Re.get(Wn.__renderTarget),Pi=Re.get(is.__renderTarget);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ui=0;Ui<xe;Ui++)ns&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(y).__webglTexture,P,Ge+Ui),y.isDepthTexture?(dt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(L).__webglTexture,P,ct+Ui),U.blitFramebuffer(Se,Pe,ne,de,Me,Je,ne,de,U.DEPTH_BUFFER_BIT,U.NEAREST)):dt?U.copyTexSubImage3D(Te,P,Me,Je,ct+Ui,Se,Pe,ne,de):U.copyTexSubImage2D(Te,P,Me,Je,ct+Ui,Se,Pe,ne,de);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Te,P,Me,Je,ct,ne,de,xe,jt,tt,ft.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,P,Me,Je,ct,ne,de,xe,jt,ft.data):U.texSubImage3D(Te,P,Me,Je,ct,ne,de,xe,jt,tt,ft):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,Me,Je,ne,de,jt,tt,ft.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,Me,Je,ft.width,ft.height,jt,ft.data):U.texSubImage2D(U.TEXTURE_2D,P,Me,Je,ne,de,jt,tt,ft);U.pixelStorei(U.UNPACK_ROW_LENGTH,hi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ro),U.pixelStorei(U.UNPACK_SKIP_IMAGES,an),P===0&&L.generateMipmaps&&U.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(y,L,k=null,V=null,P=0){return y.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,y=arguments[2],L=arguments[3],P=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,k,V,P)},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),Ce.unbindTexture()},this.resetState=function(){R=0,w=0,O=null,Ce.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}class Cu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=n,this.far=i}clone(){return new Cu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fh extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dh extends lr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new I,Wa=new I,Kf=new ht,ls=new bu,ga=new Ws,zl=new I,Yf=new I;class Tx extends wt{constructor(e=new vn,n=new dh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Va.fromBufferAttribute(n,r-1),Wa.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Va.distanceTo(Wa);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ga.radius+=o,e.ray.intersectsSphere(ga)===!1)return;Kf.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Kf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let v=p,g=_-1;v<g;v+=u){const m=d.getX(v),A=d.getX(v+1),E=_a(this,e,ls,c,m,A);E&&n.push(E)}if(this.isLineLoop){const v=d.getX(_-1),g=d.getX(p),m=_a(this,e,ls,c,v,g);m&&n.push(m)}}else{const p=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let v=p,g=_-1;v<g;v+=u){const m=_a(this,e,ls,c,v,v+1);m&&n.push(m)}if(this.isLineLoop){const v=_a(this,e,ls,c,_-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function _a(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(Va.fromBufferAttribute(s,r),Wa.fromBufferAttribute(s,o),n.distanceSqToSegment(Va,Wa,zl,Yf)>i)return;zl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(zl);if(!(c<e.near||c>e.far))return{distance:c,point:Yf.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const $f=new I,Zf=new I;class Ax extends Tx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)$f.fromBufferAttribute(n,r),Zf.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$f.distanceTo(Zf);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hh extends lr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jf=new ht,tu=new bu,va=new Ws,xa=new I;class bx extends wt{constructor(e=new vn,n=new hh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),va.radius+=o,e.ray.intersectsSphere(va)===!1)return;jf.copy(r).invert(),tu.copy(e.ray).applyMatrix4(jf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=f,v=p;_<v;_++){const g=u.getX(_);xa.fromBufferAttribute(h,g),Qf(xa,g,c,r,e,n,this)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=f,v=p;_<v;_++)xa.fromBufferAttribute(h,_),Qf(xa,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Qf(t,e,n,i,r,o,s){const a=tu.distanceSqToPoint(t);if(a<n){const c=new I;tu.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class wx extends Zt{constructor(e,n,i,r,o,s,a,c,u){super(e,n,i,r,o,s,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Iu extends vn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const o=[],s=[];a(r),u(i),d(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(A){const E=new I,M=new I,N=new I;for(let R=0;R<n.length;R+=3)p(n[R+0],E),p(n[R+1],M),p(n[R+2],N),c(E,M,N,A)}function c(A,E,M,N){const R=N+1,w=[];for(let O=0;O<=R;O++){w[O]=[];const T=A.clone().lerp(M,O/R),S=E.clone().lerp(M,O/R),C=R-O;for(let H=0;H<=C;H++)H===0&&O===R?w[O][H]=T:w[O][H]=T.clone().lerp(S,H/C)}for(let O=0;O<R;O++)for(let T=0;T<2*(R-O)-1;T++){const S=Math.floor(T/2);T%2===0?(f(w[O][S+1]),f(w[O+1][S]),f(w[O][S])):(f(w[O][S+1]),f(w[O+1][S+1]),f(w[O+1][S]))}}function u(A){const E=new I;for(let M=0;M<o.length;M+=3)E.x=o[M+0],E.y=o[M+1],E.z=o[M+2],E.normalize().multiplyScalar(A),o[M+0]=E.x,o[M+1]=E.y,o[M+2]=E.z}function d(){const A=new I;for(let E=0;E<o.length;E+=3){A.x=o[E+0],A.y=o[E+1],A.z=o[E+2];const M=g(A)/2/Math.PI+.5,N=m(A)/Math.PI+.5;s.push(M,1-N)}_(),h()}function h(){for(let A=0;A<s.length;A+=6){const E=s[A+0],M=s[A+2],N=s[A+4],R=Math.max(E,M,N),w=Math.min(E,M,N);R>.9&&w<.1&&(E<.2&&(s[A+0]+=1),M<.2&&(s[A+2]+=1),N<.2&&(s[A+4]+=1))}}function f(A){o.push(A.x,A.y,A.z)}function p(A,E){const M=A*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function _(){const A=new I,E=new I,M=new I,N=new I,R=new Xe,w=new Xe,O=new Xe;for(let T=0,S=0;T<o.length;T+=9,S+=6){A.set(o[T+0],o[T+1],o[T+2]),E.set(o[T+3],o[T+4],o[T+5]),M.set(o[T+6],o[T+7],o[T+8]),R.set(s[S+0],s[S+1]),w.set(s[S+2],s[S+3]),O.set(s[S+4],s[S+5]),N.copy(A).add(E).add(M).divideScalar(3);const C=g(N);v(R,S+0,A,C),v(w,S+2,E,C),v(O,S+4,M,C)}}function v(A,E,M,N){N<0&&A.x===1&&(s[E]=A.x-1),M.x===0&&M.z===0&&(s[E]=N/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function m(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.vertices,e.indices,e.radius,e.details)}}const Sa=new I,Ma=new I,Xl=new I,Ea=new yn;class Rx extends vn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(Uo*n),s=e.getIndex(),a=e.getAttribute("position"),c=s?s.count:a.count,u=[0,0,0],d=["a","b","c"],h=new Array(3),f={},p=[];for(let _=0;_<c;_+=3){s?(u[0]=s.getX(_),u[1]=s.getX(_+1),u[2]=s.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:v,b:g,c:m}=Ea;if(v.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),m.fromBufferAttribute(a,u[2]),Ea.getNormal(Xl),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const E=(A+1)%3,M=h[A],N=h[E],R=Ea[d[A]],w=Ea[d[E]],O=`${M}_${N}`,T=`${N}_${M}`;T in f&&f[T]?(Xl.dot(f[T].normal)<=o&&(p.push(R.x,R.y,R.z),p.push(w.x,w.y,w.z)),f[T]=null):O in f||(f[O]={index0:u[A],index1:u[E],normal:Xl.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:g}=f[_];Sa.fromBufferAttribute(a,v),Ma.fromBufferAttribute(a,g),p.push(Sa.x,Sa.y,Sa.z),p.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new Vt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class za extends Iu{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new za(e.radius,e.detail)}}class xt extends lr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Le extends lr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sl extends wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Cx extends sl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ql=new ht,Jf=new I,ed=new I;class ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wu,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Jf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jf),ed.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ed),n.updateMatrixWorld(),ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const td=new ht,cs=new I,Kl=new I;class Ix extends ph{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(cs),Kl.copy(i.position),Kl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Kl),i.updateMatrixWorld(),r.makeTranslation(-cs.x,-cs.y,-cs.z),td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td)}}class Ox extends sl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ix}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dx extends ph{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends sl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gh extends sl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);let So=null;function mt(){if(!So){const t=window.AudioContext||window.webkitAudioContext;t&&(So=new t)}return So&&So.state==="suspended"&&So.resume(),So}if(typeof window<"u"){const t=()=>{mt(),window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t)}function _h(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(320,e+.12),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}function Nx(t){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(300,n),i.frequency.exponentialRampToValueAtTime(750,n+.18)):(i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(200,n+.18)),r.gain.setValueAtTime(.22,n),r.gain.exponentialRampToValueAtTime(.01,n+.2),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.2)}function Lx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.sampleRate*.08,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*Math.exp(-c/(n*.3));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,e),s.frequency.exponentialRampToValueAtTime(150,e+.08);const a=t.createGain();a.gain.setValueAtTime(.35,e),a.gain.exponentialRampToValueAtTime(.01,e+.08),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function nd(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(80,e+.07),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.01,e+.07),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.07)}function Px(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.exponentialRampToValueAtTime(60,e+.15),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.15),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.15)}function vh(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(450,e),n.frequency.exponentialRampToValueAtTime(120,e+.1),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.1)}function Ux(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(80,e+.14),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function Fx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(95,e),n.frequency.linearRampToValueAtTime(80,e+.25),n.frequency.exponentialRampToValueAtTime(50,e+.5),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}function Bx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.linearRampToValueAtTime(250,e+.08),n.frequency.linearRampToValueAtTime(360,e+.18),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.18),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.18)}function bt(t=!0){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(260,n),i.frequency.exponentialRampToValueAtTime(420,n+.08)):(i.frequency.setValueAtTime(420,n),i.frequency.exponentialRampToValueAtTime(260,n+.08)),r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.01,n+.08),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.08)}function Gx(t=1){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle";const o=t===3||t===8||t===9||t===13?280:180;i.frequency.setValueAtTime(o,n),i.frequency.exponentialRampToValueAtTime(60,n+.03),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.03),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.03)}function Hx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(880,e+.09),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.09),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.09)}function Tn(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createOscillator(),r=t.createGain();n.type="triangle",i.type="sine",n.frequency.setValueAtTime(523.25,e),n.frequency.setValueAtTime(659.25,e+.07),i.frequency.setValueAtTime(783.99,e+.07),r.gain.setValueAtTime(.25,e),r.gain.exponentialRampToValueAtTime(.01,e+.22),n.connect(r),i.connect(r),r.connect(t.destination),n.start(e),i.start(e+.07),n.stop(e+.22),i.stop(e+.22)}function kx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(550,e),n.frequency.exponentialRampToValueAtTime(160,e+.14),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function xh(){const t=mt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.45),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*.7;const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(3200,e),s.Q.setValueAtTime(4,e);const a=t.createGain();a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.01,e+.45),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function Vx(){const t=mt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.85),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let d=0;d<n;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(n*.4));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,e),s.frequency.exponentialRampToValueAtTime(40,e+.85);const a=t.createGain();a.gain.setValueAtTime(.7,e),a.gain.exponentialRampToValueAtTime(.001,e+.85),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e);const c=t.createOscillator(),u=t.createGain();c.type="sine",c.frequency.setValueAtTime(120,e),c.frequency.exponentialRampToValueAtTime(25,e+.5),u.gain.setValueAtTime(.6,e),u.gain.exponentialRampToValueAtTime(.01,e+.5),c.connect(u),u.connect(t.destination),c.start(e),c.stop(e+.5)}function Wx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(90,e+.08),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.08)}function Sh(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(240,e),n.frequency.linearRampToValueAtTime(210,e+.35);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(700,e),r.frequency.linearRampToValueAtTime(450,e+.35),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.01,e+.35),n.connect(r),r.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.35)}function zx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(160,e+.6),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.6),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.6)}function Xx(t){const e=mt();if(!e)return;const n=e.currentTime,i=e.sampleRate*.05,r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);for(let u=0;u<i;u++)o[u]=(Math.random()*2-1)*Math.exp(-u/(i*.35));const s=e.createBufferSource();s.buffer=r;const a=e.createBiquadFilter(),c=e.createGain();t===3||t===13||t===28||t===36||t===37?(a.type="bandpass",a.frequency.setValueAtTime(1100,n),a.Q.value=3,c.gain.setValueAtTime(.16,n)):t===6||t===12||t===16||t===20?(a.type="lowpass",a.frequency.setValueAtTime(320,n),c.gain.setValueAtTime(.18,n)):t===4||t===2||t===33?(a.type="lowpass",a.frequency.setValueAtTime(550,n),c.gain.setValueAtTime(.12,n)):t===31||t===32?(a.type="bandpass",a.frequency.setValueAtTime(800,n),a.Q.value=1.8,c.gain.setValueAtTime(.15,n)):(a.type="lowpass",a.frequency.setValueAtTime(450,n),c.gain.setValueAtTime(.13,n)),c.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(a),a.connect(c),c.connect(e.destination),s.start(n)}function qx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(2400,e),n.frequency.exponentialRampToValueAtTime(800,e+.06),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.06),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.06);const r=t.sampleRate*.15,o=t.createBuffer(1,r,t.sampleRate),s=o.getChannelData(0);for(let d=0;d<r;d++)s[d]=(Math.random()*2-1)*Math.exp(-d/(r*.4));const a=t.createBufferSource();a.buffer=o;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1400,e),c.frequency.exponentialRampToValueAtTime(300,e+.15);const u=t.createGain();u.gain.setValueAtTime(.2,e),u.gain.exponentialRampToValueAtTime(.01,e+.15),a.connect(c),c.connect(u),u.connect(t.destination),a.start(e+.02)}function Kx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(880,e),n.frequency.exponentialRampToValueAtTime(1400,e+.08),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}let Yl=20;const id=[261.63,293.66,329.63,392,440,523.25,587.33,659.25];function Yx(t){Yl-=t,Yl<=0&&(Yl=65+Math.random()*45,$x())}function $x(){const t=mt();if(!t)return;const e=4+Math.floor(Math.random()*3);let n=t.currentTime;for(let i=0;i<e;i++){const r=id[Math.floor(Math.random()*id.length)],o=1.6+Math.random()*1.2,s=t.createOscillator(),a=t.createGain();s.type="sine",s.frequency.setValueAtTime(r,n),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.04,n+.3),a.gain.exponentialRampToValueAtTime(.001,n+o),s.connect(a),a.connect(t.destination),s.start(n),s.stop(n+o),n+=.8+Math.random()*.6}}const rn={TITLE_SCREEN:"title_screen",PLAYING:"playing",PAUSED:"paused"},St={NONE:"none",INVENTORY:"inventory",CRAFTING_TABLE:"crafting_table",FURNACE:"furnace",CHEST:"chest",RECIPE_BOOK:"recipe_book",CONTROLS:"controls",SETTINGS:"settings"};let Jo=rn.TITLE_SCREEN,Xo=St.NONE,Us=null;function Zx(t){Us=t}function vs(){return Jo}function al(t){Jo=t}function jx(){return Jo===rn.TITLE_SCREEN}function Qx(){return Jo===rn.PAUSED}function Mh(t){return Xo===t}function As(){return Xo!==St.NONE}function es(t){Xo=t,document.pointerLockElement&&document.exitPointerLock()}function Ii(t=null){t&&Xo!==t||(Xo=St.NONE,Jo===rn.PLAYING&&Us&&Us.requestPointerLock())}function Jx(){Xo=St.NONE,Jo===rn.PLAYING&&Us&&Us.requestPointerLock()}let Qt=null,un=null,wo=null,nu=!1;const Yi={renderDistance:5,fov:75,mouseSensitivity:1};function eS(t){wo=t||document.querySelector("canvas"),Zx(wo),document.getElementById("title-screen"),document.getElementById("pause-menu"),Qt=document.getElementById("modal-controls"),un=document.getElementById("modal-settings"),window.startGame=rd,window.resumeGame=$l,window.returnToMainMenu=sd,window.openControls=()=>Mo(Qt),window.openSettings=()=>Mo(un);const e=["Cavernas 3D & Entradas Naturais!","Fornalha e Fundição de Ferro!","Armaduras, Esqueletos e Aranhas!","Mundo infinito com Biomas!","Construa e explore em 60 FPS!","Receitas reais de sobrevivência!"],n=document.getElementById("splash-text");n&&(n.textContent=e[Math.floor(Math.random()*e.length)]);const i=document.getElementById("btn-play");i&&i.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation();try{_h()}catch{}rd()});const r=document.getElementById("btn-controls");r&&r.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Mo(Qt)});const o=document.getElementById("btn-settings");o&&o.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Mo(un)});const s=document.getElementById("btn-close-controls");s&&s.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Qt&&(Qt.style.display="none"),Ii(St.CONTROLS)});const a=document.getElementById("btn-close-settings");a&&a.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),un&&(un.style.display="none"),Ii(St.SETTINGS)});const c=document.getElementById("btn-resume");c&&c.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),$l()});const u=document.getElementById("btn-pause-controls");u&&u.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Mo(Qt)});const d=document.getElementById("btn-pause-settings")||document.getElementById("btn-pause-options");d&&d.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Mo(un)});const h=document.getElementById("btn-quit-menu")||document.getElementById("btn-exit-main");h&&h.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),sd()});const f=document.getElementById("setting-fov"),p=document.getElementById("fov-val");f&&p&&f.addEventListener("input",E=>{Yi.fov=parseInt(E.target.value,10),p.textContent=`${Yi.fov}°`});const _=document.getElementById("setting-distance"),v=document.getElementById("distance-val");_&&v&&_.addEventListener("input",E=>{Yi.renderDistance=parseInt(E.target.value,10),v.textContent=`${Yi.renderDistance} Chunks`});const g=document.getElementById("setting-sens"),m=document.getElementById("sens-val");g&&m&&g.addEventListener("input",E=>{Yi.mouseSensitivity=parseFloat(E.target.value),m.textContent=`${Yi.mouseSensitivity.toFixed(1)}x`}),document.addEventListener("pointerlockchange",()=>{const E=document.pointerLockElement===(wo||document.querySelector("canvas"));nu&&!E&&vs()===rn.PLAYING&&!As()&&od(),nu=E}),window.addEventListener("keydown",E=>{if(E.code==="Escape"){if(Qt&&Qt.style.display==="flex"){Qt.style.display="none",Ii(St.CONTROLS);return}if(un&&un.style.display==="flex"){un.style.display="none",Ii(St.SETTINGS);return}if(As()){Jx();return}vs()===rn.PLAYING?(document.exitPointerLock(),od()):vs()===rn.PAUSED&&$l()}});const A=wo||document.querySelector("canvas");A&&A.addEventListener("click",()=>{if(vs()===rn.PLAYING&&!As()&&!document.pointerLockElement)try{A.requestPointerLock()}catch{}})}function Mo(t){t&&(t.style.display="flex",es(t===Qt?St.CONTROLS:St.SETTINGS))}function rd(){al(rn.PLAYING);const t=document.getElementById("title-screen");t&&(t.style.display="none",t.style.pointerEvents="none",t.style.visibility="hidden",t.style.opacity="0");const e=document.getElementById("pause-menu");e&&(e.style.display="none");const n=document.getElementById("crosshair");n&&(n.style.display="block");const i=document.getElementById("controls-hint");i&&(i.style.display="block");const r=wo||document.querySelector("canvas");if(r&&typeof r.requestPointerLock=="function")try{const o=r.requestPointerLock();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}}function od(){if(vs()===rn.TITLE_SCREEN)return;al(rn.PAUSED);const t=document.getElementById("pause-menu");t&&(t.style.display="flex");const e=document.getElementById("crosshair");e&&(e.style.display="none");const n=document.getElementById("controls-hint");n&&(n.style.display="none")}function $l(){al(rn.PLAYING);const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Qt&&(Qt.style.display="none"),un&&(un.style.display="none");const e=document.getElementById("crosshair");e&&(e.style.display="block");const n=document.getElementById("controls-hint");n&&(n.style.display="block");const i=wo||document.querySelector("canvas");if(i&&typeof i.requestPointerLock=="function")try{const r=i.requestPointerLock();r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}function sd(){al(rn.TITLE_SCREEN),nu=!1;const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Qt&&(Qt.style.display="none"),un&&(un.style.display="none");const e=document.getElementById("title-screen");e&&(e.style.display="flex",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.opacity="1");const n=document.getElementById("crosshair");n&&(n.style.display="none");const i=document.getElementById("controls-hint");i&&(i.style.display="none")}const tS=.0022,ad=1.55,Zr={FIRST_PERSON:0,THIRD_PERSON_BACK:1,THIRD_PERSON_FRONT:2};let Kt=null,Jn=0,Jt=-.15,iu=!1,nr=Zr.FIRST_PERSON;function nS(t,e={x:0,y:20,z:0}){return Kt=new tn(Yi.fov||75,t,.05,500),Kt.rotation.order="YXZ",Kt.position.set(e.x,e.y,e.z),Kt.rotation.set(Jt,Jn,0),Kt}function iS(t){document.addEventListener("pointerlockchange",()=>{iu=document.pointerLockElement===t}),document.addEventListener("mousemove",e=>{if(!iu||!Kt||Math.abs(e.movementX)>250||Math.abs(e.movementY)>250)return;const n=tS*(Yi.mouseSensitivity||1);Jn-=e.movementX*n,Jt-=e.movementY*n,Jt=Math.max(-ad,Math.min(ad,Jt)),nr!==Zr.THIRD_PERSON_FRONT&&Kt.rotation.set(Jt,Jn,0)})}function zs(){return Kt}function Xs(){return iu}function ld(){return Jn}function rS(){return Jt}function Eh(){return nr}function oS(){return nr=(nr+1)%3,nr}function sS(t,e=1.62,n=null){if(!Kt)return;const i=t.x,r=t.y+e,o=t.z;if(nr===Zr.FIRST_PERSON)Kt.position.set(i,r,o),Kt.rotation.set(Jt,Jn,0);else if(nr===Zr.THIRD_PERSON_BACK){const a=-Math.sin(Jn)*Math.cos(Jt),c=Math.sin(Jt),u=-Math.cos(Jn)*Math.cos(Jt);let d=3.4;if(n)for(let f=1;f<=16;f++){const p=f/16*3.4,_=i-a*p,v=r-c*p,g=o-u*p;if(n(Math.floor(_),Math.floor(v),Math.floor(g))){d=Math.max(.4,(f-1)/16*3.4);break}}Kt.position.set(i-a*d,r-c*d,o-u*d),Kt.rotation.set(Jt,Jn,0)}else if(nr===Zr.THIRD_PERSON_FRONT){const a=-Math.sin(Jn)*Math.cos(Jt),c=Math.sin(Jt),u=-Math.cos(Jn)*Math.cos(Jt);let d=3;if(n)for(let f=1;f<=16;f++){const p=f/16*3,_=i+a*p,v=r+c*p,g=o+u*p;if(n(Math.floor(_),Math.floor(v),Math.floor(g))){d=Math.max(.4,(f-1)/16*3);break}}Kt.position.set(i+a*d,r+c*d+.15,o+u*d),Kt.lookAt(i,r-.1,o)}}let yh=!1,ru=0,ou=null,su=null;function Th(t){if(!yh)return;const e=Math.min((t-ru)/1e3,.1);ru=t,ou&&ou(e,t/1e3),su&&su(e),requestAnimationFrame(Th)}function aS(t,e){ou=t,su=e,yh=!0,ru=performance.now(),requestAnimationFrame(Th)}let fn=null,$i=null;function lS(){return fn=new uh({antialias:!0}),fn.domElement.id="game-canvas",fn.setSize(window.innerWidth,window.innerHeight),fn.setPixelRatio(Math.min(window.devicePixelRatio,2)),fn.setClearColor(7911912),fn.shadowMap.enabled=!1,document.body.appendChild(fn.domElement),window.addEventListener("resize",()=>{fn.setSize(window.innerWidth,window.innerHeight)}),fn}let au=null,lu=null,Ua=null;function cS(){return $i=new fh,au=new Cx(8900331,5596723,.6),$i.add(au),lu=new gh(16777215,.3),$i.add(lu),Ua=new mh(16774624,1),Ua.position.set(80,120,50),$i.add(Ua),$i.fog=new Cu(7911912,50,160),$i}function uS(){return{hemiLight:au,ambientLight:lu,dirLight:Ua}}function fS(t){fn&&$i&&t&&fn.render($i,t)}function Ah(){return fn?fn.domElement:null}function dS(t){window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()})}const jr=16;function yt(t){let e=t|0;return()=>(e=e*1103515245+12345&2147483647,e/2147483647)}function hS(t){const e=document.createElement("canvas");e.width=jr,e.height=jr;const n=e.getContext("2d");return t(n,jr),e}function pt(t,e,n,i,r,o){const s=yt(o);t.fillStyle=n,t.fillRect(0,0,e,e);for(let a=0;a<e;a++)for(let c=0;c<e;c++)if(s()<r){const u=Math.floor(s()*i.length);t.fillStyle=i[u],t.fillRect(c,a,1,1)}}function pS(t,e){pt(t,e,"#5ba638",["#4f9430","#6bc043","#458528","#75cc4a"],.4,101);const n=yt(202);for(let i=0;i<2;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#f6e05e",t.fillRect(r,o,1,1)}}function mS(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a"],.35,301);const n=yt(302);for(let i=0;i<5;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle=n()>.3?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<3?n()>.35&&(t.fillStyle=n()>.5?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<4&&n()>.65&&(t.fillStyle="#458528",t.fillRect(r,i,1,1))}function gS(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a","#584117"],.4,401);const n=yt(402);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#584117",t.fillRect(r,o,2,1)}}function ll(t,e){pt(t,e,"#828282",["#737373","#919191","#656565","#9e9e9e","#595959"],.45,501);const n=yt(502);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#505050",t.fillRect(r,o,2+Math.floor(n()*2),1)}}function _S(t,e){pt(t,e,"#e5d38a",["#dac67c","#eedd98","#cfbc6f","#f5e6a4","#c5b161"],.45,601)}function vS(t,e){pt(t,e,"#f5f7fa",["#e9ecf2","#ffffff","#dfe3ec","#edf0f7"],.35,701);const n=yt(702);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*e);t.fillStyle="#cbd5e1",t.fillRect(r,o,2,1)}}function xS(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,1401);const n=yt(1402);for(let i=0;i<4;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle="#f5f7fa",t.fillRect(r,i,1,1)):i<3?n()>.3&&(t.fillStyle="#e9ecf2",t.fillRect(r,i,1,1)):n()>.7&&(t.fillStyle="#dfe3ec",t.fillRect(r,i,1,1))}function SS(t,e){t.fillStyle="#888888",t.fillRect(0,0,e,e),t.fillStyle="#555555",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1);for(let i=0;i<4;i++){const r=i%2===0?0:8,o=i*4;t.fillRect(r,o,1,4),t.fillRect(r+8,o,1,4)}const n=yt(801);for(let i=0;i<e;i++)for(let r=0;r<e;r++)n()<.2&&(t.fillStyle=n()>.5?"#9e9e9e":"#737373",t.fillRect(r,i,1,1))}function MS(t,e){pt(t,e,"#6b4524",["#5a391d","#7c512c","#4e3016","#8d5c32"],.35,901);for(let n=0;n<e;n+=3)t.fillStyle="#472c14",t.fillRect(n,0,1,e)}function ES(t,e){t.fillStyle="#c5a368",t.fillRect(0,0,e,e),t.fillStyle="#6b4524",t.fillRect(0,0,e,2),t.fillRect(0,14,e,2),t.fillRect(0,0,2,e),t.fillRect(14,0,2,e);const n=7.5,i=7.5,r=[2,4,6];t.fillStyle="#9e804f";for(const o of r)for(let s=0;s<e;s++)for(let a=0;a<e;a++){const c=Math.hypot(a-n,s-i);Math.abs(c-o)<.65&&t.fillRect(a,s,1,1)}t.fillStyle="#7a6036",t.fillRect(7,7,2,2)}function yS(t,e){pt(t,e,"#3c8524",["#2f6d1b","#4fa631","#245614","#5dbd3c","#1b400e"],.5,1001);const n=yt(1002);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1b400e",t.fillRect(r,o,1,1)}}function TS(t,e){ll(t,e);const n=yt(1101);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#222222",t.fillRect(r,o,2,2),t.fillStyle="#111111",t.fillRect(r+1,o+1,1,1)}}function AS(t,e){ll(t,e);const n=yt(1201);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#d4a373",t.fillRect(r,o,2,2),t.fillStyle="#faedcd",t.fillRect(r,o,1,1)}}function bS(t,e){pt(t,e,"#2c75d8",["#2565bf","#3b86e8","#1e52a0","#4a95f5"],.4,1301);const n=yt(1302);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#8bc3f7",t.fillRect(r,o,3,1)}}function wS(t,e){pt(t,e,"#15803d",["#166534","#14532d","#22c55e"],.4,1501),t.fillStyle="#14532d",t.fillRect(7,7,2,2)}function RS(t,e){pt(t,e,"#15803d",["#166534","#15803d","#22c55e","#14532d"],.35,1601);const n=yt(1602);for(let i=0;i<e;i+=4)t.fillStyle="#14532d",t.fillRect(i,0,1,e);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#fef08a",t.fillRect(r,o,1,1)}}function qs(t,e){pt(t,e,"#b45309",["#92400e","#78350f","#d97706","#a16207"],.35,1701),t.fillStyle="#451a03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1),t.fillRect(5,0,1,3),t.fillRect(11,4,1,3),t.fillRect(4,8,1,3),t.fillRect(12,12,1,3)}function cl(t,e){pt(t,e,"#64748b",["#475569","#334155","#94a3b8","#1e293b"],.45,1801);const n=yt(1802);t.fillStyle="#1e293b";for(let i=0;i<5;i++){const r=Math.floor(n()*(e-4)),o=Math.floor(n()*(e-4));t.fillRect(r,o,3,2)}}function CS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,7,2,9),t.fillRect(5,11,2,2),t.fillRect(9,9,2,2),t.fillStyle="#dc2626",t.fillRect(6,3,4,4),t.fillStyle="#ef4444",t.fillRect(7,2,2,1),t.fillRect(5,4,1,2),t.fillRect(10,4,1,2),t.fillStyle="#450a0a",t.fillRect(7,4,2,2)}function IS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,6,2,10),t.fillRect(5,10,2,2),t.fillRect(9,12,2,2),t.fillStyle="#eab308",t.fillRect(6,2,4,4),t.fillStyle="#facc15",t.fillRect(7,1,2,1),t.fillRect(5,3,1,2),t.fillRect(10,3,1,2),t.fillStyle="#ca8a04",t.fillRect(7,3,2,2)}function OS(t,e){qs(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(2.5,2.5,11,11),t.beginPath(),t.moveTo(6.5,2.5),t.lineTo(6.5,13.5),t.moveTo(10.5,2.5),t.lineTo(10.5,13.5),t.moveTo(2.5,6.5),t.lineTo(13.5,6.5),t.moveTo(2.5,10.5),t.lineTo(13.5,10.5),t.stroke(),t.fillStyle="#fef08a",t.fillRect(3,3,1,1),t.fillRect(12,3,1,1),t.fillRect(3,12,1,1),t.fillRect(12,12,1,1)}function DS(t,e){qs(t,e),t.fillStyle="#1e293b",t.fillRect(3,4,3,8),t.fillStyle="#94a3b8",t.fillRect(3,4,2,6),t.fillStyle="#78350f",t.fillRect(4,9,1,3),t.fillStyle="#cbd5e1",t.fillRect(10,5,2,2),t.fillStyle="#78350f",t.fillRect(9,7,1,4),t.fillRect(12,7,1,4)}function NS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#78350f",t.fillRect(7,6,2,10),t.fillStyle="#451a03",t.fillRect(7,6,1,10),t.fillStyle="#f97316",t.fillRect(6,2,4,4),t.fillStyle="#fef08a",t.fillRect(7,3,2,2),t.fillStyle="#ea580c",t.fillRect(7,1,2,1)}function LS(t,e){cl(t,e),t.strokeStyle="#1e293b",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function PS(t,e){cl(t,e),t.fillStyle="#0f172a",t.fillRect(4,7,8,7),t.fillStyle="#334155",t.fillRect(5,10,6,1),t.fillRect(5,12,6,1)}function US(t,e){cl(t,e),t.fillStyle="#f97316",t.fillRect(4,7,8,7),t.fillStyle="#fef08a",t.fillRect(5,9,6,4),t.fillStyle="#ef4444",t.fillRect(6,11,4,2)}function FS(t,e){qs(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function BS(t,e){qs(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13),t.fillStyle="#cbd5e1",t.fillRect(7,6,2,4),t.fillStyle="#475569",t.fillRect(7,8,2,1)}function GS(t,e){pt(t,e,"#3b1d0c",["#2e1507","#45220e","#230f04","#4d2812"],.4,2101),t.fillStyle="#1c0b03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1)}function HS(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,2201),t.fillStyle="#3b1d0c",t.fillRect(0,0,e,3),t.fillStyle="#230f04",t.fillRect(0,2,e,1)}function kS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#65a30d";for(let n=2;n<e;n+=3)t.fillRect(n,12,1,4),t.fillRect(n-1,11,1,2)}function VS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#84cc16";for(let n=1;n<e;n+=3)t.fillRect(n,6,2,10),t.fillStyle="#ca8a04",t.fillRect(n,6,2,3),t.fillStyle="#84cc16"}function WS(t,e){t.clearRect(0,0,e,e);for(let n=1;n<e;n+=2)t.fillStyle="#ca8a04",t.fillRect(n,4,1,12),t.fillStyle="#eab308",t.fillRect(n-(n>1?1:0),1,2,5),t.fillStyle="#fef08a",t.fillRect(n,2,1,3)}function zS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#475569",t.beginPath(),t.arc(8,8,4,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.fillRect(7,7,2,2)}function XS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#f8fafc",t.fillRect(0,5,e,6),t.fillStyle="#0f172a",t.fillRect(1,6,4,1),t.fillRect(2,7,2,3),t.fillRect(6,6,1,4),t.fillRect(7,7,1,2),t.fillRect(8,6,1,4),t.fillRect(10,6,4,1),t.fillRect(11,7,2,3)}function qS(t,e){t.fillStyle="#b91c1c",t.fillRect(0,0,e,e),t.fillStyle="#7f1d1d",t.fillRect(3,3,10,10),t.fillStyle="#450a0a",t.fillRect(7,7,2,2)}function KS(t,e){pt(t,e,"#ea580c",["#f97316","#c2410c","#facc15","#b45309","#7c2d12"],.45,2301);const n=yt(2302);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*(e-2));t.fillStyle="#fef08a",t.fillRect(r,o,3,2),t.fillStyle="#ea580c",t.fillRect(r+1,o,1,1)}}function YS(t,e){ll(t,e);const n=yt(2401);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#06b6d4",t.fillRect(r,o,2,2),t.fillStyle="#67e8f9",t.fillRect(r,o,1,1),t.fillStyle="#e0f2fe",t.fillRect(r+1,o+1,1,1)}}function $S(t,e){pt(t,e,"#0f172a",["#1e1b4b","#020617","#312e81","#4c1d95","#1e293b"],.45,2501);const n=yt(2502);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-2)),o=Math.floor(n()*(e-2));t.fillStyle="#6366f1",t.fillRect(r,o,1,2),t.fillStyle="#a855f7",t.fillRect(r+1,o+1,1,1)}}function ZS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#b91c1c",t.fillRect(1,6,e-2,e-7),t.fillStyle="#f8fafc",t.fillRect(2,1,12,4),t.fillStyle="#cbd5e1",t.fillRect(2,4,12,1)}function jS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,6),t.fillStyle="#b91c1c",t.fillRect(0,5,e,1),t.fillStyle="#78350f",t.fillRect(0,6,e,10),t.fillStyle="#451a03",t.fillRect(2,9,e-4,7)}function QS(t,e){pt(t,e,"#f8fafc",["#f1f5f9","#e2e8f0","#cbd5e1","#ffffff"],.35,2601);const n=yt(2602);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#e2e8f0",t.fillRect(r,o,1,1)}}function JS(t,e){pt(t,e,"#6b7280",["#4b5563","#9ca3af","#374151","#d1d5db"],.5,3101);const n=yt(3102);for(let i=0;i<8;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1f2937",t.fillRect(r,o,1,1)}}function bh(t,e){pt(t,e,"#6b1717",["#450a0a","#7f1d1d","#991b1b","#3b0707"],.5,3201);const n=yt(3202);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#b91c1c",t.fillRect(r,o,1,1)}}function eM(t,e){pt(t,e,"#451a03",["#381e11","#2e180c","#54260f"],.4,3301),t.fillStyle="#1c0d06",t.fillRect(3,4,1,2),t.fillRect(5,4,1,2),t.fillRect(4,7,1,2),t.fillRect(10,8,1,2),t.fillRect(12,8,1,2),t.fillRect(11,11,1,2)}function tM(t,e){pt(t,e,"#eab308",["#ca8a04","#facc15","#fef08a","#a16207"],.55,3401);const n=yt(3402);for(let i=0;i<10;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#ffffff",t.fillRect(r,o,1,1)}}function nM(t,e){bh(t,e),[[3,3],[4,3],[4,4],[5,4],[4,5],[9,9],[10,9],[10,10],[11,10],[10,11],[11,3],[12,3],[12,4],[3,11],[4,11],[4,12]].forEach(([i,r])=>{t.fillStyle="#f8fafc",t.fillRect(i,r,1,1)}),t.fillStyle="#e2e8f0",t.fillRect(3,2,1,1),t.fillRect(9,8,1,1)}function iM(t,e){pt(t,e,"#f8fafc",["#f1f5f9","#ffffff","#e2e8f0"],.25,3601),t.fillStyle="#cbd5e1",t.fillRect(0,0,e,1),t.fillRect(0,0,1,e),t.fillStyle="#94a3b8",t.fillRect(0,e-1,e,1),t.fillRect(e-1,0,1,e)}function rM(t,e){pt(t,e,"#4c1d95",["#6b21a8","#7e22ce","#3b0764","#9333ea"],.5,3701),t.fillStyle="#c084fc",t.fillRect(2,3,3,1),t.fillRect(4,4,2,1),t.fillRect(8,7,4,1),t.fillRect(10,8,3,1),t.fillRect(4,11,5,1),t.fillRect(1,12,3,1),t.fillStyle="#f3e8ff",t.fillRect(3,3,1,1),t.fillRect(9,7,1,1)}const oM=[{name:"grass_top",draw:pS},{name:"grass_side",draw:mS},{name:"dirt",draw:gS},{name:"stone",draw:ll},{name:"sand",draw:_S},{name:"snow",draw:vS},{name:"wood_log",draw:MS},{name:"wood_log_top",draw:ES},{name:"leaves",draw:yS},{name:"coal_ore",draw:TS},{name:"iron_ore",draw:AS},{name:"water",draw:bS},{name:"stone_bricks",draw:SS},{name:"snow_side",draw:xS},{name:"cactus_top",draw:wS},{name:"cactus_side",draw:RS},{name:"wood_planks",draw:qs},{name:"cobblestone",draw:cl},{name:"flower_red",draw:CS},{name:"flower_yellow",draw:IS},{name:"crafting_table_top",draw:OS},{name:"crafting_table_side",draw:DS},{name:"torch",draw:NS},{name:"furnace_side",draw:LS},{name:"furnace_front",draw:PS},{name:"furnace_front_lit",draw:US},{name:"chest_top",draw:FS},{name:"chest_side",draw:BS},{name:"farmland_top",draw:GS},{name:"farmland_side",draw:HS},{name:"wheat_stage1",draw:kS},{name:"wheat_stage2",draw:VS},{name:"wheat_stage3",draw:WS},{name:"tnt_top",draw:zS},{name:"tnt_side",draw:XS},{name:"tnt_bottom",draw:qS},{name:"lava",draw:KS},{name:"diamond_ore",draw:YS},{name:"obsidian",draw:$S},{name:"bed_top",draw:ZS},{name:"bed_side",draw:jS},{name:"wool",draw:QS},{name:"gravel",draw:JS},{name:"netherrack",draw:bh},{name:"soul_sand",draw:eM},{name:"glowstone",draw:tM},{name:"nether_quartz_ore",draw:nM},{name:"quartz_block",draw:iM},{name:"nether_portal",draw:rM}];function wh(){return oM.map(t=>hS(t.draw))}const Nr=4,cu=16,cd=Nr*jr,ud=cu*jr;let Xi=null;function sM(){const t=wh(),e=document.createElement("canvas");e.width=cd,e.height=ud;const n=e.getContext("2d");return n.clearRect(0,0,cd,ud),t.forEach((i,r)=>{const o=r%Nr,s=Math.floor(r/Nr),a=o*jr,c=s*jr;n.drawImage(i,a,c)}),Xi=new wx(e),Xi.magFilter=gn,Xi.minFilter=gn,Xi.generateMipmaps=!1,Xi.colorSpace=dn,Xi.needsUpdate=!0,Xi}function bs(t){const e=t%Nr,n=Math.floor(t/Nr),i=5e-4,r=e/Nr+i,o=(e+1)/Nr-i,s=1-n/cu-i,a=1-(n+1)/cu+i;return{uMin:r,uMax:o,vMin:a,vMax:s}}function ul(){return Xi}const l={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD_LOG:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,WATER:10,CACTUS:11,WOOD_PLANKS:12,COBBLESTONE:13,FLOWER_RED:14,FLOWER_YELLOW:15,CRAFTING_TABLE:16,TORCH:17,FURNACE:18,FURNACE_LIT:19,CHEST:20,FARMLAND:21,WHEAT_STAGE_1:22,WHEAT_STAGE_2:23,WHEAT_STAGE_3:24,TNT:25,LAVA:26,DIAMOND_ORE:27,OBSIDIAN:28,BED:29,WOOL:30,GRAVEL:31,NETHERRACK:32,SOUL_SAND:33,GLOWSTONE:34,NETHER_QUARTZ_ORE:35,QUARTZ_BLOCK:36,NETHER_PORTAL:37,IRON_SWORD:101,IRON_PICKAXE:102,PORKCHOP:103,ROTTEN_FLESH:104,STICK:105,WOODEN_SWORD:106,WOODEN_PICKAXE:107,STONE_SWORD:108,STONE_PICKAXE:109,IRON_INGOT:110,COOKED_PORKCHOP:111,IRON_HELMET:112,IRON_CHESTPLATE:113,IRON_LEGGINGS:114,IRON_BOOTS:115,ARROW:116,BONE:117,STRING:118,SPIDER_EYE:119,BOW:120,WOODEN_HOE:121,STONE_HOE:122,IRON_HOE:123,WHEAT_SEEDS:124,WHEAT:125,BREAD:126,GUNPOWDER:127,DIAMOND:128,DIAMOND_SWORD:129,DIAMOND_PICKAXE:130,DIAMOND_HELMET:131,DIAMOND_CHESTPLATE:132,DIAMOND_LEGGINGS:133,DIAMOND_BOOTS:134,MUTTON:135,COOKED_MUTTON:136,FLINT:137,FLINT_AND_STEEL:138,QUARTZ:139},no={[l.GRASS]:"Grama",[l.DIRT]:"Terra",[l.STONE]:"Pedra",[l.SAND]:"Areia",[l.SNOW]:"Neve",[l.WOOD_LOG]:"Tronco de Carvalho",[l.LEAVES]:"Folhas",[l.COAL_ORE]:"Minério de Carvão",[l.IRON_ORE]:"Minério de Ferro",[l.WATER]:"Balde de Água",[l.CACTUS]:"Cacto",[l.WOOD_PLANKS]:"Tábuas de Madeira",[l.COBBLESTONE]:"Pedregulho",[l.FLOWER_RED]:"Flor Vermelha (Papoula)",[l.FLOWER_YELLOW]:"Flor Amarela (Dente-de-Leão)",[l.CRAFTING_TABLE]:"Bancada de Trabalho",[l.TORCH]:"Tocha",[l.FURNACE]:"Fornalha",[l.FURNACE_LIT]:"Fornalha (Acesa)",[l.CHEST]:"Baú de Madeira",[l.FARMLAND]:"Terra Arada",[l.WHEAT_STAGE_1]:"Brotos de Trigo",[l.WHEAT_STAGE_2]:"Trigo em Crescimento",[l.WHEAT_STAGE_3]:"Trigo Maduro",[l.TNT]:"Bloco de TNT",[l.LAVA]:"Balde de Lava",[l.DIAMOND_ORE]:"Minério de Diamante",[l.OBSIDIAN]:"Bloco de Obsidiana",[l.BED]:"Cama Confortável",[l.WOOL]:"Bloco de Lã Branca",[l.IRON_SWORD]:"Espada de Ferro",[l.IRON_PICKAXE]:"Picareta de Ferro",[l.PORKCHOP]:"Costela de Porco Crua",[l.ROTTEN_FLESH]:"Carne Podre",[l.STICK]:"Graveto",[l.WOODEN_SWORD]:"Espada de Madeira",[l.WOODEN_PICKAXE]:"Picareta de Madeira",[l.STONE_SWORD]:"Espada de Pedra",[l.STONE_PICKAXE]:"Picareta de Pedra",[l.IRON_INGOT]:"Barra de Ferro",[l.COOKED_PORKCHOP]:"Bife de Porco Assado",[l.IRON_HELMET]:"Capacete de Ferro",[l.IRON_CHESTPLATE]:"Peitoral de Ferro",[l.IRON_LEGGINGS]:"Calças de Ferro",[l.IRON_BOOTS]:"Botas de Ferro",[l.ARROW]:"Flecha",[l.BONE]:"Osso",[l.STRING]:"Linha de Teia",[l.SPIDER_EYE]:"Olho de Aranha",[l.BOW]:"Arco e Flecha",[l.WOODEN_HOE]:"Enxada de Madeira",[l.STONE_HOE]:"Enxada de Pedra",[l.IRON_HOE]:"Enxada de Ferro",[l.WHEAT_SEEDS]:"Sementes de Trigo",[l.WHEAT]:"Trigo",[l.BREAD]:"Pão Dourado",[l.GUNPOWDER]:"Pólvora",[l.DIAMOND]:"Gema de Diamante",[l.DIAMOND_SWORD]:"Espada de Diamante",[l.DIAMOND_PICKAXE]:"Picareta de Diamante",[l.DIAMOND_HELMET]:"Capacete de Diamante",[l.DIAMOND_CHESTPLATE]:"Peitoral de Diamante",[l.DIAMOND_LEGGINGS]:"Calças de Diamante",[l.DIAMOND_BOOTS]:"Botas de Diamante",[l.MUTTON]:"Carneiro Cru",[l.COOKED_MUTTON]:"Carneiro Assado",[l.GRAVEL]:"Cascalho",[l.NETHERRACK]:"Rocha do Nether",[l.SOUL_SAND]:"Areia das Almas",[l.GLOWSTONE]:"Pedra Luminosa (Glowstone)",[l.NETHER_QUARTZ_ORE]:"Minério de Quartzo do Nether",[l.QUARTZ_BLOCK]:"Bloco de Quartzo Polido",[l.NETHER_PORTAL]:"Portal do Nether",[l.FLINT]:"Pederneira",[l.FLINT_AND_STEEL]:"Isqueiro de Pederneira",[l.QUARTZ]:"Cristal de Quartzo"},Fs={[l.GRASS]:{top:0,side:1,bottom:2},[l.DIRT]:{top:2,side:2,bottom:2},[l.STONE]:{top:3,side:3,bottom:3},[l.SAND]:{top:4,side:4,bottom:4},[l.SNOW]:{top:5,side:13,bottom:2},[l.WOOD_LOG]:{top:7,side:6,bottom:7},[l.LEAVES]:{top:8,side:8,bottom:8},[l.COAL_ORE]:{top:9,side:9,bottom:9},[l.IRON_ORE]:{top:10,side:10,bottom:10},[l.WATER]:{top:11,side:11,bottom:11},[l.CACTUS]:{top:14,side:15,bottom:14},[l.WOOD_PLANKS]:{top:16,side:16,bottom:16},[l.COBBLESTONE]:{top:17,side:17,bottom:17},[l.FLOWER_RED]:{top:18,side:18,bottom:18},[l.FLOWER_YELLOW]:{top:19,side:19,bottom:19},[l.CRAFTING_TABLE]:{top:20,side:21,bottom:16},[l.TORCH]:{top:22,side:22,bottom:22},[l.FURNACE]:{top:3,side:23,bottom:3},[l.FURNACE_LIT]:{top:3,side:25,bottom:3},[l.CHEST]:{top:26,side:27,bottom:16},[l.FARMLAND]:{top:28,side:29,bottom:2},[l.WHEAT_STAGE_1]:{top:30,side:30,bottom:30},[l.WHEAT_STAGE_2]:{top:31,side:31,bottom:31},[l.WHEAT_STAGE_3]:{top:32,side:32,bottom:32},[l.TNT]:{top:33,side:34,bottom:35},[l.LAVA]:{top:36,side:36,bottom:36},[l.DIAMOND_ORE]:{top:37,side:37,bottom:37},[l.OBSIDIAN]:{top:38,side:38,bottom:38},[l.BED]:{top:39,side:40,bottom:16},[l.WOOL]:{top:41,side:41,bottom:41},[l.GRAVEL]:{top:42,side:42,bottom:42},[l.NETHERRACK]:{top:43,side:43,bottom:43},[l.SOUL_SAND]:{top:44,side:44,bottom:44},[l.GLOWSTONE]:{top:45,side:45,bottom:45},[l.NETHER_QUARTZ_ORE]:{top:46,side:46,bottom:46},[l.QUARTZ_BLOCK]:{top:47,side:47,bottom:47},[l.NETHER_PORTAL]:{top:48,side:48,bottom:48}};function Ou(t){return t>l.AIR&&t<100&&t!==l.WATER&&t!==l.LAVA&&t!==l.NETHER_PORTAL&&t!==l.FLOWER_RED&&t!==l.FLOWER_YELLOW&&t!==l.TORCH&&t!==l.WHEAT_STAGE_1&&t!==l.WHEAT_STAGE_2&&t!==l.WHEAT_STAGE_3}function aM(t){return t>=l.GRASS&&t<100}function fl(t){return t===l.DIAMOND_SWORD||t===l.IRON_SWORD||t===l.STONE_SWORD||t===l.WOODEN_SWORD||t===l.BOW}function lM(t){return t===l.DIAMOND_PICKAXE||t===l.IRON_PICKAXE||t===l.STONE_PICKAXE||t===l.WOODEN_PICKAXE}function Rh(t){return t===l.IRON_HOE||t===l.STONE_HOE||t===l.WOODEN_HOE}function cM(t){return t===l.PORKCHOP||t===l.COOKED_PORKCHOP||t===l.MUTTON||t===l.COOKED_MUTTON||t===l.ROTTEN_FLESH||t===l.BREAD}function uM(t){return t===l.IRON_HELMET||t===l.IRON_CHESTPLATE||t===l.IRON_LEGGINGS||t===l.IRON_BOOTS||t===l.DIAMOND_HELMET||t===l.DIAMOND_CHESTPLATE||t===l.DIAMOND_LEGGINGS||t===l.DIAMOND_BOOTS}function fM(t){switch(t){case l.DIAMOND_HELMET:return 3;case l.DIAMOND_CHESTPLATE:return 8;case l.DIAMOND_LEGGINGS:return 6;case l.DIAMOND_BOOTS:return 3;case l.IRON_HELMET:return 2;case l.IRON_CHESTPLATE:return 6;case l.IRON_LEGGINGS:return 5;case l.IRON_BOOTS:return 2;default:return 0}}function dM(t){switch(t){case l.COOKED_PORKCHOP:return 8;case l.COOKED_MUTTON:return 6;case l.BREAD:return 5;case l.PORKCHOP:return 3;case l.MUTTON:return 2;case l.ROTTEN_FLESH:return 1;default:return 0}}function hM(t){return t===l.AIR||t===l.WATER||t===l.LAVA||t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.TORCH||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3||t>=100}function pM(t){switch(t){case l.LEAVES:case l.FLOWER_RED:case l.FLOWER_YELLOW:case l.WHEAT_STAGE_1:case l.WHEAT_STAGE_2:case l.WHEAT_STAGE_3:return .15;case l.DIRT:case l.GRASS:case l.SAND:case l.SNOW:case l.FARMLAND:return .55;case l.TNT:case l.BED:case l.WOOL:return .4;case l.WOOD_LOG:case l.WOOD_PLANKS:case l.CRAFTING_TABLE:case l.CHEST:case l.CACTUS:return 1.4;case l.STONE:case l.COBBLESTONE:case l.FURNACE:case l.FURNACE_LIT:return 2.5;case l.COAL_ORE:case l.IRON_ORE:return 3.5;case l.DIAMOND_ORE:return 4.5;case l.OBSIDIAN:return 9;case l.GRAVEL:return .6;case l.NETHERRACK:return .8;case l.SOUL_SAND:return .7;case l.GLOWSTONE:return .5;case l.NETHER_QUARTZ_ORE:return 3;case l.QUARTZ_BLOCK:return 2;case l.TORCH:case l.NETHER_PORTAL:return .05;default:return 1}}function mM(t,e){const n=e===l.DIAMOND_PICKAXE,i=e===l.IRON_PICKAXE,r=e===l.STONE_PICKAXE,o=e===l.WOODEN_PICKAXE,s=e===l.DIAMOND_SWORD,a=e===l.IRON_SWORD,c=e===l.STONE_SWORD,u=e===l.WOODEN_SWORD;return t===l.OBSIDIAN?n?4:.2:t===l.DIAMOND_ORE||t===l.NETHER_QUARTZ_ORE?n?8:i?6:.4:t===l.NETHERRACK||t===l.GLOWSTONE||t===l.QUARTZ_BLOCK?n?12:i?9:r?6:2.5:t===l.STONE||t===l.COBBLESTONE||t===l.COAL_ORE||t===l.IRON_ORE||t===l.FURNACE||t===l.FURNACE_LIT?n?9.5:i?6.5:r?4.2:o?2.6:.65:t===l.LEAVES||t===l.WOOL||t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3?s?8.5:a||c||u?6:2:t===l.WOOD_LOG||t===l.WOOD_PLANKS||t===l.CRAFTING_TABLE||t===l.CHEST||t===l.BED?n?2.2:i||r||o?1.6:1:1}function Ch(t){switch(t){case l.STONE:return l.COBBLESTONE;case l.GRASS:return l.DIRT;case l.COAL_ORE:return l.COAL_ORE;case l.IRON_ORE:return l.IRON_ORE;case l.DIAMOND_ORE:return l.DIAMOND;case l.OBSIDIAN:return l.OBSIDIAN;case l.GRAVEL:return Math.random()<.25?l.FLINT:l.GRAVEL;case l.NETHERRACK:return l.NETHERRACK;case l.SOUL_SAND:return l.SOUL_SAND;case l.GLOWSTONE:return l.GLOWSTONE;case l.NETHER_QUARTZ_ORE:return l.QUARTZ;case l.QUARTZ_BLOCK:return l.QUARTZ_BLOCK;case l.NETHER_PORTAL:return l.AIR;case l.FURNACE:case l.FURNACE_LIT:return l.FURNACE;case l.FARMLAND:return l.DIRT;case l.WHEAT_STAGE_3:return l.WHEAT;case l.WHEAT_STAGE_1:case l.WHEAT_STAGE_2:return l.WHEAT_SEEDS;case l.LEAVES:return Math.random()<.35?l.LEAVES:0;case l.TNT:return l.TNT;case l.BED:return l.BED;case l.WOOL:return l.WOOL;default:return t}}const Ae=16,_t=64,gM=[{name:"top",dir:[0,1,0],colorKey:"top",vertices:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"bottom",dir:[0,-1,0],colorKey:"bottom",vertices:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"north",dir:[0,0,-1],colorKey:"side",vertices:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"south",dir:[0,0,1],colorKey:"side",vertices:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"east",dir:[1,0,0],colorKey:"side",vertices:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"west",dir:[-1,0,0],colorKey:"side",vertices:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]}];let Zl=null,jl=null;function _M(){return Zl||(Zl=new Le({map:ul(),alphaTest:.2,side:Un})),Zl}function vM(){return jl||(jl=new Le({map:ul(),transparent:!0,opacity:.65,side:Un,depthWrite:!1})),jl}class xM{constructor(e=0,n=0,i=0){this.cx=e,this.cy=n,this.cz=i,this.blocks=new Uint8Array(Ae*Ae*_t),this.mesh=null}_index(e,n,i){return e+i*Ae+n*Ae*Ae}getBlock(e,n,i){return e<0||e>=Ae||n<0||n>=_t||i<0||i>=Ae?l.AIR:this.blocks[this._index(e,n,i)]}setBlock(e,n,i,r){e<0||e>=Ae||n<0||n>=_t||i<0||i>=Ae||(this.blocks[this._index(e,n,i)]=r)}buildMesh(e){const n=[],i=[],r=[],o=[],s=[],a=[],c=[],u=[];let d=0,h=0;const f=this.cx*Ae,p=this.cy*_t,_=this.cz*Ae;for(let m=0;m<_t;m++)for(let A=0;A<Ae;A++)for(let E=0;E<Ae;E++){const M=this.getBlock(E,m,A);if(M===l.AIR)continue;const N=M===l.WATER,R=Fs[M];if(!R)continue;const w=M===l.FLOWER_RED||M===l.FLOWER_YELLOW||M===l.WHEAT_STAGE_1||M===l.WHEAT_STAGE_2||M===l.WHEAT_STAGE_3,O=M===l.TORCH;if(w){const T=R.top,S=bs(T),C=[[[.12,0,.12,0,1],[.88,0,.88,1,1],[.88,1,.88,1,0],[.12,1,.12,0,0]],[[.12,0,.88,0,1],[.88,0,.12,1,1],[.88,1,.12,1,0],[.12,1,.88,0,0]]];for(const H of C){for(let F=0;F<4;F++){const[Y,K,q,J,z]=H[F];n.push(E+Y,m+K,A+q),i.push(0,1,0),r.push(S.uMin+J*(S.uMax-S.uMin),S.vMin+z*(S.vMax-S.vMin))}o.push(d,d+1,d+2,d,d+2,d+3),d+=4}continue}if(O){const T=R.top,S=bs(T),C=.42,H=.58,F=.42,Y=.58,K=0,q=.65,J=[[[C,q,Y,0,0],[H,q,Y,1,0],[H,q,F,1,1],[C,q,F,0,1],0,1,0],[[C,K,Y,0,1],[H,K,Y,1,1],[H,q,Y,1,0],[C,q,Y,0,0],0,0,1],[[H,K,F,0,1],[C,K,F,1,1],[C,q,F,1,0],[H,q,F,0,0],0,0,-1],[[C,K,F,0,1],[C,K,Y,1,1],[C,q,Y,1,0],[C,q,F,0,0],-1,0,0],[[H,K,Y,0,1],[H,K,F,1,1],[H,q,F,1,0],[H,q,Y,0,0],1,0,0]];for(const z of J){for(let oe=0;oe<4;oe++){const[ae,ve,Ue,et,$]=z[oe];n.push(E+ae,m+ve,A+Ue),i.push(z[4],z[5],z[6]),r.push(S.uMin+et*(S.uMax-S.uMin),S.vMin+$*(S.vMax-S.vMin))}o.push(d,d+1,d+2,d,d+2,d+3),d+=4}continue}for(const T of gM){const S=E+T.dir[0],C=m+T.dir[1],H=A+T.dir[2];let F;if(S>=0&&S<Ae&&C>=0&&C<_t&&H>=0&&H<Ae?F=this.getBlock(S,C,H):e?F=e(f+S,p+C,_+H):F=l.AIR,N){if(F!==l.AIR)continue}else if(!hM(F))continue;const Y=R[T.colorKey],K=bs(Y),q=N?s:n,J=N?a:i,z=N?c:r,oe=N?u:o,ae=N?h:d;for(let ve=0;ve<4;ve++){const Ue=T.vertices[ve];q.push(E+Ue[0],m+Ue[1],A+Ue[2]),J.push(T.dir[0],T.dir[1],T.dir[2]);const et=T.localUVs[ve][0],$=T.localUVs[ve][1];z.push(K.uMin+et*(K.uMax-K.uMin),K.vMin+$*(K.vMax-K.vMin))}oe.push(ae,ae+1,ae+2,ae,ae+2,ae+3),N?h+=4:d+=4}}let v=this._makeMesh(n,i,r,o,_M());v.position.set(f,p,_),this.mesh=v;let g=null;return s.length>0&&(g=this._makeMesh(s,a,c,u,vM()),g.position.set(f,p,_),g.renderOrder=1),{solidMesh:v,waterMesh:g}}_makeMesh(e,n,i,r,o){const s=new vn;return s.setAttribute("position",new Vt(e,3)),s.setAttribute("normal",new Vt(n,3)),s.setAttribute("uv",new Vt(i,2)),s.setIndex(r),new B(s,o)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null)}}const Fn=new Map,Xa=new Map,qa=new Map,mn=18,Ji=5,SM=7;let fd=NaN,dd=NaN;const Ql=[];function Ti(t,e){let n=t*374761393+e*668265263+1234567|0;return n=(n^n>>13)*1274126177|0,(n&2147483647)/2147483647}function MM(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,o=e-i,s=r*r*(3-2*r),a=o*o*(3-2*o),c=Ti(n,i),u=Ti(n+1,i),d=Ti(n,i+1),h=Ti(n+1,i+1),f=c*(1-s)+u*s,p=d*(1-s)+h*s;return f*(1-a)+p*a}function Bo(t,e,n=4,i=.5,r=2){let o=0,s=1,a=1,c=0;for(let u=0;u<n;u++)o+=MM(t*s,e*s)*a,c+=a,a*=i,s*=r;return o/c}const at={OCEAN:"ocean",PLAINS:"plains",FOREST:"forest",DESERT:"desert",SNOWY_MOUNTAINS:"snowy_mountains"};function qo(t,e){const n=Bo(t*.0025,e*.0025,3);if(n<.32)return at.OCEAN;const i=Bo(t*.0035+150,e*.0035+150,3),r=Bo(t*.004+300,e*.004+300,3);return n>.58&&i<.38?at.SNOWY_MOUNTAINS:i>.62&&r<.48?at.DESERT:r>.52?at.FOREST:at.PLAINS}function ir(t,e){const n=qo(t,e),i=Bo(t*.025,e*.025,3);switch(n){case at.OCEAN:{const r=Bo(t*.01,e*.01,2),o=mn-2-r*10+i*3;return Math.max(3,Math.min(_t-6,Math.floor(o)))}case at.DESERT:{const o=21+(Math.sin(t*.03+e*.015)*4+Math.cos(e*.03)*3)+i*2.5;return Math.max(mn+1,Math.min(_t-6,Math.floor(o)))}case at.SNOWY_MOUNTAINS:{const r=Bo(t*.015,e*.015,4),o=28+Math.pow(r,1.8)*32+i*4;return Math.max(24,Math.min(_t-4,Math.floor(o)))}case at.FOREST:{const o=23+(Math.sin(t*.022)*5+Math.cos(e*.028)*4+Math.sin((t-e)*.035)*2.5)+i*3;return Math.max(mn+1,Math.min(_t-6,Math.floor(o)))}case at.PLAINS:default:{const o=22+(Math.sin(t*.02)*4+Math.cos(e*.025)*4+Math.sin((t+e)*.04)*2)+i*2.5;return Math.max(mn+1,Math.min(_t-6,Math.floor(o)))}}}function hd(t,e,n,i,r){for(let s=i;s<i+r;s++)s<_t&&t.setBlock(e,s,n,l.WOOD_LOG);const o=i+r-1;for(let s=0;s<3;s++){const a=s<2?2:1;for(let c=-a;c<=a;c++)for(let u=-a;u<=a;u++){if(Math.abs(c)===a&&Math.abs(u)===a&&s<2)continue;const d=e+c,h=o+s,f=n+u;d>=0&&d<Ae&&h>=0&&h<_t&&f>=0&&f<Ae&&t.getBlock(d,h,f)===l.AIR&&t.setBlock(d,h,f,l.LEAVES)}}}function EM(t,e,n,i,r){for(let s=i;s<i+r;s++)s<_t&&t.setBlock(e,s,n,l.WOOD_LOG);const o=i+r;for(let s=i+2;s<=o+1;s++){const c=(o+1-s)%2===0?2:1;for(let u=-c;u<=c;u++)for(let d=-c;d<=c;d++){if(Math.abs(u)===c&&Math.abs(d)===c&&c>1)continue;const h=e+u,f=s,p=n+d;h>=0&&h<Ae&&f>=0&&f<_t&&p>=0&&p<Ae&&t.getBlock(h,f,p)===l.AIR&&t.setBlock(h,f,p,l.LEAVES)}}}function yM(t,e,n,i,r){for(let o=i;o<i+r;o++)o<_t&&t.getBlock(e,o,n)===l.AIR&&t.setBlock(e,o,n,l.CACTUS)}function Jl(t,e,n,i,r){e>=0&&e<Ae&&i>=0&&i<Ae&&n<_t&&t.getBlock(e,n,i)===l.AIR&&t.setBlock(e,n,i,r)}function Wi(t,e,n){let i=t*374761393+e*668265263+n*982451653+1234567|0;return i=(i^i>>13)*1274126177|0,(i&2147483647)/2147483647}function pd(t,e,n){const i=Math.floor(t),r=Math.floor(e),o=Math.floor(n),s=t-i,a=e-r,c=n-o,u=s*s*(3-2*s),d=a*a*(3-2*a),h=c*c*(3-2*c),f=Wi(i,r,o),p=Wi(i+1,r,o),_=Wi(i,r+1,o),v=Wi(i+1,r+1,o),g=Wi(i,r,o+1),m=Wi(i+1,r,o+1),A=Wi(i,r+1,o+1),E=Wi(i+1,r+1,o+1),M=f*(1-u)+p*u,N=_*(1-u)+v*u,R=g*(1-u)+m*u,w=A*(1-u)+E*u,O=M*(1-d)+N*d,T=R*(1-d)+w*d;return O*(1-h)+T*h}function Ih(t,e,n,i){if(e<2||e>i||i<=mn+1&&e>=i-2)return!1;const r=pd(t*.045,e*.075,n*.045)-.5,o=pd(t*.045+137,e*.075+137,n*.045+137)-.5;return r*r+o*o<.022}function Oh(t,e){const n=new xM(t,0,e),i=t*Ae,r=e*Ae;for(let o=0;o<Ae;o++)for(let s=0;s<Ae;s++){const a=i+s,c=r+o,u=ir(a,c),d=qo(a,c);for(let h=0;h<=u;h++){let f;h===0||h<u-4?f=l.STONE:h<u?d===at.DESERT||d===at.OCEAN&&u<=mn+1?f=l.SAND:f=l.DIRT:d===at.DESERT?f=l.SAND:d===at.SNOWY_MOUNTAINS?f=u>=36?l.SNOW:l.GRASS:d===at.OCEAN||u<=mn+1?f=l.SAND:f=l.GRASS,h>=2&&Ih(a,h,c,u)&&(h<=8?f=l.LAVA:h<=mn-8?f=l.WATER:f=l.AIR),n.setBlock(s,h,o,f)}for(let h=u+1;h<=mn;h++)n.getBlock(s,h,o)===l.AIR&&n.setBlock(s,h,o,l.WATER)}for(let o=1;o<Ae-1;o++)for(let s=1;s<Ae-1;s++){const a=i+s,c=r+o,u=ir(a,c),d=qo(a,c),h=n.getBlock(s,u,o),f=Ti(a,c);if(u>mn){if(d===at.PLAINS&&h===l.GRASS)if(f<.025&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const p=4+Math.floor(Ti(a+555,c+777)*3);u+p+4<_t&&hd(n,s,o,u+1,p)}else f>.94&&f<.97?Jl(n,s,u+1,o,l.FLOWER_RED):f>=.97&&Jl(n,s,u+1,o,l.FLOWER_YELLOW);else if(d===at.FOREST&&h===l.GRASS)if(f<.085&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const p=4+Math.floor(Ti(a+444,c+666)*4);u+p+4<_t&&hd(n,s,o,u+1,p)}else f>.96&&Jl(n,s,u+1,o,l.FLOWER_RED);else if(d===at.DESERT&&h===l.SAND){if(f<.028){const p=2+(f>.015?1:0);yM(n,s,o,u+1,p)}}else if(d===at.SNOWY_MOUNTAINS&&(h===l.GRASS||h===l.SNOW)&&f<.035&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const p=5+Math.floor(Ti(a+333,c+888)*4);u+p+4<_t&&EM(n,s,o,u+1,p)}}}for(let o=0;o<Ae;o++)for(let s=0;s<Ae;s++){const a=i+s,c=r+o,u=ir(a,c);for(let d=1;d<u-3;d++)if(n.getBlock(s,d,o)===l.STONE){const h=Ti(a*31+d*97,c*53+d*13);d<=16&&h>.992?n.setBlock(s,d,o,l.DIAMOND_ORE):h<.018?n.setBlock(s,d,o,l.COAL_ORE):h>.982?n.setBlock(s,d,o,l.IRON_ORE):h>.965&&h<=.982&&n.setBlock(s,d,o,l.GRAVEL)}}return n}function $t(t,e,n){if(e<0||e>=_t)return l.AIR;const i=Math.floor(t/Ae),r=Math.floor(n/Ae),o=`${i},0,${r}`,s=Fn.get(o);if(s){const c=(t%Ae+Ae)%Ae,u=(n%Ae+Ae)%Ae;return s.getBlock(c,e,u)}const a=ir(t,n);if(e>a)return e<=mn?l.WATER:l.AIR;if(e>=2&&Ih(t,e,n,a))return e<=8?l.LAVA:e<=mn-8?l.WATER:l.AIR;if(e===a){const c=qo(t,n);return c===at.DESERT||a<=mn+1?l.SAND:c===at.SNOWY_MOUNTAINS&&a>=36?l.SNOW:l.GRASS}return e>=a-4?qo(t,n)===at.DESERT?l.SAND:l.DIRT:l.STONE}function ws(t,e,n){return Ou($t(t,e,n))}function dl(t,e){const n=`${t.cx},0,${t.cz}`,i=Xa.get(n),r=qa.get(n);i&&(e.remove(i),i.geometry.dispose()),r&&(e.remove(r),r.geometry.dispose());const{solidMesh:o,waterMesh:s}=t.buildMesh($t);Xa.set(n,o),e.add(o),s&&(qa.set(n,s),e.add(s))}function TM(t){console.log("[World] Generating starting biomes and chunks...");for(let e=-Ji;e<=Ji;e++)for(let n=-Ji;n<=Ji;n++){const i=Oh(n,e);Fn.set(`${n},0,${e}`,i)}for(const e of Fn.values())dl(e,t);console.log(`[World] Ready! ${Fn.size} chunks generated.`)}function md(t,e){if(!e)return;const n=Math.floor(t.x/Ae),i=Math.floor(t.z/Ae);if(n!==fd||i!==dd){fd=n,dd=i;for(const[o,s]of Fn.entries())if(Math.max(Math.abs(s.cx-n),Math.abs(s.cz-i))>SM){const c=Xa.get(o),u=qa.get(o);c&&(e.remove(c),c.geometry.dispose(),Xa.delete(o)),u&&(e.remove(u),u.geometry.dispose(),qa.delete(o)),s.dispose(),Fn.delete(o)}for(let o=-Ji;o<=Ji;o++)for(let s=-Ji;s<=Ji;s++){const a=n+s,c=i+o,u=`${a},0,${c}`;if(!Fn.has(u)){const d=Oh(a,c);Fn.set(u,d),Ql.push(d)}}}const r=Math.min(2,Ql.length);for(let o=0;o<r;o++){const s=Ql.shift();Fn.has(`${s.cx},0,${s.cz}`)&&dl(s,e)}}function Du(){return{x:.5,y:ir(0,0)+2,z:.5}}function oi(t,e,n,i,r){if(n<0||n>=_t)return;if(r===l.WATER){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,p,_]of h)$t(f,p,_)===l.LAVA&&oi(t,f,p,_,l.OBSIDIAN)}else if(r===l.LAVA){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,p,_]of h)if($t(f,p,_)===l.WATER){r=l.OBSIDIAN;break}}const o=Math.floor(e/Ae),s=Math.floor(i/Ae),a=`${o},0,${s}`,c=Fn.get(a);if(!c)return;const u=(e%Ae+Ae)%Ae,d=(i%Ae+Ae)%Ae;c.setBlock(u,n,d,r),dl(c,t),u===0&&ya(t,o-1,s),u===Ae-1&&ya(t,o+1,s),d===0&&ya(t,o,s-1),d===Ae-1&&ya(t,o,s+1)}function ya(t,e,n){const i=Fn.get(`${e},0,${n}`);i&&dl(i,t)}const us=6;function AM(t,e){const n=e.clone().normalize();let i=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const s=n.x>=0?1:-1,a=n.y>=0?1:-1,c=n.z>=0?1:-1,u=n.x!==0?Math.abs(1/n.x):1/0,d=n.y!==0?Math.abs(1/n.y):1/0,h=n.z!==0?Math.abs(1/n.z):1/0;let f=n.x!==0?(n.x>0?i+1-t.x:t.x-i)*u:1/0,p=n.y!==0?(n.y>0?r+1-t.y:t.y-r)*d:1/0,_=n.z!==0?(n.z>0?o+1-t.z:t.z-o)*h:1/0,v=i,g=r,m=o,A=0,E=0,M=0;for(let N=0;N<us*3;N++){if(r>=0&&r<_t){const R=$t(i,r,o);if(Ou(R))return{hit:{x:i,y:r,z:o},normal:{x:A,y:E,z:M},prev:{x:v,y:g,z:m}}}if(v=i,g=r,m=o,f<p)if(f<_){if(f>us)break;i+=s,f+=u,A=-s,E=0,M=0}else{if(_>us)break;o+=c,_+=h,A=0,E=0,M=-c}else if(p<_){if(p>us)break;r+=a,p+=d,A=0,E=-a,M=0}else{if(_>us)break;o+=c,_+=h,A=0,E=0,M=-c}}return null}const bM=480;let si=.2,Ka=null,Ya=null,Ro=null,Ai=null,qi=null,To=null;const wM={dawn:new we(16096779),morning:new we(9684477),noon:new we(6333946),sunset:new we(14753096),dusk:new we(4405450),midnight:new we(329750),predawn:new we(1973067)},RM={dawn:new we(16498468),morning:new we(9684477),noon:new we(7911912),sunset:new we(16007006),dusk:new we(3223169),midnight:new we(329489),predawn:new we(1973067)};function CM(t,e={}){Ai=e.dirLight||null,qi=e.hemiLight||null,To=e.ambientLight||null,Ro=new it,t.add(Ro);const n=new W(20,20,20),i=new _n({color:16776171});Ka=new B(n,i),Ro.add(Ka);const r=new W(16,16,16),o=new _n({color:15857145});Ya=new B(r,o),Ro.add(Ya),Dh(0,t,null)}function gd(t,e,n,i=null){si+=t/bM,si>=1&&(si-=1),n&&Ro&&Ro.position.copy(n.position);const r=si*Math.PI*2-Math.PI/2,o=260,s=Math.cos(r)*o,a=Math.sin(r)*o,c=20;Ka&&Ka.position.set(s,a,c),Ya&&Ya.position.set(-s,-a,-c),Ai&&(Ko()?Ai.position.set(s,Math.max(15,a),c):Ai.position.set(-s,Math.max(15,-a),-c)),Dh(t,e,i)}function _d(t,e){if(e<.15){const n=e/.15;return t.dawn.clone().lerp(t.morning,n)}else if(e<.25){const n=(e-.15)/.1;return t.morning.clone().lerp(t.noon,n)}else if(e<.5){const n=(e-.25)/.25;return t.noon.clone().lerp(t.sunset,n)}else if(e<.58){const n=(e-.5)/.08;return t.sunset.clone().lerp(t.dusk,n)}else if(e<.75){const n=(e-.58)/.17;return t.dusk.clone().lerp(t.midnight,n)}else if(e<.92){const n=(e-.75)/.17;return t.midnight.clone().lerp(t.predawn,n)}else{const n=(e-.92)/.08;return t.predawn.clone().lerp(t.dawn,n)}}function Dh(t,e,n){const i=_d(wM,si),r=_d(RM,si);e&&e.fog&&e.fog.color.copy(r),n&&n.setClearColor(i);const o=Math.sin(si*Math.PI*2);Ai&&(o>0?(Ai.color.set(16774624),Ai.intensity=.4+o*.85):(Ai.color.set(9741240),Ai.intensity=Math.max(.12,-o*.28))),qi&&(o>0?(qi.color.set(8900331),qi.groundColor.set(5596723),qi.intensity=.3+o*.4):(qi.color.set(1976635),qi.groundColor.set(988970),qi.intensity=.15)),To&&(o>0?(To.color.set(16777215),To.intensity=.25+o*.2):(To.color.set(6583435),To.intensity=.12))}function Ko(){return si<.5}function IM(){return!Ko()}function OM(){const t=(si*24+6)%24,e=Math.floor(t),n=Math.floor((t-e)*60),i=e<10?"0"+e:""+e,r=n<10?"0"+n:""+n;return`${i}:${r}`}function DM(){si=.05}const NM={[l.GRASS]:5938743,[l.DIRT]:9136404,[l.STONE]:8947848,[l.SAND]:15259274,[l.SNOW]:15790320,[l.WOOD_LOG]:7029286,[l.LEAVES]:3832352,[l.COAL_ORE]:4473924,[l.IRON_ORE]:12096874,[l.WATER]:3702992,[l.CACTUS]:1483594,[l.WOOD_PLANKS]:11817737,[l.COBBLESTONE]:6583435,[l.FLOWER_RED]:14427686,[l.FLOWER_YELLOW]:15381256,[l.DIAMOND_ORE]:2282478,[l.OBSIDIAN]:1973067,[l.LAVA]:16347926,[l.GRAVEL]:7041664,[l.NETHERRACK]:8330525,[l.SOUL_SAND]:4528643,[l.GLOWSTONE]:16436245,[l.NETHER_QUARTZ_ORE]:16317180,[l.QUARTZ_BLOCK]:15857145,[l.NETHER_PORTAL]:11032055};let fi=null;const Qr=[],LM=new W(.12,.12,.12),Nh=new W(.08,.08,.08),PM=new W(.09,.09,.09);function UM(t){fi=t}function uu(t,e,n,i){if(!fi)return;const r=NM[i]||11184810,o=12;for(let s=0;s<o;s++){const a=new Le({color:r}),c=new B(LM,a);c.position.set(t+.2+Math.random()*.6,e+.2+Math.random()*.6,n+.2+Math.random()*.6);const u=(Math.random()-.5)*4.5,d=Math.random()*4+1.5,h=(Math.random()-.5)*4.5,f=(Math.random()-.5)*10,p=(Math.random()-.5)*10;fi.add(c),Qr.push({mesh:c,vx:u,vy:d,vz:h,rx:f,ry:p,life:.6+Math.random()*.3,age:0})}}function Lh(t,e,n,i=15680580){if(!fi)return;const r=8;for(let o=0;o<r;o++){const s=new Le({color:i}),a=new B(Nh,s);a.position.set(t,e,n);const c=(Math.random()-.5)*5,u=Math.random()*3.5+1,d=(Math.random()-.5)*5;fi.add(a),Qr.push({mesh:a,vx:c,vy:u,vz:d,rx:(Math.random()-.5)*8,ry:(Math.random()-.5)*8,life:.45+Math.random()*.2,age:0})}}function FM(t,e,n){if(!fi)return;const i=[16436245,16707722,16096779,16777215],r=16;for(let o=0;o<r;o++){const s=i[Math.floor(Math.random()*i.length)],a=new _n({color:s}),c=new B(PM,a);c.position.set(t+(Math.random()-.5)*.4,e+(Math.random()-.5)*.4,n+(Math.random()-.5)*.4);const u=Math.random()*Math.PI*2,d=2.5+Math.random()*3.5,h=Math.cos(u)*d,f=Math.random()*3+1.2,p=Math.sin(u)*d;fi.add(c),Qr.push({mesh:c,vx:h,vy:f,vz:p,rx:8,ry:8,life:.55+Math.random()*.25,age:0})}}function BM(t,e,n){if(!fi)return;const i=[11032055,12616956,8266446,15324671],r=i[Math.floor(Math.random()*i.length)],o=new _n({color:r}),s=new B(Nh,o);s.position.set(t+(Math.random()-.5)*.8,e+(Math.random()-.5)*.8,n+(Math.random()-.5)*.8);const a=(Math.random()-.5)*.8,c=.4+Math.random()*.8,u=(Math.random()-.5)*.8;fi.add(s),Qr.push({mesh:s,vx:a,vy:c,vz:u,rx:4,ry:4,life:.8+Math.random()*.4,age:0})}function GM(t){for(let e=Qr.length-1;e>=0;e--){const n=Qr[e];if(n.age+=t,n.age>=n.life){fi.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),Qr.splice(e,1);continue}n.vy-=9.8*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.x+=n.rx*t,n.mesh.rotation.y+=n.ry*t;const i=n.age/n.life,r=Math.max(.01,1-i);n.mesh.scale.set(r,r,r)}}let Jr=null;const Lr=[],HM=new W(.26,.26,.26),kM=30;function VM(t){Jr=t}function kt(t,e,n,i){if(!Jr)return;let r,o,s,a;if(typeof t=="number"&&typeof i=="number"?(o=t,s=e,a=n,r=i):(r=t,o=e,s=n,a=i),!r||r===l.AIR)return;if(Lr.length>=kM){const h=Lr.shift();h&&h.mesh&&Jr.remove(h.mesh)}const c=Fs[r]||{side:1};bs(c.side||0);const u=new Le({map:ul()}),d=new B(HM,u);d.position.set(o+(Math.random()-.5)*.2,s+.3,a+(Math.random()-.5)*.2),Jr.add(d),Lr.push({itemType:r,mesh:d,pos:d.position.clone(),vel:new I((Math.random()-.5)*1.8,3,(Math.random()-.5)*1.8),age:0,bobOffset:Math.random()*Math.PI*2,collected:!1})}function WM(t,e){if(!Jr)return;const i=Li().clone().add(new I(0,.9,0));for(let r=Lr.length-1;r>=0;r--){const o=Lr[r];if(o.age+=t,o.age>120){Jr.remove(o.mesh),Lr.splice(r,1);continue}const s=o.pos.distanceTo(i);if(s<2.5&&o.age>.3){const a=Math.min(14,1/(s*.15+.05));if(o.pos.lerp(i,t*a),s<.65&&Vn(o.itemType)){Hx(),Jr.remove(o.mesh),Lr.splice(r,1);continue}}else{o.vel.y-=18*t,o.pos.x+=o.vel.x*t,o.pos.z+=o.vel.z*t,o.pos.y+=o.vel.y*t,o.vel.x*=Math.exp(-6*t),o.vel.z*=Math.exp(-6*t);const a=ir(Math.floor(o.pos.x),Math.floor(o.pos.z))+1.15;o.pos.y<=a&&(o.pos.y=a,o.vel.set(0,0,0))}o.mesh.position.copy(o.pos),o.mesh.position.y+=Math.sin(e*3.5+o.bobOffset)*.06,o.mesh.rotation.y+=t*2.2,o.mesh.rotation.x=Math.sin(e*2+o.bobOffset)*.15}}const Qe={PIG:"pig",SHEEP:"sheep",ZOMBIE:"zombie",SKELETON:"skeleton",SPIDER:"spider",CREEPER:"creeper"};let Dt=null;const Gn=[],Ar=[],Fa=[];let ec=0;const zM=10;function XM(t,e,n,i,r,o){const s=i-t,a=r-e,c=o-n,u=Math.hypot(s,a,c);if(u<.3)return!0;const d=Math.ceil(u*2.2),h=s/d,f=a/d,p=c/d;for(let _=1;_<d;_++){const v=Math.floor(t+h*_),g=Math.floor(e+f*_),m=Math.floor(n+p*_);if(ws(v,g,m))return!1}return!0}function qM(){const t=new it,e=new Le({color:16020150}),n=new Le({color:16478597}),i=new Le({color:2042167}),r=new B(new W(.7,.5,.9),e);r.position.set(0,.45,0),t.add(r);const o=new B(new W(.45,.45,.45),e);o.position.set(0,.65,-.55),t.add(o);const s=new B(new W(.24,.16,.12),n);s.position.set(0,.58,-.8),t.add(s);const a=new B(new W(.08,.08,.02),i);a.position.set(-.16,.72,-.78);const c=new B(new W(.08,.08,.02),i);c.position.set(.16,.72,-.78),t.add(a),t.add(c);const u=new W(.18,.35,.18),d=[],h=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const f of h){const p=new B(u,e);p.position.set(...f),t.add(p),d.push(p)}return{group:t,legs:d,head:o,body:r,originalMats:[e,n]}}function KM(){const t=new it,e=new Le({color:16317180}),n=new Le({color:3359061}),i=new Le({color:16478597}),r=new Le({color:988970}),o=new B(new W(.75,.6,.95),e);o.position.set(0,.5,0),t.add(o);const s=new B(new W(.42,.42,.42),n);s.position.set(0,.68,-.55),t.add(s);const a=new B(new W(.44,.2,.44),e);a.position.set(0,.86,-.55),t.add(a);const c=new B(new W(.22,.14,.12),i);c.position.set(0,.6,-.78),t.add(c);const u=new B(new W(.08,.08,.02),r);u.position.set(-.16,.74,-.76);const d=new B(new W(.08,.08,.02),r);d.position.set(.16,.74,-.76),t.add(u),t.add(d);const h=new W(.16,.36,.16),f=[],p=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const _ of p){const v=new B(h,n);v.position.set(..._),t.add(v),f.push(v)}return{group:t,legs:f,head:s,body:o,originalMats:[e,n]}}function YM(){const t=new it,e=new Le({color:3899966}),n=new Le({color:440020}),i=new Le({color:1981066}),r=new Le({color:988970}),o=new B(new W(.44,.44,.44),e);o.position.set(0,1.45,0),t.add(o);const s=new B(new W(.08,.06,.02),r);s.position.set(-.12,1.48,-.23);const a=new B(new W(.08,.06,.02),r);a.position.set(.12,1.48,-.23),t.add(s),t.add(a);const c=new B(new W(.5,.65,.28),n);c.position.set(0,.9,0),t.add(c);const u=new W(.16,.16,.55),d=new B(u,e);d.position.set(-.35,1.05,-.26);const h=new B(u,e);h.position.set(.35,1.05,-.26),t.add(d),t.add(h);const f=new W(.2,.6,.22),p=new B(f,i);p.position.set(-.13,.3,0);const _=new B(f,i);return _.position.set(.13,.3,0),t.add(p),t.add(_),{group:t,legs:[p,_],arms:[d,h],head:o,body:c,originalMats:[e,n,i]}}function $M(){const t=new it,e=new Le({color:13751771}),n=new Le({color:988970}),i=new Le({color:7877903}),r=new B(new W(.42,.42,.42),e);r.position.set(0,1.45,0),t.add(r);const o=new B(new W(.09,.07,.02),n);o.position.set(-.11,1.46,-.22);const s=new B(new W(.09,.07,.02),n);s.position.set(.11,1.46,-.22),t.add(o),t.add(s);const a=new B(new W(.42,.6,.22),e);a.position.set(0,.9,0),t.add(a);const c=new W(.12,.6,.12),u=new B(c,e);u.position.set(-.3,.9,0);const d=new B(c,e);d.position.set(.3,.9,0),t.add(u),t.add(d);const h=new B(new W(.08,.5,.08),i);h.position.set(-.3,.85,-.2),h.rotation.x=.4,t.add(h);const f=new W(.14,.6,.14),p=new B(f,e);p.position.set(-.12,.3,0);const _=new B(f,e);return _.position.set(.12,.3,0),t.add(p),t.add(_),{group:t,legs:[p,_],arms:[u,d],head:r,body:a,originalMats:[e,i]}}function ZM(){const t=new it,e=new Le({color:1976635}),n=new _n({color:15680580}),i=new B(new W(.65,.45,.7),e);i.position.set(0,.35,.4),t.add(i);const r=new B(new W(.45,.35,.45),e);r.position.set(0,.3,-.25),t.add(r);const o=new W(.06,.06,.02),s=new B(o,n);s.position.set(-.12,.32,-.48);const a=new B(o,n);a.position.set(.12,.32,-.48),t.add(s),t.add(a);const c=new W(.6,.08,.08),u=[];for(let d=0;d<4;d++){const h=new B(c,e);h.position.set(-.45,.22,-.3+d*.22),h.rotation.z=.35,t.add(h),u.push(h);const f=new B(c,e);f.position.set(.45,.22,-.3+d*.22),f.rotation.z=-.35,t.add(f),u.push(f)}return{group:t,legs:u,head:r,body:i,originalMats:[e,n]}}function jM(){const t=new it,e=new Le({color:1409085}),n=new Le({color:988970}),i=new B(new W(.46,.46,.46),e);i.position.set(0,1.45,0),t.add(i);const r=new B(new W(.09,.09,.02),n);r.position.set(-.11,1.5,-.24);const o=new B(new W(.09,.09,.02),n);o.position.set(.11,1.5,-.24);const s=new B(new W(.18,.16,.02),n);s.position.set(0,1.36,-.24),t.add(r),t.add(o),t.add(s);const a=new B(new W(.46,.65,.26),e);a.position.set(0,.9,0),t.add(a);const c=new W(.2,.45,.2),u=[],d=[[-.14,.22,-.16],[.14,.22,-.16],[-.14,.22,.16],[.14,.22,.16]];for(const h of d){const f=new B(c,e);f.position.set(...h),t.add(f),u.push(f)}return{group:t,legs:u,head:i,body:a,originalMats:[e,n]}}function QM(t){Dt=t}function br(t,e,n,i){if(!Dt)return null;let r,o=10,s=1.4;t===Qe.PIG?(r=qM(),o=10,s=.6):t===Qe.SHEEP?(r=KM(),o=10,s=.65):t===Qe.SKELETON?(r=$M(),o=16,s=1.45):t===Qe.SPIDER?(r=ZM(),o=14,s=.35):t===Qe.CREEPER?(r=jM(),o=18,s=1.45):(r=YM(),o=20,s=1.45),r.group.position.set(e,n,i),Dt.add(r.group);const a={type:t,model:r,pos:new I(e,n,i),vel:new I(0,0,0),yaw:0,health:o,maxHealth:o,eyeHeight:s,state:"idle",stateTimer:Math.random()*2,lastSeenPos:null,canSeePlayer:!1,losCheckTimer:Math.random()*.25,attackCooldown:0,shootCooldown:2,fuseTimer:0,isFusing:!1,isAngered:!1,burnTimer:0,onGround:!0};return Gn.push(a),a}function Nu(t,e,n){if(!t||t.health<=0)return;t.health-=e,Ux(),Lh(t.pos.x,t.pos.y+t.eyeHeight*.5,t.pos.z);const i=n.clone().multiplyScalar(4.5);t.vel.x+=i.x,t.vel.z+=i.z,t.vel.y=3.5,t.isAngered=!0,t.type===Qe.PIG?(t.state="flee",t.stateTimer=4.5,Bx()):t.type===Qe.SHEEP?(t.state="flee",t.stateTimer=4.5,Sh()):(t.state="chase",t.lastSeenPos=Li().clone(),t.type===Qe.ZOMBIE&&Fx()),t.health<=0&&$a(t)}function $a(t){Dt.remove(t.model.group);const e=Gn.indexOf(t);e!==-1&&Gn.splice(e,1),t.type===Qe.PIG?kt(l.PORKCHOP,t.pos.x,t.pos.y+.5,t.pos.z):t.type===Qe.SHEEP?(kt(l.WOOL,t.pos.x,t.pos.y+.5,t.pos.z),kt(l.MUTTON,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Qe.ZOMBIE?(kt(l.ROTTEN_FLESH,t.pos.x,t.pos.y+.5,t.pos.z),Math.random()<.25&&kt(l.IRON_INGOT,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Qe.SKELETON?(kt(l.BONE,t.pos.x,t.pos.y+.5,t.pos.z),kt(l.ARROW,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Qe.SPIDER?(kt(l.STRING,t.pos.x,t.pos.y+.5,t.pos.z),kt(l.SPIDER_EYE,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Qe.CREEPER&&kt(l.GUNPOWDER,t.pos.x,t.pos.y+.5,t.pos.z)}function Ph(t,e,n,i=2.8,r=16){if(!Dt)return;Vx();const o=new I(t,e,n),a=Li().clone().add(new I(0,.9,0)).sub(o),c=a.length();if(c<i*2.2){const v=1-c/(i*2.2),g=Math.max(2,Math.round(r*v));Yo(g,a.clone().normalize())}for(const v of Gn)v.pos.distanceTo(o)<i*2&&Nu(v,14,v.pos.clone().sub(o).normalize());const u=Math.floor(t-i),d=Math.ceil(t+i),h=Math.max(1,Math.floor(e-i)),f=Math.min(63,Math.ceil(e+i)),p=Math.floor(n-i),_=Math.ceil(n+i);for(let v=p;v<=_;v++)for(let g=u;g<=d;g++)for(let m=h;m<=f;m++)if(Math.hypot(g+.5-t,m+.5-e,v+.5-n)<=i){const E=$t(g,m,v);if(E!==l.AIR&&E!==l.WATER&&(uu(g,m,v,E),oi(Dt,g,m,v,l.AIR),Math.random()<.4)){const M=Ch(E);M>0&&kt(M,g+.5,m+.5,v+.5)}}}function JM(t,e,n){if(!Dt)return;oi(Dt,t,e,n,l.AIR);const i=new W(.98,.98,.98),r=new Le({color:15680580}),o=new B(i,r);o.position.set(t+.5,e+.5,n+.5),Dt.add(o),xh(),Fa.push({mesh:o,mat:r,pos:new I(t+.5,e+.5,n+.5),timer:2.2,blinkTimer:0})}function eE(t){for(let e=Fa.length-1;e>=0;e--){const n=Fa[e];n.timer-=t,n.blinkTimer+=t*10,Math.floor(n.blinkTimer)%2===0?n.mat.color.setHex(16777215):n.mat.color.setHex(15680580),n.timer<=0&&(Dt.remove(n.mesh),Fa.splice(e,1),Ph(n.pos.x,n.pos.y,n.pos.z,3.8,20))}}function tE(t,e){if(!Dt)return;kx();const n=new W(.08,.08,.6),i=new _n({color:16317180}),r=new B(n,i);r.position.copy(t),Dt.add(r);const o=e.clone().multiplyScalar(24);Ar.push({mesh:r,pos:t.clone(),vel:o,life:5,isPlayerShot:!0})}function nE(t,e){if(!Dt)return;const n=new W(.08,.08,.5),i=new _n({color:14870768}),r=new B(n,i);r.position.copy(t),Dt.add(r);const s=e.clone().sub(t).normalize().multiplyScalar(16);Ar.push({mesh:r,pos:t.clone(),vel:s,life:4,isPlayerShot:!1})}function iE(t){const e=Li();for(let n=Ar.length-1;n>=0;n--){const i=Ar[n];if(i.life-=t,i.vel.y-=12*t,i.pos.addScaledVector(i.vel,t),i.mesh.position.copy(i.pos),i.isPlayerShot){let r=!1;for(const o of Gn){const s=o.pos.clone().add(new I(0,o.eyeHeight*.5,0));if(i.pos.distanceTo(s)<.9){Nu(o,9,i.vel.clone().normalize()),Dt.remove(i.mesh),Ar.splice(n,1),r=!0;break}}if(r)continue}else if(i.pos.distanceTo(e.clone().add(new I(0,.9,0)))<.75){Yo(4,i.vel.clone().normalize()),Dt.remove(i.mesh),Ar.splice(n,1);continue}(ws(Math.floor(i.pos.x),Math.floor(i.pos.y),Math.floor(i.pos.z))||i.life<=0)&&(Dt.remove(i.mesh),Ar.splice(n,1))}}function rE(t){const e=Li();ec+=t,ec>4&&Gn.length<zM&&(ec=0,oE(e)),iE(t),eE(t);for(let n=Gn.length-1;n>=0;n--){const i=Gn[n],r=i.pos.distanceTo(e);if(r>52){Dt.remove(i.model.group),Gn.splice(n,1);continue}sE(i,t,e,r)}}function oE(t){const e=Math.random()*Math.PI*2,n=24+Math.random()*14,i=Math.floor(t.x+Math.cos(e)*n),r=Math.floor(t.z+Math.sin(e)*n),o=ir(i,r);if(o>15&&o<55)if(Ko()){if(Gn.filter(c=>c.type===Qe.PIG||c.type===Qe.SHEEP).length<5){const c=Math.random()<.5?Qe.PIG:Qe.SHEEP;br(c,i+.5,o+1,r+.5)}}else{const a=Math.random();a<.35?br(Qe.ZOMBIE,i+.5,o+1,r+.5):a<.6?br(Qe.SKELETON,i+.5,o+1,r+.5):a<.8?br(Qe.CREEPER,i+.5,o+1,r+.5):br(Qe.SPIDER,i+.5,o+1,r+.5)}}function sE(t,e,n,i){if((t.type===Qe.ZOMBIE||t.type===Qe.SKELETON)&&Ko()){const f=ir(Math.floor(t.pos.x),Math.floor(t.pos.z));if(t.pos.y>=f&&(t.burnTimer+=e,t.burnTimer>=1&&(t.burnTimer=0,t.health-=2,Lh(t.pos.x,t.pos.y+1,t.pos.z),t.health<=0))){$a(t);return}}if(t.losCheckTimer-=e,t.losCheckTimer<=0){t.losCheckTimer=.3;const f=XM(t.pos.x,t.pos.y+t.eyeHeight,t.pos.z,n.x,n.y+1.2,n.z);t.canSeePlayer=f&&i<16,t.canSeePlayer?(t.lastSeenPos=n.clone(),t.type!==Qe.PIG&&(t.type===Qe.SPIDER&&Ko()&&!t.isAngered?t.state="idle":t.state="chase")):i>22&&t.state==="chase"&&(t.state="idle")}t.type===Qe.PIG?fE(t,e,n):t.type===Qe.SHEEP?dE(t,e,n):t.type===Qe.SKELETON?cE(t,e,n,i):t.type===Qe.SPIDER?uE(t,e,n,i):t.type===Qe.CREEPER?aE(t,e,n,i):lE(t,e,n,i),t.vel.y-=24*e,t.pos.addScaledVector(t.vel,e);const r=Math.floor(t.pos.x),o=Math.floor(t.pos.z),s=Math.floor(t.pos.y);let a=-999;const c=Math.min(63,s+1);for(let f=c;f>=0;f--)if(ws(r,f,o)){a=f+1;break}if(a>=0&&t.pos.y<=a)t.pos.y=a,t.vel.y=0,t.onGround=!0;else if(t.pos.y<-10){$a(t);return}else t.onGround=!1;const u=t.pos.x+t.vel.x*e,d=t.pos.z+t.vel.z*e,h=Math.floor(t.pos.y);ws(Math.floor(u),h,Math.floor(d))&&(ws(Math.floor(u),h+1,Math.floor(d))?(t.vel.x=0,t.vel.z=0):t.onGround&&(t.vel.y=5.8,t.onGround=!1)),t.vel.x*=Math.exp(-8*e),t.vel.z*=Math.exp(-8*e),t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.yaw+Math.PI}function aE(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;if(t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<2.4){t.isFusing||(t.isFusing=!0,xh()),t.fuseTimer+=e,t.vel.x=0,t.vel.z=0;const o=1+t.fuseTimer/1.8*.35;if(t.model.group.scale.set(o,o,o),t.fuseTimer>=1.8){Ph(t.pos.x,t.pos.y+.5,t.pos.z,2.8,16),$a(t);return}}else i>4.5&&t.isFusing&&(t.isFusing=!1,t.fuseTimer=0,t.model.group.scale.set(1,1,1))}}function lE(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<1.4&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1.2,Yo(3,new I(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function cE(t,e,n,i){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z),t.canSeePlayer&&(i<8?(t.vel.x=-Math.sin(t.yaw)*1.8,t.vel.z=-Math.cos(t.yaw)*1.8):i>14&&(t.vel.x=Math.sin(t.yaw)*1.8,t.vel.z=Math.cos(t.yaw)*1.8),t.shootCooldown-=e,t.shootCooldown<=0&&i<18&&(t.shootCooldown=2.8,vh(),nE(t.pos.clone().add(new I(0,1.2,0)),n.clone().add(new I(0,.9,0)))))}function uE(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=2.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<4&&t.onGround&&Math.random()<.04&&(t.vel.y=4.8,t.vel.x*=1.4,t.vel.z*=1.4,t.onGround=!1),i<1.3&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1,Yo(2,new I(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function fE(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=2.5+Math.random()*3.5,t.yaw+=(Math.random()-.5)*1.8),t.vel.x=Math.sin(t.yaw)*.9,t.vel.z=Math.cos(t.yaw)*.9}function dE(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else{if(t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=3+Math.random()*4,t.yaw+=(Math.random()-.5)*1.8,Math.random()<.25))try{Sh()}catch{}t.vel.x=Math.sin(t.yaw)*.85,t.vel.z=Math.cos(t.yaw)*.85}}function hE(t,e,n=3.8){let i=null,r=n;for(const o of Gn){if(o.health<=0)continue;const a=o.pos.clone().add(new I(0,o.eyeHeight*.5,0)).clone().sub(t),c=a.dot(e);c>0&&c<r&&a.clone().sub(e.clone().multiplyScalar(c)).length()<.9&&(r=c,i=o)}return i}let tc=null;function vd(){return tc||(tc=wh()),tc}function nc(t,e,n,i){const[r,o,s,a]=e,c=(o[0]-r[0])/16,u=(o[1]-r[1])/16,d=(a[0]-r[0])/16,h=(a[1]-r[1])/16;t.save(),t.filter=`brightness(${i})`,t.setTransform(c,u,d,h,r[0],r[1]),t.drawImage(n,0,0,16,16,0,0,16,16),t.restore()}function Ot(t,e=46){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");if(t===l.IRON_SWORD||t===l.STONE_SWORD||t===l.WOODEN_SWORD){const f=t===l.IRON_SWORD,p=t===l.STONE_SWORD,_=f?"#f1f5f9":p?"#94a3b8":"#b45309",v=f?"#475569":p?"#334155":"#78350f";return i.lineWidth=3,i.strokeStyle=v,i.fillStyle=_,i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle=f?"#334155":"#451a03",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n}if(t===l.IRON_PICKAXE||t===l.STONE_PICKAXE||t===l.WOODEN_PICKAXE){const f=t===l.IRON_PICKAXE,p=t===l.STONE_PICKAXE,_=f?"#cbd5e1":p?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.arc(e*.7,e*.3,e*.25,-Math.PI*.75,-Math.PI*.15),i.stroke(),n}if(t===l.STICK)return i.lineWidth=5,i.strokeStyle="#92400e",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.75,e*.25),i.stroke(),n;if(t===l.TORCH)return i.lineWidth=6,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.3,e*.75),i.lineTo(e*.65,e*.4),i.stroke(),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.68,e*.35,e*.15,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.68,e*.35,e*.08,0,Math.PI*2),i.fill(),n;if(t===l.IRON_INGOT)return i.fillStyle="#cbd5e1",i.strokeStyle="#475569",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.4),i.lineTo(e*.65,e*.3),i.lineTo(e*.8,e*.55),i.lineTo(e*.4,e*.65),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.35,e*.42,e*.25,e*.08),n;if(t===l.COOKED_PORKCHOP)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.35,e*.22,Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#451a03",i.fillRect(e*.4,e*.4,e*.2,2),i.fillRect(e*.45,e*.5,e*.2,2),n;if(t===l.IRON_HELMET)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.32,Math.PI,0),i.lineTo(e*.82,e*.65),i.lineTo(e*.65,e*.65),i.lineTo(e*.65,e*.55),i.lineTo(e*.35,e*.55),i.lineTo(e*.35,e*.65),i.lineTo(e*.18,e*.65),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_CHESTPLATE)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.35),i.lineTo(e*.6,e*.35),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.75,e*.5),i.lineTo(e*.75,e*.75),i.lineTo(e*.25,e*.75),i.lineTo(e*.25,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_LEGGINGS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.75),i.lineTo(e*.55,e*.75),i.lineTo(e*.5,e*.45),i.lineTo(e*.45,e*.75),i.lineTo(e*.25,e*.75),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_BOOTS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.fillRect(e*.22,e*.45,e*.18,e*.3),i.fillRect(e*.15,e*.6,e*.25,e*.15),i.fillRect(e*.6,e*.45,e*.18,e*.3),i.fillRect(e*.6,e*.6,e*.25,e*.15),n;if(t===l.ARROW)return i.lineWidth=3,i.strokeStyle="#94a3b8",i.beginPath(),i.moveTo(e*.2,e*.8),i.lineTo(e*.75,e*.25),i.stroke(),i.fillStyle="#475569",i.beginPath(),i.moveTo(e*.82,e*.18),i.lineTo(e*.65,e*.25),i.lineTo(e*.75,e*.35),i.closePath(),i.fill(),n;if(t===l.BONE)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.42,e*.5,e*.16,4),i.fill(),i.stroke(),n;if(t===l.STRING)return i.lineWidth=2,i.strokeStyle="#f8fafc",i.beginPath(),i.arc(e*.5,e*.5,e*.25,0,Math.PI*1.7),i.stroke(),n;if(t===l.SPIDER_EYE)return i.fillStyle="#991b1b",i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.22,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===l.BOW)return i.lineWidth=3.5,i.strokeStyle="#78350f",i.beginPath(),i.arc(e*.4,e*.5,e*.35,-Math.PI*.45,Math.PI*.45),i.stroke(),i.lineWidth=1.5,i.strokeStyle="#f8fafc",i.beginPath(),i.moveTo(e*.4+Math.cos(-Math.PI*.45)*(e*.35),e*.5+Math.sin(-Math.PI*.45)*(e*.35)),i.lineTo(e*.4+Math.cos(Math.PI*.45)*(e*.35),e*.5+Math.sin(Math.PI*.45)*(e*.35)),i.stroke(),n;if(t===l.IRON_HOE||t===l.STONE_HOE||t===l.WOODEN_HOE){const f=t===l.IRON_HOE,p=t===l.STONE_HOE,_=f?"#cbd5e1":p?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.65,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.moveTo(e*.65,e*.3),i.lineTo(e*.85,e*.3),i.lineTo(e*.85,e*.45),i.stroke(),n}if(t===l.WHEAT_SEEDS)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=1.5,[[e*.35,e*.4],[e*.55,e*.35],[e*.45,e*.6],[e*.65,e*.55]].forEach(([p,_])=>{i.beginPath(),i.arc(p,_,e*.08,0,Math.PI*2),i.fill(),i.stroke()}),n;if(t===l.WHEAT)return i.lineWidth=3,i.strokeStyle="#eab308",i.beginPath(),i.moveTo(e*.3,e*.8),i.lineTo(e*.5,e*.25),i.moveTo(e*.5,e*.8),i.lineTo(e*.5,e*.2),i.moveTo(e*.7,e*.8),i.lineTo(e*.5,e*.25),i.stroke(),i.fillStyle="#ef4444",i.fillRect(e*.38,e*.55,e*.24,4),n;if(t===l.BREAD)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.roundRect(e*.2,e*.35,e*.6,e*.32,8),i.fill(),i.stroke(),i.fillStyle="#fef08a",i.fillRect(e*.32,e*.42,3,e*.18),i.fillRect(e*.48,e*.42,3,e*.18),i.fillRect(e*.64,e*.42,3,e*.18),n;if(t===l.GUNPOWDER)return i.fillStyle="#475569",i.strokeStyle="#1e293b",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.25,e*.7),i.lineTo(e*.5,e*.3),i.lineTo(e*.75,e*.7),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#94a3b8",i.fillRect(e*.45,e*.45,2,2),i.fillRect(e*.55,e*.55,2,2),i.fillRect(e*.35,e*.6,2,2),n;if(t===l.DIAMOND)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.7,e*.3),i.lineTo(e*.85,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#67e8f9",i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.5,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.fillStyle="#e0f2fe",i.beginPath(),i.moveTo(e*.4,e*.32),i.lineTo(e*.6,e*.32),i.lineTo(e*.5,e*.45),i.closePath(),i.fill(),n;if(t===l.DIAMOND_SWORD)return i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle="#0284c7",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n;if(t===l.DIAMOND_PICKAXE)return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.45,e*.2),i.quadraticCurveTo(e*.75,e*.15,e*.85,e*.45),i.lineTo(e*.75,e*.5),i.quadraticCurveTo(e*.65,e*.3,e*.4,e*.3),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_HELMET)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.25,e*.5,e*.45,[8,8,2,2]),i.fill(),i.stroke(),i.clearRect(e*.38,e*.45,e*.24,e*.16),n;if(t===l.DIAMOND_CHESTPLATE)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.25),i.lineTo(e*.5,e*.38),i.lineTo(e*.6,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.72,e*.5),i.lineTo(e*.7,e*.8),i.lineTo(e*.3,e*.8),i.lineTo(e*.28,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_LEGGINGS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.8),i.lineTo(e*.55,e*.8),i.lineTo(e*.5,e*.5),i.lineTo(e*.45,e*.8),i.lineTo(e*.25,e*.8),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_BOOTS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.22,e*.4,e*.24,e*.4,[4,4,6,2]),i.roundRect(e*.54,e*.4,e*.24,e*.4,[4,4,6,2]),i.fill(),i.stroke(),n;if(t===l.MUTTON||t===l.COOKED_MUTTON){const f=t===l.COOKED_MUTTON;return i.fillStyle=f?"#78350f":"#f43f5e",i.strokeStyle=f?"#451a03":"#9f1239",i.lineWidth=2,i.beginPath(),i.ellipse(e*.45,e*.48,e*.26,e*.18,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.62,e*.62,e*.16,e*.08),n}if(t===l.ROTTEN_FLESH)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.32,e*.2,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===l.FLINT)return i.fillStyle="#1e293b",i.strokeStyle="#0f172a",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.5,e*.2),i.lineTo(e*.8,e*.6),i.lineTo(e*.6,e*.8),i.lineTo(e*.3,e*.7),i.lineTo(e*.2,e*.4),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#64748b",i.fillRect(e*.45,e*.3,e*.1,e*.25),n;if(t===l.FLINT_AND_STEEL)return i.strokeStyle="#e2e8f0",i.lineWidth=e*.14,i.beginPath(),i.arc(e*.42,e*.48,e*.24,-Math.PI*.6,Math.PI*.6),i.stroke(),i.fillStyle="#1e293b",i.fillRect(e*.52,e*.56,e*.24,e*.2),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.58,e*.35,e*.08,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.58,e*.35,e*.04,0,Math.PI*2),i.fill(),n;if(t===l.QUARTZ)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.5,e*.15),i.lineTo(e*.75,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.25,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(e*.5,e*.18),i.lineTo(e*.65,e*.45),i.lineTo(e*.5,e*.8),i.closePath(),i.fill(),n;if(t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.TORCH||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3){const f=vd(),p=Fs[t];if(p){const _=f[p.top];i.imageSmoothingEnabled=!1;const v=e*.08;return i.drawImage(_,v,v,e-v*2,e-v*2),n}}const r=vd(),o=Fs[t];if(!o)return null;const s=r[o.top],a=r[o.side],c=e/4,u=[[e/2,0],[e/2+c,c/2],[e/2,c],[e/2-c,c/2]],d=[[e/2-c,c/2],[e/2,c],[e/2,2*c],[e/2-c,3*c/2]],h=[[e/2,c],[e/2+c,c/2],[e/2+c,3*c/2],[e/2,2*c]];return nc(i,h,a,.8),nc(i,d,a,.66),nc(i,u,s,1),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1.5,[u,d,h].forEach(f=>{i.beginPath(),i.moveTo(f[0][0],f[0][1]);for(let p=1;p<f.length;p++)i.lineTo(f[p][0],f[p][1]);i.closePath(),i.stroke()}),n}let pe={type:0,count:0},Pt=null;function ts(t){return!t||t===l.AIR?0:fl(t)||lM(t)||Rh(t)||uM(t)||t===l.BOW?1:64}function pE(){Pt||(Pt=document.createElement("div"),Pt.id="cursor-floating-item",Pt.className="fixed pointer-events-none z-[9999] hidden items-center justify-center",Object.assign(Pt.style,{width:"46px",height:"46px",transform:"translate(-50%, -50%)",transition:"none"}),document.body.appendChild(Pt),window.addEventListener("mousemove",t=>{pe.type>0&&pe.count>0?(Pt.style.display="flex",Pt.style.left=`${t.clientX}px`,Pt.style.top=`${t.clientY}px`):Pt.style.display="none"}))}function Oi(){if(Pt||pE(),pe.type>0&&pe.count>0){Pt.innerHTML="";const t=Ot(pe.type,42);if(t&&Pt.appendChild(t),pe.count>1){const e=document.createElement("span");e.className="absolute bottom-0 right-0 font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.2 rounded shadow-[0_2px_4px_rgba(0,0,0,0.8)]",e.textContent=pe.count,Pt.appendChild(e)}Pt.style.display="flex"}else pe.type=0,pe.count=0,Pt&&(Pt.style.display="none")}function jn(t,e){pe.type=t,pe.count=t===0?0:e,Oi()}function hl(){pe={type:0,count:0},Oi()}function li(t,e,n){e.preventDefault(),e.stopPropagation();const i=t.get(),r=i.type||0,o=i.count||0,s=t.maxStack||ts(pe.type||r);if(e.shiftKey&&e.button===0&&r>0&&t.onShiftClick){t.onShiftClick(r,o),n&&n();return}if(e.button===0){if(pe.type===0&&r>0)jn(r,o),t.set(0,0),bt(!0);else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;const a=Math.min(pe.count,s);t.set(pe.type,a),pe.count-=a,pe.count<=0?jn(0,0):Oi(),bt(!1)}else if(pe.type>0&&r===pe.type){const a=s-o;if(a>0){const c=Math.min(a,pe.count);t.set(r,o+c),pe.count-=c,pe.count<=0?jn(0,0):Oi(),bt(!1)}}else if(pe.type>0&&r>0&&pe.type!==r){if(t.allowEquip&&!t.allowEquip(pe.type))return;const a=r,c=o;t.set(pe.type,pe.count),jn(a,c),bt(!1)}}else if(e.button===2)if(pe.type===0&&r>0){const a=Math.ceil(o/2),c=o-a;jn(r,a),t.set(c>0?r:0,c),bt(!0)}else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;t.set(pe.type,1),pe.count-=1,pe.count<=0?jn(0,0):Oi(),bt(!1)}else pe.type>0&&r===pe.type&&o<s&&(t.set(r,o+1),pe.count-=1,pe.count<=0?jn(0,0):Oi(),bt(!1));n&&n()}let ei=null,ti=null;const Lt=new Array(9).fill(null).map(()=>({type:0,count:0})),Xt=new Array(4).fill(null).map(()=>({type:0,count:0}));let qn=null;const Uh=[{id:"planks",name:"Tábuas de Madeira",category:"Blocos",result:l.WOOD_PLANKS,count:4,gridSize:2,layout:[l.WOOD_LOG,0,0,0],desc:"Coloque 1 Tronco de Carvalho em qualquer espaço da grade.",check:t=>{const e=t.filter(i=>i===l.WOOD_LOG).length,n=t.filter(i=>i!==0&&i!==l.WOOD_LOG).length;return e===1&&n===0}},{id:"sticks",name:"Gravetos",category:"Materiais",result:l.STICK,count:4,gridSize:2,layout:[l.WOOD_PLANKS,0,l.WOOD_PLANKS,0],desc:"Coloque 2 Tábuas de Madeira verticalmente.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[1]===0&&t[3]===0||t[1]===l.WOOD_PLANKS&&t[3]===l.WOOD_PLANKS&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===l.WOOD_PLANKS&&t[s]===l.WOOD_PLANKS&&t.every((c,u)=>u===o||u===s?!0:c===0))return!0}return!1}},{id:"crafting_table",name:"Bancada de Trabalho",category:"Blocos",result:l.CRAFTING_TABLE,count:1,gridSize:2,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"Preencha os 4 espaços (2×2) com Tábuas de Madeira.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===l.WOOD_PLANKS);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,s=r+1,a=r+3,c=r+4;if(t[o]===l.WOOD_PLANKS&&t[s]===l.WOOD_PLANKS&&t[a]===l.WOOD_PLANKS&&t[c]===l.WOOD_PLANKS&&t.every((d,h)=>h===o||h===s||h===a||h===c?!0:d===0))return!0}}return!1}},{id:"furnace",name:"Fornalha",category:"Blocos",result:l.FURNACE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,0,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE],desc:"Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===l.COBBLESTONE)&&t[4]===0},{id:"chest",name:"Baú de Madeira",category:"Blocos",result:l.CHEST,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,0,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===l.WOOD_PLANKS)&&t[4]===0},{id:"torches",name:"Tochas (4x)",category:"Iluminação",result:l.TORCH,count:4,gridSize:2,layout:[l.COAL_ORE,0,l.STICK,0],desc:"1 Carvão em cima e 1 Graveto logo abaixo.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===l.COAL_ORE&&t[2]===l.STICK&&t[1]===0&&t[3]===0||t[1]===l.COAL_ORE&&t[3]===l.STICK&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===l.COAL_ORE&&t[s]===l.STICK&&t.every((c,u)=>u===o||u===s?!0:c===0))return!0}return!1}},{id:"wooden_pickaxe",name:"Picareta de Madeira",category:"Ferramentas",result:l.WOODEN_PICKAXE,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,0,l.STICK,0,0,l.STICK,0],desc:"3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.WOOD_PLANKS&&t[1]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"wooden_sword",name:"Espada de Madeira",category:"Armas",result:l.WOODEN_SWORD,count:1,gridSize:3,layout:[0,l.WOOD_PLANKS,0,0,l.WOOD_PLANKS,0,0,l.STICK,0],desc:"2 Tábuas verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.WOOD_PLANKS&&t[3+i]===l.WOOD_PLANKS&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"stone_pickaxe",name:"Picareta de Pedra",category:"Ferramentas",result:l.STONE_PICKAXE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,0,l.STICK,0,0,l.STICK,0],desc:"3 Pedregulhos no topo e 2 Gravetos no meio.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.COBBLESTONE&&t[1]===l.COBBLESTONE&&t[2]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"stone_sword",name:"Espada de Pedra",category:"Armas",result:l.STONE_SWORD,count:1,gridSize:3,layout:[0,l.COBBLESTONE,0,0,l.COBBLESTONE,0,0,l.STICK,0],desc:"2 Pedregulhos verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.COBBLESTONE&&t[3+i]===l.COBBLESTONE&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_pickaxe",name:"Picareta de Ferro",category:"Ferramentas",result:l.IRON_PICKAXE,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.STICK,0,0,l.STICK,0],desc:"3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"iron_sword",name:"Espada de Ferro",category:"Armas",result:l.IRON_SWORD,count:1,gridSize:3,layout:[0,l.IRON_INGOT,0,0,l.IRON_INGOT,0,0,l.STICK,0],desc:"2 Barras de Ferro verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.IRON_INGOT&&t[3+i]===l.IRON_INGOT&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_helmet",name:"Capacete de Ferro",category:"Armaduras",result:l.IRON_HELMET,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,0,0,0],desc:"5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"iron_chestplate",name:"Peitoral de Ferro",category:"Armaduras",result:l.IRON_CHESTPLATE,count:1,gridSize:3,layout:[l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT],desc:"8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===0&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===l.IRON_INGOT&&t[5]===l.IRON_INGOT&&t[6]===l.IRON_INGOT&&t[7]===l.IRON_INGOT&&t[8]===l.IRON_INGOT},{id:"iron_leggings",name:"Calças de Ferro",category:"Armaduras",result:l.IRON_LEGGINGS,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT],desc:"7 Barras de Ferro em formato de calças (+5 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===l.IRON_INGOT&&t[7]===0&&t[8]===l.IRON_INGOT},{id:"iron_boots",name:"Botas de Ferro",category:"Armaduras",result:l.IRON_BOOTS,count:1,gridSize:3,layout:[l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,0,0,0],desc:"4 Barras de Ferro em formato de botas (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===0&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bow",name:"Arco de Caça",category:"Armas",result:l.BOW,count:1,gridSize:3,layout:[0,l.STICK,l.STRING,l.STICK,0,l.STRING,0,l.STICK,l.STRING],desc:"3 Gravetos e 3 Linhas de Teia na bancada 3×3.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===l.STICK).length,r=t.filter(s=>s===l.STRING).length,o=t.filter(s=>s!==0&&s!==l.STICK&&s!==l.STRING).length;return i===3&&r===3&&o===0}},{id:"wooden_hoe",name:"Enxada de Madeira",category:"Ferramentas",result:l.WOODEN_HOE,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Tábuas no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.WOOD_PLANKS&&t[1]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.WOOD_PLANKS).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.WOOD_PLANKS).length;return i&&r===2&&o===2&&s===0}},{id:"stone_hoe",name:"Enxada de Pedra",category:"Ferramentas",result:l.STONE_HOE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Pedregulhos no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.COBBLESTONE&&t[1]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.COBBLESTONE&&t[2]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.COBBLESTONE).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.COBBLESTONE).length;return i&&r===2&&o===2&&s===0}},{id:"iron_hoe",name:"Enxada de Ferro",category:"Ferramentas",result:l.IRON_HOE,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Barras de Ferro no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.IRON_INGOT).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.IRON_INGOT).length;return i&&r===2&&o===2&&s===0}},{id:"bread",name:"Pão Dourado",category:"Alimentação",result:l.BREAD,count:1,gridSize:3,layout:[0,0,0,l.WHEAT,l.WHEAT,l.WHEAT,0,0,0],desc:"3 Trigos colhidos em linha horizontal (+5 Vida).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=i*3,o=i*3+1,s=i*3+2;if(t[r]===l.WHEAT&&t[o]===l.WHEAT&&t[s]===l.WHEAT&&t.every((c,u)=>u===r||u===o||u===s?!0:c===0))return!0}return!1}},{id:"tnt",name:"Bloco de TNT",category:"Explosivos",result:l.TNT,count:1,gridSize:3,layout:[l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER],desc:"5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===l.GUNPOWDER).length,r=t.filter(s=>s===l.SAND).length,o=t.filter(s=>s!==0&&s!==l.GUNPOWDER&&s!==l.SAND).length;return i===5&&r===4&&o===0}},{id:"diamond_sword",name:"Espada de Diamante",category:"Armas",result:l.DIAMOND_SWORD,count:1,gridSize:3,layout:[0,l.DIAMOND,0,0,l.DIAMOND,0,0,l.STICK,0],desc:"2 Diamantes verticais e 1 Graveto na base (+9 Dano).",check:(t,e,n)=>{if(e===3&&n===3){for(let i=0;i<3;i++)if(t[i]===l.DIAMOND&&t[i+3]===l.DIAMOND&&t[i+6]===l.STICK&&t.filter((o,s)=>s===i||s===i+3||s===i+6?!1:o!==0).length===0)return!0}return!1}},{id:"diamond_pickaxe",name:"Picareta de Diamante",category:"Ferramentas",result:l.DIAMOND_PICKAXE,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.STICK,0,0,l.STICK,0],desc:"3 Diamantes na linha superior e 2 Gravetos no centro vertical (Capaz de minerar Obsidiana).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===0&&t[4]===l.STICK&&t[5]===0&&t[6]===0&&t[7]===l.STICK&&t[8]===0},{id:"diamond_helmet",name:"Capacete de Diamante",category:"Armaduras",result:l.DIAMOND_HELMET,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,0,0,0],desc:"5 Diamantes em formato de arco/U invertido (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"diamond_chestplate",name:"Peitoral de Diamante",category:"Armaduras",result:l.DIAMOND_CHESTPLATE,count:1,gridSize:3,layout:[l.DIAMOND,0,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND],desc:"8 Diamantes em formato de colete com espaço superior central (+8 Defesa máxima).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===0&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===l.DIAMOND&&t[5]===l.DIAMOND&&t[6]===l.DIAMOND&&t[7]===l.DIAMOND&&t[8]===l.DIAMOND},{id:"diamond_leggings",name:"Calças de Diamante",category:"Armaduras",result:l.DIAMOND_LEGGINGS,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,l.DIAMOND,0,l.DIAMOND],desc:"7 Diamantes em formato de calças (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===l.DIAMOND&&t[7]===0&&t[8]===l.DIAMOND},{id:"diamond_boots",name:"Botas de Diamante",category:"Armaduras",result:l.DIAMOND_BOOTS,count:1,gridSize:3,layout:[l.DIAMOND,0,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,0,0,0],desc:"4 Diamantes em formato de botas (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===0&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bed",name:"Cama Confortável",category:"Mobiliário",result:l.BED,count:1,gridSize:3,layout:[0,0,0,l.WOOL,l.WOOL,l.WOOL,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"3 Blocos de Lã de Ovelha sobre 3 Tábuas de Madeira (Permite dormir e pular a noite).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.WOOL&&t[1]===l.WOOL&&t[2]===l.WOOL&&t[3]===l.WOOD_PLANKS&&t[4]===l.WOOD_PLANKS&&t[5]===l.WOOD_PLANKS&&t[6]===0&&t[7]===0&&t[8]===0,r=t[0]===0&&t[1]===0&&t[2]===0&&t[3]===l.WOOL&&t[4]===l.WOOL&&t[5]===l.WOOL&&t[6]===l.WOOD_PLANKS&&t[7]===l.WOOD_PLANKS&&t[8]===l.WOOD_PLANKS;return i||r}},{id:"flint_and_steel",name:"Isqueiro de Pederneira",category:"Ferramentas",result:l.FLINT_AND_STEEL,count:1,gridSize:2,layout:[l.IRON_INGOT,0,0,l.FLINT],desc:"1 Barra de Ferro e 1 Pederneira diagonalmente (Acende o Portal do Nether e Fogueiras).",check:t=>{const e=t.filter(r=>r===l.IRON_INGOT).length,n=t.filter(r=>r===l.FLINT).length,i=t.filter(r=>r!==0&&r!==l.IRON_INGOT&&r!==l.FLINT).length;return e===1&&n===1&&i===0}},{id:"quartz_block",name:"Bloco de Quartzo Polido",category:"Blocos",result:l.QUARTZ_BLOCK,count:1,gridSize:2,layout:[l.QUARTZ,l.QUARTZ,l.QUARTZ,l.QUARTZ],desc:"4 Cristais de Quartzo do Nether dispostos em quadrado 2×2.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===l.QUARTZ);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,s=r+1,a=r+3,c=r+4;if(t[o]===l.QUARTZ&&t[s]===l.QUARTZ&&t[a]===l.QUARTZ&&t[c]===l.QUARTZ&&t.every((d,h)=>h===o||h===s||h===a||h===c?!0:d===0))return!0}}return!1}}];function Fh(t,e,n){const i=t.map(r=>r&&typeof r=="object"?r.type||0:r||0);for(const r of Uh)if(r.check(i,e,n))return{result:r.result,count:r.count,name:r.name};return null}function Bh(){ei||(ei=document.createElement("div"),ei.id="crafting-table-modal",ei.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ei.innerHTML=`
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
  `,document.body.appendChild(ei),document.getElementById("close-table-btn").addEventListener("click",gE),document.getElementById("open-recipe-book-table").addEventListener("click",Hh),Gh(),Zi())}function mE(){ei||Bh(),ei.style.display="flex",es(St.CRAFTING_TABLE),bt(!0),wr(),Zi()}function gE(){if(ei){ei.style.display="none",Ii(St.CRAFTING_TABLE),bt(!1),pe.type>0&&pe.count>0&&(Vn(pe.type,pe.count),hl());for(let t=0;t<9;t++){const e=Lt[t];e&&e.type>0&&e.count>0&&(Vn(e.type,e.count),Lt[t]={type:0,count:0})}wr()}}function Zi(){const t=document.getElementById("table-craft-grid"),e=document.getElementById("table-output-slot"),n=document.getElementById("table-hotbar-grid");if(!(!t||!e||!n)){if(t.innerHTML="",Lt.forEach((i,r)=>{const o=document.createElement("div");o.className="slot w-14 h-14 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const s=i||{type:0,count:0};if(s.type>0&&s.count>0){const c=Ot(s.type,38);if(c&&o.appendChild(c),s.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=s.count,o.appendChild(u)}}const a={get:()=>Lt[r]||{type:0,count:0},set:(c,u)=>{Lt[r]={type:c,count:c===0?0:u},wr()}};o.addEventListener("mousedown",c=>li(a,c,Zi)),o.addEventListener("contextmenu",c=>c.preventDefault()),t.appendChild(o)}),e.innerHTML="",qn&&qn.result>0){const i=Ot(qn.result,48);if(i&&e.appendChild(i),qn.count>1){const r=document.createElement("span");r.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",r.textContent=qn.count,e.appendChild(r)}}e.onmousedown=i=>{if(i.preventDefault(),qn&&qn.result>0){const r=qn.result,o=qn.count;if(i.shiftKey){if(Vn(r,o)){Tn();for(let s=0;s<9;s++)Lt[s].count>1?Lt[s].count-=1:Lt[s]={type:0,count:0};wr(),Zi()}}else{const s=ts(r);if(pe.type===0){jn(r,o),Tn();for(let a=0;a<9;a++)Lt[a].count>1?Lt[a].count-=1:Lt[a]={type:0,count:0};wr(),Zi()}else if(pe.type===r&&pe.count+o<=s){pe.count+=o,Oi(),Tn();for(let a=0;a<9;a++)Lt[a].count>1?Lt[a].count-=1:Lt[a]={type:0,count:0};wr(),Zi()}}}},e.oncontextmenu=i=>i.preventDefault(),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div");r.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative";const o=De[i]||{type:0,count:0};if(o.type>0&&o.count>0){const a=Ot(o.type,30);if(a&&r.appendChild(a),r.title=`${no[o.type]||"Item"}`,o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const s={get:()=>De[i]||{type:0,count:0},set:(a,c)=>{De[i]={type:a,count:a===0?0:c}},onShiftClick:(a,c)=>{const u=Lt.findIndex(d=>d.type===0||d.count===0);u!==-1&&(Lt[u]={type:a,count:c},De[i]={type:0,count:0},wr(),Zi())}};r.addEventListener("mousedown",a=>li(s,a,Zi)),r.addEventListener("contextmenu",a=>a.preventDefault()),n.appendChild(r)}}}function wr(){qn=Fh(Lt,3,3)}function Gh(){ti||(ti=document.createElement("div"),ti.id="recipe-book-modal",ti.className="fixed inset-0 z-[200] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-lg select-none",ti.innerHTML=`
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
  `,document.body.appendChild(ti),document.getElementById("close-recipe-book-btn").addEventListener("click",vE),_E())}function _E(){const t=document.getElementById("recipe-cards-container");t&&(t.innerHTML="",Uh.forEach(e=>{const n=document.createElement("div");n.className="flex items-center justify-between bg-surface-container/60 p-3.5 rounded-xl border border-outline-variant hover:border-primary/50 transition-all";const i=document.createElement("div");i.className="flex items-center gap-3.5 max-w-[340px]";const r=document.createElement("div");r.className="w-12 h-12 rounded-xl bg-surface-container-lowest border-2 border-primary flex items-center justify-center relative shrink-0 shadow-[0_0_8px_rgba(120,220,119,0.3)]";const o=Ot(e.result,36);if(r.appendChild(o),e.count>1){const h=document.createElement("span");h.className="absolute -bottom-1 -right-1 bg-primary text-on-primary font-label-caps text-[10px] font-bold px-1 rounded",h.textContent=e.count,r.appendChild(h)}i.appendChild(r);const s=document.createElement("div");s.innerHTML=`
      <div class="font-headline-lg-mobile text-sm font-bold text-on-surface">${e.name}</div>
      <div class="font-label-caps text-[10px] font-semibold text-primary uppercase mb-0.5">${e.category}</div>
      <div class="font-body-md text-xs text-on-surface-variant leading-snug">${e.desc}</div>
    `,i.appendChild(s);const a=document.createElement("div");a.className="flex flex-col items-center gap-1 shrink-0";const c=document.createElement("span");c.className="font-label-caps text-[9px] font-bold text-on-surface-variant uppercase tracking-wider",c.textContent=`Grade ${e.gridSize}×${e.gridSize}`,a.appendChild(c);const u=document.createElement("div"),d=e.gridSize;u.className=`grid grid-cols-${d} gap-1 bg-surface-container-lowest p-1.5 rounded-lg border border-outline-variant`,u.style.gridTemplateColumns=`repeat(${d}, 28px)`,e.layout.forEach(h=>{const f=document.createElement("div");if(f.className="w-7 h-7 rounded bg-surface-container/80 border border-outline-variant/60 flex items-center justify-center",h>0){const p=Ot(h,22);f.appendChild(p),f.title=no[h]||""}u.appendChild(f)}),a.appendChild(u),n.appendChild(i),n.appendChild(a),t.appendChild(n)}))}function Hh(){ti||Gh(),ti.style.display="flex",es(St.RECIPE_BOOK)}function vE(){ti&&(ti.style.display="none",Ii(St.RECIPE_BOOK))}const Rs={[l.IRON_ORE]:{output:l.IRON_INGOT,time:3.5},[l.PORKCHOP]:{output:l.COOKED_PORKCHOP,time:2.5},[l.MUTTON]:{output:l.COOKED_MUTTON,time:2.5},[l.COBBLESTONE]:{output:l.STONE,time:3}},Za={[l.LAVA]:60,[l.COAL_ORE]:16,[l.WOOD_LOG]:6,[l.WOOD_PLANKS]:3,[l.STICK]:1.5},Cs=new Map;let Bs=null,bi=null;function xE(t,e,n){const i=`${t},${e},${n}`;return Cs.has(i)||Cs.set(i,{x:t,y:e,z:n,inputItem:0,inputCount:0,fuelItem:0,fuelCount:0,outputItem:0,outputCount:0,burnTimeRemaining:0,maxBurnTime:0,cookProgress:0}),Cs.get(i)}function SE(t,e,n){Bs=`${t},${e},${n}`,xE(t,e,n),bi||TE(),bi.style.display="flex",es(St.FURNACE),bt(!0),Yn()}function ME(){bi&&(bi.style.display="none",Bs=null,Ii(St.FURNACE),bt(!1),pe.type>0&&pe.count>0&&(Vn(pe.type,pe.count),hl()))}function EE(){return Mh(St.FURNACE)}function yE(t){for(const[e,n]of Cs.entries()){const r=n.inputItem>0&&Rs[n.inputItem]?Rs[n.inputItem]:null;n.burnTimeRemaining>0&&(n.burnTimeRemaining=Math.max(0,n.burnTimeRemaining-t)),r&&(n.outputItem===0||n.outputItem===r.output)?(n.burnTimeRemaining<=0&&n.fuelCount>0&&Za[n.fuelItem]&&(n.maxBurnTime=Za[n.fuelItem],n.burnTimeRemaining=n.maxBurnTime,n.fuelCount--,n.fuelCount<=0&&(n.fuelItem=0)),n.burnTimeRemaining>0?(n.cookProgress+=t,n.cookProgress>=r.time&&(n.cookProgress=0,n.inputCount--,n.inputCount<=0&&(n.inputItem=0),n.outputItem=r.output,n.outputCount=(n.outputCount||0)+1)):n.cookProgress=Math.max(0,n.cookProgress-t*.5)):n.cookProgress=0}Bs&&EE()&&Yn()}function TE(){bi=document.createElement("div"),bi.id="furnace-modal",bi.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",bi.innerHTML=`
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
  `,document.body.appendChild(bi),document.getElementById("close-furnace-btn").addEventListener("click",ME)}function Yn(){if(!Bs)return;const t=Cs.get(Bs);if(!t)return;const e=document.getElementById("furnace-input-slot"),n=document.getElementById("furnace-fuel-slot"),i=document.getElementById("furnace-output-slot"),r=document.getElementById("furnace-flame-active"),o=document.getElementById("furnace-progress-bar"),s=document.getElementById("furnace-hotbar-grid");if(!e||!n||!i||!r||!o||!s)return;if(e.innerHTML="",t.inputItem>0&&t.inputCount>0){const f=Ot(t.inputItem,44);if(f&&e.appendChild(f),t.inputCount>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=t.inputCount,e.appendChild(p)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="MINÉRIO",e.appendChild(f)}const a={get:()=>({type:t.inputItem,count:t.inputCount}),set:(f,p)=>{t.inputItem=f,t.inputCount=f===0?0:p,t.inputCount<=0&&(t.inputItem=0)},allowEquip:f=>!!Rs[f]};if(e.onmousedown=f=>li(a,f,Yn),e.oncontextmenu=f=>f.preventDefault(),n.innerHTML="",t.fuelItem>0&&t.fuelCount>0){const f=Ot(t.fuelItem,44);if(f&&n.appendChild(f),t.fuelCount>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=t.fuelCount,n.appendChild(p)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="CARVÃO",n.appendChild(f)}const c={get:()=>({type:t.fuelItem,count:t.fuelCount}),set:(f,p)=>{t.fuelItem=f,t.fuelCount=f===0?0:p,t.fuelCount<=0&&(t.fuelItem=0)},allowEquip:f=>!!Za[f]};n.onmousedown=f=>li(c,f,Yn),n.oncontextmenu=f=>f.preventDefault();const u=t.maxBurnTime>0?Math.min(100,Math.round(t.burnTimeRemaining/t.maxBurnTime*100)):0;r.style.height=`${u}%`;const d=t.inputItem>0?Rs[t.inputItem]:null,h=d?Math.min(100,Math.round(t.cookProgress/d.time*100)):0;if(o.style.width=`${h}%`,i.innerHTML="",t.outputItem>0&&t.outputCount>0){const f=Ot(t.outputItem,56);if(f&&i.appendChild(f),t.outputCount>1){const p=document.createElement("span");p.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow-[0_0_10px_rgba(120,220,119,0.8)] font-bold",p.textContent=t.outputCount,i.appendChild(p)}}else{const f=document.createElement("span");f.className="font-label-caps text-[11px] text-primary/70 uppercase",f.textContent="PRODUTO",i.appendChild(f)}i.onmousedown=f=>{if(f.preventDefault(),t.outputItem>0&&t.outputCount>0){if(f.shiftKey)Vn(t.outputItem,t.outputCount)&&(Tn(),t.outputItem=0,t.outputCount=0,Yn());else if(pe.type===0)jn(t.outputItem,t.outputCount),Tn(),t.outputItem=0,t.outputCount=0,Yn();else if(pe.type===t.outputItem){const p=ts(t.outputItem),_=Math.min(t.outputCount,p-pe.count);_>0&&(pe.count+=_,t.outputCount-=_,t.outputCount<=0&&(t.outputItem=0),Oi(),Tn(),Yn())}}},i.oncontextmenu=f=>f.preventDefault(),s.innerHTML="";for(let f=0;f<9;f++){const p=document.createElement("div"),_=De[f]||{type:0,count:0};if(p.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",_.type>0&&_.count>0){const g=Ot(_.type,30);if(g&&p.appendChild(g),p.title=`${no[_.type]||"Item"}`,_.count>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=_.count,p.appendChild(m)}}const v={get:()=>De[f]||{type:0,count:0},set:(g,m)=>{De[f]={type:g,count:g===0?0:m},ci()},onShiftClick:(g,m)=>{Rs[g]?(t.inputItem===0||t.inputItem===g)&&(t.inputItem=g,t.inputCount=(t.inputCount||0)+m,De[f]={type:0,count:0},ci(),Yn()):Za[g]&&(t.fuelItem===0||t.fuelItem===g)&&(t.fuelItem=g,t.fuelCount=(t.fuelCount||0)+m,De[f]={type:0,count:0},ci(),Yn())}};p.addEventListener("mousedown",g=>li(v,g,Yn)),p.addEventListener("contextmenu",g=>g.preventDefault()),s.appendChild(p)}}const rr=new Map;let ja=null,wi=null;function AE(t,e,n){const i=`${t},${e},${n}`;return rr.has(i)||rr.set(i,new Array(27).fill(null).map(()=>({type:0,count:0}))),rr.get(i)}function bE(t,e,n){const i=`${t},${e},${n}`;return rr.has(i)?rr.get(i).filter(o=>o&&o.type>0&&o.count>0):[]}function wE(t,e,n){const i=`${t},${e},${n}`;rr.has(i)&&rr.delete(i)}function RE(t,e,n){ja=`${t},${e},${n}`,AE(t,e,n),wi||IE(),wi.style.display="flex",es(St.CHEST),bt(!0),fu()}function CE(){wi&&(wi.style.display="none",ja=null,Ii(St.CHEST),bt(!1),pe.type>0&&pe.count>0&&(Vn(pe.type,pe.count),hl()))}function IE(){wi=document.createElement("div"),wi.id="chest-modal",wi.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",wi.innerHTML=`
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
  `,document.body.appendChild(wi),document.getElementById("close-chest-btn").addEventListener("click",CE)}function fu(){if(!ja)return;const t=rr.get(ja);if(!t)return;const e=document.getElementById("chest-grid"),n=document.getElementById("chest-hotbar-grid");if(!(!e||!n)){e.innerHTML="",t.forEach((i,r)=>{const o=document.createElement("div"),s=i||{type:0,count:0};if(o.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${s.type>0?"border-tertiary/70 shadow-[0_0_8px_rgba(255,180,169,0.2)]":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,s.type>0&&s.count>0){const c=Ot(s.type,32);if(c&&o.appendChild(c),o.title=`${no[s.type]||"Item"}`,s.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=s.count,o.appendChild(u)}}const a={get:()=>t[r]||{type:0,count:0},set:(c,u)=>{t[r]={type:c,count:c===0?0:u}},onShiftClick:(c,u)=>{Vn(c,u)&&(t[r]={type:0,count:0},bt(!1))}};o.addEventListener("mousedown",c=>li(a,c,fu)),o.addEventListener("contextmenu",c=>c.preventDefault()),e.appendChild(o)}),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div"),o=De[i]||{type:0,count:0};if(r.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${o.type>0?"border-primary/60":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,o.type>0&&o.count>0){const a=Ot(o.type,32);if(a&&r.appendChild(a),r.title=`${no[o.type]||"Item"}`,o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const s={get:()=>De[i]||{type:0,count:0},set:(a,c)=>{De[i]={type:a,count:a===0?0:c},ci()},onShiftClick:(a,c)=>{const u=ts(a);let d=c;for(let h=0;h<27;h++)if(t[h].type===a&&t[h].count<u){const f=u-t[h].count,p=Math.min(f,d);if(t[h].count+=p,d-=p,d<=0)break}if(d>0){for(let h=0;h<27;h++)if(t[h].type===0||t[h].count===0){t[h]={type:a,count:d},d=0;break}}De[i]=d>0?{type:a,count:d}:{type:0,count:0},ci(),bt(!1)}};r.addEventListener("mousedown",a=>li(s,a,fu)),r.addEventListener("contextmenu",a=>a.preventDefault()),n.appendChild(r)}}}let ai=null,Pr=null,en=null,He=null,Et=l.WOODEN_SWORD,Gs=!1,Ur=!1,Dn=0,xs={x:NaN,y:NaN,z:NaN},ic=0;const Lu=new Map,OE=new W(1.002,1.002,1.002),DE=new Rx(OE),NE=new dh({color:0,linewidth:2,transparent:!0,opacity:.6}),LE=new W(1.006,1.006,1.006),kh=new _n({color:1973067,wireframe:!0,transparent:!0,opacity:0});function PE(t){ai=t,Pr=new Ax(DE,NE),Pr.visible=!1,ai.add(Pr),en=new B(LE,kh),en.visible=!1,ai.add(en),window.addEventListener("mousedown",BE),window.addEventListener("mouseup",GE),window.addEventListener("blur",()=>{Gs=!1,Ur=!1,Dn=0,en&&(en.visible=!1)})}function UE(t=.016){if(FE(t),!Xs()||As()){Pr.visible=!1,en.visible=!1,He=null,Ur=!1,Gs=!1,Dn=0;return}const e=zs();if(!e)return;const n=new I(0,0,-1);n.applyQuaternion(e.quaternion);const i=AM(e.position,n);if(i)if(He=i,Pr.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),Pr.visible=!0,(i.hit.x!==xs.x||i.hit.y!==xs.y||i.hit.z!==xs.z)&&(xs={x:i.hit.x,y:i.hit.y,z:i.hit.z},Dn=0),Gs&&Ur){const r=$t(i.hit.x,i.hit.y,i.hit.z);if(r!==l.AIR&&r!==l.WATER){const o=pM(r),s=mM(r,Et);if(Dn+=t*s/o,ic+=t,ic>=.22&&(ic=0,Gx(r),uu(i.hit.x,i.hit.y,i.hit.z,r)),en.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),en.visible=!0,kh.opacity=La.clamp(Dn*.85,.15,.9),Dn>=1){if(Lx(),uu(i.hit.x,i.hit.y,i.hit.z,r),r===l.CHEST&&(bE(i.hit.x,i.hit.y,i.hit.z).forEach(c=>{kt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,c)}),wE(i.hit.x,i.hit.y,i.hit.z)),r===l.GRASS&&Math.random()<.35&&kt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT_SEEDS),r===l.WHEAT_STAGE_3)kt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT),kt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT_SEEDS),Lu.delete(`${i.hit.x},${i.hit.y},${i.hit.z}`);else{const a=Ch(r);a>0&&kt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,a)}oi(ai,i.hit.x,i.hit.y,i.hit.z,l.AIR),Dn=0,Ur=!1,en.visible=!1}}else Dn=0,en.visible=!1}else Dn=0,en.visible=!1;else He=null,Pr.visible=!1,en.visible=!1,Dn=0,Ur=!1}function FE(t){for(const[e,n]of Lu.entries())n.timer+=t,n.timer>=16&&(n.timer=0,n.stage===1?(n.stage=2,oi(ai,n.x,n.y,n.z,l.WHEAT_STAGE_2)):n.stage===2&&(n.stage=3,oi(ai,n.x,n.y,n.z,l.WHEAT_STAGE_3)))}function BE(t){if(!Xs()||As())return;const e=zs();if(!e)return;const n=new I(0,0,-1);if(n.applyQuaternion(e.quaternion),t.button===0){Gs=!0;const i=hE(e.position,n,3.8);if(i){const r=Et===l.DIAMOND_SWORD,o=Et===l.IRON_SWORD,s=Et===l.STONE_SWORD,a=Et===l.WOODEN_SWORD,c=Et===l.DIAMOND_PICKAXE||Et===l.IRON_PICKAXE||Et===l.STONE_PICKAXE||Et===l.WOODEN_PICKAXE;let u=r?9:o?7:s?5:a?4:c?3:2;const d=tp();d&&!d.onGround&&!d.isFlying?(u=Math.floor(u*1.5),Kx(),FM(i.x,i.y+.8,i.z)):vh(),Nu(i,u,n);return}if(He){if($t(He.hit.x,He.hit.y,He.hit.z)===l.TNT){JM(He.hit.x,He.hit.y,He.hit.z);return}Ur=!0,xs={x:He.hit.x,y:He.hit.y,z:He.hit.z}}}else if(t.button===2){if(t.preventDefault(),Et===l.FLINT_AND_STEEL&&(qx(),He)){const i=$t(He.hit.x,He.hit.y,He.hit.z),{prev:r}=He;if(i===l.OBSIDIAN||i===l.NETHERRACK){oi(ai,r.x,r.y,r.z,l.NETHER_PORTAL),BM(r.x+.5,r.y+.5,r.z+.5);return}}if(Et===l.BOW&&zh(l.ARROW)){Ta(l.ARROW),tE(e.position,n);return}if(cM(Et)){const i=dM(Et);if(i>0){Rd(i),Tn(),Ta(Et);return}}if(He){const i=$t(He.hit.x,He.hit.y,He.hit.z);if(i===l.BED)if(IM()){zx(),DM(),Rd(4);return}else{Tn();return}if(Rh(Et)&&(i===l.GRASS||i===l.DIRT)){Wx(),oi(ai,He.hit.x,He.hit.y,He.hit.z,l.FARMLAND);return}if(Et===l.WHEAT_SEEDS&&i===l.FARMLAND){const r=He.hit.y+1;if(r<64&&$t(He.hit.x,r,He.hit.z)===l.AIR){nd(),oi(ai,He.hit.x,r,He.hit.z,l.WHEAT_STAGE_1),Lu.set(`${He.hit.x},${r},${He.hit.z}`,{x:He.hit.x,y:r,z:He.hit.z,stage:1,timer:0}),Ta(l.WHEAT_SEEDS);return}}if(i===l.CRAFTING_TABLE){mE();return}if(i===l.FURNACE||i===l.FURNACE_LIT){SE(He.hit.x,He.hit.y,He.hit.z);return}if(i===l.CHEST){RE(He.hit.x,He.hit.y,He.hit.z);return}if(aM(Et)){const{prev:r}=He;r.y>=0&&r.y<64&&$t(r.x,r.y,r.z)===l.AIR&&(nd(),oi(ai,r.x,r.y,r.z,Et),Ta(Et,1))}}}}function GE(t){t.button===0&&(Gs=!1,Ur=!1,Dn=0,en&&(en.visible=!1))}function HE(t){Et=t}function Pu(){return Et}const xd=[{type:l.WOODEN_SWORD,count:1},{type:l.WOODEN_PICKAXE,count:1},{type:l.GRASS,count:64},{type:l.DIRT,count:64},{type:l.WOOD_LOG,count:32},{type:l.COBBLESTONE,count:64},{type:l.TORCH,count:32},{type:l.WATER,count:1},{type:0,count:0}],De=new Array(36).fill(null).map(()=>({type:0,count:0}));for(let t=0;t<xd.length;t++)De[t]={...xd[t]};const Ut=[0,0,0,0];let Uu=0,Kn=null,ni=null,Is=null,Co=null,Os=null,Nt=null,Fr=null,Br=null,Gr=null,Hr=null,kr=null,Vr=null,Wr=null,du=-.3,Ba=!1,rc=0;function Vh(){ni||(ni=document.createElement("div"),ni.id="inventory-modal",ni.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ni.innerHTML=`
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
            <!-- Player Preview (3D Viewport) -->
            <div class="w-36 h-52 bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col items-center justify-center relative overflow-hidden shadow-inner p-1">
              <canvas id="inv-char-preview-canvas" width="140" height="200" class="w-full h-full cursor-grab active:cursor-grabbing" title="Arraste com o mouse para girar"></canvas>
              <div class="absolute bottom-1 right-2 flex items-center gap-1 font-label-caps text-[10px] font-bold text-primary bg-surface-container/90 border border-outline-variant px-2 py-0.5 rounded shadow">
                <span class="material-symbols-outlined text-xs" style="font-variation-settings: 'FILL' 1;">shield</span>
                <span id="inv-defense-badge">DEF: 0</span>
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
  `,document.body.appendChild(ni),document.getElementById("close-inventory-btn").addEventListener("click",Wh),document.getElementById("open-recipe-book-inv").addEventListener("click",Hh),window.addEventListener("keydown",t=>{t.code==="KeyE"&&WE()}),kE(),ii())}function kE(){const t=document.getElementById("inv-char-preview-canvas");if(!t)return;Is=new uh({canvas:t,alpha:!0,antialias:!0}),Is.setSize(140,200),Is.setPixelRatio(Math.min(window.devicePixelRatio,2)),Co=new fh,Os=new tn(40,140/200,.1,20),Os.position.set(0,1,3.2),Os.lookAt(0,.9,0);const e=new gh(16777215,1.4);Co.add(e);const n=new mh(16777215,1.8);n.position.set(2,4,3),Co.add(n),Nt=new it,Co.add(Nt);const i=new Le({color:13011801}),r=new Le({color:4528643}),o=new Le({color:43176}),s=new Le({color:1981066}),a=new xt({color:14870768,roughness:.35,metalness:.85}),c=new B(new W(.38,.38,.38),i);c.position.set(0,1.38,0),Nt.add(c);const u=new B(new W(.4,.15,.4),r);u.position.set(0,1.48,-.01),Nt.add(u),Fr=new B(new W(.44,.44,.44),a),Fr.position.set(0,1.38,0),Fr.visible=!1,Nt.add(Fr);const d=new B(new W(.42,.5,.2),o);d.position.set(0,.94,0),Nt.add(d),Br=new B(new W(.48,.54,.26),a),Br.position.set(0,.94,0),Br.visible=!1,Nt.add(Br);const h=new B(new W(.16,.48,.16),i);h.position.set(-.29,.93,0),Nt.add(h);const f=new B(new W(.16,.48,.16),i);f.position.set(.29,.93,0),Nt.add(f);const p=new B(new W(.18,.58,.18),s);p.position.set(-.1,.4,0),Nt.add(p);const _=new B(new W(.18,.58,.18),s);_.position.set(.1,.4,0),Nt.add(_),Gr=new B(new W(.2,.38,.2),a),Gr.position.set(-.1,.48,0),Gr.visible=!1,Nt.add(Gr),Hr=new B(new W(.2,.38,.2),a),Hr.position.set(.1,.48,0),Hr.visible=!1,Nt.add(Hr),kr=new B(new W(.21,.18,.23),a),kr.position.set(-.1,.2,.015),kr.visible=!1,Nt.add(kr),Vr=new B(new W(.21,.18,.23),a),Vr.position.set(.1,.2,.015),Vr.visible=!1,Nt.add(Vr),t.addEventListener("mousedown",v=>{Ba=!0,rc=v.clientX}),window.addEventListener("mousemove",v=>{if(!Ba)return;const g=v.clientX-rc;rc=v.clientX,du+=g*.02}),window.addEventListener("mouseup",()=>{Ba=!1})}function VE(){if(Wr)return;function t(){if(!pl()){Wr=null;return}Ba||(du+=.012),Nt&&(Nt.rotation.y=du),Is&&Co&&Os&&Is.render(Co,Os),Wr=requestAnimationFrame(t)}Wr=requestAnimationFrame(t)}function Sd(){const t=new xt({color:14870768,roughness:.35,metalness:.85}),e=new xt({color:2282478,roughness:.2,metalness:.65,emissive:537412,emissiveIntensity:.35});if(Fr){const i=Ut[0]||0;Fr.visible=i>0,i>0&&(Fr.material=i===l.DIAMOND_HELMET?e:t)}if(Br){const i=Ut[1]||0;Br.visible=i>0,i>0&&(Br.material=i===l.DIAMOND_CHESTPLATE?e:t)}if(Gr&&Hr){const i=Ut[2]||0;if(Gr.visible=i>0,Hr.visible=i>0,i>0){const r=i===l.DIAMOND_LEGGINGS?e:t;Gr.material=r,Hr.material=r}}if(kr&&Vr){const i=Ut[3]||0;if(kr.visible=i>0,Vr.visible=i>0,i>0){const r=i===l.DIAMOND_BOOTS?e:t;kr.material=r,Vr.material=r}}const n=document.getElementById("inv-defense-badge");n&&(n.textContent=`DEF: ${Fu()}`)}function WE(){pl()?Wh():zE()}function zE(){ni||Vh(),ni.style.display="flex",es(St.INVENTORY),bt(!0),Io(),ii(),VE()}function Wh(){if(ni){ni.style.display="none",Ii(St.INVENTORY),bt(!1),Wr&&(cancelAnimationFrame(Wr),Wr=null),pe.type>0&&pe.count>0&&(Vn(pe.type,pe.count),hl());for(let t=0;t<4;t++){const e=Xt[t];e&&e.type>0&&e.count>0&&(Vn(e.type,e.count),Xt[t]={type:0,count:0})}Io(),ci()}}function pl(){return Mh(St.INVENTORY)}function XE(){return De.slice(0,9).map(t=>t.type)}function qE(){return De.slice(0,9)}function KE(t){Uu=t,ci()}function Fu(){let t=0;for(let e=0;e<4;e++)Ut[e]>0&&(t+=fM(Ut[e]));return t}function Vn(t,e=1){if(!t||t===0||e<=0)return!1;let n=e;const i=ts(t);if(i>1){for(let r=0;r<36;r++)if(De[r].type===t&&De[r].count<i){const o=i-De[r].count,s=Math.min(o,n);if(De[r].count+=s,n-=s,n<=0)break}}if(n>0){for(let r=0;r<36;r++)if(De[r].type===0||De[r].count===0){const o=Math.min(i,n);if(De[r]={type:t,count:o},n-=o,n<=0)break}}return ii(),ci(),n===0}function zh(t,e=1){let n=0;for(let i=0;i<36;i++)De[i].type===t&&(n+=De[i].count);return n>=e}function Ta(t,e=1){if(!zh(t,e))return!1;let n=e;for(let i=0;i<36;i++)if(De[i].type===t){const r=Math.min(De[i].count,n);if(De[i].count-=r,n-=r,De[i].count<=0&&(De[i]={type:0,count:0}),n<=0)break}return ii(),ci(),!0}function ci(){var e;const t=((e=De[Uu])==null?void 0:e.type)||0;HE(t);for(let n=0;n<9;n++){const i=document.getElementById(`hotbar-slot-${n}`);if(i&&(i.innerHTML="",De[n].type>0)){const r=Ot(De[n].type,38);if(r&&i.appendChild(r),De[n].count>1){const o=document.createElement("span");o.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",o.textContent=De[n].count,i.appendChild(o)}}}}function ii(){const t=document.getElementById("inv-armor-grid"),e=document.getElementById("inv-craft-2x2-grid"),n=document.getElementById("inv-craft-2x2-output"),i=document.getElementById("inv-storage-grid"),r=document.getElementById("inv-hotbar-grid");if(!t||!e||!n||!i||!r)return;Sd(),t.innerHTML="";const o=["security","checkroom","accessibility","directions_run"],s=["Capacete","Peitoral","Calças","Botas"],a=[[l.IRON_HELMET,l.DIAMOND_HELMET],[l.IRON_CHESTPLATE,l.DIAMOND_CHESTPLATE],[l.IRON_LEGGINGS,l.DIAMOND_LEGGINGS],[l.IRON_BOOTS,l.DIAMOND_BOOTS]];for(let c=0;c<4;c++){const u=document.createElement("div");if(u.className="slot w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",u.title=`Slot de ${s[c]}`,Ut[c]>0){const h=Ot(Ut[c],30);h&&u.appendChild(h)}else{const h=document.createElement("span");h.className="material-symbols-outlined text-on-surface-variant text-base opacity-60",h.textContent=o[c],u.appendChild(h)}const d={get:()=>({type:Ut[c],count:Ut[c]>0?1:0}),set:(h,f)=>{Ut[c]=h,Sd()},allowEquip:h=>a[c].includes(h),maxStack:1};u.addEventListener("mousedown",h=>li(d,h,ii)),u.addEventListener("contextmenu",h=>h.preventDefault()),t.appendChild(u)}e.innerHTML="";for(let c=0;c<4;c++){const u=document.createElement("div");u.className="slot w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const d=Xt[c]||{type:0,count:0};if(d.type>0&&d.count>0){const f=Ot(d.type,32);if(f&&u.appendChild(f),d.count>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=d.count,u.appendChild(p)}}const h={get:()=>Xt[c]||{type:0,count:0},set:(f,p)=>{Xt[c]={type:f,count:f===0?0:p},Io()}};u.addEventListener("mousedown",f=>li(h,f,ii)),u.addEventListener("contextmenu",f=>f.preventDefault()),e.appendChild(u)}if(n.innerHTML="",Kn&&Kn.result>0){const c=Ot(Kn.result,40);if(c&&n.appendChild(c),Kn.count>1){const u=document.createElement("span");u.className="slot-count font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded shadow absolute bottom-1 right-1",u.textContent=Kn.count,n.appendChild(u)}}n.onmousedown=c=>{if(c.preventDefault(),Kn&&Kn.result>0){const u=Kn.result,d=Kn.count;if(c.shiftKey){if(Vn(u,d)){Tn();for(let h=0;h<4;h++)Xt[h].count>1?Xt[h].count-=1:Xt[h]={type:0,count:0};Io(),ii()}}else{const h=ts(u);if(pe.type===0){jn(u,d),Tn();for(let f=0;f<4;f++)Xt[f].count>1?Xt[f].count-=1:Xt[f]={type:0,count:0};Io(),ii()}else if(pe.type===u&&pe.count+d<=h){pe.count+=d,Oi(),Tn();for(let f=0;f<4;f++)Xt[f].count>1?Xt[f].count-=1:Xt[f]={type:0,count:0};Io(),ii()}}}},n.oncontextmenu=c=>c.preventDefault(),i.innerHTML="";for(let c=9;c<36;c++)Md(c,i);r.innerHTML="";for(let c=0;c<9;c++)Md(c,r,!0,c===Uu)}function Md(t,e,n=!1,i=!1){const r=document.createElement("div");r.className=`slot w-full h-11 md:h-12 rounded-lg bg-surface-container-lowest border ${i?"border-primary shadow-[0_0_10px_rgba(120,220,119,0.5)] active":"border-outline-variant hover:border-primary/80"} flex items-center justify-center cursor-pointer relative transition-all`;const o=De[t]||{type:0,count:0};if(o.type>0&&o.count>0){const a=Ot(o.type,34);if(a&&r.appendChild(a),r.title=no[o.type]||"Item",o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const s={get:()=>De[t]||{type:0,count:0},set:(a,c)=>{De[t]={type:a,count:a===0?0:c},ci()},onShiftClick:(a,c)=>{if(t>=9){for(let u=0;u<9;u++)if(De[u].type===0||De[u].count===0){De[u]={type:a,count:c},De[t]={type:0,count:0},bt(!1);return}}else for(let u=9;u<36;u++)if(De[u].type===0||De[u].count===0){De[u]={type:a,count:c},De[t]={type:0,count:0},bt(!1);return}}};r.addEventListener("mousedown",a=>li(s,a,ii)),r.addEventListener("contextmenu",a=>a.preventDefault()),e.appendChild(r)}function Io(){const t=Xt.map(e=>(e==null?void 0:e.type)||0);Kn=Fh(t,2,2)}const oc=new Map;function YE(t=l.IRON_SWORD){const e=new it;let n,i,r,o,s,a,c;t===l.DIAMOND_SWORD?(n=561586,i=2282478,r=15793652,o=988970,s=440020,a=7877903,c=988970):t===l.IRON_SWORD?(n=6583435,i=14870768,r=16777215,o=3359061,s=9741240,a=8736014,c=3359061):t===l.STONE_SWORD?(n=3359061,i=6583435,r=9741240,o=1976635,s=4674921,a=7877903,c=1976635):(n=7877903,i=11817737,r=16498468,o=4528643,s=14251782,a=4528643,c=4528643);const u=new xt({color:n,roughness:.3,metalness:.7}),d=new xt({color:i,roughness:.25,metalness:.8}),h=new xt({color:r,roughness:.2,metalness:.9,emissive:t===l.DIAMOND_SWORD?537412:0,emissiveIntensity:.3}),f=new xt({color:o,roughness:.4,metalness:.85}),p=new xt({color:s,roughness:.2,metalness:.6}),_=new Le({color:a}),v=new xt({color:c,roughness:.4,metalness:.85}),g=new B(new W(.048,.52,.032),h);g.position.set(0,.32,0),e.add(g);const m=new B(new W(.024,.48,.024),d);m.position.set(-.034,.3,0),e.add(m);const A=new B(new W(.024,.48,.024),d);A.position.set(.034,.3,0),e.add(A);const E=new B(new W(.012,.44,.016),u);E.position.set(-.048,.28,0),e.add(E);const M=new B(new W(.012,.44,.016),u);M.position.set(.048,.28,0),e.add(M);const N=new B(new W(.032,.055,.028),d);N.position.set(0,.6,0),e.add(N);const R=new B(new W(.018,.035,.034),h);R.position.set(0,.6,0),e.add(R);const w=new B(new W(.22,.044,.052),f);w.position.set(0,.05,0),e.add(w);const O=new B(new W(.038,.075,.056),f);O.position.set(-.115,.07,0),e.add(O);const T=new B(new W(.038,.075,.056),f);T.position.set(.115,.07,0),e.add(T);const S=new B(new W(.042,.042,.062),p);S.position.set(0,.05,0),e.add(S);const C=new B(new W(.036,.16,.036),_);C.position.set(0,-.055,0),e.add(C);const H=new B(new W(.042,.024,.042),v);H.position.set(0,-.02,0),e.add(H);const F=new B(new W(.042,.024,.042),v);F.position.set(0,-.08,0),e.add(F);const Y=new B(new W(.07,.048,.07),v);Y.position.set(0,-.155,0),e.add(Y);const K=new B(new W(.036,.022,.036),p);return K.position.set(0,-.18,0),e.add(K),e}function $E(t=l.IRON_PICKAXE){const e=new it;let n,i;t===l.DIAMOND_PICKAXE?(n=2282478,i=14742270):t===l.IRON_PICKAXE?(n=14870768,i=16777215):t===l.STONE_PICKAXE?(n=6583435,i=9741240):(n=11817737,i=16498468);const r=new xt({color:n,roughness:.35,metalness:.75}),o=new xt({color:i,roughness:.25,metalness:.85}),s=new Le({color:7877903}),a=new xt({color:3359061,roughness:.5,metalness:.8}),c=new B(new W(.038,.58,.038),s);c.position.set(0,.12,0),e.add(c);const u=new B(new W(.046,.06,.046),a);u.position.set(0,.34,0),e.add(u);const d=new B(new W(.12,.07,.055),r);d.position.set(0,.37,0),e.add(d);const h=new B(new W(.14,.05,.045),r);h.position.set(-.11,.34,0),h.rotation.z=.22,e.add(h);const f=new B(new W(.07,.032,.038),o);f.position.set(-.2,.3,0),f.rotation.z=.44,e.add(f);const p=new B(new W(.14,.05,.045),r);p.position.set(.11,.34,0),p.rotation.z=-.22,e.add(p);const _=new B(new W(.07,.032,.038),o);return _.position.set(.2,.3,0),_.rotation.z=-.44,e.add(_),e}function ZE(t=l.IRON_HOE){const e=new it;let n;t===l.IRON_HOE?n=14870768:t===l.STONE_HOE?n=6583435:n=11817737;const i=new xt({color:n,roughness:.35,metalness:.75}),r=new Le({color:7877903}),o=new B(new W(.038,.54,.038),r);o.position.set(0,.1,0),e.add(o);const s=new B(new W(.2,.065,.05),i);s.position.set(.08,.34,0),e.add(s);const a=new B(new W(.05,.12,.045),i);return a.position.set(.16,.29,0),e.add(a),e}function jE(){const t=new it,e=new Le({color:7877903}),n=new _n({color:16317180}),i=new B(new W(.035,.28,.035),e);i.position.set(.06,.14,0),i.rotation.z=-.35,t.add(i);const r=new B(new W(.035,.28,.035),e);r.position.set(.06,-.14,0),r.rotation.z=.35,t.add(r);const o=new B(new W(.048,.12,.048),e);o.position.set(.11,0,0),t.add(o);const s=new B(new W(.012,.54,.012),n);return s.position.set(0,0,0),t.add(s),t}function QE(){const t=new it,e=new xt({color:14870768,roughness:.3,metalness:.85}),n=new xt({color:1976635,roughness:.7,metalness:.2}),i=new B(new W(.14,.18,.04),e);i.position.set(-.04,.05,0),t.add(i);const r=new B(new W(.1,.12,.045),n);return r.position.set(.05,.02,0),t.add(r),t}function Xh(t,e=.22){if(t===l.DIAMOND_SWORD||t===l.IRON_SWORD||t===l.STONE_SWORD||t===l.WOODEN_SWORD)return YE(t);if(t===l.DIAMOND_PICKAXE||t===l.IRON_PICKAXE||t===l.STONE_PICKAXE||t===l.WOODEN_PICKAXE)return $E(t);if(t===l.IRON_HOE||t===l.STONE_HOE||t===l.WOODEN_HOE)return ZE(t);if(t===l.BOW)return jE();if(t===l.FLINT_AND_STEEL)return QE();if(t===l.TORCH){const u=new it,d=new Le({color:7877903}),h=new xt({color:16347926,emissive:16436245,emissiveIntensity:.9}),f=new B(new W(.04,.32,.04),d);f.position.set(0,.1,0),u.add(f);const p=new B(new W(.055,.09,.055),h);return p.position.set(0,.27,0),u.add(p),u}if(t===l.BREAD){const u=new Le({color:11817737});return new B(new W(e*.9,e*.45,e*.6),u)}if(t===l.WHEAT){const u=new Le({color:15381256});return new B(new W(e*.35,e*.9,e*.35),u)}if(t===l.PORKCHOP||t===l.MUTTON){const u=new Le({color:16020150});return new B(new W(e,e*.4,e*.8),u)}if(t===l.COOKED_PORKCHOP||t===l.COOKED_MUTTON){const u=new Le({color:10105874});return new B(new W(e,e*.4,e*.8),u)}if(t===l.ROTTEN_FLESH){const u=new Le({color:8702998});return new B(new W(e,e*.4,e*.8),u)}if(t===l.DIAMOND){const u=new xt({color:2282478,emissive:537412,emissiveIntensity:.4,roughness:.15,metalness:.7});return new B(new za(e*.5),u)}if(t===l.IRON_INGOT){const u=new xt({color:14870768,roughness:.3,metalness:.85});return new B(new W(e*.8,e*.3,e*.5),u)}if(t===l.FLINT){const u=new xt({color:1976635,roughness:.6,metalness:.3});return new B(new W(e*.6,e*.6,e*.3),u)}if(t===l.QUARTZ){const u=new xt({color:16317180,roughness:.2,metalness:.4});return new B(new za(e*.45),u)}const n=`${t}:${e}`;if(oc.has(n))return oc.get(n);const i=Fs[t];if(!i)return null;const r=new W(e,e,e),o=r.attributes.uv.array,s=[i.side,i.side,i.top,i.bottom,i.side,i.side];for(let u=0;u<6;u++){const d=s[u],h=bs(d),f=u*8;o[f+0]=h.uMin,o[f+1]=h.vMax,o[f+2]=h.uMax,o[f+3]=h.vMax,o[f+4]=h.uMin,o[f+5]=h.vMin,o[f+6]=h.uMax,o[f+7]=h.vMin}r.attributes.uv.needsUpdate=!0;const a=new Le({map:ul(),transparent:!0,alphaTest:.2}),c=new B(r,a);return oc.set(n,c),c}let Nn=null,Si=null,En=null,fs=null,Sr=null,hn=null,Mr=null,Er=null,Ln=null,Ei=null,zr=null,Xr=null,qr=null,Kr=null,Yr=null,$r=null,Ds=null,Ed=-1,Ht=null,qh=null,sc=0;function JE(t){Nn&&t.remove(Nn),Nn=new it,Nn.name="player-3d-character",Si=new it,Nn.add(Si);const e=new Le({color:13011801}),n=new Le({color:4528643}),i=new Le({color:43176}),r=new Le({color:1981066}),o=new _n({color:16777215}),s=new _n({color:2450411}),a=new Le({color:8736014});Ht=new xt({color:14870768,roughness:.35,metalness:.85}),qh=new xt({color:2282478,roughness:.2,metalness:.65,emissive:537412,emissiveIntensity:.35}),En=new it,En.position.set(0,1.42,0);const c=new B(new W(.4,.4,.4),e);c.position.set(0,.2,0),En.add(c);const u=new B(new W(.42,.16,.42),n);u.position.set(0,.33,-.01),En.add(u);const d=new B(new W(.08,.05,.02),o);d.position.set(-.09,.21,.205),En.add(d);const h=new B(new W(.04,.05,.022),s);h.position.set(-.11,.21,.206),En.add(h);const f=new B(new W(.08,.05,.02),o);f.position.set(.09,.21,.205),En.add(f);const p=new B(new W(.04,.05,.022),s);p.position.set(.07,.21,.206),En.add(p);const _=new B(new W(.12,.03,.02),a);_.position.set(0,.11,.205),En.add(_),Ln=new it;const v=new B(new W(.46,.22,.46),Ht);v.position.set(0,.31,0),Ln.add(v);const g=new B(new W(.04,.24,.44),Ht);g.position.set(-.21,.18,0),Ln.add(g);const m=new B(new W(.04,.24,.44),Ht);m.position.set(.21,.18,0),Ln.add(m);const A=new B(new W(.44,.24,.04),Ht);A.position.set(0,.18,-.21),Ln.add(A);const E=new B(new W(.08,.1,.04),Ht);E.position.set(0,.22,.21),Ln.add(E),Ln.visible=!1,En.add(Ln),Si.add(En),fs=new it,fs.position.set(0,.9,0);const M=new B(new W(.44,.52,.22),i);M.position.set(0,.26,0),fs.add(M),Ei=new it;const N=new B(new W(.48,.54,.26),Ht);N.position.set(0,.26,0),Ei.add(N);const R=new B(new W(.18,.14,.26),Ht);R.position.set(-.3,.46,0),Ei.add(R);const w=new B(new W(.18,.14,.26),Ht);w.position.set(.3,.46,0),Ei.add(w),Ei.visible=!1,fs.add(Ei),Si.add(fs),Sr=new it,Sr.position.set(-.31,1.38,0);const O=new B(new W(.18,.5,.18),e);O.position.set(0,-.25,0),Sr.add(O);const T=new B(new W(.186,.18,.186),i);T.position.set(0,-.1,0),Sr.add(T),zr=new B(new W(.2,.26,.2),Ht),zr.position.set(0,-.14,0),zr.visible=!1,Sr.add(zr),Si.add(Sr),hn=new it,hn.position.set(.31,1.38,0);const S=new B(new W(.18,.5,.18),e);S.position.set(0,-.25,0),hn.add(S);const C=new B(new W(.186,.18,.186),i);C.position.set(0,-.1,0),hn.add(C),Xr=new B(new W(.2,.26,.2),Ht),Xr.position.set(0,-.14,0),Xr.visible=!1,hn.add(Xr),Ds=new it,Ds.position.set(0,-.42,.12),hn.add(Ds),Si.add(hn),Mr=new it,Mr.position.set(-.11,.9,0);const H=new B(new W(.2,.6,.2),r);H.position.set(0,-.3,0),Mr.add(H),qr=new B(new W(.22,.36,.22),Ht),qr.position.set(0,-.18,0),qr.visible=!1,Mr.add(qr),Yr=new B(new W(.23,.2,.25),Ht),Yr.position.set(0,-.48,.015),Yr.visible=!1,Mr.add(Yr),Si.add(Mr),Er=new it,Er.position.set(.11,.9,0);const F=new B(new W(.2,.6,.2),r);return F.position.set(0,-.3,0),Er.add(F),Kr=new B(new W(.22,.36,.22),Ht),Kr.position.set(0,-.18,0),Kr.visible=!1,Er.add(Kr),$r=new B(new W(.23,.2,.25),Ht),$r.position.set(0,-.48,.015),$r.visible=!1,Er.add($r),Si.add(Er),Nn.visible=!1,t.add(Nn),Nn}function ey(t,e,n,i,r,o,s,a,c,u){if(!Nn||(Nn.visible=u,!u))return;Nn.position.copy(e),Si.rotation.y=n+Math.PI,En.rotation.x=-i,r?sc+=t*(s?4:10):sc=0;const d=Math.sin(sc)*.65;if(Mr.rotation.x=-d,Er.rotation.x=d,Sr.rotation.x=d*.75,a<1){const h=Math.sin(a*Math.PI);hn.rotation.x=-1.4*h,hn.rotation.z=-.3*h,hn.rotation.y=.4*h}else hn.rotation.x=-d*.75,hn.rotation.z=0,hn.rotation.y=0;if(ty(),c!==Ed&&(Ed=c,Ds.clear(),c>0)){const h=Xh(c,.28);h&&(fl(c)?(h.position.set(0,-.3,-.14),h.rotation.set(-.85,0,0)):c===l.TORCH||c===l.FLINT_AND_STEEL?(h.position.set(0,-.3,-.12),h.rotation.set(-.5,0,0)):(h.position.set(0,-.26,-.1),h.rotation.set(.15,.4,0)),Ds.add(h))}}function zi(t,e){const n=e===l.DIAMOND_HELMET||e===l.DIAMOND_CHESTPLATE||e===l.DIAMOND_LEGGINGS||e===l.DIAMOND_BOOTS?qh:Ht;t.isMesh?t.material=n:t.children&&t.children.forEach(i=>{i.isMesh&&(i.material=n)})}function ty(){const t=Ut[0]||0;t>0?(Ln.visible=!0,zi(Ln,t)):Ln.visible=!1;const e=Ut[1]||0;e>0?(Ei.visible=!0,zr.visible=!0,Xr.visible=!0,zi(Ei,e),zi(zr,e),zi(Xr,e)):(Ei.visible=!1,zr.visible=!1,Xr.visible=!1);const n=Ut[2]||0;n>0?(qr.visible=!0,Kr.visible=!0,zi(qr,n),zi(Kr,n)):(qr.visible=!1,Kr.visible=!1);const i=Ut[3]||0;i>0?(Yr.visible=!0,$r.visible=!0,zi(Yr,i),zi($r,i)):(Yr.visible=!1,$r.visible=!1)}const Kh=.36,Yh=-.3,$h=-.44,Zh=-.3,jh=.32,Qh=-.1;let pn=null,ac=null,lc=null,In=null,Ki=-1,Oo=1,ny=5.8,gr=0;function iy(){const t=zs();if(!t)return;pn=new it;const e=new Le({color:13011801,depthTest:!0}),n=new Le({color:43176,depthTest:!0});ac=new B(new W(.1,.1,.36),e),ac.position.set(0,0,.1),pn.add(ac),lc=new B(new W(.108,.108,.14),n),lc.position.set(0,0,.23),pn.add(lc),Jh(),pn.position.set(Kh,Yh,$h),pn.rotation.set(Zh,jh,Qh),pn.renderOrder=999,t.add(pn),document.addEventListener("mousedown",ry)}function ry(t){Xs()&&(t.button===0||t.button===2)&&(Oo=0)}function Jh(){const t=Pu();if(t!==Ki&&(Ki=t,In&&(pn.remove(In),In=null),Ki>0)){const e=Xh(Ki,.22);e&&(In=e,fl(Ki)?(In.position.set(.01,.04,-.09),In.rotation.set(-.62,.2,-.12)):Ki===l.TORCH||Ki===l.FLINT_AND_STEEL?(In.position.set(.01,.04,-.09),In.rotation.set(-.4,.2,-.1)):(In.position.set(.02,.06,-.12),In.rotation.set(.25,.55,-.08)),pn.add(In))}}function oy(t,e){if(!pn)return;const n=Eh()===Zr.FIRST_PERSON;if(pn.visible=n,!n)return;Jh();let i=0,r=0,o=0,s=0,a=0;if(Oo<1){const h=fl(Ki)?6.2:ny;Oo=Math.min(1,Oo+t*h);const f=Math.sin(Oo*Math.PI);i=-f*1.05,r=f*.6,o=-f*.4,s=-f*.09,a=-f*.14}const c=tp();let u=0,d=0;c.onGround&&c.moving?(gr+=t*10,u=Math.cos(gr*.5)*.025,d=Math.abs(Math.sin(gr))*.035):c.isFlying&&c.moving?(gr+=t*6,u=Math.cos(gr*.5)*.015,d=Math.sin(gr)*.015):gr=0,pn.position.set(Kh+u,Yh+d+s,$h+a),pn.rotation.set(Zh+i,jh+r,Qh+o)}function sy(){return Oo}const At=.3,Ss=1.8,Qa=1.62,yd=28,ay=8.6,ly=5.8,cy=14,Td=10,uy=3.6;let ds=0;const io=20,fy=6,dy=2,hy=5,py=.5,Ad=3.2;let or=null;const re=new I;let be=new I,nn=io,$n=!1,Pn=!1,Mi=!1,Ms=!1,Es=0,Ao=!1,Ja=0,el=0,Aa=0,Rr=0,Zn=!1,hs=0,ps=0;const Eo=[];let bd=!1,wd=!1;function my(){or=zs(),nn=io,be.set(0,0,0),Pn=!1;const t=Du();re.set(t.x,t.y,t.z),Rr=re.y,Zn=!1,or&&or.position.set(re.x,re.y+Qa,re.z),wd||(wd=!0,window.addEventListener("keydown",e=>{if(e.code==="F4"||e.code==="F5"){e.preventDefault();const n=oS();Ty(["👁 Perspectiva: 1ª Pessoa","🎥 Perspectiva: 3ª Pessoa (Costas)","📸 Perspectiva: 3ª Pessoa (Frontal)"][n]);try{Tn()}catch{}}}))}function ep(){return nn}function gy(){return io}function _y(){return Ja}function vy(){return Pn}function Li(){return re}function tp(){return{onGround:$n,moving:Ao,inWater:Mi,submerged:Ms,isFlying:Pn}}function Yo(t,e=null){if(nn<=0)return;const n=Fu(),i=Math.min(.8,n*.04),r=Math.max(1,t*(1-i));nn=Math.max(0,nn-r),Ja=1,el=0,Px(),e&&(be.x+=e.x*5,be.z+=e.z*5,be.y=3.5)}function xy(t){nn<=0||(nn=Math.min(io,nn+t))}function Rd(t){xy(t)}function Cd(){nn=io,be.set(0,0,0),$n=!1,Pn=!1,Es=0,el=0;const t=Du();re.set(t.x,t.y,t.z),Rr=re.y,Zn=!1,or&&or.position.set(re.x,re.y+Qa,re.z)}function np(t,e,n){return e<0?!0:Ou($t(t,e,n))}function _r(t,e,n){const i=Math.floor(t-At+.001),r=Math.floor(t+At-.001),o=Math.floor(e),s=Math.floor(e+Ss-.001),a=Math.floor(n-At+.001),c=Math.floor(n+At-.001);for(let u=o;u<=s;u++)for(let d=a;d<=c;d++)for(let h=i;h<=r;h++)if(np(h,u,d))return!0;return!1}function Id(t,e,n){return $t(t,e,n)===l.WATER}function Sy(t){if(or||(or=zs()),!or)return;const e=Xs();Ja=Math.max(0,Ja-t*2),Mi=Id(Math.floor(re.x),Math.floor(re.y+.2),Math.floor(re.z)),Ms=Id(Math.floor(re.x),Math.floor(re.y+Qa),Math.floor(re.z));const n=e&&Xn("Space"),i=performance.now()/1e3;if(n&&!bd){for(ps=.15,Eo.push(i);Eo.length>0&&i-Eo[0]>.55;)Eo.shift();Eo.length>=3&&(Pn=!Pn,be.set(0,0,0),Eo.length=0,Zn=!1,Nx(Pn))}bd=n,ps>0&&(ps-=t),$n?hs=.12:hs=Math.max(0,hs-t);let r=0,o=0;e&&(Xn("KeyW")&&(r+=1),Xn("KeyS")&&(r-=1),Xn("KeyD")&&(o+=1),Xn("KeyA")&&(o-=1));const s=ld(),a=-Math.sin(s),c=-Math.cos(s),u=Math.cos(s),d=-Math.sin(s);let h=0,f=0;if(r!==0||o!==0){h=a*r+u*o,f=c*r+d*o;const _=Math.hypot(h,f);_>.001&&(h/=_,f/=_)}if(Ao=r!==0||o!==0,Pn){Zn=!1;const _=cy,v=1-Math.exp(-65*t);be.x+=(h*(Ao?_:0)-be.x)*v,be.z+=(f*(Ao?_:0)-be.z)*v;let g=0;e&&(Xn("Space")&&(g+=Td),(Xn("ShiftLeft")||Xn("ShiftRight"))&&(g-=Td)),be.y+=(g-be.y)*v,re.x+=be.x*t,_r(re.x,re.y,re.z)&&(be.x>0?re.x=Math.floor(re.x+At)-At-.001:be.x<0&&(re.x=Math.floor(re.x-At)+1+At+.001),be.x=0),re.z+=be.z*t,_r(re.x,re.y,re.z)&&(be.z>0?re.z=Math.floor(re.z+At)-At-.001:be.z<0&&(re.z=Math.floor(re.z-At)+1+At+.001),be.z=0),re.y+=be.y*t,_r(re.x,re.y,re.z)&&(be.y>0?re.y=Math.floor(re.y+Ss)-Ss-.001:be.y<0&&(re.y=Math.floor(re.y)+1),be.y=0)}else{const _=($n||hs>0)&&!Mi;ps>0&&_?(be.y=ay,$n=!1,hs=0,ps=0,Rr=re.y,Zn=!1,_h()):Mi&&n&&(be.y=Math.max(be.y,4.5),Zn=!1);const v=Mi?yd*.3:yd;be.y-=v*t;const g=Mi?8:36;be.y<-g&&(be.y=-g),be.y<0?Zn||(Zn=!0,Rr=re.y):(Zn=!1,Rr=re.y);const m=(Ms?.7:1)*(Mi?uy:ly);if(Ao){const M=1-Math.exp(-65*t);be.x+=(h*m-be.x)*M,be.z+=(f*m-be.z)*M;const N=Math.hypot(be.x,be.z);if($n&&!Mi&&N>1.2&&!Pn){if(ds+=t,ds>=.42){ds=0;const R=$t(Math.floor(re.x),Math.floor(re.y-.2),Math.floor(re.z));Xx(R)}}else ds=0}else{const M=Math.exp(-14*t);be.x*=M,be.z*=M,ds=0}const A=(M,N)=>{if(!$n)return!1;const R=.55;return _r(re.x+M,re.y+R,re.z+N)?!1:(re.y+=R,!0)};re.x+=be.x*t,_r(re.x,re.y,re.z)&&(A(0,0)||(be.x>0?re.x=Math.floor(re.x+At)-At-.001:be.x<0&&(re.x=Math.floor(re.x-At)+1+At+.001),be.x=0)),re.z+=be.z*t,_r(re.x,re.y,re.z)&&(A(0,0)||(be.z>0?re.z=Math.floor(re.z+At)-At-.001:be.z<0&&(re.z=Math.floor(re.z-At)+1+At+.001),be.z=0));const E=be.y<0;if(re.y+=be.y*t,$n=!1,_r(re.x,re.y,re.z))if(E){$n=!0;const M=Math.floor(re.y)+1,N=Math.max(0,Rr-M);if(re.y=M,be.y=0,!Mi&&N>Ad){const R=Math.floor((N-Ad)*1.5);R>0&&Yo(R)}Zn=!1,Rr=re.y}else re.y=Math.floor(re.y+Ss)-Ss-.001,be.y=0}re.y<-10&&Cd(),sS(re,Qa,np);const p=Eh()!==Zr.FIRST_PERSON;ey(t,re,ld(),rS(),Ao,$n,Pn,sy(),Pu(),p),Ms&&!Pn?(Es+=t,Es>fy&&Yo(dy*t)):Es=Math.max(0,Es-t*2.5),nn>0&&nn<io&&!Ms&&(el+=t,el>hy&&(nn=Math.min(io,nn+py*t))),nn<=0?(Aa+=t,e&&Xn("Space")&&Aa>.8&&(Cd(),Aa=0)):Aa=0}const Od=document.getElementById("debug-info");let ji=null,cc=0,ba=0,uc=60;const My={[at.PLAINS]:"Planície Florida",[at.FOREST]:"Floresta Densa",[at.DESERT]:"Deserto de Dunas",[at.SNOWY_MOUNTAINS]:"Picos Nevados",[at.OCEAN]:"Costa / Oceano"};function Ey(){if(!ji){ji=document.createElement("div"),ji.id="fly-badge",Object.assign(ji.style,{position:"absolute",top:"58px",left:"50%",transform:"translateX(-50%)",padding:"4px 14px",borderRadius:"20px",background:"linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))",border:"1px solid rgba(255,255,255,0.4)",boxShadow:"0 0 15px rgba(59,130,246,0.6)",color:"#ffffff",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase",pointerEvents:"none",zIndex:"25",display:"none",backdropFilter:"blur(4px)",animation:"pulse 1.8s infinite"}),ji.innerHTML='⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';const t=document.getElementById("hud");t&&t.appendChild(ji)}}function yy(t,e){if(Ey(),cc++,ba+=t,ba>=.5&&(uc=Math.round(cc/ba),cc=0,ba=0),Od&&e.position){const n=e.position,i=qo(Math.floor(n.x),Math.floor(n.z)),r=My[i]||"Desconhecido",o=OM(),s=Ko(),a=s?"☀️":"🌙";Od.innerHTML=`<b>FPS:</b> <span style="color:${uc>=50?"#4ade80":"#f87171"}">${uc}</span><br><b>XYZ:</b> ${n.x.toFixed(1)} / ${n.y.toFixed(1)} / ${n.z.toFixed(1)}<br><b>Bioma:</b> <span style="color:#38bdf8;">${r}</span><br><b>Hora:</b> ${a} <span style="color:#fde047;">${o}</span> (${s?"Dia":"Noite"})`}ji&&(ji.style.display=vy()?"block":"none")}let On=null,fc=null;function Ty(t){if(!On){On=document.createElement("div"),On.id="camera-mode-toast",Object.assign(On.style,{position:"absolute",top:"24px",left:"50%",transform:"translateX(-50%)",padding:"6px 18px",borderRadius:"24px",background:"rgba(15, 23, 42, 0.85)",border:"1px solid rgba(74, 222, 128, 0.5)",boxShadow:"0 0 20px rgba(74, 222, 128, 0.3)",color:"#4ade80",fontSize:"13px",fontWeight:"bold",letterSpacing:"0.8px",pointerEvents:"none",zIndex:"100",transition:"opacity 0.3s ease, transform 0.3s ease",opacity:"0",backdropFilter:"blur(6px)"});const e=document.getElementById("hud");e&&e.appendChild(On)}On.textContent=t,On.style.opacity="1",On.style.transform="translateX(-50%) translateY(4px)",fc&&clearTimeout(fc),fc=setTimeout(()=>{On&&(On.style.opacity="0",On.style.transform="translateX(-50%) translateY(0px)")},2200)}let tl=0,hu=null,Do=null,Dd=!1;function Ay(){const t=document.getElementById("hud"),e=document.createElement("div");e.id="hotbar-frame",Object.assign(e.style,{position:"absolute",bottom:"14px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"4px",padding:"5px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.85)",border:"2px solid rgba(255,255,255,0.15)",boxShadow:"0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",pointerEvents:"none",zIndex:"20"}),hu=e;for(let n=0;n<9;n++){const i=document.createElement("div");i.className="hotbar-slot",i.dataset.index=n,Object.assign(i.style,{width:"46px",height:"46px",borderRadius:"6px",border:"2px solid rgba(0,0,0,0.55)",background:"rgba(30, 41, 59, 0.9)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"75% 75%",position:"relative",transition:"border-color 0.15s, transform 0.15s, box-shadow 0.15s",cursor:"pointer"});const r=document.createElement("span");r.className="hotbar-slot-num",Object.assign(r.style,{position:"absolute",top:"1px",left:"3px",fontSize:"10px",color:"#94a3b8",fontWeight:"bold",opacity:"0.6"}),r.textContent=n+1,i.appendChild(r);const o=document.createElement("span");o.className="hotbar-slot-count",Object.assign(o.style,{position:"absolute",bottom:"1px",right:"3px",fontSize:"11px",color:"#fff",textShadow:"0 1px 2px #000",fontWeight:"bold",display:"none"}),i.appendChild(o),e.appendChild(i)}t.appendChild(e),Do=document.createElement("div"),Do.id="hotbar-name",Object.assign(Do.style,{position:"absolute",bottom:"72px",left:"50%",transform:"translateX(-50%)",color:"#fff",fontSize:"13px",fontWeight:"600",letterSpacing:"0.5px",padding:"4px 14px",borderRadius:"12px",background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255,255,255,0.18)",backdropFilter:"blur(4px)",pointerEvents:"none",zIndex:"20",textAlign:"center",whiteSpace:"nowrap"}),t.appendChild(Do),Bu()}function by(){if(!pl()){for(let t=0;t<9;t++)Xn(`Digit${t+1}`)&&ip(t);Dd||(Dd=!0,document.addEventListener("wheel",wy,{passive:!1})),Bu()}}let wa=0;function wy(t){if(!(!Xs()||pl())&&(t.preventDefault(),wa+=Math.sign(t.deltaY),Math.abs(wa)>=1)){const e=wa>0?1:-1;wa=0;const n=(tl+e+9)%9;ip(n)}}function ip(t){tl=t,KE(t),Bu()}function Bu(){var n;if(!hu)return;const t=qE(),e=hu.children;for(let i=0;i<e.length;i++){const r=i===tl,o=t[i]||{type:0,count:0},s=o.type||0,a=o.count||0;if(e[i].style.borderColor=r?"rgba(74, 222, 128, 0.95)":"rgba(0,0,0,0.55)",e[i].style.transform=r?"scale(1.14) translateY(-3px)":"scale(1)",e[i].style.boxShadow=r?"0 0 14px rgba(74, 222, 128, 0.4), 0 6px 14px rgba(0,0,0,0.6)":"none",e[i].style.zIndex=r?"2":"1",s>0){const u=Ot(s,38);u&&(e[i].style.backgroundImage=`url(${u.toDataURL()})`)}else e[i].style.backgroundImage="none";const c=e[i].querySelector(".hotbar-slot-count");c&&(a>1?(c.textContent=a,c.style.display="block"):c.style.display="none")}if(Do){const i=((n=t[tl])==null?void 0:n.type)||0;Do.textContent=no[i]||""}}let qt=null,zn=0;function Ry(t){qt&&t.remove(qt),qt=new Ox(16752964,0,20,1.6),qt.castShadow=!1,t.add(qt)}function Cy(t,e,n,i,r){if(!qt)return;const o=i===l.TORCH,s=i===l.LAVA,a=i===l.GLOWSTONE;if(o||s||a){const c=r?r.x:n.x,u=r?r.y-.2:n.y+1.2,d=r?r.z:n.z;if(qt.position.set(c,u,d),o){qt.color.setHex(16752187);const f=2.4*(1+.12*Math.sin(e*16)+.08*Math.sin(e*31)+.04*(Math.random()-.5));zn=La.lerp(zn,f,t*14),qt.distance=20}else if(s){qt.color.setHex(16733457);const f=2*(1+.06*Math.sin(e*8));zn=La.lerp(zn,f,t*10),qt.distance=18}else a&&(qt.color.setHex(16771635),zn=La.lerp(zn,2.8,t*12),qt.distance=24);qt.intensity=zn}else zn=Math.max(0,zn-t*8),qt.intensity=zn}let pu=[],Ga=[],No=null,Cr=null,ms=null;function Iy(){const t=document.getElementById("hud");No=document.createElement("div"),No.id="damage-vignette",No.style.opacity="0",t.appendChild(No);const e=document.createElement("div");e.style.cssText="position:fixed; bottom:82px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; gap:4px; align-items:flex-start; pointer-events:none; z-index:20;",ms=document.createElement("div"),ms.id="armor-bar",ms.style.cssText="display:flex; gap:3px; font-size:16px; color:#38bdf8; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8));";for(let r=0;r<10;r++){const o=document.createElement("span");o.textContent="🛡️",o.style.cssText="font-size:14px; opacity:0; transition:opacity 0.2s;",Ga.push(o),ms.appendChild(o)}e.appendChild(ms);const n=document.createElement("div");n.id="health-bar",n.style.cssText="display:flex; gap:3px;";const i=gy()/2;for(let r=0;r<i;r++){const o=document.createElement("span");o.className="heart",o.textContent="♥",pu.push(o),n.appendChild(o)}e.appendChild(n),t.appendChild(e),Cr=document.createElement("div"),Cr.id="death-overlay",Cr.innerHTML='<div class="death-title">☠ VOCÊ MORREU</div><div class="death-hint">Pressione ESPAÇO para renascer</div>',Cr.style.display="none",t.appendChild(Cr)}function Oy(){const t=ep();for(let i=0;i<pu.length;i++){const r=t-i*2;pu[i].className="heart "+(r>=2?"full":r===1?"half":"empty")}const e=Fu(),n=Math.floor(e/2);for(let i=0;i<Ga.length;i++)i<n?Ga[i].style.opacity="1":Ga[i].style.opacity="0";No&&(No.style.opacity=_y()*.75),Cr&&(Cr.style.display=t<=0?"flex":"none")}const ys={SUNNY:"sunny",RAIN:"rain"};let dc=ys.SUNNY,hc=120+Math.random()*60,Ir=null,Ns=null;const mu=800;function Dy(t){Ns=new vn;const e=new Float32Array(mu*3);for(let i=0;i<mu*3;i+=3)e[i]=(Math.random()-.5)*40,e[i+1]=Math.random()*25,e[i+2]=(Math.random()-.5)*40;Ns.setAttribute("position",new Hn(e,3));const n=new hh({color:9684477,size:.12,transparent:!0,opacity:0});Ir=new bx(Ns,n),t.add(Ir)}function Ny(t,e){if(hc-=t,hc<=0&&(hc=90+Math.random()*120,dc=dc===ys.SUNNY?ys.RAIN:ys.SUNNY),Ir&&e){Ir.position.set(e.x,e.y,e.z);const i=dc!==ys.SUNNY?.65:0;if(Ir.material.opacity+=(i-Ir.material.opacity)*t*2,Ir.material.opacity>.01){const r=Ns.attributes.position.array;for(let o=1;o<mu*3;o+=3)r[o]-=32*t,r[o]<-5&&(r[o]=20+Math.random()*5);Ns.attributes.position.needsUpdate=!0}}}const rp="voxelcraft_world_save_v03";function Ly(){try{const t=Li(),e=XE(),n=ep(),i={timestamp:Date.now(),player:{x:t.x,y:t.y,z:t.z,health:n,hotbar:e,armor:[...Ut]}};localStorage.setItem(rp,JSON.stringify(i))}catch(t){console.warn("Could not save world data:",t)}}function Py(){try{const t=localStorage.getItem(rp);if(!t)return!1;const e=JSON.parse(t);if(!e||!e.player)return!1;const n=Li();if(n&&e.player.x!==void 0&&n.set(e.player.x,e.player.y,e.player.z),e.player.armor)for(let i=0;i<4;i++)Ut[i]=e.player.armor[i]||0;return!0}catch(t){return console.warn("Could not load world data:",t),!1}}window.addEventListener("contextmenu",t=>t.preventDefault());lp(document);console.log("[VoxelCraft] Building texture atlas...");sM();const Nd=lS(),on=cS();CM(on,uS());Dy(on);UM(on);VM(on);console.log("[VoxelCraft] Generating world biomes & 3D caves...");TM(on);const ui=Du(),yi=nS(window.innerWidth/window.innerHeight,ui);on.add(yi);dS(yi);iS(Ah());eS(Ah());QM(on);br(Qe.PIG,ui.x+4,ui.y,ui.z+4);br(Qe.SHEEP,ui.x-3,ui.y,ui.z+5);PE(on);Vh();Bh();Ay();Ry(on);JE(on);my();Iy();iy();Py();console.log(`[VoxelCraft v0.5.0] Ready! Spawn at (${ui.x}, ${ui.y}, ${ui.z})`);let pc=0;function Uy(t,e){if(jx()){md(yi.position,on),gd(t,on,yi,Nd);return}Qx()||(Sy(t),md(yi.position,on),gd(t,on,yi,Nd),Ny(t,Li()),Cy(t,e,Li(),Pu(),yi.position),yE(t),rE(t),WM(t,e),GM(t),UE(t),by(),Oy(),oy(t),Yx(t),yy(t,{position:yi.position}),pc+=t,pc>=30&&(pc=0,Ly()))}function Fy(){fS(yi)}aS(Uy,Fy);
