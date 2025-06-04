import{_ as e,p as a,q as n,$ as s}from"./framework-71306714.js";const i={},d=s(`<h2 id="_1-拉取镜像和启动容器失败" tabindex="-1"><a class="header-anchor" href="#_1-拉取镜像和启动容器失败" aria-hidden="true">#</a> 1.拉取镜像和启动容器失败</h2><blockquote><p>优先检查服务器配置、CPU、内存</p></blockquote><p>因 Netaxe 容器化部署,前端、后端、底层组件会需要拉取多个镜像,对服务器性能有一定要求 目前最低是 4C8G</p><h2 id="_2-端口冲突失败" tabindex="-1"><a class="header-anchor" href="#_2-端口冲突失败" aria-hidden="true">#</a> 2.端口冲突失败</h2><p>需要一个干净的系统进行部署，可以参考安装手册中，Netaxe 需要使用的端口号，保证端口号不能冲突。</p><h2 id="_3-启动以后登录一直转圈" tabindex="-1"><a class="header-anchor" href="#_3-启动以后登录一直转圈" aria-hidden="true">#</a> 3.启动以后登录一直转圈</h2><blockquote><p>优先到 nacos 目录下检查 nacos 服务是否正常启动</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> nacos-compose
<span class="token function">docker</span> compose <span class="token function">ps</span>
验证nacos状态
nacos登录地址 http://ip:8848/nacos
账户名密码: nacos/nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-登录成功以后应用下拉框点击跳转失败" tabindex="-1"><a class="header-anchor" href="#_4-登录成功以后应用下拉框点击跳转失败" aria-hidden="true">#</a> 4.登录成功以后应用下拉框点击跳转失败</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通常此问题是因为未正确配置 web_url
- tmp_server_ip修改成本机IP
- 确认应用名称
- 到对应的应用目录下验证 config.json 是否配置正确
- 检查 web_url 和 backend_ip 和 backend_port 是否配置正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-如何查看日志" tabindex="-1"><a class="header-anchor" href="#_5-如何查看日志" aria-hidden="true">#</a> 5.如何查看日志</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>目前各个组件模块的日志都在自己的目录下
或者docker logs -f 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[d];function l(r,t){return a(),n("div",null,c)}const u=e(i,[["render",l],["__file","install_qa.html.vue"]]);export{u as default};
