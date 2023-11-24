import{_ as n,o as e,c as l,R as t,k as s,a}from"./chunks/framework.FL0bwkQZ.js";const y=JSON.parse('{"title":"Markdown语法","description":"","frontmatter":{},"headers":[],"relativePath":"src/notes/markdown.md","filePath":"src/notes/markdown.md","lastUpdated":1700831538000}'),i={name:"src/notes/markdown.md"},p=t(`<h1 id="markdown语法" tabindex="-1">Markdown语法 <a class="header-anchor" href="#markdown语法" aria-label="Permalink to &quot;Markdown语法&quot;">​</a></h1><p><a href="https://www.runoob.com/markdown/md-tutorial.html" target="_blank" rel="noreferrer">MarkDown教程</a></p><h2 id="标题-可以生成锚点目录" tabindex="-1">标题，可以生成锚点目录 <a class="header-anchor" href="#标题-可以生成锚点目录" aria-label="Permalink to &quot;标题，可以生成锚点目录&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 一级标题</span></span>
<span class="line"><span>## 二级标题</span></span>
<span class="line"><span>### 三级标题</span></span>
<span class="line"><span>#### 四级标题</span></span>
<span class="line"><span>##### 五级标题</span></span>
<span class="line"><span>###### 六级标题</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="段落与格式" tabindex="-1">段落与格式 <a class="header-anchor" href="#段落与格式" aria-label="Permalink to &quot;段落与格式&quot;">​</a></h2><h3 id="段落" tabindex="-1">段落 <a class="header-anchor" href="#段落" aria-label="Permalink to &quot;段落&quot;">​</a></h3><p>Markdown 段落没有特殊的格式，直接编写文字就好，<strong>段落的换行是使用两个以上空格加上回车。</strong></p><h3 id="字体" tabindex="-1">字体 <a class="header-anchor" href="#字体" aria-label="Permalink to &quot;字体&quot;">​</a></h3><table><thead><tr><th>格式</th><th>例子</th><th>代码</th></tr></thead><tbody><tr><td>斜体</td><td><em>斜体</em></td><td>*斜体文本*</td></tr><tr><td>粗体</td><td><strong>粗体</strong></td><td>**粗体文本**</td></tr><tr><td>粗斜体</td><td><em><strong>粗斜体</strong></em></td><td>***粗斜体文本***</td></tr><tr><td>删除线</td><td><s>删除线文本</s></td><td>~~删除线文本~~</td></tr><tr><td>下划线</td><td><u>下划线文本</u></td><td>&lt;u&gt;下划线文本&lt;/u&gt;</td></tr></tbody></table><h3 id="分隔线" tabindex="-1">分隔线 <a class="header-anchor" href="#分隔线" aria-label="Permalink to &quot;分隔线&quot;">​</a></h3><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>***</span></span>
<span class="line"><span>- - -</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><hr><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><ul><li>第一项</li><li>第二项</li><li>第三项</li></ul><p>代码如下</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>* 第一项</span></span>
<span class="line"><span>* 第二项</span></span>
<span class="line"><span>* 第三项</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-label="Permalink to &quot;代码块&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ready</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;RUNOOB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>$(document).ready(function () {</span></span>
<span class="line"><span>    alert(&#39;RUNOOB&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><table><thead><tr><th>学校</th><th>学生姓名</th></tr></thead><tbody><tr><td>幼儿园</td><td>张三</td></tr><tr><td>小学</td><td>李四</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>|学校|学生姓名|</span></span>
<span class="line"><span>|----|----|</span></span>
<span class="line"><span>|幼儿园|张三|</span></span>
<span class="line"><span>|小学|李四|</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><p><a href="https://www.w3school.com.cn/i/eg_mouse.jpg" target="_blank" rel="noreferrer">文字超链接</a><img src="https://www.w3school.com.cn/i/eg_mouse.jpg" alt="图片"><a href="https://www.lingman.tech" target="_blank" rel="noreferrer">https://www.lingman.tech</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[文字超链接](https://www.w3school.com.cn/i/eg_mouse.jpg)</span></span>
<span class="line"><span>![鼠标](https://www.w3school.com.cn/i/eg_mouse.jpg)</span></span>
<span class="line"><span>&lt;https://www.lingman.tech&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="区块" tabindex="-1">区块 <a class="header-anchor" href="#区块" aria-label="Permalink to &quot;区块&quot;">​</a></h2><blockquote><p>区块引用 菜鸟教程 学的不仅是技术更是梦想</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; 区块引用</span></span>
<span class="line"><span>&gt; 菜鸟教程</span></span>
<span class="line"><span>&gt; 学的不仅是技术更是梦想</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,29),r=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"L"),s("mo",null,"("),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"y")]),s("mo",null,"^")]),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,")"),s("mo",null,"="),s("mo",null,"−"),s("mo",null,"["),s("mi",null,"y"),s("mi",null,"log"),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"y")]),s("mo",null,"^")]),s("mo",null,"+"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"y"),s("mo",null,")"),s("mi",null,"log"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"y")]),s("mo",null,"^")]),s("mo",null,")"),s("mo",null,"]")]),s("annotation",{encoding:"application/x-tex"},"L(\\hat{y},y)=-[y\\log\\hat{y}+(1-y)\\log(1-\\hat{y})]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"L"),s("span",{class:"mopen"},"("),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mrel"},"="),s("span",{class:"mord"},"−"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mclose"},")"),s("span",{class:"mclose"},"]")])])])],-1),c=[p,r];function o(d,m,h,u,b,g){return e(),l("div",null,c)}const v=n(i,[["render",o]]);export{y as __pageData,v as default};
