import{_ as s,n as d,p as l,q as r,s as e,R as a,t as c,$ as n}from"./framework-71306714.js";const t={},h=n(`<h1 id="_1-网络设备" tabindex="-1"><a class="header-anchor" href="#_1-网络设备" aria-hidden="true">#</a> 1. 网络设备</h1><ul><li>设备资产录入</li><li>设备关联管理账户</li><li>设备webssh验证</li><li>设备编辑和页面查询</li><li>设备采集方案新建和关联</li><li>任务列表</li></ul><h2 id="_1-0-资产录入" tabindex="-1"><a class="header-anchor" href="#_1-0-资产录入" aria-hidden="true">#</a> 1.0 资产录入</h2><h3 id="_1-0-1-单条设备录入" tabindex="-1"><a class="header-anchor" href="#_1-0-1-单条设备录入" aria-hidden="true">#</a> 1.0.1 单条设备录入</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      资产录入按钮

      资产信息填写

      需要勾选数据采集为是--提供给后续信息采集任务调用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/单条设备录入.1d4q40px0hpc.webp" alt="单条设备前端录入"></p><h3 id="_1-0-2-excel表格导入" tabindex="-1"><a class="header-anchor" href="#_1-0-2-excel表格导入" aria-hidden="true">#</a> 1.0.2 EXCEL表格导入</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

      下载导入模板,依据模板信息进行设备信息填写,注意,U位不要填写相同

      导入会自动返回导入结果成功与否,请注意导入后结果提示

      导入成功会自动更新CMDB资源列表

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下资产录入表格 <img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/表格导入.5dhgi9jd9hs0.webp" alt="EXCEL表格导入"></p><h2 id="_1-1-关联管理账户" tabindex="-1"><a class="header-anchor" href="#_1-1-关联管理账户" aria-hidden="true">#</a> 1.1 关联管理账户</h2><h3 id="_1-1-1-新建设备管理账户" tabindex="-1"><a class="header-anchor" href="#_1-1-1-新建设备管理账户" aria-hidden="true">#</a> 1.1.1 新建设备管理账户</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
先到后台server_ip:9999/admin/   <span class="token punctuation">(</span>后续维护迁移到web前端<span class="token punctuation">)</span>

01.SSH账户    ssh账户用作页面webssh

02.Netconf账户 Netconf账户用作信息采集

到网络设备页面,展开设备行-选择关联账户按钮-勾选设备账户做设备账户关联

账户信息查询二级密码验证    netaxe_second

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/新增管理账户.5hk2kl3svf80.webp" alt="新增管理账户"></p><h3 id="_1-1-2-设备关联账户" tabindex="-1"><a class="header-anchor" href="#_1-1-2-设备关联账户" aria-hidden="true">#</a> 1.1.2 设备关联账户</h3><p><img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/设备关联账户.61uh6qnm1kc0.webp" alt="设备关联账户"></p><h2 id="_1-2-webssh验证" tabindex="-1"><a class="header-anchor" href="#_1-2-webssh验证" aria-hidden="true">#</a> 1.2 WEBSSH验证</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
点击设备行 WEBSSH按钮

会自动跳转到WEBSSH页面, 如下验证是否登录成功

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录设备成功如下:</p><p><img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/netaxe-webssh.4kz2iemmclu0.webp" alt="Webssh"></p><h2 id="_1-3-设备编辑和页面查询验证" tabindex="-1"><a class="header-anchor" href="#_1-3-设备编辑和页面查询验证" aria-hidden="true">#</a> 1.3 设备编辑和页面查询验证</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>设备录入后,编辑和查询验证
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-4-设备信息采集方案" tabindex="-1"><a class="header-anchor" href="#_1-4-设备信息采集方案" aria-hidden="true">#</a> 1.4 设备信息采集方案</h2><h3 id="_1-4-1-新建采集方案" tabindex="-1"><a class="header-anchor" href="#_1-4-1-新建采集方案" aria-hidden="true">#</a> 1.4.1 新建采集方案</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>自动化目录/采集方案
附录常见厂商采集方案集合

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),u={href:"https://netaxe.github.io/pages/44ef73/",target:"_blank",rel:"noopener noreferrer"},v=n(`<h3 id="_1-4-2-关联采集方案" tabindex="-1"><a class="header-anchor" href="#_1-4-2-关联采集方案" aria-hidden="true">#</a> 1.4.2 关联采集方案</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>选中需要关联的行首选择框,点击右上角关联采集

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/设备关联采集.6n1ytmwam100.webp" alt="设备关联采集方案"></p><p>其他编辑皆可验证,至此设备已经关联账户且关联采集方案,即可下发定时任务进行信息采集</p><h2 id="_1-5-任务列表验证" tabindex="-1"><a class="header-anchor" href="#_1-5-任务列表验证" aria-hidden="true">#</a> 1.5. 任务列表验证</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>需要勾选任务函数collect_device_main
队列选择default
Crontab调度选择<span class="token punctuation">(</span>需要先在调度管理进行新建,格式等同于linux  <span class="token function">crontab</span> job<span class="token punctuation">)</span>


如果想要立马看到任务运行结果,点击任务行尾运行按钮即可

验证数据存储结果

server_ip:27018 Automation目录下<span class="token punctuation">(</span>账号密码在databases目录下docker-compose.yml中<span class="token punctuation">)</span>

验证任务状态flower

server_ip:5555 <span class="token punctuation">(</span>admin/netaxeadmin<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/新建定时任务.7mfoj6k7nkw.webp" alt="新建定时任务"></p><h2 id="_1-6-采集数据验证mongo-mysql" tabindex="-1"><a class="header-anchor" href="#_1-6-采集数据验证mongo-mysql" aria-hidden="true">#</a> 1.6 采集数据验证mongo+mysql</h2><p><img src="https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/mongo.2m0tc9t24ie0.webp" alt="mongo"></p>`,9);function m(o,b){const i=d("ExternalLinkIcon");return l(),r("div",null,[h,e("p",null,[a("附录链接 "),e("a",u,[a("常见厂商标准采集方案集合"),c(i)])]),v])}const g=s(t,[["render",m],["__file","index.html.vue"]]);export{g as default};
