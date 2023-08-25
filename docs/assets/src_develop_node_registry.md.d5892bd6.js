import{_ as s,o as n,c as a,O as l}from"./chunks/framework.12bd0347.js";const D=JSON.parse('{"title":"npm源","description":"","frontmatter":{},"headers":[],"relativePath":"src/develop/node/registry.md","filePath":"src/develop/node/registry.md","lastUpdated":1692935092000}'),p={name:"src/develop/node/registry.md"},e=l(`<h1 id="npm源" tabindex="-1">npm源 <a class="header-anchor" href="#npm源" aria-label="Permalink to &quot;npm源&quot;">​</a></h1><ul><li>查看当前源</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>换源</li></ul><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-c3Ie8" id="tab-gMvX26z" checked="checked"><label for="tab-gMvX26z">淘宝源</label><input type="radio" name="group-c3Ie8" id="tab-4lD6lrS"><label for="tab-4lD6lrS">NPM源</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmjs.org/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="nrm管理npm源" tabindex="-1">nrm管理npm源 <a class="header-anchor" href="#nrm管理npm源" aria-label="Permalink to &quot;nrm管理npm源&quot;">​</a></h2><ul><li>安装</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">open@8.4.2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>使用</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看源列表</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加新源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">名</span><span style="color:#A6ACCD;">称</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">源地</span><span style="color:#A6ACCD;">址</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 测试源响应速度</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,10),o=[e];function r(t,c,i,C,y,d){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{D as __pageData,b as default};
