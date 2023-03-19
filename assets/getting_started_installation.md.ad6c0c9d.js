import{_ as e,c as a,o as t,a as s}from"./app.93298e25.js";const h=JSON.parse('{"title":"Install Docker on Linux","description":"","frontmatter":{"prev":{"text":"Overview","link":"/getting_started/overview.md"},"next":{"text":"Remove from Linux","link":"getting_started/uninstall_from_linux.md"}},"headers":[{"level":2,"title":"System update & upgrade","slug":"system-update-upgrade","link":"#system-update-upgrade","children":[]}],"relativePath":"getting_started/installation.md","lastUpdated":1679229744000}'),n={name:"getting_started/installation.md"},l=s(`<h1 id="install-docker-on-linux" tabindex="-1">Install Docker on Linux <a class="header-anchor" href="#install-docker-on-linux" aria-hidden="true">#</a></h1><p>Sequential command list to install Docker on Linux</p><h2 id="system-update-upgrade" tabindex="-1">System update &amp; upgrade <a class="header-anchor" href="#system-update-upgrade" aria-hidden="true">#</a></h2><p>To update your Linux system apply the following commands sequentially.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span></span>
<span class="line"></span></code></pre></div><p>sudo apt update updates the package index of available software packages while sudo apt upgrade upgrades all currently installed packages on a Debian-based Linux system to their latest available versions. These commands should be run periodically to keep the system up-to-date.</p>`,6),o=[l];function p(i,r,d,c,u,_){return t(),a("div",null,o)}const g=e(n,[["render",p]]);export{h as __pageData,g as default};
