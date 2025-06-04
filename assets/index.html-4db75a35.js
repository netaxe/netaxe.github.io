import{_ as i,p as n,q as e,$ as l}from"./framework-71306714.js";const s={},d=l(`<h2 id="_1-华三-netconf-标准采集-netconf-方法-仅netconf采集" tabindex="-1"><a class="header-anchor" href="#_1-华三-netconf-标准采集-netconf-方法-仅netconf采集" aria-hidden="true">#</a> 1. 华三 NETCONF 标准采集 (netconf 方法) 仅netconf采集</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>colleciton_arp_list

colleciton_interface_list

colleciton_lagg_list

collection_device_PhysicalEntities

collection_device_base

collection_ipv4address_list

collection_ipv6address_list

collection_irf_info

collection_lldp_info

collection_mac_over_evpn

collection_mac_unicasttable

collection_vrrp_info

patch_version

netconfig_get_config

netconf_get_schema
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-华三二层接入采集-netconf方法-仅netconf采集" tabindex="-1"><a class="header-anchor" href="#_2-华三二层接入采集-netconf方法-仅netconf采集" aria-hidden="true">#</a> 2.华三二层接入采集(netconf方法) 仅netconf采集</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>colleciton_arp_list

colleciton_interface_list

colleciton_lagg_list

collection_device_PhysicalEntities

collection_ipv4address_list

collection_ipv6address_list

collection_irf_info

collection_lldp_info

collection_mac_unicasttable

patch_version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-华三v5系列交换机标准采集-cmd命令-仅命令采集" tabindex="-1"><a class="header-anchor" href="#_3-华三v5系列交换机标准采集-cmd命令-仅命令采集" aria-hidden="true">#</a> 3. 华三V5系列交换机标准采集(CMD命令) 仅命令采集</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>display <span class="token function">ip</span> interface

display arp

display mac-address

display link-aggregation verbose

display interface brief

display lldp neighbor-information

display device manuinfo

display version

display irf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-华为ce系列交换机-netconf方法-仅netconf采集" tabindex="-1"><a class="header-anchor" href="#_4-华为ce系列交换机-netconf方法-仅netconf采集" aria-hidden="true">#</a> 4.华为CE系列交换机 (netconf方法) 仅netconf采集</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>colleciton_arp_list

colleciton_moduleinfo

colleciton_stack

colleciton_system_info

colleciton_trunk_lacp

collection_intf_ipv4v6

collection_lldp_ip

collection_mac_bd

collection_mac_table

collection_mac_vxlan

collection_mac_vxlan_control
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-华为s系列交换机标准采集-cmd命令-仅命令采集" tabindex="-1"><a class="header-anchor" href="#_5-华为s系列交换机标准采集-cmd命令-仅命令采集" aria-hidden="true">#</a> 5.华为S系列交换机标准采集(CMD命令)(仅命令采集)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>display interface

display arp

display mac-address

display lldp neighbor

display device manufacture-info

display stack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-cisco" tabindex="-1"><a class="header-anchor" href="#_6-cisco" aria-hidden="true">#</a> 6.Cisco</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show interfaces

show <span class="token function">ip</span> arp

show mac-address-table

show version

show lldp neighbors detail

show cdp neighbors detail

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),a=[d];function c(v,r){return n(),e("div",null,a)}const u=i(s,[["render",c],["__file","index.html.vue"]]);export{u as default};
