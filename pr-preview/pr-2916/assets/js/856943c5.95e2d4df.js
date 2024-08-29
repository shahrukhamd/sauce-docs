"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70622],{83866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(74848),n=r(28453);r(11470),r(19365),r(86025);const i={id:"w3c-webdriver-capabilities",title:"W3C WebDriver Capabilities Support",sidebar_label:"W3C WebDriver Capabilities"},s=void 0,o={id:"dev/w3c-webdriver-capabilities",title:"W3C WebDriver Capabilities Support",description:"Sauce Labs supports and encourages updating your code to take advantage of the W3C WebDriver Protocol, which is currently the default protocol used by all major browsers.",source:"@site/docs/dev/w3c-webdriver-capabilities.md",sourceDirName:"dev",slug:"/dev/w3c-webdriver-capabilities",permalink:"/sauce-docs/pr-preview/pr-2916/dev/w3c-webdriver-capabilities",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/w3c-webdriver-capabilities.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"w3c-webdriver-capabilities",title:"W3C WebDriver Capabilities Support",sidebar_label:"W3C WebDriver Capabilities"},sidebar:"docs",previous:{title:"Common Error Messages",permalink:"/sauce-docs/pr-preview/pr-2916/dev/error-messages"},next:{title:"Data Center Maintenance Windows",permalink:"/sauce-docs/pr-preview/pr-2916/dev/data-center-maint"}},l={},u=[];function c(e){const t={a:"a",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Sauce Labs supports and encourages updating your code to take advantage of the ",(0,a.jsx)(t.a,{href:"/dev/glossary/#w3c-webdriver-protocol",children:"W3C WebDriver Protocol"}),", which is currently the default protocol used by all major browsers."]}),"\n",(0,a.jsx)(t.p,{children:"Using the W3C WebDriver protocol on Sauce Labs requires setting specific capabilities in your code. The syntax is different from its predecessor, JSON Wire Protocol (JWP). To learn about W3C WebDriver-compliant capability syntax, we recommend reviewing the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/dev/test-configuration-options",children:"Test Configuration Options"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/web-apps/automated-testing/selenium/selenium4",children:"Upgrading to Selenium 4 for Sauce Labs Testing"})}),"\n",(0,a.jsxs)(t.li,{children:["the ",(0,a.jsx)(t.a,{href:"https://www.w3.org/TR/webdriver1/#capabilities",children:"official W3C Recommendations website"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>C});var a=r(96540),n=r(34164),i=r(23104),s=r(56347),o=r(205),l=r(57485),u=r(31682),c=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:r,groupId:n}),[h,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),v=(()=>{const e=u??h;return b({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==a&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,n.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=h(e);return(0,w.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,w.jsx)(g,{...t,...e}),(0,w.jsx)(y,{...t,...e})]})}function C(e){const t=(0,m.A)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var a=r(96540);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);