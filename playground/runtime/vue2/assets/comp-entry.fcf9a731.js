var Dt=Object.defineProperty;var dt=Object.getOwnPropertySymbols;var Ut=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable;var gt=(e,t,n)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ht=(e,t)=>{for(var n in t||(t={}))Ut.call(t,n)&&gt(e,n,t[n]);if(dt)for(var n of dt(t))$t.call(t,n)&&gt(e,n,t[n]);return e};import{t as Vt,n as S}from"./plugin-vue2_normalizer.d46255f8.js";var kt=Vue.defineComponent({name:"magic-ui-component",props:{config:{type:Object,default:()=>({})}},setup(e){var i;const t=(i=Vue.getCurrentInstance())==null?void 0:i.proxy,n=Vue.inject("app");return Vue.provide("hoc",t),{tagName:Vue.computed(()=>`magic-ui-${Vt(e.config.type)}`),style:Vue.computed(()=>n==null?void 0:n.transformStyle(e.config.style||{})),display:()=>{var o;const r=(o=e.config)==null?void 0:o.display;return typeof r=="function"?r(n):r!==!1}}}}),Ot=function(){var t=this,n=t._self._c;return t._self._setupProxy,t.display()?n(t.tagName,{tag:"component",class:`magic-ui-component${t.config.className?` ${t.config.className}`:""}`,style:t.style,attrs:{id:t.config.id,config:t.config}}):t._e()},jt=[],zt=S(kt,Ot,jt,!1,null,null,null,null),wt=zt.exports,L=e=>{var r,o;const t=Vue.inject("app"),n=(r=t==null?void 0:t.page)==null?void 0:r.getNode(e.config.id),i=(o=Vue.getCurrentInstance())==null?void 0:o.proxy;return n==null||n.emit("created",i),Vue.onMounted(()=>{n==null||n.emit("mounted",i)}),Vue.onUnmounted(()=>{n==null||n.emit("destroy",i)}),t},xt=Vue.defineComponent({name:"magic-ui-page",components:{"magic-ui-component":wt},props:{config:{type:Object,default:()=>({})}},setup(e){const t=L(e);return{style:Vue.computed(()=>t==null?void 0:t.transformStyle(e.config.style||{})),refresh(){window.location.reload()}}}}),Ht=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",{class:`magic-ui-page magic-ui-container${t.config.className?` ${t.config.className}`:""}`,style:t.style,attrs:{id:t.config.id}},[t._t("default"),t._l(t.config.items,function(i){return n("magic-ui-component",{key:i.id,attrs:{config:i}})})],2)},Kt=[],Jt=S(xt,Ht,Kt,!1,null,null,null,null),Yt=Jt.exports,qt=()=>{var t;const e=(t=Vue.getCurrentInstance())==null?void 0:t.proxy;return{show:()=>{e.$set(e.config.style,"display","initial")},hide:()=>{e.$set(e.config.style,"display","none")}}},Gt=Vue.defineComponent({name:"magic-ui-container",components:{"magic-ui-component":wt},props:{config:{type:Object,default:()=>({})}},setup(e){const t=L(e);return ht({style:Vue.computed(()=>t==null?void 0:t.transformStyle(e.config.style||{})),display:()=>{var i;const n=(i=e.config)==null?void 0:i.display;return typeof n=="function"?n(t):n!==!1}},qt())}}),Qt=function(){var t=this,n=t._self._c;return t._self._setupProxy,t.display()?n("div",{class:`magic-ui-container${t.config.className?` ${t.config.className}`:""}`,style:t.style,attrs:{id:t.config.id}},[t._t("default"),t._l(t.config.items,function(i){return n("magic-ui-component",{key:i.id,attrs:{config:i}})})],2):t._e()},Wt=[],Zt=S(Gt,Qt,Wt,!1,null,null,null,null),Xt=Zt.exports,te=Vue.defineComponent({name:"magic-ui-button",props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){var u;L(e);const t=(u=Vue.getCurrentInstance())==null?void 0:u.proxy,n=Vue.reactive([]),i=Vue.computed(()=>[typeof e.config.preAction=="function"?e.config.preAction:()=>!0,...n,typeof e.config.postAction=="function"?e.config.postAction:()=>!0]);function r(c){n.push(c)}async function o(){for(const c of i.value)if(typeof c=="function"&&await c(t,{model:e.model})===!1)break}const s=Vue.computed(()=>{var c,a,l;return{type:"text",text:((c=e.config)==null?void 0:c.text)||"",disabledText:((a=e.config)==null?void 0:a.disabledText)||"",html:((l=e.config)==null?void 0:l.html)||""}});return{pushAction:r,clickHandler:o,textConfig:s}}}),ee=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("button",{staticClass:"magic-ui-button",on:{click:t.clickHandler}},[t._t("default",function(){return[n("magic-ui-text",{attrs:{config:t.textConfig}})]})],2)},ne=[],oe=S(te,ee,ne,!1,null,null,null,null),re=oe.exports,ie=Vue.defineComponent({name:"magic-ui-text",props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})},vars:{type:Object,default:()=>({})}},setup(e){var r;L(e);const t=(r=Vue.getCurrentInstance())==null?void 0:r.proxy,n=Vue.inject("hoc");return{displayText:Vue.computed(()=>{var u,c;let o=((u=e.config)==null?void 0:u.text)||"";const{vars:s}=e;if((n==null?void 0:n.disabled)&&((c=e.config)==null?void 0:c.disabledText)&&(o=e.config.disabledText),typeof o=="function")return o.bind(t)(t,{model:e.model});if(Object.prototype.toString.call(s)==="[object Object]"){let a=o;return Object.entries(s).forEach(([l,_])=>{a=a.replace(new RegExp(`{{${l}}}`,"g"),_)}),a}return o||""})}},render(){var t,n,i,r;const e=(t=this.config)!=null&&t.multiple?"magic-ui-text":"magic-ui-text magic-ui-text--single-line";return typeof((n=this.$slots)==null?void 0:n.default)=="function"?Vue.h("span",{class:e},[((r=(i=this.$slots)==null?void 0:i.default)==null?void 0:r.call(i))||""]):Vue.h("span",{class:e,domProps:{innerHTML:this.displayText}})}});const se=null,ce=null;var ue=S(ie,se,ce,!1,null,null,null,null),ae=ue.exports,le=Vue.defineComponent({name:"magic-ui-img",props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){return L(e),{clickHandler(){e.config.url&&(window.location.href=e.config.url)}}}}),fe=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("img",{staticClass:"magic-ui-img",attrs:{src:t.config.src},on:{click:t.clickHandler}})},de=[],ge=S(le,fe,de,!1,null,null,null,null),he=ge.exports,j={},me=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},_t={},A={};let ct;const ye=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];A.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};A.getSymbolTotalCodewords=function(t){return ye[t]};A.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};A.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ct=t};A.isKanjiModeEnabled=function(){return typeof ct!="undefined"};A.toSJIS=function(t){return ct(t)};var Y={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},e.from=function(i,r){if(e.isValid(i))return i;try{return t(i)}catch{return r}}})(Y);function Ct(){this.buffer=[],this.length=0}Ct.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var pe=Ct;function z(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}z.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)};z.prototype.get=function(e,t){return this.data[e*this.size+t]};z.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};z.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var we=z,Et={};(function(e){const t=A.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,o=t(i),s=o===145?26:Math.ceil((o-13)/(2*r-2))*2,u=[o-7];for(let c=1;c<r-1;c++)u[c]=u[c-1]-s;return u.push(6),u.reverse()},e.getPositions=function(i){const r=[],o=e.getRowColCoords(i),s=o.length;for(let u=0;u<s;u++)for(let c=0;c<s;c++)u===0&&c===0||u===0&&c===s-1||u===s-1&&c===0||r.push([o[u],o[c]]);return r}})(Et);var Bt={};const _e=A.getSymbolSize,mt=7;Bt.getPositions=function(t){const n=_e(t);return[[0,0],[n-mt,0],[0,n-mt]]};var bt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const o=r.size;let s=0,u=0,c=0,a=null,l=null;for(let _=0;_<o;_++){u=c=0,a=l=null;for(let m=0;m<o;m++){let f=r.get(_,m);f===a?u++:(u>=5&&(s+=t.N1+(u-5)),a=f,u=1),f=r.get(m,_),f===l?c++:(c>=5&&(s+=t.N1+(c-5)),l=f,c=1)}u>=5&&(s+=t.N1+(u-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(r){const o=r.size;let s=0;for(let u=0;u<o-1;u++)for(let c=0;c<o-1;c++){const a=r.get(u,c)+r.get(u,c+1)+r.get(u+1,c)+r.get(u+1,c+1);(a===4||a===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const o=r.size;let s=0,u=0,c=0;for(let a=0;a<o;a++){u=c=0;for(let l=0;l<o;l++)u=u<<1&2047|r.get(a,l),l>=10&&(u===1488||u===93)&&s++,c=c<<1&2047|r.get(l,a),l>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let o=0;const s=r.data.length;for(let c=0;c<s;c++)o+=r.data[c];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function n(i,r,o){switch(i){case e.Patterns.PATTERN000:return(r+o)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(r+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return r*o%2+r*o%3===0;case e.Patterns.PATTERN110:return(r*o%2+r*o%3)%2===0;case e.Patterns.PATTERN111:return(r*o%3+(r+o)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(r,o){const s=o.size;for(let u=0;u<s;u++)for(let c=0;c<s;c++)o.isReserved(c,u)||o.xor(c,u,n(r,c,u))},e.getBestMask=function(r,o){const s=Object.keys(e.Patterns).length;let u=0,c=1/0;for(let a=0;a<s;a++){o(a),e.applyMask(a,r);const l=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(a,r),l<c&&(c=l,u=a)}return u}})(bt);var q={};const M=Y,x=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],H=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];q.getBlocksCount=function(t,n){switch(n){case M.L:return x[(t-1)*4+0];case M.M:return x[(t-1)*4+1];case M.Q:return x[(t-1)*4+2];case M.H:return x[(t-1)*4+3];default:return}};q.getTotalCodewordsCount=function(t,n){switch(n){case M.L:return H[(t-1)*4+0];case M.M:return H[(t-1)*4+1];case M.Q:return H[(t-1)*4+2];case M.H:return H[(t-1)*4+3];default:return}};var At={},G={};const k=new Uint8Array(512),K=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)k[n]=t,K[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)k[n]=k[n-255]})();G.log=function(t){if(t<1)throw new Error("log("+t+")");return K[t]};G.exp=function(t){return k[t]};G.mul=function(t,n){return t===0||n===0?0:k[K[t]+K[n]]};(function(e){const t=G;e.mul=function(i,r){const o=new Uint8Array(i.length+r.length-1);for(let s=0;s<i.length;s++)for(let u=0;u<r.length;u++)o[s+u]^=t.mul(i[s],r[u]);return o},e.mod=function(i,r){let o=new Uint8Array(i);for(;o.length-r.length>=0;){const s=o[0];for(let c=0;c<r.length;c++)o[c]^=t.mul(r[c],s);let u=0;for(;u<o.length&&o[u]===0;)u++;o=o.slice(u)}return o},e.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let o=0;o<i;o++)r=e.mul(r,new Uint8Array([1,t.exp(o)]));return r}})(At);const vt=At;function ut(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ut.prototype.initialize=function(t){this.degree=t,this.genPoly=vt.generateECPolynomial(this.degree)};ut.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const i=vt.mod(n,this.genPoly),r=this.degree-i.length;if(r>0){const o=new Uint8Array(this.degree);return o.set(i,r),o}return i};var Ce=ut,Nt={},R={},at={};at.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var T={};const Tt="[0-9]+",Ee="[A-Z $%*+\\-./:]+";let O="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";O=O.replace(/u/g,"\\u");const Be="(?:(?![A-Z0-9 $%*+\\-./:]|"+O+`)(?:.|[\r
]))+`;T.KANJI=new RegExp(O,"g");T.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");T.BYTE=new RegExp(Be,"g");T.NUMERIC=new RegExp(Tt,"g");T.ALPHANUMERIC=new RegExp(Ee,"g");const be=new RegExp("^"+O+"$"),Ae=new RegExp("^"+Tt+"$"),ve=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");T.testKanji=function(t){return be.test(t)};T.testNumeric=function(t){return Ae.test(t)};T.testAlphanumeric=function(t){return ve.test(t)};(function(e){const t=at,n=T;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return n.testNumeric(o)?e.NUMERIC:n.testAlphanumeric(o)?e.ALPHANUMERIC:n.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(o,s){if(e.isValid(o))return o;try{return i(o)}catch{return s}}})(R);(function(e){const t=A,n=q,i=Y,r=R,o=at,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,u=t.getBCHDigit(s);function c(m,f,y){for(let p=1;p<=40;p++)if(f<=e.getCapacity(p,y,m))return p}function a(m,f){return r.getCharCountIndicator(m,f)+4}function l(m,f){let y=0;return m.forEach(function(p){y+=a(p.mode,f)+p.getBitsLength()}),y}function _(m,f){for(let y=1;y<=40;y++)if(l(m,y)<=e.getCapacity(y,f,r.MIXED))return y}e.from=function(f,y){return o.isValid(f)?parseInt(f,10):y},e.getCapacity=function(f,y,p){if(!o.isValid(f))throw new Error("Invalid QR Code version");typeof p=="undefined"&&(p=r.BYTE);const b=t.getSymbolTotalCodewords(f),h=n.getTotalCodewordsCount(f,y),w=(b-h)*8;if(p===r.MIXED)return w;const g=w-a(p,f);switch(p){case r.NUMERIC:return Math.floor(g/10*3);case r.ALPHANUMERIC:return Math.floor(g/11*2);case r.KANJI:return Math.floor(g/13);case r.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,y){let p;const b=i.from(y,i.M);if(Array.isArray(f)){if(f.length>1)return _(f,b);if(f.length===0)return 1;p=f[0]}else p=f;return c(p.mode,p.getLength(),b)},e.getEncodedBits=function(f){if(!o.isValid(f)||f<7)throw new Error("Invalid QR Code version");let y=f<<12;for(;t.getBCHDigit(y)-u>=0;)y^=s<<t.getBCHDigit(y)-u;return f<<12|y}})(Nt);var It={};const ot=A,Pt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Ne=1<<14|1<<12|1<<10|1<<4|1<<1,yt=ot.getBCHDigit(Pt);It.getEncodedBits=function(t,n){const i=t.bit<<3|n;let r=i<<10;for(;ot.getBCHDigit(r)-yt>=0;)r^=Pt<<ot.getBCHDigit(r)-yt;return(i<<10|r)^Ne};var Mt={};const Te=R;function F(e){this.mode=Te.NUMERIC,this.data=e.toString()}F.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(t){let n,i,r;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),r=parseInt(i,10),t.put(r,10);const o=this.data.length-n;o>0&&(i=this.data.substr(n),r=parseInt(i,10),t.put(r,o*3+1))};var Ie=F;const Pe=R,Z=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function D(e){this.mode=Pe.ALPHANUMERIC,this.data=e}D.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=Z.indexOf(this.data[n])*45;i+=Z.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(Z.indexOf(this.data[n]),6)};var Me=D,Se=function(t){for(var n=[],i=t.length,r=0;r<i;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&i>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,r+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const Re=Se,Le=R;function U(e){this.mode=Le.BYTE,this.data=new Uint8Array(Re(e))}U.getBitsLength=function(t){return t*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var Fe=U;const De=R,Ue=A;function $(e){this.mode=De.KANJI,this.data=e}$.getBitsLength=function(t){return t*13};$.prototype.getLength=function(){return this.data.length};$.prototype.getBitsLength=function(){return $.getBitsLength(this.data.length)};$.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=Ue.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var $e=$,St={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,i,r){var o={},s={};s[i]=0;var u=t.PriorityQueue.make();u.push(i,0);for(var c,a,l,_,m,f,y,p,b;!u.empty();){c=u.pop(),a=c.value,_=c.cost,m=n[a]||{};for(l in m)m.hasOwnProperty(l)&&(f=m[l],y=_+f,p=s[l],b=typeof s[l]=="undefined",(b||p>y)&&(s[l]=y,u.push(l,y),o[l]=a))}if(typeof r!="undefined"&&typeof s[r]=="undefined"){var h=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(h)}return o},extract_shortest_path_from_predecessor_list:function(n,i){for(var r=[],o=i;o;)r.push(o),o=n[o];return r.reverse(),r},find_path:function(n,i,r){var o=t.single_source_shortest_paths(n,i,r);return t.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(n){var i=t.PriorityQueue,r={},o;n=n||{};for(o in i)i.hasOwnProperty(o)&&(r[o]=i[o]);return r.queue=[],r.sorter=n.sorter||i.default_sorter,r},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var r={value:n,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(St);(function(e){const t=R,n=Ie,i=Me,r=Fe,o=$e,s=T,u=A,c=St.exports;function a(h){return unescape(encodeURIComponent(h)).length}function l(h,w,g){const d=[];let C;for(;(C=h.exec(g))!==null;)d.push({data:C[0],index:C.index,mode:w,length:C[0].length});return d}function _(h){const w=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,C;return u.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),C=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),C=[]),w.concat(g,d,C).sort(function(B,v){return B.index-v.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function m(h,w){switch(w){case t.NUMERIC:return n.getBitsLength(h);case t.ALPHANUMERIC:return i.getBitsLength(h);case t.KANJI:return o.getBitsLength(h);case t.BYTE:return r.getBitsLength(h)}}function f(h){return h.reduce(function(w,g){const d=w.length-1>=0?w[w.length-1]:null;return d&&d.mode===g.mode?(w[w.length-1].data+=g.data,w):(w.push(g),w)},[])}function y(h){const w=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:w.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:w.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:w.push([d,{data:d.data,mode:t.BYTE,length:a(d.data)}]);break;case t.BYTE:w.push([{data:d.data,mode:t.BYTE,length:a(d.data)}])}}return w}function p(h,w){const g={},d={start:{}};let C=["start"];for(let E=0;E<h.length;E++){const B=h[E],v=[];for(let P=0;P<B.length;P++){const N=B[P],V=""+E+P;v.push(V),g[V]={node:N,lastCount:0},d[V]={};for(let W=0;W<C.length;W++){const I=C[W];g[I]&&g[I].node.mode===N.mode?(d[I][V]=m(g[I].lastCount+N.length,N.mode)-m(g[I].lastCount,N.mode),g[I].lastCount+=N.length):(g[I]&&(g[I].lastCount=N.length),d[I][V]=m(N.length,N.mode)+4+t.getCharCountIndicator(N.mode,w))}}C=v}for(let E=0;E<C.length;E++)d[C[E]].end=0;return{map:d,table:g}}function b(h,w){let g;const d=t.getBestModeForData(h);if(g=t.from(w,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!u.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new n(h);case t.ALPHANUMERIC:return new i(h);case t.KANJI:return new o(h);case t.BYTE:return new r(h)}}e.fromArray=function(w){return w.reduce(function(g,d){return typeof d=="string"?g.push(b(d,null)):d.data&&g.push(b(d.data,d.mode)),g},[])},e.fromString=function(w,g){const d=_(w,u.isKanjiModeEnabled()),C=y(d),E=p(C,g),B=c.find_path(E.map,"start","end"),v=[];for(let P=1;P<B.length-1;P++)v.push(E.table[B[P]].node);return e.fromArray(f(v))},e.rawSplit=function(w){return e.fromArray(_(w,u.isKanjiModeEnabled()))}})(Mt);const Q=A,X=Y,Ve=pe,ke=we,Oe=Et,je=Bt,rt=bt,it=q,ze=Ce,J=Nt,xe=It,He=R,tt=Mt;function Ke(e,t){const n=e.size,i=je.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],s=i[r][1];for(let u=-1;u<=7;u++)if(!(o+u<=-1||n<=o+u))for(let c=-1;c<=7;c++)s+c<=-1||n<=s+c||(u>=0&&u<=6&&(c===0||c===6)||c>=0&&c<=6&&(u===0||u===6)||u>=2&&u<=4&&c>=2&&c<=4?e.set(o+u,s+c,!0,!0):e.set(o+u,s+c,!1,!0))}}function Je(e){const t=e.size;for(let n=8;n<t-8;n++){const i=n%2===0;e.set(n,6,i,!0),e.set(6,n,i,!0)}}function Ye(e,t){const n=Oe.getPositions(t);for(let i=0;i<n.length;i++){const r=n[i][0],o=n[i][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(r+s,o+u,!0,!0):e.set(r+s,o+u,!1,!0)}}function qe(e,t){const n=e.size,i=J.getEncodedBits(t);let r,o,s;for(let u=0;u<18;u++)r=Math.floor(u/3),o=u%3+n-8-3,s=(i>>u&1)===1,e.set(r,o,s,!0),e.set(o,r,s,!0)}function et(e,t,n){const i=e.size,r=xe.getEncodedBits(t,n);let o,s;for(o=0;o<15;o++)s=(r>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(i-15+o,8,s,!0),o<8?e.set(8,i-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(i-8,8,1,!0)}function Ge(e,t){const n=e.size;let i=-1,r=n-1,o=7,s=0;for(let u=n-1;u>0;u-=2)for(u===6&&u--;;){for(let c=0;c<2;c++)if(!e.isReserved(r,u-c)){let a=!1;s<t.length&&(a=(t[s]>>>o&1)===1),e.set(r,u-c,a),o--,o===-1&&(s++,o=7)}if(r+=i,r<0||n<=r){r-=i,i=-i;break}}}function Qe(e,t,n){const i=new Ve;n.forEach(function(c){i.put(c.mode.bit,4),i.put(c.getLength(),He.getCharCountIndicator(c.mode,e)),c.write(i)});const r=Q.getSymbolTotalCodewords(e),o=it.getTotalCodewordsCount(e,t),s=(r-o)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const u=(s-i.getLengthInBits())/8;for(let c=0;c<u;c++)i.put(c%2?17:236,8);return We(i,e,t)}function We(e,t,n){const i=Q.getSymbolTotalCodewords(t),r=it.getTotalCodewordsCount(t,n),o=i-r,s=it.getBlocksCount(t,n),u=i%s,c=s-u,a=Math.floor(i/s),l=Math.floor(o/s),_=l+1,m=a-l,f=new ze(m);let y=0;const p=new Array(s),b=new Array(s);let h=0;const w=new Uint8Array(e.buffer);for(let B=0;B<s;B++){const v=B<c?l:_;p[B]=w.slice(y,y+v),b[B]=f.encode(p[B]),y+=v,h=Math.max(h,v)}const g=new Uint8Array(i);let d=0,C,E;for(C=0;C<h;C++)for(E=0;E<s;E++)C<p[E].length&&(g[d++]=p[E][C]);for(C=0;C<m;C++)for(E=0;E<s;E++)g[d++]=b[E][C];return g}function Ze(e,t,n,i){let r;if(Array.isArray(e))r=tt.fromArray(e);else if(typeof e=="string"){let a=t;if(!a){const l=tt.rawSplit(e);a=J.getBestVersionForData(l,n)}r=tt.fromString(e,a||40)}else throw new Error("Invalid data");const o=J.getBestVersionForData(r,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=Qe(t,n,r),u=Q.getSymbolSize(t),c=new ke(u);return Ke(c,t),Je(c),Ye(c,t),et(c,n,0),t>=7&&qe(c,t),Ge(c,s),isNaN(i)&&(i=rt.getBestMask(c,et.bind(null,c,n))),rt.applyMask(i,c),et(c,n,i),{modules:c,version:t,errorCorrectionLevel:n,maskPattern:i,segments:r}}_t.create=function(t,n){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=X.M,r,o;return typeof n!="undefined"&&(i=X.from(n.errorCorrectionLevel,X.M),r=J.from(n.version),o=rt.from(n.maskPattern),n.toSJISFunc&&Q.setToSJISFunction(n.toSJISFunc)),Ze(t,r,i,o)};var Rt={},lt={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(o){return[o,o]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,o=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:o,scale:o?4:s,margin:r,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},e.getImageWidth=function(i,r){const o=e.getScale(i,r);return Math.floor((i+r.margin*2)*o)},e.qrToImageData=function(i,r,o){const s=r.modules.size,u=r.modules.data,c=e.getScale(s,o),a=Math.floor((s+o.margin*2)*c),l=o.margin*c,_=[o.color.light,o.color.dark];for(let m=0;m<a;m++)for(let f=0;f<a;f++){let y=(m*a+f)*4,p=o.color.light;if(m>=l&&f>=l&&m<a-l&&f<a-l){const b=Math.floor((m-l)/c),h=Math.floor((f-l)/c);p=_[u[b*s+h]?1:0]}i[y++]=p.r,i[y++]=p.g,i[y++]=p.b,i[y]=p.a}}})(lt);(function(e){const t=lt;function n(r,o,s){r.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,u){let c=u,a=s;typeof c=="undefined"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(a=i()),c=t.getOptions(c);const l=t.getImageWidth(o.modules.size,c),_=a.getContext("2d"),m=_.createImageData(l,l);return t.qrToImageData(m.data,o,c),n(_,a,l),_.putImageData(m,0,0),a},e.renderToDataURL=function(o,s,u){let c=u;typeof c=="undefined"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const a=e.render(o,s,c),l=c.type||"image/png",_=c.rendererOpts||{};return a.toDataURL(l,_.quality)}})(Rt);var Lt={};const Xe=lt;function pt(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function nt(e,t,n){let i=e+t;return typeof n!="undefined"&&(i+=" "+n),i}function tn(e,t,n){let i="",r=0,o=!1,s=0;for(let u=0;u<e.length;u++){const c=Math.floor(u%t),a=Math.floor(u/t);!c&&!o&&(o=!0),e[u]?(s++,u>0&&c>0&&e[u-1]||(i+=o?nt("M",c+n,.5+a+n):nt("m",r,0),r=0,o=!1),c+1<t&&e[u+1]||(i+=nt("h",s),s=0)):r++}return i}Lt.render=function(t,n,i){const r=Xe.getOptions(n),o=t.modules.size,s=t.modules.data,u=o+r.margin*2,c=r.color.light.a?"<path "+pt(r.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",a="<path "+pt(r.color.dark,"stroke")+' d="'+tn(s,o,r.margin)+'"/>',l='viewBox="0 0 '+u+" "+u+'"',_=r.width?'width="'+r.width+'" height="'+r.width+'" ':"",m='<svg xmlns="http://www.w3.org/2000/svg" '+_+l+' shape-rendering="crispEdges">'+c+a+`</svg>
`;return typeof i=="function"&&i(null,m),m};const en=me,st=_t,Ft=Rt,nn=Lt;function ft(e,t,n,i,r){const o=[].slice.call(arguments,1),s=o.length,u=typeof o[s-1]=="function";if(!u&&!en())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(r=n,n=t,t=i=void 0):s===3&&(t.getContext&&typeof r=="undefined"?(r=i,i=void 0):(r=i,i=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=i=void 0):s===2&&!t.getContext&&(i=n,n=t,t=void 0),new Promise(function(c,a){try{const l=st.create(n,i);c(e(l,t,i))}catch(l){a(l)}})}try{const c=st.create(n,i);r(null,e(c,t,i))}catch(c){r(c)}}j.create=st.create;j.toCanvas=ft.bind(null,Ft.render);j.toDataURL=ft.bind(null,Ft.renderToDataURL);j.toString=ft.bind(null,function(e,t,n){return nn.render(e,n)});var on=Vue.defineComponent({name:"magic-ui-qrcode",props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){L(e);const t=Vue.ref();return Vue.watch(()=>e.config.url,(n="")=>{j.toDataURL(n,(i,r)=>{i&&console.error(i),t.value=r})},{immediate:!0}),{imgUrl:t}}}),rn=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("img",{staticClass:"magic-ui-qrcode",attrs:{src:t.imgUrl}})},sn=[],cn=S(on,rn,sn,!1,null,null,null,null),un=cn.exports,an=Vue.defineComponent({name:"magic-ui-overlay",props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){var s;const t=Vue.ref(!1),n=L(e),i=(s=n==null?void 0:n.page)==null?void 0:s.getNode(e.config.id),r=()=>{t.value=!0,n&&n.emit("overlay:open",i)},o=()=>{t.value=!1,n&&n.emit("overlay:close",i)};return n==null||n.on("editor:select",(u,c)=>{c.find(a=>a.id===e.config.id)?r():o()}),{visible:t,openOverlay:r,closeOverlay:o}}}),ln=function(){var t=this,n=t._self._c;return t._self._setupProxy,t.visible?n("magic-ui-container",{staticClass:"magic-ui-overlay",attrs:{config:{items:t.config.items}}},[t._t("default")],2):t._e()},fn=[],dn=S(an,ln,fn,!1,null,null,null,null),gn=dn.exports;const hn={page:Yt,container:Xt,button:re,text:ae,img:he,qrcode:un,overlay:gn},mn={},yn={components:hn,plugins:mn};window.magicPresetComponents=yn;export{yn as default};
//# sourceMappingURL=comp-entry.fcf9a731.js.map
