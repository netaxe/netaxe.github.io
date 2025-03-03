import{_ as a,p as s,q as n,$ as e}from"./framework-71306714.js";const t={},i=e(`<h2 id="自定义显示平台名称" tabindex="-1"><a class="header-anchor" href="#自定义显示平台名称" aria-hidden="true">#</a> 自定义显示平台名称</h2><p>web/src/setting/index.ts 更改 projectName 的值</p><div class="language-javascripts line-numbers-mode" data-ext="javascripts"><pre class="language-javascripts"><code>export const projectName = &#39;基础平台&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="加载路由的位置" tabindex="-1"><a class="header-anchor" href="#加载路由的位置" aria-hidden="true">#</a> 加载路由的位置</h2><p>前端有两个版本，对应下面两个路由加载的位置 web/src/utils/router.ts web/src/store/moudules/permission.ts</p><h2 id="loading-加载提示" tabindex="-1"><a class="header-anchor" href="#loading-加载提示" aria-hidden="true">#</a> loading 加载提示</h2><p>web/index.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>基础平台<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>基础平台<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地开发模式" tabindex="-1"><a class="header-anchor" href="#本地开发模式" aria-hidden="true">#</a> 本地开发模式</h2><p>web/vite.config.ts</p><h2 id="pinia-管理状态" tabindex="-1"><a class="header-anchor" href="#pinia-管理状态" aria-hidden="true">#</a> pinia 管理状态</h2>`,11),c=[i];function p(l,o){return s(),n("div",null,c)}const r=a(t,[["render",p],["__file","web.html.vue"]]);export{r as default};
