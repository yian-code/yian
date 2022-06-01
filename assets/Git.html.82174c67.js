import{_ as n,o as s,c as a,e}from"./app.63d6be65.js";const i={},l=e(`<h2 id="git\u4E0Esvn" tabindex="-1"><a class="header-anchor" href="#git\u4E0Esvn" aria-hidden="true">#</a> Git\u4E0Esvn</h2><ul><li>svn:\u96C6\u4E2D\u5F0F\u7BA1\u7406\u5DE5\u5177</li><li>git:\u5206\u5E03\u5F0F\u7BA1\u7406\u5DE5\u5177</li></ul><h2 id="git\u5DE5\u4F5C\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#git\u5DE5\u4F5C\u533A\u57DF" aria-hidden="true">#</a> Git\u5DE5\u4F5C\u533A\u57DF</h2><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>\u5DE5\u4F5C\u533A</td><td>\u5DE5\u4F5C\u76EE\u5F55(Working Directory),\u5C31\u662F\u4F60\u5E73\u65F6\u5B58\u653E\u9879\u76EE\u4EE3\u7801\u7684\u5730\u65B9</td></tr><tr><td>\u6682\u5B58\u533A</td><td>Index/Stage,\u7528\u4E8E\u4E34\u65F6\u5B58\u653E\u4F60\u7684\u6539\u52A8,\u4E8B\u5B9E\u4E0A\u5B83\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6,\u4FDD\u5B58\u5373\u5C06\u63D0\u4EA4\u5230\u6587\u4EF6\u5217\u8868\u4FE1\u606F</td></tr><tr><td>\u4ED3\u5E93\u533A(\u6216\u672C\u5730\u4ED3\u5E93)</td><td>Repository,\u5C31\u662F\u5B89\u5168\u5B58\u653E\u6570\u636E\u7684\u4F4D\u7F6E,\u8FD9\u91CC\u9762\u6709\u4F60\u63D0\u4EA4\u5230\u6240\u6709\u7248\u672C\u7684\u6570\u636E.\u5176\u4E2DHEAD\u6307\u5411\u6700\u65B0\u653E\u5165\u4ED3\u5E93\u7684\u7248\u672C</td></tr><tr><td>\u8FDC\u7A0B\u4ED3\u5E93</td><td>git\u4ED3\u5E93(Remote Directory),\u6258\u7BA1\u4EE3\u7801\u7684\u670D\u52A1\u5668,\u53EF\u4EE5\u7B80\u5355\u7684\u8BA4\u4E3A\u662F\u4F60\u9879\u76EE\u7EC4\u4E2D\u7684\u4E00\u53F0\u7535\u8111\u7528\u4E8E\u8FDC\u7A0B\u6570\u636E\u4EA4\u6362</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">git\u7BA1\u7406\u7684\u6587\u4EF6\u6709\u4E09\u79CD\u72B6\u6001</p><ol><li>\u5DF2\u4FEE\u6539(modified)</li><li>\u5DF2\u6682\u5B58(staged)</li><li>\u5DF2\u63D0\u4EA4(committed)</li></ol></div><h2 id="\u5F00\u59CB\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528" aria-hidden="true">#</a> \u5F00\u59CB\u4F7F\u7528</h2><ul><li>\u521B\u5EFAgit\u4ED3\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> init
<span class="token function">touch</span> README.md
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit -m <span class="token string">&quot;This is a test&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/xxx/test.git
<span class="token function">git</span> push -u origin <span class="token string">&quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5DF2\u6709\u4ED3\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> existing_git_repo
<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/xxx/test.git
<span class="token function">git</span> push -u origin <span class="token string">&quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E\u7528\u6237\u540D\u548C\u7528\u6237\u90AE\u7BB1</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git\u5168\u5C40\u8BBE\u7F6E:</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;xxx@163.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528vs code\u65F6\u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801,\u6B64\u65F6\u9700\u8981\u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801,\u7136\u540E\u7B2C\u4E00\u6B21\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u540E\u5C31\u4E0D\u9700\u8981\u5728\u8F93\u5165\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="\u67E5\u770B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770B\u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u914D\u7F6E</span>
<span class="token function">git</span> config -l

<span class="token comment">#\u67E5\u770B\u7CFB\u7EDFconfig</span>
<span class="token function">git</span> config --system --list\u3000
\u3000
<span class="token comment">#\u67E5\u770B\u5F53\u524D\u7528\u6237(global)\u914D\u7F6E</span>
<span class="token function">git</span> config --global  --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6587\u4EF6\u72B6\u6001   1.\u5DE5\u4F5C\u533A \uFF1A\u7EA2\u8272  2.\u6682\u5B58\u533A\uFF1A\u7EFF\u8272 3.\u672C\u5730\u4ED3\u5E93\uFF1A\u67E5\u4E0D\u5230</span>
<span class="token function">git</span> status       

<span class="token comment"># \u5C06\u6587\u4EF6\u63D0\u4EA4\u5230\u6682\u5B58\u533A  git add . \u63D0\u4EA4\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A,\u614E\u7528</span>
<span class="token function">git</span> <span class="token function">add</span> a.cpp b.h c.cpp

<span class="token comment"># \u5C06\u6587\u4EF6\u4ECE\u6682\u5B58\u533A\u79FB\u51FA</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached a.cpp
<span class="token function">git</span> reset b.h

<span class="token comment"># \u63D0\u4EA4\u63CF\u8FF0\u4FE1\u606F</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;submit message&quot;</span>

<span class="token comment"># \u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7</span>
<span class="token function">git</span> log      <span class="token comment"># -&gt;\u53EA\u80FD\u67E5\u770B\u4E00\u4E2A\u6307\u9488\u8BB0\u5F55    </span>
<span class="token function">git</span> reflog   <span class="token comment"># \u67E5\u770B\u6240\u6709\u7248\u672C\u7684\u65E5\u5FD7</span>
<span class="token function">git</span> log --oneline
<span class="token comment"># fc50797 image major</span>
<span class="token comment"># f89a1fb image major</span>
<span class="token comment"># 2da61c5 img submit for yian,breakthrought!</span>

<span class="token comment"># \u7248\u672C\u7684\u524D\u8FDB\u4E0E\u540E\u9000  git reset --hard [\u6307\u5B9A\u7248\u672C\u7D22\u5F15\u53F7]</span>
<span class="token function">git</span> reset --hard f89a1fb
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> \u5206\u652F\u7BA1\u7406</h3><blockquote><p>\u540C\u65F6\u63A8\u8FDB\u591A\u4E2A\u529F\u80FD\u5F00\u53D1,\u63D0\u9AD8\u5F00\u53D1\u6548\u7387</p></blockquote><h4 id="\u67E5\u770B\u3001\u521B\u5EFA\u3001\u5207\u6362\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u3001\u521B\u5EFA\u3001\u5207\u6362\u5206\u652F" aria-hidden="true">#</a> \u67E5\u770B\u3001\u521B\u5EFA\u3001\u5207\u6362\u5206\u652F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -v      <span class="token comment"># \u67E5\u770B\u5206\u652F</span>
<span class="token comment"># * master cf154aa \u9608\u503C\u4E8C\u503C\u53162</span>

<span class="token function">git</span> branch tag1    <span class="token comment"># \u521B\u5EFA\u5206\u652F-&gt;\u4F1A\u4EE5\u5F53\u524D\u5206\u652F\u6240\u5728\u7248\u672C\u7684\u5185\u5BB9\u6765\u521B\u5EFA\u5206\u652F</span>
<span class="token function">git</span> checkout tag1  <span class="token comment"># \u8FDB\u5165\u8BE5\u5206\u652F</span>
<span class="token function">git</span> checkout -b    <span class="token comment"># \u521B\u5EFA\u5E76\u8FDB\u5165\u8BE5\u5206\u652F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h4><div class="custom-container tip"><p class="custom-container-title">\u9700\u8981\u5148\u8FDB\u5165\u8981\u5408\u5E76\u5230\u7684\u76EE\u6807\u5206\u652F\u64CD\u4F5C,\u4E14\u4E00\u5B9A\u4F1A\u5408\u5E76\u5230\u8BE5\u5206\u652F\u7684\u6700\u65B0\u7684\u7248\u672C</p><p>\u5408\u5E76\u51B2\u7A81\u540E\u9700\u8981\u624B\u52A8\u5408\u5E76,\u518D\u91CD\u65B0\u63D0\u4EA4</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06tag1\u5408\u5E76\u5230\u4E3B\u5206\u652F </span>
<span class="token function">git</span> checkout master
<span class="token function">git</span> merge tag1 -m <span class="token string">&#39;enter a commit&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u5206\u652F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u672C\u5730tag1\u5206\u652F</span>
<span class="token function">git</span> branch -d tag1

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> push origin -d tag1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u8FDC\u7A0B\u4ED3\u5E93</h2><h3 id="\u67E5\u770B\u3001\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u3001\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u67E5\u770B\u3001\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u4F60\u5DF2\u7ECF\u914D\u7F6E\u7684\u8FDC\u7A0B\u4ED3\u5E93\u670D\u52A1\u5668</span>
<span class="token function">git</span> remote 
<span class="token comment"># origin</span>

<span class="token comment"># \u4E5F\u53EF\u4EE5\u6307\u5B9A\u9009\u9879 -v,\u4F1A\u663E\u793A\u9700\u8981\u8BFB\u5199\u8FDC\u7A0B\u4ED3\u5E93\u4F7F\u7528\u7684 Git \u4FDD\u5B58\u7684\u7B80\u5199\u4E0E\u5176\u5BF9\u5E94\u7684 URL</span>
<span class="token function">git</span> remote -v
<span class="token comment"># origin	git@gitee.com:xxx/web.git (fetch)</span>
<span class="token comment"># origin	git@gitee.com:xxx/web.git (push)</span>

<span class="token comment"># \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>shortname<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93</h3><ol><li>\u521B\u5EFAssh\u5BC6\u94A5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;xxxxx@xxxxx.com&quot;</span>

<span class="token comment"># \u67E5\u770B\u5BC6\u94A5</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
<span class="token comment"># ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....</span>

<span class="token comment"># \u6D4B\u8BD5\u8FDE\u63A5</span>
<span class="token function">ssh</span> -T git@gitee.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u7B2C\u4E00\u6B21\u63A8\u9001</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;submit commit&quot;</span>
<span class="token function">git</span> remote origin <span class="token function">add</span> git@XXXXXX.git
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>\u591A\u4EBA\u5F00\u53D1\u540C\u4E00\u4E2A\u8FDC\u7A0B\u5206\u652F\u65F6\u5019\u6BCF\u6B21push\u4EE3\u7801\u4E4B\u524D\u9700\u8981\u5148pull\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u4EE3\u7801\u518D\u8FDB\u884Cpush\u64CD\u4F5C</strong></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u5230\u672C\u5730</span>
<span class="token function">git</span> clone <span class="token punctuation">..</span>.

<span class="token comment"># \u62C9\u53D6\u8FDC\u7A0B</span>
<span class="token function">git</span> pull
<span class="token comment"># \u672C\u5730\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u5206\u652F\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u591A\u5206\u652F\u5F00\u53D1" aria-hidden="true">#</a> \u591A\u5206\u652F\u5F00\u53D1\u2B50</h3><div class="custom-container danger"><p class="custom-container-title">\u6211\u4EEC\u5E94\u8BE5\u5C06\u6211\u4EEC\u7684\u4EE3\u7801push\u5230\u53E6\u5916(\u901A\u5E38\u662F\u4F60\u7684boss\u7ED9\u5B9A)\u7684\u5206\u652F,\u800C\u4E0D\u662F\u4E3B\u5206\u652F</p></div><p><strong>\u8FD9\u91CC\u6211\u4EEC\u5047\u8BBEBOSS\u7ED9\u6211\u5728\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u4F9B\u6211\u4F7F\u7528\u7684<code>dev</code>\u5206\u652F</strong>,\u8FD9\u91CC\u6211\u5C06\u672C\u5730\u7684\u4E3B\u5206\u652F\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684dev\u5206\u652F:<code>git push origin \u672C\u5730\u8981\u4E0A\u4F20\u4EE3\u7801\u7684\u5206\u652F\u540D\u79F0:\u8FDC\u7A0B\u4F60\u8981\u4E0A\u4F20\u7684\u6307\u5B9A\u5206\u652F\u540D\u79F0</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u672C\u5730\u548C\u8FDC\u7A0B\u7684\u6240\u6709\u5206\u652F, \u672C\u5730\u5206\u652F\u4E3A\u7EFF\u8272,\u8FDC\u7A0B\u5206\u652F\u4E3A\u7EA2\u8272</span>
<span class="token function">git</span> branch --all  

<span class="token comment"># git branch -v</span>
<span class="token comment"># git checkout master</span>
<span class="token comment"># git add </span>
<span class="token comment"># git commit -m &quot;&quot;</span>
<span class="token function">git</span> push origin master:dev
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u53E6\u5916\u5982\u679C\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u6CA1\u6709dev\u8FD9\u4E2A\u5206\u652F,\u6211\u4EEC\u6267\u884Cgit push origin master:dev\u547D\u4EE4\u7684\u8BDD,\u5B83\u4E5F\u4F1A\u5E2E\u6211\u4EEC\u81EA\u52A8\u521B\u5EFA\u8FD9\u4E2A\u5206\u652F</p></div><h3 id="\u505A\u4E00\u4E2A\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u505A\u4E00\u4E2A\u6807\u7B7E" aria-hidden="true">#</a> \u505A\u4E00\u4E2A\u6807\u7B7E\u2B50</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6807\u7B7E</span>
<span class="token function">git</span> tag

<span class="token comment"># \u5220\u9664\u672C\u5730\u6807\u7B7E</span>
<span class="token function">git</span> tag -d v1.0.1

<span class="token function">git</span> tag -a v1.0.0 -m <span class="token string">&#39;this is first tag&#39;</span>
<span class="token comment"># \u5C06\u6807\u7B7E\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push origin v1.0.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git\u914D\u7F6E\u5FFD\u7565\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#git\u914D\u7F6E\u5FFD\u7565\u6587\u4EF6" aria-hidden="true">#</a> Git\u914D\u7F6E\u5FFD\u7565\u6587\u4EF6</h2><p>\u6709\u4E9B\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u5E76\u4E0D\u9700\u8981\u90FD\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93,\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u52A0\u5165\u5230\u5FFD\u7565\u6587\u4EF6\u5217\u8868</p><h3 id="\u6240\u6709\u5F00\u53D1\u8005\u5171\u7528" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u5F00\u53D1\u8005\u5171\u7528" aria-hidden="true">#</a> \u6240\u6709\u5F00\u53D1\u8005\u5171\u7528</h3><p>\u6240\u6709\u5F00\u53D1\u8005\u5171\u7528\u7684\u9700\u8981\u628A\u8BBE\u7F6E\u8BBE\u5B9A\u5728.gitignore\u8BE5\u6587\u4EF6\u4E2D:</p><ol><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u6DFB\u52A0.gitignore \u6587\u4EF6</li><li>\u6253\u5F00.gitignore \u6587\u4EF6,\u6DFB\u52A0\u4F60\u8981\u5FFD\u7565\u63A8\u9001\u7684\u6587\u4EF6,\u4E0B\u9762\u662F\u4E00\u4EFD\u5FFD\u7565\u6E05\u5355</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.DS_Store 
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F00\u53D1\u8005\u4E2A\u4EBA\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8005\u4E2A\u4EBA\u4F7F\u7528" aria-hidden="true">#</a> \u5F00\u53D1\u8005\u4E2A\u4EBA\u4F7F\u7528</h3><p>\u5728<code>.git/info/exclude</code>\u6587\u4EF6\u4E2D\u6DFB\u52A0\u5FFD\u7565\u9879</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5FFD\u7565*.o\u548C*.a\u6587\u4EF6,\u4E0D\u5FFD\u7565my.o\u6587\u4EF6</span>
*.<span class="token punctuation">[</span>oa<span class="token punctuation">]</span>
<span class="token operator">!</span>my.o

<span class="token comment"># \u5FFD\u7565dbg\u6587\u4EF6\u548Cdbg\u76EE\u5F55</span>
dbg

<span class="token comment"># \u53EA\u5FFD\u7565dbg\u6587\u4EF6\uFF0C\u4E0D\u5FFD\u7565dbg\u76EE\u5F55</span>
dbg
<span class="token operator">!</span>dbg/

<span class="token comment"># \u53EA\u5FFD\u7565\u5F53\u524D\u76EE\u5F55\u4E0B\u7684dbg\u6587\u4EF6\u548C\u76EE\u5F55\uFF0C\u5B50\u76EE\u5F55\u7684dbg\u4E0D\u5728\u5FFD\u7565\u8303\u56F4\u5185</span>
/dbg
<span class="token comment"># ...............</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E0\u6CD5\u66F4\u65B0\u4EE3\u7801\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u65E0\u6CD5\u66F4\u65B0\u4EE3\u7801\u95EE\u9898" aria-hidden="true">#</a> \u65E0\u6CD5\u66F4\u65B0\u4EE3\u7801\u95EE\u9898</h2><ul><li>\u63D0\u793A\u6CA1\u6709\u6743\u9650</li></ul><ol><li>\u53EF\u80FD\u4F60\u771F\u7684\u6CA1\u6709\u6743\u9650</li><li>\u4F60\u7684\u9879\u76EE\u6CA1\u6709\u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93</li><li>\u6CA1\u6709\u7F51\u7EDC\u6216\u8005\u7F51\u7EDC\u5361</li><li>gitee\u7F51\u7AD9\u7684\u95EE\u9898</li></ol><ul><li>\u65E0\u6CD5<code>git pull</code> \u672C\u5730\u4ED3\u5E93\u4FEE\u6539\u4E86\u4EE3\u7801,\u9700\u8981\u5148commit\u540E\u624D\u80FD\u6267\u884C<code>git pull</code>\u64CD\u4F5C</li></ul>`,56),t=[l];function c(d,o){return s(),a("div",null,t)}var u=n(i,[["render",c],["__file","Git.html.vue"]]);export{u as default};
