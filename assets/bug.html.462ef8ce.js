import{_ as n,o as s,c as a,e}from"./app.72515998.js";const i={},t=e(`<h2 id="vue-cli\u4F7F\u7528\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vue-cli\u4F7F\u7528\u95EE\u9898" aria-hidden="true">#</a> Vue CLI\u4F7F\u7528\u95EE\u9898</h2><h3 id="\u89E3\u51B3ubuntu\u8FD0\u884C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3ubuntu\u8FD0\u884C\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3Ubuntu\u8FD0\u884C\u95EE\u9898</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>node:internal/errors:464
    ErrorCaptureStackTrace<span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ^
Error: ENOSPC: System limit <span class="token keyword">for</span> number of <span class="token function">file</span> watchers reached, <span class="token function">watch</span> <span class="token string">&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u539F\u56E0\u5206\u6790 Linux\u4F7F\u7528inotify\u5305\u6765\u89C2\u5BDF\u6587\u4EF6\u7CFB\u7EDF\u4E8B\u4EF6,\u5355\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55.\u7531\u4E8EVue/React/Angular\u5728\u4FDD\u5B58\u65F6\u70ED\u91CD\u8F7D\u548C\u91CD\u65B0\u7F16\u8BD1\u6587\u4EF6,\u56E0\u6B64\u9700\u8981\u8DDF\u8E2A\u6240\u6709\u9879\u76EE\u6587\u4EF6</li></ul><div class="custom-container tip"><p class="custom-container-title">\u8BE5\u9519\u8BEF\u7684\u610F\u601D\u662F\u7CFB\u7EDF\u76D1\u89C6\u7684\u6587\u4EF6\u6570\u91CF\u5DF2\u8FBE\u5230\u9650\u5236\uFF01\uFF01</p></div><ul><li>\u89E3\u51B3\u95EE\u9898</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> gedit /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6\u5E95\u90E8\u6DFB\u52A0\u540E,\u4FDD\u5B58\u9000\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>fs.inotify.max_user_watches<span class="token operator">=</span><span class="token number">524288</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> sysctl -p
<span class="token comment"># fs.inotify.max_user_watches = 524288  \u51FA\u73B0\u8FD9\u4E2A\u7ED3\u679C\u5219\u6210\u529F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u51B3\u65E0\u6CD5\u4F7F\u7528jsx\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65E0\u6CD5\u4F7F\u7528jsx\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3\u65E0\u6CD5\u4F7F\u7528JSX\u95EE\u9898</h3><ul><li>\u9519\u8BEF\u63CF\u8FF0</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65E0\u6CD5\u4F7F\u7528 JSX\uFF0C\u9664\u975E\u63D0\u4F9B\u4E86 &quot;--jsx&quot; \u6807\u5FD7\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u89E3\u51B3\u529E\u6CD5\u5982\u4E0B \u5728<code>jsconfig.json</code>\u6587\u4EF6\u4E2D\u7684compilerOptions\u914D\u7F6E\u9879\u4E2D\u6DFB\u52A0</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="eslint\u62A5\u9519\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#eslint\u62A5\u9519\u89E3\u51B3" aria-hidden="true">#</a> ESlint\u62A5\u9519\u89E3\u51B3</h2><ol><li>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u81EA\u52A8\u4FEE\u6B63eslint\u9519\u8BEF</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run lint --fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u4F46\u662F,\u5BF9\u4E8E\u65B0\u624B\u5B9E\u5728\u662F\u4E0D\u592A\u53CB\u597D,\u6587\u4EF6\u547D\u540D\u4E0D\u89C4\u8303 \u5F15\u7528\u4E86\u6587\u4EF6\u672A\u4F7F\u7528 \u5C11\u6253\u4E86\u4E00\u4E2A\u7A7A\u683C,\u7528\u4E86\u53CC\u5F15\u53F7\u800C\u4E0D\u662F\u5355\u5F15\u53F7,\u591A\u5360\u7528\u4E86\u4E00\u4E2A\u7A7A\u767D\u884C\u2026\u2026, \u6240\u4EE5,\u53EF\u4EE5\u5148\u5173\u95EDeslint\u5373\u53EF,\u7B49\u5F04\u5B8C\u4E00\u90E8\u5206\u5728\u6253\u5F00,\u7136\u540E\u4F7F\u7528\u4E0A\u9762\u7684\u81EA\u52A8\u4FEE\u590D\u547D\u4EE4.\u5177\u4F53\u65B9\u5F0F\u662F\u4FEE\u6539<code>vue.config.js</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#less\u62A5\u9519" aria-hidden="true">#</a> less\u62A5\u9519</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528less\u9700\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u5305,\u5426\u5219\u4F1A\u62A5\u9519<code>Module not found: Error: Can&#39;t resolve &#39;less-loader&#39; in &#39;/home/yian/web-front/p4/day11/myshop&#39;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev less-loader <span class="token function">less</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue\u540C\u65F6\u7ED1\u5B9A\u5355\u51FB\u53CC\u51FB\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue\u540C\u65F6\u7ED1\u5B9A\u5355\u51FB\u53CC\u51FB\u4E8B\u4EF6" aria-hidden="true">#</a> vue\u540C\u65F6\u7ED1\u5B9A\u5355\u51FB\u53CC\u51FB\u4E8B\u4EF6</h2><p>\u5F53\u4E3A\u4E00\u4E2A\u6309\u94AE\u540C\u65F6\u7ED1\u5B9A\u5355\u51FB\u548C\u53CC\u51FB\u4E8B\u4EF6\u65F6\u5019\u53D1\u73B0\u5F53\u6211\u53CC\u51FB\u65F6\u53EA\u4F1A\u89E6\u53D1\u4E24\u6B21\u5355\u51FB\u4E8B\u4EF6,\u800C\u4E0D\u4F1A\u89E6\u53D1\u53CC\u51FB\u4E8B\u4EF6,\u89E3\u51B3\u529E\u6CD5\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">cli</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u5B9A\u65F6\u5668\uFF0C\u89E3\u51B3\u540C\u65F6\u7ED1\u5B9A\u5355\u51FB\u548C\u53CC\u51FB\u4E8B\u4EF6\u65F6\u53CC\u51FB\u53EA\u4F1A\u89E6\u53D1\u4E24\u6B21\u5355\u51FB\u7684\u95EE\u9898</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5355\u51FB\u4E8B\u4EF6\u903B\u8F91</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">debcli</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53CC\u51FB\u4E8B\u4EF6\u903B\u8F91</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex\u4F7F\u7528\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vuex\u4F7F\u7528\u95EE\u9898" aria-hidden="true">#</a> Vuex\u4F7F\u7528\u95EE\u9898</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Uncaught TypeError<span class="token operator">:</span> vue__WEBPACK_IMPORTED_MODULE_20__<span class="token punctuation">.</span>reactive is not a <span class="token keyword">function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u95EE\u9898\u662Fvuex\u7684\u7248\u672C\u95EE\u9898,\u9879\u76EE\u4E2D\u521B\u5EFA\u7528\u7684\u662Fvue2\u7684\u8BDD\uFF0C\u76F4\u63A5\u4F7F\u7528<code>npm i vuex -S</code>\u4F1A\u81EA\u52A8\u7ED9\u4F60\u5B89\u88C5\u9AD8\u7248\u672C\u7684vuex,\u4E0Evue2\u4E0D\u517C\u5BB9</p><ul><li>\u89E3\u51B3\u95EE\u9898</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5378\u8F7D\u4E4B\u524D\u5B89\u88C5\u7684vuex</span>
<span class="token function">npm</span> uninstall vuex

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684vuex(@3.6.2 \u5C31\u662F\u6307\u5B9A\u7684\u7248\u672C\u53F7\uFF0C\u4E5F\u53EF\u9009\u62E9\u5176\u4ED6\u7248\u672C\u53F7)</span>
<span class="token function">npm</span> i vuex@3.6.2 -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E0\u6CD5\u4F7F\u7528-jsx-\u9664\u975E\u63D0\u4F9B\u4E86-jsx-\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E0\u6CD5\u4F7F\u7528-jsx-\u9664\u975E\u63D0\u4F9B\u4E86-jsx-\u6807\u5FD7" aria-hidden="true">#</a> \u65E0\u6CD5\u4F7F\u7528 JSX,\u9664\u975E\u63D0\u4F9B\u4E86 \u201C--jsx\u201C \u6807\u5FD7</h2><p>\u5728\u6587\u4EF6<code>jsconfig.json</code>\uFF08\u4E0E<code>package.json</code>\u540C\u7EA7\uFF09\u4E2D\u52A0\u4E0A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),l=[t];function c(o,p){return s(),a("div",null,l)}var d=n(i,[["render",c],["__file","bug.html.vue"]]);export{d as default};