"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94651],{32287:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(74848),s=t(28453),a=t(11470),i=t(19365),o=t(86025);const l={id:"error-reporting",title:"Setting Up Backtrace for your Real Device Tests",sidebar_label:"Set Up Error Reporting",description:"Link your Sauce Labs real device tests with Backtrace to view errors and crashes."},c=void 0,d={id:"mobile-apps/live-testing/error-reporting",title:"Setting Up Backtrace for your Real Device Tests",description:"Link your Sauce Labs real device tests with Backtrace to view errors and crashes.",source:"@site/docs/mobile-apps/live-testing/error-reporting.md",sourceDirName:"mobile-apps/live-testing",slug:"/mobile-apps/live-testing/error-reporting",permalink:"/sauce-docs/pr-preview/pr-2910/mobile-apps/live-testing/error-reporting",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/live-testing/error-reporting.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"error-reporting",title:"Setting Up Backtrace for your Real Device Tests",sidebar_label:"Set Up Error Reporting",description:"Link your Sauce Labs real device tests with Backtrace to view errors and crashes."},sidebar:"docs",previous:{title:"Testing Apple Pay",permalink:"/sauce-docs/pr-preview/pr-2910/mobile-apps/live-testing/testing-apple-pay"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2910/mobile-apps/automated-testing"}},u={},h=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Create Custom Attributes",id:"create-custom-attributes",level:2},{value:"Integrate the Backtrace SDK",id:"integrate-the-backtrace-sdk",level:2},{value:"Enable the Backtrace Integration in Sauce Labs",id:"enable-the-backtrace-integration-in-sauce-labs",level:2},{value:"Run your Real Device Test",id:"run-your-real-device-test",level:2},{value:"View Test Results in Sauce Labs",id:"view-test-results-in-sauce-labs",level:2},{value:"View Errors and Crashes in Backtrace",id:"view-errors-and-crashes-in-backtrace",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Detecting errors and crashes and resolving them early on is key to the success of your app."}),"\n",(0,n.jsx)(r.p,{children:"After you\u2019ve completed the steps on this page, errors and crashes associated with your real device tests (automated or live) will be available for you in Sauce Labs."}),"\n","\n",(0,n.jsx)(r.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,n.jsxs)("table",{id:"supported-platforms",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Supported Platforms"}),(0,n.jsx)("th",{children:"Supported Systems"}),(0,n.jsx)("th",{children:"Supported Features"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowspan:"2",children:"Real devices"}),(0,n.jsx)("td",{children:"Android"}),(0,n.jsx)("td",{children:"Errors and Crashes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"iOS"}),(0,n.jsx)("td",{children:"Errors"})]})]})]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Crashes for iOS apps are not supported when running real device tests in Sauce Labs with Backtrace."})}),"\n",(0,n.jsx)(r.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A Sauce Labs account (",(0,n.jsx)(r.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"log in"})," or sign up for a ",(0,n.jsx)(r.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:["A Backtrace account (",(0,n.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,n.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,n.jsx)(r.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["A Backtrace project and an API token with object",":get"," and query",":post"," capabilities."]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"Generate an API Token",type:"tip",children:(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["In the Backtrace Console, go to ",(0,n.jsx)(r.strong,{children:"Project settings > API tokens"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"New"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Select the ",(0,n.jsxs)(r.strong,{children:["object",":get"]})," and ",(0,n.jsxs)(r.strong,{children:["query",":post"]})," capabilities."]}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"Create"}),"."]}),"\n"]})}),"\n",(0,n.jsx)(r.h2,{id:"create-custom-attributes",children:"Create Custom Attributes"}),"\n",(0,n.jsx)(r.p,{children:"Custom attributes are required to link the correct errors and crashes that occurred on the selected device and for the duration of the test."}),"\n",(0,n.jsx)(r.p,{children:"The following custom attributes are required:"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(i.A,{value:"android",label:"Android",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Format"}),(0,n.jsx)(r.th,{children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"application.package"})}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"String"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"device.model"})}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"String"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error.type"})}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"String"})]})]})]})}),(0,n.jsx)(i.A,{value:"ios",label:"iOS",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Format"}),(0,n.jsx)(r.th,{children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"application.identifier"})}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"String"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"device.machine"})}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"String"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error.type"})}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"String"})]})]})]})})]}),"\n",(0,n.jsx)(r.p,{children:"To add the attributes:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["In the Backtrace Console, go to ",(0,n.jsx)(r.strong,{children:"Project settings > Attributes"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"+"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Enter the values for the required fields."}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"Create"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Repeat steps 2 to 4 for each required attribute."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["For more information about attributes, see ",(0,n.jsx)(r.a,{href:"/error-reporting/project-setup/attributes/",children:"Indexing Attributes"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"integrate-the-backtrace-sdk",children:"Integrate the Backtrace SDK"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(i.A,{value:"android",label:"Android",children:["To integrate the Backtrace SDK with your Android app, see ",(0,n.jsx)(r.a,{href:"/error-reporting/platform-integrations/android/setup/",children:"Setting Up Backtrace for Android"}),"."]}),(0,n.jsxs)(i.A,{value:"ios",label:"iOS",children:["To integrate the Backtrace SDK with your iOS app, see the ",(0,n.jsx)(r.a,{href:"/error-reporting/platform-integrations/ios/setup/",children:"Setting Up Backtrace for iOS"}),"."]})]}),"\n",(0,n.jsx)(r.h2,{id:"enable-the-backtrace-integration-in-sauce-labs",children:"Enable the Backtrace Integration in Sauce Labs"}),"\n",(0,n.jsx)(r.p,{children:"This enables the Backtrace integration for all users in your organization. Once enabled, only organization admins can update the settings or disable the integration."}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"The Backtrace integration is specific to the data center that is active for your Sauce Labs account during setup. If you have access to multiple data centers, you must switch into each data center and complete the steps below to integrate Backtrace."})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["From your Sauce Labs account, go to the ",(0,n.jsx)(r.strong,{children:"Test Results"})," details page (live or automated) for a real device."]}),"\n",(0,n.jsxs)(r.li,{children:["From the bottom of the screen, select the ",(0,n.jsx)(r.strong,{children:"Error & Crash Reporting"})," tab."]}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"Link with Backtrace"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Enter the ",(0,n.jsx)(r.strong,{children:"Project Name"}),", ",(0,n.jsx)(r.strong,{children:"Dashboard URL"}),", and ",(0,n.jsx)(r.strong,{children:"API Token"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["If you are an organization admin, you can also enable the Backtrace integration from the ",(0,n.jsx)(r.a,{href:"https://app.saucelabs.com/integrations",children:(0,n.jsx)(r.strong,{children:"Integrations"})})," page."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Only one subdomain, project, and API token is supported per organization."})}),"\n",(0,n.jsx)(r.h2,{id:"run-your-real-device-test",children:"Run your Real Device Test"}),"\n",(0,n.jsx)(r.p,{children:"Throw an error or a crash to test your mobile app."}),"\n",(0,n.jsxs)(r.p,{children:["For information on how to run your real device test (live or automated), see ",(0,n.jsx)(r.a,{href:"/mobile-apps/",children:"Mobile App Testing"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"view-test-results-in-sauce-labs",children:"View Test Results in Sauce Labs"}),"\n",(0,n.jsx)(r.p,{children:"After running a real device test with the Backtrace SDK integrated into your Android or iOS app, you can view errors and crashes in Sauce Labs."}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Go to the ",(0,n.jsx)(r.strong,{children:"Test Results"})," details page (live or automated) for a real device."]}),"\n",(0,n.jsxs)(r.li,{children:["From the bottom of the screen, select the ",(0,n.jsx)(r.strong,{children:"Error & Crash Reporting"})," tab."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/error-reporting/real-devices/real-device-tests.webp"),alt:""}),"\n",(0,n.jsx)(r.h2,{id:"view-errors-and-crashes-in-backtrace",children:"View Errors and Crashes in Backtrace"}),"\n",(0,n.jsxs)(r.p,{children:["From the ",(0,n.jsx)(r.strong,{children:"Error & Crash Reporting"})," tab, click any link to view more details (View Errors, View Crashes, Backtrace Dashboard) in the Backtrace Console."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/error-reporting/real-devices/real-device-tests-backtrace.png"),alt:""}),"\n",(0,n.jsxs)(r.p,{children:["For more information about how to view and analyze error and crash data in Backtrace, see ",(0,n.jsx)(r.a,{href:"/error-reporting/web-console/getting-started/",children:"Web Console Getting Started"}),"."]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(96540),s=t(18215),a=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function j(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,u]=x({queryString:t,groupId:s}),[j,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),g=(()=>{const e=c??j;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),s=o[t].value;s!==n&&(c(r),i(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function f(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function k(e){const r=j(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,m.jsx)(v,{...e,...r}),(0,m.jsx)(f,{...e,...r})]})}function y(e){const r=(0,b.A)();return(0,m.jsx)(k,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);