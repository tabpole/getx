import{_ as e,c as t,o as a,a as n}from"./app.d816eea3.js";const g=JSON.parse('{"title":"Why Getx","description":"","frontmatter":{"prev":{"text":"Install on Linux","link":"getting_started/install_on_linux.md"},"next":{"text":"Create Project","link":"commands/project.md"}},"headers":[{"level":2,"title":"Reason 1","slug":"reason-1","link":"#reason-1","children":[]},{"level":2,"title":"Reason 2","slug":"reason-2","link":"#reason-2","children":[]},{"level":2,"title":"Reason 3","slug":"reason-3","link":"#reason-3","children":[]},{"level":2,"title":"Reason 4","slug":"reason-4","link":"#reason-4","children":[]}],"relativePath":"getting_started/why_getx.md","lastUpdated":1679236622000}'),o={name:"getting_started/why_getx.md"},s=n('<h1 id="why-getx" tabindex="-1">Why Getx <a class="header-anchor" href="#why-getx" aria-hidden="true">#</a></h1><h2 id="reason-1" tabindex="-1">Reason 1 <a class="header-anchor" href="#reason-1" aria-hidden="true">#</a></h2><p>Many times after a Flutter update, many of your packages will break. Sometimes compilation errors happen, errors often appear that there are still no answers about, and the developer needs to know where the error came from, track the error, only then try to open an issue in the corresponding repository, and see its problem solved. Get centralizes the main resources for development (State, dependency and route management), allowing you to add a single package to your pubspec, and start working. After a Flutter update, the only thing you need to do is update the Get dependency, and get to work. Get also resolves compatibility issues. How many times a version of a package is not compatible with the version of another, because one uses a dependency in one version, and the other in another version? This is also not a concern using Get, as everything is in the same package and is fully compatible.</p><h2 id="reason-2" tabindex="-1">Reason 2 <a class="header-anchor" href="#reason-2" aria-hidden="true">#</a></h2><p>Flutter is easy, Flutter is incredible, but Flutter still has some boilerplate that may be unwanted for most developers, such as Navigator.of(context).push (context, builder [...]. Get simplifies development. Instead of writing 8 lines of code to just call a route, you can just do it: Get.to(Home()) and you&#39;re done, you&#39;ll go to the next page. Dynamic web urls are a really painful thing to do with Flutter currently, and that with GetX is stupidly simple. Managing states in Flutter, and managing dependencies is also something that generates a lot of discussion, as there are hundreds of patterns in the pub. But there is nothing as easy as adding a &quot;.obs&quot; at the end of your variable, and place your widget inside an Obx, and that&#39;s it, all updates to that variable will be automatically updated on the screen.</p><h2 id="reason-3" tabindex="-1">Reason 3 <a class="header-anchor" href="#reason-3" aria-hidden="true">#</a></h2><p>Ease without worrying about performance. Flutter&#39;s performance is already amazing, but imagine that you use a state manager, and a locator to distribute your blocs/stores/controllers/ etc. classes. You will have to manually call the exclusion of that dependency when you don&#39;t need it. But have you ever thought of simply using your controller, and when it was no longer being used by anyone, it would simply be deleted from memory? That&#39;s what GetX does. With SmartManagement, everything that is not being used is deleted from memory, and you shouldn&#39;t have to worry about anything but programming. You will be assured that you are consuming the minimum necessary resources, without even having created a logic for this.</p><h2 id="reason-4" tabindex="-1">Reason 4 <a class="header-anchor" href="#reason-4" aria-hidden="true">#</a></h2><p>Actual decoupling. You may have heard the concept &quot;separate the view from the business logic&quot;. This is not a peculiarity of BLoC, MVC, MVVM, and any other standard on the market has this concept. However, this concept can often be mitigated in Flutter due to the use of context. If you need context to find an InheritedWidget, you need it in the view, or pass the context by parameter. I particularly find this solution very ugly, and to work in teams we will always have a dependence on View&#39;s business logic. Getx is unorthodox with the standard approach, and while it does not completely ban the use of StatefulWidgets, InitState, etc., it always has a similar approach that can be cleaner. Controllers have life cycles, and when you need to make an APIREST request for example, you don&#39;t depend on anything in the view. You can use onInit to initiate the http call, and when the data arrives, the variables will be populated. As GetX is fully reactive (really, and works under streams), once the items are filled, all widgets that use that variable will be automatically updated in the view. This allows people with UI expertise to work only with widgets, and not have to send anything to business logic other than user events (like clicking a button), while people working with business logic will be free to create and test the business logic separately.</p>',9),i=[s];function r(l,d,h,u,c,p){return a(),t("div",null,i)}const m=e(o,[["render",r]]);export{g as __pageData,m as default};
