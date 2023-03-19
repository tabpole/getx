import{_ as s,c as n,o as a,a as l}from"./app.d816eea3.js";const i=JSON.parse('{"title":"Tests","description":"","frontmatter":{},"headers":[],"relativePath":"testing/test.md","lastUpdated":null}'),p={name:"testing/test.md"},o=l(`<h1 id="tests" tabindex="-1">Tests <a class="header-anchor" href="#tests" aria-hidden="true">#</a></h1><p>You can test your controllers like any other class, including their lifecycles:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Controller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetxController</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">@override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onInit</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onInit</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//Change value to name2</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;name2&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">@override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onClose</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onClose</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;name1&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">obs</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">changeName</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;name3&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">Test the state of the reactive variable &quot;name&quot; across all of its lifecycles&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/// You can test the controller without the lifecycle,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /// but it&#39;s not recommended unless you&#39;re not using</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ///  GetX dependency injection</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> controller </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Controller</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;name1&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/// If you are using it, you can test everything,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /// including the state of the application after each lifecycle.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#A6ACCD;">(controller)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// onInit was called</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;name2&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/// Test your functions</span></span>
<span class="line"><span style="color:#A6ACCD;">    controller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">changeName</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;name3&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/// onClose was called</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">Controller</span><span style="color:#A6ACCD;">&gt;()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function t(c,r,A,C,y,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
