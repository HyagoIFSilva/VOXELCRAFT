(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const Ps=new Set;function Vd(n=document){n.addEventListener("keydown",t=>{Ps.add(t.code)}),n.addEventListener("keyup",t=>{Ps.delete(t.code)}),n.addEventListener("contextmenu",t=>{document.pointerLockElement&&t.preventDefault()}),window.addEventListener("blur",()=>{Ps.clear()})}function yn(n){return Ps.has(n)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="170",zd=0,Xc=1,Wd=2,Tf=1,Xd=2,$n=3,Ni=0,Ve=1,Nn=2,Ci=0,kr=1,qc=2,Yc=3,Kc=4,qd=5,$i=100,Yd=101,Kd=102,$d=103,Zd=104,jd=200,Jd=201,Qd=202,th=203,fl=204,dl=205,eh=206,nh=207,ih=208,rh=209,oh=210,sh=211,ah=212,lh=213,ch=214,hl=0,pl=1,ml=2,Yr=3,gl=4,_l=5,xl=6,vl=7,mc=0,uh=1,fh=2,Ii=0,dh=1,hh=2,ph=3,mh=4,gh=5,_h=6,xh=7,Af=300,Kr=301,$r=302,Sl=303,Ml=304,ea=306,El=1e3,er=1001,yl=1002,Je=1003,vh=1004,Qo=1005,Fn=1006,da=1007,nr=1008,ci=1009,bf=1010,Rf=1011,Ho=1012,gc=1013,lr=1014,ni=1015,Wo=1016,_c=1017,xc=1018,Zr=1020,wf=35902,Cf=1021,If=1022,Sn=1023,Pf=1024,Lf=1025,Vr=1026,jr=1027,Of=1028,vc=1029,Nf=1030,Sc=1031,Mc=1033,Ls=33776,Os=33777,Ns=33778,Ds=33779,Tl=35840,Al=35841,bl=35842,Rl=35843,wl=36196,Cl=37492,Il=37496,Pl=37808,Ll=37809,Ol=37810,Nl=37811,Dl=37812,Ul=37813,Fl=37814,Bl=37815,Gl=37816,Hl=37817,kl=37818,Vl=37819,zl=37820,Wl=37821,Us=36492,Xl=36494,ql=36495,Df=36283,Yl=36284,Kl=36285,$l=36286,Sh=3200,Mh=3201,Uf=0,Eh=1,Ai="",Ke="srgb",io="srgb-linear",na="linear",ee="srgb",gr=7680,$c=519,yh=512,Th=513,Ah=514,Ff=515,bh=516,Rh=517,wh=518,Ch=519,Zc=35044,jc="300 es",ii=2e3,ks=2001;class ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const zr=Math.PI/180,ko=180/Math.PI;function oo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function Ec(n,t){return(n%t+t)%t}function Ih(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Ph(n,t,e){return n!==t?(e-n)/(t-n):0}function Do(n,t,e){return(1-e)*n+e*t}function Lh(n,t,e,i){return Do(n,t,1-Math.exp(-e*i))}function Oh(n,t=1){return t-Math.abs(Ec(n,t*2)-t)}function Nh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Dh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Uh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Fh(n,t){return n+Math.random()*(t-n)}function Bh(n){return n*(.5-Math.random())}function Gh(n){n!==void 0&&(Jc=n);let t=Jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hh(n){return n*zr}function kh(n){return n*ko}function Vh(n){return(n&n-1)===0&&n!==0}function zh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xh(n,t,e,i,r){const o=Math.cos,s=Math.sin,a=o(e/2),l=s(e/2),c=o((t+i)/2),f=s((t+i)/2),d=o((t-i)/2),h=s((t-i)/2),m=o((i-t)/2),_=s((i-t)/2);switch(r){case"XYX":n.set(a*f,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*f,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*f,a*c);break;case"XZX":n.set(a*f,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*f,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Or(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qh={DEG2RAD:zr,RAD2DEG:ko,generateUUID:oo,clamp:Oe,euclideanModulo:Ec,mapLinear:Ih,inverseLerp:Ph,lerp:Do,damp:Lh,pingpong:Oh,smoothstep:Nh,smootherstep:Dh,randInt:Uh,randFloat:Fh,randFloatSpread:Bh,seededRandom:Gh,degToRad:Hh,radToDeg:kh,isPowerOfTwo:Vh,ceilPowerOfTwo:zh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Xh,normalize:Pe,denormalize:Or};class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*i-s*r+t.x,this.y=o*r+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,i,r,o,s,a,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,s,a,l,c)}set(t,e,i,r,o,s,a,l,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],g=r[3],p=r[6],b=r[1],E=r[4],y=r[7],U=r[2],C=r[5],R=r[8];return o[0]=s*x+a*b+l*U,o[3]=s*g+a*E+l*C,o[6]=s*p+a*y+l*R,o[1]=c*x+f*b+d*U,o[4]=c*g+f*E+d*C,o[7]=c*p+f*y+d*R,o[2]=h*x+m*b+_*U,o[5]=h*g+m*E+_*C,o[8]=h*p+m*y+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*s*f-e*a*c-i*o*f+i*a*l+r*o*c-r*s*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=f*s-a*c,h=a*l-f*o,m=c*o-s*l,_=e*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(r*c-f*i)*x,t[2]=(a*i-r*s)*x,t[3]=h*x,t[4]=(f*e-r*l)*x,t[5]=(r*o-a*e)*x,t[6]=m*x,t[7]=(i*l-c*e)*x,t[8]=(s*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Ut;function Bf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yh(){const n=Vs("canvas");return n.style.display="block",n}const Qc={};function yo(n){n in Qc||(Qc[n]=!0,console.warn(n))}function Kh(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function $h(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:io,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=si(n.r),n.g=si(n.g),n.b=si(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=Wr(n.r),n.g=Wr(n.g),n.b=Wr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ai?na:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tu=[.64,.33,.3,.6,.15,.06],eu=[.2126,.7152,.0722],nu=[.3127,.329],iu=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[io]:{primaries:tu,whitePoint:nu,transfer:na,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:eu,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:tu,whitePoint:nu,transfer:ee,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:eu,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});let _r;class jh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_r===void 0&&(_r=Vs("canvas")),_r.width=t.width,_r.height=t.height;const i=_r.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_r}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=si(o[s]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jh=0;class Gf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(pa(r[s].image)):o.push(pa(r[s]))}else o=pa(r);i.url=o}return e||(t.images[this.uuid]=i),i}}function pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qh=0;class Ue extends ro{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=er,r=er,o=Fn,s=nr,a=Sn,l=ci,c=Ue.DEFAULT_ANISOTROPY,f=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=oo(),this.name="",this.source=new Gf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case El:t.x=t.x-Math.floor(t.x);break;case er:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case El:t.y=t.y-Math.floor(t.y);break;case er:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Af;Ue.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*i+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(m+1)/2,U=(p+1)/2,C=(f+h)/4,R=(d+x)/4,D=(_+g)/4;return E>y&&E>U?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=C/i,o=R/i):y>U?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=C/r,o=D/r):U<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),i=R/o,r=D/o),this.set(i,r,o,e),this}let b=Math.sqrt((g-_)*(g-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(d-x)/b,this.z=(h-f)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tp extends ro{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Ue(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends tp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Hf extends Ue{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends Ue{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,s,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],_=o[s+2],x=o[s+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=_,t[e+3]=x;return}if(d!==x||l!==h||c!==m||f!==_){let g=1-a;const p=l*h+c*m+f*_+d*x,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),C=Math.atan2(U,p*b);g=Math.sin(g*C)/U,a=Math.sin(a*C)/U}const y=a*b;if(l=l*g+h*y,c=c*g+m*y,f=f*g+_*y,d=d*g+x*y,g===1-a){const U=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=U,c*=U,f*=U,d*=U}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=o[s],h=o[s+1],m=o[s+2],_=o[s+3];return t[e]=a*_+f*d+l*m-c*h,t[e+1]=l*_+f*h+c*d-a*m,t[e+2]=c*_+f*m+a*h-l*d,t[e+3]=f*_-a*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],f=e[6],d=e[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+s*a+r*c-o*l,this._y=r*f+s*l+o*a-i*c,this._z=o*f+s*c+i*l-r*a,this._w=s*f-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*t._w+i*t._x+r*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*s+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-e)*f)/c,h=Math.sin(e*f)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*i),f=2*(a*e-o*r),d=2*(o*i-s*e);return this.x=e+l*c+s*d-a*f,this.y=i+l*f+a*c-o*d,this.z=r+l*d+o*f-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new N,ou=new Xo;class qo{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,pn):pn.fromBufferAttribute(o,s),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),es.subVectors(this.max,ho),xr.subVectors(t.a,ho),vr.subVectors(t.b,ho),Sr.subVectors(t.c,ho),hi.subVectors(vr,xr),pi.subVectors(Sr,vr),Gi.subVectors(xr,Sr);let e=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Gi.z,Gi.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Gi.z,0,-Gi.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Gi.y,Gi.x,0];return!ga(e,xr,vr,Sr,es)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,xr,vr,Sr,es))?!1:(ns.crossVectors(hi,pi),e=[ns.x,ns.y,ns.z],ga(e,xr,vr,Sr,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,ts=new qo,xr=new N,vr=new N,Sr=new N,hi=new N,pi=new N,Gi=new N,ho=new N,es=new N,ns=new N,Hi=new N;function ga(n,t,e,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Hi.fromArray(n,o);const a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),f=i.dot(Hi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const np=new qo,po=new N,_a=new N;class Yo{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):np.setFromPoints(t).getCenter(i);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;po.subVectors(t,this.center);const e=po.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(po,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(po.copy(t.center).add(_a)),this.expandByPoint(po.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new N,xa=new N,is=new N,mi=new N,va=new N,rs=new N,Sa=new N;class yc{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){xa.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(xa);const o=t.distanceTo(e)*.5,s=-this.direction.dot(is),a=mi.dot(this.direction),l=-mi.dot(is),c=mi.lengthSq(),f=Math.abs(1-s*s);let d,h,m,_;if(f>0)if(d=s*l-a,h=s*a-l,_=o*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xa).addScaledVector(is,h),m}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,o=t.radius*t.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,s,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),f>=0?(o=(t.min.y-h.y)*f,s=(t.max.y-h.y)*f):(o=(t.max.y-h.y)*f,s=(t.min.y-h.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,i,r,o){va.subVectors(e,t),rs.subVectors(i,t),Sa.crossVectors(va,rs);let s=this.direction.dot(Sa),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(rs.crossVectors(mi,rs));if(l<0)return null;const c=a*this.direction.dot(va.cross(mi));if(c<0||l+c>s)return null;const f=-a*mi.dot(Sa);return f<0?null:this.at(f/s,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,r,o,s,a,l,c,f,d,h,m,_,x,g){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,s,a,l,c,f,d,h,m,_,x,g)}set(t,e,i,r,o,s,a,l,c,f,d,h,m,_,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=h,p[3]=m,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Mr.setFromMatrixColumn(t,0).length(),o=1/Mr.setFromMatrixColumn(t,1).length(),s=1/Mr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*s,e[9]=i[9]*s,e[10]=i[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,o=t.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const h=s*f,m=s*d,_=a*f,x=a*d;e[0]=l*f,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=_+m*c,e[10]=s*l}else if(t.order==="YXZ"){const h=l*f,m=l*d,_=c*f,x=c*d;e[0]=h+x*a,e[4]=_*a-m,e[8]=s*c,e[1]=s*d,e[5]=s*f,e[9]=-a,e[2]=m*a-_,e[6]=x+h*a,e[10]=s*l}else if(t.order==="ZXY"){const h=l*f,m=l*d,_=c*f,x=c*d;e[0]=h-x*a,e[4]=-s*d,e[8]=_+m*a,e[1]=m+_*a,e[5]=s*f,e[9]=x-h*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const h=s*f,m=s*d,_=a*f,x=a*d;e[0]=l*f,e[4]=_*c-m,e[8]=h*c+x,e[1]=l*d,e[5]=x*c+h,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const h=s*l,m=s*c,_=a*l,x=a*c;e[0]=l*f,e[4]=x-h*d,e[8]=_*d+m,e[1]=d,e[5]=s*f,e[9]=-a*f,e[2]=-c*f,e[6]=m*d+_,e[10]=h-x*d}else if(t.order==="XZY"){const h=s*l,m=s*c,_=a*l,x=a*c;e[0]=l*f,e[4]=-d,e[8]=c*f,e[1]=h*d+x,e[5]=s*f,e[9]=m*d-_,e[2]=_*d-m,e[6]=a*f,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,rp)}lookAt(t,e,i){const r=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),gi.crossVectors(i,Xe),gi.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),gi.crossVectors(i,Xe)),gi.normalize(),os.crossVectors(Xe,gi),r[0]=gi.x,r[4]=os.x,r[8]=Xe.x,r[1]=gi.y,r[5]=os.y,r[9]=Xe.y,r[2]=gi.z,r[6]=os.z,r[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],g=i[10],p=i[14],b=i[3],E=i[7],y=i[11],U=i[15],C=r[0],R=r[4],D=r[8],T=r[12],M=r[1],w=r[5],z=r[9],H=r[13],$=r[2],Z=r[6],q=r[10],j=r[14],k=r[3],it=r[7],dt=r[11],yt=r[15];return o[0]=s*C+a*M+l*$+c*k,o[4]=s*R+a*w+l*Z+c*it,o[8]=s*D+a*z+l*q+c*dt,o[12]=s*T+a*H+l*j+c*yt,o[1]=f*C+d*M+h*$+m*k,o[5]=f*R+d*w+h*Z+m*it,o[9]=f*D+d*z+h*q+m*dt,o[13]=f*T+d*H+h*j+m*yt,o[2]=_*C+x*M+g*$+p*k,o[6]=_*R+x*w+g*Z+p*it,o[10]=_*D+x*z+g*q+p*dt,o[14]=_*T+x*H+g*j+p*yt,o[3]=b*C+E*M+y*$+U*k,o[7]=b*R+E*w+y*Z+U*it,o[11]=b*D+E*z+y*q+U*dt,o[15]=b*T+E*H+y*j+U*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],m=t[14],_=t[3],x=t[7],g=t[11],p=t[15];return _*(+o*l*d-r*c*d-o*a*h+i*c*h+r*a*m-i*l*m)+x*(+e*l*m-e*c*h+o*s*h-r*s*m+r*c*f-o*l*f)+g*(+e*c*d-e*a*m-o*s*d+i*s*m+o*a*f-i*c*f)+p*(-r*a*f-e*l*d+e*a*h+r*s*d-i*s*h+i*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],m=t[11],_=t[12],x=t[13],g=t[14],p=t[15],b=d*g*c-x*h*c+x*l*m-a*g*m-d*l*p+a*h*p,E=_*h*c-f*g*c-_*l*m+s*g*m+f*l*p-s*h*p,y=f*x*c-_*d*c+_*a*m-s*x*m-f*a*p+s*d*p,U=_*d*l-f*x*l-_*a*h+s*x*h+f*a*g-s*d*g,C=e*b+i*E+r*y+o*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=b*R,t[1]=(x*h*o-d*g*o-x*r*m+i*g*m+d*r*p-i*h*p)*R,t[2]=(a*g*o-x*l*o+x*r*c-i*g*c-a*r*p+i*l*p)*R,t[3]=(d*l*o-a*h*o-d*r*c+i*h*c+a*r*m-i*l*m)*R,t[4]=E*R,t[5]=(f*g*o-_*h*o+_*r*m-e*g*m-f*r*p+e*h*p)*R,t[6]=(_*l*o-s*g*o-_*r*c+e*g*c+s*r*p-e*l*p)*R,t[7]=(s*h*o-f*l*o+f*r*c-e*h*c-s*r*m+e*l*m)*R,t[8]=y*R,t[9]=(_*d*o-f*x*o-_*i*m+e*x*m+f*i*p-e*d*p)*R,t[10]=(s*x*o-_*a*o+_*i*c-e*x*c-s*i*p+e*a*p)*R,t[11]=(f*a*o-s*d*o-f*i*c+e*d*c+s*i*m-e*a*m)*R,t[12]=U*R,t[13]=(f*x*r-_*d*r+_*i*h-e*x*h-f*i*g+e*d*g)*R,t[14]=(_*a*r-s*x*r-_*i*l+e*x*l+s*i*g-e*a*g)*R,t[15]=(s*d*r-f*a*r+f*i*l-e*d*l-s*i*h+e*a*h)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),o=1-i,s=t.x,a=t.y,l=t.z,c=o*s,f=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*s,0,c*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,s){return this.set(1,i,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,f=s+s,d=a+a,h=o*c,m=o*f,_=o*d,x=s*f,g=s*d,p=a*d,b=l*c,E=l*f,y=l*d,U=i.x,C=i.y,R=i.z;return r[0]=(1-(x+p))*U,r[1]=(m+y)*U,r[2]=(_-E)*U,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(h+p))*C,r[6]=(g+b)*C,r[7]=0,r[8]=(_+E)*R,r[9]=(g-b)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let o=Mr.set(r[0],r[1],r[2]).length();const s=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],mn.copy(this);const c=1/o,f=1/s,d=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=f,mn.elements[5]*=f,mn.elements[6]*=f,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),i.x=o,i.y=s,i.z=a,this}makePerspective(t,e,i,r,o,s,a=ii){const l=this.elements,c=2*o/(e-t),f=2*o/(i-r),d=(e+t)/(e-t),h=(i+r)/(i-r);let m,_;if(a===ii)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===ks)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,o,s,a=ii){const l=this.elements,c=1/(e-t),f=1/(i-r),d=1/(s-o),h=(e+t)*c,m=(i+r)*f;let _,x;if(a===ii)_=(s+o)*d,x=-2*d;else if(a===ks)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mr=new N,mn=new ce,ip=new N(0,0,0),rp=new N(1,1,1),gi=new N,os=new N,Xe=new N,su=new ce,au=new Xo;class Hn{constructor(t=0,e=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Oe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(su,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let op=0;const lu=new N,Er=new Xo,Xn=new ce,ss=new N,mo=new N,sp=new N,ap=new Xo,cu=new N(1,0,0),uu=new N(0,1,0),fu=new N(0,0,1),du={type:"added"},lp={type:"removed"},yr={type:"childadded",child:null},Ma={type:"childremoved",child:null};class xe extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new N,e=new Hn,i=new Xo,r=new N(1,1,1);function o(){i.setFromEuler(e,!1)}function s(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ut}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ss.copy(t):ss.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(mo,ss,this.up):Xn.lookAt(ss,mo,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(Xn),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(du),yr.child=t,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(du),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),c=s(t.textures),f=s(t.images),d=s(t.shapes),h=s(t.skeletons),m=s(t.animations),_=s(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}xe.DEFAULT_UP=new N(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new N,qn=new N,Ea=new N,Yn=new N,Tr=new N,Ar=new N,hu=new N,ya=new N,Ta=new N,Aa=new N,ba=new he,Ra=new he,wa=new he;class an{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),gn.subVectors(t,e),r.cross(gn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){gn.subVectors(r,e),qn.subVectors(i,e),Ea.subVectors(t,e);const s=gn.dot(gn),a=gn.dot(qn),l=gn.dot(Ea),c=qn.dot(qn),f=qn.dot(Ea),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,_=(s*f-a*l)*h;return o.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,r,o,s,a,l){return this.getBarycoord(t,e,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Yn.x),l.addScaledVector(s,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,i,r,o,s){return ba.setScalar(0),Ra.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,i),wa.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(ba,o.x),s.addScaledVector(Ra,o.y),s.addScaledVector(wa,o.z),s}static isFrontFacing(t,e,i,r){return gn.subVectors(i,e),qn.subVectors(t,e),gn.cross(qn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return an.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,o=this.c;let s,a;Tr.subVectors(r,i),Ar.subVectors(o,i),ya.subVectors(t,i);const l=Tr.dot(ya),c=Ar.dot(ya);if(l<=0&&c<=0)return e.copy(i);Ta.subVectors(t,r);const f=Tr.dot(Ta),d=Ar.dot(Ta);if(f>=0&&d<=f)return e.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),e.copy(i).addScaledVector(Tr,s);Aa.subVectors(t,o);const m=Tr.dot(Aa),_=Ar.dot(Aa);if(_>=0&&m<=_)return e.copy(o);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ar,a);const g=f*_-m*d;if(g<=0&&d-f>=0&&m-_>=0)return hu.subVectors(o,r),a=(d-f)/(d-f+(m-_)),e.copy(r).addScaledVector(hu,a);const p=1/(g+x+h);return s=x*p,a=h*p,e.copy(i).addScaledVector(Tr,s).addScaledVector(Ar,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},as={h:0,s:0,l:0};function Ca(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=$t.workingColorSpace){if(t=Ec(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,s=2*i-o;this.r=Ca(s,o,t+1/3),this.g=Ca(s,o,t),this.b=Ca(s,o,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=Ke){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=Vf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return $t.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Oe(Ce.r*255,0,255))*65536+Math.round(Oe(Ce.g*255,0,255))*256+Math.round(Oe(Ce.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,o=Ce.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const f=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ke){$t.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(as);const i=Do(_i.h,as.h,e),r=Do(_i.s,as.s,e),o=Do(_i.l,as.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new wt;wt.NAMES=Vf;let cp=0;class pr extends ro{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=oo(),this.name="",this.blending=kr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(e){const o=r(t.textures),s=r(t.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ui extends pr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new N,ls=new Qt;class Mn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Or(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Or(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Or(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Or(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),r=Pe(r,this.array),o=Pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zc&&(t.usage=this.usage),t}}class zf extends Mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wf extends Mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qe extends Mn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let up=0;const nn=new ce,Ia=new xe,br=new N,qe=new qo,go=new qo,Ee=new N;class fn extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bf(t)?Wf:zf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ut().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,o=t.length;r<o;r++){const s=t[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Qe(i,3))}else{for(let i=0,r=e.count;i<r;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const o=e[i];qe.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){const a=e[o];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(qe.min,go.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,go.max),qe.expandByPoint(Ee)):(qe.expandByPoint(go.min),qe.expandByPoint(go.max))}qe.getCenter(i);let r=0;for(let o=0,s=t.count;o<s;o++)Ee.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(Ee));if(e)for(let o=0,s=e.length;o<s;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ee.fromBufferAttribute(a,c),l&&(br.fromBufferAttribute(t,c),Ee.add(br)),r=Math.max(r,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new N,l[D]=new N;const c=new N,f=new N,d=new N,h=new Qt,m=new Qt,_=new Qt,x=new N,g=new N;function p(D,T,M){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),h.fromBufferAttribute(o,D),m.fromBufferAttribute(o,T),_.fromBufferAttribute(o,M),f.sub(c),d.sub(c),m.sub(h),_.sub(h);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(w),g.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(w),a[D].add(x),a[T].add(x),a[M].add(x),l[D].add(g),l[T].add(g),l[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,T=b.length;D<T;++D){const M=b[D],w=M.start,z=M.count;for(let H=w,$=w+z;H<$;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new N,y=new N,U=new N,C=new N;function R(D){U.fromBufferAttribute(r,D),C.copy(U);const T=a[D];E.copy(T),E.sub(U.multiplyScalar(U.dot(T))).normalize(),y.crossVectors(C,T);const w=y.dot(l[D])<0?-1:1;s.setXYZW(D,E.x,E.y,E.z,w)}for(let D=0,T=b.length;D<T;++D){const M=b[D],w=M.start,z=M.count;for(let H=w,$=w+z;H<$;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,o=new N,s=new N,a=new N,l=new N,c=new N,f=new N,d=new N;if(t)for(let h=0,m=t.count;h<m;h+=3){const _=t.getX(h+0),x=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),s.fromBufferAttribute(e,g),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let p=0;p<f;p++)h[_++]=c[m++]}return new Mn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=t(h,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(t.data))}f.length>0&&(r[l]=f,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const o=t.morphAttributes;for(const c in o){const f=[],d=o[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,f=s.length;c<f;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pu=new ce,ki=new yc,cs=new Yo,mu=new N,us=new N,fs=new N,ds=new N,Pa=new N,hs=new N,gu=new N,ps=new N;class ot extends xe{constructor(t=new fn,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(o&&a){hs.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const f=a[l],d=o[l];f!==0&&(Pa.fromBufferAttribute(d,t),s?hs.addScaledVector(Pa,f):hs.addScaledVector(Pa.sub(e),f))}e.add(hs)}return e}raycast(t,e){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(o),ki.copy(t.ray).recast(t.near),!(cs.containsPoint(ki.origin)===!1&&(ki.intersectSphere(cs,mu)===null||ki.origin.distanceToSquared(mu)>(t.far-t.near)**2))&&(pu.copy(o).invert(),ki.copy(t.ray).applyMatrix4(pu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const g=h[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=b,U=E;y<U;y+=3){const C=a.getX(y),R=a.getX(y+1),D=a.getX(y+2);r=ms(this,p,t,i,c,f,d,C,R,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const b=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);r=ms(this,s,t,i,c,f,d,b,E,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const g=h[_],p=s[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=b,U=E;y<U;y+=3){const C=y,R=y+1,D=y+2;r=ms(this,p,t,i,c,f,d,C,R,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const b=g,E=g+1,y=g+2;r=ms(this,s,t,i,c,f,d,b,E,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function fp(n,t,e,i,r,o,s,a){let l;if(t.side===Ve?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,t.side===Ni,a),l===null)return null;ps.copy(a),ps.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ps);return c<e.near||c>e.far?null:{distance:c,point:ps.clone(),object:n}}function ms(n,t,e,i,r,o,s,a,l,c){n.getVertexPosition(a,us),n.getVertexPosition(l,fs),n.getVertexPosition(c,ds);const f=fp(n,t,e,i,us,fs,ds,gu);if(f){const d=new N;an.getBarycoord(gu,us,fs,ds,d),r&&(f.uv=an.getInterpolatedAttribute(r,a,l,c,d,new Qt)),o&&(f.uv1=an.getInterpolatedAttribute(o,a,l,c,d,new Qt)),s&&(f.normal=an.getInterpolatedAttribute(s,a,l,c,d,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};an.getNormal(us,fs,ds,h.normal),f.face=h,f.barycoord=d}return f}class ht extends fn{constructor(t=1,e=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,e,t,s,o,0),_("z","y","x",1,-1,i,e,-t,s,o,1),_("x","z","y",1,1,t,i,e,r,s,2),_("x","z","y",1,-1,t,i,-e,r,s,3),_("x","y","z",1,-1,t,e,i,r,o,4),_("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function _(x,g,p,b,E,y,U,C,R,D,T){const M=y/R,w=U/D,z=y/2,H=U/2,$=C/2,Z=R+1,q=D+1;let j=0,k=0;const it=new N;for(let dt=0;dt<q;dt++){const yt=dt*w-H;for(let Gt=0;Gt<Z;Gt++){const ne=Gt*M-z;it[x]=ne*b,it[g]=yt*E,it[p]=$,c.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[p]=C>0?1:-1,f.push(it.x,it.y,it.z),d.push(Gt/R),d.push(1-dt/D),j+=1}}for(let dt=0;dt<D;dt++)for(let yt=0;yt<R;yt++){const Gt=h+yt+Z*dt,ne=h+yt+Z*(dt+1),X=h+(yt+1)+Z*(dt+1),et=h+(yt+1)+Z*dt;l.push(Gt,ne,et),l.push(ne,X,et),k+=6}a.addGroup(m,k,T),m+=k,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=Jr(n[e]);for(const r in i)t[r]=i[r]}return t}function dp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const hp={clone:Jr,merge:Le};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends pr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qf extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new N,_u=new Qt,xu=new Qt;class on extends qf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,_u,xu),e.subVectors(xu,_u)}setViewOffset(t,e,i,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rr=-90,wr=1;class gp extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Rr,wr,t,e);r.layers=this.layers,this.add(r);const o=new on(Rr,wr,t,e);o.layers=this.layers,this.add(o);const s=new on(Rr,wr,t,e);s.layers=this.layers,this.add(s);const a=new on(Rr,wr,t,e);a.layers=this.layers,this.add(a);const l=new on(Rr,wr,t,e);l.layers=this.layers,this.add(l);const c=new on(Rr,wr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,o,s,a,l]=e;for(const c of e)this.remove(c);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,o),t.setRenderTarget(i,1,r),t.render(e,s),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,f),t.setRenderTarget(d,h,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Yf extends Ue{constructor(t,e,i,r,o,s,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Kr,super(t,e,i,r,o,s,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _p extends cr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Yf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ht(5,5,5),o=new Di({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:Ci});o.uniforms.tEquirect.value=e;const s=new ot(r,o),a=e.minFilter;return e.minFilter===nr&&(e.minFilter=Fn),new gp(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,i,r){const o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,r);t.setRenderTarget(o)}}const La=new N,xp=new N,vp=new Ut;class Yi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=La.subVectors(i,e).cross(xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(La),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||vp.getNormalMatrix(t),r=this.coplanarPoint(La).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Yo,gs=new N;class Tc{constructor(t=new Yi,e=new Yi,i=new Yi,r=new Yi,o=new Yi,s=new Yi){this.planes=[t,e,i,r,o,s]}set(t,e,i,r,o,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii){const i=this.planes,r=t.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],g=r[11],p=r[12],b=r[13],E=r[14],y=r[15];if(i[0].setComponents(l-o,h-c,g-m,y-p).normalize(),i[1].setComponents(l+o,h+c,g+m,y+p).normalize(),i[2].setComponents(l+s,h+f,g+_,y+b).normalize(),i[3].setComponents(l-s,h-f,g-_,y-b).normalize(),i[4].setComponents(l-a,h-d,g-x,y-E).normalize(),e===ii)i[5].setComponents(l+a,h+d,g+x,y+E).normalize();else if(e===ks)i[5].setComponents(a,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(gs.x=r.normal.x>0?t.max.x:t.min.x,gs.y=r.normal.y>0?t.max.y:t.min.y,gs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let n=null,t=!1,e=null,i=null;function r(o,s){e(o,s),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Sp(n){const t=new WeakMap;function e(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,f);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],x=d[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,d[h]=x)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const x=d[m];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class ia extends fn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const o=t/2,s=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=t/a,h=e/l,m=[],_=[],x=[],g=[];for(let p=0;p<f;p++){const b=p*h-s;for(let E=0;E<c;E++){const y=E*d-o;_.push(y,-b,0),x.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+c*p,y=b+c*(p+1),U=b+1+c*(p+1),C=b+1+c*p;m.push(E,y,C),m.push(y,U,C)}this.setIndex(m),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,vm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Im=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,C0=`#define DISTANCE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,F0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,X0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,Y0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,j0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Mp,alphahash_pars_fragment:Ep,alphamap_fragment:yp,alphamap_pars_fragment:Tp,alphatest_fragment:Ap,alphatest_pars_fragment:bp,aomap_fragment:Rp,aomap_pars_fragment:wp,batching_pars_vertex:Cp,batching_vertex:Ip,begin_vertex:Pp,beginnormal_vertex:Lp,bsdfs:Op,iridescence_fragment:Np,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:Gp,color_fragment:Hp,color_pars_fragment:kp,color_pars_vertex:Vp,color_vertex:zp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Kp,emissivemap_fragment:$p,emissivemap_pars_fragment:Zp,colorspace_fragment:jp,colorspace_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:tm,envmap_pars_fragment:em,envmap_pars_vertex:nm,envmap_physical_pars_fragment:hm,envmap_vertex:im,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:sm,fog_pars_fragment:am,gradientmap_pars_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:um,lights_lambert_pars_fragment:fm,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:_m,lights_physical_fragment:xm,lights_physical_pars_fragment:vm,lights_fragment_begin:Sm,lights_fragment_maps:Mm,lights_fragment_end:Em,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:bm,map_fragment:Rm,map_pars_fragment:wm,map_particle_fragment:Cm,map_particle_pars_fragment:Im,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Om,morphcolor_vertex:Nm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:Bm,normal_fragment_maps:Gm,normal_pars_fragment:Hm,normal_pars_vertex:km,normal_vertex:Vm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:Km,packing:$m,premultiplied_alpha_fragment:Zm,project_vertex:jm,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:t0,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:s0,skinning_pars_vertex:a0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:u0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:h0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:_0,uv_vertex:x0,worldpos_vertex:v0,background_vert:S0,background_frag:M0,backgroundCube_vert:E0,backgroundCube_frag:y0,cube_vert:T0,cube_frag:A0,depth_vert:b0,depth_frag:R0,distanceRGBA_vert:w0,distanceRGBA_frag:C0,equirect_vert:I0,equirect_frag:P0,linedashed_vert:L0,linedashed_frag:O0,meshbasic_vert:N0,meshbasic_frag:D0,meshlambert_vert:U0,meshlambert_frag:F0,meshmatcap_vert:B0,meshmatcap_frag:G0,meshnormal_vert:H0,meshnormal_frag:k0,meshphong_vert:V0,meshphong_frag:z0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:q0,meshtoon_frag:Y0,points_vert:K0,points_frag:$0,shadow_vert:Z0,shadow_frag:j0,sprite_vert:J0,sprite_frag:Q0},rt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},wn={basic:{uniforms:Le([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Le([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Le([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Le([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Le([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Le([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Le([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Le([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Le([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Le([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Le([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Le([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Le([rt.lights,rt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};wn.physical={uniforms:Le([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const _s={r:0,b:0,g:0},zi=new Hn,tg=new ce;function eg(n,t,e,i,r,o,s){const a=new wt(0);let l=o===!0?0:1,c,f,d=null,h=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function x(b){let E=!1;const y=_(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),E=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,E){const y=_(E);y&&(y.isCubeTexture||y.mapping===ea)?(f===void 0&&(f=new ot(new ht(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Jr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),zi.copy(E.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(zi)),f.material.toneMapped=$t.getTransfer(y.colorSpace)!==ee,(d!==y||h!==y.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,d=y,h=y.version,m=n.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ot(new ia(2,2),new Di({name:"BackgroundMaterial",uniforms:Jr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(_s,Xf(n)),i.buffers.color.setClear(_s.r,_s.g,_s.b,E,s)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:g}}function ng(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(M,w,z,H,$){let Z=!1;const q=d(H,z,w);o!==q&&(o=q,c(o.object)),Z=m(M,H,z,$),Z&&_(M,H,z,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,y(M,w,z,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function f(M){return n.deleteVertexArray(M)}function d(M,w,z){const H=z.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let Z=$[w.id];Z===void 0&&(Z={},$[w.id]=Z);let q=Z[H];return q===void 0&&(q=h(l()),Z[H]=q),q}function h(M){const w=[],z=[],H=[];for(let $=0;$<e;$++)w[$]=0,z[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,w,z,H){const $=o.attributes,Z=w.attributes;let q=0;const j=z.getAttributes();for(const k in j)if(j[k].location>=0){const dt=$[k];let yt=Z[k];if(yt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),dt===void 0||dt.attribute!==yt||yt&&dt.data!==yt.data)return!0;q++}return o.attributesNum!==q||o.index!==H}function _(M,w,z,H){const $={},Z=w.attributes;let q=0;const j=z.getAttributes();for(const k in j)if(j[k].location>=0){let dt=Z[k];dt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const yt={};yt.attribute=dt,dt&&dt.data&&(yt.data=dt.data),$[k]=yt,q++}o.attributes=$,o.attributesNum=q,o.index=H}function x(){const M=o.newAttributes;for(let w=0,z=M.length;w<z;w++)M[w]=0}function g(M){p(M,0)}function p(M,w){const z=o.newAttributes,H=o.enabledAttributes,$=o.attributeDivisors;z[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),$[M]!==w&&(n.vertexAttribDivisor(M,w),$[M]=w)}function b(){const M=o.newAttributes,w=o.enabledAttributes;for(let z=0,H=w.length;z<H;z++)w[z]!==M[z]&&(n.disableVertexAttribArray(z),w[z]=0)}function E(M,w,z,H,$,Z,q){q===!0?n.vertexAttribIPointer(M,w,z,$,Z):n.vertexAttribPointer(M,w,z,H,$,Z)}function y(M,w,z,H){x();const $=H.attributes,Z=z.getAttributes(),q=w.defaultAttributeValues;for(const j in Z){const k=Z[j];if(k.location>=0){let it=$[j];if(it===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const dt=it.normalized,yt=it.itemSize,Gt=t.get(it);if(Gt===void 0)continue;const ne=Gt.buffer,X=Gt.type,et=Gt.bytesPerElement,St=X===n.INT||X===n.UNSIGNED_INT||it.gpuType===gc;if(it.isInterleavedBufferAttribute){const at=it.data,It=at.stride,Ot=it.offset;if(at.isInstancedInterleavedBuffer){for(let Ht=0;Ht<k.locationSize;Ht++)p(k.location+Ht,at.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ht=0;Ht<k.locationSize;Ht++)g(k.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Ht=0;Ht<k.locationSize;Ht++)E(k.location+Ht,yt/k.locationSize,X,dt,It*et,(Ot+yt/k.locationSize*Ht)*et,St)}else{if(it.isInstancedBufferAttribute){for(let at=0;at<k.locationSize;at++)p(k.location+at,it.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let at=0;at<k.locationSize;at++)g(k.location+at);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let at=0;at<k.locationSize;at++)E(k.location+at,yt/k.locationSize,X,dt,yt*et,yt/k.locationSize*at*et,St)}}else if(q!==void 0){const dt=q[j];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(k.location,dt);break;case 3:n.vertexAttrib3fv(k.location,dt);break;case 4:n.vertexAttrib4fv(k.location,dt);break;default:n.vertexAttrib1fv(k.location,dt)}}}}b()}function U(){D();for(const M in i){const w=i[M];for(const z in w){const H=w[z];for(const $ in H)f(H[$].object),delete H[$];delete w[z]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const z in w){const H=w[z];for(const $ in H)f(H[$].object),delete H[$];delete w[z]}delete i[M.id]}function R(M){for(const w in i){const z=i[w];if(z[M.id]===void 0)continue;const H=z[M.id];for(const $ in H)f(H[$].object),delete H[$];delete z[M.id]}}function D(){T(),s=!0,o!==r&&(o=r,c(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function ig(n,t,e){let i;function r(c){i=c}function o(c,f){n.drawArrays(i,c,f),e.update(f,i,1)}function s(c,f,d){d!==0&&(n.drawArraysInstanced(i,c,f,d),e.update(f,i,d))}function a(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=f[_];e.update(m,i,1)}function l(c,f,d,h){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)s(c[_],f[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x]*h[x];e.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rg(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ci&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:C}}function og(n){const t=this;let e=null,i=0,r=!1,o=!1;const s=new Yi,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){e=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||o&&!g)o?f(null):c();else{const b=o?0:i,E=b*4;let y=p.clippingState||null;l.value=y,y=f(_,h,E,m);for(let U=0;U!==E;++U)y[U]=e[U];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,m,_){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const p=m+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=m;E!==x;++E,y+=4)s.copy(d[E]).applyMatrix4(b,a),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function sg(n){let t=new WeakMap;function e(s,a){return a===Sl?s.mapping=Kr:a===Ml&&(s.mapping=$r),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Sl||a===Ml)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new _p(l.height);return c.fromEquirectangularTexture(n,s),t.set(s,c),s.addEventListener("dispose",r),e(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class $f extends qf{constructor(t=-1,e=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-t,s=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ur=4,vu=[.125,.215,.35,.446,.526,.582],Zi=20,Oa=new $f,Su=new wt;let Na=null,Da=0,Ua=0,Fa=!1;const Ki=(1+Math.sqrt(5))/2,Cr=1/Ki,Mu=[new N(-Ki,Cr,0),new N(Ki,Cr,0),new N(-Cr,0,Ki),new N(Cr,0,Ki),new N(0,Ki,-Cr),new N(0,Ki,Cr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Eu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Na=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Da,Ua),this._renderer.xr.enabled=Fa,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kr||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Wo,format:Sn,colorSpace:io,depthBuffer:!1},r=yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(o)),this._blurMaterial=lg(o,t,e)}return r}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,i,r){const a=new on(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Su),f.toneMapping=Ii,f.autoClear=!1;const m=new ui({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new ot(new ht,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(Su),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;xs(r,b*E,p>2?E:0,E,E),f.setRenderTarget(r),x&&f.render(_,a),f.render(t,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Kr||t.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ot(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;xs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(s,Oa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Mu[(r-o-1)%Mu.length];this._blur(t,o-1,o,s,a)}e.autoClear=i}_blur(t,e,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,r,"latitudinal",o),this._halfBlur(s,t,i,i,r,"longitudinal",o)}_halfBlur(t,e,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ot(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Zi-1),x=o/_,g=isFinite(o)?1+Math.floor(f*x):Zi;g>Zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);const p=[];let b=0;for(let R=0;R<Zi;++R){const D=R/x,T=Math.exp(-D*D/2);p.push(T),R===0?b+=T:R<g&&(b+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const y=this._sizeLods[r],U=3*y*(r>E-Ur?r-E+Ur:0),C=4*(this._cubeSize-y);xs(e,U,C,3*y,2*y),l.setRenderTarget(e),l.render(d,Oa)}}function ag(n){const t=[],e=[],i=[];let r=n;const o=n-Ur+1+vu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>n-Ur?l=vu[s-n+Ur-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,x=3,g=2,p=1,b=new Float32Array(x*_*m),E=new Float32Array(g*_*m),y=new Float32Array(p*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,D=C>2?0:-1,T=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(T,x*_*C),E.set(h,g*_*C);const M=[C,C,C,C,C,C];y.set(M,p*_*C)}const U=new fn;U.setAttribute("position",new Mn(b,x)),U.setAttribute("uv",new Mn(E,g)),U.setAttribute("faceIndex",new Mn(y,p)),t.push(U),r>Ur&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yu(n,t,e){const i=new cr(n,t,e);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function lg(n,t,e){const i=new Float32Array(Zi),r=new N(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Tu(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Au(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function cg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sl||l===Ml,f=l===Kr||l===$r;if(c||f){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Eu(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(e===null&&(e=new Eu(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:s}}function ug(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fg(n,t,e,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(t.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)t.update(h[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let g=0,p=x.length;g<p;g++)t.update(x[g],n.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let E=0,y=b.length;E<y;E+=3){const U=b[E+0],C=b[E+1],R=b[E+2];h.push(U,C,C,R,R,U)}}else if(_!==void 0){const b=_.array;x=_.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const U=E+0,C=E+1,R=E+2;h.push(U,C,C,R,R,U)}}else return;const g=new(Bf(h)?Wf:zf)(h,1);g.version=x;const p=o.get(d);p&&t.remove(p),o.set(d,g)}function f(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function dg(n,t,e){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,m){n.drawElements(i,m,o,h*s),e.update(m,i,1)}function c(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,o,h*s,_),e.update(m,i,_))}function f(h,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,h,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];e.update(g,i,1)}function d(h,m,_,x){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/s,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,o,h,0,x,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b]*x[b];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function hg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function pg(n,t,e){const i=new WeakMap,r=new he;function o(s,a,l){const c=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let U=a.attributes.position.count*y,C=1;U>t.maxTextureSize&&(C=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*C*4*d),D=new Hf(R,U,C,d);D.type=ni,D.needsUpdate=!0;const T=y*4;for(let w=0;w<d;w++){const z=p[w],H=b[w],$=E[w],Z=U*C*4*w;for(let q=0;q<z.count;q++){const j=q*T;_===!0&&(r.fromBufferAttribute(z,q),R[Z+j+0]=r.x,R[Z+j+1]=r.y,R[Z+j+2]=r.z,R[Z+j+3]=0),x===!0&&(r.fromBufferAttribute(H,q),R[Z+j+4]=r.x,R[Z+j+5]=r.y,R[Z+j+6]=r.z,R[Z+j+7]=0),g===!0&&(r.fromBufferAttribute($,q),R[Z+j+8]=r.x,R[Z+j+9]=r.y,R[Z+j+10]=r.z,R[Z+j+11]=$.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new Qt(U,C)},i.set(a,h),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function mg(n,t,e,i){let r=new WeakMap;function o(l){const c=i.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:s}}class Zf extends Ue{constructor(t,e,i,r,o,s,a,l,c,f=Vr){if(f!==Vr&&f!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Vr&&(i=lr),i===void 0&&f===jr&&(i=Zr),super(null,r,o,s,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const jf=new Ue,bu=new Zf(1,1),Jf=new Hf,Qf=new ep,td=new Yf,Ru=[],wu=[],Cu=new Float32Array(16),Iu=new Float32Array(9),Pu=new Float32Array(4);function so(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let o=Ru[r];if(o===void 0&&(o=new Float32Array(r),Ru[r]=o),t!==0){i.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,n[s].toArray(o,a)}return o}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ra(n,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function gg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function Sg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,i))return;Pu.set(i),n.uniformMatrix2fv(this.addr,!1,Pu),Me(e,i)}}function Mg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),Me(e,i)}}function Eg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),Me(e,i)}}function yg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function Rg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function Cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function Pg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(bu.compareFunction=Ff,o=bu):o=jf,e.setTexture2D(t||o,r)}function Lg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Qf,r)}function Og(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||td,r)}function Ng(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Jf,r)}function Dg(n){switch(n){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return vg;case 35674:return Sg;case 35675:return Mg;case 35676:return Eg;case 5124:case 35670:return yg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return bg;case 5125:return Rg;case 36294:return wg;case 36295:return Cg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Ng}}function Ug(n,t){n.uniform1fv(this.addr,t)}function Fg(n,t){const e=so(t,this.size,2);n.uniform2fv(this.addr,e)}function Bg(n,t){const e=so(t,this.size,3);n.uniform3fv(this.addr,e)}function Gg(n,t){const e=so(t,this.size,4);n.uniform4fv(this.addr,e)}function Hg(n,t){const e=so(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function kg(n,t){const e=so(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vg(n,t){const e=so(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zg(n,t){n.uniform1iv(this.addr,t)}function Wg(n,t){n.uniform2iv(this.addr,t)}function Xg(n,t){n.uniform3iv(this.addr,t)}function qg(n,t){n.uniform4iv(this.addr,t)}function Yg(n,t){n.uniform1uiv(this.addr,t)}function Kg(n,t){n.uniform2uiv(this.addr,t)}function $g(n,t){n.uniform3uiv(this.addr,t)}function Zg(n,t){n.uniform4uiv(this.addr,t)}function jg(n,t,e){const i=this.cache,r=t.length,o=ra(e,r);Se(i,o)||(n.uniform1iv(this.addr,o),Me(i,o));for(let s=0;s!==r;++s)e.setTexture2D(t[s]||jf,o[s])}function Jg(n,t,e){const i=this.cache,r=t.length,o=ra(e,r);Se(i,o)||(n.uniform1iv(this.addr,o),Me(i,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||Qf,o[s])}function Qg(n,t,e){const i=this.cache,r=t.length,o=ra(e,r);Se(i,o)||(n.uniform1iv(this.addr,o),Me(i,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||td,o[s])}function t_(n,t,e){const i=this.cache,r=t.length,o=ra(e,r);Se(i,o)||(n.uniform1iv(this.addr,o),Me(i,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||Jf,o[s])}function e_(n){switch(n){case 5126:return Ug;case 35664:return Fg;case 35665:return Bg;case 35666:return Gg;case 35674:return Hg;case 35675:return kg;case 35676:return Vg;case 5124:case 35670:return zg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Kg;case 36295:return $g;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t_}}class n_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class i_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}}class r_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(t,e[a.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Lu(n,t){n.seq.push(t),n.map[t.id]=t}function o_(n,t,e){const i=n.name,r=i.length;for(Ba.lastIndex=0;;){const o=Ba.exec(i),s=Ba.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Lu(e,c===void 0?new n_(a,n,t):new i_(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new r_(a),Lu(e,d)),e=d}}}class Fs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),s=t.getUniformLocation(e,o.name);o_(o,s,this)}}setValue(t,e,i,r){const o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,s=e.length;o!==s;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,o=t.length;r!==o;++r){const s=t[r];s.id in e&&i.push(s)}return i}}function Ou(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const s_=37297;let a_=0;function l_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return i.join(`
`)}const Nu=new Ut;function c_(n){$t._getMatrix(Nu,$t.workingColorSpace,n);const t=`mat3( ${Nu.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case na:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Du(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+l_(n.getShaderSource(t),s)}else return r}function u_(n,t){const e=c_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function f_(n,t){let e;switch(t){case dh:e="Linear";break;case hh:e="Reinhard";break;case ph:e="Cineon";break;case mh:e="ACESFilmic";break;case _h:e="AgX";break;case xh:e="Neutral";break;case gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vs=new N;function d_(){$t.getLuminanceCoefficients(vs);const n=vs.x.toFixed(4),t=vs.y.toFixed(4),e=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function p_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function m_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(t,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:n.getAttribLocation(t,s),locationSize:a}}return e}function To(n){return n!==""}function Uu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(g_,x_)}const __=new Map;function x_(n,t){let e=Bt[t];if(e===void 0){const i=__.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Zl(e)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(v_,S_)}function S_(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Gu(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function M_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function E_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Kr:case $r:t="ENVMAP_TYPE_CUBE";break;case ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $r:t="ENVMAP_MODE_REFRACTION";break}return t}function T_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case uh:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function A_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function b_(n,t,e,i){const r=n.getContext(),o=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=M_(e),c=E_(e),f=y_(e),d=T_(e),h=A_(e),m=h_(e),_=p_(o),x=r.createProgram();let g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(To).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(To).join(`
`),p.length>0&&(p+=`
`)):(g=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?f_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),d_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(To).join(`
`)),s=Zl(s),s=Uu(s,e),s=Fu(s,e),a=Zl(a),a=Uu(a,e),a=Fu(a,e),s=Bu(s),a=Bu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+g+s,y=b+p+a,U=Ou(r,r.VERTEX_SHADER,E),C=Ou(r,r.FRAGMENT_SHADER,y);r.attachShader(x,U),r.attachShader(x,C),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(w){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(U).trim(),$=r.getShaderInfoLog(C).trim();let Z=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,U,C);else{const j=Du(r,U,"vertex"),k=Du(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+j+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||$==="")&&(q=!1);q&&(w.diagnostics={runnable:Z,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:p}})}r.deleteShader(U),r.deleteShader(C),D=new Fs(r,x),T=m_(r,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,s_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=C,this}let R_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new C_(t),e.set(t,i)),i}}class C_{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}}function I_(n,t,e,i,r,o,s){const a=new kf,l=new w_,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,w,z,H){const $=z.fog,Z=H.geometry,q=T.isMeshStandardMaterial?z.environment:null,j=(T.isMeshStandardMaterial?e:t).get(T.envMap||q),k=j&&j.mapping===ea?j.image.height:null,it=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=dt!==void 0?dt.length:0;let Gt=0;Z.morphAttributes.position!==void 0&&(Gt=1),Z.morphAttributes.normal!==void 0&&(Gt=2),Z.morphAttributes.color!==void 0&&(Gt=3);let ne,X,et,St;if(it){const te=wn[it];ne=te.vertexShader,X=te.fragmentShader}else ne=T.vertexShader,X=T.fragmentShader,l.update(T),et=l.getVertexShaderID(T),St=l.getFragmentShaderID(T);const at=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),Ot=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,ue=!!T.map,Yt=!!T.matcap,me=!!j,O=!!T.aoMap,tn=!!T.lightMap,Wt=!!T.bumpMap,Xt=!!T.normalMap,Rt=!!T.displacementMap,se=!!T.emissiveMap,bt=!!T.metalnessMap,A=!!T.roughnessMap,v=T.anisotropy>0,F=T.clearcoat>0,Y=T.dispersion>0,J=T.iridescence>0,W=T.sheen>0,Mt=T.transmission>0,lt=v&&!!T.anisotropyMap,pt=F&&!!T.clearcoatMap,Kt=F&&!!T.clearcoatNormalMap,Q=F&&!!T.clearcoatRoughnessMap,mt=J&&!!T.iridescenceMap,Ct=J&&!!T.iridescenceThicknessMap,Pt=W&&!!T.sheenColorMap,gt=W&&!!T.sheenRoughnessMap,qt=!!T.specularMap,Ft=!!T.specularColorMap,re=!!T.specularIntensityMap,I=Mt&&!!T.transmissionMap,st=Mt&&!!T.thicknessMap,V=!!T.gradientMap,K=!!T.alphaMap,ft=T.alphaTest>0,ct=!!T.alphaHash,Nt=!!T.extensions;let de=Ii;T.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(de=n.toneMapping);const Re={shaderID:it,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:X,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ht,batchingColor:Ht&&H._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&H.instanceColor!==null,instancingMorph:Ot&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:io,alphaToCoverage:!!T.alphaToCoverage,map:ue,matcap:Yt,envMap:me,envMapMode:me&&j.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:tn,bumpMap:Wt,normalMap:Xt,displacementMap:h&&Rt,emissiveMap:se,normalMapObjectSpace:Xt&&T.normalMapType===Eh,normalMapTangentSpace:Xt&&T.normalMapType===Uf,metalnessMap:bt,roughnessMap:A,anisotropy:v,anisotropyMap:lt,clearcoat:F,clearcoatMap:pt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:J,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:W,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:qt,specularColorMap:Ft,specularIntensityMap:re,transmission:Mt,transmissionMap:I,thicknessMap:st,gradientMap:V,opaque:T.transparent===!1&&T.blending===kr&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ct,combine:T.combine,mapUv:ue&&x(T.map.channel),aoMapUv:O&&x(T.aoMap.channel),lightMapUv:tn&&x(T.lightMap.channel),bumpMapUv:Wt&&x(T.bumpMap.channel),normalMapUv:Xt&&x(T.normalMap.channel),displacementMapUv:Rt&&x(T.displacementMap.channel),emissiveMapUv:se&&x(T.emissiveMap.channel),metalnessMapUv:bt&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:lt&&x(T.anisotropyMap.channel),clearcoatMapUv:pt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(T.sheenRoughnessMap.channel),specularMapUv:qt&&x(T.specularMap.channel),specularColorMapUv:Ft&&x(T.specularColorMap.channel),specularIntensityMapUv:re&&x(T.specularIntensityMap.channel),transmissionMapUv:I&&x(T.transmissionMap.channel),thicknessMapUv:st&&x(T.thicknessMap.channel),alphaMapUv:K&&x(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xt||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(ue||K),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:It,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:ue&&T.map.isVideoTexture===!0&&$t.getTransfer(T.map.colorSpace)===ee,decodeVideoTextureEmissive:se&&T.emissiveMap.isVideoTexture===!0&&$t.getTransfer(T.emissiveMap.colorSpace)===ee,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Nn,flipSided:T.side===Ve,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)M.push(w),M.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(b(M,T),E(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=_[T.type];let w;if(M){const z=wn[M];w=hp.clone(z.uniforms)}else w=T.uniforms;return w}function U(T,M){let w;for(let z=0,H=f.length;z<H;z++){const $=f[z];if($.cacheKey===M){w=$,++w.usedTimes;break}}return w===void 0&&(w=new b_(n,M,T,o),f.push(w)),w}function C(T){if(--T.usedTimes===0){const M=f.indexOf(T);f[M]=f[f.length-1],f.pop(),T.destroy()}}function R(T){l.remove(T)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:f,dispose:D}}function P_(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function L_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Hu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ku(){const n=[];let t=0;const e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function s(d,h,m,_,x,g){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:g},n[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function a(d,h,m,_,x,g){const p=s(d,h,m,_,x,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(d,h,m,_,x,g){const p=s(d,h,m,_,x,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||L_),i.length>1&&i.sort(h||Hu),r.length>1&&r.sort(h||Hu)}function f(){for(let d=t,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:c}}function O_(){let n=new WeakMap;function t(i,r){const o=n.get(i);let s;return o===void 0?(s=new ku,n.set(i,[s])):r>=o.length?(s=new ku,o.push(s)):s=o[r],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function N_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new wt};break;case"SpotLight":e={position:new N,direction:new N,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function D_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let U_=0;function F_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function B_(n){const t=new N_,e=D_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,o=new ce,s=new ce;function a(c){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,x=0,g=0,p=0,b=0,E=0,y=0,U=0,C=0,R=0;c.sort(F_);for(let T=0,M=c.length;T<M;T++){const w=c[T],z=w.color,H=w.intensity,$=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=z.r*H,d+=z.g*H,h+=z.b*H;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],H);R++}else if(w.isDirectionalLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,k=e.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=w.shadow.matrix,b++}i.directional[m]=q,m++}else if(w.isSpotLight){const q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(z).multiplyScalar(H),q.distance=$,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[x]=q;const j=w.shadow;if(w.map&&(i.spotLightMap[U]=w.map,U++,j.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[x]=j.matrix,w.castShadow){const k=e.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=Z,y++}x++}else if(w.isRectAreaLight){const q=t.get(w);q.color.copy(z).multiplyScalar(H),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=q,g++}else if(w.isPointLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const j=w.shadow,k=e.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=w.shadow.matrix,E++}i.point[_]=q,_++}else if(w.isHemisphereLight){const q=t.get(w);q.skyColor.copy(w.color).multiplyScalar(H),q.groundColor.copy(w.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==U||D.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=m,D.pointLength=_,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=U,D.numLightProbes=R,i.version=U_++)}function l(c,f){let d=0,h=0,m=0,_=0,x=0;const g=f.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(E.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),s.identity(),o.copy(E.matrixWorld),o.premultiply(g),s.extractRotation(o),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Vu(n){const t=new B_(n),e=[],i=[];function r(f){c.camera=f,e.length=0,i.length=0}function o(f){e.push(f)}function s(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function G_(n){let t=new WeakMap;function e(r,o=0){const s=t.get(r);let a;return s===void 0?(a=new Vu(n),t.set(r,[a])):o>=s.length?(a=new Vu(n),s.push(a)):a=s[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class H_ extends pr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class k_ extends pr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
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
}`;function W_(n,t,e){let i=new Tc;const r=new Qt,o=new Qt,s=new he,a=new H_({depthPacking:Mh}),l=new k_,c={},f=e.maxTextureSize,d={[Ni]:Ve,[Ve]:Ni,[Nn]:Nn},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:V_,fragmentShader:z_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ot(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let p=this.type;this.render=function(C,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ci),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==$n&&this.type===$n,$=p===$n&&this.type!==$n;for(let Z=0,q=C.length;Z<q;Z++){const j=C[Z],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const it=k.getFrameExtents();if(r.multiply(it),o.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/it.x),r.x=o.x*it.x,k.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/it.y),r.y=o.y*it.y,k.mapSize.y=o.y)),k.map===null||H===!0||$===!0){const yt=this.type!==$n?{minFilter:Je,magFilter:Je}:{};k.map!==null&&k.map.dispose(),k.map=new cr(r.x,r.y,yt),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const dt=k.getViewportCount();for(let yt=0;yt<dt;yt++){const Gt=k.getViewport(yt);s.set(o.x*Gt.x,o.y*Gt.y,o.x*Gt.z,o.y*Gt.w),z.viewport(s),k.updateMatrices(j,yt),i=k.getFrustum(),y(R,D,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===$n&&b(k,D),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,M,w)};function b(C,R){const D=t.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new cr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,m,x,null)}function E(C,R,D,T){let M=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=M.uuid,H=R.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let Z=$[H];Z===void 0&&(Z=M.clone(),$[H]=Z,R.addEventListener("dispose",U)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,T===$n?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=D}return M}function y(C,R,D,T,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===$n)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=t.update(C),$=C.material;if(Array.isArray($)){const Z=H.groups;for(let q=0,j=Z.length;q<j;q++){const k=Z[q],it=$[k.materialIndex];if(it&&it.visible){const dt=E(C,it,T,M);C.onBeforeShadow(n,C,R,D,H,dt,k),n.renderBufferDirect(D,null,H,dt,C,k),C.onAfterShadow(n,C,R,D,H,dt,k)}}}else if($.visible){const Z=E(C,$,T,M);C.onBeforeShadow(n,C,R,D,H,Z,null),n.renderBufferDirect(D,null,H,Z,C,null),C.onAfterShadow(n,C,R,D,H,Z,null)}}const z=C.children;for(let H=0,$=z.length;H<$;H++)y(z[H],R,D,T,M)}function U(C){C.target.removeEventListener("dispose",U);for(const D in c){const T=c[D],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const X_={[hl]:pl,[ml]:xl,[gl]:vl,[Yr]:_l,[pl]:hl,[xl]:ml,[vl]:gl,[_l]:Yr};function q_(n,t){function e(){let I=!1;const st=new he;let V=null;const K=new he(0,0,0,0);return{setMask:function(ft){V!==ft&&!I&&(n.colorMask(ft,ft,ft,ft),V=ft)},setLocked:function(ft){I=ft},setClear:function(ft,ct,Nt,de,Re){Re===!0&&(ft*=de,ct*=de,Nt*=de),st.set(ft,ct,Nt,de),K.equals(st)===!1&&(n.clearColor(ft,ct,Nt,de),K.copy(st))},reset:function(){I=!1,V=null,K.set(-1,0,0,0)}}}function i(){let I=!1,st=!1,V=null,K=null,ft=null;return{setReversed:function(ct){if(st!==ct){const Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const de=ft;ft=null,this.setClear(de)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?at(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(ct){V!==ct&&!I&&(n.depthMask(ct),V=ct)},setFunc:function(ct){if(st&&(ct=X_[ct]),K!==ct){switch(ct){case hl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ct}},setLocked:function(ct){I=ct},setClear:function(ct){ft!==ct&&(st&&(ct=1-ct),n.clearDepth(ct),ft=ct)},reset:function(){I=!1,V=null,K=null,ft=null,st=!1}}}function r(){let I=!1,st=null,V=null,K=null,ft=null,ct=null,Nt=null,de=null,Re=null;return{setTest:function(te){I||(te?at(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(te){st!==te&&!I&&(n.stencilMask(te),st=te)},setFunc:function(te,dn,kn){(V!==te||K!==dn||ft!==kn)&&(n.stencilFunc(te,dn,kn),V=te,K=dn,ft=kn)},setOp:function(te,dn,kn){(ct!==te||Nt!==dn||de!==kn)&&(n.stencilOp(te,dn,kn),ct=te,Nt=dn,de=kn)},setLocked:function(te){I=te},setClear:function(te){Re!==te&&(n.clearStencil(te),Re=te)},reset:function(){I=!1,st=null,V=null,K=null,ft=null,ct=null,Nt=null,de=null,Re=null}}}const o=new e,s=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,m=[],_=null,x=!1,g=null,p=null,b=null,E=null,y=null,U=null,C=null,R=new wt(0,0,0),D=0,T=!1,M=null,w=null,z=null,H=null,$=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=j>=2);let it=null,dt={};const yt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),ne=new he().fromArray(yt),X=new he().fromArray(Gt);function et(I,st,V,K){const ft=new Uint8Array(4),ct=n.createTexture();n.bindTexture(I,ct),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<V;Nt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(st+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ct}const St={};St[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),at(n.DEPTH_TEST),s.setFunc(Yr),Wt(!1),Xt(Xc),at(n.CULL_FACE),O(Ci);function at(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function It(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Ot(I,st){return d[I]!==st?(n.bindFramebuffer(I,st),d[I]=st,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=st),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Ht(I,st){let V=m,K=!1;if(I){V=h.get(st),V===void 0&&(V=[],h.set(st,V));const ft=I.textures;if(V.length!==ft.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Nt=ft.length;ct<Nt;ct++)V[ct]=n.COLOR_ATTACHMENT0+ct;V.length=ft.length,K=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,K=!0);K&&n.drawBuffers(V)}function ue(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Yt={[$i]:n.FUNC_ADD,[Yd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};Yt[$d]=n.MIN,Yt[Zd]=n.MAX;const me={[jd]:n.ZERO,[Jd]:n.ONE,[Qd]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[ih]:n.DST_COLOR,[eh]:n.DST_ALPHA,[th]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[rh]:n.ONE_MINUS_DST_COLOR,[nh]:n.ONE_MINUS_DST_ALPHA,[sh]:n.CONSTANT_COLOR,[ah]:n.ONE_MINUS_CONSTANT_COLOR,[lh]:n.CONSTANT_ALPHA,[ch]:n.ONE_MINUS_CONSTANT_ALPHA};function O(I,st,V,K,ft,ct,Nt,de,Re,te){if(I===Ci){x===!0&&(It(n.BLEND),x=!1);return}if(x===!1&&(at(n.BLEND),x=!0),I!==qd){if(I!==g||te!==T){if((p!==$i||y!==$i)&&(n.blendEquation(n.FUNC_ADD),p=$i,y=$i),te)switch(I){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,U=null,C=null,R.set(0,0,0),D=0,g=I,T=te}return}ft=ft||st,ct=ct||V,Nt=Nt||K,(st!==p||ft!==y)&&(n.blendEquationSeparate(Yt[st],Yt[ft]),p=st,y=ft),(V!==b||K!==E||ct!==U||Nt!==C)&&(n.blendFuncSeparate(me[V],me[K],me[ct],me[Nt]),b=V,E=K,U=ct,C=Nt),(de.equals(R)===!1||Re!==D)&&(n.blendColor(de.r,de.g,de.b,Re),R.copy(de),D=Re),g=I,T=!1}function tn(I,st){I.side===Nn?It(n.CULL_FACE):at(n.CULL_FACE);let V=I.side===Ve;st&&(V=!V),Wt(V),I.blending===kr&&I.transparent===!1?O(Ci):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Xt(I){I!==zd?(at(n.CULL_FACE),I!==w&&(I===Xc?n.cullFace(n.BACK):I===Wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),w=I}function Rt(I){I!==z&&(q&&n.lineWidth(I),z=I)}function se(I,st,V){I?(at(n.POLYGON_OFFSET_FILL),(H!==st||$!==V)&&(n.polygonOffset(st,V),H=st,$=V)):It(n.POLYGON_OFFSET_FILL)}function bt(I){I?at(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function A(I){I===void 0&&(I=n.TEXTURE0+Z-1),it!==I&&(n.activeTexture(I),it=I)}function v(I,st,V){V===void 0&&(it===null?V=n.TEXTURE0+Z-1:V=it);let K=dt[V];K===void 0&&(K={type:void 0,texture:void 0},dt[V]=K),(K.type!==I||K.texture!==st)&&(it!==V&&(n.activeTexture(V),it=V),n.bindTexture(I,st||St[I]),K.type=I,K.texture=st)}function F(){const I=dt[it];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){ne.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function gt(I){X.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function qt(I,st){let V=c.get(st);V===void 0&&(V=new WeakMap,c.set(st,V));let K=V.get(I);K===void 0&&(K=n.getUniformBlockIndex(st,I.name),V.set(I,K))}function Ft(I,st){const K=c.get(st).get(I);l.get(st)!==K&&(n.uniformBlockBinding(st,K,I.__bindingPointIndex),l.set(st,K))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},it=null,dt={},d={},h=new WeakMap,m=[],_=null,x=!1,g=null,p=null,b=null,E=null,y=null,U=null,C=null,R=new wt(0,0,0),D=0,T=!1,M=null,w=null,z=null,H=null,$=null,ne.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:at,disable:It,bindFramebuffer:Ot,drawBuffers:Ht,useProgram:ue,setBlending:O,setMaterial:tn,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:se,setScissorTest:bt,activeTexture:A,bindTexture:v,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:mt,texImage3D:Ct,updateUBOMapping:qt,uniformBlockBinding:Ft,texStorage2D:Kt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:gt,reset:re}}function zu(n,t,e,i){const r=Y_(i);switch(e){case Cf:return n*t;case Pf:return n*t;case Lf:return n*t*2;case Of:return n*t/r.components*r.byteLength;case vc:return n*t/r.components*r.byteLength;case Nf:return n*t*2/r.components*r.byteLength;case Sc:return n*t*2/r.components*r.byteLength;case If:return n*t*3/r.components*r.byteLength;case Sn:return n*t*4/r.components*r.byteLength;case Mc:return n*t*4/r.components*r.byteLength;case Ls:case Os:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Ds:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:case Rl:return Math.max(n,16)*Math.max(t,8)/4;case Tl:case bl:return Math.max(n,8)*Math.max(t,8)/2;case wl:case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Us:case Xl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Df:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Kl:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Y_(n){switch(n){case ci:case bf:return{byteLength:1,components:1};case Ho:case Rf:case Wo:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case lr:case gc:case ni:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function K_(n,t,e,i,r,o,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return m?new OffscreenCanvas(A,v):Vs("canvas")}function x(A,v,F){let Y=1;const J=bt(A);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(Y*J.width),Mt=Math.floor(Y*J.height);d===void 0&&(d=_(W,Mt));const lt=v?_(W,Mt):d;return lt.width=W,lt.height=Mt,lt.getContext("2d").drawImage(A,0,0,W,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Mt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,v,F,Y,J=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=v;if(v===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),v===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const Mt=J?na:$t.getTransfer(Y);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=Mt===ee?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(A,v){let F;return A?v===null||v===lr||v===Zr?F=n.DEPTH24_STENCIL8:v===ni?F=n.DEPTH32F_STENCIL8:v===Ho&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===lr||v===Zr?F=n.DEPTH_COMPONENT24:v===ni?F=n.DEPTH_COMPONENT32F:v===Ho&&(F=n.DEPTH_COMPONENT16),F}function U(A,v){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==Fn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),D(v),v.isVideoTexture&&f.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),M(v)}function D(A){const v=i.get(A);if(v.__webglInit===void 0)return;const F=A.source,Y=h.get(F);if(Y){const J=Y[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(A),Object.keys(Y).length===0&&h.delete(F)}i.remove(A)}function T(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const F=A.source,Y=h.get(F);delete Y[v.__cacheKey],s.memory.textures--}function M(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let J=0;J<v.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,J=F.length;Y<J;Y++){const W=i.get(F[Y]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),s.memory.textures--),i.remove(F[Y])}i.remove(A)}let w=0;function z(){w=0}function H(){const A=w;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),w+=1,A}function $(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Z(A,v){const F=i.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,A,v);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function q(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function j(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function k(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){et(F,A,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const it={[El]:n.REPEAT,[er]:n.CLAMP_TO_EDGE,[yl]:n.MIRRORED_REPEAT},dt={[Je]:n.NEAREST,[vh]:n.NEAREST_MIPMAP_NEAREST,[Qo]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[nr]:n.LINEAR_MIPMAP_LINEAR},yt={[yh]:n.NEVER,[Ch]:n.ALWAYS,[Th]:n.LESS,[Ff]:n.LEQUAL,[Ah]:n.EQUAL,[wh]:n.GEQUAL,[bh]:n.GREATER,[Rh]:n.NOTEQUAL};function Gt(A,v){if(v.type===ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Fn||v.magFilter===da||v.magFilter===Qo||v.magFilter===nr||v.minFilter===Fn||v.minFilter===da||v.minFilter===Qo||v.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,it[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,it[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,it[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,dt[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==Qo&&v.minFilter!==nr||v.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ne(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let J=h.get(Y);J===void 0&&(J={},h.set(Y,J));const W=$(v);if(W!==A.__cacheKey){J[W]===void 0&&(J[W]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[W].usedTimes++;const Mt=J[A.__cacheKey];Mt!==void 0&&(J[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(v)),A.__cacheKey=W,A.__webglTexture=J[W].texture}return F}function X(A,v,F){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const J=ne(A,v),W=v.source;e.bindTexture(Y,A.__webglTexture,n.TEXTURE0+F);const Mt=i.get(W);if(W.version!==Mt.__version||J===!0){e.activeTexture(n.TEXTURE0+F);const lt=$t.getPrimaries($t.workingColorSpace),pt=v.colorSpace===Ai?null:$t.getPrimaries(v.colorSpace),Kt=v.colorSpace===Ai||lt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Q=x(v.image,!1,r.maxTextureSize);Q=se(v,Q);const mt=o.convert(v.format,v.colorSpace),Ct=o.convert(v.type);let Pt=E(v.internalFormat,mt,Ct,v.colorSpace,v.isVideoTexture);Gt(Y,v);let gt;const qt=v.mipmaps,Ft=v.isVideoTexture!==!0,re=Mt.__version===void 0||J===!0,I=W.dataReady,st=U(v,Q);if(v.isDepthTexture)Pt=y(v.format===jr,v.type),re&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,Pt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Pt,Q.width,Q.height,0,mt,Ct,null));else if(v.isDataTexture)if(qt.length>0){Ft&&re&&e.texStorage2D(n.TEXTURE_2D,st,Pt,qt[0].width,qt[0].height);for(let V=0,K=qt.length;V<K;V++)gt=qt[V],Ft?I&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,V,Pt,gt.width,gt.height,0,mt,Ct,gt.data);v.generateMipmaps=!1}else Ft?(re&&e.texStorage2D(n.TEXTURE_2D,st,Pt,Q.width,Q.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,mt,Ct,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,Q.width,Q.height,0,mt,Ct,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,Pt,qt[0].width,qt[0].height,Q.depth);for(let V=0,K=qt.length;V<K;V++)if(gt=qt[V],v.format!==Sn)if(mt!==null)if(Ft){if(I)if(v.layerUpdates.size>0){const ft=zu(gt.width,gt.height,v.format,v.type);for(const ct of v.layerUpdates){const Nt=gt.data.subarray(ct*ft/gt.data.BYTES_PER_ELEMENT,(ct+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ct,gt.width,gt.height,1,mt,Nt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,Q.depth,mt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Pt,gt.width,gt.height,Q.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,Q.depth,mt,Ct,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,Pt,gt.width,gt.height,Q.depth,0,mt,Ct,gt.data)}else{Ft&&re&&e.texStorage2D(n.TEXTURE_2D,st,Pt,qt[0].width,qt[0].height);for(let V=0,K=qt.length;V<K;V++)gt=qt[V],v.format!==Sn?mt!==null?Ft?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,V,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,V,Pt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(v.isDataArrayTexture)if(Ft){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,Pt,Q.width,Q.height,Q.depth),I)if(v.layerUpdates.size>0){const V=zu(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ft=Q.data.subarray(K*V/Q.data.BYTES_PER_ELEMENT,(K+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,mt,Ct,ft)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,mt,Ct,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,Q.width,Q.height,Q.depth,0,mt,Ct,Q.data);else if(v.isData3DTexture)Ft?(re&&e.texStorage3D(n.TEXTURE_3D,st,Pt,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,mt,Ct,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,Q.width,Q.height,Q.depth,0,mt,Ct,Q.data);else if(v.isFramebufferTexture){if(re)if(Ft)e.texStorage2D(n.TEXTURE_2D,st,Pt,Q.width,Q.height);else{let V=Q.width,K=Q.height;for(let ft=0;ft<st;ft++)e.texImage2D(n.TEXTURE_2D,ft,Pt,V,K,0,mt,Ct,null),V>>=1,K>>=1}}else if(qt.length>0){if(Ft&&re){const V=bt(qt[0]);e.texStorage2D(n.TEXTURE_2D,st,Pt,V.width,V.height)}for(let V=0,K=qt.length;V<K;V++)gt=qt[V],Ft?I&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,mt,Ct,gt):e.texImage2D(n.TEXTURE_2D,V,Pt,mt,Ct,gt);v.generateMipmaps=!1}else if(Ft){if(re){const V=bt(Q);e.texStorage2D(n.TEXTURE_2D,st,Pt,V.width,V.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ct,Q)}else e.texImage2D(n.TEXTURE_2D,0,Pt,mt,Ct,Q);g(v)&&p(Y),Mt.__version=W.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function et(A,v,F){if(v.image.length!==6)return;const Y=ne(A,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const W=i.get(J);if(J.version!==W.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const Mt=$t.getPrimaries($t.workingColorSpace),lt=v.colorSpace===Ai?null:$t.getPrimaries(v.colorSpace),pt=v.colorSpace===Ai||Mt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Kt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Kt&&!Q?mt[K]=x(v.image[K],!0,r.maxCubemapSize):mt[K]=Q?v.image[K].image:v.image[K],mt[K]=se(v,mt[K]);const Ct=mt[0],Pt=o.convert(v.format,v.colorSpace),gt=o.convert(v.type),qt=E(v.internalFormat,Pt,gt,v.colorSpace),Ft=v.isVideoTexture!==!0,re=W.__version===void 0||Y===!0,I=J.dataReady;let st=U(v,Ct);Gt(n.TEXTURE_CUBE_MAP,v);let V;if(Kt){Ft&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,st,qt,Ct.width,Ct.height);for(let K=0;K<6;K++){V=mt[K].mipmaps;for(let ft=0;ft<V.length;ft++){const ct=V[ft];v.format!==Sn?Pt!==null?Ft?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,qt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ct.width,ct.height,Pt,gt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,qt,ct.width,ct.height,0,Pt,gt,ct.data)}}}else{if(V=v.mipmaps,Ft&&re){V.length>0&&st++;const K=bt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,st,qt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Pt,gt,mt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,mt[K].width,mt[K].height,0,Pt,gt,mt[K].data);for(let ft=0;ft<V.length;ft++){const Nt=V[ft].image[K].image;Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Nt.width,Nt.height,Pt,gt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,qt,Nt.width,Nt.height,0,Pt,gt,Nt.data)}}else{Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,gt,mt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Pt,gt,mt[K]);for(let ft=0;ft<V.length;ft++){const ct=V[ft];Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Pt,gt,ct.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,qt,Pt,gt,ct.image[K])}}}g(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function St(A,v,F,Y,J,W){const Mt=o.convert(F.format,F.colorSpace),lt=o.convert(F.type),pt=E(F.internalFormat,Mt,lt,F.colorSpace),Kt=i.get(v),Q=i.get(F);if(Q.__renderTarget=v,!Kt.__hasExternalTextures){const mt=Math.max(1,v.width>>W),Ct=Math.max(1,v.height>>W);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,W,pt,mt,Ct,v.depth,0,Mt,lt,null):e.texImage2D(J,W,pt,mt,Ct,0,Mt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Xt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,Q.__webglTexture,0,Wt(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,Q.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(A,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const Y=v.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,W=y(v.stencilBuffer,J),Mt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=Wt(v);Xt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,W,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,A)}else{const Y=v.textures;for(let J=0;J<Y.length;J++){const W=Y[J],Mt=o.convert(W.format,W.colorSpace),lt=o.convert(W.type),pt=E(W.internalFormat,Mt,lt,W.colorSpace),Kt=Wt(v);F&&Xt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,pt,v.width,v.height):Xt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const J=Y.__webglTexture,W=Wt(v);if(v.depthTexture.format===Vr)Xt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===jr)Xt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ot(A){const v=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Y}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,A)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),at(v.__webglDepthbuffer[Y],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),at(v.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(A,v,F){const Y=i.get(A);v!==void 0&&St(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ot(A)}function ue(A){const v=A.texture,F=i.get(A),Y=i.get(v);A.addEventListener("dispose",R);const J=A.textures,W=A.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,s.memory.textures++),W){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let pt=0;pt<v.mipmaps.length;pt++)F.__webglFramebuffer[lt][pt]=n.createFramebuffer()}else F.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)F.__webglFramebuffer[lt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let lt=0,pt=J.length;lt<pt;lt++){const Kt=i.get(J[lt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=n.createTexture(),s.memory.textures++)}if(A.samples>0&&Xt(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const pt=J[lt];F.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const Kt=o.convert(pt.format,pt.colorSpace),Q=o.convert(pt.type),mt=E(pt.internalFormat,Kt,Q,pt.colorSpace,A.isXRRenderTarget===!0),Ct=Wt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,mt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),at(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)St(F.__webglFramebuffer[lt][pt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else St(F.__webglFramebuffer[lt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,pt=J.length;lt<pt;lt++){const Kt=J[lt],Q=i.get(Kt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Gt(n.TEXTURE_2D,Kt),St(F.__webglFramebuffer,A,Kt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),g(Kt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),Gt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)St(F.__webglFramebuffer[pt],A,v,n.COLOR_ATTACHMENT0,lt,pt);else St(F.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,lt,0);g(v)&&p(lt),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Yt(A){const v=A.textures;for(let F=0,Y=v.length;F<Y;F++){const J=v[F];if(g(J)){const W=b(A),Mt=i.get(J).__webglTexture;e.bindTexture(W,Mt),p(W),e.unbindTexture()}}}const me=[],O=[];function tn(A){if(A.samples>0){if(Xt(A)===!1){const v=A.textures,F=A.width,Y=A.height;let J=n.COLOR_BUFFER_BIT;const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(A),lt=v.length>1;if(lt)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Kt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,n.NEAREST),l===!0&&(me.length=0,O.length=0,me.push(n.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(me.push(W),O.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Kt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Wt(A){return Math.min(r.maxSamples,A.samples)}function Xt(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(A){const v=s.render.frame;f.get(A)!==v&&(f.set(A,v),A.update())}function se(A,v){const F=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==io&&F!==Ai&&($t.getTransfer(F)===ee?(Y!==Sn||J!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=Ht,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Xt}function $_(n,t){function e(i,r=Ai){let o;const s=$t.getTransfer(r);if(i===ci)return n.UNSIGNED_BYTE;if(i===_c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bf)return n.BYTE;if(i===Rf)return n.SHORT;if(i===Ho)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Wo)return n.HALF_FLOAT;if(i===Cf)return n.ALPHA;if(i===If)return n.RGB;if(i===Sn)return n.RGBA;if(i===Pf)return n.LUMINANCE;if(i===Lf)return n.LUMINANCE_ALPHA;if(i===Vr)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===Of)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===Nf)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===Mc)return n.RGBA_INTEGER;if(i===Ls||i===Os||i===Ns||i===Ds)if(s===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ls)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ls)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Al||i===bl||i===Rl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wl||i===Cl||i===Il)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===wl||i===Cl)return s===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Il)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Ll||i===Ol||i===Nl||i===Dl||i===Ul||i===Fl||i===Bl||i===Gl||i===Hl||i===kl||i===Vl||i===zl||i===Wl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Pl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return s===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Us||i===Xl||i===ql)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Us)return s===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Df||i===Yl||i===Kl||i===$l)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Us)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Z_ extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ne extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ue,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Di({vertexShader:J_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ex extends ro{constructor(t,e){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const x=new tx,g=e.getContextAttributes();let p=null,b=null;const E=[],y=[],U=new Qt;let C=null;const R=new on;R.viewport=new he;const D=new on;D.viewport=new he;const T=[R,D],M=new Z_;let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=E[X];return et===void 0&&(et=new Ga,E[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=E[X];return et===void 0&&(et=new Ga,E[X]=et),et.getGripSpace()},this.getHand=function(X){let et=E[X];return et===void 0&&(et=new Ga,E[X]=et),et.getHandSpace()};function H(X){const et=y.indexOf(X.inputSource);if(et===-1)return;const St=E[et];St!==void 0&&(St.update(X.inputSource,X.frame,c||s),St.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<E.length;X++){const et=y[X];et!==null&&(y[X]=null,E[X].disconnect(et))}w=null,z=null,x.reset(),t.setRenderTarget(p),m=null,h=null,d=null,r=null,b=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new cr(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,St=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?jr:Vr,St=g.stencil?Zr:lr);const It={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:o};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(It),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new cr(h.textureWidth,h.textureHeight,{format:Sn,type:ci,depthTexture:new Zf(h.textureWidth,h.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let et=0;et<X.removed.length;et++){const St=X.removed[et],at=y.indexOf(St);at>=0&&(y[at]=null,E[at].disconnect(St))}for(let et=0;et<X.added.length;et++){const St=X.added[et];let at=y.indexOf(St);if(at===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=y.length){y.push(St),at=Ot;break}else if(y[Ot]===null){y[Ot]=St,at=Ot;break}if(at===-1)break}const It=E[at];It&&It.connect(St)}}const q=new N,j=new N;function k(X,et,St){q.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(St.matrixWorld);const at=q.distanceTo(j),It=et.projectionMatrix.elements,Ot=St.projectionMatrix.elements,Ht=It[14]/(It[10]-1),ue=It[14]/(It[10]+1),Yt=(It[9]+1)/It[5],me=(It[9]-1)/It[5],O=(It[8]-1)/It[0],tn=(Ot[8]+1)/Ot[0],Wt=Ht*O,Xt=Ht*tn,Rt=at/(-O+tn),se=Rt*-O;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(se),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),It[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Ht+Rt,A=ue+Rt,v=Wt-se,F=Xt+(at-se),Y=Yt*ue/A*bt,J=me*ue/A*bt;X.projectionMatrix.makePerspective(v,F,Y,J,bt,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let et=X.near,St=X.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(St=x.depthFar)),M.near=D.near=R.near=et,M.far=D.far=R.far=St,(w!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,z=M.far),R.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const at=X.parent,It=M.cameras;it(M,at);for(let Ot=0;Ot<It.length;Ot++)it(It[Ot],at);It.length===2?k(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),dt(X,M,at)};function dt(X,et,St){St===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ko*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let yt=null;function Gt(X,et){if(f=et.getViewerPose(c||s),_=et,f!==null){const St=f.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let at=!1;St.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Ot=0;Ot<St.length;Ot++){const Ht=St[Ot];let ue=null;if(m!==null)ue=m.getViewport(Ht);else{const me=d.getViewSubImage(h,Ht);ue=me.viewport,Ot===0&&(t.setRenderTargetTextures(b,me.colorTexture,h.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let Yt=T[Ot];Yt===void 0&&(Yt=new on,Yt.layers.enable(Ot),Yt.viewport=new he,T[Ot]=Yt),Yt.matrix.fromArray(Ht.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Ht.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ue.x,ue.y,ue.width,ue.height),Ot===0&&(M.matrix.copy(Yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Yt)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")){const Ot=d.getDepthInformation(St[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,r.renderState)}}for(let St=0;St<E.length;St++){const at=y[St],It=E[St];at!==null&&It!==void 0&&It.update(at,et,c||s)}yt&&yt(X,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const ne=new Kf;ne.setAnimationLoop(Gt),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}}const Wi=new Hn,nx=new ce;function ix(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Xf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),f(g,p)):p.isMeshStandardMaterial?(o(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),x(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ve&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ve&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p),E=b.envMap,y=b.envMapRotation;E&&(g.envMap.value=E,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),g.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(Wi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rx(n,t,e,i){let r={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const y=E.program;i.uniformBlockBinding(b,y)}function c(b,E){let y=r[b.id];y===void 0&&(_(b),y=f(b),r[b.id]=y,b.addEventListener("dispose",g));const U=E.program;i.updateUBOMapping(b,U);const C=t.render.frame;o[b.id]!==C&&(h(b),o[b.id]=C)}function f(b){const E=d();b.__bindingPointIndex=E;const y=n.createBuffer(),U=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const E=r[b.id],y=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,R=y.length;C<R;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,M=D.length;T<M;T++){const w=D[T];if(m(w,C,T,U)===!0){const z=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let Z=0;Z<H.length;Z++){const q=H[Z],j=x(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,z+$,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,E,y,U){const C=b.value,R=E+"_"+y;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const D=U[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return U[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(b){const E=b.uniforms;let y=0;const U=16;for(let R=0,D=E.length;R<D;R++){const T=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,w=T.length;M<w;M++){const z=T[M],H=Array.isArray(z.value)?z.value:[z.value];for(let $=0,Z=H.length;$<Z;$++){const q=H[$],j=x(q),k=y%U,it=k%j.boundary,dt=k+it;y+=it,dt!==0&&U-dt<j.storage&&(y+=U-dt),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=j.storage}}}const C=y%U;return C>0&&(y+=U-C),b.__size=y,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const y=s.indexOf(E.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class ox{constructor(t={}){const{canvas:e=Yh(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Ii,this.toneMappingExposure=1;const y=this;let U=!1,C=0,R=0,D=null,T=-1,M=null;const w=new he,z=new he;let H=null;const $=new wt(0);let Z=0,q=e.width,j=e.height,k=1,it=null,dt=null;const yt=new he(0,0,q,j),Gt=new he(0,0,q,j);let ne=!1;const X=new Tc;let et=!1,St=!1;const at=new ce,It=new ce,Ot=new N,Ht=new he,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function me(){return D===null?k:1}let O=i;function tn(S,P){return e.getContext(S,P)}try{const S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){const P="webgl2";if(O=tn(P,S),O===null)throw tn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Wt,Xt,Rt,se,bt,A,v,F,Y,J,W,Mt,lt,pt,Kt,Q,mt,Ct,Pt,gt,qt,Ft,re,I;function st(){Wt=new ug(O),Wt.init(),Ft=new $_(O,Wt),Xt=new rg(O,Wt,t,Ft),Rt=new q_(O,Wt),Xt.reverseDepthBuffer&&h&&Rt.buffers.depth.setReversed(!0),se=new hg(O),bt=new P_,A=new K_(O,Wt,Rt,bt,Xt,Ft,se),v=new sg(y),F=new cg(y),Y=new Sp(O),re=new ng(O,Y),J=new fg(O,Y,se,re),W=new mg(O,J,Y,se),Pt=new pg(O,Xt,A),Q=new og(bt),Mt=new I_(y,v,F,Wt,Xt,re,Q),lt=new ix(y,bt),pt=new O_,Kt=new G_(Wt),Ct=new eg(y,v,F,Rt,W,m,l),mt=new W_(y,W,Xt),I=new rx(O,se,Xt,Rt),gt=new ig(O,Wt,se),qt=new dg(O,Wt,se),se.programs=Mt.programs,y.capabilities=Xt,y.extensions=Wt,y.properties=bt,y.renderLists=pt,y.shadowMap=mt,y.state=Rt,y.info=se}st();const V=new ex(y,O);this.xr=V,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=Wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(q,j,!1))},this.getSize=function(S){return S.set(q,j)},this.setSize=function(S,P,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,j=P,e.width=Math.floor(S*k),e.height=Math.floor(P*k),B===!0&&(e.style.width=S+"px",e.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(q*k,j*k).floor()},this.setDrawingBufferSize=function(S,P,B){q=S,j=P,k=B,e.width=Math.floor(S*B),e.height=Math.floor(P*B),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(yt)},this.setViewport=function(S,P,B,G){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,P,B,G),Rt.viewport(w.copy(yt).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,P,B,G){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,P,B,G),Rt.scissor(z.copy(Gt).multiplyScalar(k).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){Rt.setScissorTest(ne=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){dt=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,P=!0,B=!0){let G=0;if(S){let L=!1;if(D!==null){const tt=D.texture.format;L=tt===Mc||tt===Sc||tt===vc}if(L){const tt=D.texture.type,ut=tt===ci||tt===lr||tt===Ho||tt===Zr||tt===_c||tt===xc,_t=Ct.getClearColor(),xt=Ct.getClearAlpha(),Lt=_t.r,Dt=_t.g,vt=_t.b;ut?(_[0]=Lt,_[1]=Dt,_[2]=vt,_[3]=xt,O.clearBufferuiv(O.COLOR,0,_)):(x[0]=Lt,x[1]=Dt,x[2]=vt,x[3]=xt,O.clearBufferiv(O.COLOR,0,x))}else G|=O.COLOR_BUFFER_BIT}P&&(G|=O.DEPTH_BUFFER_BIT),B&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),Kt.dispose(),bt.dispose(),v.dispose(),F.dispose(),W.dispose(),re.dispose(),I.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Fc),V.removeEventListener("sessionend",Bc),Bi.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=se.autoReset,P=mt.enabled,B=mt.autoUpdate,G=mt.needsUpdate,L=mt.type;st(),se.autoReset=S,mt.enabled=P,mt.autoUpdate=B,mt.needsUpdate=G,mt.type=L}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){const P=S.target;P.removeEventListener("dispose",Nt),de(P)}function de(S){Re(S),bt.remove(S)}function Re(S){const P=bt.get(S).programs;P!==void 0&&(P.forEach(function(B){Mt.releaseProgram(B)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,B,G,L,tt){P===null&&(P=ue);const ut=L.isMesh&&L.matrixWorld.determinant()<0,_t=Gd(S,P,B,G,L);Rt.setMaterial(G,ut);let xt=B.index,Lt=1;if(G.wireframe===!0){if(xt=J.getWireframeAttribute(B),xt===void 0)return;Lt=2}const Dt=B.drawRange,vt=B.attributes.position;let Zt=Dt.start*Lt,oe=(Dt.start+Dt.count)*Lt;tt!==null&&(Zt=Math.max(Zt,tt.start*Lt),oe=Math.min(oe,(tt.start+tt.count)*Lt)),xt!==null?(Zt=Math.max(Zt,0),oe=Math.min(oe,xt.count)):vt!=null&&(Zt=Math.max(Zt,0),oe=Math.min(oe,vt.count));const ae=oe-Zt;if(ae<0||ae===1/0)return;re.setup(L,G,_t,B,xt);let Fe,jt=gt;if(xt!==null&&(Fe=Y.get(xt),jt=qt,jt.setIndex(Fe)),L.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*me()),jt.setMode(O.LINES)):jt.setMode(O.TRIANGLES);else if(L.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*me()),L.isLineSegments?jt.setMode(O.LINES):L.isLineLoop?jt.setMode(O.LINE_LOOP):jt.setMode(O.LINE_STRIP)}else L.isPoints?jt.setMode(O.POINTS):L.isSprite&&jt.setMode(O.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)jt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))jt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Et=L._multiDrawStarts,Vn=L._multiDrawCounts,Jt=L._multiDrawCount,hn=xt?Y.get(xt).bytesPerElement:1,mr=bt.get(G).currentProgram.getUniforms();for(let We=0;We<Jt;We++)mr.setValue(O,"_gl_DrawID",We),jt.render(Et[We]/hn,Vn[We])}else if(L.isInstancedMesh)jt.renderInstances(Zt,ae,L.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Vn=Math.min(B.instanceCount,Et);jt.renderInstances(Zt,ae,Vn)}else jt.render(Zt,ae)};function te(S,P,B){S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=Ve,S.needsUpdate=!0,Jo(S,P,B),S.side=Ni,S.needsUpdate=!0,Jo(S,P,B),S.side=Nn):Jo(S,P,B)}this.compile=function(S,P,B=null){B===null&&(B=S),p=Kt.get(B),p.init(P),E.push(p),B.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),S!==B&&S.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const G=new Set;return S.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const tt=L.material;if(tt)if(Array.isArray(tt))for(let ut=0;ut<tt.length;ut++){const _t=tt[ut];te(_t,B,L),G.add(_t)}else te(tt,B,L),G.add(tt)}),E.pop(),p=null,G},this.compileAsync=function(S,P,B=null){const G=this.compile(S,P,B);return new Promise(L=>{function tt(){if(G.forEach(function(ut){bt.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){L(S);return}setTimeout(tt,10)}Wt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let dn=null;function kn(S){dn&&dn(S)}function Fc(){Bi.stop()}function Bc(){Bi.start()}const Bi=new Kf;Bi.setAnimationLoop(kn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(S){dn=S,V.setAnimationLoop(S),S===null?Bi.stop():Bi.start()},V.addEventListener("sessionstart",Fc),V.addEventListener("sessionend",Bc),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,P,D),p=Kt.get(S,E.length),p.init(P),E.push(p),It.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(It),St=this.localClippingEnabled,et=Q.init(this.clippingPlanes,St),g=pt.get(S,b.length),g.init(),b.push(g),V.enabled===!0&&V.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&fa(tt,P,-1/0,y.sortObjects)}fa(S,P,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(it,dt),Yt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Yt&&Ct.addToRenderList(g,S),this.info.render.frame++,et===!0&&Q.beginShadows();const B=p.state.shadowsArray;mt.render(B,S,P),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,L=g.transmissive;if(p.setupLights(),P.isArrayCamera){const tt=P.cameras;if(L.length>0)for(let ut=0,_t=tt.length;ut<_t;ut++){const xt=tt[ut];Hc(G,L,S,xt)}Yt&&Ct.render(S);for(let ut=0,_t=tt.length;ut<_t;ut++){const xt=tt[ut];Gc(g,S,xt,xt.viewport)}}else L.length>0&&Hc(G,L,S,P),Yt&&Ct.render(S),Gc(g,S,P);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(y,S,P),re.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function fa(S,P,B,G){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){G&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(It);const ut=W.update(S),_t=S.material;_t.visible&&g.push(S,ut,_t,B,Ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const ut=W.update(S),_t=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ht.copy(ut.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(It)),Array.isArray(_t)){const xt=ut.groups;for(let Lt=0,Dt=xt.length;Lt<Dt;Lt++){const vt=xt[Lt],Zt=_t[vt.materialIndex];Zt&&Zt.visible&&g.push(S,ut,Zt,B,Ht.z,vt)}}else _t.visible&&g.push(S,ut,_t,B,Ht.z,null)}}const tt=S.children;for(let ut=0,_t=tt.length;ut<_t;ut++)fa(tt[ut],P,B,G)}function Gc(S,P,B,G){const L=S.opaque,tt=S.transmissive,ut=S.transparent;p.setupLightsView(B),et===!0&&Q.setGlobalState(y.clippingPlanes,B),G&&Rt.viewport(w.copy(G)),L.length>0&&jo(L,P,B),tt.length>0&&jo(tt,P,B),ut.length>0&&jo(ut,P,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Hc(S,P,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new cr(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Wo:ci,minFilter:nr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const tt=p.state.transmissionRenderTarget[G.id],ut=G.viewport||w;tt.setSize(ut.z,ut.w);const _t=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor($),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&Ct.render(B);const xt=y.toneMapping;y.toneMapping=Ii;const Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),et===!0&&Q.setGlobalState(y.clippingPlanes,G),jo(S,B,G),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,Zt=P.length;vt<Zt;vt++){const oe=P[vt],ae=oe.object,Fe=oe.geometry,jt=oe.material,Et=oe.group;if(jt.side===Nn&&ae.layers.test(G.layers)){const Vn=jt.side;jt.side=Ve,jt.needsUpdate=!0,kc(ae,B,G,Fe,jt,Et),jt.side=Vn,jt.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}y.setRenderTarget(_t),y.setClearColor($,Z),Lt!==void 0&&(G.viewport=Lt),y.toneMapping=xt}function jo(S,P,B){const G=P.isScene===!0?P.overrideMaterial:null;for(let L=0,tt=S.length;L<tt;L++){const ut=S[L],_t=ut.object,xt=ut.geometry,Lt=G===null?ut.material:G,Dt=ut.group;_t.layers.test(B.layers)&&kc(_t,P,B,xt,Lt,Dt)}}function kc(S,P,B,G,L,tt){S.onBeforeRender(y,P,B,G,L,tt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),L.onBeforeRender(y,P,B,G,S,tt),L.transparent===!0&&L.side===Nn&&L.forceSinglePass===!1?(L.side=Ve,L.needsUpdate=!0,y.renderBufferDirect(B,P,G,L,S,tt),L.side=Ni,L.needsUpdate=!0,y.renderBufferDirect(B,P,G,L,S,tt),L.side=Nn):y.renderBufferDirect(B,P,G,L,S,tt),S.onAfterRender(y,P,B,G,L,tt)}function Jo(S,P,B){P.isScene!==!0&&(P=ue);const G=bt.get(S),L=p.state.lights,tt=p.state.shadowsArray,ut=L.state.version,_t=Mt.getParameters(S,L.state,tt,P,B),xt=Mt.getProgramCacheKey(_t);let Lt=G.programs;G.environment=S.isMeshStandardMaterial?P.environment:null,G.fog=P.fog,G.envMap=(S.isMeshStandardMaterial?F:v).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Nt),Lt=new Map,G.programs=Lt);let Dt=Lt.get(xt);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===ut)return zc(S,_t),Dt}else _t.uniforms=Mt.getUniforms(S),S.onBeforeCompile(_t,y),Dt=Mt.acquireProgram(_t,xt),Lt.set(xt,Dt),G.uniforms=_t.uniforms;const vt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(vt.clippingPlanes=Q.uniform),zc(S,_t),G.needsLights=kd(S),G.lightsStateVersion=ut,G.needsLights&&(vt.ambientLightColor.value=L.state.ambient,vt.lightProbe.value=L.state.probe,vt.directionalLights.value=L.state.directional,vt.directionalLightShadows.value=L.state.directionalShadow,vt.spotLights.value=L.state.spot,vt.spotLightShadows.value=L.state.spotShadow,vt.rectAreaLights.value=L.state.rectArea,vt.ltc_1.value=L.state.rectAreaLTC1,vt.ltc_2.value=L.state.rectAreaLTC2,vt.pointLights.value=L.state.point,vt.pointLightShadows.value=L.state.pointShadow,vt.hemisphereLights.value=L.state.hemi,vt.directionalShadowMap.value=L.state.directionalShadowMap,vt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,vt.spotShadowMap.value=L.state.spotShadowMap,vt.spotLightMatrix.value=L.state.spotLightMatrix,vt.spotLightMap.value=L.state.spotLightMap,vt.pointShadowMap.value=L.state.pointShadowMap,vt.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function Vc(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=Fs.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function zc(S,P){const B=bt.get(S);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function Gd(S,P,B,G,L){P.isScene!==!0&&(P=ue),A.resetTextureUnits();const tt=P.fog,ut=G.isMeshStandardMaterial?P.environment:null,_t=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:io,xt=(G.isMeshStandardMaterial?F:v).get(G.envMap||ut),Lt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),vt=!!B.morphAttributes.position,Zt=!!B.morphAttributes.normal,oe=!!B.morphAttributes.color;let ae=Ii;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ae=y.toneMapping);const Fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,jt=Fe!==void 0?Fe.length:0,Et=bt.get(G),Vn=p.state.lights;if(et===!0&&(St===!0||S!==M)){const en=S===M&&G.id===T;Q.setState(G,S,en)}let Jt=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Vn.state.version||Et.outputColorSpace!==_t||L.isBatchedMesh&&Et.batching===!1||!L.isBatchedMesh&&Et.batching===!0||L.isBatchedMesh&&Et.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Et.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Et.instancing===!1||!L.isInstancedMesh&&Et.instancing===!0||L.isSkinnedMesh&&Et.skinning===!1||!L.isSkinnedMesh&&Et.skinning===!0||L.isInstancedMesh&&Et.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Et.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Et.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Et.instancingMorph===!1&&L.morphTexture!==null||Et.envMap!==xt||G.fog===!0&&Et.fog!==tt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Q.numPlanes||Et.numIntersection!==Q.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Dt||Et.morphTargets!==vt||Et.morphNormals!==Zt||Et.morphColors!==oe||Et.toneMapping!==ae||Et.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Et.__version=G.version);let hn=Et.currentProgram;Jt===!0&&(hn=Jo(G,P,L));let mr=!1,We=!1,uo=!1;const le=hn.getUniforms(),En=Et.uniforms;if(Rt.useProgram(hn.program)&&(mr=!0,We=!0,uo=!0),G.id!==T&&(T=G.id,We=!0),mr||M!==S){Rt.buffers.depth.getReversed()?(at.copy(S.projectionMatrix),$h(at),Zh(at),le.setValue(O,"projectionMatrix",at)):le.setValue(O,"projectionMatrix",S.projectionMatrix),le.setValue(O,"viewMatrix",S.matrixWorldInverse);const fi=le.map.cameraPosition;fi!==void 0&&fi.setValue(O,Ot.setFromMatrixPosition(S.matrixWorld)),Xt.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,We=!0,uo=!0)}if(L.isSkinnedMesh){le.setOptional(O,L,"bindMatrix"),le.setOptional(O,L,"bindMatrixInverse");const en=L.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),le.setValue(O,"boneTexture",en.boneTexture,A))}L.isBatchedMesh&&(le.setOptional(O,L,"batchingTexture"),le.setValue(O,"batchingTexture",L._matricesTexture,A),le.setOptional(O,L,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",L._indirectTexture,A),le.setOptional(O,L,"batchingColorTexture"),L._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",L._colorsTexture,A));const fo=B.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0)&&Pt.update(L,B,hn),(We||Et.receiveShadow!==L.receiveShadow)&&(Et.receiveShadow=L.receiveShadow,le.setValue(O,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(En.envMap.value=xt,En.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&P.environment!==null&&(En.envMapIntensity.value=P.environmentIntensity),We&&(le.setValue(O,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&Hd(En,uo),tt&&G.fog===!0&&lt.refreshFogUniforms(En,tt),lt.refreshMaterialUniforms(En,G,k,j,p.state.transmissionRenderTarget[S.id]),Fs.upload(O,Vc(Et),En,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fs.upload(O,Vc(Et),En,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(O,"center",L.center),le.setValue(O,"modelViewMatrix",L.modelViewMatrix),le.setValue(O,"normalMatrix",L.normalMatrix),le.setValue(O,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const en=G.uniformsGroups;for(let fi=0,di=en.length;fi<di;fi++){const Wc=en[fi];I.update(Wc,hn),I.bind(Wc,hn)}}return hn}function Hd(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function kd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,P,B){bt.get(S.texture).__webglTexture=P,bt.get(S.depthTexture).__webglTexture=B;const G=bt.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,P){const B=bt.get(S);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,B=0){D=S,C=P,R=B;let G=!0,L=null,tt=!1,ut=!1;if(S){const xt=bt.get(S);if(xt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(xt.__hasExternalTextures)A.rebindTextures(S,bt.get(S.texture).__webglTexture,bt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const vt=S.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&bt.has(vt)&&(S.width!==vt.image.width||S.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ut=!0);const Dt=bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[P])?L=Dt[P][B]:L=Dt[P],tt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?L=bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?L=Dt[B]:L=Dt,w.copy(S.viewport),z.copy(S.scissor),H=S.scissorTest}else w.copy(yt).multiplyScalar(k).floor(),z.copy(Gt).multiplyScalar(k).floor(),H=ne;if(Rt.bindFramebuffer(O.FRAMEBUFFER,L)&&G&&Rt.drawBuffers(S,L),Rt.viewport(w),Rt.scissor(z),Rt.setScissorTest(H),tt){const xt=bt.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+P,xt.__webglTexture,B)}else if(ut){const xt=bt.get(S.texture),Lt=P||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Lt)}T=-1},this.readRenderTargetPixels=function(S,P,B,G,L,tt,ut){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){Rt.bindFramebuffer(O.FRAMEBUFFER,_t);try{const xt=S.texture,Lt=xt.format,Dt=xt.type;if(!Xt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-G&&B>=0&&B<=S.height-L&&O.readPixels(P,B,G,L,Ft.convert(Lt),Ft.convert(Dt),tt)}finally{const xt=D!==null?bt.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,P,B,G,L,tt,ut){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){const xt=S.texture,Lt=xt.format,Dt=xt.type;if(!Xt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=S.width-G&&B>=0&&B<=S.height-L){Rt.bindFramebuffer(O.FRAMEBUFFER,_t);const vt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,vt),O.bufferData(O.PIXEL_PACK_BUFFER,tt.byteLength,O.STREAM_READ),O.readPixels(P,B,G,L,Ft.convert(Lt),Ft.convert(Dt),0);const Zt=D!==null?bt.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Zt);const oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Kh(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,vt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,tt),O.deleteBuffer(vt),O.deleteSync(oe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,P=null,B=0){S.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-B),L=Math.floor(S.image.width*G),tt=Math.floor(S.image.height*G),ut=P!==null?P.x:0,_t=P!==null?P.y:0;A.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,ut,_t,L,tt),Rt.unbindTexture()},this.copyTextureToTexture=function(S,P,B=null,G=null,L=0){S.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],P=arguments[2],L=arguments[3]||0,B=null);let tt,ut,_t,xt,Lt,Dt,vt,Zt,oe;const ae=S.isCompressedTexture?S.mipmaps[L]:S.image;B!==null?(tt=B.max.x-B.min.x,ut=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,Lt=B.min.y,Dt=B.isBox3?B.min.z:0):(tt=ae.width,ut=ae.height,_t=ae.depth||1,xt=0,Lt=0,Dt=0),G!==null?(vt=G.x,Zt=G.y,oe=G.z):(vt=0,Zt=0,oe=0);const Fe=Ft.convert(P.format),jt=Ft.convert(P.type);let Et;P.isData3DTexture?(A.setTexture3D(P,0),Et=O.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(A.setTexture2DArray(P,0),Et=O.TEXTURE_2D_ARRAY):(A.setTexture2D(P,0),Et=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,P.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,P.unpackAlignment);const Vn=O.getParameter(O.UNPACK_ROW_LENGTH),Jt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),hn=O.getParameter(O.UNPACK_SKIP_PIXELS),mr=O.getParameter(O.UNPACK_SKIP_ROWS),We=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ae.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dt);const uo=S.isDataArrayTexture||S.isData3DTexture,le=P.isDataArrayTexture||P.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const En=bt.get(S),fo=bt.get(P),en=bt.get(En.__renderTarget),fi=bt.get(fo.__renderTarget);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let di=0;di<_t;di++)uo&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(S).__webglTexture,L,Dt+di),S.isDepthTexture?(le&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(P).__webglTexture,L,oe+di),O.blitFramebuffer(xt,Lt,tt,ut,vt,Zt,tt,ut,O.DEPTH_BUFFER_BIT,O.NEAREST)):le?O.copyTexSubImage3D(Et,L,vt,Zt,oe+di,xt,Lt,tt,ut):O.copyTexSubImage2D(Et,L,vt,Zt,oe+di,xt,Lt,tt,ut);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Et,L,vt,Zt,oe,tt,ut,_t,Fe,jt,ae.data):P.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,L,vt,Zt,oe,tt,ut,_t,Fe,ae.data):O.texSubImage3D(Et,L,vt,Zt,oe,tt,ut,_t,Fe,jt,ae):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,L,vt,Zt,tt,ut,Fe,jt,ae.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,L,vt,Zt,ae.width,ae.height,Fe,ae.data):O.texSubImage2D(O.TEXTURE_2D,L,vt,Zt,tt,ut,Fe,jt,ae);O.pixelStorei(O.UNPACK_ROW_LENGTH,Vn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Jt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,hn),O.pixelStorei(O.UNPACK_SKIP_ROWS,mr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,We),L===0&&P.generateMipmaps&&O.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(S,P,B=null,G=null,L=0){return S.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,S=arguments[2],P=arguments[3],L=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,P,B,G,L)},this.initRenderTarget=function(S){bt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Rt.unbindTexture()},this.resetState=function(){C=0,R=0,D=null,Rt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class bc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=i}clone(){return new bc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sx extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ed extends pr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zs=new N,Ws=new N,Wu=new ce,_o=new yc,Ss=new Yo,Ha=new N,Xu=new N;class ax extends xe{constructor(t=new fn,e=new ed){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)zs.fromBufferAttribute(e,r-1),Ws.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=zs.distanceTo(Ws);t.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(r),Ss.radius+=o,t.ray.intersectsSphere(Ss)===!1)return;Wu.copy(r).invert(),_o.copy(t.ray).applyMatrix4(Wu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let x=m,g=_-1;x<g;x+=c){const p=f.getX(x),b=f.getX(x+1),E=Ms(this,t,_o,l,p,b);E&&e.push(E)}if(this.isLineLoop){const x=f.getX(_-1),g=f.getX(m),p=Ms(this,t,_o,l,x,g);p&&e.push(p)}}else{const m=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let x=m,g=_-1;x<g;x+=c){const p=Ms(this,t,_o,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Ms(this,t,_o,l,_-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ms(n,t,e,i,r,o){const s=n.geometry.attributes.position;if(zs.fromBufferAttribute(s,r),Ws.fromBufferAttribute(s,o),e.distanceSqToSegment(zs,Ws,Ha,Xu)>i)return;Ha.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ha);if(!(l<t.near||l>t.far))return{distance:l,point:Xu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const qu=new N,Yu=new N;class lx extends ax{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)qu.fromBufferAttribute(e,r),Yu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qu.distanceTo(Yu);t.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nd extends pr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ku=new ce,jl=new yc,Es=new Yo,ys=new N;class cx extends xe{constructor(t=new fn,e=new nd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(r),Es.radius+=o,t.ray.intersectsSphere(Es)===!1)return;Ku.copy(r).invert(),jl.copy(t.ray).applyMatrix4(Ku);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let _=h,x=m;_<x;_++){const g=c.getX(_);ys.fromBufferAttribute(d,g),$u(ys,g,l,r,t,e,this)}}else{const h=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let _=h,x=m;_<x;_++)ys.fromBufferAttribute(d,_),$u(ys,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function $u(n,t,e,i,r,o,s){const a=jl.distanceSqToPoint(n);if(a<e){const l=new N;jl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class ux extends Ue{constructor(t,e,i,r,o,s,a,l,c){super(t,e,i,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ts=new N,As=new N,ka=new N,bs=new an;class fx extends fn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),o=Math.cos(zr*e),s=t.getIndex(),a=t.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},m=[];for(let _=0;_<l;_+=3){s?(c[0]=s.getX(_),c[1]=s.getX(_+1),c[2]=s.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:g,c:p}=bs;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),bs.getNormal(ka),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const E=(b+1)%3,y=d[b],U=d[E],C=bs[f[b]],R=bs[f[E]],D=`${y}_${U}`,T=`${U}_${y}`;T in h&&h[T]?(ka.dot(h[T].normal)<=o&&(m.push(C.x,C.y,C.z),m.push(R.x,R.y,R.z)),h[T]=null):D in h||(h[D]={index0:c[b],index1:c[E],normal:ka.clone()})}}for(const _ in h)if(h[_]){const{index0:x,index1:g}=h[_];Ts.fromBufferAttribute(a,x),As.fromBufferAttribute(a,g),m.push(Ts.x,Ts.y,Ts.z),m.push(As.x,As.y,As.z)}this.setAttribute("position",new Qe(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Vt extends pr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uf,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rc extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dx extends Rc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Va=new ce,Zu=new N,ju=new N;class hx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class px extends hx{constructor(){super(new $f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mx extends Rc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new px}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gx extends Rc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);let Ir=null;function be(){if(!Ir){const n=window.AudioContext||window.webkitAudioContext;n&&(Ir=new n)}return Ir&&Ir.state==="suspended"&&Ir.resume(),Ir}if(typeof window<"u"){const n=()=>{be(),window.removeEventListener("click",n),window.removeEventListener("keydown",n)};window.addEventListener("click",n),window.addEventListener("keydown",n)}function id(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="triangle",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(320,t+.12),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.01,t+.12),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.12)}function _x(n){const t=be();if(!t)return;const e=t.currentTime,i=t.createOscillator(),r=t.createGain();i.type="sine",n?(i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(750,e+.18)):(i.frequency.setValueAtTime(600,e),i.frequency.exponentialRampToValueAtTime(200,e+.18)),r.gain.setValueAtTime(.22,e),r.gain.exponentialRampToValueAtTime(.01,e+.2),i.connect(r),r.connect(t.destination),i.start(e),i.stop(e+.2)}function xx(){const n=be();if(!n)return;const t=n.currentTime,e=n.sampleRate*.08,i=n.createBuffer(1,e,n.sampleRate),r=i.getChannelData(0);for(let l=0;l<e;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/(e*.3));const o=n.createBufferSource();o.buffer=i;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,t),s.frequency.exponentialRampToValueAtTime(150,t+.08);const a=n.createGain();a.gain.setValueAtTime(.35,t),a.gain.exponentialRampToValueAtTime(.01,t+.08),o.connect(s),s.connect(a),a.connect(n.destination),o.start(t)}function Ju(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="sine",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(80,t+.07),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.01,t+.07),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.07)}function vx(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="sawtooth",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(60,t+.15),i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.01,t+.15),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.15)}function rd(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="sine",e.frequency.setValueAtTime(450,t),e.frequency.exponentialRampToValueAtTime(120,t+.1),i.gain.setValueAtTime(.25,t),i.gain.exponentialRampToValueAtTime(.01,t+.1),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.1)}function Sx(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="triangle",e.frequency.setValueAtTime(280,t),e.frequency.exponentialRampToValueAtTime(80,t+.14),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.01,t+.14),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.14)}function Ui(n=!0){const t=be();if(!t)return;const e=t.currentTime,i=t.createOscillator(),r=t.createGain();i.type="sine",n?(i.frequency.setValueAtTime(260,e),i.frequency.exponentialRampToValueAtTime(420,e+.08)):(i.frequency.setValueAtTime(420,e),i.frequency.exponentialRampToValueAtTime(260,e+.08)),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.01,e+.08),i.connect(r),r.connect(t.destination),i.start(e),i.stop(e+.08)}function Mx(n=1){const t=be();if(!t)return;const e=t.currentTime,i=Math.floor(t.sampleRate*.04),r=t.createBuffer(1,i,t.sampleRate),o=r.getChannelData(0);for(let d=0;d<i;d++)o[d]=(Math.random()*2-1)*Math.exp(-d/(i*.25));const s=t.createBufferSource();s.buffer=r;const a=t.createBiquadFilter();a.type="lowpass";let l=380,c=.06;n===3||n===8||n===9||n===13?(l=650,c=.07):n===4?(l=300,c=.05):n===5?(l=400,c=.06):(n===6||n===12||n===16)&&(l=480,c=.06),a.frequency.setValueAtTime(l,e);const f=t.createGain();f.gain.setValueAtTime(c,e),f.gain.exponentialRampToValueAtTime(1e-4,e+.04),s.connect(a),a.connect(f),f.connect(t.destination),s.start(e)}function Ex(n=1){const t=be();if(!t)return;const e=t.currentTime,i=t.createOscillator(),r=t.createGain();i.type="triangle";const o=n===3||n===8||n===9||n===13?280:180;i.frequency.setValueAtTime(o,e),i.frequency.exponentialRampToValueAtTime(60,e+.03),r.gain.setValueAtTime(.06,e),r.gain.exponentialRampToValueAtTime(.001,e+.03),i.connect(r),r.connect(t.destination),i.start(e),i.stop(e+.03)}function yx(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="sine",e.frequency.setValueAtTime(440,t),e.frequency.exponentialRampToValueAtTime(880,t+.09),i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(.01,t+.09),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.09)}function ur(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createOscillator(),r=n.createGain();e.type="triangle",i.type="sine",e.frequency.setValueAtTime(523.25,t),e.frequency.setValueAtTime(659.25,t+.07),i.frequency.setValueAtTime(783.99,t+.07),r.gain.setValueAtTime(.25,t),r.gain.exponentialRampToValueAtTime(.01,t+.22),e.connect(r),i.connect(r),r.connect(n.destination),e.start(t),i.start(t+.07),e.stop(t+.22),i.stop(t+.22)}function Tx(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="sawtooth",e.frequency.setValueAtTime(550,t),e.frequency.exponentialRampToValueAtTime(160,t+.14),i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.01,t+.14),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.14)}function od(){const n=be();if(!n)return;const t=n.currentTime,e=Math.floor(n.sampleRate*.45),i=n.createBuffer(1,e,n.sampleRate),r=i.getChannelData(0);for(let l=0;l<e;l++)r[l]=(Math.random()*2-1)*.7;const o=n.createBufferSource();o.buffer=i;const s=n.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(3200,t),s.Q.setValueAtTime(4,t);const a=n.createGain();a.gain.setValueAtTime(.25,t),a.gain.exponentialRampToValueAtTime(.01,t+.45),o.connect(s),s.connect(a),a.connect(n.destination),o.start(t)}function Ax(){const n=be();if(!n)return;const t=n.currentTime,e=Math.floor(n.sampleRate*.85),i=n.createBuffer(1,e,n.sampleRate),r=i.getChannelData(0);for(let f=0;f<e;f++)r[f]=(Math.random()*2-1)*Math.exp(-f/(e*.4));const o=n.createBufferSource();o.buffer=i;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,t),s.frequency.exponentialRampToValueAtTime(40,t+.85);const a=n.createGain();a.gain.setValueAtTime(.7,t),a.gain.exponentialRampToValueAtTime(.001,t+.85),o.connect(s),s.connect(a),a.connect(n.destination),o.start(t);const l=n.createOscillator(),c=n.createGain();l.type="sine",l.frequency.setValueAtTime(120,t),l.frequency.exponentialRampToValueAtTime(25,t+.5),c.gain.setValueAtTime(.6,t),c.gain.exponentialRampToValueAtTime(.01,t+.5),l.connect(c),c.connect(n.destination),l.start(t),l.stop(t+.5)}function bx(){const n=be();if(!n)return;const t=n.currentTime,e=n.createOscillator(),i=n.createGain();e.type="triangle",e.frequency.setValueAtTime(280,t),e.frequency.exponentialRampToValueAtTime(90,t+.08),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.01,t+.08),e.connect(i),i.connect(n.destination),e.start(t),e.stop(t+.08)}const ke={TITLE_SCREEN:"title_screen",PLAYING:"playing",PAUSED:"paused"},pe={NONE:"none",INVENTORY:"inventory",CRAFTING_TABLE:"crafting_table",FURNACE:"furnace",CHEST:"chest",RECIPE_BOOK:"recipe_book",CONTROLS:"controls",SETTINGS:"settings"};let ao=ke.TITLE_SCREEN,Qr=pe.NONE,Vo=null;function Rx(n){Vo=n}function Ao(){return ao}function oa(n){ao=n}function wx(){return ao===ke.TITLE_SCREEN}function Cx(){return ao===ke.PAUSED}function sd(n){return Qr===n}function Uo(){return Qr!==pe.NONE}function lo(n){Qr=n,document.pointerLockElement&&document.exitPointerLock()}function ri(n=null){n&&Qr!==n||(Qr=pe.NONE,ao===ke.PLAYING&&Vo&&Vo.requestPointerLock())}function Ix(){Qr=pe.NONE,ao===ke.PLAYING&&Vo&&Vo.requestPointerLock()}let Be=null,Ye=null,Fr=null,Jl=!1;const Ei={renderDistance:5,fov:75,mouseSensitivity:1};function Px(n){Fr=n||document.querySelector("canvas"),Rx(Fr),document.getElementById("title-screen"),document.getElementById("pause-menu"),Be=document.getElementById("modal-controls"),Ye=document.getElementById("modal-settings"),window.startGame=Qu,window.resumeGame=za,window.returnToMainMenu=ef,window.openControls=()=>Pr(Be),window.openSettings=()=>Pr(Ye);const t=["Cavernas 3D & Entradas Naturais!","Fornalha e Fundição de Ferro!","Armaduras, Esqueletos e Aranhas!","Mundo infinito com Biomas!","Construa e explore em 60 FPS!","Receitas reais de sobrevivência!"],e=document.getElementById("splash-text");e&&(e.textContent=t[Math.floor(Math.random()*t.length)]);const i=document.getElementById("btn-play");i&&i.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation();try{id()}catch{}Qu()});const r=document.getElementById("btn-controls");r&&r.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Be)});const o=document.getElementById("btn-settings");o&&o.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Ye)});const s=document.getElementById("btn-close-controls");s&&s.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Be&&(Be.style.display="none"),ri(pe.CONTROLS)});const a=document.getElementById("btn-close-settings");a&&a.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Ye&&(Ye.style.display="none"),ri(pe.SETTINGS)});const l=document.getElementById("btn-resume");l&&l.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),za()});const c=document.getElementById("btn-pause-controls");c&&c.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Be)});const f=document.getElementById("btn-pause-settings")||document.getElementById("btn-pause-options");f&&f.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),Pr(Ye)});const d=document.getElementById("btn-quit-menu")||document.getElementById("btn-exit-main");d&&d.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),ef()});const h=document.getElementById("setting-fov"),m=document.getElementById("fov-val");h&&m&&h.addEventListener("input",E=>{Ei.fov=parseInt(E.target.value,10),m.textContent=`${Ei.fov}°`});const _=document.getElementById("setting-distance"),x=document.getElementById("distance-val");_&&x&&_.addEventListener("input",E=>{Ei.renderDistance=parseInt(E.target.value,10),x.textContent=`${Ei.renderDistance} Chunks`});const g=document.getElementById("setting-sens"),p=document.getElementById("sens-val");g&&p&&g.addEventListener("input",E=>{Ei.mouseSensitivity=parseFloat(E.target.value),p.textContent=`${Ei.mouseSensitivity.toFixed(1)}x`}),document.addEventListener("pointerlockchange",()=>{const E=document.pointerLockElement===(Fr||document.querySelector("canvas"));Jl&&!E&&Ao()===ke.PLAYING&&!Uo()&&tf(),Jl=E}),window.addEventListener("keydown",E=>{if(E.code==="Escape"){if(Be&&Be.style.display==="flex"){Be.style.display="none",ri(pe.CONTROLS);return}if(Ye&&Ye.style.display==="flex"){Ye.style.display="none",ri(pe.SETTINGS);return}if(Uo()){Ix();return}Ao()===ke.PLAYING?(document.exitPointerLock(),tf()):Ao()===ke.PAUSED&&za()}});const b=Fr||document.querySelector("canvas");b&&b.addEventListener("click",()=>{if(Ao()===ke.PLAYING&&!Uo()&&!document.pointerLockElement)try{b.requestPointerLock()}catch{}})}function Pr(n){n&&(n.style.display="flex",lo(n===Be?pe.CONTROLS:pe.SETTINGS))}function Qu(){oa(ke.PLAYING);const n=document.getElementById("title-screen");n&&(n.style.display="none",n.style.pointerEvents="none",n.style.visibility="hidden",n.style.opacity="0");const t=document.getElementById("pause-menu");t&&(t.style.display="none");const e=document.getElementById("crosshair");e&&(e.style.display="block");const i=document.getElementById("controls-hint");i&&(i.style.display="block");const r=Fr||document.querySelector("canvas");if(r&&typeof r.requestPointerLock=="function")try{const o=r.requestPointerLock();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}}function tf(){if(Ao()===ke.TITLE_SCREEN)return;oa(ke.PAUSED);const n=document.getElementById("pause-menu");n&&(n.style.display="flex");const t=document.getElementById("crosshair");t&&(t.style.display="none");const e=document.getElementById("controls-hint");e&&(e.style.display="none")}function za(){oa(ke.PLAYING);const n=document.getElementById("pause-menu");n&&(n.style.display="none"),Be&&(Be.style.display="none"),Ye&&(Ye.style.display="none");const t=document.getElementById("crosshair");t&&(t.style.display="block");const e=document.getElementById("controls-hint");e&&(e.style.display="block");const i=Fr||document.querySelector("canvas");if(i&&typeof i.requestPointerLock=="function")try{const r=i.requestPointerLock();r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}function ef(){oa(ke.TITLE_SCREEN),Jl=!1;const n=document.getElementById("pause-menu");n&&(n.style.display="none"),Be&&(Be.style.display="none"),Ye&&(Ye.style.display="none");const t=document.getElementById("title-screen");t&&(t.style.display="flex",t.style.pointerEvents="auto",t.style.visibility="visible",t.style.opacity="1");const e=document.getElementById("crosshair");e&&(e.style.display="none");const i=document.getElementById("controls-hint");i&&(i.style.display="none")}const Lx=.0022,nf=1.55;let bi=null,Ql=0,bo=-.15,tc=!1;function Ox(n,t={x:0,y:20,z:0}){return bi=new on(Ei.fov||75,n,.05,500),bi.rotation.order="YXZ",bi.position.set(t.x,t.y,t.z),bi.rotation.set(bo,Ql,0),bi}function Nx(n){document.addEventListener("pointerlockchange",()=>{tc=document.pointerLockElement===n}),document.addEventListener("mousemove",t=>{if(!tc||!bi||Math.abs(t.movementX)>250||Math.abs(t.movementY)>250)return;const e=Lx*(Ei.sensitivity||1);Ql-=t.movementX*e,bo-=t.movementY*e,bo=Math.max(-nf,Math.min(nf,bo)),bi.rotation.set(bo,Ql,0)})}function Ko(){return bi}function co(){return tc}let ad=!1,ec=0,nc=null,ic=null;function ld(n){if(!ad)return;const t=Math.min((n-ec)/1e3,.1);ec=n,nc&&nc(t,n/1e3),ic&&ic(t),requestAnimationFrame(ld)}function Dx(n,t){nc=n,ic=t,ad=!0,ec=performance.now(),requestAnimationFrame(ld)}let rn=null,yi=null;function Ux(){return rn=new ox({antialias:!0}),rn.setSize(window.innerWidth,window.innerHeight),rn.setPixelRatio(Math.min(window.devicePixelRatio,2)),rn.setClearColor(7911912),rn.shadowMap.enabled=!1,document.body.appendChild(rn.domElement),window.addEventListener("resize",()=>{rn.setSize(window.innerWidth,window.innerHeight)}),rn}let rc=null,oc=null,Bs=null;function Fx(){return yi=new sx,rc=new dx(8900331,5596723,.6),yi.add(rc),oc=new gx(16777215,.3),yi.add(oc),Bs=new mx(16774624,1),Bs.position.set(80,120,50),yi.add(Bs),yi.fog=new bc(7911912,50,160),yi}function Bx(){return{hemiLight:rc,ambientLight:oc,dirLight:Bs}}function Gx(n){rn&&yi&&n&&rn.render(yi,n)}function cd(){return rn?rn.domElement:null}function Hx(n){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()})}const sr=16;function ze(n){let t=n|0;return()=>(t=t*1103515245+12345&2147483647,t/2147483647)}function kx(n){const t=document.createElement("canvas");t.width=sr,t.height=sr;const e=t.getContext("2d");return n(e,sr),t}function Ie(n,t,e,i,r,o){const s=ze(o);n.fillStyle=e,n.fillRect(0,0,t,t);for(let a=0;a<t;a++)for(let l=0;l<t;l++)if(s()<r){const c=Math.floor(s()*i.length);n.fillStyle=i[c],n.fillRect(l,a,1,1)}}function Vx(n,t){Ie(n,t,"#5ba638",["#4f9430","#6bc043","#458528","#75cc4a"],.4,101);const e=ze(202);for(let i=0;i<2;i++){const r=Math.floor(e()*(t-2))+1,o=Math.floor(e()*(t-2))+1;n.fillStyle="#f6e05e",n.fillRect(r,o,1,1)}}function zx(n,t){Ie(n,t,"#86652d",["#775924","#957134","#664c1e","#a37d3a"],.35,301);const e=ze(302);for(let i=0;i<5;i++)for(let r=0;r<t;r++)i<2?(n.fillStyle=e()>.3?"#5ba638":"#4f9430",n.fillRect(r,i,1,1)):i<3?e()>.35&&(n.fillStyle=e()>.5?"#5ba638":"#4f9430",n.fillRect(r,i,1,1)):i<4&&e()>.65&&(n.fillStyle="#458528",n.fillRect(r,i,1,1))}function Wx(n,t){Ie(n,t,"#86652d",["#775924","#957134","#664c1e","#a37d3a","#584117"],.4,401);const e=ze(402);for(let i=0;i<3;i++){const r=Math.floor(e()*(t-1)),o=Math.floor(e()*(t-1));n.fillStyle="#584117",n.fillRect(r,o,2,1)}}function wc(n,t){Ie(n,t,"#828282",["#737373","#919191","#656565","#9e9e9e","#595959"],.45,501);const e=ze(502);for(let i=0;i<4;i++){const r=Math.floor(e()*(t-3)),o=Math.floor(e()*t);n.fillStyle="#505050",n.fillRect(r,o,2+Math.floor(e()*2),1)}}function Xx(n,t){Ie(n,t,"#e5d38a",["#dac67c","#eedd98","#cfbc6f","#f5e6a4","#c5b161"],.45,601)}function qx(n,t){Ie(n,t,"#f5f7fa",["#e9ecf2","#ffffff","#dfe3ec","#edf0f7"],.35,701);const e=ze(702);for(let i=0;i<3;i++){const r=Math.floor(e()*(t-1)),o=Math.floor(e()*t);n.fillStyle="#cbd5e1",n.fillRect(r,o,2,1)}}function Yx(n,t){Ie(n,t,"#86652d",["#775924","#957134","#664c1e"],.35,1401);const e=ze(1402);for(let i=0;i<4;i++)for(let r=0;r<t;r++)i<2?(n.fillStyle="#f5f7fa",n.fillRect(r,i,1,1)):i<3?e()>.3&&(n.fillStyle="#e9ecf2",n.fillRect(r,i,1,1)):e()>.7&&(n.fillStyle="#dfe3ec",n.fillRect(r,i,1,1))}function Kx(n,t){n.fillStyle="#888888",n.fillRect(0,0,t,t),n.fillStyle="#555555",n.fillRect(0,3,t,1),n.fillRect(0,7,t,1),n.fillRect(0,11,t,1),n.fillRect(0,15,t,1);for(let i=0;i<4;i++){const r=i%2===0?0:8,o=i*4;n.fillRect(r,o,1,4),n.fillRect(r+8,o,1,4)}const e=ze(801);for(let i=0;i<t;i++)for(let r=0;r<t;r++)e()<.2&&(n.fillStyle=e()>.5?"#9e9e9e":"#737373",n.fillRect(r,i,1,1))}function $x(n,t){Ie(n,t,"#6b4524",["#5a391d","#7c512c","#4e3016","#8d5c32"],.35,901);for(let e=0;e<t;e+=3)n.fillStyle="#472c14",n.fillRect(e,0,1,t)}function Zx(n,t){n.fillStyle="#c5a368",n.fillRect(0,0,t,t),n.fillStyle="#6b4524",n.fillRect(0,0,t,2),n.fillRect(0,14,t,2),n.fillRect(0,0,2,t),n.fillRect(14,0,2,t);const e=7.5,i=7.5,r=[2,4,6];n.fillStyle="#9e804f";for(const o of r)for(let s=0;s<t;s++)for(let a=0;a<t;a++){const l=Math.hypot(a-e,s-i);Math.abs(l-o)<.65&&n.fillRect(a,s,1,1)}n.fillStyle="#7a6036",n.fillRect(7,7,2,2)}function jx(n,t){Ie(n,t,"#3c8524",["#2f6d1b","#4fa631","#245614","#5dbd3c","#1b400e"],.5,1001);const e=ze(1002);for(let i=0;i<5;i++){const r=Math.floor(e()*(t-1)),o=Math.floor(e()*(t-1));n.fillStyle="#1b400e",n.fillRect(r,o,1,1)}}function Jx(n,t){wc(n,t);const e=ze(1101);for(let i=0;i<4;i++){const r=2+Math.floor(e()*(t-5)),o=2+Math.floor(e()*(t-5));n.fillStyle="#222222",n.fillRect(r,o,2,2),n.fillStyle="#111111",n.fillRect(r+1,o+1,1,1)}}function Qx(n,t){wc(n,t);const e=ze(1201);for(let i=0;i<4;i++){const r=2+Math.floor(e()*(t-5)),o=2+Math.floor(e()*(t-5));n.fillStyle="#d4a373",n.fillRect(r,o,2,2),n.fillStyle="#faedcd",n.fillRect(r,o,1,1)}}function tv(n,t){Ie(n,t,"#2c75d8",["#2565bf","#3b86e8","#1e52a0","#4a95f5"],.4,1301);const e=ze(1302);for(let i=0;i<3;i++){const r=Math.floor(e()*(t-3)),o=Math.floor(e()*t);n.fillStyle="#8bc3f7",n.fillRect(r,o,3,1)}}function ev(n,t){Ie(n,t,"#15803d",["#166534","#14532d","#22c55e"],.4,1501),n.fillStyle="#14532d",n.fillRect(7,7,2,2)}function nv(n,t){Ie(n,t,"#15803d",["#166534","#15803d","#22c55e","#14532d"],.35,1601);const e=ze(1602);for(let i=0;i<t;i+=4)n.fillStyle="#14532d",n.fillRect(i,0,1,t);for(let i=0;i<6;i++){const r=Math.floor(e()*(t-2))+1,o=Math.floor(e()*(t-2))+1;n.fillStyle="#fef08a",n.fillRect(r,o,1,1)}}function $o(n,t){Ie(n,t,"#b45309",["#92400e","#78350f","#d97706","#a16207"],.35,1701),n.fillStyle="#451a03",n.fillRect(0,3,t,1),n.fillRect(0,7,t,1),n.fillRect(0,11,t,1),n.fillRect(0,15,t,1),n.fillRect(5,0,1,3),n.fillRect(11,4,1,3),n.fillRect(4,8,1,3),n.fillRect(12,12,1,3)}function sa(n,t){Ie(n,t,"#64748b",["#475569","#334155","#94a3b8","#1e293b"],.45,1801);const e=ze(1802);n.fillStyle="#1e293b";for(let i=0;i<5;i++){const r=Math.floor(e()*(t-4)),o=Math.floor(e()*(t-4));n.fillRect(r,o,3,2)}}function iv(n,t){n.clearRect(0,0,t,t),n.fillStyle="#15803d",n.fillRect(7,7,2,9),n.fillRect(5,11,2,2),n.fillRect(9,9,2,2),n.fillStyle="#dc2626",n.fillRect(6,3,4,4),n.fillStyle="#ef4444",n.fillRect(7,2,2,1),n.fillRect(5,4,1,2),n.fillRect(10,4,1,2),n.fillStyle="#450a0a",n.fillRect(7,4,2,2)}function rv(n,t){n.clearRect(0,0,t,t),n.fillStyle="#15803d",n.fillRect(7,6,2,10),n.fillRect(5,10,2,2),n.fillRect(9,12,2,2),n.fillStyle="#eab308",n.fillRect(6,2,4,4),n.fillStyle="#facc15",n.fillRect(7,1,2,1),n.fillRect(5,3,1,2),n.fillRect(10,3,1,2),n.fillStyle="#ca8a04",n.fillRect(7,3,2,2)}function ov(n,t){$o(n,t),n.strokeStyle="#451a03",n.lineWidth=1,n.strokeRect(2.5,2.5,11,11),n.beginPath(),n.moveTo(6.5,2.5),n.lineTo(6.5,13.5),n.moveTo(10.5,2.5),n.lineTo(10.5,13.5),n.moveTo(2.5,6.5),n.lineTo(13.5,6.5),n.moveTo(2.5,10.5),n.lineTo(13.5,10.5),n.stroke(),n.fillStyle="#fef08a",n.fillRect(3,3,1,1),n.fillRect(12,3,1,1),n.fillRect(3,12,1,1),n.fillRect(12,12,1,1)}function sv(n,t){$o(n,t),n.fillStyle="#1e293b",n.fillRect(3,4,3,8),n.fillStyle="#94a3b8",n.fillRect(3,4,2,6),n.fillStyle="#78350f",n.fillRect(4,9,1,3),n.fillStyle="#cbd5e1",n.fillRect(10,5,2,2),n.fillStyle="#78350f",n.fillRect(9,7,1,4),n.fillRect(12,7,1,4)}function av(n,t){n.clearRect(0,0,t,t),n.fillStyle="#78350f",n.fillRect(7,6,2,10),n.fillStyle="#451a03",n.fillRect(7,6,1,10),n.fillStyle="#f97316",n.fillRect(6,2,4,4),n.fillStyle="#fef08a",n.fillRect(7,3,2,2),n.fillStyle="#ea580c",n.fillRect(7,1,2,1)}function lv(n,t){sa(n,t),n.strokeStyle="#1e293b",n.lineWidth=1,n.strokeRect(1.5,1.5,13,13)}function cv(n,t){sa(n,t),n.fillStyle="#0f172a",n.fillRect(4,7,8,7),n.fillStyle="#334155",n.fillRect(5,10,6,1),n.fillRect(5,12,6,1)}function uv(n,t){sa(n,t),n.fillStyle="#f97316",n.fillRect(4,7,8,7),n.fillStyle="#fef08a",n.fillRect(5,9,6,4),n.fillStyle="#ef4444",n.fillRect(6,11,4,2)}function fv(n,t){$o(n,t),n.strokeStyle="#451a03",n.lineWidth=1,n.strokeRect(1.5,1.5,13,13)}function dv(n,t){$o(n,t),n.strokeStyle="#451a03",n.lineWidth=1,n.strokeRect(1.5,1.5,13,13),n.fillStyle="#cbd5e1",n.fillRect(7,6,2,4),n.fillStyle="#475569",n.fillRect(7,8,2,1)}function hv(n,t){Ie(n,t,"#3b1d0c",["#2e1507","#45220e","#230f04","#4d2812"],.4,2101),n.fillStyle="#1c0b03",n.fillRect(0,3,t,1),n.fillRect(0,7,t,1),n.fillRect(0,11,t,1),n.fillRect(0,15,t,1)}function pv(n,t){Ie(n,t,"#86652d",["#775924","#957134","#664c1e"],.35,2201),n.fillStyle="#3b1d0c",n.fillRect(0,0,t,3),n.fillStyle="#230f04",n.fillRect(0,2,t,1)}function mv(n,t){n.clearRect(0,0,t,t),n.fillStyle="#65a30d";for(let e=2;e<t;e+=3)n.fillRect(e,12,1,4),n.fillRect(e-1,11,1,2)}function gv(n,t){n.clearRect(0,0,t,t),n.fillStyle="#84cc16";for(let e=1;e<t;e+=3)n.fillRect(e,6,2,10),n.fillStyle="#ca8a04",n.fillRect(e,6,2,3),n.fillStyle="#84cc16"}function _v(n,t){n.clearRect(0,0,t,t);for(let e=1;e<t;e+=2)n.fillStyle="#ca8a04",n.fillRect(e,4,1,12),n.fillStyle="#eab308",n.fillRect(e-(e>1?1:0),1,2,5),n.fillStyle="#fef08a",n.fillRect(e,2,1,3)}function xv(n,t){n.fillStyle="#dc2626",n.fillRect(0,0,t,t),n.fillStyle="#475569",n.beginPath(),n.arc(8,8,4,0,Math.PI*2),n.fill(),n.fillStyle="#0f172a",n.fillRect(7,7,2,2)}function vv(n,t){n.fillStyle="#dc2626",n.fillRect(0,0,t,t),n.fillStyle="#f8fafc",n.fillRect(0,5,t,6),n.fillStyle="#0f172a",n.fillRect(1,6,4,1),n.fillRect(2,7,2,3),n.fillRect(6,6,1,4),n.fillRect(7,7,1,2),n.fillRect(8,6,1,4),n.fillRect(10,6,4,1),n.fillRect(11,7,2,3)}function Sv(n,t){n.fillStyle="#b91c1c",n.fillRect(0,0,t,t),n.fillStyle="#7f1d1d",n.fillRect(3,3,10,10),n.fillStyle="#450a0a",n.fillRect(7,7,2,2)}const Mv=[{name:"grass_top",draw:Vx},{name:"grass_side",draw:zx},{name:"dirt",draw:Wx},{name:"stone",draw:wc},{name:"sand",draw:Xx},{name:"snow",draw:qx},{name:"wood_log",draw:$x},{name:"wood_log_top",draw:Zx},{name:"leaves",draw:jx},{name:"coal_ore",draw:Jx},{name:"iron_ore",draw:Qx},{name:"water",draw:tv},{name:"stone_bricks",draw:Kx},{name:"snow_side",draw:Yx},{name:"cactus_top",draw:ev},{name:"cactus_side",draw:nv},{name:"wood_planks",draw:$o},{name:"cobblestone",draw:sa},{name:"flower_red",draw:iv},{name:"flower_yellow",draw:rv},{name:"crafting_table_top",draw:ov},{name:"crafting_table_side",draw:sv},{name:"torch",draw:av},{name:"furnace_side",draw:lv},{name:"furnace_front",draw:cv},{name:"furnace_front_lit",draw:uv},{name:"chest_top",draw:fv},{name:"chest_side",draw:dv},{name:"farmland_top",draw:hv},{name:"farmland_side",draw:pv},{name:"wheat_stage1",draw:mv},{name:"wheat_stage2",draw:gv},{name:"wheat_stage3",draw:_v},{name:"tnt_top",draw:xv},{name:"tnt_side",draw:vv},{name:"tnt_bottom",draw:Sv}];function ud(){return Mv.map(n=>kx(n.draw))}const ir=4,sc=16,rf=ir*sr,of=sc*sr;let Si=null;function Ev(){const n=ud(),t=document.createElement("canvas");t.width=rf,t.height=of;const e=t.getContext("2d");return e.fillStyle="#000000",e.fillRect(0,0,rf,of),n.forEach((i,r)=>{const o=r%ir,s=Math.floor(r/ir),a=o*sr,l=s*sr;e.drawImage(i,a,l)}),Si=new ux(t),Si.magFilter=Je,Si.minFilter=Je,Si.generateMipmaps=!1,Si.colorSpace=Ke,Si.needsUpdate=!0,Si}function Cc(n){const t=n%ir,e=Math.floor(n/ir),i=5e-4,r=t/ir+i,o=(t+1)/ir-i,s=1-e/sc-i,a=1-(e+1)/sc+i;return{uMin:r,uMax:o,vMin:a,vMax:s}}function aa(){return Si}const u={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD_LOG:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,WATER:10,CACTUS:11,WOOD_PLANKS:12,COBBLESTONE:13,FLOWER_RED:14,FLOWER_YELLOW:15,CRAFTING_TABLE:16,TORCH:17,FURNACE:18,FURNACE_LIT:19,CHEST:20,FARMLAND:21,WHEAT_STAGE_1:22,WHEAT_STAGE_2:23,WHEAT_STAGE_3:24,TNT:25,IRON_SWORD:101,IRON_PICKAXE:102,PORKCHOP:103,ROTTEN_FLESH:104,STICK:105,WOODEN_SWORD:106,WOODEN_PICKAXE:107,STONE_SWORD:108,STONE_PICKAXE:109,IRON_INGOT:110,COOKED_PORKCHOP:111,IRON_HELMET:112,IRON_CHESTPLATE:113,IRON_LEGGINGS:114,IRON_BOOTS:115,ARROW:116,BONE:117,STRING:118,SPIDER_EYE:119,BOW:120,WOODEN_HOE:121,STONE_HOE:122,IRON_HOE:123,WHEAT_SEEDS:124,WHEAT:125,BREAD:126,GUNPOWDER:127},fr={[u.GRASS]:"Grama",[u.DIRT]:"Terra",[u.STONE]:"Pedra",[u.SAND]:"Areia",[u.SNOW]:"Neve",[u.WOOD_LOG]:"Tronco de Carvalho",[u.LEAVES]:"Folhas",[u.COAL_ORE]:"Minério de Carvão",[u.IRON_ORE]:"Minério de Ferro",[u.WATER]:"Balde de Água",[u.CACTUS]:"Cacto",[u.WOOD_PLANKS]:"Tábuas de Madeira",[u.COBBLESTONE]:"Pedregulho",[u.FLOWER_RED]:"Flor Vermelha (Papoula)",[u.FLOWER_YELLOW]:"Flor Amarela (Dente-de-Leão)",[u.CRAFTING_TABLE]:"Bancada de Trabalho",[u.TORCH]:"Tocha",[u.FURNACE]:"Fornalha",[u.FURNACE_LIT]:"Fornalha (Acesa)",[u.CHEST]:"Baú de Madeira",[u.FARMLAND]:"Terra Arada",[u.WHEAT_STAGE_1]:"Brotos de Trigo",[u.WHEAT_STAGE_2]:"Trigo em Crescimento",[u.WHEAT_STAGE_3]:"Trigo Maduro",[u.TNT]:"Bloco de TNT",[u.IRON_SWORD]:"Espada de Ferro",[u.IRON_PICKAXE]:"Picareta de Ferro",[u.PORKCHOP]:"Costela de Porco Crua",[u.ROTTEN_FLESH]:"Carne Podre",[u.STICK]:"Graveto",[u.WOODEN_SWORD]:"Espada de Madeira",[u.WOODEN_PICKAXE]:"Picareta de Madeira",[u.STONE_SWORD]:"Espada de Pedra",[u.STONE_PICKAXE]:"Picareta de Pedra",[u.IRON_INGOT]:"Barra de Ferro",[u.COOKED_PORKCHOP]:"Bife de Porco Assado",[u.IRON_HELMET]:"Capacete de Ferro",[u.IRON_CHESTPLATE]:"Peitoral de Ferro",[u.IRON_LEGGINGS]:"Calças de Ferro",[u.IRON_BOOTS]:"Botas de Ferro",[u.ARROW]:"Flecha",[u.BONE]:"Osso",[u.STRING]:"Linha de Teia",[u.SPIDER_EYE]:"Olho de Aranha",[u.BOW]:"Arco e Flecha",[u.WOODEN_HOE]:"Enxada de Madeira",[u.STONE_HOE]:"Enxada de Pedra",[u.IRON_HOE]:"Enxada de Ferro",[u.WHEAT_SEEDS]:"Sementes de Trigo",[u.WHEAT]:"Trigo",[u.BREAD]:"Pão",[u.GUNPOWDER]:"Pólvora"},la={[u.GRASS]:{top:0,side:1,bottom:2},[u.DIRT]:{top:2,side:2,bottom:2},[u.STONE]:{top:3,side:3,bottom:3},[u.SAND]:{top:4,side:4,bottom:4},[u.SNOW]:{top:5,side:13,bottom:2},[u.WOOD_LOG]:{top:7,side:6,bottom:7},[u.LEAVES]:{top:8,side:8,bottom:8},[u.COAL_ORE]:{top:9,side:9,bottom:9},[u.IRON_ORE]:{top:10,side:10,bottom:10},[u.WATER]:{top:11,side:11,bottom:11},[u.CACTUS]:{top:14,side:15,bottom:14},[u.WOOD_PLANKS]:{top:16,side:16,bottom:16},[u.COBBLESTONE]:{top:17,side:17,bottom:17},[u.FLOWER_RED]:{top:18,side:18,bottom:18},[u.FLOWER_YELLOW]:{top:19,side:19,bottom:19},[u.CRAFTING_TABLE]:{top:20,side:21,bottom:16},[u.TORCH]:{top:22,side:22,bottom:22},[u.FURNACE]:{top:3,side:23,bottom:3},[u.FURNACE_LIT]:{top:3,side:25,bottom:3},[u.CHEST]:{top:26,side:27,bottom:16},[u.FARMLAND]:{top:28,side:29,bottom:2},[u.WHEAT_STAGE_1]:{top:30,side:30,bottom:30},[u.WHEAT_STAGE_2]:{top:31,side:31,bottom:31},[u.WHEAT_STAGE_3]:{top:32,side:32,bottom:32},[u.TNT]:{top:33,side:34,bottom:35}};function Ic(n){return n>u.AIR&&n<100&&n!==u.WATER&&n!==u.FLOWER_RED&&n!==u.FLOWER_YELLOW&&n!==u.TORCH&&n!==u.WHEAT_STAGE_1&&n!==u.WHEAT_STAGE_2&&n!==u.WHEAT_STAGE_3}function yv(n){return n>=u.GRASS&&n<100}function fd(n){return n===u.IRON_SWORD||n===u.STONE_SWORD||n===u.WOODEN_SWORD||n===u.BOW}function Tv(n){return n===u.IRON_HOE||n===u.STONE_HOE||n===u.WOODEN_HOE}function Av(n){return n===u.PORKCHOP||n===u.COOKED_PORKCHOP||n===u.ROTTEN_FLESH||n===u.BREAD}function bv(n){return n===u.IRON_HELMET||n===u.IRON_CHESTPLATE||n===u.IRON_LEGGINGS||n===u.IRON_BOOTS}function Rv(n){switch(n){case u.IRON_HELMET:return 2;case u.IRON_CHESTPLATE:return 6;case u.IRON_LEGGINGS:return 5;case u.IRON_BOOTS:return 2;default:return 0}}function wv(n){switch(n){case u.COOKED_PORKCHOP:return 8;case u.BREAD:return 5;case u.PORKCHOP:return 3;case u.ROTTEN_FLESH:return 1;default:return 0}}function Cv(n){return n===u.AIR||n===u.WATER||n===u.FLOWER_RED||n===u.FLOWER_YELLOW||n===u.TORCH||n===u.WHEAT_STAGE_1||n===u.WHEAT_STAGE_2||n===u.WHEAT_STAGE_3||n>=100}function Iv(n){switch(n){case u.LEAVES:case u.FLOWER_RED:case u.FLOWER_YELLOW:case u.WHEAT_STAGE_1:case u.WHEAT_STAGE_2:case u.WHEAT_STAGE_3:return .15;case u.DIRT:case u.GRASS:case u.SAND:case u.SNOW:case u.FARMLAND:return .55;case u.TNT:return .1;case u.WOOD_LOG:case u.WOOD_PLANKS:case u.CRAFTING_TABLE:case u.CHEST:case u.CACTUS:return 1.4;case u.STONE:case u.COBBLESTONE:case u.FURNACE:case u.FURNACE_LIT:return 2.5;case u.COAL_ORE:case u.IRON_ORE:return 3.5;case u.TORCH:return .05;default:return 1}}function Pv(n,t){const e=t===u.IRON_PICKAXE,i=t===u.STONE_PICKAXE,r=t===u.WOODEN_PICKAXE,o=t===u.IRON_SWORD,s=t===u.STONE_SWORD,a=t===u.WOODEN_SWORD;return n===u.STONE||n===u.COBBLESTONE||n===u.COAL_ORE||n===u.IRON_ORE||n===u.FURNACE||n===u.FURNACE_LIT?e?6.5:i?4.2:r?2.6:.65:n===u.LEAVES||n===u.FLOWER_RED||n===u.FLOWER_YELLOW||n===u.WHEAT_STAGE_1||n===u.WHEAT_STAGE_2||n===u.WHEAT_STAGE_3?o||s||a?6:2:(n===u.WOOD_LOG||n===u.WOOD_PLANKS||n===u.CRAFTING_TABLE||n===u.CHEST)&&(e||i||r)?1.6:1}function dd(n){switch(n){case u.STONE:return u.COBBLESTONE;case u.GRASS:return u.DIRT;case u.COAL_ORE:return u.COAL_ORE;case u.IRON_ORE:return u.IRON_ORE;case u.FURNACE:case u.FURNACE_LIT:return u.FURNACE;case u.FARMLAND:return u.DIRT;case u.WHEAT_STAGE_3:return u.WHEAT;case u.WHEAT_STAGE_1:case u.WHEAT_STAGE_2:return u.WHEAT_SEEDS;case u.LEAVES:return Math.random()<.35?u.LEAVES:0;case u.TNT:return u.TNT;default:return n}}const Tt=16,fe=64,Lv=[{name:"top",dir:[0,1,0],colorKey:"top",vertices:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"bottom",dir:[0,-1,0],colorKey:"bottom",vertices:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"north",dir:[0,0,-1],colorKey:"side",vertices:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"south",dir:[0,0,1],colorKey:"side",vertices:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"east",dir:[1,0,0],colorKey:"side",vertices:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],localUVs:[[0,0],[1,0],[1,1],[0,1]]},{name:"west",dir:[-1,0,0],colorKey:"side",vertices:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],localUVs:[[0,0],[1,0],[1,1],[0,1]]}];let Wa=null,Xa=null;function Ov(){return Wa||(Wa=new Vt({map:aa()})),Wa}function Nv(){return Xa||(Xa=new Vt({map:aa(),transparent:!0,opacity:.65,side:Nn,depthWrite:!1})),Xa}class Dv{constructor(t=0,e=0,i=0){this.cx=t,this.cy=e,this.cz=i,this.blocks=new Uint8Array(Tt*Tt*fe),this.mesh=null}_index(t,e,i){return t+i*Tt+e*Tt*Tt}getBlock(t,e,i){return t<0||t>=Tt||e<0||e>=fe||i<0||i>=Tt?u.AIR:this.blocks[this._index(t,e,i)]}setBlock(t,e,i,r){t<0||t>=Tt||e<0||e>=fe||i<0||i>=Tt||(this.blocks[this._index(t,e,i)]=r)}buildMesh(t){const e=[],i=[],r=[],o=[],s=[],a=[],l=[],c=[];let f=0,d=0;const h=this.cx*Tt,m=this.cy*fe,_=this.cz*Tt;for(let p=0;p<fe;p++)for(let b=0;b<Tt;b++)for(let E=0;E<Tt;E++){const y=this.getBlock(E,p,b);if(y===u.AIR)continue;const U=y===u.WATER,C=la[y];if(C)for(const R of Lv){const D=E+R.dir[0],T=p+R.dir[1],M=b+R.dir[2];let w;if(D>=0&&D<Tt&&T>=0&&T<fe&&M>=0&&M<Tt?w=this.getBlock(D,T,M):t?w=t(h+D,m+T,_+M):w=u.AIR,U){if(w!==u.AIR)continue}else if(!Cv(w))continue;const z=C[R.colorKey],H=Cc(z),$=U?s:e,Z=U?a:i,q=U?l:r,j=U?c:o,k=U?d:f;for(let it=0;it<4;it++){const dt=R.vertices[it];$.push(E+dt[0],p+dt[1],b+dt[2]),Z.push(R.dir[0],R.dir[1],R.dir[2]);const yt=R.localUVs[it][0],Gt=R.localUVs[it][1];q.push(H.uMin+yt*(H.uMax-H.uMin),H.vMin+Gt*(H.vMax-H.vMin))}j.push(k,k+1,k+2,k,k+2,k+3),U?d+=4:f+=4}}let x=this._makeMesh(e,i,r,o,Ov());x.position.set(h,m,_),this.mesh=x;let g=null;return s.length>0&&(g=this._makeMesh(s,a,l,c,Nv()),g.position.set(h,m,_),g.renderOrder=1),{solidMesh:x,waterMesh:g}}_makeMesh(t,e,i,r,o){const s=new fn;return s.setAttribute("position",new Qe(t,3)),s.setAttribute("normal",new Qe(e,3)),s.setAttribute("uv",new Qe(i,2)),s.setIndex(r),new ot(s,o)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null)}}const xn=new Map,Xs=new Map,qs=new Map,je=18,wi=5,Uv=7;let sf=NaN,af=NaN;const qa=[];function Jn(n,t){let e=n*374761393+t*668265263+1234567|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Fv(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,o=t-i,s=r*r*(3-2*r),a=o*o*(3-2*o),l=Jn(e,i),c=Jn(e+1,i),f=Jn(e,i+1),d=Jn(e+1,i+1),h=l*(1-s)+c*s,m=f*(1-s)+d*s;return h*(1-a)+m*a}function Xr(n,t,e=4,i=.5,r=2){let o=0,s=1,a=1,l=0;for(let c=0;c<e;c++)o+=Fv(n*s,t*s)*a,l+=a,a*=i,s*=r;return o/l}const ie={OCEAN:"ocean",PLAINS:"plains",FOREST:"forest",DESERT:"desert",SNOWY_MOUNTAINS:"snowy_mountains"};function to(n,t){const e=Xr(n*.0025,t*.0025,3);if(e<.32)return ie.OCEAN;const i=Xr(n*.0035+150,t*.0035+150,3),r=Xr(n*.004+300,t*.004+300,3);return e>.58&&i<.38?ie.SNOWY_MOUNTAINS:i>.62&&r<.48?ie.DESERT:r>.52?ie.FOREST:ie.PLAINS}function ai(n,t){const e=to(n,t),i=Xr(n*.025,t*.025,3);switch(e){case ie.OCEAN:{const r=Xr(n*.01,t*.01,2),o=je-2-r*10+i*3;return Math.max(3,Math.min(fe-6,Math.floor(o)))}case ie.DESERT:{const o=21+(Math.sin(n*.03+t*.015)*4+Math.cos(t*.03)*3)+i*2.5;return Math.max(je+1,Math.min(fe-6,Math.floor(o)))}case ie.SNOWY_MOUNTAINS:{const r=Xr(n*.015,t*.015,4),o=28+Math.pow(r,1.8)*32+i*4;return Math.max(24,Math.min(fe-4,Math.floor(o)))}case ie.FOREST:{const o=23+(Math.sin(n*.022)*5+Math.cos(t*.028)*4+Math.sin((n-t)*.035)*2.5)+i*3;return Math.max(je+1,Math.min(fe-6,Math.floor(o)))}case ie.PLAINS:default:{const o=22+(Math.sin(n*.02)*4+Math.cos(t*.025)*4+Math.sin((n+t)*.04)*2)+i*2.5;return Math.max(je+1,Math.min(fe-6,Math.floor(o)))}}}function lf(n,t,e,i,r){for(let s=i;s<i+r;s++)s<fe&&n.setBlock(t,s,e,u.WOOD_LOG);const o=i+r-1;for(let s=0;s<3;s++){const a=s<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++){if(Math.abs(l)===a&&Math.abs(c)===a&&s<2)continue;const f=t+l,d=o+s,h=e+c;f>=0&&f<Tt&&d>=0&&d<fe&&h>=0&&h<Tt&&n.getBlock(f,d,h)===u.AIR&&n.setBlock(f,d,h,u.LEAVES)}}}function Bv(n,t,e,i,r){for(let s=i;s<i+r;s++)s<fe&&n.setBlock(t,s,e,u.WOOD_LOG);const o=i+r;for(let s=i+2;s<=o+1;s++){const l=(o+1-s)%2===0?2:1;for(let c=-l;c<=l;c++)for(let f=-l;f<=l;f++){if(Math.abs(c)===l&&Math.abs(f)===l&&l>1)continue;const d=t+c,h=s,m=e+f;d>=0&&d<Tt&&h>=0&&h<fe&&m>=0&&m<Tt&&n.getBlock(d,h,m)===u.AIR&&n.setBlock(d,h,m,u.LEAVES)}}}function Gv(n,t,e,i,r){for(let o=i;o<i+r;o++)o<fe&&n.getBlock(t,o,e)===u.AIR&&n.setBlock(t,o,e,u.CACTUS)}function Ya(n,t,e,i,r){t>=0&&t<Tt&&i>=0&&i<Tt&&e<fe&&n.getBlock(t,e,i)===u.AIR&&n.setBlock(t,e,i,r)}function vi(n,t,e){let i=n*374761393+t*668265263+e*982451653+1234567|0;return i=(i^i>>13)*1274126177|0,(i&2147483647)/2147483647}function cf(n,t,e){const i=Math.floor(n),r=Math.floor(t),o=Math.floor(e),s=n-i,a=t-r,l=e-o,c=s*s*(3-2*s),f=a*a*(3-2*a),d=l*l*(3-2*l),h=vi(i,r,o),m=vi(i+1,r,o),_=vi(i,r+1,o),x=vi(i+1,r+1,o),g=vi(i,r,o+1),p=vi(i+1,r,o+1),b=vi(i,r+1,o+1),E=vi(i+1,r+1,o+1),y=h*(1-c)+m*c,U=_*(1-c)+x*c,C=g*(1-c)+p*c,R=b*(1-c)+E*c,D=y*(1-f)+U*f,T=C*(1-f)+R*f;return D*(1-d)+T*d}function hd(n,t,e,i){if(t<2||t>i||i<=je+1&&t>=i-2)return!1;const r=cf(n*.045,t*.075,e*.045)-.5,o=cf(n*.045+137,t*.075+137,e*.045+137)-.5;return r*r+o*o<.022}function pd(n,t){const e=new Dv(n,0,t),i=n*Tt,r=t*Tt;for(let o=0;o<Tt;o++)for(let s=0;s<Tt;s++){const a=i+s,l=r+o,c=ai(a,l),f=to(a,l);for(let d=0;d<=c;d++){let h;d===0||d<c-4?h=u.STONE:d<c?f===ie.DESERT||f===ie.OCEAN&&c<=je+1?h=u.SAND:h=u.DIRT:f===ie.DESERT?h=u.SAND:f===ie.SNOWY_MOUNTAINS?h=c>=36?u.SNOW:u.GRASS:f===ie.OCEAN||c<=je+1?h=u.SAND:h=u.GRASS,d>=2&&hd(a,d,l,c)&&(d<=je-8?h=u.WATER:h=u.AIR),e.setBlock(s,d,o,h)}for(let d=c+1;d<=je;d++)e.getBlock(s,d,o)===u.AIR&&e.setBlock(s,d,o,u.WATER)}for(let o=1;o<Tt-1;o++)for(let s=1;s<Tt-1;s++){const a=i+s,l=r+o,c=ai(a,l),f=to(a,l),d=e.getBlock(s,c,o),h=Jn(a,l);if(c>je){if(f===ie.PLAINS&&d===u.GRASS)if(h<.025&&s>=2&&s<Tt-2&&o>=2&&o<Tt-2){const m=4+Math.floor(Jn(a+555,l+777)*3);c+m+4<fe&&lf(e,s,o,c+1,m)}else h>.94&&h<.97?Ya(e,s,c+1,o,u.FLOWER_RED):h>=.97&&Ya(e,s,c+1,o,u.FLOWER_YELLOW);else if(f===ie.FOREST&&d===u.GRASS)if(h<.085&&s>=2&&s<Tt-2&&o>=2&&o<Tt-2){const m=4+Math.floor(Jn(a+444,l+666)*4);c+m+4<fe&&lf(e,s,o,c+1,m)}else h>.96&&Ya(e,s,c+1,o,u.FLOWER_RED);else if(f===ie.DESERT&&d===u.SAND){if(h<.028){const m=2+(h>.015?1:0);Gv(e,s,o,c+1,m)}}else if(f===ie.SNOWY_MOUNTAINS&&(d===u.GRASS||d===u.SNOW)&&h<.035&&s>=2&&s<Tt-2&&o>=2&&o<Tt-2){const m=5+Math.floor(Jn(a+333,l+888)*4);c+m+4<fe&&Bv(e,s,o,c+1,m)}}}for(let o=0;o<Tt;o++)for(let s=0;s<Tt;s++){const a=i+s,l=r+o,c=ai(a,l);for(let f=1;f<c-3;f++)if(e.getBlock(s,f,o)===u.STONE){const d=Jn(a*31+f*97,l*53+f*13);d<.018?e.setBlock(s,f,o,u.COAL_ORE):d>.982&&e.setBlock(s,f,o,u.IRON_ORE)}}return e}function ln(n,t,e){if(t<0||t>=fe)return u.AIR;const i=Math.floor(n/Tt),r=Math.floor(e/Tt),o=`${i},0,${r}`,s=xn.get(o);if(s){const l=(n%Tt+Tt)%Tt,c=(e%Tt+Tt)%Tt;return s.getBlock(l,t,c)}const a=ai(n,e);if(t>a)return t<=je?u.WATER:u.AIR;if(t>=2&&hd(n,t,e,a))return t<=je-8?u.WATER:u.AIR;if(t===a){const l=to(n,e);return l===ie.DESERT||a<=je+1?u.SAND:l===ie.SNOWY_MOUNTAINS&&a>=36?u.SNOW:u.GRASS}return t>=a-4?to(n,e)===ie.DESERT?u.SAND:u.DIRT:u.STONE}function md(n,t,e){return Ic(ln(n,t,e))}function ca(n,t){const e=`${n.cx},0,${n.cz}`,i=Xs.get(e),r=qs.get(e);i&&(t.remove(i),i.geometry.dispose()),r&&(t.remove(r),r.geometry.dispose());const{solidMesh:o,waterMesh:s}=n.buildMesh(ln);Xs.set(e,o),t.add(o),s&&(qs.set(e,s),t.add(s))}function Hv(n){console.log("[World] Generating starting biomes and chunks...");for(let t=-wi;t<=wi;t++)for(let e=-wi;e<=wi;e++){const i=pd(e,t);xn.set(`${e},0,${t}`,i)}for(const t of xn.values())ca(t,n);console.log(`[World] Ready! ${xn.size} chunks generated.`)}function uf(n,t){if(!t)return;const e=Math.floor(n.x/Tt),i=Math.floor(n.z/Tt);if(e!==sf||i!==af){sf=e,af=i;for(const[o,s]of xn.entries())if(Math.max(Math.abs(s.cx-e),Math.abs(s.cz-i))>Uv){const l=Xs.get(o),c=qs.get(o);l&&(t.remove(l),l.geometry.dispose(),Xs.delete(o)),c&&(t.remove(c),c.geometry.dispose(),qs.delete(o)),s.dispose(),xn.delete(o)}for(let o=-wi;o<=wi;o++)for(let s=-wi;s<=wi;s++){const a=e+s,l=i+o,c=`${a},0,${l}`;if(!xn.has(c)){const f=pd(a,l);xn.set(c,f),qa.push(f)}}}const r=Math.min(2,qa.length);for(let o=0;o<r;o++){const s=qa.shift();xn.has(`${s.cx},0,${s.cz}`)&&ca(s,t)}}function Pc(){return{x:.5,y:ai(0,0)+2,z:.5}}function Pi(n,t,e,i,r){if(e<0||e>=fe)return;const o=Math.floor(t/Tt),s=Math.floor(i/Tt),a=`${o},0,${s}`,l=xn.get(a);if(!l)return;const c=(t%Tt+Tt)%Tt,f=(i%Tt+Tt)%Tt;l.setBlock(c,e,f,r),ca(l,n),c===0&&Rs(n,o-1,s),c===Tt-1&&Rs(n,o+1,s),f===0&&Rs(n,o,s-1),f===Tt-1&&Rs(n,o,s+1)}function Rs(n,t,e){const i=xn.get(`${t},0,${e}`);i&&ca(i,n)}const xo=6;function kv(n,t){const e=t.clone().normalize();let i=Math.floor(n.x),r=Math.floor(n.y),o=Math.floor(n.z);const s=e.x>=0?1:-1,a=e.y>=0?1:-1,l=e.z>=0?1:-1,c=e.x!==0?Math.abs(1/e.x):1/0,f=e.y!==0?Math.abs(1/e.y):1/0,d=e.z!==0?Math.abs(1/e.z):1/0;let h=e.x!==0?(e.x>0?i+1-n.x:n.x-i)*c:1/0,m=e.y!==0?(e.y>0?r+1-n.y:n.y-r)*f:1/0,_=e.z!==0?(e.z>0?o+1-n.z:n.z-o)*d:1/0,x=i,g=r,p=o,b=0,E=0,y=0;for(let U=0;U<xo*3;U++){if(r>=0&&r<fe){const C=ln(i,r,o);if(Ic(C))return{hit:{x:i,y:r,z:o},normal:{x:b,y:E,z:y},prev:{x,y:g,z:p}}}if(x=i,g=r,p=o,h<m)if(h<_){if(h>xo)break;i+=s,h+=c,b=-s,E=0,y=0}else{if(_>xo)break;o+=l,_+=d,b=0,E=0,y=-l}else if(m<_){if(m>xo)break;r+=a,m+=f,b=0,E=-a,y=0}else{if(_>xo)break;o+=l,_+=d,b=0,E=0,y=-l}}return null}const Vv={[u.GRASS]:5938743,[u.DIRT]:9136404,[u.STONE]:8947848,[u.SAND]:15259274,[u.SNOW]:15790320,[u.WOOD_LOG]:7029286,[u.LEAVES]:3832352,[u.COAL_ORE]:4473924,[u.IRON_ORE]:12096874,[u.WATER]:3702992,[u.CACTUS]:1483594,[u.WOOD_PLANKS]:11817737,[u.COBBLESTONE]:6583435,[u.FLOWER_RED]:14427686,[u.FLOWER_YELLOW]:15381256};let dr=null;const Fo=[],zv=new ht(.12,.12,.12),Wv=new ht(.08,.08,.08);function Xv(n){dr=n}function ac(n,t,e,i){if(!dr)return;const r=Vv[i]||11184810,o=12;for(let s=0;s<o;s++){const a=new Vt({color:r}),l=new ot(zv,a);l.position.set(n+.2+Math.random()*.6,t+.2+Math.random()*.6,e+.2+Math.random()*.6);const c=(Math.random()-.5)*4.5,f=Math.random()*4+1.5,d=(Math.random()-.5)*4.5,h=(Math.random()-.5)*10,m=(Math.random()-.5)*10;dr.add(l),Fo.push({mesh:l,vx:c,vy:f,vz:d,rx:h,ry:m,life:.6+Math.random()*.3,age:0})}}function gd(n,t,e,i=15680580){if(!dr)return;const r=8;for(let o=0;o<r;o++){const s=new Vt({color:i}),a=new ot(Wv,s);a.position.set(n,t,e);const l=(Math.random()-.5)*5,c=Math.random()*3.5+1,f=(Math.random()-.5)*5;dr.add(a),Fo.push({mesh:a,vx:l,vy:c,vz:f,rx:Math.random()*10,ry:Math.random()*10,life:.35+Math.random()*.2,age:0})}}function qv(n){if(dr)for(let t=Fo.length-1;t>=0;t--){const e=Fo[t];if(e.age+=n,e.age>=e.life){dr.remove(e.mesh),e.mesh.material.dispose(),Fo.splice(t,1);continue}e.vy-=18*n,e.mesh.position.x+=e.vx*n,e.mesh.position.y+=e.vy*n,e.mesh.position.z+=e.vz*n,e.mesh.rotation.x+=e.rx*n,e.mesh.rotation.y+=e.ry*n;const i=Math.max(.01,1-e.age/e.life);e.mesh.scale.set(i,i,i)}}const Yv=480;let oi=.2,Ys=null,Ks=null,Br=null,Qn=null,Mi=null,Nr=null;const Kv={dawn:new wt(16096779),morning:new wt(9684477),noon:new wt(6333946),sunset:new wt(14753096),dusk:new wt(4405450),midnight:new wt(329750),predawn:new wt(1973067)},$v={dawn:new wt(16498468),morning:new wt(9684477),noon:new wt(7911912),sunset:new wt(16007006),dusk:new wt(3223169),midnight:new wt(329489),predawn:new wt(1973067)};function Zv(n,t={}){Qn=t.dirLight||null,Mi=t.hemiLight||null,Nr=t.ambientLight||null,Br=new Ne,n.add(Br);const e=new ht(20,20,20),i=new ui({color:16776171});Ys=new ot(e,i),Br.add(Ys);const r=new ht(16,16,16),o=new ui({color:15857145});Ks=new ot(r,o),Br.add(Ks),_d(0,n,null)}function ff(n,t,e,i=null){oi+=n/Yv,oi>=1&&(oi-=1),e&&Br&&Br.position.copy(e.position);const r=oi*Math.PI*2-Math.PI/2,o=260,s=Math.cos(r)*o,a=Math.sin(r)*o,l=20;Ys&&Ys.position.set(s,a,l),Ks&&Ks.position.set(-s,-a,-l),Qn&&(ua()?Qn.position.set(s,Math.max(15,a),l):Qn.position.set(-s,Math.max(15,-a),-l)),_d(n,t,i)}function df(n,t){if(t<.15){const e=t/.15;return n.dawn.clone().lerp(n.morning,e)}else if(t<.25){const e=(t-.15)/.1;return n.morning.clone().lerp(n.noon,e)}else if(t<.5){const e=(t-.25)/.25;return n.noon.clone().lerp(n.sunset,e)}else if(t<.58){const e=(t-.5)/.08;return n.sunset.clone().lerp(n.dusk,e)}else if(t<.75){const e=(t-.58)/.17;return n.dusk.clone().lerp(n.midnight,e)}else if(t<.92){const e=(t-.75)/.17;return n.midnight.clone().lerp(n.predawn,e)}else{const e=(t-.92)/.08;return n.predawn.clone().lerp(n.dawn,e)}}function _d(n,t,e){const i=df(Kv,oi),r=df($v,oi);t&&t.fog&&t.fog.color.copy(r),e&&e.setClearColor(i);const o=Math.sin(oi*Math.PI*2);Qn&&(o>0?(Qn.color.set(16774624),Qn.intensity=.4+o*.85):(Qn.color.set(9741240),Qn.intensity=Math.max(.12,-o*.28))),Mi&&(o>0?(Mi.color.set(8900331),Mi.groundColor.set(5596723),Mi.intensity=.3+o*.4):(Mi.color.set(1976635),Mi.groundColor.set(988970),Mi.intensity=.15)),Nr&&(o>0?(Nr.color.set(16777215),Nr.intensity=.25+o*.2):(Nr.color.set(6583435),Nr.intensity=.12))}function ua(){return oi<.5}function jv(){const n=(oi*24+6)%24,t=Math.floor(n),e=Math.floor((n-t)*60),i=t<10?"0"+t:""+t,r=e<10?"0"+e:""+e;return`${i}:${r}`}let qr=null;const Ro=[],Jv=new ht(.26,.26,.26);function Qv(n){qr=n}function Ge(n,t,e,i){if(!qr||!n||n===u.AIR)return;const r=la[n]||{side:1};Cc(r.side||0);const o=new Vt({map:aa()}),s=new ot(Jv,o);s.position.set(t+(Math.random()-.5)*.2,e+.3,i+(Math.random()-.5)*.2),qr.add(s),Ro.push({itemType:n,mesh:s,pos:s.position.clone(),vel:new N((Math.random()-.5)*2,3.2,(Math.random()-.5)*2),age:0,bobOffset:Math.random()*Math.PI*2,collected:!1})}function tS(n,t){if(!qr)return;const i=Fi().clone().add(new N(0,.9,0));for(let r=Ro.length-1;r>=0;r--){const o=Ro[r];if(o.age+=n,o.age>180){qr.remove(o.mesh),o.mesh.geometry.dispose(),Ro.splice(r,1);continue}const s=o.pos.distanceTo(i);if(s<2.5&&o.age>.4){const a=Math.min(12,1/(s*.2+.05));if(o.pos.lerp(i,n*a),s<.65&&un(o.itemType)){yx(),qr.remove(o.mesh),o.mesh.geometry.dispose(),Ro.splice(r,1);continue}}else{o.vel.y-=18*n,o.pos.x+=o.vel.x*n,o.pos.z+=o.vel.z*n,o.pos.y+=o.vel.y*n,o.vel.x*=Math.exp(-6*n),o.vel.z*=Math.exp(-6*n);const a=ai(Math.floor(o.pos.x),Math.floor(o.pos.z))+1.15;o.pos.y<=a&&(o.pos.y=a,o.vel.set(0,0,0))}o.mesh.position.copy(o.pos),o.mesh.position.y+=Math.sin(t*3.5+o.bobOffset)*.06,o.mesh.rotation.y+=n*2.2,o.mesh.rotation.x=Math.sin(t*2+o.bobOffset)*.15}}const zt={PIG:"pig",ZOMBIE:"zombie",SKELETON:"skeleton",SPIDER:"spider",CREEPER:"creeper"};let Ae=null;const Bn=[],ji=[],Gs=[];let Ka=0;const eS=12;function nS(n,t,e,i,r,o){const s=i-n,a=r-t,l=o-e,c=Math.hypot(s,a,l);if(c<.3)return!0;const f=Math.ceil(c*2.2),d=s/f,h=a/f,m=l/f;for(let _=1;_<f;_++){const x=Math.floor(n+d*_),g=Math.floor(t+h*_),p=Math.floor(e+m*_);if(md(x,g,p))return!1}return!0}function iS(){const n=new Ne,t=new Vt({color:16020150}),e=new Vt({color:16478597}),i=new Vt({color:2042167}),r=new ot(new ht(.7,.5,.9),t);r.position.set(0,.45,0),n.add(r);const o=new ot(new ht(.45,.45,.45),t);o.position.set(0,.65,-.55),n.add(o);const s=new ot(new ht(.24,.16,.12),e);s.position.set(0,.58,-.8),n.add(s);const a=new ot(new ht(.08,.08,.02),i);a.position.set(-.16,.72,-.78);const l=new ot(new ht(.08,.08,.02),i);l.position.set(.16,.72,-.78),n.add(a),n.add(l);const c=new ht(.18,.35,.18),f=[],d=[[-.24,.18,-.3],[.24,.18,-.3],[-.24,.18,.3],[.24,.18,.3]];for(const h of d){const m=new ot(c,t);m.position.set(...h),n.add(m),f.push(m)}return{group:n,legs:f,head:o,body:r,originalMats:[t,e]}}function rS(){const n=new Ne,t=new Vt({color:3899966}),e=new Vt({color:440020}),i=new Vt({color:1981066}),r=new Vt({color:988970}),o=new ot(new ht(.44,.44,.44),t);o.position.set(0,1.45,0),n.add(o);const s=new ot(new ht(.08,.06,.02),r);s.position.set(-.12,1.48,-.23);const a=new ot(new ht(.08,.06,.02),r);a.position.set(.12,1.48,-.23),n.add(s),n.add(a);const l=new ot(new ht(.5,.65,.28),e);l.position.set(0,.9,0),n.add(l);const c=new ht(.16,.16,.55),f=new ot(c,t);f.position.set(-.35,1.05,-.26);const d=new ot(c,t);d.position.set(.35,1.05,-.26),n.add(f),n.add(d);const h=new ht(.2,.6,.22),m=new ot(h,i);m.position.set(-.13,.3,0);const _=new ot(h,i);return _.position.set(.13,.3,0),n.add(m),n.add(_),{group:n,legs:[m,_],arms:[f,d],head:o,body:l,originalMats:[t,e,i]}}function oS(){const n=new Ne,t=new Vt({color:13751771}),e=new Vt({color:988970}),i=new Vt({color:7877903}),r=new ot(new ht(.42,.42,.42),t);r.position.set(0,1.45,0),n.add(r);const o=new ot(new ht(.1,.08,.02),e);o.position.set(-.11,1.47,-.22);const s=new ot(new ht(.1,.08,.02),e);s.position.set(.11,1.47,-.22),n.add(o),n.add(s);const a=new ot(new ht(.42,.6,.2),t);a.position.set(0,.9,0),n.add(a);const l=new ht(.1,.55,.1),c=new ot(l,t);c.position.set(-.28,.9,-.2),c.rotation.x=-Math.PI/2.5;const f=new ot(l,t);f.position.set(.28,.9,-.2),f.rotation.x=-Math.PI/2.5,n.add(c),n.add(f);const d=new ot(new ht(.06,.45,.06),i);d.position.set(.28,.85,-.42),n.add(d);const h=new ht(.12,.6,.12),m=new ot(h,t);m.position.set(-.11,.3,0);const _=new ot(h,t);return _.position.set(.11,.3,0),n.add(m),n.add(_),{group:n,legs:[m,_],arms:[c,f],head:r,body:a,originalMats:[t,i]}}function sS(){const n=new Ne,t=new Vt({color:1976635}),e=new ui({color:15680580}),i=new ot(new ht(.65,.45,.7),t);i.position.set(0,.35,.4),n.add(i);const r=new ot(new ht(.45,.35,.45),t);r.position.set(0,.3,-.25),n.add(r);const o=new ht(.06,.06,.02),s=new ot(o,e);s.position.set(-.12,.32,-.48);const a=new ot(o,e);a.position.set(.12,.32,-.48),n.add(s),n.add(a);const l=new ht(.6,.08,.08),c=[];for(let f=0;f<4;f++){const d=new ot(l,t);d.position.set(-.45,.22,-.3+f*.22),d.rotation.z=.35,n.add(d),c.push(d);const h=new ot(l,t);h.position.set(.45,.22,-.3+f*.22),h.rotation.z=-.35,n.add(h),c.push(h)}return{group:n,legs:c,head:r,body:i,originalMats:[t,e]}}function aS(){const n=new Ne,t=new Vt({color:2278750}),e=new Vt({color:1409085}),i=new Vt({color:988970}),r=new ot(new ht(.48,.7,.28),t);r.position.set(0,.75,0),n.add(r);const o=new ot(new ht(.48,.48,.48),t);o.position.set(0,1.34,0),n.add(o);const s=new ot(new ht(.1,.1,.02),i);s.position.set(-.11,1.38,-.25);const a=new ot(new ht(.1,.1,.02),i);a.position.set(.11,1.38,-.25),n.add(s),n.add(a);const l=new ot(new ht(.08,.12,.02),i);l.position.set(0,1.3,-.25),n.add(l);const c=new ot(new ht(.08,.14,.02),i);c.position.set(-.08,1.2,-.25);const f=new ot(new ht(.08,.14,.02),i);f.position.set(.08,1.2,-.25),n.add(c),n.add(f);const d=new ht(.2,.4,.2),h=[],m=[[-.14,.2,-.16],[.14,.2,-.16],[-.14,.2,.16],[.14,.2,.16]];for(const _ of m){const x=new ot(d,e);x.position.set(..._),n.add(x),h.push(x)}return{group:n,legs:h,head:o,body:r,originalMats:[t,e]}}function Dn(n,t,e,i){if(!Ae)return null;let r;n===zt.PIG?r=iS():n===zt.SKELETON?r=oS():n===zt.SPIDER?r=sS():n===zt.CREEPER?r=aS():r=rS(),r.group.position.set(t,e,i),Ae.add(r.group);const o={type:n,model:r,pos:new N(t,e,i),vel:new N(0,0,0),health:n===zt.PIG?10:n===zt.SPIDER?16:20,maxHealth:n===zt.PIG?10:n===zt.SPIDER?16:20,yaw:Math.random()*Math.PI*2,targetYaw:0,stateTimer:1+Math.random()*2,state:"idle",attackCooldown:0,hurtTimer:0,animPhase:0,onGround:!1,eyeHeight:n===zt.PIG?.6:n===zt.SPIDER?.35:1.45,losCheckTimer:Math.random()*.2,canSeePlayer:!1,lastSeenPos:null,investigateTimer:0,burnTimer:0,isBurning:!1,shootCooldown:1+Math.random()*1.5,fuseTimer:0,isFusing:!1};return Bn.push(o),o}function lS(n){Ae=n}function cS(n,t,e=3.8){const i=t.clone().normalize();let r=null,o=e;for(const s of Bn){const l=s.pos.clone().add(new N(0,s.eyeHeight*.6,0)).clone().sub(n),c=l.dot(i);if(c>0&&c<o){const f=l.clone().sub(i.clone().multiplyScalar(c)).length(),d=s.type===zt.PIG?.6:s.type===zt.SPIDER?.75:.55;f<d&&(o=c,r=s)}}return r}function Lc(n,t,e){n.health-=t,n.hurtTimer=.25,Sx(),gd(n.pos.x,n.pos.y+n.eyeHeight*.5,n.pos.z);const i=e.clone().normalize().multiplyScalar(7.5);n.vel.x+=i.x,n.vel.z+=i.z,n.vel.y=3.5,n.type===zt.PIG?(n.state="flee",n.stateTimer=4):(n.state="chase",n.lastSeenPos=Fi().clone()),n.health<=0&&Oc(n)}function Oc(n){Ae.remove(n.model.group);const t=Bn.indexOf(n);t!==-1&&Bn.splice(t,1),n.type===zt.PIG?Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.PORKCHOP):n.type===zt.ZOMBIE?(Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.ROTTEN_FLESH),Math.random()<.25&&Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.IRON_INGOT)):n.type===zt.SKELETON?(Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.BONE),Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.ARROW)):n.type===zt.SPIDER?(Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.STRING),Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.SPIDER_EYE)):n.type===zt.CREEPER&&Ge(n.pos.x,n.pos.y+.5,n.pos.z,u.GUNPOWDER)}function xd(n,t,e,i=2.8,r=16){if(!Ae)return;Ax();const o=new N(n,t,e),a=Fi().clone().add(new N(0,.9,0)).sub(o),l=a.length();if(l<i*2.2){const x=1-l/(i*2.2),g=Math.max(2,Math.round(r*x));no(g,a.clone().normalize())}for(let x=Bn.length-1;x>=0;x--){const g=Bn[x],p=g.pos.distanceTo(o);if(p<i*2){const b=Math.round(r*(1-p/(i*2)));Lc(g,b,g.pos.clone().sub(o).normalize())}}const c=Math.floor(n-i),f=Math.ceil(n+i),d=Math.max(1,Math.floor(t-i)),h=Math.min(63,Math.ceil(t+i)),m=Math.floor(e-i),_=Math.ceil(e+i);for(let x=m;x<=_;x++)for(let g=c;g<=f;g++)for(let p=d;p<=h;p++)if(Math.hypot(g+.5-n,p+.5-t,x+.5-e)<=i){const E=ln(g,p,x);if(E!==u.AIR&&E!==u.WATER&&(ac(g,p,x,E),Pi(Ae,g,p,x,u.AIR),Math.random()<.4)){const y=dd(E);y>0&&Ge(g+.5,p+.5,x+.5,y)}}}function uS(n,t,e){if(!Ae)return;Pi(Ae,n,t,e,u.AIR);const i=new ht(.98,.98,.98),r=new Vt({color:15680580}),o=new ot(i,r);o.position.set(n+.5,t+.5,e+.5),Ae.add(o),od(),Gs.push({mesh:o,mat:r,pos:new N(n+.5,t+.5,e+.5),timer:2.2,blinkTimer:0})}function fS(n){for(let t=Gs.length-1;t>=0;t--){const e=Gs[t];e.timer-=n,e.blinkTimer+=n*10,Math.floor(e.blinkTimer)%2===0?e.mat.color.setHex(16777215):e.mat.color.setHex(15680580),e.timer<=0&&(Ae.remove(e.mesh),Gs.splice(t,1),xd(e.pos.x,e.pos.y,e.pos.z,3.8,20))}}function dS(n,t){if(!Ae)return;Tx();const e=new ht(.08,.08,.6),i=new ui({color:16317180}),r=new ot(e,i);r.position.copy(n),Ae.add(r);const s=t.clone().normalize().multiplyScalar(26);ji.push({mesh:r,pos:n.clone(),vel:s,life:5,isPlayerShot:!0})}function hS(n,t){if(!Ae)return;const e=new ht(.08,.08,.5),i=new ui({color:14870768}),r=new ot(e,i);r.position.copy(n),Ae.add(r);const s=t.clone().sub(n).normalize().multiplyScalar(18);ji.push({mesh:r,pos:n.clone(),vel:s,life:4,isPlayerShot:!1})}function pS(n){const t=Fi();for(let e=ji.length-1;e>=0;e--){const i=ji[e];if(i.life-=n,i.vel.y-=12*n,i.pos.addScaledVector(i.vel,n),i.mesh.position.copy(i.pos),i.isPlayerShot){let r=!1;for(const o of Bn){const s=o.pos.clone().add(new N(0,o.eyeHeight*.5,0));if(i.pos.distanceTo(s)<.9){Lc(o,9,i.vel.clone().normalize()),Ae.remove(i.mesh),ji.splice(e,1),r=!0;break}}if(r)continue}else if(i.pos.distanceTo(t.clone().add(new N(0,.9,0)))<.75){no(4,i.vel.clone().normalize()),Ae.remove(i.mesh),ji.splice(e,1);continue}(md(Math.floor(i.pos.x),Math.floor(i.pos.y),Math.floor(i.pos.z))||i.life<=0)&&(Ae.remove(i.mesh),ji.splice(e,1))}}function mS(n){const t=Fi();Ka+=n,Ka>3&&Bn.length<eS&&(Ka=0,gS(t)),pS(n),fS(n);for(let e=Bn.length-1;e>=0;e--){const i=Bn[e];_S(i,n,t)}}function gS(n){const t=Math.random()*Math.PI*2,e=18+Math.random()*20,i=Math.floor(n.x+Math.cos(t)*e),r=Math.floor(n.z+Math.sin(t)*e),o=ai(i,r);if(o>18&&o<50)if(ua())Dn(zt.PIG,i+.5,o+1,r+.5);else{const a=Math.random();a<.35?Dn(zt.ZOMBIE,i+.5,o+1,r+.5):a<.6?Dn(zt.SKELETON,i+.5,o+1,r+.5):a<.8?Dn(zt.CREEPER,i+.5,o+1,r+.5):Dn(zt.SPIDER,i+.5,o+1,r+.5)}}function _S(n,t,e){const r=e.clone().sub(n.pos).length();if((n.type===zt.ZOMBIE||n.type===zt.SKELETON)&&ua()){const s=ai(Math.floor(n.pos.x),Math.floor(n.pos.z));if(n.pos.y>=s&&(n.burnTimer+=t,n.burnTimer>=1&&(n.burnTimer=0,n.health-=2,gd(n.pos.x,n.pos.y+1,n.pos.z),n.health<=0))){Oc(n);return}}if(n.losCheckTimer-=t,n.losCheckTimer<=0){n.losCheckTimer=.25;const s=nS(n.pos.x,n.pos.y+n.eyeHeight,n.pos.z,e.x,e.y+1.2,e.z);n.canSeePlayer=s&&r<24,n.canSeePlayer&&(n.lastSeenPos=e.clone(),n.type!==zt.PIG&&(n.state="chase"))}n.type===zt.PIG?ES(n,t,e):n.type===zt.SKELETON?SS(n,t,e,r):n.type===zt.SPIDER?MS(n,t,e,r):n.type===zt.CREEPER?xS(n,t,e,r):vS(n,t,e,r),n.vel.y-=22*t,n.pos.addScaledVector(n.vel,t);const o=ai(Math.floor(n.pos.x),Math.floor(n.pos.z));n.pos.y<=o+1&&(n.pos.y=o+1,n.vel.y=0,n.onGround=!0),n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.model.group.position.copy(n.pos),n.model.group.rotation.y=n.yaw}function xS(n,t,e,i){if(n.state==="chase"){n.yaw=Math.atan2(e.x-n.pos.x,e.z-n.pos.z);const r=2.8;if(n.vel.x=Math.sin(n.yaw)*r,n.vel.z=Math.cos(n.yaw)*r,i<3.2){n.isFusing||(n.isFusing=!0,od()),n.fuseTimer+=t,n.vel.x=0,n.vel.z=0;const o=1+n.fuseTimer/1.5*.3;if(n.model.group.scale.set(o,o,o),n.fuseTimer>=1.5){xd(n.pos.x,n.pos.y+.5,n.pos.z,2.8,16),Oc(n);return}}else i>5.5&&n.isFusing&&(n.isFusing=!1,n.fuseTimer=0,n.model.group.scale.set(1,1,1))}}function vS(n,t,e,i){if(n.state==="chase"){n.yaw=Math.atan2(e.x-n.pos.x,e.z-n.pos.z);const r=3.4;n.vel.x=Math.sin(n.yaw)*r,n.vel.z=Math.cos(n.yaw)*r,i<1.4&&(n.attackCooldown-=t,n.attackCooldown<=0&&(n.attackCooldown=1,no(3,new N(Math.sin(n.yaw),0,Math.cos(n.yaw)))))}}function SS(n,t,e,i){n.yaw=Math.atan2(e.x-n.pos.x,e.z-n.pos.z),n.canSeePlayer&&(i<7?(n.vel.x=-Math.sin(n.yaw)*2.8,n.vel.z=-Math.cos(n.yaw)*2.8):i>12&&(n.vel.x=Math.sin(n.yaw)*2.8,n.vel.z=Math.cos(n.yaw)*2.8),n.shootCooldown-=t,n.shootCooldown<=0&&i<18&&(n.shootCooldown=2.2,rd(),hS(n.pos.clone().add(new N(0,1.2,0)),e.clone().add(new N(0,.9,0)))))}function MS(n,t,e,i){if(n.state==="chase"){n.yaw=Math.atan2(e.x-n.pos.x,e.z-n.pos.z);const r=4.5;n.vel.x=Math.sin(n.yaw)*r,n.vel.z=Math.cos(n.yaw)*r,i<4.5&&n.onGround&&Math.random()<.05&&(n.vel.y=5.5,n.vel.x*=1.5,n.vel.z*=1.5,n.onGround=!1),i<1.3&&(n.attackCooldown-=t,n.attackCooldown<=0&&(n.attackCooldown=.8,no(2,new N(Math.sin(n.yaw),0,Math.cos(n.yaw)))))}}function ES(n,t,e,i){if(n.state==="flee"){n.stateTimer-=t;const r=n.pos.clone().sub(e).normalize();n.yaw=Math.atan2(r.x,r.z),n.vel.x=r.x*4.2,n.vel.z=r.z*4.2,n.stateTimer<=0&&(n.state="idle")}else n.stateTimer-=t,n.stateTimer<=0&&(n.stateTimer=2+Math.random()*3,n.yaw+=(Math.random()-.5)*1.5),n.vel.x=Math.sin(n.yaw)*1.2,n.vel.z=Math.cos(n.yaw)*1.2}let $a=null;function yS(){return $a||($a=ud()),$a}function Za(n,t,e,i){const[r,o,s,a]=t,l=(o[0]-r[0])/16,c=(o[1]-r[1])/16,f=(a[0]-r[0])/16,d=(a[1]-r[1])/16;n.save(),n.filter=`brightness(${i})`,n.setTransform(l,c,f,d,r[0],r[1]),n.drawImage(e,0,0,16,16,0,0,16,16),n.restore()}function Te(n,t=46){const e=document.createElement("canvas");e.width=t,e.height=t;const i=e.getContext("2d");if(n===u.IRON_SWORD||n===u.STONE_SWORD||n===u.WOODEN_SWORD){const h=n===u.IRON_SWORD,m=n===u.STONE_SWORD,_=h?"#f1f5f9":m?"#94a3b8":"#b45309",x=h?"#475569":m?"#334155":"#78350f";return i.lineWidth=3,i.strokeStyle=x,i.fillStyle=_,i.beginPath(),i.moveTo(t*.75,t*.15),i.lineTo(t*.85,t*.25),i.lineTo(t*.45,t*.65),i.lineTo(t*.35,t*.55),i.closePath(),i.fill(),i.stroke(),i.strokeStyle=h?"#334155":"#451a03",i.lineWidth=4,i.beginPath(),i.moveTo(t*.25,t*.6),i.lineTo(t*.5,t*.85),i.stroke(),i.strokeStyle="#78350f",i.lineWidth=4,i.beginPath(),i.moveTo(t*.35,t*.7),i.lineTo(t*.2,t*.85),i.stroke(),e}if(n===u.IRON_PICKAXE||n===u.STONE_PICKAXE||n===u.WOODEN_PICKAXE){const h=n===u.IRON_PICKAXE,m=n===u.STONE_PICKAXE,_=h?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(t*.25,t*.75),i.lineTo(t*.7,t*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.arc(t*.7,t*.3,t*.25,-Math.PI*.75,-Math.PI*.15),i.stroke(),e}if(n===u.STICK)return i.lineWidth=5,i.strokeStyle="#92400e",i.beginPath(),i.moveTo(t*.25,t*.75),i.lineTo(t*.75,t*.25),i.stroke(),e;if(n===u.TORCH)return i.lineWidth=6,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(t*.3,t*.75),i.lineTo(t*.65,t*.4),i.stroke(),i.fillStyle="#f97316",i.beginPath(),i.arc(t*.68,t*.35,t*.15,0,Math.PI*2),i.fill(),i.fillStyle="#fef08a",i.beginPath(),i.arc(t*.68,t*.35,t*.08,0,Math.PI*2),i.fill(),e;if(n===u.IRON_INGOT)return i.fillStyle="#cbd5e1",i.strokeStyle="#475569",i.lineWidth=2,i.beginPath(),i.moveTo(t*.25,t*.4),i.lineTo(t*.65,t*.3),i.lineTo(t*.8,t*.55),i.lineTo(t*.4,t*.65),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#f8fafc",i.fillRect(t*.35,t*.42,t*.25,t*.08),e;if(n===u.COOKED_PORKCHOP)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.ellipse(t*.5,t*.5,t*.35,t*.22,Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#451a03",i.fillRect(t*.4,t*.4,t*.2,2),i.fillRect(t*.45,t*.5,t*.2,2),e;if(n===u.IRON_HELMET)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.arc(t*.5,t*.5,t*.32,Math.PI,0),i.lineTo(t*.82,t*.65),i.lineTo(t*.65,t*.65),i.lineTo(t*.65,t*.55),i.lineTo(t*.35,t*.55),i.lineTo(t*.35,t*.65),i.lineTo(t*.18,t*.65),i.closePath(),i.fill(),i.stroke(),e;if(n===u.IRON_CHESTPLATE)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(t*.25,t*.25),i.lineTo(t*.4,t*.35),i.lineTo(t*.6,t*.35),i.lineTo(t*.75,t*.25),i.lineTo(t*.85,t*.45),i.lineTo(t*.75,t*.5),i.lineTo(t*.75,t*.75),i.lineTo(t*.25,t*.75),i.lineTo(t*.25,t*.5),i.lineTo(t*.15,t*.45),i.closePath(),i.fill(),i.stroke(),e;if(n===u.IRON_LEGGINGS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.beginPath(),i.moveTo(t*.25,t*.25),i.lineTo(t*.75,t*.25),i.lineTo(t*.75,t*.75),i.lineTo(t*.55,t*.75),i.lineTo(t*.5,t*.45),i.lineTo(t*.45,t*.75),i.lineTo(t*.25,t*.75),i.closePath(),i.fill(),i.stroke(),e;if(n===u.IRON_BOOTS)return i.fillStyle="#cbd5e1",i.strokeStyle="#334155",i.lineWidth=2,i.fillRect(t*.22,t*.45,t*.18,t*.3),i.fillRect(t*.15,t*.6,t*.25,t*.15),i.fillRect(t*.6,t*.45,t*.18,t*.3),i.fillRect(t*.6,t*.6,t*.25,t*.15),e;if(n===u.ARROW)return i.lineWidth=3,i.strokeStyle="#94a3b8",i.beginPath(),i.moveTo(t*.2,t*.8),i.lineTo(t*.75,t*.25),i.stroke(),i.fillStyle="#475569",i.beginPath(),i.moveTo(t*.82,t*.18),i.lineTo(t*.65,t*.25),i.lineTo(t*.75,t*.35),i.closePath(),i.fill(),e;if(n===u.BONE)return i.fillStyle="#f8fafc",i.strokeStyle="#cbd5e1",i.lineWidth=2,i.beginPath(),i.roundRect(t*.25,t*.42,t*.5,t*.16,4),i.fill(),i.stroke(),e;if(n===u.STRING)return i.lineWidth=2,i.strokeStyle="#f8fafc",i.beginPath(),i.arc(t*.5,t*.5,t*.25,0,Math.PI*1.7),i.stroke(),e;if(n===u.SPIDER_EYE)return i.fillStyle="#991b1b",i.strokeStyle="#ef4444",i.lineWidth=2,i.beginPath(),i.arc(t*.5,t*.5,t*.22,0,Math.PI*2),i.fill(),i.stroke(),e;if(n===u.BOW)return i.lineWidth=3.5,i.strokeStyle="#78350f",i.beginPath(),i.arc(t*.4,t*.5,t*.35,-Math.PI*.45,Math.PI*.45),i.stroke(),i.lineWidth=1.5,i.strokeStyle="#f8fafc",i.beginPath(),i.moveTo(t*.4+Math.cos(-Math.PI*.45)*(t*.35),t*.5+Math.sin(-Math.PI*.45)*(t*.35)),i.lineTo(t*.4+Math.cos(Math.PI*.45)*(t*.35),t*.5+Math.sin(Math.PI*.45)*(t*.35)),i.stroke(),e;if(n===u.IRON_HOE||n===u.STONE_HOE||n===u.WOODEN_HOE){const h=n===u.IRON_HOE,m=n===u.STONE_HOE,_=h?"#cbd5e1":m?"#64748b":"#b45309";return i.lineWidth=4,i.strokeStyle="#78350f",i.beginPath(),i.moveTo(t*.25,t*.75),i.lineTo(t*.65,t*.3),i.stroke(),i.lineWidth=5,i.strokeStyle=_,i.beginPath(),i.moveTo(t*.65,t*.3),i.lineTo(t*.85,t*.3),i.lineTo(t*.85,t*.45),i.stroke(),e}if(n===u.WHEAT_SEEDS)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=1.5,[[t*.35,t*.4],[t*.55,t*.35],[t*.45,t*.6],[t*.65,t*.55]].forEach(([m,_])=>{i.beginPath(),i.arc(m,_,t*.08,0,Math.PI*2),i.fill(),i.stroke()}),e;if(n===u.WHEAT)return i.lineWidth=3,i.strokeStyle="#eab308",i.beginPath(),i.moveTo(t*.3,t*.8),i.lineTo(t*.5,t*.25),i.moveTo(t*.5,t*.8),i.lineTo(t*.5,t*.2),i.moveTo(t*.7,t*.8),i.lineTo(t*.5,t*.25),i.stroke(),i.fillStyle="#ef4444",i.fillRect(t*.38,t*.55,t*.24,4),e;if(n===u.BREAD)return i.fillStyle="#b45309",i.strokeStyle="#78350f",i.lineWidth=2,i.beginPath(),i.roundRect(t*.2,t*.35,t*.6,t*.32,8),i.fill(),i.stroke(),i.fillStyle="#fef08a",i.fillRect(t*.32,t*.42,3,t*.18),i.fillRect(t*.48,t*.42,3,t*.18),i.fillRect(t*.64,t*.42,3,t*.18),e;if(n===u.GUNPOWDER)return i.fillStyle="#475569",i.strokeStyle="#1e293b",i.lineWidth=1.5,i.beginPath(),i.moveTo(t*.25,t*.7),i.lineTo(t*.5,t*.3),i.lineTo(t*.75,t*.7),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#94a3b8",i.fillRect(t*.45,t*.45,2,2),i.fillRect(t*.55,t*.55,2,2),i.fillRect(t*.35,t*.6,2,2),e;if(n===u.ROTTEN_FLESH)return i.fillStyle="#65a30d",i.strokeStyle="#365314",i.lineWidth=2,i.beginPath(),i.ellipse(t*.5,t*.5,t*.32,t*.2,-Math.PI/4,0,Math.PI*2),i.fill(),i.stroke(),e;const r=yS(),o=la[n];if(!o)return null;const s=r[o.top],a=r[o.side],l=t/4,c=[[t/2,0],[t/2+l,l/2],[t/2,l],[t/2-l,l/2]],f=[[t/2-l,l/2],[t/2,l],[t/2,2*l],[t/2-l,3*l/2]],d=[[t/2,l],[t/2+l,l/2],[t/2+l,3*l/2],[t/2,2*l]];return Za(i,d,a,.8),Za(i,f,a,.66),Za(i,c,s,1),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1.5,[c,f,d].forEach(h=>{i.beginPath(),i.moveTo(h[0][0],h[0][1]);for(let m=1;m<h.length;m++)i.lineTo(h[m][0],h[m][1]);i.closePath(),i.stroke()}),e}let Cn=null,In=null;const _n=new Array(9).fill(0),sn=new Array(4).fill(0);let Tn=null;const vd=[{id:"planks",name:"Tábuas de Madeira",category:"Blocos",result:u.WOOD_PLANKS,count:4,gridSize:2,layout:[u.WOOD_LOG,0,0,0],desc:"Coloque 1 Tronco de Carvalho em qualquer espaço da grade.",check:n=>{const t=n.filter(i=>i===u.WOOD_LOG).length,e=n.filter(i=>i!==0&&i!==u.WOOD_LOG).length;return t===1&&e===0}},{id:"sticks",name:"Gravetos",category:"Materiais",result:u.STICK,count:4,gridSize:2,layout:[u.WOOD_PLANKS,0,u.WOOD_PLANKS,0],desc:"Coloque 2 Tábuas de Madeira verticalmente.",check:(n,t,e)=>{if(t===2&&e===2)return n[0]===u.WOOD_PLANKS&&n[2]===u.WOOD_PLANKS&&n[1]===0&&n[3]===0||n[1]===u.WOOD_PLANKS&&n[3]===u.WOOD_PLANKS&&n[0]===0&&n[2]===0;if(t===3&&e===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(n[o]===u.WOOD_PLANKS&&n[s]===u.WOOD_PLANKS&&n.every((l,c)=>c===o||c===s?!0:l===0))return!0}return!1}},{id:"crafting_table",name:"Bancada de Trabalho",category:"Blocos",result:u.CRAFTING_TABLE,count:1,gridSize:2,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS],desc:"Preencha os 4 espaços (2×2) com Tábuas de Madeira.",check:(n,t,e)=>{if(t===2&&e===2)return n.every(i=>i===u.WOOD_PLANKS);if(t===3&&e===3){const i=[0,1,3,4];for(const r of i){const o=r,s=r+1,a=r+3,l=r+4;if(n[o]===u.WOOD_PLANKS&&n[s]===u.WOOD_PLANKS&&n[a]===u.WOOD_PLANKS&&n[l]===u.WOOD_PLANKS&&n.every((f,d)=>d===o||d===s||d===a||d===l?!0:f===0))return!0}}return!1}},{id:"furnace",name:"Fornalha",category:"Blocos",result:u.FURNACE,count:1,gridSize:3,layout:[u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,0,u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE],desc:"Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.",check:(n,t,e)=>t!==3||e!==3?!1:[0,1,2,3,5,6,7,8].every(r=>n[r]===u.COBBLESTONE)&&n[4]===0},{id:"chest",name:"Baú de Madeira",category:"Blocos",result:u.CHEST,count:1,gridSize:3,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,0,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS],desc:"Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.",check:(n,t,e)=>t!==3||e!==3?!1:[0,1,2,3,5,6,7,8].every(r=>n[r]===u.WOOD_PLANKS)&&n[4]===0},{id:"torches",name:"Tochas (4x)",category:"Iluminação",result:u.TORCH,count:4,gridSize:2,layout:[u.COAL_ORE,0,u.STICK,0],desc:"1 Carvão em cima e 1 Graveto logo abaixo.",check:(n,t,e)=>{if(t===2&&e===2)return n[0]===u.COAL_ORE&&n[2]===u.STICK&&n[1]===0&&n[3]===0||n[1]===u.COAL_ORE&&n[3]===u.STICK&&n[0]===0&&n[2]===0;if(t===3&&e===3)for(let i=0;i<3;i++)for(let r=0;r<2;r++){const o=r*3+i,s=(r+1)*3+i;if(n[o]===u.COAL_ORE&&n[s]===u.STICK&&n.every((l,c)=>c===o||c===s?!0:l===0))return!0}return!1}},{id:"wooden_pickaxe",name:"Picareta de Madeira",category:"Ferramentas",result:u.WOODEN_PICKAXE,count:1,gridSize:3,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,u.WOOD_PLANKS,0,u.STICK,0,0,u.STICK,0],desc:"3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).",check:(n,t,e)=>t!==3||e!==3?!1:n[0]===u.WOOD_PLANKS&&n[1]===u.WOOD_PLANKS&&n[2]===u.WOOD_PLANKS&&n[4]===u.STICK&&n[7]===u.STICK&&n[3]===0&&n[5]===0&&n[6]===0&&n[8]===0},{id:"wooden_sword",name:"Espada de Madeira",category:"Armas",result:u.WOODEN_SWORD,count:1,gridSize:3,layout:[0,u.WOOD_PLANKS,0,0,u.WOOD_PLANKS,0,0,u.STICK,0],desc:"2 Tábuas verticais com 1 Graveto embaixo.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;for(let i=0;i<3;i++){const r=n[i]===u.WOOD_PLANKS&&n[3+i]===u.WOOD_PLANKS&&n[6+i]===u.STICK,o=n.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"stone_pickaxe",name:"Picareta de Pedra",category:"Ferramentas",result:u.STONE_PICKAXE,count:1,gridSize:3,layout:[u.COBBLESTONE,u.COBBLESTONE,u.COBBLESTONE,0,u.STICK,0,0,u.STICK,0],desc:"3 Pedregulhos no topo e 2 Gravetos no meio.",check:(n,t,e)=>t!==3||e!==3?!1:n[0]===u.COBBLESTONE&&n[1]===u.COBBLESTONE&&n[2]===u.COBBLESTONE&&n[4]===u.STICK&&n[7]===u.STICK&&n[3]===0&&n[5]===0&&n[6]===0&&n[8]===0},{id:"stone_sword",name:"Espada de Pedra",category:"Armas",result:u.STONE_SWORD,count:1,gridSize:3,layout:[0,u.COBBLESTONE,0,0,u.COBBLESTONE,0,0,u.STICK,0],desc:"2 Pedregulhos verticais com 1 Graveto embaixo.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;for(let i=0;i<3;i++){const r=n[i]===u.COBBLESTONE&&n[3+i]===u.COBBLESTONE&&n[6+i]===u.STICK,o=n.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_pickaxe",name:"Picareta de Ferro",category:"Ferramentas",result:u.IRON_PICKAXE,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,0,u.STICK,0,0,u.STICK,0],desc:"3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.",check:(n,t,e)=>t!==3||e!==3?!1:n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[4]===u.STICK&&n[7]===u.STICK&&n[3]===0&&n[5]===0&&n[6]===0&&n[8]===0},{id:"iron_sword",name:"Espada de Ferro",category:"Armas",result:u.IRON_SWORD,count:1,gridSize:3,layout:[0,u.IRON_INGOT,0,0,u.IRON_INGOT,0,0,u.STICK,0],desc:"2 Barras de Ferro verticais com 1 Graveto embaixo.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;for(let i=0;i<3;i++){const r=n[i]===u.IRON_INGOT&&n[3+i]===u.IRON_INGOT&&n[6+i]===u.STICK,o=n.every((s,a)=>a===i||a===3+i||a===6+i?!0:s===0);if(r&&o)return!0}return!1}},{id:"iron_helmet",name:"Capacete de Ferro",category:"Armaduras",result:u.IRON_HELMET,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT,0,0,0],desc:"5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).",check:(n,t,e)=>t!==3||e!==3?!1:n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===0&&n[5]===u.IRON_INGOT&&n[6]===0&&n[7]===0&&n[8]===0},{id:"iron_chestplate",name:"Peitoral de Ferro",category:"Armaduras",result:u.IRON_CHESTPLATE,count:1,gridSize:3,layout:[u.IRON_INGOT,0,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT],desc:"8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).",check:(n,t,e)=>t!==3||e!==3?!1:n[0]===u.IRON_INGOT&&n[1]===0&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===u.IRON_INGOT&&n[5]===u.IRON_INGOT&&n[6]===u.IRON_INGOT&&n[7]===u.IRON_INGOT&&n[8]===u.IRON_INGOT},{id:"iron_leggings",name:"Calças de Ferro",category:"Armaduras",result:u.IRON_LEGGINGS,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT],desc:"7 Barras de Ferro em formato de calças (+5 Defesa).",check:(n,t,e)=>t!==3||e!==3?!1:n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===0&&n[5]===u.IRON_INGOT&&n[6]===u.IRON_INGOT&&n[7]===0&&n[8]===u.IRON_INGOT},{id:"iron_boots",name:"Botas de Ferro",category:"Armaduras",result:u.IRON_BOOTS,count:1,gridSize:3,layout:[u.IRON_INGOT,0,u.IRON_INGOT,u.IRON_INGOT,0,u.IRON_INGOT,0,0,0],desc:"4 Barras de Ferro em formato de botas (+2 Defesa).",check:(n,t,e)=>t!==3||e!==3?!1:n[0]===u.IRON_INGOT&&n[1]===0&&n[2]===u.IRON_INGOT&&n[3]===u.IRON_INGOT&&n[4]===0&&n[5]===u.IRON_INGOT&&n[6]===0&&n[7]===0&&n[8]===0},{id:"bow",name:"Arco de Caça",category:"Armas",result:u.BOW,count:1,gridSize:3,layout:[0,u.STICK,u.STRING,u.STICK,0,u.STRING,0,u.STICK,u.STRING],desc:"3 Gravetos e 3 Linhas de Teia na bancada 3×3.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;const i=n.filter(s=>s===u.STICK).length,r=n.filter(s=>s===u.STRING).length,o=n.filter(s=>s!==0&&s!==u.STICK&&s!==u.STRING).length;return i===3&&r===3&&o===0}},{id:"wooden_hoe",name:"Enxada de Madeira",category:"Ferramentas",result:u.WOODEN_HOE,count:1,gridSize:3,layout:[u.WOOD_PLANKS,u.WOOD_PLANKS,0,0,u.STICK,0,0,u.STICK,0],desc:"2 Tábuas no topo e 2 Gravetos verticais.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;const i=n[0]===u.WOOD_PLANKS&&n[1]===u.WOOD_PLANKS&&n[4]===u.STICK&&n[7]===u.STICK||n[1]===u.WOOD_PLANKS&&n[2]===u.WOOD_PLANKS&&n[4]===u.STICK&&n[7]===u.STICK,r=n.filter(a=>a===u.STICK).length,o=n.filter(a=>a===u.WOOD_PLANKS).length,s=n.filter(a=>a!==0&&a!==u.STICK&&a!==u.WOOD_PLANKS).length;return i&&r===2&&o===2&&s===0}},{id:"stone_hoe",name:"Enxada de Pedra",category:"Ferramentas",result:u.STONE_HOE,count:1,gridSize:3,layout:[u.COBBLESTONE,u.COBBLESTONE,0,0,u.STICK,0,0,u.STICK,0],desc:"2 Pedregulhos no topo e 2 Gravetos verticais.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;const i=n[0]===u.COBBLESTONE&&n[1]===u.COBBLESTONE&&n[4]===u.STICK&&n[7]===u.STICK||n[1]===u.COBBLESTONE&&n[2]===u.COBBLESTONE&&n[4]===u.STICK&&n[7]===u.STICK,r=n.filter(a=>a===u.STICK).length,o=n.filter(a=>a===u.COBBLESTONE).length,s=n.filter(a=>a!==0&&a!==u.STICK&&a!==u.COBBLESTONE).length;return i&&r===2&&o===2&&s===0}},{id:"iron_hoe",name:"Enxada de Ferro",category:"Ferramentas",result:u.IRON_HOE,count:1,gridSize:3,layout:[u.IRON_INGOT,u.IRON_INGOT,0,0,u.STICK,0,0,u.STICK,0],desc:"2 Barras de Ferro no topo e 2 Gravetos verticais.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;const i=n[0]===u.IRON_INGOT&&n[1]===u.IRON_INGOT&&n[4]===u.STICK&&n[7]===u.STICK||n[1]===u.IRON_INGOT&&n[2]===u.IRON_INGOT&&n[4]===u.STICK&&n[7]===u.STICK,r=n.filter(a=>a===u.STICK).length,o=n.filter(a=>a===u.IRON_INGOT).length,s=n.filter(a=>a!==0&&a!==u.STICK&&a!==u.IRON_INGOT).length;return i&&r===2&&o===2&&s===0}},{id:"bread",name:"Pão Dourado",category:"Alimentação",result:u.BREAD,count:1,gridSize:3,layout:[0,0,0,u.WHEAT,u.WHEAT,u.WHEAT,0,0,0],desc:"3 Trigos colhidos em linha horizontal (+5 Vida).",check:(n,t,e)=>{if(t!==3||e!==3)return!1;for(let i=0;i<3;i++){const r=i*3,o=i*3+1,s=i*3+2;if(n[r]===u.WHEAT&&n[o]===u.WHEAT&&n[s]===u.WHEAT&&n.every((l,c)=>c===r||c===o||c===s?!0:l===0))return!0}return!1}},{id:"tnt",name:"Bloco de TNT",category:"Explosivos",result:u.TNT,count:1,gridSize:3,layout:[u.GUNPOWDER,u.SAND,u.GUNPOWDER,u.SAND,u.GUNPOWDER,u.SAND,u.GUNPOWDER,u.SAND,u.GUNPOWDER],desc:"5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.",check:(n,t,e)=>{if(t!==3||e!==3)return!1;const i=n.filter(s=>s===u.GUNPOWDER).length,r=n.filter(s=>s===u.SAND).length,o=n.filter(s=>s!==0&&s!==u.GUNPOWDER&&s!==u.SAND).length;return i===5&&r===4&&o===0}}];function Sd(n,t,e){for(const i of vd)if(i.check(n,t,e))return{result:i.result,count:i.count,name:i.name};return null}function Md(){Cn||(Cn=document.createElement("div"),Cn.id="crafting-table-modal",Object.assign(Cn.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"460px",padding:"24px",borderRadius:"18px",background:"rgba(15, 23, 42, 0.96)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(34, 197, 94, 0.15)",zIndex:"150",display:"none",color:"#f8fafc",fontFamily:"'Outfit', 'Segoe UI', sans-serif",backdropFilter:"blur(16px)"}),Cn.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">🔨</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#4ade80;">BANCADA DE TRABALHO (3×3)</h2>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button id="open-recipe-book-table" title="Guia com diagramas de montagem" style="background:linear-gradient(135deg, #3b82f6, #1d4ed8); border:1px solid #60a5fa; color:#fff; font-size:12px; font-weight:700; padding:6px 12px; border-radius:8px; cursor:pointer; display:flex; align-items:center; gap:6px; box-shadow:0 4px 12px rgba(59,130,246,0.4);">
          <span>❓</span> Receitas
        </button>
        <button id="close-table-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
      </div>
    </div>

    <!-- Crafting Matrix & Output Area -->
    <div style="display:flex; align-items:center; justify-content:center; gap:20px; margin-bottom:20px; background:rgba(30,41,59,0.6); padding:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.06);">
      <!-- 3×3 Grid -->
      <div id="table-craft-grid" style="display:grid; grid-template-columns:repeat(3, 44px); gap:6px;"></div>

      <!-- Arrow -->
      <div style="font-size:24px; color:#4ade80;">➜</div>

      <!-- Output Slot -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:4px;">
        <div id="table-output-slot" style="width:54px; height:54px; border-radius:10px; background:rgba(15,23,42,0.9); border:2px solid #22c55e; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative; box-shadow:0 0 16px rgba(34,197,94,0.3);" title="Resultado do Crafting"></div>
        <span style="font-size:11px; color:#cbd5e1; font-weight:700;">PRODUTO</span>
      </div>
    </div>

    <!-- Player Quick Hotbar Transfer -->
    <div style="font-size:12px; font-weight:700; color:#94a3b8; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">SEU INVENTÁRIO (Clique para pegar)</div>
    <div id="table-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
  `,document.body.appendChild(Cn),document.getElementById("close-table-btn").addEventListener("click",AS),document.getElementById("open-recipe-book-table").addEventListener("click",yd),Ed(),Bo())}function TS(){Cn||Md(),Cn.style.display="block",lo(pe.CRAFTING_TABLE),Ui(!0),Bo()}function AS(){if(Cn){Cn.style.display="none",ri(pe.CRAFTING_TABLE),Ui(!1);for(let n=0;n<9;n++)_n[n]>0&&(un(_n[n]),_n[n]=0)}}function Bo(){const n=document.getElementById("table-craft-grid"),t=document.getElementById("table-output-slot"),e=document.getElementById("table-hotbar-grid");if(!n||!t||!e)return;if(n.innerHTML="",_n.forEach((r,o)=>{const s=document.createElement("div");if(s.style.cssText="width:44px; height:44px; border-radius:8px; background:rgba(15,23,42,0.85); border:1.5px solid rgba(255,255,255,0.18); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;",r>0){const a=Te(r,34);s.appendChild(a)}s.addEventListener("click",()=>{_n[o]>0&&(un(_n[o]),_n[o]=0,ja(),Bo())}),n.appendChild(s)}),t.innerHTML="",Tn&&Tn.result>0){const r=Te(Tn.result,40);if(t.appendChild(r),Tn.count>1){const o=document.createElement("span");o.style.cssText="position:absolute; bottom:2px; right:4px; font-size:12px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;",o.textContent=Tn.count,t.appendChild(o)}}t.onclick=()=>{if(Tn&&Tn.result>0){for(let r=0;r<Tn.count;r++)un(Tn.result);ur();for(let r=0;r<9;r++)_n[r]=0;ja(),Bo()}},e.innerHTML="";const i=Zo();i.forEach((r,o)=>{const s=document.createElement("div");if(s.style.cssText="width:40px; height:40px; border-radius:6px; background:rgba(30,41,59,0.85); border:1.5px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; cursor:pointer;",r>0){const a=Te(r,30);s.appendChild(a),s.title=`${fr[r]||"Item"} (Clique para colocar na bancada)`,s.addEventListener("click",()=>{const l=_n.findIndex(c=>c===0);l!==-1&&(_n[l]=r,i[o]=0,ja(),Bo())})}e.appendChild(s)})}function ja(){Tn=Sd(_n,3,3)}function Ed(){In||(In=document.createElement("div"),In.id="recipe-book-modal",Object.assign(In.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"600px",maxHeight:"82vh",padding:"24px",borderRadius:"18px",background:"rgba(15, 23, 42, 0.98)",border:"1px solid rgba(59, 130, 246, 0.4)",boxShadow:"0 25px 70px rgba(0, 0, 0, 0.9), 0 0 50px rgba(59, 130, 246, 0.25)",zIndex:"200",display:"none",color:"#f8fafc",fontFamily:"'Outfit', 'Segoe UI', sans-serif",backdropFilter:"blur(20px)",flexDirection:"column"}),In.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">📖</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#60a5fa;">LIVRO DE RECEITAS (GUIA DE FABRICAÇÃO)</h2>
      </div>
      <button id="close-recipe-book-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <div style="font-size:13px; color:#94a3b8; margin-bottom:14px;">
      Veja como organizar os blocos e materiais na grade para forjar cada item no jogo:
    </div>

    <!-- Recipe Cards List -->
    <div id="recipe-cards-container" style="overflow-y:auto; max-height:60vh; padding-right:8px; display:flex; flex-direction:column; gap:12px;"></div>
  `,document.body.appendChild(In),document.getElementById("close-recipe-book-btn").addEventListener("click",RS),bS())}function bS(){const n=document.getElementById("recipe-cards-container");n&&(n.innerHTML="",vd.forEach(t=>{const e=document.createElement("div");e.style.cssText="display:flex; align-items:center; justify-content:space-between; background:rgba(30,41,59,0.7); padding:12px 16px; border-radius:12px; border:1px solid rgba(255,255,255,0.08);";const i=document.createElement("div");i.style.cssText="display:flex; align-items:center; gap:14px; max-width:320px;";const r=document.createElement("div");r.style.cssText="width:48px; height:48px; border-radius:8px; background:rgba(15,23,42,0.9); border:2px solid #22c55e; display:flex; align-items:center; justify-content:center; position:relative; flex-shrink:0;";const o=Te(t.result,36);if(r.appendChild(o),t.count>1){const d=document.createElement("span");d.style.cssText="position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff;",d.textContent=t.count,r.appendChild(d)}i.appendChild(r);const s=document.createElement("div");s.innerHTML=`
      <div style="font-size:15px; font-weight:800; color:#f1f5f9;">${t.name}</div>
      <div style="font-size:11px; font-weight:700; color:#38bdf8; text-transform:uppercase; margin-bottom:2px;">${t.category}</div>
      <div style="font-size:12px; color:#94a3b8; line-height:1.3;">${t.desc}</div>
    `,i.appendChild(s);const a=document.createElement("div");a.style.cssText="display:flex; flex-direction:column; align-items:center; gap:4px;";const l=document.createElement("span");l.style.cssText="font-size:10px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;",l.textContent=`Grade ${t.gridSize}×${t.gridSize}`,a.appendChild(l);const c=document.createElement("div"),f=t.gridSize;c.style.cssText=`display:grid; grid-template-columns:repeat(${f}, 28px); gap:3px; background:rgba(15,23,42,0.85); padding:4px; border-radius:6px; border:1px solid rgba(255,255,255,0.15);`,t.layout.forEach(d=>{const h=document.createElement("div");if(h.style.cssText="width:28px; height:28px; border-radius:4px; background:rgba(30,41,59,0.9); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center;",d>0){const m=Te(d,22);h.appendChild(m),h.title=fr[d]||""}c.appendChild(h)}),a.appendChild(c),e.appendChild(i),e.appendChild(a),n.appendChild(e)}))}function yd(){In||Ed(),In.style.display="flex",lo(pe.RECIPE_BOOK)}function RS(){In&&(In.style.display="none",ri(pe.RECIPE_BOOK))}const $s={[u.IRON_ORE]:{output:u.IRON_INGOT,time:3.5},[u.PORKCHOP]:{output:u.COOKED_PORKCHOP,time:2.5},[u.COBBLESTONE]:{output:u.STONE,time:3}},lc={[u.COAL_ORE]:16,[u.WOOD_LOG]:6,[u.WOOD_PLANKS]:3,[u.STICK]:1.5},Li=new Map;let Pn=null,ti=null;function wS(n,t,e){const i=`${n},${t},${e}`;return Li.has(i)||Li.set(i,{x:n,y:t,z:e,inputItem:0,inputCount:0,fuelItem:0,fuelCount:0,outputItem:0,outputCount:0,burnTimeRemaining:0,maxBurnTime:0,cookProgress:0}),Li.get(i)}function CS(n,t,e){Pn=`${n},${t},${e}`,wS(n,t,e),ti||OS(),ti.style.display="block",lo(pe.FURNACE),Ui(!0),ar()}function IS(){ti&&(ti.style.display="none",Pn=null,ri(pe.FURNACE),Ui(!1))}function PS(){return sd(pe.FURNACE)}function LS(n){for(const[t,e]of Li.entries()){const r=e.inputItem>0&&$s[e.inputItem]?$s[e.inputItem]:null;e.burnTimeRemaining>0&&(e.burnTimeRemaining=Math.max(0,e.burnTimeRemaining-n)),r&&(e.outputItem===0||e.outputItem===r.output)?(e.burnTimeRemaining<=0&&e.fuelCount>0&&lc[e.fuelItem]&&(e.maxBurnTime=lc[e.fuelItem],e.burnTimeRemaining=e.maxBurnTime,e.fuelCount--,e.fuelCount<=0&&(e.fuelItem=0)),e.burnTimeRemaining>0?(e.cookProgress+=n,e.cookProgress>=r.time&&(e.cookProgress=0,e.inputCount--,e.inputCount<=0&&(e.inputItem=0),e.outputItem=r.output,e.outputCount=(e.outputCount||0)+1)):e.cookProgress=Math.max(0,e.cookProgress-n*.5)):e.cookProgress=0}PS()&&ar()}function OS(){ti=document.createElement("div"),ti.id="furnace-modal",Object.assign(ti.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"460px",padding:"24px",borderRadius:"18px",background:"rgba(15, 23, 42, 0.96)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(249, 115, 22, 0.15)",zIndex:"150",display:"none",color:"#f8fafc",fontFamily:"'Outfit', 'Segoe UI', sans-serif",backdropFilter:"blur(16px)"}),ti.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">🔥</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#f97316;">FORNALHA & FUNDIÇÃO</h2>
      </div>
      <button id="close-furnace-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <!-- Smelting Chamber -->
    <div style="display:flex; align-items:center; justify-content:center; gap:24px; margin-bottom:20px; background:rgba(30,41,59,0.6); padding:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.06);">
      <!-- Left Column: Input + Fire + Fuel -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div id="furnace-input-slot" style="width:48px; height:48px; border-radius:8px; background:rgba(15,23,42,0.85); border:2px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;" title="Coloque Minério de Ferro ou Carne Crua"></div>
        
        <div id="furnace-flame" style="font-size:20px; opacity:0.3; transition:opacity 0.2s;">🔥</div>
        
        <div id="furnace-fuel-slot" style="width:48px; height:48px; border-radius:8px; background:rgba(15,23,42,0.85); border:2px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;" title="Coloque Carvão ou Madeira como combustível"></div>
      </div>

      <!-- Center: Progress Arrow -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:4px;">
        <div style="font-size:12px; font-weight:700; color:#cbd5e1; letter-spacing:1px;">FUNDIÇÃO</div>
        <div style="width:80px; height:10px; background:rgba(15,23,42,0.9); border-radius:5px; overflow:hidden; border:1px solid rgba(255,255,255,0.15);">
          <div id="furnace-progress-bar" style="width:0%; height:100%; background:linear-gradient(90deg, #f97316, #eab308); transition:width 0.1s;"></div>
        </div>
        <div style="font-size:22px; color:#f97316;">➜</div>
      </div>

      <!-- Right Column: Output Product -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <div id="furnace-output-slot" style="width:58px; height:58px; border-radius:10px; background:rgba(15,23,42,0.9); border:2.5px solid #f97316; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative; box-shadow:0 0 16px rgba(249,115,22,0.3);" title="Clique para coletar o item fundido"></div>
        <span style="font-size:11px; color:#cbd5e1; font-weight:700;">PRODUTO</span>
      </div>
    </div>

    <!-- Quick Player Hotbar Transfer -->
    <div style="font-size:12px; font-weight:700; color:#94a3b8; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">SEU INVENTÁRIO (Clique para transferir)</div>
    <div id="furnace-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
  `,document.body.appendChild(ti),document.getElementById("close-furnace-btn").addEventListener("click",IS),document.getElementById("furnace-output-slot").addEventListener("click",()=>{if(!Pn)return;const n=Li.get(Pn);!n||n.outputItem===0||un(n.outputItem)&&(ur(),n.outputCount--,n.outputCount<=0&&(n.outputItem=0),ar())}),document.getElementById("furnace-input-slot").addEventListener("click",()=>{if(!Pn)return;const n=Li.get(Pn);n&&n.inputItem>0&&un(n.inputItem)&&(n.inputCount--,n.inputCount<=0&&(n.inputItem=0),ar())}),document.getElementById("furnace-fuel-slot").addEventListener("click",()=>{if(!Pn)return;const n=Li.get(Pn);n&&n.fuelItem>0&&un(n.fuelItem)&&(n.fuelCount--,n.fuelCount<=0&&(n.fuelItem=0),ar())})}function ar(){if(!Pn)return;const n=Li.get(Pn);if(!n)return;const t=document.getElementById("furnace-input-slot"),e=document.getElementById("furnace-fuel-slot"),i=document.getElementById("furnace-output-slot"),r=document.getElementById("furnace-flame"),o=document.getElementById("furnace-progress-bar"),s=document.getElementById("furnace-hotbar-grid");if(!t||!e||!i||!r||!o||!s)return;if(t.innerHTML="",n.inputItem>0){const f=Te(n.inputItem,36);if(t.appendChild(f),n.inputCount>1){const d=document.createElement("span");d.style.cssText="position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;",d.textContent=n.inputCount,t.appendChild(d)}}if(e.innerHTML="",n.fuelItem>0){const f=Te(n.fuelItem,36);if(e.appendChild(f),n.fuelCount>1){const d=document.createElement("span");d.style.cssText="position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;",d.textContent=n.fuelCount,e.appendChild(d)}}r.style.opacity=n.burnTimeRemaining>0?"1":"0.25";const a=n.inputItem>0?$s[n.inputItem]:null,l=a?Math.min(100,Math.round(n.cookProgress/a.time*100)):0;if(o.style.width=`${l}%`,i.innerHTML="",n.outputItem>0){const f=Te(n.outputItem,44);if(i.appendChild(f),n.outputCount>1){const d=document.createElement("span");d.style.cssText="position:absolute; bottom:2px; right:4px; font-size:13px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;",d.textContent=n.outputCount,i.appendChild(d)}}s.innerHTML="";const c=Zo();c.forEach((f,d)=>{const h=document.createElement("div");if(h.style.cssText="width:40px; height:40px; border-radius:6px; background:rgba(30,41,59,0.85); border:1.5px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; cursor:pointer;",f>0){const m=Te(f,30);h.appendChild(m),h.title=`${fr[f]||"Item"} (Clique para colocar na Fornalha)`,h.addEventListener("click",()=>{$s[f]?(n.inputItem===0||n.inputItem===f)&&(n.inputItem=f,n.inputCount=(n.inputCount||0)+1,c[d]=0,ar()):lc[f]&&(n.fuelItem===0||n.fuelItem===f)&&(n.fuelItem=f,n.fuelCount=(n.fuelCount||0)+1,c[d]=0,ar())})}s.appendChild(h)})}const Oi=new Map;let Zs=null,ei=null;function NS(n,t,e){const i=`${n},${t},${e}`;return Oi.has(i)||Oi.set(i,new Array(27).fill(0)),Oi.get(i)}function DS(n,t,e){const i=`${n},${t},${e}`;return Oi.has(i)?Oi.get(i).filter(o=>o>0):[]}function US(n,t,e){const i=`${n},${t},${e}`;Oi.has(i)&&Oi.delete(i)}function FS(n,t,e){Zs=`${n},${t},${e}`,NS(n,t,e),ei||GS(),ei.style.display="block",lo(pe.CHEST),Ui(!0),cc()}function BS(){ei&&(ei.style.display="none",Zs=null,ri(pe.CHEST),Ui(!1))}function GS(){ei=document.createElement("div"),ei.id="chest-modal",Object.assign(ei.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"490px",padding:"24px",borderRadius:"18px",background:"rgba(15, 23, 42, 0.96)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(234, 179, 8, 0.2)",zIndex:"150",display:"none",color:"#f8fafc",fontFamily:"'Outfit', 'Segoe UI', sans-serif",backdropFilter:"blur(16px)"}),ei.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">📦</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#eab308;">BAÚ DE ARMAZENAMENTO (27 SLOTS)</h2>
      </div>
      <button id="close-chest-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <!-- Chest 27 Storage Slots -->
    <div style="font-size:11px; font-weight:800; color:#94a3b8; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Conteúdo do Baú (Clique para retirar)</div>
    <div id="chest-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px; margin-bottom:18px; background:rgba(30,41,59,0.5); padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.06);"></div>

    <!-- Quick Player Hotbar Transfer -->
    <div style="font-size:11px; font-weight:800; color:#4ade80; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Seu Inventário Rápido (Clique para guardar no baú)</div>
    <div id="chest-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
  `,document.body.appendChild(ei),document.getElementById("close-chest-btn").addEventListener("click",BS)}function cc(){if(!Zs)return;const n=Oi.get(Zs);if(!n)return;const t=document.getElementById("chest-grid"),e=document.getElementById("chest-hotbar-grid");if(!t||!e)return;t.innerHTML="",n.forEach((r,o)=>{const s=document.createElement("div");if(s.style.cssText=`
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background: rgba(15, 23, 42, 0.85);
      border: 1.5px solid ${r>0?"rgba(234, 179, 8, 0.6)":"rgba(255, 255, 255, 0.1)"};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    `,r>0){const a=Te(r,32);s.appendChild(a),s.title=`${fr[r]||"Item"} (Clique para retirar)`}s.addEventListener("click",()=>{r>0&&un(r)&&(n[o]=0,ur(),cc())}),t.appendChild(s)}),e.innerHTML="";const i=Zo();i.forEach((r,o)=>{const s=document.createElement("div");if(s.style.cssText=`
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background: rgba(30, 41, 59, 0.85);
      border: 1.5px solid ${r>0?"rgba(74, 222, 128, 0.5)":"rgba(255, 255, 255, 0.1)"};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    `,r>0){const a=Te(r,32);s.appendChild(a),s.title=`${fr[r]||"Item"} (Clique para guardar no baú)`,s.addEventListener("click",()=>{const l=n.findIndex(c=>c===0);l!==-1&&(n[l]=r,i[o]=0,ur(),cc())})}e.appendChild(s)})}let li=null,rr=null,Ze=null,kt=null,ye=u.WOODEN_SWORD,zo=!1,or=!1,bn=0,wo={x:NaN,y:NaN,z:NaN},Ja=0;const Nc=new Map,HS=new ht(1.002,1.002,1.002),kS=new fx(HS),VS=new ed({color:0,linewidth:2,transparent:!0,opacity:.6}),zS=new ht(1.006,1.006,1.006),Td=new ui({color:1973067,wireframe:!0,transparent:!0,opacity:0});function WS(n){li=n,rr=new lx(kS,VS),rr.visible=!1,li.add(rr),Ze=new ot(zS,Td),Ze.visible=!1,li.add(Ze),window.addEventListener("mousedown",YS),window.addEventListener("mouseup",KS),window.addEventListener("blur",()=>{zo=!1,or=!1,bn=0,Ze&&(Ze.visible=!1)})}function XS(n=.016){if(qS(n),!co()||Uo()){rr.visible=!1,Ze.visible=!1,kt=null,or=!1,zo=!1,bn=0;return}const t=Ko();if(!t)return;const e=new N(0,0,-1);e.applyQuaternion(t.quaternion);const i=kv(t.position,e);if(i)if(kt=i,rr.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),rr.visible=!0,(i.hit.x!==wo.x||i.hit.y!==wo.y||i.hit.z!==wo.z)&&(wo={x:i.hit.x,y:i.hit.y,z:i.hit.z},bn=0),zo&&or){const r=ln(i.hit.x,i.hit.y,i.hit.z);if(r!==u.AIR&&r!==u.WATER){const o=Iv(r),s=Pv(r,ye);if(bn+=n*s/o,Ja+=n,Ja>=.22&&(Ja=0,Ex(r),ac(i.hit.x,i.hit.y,i.hit.z,r)),Ze.position.set(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5),Ze.visible=!0,Td.opacity=qh.clamp(bn*.85,.15,.9),bn>=1){if(xx(),ac(i.hit.x,i.hit.y,i.hit.z,r),r===u.CHEST&&(DS(i.hit.x,i.hit.y,i.hit.z).forEach(l=>{Ge(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,l)}),US(i.hit.x,i.hit.y,i.hit.z)),r===u.GRASS&&Math.random()<.35&&Ge(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,u.WHEAT_SEEDS),r===u.WHEAT_STAGE_3)Ge(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,u.WHEAT),Ge(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,u.WHEAT_SEEDS),Nc.delete(`${i.hit.x},${i.hit.y},${i.hit.z}`);else{const a=dd(r);a>0&&Ge(i.hit.x+.5,i.hit.y+.5,i.hit.z+.5,a)}Pi(li,i.hit.x,i.hit.y,i.hit.z,u.AIR),bn=0,or=!1,Ze.visible=!1}}}else Ze.visible=!1,bn=0;else kt=null,rr.visible=!1,Ze.visible=!1,bn=0,or=!1}function qS(n){for(const[t,e]of Nc.entries())e.timer+=n,e.timer>=16&&(e.timer=0,e.stage===1?(e.stage=2,Pi(li,e.x,e.y,e.z,u.WHEAT_STAGE_2)):e.stage===2&&(e.stage=3,Pi(li,e.x,e.y,e.z,u.WHEAT_STAGE_3)))}function YS(n){if(!co()||Uo())return;const t=Ko();if(!t)return;const e=new N(0,0,-1);if(e.applyQuaternion(t.quaternion),n.button===0){zo=!0;const i=cS(t.position,e,3.8);if(i){const r=ye===u.IRON_SWORD,o=ye===u.STONE_SWORD,s=ye===u.WOODEN_SWORD,a=ye===u.IRON_PICKAXE||ye===u.STONE_PICKAXE||ye===u.WOODEN_PICKAXE,l=r?7:o?5:s?4:a?3:2;rd(),Lc(i,l,e);return}if(kt){if(ln(kt.hit.x,kt.hit.y,kt.hit.z)===u.TNT){uS(kt.hit.x,kt.hit.y,kt.hit.z);return}or=!0,wo={x:kt.hit.x,y:kt.hit.y,z:kt.hit.z}}}else if(n.button===2){if(n.preventDefault(),ye===u.BOW&&tM(u.ARROW)){Qa(u.ARROW),dS(t.position,e);return}if(Av(ye)){const i=wv(ye);if(i>0){mM(i),ur(),Qa(ye);return}}if(kt){const i=ln(kt.hit.x,kt.hit.y,kt.hit.z);if(Tv(ye)&&(i===u.GRASS||i===u.DIRT)){bx(),Pi(li,kt.hit.x,kt.hit.y,kt.hit.z,u.FARMLAND);return}if(ye===u.WHEAT_SEEDS&&i===u.FARMLAND){const r=kt.hit.y+1;if(r<64&&ln(kt.hit.x,r,kt.hit.z)===u.AIR){Ju(),Pi(li,kt.hit.x,r,kt.hit.z,u.WHEAT_STAGE_1),Nc.set(`${kt.hit.x},${r},${kt.hit.z}`,{x:kt.hit.x,y:r,z:kt.hit.z,stage:1,timer:0}),Qa(u.WHEAT_SEEDS);return}}if(i===u.CRAFTING_TABLE){TS();return}if(i===u.FURNACE||i===u.FURNACE_LIT){CS(kt.hit.x,kt.hit.y,kt.hit.z);return}if(i===u.CHEST){FS(kt.hit.x,kt.hit.y,kt.hit.z);return}if(yv(ye)){const{prev:r}=kt;r.y>=0&&r.y<64&&ln(r.x,r.y,r.z)===u.AIR&&(Ju(),Pi(li,r.x,r.y,r.z,ye))}}}}function KS(n){n.button===0&&(zo=!1,or=!1,bn=0,Ze&&(Ze.visible=!1))}function $S(n){ye=n}function ZS(){return ye}const hf=[u.WOODEN_SWORD,u.WOODEN_PICKAXE,u.GRASS,u.DIRT,u.WOOD_LOG,u.COBBLESTONE,u.TORCH,u.WATER,0],De=new Array(36).fill(0);for(let n=0;n<hf.length;n++)De[n]=hf[n];const vn=[0,0,0,0];let Ad=0,An=null,Ln=null;function bd(){Ln||(Ln=document.createElement("div"),Ln.id="inventory-modal",Object.assign(Ln.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"490px",padding:"24px",borderRadius:"18px",background:"rgba(15, 23, 42, 0.96)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(34, 197, 94, 0.15)",zIndex:"150",display:"none",color:"#f8fafc",fontFamily:"'Outfit', 'Segoe UI', sans-serif",backdropFilter:"blur(16px)"}),Ln.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">🎒</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#4ade80;">INVENTÁRIO & ARMADURA</h2>
      </div>
      <button id="close-inventory-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <!-- Upper Section: Armor Slots + 2×2 Survival Crafting -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; background:rgba(30,41,59,0.5); padding:10px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.06);">
      <!-- Armor Slots -->
      <div style="display:flex; flex-direction:column; gap:4px;">
        <div style="font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; letter-spacing:1px;">Armadura</div>
        <div id="inv-armor-grid" style="display:flex; gap:6px;"></div>
      </div>

      <!-- 2×2 Crafting Matrix -->
      <div style="display:flex; align-items:center; gap:10px; background:rgba(15,23,42,0.7); padding:6px 10px; border-radius:10px; border:1px solid rgba(255,255,255,0.08);">
        <button id="open-recipe-book-inv" title="Ver catálogo de receitas" style="background:linear-gradient(135deg, #3b82f6, #1d4ed8); border:1px solid #60a5fa; color:#fff; font-size:11px; font-weight:700; padding:5px 9px; border-radius:6px; cursor:pointer; display:flex; align-items:center; gap:4px; box-shadow:0 2px 6px rgba(59,130,246,0.4);">
          <span>❓</span> Receitas
        </button>
        <div id="inv-craft-2x2-grid" style="display:grid; grid-template-columns:repeat(2, 38px); gap:4px;"></div>
        <span style="font-size:18px; color:#4ade80;">➜</span>
        <div id="inv-craft-2x2-output" style="width:44px; height:44px; border-radius:6px; background:rgba(30,41,59,0.9); border:2px solid #22c55e; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;" title="Produto Forjado"></div>
      </div>
    </div>

    <!-- Main 27 Storage Slots -->
    <div style="font-size:12px; font-weight:700; color:#94a3b8; margin-bottom:6px; text-transform:uppercase; letter-spacing:1px;">Armazenamento Geral (27 slots)</div>
    <div id="inv-storage-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px; margin-bottom:16px;"></div>

    <!-- Bottom 9 Hotbar Slots -->
    <div style="font-size:12px; font-weight:700; color:#4ade80; margin-bottom:6px; text-transform:uppercase; letter-spacing:1px;">Barra Rápida (1..9)</div>
    <div id="inv-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
  `,document.body.appendChild(Ln),document.getElementById("close-inventory-btn").addEventListener("click",Rd),document.getElementById("open-recipe-book-inv").addEventListener("click",yd),window.addEventListener("keydown",n=>{n.code==="KeyE"&&jS()}),Gn())}function jS(){Dc()?Rd():JS()}function JS(){Ln||bd(),Ln.style.display="block",lo(pe.INVENTORY),Ui(!0),Gn()}function Rd(){if(Ln){Ln.style.display="none",ri(pe.INVENTORY),Ui(!1);for(let n=0;n<4;n++)sn[n]>0&&(un(sn[n]),sn[n]=0);eo()}}function Dc(){return sd(pe.INVENTORY)}function Zo(){return De.slice(0,9)}function QS(n){Ad=n,eo()}function wd(){let n=0;for(let t=0;t<4;t++)vn[t]>0&&(n+=Rv(vn[t]));return n}function un(n){if(!n||n===0)return!1;for(let t=0;t<9;t++)if(De[t]===0)return De[t]=n,Gn(),eo(),!0;for(let t=9;t<36;t++)if(De[t]===0)return De[t]=n,Gn(),!0;return!1}function tM(n){return De.some(t=>t===n)}function Qa(n){const t=De.findIndex(e=>e===n);return t!==-1?(De[t]=0,Gn(),eo(),!0):!1}function eo(){const n=De[Ad]||0;$S(n);for(let t=0;t<9;t++){const e=document.getElementById(`hotbar-slot-${t}`);if(e&&(e.innerHTML="",De[t]>0)){const i=Te(De[t],38);e.appendChild(i)}}}function Gn(){const n=document.getElementById("inv-armor-grid"),t=document.getElementById("inv-craft-2x2-grid"),e=document.getElementById("inv-craft-2x2-output"),i=document.getElementById("inv-storage-grid"),r=document.getElementById("inv-hotbar-grid");if(!n||!t||!e||!i||!r)return;n.innerHTML="";const o=["Capacete","Peitoral","Calças","Botas"];for(let s=0;s<4;s++){const a=document.createElement("div");if(a.style.cssText="width:38px; height:38px; border-radius:6px; background:rgba(15,23,42,0.85); border:1.5px solid #38bdf8; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;",a.title=`Slot de ${o[s]}`,vn[s]>0){const l=Te(vn[s],30);a.appendChild(l)}else{const l=document.createElement("span");l.style.cssText="font-size:14px; opacity:0.35; color:#38bdf8;",l.textContent=["🛡️","🦺","👖","👢"][s],a.appendChild(l)}a.addEventListener("click",()=>{vn[s]>0&&un(vn[s])&&(vn[s]=0,Gn())}),n.appendChild(a)}t.innerHTML="";for(let s=0;s<4;s++){const a=document.createElement("div");if(a.style.cssText="width:38px; height:38px; border-radius:6px; background:rgba(30,41,59,0.85); border:1.5px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;",sn[s]>0){const l=Te(sn[s],28);a.appendChild(l)}a.addEventListener("click",()=>{sn[s]>0&&(un(sn[s]),sn[s]=0,uc(),Gn())}),t.appendChild(a)}if(e.innerHTML="",An&&An.result>0){const s=Te(An.result,34);if(e.appendChild(s),An.count>1){const a=document.createElement("span");a.style.cssText="position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;",a.textContent=An.count,e.appendChild(a)}}e.onclick=()=>{if(An&&An.result>0){for(let s=0;s<An.count;s++)un(An.result);ur();for(let s=0;s<4;s++)sn[s]=0;uc(),Gn()}},i.innerHTML="";for(let s=9;s<36;s++)pf(s,i);r.innerHTML="";for(let s=0;s<9;s++)pf(s,r,!0)}function pf(n,t,e=!1){const i=document.createElement("div");i.style.cssText=`
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background: ${e?"rgba(30, 41, 59, 0.9)":"rgba(15, 23, 42, 0.8)"};
    border: ${e?"1.5px solid rgba(74, 222, 128, 0.4)":"1px solid rgba(255, 255, 255, 0.12)"};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  `;const r=De[n];if(r>0){const o=Te(r,34);i.appendChild(o),i.title=fr[r]||"Item"}i.addEventListener("click",()=>{if(r>0&&bv(r)){let o=-1;if(r===u.IRON_HELMET&&(o=0),r===u.IRON_CHESTPLATE&&(o=1),r===u.IRON_LEGGINGS&&(o=2),r===u.IRON_BOOTS&&(o=3),o!==-1&&vn[o]===0){vn[o]=r,De[n]=0,ur(),Gn(),eo();return}}if(r>0){const o=sn.findIndex(s=>s===0);o!==-1&&(sn[o]=r,De[n]=0,uc(),Gn(),eo())}}),t.appendChild(i)}function uc(){An=Sd(sn,2,2)}const _e=.3,Co=1.8,js=1.62,mf=28,eM=8.6,nM=5.8,iM=14,gf=10,rM=3.6;let vo=0;const hr=20,oM=6,sM=2,aM=5,lM=.5,_f=3.2;let Un=null;const nt=new N;let At=new N,He=hr,jn=!1,On=!1,Zn=!1,Io=!1,Po=0,Lo=!1,Js=0,Qs=0,ws=0,Ji=0,Rn=!1,So=0,Mo=0;const Lr=[];let xf=!1;function cM(){Un=Ko(),He=hr,At.set(0,0,0),On=!1;const n=Pc();nt.set(n.x,n.y,n.z),Ji=nt.y,Rn=!1,Un&&Un.position.set(nt.x,nt.y+js,nt.z)}function Cd(){return He}function uM(){return hr}function fM(){return Js}function dM(){return On}function Fi(){return nt}function hM(){return{onGround:jn,moving:Lo,inWater:Zn,submerged:Io,isFlying:On}}function no(n,t=null){if(He<=0)return;const e=wd(),i=Math.min(.8,e*.04),r=Math.max(1,n*(1-i));He=Math.max(0,He-r),Js=1,Qs=0,vx(),t&&(At.x+=t.x*5,At.z+=t.z*5,At.y=3.5)}function pM(n){He<=0||(He=Math.min(hr,He+n))}function mM(n){pM(n)}function vf(){He=hr,At.set(0,0,0),jn=!1,On=!1,Po=0,Qs=0;const n=Pc();nt.set(n.x,n.y,n.z),Ji=nt.y,Rn=!1,Un&&Un.position.set(nt.x,nt.y+js,nt.z)}function gM(n,t,e){return t<0?!0:Ic(ln(n,t,e))}function Xi(n,t,e){const i=Math.floor(n-_e+.001),r=Math.floor(n+_e-.001),o=Math.floor(t),s=Math.floor(t+Co-.001),a=Math.floor(e-_e+.001),l=Math.floor(e+_e-.001);for(let c=o;c<=s;c++)for(let f=a;f<=l;f++)for(let d=i;d<=r;d++)if(gM(d,c,f))return!0;return!1}function Sf(n,t,e){return ln(n,t,e)===u.WATER}function _M(n){if(Un||(Un=Ko()),!Un)return;const t=co();Js=Math.max(0,Js-n*2),Zn=Sf(Math.floor(nt.x),Math.floor(nt.y+.2),Math.floor(nt.z)),Io=Sf(Math.floor(nt.x),Math.floor(nt.y+js),Math.floor(nt.z));const e=t&&yn("Space"),i=performance.now()/1e3;if(e&&!xf){for(Mo=.15,Lr.push(i);Lr.length>0&&i-Lr[0]>.55;)Lr.shift();Lr.length>=3&&(On=!On,At.set(0,0,0),Lr.length=0,Rn=!1,_x(On))}xf=e,Mo>0&&(Mo-=n),jn?So=.12:So=Math.max(0,So-n);let r=0,o=0;t&&(yn("KeyW")&&(r+=1),yn("KeyS")&&(r-=1),yn("KeyD")&&(o+=1),yn("KeyA")&&(o-=1));const s=Un.rotation.y,a=-Math.sin(s),l=-Math.cos(s),c=Math.cos(s),f=-Math.sin(s);let d=0,h=0;if(r!==0||o!==0){d=a*r+c*o,h=l*r+f*o;const m=Math.hypot(d,h);m>.001&&(d/=m,h/=m)}if(Lo=r!==0||o!==0,On){Rn=!1;const m=iM,_=1-Math.exp(-65*n);At.x+=(d*(Lo?m:0)-At.x)*_,At.z+=(h*(Lo?m:0)-At.z)*_;let x=0;t&&(yn("Space")&&(x+=gf),(yn("ShiftLeft")||yn("ShiftRight"))&&(x-=gf)),At.y+=(x-At.y)*_,nt.x+=At.x*n,Xi(nt.x,nt.y,nt.z)&&(At.x>0?nt.x=Math.floor(nt.x+_e)-_e-.001:At.x<0&&(nt.x=Math.floor(nt.x-_e)+1+_e+.001),At.x=0),nt.z+=At.z*n,Xi(nt.x,nt.y,nt.z)&&(At.z>0?nt.z=Math.floor(nt.z+_e)-_e-.001:At.z<0&&(nt.z=Math.floor(nt.z-_e)+1+_e+.001),At.z=0),nt.y+=At.y*n,Xi(nt.x,nt.y,nt.z)&&(At.y>0?nt.y=Math.floor(nt.y+Co)-Co-.001:At.y<0&&(nt.y=Math.floor(nt.y)+1),At.y=0)}else{const m=(jn||So>0)&&!Zn;Mo>0&&m?(At.y=eM,jn=!1,So=0,Mo=0,Ji=nt.y,Rn=!1,id()):Zn&&e&&(At.y=Math.max(At.y,4.5),Rn=!1);const _=Zn?mf*.3:mf;At.y-=_*n;const x=Zn?8:36;At.y<-x&&(At.y=-x),At.y<0?Rn||(Rn=!0,Ji=nt.y):(Rn=!1,Ji=nt.y);const g=(Io?.7:1)*(Zn?rM:nM);if(Lo){const E=1-Math.exp(-65*n);At.x+=(d*g-At.x)*E,At.z+=(h*g-At.z)*E;const y=Math.hypot(At.x,At.z);if(jn&&!Zn&&y>1.2&&!On){if(vo+=n,vo>=.42){vo=0;const U=ln(Math.floor(nt.x),Math.floor(nt.y-.2),Math.floor(nt.z));Mx(U)}}else vo=0}else{const E=Math.exp(-14*n);At.x*=E,At.z*=E,vo=0}const p=(E,y)=>{if(!jn)return!1;const U=.55;return Xi(nt.x+E,nt.y+U,nt.z+y)?!1:(nt.y+=U,!0)};nt.x+=At.x*n,Xi(nt.x,nt.y,nt.z)&&(p(0,0)||(At.x>0?nt.x=Math.floor(nt.x+_e)-_e-.001:At.x<0&&(nt.x=Math.floor(nt.x-_e)+1+_e+.001),At.x=0)),nt.z+=At.z*n,Xi(nt.x,nt.y,nt.z)&&(p(0,0)||(At.z>0?nt.z=Math.floor(nt.z+_e)-_e-.001:At.z<0&&(nt.z=Math.floor(nt.z-_e)+1+_e+.001),At.z=0));const b=At.y<0;if(nt.y+=At.y*n,jn=!1,Xi(nt.x,nt.y,nt.z))if(b){jn=!0;const E=Math.floor(nt.y)+1,y=Math.max(0,Ji-E);if(nt.y=E,At.y=0,!Zn&&y>_f){const U=Math.floor((y-_f)*1.5);U>0&&no(U)}Rn=!1,Ji=nt.y}else nt.y=Math.floor(nt.y+Co)-Co-.001,At.y=0}nt.y<-10&&vf(),Un.position.set(nt.x,nt.y+js,nt.z),Io&&!On?(Po+=n,Po>oM&&no(sM*n)):Po=Math.max(0,Po-n*2.5),He>0&&He<hr&&!Io&&(Qs+=n,Qs>aM&&(He=Math.min(hr,He+lM*n))),He<=0?(ws+=n,t&&yn("Space")&&ws>.8&&(vf(),ws=0)):ws=0}const Mf=document.getElementById("debug-info");let Ti=null,tl=0,Cs=0,el=60;const xM={[ie.PLAINS]:"Planície Florida",[ie.FOREST]:"Floresta Densa",[ie.DESERT]:"Deserto de Dunas",[ie.SNOWY_MOUNTAINS]:"Picos Nevados",[ie.OCEAN]:"Costa / Oceano"};function vM(){if(!Ti){Ti=document.createElement("div"),Ti.id="fly-badge",Object.assign(Ti.style,{position:"absolute",top:"58px",left:"50%",transform:"translateX(-50%)",padding:"4px 14px",borderRadius:"20px",background:"linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))",border:"1px solid rgba(255,255,255,0.4)",boxShadow:"0 0 15px rgba(59,130,246,0.6)",color:"#ffffff",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase",pointerEvents:"none",zIndex:"25",display:"none",backdropFilter:"blur(4px)",animation:"pulse 1.8s infinite"}),Ti.innerHTML='⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';const n=document.getElementById("hud");n&&n.appendChild(Ti)}}function SM(n,t){if(vM(),tl++,Cs+=n,Cs>=.5&&(el=Math.round(tl/Cs),tl=0,Cs=0),Mf&&t.position){const e=t.position,i=to(Math.floor(e.x),Math.floor(e.z)),r=xM[i]||"Desconhecido",o=jv(),s=ua(),a=s?"☀️":"🌙";Mf.innerHTML=`<b>FPS:</b> <span style="color:${el>=50?"#4ade80":"#f87171"}">${el}</span><br><b>XYZ:</b> ${e.x.toFixed(1)} / ${e.y.toFixed(1)} / ${e.z.toFixed(1)}<br><b>Bioma:</b> <span style="color:#38bdf8;">${r}</span><br><b>Hora:</b> ${a} <span style="color:#fde047;">${o}</span> (${s?"Dia":"Noite"})`}Ti&&(Ti.style.display=dM()?"block":"none")}let ta=0,fc=null,Gr=null,Ef=!1;function MM(){const n=document.getElementById("hud"),t=document.createElement("div");t.id="hotbar-frame",Object.assign(t.style,{position:"absolute",bottom:"14px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"4px",padding:"5px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.85)",border:"2px solid rgba(255,255,255,0.15)",boxShadow:"0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",pointerEvents:"none",zIndex:"20"}),fc=t;for(let e=0;e<9;e++){const i=document.createElement("div");i.className="hotbar-slot",i.dataset.index=e,Object.assign(i.style,{width:"46px",height:"46px",borderRadius:"6px",border:"2px solid rgba(0,0,0,0.55)",background:"rgba(30, 41, 59, 0.9)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"75% 75%",position:"relative",transition:"border-color 0.15s, transform 0.15s, box-shadow 0.15s",cursor:"pointer"});const r=document.createElement("span");Object.assign(r.style,{position:"absolute",bottom:"1px",right:"3px",fontSize:"11px",color:"#fff",textShadow:"0 1px 2px #000",fontWeight:"bold",opacity:"0.85"}),r.textContent=e+1,i.appendChild(r),t.appendChild(i)}n.appendChild(t),Gr=document.createElement("div"),Gr.id="hotbar-name",Object.assign(Gr.style,{position:"absolute",bottom:"72px",left:"50%",transform:"translateX(-50%)",color:"#fff",fontSize:"13px",fontWeight:"600",letterSpacing:"0.5px",padding:"4px 14px",borderRadius:"12px",background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255,255,255,0.18)",backdropFilter:"blur(4px)",pointerEvents:"none",zIndex:"20",textAlign:"center",whiteSpace:"nowrap"}),n.appendChild(Gr),Uc()}function EM(){if(!Dc()){for(let n=0;n<9;n++)yn(`Digit${n+1}`)&&Id(n);Ef||(Ef=!0,document.addEventListener("wheel",yM,{passive:!1})),Uc()}}let Is=0;function yM(n){if(!(!co()||Dc())&&(n.preventDefault(),Is+=Math.sign(n.deltaY),Math.abs(Is)>=1)){const t=Is>0?1:-1;Is=0;const e=(ta+t+9)%9;Id(e)}}function Id(n){ta=n,QS(n),Uc()}function Uc(){if(!fc)return;const n=Zo(),t=fc.children;for(let e=0;e<t.length;e++){const i=e===ta,r=n[e]||0;if(t[e].style.borderColor=i?"rgba(74, 222, 128, 0.95)":"rgba(0,0,0,0.55)",t[e].style.transform=i?"scale(1.14) translateY(-3px)":"scale(1)",t[e].style.boxShadow=i?"0 0 14px rgba(74, 222, 128, 0.4), 0 6px 14px rgba(0,0,0,0.6)":"none",t[e].style.zIndex=i?"2":"1",r>0){const o=Te(r,38);o&&(t[e].style.backgroundImage=`url(${o.toDataURL()})`)}else t[e].style.backgroundImage="none"}if(Gr){const e=n[ta]||0;Gr.textContent=fr[e]||""}}let dc=[],Hs=[],Hr=null,Qi=null,Eo=null;function TM(){const n=document.getElementById("hud");Hr=document.createElement("div"),Hr.id="damage-vignette",Hr.style.opacity="0",n.appendChild(Hr);const t=document.createElement("div");t.style.cssText="position:fixed; bottom:82px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; gap:4px; align-items:flex-start; pointer-events:none; z-index:20;",Eo=document.createElement("div"),Eo.id="armor-bar",Eo.style.cssText="display:flex; gap:3px; font-size:16px; color:#38bdf8; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8));";for(let r=0;r<10;r++){const o=document.createElement("span");o.textContent="🛡️",o.style.cssText="font-size:14px; opacity:0; transition:opacity 0.2s;",Hs.push(o),Eo.appendChild(o)}t.appendChild(Eo);const e=document.createElement("div");e.id="health-bar",e.style.cssText="display:flex; gap:3px;";const i=uM()/2;for(let r=0;r<i;r++){const o=document.createElement("span");o.className="heart",o.textContent="♥",dc.push(o),e.appendChild(o)}t.appendChild(e),n.appendChild(t),Qi=document.createElement("div"),Qi.id="death-overlay",Qi.innerHTML='<div class="death-title">☠ VOCÊ MORREU</div><div class="death-hint">Pressione ESPAÇO para renascer</div>',Qi.style.display="none",n.appendChild(Qi)}function AM(){const n=Cd();for(let i=0;i<dc.length;i++){const r=n-i*2;dc[i].className="heart "+(r>=2?"full":r===1?"half":"empty")}const t=wd(),e=Math.floor(t/2);for(let i=0;i<Hs.length;i++)i<e?Hs[i].style.opacity="1":Hs[i].style.opacity="0";Hr&&(Hr.style.opacity=fM()*.75),Qi&&(Qi.style.display=n<=0?"flex":"none")}const nl=new Map;function il(n=14412542){const t=new Ne,e=new Vt({color:n,depthTest:!0}),i=new ot(new ht(.06,.48,.025),e);i.position.set(0,.24,0),t.add(i);const r=new Vt({color:4674921,depthTest:!0}),o=new ot(new ht(.2,.035,.045),r);o.position.set(0,.02,0),t.add(o);const s=new Vt({color:8736014,depthTest:!0}),a=new ot(new ht(.038,.12,.038),s);return a.position.set(0,-.06,0),t.add(a),t}function rl(n=9741240){const t=new Ne,e=new Vt({color:8736014,depthTest:!0}),i=new ot(new ht(.04,.5,.04),e);i.position.set(0,.1,0),t.add(i);const r=new Vt({color:n,depthTest:!0}),o=new ot(new ht(.32,.06,.05),r);return o.position.set(0,.32,0),t.add(o),t}function ol(n=9741240){const t=new Ne,e=new Vt({color:8736014,depthTest:!0}),i=new ot(new ht(.04,.48,.04),e);i.position.set(0,.1,0),t.add(i);const r=new Vt({color:n,depthTest:!0}),o=new ot(new ht(.18,.06,.05),r);return o.position.set(.06,.32,0),t.add(o),t}function bM(){const n=new Ne,t=new Vt({color:7877903,depthTest:!0}),e=new ui({color:16317180,depthTest:!0}),i=new ot(new ht(.035,.26,.035),t);i.position.set(.06,.14,0),i.rotation.z=-.35,n.add(i);const r=new ot(new ht(.035,.26,.035),t);r.position.set(.06,-.14,0),r.rotation.z=.35,n.add(r);const o=new ot(new ht(.045,.1,.045),t);o.position.set(.11,0,0),n.add(o);const s=new ot(new ht(.012,.48,.012),e);return s.position.set(0,0,0),n.add(s),n}function RM(n,t=.22){if(n===u.IRON_SWORD)return il(14412542);if(n===u.STONE_SWORD)return il(9741240);if(n===u.WOODEN_SWORD)return il(11817737);if(n===u.IRON_PICKAXE)return rl(14412542);if(n===u.STONE_PICKAXE)return rl(6583435);if(n===u.WOODEN_PICKAXE)return rl(11817737);if(n===u.IRON_HOE)return ol(14412542);if(n===u.STONE_HOE)return ol(6583435);if(n===u.WOODEN_HOE)return ol(11817737);if(n===u.BOW)return bM();if(n===u.BREAD){const c=new Vt({color:11817737,depthTest:!0});return new ot(new ht(t*.9,t*.45,t*.6),c)}if(n===u.WHEAT){const c=new Vt({color:15381256,depthTest:!0});return new ot(new ht(t*.35,t*.9,t*.35),c)}if(n===u.PORKCHOP){const c=new Vt({color:16020150,depthTest:!0});return new ot(new ht(t,t*.4,t*.8),c)}if(n===u.COOKED_PORKCHOP){const c=new Vt({color:10105874,depthTest:!0});return new ot(new ht(t,t*.4,t*.8),c)}if(n===u.ROTTEN_FLESH){const c=new Vt({color:8702998,depthTest:!0});return new ot(new ht(t,t*.4,t*.8),c)}const e=`${n}:${t}`;if(nl.has(e))return nl.get(e);const i=la[n];if(!i)return null;const r=new ht(t,t,t),o=r.attributes.uv.array,s=[i.side,i.side,i.top,i.bottom,i.side,i.side];for(let c=0;c<6;c++){const f=Cc(s[c]),d=c*8;o[d]=f.uMin,o[d+1]=f.vMax,o[d+2]=f.uMax,o[d+3]=f.vMax,o[d+4]=f.uMin,o[d+5]=f.vMin,o[d+6]=f.uMax,o[d+7]=f.vMin}r.attributes.uv.needsUpdate=!0,r.computeVertexNormals();const a=new Vt({map:aa(),depthTest:!0}),l=new ot(r,a);return nl.set(e,l),l}const Pd=.38,Ld=-.28,Od=-.46,Nd=-.32,Dd=.35,Ud=-.12;let $e=null,sl=null,al=null,Kn=null,Dr=-1,Oo=1,wM=5.6,qi=0;function CM(){const n=Ko();if(!n)return;$e=new Ne;const t=new Vt({color:13011801,depthTest:!0}),e=new Vt({color:43176,depthTest:!0});sl=new ot(new ht(.1,.1,.34),t),sl.position.set(0,0,.1),$e.add(sl),al=new ot(new ht(.108,.108,.14),e),al.position.set(0,0,.22),$e.add(al),Fd(),$e.position.set(Pd,Ld,Od),$e.rotation.set(Nd,Dd,Ud),$e.renderOrder=999,n.add($e),document.addEventListener("mousedown",IM)}function IM(n){co()&&(n.button===0||n.button===2)&&(Oo=0)}function Fd(){const n=ZS();if(n!==Dr&&(Dr=n,Kn&&($e.remove(Kn),Kn=null),Dr>0)){const t=RM(Dr,.22);t&&(Kn=t,fd(Dr)?(Kn.position.set(-.02,.14,-.22),Kn.rotation.set(.2,.3,-.4)):(Kn.position.set(-.02,.08,-.16),Kn.rotation.set(.35,.65,-.2)),$e.add(Kn))}}function PM(n,t){if(!$e)return;const e=co();if($e.visible=e,!e)return;Fd();let i=0,r=0,o=0,s=0,a=0;if(Oo<1){const d=fd(Dr)?6.2:wM;Oo=Math.min(1,Oo+n*d);const h=Math.sin(Oo*Math.PI);i=-h*1.05,r=h*.6,o=-h*.4,s=-h*.09,a=-h*.14}const l=hM();let c=0,f=0;l.onGround&&l.moving?(qi+=n*10,c=Math.cos(qi*.5)*.025,f=Math.abs(Math.sin(qi))*.035):l.isFlying&&l.moving?(qi+=n*6,c=Math.cos(qi*.5)*.015,f=Math.sin(qi)*.015):qi=0,$e.position.set(Pd+c,Ld+f+s,Od+a),$e.rotation.set(Nd+i,Dd+r,Ud+o)}const No={SUNNY:"sunny",RAIN:"rain"};let ll=No.SUNNY,cl=120+Math.random()*60,tr=null,Go=null;const hc=800;function LM(n){Go=new fn;const t=new Float32Array(hc*3);for(let i=0;i<hc*3;i+=3)t[i]=(Math.random()-.5)*40,t[i+1]=Math.random()*25,t[i+2]=(Math.random()-.5)*40;Go.setAttribute("position",new Mn(t,3));const e=new nd({color:9684477,size:.12,transparent:!0,opacity:0});tr=new cx(Go,e),n.add(tr)}function OM(n,t){if(cl-=n,cl<=0&&(cl=90+Math.random()*120,ll=ll===No.SUNNY?No.RAIN:No.SUNNY),tr&&t){tr.position.set(t.x,t.y,t.z);const i=ll!==No.SUNNY?.65:0;if(tr.material.opacity+=(i-tr.material.opacity)*n*2,tr.material.opacity>.01){const r=Go.attributes.position.array;for(let o=1;o<hc*3;o+=3)r[o]-=32*n,r[o]<-5&&(r[o]=20+Math.random()*5);Go.attributes.position.needsUpdate=!0}}}const Bd="voxelcraft_world_save_v03";function NM(){try{const n=Fi(),t=Zo(),e=Cd(),i={timestamp:Date.now(),player:{x:n.x,y:n.y,z:n.z,health:e,hotbar:t,armor:[...vn]}};localStorage.setItem(Bd,JSON.stringify(i))}catch(n){console.warn("Could not save world data:",n)}}function DM(){try{const n=localStorage.getItem(Bd);if(!n)return!1;const t=JSON.parse(n);if(!t||!t.player)return!1;const e=Fi();if(e&&t.player.x!==void 0&&e.set(t.player.x,t.player.y,t.player.z),t.player.armor)for(let i=0;i<4;i++)vn[i]=t.player.armor[i]||0;return!0}catch(n){return console.warn("Could not load world data:",n),!1}}Vd(document);console.log("[VoxelCraft] Building texture atlas...");Ev();const yf=Ux(),cn=Fx();Zv(cn,Bx());LM(cn);Xv(cn);Qv(cn);console.log("[VoxelCraft] Generating world biomes & 3D caves...");Hv(cn);const ve=Pc(),Ri=Ox(window.innerWidth/window.innerHeight,ve);cn.add(Ri);Hx(Ri);Nx(cd());Px(cd());lS(cn);Dn(zt.PIG,ve.x+4,ve.y,ve.z+4);Dn(zt.ZOMBIE,ve.x+14,ve.y,ve.z+12);Dn(zt.SKELETON,ve.x-12,ve.y,ve.z+10);Dn(zt.SPIDER,ve.x+8,ve.y,ve.z-14);Dn(zt.CREEPER,ve.x-8,ve.y,ve.z-12);WS(cn);bd();Md();MM();cM();TM();CM();DM();console.log(`[VoxelCraft v0.4.0] Ready! Spawn at (${ve.x}, ${ve.y}, ${ve.z})`);let ul=0;function UM(n,t){if(wx()){uf(Ri.position,cn),ff(n,cn,Ri,yf);return}Cx()||(_M(n),uf(Ri.position,cn),ff(n,cn,Ri,yf),OM(n,Fi()),LS(n),mS(n),tS(n,t),qv(n),XS(n),EM(),AM(),PM(n),SM(n,{position:Ri.position}),ul+=n,ul>=30&&(ul=0,NM()))}function FM(){Gx(Ri)}Dx(UM,FM);
