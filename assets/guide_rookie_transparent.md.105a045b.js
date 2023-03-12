import{_ as a,c as s,o as e,a as n}from"./app.c9b5fec3.js";const l="/assets/transparent_qv2ray.8158ac47.png",o="/assets/transparent_cfg-1.5d3ba450.png",p="/assets/transparent_cfg-2.e82420a1.png",r="/assets/transparent_cfg-3.f6f147d2.png",c="/assets/transparent_cfg-4.24f41ffc.png",t="/assets/transparent_cfg-5.279b04d3.png",i="/assets/transparent_cfg-6.44599eaf.png",d="/assets/transparent_connect-1.fd63a7e0.png",y="/assets/transparent_connect-2.2786a22d.png",h="/assets/transparent_connect-3.8e3c3694.png",b="/assets/transparent_transparent-qv2ray-1.e2efea57.png",u="/assets/transparent_transparent-qv2ray-2.e132dcd2.png",g="/assets/transparent_cgproxy.f611e902.png",v="/assets/transparent_system-cfg-1.73a05623.png",m="/assets/transparent_system-cfg-2.d3ef2204.png",C="/assets/transparent_system-cfg-3.8d0bee5a.png",_="/assets/transparent_cgproxy-start.86cfd31b.png",x="/assets/transparent_check.49a4d9aa.png",D="/assets/firefox.d18d0fe5.png",A="/assets/telegram-1.d923176c.png",f="/assets/telegram-2.36d6057d.png",k="/assets/vscode.f0528e56.png",E="/assets/proxychains-1.367c6f77.png",F="/assets/proxychains-2.2cc1eb1a.png",B="/assets/proxychains-3.03c4c622.png",O=JSON.parse('{"title":"archlinux 透明代理","description":"","frontmatter":{},"headers":[{"level":3,"title":"安装 v2ray 和 v2rayA:","slug":"安装-v2ray-和-v2raya","link":"#安装-v2ray-和-v2raya","children":[]},{"level":3,"title":"配置 v2raya","slug":"配置-v2raya","link":"#配置-v2raya","children":[]},{"level":2,"title":"安装和配置 Qv2ray","slug":"安装和配置-qv2ray","link":"#安装和配置-qv2ray","children":[{"level":3,"title":"1. 安装 Qv2ray 和 V2Ray / Xray 内核","slug":"_1-安装-qv2ray-和-v2ray-xray-内核","link":"#_1-安装-qv2ray-和-v2ray-xray-内核","children":[]},{"level":3,"title":"2. 配置 Qv2ray","slug":"_2-配置-qv2ray","link":"#_2-配置-qv2ray","children":[]},{"level":3,"title":"3. 配置订阅","slug":"_3-配置订阅","link":"#_3-配置订阅","children":[]},{"level":3,"title":"4. 通过系统代理方式尝试连接","slug":"_4-通过系统代理方式尝试连接","link":"#_4-通过系统代理方式尝试连接","children":[]},{"level":3,"title":"5. 安装 cgproxy","slug":"_5-安装-cgproxy","link":"#_5-安装-cgproxy","children":[]},{"level":3,"title":"6. 配置 Qv2ray 透明代理设置","slug":"_6-配置-qv2ray-透明代理设置","link":"#_6-配置-qv2ray-透明代理设置","children":[]},{"level":3,"title":"7. 配置 cgproxy","slug":"_7-配置-cgproxy","link":"#_7-配置-cgproxy","children":[]},{"level":3,"title":"8. 配置可用的 DNS 服务","slug":"_8-配置可用的-dns-服务","link":"#_8-配置可用的-dns-服务","children":[]},{"level":3,"title":"9. 启动 cgproxy 服务","slug":"_9-启动-cgproxy-服务","link":"#_9-启动-cgproxy-服务","children":[]}]},{"level":2,"title":"Clash","slug":"clash","link":"#clash","children":[{"level":3,"title":"Clash-verge","slug":"clash-verge","link":"#clash-verge","children":[]},{"level":3,"title":"Clash for Windows","slug":"clash-for-windows","link":"#clash-for-windows","children":[]}]},{"level":2,"title":"其它代理方法（非透明代理）","slug":"其它代理方法-非透明代理","link":"#其它代理方法-非透明代理","children":[{"level":3,"title":"系统代理","slug":"系统代理","link":"#系统代理","children":[]},{"level":3,"title":"应用自身的代理配置","slug":"应用自身的代理配置","link":"#应用自身的代理配置","children":[]},{"level":3,"title":"export","slug":"export","link":"#export","children":[]},{"level":3,"title":"proxychains-ng","slug":"proxychains-ng","link":"#proxychains-ng","children":[]}]}],"relativePath":"guide/rookie/transparent.md","lastUpdated":1677841267000}'),w={name:"guide/rookie/transparent.md"},Q=n(`<h1 id="archlinux-透明代理" tabindex="-1">archlinux 透明代理 <a class="header-anchor" href="#archlinux-透明代理" aria-hidden="true">#</a></h1><blockquote><h3 id="🕊-纵使千山多万壑-犹有青鸾踏云间" tabindex="-1">🕊 纵使千山多万壑，犹有青鸾踏云间 <a class="header-anchor" href="#🕊-纵使千山多万壑-犹有青鸾踏云间" aria-hidden="true">#</a></h3><p>全球化浪潮无法阻挡，我们常常有访问一些资料的客观需求。但有的时候因为一些因素往往导致无法正常访问（包括但不限于<strong>终端中下载文件特别慢、无法访问部分网站、部分应用无法正常使用</strong>等）。虽然前路千沟万壑，但无法阻挡我们前行的脚步。本节我们通过设置透明代理解决这一问题</p></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>鉴于 Qv2ray 原项目已<a href="https://github.com/Qv2ray/Qv2ray" target="_blank" rel="noreferrer">停止开发</a>，新的版本还不够完善，有魔法上网需求者建议使用 v2rayA 替代 Qv2ray。</p><p>v2rayA 的优势：</p><ul><li>支持一键开启全局代理，配置方便</li><li>客户端运行在浏览器中，轻量</li></ul></div><h3 id="安装-v2ray-和-v2raya" tabindex="-1">安装 v2ray 和 v2rayA: <a class="header-anchor" href="#安装-v2ray-和-v2raya" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>v2rayA 2.0 版本全面转向 V2Ray 第五代版本，不支持第四代与 Xray，建议升级 V2Ray 到 5.10 版本。 如果你坚持使用 Xray，那么你可以停留在 1.x 版本，或者自行编译 Master 分支。</p></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-j-um_" id="tab-cnikx0g" checked="checked"><label for="tab-cnikx0g">cn</label><input type="radio" name="group-j-um_" id="tab-LsSofvL"><label for="tab-LsSofvL">aur</label></div><div class="blocks"><div class="language-bash active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v2ray</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v2raya</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v2ray</span></span>
<span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/v2raya</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></div><h3 id="配置-v2raya" tabindex="-1">配置 v2raya <a class="header-anchor" href="#配置-v2raya" aria-hidden="true">#</a></h3><p>安装后启动服务：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--now</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v2raya</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>随后在开始菜单中搜索 v2rayA，点击即可打开浏览器页面。在其中加入订阅(没有魔法上网节点？请参考<a href="https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/fxckGFW?id=%e5%b7%b2%e6%9c%89%e7%a7%91%e5%ad%a6%e4%b8%8a%e7%bd%91%e7%9a%84%e8%8a%82%e7%82%b9%e7%9a%84%e6%83%85%e5%86%b5" target="_blank" rel="noreferrer">原文档相关内容</a>)。在设置中建议开启全局透明代理(选择<code>大陆白名单</code>)，同时开启防止 DNS 劫持功能，否则可能会拿不到被 DNS 污染的资源(如 github raw)。</p><h2 id="安装和配置-qv2ray" tabindex="-1">安装和配置 Qv2ray <a class="header-anchor" href="#安装和配置-qv2ray" aria-hidden="true">#</a></h2><h3 id="_1-安装-qv2ray-和-v2ray-xray-内核" tabindex="-1">1. 安装 Qv2ray 和 V2Ray / Xray 内核 <a class="header-anchor" href="#_1-安装-qv2ray-和-v2ray-xray-内核" aria-hidden="true">#</a></h3><p>通过以下命令安装 <a href="https://github.com/Qv2ray/Qv2ray" target="_blank" rel="noreferrer">Qv2ray</a><sup>cn</sup> 和 <a href="https://archlinux.org/packages/?sort=&amp;q=v2ray&amp;maintainer=&amp;flagged=" target="_blank" rel="noreferrer">V2Ray</a> / <a href="https://github.com/XTLS/Xray-core" target="_blank" rel="noreferrer">Xray</a><sup>cn</sup> 内核：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-_ydUV" id="tab-bGotXKL" checked="checked"><label for="tab-bGotXKL">V2Ray</label><input type="radio" name="group-_ydUV" id="tab-pr3MCRS"><label for="tab-pr3MCRS">Xray</label></div><div class="blocks"><div class="language-bash active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">qv2ray-dev-git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v2ray</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">qv2ray-dev-git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xray</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>若安装 V2Ray 核心时报错，请尝试更换镜像源。</p></div><p><img src="`+l+'" alt="Qv2ray"></p><blockquote><h4 id="📑-相关资料-qv2ray" tabindex="-1">📑 相关资料：Qv2ray <a class="header-anchor" href="#📑-相关资料-qv2ray" aria-hidden="true">#</a></h4><p>Qv2ray 是一个使用 Qt 编写的跨平台的 v2ray 图形前端。</p></blockquote><h3 id="_2-配置-qv2ray" tabindex="-1">2. 配置 Qv2ray <a class="header-anchor" href="#_2-配置-qv2ray" aria-hidden="true">#</a></h3><ol><li>打开 Qv2ray &gt; 点击 <code>首选项</code>：</li></ol><p><img src="'+o+'" alt="Qv2ray_config-1"></p><ol start="2"><li>在 <code>内核设置</code> 选项卡中，点击 <code>检查 V2Ray 核心设置</code> 以验证 V2Ray 核心设置：</li></ol><p><img src="'+p+'" alt="Qv2ray_config-2"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><ol><li><p>若使用 Xray 内核，则先需修改：</p><ol><li><p><code>V2Ray 核心可执行文件路径</code> 为 <code>/usr/bin/xray</code></p></li><li><p><code>V2Ray 资源目录</code> 为 <code>/usr/share/xray</code></p></li></ol></li><li><p>再点击 <code>检查 V2Ray 核心设置</code> 以验证 Xray 核心设置：</p></li></ol><p><img src="'+r+'" alt="Qv2ray_config-3"></p></div><h3 id="_3-配置订阅" tabindex="-1">3. 配置订阅 <a class="header-anchor" href="#_3-配置订阅" aria-hidden="true">#</a></h3><ol><li>在主窗口中点击 <code>分组</code>：</li></ol><p><img src="'+c+'" alt="Qv2ray_config-4"></p><ol start="2"><li>修改 <code>分组名称</code> 的 <code>默认分组</code> 为自定义名称（通常为 ✈ 场名称）：</li></ol><p><img src="'+t+'" alt="Qv2ray_config-5"></p><ol start="3"><li><p>切换到 <code>订阅设置</code> 选项卡并进行如下配置：</p><ol><li><p>勾选 <code>此组是一个订阅</code></p></li><li><p>设置 <code>订阅地址</code> 为 ✈ 场提供的 <code>订阅链接</code></p></li><li><p>点击 <code>更新订阅</code> 按钮并等待完成</p></li><li><p>点击 <code>确定</code> 以应用设置并关闭对话框</p></li></ol></li></ol><p><img src="'+i+'" alt="Qv2ray_config-6"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>若使用 <code>qv2ray-dev-git</code><sup>cn</sup>，则需要注意的是最新的 <code>qv2ray-dev-git</code> 已经将机场的默认订阅类型改为规范 <code>SIP008</code>。</p><p>如果你的 ✈ 场订阅类型为 <code>base64</code>，则需要在 <code>订阅设置</code> 面板 &gt; <code>订阅类型</code> 中，将 <code>SIP008</code> 改为 <code>base64</code>，否则你将拿不到订阅链接中的任何节点。</p></div><h3 id="_4-通过系统代理方式尝试连接" tabindex="-1">4. 通过系统代理方式尝试连接 <a class="header-anchor" href="#_4-通过系统代理方式尝试连接" aria-hidden="true">#</a></h3><ol><li>双击分组中添加的订阅即可查看更新出的节点，右键并点击 <code>测试延迟</code> 可以测试分组或节点的延迟：</li></ol><p><img src="'+d+'" alt="Qv2ray_connect-1"></p><ol start="2"><li>右键需要连接的节点 &gt; 点击 <code>连接到此服务器</code> 即可连接：</li></ol><p><img src="'+y+'" alt="Qv2ray_connect-2"></p><ol start="3"><li>打开不存在的网站验证连接：</li></ol><p><img src="'+h+`" alt="Qv2ray_connect-3"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>Qv2ray 会自动配置系统代理。也可以点击托盘图标 &gt; 在弹出菜单中，依次选择 <code>系统代理</code> &gt; <code>启用 / 禁用系统代理</code> 以启用或禁用系统代理。</p></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>GNOME 的系统代理设置非常有效。这是因为 GNOME 的系统代理设置得到了普遍的适配。</p><p>但是 KDE 的系统代理设置更像是一个玩具。甚至 KDE 系列应用程序本身也不会读取和使用那个配置。所以我们需要通过设置透明代理的方式解决这个问题。</p><p>同时这也可以使终端下的应用使用代理连接（如 git）。</p></div><h3 id="_5-安装-cgproxy" tabindex="-1">5. 安装 cgproxy <a class="header-anchor" href="#_5-安装-cgproxy" aria-hidden="true">#</a></h3><p>通过以下命令安装 <a href="https://github.com/springzfx/cgproxy" target="_blank" rel="noreferrer">cgproxy</a><sup>cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-pmYB4" id="tab-hDkgDbk" checked="checked"><label for="tab-hDkgDbk">cn</label><input type="radio" name="group-pmYB4" id="tab-6vBKOnk"><label for="tab-6vBKOnk">aur</label></div><div class="blocks"><div class="language-bash active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cgproxy-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/cgproxy</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h3 id="_6-配置-qv2ray-透明代理设置" tabindex="-1">6. 配置 Qv2ray 透明代理设置 <a class="header-anchor" href="#_6-配置-qv2ray-透明代理设置" aria-hidden="true">#</a></h3><ol><li>打开 Qv2ray &gt; <code>首选项</code> &gt; <code>入站设置</code> &gt; 取消勾选 <code>设置系统代理</code>：</li></ol><p><img src="`+b+'" alt="Qv2ray_transparent-1"></p><ol start="2"><li>勾选 <code>透明代理设置</code>：</li></ol><p><img src="'+u+`" alt="Qv2ray_transparent-2"></p><p>其它设置保持默认即可，<code>IPv4 端口</code> 可自定义为其它端口。</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>关于代理 <code>udp</code> 流量的设置稍微有一些复杂，配置有误便会导致无法上网。</p><p>本指南不对此展开介绍，如有需要可参考 <a href="https://www.v2ray.com/chapter_02/04_dns.html" target="_blank" rel="noreferrer">Project V 官方网站相关内容</a>。一般情况下不需要代理 <code>udp</code> 流量。</p><p>而属于 <code>udp</code> 类型的 <code>dns</code> 流量，我们只需要在系统设置里设置一个可用的 DNS 服务器即可。</p></div><ol start="3"><li>点击 <code>确定</code> 保存设置</li></ol><h3 id="_7-配置-cgproxy" tabindex="-1">7. 配置 cgproxy <a class="header-anchor" href="#_7-配置-cgproxy" aria-hidden="true">#</a></h3><ol><li>通过 <code>vim</code> 编辑 <code>/etc/cgproxy/config.json</code> 文件：</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/cgproxy/config.json</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进行如下修改：</p><ul><li>在 <code>cgroup_proxy</code> 中括号里加上 <code>&quot;/&quot;</code>（包含引号）</li><li>将 <code>port</code> 改为 Qv2ray 首选项里的透明代理端口（默认是和 Qv2ray 默认对应的 <code>12345</code>）</li><li>将 <code>enable_dns</code>、<code>enable_udp</code>、<code>enable_ipv6</code> 改为 <code>false</code></li><li>如果希望当本机作为网关设备时为连接到本机网关的其他设备（如连接到本机开设的 wifi 热点的设备）也提供透明代理，则将 <code>enable_gateway</code> 改为 <code>true</code></li></ul><p><img src="`+g+'" alt="cgproxy"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>cgproxy 默认配置是代理所有 <code>tcp</code> 和 <code>udp</code>、<code>ipv4</code> 和 <code>ipv6</code> 的流量。</p><p>如果不希望代理其中的某种（些）流量，则将对应的 <code>enable_xxx</code> 改为 <code>false</code>。注意，这里的配置要和 Qv2ray 选项里的配置一致（例如 Qv2ray 选项里没有勾选 <code>udp</code>，则这里务必把 <code>enable_udp</code> 改为 <code>false</code>）</p></div><ol start="2"><li>保存并退出 <code>vim</code></li></ol><h3 id="_8-配置可用的-dns-服务" tabindex="-1">8. 配置可用的 DNS 服务 <a class="header-anchor" href="#_8-配置可用的-dns-服务" aria-hidden="true">#</a></h3><ol><li>打开 <code>系统设置</code> &gt; 点击侧栏 <code>连接</code>：</li></ol><p><img src="'+v+'" alt="system-config_step-1"></p><ol start="2"><li>选择当前连接 &gt; 点击 <code>ipv4</code> 选项卡：</li></ol><p><img src="'+m+'" alt="system-config_step-2"></p><ol start="3"><li>在 <code>其它 DNS 服务器</code> 中添加没有污染的 DNS 服务器：</li></ol><p><img src="'+C+`" alt="system-config_step-3"></p><ol start="4"><li>保存并退出系统设置</li></ol><h3 id="_9-启动-cgproxy-服务" tabindex="-1">9. 启动 cgproxy 服务 <a class="header-anchor" href="#_9-启动-cgproxy-服务" aria-hidden="true">#</a></h3><ol><li><p>在 Qv2ray 中连接一个节点</p></li><li><p>在 Qv2ray 托盘菜单中关闭系统代理（如果已经启动）</p></li><li><p>通过以下命令启动 cgproxy 服务：</p></li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cgproxy.service</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>每次重启后都要重新命令启动 cgproxy 服务。</p><p>若要设为开机自启，请执行以下命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cgproxy.service</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>若要关闭 cgproxy 服务，请执行以下命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cgproxy.service</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><ol start="4"><li>通过以下命令检查 cgproxy 服务运行情况：</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cgproxy.service</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+_+'" alt="cgproxy-start"></p><ol start="5"><li>打开不存在的网站验证连接：</li></ol><p><img src="'+x+`" alt="check"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>如果 cgproxy 不生效 😢，请尝试以下步骤：</p><ol><li>观察 Qv2ray 日志，看流量是否被定向到了 Qv2ray</li><li>如果没有，请检查配置是否准确、cgproxy 服务是否开启等</li><li>如果还是没发现问题，尝试更换端口</li><li>使用以下命令尝试给核心文件加上相应的特权：</li></ol></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-VsaZp" id="tab-2H0wRvS" checked="checked"><label for="tab-2H0wRvS">V2Ray</label><input type="radio" name="group-VsaZp" id="tab-DUWAbBW"><label for="tab-DUWAbBW">Xray</label></div><div class="blocks"><div class="language-bash active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setcap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cap_net_admin,cap_net_bind_service=ep</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/v2ray</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setcap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cap_net_admin,cap_net_bind_service=ep</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/xray</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="clash" tabindex="-1">Clash <a class="header-anchor" href="#clash" aria-hidden="true">#</a></h2><p>clash 本身是一个网络连接的代理内核，通过预先定义的<strong>规则</strong>，对网络连接进行转发。clash 内核规定了配置文件 <code>config.yaml</code> 的格式。支持 VMess、Shadowsocks、Trojan、Snell 协议。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.config/clash/config.yaml</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="clash-verge" tabindex="-1">Clash-verge <a class="header-anchor" href="#clash-verge" aria-hidden="true">#</a></h3><p>基于 tauri 框架开发的开源跨平台 Clash 客户端<small>（远离 Electron 从我做起）</small></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">yay -S clash-verge</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="clash-for-windows" tabindex="-1">Clash for Windows <a class="header-anchor" href="#clash-for-windows" aria-hidden="true">#</a></h3><p>这是一个功能较全的客户端，支持 Windows/macOS/Linux ，基于 Clash 和 Electron 的一个 GUI 客户端。未开源</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">yay -S clash-for-windows-bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="其它代理方法-非透明代理" tabindex="-1">其它代理方法（非透明代理） <a class="header-anchor" href="#其它代理方法-非透明代理" aria-hidden="true">#</a></h2><blockquote><p>虽然 cgproxy 很好，但有的时候就是会有诡异的 bug。本指南为了内容的全面性，介绍其它的代理方法。</p></blockquote><h3 id="系统代理" tabindex="-1">系统代理 <a class="header-anchor" href="#系统代理" aria-hidden="true">#</a></h3><p>如步骤 <a href="./transparent.html#_4-通过系统代理方式尝试连接">4. 通过系统代理方式尝试连接</a> 所述，但在很多应用不生效（主流浏览器已支持 KDE 的系统代理）。</p><h3 id="应用自身的代理配置" tabindex="-1">应用自身的代理配置 <a class="header-anchor" href="#应用自身的代理配置" aria-hidden="true">#</a></h3><h4 id="firefox" tabindex="-1">Firefox <a class="header-anchor" href="#firefox" aria-hidden="true">#</a></h4><p>Firefox 可使用系统代理，也可手动配置：</p><p><img src="`+D+'" alt="Firefox"></p><h4 id="telegram" tabindex="-1">Telegram <a class="header-anchor" href="#telegram" aria-hidden="true">#</a></h4><ol><li>点击 <code>Settings</code> &gt; <code>Advanced</code> &gt; <code>Connection type</code> &gt; <code>Use custom proxy</code></li></ol><p><img src="'+A+'" alt="Telegram_step-1"></p><ol start="2"><li>点击 <code>ADD PROXY</code> &gt; 填写合适的类型和端口 &gt; <code>SAVE</code>：</li></ol><p><img src="'+f+'" alt="Telegram_step-2"></p><h4 id="visual-studio-code-code-oss" tabindex="-1">Visual Studio Code（code OSS） <a class="header-anchor" href="#visual-studio-code-code-oss" aria-hidden="true">#</a></h4><ol><li><p>点击 <code>File</code>（<code>文件</code>） &gt; <code>Preference</code>（<code>首选项</code>） &gt; <code>Settings</code>（<code>设置</code>）</p></li><li><p>搜索 <code>proxy</code>，在其中填入 http 代理地址（<code>http://127.0.0.1:xxxx</code>）即可：</p></li></ol><p><img src="'+k+`" alt="vscode"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>其它应用请自行寻找代理设置。</p></div><h3 id="export" tabindex="-1">export <a class="header-anchor" href="#export" aria-hidden="true">#</a></h3><p>通过以下 <code>export</code> 命令设置当前终端的代理方式：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> https_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:xxxx</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> http_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:xxxx</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> all_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:xxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>不同终端命令所识别的环境变量名不同，如 <code>all_proxy</code> 对 <code>curl</code> 生效，而对 <code>wget</code> 则不生效，具体可查看各个命令的 <code>man page</code></p></div><h3 id="proxychains-ng" tabindex="-1">proxychains-ng <a class="header-anchor" href="#proxychains-ng" aria-hidden="true">#</a></h3><p>如果对于一个应用，KDE 系统代理不生效，在终端 <code>export</code> 了 <code>ALL_PROXY</code> 变量再用终端启动此应用代理也不生效，并且这个应用自身也没有配置代理的选项，此时可以尝试使用 proxychains-ng。</p><p>它可以为单行命令配置代理。它是一个预加载的 hook，允许通过一个或多个 SOCKS 或 HTTP 代理重定向现有动态链接程序的 TCP 流量。</p><ol><li>通过以下命令安装 proxychains-ng 包：</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proxychains-ng</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>通过 <code>vim</code> 编辑 <code>/etc/proxychains.conf</code> 文件：</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/proxychains.conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>把配置文件中最后两行改为 Qv2ray 代理的 ip 和端口：</p><p><img src="`+E+'" alt="proxychains_step-1"></p><p>在 <code>proxy_dns</code> 一行前添加 <code>#</code> 注释掉此行，否则使用 <code>proxychains</code> 启动 yay 会报错：</p><p><img src="'+F+`" alt="proxychains_step-2"></p><p>在 <code>quiet_mode</code> 一行前删除 <code>#</code> 解注释掉此行，以关闭调用 library 产生的输出：</p><div class="language-properties line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Quiet mode (no output from library)</span></span>
<span class="line"><span style="color:#A6ACCD;">quiet_mode</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>使用代理方式为在单一命令前添加 <code>proxychains</code> 前缀：</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">proxychains</span><span style="color:#A6ACCD;"> %command%</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如使用 proxychains-ng 代理 yay:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">proxychains</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Syyu</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+B+'" alt="proxychains_step-3"></p><blockquote><p>📔 本节参考资料：</p><ul><li><a href="https://qv2ray.net/lang/zh/" target="_blank" rel="noreferrer">Qv2ray</a></li></ul></blockquote>',127),q=[Q];function S(V,R,T,X,N,P){return e(),s("div",null,q)}const K=a(w,[["render",S]]);export{O as __pageData,K as default};
