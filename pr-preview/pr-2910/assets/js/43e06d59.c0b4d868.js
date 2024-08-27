"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8559],{82484:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=t(74848),n=t(28453),s=(t(86025),t(11470)),i=t(19365);const o={id:"private-cloud-int",title:"Private Cloud Integration",sidebar_label:"Private Cloud Integration"},l=void 0,u={id:"testfairy/sdk/private-cloud-int",title:"Private Cloud Integration",description:"You can install the TestFairy enterprise suite on a private cloud on any AWS location in the US, Europe, Asia, or South America. According to your security policy, servers can be protected by custom firewall rules allowing access only from your offices.",source:"@site/docs/testfairy/sdk/private-cloud-int.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/private-cloud-int",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/private-cloud-int",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/private-cloud-int.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"private-cloud-int",title:"Private Cloud Integration",sidebar_label:"Private Cloud Integration"},sidebar:"docs",previous:{title:"Logging",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/logging"},next:{title:"Submitting User Feedback",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/user-feedback"}},c={},d=[{value:"Setting Your Endpoint",id:"setting-your-endpoint",level:2}];function p(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"You can install the TestFairy enterprise suite on a private cloud on any AWS location in the US, Europe, Asia, or South America. According to your security policy, servers can be protected by custom firewall rules allowing access only from your offices."}),"\n",(0,a.jsx)(r.p,{children:"With this installation, all data is stored privately using your resources."}),"\n",(0,a.jsx)(r.h2,{id:"setting-your-endpoint",children:"Setting Your Endpoint"}),"\n",(0,a.jsxs)(r.p,{children:["Once your private cloud is set up, get the URL endpoint your app will direct all of its data towards. This URL must be passed into the SDK before the ",(0,a.jsx)(r.code,{children:"begin"})," method is called."]}),"\n",(0,a.jsxs)(s.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"Cordova",value:"cordova"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"},{label:"Xamarin",value:"xamarin"},{label:"Unity",value:"unity"},{label:"Adobe Air",value:"adobe"},{label:"Titanium",value:"titanium"}],children:[(0,a.jsxs)(i.A,{value:"android",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TestFairy.setServerEndpoint("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\nTestFairy.setServerEndpoint("my-subdomain.testfairy.com");\nTestFairy.begin(context, "<your app token here>");\n'})})]}),(0,a.jsxs)(i.A,{value:"ios",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'[TestFairy setServerEndpoint:@"<your private cloud url here>"];\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\n[TestFairy setServerEndpoint:@"my-subdomain.testfairy.com"];\n[TestFairy begin:@"<your app token here>"];\n'})})]}),(0,a.jsxs)(i.A,{value:"cordova",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TestFairy.setServerEndpoint("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TestFairy.setServerEndpoint("my-subdomain.testfairy.com");\nTestFairy.begin("<your app token here>");\n'})})]}),(0,a.jsxs)(i.A,{value:"react",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TestFairy.setServerEndpoint("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nconst TestFairy = require(\'react-native-testfairy\');\n\nTestFairy.setServerEndpoint("my-subdomain.testfairy.com");\nTestFairy.begin("<your app token here>");\n'})})]}),(0,a.jsxs)(i.A,{value:"native",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TestFairySDK.setServerEndpoint("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport { TestFairySDK } from \'nativescript-testfairy\';\n\nTestFairySDK.setServerEndpoint("my-subdomain.testfairy.com");\nTestFairySDK.begin("<your app token here>");\n'})})]}),(0,a.jsxs)(i.A,{value:"xamarin",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TestFairy.SetServerEndpoint ("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nusing TestFairyLib;\n\nTestFairy.SetServerEndpoint ("my-subdomain.testfairy.com");\nTestFairy.Begin ("<your app token here>");\n'})})]}),(0,a.jsxs)(i.A,{value:"unity",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TestFairy.setServerEndpoint("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nusing TestFairyUnity;\n\nTestFairy.setServerEndpoint("my-subdomain.testfairy.com");\nTestFairy.begin("<your app token here>");\n'})})]}),(0,a.jsxs)(i.A,{value:"adobe",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'AirTestFairy.setServerEndpoint("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.AirTestFairy;\n\nAirTestFairy.setServerEndpoint("my-subdomain.testfairy.com");\nAirTestFairy.begin("<your app token here>");\n'})})]}),(0,a.jsxs)(i.A,{value:"titanium",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'TiTestFairy.setServerEndpoint("<your private cloud url here>");\n'})}),"Example",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'// Be sure to import TestFairy\nvar TiTestFairy = require(\'com.testfairy.titestfairy\');\n\nTiTestFairy.setServerEndpoint("my-subdomain.testfairy.com");\nTiTestFairy.begin("<your app token here>");\n'})})]})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var a=t(18215);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>T});var a=t(96540),n=t(18215),s=t(23104),i=t(56347),o=t(205),l=t(57485),u=t(31682),c=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function y(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[u,d]=h({queryString:t,groupId:n}),[y,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),b=(()=>{const e=u??y;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=l.indexOf(r),n=o[t].value;n!==a&&(u(r),i(n))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function x(e){let{lazy:r,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function j(e){const r=y(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...e,...r}),(0,f.jsx)(x,{...e,...r})]})}function T(e){const r=(0,v.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var a=t(96540);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);