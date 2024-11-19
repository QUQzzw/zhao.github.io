(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ol(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},ds=[],bn=()=>{},Ad=()=>!1,Co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Bl=n=>n.startsWith("onUpdate:"),wt=Object.assign,Hl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wd=Object.prototype.hasOwnProperty,et=(n,e)=>wd.call(n,e),Xe=Array.isArray,tr=n=>Po(n)==="[object Map]",Rd=n=>Po(n)==="[object Set]",je=n=>typeof n=="function",bt=n=>typeof n=="string",Us=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",Fh=n=>(_t(n)||je(n))&&je(n.then)&&je(n.catch),Cd=Object.prototype.toString,Po=n=>Cd.call(n),Pd=n=>Po(n).slice(8,-1),Ld=n=>Po(n)==="[object Object]",zl=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,nr=Ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Dd=/-(\w)/g,vi=Lo(n=>n.replace(Dd,(e,t)=>t?t.toUpperCase():"")),Id=/\B([A-Z])/g,Wi=Lo(n=>n.replace(Id,"-$1").toLowerCase()),Oh=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ko=Lo(n=>n?`on${Oh(n)}`:""),Hi=(n,e)=>!Object.is(n,e),Go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Bh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ud=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Nc;const Do=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vl(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=bt(i)?Bd(i):Vl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(bt(n)||_t(n))return n}const Nd=/;(?![^(]*\))/g,Fd=/:([^]+)/,Od=/\/\*[^]*?\*\//g;function Bd(n){const e={};return n.replace(Od,"").split(Nd).forEach(t=>{if(t){const i=t.split(Fd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function kl(n){let e="";if(bt(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=kl(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Hd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zd=Ol(Hd);function Hh(n){return!!n||n===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Vd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kd(){return $t}let ut;const Wo=new WeakSet;class zh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wo.has(this)&&(Wo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fc(this),Gh(this);const e=ut,t=fn;ut=this,fn=!0;try{return this.fn()}finally{Wh(this),ut=e,fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xl(e);this.deps=this.depsTail=void 0,Fc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oa(this)&&this.run()}get dirty(){return Oa(this)}}let Vh=0,ir,sr;function kh(n,e=!1){if(n.flags|=8,e){n.next=sr,sr=n;return}n.next=ir,ir=n}function Gl(){Vh++}function Wl(){if(--Vh>0)return;if(sr){let e=sr;for(sr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ir;){let e=ir;for(ir=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Gh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Xl(i),Gd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Oa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Xh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fr))return;n.globalVersion=fr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Oa(n)){n.flags&=-3;return}const t=ut,i=fn;ut=n,fn=!0;try{Gh(n);const s=n.fn(n._value);(e.version===0||Hi(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ut=t,fn=i,Wh(n),n.flags&=-3}}function Xl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Xl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Gd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let fn=!0;const jh=[];function yi(){jh.push(fn),fn=!1}function Si(){const n=jh.pop();fn=n===void 0?!0:n}function Fc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let fr=0;class Wd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ut||!fn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new Wd(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,qh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,fr++,this.notify(e)}notify(e){Gl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wl()}}}function qh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ba=new WeakMap,zi=Symbol(""),Ha=Symbol(""),dr=Symbol("");function Lt(n,e,t){if(fn&&ut){let i=Ba.get(n);i||Ba.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Yh),s.map=i,s.key=t),s.track()}}function Yn(n,e,t,i,s,r){const o=Ba.get(n);if(!o){fr++;return}const a=l=>{l&&l.trigger()};if(Gl(),e==="clear")o.forEach(a);else{const l=Xe(n),c=l&&zl(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===dr||!Us(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(dr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(zi)),tr(n)&&a(o.get(Ha)));break;case"delete":l||(a(o.get(zi)),tr(n)&&a(o.get(Ha)));break;case"set":tr(n)&&a(o.get(zi));break}}Wl()}function qi(n){const e=ot(n);return e===n?e:(Lt(e,"iterate",dr),An(n)?e:e.map(Zt))}function jl(n){return Lt(n=ot(n),"iterate",dr),n}const Xd={__proto__:null,[Symbol.iterator](){return Xo(this,Symbol.iterator,Zt)},concat(...n){return qi(this).concat(...n.map(e=>Xe(e)?qi(e):e))},entries(){return Xo(this,"entries",n=>(n[1]=Zt(n[1]),n))},every(n,e){return Fn(this,"every",n,e,void 0,arguments)},filter(n,e){return Fn(this,"filter",n,e,t=>t.map(Zt),arguments)},find(n,e){return Fn(this,"find",n,e,Zt,arguments)},findIndex(n,e){return Fn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fn(this,"findLast",n,e,Zt,arguments)},findLastIndex(n,e){return Fn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fn(this,"forEach",n,e,void 0,arguments)},includes(...n){return jo(this,"includes",n)},indexOf(...n){return jo(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return jo(this,"lastIndexOf",n)},map(n,e){return Fn(this,"map",n,e,void 0,arguments)},pop(){return zs(this,"pop")},push(...n){return zs(this,"push",n)},reduce(n,...e){return Oc(this,"reduce",n,e)},reduceRight(n,...e){return Oc(this,"reduceRight",n,e)},shift(){return zs(this,"shift")},some(n,e){return Fn(this,"some",n,e,void 0,arguments)},splice(...n){return zs(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return zs(this,"unshift",n)},values(){return Xo(this,"values",Zt)}};function Xo(n,e,t){const i=jl(n),s=i[e]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const jd=Array.prototype;function Fn(n,e,t,i,s,r){const o=jl(n),a=o!==n&&!An(n),l=o[e];if(l!==jd[e]){const h=l.apply(n,r);return a?Zt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Zt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Oc(n,e,t,i){const s=jl(n);let r=t;return s!==n&&(An(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Zt(a),l,n)}),s[e](r,...i)}function jo(n,e,t){const i=ot(n);Lt(i,"iterate",dr);const s=i[e](...t);return(s===-1||s===!1)&&$l(t[0])?(t[0]=ot(t[0]),i[e](...t)):s}function zs(n,e,t=[]){yi(),Gl();const i=ot(n)[e].apply(n,t);return Wl(),Si(),i}const Yd=Ol("__proto__,__v_isRef,__isVue"),Kh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Us));function qd(n){Us(n)||(n=String(n));const e=ot(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class $h{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?sp:ef:r?Qh:Jh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!s){let l;if(o&&(l=Xd[t]))return l;if(t==="hasOwnProperty")return qd}const a=Reflect.get(e,t,Ht(e)?e:i);return(Us(t)?Kh.has(t):Yd(t))||(s||Lt(e,"get",t),r)?a:Ht(a)?o&&zl(t)?a:a.value:_t(a)?s?tf(a):ql(a):a}}class Zh extends $h{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ys(r);if(!An(i)&&!ys(i)&&(r=ot(r),i=ot(i)),!Xe(e)&&Ht(r)&&!Ht(i))return l?!1:(r.value=i,!0)}const o=Xe(e)&&zl(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,Ht(e)?e:s);return e===ot(s)&&(o?Hi(i,r)&&Yn(e,"set",t,i):Yn(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Yn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Us(t)||!Kh.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",Xe(e)?"length":zi),Reflect.ownKeys(e)}}class Kd extends $h{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $d=new Zh,Zd=new Kd,Jd=new Zh(!0);const za=n=>n,Cr=n=>Reflect.getPrototypeOf(n);function Qd(n,e,t){return function(...i){const s=this.__v_raw,r=ot(s),o=tr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?za:e?Va:Zt;return!e&&Lt(r,"iterate",l?Ha:zi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Pr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ep(n,e){const t={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);n||(Hi(s,a)&&Lt(o,"get",s),Lt(o,"get",a));const{has:l}=Cr(o),c=e?za:n?Va:Zt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Lt(ot(s),"iterate",zi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return n||(Hi(s,a)&&Lt(o,"has",s),Lt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ot(a),c=e?za:n?Va:Zt;return!n&&Lt(l,"iterate",zi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return wt(t,n?{add:Pr("add"),set:Pr("set"),delete:Pr("delete"),clear:Pr("clear")}:{add(s){!e&&!An(s)&&!ys(s)&&(s=ot(s));const r=ot(this);return Cr(r).has.call(r,s)||(r.add(s),Yn(r,"add",s,s)),this},set(s,r){!e&&!An(r)&&!ys(r)&&(r=ot(r));const o=ot(this),{has:a,get:l}=Cr(o);let c=a.call(o,s);c||(s=ot(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Hi(r,u)&&Yn(o,"set",s,r):Yn(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=Cr(r);let l=o.call(r,s);l||(s=ot(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Yn(r,"delete",s,void 0),c},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Qd(s,n,e)}),t}function Yl(n,e){const t=ep(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(et(t,s)&&s in i?t:i,s,r)}const tp={get:Yl(!1,!1)},np={get:Yl(!1,!0)},ip={get:Yl(!0,!1)};const Jh=new WeakMap,Qh=new WeakMap,ef=new WeakMap,sp=new WeakMap;function rp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function op(n){return n.__v_skip||!Object.isExtensible(n)?0:rp(Pd(n))}function ql(n){return ys(n)?n:Kl(n,!1,$d,tp,Jh)}function ap(n){return Kl(n,!1,Jd,np,Qh)}function tf(n){return Kl(n,!0,Zd,ip,ef)}function Kl(n,e,t,i,s){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=op(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function rr(n){return ys(n)?rr(n.__v_raw):!!(n&&n.__v_isReactive)}function ys(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function $l(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function lp(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&Bh(n,"__v_skip",!0),n}const Zt=n=>_t(n)?ql(n):n,Va=n=>_t(n)?tf(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function cp(n){return Ht(n)?n.value:n}const up={get:(n,e,t)=>e==="__v_raw"?n:cp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ht(s)&&!Ht(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function nf(n){return rr(n)?n:new Proxy(n,up)}class hp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Yh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return kh(this,!0),!0}get value(){const e=this.dep.track();return Xh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fp(n,e,t=!1){let i,s;return je(n)?i=n:(i=n.get,s=n.set),new hp(i,s,t)}const Lr={},xo=new WeakMap;let Ii;function dp(n,e=!1,t=Ii){if(t){let i=xo.get(t);i||xo.set(t,i=[]),i.push(n)}}function pp(n,e,t=ht){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:An(M)||s===!1||s===0?pi(M,1):pi(M);let u,h,f,p,_=!1,x=!1;if(Ht(n)?(h=()=>n.value,_=An(n)):rr(n)?(h=()=>c(n),_=!0):Xe(n)?(x=!0,_=n.some(M=>rr(M)||An(M)),h=()=>n.map(M=>{if(Ht(M))return M.value;if(rr(M))return c(M);if(je(M))return l?l(M,2):M()})):je(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){yi();try{f()}finally{Si()}}const M=Ii;Ii=u;try{return l?l(n,3,[p]):n(p)}finally{Ii=M}}:h=bn,e&&s){const M=h,O=s===!0?1/0:s;h=()=>pi(M(),O)}const m=kd(),d=()=>{u.stop(),m&&m.active&&Hl(m.effects,u)};if(r&&e){const M=e;e=(...O)=>{M(...O),d()}}let A=x?new Array(n.length).fill(Lr):Lr;const b=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const O=u.run();if(s||_||(x?O.some((D,R)=>Hi(D,A[R])):Hi(O,A))){f&&f();const D=Ii;Ii=u;try{const R=[O,A===Lr?void 0:x&&A[0]===Lr?[]:A,p];l?l(e,3,R):e(...R),A=O}finally{Ii=D}}}else u.run()};return a&&a(b),u=new zh(h),u.scheduler=o?()=>o(b,!1):b,p=M=>dp(M,!1,u),f=u.onStop=()=>{const M=xo.get(u);if(M){if(l)l(M,4);else for(const O of M)O();xo.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function pi(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ht(n))pi(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)pi(n[i],e,t);else if(Rd(n)||tr(n))n.forEach(i=>{pi(i,e,t)});else if(Ld(n)){for(const i in n)pi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sr(n,e,t,i){try{return i?n(...i):n()}catch(s){Io(s,e,t)}}function Rn(n,e,t,i){if(je(n)){const s=Sr(n,e,t,i);return s&&Fh(s)&&s.catch(r=>{Io(r,e,t)}),s}if(Xe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],e,t,i));return s}}function Io(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){yi(),Sr(r,null,10,[n,l,c]),Si();return}}mp(n,t,s,i,o)}function mp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Ft=[];let xn=-1;const ps=[];let hi=null,us=0;const sf=Promise.resolve();let vo=null;function gp(n){const e=vo||sf;return n?e.then(this?n.bind(this):n):e}function _p(n){let e=xn+1,t=Ft.length;for(;e<t;){const i=e+t>>>1,s=Ft[i],r=pr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Zl(n){if(!(n.flags&1)){const e=pr(n),t=Ft[Ft.length-1];!t||!(n.flags&2)&&e>=pr(t)?Ft.push(n):Ft.splice(_p(e),0,n),n.flags|=1,rf()}}function rf(){vo||(vo=sf.then(af))}function xp(n){Xe(n)?ps.push(...n):hi&&n.id===-1?hi.splice(us+1,0,n):n.flags&1||(ps.push(n),n.flags|=1),rf()}function Bc(n,e,t=xn+1){for(;t<Ft.length;t++){const i=Ft[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ft.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function of(n){if(ps.length){const e=[...new Set(ps)].sort((t,i)=>pr(t)-pr(i));if(ps.length=0,hi){hi.push(...e);return}for(hi=e,us=0;us<hi.length;us++){const t=hi[us];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}hi=null,us=0}}const pr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function af(n){try{for(xn=0;xn<Ft.length;xn++){const e=Ft[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Sr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<Ft.length;xn++){const e=Ft[xn];e&&(e.flags&=-2)}xn=-1,Ft.length=0,of(),vo=null,(Ft.length||ps.length)&&af()}}let Sn=null,lf=null;function Mo(n){const e=Sn;return Sn=n,lf=n&&n.type.__scopeId||null,e}function vp(n,e=Sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&jc(-1);const r=Mo(e);let o;try{o=n(...s)}finally{Mo(r),i._d&&jc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ti(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yi(),Rn(l,t,8,[n.el,a,n,e]),Si())}}const Mp=Symbol("_vte"),yp=n=>n.__isTeleport;function Jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function yo(n,e,t,i,s=!1){if(Xe(n)){n.forEach((_,x)=>yo(_,e&&(Xe(e)?e[x]:e),t,i,s));return}if(or(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&yo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?nc(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,h=a.setupState,f=ot(h),p=h===ht?()=>!1:_=>et(f,_);if(c!=null&&c!==l&&(bt(c)?(u[c]=null,p(c)&&(h[c]=null)):Ht(c)&&(c.value=null)),je(l))Sr(l,a,12,[o,u]);else{const _=bt(l),x=Ht(l);if(_||x){const m=()=>{if(n.f){const d=_?p(l)?h[l]:u[l]:l.value;s?Xe(d)&&Hl(d,r):Xe(d)?d.includes(r)||d.push(r):_?(u[l]=[r],p(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,p(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Kt(m,t)):m()}}}Do().requestIdleCallback;Do().cancelIdleCallback;const or=n=>!!n.type.__asyncLoader,uf=n=>n.type.__isKeepAlive;function Sp(n,e){hf(n,"a",e)}function Ep(n,e){hf(n,"da",e)}function hf(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Uo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)uf(s.parent.vnode)&&Tp(i,e,t,s),s=s.parent}}function Tp(n,e,t,i){const s=Uo(e,n,i,!0);ff(()=>{Hl(i[e],s)},t)}function Uo(n,e,t=Bt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{yi();const a=Er(t),l=Rn(e,t,n,o);return a(),Si(),l});return i?s.unshift(r):s.push(r),r}}const ei=n=>(e,t=Bt)=>{(!_r||n==="sp")&&Uo(n,(...i)=>e(...i),t)},bp=ei("bm"),Ap=ei("m"),wp=ei("bu"),Rp=ei("u"),Cp=ei("bum"),ff=ei("um"),Pp=ei("sp"),Lp=ei("rtg"),Dp=ei("rtc");function Ip(n,e=Bt){Uo("ec",n,e)}const Up=Symbol.for("v-ndc"),ka=n=>n?If(n)?nc(n):ka(n.parent):null,ar=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ka(n.parent),$root:n=>ka(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ql(n),$forceUpdate:n=>n.f||(n.f=()=>{Zl(n.update)}),$nextTick:n=>n.n||(n.n=gp.bind(n.proxy)),$watch:n=>nm.bind(n)}),Yo=(n,e)=>n!==ht&&!n.__isScriptSetup&&et(n,e),Np={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Yo(i,e))return o[e]=1,i[e];if(s!==ht&&et(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,r[e];if(t!==ht&&et(t,e))return o[e]=4,t[e];Ga&&(o[e]=0)}}const u=ar[e];let h,f;if(u)return e==="$attrs"&&Lt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ht&&et(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Yo(s,e)?(s[e]=t,!0):i!==ht&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ht&&et(n,o)||Yo(e,o)||(a=r[0])&&et(a,o)||et(i,o)||et(ar,o)||et(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hc(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ga=!0;function Fp(n){const e=Ql(n),t=n.proxy,i=n.ctx;Ga=!1,e.beforeCreate&&zc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:b,unmounted:M,render:O,renderTracked:D,renderTriggered:R,errorCaptured:P,serverPrefetch:T,expose:S,inheritAttrs:C,components:K,directives:z,filters:Y}=e;if(c&&Op(c,i,null),o)for(const J in o){const V=o[J];je(V)&&(i[J]=V.bind(t))}if(s){const J=s.call(t,t);_t(J)&&(n.data=ql(J))}if(Ga=!0,r)for(const J in r){const V=r[J],ce=je(V)?V.bind(t,t):je(V.get)?V.get.bind(t,t):bn,fe=!je(V)&&je(V.set)?V.set.bind(t):bn,ye=Am({get:ce,set:fe});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Te=>ye.value=Te})}if(a)for(const J in a)df(a[J],i,t,J);if(l){const J=je(l)?l.call(t):l;Reflect.ownKeys(J).forEach(V=>{Gp(V,J[V])})}u&&zc(u,n,"c");function G(J,V){Xe(V)?V.forEach(ce=>J(ce.bind(t))):V&&J(V.bind(t))}if(G(bp,h),G(Ap,f),G(wp,p),G(Rp,_),G(Sp,x),G(Ep,m),G(Ip,P),G(Dp,D),G(Lp,R),G(Cp,A),G(ff,M),G(Pp,T),Xe(S))if(S.length){const J=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(J,V,{get:()=>t[V],set:ce=>t[V]=ce})})}else n.exposed||(n.exposed={});O&&n.render===bn&&(n.render=O),C!=null&&(n.inheritAttrs=C),K&&(n.components=K),z&&(n.directives=z),T&&cf(n)}function Op(n,e,t=bn){Xe(n)&&(n=Wa(n));for(const i in n){const s=n[i];let r;_t(s)?"default"in s?r=ao(s.from||i,s.default,!0):r=ao(s.from||i):r=ao(s),Ht(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function zc(n,e,t){Rn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function df(n,e,t,i){let s=i.includes(".")?wf(t,i):()=>t[i];if(bt(n)){const r=e[n];je(r)&&Ko(s,r)}else if(je(n))Ko(s,n.bind(t));else if(_t(n))if(Xe(n))n.forEach(r=>df(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&Ko(s,r,n)}}function Ql(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>So(l,c,o,!0)),So(l,e,o)),_t(e)&&r.set(e,l),l}function So(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&So(n,r,t,!0),s&&s.forEach(o=>So(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Bp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Bp={data:Vc,props:kc,emits:kc,methods:Zs,computed:Zs,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Zs,directives:Zs,watch:zp,provide:Vc,inject:Hp};function Vc(n,e){return e?n?function(){return wt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function Hp(n,e){return Zs(Wa(n),Wa(e))}function Wa(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Zs(n,e){return n?wt(Object.create(null),n,e):e}function kc(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:wt(Object.create(null),Hc(n),Hc(e??{})):e}function zp(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function pf(){return{app:null,config:{isNativeTag:Ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vp=0;function kp(n,e){return function(i,s=null){je(i)||(i=wt({},i)),s!=null&&!_t(s)&&(s=null);const r=pf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Vp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wm,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...h)):je(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||Vi(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(p,u):n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,nc(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=ms;ms=c;try{return u()}finally{ms=h}}};return c}}let ms=null;function Gp(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function ao(n,e,t=!1){const i=Bt||Sn;if(i||ms){const s=ms?ms._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const mf={},gf=()=>Object.create(mf),_f=n=>Object.getPrototypeOf(n)===mf;function Wp(n,e,t,i=!1){const s={},r=gf();n.propsDefaults=Object.create(null),xf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:ap(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Xp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ot(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(No(n.emitsOptions,f))continue;const p=e[f];if(l)if(et(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=vi(f);s[_]=Xa(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{xf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!et(e,h)&&((u=Wi(h))===h||!et(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Xa(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!et(e,h))&&(delete r[h],c=!0)}c&&Yn(n.attrs,"set","")}function xf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(nr(l))continue;const c=e[l];let u;s&&et(s,u=vi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:No(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ot(t),c=a||ht;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Xa(s,l,h,c[h],n,!et(c,h))}}return o}function Xa(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Er(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}const jp=new WeakMap;function vf(n,e,t=!1){const i=t?jp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!je(n)){const u=h=>{l=!0;const[f,p]=vf(h,e,!0);wt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _t(n)&&i.set(n,ds),ds;if(Xe(r))for(let u=0;u<r.length;u++){const h=vi(r[u]);Gc(h)&&(o[h]=ht)}else if(r)for(const u in r){const h=vi(u);if(Gc(h)){const f=r[u],p=o[h]=Xe(f)||je(f)?{type:f}:wt({},f),_=p.type;let x=!1,m=!0;if(Xe(_))for(let d=0;d<_.length;++d){const A=_[d],b=je(A)&&A.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(m=!1)}else x=je(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||et(p,"default"))&&a.push(h)}}const c=[o,a];return _t(n)&&i.set(n,c),c}function Gc(n){return n[0]!=="$"&&!nr(n)}const Mf=n=>n[0]==="_"||n==="$stable",ec=n=>Xe(n)?n.map(vn):[vn(n)],Yp=(n,e,t)=>{if(e._n)return e;const i=vp((...s)=>ec(e(...s)),t);return i._c=!1,i},yf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Mf(s))continue;const r=n[s];if(je(r))e[s]=Yp(s,r,i);else if(r!=null){const o=ec(r);e[s]=()=>o}}},Sf=(n,e)=>{const t=ec(e);n.slots.default=()=>t},Ef=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},qp=(n,e,t)=>{const i=n.slots=gf();if(n.vnode.shapeFlag&32){const s=e._;s?(Ef(i,e,t),t&&Bh(i,"_",s,!0)):yf(e,i)}else e&&Sf(n,e)},Kp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Ef(s,e,t):(r=!e.$stable,yf(e,s)),o=e}else e&&(Sf(n,e),o={default:1});if(r)for(const a in s)!Mf(a)&&o[a]==null&&delete s[a]},Kt=cm;function $p(n){return Zp(n)}function Zp(n,e){const t=Do();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=bn,insertStaticContent:_}=n,x=(w,v,q,Q=null,$=null,W=null,re=void 0,Z=null,y=!!v.dynamicChildren)=>{if(w===v)return;w&&!Vs(w,v)&&(Q=de(w),Te(w,$,W,!0),w=null),v.patchFlag===-2&&(y=!1,v.dynamicChildren=null);const{type:g,ref:L,shapeFlag:N}=v;switch(g){case Fo:m(w,v,q,Q);break;case mr:d(w,v,q,Q);break;case Zo:w==null&&A(v,q,Q,re);break;case jn:K(w,v,q,Q,$,W,re,Z,y);break;default:N&1?O(w,v,q,Q,$,W,re,Z,y):N&6?z(w,v,q,Q,$,W,re,Z,y):(N&64||N&128)&&g.process(w,v,q,Q,$,W,re,Z,y,Be)}L!=null&&$&&yo(L,w&&w.ref,W,v||w,!v)},m=(w,v,q,Q)=>{if(w==null)i(v.el=a(v.children),q,Q);else{const $=v.el=w.el;v.children!==w.children&&c($,v.children)}},d=(w,v,q,Q)=>{w==null?i(v.el=l(v.children||""),q,Q):v.el=w.el},A=(w,v,q,Q)=>{[w.el,w.anchor]=_(w.children,v,q,Q,w.el,w.anchor)},b=({el:w,anchor:v},q,Q)=>{let $;for(;w&&w!==v;)$=f(w),i(w,q,Q),w=$;i(v,q,Q)},M=({el:w,anchor:v})=>{let q;for(;w&&w!==v;)q=f(w),s(w),w=q;s(v)},O=(w,v,q,Q,$,W,re,Z,y)=>{v.type==="svg"?re="svg":v.type==="math"&&(re="mathml"),w==null?D(v,q,Q,$,W,re,Z,y):T(w,v,$,W,re,Z,y)},D=(w,v,q,Q,$,W,re,Z)=>{let y,g;const{props:L,shapeFlag:N,transition:k,dirs:H}=w;if(y=w.el=o(w.type,W,L&&L.is,L),N&8?u(y,w.children):N&16&&P(w.children,y,null,Q,$,qo(w,W),re,Z),H&&Ti(w,null,Q,"created"),R(y,w,w.scopeId,re,Q),L){for(const oe in L)oe!=="value"&&!nr(oe)&&r(y,oe,null,L[oe],W,Q);"value"in L&&r(y,"value",null,L.value,W),(g=L.onVnodeBeforeMount)&&_n(g,Q,w)}H&&Ti(w,null,Q,"beforeMount");const le=Jp($,k);le&&k.beforeEnter(y),i(y,v,q),((g=L&&L.onVnodeMounted)||le||H)&&Kt(()=>{g&&_n(g,Q,w),le&&k.enter(y),H&&Ti(w,null,Q,"mounted")},$)},R=(w,v,q,Q,$)=>{if(q&&p(w,q),Q)for(let W=0;W<Q.length;W++)p(w,Q[W]);if($){let W=$.subTree;if(v===W||Cf(W.type)&&(W.ssContent===v||W.ssFallback===v)){const re=$.vnode;R(w,re,re.scopeId,re.slotScopeIds,$.parent)}}},P=(w,v,q,Q,$,W,re,Z,y=0)=>{for(let g=y;g<w.length;g++){const L=w[g]=Z?fi(w[g]):vn(w[g]);x(null,L,v,q,Q,$,W,re,Z)}},T=(w,v,q,Q,$,W,re)=>{const Z=v.el=w.el;let{patchFlag:y,dynamicChildren:g,dirs:L}=v;y|=w.patchFlag&16;const N=w.props||ht,k=v.props||ht;let H;if(q&&bi(q,!1),(H=k.onVnodeBeforeUpdate)&&_n(H,q,v,w),L&&Ti(v,w,q,"beforeUpdate"),q&&bi(q,!0),(N.innerHTML&&k.innerHTML==null||N.textContent&&k.textContent==null)&&u(Z,""),g?S(w.dynamicChildren,g,Z,q,Q,qo(v,$),W):re||V(w,v,Z,null,q,Q,qo(v,$),W,!1),y>0){if(y&16)C(Z,N,k,q,$);else if(y&2&&N.class!==k.class&&r(Z,"class",null,k.class,$),y&4&&r(Z,"style",N.style,k.style,$),y&8){const le=v.dynamicProps;for(let oe=0;oe<le.length;oe++){const ae=le[oe],Ie=N[ae],se=k[ae];(se!==Ie||ae==="value")&&r(Z,ae,Ie,se,$,q)}}y&1&&w.children!==v.children&&u(Z,v.children)}else!re&&g==null&&C(Z,N,k,q,$);((H=k.onVnodeUpdated)||L)&&Kt(()=>{H&&_n(H,q,v,w),L&&Ti(v,w,q,"updated")},Q)},S=(w,v,q,Q,$,W,re)=>{for(let Z=0;Z<v.length;Z++){const y=w[Z],g=v[Z],L=y.el&&(y.type===jn||!Vs(y,g)||y.shapeFlag&70)?h(y.el):q;x(y,g,L,null,Q,$,W,re,!0)}},C=(w,v,q,Q,$)=>{if(v!==q){if(v!==ht)for(const W in v)!nr(W)&&!(W in q)&&r(w,W,v[W],null,$,Q);for(const W in q){if(nr(W))continue;const re=q[W],Z=v[W];re!==Z&&W!=="value"&&r(w,W,Z,re,$,Q)}"value"in q&&r(w,"value",v.value,q.value,$)}},K=(w,v,q,Q,$,W,re,Z,y)=>{const g=v.el=w?w.el:a(""),L=v.anchor=w?w.anchor:a("");let{patchFlag:N,dynamicChildren:k,slotScopeIds:H}=v;H&&(Z=Z?Z.concat(H):H),w==null?(i(g,q,Q),i(L,q,Q),P(v.children||[],q,L,$,W,re,Z,y)):N>0&&N&64&&k&&w.dynamicChildren?(S(w.dynamicChildren,k,q,$,W,re,Z),(v.key!=null||$&&v===$.subTree)&&Tf(w,v,!0)):V(w,v,q,L,$,W,re,Z,y)},z=(w,v,q,Q,$,W,re,Z,y)=>{v.slotScopeIds=Z,w==null?v.shapeFlag&512?$.ctx.activate(v,q,Q,re,y):Y(v,q,Q,$,W,re,y):te(w,v,y)},Y=(w,v,q,Q,$,W,re)=>{const Z=w.component=Mm(w,Q,$);if(uf(w)&&(Z.ctx.renderer=Be),ym(Z,!1,re),Z.asyncDep){if($&&$.registerDep(Z,G,re),!w.el){const y=Z.subTree=Vi(mr);d(null,y,v,q)}}else G(Z,w,v,q,$,W,re)},te=(w,v,q)=>{const Q=v.component=w.component;if(am(w,v,q))if(Q.asyncDep&&!Q.asyncResolved){J(Q,v,q);return}else Q.next=v,Q.update();else v.el=w.el,Q.vnode=v},G=(w,v,q,Q,$,W,re)=>{const Z=()=>{if(w.isMounted){let{next:N,bu:k,u:H,parent:le,vnode:oe}=w;{const Ee=bf(w);if(Ee){N&&(N.el=oe.el,J(w,N,re)),Ee.asyncDep.then(()=>{w.isUnmounted||Z()});return}}let ae=N,Ie;bi(w,!1),N?(N.el=oe.el,J(w,N,re)):N=oe,k&&Go(k),(Ie=N.props&&N.props.onVnodeBeforeUpdate)&&_n(Ie,le,N,oe),bi(w,!0);const se=$o(w),pe=w.subTree;w.subTree=se,x(pe,se,h(pe.el),de(pe),w,$,W),N.el=se.el,ae===null&&lm(w,se.el),H&&Kt(H,$),(Ie=N.props&&N.props.onVnodeUpdated)&&Kt(()=>_n(Ie,le,N,oe),$)}else{let N;const{el:k,props:H}=v,{bm:le,m:oe,parent:ae,root:Ie,type:se}=w,pe=or(v);if(bi(w,!1),le&&Go(le),!pe&&(N=H&&H.onVnodeBeforeMount)&&_n(N,ae,v),bi(w,!0),k&&qe){const Ee=()=>{w.subTree=$o(w),qe(k,w.subTree,w,$,null)};pe&&se.__asyncHydrate?se.__asyncHydrate(k,w,Ee):Ee()}else{Ie.ce&&Ie.ce._injectChildStyle(se);const Ee=w.subTree=$o(w);x(null,Ee,q,Q,w,$,W),v.el=Ee.el}if(oe&&Kt(oe,$),!pe&&(N=H&&H.onVnodeMounted)){const Ee=v;Kt(()=>_n(N,ae,Ee),$)}(v.shapeFlag&256||ae&&or(ae.vnode)&&ae.vnode.shapeFlag&256)&&w.a&&Kt(w.a,$),w.isMounted=!0,v=q=Q=null}};w.scope.on();const y=w.effect=new zh(Z);w.scope.off();const g=w.update=y.run.bind(y),L=w.job=y.runIfDirty.bind(y);L.i=w,L.id=w.uid,y.scheduler=()=>Zl(L),bi(w,!0),g()},J=(w,v,q)=>{v.component=w;const Q=w.vnode.props;w.vnode=v,w.next=null,Xp(w,v.props,Q,q),Kp(w,v.children,q),yi(),Bc(w),Si()},V=(w,v,q,Q,$,W,re,Z,y=!1)=>{const g=w&&w.children,L=w?w.shapeFlag:0,N=v.children,{patchFlag:k,shapeFlag:H}=v;if(k>0){if(k&128){fe(g,N,q,Q,$,W,re,Z,y);return}else if(k&256){ce(g,N,q,Q,$,W,re,Z,y);return}}H&8?(L&16&&Se(g,$,W),N!==g&&u(q,N)):L&16?H&16?fe(g,N,q,Q,$,W,re,Z,y):Se(g,$,W,!0):(L&8&&u(q,""),H&16&&P(N,q,Q,$,W,re,Z,y))},ce=(w,v,q,Q,$,W,re,Z,y)=>{w=w||ds,v=v||ds;const g=w.length,L=v.length,N=Math.min(g,L);let k;for(k=0;k<N;k++){const H=v[k]=y?fi(v[k]):vn(v[k]);x(w[k],H,q,null,$,W,re,Z,y)}g>L?Se(w,$,W,!0,!1,N):P(v,q,Q,$,W,re,Z,y,N)},fe=(w,v,q,Q,$,W,re,Z,y)=>{let g=0;const L=v.length;let N=w.length-1,k=L-1;for(;g<=N&&g<=k;){const H=w[g],le=v[g]=y?fi(v[g]):vn(v[g]);if(Vs(H,le))x(H,le,q,null,$,W,re,Z,y);else break;g++}for(;g<=N&&g<=k;){const H=w[N],le=v[k]=y?fi(v[k]):vn(v[k]);if(Vs(H,le))x(H,le,q,null,$,W,re,Z,y);else break;N--,k--}if(g>N){if(g<=k){const H=k+1,le=H<L?v[H].el:Q;for(;g<=k;)x(null,v[g]=y?fi(v[g]):vn(v[g]),q,le,$,W,re,Z,y),g++}}else if(g>k)for(;g<=N;)Te(w[g],$,W,!0),g++;else{const H=g,le=g,oe=new Map;for(g=le;g<=k;g++){const De=v[g]=y?fi(v[g]):vn(v[g]);De.key!=null&&oe.set(De.key,g)}let ae,Ie=0;const se=k-le+1;let pe=!1,Ee=0;const Pe=new Array(se);for(g=0;g<se;g++)Pe[g]=0;for(g=H;g<=N;g++){const De=w[g];if(Ie>=se){Te(De,$,W,!0);continue}let Le;if(De.key!=null)Le=oe.get(De.key);else for(ae=le;ae<=k;ae++)if(Pe[ae-le]===0&&Vs(De,v[ae])){Le=ae;break}Le===void 0?Te(De,$,W,!0):(Pe[Le-le]=g+1,Le>=Ee?Ee=Le:pe=!0,x(De,v[Le],q,null,$,W,re,Z,y),Ie++)}const Me=pe?Qp(Pe):ds;for(ae=Me.length-1,g=se-1;g>=0;g--){const De=le+g,Le=v[De],tt=De+1<L?v[De+1].el:Q;Pe[g]===0?x(null,Le,q,tt,$,W,re,Z,y):pe&&(ae<0||g!==Me[ae]?ye(Le,q,tt,2):ae--)}}},ye=(w,v,q,Q,$=null)=>{const{el:W,type:re,transition:Z,children:y,shapeFlag:g}=w;if(g&6){ye(w.component.subTree,v,q,Q);return}if(g&128){w.suspense.move(v,q,Q);return}if(g&64){re.move(w,v,q,Be);return}if(re===jn){i(W,v,q);for(let N=0;N<y.length;N++)ye(y[N],v,q,Q);i(w.anchor,v,q);return}if(re===Zo){b(w,v,q);return}if(Q!==2&&g&1&&Z)if(Q===0)Z.beforeEnter(W),i(W,v,q),Kt(()=>Z.enter(W),$);else{const{leave:N,delayLeave:k,afterLeave:H}=Z,le=()=>i(W,v,q),oe=()=>{N(W,()=>{le(),H&&H()})};k?k(W,le,oe):oe()}else i(W,v,q)},Te=(w,v,q,Q=!1,$=!1)=>{const{type:W,props:re,ref:Z,children:y,dynamicChildren:g,shapeFlag:L,patchFlag:N,dirs:k,cacheIndex:H}=w;if(N===-2&&($=!1),Z!=null&&yo(Z,null,q,w,!0),H!=null&&(v.renderCache[H]=void 0),L&256){v.ctx.deactivate(w);return}const le=L&1&&k,oe=!or(w);let ae;if(oe&&(ae=re&&re.onVnodeBeforeUnmount)&&_n(ae,v,w),L&6)ue(w.component,q,Q);else{if(L&128){w.suspense.unmount(q,Q);return}le&&Ti(w,null,v,"beforeUnmount"),L&64?w.type.remove(w,v,q,Be,Q):g&&!g.hasOnce&&(W!==jn||N>0&&N&64)?Se(g,v,q,!1,!0):(W===jn&&N&384||!$&&L&16)&&Se(y,v,q),Q&&Ge(w)}(oe&&(ae=re&&re.onVnodeUnmounted)||le)&&Kt(()=>{ae&&_n(ae,v,w),le&&Ti(w,null,v,"unmounted")},q)},Ge=w=>{const{type:v,el:q,anchor:Q,transition:$}=w;if(v===jn){ne(q,Q);return}if(v===Zo){M(w);return}const W=()=>{s(q),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:re,delayLeave:Z}=$,y=()=>re(q,W);Z?Z(w.el,W,y):y()}else W()},ne=(w,v)=>{let q;for(;w!==v;)q=f(w),s(w),w=q;s(v)},ue=(w,v,q)=>{const{bum:Q,scope:$,job:W,subTree:re,um:Z,m:y,a:g}=w;Wc(y),Wc(g),Q&&Go(Q),$.stop(),W&&(W.flags|=8,Te(re,w,v,q)),Z&&Kt(Z,v),Kt(()=>{w.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Se=(w,v,q,Q=!1,$=!1,W=0)=>{for(let re=W;re<w.length;re++)Te(w[re],v,q,Q,$)},de=w=>{if(w.shapeFlag&6)return de(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const v=f(w.anchor||w.el),q=v&&v[Mp];return q?f(q):v};let Ce=!1;const Ue=(w,v,q)=>{w==null?v._vnode&&Te(v._vnode,null,null,!0):x(v._vnode||null,w,v,null,null,null,q),v._vnode=w,Ce||(Ce=!0,Bc(),of(),Ce=!1)},Be={p:x,um:Te,m:ye,r:Ge,mt:Y,mc:P,pc:V,pbc:S,n:de,o:n};let lt,qe;return{render:Ue,hydrate:lt,createApp:kp(Ue,lt)}}function qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function bi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Jp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Tf(n,e,t=!1){const i=n.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Tf(o,a)),a.type===Fo&&(a.el=o.el)}}function Qp(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function bf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bf(e)}function Wc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const em=Symbol.for("v-scx"),tm=()=>ao(em);function Ko(n,e,t){return Af(n,e,t)}function Af(n,e,t=ht){const{immediate:i,deep:s,flush:r,once:o}=t,a=wt({},t),l=e&&i||!e&&r!=="post";let c;if(_r){if(r==="sync"){const p=tm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=bn,p.resume=bn,p.pause=bn,p}}const u=Bt;a.call=(p,_,x)=>Rn(p,u,_,x);let h=!1;r==="post"?a.scheduler=p=>{Kt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():Zl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=pp(n,e,a);return _r&&(c?c.push(f):l&&f()),f}function nm(n,e,t){const i=this.proxy,s=bt(n)?n.includes(".")?wf(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const o=Er(this),a=Af(s,r.bind(i),t);return o(),a}function wf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const im=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${vi(e)}Modifiers`]||n[`${Wi(e)}Modifiers`];function sm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let s=t;const r=e.startsWith("update:"),o=r&&im(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>bt(u)?u.trim():u)),o.number&&(s=t.map(Ud)));let a,l=i[a=ko(e)]||i[a=ko(vi(e))];!l&&r&&(l=i[a=ko(Wi(e))]),l&&Rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(c,n,6,s)}}function Rf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!je(n)){const l=c=>{const u=Rf(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(_t(n)&&i.set(n,null),null):(Xe(r)?r.forEach(l=>o[l]=null):wt(o,r),_t(n)&&i.set(n,o),o)}function No(n,e){return!n||!Co(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Wi(e))||et(n,e))}function $o(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:_,inheritAttrs:x}=n,m=Mo(n);let d,A;try{if(t.shapeFlag&4){const M=s||i,O=M;d=vn(c.call(O,M,u,h,p,f,_)),A=a}else{const M=e;d=vn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),A=e.props?a:rm(a)}}catch(M){lr.length=0,Io(M,n,1),d=Vi(mr)}let b=d;if(A&&x!==!1){const M=Object.keys(A),{shapeFlag:O}=b;M.length&&O&7&&(r&&M.some(Bl)&&(A=om(A,r)),b=Ss(b,A,!1,!0))}return t.dirs&&(b=Ss(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Jl(b,t.transition),d=b,Mo(m),d}const rm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Co(t))&&((e||(e={}))[t]=n[t]);return e},om=(n,e)=>{const t={};for(const i in n)(!Bl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function am(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Xc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!No(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xc(i,o,c):!0:!!o;return!1}function Xc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!No(t,r))return!0}return!1}function lm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Cf=n=>n.__isSuspense;function cm(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):xp(n)}const jn=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),lr=[];let Jt=null;function um(n=!1){lr.push(Jt=n?null:[])}function hm(){lr.pop(),Jt=lr[lr.length-1]||null}let gr=1;function jc(n,e=!1){gr+=n,n<0&&Jt&&e&&(Jt.hasOnce=!0)}function fm(n){return n.dynamicChildren=gr>0?Jt||ds:null,hm(),gr>0&&Jt&&Jt.push(n),n}function dm(n,e,t,i,s,r){return fm(Df(n,e,t,i,s,r,!0))}function Pf(n){return n?n.__v_isVNode===!0:!1}function Vs(n,e){return n.type===e.type&&n.key===e.key}const Lf=({key:n})=>n??null,lo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Ht(n)||je(n)?{i:Sn,r:n,k:e,f:!!t}:n:null);function Df(n,e=null,t=null,i=0,s=null,r=n===jn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Lf(e),ref:e&&lo(e),scopeId:lf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(tc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),gr>0&&!o&&Jt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Jt.push(l),l}const Vi=pm;function pm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Up)&&(n=mr),Pf(n)){const a=Ss(n,e,!0);return t&&tc(a,t),gr>0&&!r&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(n)]=a:Jt.push(a)),a.patchFlag=-2,a}if(bm(n)&&(n=n.__vccOpts),e){e=mm(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=kl(a)),_t(l)&&($l(l)&&!Xe(l)&&(l=wt({},l)),e.style=Vl(l))}const o=bt(n)?1:Cf(n)?128:yp(n)?64:_t(n)?4:je(n)?2:0;return Df(n,e,t,i,s,o,r,!0)}function mm(n){return n?$l(n)||_f(n)?wt({},n):n:null}function Ss(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?_m(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Lf(c),ref:e&&e.ref?t&&r?Xe(r)?r.concat(lo(e)):[r,lo(e)]:lo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ss(n.ssContent),ssFallback:n.ssFallback&&Ss(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jl(u,l.clone(u)),u}function gm(n=" ",e=0){return Vi(Fo,null,n,e)}function vn(n){return n==null||typeof n=="boolean"?Vi(mr):Xe(n)?Vi(jn,null,n.slice()):Pf(n)?fi(n):Vi(Fo,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ss(n)}function tc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),tc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!_f(e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:Sn},t=32):(e=String(e),i&64?(t=16,e=[gm(e)]):t=8);n.children=e,n.shapeFlag|=t}function _m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=kl([e.class,i.class]));else if(s==="style")e.style=Vl([e.style,i.style]);else if(Co(s)){const r=e[s],o=i[s];o&&r!==o&&!(Xe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function _n(n,e,t,i=null){Rn(n,e,7,[t,i])}const xm=pf();let vm=0;function Mm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||xm,r={uid:vm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vf(i,s),emitsOptions:Rf(i,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sm.bind(null,r),n.ce&&n.ce(r),r}let Bt=null,Eo,ja;{const n=Do(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Eo=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),ja=e("__VUE_SSR_SETTERS__",t=>_r=t)}const Er=n=>{const e=Bt;return Eo(n),n.scope.on(),()=>{n.scope.off(),Eo(e)}},Yc=()=>{Bt&&Bt.scope.off(),Eo(null)};function If(n){return n.vnode.shapeFlag&4}let _r=!1;function ym(n,e=!1,t=!1){e&&ja(e);const{props:i,children:s}=n.vnode,r=If(n);Wp(n,i,r,e),qp(n,s,t);const o=r?Sm(n,e):void 0;return e&&ja(!1),o}function Sm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Np);const{setup:i}=t;if(i){yi();const s=n.setupContext=i.length>1?Tm(n):null,r=Er(n),o=Sr(i,n,0,[n.props,s]),a=Fh(o);if(Si(),r(),(a||n.sp)&&!or(n)&&cf(n),a){if(o.then(Yc,Yc),e)return o.then(l=>{qc(n,l,e)}).catch(l=>{Io(l,n,0)});n.asyncDep=o}else qc(n,o,e)}else Uf(n,e)}function qc(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=nf(e)),Uf(n,t)}let Kc;function Uf(n,e,t){const i=n.type;if(!n.render){if(!e&&Kc&&!i.render){const s=i.template||Ql(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=wt(wt({isCustomElement:r,delimiters:a},o),l);i.render=Kc(s,c)}}n.render=i.render||bn}{const s=Er(n);yi();try{Fp(n)}finally{Si(),s()}}}const Em={get(n,e){return Lt(n,"get",""),n[e]}};function Tm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Em),slots:n.slots,emit:n.emit,expose:e}}function nc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(nf(lp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ar)return ar[t](n)},has(e,t){return t in e||t in ar}})):n.proxy}function bm(n){return je(n)&&"__vccOpts"in n}const Am=(n,e)=>fp(n,e,_r),wm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ya;const $c=typeof window<"u"&&window.trustedTypes;if($c)try{Ya=$c.createPolicy("vue",{createHTML:n=>n})}catch{}const Nf=Ya?n=>Ya.createHTML(n):n=>n,Rm="http://www.w3.org/2000/svg",Cm="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Zc=Wn&&Wn.createElement("template"),Pm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Wn.createElementNS(Rm,n):e==="mathml"?Wn.createElementNS(Cm,n):t?Wn.createElement(n,{is:t}):Wn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Wn.createTextNode(n),createComment:n=>Wn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Wn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Zc.innerHTML=Nf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Lm=Symbol("_vtc");function Dm(n,e,t){const i=n[Lm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Jc=Symbol("_vod"),Im=Symbol("_vsh"),Um=Symbol(""),Nm=/(^|;)\s*display\s*:/;function Fm(n,e,t){const i=n.style,s=bt(t);let r=!1;if(t&&!s){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&co(i,a,"")}else for(const o in e)t[o]==null&&co(i,o,"");for(const o in t)o==="display"&&(r=!0),co(i,o,t[o])}else if(s){if(e!==t){const o=i[Um];o&&(t+=";"+o),i.cssText=t,r=Nm.test(t)}}else e&&n.removeAttribute("style");Jc in n&&(n[Jc]=r?i.display:"",n[Im]&&(i.display="none"))}const Qc=/\s*!important$/;function co(n,e,t){if(Xe(t))t.forEach(i=>co(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Om(n,e);Qc.test(t)?n.setProperty(Wi(i),t.replace(Qc,""),"important"):n[i]=t}}const eu=["Webkit","Moz","ms"],Jo={};function Om(n,e){const t=Jo[e];if(t)return t;let i=vi(e);if(i!=="filter"&&i in n)return Jo[e]=i;i=Oh(i);for(let s=0;s<eu.length;s++){const r=eu[s]+i;if(r in n)return Jo[e]=r}return e}const tu="http://www.w3.org/1999/xlink";function nu(n,e,t,i,s,r=zd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(tu,e.slice(6,e.length)):n.setAttributeNS(tu,e,t):t==null||r&&!Hh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Us(t)?String(t):t)}function iu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Nf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Hh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Bm(n,e,t,i){n.addEventListener(e,t,i)}function Hm(n,e,t,i){n.removeEventListener(e,t,i)}const su=Symbol("_vei");function zm(n,e,t,i,s=null){const r=n[su]||(n[su]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Vm(e);if(i){const c=r[e]=Wm(i,s);Bm(n,a,c,l)}else o&&(Hm(n,a,o,l),r[e]=void 0)}}const ru=/(?:Once|Passive|Capture)$/;function Vm(n){let e;if(ru.test(n)){e={};let i;for(;i=n.match(ru);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let Qo=0;const km=Promise.resolve(),Gm=()=>Qo||(km.then(()=>Qo=0),Qo=Date.now());function Wm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Rn(Xm(i,t.value),e,5,[i])};return t.value=n,t.attached=Gm(),t}function Xm(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ou=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,jm=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Dm(n,i,o):e==="style"?Fm(n,t,i):Co(e)?Bl(e)||zm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ym(n,e,i,o))?(iu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?iu(n,vi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),nu(n,e,i,o))};function Ym(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ou(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ou(e)&&bt(t)?!1:e in n}const qm=wt({patchProp:jm},Pm);let au;function Km(){return au||(au=$p(qm))}const $m=(...n)=>{const e=Km().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Jm(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Zm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Zm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Jm(n){return bt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="170",gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qm=0,lu=1,eg=2,Ff=1,tg=2,Gn=3,Jn=0,Xt=1,yn=2,_i=0,_s=1,cu=2,uu=3,hu=4,ng=5,Ni=100,ig=101,sg=102,rg=103,og=104,ag=200,lg=201,cg=202,ug=203,qa=204,Ka=205,hg=206,fg=207,dg=208,pg=209,mg=210,gg=211,_g=212,xg=213,vg=214,$a=0,Za=1,Ja=2,Es=3,Qa=4,el=5,tl=6,nl=7,Of=0,Mg=1,yg=2,xi=0,Sg=1,Eg=2,Tg=3,bg=4,Ag=5,wg=6,Rg=7,fu="attached",Cg="detached",Bf=300,Ts=301,bs=302,To=303,il=304,Oo=306,As=1e3,En=1001,bo=1002,zt=1003,Hf=1004,Js=1005,Et=1006,uo=1007,Tn=1008,Qn=1009,zf=1010,Vf=1011,xr=1012,sc=1013,ki=1014,Wt=1015,Kn=1016,rc=1017,oc=1018,ws=1020,kf=35902,Gf=1021,Wf=1022,sn=1023,Xf=1024,jf=1025,xs=1026,Rs=1027,ac=1028,lc=1029,Yf=1030,cc=1031,uc=1033,ho=33776,fo=33777,po=33778,mo=33779,sl=35840,rl=35841,ol=35842,al=35843,ll=36196,cl=37492,ul=37496,hl=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,vl=37816,Ml=37817,yl=37818,Sl=37819,El=37820,Tl=37821,go=36492,bl=36494,Al=36495,qf=36283,wl=36284,Rl=36285,Cl=36286,vr=2300,Mr=2301,ea=2302,du=2400,pu=2401,mu=2402,Pg=2500,Lg=0,Kf=1,Pl=2,Dg=3200,Ig=3201,$f=0,Ug=1,mi="",At="srgb",Dt="srgb-linear",Bo="linear",rt="srgb",Ki=7680,gu=519,Ng=512,Fg=513,Og=514,Zf=515,Bg=516,Hg=517,zg=518,Vg=519,Ll=35044,_u="300 es",$n=2e3,Ao=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const cr=Math.PI/180,Cs=180/Math.PI;function dn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function hc(n,e){return(n%e+e)%e}function kg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Gg(n,e,t){return n!==e?(t-n)/(e-n):0}function ur(n,e,t){return(1-t)*n+t*e}function Wg(n,e,t,i){return ur(n,e,1-Math.exp(-t*i))}function Xg(n,e=1){return e-Math.abs(hc(n,e*2)-e)}function jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kg(n,e){return n+Math.random()*(e-n)}function $g(n){return n*(.5-Math.random())}function Zg(n){n!==void 0&&(xu=n);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jg(n){return n*cr}function Qg(n){return n*Cs}function e_(n){return(n&n-1)===0&&n!==0}function t_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jf={DEG2RAD:cr,RAD2DEG:Cs,generateUUID:dn,clamp:St,euclideanModulo:hc,mapLinear:kg,inverseLerp:Gg,lerp:ur,damp:Wg,pingpong:Xg,smoothstep:jg,smootherstep:Yg,randInt:qg,randFloat:Kg,randFloatSpread:$g,seededRandom:Zg,degToRad:Jg,radToDeg:Qg,isPowerOfTwo:e_,ceilPowerOfTwo:t_,floorPowerOfTwo:n_,setQuaternionFromProperEuler:i_,normalize:it,denormalize:un};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,s,r,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=s[0],m=s[3],d=s[6],A=s[1],b=s[4],M=s[7],O=s[2],D=s[5],R=s[8];return r[0]=o*x+a*A+l*O,r[3]=o*m+a*b+l*D,r[6]=o*d+a*M+l*R,r[1]=c*x+u*A+h*O,r[4]=c*m+u*b+h*D,r[7]=c*d+u*M+h*R,r[2]=f*x+p*A+_*O,r[5]=f*m+p*b+_*D,r[8]=f*d+p*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Ve;function Qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s_(){const n=yr("canvas");return n.style.display="block",n}const vu={};function Qs(n){n in vu||(vu[n]=!0,console.warn(n))}function r_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function o_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Dt,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=vs(n.r),n.g=vs(n.g),n.b=vs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===mi?Bo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Mu=[.64,.33,.3,.6,.15,.06],yu=[.2126,.7152,.0722],Su=[.3127,.329],Eu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Dt]:{primaries:Mu,whitePoint:Su,transfer:Bo,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:yu,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:Mu,whitePoint:Su,transfer:rt,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:yu,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});let $i;class l_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=yr("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c_=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(na(s[o].image)):r.push(na(s[o]))}else r=na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?l_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u_=0;class Tt extends Xi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=En,s=En,r=Et,o=Tn,a=sn,l=Qn,c=Tt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=dn(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Bf;Tt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,i=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(p+1)/2,O=(d+1)/2,D=(u+f)/4,R=(h+x)/4,P=(_+m)/4;return b>M&&b>O?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=D/i,r=R/i):M>O?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=D/s,r=P/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=R/r,s=P/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h_ extends Xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Tt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends h_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class td extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f_ extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let m=1-a;const d=l*f+c*p+u*_+h*x,A=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const O=Math.sqrt(b),D=Math.atan2(O,d*A);m=Math.sin(m*D)/O,a=Math.sin(a*D)/O}const M=a*A;if(l=l*m+f*M,c=c*m+p*M,u=u*m+_*M,h=h*m+x*M,m===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new U,bu=new Cn;class ti{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Ir.subVectors(this.max,ks),Zi.subVectors(e.a,ks),Ji.subVectors(e.b,ks),Qi.subVectors(e.c,ks),si.subVectors(Ji,Zi),ri.subVectors(Qi,Ji),Ai.subVectors(Zi,Qi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ai.z,Ai.y,si.z,0,-si.x,ri.z,0,-ri.x,Ai.z,0,-Ai.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ai.y,Ai.x,0];return!sa(t,Zi,Ji,Qi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Zi,Ji,Qi,Ir))?!1:(Ur.crossVectors(si,ri),t=[Ur.x,Ur.y,Ur.z],sa(t,Zi,Ji,Qi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new U,new U,new U,new U,new U,new U,new U,new U],an=new U,Dr=new ti,Zi=new U,Ji=new U,Qi=new U,si=new U,ri=new U,Ai=new U,ks=new U,Ir=new U,Ur=new U,wi=new U;function sa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const d_=new ti,Gs=new U,ra=new U;class Ln{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):d_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(ra)),this.expandByPoint(Gs.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new U,oa=new U,Nr=new U,oi=new U,aa=new U,Fr=new U,la=new U;class Tr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){oa.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Nr),a=oi.dot(this.direction),l=-oi.dot(Nr),c=oi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(oa).addScaledVector(Nr,f),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,s,r){aa.subVectors(t,e),Fr.subVectors(i,e),la.crossVectors(aa,Fr);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Fr.crossVectors(oi,Fr));if(l<0)return null;const c=a*this.direction.dot(aa.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(la);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ai.crossVectors(i,Yt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ai.crossVectors(i,Yt)),ai.normalize(),Or.crossVectors(Yt,ai),s[0]=ai.x,s[4]=Or.x,s[8]=Yt.x,s[1]=ai.y,s[5]=Or.y,s[9]=Yt.y,s[2]=ai.z,s[6]=Or.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],A=i[3],b=i[7],M=i[11],O=i[15],D=s[0],R=s[4],P=s[8],T=s[12],S=s[1],C=s[5],K=s[9],z=s[13],Y=s[2],te=s[6],G=s[10],J=s[14],V=s[3],ce=s[7],fe=s[11],ye=s[15];return r[0]=o*D+a*S+l*Y+c*V,r[4]=o*R+a*C+l*te+c*ce,r[8]=o*P+a*K+l*G+c*fe,r[12]=o*T+a*z+l*J+c*ye,r[1]=u*D+h*S+f*Y+p*V,r[5]=u*R+h*C+f*te+p*ce,r[9]=u*P+h*K+f*G+p*fe,r[13]=u*T+h*z+f*J+p*ye,r[2]=_*D+x*S+m*Y+d*V,r[6]=_*R+x*C+m*te+d*ce,r[10]=_*P+x*K+m*G+d*fe,r[14]=_*T+x*z+m*J+d*ye,r[3]=A*D+b*S+M*Y+O*V,r[7]=A*R+b*C+M*te+O*ce,r[11]=A*P+b*K+M*G+O*fe,r[15]=A*T+b*z+M*J+O*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],A=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,b=_*f*c-u*m*c-_*l*p+o*m*p+u*l*d-o*f*d,M=u*x*c-_*h*c+_*a*p-o*x*p-u*a*d+o*h*d,O=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,D=t*A+i*b+s*M+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=A*R,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*R,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*R,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*R,e[4]=b*R,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*d+t*f*d)*R,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=M*R,e[9]=(_*h*r-u*x*r-_*i*p+t*x*p+u*i*d-t*h*d)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*d+t*a*d)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=O*R,e[13]=(u*x*s-_*h*s+_*i*f-t*x*f-u*i*m+t*h*m)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,x=o*u,m=o*h,d=a*h,A=l*c,b=l*u,M=l*h,O=i.x,D=i.y,R=i.z;return s[0]=(1-(x+d))*O,s[1]=(p+M)*O,s[2]=(_-b)*O,s[3]=0,s[4]=(p-M)*D,s[5]=(1-(f+d))*D,s[6]=(m+A)*D,s[7]=0,s[8]=(_+b)*R,s[9]=(m-A)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const c=1/r,u=1/o,h=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=$n){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===$n)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,p=(i+s)*u;let _,x;if(a===$n)_=(o+r)*h,x=-2*h;else if(a===Ao)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const es=new U,ln=new ke,p_=new U(0,0,0),m_=new U(1,1,1),ai=new U,Or=new U,Yt=new U,Au=new ke,wu=new Cn;class Pn{constructor(e=0,t=0,i=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const Ru=new U,ts=new Cn,Hn=new ke,Br=new U,Ws=new U,__=new U,x_=new Cn,Cu=new U(1,0,0),Pu=new U(0,1,0),Lu=new U(0,0,1),Du={type:"added"},v_={type:"removed"},ns={type:"childadded",child:null},ca={type:"childremoved",child:null};class pt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new U,t=new Pn,i=new Cn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ve}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ws,Br,this.up):Hn.lookAt(Br,Ws,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Hn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Du),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v_),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Du),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,__),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,x_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pt.DEFAULT_UP=new U(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new U,zn=new U,ua=new U,Vn=new U,is=new U,ss=new U,Iu=new U,ha=new U,fa=new U,da=new U,pa=new Ze,ma=new Ze,ga=new Ze;class hn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){cn.subVectors(s,t),zn.subVectors(i,t),ua.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(zn),l=cn.dot(ua),c=zn.dot(zn),u=zn.dot(ua),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,i),ga.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pa,r.x),o.addScaledVector(ma,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(e,t,i,s){return cn.subVectors(i,t),zn.subVectors(e,t),cn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),cn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,i),ss.subVectors(r,i),ha.subVectors(e,i);const l=is.dot(ha),c=ss.dot(ha);if(l<=0&&c<=0)return t.copy(i);fa.subVectors(e,s);const u=is.dot(fa),h=ss.dot(fa);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(is,o);da.subVectors(e,r);const p=is.dot(da),_=ss.dot(da);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ss,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Iu.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Iu,a);const d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function _a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=hc(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_a(o,r,e+1/3),this.g=_a(o,r,e),this.b=_a(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.fromWorkingColorSpace(Pt.copy(this),e),Math.round(St(Pt.r*255,0,255))*65536+Math.round(St(Pt.g*255,0,255))*256+Math.round(St(Pt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=At){Ke.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,s=Pt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Hr);const i=ur(li.h,Hr.h,t),s=ur(li.s,Hr.s,t),r=ur(li.l,Hr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Oe;Oe.NAMES=id;let M_=0;class wn extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=dn(),this.name="",this.blending=_s,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ka,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ka&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oi extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qn=y_();function y_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function S_(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=St(n,-65504,65504),qn.floatView[0]=n;const e=qn.uint32View[0],t=e>>23&511;return qn.baseTable[t]+((e&8388607)>>qn.shiftTable[t])}function E_(n){const e=n>>10;return qn.uint32View[0]=qn.mantissaTable[qn.offsetTable[e]+(n&1023)]+qn.exponentTable[e],qn.floatView[0]}const zr={toHalfFloat:S_,fromHalfFloat:E_},gt=new U,Vr=new Ne;class Vt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ll,this.updateRanges=[],this.gpuType=Wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class sd extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rd extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pn extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let T_=0;const tn=new ke,xa=new pt,rs=new U,qt=new ti,Xs=new ti,yt=new U;class mn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?rd:sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(qt.min,Xs.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Xs.max),qt.expandByPoint(yt)):(qt.expandByPoint(Xs.min),qt.expandByPoint(Xs.max))}qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),yt.add(rs)),s=Math.max(s,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,u=new U,h=new U,f=new Ne,p=new Ne,_=new Ne,x=new U,m=new U;function d(P,T,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),a[P].add(x),a[T].add(x),a[S].add(x),l[P].add(m),l[T].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,T=A.length;P<T;++P){const S=A[P],C=S.start,K=S.count;for(let z=C,Y=C+K;z<Y;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new U,M=new U,O=new U,D=new U;function R(P){O.fromBufferAttribute(s,P),D.copy(O);const T=a[P];b.copy(T),b.sub(O.multiplyScalar(O.dot(T))).normalize(),M.crossVectors(D,T);const C=M.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,C)}for(let P=0,T=A.length;P<T;++P){const S=A[P],C=S.start,K=S.count;for(let z=C,Y=C+K;z<Y;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new Vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uu=new ke,Ri=new Tr,kr=new Ln,Nu=new U,Gr=new U,Wr=new U,Xr=new U,va=new U,jr=new U,Fu=new U,Yr=new U;class Qt extends pt{constructor(e=new mn,t=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(va.fromBufferAttribute(h,e),o?jr.addScaledVector(va,u):jr.addScaledVector(va.sub(t),u))}t.add(jr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(kr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(kr,Nu)===null||Ri.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Uu),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,O=b;M<O;M+=3){const D=a.getX(M),R=a.getX(M+1),P=a.getX(M+2);s=qr(this,d,e,i,c,u,h,D,R,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=qr(this,o,e,i,c,u,h,A,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,O=b;M<O;M+=3){const D=M,R=M+1,P=M+2;s=qr(this,d,e,i,c,u,h,D,R,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=m,b=m+1,M=m+2;s=qr(this,o,e,i,c,u,h,A,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function b_(n,e,t,i,s,r,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function qr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Gr),n.getVertexPosition(l,Wr),n.getVertexPosition(c,Xr);const u=b_(n,e,t,i,Gr,Wr,Xr,Fu);if(u){const h=new U;hn.getBarycoord(Fu,Gr,Wr,Xr,h),s&&(u.uv=hn.getInterpolatedAttribute(s,a,l,c,h,new Ne)),r&&(u.uv1=hn.getInterpolatedAttribute(r,a,l,c,h,new Ne)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};hn.getNormal(Gr,Wr,Xr,f.normal),u.face=f,u.barycoord=h}return u}class br extends mn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function _(x,m,d,A,b,M,O,D,R,P,T){const S=M/R,C=O/P,K=M/2,z=O/2,Y=D/2,te=R+1,G=P+1;let J=0,V=0;const ce=new U;for(let fe=0;fe<G;fe++){const ye=fe*C-z;for(let Te=0;Te<te;Te++){const Ge=Te*S-K;ce[x]=Ge*A,ce[m]=ye*b,ce[d]=Y,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[d]=D>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Te/R),h.push(1-fe/P),J+=1}}for(let fe=0;fe<P;fe++)for(let ye=0;ye<R;ye++){const Te=f+ye+te*fe,Ge=f+ye+te*(fe+1),ne=f+(ye+1)+te*(fe+1),ue=f+(ye+1)+te*fe;l.push(Te,Ge,ue),l.push(Ge,ne,ue),V+=6}a.addGroup(p,V,T),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const s in i)e[s]=i[s]}return e}function A_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const w_={clone:Ps,merge:Nt};var R_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ad extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new U,Ou=new Ne,Bu=new Ne;class Ot extends ad{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Ou,Bu),t.subVectors(Bu,Ou)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,as=1;class P_ extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(os,as,e,t);s.layers=this.layers,this.add(s);const r=new Ot(os,as,e,t);r.layers=this.layers,this.add(r);const o=new Ot(os,as,e,t);o.layers=this.layers,this.add(o);const a=new Ot(os,as,e,t);a.layers=this.layers,this.add(a);const l=new Ot(os,as,e,t);l.layers=this.layers,this.add(l);const c=new Ot(os,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ld extends Tt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L_ extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ld(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new br(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:_i});r.uniforms.tEquirect.value=t;const o=new Qt(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=Et),new P_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ma=new U,D_=new U,I_=new Ve;class di{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ma.subVectors(i,t).cross(D_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||I_.getNormalMatrix(e),s=this.coplanarPoint(Ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Ln,Kr=new U;class fc{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],A=s[13],b=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-p,M-d).normalize(),i[1].setComponents(l+r,f+c,m+p,M+d).normalize(),i[2].setComponents(l+o,f+u,m+_,M+A).normalize(),i[3].setComponents(l-o,f-u,m-_,M-A).normalize(),i[4].setComponents(l-a,f-h,m-x,M-b).normalize(),t===$n)i[5].setComponents(l+a,f+h,m+x,M+b).normalize();else if(t===Ao)i[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function U_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ho extends mn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*f-o;for(let b=0;b<c;b++){const M=b*h-r;_.push(M,-A,0),x.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const b=A+c*d,M=A+c*(d+1),O=A+1+c*(d+1),D=A+1+c*d;p.push(b,M,D),p.push(M,O,D)}this.setIndex(p),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}var N_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F_=`#ifdef USE_ALPHAHASH
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
#endif`,O_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V_=`#ifdef USE_AOMAP
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
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G_=`#ifdef USE_BATCHING
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
#endif`,W_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q_=`#ifdef USE_IRIDESCENCE
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
#endif`,K_=`#ifdef USE_BUMPMAP
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
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,I0=`struct PhysicalMaterial {
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
}`,U0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vx=`float getShadowMask() {
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
}`,Mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
}`,Vx=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,Gx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,ev=`#define NORMAL
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
}`,tv=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,av=`#define TOON
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
}`,lv=`uniform float size;
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
}`,cv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,fv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:N_,alphahash_pars_fragment:F_,alphamap_fragment:O_,alphamap_pars_fragment:B_,alphatest_fragment:H_,alphatest_pars_fragment:z_,aomap_fragment:V_,aomap_pars_fragment:k_,batching_pars_vertex:G_,batching_vertex:W_,begin_vertex:X_,beginnormal_vertex:j_,bsdfs:Y_,iridescence_fragment:q_,bumpmap_pars_fragment:K_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:Q_,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:s0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:u0,colorspace_fragment:h0,colorspace_pars_fragment:f0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:w0,envmap_vertex:_0,fog_vertex:x0,fog_pars_vertex:v0,fog_fragment:M0,fog_pars_fragment:y0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:E0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:b0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:I0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:z0,map_fragment:V0,map_pars_fragment:k0,map_particle_fragment:G0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:j0,morphinstance_vertex:Y0,morphcolor_vertex:q0,morphnormal_vertex:K0,morphtarget_pars_vertex:$0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:ax,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:ux,project_vertex:hx,dithering_fragment:fx,dithering_pars_fragment:dx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:xx,shadowmask_pars_fragment:vx,skinbase_vertex:Mx,skinning_pars_vertex:yx,skinning_vertex:Sx,skinnormal_vertex:Ex,specularmap_fragment:Tx,specularmap_pars_fragment:bx,tonemapping_fragment:Ax,tonemapping_pars_fragment:wx,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Px,uv_pars_vertex:Lx,uv_vertex:Dx,worldpos_vertex:Ix,background_vert:Ux,background_frag:Nx,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:Hx,depth_vert:zx,depth_frag:Vx,distanceRGBA_vert:kx,distanceRGBA_frag:Gx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:jx,linedashed_frag:Yx,meshbasic_vert:qx,meshbasic_frag:Kx,meshlambert_vert:$x,meshlambert_frag:Zx,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:lv,points_frag:cv,shadow_vert:uv,shadow_frag:hv,sprite_vert:fv,sprite_frag:dv},me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Mn={basic:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Nt([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Nt([me.lights,me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Mn.physical={uniforms:Nt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const $r={r:0,b:0,g:0},Pi=new Pn,pv=new ke;function mv(n,e,t,i,s,r,o){const a=new Oe(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function x(A){let b=!1;const M=_(A);M===null?d(a,l):M&&M.isColor&&(d(M,1),b=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,b){const M=_(b);M&&(M.isCubeTexture||M.mapping===Oo)?(u===void 0&&(u=new Qt(new br(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ps(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pi.copy(b.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Pi)),u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==rt,(h!==M||f!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qt(new Ho(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ps(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,b){A.getRGB($r,od(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:x,addToRenderList:m}}function gv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,C,K,z,Y){let te=!1;const G=h(z,K,C);r!==G&&(r=G,c(r.object)),te=p(S,z,K,Y),te&&_(S,z,K,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(S,C,K,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,C,K){const z=K.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let te=Y[C.id];te===void 0&&(te={},Y[C.id]=te);let G=te[z];return G===void 0&&(G=f(l()),te[z]=G),G}function f(S){const C=[],K=[],z=[];for(let Y=0;Y<t;Y++)C[Y]=0,K[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:K,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,C,K,z){const Y=r.attributes,te=C.attributes;let G=0;const J=K.getAttributes();for(const V in J)if(J[V].location>=0){const fe=Y[V];let ye=te[V];if(ye===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),fe===void 0||fe.attribute!==ye||ye&&fe.data!==ye.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function _(S,C,K,z){const Y={},te=C.attributes;let G=0;const J=K.getAttributes();for(const V in J)if(J[V].location>=0){let fe=te[V];fe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));const ye={};ye.attribute=fe,fe&&fe.data&&(ye.data=fe.data),Y[V]=ye,G++}r.attributes=Y,r.attributesNum=G,r.index=z}function x(){const S=r.newAttributes;for(let C=0,K=S.length;C<K;C++)S[C]=0}function m(S){d(S,0)}function d(S,C){const K=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;K[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),Y[S]!==C&&(n.vertexAttribDivisor(S,C),Y[S]=C)}function A(){const S=r.newAttributes,C=r.enabledAttributes;for(let K=0,z=C.length;K<z;K++)C[K]!==S[K]&&(n.disableVertexAttribArray(K),C[K]=0)}function b(S,C,K,z,Y,te,G){G===!0?n.vertexAttribIPointer(S,C,K,Y,te):n.vertexAttribPointer(S,C,K,z,Y,te)}function M(S,C,K,z){x();const Y=z.attributes,te=K.getAttributes(),G=C.defaultAttributeValues;for(const J in te){const V=te[J];if(V.location>=0){let ce=Y[J];if(ce===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const fe=ce.normalized,ye=ce.itemSize,Te=e.get(ce);if(Te===void 0)continue;const Ge=Te.buffer,ne=Te.type,ue=Te.bytesPerElement,Se=ne===n.INT||ne===n.UNSIGNED_INT||ce.gpuType===sc;if(ce.isInterleavedBufferAttribute){const de=ce.data,Ce=de.stride,Ue=ce.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)d(V.location+Be,de.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<V.locationSize;Be++)m(V.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Be=0;Be<V.locationSize;Be++)b(V.location+Be,ye/V.locationSize,ne,fe,Ce*ue,(Ue+ye/V.locationSize*Be)*ue,Se)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)d(V.location+de,ce.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let de=0;de<V.locationSize;de++)b(V.location+de,ye/V.locationSize,ne,fe,ye*ue,ye/V.locationSize*de*ue,Se)}}else if(G!==void 0){const fe=G[J];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(V.location,fe);break;case 3:n.vertexAttrib3fv(V.location,fe);break;case 4:n.vertexAttrib4fv(V.location,fe);break;default:n.vertexAttrib1fv(V.location,fe)}}}}A()}function O(){P();for(const S in i){const C=i[S];for(const K in C){const z=C[K];for(const Y in z)u(z[Y].object),delete z[Y];delete C[K]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const K in C){const z=C[K];for(const Y in z)u(z[Y].object),delete z[Y];delete C[K]}delete i[S.id]}function R(S){for(const C in i){const K=i[C];if(K[S.id]===void 0)continue;const z=K[S.id];for(const Y in z)u(z[Y].object),delete z[Y];delete K[S.id]}}function P(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function _v(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wt&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:O,maxSamples:D}}function vv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new di,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,b=A*4;let M=d.clippingState||null;l.value=M,M=u(_,f,b,p);for(let O=0;O!==b;++O)M[O]=t[O];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==x;++b,M+=4)o.copy(h[b]).applyMatrix4(A,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Mv(n){let e=new WeakMap;function t(o,a){return a===To?o.mapping=Ts:a===il&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===il)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new L_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class dc extends ad{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,Hu=[.125,.215,.35,.446,.526,.582],Fi=20,ya=new dc,zu=new Oe;let Sa=null,Ea=0,Ta=0,ba=!1;const Ui=(1+Math.sqrt(5))/2,ls=1/Ui,Vu=[new U(-Ui,ls,0),new U(Ui,ls,0),new U(-ls,0,Ui),new U(ls,0,Ui),new U(0,Ui,-ls),new U(0,Ui,ls),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,Ea,Ta),this._renderer.xr.enabled=ba,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Kn,format:sn,colorSpace:Dt,depthBuffer:!1},s=Gu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yv(r)),this._blurMaterial=Sv(r,e,t)}return s}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,i,s){const a=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zu),u.toneMapping=xi,u.autoClear=!1;const p=new Oi({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new Qt(new br,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(zu),x=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;Zr(s,A*b,d>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ts||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vu[(s-r-1)%Vu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const d=[];let A=0;for(let R=0;R<Fi;++R){const P=R/x,T=Math.exp(-P*P/2);d.push(T),R===0?A+=T:R<m&&(A+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const M=this._sizeLods[s],O=3*M*(s>b-fs?s-b+fs:0),D=4*(this._cubeSize-M);Zr(t,O,D,3*M,2*M),l.setRenderTarget(t),l.render(h,ya)}}function yv(n){const e=[],t=[],i=[];let s=n;const r=n-fs+1+Hu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-fs?l=Hu[o-n+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,A=new Float32Array(x*_*p),b=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let D=0;D<p;D++){const R=D%3*2/3-1,P=D>2?0:-1,T=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];A.set(T,x*_*D),b.set(f,m*_*D);const S=[D,D,D,D,D,D];M.set(S,d*_*D)}const O=new mn;O.setAttribute("position",new Vt(A,x)),O.setAttribute("uv",new Vt(b,m)),O.setAttribute("faceIndex",new Vt(M,d)),e.push(O),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gu(n,e,t){const i=new Gi(n,e,t);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sv(n,e,t){const i=new Float32Array(Fi),s=new U(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Wu(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Xu(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function Ev(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===To||l===il,u=l===Ts||l===bs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ku(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ku(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Tv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bv(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let b=0,M=A.length;b<M;b+=3){const O=A[b+0],D=A[b+1],R=A[b+2];f.push(O,D,D,R,R,O)}}else if(_!==void 0){const A=_.array;x=_.version;for(let b=0,M=A.length/3-1;b<M;b+=3){const O=b+0,D=b+1,R=b+2;f.push(O,D,D,R,R,O)}}else return;const m=new(Qf(f)?rd:sd)(f,1);m.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Av(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*x[A];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Rv(n,e,t){const i=new WeakMap,s=new Ze;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let O=a.attributes.position.count*M,D=1;O>e.maxTextureSize&&(D=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*D*4*h),P=new td(R,O,D,h);P.type=Wt,P.needsUpdate=!0;const T=M*4;for(let C=0;C<h;C++){const K=d[C],z=A[C],Y=b[C],te=O*D*4*C;for(let G=0;G<K.count;G++){const J=G*T;_===!0&&(s.fromBufferAttribute(K,G),R[te+J+0]=s.x,R[te+J+1]=s.y,R[te+J+2]=s.z,R[te+J+3]=0),x===!0&&(s.fromBufferAttribute(z,G),R[te+J+4]=s.x,R[te+J+5]=s.y,R[te+J+6]=s.z,R[te+J+7]=0),m===!0&&(s.fromBufferAttribute(Y,G),R[te+J+8]=s.x,R[te+J+9]=s.y,R[te+J+10]=s.z,R[te+J+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new Ne(O,D)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Cv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class ud extends Tt{constructor(e,t,i,s,r,o,a,l,c,u=xs){if(u!==xs&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xs&&(i=ki),i===void 0&&u===Rs&&(i=ws),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hd=new Tt,ju=new ud(1,1),fd=new td,dd=new f_,pd=new ld,Yu=[],qu=[],Ku=new Float32Array(16),$u=new Float32Array(9),Zu=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zo(n,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Zu.set(i),n.uniformMatrix2fv(this.addr,!1,Zu),Mt(t,i)}}function Nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Mt(t,i)}}function Fv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Ku.set(i),n.uniformMatrix4fv(this.addr,!1,Ku),Mt(t,i)}}function Ov(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Xv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ju.compareFunction=Zf,r=ju):r=hd,t.setTexture2D(e||r,s)}function jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||dd,s)}function Yv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||pd,s)}function qv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fd,s)}function Kv(n){switch(n){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return Iv;case 35674:return Uv;case 35675:return Nv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return Hv;case 35669:case 35673:return zv;case 5125:return Vv;case 36294:return kv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return qv}}function $v(n,e){n.uniform1fv(this.addr,e)}function Zv(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function Jv(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function Qv(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function eM(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tM(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nM(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iM(n,e){n.uniform1iv(this.addr,e)}function sM(n,e){n.uniform2iv(this.addr,e)}function rM(n,e){n.uniform3iv(this.addr,e)}function oM(n,e){n.uniform4iv(this.addr,e)}function aM(n,e){n.uniform1uiv(this.addr,e)}function lM(n,e){n.uniform2uiv(this.addr,e)}function cM(n,e){n.uniform3uiv(this.addr,e)}function uM(n,e){n.uniform4uiv(this.addr,e)}function hM(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||hd,r[o])}function fM(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dd,r[o])}function dM(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||pd,r[o])}function pM(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fd,r[o])}function mM(n){switch(n){case 5126:return $v;case 35664:return Zv;case 35665:return Jv;case 35666:return Qv;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}class gM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kv(t.type)}}class _M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mM(t.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Ju(n,e){n.seq.push(e),n.map[e.id]=e}function vM(n,e,t){const i=n.name,s=i.length;for(Aa.lastIndex=0;;){const r=Aa.exec(i),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ju(t,c===void 0?new gM(a,n,e):new _M(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new xM(a),Ju(t,h)),t=h}}}class _o{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Qu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MM=37297;let yM=0;function SM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const eh=new Ve;function EM(n){Ke._getMatrix(eh,Ke.workingColorSpace,n);const e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Bo:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+SM(n.getShaderSource(e),o)}else return s}function TM(n,e){const t=EM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bM(n,e){let t;switch(e){case Sg:t="Linear";break;case Eg:t="Reinhard";break;case Tg:t="Cineon";break;case bg:t="ACESFilmic";break;case wg:t="AgX";break;case Rg:t="Neutral";break;case Ag:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jr=new U;function AM(){Ke.getLuminanceCoefficients(Jr);const n=Jr.x.toFixed(4),e=Jr.y.toFixed(4),t=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function RM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function er(n){return n!==""}function nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(PM,DM)}const LM=new Map;function DM(n,e){let t=We[e];if(t===void 0){const i=LM.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(n){return n.replace(IM,UM)}function UM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function NM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function FM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function BM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case yg:e="ENVMAP_BLENDING_ADD";break}return e}function HM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=NM(t),c=FM(t),u=OM(t),h=BM(t),f=HM(t),p=wM(t),_=RM(r),x=s.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),d.length>0&&(d+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?We.tonemapping_pars_fragment:"",t.toneMapping!==xi?bM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,TM("linearToOutputTexel",t.outputColorSpace),AM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Dl(o),o=nh(o,t),o=ih(o,t),a=Dl(a),a=nh(a,t),a=ih(a,t),o=sh(o),a=sh(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=A+m+o,M=A+d+a,O=Qu(s,s.VERTEX_SHADER,b),D=Qu(s,s.FRAGMENT_SHADER,M);s.attachShader(x,O),s.attachShader(x,D),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(C){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(D).trim();let te=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,D);else{const J=th(s,O,"vertex"),V=th(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+K+`
`+J+`
`+V)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(z===""||Y==="")&&(G=!1);G&&(C.diagnostics={runnable:te,programLog:K,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(O),s.deleteShader(D),P=new _o(s,x),T=CM(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,MM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=D,this}let VM=0;class kM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new GM(e),t.set(e,i)),i}}class GM{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}}function WM(n,e,t,i,s,r,o){const a=new nd,l=new kM,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,C,K,z){const Y=K.fog,te=z.geometry,G=T.isMeshStandardMaterial?K.environment:null,J=(T.isMeshStandardMaterial?t:e).get(T.envMap||G),V=J&&J.mapping===Oo?J.image.height:null,ce=_[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const fe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ye=fe!==void 0?fe.length:0;let Te=0;te.morphAttributes.position!==void 0&&(Te=1),te.morphAttributes.normal!==void 0&&(Te=2),te.morphAttributes.color!==void 0&&(Te=3);let Ge,ne,ue,Se;if(ce){const nt=Mn[ce];Ge=nt.vertexShader,ne=nt.fragmentShader}else Ge=T.vertexShader,ne=T.fragmentShader,l.update(T),ue=l.getVertexShaderID(T),Se=l.getFragmentShaderID(T);const de=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,lt=!!T.map,qe=!!T.matcap,w=!!J,v=!!T.aoMap,q=!!T.lightMap,Q=!!T.bumpMap,$=!!T.normalMap,W=!!T.displacementMap,re=!!T.emissiveMap,Z=!!T.metalnessMap,y=!!T.roughnessMap,g=T.anisotropy>0,L=T.clearcoat>0,N=T.dispersion>0,k=T.iridescence>0,H=T.sheen>0,le=T.transmission>0,oe=g&&!!T.anisotropyMap,ae=L&&!!T.clearcoatMap,Ie=L&&!!T.clearcoatNormalMap,se=L&&!!T.clearcoatRoughnessMap,pe=k&&!!T.iridescenceMap,Ee=k&&!!T.iridescenceThicknessMap,Pe=H&&!!T.sheenColorMap,Me=H&&!!T.sheenRoughnessMap,De=!!T.specularMap,Le=!!T.specularColorMap,tt=!!T.specularIntensityMap,I=le&&!!T.transmissionMap,ge=le&&!!T.thicknessMap,ee=!!T.gradientMap,ie=!!T.alphaMap,ve=T.alphaTest>0,_e=!!T.alphaHash,He=!!T.extensions;let mt=xi;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Rt={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:ne,defines:T.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Dt,alphaToCoverage:!!T.alphaToCoverage,map:lt,matcap:qe,envMap:w,envMapMode:w&&J.mapping,envMapCubeUVHeight:V,aoMap:v,lightMap:q,bumpMap:Q,normalMap:$,displacementMap:f&&W,emissiveMap:re,normalMapObjectSpace:$&&T.normalMapType===Ug,normalMapTangentSpace:$&&T.normalMapType===$f,metalnessMap:Z,roughnessMap:y,anisotropy:g,anisotropyMap:oe,clearcoat:L,clearcoatMap:ae,clearcoatNormalMap:Ie,clearcoatRoughnessMap:se,dispersion:N,iridescence:k,iridescenceMap:pe,iridescenceThicknessMap:Ee,sheen:H,sheenColorMap:Pe,sheenRoughnessMap:Me,specularMap:De,specularColorMap:Le,specularIntensityMap:tt,transmission:le,transmissionMap:I,thicknessMap:ge,gradientMap:ee,opaque:T.transparent===!1&&T.blending===_s&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:ve,alphaHash:_e,combine:T.combine,mapUv:lt&&x(T.map.channel),aoMapUv:v&&x(T.aoMap.channel),lightMapUv:q&&x(T.lightMap.channel),bumpMapUv:Q&&x(T.bumpMap.channel),normalMapUv:$&&x(T.normalMap.channel),displacementMapUv:W&&x(T.displacementMap.channel),emissiveMapUv:re&&x(T.emissiveMap.channel),metalnessMapUv:Z&&x(T.metalnessMap.channel),roughnessMapUv:y&&x(T.roughnessMap.channel),anisotropyMapUv:oe&&x(T.anisotropyMap.channel),clearcoatMapUv:ae&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(T.sheenRoughnessMap.channel),specularMapUv:De&&x(T.specularMap.channel),specularColorMapUv:Le&&x(T.specularColorMap.channel),specularIntensityMapUv:tt&&x(T.specularIntensityMap.channel),transmissionMapUv:I&&x(T.transmissionMap.channel),thicknessMapUv:ge&&x(T.thicknessMap.channel),alphaMapUv:ie&&x(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&($||g),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(lt||ie),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:lt&&T.map.isVideoTexture===!0&&Ke.getTransfer(T.map.colorSpace)===rt,decodeVideoTextureEmissive:re&&T.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(T.emissiveMap.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yn,flipSided:T.side===Xt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)S.push(C),S.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(A(S,T),b(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function A(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function b(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const S=_[T.type];let C;if(S){const K=Mn[S];C=w_.clone(K.uniforms)}else C=T.uniforms;return C}function O(T,S){let C;for(let K=0,z=u.length;K<z;K++){const Y=u[K];if(Y.cacheKey===S){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new zM(n,S,T,r),u.push(C)),C}function D(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:O,releaseProgram:D,releaseShaderCache:R,programs:u,dispose:P}}function XM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function jM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function oh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ah(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,_,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,_,x,m){const d=o(h,f,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,_,x,m){const d=o(h,f,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||jM),i.length>1&&i.sort(f||oh),s.length>1&&s.sort(f||oh)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function YM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ah,n.set(i,[o])):s>=r.length?(o=new ah,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Oe};break;case"SpotLight":t={position:new U,direction:new U,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function KM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $M=0;function ZM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JM(n){const e=new qM,t=KM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new ke,o=new ke;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,A=0,b=0,M=0,O=0,D=0,R=0;c.sort(ZM);for(let T=0,S=c.length;T<S;T++){const C=c[T],K=C.color,z=C.intensity,Y=C.distance,te=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=K.r*z,h+=K.g*z,f+=K.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],z);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(K).multiplyScalar(z),G.distance=Y,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[x]=G;const J=C.shadow;if(C.map&&(i.spotLightMap[O]=C.map,O++,J.updateMatrices(C),C.castShadow&&D++),i.spotLightMatrix[x]=J.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=te,M++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(K).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const J=C.shadow,V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=C.shadow.matrix,b++}i.point[_]=G,_++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[d]=G,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==A||P.numPointShadows!==b||P.numSpotShadows!==M||P.numSpotMaps!==O||P.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+O-D,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,P.directionalLength=p,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=A,P.numPointShadows=b,P.numSpotShadows=M,P.numSpotMaps=O,P.numLightProbes=R,i.version=$M++)}function l(c,u){let h=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const b=c[d];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function lh(n){const e=new JM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function QM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new lh(n),e.set(s,[a])):r>=o.length?(a=new lh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ey extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ty extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`;function sy(n,e,t){let i=new fc;const s=new Ne,r=new Ne,o=new Ze,a=new ey({depthPacking:Ig}),l=new ty,c={},u=t.maxTextureSize,h={[Jn]:Xt,[Xt]:Jn,[yn]:yn},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new mn;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let d=this.type;this.render=function(D,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),K=n.state;K.setBlending(_i),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const z=d!==Gn&&this.type===Gn,Y=d===Gn&&this.type!==Gn;for(let te=0,G=D.length;te<G;te++){const J=D[te],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ce=V.getFrameExtents();if(s.multiply(ce),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,V.mapSize.y=r.y)),V.map===null||z===!0||Y===!0){const ye=this.type!==Gn?{minFilter:zt,magFilter:zt}:{};V.map!==null&&V.map.dispose(),V.map=new Gi(s.x,s.y,ye),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const fe=V.getViewportCount();for(let ye=0;ye<fe;ye++){const Te=V.getViewport(ye);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),K.viewport(o),V.updateMatrices(J,ye),i=V.getFrustum(),M(R,P,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Gn&&A(V,P),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,C)};function A(D,R){const P=e.update(x);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Gi(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,P,f,x,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,P,p,x,null)}function b(D,R,P,T){let S=null;const C=P.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=S.uuid,z=R.uuid;let Y=c[K];Y===void 0&&(Y={},c[K]=Y);let te=Y[z];te===void 0&&(te=S.clone(),Y[z]=te,R.addEventListener("dispose",O)),S=te}if(S.visible=R.visible,S.wireframe=R.wireframe,T===Gn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=P}return S}function M(D,R,P,T,S){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Gn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,D.matrixWorld);const z=e.update(D),Y=D.material;if(Array.isArray(Y)){const te=z.groups;for(let G=0,J=te.length;G<J;G++){const V=te[G],ce=Y[V.materialIndex];if(ce&&ce.visible){const fe=b(D,ce,T,S);D.onBeforeShadow(n,D,R,P,z,fe,V),n.renderBufferDirect(P,null,z,fe,D,V),D.onAfterShadow(n,D,R,P,z,fe,V)}}}else if(Y.visible){const te=b(D,Y,T,S);D.onBeforeShadow(n,D,R,P,z,te,null),n.renderBufferDirect(P,null,z,te,D,null),D.onAfterShadow(n,D,R,P,z,te,null)}}const K=D.children;for(let z=0,Y=K.length;z<Y;z++)M(K[z],R,P,T,S)}function O(D){D.target.removeEventListener("dispose",O);for(const P in c){const T=c[P],S=D.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const ry={[$a]:Za,[Ja]:tl,[Qa]:nl,[Es]:el,[Za]:$a,[tl]:Ja,[nl]:Qa,[el]:Es};function oy(n,e){function t(){let I=!1;const ge=new Ze;let ee=null;const ie=new Ze(0,0,0,0);return{setMask:function(ve){ee!==ve&&!I&&(n.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){I=ve},setClear:function(ve,_e,He,mt,Rt){Rt===!0&&(ve*=mt,_e*=mt,He*=mt),ge.set(ve,_e,He,mt),ie.equals(ge)===!1&&(n.clearColor(ve,_e,He,mt),ie.copy(ge))},reset:function(){I=!1,ee=null,ie.set(-1,0,0,0)}}}function i(){let I=!1,ge=!1,ee=null,ie=null,ve=null;return{setReversed:function(_e){if(ge!==_e){const He=e.get("EXT_clip_control");ge?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const mt=ve;ve=null,this.setClear(mt)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?de(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(_e){ee!==_e&&!I&&(n.depthMask(_e),ee=_e)},setFunc:function(_e){if(ge&&(_e=ry[_e]),ie!==_e){switch(_e){case $a:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case Ja:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=_e}},setLocked:function(_e){I=_e},setClear:function(_e){ve!==_e&&(ge&&(_e=1-_e),n.clearDepth(_e),ve=_e)},reset:function(){I=!1,ee=null,ie=null,ve=null,ge=!1}}}function s(){let I=!1,ge=null,ee=null,ie=null,ve=null,_e=null,He=null,mt=null,Rt=null;return{setTest:function(nt){I||(nt?de(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!I&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,rn,Un){(ee!==nt||ie!==rn||ve!==Un)&&(n.stencilFunc(nt,rn,Un),ee=nt,ie=rn,ve=Un)},setOp:function(nt,rn,Un){(_e!==nt||He!==rn||mt!==Un)&&(n.stencilOp(nt,rn,Un),_e=nt,He=rn,mt=Un)},setLocked:function(nt){I=nt},setClear:function(nt){Rt!==nt&&(n.clearStencil(nt),Rt=nt)},reset:function(){I=!1,ge=null,ee=null,ie=null,ve=null,_e=null,He=null,mt=null,Rt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,A=null,b=null,M=null,O=null,D=null,R=new Oe(0,0,0),P=0,T=!1,S=null,C=null,K=null,z=null,Y=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=J>=2);let ce=null,fe={};const ye=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Ge=new Ze().fromArray(ye),ne=new Ze().fromArray(Te);function ue(I,ge,ee,ie){const ve=new Uint8Array(4),_e=n.createTexture();n.bindTexture(I,_e),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ee;He++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ge+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return _e}const Se={};Se[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(Es),Q(!1),$(lu),de(n.CULL_FACE),v(_i);function de(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ce(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ue(I,ge){return h[I]!==ge?(n.bindFramebuffer(I,ge),h[I]=ge,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Be(I,ge){let ee=p,ie=!1;if(I){ee=f.get(ge),ee===void 0&&(ee=[],f.set(ge,ee));const ve=I.textures;if(ee.length!==ve.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,He=ve.length;_e<He;_e++)ee[_e]=n.COLOR_ATTACHMENT0+_e;ee.length=ve.length,ie=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ie=!0);ie&&n.drawBuffers(ee)}function lt(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const qe={[Ni]:n.FUNC_ADD,[ig]:n.FUNC_SUBTRACT,[sg]:n.FUNC_REVERSE_SUBTRACT};qe[rg]=n.MIN,qe[og]=n.MAX;const w={[ag]:n.ZERO,[lg]:n.ONE,[cg]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[mg]:n.SRC_ALPHA_SATURATE,[dg]:n.DST_COLOR,[hg]:n.DST_ALPHA,[ug]:n.ONE_MINUS_SRC_COLOR,[Ka]:n.ONE_MINUS_SRC_ALPHA,[pg]:n.ONE_MINUS_DST_COLOR,[fg]:n.ONE_MINUS_DST_ALPHA,[gg]:n.CONSTANT_COLOR,[_g]:n.ONE_MINUS_CONSTANT_COLOR,[xg]:n.CONSTANT_ALPHA,[vg]:n.ONE_MINUS_CONSTANT_ALPHA};function v(I,ge,ee,ie,ve,_e,He,mt,Rt,nt){if(I===_i){x===!0&&(Ce(n.BLEND),x=!1);return}if(x===!1&&(de(n.BLEND),x=!0),I!==ng){if(I!==m||nt!==T){if((d!==Ni||M!==Ni)&&(n.blendEquation(n.FUNC_ADD),d=Ni,M=Ni),nt)switch(I){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,b=null,O=null,D=null,R.set(0,0,0),P=0,m=I,T=nt}return}ve=ve||ge,_e=_e||ee,He=He||ie,(ge!==d||ve!==M)&&(n.blendEquationSeparate(qe[ge],qe[ve]),d=ge,M=ve),(ee!==A||ie!==b||_e!==O||He!==D)&&(n.blendFuncSeparate(w[ee],w[ie],w[_e],w[He]),A=ee,b=ie,O=_e,D=He),(mt.equals(R)===!1||Rt!==P)&&(n.blendColor(mt.r,mt.g,mt.b,Rt),R.copy(mt),P=Rt),m=I,T=!1}function q(I,ge){I.side===yn?Ce(n.CULL_FACE):de(n.CULL_FACE);let ee=I.side===Xt;ge&&(ee=!ee),Q(ee),I.blending===_s&&I.transparent===!1?v(_i):v(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ie=I.stencilWrite;a.setTest(ie),ie&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function $(I){I!==Qm?(de(n.CULL_FACE),I!==C&&(I===lu?n.cullFace(n.BACK):I===eg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),C=I}function W(I){I!==K&&(G&&n.lineWidth(I),K=I)}function re(I,ge,ee){I?(de(n.POLYGON_OFFSET_FILL),(z!==ge||Y!==ee)&&(n.polygonOffset(ge,ee),z=ge,Y=ee)):Ce(n.POLYGON_OFFSET_FILL)}function Z(I){I?de(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function y(I){I===void 0&&(I=n.TEXTURE0+te-1),ce!==I&&(n.activeTexture(I),ce=I)}function g(I,ge,ee){ee===void 0&&(ce===null?ee=n.TEXTURE0+te-1:ee=ce);let ie=fe[ee];ie===void 0&&(ie={type:void 0,texture:void 0},fe[ee]=ie),(ie.type!==I||ie.texture!==ge)&&(ce!==ee&&(n.activeTexture(ee),ce=ee),n.bindTexture(I,ge||Se[I]),ie.type=I,ie.texture=ge)}function L(){const I=fe[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){Ge.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ge.copy(I))}function Me(I){ne.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ne.copy(I))}function De(I,ge){let ee=c.get(ge);ee===void 0&&(ee=new WeakMap,c.set(ge,ee));let ie=ee.get(I);ie===void 0&&(ie=n.getUniformBlockIndex(ge,I.name),ee.set(I,ie))}function Le(I,ge){const ie=c.get(ge).get(I);l.get(ge)!==ie&&(n.uniformBlockBinding(ge,ie,I.__bindingPointIndex),l.set(ge,ie))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,fe={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,A=null,b=null,M=null,O=null,D=null,R=new Oe(0,0,0),P=0,T=!1,S=null,C=null,K=null,z=null,Y=null,Ge.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ce,bindFramebuffer:Ue,drawBuffers:Be,useProgram:lt,setBlending:v,setMaterial:q,setFlipSided:Q,setCullFace:$,setLineWidth:W,setPolygonOffset:re,setScissorTest:Z,activeTexture:y,bindTexture:g,unbindTexture:L,compressedTexImage2D:N,compressedTexImage3D:k,texImage2D:pe,texImage3D:Ee,updateUBOMapping:De,uniformBlockBinding:Le,texStorage2D:Ie,texStorage3D:se,texSubImage2D:H,texSubImage3D:le,compressedTexSubImage2D:oe,compressedTexSubImage3D:ae,scissor:Pe,viewport:Me,reset:tt}}function ch(n,e,t,i){const s=ay(i);switch(t){case Gf:return n*e;case Xf:return n*e;case jf:return n*e*2;case ac:return n*e/s.components*s.byteLength;case lc:return n*e/s.components*s.byteLength;case Yf:return n*e*2/s.components*s.byteLength;case cc:return n*e*2/s.components*s.byteLength;case Wf:return n*e*3/s.components*s.byteLength;case sn:return n*e*4/s.components*s.byteLength;case uc:return n*e*4/s.components*s.byteLength;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:case al:return Math.max(n,16)*Math.max(e,8)/4;case sl:case ol:return Math.max(n,8)*Math.max(e,8)/2;case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case go:case bl:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qf:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ay(n){switch(n){case Qn:case zf:return{byteLength:1,components:1};case xr:case Vf:case Kn:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case ki:case sc:case Wt:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ly(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):yr("canvas")}function x(y,g,L){let N=1;const k=Z(y);if((k.width>L||k.height>L)&&(N=L/Math.max(k.width,k.height)),N<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const H=Math.floor(N*k.width),le=Math.floor(N*k.height);h===void 0&&(h=_(H,le));const oe=g?_(H,le):h;return oe.width=H,oe.height=le,oe.getContext("2d").drawImage(y,0,0,H,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+H+"x"+le+")."),oe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(y,g,L,N,k=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let H=g;if(g===n.RED&&(L===n.FLOAT&&(H=n.R32F),L===n.HALF_FLOAT&&(H=n.R16F),L===n.UNSIGNED_BYTE&&(H=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.R8UI),L===n.UNSIGNED_SHORT&&(H=n.R16UI),L===n.UNSIGNED_INT&&(H=n.R32UI),L===n.BYTE&&(H=n.R8I),L===n.SHORT&&(H=n.R16I),L===n.INT&&(H=n.R32I)),g===n.RG&&(L===n.FLOAT&&(H=n.RG32F),L===n.HALF_FLOAT&&(H=n.RG16F),L===n.UNSIGNED_BYTE&&(H=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RG8UI),L===n.UNSIGNED_SHORT&&(H=n.RG16UI),L===n.UNSIGNED_INT&&(H=n.RG32UI),L===n.BYTE&&(H=n.RG8I),L===n.SHORT&&(H=n.RG16I),L===n.INT&&(H=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGB8UI),L===n.UNSIGNED_SHORT&&(H=n.RGB16UI),L===n.UNSIGNED_INT&&(H=n.RGB32UI),L===n.BYTE&&(H=n.RGB8I),L===n.SHORT&&(H=n.RGB16I),L===n.INT&&(H=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),L===n.UNSIGNED_INT&&(H=n.RGBA32UI),L===n.BYTE&&(H=n.RGBA8I),L===n.SHORT&&(H=n.RGBA16I),L===n.INT&&(H=n.RGBA32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),g===n.RGBA){const le=k?Bo:Ke.getTransfer(N);L===n.FLOAT&&(H=n.RGBA32F),L===n.HALF_FLOAT&&(H=n.RGBA16F),L===n.UNSIGNED_BYTE&&(H=le===rt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function M(y,g){let L;return y?g===null||g===ki||g===ws?L=n.DEPTH24_STENCIL8:g===Wt?L=n.DEPTH32F_STENCIL8:g===xr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ki||g===ws?L=n.DEPTH_COMPONENT24:g===Wt?L=n.DEPTH_COMPONENT32F:g===xr&&(L=n.DEPTH_COMPONENT16),L}function O(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==zt&&y.minFilter!==Et?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function D(y){const g=y.target;g.removeEventListener("dispose",D),P(g),g.isVideoTexture&&u.delete(g)}function R(y){const g=y.target;g.removeEventListener("dispose",R),S(g)}function P(y){const g=i.get(y);if(g.__webglInit===void 0)return;const L=y.source,N=f.get(L);if(N){const k=N[g.__cacheKey];k.usedTimes--,k.usedTimes===0&&T(y),Object.keys(N).length===0&&f.delete(L)}i.remove(y)}function T(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const L=y.source,N=f.get(L);delete N[g.__cacheKey],o.memory.textures--}function S(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(g.__webglFramebuffer[N]))for(let k=0;k<g.__webglFramebuffer[N].length;k++)n.deleteFramebuffer(g.__webglFramebuffer[N][k]);else n.deleteFramebuffer(g.__webglFramebuffer[N]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[N])}else{if(Array.isArray(g.__webglFramebuffer))for(let N=0;N<g.__webglFramebuffer.length;N++)n.deleteFramebuffer(g.__webglFramebuffer[N]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let N=0;N<g.__webglColorRenderbuffer.length;N++)g.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[N]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=y.textures;for(let N=0,k=L.length;N<k;N++){const H=i.get(L[N]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(L[N])}i.remove(y)}let C=0;function K(){C=0}function z(){const y=C;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),C+=1,y}function Y(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function te(y,g){const L=i.get(y);if(y.isVideoTexture&&W(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const N=y.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(L,y,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function G(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){ne(L,y,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function J(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){ne(L,y,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function V(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){ue(L,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const ce={[As]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},fe={[zt]:n.NEAREST,[Hf]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},ye={[Ng]:n.NEVER,[Vg]:n.ALWAYS,[Fg]:n.LESS,[Zf]:n.LEQUAL,[Og]:n.EQUAL,[zg]:n.GEQUAL,[Bg]:n.GREATER,[Hg]:n.NOTEQUAL};function Te(y,g){if(g.type===Wt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Et||g.magFilter===uo||g.magFilter===Js||g.magFilter===Tn||g.minFilter===Et||g.minFilter===uo||g.minFilter===Js||g.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ce[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ce[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ce[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,fe[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,fe[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===zt||g.minFilter!==Js&&g.minFilter!==Tn||g.type===Wt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ge(y,g){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",D));const N=g.source;let k=f.get(N);k===void 0&&(k={},f.set(N,k));const H=Y(g);if(H!==y.__cacheKey){k[H]===void 0&&(k[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),k[H].usedTimes++;const le=k[y.__cacheKey];le!==void 0&&(k[y.__cacheKey].usedTimes--,le.usedTimes===0&&T(g)),y.__cacheKey=H,y.__webglTexture=k[H].texture}return L}function ne(y,g,L){let N=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(N=n.TEXTURE_3D);const k=Ge(y,g),H=g.source;t.bindTexture(N,y.__webglTexture,n.TEXTURE0+L);const le=i.get(H);if(H.version!==le.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const oe=Ke.getPrimaries(Ke.workingColorSpace),ae=g.colorSpace===mi?null:Ke.getPrimaries(g.colorSpace),Ie=g.colorSpace===mi||oe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=x(g.image,!1,s.maxTextureSize);se=re(g,se);const pe=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type);let Pe=b(g.internalFormat,pe,Ee,g.colorSpace,g.isVideoTexture);Te(N,g);let Me;const De=g.mipmaps,Le=g.isVideoTexture!==!0,tt=le.__version===void 0||k===!0,I=H.dataReady,ge=O(g,se);if(g.isDepthTexture)Pe=M(g.format===Rs,g.type),tt&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,pe,Ee,null));else if(g.isDataTexture)if(De.length>0){Le&&tt&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,De[0].width,De[0].height);for(let ee=0,ie=De.length;ee<ie;ee++)Me=De[ee],Le?I&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Me.width,Me.height,pe,Ee,Me.data):t.texImage2D(n.TEXTURE_2D,ee,Pe,Me.width,Me.height,0,pe,Ee,Me.data);g.generateMipmaps=!1}else Le?(tt&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,se.width,se.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,pe,Ee,se.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,pe,Ee,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Le&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Pe,De[0].width,De[0].height,se.depth);for(let ee=0,ie=De.length;ee<ie;ee++)if(Me=De[ee],g.format!==sn)if(pe!==null)if(Le){if(I)if(g.layerUpdates.size>0){const ve=ch(Me.width,Me.height,g.format,g.type);for(const _e of g.layerUpdates){const He=Me.data.subarray(_e*ve/Me.data.BYTES_PER_ELEMENT,(_e+1)*ve/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,_e,Me.width,Me.height,1,pe,He)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Me.width,Me.height,se.depth,pe,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Pe,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Me.width,Me.height,se.depth,pe,Ee,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Pe,Me.width,Me.height,se.depth,0,pe,Ee,Me.data)}else{Le&&tt&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,De[0].width,De[0].height);for(let ee=0,ie=De.length;ee<ie;ee++)Me=De[ee],g.format!==sn?pe!==null?Le?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Me.width,Me.height,pe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Pe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Me.width,Me.height,pe,Ee,Me.data):t.texImage2D(n.TEXTURE_2D,ee,Pe,Me.width,Me.height,0,pe,Ee,Me.data)}else if(g.isDataArrayTexture)if(Le){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Pe,se.width,se.height,se.depth),I)if(g.layerUpdates.size>0){const ee=ch(se.width,se.height,g.format,g.type);for(const ie of g.layerUpdates){const ve=se.data.subarray(ie*ee/se.data.BYTES_PER_ELEMENT,(ie+1)*ee/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,se.width,se.height,1,pe,Ee,ve)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,Ee,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,pe,Ee,se.data);else if(g.isData3DTexture)Le?(tt&&t.texStorage3D(n.TEXTURE_3D,ge,Pe,se.width,se.height,se.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,Ee,se.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,pe,Ee,se.data);else if(g.isFramebufferTexture){if(tt)if(Le)t.texStorage2D(n.TEXTURE_2D,ge,Pe,se.width,se.height);else{let ee=se.width,ie=se.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,Pe,ee,ie,0,pe,Ee,null),ee>>=1,ie>>=1}}else if(De.length>0){if(Le&&tt){const ee=Z(De[0]);t.texStorage2D(n.TEXTURE_2D,ge,Pe,ee.width,ee.height)}for(let ee=0,ie=De.length;ee<ie;ee++)Me=De[ee],Le?I&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,pe,Ee,Me):t.texImage2D(n.TEXTURE_2D,ee,Pe,pe,Ee,Me);g.generateMipmaps=!1}else if(Le){if(tt){const ee=Z(se);t.texStorage2D(n.TEXTURE_2D,ge,Pe,ee.width,ee.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ee,se)}else t.texImage2D(n.TEXTURE_2D,0,Pe,pe,Ee,se);m(g)&&d(N),le.__version=H.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ue(y,g,L){if(g.image.length!==6)return;const N=Ge(y,g),k=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const H=i.get(k);if(k.version!==H.__version||N===!0){t.activeTexture(n.TEXTURE0+L);const le=Ke.getPrimaries(Ke.workingColorSpace),oe=g.colorSpace===mi?null:Ke.getPrimaries(g.colorSpace),ae=g.colorSpace===mi||le===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Ie=g.isCompressedTexture||g.image[0].isCompressedTexture,se=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!Ie&&!se?pe[ie]=x(g.image[ie],!0,s.maxCubemapSize):pe[ie]=se?g.image[ie].image:g.image[ie],pe[ie]=re(g,pe[ie]);const Ee=pe[0],Pe=r.convert(g.format,g.colorSpace),Me=r.convert(g.type),De=b(g.internalFormat,Pe,Me,g.colorSpace),Le=g.isVideoTexture!==!0,tt=H.__version===void 0||N===!0,I=k.dataReady;let ge=O(g,Ee);Te(n.TEXTURE_CUBE_MAP,g);let ee;if(Ie){Le&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,De,Ee.width,Ee.height);for(let ie=0;ie<6;ie++){ee=pe[ie].mipmaps;for(let ve=0;ve<ee.length;ve++){const _e=ee[ve];g.format!==sn?Pe!==null?Le?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,_e.width,_e.height,Pe,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,_e.width,_e.height,Pe,Me,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,De,_e.width,_e.height,0,Pe,Me,_e.data)}}}else{if(ee=g.mipmaps,Le&&tt){ee.length>0&&ge++;const ie=Z(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,De,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(se){Le?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Pe,Me,pe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,De,pe[ie].width,pe[ie].height,0,Pe,Me,pe[ie].data);for(let ve=0;ve<ee.length;ve++){const He=ee[ve].image[ie].image;Le?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,He.width,He.height,Pe,Me,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,De,He.width,He.height,0,Pe,Me,He.data)}}else{Le?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,Me,pe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,De,Pe,Me,pe[ie]);for(let ve=0;ve<ee.length;ve++){const _e=ee[ve];Le?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,Pe,Me,_e.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,De,Pe,Me,_e.image[ie])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),H.__version=k.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Se(y,g,L,N,k,H){const le=r.convert(L.format,L.colorSpace),oe=r.convert(L.type),ae=b(L.internalFormat,le,oe,L.colorSpace),Ie=i.get(g),se=i.get(L);if(se.__renderTarget=g,!Ie.__hasExternalTextures){const pe=Math.max(1,g.width>>H),Ee=Math.max(1,g.height>>H);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,H,ae,pe,Ee,g.depth,0,le,oe,null):t.texImage2D(k,H,ae,pe,Ee,0,le,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,k,se.__webglTexture,0,Q(g)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,k,se.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(y,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const N=g.depthTexture,k=N&&N.isDepthTexture?N.type:null,H=M(g.stencilBuffer,k),le=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Q(g);$(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,H,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,H,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,H,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,y)}else{const N=g.textures;for(let k=0;k<N.length;k++){const H=N[k],le=r.convert(H.format,H.colorSpace),oe=r.convert(H.type),ae=b(H.internalFormat,le,oe,H.colorSpace),Ie=Q(g);L&&$(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ae,g.width,g.height):$(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=i.get(g.depthTexture);N.__renderTarget=g,(!N.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const k=N.__webglTexture,H=Q(g);if(g.depthTexture.format===xs)$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(g.depthTexture.format===Rs)$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Ue(y){const g=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const N=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),N){const k=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,N.removeEventListener("dispose",k)};N.addEventListener("dispose",k),g.__depthDisposeCallback=k}g.__boundDepthTexture=N}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Ce(g.__webglFramebuffer,y)}else if(L){g.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[N]),g.__webglDepthbuffer[N]===void 0)g.__webglDepthbuffer[N]=n.createRenderbuffer(),de(g.__webglDepthbuffer[N],y,!1);else{const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),de(g.__webglDepthbuffer,y,!1);else{const N=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(y,g,L){const N=i.get(y);g!==void 0&&Se(N.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ue(y)}function lt(y){const g=y.texture,L=i.get(y),N=i.get(g);y.addEventListener("dispose",R);const k=y.textures,H=y.isWebGLCubeRenderTarget===!0,le=k.length>1;if(le||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=g.version,o.memory.textures++),H){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let ae=0;ae<g.mipmaps.length;ae++)L.__webglFramebuffer[oe][ae]=n.createFramebuffer()}else L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(le)for(let oe=0,ae=k.length;oe<ae;oe++){const Ie=i.get(k[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&$(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<k.length;oe++){const ae=k[oe];L.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);const Ie=r.convert(ae.format,ae.colorSpace),se=r.convert(ae.type),pe=b(ae.internalFormat,Ie,se,ae.colorSpace,y.isXRRenderTarget===!0),Ee=Q(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,pe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),de(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),Te(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)Se(L.__webglFramebuffer[oe][ae],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Se(L.__webglFramebuffer[oe],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let oe=0,ae=k.length;oe<ae;oe++){const Ie=k[oe],se=i.get(Ie);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Te(n.TEXTURE_2D,Ie),Se(L.__webglFramebuffer,y,Ie,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ie)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(oe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,N.__webglTexture),Te(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)Se(L.__webglFramebuffer[ae],y,g,n.COLOR_ATTACHMENT0,oe,ae);else Se(L.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),t.unbindTexture()}y.depthBuffer&&Ue(y)}function qe(y){const g=y.textures;for(let L=0,N=g.length;L<N;L++){const k=g[L];if(m(k)){const H=A(y),le=i.get(k).__webglTexture;t.bindTexture(H,le),d(H),t.unbindTexture()}}}const w=[],v=[];function q(y){if(y.samples>0){if($(y)===!1){const g=y.textures,L=y.width,N=y.height;let k=n.COLOR_BUFFER_BIT;const H=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(y),oe=g.length>1;if(oe)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const Ie=i.get(g[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,L,N,0,0,L,N,k,n.NEAREST),l===!0&&(w.length=0,v.length=0,w.push(n.COLOR_ATTACHMENT0+ae),y.depthBuffer&&y.resolveDepthBuffer===!1&&(w.push(H),v.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const Ie=i.get(g[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Q(y){return Math.min(s.maxSamples,y.samples)}function $(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function W(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function re(y,g){const L=y.colorSpace,N=y.format,k=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Dt&&L!==mi&&(Ke.getTransfer(L)===rt?(N!==sn||k!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function Z(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=K,this.setTexture2D=te,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=$}function cy(n,e){function t(i,s=mi){let r;const o=Ke.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.BYTE;if(i===Vf)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Wt)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Wf)return n.RGB;if(i===sn)return n.RGBA;if(i===Xf)return n.LUMINANCE;if(i===jf)return n.LUMINANCE_ALPHA;if(i===xs)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===ac)return n.RED;if(i===lc)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===cc)return n.RG_INTEGER;if(i===uc)return n.RGBA_INTEGER;if(i===ho||i===fo||i===po||i===mo)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===rl||i===ol||i===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===cl||i===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ll||i===cl)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hl||i===fl||i===dl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===Ml||i===yl||i===Sl||i===El||i===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===bl||i===Al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===go)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qf||i===wl||i===Rl||i===Cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class uy extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hy={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`;class py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Tt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mi({vertexShader:fy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class my extends Xi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const x=new py,m=t.getContextAttributes();let d=null,A=null;const b=[],M=[],O=new Ne;let D=null;const R=new Ot;R.viewport=new Ze;const P=new Ot;P.viewport=new Ze;const T=[R,P],S=new uy;let C=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=b[ne];return ue===void 0&&(ue=new wa,b[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=b[ne];return ue===void 0&&(ue=new wa,b[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=b[ne];return ue===void 0&&(ue=new wa,b[ne]=ue),ue.getHandSpace()};function z(ne){const ue=M.indexOf(ne.inputSource);if(ue===-1)return;const Se=b[ue];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,c||o),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",te);for(let ne=0;ne<b.length;ne++){const ue=M[ne];ue!==null&&(M[ne]=null,b[ne].disconnect(ue))}C=null,K=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,A=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Gi(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,Se=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Rs:xs,Se=m.stencil?ws:ki);const Ce={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Gi(f.textureWidth,f.textureHeight,{format:sn,type:Qn,depthTexture:new ud(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(ne){for(let ue=0;ue<ne.removed.length;ue++){const Se=ne.removed[ue],de=M.indexOf(Se);de>=0&&(M[de]=null,b[de].disconnect(Se))}for(let ue=0;ue<ne.added.length;ue++){const Se=ne.added[ue];let de=M.indexOf(Se);if(de===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=M.length){M.push(Se),de=Ue;break}else if(M[Ue]===null){M[Ue]=Se,de=Ue;break}if(de===-1)break}const Ce=b[de];Ce&&Ce.connect(Se)}}const G=new U,J=new U;function V(ne,ue,Se){G.setFromMatrixPosition(ue.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const de=G.distanceTo(J),Ce=ue.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,Be=Ce[14]/(Ce[10]-1),lt=Ce[14]/(Ce[10]+1),qe=(Ce[9]+1)/Ce[5],w=(Ce[9]-1)/Ce[5],v=(Ce[8]-1)/Ce[0],q=(Ue[8]+1)/Ue[0],Q=Be*v,$=Be*q,W=de/(-v+q),re=W*-v;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(W),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ce[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Z=Be+W,y=lt+W,g=Q-re,L=$+(de-re),N=qe*lt/y*Z,k=w*lt/y*Z;ne.projectionMatrix.makePerspective(g,L,N,k,Z,y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ce(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ue=ne.near,Se=ne.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),S.near=P.near=R.near=ue,S.far=P.far=R.far=Se,(C!==S.near||K!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,K=S.far),R.layers.mask=ne.layers.mask|2,P.layers.mask=ne.layers.mask|4,S.layers.mask=R.layers.mask|P.layers.mask;const de=ne.parent,Ce=S.cameras;ce(S,de);for(let Ue=0;Ue<Ce.length;Ue++)ce(Ce[Ue],de);Ce.length===2?V(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),fe(ne,S,de)};function fe(ne,ue,Se){Se===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Cs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ye=null;function Te(ne,ue){if(u=ue.getViewerPose(c||o),_=ue,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let de=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let Ue=0;Ue<Se.length;Ue++){const Be=Se[Ue];let lt=null;if(p!==null)lt=p.getViewport(Be);else{const w=h.getViewSubImage(f,Be);lt=w.viewport,Ue===0&&(e.setRenderTargetTextures(A,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(A))}let qe=T[Ue];qe===void 0&&(qe=new Ot,qe.layers.enable(Ue),qe.viewport=new Ze,T[Ue]=qe),qe.matrix.fromArray(Be.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Be.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(lt.x,lt.y,lt.width,lt.height),Ue===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(qe)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=h.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,s.renderState)}}for(let Se=0;Se<b.length;Se++){const de=M[Se],Ce=b[Se];de!==null&&Ce!==void 0&&Ce.update(de,ue,c||o)}ye&&ye(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Ge=new cd;Ge.setAnimationLoop(Te),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const Li=new Pn,gy=new ke;function _y(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,od(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),b=A.envMap,M=A.envMapRotation;b&&(m.envMap.value=b,Li.copy(M),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Li)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const M=b.program;i.uniformBlockBinding(A,M)}function c(A,b){let M=s[A.id];M===void 0&&(_(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));const O=b.program;i.updateUBOMapping(A,O);const D=e.render.frame;r[A.id]!==D&&(f(A),r[A.id]=D)}function u(A){const b=h();A.__bindingPointIndex=b;const M=n.createBuffer(),O=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=s[A.id],M=A.uniforms,O=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,R=M.length;D<R;D++){const P=Array.isArray(M[D])?M[D]:[M[D]];for(let T=0,S=P.length;T<S;T++){const C=P[T];if(p(C,D,T,O)===!0){const K=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let te=0;te<z.length;te++){const G=z[te],J=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,K+Y,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,b,M,O){const D=A.value,R=b+"_"+M;if(O[R]===void 0)return typeof D=="number"||typeof D=="boolean"?O[R]=D:O[R]=D.clone(),!0;{const P=O[R];if(typeof D=="number"||typeof D=="boolean"){if(P!==D)return O[R]=D,!0}else if(P.equals(D)===!1)return P.copy(D),!0}return!1}function _(A){const b=A.uniforms;let M=0;const O=16;for(let R=0,P=b.length;R<P;R++){const T=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,C=T.length;S<C;S++){const K=T[S],z=Array.isArray(K.value)?K.value:[K.value];for(let Y=0,te=z.length;Y<te;Y++){const G=z[Y],J=x(G),V=M%O,ce=V%J.boundary,fe=V+ce;M+=ce,fe!==0&&O-fe<J.storage&&(M+=O-fe),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=J.storage}}}const D=M%O;return D>0&&(M+=O-D),A.__size=M,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class vy{constructor(e={}){const{canvas:t=s_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=xi,this.toneMappingExposure=1;const M=this;let O=!1,D=0,R=0,P=null,T=-1,S=null;const C=new Ze,K=new Ze;let z=null;const Y=new Oe(0);let te=0,G=t.width,J=t.height,V=1,ce=null,fe=null;const ye=new Ze(0,0,G,J),Te=new Ze(0,0,G,J);let Ge=!1;const ne=new fc;let ue=!1,Se=!1;const de=new ke,Ce=new ke,Ue=new U,Be=new Ze,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function w(){return P===null?V:1}let v=i;function q(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),v===null){const F="webgl2";if(v=q(F,E),v===null)throw q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,$,W,re,Z,y,g,L,N,k,H,le,oe,ae,Ie,se,pe,Ee,Pe,Me,De,Le,tt,I;function ge(){Q=new Tv(v),Q.init(),Le=new cy(v,Q),$=new xv(v,Q,e,Le),W=new oy(v,Q),$.reverseDepthBuffer&&f&&W.buffers.depth.setReversed(!0),re=new wv(v),Z=new XM,y=new ly(v,Q,W,Z,$,Le,re),g=new Mv(M),L=new Ev(M),N=new U_(v),tt=new gv(v,N),k=new bv(v,N,re,tt),H=new Cv(v,k,N,re),Pe=new Rv(v,$,y),se=new vv(Z),le=new WM(M,g,L,Q,$,tt,se),oe=new _y(M,Z),ae=new YM,Ie=new QM(Q),Ee=new mv(M,g,L,W,H,p,l),pe=new sy(M,H,$),I=new xy(v,re,$,W),Me=new _v(v,Q,re),De=new Av(v,Q,re),re.programs=le.programs,M.capabilities=$,M.extensions=Q,M.properties=Z,M.renderLists=ae,M.shadowMap=pe,M.state=W,M.info=re}ge();const ee=new my(M,v);this.xr=ee,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,J,!1))},this.getSize=function(E){return E.set(G,J)},this.setSize=function(E,F,X=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,J=F,t.width=Math.floor(E*V),t.height=Math.floor(F*V),X===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(G*V,J*V).floor()},this.setDrawingBufferSize=function(E,F,X){G=E,J=F,V=X,t.width=Math.floor(E*X),t.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,F,X,j){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,F,X,j),W.viewport(C.copy(ye).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Te)},this.setScissor=function(E,F,X,j){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,F,X,j),W.scissor(K.copy(Te).multiplyScalar(V).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){W.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,F=!0,X=!0){let j=0;if(E){let B=!1;if(P!==null){const he=P.texture.format;B=he===uc||he===cc||he===lc}if(B){const he=P.texture.type,xe=he===Qn||he===ki||he===xr||he===ws||he===rc||he===oc,be=Ee.getClearColor(),Ae=Ee.getClearAlpha(),Fe=be.r,ze=be.g,we=be.b;xe?(_[0]=Fe,_[1]=ze,_[2]=we,_[3]=Ae,v.clearBufferuiv(v.COLOR,0,_)):(x[0]=Fe,x[1]=ze,x[2]=we,x[3]=Ae,v.clearBufferiv(v.COLOR,0,x))}else j|=v.COLOR_BUFFER_BIT}F&&(j|=v.DEPTH_BUFFER_BIT),X&&(j|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),Ie.dispose(),Z.dispose(),g.dispose(),L.dispose(),H.dispose(),tt.dispose(),I.dispose(),le.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",wc),ee.removeEventListener("sessionend",Rc),Ei.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=re.autoReset,F=pe.enabled,X=pe.autoUpdate,j=pe.needsUpdate,B=pe.type;ge(),re.autoReset=E,pe.enabled=F,pe.autoUpdate=X,pe.needsUpdate=j,pe.type=B}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const F=E.target;F.removeEventListener("dispose",He),mt(F)}function mt(E){Rt(E),Z.remove(E)}function Rt(E){const F=Z.get(E).programs;F!==void 0&&(F.forEach(function(X){le.releaseProgram(X)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,j,B,he){F===null&&(F=lt);const xe=B.isMesh&&B.matrixWorld.determinant()<0,be=Ed(E,F,X,j,B);W.setMaterial(j,xe);let Ae=X.index,Fe=1;if(j.wireframe===!0){if(Ae=k.getWireframeAttribute(X),Ae===void 0)return;Fe=2}const ze=X.drawRange,we=X.attributes.position;let $e=ze.start*Fe,ct=(ze.start+ze.count)*Fe;he!==null&&($e=Math.max($e,he.start*Fe),ct=Math.min(ct,(he.start+he.count)*Fe)),Ae!==null?($e=Math.max($e,0),ct=Math.min(ct,Ae.count)):we!=null&&($e=Math.max($e,0),ct=Math.min(ct,we.count));const ft=ct-$e;if(ft<0||ft===1/0)return;tt.setup(B,j,be,X,Ae);let kt,Je=Me;if(Ae!==null&&(kt=N.get(Ae),Je=De,Je.setIndex(kt)),B.isMesh)j.wireframe===!0?(W.setLineWidth(j.wireframeLinewidth*w()),Je.setMode(v.LINES)):Je.setMode(v.TRIANGLES);else if(B.isLine){let Re=j.linewidth;Re===void 0&&(Re=1),W.setLineWidth(Re*w()),B.isLineSegments?Je.setMode(v.LINES):B.isLineLoop?Je.setMode(v.LINE_LOOP):Je.setMode(v.LINE_STRIP)}else B.isPoints?Je.setMode(v.POINTS):B.isSprite&&Je.setMode(v.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Re=B._multiDrawStarts,Nn=B._multiDrawCounts,Qe=B._multiDrawCount,on=Ae?N.get(Ae).bytesPerElement:1,Yi=Z.get(j).currentProgram.getUniforms();for(let jt=0;jt<Qe;jt++)Yi.setValue(v,"_gl_DrawID",jt),Je.render(Re[jt]/on,Nn[jt])}else if(B.isInstancedMesh)Je.renderInstances($e,ft,B.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Nn=Math.min(X.instanceCount,Re);Je.renderInstances($e,ft,Nn)}else Je.render($e,ft)};function nt(E,F,X){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,Rr(E,F,X),E.side=Jn,E.needsUpdate=!0,Rr(E,F,X),E.side=yn):Rr(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),d=Ie.get(X),d.init(F),b.push(d),X.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const j=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const be=he[xe];nt(be,X,B),j.add(be)}else nt(he,X,B),j.add(he)}),b.pop(),d=null,j},this.compileAsync=function(E,F,X=null){const j=this.compile(E,F,X);return new Promise(B=>{function he(){if(j.forEach(function(xe){Z.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){B(E);return}setTimeout(he,10)}Q.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let rn=null;function Un(E){rn&&rn(E)}function wc(){Ei.stop()}function Rc(){Ei.start()}const Ei=new cd;Ei.setAnimationLoop(Un),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){rn=E,ee.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},ee.addEventListener("sessionstart",wc),ee.addEventListener("sessionend",Rc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,F,P),d=Ie.get(E,b.length),d.init(F),b.push(d),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(Ce),Se=this.localClippingEnabled,ue=se.init(this.clippingPlanes,Se),m=ae.get(E,A.length),m.init(),A.push(m),ee.enabled===!0&&ee.isPresenting===!0){const he=M.xr.getDepthSensingMesh();he!==null&&Vo(he,F,-1/0,M.sortObjects)}Vo(E,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ce,fe),qe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,qe&&Ee.addToRenderList(m,E),this.info.render.frame++,ue===!0&&se.beginShadows();const X=d.state.shadowsArray;pe.render(X,E,F),ue===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,B=m.transmissive;if(d.setupLights(),F.isArrayCamera){const he=F.cameras;if(B.length>0)for(let xe=0,be=he.length;xe<be;xe++){const Ae=he[xe];Pc(j,B,E,Ae)}qe&&Ee.render(E);for(let xe=0,be=he.length;xe<be;xe++){const Ae=he[xe];Cc(m,E,Ae,Ae.viewport)}}else B.length>0&&Pc(j,B,E,F),qe&&Ee.render(E),Cc(m,E,F);P!==null&&(y.updateMultisampleRenderTarget(P),y.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,F),tt.resetDefaultState(),T=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],ue===!0&&se.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Vo(E,F,X,j){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){j&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const xe=H.update(E),be=E.material;be.visible&&m.push(E,xe,be,X,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ne.intersectsObject(E))){const xe=H.update(E),be=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(be)){const Ae=xe.groups;for(let Fe=0,ze=Ae.length;Fe<ze;Fe++){const we=Ae[Fe],$e=be[we.materialIndex];$e&&$e.visible&&m.push(E,xe,$e,X,Be.z,we)}}else be.visible&&m.push(E,xe,be,X,Be.z,null)}}const he=E.children;for(let xe=0,be=he.length;xe<be;xe++)Vo(he[xe],F,X,j)}function Cc(E,F,X,j){const B=E.opaque,he=E.transmissive,xe=E.transparent;d.setupLightsView(X),ue===!0&&se.setGlobalState(M.clippingPlanes,X),j&&W.viewport(C.copy(j)),B.length>0&&wr(B,F,X),he.length>0&&wr(he,F,X),xe.length>0&&wr(xe,F,X),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Pc(E,F,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new Gi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Kn:Qn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const he=d.state.transmissionRenderTarget[j.id],xe=j.viewport||C;he.setSize(xe.z,xe.w);const be=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(Y),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),qe&&Ee.render(X);const Ae=M.toneMapping;M.toneMapping=xi;const Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),ue===!0&&se.setGlobalState(M.clippingPlanes,j),wr(E,X,j),y.updateMultisampleRenderTarget(he),y.updateRenderTargetMipmap(he),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let we=0,$e=F.length;we<$e;we++){const ct=F[we],ft=ct.object,kt=ct.geometry,Je=ct.material,Re=ct.group;if(Je.side===yn&&ft.layers.test(j.layers)){const Nn=Je.side;Je.side=Xt,Je.needsUpdate=!0,Lc(ft,X,j,kt,Je,Re),Je.side=Nn,Je.needsUpdate=!0,ze=!0}}ze===!0&&(y.updateMultisampleRenderTarget(he),y.updateRenderTargetMipmap(he))}M.setRenderTarget(be),M.setClearColor(Y,te),Fe!==void 0&&(j.viewport=Fe),M.toneMapping=Ae}function wr(E,F,X){const j=F.isScene===!0?F.overrideMaterial:null;for(let B=0,he=E.length;B<he;B++){const xe=E[B],be=xe.object,Ae=xe.geometry,Fe=j===null?xe.material:j,ze=xe.group;be.layers.test(X.layers)&&Lc(be,F,X,Ae,Fe,ze)}}function Lc(E,F,X,j,B,he){E.onBeforeRender(M,F,X,j,B,he),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,F,X,j,E,he),B.transparent===!0&&B.side===yn&&B.forceSinglePass===!1?(B.side=Xt,B.needsUpdate=!0,M.renderBufferDirect(X,F,j,B,E,he),B.side=Jn,B.needsUpdate=!0,M.renderBufferDirect(X,F,j,B,E,he),B.side=yn):M.renderBufferDirect(X,F,j,B,E,he),E.onAfterRender(M,F,X,j,B,he)}function Rr(E,F,X){F.isScene!==!0&&(F=lt);const j=Z.get(E),B=d.state.lights,he=d.state.shadowsArray,xe=B.state.version,be=le.getParameters(E,B.state,he,F,X),Ae=le.getProgramCacheKey(be);let Fe=j.programs;j.environment=E.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(E.isMeshStandardMaterial?L:g).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",He),Fe=new Map,j.programs=Fe);let ze=Fe.get(Ae);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===xe)return Ic(E,be),ze}else be.uniforms=le.getUniforms(E),E.onBeforeCompile(be,M),ze=le.acquireProgram(be,Ae),Fe.set(Ae,ze),j.uniforms=be.uniforms;const we=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=se.uniform),Ic(E,be),j.needsLights=bd(E),j.lightsStateVersion=xe,j.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMap.value=B.state.directionalShadowMap,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotShadowMap.value=B.state.spotShadowMap,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMap.value=B.state.pointShadowMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Dc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=_o.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ic(E,F){const X=Z.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Ed(E,F,X,j,B){F.isScene!==!0&&(F=lt),y.resetTextureUnits();const he=F.fog,xe=j.isMeshStandardMaterial?F.environment:null,be=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Dt,Ae=(j.isMeshStandardMaterial?L:g).get(j.envMap||xe),Fe=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),we=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,ct=!!X.morphAttributes.color;let ft=xi;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ft=M.toneMapping);const kt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Je=kt!==void 0?kt.length:0,Re=Z.get(j),Nn=d.state.lights;if(ue===!0&&(Se===!0||E!==S)){const en=E===S&&j.id===T;se.setState(j,E,en)}let Qe=!1;j.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Nn.state.version||Re.outputColorSpace!==be||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==Ae||j.fog===!0&&Re.fog!==he||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Fe||Re.vertexTangents!==ze||Re.morphTargets!==we||Re.morphNormals!==$e||Re.morphColors!==ct||Re.toneMapping!==ft||Re.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Re.__version=j.version);let on=Re.currentProgram;Qe===!0&&(on=Rr(j,F,B));let Yi=!1,jt=!1,Bs=!1;const dt=on.getUniforms(),gn=Re.uniforms;if(W.useProgram(on.program)&&(Yi=!0,jt=!0,Bs=!0),j.id!==T&&(T=j.id,jt=!0),Yi||S!==E){W.buffers.depth.getReversed()?(de.copy(E.projectionMatrix),o_(de),a_(de),dt.setValue(v,"projectionMatrix",de)):dt.setValue(v,"projectionMatrix",E.projectionMatrix),dt.setValue(v,"viewMatrix",E.matrixWorldInverse);const ni=dt.map.cameraPosition;ni!==void 0&&ni.setValue(v,Ue.setFromMatrixPosition(E.matrixWorld)),$.logarithmicDepthBuffer&&dt.setValue(v,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&dt.setValue(v,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,jt=!0,Bs=!0)}if(B.isSkinnedMesh){dt.setOptional(v,B,"bindMatrix"),dt.setOptional(v,B,"bindMatrixInverse");const en=B.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),dt.setValue(v,"boneTexture",en.boneTexture,y))}B.isBatchedMesh&&(dt.setOptional(v,B,"batchingTexture"),dt.setValue(v,"batchingTexture",B._matricesTexture,y),dt.setOptional(v,B,"batchingIdTexture"),dt.setValue(v,"batchingIdTexture",B._indirectTexture,y),dt.setOptional(v,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(v,"batchingColorTexture",B._colorsTexture,y));const Hs=X.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Pe.update(B,X,on),(jt||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,dt.setValue(v,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gn.envMap.value=Ae,gn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),jt&&(dt.setValue(v,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&Td(gn,Bs),he&&j.fog===!0&&oe.refreshFogUniforms(gn,he),oe.refreshMaterialUniforms(gn,j,V,J,d.state.transmissionRenderTarget[E.id]),_o.upload(v,Dc(Re),gn,y)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(_o.upload(v,Dc(Re),gn,y),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&dt.setValue(v,"center",B.center),dt.setValue(v,"modelViewMatrix",B.modelViewMatrix),dt.setValue(v,"normalMatrix",B.normalMatrix),dt.setValue(v,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const en=j.uniformsGroups;for(let ni=0,ii=en.length;ni<ii;ni++){const Uc=en[ni];I.update(Uc,on),I.bind(Uc,on)}}return on}function Td(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function bd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,X){Z.get(E.texture).__webglTexture=F,Z.get(E.depthTexture).__webglTexture=X;const j=Z.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const X=Z.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){P=E,D=F,R=X;let j=!0,B=null,he=!1,xe=!1;if(E){const Ae=Z.get(E);if(Ae.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(v.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)y.setupRenderTarget(E);else if(Ae.__hasExternalTextures)y.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(Ae.__boundDepthTexture!==we){if(we!==null&&Z.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);const ze=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?B=ze[F][X]:B=ze[F],he=!0):E.samples>0&&y.useMultisampledRTT(E)===!1?B=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[X]:B=ze,C.copy(E.viewport),K.copy(E.scissor),z=E.scissorTest}else C.copy(ye).multiplyScalar(V).floor(),K.copy(Te).multiplyScalar(V).floor(),z=Ge;if(W.bindFramebuffer(v.FRAMEBUFFER,B)&&j&&W.drawBuffers(E,B),W.viewport(C),W.scissor(K),W.setScissorTest(z),he){const Ae=Z.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,X)}else if(xe){const Ae=Z.get(E.texture),Fe=F||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Fe)}T=-1},this.readRenderTargetPixels=function(E,F,X,j,B,he,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){W.bindFramebuffer(v.FRAMEBUFFER,be);try{const Ae=E.texture,Fe=Ae.format,ze=Ae.type;if(!$.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-j&&X>=0&&X<=E.height-B&&v.readPixels(F,X,j,B,Le.convert(Fe),Le.convert(ze),he)}finally{const Ae=P!==null?Z.get(P).__webglFramebuffer:null;W.bindFramebuffer(v.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,j,B,he,xe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){const Ae=E.texture,Fe=Ae.format,ze=Ae.type;if(!$.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-j&&X>=0&&X<=E.height-B){W.bindFramebuffer(v.FRAMEBUFFER,be);const we=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,we),v.bufferData(v.PIXEL_PACK_BUFFER,he.byteLength,v.STREAM_READ),v.readPixels(F,X,j,B,Le.convert(Fe),Le.convert(ze),0);const $e=P!==null?Z.get(P).__webglFramebuffer:null;W.bindFramebuffer(v.FRAMEBUFFER,$e);const ct=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await r_(v,ct,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,we),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,he),v.deleteBuffer(we),v.deleteSync(ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,X=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-X),B=Math.floor(E.image.width*j),he=Math.floor(E.image.height*j),xe=F!==null?F.x:0,be=F!==null?F.y:0;y.setTexture2D(E,0),v.copyTexSubImage2D(v.TEXTURE_2D,X,0,0,xe,be,B,he),W.unbindTexture()},this.copyTextureToTexture=function(E,F,X=null,j=null,B=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],F=arguments[2],B=arguments[3]||0,X=null);let he,xe,be,Ae,Fe,ze,we,$e,ct;const ft=E.isCompressedTexture?E.mipmaps[B]:E.image;X!==null?(he=X.max.x-X.min.x,xe=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Fe=X.min.y,ze=X.isBox3?X.min.z:0):(he=ft.width,xe=ft.height,be=ft.depth||1,Ae=0,Fe=0,ze=0),j!==null?(we=j.x,$e=j.y,ct=j.z):(we=0,$e=0,ct=0);const kt=Le.convert(F.format),Je=Le.convert(F.type);let Re;F.isData3DTexture?(y.setTexture3D(F,0),Re=v.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(y.setTexture2DArray(F,0),Re=v.TEXTURE_2D_ARRAY):(y.setTexture2D(F,0),Re=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const Nn=v.getParameter(v.UNPACK_ROW_LENGTH),Qe=v.getParameter(v.UNPACK_IMAGE_HEIGHT),on=v.getParameter(v.UNPACK_SKIP_PIXELS),Yi=v.getParameter(v.UNPACK_SKIP_ROWS),jt=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,ft.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ft.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ae),v.pixelStorei(v.UNPACK_SKIP_ROWS,Fe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ze);const Bs=E.isDataArrayTexture||E.isData3DTexture,dt=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const gn=Z.get(E),Hs=Z.get(F),en=Z.get(gn.__renderTarget),ni=Z.get(Hs.__renderTarget);W.bindFramebuffer(v.READ_FRAMEBUFFER,en.__webglFramebuffer),W.bindFramebuffer(v.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<be;ii++)Bs&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,B,ze+ii),E.isDepthTexture?(dt&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,B,ct+ii),v.blitFramebuffer(Ae,Fe,he,xe,we,$e,he,xe,v.DEPTH_BUFFER_BIT,v.NEAREST)):dt?v.copyTexSubImage3D(Re,B,we,$e,ct+ii,Ae,Fe,he,xe):v.copyTexSubImage2D(Re,B,we,$e,ct+ii,Ae,Fe,he,xe);W.bindFramebuffer(v.READ_FRAMEBUFFER,null),W.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else dt?E.isDataTexture||E.isData3DTexture?v.texSubImage3D(Re,B,we,$e,ct,he,xe,be,kt,Je,ft.data):F.isCompressedArrayTexture?v.compressedTexSubImage3D(Re,B,we,$e,ct,he,xe,be,kt,ft.data):v.texSubImage3D(Re,B,we,$e,ct,he,xe,be,kt,Je,ft):E.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,B,we,$e,he,xe,kt,Je,ft.data):E.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,B,we,$e,ft.width,ft.height,kt,ft.data):v.texSubImage2D(v.TEXTURE_2D,B,we,$e,he,xe,kt,Je,ft);v.pixelStorei(v.UNPACK_ROW_LENGTH,Nn),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Qe),v.pixelStorei(v.UNPACK_SKIP_PIXELS,on),v.pixelStorei(v.UNPACK_SKIP_ROWS,Yi),v.pixelStorei(v.UNPACK_SKIP_IMAGES,jt),B===0&&F.generateMipmaps&&v.generateMipmap(Re),W.unbindTexture()},this.copyTextureToTexture3D=function(E,F,X=null,j=null,B=0){return E.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,X,j,B)},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),W.unbindTexture()},this.resetState=function(){D=0,R=0,P=null,W.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class My extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new U;class mc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uh=new U,hh=new Ze,fh=new Ze,Sy=new U,dh=new ke,Qr=new U,Ra=new Ln,ph=new ke,Ca=new Tr;class Ey extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qr),this.boundingSphere.expandByPoint(Qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(s),e.ray.intersectsSphere(Ra)!==!1&&(ph.copy(s).invert(),Ca.copy(e.ray).applyMatrix4(ph),!(this.boundingBox!==null&&Ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;hh.fromBufferAttribute(s.attributes.skinIndex,e),fh.fromBufferAttribute(s.attributes.skinWeight,e),uh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=fh.getComponent(r);if(o!==0){const a=hh.getComponent(r);dh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Sy.copy(uh).applyMatrix4(dh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class md extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gc extends Tt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=zt,u=zt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new ke,Ty=new ke;class _c{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ty;mh.multiplyMatrices(a,t[r]),mh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new _c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new gc(t,e,e,sn,Wt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new md),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Il extends Vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new ke,gh=new ke,eo=[],_h=new ti,by=new ke,js=new Qt,Ys=new Ln;class Ay extends Qt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Il(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,by)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),_h.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(_h)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),Ys.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),gh.multiplyMatrices(i,cs),js.matrixWorld=gh,js.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const l=eo[o];l.instanceId=r,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gc(new Float32Array(s*this.count),s,this.count,ac,Wt));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xc extends wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new U,Ro=new U,xh=new ke,qs=new Tr,to=new Ln,Pa=new U,vh=new U;class vc extends pt{constructor(e=new mn,t=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wo.fromBufferAttribute(t,s-1),Ro.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wo.distanceTo(Ro);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;xh.copy(s).invert(),qs.copy(e.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=u.getX(x),A=u.getX(x+1),b=no(this,e,qs,l,d,A);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),d=no(this,e,qs,l,x,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=no(this,e,qs,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){const x=no(this,e,qs,l,_-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function no(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(wo.fromBufferAttribute(o,s),Ro.fromBufferAttribute(o,r),t.distanceSqToSegment(wo,Ro,Pa,vh)>i)return;Pa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Pa);if(!(l<e.near||l>e.far))return{distance:l,point:vh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Mh=new U,yh=new U;class gd extends vc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Mh.fromBufferAttribute(t,s),yh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mh.distanceTo(yh);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wy extends vc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _d extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sh=new ke,Ul=new Tr,io=new Ln,so=new U;class Ry extends pt{constructor(e=new mn,t=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Sh.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(Sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);so.fromBufferAttribute(h,m),Eh(so,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,x=p;_<x;_++)so.fromBufferAttribute(h,_),Eh(so,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eh(n,e,t,i,s,r,o){const a=Ul.distanceSqToPoint(n);if(a<t){const l=new U;Ul.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mc extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Mc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ro(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Cy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Py(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Th(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function xd(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Ar{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ly extends Ar{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pu:r=e,a=2*t-i;break;case mu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pu:o=e,l=2*i-t;break;case mu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(s-t),x=_*_,m=x*_,d=-f*m+2*f*x-f*_,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,b=(-1-p)*m+(1.5+p)*x+.5*_,M=p*m-p*x;for(let O=0;O!==a;++O)r[O]=d*o[u+O]+A*o[c+O]+b*o[l+O]+M*o[h+O];return r}}class Dy extends Ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Iy extends Ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Iy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ly(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Cy(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ea,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,p=h+i;for(let _=0;_!==i;++_){const x=t[h+_];if(x!==t[f+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Mr;class Fs extends In{constructor(e,t,i){super(e,t,i)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=vr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class vd extends In{}vd.prototype.ValueTypeName="color";class Ls extends In{}Ls.prototype.ValueTypeName="number";class Uy extends Ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ds extends In{InterpolantFactoryMethodLinear(e){return new Uy(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends In{constructor(e,t,i){super(e,t,i)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=vr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends In{}Is.prototype.ValueTypeName="vector";class Ny{constructor(e="",t=-1,i=[],s=Pg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Oy(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(In.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Py(l);l=Th(l,1,u),c=Th(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ls(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,_,x){if(p.length!==0){const m=[],d=[];xd(p,m,d,_),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)p[f[_].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let A=0;A!==f[_].morphTargets.length;++A){const b=f[_];m.push(b.time),d.push(b.morphTarget===x?1:0)}s.push(new Ls(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(Is,p+".position",f,"pos",s),i(Ds,p+".quaternion",f,"rot",s),i(Is,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fy(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return vd;case"quaternion":return Ds;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Oy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fy(n.type);if(n.times===void 0){const t=[],i=[];xd(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const gi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class By{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Hy=new By;class ji{constructor(e){this.manager=e!==void 0?e:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class zy extends Error{constructor(e,t){super(e),this.response=t}}class yc extends ji{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:i,onError:s});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=kn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){A();function A(){h.read().then(({done:b,value:M})=>{if(b)d.close();else{x+=M.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let D=0,R=u.length;D<R;D++){const P=u[D];P.onProgress&&P.onProgress(O)}d.enqueue(M),A()}},b=>{d.error(b)})}}});return new Response(m)}else throw new zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{gi.add(e,c);const u=kn[e];delete kn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vy extends ji{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=yr("img");function l(){u(),gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ky extends ji{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new gc,a=new yc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:En,o.wrapT=c.wrapT!==void 0?c.wrapT:En,o.magFilter=c.magFilter!==void 0?c.magFilter:Et,o.minFilter=c.minFilter!==void 0?c.minFilter:Et,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Tn),c.mipmapCount===1&&(o.minFilter=Et),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class Gy extends ji{constructor(e){super(e)}load(e,t,i,s){const r=new Tt,o=new Vy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Sc extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const La=new ke,bh=new U,Ah=new U;class Ec{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wy extends Ec{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xy extends Sc{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wh=new ke,Ks=new U,Da=new U;class jy extends Ec{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ks),Da.copy(i.position),Da.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Da),i.updateMatrixWorld(),s.makeTranslation(-Ks.x,-Ks.y,-Ks.z),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class Yy extends Sc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qy extends Ec{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ky extends Sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new qy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $y extends ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(e,l),r.manager.itemStart(e)}}const Tc="\\[\\]\\.:\\/",Zy=new RegExp("["+Tc+"]","g"),bc="[^"+Tc+"]",Jy="[^"+Tc.replace("\\.","")+"]",Qy=/((?:WC+[\/:])*)/.source.replace("WC",bc),eS=/(WCOD+)?/.source.replace("WCOD",Jy),tS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),nS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),iS=new RegExp("^"+Qy+eS+tS+nS+"$"),sS=["material","materials","bones","map"];class rS{constructor(e,t,i){const s=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zy,"")}static parseTrackName(e){const t=iS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);sS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=rS;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oS extends gd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new mn;s.setAttribute("position",new pn(t,3)),s.setAttribute("color",new pn(i,3));const r=new xc({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new Oe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aS extends Xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const Ch={type:"change"},Ac={type:"start"},Md={type:"end"},oo=new Tr,Ph=new di,lS=Math.cos(70*Jf.DEG2RAD),xt=new U,Gt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ia=1e-6;class cS extends aS{constructor(e,t=null){super(e,t),this.state=at.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Cn,this._lastTargetPosition=new U,this._quat=new Cn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rh,this._sphericalDelta=new Rh,this._scale=1,this._panOffset=new U,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new U,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hS.bind(this),this._onPointerDown=uS.bind(this),this._onPointerUp=fS.bind(this),this._onContextMenu=vS.bind(this),this._onMouseWheel=mS.bind(this),this._onKeyDown=gS.bind(this),this._onTouchStart=_S.bind(this),this._onTouchMove=xS.bind(this),this._onMouseDown=dS.bind(this),this._onMouseMove=pS.bind(this),this._interceptControlDown=MS.bind(this),this._interceptControlUp=yS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),s<-Math.PI?s+=Gt:s>Math.PI&&(s-=Gt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oo.origin.copy(this.object.position),oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oo.direction))<lS?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),oo.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ia||this._lastTargetPosition.distanceToSquared(this.target)>Ia?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xt.copy(s).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function uS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Md),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=at.DOLLY;break;case gs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=at.ROTATE}break;case gs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Ac)}function pS(n){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mS(n){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(n.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Md))}function gS(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function _S(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=at.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=at.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Ac)}function xS(n){switch(this._trackPointer(n),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=at.NONE}}function vS(n){this.enabled!==!1&&n.preventDefault()}function MS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lh(n,e){if(e===Lg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Pl||e===Kf){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Pl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class SS extends ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new VS(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=hr.extractUrlBase(e);o=hr.resolveURL(c,this.path)}else o=hr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new yc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yd){try{o[Ye.KHR_BINARY_GLTF]=new kS(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new tE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new bS;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new GS(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new WS;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new XS;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function ES(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TS{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ky(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yy(u),c.distance=h;break;case"spot":c=new Xy(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Xn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class bS{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Oi}extendParams(e,t,i){const s=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}}class AS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class wS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}}class RS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class CS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class PS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Dt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class LS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class DS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Dt),Promise.all(r)}}class IS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class US{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],Dt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(r)}}class NS{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class FS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class OS{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class BS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class HS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zS{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}}class VS{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==nn.TRIANGLES&&c.mode!==nn.TRIANGLE_STRIP&&c.mode!==nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of h){const x=new ke,m=new U,d=new Cn,A=new U(1,1,1),b=new Ay(_.geometry,_.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,M),l.SCALE&&A.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,x.compose(m,d,A));for(const M in l)if(M==="_COLOR_0"){const O=l[M];b.instanceColor=new Il(O.array,O.itemSize,O.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);pt.prototype.copy.call(b,_),this.parser.assignFinalMaterial(b),p.push(b)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const yd="glTF",$s=12,Dh={JSON:1313821514,BIN:5130562};class kS{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-$s,r=new DataView(e,$s);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Dh.JSON){const c=new Uint8Array(e,$s+o,a);this.content=i.decode(c)}else if(l===Dh.BIN){const c=$s+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Nl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Nl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Ms[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}h(p)},a,c,Dt,f)})})}}class WS{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class XS{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Sd extends Ar{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,p=f*h,_=e*c,x=_-c,m=-2*p+3*f,d=p-f,A=1-m,b=d-f+h;for(let M=0;M!==a;M++){const O=o[x+M+a],D=o[x+M+l]*u,R=o[_+M+a],P=o[_+M]*u;r[M]=A*O+b*D+m*R+d*P}return r}}const jS=new Cn;class YS extends Sd{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return jS.fromArray(r).normalize().toArray(r),r}}const nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ih={9728:zt,9729:Et,9984:Hf,9985:uo,9986:Js,9987:Tn},Uh={33071:En,33648:bo,10497:As},Ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qS={CUBICSPLINE:void 0,LINEAR:Mr,STEP:vr},Na={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Mc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),n.DefaultMaterial}function Di(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Xn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $S(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function ZS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JS(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fa(t.attributes):e=n.indices+":"+Fa(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Fa(n.targets[i]);return e}function Fa(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Fl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const eE=new ke;class tE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ES,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Gy(this.options.manager):this.textureLoader=new $y(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Di(r,a,s),Xn(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(hr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ua[s.type],a=Ms[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ua[s.type],c=Ms[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let x,m;if(p&&p!==h){const d=Math.floor(f/p),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let b=t.cache.get(A);b||(x=new c(a,d*p,s.count*p/u),b=new yy(x,p/u),t.cache.add(A,b)),m=new mc(b,l,f%p/u,_)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Vt(x,l,_);if(s.sparse!==void 0){const d=Ua.SCALAR,A=Ms[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,O=new A(o[1],b,s.sparse.count*d),D=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=O.length;R<P;R++){const T=O[R];if(m.setX(T,D[R*l]),l>=2&&m.setY(T,D[R*l+1]),l>=3&&m.setZ(T,D[R*l+2]),l>=4&&m.setW(T,D[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ih[f.magFilter]||Et,u.minFilter=Ih[f.minFilter]||Tn,u.wrapS=Uh[f.wrapS]||As,u.wrapT=Uh[f.wrapT]||As,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Et,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(x){const m=new Tt(x);m.needsUpdate=!0,f(m)}),t.load(hr.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Xn(h,o),h.userData.mimeType=o.mimeType||QS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _d,wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new xc,wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Mc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=s[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Dt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=yn);const u=r.alphaMode||Na.OPAQUE;if(u===Na.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Na.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Oi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Oi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Oi){const h=r.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],Dt)}return r.emissiveTexture!==void 0&&o!==Oi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Xn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Di(s,h,r),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Nh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=JS(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Nh(new mn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?KS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],m=o[p];let d;const A=c[p];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Ey(x,A):new Qt(x,A),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?d.geometry=Lh(d.geometry,Kf):m.mode===nn.TRIANGLE_FAN&&(d.geometry=Lh(d.geometry,Pl));else if(m.mode===nn.LINES)d=new gd(x,A);else if(m.mode===nn.LINE_STRIP)d=new vc(x,A);else if(m.mode===nn.LINE_LOOP)d=new wy(x,A);else if(m.mode===nn.POINTS)d=new Ry(x,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&ZS(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Xn(d,r),m.extensions&&Di(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Di(s,h[0],r),h[0];const f=new Bi;r.extensions&&Di(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ot(Jf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new dc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Xn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _c(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const p=s.channels[h],_=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[_.input]:_.input,A=s.parameters!==void 0?s.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",A)),c.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],_=h[2],x=h[3],m=h[4],d=[];for(let A=0,b=f.length;A<b;A++){const M=f[A],O=p[A],D=_[A],R=x[A],P=m[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const T=i._createAnimationTracks(M,O,D,R,P);if(T)for(let S=0;S<T.length;S++)d.push(T[S])}return new Ny(r,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,eE)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new md:c.length>1?u=new Bi:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Xn(u,r),r.extensions&&Di(i,u,r),r.matrix!==void 0){const h=new ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Bi;i.name&&(r.name=s.createUniqueName(i.name)),Xn(r,i),i.extensions&&Di(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of s.associations)(f instanceof wn||f instanceof Tt)&&h.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ui[r.path]===ui.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ui[r.path]){case ui.weights:c=Ls;break;case ui.rotation:c=Ds;break;case ui.position:case ui.scale:c=Is;break;default:switch(i.itemSize){case 1:c=Ls;break;case 2:case 3:default:c=Is;break}break}const u=s.interpolation!==void 0?qS[s.interpolation]:Mr,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const _=new c(l[f]+"."+ui[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Fl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ds?YS:Sd;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nE(n,e,t){const i=e.attributes,s=new ti;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=Fl(Ms[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const x=Fl(Ms[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Nh(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Nl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ke.workingColorSpace!==Dt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Xn(n,e),nE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$S(n,e.targets,t):n})}class iE extends ky{constructor(e){super(e),this.type=Kn}parse(e){const o=function(P,T){switch(P){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(T||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(T||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(T||""))}},u=`
`,h=function(P,T,S){T=T||1024;let K=P.pos,z=-1,Y=0,te="",G=String.fromCharCode.apply(null,new Uint16Array(P.subarray(K,K+128)));for(;0>(z=G.indexOf(u))&&Y<T&&K<P.byteLength;)te+=G,Y+=G.length,K+=128,G+=String.fromCharCode.apply(null,new Uint16Array(P.subarray(K,K+128)));return-1<z?(P.pos+=Y+z+1,te+G.slice(0,z)):!1},f=function(P){const T=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,K=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,Y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let te,G;for((P.pos>=P.byteLength||!(te=h(P)))&&o(1,"no header found"),(G=te.match(T))||o(3,"bad initial token"),Y.valid|=1,Y.programtype=G[1],Y.string+=te+`
`;te=h(P),te!==!1;){if(Y.string+=te+`
`,te.charAt(0)==="#"){Y.comments+=te+`
`;continue}if((G=te.match(S))&&(Y.gamma=parseFloat(G[1])),(G=te.match(C))&&(Y.exposure=parseFloat(G[1])),(G=te.match(K))&&(Y.valid|=2,Y.format=G[1]),(G=te.match(z))&&(Y.valid|=4,Y.height=parseInt(G[1],10),Y.width=parseInt(G[2],10)),Y.valid&2&&Y.valid&4)break}return Y.valid&2||o(3,"missing format specifier"),Y.valid&4||o(3,"missing image size specifier"),Y},p=function(P,T,S){const C=T;if(C<8||C>32767||P[0]!==2||P[1]!==2||P[2]&128)return new Uint8Array(P);C!==(P[2]<<8|P[3])&&o(3,"wrong scanline width");const K=new Uint8Array(4*T*S);K.length||o(4,"unable to allocate buffer space");let z=0,Y=0;const te=4*C,G=new Uint8Array(4),J=new Uint8Array(te);let V=S;for(;V>0&&Y<P.byteLength;){Y+4>P.byteLength&&o(1),G[0]=P[Y++],G[1]=P[Y++],G[2]=P[Y++],G[3]=P[Y++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=C)&&o(3,"bad rgbe scanline format");let ce=0,fe;for(;ce<te&&Y<P.byteLength;){fe=P[Y++];const Te=fe>128;if(Te&&(fe-=128),(fe===0||ce+fe>te)&&o(3,"bad scanline data"),Te){const Ge=P[Y++];for(let ne=0;ne<fe;ne++)J[ce++]=Ge}else J.set(P.subarray(Y,Y+fe),ce),ce+=fe,Y+=fe}const ye=C;for(let Te=0;Te<ye;Te++){let Ge=0;K[z]=J[Te+Ge],Ge+=C,K[z+1]=J[Te+Ge],Ge+=C,K[z+2]=J[Te+Ge],Ge+=C,K[z+3]=J[Te+Ge],z+=4}V--}return K},_=function(P,T,S,C){const K=P[T+3],z=Math.pow(2,K-128)/255;S[C+0]=P[T+0]*z,S[C+1]=P[T+1]*z,S[C+2]=P[T+2]*z,S[C+3]=1},x=function(P,T,S,C){const K=P[T+3],z=Math.pow(2,K-128)/255;S[C+0]=zr.toHalfFloat(Math.min(P[T+0]*z,65504)),S[C+1]=zr.toHalfFloat(Math.min(P[T+1]*z,65504)),S[C+2]=zr.toHalfFloat(Math.min(P[T+2]*z,65504)),S[C+3]=zr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const d=f(m),A=d.width,b=d.height,M=p(m.subarray(m.pos),A,b);let O,D,R;switch(this.type){case Wt:R=M.length/4;const P=new Float32Array(R*4);for(let S=0;S<R;S++)_(M,S*4,P,S*4);O=P,D=Wt;break;case Kn:R=M.length/4;const T=new Uint16Array(R*4);for(let S=0;S<R;S++)x(M,S*4,T,S*4);O=T,D=Kn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:A,height:b,data:O,header:d.string,gamma:d.gamma,exposure:d.exposure,type:D}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case Wt:case Kn:o.colorSpace=Dt,o.minFilter=Et,o.magFilter=Et,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}}const sE={__name:"App",setup(n){const e=new My,t=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(0,0,10),e.add(t);const i=new vy;i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);const s=new cS(t,i.domElement);s.enableDamping=!0;const r=new oS(5);e.add(r);function o(){s.update(),i.render(e,t),requestAnimationFrame(o)}return o(),new iE().load("moxing/024.hdr",function(c){e.environment=c,c.mapping=To}),new SS().load("moxing/houtou.glb",function(c){e.add(c.scene)},void 0,function(c){console.error(c)}),(c,u)=>(um(),dm("div"))}};$m(sE).mount("#app");
