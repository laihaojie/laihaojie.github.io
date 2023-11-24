import{_ as s,o as a,c as n,R as e}from"./chunks/framework.FL0bwkQZ.js";const b=JSON.parse('{"title":"Docker-Desktop","description":"","frontmatter":{},"headers":[],"relativePath":"src/develop/docker/desktop.md","filePath":"src/develop/docker/desktop.md","lastUpdated":1700831538000}'),i={name:"src/develop/docker/desktop.md"},l=e(`<h1 id="docker-desktop" tabindex="-1">Docker-Desktop <a class="header-anchor" href="#docker-desktop" aria-label="Permalink to &quot;Docker-Desktop&quot;">​</a></h1><h2 id="windows进入docker子系统" tabindex="-1">windows进入docker子系统 <a class="header-anchor" href="#windows进入docker子系统" aria-label="Permalink to &quot;windows进入docker子系统&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入docker子系统</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-desktop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 退出docker子系统</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="bug记录" tabindex="-1">Bug记录 <a class="header-anchor" href="#bug记录" aria-label="Permalink to &quot;Bug记录&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## windows docker 安装 ES vm.max_map_count [65530]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入docker子系统</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-desktop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vm.max_map_count=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">262144</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 退出</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5),p=[l];function t(r,d,h,k,c,o){return a(),n("div",null,p)}const m=s(i,[["render",t]]);export{b as __pageData,m as default};
