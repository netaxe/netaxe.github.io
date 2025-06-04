import{_ as l,a as n,b as s}from"./admin_subnet_ip-aaec06ce.js";import{_ as a,p as o,q as r,$ as i,s as e}from"./framework-71306714.js";const d={},t=i('<h1 id="地址管理组件" tabindex="-1"><a class="header-anchor" href="#地址管理组件" aria-hidden="true">#</a> 地址管理组件</h1><p><img src="'+l+'" alt=""></p><h2 id="基本能力" tabindex="-1"><a class="header-anchor" href="#基本能力" aria-hidden="true">#</a> 基本能力</h2><ul><li>地址分配</li><li>树结构展示子网</li><li>地址回收</li><li>子网段地址使用详情</li><li>EXCEL导出</li><li>IPAM操作日志记录</li><li>IPAM 定时任务配置</li></ul><p><img src="'+n+'" alt=""></p><h2 id="ipam-admin-后台" tabindex="-1"><a class="header-anchor" href="#ipam-admin-后台" aria-hidden="true">#</a> IPAM Admin 后台</h2><ol><li>后台树结构</li><li>后台矩阵展示使用状况</li></ol><p><img src="'+s+'" alt=""></p><h2 id="自动化任务" tabindex="-1"><a class="header-anchor" href="#自动化任务" aria-hidden="true">#</a> 自动化任务</h2><ol><li>自动地址回收</li><li>自动修改特定描述信息</li><li><strong>地址探活检测更新</strong></li></ol><blockquote><p>需结合CMDB应用,根据设备信息采集ARP记录,进行地址更新。</p></blockquote><h2 id="单应用部署" tabindex="-1"><a class="header-anchor" href="#单应用部署" aria-hidden="true">#</a> 单应用部署</h2>',12),c=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"TIP"),e("p",null,"需要启动数据库依赖")],-1),m=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Mysql数据库已经包含在一键部署脚本中


git clone https://gitee.com/NetAxeClub/IPAM.git

cp config/default.json config/config.json

修改config.json内的local_dev为true、mysql_host为&quot;single-mysql-server&quot;

指定file模式启动容器

docker compose --file single-docker-compose.yml build &amp;&amp; docker compose --file single-docker-compose.yml down -v &amp;&amp; docker compose --file single-docker-compose.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=[t,c,m];function p(u,v){return o(),r("div",null,h)}const b=a(d,[["render",p],["__file","ipam.html.vue"]]);export{b as default};
