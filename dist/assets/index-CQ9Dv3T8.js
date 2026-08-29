(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ba=new Set;function cp(t=document){t.addEventListener("keydown",e=>{ba.add(e.code)}),t.addEventListener("keyup",e=>{ba.delete(e.code)}),t.addEventListener("contextmenu",e=>{document.pointerLockElement&&e.preventDefault()}),window.addEventListener("blur",()=>{ba.clear()})}function Wn(t){return ba.has(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="170",up=0,Ku=1,fp=2,Ld=1,dp=2,vi=3,rr=0,rn=1,Ln=2,Ji=0,No=1,Yu=2,$u=3,Zu=4,hp=5,Mr=100,pp=101,mp=102,gp=103,_p=104,vp=200,xp=201,Sp=202,Mp=203,pc=204,mc=205,Ep=206,yp=207,Tp=208,Ap=209,bp=210,wp=211,Rp=212,Cp=213,Ip=214,gc=0,_c=1,vc=2,Bo=3,xc=4,Sc=5,Mc=6,Ec=7,gu=0,Dp=1,Op=2,er=0,Np=1,Lp=2,Pp=3,Up=4,Fp=5,Bp=6,Gp=7,Pd=300,Go=301,Ho=302,yc=303,Tc=304,Qa=306,Ac=1e3,Cr=1001,bc=1002,pn=1003,Hp=1004,Ks=1005,ni=1006,dl=1007,Ir=1008,Ni=1009,Ud=1010,Fd=1011,Ds=1012,_u=1013,Qr=1014,wi=1015,Bs=1016,vu=1017,xu=1018,ko=1020,Bd=35902,Gd=1021,Hd=1022,Un=1023,kd=1024,Vd=1025,Lo=1026,Vo=1027,Wd=1028,Su=1029,zd=1030,Mu=1031,Eu=1033,wa=33776,Ra=33777,Ca=33778,Ia=33779,wc=35840,Rc=35841,Cc=35842,Ic=35843,Dc=36196,Oc=37492,Nc=37496,Lc=37808,Pc=37809,Uc=37810,Fc=37811,Bc=37812,Gc=37813,Hc=37814,kc=37815,Vc=37816,Wc=37817,zc=37818,Xc=37819,qc=37820,Kc=37821,Da=36492,Yc=36494,$c=36495,Xd=36283,Zc=36284,jc=36285,Qc=36286,kp=3200,Vp=3201,yu=0,Wp=1,ji="",un="srgb",Yo="srgb-linear",Ja="linear",it="srgb",io=7680,ju=519,zp=512,Xp=513,qp=514,qd=515,Kp=516,Yp=517,$p=518,Zp=519,Qu=35044,Ju="300 es",Ri=2e3,Ba=2001;class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ef=1234567;const Po=Math.PI/180,Os=180/Math.PI;function Zo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Tu(t,e){return(t%e+e)%e}function jp(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Qp(t,e,n){return t!==e?(n-t)/(e-t):0}function ys(t,e,n){return(1-n)*t+n*e}function Jp(t,e,n,i){return ys(t,e,1-Math.exp(-n*i))}function em(t,e=1){return e-Math.abs(Tu(t,e*2)-e)}function tm(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function nm(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function im(t,e){return t+Math.floor(Math.random()*(e-t+1))}function rm(t,e){return t+Math.random()*(e-t)}function om(t){return t*(.5-Math.random())}function sm(t){t!==void 0&&(ef=t);let e=ef+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function am(t){return t*Po}function lm(t){return t*Os}function cm(t){return(t&t-1)===0&&t!==0}function um(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function fm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dm(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),c=s(n/2),u=o((e+i)/2),d=s((e+i)/2),h=o((e-i)/2),f=s((e-i)/2),m=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*d,c*h,c*f,a*u);break;case"YZY":t.set(c*f,a*d,c*h,a*u);break;case"ZXZ":t.set(c*h,c*f,a*d,a*u);break;case"XZX":t.set(a*d,c*_,c*m,a*u);break;case"YXY":t.set(c*m,a*d,c*_,a*u);break;case"ZYZ":t.set(c*_,c*m,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Oa={DEG2RAD:Po,RAD2DEG:Os,generateUUID:Zo,clamp:qt,euclideanModulo:Tu,mapLinear:jp,inverseLerp:Qp,lerp:ys,damp:Jp,pingpong:em,smoothstep:tm,smootherstep:nm,randInt:im,randFloat:rm,randFloatSpread:om,seededRandom:sm,degToRad:am,radToDeg:lm,isPowerOfTwo:cm,ceilPowerOfTwo:um,floorPowerOfTwo:fm,setQuaternionFromProperEuler:dm,normalize:kt,denormalize:Mo};class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,o,s,a,c,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,c,u)}set(e,n,i,r,o,s,a,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=c,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],c=i[6],u=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=r[0],g=r[3],p=r[6],b=r[1],y=r[4],E=r[7],U=r[2],C=r[5],w=r[8];return o[0]=s*v+a*b+c*U,o[3]=s*g+a*y+c*C,o[6]=s*p+a*E+c*w,o[1]=u*v+d*b+h*U,o[4]=u*g+d*y+h*C,o[7]=u*p+d*E+h*w,o[2]=f*v+m*b+_*U,o[5]=f*g+m*y+_*C,o[8]=f*p+m*E+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*c+r*o*u-r*s*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8],h=d*s-a*u,f=a*c-d*o,m=u*o-s*c,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*u-d*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(d*n-r*c)*v,e[5]=(r*o-a*n)*v,e[6]=m*v,e[7]=(i*c-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*s+u*a)+s+e,-r*u,r*c,-r*(-u*s+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hl.makeScale(e,n)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,n){return this.premultiply(hl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new He;function Kd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hm(){const t=Ga("canvas");return t.style.display="block",t}const tf={};function ms(t){t in tf||(tf[t]=!0,console.warn(t))}function pm(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function mm(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gm(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===it&&(t.r=Di(t.r),t.g=Di(t.g),t.b=Di(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===it&&(t.r=Uo(t.r),t.g=Uo(t.g),t.b=Uo(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===ji?Ja:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const nf=[.64,.33,.3,.6,.15,.06],rf=[.2126,.7152,.0722],of=[.3127,.329],sf=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Yo]:{primaries:nf,whitePoint:of,transfer:Ja,toXYZ:sf,fromXYZ:af,luminanceCoefficients:rf,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:nf,whitePoint:of,transfer:it,toXYZ:sf,fromXYZ:af,luminanceCoefficients:rf,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});let ro;class _m{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ro===void 0&&(ro=Ga("canvas")),ro.width=e.width,ro.height=e.height;const i=ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ro}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ga("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Di(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vm=0;class Yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(pl(r[s].image)):o.push(pl(r[s]))}else o=pl(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function pl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_m.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xm=0;class Yt extends $o{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Cr,r=Cr,o=ni,s=Ir,a=Un,c=Ni,u=Yt.DEFAULT_ANISOTROPY,d=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Zo(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ac:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ac:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Pd;Yt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],m=c[5],_=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(m+1)/2,U=(p+1)/2,C=(d+f)/4,w=(h+v)/4,P=(_+g)/4;return y>E&&y>U?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=C/i,o=w/i):E>U?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=C/r,o=P/r):U<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),i=w/o,r=P/o),this.set(i,r,o,n),this}let b=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(h-v)/b,this.z=(f-d)/b,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sm extends $o{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Yd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Sm{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $d extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mm extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let c=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=o[s+0],m=o[s+1],_=o[s+2],v=o[s+3];if(a===0){e[n+0]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(h!==v||c!==f||u!==m||d!==_){let g=1-a;const p=c*f+u*m+d*_+h*v,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const U=Math.sqrt(y),C=Math.atan2(U,p*b);g=Math.sin(g*C)/U,a=Math.sin(a*C)/U}const E=a*b;if(c=c*g+f*E,u=u*g+m*E,d=d*g+_*E,h=h*g+v*E,g===1-a){const U=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=U,u*=U,d*=U,h*=U}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],c=i[r+1],u=i[r+2],d=i[r+3],h=o[s],f=o[s+1],m=o[s+2],_=o[s+3];return e[n]=a*_+d*h+c*m-u*f,e[n+1]=c*_+d*f+u*h-a*m,e[n+2]=u*_+d*m+a*f-c*h,e[n+3]=d*_-a*h-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,u=a(i/2),d=a(r/2),h=a(o/2),f=c(i/2),m=c(r/2),_=c(o/2);switch(s){case"XYZ":this._x=f*d*h+u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h+f*m*_;break;case"YZX":this._x=f*d*h+u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h-f*m*_;break;case"XZY":this._x=f*d*h-u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],c=n[9],u=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*c,this._y=r*d+s*c+o*a-i*u,this._z=o*d+s*u+i*c-r*a,this._w=s*d-i*a-r*c-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,u=2*(s*r-a*i),d=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+c*u+s*h-a*d,this.y=i+c*d+a*u-o*h,this.z=r+c*h+o*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,c=n.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new D,lf=new Gs;class Hs{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,bn):bn.fromBufferAttribute(o,s),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),$s.subVectors(this.max,is),oo.subVectors(e.a,is),so.subVectors(e.b,is),ao.subVectors(e.c,is),Fi.subVectors(so,oo),Bi.subVectors(ao,so),lr.subVectors(oo,ao);let n=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-lr.z,lr.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,lr.z,0,-lr.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-lr.y,lr.x,0];return!gl(n,oo,so,ao,$s)||(n=[1,0,0,0,1,0,0,0,1],!gl(n,oo,so,ao,$s))?!1:(Zs.crossVectors(Fi,Bi),n=[Zs.x,Zs.y,Zs.z],gl(n,oo,so,ao,$s))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new D,new D,new D,new D,new D,new D,new D,new D],bn=new D,Ys=new Hs,oo=new D,so=new D,ao=new D,Fi=new D,Bi=new D,lr=new D,is=new D,$s=new D,Zs=new D,cr=new D;function gl(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){cr.fromArray(t,o);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),c=e.dot(cr),u=n.dot(cr),d=i.dot(cr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}const Em=new Hs,rs=new D,_l=new D;class ks{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Em.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const n=rs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(_l)),this.expandByPoint(rs.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new D,vl=new D,js=new D,Gi=new D,xl=new D,Qs=new D,Sl=new D;class Au{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vl.copy(e).add(n).multiplyScalar(.5),js.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(vl);const o=e.distanceTo(n)*.5,s=-this.direction.dot(js),a=Gi.dot(this.direction),c=-Gi.dot(js),u=Gi.lengthSq(),d=Math.abs(1-s*s);let h,f,m,_;if(d>0)if(h=s*c-a,f=s*a-c,_=o*d,h>=0)if(f>=-_)if(f<=_){const v=1/d;h*=v,f*=v,m=h*(h+s*f+2*a)+f*(s*h+f+2*c)+u}else f=o,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*c)+u;else f=-o,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*c)+u;else f<=-_?(h=Math.max(0,-(-s*o+a)),f=h>0?-o:Math.min(Math.max(-o,-c),o),m=-h*h+f*(f+2*c)+u):f<=_?(h=0,f=Math.min(Math.max(-o,-c),o),m=f*(f+2*c)+u):(h=Math.max(0,-(s*o+a)),f=h>0?o:Math.min(Math.max(-o,-c),o),m=-h*h+f*(f+2*c)+u);else f=s>0?-o:o,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vl).addScaledVector(js,f),m}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(o=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(o=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){xl.subVectors(n,e),Qs.subVectors(i,e),Sl.crossVectors(xl,Qs);let s=this.direction.dot(Sl),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const c=a*this.direction.dot(Qs.crossVectors(Gi,Qs));if(c<0)return null;const u=a*this.direction.dot(xl.cross(Gi));if(u<0||c+u>s)return null;const d=-a*Gi.dot(Sl);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,o,s,a,c,u,d,h,f,m,_,v,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,c,u,d,h,f,m,_,v,g)}set(e,n,i,r,o,s,a,c,u,d,h,f,m,_,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=m,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/lo.setFromMatrixColumn(e,0).length(),o=1/lo.setFromMatrixColumn(e,1).length(),s=1/lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=s*d,m=s*h,_=a*d,v=a*h;n[0]=c*d,n[4]=-c*h,n[8]=u,n[1]=m+_*u,n[5]=f-v*u,n[9]=-a*c,n[2]=v-f*u,n[6]=_+m*u,n[10]=s*c}else if(e.order==="YXZ"){const f=c*d,m=c*h,_=u*d,v=u*h;n[0]=f+v*a,n[4]=_*a-m,n[8]=s*u,n[1]=s*h,n[5]=s*d,n[9]=-a,n[2]=m*a-_,n[6]=v+f*a,n[10]=s*c}else if(e.order==="ZXY"){const f=c*d,m=c*h,_=u*d,v=u*h;n[0]=f-v*a,n[4]=-s*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*d,n[9]=v-f*a,n[2]=-s*u,n[6]=a,n[10]=s*c}else if(e.order==="ZYX"){const f=s*d,m=s*h,_=a*d,v=a*h;n[0]=c*d,n[4]=_*u-m,n[8]=f*u+v,n[1]=c*h,n[5]=v*u+f,n[9]=m*u-_,n[2]=-u,n[6]=a*c,n[10]=s*c}else if(e.order==="YZX"){const f=s*c,m=s*u,_=a*c,v=a*u;n[0]=c*d,n[4]=v-f*h,n[8]=_*h+m,n[1]=h,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=m*h+_,n[10]=f-v*h}else if(e.order==="XZY"){const f=s*c,m=s*u,_=a*c,v=a*u;n[0]=c*d,n[4]=-h,n[8]=u*d,n[1]=f*h+v,n[5]=s*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*d,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ym,e,Tm)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Hi.crossVectors(i,sn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Hi.crossVectors(i,sn)),Hi.normalize(),Js.crossVectors(sn,Hi),r[0]=Hi.x,r[4]=Js.x,r[8]=sn.x,r[1]=Hi.y,r[5]=Js.y,r[9]=sn.y,r[2]=Hi.z,r[6]=Js.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],c=i[8],u=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],g=i[10],p=i[14],b=i[3],y=i[7],E=i[11],U=i[15],C=r[0],w=r[4],P=r[8],T=r[12],M=r[1],R=r[5],z=r[9],H=r[13],j=r[2],Q=r[6],Y=r[10],J=r[14],k=r[3],oe=r[7],he=r[11],Te=r[15];return o[0]=s*C+a*M+c*j+u*k,o[4]=s*w+a*R+c*Q+u*oe,o[8]=s*P+a*z+c*Y+u*he,o[12]=s*T+a*H+c*J+u*Te,o[1]=d*C+h*M+f*j+m*k,o[5]=d*w+h*R+f*Q+m*oe,o[9]=d*P+h*z+f*Y+m*he,o[13]=d*T+h*H+f*J+m*Te,o[2]=_*C+v*M+g*j+p*k,o[6]=_*w+v*R+g*Q+p*oe,o[10]=_*P+v*z+g*Y+p*he,o[14]=_*T+v*H+g*J+p*Te,o[3]=b*C+y*M+E*j+U*k,o[7]=b*w+y*R+E*Q+U*oe,o[11]=b*P+y*z+E*Y+U*he,o[15]=b*T+y*H+E*J+U*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+o*c*h-r*u*h-o*a*f+i*u*f+r*a*m-i*c*m)+v*(+n*c*m-n*u*f+o*s*f-r*s*m+r*u*d-o*c*d)+g*(+n*u*h-n*a*m-o*s*h+i*s*m+o*a*d-i*u*d)+p*(-r*a*d-n*c*h+n*a*f+r*s*h-i*s*f+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],b=h*g*u-v*f*u+v*c*m-a*g*m-h*c*p+a*f*p,y=_*f*u-d*g*u-_*c*m+s*g*m+d*c*p-s*f*p,E=d*v*u-_*h*u+_*a*m-s*v*m-d*a*p+s*h*p,U=_*h*c-d*v*c-_*a*f+s*v*f+d*a*g-s*h*g,C=n*b+i*y+r*E+o*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=b*w,e[1]=(v*f*o-h*g*o-v*r*m+i*g*m+h*r*p-i*f*p)*w,e[2]=(a*g*o-v*c*o+v*r*u-i*g*u-a*r*p+i*c*p)*w,e[3]=(h*c*o-a*f*o-h*r*u+i*f*u+a*r*m-i*c*m)*w,e[4]=y*w,e[5]=(d*g*o-_*f*o+_*r*m-n*g*m-d*r*p+n*f*p)*w,e[6]=(_*c*o-s*g*o-_*r*u+n*g*u+s*r*p-n*c*p)*w,e[7]=(s*f*o-d*c*o+d*r*u-n*f*u-s*r*m+n*c*m)*w,e[8]=E*w,e[9]=(_*h*o-d*v*o-_*i*m+n*v*m+d*i*p-n*h*p)*w,e[10]=(s*v*o-_*a*o+_*i*u-n*v*u-s*i*p+n*a*p)*w,e[11]=(d*a*o-s*h*o-d*i*u+n*h*u+s*i*m-n*a*m)*w,e[12]=U*w,e[13]=(d*v*r-_*h*r+_*i*f-n*v*f-d*i*g+n*h*g)*w,e[14]=(_*a*r-s*v*r-_*i*c+n*v*c+s*i*g-n*a*g)*w,e[15]=(s*h*r-d*a*r+d*i*c-n*h*c-s*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,c=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*c,u*c+r*a,0,u*a+r*c,d*a+i,d*c-r*s,0,u*c-r*a,d*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,c=n._w,u=o+o,d=s+s,h=a+a,f=o*u,m=o*d,_=o*h,v=s*d,g=s*h,p=a*h,b=c*u,y=c*d,E=c*h,U=i.x,C=i.y,w=i.z;return r[0]=(1-(v+p))*U,r[1]=(m+E)*U,r[2]=(_-y)*U,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(f+p))*C,r[6]=(g+b)*C,r[7]=0,r[8]=(_+y)*w,r[9]=(g-b)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=lo.set(r[0],r[1],r[2]).length();const s=lo.set(r[4],r[5],r[6]).length(),a=lo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const u=1/o,d=1/s,h=1/a;return wn.elements[0]*=u,wn.elements[1]*=u,wn.elements[2]*=u,wn.elements[4]*=d,wn.elements[5]*=d,wn.elements[6]*=d,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,n.setFromRotationMatrix(wn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ri){const c=this.elements,u=2*o/(n-e),d=2*o/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===Ri)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Ba)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ri){const c=this.elements,u=1/(n-e),d=1/(i-r),h=1/(s-o),f=(n+e)*u,m=(i+r)*d;let _,v;if(a===Ri)_=(s+o)*h,v=-2*h;else if(a===Ba)_=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const lo=new D,wn=new ht,ym=new D(0,0,0),Tm=new D(1,1,1),Hi=new D,Js=new D,sn=new D,cf=new ht,uf=new Gs;class Gn{constructor(e=0,n=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Am=0;const ff=new D,co=new Gs,pi=new ht,ea=new D,os=new D,bm=new D,wm=new Gs,df=new D(1,0,0),hf=new D(0,1,0),pf=new D(0,0,1),mf={type:"added"},Rm={type:"removed"},uo={type:"childadded",child:null},Ml={type:"childremoved",child:null};class bt extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new D,n=new Gn,i=new Gs,r=new D(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new He}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return co.setFromAxisAngle(e,n),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,n){return co.setFromAxisAngle(e,n),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(pf,e)}translateOnAxis(e,n){return ff.copy(e).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ea.copy(e):ea.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(os,ea,this.up):pi.lookAt(ea,os,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),co.setFromRotationMatrix(pi),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mf),uo.child=e,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Rm),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mf),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(n){const a=s(e.geometries),c=s(e.materials),u=s(e.textures),d=s(e.images),h=s(e.shapes),f=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new D(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new D,mi=new D,El=new D,gi=new D,fo=new D,ho=new D,gf=new D,yl=new D,Tl=new D,Al=new D,bl=new ot,wl=new ot,Rl=new ot;class Mn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Rn.subVectors(r,n),mi.subVectors(i,n),El.subVectors(e,n);const s=Rn.dot(Rn),a=Rn.dot(mi),c=Rn.dot(El),u=mi.dot(mi),d=mi.dot(El),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,m=(u*c-a*d)*f,_=(s*d-a*c)*f;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,o,s,a,c){return this.getBarycoord(e,n,i,r,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,gi.x),c.addScaledVector(s,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(e,n,i,r,o,s){return bl.setScalar(0),wl.setScalar(0),Rl.setScalar(0),bl.fromBufferAttribute(e,n),wl.fromBufferAttribute(e,i),Rl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(bl,o.x),s.addScaledVector(wl,o.y),s.addScaledVector(Rl,o.z),s}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),mi.subVectors(e,n),Rn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Rn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Mn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;fo.subVectors(r,i),ho.subVectors(o,i),yl.subVectors(e,i);const c=fo.dot(yl),u=ho.dot(yl);if(c<=0&&u<=0)return n.copy(i);Tl.subVectors(e,r);const d=fo.dot(Tl),h=ho.dot(Tl);if(d>=0&&h<=d)return n.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return s=c/(c-d),n.copy(i).addScaledVector(fo,s);Al.subVectors(e,o);const m=fo.dot(Al),_=ho.dot(Al);if(_>=0&&m<=_)return n.copy(o);const v=m*u-c*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(ho,a);const g=d*_-m*h;if(g<=0&&h-d>=0&&m-_>=0)return gf.subVectors(o,r),a=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(gf,a);const p=1/(g+v+f);return s=v*p,a=f*p,n.copy(i).addScaledVector(fo,s).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Cl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class we{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Tu(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Cl(s,o,e+1/3),this.g=Cl(s,o,e),this.b=Cl(s,o,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=un){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=un){const i=jd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Ze.fromWorkingColorSpace(Bt.copy(this),e),Math.round(qt(Bt.r*255,0,255))*65536+Math.round(qt(Bt.g*255,0,255))*256+Math.round(qt(Bt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,o=Bt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,u;const d=(a+s)/2;if(a===s)c=0,u=0;else{const h=s-a;switch(u=d<=.5?h/(s+a):h/(2-s-a),s){case i:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-i)/h+2;break;case o:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=un){Ze.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(ta);const i=ys(ki.h,ta.h,n),r=ys(ki.s,ta.s,n),o=ys(ki.l,ta.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new we;we.NAMES=jd;let Cm=0;class sr extends $o{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Zo(),this.name="",this.blending=No,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pc&&(i.blendSrc=this.blendSrc),this.blendDst!==mc&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(i.stencilFail=this.stencilFail),this.stencilZFail!==io&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gn extends sr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,na=new Je;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)na.fromBufferAttribute(this,n),na.applyMatrix3(e),this.setXY(n,na.x,na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Mo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array),o=kt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class Qd extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jd extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mn extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Im=0;const xn=new ht,Il=new bt,po=new D,an=new Hs,ss=new Hs,Ct=new D;class yn extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?Jd:Qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new He().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new mn(i,3))}else{for(let i=0,r=n.count;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];an.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(an.min,ss.min),an.expandByPoint(Ct),Ct.addVectors(an.max,ss.max),an.expandByPoint(Ct)):(an.expandByPoint(ss.min),an.expandByPoint(ss.max))}an.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ct.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Ct.fromBufferAttribute(a,u),c&&(po.fromBufferAttribute(e,u),Ct.add(po)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new D,c[P]=new D;const u=new D,d=new D,h=new D,f=new Je,m=new Je,_=new Je,v=new D,g=new D;function p(P,T,M){u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),f.fromBufferAttribute(o,P),m.fromBufferAttribute(o,T),_.fromBufferAttribute(o,M),d.sub(u),h.sub(u),m.sub(f),_.sub(f);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(R),a[P].add(v),a[T].add(v),a[M].add(v),c[P].add(g),c[T].add(g),c[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,T=b.length;P<T;++P){const M=b[P],R=M.start,z=M.count;for(let H=R,j=R+z;H<j;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new D,E=new D,U=new D,C=new D;function w(P){U.fromBufferAttribute(r,P),C.copy(U);const T=a[P];y.copy(T),y.sub(U.multiplyScalar(U.dot(T))).normalize(),E.crossVectors(C,T);const R=E.dot(c[P])<0?-1:1;s.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,T=b.length;P<T;++P){const M=b[P],R=M.start,z=M.count;for(let H=R,j=R+z;H<j;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,o=new D,s=new D,a=new D,c=new D,u=new D,d=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(d),c.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(c.length*d);let m=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*d;for(let p=0;p<d;p++)f[_++]=u[m++]}return new Bn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const c=[],u=o[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],m=e(f,i);c.push(m)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],h=o[u];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _f=new ht,ur=new Au,ia=new ks,vf=new D,ra=new D,oa=new D,sa=new D,Dl=new D,aa=new D,xf=new D,la=new D;class W extends bt{constructor(e=new yn,n=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){aa.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const d=a[c],h=o[c];d!==0&&(Dl.fromBufferAttribute(h,e),s?aa.addScaledVector(Dl,d):aa.addScaledVector(Dl.sub(n),d))}n.add(aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(o),ur.copy(e.ray).recast(e.near),!(ia.containsPoint(ur.origin)===!1&&(ur.intersectSphere(ia,vf)===null||ur.origin.distanceToSquared(vf)>(e.far-e.near)**2))&&(_f.copy(o).invert(),ur.copy(e.ray).applyMatrix4(_f),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,h=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let E=b,U=y;E<U;E+=3){const C=a.getX(E),w=a.getX(E+1),P=a.getX(E+2);r=ca(this,p,e,i,u,d,h,C,w,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const b=a.getX(g),y=a.getX(g+1),E=a.getX(g+2);r=ca(this,s,e,i,u,d,h,b,y,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),y=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let E=b,U=y;E<U;E+=3){const C=E,w=E+1,P=E+2;r=ca(this,p,e,i,u,d,h,C,w,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const b=g,y=g+1,E=g+2;r=ca(this,s,e,i,u,d,h,b,y,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Dm(t,e,n,i,r,o,s,a){let c;if(e.side===rn?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===rr,a),c===null)return null;la.copy(a),la.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(la);return u<n.near||u>n.far?null:{distance:u,point:la.clone(),object:t}}function ca(t,e,n,i,r,o,s,a,c,u){t.getVertexPosition(a,ra),t.getVertexPosition(c,oa),t.getVertexPosition(u,sa);const d=Dm(t,e,n,i,ra,oa,sa,xf);if(d){const h=new D;Mn.getBarycoord(xf,ra,oa,sa,h),r&&(d.uv=Mn.getInterpolatedAttribute(r,a,c,u,h,new Je)),o&&(d.uv1=Mn.getInterpolatedAttribute(o,a,c,u,h,new Je)),s&&(d.normal=Mn.getInterpolatedAttribute(s,a,c,u,h,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new D,materialIndex:0};Mn.getNormal(ra,oa,sa,f.normal),d.face=f,d.barycoord=h}return d}class q extends yn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],u=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new mn(u,3)),this.setAttribute("normal",new mn(d,3)),this.setAttribute("uv",new mn(h,2));function _(v,g,p,b,y,E,U,C,w,P,T){const M=E/w,R=U/P,z=E/2,H=U/2,j=C/2,Q=w+1,Y=P+1;let J=0,k=0;const oe=new D;for(let he=0;he<Y;he++){const Te=he*R-H;for(let We=0;We<Q;We++){const st=We*M-z;oe[v]=st*b,oe[g]=Te*y,oe[p]=j,u.push(oe.x,oe.y,oe.z),oe[v]=0,oe[g]=0,oe[p]=C>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(We/w),h.push(1-he/P),J+=1}}for(let he=0;he<P;he++)for(let Te=0;Te<w;Te++){const We=f+Te+Q*he,st=f+Te+Q*(he+1),K=f+(Te+1)+Q*(he+1),ie=f+(Te+1)+Q*he;c.push(We,st,ie),c.push(st,K,ie),k+=6}a.addGroup(m,k,T),m+=k,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new q(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Wo(t[n]);for(const r in i)e[r]=i[r]}return e}function Om(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function eh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Nm={clone:Wo,merge:Vt};var Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends sr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=Om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class th extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new D,Sf=new Je,Mf=new Je;class Jt extends th{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,Sf,Mf),n.subVectors(Mf,Sf)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/c,n-=s.offsetY*i/u,r*=s.width/c,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const mo=-90,go=1;class Um extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(mo,go,e,n);r.layers=this.layers,this.add(r);const o=new Jt(mo,go,e,n);o.layers=this.layers,this.add(o);const s=new Jt(mo,go,e,n);s.layers=this.layers,this.add(s);const a=new Jt(mo,go,e,n);a.layers=this.layers,this.add(a);const c=new Jt(mo,go,e,n);c.layers=this.layers,this.add(c);const u=new Jt(mo,go,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,c]=n;for(const u of n)this.remove(u);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class nh extends Yt{constructor(e,n,i,r,o,s,a,c,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Go,super(e,n,i,r,o,s,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fm extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new q(5,5,5),o=new or({name:"CubemapFromEquirect",uniforms:Wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Ji});o.uniforms.tEquirect.value=n;const s=new W(r,o),a=n.minFilter;return n.minFilter===Ir&&(n.minFilter=ni),new Um(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Ol=new D,Bm=new D,Gm=new He;class gr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ol.subVectors(i,n).cross(Bm.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Gm.getNormalMatrix(e),r=this.coplanarPoint(Ol).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new ks,ua=new D;class bu{constructor(e=new gr,n=new gr,i=new gr,r=new gr,o=new gr,s=new gr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],v=r[10],g=r[11],p=r[12],b=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-o,f-u,g-m,E-p).normalize(),i[1].setComponents(c+o,f+u,g+m,E+p).normalize(),i[2].setComponents(c+s,f+d,g+_,E+b).normalize(),i[3].setComponents(c-s,f-d,g-_,E-b).normalize(),i[4].setComponents(c-a,f-h,g-v,E-y).normalize(),n===Ri)i[5].setComponents(c+a,f+h,g+v,E+y).normalize();else if(n===Ba)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Hm(t){const e=new WeakMap;function n(a,c){const u=a.array,d=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,d),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,u){const d=c.array,h=c.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],v=h[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const v=h[m];t.bufferSubData(u,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,c),u.version=a.version}}return{get:r,remove:o,update:s}}class el extends yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),c=Math.floor(r),u=a+1,d=c+1,h=e/a,f=n/c,m=[],_=[],v=[],g=[];for(let p=0;p<d;p++){const b=p*f-s;for(let y=0;y<u;y++){const E=y*h-o;_.push(E,-b,0),v.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const y=b+u*p,E=b+u*(p+1),U=b+1+u*(p+1),C=b+1+u*p;m.push(y,E,C),m.push(E,U,C)}this.setIndex(m),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
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
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e0=`#ifdef USE_IRIDESCENCE
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
#endif`,t0=`#ifdef USE_BUMPMAP
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,u0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
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
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,G0=`struct PhysicalMaterial {
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
}`,H0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define LAMBERT
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
}`,r_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,s_=`#define NORMAL
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
}`,a_=`#define NORMAL
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
}`,l_=`#define PHONG
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
}`,c_=`#define PHONG
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
}`,u_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,h_=`#define TOON
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
}`,p_=`uniform float size;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,v_=`uniform float rotation;
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
}`,x_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:km,alphahash_pars_fragment:Vm,alphamap_fragment:Wm,alphamap_pars_fragment:zm,alphatest_fragment:Xm,alphatest_pars_fragment:qm,aomap_fragment:Km,aomap_pars_fragment:Ym,batching_pars_vertex:$m,batching_vertex:Zm,begin_vertex:jm,beginnormal_vertex:Qm,bsdfs:Jm,iridescence_fragment:e0,bumpmap_pars_fragment:t0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:o0,color_fragment:s0,color_pars_fragment:a0,color_pars_vertex:l0,color_vertex:c0,common:u0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:d0,displacementmap_pars_vertex:h0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:_0,colorspace_pars_fragment:v0,envmap_fragment:x0,envmap_common_pars_fragment:S0,envmap_pars_fragment:M0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:N0,envmap_vertex:y0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:b0,fog_pars_fragment:w0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:D0,lights_pars_begin:O0,lights_toon_fragment:L0,lights_toon_pars_fragment:P0,lights_phong_fragment:U0,lights_phong_pars_fragment:F0,lights_physical_fragment:B0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:k0,lights_fragment_end:V0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:K0,map_pars_fragment:Y0,map_particle_fragment:$0,map_particle_pars_fragment:Z0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:J0,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:rg,normal_fragment_maps:og,normal_pars_fragment:sg,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:dg,iridescence_pars_fragment:hg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:_g,dithering_fragment:vg,dithering_pars_fragment:xg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:yg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:bg,skinning_pars_vertex:wg,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Ig,specularmap_pars_fragment:Dg,tonemapping_fragment:Og,tonemapping_pars_fragment:Ng,transmission_fragment:Lg,transmission_pars_fragment:Pg,uv_pars_fragment:Ug,uv_pars_vertex:Fg,uv_vertex:Bg,worldpos_vertex:Gg,background_vert:Hg,background_frag:kg,backgroundCube_vert:Vg,backgroundCube_frag:Wg,cube_vert:zg,cube_frag:Xg,depth_vert:qg,depth_frag:Kg,distanceRGBA_vert:Yg,distanceRGBA_frag:$g,equirect_vert:Zg,equirect_frag:jg,linedashed_vert:Qg,linedashed_frag:Jg,meshbasic_vert:e_,meshbasic_frag:t_,meshlambert_vert:n_,meshlambert_frag:i_,meshmatcap_vert:r_,meshmatcap_frag:o_,meshnormal_vert:s_,meshnormal_frag:a_,meshphong_vert:l_,meshphong_frag:c_,meshphysical_vert:u_,meshphysical_frag:f_,meshtoon_vert:d_,meshtoon_frag:h_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:__,sprite_vert:v_,sprite_frag:x_},se={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Zn={basic:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Vt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Vt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Vt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Vt([se.points,se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Vt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Vt([se.common,se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Vt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Vt([se.sprite,se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Vt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Vt([se.lights,se.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Zn.physical={uniforms:Vt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const fa={r:0,b:0,g:0},dr=new Gn,S_=new ht;function M_(t,e,n,i,r,o,s){const a=new we(0);let c=o===!0?0:1,u,d,h=null,f=0,m=null;function _(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?n:e).get(y)),y}function v(b){let y=!1;const E=_(b);E===null?p(a,c):E&&E.isColor&&(p(E,1),y=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(b,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===Qa)?(d===void 0&&(d=new W(new q(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Wo(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),dr.copy(y.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(dr)),d.material.toneMapped=Ze.getTransfer(E.colorSpace)!==it,(h!==E||f!==E.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=E,f=E.version,m=t.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new W(new el(2,2),new or({name:"BackgroundMaterial",uniforms:Wo(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,m=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function p(b,y){b.getRGB(fa,eh(t)),i.buffers.color.setClear(fa.r,fa.g,fa.b,y,s)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:g}}function E_(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(M,R,z,H,j){let Q=!1;const Y=h(H,z,R);o!==Y&&(o=Y,u(o.object)),Q=m(M,H,z,j),Q&&_(M,H,z,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,E(M,R,z,H),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function h(M,R,z){const H=z.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let Q=j[R.id];Q===void 0&&(Q={},j[R.id]=Q);let Y=Q[H];return Y===void 0&&(Y=f(c()),Q[H]=Y),Y}function f(M){const R=[],z=[],H=[];for(let j=0;j<n;j++)R[j]=0,z[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,R,z,H){const j=o.attributes,Q=R.attributes;let Y=0;const J=z.getAttributes();for(const k in J)if(J[k].location>=0){const he=j[k];let Te=Q[k];if(Te===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),he===void 0||he.attribute!==Te||Te&&he.data!==Te.data)return!0;Y++}return o.attributesNum!==Y||o.index!==H}function _(M,R,z,H){const j={},Q=R.attributes;let Y=0;const J=z.getAttributes();for(const k in J)if(J[k].location>=0){let he=Q[k];he===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Te={};Te.attribute=he,he&&he.data&&(Te.data=he.data),j[k]=Te,Y++}o.attributes=j,o.attributesNum=Y,o.index=H}function v(){const M=o.newAttributes;for(let R=0,z=M.length;R<z;R++)M[R]=0}function g(M){p(M,0)}function p(M,R){const z=o.newAttributes,H=o.enabledAttributes,j=o.attributeDivisors;z[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),j[M]!==R&&(t.vertexAttribDivisor(M,R),j[M]=R)}function b(){const M=o.newAttributes,R=o.enabledAttributes;for(let z=0,H=R.length;z<H;z++)R[z]!==M[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function y(M,R,z,H,j,Q,Y){Y===!0?t.vertexAttribIPointer(M,R,z,j,Q):t.vertexAttribPointer(M,R,z,H,j,Q)}function E(M,R,z,H){v();const j=H.attributes,Q=z.getAttributes(),Y=R.defaultAttributeValues;for(const J in Q){const k=Q[J];if(k.location>=0){let oe=j[J];if(oe===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const he=oe.normalized,Te=oe.itemSize,We=e.get(oe);if(We===void 0)continue;const st=We.buffer,K=We.type,ie=We.bytesPerElement,Me=K===t.INT||K===t.UNSIGNED_INT||oe.gpuType===_u;if(oe.isInterleavedBufferAttribute){const le=oe.data,Oe=le.stride,Ue=oe.offset;if(le.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)p(k.location+ze,le.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ze=0;ze<k.locationSize;ze++)g(k.location+ze);t.bindBuffer(t.ARRAY_BUFFER,st);for(let ze=0;ze<k.locationSize;ze++)y(k.location+ze,Te/k.locationSize,K,he,Oe*ie,(Ue+Te/k.locationSize*ze)*ie,Me)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)p(k.location+le,oe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<k.locationSize;le++)g(k.location+le);t.bindBuffer(t.ARRAY_BUFFER,st);for(let le=0;le<k.locationSize;le++)y(k.location+le,Te/k.locationSize,K,he,Te*ie,Te/k.locationSize*le*ie,Me)}}else if(Y!==void 0){const he=Y[J];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(k.location,he);break;case 3:t.vertexAttrib3fv(k.location,he);break;case 4:t.vertexAttrib4fv(k.location,he);break;default:t.vertexAttrib1fv(k.location,he)}}}}b()}function U(){P();for(const M in i){const R=i[M];for(const z in R){const H=R[z];for(const j in H)d(H[j].object),delete H[j];delete R[z]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const z in R){const H=R[z];for(const j in H)d(H[j].object),delete H[j];delete R[z]}delete i[M.id]}function w(M){for(const R in i){const z=i[R];if(z[M.id]===void 0)continue;const H=z[M.id];for(const j in H)d(H[j].object),delete H[j];delete z[M.id]}}function P(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function y_(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function c(u,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)s(u[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=d[v]*f[v];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function T_(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==Un&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ni&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wi&&!P)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:U,maxSamples:C}}function A_(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new gr,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=t.get(h);if(!r||_===null||_.length===0||o&&!g)o?d(null):u();else{const b=o?0:i,y=b*4;let E=p.clippingState||null;c.value=E,E=d(_,f,y,m);for(let U=0;U!==y;++U)E[U]=n[U];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const p=m+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,E=m;y!==v;++y,E+=4)s.copy(h[y]).applyMatrix4(b,a),s.normal.toArray(g,E),g[E+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function b_(t){let e=new WeakMap;function n(s,a){return a===yc?s.mapping=Go:a===Tc&&(s.mapping=Ho),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===yc||a===Tc)if(e.has(s)){const c=e.get(s).texture;return n(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const u=new Fm(c.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class rh extends th{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=4,Ef=[.125,.215,.35,.446,.526,.582],Er=20,Nl=new rh,yf=new we;let Ll=null,Pl=0,Ul=0,Fl=!1;const _r=(1+Math.sqrt(5))/2,_o=1/_r,Tf=[new D(-_r,_o,0),new D(_r,_o,0),new D(-_o,0,_r),new D(_o,0,_r),new D(0,_r,-_o),new D(0,_r,_o),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ll=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Pl,Ul),this._renderer.xr.enabled=Fl,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Go||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Bs,format:Un,colorSpace:Yo,depthBuffer:!1},r=bf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(o)),this._blurMaterial=R_(o,e,n)}return r}_compileMaterial(e){const n=new W(this._lodPlanes[0],e);this._renderer.compile(n,Nl)}_sceneToCubeUV(e,n,i,r){const a=new Jt(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(yf),d.toneMapping=er,d.autoClear=!1;const m=new gn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new W(new q,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(yf),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;da(r,b*y,p>2?y:0,y,y),d.setRenderTarget(r),v&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Go||e.mapping===Ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new W(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;da(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(s,Nl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Tf[(r-o-1)%Tf.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const c=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new W(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Er-1),v=o/_,g=isFinite(o)?1+Math.floor(d*v):Er;g>Er&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Er}`);const p=[];let b=0;for(let w=0;w<Er;++w){const P=w/v,T=Math.exp(-P*P/2);p.push(T),w===0?b+=T:w<g&&(b+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const E=this._sizeLods[r],U=3*E*(r>y-Ao?r-y+Ao:0),C=4*(this._cubeSize-E);da(n,U,C,3*E,2*E),c.setRenderTarget(n),c.render(h,Nl)}}function w_(t){const e=[],n=[],i=[];let r=t;const o=t-Ao+1+Ef.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let c=1/a;s>t-Ao?c=Ef[s-t+Ao-1]:s===0&&(c=0),i.push(c);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,v=3,g=2,p=1,b=new Float32Array(v*_*m),y=new Float32Array(g*_*m),E=new Float32Array(p*_*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,P=C>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];b.set(T,v*_*C),y.set(f,g*_*C);const M=[C,C,C,C,C,C];E.set(M,p*_*C)}const U=new yn;U.setAttribute("position",new Bn(b,v)),U.setAttribute("uv",new Bn(y,g)),U.setAttribute("faceIndex",new Bn(E,p)),e.push(U),r>Ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bf(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function R_(t,e,n){const i=new Float32Array(Er),r=new D(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function wf(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Rf(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function C_(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===yc||c===Tc,d=c===Go||c===Ho;if(u||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Af(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Af(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let c=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&c++;return c===u}function o(a){const c=a.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function I_(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ms("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function D_(t,e,n,i){const r={},o=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let g=0,p=v.length;g<p;g++)e.update(v[g],t.ARRAY_BUFFER)}}function u(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let y=0,E=b.length;y<E;y+=3){const U=b[y+0],C=b[y+1],w=b[y+2];f.push(U,C,C,w,w,U)}}else if(_!==void 0){const b=_.array;v=_.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const U=y+0,C=y+1,w=y+2;f.push(U,C,C,w,w,U)}}else return;const g=new(Kd(f)?Jd:Qd)(f,1);g.version=v;const p=o.get(h);p&&e.remove(p),o.set(h,g)}function d(h){const f=o.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function O_(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,m){t.drawElements(i,m,o,f*s),n.update(m,i,1)}function u(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,o,f*s,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,f,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];n.update(g,i,1)}function h(f,m,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)u(f[p]/s,m[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,o,f,0,v,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b]*v[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function N_(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function L_(t,e,n){const i=new WeakMap,r=new ot;function o(s,a,c){const u=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),g===!0&&(E=3);let U=a.attributes.position.count*E,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*C*4*h),P=new $d(w,U,C,h);P.type=wi,P.needsUpdate=!0;const T=E*4;for(let R=0;R<h;R++){const z=p[R],H=b[R],j=y[R],Q=U*C*4*R;for(let Y=0;Y<z.count;Y++){const J=Y*T;_===!0&&(r.fromBufferAttribute(z,Y),w[Q+J+0]=r.x,w[Q+J+1]=r.y,w[Q+J+2]=r.z,w[Q+J+3]=0),v===!0&&(r.fromBufferAttribute(H,Y),w[Q+J+4]=r.x,w[Q+J+5]=r.y,w[Q+J+6]=r.z,w[Q+J+7]=0),g===!0&&(r.fromBufferAttribute(j,Y),w[Q+J+8]=r.x,w[Q+J+9]=r.y,w[Q+J+10]=r.z,w[Q+J+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new Je(U,C)},i.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function P_(t,e,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function s(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class oh extends Yt{constructor(e,n,i,r,o,s,a,c,u,d=Lo){if(d!==Lo&&d!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Lo&&(i=Qr),i===void 0&&d===Vo&&(i=ko),super(null,r,o,s,a,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sh=new Yt,Cf=new oh(1,1),ah=new $d,lh=new Mm,ch=new nh,If=[],Df=[],Of=new Float32Array(16),Nf=new Float32Array(9),Lf=new Float32Array(4);function jo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=If[r];if(o===void 0&&(o=new Float32Array(r),If[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tl(t,e){let n=Df[e];n===void 0&&(n=new Int32Array(e),Df[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function U_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function F_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function B_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function G_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function H_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;Lf.set(i),t.uniformMatrix2fv(this.addr,!1,Lf),Rt(n,i)}}function k_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;Nf.set(i),t.uniformMatrix3fv(this.addr,!1,Nf),Rt(n,i)}}function V_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;Of.set(i),t.uniformMatrix4fv(this.addr,!1,Of),Rt(n,i)}}function W_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function z_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function X_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function q_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function K_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Y_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function $_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function Z_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function j_(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Cf.compareFunction=qd,o=Cf):o=sh,n.setTexture2D(e||o,r)}function Q_(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lh,r)}function J_(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ch,r)}function ev(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ah,r)}function tv(t){switch(t){case 5126:return U_;case 35664:return F_;case 35665:return B_;case 35666:return G_;case 35674:return H_;case 35675:return k_;case 35676:return V_;case 5124:case 35670:return W_;case 35667:case 35671:return z_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return K_;case 36294:return Y_;case 36295:return $_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return ev}}function nv(t,e){t.uniform1fv(this.addr,e)}function iv(t,e){const n=jo(e,this.size,2);t.uniform2fv(this.addr,n)}function rv(t,e){const n=jo(e,this.size,3);t.uniform3fv(this.addr,n)}function ov(t,e){const n=jo(e,this.size,4);t.uniform4fv(this.addr,n)}function sv(t,e){const n=jo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function av(t,e){const n=jo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lv(t,e){const n=jo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cv(t,e){t.uniform1iv(this.addr,e)}function uv(t,e){t.uniform2iv(this.addr,e)}function fv(t,e){t.uniform3iv(this.addr,e)}function dv(t,e){t.uniform4iv(this.addr,e)}function hv(t,e){t.uniform1uiv(this.addr,e)}function pv(t,e){t.uniform2uiv(this.addr,e)}function mv(t,e){t.uniform3uiv(this.addr,e)}function gv(t,e){t.uniform4uiv(this.addr,e)}function _v(t,e,n){const i=this.cache,r=e.length,o=tl(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||sh,o[s])}function vv(t,e,n){const i=this.cache,r=e.length,o=tl(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||lh,o[s])}function xv(t,e,n){const i=this.cache,r=e.length,o=tl(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||ch,o[s])}function Sv(t,e,n){const i=this.cache,r=e.length,o=tl(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||ah,o[s])}function Mv(t){switch(t){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return ov;case 35674:return sv;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return uv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return hv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return Sv}}class Ev{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tv(n.type)}}class yv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mv(n.type)}}class Tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Pf(t,e){t.seq.push(e),t.map[e.id]=e}function Av(t,e,n){const i=t.name,r=i.length;for(Bl.lastIndex=0;;){const o=Bl.exec(i),s=Bl.lastIndex;let a=o[1];const c=o[2]==="]",u=o[3];if(c&&(a=a|0),u===void 0||u==="["&&s+2===r){Pf(n,u===void 0?new Ev(a,t,e):new yv(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Tv(a),Pf(n,h)),n=h}}}class Na{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);Av(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Uf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bv=37297;let wv=0;function Rv(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Ff=new He;function Cv(t){Ze._getMatrix(Ff,Ze.workingColorSpace,t);const e=`mat3( ${Ff.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Ja:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Bf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Rv(t.getShaderSource(e),s)}else return r}function Iv(t,e){const n=Cv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Dv(t,e){let n;switch(e){case Np:n="Linear";break;case Lp:n="Reinhard";break;case Pp:n="Cineon";break;case Up:n="ACESFilmic";break;case Bp:n="AgX";break;case Gp:n="Neutral";break;case Fp:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ha=new D;function Ov(){Ze.getLuminanceCoefficients(ha);const t=ha.x.toFixed(4),e=ha.y.toFixed(4),n=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Lv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Pv(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function gs(t){return t!==""}function Gf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(t){return t.replace(Uv,Bv)}const Fv=new Map;function Bv(t,e){let n=Ve[e];if(n===void 0){const i=Fv.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(n)}const Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(t){return t.replace(Gv,Hv)}function Hv(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Vf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function kv(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dp?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vv(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Go:case Ho:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function zv(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case gu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case Op:e="ENVMAP_BLENDING_ADD";break}return e}function Xv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function qv(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const c=kv(n),u=Vv(n),d=Wv(n),h=zv(n),f=Xv(n),m=Nv(n),_=Lv(o),v=r.createProgram();let g,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(g=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?Ve.tonemapping_pars_fragment:"",n.toneMapping!==er?Dv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Iv("linearToOutputTexel",n.outputColorSpace),Ov(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),s=Jc(s),s=Gf(s,n),s=Hf(s,n),a=Jc(a),a=Gf(a,n),a=Hf(a,n),s=kf(s),a=kf(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+g+s,E=b+p+a,U=Uf(r,r.VERTEX_SHADER,y),C=Uf(r,r.FRAGMENT_SHADER,E);r.attachShader(v,U),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(R){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(U).trim(),j=r.getShaderInfoLog(C).trim();let Q=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,U,C);else{const J=Bf(r,U,"vertex"),k=Bf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+J+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||j==="")&&(Y=!1);Y&&(R.diagnostics={runnable:Q,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:j,prefix:p}})}r.deleteShader(U),r.deleteShader(C),P=new Na(r,v),T=Pv(r,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,bv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=C,this}let Kv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $v(e),n.set(e,i)),i}}class $v{constructor(e){this.id=Kv++,this.code=e,this.usedTimes=0}}function Zv(t,e,n,i,r,o,s){const a=new Zd,c=new Yv,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,M,R,z,H){const j=z.fog,Q=H.geometry,Y=T.isMeshStandardMaterial?z.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),k=J&&J.mapping===Qa?J.image.height:null,oe=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Te=he!==void 0?he.length:0;let We=0;Q.morphAttributes.position!==void 0&&(We=1),Q.morphAttributes.normal!==void 0&&(We=2),Q.morphAttributes.color!==void 0&&(We=3);let st,K,ie,Me;if(oe){const nt=Zn[oe];st=nt.vertexShader,K=nt.fragmentShader}else st=T.vertexShader,K=T.fragmentShader,c.update(T),ie=c.getVertexShaderID(T),Me=c.getFragmentShaderID(T);const le=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Ue=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,gt=!!T.map,Ye=!!T.matcap,St=!!J,L=!!T.aoMap,_n=!!T.lightMap,Xe=!!T.bumpMap,qe=!!T.normalMap,Ce=!!T.displacementMap,ut=!!T.emissiveMap,Re=!!T.metalnessMap,A=!!T.roughnessMap,x=T.anisotropy>0,F=T.clearcoat>0,$=T.dispersion>0,ee=T.iridescence>0,X=T.sheen>0,Ee=T.transmission>0,ce=x&&!!T.anisotropyMap,me=F&&!!T.clearcoatMap,$e=F&&!!T.clearcoatNormalMap,te=F&&!!T.clearcoatRoughnessMap,ge=ee&&!!T.iridescenceMap,Ie=ee&&!!T.iridescenceThicknessMap,Le=X&&!!T.sheenColorMap,_e=X&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,ke=!!T.specularColorMap,lt=!!T.specularIntensityMap,I=Ee&&!!T.transmissionMap,ae=Ee&&!!T.thicknessMap,V=!!T.gradientMap,Z=!!T.alphaMap,de=T.alphaTest>0,ue=!!T.alphaHash,Fe=!!T.extensions;let vt=er;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Ut={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:st,fragmentShader:K,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Yo,alphaToCoverage:!!T.alphaToCoverage,map:gt,matcap:Ye,envMap:St,envMapMode:St&&J.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:_n,bumpMap:Xe,normalMap:qe,displacementMap:f&&Ce,emissiveMap:ut,normalMapObjectSpace:qe&&T.normalMapType===Wp,normalMapTangentSpace:qe&&T.normalMapType===yu,metalnessMap:Re,roughnessMap:A,anisotropy:x,anisotropyMap:ce,clearcoat:F,clearcoatMap:me,clearcoatNormalMap:$e,clearcoatRoughnessMap:te,dispersion:$,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Ie,sheen:X,sheenColorMap:Le,sheenRoughnessMap:_e,specularMap:Ke,specularColorMap:ke,specularIntensityMap:lt,transmission:Ee,transmissionMap:I,thicknessMap:ae,gradientMap:V,opaque:T.transparent===!1&&T.blending===No&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:ue,combine:T.combine,mapUv:gt&&v(T.map.channel),aoMapUv:L&&v(T.aoMap.channel),lightMapUv:_n&&v(T.lightMap.channel),bumpMapUv:Xe&&v(T.bumpMap.channel),normalMapUv:qe&&v(T.normalMap.channel),displacementMapUv:Ce&&v(T.displacementMap.channel),emissiveMapUv:ut&&v(T.emissiveMap.channel),metalnessMapUv:Re&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:ce&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(T.sheenRoughnessMap.channel),specularMapUv:Ke&&v(T.specularMap.channel),specularColorMapUv:ke&&v(T.specularColorMap.channel),specularIntensityMapUv:lt&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:ae&&v(T.thicknessMap.channel),alphaMapUv:Z&&v(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(qe||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(gt||Z),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Oe,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:gt&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===it,decodeVideoTextureEmissive:ut&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===it,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ln,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ut.vertexUv1s=u.has(1),Ut.vertexUv2s=u.has(2),Ut.vertexUv3s=u.has(3),u.clear(),Ut}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)M.push(R),M.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(b(M,T),y(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const M=_[T.type];let R;if(M){const z=Zn[M];R=Nm.clone(z.uniforms)}else R=T.uniforms;return R}function U(T,M){let R;for(let z=0,H=d.length;z<H;z++){const j=d[z];if(j.cacheKey===M){R=j,++R.usedTimes;break}}return R===void 0&&(R=new qv(t,M,T,o),d.push(R)),R}function C(T){if(--T.usedTimes===0){const M=d.indexOf(T);d[M]=d[d.length-1],d.pop(),T.destroy()}}function w(T){c.remove(T)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:U,releaseProgram:C,releaseShaderCache:w,programs:d,dispose:P}}function jv(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,c){t.get(s)[a]=c}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function Qv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zf(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,f,m,_,v,g){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},t[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,f,m,_,v,g){const p=s(h,f,m,_,v,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(h,f,m,_,v,g){const p=s(h,f,m,_,v,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function u(h,f){n.length>1&&n.sort(h||Qv),i.length>1&&i.sort(f||Wf),r.length>1&&r.sort(f||Wf)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:d,sort:u}}function Jv(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new zf,t.set(i,[s])):r>=o.length?(s=new zf,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function ex(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new we};break;case"SpotLight":n={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function tx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nx=0;function ix(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rx(t){const e=new ex,n=tx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,o=new ht,s=new ht;function a(u){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,b=0,y=0,E=0,U=0,C=0,w=0;u.sort(ix);for(let T=0,M=u.length;T<M;T++){const R=u[T],z=R.color,H=R.intensity,j=R.distance,Q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=z.r*H,h+=z.g*H,f+=z.b*H;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],H);w++}else if(R.isDirectionalLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,k=n.get(R);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=Y,m++}else if(R.isSpotLight){const Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(z).multiplyScalar(H),Y.distance=j,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[v]=Y;const J=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,J.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[v]=J.matrix,R.castShadow){const k=n.get(R);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=Q,E++}v++}else if(R.isRectAreaLight){const Y=e.get(R);Y.color.copy(z).multiplyScalar(H),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=Y,g++}else if(R.isPointLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const J=R.shadow,k=n.get(R);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=R.shadow.matrix,y++}i.point[_]=Y,_++}else if(R.isHemisphereLight){const Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(H),Y.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[p]=Y,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==y||P.numSpotShadows!==E||P.numSpotMaps!==U||P.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,P.directionalLength=m,P.pointLength=_,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=y,P.numSpotShadows=E,P.numSpotMaps=U,P.numLightProbes=w,i.version=nx++)}function c(u,d){let h=0,f=0,m=0,_=0,v=0;const g=d.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const y=u[p];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),h++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),s.identity(),o.copy(y.matrixWorld),o.premultiply(g),s.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Xf(t){const e=new rx(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function ox(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Xf(t),e.set(r,[a])):o>=s.length?(a=new Xf(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class sx extends sr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends sr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
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
}`;function ux(t,e,n){let i=new bu;const r=new Je,o=new Je,s=new ot,a=new sx({depthPacking:Vp}),c=new ax,u={},d=n.maxTextureSize,h={[rr]:rn,[rn]:rr,[Ln]:Ln},f=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new W(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(C,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ji),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==vi&&this.type===vi,j=p===vi&&this.type!==vi;for(let Q=0,Y=C.length;Q<Y;Q++){const J=C[Q],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const oe=k.getFrameExtents();if(r.multiply(oe),o.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/oe.x),r.x=o.x*oe.x,k.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/oe.y),r.y=o.y*oe.y,k.mapSize.y=o.y)),k.map===null||H===!0||j===!0){const Te=this.type!==vi?{minFilter:pn,magFilter:pn}:{};k.map!==null&&k.map.dispose(),k.map=new Jr(r.x,r.y,Te),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const he=k.getViewportCount();for(let Te=0;Te<he;Te++){const We=k.getViewport(Te);s.set(o.x*We.x,o.y*We.y,o.x*We.z,o.y*We.w),z.viewport(s),k.updateMatrices(J,Te),i=k.getFrustum(),E(w,P,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===vi&&b(k,P),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(T,M,R)};function b(C,w){const P=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,P,f,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,P,m,v,null)}function y(C,w,P,T){let M=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=M.uuid,H=w.uuid;let j=u[z];j===void 0&&(j={},u[z]=j);let Q=j[H];Q===void 0&&(Q=M.clone(),j[H]=Q,w.addEventListener("dispose",U)),M=Q}if(M.visible=w.visible,M.wireframe=w.wireframe,T===vi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=P}return M}function E(C,w,P,T,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===vi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const H=e.update(C),j=C.material;if(Array.isArray(j)){const Q=H.groups;for(let Y=0,J=Q.length;Y<J;Y++){const k=Q[Y],oe=j[k.materialIndex];if(oe&&oe.visible){const he=y(C,oe,T,M);C.onBeforeShadow(t,C,w,P,H,he,k),t.renderBufferDirect(P,null,H,he,C,k),C.onAfterShadow(t,C,w,P,H,he,k)}}}else if(j.visible){const Q=y(C,j,T,M);C.onBeforeShadow(t,C,w,P,H,Q,null),t.renderBufferDirect(P,null,H,Q,C,null),C.onAfterShadow(t,C,w,P,H,Q,null)}}const z=C.children;for(let H=0,j=z.length;H<j;H++)E(z[H],w,P,T,M)}function U(C){C.target.removeEventListener("dispose",U);for(const P in u){const T=u[P],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const fx={[gc]:_c,[vc]:Mc,[xc]:Ec,[Bo]:Sc,[_c]:gc,[Mc]:vc,[Ec]:xc,[Sc]:Bo};function dx(t,e){function n(){let I=!1;const ae=new ot;let V=null;const Z=new ot(0,0,0,0);return{setMask:function(de){V!==de&&!I&&(t.colorMask(de,de,de,de),V=de)},setLocked:function(de){I=de},setClear:function(de,ue,Fe,vt,Ut){Ut===!0&&(de*=vt,ue*=vt,Fe*=vt),ae.set(de,ue,Fe,vt),Z.equals(ae)===!1&&(t.clearColor(de,ue,Fe,vt),Z.copy(ae))},reset:function(){I=!1,V=null,Z.set(-1,0,0,0)}}}function i(){let I=!1,ae=!1,V=null,Z=null,de=null;return{setReversed:function(ue){if(ae!==ue){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const vt=de;de=null,this.setClear(vt)}ae=ue},getReversed:function(){return ae},setTest:function(ue){ue?le(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(ue){V!==ue&&!I&&(t.depthMask(ue),V=ue)},setFunc:function(ue){if(ae&&(ue=fx[ue]),Z!==ue){switch(ue){case gc:t.depthFunc(t.NEVER);break;case _c:t.depthFunc(t.ALWAYS);break;case vc:t.depthFunc(t.LESS);break;case Bo:t.depthFunc(t.LEQUAL);break;case xc:t.depthFunc(t.EQUAL);break;case Sc:t.depthFunc(t.GEQUAL);break;case Mc:t.depthFunc(t.GREATER);break;case Ec:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ue}},setLocked:function(ue){I=ue},setClear:function(ue){de!==ue&&(ae&&(ue=1-ue),t.clearDepth(ue),de=ue)},reset:function(){I=!1,V=null,Z=null,de=null,ae=!1}}}function r(){let I=!1,ae=null,V=null,Z=null,de=null,ue=null,Fe=null,vt=null,Ut=null;return{setTest:function(nt){I||(nt?le(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!I&&(t.stencilMask(nt),ae=nt)},setFunc:function(nt,Tn,ui){(V!==nt||Z!==Tn||de!==ui)&&(t.stencilFunc(nt,Tn,ui),V=nt,Z=Tn,de=ui)},setOp:function(nt,Tn,ui){(ue!==nt||Fe!==Tn||vt!==ui)&&(t.stencilOp(nt,Tn,ui),ue=nt,Fe=Tn,vt=ui)},setLocked:function(nt){I=nt},setClear:function(nt){Ut!==nt&&(t.clearStencil(nt),Ut=nt)},reset:function(){I=!1,ae=null,V=null,Z=null,de=null,ue=null,Fe=null,vt=null,Ut=null}}}const o=new n,s=new i,a=new r,c=new WeakMap,u=new WeakMap;let d={},h={},f=new WeakMap,m=[],_=null,v=!1,g=null,p=null,b=null,y=null,E=null,U=null,C=null,w=new we(0,0,0),P=0,T=!1,M=null,R=null,z=null,H=null,j=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=J>=2);let oe=null,he={};const Te=t.getParameter(t.SCISSOR_BOX),We=t.getParameter(t.VIEWPORT),st=new ot().fromArray(Te),K=new ot().fromArray(We);function ie(I,ae,V,Z){const de=new Uint8Array(4),ue=t.createTexture();t.bindTexture(I,ue),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<V;Fe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ae+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ue}const Me={};Me[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc(Bo),Xe(!1),qe(Ku),le(t.CULL_FACE),L(Ji);function le(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Oe(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Ue(I,ae){return h[I]!==ae?(t.bindFramebuffer(I,ae),h[I]=ae,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ae),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function ze(I,ae){let V=m,Z=!1;if(I){V=f.get(ae),V===void 0&&(V=[],f.set(ae,V));const de=I.textures;if(V.length!==de.length||V[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Fe=de.length;ue<Fe;ue++)V[ue]=t.COLOR_ATTACHMENT0+ue;V.length=de.length,Z=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,Z=!0);Z&&t.drawBuffers(V)}function gt(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const Ye={[Mr]:t.FUNC_ADD,[pp]:t.FUNC_SUBTRACT,[mp]:t.FUNC_REVERSE_SUBTRACT};Ye[gp]=t.MIN,Ye[_p]=t.MAX;const St={[vp]:t.ZERO,[xp]:t.ONE,[Sp]:t.SRC_COLOR,[pc]:t.SRC_ALPHA,[bp]:t.SRC_ALPHA_SATURATE,[Tp]:t.DST_COLOR,[Ep]:t.DST_ALPHA,[Mp]:t.ONE_MINUS_SRC_COLOR,[mc]:t.ONE_MINUS_SRC_ALPHA,[Ap]:t.ONE_MINUS_DST_COLOR,[yp]:t.ONE_MINUS_DST_ALPHA,[wp]:t.CONSTANT_COLOR,[Rp]:t.ONE_MINUS_CONSTANT_COLOR,[Cp]:t.CONSTANT_ALPHA,[Ip]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,ae,V,Z,de,ue,Fe,vt,Ut,nt){if(I===Ji){v===!0&&(Oe(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),I!==hp){if(I!==g||nt!==T){if((p!==Mr||E!==Mr)&&(t.blendEquation(t.FUNC_ADD),p=Mr,E=Mr),nt)switch(I){case No:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.ONE,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case No:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,U=null,C=null,w.set(0,0,0),P=0,g=I,T=nt}return}de=de||ae,ue=ue||V,Fe=Fe||Z,(ae!==p||de!==E)&&(t.blendEquationSeparate(Ye[ae],Ye[de]),p=ae,E=de),(V!==b||Z!==y||ue!==U||Fe!==C)&&(t.blendFuncSeparate(St[V],St[Z],St[ue],St[Fe]),b=V,y=Z,U=ue,C=Fe),(vt.equals(w)===!1||Ut!==P)&&(t.blendColor(vt.r,vt.g,vt.b,Ut),w.copy(vt),P=Ut),g=I,T=!1}function _n(I,ae){I.side===Ln?Oe(t.CULL_FACE):le(t.CULL_FACE);let V=I.side===rn;ae&&(V=!V),Xe(V),I.blending===No&&I.transparent===!1?L(Ji):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function qe(I){I!==up?(le(t.CULL_FACE),I!==R&&(I===Ku?t.cullFace(t.BACK):I===fp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),R=I}function Ce(I){I!==z&&(Y&&t.lineWidth(I),z=I)}function ut(I,ae,V){I?(le(t.POLYGON_OFFSET_FILL),(H!==ae||j!==V)&&(t.polygonOffset(ae,V),H=ae,j=V)):Oe(t.POLYGON_OFFSET_FILL)}function Re(I){I?le(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+Q-1),oe!==I&&(t.activeTexture(I),oe=I)}function x(I,ae,V){V===void 0&&(oe===null?V=t.TEXTURE0+Q-1:V=oe);let Z=he[V];Z===void 0&&(Z={type:void 0,texture:void 0},he[V]=Z),(Z.type!==I||Z.texture!==ae)&&(oe!==V&&(t.activeTexture(V),oe=V),t.bindTexture(I,ae||Me[I]),Z.type=I,Z.texture=ae)}function F(){const I=he[oe];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){st.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function _e(I){K.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Ke(I,ae){let V=u.get(ae);V===void 0&&(V=new WeakMap,u.set(ae,V));let Z=V.get(I);Z===void 0&&(Z=t.getUniformBlockIndex(ae,I.name),V.set(I,Z))}function ke(I,ae){const Z=u.get(ae).get(I);c.get(ae)!==Z&&(t.uniformBlockBinding(ae,Z,I.__bindingPointIndex),c.set(ae,Z))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},oe=null,he={},h={},f=new WeakMap,m=[],_=null,v=!1,g=null,p=null,b=null,y=null,E=null,U=null,C=null,w=new we(0,0,0),P=0,T=!1,M=null,R=null,z=null,H=null,j=null,st.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:le,disable:Oe,bindFramebuffer:Ue,drawBuffers:ze,useProgram:gt,setBlending:L,setMaterial:_n,setFlipSided:Xe,setCullFace:qe,setLineWidth:Ce,setPolygonOffset:ut,setScissorTest:Re,activeTexture:A,bindTexture:x,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:ke,texStorage2D:$e,texStorage3D:te,texSubImage2D:X,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Le,viewport:_e,reset:lt}}function qf(t,e,n,i){const r=hx(i);switch(n){case Gd:return t*e;case kd:return t*e;case Vd:return t*e*2;case Wd:return t*e/r.components*r.byteLength;case Su:return t*e/r.components*r.byteLength;case zd:return t*e*2/r.components*r.byteLength;case Mu:return t*e*2/r.components*r.byteLength;case Hd:return t*e*3/r.components*r.byteLength;case Un:return t*e*4/r.components*r.byteLength;case Eu:return t*e*4/r.components*r.byteLength;case wa:case Ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ia:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Ic:return Math.max(t,16)*Math.max(e,8)/4;case wc:case Cc:return Math.max(t,8)*Math.max(e,8)/2;case Dc:case Oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Da:case Yc:case $c:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xd:case Zc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jc:case Qc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hx(t){switch(t){case Ni:case Ud:return{byteLength:1,components:1};case Ds:case Fd:case Bs:return{byteLength:2,components:1};case vu:case xu:return{byteLength:2,components:4};case Qr:case _u:case wi:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function px(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):Ga("canvas")}function v(A,x,F){let $=1;const ee=Re(A);if((ee.width>F||ee.height>F)&&($=F/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor($*ee.width),Ee=Math.floor($*ee.height);h===void 0&&(h=_(X,Ee));const ce=x?_(X,Ee):h;return ce.width=X,ce.height=Ee,ce.getContext("2d").drawImage(A,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+Ee+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){t.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,x,F,$,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===t.RED&&(F===t.FLOAT&&(X=t.R32F),F===t.HALF_FLOAT&&(X=t.R16F),F===t.UNSIGNED_BYTE&&(X=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.R8UI),F===t.UNSIGNED_SHORT&&(X=t.R16UI),F===t.UNSIGNED_INT&&(X=t.R32UI),F===t.BYTE&&(X=t.R8I),F===t.SHORT&&(X=t.R16I),F===t.INT&&(X=t.R32I)),x===t.RG&&(F===t.FLOAT&&(X=t.RG32F),F===t.HALF_FLOAT&&(X=t.RG16F),F===t.UNSIGNED_BYTE&&(X=t.RG8)),x===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.RG8UI),F===t.UNSIGNED_SHORT&&(X=t.RG16UI),F===t.UNSIGNED_INT&&(X=t.RG32UI),F===t.BYTE&&(X=t.RG8I),F===t.SHORT&&(X=t.RG16I),F===t.INT&&(X=t.RG32I)),x===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.RGB8UI),F===t.UNSIGNED_SHORT&&(X=t.RGB16UI),F===t.UNSIGNED_INT&&(X=t.RGB32UI),F===t.BYTE&&(X=t.RGB8I),F===t.SHORT&&(X=t.RGB16I),F===t.INT&&(X=t.RGB32I)),x===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),F===t.UNSIGNED_INT&&(X=t.RGBA32UI),F===t.BYTE&&(X=t.RGBA8I),F===t.SHORT&&(X=t.RGBA16I),F===t.INT&&(X=t.RGBA32I)),x===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),x===t.RGBA){const Ee=ee?Ja:Ze.getTransfer($);F===t.FLOAT&&(X=t.RGBA32F),F===t.HALF_FLOAT&&(X=t.RGBA16F),F===t.UNSIGNED_BYTE&&(X=Ee===it?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(A,x){let F;return A?x===null||x===Qr||x===ko?F=t.DEPTH24_STENCIL8:x===wi?F=t.DEPTH32F_STENCIL8:x===Ds&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qr||x===ko?F=t.DEPTH_COMPONENT24:x===wi?F=t.DEPTH_COMPONENT32F:x===Ds&&(F=t.DEPTH_COMPONENT16),F}function U(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==pn&&A.minFilter!==ni?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),P(x),x.isVideoTexture&&d.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),M(x)}function P(A){const x=i.get(A);if(x.__webglInit===void 0)return;const F=A.source,$=f.get(F);if($){const ee=$[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(A),Object.keys($).length===0&&f.delete(F)}i.remove(A)}function T(A){const x=i.get(A);t.deleteTexture(x.__webglTexture);const F=A.source,$=f.get(F);delete $[x.__cacheKey],s.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ee=0;ee<x.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)t.deleteFramebuffer(x.__webglFramebuffer[$]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let $=0,ee=F.length;$<ee;$++){const X=i.get(F[$]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(F[$])}i.remove(A)}let R=0;function z(){R=0}function H(){const A=R;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function j(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Q(A,x){const F=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,A,x);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function Y(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){K(F,A,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function J(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){K(F,A,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function k(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){ie(F,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}const oe={[Ac]:t.REPEAT,[Cr]:t.CLAMP_TO_EDGE,[bc]:t.MIRRORED_REPEAT},he={[pn]:t.NEAREST,[Hp]:t.NEAREST_MIPMAP_NEAREST,[Ks]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[dl]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},Te={[zp]:t.NEVER,[Zp]:t.ALWAYS,[Xp]:t.LESS,[qd]:t.LEQUAL,[qp]:t.EQUAL,[$p]:t.GEQUAL,[Kp]:t.GREATER,[Yp]:t.NOTEQUAL};function We(A,x){if(x.type===wi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ni||x.magFilter===dl||x.magFilter===Ks||x.magFilter===Ir||x.minFilter===ni||x.minFilter===dl||x.minFilter===Ks||x.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,oe[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,oe[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,oe[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,he[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==Ks&&x.minFilter!==Ir||x.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const $=x.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const X=j(x);if(X!==A.__cacheKey){ee[X]===void 0&&(ee[X]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),ee[X].usedTimes++;const Ee=ee[A.__cacheKey];Ee!==void 0&&(ee[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(x)),A.__cacheKey=X,A.__webglTexture=ee[X].texture}return F}function K(A,x,F){let $=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=t.TEXTURE_3D);const ee=st(A,x),X=x.source;n.bindTexture($,A.__webglTexture,t.TEXTURE0+F);const Ee=i.get(X);if(X.version!==Ee.__version||ee===!0){n.activeTexture(t.TEXTURE0+F);const ce=Ze.getPrimaries(Ze.workingColorSpace),me=x.colorSpace===ji?null:Ze.getPrimaries(x.colorSpace),$e=x.colorSpace===ji||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let te=v(x.image,!1,r.maxTextureSize);te=ut(x,te);const ge=o.convert(x.format,x.colorSpace),Ie=o.convert(x.type);let Le=y(x.internalFormat,ge,Ie,x.colorSpace,x.isVideoTexture);We($,x);let _e;const Ke=x.mipmaps,ke=x.isVideoTexture!==!0,lt=Ee.__version===void 0||ee===!0,I=X.dataReady,ae=U(x,te);if(x.isDepthTexture)Le=E(x.format===Vo,x.type),lt&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Le,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Le,te.width,te.height,0,ge,Ie,null));else if(x.isDataTexture)if(Ke.length>0){ke&&lt&&n.texStorage2D(t.TEXTURE_2D,ae,Le,Ke[0].width,Ke[0].height);for(let V=0,Z=Ke.length;V<Z;V++)_e=Ke[V],ke?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,V,Le,_e.width,_e.height,0,ge,Ie,_e.data);x.generateMipmaps=!1}else ke?(lt&&n.texStorage2D(t.TEXTURE_2D,ae,Le,te.width,te.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,ge,Ie,te.data)):n.texImage2D(t.TEXTURE_2D,0,Le,te.width,te.height,0,ge,Ie,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Le,Ke[0].width,Ke[0].height,te.depth);for(let V=0,Z=Ke.length;V<Z;V++)if(_e=Ke[V],x.format!==Un)if(ge!==null)if(ke){if(I)if(x.layerUpdates.size>0){const de=qf(_e.width,_e.height,x.format,x.type);for(const ue of x.layerUpdates){const Fe=_e.data.subarray(ue*de/_e.data.BYTES_PER_ELEMENT,(ue+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,ue,_e.width,_e.height,1,ge,Fe)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,te.depth,ge,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Le,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,te.depth,ge,Ie,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Le,_e.width,_e.height,te.depth,0,ge,Ie,_e.data)}else{ke&&lt&&n.texStorage2D(t.TEXTURE_2D,ae,Le,Ke[0].width,Ke[0].height);for(let V=0,Z=Ke.length;V<Z;V++)_e=Ke[V],x.format!==Un?ge!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,V,Le,_e.width,_e.height,0,ge,Ie,_e.data)}else if(x.isDataArrayTexture)if(ke){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Le,te.width,te.height,te.depth),I)if(x.layerUpdates.size>0){const V=qf(te.width,te.height,x.format,x.type);for(const Z of x.layerUpdates){const de=te.data.subarray(Z*V/te.data.BYTES_PER_ELEMENT,(Z+1)*V/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,ge,Ie,de)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Ie,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,ge,Ie,te.data);else if(x.isData3DTexture)ke?(lt&&n.texStorage3D(t.TEXTURE_3D,ae,Le,te.width,te.height,te.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Ie,te.data)):n.texImage3D(t.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,ge,Ie,te.data);else if(x.isFramebufferTexture){if(lt)if(ke)n.texStorage2D(t.TEXTURE_2D,ae,Le,te.width,te.height);else{let V=te.width,Z=te.height;for(let de=0;de<ae;de++)n.texImage2D(t.TEXTURE_2D,de,Le,V,Z,0,ge,Ie,null),V>>=1,Z>>=1}}else if(Ke.length>0){if(ke&&lt){const V=Re(Ke[0]);n.texStorage2D(t.TEXTURE_2D,ae,Le,V.width,V.height)}for(let V=0,Z=Ke.length;V<Z;V++)_e=Ke[V],ke?I&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge,Ie,_e):n.texImage2D(t.TEXTURE_2D,V,Le,ge,Ie,_e);x.generateMipmaps=!1}else if(ke){if(lt){const V=Re(te);n.texStorage2D(t.TEXTURE_2D,ae,Le,V.width,V.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ie,te)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Ie,te);g(x)&&p($),Ee.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ie(A,x,F){if(x.image.length!==6)return;const $=st(A,x),ee=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const X=i.get(ee);if(ee.version!==X.__version||$===!0){n.activeTexture(t.TEXTURE0+F);const Ee=Ze.getPrimaries(Ze.workingColorSpace),ce=x.colorSpace===ji?null:Ze.getPrimaries(x.colorSpace),me=x.colorSpace===ji||Ee===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!$e&&!te?ge[Z]=v(x.image[Z],!0,r.maxCubemapSize):ge[Z]=te?x.image[Z].image:x.image[Z],ge[Z]=ut(x,ge[Z]);const Ie=ge[0],Le=o.convert(x.format,x.colorSpace),_e=o.convert(x.type),Ke=y(x.internalFormat,Le,_e,x.colorSpace),ke=x.isVideoTexture!==!0,lt=X.__version===void 0||$===!0,I=ee.dataReady;let ae=U(x,Ie);We(t.TEXTURE_CUBE_MAP,x);let V;if($e){ke&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Ke,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){V=ge[Z].mipmaps;for(let de=0;de<V.length;de++){const ue=V[de];x.format!==Un?Le!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ue.width,ue.height,Le,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ke,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ue.width,ue.height,Le,_e,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ke,ue.width,ue.height,0,Le,_e,ue.data)}}}else{if(V=x.mipmaps,ke&&lt){V.length>0&&ae++;const Z=Re(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Le,_e,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,ge[Z].width,ge[Z].height,0,Le,_e,ge[Z].data);for(let de=0;de<V.length;de++){const Fe=V[de].image[Z].image;ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Fe.width,Fe.height,Le,_e,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ke,Fe.width,Fe.height,0,Le,_e,Fe.data)}}else{ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,_e,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,Le,_e,ge[Z]);for(let de=0;de<V.length;de++){const ue=V[de];ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Le,_e,ue.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ke,Le,_e,ue.image[Z])}}}g(x)&&p(t.TEXTURE_CUBE_MAP),X.__version=ee.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Me(A,x,F,$,ee,X){const Ee=o.convert(F.format,F.colorSpace),ce=o.convert(F.type),me=y(F.internalFormat,Ee,ce,F.colorSpace),$e=i.get(x),te=i.get(F);if(te.__renderTarget=x,!$e.__hasExternalTextures){const ge=Math.max(1,x.width>>X),Ie=Math.max(1,x.height>>X);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,X,me,ge,Ie,x.depth,0,Ee,ce,null):n.texImage2D(ee,X,me,ge,Ie,0,Ee,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),qe(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,te.__webglTexture,0,Xe(x)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,te.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(A,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){const $=x.depthTexture,ee=$&&$.isDepthTexture?$.type:null,X=E(x.stencilBuffer,ee),Ee=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Xe(x);qe(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,X,x.width,x.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,X,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,X,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,A)}else{const $=x.textures;for(let ee=0;ee<$.length;ee++){const X=$[ee],Ee=o.convert(X.format,X.colorSpace),ce=o.convert(X.type),me=y(X.internalFormat,Ee,ce,X.colorSpace),$e=Xe(x);F&&qe(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,me,x.width,x.height):qe(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,me,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,me,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const ee=$.__webglTexture,X=Xe(x);if(x.depthTexture.format===Lo)qe(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Vo)qe(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(A){const x=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=$}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Oe(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=t.createRenderbuffer(),le(x.__webglDepthbuffer[$],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),le(x.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(A,x,F){const $=i.get(A);x!==void 0&&Me($.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ue(A)}function gt(A){const x=A.texture,F=i.get(A),$=i.get(x);A.addEventListener("dispose",w);const ee=A.textures,X=A.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=x.version,s.memory.textures++),X){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let me=0;me<x.mipmaps.length;me++)F.__webglFramebuffer[ce][me]=t.createFramebuffer()}else F.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)F.__webglFramebuffer[ce]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ce=0,me=ee.length;ce<me;ce++){const $e=i.get(ee[ce]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&qe(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const me=ee[ce];F.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const $e=o.convert(me.format,me.colorSpace),te=o.convert(me.type),ge=y(me.internalFormat,$e,te,me.colorSpace,A.isXRRenderTarget===!0),Ie=Xe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),le(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),We(t.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(F.__webglFramebuffer[ce][me],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else Me(F.__webglFramebuffer[ce],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ce=0,me=ee.length;ce<me;ce++){const $e=ee[ce],te=i.get($e);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),We(t.TEXTURE_2D,$e),Me(F.__webglFramebuffer,A,$e,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),g($e)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,$.__webglTexture),We(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(F.__webglFramebuffer[me],A,x,t.COLOR_ATTACHMENT0,ce,me);else Me(F.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,ce,0);g(x)&&p(ce),n.unbindTexture()}A.depthBuffer&&Ue(A)}function Ye(A){const x=A.textures;for(let F=0,$=x.length;F<$;F++){const ee=x[F];if(g(ee)){const X=b(A),Ee=i.get(ee).__webglTexture;n.bindTexture(X,Ee),p(X),n.unbindTexture()}}}const St=[],L=[];function _n(A){if(A.samples>0){if(qe(A)===!1){const x=A.textures,F=A.width,$=A.height;let ee=t.COLOR_BUFFER_BIT;const X=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(A),ce=x.length>1;if(ce)for(let me=0;me<x.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<x.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const $e=i.get(x[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,F,$,0,0,F,$,ee,t.NEAREST),c===!0&&(St.length=0,L.length=0,St.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(St.push(X),L.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<x.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const $e=i.get(x[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Xe(A){return Math.min(r.maxSamples,A.samples)}function qe(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ce(A){const x=s.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function ut(A,x){const F=A.colorSpace,$=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Yo&&F!==ji&&(Ze.getTransfer(F)===it?($!==Un||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=qe}function mx(t,e){function n(i,r=ji){let o;const s=Ze.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===vu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Bd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return t.BYTE;if(i===Fd)return t.SHORT;if(i===Ds)return t.UNSIGNED_SHORT;if(i===_u)return t.INT;if(i===Qr)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===Bs)return t.HALF_FLOAT;if(i===Gd)return t.ALPHA;if(i===Hd)return t.RGB;if(i===Un)return t.RGBA;if(i===kd)return t.LUMINANCE;if(i===Vd)return t.LUMINANCE_ALPHA;if(i===Lo)return t.DEPTH_COMPONENT;if(i===Vo)return t.DEPTH_STENCIL;if(i===Wd)return t.RED;if(i===Su)return t.RED_INTEGER;if(i===zd)return t.RG;if(i===Mu)return t.RG_INTEGER;if(i===Eu)return t.RGBA_INTEGER;if(i===wa||i===Ra||i===Ca||i===Ia)if(s===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===wa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===wa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Rc||i===Cc||i===Ic)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===wc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ic)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dc||i===Oc||i===Nc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Dc||i===Oc)return s===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Nc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Pc||i===Uc||i===Fc||i===Bc||i===Gc||i===Hc||i===kc||i===Vc||i===Wc||i===zc||i===Xc||i===qc||i===Kc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Lc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Da||i===Yc||i===$c)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Da)return s===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===Zc||i===jc||i===Qc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Da)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ko?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class gx extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _x={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
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

}`;class Sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new or({vertexShader:vx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new W(new el(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mx extends $o{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,u=null,d=null,h=null,f=null,m=null,_=null;const v=new Sx,g=n.getContextAttributes();let p=null,b=null;const y=[],E=[],U=new Je;let C=null;const w=new Jt;w.viewport=new ot;const P=new Jt;P.viewport=new ot;const T=[w,P],M=new gx;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new Gl,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new Gl,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new Gl,y[K]=ie),ie.getHandSpace()};function H(K){const ie=E.indexOf(K.inputSource);if(ie===-1)return;const Me=y[ie];Me!==void 0&&(Me.update(K.inputSource,K.frame,u||s),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Q);for(let K=0;K<y.length;K++){const ie=E[K];ie!==null&&(E[K]=null,y[K].disconnect(ie))}R=null,z=null,v.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,b=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Jr(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,Me=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=g.stencil?Vo:Lo,Me=g.stencil?ko:Qr);const Oe={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:o};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Jr(f.textureWidth,f.textureHeight,{format:Un,type:Ni,depthTexture:new oh(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),u=null,s=await r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(K){for(let ie=0;ie<K.removed.length;ie++){const Me=K.removed[ie],le=E.indexOf(Me);le>=0&&(E[le]=null,y[le].disconnect(Me))}for(let ie=0;ie<K.added.length;ie++){const Me=K.added[ie];let le=E.indexOf(Me);if(le===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=E.length){E.push(Me),le=Ue;break}else if(E[Ue]===null){E[Ue]=Me,le=Ue;break}if(le===-1)break}const Oe=y[le];Oe&&Oe.connect(Me)}}const Y=new D,J=new D;function k(K,ie,Me){Y.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const le=Y.distanceTo(J),Oe=ie.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,ze=Oe[14]/(Oe[10]-1),gt=Oe[14]/(Oe[10]+1),Ye=(Oe[9]+1)/Oe[5],St=(Oe[9]-1)/Oe[5],L=(Oe[8]-1)/Oe[0],_n=(Ue[8]+1)/Ue[0],Xe=ze*L,qe=ze*_n,Ce=le/(-L+_n),ut=Ce*-L;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Oe[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Re=ze+Ce,A=gt+Ce,x=Xe-ut,F=qe+(le-ut),$=Ye*gt/A*Re,ee=St*gt/A*Re;K.projectionMatrix.makePerspective(x,F,$,ee,Re,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,Me=K.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),M.near=P.near=w.near=ie,M.far=P.far=w.far=Me,(R!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,z=M.far),w.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;const le=K.parent,Oe=M.cameras;oe(M,le);for(let Ue=0;Ue<Oe.length;Ue++)oe(Oe[Ue],le);Oe.length===2?k(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),he(K,M,le)};function he(K,ie,Me){Me===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Te=null;function We(K,ie){if(d=ie.getViewerPose(u||s),_=ie,d!==null){const Me=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let le=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Ue=0;Ue<Me.length;Ue++){const ze=Me[Ue];let gt=null;if(m!==null)gt=m.getViewport(ze);else{const St=h.getViewSubImage(f,ze);gt=St.viewport,Ue===0&&(e.setRenderTargetTextures(b,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(b))}let Ye=T[Ue];Ye===void 0&&(Ye=new Jt,Ye.layers.enable(Ue),Ye.viewport=new ot,T[Ue]=Ye),Ye.matrix.fromArray(ze.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ze.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(gt.x,gt.y,gt.width,gt.height),Ue===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Ye)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ue=h.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,r.renderState)}}for(let Me=0;Me<y.length;Me++){const le=E[Me],Oe=y[Me];le!==null&&Oe!==void 0&&Oe.update(le,ie,u||s)}Te&&Te(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const st=new ih;st.setAnimationLoop(We),this.setAnimationLoop=function(K){Te=K},this.dispose=function(){}}}const hr=new Gn,Ex=new ht;function yx(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,eh(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),h(g,p)):p.isMeshPhongMaterial?(o(g,p),d(g,p)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,b,y):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,E=b.envMapRotation;y&&(g.envMap.value=y,hr.copy(E),hr.x*=-1,hr.y*=-1,hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(hr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tx(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const E=y.program;i.uniformBlockBinding(b,E)}function u(b,y){let E=r[b.id];E===void 0&&(_(b),E=d(b),r[b.id]=E,b.addEventListener("dispose",g));const U=y.program;i.updateUBOMapping(b,U);const C=e.render.frame;o[b.id]!==C&&(f(b),o[b.id]=C)}function d(b){const y=h();b.__bindingPointIndex=y;const E=t.createBuffer(),U=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,U,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function h(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=r[b.id],E=b.uniforms,U=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,w=E.length;C<w;C++){const P=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,M=P.length;T<M;T++){const R=P[T];if(m(R,C,T,U)===!0){const z=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let Q=0;Q<H.length;Q++){const Y=H[Q],J=v(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,z+j,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,y,E,U){const C=b.value,w=y+"_"+E;if(U[w]===void 0)return typeof C=="number"||typeof C=="boolean"?U[w]=C:U[w]=C.clone(),!0;{const P=U[w];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return U[w]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(b){const y=b.uniforms;let E=0;const U=16;for(let w=0,P=y.length;w<P;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,R=T.length;M<R;M++){const z=T[M],H=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Q=H.length;j<Q;j++){const Y=H[j],J=v(Y),k=E%U,oe=k%J.boundary,he=k+oe;E+=oe,he!==0&&U-he<J.storage&&(E+=U-he),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=J.storage}}}const C=E%U;return C>0&&(E+=U-C),b.__size=E,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const E=s.indexOf(y.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:c,update:u,dispose:p}}class uh{constructor(e={}){const{canvas:n=hm(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const b=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=er,this.toneMappingExposure=1;const E=this;let U=!1,C=0,w=0,P=null,T=-1,M=null;const R=new ot,z=new ot;let H=null;const j=new we(0);let Q=0,Y=n.width,J=n.height,k=1,oe=null,he=null;const Te=new ot(0,0,Y,J),We=new ot(0,0,Y,J);let st=!1;const K=new bu;let ie=!1,Me=!1;const le=new ht,Oe=new ht,Ue=new D,ze=new ot,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function St(){return P===null?k:1}let L=i;function _n(S,O){return n.getContext(S,O)}try{const S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mu}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ue,!1),L===null){const O="webgl2";if(L=_n(O,S),L===null)throw _n(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Xe,qe,Ce,ut,Re,A,x,F,$,ee,X,Ee,ce,me,$e,te,ge,Ie,Le,_e,Ke,ke,lt,I;function ae(){Xe=new I_(L),Xe.init(),ke=new mx(L,Xe),qe=new T_(L,Xe,e,ke),Ce=new dx(L,Xe),qe.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),ut=new N_(L),Re=new jv,A=new px(L,Xe,Ce,Re,qe,ke,ut),x=new b_(E),F=new C_(E),$=new Hm(L),lt=new E_(L,$),ee=new D_(L,$,ut,lt),X=new P_(L,ee,$,ut),Le=new L_(L,qe,A),te=new A_(Re),Ee=new Zv(E,x,F,Xe,qe,lt,te),ce=new yx(E,Re),me=new Jv,$e=new ox(Xe),Ie=new M_(E,x,F,Ce,X,m,c),ge=new ux(E,X,qe),I=new Tx(L,ut,qe,Ce),_e=new y_(L,Xe,ut),Ke=new O_(L,Xe,ut),ut.programs=Ee.programs,E.capabilities=qe,E.extensions=Xe,E.properties=Re,E.renderLists=me,E.shadowMap=ge,E.state=Ce,E.info=ut}ae();const V=new Mx(E,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(Y,J,!1))},this.getSize=function(S){return S.set(Y,J)},this.setSize=function(S,O,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,J=O,n.width=Math.floor(S*k),n.height=Math.floor(O*k),B===!0&&(n.style.width=S+"px",n.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Y*k,J*k).floor()},this.setDrawingBufferSize=function(S,O,B){Y=S,J=O,k=B,n.width=Math.floor(S*B),n.height=Math.floor(O*B),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,O,B,G){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,O,B,G),Ce.viewport(R.copy(Te).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(We)},this.setScissor=function(S,O,B,G){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,O,B,G),Ce.scissor(z.copy(We).multiplyScalar(k).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){Ce.setScissorTest(st=S)},this.setOpaqueSort=function(S){oe=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(S=!0,O=!0,B=!0){let G=0;if(S){let N=!1;if(P!==null){const ne=P.texture.format;N=ne===Eu||ne===Mu||ne===Su}if(N){const ne=P.texture.type,fe=ne===Ni||ne===Qr||ne===Ds||ne===ko||ne===vu||ne===xu,ve=Ie.getClearColor(),xe=Ie.getClearAlpha(),Pe=ve.r,Be=ve.g,Se=ve.b;fe?(_[0]=Pe,_[1]=Be,_[2]=Se,_[3]=xe,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=Pe,v[1]=Be,v[2]=Se,v[3]=xe,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}O&&(G|=L.DEPTH_BUFFER_BIT),B&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),$e.dispose(),Re.dispose(),x.dispose(),F.dispose(),X.dispose(),lt.dispose(),I.dispose(),Ee.dispose(),V.dispose(),V.removeEventListener("sessionstart",Gu),V.removeEventListener("sessionend",Hu),ar.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=ut.autoReset,O=ge.enabled,B=ge.autoUpdate,G=ge.needsUpdate,N=ge.type;ae(),ut.autoReset=S,ge.enabled=O,ge.autoUpdate=B,ge.needsUpdate=G,ge.type=N}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Fe(S){const O=S.target;O.removeEventListener("dispose",Fe),vt(O)}function vt(S){Ut(S),Re.remove(S)}function Ut(S){const O=Re.get(S).programs;O!==void 0&&(O.forEach(function(B){Ee.releaseProgram(B)}),S.isShaderMaterial&&Ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,B,G,N,ne){O===null&&(O=gt);const fe=N.isMesh&&N.matrixWorld.determinant()<0,ve=sp(S,O,B,G,N);Ce.setMaterial(G,fe);let xe=B.index,Pe=1;if(G.wireframe===!0){if(xe=ee.getWireframeAttribute(B),xe===void 0)return;Pe=2}const Be=B.drawRange,Se=B.attributes.position;let Qe=Be.start*Pe,ct=(Be.start+Be.count)*Pe;ne!==null&&(Qe=Math.max(Qe,ne.start*Pe),ct=Math.min(ct,(ne.start+ne.count)*Pe)),xe!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,xe.count)):Se!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Se.count));const ft=ct-Qe;if(ft<0||ft===1/0)return;lt.setup(N,G,ve,B,xe);let $t,et=_e;if(xe!==null&&($t=$.get(xe),et=Ke,et.setIndex($t)),N.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*St()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(N.isLine){let ye=G.linewidth;ye===void 0&&(ye=1),Ce.setLineWidth(ye*St()),N.isLineSegments?et.setMode(L.LINES):N.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else N.isPoints?et.setMode(L.POINTS):N.isSprite&&et.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ye=N._multiDrawStarts,fi=N._multiDrawCounts,tt=N._multiDrawCount,An=xe?$.get(xe).bytesPerElement:1,no=Re.get(G).currentProgram.getUniforms();for(let on=0;on<tt;on++)no.setValue(L,"_gl_DrawID",on),et.render(ye[on]/An,fi[on])}else if(N.isInstancedMesh)et.renderInstances(Qe,ft,N.count);else if(B.isInstancedBufferGeometry){const ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fi=Math.min(B.instanceCount,ye);et.renderInstances(Qe,ft,fi)}else et.render(Qe,ft)};function nt(S,O,B){S.transparent===!0&&S.side===Ln&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,qs(S,O,B),S.side=rr,S.needsUpdate=!0,qs(S,O,B),S.side=Ln):qs(S,O,B)}this.compile=function(S,O,B=null){B===null&&(B=S),p=$e.get(B),p.init(O),y.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const ve=ne[fe];nt(ve,B,N),G.add(ve)}else nt(ne,B,N),G.add(ne)}),y.pop(),p=null,G},this.compileAsync=function(S,O,B=null){const G=this.compile(S,O,B);return new Promise(N=>{function ne(){if(G.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){N(S);return}setTimeout(ne,10)}Xe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Tn=null;function ui(S){Tn&&Tn(S)}function Gu(){ar.stop()}function Hu(){ar.start()}const ar=new ih;ar.setAnimationLoop(ui),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(S){Tn=S,V.setAnimationLoop(S),S===null?ar.stop():ar.start()},V.addEventListener("sessionstart",Gu),V.addEventListener("sessionend",Hu),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(O),O=V.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,O,P),p=$e.get(S,y.length),p.init(O),y.push(p),Oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Oe),Me=this.localClippingEnabled,ie=te.init(this.clippingPlanes,Me),g=me.get(S,b.length),g.init(),b.push(g),V.enabled===!0&&V.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&fl(ne,O,-1/0,E.sortObjects)}fl(S,O,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(oe,he),Ye=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ye&&Ie.addToRenderList(g,S),this.info.render.frame++,ie===!0&&te.beginShadows();const B=p.state.shadowsArray;ge.render(B,S,O),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,N=g.transmissive;if(p.setupLights(),O.isArrayCamera){const ne=O.cameras;if(N.length>0)for(let fe=0,ve=ne.length;fe<ve;fe++){const xe=ne[fe];Vu(G,N,S,xe)}Ye&&Ie.render(S);for(let fe=0,ve=ne.length;fe<ve;fe++){const xe=ne[fe];ku(g,S,xe,xe.viewport)}}else N.length>0&&Vu(G,N,S,O),Ye&&Ie.render(S),ku(g,S,O);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(E,S,O),lt.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ie===!0&&te.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function fl(S,O,B,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){G&&ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Oe);const fe=X.update(S),ve=S.material;ve.visible&&g.push(S,fe,ve,B,ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const fe=X.update(S),ve=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ze.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ze.copy(fe.boundingSphere.center)),ze.applyMatrix4(S.matrixWorld).applyMatrix4(Oe)),Array.isArray(ve)){const xe=fe.groups;for(let Pe=0,Be=xe.length;Pe<Be;Pe++){const Se=xe[Pe],Qe=ve[Se.materialIndex];Qe&&Qe.visible&&g.push(S,fe,Qe,B,ze.z,Se)}}else ve.visible&&g.push(S,fe,ve,B,ze.z,null)}}const ne=S.children;for(let fe=0,ve=ne.length;fe<ve;fe++)fl(ne[fe],O,B,G)}function ku(S,O,B,G){const N=S.opaque,ne=S.transmissive,fe=S.transparent;p.setupLightsView(B),ie===!0&&te.setGlobalState(E.clippingPlanes,B),G&&Ce.viewport(R.copy(G)),N.length>0&&Xs(N,O,B),ne.length>0&&Xs(ne,O,B),fe.length>0&&Xs(fe,O,B),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Vu(S,O,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Jr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Bs:Ni,minFilter:Ir,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ne=p.state.transmissionRenderTarget[G.id],fe=G.viewport||R;ne.setSize(fe.z,fe.w);const ve=E.getRenderTarget();E.setRenderTarget(ne),E.getClearColor(j),Q=E.getClearAlpha(),Q<1&&E.setClearColor(16777215,.5),E.clear(),Ye&&Ie.render(B);const xe=E.toneMapping;E.toneMapping=er;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ie===!0&&te.setGlobalState(E.clippingPlanes,G),Xs(S,B,G),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,Qe=O.length;Se<Qe;Se++){const ct=O[Se],ft=ct.object,$t=ct.geometry,et=ct.material,ye=ct.group;if(et.side===Ln&&ft.layers.test(G.layers)){const fi=et.side;et.side=rn,et.needsUpdate=!0,Wu(ft,B,G,$t,et,ye),et.side=fi,et.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}E.setRenderTarget(ve),E.setClearColor(j,Q),Pe!==void 0&&(G.viewport=Pe),E.toneMapping=xe}function Xs(S,O,B){const G=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ne=S.length;N<ne;N++){const fe=S[N],ve=fe.object,xe=fe.geometry,Pe=G===null?fe.material:G,Be=fe.group;ve.layers.test(B.layers)&&Wu(ve,O,B,xe,Pe,Be)}}function Wu(S,O,B,G,N,ne){S.onBeforeRender(E,O,B,G,N,ne),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(E,O,B,G,S,ne),N.transparent===!0&&N.side===Ln&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,E.renderBufferDirect(B,O,G,N,S,ne),N.side=rr,N.needsUpdate=!0,E.renderBufferDirect(B,O,G,N,S,ne),N.side=Ln):E.renderBufferDirect(B,O,G,N,S,ne),S.onAfterRender(E,O,B,G,N,ne)}function qs(S,O,B){O.isScene!==!0&&(O=gt);const G=Re.get(S),N=p.state.lights,ne=p.state.shadowsArray,fe=N.state.version,ve=Ee.getParameters(S,N.state,ne,O,B),xe=Ee.getProgramCacheKey(ve);let Pe=G.programs;G.environment=S.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(S.isMeshStandardMaterial?F:x).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Pe===void 0&&(S.addEventListener("dispose",Fe),Pe=new Map,G.programs=Pe);let Be=Pe.get(xe);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===fe)return Xu(S,ve),Be}else ve.uniforms=Ee.getUniforms(S),S.onBeforeCompile(ve,E),Be=Ee.acquireProgram(ve,xe),Pe.set(xe,Be),G.uniforms=ve.uniforms;const Se=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=te.uniform),Xu(S,ve),G.needsLights=lp(S),G.lightsStateVersion=fe,G.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function zu(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Na.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Xu(S,O){const B=Re.get(S);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function sp(S,O,B,G,N){O.isScene!==!0&&(O=gt),A.resetTextureUnits();const ne=O.fog,fe=G.isMeshStandardMaterial?O.environment:null,ve=P===null?E.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yo,xe=(G.isMeshStandardMaterial?F:x).get(G.envMap||fe),Pe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Be=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,ct=!!B.morphAttributes.color;let ft=er;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ft=E.toneMapping);const $t=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=$t!==void 0?$t.length:0,ye=Re.get(G),fi=p.state.lights;if(ie===!0&&(Me===!0||S!==M)){const vn=S===M&&G.id===T;te.setState(G,S,vn)}let tt=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==fi.state.version||ye.outputColorSpace!==ve||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==xe||G.fog===!0&&ye.fog!==ne||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==te.numPlanes||ye.numIntersection!==te.numIntersection)||ye.vertexAlphas!==Pe||ye.vertexTangents!==Be||ye.morphTargets!==Se||ye.morphNormals!==Qe||ye.morphColors!==ct||ye.toneMapping!==ft||ye.morphTargetsCount!==et)&&(tt=!0):(tt=!0,ye.__version=G.version);let An=ye.currentProgram;tt===!0&&(An=qs(G,O,N));let no=!1,on=!1,ts=!1;const dt=An.getUniforms(),kn=ye.uniforms;if(Ce.useProgram(An.program)&&(no=!0,on=!0,ts=!0),G.id!==T&&(T=G.id,on=!0),no||M!==S){Ce.buffers.depth.getReversed()?(le.copy(S.projectionMatrix),mm(le),gm(le),dt.setValue(L,"projectionMatrix",le)):dt.setValue(L,"projectionMatrix",S.projectionMatrix),dt.setValue(L,"viewMatrix",S.matrixWorldInverse);const Pi=dt.map.cameraPosition;Pi!==void 0&&Pi.setValue(L,Ue.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&dt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,on=!0,ts=!0)}if(N.isSkinnedMesh){dt.setOptional(L,N,"bindMatrix"),dt.setOptional(L,N,"bindMatrixInverse");const vn=N.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),dt.setValue(L,"boneTexture",vn.boneTexture,A))}N.isBatchedMesh&&(dt.setOptional(L,N,"batchingTexture"),dt.setValue(L,"batchingTexture",N._matricesTexture,A),dt.setOptional(L,N,"batchingIdTexture"),dt.setValue(L,"batchingIdTexture",N._indirectTexture,A),dt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(L,"batchingColorTexture",N._colorsTexture,A));const ns=B.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Le.update(N,B,An),(on||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,dt.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kn.envMap.value=xe,kn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(kn.envMapIntensity.value=O.environmentIntensity),on&&(dt.setValue(L,"toneMappingExposure",E.toneMappingExposure),ye.needsLights&&ap(kn,ts),ne&&G.fog===!0&&ce.refreshFogUniforms(kn,ne),ce.refreshMaterialUniforms(kn,G,k,J,p.state.transmissionRenderTarget[S.id]),Na.upload(L,zu(ye),kn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Na.upload(L,zu(ye),kn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(L,"center",N.center),dt.setValue(L,"modelViewMatrix",N.modelViewMatrix),dt.setValue(L,"normalMatrix",N.normalMatrix),dt.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const vn=G.uniformsGroups;for(let Pi=0,Ui=vn.length;Pi<Ui;Pi++){const qu=vn[Pi];I.update(qu,An),I.bind(qu,An)}}return An}function ap(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function lp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,O,B){Re.get(S.texture).__webglTexture=O,Re.get(S.depthTexture).__webglTexture=B;const G=Re.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){const B=Re.get(S);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,B=0){P=S,C=O,w=B;let G=!0,N=null,ne=!1,fe=!1;if(S){const xe=Re.get(S);if(xe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(xe.__hasExternalTextures)A.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&Re.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const Be=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?N=Be[O][B]:N=Be[O],ne=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?N=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[B]:N=Be,R.copy(S.viewport),z.copy(S.scissor),H=S.scissorTest}else R.copy(Te).multiplyScalar(k).floor(),z.copy(We).multiplyScalar(k).floor(),H=st;if(Ce.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&Ce.drawBuffers(S,N),Ce.viewport(R),Ce.scissor(z),Ce.setScissorTest(H),ne){const xe=Re.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,B)}else if(fe){const xe=Re.get(S.texture),Pe=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Pe)}T=-1},this.readRenderTargetPixels=function(S,O,B,G,N,ne,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Ce.bindFramebuffer(L.FRAMEBUFFER,ve);try{const xe=S.texture,Pe=xe.format,Be=xe.type;if(!qe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-G&&B>=0&&B<=S.height-N&&L.readPixels(O,B,G,N,ke.convert(Pe),ke.convert(Be),ne)}finally{const xe=P!==null?Re.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(S,O,B,G,N,ne,fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){const xe=S.texture,Pe=xe.format,Be=xe.type;if(!qe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-G&&B>=0&&B<=S.height-N){Ce.bindFramebuffer(L.FRAMEBUFFER,ve);const Se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(O,B,G,N,ke.convert(Pe),ke.convert(Be),0);const Qe=P!==null?Re.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,Qe);const ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pm(L,ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Se),L.deleteSync(ct),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,B=0){S.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-B),N=Math.floor(S.image.width*G),ne=Math.floor(S.image.height*G),fe=O!==null?O.x:0,ve=O!==null?O.y:0;A.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,fe,ve,N,ne),Ce.unbindTexture()},this.copyTextureToTexture=function(S,O,B=null,G=null,N=0){S.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],O=arguments[2],N=arguments[3]||0,B=null);let ne,fe,ve,xe,Pe,Be,Se,Qe,ct;const ft=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(ne=B.max.x-B.min.x,fe=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,xe=B.min.x,Pe=B.min.y,Be=B.isBox3?B.min.z:0):(ne=ft.width,fe=ft.height,ve=ft.depth||1,xe=0,Pe=0,Be=0),G!==null?(Se=G.x,Qe=G.y,ct=G.z):(Se=0,Qe=0,ct=0);const $t=ke.convert(O.format),et=ke.convert(O.type);let ye;O.isData3DTexture?(A.setTexture3D(O,0),ye=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),ye=L.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const fi=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),An=L.getParameter(L.UNPACK_SKIP_PIXELS),no=L.getParameter(L.UNPACK_SKIP_ROWS),on=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const ts=S.isDataArrayTexture||S.isData3DTexture,dt=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const kn=Re.get(S),ns=Re.get(O),vn=Re.get(kn.__renderTarget),Pi=Re.get(ns.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ui=0;Ui<ve;Ui++)ts&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(S).__webglTexture,N,Be+Ui),S.isDepthTexture?(dt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,N,ct+Ui),L.blitFramebuffer(xe,Pe,ne,fe,Se,Qe,ne,fe,L.DEPTH_BUFFER_BIT,L.NEAREST)):dt?L.copyTexSubImage3D(ye,N,Se,Qe,ct+Ui,xe,Pe,ne,fe):L.copyTexSubImage2D(ye,N,Se,Qe,ct+Ui,xe,Pe,ne,fe);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(ye,N,Se,Qe,ct,ne,fe,ve,$t,et,ft.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,N,Se,Qe,ct,ne,fe,ve,$t,ft.data):L.texSubImage3D(ye,N,Se,Qe,ct,ne,fe,ve,$t,et,ft):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Se,Qe,ne,fe,$t,et,ft.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Se,Qe,ft.width,ft.height,$t,ft.data):L.texSubImage2D(L.TEXTURE_2D,N,Se,Qe,ne,fe,$t,et,ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,fi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,An),L.pixelStorei(L.UNPACK_SKIP_ROWS,no),L.pixelStorei(L.UNPACK_SKIP_IMAGES,on),N===0&&O.generateMipmaps&&L.generateMipmap(ye),Ce.unbindTexture()},this.copyTextureToTexture3D=function(S,O,B=null,G=null,N=0){return S.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,S=arguments[2],O=arguments[3],N=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,B,G,N)},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){C=0,w=0,P=null,Ce.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}class Ru{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=n,this.far=i}clone(){return new Ru(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fh extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dh extends sr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new D,ka=new D,Kf=new ht,as=new Au,pa=new ks,Hl=new D,Yf=new D;class Ax extends bt{constructor(e=new yn,n=new dh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Ha.fromBufferAttribute(n,r-1),ka.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ha.distanceTo(ka);e.setAttribute("lineDistance",new mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(r),pa.radius+=o,e.ray.intersectsSphere(pa)===!1)return;Kf.copy(r).invert(),as.copy(e.ray).applyMatrix4(Kf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let v=m,g=_-1;v<g;v+=u){const p=d.getX(v),b=d.getX(v+1),y=ma(this,e,as,c,p,b);y&&n.push(y)}if(this.isLineLoop){const v=d.getX(_-1),g=d.getX(m),p=ma(this,e,as,c,v,g);p&&n.push(p)}}else{const m=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let v=m,g=_-1;v<g;v+=u){const p=ma(this,e,as,c,v,v+1);p&&n.push(p)}if(this.isLineLoop){const v=ma(this,e,as,c,_-1,m);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ma(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(Ha.fromBufferAttribute(s,r),ka.fromBufferAttribute(s,o),n.distanceSqToSegment(Ha,ka,Hl,Yf)>i)return;Hl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Hl);if(!(c<e.near||c>e.far))return{distance:c,point:Yf.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const $f=new D,Zf=new D;class bx extends Ax{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)$f.fromBufferAttribute(n,r),Zf.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$f.distanceTo(Zf);e.setAttribute("lineDistance",new mn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hh extends sr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jf=new ht,eu=new Au,ga=new ks,_a=new D;class wx extends bt{constructor(e=new yn,n=new hh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ga.radius+=o,e.ray.intersectsSphere(ga)===!1)return;jf.copy(r).invert(),eu.copy(e.ray).applyMatrix4(jf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let _=f,v=m;_<v;_++){const g=u.getX(_);_a.fromBufferAttribute(h,g),Qf(_a,g,c,r,e,n,this)}}else{const f=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let _=f,v=m;_<v;_++)_a.fromBufferAttribute(h,_),Qf(_a,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Qf(t,e,n,i,r,o,s){const a=eu.distanceSqToPoint(t);if(a<n){const c=new D;eu.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Rx extends Yt{constructor(e,n,i,r,o,s,a,c,u){super(e,n,i,r,o,s,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const va=new D,xa=new D,kl=new D,Sa=new Mn;class Cx extends yn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(Po*n),s=e.getIndex(),a=e.getAttribute("position"),c=s?s.count:a.count,u=[0,0,0],d=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<c;_+=3){s?(u[0]=s.getX(_),u[1]=s.getX(_+1),u[2]=s.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:v,b:g,c:p}=Sa;if(v.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),p.fromBufferAttribute(a,u[2]),Sa.getNormal(kl),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const y=(b+1)%3,E=h[b],U=h[y],C=Sa[d[b]],w=Sa[d[y]],P=`${E}_${U}`,T=`${U}_${E}`;T in f&&f[T]?(kl.dot(f[T].normal)<=o&&(m.push(C.x,C.y,C.z),m.push(w.x,w.y,w.z)),f[T]=null):P in f||(f[P]={index0:u[b],index1:u[y],normal:kl.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:g}=f[_];va.fromBufferAttribute(a,v),xa.fromBufferAttribute(a,g),m.push(va.x,va.y,va.z),m.push(xa.x,xa.y,xa.z)}this.setAttribute("position",new mn(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ns extends sr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class De extends sr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nl extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Ix extends nl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Vl=new ht,Jf=new D,ed=new D;class ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bu,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Jf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jf),ed.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ed),n.updateMatrixWorld(),Vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const td=new ht,ls=new D,Wl=new D;class Dx extends ph{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ls.setFromMatrixPosition(e.matrixWorld),i.position.copy(ls),Wl.copy(i.position),Wl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Wl),i.updateMatrixWorld(),r.makeTranslation(-ls.x,-ls.y,-ls.z),td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td)}}class Ox extends nl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Dx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nx extends ph{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends nl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Nx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gh extends nl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);let vo=null;function mt(){if(!vo){const t=window.AudioContext||window.webkitAudioContext;t&&(vo=new t)}return vo&&vo.state==="suspended"&&vo.resume(),vo}if(typeof window<"u"){const t=()=>{mt(),window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t)}function _h(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(320,e+.12),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}function Lx(t){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(300,n),i.frequency.exponentialRampToValueAtTime(750,n+.18)):(i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(200,n+.18)),r.gain.setValueAtTime(.22,n),r.gain.exponentialRampToValueAtTime(.01,n+.2),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.2)}function Px(){const t=mt();if(!t)return;const e=t.currentTime,n=t.sampleRate*.08,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*Math.exp(-c/(n*.3));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,e),s.frequency.exponentialRampToValueAtTime(150,e+.08);const a=t.createGain();a.gain.setValueAtTime(.35,e),a.gain.exponentialRampToValueAtTime(.01,e+.08),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function nd(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(80,e+.07),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.01,e+.07),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.07)}function Ux(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.exponentialRampToValueAtTime(60,e+.15),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.15),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.15)}function vh(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(450,e),n.frequency.exponentialRampToValueAtTime(120,e+.1),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.1)}function Fx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(80,e+.14),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function Bx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(95,e),n.frequency.linearRampToValueAtTime(80,e+.25),n.frequency.exponentialRampToValueAtTime(50,e+.5),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}function Gx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.linearRampToValueAtTime(250,e+.08),n.frequency.linearRampToValueAtTime(360,e+.18),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.18),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.18)}function At(t=!0){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(260,n),i.frequency.exponentialRampToValueAtTime(420,n+.08)):(i.frequency.setValueAtTime(420,n),i.frequency.exponentialRampToValueAtTime(260,n+.08)),r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.01,n+.08),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.08)}function Hx(t=1){const e=mt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle";const o=t===3||t===8||t===9||t===13?280:180;i.frequency.setValueAtTime(o,n),i.frequency.exponentialRampToValueAtTime(60,n+.03),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.03),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.03)}function kx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(880,e+.09),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.09),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.09)}function En(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createOscillator(),r=t.createGain();n.type="triangle",i.type="sine",n.frequency.setValueAtTime(523.25,e),n.frequency.setValueAtTime(659.25,e+.07),i.frequency.setValueAtTime(783.99,e+.07),r.gain.setValueAtTime(.25,e),r.gain.exponentialRampToValueAtTime(.01,e+.22),n.connect(r),i.connect(r),r.connect(t.destination),n.start(e),i.start(e+.07),n.stop(e+.22),i.stop(e+.22)}function Vx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(550,e),n.frequency.exponentialRampToValueAtTime(160,e+.14),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function xh(){const t=mt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.45),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*.7;const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(3200,e),s.Q.setValueAtTime(4,e);const a=t.createGain();a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.01,e+.45),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e)}function Wx(){const t=mt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.85),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let d=0;d<n;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(n*.4));const o=t.createBufferSource();o.buffer=i;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,e),s.frequency.exponentialRampToValueAtTime(40,e+.85);const a=t.createGain();a.gain.setValueAtTime(.7,e),a.gain.exponentialRampToValueAtTime(.001,e+.85),o.connect(s),s.connect(a),a.connect(t.destination),o.start(e);const c=t.createOscillator(),u=t.createGain();c.type="sine",c.frequency.setValueAtTime(120,e),c.frequency.exponentialRampToValueAtTime(25,e+.5),u.gain.setValueAtTime(.6,e),u.gain.exponentialRampToValueAtTime(.01,e+.5),c.connect(u),u.connect(t.destination),c.start(e),c.stop(e+.5)}function zx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(90,e+.08),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.08)}function Sh(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(240,e),n.frequency.linearRampToValueAtTime(210,e+.35);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(700,e),r.frequency.linearRampToValueAtTime(450,e+.35),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.01,e+.35),n.connect(r),r.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.35)}function Xx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(160,e+.6),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.6),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.6)}function qx(t){const e=mt();if(!e)return;const n=e.currentTime,i=e.sampleRate*.05,r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);for(let u=0;u<i;u++)o[u]=(Math.random()*2-1)*Math.exp(-u/(i*.35));const s=e.createBufferSource();s.buffer=r;const a=e.createBiquadFilter(),c=e.createGain();t===3||t===13||t===28||t===36||t===37?(a.type="bandpass",a.frequency.setValueAtTime(1100,n),a.Q.value=3,c.gain.setValueAtTime(.16,n)):t===6||t===12||t===16||t===20?(a.type="lowpass",a.frequency.setValueAtTime(320,n),c.gain.setValueAtTime(.18,n)):t===4||t===2||t===33?(a.type="lowpass",a.frequency.setValueAtTime(550,n),c.gain.setValueAtTime(.12,n)):t===31||t===32?(a.type="bandpass",a.frequency.setValueAtTime(800,n),a.Q.value=1.8,c.gain.setValueAtTime(.15,n)):(a.type="lowpass",a.frequency.setValueAtTime(450,n),c.gain.setValueAtTime(.13,n)),c.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(a),a.connect(c),c.connect(e.destination),s.start(n)}function Kx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(2400,e),n.frequency.exponentialRampToValueAtTime(800,e+.06),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.06),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.06);const r=t.sampleRate*.15,o=t.createBuffer(1,r,t.sampleRate),s=o.getChannelData(0);for(let d=0;d<r;d++)s[d]=(Math.random()*2-1)*Math.exp(-d/(r*.4));const a=t.createBufferSource();a.buffer=o;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1400,e),c.frequency.exponentialRampToValueAtTime(300,e+.15);const u=t.createGain();u.gain.setValueAtTime(.2,e),u.gain.exponentialRampToValueAtTime(.01,e+.15),a.connect(c),c.connect(u),u.connect(t.destination),a.start(e+.02)}function Yx(){const t=mt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(880,e),n.frequency.exponentialRampToValueAtTime(1400,e+.08),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}let zl=20;const id=[261.63,293.66,329.63,392,440,523.25,587.33,659.25];function $x(t){zl-=t,zl<=0&&(zl=65+Math.random()*45,Zx())}function Zx(){const t=mt();if(!t)return;const e=4+Math.floor(Math.random()*3);let n=t.currentTime;for(let i=0;i<e;i++){const r=id[Math.floor(Math.random()*id.length)],o=1.6+Math.random()*1.2,s=t.createOscillator(),a=t.createGain();s.type="sine",s.frequency.setValueAtTime(r,n),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.04,n+.3),a.gain.exponentialRampToValueAtTime(.001,n+o),s.connect(a),a.connect(t.destination),s.start(n),s.stop(n+o),n+=.8+Math.random()*.6}}const tn={TITLE_SCREEN:"title_screen",PLAYING:"playing",PAUSED:"paused"},xt={NONE:"none",INVENTORY:"inventory",CRAFTING_TABLE:"crafting_table",FURNACE:"furnace",CHEST:"chest",RECIPE_BOOK:"recipe_book",CONTROLS:"controls",SETTINGS:"settings"};let Qo=tn.TITLE_SCREEN,zo=xt.NONE,Ls=null;function jx(t){Ls=t}function _s(){return Qo}function il(t){Qo=t}function Qx(){return Qo===tn.TITLE_SCREEN}function Jx(){return Qo===tn.PAUSED}function Mh(t){return zo===t}function Ts(){return zo!==xt.NONE}function Jo(t){zo=t,document.pointerLockElement&&document.exitPointerLock()}function Ci(t=null){t&&zo!==t||(zo=xt.NONE,Qo===tn.PLAYING&&Ls&&Ls.requestPointerLock())}function eS(){zo=xt.NONE,Qo===tn.PLAYING&&Ls&&Ls.requestPointerLock()}let Zt=null,ln=null,bo=null,tu=!1;const Ki={renderDistance:5,fov:75,mouseSensitivity:1};function tS(t){bo=t||document.querySelector("canvas"),jx(bo),document.getElementById("title-screen"),document.getElementById("pause-menu"),Zt=document.getElementById("modal-controls"),ln=document.getElementById("modal-settings"),window.startGame=rd,window.resumeGame=Xl,window.returnToMainMenu=sd,window.openControls=()=>xo(Zt),window.openSettings=()=>xo(ln);const e=["Cavernas 3D & Entradas Naturais!","Fornalha e Fundição de Ferro!","Armaduras, Esqueletos e Aranhas!","Mundo infinito com Biomas!","Construa e explore em 60 FPS!","Receitas reais de sobrevivência!"],n=document.getElementById("splash-text");n&&(n.textContent=e[Math.floor(Math.random()*e.length)]);const i=document.getElementById("btn-play");i&&i.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation();try{_h()}catch{}rd()});const r=document.getElementById("btn-controls");r&&r.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),xo(Zt)});const o=document.getElementById("btn-settings");o&&o.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),xo(ln)});const s=document.getElementById("btn-close-controls");s&&s.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),Zt&&(Zt.style.display="none"),Ci(xt.CONTROLS)});const a=document.getElementById("btn-close-settings");a&&a.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),ln&&(ln.style.display="none"),Ci(xt.SETTINGS)});const c=document.getElementById("btn-resume");c&&c.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),Xl()});const u=document.getElementById("btn-pause-controls");u&&u.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),xo(Zt)});const d=document.getElementById("btn-pause-settings")||document.getElementById("btn-pause-options");d&&d.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),xo(ln)});const h=document.getElementById("btn-quit-menu")||document.getElementById("btn-exit-main");h&&h.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),sd()});const f=document.getElementById("setting-fov"),m=document.getElementById("fov-val");f&&m&&f.addEventListener("input",y=>{Ki.fov=parseInt(y.target.value,10),m.textContent=`${Ki.fov}°`});const _=document.getElementById("setting-distance"),v=document.getElementById("distance-val");_&&v&&_.addEventListener("input",y=>{Ki.renderDistance=parseInt(y.target.value,10),v.textContent=`${Ki.renderDistance} Chunks`});const g=document.getElementById("setting-sens"),p=document.getElementById("sens-val");g&&p&&g.addEventListener("input",y=>{Ki.mouseSensitivity=parseFloat(y.target.value),p.textContent=`${Ki.mouseSensitivity.toFixed(1)}x`}),document.addEventListener("pointerlockchange",()=>{const y=document.pointerLockElement===(bo||document.querySelector("canvas"));tu&&!y&&_s()===tn.PLAYING&&!Ts()&&od(),tu=y}),window.addEventListener("keydown",y=>{if(y.code==="Escape"){if(Zt&&Zt.style.display==="flex"){Zt.style.display="none",Ci(xt.CONTROLS);return}if(ln&&ln.style.display==="flex"){ln.style.display="none",Ci(xt.SETTINGS);return}if(Ts()){eS();return}_s()===tn.PLAYING?(document.exitPointerLock(),od()):_s()===tn.PAUSED&&Xl()}});const b=bo||document.querySelector("canvas");b&&b.addEventListener("click",()=>{if(_s()===tn.PLAYING&&!Ts()&&!document.pointerLockElement)try{b.requestPointerLock()}catch{}})}function xo(t){t&&(t.style.display="flex",Jo(t===Zt?xt.CONTROLS:xt.SETTINGS))}function rd(){il(tn.PLAYING);const t=document.getElementById("title-screen");t&&(t.style.display="none",t.style.pointerEvents="none",t.style.visibility="hidden",t.style.opacity="0");const e=document.getElementById("pause-menu");e&&(e.style.display="none");const n=document.getElementById("crosshair");n&&(n.style.display="block");const i=document.getElementById("controls-hint");i&&(i.style.display="block");const r=bo||document.querySelector("canvas");if(r&&typeof r.requestPointerLock=="function")try{const o=r.requestPointerLock();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}}function od(){if(_s()===tn.TITLE_SCREEN)return;il(tn.PAUSED);const t=document.getElementById("pause-menu");t&&(t.style.display="flex");const e=document.getElementById("crosshair");e&&(e.style.display="none");const n=document.getElementById("controls-hint");n&&(n.style.display="none")}function Xl(){il(tn.PLAYING);const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Zt&&(Zt.style.display="none"),ln&&(ln.style.display="none");const e=document.getElementById("crosshair");e&&(e.style.display="block");const n=document.getElementById("controls-hint");n&&(n.style.display="block");const i=bo||document.querySelector("canvas");if(i&&typeof i.requestPointerLock=="function")try{const r=i.requestPointerLock();r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}function sd(){il(tn.TITLE_SCREEN),tu=!1;const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Zt&&(Zt.style.display="none"),ln&&(ln.style.display="none");const e=document.getElementById("title-screen");e&&(e.style.display="flex",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.opacity="1");const n=document.getElementById("crosshair");n&&(n.style.display="none");const i=document.getElementById("controls-hint");i&&(i.style.display="none")}const nS=.0022,ad=1.55,Yr={FIRST_PERSON:0,THIRD_PERSON_BACK:1,THIRD_PERSON_FRONT:2};let Xt=null,jn=0,jt=-.15,nu=!1,tr=Yr.FIRST_PERSON;function iS(t,e={x:0,y:20,z:0}){return Xt=new Jt(Ki.fov||75,t,.05,500),Xt.rotation.order="YXZ",Xt.position.set(e.x,e.y,e.z),Xt.rotation.set(jt,jn,0),Xt}function rS(t){document.addEventListener("pointerlockchange",()=>{nu=document.pointerLockElement===t}),document.addEventListener("mousemove",e=>{if(!nu||!Xt||Math.abs(e.movementX)>250||Math.abs(e.movementY)>250)return;const n=nS*(Ki.mouseSensitivity||1);jn-=e.movementX*n,jt-=e.movementY*n,jt=Math.max(-ad,Math.min(ad,jt)),tr!==Yr.THIRD_PERSON_FRONT&&Xt.rotation.set(jt,jn,0)})}function Vs(){return Xt}function Ws(){return nu}function ld(){return jn}function oS(){return jt}function Eh(){return tr}function sS(){return tr=(tr+1)%3,tr}function aS(t,e=1.62,n=null){if(!Xt)return;const i=t.x,r=t.y+e,o=t.z;if(tr===Yr.FIRST_PERSON)Xt.position.set(i,r,o),Xt.rotation.set(jt,jn,0);else if(tr===Yr.THIRD_PERSON_BACK){const a=-Math.sin(jn)*Math.cos(jt),c=Math.sin(jt),u=-Math.cos(jn)*Math.cos(jt);let d=3.4;if(n)for(let f=1;f<=16;f++){const m=f/16*3.4,_=i-a*m,v=r-c*m,g=o-u*m;if(n(Math.floor(_),Math.floor(v),Math.floor(g))){d=Math.max(.4,(f-1)/16*3.4);break}}Xt.position.set(i-a*d,r-c*d,o-u*d),Xt.rotation.set(jt,jn,0)}else if(tr===Yr.THIRD_PERSON_FRONT){const a=-Math.sin(jn)*Math.cos(jt),c=Math.sin(jt),u=-Math.cos(jn)*Math.cos(jt);let d=3;if(n)for(let f=1;f<=16;f++){const m=f/16*3,_=i+a*m,v=r+c*m,g=o+u*m;if(n(Math.floor(_),Math.floor(v),Math.floor(g))){d=Math.max(.4,(f-1)/16*3);break}}Xt.position.set(i+a*d,r+c*d+.15,o+u*d),Xt.lookAt(i,r-.1,o)}}let yh=!1,iu=0,ru=null,ou=null;function Th(t){if(!yh)return;const e=Math.min((t-iu)/1e3,.1);iu=t,ru&&ru(e,t/1e3),ou&&ou(e),requestAnimationFrame(Th)}function lS(t,e){ru=t,ou=e,yh=!0,iu=performance.now(),requestAnimationFrame(Th)}let cn=null,Yi=null;function cS(){return cn=new uh({antialias:!0}),cn.domElement.id="game-canvas",cn.setSize(window.innerWidth,window.innerHeight),cn.setPixelRatio(Math.min(window.devicePixelRatio,2)),cn.setClearColor(7911912),cn.shadowMap.enabled=!1,document.body.appendChild(cn.domElement),window.addEventListener("resize",()=>{cn.setSize(window.innerWidth,window.innerHeight)}),cn}let su=null,au=null,La=null;function uS(){return Yi=new fh,su=new Ix(8900331,5596723,.6),Yi.add(su),au=new gh(16777215,.3),Yi.add(au),La=new mh(16774624,1),La.position.set(80,120,50),Yi.add(La),Yi.fog=new Ru(7911912,50,160),Yi}function fS(){return{hemiLight:su,ambientLight:au,dirLight:La}}function dS(t){cn&&Yi&&t&&cn.render(Yi,t)}function Ah(){return cn?cn.domElement:null}function hS(t){window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()})}const $r=16;function Et(t){let e=t|0;return()=>(e=e*1103515245+12345&2147483647,e/2147483647)}function pS(t){const e=document.createElement("canvas");e.width=$r,e.height=$r;const n=e.getContext("2d");return t(n,$r),e}function pt(t,e,n,i,r,o){const s=Et(o);t.fillStyle=n,t.fillRect(0,0,e,e);for(let a=0;a<e;a++)for(let c=0;c<e;c++)if(s()<r){const u=Math.floor(s()*i.length);t.fillStyle=i[u],t.fillRect(c,a,1,1)}}function mS(t,e){pt(t,e,"#5ba638",["#4f9430","#6bc043","#458528","#75cc4a"],.4,101);const n=Et(202);for(let i=0;i<2;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#f6e05e",t.fillRect(r,o,1,1)}}function gS(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a"],.35,301);const n=Et(302);for(let i=0;i<5;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle=n()>.3?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<3?n()>.35&&(t.fillStyle=n()>.5?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<4&&n()>.65&&(t.fillStyle="#458528",t.fillRect(r,i,1,1))}function _S(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a","#584117"],.4,401);const n=Et(402);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#584117",t.fillRect(r,o,2,1)}}function rl(t,e){pt(t,e,"#828282",["#737373","#919191","#656565","#9e9e9e","#595959"],.45,501);const n=Et(502);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#505050",t.fillRect(r,o,2+Math.floor(n()*2),1)}}function vS(t,e){pt(t,e,"#e5d38a",["#dac67c","#eedd98","#cfbc6f","#f5e6a4","#c5b161"],.45,601)}function xS(t,e){pt(t,e,"#f5f7fa",["#e9ecf2","#ffffff","#dfe3ec","#edf0f7"],.35,701);const n=Et(702);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*e);t.fillStyle="#cbd5e1",t.fillRect(r,o,2,1)}}function SS(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,1401);const n=Et(1402);for(let i=0;i<4;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle="#f5f7fa",t.fillRect(r,i,1,1)):i<3?n()>.3&&(t.fillStyle="#e9ecf2",t.fillRect(r,i,1,1)):n()>.7&&(t.fillStyle="#dfe3ec",t.fillRect(r,i,1,1))}function MS(t,e){t.fillStyle="#888888",t.fillRect(0,0,e,e),t.fillStyle="#555555",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1);for(let i=0;i<4;i++){const r=i%2===0?0:8,o=i*4;t.fillRect(r,o,1,4),t.fillRect(r+8,o,1,4)}const n=Et(801);for(let i=0;i<e;i++)for(let r=0;r<e;r++)n()<.2&&(t.fillStyle=n()>.5?"#9e9e9e":"#737373",t.fillRect(r,i,1,1))}function ES(t,e){pt(t,e,"#6b4524",["#5a391d","#7c512c","#4e3016","#8d5c32"],.35,901);for(let n=0;n<e;n+=3)t.fillStyle="#472c14",t.fillRect(n,0,1,e)}function yS(t,e){t.fillStyle="#c5a368",t.fillRect(0,0,e,e),t.fillStyle="#6b4524",t.fillRect(0,0,e,2),t.fillRect(0,14,e,2),t.fillRect(0,0,2,e),t.fillRect(14,0,2,e);const n=7.5,i=7.5,r=[2,4,6];t.fillStyle="#9e804f";for(const o of r)for(let s=0;s<e;s++)for(let a=0;a<e;a++){const c=Math.hypot(a-n,s-i);Math.abs(c-o)<.65&&t.fillRect(a,s,1,1)}t.fillStyle="#7a6036",t.fillRect(7,7,2,2)}function TS(t,e){pt(t,e,"#3c8524",["#2f6d1b","#4fa631","#245614","#5dbd3c","#1b400e"],.5,1001);const n=Et(1002);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1b400e",t.fillRect(r,o,1,1)}}function AS(t,e){rl(t,e);const n=Et(1101);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#222222",t.fillRect(r,o,2,2),t.fillStyle="#111111",t.fillRect(r+1,o+1,1,1)}}function bS(t,e){rl(t,e);const n=Et(1201);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#d4a373",t.fillRect(r,o,2,2),t.fillStyle="#faedcd",t.fillRect(r,o,1,1)}}function wS(t,e){pt(t,e,"#2c75d8",["#2565bf","#3b86e8","#1e52a0","#4a95f5"],.4,1301);const n=Et(1302);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#8bc3f7",t.fillRect(r,o,3,1)}}function RS(t,e){pt(t,e,"#15803d",["#166534","#14532d","#22c55e"],.4,1501),t.fillStyle="#14532d",t.fillRect(7,7,2,2)}function CS(t,e){pt(t,e,"#15803d",["#166534","#15803d","#22c55e","#14532d"],.35,1601);const n=Et(1602);for(let i=0;i<e;i+=4)t.fillStyle="#14532d",t.fillRect(i,0,1,e);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#fef08a",t.fillRect(r,o,1,1)}}function zs(t,e){pt(t,e,"#b45309",["#92400e","#78350f","#d97706","#a16207"],.35,1701),t.fillStyle="#451a03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1),t.fillRect(5,0,1,3),t.fillRect(11,4,1,3),t.fillRect(4,8,1,3),t.fillRect(12,12,1,3)}function ol(t,e){pt(t,e,"#64748b",["#475569","#334155","#94a3b8","#1e293b"],.45,1801);const n=Et(1802);t.fillStyle="#1e293b";for(let i=0;i<5;i++){const r=Math.floor(n()*(e-4)),o=Math.floor(n()*(e-4));t.fillRect(r,o,3,2)}}function IS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,7,2,9),t.fillRect(5,11,2,2),t.fillRect(9,9,2,2),t.fillStyle="#dc2626",t.fillRect(6,3,4,4),t.fillStyle="#ef4444",t.fillRect(7,2,2,1),t.fillRect(5,4,1,2),t.fillRect(10,4,1,2),t.fillStyle="#450a0a",t.fillRect(7,4,2,2)}function DS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,6,2,10),t.fillRect(5,10,2,2),t.fillRect(9,12,2,2),t.fillStyle="#eab308",t.fillRect(6,2,4,4),t.fillStyle="#facc15",t.fillRect(7,1,2,1),t.fillRect(5,3,1,2),t.fillRect(10,3,1,2),t.fillStyle="#ca8a04",t.fillRect(7,3,2,2)}function OS(t,e){zs(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(2.5,2.5,11,11),t.beginPath(),t.moveTo(6.5,2.5),t.lineTo(6.5,13.5),t.moveTo(10.5,2.5),t.lineTo(10.5,13.5),t.moveTo(2.5,6.5),t.lineTo(13.5,6.5),t.moveTo(2.5,10.5),t.lineTo(13.5,10.5),t.stroke(),t.fillStyle="#fef08a",t.fillRect(3,3,1,1),t.fillRect(12,3,1,1),t.fillRect(3,12,1,1),t.fillRect(12,12,1,1)}function NS(t,e){zs(t,e),t.fillStyle="#1e293b",t.fillRect(3,4,3,8),t.fillStyle="#94a3b8",t.fillRect(3,4,2,6),t.fillStyle="#78350f",t.fillRect(4,9,1,3),t.fillStyle="#cbd5e1",t.fillRect(10,5,2,2),t.fillStyle="#78350f",t.fillRect(9,7,1,4),t.fillRect(12,7,1,4)}function LS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#78350f",t.fillRect(7,6,2,10),t.fillStyle="#451a03",t.fillRect(7,6,1,10),t.fillStyle="#f97316",t.fillRect(6,2,4,4),t.fillStyle="#fef08a",t.fillRect(7,3,2,2),t.fillStyle="#ea580c",t.fillRect(7,1,2,1)}function PS(t,e){ol(t,e),t.strokeStyle="#1e293b",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function US(t,e){ol(t,e),t.fillStyle="#0f172a",t.fillRect(4,7,8,7),t.fillStyle="#334155",t.fillRect(5,10,6,1),t.fillRect(5,12,6,1)}function FS(t,e){ol(t,e),t.fillStyle="#f97316",t.fillRect(4,7,8,7),t.fillStyle="#fef08a",t.fillRect(5,9,6,4),t.fillStyle="#ef4444",t.fillRect(6,11,4,2)}function BS(t,e){zs(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function GS(t,e){zs(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13),t.fillStyle="#cbd5e1",t.fillRect(7,6,2,4),t.fillStyle="#475569",t.fillRect(7,8,2,1)}function HS(t,e){pt(t,e,"#3b1d0c",["#2e1507","#45220e","#230f04","#4d2812"],.4,2101),t.fillStyle="#1c0b03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1)}function kS(t,e){pt(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,2201),t.fillStyle="#3b1d0c",t.fillRect(0,0,e,3),t.fillStyle="#230f04",t.fillRect(0,2,e,1)}function VS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#65a30d";for(let n=2;n<e;n+=3)t.fillRect(n,12,1,4),t.fillRect(n-1,11,1,2)}function WS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#84cc16";for(let n=1;n<e;n+=3)t.fillRect(n,6,2,10),t.fillStyle="#ca8a04",t.fillRect(n,6,2,3),t.fillStyle="#84cc16"}function zS(t,e){t.clearRect(0,0,e,e);for(let n=1;n<e;n+=2)t.fillStyle="#ca8a04",t.fillRect(n,4,1,12),t.fillStyle="#eab308",t.fillRect(n-(n>1?1:0),1,2,5),t.fillStyle="#fef08a",t.fillRect(n,2,1,3)}function XS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#475569",t.beginPath(),t.arc(8,8,4,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.fillRect(7,7,2,2)}function qS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#f8fafc",t.fillRect(0,5,e,6),t.fillStyle="#0f172a",t.fillRect(1,6,4,1),t.fillRect(2,7,2,3),t.fillRect(6,6,1,4),t.fillRect(7,7,1,2),t.fillRect(8,6,1,4),t.fillRect(10,6,4,1),t.fillRect(11,7,2,3)}function KS(t,e){t.fillStyle="#b91c1c",t.fillRect(0,0,e,e),t.fillStyle="#7f1d1d",t.fillRect(3,3,10,10),t.fillStyle="#450a0a",t.fillRect(7,7,2,2)}function YS(t,e){pt(t,e,"#ea580c",["#f97316","#c2410c","#facc15","#b45309","#7c2d12"],.45,2301);const n=Et(2302);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*(e-2));t.fillStyle="#fef08a",t.fillRect(r,o,3,2),t.fillStyle="#ea580c",t.fillRect(r+1,o,1,1)}}function $S(t,e){rl(t,e);const n=Et(2401);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#06b6d4",t.fillRect(r,o,2,2),t.fillStyle="#67e8f9",t.fillRect(r,o,1,1),t.fillStyle="#e0f2fe",t.fillRect(r+1,o+1,1,1)}}function ZS(t,e){pt(t,e,"#0f172a",["#1e1b4b","#020617","#312e81","#4c1d95","#1e293b"],.45,2501);const n=Et(2502);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-2)),o=Math.floor(n()*(e-2));t.fillStyle="#6366f1",t.fillRect(r,o,1,2),t.fillStyle="#a855f7",t.fillRect(r+1,o+1,1,1)}}function jS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#b91c1c",t.fillRect(1,6,e-2,e-7),t.fillStyle="#f8fafc",t.fillRect(2,1,12,4),t.fillStyle="#cbd5e1",t.fillRect(2,4,12,1)}function QS(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,6),t.fillStyle="#b91c1c",t.fillRect(0,5,e,1),t.fillStyle="#78350f",t.fillRect(0,6,e,10),t.fillStyle="#451a03",t.fillRect(2,9,e-4,7)}function JS(t,e){pt(t,e,"#f8fafc",["#f1f5f9","#e2e8f0","#cbd5e1","#ffffff"],.35,2601);const n=Et(2602);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#e2e8f0",t.fillRect(r,o,1,1)}}function eM(t,e){pt(t,e,"#6b7280",["#4b5563","#9ca3af","#374151","#d1d5db"],.5,3101);const n=Et(3102);for(let i=0;i<8;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1f2937",t.fillRect(r,o,1,1)}}function bh(t,e){pt(t,e,"#6b1717",["#450a0a","#7f1d1d","#991b1b","#3b0707"],.5,3201);const n=Et(3202);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#b91c1c",t.fillRect(r,o,1,1)}}function tM(t,e){pt(t,e,"#451a03",["#381e11","#2e180c","#54260f"],.4,3301),t.fillStyle="#1c0d06",t.fillRect(3,4,1,2),t.fillRect(5,4,1,2),t.fillRect(4,7,1,2),t.fillRect(10,8,1,2),t.fillRect(12,8,1,2),t.fillRect(11,11,1,2)}function nM(t,e){pt(t,e,"#eab308",["#ca8a04","#facc15","#fef08a","#a16207"],.55,3401);const n=Et(3402);for(let i=0;i<10;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#ffffff",t.fillRect(r,o,1,1)}}function iM(t,e){bh(t,e),[[3,3],[4,3],[4,4],[5,4],[4,5],[9,9],[10,9],[10,10],[11,10],[10,11],[11,3],[12,3],[12,4],[3,11],[4,11],[4,12]].forEach(([i,r])=>{t.fillStyle="#f8fafc",t.fillRect(i,r,1,1)}),t.fillStyle="#e2e8f0",t.fillRect(3,2,1,1),t.fillRect(9,8,1,1)}function rM(t,e){pt(t,e,"#f8fafc",["#f1f5f9","#ffffff","#e2e8f0"],.25,3601),t.fillStyle="#cbd5e1",t.fillRect(0,0,e,1),t.fillRect(0,0,1,e),t.fillStyle="#94a3b8",t.fillRect(0,e-1,e,1),t.fillRect(e-1,0,1,e)}function oM(t,e){pt(t,e,"#4c1d95",["#6b21a8","#7e22ce","#3b0764","#9333ea"],.5,3701),t.fillStyle="#c084fc",t.fillRect(2,3,3,1),t.fillRect(4,4,2,1),t.fillRect(8,7,4,1),t.fillRect(10,8,3,1),t.fillRect(4,11,5,1),t.fillRect(1,12,3,1),t.fillStyle="#f3e8ff",t.fillRect(3,3,1,1),t.fillRect(9,7,1,1)}const sM=[{name:"grass_top",draw:mS},{name:"grass_side",draw:gS},{name:"dirt",draw:_S},{name:"stone",draw:rl},{name:"sand",draw:vS},{name:"snow",draw:xS},{name:"wood_log",draw:ES},{name:"wood_log_top",draw:yS},{name:"leaves",draw:TS},{name:"coal_ore",draw:AS},{name:"iron_ore",draw:bS},{name:"water",draw:wS},{name:"stone_bricks",draw:MS},{name:"snow_side",draw:SS},{name:"cactus_top",draw:RS},{name:"cactus_side",draw:CS},{name:"wood_planks",draw:zs},{name:"cobblestone",draw:ol},{name:"flower_red",draw:IS},{name:"flower_yellow",draw:DS},{name:"crafting_table_top",draw:OS},{name:"crafting_table_side",draw:NS},{name:"torch",draw:LS},{name:"furnace_side",draw:PS},{name:"furnace_front",draw:US},{name:"furnace_front_lit",draw:FS},{name:"chest_top",draw:BS},{name:"chest_side",draw:GS},{name:"farmland_top",draw:HS},{name:"farmland_side",draw:kS},{name:"wheat_stage1",draw:VS},{name:"wheat_stage2",draw:WS},{name:"wheat_stage3",draw:zS},{name:"tnt_top",draw:XS},{name:"tnt_side",draw:qS},{name:"tnt_bottom",draw:KS},{name:"lava",draw:YS},{name:"diamond_ore",draw:$S},{name:"obsidian",draw:ZS},{name:"bed_top",draw:jS},{name:"bed_side",draw:QS},{name:"wool",draw:JS},{name:"gravel",draw:eM},{name:"netherrack",draw:bh},{name:"soul_sand",draw:tM},{name:"glowstone",draw:nM},{name:"nether_quartz_ore",draw:iM},{name:"quartz_block",draw:rM},{name:"nether_portal",draw:oM}];function wh(){return sM.map(t=>pS(t.draw))}const Dr=4,lu=16,cd=Dr*$r,ud=lu*$r;let Xi=null;function aM(){const t=wh(),e=document.createElement("canvas");e.width=cd,e.height=ud;const n=e.getContext("2d");return n.clearRect(0,0,cd,ud),t.forEach((i,r)=>{const o=r%Dr,s=Math.floor(r/Dr),a=o*$r,c=s*$r;n.drawImage(i,a,c)}),Xi=new Rx(e),Xi.magFilter=pn,Xi.minFilter=pn,Xi.generateMipmaps=!1,Xi.colorSpace=un,Xi.needsUpdate=!0,Xi}function Cu(t){const e=t%Dr,n=Math.floor(t/Dr),i=5e-4,r=e/Dr+i,o=(e+1)/Dr-i,s=1-n/lu-i,a=1-(n+1)/lu+i;return{uMin:r,uMax:o,vMin:a,vMax:s}}function sl(){return Xi}const l={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD_LOG:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,WATER:10,CACTUS:11,WOOD_PLANKS:12,COBBLESTONE:13,FLOWER_RED:14,FLOWER_YELLOW:15,CRAFTING_TABLE:16,TORCH:17,FURNACE:18,FURNACE_LIT:19,CHEST:20,FARMLAND:21,WHEAT_STAGE_1:22,WHEAT_STAGE_2:23,WHEAT_STAGE_3:24,TNT:25,LAVA:26,DIAMOND_ORE:27,OBSIDIAN:28,BED:29,WOOL:30,GRAVEL:31,NETHERRACK:32,SOUL_SAND:33,GLOWSTONE:34,NETHER_QUARTZ_ORE:35,QUARTZ_BLOCK:36,NETHER_PORTAL:37,IRON_SWORD:101,IRON_PICKAXE:102,PORKCHOP:103,ROTTEN_FLESH:104,STICK:105,WOODEN_SWORD:106,WOODEN_PICKAXE:107,STONE_SWORD:108,STONE_PICKAXE:109,IRON_INGOT:110,COOKED_PORKCHOP:111,IRON_HELMET:112,IRON_CHESTPLATE:113,IRON_LEGGINGS:114,IRON_BOOTS:115,ARROW:116,BONE:117,STRING:118,SPIDER_EYE:119,BOW:120,WOODEN_HOE:121,STONE_HOE:122,IRON_HOE:123,WHEAT_SEEDS:124,WHEAT:125,BREAD:126,GUNPOWDER:127,DIAMOND:128,DIAMOND_SWORD:129,DIAMOND_PICKAXE:130,DIAMOND_HELMET:131,DIAMOND_CHESTPLATE:132,DIAMOND_LEGGINGS:133,DIAMOND_BOOTS:134,MUTTON:135,COOKED_MUTTON:136,FLINT:137,FLINT_AND_STEEL:138,QUARTZ:139},eo={[l.GRASS]:"Grama",[l.DIRT]:"Terra",[l.STONE]:"Pedra",[l.SAND]:"Areia",[l.SNOW]:"Neve",[l.WOOD_LOG]:"Tronco de Carvalho",[l.LEAVES]:"Folhas",[l.COAL_ORE]:"Minério de Carvão",[l.IRON_ORE]:"Minério de Ferro",[l.WATER]:"Balde de Água",[l.CACTUS]:"Cacto",[l.WOOD_PLANKS]:"Tábuas de Madeira",[l.COBBLESTONE]:"Pedregulho",[l.FLOWER_RED]:"Flor Vermelha (Papoula)",[l.FLOWER_YELLOW]:"Flor Amarela (Dente-de-Leão)",[l.CRAFTING_TABLE]:"Bancada de Trabalho",[l.TORCH]:"Tocha",[l.FURNACE]:"Fornalha",[l.FURNACE_LIT]:"Fornalha (Acesa)",[l.CHEST]:"Baú de Madeira",[l.FARMLAND]:"Terra Arada",[l.WHEAT_STAGE_1]:"Brotos de Trigo",[l.WHEAT_STAGE_2]:"Trigo em Crescimento",[l.WHEAT_STAGE_3]:"Trigo Maduro",[l.TNT]:"Bloco de TNT",[l.LAVA]:"Balde de Lava",[l.DIAMOND_ORE]:"Minério de Diamante",[l.OBSIDIAN]:"Bloco de Obsidiana",[l.BED]:"Cama Confortável",[l.WOOL]:"Bloco de Lã Branca",[l.IRON_SWORD]:"Espada de Ferro",[l.IRON_PICKAXE]:"Picareta de Ferro",[l.PORKCHOP]:"Costela de Porco Crua",[l.ROTTEN_FLESH]:"Carne Podre",[l.STICK]:"Graveto",[l.WOODEN_SWORD]:"Espada de Madeira",[l.WOODEN_PICKAXE]:"Picareta de Madeira",[l.STONE_SWORD]:"Espada de Pedra",[l.STONE_PICKAXE]:"Picareta de Pedra",[l.IRON_INGOT]:"Barra de Ferro",[l.COOKED_PORKCHOP]:"Bife de Porco Assado",[l.IRON_HELMET]:"Capacete de Ferro",[l.IRON_CHESTPLATE]:"Peitoral de Ferro",[l.IRON_LEGGINGS]:"Calças de Ferro",[l.IRON_BOOTS]:"Botas de Ferro",[l.ARROW]:"Flecha",[l.BONE]:"Osso",[l.STRING]:"Linha de Teia",[l.SPIDER_EYE]:"Olho de Aranha",[l.BOW]:"Arco e Flecha",[l.WOODEN_HOE]:"Enxada de Madeira",[l.STONE_HOE]:"Enxada de Pedra",[l.IRON_HOE]:"Enxada de Ferro",[l.WHEAT_SEEDS]:"Sementes de Trigo",[l.WHEAT]:"Trigo",[l.BREAD]:"Pão Dourado",[l.GUNPOWDER]:"Pólvora",[l.DIAMOND]:"Gema de Diamante",[l.DIAMOND_SWORD]:"Espada de Diamante",[l.DIAMOND_PICKAXE]:"Picareta de Diamante",[l.DIAMOND_HELMET]:"Capacete de Diamante",[l.DIAMOND_CHESTPLATE]:"Peitoral de Diamante",[l.DIAMOND_LEGGINGS]:"Calças de Diamante",[l.DIAMOND_BOOTS]:"Botas de Diamante",[l.MUTTON]:"Carneiro Cru",[l.COOKED_MUTTON]:"Carneiro Assado",[l.GRAVEL]:"Cascalho",[l.NETHERRACK]:"Rocha do Nether",[l.SOUL_SAND]:"Areia das Almas",[l.GLOWSTONE]:"Pedra Luminosa (Glowstone)",[l.NETHER_QUARTZ_ORE]:"Minério de Quartzo do Nether",[l.QUARTZ_BLOCK]:"Bloco de Quartzo Polido",[l.NETHER_PORTAL]:"Portal do Nether",[l.FLINT]:"Pederneira",[l.FLINT_AND_STEEL]:"Isqueiro de Pederneira",[l.QUARTZ]:"Cristal de Quartzo"},Ps={[l.GRASS]:{top:0,side:1,bottom:2},[l.DIRT]:{top:2,side:2,bottom:2},[l.STONE]:{top:3,side:3,bottom:3},[l.SAND]:{top:4,side:4,bottom:4},[l.SNOW]:{top:5,side:13,bottom:2},[l.WOOD_LOG]:{top:7,side:6,bottom:7},[l.LEAVES]:{top:8,side:8,bottom:8},[l.COAL_ORE]:{top:9,side:9,bottom:9},[l.IRON_ORE]:{top:10,side:10,bottom:10},[l.WATER]:{top:11,side:11,bottom:11},[l.CACTUS]:{top:14,side:15,bottom:14},[l.WOOD_PLANKS]:{top:16,side:16,bottom:16},[l.COBBLESTONE]:{top:17,side:17,bottom:17},[l.FLOWER_RED]:{top:18,side:18,bottom:18},[l.FLOWER_YELLOW]:{top:19,side:19,bottom:19},[l.CRAFTING_TABLE]:{top:20,side:21,bottom:16},[l.TORCH]:{top:22,side:22,bottom:22},[l.FURNACE]:{top:3,side:23,bottom:3},[l.FURNACE_LIT]:{top:3,side:25,bottom:3},[l.CHEST]:{top:26,side:27,bottom:16},[l.FARMLAND]:{top:28,side:29,bottom:2},[l.WHEAT_STAGE_1]:{top:30,side:30,bottom:30},[l.WHEAT_STAGE_2]:{top:31,side:31,bottom:31},[l.WHEAT_STAGE_3]:{top:32,side:32,bottom:32},[l.TNT]:{top:33,side:34,bottom:35},[l.LAVA]:{top:36,side:36,bottom:36},[l.DIAMOND_ORE]:{top:37,side:37,bottom:37},[l.OBSIDIAN]:{top:38,side:38,bottom:38},[l.BED]:{top:39,side:40,bottom:16},[l.WOOL]:{top:41,side:41,bottom:41},[l.GRAVEL]:{top:42,side:42,bottom:42},[l.NETHERRACK]:{top:43,side:43,bottom:43},[l.SOUL_SAND]:{top:44,side:44,bottom:44},[l.GLOWSTONE]:{top:45,side:45,bottom:45},[l.NETHER_QUARTZ_ORE]:{top:46,side:46,bottom:46},[l.QUARTZ_BLOCK]:{top:47,side:47,bottom:47},[l.NETHER_PORTAL]:{top:48,side:48,bottom:48}};function Iu(t){return t>l.AIR&&t<100&&t!==l.WATER&&t!==l.LAVA&&t!==l.NETHER_PORTAL&&t!==l.FLOWER_RED&&t!==l.FLOWER_YELLOW&&t!==l.TORCH&&t!==l.WHEAT_STAGE_1&&t!==l.WHEAT_STAGE_2&&t!==l.WHEAT_STAGE_3}function lM(t){return t>=l.GRASS&&t<100}function al(t){return t===l.DIAMOND_SWORD||t===l.IRON_SWORD||t===l.STONE_SWORD||t===l.WOODEN_SWORD||t===l.BOW}function cM(t){return t===l.DIAMOND_PICKAXE||t===l.IRON_PICKAXE||t===l.STONE_PICKAXE||t===l.WOODEN_PICKAXE}function Rh(t){return t===l.IRON_HOE||t===l.STONE_HOE||t===l.WOODEN_HOE}function uM(t){return t===l.PORKCHOP||t===l.COOKED_PORKCHOP||t===l.MUTTON||t===l.COOKED_MUTTON||t===l.ROTTEN_FLESH||t===l.BREAD}function fM(t){return t===l.IRON_HELMET||t===l.IRON_CHESTPLATE||t===l.IRON_LEGGINGS||t===l.IRON_BOOTS||t===l.DIAMOND_HELMET||t===l.DIAMOND_CHESTPLATE||t===l.DIAMOND_LEGGINGS||t===l.DIAMOND_BOOTS}function dM(t){switch(t){case l.DIAMOND_HELMET:return 3;case l.DIAMOND_CHESTPLATE:return 8;case l.DIAMOND_LEGGINGS:return 6;case l.DIAMOND_BOOTS:return 3;case l.IRON_HELMET:return 2;case l.IRON_CHESTPLATE:return 6;case l.IRON_LEGGINGS:return 5;case l.IRON_BOOTS:return 2;default:return 0}}function hM(t){switch(t){case l.COOKED_PORKCHOP:return 8;case l.COOKED_MUTTON:return 6;case l.BREAD:return 5;case l.PORKCHOP:return 3;case l.MUTTON:return 2;case l.ROTTEN_FLESH:return 1;default:return 0}}function pM(t){return t===l.AIR||t===l.WATER||t===l.LAVA||t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.TORCH||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3||t>=100}function mM(t){switch(t){case l.LEAVES:case l.FLOWER_RED:case l.FLOWER_YELLOW:case l.WHEAT_STAGE_1:case l.WHEAT_STAGE_2:case l.WHEAT_STAGE_3:return .15;case l.DIRT:case l.GRASS:case l.SAND:case l.SNOW:case l.FARMLAND:return .55;case l.TNT:case l.BED:case l.WOOL:return .4;case l.WOOD_LOG:case l.WOOD_PLANKS:case l.CRAFTING_TABLE:case l.CHEST:case l.CACTUS:return 1.4;case l.STONE:case l.COBBLESTONE:case l.FURNACE:case l.FURNACE_LIT:return 2.5;case l.COAL_ORE:case l.IRON_ORE:return 3.5;case l.DIAMOND_ORE:return 4.5;case l.OBSIDIAN:return 9;case l.GRAVEL:return .6;case l.NETHERRACK:return .8;case l.SOUL_SAND:return .7;case l.GLOWSTONE:return .5;case l.NETHER_QUARTZ_ORE:return 3;case l.QUARTZ_BLOCK:return 2;case l.TORCH:case l.NETHER_PORTAL:return .05;default:return 1}}function gM(t,e){const n=e===l.DIAMOND_PICKAXE,i=e===l.IRON_PICKAXE,r=e===l.STONE_PICKAXE,o=e===l.WOODEN_PICKAXE,s=e===l.DIAMOND_SWORD,a=e===l.IRON_SWORD,c=e===l.STONE_SWORD,u=e===l.WOODEN_SWORD;return t===l.OBSIDIAN?n?4:.2:t===l.DIAMOND_ORE||t===l.NETHER_QUARTZ_ORE?n?8:i?6:.4:t===l.NETHERRACK||t===l.GLOWSTONE||t===l.QUARTZ_BLOCK?n?12:i?9:r?6:2.5:t===l.STONE||t===l.COBBLESTONE||t===l.COAL_ORE||t===l.IRON_ORE||t===l.FURNACE||t===l.FURNACE_LIT?n?9.5:i?6.5:r?4.2:o?2.6:.65:t===l.LEAVES||t===l.WOOL||t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3?s?8.5:a||c||u?6:2:t===l.WOOD_LOG||t===l.WOOD_PLANKS||t===l.CRAFTING_TABLE||t===l.CHEST||t===l.BED?n?2.2:i||r||o?1.6:1:1}function Ch(t){switch(t){case l.STONE:return l.COBBLESTONE;case l.GRASS:return l.DIRT;case l.COAL_ORE:return l.COAL_ORE;case l.IRON_ORE:return l.IRON_ORE;case l.DIAMOND_ORE:return l.DIAMOND;case l.OBSIDIAN:return l.OBSIDIAN;case l.GRAVEL:return Math.random()<.25?l.FLINT:l.GRAVEL;case l.NETHERRACK:return l.NETHERRACK;case l.SOUL_SAND:return l.SOUL_SAND;case l.GLOWSTONE:return l.GLOWSTONE;case l.NETHER_QUARTZ_ORE:return l.QUARTZ;case l.QUARTZ_BLOCK:return l.QUARTZ_BLOCK;case l.NETHER_PORTAL:return l.AIR;case l.FURNACE:case l.FURNACE_LIT:return l.FURNACE;case l.FARMLAND:return l.DIRT;case l.WHEAT_STAGE_3:return l.WHEAT;case l.WHEAT_STAGE_1:case l.WHEAT_STAGE_2:return l.WHEAT_SEEDS;case l.LEAVES:return Math.random()<.35?l.LEAVES:0;case l.TNT:return l.TNT;case l.BED:return l.BED;case l.WOOL:return l.WOOL;default:return t}}const Ae=16,_t=64,_M=[{name:"top",dir:[0,1,0],colorKey:"top",vertices:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"bottom",dir:[0,-1,0],colorKey:"bottom",vertices:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"north",dir:[0,0,-1],colorKey:"side",vertices:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"south",dir:[0,0,1],colorKey:"side",vertices:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"east",dir:[1,0,0],colorKey:"side",vertices:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"west",dir:[-1,0,0],colorKey:"side",vertices:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]}];let ql=null,Kl=null;function vM(){return ql||(ql=new De({map:sl(),alphaTest:.2,side:Ln})),ql}function xM(){return Kl||(Kl=new De({map:sl(),transparent:!0,opacity:.65,side:Ln,depthWrite:!1})),Kl}class SM{constructor(e=0,n=0,i=0){this.cx=e,this.cy=n,this.cz=i,this.blocks=new Uint8Array(Ae*Ae*_t),this.mesh=null}_index(e,n,i){return e+i*Ae+n*Ae*Ae}getBlock(e,n,i){return e<0||e>=Ae||n<0||n>=_t||i<0||i>=Ae?l.AIR:this.blocks[this._index(e,n,i)]}setBlock(e,n,i,r){e<0||e>=Ae||n<0||n>=_t||i<0||i>=Ae||(this.blocks[this._index(e,n,i)]=r)}buildMesh(e){const n=[],i=[],r=[],o=[],s=[],a=[],c=[],u=[];let d=0,h=0;const f=this.cx*Ae,m=this.cy*_t,_=this.cz*Ae;for(let p=0;p<_t;p++)for(let b=0;b<Ae;b++)for(let y=0;y<Ae;y++){const E=this.getBlock(y,p,b);if(E===l.AIR)continue;const U=E===l.WATER,C=Ps[E];if(C)for(const w of _M){const P=y+w.dir[0],T=p+w.dir[1],M=b+w.dir[2];let R;if(P>=0&&P<Ae&&T>=0&&T<_t&&M>=0&&M<Ae?R=this.getBlock(P,T,M):e?R=e(f+P,m+T,_+M):R=l.AIR,U){if(R!==l.AIR)continue}else if(!pM(R))continue;const z=C[w.colorKey],H=Cu(z),j=U?s:n,Q=U?a:i,Y=U?c:r,J=U?u:o,k=U?h:d;for(let oe=0;oe<4;oe++){const he=w.vertices[oe];j.push(y+he[0],p+he[1],b+he[2]),Q.push(w.dir[0],w.dir[1],w.dir[2]);const Te=w.localUVs[oe][0],We=w.localUVs[oe][1];Y.push(H.uMin+Te*(H.uMax-H.uMin),H.vMin+We*(H.vMax-H.vMin))}J.push(k,k+1,k+2,k,k+2,k+3),U?h+=4:d+=4}}let v=this._makeMesh(n,i,r,o,vM());v.position.set(f,m,_),this.mesh=v;let g=null;return s.length>0&&(g=this._makeMesh(s,a,c,u,xM()),g.position.set(f,m,_),g.renderOrder=1),{solidMesh:v,waterMesh:g}}_makeMesh(e,n,i,r,o){const s=new yn;return s.setAttribute("position",new mn(e,3)),s.setAttribute("normal",new mn(n,3)),s.setAttribute("uv",new mn(i,2)),s.setIndex(r),new W(s,o)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null)}}const Pn=new Map,Va=new Map,Wa=new Map,hn=18,Qi=5,MM=7;let fd=NaN,dd=NaN;const Yl=[];function yi(t,e){let n=t*374761393+e*668265263+1234567|0;return n=(n^n>>13)*1274126177|0,(n&2147483647)/2147483647}function EM(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,o=e-i,s=r*r*(3-2*r),a=o*o*(3-2*o),c=yi(n,i),u=yi(n+1,i),d=yi(n,i+1),h=yi(n+1,i+1),f=c*(1-s)+u*s,m=d*(1-s)+h*s;return f*(1-a)+m*a}function Fo(t,e,n=4,i=.5,r=2){let o=0,s=1,a=1,c=0;for(let u=0;u<n;u++)o+=EM(t*s,e*s)*a,c+=a,a*=i,s*=r;return o/c}const at={OCEAN:"ocean",PLAINS:"plains",FOREST:"forest",DESERT:"desert",SNOWY_MOUNTAINS:"snowy_mountains"};function Xo(t,e){const n=Fo(t*.0025,e*.0025,3);if(n<.32)return at.OCEAN;const i=Fo(t*.0035+150,e*.0035+150,3),r=Fo(t*.004+300,e*.004+300,3);return n>.58&&i<.38?at.SNOWY_MOUNTAINS:i>.62&&r<.48?at.DESERT:r>.52?at.FOREST:at.PLAINS}function Oi(t,e){const n=Xo(t,e),i=Fo(t*.025,e*.025,3);switch(n){case at.OCEAN:{const r=Fo(t*.01,e*.01,2),o=hn-2-r*10+i*3;return Math.max(3,Math.min(_t-6,Math.floor(o)))}case at.DESERT:{const o=21+(Math.sin(t*.03+e*.015)*4+Math.cos(e*.03)*3)+i*2.5;return Math.max(hn+1,Math.min(_t-6,Math.floor(o)))}case at.SNOWY_MOUNTAINS:{const r=Fo(t*.015,e*.015,4),o=28+Math.pow(r,1.8)*32+i*4;return Math.max(24,Math.min(_t-4,Math.floor(o)))}case at.FOREST:{const o=23+(Math.sin(t*.022)*5+Math.cos(e*.028)*4+Math.sin((t-e)*.035)*2.5)+i*3;return Math.max(hn+1,Math.min(_t-6,Math.floor(o)))}case at.PLAINS:default:{const o=22+(Math.sin(t*.02)*4+Math.cos(e*.025)*4+Math.sin((t+e)*.04)*2)+i*2.5;return Math.max(hn+1,Math.min(_t-6,Math.floor(o)))}}}function hd(t,e,n,i,r){for(let s=i;s<i+r;s++)s<_t&&t.setBlock(e,s,n,l.WOOD_LOG);const o=i+r-1;for(let s=0;s<3;s++){const a=s<2?2:1;for(let c=-a;c<=a;c++)for(let u=-a;u<=a;u++){if(Math.abs(c)===a&&Math.abs(u)===a&&s<2)continue;const d=e+c,h=o+s,f=n+u;d>=0&&d<Ae&&h>=0&&h<_t&&f>=0&&f<Ae&&t.getBlock(d,h,f)===l.AIR&&t.setBlock(d,h,f,l.LEAVES)}}}function yM(t,e,n,i,r){for(let s=i;s<i+r;s++)s<_t&&t.setBlock(e,s,n,l.WOOD_LOG);const o=i+r;for(let s=i+2;s<=o+1;s++){const c=(o+1-s)%2===0?2:1;for(let u=-c;u<=c;u++)for(let d=-c;d<=c;d++){if(Math.abs(u)===c&&Math.abs(d)===c&&c>1)continue;const h=e+u,f=s,m=n+d;h>=0&&h<Ae&&f>=0&&f<_t&&m>=0&&m<Ae&&t.getBlock(h,f,m)===l.AIR&&t.setBlock(h,f,m,l.LEAVES)}}}function TM(t,e,n,i,r){for(let o=i;o<i+r;o++)o<_t&&t.getBlock(e,o,n)===l.AIR&&t.setBlock(e,o,n,l.CACTUS)}function $l(t,e,n,i,r){e>=0&&e<Ae&&i>=0&&i<Ae&&n<_t&&t.getBlock(e,n,i)===l.AIR&&t.setBlock(e,n,i,r)}function Wi(t,e,n){let i=t*374761393+e*668265263+n*982451653+1234567|0;return i=(i^i>>13)*1274126177|0,(i&2147483647)/2147483647}function pd(t,e,n){const i=Math.floor(t),r=Math.floor(e),o=Math.floor(n),s=t-i,a=e-r,c=n-o,u=s*s*(3-2*s),d=a*a*(3-2*a),h=c*c*(3-2*c),f=Wi(i,r,o),m=Wi(i+1,r,o),_=Wi(i,r+1,o),v=Wi(i+1,r+1,o),g=Wi(i,r,o+1),p=Wi(i+1,r,o+1),b=Wi(i,r+1,o+1),y=Wi(i+1,r+1,o+1),E=f*(1-u)+m*u,U=_*(1-u)+v*u,C=g*(1-u)+p*u,w=b*(1-u)+y*u,P=E*(1-d)+U*d,T=C*(1-d)+w*d;return P*(1-h)+T*h}function Ih(t,e,n,i){if(e<2||e>i||i<=hn+1&&e>=i-2)return!1;const r=pd(t*.045,e*.075,n*.045)-.5,o=pd(t*.045+137,e*.075+137,n*.045+137)-.5;return r*r+o*o<.022}function Dh(t,e){const n=new SM(t,0,e),i=t*Ae,r=e*Ae;for(let o=0;o<Ae;o++)for(let s=0;s<Ae;s++){const a=i+s,c=r+o,u=Oi(a,c),d=Xo(a,c);for(let h=0;h<=u;h++){let f;h===0||h<u-4?f=l.STONE:h<u?d===at.DESERT||d===at.OCEAN&&u<=hn+1?f=l.SAND:f=l.DIRT:d===at.DESERT?f=l.SAND:d===at.SNOWY_MOUNTAINS?f=u>=36?l.SNOW:l.GRASS:d===at.OCEAN||u<=hn+1?f=l.SAND:f=l.GRASS,h>=2&&Ih(a,h,c,u)&&(h<=8?f=l.LAVA:h<=hn-8?f=l.WATER:f=l.AIR),n.setBlock(s,h,o,f)}for(let h=u+1;h<=hn;h++)n.getBlock(s,h,o)===l.AIR&&n.setBlock(s,h,o,l.WATER)}for(let o=1;o<Ae-1;o++)for(let s=1;s<Ae-1;s++){const a=i+s,c=r+o,u=Oi(a,c),d=Xo(a,c),h=n.getBlock(s,u,o),f=yi(a,c);if(u>hn){if(d===at.PLAINS&&h===l.GRASS)if(f<.025&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const m=4+Math.floor(yi(a+555,c+777)*3);u+m+4<_t&&hd(n,s,o,u+1,m)}else f>.94&&f<.97?$l(n,s,u+1,o,l.FLOWER_RED):f>=.97&&$l(n,s,u+1,o,l.FLOWER_YELLOW);else if(d===at.FOREST&&h===l.GRASS)if(f<.085&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const m=4+Math.floor(yi(a+444,c+666)*4);u+m+4<_t&&hd(n,s,o,u+1,m)}else f>.96&&$l(n,s,u+1,o,l.FLOWER_RED);else if(d===at.DESERT&&h===l.SAND){if(f<.028){const m=2+(f>.015?1:0);TM(n,s,o,u+1,m)}}else if(d===at.SNOWY_MOUNTAINS&&(h===l.GRASS||h===l.SNOW)&&f<.035&&s>=2&&s<Ae-2&&o>=2&&o<Ae-2){const m=5+Math.floor(yi(a+333,c+888)*4);u+m+4<_t&&yM(n,s,o,u+1,m)}}}for(let o=0;o<Ae;o++)for(let s=0;s<Ae;s++){const a=i+s,c=r+o,u=Oi(a,c);for(let d=1;d<u-3;d++)if(n.getBlock(s,d,o)===l.STONE){const h=yi(a*31+d*97,c*53+d*13);d<=16&&h>.992?n.setBlock(s,d,o,l.DIAMOND_ORE):h<.018?n.setBlock(s,d,o,l.COAL_ORE):h>.982?n.setBlock(s,d,o,l.IRON_ORE):h>.965&&h<=.982&&n.setBlock(s,d,o,l.GRAVEL)}}return n}function Kt(t,e,n){if(e<0||e>=_t)return l.AIR;const i=Math.floor(t/Ae),r=Math.floor(n/Ae),o=`${i},0,${r}`,s=Pn.get(o);if(s){const c=(t%Ae+Ae)%Ae,u=(n%Ae+Ae)%Ae;return s.getBlock(c,e,u)}const a=Oi(t,n);if(e>a)return e<=hn?l.WATER:l.AIR;if(e>=2&&Ih(t,e,n,a))return e<=8?l.LAVA:e<=hn-8?l.WATER:l.AIR;if(e===a){const c=Xo(t,n);return c===at.DESERT||a<=hn+1?l.SAND:c===at.SNOWY_MOUNTAINS&&a>=36?l.SNOW:l.GRASS}return e>=a-4?Xo(t,n)===at.DESERT?l.SAND:l.DIRT:l.STONE}function Oh(t,e,n){return Iu(Kt(t,e,n))}function ll(t,e){const n=`${t.cx},0,${t.cz}`,i=Va.get(n),r=Wa.get(n);i&&(e.remove(i),i.geometry.dispose()),r&&(e.remove(r),r.geometry.dispose());const{solidMesh:o,waterMesh:s}=t.buildMesh(Kt);Va.set(n,o),e.add(o),s&&(Wa.set(n,s),e.add(s))}function AM(t){console.log("[World] Generating starting biomes and chunks...");for(let e=-Qi;e<=Qi;e++)for(let n=-Qi;n<=Qi;n++){const i=Dh(n,e);Pn.set(`${n},0,${e}`,i)}for(const e of Pn.values())ll(e,t);console.log(`[World] Ready! ${Pn.size} chunks generated.`)}function md(t,e){if(!e)return;const n=Math.floor(t.x/Ae),i=Math.floor(t.z/Ae);if(n!==fd||i!==dd){fd=n,dd=i;for(const[o,s]of Pn.entries())if(Math.max(Math.abs(s.cx-n),Math.abs(s.cz-i))>MM){const c=Va.get(o),u=Wa.get(o);c&&(e.remove(c),c.geometry.dispose(),Va.delete(o)),u&&(e.remove(u),u.geometry.dispose(),Wa.delete(o)),s.dispose(),Pn.delete(o)}for(let o=-Qi;o<=Qi;o++)for(let s=-Qi;s<=Qi;s++){const a=n+s,c=i+o,u=`${a},0,${c}`;if(!Pn.has(u)){const d=Dh(a,c);Pn.set(u,d),Yl.push(d)}}}const r=Math.min(2,Yl.length);for(let o=0;o<r;o++){const s=Yl.shift();Pn.has(`${s.cx},0,${s.cz}`)&&ll(s,e)}}function Du(){return{x:.5,y:Oi(0,0)+2,z:.5}}function ii(t,e,n,i,r){if(n<0||n>=_t)return;if(r===l.WATER){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,m,_]of h)Kt(f,m,_)===l.LAVA&&ii(t,f,m,_,l.OBSIDIAN)}else if(r===l.LAVA){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,m,_]of h)if(Kt(f,m,_)===l.WATER){r=l.OBSIDIAN;break}}const o=Math.floor(e/Ae),s=Math.floor(i/Ae),a=`${o},0,${s}`,c=Pn.get(a);if(!c)return;const u=(e%Ae+Ae)%Ae,d=(i%Ae+Ae)%Ae;c.setBlock(u,n,d,r),ll(c,t),u===0&&Ma(t,o-1,s),u===Ae-1&&Ma(t,o+1,s),d===0&&Ma(t,o,s-1),d===Ae-1&&Ma(t,o,s+1)}function Ma(t,e,n){const i=Pn.get(`${e},0,${n}`);i&&ll(i,t)}const cs=6;function bM(t,e){const n=e.clone().normalize();let i=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const s=n.x>=0?1:-1,a=n.y>=0?1:-1,c=n.z>=0?1:-1,u=n.x!==0?Math.abs(1/n.x):1/0,d=n.y!==0?Math.abs(1/n.y):1/0,h=n.z!==0?Math.abs(1/n.z):1/0;let f=n.x!==0?(n.x>0?i+1-t.x:t.x-i)*u:1/0,m=n.y!==0?(n.y>0?r+1-t.y:t.y-r)*d:1/0,_=n.z!==0?(n.z>0?o+1-t.z:t.z-o)*h:1/0,v=i,g=r,p=o,b=0,y=0,E=0;for(let U=0;U<cs*3;U++){if(r>=0&&r<_t){const C=Kt(i,r,o);if(Iu(C))return{hit:{x:i,y:r,z:o},normal:{x:b,y,z:E},prev:{x:v,y:g,z:p}}}if(v=i,g=r,p=o,f<m)if(f<_){if(f>cs)break;i+=s,f+=u,b=-s,y=0,E=0}else{if(_>cs)break;o+=c,_+=h,b=0,y=0,E=-c}else if(m<_){if(m>cs)break;r+=a,m+=d,b=0,y=-a,E=0}else{if(_>cs)break;o+=c,_+=h,b=0,y=0,E=-c}}return null}const wM=480;let ri=.2,za=null,Xa=null,wo=null,Ti=null,qi=null,Eo=null;const RM={dawn:new we(16096779),morning:new we(9684477),noon:new we(6333946),sunset:new we(14753096),dusk:new we(4405450),midnight:new we(329750),predawn:new we(1973067)},CM={dawn:new we(16498468),morning:new we(9684477),noon:new we(7911912),sunset:new we(16007006),dusk:new we(3223169),midnight:new we(329489),predawn:new we(1973067)};function IM(t,e={}){Ti=e.dirLight||null,qi=e.hemiLight||null,Eo=e.ambientLight||null,wo=new rt,t.add(wo);const n=new q(20,20,20),i=new gn({color:16776171});za=new W(n,i),wo.add(za);const r=new q(16,16,16),o=new gn({color:15857145});Xa=new W(r,o),wo.add(Xa),Nh(0,t,null)}function gd(t,e,n,i=null){ri+=t/wM,ri>=1&&(ri-=1),n&&wo&&wo.position.copy(n.position);const r=ri*Math.PI*2-Math.PI/2,o=260,s=Math.cos(r)*o,a=Math.sin(r)*o,c=20;za&&za.position.set(s,a,c),Xa&&Xa.position.set(-s,-a,-c),Ti&&(qo()?Ti.position.set(s,Math.max(15,a),c):Ti.position.set(-s,Math.max(15,-a),-c)),Nh(t,e,i)}function _d(t,e){if(e<.15){const n=e/.15;return t.dawn.clone().lerp(t.morning,n)}else if(e<.25){const n=(e-.15)/.1;return t.morning.clone().lerp(t.noon,n)}else if(e<.5){const n=(e-.25)/.25;return t.noon.clone().lerp(t.sunset,n)}else if(e<.58){const n=(e-.5)/.08;return t.sunset.clone().lerp(t.dusk,n)}else if(e<.75){const n=(e-.58)/.17;return t.dusk.clone().lerp(t.midnight,n)}else if(e<.92){const n=(e-.75)/.17;return t.midnight.clone().lerp(t.predawn,n)}else{const n=(e-.92)/.08;return t.predawn.clone().lerp(t.dawn,n)}}function Nh(t,e,n){const i=_d(RM,ri),r=_d(CM,ri);e&&e.fog&&e.fog.color.copy(r),n&&n.setClearColor(i);const o=Math.sin(ri*Math.PI*2);Ti&&(o>0?(Ti.color.set(16774624),Ti.intensity=.4+o*.85):(Ti.color.set(9741240),Ti.intensity=Math.max(.12,-o*.28))),qi&&(o>0?(qi.color.set(8900331),qi.groundColor.set(5596723),qi.intensity=.3+o*.4):(qi.color.set(1976635),qi.groundColor.set(988970),qi.intensity=.15)),Eo&&(o>0?(Eo.color.set(16777215),Eo.intensity=.25+o*.2):(Eo.color.set(6583435),Eo.intensity=.12))}function qo(){return ri<.5}function DM(){return!qo()}function OM(){const t=(ri*24+6)%24,e=Math.floor(t),n=Math.floor((t-e)*60),i=e<10?"0"+e:""+e,r=n<10?"0"+n:""+n;return`${i}:${r}`}function NM(){ri=.05}const LM={[l.GRASS]:5938743,[l.DIRT]:9136404,[l.STONE]:8947848,[l.SAND]:15259274,[l.SNOW]:15790320,[l.WOOD_LOG]:7029286,[l.LEAVES]:3832352,[l.COAL_ORE]:4473924,[l.IRON_ORE]:12096874,[l.WATER]:3702992,[l.CACTUS]:1483594,[l.WOOD_PLANKS]:11817737,[l.COBBLESTONE]:6583435,[l.FLOWER_RED]:14427686,[l.FLOWER_YELLOW]:15381256,[l.DIAMOND_ORE]:2282478,[l.OBSIDIAN]:1973067,[l.LAVA]:16347926,[l.GRAVEL]:7041664,[l.NETHERRACK]:8330525,[l.SOUL_SAND]:4528643,[l.GLOWSTONE]:16436245,[l.NETHER_QUARTZ_ORE]:16317180,[l.QUARTZ_BLOCK]:15857145,[l.NETHER_PORTAL]:11032055};let ci=null;const Zr=[],PM=new q(.12,.12,.12),Lh=new q(.08,.08,.08),UM=new q(.09,.09,.09);function FM(t){ci=t}function cu(t,e,n,i){if(!ci)return;const r=LM[i]||11184810,o=12;for(let s=0;s<o;s++){const a=new De({color:r}),c=new W(PM,a);c.position.set(t+.2+Math.random()*.6,e+.2+Math.random()*.6,n+.2+Math.random()*.6);const u=(Math.random()-.5)*4.5,d=Math.random()*4+1.5,h=(Math.random()-.5)*4.5,f=(Math.random()-.5)*10,m=(Math.random()-.5)*10;ci.add(c),Zr.push({mesh:c,vx:u,vy:d,vz:h,rx:f,ry:m,life:.6+Math.random()*.3,age:0})}}function Ph(t,e,n,i=15680580){if(!ci)return;const r=8;for(let o=0;o<r;o++){const s=new De({color:i}),a=new W(Lh,s);a.position.set(t,e,n);const c=(Math.random()-.5)*5,u=Math.random()*3.5+1,d=(Math.random()-.5)*5;ci.add(a),Zr.push({mesh:a,vx:c,vy:u,vz:d,rx:(Math.random()-.5)*8,ry:(Math.random()-.5)*8,life:.45+Math.random()*.2,age:0})}}function BM(t,e,n){if(!ci)return;const i=[16436245,16707722,16096779,16777215],r=16;for(let o=0;o<r;o++){const s=i[Math.floor(Math.random()*i.length)],a=new gn({color:s}),c=new W(UM,a);c.position.set(t+(Math.random()-.5)*.4,e+(Math.random()-.5)*.4,n+(Math.random()-.5)*.4);const u=Math.random()*Math.PI*2,d=2.5+Math.random()*3.5,h=Math.cos(u)*d,f=Math.random()*3+1.2,m=Math.sin(u)*d;ci.add(c),Zr.push({mesh:c,vx:h,vy:f,vz:m,rx:8,ry:8,life:.55+Math.random()*.25,age:0})}}function GM(t,e,n){if(!ci)return;const i=[11032055,12616956,8266446,15324671],r=i[Math.floor(Math.random()*i.length)],o=new gn({color:r}),s=new W(Lh,o);s.position.set(t+(Math.random()-.5)*.8,e+(Math.random()-.5)*.8,n+(Math.random()-.5)*.8);const a=(Math.random()-.5)*.8,c=.4+Math.random()*.8,u=(Math.random()-.5)*.8;ci.add(s),Zr.push({mesh:s,vx:a,vy:c,vz:u,rx:4,ry:4,life:.8+Math.random()*.4,age:0})}function HM(t){for(let e=Zr.length-1;e>=0;e--){const n=Zr[e];if(n.age+=t,n.age>=n.life){ci.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),Zr.splice(e,1);continue}n.vy-=9.8*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.x+=n.rx*t,n.mesh.rotation.y+=n.ry*t;const i=n.age/n.life,r=Math.max(.01,1-i);n.mesh.scale.set(r,r,r)}}let jr=null;const Or=[],kM=new q(.26,.26,.26),VM=30;function WM(t){jr=t}function Ht(t,e,n,i){if(!jr)return;let r,o,s,a;if(typeof t=="number"&&typeof i=="number"?(o=t,s=e,a=n,r=i):(r=t,o=e,s=n,a=i),!r||r===l.AIR)return;if(Or.length>=VM){const h=Or.shift();h&&h.mesh&&jr.remove(h.mesh)}const c=Ps[r]||{side:1};Cu(c.side||0);const u=new De({map:sl()}),d=new W(kM,u);d.position.set(o+(Math.random()-.5)*.2,s+.3,a+(Math.random()-.5)*.2),jr.add(d),Or.push({itemType:r,mesh:d,pos:d.position.clone(),vel:new D((Math.random()-.5)*1.8,3,(Math.random()-.5)*1.8),age:0,bobOffset:Math.random()*Math.PI*2,collected:!1})}function zM(t,e){if(!jr)return;const i=Li().clone().add(new D(0,.9,0));for(let r=Or.length-1;r>=0;r--){const o=Or[r];if(o.age+=t,o.age>120){jr.remove(o.mesh),Or.splice(r,1);continue}const s=o.pos.distanceTo(i);if(s<2.5&&o.age>.3){const a=Math.min(14,1/(s*.15+.05));if(o.pos.lerp(i,t*a),s<.65&&Hn(o.itemType)){kx(),jr.remove(o.mesh),Or.splice(r,1);continue}}else{o.vel.y-=18*t,o.pos.x+=o.vel.x*t,o.pos.z+=o.vel.z*t,o.pos.y+=o.vel.y*t,o.vel.x*=Math.exp(-6*t),o.vel.z*=Math.exp(-6*t);const a=Oi(Math.floor(o.pos.x),Math.floor(o.pos.z))+1.15;o.pos.y<=a&&(o.pos.y=a,o.vel.set(0,0,0))}o.mesh.position.copy(o.pos),o.mesh.position.y+=Math.sin(e*3.5+o.bobOffset)*.06,o.mesh.rotation.y+=t*2.2,o.mesh.rotation.x=Math.sin(e*2+o.bobOffset)*.15}}const je={PIG:"pig",SHEEP:"sheep",ZOMBIE:"zombie",SKELETON:"skeleton",SPIDER:"spider",CREEPER:"creeper"};let Dt=null;const Fn=[],yr=[],Pa=[];let Zl=0;const XM=10;function qM(t,e,n,i,r,o){const s=i-t,a=r-e,c=o-n,u=Math.hypot(s,a,c);if(u<.3)return!0;const d=Math.ceil(u*2.2),h=s/d,f=a/d,m=c/d;for(let _=1;_<d;_++){const v=Math.floor(t+h*_),g=Math.floor(e+f*_),p=Math.floor(n+m*_);if(Oh(v,g,p))return!1}return!0}function KM(){const t=new rt,e=new De({color:16020150}),n=new De({color:16478597}),i=new De({color:2042167}),r=new W(new q(.7,.5,.9),e);r.position.set(0,.45,0),t.add(r);const o=new W(new q(.45,.45,.45),e);o.position.set(0,.65,-.55),t.add(o);const s=new W(new q(.24,.16,.12),n);s.position.set(0,.58,-.8),t.add(s);const a=new W(new q(.08,.08,.02),i);a.position.set(-.16,.72,-.78);const c=new W(new q(.08,.08,.02),i);c.position.set(.16,.72,-.78),t.add(a),t.add(c);const u=new q(.18,.35,.18),d=[],h=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const f of h){const m=new W(u,e);m.position.set(...f),t.add(m),d.push(m)}return{group:t,legs:d,head:o,body:r,originalMats:[e,n]}}function YM(){const t=new rt,e=new De({color:16317180}),n=new De({color:3359061}),i=new De({color:16478597}),r=new De({color:988970}),o=new W(new q(.75,.6,.95),e);o.position.set(0,.5,0),t.add(o);const s=new W(new q(.42,.42,.42),n);s.position.set(0,.68,-.55),t.add(s);const a=new W(new q(.44,.2,.44),e);a.position.set(0,.86,-.55),t.add(a);const c=new W(new q(.22,.14,.12),i);c.position.set(0,.6,-.78),t.add(c);const u=new W(new q(.08,.08,.02),r);u.position.set(-.16,.74,-.76);const d=new W(new q(.08,.08,.02),r);d.position.set(.16,.74,-.76),t.add(u),t.add(d);const h=new q(.16,.36,.16),f=[],m=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const _ of m){const v=new W(h,n);v.position.set(..._),t.add(v),f.push(v)}return{group:t,legs:f,head:s,body:o,originalMats:[e,n]}}function $M(){const t=new rt,e=new De({color:3899966}),n=new De({color:440020}),i=new De({color:1981066}),r=new De({color:988970}),o=new W(new q(.44,.44,.44),e);o.position.set(0,1.45,0),t.add(o);const s=new W(new q(.08,.06,.02),r);s.position.set(-.12,1.48,-.23);const a=new W(new q(.08,.06,.02),r);a.position.set(.12,1.48,-.23),t.add(s),t.add(a);const c=new W(new q(.5,.65,.28),n);c.position.set(0,.9,0),t.add(c);const u=new q(.16,.16,.55),d=new W(u,e);d.position.set(-.35,1.05,-.26);const h=new W(u,e);h.position.set(.35,1.05,-.26),t.add(d),t.add(h);const f=new q(.2,.6,.22),m=new W(f,i);m.position.set(-.13,.3,0);const _=new W(f,i);return _.position.set(.13,.3,0),t.add(m),t.add(_),{group:t,legs:[m,_],arms:[d,h],head:o,body:c,originalMats:[e,n,i]}}function ZM(){const t=new rt,e=new De({color:13751771}),n=new De({color:988970}),i=new De({color:7877903}),r=new W(new q(.42,.42,.42),e);r.position.set(0,1.45,0),t.add(r);const o=new W(new q(.09,.07,.02),n);o.position.set(-.11,1.46,-.22);const s=new W(new q(.09,.07,.02),n);s.position.set(.11,1.46,-.22),t.add(o),t.add(s);const a=new W(new q(.42,.6,.22),e);a.position.set(0,.9,0),t.add(a);const c=new q(.12,.6,.12),u=new W(c,e);u.position.set(-.3,.9,0);const d=new W(c,e);d.position.set(.3,.9,0),t.add(u),t.add(d);const h=new W(new q(.08,.5,.08),i);h.position.set(-.3,.85,-.2),h.rotation.x=.4,t.add(h);const f=new q(.14,.6,.14),m=new W(f,e);m.position.set(-.12,.3,0);const _=new W(f,e);return _.position.set(.12,.3,0),t.add(m),t.add(_),{group:t,legs:[m,_],arms:[u,d],head:r,body:a,originalMats:[e,i]}}function jM(){const t=new rt,e=new De({color:1976635}),n=new gn({color:15680580}),i=new W(new q(.65,.45,.7),e);i.position.set(0,.35,.4),t.add(i);const r=new W(new q(.45,.35,.45),e);r.position.set(0,.3,-.25),t.add(r);const o=new q(.06,.06,.02),s=new W(o,n);s.position.set(-.12,.32,-.48);const a=new W(o,n);a.position.set(.12,.32,-.48),t.add(s),t.add(a);const c=new q(.6,.08,.08),u=[];for(let d=0;d<4;d++){const h=new W(c,e);h.position.set(-.45,.22,-.3+d*.22),h.rotation.z=.35,t.add(h),u.push(h);const f=new W(c,e);f.position.set(.45,.22,-.3+d*.22),f.rotation.z=-.35,t.add(f),u.push(f)}return{group:t,legs:u,head:r,body:i,originalMats:[e,n]}}function QM(){const t=new rt,e=new De({color:1409085}),n=new De({color:988970}),i=new W(new q(.46,.46,.46),e);i.position.set(0,1.45,0),t.add(i);const r=new W(new q(.09,.09,.02),n);r.position.set(-.11,1.5,-.24);const o=new W(new q(.09,.09,.02),n);o.position.set(.11,1.5,-.24);const s=new W(new q(.18,.16,.02),n);s.position.set(0,1.36,-.24),t.add(r),t.add(o),t.add(s);const a=new W(new q(.46,.65,.26),e);a.position.set(0,.9,0),t.add(a);const c=new q(.2,.45,.2),u=[],d=[[-.14,.22,-.16],[.14,.22,-.16],[-.14,.22,.16],[.14,.22,.16]];for(const h of d){const f=new W(c,e);f.position.set(...h),t.add(f),u.push(f)}return{group:t,legs:u,head:i,body:a,originalMats:[e,n]}}function JM(t){Dt=t}function Tr(t,e,n,i){if(!Dt)return null;let r,o=10,s=1.4;t===je.PIG?(r=KM(),o=10,s=.6):t===je.SHEEP?(r=YM(),o=10,s=.65):t===je.SKELETON?(r=ZM(),o=16,s=1.45):t===je.SPIDER?(r=jM(),o=14,s=.35):t===je.CREEPER?(r=QM(),o=18,s=1.45):(r=$M(),o=20,s=1.45),r.group.position.set(e,n,i),Dt.add(r.group);const a={type:t,model:r,pos:new D(e,n,i),vel:new D(0,0,0),yaw:0,health:o,maxHealth:o,eyeHeight:s,state:"idle",stateTimer:Math.random()*2,lastSeenPos:null,canSeePlayer:!1,losCheckTimer:Math.random()*.25,attackCooldown:0,shootCooldown:2,fuseTimer:0,isFusing:!1,isAngered:!1,burnTimer:0,onGround:!0};return Fn.push(a),a}function Ou(t,e,n){if(!t||t.health<=0)return;t.health-=e,Fx(),Ph(t.pos.x,t.pos.y+t.eyeHeight*.5,t.pos.z);const i=n.clone().multiplyScalar(4.5);t.vel.x+=i.x,t.vel.z+=i.z,t.vel.y=3.5,t.isAngered=!0,t.type===je.PIG?(t.state="flee",t.stateTimer=4.5,Gx()):t.type===je.SHEEP?(t.state="flee",t.stateTimer=4.5,Sh()):(t.state="chase",t.lastSeenPos=Li().clone(),t.type===je.ZOMBIE&&Bx()),t.health<=0&&Nu(t)}function Nu(t){Dt.remove(t.model.group);const e=Fn.indexOf(t);e!==-1&&Fn.splice(e,1),t.type===je.PIG?Ht(l.PORKCHOP,t.pos.x,t.pos.y+.5,t.pos.z):t.type===je.SHEEP?(Ht(l.WOOL,t.pos.x,t.pos.y+.5,t.pos.z),Ht(l.MUTTON,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.ZOMBIE?(Ht(l.ROTTEN_FLESH,t.pos.x,t.pos.y+.5,t.pos.z),Math.random()<.25&&Ht(l.IRON_INGOT,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.SKELETON?(Ht(l.BONE,t.pos.x,t.pos.y+.5,t.pos.z),Ht(l.ARROW,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.SPIDER?(Ht(l.STRING,t.pos.x,t.pos.y+.5,t.pos.z),Ht(l.SPIDER_EYE,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===je.CREEPER&&Ht(l.GUNPOWDER,t.pos.x,t.pos.y+.5,t.pos.z)}function Uh(t,e,n,i=2.8,r=16){if(!Dt)return;Wx();const o=new D(t,e,n),a=Li().clone().add(new D(0,.9,0)).sub(o),c=a.length();if(c<i*2.2){const v=1-c/(i*2.2),g=Math.max(2,Math.round(r*v));Ko(g,a.clone().normalize())}for(const v of Fn)v.pos.distanceTo(o)<i*2&&Ou(v,14,v.pos.clone().sub(o).normalize());const u=Math.floor(t-i),d=Math.ceil(t+i),h=Math.max(1,Math.floor(e-i)),f=Math.min(63,Math.ceil(e+i)),m=Math.floor(n-i),_=Math.ceil(n+i);for(let v=m;v<=_;v++)for(let g=u;g<=d;g++)for(let p=h;p<=f;p++)if(Math.hypot(g+.5-t,p+.5-e,v+.5-n)<=i){const y=Kt(g,p,v);if(y!==l.AIR&&y!==l.WATER&&(cu(g,p,v,y),ii(Dt,g,p,v,l.AIR),Math.random()<.4)){const E=Ch(y);E>0&&Ht(E,g+.5,p+.5,v+.5)}}}function eE(t,e,n){if(!Dt)return;ii(Dt,t,e,n,l.AIR);const i=new q(.98,.98,.98),r=new De({color:15680580}),o=new W(i,r);o.position.set(t+.5,e+.5,n+.5),Dt.add(o),xh(),Pa.push({mesh:o,mat:r,pos:new D(t+.5,e+.5,n+.5),timer:2.2,blinkTimer:0})}function tE(t){for(let e=Pa.length-1;e>=0;e--){const n=Pa[e];n.timer-=t,n.blinkTimer+=t*10,Math.floor(n.blinkTimer)%2===0?n.mat.color.setHex(16777215):n.mat.color.setHex(15680580),n.timer<=0&&(Dt.remove(n.mesh),Pa.splice(e,1),Uh(n.pos.x,n.pos.y,n.pos.z,3.8,20))}}function nE(t,e){if(!Dt)return;Vx();const n=new q(.08,.08,.6),i=new gn({color:16317180}),r=new W(n,i);r.position.copy(t),Dt.add(r);const o=e.clone().multiplyScalar(24);yr.push({mesh:r,pos:t.clone(),vel:o,life:5,isPlayerShot:!0})}function iE(t,e){if(!Dt)return;const n=new q(.08,.08,.5),i=new gn({color:14870768}),r=new W(n,i);r.position.copy(t),Dt.add(r);const s=e.clone().sub(t).normalize().multiplyScalar(16);yr.push({mesh:r,pos:t.clone(),vel:s,life:4,isPlayerShot:!1})}function rE(t){const e=Li();for(let n=yr.length-1;n>=0;n--){const i=yr[n];if(i.life-=t,i.vel.y-=12*t,i.pos.addScaledVector(i.vel,t),i.mesh.position.copy(i.pos),i.isPlayerShot){let r=!1;for(const o of Fn){const s=o.pos.clone().add(new D(0,o.eyeHeight*.5,0));if(i.pos.distanceTo(s)<.9){Ou(o,9,i.vel.clone().normalize()),Dt.remove(i.mesh),yr.splice(n,1),r=!0;break}}if(r)continue}else if(i.pos.distanceTo(e.clone().add(new D(0,.9,0)))<.75){Ko(4,i.vel.clone().normalize()),Dt.remove(i.mesh),yr.splice(n,1);continue}(Oh(Math.floor(i.pos.x),Math.floor(i.pos.y),Math.floor(i.pos.z))||i.life<=0)&&(Dt.remove(i.mesh),yr.splice(n,1))}}function oE(t){const e=Li();Zl+=t,Zl>4&&Fn.length<XM&&(Zl=0,sE(e)),rE(t),tE(t);for(let n=Fn.length-1;n>=0;n--){const i=Fn[n],r=i.pos.distanceTo(e);if(r>52){Dt.remove(i.model.group),Fn.splice(n,1);continue}aE(i,t,e,r)}}function sE(t){const e=Math.random()*Math.PI*2,n=24+Math.random()*14,i=Math.floor(t.x+Math.cos(e)*n),r=Math.floor(t.z+Math.sin(e)*n),o=Oi(i,r);if(o>15&&o<55)if(qo()){if(Fn.filter(c=>c.type===je.PIG||c.type===je.SHEEP).length<5){const c=Math.random()<.5?je.PIG:je.SHEEP;Tr(c,i+.5,o+1,r+.5)}}else{const a=Math.random();a<.35?Tr(je.ZOMBIE,i+.5,o+1,r+.5):a<.6?Tr(je.SKELETON,i+.5,o+1,r+.5):a<.8?Tr(je.CREEPER,i+.5,o+1,r+.5):Tr(je.SPIDER,i+.5,o+1,r+.5)}}function aE(t,e,n,i){if((t.type===je.ZOMBIE||t.type===je.SKELETON)&&qo()){const o=Oi(Math.floor(t.pos.x),Math.floor(t.pos.z));if(t.pos.y>=o&&(t.burnTimer+=e,t.burnTimer>=1&&(t.burnTimer=0,t.health-=2,Ph(t.pos.x,t.pos.y+1,t.pos.z),t.health<=0))){Nu(t);return}}if(t.losCheckTimer-=e,t.losCheckTimer<=0){t.losCheckTimer=.3;const o=qM(t.pos.x,t.pos.y+t.eyeHeight,t.pos.z,n.x,n.y+1.2,n.z);t.canSeePlayer=o&&i<16,t.canSeePlayer?(t.lastSeenPos=n.clone(),t.type!==je.PIG&&(t.type===je.SPIDER&&qo()&&!t.isAngered?t.state="idle":t.state="chase")):i>22&&t.state==="chase"&&(t.state="idle")}t.type===je.PIG?dE(t,e,n):t.type===je.SHEEP?hE(t,e,n):t.type===je.SKELETON?uE(t,e,n,i):t.type===je.SPIDER?fE(t,e,n,i):t.type===je.CREEPER?lE(t,e,n,i):cE(t,e,n,i),t.vel.y-=22*e,t.pos.addScaledVector(t.vel,e);const r=Oi(Math.floor(t.pos.x),Math.floor(t.pos.z));t.pos.y<=r+1&&(t.pos.y=r+1,t.vel.y=0,t.onGround=!0),t.vel.x*=Math.exp(-8*e),t.vel.z*=Math.exp(-8*e),t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.yaw+Math.PI}function lE(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;if(t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<2.4){t.isFusing||(t.isFusing=!0,xh()),t.fuseTimer+=e,t.vel.x=0,t.vel.z=0;const o=1+t.fuseTimer/1.8*.35;if(t.model.group.scale.set(o,o,o),t.fuseTimer>=1.8){Uh(t.pos.x,t.pos.y+.5,t.pos.z,2.8,16),Nu(t);return}}else i>4.5&&t.isFusing&&(t.isFusing=!1,t.fuseTimer=0,t.model.group.scale.set(1,1,1))}}function cE(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<1.4&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1.2,Ko(3,new D(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function uE(t,e,n,i){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z),t.canSeePlayer&&(i<8?(t.vel.x=-Math.sin(t.yaw)*1.8,t.vel.z=-Math.cos(t.yaw)*1.8):i>14&&(t.vel.x=Math.sin(t.yaw)*1.8,t.vel.z=Math.cos(t.yaw)*1.8),t.shootCooldown-=e,t.shootCooldown<=0&&i<18&&(t.shootCooldown=2.8,vh(),iE(t.pos.clone().add(new D(0,1.2,0)),n.clone().add(new D(0,.9,0)))))}function fE(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=2.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<4&&t.onGround&&Math.random()<.04&&(t.vel.y=4.8,t.vel.x*=1.4,t.vel.z*=1.4,t.onGround=!1),i<1.3&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1,Ko(2,new D(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function dE(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=2.5+Math.random()*3.5,t.yaw+=(Math.random()-.5)*1.8),t.vel.x=Math.sin(t.yaw)*.9,t.vel.z=Math.cos(t.yaw)*.9}function hE(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else{if(t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=3+Math.random()*4,t.yaw+=(Math.random()-.5)*1.8,Math.random()<.25))try{Sh()}catch{}t.vel.x=Math.sin(t.yaw)*.85,t.vel.z=Math.cos(t.yaw)*.85}}function pE(t,e,n=3.8){let i=null,r=n;for(const o of Fn){if(o.health<=0)continue;const a=o.pos.clone().add(new D(0,o.eyeHeight*.5,0)).clone().sub(t),c=a.dot(e);c>0&&c<r&&a.clone().sub(e.clone().multiplyScalar(c)).length()<.9&&(r=c,i=o)}return i}let jl=null;function vd(){return jl||(jl=wh()),jl}function Ql(t,e,n,i){const[r,o,s,a]=e,c=(o[0]-r[0])/16,u=(o[1]-r[1])/16,d=(a[0]-r[0])/16,h=(a[1]-r[1])/16;t.save(),t.filter=`brightness(${i})`,t.setTransform(c,u,d,h,r[0],r[1]),t.drawImage(n,0,0,16,16,0,0,16,16),t.restore()}function It(t,e=46){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");if(t===l.IRON_SWORD||t===l.STONE_SWORD||t===l.WOODEN_SWORD){const f=t===l.IRON_SWORD,m=t===l.STONE_SWORD,_=f?"#f1f5f9":m?"#94a3b8":"#b45309",v=f?"#475569":m?"#334155":"#78350f";return i.lineWidth=3,i.strokeStyle=v,i.fillStyle=_,i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle=f?"#334155":"#451a03",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n}if(t===l.IRON_PICKAXE||t===l.STONE_PICKAXE||t===l.WOODEN_PICKAXE){const f=t===l.IRON_PICKAXE,m=t===l.STONE_PICKAXE,_=f?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.arc(e*.7,e*.3,e*.25,-Math.PI*.75,-Math.PI*.15),i.stroke(),n}if(t===l.STICK)return i.lineWidth=5,i.strokeStyle="#92400e",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.75,e*.25),i.stroke(),n;if(t===l.TORCH)return i.lineWidth=6,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.3,e*.75),i.lineTo(e*.65,e*.4),i.stroke(),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.68,e*.35,e*.15,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.68,e*.35,e*.08,0,Math.PI*2),i.fill(),n;if(t===l.IRON_INGOT)return i.fillStyle="#cbd5e1",i.strokeStyle="#475569",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.4),i.lineTo(e*.65,e*.3),i.lineTo(e*.8,e*.55),i.lineTo(e*.4,e*.65),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.35,e*.42,e*.25,e*.08),n;if(t===l.COOKED_PORKCHOP)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.35,e*.22,Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#451a03",i.fillRect(e*.4,e*.4,e*.2,2),i.fillRect(e*.45,e*.5,e*.2,2),n;if(t===l.IRON_HELMET)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.32,Math.PI,0),i.lineTo(e*.82,e*.65),i.lineTo(e*.65,e*.65),i.lineTo(e*.65,e*.55),i.lineTo(e*.35,e*.55),i.lineTo(e*.35,e*.65),i.lineTo(e*.18,e*.65),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_CHESTPLATE)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.35),i.lineTo(e*.6,e*.35),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.75,e*.5),i.lineTo(e*.75,e*.75),i.lineTo(e*.25,e*.75),i.lineTo(e*.25,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_LEGGINGS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.75),i.lineTo(e*.55,e*.75),i.lineTo(e*.5,e*.45),i.lineTo(e*.45,e*.75),i.lineTo(e*.25,e*.75),i.closePath(),i.fill(),i.stroke(),n;if(t===l.IRON_BOOTS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.fillRect(e*.22,e*.45,e*.18,e*.3),i.fillRect(e*.15,e*.6,e*.25,e*.15),i.fillRect(e*.6,e*.45,e*.18,e*.3),i.fillRect(e*.6,e*.6,e*.25,e*.15),n;if(t===l.ARROW)return i.lineWidth=3,i.strokeStyle="#94a3b8",i.beginPath(),i.moveTo(e*.2,e*.8),i.lineTo(e*.75,e*.25),i.stroke(),i.fillStyle="#475569",i.beginPath(),i.moveTo(e*.82,e*.18),i.lineTo(e*.65,e*.25),i.lineTo(e*.75,e*.35),i.closePath(),i.fill(),n;if(t===l.BONE)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.42,e*.5,e*.16,4),i.fill(),i.stroke(),n;if(t===l.STRING)return i.lineWidth=2,i.strokeStyle="#f8fafc",i.beginPath(),i.arc(e*.5,e*.5,e*.25,0,Math.PI*1.7),i.stroke(),n;if(t===l.SPIDER_EYE)return i.fillStyle="#991b1b",i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.22,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===l.BOW)return i.lineWidth=3.5,i.strokeStyle="#78350f",i.beginPath(),i.arc(e*.4,e*.5,e*.35,-Math.PI*.45,Math.PI*.45),i.stroke(),i.lineWidth=1.5,i.strokeStyle="#f8fafc",i.beginPath(),i.moveTo(e*.4+Math.cos(-Math.PI*.45)*(e*.35),e*.5+Math.sin(-Math.PI*.45)*(e*.35)),i.lineTo(e*.4+Math.cos(Math.PI*.45)*(e*.35),e*.5+Math.sin(Math.PI*.45)*(e*.35)),i.stroke(),n;if(t===l.IRON_HOE||t===l.STONE_HOE||t===l.WOODEN_HOE){const f=t===l.IRON_HOE,m=t===l.STONE_HOE,_=f?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.65,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.moveTo(e*.65,e*.3),i.lineTo(e*.85,e*.3),i.lineTo(e*.85,e*.45),i.stroke(),n}if(t===l.WHEAT_SEEDS)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=1.5,[[e*.35,e*.4],[e*.55,e*.35],[e*.45,e*.6],[e*.65,e*.55]].forEach(([m,_])=>{i.beginPath(),i.arc(m,_,e*.08,0,Math.PI*2),i.fill(),i.stroke()}),n;if(t===l.WHEAT)return i.lineWidth=3,i.strokeStyle="#eab308",i.beginPath(),i.moveTo(e*.3,e*.8),i.lineTo(e*.5,e*.25),i.moveTo(e*.5,e*.8),i.lineTo(e*.5,e*.2),i.moveTo(e*.7,e*.8),i.lineTo(e*.5,e*.25),i.stroke(),i.fillStyle="#ef4444",i.fillRect(e*.38,e*.55,e*.24,4),n;if(t===l.BREAD)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.roundRect(e*.2,e*.35,e*.6,e*.32,8),i.fill(),i.stroke(),i.fillStyle="#fef08a",i.fillRect(e*.32,e*.42,3,e*.18),i.fillRect(e*.48,e*.42,3,e*.18),i.fillRect(e*.64,e*.42,3,e*.18),n;if(t===l.GUNPOWDER)return i.fillStyle="#475569",i.strokeStyle="#1e293b",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.25,e*.7),i.lineTo(e*.5,e*.3),i.lineTo(e*.75,e*.7),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#94a3b8",i.fillRect(e*.45,e*.45,2,2),i.fillRect(e*.55,e*.55,2,2),i.fillRect(e*.35,e*.6,2,2),n;if(t===l.DIAMOND)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.7,e*.3),i.lineTo(e*.85,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#67e8f9",i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.5,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.fillStyle="#e0f2fe",i.beginPath(),i.moveTo(e*.4,e*.32),i.lineTo(e*.6,e*.32),i.lineTo(e*.5,e*.45),i.closePath(),i.fill(),n;if(t===l.DIAMOND_SWORD)return i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle="#0284c7",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n;if(t===l.DIAMOND_PICKAXE)return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.45,e*.2),i.quadraticCurveTo(e*.75,e*.15,e*.85,e*.45),i.lineTo(e*.75,e*.5),i.quadraticCurveTo(e*.65,e*.3,e*.4,e*.3),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_HELMET)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.25,e*.5,e*.45,[8,8,2,2]),i.fill(),i.stroke(),i.clearRect(e*.38,e*.45,e*.24,e*.16),n;if(t===l.DIAMOND_CHESTPLATE)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.25),i.lineTo(e*.5,e*.38),i.lineTo(e*.6,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.72,e*.5),i.lineTo(e*.7,e*.8),i.lineTo(e*.3,e*.8),i.lineTo(e*.28,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_LEGGINGS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.8),i.lineTo(e*.55,e*.8),i.lineTo(e*.5,e*.5),i.lineTo(e*.45,e*.8),i.lineTo(e*.25,e*.8),i.closePath(),i.fill(),i.stroke(),n;if(t===l.DIAMOND_BOOTS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.22,e*.4,e*.24,e*.4,[4,4,6,2]),i.roundRect(e*.54,e*.4,e*.24,e*.4,[4,4,6,2]),i.fill(),i.stroke(),n;if(t===l.MUTTON||t===l.COOKED_MUTTON){const f=t===l.COOKED_MUTTON;return i.fillStyle=f?"#78350f":"#f43f5e",i.strokeStyle=f?"#451a03":"#9f1239",i.lineWidth=2,i.beginPath(),i.ellipse(e*.45,e*.48,e*.26,e*.18,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.62,e*.62,e*.16,e*.08),n}if(t===l.ROTTEN_FLESH)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.32,e*.2,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===l.FLINT)return i.fillStyle="#1e293b",i.strokeStyle="#0f172a",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.5,e*.2),i.lineTo(e*.8,e*.6),i.lineTo(e*.6,e*.8),i.lineTo(e*.3,e*.7),i.lineTo(e*.2,e*.4),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#64748b",i.fillRect(e*.45,e*.3,e*.1,e*.25),n;if(t===l.FLINT_AND_STEEL)return i.strokeStyle="#e2e8f0",i.lineWidth=e*.14,i.beginPath(),i.arc(e*.42,e*.48,e*.24,-Math.PI*.6,Math.PI*.6),i.stroke(),i.fillStyle="#1e293b",i.fillRect(e*.52,e*.56,e*.24,e*.2),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.58,e*.35,e*.08,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.58,e*.35,e*.04,0,Math.PI*2),i.fill(),n;if(t===l.QUARTZ)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.5,e*.15),i.lineTo(e*.75,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.25,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(e*.5,e*.18),i.lineTo(e*.65,e*.45),i.lineTo(e*.5,e*.8),i.closePath(),i.fill(),n;if(t===l.FLOWER_RED||t===l.FLOWER_YELLOW||t===l.TORCH||t===l.WHEAT_STAGE_1||t===l.WHEAT_STAGE_2||t===l.WHEAT_STAGE_3){const f=vd(),m=Ps[t];if(m){const _=f[m.top];i.imageSmoothingEnabled=!1;const v=e*.08;return i.drawImage(_,v,v,e-v*2,e-v*2),n}}const r=vd(),o=Ps[t];if(!o)return null;const s=r[o.top],a=r[o.side],c=e/4,u=[[e/2,0],[e/2+c,c/2],[e/2,c],[e/2-c,c/2]],d=[[e/2-c,c/2],[e/2,c],[e/2,2*c],[e/2-c,3*c/2]],h=[[e/2,c],[e/2+c,c/2],[e/2+c,3*c/2],[e/2,2*c]];return Ql(i,h,a,.8),Ql(i,d,a,.66),Ql(i,u,s,1),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1.5,[u,d,h].forEach(f=>{i.beginPath(),i.moveTo(f[0][0],f[0][1]);for(let m=1;m<f.length;m++)i.lineTo(f[m][0],f[m][1]);i.closePath(),i.stroke()}),n}let pe={type:0,count:0},Lt=null;function es(t){return!t||t===l.AIR?0:al(t)||cM(t)||Rh(t)||fM(t)||t===l.BOW?1:64}function mE(){Lt||(Lt=document.createElement("div"),Lt.id="cursor-floating-item",Lt.className="fixed pointer-events-none z-[9999] hidden items-center justify-center",Object.assign(Lt.style,{width:"46px",height:"46px",transform:"translate(-50%, -50%)",transition:"none"}),document.body.appendChild(Lt),window.addEventListener("mousemove",t=>{pe.type>0&&pe.count>0?(Lt.style.display="flex",Lt.style.left=`${t.clientX}px`,Lt.style.top=`${t.clientY}px`):Lt.style.display="none"}))}function Ii(){if(Lt||mE(),pe.type>0&&pe.count>0){Lt.innerHTML="";const t=It(pe.type,42);if(t&&Lt.appendChild(t),pe.count>1){const e=document.createElement("span");e.className="absolute bottom-0 right-0 font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.2 rounded shadow-[0_2px_4px_rgba(0,0,0,0.8)]",e.textContent=pe.count,Lt.appendChild(e)}Lt.style.display="flex"}else pe.type=0,pe.count=0,Lt&&(Lt.style.display="none")}function $n(t,e){pe.type=t,pe.count=t===0?0:e,Ii()}function cl(){pe={type:0,count:0},Ii()}function si(t,e,n){e.preventDefault(),e.stopPropagation();const i=t.get(),r=i.type||0,o=i.count||0,s=t.maxStack||es(pe.type||r);if(e.shiftKey&&e.button===0&&r>0&&t.onShiftClick){t.onShiftClick(r,o),n&&n();return}if(e.button===0){if(pe.type===0&&r>0)$n(r,o),t.set(0,0),At(!0);else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;const a=Math.min(pe.count,s);t.set(pe.type,a),pe.count-=a,pe.count<=0?$n(0,0):Ii(),At(!1)}else if(pe.type>0&&r===pe.type){const a=s-o;if(a>0){const c=Math.min(a,pe.count);t.set(r,o+c),pe.count-=c,pe.count<=0?$n(0,0):Ii(),At(!1)}}else if(pe.type>0&&r>0&&pe.type!==r){if(t.allowEquip&&!t.allowEquip(pe.type))return;const a=r,c=o;t.set(pe.type,pe.count),$n(a,c),At(!1)}}else if(e.button===2)if(pe.type===0&&r>0){const a=Math.ceil(o/2),c=o-a;$n(r,a),t.set(c>0?r:0,c),At(!0)}else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;t.set(pe.type,1),pe.count-=1,pe.count<=0?$n(0,0):Ii(),At(!1)}else pe.type>0&&r===pe.type&&o<s&&(t.set(r,o+1),pe.count-=1,pe.count<=0?$n(0,0):Ii(),At(!1));n&&n()}let Qn=null,Jn=null;const Nt=new Array(9).fill(null).map(()=>({type:0,count:0})),Wt=new Array(4).fill(null).map(()=>({type:0,count:0}));let zn=null;const Fh=[{id:"planks",name:"Tábuas de Madeira",category:"Blocos",result:l.WOOD_PLANKS,count:4,gridSize:2,layout:[l.WOOD_LOG,0,0,0],desc:"Coloque 1 Tronco de Carvalho em qualquer espaço da grade.",check:t=>{const e=t.filter(i=>i===l.WOOD_LOG).length,n=t.filter(i=>i!==0&&i!==l.WOOD_LOG).length;return e===1&&n===0}},{id:"sticks",name:"Gravetos",category:"Materiais",result:l.STICK,count:4,gridSize:2,layout:[l.WOOD_PLANKS,0,l.WOOD_PLANKS,0],desc:"Coloque 2 Tábuas de Madeira verticalmente.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[1]===0&&t[3]===0||t[1]===l.WOOD_PLANKS&&t[3]===l.WOOD_PLANKS&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===l.WOOD_PLANKS&&t[s]===l.WOOD_PLANKS&&t.every((c,u)=>u===o||u===s?!0:c===0))return!0}return!1}},{id:"crafting_table",name:"Bancada de Trabalho",category:"Blocos",result:l.CRAFTING_TABLE,count:1,gridSize:2,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"Preencha os 4 espaços (2×2) com Tábuas de Madeira.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===l.WOOD_PLANKS);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,s=r+1,a=r+3,c=r+4;if(t[o]===l.WOOD_PLANKS&&t[s]===l.WOOD_PLANKS&&t[a]===l.WOOD_PLANKS&&t[c]===l.WOOD_PLANKS&&t.every((d,h)=>h===o||h===s||h===a||h===c?!0:d===0))return!0}}return!1}},{id:"furnace",name:"Fornalha",category:"Blocos",result:l.FURNACE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,0,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE],desc:"Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===l.COBBLESTONE)&&t[4]===0},{id:"chest",name:"Baú de Madeira",category:"Blocos",result:l.CHEST,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,0,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===l.WOOD_PLANKS)&&t[4]===0},{id:"torches",name:"Tochas (4x)",category:"Iluminação",result:l.TORCH,count:4,gridSize:2,layout:[l.COAL_ORE,0,l.STICK,0],desc:"1 Carvão em cima e 1 Graveto logo abaixo.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===l.COAL_ORE&&t[2]===l.STICK&&t[1]===0&&t[3]===0||t[1]===l.COAL_ORE&&t[3]===l.STICK&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(t[o]===l.COAL_ORE&&t[s]===l.STICK&&t.every((c,u)=>u===o||u===s?!0:c===0))return!0}return!1}},{id:"wooden_pickaxe",name:"Picareta de Madeira",category:"Ferramentas",result:l.WOODEN_PICKAXE,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS,0,l.STICK,0,0,l.STICK,0],desc:"3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.WOOD_PLANKS&&t[1]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"wooden_sword",name:"Espada de Madeira",category:"Armas",result:l.WOODEN_SWORD,count:1,gridSize:3,layout:[0,l.WOOD_PLANKS,0,0,l.WOOD_PLANKS,0,0,l.STICK,0],desc:"2 Tábuas verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.WOOD_PLANKS&&t[3+i]===l.WOOD_PLANKS&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"stone_pickaxe",name:"Picareta de Pedra",category:"Ferramentas",result:l.STONE_PICKAXE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,l.COBBLESTONE,0,l.STICK,0,0,l.STICK,0],desc:"3 Pedregulhos no topo e 2 Gravetos no meio.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.COBBLESTONE&&t[1]===l.COBBLESTONE&&t[2]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"stone_sword",name:"Espada de Pedra",category:"Armas",result:l.STONE_SWORD,count:1,gridSize:3,layout:[0,l.COBBLESTONE,0,0,l.COBBLESTONE,0,0,l.STICK,0],desc:"2 Pedregulhos verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.COBBLESTONE&&t[3+i]===l.COBBLESTONE&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_pickaxe",name:"Picareta de Ferro",category:"Ferramentas",result:l.IRON_PICKAXE,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.STICK,0,0,l.STICK,0],desc:"3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"iron_sword",name:"Espada de Ferro",category:"Armas",result:l.IRON_SWORD,count:1,gridSize:3,layout:[0,l.IRON_INGOT,0,0,l.IRON_INGOT,0,0,l.STICK,0],desc:"2 Barras de Ferro verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===l.IRON_INGOT&&t[3+i]===l.IRON_INGOT&&t[6+i]===l.STICK,o=t.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_helmet",name:"Capacete de Ferro",category:"Armaduras",result:l.IRON_HELMET,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,0,0,0],desc:"5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"iron_chestplate",name:"Peitoral de Ferro",category:"Armaduras",result:l.IRON_CHESTPLATE,count:1,gridSize:3,layout:[l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT],desc:"8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===0&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===l.IRON_INGOT&&t[5]===l.IRON_INGOT&&t[6]===l.IRON_INGOT&&t[7]===l.IRON_INGOT&&t[8]===l.IRON_INGOT},{id:"iron_leggings",name:"Calças de Ferro",category:"Armaduras",result:l.IRON_LEGGINGS,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT],desc:"7 Barras de Ferro em formato de calças (+5 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===l.IRON_INGOT&&t[7]===0&&t[8]===l.IRON_INGOT},{id:"iron_boots",name:"Botas de Ferro",category:"Armaduras",result:l.IRON_BOOTS,count:1,gridSize:3,layout:[l.IRON_INGOT,0,l.IRON_INGOT,l.IRON_INGOT,0,l.IRON_INGOT,0,0,0],desc:"4 Barras de Ferro em formato de botas (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.IRON_INGOT&&t[1]===0&&t[2]===l.IRON_INGOT&&t[3]===l.IRON_INGOT&&t[4]===0&&t[5]===l.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bow",name:"Arco de Caça",category:"Armas",result:l.BOW,count:1,gridSize:3,layout:[0,l.STICK,l.STRING,l.STICK,0,l.STRING,0,l.STICK,l.STRING],desc:"3 Gravetos e 3 Linhas de Teia na bancada 3×3.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===l.STICK).length,r=t.filter(s=>s===l.STRING).length,o=t.filter(s=>s!==0&&s!==l.STICK&&s!==l.STRING).length;return i===3&&r===3&&o===0}},{id:"wooden_hoe",name:"Enxada de Madeira",category:"Ferramentas",result:l.WOODEN_HOE,count:1,gridSize:3,layout:[l.WOOD_PLANKS,l.WOOD_PLANKS,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Tábuas no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.WOOD_PLANKS&&t[1]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.WOOD_PLANKS&&t[2]===l.WOOD_PLANKS&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.WOOD_PLANKS).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.WOOD_PLANKS).length;return i&&r===2&&o===2&&s===0}},{id:"stone_hoe",name:"Enxada de Pedra",category:"Ferramentas",result:l.STONE_HOE,count:1,gridSize:3,layout:[l.COBBLESTONE,l.COBBLESTONE,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Pedregulhos no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.COBBLESTONE&&t[1]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.COBBLESTONE&&t[2]===l.COBBLESTONE&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.COBBLESTONE).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.COBBLESTONE).length;return i&&r===2&&o===2&&s===0}},{id:"iron_hoe",name:"Enxada de Ferro",category:"Ferramentas",result:l.IRON_HOE,count:1,gridSize:3,layout:[l.IRON_INGOT,l.IRON_INGOT,0,0,l.STICK,0,0,l.STICK,0],desc:"2 Barras de Ferro no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.IRON_INGOT&&t[1]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK||t[1]===l.IRON_INGOT&&t[2]===l.IRON_INGOT&&t[4]===l.STICK&&t[7]===l.STICK,r=t.filter(a=>a===l.STICK).length,o=t.filter(a=>a===l.IRON_INGOT).length,s=t.filter(a=>a!==0&&a!==l.STICK&&a!==l.IRON_INGOT).length;return i&&r===2&&o===2&&s===0}},{id:"bread",name:"Pão Dourado",category:"Alimentação",result:l.BREAD,count:1,gridSize:3,layout:[0,0,0,l.WHEAT,l.WHEAT,l.WHEAT,0,0,0],desc:"3 Trigos colhidos em linha horizontal (+5 Vida).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=i*3,o=i*3+1,s=i*3+2;if(t[r]===l.WHEAT&&t[o]===l.WHEAT&&t[s]===l.WHEAT&&t.every((c,u)=>u===r||u===o||u===s?!0:c===0))return!0}return!1}},{id:"tnt",name:"Bloco de TNT",category:"Explosivos",result:l.TNT,count:1,gridSize:3,layout:[l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER,l.SAND,l.GUNPOWDER],desc:"5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(s=>s===l.GUNPOWDER).length,r=t.filter(s=>s===l.SAND).length,o=t.filter(s=>s!==0&&s!==l.GUNPOWDER&&s!==l.SAND).length;return i===5&&r===4&&o===0}},{id:"diamond_sword",name:"Espada de Diamante",category:"Armas",result:l.DIAMOND_SWORD,count:1,gridSize:3,layout:[0,l.DIAMOND,0,0,l.DIAMOND,0,0,l.STICK,0],desc:"2 Diamantes verticais e 1 Graveto na base (+9 Dano).",check:(t,e,n)=>{if(e===3&&n===3){for(let i=0;i<3;i++)if(t[i]===l.DIAMOND&&t[i+3]===l.DIAMOND&&t[i+6]===l.STICK&&t.filter((o,s)=>s===i||s===i+3||s===i+6?!1:o!==0).length===0)return!0}return!1}},{id:"diamond_pickaxe",name:"Picareta de Diamante",category:"Ferramentas",result:l.DIAMOND_PICKAXE,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.STICK,0,0,l.STICK,0],desc:"3 Diamantes na linha superior e 2 Gravetos no centro vertical (Capaz de minerar Obsidiana).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===0&&t[4]===l.STICK&&t[5]===0&&t[6]===0&&t[7]===l.STICK&&t[8]===0},{id:"diamond_helmet",name:"Capacete de Diamante",category:"Armaduras",result:l.DIAMOND_HELMET,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,0,0,0],desc:"5 Diamantes em formato de arco/U invertido (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"diamond_chestplate",name:"Peitoral de Diamante",category:"Armaduras",result:l.DIAMOND_CHESTPLATE,count:1,gridSize:3,layout:[l.DIAMOND,0,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND],desc:"8 Diamantes em formato de colete com espaço superior central (+8 Defesa máxima).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===0&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===l.DIAMOND&&t[5]===l.DIAMOND&&t[6]===l.DIAMOND&&t[7]===l.DIAMOND&&t[8]===l.DIAMOND},{id:"diamond_leggings",name:"Calças de Diamante",category:"Armaduras",result:l.DIAMOND_LEGGINGS,count:1,gridSize:3,layout:[l.DIAMOND,l.DIAMOND,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,l.DIAMOND,0,l.DIAMOND],desc:"7 Diamantes em formato de calças (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===l.DIAMOND&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===l.DIAMOND&&t[7]===0&&t[8]===l.DIAMOND},{id:"diamond_boots",name:"Botas de Diamante",category:"Armaduras",result:l.DIAMOND_BOOTS,count:1,gridSize:3,layout:[l.DIAMOND,0,l.DIAMOND,l.DIAMOND,0,l.DIAMOND,0,0,0],desc:"4 Diamantes em formato de botas (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===l.DIAMOND&&t[1]===0&&t[2]===l.DIAMOND&&t[3]===l.DIAMOND&&t[4]===0&&t[5]===l.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bed",name:"Cama Confortável",category:"Mobiliário",result:l.BED,count:1,gridSize:3,layout:[0,0,0,l.WOOL,l.WOOL,l.WOOL,l.WOOD_PLANKS,l.WOOD_PLANKS,l.WOOD_PLANKS],desc:"3 Blocos de Lã de Ovelha sobre 3 Tábuas de Madeira (Permite dormir e pular a noite).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===l.WOOL&&t[1]===l.WOOL&&t[2]===l.WOOL&&t[3]===l.WOOD_PLANKS&&t[4]===l.WOOD_PLANKS&&t[5]===l.WOOD_PLANKS&&t[6]===0&&t[7]===0&&t[8]===0,r=t[0]===0&&t[1]===0&&t[2]===0&&t[3]===l.WOOL&&t[4]===l.WOOL&&t[5]===l.WOOL&&t[6]===l.WOOD_PLANKS&&t[7]===l.WOOD_PLANKS&&t[8]===l.WOOD_PLANKS;return i||r}},{id:"flint_and_steel",name:"Isqueiro de Pederneira",category:"Ferramentas",result:l.FLINT_AND_STEEL,count:1,gridSize:2,layout:[l.IRON_INGOT,0,0,l.FLINT],desc:"1 Barra de Ferro e 1 Pederneira diagonalmente (Acende o Portal do Nether e Fogueiras).",check:t=>{const e=t.filter(r=>r===l.IRON_INGOT).length,n=t.filter(r=>r===l.FLINT).length,i=t.filter(r=>r!==0&&r!==l.IRON_INGOT&&r!==l.FLINT).length;return e===1&&n===1&&i===0}},{id:"quartz_block",name:"Bloco de Quartzo Polido",category:"Blocos",result:l.QUARTZ_BLOCK,count:1,gridSize:2,layout:[l.QUARTZ,l.QUARTZ,l.QUARTZ,l.QUARTZ],desc:"4 Cristais de Quartzo do Nether dispostos em quadrado 2×2.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===l.QUARTZ);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,s=r+1,a=r+3,c=r+4;if(t[o]===l.QUARTZ&&t[s]===l.QUARTZ&&t[a]===l.QUARTZ&&t[c]===l.QUARTZ&&t.every((d,h)=>h===o||h===s||h===a||h===c?!0:d===0))return!0}}return!1}}];function Bh(t,e,n){const i=t.map(r=>r&&typeof r=="object"?r.type||0:r||0);for(const r of Fh)if(r.check(i,e,n))return{result:r.result,count:r.count,name:r.name};return null}function Gh(){Qn||(Qn=document.createElement("div"),Qn.id="crafting-table-modal",Qn.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",Qn.innerHTML=`
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
  `,document.body.appendChild(Qn),document.getElementById("close-table-btn").addEventListener("click",_E),document.getElementById("open-recipe-book-table").addEventListener("click",kh),Hh(),$i())}function gE(){Qn||Gh(),Qn.style.display="flex",Jo(xt.CRAFTING_TABLE),At(!0),Ar(),$i()}function _E(){if(Qn){Qn.style.display="none",Ci(xt.CRAFTING_TABLE),At(!1),pe.type>0&&pe.count>0&&(Hn(pe.type,pe.count),cl());for(let t=0;t<9;t++){const e=Nt[t];e&&e.type>0&&e.count>0&&(Hn(e.type,e.count),Nt[t]={type:0,count:0})}Ar()}}function $i(){const t=document.getElementById("table-craft-grid"),e=document.getElementById("table-output-slot"),n=document.getElementById("table-hotbar-grid");if(!(!t||!e||!n)){if(t.innerHTML="",Nt.forEach((i,r)=>{const o=document.createElement("div");o.className="slot w-14 h-14 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const s=i||{type:0,count:0};if(s.type>0&&s.count>0){const c=It(s.type,38);if(c&&o.appendChild(c),s.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=s.count,o.appendChild(u)}}const a={get:()=>Nt[r]||{type:0,count:0},set:(c,u)=>{Nt[r]={type:c,count:c===0?0:u},Ar()}};o.addEventListener("mousedown",c=>si(a,c,$i)),o.addEventListener("contextmenu",c=>c.preventDefault()),t.appendChild(o)}),e.innerHTML="",zn&&zn.result>0){const i=It(zn.result,48);if(i&&e.appendChild(i),zn.count>1){const r=document.createElement("span");r.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",r.textContent=zn.count,e.appendChild(r)}}e.onmousedown=i=>{if(i.preventDefault(),zn&&zn.result>0){const r=zn.result,o=zn.count;if(i.shiftKey){if(Hn(r,o)){En();for(let s=0;s<9;s++)Nt[s].count>1?Nt[s].count-=1:Nt[s]={type:0,count:0};Ar(),$i()}}else{const s=es(r);if(pe.type===0){$n(r,o),En();for(let a=0;a<9;a++)Nt[a].count>1?Nt[a].count-=1:Nt[a]={type:0,count:0};Ar(),$i()}else if(pe.type===r&&pe.count+o<=s){pe.count+=o,Ii(),En();for(let a=0;a<9;a++)Nt[a].count>1?Nt[a].count-=1:Nt[a]={type:0,count:0};Ar(),$i()}}}},e.oncontextmenu=i=>i.preventDefault(),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div");r.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative";const o=Ne[i]||{type:0,count:0};if(o.type>0&&o.count>0){const a=It(o.type,30);if(a&&r.appendChild(a),r.title=`${eo[o.type]||"Item"}`,o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const s={get:()=>Ne[i]||{type:0,count:0},set:(a,c)=>{Ne[i]={type:a,count:a===0?0:c}},onShiftClick:(a,c)=>{const u=Nt.findIndex(d=>d.type===0||d.count===0);u!==-1&&(Nt[u]={type:a,count:c},Ne[i]={type:0,count:0},Ar(),$i())}};r.addEventListener("mousedown",a=>si(s,a,$i)),r.addEventListener("contextmenu",a=>a.preventDefault()),n.appendChild(r)}}}function Ar(){zn=Bh(Nt,3,3)}function Hh(){Jn||(Jn=document.createElement("div"),Jn.id="recipe-book-modal",Jn.className="fixed inset-0 z-[200] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-lg select-none",Jn.innerHTML=`
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
  `,document.body.appendChild(Jn),document.getElementById("close-recipe-book-btn").addEventListener("click",xE),vE())}function vE(){const t=document.getElementById("recipe-cards-container");t&&(t.innerHTML="",Fh.forEach(e=>{const n=document.createElement("div");n.className="flex items-center justify-between bg-surface-container/60 p-3.5 rounded-xl border border-outline-variant hover:border-primary/50 transition-all";const i=document.createElement("div");i.className="flex items-center gap-3.5 max-w-[340px]";const r=document.createElement("div");r.className="w-12 h-12 rounded-xl bg-surface-container-lowest border-2 border-primary flex items-center justify-center relative shrink-0 shadow-[0_0_8px_rgba(120,220,119,0.3)]";const o=It(e.result,36);if(r.appendChild(o),e.count>1){const h=document.createElement("span");h.className="absolute -bottom-1 -right-1 bg-primary text-on-primary font-label-caps text-[10px] font-bold px-1 rounded",h.textContent=e.count,r.appendChild(h)}i.appendChild(r);const s=document.createElement("div");s.innerHTML=`
      <div class="font-headline-lg-mobile text-sm font-bold text-on-surface">${e.name}</div>
      <div class="font-label-caps text-[10px] font-semibold text-primary uppercase mb-0.5">${e.category}</div>
      <div class="font-body-md text-xs text-on-surface-variant leading-snug">${e.desc}</div>
    `,i.appendChild(s);const a=document.createElement("div");a.className="flex flex-col items-center gap-1 shrink-0";const c=document.createElement("span");c.className="font-label-caps text-[9px] font-bold text-on-surface-variant uppercase tracking-wider",c.textContent=`Grade ${e.gridSize}×${e.gridSize}`,a.appendChild(c);const u=document.createElement("div"),d=e.gridSize;u.className=`grid grid-cols-${d} gap-1 bg-surface-container-lowest p-1.5 rounded-lg border border-outline-variant`,u.style.gridTemplateColumns=`repeat(${d}, 28px)`,e.layout.forEach(h=>{const f=document.createElement("div");if(f.className="w-7 h-7 rounded bg-surface-container/80 border border-outline-variant/60 flex items-center justify-center",h>0){const m=It(h,22);f.appendChild(m),f.title=eo[h]||""}u.appendChild(f)}),a.appendChild(u),n.appendChild(i),n.appendChild(a),t.appendChild(n)}))}function kh(){Jn||Hh(),Jn.style.display="flex",Jo(xt.RECIPE_BOOK)}function xE(){Jn&&(Jn.style.display="none",Ci(xt.RECIPE_BOOK))}const As={[l.IRON_ORE]:{output:l.IRON_INGOT,time:3.5},[l.PORKCHOP]:{output:l.COOKED_PORKCHOP,time:2.5},[l.MUTTON]:{output:l.COOKED_MUTTON,time:2.5},[l.COBBLESTONE]:{output:l.STONE,time:3}},qa={[l.LAVA]:60,[l.COAL_ORE]:16,[l.WOOD_LOG]:6,[l.WOOD_PLANKS]:3,[l.STICK]:1.5},bs=new Map;let Us=null,Ai=null;function SE(t,e,n){const i=`${t},${e},${n}`;return bs.has(i)||bs.set(i,{x:t,y:e,z:n,inputItem:0,inputCount:0,fuelItem:0,fuelCount:0,outputItem:0,outputCount:0,burnTimeRemaining:0,maxBurnTime:0,cookProgress:0}),bs.get(i)}function ME(t,e,n){Us=`${t},${e},${n}`,SE(t,e,n),Ai||AE(),Ai.style.display="flex",Jo(xt.FURNACE),At(!0),qn()}function EE(){Ai&&(Ai.style.display="none",Us=null,Ci(xt.FURNACE),At(!1),pe.type>0&&pe.count>0&&(Hn(pe.type,pe.count),cl()))}function yE(){return Mh(xt.FURNACE)}function TE(t){for(const[e,n]of bs.entries()){const r=n.inputItem>0&&As[n.inputItem]?As[n.inputItem]:null;n.burnTimeRemaining>0&&(n.burnTimeRemaining=Math.max(0,n.burnTimeRemaining-t)),r&&(n.outputItem===0||n.outputItem===r.output)?(n.burnTimeRemaining<=0&&n.fuelCount>0&&qa[n.fuelItem]&&(n.maxBurnTime=qa[n.fuelItem],n.burnTimeRemaining=n.maxBurnTime,n.fuelCount--,n.fuelCount<=0&&(n.fuelItem=0)),n.burnTimeRemaining>0?(n.cookProgress+=t,n.cookProgress>=r.time&&(n.cookProgress=0,n.inputCount--,n.inputCount<=0&&(n.inputItem=0),n.outputItem=r.output,n.outputCount=(n.outputCount||0)+1)):n.cookProgress=Math.max(0,n.cookProgress-t*.5)):n.cookProgress=0}Us&&yE()&&qn()}function AE(){Ai=document.createElement("div"),Ai.id="furnace-modal",Ai.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",Ai.innerHTML=`
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
  `,document.body.appendChild(Ai),document.getElementById("close-furnace-btn").addEventListener("click",EE)}function qn(){if(!Us)return;const t=bs.get(Us);if(!t)return;const e=document.getElementById("furnace-input-slot"),n=document.getElementById("furnace-fuel-slot"),i=document.getElementById("furnace-output-slot"),r=document.getElementById("furnace-flame-active"),o=document.getElementById("furnace-progress-bar"),s=document.getElementById("furnace-hotbar-grid");if(!e||!n||!i||!r||!o||!s)return;if(e.innerHTML="",t.inputItem>0&&t.inputCount>0){const f=It(t.inputItem,44);if(f&&e.appendChild(f),t.inputCount>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=t.inputCount,e.appendChild(m)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="MINÉRIO",e.appendChild(f)}const a={get:()=>({type:t.inputItem,count:t.inputCount}),set:(f,m)=>{t.inputItem=f,t.inputCount=f===0?0:m,t.inputCount<=0&&(t.inputItem=0)},allowEquip:f=>!!As[f]};if(e.onmousedown=f=>si(a,f,qn),e.oncontextmenu=f=>f.preventDefault(),n.innerHTML="",t.fuelItem>0&&t.fuelCount>0){const f=It(t.fuelItem,44);if(f&&n.appendChild(f),t.fuelCount>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=t.fuelCount,n.appendChild(m)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="CARVÃO",n.appendChild(f)}const c={get:()=>({type:t.fuelItem,count:t.fuelCount}),set:(f,m)=>{t.fuelItem=f,t.fuelCount=f===0?0:m,t.fuelCount<=0&&(t.fuelItem=0)},allowEquip:f=>!!qa[f]};n.onmousedown=f=>si(c,f,qn),n.oncontextmenu=f=>f.preventDefault();const u=t.maxBurnTime>0?Math.min(100,Math.round(t.burnTimeRemaining/t.maxBurnTime*100)):0;r.style.height=`${u}%`;const d=t.inputItem>0?As[t.inputItem]:null,h=d?Math.min(100,Math.round(t.cookProgress/d.time*100)):0;if(o.style.width=`${h}%`,i.innerHTML="",t.outputItem>0&&t.outputCount>0){const f=It(t.outputItem,56);if(f&&i.appendChild(f),t.outputCount>1){const m=document.createElement("span");m.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow-[0_0_10px_rgba(120,220,119,0.8)] font-bold",m.textContent=t.outputCount,i.appendChild(m)}}else{const f=document.createElement("span");f.className="font-label-caps text-[11px] text-primary/70 uppercase",f.textContent="PRODUTO",i.appendChild(f)}i.onmousedown=f=>{if(f.preventDefault(),t.outputItem>0&&t.outputCount>0){if(f.shiftKey)Hn(t.outputItem,t.outputCount)&&(En(),t.outputItem=0,t.outputCount=0,qn());else if(pe.type===0)$n(t.outputItem,t.outputCount),En(),t.outputItem=0,t.outputCount=0,qn();else if(pe.type===t.outputItem){const m=es(t.outputItem),_=Math.min(t.outputCount,m-pe.count);_>0&&(pe.count+=_,t.outputCount-=_,t.outputCount<=0&&(t.outputItem=0),Ii(),En(),qn())}}},i.oncontextmenu=f=>f.preventDefault(),s.innerHTML="";for(let f=0;f<9;f++){const m=document.createElement("div"),_=Ne[f]||{type:0,count:0};if(m.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",_.type>0&&_.count>0){const g=It(_.type,30);if(g&&m.appendChild(g),m.title=`${eo[_.type]||"Item"}`,_.count>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=_.count,m.appendChild(p)}}const v={get:()=>Ne[f]||{type:0,count:0},set:(g,p)=>{Ne[f]={type:g,count:g===0?0:p},ai()},onShiftClick:(g,p)=>{As[g]?(t.inputItem===0||t.inputItem===g)&&(t.inputItem=g,t.inputCount=(t.inputCount||0)+p,Ne[f]={type:0,count:0},ai(),qn()):qa[g]&&(t.fuelItem===0||t.fuelItem===g)&&(t.fuelItem=g,t.fuelCount=(t.fuelCount||0)+p,Ne[f]={type:0,count:0},ai(),qn())}};m.addEventListener("mousedown",g=>si(v,g,qn)),m.addEventListener("contextmenu",g=>g.preventDefault()),s.appendChild(m)}}const nr=new Map;let Ka=null,bi=null;function bE(t,e,n){const i=`${t},${e},${n}`;return nr.has(i)||nr.set(i,new Array(27).fill(null).map(()=>({type:0,count:0}))),nr.get(i)}function wE(t,e,n){const i=`${t},${e},${n}`;return nr.has(i)?nr.get(i).filter(o=>o&&o.type>0&&o.count>0):[]}function RE(t,e,n){const i=`${t},${e},${n}`;nr.has(i)&&nr.delete(i)}function CE(t,e,n){Ka=`${t},${e},${n}`,bE(t,e,n),bi||DE(),bi.style.display="flex",Jo(xt.CHEST),At(!0),uu()}function IE(){bi&&(bi.style.display="none",Ka=null,Ci(xt.CHEST),At(!1),pe.type>0&&pe.count>0&&(Hn(pe.type,pe.count),cl()))}function DE(){bi=document.createElement("div"),bi.id="chest-modal",bi.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",bi.innerHTML=`
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
  `,document.body.appendChild(bi),document.getElementById("close-chest-btn").addEventListener("click",IE)}function uu(){if(!Ka)return;const t=nr.get(Ka);if(!t)return;const e=document.getElementById("chest-grid"),n=document.getElementById("chest-hotbar-grid");if(!(!e||!n)){e.innerHTML="",t.forEach((i,r)=>{const o=document.createElement("div"),s=i||{type:0,count:0};if(o.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${s.type>0?"border-tertiary/70 shadow-[0_0_8px_rgba(255,180,169,0.2)]":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,s.type>0&&s.count>0){const c=It(s.type,32);if(c&&o.appendChild(c),o.title=`${eo[s.type]||"Item"}`,s.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=s.count,o.appendChild(u)}}const a={get:()=>t[r]||{type:0,count:0},set:(c,u)=>{t[r]={type:c,count:c===0?0:u}},onShiftClick:(c,u)=>{Hn(c,u)&&(t[r]={type:0,count:0},At(!1))}};o.addEventListener("mousedown",c=>si(a,c,uu)),o.addEventListener("contextmenu",c=>c.preventDefault()),e.appendChild(o)}),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div"),o=Ne[i]||{type:0,count:0};if(r.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${o.type>0?"border-primary/60":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,o.type>0&&o.count>0){const a=It(o.type,32);if(a&&r.appendChild(a),r.title=`${eo[o.type]||"Item"}`,o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const s={get:()=>Ne[i]||{type:0,count:0},set:(a,c)=>{Ne[i]={type:a,count:a===0?0:c},ai()},onShiftClick:(a,c)=>{const u=es(a);let d=c;for(let h=0;h<27;h++)if(t[h].type===a&&t[h].count<u){const f=u-t[h].count,m=Math.min(f,d);if(t[h].count+=m,d-=m,d<=0)break}if(d>0){for(let h=0;h<27;h++)if(t[h].type===0||t[h].count===0){t[h]={type:a,count:d},d=0;break}}Ne[i]=d>0?{type:a,count:d}:{type:0,count:0},ai(),At(!1)}};r.addEventListener("mousedown",a=>si(s,a,uu)),r.addEventListener("contextmenu",a=>a.preventDefault()),n.appendChild(r)}}}let oi=null,Nr=null,Qt=null,Ge=null,Mt=l.WOODEN_SWORD,Fs=!1,Lr=!1,In=0,vs={x:NaN,y:NaN,z:NaN},Jl=0;const Lu=new Map,OE=new q(1.002,1.002,1.002),NE=new Cx(OE),LE=new dh({color:0,linewidth:2,transparent:!0,opacity:.6}),PE=new q(1.006,1.006,1.006),Vh=new gn({color:1973067,wireframe:!0,transparent:!0,opacity:0});function UE(t){oi=t,Nr=new bx(NE,LE),Nr.visible=!1,oi.add(Nr),Qt=new W(PE,Vh),Qt.visible=!1,oi.add(Qt),window.addEventListener("mousedown",GE),window.addEventListener("mouseup",HE),window.addEventListener("blur",()=>{Fs=!1,Lr=!1,In=0,Qt&&(Qt.visible=!1)})}function FE(t=.016){if(BE(t),!Ws()||Ts()){Nr.visible=!1,Qt.visible=!1,Ge=null,Lr=!1,Fs=!1,In=0;return}const e=Vs();if(!e)return;const n=new D(0,0,-1);n.applyQuaternion(e.quaternion);const i=bM(e.position,n);if(i)if(Ge=i,Nr.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),Nr.visible=!0,(i.hit.x!==vs.x||i.hit.y!==vs.y||i.hit.z!==vs.z)&&(vs={x:i.hit.x,y:i.hit.y,z:i.hit.z},In=0),Fs&&Lr){const r=Kt(i.hit.x,i.hit.y,i.hit.z);if(r!==l.AIR&&r!==l.WATER){const o=mM(r),s=gM(r,Mt);if(In+=t*s/o,Jl+=t,Jl>=.22&&(Jl=0,Hx(r),cu(i.hit.x,i.hit.y,i.hit.z,r)),Qt.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),Qt.visible=!0,Vh.opacity=Oa.clamp(In*.85,.15,.9),In>=1){if(Px(),cu(i.hit.x,i.hit.y,i.hit.z,r),r===l.CHEST&&(wE(i.hit.x,i.hit.y,i.hit.z).forEach(c=>{Ht(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,c)}),RE(i.hit.x,i.hit.y,i.hit.z)),r===l.GRASS&&Math.random()<.35&&Ht(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT_SEEDS),r===l.WHEAT_STAGE_3)Ht(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT),Ht(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l.WHEAT_SEEDS),Lu.delete(`${i.hit.x},${i.hit.y},${i.hit.z}`);else{const a=Ch(r);a>0&&Ht(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,a)}ii(oi,i.hit.x,i.hit.y,i.hit.z,l.AIR),In=0,Lr=!1,Qt.visible=!1}}else In=0,Qt.visible=!1}else In=0,Qt.visible=!1;else Ge=null,Nr.visible=!1,Qt.visible=!1,In=0,Lr=!1}function BE(t){for(const[e,n]of Lu.entries())n.timer+=t,n.timer>=16&&(n.timer=0,n.stage===1?(n.stage=2,ii(oi,n.x,n.y,n.z,l.WHEAT_STAGE_2)):n.stage===2&&(n.stage=3,ii(oi,n.x,n.y,n.z,l.WHEAT_STAGE_3)))}function GE(t){if(!Ws()||Ts())return;const e=Vs();if(!e)return;const n=new D(0,0,-1);if(n.applyQuaternion(e.quaternion),t.button===0){Fs=!0;const i=pE(e.position,n,3.8);if(i){const r=Mt===l.DIAMOND_SWORD,o=Mt===l.IRON_SWORD,s=Mt===l.STONE_SWORD,a=Mt===l.WOODEN_SWORD,c=Mt===l.DIAMOND_PICKAXE||Mt===l.IRON_PICKAXE||Mt===l.STONE_PICKAXE||Mt===l.WOODEN_PICKAXE;let u=r?9:o?7:s?5:a?4:c?3:2;const d=np();d&&!d.onGround&&!d.isFlying?(u=Math.floor(u*1.5),Yx(),BM(i.x,i.y+.8,i.z)):vh(),Ou(i,u,n);return}if(Ge){if(Kt(Ge.hit.x,Ge.hit.y,Ge.hit.z)===l.TNT){eE(Ge.hit.x,Ge.hit.y,Ge.hit.z);return}Lr=!0,vs={x:Ge.hit.x,y:Ge.hit.y,z:Ge.hit.z}}}else if(t.button===2){if(t.preventDefault(),Mt===l.FLINT_AND_STEEL&&(Kx(),Ge)){const i=Kt(Ge.hit.x,Ge.hit.y,Ge.hit.z),{prev:r}=Ge;if(i===l.OBSIDIAN||i===l.NETHERRACK){ii(oi,r.x,r.y,r.z,l.NETHER_PORTAL),GM(r.x+.5,r.y+.5,r.z+.5);return}}if(Mt===l.BOW&&Xh(l.ARROW)){Ea(l.ARROW),nE(e.position,n);return}if(uM(Mt)){const i=hM(Mt);if(i>0){Rd(i),En(),Ea(Mt);return}}if(Ge){const i=Kt(Ge.hit.x,Ge.hit.y,Ge.hit.z);if(i===l.BED)if(DM()){Xx(),NM(),Rd(4);return}else{En();return}if(Rh(Mt)&&(i===l.GRASS||i===l.DIRT)){zx(),ii(oi,Ge.hit.x,Ge.hit.y,Ge.hit.z,l.FARMLAND);return}if(Mt===l.WHEAT_SEEDS&&i===l.FARMLAND){const r=Ge.hit.y+1;if(r<64&&Kt(Ge.hit.x,r,Ge.hit.z)===l.AIR){nd(),ii(oi,Ge.hit.x,r,Ge.hit.z,l.WHEAT_STAGE_1),Lu.set(`${Ge.hit.x},${r},${Ge.hit.z}`,{x:Ge.hit.x,y:r,z:Ge.hit.z,stage:1,timer:0}),Ea(l.WHEAT_SEEDS);return}}if(i===l.CRAFTING_TABLE){gE();return}if(i===l.FURNACE||i===l.FURNACE_LIT){ME(Ge.hit.x,Ge.hit.y,Ge.hit.z);return}if(i===l.CHEST){CE(Ge.hit.x,Ge.hit.y,Ge.hit.z);return}if(lM(Mt)){const{prev:r}=Ge;r.y>=0&&r.y<64&&Kt(r.x,r.y,r.z)===l.AIR&&(nd(),ii(oi,r.x,r.y,r.z,Mt),Ea(Mt,1))}}}}function HE(t){t.button===0&&(Fs=!1,Lr=!1,In=0,Qt&&(Qt.visible=!1))}function kE(t){Mt=t}function Pu(){return Mt}const xd=[{type:l.WOODEN_SWORD,count:1},{type:l.WOODEN_PICKAXE,count:1},{type:l.GRASS,count:64},{type:l.DIRT,count:64},{type:l.WOOD_LOG,count:32},{type:l.COBBLESTONE,count:64},{type:l.TORCH,count:32},{type:l.WATER,count:1},{type:0,count:0}],Ne=new Array(36).fill(null).map(()=>({type:0,count:0}));for(let t=0;t<xd.length;t++)Ne[t]={...xd[t]};const Pt=[0,0,0,0];let Uu=0,Xn=null,ei=null,ws=null,Ro=null,Rs=null,Ot=null,Pr=null,Ur=null,Fr=null,Br=null,Gr=null,Hr=null,kr=null,fu=-.3,Ua=!1,ec=0;function Wh(){ei||(ei=document.createElement("div"),ei.id="inventory-modal",ei.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ei.innerHTML=`
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
  `,document.body.appendChild(ei),document.getElementById("close-inventory-btn").addEventListener("click",zh),document.getElementById("open-recipe-book-inv").addEventListener("click",kh),window.addEventListener("keydown",t=>{t.code==="KeyE"&&zE()}),VE(),ti())}function VE(){const t=document.getElementById("inv-char-preview-canvas");if(!t)return;ws=new uh({canvas:t,alpha:!0,antialias:!0}),ws.setSize(140,200),ws.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ro=new fh,Rs=new Jt(40,140/200,.1,20),Rs.position.set(0,1,3.2),Rs.lookAt(0,.9,0);const e=new gh(16777215,1.4);Ro.add(e);const n=new mh(16777215,1.8);n.position.set(2,4,3),Ro.add(n),Ot=new rt,Ro.add(Ot);const i=new De({color:13011801}),r=new De({color:4528643}),o=new De({color:43176}),s=new De({color:1981066}),a=new Ns({color:14870768,roughness:.35,metalness:.85}),c=new W(new q(.38,.38,.38),i);c.position.set(0,1.38,0),Ot.add(c);const u=new W(new q(.4,.15,.4),r);u.position.set(0,1.48,-.01),Ot.add(u),Pr=new W(new q(.44,.44,.44),a),Pr.position.set(0,1.38,0),Pr.visible=!1,Ot.add(Pr);const d=new W(new q(.42,.5,.2),o);d.position.set(0,.94,0),Ot.add(d),Ur=new W(new q(.48,.54,.26),a),Ur.position.set(0,.94,0),Ur.visible=!1,Ot.add(Ur);const h=new W(new q(.16,.48,.16),i);h.position.set(-.29,.93,0),Ot.add(h);const f=new W(new q(.16,.48,.16),i);f.position.set(.29,.93,0),Ot.add(f);const m=new W(new q(.18,.58,.18),s);m.position.set(-.1,.4,0),Ot.add(m);const _=new W(new q(.18,.58,.18),s);_.position.set(.1,.4,0),Ot.add(_),Fr=new W(new q(.2,.38,.2),a),Fr.position.set(-.1,.48,0),Fr.visible=!1,Ot.add(Fr),Br=new W(new q(.2,.38,.2),a),Br.position.set(.1,.48,0),Br.visible=!1,Ot.add(Br),Gr=new W(new q(.21,.18,.23),a),Gr.position.set(-.1,.2,.015),Gr.visible=!1,Ot.add(Gr),Hr=new W(new q(.21,.18,.23),a),Hr.position.set(.1,.2,.015),Hr.visible=!1,Ot.add(Hr),t.addEventListener("mousedown",v=>{Ua=!0,ec=v.clientX}),window.addEventListener("mousemove",v=>{if(!Ua)return;const g=v.clientX-ec;ec=v.clientX,fu+=g*.02}),window.addEventListener("mouseup",()=>{Ua=!1})}function WE(){if(kr)return;function t(){if(!ul()){kr=null;return}Ua||(fu+=.012),Ot&&(Ot.rotation.y=fu),ws&&Ro&&Rs&&ws.render(Ro,Rs),kr=requestAnimationFrame(t)}kr=requestAnimationFrame(t)}function Sd(){const t=new Ns({color:14870768,roughness:.35,metalness:.85}),e=new Ns({color:2282478,roughness:.2,metalness:.65,emissive:537412,emissiveIntensity:.35});if(Pr){const i=Pt[0]||0;Pr.visible=i>0,i>0&&(Pr.material=i===l.DIAMOND_HELMET?e:t)}if(Ur){const i=Pt[1]||0;Ur.visible=i>0,i>0&&(Ur.material=i===l.DIAMOND_CHESTPLATE?e:t)}if(Fr&&Br){const i=Pt[2]||0;if(Fr.visible=i>0,Br.visible=i>0,i>0){const r=i===l.DIAMOND_LEGGINGS?e:t;Fr.material=r,Br.material=r}}if(Gr&&Hr){const i=Pt[3]||0;if(Gr.visible=i>0,Hr.visible=i>0,i>0){const r=i===l.DIAMOND_BOOTS?e:t;Gr.material=r,Hr.material=r}}const n=document.getElementById("inv-defense-badge");n&&(n.textContent=`DEF: ${Fu()}`)}function zE(){ul()?zh():XE()}function XE(){ei||Wh(),ei.style.display="flex",Jo(xt.INVENTORY),At(!0),Co(),ti(),WE()}function zh(){if(ei){ei.style.display="none",Ci(xt.INVENTORY),At(!1),kr&&(cancelAnimationFrame(kr),kr=null),pe.type>0&&pe.count>0&&(Hn(pe.type,pe.count),cl());for(let t=0;t<4;t++){const e=Wt[t];e&&e.type>0&&e.count>0&&(Hn(e.type,e.count),Wt[t]={type:0,count:0})}Co(),ai()}}function ul(){return Mh(xt.INVENTORY)}function qE(){return Ne.slice(0,9).map(t=>t.type)}function KE(){return Ne.slice(0,9)}function YE(t){Uu=t,ai()}function Fu(){let t=0;for(let e=0;e<4;e++)Pt[e]>0&&(t+=dM(Pt[e]));return t}function Hn(t,e=1){if(!t||t===0||e<=0)return!1;let n=e;const i=es(t);if(i>1){for(let r=0;r<36;r++)if(Ne[r].type===t&&Ne[r].count<i){const o=i-Ne[r].count,s=Math.min(o,n);if(Ne[r].count+=s,n-=s,n<=0)break}}if(n>0){for(let r=0;r<36;r++)if(Ne[r].type===0||Ne[r].count===0){const o=Math.min(i,n);if(Ne[r]={type:t,count:o},n-=o,n<=0)break}}return ti(),ai(),n===0}function Xh(t,e=1){let n=0;for(let i=0;i<36;i++)Ne[i].type===t&&(n+=Ne[i].count);return n>=e}function Ea(t,e=1){if(!Xh(t,e))return!1;let n=e;for(let i=0;i<36;i++)if(Ne[i].type===t){const r=Math.min(Ne[i].count,n);if(Ne[i].count-=r,n-=r,Ne[i].count<=0&&(Ne[i]={type:0,count:0}),n<=0)break}return ti(),ai(),!0}function ai(){var e;const t=((e=Ne[Uu])==null?void 0:e.type)||0;kE(t);for(let n=0;n<9;n++){const i=document.getElementById(`hotbar-slot-${n}`);if(i&&(i.innerHTML="",Ne[n].type>0)){const r=It(Ne[n].type,38);if(r&&i.appendChild(r),Ne[n].count>1){const o=document.createElement("span");o.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",o.textContent=Ne[n].count,i.appendChild(o)}}}}function ti(){const t=document.getElementById("inv-armor-grid"),e=document.getElementById("inv-craft-2x2-grid"),n=document.getElementById("inv-craft-2x2-output"),i=document.getElementById("inv-storage-grid"),r=document.getElementById("inv-hotbar-grid");if(!t||!e||!n||!i||!r)return;Sd(),t.innerHTML="";const o=["security","checkroom","accessibility","directions_run"],s=["Capacete","Peitoral","Calças","Botas"],a=[[l.IRON_HELMET,l.DIAMOND_HELMET],[l.IRON_CHESTPLATE,l.DIAMOND_CHESTPLATE],[l.IRON_LEGGINGS,l.DIAMOND_LEGGINGS],[l.IRON_BOOTS,l.DIAMOND_BOOTS]];for(let c=0;c<4;c++){const u=document.createElement("div");if(u.className="slot w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",u.title=`Slot de ${s[c]}`,Pt[c]>0){const h=It(Pt[c],30);h&&u.appendChild(h)}else{const h=document.createElement("span");h.className="material-symbols-outlined text-on-surface-variant text-base opacity-60",h.textContent=o[c],u.appendChild(h)}const d={get:()=>({type:Pt[c],count:Pt[c]>0?1:0}),set:(h,f)=>{Pt[c]=h,Sd()},allowEquip:h=>a[c].includes(h),maxStack:1};u.addEventListener("mousedown",h=>si(d,h,ti)),u.addEventListener("contextmenu",h=>h.preventDefault()),t.appendChild(u)}e.innerHTML="";for(let c=0;c<4;c++){const u=document.createElement("div");u.className="slot w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const d=Wt[c]||{type:0,count:0};if(d.type>0&&d.count>0){const f=It(d.type,32);if(f&&u.appendChild(f),d.count>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=d.count,u.appendChild(m)}}const h={get:()=>Wt[c]||{type:0,count:0},set:(f,m)=>{Wt[c]={type:f,count:f===0?0:m},Co()}};u.addEventListener("mousedown",f=>si(h,f,ti)),u.addEventListener("contextmenu",f=>f.preventDefault()),e.appendChild(u)}if(n.innerHTML="",Xn&&Xn.result>0){const c=It(Xn.result,40);if(c&&n.appendChild(c),Xn.count>1){const u=document.createElement("span");u.className="slot-count font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded shadow absolute bottom-1 right-1",u.textContent=Xn.count,n.appendChild(u)}}n.onmousedown=c=>{if(c.preventDefault(),Xn&&Xn.result>0){const u=Xn.result,d=Xn.count;if(c.shiftKey){if(Hn(u,d)){En();for(let h=0;h<4;h++)Wt[h].count>1?Wt[h].count-=1:Wt[h]={type:0,count:0};Co(),ti()}}else{const h=es(u);if(pe.type===0){$n(u,d),En();for(let f=0;f<4;f++)Wt[f].count>1?Wt[f].count-=1:Wt[f]={type:0,count:0};Co(),ti()}else if(pe.type===u&&pe.count+d<=h){pe.count+=d,Ii(),En();for(let f=0;f<4;f++)Wt[f].count>1?Wt[f].count-=1:Wt[f]={type:0,count:0};Co(),ti()}}}},n.oncontextmenu=c=>c.preventDefault(),i.innerHTML="";for(let c=9;c<36;c++)Md(c,i);r.innerHTML="";for(let c=0;c<9;c++)Md(c,r,!0,c===Uu)}function Md(t,e,n=!1,i=!1){const r=document.createElement("div");r.className=`slot w-full h-11 md:h-12 rounded-lg bg-surface-container-lowest border ${i?"border-primary shadow-[0_0_10px_rgba(120,220,119,0.5)] active":"border-outline-variant hover:border-primary/80"} flex items-center justify-center cursor-pointer relative transition-all`;const o=Ne[t]||{type:0,count:0};if(o.type>0&&o.count>0){const a=It(o.type,34);if(a&&r.appendChild(a),r.title=eo[o.type]||"Item",o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const s={get:()=>Ne[t]||{type:0,count:0},set:(a,c)=>{Ne[t]={type:a,count:a===0?0:c},ai()},onShiftClick:(a,c)=>{if(t>=9){for(let u=0;u<9;u++)if(Ne[u].type===0||Ne[u].count===0){Ne[u]={type:a,count:c},Ne[t]={type:0,count:0},At(!1);return}}else for(let u=9;u<36;u++)if(Ne[u].type===0||Ne[u].count===0){Ne[u]={type:a,count:c},Ne[t]={type:0,count:0},At(!1);return}}};r.addEventListener("mousedown",a=>si(s,a,ti)),r.addEventListener("contextmenu",a=>a.preventDefault()),e.appendChild(r)}function Co(){const t=Wt.map(e=>(e==null?void 0:e.type)||0);Xn=Bh(t,2,2)}const tc=new Map;function nc(t=14412542){const e=new rt,n=new De({color:t,depthTest:!0}),i=new W(new q(.06,.48,.025),n);i.position.set(0,.24,0),e.add(i);const r=new De({color:4674921,depthTest:!0}),o=new W(new q(.2,.035,.045),r);o.position.set(0,.02,0),e.add(o);const s=new De({color:8736014,depthTest:!0}),a=new W(new q(.038,.12,.038),s);return a.position.set(0,-.06,0),e.add(a),e}function ic(t=9741240){const e=new rt,n=new De({color:8736014,depthTest:!0}),i=new W(new q(.04,.5,.04),n);i.position.set(0,.1,0),e.add(i);const r=new De({color:t,depthTest:!0}),o=new W(new q(.32,.06,.05),r);return o.position.set(0,.32,0),e.add(o),e}function rc(t=9741240){const e=new rt,n=new De({color:8736014,depthTest:!0}),i=new W(new q(.04,.48,.04),n);i.position.set(0,.1,0),e.add(i);const r=new De({color:t,depthTest:!0}),o=new W(new q(.18,.06,.05),r);return o.position.set(.06,.32,0),e.add(o),e}function $E(){const t=new rt,e=new De({color:7877903,depthTest:!0}),n=new gn({color:16317180,depthTest:!0}),i=new W(new q(.035,.26,.035),e);i.position.set(.06,.14,0),i.rotation.z=-.35,t.add(i);const r=new W(new q(.035,.26,.035),e);r.position.set(.06,-.14,0),r.rotation.z=.35,t.add(r);const o=new W(new q(.045,.1,.045),e);o.position.set(.11,0,0),t.add(o);const s=new W(new q(.012,.48,.012),n);return s.position.set(0,0,0),t.add(s),t}function qh(t,e=.22){if(t===l.IRON_SWORD)return nc(14412542);if(t===l.STONE_SWORD)return nc(9741240);if(t===l.WOODEN_SWORD)return nc(11817737);if(t===l.IRON_PICKAXE)return ic(14412542);if(t===l.STONE_PICKAXE)return ic(6583435);if(t===l.WOODEN_PICKAXE)return ic(11817737);if(t===l.IRON_HOE)return rc(14412542);if(t===l.STONE_HOE)return rc(6583435);if(t===l.WOODEN_HOE)return rc(11817737);if(t===l.BOW)return $E();if(t===l.BREAD){const u=new De({color:11817737,depthTest:!0});return new W(new q(e*.9,e*.45,e*.6),u)}if(t===l.WHEAT){const u=new De({color:15381256,depthTest:!0});return new W(new q(e*.35,e*.9,e*.35),u)}if(t===l.PORKCHOP){const u=new De({color:16020150,depthTest:!0});return new W(new q(e,e*.4,e*.8),u)}if(t===l.COOKED_PORKCHOP){const u=new De({color:10105874,depthTest:!0});return new W(new q(e,e*.4,e*.8),u)}if(t===l.ROTTEN_FLESH){const u=new De({color:8702998,depthTest:!0});return new W(new q(e,e*.4,e*.8),u)}const n=`${t}:${e}`;if(tc.has(n))return tc.get(n);const i=Ps[t];if(!i)return null;const r=new q(e,e,e),o=r.attributes.uv.array,s=[i.side,i.side,i.top,i.bottom,i.side,i.side];for(let u=0;u<6;u++){const d=Cu(s[u]),h=u*8;o[h]=d.uMin,o[h+1]=d.vMax,o[h+2]=d.uMax,o[h+3]=d.vMax,o[h+4]=d.uMin,o[h+5]=d.vMin,o[h+6]=d.uMax,o[h+7]=d.vMin}r.attributes.uv.needsUpdate=!0,r.computeVertexNormals();const a=new De({map:sl(),depthTest:!0}),c=new W(r,a);return tc.set(n,c),c}let Dn=null,xi=null,Sn=null,us=null,vr=null,fn=null,xr=null,Sr=null,On=null,Mi=null,Vr=null,Wr=null,zr=null,Xr=null,qr=null,Kr=null,Cs=null,Ed=-1,Gt=null,Kh=null,oc=0;function ZE(t){Dn&&t.remove(Dn),Dn=new rt,Dn.name="player-3d-character",xi=new rt,Dn.add(xi);const e=new De({color:13011801}),n=new De({color:4528643}),i=new De({color:43176}),r=new De({color:1981066}),o=new gn({color:16777215}),s=new gn({color:2450411}),a=new De({color:8736014});Gt=new Ns({color:14870768,roughness:.35,metalness:.85}),Kh=new Ns({color:2282478,roughness:.2,metalness:.65,emissive:537412,emissiveIntensity:.35}),Sn=new rt,Sn.position.set(0,1.42,0);const c=new W(new q(.4,.4,.4),e);c.position.set(0,.2,0),Sn.add(c);const u=new W(new q(.42,.16,.42),n);u.position.set(0,.33,-.01),Sn.add(u);const d=new W(new q(.08,.05,.02),o);d.position.set(-.09,.21,.205),Sn.add(d);const h=new W(new q(.04,.05,.022),s);h.position.set(-.11,.21,.206),Sn.add(h);const f=new W(new q(.08,.05,.02),o);f.position.set(.09,.21,.205),Sn.add(f);const m=new W(new q(.04,.05,.022),s);m.position.set(.07,.21,.206),Sn.add(m);const _=new W(new q(.12,.03,.02),a);_.position.set(0,.11,.205),Sn.add(_),On=new rt;const v=new W(new q(.46,.22,.46),Gt);v.position.set(0,.31,0),On.add(v);const g=new W(new q(.04,.24,.44),Gt);g.position.set(-.21,.18,0),On.add(g);const p=new W(new q(.04,.24,.44),Gt);p.position.set(.21,.18,0),On.add(p);const b=new W(new q(.44,.24,.04),Gt);b.position.set(0,.18,-.21),On.add(b);const y=new W(new q(.08,.1,.04),Gt);y.position.set(0,.22,.21),On.add(y),On.visible=!1,Sn.add(On),xi.add(Sn),us=new rt,us.position.set(0,.9,0);const E=new W(new q(.44,.52,.22),i);E.position.set(0,.26,0),us.add(E),Mi=new rt;const U=new W(new q(.48,.54,.26),Gt);U.position.set(0,.26,0),Mi.add(U);const C=new W(new q(.18,.14,.26),Gt);C.position.set(-.3,.46,0),Mi.add(C);const w=new W(new q(.18,.14,.26),Gt);w.position.set(.3,.46,0),Mi.add(w),Mi.visible=!1,us.add(Mi),xi.add(us),vr=new rt,vr.position.set(-.31,1.38,0);const P=new W(new q(.18,.5,.18),e);P.position.set(0,-.25,0),vr.add(P);const T=new W(new q(.186,.18,.186),i);T.position.set(0,-.1,0),vr.add(T),Vr=new W(new q(.2,.26,.2),Gt),Vr.position.set(0,-.14,0),Vr.visible=!1,vr.add(Vr),xi.add(vr),fn=new rt,fn.position.set(.31,1.38,0);const M=new W(new q(.18,.5,.18),e);M.position.set(0,-.25,0),fn.add(M);const R=new W(new q(.186,.18,.186),i);R.position.set(0,-.1,0),fn.add(R),Wr=new W(new q(.2,.26,.2),Gt),Wr.position.set(0,-.14,0),Wr.visible=!1,fn.add(Wr),Cs=new rt,Cs.position.set(0,-.42,.12),fn.add(Cs),xi.add(fn),xr=new rt,xr.position.set(-.11,.9,0);const z=new W(new q(.2,.6,.2),r);z.position.set(0,-.3,0),xr.add(z),zr=new W(new q(.22,.36,.22),Gt),zr.position.set(0,-.18,0),zr.visible=!1,xr.add(zr),qr=new W(new q(.23,.2,.25),Gt),qr.position.set(0,-.48,.015),qr.visible=!1,xr.add(qr),xi.add(xr),Sr=new rt,Sr.position.set(.11,.9,0);const H=new W(new q(.2,.6,.2),r);return H.position.set(0,-.3,0),Sr.add(H),Xr=new W(new q(.22,.36,.22),Gt),Xr.position.set(0,-.18,0),Xr.visible=!1,Sr.add(Xr),Kr=new W(new q(.23,.2,.25),Gt),Kr.position.set(0,-.48,.015),Kr.visible=!1,Sr.add(Kr),xi.add(Sr),Dn.visible=!1,t.add(Dn),Dn}function jE(t,e,n,i,r,o,s,a,c,u){if(!Dn||(Dn.visible=u,!u))return;Dn.position.copy(e),xi.rotation.y=n+Math.PI,Sn.rotation.x=-i,r?oc+=t*(s?4:10):oc=0;const d=Math.sin(oc)*.65;if(xr.rotation.x=-d,Sr.rotation.x=d,vr.rotation.x=d*.75,a<1){const h=Math.sin(a*Math.PI);fn.rotation.x=-1.4*h,fn.rotation.z=-.3*h,fn.rotation.y=.4*h}else fn.rotation.x=-d*.75,fn.rotation.z=0,fn.rotation.y=0;if(QE(),c!==Ed&&(Ed=c,Cs.clear(),c>0)){const h=qh(c,.28);h&&(al(c)?(h.position.set(0,.16,.08),h.rotation.set(.3,0,-.2)):(h.position.set(0,.08,.05),h.rotation.set(.3,.4,0)),Cs.add(h))}}function zi(t,e){const n=e===l.DIAMOND_HELMET||e===l.DIAMOND_CHESTPLATE||e===l.DIAMOND_LEGGINGS||e===l.DIAMOND_BOOTS?Kh:Gt;t.isMesh?t.material=n:t.children&&t.children.forEach(i=>{i.isMesh&&(i.material=n)})}function QE(){const t=Pt[0]||0;t>0?(On.visible=!0,zi(On,t)):On.visible=!1;const e=Pt[1]||0;e>0?(Mi.visible=!0,Vr.visible=!0,Wr.visible=!0,zi(Mi,e),zi(Vr,e),zi(Wr,e)):(Mi.visible=!1,Vr.visible=!1,Wr.visible=!1);const n=Pt[2]||0;n>0?(zr.visible=!0,Xr.visible=!0,zi(zr,n),zi(Xr,n)):(zr.visible=!1,Xr.visible=!1);const i=Pt[3]||0;i>0?(qr.visible=!0,Kr.visible=!0,zi(qr,i),zi(Kr,i)):(qr.visible=!1,Kr.visible=!1)}const Yh=.38,$h=-.28,Zh=-.46,jh=-.32,Qh=.35,Jh=-.12;let dn=null,sc=null,ac=null,_i=null,yo=-1,Io=1,JE=5.6,pr=0;function ey(){const t=Vs();if(!t)return;dn=new rt;const e=new De({color:13011801,depthTest:!0}),n=new De({color:43176,depthTest:!0});sc=new W(new q(.1,.1,.34),e),sc.position.set(0,0,.1),dn.add(sc),ac=new W(new q(.108,.108,.14),n),ac.position.set(0,0,.22),dn.add(ac),ep(),dn.position.set(Yh,$h,Zh),dn.rotation.set(jh,Qh,Jh),dn.renderOrder=999,t.add(dn),document.addEventListener("mousedown",ty)}function ty(t){Ws()&&(t.button===0||t.button===2)&&(Io=0)}function ep(){const t=Pu();if(t!==yo&&(yo=t,_i&&(dn.remove(_i),_i=null),yo>0)){const e=qh(yo,.22);e&&(_i=e,al(yo)?(_i.position.set(-.02,.14,-.22),_i.rotation.set(.2,.3,-.4)):(_i.position.set(-.02,.08,-.16),_i.rotation.set(.35,.65,-.2)),dn.add(_i))}}function ny(t,e){if(!dn)return;const n=Eh()===Yr.FIRST_PERSON;if(dn.visible=n,!n)return;ep();let i=0,r=0,o=0,s=0,a=0;if(Io<1){const h=al(yo)?6.2:JE;Io=Math.min(1,Io+t*h);const f=Math.sin(Io*Math.PI);i=-f*1.05,r=f*.6,o=-f*.4,s=-f*.09,a=-f*.14}const c=np();let u=0,d=0;c.onGround&&c.moving?(pr+=t*10,u=Math.cos(pr*.5)*.025,d=Math.abs(Math.sin(pr))*.035):c.isFlying&&c.moving?(pr+=t*6,u=Math.cos(pr*.5)*.015,d=Math.sin(pr)*.015):pr=0,dn.position.set(Yh+u,$h+d+s,Zh+a),dn.rotation.set(jh+i,Qh+r,Jh+o)}function iy(){return Io}const Tt=.3,xs=1.8,Ya=1.62,yd=28,ry=8.6,oy=5.8,sy=14,Td=10,ay=3.6;let fs=0;const to=20,ly=6,cy=2,uy=5,fy=.5,Ad=3.2;let ir=null;const re=new D;let be=new D,en=to,Kn=!1,Nn=!1,Si=!1,Ss=!1,Ms=0,To=!1,$a=0,Za=0,ya=0,br=0,Yn=!1,ds=0,hs=0;const So=[];let bd=!1,wd=!1;function dy(){ir=Vs(),en=to,be.set(0,0,0),Nn=!1;const t=Du();re.set(t.x,t.y,t.z),br=re.y,Yn=!1,ir&&ir.position.set(re.x,re.y+Ya,re.z),wd||(wd=!0,window.addEventListener("keydown",e=>{if(e.code==="F4"||e.code==="F5"){e.preventDefault();const n=sS();My(["👁 Perspectiva: 1ª Pessoa","🎥 Perspectiva: 3ª Pessoa (Costas)","📸 Perspectiva: 3ª Pessoa (Frontal)"][n]);try{En()}catch{}}}))}function tp(){return en}function hy(){return to}function py(){return $a}function my(){return Nn}function Li(){return re}function np(){return{onGround:Kn,moving:To,inWater:Si,submerged:Ss,isFlying:Nn}}function Ko(t,e=null){if(en<=0)return;const n=Fu(),i=Math.min(.8,n*.04),r=Math.max(1,t*(1-i));en=Math.max(0,en-r),$a=1,Za=0,Ux(),e&&(be.x+=e.x*5,be.z+=e.z*5,be.y=3.5)}function gy(t){en<=0||(en=Math.min(to,en+t))}function Rd(t){gy(t)}function Cd(){en=to,be.set(0,0,0),Kn=!1,Nn=!1,Ms=0,Za=0;const t=Du();re.set(t.x,t.y,t.z),br=re.y,Yn=!1,ir&&ir.position.set(re.x,re.y+Ya,re.z)}function ip(t,e,n){return e<0?!0:Iu(Kt(t,e,n))}function mr(t,e,n){const i=Math.floor(t-Tt+.001),r=Math.floor(t+Tt-.001),o=Math.floor(e),s=Math.floor(e+xs-.001),a=Math.floor(n-Tt+.001),c=Math.floor(n+Tt-.001);for(let u=o;u<=s;u++)for(let d=a;d<=c;d++)for(let h=i;h<=r;h++)if(ip(h,u,d))return!0;return!1}function Id(t,e,n){return Kt(t,e,n)===l.WATER}function _y(t){if(ir||(ir=Vs()),!ir)return;const e=Ws();$a=Math.max(0,$a-t*2),Si=Id(Math.floor(re.x),Math.floor(re.y+.2),Math.floor(re.z)),Ss=Id(Math.floor(re.x),Math.floor(re.y+Ya),Math.floor(re.z));const n=e&&Wn("Space"),i=performance.now()/1e3;if(n&&!bd){for(hs=.15,So.push(i);So.length>0&&i-So[0]>.55;)So.shift();So.length>=3&&(Nn=!Nn,be.set(0,0,0),So.length=0,Yn=!1,Lx(Nn))}bd=n,hs>0&&(hs-=t),Kn?ds=.12:ds=Math.max(0,ds-t);let r=0,o=0;e&&(Wn("KeyW")&&(r+=1),Wn("KeyS")&&(r-=1),Wn("KeyD")&&(o+=1),Wn("KeyA")&&(o-=1));const s=ld(),a=-Math.sin(s),c=-Math.cos(s),u=Math.cos(s),d=-Math.sin(s);let h=0,f=0;if(r!==0||o!==0){h=a*r+u*o,f=c*r+d*o;const _=Math.hypot(h,f);_>.001&&(h/=_,f/=_)}if(To=r!==0||o!==0,Nn){Yn=!1;const _=sy,v=1-Math.exp(-65*t);be.x+=(h*(To?_:0)-be.x)*v,be.z+=(f*(To?_:0)-be.z)*v;let g=0;e&&(Wn("Space")&&(g+=Td),(Wn("ShiftLeft")||Wn("ShiftRight"))&&(g-=Td)),be.y+=(g-be.y)*v,re.x+=be.x*t,mr(re.x,re.y,re.z)&&(be.x>0?re.x=Math.floor(re.x+Tt)-Tt-.001:be.x<0&&(re.x=Math.floor(re.x-Tt)+1+Tt+.001),be.x=0),re.z+=be.z*t,mr(re.x,re.y,re.z)&&(be.z>0?re.z=Math.floor(re.z+Tt)-Tt-.001:be.z<0&&(re.z=Math.floor(re.z-Tt)+1+Tt+.001),be.z=0),re.y+=be.y*t,mr(re.x,re.y,re.z)&&(be.y>0?re.y=Math.floor(re.y+xs)-xs-.001:be.y<0&&(re.y=Math.floor(re.y)+1),be.y=0)}else{const _=(Kn||ds>0)&&!Si;hs>0&&_?(be.y=ry,Kn=!1,ds=0,hs=0,br=re.y,Yn=!1,_h()):Si&&n&&(be.y=Math.max(be.y,4.5),Yn=!1);const v=Si?yd*.3:yd;be.y-=v*t;const g=Si?8:36;be.y<-g&&(be.y=-g),be.y<0?Yn||(Yn=!0,br=re.y):(Yn=!1,br=re.y);const p=(Ss?.7:1)*(Si?ay:oy);if(To){const E=1-Math.exp(-65*t);be.x+=(h*p-be.x)*E,be.z+=(f*p-be.z)*E;const U=Math.hypot(be.x,be.z);if(Kn&&!Si&&U>1.2&&!Nn){if(fs+=t,fs>=.42){fs=0;const C=Kt(Math.floor(re.x),Math.floor(re.y-.2),Math.floor(re.z));qx(C)}}else fs=0}else{const E=Math.exp(-14*t);be.x*=E,be.z*=E,fs=0}const b=(E,U)=>{if(!Kn)return!1;const C=.55;return mr(re.x+E,re.y+C,re.z+U)?!1:(re.y+=C,!0)};re.x+=be.x*t,mr(re.x,re.y,re.z)&&(b(0,0)||(be.x>0?re.x=Math.floor(re.x+Tt)-Tt-.001:be.x<0&&(re.x=Math.floor(re.x-Tt)+1+Tt+.001),be.x=0)),re.z+=be.z*t,mr(re.x,re.y,re.z)&&(b(0,0)||(be.z>0?re.z=Math.floor(re.z+Tt)-Tt-.001:be.z<0&&(re.z=Math.floor(re.z-Tt)+1+Tt+.001),be.z=0));const y=be.y<0;if(re.y+=be.y*t,Kn=!1,mr(re.x,re.y,re.z))if(y){Kn=!0;const E=Math.floor(re.y)+1,U=Math.max(0,br-E);if(re.y=E,be.y=0,!Si&&U>Ad){const C=Math.floor((U-Ad)*1.5);C>0&&Ko(C)}Yn=!1,br=re.y}else re.y=Math.floor(re.y+xs)-xs-.001,be.y=0}re.y<-10&&Cd(),aS(re,Ya,ip);const m=Eh()!==Yr.FIRST_PERSON;jE(t,re,ld(),oS(),To,Kn,Nn,iy(),Pu(),m),Ss&&!Nn?(Ms+=t,Ms>ly&&Ko(cy*t)):Ms=Math.max(0,Ms-t*2.5),en>0&&en<to&&!Ss&&(Za+=t,Za>uy&&(en=Math.min(to,en+fy*t))),en<=0?(ya+=t,e&&Wn("Space")&&ya>.8&&(Cd(),ya=0)):ya=0}const Dd=document.getElementById("debug-info");let Zi=null,lc=0,Ta=0,cc=60;const vy={[at.PLAINS]:"Planície Florida",[at.FOREST]:"Floresta Densa",[at.DESERT]:"Deserto de Dunas",[at.SNOWY_MOUNTAINS]:"Picos Nevados",[at.OCEAN]:"Costa / Oceano"};function xy(){if(!Zi){Zi=document.createElement("div"),Zi.id="fly-badge",Object.assign(Zi.style,{position:"absolute",top:"58px",left:"50%",transform:"translateX(-50%)",padding:"4px 14px",borderRadius:"20px",background:"linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))",border:"1px solid rgba(255,255,255,0.4)",boxShadow:"0 0 15px rgba(59,130,246,0.6)",color:"#ffffff",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase",pointerEvents:"none",zIndex:"25",display:"none",backdropFilter:"blur(4px)",animation:"pulse 1.8s infinite"}),Zi.innerHTML='⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';const t=document.getElementById("hud");t&&t.appendChild(Zi)}}function Sy(t,e){if(xy(),lc++,Ta+=t,Ta>=.5&&(cc=Math.round(lc/Ta),lc=0,Ta=0),Dd&&e.position){const n=e.position,i=Xo(Math.floor(n.x),Math.floor(n.z)),r=vy[i]||"Desconhecido",o=OM(),s=qo(),a=s?"☀️":"🌙";Dd.innerHTML=`<b>FPS:</b> <span style="color:${cc>=50?"#4ade80":"#f87171"}">${cc}</span><br><b>XYZ:</b> ${n.x.toFixed(1)} / ${n.y.toFixed(1)} / ${n.z.toFixed(1)}<br><b>Bioma:</b> <span style="color:#38bdf8;">${r}</span><br><b>Hora:</b> ${a} <span style="color:#fde047;">${o}</span> (${s?"Dia":"Noite"})`}Zi&&(Zi.style.display=my()?"block":"none")}let Cn=null,uc=null;function My(t){if(!Cn){Cn=document.createElement("div"),Cn.id="camera-mode-toast",Object.assign(Cn.style,{position:"absolute",top:"24px",left:"50%",transform:"translateX(-50%)",padding:"6px 18px",borderRadius:"24px",background:"rgba(15, 23, 42, 0.85)",border:"1px solid rgba(74, 222, 128, 0.5)",boxShadow:"0 0 20px rgba(74, 222, 128, 0.3)",color:"#4ade80",fontSize:"13px",fontWeight:"bold",letterSpacing:"0.8px",pointerEvents:"none",zIndex:"100",transition:"opacity 0.3s ease, transform 0.3s ease",opacity:"0",backdropFilter:"blur(6px)"});const e=document.getElementById("hud");e&&e.appendChild(Cn)}Cn.textContent=t,Cn.style.opacity="1",Cn.style.transform="translateX(-50%) translateY(4px)",uc&&clearTimeout(uc),uc=setTimeout(()=>{Cn&&(Cn.style.opacity="0",Cn.style.transform="translateX(-50%) translateY(0px)")},2200)}let ja=0,du=null,Do=null,Od=!1;function Ey(){const t=document.getElementById("hud"),e=document.createElement("div");e.id="hotbar-frame",Object.assign(e.style,{position:"absolute",bottom:"14px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"4px",padding:"5px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.85)",border:"2px solid rgba(255,255,255,0.15)",boxShadow:"0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",pointerEvents:"none",zIndex:"20"}),du=e;for(let n=0;n<9;n++){const i=document.createElement("div");i.className="hotbar-slot",i.dataset.index=n,Object.assign(i.style,{width:"46px",height:"46px",borderRadius:"6px",border:"2px solid rgba(0,0,0,0.55)",background:"rgba(30, 41, 59, 0.9)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"75% 75%",position:"relative",transition:"border-color 0.15s, transform 0.15s, box-shadow 0.15s",cursor:"pointer"});const r=document.createElement("span");r.className="hotbar-slot-num",Object.assign(r.style,{position:"absolute",top:"1px",left:"3px",fontSize:"10px",color:"#94a3b8",fontWeight:"bold",opacity:"0.6"}),r.textContent=n+1,i.appendChild(r);const o=document.createElement("span");o.className="hotbar-slot-count",Object.assign(o.style,{position:"absolute",bottom:"1px",right:"3px",fontSize:"11px",color:"#fff",textShadow:"0 1px 2px #000",fontWeight:"bold",display:"none"}),i.appendChild(o),e.appendChild(i)}t.appendChild(e),Do=document.createElement("div"),Do.id="hotbar-name",Object.assign(Do.style,{position:"absolute",bottom:"72px",left:"50%",transform:"translateX(-50%)",color:"#fff",fontSize:"13px",fontWeight:"600",letterSpacing:"0.5px",padding:"4px 14px",borderRadius:"12px",background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255,255,255,0.18)",backdropFilter:"blur(4px)",pointerEvents:"none",zIndex:"20",textAlign:"center",whiteSpace:"nowrap"}),t.appendChild(Do),Bu()}function yy(){if(!ul()){for(let t=0;t<9;t++)Wn(`Digit${t+1}`)&&rp(t);Od||(Od=!0,document.addEventListener("wheel",Ty,{passive:!1})),Bu()}}let Aa=0;function Ty(t){if(!(!Ws()||ul())&&(t.preventDefault(),Aa+=Math.sign(t.deltaY),Math.abs(Aa)>=1)){const e=Aa>0?1:-1;Aa=0;const n=(ja+e+9)%9;rp(n)}}function rp(t){ja=t,YE(t),Bu()}function Bu(){var n;if(!du)return;const t=KE(),e=du.children;for(let i=0;i<e.length;i++){const r=i===ja,o=t[i]||{type:0,count:0},s=o.type||0,a=o.count||0;if(e[i].style.borderColor=r?"rgba(74, 222, 128, 0.95)":"rgba(0,0,0,0.55)",e[i].style.transform=r?"scale(1.14) translateY(-3px)":"scale(1)",e[i].style.boxShadow=r?"0 0 14px rgba(74, 222, 128, 0.4), 0 6px 14px rgba(0,0,0,0.6)":"none",e[i].style.zIndex=r?"2":"1",s>0){const u=It(s,38);u&&(e[i].style.backgroundImage=`url(${u.toDataURL()})`)}else e[i].style.backgroundImage="none";const c=e[i].querySelector(".hotbar-slot-count");c&&(a>1?(c.textContent=a,c.style.display="block"):c.style.display="none")}if(Do){const i=((n=t[ja])==null?void 0:n.type)||0;Do.textContent=eo[i]||""}}let zt=null,Vn=0;function Ay(t){zt&&t.remove(zt),zt=new Ox(16752964,0,20,1.6),zt.castShadow=!1,t.add(zt)}function by(t,e,n,i,r){if(!zt)return;const o=i===l.TORCH,s=i===l.LAVA,a=i===l.GLOWSTONE;if(o||s||a){const c=r?r.x:n.x,u=r?r.y-.2:n.y+1.2,d=r?r.z:n.z;if(zt.position.set(c,u,d),o){zt.color.setHex(16752187);const f=2.4*(1+.12*Math.sin(e*16)+.08*Math.sin(e*31)+.04*(Math.random()-.5));Vn=Oa.lerp(Vn,f,t*14),zt.distance=20}else if(s){zt.color.setHex(16733457);const f=2*(1+.06*Math.sin(e*8));Vn=Oa.lerp(Vn,f,t*10),zt.distance=18}else a&&(zt.color.setHex(16771635),Vn=Oa.lerp(Vn,2.8,t*12),zt.distance=24);zt.intensity=Vn}else Vn=Math.max(0,Vn-t*8),zt.intensity=Vn}let hu=[],Fa=[],Oo=null,wr=null,ps=null;function wy(){const t=document.getElementById("hud");Oo=document.createElement("div"),Oo.id="damage-vignette",Oo.style.opacity="0",t.appendChild(Oo);const e=document.createElement("div");e.style.cssText="position:fixed; bottom:82px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; gap:4px; align-items:flex-start; pointer-events:none; z-index:20;",ps=document.createElement("div"),ps.id="armor-bar",ps.style.cssText="display:flex; gap:3px; font-size:16px; color:#38bdf8; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8));";for(let r=0;r<10;r++){const o=document.createElement("span");o.textContent="🛡️",o.style.cssText="font-size:14px; opacity:0; transition:opacity 0.2s;",Fa.push(o),ps.appendChild(o)}e.appendChild(ps);const n=document.createElement("div");n.id="health-bar",n.style.cssText="display:flex; gap:3px;";const i=hy()/2;for(let r=0;r<i;r++){const o=document.createElement("span");o.className="heart",o.textContent="♥",hu.push(o),n.appendChild(o)}e.appendChild(n),t.appendChild(e),wr=document.createElement("div"),wr.id="death-overlay",wr.innerHTML='<div class="death-title">☠ VOCÊ MORREU</div><div class="death-hint">Pressione ESPAÇO para renascer</div>',wr.style.display="none",t.appendChild(wr)}function Ry(){const t=tp();for(let i=0;i<hu.length;i++){const r=t-i*2;hu[i].className="heart "+(r>=2?"full":r===1?"half":"empty")}const e=Fu(),n=Math.floor(e/2);for(let i=0;i<Fa.length;i++)i<n?Fa[i].style.opacity="1":Fa[i].style.opacity="0";Oo&&(Oo.style.opacity=py()*.75),wr&&(wr.style.display=t<=0?"flex":"none")}const Es={SUNNY:"sunny",RAIN:"rain"};let fc=Es.SUNNY,dc=120+Math.random()*60,Rr=null,Is=null;const pu=800;function Cy(t){Is=new yn;const e=new Float32Array(pu*3);for(let i=0;i<pu*3;i+=3)e[i]=(Math.random()-.5)*40,e[i+1]=Math.random()*25,e[i+2]=(Math.random()-.5)*40;Is.setAttribute("position",new Bn(e,3));const n=new hh({color:9684477,size:.12,transparent:!0,opacity:0});Rr=new wx(Is,n),t.add(Rr)}function Iy(t,e){if(dc-=t,dc<=0&&(dc=90+Math.random()*120,fc=fc===Es.SUNNY?Es.RAIN:Es.SUNNY),Rr&&e){Rr.position.set(e.x,e.y,e.z);const i=fc!==Es.SUNNY?.65:0;if(Rr.material.opacity+=(i-Rr.material.opacity)*t*2,Rr.material.opacity>.01){const r=Is.attributes.position.array;for(let o=1;o<pu*3;o+=3)r[o]-=32*t,r[o]<-5&&(r[o]=20+Math.random()*5);Is.attributes.position.needsUpdate=!0}}}const op="voxelcraft_world_save_v03";function Dy(){try{const t=Li(),e=qE(),n=tp(),i={timestamp:Date.now(),player:{x:t.x,y:t.y,z:t.z,health:n,hotbar:e,armor:[...Pt]}};localStorage.setItem(op,JSON.stringify(i))}catch(t){console.warn("Could not save world data:",t)}}function Oy(){try{const t=localStorage.getItem(op);if(!t)return!1;const e=JSON.parse(t);if(!e||!e.player)return!1;const n=Li();if(n&&e.player.x!==void 0&&n.set(e.player.x,e.player.y,e.player.z),e.player.armor)for(let i=0;i<4;i++)Pt[i]=e.player.armor[i]||0;return!0}catch(t){return console.warn("Could not load world data:",t),!1}}window.addEventListener("contextmenu",t=>t.preventDefault());cp(document);console.log("[VoxelCraft] Building texture atlas...");aM();const Nd=cS(),nn=uS();IM(nn,fS());Cy(nn);FM(nn);WM(nn);console.log("[VoxelCraft] Generating world biomes & 3D caves...");AM(nn);const li=Du(),Ei=iS(window.innerWidth/window.innerHeight,li);nn.add(Ei);hS(Ei);rS(Ah());tS(Ah());JM(nn);Tr(je.PIG,li.x+4,li.y,li.z+4);Tr(je.SHEEP,li.x-3,li.y,li.z+5);UE(nn);Wh();Gh();Ey();Ay(nn);ZE(nn);dy();wy();ey();Oy();console.log(`[VoxelCraft v0.5.0] Ready! Spawn at (${li.x}, ${li.y}, ${li.z})`);let hc=0;function Ny(t,e){if(Qx()){md(Ei.position,nn),gd(t,nn,Ei,Nd);return}Jx()||(_y(t),md(Ei.position,nn),gd(t,nn,Ei,Nd),Iy(t,Li()),by(t,e,Li(),Pu(),Ei.position),TE(t),oE(t),zM(t,e),HM(t),FE(t),yy(),Ry(),ny(t),$x(t),Sy(t,{position:Ei.position}),hc+=t,hc>=30&&(hc=0,Dy()))}function Ly(){dS(Ei)}lS(Ny,Ly);
