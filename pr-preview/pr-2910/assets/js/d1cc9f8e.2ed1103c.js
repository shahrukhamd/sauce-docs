"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52404],{97594:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var t=r(74848),n=r(28453),a=(r(86025),r(11470)),i=r(19365);const l={id:"identifying-users",title:"Identifying Your Users",sidebar_label:"Identifying your Users"},o=void 0,u={id:"testfairy/sdk/identifying-users",title:"Identifying Your Users",description:"With TestFairy's user identification feature, you can enhance your testing and debugging process by efficiently correlating session recordings with specific users and their traits. This capability empowers you to gain deeper insights into how different users interact with your app and aids in the diagnosis of user-specific issues during testing.",source:"@site/docs/testfairy/sdk/identifying-users.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/identifying-users",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/identifying-users",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/identifying-users.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"identifying-users",title:"Identifying Your Users",sidebar_label:"Identifying your Users"},sidebar:"docs",previous:{title:"Testing the Crash Handler",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/crash-handler-testing"},next:{title:"Remote Logging",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/remote-logging"}},c={},d=[{value:"Example Configuration",id:"example-configuration",level:2},{value:"Important Notes",id:"important-notes",level:2}];function h(e){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"With TestFairy's user identification feature, you can enhance your testing and debugging process by efficiently correlating session recordings with specific users and their traits. This capability empowers you to gain deeper insights into how different users interact with your app and aids in the diagnosis of user-specific issues during testing."}),"\n",(0,t.jsx)(s.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,t.jsxs)(s.p,{children:["Below are code examples illustrating how to utilize TestFairy's ",(0,t.jsx)(s.code,{children:"setUserId"})," method on various platforms:"]}),"\n",(0,t.jsxs)(a.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"Cordova",value:"cordova"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"},{label:"Xamarin",value:"xamarin"},{label:"Unity",value:"unity"},{label:"Adobe Air",value:"adobe"},{label:"Titanium",value:"titanium"}],children:[(0,t.jsxs)(i.A,{value:"android",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TestFairy.setUserId("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\nTestFairy.setUserId("john@example.com");\n'})})]}),(0,t.jsxs)(i.A,{value:"ios",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'[TestFairy setUserId:@"<userId>"];\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\n[TestFairy setUserId:@"john@example.com"];\n'})})]}),(0,t.jsxs)(i.A,{value:"cordova",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TestFairy.setUserId("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TestFairy.setUserId("john@example.com");\n'})})]}),(0,t.jsxs)(i.A,{value:"react",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TestFairy.setUserId("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Be sure to import TestFairy\nconst TestFairy = require('react-native-testfairy');\n\nTestFairy.setUserId(\"john@example.com\");\n"})})]}),(0,t.jsxs)(i.A,{value:"native",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TestFairySDK.setUserId("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Be sure to import TestFairy\nimport { TestFairySDK } from 'nativescript-testfairy';\n\nTestFairySDK.setUserId(\"john@example.com\");\n"})})]}),(0,t.jsxs)(i.A,{value:"xamarin",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TestFairy.SetUserId ("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'// Be sure to import TestFairy\nusing TestFairyLib;\n\nTestFairy.SetUserId ("john@example.com");\n'})})]}),(0,t.jsxs)(i.A,{value:"unity",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TestFairy.setUserId("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'// Be sure to import TestFairy\nusing TestFairyUnity;\n\nTestFairy.setUserId("john@example.com");\n'})})]}),(0,t.jsxs)(i.A,{value:"adobe",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'AirTestFairy.setUserId("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.AirTestFairy;\n\nAirTestFairy.setUserId("john@example.com");\n'})})]}),(0,t.jsxs)(i.A,{value:"titanium",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'TiTestFairy.setUserId("<userId>");\n'})}),"Example",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Be sure to import TestFairy\nvar TiTestFairy = require('com.testfairy.titestfairy');\n\nTiTestFairy.setUserId(\"john@example.com\");\n"})})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"userId"})," is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID your app may use. This value may not be nil and is searchable via API and web search."]}),"\n",(0,t.jsx)(s.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,t.jsx)(s.p,{children:"To make the most effective use of TestFairy's user identification feature, it's essential to keep in mind the following important notes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"setUserId"})," method can be called multiple times to update the user identifier for different sessions."]}),"\n",(0,t.jsxs)(s.li,{children:["You can call ",(0,t.jsx)(s.code,{children:"setUserId"})," before or after initializing a session with ",(0,t.jsx)(s.code,{children:"begin"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"The user identifier you provide must not be null and should be chosen from user attributes like email, phone number, or user ID."}),"\n",(0,t.jsx)(s.li,{children:"The user identifier you set using setUserId() will be searchable through the TestFairy API and web search interface."}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,s,r)=>{r.d(s,{A:()=>i});r(96540);var t=r(18215);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:s,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,i),hidden:r,children:s})}},11470:(e,s,r)=>{r.d(s,{A:()=>T});var t=r(96540),n=r(18215),a=r(23104),i=r(56347),l=r(205),o=r(57485),u=r(31682),c=r(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:r}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:r,attributes:t,default:n}}=e;return{value:s,label:r,attributes:t,default:n}}))}(r);return function(e){const s=(0,u.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function p(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:r}=e;const n=(0,i.W6)(),a=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(n.location.search);s.set(a,e),n.replace({...n.location,search:s.toString()})}),[a,n])]}function f(e){const{defaultValue:s,queryString:r=!1,groupId:n}=e,a=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:a}))),[u,d]=m({queryString:r,groupId:n}),[f,g]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,a]=(0,c.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),y=(()=>{const e=u??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function b(e){let{className:s,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const s=e.currentTarget,r=o.indexOf(s),n=l[r].value;n!==t&&(u(s),i(n))},d=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;s=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;s=o[r]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},s),children:l.map((e=>{let{value:s,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,n.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":t===s}),children:r??s},s)}))})}function j(e){let{lazy:s,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function v(e){const s=f(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",y.tabList),children:[(0,x.jsx)(b,{...e,...s}),(0,x.jsx)(j,{...e,...s})]})}function T(e){const s=(0,g.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(s))}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var t=r(96540);const n={},a=t.createContext(n);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);