import{_ as s,c as a,o as n,a as l}from"./app.17cd6fdc.js";const F=JSON.parse('{"title":"Advanced APIs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Optional Global Settings and Manual configurations","slug":"optional-global-settings-and-manual-configurations","link":"#optional-global-settings-and-manual-configurations","children":[{"level":3,"title":"Local State Widgets","slug":"local-state-widgets","link":"#local-state-widgets","children":[]}]}],"relativePath":"utils/advance_api.md","lastUpdated":1679248851000}'),e={name:"utils/advance_api.md"},p=l(`<h1 id="advanced-apis" tabindex="-1">Advanced APIs <a class="header-anchor" href="#advanced-apis" aria-hidden="true">#</a></h1><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// give the current args from currentScreen</span></span>
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
<span class="line"></span></code></pre></div><h2 id="optional-global-settings-and-manual-configurations" tabindex="-1">Optional Global Settings and Manual configurations <a class="header-anchor" href="#optional-global-settings-and-manual-configurations" aria-hidden="true">#</a></h2><p>GetMaterialApp configures everything for you, but if you want to configure Get manually.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  navigatorKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  navigatorObservers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">GetObserver</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>You will also be able to use your own Middleware within <code>GetObserver</code>, this will not influence anything.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  navigatorKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  navigatorObservers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">GetObserver</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">MiddleWare</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">observer) </span><span style="color:#676E95;font-style:italic;">// Here</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>You can create <em>Global Settings</em> for <code>Get</code>. Just add <code>Get.config</code> to your code before pushing any route. Or do it directly in your <code>GetMaterialApp</code></p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">GetMaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  enableLog</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultTransition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Transition</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fade</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  opaqueRoute</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isOpaqueRouteDefault</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  popGesture</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isPopGestureEnable</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  transitionDuration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaultDurationTransition</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultGlobalState</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaultGlobalState</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">config</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  enableLog </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultPopGesture </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultTransition </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Transitions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cupertino</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>You can optionally redirect all the logging messages from <code>Get</code>. If you want to use your own, favourite logging package, and want to capture the logs there:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">GetMaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  enableLog</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  logWriterCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> localLogWriter</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">localLogWriter</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> text</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> {</span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> isError </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// pass the message to your favourite logging package here</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// please note that even if enableLog: false log messages will be pushed in this callback</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// you get check the flag if you want through GetConfig.isLogEnable</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="local-state-widgets" tabindex="-1">Local State Widgets <a class="header-anchor" href="#local-state-widgets" aria-hidden="true">#</a></h3><p>These Widgets allows you to manage a single value, and keep the state ephemeral and locally. We have flavours for Reactive and Simple. For instance, you might use them to toggle obscureText in a <code>TextField</code>, maybe create a custom Expandable Panel, or maybe modify the current index in <code>BottomNavigationBar</code> while changing the content of the body in a <code>Scaffold</code>.</p><h4 id="valuebuilder" tabindex="-1">ValueBuilder <a class="header-anchor" href="#valuebuilder" aria-hidden="true">#</a></h4><p>A simplification of <code>StatefulWidget</code> that works with a <code>.setState</code> callback that takes the updated value.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ValueBuilder</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;">&gt;(</span></span>
<span class="line"><span style="color:#A6ACCD;">  initialValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  builder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> updateFn) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Switch</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    onChanged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> updateFn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// same signature! you could use ( newValue ) =&gt; updateFn( newValue )</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// if you need to call something outside the builder method.</span></span>
<span class="line"><span style="color:#A6ACCD;">  onUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (value) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;Value updated: $</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#C3E88D;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onDispose</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;Widget unmounted&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><h4 id="obxvalue" tabindex="-1">ObxValue <a class="header-anchor" href="#obxvalue" aria-hidden="true">#</a></h4><p>Similar to <a href="#valuebuilder"><code>ValueBuilder</code></a>, but this is the Reactive version, you pass a Rx instance (remember the magical .obs?) and updates automatically... isn&#39;t it awesome?</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ObxValue</span><span style="color:#A6ACCD;">((data) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Switch</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        onChanged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Rx has a _callable_ function! You could use (flag) =&gt; data.value = flag,</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">false.</span><span style="color:#A6ACCD;">obs</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div>`,19),o=[p];function t(c,r,i,y,C,D){return n(),a("div",null,o)}const d=s(e,[["render",t]]);export{F as __pageData,d as default};
