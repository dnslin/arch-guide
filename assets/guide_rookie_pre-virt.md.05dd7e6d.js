import{_ as t,a as e}from"./chunks/pre-virt_vb-18.7338228b.js";import{_ as r,c as o,o as i,a}from"./app.c9b5fec3.js";const l="/assets/pre-virt_vb-install-1.ae4eb3e0.png",s="/assets/pre-virt_vb-1.a4976818.png",c="/assets/pre-virt_vb-2.9eb31002.png",p="/assets/pre-virt_vb-3.50ea3319.png",n="/assets/pre-virt_vb-4.64e03cc9.png",_="/assets/pre-virt_vb-5.7cb6c8ee.png",d="/assets/pre-virt_vb-6.13b3f498.png",u="/assets/pre-virt_vb-7.0dbb89f4.png",b="/assets/pre-virt_vb-8.674234a8.png",g="/assets/pre-virt_vb-9.9955b140.png",h="/assets/pre-virt_vb-10.9de7144c.png",v="/assets/pre-virt_vb-11.04332154.png",m="/assets/pre-virt_vb-12.5dcbebf2.png",f="/assets/pre-virt_vb-13.9804e6b7.png",x="/assets/pre-virt_vb-14.0f721ea2.png",B="/assets/pre-virt_vb-15.f4bb9b0f.png",k="/assets/pre-virt_vb-16.48754819.png",O=JSON.parse('{"title":"虚拟机安装前的准备","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 安装 VirtualBox","slug":"_1-安装-virtualbox","link":"#_1-安装-virtualbox","children":[]},{"level":2,"title":"2. 下载安装镜像","slug":"_2-下载安装镜像","link":"#_2-下载安装镜像","children":[]},{"level":2,"title":"3. 配置 VirtualBox","slug":"_3-配置-virtualbox","link":"#_3-配置-virtualbox","children":[]}],"relativePath":"guide/rookie/pre-virt.md","lastUpdated":1677171045000}'),C={name:"guide/rookie/pre-virt.md"},V=a('<h1 id="虚拟机安装前的准备" tabindex="-1">虚拟机安装前的准备 <a class="header-anchor" href="#虚拟机安装前的准备" aria-hidden="true">#</a></h1><blockquote><h3 id="✔-磨刀不误砍柴工" tabindex="-1">✔ 磨刀不误砍柴工 <a class="header-anchor" href="#✔-磨刀不误砍柴工" aria-hidden="true">#</a></h3><p>在实体机安装 archlinux 前，不妨先在虚拟机中尝试一下 archlinux 的安装。同样的，我们需要做一些设置。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#_1-安装-virtualbox">1. 安装 VirtualBox</a></li><li><a href="#_2-下载安装镜像">2. 下载安装镜像</a></li><li><a href="#_3-配置-virtualbox">3. 配置 VirtualBox</a></li></ul></nav></details></blockquote><p>本小节将在 win10 环境下使用 <a href="https://www.virtualbox.org/" target="_blank" rel="noreferrer">Oracle VM VirtualBox</a> 虚拟机安装 archlinux。</p><blockquote><h4 id="📑-相关资料-virtualbox" tabindex="-1">📑 相关资料：VirtualBox <a class="header-anchor" href="#📑-相关资料-virtualbox" aria-hidden="true">#</a></h4><p>VirtualBox 是一款开源虚拟机软件。由德国 Innotek 公司开发，Sun Microsystems 公司出品。使用 Qt 编写，在 Sun 被 Oracle 收购后正式更名成 Oracle VM VirtualBox。采用 GPL 协议开源。</p></blockquote><h2 id="_1-安装-virtualbox" tabindex="-1">1. 安装 VirtualBox <a class="header-anchor" href="#_1-安装-virtualbox" aria-hidden="true">#</a></h2><p>VirtualBox 安装包同样可以在开源镜像站（推荐）或者 <a href="https://archlinux.org/download/" target="_blank" rel="noreferrer">VirtualBox 官方下载页面</a> 下载。</p><p>下面是国内常用的提供 VirtualBox 安装包的开源镜像站（选一个即可）：</p><ul><li><a href="https://mirrors.tuna.tsinghua.edu.cn/help/virtualbox/" target="_blank" rel="noreferrer">清华大学开源软件镜像站</a></li><li><a href="https://mirrors.hit.edu.cn/virtualbox/" target="_blank" rel="noreferrer">哈尔滨工业大学开源镜像站</a></li></ul><p><img src="'+l+'" alt="vb-install"></p><p>根据安装包的提示安装即可。</p><h2 id="_2-下载安装镜像" tabindex="-1">2. 下载安装镜像 <a class="header-anchor" href="#_2-下载安装镜像" aria-hidden="true">#</a></h2><p>同样的，虚拟机安装 archlinux 也需要安装镜像。</p><p>请参阅上一节 <a href="./pre-install.html#_2-下载安装镜像">安装前的准备</a> 下载。</p><h2 id="_3-配置-virtualbox" tabindex="-1">3. 配置 VirtualBox <a class="header-anchor" href="#_3-配置-virtualbox" aria-hidden="true">#</a></h2><p><img src="'+s+'" alt="Configure-vb_step-1"></p><ol><li>打开 VirtualBox &gt; 点击 <code>新建</code></li></ol><p><img src="'+c+'" alt="Configure-vb_step-2"></p><ol start="2"><li>在弹出的设置向导窗口中输入虚拟机的名字以及虚拟机相关文件的保存位置。建议不要在名字中带有特殊字符。若名字中含有 <code>arch</code> 字眼，VirtualBox 会自动将类型和版本修改为 archlinux，否则请手动选择</li></ol><p><img src="'+p+'" alt="Configure-vb_step-3"></p><ol start="3"><li>将内存大小修改为合适大小。建议大于 2GB。因为即使 archlinux 可以在 512MB 的内存下运行，但安装还需要更多的内存</li></ol><p><img src="'+n+'" alt="Configure-vb_step-4"></p><ol start="4"><li>点击 <code>创建</code></li></ol><p><img src="'+_+'" alt="Configure-vb_step-5"></p><ol start="5"><li>选择 <code>VDI</code> 类型（默认） &gt; 点击 <code>下一步</code></li></ol><p><img src="'+d+'" alt="Configure-vb_step-6"></p><ol start="6"><li>选择 <code>动态分配</code> （默认） &gt; 点击 <code>下一步</code></li></ol><p><img src="'+u+'" alt="Configure-vb_step-7"></p><ol start="7"><li>选择合适的储存位置（一般默认即可） &gt; 指定虚拟磁盘大小。建议大于 64 GB（因为是动态分配，不会立即占用硬盘空间，请放心选择；同时我们在虚拟机里不会安装过多的软件，所以 64GB 足够我们使用，当然你也可以自由调整） &gt; 点击 <code>创建</code></li></ol><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>设置向导完成后，请<strong>不要</strong>立即启动。</p></div><p><img src="'+b+'" alt="Configure-vb_step-8"></p><ol start="8"><li>点击 <code>设置</code></li></ol><p><img src="'+g+'" alt="Configure-vb_step-9"></p><ol start="9"><li>点击侧栏 <code>系统</code> &gt; <code>主板</code> &gt; 在 <code>扩展特性</code> 中勾上 <code>启用 EFI</code></li></ol><p><img src="'+h+'" alt="Configure-vb_step-10"></p><p><img src="'+v+'" alt="Configure-vb_step-11"></p><ol start="10"><li><code>处理器数量</code> 和 <code>显存大小</code> 可做适当调整</li></ol><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>请不要在 <code>硬件加速</code> 中勾选 <code>启用3D加速</code>。否则会导致安装好桌面环境后无法进入桌面，只有黑屏和光标。如有需要可以参阅 <a href="https://wiki.archlinux.org/title/VirtualBox_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#Arch_Linux_guest%E8%99%9A%E6%8B%9F%E6%9C%BA%E4%B8%AD%E6%B2%A1%E6%9C%89%E7%A1%AC%E4%BB%B63D%E5%8A%A0%E9%80%9F" target="_blank" rel="noreferrer">archWiki 相关说明</a>。</p></div><p><img src="'+m+'" alt="Configure-vb_step-12"></p><ol start="11"><li>在侧栏 <code>网络</code> &gt; <code>网卡 1</code> &gt; 将 <code>连接方式</code> 改为 <code>桥接网卡</code></li></ol><p><img src="'+f+'" alt="Configure-vb_step-13"></p><ol start="12"><li>点击 <code>启动</code>，开启虚拟机</li></ol><p><img src="'+x+'" alt="Configure-vb_step-14"></p><ol start="13"><li>在弹出的选择启动盘窗口点击 <code>文件夹小图标</code></li></ol><p><img src="'+B+'" alt="Configure-vb_step-15"></p><ol start="14"><li>点击 <code>注册</code> &gt; 在弹出的资源管理器中选择 <code>archlinux 安装镜像</code></li></ol><p><img src="'+k+'" alt="Configure-vb_step-16"></p><ol start="15"><li>选中 <code>archlinux 安装镜像</code> &gt; 点击 <code>选择</code></li></ol><p><img src="'+t+'" alt="Configure-vb_step-17"></p><ol start="16"><li>在第一个选项回车 <code>Enter</code></li></ol><p><img src="'+e+'" alt="Configure-vb_step-18"></p><ol start="17"><li>此时虚拟机会黑屏一会，经过一段时间的等待和提示信息的刷屏，就可以看到 🐂 牛牛了</li></ol>',52),E=[V];function A(D,w,S,q,T,I){return i(),o("div",null,E)}const P=r(C,[["render",A]]);export{O as __pageData,P as default};
