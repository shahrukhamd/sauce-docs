"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[34093],{87557:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(74848),n=s(28453);s(11470),s(19365),s(86025);const i={id:"testcafe",title:"TestCafe on Sauce Labs",sidebar_label:"Using TestCafe"},a=void 0,l={id:"web-apps/automated-testing/testcafe",title:"TestCafe on Sauce Labs",description:"TestCafe is a testing framework that you can use to test your web apps remotely on Sauce Labs cloud using the saucectl CLI.",source:"@site/docs/web-apps/automated-testing/testcafe.md",sourceDirName:"web-apps/automated-testing",slug:"/web-apps/automated-testing/testcafe",permalink:"/sauce-docs/pr-preview/pr-2910/web-apps/automated-testing/testcafe",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/testcafe.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"testcafe",title:"TestCafe on Sauce Labs",sidebar_label:"Using TestCafe"},sidebar:"docs",previous:{title:"Limitations",permalink:"/sauce-docs/pr-preview/pr-2910/web-apps/automated-testing/cucumberjs-playwright/limitations"},next:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2910/web-apps/automated-testing/testcafe/quickstart"}},c={},d=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Supported Languages",id:"supported-languages",level:2},{value:"Supported Testing Platforms",id:"supported-testing-platforms",level:2},{value:"How to Get Started",id:"how-to-get-started",level:2},{value:"TestCafe Plugins for Sauce Labs",id:"testcafe-plugins-for-sauce-labs",level:3},{value:"Limitations",id:"limitations",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/DevExpress/testcafe",children:"TestCafe"})," is a testing framework that you can use to test your web apps remotely on Sauce Labs cloud using the ",(0,r.jsxs)(t.a,{href:"/dev/cli/saucectl",children:[(0,r.jsx)(t.code,{children:"saucectl"})," CLI"]}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsx)(t.p,{children:"Supported OS:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Windows 10 / Windows 11"}),"\n",(0,r.jsx)(t.li,{children:"macOS 10.15+"}),"\n",(0,r.jsx)(t.li,{children:"Linux"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"supported-languages",children:"Supported Languages"}),"\n",(0,r.jsx)(t.p,{children:"JavaScript and TypeScript are supported out of the box."}),"\n",(0,r.jsx)(t.h2,{id:"supported-testing-platforms",children:"Supported Testing Platforms"}),"\n",(0,r.jsx)(t.p,{children:"Sauce Labs supports the following test configurations for TestCafe:"}),"\n",(0,r.jsxs)("table",{id:"table-fw",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"TestCafe Version"}),(0,r.jsx)("th",{children:"Node.js Version"}),(0,r.jsx)("th",{children:"Supported Platforms"}),(0,r.jsx)("th",{children:"Supported Browsers"}),(0,r.jsx)("th",{children:"End of Life"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.6.2"}),(0,r.jsx)("td",{rowspan:"3",children:"20"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"July 23, 2025"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1, 16.2"]}),(0,r.jsx)("td",{children:"Safari"})]})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.6.1"}),(0,r.jsx)("td",{rowspan:"3",children:"20"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"June 26, 2025"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1, 16.2"]}),(0,r.jsx)("td",{children:"Safari"})]})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.6.0"}),(0,r.jsx)("td",{rowspan:"3",children:"20"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"May 28, 2025"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1, 16.2"]}),(0,r.jsx)("td",{children:"Safari"})]})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.5.0"}),(0,r.jsx)("td",{rowspan:"3",children:"20"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"April 15, 2025"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1, 16.2"]}),(0,r.jsx)("td",{children:"Safari"})]})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.4.0"}),(0,r.jsx)("td",{rowspan:"3",children:"20"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"December 6, 2024"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1, 16.2"]}),(0,r.jsx)("td",{children:"Safari"})]})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.3.0"}),(0,r.jsx)("td",{rowspan:"3",children:"18"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"September 28, 2024"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1"]}),(0,r.jsx)("td",{children:"Safari"})]})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.2.0"}),(0,r.jsx)("td",{rowspan:"3",children:"18"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"August 31, 2024"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1"]}),(0,r.jsx)("td",{children:"Safari"})]})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"3",children:"3.0.1"}),(0,r.jsx)("td",{rowspan:"3",children:"18"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,r.jsx)("td",{children:"Safari, Chrome, Firefox, Microsoft Edge"}),(0,r.jsx)("td",{rowspan:"3",children:"August 1, 2024"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"Windows:"})," 10, 11"]}),(0,r.jsx)("td",{children:"Chrome, Firefox, Microsoft Edge"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:"iOS:"})," 13.4, 14.5, 15.4, 16.0, 16.1"]}),(0,r.jsx)("td",{children:"Safari"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-get-started",children:"How to Get Started"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/web-apps/automated-testing/testcafe/quickstart",children:"Quickstart"}),": Use our demo repo to quickly set up and run a sample TestCafe project and test to see the results."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/web-apps/automated-testing/testcafe/yaml",children:"Run Your own Tests"}),": Customize ",(0,r.jsx)(t.code,{children:"saucectl"})," to run your existing tests just by modifying the ",(0,r.jsx)(t.code,{children:"config.yml"})," file for your project."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline",children:"Incorporate saucectl in your pipeline"}),": TestCafe on Sauce supports CI integrations with Cirlce CI, GitLab, Jenkins, and GitHub Actions."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"testcafe-plugins-for-sauce-labs",children:"TestCafe Plugins for Sauce Labs"}),"\n",(0,r.jsxs)(t.p,{children:["If you prefer to stay in TestCafe, try the new ",(0,r.jsx)(t.a,{href:"https://github.com/DevExpress/testcafe-browser-provider-saucelabs",children:"TestCafe Sauce Labs Plugin"}),". Connect to your Sauce Labs account from within your TestCafe project to configure and run your tests directly from TestCafe.\nIf all you want is to publish your TestCafe test results to Sauce Labs (but not run on Sauce Labs), check out our ",(0,r.jsx)(t.a,{href:"https://github.com/saucelabs/testcafe-reporter",children:"TestCafe reporter"}),"!"]}),"\n",(0,r.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(t.p,{children:["Please check the ",(0,r.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2910/web-apps/automated-testing/testcafe/limitations",children:"Limitations Page"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>a});s(96540);var r=s(18215);const n={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,a),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>v});var r=s(96540),n=s(18215),i=s(23104),a=s(56347),l=s(205),c=s(57485),d=s(31682),o=s(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function x(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const n=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,i=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,u]=p({queryString:s,groupId:n}),[f,j]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,o.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:n}),b=(()=>{const e=d??f;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(74848);function g(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const t=e.currentTarget,s=c.indexOf(t),n=l[s].value;n!==r&&(d(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function w(e){let{lazy:t,children:s,selectedValue:n}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...e,...t}),(0,m.jsx)(w,{...e,...t})]})}function v(e){const t=(0,j.A)();return(0,m.jsx)(S,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);