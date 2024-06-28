import{_ as s,c as a,o as e,a4 as i}from"./chunks/framework.DhooLXd5.js";const b=JSON.parse('{"title":"安卓刷机","description":"","frontmatter":{},"headers":[],"relativePath":"app/common/android.md","filePath":"app/common/android.md","lastUpdated":1712220647000}'),t={name:"app/common/android.md"},l=i(`<h1 id="安卓刷机" tabindex="-1">安卓刷机 <a class="header-anchor" href="#安卓刷机" aria-label="Permalink to &quot;安卓刷机&quot;">​</a></h1><blockquote><h3 id="🐲-沉舟侧畔千帆过-病树前头万木春" tabindex="-1">🐲 沉舟侧畔千帆过，病树前头万木春 <a class="header-anchor" href="#🐲-沉舟侧畔千帆过-病树前头万木春" aria-label="Permalink to &quot;🐲 沉舟侧畔千帆过，病树前头万木春&quot;">​</a></h3><p>本小节讨论如何通过 archlinux 给安卓手机刷机。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-label="Permalink to &quot;🔖 这一节将会讨论：&quot;">​</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#_1-解锁-bootloader">1. 解锁 BootLoader</a></li><li><a href="#_2-刷入-twrp-并进行刷机">2. 刷入 TWRP 并进行刷机</a></li></ul></nav></details></blockquote><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>刷机有风险，解锁需谨慎</p></div><blockquote><p>🔗 相关链接：</p><ul><li><a href="https://wiki.archlinux.org/title/Android_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noreferrer">ArchWiki 相关内容</a></li></ul></blockquote><p>买可以刷机的手机最好买知名度大的品牌、有可能解锁 BootLoader 的手机以及较热门的机型，这样在刷机时可以方便的找到官方的 TWRP 和知名的 ROM 包（如 <a href="https://lineageos.org/" target="_blank" rel="noreferrer">LineageOS</a>、<a href="https://crdroid.net/" target="_blank" rel="noreferrer">crDroid</a> 和 <a href="https://download.pixelexperience.org/devices" target="_blank" rel="noreferrer">PixelExperience</a>等）。</p><p>如果是较冷门的品牌，官方可能没有提供 ROM，只能在网上自行寻找个人改造过的 TWRP 和上述 ROM 包的非官方（unofficial）ROM。这种个人改造版本的安全性比较难说，而且还可能有更多的 🐛 Bug。也有可能翻遍全网，也找不到冷门机型能用（指好用的、非硬件提供商的官方 ROM）的 TWRP 和 ROM。</p><p>硬件方面，一般推荐买高通骁龙的 CPU，不建议买联发科的，因为更多 ROM 的版本都是适配高通硬件的。</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>较新的华为、VIVO等设备解锁困难，刷机几乎成为不可能。</p></div><p>首先需要安装 Linux 上的安卓工具包：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-tools</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_1-解锁-bootloader" tabindex="-1">1. 解锁 BootLoader <a class="header-anchor" href="#_1-解锁-bootloader" aria-label="Permalink to &quot;1. 解锁 BootLoader&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>解锁之前建议先退出手机内的Google账号，部分机型需要在开发者设置中打开OEM解锁一项。</p></div><ol><li><p>手机先通过数据线连接电脑，重启到 fastboot 模式：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reboot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bootloader</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>注意要连到 USB 2.0 的接口，否则可能有兼容性问题。</p></div></li><li><p>解锁 BootLoader：</p></li></ol><p><strong>小米：</strong> 小米官方会提供解锁 BootLoader 的途径和工具，但是这些工具基本只能在 Windows 下用。</p><p><strong>OPPO、真我realme:</strong> 黑厂的机型一般需要进行深度测试解锁，申请速度很慢，并且新机型在第一时间内不能申请深度测试解锁。</p><p><strong>一加、红魔、LG、Google：</strong> 这些品牌的解锁比较简单。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fastboot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flashing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unlock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后按照手机上的提示，使用音量键选择unlock解锁并用电源键确认即可。</p><p><strong>其他：</strong> 不知名的机型和部分OEM机型。可以尝试下面的指令解锁</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fastboot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unlock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>对于部分较旧的（3年前的）联发科芯片的手机可以<a href="https://github.com/notmyst33d/mtkclient-gui" target="_blank" rel="noreferrer">使用漏洞解锁</a>。</p><h2 id="_2-刷入-twrp-并进行刷机" tabindex="-1">2. 刷入 TWRP 并进行刷机 <a class="header-anchor" href="#_2-刷入-twrp-并进行刷机" aria-label="Permalink to &quot;2. 刷入 TWRP 并进行刷机&quot;">​</a></h2><ol><li><p>在 <a href="https://twrp.me/Devices/" target="_blank" rel="noreferrer">TWRP 官网</a> 搜索并下载机型对应的 TWRP</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>没有官方 TWRP 的设备，可以在 <a href="https://unofficialtwrp.com/devices/" target="_blank" rel="noreferrer">UNofficialtwrp</a> 查看下是否有。</p><p>如果没有相关信息有几个论坛和网站可以看看：</p><ul><li><a href="https://forum.xda-developers.com/" target="_blank" rel="noreferrer">XDA Forums</a></li><li><a href="https://www.cusrom.com/" target="_blank" rel="noreferrer">CusROM</a></li><li><a href="https://androidfilehost.com/" target="_blank" rel="noreferrer">ANDROID FILE HOST</a> —— 搜索 <code>开发代号</code> + <code>你想要的系统名字</code></li></ul></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>一般 TWRP 的版本和 ROM 包有对应关系，刷机前先确认你的两个版本是兼容的，否则刷机过程可能报奇怪的错误，如 <code>unable to mount /system</code>。</p></div></li><li><p>同上 <a href="./android.html#_1-解锁-bootloader">1. 解锁 BootLoader</a>，通过数据线连接电脑，重启到 fastboot 模式</p></li><li><p>执行以下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fastboot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> recovery</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/of/your_twrp.img</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>看到命令执行完毕的时候，就可以让手机重启了</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>执行 <code>fastboot reboot</code> 可以重启，但是许多设备会在首次启动时自动覆盖替换你刷入的自定义 recovery，如乐视的 Le 2（X620）。直接重启会报不是官方系统或类似错误。</p><p>为防止这种情况，在手机上通过硬件按键重启进入 recovery，TWRP 将给 ROM 打上 patch，以防止 ROM 替换 TWRP。</p></div></li><li><p>剩下的步骤就是普通的进入 TWRP &gt; 双清 &gt; 刷机即可</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>有时双清或者进入 TWRP 可能看到报错。这时尝试使用高级清理，从 ext4 改一下格式，再改回 ext4 问题可能就解决了。</p></div></li></ol><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>可能需要用到的更多命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 打开 adb shell</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在手机已经 root 的情况下打开 root 权限的 adb shell</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>`,25),o=[l];function r(p,n,d,c,h,k){return e(),a("div",null,o)}const m=s(t,[["render",r]]);export{b as __pageData,m as default};