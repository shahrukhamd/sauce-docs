"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[41333],{37235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(74848),o=n(28453),s=n(86025);n(11470),n(19365);const i={id:"executing-from-cucumber",title:"Executing from Cucumber",hide_title:!0,sidebar_label:"Executing from Cucumber",keywords:["api-testing","how-to","cucumber","bdd"]},a="Executing from Cucumber",l={id:"api-testing/on-prem/how-to/executing-from-cucumber",title:"Executing from Cucumber",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/executing-from-cucumber.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/executing-from-cucumber",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/how-to/executing-from-cucumber",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/executing-from-cucumber.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"executing-from-cucumber",title:"Executing from Cucumber",hide_title:!0,sidebar_label:"Executing from Cucumber",keywords:["api-testing","how-to","cucumber","bdd"]},sidebar:"apif",previous:{title:"Email Notification Adjustments",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/how-to/tweaking-stateful-email-notifications"},next:{title:"Following Redirects",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/how-to/following-redirects"}},c={},u=[{value:"Walkthrough",id:"walkthrough",level:2},{value:"<code>config.json</code>",id:"configjson",level:3},{value:"<code>apirun.feature</code>",id:"apirunfeature",level:3},{value:"<code>Stepdefs.java</code>",id:"stepdefsjava",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:n,Head:i}=t;return n||m("Details",!0),i||m("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,r.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2019/08/cucumber-black-512.png"),alt:"cucumber-black-512.png"}),"\n",(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"executing-from-cucumber",children:"Executing from Cucumber"})}),"\n",(0,r.jsx)(t.p,{children:"Cucumber is the most common behavior-driven development language for testers. This perfectly dovetails with the capabilities of API Fortress, as both are focused on making testing more intelligent and powerful without adding complication. The Cucumber tool, combined with API Fortress, is a great method of creating smart tests easily."}),"\n",(0,r.jsx)(t.p,{children:"With the flexibility of the API Fortress, you can easily invoke API Fortress tests within your Cucumber Automation Scripts. Simply make an HTTP request to our webhook to kick off a test from your Cucumber test. Have a link to the report printed out into your console, or print the results directly on the console."}),"\n",(0,r.jsx)(t.p,{children:"Below, we will show you how to easily integrate an API test into your Cucumber scripts."}),"\n",(0,r.jsx)(t.h2,{id:"walkthrough",children:"Walkthrough"}),"\n",(0,r.jsx)(t.p,{children:"First lets walk through the files and method used in the example:"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can find all of the below examples on our ",(0,r.jsx)(t.a,{href:"https://github.com/apifortress/cucumber-examples",children:"Github"})," page."]})}),"\n",(0,r.jsx)(t.h3,{id:"configjson",children:(0,r.jsx)(t.code,{children:"config.json"})}),"\n",(0,r.jsx)(t.p,{children:"This is where you will configure your API Fortress Project names and their associated webhooks. This allows you to invoke the tests by simply passing the Project name in the feature file."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:"reference",children:"https://github.com/apifortress/cucumber-examples/blob/master/config.json\n"})}),"\n",(0,r.jsx)(t.h3,{id:"apirunfeature",children:(0,r.jsx)(t.code,{children:"apirun.feature"})}),"\n",(0,r.jsx)(t.p,{children:'This is where you define the scenario and the steps using the Gherkin syntax. In this file you will define the Given, When, Then steps. In this example we pass in an API Fortress Project name in the "Given" step.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:"reference",children:"https://github.com/apifortress/cucumber-examples/blob/master/src/test/resources/hellocucumber/apirun.feature\n"})}),"\n",(0,r.jsx)(t.h3,{id:"stepdefsjava",children:(0,r.jsx)(t.code,{children:"Stepdefs.java"})}),"\n",(0,r.jsx)(t.p,{children:"In this example we are using Java, however Cucumber supports many programming languages. The example file contains a few things:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Stepdefs"})," class","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"In this class you will define what happens in each step from your feature file (Given, When, Then)"}),"\n",(0,r.jsxs)(t.li,{children:["Given - will take in the inputed Api Fortress Project name and call the ",(0,r.jsx)(t.code,{children:"getProjInfo"})," method to get the webhook for this project"]}),"\n",(0,r.jsxs)(t.li,{children:["When - will take the url of the webhook and call the ",(0,r.jsx)(t.code,{children:"callAPI "}),"method running all the API Fortress tests contained within that project"]}),"\n",(0,r.jsx)(t.li,{children:"Then - will parse through the response of the API Fortress webhook to provide the amount of failures, links to the API Fortress test results, and will indicate which tests passed and which failed"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"getProjInfo"})," method - This method will parse the ",(0,r.jsx)(t.code,{children:"config.json"})," file and match the Project name provided in the Given step to the Project name defined in the config file. This method will then return the associated webhook."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"callAPI"})," method - This method will take the webhook url from the When step and make a call to the API running all API Fortress tests within that project. This method will return the response from the API."]}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:[(0,r.jsx)(t.code,{children:"Stepdefs.java"})," Class"]}),(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Click here to see the full class"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:"reference",children:"https://github.com/apifortress/cucumber-examples/blob/master/src/test/java/hellocucumber/Stepdefs.java\n"})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),o=n(34164),s=n(23104),i=n(56347),a=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),g=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=a[n].value;o!==r&&(c(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,x.jsx)(w,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);