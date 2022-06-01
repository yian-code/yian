import{_ as e,r as a,o as i,c,a as n,b as l,d,e as t}from"./app.63d6be65.js";const p={},o={class:"custom-container tip"},r=n("p",{class:"custom-container-title"},"NPM\u7684\u5168\u79F0\u662FNode Package Manager,\u662F\u968F\u540CNodeJS\u4E00\u8D77\u5B89\u88C5\u7684\u5305\u7BA1\u7406\u548C\u5206\u53D1\u5DE5\u5177,\u5B83\u5F88\u65B9\u4FBF\u8BA9JavaScript\u5F00\u53D1\u8005\u4E0B\u8F7D\u3001\u5B89\u88C5\u3001\u4E0A\u4F20\u4EE5\u53CA\u7BA1\u7406\u5DF2\u7ECF\u5B89\u88C5\u7684\u5305.",-1),m={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},v=d("npm\u5B98\u7F51"),u=t(`<h2 id="npm\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#npm\u57FA\u7840" aria-hidden="true">#</a> npm\u57FA\u7840</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> -v 

<span class="token comment"># \u67E5\u770B\u5B89\u88C5\u7684\u6A21\u5757</span>
<span class="token function">npm</span> list 
<span class="token comment"># npm list jquery</span>

<span class="token comment"># npm \u521D\u59CB\u5316\u5F53\u524D\u76EE\u5F55</span>
<span class="token function">npm</span> init  
<span class="token comment"># \u9ED8\u8BA4\u521D\u59CB\u5316</span>
<span class="token function">npm</span> init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u547D\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>-g</code></td><td>global \u7684\u7F29\u5199,\u8868\u793A\u5B89\u88C5\u5230\u5168\u5C40\u76EE\u5F55\u91CC</td></tr><tr><td><code>-S</code></td><td>save \u7684\u7F29\u5199,\u8868\u793A\u5B89\u88C5\u7684\u5305\u5C06\u5199\u5165package.json\u91CC\u9762\u7684dependencies</td></tr><tr><td><code>-D</code></td><td>dev \u7684\u7F29\u5199,\u8868\u793A\u5C06\u5B89\u88C5\u7684\u5305\u5C06\u5199\u5165packege.json\u91CC\u9762\u7684devDependencies \u2003\u2003\u2003\u2003\u2003\u2003\u2003</td></tr><tr><td><code>i</code></td><td>install\u7684\u7F29\u5199,\u8868\u793A\u5B89\u88C5</td></tr></tbody></table><h2 id="\u5B89\u88C5\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6A21\u5757" aria-hidden="true">#</a> \u5B89\u88C5\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u6240\u6709\u4F9D\u8D56,(\u4F1A\u5C06dependencies\u4E2D\u7684\u4F9D\u8D56\u5168\u90E8\u4E0B\u8F7D)</span>
<span class="token function">npm</span> <span class="token function">install</span>   
<span class="token function">npm</span> i 

<span class="token comment"># \u672C\u5730\u5B89\u88C5:\u5B89\u88C5\u6A21\u5757\u5230\u9ED8\u8BA4dependencies  </span>
<span class="token function">npm</span> i express
<span class="token function">npm</span> <span class="token function">install</span> express   

<span class="token comment"># \u5B89\u88C5\u5305\u4FE1\u606F\u5C06\u52A0\u5165\u5230dependencies\u751F\u4EA7\u4F9D\u8D56</span>
<span class="token function">npm</span> <span class="token function">install</span> express --save   
<span class="token function">npm</span> i express -S 

<span class="token comment"># \u5B89\u88C5\u5305\u4FE1\u606F\u5C06\u52A0\u5165\u5230devDependencies\u5F00\u53D1\u4F9D\u8D56</span>
<span class="token function">npm</span> <span class="token function">install</span> express --save-dev 
<span class="token function">npm</span> i express -D 

<span class="token comment"># \u5B89\u88C5jquery\u6307\u5B9A\u76841.8.3\u7248\u672C</span>
<span class="token function">npm</span> <span class="token function">install</span> jquery@1.8.3  
<span class="token function">npm</span> i jquery@1.8.3  

<span class="token comment"># \u4F1A\u5B89\u88C5\u5230\u914D\u7F6E\u7684\u5168\u5C40\u76EE\u5F55\u4E0B,\u4E00\u822C\u4E0D\u4F7F\u7528</span>
<span class="token function">npm</span> i express -g 
<span class="token function">npm</span> <span class="token function">install</span> express -global 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5378\u8F7D\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D\u6A21\u5757" aria-hidden="true">#</a> \u5378\u8F7D\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5378\u8F7D\u6A21\u5757,\u4F46\u4E0D\u5378\u8F7D\u6A21\u5757\u7559\u5728package.json\u4E2D\u7684\u5BF9\u5E94\u4FE1\u606F</span>
<span class="token function">npm</span> uninstall express  
<span class="token comment"># \u5378\u8F7D\u5168\u5C40\u6A21\u5757</span>
<span class="token function">npm</span> uninstall express -g  
<span class="token comment"># \u5378\u8F7D\u6A21\u5757,\u540C\u65F6\u5378\u8F7D\u7559\u5728package.json\u4E2Ddependencies\u4E0B\u7684\u4FE1\u606F</span>
<span class="token function">npm</span> uninstall express --save  
<span class="token comment"># \u5378\u8F7D\u6A21\u5757,\u540C\u65F6\u5378\u8F7D\u7559\u5728package.json\u4E2DdevDependencies\u4E0B\u7684\u4FE1\u606F</span>
<span class="token function">npm</span> uninstall express --save-dev  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6A21\u5757" aria-hidden="true">#</a> \u67E5\u770B\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5B89\u88C5\u7684\u6A21\u5757\u53CA\u4F9D\u8D56</span>
<span class="token function">npm</span> <span class="token function">ls</span>
<span class="token comment"># \u67E5\u770B\u5168\u5C40\u5B89\u88C5\u7684\u6A21\u5757\u53CA\u4F9D\u8D56</span>
<span class="token function">npm</span> <span class="token function">ls</span> -g

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u5305\u5B89\u88C5\u8DEF\u5F84</span>
<span class="token function">npm</span> root
<span class="token comment"># \u67E5\u770B\u5168\u5C40\u7684\u5305\u5B89\u88C5\u8DEF\u5F84</span>
<span class="token function">npm</span> root -g

<span class="token comment"># \u67E5\u770B\u5305\u4F9D\u8D56\u5173\u7CFB</span>
<span class="token function">npm</span> view moduleName dependencies

<span class="token comment"># \u67E5\u770Bnode\u6A21\u5757\u7684package.json\u6587\u4EF6</span>
<span class="token function">npm</span> view moduleName

<span class="token comment"># \u67E5\u770B\u5305\u4F9D\u8D56\u7684node\u7248\u672C</span>
<span class="token function">npm</span> view moduleName engines

<span class="token comment"># \u53D1\u5E03\u4E00\u4E2Anpm\u5305\u65F6\u9700\u8981\u67E5\u770B\u67D0\u4E2A\u540D\u5B57\u662F\u5426\u5DF2\u7ECF\u5B58\u5728</span>
<span class="token function">npm</span> search packageName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6A21\u5757" aria-hidden="true">#</a> \u66F4\u65B0\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u5305\u662F\u5426\u5DF2\u7ECF\u8FC7\u65F6,\u4F1A\u5217\u51FA\u5DF2\u7ECF\u8FC7\u65F6\u7684\u5305,\u53EF\u4EE5\u53CA\u65F6\u7684\u8FDB\u884C\u5305\u66F4\u65B0</span>
<span class="token function">npm</span> outdated

 <span class="token comment"># \u66F4\u65B0\u6700\u65B0\u7248\u672C\u7684jquery</span>
<span class="token function">npm</span> update jquery 

<span class="token comment"># \u66F4\u65B0\u5230\u6307\u5B9A\u7248\u672C\u53F7\u7684jquery</span>
<span class="token function">npm</span> update jquery@2.1.0  

<span class="token comment"># \u53EF\u4EE5\u76F4\u63A5\u66F4\u65B0\u5230\u6700\u65B0\u7684\u7248\u672C</span>
<span class="token function">npm</span> <span class="token function">install</span> jquery@latest  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-check" tabindex="-1"><a class="header-anchor" href="#npm-check" aria-hidden="true">#</a> npm-check</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i <span class="token operator">-</span>g npm<span class="token operator">-</span>check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528 npm-check \u66F4\u65B0\u9879\u76EE\u4F9D\u8D56</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm<span class="token operator">-</span>check <span class="token operator">-</span>u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7A7A\u683C\u5207\u6362\u5305\u662F\u5426\u66F4\u65B0,<kbd>Control</kbd> + <kbd>C\u200B </kbd> \xA0\u53D6\u6D88\u66F4\u65B0,\u56DE\u8F66\u5C31\u662F\u6267\u884C\u66F4\u65B0</p>`,16);function b(k,h){const s=a("ExternalLinkIcon");return i(),c("div",null,[n("div",o,[r,n("p",null,[n("a",m,[v,l(s)])])]),u])}var g=e(p,[["render",b],["__file","npm.html.vue"]]);export{g as default};
