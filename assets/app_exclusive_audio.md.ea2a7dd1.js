import{_ as a,c as s,o as e,a as n}from"./app.c9b5fec3.js";const l="/assets/ardour.cee9b291.png",r="/assets/kwave.2604c3fe.png",p="/assets/audacity.840248ab.png",t="/assets/vcvrack.373b7fa7.png",i="/assets/mixxx.79e09f39.png",o="/assets/lmms.6914bf25.png",c="/assets/musescore.6303319b.png",d="/assets/lyrebird.444f0482.png",u="/assets/soundconverter.2b467969.png",D=JSON.parse('{"title":"音频制作","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"🎚️ 音频编辑","slug":"🎚️-音频编辑","link":"#🎚️-音频编辑","children":[{"level":3,"title":"Ardour","slug":"ardour","link":"#ardour","children":[]},{"level":3,"title":"Kwave","slug":"kwave","link":"#kwave","children":[]},{"level":3,"title":"Audacity","slug":"audacity","link":"#audacity","children":[]},{"level":3,"title":"VCV Rack","slug":"vcv-rack","link":"#vcv-rack","children":[]}]},{"level":2,"title":"🎛️ 唱片骑师","slug":"🎛️-唱片骑师","link":"#🎛️-唱片骑师","children":[{"level":3,"title":"Mixxx","slug":"mixxx","link":"#mixxx","children":[]}]},{"level":2,"title":"🎼 编曲软件","slug":"🎼-编曲软件","link":"#🎼-编曲软件","children":[{"level":3,"title":"LMMS","slug":"lmms","link":"#lmms","children":[]},{"level":3,"title":"MuseScore","slug":"musescore","link":"#musescore","children":[]}]},{"level":2,"title":"🎙️ 变声器","slug":"🎙️-变声器","link":"#🎙️-变声器","children":[{"level":3,"title":"Lyrebird","slug":"lyrebird","link":"#lyrebird","children":[]}]},{"level":2,"title":"🗄️ 管理与转换","slug":"🗄️-管理与转换","link":"#🗄️-管理与转换","children":[{"level":3,"title":"SoundConverter","slug":"soundconverter","link":"#soundconverter","children":[]}]}],"relativePath":"app/exclusive/audio.md","lastUpdated":1678795937000}'),h={name:"app/exclusive/audio.md"},b=n(`<h1 id="音频制作" tabindex="-1">音频制作 <a class="header-anchor" href="#音频制作" aria-hidden="true">#</a></h1><blockquote><h3 id="🎵-此曲只应天上有-人间能得几回闻" tabindex="-1">🎵 此曲只应天上有，人间能得几回闻 <a class="header-anchor" href="#🎵-此曲只应天上有-人间能得几回闻" aria-hidden="true">#</a></h3><p>本小节讨论如何在 archlinux 上制作音乐、编辑音频等信息。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🎚️-音频编辑">🎚️ 音频编辑</a><ul><li><a href="#ardour">Ardour</a></li><li><a href="#kwave">Kwave</a></li><li><a href="#audacity">Audacity</a></li><li><a href="#vcv-rack">VCV Rack</a></li></ul></li><li><a href="#🎛️-唱片骑师">🎛️ 唱片骑师</a><ul><li><a href="#mixxx">Mixxx</a></li></ul></li><li><a href="#🎼-编曲软件">🎼 编曲软件</a><ul><li><a href="#lmms">LMMS</a></li><li><a href="#musescore">MuseScore</a></li></ul></li><li><a href="#🎙️-变声器">🎙️ 变声器</a><ul><li><a href="#lyrebird">Lyrebird</a></li></ul></li><li><a href="#🗄️-管理与转换">🗄️ 管理与转换</a><ul><li><a href="#soundconverter">SoundConverter</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🎚️-音频编辑" tabindex="-1">🎚️ 音频编辑 <a class="header-anchor" href="#🎚️-音频编辑" aria-hidden="true">#</a></h2><h3 id="ardour" tabindex="-1">Ardour <a class="header-anchor" href="#ardour" aria-hidden="true">#</a></h3><p><a href="https://ardour.org/" target="_blank" rel="noreferrer">Ardour</a> 是一款自由开源的让你可以在 Linux 上录音、编辑和混音的软件。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/ardour/" target="_blank" rel="noreferrer">Ardour</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-9H4mi" id="tab-hgfUoIf" checked="checked"><label for="tab-hgfUoIf">extra</label><input type="radio" name="group-9H4mi" id="tab-iYoSIKK"><label for="tab-iYoSIKK">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ardour</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ardour-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="`+l+`" alt="ardour"></p><h3 id="kwave" tabindex="-1">Kwave <a class="header-anchor" href="#kwave" aria-hidden="true">#</a></h3><p><a href="https://apps.kde.org/zh-cn/kwave/" target="_blank" rel="noreferrer">Kwave</a> 是 KDE 开发的一款自由开源的音频编辑软件，可以录制、播放、导入和编辑许多音频文件，包括多声道文件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kwave/" target="_blank" rel="noreferrer">Kwave</a><sup>extra / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-tl8Un" id="tab-6Apa4z7" checked="checked"><label for="tab-6Apa4z7">extra</label><input type="radio" name="group-tl8Un" id="tab-DfLYkKO"><label for="tab-DfLYkKO">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kwave</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kwave-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="`+r+`" alt="kwave"></p><h3 id="audacity" tabindex="-1">Audacity <a class="header-anchor" href="#audacity" aria-hidden="true">#</a></h3><p><a href="https://www.audacityteam.org/" target="_blank" rel="noreferrer">Audacity</a> 是一款跨平台的自由开源音频编辑软件，用于录音和编辑音频。2021 年 4 月 30 日，Audacity 被 <a href="https://mu.se/" target="_blank" rel="noreferrer">Muse Group</a> 收购。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/audacity/" target="_blank" rel="noreferrer">Audacity</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-l5MGN" id="tab-K0IlKZD" checked="checked"><label for="tab-K0IlKZD">community</label><input type="radio" name="group-l5MGN" id="tab-AZ6F0NH"><label for="tab-AZ6F0NH">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">audacity</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">audacity-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="`+p+`" alt="audacity"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>Audacity 被 Muse Group 收购后，根据 <a href="https://fosspost.org/audacity-is-now-a-spyware/" target="_blank" rel="noreferrer">相关报道</a>，其隐私政策的变化显示该工具正在收集其用户的数据并与其它公司共享。</p><p>在各大开源社区中出现了许多愤怒的回应，<a href="https://github.com/audacity/audacity/issues/1213" target="_blank" rel="noreferrer">GitHub</a> 和 <a href="https://www.reddit.com/r/linux/comments/od3h8b/audacity_may_collect_data_necessary_for_law/" target="_blank" rel="noreferrer">Reddit</a> 上的用户纷纷呼吁尽快派生（Fork）该软件（已经有了）。</p><p>若对此有关切，可以使用派生的版本 <a href="https://aur.archlinux.org/packages/audiocity-git/" target="_blank" rel="noreferrer"><code>audiocity-git</code></a><sup>aur</sup>（功能没有改动）：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">audiocity-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者 <a href="https://aur.archlinux.org/packages/audacium-git/" target="_blank" rel="noreferrer">audacium</a><sup>aur</sup>（添加了新特性）：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">audacium-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="vcv-rack" tabindex="-1">VCV Rack <a class="header-anchor" href="#vcv-rack" aria-hidden="true">#</a></h3><p><a href="https://vcvrack.com/" target="_blank" rel="noreferrer">VCV Rack</a> 是一款开源可视化、模块化的音响合成器。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/community/x86_64/audacity/" target="_blank" rel="noreferrer">VCV Rack</a><sup>aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-7Z4KG" id="tab-XSWZ6Ud" checked="checked"><label for="tab-XSWZ6Ud">aur (bin)</label><input type="radio" name="group-7Z4KG" id="tab-DpgQ9Md"><label for="tab-DpgQ9Md">aur</label><input type="radio" name="group-7Z4KG" id="tab-BShwrly"><label for="tab-BShwrly">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vcvrack-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vcvrack</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vcvrack-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>在终端通过 <code>vcvrack</code> 命令启动 VCV Rack：</p><p><img src="`+t+`" alt="vcvrack"></p></li></ol><h2 id="🎛️-唱片骑师" tabindex="-1">🎛️ 唱片骑师 <a class="header-anchor" href="#🎛️-唱片骑师" aria-hidden="true">#</a></h2><h3 id="mixxx" tabindex="-1">Mixxx <a class="header-anchor" href="#mixxx" aria-hidden="true">#</a></h3><p><a href="https://mixxx.org/" target="_blank" rel="noreferrer">Mixxx</a> 集成了 DJ 使用数字音乐文件进行创造性现场混音所需的工具。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/mixxx/" target="_blank" rel="noreferrer">Mixxx</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-DQsPj" id="tab-P618tBE" checked="checked"><label for="tab-P618tBE">community</label><input type="radio" name="group-DQsPj" id="tab-0As7MH7"><label for="tab-0As7MH7">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mixxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mixxx-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="`+i+`" alt="mixxx"></p><h2 id="🎼-编曲软件" tabindex="-1">🎼 编曲软件 <a class="header-anchor" href="#🎼-编曲软件" aria-hidden="true">#</a></h2><h3 id="lmms" tabindex="-1">LMMS <a class="header-anchor" href="#lmms" aria-hidden="true">#</a></h3><p><a href="https://lmms.io/" target="_blank" rel="noreferrer">LMMS</a> 是免费自由开源并且跨平台的作曲工具。通过制作旋律和节拍，合成和混合音频，安排音频片段等方法创作音乐。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/lmms/" target="_blank" rel="noreferrer">LMMS</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--FV_D" id="tab-_4eH0xF" checked="checked"><label for="tab-_4eH0xF">community</label><input type="radio" name="group--FV_D" id="tab-dnYhQQC"><label for="tab-dnYhQQC">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lmms</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lmms-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="`+o+`" alt="lmms"></p><h3 id="musescore" tabindex="-1">MuseScore <a class="header-anchor" href="#musescore" aria-hidden="true">#</a></h3><p><a href="https://musescore.org/zh-hans" target="_blank" rel="noreferrer">MuseScore</a> 是 Muse Group 开发的一个跨平台的自由开源制谱软件。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/lmms/" target="_blank" rel="noreferrer">MuseScore</a><sup>community / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-GR3Ep" id="tab-a2nXGfi" checked="checked"><label for="tab-a2nXGfi">community</label><input type="radio" name="group-GR3Ep" id="tab-Wpao4dK"><label for="tab-Wpao4dK">cn (git)</label><input type="radio" name="group-GR3Ep" id="tab-MTRERVx"><label for="tab-MTRERVx">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">musescore</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">musescore-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/musescore-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="`+c+`" alt="musescore"></p><h2 id="🎙️-变声器" tabindex="-1">🎙️ 变声器 <a class="header-anchor" href="#🎙️-变声器" aria-hidden="true">#</a></h2><h3 id="lyrebird" tabindex="-1">Lyrebird <a class="header-anchor" href="#lyrebird" aria-hidden="true">#</a></h3><p><a href="https://github.com/lyrebird-voice-changer/lyrebird" target="_blank" rel="noreferrer">Lyrebird</a>是 自由开源且简单强大的 Linux 变声器，用 GTK 3 编写。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/lmms/" target="_blank" rel="noreferrer">Lyrebird</a><sup>aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lyrebird</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+d+`" alt="lyrebird"></p><h2 id="🗄️-管理与转换" tabindex="-1">🗄️ 管理与转换 <a class="header-anchor" href="#🗄️-管理与转换" aria-hidden="true">#</a></h2><h3 id="soundconverter" tabindex="-1">SoundConverter <a class="header-anchor" href="#soundconverter" aria-hidden="true">#</a></h3><p><a href="https://soundconverter.org/" target="_blank" rel="noreferrer">SoundConverter</a> 是 GNOME 桌面的音频文件转换器（这不影响在 Plasma 桌面环境下使用）。</p><p>安装 <a href="https://archlinux.org/packages/community/any/soundconverter/" target="_blank" rel="noreferrer">SoundConverter</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-uLVWc" id="tab-5aTh1w9" checked="checked"><label for="tab-5aTh1w9">community</label><input type="radio" name="group-uLVWc" id="tab-ToNPhif"><label for="tab-ToNPhif">aur (git)</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">soundconverter</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">soundconverter-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="`+u+'" alt="soundconverter"></p>',53),m=[b];function y(C,g,v,k,A,f){return e(),s("div",null,m)}const _=a(h,[["render",y]]);export{D as __pageData,_ as default};
