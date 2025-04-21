import{_ as i,p as e,q as n,$ as s}from"./framework-71306714.js";const d={},l=s(`<h2 id="_2025-03-03-版本升级说明" tabindex="-1"><a class="header-anchor" href="#_2025-03-03-版本升级说明" aria-hidden="true">#</a> 2025.03.03 版本升级说明</h2><ul><li>重构了前后端内容交互、UI设计等</li><li>优化了多平台切换</li><li>优化了各个分子系统的UI</li><li>接入了ABAC权限中心:支持基于属性的权限配置(待后续详细的配置说明)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2023-6-28-版本升级说明" tabindex="-1"><a class="header-anchor" href="#_2023-6-28-版本升级说明" aria-hidden="true">#</a> 2023.6.28 版本升级说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
 更新内容

- rbac: 优化服务自动向 rbac 注册服务和注册导航菜单逻辑
- base webssh：登录后端权限二次验证
- 全局: 所有 config.json 配置项删除了 web_port 和 web_ip，改为了 web_url 例如：&quot;http://tmp_server_ip:32200&quot;，为了解决 https 场景
- rbac: 增加 ldap 配置项，目前验证 windown AD 域控对接

 升级步骤

web 主应用


cd NetAxe/install-compose/main-compose
docker compose down -v &amp;&amp; docker compose pull &amp;&amp; docker compose up -d


 RBAC 权限模块


cd NetAxe/install-compose/rbac-compose
docker compose down -v &amp;&amp; docker compose pull &amp;&amp; docker compose up -d



修改config.json
删除web_ip 和 web_port配置项
改为
&quot;web_url&quot;: &quot;http://tmp_server_ip:32204&quot;,
其中tmp_server_ip 是你服务器的IP
在后面增加如下配置项：
  &quot;auth_ldap&quot;: false,
  &quot;auth_ldap_server_uri&quot;: &quot;ldap://1.1.1.1:389&quot;,
  &quot;auth_ldap_bind_dn&quot;: &quot;CN=aaa,CN=Users,DC=dc,DC=local&quot;,
  &quot;auth_ldap_bind_password&quot;: &quot;asdfasdf&quot;,
  &quot;auth_ldap_user_search&quot;: [&quot;ou=aa,dc=aa,dc=aa&quot;, &quot;(sAMAccountName=%(user)s)&quot;],
  &quot;auth_ldap_group_search&quot;: [&quot;ou=aa,dc=aa,dc=aa&quot;, &quot;(objectClass=groupOfNames)&quot;],
  &quot;auth_ldap_user_attr_map&quot;: {
    &quot;first_name&quot;: &quot;givenName&quot;,
    &quot;password&quot;: &quot;userPassword&quot;,
    &quot;last_name&quot;: &quot;sn&quot;,
    &quot;email&quot;: &quot;mail&quot;
  },
  &quot;auth_ldap_user_flags_by_group&quot;: {
    &quot;is_active&quot;: &quot;CN=aa,CN=Users,DC=aa,DC=local&quot;,
    &quot;is_staff&quot;: &quot;CN=aa,CN=Users,DC=aa,DC=local&quot;,
    &quot;is_superuser&quot;: &quot;CN=aa,CN=Users,DC=aa,DC=local&quot;
  }



docker compose down -v &amp;&amp; docker compose pull &amp;&amp; docker compose up -d


基础平台


cd NetAxe/install-compose/baseplatform-compose



修改config.json
删除web_ip 和 web_port配置项
改为
&quot;web_url&quot;: &quot;http://tmp_server_ip:32200&quot;,
其中tmp_server_ip 是你服务器的IP



docker compose down -v &amp;&amp; docker compose pull &amp;&amp; docker compose up -d


消息网关


cd NetAxe/install-compose/msggateway-compose



修改config.json
删除web_ip 和 web_port配置项
改为
&quot;web_url&quot;: &quot;http://tmp_server_ip:32201&quot;,
其中tmp_server_ip 是你服务器的IP



docker compose down -v &amp;&amp; docker compose pull &amp;&amp; docker compose up -d


告警中心


cd NetAxe/install-compose/alertgateway-compose



修改config.json
删除web_ip 和 web_port配置项
改为
&quot;web_url&quot;: &quot;http://tmp_server_ip:32200&quot;,
其中tmp_server_ip 是你服务器的IP



docker compose down -v &amp;&amp; docker compose pull &amp;&amp; docker compose up -d


地址管理


cd NetAxe/install-compose/ipam-compose


修改config.json
删除web_ip 和 web_port配置项
改为
&quot;web_url&quot;: &quot;http://tmp_server_ip:32202&quot;,
其中tmp_server_ip 是你服务器的IP



docker compose down -v &amp;&amp; docker compose pull &amp;&amp; docker compose up -d



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h3>`,6),a=[l];function v(u,r){return e(),n("div",null,a)}const o=i(d,[["render",v],["__file","update.html.vue"]]);export{o as default};
