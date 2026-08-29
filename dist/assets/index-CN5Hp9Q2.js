(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Fa=new Set;function wp(t=document){t.addEventListener("keydown",e=>{Fa.add(e.code)}),t.addEventListener("keyup",e=>{Fa.delete(e.code)}),t.addEventListener("contextmenu",e=>{document.pointerLockElement&&e.preventDefault()}),window.addEventListener("blur",()=>{Fa.clear()})}function $n(t){return Fa.has(t)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="170",Op=0,af=1,Cp=2,$d=1,Ip=2,Mi=3,ar=0,sn=1,Bn=2,tr=0,Bo=1,lf=2,cf=3,uf=4,Dp=5,Ar=100,Np=101,Pp=102,Lp=103,Up=104,Fp=200,Bp=201,Gp=202,Hp=203,Ac=204,bc=205,kp=206,Wp=207,Vp=208,zp=209,Xp=210,Kp=211,qp=212,Yp=213,$p=214,Rc=0,wc=1,Oc=2,Vo=3,Cc=4,Ic=5,Dc=6,Nc=7,wu=0,Zp=1,jp=2,nr=0,Qp=1,Jp=2,e0=3,t0=4,n0=5,i0=6,r0=7,Zd=300,zo=301,Xo=302,Pc=303,Lc=304,hl=306,Uc=1e3,Nr=1001,Fc=1002,gn=1003,o0=1004,ia=1005,li=1006,Al=1007,Pr=1008,Li=1009,jd=1010,Qd=1011,Vs=1012,Ou=1013,io=1014,Ci=1015,$s=1016,Cu=1017,Iu=1018,Ko=1020,Jd=35902,eh=1021,th=1022,Wn=1023,nh=1024,ih=1025,Go=1026,qo=1027,rh=1028,Du=1029,oh=1030,Nu=1031,Pu=1033,Ba=33776,Ga=33777,Ha=33778,ka=33779,Bc=35840,Gc=35841,Hc=35842,kc=35843,Wc=36196,Vc=37492,zc=37496,Xc=37808,Kc=37809,qc=37810,Yc=37811,$c=37812,Zc=37813,jc=37814,Qc=37815,Jc=37816,eu=37817,tu=37818,nu=37819,iu=37820,ru=37821,Wa=36492,ou=36494,su=36495,sh=36283,au=36284,lu=36285,cu=36286,s0=3200,a0=3201,Lu=0,l0=1,Ji="",hn="srgb",Jo="srgb-linear",pl="linear",ot="srgb",lo=7680,ff=519,c0=512,u0=513,f0=514,ah=515,d0=516,h0=517,p0=518,m0=519,df=35044,hf="300 es",Ii=2e3,$a=2001;class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pf=1234567;const Ho=Math.PI/180,zs=180/Math.PI;function ts(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function Uu(t,e){return(t%e+e)%e}function _0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function g0(t,e,n){return t!==e?(n-t)/(e-t):0}function Is(t,e,n){return(1-n)*t+n*e}function v0(t,e,n,i){return Is(t,e,1-Math.exp(-n*i))}function x0(t,e=1){return e-Math.abs(Uu(t,e*2)-e)}function S0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function E0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function M0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function y0(t,e){return t+Math.random()*(e-t)}function T0(t){return t*(.5-Math.random())}function A0(t){t!==void 0&&(pf=t);let e=pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b0(t){return t*Ho}function R0(t){return t*zs}function w0(t){return(t&t-1)===0&&t!==0}function O0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function C0(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function I0(t,e,n,i,r){const o=Math.cos,a=Math.sin,l=o(n/2),c=a(n/2),u=o((e+i)/2),d=a((e+i)/2),h=o((e-i)/2),f=a((e-i)/2),p=o((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(l*d,c*h,c*f,l*u);break;case"YZY":t.set(c*f,l*d,c*h,l*u);break;case"ZXZ":t.set(c*h,c*f,l*d,l*u);break;case"XZX":t.set(l*d,c*g,c*p,l*u);break;case"YXY":t.set(c*p,l*d,c*g,l*u);break;case"ZYZ":t.set(c*g,c*p,l*d,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Va={DEG2RAD:Ho,RAD2DEG:zs,generateUUID:ts,clamp:$t,euclideanModulo:Uu,mapLinear:_0,inverseLerp:g0,lerp:Is,damp:v0,pingpong:x0,smoothstep:S0,smootherstep:E0,randInt:M0,randFloat:y0,randFloatSpread:T0,seededRandom:A0,degToRad:b0,radToDeg:R0,isPowerOfTwo:w0,ceilPowerOfTwo:O0,floorPowerOfTwo:C0,setQuaternionFromProperEuler:I0,normalize:zt,denormalize:bo};class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,o,a,l,c,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,l,c,u)}set(e,n,i,r,o,a,l,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=n,d[4]=o,d[5]=c,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],_=r[3],m=r[6],A=r[1],M=r[4],S=r[7],D=r[2],R=r[5],w=r[8];return o[0]=a*v+l*A+c*D,o[3]=a*_+l*M+c*R,o[6]=a*m+l*S+c*w,o[1]=u*v+d*A+h*D,o[4]=u*_+d*M+h*R,o[7]=u*m+d*S+h*w,o[2]=f*v+p*A+g*D,o[5]=f*_+p*M+g*R,o[8]=f*m+p*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return n*a*d-n*l*u-i*o*d+i*l*c+r*o*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],h=d*a-l*u,f=l*c-d*o,p=u*o-a*c,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*u-d*i)*v,e[2]=(l*i-r*a)*v,e[3]=f*v,e[4]=(d*n-r*c)*v,e[5]=(r*o-l*n)*v,e[6]=p*v,e[7]=(i*c-u*n)*v,e[8]=(a*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,l){const c=Math.cos(o),u=Math.sin(o);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(bl.makeScale(e,n)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,n){return this.premultiply(bl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new ke;function lh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function D0(){const t=Za("canvas");return t.style.display="block",t}const mf={};function ys(t){t in mf||(mf[t]=!0,console.warn(t))}function N0(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function P0(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function L0(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ot&&(t.r=Pi(t.r),t.g=Pi(t.g),t.b=Pi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(t.r=ko(t.r),t.g=ko(t.g),t.b=ko(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ji?pl:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ko(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const _f=[.64,.33,.3,.6,.15,.06],gf=[.2126,.7152,.0722],vf=[.3127,.329],xf=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Jo]:{primaries:_f,whitePoint:vf,transfer:pl,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:gf,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:_f,whitePoint:vf,transfer:ot,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:gf,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});let co;class U0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=Za("canvas")),co.width=e.width,co.height=e.height;const i=co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=co}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Za("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Pi(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F0=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(Rl(r[a].image)):o.push(Rl(r[a]))}else o=Rl(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Rl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?U0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B0=0;class Zt extends es{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Nr,r=Nr,o=li,a=Pr,l=Wn,c=Li,u=Zt.DEFAULT_ANISOTROPY,d=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ts(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Zd;Zt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],p=c[5],g=c[9],v=c[2],_=c[6],m=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+_)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(p+1)/2,D=(m+1)/2,R=(d+f)/4,w=(h+v)/4,I=(g+_)/4;return M>S&&M>D?M<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(M),r=R/i,o=w/i):S>D?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=R/r,o=I/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=w/o,r=I/o),this.set(i,r,o,n),this}let A=Math.sqrt((_-g)*(_-g)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(A)<.001&&(A=1),this.x=(_-g)/A,this.y=(h-v)/A,this.z=(f-d)/A,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G0 extends es{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ch(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ro extends G0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class uh extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H0 extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,l){let c=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=o[a+0],p=o[a+1],g=o[a+2],v=o[a+3];if(l===0){e[n+0]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(l===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h!==v||c!==f||u!==p||d!==g){let _=1-l;const m=c*f+u*p+d*g+h*v,A=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const D=Math.sqrt(M),R=Math.atan2(D,m*A);_=Math.sin(_*R)/D,l=Math.sin(l*R)/D}const S=l*A;if(c=c*_+f*S,u=u*_+p*S,d=d*_+g*S,h=h*_+v*S,_===1-l){const D=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=D,u*=D,d*=D,h*=D}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,a){const l=i[r],c=i[r+1],u=i[r+2],d=i[r+3],h=o[a],f=o[a+1],p=o[a+2],g=o[a+3];return e[n]=l*g+d*h+c*p-u*f,e[n+1]=c*g+d*f+u*h-l*p,e[n+2]=u*g+d*p+l*f-c*h,e[n+3]=d*g-l*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),d=l(r/2),h=l(o/2),f=c(i/2),p=c(r/2),g=c(o/2);switch(a){case"XYZ":this._x=f*d*h+u*p*g,this._y=u*p*h-f*d*g,this._z=u*d*g+f*p*h,this._w=u*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+u*p*g,this._y=u*p*h-f*d*g,this._z=u*d*g-f*p*h,this._w=u*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-u*p*g,this._y=u*p*h+f*d*g,this._z=u*d*g+f*p*h,this._w=u*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-u*p*g,this._y=u*p*h+f*d*g,this._z=u*d*g-f*p*h,this._w=u*d*h+f*p*g;break;case"YZX":this._x=f*d*h+u*p*g,this._y=u*p*h+f*d*g,this._z=u*d*g-f*p*h,this._w=u*d*h-f*p*g;break;case"XZY":this._x=f*d*h-u*p*g,this._y=u*p*h-f*d*g,this._z=u*d*g+f*p*h,this._w=u*d*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],l=n[5],c=n[9],u=n[2],d=n[6],h=n[10],f=i+l+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(o-u)*p,this._z=(a-r)*p}else if(i>l&&i>h){const p=2*Math.sqrt(1+i-l-h);this._w=(d-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+u)/p}else if(l>h){const p=2*Math.sqrt(1+l-i-h);this._w=(o-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-i-l);this._w=(a-r)/p,this._x=(o+u)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,l=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+a*l+r*u-o*c,this._y=r*d+a*c+o*l-i*u,this._z=o*d+a*u+i*c-r*l,this._w=a*d-i*l-r*c-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let l=a*e._w+i*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const c=1-l*l;if(c<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,l),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,n=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ef.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),d=2*(l*n-o*r),h=2*(o*i-a*n);return this.x=n+c*u+a*h-l*d,this.y=i+c*d+l*u-o*h,this.z=r+c*h+o*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-o*l,this.y=o*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new C,Ef=new Zs;class js{constructor(e=new C(1/0,1/0,1/0),n=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(o,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),oa.subVectors(this.max,us),uo.subVectors(e.a,us),fo.subVectors(e.b,us),ho.subVectors(e.c,us),Bi.subVectors(fo,uo),Gi.subVectors(ho,fo),dr.subVectors(uo,ho);let n=[0,-Bi.z,Bi.y,0,-Gi.z,Gi.y,0,-dr.z,dr.y,Bi.z,0,-Bi.x,Gi.z,0,-Gi.x,dr.z,0,-dr.x,-Bi.y,Bi.x,0,-Gi.y,Gi.x,0,-dr.y,dr.x,0];return!Ol(n,uo,fo,ho,oa)||(n=[1,0,0,0,1,0,0,0,1],!Ol(n,uo,fo,ho,oa))?!1:(sa.crossVectors(Bi,Gi),n=[sa.x,sa.y,sa.z],Ol(n,uo,fo,ho,oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,ra=new js,uo=new C,fo=new C,ho=new C,Bi=new C,Gi=new C,dr=new C,us=new C,oa=new C,sa=new C,hr=new C;function Ol(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){hr.fromArray(t,o);const l=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),c=e.dot(hr),u=n.dot(hr),d=i.dot(hr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const k0=new js,fs=new C,Cl=new C;class Qs{constructor(e=new C,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):k0.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const n=fs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Cl)),this.expandByPoint(fs.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new C,Il=new C,aa=new C,Hi=new C,Dl=new C,la=new C,Nl=new C;class Fu{constructor(e=new C,n=new C(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Il.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(Il);const o=e.distanceTo(n)*.5,a=-this.direction.dot(aa),l=Hi.dot(this.direction),c=-Hi.dot(aa),u=Hi.lengthSq(),d=Math.abs(1-a*a);let h,f,p,g;if(d>0)if(h=a*c-l,f=a*l-c,g=o*d,h>=0)if(f>=-g)if(f<=g){const v=1/d;h*=v,f*=v,p=h*(h+a*f+2*l)+f*(a*h+f+2*c)+u}else f=o,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*c)+u;else f=-o,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*c)+u;else f<=-g?(h=Math.max(0,-(-a*o+l)),f=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+u):f<=g?(h=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+u):(h=Math.max(0,-(a*o+l)),f=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+u);else f=a>0?-o:o,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Il).addScaledVector(aa,f),p}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,l,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(o=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(o=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),h>=0?(l=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(l=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,o){Dl.subVectors(n,e),la.subVectors(i,e),Nl.crossVectors(Dl,la);let a=this.direction.dot(Nl),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const c=l*this.direction.dot(la.crossVectors(Hi,la));if(c<0)return null;const u=l*this.direction.dot(Dl.cross(Hi));if(u<0||c+u>a)return null;const d=-l*Hi.dot(Nl);return d<0?null:this.at(d/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,o,a,l,c,u,d,h,f,p,g,v,_){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,l,c,u,d,h,f,p,g,v,_)}set(e,n,i,r,o,a,l,c,u,d,h,f,p,g,v,_){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=o,m[5]=a,m[9]=l,m[13]=c,m[2]=u,m[6]=d,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/po.setFromMatrixColumn(e,0).length(),o=1/po.setFromMatrixColumn(e,1).length(),a=1/po.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=a*d,p=a*h,g=l*d,v=l*h;n[0]=c*d,n[4]=-c*h,n[8]=u,n[1]=p+g*u,n[5]=f-v*u,n[9]=-l*c,n[2]=v-f*u,n[6]=g+p*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*d,p=c*h,g=u*d,v=u*h;n[0]=f+v*l,n[4]=g*l-p,n[8]=a*u,n[1]=a*h,n[5]=a*d,n[9]=-l,n[2]=p*l-g,n[6]=v+f*l,n[10]=a*c}else if(e.order==="ZXY"){const f=c*d,p=c*h,g=u*d,v=u*h;n[0]=f-v*l,n[4]=-a*h,n[8]=g+p*l,n[1]=p+g*l,n[5]=a*d,n[9]=v-f*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const f=a*d,p=a*h,g=l*d,v=l*h;n[0]=c*d,n[4]=g*u-p,n[8]=f*u+v,n[1]=c*h,n[5]=v*u+f,n[9]=p*u-g,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*u,g=l*c,v=l*u;n[0]=c*d,n[4]=v-f*h,n[8]=g*h+p,n[1]=h,n[5]=a*d,n[9]=-l*d,n[2]=-u*d,n[6]=p*h+g,n[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,p=a*u,g=l*c,v=l*u;n[0]=c*d,n[4]=-h,n[8]=u*d,n[1]=f*h+v,n[5]=a*d,n[9]=p*h-g,n[2]=g*h-p,n[6]=l*d,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,V0)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ki.crossVectors(i,cn),ki.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ki.crossVectors(i,cn)),ki.normalize(),ca.crossVectors(cn,ki),r[0]=ki.x,r[4]=ca.x,r[8]=cn.x,r[1]=ki.y,r[5]=ca.y,r[9]=cn.y,r[2]=ki.z,r[6]=ca.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],_=i[10],m=i[14],A=i[3],M=i[7],S=i[11],D=i[15],R=r[0],w=r[4],I=r[8],T=r[12],E=r[1],O=r[5],k=r[9],B=r[13],Y=r[2],q=r[6],K=r[10],J=r[14],z=r[3],oe=r[7],ae=r[11],ve=r[15];return o[0]=a*R+l*E+c*Y+u*z,o[4]=a*w+l*O+c*q+u*oe,o[8]=a*I+l*k+c*K+u*ae,o[12]=a*T+l*B+c*J+u*ve,o[1]=d*R+h*E+f*Y+p*z,o[5]=d*w+h*O+f*q+p*oe,o[9]=d*I+h*k+f*K+p*ae,o[13]=d*T+h*B+f*J+p*ve,o[2]=g*R+v*E+_*Y+m*z,o[6]=g*w+v*O+_*q+m*oe,o[10]=g*I+v*k+_*K+m*ae,o[14]=g*T+v*B+_*J+m*ve,o[3]=A*R+M*E+S*Y+D*z,o[7]=A*w+M*O+S*q+D*oe,o[11]=A*I+M*k+S*K+D*ae,o[15]=A*T+M*B+S*J+D*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],l=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],_=e[11],m=e[15];return g*(+o*c*h-r*u*h-o*l*f+i*u*f+r*l*p-i*c*p)+v*(+n*c*p-n*u*f+o*a*f-r*a*p+r*u*d-o*c*d)+_*(+n*u*h-n*l*p-o*a*h+i*a*p+o*l*d-i*u*d)+m*(-r*l*d-n*c*h+n*l*f+r*a*h-i*a*f+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],_=e[14],m=e[15],A=h*_*u-v*f*u+v*c*p-l*_*p-h*c*m+l*f*m,M=g*f*u-d*_*u-g*c*p+a*_*p+d*c*m-a*f*m,S=d*v*u-g*h*u+g*l*p-a*v*p-d*l*m+a*h*m,D=g*h*c-d*v*c-g*l*f+a*v*f+d*l*_-a*h*_,R=n*A+i*M+r*S+o*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=A*w,e[1]=(v*f*o-h*_*o-v*r*p+i*_*p+h*r*m-i*f*m)*w,e[2]=(l*_*o-v*c*o+v*r*u-i*_*u-l*r*m+i*c*m)*w,e[3]=(h*c*o-l*f*o-h*r*u+i*f*u+l*r*p-i*c*p)*w,e[4]=M*w,e[5]=(d*_*o-g*f*o+g*r*p-n*_*p-d*r*m+n*f*m)*w,e[6]=(g*c*o-a*_*o-g*r*u+n*_*u+a*r*m-n*c*m)*w,e[7]=(a*f*o-d*c*o+d*r*u-n*f*u-a*r*p+n*c*p)*w,e[8]=S*w,e[9]=(g*h*o-d*v*o-g*i*p+n*v*p+d*i*m-n*h*m)*w,e[10]=(a*v*o-g*l*o+g*i*u-n*v*u-a*i*m+n*l*m)*w,e[11]=(d*l*o-a*h*o-d*i*u+n*h*u+a*i*p-n*l*p)*w,e[12]=D*w,e[13]=(d*v*r-g*h*r+g*i*f-n*v*f-d*i*_+n*h*_)*w,e[14]=(g*l*r-a*v*r-g*i*c+n*v*c+a*i*_-n*l*_)*w,e[15]=(a*h*r-d*l*r+d*i*c-n*h*c-a*i*f+n*l*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,l=e.y,c=e.z,u=o*a,d=o*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,d*l+i,d*c-r*a,0,u*c-r*l,d*c+r*a,o*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,l=n._z,c=n._w,u=o+o,d=a+a,h=l+l,f=o*u,p=o*d,g=o*h,v=a*d,_=a*h,m=l*h,A=c*u,M=c*d,S=c*h,D=i.x,R=i.y,w=i.z;return r[0]=(1-(v+m))*D,r[1]=(p+S)*D,r[2]=(g-M)*D,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(f+m))*R,r[6]=(_+A)*R,r[7]=0,r[8]=(g+M)*w,r[9]=(_-A)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=po.set(r[0],r[1],r[2]).length();const a=po.set(r[4],r[5],r[6]).length(),l=po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const u=1/o,d=1/a,h=1/l;return wn.elements[0]*=u,wn.elements[1]*=u,wn.elements[2]*=u,wn.elements[4]*=d,wn.elements[5]*=d,wn.elements[6]*=d,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,n.setFromRotationMatrix(wn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,a,l=Ii){const c=this.elements,u=2*o/(n-e),d=2*o/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(l===Ii)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(l===$a)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,o,a,l=Ii){const c=this.elements,u=1/(n-e),d=1/(i-r),h=1/(a-o),f=(n+e)*u,p=(i+r)*d;let g,v;if(l===Ii)g=(a+o)*h,v=-2*h;else if(l===$a)g=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const po=new C,wn=new _t,W0=new C(0,0,0),V0=new C(1,1,1),ki=new C,ca=new C,cn=new C,Mf=new _t,yf=new Zs;class Xn{constructor(e=0,n=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const Tf=new C,mo=new Zs,xi=new _t,ua=new C,ds=new C,X0=new C,K0=new Zs,Af=new C(1,0,0),bf=new C(0,1,0),Rf=new C(0,0,1),wf={type:"added"},q0={type:"removed"},_o={type:"childadded",child:null},Pl={type:"childremoved",child:null};class Rt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new C,n=new Xn,i=new Zs,r=new C(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(bf,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,n){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(bf,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ua.copy(e):ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ds,ua,this.up):xi.lookAt(ua,ds,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),mo.setFromRotationMatrix(xi),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wf),_o.child=e,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(q0),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wf),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(o(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new C(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new C,Si=new C,Ll=new C,Ei=new C,go=new C,vo=new C,Of=new C,Ul=new C,Fl=new C,Bl=new C,Gl=new st,Hl=new st,kl=new st;class Tn{constructor(e=new C,n=new C,i=new C){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){On.subVectors(r,n),Si.subVectors(i,n),Ll.subVectors(e,n);const a=On.dot(On),l=On.dot(Si),c=On.dot(Ll),u=Si.dot(Si),d=Si.dot(Ll),h=a*u-l*l;if(h===0)return o.set(0,0,0),null;const f=1/h,p=(u*c-l*d)*f,g=(a*d-l*c)*f;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,o,a,l,c){return this.getBarycoord(e,n,i,r,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ei.x),c.addScaledVector(a,Ei.y),c.addScaledVector(l,Ei.z),c)}static getInterpolatedAttribute(e,n,i,r,o,a){return Gl.setScalar(0),Hl.setScalar(0),kl.setScalar(0),Gl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,i),kl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gl,o.x),a.addScaledVector(Hl,o.y),a.addScaledVector(kl,o.z),a}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),Si.subVectors(e,n),On.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),On.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,l;go.subVectors(r,i),vo.subVectors(o,i),Ul.subVectors(e,i);const c=go.dot(Ul),u=vo.dot(Ul);if(c<=0&&u<=0)return n.copy(i);Fl.subVectors(e,r);const d=go.dot(Fl),h=vo.dot(Fl);if(d>=0&&h<=d)return n.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),n.copy(i).addScaledVector(go,a);Bl.subVectors(e,o);const p=go.dot(Bl),g=vo.dot(Bl);if(g>=0&&p<=g)return n.copy(o);const v=p*u-c*g;if(v<=0&&u>=0&&g<=0)return l=u/(u-g),n.copy(i).addScaledVector(vo,l);const _=d*g-p*h;if(_<=0&&h-d>=0&&p-g>=0)return Of.subVectors(o,r),l=(h-d)/(h-d+(p-g)),n.copy(r).addScaledVector(Of,l);const m=1/(_+v+f);return a=v*m,l=f*m,n.copy(i).addScaledVector(go,a).addScaledVector(vo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Wl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class we{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Uu(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Wl(a,o,e+1/3),this.g=Wl(a,o,e),this.b=Wl(a,o,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=hn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){const i=dh[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Qe.fromWorkingColorSpace(kt.copy(this),e),Math.round($t(kt.r*255,0,255))*65536+Math.round($t(kt.g*255,0,255))*256+Math.round($t(kt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,o=kt.b,a=Math.max(i,r,o),l=Math.min(i,r,o);let c,u;const d=(l+a)/2;if(l===a)c=0,u=0;else{const h=a-l;switch(u=d<=.5?h/(a+l):h/(2-a-l),a){case i:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-i)/h+2;break;case o:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=hn){Qe.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(fa);const i=Is(Wi.h,fa.h,n),r=Is(Wi.s,fa.s,n),o=Is(Wi.l,fa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new we;we.NAMES=dh;let Y0=0;class cr extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ts(),this.name="",this.blending=Bo,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=bc,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==bc&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends cr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new C,da=new Ke;class zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=df,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)da.fromBufferAttribute(this,n),da.applyMatrix3(e),this.setXY(n,da.x,da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array),o=zt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),e}}class hh extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ph extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $0=0;const Mn=new _t,Vl=new Rt,xo=new C,un=new js,hs=new js,It=new C;class an extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?ph:hh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ke().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];un.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const l=n[o];hs.setFromBufferAttribute(l),this.morphTargetsRelative?(It.addVectors(un.min,hs.min),un.expandByPoint(It),It.addVectors(un.max,hs.max),un.expandByPoint(It)):(un.expandByPoint(hs.min),un.expandByPoint(hs.max))}un.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)It.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(It));if(n)for(let o=0,a=n.length;o<a;o++){const l=n[o],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)It.fromBufferAttribute(l,u),c&&(xo.fromBufferAttribute(e,u),It.add(xo)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let I=0;I<i.count;I++)l[I]=new C,c[I]=new C;const u=new C,d=new C,h=new C,f=new Ke,p=new Ke,g=new Ke,v=new C,_=new C;function m(I,T,E){u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),f.fromBufferAttribute(o,I),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,E),d.sub(u),h.sub(u),p.sub(f),g.sub(f);const O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(O),_.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(O),l[I].add(v),l[T].add(v),l[E].add(v),c[I].add(_),c[T].add(_),c[E].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,T=A.length;I<T;++I){const E=A[I],O=E.start,k=E.count;for(let B=O,Y=O+k;B<Y;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new C,S=new C,D=new C,R=new C;function w(I){D.fromBufferAttribute(r,I),R.copy(D);const T=l[I];M.copy(T),M.sub(D.multiplyScalar(D.dot(T))).normalize(),S.crossVectors(R,T);const O=S.dot(c[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,O)}for(let I=0,T=A.length;I<T;++I){const E=A[I],O=E.start,k=E.count;for(let B=O,Y=O+k;B<Y;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,d=new C,h=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),a.fromBufferAttribute(n,_),d.subVectors(a,o),h.subVectors(r,o),d.cross(h),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),l.add(d),c.add(d),u.add(d),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,o),h.subVectors(r,o),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(l,c){const u=l.array,d=l.itemSize,h=l.normalized,f=new u.constructor(c.length*d);let p=0,g=0;for(let v=0,_=c.length;v<_;v++){l.isInterleavedBufferAttribute?p=c[v]*l.data.stride+l.offset:p=c[v]*d;for(let m=0;m<d;m++)f[g++]=u[p++]}return new zn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new an,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const o=this.morphAttributes;for(const l in o){const c=[],u=o[l];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);c.push(p)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],h=o[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cf=new _t,pr=new Fu,ha=new Qs,If=new C,pa=new C,ma=new C,_a=new C,zl=new C,ga=new C,Df=new C,va=new C;class F extends Rt{constructor(e=new an,n=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){ga.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const d=l[c],h=o[c];d!==0&&(zl.fromBufferAttribute(h,e),a?ga.addScaledVector(zl,d):ga.addScaledVector(zl.sub(n),d))}n.add(ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(o),pr.copy(e.ray).recast(e.near),!(ha.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ha,If)===null||pr.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Cf.copy(o).invert(),pr.copy(e.ray).applyMatrix4(Cf),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const _=f[g],m=a[_.materialIndex],A=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=A,D=M;S<D;S+=3){const R=l.getX(S),w=l.getX(S+1),I=l.getX(S+2);r=xa(this,m,e,i,u,d,h,R,w,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const A=l.getX(_),M=l.getX(_+1),S=l.getX(_+2);r=xa(this,a,e,i,u,d,h,A,M,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const _=f[g],m=a[_.materialIndex],A=Math.max(_.start,p.start),M=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let S=A,D=M;S<D;S+=3){const R=S,w=S+1,I=S+2;r=xa(this,m,e,i,u,d,h,R,w,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const A=_,M=_+1,S=_+2;r=xa(this,a,e,i,u,d,h,A,M,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function Z0(t,e,n,i,r,o,a,l){let c;if(e.side===sn?c=i.intersectTriangle(a,o,r,!0,l):c=i.intersectTriangle(r,o,a,e.side===ar,l),c===null)return null;va.copy(l),va.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(va);return u<n.near||u>n.far?null:{distance:u,point:va.clone(),object:t}}function xa(t,e,n,i,r,o,a,l,c,u){t.getVertexPosition(l,pa),t.getVertexPosition(c,ma),t.getVertexPosition(u,_a);const d=Z0(t,e,n,i,pa,ma,_a,Df);if(d){const h=new C;Tn.getBarycoord(Df,pa,ma,_a,h),r&&(d.uv=Tn.getInterpolatedAttribute(r,l,c,u,h,new Ke)),o&&(d.uv1=Tn.getInterpolatedAttribute(o,l,c,u,h,new Ke)),a&&(d.normal=Tn.getInterpolatedAttribute(a,l,c,u,h,new C),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new C,materialIndex:0};Tn.getNormal(pa,ma,_a,f.normal),d.face=f,d.barycoord=h}return d}class G extends an{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],u=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,o,0),g("z","y","x",1,-1,i,n,-e,a,o,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(h,2));function g(v,_,m,A,M,S,D,R,w,I,T){const E=S/w,O=D/I,k=S/2,B=D/2,Y=R/2,q=w+1,K=I+1;let J=0,z=0;const oe=new C;for(let ae=0;ae<K;ae++){const ve=ae*O-B;for(let Fe=0;Fe<q;Fe++){const tt=Fe*E-k;oe[v]=tt*A,oe[_]=ve*M,oe[m]=Y,u.push(oe.x,oe.y,oe.z),oe[v]=0,oe[_]=0,oe[m]=R>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(Fe/w),h.push(1-ae/I),J+=1}}for(let ae=0;ae<I;ae++)for(let ve=0;ve<w;ve++){const Fe=f+ve+q*ae,tt=f+ve+q*(ae+1),$=f+(ve+1)+q*(ae+1),ie=f+(ve+1)+q*ae;c.push(Fe,tt,ie),c.push(tt,$,ie),z+=6}l.addGroup(p,z,T),p+=z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new G(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Yo(t[n]);for(const r in i)e[r]=i[r]}return e}function j0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Q0={clone:Yo,merge:Xt};var J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends cr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _h extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new C,Nf=new Ke,Pf=new Ke;class tn extends _h{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,Nf,Pf),n.subVectors(Pf,Nf)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const So=-90,Eo=1;class tm extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(So,Eo,e,n);r.layers=this.layers,this.add(r);const o=new tn(So,Eo,e,n);o.layers=this.layers,this.add(o);const a=new tn(So,Eo,e,n);a.layers=this.layers,this.add(a);const l=new tn(So,Eo,e,n);l.layers=this.layers,this.add(l);const c=new tn(So,Eo,e,n);c.layers=this.layers,this.add(c);const u=new tn(So,Eo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,l,c]=n;for(const u of n)this.remove(u);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,c,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gh extends Zt{constructor(e,n,i,r,o,a,l,c,u,d){e=e!==void 0?e:[],n=n!==void 0?n:zo,super(e,n,i,r,o,a,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nm extends ro{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:li}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new G(5,5,5),o=new lr({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:tr});o.uniforms.tEquirect.value=n;const a=new F(r,o),l=n.minFilter;return n.minFilter===Pr&&(n.minFilter=li),new tm(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const Xl=new C,im=new C,rm=new ke;class Sr{constructor(e=new C(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Xl.subVectors(i,n).cross(im.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Xl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rm.getNormalMatrix(e),r=this.coplanarPoint(Xl).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Qs,Sa=new C;class Bu{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,o=new Sr,a=new Sr){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],g=r[9],v=r[10],_=r[11],m=r[12],A=r[13],M=r[14],S=r[15];if(i[0].setComponents(c-o,f-u,_-p,S-m).normalize(),i[1].setComponents(c+o,f+u,_+p,S+m).normalize(),i[2].setComponents(c+a,f+d,_+g,S+A).normalize(),i[3].setComponents(c-a,f-d,_-g,S-A).normalize(),i[4].setComponents(c-l,f-h,_-v,S-M).normalize(),n===Ii)i[5].setComponents(c+l,f+h,_+v,S+M).normalize();else if(n===$a)i[5].setComponents(l,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sa.x=r.normal.x>0?e.max.x:e.min.x,Sa.y=r.normal.y>0?e.max.y:e.min.y,Sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vh(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function om(t){const e=new WeakMap;function n(l,c){const u=l.array,d=l.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,d),l.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,c,u){const d=c.array,h=c.updateRanges;if(t.bindBuffer(u,l),h.length===0)t.bufferSubData(u,0,d);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(u,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:o,update:a}}class ml extends an{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,d=c+1,h=e/l,f=n/c,p=[],g=[],v=[],_=[];for(let m=0;m<d;m++){const A=m*f-a;for(let M=0;M<u;M++){const S=M*h-o;g.push(S,-A,0),v.push(0,0,1),_.push(M/l),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let A=0;A<l;A++){const M=A+u*m,S=A+u*(m+1),D=A+1+u*(m+1),R=A+1+u*m;p.push(M,S,R),p.push(S,D,R)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Im=`vec3 transformedNormal = objectNormal;
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
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
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
#endif`,r_=`struct PhysicalMaterial {
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
}`,o_=`
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Og=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Ig=`#define TOON
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
}`,Dg=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:sm,alphahash_pars_fragment:am,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:um,alphatest_pars_fragment:fm,aomap_fragment:dm,aomap_pars_fragment:hm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:_m,beginnormal_vertex:gm,bsdfs:vm,iridescence_fragment:xm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Tm,color_fragment:Am,color_pars_fragment:bm,color_pars_vertex:Rm,color_vertex:wm,common:Om,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Im,displacementmap_pars_vertex:Dm,displacementmap_vertex:Nm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Lm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:Bm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Hm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Qm,envmap_vertex:Wm,fog_vertex:Vm,fog_pars_vertex:zm,fog_fragment:Xm,fog_pars_fragment:Km,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Zm,lights_pars_begin:jm,lights_toon_fragment:Jm,lights_toon_pars_fragment:e_,lights_phong_fragment:t_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:s_,lights_fragment_end:a_,logdepthbuf_fragment:l_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:f_,map_fragment:d_,map_pars_fragment:h_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:__,metalnessmap_pars_fragment:g_,morphinstance_vertex:v_,morphcolor_vertex:x_,morphnormal_vertex:S_,morphtarget_pars_vertex:E_,morphtarget_vertex:M_,normal_fragment_begin:y_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:b_,normal_vertex:R_,normalmap_pars_fragment:w_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:D_,opaque_fragment:N_,packing:P_,premultiplied_alpha_fragment:L_,project_vertex:U_,dithering_fragment:F_,dithering_pars_fragment:B_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:W_,shadowmap_vertex:V_,shadowmask_pars_fragment:z_,skinbase_vertex:X_,skinning_pars_vertex:K_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:$_,specularmap_pars_fragment:Z_,tonemapping_fragment:j_,tonemapping_pars_fragment:Q_,transmission_fragment:J_,transmission_pars_fragment:eg,uv_pars_fragment:tg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:rg,background_vert:og,background_frag:sg,backgroundCube_vert:ag,backgroundCube_frag:lg,cube_vert:cg,cube_frag:ug,depth_vert:fg,depth_frag:dg,distanceRGBA_vert:hg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:_g,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:xg,meshbasic_frag:Sg,meshlambert_vert:Eg,meshlambert_frag:Mg,meshmatcap_vert:yg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:bg,meshphong_vert:Rg,meshphong_frag:wg,meshphysical_vert:Og,meshphysical_frag:Cg,meshtoon_vert:Ig,meshtoon_frag:Dg,points_vert:Ng,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ug,sprite_vert:Fg,sprite_frag:Bg},se={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ni={basic:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Xt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Xt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Xt([se.points,se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Xt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Xt([se.common,se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Xt([se.sprite,se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Xt([se.common,se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Xt([se.lights,se.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ni.physical={uniforms:Xt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ea={r:0,b:0,g:0},_r=new Xn,Gg=new _t;function Hg(t,e,n,i,r,o,a){const l=new we(0);let c=o===!0?0:1,u,d,h=null,f=0,p=null;function g(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?n:e).get(M)),M}function v(A){let M=!1;const S=g(A);S===null?m(l,c):S&&S.isColor&&(m(S,1),M=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(A,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===hl)?(d===void 0&&(d=new F(new G(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Yo(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),_r.copy(M.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(_r)),d.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ot,(h!==S||f!==S.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new F(new ml(2,2),new lr({name:"BackgroundMaterial",uniforms:Yo(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function m(A,M){A.getRGB(Ea,mh(t)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,M,a)}return{getClearColor:function(){return l},setClearColor:function(A,M=1){l.set(A),c=M,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,m(l,c)},render:v,addToRenderList:_}}function kg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,a=!1;function l(E,O,k,B,Y){let q=!1;const K=h(B,k,O);o!==K&&(o=K,u(o.object)),q=p(E,B,k,Y),q&&g(E,B,k,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(E,O,k,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function h(E,O,k){const B=k.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let q=Y[O.id];q===void 0&&(q={},Y[O.id]=q);let K=q[B];return K===void 0&&(K=f(c()),q[B]=K),K}function f(E){const O=[],k=[],B=[];for(let Y=0;Y<n;Y++)O[Y]=0,k[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,O,k,B){const Y=o.attributes,q=O.attributes;let K=0;const J=k.getAttributes();for(const z in J)if(J[z].location>=0){const ae=Y[z];let ve=q[z];if(ve===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),ae===void 0||ae.attribute!==ve||ve&&ae.data!==ve.data)return!0;K++}return o.attributesNum!==K||o.index!==B}function g(E,O,k,B){const Y={},q=O.attributes;let K=0;const J=k.getAttributes();for(const z in J)if(J[z].location>=0){let ae=q[z];ae===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor));const ve={};ve.attribute=ae,ae&&ae.data&&(ve.data=ae.data),Y[z]=ve,K++}o.attributes=Y,o.attributesNum=K,o.index=B}function v(){const E=o.newAttributes;for(let O=0,k=E.length;O<k;O++)E[O]=0}function _(E){m(E,0)}function m(E,O){const k=o.newAttributes,B=o.enabledAttributes,Y=o.attributeDivisors;k[E]=1,B[E]===0&&(t.enableVertexAttribArray(E),B[E]=1),Y[E]!==O&&(t.vertexAttribDivisor(E,O),Y[E]=O)}function A(){const E=o.newAttributes,O=o.enabledAttributes;for(let k=0,B=O.length;k<B;k++)O[k]!==E[k]&&(t.disableVertexAttribArray(k),O[k]=0)}function M(E,O,k,B,Y,q,K){K===!0?t.vertexAttribIPointer(E,O,k,Y,q):t.vertexAttribPointer(E,O,k,B,Y,q)}function S(E,O,k,B){v();const Y=B.attributes,q=k.getAttributes(),K=O.defaultAttributeValues;for(const J in q){const z=q[J];if(z.location>=0){let oe=Y[J];if(oe===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){const ae=oe.normalized,ve=oe.itemSize,Fe=e.get(oe);if(Fe===void 0)continue;const tt=Fe.buffer,$=Fe.type,ie=Fe.bytesPerElement,Me=$===t.INT||$===t.UNSIGNED_INT||oe.gpuType===Ou;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Ne=ce.stride,Be=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<z.locationSize;ze++)m(z.location+ze,ce.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<z.locationSize;ze++)_(z.location+ze);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let ze=0;ze<z.locationSize;ze++)M(z.location+ze,ve/z.locationSize,$,ae,Ne*ie,(Be+ve/z.locationSize*ze)*ie,Me)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce,oe.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<z.locationSize;ce++)_(z.location+ce);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let ce=0;ce<z.locationSize;ce++)M(z.location+ce,ve/z.locationSize,$,ae,ve*ie,ve/z.locationSize*ce*ie,Me)}}else if(K!==void 0){const ae=K[J];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(z.location,ae);break;case 3:t.vertexAttrib3fv(z.location,ae);break;case 4:t.vertexAttrib4fv(z.location,ae);break;default:t.vertexAttrib1fv(z.location,ae)}}}}A()}function D(){I();for(const E in i){const O=i[E];for(const k in O){const B=O[k];for(const Y in B)d(B[Y].object),delete B[Y];delete O[k]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const O=i[E.id];for(const k in O){const B=O[k];for(const Y in B)d(B[Y].object),delete B[Y];delete O[k]}delete i[E.id]}function w(E){for(const O in i){const k=i[O];if(k[E.id]===void 0)continue;const B=k[E.id];for(const Y in B)d(B[Y].object),delete B[Y];delete k[E.id]}}function I(){T(),a=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:I,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:_,disableUnusedAttributes:A}}function Wg(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function a(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function l(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];n.update(p,i,1)}function c(u,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*f[v];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Vg(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Wn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const I=w===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Li&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ci&&!I)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:D,maxSamples:R}}function zg(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new Sr,l=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,m=t.get(h);if(!r||g===null||g.length===0||o&&!_)o?d(null):u();else{const A=o?0:i,M=A*4;let S=m.clippingState||null;c.value=S,S=d(g,f,M,p);for(let D=0;D!==M;++D)S[D]=n[D];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,g){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=c.value,g!==!0||_===null){const m=p+v*4,A=f.matrixWorldInverse;l.getNormalMatrix(A),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,S=p;M!==v;++M,S+=4)a.copy(h[M]).applyMatrix4(A,l),a.normal.toArray(_,S),_[S+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function Xg(t){let e=new WeakMap;function n(a,l){return l===Pc?a.mapping=zo:l===Lc&&(a.mapping=Xo),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===Pc||l===Lc)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new nm(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class xh extends _h{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=4,Lf=[.125,.215,.35,.446,.526,.582],br=20,Kl=new xh,Uf=new we;let ql=null,Yl=0,$l=0,Zl=!1;const Er=(1+Math.sqrt(5))/2,Mo=1/Er,Ff=[new C(-Er,Mo,0),new C(Er,Mo,0),new C(-Mo,0,Er),new C(Mo,0,Er),new C(0,Er,-Mo),new C(0,Er,Mo),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Yl,$l),this._renderer.xr.enabled=Zl,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zo||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:$s,format:Wn,colorSpace:Jo,depthBuffer:!1},r=Gf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(o)),this._blurMaterial=qg(o,e,n)}return r}_compileMaterial(e){const n=new F(this._lodPlanes[0],e);this._renderer.compile(n,Kl)}_sceneToCubeUV(e,n,i,r){const l=new tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Uf),d.toneMapping=nr,d.autoClear=!1;const p=new xn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new F(new G,p);let v=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,v=!0):(p.color.copy(Uf),v=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(l.up.set(0,c[m],0),l.lookAt(u[m],0,0)):A===1?(l.up.set(0,0,c[m]),l.lookAt(0,u[m],0)):(l.up.set(0,c[m],0),l.lookAt(0,0,u[m]));const M=this._cubeSize;Ma(r,A*M,m>2?M:0,M,M),d.setRenderTarget(r),v&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zo||e.mapping===Xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new F(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const c=this._cubeSize;Ma(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Kl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Ff[(r-o-1)%Ff.length];this._blur(e,o-1,o,a,l)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new F(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*br-1),v=o/g,_=isFinite(o)?1+Math.floor(d*v):br;_>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${br}`);const m=[];let A=0;for(let w=0;w<br;++w){const I=w/v,T=Math.exp(-I*I/2);m.push(T),w===0?A+=T:w<_&&(A+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/A;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const S=this._sizeLods[r],D=3*S*(r>M-Co?r-M+Co:0),R=4*(this._cubeSize-S);Ma(n,D,R,3*S,2*S),c.setRenderTarget(n),c.render(h,Kl)}}function Kg(t){const e=[],n=[],i=[];let r=t;const o=t-Co+1+Lf.length;for(let a=0;a<o;a++){const l=Math.pow(2,r);n.push(l);let c=1/l;a>t-Co?c=Lf[a-t+Co-1]:a===0&&(c=0),i.push(c);const u=1/(l-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,v=3,_=2,m=1,A=new Float32Array(v*g*p),M=new Float32Array(_*g*p),S=new Float32Array(m*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,I=R>2?0:-1,T=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];A.set(T,v*g*R),M.set(f,_*g*R);const E=[R,R,R,R,R,R];S.set(E,m*g*R)}const D=new an;D.setAttribute("position",new zn(A,v)),D.setAttribute("uv",new zn(M,_)),D.setAttribute("faceIndex",new zn(S,m)),e.push(D),r>Co&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gf(t,e,n){const i=new ro(t,e,n);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qg(t,e,n){const i=new Float32Array(br),r=new C(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Hf(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function kf(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Gu(){return`

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
	`}function Yg(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===Pc||c===Lc,d=c===zo||c===Xo;if(u||d){let h=e.get(l);const f=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return n===null&&(n=new Bf(t)),h=u?n.fromEquirectangular(l,h):n.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),h.texture;if(h!==void 0)return h.texture;{const p=l.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Bf(t)),h=u?n.fromEquirectangular(l):n.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),l.addEventListener("dispose",o),h.texture):null}}}return l}function r(l){let c=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&c++;return c===u}function o(l){const c=l.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function $g(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zg(t,e,n,i){const r={},o=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let _=0,m=v.length;_<m;_++)e.remove(v[_])}f.removeEventListener("dispose",a),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let _=0,m=v.length;_<m;_++)e.update(v[_],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let M=0,S=A.length;M<S;M+=3){const D=A[M+0],R=A[M+1],w=A[M+2];f.push(D,R,R,w,w,D)}}else if(g!==void 0){const A=g.array;v=g.version;for(let M=0,S=A.length/3-1;M<S;M+=3){const D=M+0,R=M+1,w=M+2;f.push(D,R,R,w,w,D)}}else return;const _=new(lh(f)?ph:hh)(f,1);_.version=v;const m=o.get(h);m&&e.remove(m),o.set(h,_)}function d(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:l,update:c,getWireframeAttribute:d}}function jg(t,e,n){let i;function r(f){i=f}let o,a;function l(f){o=f.type,a=f.bytesPerElement}function c(f,p){t.drawElements(i,p,o,f*a),n.update(p,i,1)}function u(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,f*a,g),n.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,f,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];n.update(_,i,1)}function h(f,p,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)u(f[m]/a,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,v,0,g);let m=0;for(let A=0;A<g;A++)m+=p[A]*v[A];n.update(m,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Qg(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(o/3);break;case t.LINES:n.lines+=l*(o/2);break;case t.LINE_STRIP:n.lines+=l*(o-1);break;case t.LINE_LOOP:n.lines+=l*o;break;case t.POINTS:n.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Jg(t,e,n){const i=new WeakMap,r=new st;function o(a,l,c){const u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(l);if(f===void 0||f.count!==h){let E=function(){I.dispose(),i.delete(l),l.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],A=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let D=l.attributes.position.count*S,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*R*4*h),I=new uh(w,D,R,h);I.type=Ci,I.needsUpdate=!0;const T=S*4;for(let O=0;O<h;O++){const k=m[O],B=A[O],Y=M[O],q=D*R*4*O;for(let K=0;K<k.count;K++){const J=K*T;g===!0&&(r.fromBufferAttribute(k,K),w[q+J+0]=r.x,w[q+J+1]=r.y,w[q+J+2]=r.z,w[q+J+3]=0),v===!0&&(r.fromBufferAttribute(B,K),w[q+J+4]=r.x,w[q+J+5]=r.y,w[q+J+6]=r.z,w[q+J+7]=0),_===!0&&(r.fromBufferAttribute(Y,K),w[q+J+8]=r.x,w[q+J+9]=r.y,w[q+J+10]=r.z,w[q+J+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new Ke(D,R)},i.set(l,f),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let _=0;_<u.length;_++)g+=u[_];const v=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function ev(t,e,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}class Sh extends Zt{constructor(e,n,i,r,o,a,l,c,u,d=Go){if(d!==Go&&d!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Go&&(i=io),i===void 0&&d===qo&&(i=Ko),super(null,r,o,a,l,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Eh=new Zt,Wf=new Sh(1,1),Mh=new uh,yh=new H0,Th=new gh,Vf=[],zf=[],Xf=new Float32Array(16),Kf=new Float32Array(9),qf=new Float32Array(4);function ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Vf[r];if(o===void 0&&(o=new Float32Array(r),Vf[r]=o),e!==0){i.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(o,l)}return o}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _l(t,e){let n=zf[e];n===void 0&&(n=new Int32Array(e),zf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function iv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function rv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function ov(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Ot(n,i))return;qf.set(i),t.uniformMatrix2fv(this.addr,!1,qf),Ct(n,i)}}function sv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Ot(n,i))return;Kf.set(i),t.uniformMatrix3fv(this.addr,!1,Kf),Ct(n,i)}}function av(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Ot(n,i))return;Xf.set(i),t.uniformMatrix4fv(this.addr,!1,Xf),Ct(n,i)}}function lv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function uv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function fv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function dv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function pv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function mv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function _v(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Wf.compareFunction=ah,o=Wf):o=Eh,n.setTexture2D(e||o,r)}function gv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yh,r)}function vv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Th,r)}function xv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mh,r)}function Sv(t){switch(t){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return ov;case 35675:return sv;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return hv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return xv}}function Ev(t,e){t.uniform1fv(this.addr,e)}function Mv(t,e){const n=ns(e,this.size,2);t.uniform2fv(this.addr,n)}function yv(t,e){const n=ns(e,this.size,3);t.uniform3fv(this.addr,n)}function Tv(t,e){const n=ns(e,this.size,4);t.uniform4fv(this.addr,n)}function Av(t,e){const n=ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bv(t,e){const n=ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Rv(t,e){const n=ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wv(t,e){t.uniform1iv(this.addr,e)}function Ov(t,e){t.uniform2iv(this.addr,e)}function Cv(t,e){t.uniform3iv(this.addr,e)}function Iv(t,e){t.uniform4iv(this.addr,e)}function Dv(t,e){t.uniform1uiv(this.addr,e)}function Nv(t,e){t.uniform2uiv(this.addr,e)}function Pv(t,e){t.uniform3uiv(this.addr,e)}function Lv(t,e){t.uniform4uiv(this.addr,e)}function Uv(t,e,n){const i=this.cache,r=e.length,o=_l(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Eh,o[a])}function Fv(t,e,n){const i=this.cache,r=e.length,o=_l(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||yh,o[a])}function Bv(t,e,n){const i=this.cache,r=e.length,o=_l(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Th,o[a])}function Gv(t,e,n){const i=this.cache,r=e.length,o=_l(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ct(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Mh,o[a])}function Hv(t){switch(t){case 5126:return Ev;case 35664:return Mv;case 35665:return yv;case 35666:return Tv;case 35674:return Av;case 35675:return bv;case 35676:return Rv;case 5124:case 35670:return wv;case 35667:case 35671:return Ov;case 35668:case 35672:return Cv;case 35669:case 35673:return Iv;case 5125:return Dv;case 36294:return Nv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return Gv}}class kv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sv(n.type)}}class Wv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hv(n.type)}}class Vv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const l=r[o];l.setValue(e,n[l.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function Yf(t,e){t.seq.push(e),t.map[e.id]=e}function zv(t,e,n){const i=t.name,r=i.length;for(jl.lastIndex=0;;){const o=jl.exec(i),a=jl.lastIndex;let l=o[1];const c=o[2]==="]",u=o[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Yf(n,u===void 0?new kv(l,t,e):new Wv(l,t,e));break}else{let h=n.map[l];h===void 0&&(h=new Vv(l),Yf(n,h)),n=h}}}class za{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);zv(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const l=n[o],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function $f(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Xv=37297;let Kv=0;function qv(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const Zf=new ke;function Yv(t){Qe._getMatrix(Zf,Qe.workingColorSpace,t);const e=`mat3( ${Zf.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case pl:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function jf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+qv(t.getShaderSource(e),a)}else return r}function $v(t,e){const n=Yv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Zv(t,e){let n;switch(e){case Qp:n="Linear";break;case Jp:n="Reinhard";break;case e0:n="Cineon";break;case t0:n="ACESFilmic";break;case i0:n="AgX";break;case r0:n="Neutral";break;case n0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ya=new C;function jv(){Qe.getLuminanceCoefficients(ya);const t=ya.x.toFixed(4),e=ya.y.toFixed(4),n=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Jv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ex(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let l=1;o.type===t.FLOAT_MAT2&&(l=2),o.type===t.FLOAT_MAT3&&(l=3),o.type===t.FLOAT_MAT4&&(l=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function Ts(t){return t!==""}function Qf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(t){return t.replace(tx,ix)}const nx=new Map;function ix(t,e){let n=Ve[e];if(n===void 0){const i=nx.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uu(n)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(t){return t.replace(rx,ox)}function ox(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function td(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function sx(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zo:case Xo:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xo:e="ENVMAP_MODE_REFRACTION";break}return e}function cx(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wu:e="ENVMAP_BLENDING_MULTIPLY";break;case Zp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function ux(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function fx(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=sx(n),u=ax(n),d=lx(n),h=cx(n),f=ux(n),p=Qv(n),g=Jv(o),v=r.createProgram();let _,m,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(_=[td(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[td(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==nr?Zv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,$v("linearToOutputTexel",n.outputColorSpace),jv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ts).join(`
`)),a=uu(a),a=Qf(a,n),a=Jf(a,n),l=uu(l),l=Qf(l,n),l=Jf(l,n),a=ed(a),l=ed(l),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",n.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=A+_+a,S=A+m+l,D=$f(r,r.VERTEX_SHADER,M),R=$f(r,r.FRAGMENT_SHADER,S);r.attachShader(v,D),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(O){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(D).trim(),Y=r.getShaderInfoLog(R).trim();let q=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,D,R);else{const J=jf(r,D,"vertex"),z=jf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+J+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||Y==="")&&(K=!1);K&&(O.diagnostics={runnable:q,programLog:k,vertexShader:{log:B,prefix:_},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(D),r.deleteShader(R),I=new za(r,v),T=ex(r,v)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,Xv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let dx=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new px(e),n.set(e,i)),i}}class px{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}}function mx(t,e,n,i,r,o,a){const l=new fh,c=new hx,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function _(T,E,O,k,B){const Y=k.fog,q=B.geometry,K=T.isMeshStandardMaterial?k.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||K),z=J&&J.mapping===hl?J.image.height:null,oe=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=ae!==void 0?ae.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let tt,$,ie,Me;if(oe){const rt=ni[oe];tt=rt.vertexShader,$=rt.fragmentShader}else tt=T.vertexShader,$=T.fragmentShader,c.update(T),ie=c.getVertexShaderID(T),Me=c.getFragmentShaderID(T);const ce=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,ze=B.isBatchedMesh===!0,vt=!!T.map,Ze=!!T.matcap,yt=!!J,U=!!T.aoMap,Sn=!!T.lightMap,qe=!!T.bumpMap,Ye=!!T.normalMap,Ce=!!T.displacementMap,dt=!!T.emissiveMap,Oe=!!T.metalnessMap,b=!!T.roughnessMap,x=T.anisotropy>0,H=T.clearcoat>0,j=T.dispersion>0,ee=T.iridescence>0,Z=T.sheen>0,ye=T.transmission>0,ue=x&&!!T.anisotropyMap,me=H&&!!T.clearcoatMap,je=H&&!!T.clearcoatNormalMap,te=H&&!!T.clearcoatRoughnessMap,_e=ee&&!!T.iridescenceMap,Ie=ee&&!!T.iridescenceThicknessMap,Le=Z&&!!T.sheenColorMap,ge=Z&&!!T.sheenRoughnessMap,$e=!!T.specularMap,We=!!T.specularColorMap,ut=!!T.specularIntensityMap,N=ye&&!!T.transmissionMap,le=ye&&!!T.thicknessMap,X=!!T.gradientMap,Q=!!T.alphaMap,he=T.alphaTest>0,fe=!!T.alphaHash,Ge=!!T.extensions;let Et=nr;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Et=t.toneMapping);const Gt={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:tt,fragmentShader:$,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ze,batchingColor:ze&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Jo,alphaToCoverage:!!T.alphaToCoverage,map:vt,matcap:Ze,envMap:yt,envMapMode:yt&&J.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:Sn,bumpMap:qe,normalMap:Ye,displacementMap:f&&Ce,emissiveMap:dt,normalMapObjectSpace:Ye&&T.normalMapType===l0,normalMapTangentSpace:Ye&&T.normalMapType===Lu,metalnessMap:Oe,roughnessMap:b,anisotropy:x,anisotropyMap:ue,clearcoat:H,clearcoatMap:me,clearcoatNormalMap:je,clearcoatRoughnessMap:te,dispersion:j,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:Ie,sheen:Z,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:$e,specularColorMap:We,specularIntensityMap:ut,transmission:ye,transmissionMap:N,thicknessMap:le,gradientMap:X,opaque:T.transparent===!1&&T.blending===Bo&&T.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:fe,combine:T.combine,mapUv:vt&&v(T.map.channel),aoMapUv:U&&v(T.aoMap.channel),lightMapUv:Sn&&v(T.lightMap.channel),bumpMapUv:qe&&v(T.bumpMap.channel),normalMapUv:Ye&&v(T.normalMap.channel),displacementMapUv:Ce&&v(T.displacementMap.channel),emissiveMapUv:dt&&v(T.emissiveMap.channel),metalnessMapUv:Oe&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:ue&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(T.sheenRoughnessMap.channel),specularMapUv:$e&&v(T.specularMap.channel),specularColorMapUv:We&&v(T.specularColorMap.channel),specularIntensityMapUv:ut&&v(T.specularIntensityMap.channel),transmissionMapUv:N&&v(T.transmissionMap.channel),thicknessMapUv:le&&v(T.thicknessMap.channel),alphaMapUv:Q&&v(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ye||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(vt||Q),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:vt&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:dt&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=u.has(1),Gt.vertexUv2s=u.has(2),Gt.vertexUv3s=u.has(3),u.clear(),Gt}function m(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)E.push(O),E.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(A(E,T),M(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function A(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function M(T,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),T.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),T.push(l.mask)}function S(T){const E=g[T.type];let O;if(E){const k=ni[E];O=Q0.clone(k.uniforms)}else O=T.uniforms;return O}function D(T,E){let O;for(let k=0,B=d.length;k<B;k++){const Y=d[k];if(Y.cacheKey===E){O=Y,++O.usedTimes;break}}return O===void 0&&(O=new fx(t,E,T,o),d.push(O)),O}function R(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function w(T){c.remove(T)}function I(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:d,dispose:I}}function _x(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function gx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function nd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function id(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,p,g,v,_){let m=t[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:_},t[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=_),e++,m}function l(h,f,p,g,v,_){const m=a(h,f,p,g,v,_);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):n.push(m)}function c(h,f,p,g,v,_){const m=a(h,f,p,g,v,_);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):n.unshift(m)}function u(h,f){n.length>1&&n.sort(h||gx),i.length>1&&i.sort(f||nd),r.length>1&&r.sort(f||nd)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:d,sort:u}}function vx(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new id,t.set(i,[a])):r>=o.length?(a=new id,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function xx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new C,color:new we};break;case"SpotLight":n={position:new C,direction:new C,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new C,halfWidth:new C,halfHeight:new C};break}return t[e.id]=n,n}}}function Sx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Ex=0;function Mx(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yx(t){const e=new xx,n=Sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new C);const r=new C,o=new _t,a=new _t;function l(u){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,_=0,m=0,A=0,M=0,S=0,D=0,R=0,w=0;u.sort(Mx);for(let T=0,E=u.length;T<E;T++){const O=u[T],k=O.color,B=O.intensity,Y=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=k.r*B,h+=k.g*B,f+=k.b*B;else if(O.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(O.sh.coefficients[K],B);w++}else if(O.isDirectionalLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const J=O.shadow,z=n.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=O.shadow.matrix,A++}i.directional[p]=K,p++}else if(O.isSpotLight){const K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(k).multiplyScalar(B),K.distance=Y,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,i.spot[v]=K;const J=O.shadow;if(O.map&&(i.spotLightMap[D]=O.map,D++,J.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[v]=J.matrix,O.castShadow){const z=n.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=q,S++}v++}else if(O.isRectAreaLight){const K=e.get(O);K.color.copy(k).multiplyScalar(B),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),i.rectArea[_]=K,_++}else if(O.isPointLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){const J=O.shadow,z=n.get(O);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=O.shadow.matrix,M++}i.point[g]=K,g++}else if(O.isHemisphereLight){const K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(B),K.groundColor.copy(O.groundColor).multiplyScalar(B),i.hemi[m]=K,m++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==m||I.numDirectionalShadows!==A||I.numPointShadows!==M||I.numSpotShadows!==S||I.numSpotMaps!==D||I.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=m,I.numDirectionalShadows=A,I.numPointShadows=M,I.numSpotShadows=S,I.numSpotMaps=D,I.numLightProbes=w,i.version=Ex++)}function c(u,d){let h=0,f=0,p=0,g=0,v=0;const _=d.matrixWorldInverse;for(let m=0,A=u.length;m<A;m++){const M=u[m];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(M.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:l,setupView:c,state:i}}function rd(t){const e=new yx(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(){e.setup(n)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tx(t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new rd(t),e.set(r,[l])):o>=a.length?(l=new rd(t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ax extends cr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bx extends cr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function Ox(t,e,n){let i=new Bu;const r=new Ke,o=new Ke,a=new st,l=new Ax({depthPacking:a0}),c=new bx,u={},d=n.maxTextureSize,h={[ar]:sn,[sn]:ar,[Bn]:Bn},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Rx,fragmentShader:wx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new F(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let m=this.type;this.render=function(R,w,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),k=t.state;k.setBlending(tr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=m!==Mi&&this.type===Mi,Y=m===Mi&&this.type!==Mi;for(let q=0,K=R.length;q<K;q++){const J=R[q],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const oe=z.getFrameExtents();if(r.multiply(oe),o.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/oe.x),r.x=o.x*oe.x,z.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/oe.y),r.y=o.y*oe.y,z.mapSize.y=o.y)),z.map===null||B===!0||Y===!0){const ve=this.type!==Mi?{minFilter:gn,magFilter:gn}:{};z.map!==null&&z.map.dispose(),z.map=new ro(r.x,r.y,ve),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ae=z.getViewportCount();for(let ve=0;ve<ae;ve++){const Fe=z.getViewport(ve);a.set(o.x*Fe.x,o.y*Fe.y,o.x*Fe.z,o.y*Fe.w),k.viewport(a),z.updateMatrices(J,ve),i=z.getFrustum(),S(w,I,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===Mi&&A(z,I),z.needsUpdate=!1}m=this.type,_.needsUpdate=!1,t.setRenderTarget(T,E,O)};function A(R,w){const I=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ro(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,I,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,I,p,v,null)}function M(R,w,I,T){let E=null;const O=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)E=O;else if(E=I.isPointLight===!0?c:l,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=E.uuid,B=w.uuid;let Y=u[k];Y===void 0&&(Y={},u[k]=Y);let q=Y[B];q===void 0&&(q=E.clone(),Y[B]=q,w.addEventListener("dispose",D)),E=q}if(E.visible=w.visible,E.wireframe=w.wireframe,T===Mi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=t.properties.get(E);k.light=I}return E}function S(R,w,I,T,E){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Mi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const B=e.update(R),Y=R.material;if(Array.isArray(Y)){const q=B.groups;for(let K=0,J=q.length;K<J;K++){const z=q[K],oe=Y[z.materialIndex];if(oe&&oe.visible){const ae=M(R,oe,T,E);R.onBeforeShadow(t,R,w,I,B,ae,z),t.renderBufferDirect(I,null,B,ae,R,z),R.onAfterShadow(t,R,w,I,B,ae,z)}}}else if(Y.visible){const q=M(R,Y,T,E);R.onBeforeShadow(t,R,w,I,B,q,null),t.renderBufferDirect(I,null,B,q,R,null),R.onAfterShadow(t,R,w,I,B,q,null)}}const k=R.children;for(let B=0,Y=k.length;B<Y;B++)S(k[B],w,I,T,E)}function D(R){R.target.removeEventListener("dispose",D);for(const I in u){const T=u[I],E=R.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const Cx={[Rc]:wc,[Oc]:Dc,[Cc]:Nc,[Vo]:Ic,[wc]:Rc,[Dc]:Oc,[Nc]:Cc,[Ic]:Vo};function Ix(t,e){function n(){let N=!1;const le=new st;let X=null;const Q=new st(0,0,0,0);return{setMask:function(he){X!==he&&!N&&(t.colorMask(he,he,he,he),X=he)},setLocked:function(he){N=he},setClear:function(he,fe,Ge,Et,Gt){Gt===!0&&(he*=Et,fe*=Et,Ge*=Et),le.set(he,fe,Ge,Et),Q.equals(le)===!1&&(t.clearColor(he,fe,Ge,Et),Q.copy(le))},reset:function(){N=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,X=null,Q=null,he=null;return{setReversed:function(fe){if(le!==fe){const Ge=e.get("EXT_clip_control");le?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const Et=he;he=null,this.setClear(Et)}le=fe},getReversed:function(){return le},setTest:function(fe){fe?ce(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(fe){X!==fe&&!N&&(t.depthMask(fe),X=fe)},setFunc:function(fe){if(le&&(fe=Cx[fe]),Q!==fe){switch(fe){case Rc:t.depthFunc(t.NEVER);break;case wc:t.depthFunc(t.ALWAYS);break;case Oc:t.depthFunc(t.LESS);break;case Vo:t.depthFunc(t.LEQUAL);break;case Cc:t.depthFunc(t.EQUAL);break;case Ic:t.depthFunc(t.GEQUAL);break;case Dc:t.depthFunc(t.GREATER);break;case Nc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=fe}},setLocked:function(fe){N=fe},setClear:function(fe){he!==fe&&(le&&(fe=1-fe),t.clearDepth(fe),he=fe)},reset:function(){N=!1,X=null,Q=null,he=null,le=!1}}}function r(){let N=!1,le=null,X=null,Q=null,he=null,fe=null,Ge=null,Et=null,Gt=null;return{setTest:function(rt){N||(rt?ce(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(rt){le!==rt&&!N&&(t.stencilMask(rt),le=rt)},setFunc:function(rt,An,mi){(X!==rt||Q!==An||he!==mi)&&(t.stencilFunc(rt,An,mi),X=rt,Q=An,he=mi)},setOp:function(rt,An,mi){(fe!==rt||Ge!==An||Et!==mi)&&(t.stencilOp(rt,An,mi),fe=rt,Ge=An,Et=mi)},setLocked:function(rt){N=rt},setClear:function(rt){Gt!==rt&&(t.clearStencil(rt),Gt=rt)},reset:function(){N=!1,le=null,X=null,Q=null,he=null,fe=null,Ge=null,Et=null,Gt=null}}}const o=new n,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let d={},h={},f=new WeakMap,p=[],g=null,v=!1,_=null,m=null,A=null,M=null,S=null,D=null,R=null,w=new we(0,0,0),I=0,T=!1,E=null,O=null,k=null,B=null,Y=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=J>=2);let oe=null,ae={};const ve=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),tt=new st().fromArray(ve),$=new st().fromArray(Fe);function ie(N,le,X,Q){const he=new Uint8Array(4),fe=t.createTexture();t.bindTexture(N,fe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<X;Ge++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(le+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return fe}const Me={};Me[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ce(t.DEPTH_TEST),a.setFunc(Vo),qe(!1),Ye(af),ce(t.CULL_FACE),U(tr);function ce(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function Ne(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function Be(N,le){return h[N]!==le?(t.bindFramebuffer(N,le),h[N]=le,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=le),!0):!1}function ze(N,le){let X=p,Q=!1;if(N){X=f.get(le),X===void 0&&(X=[],f.set(le,X));const he=N.textures;if(X.length!==he.length||X[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Ge=he.length;fe<Ge;fe++)X[fe]=t.COLOR_ATTACHMENT0+fe;X.length=he.length,Q=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Q=!0);Q&&t.drawBuffers(X)}function vt(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const Ze={[Ar]:t.FUNC_ADD,[Np]:t.FUNC_SUBTRACT,[Pp]:t.FUNC_REVERSE_SUBTRACT};Ze[Lp]=t.MIN,Ze[Up]=t.MAX;const yt={[Fp]:t.ZERO,[Bp]:t.ONE,[Gp]:t.SRC_COLOR,[Ac]:t.SRC_ALPHA,[Xp]:t.SRC_ALPHA_SATURATE,[Vp]:t.DST_COLOR,[kp]:t.DST_ALPHA,[Hp]:t.ONE_MINUS_SRC_COLOR,[bc]:t.ONE_MINUS_SRC_ALPHA,[zp]:t.ONE_MINUS_DST_COLOR,[Wp]:t.ONE_MINUS_DST_ALPHA,[Kp]:t.CONSTANT_COLOR,[qp]:t.ONE_MINUS_CONSTANT_COLOR,[Yp]:t.CONSTANT_ALPHA,[$p]:t.ONE_MINUS_CONSTANT_ALPHA};function U(N,le,X,Q,he,fe,Ge,Et,Gt,rt){if(N===tr){v===!0&&(Ne(t.BLEND),v=!1);return}if(v===!1&&(ce(t.BLEND),v=!0),N!==Dp){if(N!==_||rt!==T){if((m!==Ar||S!==Ar)&&(t.blendEquation(t.FUNC_ADD),m=Ar,S=Ar),rt)switch(N){case Bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFunc(t.ONE,t.ONE);break;case cf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case cf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,M=null,D=null,R=null,w.set(0,0,0),I=0,_=N,T=rt}return}he=he||le,fe=fe||X,Ge=Ge||Q,(le!==m||he!==S)&&(t.blendEquationSeparate(Ze[le],Ze[he]),m=le,S=he),(X!==A||Q!==M||fe!==D||Ge!==R)&&(t.blendFuncSeparate(yt[X],yt[Q],yt[fe],yt[Ge]),A=X,M=Q,D=fe,R=Ge),(Et.equals(w)===!1||Gt!==I)&&(t.blendColor(Et.r,Et.g,Et.b,Gt),w.copy(Et),I=Gt),_=N,T=!1}function Sn(N,le){N.side===Bn?Ne(t.CULL_FACE):ce(t.CULL_FACE);let X=N.side===sn;le&&(X=!X),qe(X),N.blending===Bo&&N.transparent===!1?U(tr):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),o.setMask(N.colorWrite);const Q=N.stencilWrite;l.setTest(Q),Q&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(N){E!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),E=N)}function Ye(N){N!==Op?(ce(t.CULL_FACE),N!==O&&(N===af?t.cullFace(t.BACK):N===Cp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),O=N}function Ce(N){N!==k&&(K&&t.lineWidth(N),k=N)}function dt(N,le,X){N?(ce(t.POLYGON_OFFSET_FILL),(B!==le||Y!==X)&&(t.polygonOffset(le,X),B=le,Y=X)):Ne(t.POLYGON_OFFSET_FILL)}function Oe(N){N?ce(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function b(N){N===void 0&&(N=t.TEXTURE0+q-1),oe!==N&&(t.activeTexture(N),oe=N)}function x(N,le,X){X===void 0&&(oe===null?X=t.TEXTURE0+q-1:X=oe);let Q=ae[X];Q===void 0&&(Q={type:void 0,texture:void 0},ae[X]=Q),(Q.type!==N||Q.texture!==le)&&(oe!==X&&(t.activeTexture(X),oe=X),t.bindTexture(N,le||Me[N]),Q.type=N,Q.texture=le)}function H(){const N=ae[oe];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){tt.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),tt.copy(N))}function ge(N){$.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function $e(N,le){let X=u.get(le);X===void 0&&(X=new WeakMap,u.set(le,X));let Q=X.get(N);Q===void 0&&(Q=t.getUniformBlockIndex(le,N.name),X.set(N,Q))}function We(N,le){const Q=u.get(le).get(N);c.get(le)!==Q&&(t.uniformBlockBinding(le,Q,N.__bindingPointIndex),c.set(le,Q))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},oe=null,ae={},h={},f=new WeakMap,p=[],g=null,v=!1,_=null,m=null,A=null,M=null,S=null,D=null,R=null,w=new we(0,0,0),I=0,T=!1,E=null,O=null,k=null,B=null,Y=null,tt.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:ce,disable:Ne,bindFramebuffer:Be,drawBuffers:ze,useProgram:vt,setBlending:U,setMaterial:Sn,setFlipSided:qe,setCullFace:Ye,setLineWidth:Ce,setPolygonOffset:dt,setScissorTest:Oe,activeTexture:b,bindTexture:x,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Ie,updateUBOMapping:$e,uniformBlockBinding:We,texStorage2D:je,texStorage3D:te,texSubImage2D:Z,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Le,viewport:ge,reset:ut}}function od(t,e,n,i){const r=Dx(i);switch(n){case eh:return t*e;case nh:return t*e;case ih:return t*e*2;case rh:return t*e/r.components*r.byteLength;case Du:return t*e/r.components*r.byteLength;case oh:return t*e*2/r.components*r.byteLength;case Nu:return t*e*2/r.components*r.byteLength;case th:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Pu:return t*e*4/r.components*r.byteLength;case Ba:case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ha:case ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gc:case kc:return Math.max(t,16)*Math.max(e,8)/4;case Bc:case Hc:return Math.max(t,8)*Math.max(e,8)/2;case Wc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ru:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wa:case ou:case su:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sh:case au:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lu:case cu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Dx(t){switch(t){case Li:case jd:return{byteLength:1,components:1};case Vs:case Qd:case $s:return{byteLength:2,components:1};case Cu:case Iu:return{byteLength:2,components:4};case io:case Ou:case Ci:return{byteLength:4,components:1};case Jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Nx(t,e,n,i,r,o,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Za("canvas")}function v(b,x,H){let j=1;const ee=Oe(b);if((ee.width>H||ee.height>H)&&(j=H/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(j*ee.width),ye=Math.floor(j*ee.height);h===void 0&&(h=g(Z,ye));const ue=x?g(Z,ye):h;return ue.width=Z,ue.height=ye,ue.getContext("2d").drawImage(b,0,0,Z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+ye+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function _(b){return b.generateMipmaps}function m(b){t.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(b,x,H,j,ee=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===t.RED&&(H===t.FLOAT&&(Z=t.R32F),H===t.HALF_FLOAT&&(Z=t.R16F),H===t.UNSIGNED_BYTE&&(Z=t.R8)),x===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.R8UI),H===t.UNSIGNED_SHORT&&(Z=t.R16UI),H===t.UNSIGNED_INT&&(Z=t.R32UI),H===t.BYTE&&(Z=t.R8I),H===t.SHORT&&(Z=t.R16I),H===t.INT&&(Z=t.R32I)),x===t.RG&&(H===t.FLOAT&&(Z=t.RG32F),H===t.HALF_FLOAT&&(Z=t.RG16F),H===t.UNSIGNED_BYTE&&(Z=t.RG8)),x===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RG8UI),H===t.UNSIGNED_SHORT&&(Z=t.RG16UI),H===t.UNSIGNED_INT&&(Z=t.RG32UI),H===t.BYTE&&(Z=t.RG8I),H===t.SHORT&&(Z=t.RG16I),H===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),H===t.UNSIGNED_INT&&(Z=t.RGB32UI),H===t.BYTE&&(Z=t.RGB8I),H===t.SHORT&&(Z=t.RGB16I),H===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),H===t.UNSIGNED_INT&&(Z=t.RGBA32UI),H===t.BYTE&&(Z=t.RGBA8I),H===t.SHORT&&(Z=t.RGBA16I),H===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),x===t.RGBA){const ye=ee?pl:Qe.getTransfer(j);H===t.FLOAT&&(Z=t.RGBA32F),H===t.HALF_FLOAT&&(Z=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Z=ye===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(b,x){let H;return b?x===null||x===io||x===Ko?H=t.DEPTH24_STENCIL8:x===Ci?H=t.DEPTH32F_STENCIL8:x===Vs&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===io||x===Ko?H=t.DEPTH_COMPONENT24:x===Ci?H=t.DEPTH_COMPONENT32F:x===Vs&&(H=t.DEPTH_COMPONENT16),H}function D(b,x){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==li?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),I(x),x.isVideoTexture&&d.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),E(x)}function I(b){const x=i.get(b);if(x.__webglInit===void 0)return;const H=b.source,j=f.get(H);if(j){const ee=j[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(b),Object.keys(j).length===0&&f.delete(H)}i.remove(b)}function T(b){const x=i.get(b);t.deleteTexture(x.__webglTexture);const H=b.source,j=f.get(H);delete j[x.__cacheKey],a.memory.textures--}function E(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ee=0;ee<x.__webglFramebuffer[j].length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[j][ee]);else t.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)t.deleteFramebuffer(x.__webglFramebuffer[j]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=b.textures;for(let j=0,ee=H.length;j<ee;j++){const Z=i.get(H[j]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(H[j])}i.remove(b)}let O=0;function k(){O=0}function B(){const b=O;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),O+=1,b}function Y(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){const H=i.get(b);if(b.isVideoTexture&&Ce(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,b,x);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+x)}function K(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){$(H,b,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+x)}function J(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){$(H,b,x);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+x)}function z(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ie(H,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+x)}const oe={[Uc]:t.REPEAT,[Nr]:t.CLAMP_TO_EDGE,[Fc]:t.MIRRORED_REPEAT},ae={[gn]:t.NEAREST,[o0]:t.NEAREST_MIPMAP_NEAREST,[ia]:t.NEAREST_MIPMAP_LINEAR,[li]:t.LINEAR,[Al]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},ve={[c0]:t.NEVER,[m0]:t.ALWAYS,[u0]:t.LESS,[ah]:t.LEQUAL,[f0]:t.EQUAL,[p0]:t.GEQUAL,[d0]:t.GREATER,[h0]:t.NOTEQUAL};function Fe(b,x){if(x.type===Ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===li||x.magFilter===Al||x.magFilter===ia||x.magFilter===Pr||x.minFilter===li||x.minFilter===Al||x.minFilter===ia||x.minFilter===Pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,oe[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,oe[x.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,oe[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ae[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==ia&&x.minFilter!==Pr||x.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function tt(b,x){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const j=x.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const Z=Y(x);if(Z!==b.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[Z].usedTimes++;const ye=ee[b.__cacheKey];ye!==void 0&&(ee[b.__cacheKey].usedTimes--,ye.usedTimes===0&&T(x)),b.__cacheKey=Z,b.__webglTexture=ee[Z].texture}return H}function $(b,x,H){let j=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=t.TEXTURE_3D);const ee=tt(b,x),Z=x.source;n.bindTexture(j,b.__webglTexture,t.TEXTURE0+H);const ye=i.get(Z);if(Z.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const ue=Qe.getPrimaries(Qe.workingColorSpace),me=x.colorSpace===Ji?null:Qe.getPrimaries(x.colorSpace),je=x.colorSpace===Ji||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let te=v(x.image,!1,r.maxTextureSize);te=dt(x,te);const _e=o.convert(x.format,x.colorSpace),Ie=o.convert(x.type);let Le=M(x.internalFormat,_e,Ie,x.colorSpace,x.isVideoTexture);Fe(j,x);let ge;const $e=x.mipmaps,We=x.isVideoTexture!==!0,ut=ye.__version===void 0||ee===!0,N=Z.dataReady,le=D(x,te);if(x.isDepthTexture)Le=S(x.format===qo,x.type),ut&&(We?n.texStorage2D(t.TEXTURE_2D,1,Le,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Le,te.width,te.height,0,_e,Ie,null));else if(x.isDataTexture)if($e.length>0){We&&ut&&n.texStorage2D(t.TEXTURE_2D,le,Le,$e[0].width,$e[0].height);for(let X=0,Q=$e.length;X<Q;X++)ge=$e[X],We?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,_e,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,X,Le,ge.width,ge.height,0,_e,Ie,ge.data);x.generateMipmaps=!1}else We?(ut&&n.texStorage2D(t.TEXTURE_2D,le,Le,te.width,te.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,_e,Ie,te.data)):n.texImage2D(t.TEXTURE_2D,0,Le,te.width,te.height,0,_e,Ie,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Le,$e[0].width,$e[0].height,te.depth);for(let X=0,Q=$e.length;X<Q;X++)if(ge=$e[X],x.format!==Wn)if(_e!==null)if(We){if(N)if(x.layerUpdates.size>0){const he=od(ge.width,ge.height,x.format,x.type);for(const fe of x.layerUpdates){const Ge=ge.data.subarray(fe*he/ge.data.BYTES_PER_ELEMENT,(fe+1)*he/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,fe,ge.width,ge.height,1,_e,Ge)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,te.depth,_e,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Le,ge.width,ge.height,te.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,te.depth,_e,Ie,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Le,ge.width,ge.height,te.depth,0,_e,Ie,ge.data)}else{We&&ut&&n.texStorage2D(t.TEXTURE_2D,le,Le,$e[0].width,$e[0].height);for(let X=0,Q=$e.length;X<Q;X++)ge=$e[X],x.format!==Wn?_e!==null?We?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,_e,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,_e,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,X,Le,ge.width,ge.height,0,_e,Ie,ge.data)}else if(x.isDataArrayTexture)if(We){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Le,te.width,te.height,te.depth),N)if(x.layerUpdates.size>0){const X=od(te.width,te.height,x.format,x.type);for(const Q of x.layerUpdates){const he=te.data.subarray(Q*X/te.data.BYTES_PER_ELEMENT,(Q+1)*X/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,_e,Ie,he)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,_e,Ie,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,_e,Ie,te.data);else if(x.isData3DTexture)We?(ut&&n.texStorage3D(t.TEXTURE_3D,le,Le,te.width,te.height,te.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,_e,Ie,te.data)):n.texImage3D(t.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,_e,Ie,te.data);else if(x.isFramebufferTexture){if(ut)if(We)n.texStorage2D(t.TEXTURE_2D,le,Le,te.width,te.height);else{let X=te.width,Q=te.height;for(let he=0;he<le;he++)n.texImage2D(t.TEXTURE_2D,he,Le,X,Q,0,_e,Ie,null),X>>=1,Q>>=1}}else if($e.length>0){if(We&&ut){const X=Oe($e[0]);n.texStorage2D(t.TEXTURE_2D,le,Le,X.width,X.height)}for(let X=0,Q=$e.length;X<Q;X++)ge=$e[X],We?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e,Ie,ge):n.texImage2D(t.TEXTURE_2D,X,Le,_e,Ie,ge);x.generateMipmaps=!1}else if(We){if(ut){const X=Oe(te);n.texStorage2D(t.TEXTURE_2D,le,Le,X.width,X.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Ie,te)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,Ie,te);_(x)&&m(j),ye.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ie(b,x,H){if(x.image.length!==6)return;const j=tt(b,x),ee=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+H);const Z=i.get(ee);if(ee.version!==Z.__version||j===!0){n.activeTexture(t.TEXTURE0+H);const ye=Qe.getPrimaries(Qe.workingColorSpace),ue=x.colorSpace===Ji?null:Qe.getPrimaries(x.colorSpace),me=x.colorSpace===Ji||ye===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!je&&!te?_e[Q]=v(x.image[Q],!0,r.maxCubemapSize):_e[Q]=te?x.image[Q].image:x.image[Q],_e[Q]=dt(x,_e[Q]);const Ie=_e[0],Le=o.convert(x.format,x.colorSpace),ge=o.convert(x.type),$e=M(x.internalFormat,Le,ge,x.colorSpace),We=x.isVideoTexture!==!0,ut=Z.__version===void 0||j===!0,N=ee.dataReady;let le=D(x,Ie);Fe(t.TEXTURE_CUBE_MAP,x);let X;if(je){We&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,$e,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){X=_e[Q].mipmaps;for(let he=0;he<X.length;he++){const fe=X[he];x.format!==Wn?Le!==null?We?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,fe.width,fe.height,Le,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,$e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,fe.width,fe.height,Le,ge,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,$e,fe.width,fe.height,0,Le,ge,fe.data)}}}else{if(X=x.mipmaps,We&&ut){X.length>0&&le++;const Q=Oe(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Le,ge,_e[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,_e[Q].width,_e[Q].height,0,Le,ge,_e[Q].data);for(let he=0;he<X.length;he++){const Ge=X[he].image[Q].image;We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Ge.width,Ge.height,Le,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,$e,Ge.width,Ge.height,0,Le,ge,Ge.data)}}else{We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,ge,_e[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Le,ge,_e[Q]);for(let he=0;he<X.length;he++){const fe=X[he];We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Le,ge,fe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,$e,Le,ge,fe.image[Q])}}}_(x)&&m(t.TEXTURE_CUBE_MAP),Z.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Me(b,x,H,j,ee,Z){const ye=o.convert(H.format,H.colorSpace),ue=o.convert(H.type),me=M(H.internalFormat,ye,ue,H.colorSpace),je=i.get(x),te=i.get(H);if(te.__renderTarget=x,!je.__hasExternalTextures){const _e=Math.max(1,x.width>>Z),Ie=Math.max(1,x.height>>Z);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Z,me,_e,Ie,x.depth,0,ye,ue,null):n.texImage2D(ee,Z,me,_e,Ie,0,ye,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ye(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,ee,te.__webglTexture,0,qe(x)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,ee,te.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(b,x,H){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer){const j=x.depthTexture,ee=j&&j.isDepthTexture?j.type:null,Z=S(x.stencilBuffer,ee),ye=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=qe(x);Ye(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Z,x.width,x.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,b)}else{const j=x.textures;for(let ee=0;ee<j.length;ee++){const Z=j[ee],ye=o.convert(Z.format,Z.colorSpace),ue=o.convert(Z.type),me=M(Z.internalFormat,ye,ue,Z.colorSpace),je=qe(x);H&&Ye(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,me,x.width,x.height):Ye(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,me,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,me,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const ee=j.__webglTexture,Z=qe(x);if(x.depthTexture.format===Go)Ye(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(x.depthTexture.format===qo)Ye(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Be(b){const x=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=j}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(x.__webglFramebuffer,b)}else if(H){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=t.createRenderbuffer(),ce(x.__webglDepthbuffer[j],b,!1);else{const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ce(x.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(b,x,H){const j=i.get(b);x!==void 0&&Me(j.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Be(b)}function vt(b){const x=b.texture,H=i.get(b),j=i.get(x);b.addEventListener("dispose",w);const ee=b.textures,Z=b.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=x.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let me=0;me<x.mipmaps.length;me++)H.__webglFramebuffer[ue][me]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ye)for(let ue=0,me=ee.length;ue<me;ue++){const je=i.get(ee[ue]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&Ye(b)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const me=ee[ue];H.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const je=o.convert(me.format,me.colorSpace),te=o.convert(me.type),_e=M(me.internalFormat,je,te,me.colorSpace,b.isXRRenderTarget===!0),Ie=qe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,_e,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(H.__webglFramebuffer[ue][me],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else Me(H.__webglFramebuffer[ue],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(x)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ue=0,me=ee.length;ue<me;ue++){const je=ee[ue],te=i.get(je);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),Fe(t.TEXTURE_2D,je),Me(H.__webglFramebuffer,b,je,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),_(je)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,j.__webglTexture),Fe(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(H.__webglFramebuffer[me],b,x,t.COLOR_ATTACHMENT0,ue,me);else Me(H.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,ue,0);_(x)&&m(ue),n.unbindTexture()}b.depthBuffer&&Be(b)}function Ze(b){const x=b.textures;for(let H=0,j=x.length;H<j;H++){const ee=x[H];if(_(ee)){const Z=A(b),ye=i.get(ee).__webglTexture;n.bindTexture(Z,ye),m(Z),n.unbindTexture()}}}const yt=[],U=[];function Sn(b){if(b.samples>0){if(Ye(b)===!1){const x=b.textures,H=b.width,j=b.height;let ee=t.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(b),ue=x.length>1;if(ue)for(let me=0;me<x.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<x.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const je=i.get(x[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,H,j,0,0,H,j,ee,t.NEAREST),c===!0&&(yt.length=0,U.length=0,yt.push(t.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(yt.push(Z),U.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<x.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const je=i.get(x[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function qe(b){return Math.min(r.maxSamples,b.samples)}function Ye(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ce(b){const x=a.render.frame;d.get(b)!==x&&(d.set(b,x),b.update())}function dt(b,x){const H=b.colorSpace,j=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==Jo&&H!==Ji&&(Qe.getTransfer(H)===ot?(j!==Wn||ee!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=ze,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ye}function Px(t,e){function n(i,r=Ji){let o;const a=Qe.getTransfer(r);if(i===Li)return t.UNSIGNED_BYTE;if(i===Cu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jd)return t.BYTE;if(i===Qd)return t.SHORT;if(i===Vs)return t.UNSIGNED_SHORT;if(i===Ou)return t.INT;if(i===io)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===$s)return t.HALF_FLOAT;if(i===eh)return t.ALPHA;if(i===th)return t.RGB;if(i===Wn)return t.RGBA;if(i===nh)return t.LUMINANCE;if(i===ih)return t.LUMINANCE_ALPHA;if(i===Go)return t.DEPTH_COMPONENT;if(i===qo)return t.DEPTH_STENCIL;if(i===rh)return t.RED;if(i===Du)return t.RED_INTEGER;if(i===oh)return t.RG;if(i===Nu)return t.RG_INTEGER;if(i===Pu)return t.RGBA_INTEGER;if(i===Ba||i===Ga||i===Ha||i===ka)if(a===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ha)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===Gc||i===Hc||i===kc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Bc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wc||i===Vc||i===zc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Wc||i===Vc)return a===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===zc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xc||i===Kc||i===qc||i===Yc||i===$c||i===Zc||i===jc||i===Qc||i===Jc||i===eu||i===tu||i===nu||i===iu||i===ru)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Xc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$c)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jc)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===iu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ru)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===ou||i===su)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Wa)return a===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sh||i===au||i===lu||i===cu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Wa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===au)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Lx extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xe extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const _=n.getJointPose(v,i),m=this._getHandJoint(u,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Fx=`
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

}`;class Gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new lr({vertexShader:Fx,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new F(new ml(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends es{constructor(e,n){super();const i=this;let r=null,o=1,a=null,l="local-floor",c=1,u=null,d=null,h=null,f=null,p=null,g=null;const v=new Gx,_=n.getContextAttributes();let m=null,A=null;const M=[],S=[],D=new Ke;let R=null;const w=new tn;w.viewport=new st;const I=new tn;I.viewport=new st;const T=[w,I],E=new Lx;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=M[$];return ie===void 0&&(ie=new Ql,M[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=M[$];return ie===void 0&&(ie=new Ql,M[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=M[$];return ie===void 0&&(ie=new Ql,M[$]=ie),ie.getHandSpace()};function B($){const ie=S.indexOf($.inputSource);if(ie===-1)return;const Me=M[ie];Me!==void 0&&(Me.update($.inputSource,$.frame,u||a),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let $=0;$<M.length;$++){const ie=S[$];ie!==null&&(S[$]=null,M[$].disconnect(ie))}O=null,k=null,v.reset(),e.setRenderTarget(m),p=null,f=null,h=null,r=null,A=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ro(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ie=null,Me=null,ce=null;_.depth&&(ce=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=_.stencil?qo:Go,Me=_.stencil?Ko:io);const Ne={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:o};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new ro(f.textureWidth,f.textureHeight,{format:Wn,type:Li,depthTexture:new Sh(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q($){for(let ie=0;ie<$.removed.length;ie++){const Me=$.removed[ie],ce=S.indexOf(Me);ce>=0&&(S[ce]=null,M[ce].disconnect(Me))}for(let ie=0;ie<$.added.length;ie++){const Me=$.added[ie];let ce=S.indexOf(Me);if(ce===-1){for(let Be=0;Be<M.length;Be++)if(Be>=S.length){S.push(Me),ce=Be;break}else if(S[Be]===null){S[Be]=Me,ce=Be;break}if(ce===-1)break}const Ne=M[ce];Ne&&Ne.connect(Me)}}const K=new C,J=new C;function z($,ie,Me){K.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const ce=K.distanceTo(J),Ne=ie.projectionMatrix.elements,Be=Me.projectionMatrix.elements,ze=Ne[14]/(Ne[10]-1),vt=Ne[14]/(Ne[10]+1),Ze=(Ne[9]+1)/Ne[5],yt=(Ne[9]-1)/Ne[5],U=(Ne[8]-1)/Ne[0],Sn=(Be[8]+1)/Be[0],qe=ze*U,Ye=ze*Sn,Ce=ce/(-U+Sn),dt=Ce*-U;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(dt),$.translateZ(Ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Oe=ze+Ce,b=vt+Ce,x=qe-dt,H=Ye+(ce-dt),j=Ze*vt/b*Oe,ee=yt*vt/b*Oe;$.projectionMatrix.makePerspective(x,H,j,ee,Oe,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,Me=$.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),E.near=I.near=w.near=ie,E.far=I.far=w.far=Me,(O!==E.near||k!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,k=E.far),w.layers.mask=$.layers.mask|2,I.layers.mask=$.layers.mask|4,E.layers.mask=w.layers.mask|I.layers.mask;const ce=$.parent,Ne=E.cameras;oe(E,ce);for(let Be=0;Be<Ne.length;Be++)oe(Ne[Be],ce);Ne.length===2?z(E,w,I):E.projectionMatrix.copy(w.projectionMatrix),ae($,E,ce)};function ae($,ie,Me){Me===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=zs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let ve=null;function Fe($,ie){if(d=ie.getViewerPose(u||a),g=ie,d!==null){const Me=d.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ce=!1;Me.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let Be=0;Be<Me.length;Be++){const ze=Me[Be];let vt=null;if(p!==null)vt=p.getViewport(ze);else{const yt=h.getViewSubImage(f,ze);vt=yt.viewport,Be===0&&(e.setRenderTargetTextures(A,yt.colorTexture,f.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(A))}let Ze=T[Be];Ze===void 0&&(Ze=new tn,Ze.layers.enable(Be),Ze.viewport=new st,T[Be]=Ze),Ze.matrix.fromArray(ze.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ze.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(vt.x,vt.y,vt.width,vt.height),Be===0&&(E.matrix.copy(Ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push(Ze)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Be=h.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,r.renderState)}}for(let Me=0;Me<M.length;Me++){const ce=S[Me],Ne=M[Me];ce!==null&&Ne!==void 0&&Ne.update(ce,ie,u||a)}ve&&ve($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const tt=new vh;tt.setAnimationLoop(Fe),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const gr=new Xn,kx=new _t;function Wx(t,e){function n(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,mh(t)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,A,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(_,m):m.isMeshToonMaterial?(o(_,m),h(_,m)):m.isMeshPhongMaterial?(o(_,m),d(_,m)):m.isMeshStandardMaterial?(o(_,m),f(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(o(_,m),g(_,m)):m.isMeshDepthMaterial?o(_,m):m.isMeshDistanceMaterial?(o(_,m),v(_,m)):m.isMeshNormalMaterial?o(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&l(_,m)):m.isPointsMaterial?c(_,m,A,M):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,n(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===sn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,n(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===sn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,n(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,n(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const A=e.get(m),M=A.envMap,S=A.envMapRotation;M&&(_.envMap.value=M,gr.copy(S),gr.x*=-1,gr.y*=-1,gr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),_.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(gr)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform))}function l(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,A,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*A,_.scale.value=M*.5,m.map&&(_.map.value=m.map,n(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function d(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function h(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,A){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const A=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vx(t,e,n,i){let r={},o={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,M){const S=M.program;i.uniformBlockBinding(A,S)}function u(A,M){let S=r[A.id];S===void 0&&(g(A),S=d(A),r[A.id]=S,A.addEventListener("dispose",_));const D=M.program;i.updateUBOMapping(A,D);const R=e.render.frame;o[A.id]!==R&&(f(A),o[A.id]=R)}function d(A){const M=h();A.__bindingPointIndex=M;const S=t.createBuffer(),D=A.__size,R=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,D,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,S),S}function h(){for(let A=0;A<l;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const M=r[A.id],S=A.uniforms,D=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let R=0,w=S.length;R<w;R++){const I=Array.isArray(S[R])?S[R]:[S[R]];for(let T=0,E=I.length;T<E;T++){const O=I[T];if(p(O,R,T,D)===!0){const k=O.__offset,B=Array.isArray(O.value)?O.value:[O.value];let Y=0;for(let q=0;q<B.length;q++){const K=B[q],J=v(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,k+Y,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):(K.toArray(O.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,M,S,D){const R=A.value,w=M+"_"+S;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const I=D[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return D[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(A){const M=A.uniforms;let S=0;const D=16;for(let w=0,I=M.length;w<I;w++){const T=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,O=T.length;E<O;E++){const k=T[E],B=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,q=B.length;Y<q;Y++){const K=B[Y],J=v(K),z=S%D,oe=z%J.boundary,ae=z+oe;S+=oe,ae!==0&&D-ae<J.storage&&(S+=D-ae),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=J.storage}}}const R=S%D;return R>0&&(S+=D-R),A.__size=S,A.__cache={},this}function v(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function _(A){const M=A.target;M.removeEventListener("dispose",_);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function m(){for(const A in r)t.deleteBuffer(r[A]);a=[],r={},o={}}return{bind:c,update:u,dispose:m}}class Ah{constructor(e={}){const{canvas:n=D0(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const A=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=nr,this.toneMappingExposure=1;const S=this;let D=!1,R=0,w=0,I=null,T=-1,E=null;const O=new st,k=new st;let B=null;const Y=new we(0);let q=0,K=n.width,J=n.height,z=1,oe=null,ae=null;const ve=new st(0,0,K,J),Fe=new st(0,0,K,J);let tt=!1;const $=new Bu;let ie=!1,Me=!1;const ce=new _t,Ne=new _t,Be=new C,ze=new st,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function yt(){return I===null?z:1}let U=i;function Sn(y,P){return n.getContext(y,P)}try{const y={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ru}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",fe,!1),U===null){const P="webgl2";if(U=Sn(P,y),U===null)throw Sn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let qe,Ye,Ce,dt,Oe,b,x,H,j,ee,Z,ye,ue,me,je,te,_e,Ie,Le,ge,$e,We,ut,N;function le(){qe=new $g(U),qe.init(),We=new Px(U,qe),Ye=new Vg(U,qe,e,We),Ce=new Ix(U,qe),Ye.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),dt=new Qg(U),Oe=new _x,b=new Nx(U,qe,Ce,Oe,Ye,We,dt),x=new Xg(S),H=new Yg(S),j=new om(U),ut=new kg(U,j),ee=new Zg(U,j,dt,ut),Z=new ev(U,ee,j,dt),Le=new Jg(U,Ye,b),te=new zg(Oe),ye=new mx(S,x,H,qe,Ye,ut,te),ue=new Wx(S,Oe),me=new vx,je=new Tx(qe),Ie=new Hg(S,x,H,Ce,Z,p,c),_e=new Ox(S,Z,Ye),N=new Vx(U,dt,Ye,Ce),ge=new Wg(U,qe,dt),$e=new jg(U,qe,dt),dt.programs=ye.programs,S.capabilities=Ye,S.extensions=qe,S.properties=Oe,S.renderLists=me,S.shadowMap=_e,S.state=Ce,S.info=dt}le();const X=new Hx(S,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(K,J,!1))},this.getSize=function(y){return y.set(K,J)},this.setSize=function(y,P,W=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,J=P,n.width=Math.floor(y*z),n.height=Math.floor(P*z),W===!0&&(n.style.width=y+"px",n.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(K*z,J*z).floor()},this.setDrawingBufferSize=function(y,P,W){K=y,J=P,z=W,n.width=Math.floor(y*W),n.height=Math.floor(P*W),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(O)},this.getViewport=function(y){return y.copy(ve)},this.setViewport=function(y,P,W,V){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,P,W,V),Ce.viewport(O.copy(ve).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Fe)},this.setScissor=function(y,P,W,V){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,P,W,V),Ce.scissor(k.copy(Fe).multiplyScalar(z).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(y){Ce.setScissorTest(tt=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(y=!0,P=!0,W=!0){let V=0;if(y){let L=!1;if(I!==null){const ne=I.texture.format;L=ne===Pu||ne===Nu||ne===Du}if(L){const ne=I.texture.type,de=ne===Li||ne===io||ne===Vs||ne===Ko||ne===Cu||ne===Iu,xe=Ie.getClearColor(),Se=Ie.getClearAlpha(),Ue=xe.r,He=xe.g,Ee=xe.b;de?(g[0]=Ue,g[1]=He,g[2]=Ee,g[3]=Se,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Ue,v[1]=He,v[2]=Ee,v[3]=Se,U.clearBufferiv(U.COLOR,0,v))}else V|=U.COLOR_BUFFER_BIT}P&&(V|=U.DEPTH_BUFFER_BIT),W&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),je.dispose(),Oe.dispose(),x.dispose(),H.dispose(),Z.dispose(),ut.dispose(),N.dispose(),ye.dispose(),X.dispose(),X.removeEventListener("sessionstart",Qu),X.removeEventListener("sessionend",Ju),fr.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=dt.autoReset,P=_e.enabled,W=_e.autoUpdate,V=_e.needsUpdate,L=_e.type;le(),dt.autoReset=y,_e.enabled=P,_e.autoUpdate=W,_e.needsUpdate=V,_e.type=L}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ge(y){const P=y.target;P.removeEventListener("dispose",Ge),Et(P)}function Et(y){Gt(y),Oe.remove(y)}function Gt(y){const P=Oe.get(y).programs;P!==void 0&&(P.forEach(function(W){ye.releaseProgram(W)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,W,V,L,ne){P===null&&(P=vt);const de=L.isMesh&&L.matrixWorld.determinant()<0,xe=Ap(y,P,W,V,L);Ce.setMaterial(V,de);let Se=W.index,Ue=1;if(V.wireframe===!0){if(Se=ee.getWireframeAttribute(W),Se===void 0)return;Ue=2}const He=W.drawRange,Ee=W.attributes.position;let et=He.start*Ue,ft=(He.start+He.count)*Ue;ne!==null&&(et=Math.max(et,ne.start*Ue),ft=Math.min(ft,(ne.start+ne.count)*Ue)),Se!==null?(et=Math.max(et,0),ft=Math.min(ft,Se.count)):Ee!=null&&(et=Math.max(et,0),ft=Math.min(ft,Ee.count));const ht=ft-et;if(ht<0||ht===1/0)return;ut.setup(L,V,xe,W,Se);let jt,nt=ge;if(Se!==null&&(jt=j.get(Se),nt=$e,nt.setIndex(jt)),L.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*yt()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(L.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*yt()),L.isLineSegments?nt.setMode(U.LINES):L.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else L.isPoints?nt.setMode(U.POINTS):L.isSprite&&nt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)nt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))nt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Te=L._multiDrawStarts,_i=L._multiDrawCounts,it=L._multiDrawCount,bn=Se?j.get(Se).bytesPerElement:1,ao=Oe.get(V).currentProgram.getUniforms();for(let ln=0;ln<it;ln++)ao.setValue(U,"_gl_DrawID",ln),nt.render(Te[ln]/bn,_i[ln])}else if(L.isInstancedMesh)nt.renderInstances(et,ht,L.count);else if(W.isInstancedBufferGeometry){const Te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_i=Math.min(W.instanceCount,Te);nt.renderInstances(et,ht,_i)}else nt.render(et,ht)};function rt(y,P,W){y.transparent===!0&&y.side===Bn&&y.forceSinglePass===!1?(y.side=sn,y.needsUpdate=!0,na(y,P,W),y.side=ar,y.needsUpdate=!0,na(y,P,W),y.side=Bn):na(y,P,W)}this.compile=function(y,P,W=null){W===null&&(W=y),m=je.get(W),m.init(P),M.push(m),W.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),y!==W&&y.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights();const V=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ne=L.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const xe=ne[de];rt(xe,W,L),V.add(xe)}else rt(ne,W,L),V.add(ne)}),M.pop(),m=null,V},this.compileAsync=function(y,P,W=null){const V=this.compile(y,P,W);return new Promise(L=>{function ne(){if(V.forEach(function(de){Oe.get(de).currentProgram.isReady()&&V.delete(de)}),V.size===0){L(y);return}setTimeout(ne,10)}qe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let An=null;function mi(y){An&&An(y)}function Qu(){fr.stop()}function Ju(){fr.start()}const fr=new vh;fr.setAnimationLoop(mi),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(y){An=y,X.setAnimationLoop(y),y===null?fr.stop():fr.start()},X.addEventListener("sessionstart",Qu),X.addEventListener("sessionend",Ju),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(P),P=X.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,P,I),m=je.get(y,M.length),m.init(P),M.push(m),Ne.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),$.setFromProjectionMatrix(Ne),Me=this.localClippingEnabled,ie=te.init(this.clippingPlanes,Me),_=me.get(y,A.length),_.init(),A.push(_),X.enabled===!0&&X.isPresenting===!0){const ne=S.xr.getDepthSensingMesh();ne!==null&&Tl(ne,P,-1/0,S.sortObjects)}Tl(y,P,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(oe,ae),Ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ze&&Ie.addToRenderList(_,y),this.info.render.frame++,ie===!0&&te.beginShadows();const W=m.state.shadowsArray;_e.render(W,y,P),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,L=_.transmissive;if(m.setupLights(),P.isArrayCamera){const ne=P.cameras;if(L.length>0)for(let de=0,xe=ne.length;de<xe;de++){const Se=ne[de];tf(V,L,y,Se)}Ze&&Ie.render(y);for(let de=0,xe=ne.length;de<xe;de++){const Se=ne[de];ef(_,y,Se,Se.viewport)}}else L.length>0&&tf(V,L,y,P),Ze&&Ie.render(y),ef(_,y,P);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(S,y,P),ut.resetDefaultState(),T=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],ie===!0&&te.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?_=A[A.length-1]:_=null};function Tl(y,P,W,V){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){V&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ne);const de=Z.update(y),xe=y.material;xe.visible&&_.push(y,de,xe,W,ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const de=Z.update(y),xe=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ze.copy(de.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(Ne)),Array.isArray(xe)){const Se=de.groups;for(let Ue=0,He=Se.length;Ue<He;Ue++){const Ee=Se[Ue],et=xe[Ee.materialIndex];et&&et.visible&&_.push(y,de,et,W,ze.z,Ee)}}else xe.visible&&_.push(y,de,xe,W,ze.z,null)}}const ne=y.children;for(let de=0,xe=ne.length;de<xe;de++)Tl(ne[de],P,W,V)}function ef(y,P,W,V){const L=y.opaque,ne=y.transmissive,de=y.transparent;m.setupLightsView(W),ie===!0&&te.setGlobalState(S.clippingPlanes,W),V&&Ce.viewport(O.copy(V)),L.length>0&&ta(L,P,W),ne.length>0&&ta(ne,P,W),de.length>0&&ta(de,P,W),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function tf(y,P,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new ro(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?$s:Li,minFilter:Pr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ne=m.state.transmissionRenderTarget[V.id],de=V.viewport||O;ne.setSize(de.z,de.w);const xe=S.getRenderTarget();S.setRenderTarget(ne),S.getClearColor(Y),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&Ie.render(W);const Se=S.toneMapping;S.toneMapping=nr;const Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),ie===!0&&te.setGlobalState(S.clippingPlanes,V),ta(y,W,V),b.updateMultisampleRenderTarget(ne),b.updateRenderTargetMipmap(ne),qe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ee=0,et=P.length;Ee<et;Ee++){const ft=P[Ee],ht=ft.object,jt=ft.geometry,nt=ft.material,Te=ft.group;if(nt.side===Bn&&ht.layers.test(V.layers)){const _i=nt.side;nt.side=sn,nt.needsUpdate=!0,nf(ht,W,V,jt,nt,Te),nt.side=_i,nt.needsUpdate=!0,He=!0}}He===!0&&(b.updateMultisampleRenderTarget(ne),b.updateRenderTargetMipmap(ne))}S.setRenderTarget(xe),S.setClearColor(Y,q),Ue!==void 0&&(V.viewport=Ue),S.toneMapping=Se}function ta(y,P,W){const V=P.isScene===!0?P.overrideMaterial:null;for(let L=0,ne=y.length;L<ne;L++){const de=y[L],xe=de.object,Se=de.geometry,Ue=V===null?de.material:V,He=de.group;xe.layers.test(W.layers)&&nf(xe,P,W,Se,Ue,He)}}function nf(y,P,W,V,L,ne){y.onBeforeRender(S,P,W,V,L,ne),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(S,P,W,V,y,ne),L.transparent===!0&&L.side===Bn&&L.forceSinglePass===!1?(L.side=sn,L.needsUpdate=!0,S.renderBufferDirect(W,P,V,L,y,ne),L.side=ar,L.needsUpdate=!0,S.renderBufferDirect(W,P,V,L,y,ne),L.side=Bn):S.renderBufferDirect(W,P,V,L,y,ne),y.onAfterRender(S,P,W,V,L,ne)}function na(y,P,W){P.isScene!==!0&&(P=vt);const V=Oe.get(y),L=m.state.lights,ne=m.state.shadowsArray,de=L.state.version,xe=ye.getParameters(y,L.state,ne,P,W),Se=ye.getProgramCacheKey(xe);let Ue=V.programs;V.environment=y.isMeshStandardMaterial?P.environment:null,V.fog=P.fog,V.envMap=(y.isMeshStandardMaterial?H:x).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",Ge),Ue=new Map,V.programs=Ue);let He=Ue.get(Se);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===de)return of(y,xe),He}else xe.uniforms=ye.getUniforms(y),y.onBeforeCompile(xe,S),He=ye.acquireProgram(xe,Se),Ue.set(Se,He),V.uniforms=xe.uniforms;const Ee=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=te.uniform),of(y,xe),V.needsLights=Rp(y),V.lightsStateVersion=de,V.needsLights&&(Ee.ambientLightColor.value=L.state.ambient,Ee.lightProbe.value=L.state.probe,Ee.directionalLights.value=L.state.directional,Ee.directionalLightShadows.value=L.state.directionalShadow,Ee.spotLights.value=L.state.spot,Ee.spotLightShadows.value=L.state.spotShadow,Ee.rectAreaLights.value=L.state.rectArea,Ee.ltc_1.value=L.state.rectAreaLTC1,Ee.ltc_2.value=L.state.rectAreaLTC2,Ee.pointLights.value=L.state.point,Ee.pointLightShadows.value=L.state.pointShadow,Ee.hemisphereLights.value=L.state.hemi,Ee.directionalShadowMap.value=L.state.directionalShadowMap,Ee.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ee.spotShadowMap.value=L.state.spotShadowMap,Ee.spotLightMatrix.value=L.state.spotLightMatrix,Ee.spotLightMap.value=L.state.spotLightMap,Ee.pointShadowMap.value=L.state.pointShadowMap,Ee.pointShadowMatrix.value=L.state.pointShadowMatrix),V.currentProgram=He,V.uniformsList=null,He}function rf(y){if(y.uniformsList===null){const P=y.currentProgram.getUniforms();y.uniformsList=za.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function of(y,P){const W=Oe.get(y);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function Ap(y,P,W,V,L){P.isScene!==!0&&(P=vt),b.resetTextureUnits();const ne=P.fog,de=V.isMeshStandardMaterial?P.environment:null,xe=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jo,Se=(V.isMeshStandardMaterial?H:x).get(V.envMap||de),Ue=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color;let ht=nr;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ht=S.toneMapping);const jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nt=jt!==void 0?jt.length:0,Te=Oe.get(V),_i=m.state.lights;if(ie===!0&&(Me===!0||y!==E)){const En=y===E&&V.id===T;te.setState(V,y,En)}let it=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==_i.state.version||Te.outputColorSpace!==xe||L.isBatchedMesh&&Te.batching===!1||!L.isBatchedMesh&&Te.batching===!0||L.isBatchedMesh&&Te.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Te.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Te.instancing===!1||!L.isInstancedMesh&&Te.instancing===!0||L.isSkinnedMesh&&Te.skinning===!1||!L.isSkinnedMesh&&Te.skinning===!0||L.isInstancedMesh&&Te.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Te.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Te.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Te.instancingMorph===!1&&L.morphTexture!==null||Te.envMap!==Se||V.fog===!0&&Te.fog!==ne||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==He||Te.morphTargets!==Ee||Te.morphNormals!==et||Te.morphColors!==ft||Te.toneMapping!==ht||Te.morphTargetsCount!==nt)&&(it=!0):(it=!0,Te.__version=V.version);let bn=Te.currentProgram;it===!0&&(bn=na(V,P,L));let ao=!1,ln=!1,ls=!1;const pt=bn.getUniforms(),qn=Te.uniforms;if(Ce.useProgram(bn.program)&&(ao=!0,ln=!0,ls=!0),V.id!==T&&(T=V.id,ln=!0),ao||E!==y){Ce.buffers.depth.getReversed()?(ce.copy(y.projectionMatrix),P0(ce),L0(ce),pt.setValue(U,"projectionMatrix",ce)):pt.setValue(U,"projectionMatrix",y.projectionMatrix),pt.setValue(U,"viewMatrix",y.matrixWorldInverse);const Ui=pt.map.cameraPosition;Ui!==void 0&&Ui.setValue(U,Be.setFromMatrixPosition(y.matrixWorld)),Ye.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,ln=!0,ls=!0)}if(L.isSkinnedMesh){pt.setOptional(U,L,"bindMatrix"),pt.setOptional(U,L,"bindMatrixInverse");const En=L.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),pt.setValue(U,"boneTexture",En.boneTexture,b))}L.isBatchedMesh&&(pt.setOptional(U,L,"batchingTexture"),pt.setValue(U,"batchingTexture",L._matricesTexture,b),pt.setOptional(U,L,"batchingIdTexture"),pt.setValue(U,"batchingIdTexture",L._indirectTexture,b),pt.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&pt.setValue(U,"batchingColorTexture",L._colorsTexture,b));const cs=W.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&Le.update(L,W,bn),(ln||Te.receiveShadow!==L.receiveShadow)&&(Te.receiveShadow=L.receiveShadow,pt.setValue(U,"receiveShadow",L.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(qn.envMap.value=Se,qn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&P.environment!==null&&(qn.envMapIntensity.value=P.environmentIntensity),ln&&(pt.setValue(U,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&bp(qn,ls),ne&&V.fog===!0&&ue.refreshFogUniforms(qn,ne),ue.refreshMaterialUniforms(qn,V,z,J,m.state.transmissionRenderTarget[y.id]),za.upload(U,rf(Te),qn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(za.upload(U,rf(Te),qn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(U,"center",L.center),pt.setValue(U,"modelViewMatrix",L.modelViewMatrix),pt.setValue(U,"normalMatrix",L.normalMatrix),pt.setValue(U,"modelMatrix",L.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const En=V.uniformsGroups;for(let Ui=0,Fi=En.length;Ui<Fi;Ui++){const sf=En[Ui];N.update(sf,bn),N.bind(sf,bn)}}return bn}function bp(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Rp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,P,W){Oe.get(y.texture).__webglTexture=P,Oe.get(y.depthTexture).__webglTexture=W;const V=Oe.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=W===void 0,V.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,P){const W=Oe.get(y);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,W=0){I=y,R=P,w=W;let V=!0,L=null,ne=!1,de=!1;if(y){const Se=Oe.get(y);if(Se.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Se.__hasExternalTextures)b.rebindTextures(y,Oe.get(y.texture).__webglTexture,Oe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ee=y.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Oe.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);const He=Oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[P])?L=He[P][W]:L=He[P],ne=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?L=Oe.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?L=He[W]:L=He,O.copy(y.viewport),k.copy(y.scissor),B=y.scissorTest}else O.copy(ve).multiplyScalar(z).floor(),k.copy(Fe).multiplyScalar(z).floor(),B=tt;if(Ce.bindFramebuffer(U.FRAMEBUFFER,L)&&V&&Ce.drawBuffers(y,L),Ce.viewport(O),Ce.scissor(k),Ce.setScissorTest(B),ne){const Se=Oe.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,Se.__webglTexture,W)}else if(de){const Se=Oe.get(y.texture),Ue=P||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,W||0,Ue)}T=-1},this.readRenderTargetPixels=function(y,P,W,V,L,ne,de){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){Ce.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Se=y.texture,Ue=Se.format,He=Se.type;if(!Ye.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-V&&W>=0&&W<=y.height-L&&U.readPixels(P,W,V,L,We.convert(Ue),We.convert(He),ne)}finally{const Se=I!==null?Oe.get(I).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(y,P,W,V,L,ne,de){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){const Se=y.texture,Ue=Se.format,He=Se.type;if(!Ye.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=y.width-V&&W>=0&&W<=y.height-L){Ce.bindFramebuffer(U.FRAMEBUFFER,xe);const Ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),U.readPixels(P,W,V,L,We.convert(Ue),We.convert(He),0);const et=I!==null?Oe.get(I).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,et);const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await N0(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne),U.deleteBuffer(Ee),U.deleteSync(ft),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,P=null,W=0){y.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-W),L=Math.floor(y.image.width*V),ne=Math.floor(y.image.height*V),de=P!==null?P.x:0,xe=P!==null?P.y:0;b.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,de,xe,L,ne),Ce.unbindTexture()},this.copyTextureToTexture=function(y,P,W=null,V=null,L=0){y.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],P=arguments[2],L=arguments[3]||0,W=null);let ne,de,xe,Se,Ue,He,Ee,et,ft;const ht=y.isCompressedTexture?y.mipmaps[L]:y.image;W!==null?(ne=W.max.x-W.min.x,de=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Se=W.min.x,Ue=W.min.y,He=W.isBox3?W.min.z:0):(ne=ht.width,de=ht.height,xe=ht.depth||1,Se=0,Ue=0,He=0),V!==null?(Ee=V.x,et=V.y,ft=V.z):(Ee=0,et=0,ft=0);const jt=We.convert(P.format),nt=We.convert(P.type);let Te;P.isData3DTexture?(b.setTexture3D(P,0),Te=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),Te=U.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),Te=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const _i=U.getParameter(U.UNPACK_ROW_LENGTH),it=U.getParameter(U.UNPACK_IMAGE_HEIGHT),bn=U.getParameter(U.UNPACK_SKIP_PIXELS),ao=U.getParameter(U.UNPACK_SKIP_ROWS),ln=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ht.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,He);const ls=y.isDataArrayTexture||y.isData3DTexture,pt=P.isDataArrayTexture||P.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const qn=Oe.get(y),cs=Oe.get(P),En=Oe.get(qn.__renderTarget),Ui=Oe.get(cs.__renderTarget);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,En.__webglFramebuffer),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Fi=0;Fi<xe;Fi++)ls&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(y).__webglTexture,L,He+Fi),y.isDepthTexture?(pt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(P).__webglTexture,L,ft+Fi),U.blitFramebuffer(Se,Ue,ne,de,Ee,et,ne,de,U.DEPTH_BUFFER_BIT,U.NEAREST)):pt?U.copyTexSubImage3D(Te,L,Ee,et,ft+Fi,Se,Ue,ne,de):U.copyTexSubImage2D(Te,L,Ee,et,ft+Fi,Se,Ue,ne,de);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pt?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Te,L,Ee,et,ft,ne,de,xe,jt,nt,ht.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,L,Ee,et,ft,ne,de,xe,jt,ht.data):U.texSubImage3D(Te,L,Ee,et,ft,ne,de,xe,jt,nt,ht):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,Ee,et,ne,de,jt,nt,ht.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,Ee,et,ht.width,ht.height,jt,ht.data):U.texSubImage2D(U.TEXTURE_2D,L,Ee,et,ne,de,jt,nt,ht);U.pixelStorei(U.UNPACK_ROW_LENGTH,_i),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ao),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ln),L===0&&P.generateMipmaps&&U.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(y,P,W=null,V=null,L=0){return y.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,V=arguments[1]||null,y=arguments[2],P=arguments[3],L=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,W,V,L)},this.initRenderTarget=function(y){Oe.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),Ce.unbindTexture()},this.resetState=function(){R=0,w=0,I=null,Ce.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}class Hu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=n,this.far=i}clone(){return new Hu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bh extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Rh extends cr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ja=new C,Qa=new C,sd=new _t,ps=new Fu,Ta=new Qs,Jl=new C,ad=new C;class zx extends Rt{constructor(e=new an,n=new Rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)ja.fromBufferAttribute(n,r-1),Qa.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ja.distanceTo(Qa);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=o,e.ray.intersectsSphere(Ta)===!1)return;sd.copy(r).invert(),ps.copy(e.ray).applyMatrix4(sd);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,_=g-1;v<_;v+=u){const m=d.getX(v),A=d.getX(v+1),M=Aa(this,e,ps,c,m,A);M&&n.push(M)}if(this.isLineLoop){const v=d.getX(g-1),_=d.getX(p),m=Aa(this,e,ps,c,v,_);m&&n.push(m)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,_=g-1;v<_;v+=u){const m=Aa(this,e,ps,c,v,v+1);m&&n.push(m)}if(this.isLineLoop){const v=Aa(this,e,ps,c,g-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Aa(t,e,n,i,r,o){const a=t.geometry.attributes.position;if(ja.fromBufferAttribute(a,r),Qa.fromBufferAttribute(a,o),n.distanceSqToSegment(ja,Qa,Jl,ad)>i)return;Jl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:ad.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const ld=new C,cd=new C;class Xx extends zx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)ld.fromBufferAttribute(n,r),cd.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ld.distanceTo(cd);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wh extends cr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ud=new _t,fu=new Fu,ba=new Qs,Ra=new C;class Kx extends Rt{constructor(e=new an,n=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=o,e.ray.intersectsSphere(ba)===!1)return;ud.copy(r).invert(),fu.copy(e.ray).applyMatrix4(ud);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const _=u.getX(g);Ra.fromBufferAttribute(h,_),fd(Ra,_,c,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Ra.fromBufferAttribute(h,g),fd(Ra,g,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function fd(t,e,n,i,r,o,a){const l=fu.distanceSqToPoint(t);if(l<n){const c=new C;fu.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qx extends Zt{constructor(e,n,i,r,o,a,l,c,u){super(e,n,i,r,o,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ku extends an{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const o=[],a=[];l(r),u(i),d(),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(o.slice(),3)),this.setAttribute("uv",new wt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(A){const M=new C,S=new C,D=new C;for(let R=0;R<n.length;R+=3)p(n[R+0],M),p(n[R+1],S),p(n[R+2],D),c(M,S,D,A)}function c(A,M,S,D){const R=D+1,w=[];for(let I=0;I<=R;I++){w[I]=[];const T=A.clone().lerp(S,I/R),E=M.clone().lerp(S,I/R),O=R-I;for(let k=0;k<=O;k++)k===0&&I===R?w[I][k]=T:w[I][k]=T.clone().lerp(E,k/O)}for(let I=0;I<R;I++)for(let T=0;T<2*(R-I)-1;T++){const E=Math.floor(T/2);T%2===0?(f(w[I][E+1]),f(w[I+1][E]),f(w[I][E])):(f(w[I][E+1]),f(w[I+1][E+1]),f(w[I+1][E]))}}function u(A){const M=new C;for(let S=0;S<o.length;S+=3)M.x=o[S+0],M.y=o[S+1],M.z=o[S+2],M.normalize().multiplyScalar(A),o[S+0]=M.x,o[S+1]=M.y,o[S+2]=M.z}function d(){const A=new C;for(let M=0;M<o.length;M+=3){A.x=o[M+0],A.y=o[M+1],A.z=o[M+2];const S=_(A)/2/Math.PI+.5,D=m(A)/Math.PI+.5;a.push(S,1-D)}g(),h()}function h(){for(let A=0;A<a.length;A+=6){const M=a[A+0],S=a[A+2],D=a[A+4],R=Math.max(M,S,D),w=Math.min(M,S,D);R>.9&&w<.1&&(M<.2&&(a[A+0]+=1),S<.2&&(a[A+2]+=1),D<.2&&(a[A+4]+=1))}}function f(A){o.push(A.x,A.y,A.z)}function p(A,M){const S=A*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function g(){const A=new C,M=new C,S=new C,D=new C,R=new Ke,w=new Ke,I=new Ke;for(let T=0,E=0;T<o.length;T+=9,E+=6){A.set(o[T+0],o[T+1],o[T+2]),M.set(o[T+3],o[T+4],o[T+5]),S.set(o[T+6],o[T+7],o[T+8]),R.set(a[E+0],a[E+1]),w.set(a[E+2],a[E+3]),I.set(a[E+4],a[E+5]),D.copy(A).add(M).add(S).divideScalar(3);const O=_(D);v(R,E+0,A,O),v(w,E+2,M,O),v(I,E+4,S,O)}}function v(A,M,S,D){D<0&&A.x===1&&(a[M]=A.x-1),S.x===0&&S.z===0&&(a[M]=D/2/Math.PI+.5)}function _(A){return Math.atan2(A.z,-A.x)}function m(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.vertices,e.indices,e.radius,e.details)}}const wa=new C,Oa=new C,ec=new C,Ca=new Tn;class Yx extends an{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(Ho*n),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,u=[0,0,0],d=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<c;g+=3){a?(u[0]=a.getX(g),u[1]=a.getX(g+1),u[2]=a.getX(g+2)):(u[0]=g,u[1]=g+1,u[2]=g+2);const{a:v,b:_,c:m}=Ca;if(v.fromBufferAttribute(l,u[0]),_.fromBufferAttribute(l,u[1]),m.fromBufferAttribute(l,u[2]),Ca.getNormal(ec),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const M=(A+1)%3,S=h[A],D=h[M],R=Ca[d[A]],w=Ca[d[M]],I=`${S}_${D}`,T=`${D}_${S}`;T in f&&f[T]?(ec.dot(f[T].normal)<=o&&(p.push(R.x,R.y,R.z),p.push(w.x,w.y,w.z)),f[T]=null):I in f||(f[I]={index0:u[A],index1:u[M],normal:ec.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:_}=f[g];wa.fromBufferAttribute(l,v),Oa.fromBufferAttribute(l,_),p.push(wa.x,wa.y,wa.z),p.push(Oa.x,Oa.y,Oa.z)}this.setAttribute("position",new wt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ja extends ku{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ja(e.radius,e.detail)}}class Wu extends an{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let u=0;const d=[],h=new C,f=new C,p=[],g=[],v=[],_=[];for(let m=0;m<=i;m++){const A=[],M=m/i;let S=0;m===0&&a===0?S=.5/n:m===i&&c===Math.PI&&(S=-.5/n);for(let D=0;D<=n;D++){const R=D/n;h.x=-e*Math.cos(r+R*o)*Math.sin(a+M*l),h.y=e*Math.cos(a+M*l),h.z=e*Math.sin(r+R*o)*Math.sin(a+M*l),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),_.push(R+S,1-M),A.push(u++)}d.push(A)}for(let m=0;m<i;m++)for(let A=0;A<n;A++){const M=d[m][A+1],S=d[m][A],D=d[m+1][A],R=d[m+1][A+1];(m!==0||a>0)&&p.push(M,S,R),(m!==i-1||c<Math.PI)&&p.push(S,D,R)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lt extends cr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class be extends cr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gl extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class $x extends gl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const tc=new _t,dd=new C,hd=new C;class Oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bu,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),n.position.copy(dd),hd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hd),n.updateMatrixWorld(),tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pd=new _t,ms=new C,nc=new C;class Zx extends Oh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),i.position.copy(ms),nc.copy(i.position),nc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(nc),i.updateMatrixWorld(),r.makeTranslation(-ms.x,-ms.y,-ms.z),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}}class jx extends gl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qx extends Oh{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ch extends gl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ih extends gl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);let yo=null;function gt(){if(!yo){const t=window.AudioContext||window.webkitAudioContext;t&&(yo=new t)}return yo&&yo.state==="suspended"&&yo.resume(),yo}if(typeof window<"u"){const t=()=>{gt(),window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t)}function Dh(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(320,e+.12),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}function Jx(t){const e=gt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(300,n),i.frequency.exponentialRampToValueAtTime(750,n+.18)):(i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(200,n+.18)),r.gain.setValueAtTime(.22,n),r.gain.exponentialRampToValueAtTime(.01,n+.2),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.2)}function eS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.sampleRate*.08,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*Math.exp(-c/(n*.3));const o=t.createBufferSource();o.buffer=i;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(800,e),a.frequency.exponentialRampToValueAtTime(150,e+.08);const l=t.createGain();l.gain.setValueAtTime(.35,e),l.gain.exponentialRampToValueAtTime(.01,e+.08),o.connect(a),a.connect(l),l.connect(t.destination),o.start(e)}function ic(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(80,e+.07),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.01,e+.07),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.07)}function tS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.exponentialRampToValueAtTime(60,e+.15),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.15),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.15)}function Nh(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(450,e),n.frequency.exponentialRampToValueAtTime(120,e+.1),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.1)}function nS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(80,e+.14),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function iS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(95,e),n.frequency.linearRampToValueAtTime(80,e+.25),n.frequency.exponentialRampToValueAtTime(50,e+.5),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}function rS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.linearRampToValueAtTime(250,e+.08),n.frequency.linearRampToValueAtTime(360,e+.18),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.18),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.18)}function bt(t=!0){const e=gt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",t?(i.frequency.setValueAtTime(260,n),i.frequency.exponentialRampToValueAtTime(420,n+.08)):(i.frequency.setValueAtTime(420,n),i.frequency.exponentialRampToValueAtTime(260,n+.08)),r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.01,n+.08),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.08)}function oS(t=!0){bt(t)}function Ph(t=1){const e=gt();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle";const o=t===3||t===8||t===9||t===13?280:180;i.frequency.setValueAtTime(o,n),i.frequency.exponentialRampToValueAtTime(60,n+.03),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.03),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.03)}function sS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(880,e+.09),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.01,e+.09),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.09)}function vn(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createOscillator(),r=t.createGain();n.type="triangle",i.type="sine",n.frequency.setValueAtTime(523.25,e),n.frequency.setValueAtTime(659.25,e+.07),i.frequency.setValueAtTime(783.99,e+.07),r.gain.setValueAtTime(.25,e),r.gain.exponentialRampToValueAtTime(.01,e+.22),n.connect(r),i.connect(r),r.connect(t.destination),n.start(e),i.start(e+.07),n.stop(e+.22),i.stop(e+.22)}function aS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(550,e),n.frequency.exponentialRampToValueAtTime(160,e+.14),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.14),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.14)}function Lh(){const t=gt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.45),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*.7;const o=t.createBufferSource();o.buffer=i;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(3200,e),a.Q.setValueAtTime(4,e);const l=t.createGain();l.gain.setValueAtTime(.25,e),l.gain.exponentialRampToValueAtTime(.01,e+.45),o.connect(a),a.connect(l),l.connect(t.destination),o.start(e)}function lS(){const t=gt();if(!t)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.85),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let d=0;d<n;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(n*.4));const o=t.createBufferSource();o.buffer=i;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(450,e),a.frequency.exponentialRampToValueAtTime(40,e+.85);const l=t.createGain();l.gain.setValueAtTime(.7,e),l.gain.exponentialRampToValueAtTime(.001,e+.85),o.connect(a),a.connect(l),l.connect(t.destination),o.start(e);const c=t.createOscillator(),u=t.createGain();c.type="sine",c.frequency.setValueAtTime(120,e),c.frequency.exponentialRampToValueAtTime(25,e+.5),u.gain.setValueAtTime(.6,e),u.gain.exponentialRampToValueAtTime(.01,e+.5),c.connect(u),u.connect(t.destination),c.start(e),c.stop(e+.5)}function cS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(90,e+.08),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.08)}function Uh(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(240,e),n.frequency.linearRampToValueAtTime(210,e+.35);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(700,e),r.frequency.linearRampToValueAtTime(450,e+.35),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.01,e+.35),n.connect(r),r.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.35)}function uS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(160,e+.6),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.6),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.6)}function fS(t){const e=gt();if(!e)return;const n=e.currentTime,i=e.sampleRate*.05,r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);for(let u=0;u<i;u++)o[u]=(Math.random()*2-1)*Math.exp(-u/(i*.35));const a=e.createBufferSource();a.buffer=r;const l=e.createBiquadFilter(),c=e.createGain();t===3||t===13||t===28||t===36||t===37?(l.type="bandpass",l.frequency.setValueAtTime(1100,n),l.Q.value=3,c.gain.setValueAtTime(.16,n)):t===6||t===12||t===16||t===20?(l.type="lowpass",l.frequency.setValueAtTime(320,n),c.gain.setValueAtTime(.18,n)):t===4||t===2||t===33?(l.type="lowpass",l.frequency.setValueAtTime(550,n),c.gain.setValueAtTime(.12,n)):t===31||t===32?(l.type="bandpass",l.frequency.setValueAtTime(800,n),l.Q.value=1.8,c.gain.setValueAtTime(.15,n)):(l.type="lowpass",l.frequency.setValueAtTime(450,n),c.gain.setValueAtTime(.13,n)),c.gain.exponentialRampToValueAtTime(.001,n+.05),a.connect(l),l.connect(c),c.connect(e.destination),a.start(n)}function dS(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(2400,e),n.frequency.exponentialRampToValueAtTime(800,e+.06),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.06),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.06);const r=t.sampleRate*.15,o=t.createBuffer(1,r,t.sampleRate),a=o.getChannelData(0);for(let d=0;d<r;d++)a[d]=(Math.random()*2-1)*Math.exp(-d/(r*.4));const l=t.createBufferSource();l.buffer=o;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1400,e),c.frequency.exponentialRampToValueAtTime(300,e+.15);const u=t.createGain();u.gain.setValueAtTime(.2,e),u.gain.exponentialRampToValueAtTime(.01,e+.15),l.connect(c),c.connect(u),u.connect(t.destination),l.start(e+.02)}function Fh(){const t=gt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(880,e),n.frequency.exponentialRampToValueAtTime(1400,e+.08),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.12)}let rc=20;const md=[261.63,293.66,329.63,392,440,523.25,587.33,659.25];function hS(t){rc-=t,rc<=0&&(rc=65+Math.random()*45,pS())}function pS(){const t=gt();if(!t)return;const e=4+Math.floor(Math.random()*3);let n=t.currentTime;for(let i=0;i<e;i++){const r=md[Math.floor(Math.random()*md.length)],o=1.6+Math.random()*1.2,a=t.createOscillator(),l=t.createGain();a.type="sine",a.frequency.setValueAtTime(r,n),l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(.04,n+.3),l.gain.exponentialRampToValueAtTime(.001,n+o),a.connect(l),l.connect(t.destination),a.start(n),a.stop(n+o),n+=.8+Math.random()*.6}}const rn={TITLE_SCREEN:"title_screen",PLAYING:"playing",PAUSED:"paused"},Mt={NONE:"none",INVENTORY:"inventory",CRAFTING_TABLE:"crafting_table",FURNACE:"furnace",CHEST:"chest",RECIPE_BOOK:"recipe_book",CONTROLS:"controls",SETTINGS:"settings"};let is=rn.TITLE_SCREEN,$o=Mt.NONE,Xs=null;function mS(t){Xs=t}function As(){return is}function vl(t){is=t}function _S(){return is===rn.TITLE_SCREEN}function gS(){return is===rn.PAUSED}function Bh(t){return $o===t}function Ds(){return $o!==Mt.NONE}function rs(t){$o=t,document.pointerLockElement&&document.exitPointerLock()}function Di(t=null){t&&$o!==t||($o=Mt.NONE,is===rn.PLAYING&&Xs&&Xs.requestPointerLock())}function vS(){$o=Mt.NONE,is===rn.PLAYING&&Xs&&Xs.requestPointerLock()}let Qt=null,fn=null,Io=null,du=!1;const $i={renderDistance:5,fov:75,mouseSensitivity:1};function xS(t){Io=t||document.querySelector("canvas"),mS(Io),document.getElementById("title-screen"),document.getElementById("pause-menu"),Qt=document.getElementById("modal-controls"),fn=document.getElementById("modal-settings"),window.startGame=_d,window.resumeGame=oc,window.returnToMainMenu=vd,window.openControls=()=>To(Qt),window.openSettings=()=>To(fn);const e=["Cavernas 3D & Entradas Naturais!","Fornalha e Fundição de Ferro!","Armaduras, Esqueletos e Aranhas!","Mundo infinito com Biomas!","Construa e explore em 60 FPS!","Receitas reais de sobrevivência!"],n=document.getElementById("splash-text");n&&(n.textContent=e[Math.floor(Math.random()*e.length)]);const i=document.getElementById("btn-play");i&&i.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation();try{Dh()}catch{}_d()});const r=document.getElementById("btn-controls");r&&r.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),To(Qt)});const o=document.getElementById("btn-settings");o&&o.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),To(fn)});const a=document.getElementById("btn-close-controls");a&&a.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),Qt&&(Qt.style.display="none"),Di(Mt.CONTROLS)});const l=document.getElementById("btn-close-settings");l&&l.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),fn&&(fn.style.display="none"),Di(Mt.SETTINGS)});const c=document.getElementById("btn-resume");c&&c.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),oc()});const u=document.getElementById("btn-pause-controls");u&&u.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),To(Qt)});const d=document.getElementById("btn-pause-settings")||document.getElementById("btn-pause-options");d&&d.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),To(fn)});const h=document.getElementById("btn-quit-menu")||document.getElementById("btn-exit-main");h&&h.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),vd()});const f=document.getElementById("setting-fov"),p=document.getElementById("fov-val");f&&p&&f.addEventListener("input",M=>{$i.fov=parseInt(M.target.value,10),p.textContent=`${$i.fov}°`});const g=document.getElementById("setting-distance"),v=document.getElementById("distance-val");g&&v&&g.addEventListener("input",M=>{$i.renderDistance=parseInt(M.target.value,10),v.textContent=`${$i.renderDistance} Chunks`});const _=document.getElementById("setting-sens"),m=document.getElementById("sens-val");_&&m&&_.addEventListener("input",M=>{$i.mouseSensitivity=parseFloat(M.target.value),m.textContent=`${$i.mouseSensitivity.toFixed(1)}x`}),document.addEventListener("pointerlockchange",()=>{const M=document.pointerLockElement===(Io||document.querySelector("canvas"));du&&!M&&As()===rn.PLAYING&&!Ds()&&gd(),du=M}),window.addEventListener("keydown",M=>{if(M.code==="Escape"){if(Qt&&Qt.style.display==="flex"){Qt.style.display="none",Di(Mt.CONTROLS);return}if(fn&&fn.style.display==="flex"){fn.style.display="none",Di(Mt.SETTINGS);return}if(Ds()){vS();return}As()===rn.PLAYING?(document.exitPointerLock(),gd()):As()===rn.PAUSED&&oc()}});const A=Io||document.querySelector("canvas");A&&A.addEventListener("click",()=>{if(As()===rn.PLAYING&&!Ds()&&!document.pointerLockElement)try{A.requestPointerLock()}catch{}})}function To(t){t&&(t.style.display="flex",rs(t===Qt?Mt.CONTROLS:Mt.SETTINGS))}function _d(){vl(rn.PLAYING);const t=document.getElementById("title-screen");t&&(t.style.display="none",t.style.pointerEvents="none",t.style.visibility="hidden",t.style.opacity="0");const e=document.getElementById("pause-menu");e&&(e.style.display="none");const n=document.getElementById("crosshair");n&&(n.style.display="block");const i=document.getElementById("controls-hint");i&&(i.style.display="block");const r=Io||document.querySelector("canvas");if(r&&typeof r.requestPointerLock=="function")try{const o=r.requestPointerLock();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}}function gd(){if(As()===rn.TITLE_SCREEN)return;vl(rn.PAUSED);const t=document.getElementById("pause-menu");t&&(t.style.display="flex");const e=document.getElementById("crosshair");e&&(e.style.display="none");const n=document.getElementById("controls-hint");n&&(n.style.display="none")}function oc(){vl(rn.PLAYING);const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Qt&&(Qt.style.display="none"),fn&&(fn.style.display="none");const e=document.getElementById("crosshair");e&&(e.style.display="block");const n=document.getElementById("controls-hint");n&&(n.style.display="block");const i=Io||document.querySelector("canvas");if(i&&typeof i.requestPointerLock=="function")try{const r=i.requestPointerLock();r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}function vd(){vl(rn.TITLE_SCREEN),du=!1;const t=document.getElementById("pause-menu");t&&(t.style.display="none"),Qt&&(Qt.style.display="none"),fn&&(fn.style.display="none");const e=document.getElementById("title-screen");e&&(e.style.display="flex",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.opacity="1");const n=document.getElementById("crosshair");n&&(n.style.display="none");const i=document.getElementById("controls-hint");i&&(i.style.display="none")}const SS=.0022,xd=1.55,Jr={FIRST_PERSON:0,THIRD_PERSON_BACK:1,THIRD_PERSON_FRONT:2};let Yt=null,ii=0,Jt=-.15,hu=!1,ir=Jr.FIRST_PERSON;function ES(t,e={x:0,y:20,z:0}){return Yt=new tn($i.fov||75,t,.05,500),Yt.rotation.order="YXZ",Yt.position.set(e.x,e.y,e.z),Yt.rotation.set(Jt,ii,0),Yt}function MS(t){document.addEventListener("pointerlockchange",()=>{hu=document.pointerLockElement===t}),document.addEventListener("mousemove",e=>{if(!hu||!Yt||Math.abs(e.movementX)>250||Math.abs(e.movementY)>250)return;const n=SS*($i.mouseSensitivity||1);ii-=e.movementX*n,Jt-=e.movementY*n,Jt=Math.max(-xd,Math.min(xd,Jt)),ir!==Jr.THIRD_PERSON_FRONT&&Yt.rotation.set(Jt,ii,0)})}function Js(){return Yt}function ea(){return hu}function Sd(){return ii}function yS(){return Jt}function Gh(){return ir}function TS(){return ir=(ir+1)%3,ir}function AS(t,e=1.62,n=null){if(!Yt)return;const i=t.x,r=t.y+e,o=t.z;if(ir===Jr.FIRST_PERSON)Yt.position.set(i,r,o),Yt.rotation.set(Jt,ii,0);else if(ir===Jr.THIRD_PERSON_BACK){const l=-Math.sin(ii)*Math.cos(Jt),c=Math.sin(Jt),u=-Math.cos(ii)*Math.cos(Jt);let d=3.4;if(n)for(let f=1;f<=16;f++){const p=f/16*3.4,g=i-l*p,v=r-c*p,_=o-u*p;if(n(Math.floor(g),Math.floor(v),Math.floor(_))){d=Math.max(.4,(f-1)/16*3.4);break}}Yt.position.set(i-l*d,r-c*d,o-u*d),Yt.rotation.set(Jt,ii,0)}else if(ir===Jr.THIRD_PERSON_FRONT){const l=-Math.sin(ii)*Math.cos(Jt),c=Math.sin(Jt),u=-Math.cos(ii)*Math.cos(Jt);let d=3;if(n)for(let f=1;f<=16;f++){const p=f/16*3,g=i+l*p,v=r+c*p,_=o+u*p;if(n(Math.floor(g),Math.floor(v),Math.floor(_))){d=Math.max(.4,(f-1)/16*3);break}}Yt.position.set(i+l*d,r+c*d+.15,o+u*d),Yt.lookAt(i,r-.1,o)}}let Hh=!1,pu=0,mu=null,_u=null;function kh(t){if(!Hh)return;const e=Math.min((t-pu)/1e3,.1);pu=t,mu&&mu(e,t/1e3),_u&&_u(e),requestAnimationFrame(kh)}function bS(t,e){mu=t,_u=e,Hh=!0,pu=performance.now(),requestAnimationFrame(kh)}let dn=null,Zi=null;function RS(){return dn=new Ah({antialias:!0}),dn.domElement.id="game-canvas",dn.setSize(window.innerWidth,window.innerHeight),dn.setPixelRatio(Math.min(window.devicePixelRatio,2)),dn.setClearColor(7911912),dn.shadowMap.enabled=!1,document.body.appendChild(dn.domElement),window.addEventListener("resize",()=>{dn.setSize(window.innerWidth,window.innerHeight)}),dn}let gu=null,vu=null,Xa=null;function wS(){return Zi=new bh,gu=new $x(8900331,5596723,.6),Zi.add(gu),vu=new Ih(16777215,.3),Zi.add(vu),Xa=new Ch(16774624,1),Xa.position.set(80,120,50),Zi.add(Xa),Zi.fog=new Hu(7911912,50,160),Zi}function OS(){return{hemiLight:gu,ambientLight:vu,dirLight:Xa}}function CS(t){dn&&Zi&&t&&dn.render(Zi,t)}function Wh(){return dn?dn.domElement:null}function IS(t){window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()})}const eo=16;function St(t){let e=t|0;return()=>(e=e*1103515245+12345&2147483647,e/2147483647)}function DS(t){const e=document.createElement("canvas");e.width=eo,e.height=eo;const n=e.getContext("2d");return t(n,eo),e}function ct(t,e,n,i,r,o){const a=St(o);t.fillStyle=n,t.fillRect(0,0,e,e);for(let l=0;l<e;l++)for(let c=0;c<e;c++)if(a()<r){const u=Math.floor(a()*i.length);t.fillStyle=i[u],t.fillRect(c,l,1,1)}}function NS(t,e){ct(t,e,"#5ba638",["#4f9430","#6bc043","#458528","#75cc4a"],.4,101);const n=St(202);for(let i=0;i<2;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#f6e05e",t.fillRect(r,o,1,1)}}function PS(t,e){ct(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a"],.35,301);const n=St(302);for(let i=0;i<5;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle=n()>.3?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<3?n()>.35&&(t.fillStyle=n()>.5?"#5ba638":"#4f9430",t.fillRect(r,i,1,1)):i<4&&n()>.65&&(t.fillStyle="#458528",t.fillRect(r,i,1,1))}function LS(t,e){ct(t,e,"#86652d",["#775924","#957134","#664c1e","#a37d3a","#584117"],.4,401);const n=St(402);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#584117",t.fillRect(r,o,2,1)}}function os(t,e){ct(t,e,"#828282",["#737373","#919191","#656565","#9e9e9e","#595959"],.45,501);const n=St(502);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#505050",t.fillRect(r,o,2+Math.floor(n()*2),1)}}function US(t,e){ct(t,e,"#e5d38a",["#dac67c","#eedd98","#cfbc6f","#f5e6a4","#c5b161"],.45,601)}function FS(t,e){ct(t,e,"#f5f7fa",["#e9ecf2","#ffffff","#dfe3ec","#edf0f7"],.35,701);const n=St(702);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*e);t.fillStyle="#cbd5e1",t.fillRect(r,o,2,1)}}function BS(t,e){ct(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,1401);const n=St(1402);for(let i=0;i<4;i++)for(let r=0;r<e;r++)i<2?(t.fillStyle="#f5f7fa",t.fillRect(r,i,1,1)):i<3?n()>.3&&(t.fillStyle="#e9ecf2",t.fillRect(r,i,1,1)):n()>.7&&(t.fillStyle="#dfe3ec",t.fillRect(r,i,1,1))}function GS(t,e){t.fillStyle="#888888",t.fillRect(0,0,e,e),t.fillStyle="#555555",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1);for(let i=0;i<4;i++){const r=i%2===0?0:8,o=i*4;t.fillRect(r,o,1,4),t.fillRect(r+8,o,1,4)}const n=St(801);for(let i=0;i<e;i++)for(let r=0;r<e;r++)n()<.2&&(t.fillStyle=n()>.5?"#9e9e9e":"#737373",t.fillRect(r,i,1,1))}function HS(t,e){ct(t,e,"#6b4524",["#5a391d","#7c512c","#4e3016","#8d5c32"],.35,901);for(let n=0;n<e;n+=3)t.fillStyle="#472c14",t.fillRect(n,0,1,e)}function kS(t,e){t.fillStyle="#c5a368",t.fillRect(0,0,e,e),t.fillStyle="#6b4524",t.fillRect(0,0,e,2),t.fillRect(0,14,e,2),t.fillRect(0,0,2,e),t.fillRect(14,0,2,e);const n=7.5,i=7.5,r=[2,4,6];t.fillStyle="#9e804f";for(const o of r)for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=Math.hypot(l-n,a-i);Math.abs(c-o)<.65&&t.fillRect(l,a,1,1)}t.fillStyle="#7a6036",t.fillRect(7,7,2,2)}function WS(t,e){ct(t,e,"#3c8524",["#2f6d1b","#4fa631","#245614","#5dbd3c","#1b400e"],.5,1001);const n=St(1002);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1b400e",t.fillRect(r,o,1,1)}}function VS(t,e){os(t,e);const n=St(1101);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#222222",t.fillRect(r,o,2,2),t.fillStyle="#111111",t.fillRect(r+1,o+1,1,1)}}function zS(t,e){os(t,e);const n=St(1201);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#d4a373",t.fillRect(r,o,2,2),t.fillStyle="#faedcd",t.fillRect(r,o,1,1)}}function XS(t,e){ct(t,e,"#2c75d8",["#2565bf","#3b86e8","#1e52a0","#4a95f5"],.4,1301);const n=St(1302);for(let i=0;i<3;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*e);t.fillStyle="#8bc3f7",t.fillRect(r,o,3,1)}}function KS(t,e){ct(t,e,"#15803d",["#166534","#14532d","#22c55e"],.4,1501),t.fillStyle="#14532d",t.fillRect(7,7,2,2)}function qS(t,e){ct(t,e,"#15803d",["#166534","#15803d","#22c55e","#14532d"],.35,1601);const n=St(1602);for(let i=0;i<e;i+=4)t.fillStyle="#14532d",t.fillRect(i,0,1,e);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-2))+1,o=Math.floor(n()*(e-2))+1;t.fillStyle="#fef08a",t.fillRect(r,o,1,1)}}function ur(t,e){ct(t,e,"#b45309",["#92400e","#78350f","#d97706","#a16207"],.35,1701),t.fillStyle="#451a03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1),t.fillRect(5,0,1,3),t.fillRect(11,4,1,3),t.fillRect(4,8,1,3),t.fillRect(12,12,1,3)}function ss(t,e){ct(t,e,"#64748b",["#475569","#334155","#94a3b8","#1e293b"],.45,1801);const n=St(1802);t.fillStyle="#1e293b";for(let i=0;i<5;i++){const r=Math.floor(n()*(e-4)),o=Math.floor(n()*(e-4));t.fillRect(r,o,3,2)}}function YS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,7,2,9),t.fillRect(5,11,2,2),t.fillRect(9,9,2,2),t.fillStyle="#dc2626",t.fillRect(6,3,4,4),t.fillStyle="#ef4444",t.fillRect(7,2,2,1),t.fillRect(5,4,1,2),t.fillRect(10,4,1,2),t.fillStyle="#450a0a",t.fillRect(7,4,2,2)}function $S(t,e){t.clearRect(0,0,e,e),t.fillStyle="#15803d",t.fillRect(7,6,2,10),t.fillRect(5,10,2,2),t.fillRect(9,12,2,2),t.fillStyle="#eab308",t.fillRect(6,2,4,4),t.fillStyle="#facc15",t.fillRect(7,1,2,1),t.fillRect(5,3,1,2),t.fillRect(10,3,1,2),t.fillStyle="#ca8a04",t.fillRect(7,3,2,2)}function ZS(t,e){ur(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(2.5,2.5,11,11),t.beginPath(),t.moveTo(6.5,2.5),t.lineTo(6.5,13.5),t.moveTo(10.5,2.5),t.lineTo(10.5,13.5),t.moveTo(2.5,6.5),t.lineTo(13.5,6.5),t.moveTo(2.5,10.5),t.lineTo(13.5,10.5),t.stroke(),t.fillStyle="#fef08a",t.fillRect(3,3,1,1),t.fillRect(12,3,1,1),t.fillRect(3,12,1,1),t.fillRect(12,12,1,1)}function jS(t,e){ur(t,e),t.fillStyle="#1e293b",t.fillRect(3,4,3,8),t.fillStyle="#94a3b8",t.fillRect(3,4,2,6),t.fillStyle="#78350f",t.fillRect(4,9,1,3),t.fillStyle="#cbd5e1",t.fillRect(10,5,2,2),t.fillStyle="#78350f",t.fillRect(9,7,1,4),t.fillRect(12,7,1,4)}function QS(t,e){t.clearRect(0,0,e,e),t.fillStyle="#78350f",t.fillRect(7,6,2,10),t.fillStyle="#451a03",t.fillRect(7,6,1,10),t.fillStyle="#f97316",t.fillRect(6,2,4,4),t.fillStyle="#fef08a",t.fillRect(7,3,2,2),t.fillStyle="#ea580c",t.fillRect(7,1,2,1)}function JS(t,e){ss(t,e),t.strokeStyle="#1e293b",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function eE(t,e){ss(t,e),t.fillStyle="#0f172a",t.fillRect(4,7,8,7),t.fillStyle="#334155",t.fillRect(5,10,6,1),t.fillRect(5,12,6,1)}function tE(t,e){ss(t,e),t.fillStyle="#f97316",t.fillRect(4,7,8,7),t.fillStyle="#fef08a",t.fillRect(5,9,6,4),t.fillStyle="#ef4444",t.fillRect(6,11,4,2)}function nE(t,e){ur(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13)}function iE(t,e){ur(t,e),t.strokeStyle="#451a03",t.lineWidth=1,t.strokeRect(1.5,1.5,13,13),t.fillStyle="#cbd5e1",t.fillRect(7,6,2,4),t.fillStyle="#475569",t.fillRect(7,8,2,1)}function rE(t,e){ct(t,e,"#3b1d0c",["#2e1507","#45220e","#230f04","#4d2812"],.4,2101),t.fillStyle="#1c0b03",t.fillRect(0,3,e,1),t.fillRect(0,7,e,1),t.fillRect(0,11,e,1),t.fillRect(0,15,e,1)}function oE(t,e){ct(t,e,"#86652d",["#775924","#957134","#664c1e"],.35,2201),t.fillStyle="#3b1d0c",t.fillRect(0,0,e,3),t.fillStyle="#230f04",t.fillRect(0,2,e,1)}function sE(t,e){t.clearRect(0,0,e,e),t.fillStyle="#65a30d";for(let n=2;n<e;n+=3)t.fillRect(n,12,1,4),t.fillRect(n-1,11,1,2)}function aE(t,e){t.clearRect(0,0,e,e),t.fillStyle="#84cc16";for(let n=1;n<e;n+=3)t.fillRect(n,6,2,10),t.fillStyle="#ca8a04",t.fillRect(n,6,2,3),t.fillStyle="#84cc16"}function lE(t,e){t.clearRect(0,0,e,e);for(let n=1;n<e;n+=2)t.fillStyle="#ca8a04",t.fillRect(n,4,1,12),t.fillStyle="#eab308",t.fillRect(n-(n>1?1:0),1,2,5),t.fillStyle="#fef08a",t.fillRect(n,2,1,3)}function cE(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#475569",t.beginPath(),t.arc(8,8,4,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.fillRect(7,7,2,2)}function uE(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#f8fafc",t.fillRect(0,5,e,6),t.fillStyle="#0f172a",t.fillRect(1,6,4,1),t.fillRect(2,7,2,3),t.fillRect(6,6,1,4),t.fillRect(7,7,1,2),t.fillRect(8,6,1,4),t.fillRect(10,6,4,1),t.fillRect(11,7,2,3)}function fE(t,e){t.fillStyle="#b91c1c",t.fillRect(0,0,e,e),t.fillStyle="#7f1d1d",t.fillRect(3,3,10,10),t.fillStyle="#450a0a",t.fillRect(7,7,2,2)}function dE(t,e){ct(t,e,"#ea580c",["#f97316","#c2410c","#facc15","#b45309","#7c2d12"],.45,2301);const n=St(2302);for(let i=0;i<4;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*(e-2));t.fillStyle="#fef08a",t.fillRect(r,o,3,2),t.fillStyle="#ea580c",t.fillRect(r+1,o,1,1)}}function hE(t,e){os(t,e);const n=St(2401);for(let i=0;i<4;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#06b6d4",t.fillRect(r,o,2,2),t.fillStyle="#67e8f9",t.fillRect(r,o,1,1),t.fillStyle="#e0f2fe",t.fillRect(r+1,o+1,1,1)}}function Vu(t,e){ct(t,e,"#0f172a",["#1e1b4b","#020617","#312e81","#4c1d95","#1e293b"],.45,2501);const n=St(2502);for(let i=0;i<5;i++){const r=Math.floor(n()*(e-2)),o=Math.floor(n()*(e-2));t.fillStyle="#6366f1",t.fillRect(r,o,1,2),t.fillStyle="#a855f7",t.fillRect(r+1,o+1,1,1)}}function pE(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,e),t.fillStyle="#b91c1c",t.fillRect(1,6,e-2,e-7),t.fillStyle="#f8fafc",t.fillRect(2,1,12,4),t.fillStyle="#cbd5e1",t.fillRect(2,4,12,1)}function mE(t,e){t.fillStyle="#dc2626",t.fillRect(0,0,e,6),t.fillStyle="#b91c1c",t.fillRect(0,5,e,1),t.fillStyle="#78350f",t.fillRect(0,6,e,10),t.fillStyle="#451a03",t.fillRect(2,9,e-4,7)}function _E(t,e){ct(t,e,"#f8fafc",["#f1f5f9","#e2e8f0","#cbd5e1","#ffffff"],.35,2601);const n=St(2602);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#e2e8f0",t.fillRect(r,o,1,1)}}function gE(t,e){ct(t,e,"#6b7280",["#4b5563","#9ca3af","#374151","#d1d5db"],.5,3101);const n=St(3102);for(let i=0;i<8;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#1f2937",t.fillRect(r,o,1,1)}}function Vh(t,e){ct(t,e,"#6b1717",["#450a0a","#7f1d1d","#991b1b","#3b0707"],.5,3201);const n=St(3202);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#b91c1c",t.fillRect(r,o,1,1)}}function vE(t,e){ct(t,e,"#451a03",["#381e11","#2e180c","#54260f"],.4,3301),t.fillStyle="#1c0d06",t.fillRect(3,4,1,2),t.fillRect(5,4,1,2),t.fillRect(4,7,1,2),t.fillRect(10,8,1,2),t.fillRect(12,8,1,2),t.fillRect(11,11,1,2)}function xE(t,e){ct(t,e,"#eab308",["#ca8a04","#facc15","#fef08a","#a16207"],.55,3401);const n=St(3402);for(let i=0;i<10;i++){const r=Math.floor(n()*(e-1)),o=Math.floor(n()*(e-1));t.fillStyle="#ffffff",t.fillRect(r,o,1,1)}}function SE(t,e){Vh(t,e),[[3,3],[4,3],[4,4],[5,4],[4,5],[9,9],[10,9],[10,10],[11,10],[10,11],[11,3],[12,3],[12,4],[3,11],[4,11],[4,12]].forEach(([i,r])=>{t.fillStyle="#f8fafc",t.fillRect(i,r,1,1)}),t.fillStyle="#e2e8f0",t.fillRect(3,2,1,1),t.fillRect(9,8,1,1)}function EE(t,e){ct(t,e,"#f8fafc",["#f1f5f9","#ffffff","#e2e8f0"],.25,3601),t.fillStyle="#cbd5e1",t.fillRect(0,0,e,1),t.fillRect(0,0,1,e),t.fillStyle="#94a3b8",t.fillRect(0,e-1,e,1),t.fillRect(e-1,0,1,e)}function ME(t,e){ct(t,e,"#4c1d95",["#6b21a8","#7e22ce","#3b0764","#9333ea"],.5,3701),t.fillStyle="#c084fc",t.fillRect(2,3,3,1),t.fillRect(4,4,2,1),t.fillRect(8,7,4,1),t.fillRect(10,8,3,1),t.fillRect(4,11,5,1),t.fillRect(1,12,3,1),t.fillStyle="#f3e8ff",t.fillRect(3,3,1,1),t.fillRect(9,7,1,1)}function yE(t,e){os(t,e);const n=St(3801);for(let i=0;i<5;i++){const r=2+Math.floor(n()*(e-5)),o=2+Math.floor(n()*(e-5));t.fillStyle="#b91c1c",t.fillRect(r,o,3,3),t.fillStyle="#ef4444",t.fillRect(r,o,2,2),t.fillStyle="#fca5a5",t.fillRect(r+1,o+1,1,1)}}function TE(t,e){t.clearRect(0,0,e,e),t.fillStyle="#991b1b",t.fillRect(6,0,4,e),t.fillRect(0,6,e,4),t.fillStyle="#ef4444",t.fillRect(7,0,2,e),t.fillRect(0,7,e,2),t.fillStyle="#fca5a5",t.fillRect(7,7,2,2)}function AE(t,e){t.clearRect(0,0,e,e),t.fillStyle="#78350f",t.fillRect(7,7,2,9),t.fillStyle="#991b1b",t.fillRect(6,2,4,5),t.fillStyle="#ef4444",t.fillRect(6,2,4,3),t.fillStyle="#fca5a5",t.fillRect(7,3,2,2)}function bE(t,e){ss(t,e),t.fillStyle="#334155",t.fillRect(5,5,6,6),t.fillStyle="#78350f",t.fillRect(7,3,2,6),t.fillStyle="#d97706",t.fillRect(7,2,2,2)}function RE(t,e){os(t,e),t.fillStyle="#475569",t.fillRect(2,2,12,12),t.fillStyle="#64748b",t.fillRect(3,3,10,10)}function wE(t,e){ur(t,e),t.fillStyle="#451a03",t.strokeRect(1,1,14,14),t.fillStyle="#0f172a",t.fillRect(12,4,2,3)}function OE(t,e){ur(t,e),t.fillStyle="#451a03",t.strokeRect(1,1,14,14),t.fillStyle="#bae6fd",t.fillRect(3,3,4,4),t.fillRect(9,3,4,4),t.fillRect(3,9,4,4),t.fillRect(9,9,4,4)}function CE(t,e){ct(t,e,"#e2e8f0",["#cbd5e1","#f1f5f9","#94a3b8"],.35,3901),t.fillStyle="#334155",t.strokeRect(1,1,14,14),t.fillRect(12,4,2,3)}function IE(t,e){ct(t,e,"#e2e8f0",["#cbd5e1","#f1f5f9","#94a3b8"],.35,3902),t.fillStyle="#334155",t.strokeRect(1,1,14,14),t.fillStyle="#1e293b",t.fillRect(4,4,8,2),t.fillRect(4,8,8,2)}function DE(t,e){Vu(t,e),t.fillStyle="#991b1b",t.fillRect(3,3,10,10),t.fillStyle="#dc2626",t.fillRect(4,4,8,8),t.fillStyle="#22d3ee",t.fillRect(1,1,2,2),t.fillRect(13,1,2,2),t.fillRect(1,13,2,2),t.fillRect(13,13,2,2)}function NE(t,e){Vu(t,e),t.fillStyle="#22d3ee",t.fillRect(0,0,e,2),t.fillStyle="#06b6d4",t.fillRect(2,6,4,4),t.fillRect(10,6,4,4)}function PE(t,e){ss(t,e);const n=St(4001);for(let i=0;i<6;i++){const r=Math.floor(n()*(e-3)),o=Math.floor(n()*(e-3));t.fillStyle="#15803d",t.fillRect(r,o,3,3),t.fillStyle="#4ade80",t.fillRect(r+1,o+1,1,1)}}function LE(t,e){t.fillStyle="#0f172a",t.fillRect(0,0,e,e),t.fillStyle="#475569",t.fillRect(0,0,e,2),t.fillRect(0,e-2,e,2),t.fillRect(0,0,2,e),t.fillRect(e-2,0,2,e),t.fillRect(6,0,2,e),t.fillRect(0,6,e,2),t.fillStyle="#ea580c",t.fillRect(7,7,2,2)}function UE(t,e){ur(t,e),t.fillStyle="#1e293b",t.fillRect(2,2,12,5),t.fillStyle="#dc2626",t.fillRect(3,2,2,5),t.fillStyle="#2563eb",t.fillRect(5,2,3,5),t.fillStyle="#16a34a",t.fillRect(8,2,2,5),t.fillStyle="#d97706",t.fillRect(10,2,3,5),t.fillStyle="#1e293b",t.fillRect(2,9,12,5),t.fillStyle="#9333ea",t.fillRect(3,9,3,5),t.fillStyle="#ca8a04",t.fillRect(6,9,2,5),t.fillStyle="#0891b2",t.fillRect(8,9,3,5),t.fillStyle="#e11d48",t.fillRect(11,9,2,5)}const FE=[{name:"grass_top",draw:NS},{name:"grass_side",draw:PS},{name:"dirt",draw:LS},{name:"stone",draw:os},{name:"sand",draw:US},{name:"snow",draw:FS},{name:"wood_log",draw:HS},{name:"wood_log_top",draw:kS},{name:"leaves",draw:WS},{name:"coal_ore",draw:VS},{name:"iron_ore",draw:zS},{name:"water",draw:XS},{name:"stone_bricks",draw:GS},{name:"snow_side",draw:BS},{name:"cactus_top",draw:KS},{name:"cactus_side",draw:qS},{name:"wood_planks",draw:ur},{name:"cobblestone",draw:ss},{name:"flower_red",draw:YS},{name:"flower_yellow",draw:$S},{name:"crafting_table_top",draw:ZS},{name:"crafting_table_side",draw:jS},{name:"torch",draw:QS},{name:"furnace_side",draw:JS},{name:"furnace_front",draw:eE},{name:"furnace_front_lit",draw:tE},{name:"chest_top",draw:nE},{name:"chest_side",draw:iE},{name:"farmland_top",draw:rE},{name:"farmland_side",draw:oE},{name:"wheat_stage1",draw:sE},{name:"wheat_stage2",draw:aE},{name:"wheat_stage3",draw:lE},{name:"tnt_top",draw:cE},{name:"tnt_side",draw:uE},{name:"tnt_bottom",draw:fE},{name:"lava",draw:dE},{name:"diamond_ore",draw:hE},{name:"obsidian",draw:Vu},{name:"bed_top",draw:pE},{name:"bed_side",draw:mE},{name:"wool",draw:_E},{name:"gravel",draw:gE},{name:"netherrack",draw:Vh},{name:"soul_sand",draw:vE},{name:"glowstone",draw:xE},{name:"nether_quartz_ore",draw:SE},{name:"quartz_block",draw:EE},{name:"nether_portal",draw:ME},{name:"redstone_ore",draw:yE},{name:"redstone_wire",draw:TE},{name:"redstone_torch",draw:AE},{name:"lever",draw:bE},{name:"pressure_plate",draw:RE},{name:"wooden_door_bottom",draw:wE},{name:"wooden_door_top",draw:OE},{name:"iron_door_bottom",draw:CE},{name:"iron_door_top",draw:IE},{name:"enchanting_table_top",draw:DE},{name:"enchanting_table_side",draw:NE},{name:"mossy_cobblestone",draw:PE},{name:"monster_spawner",draw:LE},{name:"bookshelf_side",draw:UE}];function zh(){return FE.map(t=>DS(t.draw))}const Lr=4,xu=16,Ed=Lr*eo,Md=xu*eo;let Ki=null;function BE(){const t=zh(),e=document.createElement("canvas");e.width=Ed,e.height=Md;const n=e.getContext("2d");return n.clearRect(0,0,Ed,Md),t.forEach((i,r)=>{const o=r%Lr,a=Math.floor(r/Lr),l=o*eo,c=a*eo;n.drawImage(i,l,c)}),Ki=new qx(e),Ki.magFilter=gn,Ki.minFilter=gn,Ki.generateMipmaps=!1,Ki.colorSpace=hn,Ki.needsUpdate=!0,Ki}function Ns(t){const e=t%Lr,n=Math.floor(t/Lr),i=5e-4,r=e/Lr+i,o=(e+1)/Lr-i,a=1-n/xu-i,l=1-(n+1)/xu+i;return{uMin:r,uMax:o,vMin:l,vMax:a}}function xl(){return Ki}const s={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD_LOG:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,WATER:10,CACTUS:11,WOOD_PLANKS:12,COBBLESTONE:13,FLOWER_RED:14,FLOWER_YELLOW:15,CRAFTING_TABLE:16,TORCH:17,FURNACE:18,FURNACE_LIT:19,CHEST:20,FARMLAND:21,WHEAT_STAGE_1:22,WHEAT_STAGE_2:23,WHEAT_STAGE_3:24,TNT:25,LAVA:26,DIAMOND_ORE:27,OBSIDIAN:28,BED:29,WOOL:30,GRAVEL:31,NETHERRACK:32,SOUL_SAND:33,GLOWSTONE:34,NETHER_QUARTZ_ORE:35,QUARTZ_BLOCK:36,NETHER_PORTAL:37,IRON_SWORD:101,IRON_PICKAXE:102,PORKCHOP:103,ROTTEN_FLESH:104,STICK:105,WOODEN_SWORD:106,WOODEN_PICKAXE:107,STONE_SWORD:108,STONE_PICKAXE:109,IRON_INGOT:110,COOKED_PORKCHOP:111,IRON_HELMET:112,IRON_CHESTPLATE:113,IRON_LEGGINGS:114,IRON_BOOTS:115,ARROW:116,BONE:117,STRING:118,SPIDER_EYE:119,BOW:120,WOODEN_HOE:121,STONE_HOE:122,IRON_HOE:123,WHEAT_SEEDS:124,WHEAT:125,BREAD:126,GUNPOWDER:127,DIAMOND:128,DIAMOND_SWORD:129,DIAMOND_PICKAXE:130,DIAMOND_HELMET:131,DIAMOND_CHESTPLATE:132,DIAMOND_LEGGINGS:133,DIAMOND_BOOTS:134,MUTTON:135,COOKED_MUTTON:136,FLINT:137,FLINT_AND_STEEL:138,QUARTZ:139,REDSTONE_ORE:38,REDSTONE_WIRE:39,REDSTONE_TORCH:40,LEVER:41,PRESSURE_PLATE:42,WOODEN_DOOR_BOTTOM:43,WOODEN_DOOR_TOP:44,IRON_DOOR_BOTTOM:45,IRON_DOOR_TOP:46,ENCHANTING_TABLE:47,MOSSY_COBBLESTONE:48,MONSTER_SPAWNER:49,BOOKSHELF:50,REDSTONE_DUST:140,WOODEN_SHIELD:141,IRON_SHIELD:142,BOOK:143,GOLDEN_APPLE:144,BOAT:145,EXPERIENCE_BOTTLE:146},oo={[s.GRASS]:"Grama",[s.DIRT]:"Terra",[s.STONE]:"Pedra",[s.SAND]:"Areia",[s.SNOW]:"Neve",[s.WOOD_LOG]:"Tronco de Carvalho",[s.LEAVES]:"Folhas",[s.COAL_ORE]:"Minério de Carvão",[s.IRON_ORE]:"Minério de Ferro",[s.WATER]:"Balde de Água",[s.CACTUS]:"Cacto",[s.WOOD_PLANKS]:"Tábuas de Madeira",[s.COBBLESTONE]:"Pedregulho",[s.FLOWER_RED]:"Flor Vermelha (Papoula)",[s.FLOWER_YELLOW]:"Flor Amarela (Dente-de-Leão)",[s.CRAFTING_TABLE]:"Bancada de Trabalho",[s.TORCH]:"Tocha",[s.FURNACE]:"Fornalha",[s.FURNACE_LIT]:"Fornalha (Acesa)",[s.CHEST]:"Baú de Madeira",[s.FARMLAND]:"Terra Arada",[s.WHEAT_STAGE_1]:"Brotos de Trigo",[s.WHEAT_STAGE_2]:"Trigo em Crescimento",[s.WHEAT_STAGE_3]:"Trigo Maduro",[s.TNT]:"Bloco de TNT",[s.LAVA]:"Balde de Lava",[s.DIAMOND_ORE]:"Minério de Diamante",[s.OBSIDIAN]:"Bloco de Obsidiana",[s.BED]:"Cama Confortável",[s.WOOL]:"Bloco de Lã Branca",[s.IRON_SWORD]:"Espada de Ferro",[s.IRON_PICKAXE]:"Picareta de Ferro",[s.PORKCHOP]:"Costela de Porco Crua",[s.ROTTEN_FLESH]:"Carne Podre",[s.STICK]:"Graveto",[s.WOODEN_SWORD]:"Espada de Madeira",[s.WOODEN_PICKAXE]:"Picareta de Madeira",[s.STONE_SWORD]:"Espada de Pedra",[s.STONE_PICKAXE]:"Picareta de Pedra",[s.IRON_INGOT]:"Barra de Ferro",[s.COOKED_PORKCHOP]:"Bife de Porco Assado",[s.IRON_HELMET]:"Capacete de Ferro",[s.IRON_CHESTPLATE]:"Peitoral de Ferro",[s.IRON_LEGGINGS]:"Calças de Ferro",[s.IRON_BOOTS]:"Botas de Ferro",[s.ARROW]:"Flecha",[s.BONE]:"Osso",[s.STRING]:"Linha de Teia",[s.SPIDER_EYE]:"Olho de Aranha",[s.BOW]:"Arco e Flecha",[s.WOODEN_HOE]:"Enxada de Madeira",[s.STONE_HOE]:"Enxada de Pedra",[s.IRON_HOE]:"Enxada de Ferro",[s.WHEAT_SEEDS]:"Sementes de Trigo",[s.WHEAT]:"Trigo",[s.BREAD]:"Pão Dourado",[s.GUNPOWDER]:"Pólvora",[s.DIAMOND]:"Gema de Diamante",[s.DIAMOND_SWORD]:"Espada de Diamante",[s.DIAMOND_PICKAXE]:"Picareta de Diamante",[s.DIAMOND_HELMET]:"Capacete de Diamante",[s.DIAMOND_CHESTPLATE]:"Peitoral de Diamante",[s.DIAMOND_LEGGINGS]:"Calças de Diamante",[s.DIAMOND_BOOTS]:"Botas de Diamante",[s.MUTTON]:"Carneiro Cru",[s.COOKED_MUTTON]:"Carneiro Assado",[s.GRAVEL]:"Cascalho",[s.NETHERRACK]:"Rocha do Nether",[s.SOUL_SAND]:"Areia das Almas",[s.GLOWSTONE]:"Pedra Luminosa (Glowstone)",[s.NETHER_QUARTZ_ORE]:"Minério de Quartzo do Nether",[s.QUARTZ_BLOCK]:"Bloco de Quartzo Polido",[s.NETHER_PORTAL]:"Portal do Nether",[s.FLINT]:"Pederneira",[s.FLINT_AND_STEEL]:"Isqueiro de Pederneira",[s.QUARTZ]:"Cristal de Quartzo",[s.REDSTONE_ORE]:"Minério de Redstone",[s.REDSTONE_WIRE]:"Fio de Redstone",[s.REDSTONE_TORCH]:"Tocha de Redstone",[s.LEVER]:"Alavanca de Redstone",[s.PRESSURE_PLATE]:"Placa de Pressão de Pedra",[s.WOODEN_DOOR_BOTTOM]:"Porta de Madeira",[s.WOODEN_DOOR_TOP]:"Porta de Madeira (Topo)",[s.IRON_DOOR_BOTTOM]:"Porta de Ferro",[s.IRON_DOOR_TOP]:"Porta de Ferro (Topo)",[s.ENCHANTING_TABLE]:"Mesa de Encantamentos",[s.MOSSY_COBBLESTONE]:"Pedregulho com Musgo",[s.MONSTER_SPAWNER]:"Gerador de Monstros (Spawner)",[s.BOOKSHELF]:"Estante de Livros",[s.REDSTONE_DUST]:"Pó de Redstone",[s.WOODEN_SHIELD]:"Escudo de Carvalho",[s.IRON_SHIELD]:"Escudo Reforçado de Ferro",[s.BOOK]:"Livro Arcano",[s.GOLDEN_APPLE]:"Maçã Dourada Encantada",[s.BOAT]:"Barco de Carvalho",[s.EXPERIENCE_BOTTLE]:"Frasco de Experiência"},Ks={[s.GRASS]:{top:0,side:1,bottom:2},[s.DIRT]:{top:2,side:2,bottom:2},[s.STONE]:{top:3,side:3,bottom:3},[s.SAND]:{top:4,side:4,bottom:4},[s.SNOW]:{top:5,side:13,bottom:2},[s.WOOD_LOG]:{top:7,side:6,bottom:7},[s.LEAVES]:{top:8,side:8,bottom:8},[s.COAL_ORE]:{top:9,side:9,bottom:9},[s.IRON_ORE]:{top:10,side:10,bottom:10},[s.WATER]:{top:11,side:11,bottom:11},[s.CACTUS]:{top:14,side:15,bottom:14},[s.WOOD_PLANKS]:{top:16,side:16,bottom:16},[s.COBBLESTONE]:{top:17,side:17,bottom:17},[s.FLOWER_RED]:{top:18,side:18,bottom:18},[s.FLOWER_YELLOW]:{top:19,side:19,bottom:19},[s.CRAFTING_TABLE]:{top:20,side:21,bottom:16},[s.TORCH]:{top:22,side:22,bottom:22},[s.FURNACE]:{top:3,side:23,bottom:3},[s.FURNACE_LIT]:{top:3,side:25,bottom:3},[s.CHEST]:{top:26,side:27,bottom:16},[s.FARMLAND]:{top:28,side:29,bottom:2},[s.WHEAT_STAGE_1]:{top:30,side:30,bottom:30},[s.WHEAT_STAGE_2]:{top:31,side:31,bottom:31},[s.WHEAT_STAGE_3]:{top:32,side:32,bottom:32},[s.TNT]:{top:33,side:34,bottom:35},[s.LAVA]:{top:36,side:36,bottom:36},[s.DIAMOND_ORE]:{top:37,side:37,bottom:37},[s.OBSIDIAN]:{top:38,side:38,bottom:38},[s.BED]:{top:39,side:40,bottom:16},[s.WOOL]:{top:41,side:41,bottom:41},[s.GRAVEL]:{top:42,side:42,bottom:42},[s.NETHERRACK]:{top:43,side:43,bottom:43},[s.SOUL_SAND]:{top:44,side:44,bottom:44},[s.GLOWSTONE]:{top:45,side:45,bottom:45},[s.NETHER_QUARTZ_ORE]:{top:46,side:46,bottom:46},[s.QUARTZ_BLOCK]:{top:47,side:47,bottom:47},[s.NETHER_PORTAL]:{top:48,side:48,bottom:48},[s.REDSTONE_ORE]:{top:49,side:49,bottom:49},[s.REDSTONE_WIRE]:{top:50,side:50,bottom:50},[s.REDSTONE_TORCH]:{top:51,side:51,bottom:51},[s.LEVER]:{top:52,side:52,bottom:52},[s.PRESSURE_PLATE]:{top:53,side:53,bottom:53},[s.WOODEN_DOOR_BOTTOM]:{top:54,side:54,bottom:54},[s.WOODEN_DOOR_TOP]:{top:55,side:55,bottom:55},[s.IRON_DOOR_BOTTOM]:{top:56,side:56,bottom:56},[s.IRON_DOOR_TOP]:{top:57,side:57,bottom:57},[s.ENCHANTING_TABLE]:{top:58,side:59,bottom:38},[s.MOSSY_COBBLESTONE]:{top:60,side:60,bottom:60},[s.MONSTER_SPAWNER]:{top:61,side:61,bottom:61},[s.BOOKSHELF]:{top:16,side:62,bottom:16}};function zu(t){return t>s.AIR&&t<100&&t!==s.WATER&&t!==s.LAVA&&t!==s.NETHER_PORTAL&&t!==s.FLOWER_RED&&t!==s.FLOWER_YELLOW&&t!==s.TORCH&&t!==s.REDSTONE_WIRE&&t!==s.REDSTONE_TORCH&&t!==s.LEVER&&t!==s.PRESSURE_PLATE&&t!==s.WHEAT_STAGE_1&&t!==s.WHEAT_STAGE_2&&t!==s.WHEAT_STAGE_3}function GE(t){return t>=s.GRASS&&t<100}function Sl(t){return t===s.DIAMOND_SWORD||t===s.IRON_SWORD||t===s.STONE_SWORD||t===s.WOODEN_SWORD||t===s.BOW}function HE(t){return t===s.WOODEN_DOOR_BOTTOM||t===s.WOODEN_DOOR_TOP||t===s.IRON_DOOR_BOTTOM||t===s.IRON_DOOR_TOP}function kE(t){return t===s.DIAMOND_PICKAXE||t===s.IRON_PICKAXE||t===s.STONE_PICKAXE||t===s.WOODEN_PICKAXE}function Xh(t){return t===s.IRON_HOE||t===s.STONE_HOE||t===s.WOODEN_HOE}function WE(t){return t===s.PORKCHOP||t===s.COOKED_PORKCHOP||t===s.MUTTON||t===s.COOKED_MUTTON||t===s.ROTTEN_FLESH||t===s.BREAD||t===s.GOLDEN_APPLE}function VE(t){return t===s.IRON_HELMET||t===s.IRON_CHESTPLATE||t===s.IRON_LEGGINGS||t===s.IRON_BOOTS||t===s.DIAMOND_HELMET||t===s.DIAMOND_CHESTPLATE||t===s.DIAMOND_LEGGINGS||t===s.DIAMOND_BOOTS}function zE(t){switch(t){case s.DIAMOND_HELMET:return 3;case s.DIAMOND_CHESTPLATE:return 8;case s.DIAMOND_LEGGINGS:return 6;case s.DIAMOND_BOOTS:return 3;case s.IRON_HELMET:return 2;case s.IRON_CHESTPLATE:return 6;case s.IRON_LEGGINGS:return 5;case s.IRON_BOOTS:return 2;default:return 0}}function XE(t){switch(t){case s.GOLDEN_APPLE:return 10;case s.COOKED_PORKCHOP:return 8;case s.COOKED_MUTTON:return 6;case s.BREAD:return 5;case s.PORKCHOP:return 3;case s.MUTTON:return 2;case s.ROTTEN_FLESH:return 1;default:return 0}}function KE(t){return t===s.AIR||t===s.WATER||t===s.LAVA||t===s.FLOWER_RED||t===s.FLOWER_YELLOW||t===s.TORCH||t===s.REDSTONE_WIRE||t===s.REDSTONE_TORCH||t===s.LEVER||t===s.PRESSURE_PLATE||t===s.WOODEN_DOOR_BOTTOM||t===s.WOODEN_DOOR_TOP||t===s.IRON_DOOR_BOTTOM||t===s.IRON_DOOR_TOP||t===s.WHEAT_STAGE_1||t===s.WHEAT_STAGE_2||t===s.WHEAT_STAGE_3||t>=100}function qE(t){switch(t){case s.LEAVES:case s.FLOWER_RED:case s.FLOWER_YELLOW:case s.WHEAT_STAGE_1:case s.WHEAT_STAGE_2:case s.WHEAT_STAGE_3:return .15;case s.DIRT:case s.GRASS:case s.SAND:case s.SNOW:case s.FARMLAND:return .55;case s.TNT:case s.BED:case s.WOOL:return .4;case s.WOOD_LOG:case s.WOOD_PLANKS:case s.CRAFTING_TABLE:case s.CHEST:case s.CACTUS:return 1.4;case s.STONE:case s.COBBLESTONE:case s.FURNACE:case s.FURNACE_LIT:return 2.5;case s.COAL_ORE:case s.IRON_ORE:return 3.5;case s.DIAMOND_ORE:return 4.5;case s.OBSIDIAN:return 9;case s.GRAVEL:return .6;case s.NETHERRACK:return .8;case s.SOUL_SAND:return .7;case s.GLOWSTONE:return .5;case s.NETHER_QUARTZ_ORE:return 3;case s.QUARTZ_BLOCK:return 2;case s.TORCH:case s.NETHER_PORTAL:return .05;default:return 1}}function YE(t,e){const n=e===s.DIAMOND_PICKAXE,i=e===s.IRON_PICKAXE,r=e===s.STONE_PICKAXE,o=e===s.WOODEN_PICKAXE,a=e===s.DIAMOND_SWORD,l=e===s.IRON_SWORD,c=e===s.STONE_SWORD,u=e===s.WOODEN_SWORD;return t===s.OBSIDIAN?n?4:.2:t===s.DIAMOND_ORE||t===s.NETHER_QUARTZ_ORE?n?8:i?6:.4:t===s.NETHERRACK||t===s.GLOWSTONE||t===s.QUARTZ_BLOCK?n?12:i?9:r?6:2.5:t===s.STONE||t===s.COBBLESTONE||t===s.COAL_ORE||t===s.IRON_ORE||t===s.FURNACE||t===s.FURNACE_LIT?n?9.5:i?6.5:r?4.2:o?2.6:.65:t===s.LEAVES||t===s.WOOL||t===s.FLOWER_RED||t===s.FLOWER_YELLOW||t===s.WHEAT_STAGE_1||t===s.WHEAT_STAGE_2||t===s.WHEAT_STAGE_3?a?8.5:l||c||u?6:2:t===s.WOOD_LOG||t===s.WOOD_PLANKS||t===s.CRAFTING_TABLE||t===s.CHEST||t===s.BED?n?2.2:i||r||o?1.6:1:1}function Kh(t){switch(t){case s.STONE:return s.COBBLESTONE;case s.GRASS:return s.DIRT;case s.COAL_ORE:return s.COAL_ORE;case s.IRON_ORE:return s.IRON_ORE;case s.DIAMOND_ORE:return s.DIAMOND;case s.OBSIDIAN:return s.OBSIDIAN;case s.GRAVEL:return Math.random()<.25?s.FLINT:s.GRAVEL;case s.NETHERRACK:return s.NETHERRACK;case s.SOUL_SAND:return s.SOUL_SAND;case s.GLOWSTONE:return s.GLOWSTONE;case s.NETHER_QUARTZ_ORE:return s.QUARTZ;case s.QUARTZ_BLOCK:return s.QUARTZ_BLOCK;case s.NETHER_PORTAL:return s.AIR;case s.FURNACE:case s.FURNACE_LIT:return s.FURNACE;case s.FARMLAND:return s.DIRT;case s.WHEAT_STAGE_3:return s.WHEAT;case s.WHEAT_STAGE_1:case s.WHEAT_STAGE_2:return s.WHEAT_SEEDS;case s.LEAVES:return Math.random()<.35?s.LEAVES:0;case s.TNT:return s.TNT;case s.BED:return s.BED;case s.WOOL:return s.WOOL;case s.REDSTONE_ORE:return s.REDSTONE_DUST;case s.REDSTONE_WIRE:return s.REDSTONE_DUST;case s.REDSTONE_TORCH:return s.REDSTONE_TORCH;case s.LEVER:return s.LEVER;case s.PRESSURE_PLATE:return s.PRESSURE_PLATE;case s.WOODEN_DOOR_BOTTOM:case s.WOODEN_DOOR_TOP:return s.WOODEN_DOOR_BOTTOM;case s.IRON_DOOR_BOTTOM:case s.IRON_DOOR_TOP:return s.IRON_DOOR_BOTTOM;case s.ENCHANTING_TABLE:return s.ENCHANTING_TABLE;case s.MOSSY_COBBLESTONE:return s.MOSSY_COBBLESTONE;case s.BOOKSHELF:return s.BOOK;case s.MONSTER_SPAWNER:return s.AIR;default:return t}}const Ae=16,xt=64,$E=[{name:"top",dir:[0,1,0],colorKey:"top",vertices:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"bottom",dir:[0,-1,0],colorKey:"bottom",vertices:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"north",dir:[0,0,-1],colorKey:"side",vertices:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"south",dir:[0,0,1],colorKey:"side",vertices:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"east",dir:[1,0,0],colorKey:"side",vertices:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"west",dir:[-1,0,0],colorKey:"side",vertices:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]}];let sc=null,ac=null;function ZE(){return sc||(sc=new be({map:xl(),alphaTest:.2,side:Bn})),sc}function jE(){return ac||(ac=new be({map:xl(),transparent:!0,opacity:.65,side:Bn,depthWrite:!1})),ac}class QE{constructor(e=0,n=0,i=0){this.cx=e,this.cy=n,this.cz=i,this.blocks=new Uint8Array(Ae*Ae*xt),this.mesh=null}_index(e,n,i){return e+i*Ae+n*Ae*Ae}getBlock(e,n,i){return e<0||e>=Ae||n<0||n>=xt||i<0||i>=Ae?s.AIR:this.blocks[this._index(e,n,i)]}setBlock(e,n,i,r){e<0||e>=Ae||n<0||n>=xt||i<0||i>=Ae||(this.blocks[this._index(e,n,i)]=r)}buildMesh(e){const n=[],i=[],r=[],o=[],a=[],l=[],c=[],u=[];let d=0,h=0;const f=this.cx*Ae,p=this.cy*xt,g=this.cz*Ae;for(let m=0;m<xt;m++)for(let A=0;A<Ae;A++)for(let M=0;M<Ae;M++){const S=this.getBlock(M,m,A);if(S===s.AIR)continue;const D=S===s.WATER,R=Ks[S];if(!R)continue;const w=S===s.FLOWER_RED||S===s.FLOWER_YELLOW||S===s.WHEAT_STAGE_1||S===s.WHEAT_STAGE_2||S===s.WHEAT_STAGE_3,I=S===s.TORCH;if(w){const T=R.top,E=Ns(T),O=[[[.12,0,.12,0,0],[.88,0,.88,1,0],[.88,1,.88,1,1],[.12,1,.12,0,1]],[[.12,0,.88,0,0],[.88,0,.12,1,0],[.88,1,.12,1,1],[.12,1,.88,0,1]]];for(const k of O){for(let B=0;B<4;B++){const[Y,q,K,J,z]=k[B];n.push(M+Y,m+q,A+K),i.push(0,1,0),r.push(E.uMin+J*(E.uMax-E.uMin),E.vMin+z*(E.vMax-E.vMin))}o.push(d,d+1,d+2,d,d+2,d+3),d+=4}continue}if(I){const T=R.top,E=Ns(T),O=.42,k=.58,B=.42,Y=.58,q=0,K=.65,J=[[[O,K,Y,0,0],[k,K,Y,1,0],[k,K,B,1,1],[O,K,B,0,1],0,1,0],[[O,q,Y,0,1],[k,q,Y,1,1],[k,K,Y,1,0],[O,K,Y,0,0],0,0,1],[[k,q,B,0,1],[O,q,B,1,1],[O,K,B,1,0],[k,K,B,0,0],0,0,-1],[[O,q,B,0,1],[O,q,Y,1,1],[O,K,Y,1,0],[O,K,B,0,0],-1,0,0],[[k,q,Y,0,1],[k,q,B,1,1],[k,K,B,1,0],[k,K,Y,0,0],1,0,0]];for(const z of J){for(let oe=0;oe<4;oe++){const[ae,ve,Fe,tt,$]=z[oe];n.push(M+ae,m+ve,A+Fe),i.push(z[4],z[5],z[6]),r.push(E.uMin+tt*(E.uMax-E.uMin),E.vMin+$*(E.vMax-E.vMin))}o.push(d,d+1,d+2,d,d+2,d+3),d+=4}continue}for(const T of $E){const E=M+T.dir[0],O=m+T.dir[1],k=A+T.dir[2];let B;if(E>=0&&E<Ae&&O>=0&&O<xt&&k>=0&&k<Ae?B=this.getBlock(E,O,k):e?B=e(f+E,p+O,g+k):B=s.AIR,D){if(B!==s.AIR)continue}else if(!KE(B))continue;const Y=R[T.colorKey],q=Ns(Y),K=D?a:n,J=D?l:i,z=D?c:r,oe=D?u:o,ae=D?h:d;for(let ve=0;ve<4;ve++){const Fe=T.vertices[ve];K.push(M+Fe[0],m+Fe[1],A+Fe[2]),J.push(T.dir[0],T.dir[1],T.dir[2]);const tt=T.localUVs[ve][0],$=T.localUVs[ve][1];z.push(q.uMin+tt*(q.uMax-q.uMin),q.vMin+$*(q.vMax-q.vMin))}oe.push(ae,ae+1,ae+2,ae,ae+2,ae+3),D?h+=4:d+=4}}let v=this._makeMesh(n,i,r,o,ZE());v.position.set(f,p,g),this.mesh=v;let _=null;return a.length>0&&(_=this._makeMesh(a,l,c,u,jE()),_.position.set(f,p,g),_.renderOrder=1),{solidMesh:v,waterMesh:_}}_makeMesh(e,n,i,r,o){const a=new an;return a.setAttribute("position",new wt(e,3)),a.setAttribute("normal",new wt(n,3)),a.setAttribute("uv",new wt(i,2)),a.setIndex(r),new F(a,o)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null)}}const Gn=new Map,el=new Map,tl=new Map,_n=18,er=5,JE=7;let yd=NaN,Td=NaN;const lc=[];function Ln(t,e){let n=t*374761393+e*668265263+1234567|0;return n=(n^n>>13)*1274126177|0,(n&2147483647)/2147483647}function eM(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,o=e-i,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Ln(n,i),u=Ln(n+1,i),d=Ln(n,i+1),h=Ln(n+1,i+1),f=c*(1-a)+u*a,p=d*(1-a)+h*a;return f*(1-l)+p*l}function Wo(t,e,n=4,i=.5,r=2){let o=0,a=1,l=1,c=0;for(let u=0;u<n;u++)o+=eM(t*a,e*a)*l,c+=l,l*=i,a*=r;return o/c}const at={OCEAN:"ocean",PLAINS:"plains",FOREST:"forest",DESERT:"desert",SNOWY_MOUNTAINS:"snowy_mountains"};function Zo(t,e){const n=Wo(t*.0025,e*.0025,3);if(n<.32)return at.OCEAN;const i=Wo(t*.0035+150,e*.0035+150,3),r=Wo(t*.004+300,e*.004+300,3);return n>.58&&i<.38?at.SNOWY_MOUNTAINS:i>.62&&r<.48?at.DESERT:r>.52?at.FOREST:at.PLAINS}function rr(t,e){const n=Zo(t,e),i=Wo(t*.025,e*.025,3);switch(n){case at.OCEAN:{const r=Wo(t*.01,e*.01,2),o=_n-2-r*10+i*3;return Math.max(3,Math.min(xt-6,Math.floor(o)))}case at.DESERT:{const o=21+(Math.sin(t*.03+e*.015)*4+Math.cos(e*.03)*3)+i*2.5;return Math.max(_n+1,Math.min(xt-6,Math.floor(o)))}case at.SNOWY_MOUNTAINS:{const r=Wo(t*.015,e*.015,4),o=28+Math.pow(r,1.8)*32+i*4;return Math.max(24,Math.min(xt-4,Math.floor(o)))}case at.FOREST:{const o=23+(Math.sin(t*.022)*5+Math.cos(e*.028)*4+Math.sin((t-e)*.035)*2.5)+i*3;return Math.max(_n+1,Math.min(xt-6,Math.floor(o)))}case at.PLAINS:default:{const o=22+(Math.sin(t*.02)*4+Math.cos(e*.025)*4+Math.sin((t+e)*.04)*2)+i*2.5;return Math.max(_n+1,Math.min(xt-6,Math.floor(o)))}}}function Ad(t,e,n,i,r){for(let a=i;a<i+r;a++)a<xt&&t.setBlock(e,a,n,s.WOOD_LOG);const o=i+r-1;for(let a=0;a<3;a++){const l=a<2?2:1;for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(Math.abs(c)===l&&Math.abs(u)===l&&a<2)continue;const d=e+c,h=o+a,f=n+u;d>=0&&d<Ae&&h>=0&&h<xt&&f>=0&&f<Ae&&t.getBlock(d,h,f)===s.AIR&&t.setBlock(d,h,f,s.LEAVES)}}}function tM(t,e,n,i,r){for(let a=i;a<i+r;a++)a<xt&&t.setBlock(e,a,n,s.WOOD_LOG);const o=i+r;for(let a=i+2;a<=o+1;a++){const c=(o+1-a)%2===0?2:1;for(let u=-c;u<=c;u++)for(let d=-c;d<=c;d++){if(Math.abs(u)===c&&Math.abs(d)===c&&c>1)continue;const h=e+u,f=a,p=n+d;h>=0&&h<Ae&&f>=0&&f<xt&&p>=0&&p<Ae&&t.getBlock(h,f,p)===s.AIR&&t.setBlock(h,f,p,s.LEAVES)}}}function nM(t,e,n,i,r){for(let o=i;o<i+r;o++)o<xt&&t.getBlock(e,o,n)===s.AIR&&t.setBlock(e,o,n,s.CACTUS)}function cc(t,e,n,i,r){e>=0&&e<Ae&&i>=0&&i<Ae&&n<xt&&t.getBlock(e,n,i)===s.AIR&&t.setBlock(e,n,i,r)}function zi(t,e,n){let i=t*374761393+e*668265263+n*982451653+1234567|0;return i=(i^i>>13)*1274126177|0,(i&2147483647)/2147483647}function bd(t,e,n){const i=Math.floor(t),r=Math.floor(e),o=Math.floor(n),a=t-i,l=e-r,c=n-o,u=a*a*(3-2*a),d=l*l*(3-2*l),h=c*c*(3-2*c),f=zi(i,r,o),p=zi(i+1,r,o),g=zi(i,r+1,o),v=zi(i+1,r+1,o),_=zi(i,r,o+1),m=zi(i+1,r,o+1),A=zi(i,r+1,o+1),M=zi(i+1,r+1,o+1),S=f*(1-u)+p*u,D=g*(1-u)+v*u,R=_*(1-u)+m*u,w=A*(1-u)+M*u,I=S*(1-d)+D*d,T=R*(1-d)+w*d;return I*(1-h)+T*h}function qh(t,e,n,i){if(e<2||e>i||i<=_n+1&&e>=i-2)return!1;const r=bd(t*.045,e*.075,n*.045)-.5,o=bd(t*.045+137,e*.075+137,n*.045+137)-.5;return r*r+o*o<.022}function Yh(t,e){const n=new QE(t,0,e),i=t*Ae,r=e*Ae;for(let a=0;a<Ae;a++)for(let l=0;l<Ae;l++){const c=i+l,u=r+a,d=rr(c,u),h=Zo(c,u);for(let f=0;f<=d;f++){let p;f===0||f<d-4?p=s.STONE:f<d?h===at.DESERT||h===at.OCEAN&&d<=_n+1?p=s.SAND:p=s.DIRT:h===at.DESERT?p=s.SAND:h===at.SNOWY_MOUNTAINS?p=d>=36?s.SNOW:s.GRASS:h===at.OCEAN||d<=_n+1?p=s.SAND:p=s.GRASS,f>=2&&qh(c,f,u,d)&&(f<=8?p=s.LAVA:f<=_n-8?p=s.WATER:p=s.AIR),n.setBlock(l,f,a,p)}for(let f=d+1;f<=_n;f++)n.getBlock(l,f,a)===s.AIR&&n.setBlock(l,f,a,s.WATER)}for(let a=1;a<Ae-1;a++)for(let l=1;l<Ae-1;l++){const c=i+l,u=r+a,d=rr(c,u),h=Zo(c,u),f=n.getBlock(l,d,a),p=Ln(c,u);if(d>_n){if(h===at.PLAINS&&f===s.GRASS)if(p<.025&&l>=2&&l<Ae-2&&a>=2&&a<Ae-2){const g=4+Math.floor(Ln(c+555,u+777)*3);d+g+4<xt&&Ad(n,l,a,d+1,g)}else p>.94&&p<.97?cc(n,l,d+1,a,s.FLOWER_RED):p>=.97&&cc(n,l,d+1,a,s.FLOWER_YELLOW);else if(h===at.FOREST&&f===s.GRASS)if(p<.085&&l>=2&&l<Ae-2&&a>=2&&a<Ae-2){const g=4+Math.floor(Ln(c+444,u+666)*4);d+g+4<xt&&Ad(n,l,a,d+1,g)}else p>.96&&cc(n,l,d+1,a,s.FLOWER_RED);else if(h===at.DESERT&&f===s.SAND){if(p<.028){const g=2+(p>.015?1:0);nM(n,l,a,d+1,g)}}else if(h===at.SNOWY_MOUNTAINS&&(f===s.GRASS||f===s.SNOW)&&p<.035&&l>=2&&l<Ae-2&&a>=2&&a<Ae-2){const g=5+Math.floor(Ln(c+333,u+888)*4);d+g+4<xt&&tM(n,l,a,d+1,g)}}}for(let a=0;a<Ae;a++)for(let l=0;l<Ae;l++){const c=i+l,u=r+a,d=rr(c,u);for(let h=1;h<d-3;h++)if(n.getBlock(l,h,a)===s.STONE){const f=Ln(c*31+h*97,u*53+h*13);h<=16&&f>.992?n.setBlock(l,h,a,s.DIAMOND_ORE):h<=16&&f>.987?n.setBlock(l,h,a,s.REDSTONE_ORE):f<.018?n.setBlock(l,h,a,s.COAL_ORE):f>.982?n.setBlock(l,h,a,s.IRON_ORE):f>.965&&f<=.982&&n.setBlock(l,h,a,s.GRAVEL)}}if(Ln(t*911+43,e*317+89)>.92){for(let l=4;l<=11;l++)for(let c=4;c<=11;c++)for(let u=12;u<=16;u++)if(u===12||u===16||(l===4||l===11||c===4||c===11)){const p=Ln(i+l,r+c+u)>.5;n.setBlock(l,u,c,p?s.MOSSY_COBBLESTONE:s.COBBLESTONE)}else n.setBlock(l,u,c,s.AIR);n.setBlock(7,13,7,s.MONSTER_SPAWNER),n.setBlock(5,13,7,s.CHEST),n.setBlock(10,13,7,s.CHEST)}return n}function Dt(t,e,n){if(e<0||e>=xt)return s.AIR;const i=Math.floor(t/Ae),r=Math.floor(n/Ae),o=`${i},0,${r}`,a=Gn.get(o);if(a){const c=(t%Ae+Ae)%Ae,u=(n%Ae+Ae)%Ae;return a.getBlock(c,e,u)}const l=rr(t,n);if(e>l)return e<=_n?s.WATER:s.AIR;if(e>=2&&qh(t,e,n,l))return e<=8?s.LAVA:e<=_n-8?s.WATER:s.AIR;if(e===l){const c=Zo(t,n);return c===at.DESERT||l<=_n+1?s.SAND:c===at.SNOWY_MOUNTAINS&&l>=36?s.SNOW:s.GRASS}return e>=l-4?Zo(t,n)===at.DESERT?s.SAND:s.DIRT:s.STONE}function Ps(t,e,n){return zu(Dt(t,e,n))}function El(t,e){const n=`${t.cx},0,${t.cz}`,i=el.get(n),r=tl.get(n);i&&(e.remove(i),i.geometry.dispose()),r&&(e.remove(r),r.geometry.dispose());const{solidMesh:o,waterMesh:a}=t.buildMesh(Dt);el.set(n,o),e.add(o),a&&(tl.set(n,a),e.add(a))}function iM(t){console.log("[World] Generating starting biomes and chunks...");for(let e=-er;e<=er;e++)for(let n=-er;n<=er;n++){const i=Yh(n,e);Gn.set(`${n},0,${e}`,i)}for(const e of Gn.values())El(e,t);console.log(`[World] Ready! ${Gn.size} chunks generated.`)}function Rd(t,e){if(!e)return;const n=Math.floor(t.x/Ae),i=Math.floor(t.z/Ae);if(n!==yd||i!==Td){yd=n,Td=i;for(const[o,a]of Gn.entries())if(Math.max(Math.abs(a.cx-n),Math.abs(a.cz-i))>JE){const c=el.get(o),u=tl.get(o);c&&(e.remove(c),c.geometry.dispose(),el.delete(o)),u&&(e.remove(u),u.geometry.dispose(),tl.delete(o)),a.dispose(),Gn.delete(o)}for(let o=-er;o<=er;o++)for(let a=-er;a<=er;a++){const l=n+a,c=i+o,u=`${l},0,${c}`;if(!Gn.has(u)){const d=Yh(l,c);Gn.set(u,d),lc.push(d)}}}const r=Math.min(2,lc.length);for(let o=0;o<r;o++){const a=lc.shift();Gn.has(`${a.cx},0,${a.cz}`)&&El(a,e)}}function Xu(){return{x:.5,y:rr(0,0)+2,z:.5}}function Hn(t,e,n,i,r){if(n<0||n>=xt)return;if(r===s.WATER){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,p,g]of h)Dt(f,p,g)===s.LAVA&&Hn(t,f,p,g,s.OBSIDIAN)}else if(r===s.LAVA){const h=[[e+1,n,i],[e-1,n,i],[e,n+1,i],[e,n-1,i],[e,n,i+1],[e,n,i-1]];for(const[f,p,g]of h)if(Dt(f,p,g)===s.WATER){r=s.OBSIDIAN;break}}const o=Math.floor(e/Ae),a=Math.floor(i/Ae),l=`${o},0,${a}`,c=Gn.get(l);if(!c)return;const u=(e%Ae+Ae)%Ae,d=(i%Ae+Ae)%Ae;c.setBlock(u,n,d,r),El(c,t),u===0&&Ia(t,o-1,a),u===Ae-1&&Ia(t,o+1,a),d===0&&Ia(t,o,a-1),d===Ae-1&&Ia(t,o,a+1)}function Ia(t,e,n){const i=Gn.get(`${e},0,${n}`);i&&El(i,t)}const _s=6;function rM(t,e){const n=e.clone().normalize();let i=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const a=n.x>=0?1:-1,l=n.y>=0?1:-1,c=n.z>=0?1:-1,u=n.x!==0?Math.abs(1/n.x):1/0,d=n.y!==0?Math.abs(1/n.y):1/0,h=n.z!==0?Math.abs(1/n.z):1/0;let f=n.x!==0?(n.x>0?i+1-t.x:t.x-i)*u:1/0,p=n.y!==0?(n.y>0?r+1-t.y:t.y-r)*d:1/0,g=n.z!==0?(n.z>0?o+1-t.z:t.z-o)*h:1/0,v=i,_=r,m=o,A=0,M=0,S=0;for(let D=0;D<_s*3;D++){if(r>=0&&r<xt){const R=Dt(i,r,o);if(zu(R))return{hit:{x:i,y:r,z:o},normal:{x:A,y:M,z:S},prev:{x:v,y:_,z:m}}}if(v=i,_=r,m=o,f<p)if(f<g){if(f>_s)break;i+=a,f+=u,A=-a,M=0,S=0}else{if(g>_s)break;o+=c,g+=h,A=0,M=0,S=-c}else if(p<g){if(p>_s)break;r+=l,p+=d,A=0,M=-l,S=0}else{if(g>_s)break;o+=c,g+=h,A=0,M=0,S=-c}}return null}const oM=480;let ci=.2,nl=null,il=null,Do=null,Ri=null,qi=null,Ro=null;const sM={dawn:new we(16096779),morning:new we(9684477),noon:new we(6333946),sunset:new we(14753096),dusk:new we(4405450),midnight:new we(329750),predawn:new we(1973067)},aM={dawn:new we(16498468),morning:new we(9684477),noon:new we(7911912),sunset:new we(16007006),dusk:new we(3223169),midnight:new we(329489),predawn:new we(1973067)};function lM(t,e={}){Ri=e.dirLight||null,qi=e.hemiLight||null,Ro=e.ambientLight||null,Do=new Xe,t.add(Do);const n=new G(20,20,20),i=new xn({color:16776171});nl=new F(n,i),Do.add(nl);const r=new G(16,16,16),o=new xn({color:15857145});il=new F(r,o),Do.add(il),$h(0,t,null)}function wd(t,e,n,i=null){ci+=t/oM,ci>=1&&(ci-=1),n&&Do&&Do.position.copy(n.position);const r=ci*Math.PI*2-Math.PI/2,o=260,a=Math.cos(r)*o,l=Math.sin(r)*o,c=20;nl&&nl.position.set(a,l,c),il&&il.position.set(-a,-l,-c),Ri&&(jo()?Ri.position.set(a,Math.max(15,l),c):Ri.position.set(-a,Math.max(15,-l),-c)),$h(t,e,i)}function Od(t,e){if(e<.15){const n=e/.15;return t.dawn.clone().lerp(t.morning,n)}else if(e<.25){const n=(e-.15)/.1;return t.morning.clone().lerp(t.noon,n)}else if(e<.5){const n=(e-.25)/.25;return t.noon.clone().lerp(t.sunset,n)}else if(e<.58){const n=(e-.5)/.08;return t.sunset.clone().lerp(t.dusk,n)}else if(e<.75){const n=(e-.58)/.17;return t.dusk.clone().lerp(t.midnight,n)}else if(e<.92){const n=(e-.75)/.17;return t.midnight.clone().lerp(t.predawn,n)}else{const n=(e-.92)/.08;return t.predawn.clone().lerp(t.dawn,n)}}function $h(t,e,n){const i=Od(sM,ci),r=Od(aM,ci);e&&e.fog&&e.fog.color.copy(r),n&&n.setClearColor(i);const o=Math.sin(ci*Math.PI*2);Ri&&(o>0?(Ri.color.set(16774624),Ri.intensity=.4+o*.85):(Ri.color.set(9741240),Ri.intensity=Math.max(.12,-o*.28))),qi&&(o>0?(qi.color.set(8900331),qi.groundColor.set(5596723),qi.intensity=.3+o*.4):(qi.color.set(1976635),qi.groundColor.set(988970),qi.intensity=.15)),Ro&&(o>0?(Ro.color.set(16777215),Ro.intensity=.25+o*.2):(Ro.color.set(6583435),Ro.intensity=.12))}function jo(){return ci<.5}function cM(){return!jo()}function uM(){const t=(ci*24+6)%24,e=Math.floor(t),n=Math.floor((t-e)*60),i=e<10?"0"+e:""+e,r=n<10?"0"+n:""+n;return`${i}:${r}`}function fM(){ci=.05}const dM={[s.GRASS]:5938743,[s.DIRT]:9136404,[s.STONE]:8947848,[s.SAND]:15259274,[s.SNOW]:15790320,[s.WOOD_LOG]:7029286,[s.LEAVES]:3832352,[s.COAL_ORE]:4473924,[s.IRON_ORE]:12096874,[s.WATER]:3702992,[s.CACTUS]:1483594,[s.WOOD_PLANKS]:11817737,[s.COBBLESTONE]:6583435,[s.FLOWER_RED]:14427686,[s.FLOWER_YELLOW]:15381256,[s.DIAMOND_ORE]:2282478,[s.OBSIDIAN]:1973067,[s.LAVA]:16347926,[s.GRAVEL]:7041664,[s.NETHERRACK]:8330525,[s.SOUL_SAND]:4528643,[s.GLOWSTONE]:16436245,[s.NETHER_QUARTZ_ORE]:16317180,[s.QUARTZ_BLOCK]:15857145,[s.NETHER_PORTAL]:11032055};let hi=null;const to=[],hM=new G(.12,.12,.12),Zh=new G(.08,.08,.08),pM=new G(.09,.09,.09);function mM(t){hi=t}function Su(t,e,n,i){if(!hi)return;const r=dM[i]||11184810,o=12;for(let a=0;a<o;a++){const l=new be({color:r}),c=new F(hM,l);c.position.set(t+.2+Math.random()*.6,e+.2+Math.random()*.6,n+.2+Math.random()*.6);const u=(Math.random()-.5)*4.5,d=Math.random()*4+1.5,h=(Math.random()-.5)*4.5,f=(Math.random()-.5)*10,p=(Math.random()-.5)*10;hi.add(c),to.push({mesh:c,vx:u,vy:d,vz:h,rx:f,ry:p,life:.6+Math.random()*.3,age:0})}}function jh(t,e,n,i=15680580){if(!hi)return;const r=8;for(let o=0;o<r;o++){const a=new be({color:i}),l=new F(Zh,a);l.position.set(t,e,n);const c=(Math.random()-.5)*5,u=Math.random()*3.5+1,d=(Math.random()-.5)*5;hi.add(l),to.push({mesh:l,vx:c,vy:u,vz:d,rx:(Math.random()-.5)*8,ry:(Math.random()-.5)*8,life:.45+Math.random()*.2,age:0})}}function Qh(t,e,n){if(!hi)return;const i=[16436245,16707722,16096779,16777215],r=16;for(let o=0;o<r;o++){const a=i[Math.floor(Math.random()*i.length)],l=new xn({color:a}),c=new F(pM,l);c.position.set(t+(Math.random()-.5)*.4,e+(Math.random()-.5)*.4,n+(Math.random()-.5)*.4);const u=Math.random()*Math.PI*2,d=2.5+Math.random()*3.5,h=Math.cos(u)*d,f=Math.random()*3+1.2,p=Math.sin(u)*d;hi.add(c),to.push({mesh:c,vx:h,vy:f,vz:p,rx:8,ry:8,life:.55+Math.random()*.25,age:0})}}function _M(t,e,n){if(!hi)return;const i=[11032055,12616956,8266446,15324671],r=i[Math.floor(Math.random()*i.length)],o=new xn({color:r}),a=new F(Zh,o);a.position.set(t+(Math.random()-.5)*.8,e+(Math.random()-.5)*.8,n+(Math.random()-.5)*.8);const l=(Math.random()-.5)*.8,c=.4+Math.random()*.8,u=(Math.random()-.5)*.8;hi.add(a),to.push({mesh:a,vx:l,vy:c,vz:u,rx:4,ry:4,life:.8+Math.random()*.4,age:0})}function gM(t){for(let e=to.length-1;e>=0;e--){const n=to[e];if(n.age+=t,n.age>=n.life){hi.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),to.splice(e,1);continue}n.vy-=9.8*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.x+=n.rx*t,n.mesh.rotation.y+=n.ry*t;const i=n.age/n.life,r=Math.max(.01,1-i);n.mesh.scale.set(r,r,r)}}let no=null;const Ur=[],vM=new G(.26,.26,.26),xM=30;function SM(t){no=t}function Vt(t,e,n,i){if(!no)return;let r,o,a,l;if(typeof t=="number"&&typeof i=="number"?(o=t,a=e,l=n,r=i):(r=t,o=e,a=n,l=i),!r||r===s.AIR)return;if(Ur.length>=xM){const h=Ur.shift();h&&h.mesh&&no.remove(h.mesh)}const c=Ks[r]||{side:1};Ns(c.side||0);const u=new be({map:xl()}),d=new F(vM,u);d.position.set(o+(Math.random()-.5)*.2,a+.3,l+(Math.random()-.5)*.2),no.add(d),Ur.push({itemType:r,mesh:d,pos:d.position.clone(),vel:new C((Math.random()-.5)*1.8,3,(Math.random()-.5)*1.8),age:0,bobOffset:Math.random()*Math.PI*2,collected:!1})}function EM(t,e){if(!no)return;const i=pi().clone().add(new C(0,.9,0));for(let r=Ur.length-1;r>=0;r--){const o=Ur[r];if(o.age+=t,o.age>120){no.remove(o.mesh),Ur.splice(r,1);continue}const a=o.pos.distanceTo(i);if(a<2.5&&o.age>.3){const l=Math.min(14,1/(a*.15+.05));if(o.pos.lerp(i,t*l),a<.65&&Kn(o.itemType)){sS(),no.remove(o.mesh),Ur.splice(r,1);continue}}else{o.vel.y-=18*t,o.pos.x+=o.vel.x*t,o.pos.z+=o.vel.z*t,o.pos.y+=o.vel.y*t,o.vel.x*=Math.exp(-6*t),o.vel.z*=Math.exp(-6*t);const l=rr(Math.floor(o.pos.x),Math.floor(o.pos.z))+1.15;o.pos.y<=l&&(o.pos.y=l,o.vel.set(0,0,0))}o.mesh.position.copy(o.pos),o.mesh.position.y+=Math.sin(e*3.5+o.bobOffset)*.06,o.mesh.rotation.y+=t*2.2,o.mesh.rotation.x=Math.sin(e*2+o.bobOffset)*.15}}const Je={PIG:"pig",SHEEP:"sheep",ZOMBIE:"zombie",SKELETON:"skeleton",SPIDER:"spider",CREEPER:"creeper"};let Pt=null;const Vn=[],Rr=[],Ka=[];let uc=0;const MM=10;function yM(t,e,n,i,r,o){const a=i-t,l=r-e,c=o-n,u=Math.hypot(a,l,c);if(u<.3)return!0;const d=Math.ceil(u*2.2),h=a/d,f=l/d,p=c/d;for(let g=1;g<d;g++){const v=Math.floor(t+h*g),_=Math.floor(e+f*g),m=Math.floor(n+p*g);if(Ps(v,_,m))return!1}return!0}function TM(){const t=new Xe,e=new be({color:16020150}),n=new be({color:16478597}),i=new be({color:2042167}),r=new F(new G(.7,.5,.9),e);r.position.set(0,.45,0),t.add(r);const o=new F(new G(.45,.45,.45),e);o.position.set(0,.65,-.55),t.add(o);const a=new F(new G(.24,.16,.12),n);a.position.set(0,.58,-.8),t.add(a);const l=new F(new G(.08,.08,.02),i);l.position.set(-.16,.72,-.78);const c=new F(new G(.08,.08,.02),i);c.position.set(.16,.72,-.78),t.add(l),t.add(c);const u=new G(.18,.35,.18),d=[],h=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const f of h){const p=new F(u,e);p.position.set(...f),t.add(p),d.push(p)}return{group:t,legs:d,head:o,body:r,originalMats:[e,n]}}function AM(){const t=new Xe,e=new be({color:16317180}),n=new be({color:3359061}),i=new be({color:16478597}),r=new be({color:988970}),o=new F(new G(.75,.6,.95),e);o.position.set(0,.5,0),t.add(o);const a=new F(new G(.42,.42,.42),n);a.position.set(0,.68,-.55),t.add(a);const l=new F(new G(.44,.2,.44),e);l.position.set(0,.86,-.55),t.add(l);const c=new F(new G(.22,.14,.12),i);c.position.set(0,.6,-.78),t.add(c);const u=new F(new G(.08,.08,.02),r);u.position.set(-.16,.74,-.76);const d=new F(new G(.08,.08,.02),r);d.position.set(.16,.74,-.76),t.add(u),t.add(d);const h=new G(.16,.36,.16),f=[],p=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const g of p){const v=new F(h,n);v.position.set(...g),t.add(v),f.push(v)}return{group:t,legs:f,head:a,body:o,originalMats:[e,n]}}function bM(){const t=new Xe,e=new be({color:3899966}),n=new be({color:440020}),i=new be({color:1981066}),r=new be({color:988970}),o=new F(new G(.44,.44,.44),e);o.position.set(0,1.45,0),t.add(o);const a=new F(new G(.08,.06,.02),r);a.position.set(-.12,1.48,-.23);const l=new F(new G(.08,.06,.02),r);l.position.set(.12,1.48,-.23),t.add(a),t.add(l);const c=new F(new G(.5,.65,.28),n);c.position.set(0,.9,0),t.add(c);const u=new G(.16,.16,.55),d=new F(u,e);d.position.set(-.35,1.05,-.26);const h=new F(u,e);h.position.set(.35,1.05,-.26),t.add(d),t.add(h);const f=new G(.2,.6,.22),p=new F(f,i);p.position.set(-.13,.3,0);const g=new F(f,i);return g.position.set(.13,.3,0),t.add(p),t.add(g),{group:t,legs:[p,g],arms:[d,h],head:o,body:c,originalMats:[e,n,i]}}function RM(){const t=new Xe,e=new be({color:13751771}),n=new be({color:988970}),i=new be({color:7877903}),r=new F(new G(.42,.42,.42),e);r.position.set(0,1.45,0),t.add(r);const o=new F(new G(.09,.07,.02),n);o.position.set(-.11,1.46,-.22);const a=new F(new G(.09,.07,.02),n);a.position.set(.11,1.46,-.22),t.add(o),t.add(a);const l=new F(new G(.42,.6,.22),e);l.position.set(0,.9,0),t.add(l);const c=new G(.12,.6,.12),u=new F(c,e);u.position.set(-.3,.9,0);const d=new F(c,e);d.position.set(.3,.9,0),t.add(u),t.add(d);const h=new F(new G(.08,.5,.08),i);h.position.set(-.3,.85,-.2),h.rotation.x=.4,t.add(h);const f=new G(.14,.6,.14),p=new F(f,e);p.position.set(-.12,.3,0);const g=new F(f,e);return g.position.set(.12,.3,0),t.add(p),t.add(g),{group:t,legs:[p,g],arms:[u,d],head:r,body:l,originalMats:[e,i]}}function wM(){const t=new Xe,e=new be({color:1976635}),n=new xn({color:15680580}),i=new F(new G(.65,.45,.7),e);i.position.set(0,.35,.4),t.add(i);const r=new F(new G(.45,.35,.45),e);r.position.set(0,.3,-.25),t.add(r);const o=new G(.06,.06,.02),a=new F(o,n);a.position.set(-.12,.32,-.48);const l=new F(o,n);l.position.set(.12,.32,-.48),t.add(a),t.add(l);const c=new G(.6,.08,.08),u=[];for(let d=0;d<4;d++){const h=new F(c,e);h.position.set(-.45,.22,-.3+d*.22),h.rotation.z=.35,t.add(h),u.push(h);const f=new F(c,e);f.position.set(.45,.22,-.3+d*.22),f.rotation.z=-.35,t.add(f),u.push(f)}return{group:t,legs:u,head:r,body:i,originalMats:[e,n]}}function OM(){const t=new Xe,e=new be({color:1409085}),n=new be({color:988970}),i=new F(new G(.46,.46,.46),e);i.position.set(0,1.45,0),t.add(i);const r=new F(new G(.09,.09,.02),n);r.position.set(-.11,1.5,-.24);const o=new F(new G(.09,.09,.02),n);o.position.set(.11,1.5,-.24);const a=new F(new G(.18,.16,.02),n);a.position.set(0,1.36,-.24),t.add(r),t.add(o),t.add(a);const l=new F(new G(.46,.65,.26),e);l.position.set(0,.9,0),t.add(l);const c=new G(.2,.45,.2),u=[],d=[[-.14,.22,-.16],[.14,.22,-.16],[-.14,.22,.16],[.14,.22,.16]];for(const h of d){const f=new F(c,e);f.position.set(...h),t.add(f),u.push(f)}return{group:t,legs:u,head:i,body:l,originalMats:[e,n]}}function CM(t){Pt=t}function wr(t,e,n,i){if(!Pt)return null;let r,o=10,a=1.4;t===Je.PIG?(r=TM(),o=10,a=.6):t===Je.SHEEP?(r=AM(),o=10,a=.65):t===Je.SKELETON?(r=RM(),o=16,a=1.45):t===Je.SPIDER?(r=wM(),o=14,a=.35):t===Je.CREEPER?(r=OM(),o=18,a=1.45):(r=bM(),o=20,a=1.45),r.group.position.set(e,n,i),Pt.add(r.group);const l={type:t,model:r,pos:new C(e,n,i),vel:new C(0,0,0),yaw:0,health:o,maxHealth:o,eyeHeight:a,state:"idle",stateTimer:Math.random()*2,lastSeenPos:null,canSeePlayer:!1,losCheckTimer:Math.random()*.25,attackCooldown:0,shootCooldown:2,fuseTimer:0,isFusing:!1,isAngered:!1,burnTimer:0,onGround:!0};return Vn.push(l),l}function Ku(t,e,n){if(!t||t.health<=0)return;t.health-=e,nS(),jh(t.pos.x,t.pos.y+t.eyeHeight*.5,t.pos.z);const i=n.clone().multiplyScalar(4.5);t.vel.x+=i.x,t.vel.z+=i.z,t.vel.y=3.5,t.isAngered=!0,t.type===Je.PIG?(t.state="flee",t.stateTimer=4.5,rS()):t.type===Je.SHEEP?(t.state="flee",t.stateTimer=4.5,Uh()):(t.state="chase",t.lastSeenPos=pi().clone(),t.type===Je.ZOMBIE&&iS()),t.health<=0&&rl(t)}function rl(t){Pt.remove(t.model.group);const e=Vn.indexOf(t);e!==-1&&Vn.splice(e,1),t.type===Je.PIG?Vt(s.PORKCHOP,t.pos.x,t.pos.y+.5,t.pos.z):t.type===Je.SHEEP?(Vt(s.WOOL,t.pos.x,t.pos.y+.5,t.pos.z),Vt(s.MUTTON,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Je.ZOMBIE?(Vt(s.ROTTEN_FLESH,t.pos.x,t.pos.y+.5,t.pos.z),Math.random()<.25&&Vt(s.IRON_INGOT,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Je.SKELETON?(Vt(s.BONE,t.pos.x,t.pos.y+.5,t.pos.z),Vt(s.ARROW,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Je.SPIDER?(Vt(s.STRING,t.pos.x,t.pos.y+.5,t.pos.z),Vt(s.SPIDER_EYE,t.pos.x,t.pos.y+.5,t.pos.z)):t.type===Je.CREEPER&&Vt(s.GUNPOWDER,t.pos.x,t.pos.y+.5,t.pos.z)}function Jh(t,e,n,i=2.8,r=16){if(!Pt)return;lS();const o=new C(t,e,n),l=pi().clone().add(new C(0,.9,0)).sub(o),c=l.length();if(c<i*2.2){const v=1-c/(i*2.2),_=Math.max(2,Math.round(r*v));Qo(_,l.clone().normalize())}for(const v of Vn)v.pos.distanceTo(o)<i*2&&Ku(v,14,v.pos.clone().sub(o).normalize());const u=Math.floor(t-i),d=Math.ceil(t+i),h=Math.max(1,Math.floor(e-i)),f=Math.min(63,Math.ceil(e+i)),p=Math.floor(n-i),g=Math.ceil(n+i);for(let v=p;v<=g;v++)for(let _=u;_<=d;_++)for(let m=h;m<=f;m++)if(Math.hypot(_+.5-t,m+.5-e,v+.5-n)<=i){const M=Dt(_,m,v);if(M!==s.AIR&&M!==s.WATER&&(Su(_,m,v,M),Hn(Pt,_,m,v,s.AIR),Math.random()<.4)){const S=Kh(M);S>0&&Vt(S,_+.5,m+.5,v+.5)}}}function IM(t,e,n){if(!Pt)return;Hn(Pt,t,e,n,s.AIR);const i=new G(.98,.98,.98),r=new be({color:15680580}),o=new F(i,r);o.position.set(t+.5,e+.5,n+.5),Pt.add(o),Lh(),Ka.push({mesh:o,mat:r,pos:new C(t+.5,e+.5,n+.5),timer:2.2,blinkTimer:0})}function DM(t){for(let e=Ka.length-1;e>=0;e--){const n=Ka[e];n.timer-=t,n.blinkTimer+=t*10,Math.floor(n.blinkTimer)%2===0?n.mat.color.setHex(16777215):n.mat.color.setHex(15680580),n.timer<=0&&(Pt.remove(n.mesh),Ka.splice(e,1),Jh(n.pos.x,n.pos.y,n.pos.z,3.8,20))}}function NM(t,e){if(!Pt)return;aS();const n=new G(.08,.08,.6),i=new xn({color:16317180}),r=new F(n,i);r.position.copy(t),Pt.add(r);const o=e.clone().multiplyScalar(24);Rr.push({mesh:r,pos:t.clone(),vel:o,life:5,isPlayerShot:!0})}function PM(t,e){if(!Pt)return;const n=new G(.08,.08,.5),i=new xn({color:14870768}),r=new F(n,i);r.position.copy(t),Pt.add(r);const a=e.clone().sub(t).normalize().multiplyScalar(16);Rr.push({mesh:r,pos:t.clone(),vel:a,life:4,isPlayerShot:!1})}function LM(t){const e=pi();for(let n=Rr.length-1;n>=0;n--){const i=Rr[n];if(i.life-=t,i.vel.y-=12*t,i.pos.addScaledVector(i.vel,t),i.mesh.position.copy(i.pos),i.isPlayerShot){let r=!1;for(const o of Vn){const a=o.pos.clone().add(new C(0,o.eyeHeight*.5,0));if(i.pos.distanceTo(a)<.9){Ku(o,9,i.vel.clone().normalize()),Pt.remove(i.mesh),Rr.splice(n,1),r=!0;break}}if(r)continue}else if(i.pos.distanceTo(e.clone().add(new C(0,.9,0)))<.75){Qo(4,i.vel.clone().normalize()),Pt.remove(i.mesh),Rr.splice(n,1);continue}(Ps(Math.floor(i.pos.x),Math.floor(i.pos.y),Math.floor(i.pos.z))||i.life<=0)&&(Pt.remove(i.mesh),Rr.splice(n,1))}}function UM(t){const e=pi();uc+=t,uc>4&&Vn.length<MM&&(uc=0,FM(e)),LM(t),DM(t);for(let n=Vn.length-1;n>=0;n--){const i=Vn[n],r=i.pos.distanceTo(e);if(r>52){Pt.remove(i.model.group),Vn.splice(n,1);continue}BM(i,t,e,r)}}function FM(t){const e=Math.random()*Math.PI*2,n=24+Math.random()*14,i=Math.floor(t.x+Math.cos(e)*n),r=Math.floor(t.z+Math.sin(e)*n),o=rr(i,r);if(o>15&&o<55)if(jo()){if(Vn.filter(c=>c.type===Je.PIG||c.type===Je.SHEEP).length<5){const c=Math.random()<.5?Je.PIG:Je.SHEEP;wr(c,i+.5,o+1,r+.5)}}else{const l=Math.random();l<.35?wr(Je.ZOMBIE,i+.5,o+1,r+.5):l<.6?wr(Je.SKELETON,i+.5,o+1,r+.5):l<.8?wr(Je.CREEPER,i+.5,o+1,r+.5):wr(Je.SPIDER,i+.5,o+1,r+.5)}}function BM(t,e,n,i){if((t.type===Je.ZOMBIE||t.type===Je.SKELETON)&&jo()){const f=rr(Math.floor(t.pos.x),Math.floor(t.pos.z));if(t.pos.y>=f&&(t.burnTimer+=e,t.burnTimer>=1&&(t.burnTimer=0,t.health-=2,jh(t.pos.x,t.pos.y+1,t.pos.z),t.health<=0))){rl(t);return}}if(t.losCheckTimer-=e,t.losCheckTimer<=0){t.losCheckTimer=.3;const f=yM(t.pos.x,t.pos.y+t.eyeHeight,t.pos.z,n.x,n.y+1.2,n.z);t.canSeePlayer=f&&i<16,t.canSeePlayer?(t.lastSeenPos=n.clone(),t.type!==Je.PIG&&(t.type===Je.SPIDER&&jo()&&!t.isAngered?t.state="idle":t.state="chase")):i>22&&t.state==="chase"&&(t.state="idle")}t.type===Je.PIG?VM(t,e,n):t.type===Je.SHEEP?zM(t,e,n):t.type===Je.SKELETON?kM(t,e,n,i):t.type===Je.SPIDER?WM(t,e,n,i):t.type===Je.CREEPER?GM(t,e,n,i):HM(t,e,n,i),t.vel.y-=24*e,t.pos.addScaledVector(t.vel,e);const r=Math.floor(t.pos.x),o=Math.floor(t.pos.z),a=Math.floor(t.pos.y);let l=-999;const c=Math.min(63,a+1);for(let f=c;f>=0;f--)if(Ps(r,f,o)){l=f+1;break}if(l>=0&&t.pos.y<=l)t.pos.y=l,t.vel.y=0,t.onGround=!0;else if(t.pos.y<-10){rl(t);return}else t.onGround=!1;const u=t.pos.x+t.vel.x*e,d=t.pos.z+t.vel.z*e,h=Math.floor(t.pos.y);Ps(Math.floor(u),h,Math.floor(d))&&(Ps(Math.floor(u),h+1,Math.floor(d))?(t.vel.x=0,t.vel.z=0):t.onGround&&(t.vel.y=5.8,t.onGround=!1)),t.vel.x*=Math.exp(-8*e),t.vel.z*=Math.exp(-8*e),t.model.group.position.copy(t.pos),t.model.group.rotation.y=t.yaw+Math.PI}function GM(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;if(t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<2.4){t.isFusing||(t.isFusing=!0,Lh()),t.fuseTimer+=e,t.vel.x=0,t.vel.z=0;const o=1+t.fuseTimer/1.8*.35;if(t.model.group.scale.set(o,o,o),t.fuseTimer>=1.8){Jh(t.pos.x,t.pos.y+.5,t.pos.z,2.8,16),rl(t);return}}else i>4.5&&t.isFusing&&(t.isFusing=!1,t.fuseTimer=0,t.model.group.scale.set(1,1,1))}}function HM(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=1.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<1.4&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1.2,Qo(3,new C(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function kM(t,e,n,i){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z),t.canSeePlayer&&(i<8?(t.vel.x=-Math.sin(t.yaw)*1.8,t.vel.z=-Math.cos(t.yaw)*1.8):i>14&&(t.vel.x=Math.sin(t.yaw)*1.8,t.vel.z=Math.cos(t.yaw)*1.8),t.shootCooldown-=e,t.shootCooldown<=0&&i<18&&(t.shootCooldown=2.8,Nh(),PM(t.pos.clone().add(new C(0,1.2,0)),n.clone().add(new C(0,.9,0)))))}function WM(t,e,n,i){if(t.state==="chase"){t.yaw=Math.atan2(n.x-t.pos.x,n.z-t.pos.z);const r=2.8;t.vel.x=Math.sin(t.yaw)*r,t.vel.z=Math.cos(t.yaw)*r,i<4&&t.onGround&&Math.random()<.04&&(t.vel.y=4.8,t.vel.x*=1.4,t.vel.z*=1.4,t.onGround=!1),i<1.3&&(t.attackCooldown-=e,t.attackCooldown<=0&&(t.attackCooldown=1,Qo(2,new C(Math.sin(t.yaw),0,Math.cos(t.yaw)))))}}function VM(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=2.5+Math.random()*3.5,t.yaw+=(Math.random()-.5)*1.8),t.vel.x=Math.sin(t.yaw)*.9,t.vel.z=Math.cos(t.yaw)*.9}function zM(t,e,n,i){if(t.state==="flee"){t.stateTimer-=e;const r=t.pos.clone().sub(n).normalize();t.yaw=Math.atan2(r.x,r.z),t.vel.x=Math.sin(t.yaw)*2.8,t.vel.z=Math.cos(t.yaw)*2.8,t.stateTimer<=0&&(t.state="idle")}else{if(t.stateTimer-=e,t.stateTimer<=0&&(t.stateTimer=3+Math.random()*4,t.yaw+=(Math.random()-.5)*1.8,Math.random()<.25))try{Uh()}catch{}t.vel.x=Math.sin(t.yaw)*.85,t.vel.z=Math.cos(t.yaw)*.85}}function XM(t,e,n=3.8){let i=null,r=n;for(const o of Vn){if(o.health<=0)continue;const l=o.pos.clone().add(new C(0,o.eyeHeight*.5,0)).clone().sub(t),c=l.dot(e);c>0&&c<r&&l.clone().sub(e.clone().multiplyScalar(c)).length()<.9&&(r=c,i=o)}return i}const wo=new Map,Fr=new Map,ol=new Map,Ls=new Map;function KM(t){wo.clear(),Fr.clear(),ol.clear(),Ls.clear()}function Us(t,e,n){return`${t},${e},${n}`}function qM(t,e,n){const i=Us(t,e,n),o=!!!ol.get(i);return ol.set(i,o),sl(),o}function YM(t,e,n){const i=Us(t,e,n),r=!Fr.get(i);Fr.set(i,r);const o=Dt(t,e,n);return o===s.WOODEN_DOOR_BOTTOM||o===s.IRON_DOOR_BOTTOM?Fr.set(Us(t,e+1,n),r):(o===s.WOODEN_DOOR_TOP||o===s.IRON_DOOR_TOP)&&Fr.set(Us(t,e-1,n),r),oS(r),r}function sl(){wo.clear();const t=[];for(const[n,i]of ol.entries())if(i){const[r,o,a]=n.split(",").map(Number);wo.set(n,15),t.push({x:r,y:o,z:a,power:15})}for(const[n]of Ls.entries()){const[i,r,o]=n.split(",").map(Number);wo.set(n,15),t.push({x:i,y:r,z:o,power:15})}const e=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1],[1,-1,0],[-1,-1,0],[0,-1,1],[0,-1,-1],[1,1,0],[-1,1,0],[0,1,1],[0,1,-1]];for(;t.length>0;){const n=t.shift();if(!(n.power<=1))for(const[i,r,o]of e){const a=n.x+i,l=n.y+r,c=n.z+o,u=Us(a,l,c),d=Dt(a,l,c);if(d===s.REDSTONE_WIRE){const h=n.power-1,f=wo.get(u)||0;h>f&&(wo.set(u,h),t.push({x:a,y:l,z:c,power:h}))}d===s.TNT&&n.power>0,(d===s.WOODEN_DOOR_BOTTOM||d===s.WOODEN_DOOR_TOP||d===s.IRON_DOOR_BOTTOM||d===s.IRON_DOOR_TOP)&&(Fr.get(u)||Fr.set(u,!0))}}}function $M(t){let e=!1;for(const[n,i]of Ls.entries()){const r=i-t;r<=0?(Ls.delete(n),e=!0):Ls.set(n,r)}e&&sl()}let fc=null;function Cd(){return fc||(fc=zh()),fc}function dc(t,e,n,i){const[r,o,a,l]=e,c=(o[0]-r[0])/16,u=(o[1]-r[1])/16,d=(l[0]-r[0])/16,h=(l[1]-r[1])/16;t.save(),t.filter=`brightness(${i})`,t.setTransform(c,u,d,h,r[0],r[1]),t.drawImage(n,0,0,16,16,0,0,16,16),t.restore()}function Nt(t,e=46){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");if(t===s.IRON_SWORD||t===s.STONE_SWORD||t===s.WOODEN_SWORD){const f=t===s.IRON_SWORD,p=t===s.STONE_SWORD,g=f?"#f1f5f9":p?"#94a3b8":"#b45309",v=f?"#475569":p?"#334155":"#78350f";return i.lineWidth=3,i.strokeStyle=v,i.fillStyle=g,i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle=f?"#334155":"#451a03",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n}if(t===s.IRON_PICKAXE||t===s.STONE_PICKAXE||t===s.WOODEN_PICKAXE){const f=t===s.IRON_PICKAXE,p=t===s.STONE_PICKAXE,g=f?"#cbd5e1":p?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=g,i.beginPath(),i.arc(e*.7,e*.3,e*.25,-Math.PI*.75,-Math.PI*.15),i.stroke(),n}if(t===s.STICK)return i.lineWidth=5,i.strokeStyle="#92400e",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.75,e*.25),i.stroke(),n;if(t===s.TORCH)return i.lineWidth=6,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.3,e*.75),i.lineTo(e*.65,e*.4),i.stroke(),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.68,e*.35,e*.15,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.68,e*.35,e*.08,0,Math.PI*2),i.fill(),n;if(t===s.IRON_INGOT)return i.fillStyle="#cbd5e1",i.strokeStyle="#475569",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.4),i.lineTo(e*.65,e*.3),i.lineTo(e*.8,e*.55),i.lineTo(e*.4,e*.65),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.35,e*.42,e*.25,e*.08),n;if(t===s.COOKED_PORKCHOP)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.35,e*.22,Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#451a03",i.fillRect(e*.4,e*.4,e*.2,2),i.fillRect(e*.45,e*.5,e*.2,2),n;if(t===s.IRON_HELMET)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.32,Math.PI,0),i.lineTo(e*.82,e*.65),i.lineTo(e*.65,e*.65),i.lineTo(e*.65,e*.55),i.lineTo(e*.35,e*.55),i.lineTo(e*.35,e*.65),i.lineTo(e*.18,e*.65),i.closePath(),i.fill(),i.stroke(),n;if(t===s.IRON_CHESTPLATE)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.35),i.lineTo(e*.6,e*.35),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.75,e*.5),i.lineTo(e*.75,e*.75),i.lineTo(e*.25,e*.75),i.lineTo(e*.25,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===s.IRON_LEGGINGS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.75),i.lineTo(e*.55,e*.75),i.lineTo(e*.5,e*.45),i.lineTo(e*.45,e*.75),i.lineTo(e*.25,e*.75),i.closePath(),i.fill(),i.stroke(),n;if(t===s.IRON_BOOTS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.fillRect(e*.22,e*.45,e*.18,e*.3),i.fillRect(e*.15,e*.6,e*.25,e*.15),i.fillRect(e*.6,e*.45,e*.18,e*.3),i.fillRect(e*.6,e*.6,e*.25,e*.15),n;if(t===s.ARROW)return i.lineWidth=3,i.strokeStyle="#94a3b8",i.beginPath(),i.moveTo(e*.2,e*.8),i.lineTo(e*.75,e*.25),i.stroke(),i.fillStyle="#475569",i.beginPath(),i.moveTo(e*.82,e*.18),i.lineTo(e*.65,e*.25),i.lineTo(e*.75,e*.35),i.closePath(),i.fill(),n;if(t===s.BONE)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.42,e*.5,e*.16,4),i.fill(),i.stroke(),n;if(t===s.STRING)return i.lineWidth=2,i.strokeStyle="#f8fafc",i.beginPath(),i.arc(e*.5,e*.5,e*.25,0,Math.PI*1.7),i.stroke(),n;if(t===s.SPIDER_EYE)return i.fillStyle="#991b1b",i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.arc(e*.5,e*.5,e*.22,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===s.BOW)return i.lineWidth=3.5,i.strokeStyle="#78350f",i.beginPath(),i.arc(e*.4,e*.5,e*.35,-Math.PI*.45,Math.PI*.45),i.stroke(),i.lineWidth=1.5,i.strokeStyle="#f8fafc",i.beginPath(),i.moveTo(e*.4+Math.cos(-Math.PI*.45)*(e*.35),e*.5+Math.sin(-Math.PI*.45)*(e*.35)),i.lineTo(e*.4+Math.cos(Math.PI*.45)*(e*.35),e*.5+Math.sin(Math.PI*.45)*(e*.35)),i.stroke(),n;if(t===s.IRON_HOE||t===s.STONE_HOE||t===s.WOODEN_HOE){const f=t===s.IRON_HOE,p=t===s.STONE_HOE,g=f?"#cbd5e1":p?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.65,e*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=g,i.beginPath(),i.moveTo(e*.65,e*.3),i.lineTo(e*.85,e*.3),i.lineTo(e*.85,e*.45),i.stroke(),n}if(t===s.WHEAT_SEEDS)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=1.5,[[e*.35,e*.4],[e*.55,e*.35],[e*.45,e*.6],[e*.65,e*.55]].forEach(([p,g])=>{i.beginPath(),i.arc(p,g,e*.08,0,Math.PI*2),i.fill(),i.stroke()}),n;if(t===s.WHEAT)return i.lineWidth=3,i.strokeStyle="#eab308",i.beginPath(),i.moveTo(e*.3,e*.8),i.lineTo(e*.5,e*.25),i.moveTo(e*.5,e*.8),i.lineTo(e*.5,e*.2),i.moveTo(e*.7,e*.8),i.lineTo(e*.5,e*.25),i.stroke(),i.fillStyle="#ef4444",i.fillRect(e*.38,e*.55,e*.24,4),n;if(t===s.BREAD)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.roundRect(e*.2,e*.35,e*.6,e*.32,8),i.fill(),i.stroke(),i.fillStyle="#fef08a",i.fillRect(e*.32,e*.42,3,e*.18),i.fillRect(e*.48,e*.42,3,e*.18),i.fillRect(e*.64,e*.42,3,e*.18),n;if(t===s.GUNPOWDER)return i.fillStyle="#475569",i.strokeStyle="#1e293b",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.25,e*.7),i.lineTo(e*.5,e*.3),i.lineTo(e*.75,e*.7),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#94a3b8",i.fillRect(e*.45,e*.45,2,2),i.fillRect(e*.55,e*.55,2,2),i.fillRect(e*.35,e*.6,2,2),n;if(t===s.DIAMOND)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.7,e*.3),i.lineTo(e*.85,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#67e8f9",i.beginPath(),i.moveTo(e*.3,e*.3),i.lineTo(e*.5,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.fillStyle="#e0f2fe",i.beginPath(),i.moveTo(e*.4,e*.32),i.lineTo(e*.6,e*.32),i.lineTo(e*.5,e*.45),i.closePath(),i.fill(),n;if(t===s.DIAMOND_SWORD)return i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.75,e*.15),i.lineTo(e*.85,e*.25),i.lineTo(e*.45,e*.65),i.lineTo(e*.35,e*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle="#0284c7",i.lineWidth=4,i.beginPath(),i.moveTo(e*.25,e*.6),i.lineTo(e*.5,e*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(e*.35,e*.7),i.lineTo(e*.2,e*.85),i.stroke(),n;if(t===s.DIAMOND_PICKAXE)return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(e*.25,e*.75),i.lineTo(e*.7,e*.3),i.stroke(),i.lineWidth=3,i.strokeStyle="#083344",i.fillStyle="#06b6d4",i.beginPath(),i.moveTo(e*.45,e*.2),i.quadraticCurveTo(e*.75,e*.15,e*.85,e*.45),i.lineTo(e*.75,e*.5),i.quadraticCurveTo(e*.65,e*.3,e*.4,e*.3),i.closePath(),i.fill(),i.stroke(),n;if(t===s.DIAMOND_HELMET)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.25,e*.25,e*.5,e*.45,[8,8,2,2]),i.fill(),i.stroke(),i.clearRect(e*.38,e*.45,e*.24,e*.16),n;if(t===s.DIAMOND_CHESTPLATE)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.4,e*.25),i.lineTo(e*.5,e*.38),i.lineTo(e*.6,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.85,e*.45),i.lineTo(e*.72,e*.5),i.lineTo(e*.7,e*.8),i.lineTo(e*.3,e*.8),i.lineTo(e*.28,e*.5),i.lineTo(e*.15,e*.45),i.closePath(),i.fill(),i.stroke(),n;if(t===s.DIAMOND_LEGGINGS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.moveTo(e*.25,e*.25),i.lineTo(e*.75,e*.25),i.lineTo(e*.75,e*.8),i.lineTo(e*.55,e*.8),i.lineTo(e*.5,e*.5),i.lineTo(e*.45,e*.8),i.lineTo(e*.25,e*.8),i.closePath(),i.fill(),i.stroke(),n;if(t===s.DIAMOND_BOOTS)return i.fillStyle="#06b6d4",i.strokeStyle="#083344",i.lineWidth=2,i.beginPath(),i.roundRect(e*.22,e*.4,e*.24,e*.4,[4,4,6,2]),i.roundRect(e*.54,e*.4,e*.24,e*.4,[4,4,6,2]),i.fill(),i.stroke(),n;if(t===s.MUTTON||t===s.COOKED_MUTTON){const f=t===s.COOKED_MUTTON;return i.fillStyle=f?"#78350f":"#f43f5e",i.strokeStyle=f?"#451a03":"#9f1239",i.lineWidth=2,i.beginPath(),i.ellipse(e*.45,e*.48,e*.26,e*.18,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(e*.62,e*.62,e*.16,e*.08),n}if(t===s.ROTTEN_FLESH)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=2,i.beginPath(),i.ellipse(e*.5,e*.5,e*.32,e*.2,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),n;if(t===s.FLINT)return i.fillStyle="#1e293b",i.strokeStyle="#0f172a",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.5,e*.2),i.lineTo(e*.8,e*.6),i.lineTo(e*.6,e*.8),i.lineTo(e*.3,e*.7),i.lineTo(e*.2,e*.4),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#64748b",i.fillRect(e*.45,e*.3,e*.1,e*.25),n;if(t===s.FLINT_AND_STEEL)return i.strokeStyle="#e2e8f0",i.lineWidth=e*.14,i.beginPath(),i.arc(e*.42,e*.48,e*.24,-Math.PI*.6,Math.PI*.6),i.stroke(),i.fillStyle="#1e293b",i.fillRect(e*.52,e*.56,e*.24,e*.2),i.fillStyle="#f97316",i.beginPath(),i.arc(e*.58,e*.35,e*.08,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.58,e*.35,e*.04,0,Math.PI*2),i.fill(),n;if(t===s.QUARTZ)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=1.5,i.beginPath(),i.moveTo(e*.5,e*.15),i.lineTo(e*.75,e*.45),i.lineTo(e*.5,e*.85),i.lineTo(e*.25,e*.45),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(e*.5,e*.18),i.lineTo(e*.65,e*.45),i.lineTo(e*.5,e*.8),i.closePath(),i.fill(),n;if(t===s.REDSTONE_DUST)return i.fillStyle="#991b1b",i.beginPath(),i.arc(e*.5,e*.55,e*.28,0,Math.PI*2),i.fill(),i.fillStyle="#ef4444",i.beginPath(),i.arc(e*.46,e*.5,e*.18,0,Math.PI*2),i.fill(),i.fillStyle="#fca5a5",i.fillRect(e*.42,e*.42,e*.08,e*.08),i.fillRect(e*.6,e*.55,e*.06,e*.06),n;if(t===s.WOODEN_SHIELD||t===s.IRON_SHIELD){const f=t===s.IRON_SHIELD;return i.fillStyle=f?"#475569":"#451a03",i.beginPath(),i.moveTo(e*.22,e*.18),i.lineTo(e*.78,e*.18),i.lineTo(e*.78,e*.55),i.lineTo(e*.5,e*.86),i.lineTo(e*.22,e*.55),i.closePath(),i.fill(),i.fillStyle=f?"#e2e8f0":"#b45309",i.beginPath(),i.moveTo(e*.28,e*.24),i.lineTo(e*.72,e*.24),i.lineTo(e*.72,e*.52),i.lineTo(e*.5,e*.78),i.lineTo(e*.28,e*.52),i.closePath(),i.fill(),i.fillStyle="#334155",i.beginPath(),i.arc(e*.5,e*.45,e*.09,0,Math.PI*2),i.fill(),n}if(t===s.BOOK)return i.fillStyle="#831843",i.beginPath(),i.roundRect(e*.22,e*.2,e*.56,e*.6,4),i.fill(),i.fillStyle="#fef08a",i.fillRect(e*.3,e*.25,e*.44,e*.5),i.fillStyle="#4c0519",i.fillRect(e*.22,e*.2,e*.08,e*.6),i.fillStyle="#facc15",i.fillRect(e*.46,e*.2,e*.08,e*.68),n;if(t===s.GOLDEN_APPLE)return i.fillStyle="#facc15",i.beginPath(),i.arc(e*.42,e*.52,e*.26,0,Math.PI*2),i.arc(e*.58,e*.52,e*.26,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(e*.38,e*.42,e*.1,0,Math.PI*2),i.fill(),i.fillStyle="#78350f",i.fillRect(e*.48,e*.18,e*.06,e*.14),i.fillStyle="#16a34a",i.fillRect(e*.54,e*.2,e*.14,e*.08),n;if(t===s.BOAT)return i.fillStyle="#78350f",i.beginPath(),i.moveTo(e*.15,e*.42),i.lineTo(e*.85,e*.42),i.lineTo(e*.72,e*.72),i.lineTo(e*.28,e*.72),i.closePath(),i.fill(),i.fillStyle="#b45309",i.fillRect(e*.25,e*.46,e*.5,e*.14),i.lineWidth=2.5,i.strokeStyle="#451a03",i.beginPath(),i.moveTo(e*.35,e*.3),i.lineTo(e*.12,e*.75),i.moveTo(e*.65,e*.3),i.lineTo(e*.88,e*.75),i.stroke(),n;if(t===s.EXPERIENCE_BOTTLE)return i.fillStyle="#bae6fd",i.beginPath(),i.moveTo(e*.42,e*.2),i.lineTo(e*.58,e*.2),i.lineTo(e*.58,e*.36),i.lineTo(e*.75,e*.6),i.lineTo(e*.7,e*.82),i.lineTo(e*.3,e*.82),i.lineTo(e*.25,e*.6),i.lineTo(e*.42,e*.36),i.closePath(),i.fill(),i.fillStyle="#22c55e",i.fillRect(e*.34,e*.55,e*.32,e*.24),i.fillStyle="#86efac",i.fillRect(e*.42,e*.6,e*.08,e*.08),n;if(t===s.FLOWER_RED||t===s.FLOWER_YELLOW||t===s.TORCH||t===s.WHEAT_STAGE_1||t===s.WHEAT_STAGE_2||t===s.WHEAT_STAGE_3){const f=Cd(),p=Ks[t];if(p){const g=f[p.top];i.imageSmoothingEnabled=!1;const v=e*.08;return i.drawImage(g,v,v,e-v*2,e-v*2),n}}const r=Cd(),o=Ks[t];if(!o)return null;const a=r[o.top],l=r[o.side],c=e/4,u=[[e/2,0],[e/2+c,c/2],[e/2,c],[e/2-c,c/2]],d=[[e/2-c,c/2],[e/2,c],[e/2,2*c],[e/2-c,3*c/2]],h=[[e/2,c],[e/2+c,c/2],[e/2+c,3*c/2],[e/2,2*c]];return dc(i,h,l,.8),dc(i,d,l,.66),dc(i,u,a,1),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1.5,[u,d,h].forEach(f=>{i.beginPath(),i.moveTo(f[0][0],f[0][1]);for(let p=1;p<f.length;p++)i.lineTo(f[p][0],f[p][1]);i.closePath(),i.stroke()}),n}let pe={type:0,count:0},Ft=null;function as(t){return!t||t===s.AIR?0:Sl(t)||kE(t)||Xh(t)||VE(t)||t===s.BOW?1:64}function ZM(){Ft||(Ft=document.createElement("div"),Ft.id="cursor-floating-item",Ft.className="fixed pointer-events-none z-[9999] hidden items-center justify-center",Object.assign(Ft.style,{width:"46px",height:"46px",transform:"translate(-50%, -50%)",transition:"none"}),document.body.appendChild(Ft),window.addEventListener("mousemove",t=>{pe.type>0&&pe.count>0?(Ft.style.display="flex",Ft.style.left=`${t.clientX}px`,Ft.style.top=`${t.clientY}px`):Ft.style.display="none"}))}function Ni(){if(Ft||ZM(),pe.type>0&&pe.count>0){Ft.innerHTML="";const t=Nt(pe.type,42);if(t&&Ft.appendChild(t),pe.count>1){const e=document.createElement("span");e.className="absolute bottom-0 right-0 font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.2 rounded shadow-[0_2px_4px_rgba(0,0,0,0.8)]",e.textContent=pe.count,Ft.appendChild(e)}Ft.style.display="flex"}else pe.type=0,pe.count=0,Ft&&(Ft.style.display="none")}function ti(t,e){pe.type=t,pe.count=t===0?0:e,Ni()}function Ml(){pe={type:0,count:0},Ni()}function ui(t,e,n){e.preventDefault(),e.stopPropagation();const i=t.get(),r=i.type||0,o=i.count||0,a=t.maxStack||as(pe.type||r);if(e.shiftKey&&e.button===0&&r>0&&t.onShiftClick){t.onShiftClick(r,o),n&&n();return}if(e.button===0){if(pe.type===0&&r>0)ti(r,o),t.set(0,0),bt(!0);else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;const l=Math.min(pe.count,a);t.set(pe.type,l),pe.count-=l,pe.count<=0?ti(0,0):Ni(),bt(!1)}else if(pe.type>0&&r===pe.type){const l=a-o;if(l>0){const c=Math.min(l,pe.count);t.set(r,o+c),pe.count-=c,pe.count<=0?ti(0,0):Ni(),bt(!1)}}else if(pe.type>0&&r>0&&pe.type!==r){if(t.allowEquip&&!t.allowEquip(pe.type))return;const l=r,c=o;t.set(pe.type,pe.count),ti(l,c),bt(!1)}}else if(e.button===2)if(pe.type===0&&r>0){const l=Math.ceil(o/2),c=o-l;ti(r,l),t.set(c>0?r:0,c),bt(!0)}else if(pe.type>0&&r===0){if(t.allowEquip&&!t.allowEquip(pe.type))return;t.set(pe.type,1),pe.count-=1,pe.count<=0?ti(0,0):Ni(),bt(!1)}else pe.type>0&&r===pe.type&&o<a&&(t.set(r,o+1),pe.count-=1,pe.count<=0?ti(0,0):Ni(),bt(!1));n&&n()}let ri=null,oi=null;const Ut=new Array(9).fill(null).map(()=>({type:0,count:0})),Kt=new Array(4).fill(null).map(()=>({type:0,count:0}));let Zn=null;const ep=[{id:"planks",name:"Tábuas de Madeira",category:"Blocos",result:s.WOOD_PLANKS,count:4,gridSize:2,layout:[s.WOOD_LOG,0,0,0],desc:"Coloque 1 Tronco de Carvalho em qualquer espaço da grade.",check:t=>{const e=t.filter(i=>i===s.WOOD_LOG).length,n=t.filter(i=>i!==0&&i!==s.WOOD_LOG).length;return e===1&&n===0}},{id:"sticks",name:"Gravetos",category:"Materiais",result:s.STICK,count:4,gridSize:2,layout:[s.WOOD_PLANKS,0,s.WOOD_PLANKS,0],desc:"Coloque 2 Tábuas de Madeira verticalmente.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===s.WOOD_PLANKS&&t[2]===s.WOOD_PLANKS&&t[1]===0&&t[3]===0||t[1]===s.WOOD_PLANKS&&t[3]===s.WOOD_PLANKS&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,a=(r+1)*3+i;if(t[o]===s.WOOD_PLANKS&&t[a]===s.WOOD_PLANKS&&t.every((c,u)=>u===o||u===a?!0:c===0))return!0}return!1}},{id:"crafting_table",name:"Bancada de Trabalho",category:"Blocos",result:s.CRAFTING_TABLE,count:1,gridSize:2,layout:[s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS],desc:"Preencha os 4 espaços (2×2) com Tábuas de Madeira.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===s.WOOD_PLANKS);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,a=r+1,l=r+3,c=r+4;if(t[o]===s.WOOD_PLANKS&&t[a]===s.WOOD_PLANKS&&t[l]===s.WOOD_PLANKS&&t[c]===s.WOOD_PLANKS&&t.every((d,h)=>h===o||h===a||h===l||h===c?!0:d===0))return!0}}return!1}},{id:"furnace",name:"Fornalha",category:"Blocos",result:s.FURNACE,count:1,gridSize:3,layout:[s.COBBLESTONE,s.COBBLESTONE,s.COBBLESTONE,s.COBBLESTONE,0,s.COBBLESTONE,s.COBBLESTONE,s.COBBLESTONE,s.COBBLESTONE],desc:"Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===s.COBBLESTONE)&&t[4]===0},{id:"chest",name:"Baú de Madeira",category:"Blocos",result:s.CHEST,count:1,gridSize:3,layout:[s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,0,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS],desc:"Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.",check:(t,e,n)=>e!==3||n!==3?!1:[0,1,2,3,5,6,7,8].every(r=>t[r]===s.WOOD_PLANKS)&&t[4]===0},{id:"torches",name:"Tochas (4x)",category:"Iluminação",result:s.TORCH,count:4,gridSize:2,layout:[s.COAL_ORE,0,s.STICK,0],desc:"1 Carvão em cima e 1 Graveto logo abaixo.",check:(t,e,n)=>{if(e===2&&n===2)return t[0]===s.COAL_ORE&&t[2]===s.STICK&&t[1]===0&&t[3]===0||t[1]===s.COAL_ORE&&t[3]===s.STICK&&t[0]===0&&t[2]===0;if(e===3&&n===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,a=(r+1)*3+i;if(t[o]===s.COAL_ORE&&t[a]===s.STICK&&t.every((c,u)=>u===o||u===a?!0:c===0))return!0}return!1}},{id:"wooden_pickaxe",name:"Picareta de Madeira",category:"Ferramentas",result:s.WOODEN_PICKAXE,count:1,gridSize:3,layout:[s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,0,s.STICK,0,0,s.STICK,0],desc:"3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.WOOD_PLANKS&&t[1]===s.WOOD_PLANKS&&t[2]===s.WOOD_PLANKS&&t[4]===s.STICK&&t[7]===s.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"wooden_sword",name:"Espada de Madeira",category:"Armas",result:s.WOODEN_SWORD,count:1,gridSize:3,layout:[0,s.WOOD_PLANKS,0,0,s.WOOD_PLANKS,0,0,s.STICK,0],desc:"2 Tábuas verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===s.WOOD_PLANKS&&t[3+i]===s.WOOD_PLANKS&&t[6+i]===s.STICK,o=t.every((a,l)=>l===i||l===3+i||l===6+i?!0:a===0);if(r&&o)return!0}return!1}},{id:"stone_pickaxe",name:"Picareta de Pedra",category:"Ferramentas",result:s.STONE_PICKAXE,count:1,gridSize:3,layout:[s.COBBLESTONE,s.COBBLESTONE,s.COBBLESTONE,0,s.STICK,0,0,s.STICK,0],desc:"3 Pedregulhos no topo e 2 Gravetos no meio.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.COBBLESTONE&&t[1]===s.COBBLESTONE&&t[2]===s.COBBLESTONE&&t[4]===s.STICK&&t[7]===s.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"stone_sword",name:"Espada de Pedra",category:"Armas",result:s.STONE_SWORD,count:1,gridSize:3,layout:[0,s.COBBLESTONE,0,0,s.COBBLESTONE,0,0,s.STICK,0],desc:"2 Pedregulhos verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===s.COBBLESTONE&&t[3+i]===s.COBBLESTONE&&t[6+i]===s.STICK,o=t.every((a,l)=>l===i||l===3+i||l===6+i?!0:a===0);if(r&&o)return!0}return!1}},{id:"iron_pickaxe",name:"Picareta de Ferro",category:"Ferramentas",result:s.IRON_PICKAXE,count:1,gridSize:3,layout:[s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,0,s.STICK,0,0,s.STICK,0],desc:"3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.IRON_INGOT&&t[1]===s.IRON_INGOT&&t[2]===s.IRON_INGOT&&t[4]===s.STICK&&t[7]===s.STICK&&t[3]===0&&t[5]===0&&t[6]===0&&t[8]===0},{id:"iron_sword",name:"Espada de Ferro",category:"Armas",result:s.IRON_SWORD,count:1,gridSize:3,layout:[0,s.IRON_INGOT,0,0,s.IRON_INGOT,0,0,s.STICK,0],desc:"2 Barras de Ferro verticais com 1 Graveto embaixo.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=t[i]===s.IRON_INGOT&&t[3+i]===s.IRON_INGOT&&t[6+i]===s.STICK,o=t.every((a,l)=>l===i||l===3+i||l===6+i?!0:a===0);if(r&&o)return!0}return!1}},{id:"iron_helmet",name:"Capacete de Ferro",category:"Armaduras",result:s.IRON_HELMET,count:1,gridSize:3,layout:[s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,0,s.IRON_INGOT,0,0,0],desc:"5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.IRON_INGOT&&t[1]===s.IRON_INGOT&&t[2]===s.IRON_INGOT&&t[3]===s.IRON_INGOT&&t[4]===0&&t[5]===s.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"iron_chestplate",name:"Peitoral de Ferro",category:"Armaduras",result:s.IRON_CHESTPLATE,count:1,gridSize:3,layout:[s.IRON_INGOT,0,s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT],desc:"8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.IRON_INGOT&&t[1]===0&&t[2]===s.IRON_INGOT&&t[3]===s.IRON_INGOT&&t[4]===s.IRON_INGOT&&t[5]===s.IRON_INGOT&&t[6]===s.IRON_INGOT&&t[7]===s.IRON_INGOT&&t[8]===s.IRON_INGOT},{id:"iron_leggings",name:"Calças de Ferro",category:"Armaduras",result:s.IRON_LEGGINGS,count:1,gridSize:3,layout:[s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,s.IRON_INGOT,0,s.IRON_INGOT,s.IRON_INGOT,0,s.IRON_INGOT],desc:"7 Barras de Ferro em formato de calças (+5 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.IRON_INGOT&&t[1]===s.IRON_INGOT&&t[2]===s.IRON_INGOT&&t[3]===s.IRON_INGOT&&t[4]===0&&t[5]===s.IRON_INGOT&&t[6]===s.IRON_INGOT&&t[7]===0&&t[8]===s.IRON_INGOT},{id:"iron_boots",name:"Botas de Ferro",category:"Armaduras",result:s.IRON_BOOTS,count:1,gridSize:3,layout:[s.IRON_INGOT,0,s.IRON_INGOT,s.IRON_INGOT,0,s.IRON_INGOT,0,0,0],desc:"4 Barras de Ferro em formato de botas (+2 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.IRON_INGOT&&t[1]===0&&t[2]===s.IRON_INGOT&&t[3]===s.IRON_INGOT&&t[4]===0&&t[5]===s.IRON_INGOT&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bow",name:"Arco de Caça",category:"Armas",result:s.BOW,count:1,gridSize:3,layout:[0,s.STICK,s.STRING,s.STICK,0,s.STRING,0,s.STICK,s.STRING],desc:"3 Gravetos e 3 Linhas de Teia na bancada 3×3.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(a=>a===s.STICK).length,r=t.filter(a=>a===s.STRING).length,o=t.filter(a=>a!==0&&a!==s.STICK&&a!==s.STRING).length;return i===3&&r===3&&o===0}},{id:"wooden_hoe",name:"Enxada de Madeira",category:"Ferramentas",result:s.WOODEN_HOE,count:1,gridSize:3,layout:[s.WOOD_PLANKS,s.WOOD_PLANKS,0,0,s.STICK,0,0,s.STICK,0],desc:"2 Tábuas no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===s.WOOD_PLANKS&&t[1]===s.WOOD_PLANKS&&t[4]===s.STICK&&t[7]===s.STICK||t[1]===s.WOOD_PLANKS&&t[2]===s.WOOD_PLANKS&&t[4]===s.STICK&&t[7]===s.STICK,r=t.filter(l=>l===s.STICK).length,o=t.filter(l=>l===s.WOOD_PLANKS).length,a=t.filter(l=>l!==0&&l!==s.STICK&&l!==s.WOOD_PLANKS).length;return i&&r===2&&o===2&&a===0}},{id:"stone_hoe",name:"Enxada de Pedra",category:"Ferramentas",result:s.STONE_HOE,count:1,gridSize:3,layout:[s.COBBLESTONE,s.COBBLESTONE,0,0,s.STICK,0,0,s.STICK,0],desc:"2 Pedregulhos no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===s.COBBLESTONE&&t[1]===s.COBBLESTONE&&t[4]===s.STICK&&t[7]===s.STICK||t[1]===s.COBBLESTONE&&t[2]===s.COBBLESTONE&&t[4]===s.STICK&&t[7]===s.STICK,r=t.filter(l=>l===s.STICK).length,o=t.filter(l=>l===s.COBBLESTONE).length,a=t.filter(l=>l!==0&&l!==s.STICK&&l!==s.COBBLESTONE).length;return i&&r===2&&o===2&&a===0}},{id:"iron_hoe",name:"Enxada de Ferro",category:"Ferramentas",result:s.IRON_HOE,count:1,gridSize:3,layout:[s.IRON_INGOT,s.IRON_INGOT,0,0,s.STICK,0,0,s.STICK,0],desc:"2 Barras de Ferro no topo e 2 Gravetos verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===s.IRON_INGOT&&t[1]===s.IRON_INGOT&&t[4]===s.STICK&&t[7]===s.STICK||t[1]===s.IRON_INGOT&&t[2]===s.IRON_INGOT&&t[4]===s.STICK&&t[7]===s.STICK,r=t.filter(l=>l===s.STICK).length,o=t.filter(l=>l===s.IRON_INGOT).length,a=t.filter(l=>l!==0&&l!==s.STICK&&l!==s.IRON_INGOT).length;return i&&r===2&&o===2&&a===0}},{id:"bread",name:"Pão Dourado",category:"Alimentação",result:s.BREAD,count:1,gridSize:3,layout:[0,0,0,s.WHEAT,s.WHEAT,s.WHEAT,0,0,0],desc:"3 Trigos colhidos em linha horizontal (+5 Vida).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;for(let i=0;i<3;i++){const r=i*3,o=i*3+1,a=i*3+2;if(t[r]===s.WHEAT&&t[o]===s.WHEAT&&t[a]===s.WHEAT&&t.every((c,u)=>u===r||u===o||u===a?!0:c===0))return!0}return!1}},{id:"tnt",name:"Bloco de TNT",category:"Explosivos",result:s.TNT,count:1,gridSize:3,layout:[s.GUNPOWDER,s.SAND,s.GUNPOWDER,s.SAND,s.GUNPOWDER,s.SAND,s.GUNPOWDER,s.SAND,s.GUNPOWDER],desc:"5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t.filter(a=>a===s.GUNPOWDER).length,r=t.filter(a=>a===s.SAND).length,o=t.filter(a=>a!==0&&a!==s.GUNPOWDER&&a!==s.SAND).length;return i===5&&r===4&&o===0}},{id:"diamond_sword",name:"Espada de Diamante",category:"Armas",result:s.DIAMOND_SWORD,count:1,gridSize:3,layout:[0,s.DIAMOND,0,0,s.DIAMOND,0,0,s.STICK,0],desc:"2 Diamantes verticais e 1 Graveto na base (+9 Dano).",check:(t,e,n)=>{if(e===3&&n===3){for(let i=0;i<3;i++)if(t[i]===s.DIAMOND&&t[i+3]===s.DIAMOND&&t[i+6]===s.STICK&&t.filter((o,a)=>a===i||a===i+3||a===i+6?!1:o!==0).length===0)return!0}return!1}},{id:"diamond_pickaxe",name:"Picareta de Diamante",category:"Ferramentas",result:s.DIAMOND_PICKAXE,count:1,gridSize:3,layout:[s.DIAMOND,s.DIAMOND,s.DIAMOND,0,s.STICK,0,0,s.STICK,0],desc:"3 Diamantes na linha superior e 2 Gravetos no centro vertical (Capaz de minerar Obsidiana).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.DIAMOND&&t[1]===s.DIAMOND&&t[2]===s.DIAMOND&&t[3]===0&&t[4]===s.STICK&&t[5]===0&&t[6]===0&&t[7]===s.STICK&&t[8]===0},{id:"diamond_helmet",name:"Capacete de Diamante",category:"Armaduras",result:s.DIAMOND_HELMET,count:1,gridSize:3,layout:[s.DIAMOND,s.DIAMOND,s.DIAMOND,s.DIAMOND,0,s.DIAMOND,0,0,0],desc:"5 Diamantes em formato de arco/U invertido (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.DIAMOND&&t[1]===s.DIAMOND&&t[2]===s.DIAMOND&&t[3]===s.DIAMOND&&t[4]===0&&t[5]===s.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"diamond_chestplate",name:"Peitoral de Diamante",category:"Armaduras",result:s.DIAMOND_CHESTPLATE,count:1,gridSize:3,layout:[s.DIAMOND,0,s.DIAMOND,s.DIAMOND,s.DIAMOND,s.DIAMOND,s.DIAMOND,s.DIAMOND,s.DIAMOND],desc:"8 Diamantes em formato de colete com espaço superior central (+8 Defesa máxima).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.DIAMOND&&t[1]===0&&t[2]===s.DIAMOND&&t[3]===s.DIAMOND&&t[4]===s.DIAMOND&&t[5]===s.DIAMOND&&t[6]===s.DIAMOND&&t[7]===s.DIAMOND&&t[8]===s.DIAMOND},{id:"diamond_leggings",name:"Calças de Diamante",category:"Armaduras",result:s.DIAMOND_LEGGINGS,count:1,gridSize:3,layout:[s.DIAMOND,s.DIAMOND,s.DIAMOND,s.DIAMOND,0,s.DIAMOND,s.DIAMOND,0,s.DIAMOND],desc:"7 Diamantes em formato de calças (+6 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.DIAMOND&&t[1]===s.DIAMOND&&t[2]===s.DIAMOND&&t[3]===s.DIAMOND&&t[4]===0&&t[5]===s.DIAMOND&&t[6]===s.DIAMOND&&t[7]===0&&t[8]===s.DIAMOND},{id:"diamond_boots",name:"Botas de Diamante",category:"Armaduras",result:s.DIAMOND_BOOTS,count:1,gridSize:3,layout:[s.DIAMOND,0,s.DIAMOND,s.DIAMOND,0,s.DIAMOND,0,0,0],desc:"4 Diamantes em formato de botas (+3 Defesa).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.DIAMOND&&t[1]===0&&t[2]===s.DIAMOND&&t[3]===s.DIAMOND&&t[4]===0&&t[5]===s.DIAMOND&&t[6]===0&&t[7]===0&&t[8]===0},{id:"bed",name:"Cama Confortável",category:"Mobiliário",result:s.BED,count:1,gridSize:3,layout:[0,0,0,s.WOOL,s.WOOL,s.WOOL,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS],desc:"3 Blocos de Lã de Ovelha sobre 3 Tábuas de Madeira (Permite dormir e pular a noite).",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===s.WOOL&&t[1]===s.WOOL&&t[2]===s.WOOL&&t[3]===s.WOOD_PLANKS&&t[4]===s.WOOD_PLANKS&&t[5]===s.WOOD_PLANKS&&t[6]===0&&t[7]===0&&t[8]===0,r=t[0]===0&&t[1]===0&&t[2]===0&&t[3]===s.WOOL&&t[4]===s.WOOL&&t[5]===s.WOOL&&t[6]===s.WOOD_PLANKS&&t[7]===s.WOOD_PLANKS&&t[8]===s.WOOD_PLANKS;return i||r}},{id:"flint_and_steel",name:"Isqueiro de Pederneira",category:"Ferramentas",result:s.FLINT_AND_STEEL,count:1,gridSize:2,layout:[s.IRON_INGOT,0,0,s.FLINT],desc:"1 Barra de Ferro e 1 Pederneira diagonalmente (Acende o Portal do Nether e Fogueiras).",check:t=>{const e=t.filter(r=>r===s.IRON_INGOT).length,n=t.filter(r=>r===s.FLINT).length,i=t.filter(r=>r!==0&&r!==s.IRON_INGOT&&r!==s.FLINT).length;return e===1&&n===1&&i===0}},{id:"quartz_block",name:"Bloco de Quartzo Polido",category:"Blocos",result:s.QUARTZ_BLOCK,count:1,gridSize:2,layout:[s.QUARTZ,s.QUARTZ,s.QUARTZ,s.QUARTZ],desc:"4 Cristais de Quartzo do Nether dispostos em quadrado 2×2.",check:(t,e,n)=>{if(e===2&&n===2)return t.every(i=>i===s.QUARTZ);if(e===3&&n===3){const i=[0,1,3,4];for(const r of i){const o=r,a=r+1,l=r+3,c=r+4;if(t[o]===s.QUARTZ&&t[a]===s.QUARTZ&&t[l]===s.QUARTZ&&t[c]===s.QUARTZ&&t.every((d,h)=>h===o||h===a||h===l||h===c?!0:d===0))return!0}}return!1}},{id:"wooden_shield",name:"Escudo de Carvalho",category:"Armaduras",result:s.WOODEN_SHIELD,count:1,gridSize:3,layout:[s.WOOD_PLANKS,s.IRON_INGOT,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,0,s.WOOD_PLANKS,0],desc:"6 Tábuas de Madeira e 1 Barra de Ferro no topo central.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.WOOD_PLANKS&&t[1]===s.IRON_INGOT&&t[2]===s.WOOD_PLANKS&&t[3]===s.WOOD_PLANKS&&t[4]===s.WOOD_PLANKS&&t[5]===s.WOOD_PLANKS&&t[6]===0&&t[7]===s.WOOD_PLANKS&&t[8]===0},{id:"redstone_torch",name:"Tocha de Redstone",category:"Redstone",result:s.REDSTONE_TORCH,count:1,gridSize:2,layout:[s.REDSTONE_DUST,0,s.STICK,0],desc:"1 Pó de Redstone sobre 1 Graveto (Emite sinal constante de energia).",check:t=>{const e=t.filter(r=>r===s.REDSTONE_DUST).length,n=t.filter(r=>r===s.STICK).length,i=t.filter(r=>r!==0&&r!==s.REDSTONE_DUST&&r!==s.STICK).length;return e===1&&n===1&&i===0}},{id:"lever",name:"Alavanca de Redstone",category:"Redstone",result:s.LEVER,count:1,gridSize:2,layout:[s.STICK,0,s.COBBLESTONE,0],desc:"1 Graveto sobre 1 Pedregulho (Liga e desliga circuitos).",check:t=>{const e=t.filter(r=>r===s.STICK).length,n=t.filter(r=>r===s.COBBLESTONE).length,i=t.filter(r=>r!==0&&r!==s.STICK&&r!==s.COBBLESTONE).length;return e===1&&n===1&&i===0}},{id:"pressure_plate",name:"Placa de Pressão de Pedra",category:"Redstone",result:s.PRESSURE_PLATE,count:1,gridSize:2,layout:[s.STONE,s.STONE,0,0],desc:"2 Pedras lado a lado (Ativa ao pisar).",check:t=>{const e=t.filter(i=>i===s.STONE).length,n=t.filter(i=>i!==0&&i!==s.STONE).length;return e===2&&n===0}},{id:"wooden_door",name:"Porta de Madeira",category:"Blocos",result:s.WOODEN_DOOR_BOTTOM,count:1,gridSize:3,layout:[s.WOOD_PLANKS,s.WOOD_PLANKS,0,s.WOOD_PLANKS,s.WOOD_PLANKS,0,s.WOOD_PLANKS,s.WOOD_PLANKS,0],desc:"6 Tábuas de Madeira em duas colunas verticais.",check:(t,e,n)=>{if(e!==3||n!==3)return!1;const i=t[0]===s.WOOD_PLANKS&&t[1]===s.WOOD_PLANKS&&t[2]===0&&t[3]===s.WOOD_PLANKS&&t[4]===s.WOOD_PLANKS&&t[5]===0&&t[6]===s.WOOD_PLANKS&&t[7]===s.WOOD_PLANKS&&t[8]===0,r=t[0]===0&&t[1]===s.WOOD_PLANKS&&t[2]===s.WOOD_PLANKS&&t[3]===0&&t[4]===s.WOOD_PLANKS&&t[5]===s.WOOD_PLANKS&&t[6]===0&&t[7]===s.WOOD_PLANKS&&t[8]===s.WOOD_PLANKS;return i||r}},{id:"enchanting_table",name:"Mesa de Encantamentos",category:"Magia",result:s.ENCHANTING_TABLE,count:1,gridSize:3,layout:[0,s.BOOK,0,s.DIAMOND,s.OBSIDIAN,s.DIAMOND,s.OBSIDIAN,s.OBSIDIAN,s.OBSIDIAN],desc:"1 Livro no topo central, 2 Diamantes nas laterais e 4 Obsidianas.",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===0&&t[1]===s.BOOK&&t[2]===0&&t[3]===s.DIAMOND&&t[4]===s.OBSIDIAN&&t[5]===s.DIAMOND&&t[6]===s.OBSIDIAN&&t[7]===s.OBSIDIAN&&t[8]===s.OBSIDIAN},{id:"boat",name:"Barco de Carvalho",category:"Veículos",result:s.BOAT,count:1,gridSize:3,layout:[0,0,0,s.WOOD_PLANKS,0,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS],desc:"5 Tábuas de Madeira dispostas em formato de barco (Permite navegar na água).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===0&&t[1]===0&&t[2]===0&&t[3]===s.WOOD_PLANKS&&t[4]===0&&t[5]===s.WOOD_PLANKS&&t[6]===s.WOOD_PLANKS&&t[7]===s.WOOD_PLANKS&&t[8]===s.WOOD_PLANKS},{id:"book",name:"Livro Arcano",category:"Magia",result:s.BOOK,count:1,gridSize:2,layout:[s.WHEAT,s.WHEAT,s.WHEAT,0],desc:"3 Trigos processados em livro de couro.",check:t=>{const e=t.filter(i=>i===s.WHEAT).length,n=t.filter(i=>i!==0&&i!==s.WHEAT).length;return e===3&&n===0}},{id:"bookshelf",name:"Estante de Livros",category:"Blocos",result:s.BOOKSHELF,count:1,gridSize:3,layout:[s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS,s.BOOK,s.BOOK,s.BOOK,s.WOOD_PLANKS,s.WOOD_PLANKS,s.WOOD_PLANKS],desc:"3 Livros no centro entre 6 Tábuas de Madeira (Aumenta o poder da Mesa de Encantamentos).",check:(t,e,n)=>e!==3||n!==3?!1:t[0]===s.WOOD_PLANKS&&t[1]===s.WOOD_PLANKS&&t[2]===s.WOOD_PLANKS&&t[3]===s.BOOK&&t[4]===s.BOOK&&t[5]===s.BOOK&&t[6]===s.WOOD_PLANKS&&t[7]===s.WOOD_PLANKS&&t[8]===s.WOOD_PLANKS}];function tp(t,e,n){const i=t.map(r=>r&&typeof r=="object"?r.type||0:r||0);for(const r of ep)if(r.check(i,e,n))return{result:r.result,count:r.count,name:r.name};return null}function np(){ri||(ri=document.createElement("div"),ri.id="crafting-table-modal",ri.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",ri.innerHTML=`
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
  `,document.body.appendChild(ri),document.getElementById("close-table-btn").addEventListener("click",QM),document.getElementById("open-recipe-book-table").addEventListener("click",rp),ip(),ji())}function jM(){ri||np(),ri.style.display="flex",rs(Mt.CRAFTING_TABLE),bt(!0),Or(),ji()}function QM(){if(ri){ri.style.display="none",Di(Mt.CRAFTING_TABLE),bt(!1),pe.type>0&&pe.count>0&&(Kn(pe.type,pe.count),Ml());for(let t=0;t<9;t++){const e=Ut[t];e&&e.type>0&&e.count>0&&(Kn(e.type,e.count),Ut[t]={type:0,count:0})}Or()}}function ji(){const t=document.getElementById("table-craft-grid"),e=document.getElementById("table-output-slot"),n=document.getElementById("table-hotbar-grid");if(!(!t||!e||!n)){if(t.innerHTML="",Ut.forEach((i,r)=>{const o=document.createElement("div");o.className="slot w-14 h-14 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const a=i||{type:0,count:0};if(a.type>0&&a.count>0){const c=Nt(a.type,38);if(c&&o.appendChild(c),a.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=a.count,o.appendChild(u)}}const l={get:()=>Ut[r]||{type:0,count:0},set:(c,u)=>{Ut[r]={type:c,count:c===0?0:u},Or()}};o.addEventListener("mousedown",c=>ui(l,c,ji)),o.addEventListener("contextmenu",c=>c.preventDefault()),t.appendChild(o)}),e.innerHTML="",Zn&&Zn.result>0){const i=Nt(Zn.result,48);if(i&&e.appendChild(i),Zn.count>1){const r=document.createElement("span");r.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold",r.textContent=Zn.count,e.appendChild(r)}}e.onmousedown=i=>{if(i.preventDefault(),Zn&&Zn.result>0){const r=Zn.result,o=Zn.count;if(i.shiftKey){if(Kn(r,o)){vn();for(let a=0;a<9;a++)Ut[a].count>1?Ut[a].count-=1:Ut[a]={type:0,count:0};Or(),ji()}}else{const a=as(r);if(pe.type===0){ti(r,o),vn();for(let l=0;l<9;l++)Ut[l].count>1?Ut[l].count-=1:Ut[l]={type:0,count:0};Or(),ji()}else if(pe.type===r&&pe.count+o<=a){pe.count+=o,Ni(),vn();for(let l=0;l<9;l++)Ut[l].count>1?Ut[l].count-=1:Ut[l]={type:0,count:0};Or(),ji()}}}},e.oncontextmenu=i=>i.preventDefault(),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div");r.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative";const o=Pe[i]||{type:0,count:0};if(o.type>0&&o.count>0){const l=Nt(o.type,30);if(l&&r.appendChild(l),r.title=`${oo[o.type]||"Item"}`,o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const a={get:()=>Pe[i]||{type:0,count:0},set:(l,c)=>{Pe[i]={type:l,count:l===0?0:c}},onShiftClick:(l,c)=>{const u=Ut.findIndex(d=>d.type===0||d.count===0);u!==-1&&(Ut[u]={type:l,count:c},Pe[i]={type:0,count:0},Or(),ji())}};r.addEventListener("mousedown",l=>ui(a,l,ji)),r.addEventListener("contextmenu",l=>l.preventDefault()),n.appendChild(r)}}}function Or(){Zn=tp(Ut,3,3)}function ip(){oi||(oi=document.createElement("div"),oi.id="recipe-book-modal",oi.className="fixed inset-0 z-[200] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-lg select-none",oi.innerHTML=`
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
  `,document.body.appendChild(oi),document.getElementById("close-recipe-book-btn").addEventListener("click",ey),JM())}function JM(){const t=document.getElementById("recipe-cards-container");t&&(t.innerHTML="",ep.forEach(e=>{const n=document.createElement("div");n.className="flex items-center justify-between bg-surface-container/60 p-3.5 rounded-xl border border-outline-variant hover:border-primary/50 transition-all";const i=document.createElement("div");i.className="flex items-center gap-3.5 max-w-[340px]";const r=document.createElement("div");r.className="w-12 h-12 rounded-xl bg-surface-container-lowest border-2 border-primary flex items-center justify-center relative shrink-0 shadow-[0_0_8px_rgba(120,220,119,0.3)]";const o=Nt(e.result,36);if(r.appendChild(o),e.count>1){const h=document.createElement("span");h.className="absolute -bottom-1 -right-1 bg-primary text-on-primary font-label-caps text-[10px] font-bold px-1 rounded",h.textContent=e.count,r.appendChild(h)}i.appendChild(r);const a=document.createElement("div");a.innerHTML=`
      <div class="font-headline-lg-mobile text-sm font-bold text-on-surface">${e.name}</div>
      <div class="font-label-caps text-[10px] font-semibold text-primary uppercase mb-0.5">${e.category}</div>
      <div class="font-body-md text-xs text-on-surface-variant leading-snug">${e.desc}</div>
    `,i.appendChild(a);const l=document.createElement("div");l.className="flex flex-col items-center gap-1 shrink-0";const c=document.createElement("span");c.className="font-label-caps text-[9px] font-bold text-on-surface-variant uppercase tracking-wider",c.textContent=`Grade ${e.gridSize}×${e.gridSize}`,l.appendChild(c);const u=document.createElement("div"),d=e.gridSize;u.className=`grid grid-cols-${d} gap-1 bg-surface-container-lowest p-1.5 rounded-lg border border-outline-variant`,u.style.gridTemplateColumns=`repeat(${d}, 28px)`,e.layout.forEach(h=>{const f=document.createElement("div");if(f.className="w-7 h-7 rounded bg-surface-container/80 border border-outline-variant/60 flex items-center justify-center",h>0){const p=Nt(h,22);f.appendChild(p),f.title=oo[h]||""}u.appendChild(f)}),l.appendChild(u),n.appendChild(i),n.appendChild(l),t.appendChild(n)}))}function rp(){oi||ip(),oi.style.display="flex",rs(Mt.RECIPE_BOOK)}function ey(){oi&&(oi.style.display="none",Di(Mt.RECIPE_BOOK))}const Fs={[s.IRON_ORE]:{output:s.IRON_INGOT,time:3.5},[s.PORKCHOP]:{output:s.COOKED_PORKCHOP,time:2.5},[s.MUTTON]:{output:s.COOKED_MUTTON,time:2.5},[s.COBBLESTONE]:{output:s.STONE,time:3}},al={[s.LAVA]:60,[s.COAL_ORE]:16,[s.WOOD_LOG]:6,[s.WOOD_PLANKS]:3,[s.STICK]:1.5},Bs=new Map;let qs=null,wi=null;function ty(t,e,n){const i=`${t},${e},${n}`;return Bs.has(i)||Bs.set(i,{x:t,y:e,z:n,inputItem:0,inputCount:0,fuelItem:0,fuelCount:0,outputItem:0,outputCount:0,burnTimeRemaining:0,maxBurnTime:0,cookProgress:0}),Bs.get(i)}function ny(t,e,n){qs=`${t},${e},${n}`,ty(t,e,n),wi||sy(),wi.style.display="flex",rs(Mt.FURNACE),bt(!0),Qn()}function iy(){wi&&(wi.style.display="none",qs=null,Di(Mt.FURNACE),bt(!1),pe.type>0&&pe.count>0&&(Kn(pe.type,pe.count),Ml()))}function ry(){return Bh(Mt.FURNACE)}function oy(t){for(const[e,n]of Bs.entries()){const r=n.inputItem>0&&Fs[n.inputItem]?Fs[n.inputItem]:null;n.burnTimeRemaining>0&&(n.burnTimeRemaining=Math.max(0,n.burnTimeRemaining-t)),r&&(n.outputItem===0||n.outputItem===r.output)?(n.burnTimeRemaining<=0&&n.fuelCount>0&&al[n.fuelItem]&&(n.maxBurnTime=al[n.fuelItem],n.burnTimeRemaining=n.maxBurnTime,n.fuelCount--,n.fuelCount<=0&&(n.fuelItem=0)),n.burnTimeRemaining>0?(n.cookProgress+=t,n.cookProgress>=r.time&&(n.cookProgress=0,n.inputCount--,n.inputCount<=0&&(n.inputItem=0),n.outputItem=r.output,n.outputCount=(n.outputCount||0)+1)):n.cookProgress=Math.max(0,n.cookProgress-t*.5)):n.cookProgress=0}qs&&ry()&&Qn()}function sy(){wi=document.createElement("div"),wi.id="furnace-modal",wi.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",wi.innerHTML=`
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
  `,document.body.appendChild(wi),document.getElementById("close-furnace-btn").addEventListener("click",iy)}function Qn(){if(!qs)return;const t=Bs.get(qs);if(!t)return;const e=document.getElementById("furnace-input-slot"),n=document.getElementById("furnace-fuel-slot"),i=document.getElementById("furnace-output-slot"),r=document.getElementById("furnace-flame-active"),o=document.getElementById("furnace-progress-bar"),a=document.getElementById("furnace-hotbar-grid");if(!e||!n||!i||!r||!o||!a)return;if(e.innerHTML="",t.inputItem>0&&t.inputCount>0){const f=Nt(t.inputItem,44);if(f&&e.appendChild(f),t.inputCount>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=t.inputCount,e.appendChild(p)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="MINÉRIO",e.appendChild(f)}const l={get:()=>({type:t.inputItem,count:t.inputCount}),set:(f,p)=>{t.inputItem=f,t.inputCount=f===0?0:p,t.inputCount<=0&&(t.inputItem=0)},allowEquip:f=>!!Fs[f]};if(e.onmousedown=f=>ui(l,f,Qn),e.oncontextmenu=f=>f.preventDefault(),n.innerHTML="",t.fuelItem>0&&t.fuelCount>0){const f=Nt(t.fuelItem,44);if(f&&n.appendChild(f),t.fuelCount>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=t.fuelCount,n.appendChild(p)}}else{const f=document.createElement("span");f.className="font-label-caps text-[10px] text-on-surface-variant uppercase",f.textContent="CARVÃO",n.appendChild(f)}const c={get:()=>({type:t.fuelItem,count:t.fuelCount}),set:(f,p)=>{t.fuelItem=f,t.fuelCount=f===0?0:p,t.fuelCount<=0&&(t.fuelItem=0)},allowEquip:f=>!!al[f]};n.onmousedown=f=>ui(c,f,Qn),n.oncontextmenu=f=>f.preventDefault();const u=t.maxBurnTime>0?Math.min(100,Math.round(t.burnTimeRemaining/t.maxBurnTime*100)):0;r.style.height=`${u}%`;const d=t.inputItem>0?Fs[t.inputItem]:null,h=d?Math.min(100,Math.round(t.cookProgress/d.time*100)):0;if(o.style.width=`${h}%`,i.innerHTML="",t.outputItem>0&&t.outputCount>0){const f=Nt(t.outputItem,56);if(f&&i.appendChild(f),t.outputCount>1){const p=document.createElement("span");p.className="absolute -top-2 -right-2 bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded shadow-[0_0_10px_rgba(120,220,119,0.8)] font-bold",p.textContent=t.outputCount,i.appendChild(p)}}else{const f=document.createElement("span");f.className="font-label-caps text-[11px] text-primary/70 uppercase",f.textContent="PRODUTO",i.appendChild(f)}i.onmousedown=f=>{if(f.preventDefault(),t.outputItem>0&&t.outputCount>0){if(f.shiftKey)Kn(t.outputItem,t.outputCount)&&(vn(),t.outputItem=0,t.outputCount=0,Qn());else if(pe.type===0)ti(t.outputItem,t.outputCount),vn(),t.outputItem=0,t.outputCount=0,Qn();else if(pe.type===t.outputItem){const p=as(t.outputItem),g=Math.min(t.outputCount,p-pe.count);g>0&&(pe.count+=g,t.outputCount-=g,t.outputCount<=0&&(t.outputItem=0),Ni(),vn(),Qn())}}},i.oncontextmenu=f=>f.preventDefault(),a.innerHTML="";for(let f=0;f<9;f++){const p=document.createElement("div"),g=Pe[f]||{type:0,count:0};if(p.className="slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",g.type>0&&g.count>0){const _=Nt(g.type,30);if(_&&p.appendChild(_),p.title=`${oo[g.type]||"Item"}`,g.count>1){const m=document.createElement("span");m.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",m.textContent=g.count,p.appendChild(m)}}const v={get:()=>Pe[f]||{type:0,count:0},set:(_,m)=>{Pe[f]={type:_,count:_===0?0:m},fi()},onShiftClick:(_,m)=>{Fs[_]?(t.inputItem===0||t.inputItem===_)&&(t.inputItem=_,t.inputCount=(t.inputCount||0)+m,Pe[f]={type:0,count:0},fi(),Qn()):al[_]&&(t.fuelItem===0||t.fuelItem===_)&&(t.fuelItem=_,t.fuelCount=(t.fuelCount||0)+m,Pe[f]={type:0,count:0},fi(),Qn())}};p.addEventListener("mousedown",_=>ui(v,_,Qn)),p.addEventListener("contextmenu",_=>_.preventDefault()),a.appendChild(p)}}const or=new Map;let ll=null,Oi=null;function ay(t,e,n){const i=`${t},${e},${n}`;return or.has(i)||or.set(i,new Array(27).fill(null).map(()=>({type:0,count:0}))),or.get(i)}function ly(t,e,n){const i=`${t},${e},${n}`;return or.has(i)?or.get(i).filter(o=>o&&o.type>0&&o.count>0):[]}function cy(t,e,n){const i=`${t},${e},${n}`;or.has(i)&&or.delete(i)}function uy(t,e,n){ll=`${t},${e},${n}`,ay(t,e,n),Oi||dy(),Oi.style.display="flex",rs(Mt.CHEST),bt(!0),Eu()}function fy(){Oi&&(Oi.style.display="none",ll=null,Di(Mt.CHEST),bt(!1),pe.type>0&&pe.count>0&&(Kn(pe.type,pe.count),Ml()))}function dy(){Oi=document.createElement("div"),Oi.id="chest-modal",Oi.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",Oi.innerHTML=`
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
  `,document.body.appendChild(Oi),document.getElementById("close-chest-btn").addEventListener("click",fy)}function Eu(){if(!ll)return;const t=or.get(ll);if(!t)return;const e=document.getElementById("chest-grid"),n=document.getElementById("chest-hotbar-grid");if(!(!e||!n)){e.innerHTML="",t.forEach((i,r)=>{const o=document.createElement("div"),a=i||{type:0,count:0};if(o.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${a.type>0?"border-tertiary/70 shadow-[0_0_8px_rgba(255,180,169,0.2)]":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,a.type>0&&a.count>0){const c=Nt(a.type,32);if(c&&o.appendChild(c),o.title=`${oo[a.type]||"Item"}`,a.count>1){const u=document.createElement("span");u.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",u.textContent=a.count,o.appendChild(u)}}const l={get:()=>t[r]||{type:0,count:0},set:(c,u)=>{t[r]={type:c,count:c===0?0:u}},onShiftClick:(c,u)=>{Kn(c,u)&&(t[r]={type:0,count:0},bt(!1))}};o.addEventListener("mousedown",c=>ui(l,c,Eu)),o.addEventListener("contextmenu",c=>c.preventDefault()),e.appendChild(o)}),n.innerHTML="";for(let i=0;i<9;i++){const r=document.createElement("div"),o=Pe[i]||{type:0,count:0};if(r.className=`slot w-full h-11 rounded-lg bg-surface-container-lowest border ${o.type>0?"border-primary/60":"border-outline-variant"} hover:border-primary flex items-center justify-center cursor-pointer transition-all relative`,o.type>0&&o.count>0){const l=Nt(o.type,32);if(l&&r.appendChild(l),r.title=`${oo[o.type]||"Item"}`,o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const a={get:()=>Pe[i]||{type:0,count:0},set:(l,c)=>{Pe[i]={type:l,count:l===0?0:c},fi()},onShiftClick:(l,c)=>{const u=as(l);let d=c;for(let h=0;h<27;h++)if(t[h].type===l&&t[h].count<u){const f=u-t[h].count,p=Math.min(f,d);if(t[h].count+=p,d-=p,d<=0)break}if(d>0){for(let h=0;h<27;h++)if(t[h].type===0||t[h].count===0){t[h]={type:l,count:d},d=0;break}}Pe[i]=d>0?{type:l,count:d}:{type:0,count:0},fi(),bt(!1)}};r.addEventListener("mousedown",l=>ui(a,l,Eu)),r.addEventListener("contextmenu",l=>l.preventDefault()),n.appendChild(r)}}}const Da={SHARPNESS:"sharpness",PROTECTION:"protection",EFFICIENCY:"efficiency",FIRE_ASPECT:"fire_aspect"};let Mu=1;const Id=new Map;function hy(){return Mu}function py(t){return Mu>t?(Mu-=t,!0):!1}function my(t,e,n=1){const r=(Id.get(t)||[]).filter(o=>o.type!==e);r.push({type:e,level:n}),Id.set(t,r)}let Fn=null;function op(){Fn||(Fn=document.createElement("div"),Fn.id="enchanting-modal",Fn.className="fixed inset-0 z-[160] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-md select-none",Fn.innerHTML=`
    <div class="glass-panel w-full max-w-lg bg-surface/95 backdrop-blur-2xl border border-purple-500/40 rounded-2xl shadow-[0_0_40px_rgba(147,51,234,0.35)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-purple-500/30 pb-3 mb-6">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-purple-400 text-3xl animate-pulse">auto_fix_high</span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-purple-300 tracking-tighter uppercase font-bold">Mesa de Encantamentos</h2>
        </div>
        <button id="close-enchant-modal" class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-xl font-bold p-1">&times;</button>
      </div>

      <p class="text-xs text-purple-200/80 mb-5 tracking-wide">
        Canalize seus pontos de experiência arcanos para forjar encantamentos lendários em seus equipamentos.
      </p>

      <!-- Player XP Indicator -->
      <div class="flex items-center justify-between bg-purple-950/40 border border-purple-500/30 rounded-xl px-4 py-3 mb-6">
        <span class="text-xs font-label-caps text-purple-300">Nível Arcano do Jogador:</span>
        <span id="enchant-player-level" class="text-lg font-bold text-green-400 font-mono">Nível 1</span>
      </div>

      <!-- Enchantment Options -->
      <div class="flex flex-col gap-3.5 mb-6">
        <button id="btn-enchant-sharpness" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-cyan-400 group-hover:scale-110 transition-transform">swords</span>
            <div class="text-left">
              <div class="font-bold text-sm text-cyan-200">Afiação Arcana (Sharpness II)</div>
              <div class="text-[11px] text-purple-300/70">+5 Dano de Ataque na Espada</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 2 Níveis</span>
        </button>

        <button id="btn-enchant-fire" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-orange-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform">local_fire_department</span>
            <div class="text-left">
              <div class="font-bold text-sm text-orange-200">Aspecto Flamejante (Fire Aspect)</div>
              <div class="text-[11px] text-purple-300/70">Incendeia monstros e mobs ao golpear</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 3 Níveis</span>
        </button>

        <button id="btn-enchant-efficiency" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-emerald-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-emerald-400 group-hover:scale-110 transition-transform">bolt</span>
            <div class="text-left">
              <div class="font-bold text-sm text-emerald-200">Eficiência (Efficiency III)</div>
              <div class="text-[11px] text-purple-300/70">+90% Velocidade de Mineração na Picareta</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 2 Níveis</span>
        </button>

        <button id="btn-enchant-protection" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-blue-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">shield</span>
            <div class="text-left">
              <div class="font-bold text-sm text-blue-200">Proteção Mística (Protection II)</div>
              <div class="text-[11px] text-purple-300/70">+30% Redução de Dano em Armaduras</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 2 Níveis</span>
        </button>
      </div>
    </div>
  `,document.body.appendChild(Fn),document.getElementById("close-enchant-modal").addEventListener("click",gy),document.getElementById("btn-enchant-sharpness").addEventListener("click",()=>Na(Da.SHARPNESS,2,2)),document.getElementById("btn-enchant-fire").addEventListener("click",()=>Na(Da.FIRE_ASPECT,1,3)),document.getElementById("btn-enchant-efficiency").addEventListener("click",()=>Na(Da.EFFICIENCY,3,2)),document.getElementById("btn-enchant-protection").addEventListener("click",()=>Na(Da.PROTECTION,2,2)))}function Na(t,e,n){if(py(n)){my("active_weapon",t,e),Fh();const i=pi();Qh(i.x,i.y+1,i.z),sp()}else vn()}function sp(){const t=document.getElementById("enchant-player-level");t&&(t.textContent=`Nível ${hy()}`)}function _y(){op(),sp(),Fn.classList.remove("hidden"),Fn.classList.add("flex")}function gy(){Fn&&(Fn.classList.add("hidden"),Fn.classList.remove("flex"))}let kn=null,Br=null,en=null,De=null,mt=s.WOODEN_SWORD,Ys=!1,Gr=!1,Dn=0,bs={x:NaN,y:NaN,z:NaN},hc=0;const qu=new Map,vy=new G(1.002,1.002,1.002),xy=new Yx(vy),Sy=new Rh({color:0,linewidth:2,transparent:!0,opacity:.6}),Ey=new G(1.006,1.006,1.006),ap=new xn({color:1973067,wireframe:!0,transparent:!0,opacity:0});function My(t){kn=t,Br=new Xx(xy,Sy),Br.visible=!1,kn.add(Br),en=new F(Ey,ap),en.visible=!1,kn.add(en),window.addEventListener("mousedown",Ay),window.addEventListener("mouseup",by),window.addEventListener("blur",()=>{Ys=!1,Gr=!1,Dn=0,en&&(en.visible=!1)})}function yy(t=.016){if(Ty(t),!ea()||Ds()){Br.visible=!1,en.visible=!1,De=null,Gr=!1,Ys=!1,Dn=0;return}const e=Js();if(!e)return;const n=new C(0,0,-1);n.applyQuaternion(e.quaternion);const i=rM(e.position,n);if(i)if(De=i,Br.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),Br.visible=!0,(i.hit.x!==bs.x||i.hit.y!==bs.y||i.hit.z!==bs.z)&&(bs={x:i.hit.x,y:i.hit.y,z:i.hit.z},Dn=0),Ys&&Gr){const r=Dt(i.hit.x,i.hit.y,i.hit.z);if(r!==s.AIR&&r!==s.WATER){const o=qE(r),a=YE(r,mt);if(Dn+=t*a/o,hc+=t,hc>=.22&&(hc=0,Ph(r),Su(i.hit.x,i.hit.y,i.hit.z,r)),en.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),en.visible=!0,ap.opacity=Va.clamp(Dn*.85,.15,.9),Dn>=1){if(eS(),Su(i.hit.x,i.hit.y,i.hit.z,r),r===s.CHEST&&(ly(i.hit.x,i.hit.y,i.hit.z).forEach(c=>{Vt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,c)}),cy(i.hit.x,i.hit.y,i.hit.z)),r===s.GRASS&&Math.random()<.35&&Vt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,s.WHEAT_SEEDS),r===s.WHEAT_STAGE_3)Vt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,s.WHEAT),Vt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,s.WHEAT_SEEDS),qu.delete(`${i.hit.x},${i.hit.y},${i.hit.z}`);else{const l=Kh(r);l>0&&Vt(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l)}Hn(kn,i.hit.x,i.hit.y,i.hit.z,s.AIR),Dn=0,Gr=!1,en.visible=!1}}else Dn=0,en.visible=!1}else Dn=0,en.visible=!1;else De=null,Br.visible=!1,en.visible=!1,Dn=0,Gr=!1}function Ty(t){for(const[e,n]of qu.entries())n.timer+=t,n.timer>=16&&(n.timer=0,n.stage===1?(n.stage=2,Hn(kn,n.x,n.y,n.z,s.WHEAT_STAGE_2)):n.stage===2&&(n.stage=3,Hn(kn,n.x,n.y,n.z,s.WHEAT_STAGE_3)))}function Ay(t){if(!ea()||Ds())return;const e=Js();if(!e)return;const n=new C(0,0,-1);if(n.applyQuaternion(e.quaternion),t.button===0){Ys=!0;const i=XM(e.position,n,3.8);if(i){const r=mt===s.DIAMOND_SWORD,o=mt===s.IRON_SWORD,a=mt===s.STONE_SWORD,l=mt===s.WOODEN_SWORD,c=mt===s.DIAMOND_PICKAXE||mt===s.IRON_PICKAXE||mt===s.STONE_PICKAXE||mt===s.WOODEN_PICKAXE;let u=r?9:o?7:a?5:l?4:c?3:2;const d=Ep();d&&!d.onGround&&!d.isFlying?(u=Math.floor(u*1.5),Fh(),Qh(i.x,i.y+.8,i.z)):Nh(),Ku(i,u,n);return}if(De){if(Dt(De.hit.x,De.hit.y,De.hit.z)===s.TNT){IM(De.hit.x,De.hit.y,De.hit.z);return}Gr=!0,bs={x:De.hit.x,y:De.hit.y,z:De.hit.z}}}else if(t.button===2){if(t.preventDefault(),mt===s.FLINT_AND_STEEL&&(dS(),De)){const i=Dt(De.hit.x,De.hit.y,De.hit.z),{prev:r}=De;if(i===s.OBSIDIAN||i===s.NETHERRACK){Hn(kn,r.x,r.y,r.z,s.NETHER_PORTAL),_M(r.x+.5,r.y+.5,r.z+.5);return}}if(mt===s.BOW&&up(s.ARROW)){gs(s.ARROW),NM(e.position,n);return}if(WE(mt)){const i=XE(mt);if(i>0){Vd(i),vn(),gs(mt);return}}if(De){const i=Dt(De.hit.x,De.hit.y,De.hit.z);if(i===s.BED)if(cM()){uS(),fM(),Vd(4);return}else{vn();return}if(Xh(mt)&&(i===s.GRASS||i===s.DIRT)){cS(),Hn(kn,De.hit.x,De.hit.y,De.hit.z,s.FARMLAND);return}if(mt===s.WHEAT_SEEDS&&i===s.FARMLAND){const r=De.hit.y+1;if(r<64&&Dt(De.hit.x,r,De.hit.z)===s.AIR){ic(),Hn(kn,De.hit.x,r,De.hit.z,s.WHEAT_STAGE_1),qu.set(`${De.hit.x},${r},${De.hit.z}`,{x:De.hit.x,y:r,z:De.hit.z,stage:1,timer:0}),gs(s.WHEAT_SEEDS);return}}if(i===s.LEVER){qM(De.hit.x,De.hit.y,De.hit.z),Ph(s.STONE);return}if(HE(i)){YM(De.hit.x,De.hit.y,De.hit.z);return}if(i===s.ENCHANTING_TABLE){_y();return}if(i===s.CRAFTING_TABLE){jM();return}if(i===s.FURNACE||i===s.FURNACE_LIT){ny(De.hit.x,De.hit.y,De.hit.z);return}if(i===s.CHEST){uy(De.hit.x,De.hit.y,De.hit.z);return}if(mt===s.REDSTONE_DUST){const{prev:r}=De;if(r.y>=0&&r.y<64&&Dt(r.x,r.y,r.z)===s.AIR){ic(),Hn(kn,r.x,r.y,r.z,s.REDSTONE_WIRE),gs(s.REDSTONE_DUST,1),sl();return}}if(GE(mt)){const{prev:r}=De;r.y>=0&&r.y<64&&Dt(r.x,r.y,r.z)===s.AIR&&(ic(),Hn(kn,r.x,r.y,r.z,mt),gs(mt,1),(mt===s.REDSTONE_TORCH||mt===s.LEVER||mt===s.PRESSURE_PLATE)&&sl())}}}}function by(t){t.button===0&&(Ys=!1,Gr=!1,Dn=0,en&&(en.visible=!1))}function Ry(t){mt=t}function Yu(){return mt}const Dd=[{type:s.WOODEN_SWORD,count:1},{type:s.WOODEN_PICKAXE,count:1},{type:s.GRASS,count:64},{type:s.DIRT,count:64},{type:s.WOOD_LOG,count:32},{type:s.COBBLESTONE,count:64},{type:s.TORCH,count:32},{type:s.WATER,count:1},{type:0,count:0}],Pe=new Array(36).fill(null).map(()=>({type:0,count:0}));for(let t=0;t<Dd.length;t++)Pe[t]={...Dd[t]};const Bt=[0,0,0,0];let $u=0,jn=null,si=null,Gs=null,No=null,Hs=null,Lt=null,Hr=null,kr=null,Wr=null,Vr=null,zr=null,Xr=null,Kr=null,yu=-.3,qa=!1,pc=0;function lp(){si||(si=document.createElement("div"),si.id="inventory-modal",si.className="fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none",si.innerHTML=`
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
  `,document.body.appendChild(si),document.getElementById("close-inventory-btn").addEventListener("click",cp),document.getElementById("open-recipe-book-inv").addEventListener("click",rp),window.addEventListener("keydown",t=>{t.code==="KeyE"&&Cy()}),wy(),ai())}function wy(){const t=document.getElementById("inv-char-preview-canvas");if(!t)return;Gs=new Ah({canvas:t,alpha:!0,antialias:!0}),Gs.setSize(140,200),Gs.setPixelRatio(Math.min(window.devicePixelRatio,2)),No=new bh,Hs=new tn(40,140/200,.1,20),Hs.position.set(0,1,3.2),Hs.lookAt(0,.9,0);const e=new Ih(16777215,1.4);No.add(e);const n=new Ch(16777215,1.8);n.position.set(2,4,3),No.add(n),Lt=new Xe,No.add(Lt);const i=new be({color:13011801}),r=new be({color:4528643}),o=new be({color:43176}),a=new be({color:1981066}),l=new lt({color:14870768,roughness:.35,metalness:.85}),c=new F(new G(.38,.38,.38),i);c.position.set(0,1.38,0),Lt.add(c);const u=new F(new G(.4,.15,.4),r);u.position.set(0,1.48,-.01),Lt.add(u),Hr=new F(new G(.44,.44,.44),l),Hr.position.set(0,1.38,0),Hr.visible=!1,Lt.add(Hr);const d=new F(new G(.42,.5,.2),o);d.position.set(0,.94,0),Lt.add(d),kr=new F(new G(.48,.54,.26),l),kr.position.set(0,.94,0),kr.visible=!1,Lt.add(kr);const h=new F(new G(.16,.48,.16),i);h.position.set(-.29,.93,0),Lt.add(h);const f=new F(new G(.16,.48,.16),i);f.position.set(.29,.93,0),Lt.add(f);const p=new F(new G(.18,.58,.18),a);p.position.set(-.1,.4,0),Lt.add(p);const g=new F(new G(.18,.58,.18),a);g.position.set(.1,.4,0),Lt.add(g),Wr=new F(new G(.2,.38,.2),l),Wr.position.set(-.1,.48,0),Wr.visible=!1,Lt.add(Wr),Vr=new F(new G(.2,.38,.2),l),Vr.position.set(.1,.48,0),Vr.visible=!1,Lt.add(Vr),zr=new F(new G(.21,.18,.23),l),zr.position.set(-.1,.2,.015),zr.visible=!1,Lt.add(zr),Xr=new F(new G(.21,.18,.23),l),Xr.position.set(.1,.2,.015),Xr.visible=!1,Lt.add(Xr),t.addEventListener("mousedown",v=>{qa=!0,pc=v.clientX}),window.addEventListener("mousemove",v=>{if(!qa)return;const _=v.clientX-pc;pc=v.clientX,yu+=_*.02}),window.addEventListener("mouseup",()=>{qa=!1})}function Oy(){if(Kr)return;function t(){if(!yl()){Kr=null;return}qa||(yu+=.012),Lt&&(Lt.rotation.y=yu),Gs&&No&&Hs&&Gs.render(No,Hs),Kr=requestAnimationFrame(t)}Kr=requestAnimationFrame(t)}function Nd(){const t=new lt({color:14870768,roughness:.35,metalness:.85}),e=new lt({color:2282478,roughness:.2,metalness:.65,emissive:537412,emissiveIntensity:.35});if(Hr){const i=Bt[0]||0;Hr.visible=i>0,i>0&&(Hr.material=i===s.DIAMOND_HELMET?e:t)}if(kr){const i=Bt[1]||0;kr.visible=i>0,i>0&&(kr.material=i===s.DIAMOND_CHESTPLATE?e:t)}if(Wr&&Vr){const i=Bt[2]||0;if(Wr.visible=i>0,Vr.visible=i>0,i>0){const r=i===s.DIAMOND_LEGGINGS?e:t;Wr.material=r,Vr.material=r}}if(zr&&Xr){const i=Bt[3]||0;if(zr.visible=i>0,Xr.visible=i>0,i>0){const r=i===s.DIAMOND_BOOTS?e:t;zr.material=r,Xr.material=r}}const n=document.getElementById("inv-defense-badge");n&&(n.textContent=`DEF: ${Zu()}`)}function Cy(){yl()?cp():Iy()}function Iy(){si||lp(),si.style.display="flex",rs(Mt.INVENTORY),bt(!0),Po(),ai(),Oy()}function cp(){if(si){si.style.display="none",Di(Mt.INVENTORY),bt(!1),Kr&&(cancelAnimationFrame(Kr),Kr=null),pe.type>0&&pe.count>0&&(Kn(pe.type,pe.count),Ml());for(let t=0;t<4;t++){const e=Kt[t];e&&e.type>0&&e.count>0&&(Kn(e.type,e.count),Kt[t]={type:0,count:0})}Po(),fi()}}function yl(){return Bh(Mt.INVENTORY)}function Dy(){return Pe.slice(0,9).map(t=>t.type)}function Ny(){return Pe.slice(0,9)}function Py(t){$u=t,fi()}function Zu(){let t=0;for(let e=0;e<4;e++)Bt[e]>0&&(t+=zE(Bt[e]));return t}function Kn(t,e=1){if(!t||t===0||e<=0)return!1;let n=e;const i=as(t);if(i>1){for(let r=0;r<36;r++)if(Pe[r].type===t&&Pe[r].count<i){const o=i-Pe[r].count,a=Math.min(o,n);if(Pe[r].count+=a,n-=a,n<=0)break}}if(n>0){for(let r=0;r<36;r++)if(Pe[r].type===0||Pe[r].count===0){const o=Math.min(i,n);if(Pe[r]={type:t,count:o},n-=o,n<=0)break}}return ai(),fi(),n===0}function up(t,e=1){let n=0;for(let i=0;i<36;i++)Pe[i].type===t&&(n+=Pe[i].count);return n>=e}function gs(t,e=1){if(!up(t,e))return!1;let n=e;for(let i=0;i<36;i++)if(Pe[i].type===t){const r=Math.min(Pe[i].count,n);if(Pe[i].count-=r,n-=r,Pe[i].count<=0&&(Pe[i]={type:0,count:0}),n<=0)break}return ai(),fi(),!0}function fi(){var e;const t=((e=Pe[$u])==null?void 0:e.type)||0;Ry(t);for(let n=0;n<9;n++){const i=document.getElementById(`hotbar-slot-${n}`);if(i&&(i.innerHTML="",Pe[n].type>0)){const r=Nt(Pe[n].type,38);if(r&&i.appendChild(r),Pe[n].count>1){const o=document.createElement("span");o.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",o.textContent=Pe[n].count,i.appendChild(o)}}}}function ai(){const t=document.getElementById("inv-armor-grid"),e=document.getElementById("inv-craft-2x2-grid"),n=document.getElementById("inv-craft-2x2-output"),i=document.getElementById("inv-storage-grid"),r=document.getElementById("inv-hotbar-grid");if(!t||!e||!n||!i||!r)return;Nd(),t.innerHTML="";const o=["security","checkroom","accessibility","directions_run"],a=["Capacete","Peitoral","Calças","Botas"],l=[[s.IRON_HELMET,s.DIAMOND_HELMET],[s.IRON_CHESTPLATE,s.DIAMOND_CHESTPLATE],[s.IRON_LEGGINGS,s.DIAMOND_LEGGINGS],[s.IRON_BOOTS,s.DIAMOND_BOOTS]];for(let c=0;c<4;c++){const u=document.createElement("div");if(u.className="slot w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all relative",u.title=`Slot de ${a[c]}`,Bt[c]>0){const h=Nt(Bt[c],30);h&&u.appendChild(h)}else{const h=document.createElement("span");h.className="material-symbols-outlined text-on-surface-variant text-base opacity-60",h.textContent=o[c],u.appendChild(h)}const d={get:()=>({type:Bt[c],count:Bt[c]>0?1:0}),set:(h,f)=>{Bt[c]=h,Nd()},allowEquip:h=>l[c].includes(h),maxStack:1};u.addEventListener("mousedown",h=>ui(d,h,ai)),u.addEventListener("contextmenu",h=>h.preventDefault()),t.appendChild(u)}e.innerHTML="";for(let c=0;c<4;c++){const u=document.createElement("div");u.className="slot w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all";const d=Kt[c]||{type:0,count:0};if(d.type>0&&d.count>0){const f=Nt(d.type,32);if(f&&u.appendChild(f),d.count>1){const p=document.createElement("span");p.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",p.textContent=d.count,u.appendChild(p)}}const h={get:()=>Kt[c]||{type:0,count:0},set:(f,p)=>{Kt[c]={type:f,count:f===0?0:p},Po()}};u.addEventListener("mousedown",f=>ui(h,f,ai)),u.addEventListener("contextmenu",f=>f.preventDefault()),e.appendChild(u)}if(n.innerHTML="",jn&&jn.result>0){const c=Nt(jn.result,40);if(c&&n.appendChild(c),jn.count>1){const u=document.createElement("span");u.className="slot-count font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded shadow absolute bottom-1 right-1",u.textContent=jn.count,n.appendChild(u)}}n.onmousedown=c=>{if(c.preventDefault(),jn&&jn.result>0){const u=jn.result,d=jn.count;if(c.shiftKey){if(Kn(u,d)){vn();for(let h=0;h<4;h++)Kt[h].count>1?Kt[h].count-=1:Kt[h]={type:0,count:0};Po(),ai()}}else{const h=as(u);if(pe.type===0){ti(u,d),vn();for(let f=0;f<4;f++)Kt[f].count>1?Kt[f].count-=1:Kt[f]={type:0,count:0};Po(),ai()}else if(pe.type===u&&pe.count+d<=h){pe.count+=d,Ni(),vn();for(let f=0;f<4;f++)Kt[f].count>1?Kt[f].count-=1:Kt[f]={type:0,count:0};Po(),ai()}}}},n.oncontextmenu=c=>c.preventDefault(),i.innerHTML="";for(let c=9;c<36;c++)Pd(c,i);r.innerHTML="";for(let c=0;c<9;c++)Pd(c,r,!0,c===$u)}function Pd(t,e,n=!1,i=!1){const r=document.createElement("div");r.className=`slot w-full h-11 md:h-12 rounded-lg bg-surface-container-lowest border ${i?"border-primary shadow-[0_0_10px_rgba(120,220,119,0.5)] active":"border-outline-variant hover:border-primary/80"} flex items-center justify-center cursor-pointer relative transition-all`;const o=Pe[t]||{type:0,count:0};if(o.type>0&&o.count>0){const l=Nt(o.type,34);if(l&&r.appendChild(l),r.title=oo[o.type]||"Item",o.count>1){const c=document.createElement("span");c.className="absolute bottom-0.5 right-1 font-label-caps text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",c.textContent=o.count,r.appendChild(c)}}const a={get:()=>Pe[t]||{type:0,count:0},set:(l,c)=>{Pe[t]={type:l,count:l===0?0:c},fi()},onShiftClick:(l,c)=>{if(t>=9){for(let u=0;u<9;u++)if(Pe[u].type===0||Pe[u].count===0){Pe[u]={type:l,count:c},Pe[t]={type:0,count:0},bt(!1);return}}else for(let u=9;u<36;u++)if(Pe[u].type===0||Pe[u].count===0){Pe[u]={type:l,count:c},Pe[t]={type:0,count:0},bt(!1);return}}};r.addEventListener("mousedown",l=>ui(a,l,ai)),r.addEventListener("contextmenu",l=>l.preventDefault()),e.appendChild(r)}function Po(){const t=Kt.map(e=>(e==null?void 0:e.type)||0);jn=tp(t,2,2)}const mc=new Map;function Ly(t=s.IRON_SWORD){const e=new Xe;let n,i,r,o,a,l,c;t===s.DIAMOND_SWORD?(n=561586,i=2282478,r=15793652,o=988970,a=440020,l=7877903,c=988970):t===s.IRON_SWORD?(n=6583435,i=14870768,r=16777215,o=3359061,a=9741240,l=8736014,c=3359061):t===s.STONE_SWORD?(n=3359061,i=6583435,r=9741240,o=1976635,a=4674921,l=7877903,c=1976635):(n=7877903,i=11817737,r=16498468,o=4528643,a=14251782,l=4528643,c=4528643);const u=new lt({color:n,roughness:.3,metalness:.7}),d=new lt({color:i,roughness:.25,metalness:.8}),h=new lt({color:r,roughness:.2,metalness:.9,emissive:t===s.DIAMOND_SWORD?537412:0,emissiveIntensity:.3}),f=new lt({color:o,roughness:.4,metalness:.85}),p=new lt({color:a,roughness:.2,metalness:.6}),g=new be({color:l}),v=new lt({color:c,roughness:.4,metalness:.85}),_=new F(new G(.048,.52,.032),h);_.position.set(0,.32,0),e.add(_);const m=new F(new G(.024,.48,.024),d);m.position.set(-.034,.3,0),e.add(m);const A=new F(new G(.024,.48,.024),d);A.position.set(.034,.3,0),e.add(A);const M=new F(new G(.012,.44,.016),u);M.position.set(-.048,.28,0),e.add(M);const S=new F(new G(.012,.44,.016),u);S.position.set(.048,.28,0),e.add(S);const D=new F(new G(.032,.055,.028),d);D.position.set(0,.6,0),e.add(D);const R=new F(new G(.018,.035,.034),h);R.position.set(0,.6,0),e.add(R);const w=new F(new G(.22,.044,.052),f);w.position.set(0,.05,0),e.add(w);const I=new F(new G(.038,.075,.056),f);I.position.set(-.115,.07,0),e.add(I);const T=new F(new G(.038,.075,.056),f);T.position.set(.115,.07,0),e.add(T);const E=new F(new G(.042,.042,.062),p);E.position.set(0,.05,0),e.add(E);const O=new F(new G(.036,.16,.036),g);O.position.set(0,-.055,0),e.add(O);const k=new F(new G(.042,.024,.042),v);k.position.set(0,-.02,0),e.add(k);const B=new F(new G(.042,.024,.042),v);B.position.set(0,-.08,0),e.add(B);const Y=new F(new G(.07,.048,.07),v);Y.position.set(0,-.155,0),e.add(Y);const q=new F(new G(.036,.022,.036),p);return q.position.set(0,-.18,0),e.add(q),e}function Uy(t=s.IRON_PICKAXE){const e=new Xe;let n,i;t===s.DIAMOND_PICKAXE?(n=2282478,i=14742270):t===s.IRON_PICKAXE?(n=14870768,i=16777215):t===s.STONE_PICKAXE?(n=6583435,i=9741240):(n=11817737,i=16498468);const r=new lt({color:n,roughness:.35,metalness:.75}),o=new lt({color:i,roughness:.25,metalness:.85}),a=new be({color:7877903}),l=new lt({color:3359061,roughness:.5,metalness:.8}),c=new F(new G(.038,.58,.038),a);c.position.set(0,.12,0),e.add(c);const u=new F(new G(.046,.06,.046),l);u.position.set(0,.34,0),e.add(u);const d=new F(new G(.12,.07,.055),r);d.position.set(0,.37,0),e.add(d);const h=new F(new G(.14,.05,.045),r);h.position.set(-.11,.34,0),h.rotation.z=.22,e.add(h);const f=new F(new G(.07,.032,.038),o);f.position.set(-.2,.3,0),f.rotation.z=.44,e.add(f);const p=new F(new G(.14,.05,.045),r);p.position.set(.11,.34,0),p.rotation.z=-.22,e.add(p);const g=new F(new G(.07,.032,.038),o);return g.position.set(.2,.3,0),g.rotation.z=-.44,e.add(g),e}function Fy(t=s.IRON_HOE){const e=new Xe;let n;t===s.IRON_HOE?n=14870768:t===s.STONE_HOE?n=6583435:n=11817737;const i=new lt({color:n,roughness:.35,metalness:.75}),r=new be({color:7877903}),o=new F(new G(.038,.54,.038),r);o.position.set(0,.1,0),e.add(o);const a=new F(new G(.2,.065,.05),i);a.position.set(.08,.34,0),e.add(a);const l=new F(new G(.05,.12,.045),i);return l.position.set(.16,.29,0),e.add(l),e}function By(){const t=new Xe,e=new be({color:7877903}),n=new xn({color:16317180}),i=new F(new G(.035,.28,.035),e);i.position.set(.06,.14,0),i.rotation.z=-.35,t.add(i);const r=new F(new G(.035,.28,.035),e);r.position.set(.06,-.14,0),r.rotation.z=.35,t.add(r);const o=new F(new G(.048,.12,.048),e);o.position.set(.11,0,0),t.add(o);const a=new F(new G(.012,.54,.012),n);return a.position.set(0,0,0),t.add(a),t}function Ld(t=!1){const e=new Xe,n=new lt({color:t?3359061:4528643,roughness:.4,metalness:.8}),i=new lt({color:t?14870768:11817737,roughness:.35,metalness:t?.85:.2}),r=new lt({color:3359061,roughness:.3,metalness:.9}),o=new F(new G(.32,.46,.04),n);o.position.set(0,.12,0),e.add(o);const a=new F(new G(.28,.42,.046),i);a.position.set(0,.12,.005),e.add(a);const l=new F(new G(.08,.08,.06),r);l.position.set(0,.12,.015),e.add(l);const c=new F(new G(.12,.04,.03),n);return c.position.set(0,.12,-.03),e.add(c),e}function Ud(){const t=new Xe,e=new be({color:8591427}),n=new be({color:16707722}),i=new lt({color:16436245,roughness:.2,metalness:.8}),r=new F(new G(.14,.02,.2),n);r.position.set(-.075,.02,0),r.rotation.z=-.15,t.add(r);const o=new F(new G(.14,.02,.2),n);o.position.set(.075,.02,0),o.rotation.z=.15,t.add(o);const a=new F(new G(.3,.015,.22),e);a.position.set(0,0,0),t.add(a);const l=new F(new G(.03,.025,.03),i);return l.position.set(.12,.01,.09),t.add(l),t}function Gy(){const t=new Xe,e=new be({color:7877903}),n=new be({color:11817737}),i=new F(new G(.38,.04,.54),n);i.position.set(0,0,0),t.add(i);const r=new F(new G(.04,.14,.54),e);r.position.set(-.2,.07,0),t.add(r);const o=new F(new G(.04,.14,.54),e);o.position.set(.2,.07,0),t.add(o);const a=new F(new G(.44,.14,.04),e);a.position.set(0,.07,-.27),t.add(a);const l=new F(new G(.44,.14,.04),e);return l.position.set(0,.07,.27),t.add(l),t}function Hy(){const t=new Xe,e=new lt({color:14870768,roughness:.3,metalness:.85}),n=new lt({color:1976635,roughness:.7,metalness:.2}),i=new F(new G(.14,.18,.04),e);i.position.set(-.04,.05,0),t.add(i);const r=new F(new G(.1,.12,.045),n);return r.position.set(.05,.02,0),t.add(r),t}function fp(t,e=.22){if(t===s.DIAMOND_SWORD||t===s.IRON_SWORD||t===s.STONE_SWORD||t===s.WOODEN_SWORD)return Ly(t);if(t===s.DIAMOND_PICKAXE||t===s.IRON_PICKAXE||t===s.STONE_PICKAXE||t===s.WOODEN_PICKAXE)return Uy(t);if(t===s.IRON_HOE||t===s.STONE_HOE||t===s.WOODEN_HOE)return Fy(t);if(t===s.BOW)return By();if(t===s.FLINT_AND_STEEL)return Hy();if(t===s.WOODEN_SHIELD)return Ld(!1);if(t===s.IRON_SHIELD)return Ld(!0);if(t===s.BOOK)return Ud();if(t===s.BOAT)return Gy();if(t===s.TORCH||t===s.REDSTONE_TORCH){const u=t===s.REDSTONE_TORCH,d=new Xe,h=new be({color:7877903}),f=new lt({color:u?15680580:16347926,emissive:u?12131356:16436245,emissiveIntensity:.95}),p=new F(new G(.04,.32,.04),h);p.position.set(0,.1,0),d.add(p);const g=new F(new G(.055,.09,.055),f);return g.position.set(0,.27,0),d.add(g),d}if(t===s.LEVER){const u=new Xe,d=new be({color:6583435}),h=new be({color:7877903}),f=new F(new G(.12,.04,.16),d);u.add(f);const p=new F(new G(.03,.22,.03),h);return p.position.set(0,.1,0),p.rotation.z=-.35,u.add(p),u}if(t===s.PRESSURE_PLATE){const u=new be({color:6583435});return new F(new G(e*.9,e*.15,e*.9),u)}if(t===s.ENCHANTING_TABLE){const u=new Xe,d=new be({color:1973067}),h=Ud(),f=new F(new G(e,e*.75,e),d);return f.position.set(0,e*.375,0),u.add(f),h.position.set(0,e*.82,0),h.scale.set(.65,.65,.65),u.add(h),u}if(t===s.GOLDEN_APPLE){const u=new lt({color:16436245,emissive:8736014,emissiveIntensity:.3,roughness:.2,metalness:.7});return new F(new Wu(e*.42,8,8),u)}if(t===s.BREAD){const u=new be({color:11817737});return new F(new G(e*.9,e*.45,e*.6),u)}if(t===s.WHEAT){const u=new be({color:15381256});return new F(new G(e*.35,e*.9,e*.35),u)}if(t===s.PORKCHOP||t===s.MUTTON){const u=new be({color:16020150});return new F(new G(e,e*.4,e*.8),u)}if(t===s.COOKED_PORKCHOP||t===s.COOKED_MUTTON){const u=new be({color:10105874});return new F(new G(e,e*.4,e*.8),u)}if(t===s.ROTTEN_FLESH){const u=new be({color:8702998});return new F(new G(e,e*.4,e*.8),u)}if(t===s.DIAMOND){const u=new lt({color:2282478,emissive:537412,emissiveIntensity:.4,roughness:.15,metalness:.7});return new F(new Ja(e*.5),u)}if(t===s.IRON_INGOT){const u=new lt({color:14870768,roughness:.3,metalness:.85});return new F(new G(e*.8,e*.3,e*.5),u)}if(t===s.FLINT){const u=new lt({color:1976635,roughness:.6,metalness:.3});return new F(new G(e*.6,e*.6,e*.3),u)}if(t===s.QUARTZ){const u=new lt({color:16317180,roughness:.2,metalness:.4});return new F(new Ja(e*.45),u)}const n=`${t}:${e}`;if(mc.has(n))return mc.get(n);const i=Ks[t];if(!i)return null;const r=new G(e,e,e),o=r.attributes.uv.array,a=[i.side,i.side,i.top,i.bottom,i.side,i.side];for(let u=0;u<6;u++){const d=a[u],h=Ns(d),f=u*8;o[f+0]=h.uMin,o[f+1]=h.vMax,o[f+2]=h.uMax,o[f+3]=h.vMax,o[f+4]=h.uMin,o[f+5]=h.vMin,o[f+6]=h.uMax,o[f+7]=h.vMin}r.attributes.uv.needsUpdate=!0;const l=new be({map:xl(),transparent:!0,alphaTest:.2}),c=new F(r,l);return mc.set(n,c),c}let Nn=null,yi=null,yn=null,vs=null,Mr=null,pn=null,yr=null,Tr=null,Pn=null,Ai=null,qr=null,Yr=null,$r=null,Zr=null,jr=null,Qr=null,ks=null,Fd=-1,Wt=null,dp=null,_c=0;function ky(t){Nn&&t.remove(Nn),Nn=new Xe,Nn.name="player-3d-character",yi=new Xe,Nn.add(yi);const e=new be({color:13011801}),n=new be({color:4528643}),i=new be({color:43176}),r=new be({color:1981066}),o=new xn({color:16777215}),a=new xn({color:2450411}),l=new be({color:8736014});Wt=new lt({color:14870768,roughness:.35,metalness:.85}),dp=new lt({color:2282478,roughness:.2,metalness:.65,emissive:537412,emissiveIntensity:.35}),yn=new Xe,yn.position.set(0,1.42,0);const c=new F(new G(.4,.4,.4),e);c.position.set(0,.2,0),yn.add(c);const u=new F(new G(.42,.16,.42),n);u.position.set(0,.33,-.01),yn.add(u);const d=new F(new G(.08,.05,.02),o);d.position.set(-.09,.21,.205),yn.add(d);const h=new F(new G(.04,.05,.022),a);h.position.set(-.11,.21,.206),yn.add(h);const f=new F(new G(.08,.05,.02),o);f.position.set(.09,.21,.205),yn.add(f);const p=new F(new G(.04,.05,.022),a);p.position.set(.07,.21,.206),yn.add(p);const g=new F(new G(.12,.03,.02),l);g.position.set(0,.11,.205),yn.add(g),Pn=new Xe;const v=new F(new G(.46,.22,.46),Wt);v.position.set(0,.31,0),Pn.add(v);const _=new F(new G(.04,.24,.44),Wt);_.position.set(-.21,.18,0),Pn.add(_);const m=new F(new G(.04,.24,.44),Wt);m.position.set(.21,.18,0),Pn.add(m);const A=new F(new G(.44,.24,.04),Wt);A.position.set(0,.18,-.21),Pn.add(A);const M=new F(new G(.08,.1,.04),Wt);M.position.set(0,.22,.21),Pn.add(M),Pn.visible=!1,yn.add(Pn),yi.add(yn),vs=new Xe,vs.position.set(0,.9,0);const S=new F(new G(.44,.52,.22),i);S.position.set(0,.26,0),vs.add(S),Ai=new Xe;const D=new F(new G(.48,.54,.26),Wt);D.position.set(0,.26,0),Ai.add(D);const R=new F(new G(.18,.14,.26),Wt);R.position.set(-.3,.46,0),Ai.add(R);const w=new F(new G(.18,.14,.26),Wt);w.position.set(.3,.46,0),Ai.add(w),Ai.visible=!1,vs.add(Ai),yi.add(vs),Mr=new Xe,Mr.position.set(-.31,1.38,0);const I=new F(new G(.18,.5,.18),e);I.position.set(0,-.25,0),Mr.add(I);const T=new F(new G(.186,.18,.186),i);T.position.set(0,-.1,0),Mr.add(T),qr=new F(new G(.2,.26,.2),Wt),qr.position.set(0,-.14,0),qr.visible=!1,Mr.add(qr),yi.add(Mr),pn=new Xe,pn.position.set(.31,1.38,0);const E=new F(new G(.18,.5,.18),e);E.position.set(0,-.25,0),pn.add(E);const O=new F(new G(.186,.18,.186),i);O.position.set(0,-.1,0),pn.add(O),Yr=new F(new G(.2,.26,.2),Wt),Yr.position.set(0,-.14,0),Yr.visible=!1,pn.add(Yr),ks=new Xe,ks.position.set(0,-.42,.12),pn.add(ks),yi.add(pn),yr=new Xe,yr.position.set(-.11,.9,0);const k=new F(new G(.2,.6,.2),r);k.position.set(0,-.3,0),yr.add(k),$r=new F(new G(.22,.36,.22),Wt),$r.position.set(0,-.18,0),$r.visible=!1,yr.add($r),jr=new F(new G(.23,.2,.25),Wt),jr.position.set(0,-.48,.015),jr.visible=!1,yr.add(jr),yi.add(yr),Tr=new Xe,Tr.position.set(.11,.9,0);const B=new F(new G(.2,.6,.2),r);return B.position.set(0,-.3,0),Tr.add(B),Zr=new F(new G(.22,.36,.22),Wt),Zr.position.set(0,-.18,0),Zr.visible=!1,Tr.add(Zr),Qr=new F(new G(.23,.2,.25),Wt),Qr.position.set(0,-.48,.015),Qr.visible=!1,Tr.add(Qr),yi.add(Tr),Nn.visible=!1,t.add(Nn),Nn}function Wy(t,e,n,i,r,o,a,l,c,u){if(!Nn||(Nn.visible=u,!u))return;Nn.position.copy(e),yi.rotation.y=n+Math.PI,yn.rotation.x=-i,r?_c+=t*(a?4:10):_c=0;const d=Math.sin(_c)*.65;if(yr.rotation.x=-d,Tr.rotation.x=d,Mr.rotation.x=d*.75,l<1){const h=Math.sin(l*Math.PI);pn.rotation.x=-1.4*h,pn.rotation.z=-.3*h,pn.rotation.y=.4*h}else pn.rotation.x=-d*.75,pn.rotation.z=0,pn.rotation.y=0;if(Vy(),c!==Fd&&(Fd=c,ks.clear(),c>0)){const h=fp(c,.28);h&&(Sl(c)?(h.position.set(0,-.3,-.14),h.rotation.set(-.85,0,0)):c===s.TORCH||c===s.FLINT_AND_STEEL?(h.position.set(0,-.3,-.12),h.rotation.set(-.5,0,0)):(h.position.set(0,-.26,-.1),h.rotation.set(.15,.4,0)),ks.add(h))}}function Xi(t,e){const n=e===s.DIAMOND_HELMET||e===s.DIAMOND_CHESTPLATE||e===s.DIAMOND_LEGGINGS||e===s.DIAMOND_BOOTS?dp:Wt;t.isMesh?t.material=n:t.children&&t.children.forEach(i=>{i.isMesh&&(i.material=n)})}function Vy(){const t=Bt[0]||0;t>0?(Pn.visible=!0,Xi(Pn,t)):Pn.visible=!1;const e=Bt[1]||0;e>0?(Ai.visible=!0,qr.visible=!0,Yr.visible=!0,Xi(Ai,e),Xi(qr,e),Xi(Yr,e)):(Ai.visible=!1,qr.visible=!1,Yr.visible=!1);const n=Bt[2]||0;n>0?($r.visible=!0,Zr.visible=!0,Xi($r,n),Xi(Zr,n)):($r.visible=!1,Zr.visible=!1);const i=Bt[3]||0;i>0?(jr.visible=!0,Qr.visible=!0,Xi(jr,i),Xi(Qr,i)):(jr.visible=!1,Qr.visible=!1)}const hp=.36,pp=-.3,mp=-.44,_p=-.3,gp=.32,vp=-.1;let mn=null,gc=null,vc=null,Cn=null,Yi=-1,Lo=1,zy=5.8,vr=0;function Xy(){const t=Js();if(!t)return;mn=new Xe;const e=new be({color:13011801,depthTest:!0}),n=new be({color:43176,depthTest:!0});gc=new F(new G(.1,.1,.36),e),gc.position.set(0,0,.1),mn.add(gc),vc=new F(new G(.108,.108,.14),n),vc.position.set(0,0,.23),mn.add(vc),xp(),mn.position.set(hp,pp,mp),mn.rotation.set(_p,gp,vp),mn.renderOrder=999,t.add(mn),document.addEventListener("mousedown",Ky)}function Ky(t){ea()&&(t.button===0||t.button===2)&&(Lo=0)}function xp(){const t=Yu();if(t!==Yi&&(Yi=t,Cn&&(mn.remove(Cn),Cn=null),Yi>0)){const e=fp(Yi,.22);e&&(Cn=e,Sl(Yi)?(Cn.position.set(.01,.04,-.09),Cn.rotation.set(-.62,.2,-.12)):Yi===s.TORCH||Yi===s.FLINT_AND_STEEL?(Cn.position.set(.01,.04,-.09),Cn.rotation.set(-.4,.2,-.1)):(Cn.position.set(.02,.06,-.12),Cn.rotation.set(.25,.55,-.08)),mn.add(Cn))}}function qy(t,e){if(!mn)return;const n=Gh()===Jr.FIRST_PERSON;if(mn.visible=n,!n)return;xp();let i=0,r=0,o=0,a=0,l=0;if(Lo<1){const h=Sl(Yi)?6.2:zy;Lo=Math.min(1,Lo+t*h);const f=Math.sin(Lo*Math.PI);i=-f*1.05,r=f*.6,o=-f*.4,a=-f*.09,l=-f*.14}const c=Ep();let u=0,d=0;c.onGround&&c.moving?(vr+=t*10,u=Math.cos(vr*.5)*.025,d=Math.abs(Math.sin(vr))*.035):c.isFlying&&c.moving?(vr+=t*6,u=Math.cos(vr*.5)*.015,d=Math.sin(vr)*.015):vr=0,mn.position.set(hp+u,pp+d+a,mp+l),mn.rotation.set(_p+i,gp+r,vp+o)}function Yy(){return Lo}const At=.3,Rs=1.8,cl=1.62,Bd=28,$y=8.6,Zy=5.8,jy=14,Gd=10,Qy=3.6;let xs=0;const so=20,Jy=6,e1=2,t1=5,n1=.5,Hd=3.2;let sr=null;const re=new C;let Re=new C,nn=so,Jn=!1,Un=!1,Ti=!1,ws=!1,Os=0,Oo=!1,ul=0,fl=0,Pa=0,Cr=0,ei=!1,Ss=0,Es=0;const Ao=[];let kd=!1,Wd=!1;function i1(){sr=Js(),nn=so,Re.set(0,0,0),Un=!1;const t=Xu();re.set(t.x,t.y,t.z),Cr=re.y,ei=!1,sr&&sr.position.set(re.x,re.y+cl,re.z),Wd||(Wd=!0,window.addEventListener("keydown",e=>{if(e.code==="F4"||e.code==="F5"){e.preventDefault();const n=TS();d1(["👁 Perspectiva: 1ª Pessoa","🎥 Perspectiva: 3ª Pessoa (Costas)","📸 Perspectiva: 3ª Pessoa (Frontal)"][n]);try{vn()}catch{}}}))}function Sp(){return nn}function r1(){return so}function o1(){return ul}function s1(){return Un}function pi(){return re}function Ep(){return{onGround:Jn,moving:Oo,inWater:Ti,submerged:ws,isFlying:Un}}function Qo(t,e=null){if(nn<=0)return;const n=Zu(),i=Math.min(.8,n*.04),r=Math.max(1,t*(1-i));nn=Math.max(0,nn-r),ul=1,fl=0,tS(),e&&(Re.x+=e.x*5,Re.z+=e.z*5,Re.y=3.5)}function a1(t){nn<=0||(nn=Math.min(so,nn+t))}function Vd(t){a1(t)}function zd(){nn=so,Re.set(0,0,0),Jn=!1,Un=!1,Os=0,fl=0;const t=Xu();re.set(t.x,t.y,t.z),Cr=re.y,ei=!1,sr&&sr.position.set(re.x,re.y+cl,re.z)}function Mp(t,e,n){return e<0?!0:zu(Dt(t,e,n))}function xr(t,e,n){const i=Math.floor(t-At+.001),r=Math.floor(t+At-.001),o=Math.floor(e),a=Math.floor(e+Rs-.001),l=Math.floor(n-At+.001),c=Math.floor(n+At-.001);for(let u=o;u<=a;u++)for(let d=l;d<=c;d++)for(let h=i;h<=r;h++)if(Mp(h,u,d))return!0;return!1}function Xd(t,e,n){return Dt(t,e,n)===s.WATER}function l1(t){if(sr||(sr=Js()),!sr)return;const e=ea();ul=Math.max(0,ul-t*2),Ti=Xd(Math.floor(re.x),Math.floor(re.y+.2),Math.floor(re.z)),ws=Xd(Math.floor(re.x),Math.floor(re.y+cl),Math.floor(re.z));const n=e&&$n("Space"),i=performance.now()/1e3;if(n&&!kd){for(Es=.15,Ao.push(i);Ao.length>0&&i-Ao[0]>.55;)Ao.shift();Ao.length>=3&&(Un=!Un,Re.set(0,0,0),Ao.length=0,ei=!1,Jx(Un))}kd=n,Es>0&&(Es-=t),Jn?Ss=.12:Ss=Math.max(0,Ss-t);let r=0,o=0;e&&($n("KeyW")&&(r+=1),$n("KeyS")&&(r-=1),$n("KeyD")&&(o+=1),$n("KeyA")&&(o-=1));const a=Sd(),l=-Math.sin(a),c=-Math.cos(a),u=Math.cos(a),d=-Math.sin(a);let h=0,f=0;if(r!==0||o!==0){h=l*r+u*o,f=c*r+d*o;const g=Math.hypot(h,f);g>.001&&(h/=g,f/=g)}if(Oo=r!==0||o!==0,Un){ei=!1;const g=jy,v=1-Math.exp(-65*t);Re.x+=(h*(Oo?g:0)-Re.x)*v,Re.z+=(f*(Oo?g:0)-Re.z)*v;let _=0;e&&($n("Space")&&(_+=Gd),($n("ShiftLeft")||$n("ShiftRight"))&&(_-=Gd)),Re.y+=(_-Re.y)*v,re.x+=Re.x*t,xr(re.x,re.y,re.z)&&(Re.x>0?re.x=Math.floor(re.x+At)-At-.001:Re.x<0&&(re.x=Math.floor(re.x-At)+1+At+.001),Re.x=0),re.z+=Re.z*t,xr(re.x,re.y,re.z)&&(Re.z>0?re.z=Math.floor(re.z+At)-At-.001:Re.z<0&&(re.z=Math.floor(re.z-At)+1+At+.001),Re.z=0),re.y+=Re.y*t,xr(re.x,re.y,re.z)&&(Re.y>0?re.y=Math.floor(re.y+Rs)-Rs-.001:Re.y<0&&(re.y=Math.floor(re.y)+1),Re.y=0)}else{const g=(Jn||Ss>0)&&!Ti;Es>0&&g?(Re.y=$y,Jn=!1,Ss=0,Es=0,Cr=re.y,ei=!1,Dh()):Ti&&n&&(Re.y=Math.max(Re.y,4.5),ei=!1);const v=Ti?Bd*.3:Bd;Re.y-=v*t;const _=Ti?8:36;Re.y<-_&&(Re.y=-_),Re.y<0?ei||(ei=!0,Cr=re.y):(ei=!1,Cr=re.y);const m=(ws?.7:1)*(Ti?Qy:Zy);if(Oo){const S=1-Math.exp(-65*t);Re.x+=(h*m-Re.x)*S,Re.z+=(f*m-Re.z)*S;const D=Math.hypot(Re.x,Re.z);if(Jn&&!Ti&&D>1.2&&!Un){if(xs+=t,xs>=.42){xs=0;const R=Dt(Math.floor(re.x),Math.floor(re.y-.2),Math.floor(re.z));fS(R)}}else xs=0}else{const S=Math.exp(-14*t);Re.x*=S,Re.z*=S,xs=0}const A=(S,D)=>{if(!Jn)return!1;const R=.55;return xr(re.x+S,re.y+R,re.z+D)?!1:(re.y+=R,!0)};re.x+=Re.x*t,xr(re.x,re.y,re.z)&&(A(0,0)||(Re.x>0?re.x=Math.floor(re.x+At)-At-.001:Re.x<0&&(re.x=Math.floor(re.x-At)+1+At+.001),Re.x=0)),re.z+=Re.z*t,xr(re.x,re.y,re.z)&&(A(0,0)||(Re.z>0?re.z=Math.floor(re.z+At)-At-.001:Re.z<0&&(re.z=Math.floor(re.z-At)+1+At+.001),Re.z=0));const M=Re.y<0;if(re.y+=Re.y*t,Jn=!1,xr(re.x,re.y,re.z))if(M){Jn=!0;const S=Math.floor(re.y)+1,D=Math.max(0,Cr-S);if(re.y=S,Re.y=0,!Ti&&D>Hd){const R=Math.floor((D-Hd)*1.5);R>0&&Qo(R)}ei=!1,Cr=re.y}else re.y=Math.floor(re.y+Rs)-Rs-.001,Re.y=0}re.y<-10&&zd(),AS(re,cl,Mp);const p=Gh()!==Jr.FIRST_PERSON;Wy(t,re,Sd(),yS(),Oo,Jn,Un,Yy(),Yu(),p),ws&&!Un?(Os+=t,Os>Jy&&Qo(e1*t)):Os=Math.max(0,Os-t*2.5),nn>0&&nn<so&&!ws&&(fl+=t,fl>t1&&(nn=Math.min(so,nn+n1*t))),nn<=0?(Pa+=t,e&&$n("Space")&&Pa>.8&&(zd(),Pa=0)):Pa=0}const Kd=document.getElementById("debug-info");let Qi=null,xc=0,La=0,Sc=60;const c1={[at.PLAINS]:"Planície Florida",[at.FOREST]:"Floresta Densa",[at.DESERT]:"Deserto de Dunas",[at.SNOWY_MOUNTAINS]:"Picos Nevados",[at.OCEAN]:"Costa / Oceano"};function u1(){if(!Qi){Qi=document.createElement("div"),Qi.id="fly-badge",Object.assign(Qi.style,{position:"absolute",top:"58px",left:"50%",transform:"translateX(-50%)",padding:"4px 14px",borderRadius:"20px",background:"linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))",border:"1px solid rgba(255,255,255,0.4)",boxShadow:"0 0 15px rgba(59,130,246,0.6)",color:"#ffffff",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase",pointerEvents:"none",zIndex:"25",display:"none",backdropFilter:"blur(4px)",animation:"pulse 1.8s infinite"}),Qi.innerHTML='⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';const t=document.getElementById("hud");t&&t.appendChild(Qi)}}function f1(t,e){if(u1(),xc++,La+=t,La>=.5&&(Sc=Math.round(xc/La),xc=0,La=0),Kd&&e.position){const n=e.position,i=Zo(Math.floor(n.x),Math.floor(n.z)),r=c1[i]||"Desconhecido",o=uM(),a=jo(),l=a?"☀️":"🌙";Kd.innerHTML=`<b>FPS:</b> <span style="color:${Sc>=50?"#4ade80":"#f87171"}">${Sc}</span><br><b>XYZ:</b> ${n.x.toFixed(1)} / ${n.y.toFixed(1)} / ${n.z.toFixed(1)}<br><b>Bioma:</b> <span style="color:#38bdf8;">${r}</span><br><b>Hora:</b> ${l} <span style="color:#fde047;">${o}</span> (${a?"Dia":"Noite"})`}Qi&&(Qi.style.display=s1()?"block":"none")}let In=null,Ec=null;function d1(t){if(!In){In=document.createElement("div"),In.id="camera-mode-toast",Object.assign(In.style,{position:"absolute",top:"24px",left:"50%",transform:"translateX(-50%)",padding:"6px 18px",borderRadius:"24px",background:"rgba(15, 23, 42, 0.85)",border:"1px solid rgba(74, 222, 128, 0.5)",boxShadow:"0 0 20px rgba(74, 222, 128, 0.3)",color:"#4ade80",fontSize:"13px",fontWeight:"bold",letterSpacing:"0.8px",pointerEvents:"none",zIndex:"100",transition:"opacity 0.3s ease, transform 0.3s ease",opacity:"0",backdropFilter:"blur(6px)"});const e=document.getElementById("hud");e&&e.appendChild(In)}In.textContent=t,In.style.opacity="1",In.style.transform="translateX(-50%) translateY(4px)",Ec&&clearTimeout(Ec),Ec=setTimeout(()=>{In&&(In.style.opacity="0",In.style.transform="translateX(-50%) translateY(0px)")},2200)}let dl=0,Tu=null,Uo=null,qd=!1;function h1(){const t=document.getElementById("hud"),e=document.createElement("div");e.id="hotbar-frame",Object.assign(e.style,{position:"absolute",bottom:"14px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"4px",padding:"5px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.85)",border:"2px solid rgba(255,255,255,0.15)",boxShadow:"0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",pointerEvents:"none",zIndex:"20"}),Tu=e;for(let n=0;n<9;n++){const i=document.createElement("div");i.className="hotbar-slot",i.dataset.index=n,Object.assign(i.style,{width:"46px",height:"46px",borderRadius:"6px",border:"2px solid rgba(0,0,0,0.55)",background:"rgba(30, 41, 59, 0.9)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"75% 75%",position:"relative",transition:"border-color 0.15s, transform 0.15s, box-shadow 0.15s",cursor:"pointer"});const r=document.createElement("span");r.className="hotbar-slot-num",Object.assign(r.style,{position:"absolute",top:"1px",left:"3px",fontSize:"10px",color:"#94a3b8",fontWeight:"bold",opacity:"0.6"}),r.textContent=n+1,i.appendChild(r);const o=document.createElement("span");o.className="hotbar-slot-count",Object.assign(o.style,{position:"absolute",bottom:"1px",right:"3px",fontSize:"11px",color:"#fff",textShadow:"0 1px 2px #000",fontWeight:"bold",display:"none"}),i.appendChild(o),e.appendChild(i)}t.appendChild(e),Uo=document.createElement("div"),Uo.id="hotbar-name",Object.assign(Uo.style,{position:"absolute",bottom:"72px",left:"50%",transform:"translateX(-50%)",color:"#fff",fontSize:"13px",fontWeight:"600",letterSpacing:"0.5px",padding:"4px 14px",borderRadius:"12px",background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255,255,255,0.18)",backdropFilter:"blur(4px)",pointerEvents:"none",zIndex:"20",textAlign:"center",whiteSpace:"nowrap"}),t.appendChild(Uo),ju()}function p1(){if(!yl()){for(let t=0;t<9;t++)$n(`Digit${t+1}`)&&yp(t);qd||(qd=!0,document.addEventListener("wheel",m1,{passive:!1})),ju()}}let Ua=0;function m1(t){if(!(!ea()||yl())&&(t.preventDefault(),Ua+=Math.sign(t.deltaY),Math.abs(Ua)>=1)){const e=Ua>0?1:-1;Ua=0;const n=(dl+e+9)%9;yp(n)}}function yp(t){dl=t,Py(t),ju()}function ju(){var n;if(!Tu)return;const t=Ny(),e=Tu.children;for(let i=0;i<e.length;i++){const r=i===dl,o=t[i]||{type:0,count:0},a=o.type||0,l=o.count||0;if(e[i].style.borderColor=r?"rgba(74, 222, 128, 0.95)":"rgba(0,0,0,0.55)",e[i].style.transform=r?"scale(1.14) translateY(-3px)":"scale(1)",e[i].style.boxShadow=r?"0 0 14px rgba(74, 222, 128, 0.4), 0 6px 14px rgba(0,0,0,0.6)":"none",e[i].style.zIndex=r?"2":"1",a>0){const u=Nt(a,38);u&&(e[i].style.backgroundImage=`url(${u.toDataURL()})`)}else e[i].style.backgroundImage="none";const c=e[i].querySelector(".hotbar-slot-count");c&&(l>1?(c.textContent=l,c.style.display="block"):c.style.display="none")}if(Uo){const i=((n=t[dl])==null?void 0:n.type)||0;Uo.textContent=oo[i]||""}}let qt=null,Yn=0;function _1(t){qt&&t.remove(qt),qt=new jx(16752964,0,20,1.6),qt.castShadow=!1,t.add(qt)}function g1(t,e,n,i,r){if(!qt)return;const o=i===s.TORCH,a=i===s.LAVA,l=i===s.GLOWSTONE;if(o||a||l){const c=r?r.x:n.x,u=r?r.y-.2:n.y+1.2,d=r?r.z:n.z;if(qt.position.set(c,u,d),o){qt.color.setHex(16752187);const f=2.4*(1+.12*Math.sin(e*16)+.08*Math.sin(e*31)+.04*(Math.random()-.5));Yn=Va.lerp(Yn,f,t*14),qt.distance=20}else if(a){qt.color.setHex(16733457);const f=2*(1+.06*Math.sin(e*8));Yn=Va.lerp(Yn,f,t*10),qt.distance=18}else l&&(qt.color.setHex(16771635),Yn=Va.lerp(Yn,2.8,t*12),qt.distance=24);qt.intensity=Yn}else Yn=Math.max(0,Yn-t*8),qt.intensity=Yn}let Au=[],Ya=[],Fo=null,Ir=null,Ms=null;function v1(){const t=document.getElementById("hud");Fo=document.createElement("div"),Fo.id="damage-vignette",Fo.style.opacity="0",t.appendChild(Fo);const e=document.createElement("div");e.style.cssText="position:fixed; bottom:82px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; gap:4px; align-items:flex-start; pointer-events:none; z-index:20;",Ms=document.createElement("div"),Ms.id="armor-bar",Ms.style.cssText="display:flex; gap:3px; font-size:16px; color:#38bdf8; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8));";for(let r=0;r<10;r++){const o=document.createElement("span");o.textContent="🛡️",o.style.cssText="font-size:14px; opacity:0; transition:opacity 0.2s;",Ya.push(o),Ms.appendChild(o)}e.appendChild(Ms);const n=document.createElement("div");n.id="health-bar",n.style.cssText="display:flex; gap:3px;";const i=r1()/2;for(let r=0;r<i;r++){const o=document.createElement("span");o.className="heart",o.textContent="♥",Au.push(o),n.appendChild(o)}e.appendChild(n),t.appendChild(e),Ir=document.createElement("div"),Ir.id="death-overlay",Ir.innerHTML='<div class="death-title">☠ VOCÊ MORREU</div><div class="death-hint">Pressione ESPAÇO para renascer</div>',Ir.style.display="none",t.appendChild(Ir)}function x1(){const t=Sp();for(let i=0;i<Au.length;i++){const r=t-i*2;Au[i].className="heart "+(r>=2?"full":r===1?"half":"empty")}const e=Zu(),n=Math.floor(e/2);for(let i=0;i<Ya.length;i++)i<n?Ya[i].style.opacity="1":Ya[i].style.opacity="0";Fo&&(Fo.style.opacity=o1()*.75),Ir&&(Ir.style.display=t<=0?"flex":"none")}const Cs={SUNNY:"sunny",RAIN:"rain"};let Mc=Cs.SUNNY,yc=120+Math.random()*60,Dr=null,Ws=null;const bu=800;function S1(t){Ws=new an;const e=new Float32Array(bu*3);for(let i=0;i<bu*3;i+=3)e[i]=(Math.random()-.5)*40,e[i+1]=Math.random()*25,e[i+2]=(Math.random()-.5)*40;Ws.setAttribute("position",new zn(e,3));const n=new wh({color:9684477,size:.12,transparent:!0,opacity:0});Dr=new Kx(Ws,n),t.add(Dr)}function E1(t,e){if(yc-=t,yc<=0&&(yc=90+Math.random()*120,Mc=Mc===Cs.SUNNY?Cs.RAIN:Cs.SUNNY),Dr&&e){Dr.position.set(e.x,e.y,e.z);const i=Mc!==Cs.SUNNY?.65:0;if(Dr.material.opacity+=(i-Dr.material.opacity)*t*2,Dr.material.opacity>.01){const r=Ws.attributes.position.array;for(let o=1;o<bu*3;o+=3)r[o]-=32*t,r[o]<-5&&(r[o]=20+Math.random()*5);Ws.attributes.position.needsUpdate=!0}}}const Tp="voxelcraft_world_save_v03";function M1(){try{const t=pi(),e=Dy(),n=Sp(),i={timestamp:Date.now(),player:{x:t.x,y:t.y,z:t.z,health:n,hotbar:e,armor:[...Bt]}};localStorage.setItem(Tp,JSON.stringify(i))}catch(t){console.warn("Could not save world data:",t)}}function y1(){try{const t=localStorage.getItem(Tp);if(!t)return!1;const e=JSON.parse(t);if(!e||!e.player)return!1;const n=pi();if(n&&e.player.x!==void 0&&n.set(e.player.x,e.player.y,e.player.z),e.player.armor)for(let i=0;i<4;i++)Bt[i]=e.player.armor[i]||0;return!0}catch(t){return console.warn("Could not load world data:",t),!1}}window.addEventListener("contextmenu",t=>t.preventDefault());wp(document);console.log("[VoxelCraft] Building texture atlas...");BE();const Yd=RS(),on=wS();lM(on,OS());S1(on);mM(on);SM(on);console.log("[VoxelCraft] Generating world biomes & 3D caves...");iM(on);const di=Xu(),bi=ES(window.innerWidth/window.innerHeight,di);on.add(bi);IS(bi);MS(Wh());xS(Wh());CM(on);wr(Je.PIG,di.x+4,di.y,di.z+4);wr(Je.SHEEP,di.x-3,di.y,di.z+5);My(on);lp();np();h1();_1(on);KM();op();ky(on);i1();v1();Xy();y1();console.log(`[VoxelCraft v0.6.0] Ready! Spawn at (${di.x}, ${di.y}, ${di.z})`);let Tc=0;function T1(t,e){if(_S()){Rd(bi.position,on),wd(t,on,bi,Yd);return}gS()||(l1(t),Rd(bi.position,on),wd(t,on,bi,Yd),E1(t,pi()),g1(t,e,pi(),Yu(),bi.position),$M(t),oy(t),UM(t),EM(t,e),gM(t),yy(t),p1(),x1(),qy(t),hS(t),f1(t,{position:bi.position}),Tc+=t,Tc>=30&&(Tc=0,M1()))}function A1(){CS(bi)}bS(T1,A1);
