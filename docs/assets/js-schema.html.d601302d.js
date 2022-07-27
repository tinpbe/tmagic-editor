import{_ as p,r as t,o as e,c as o,a as s,b as r,w as l,d as n,e as i}from"./app.31367440.js";const c={},u=s("h1",{id:"js-schema",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#js-schema","aria-hidden":"true"},"#"),n(" JS Schema")],-1),k=s("p",null,[n("tmagic-editor\u7684\u4E1A\u52A1\u7EC4\u4EF6\u9700\u8981\u6709\u8868\u5355\u914D\u7F6E\u80FD\u529B\uFF0C\u6211\u4EEC\u901A\u8FC7\u4E00\u4EFD\u914D\u7F6E\u6765\u63CF\u8FF0\u8868\u5355\uFF0C\u6211\u4EEC\u91C7\u7528\u7684\u63CF\u8FF0\u65B9\u6848\u662F JS schema\u3002\u5F53\u6211\u4EEC\u5728\u7F16\u8F91\u5668\u4E2D\u914D\u7F6E\u4E00\u4E2A\u9875\u9762\u65F6\uFF0C\u9875\u9762\u7684\u57FA\u672C\u4FE1\u606F\u548C\u9875\u9762\u5305\u542B\u7684\u7EC4\u4EF6\u4FE1\u606F\uFF0C\u4E5F\u662F\u91C7\u7528 JS schema \u63CF\u8FF0\u7684\u3002JS schema \u63CF\u8FF0\u65B9\u6848\uFF0C\u4E5F\u662F\u6211\u4EEC\u63D0\u4F9B"),s("a",{href:"../advanced/high-level-function"},"\u9AD8\u7EA7\u51FD\u6570"),n("\u529F\u80FD\u7684\u57FA\u7840\u3002")],-1),d=n("\u7EC4\u4EF6\u7684"),v=s("strong",null,"\u914D\u7F6E\u63CF\u8FF0",-1),m=n("\uFF0C\u53C2\u8003"),y=n("\u793A\u4F8B"),b=n("\uFF0C\u662F\u7531\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u7EC4\u4EF6\u65F6\uFF0C\u901A\u8FC7 "),q=s("a",{href:"../advanced/magic-form"},"@tmagic/form",-1),g=n(" \u652F\u6301\u7684\u8868\u5355\u9879\u6765\u63D0\u4F9B\u7684\u3002"),h=i(`<p>\u5728\u7F16\u8F91\u5668\u4E2D\u5BF9\u9875\u9762\u8FDB\u884C\u7F16\u8F91\uFF0C\u4FDD\u5B58\u5F97\u5230\u7684\u662F\u4E00\u4EFD\u5173\u4E8E\u9875\u9762\u57FA\u672C\u4FE1\u606F\u3001\u9875\u9762\u6240\u5305\u542B\u7EC4\u4EF6\u4EE5\u53CA\u7EC4\u4EF6\u914D\u7F6E\u4FE1\u606F\u7684\u914D\u7F6E\uFF0C\u6211\u4EEC\u79F0\u4E3A <strong>DSL</strong>\uFF0C\u8FD9\u4EFD\u914D\u7F6E\u662F\u6700\u7EC8\u9875\u9762\u6E32\u67D3\u9700\u8981\u7684\u63CF\u8FF0\u4FE1\u606F\u3002</p><p>JS schema \u672C\u8D28\u5373\u662F\u4E00\u4E2A js \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5F62\u5F0F\u53EF\u4EE5\u652F\u6301\u6211\u4EEC\u5728\u7EC4\u4EF6\u7684\u8868\u5355\u914D\u7F6E\u63CF\u8FF0\u4E2D\uFF0C\u76F4\u63A5\u8FDB\u884C\u51FD\u6570\u7F16\u5199\uFF0C\u529F\u80FD\u7075\u6D3B\uFF0C\u5BF9\u4E8E\u524D\u7AEF\u5F00\u53D1\u6765\u8BF4\u66F4\u7B26\u5408\u76F4\u89C9\uFF0C\u51E0\u4E4E\u6CA1\u6709\u7406\u89E3\u6210\u672C\u3002</p><h2 id="\u8868\u5355\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u914D\u7F6E" aria-hidden="true">#</a> \u8868\u5355\u914D\u7F6E</h2><p>\u7EC4\u4EF6\u4E2D\u7684\u8868\u5355\u914D\u7F6E\u63CF\u8FF0\uFF0C\u5728\u7ECF\u8FC7 @tmagic/form \u8868\u5355\u6E32\u67D3\u5668\u540E\uFF0C\u53EF\u4EE5\u751F\u6210\u8868\u5355\u680F\u7684\u914D\u7F6E\u9879\u3002\u5728\u8868\u5355\u680F\u4E2D\u5BF9\u8868\u5355\u8FDB\u884C\u914D\u7F6E\uFF0C\u914D\u7F6E\u6570\u636E\u5C06\u52A8\u6001\u5199\u5165 DSL \u4E2D\u3002</p><img src="https://image.video.qpic.cn/oa_88b7d-36_673631168_1636343947880034?imageView2/q/70"><h2 id="dsl" tabindex="-1"><a class="header-anchor" href="#dsl" aria-hidden="true">#</a> DSL</h2><p>\u7F16\u8F91\u5668\u4E2D\u751F\u6210\u7684 DSL \u5E8F\u5217\u5316\u5B58\u50A8\u540E\uFF0C\u5728\u53D1\u5E03\u65F6\uFF0C\u5C06\u5176\u4F5C\u4E3A js \u6587\u4EF6\u53D1\u5E03\u51FA\u53BB\uFF0C\u4F9B\u751F\u6210\u9875\u4F7F\u7528\u3002\u4E00\u4E2A\u751F\u6210\u9875\u6700\u7EC8\u4FDD\u5B58\u7684 DSL \u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;75f0extui9d7yksklx27hff8xg&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test_page&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">beginTime</span><span class="token operator">:</span> <span class="token string">&quot;2021-04-26T16:00:00.000Z&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">endTime</span><span class="token operator">:</span> <span class="token string">&quot;2021-05-28T16:00:00.000Z&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;375&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;1728&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(218, 192, 192, 1)&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;39381280&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;container&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u7EC4&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;98549062&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;87016850&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6309\u94AE&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">57</span><span class="token punctuation">,</span>
                <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">152</span><span class="token punctuation">,</span>
                <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">270</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundImage</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#fb6f00&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundRepeat</span><span class="token operator">:</span> <span class="token string">&quot;no-repeat&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundSize</span><span class="token operator">:</span> <span class="token string">&quot;100% 100%&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;magic:common:events:click&quot;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&quot;button_3877&quot;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;text_7909&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span>
                <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">73</span><span class="token punctuation">,</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6587\u672C&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;button_3877&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;57&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;270&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;37.5&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#fb6f00&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6309\u94AE&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">204</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function _(f,x){const a=t("RouterLink");return e(),o("div",null,[u,k,s("p",null,[d,v,m,r(a,{to:"/guide/advanced/magic-form.html#%E7%A4%BA%E4%BE%8B"},{default:l(()=>[y]),_:1}),b,q,g]),h])}var j=p(c,[["render",_],["__file","js-schema.html.vue"]]);export{j as default};
