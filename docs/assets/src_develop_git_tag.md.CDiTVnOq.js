import{_ as a,o as s,c as i,R as e}from"./chunks/framework.FL0bwkQZ.js";const b=JSON.parse('{"title":"tag操作","description":"","frontmatter":{},"headers":[],"relativePath":"src/develop/git/tag.md","filePath":"src/develop/git/tag.md","lastUpdated":1700831538000}'),t={name:"src/develop/git/tag.md"},n=e('<h1 id="tag操作" tabindex="-1">tag操作 <a class="header-anchor" href="#tag操作" aria-label="Permalink to &quot;tag操作&quot;">​</a></h1><h2 id="查询commit的hash值" tabindex="-1">查询commit的hash值 <a class="header-anchor" href="#查询commit的hash值" aria-label="Permalink to &quot;查询commit的hash值&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=oneline</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --abbrev-commit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建tag" tabindex="-1">创建tag <a class="header-anchor" href="#创建tag" aria-label="Permalink to &quot;创建tag&quot;">​</a></h2><p>xxxx代表的是查询commit的hash值</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1.0.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看tag" tabindex="-1">查看tag <a class="header-anchor" href="#查看tag" aria-label="Permalink to &quot;查看tag&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="提交tag远程仓库" tabindex="-1">提交tag远程仓库 <a class="header-anchor" href="#提交tag远程仓库" aria-label="Permalink to &quot;提交tag远程仓库&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tags</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="删除本地tag" tabindex="-1">删除本地tag <a class="header-anchor" href="#删除本地tag" aria-label="Permalink to &quot;删除本地tag&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="删除远程tag" tabindex="-1">删除远程tag <a class="header-anchor" href="#删除远程tag" aria-label="Permalink to &quot;删除远程tag&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :refs/tags/v1.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',14),h=[n];function l(p,r,d,o,c,g){return s(),i("div",null,h)}const u=a(t,[["render",l]]);export{b as __pageData,u as default};
