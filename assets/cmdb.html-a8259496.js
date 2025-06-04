import{_ as e,p as a,q as i,$ as n}from"./framework-71306714.js";const d={},s=n(`<h2 id="资源管理使用手册" tabindex="-1"><a class="header-anchor" href="#资源管理使用手册" aria-hidden="true">#</a> 资源管理使用手册</h2><h3 id="新增设备" tabindex="-1"><a class="header-anchor" href="#新增设备" aria-hidden="true">#</a> 新增设备</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打开资源管理&gt;&gt;网络设备页面
手动表单录入
excel表格录入

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增设备管理账户" tabindex="-1"><a class="header-anchor" href="#新增设备管理账户" aria-hidden="true">#</a> 新增设备管理账户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
打开资产管理&gt;&gt;资产维护页面
账户属性维护&gt;&gt;新增设备管理账户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设备关联账户" tabindex="-1"><a class="header-anchor" href="#设备关联账户" aria-hidden="true">#</a> 设备关联账户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打开资源管理&gt;&gt;网络设备页面
展开设备行首的箭头
账户&gt;&gt;关联账户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设备关联采集方案" tabindex="-1"><a class="header-anchor" href="#设备关联采集方案" aria-hidden="true">#</a> 设备关联采集方案</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打开资源管理&gt;&gt;网络设备页面
选中行首的选中框&gt;&gt;右上角关联采集方案(目前内置了一些常用的采集方案)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任务配置" tabindex="-1"><a class="header-anchor" href="#任务配置" aria-hidden="true">#</a> 任务配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打开作业中心&gt;&gt;新建定时任务
1. 设备信息采集任务
apps.automation.tasks.collect_device_main
队列选择default
调度：选择crontab或者Interval都可以，需要手动到调度管理配置

2. 设备配置备份任务
apps.config_center.tasks.config_backup
队列选择config
调度：选择crontab或者Interval都可以，需要手动到调度管理配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[s];function l(r,c){return a(),i("div",null,t)}const u=e(d,[["render",l],["__file","cmdb.html.vue"]]);export{u as default};
