import{_ as s,o as a,c as i,R as n}from"./chunks/framework.FL0bwkQZ.js";const F=JSON.parse('{"title":"Git Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"src/develop/git/hooks.md","filePath":"src/develop/git/hooks.md","lastUpdated":1700831538000}'),e={name:"src/develop/git/hooks.md"},t=n(`<h1 id="git-hooks" tabindex="-1">Git Hooks <a class="header-anchor" href="#git-hooks" aria-label="Permalink to &quot;Git Hooks&quot;">​</a></h1><h2 id="设置hooks目录" tabindex="-1">设置hooks目录 <a class="header-anchor" href="#设置hooks目录" aria-label="Permalink to &quot;设置hooks目录&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置当前项目的hooks目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.hooksPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">新的目</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">录</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.hooksPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .githooks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置全局的hooks目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.hooksPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.githooks</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,3),h=[t];function l(o,p,k,r,d,c){return a(),i("div",null,h)}const _=s(e,[["render",l]]);export{F as __pageData,_ as default};
