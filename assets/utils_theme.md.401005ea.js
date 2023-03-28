import{_ as e,c as a,o as s,a as t}from"./app.17cd6fdc.js";const u=JSON.parse('{"title":"Change Theme","description":"","frontmatter":{},"headers":[],"relativePath":"utils/theme.md","lastUpdated":1679248851000}'),n={name:"utils/theme.md"},o=t(`<h1 id="change-theme" tabindex="-1">Change Theme <a class="header-anchor" href="#change-theme" aria-hidden="true">#</a></h1><p>Please do not use any higher level widget than <code>GetMaterialApp</code> in order to update it. This can trigger duplicate keys. A lot of people are used to the prehistoric approach of creating a &quot;ThemeProvider&quot; widget just to change the theme of your app, and this is definitely NOT necessary with <strong>GetX™</strong>.</p><p>You can create your custom theme and simply add it within <code>Get.changeTheme</code> without any boilerplate for that:</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">changeTheme</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">ThemeData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">light</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>If you want to create something like a button that changes the Theme in <code>onTap</code>, you can combine two <strong>GetX™</strong> APIs for that:</p><ul><li>The api that checks if the dark <code>Theme</code> is being used.</li><li>And the <code>Theme</code> Change API, you can just put this within an <code>onPressed</code>:</li></ul><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">changeTheme</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isDarkMode</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ThemeData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">light</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ThemeData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dark</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>When <code>.darkmode</code> is activated, it will switch to the <em>light theme</em>, and when the <em>light theme</em> becomes active, it will change to <em>dark theme</em>.</p>`,8),l=[o];function p(c,r,i,h,d,m){return s(),a("div",null,l)}const F=e(n,[["render",p]]);export{u as __pageData,F as default};
