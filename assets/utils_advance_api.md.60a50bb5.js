import{_ as s,c as n,o as a,a as l}from"./app.d816eea3.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Other Advanced APIs","slug":"other-advanced-apis","link":"#other-advanced-apis","children":[]}],"relativePath":"utils/advance_api.md","lastUpdated":null}'),e={name:"utils/advance_api.md"},p=l(`<h2 id="other-advanced-apis" tabindex="-1">Other Advanced APIs <a class="header-anchor" href="#other-advanced-apis" aria-hidden="true">#</a></h2><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// give the current args from currentScreen</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">arguments</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// give name of previous route</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">previousRoute</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// give the raw route to access for example, rawRoute.isFirst()</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rawRoute</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// give access to Routing API from GetObserver</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">routing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// check if snackbar is open</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isSnackbarOpen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// check if dialog is open</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isDialogOpen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// check if bottomsheet is open</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isBottomSheetOpen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// remove one route.</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeRoute</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// back repeatedly until the predicate returns true.</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">until</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// go to next route and remove all the previous routes until the predicate returns true.</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">offUntil</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// go to next named route and remove all the previous routes until the predicate returns true.</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">offNamedUntil</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Check in what platform the app is running</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isAndroid</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isIOS</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isMacOS</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isWindows</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isLinux</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isFuchsia</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Check the device type</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isMobile</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isDesktop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//All platforms are supported independently in web!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//You can tell if you are running inside a browser</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//on Windows, iOS, OSX, Android, etc.</span></span>
<span class="line"><span style="color:#FFCB6B;">GetPlatform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isWeb</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Equivalent to : MediaQuery.of(context).size.height,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// but immutable.</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Gives the current context of the Navigator.</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">context</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Gives the context of the snackbar/dialog/bottomsheet in the foreground, anywhere in your code.</span></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">contextOverlay</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Note: the following methods are extensions on context. Since you</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// have access to context in any place of your UI, you can use it anywhere in the UI code</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// If you need a changeable height/width (like Desktop or browser windows that can be scaled) you will need to use context.</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Gives you the power to define half the screen, a third of it and so on.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Useful for responsive applications.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// param dividedBy (double) optional - default: 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// param reducedBy (double) optional - default: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">heightTransformer</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">widthTransformer</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Similar to MediaQuery.of(context).size</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mediaQuerySize</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Similar to MediaQuery.of(context).padding</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mediaQueryPadding</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Similar to MediaQuery.of(context).viewPadding</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mediaQueryViewPadding</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Similar to MediaQuery.of(context).viewInsets;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mediaQueryViewInsets</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Similar to MediaQuery.of(context).orientation;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">orientation</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Check if device is on landscape mode</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isLandscape</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Check if device is on portrait mode</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isPortrait</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Similar to MediaQuery.of(context).devicePixelRatio;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">devicePixelRatio</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Similar to MediaQuery.of(context).textScaleFactor;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">textScaleFactor</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Get the shortestSide from screen</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mediaQueryShortestSide</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// True if width be larger than 800</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showNavbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// True if the shortestSide is smaller than 600p</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isPhone</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// True if the shortestSide is largest than 600p</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isSmallTablet</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// True if the shortestSide is largest than 720p</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isLargeTablet</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// True if the current device is Tablet</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isTablet</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// Returns a value&lt;T&gt; according to the screen size</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// can give value for:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// watch: if the shortestSide is smaller than 300</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// mobile: if the shortestSide is smaller than 600</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// tablet: if the shortestSide is smaller than 1200</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// desktop: if width is largest than 1200</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">responsiveValue</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">&gt;()</span></span>
<span class="line"></span></code></pre></div>`,2),t=[p];function o(c,i,r,y,F,A){return a(),n("div",null,t)}const d=s(e,[["render",o]]);export{D as __pageData,d as default};
