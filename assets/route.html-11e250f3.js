import{_ as n,p as s,q as a,$ as t}from"./framework-71306714.js";const p={},o=t(`<h2 id="路由文件" tabindex="-1"><a class="header-anchor" href="#路由文件" aria-hidden="true">#</a> 路由文件</h2><p>以”基础平台“应用为例，路由文件存放路径<br> web/default_menu.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;menu&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;资源管理&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;资源管理&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网络设备&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parentPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb/network_device&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb/network_device&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网络设备&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口清单&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parentPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb/interfaceused&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cmdb/interfaceused&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口清单&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;自动化&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/automated&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/automated&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;自动化&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;采集方案&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/automated/collect&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/automated/collect&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;采集方案&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置中心&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置中心&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FSM模板&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/fsm_template&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/fsm_template&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FSM模板&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TTP模板&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/ttp_template&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/ttp_template&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TTP模板&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置合规&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/compliance&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/compliance&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置合规&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置模板&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/config_jinja2_template&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/config_jinja2_template&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置模板&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置差异&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/gitdiff&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/config_manage/gitdiff&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;配置差异&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;作业中心&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/task_center&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/task_center&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;作业中心&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;调度管理&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/task_center/dispatch_manage&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/task_center/dispatch_manage&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;调度管理&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;任务列表&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/task_center/task_list&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/task_center/task_list&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;任务列表&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;拓扑管理&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/net_topology&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/net_topology&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;拓扑管理&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;拓扑展示&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/net_topology/show&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/net_topology/show&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;拓扑展示&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;图标库&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/net_topology/topology_icon&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;web_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/net_topology/topology_icon&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;图标库&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;affix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPrefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","route.html.vue"]]);export{r as default};
