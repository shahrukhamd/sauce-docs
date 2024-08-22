"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[37035],{44682:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=n(74848),i=n(28453),t=n(11470),r=n(19365),l=n(86025);const c={id:"deque",title:"Deque axe\u2122 Integration",sidebar_label:"Deque axe",description:"Link your Sauce Labs account with axe to add accessibility testing to your existing tests.",keywords:["accessibility-testing","accessibility","automated-testing","how-to"]},o=void 0,u={id:"basics/integrations/deque",title:"Deque axe\u2122 Integration",description:"Link your Sauce Labs account with axe to add accessibility testing to your existing tests.",source:"@site/docs/basics/integrations/deque.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/deque",permalink:"/sauce-docs/pr-preview/pr-2902/basics/integrations/deque",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/deque.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"deque",title:"Deque axe\u2122 Integration",sidebar_label:"Deque axe",description:"Link your Sauce Labs account with axe to add accessibility testing to your existing tests.",keywords:["accessibility-testing","accessibility","automated-testing","how-to"]},sidebar:"docs",previous:{title:"TeamCity",permalink:"/sauce-docs/pr-preview/pr-2902/basics/integrations/teamcity"},next:{title:"Evinced",permalink:"/sauce-docs/pr-preview/pr-2902/basics/integrations/evinced"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Sauce Labs UI",id:"sauce-labs-ui",level:2},{value:"Language Specific Examples",id:"language-specific-examples",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://www.deque.com/axe/",children:"Deque's axe\u2122"})," is one of the world's leading digital accessibility toolkits. The ",(0,a.jsx)(s.code,{children:"axe-core"})," library provided by Deque allows you to inject functionality into your tests in order to scan content and return an ",(0,a.jsx)(s.code,{children:"a11y"})," score."]}),"\n",(0,a.jsx)(s.p,{children:"Below is a guide to set up the Sauce Labs integration. This integration allows you to run your accessibility tests on our platform with axe\u2122."}),"\n",(0,a.jsx)(s.admonition,{title:"why should you care about accessibility testing?",type:"info",children:(0,a.jsxs)(s.p,{children:["Check out the ",(0,a.jsx)(s.a,{href:"https://www.deque.com/web-accessibility-beginners-guide/#what-is-a11y",children:"Deque Accessibility Guide"})," for further information."]})}),"\n",(0,a.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["A Sauce Labs account (",(0,a.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://axe.deque.com/plans",children:"A Deque Account"})," (Optional)"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"sauce-labs-ui",children:"Sauce Labs UI"}),"\n",(0,a.jsx)(s.p,{children:"Sauce Labs will display the accessibility results in our UI as a tab in the job itself:"}),"\n",(0,a.jsx)("img",{src:(0,l.A)("img/accessibility/example.png"),alt:"Accessibility Example in Sauce UI"}),"\n",(0,a.jsx)(s.h2,{id:"language-specific-examples",children:"Language Specific Examples"}),"\n",(0,a.jsxs)(t.A,{groupId:"axe-lang-examples",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,a.jsxs)(r.A,{value:"java",children:["We highly recommend using the Java ",(0,a.jsx)(s.a,{href:"https://opensource.saucelabs.com/sauce_bindings/",children:"Sauce Bindings"}),".\nCheck out the description and examples for the new ",(0,a.jsx)(s.a,{href:"https://opensource.saucelabs.com/sauce_bindings/accessibility",children:"Accessibility functionality"}),".","The following is information on how to use the Java Deque Axe Selenium library directly:",(0,a.jsx)(s.strong,{children:"Requirements"}),"Add the following to your ",(0,a.jsx)(s.code,{children:"pom.xml"}),":",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-xml",children:"\x3c!-- https://mvnrepository.com/artifact/com.deque.html.axe-core/selenium --\x3e\n<dependency>\n  <groupId>com.deque.html.axe-core</groupId>\n  <artifactId>selenium</artifactId>\n  <version>4.2.2</version>\n</dependency>\n"})}),(0,a.jsx)(s.strong,{children:"Usage"}),"This method populates results on the Sauce Labs Accessibility tab:",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"new AxeBuilder().analyze(driver);\n"})}),(0,a.jsx)(s.strong,{children:"Example Code"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'reference title="Selenium Accessibility Test"',children:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/accessibility/DequeAxeTest.java\n"})})]}),(0,a.jsxs)(r.A,{value:"js",children:[(0,a.jsx)(s.strong,{children:"Requirements"}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://webdriver.io/docs/gettingstarted/",children:"Install and Set up"})," WebdriverIO."]}),"\n",(0,a.jsx)(s.p,{children:"This documentation shows you how to run a test locally, and also how to troubleshoot potential issues with your code before running on Sauce Labs."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Add ",(0,a.jsx)(s.a,{href:"https://webdriver.io/docs/sauce-service",children:"Sauce Service"})," to WebdriverIO."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Add the following dependency to your ",(0,a.jsx)(s.code,{children:"package.json"})," file:"]}),"\n"]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:'"@axe-core/webdriverio": "4.2.1"\n'})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["In the ",(0,a.jsx)(s.code,{children:"wdio.conf.js"})," file, create an object called ",(0,a.jsx)(s.code,{children:"axeWdio"}),".\nThis object creates a new ",(0,a.jsx)(s.code,{children:"AxeWebdriverIO"})," instance which accepts the current browser object from WDIO as an argument."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"before: function (capabilities, specs, browser) {\n    const axeWdio = new AxeWebdriverIO({\n        client: browser\n    })\n}\n"})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["In the ",(0,a.jsx)(s.code,{children:"wdio.conf.js"})," file, add a command for getting basic accessibility results."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"browser.addCommand('getAxeResults', function (name) {\nreturn axeWdio.analyze()\n})\n"})}),(0,a.jsx)(s.strong,{children:"Usage"}),"This method populates results on the Sauce Labs Accessibility tab:",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"browser.getAxeResults()\n"})})]}),(0,a.jsxs)(r.A,{value:"python",children:["We highly recommend using the Python ",(0,a.jsx)(s.a,{href:"https://opensource.saucelabs.com/sauce_bindings/",children:"Sauce Bindings"}),".\nCheck out the description and examples for the new ",(0,a.jsx)(s.a,{href:"https://opensource.saucelabs.com/sauce_bindings/accessibility",children:"Accessibility functionality"}),".","The following is information on how to use the Python ",(0,a.jsx)(s.code,{children:"sa11y"})," library directly:",(0,a.jsx)(s.strong,{children:"Requirements"}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Install Sa11y."}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"pip install sa11y\n"})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Import the ",(0,a.jsx)(s.code,{children:"Analyze"})," class in your file."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"from sa11y.analyze import Analyze\n"})}),(0,a.jsx)(s.strong,{children:"Usage"}),"This method populates results on the Sauce Labs Accessibility tab:",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"Analyze(driver).results()\n"})}),(0,a.jsx)(s.strong,{children:"Example Code"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",metastring:'reference title="Accessibility Test with Sa11y"',children:"https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/accessibility/test_sa11y.py\n"})})]}),(0,a.jsxs)(r.A,{value:"ruby",children:["We highly recommend using the Ruby ",(0,a.jsx)(s.a,{href:"https://opensource.saucelabs.com/sauce_bindings/",children:"Sauce Bindings"}),".\nCheck out the description and examples for the new ",(0,a.jsx)(s.a,{href:"https://opensource.saucelabs.com/sauce_bindings/accessibility",children:"Accessibility functionality"}),".","The following is information on how to use the Ruby ",(0,a.jsx)(s.code,{children:"sa11y"})," library directly:",(0,a.jsx)(s.strong,{children:"Requirements"}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Add ",(0,a.jsx)(s.code,{children:"sa11y"})," to your ",(0,a.jsx)(s.code,{children:"gemfile"}),":"]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"gem 'sa11y', '~> 0.2.1'\n"})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Require the ",(0,a.jsx)(s.code,{children:"Analyze"})," class in your file:"]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ruby",children:"require 'sa11y/analyze'\n"})}),(0,a.jsx)(s.strong,{children:"Usage"}),"This method populates results on the Sauce Labs Accessibility tab:",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ruby",children:"Sa11y::Analyze.new(driver).results\n"})}),(0,a.jsx)(s.strong,{children:"Example Code"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ruby",metastring:'reference title="Accessibility Test with Sa11y"',children:"https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/sauce-features/accessibility/spec/sa11y_spec.rb\n"})})]}),(0,a.jsxs)(r.A,{value:"csharp",children:["To get accessibility results with C# and .NET, we recommend using ",(0,a.jsx)(s.a,{href:"https://github.com/TroyWalshProf/SeleniumAxeDotnet/",children:"Selenium.Axe for .NET"}),", version 3.0 or higher.",(0,a.jsx)(s.strong,{children:"Requirements"}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Install via NuGet, in the Package Manager Console."}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"Install-Package Selenium.Axe\n"})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Import the namespace."}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-csharp",children:"using Selenium.Axe;\n"})}),(0,a.jsx)(s.strong,{children:"Usage"}),"This method populates results on the Sauce Labs Accessibility tab:",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-csharp",children:"AxeResult axeResult = new AxeBuilder(webDriver).Analyze();\n"})}),"For more detailed usage, see ",(0,a.jsx)(s.a,{href:"https://troywalshprof.github.io/SeleniumAxeDotnet/#/",children:"Selenium.Axe for .NET"}),"."]})]}),"\n",(0,a.jsx)(s.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://www.deque.com/saucelabs/get-started/",children:"Deque Sauce Labs Integration Documentation"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://axe.deque.com/axe-devtools-mobile/get-started",children:"Deque axe DevTools Mobile - for Native Mobile App Testing On Real Devices"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://opensource.saucelabs.com/sauce_bindings/accessibility",children:"Sauce Bindings Accessibility Feature"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.a,{href:"https://github.com/dequelabs/axe-core-maven-html",children:["Deque ",(0,a.jsx)(s.code,{children:"axe-core"})," Selenium Integration for Java"]})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/sa11y",children:"Sa11y - Selenium Accessibility for Python & Ruby"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.a,{href:"https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverio",children:["Deque ",(0,a.jsx)(s.code,{children:"axe-core"})," Example WebdriverIO Project"]})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.a,{href:"https://www.npmjs.com/package/@axe-core/webdriverio",children:["Documentation about the chainable ",(0,a.jsx)(s.code,{children:"axe"})," API for WebdriverIO"]})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/TroyWalshProf/SeleniumAxeDotnet/",children:"Selenium.Axe for .NET"})}),"\n"]})]})}function b(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>r});n(96540);var a=n(18215);const i={tabItem:"tabItem_Ymn6"};var t=n(74848);function r(e){let{children:s,hidden:n,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>w});var a=n(96540),i=n(18215),t=n(23104),r=n(56347),l=n(205),c=n(57485),o=n(31682),u=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:i}}=e;return{value:s,label:n,attributes:a,default:i}}))}(n);return function(e){const s=(0,o.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function x(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function b(e){let{queryString:s=!1,groupId:n}=e;const i=(0,r.W6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(i.location.search);s.set(t,e),i.replace({...i.location,search:s.toString()})}),[t,i])]}function p(e){const{defaultValue:s,queryString:n=!1,groupId:i}=e,t=h(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:t}))),[o,d]=b({queryString:n,groupId:i}),[p,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[i,t]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:i}),g=(()=>{const e=o??p;return x({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,t]),tabValues:t}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function y(e){let{className:s,block:n,selectedValue:a,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),u=e=>{const s=e.currentTarget,n=c.indexOf(s),i=l[n].value;i!==a&&(o(s),r(i))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>c.push(e),onKeyDown:d,onClick:u,...t,className:(0,i.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function f(e){let{lazy:s,children:n,selectedValue:i}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function v(e){const s=p(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(y,{...e,...s}),(0,j.jsx)(f,{...e,...s})]})}function w(e){const s=(0,m.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(96540);const i={},t=a.createContext(i);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);