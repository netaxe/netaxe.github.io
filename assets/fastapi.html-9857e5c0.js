import{_ as e,p as s,q as a,$ as n}from"./framework-71306714.js";const t={},i=n(`<h2 id="日志规范" tabindex="-1"><a class="header-anchor" href="#日志规范" aria-hidden="true">#</a> 日志规范</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式:[级别] [日期][文件名.函数名称():行号]  信息</span>
<span class="token string">&#39;format&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;[%(levelname)s][%(asctime)s][%(filename)s.%(funcName)s():%(lineno)d][%(message)s]&#39;</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function l(r,d){return s(),a("div",null,c)}const m=e(t,[["render",l],["__file","fastapi.html.vue"]]);export{m as default};