import{_ as n,o as e,c as l,O as t,v as s,a}from"./chunks/framework.12bd0347.js";const C=JSON.parse('{"title":"Markdown语法","description":"","frontmatter":{},"headers":[],"relativePath":"src/notes/markdown.md","filePath":"src/notes/markdown.md","lastUpdated":1692935092000}'),p={name:"src/notes/markdown.md"},r=t(`<h1 id="markdown语法" tabindex="-1">Markdown语法 <a class="header-anchor" href="#markdown语法" aria-label="Permalink to &quot;Markdown语法&quot;">​</a></h1><p><a href="https://www.runoob.com/markdown/md-tutorial.html" target="_blank" rel="noreferrer">MarkDown教程</a></p><h2 id="标题-可以生成锚点目录" tabindex="-1">标题，可以生成锚点目录 <a class="header-anchor" href="#标题-可以生成锚点目录" aria-label="Permalink to &quot;标题，可以生成锚点目录&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 一级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">## 二级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">### 三级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">#### 四级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">##### 五级标题</span></span>
<span class="line"><span style="color:#A6ACCD;">###### 六级标题</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="段落与格式" tabindex="-1">段落与格式 <a class="header-anchor" href="#段落与格式" aria-label="Permalink to &quot;段落与格式&quot;">​</a></h2><h3 id="段落" tabindex="-1">段落 <a class="header-anchor" href="#段落" aria-label="Permalink to &quot;段落&quot;">​</a></h3><p>Markdown 段落没有特殊的格式，直接编写文字就好，<strong>段落的换行是使用两个以上空格加上回车。</strong></p><h3 id="字体" tabindex="-1">字体 <a class="header-anchor" href="#字体" aria-label="Permalink to &quot;字体&quot;">​</a></h3><table><thead><tr><th>格式</th><th>例子</th><th>代码</th></tr></thead><tbody><tr><td>斜体</td><td><em>斜体</em></td><td>*斜体文本*</td></tr><tr><td>粗体</td><td><strong>粗体</strong></td><td>**粗体文本**</td></tr><tr><td>粗斜体</td><td><em><strong>粗斜体</strong></em></td><td>***粗斜体文本***</td></tr><tr><td>删除线</td><td><s>删除线文本</s></td><td>~~删除线文本~~</td></tr><tr><td>下划线</td><td><u>下划线文本</u></td><td>&lt;u&gt;下划线文本&lt;/u&gt;</td></tr></tbody></table><h3 id="分隔线" tabindex="-1">分隔线 <a class="header-anchor" href="#分隔线" aria-label="Permalink to &quot;分隔线&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">***</span></span>
<span class="line"><span style="color:#A6ACCD;">- - -</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><hr><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><ul><li>第一项</li><li>第二项</li><li>第三项</li></ul><p>代码如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">* 第一项</span></span>
<span class="line"><span style="color:#A6ACCD;">* 第二项</span></span>
<span class="line"><span style="color:#A6ACCD;">* 第三项</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-label="Permalink to &quot;代码块&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(document)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ready</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">RUNOOB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`javascript</span></span>
<span class="line"><span style="color:#A6ACCD;">$(document).ready(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(&#39;RUNOOB&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><table><thead><tr><th>学校</th><th>学生姓名</th></tr></thead><tbody><tr><td>幼儿园</td><td>张三</td></tr><tr><td>小学</td><td>李四</td></tr></tbody></table><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|学校|学生姓名|</span></span>
<span class="line"><span style="color:#A6ACCD;">|----|----|</span></span>
<span class="line"><span style="color:#A6ACCD;">|幼儿园|张三|</span></span>
<span class="line"><span style="color:#A6ACCD;">|小学|李四|</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><p><a href="https://www.w3school.com.cn/i/eg_mouse.jpg" target="_blank" rel="noreferrer">文字超链接</a><img src="https://www.w3school.com.cn/i/eg_mouse.jpg" alt="图片"><a href="https://www.lingman.tech" target="_blank" rel="noreferrer">https://www.lingman.tech</a></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[文字超链接](https://www.w3school.com.cn/i/eg_mouse.jpg)</span></span>
<span class="line"><span style="color:#A6ACCD;">![鼠标](https://www.w3school.com.cn/i/eg_mouse.jpg)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;https://www.lingman.tech&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="区块" tabindex="-1">区块 <a class="header-anchor" href="#区块" aria-label="Permalink to &quot;区块&quot;">​</a></h2><blockquote><p>区块引用 菜鸟教程 学的不仅是技术更是梦想</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt; 区块引用</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; 菜鸟教程</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; 学的不仅是技术更是梦想</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,29),o=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"L"),s("mo",null,"("),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"y")]),s("mo",null,"^")]),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,")"),s("mo",null,"="),s("mo",null,"−"),s("mo",null,"["),s("mi",null,"y"),s("mi",null,"log"),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"y")]),s("mo",null,"^")]),s("mo",null,"+"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"y"),s("mo",null,")"),s("mi",null,"log"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"y")]),s("mo",null,"^")]),s("mo",null,")"),s("mo",null,"]")]),s("annotation",{encoding:"application/x-tex"},"L(\\hat{y},y)=-[y\\log\\hat{y}+(1-y)\\log(1-\\hat{y})]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"L"),s("span",{class:"mopen"},"("),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mrel"},"="),s("span",{class:"mord"},"−"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mclose"},")"),s("span",{class:"mclose"},"]")])])])],-1),i=[r,o];function c(m,d,u,h,b,y){return e(),l("div",null,i)}const A=n(p,[["render",c]]);export{C as __pageData,A as default};
