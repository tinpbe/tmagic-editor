import{_ as p,r as l,o as i,c as r,a as n,b as e,w as t,e as o,d as s}from"./app.31367440.js";const c={},d=o('<h1 id="stagerender" tabindex="-1"><a class="header-anchor" href="#stagerender" aria-hidden="true">#</a> StageRender</h1><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> core</h3>',3),u=n("strong",null,"\u7C7B\u578B\uFF1A",-1),k=s(),m=s("StageCore"),h=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")])],-1),v=n("p",null,"StageCore\u5B9E\u4F8B",-1),g=n("h2",{id:"\u5C5E\u6027",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5C5E\u6027","aria-hidden":"true"},"#"),s(" \u5C5E\u6027")],-1),b=n("h3",{id:"core-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#core-1","aria-hidden":"true"},"#"),s(" core")],-1),_=n("strong",null,"\u7C7B\u578B\uFF1A",-1),f=s(),w=s("StageCore"),x=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")])],-1),y=o(`<p>StageCore\u5B9E\u4F8B</p><h3 id="contentwindow" tabindex="-1"><a class="header-anchor" href="#contentwindow" aria-hidden="true">#</a> contentWindow</h3><ul><li><strong>\u7C7B\u578B\uFF1A</strong> RuntimeWindow | null</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RuntimeWindow</span> <span class="token keyword">extends</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  magic<span class="token operator">:</span> Magic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Magic</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u5F53\u524D\u9875\u9762\u7684\u6839\u8282\u70B9\u53D8\u5316\u65F6\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u7F16\u8F91\u5668\u4F1A\u540C\u6B65\u8BE5el\u548Cstage\u7684\u5927\u5C0F\uFF0C\u8BE5\u65B9\u6CD5\u7531stage\u6CE8\u5165\u5230iframe.contentWindow\u4E2D */</span>
  <span class="token function-variable function">onPageElUpdate</span><span class="token operator">:</span> <span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onRuntimeReady</span><span class="token operator">:</span> <span class="token punctuation">(</span>runtime<span class="token operator">:</span> Runtime<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u8BE6\u60C5\uFF1A</strong></li></ul><p>\u7EC4\u4EF6\u7684js\u3001css\u6267\u884C\u7684\u73AF\u5883\uFF0C\u76F4\u63A5\u6E32\u67D3\u4E3A\u5F53\u524Dwindow\uFF0Ciframe\u6E32\u67D3\u5219\u4E3Aiframe.contentWindow</p><h3 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime" aria-hidden="true">#</a> runtime</h3><ul><li><strong>\u7C7B\u578B\uFF1A</strong> Runtime | null</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Runtime</span> <span class="token punctuation">{</span>
  getApp<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Core<span class="token punctuation">;</span>
  beforeSelect<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7F16\u8F91\u5668Dsl\u6574\u4E2A\u6539\u53D8\u65F6\u8C03\u7528</span>
  updateRootConfig<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> MApp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u9009\u62E9\u9875\u9762\u65F6\u8C03\u7528</span>
  updatePageId<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> Id<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u9009\u4E2D\u7EC4\u4EF6\u65F6\u8C03\u7528</span>
  select<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> Id<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>
  <span class="token comment">// \u6DFB\u52A0\u7EC4\u4EF6\u65F6\u8C03\u7528</span>
  add<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> UpdateData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u66F4\u65B0\u7EC4\u4EF6\u65F6\u8C03\u7528</span>
  update<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> UpdateData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6D41\u5F0F\u5E03\u5C40\u4E0B\u62D6\u52A8\u7EC4\u4EF6\u540E\u8C03\u7528</span>
  sortNode<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> SortEventData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5220\u9664\u7EC4\u4EF6\u65F6\u8C03\u7528</span>
  remove<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> RemoveData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u8BE6\u60C5\uFF1A</strong></li></ul><p>\u7528\u4E8E\u7F16\u8F91\u5668\u4E0E\u753B\u5E03\u7684\u4EA4\u4E92</p><h3 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLIFrameElement</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><h3 id="runtimeurl" tabindex="-1"><a class="header-anchor" href="#runtimeurl" aria-hidden="true">#</a> runtimeUrl</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><ul><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u9500\u6BC1\u5B9E\u4F8B</p></li></ul><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{HTMLDivElement} el</code> \u5C06\u9875\u9762\u6302\u8F7D\u5230\u8BE5Dom\u8282\u70B9\u4E0A</li></ul></li><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u6302\u8F7DDom\u8282\u70B9</p></li></ul>`,20);function R(E,M){const a=l("RouterLink");return i(),r("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[u,k,e(a,{to:"/api/stage/core.html"},{default:t(()=>[m]),_:1})])]),h]),v,g,b,n("ul",null,[n("li",null,[n("p",null,[_,f,e(a,{to:"/api/stage/core.html"},{default:t(()=>[w]),_:1})])]),x]),y])}var D=p(c,[["render",R],["__file","render.html.vue"]]);export{D as default};
