"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[61450],{51089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(74848),a=r(28453);r(11470),r(19365),r(86025);const o={id:"nintendo",title:"Nintendo Switch Support",sidebar_label:"Nintendo Switch",description:"Backtrace is able to ingest crash reports from your Nintendo Switch games."},s=void 0,i={id:"error-reporting/platform-integrations/nintendo",title:"Nintendo Switch Support",description:"Backtrace is able to ingest crash reports from your Nintendo Switch games.",source:"@site/docs/error-reporting/platform-integrations/nintendo.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/nintendo",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/nintendo",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/nintendo.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1688658834e3,frontMatter:{id:"nintendo",title:"Nintendo Switch Support",sidebar_label:"Nintendo Switch",description:"Backtrace is able to ingest crash reports from your Nintendo Switch games."},sidebar:"backtrace",previous:{title:"CryEngine",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/cryengine"},next:{title:"PlayStation 4",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/ps4"}},l={},u=[{value:"Details",id:"details",level:2}];function c(e){const t={a:"a",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Backtrace is able to ingest crash reports from your Nintendo Switch games."}),"\n",(0,n.jsx)(t.h2,{id:"details",children:"Details"}),"\n",(0,n.jsxs)(t.p,{children:["Authorized Nintendo Switch developers can access more details in our ",(0,n.jsx)(t.a,{href:"https://support.backtrace.io/hc/en-us/articles/360057383912",children:"Nintendo Switch Detailed Integration Guide"}),". Contact our support team if you need access."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(96540),a=r(18215),o=r(23104),s=r(56347),i=r(205),l=r(57485),u=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=u??m;return f({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function S(e){const t=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);