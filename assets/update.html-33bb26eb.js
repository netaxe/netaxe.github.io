import{_ as e,p as a,q as l,$ as i,s as n,R as s}from"./framework-71306714.js";const t={},r=i(`<h2 id="版本更新" tabindex="-1"><a class="header-anchor" href="#版本更新" aria-hidden="true">#</a> 版本更新:</h2><p>常规更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 项目根目录git pull

<span class="token number">2</span>. 修改项目配置文件

<span class="token builtin class-name">cd</span> /net-axe 项目目录

<span class="token function">cp</span> netaxe/netboost/conf_bak.py netaxe/netboost/conf.py

修改项目配置文件,将宿主机的网卡IP配置替换到配置文件中<span class="token punctuation">(</span>例如192.168.11.11,根据实际网卡IP配置<span class="token punctuation">)</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/10.254.2.188/192.168.11.11/g&quot;</span> netaxe/netboost/conf.py

修改微服务apisix内部IP地址,修改为本机网卡IP

<span class="token function">vi</span> docker/server/conf/apisix_conf/config.yaml 

两处IP地址均需要修改成宿主机IP


<span class="token number">3</span>. <span class="token builtin class-name">cd</span> docker/server 目录
   <span class="token function">docker-compose</span> build
   <span class="token function">docker-compose</span> down <span class="token parameter variable">-v</span>  <span class="token punctuation">(</span>会清除volumes挂载,需要到9948去重新配置路由<span class="token punctuation">)</span>
   <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2022/10/25日升级须知！！！！！</p>`,4),c=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"因微服务网关更新,数据模型变化较大"),n("p",null,"已部署过的升级需要尝试如下操作"),n("ul",null,[n("li",null,[n("ol",null,[n("li",null,"删除各个子应用下的迁移记录")])])]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` netaxe/apps/int_utilization/migrations/00*.py
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` netaxe/apps/users/migrations/00*.py
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` netaxe/apps/system/migrations/00*.py
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` netaxe/apps/asset/migrations/00*.py
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` netaxe/apps/config_center/migrations/00*.py
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` netaxe/apps/automation/migrations/00*.py

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("ul",null,[n("li",null,[n("ol",{start:"2"},[n("li",null,"docker exec -it netaxe-server /bin/bash 进入容器")])]),n("li",null,[n("ol",{start:"3"},[n("li",null,"执行数据库迁移和初始化")])])]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`python3 manage.py makemigrations 
python3 manage.py migrate 

python3 manage.py init_asset `),n("span",{class:"token comment"},"# 资产初始化"),s(`
python3 manage.py init_collect `),n("span",{class:"token comment"},"# 采集方案初始化"),s(`
python3 manage.py init_system_menu `),n("span",{class:"token comment"},"# 系统菜单初始化"),s(`

python3 manage.py createsuperuser `),n("span",{class:"token comment"},"# 新建管理员账户，要输入管理员账户和密码"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("ul",null,[n("li",null,[n("ol",{start:"4"},[n("li",null,"若上述均不生效 清空数据库")])])]),n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`删除数据库映射
重启数据库docker-compose
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` docker/databases/init/
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` docker/databases/mysql_data/
docker-composer down `),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"docker-compose"),s(" up "),n("span",{class:"token parameter variable"},"-d"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),o=[r,c];function p(d,u){return a(),l("div",null,o)}const v=e(t,[["render",p],["__file","update.html.vue"]]);export{v as default};
