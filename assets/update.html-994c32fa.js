import{_ as s,p as a,q as n,$ as e}from"./framework-71306714.js";const i={},l=e(`<h2 id="_2023-6-28-版本升级" tabindex="-1"><a class="header-anchor" href="#_2023-6-28-版本升级" aria-hidden="true">#</a> 2023.6.28 版本升级</h2><h3 id="更新内容" tabindex="-1"><a class="header-anchor" href="#更新内容" aria-hidden="true">#</a> 更新内容</h3><ul><li>rbac: 优化服务自动向 rbac 注册服务和注册导航菜单逻辑</li><li>base webssh：登录后端权限二次验证</li><li>全局: 所有 config.json 配置项删除了 web_port 和 web_ip，改为了 web_url 例如：&quot;http://tmp_server_ip:32200&quot;，为了解决 https 场景</li><li>rbac: 增加 ldap 配置项，目前验证 windown AD 域控对接</li></ul><h3 id="升级步骤" tabindex="-1"><a class="header-anchor" href="#升级步骤" aria-hidden="true">#</a> 升级步骤</h3><h4 id="web-主应用" tabindex="-1"><a class="header-anchor" href="#web-主应用" aria-hidden="true">#</a> web 主应用</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> NetAxe/install-compose/main-compose
<span class="token function">docker</span> compose down <span class="token parameter variable">-v</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose pull <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rbac-权限模块" tabindex="-1"><a class="header-anchor" href="#rbac-权限模块" aria-hidden="true">#</a> RBAC 权限模块</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> NetAxe/install-compose/rbac-compose
<span class="token function">docker</span> compose down <span class="token parameter variable">-v</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose pull <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改config.json
删除web_ip 和 web_port配置项
改为
<span class="token string">&quot;web_url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://tmp_server_ip:32204&quot;</span>,
其中tmp_server_ip 是你服务器的IP
在后面增加如下配置项：
  <span class="token string">&quot;auth_ldap&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;auth_ldap_server_uri&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ldap://1.1.1.1:389&quot;</span>,
  <span class="token string">&quot;auth_ldap_bind_dn&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CN=aaa,CN=Users,DC=dc,DC=local&quot;</span>,
  <span class="token string">&quot;auth_ldap_bind_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asdfasdf&quot;</span>,
  <span class="token string">&quot;auth_ldap_user_search&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ou=aa,dc=aa,dc=aa&quot;</span>, <span class="token string">&quot;(sAMAccountName=%(user)s)&quot;</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;auth_ldap_group_search&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ou=aa,dc=aa,dc=aa&quot;</span>, <span class="token string">&quot;(objectClass=groupOfNames)&quot;</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;auth_ldap_user_attr_map&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;first_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;givenName&quot;</span>,
    <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;userPassword&quot;</span>,
    <span class="token string">&quot;last_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sn&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mail&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;auth_ldap_user_flags_by_group&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;is_active&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CN=aa,CN=Users,DC=aa,DC=local&quot;</span>,
    <span class="token string">&quot;is_staff&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CN=aa,CN=Users,DC=aa,DC=local&quot;</span>,
    <span class="token string">&quot;is_superuser&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CN=aa,CN=Users,DC=aa,DC=local&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose down <span class="token parameter variable">-v</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose pull <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="基础平台" tabindex="-1"><a class="header-anchor" href="#基础平台" aria-hidden="true">#</a> 基础平台</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> NetAxe/install-compose/baseplatform-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改config.json
删除web_ip 和 web_port配置项
改为
<span class="token string">&quot;web_url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://tmp_server_ip:32200&quot;</span>,
其中tmp_server_ip 是你服务器的IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose down <span class="token parameter variable">-v</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose pull <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="消息网关" tabindex="-1"><a class="header-anchor" href="#消息网关" aria-hidden="true">#</a> 消息网关</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> NetAxe/install-compose/msggateway-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改config.json
删除web_ip 和 web_port配置项
改为
<span class="token string">&quot;web_url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://tmp_server_ip:32201&quot;</span>,
其中tmp_server_ip 是你服务器的IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose down <span class="token parameter variable">-v</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose pull <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="告警中心" tabindex="-1"><a class="header-anchor" href="#告警中心" aria-hidden="true">#</a> 告警中心</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> NetAxe/install-compose/alertgateway-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改config.json
删除web_ip 和 web_port配置项
改为
<span class="token string">&quot;web_url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://tmp_server_ip:32200&quot;</span>,
其中tmp_server_ip 是你服务器的IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose down <span class="token parameter variable">-v</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose pull <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="地址管理" tabindex="-1"><a class="header-anchor" href="#地址管理" aria-hidden="true">#</a> 地址管理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> NetAxe/install-compose/ipam-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改config.json
删除web_ip 和 web_port配置项
改为
<span class="token string">&quot;web_url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://tmp_server_ip:32202&quot;</span>,
其中tmp_server_ip 是你服务器的IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose down <span class="token parameter variable">-v</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose pull <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h3>`,27),t=[l];function o(p,c){return a(),n("div",null,t)}const d=s(i,[["render",o],["__file","update.html.vue"]]);export{d as default};