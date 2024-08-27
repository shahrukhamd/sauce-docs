"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8881],{28339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(74848),r=n(28453);n(86025),n(11470),n(19365);const s={id:"custom-ent-apps",title:"Installing Custom Enterprise Apps",sidebar_label:"Installing Custom Apps"},o=void 0,i={id:"testfairy/sdk/ios/custom-ent-apps",title:"Installing Custom Enterprise Apps",description:"Enterprise apps provide specialized functionalities tailored to the needs of an organization. These apps may not be available on the official app store but can be manually installed on your device. However, when you install such apps, you might encounter a notification stating that the app developer is not trusted on your device. This documentation will guide you through the process of manually installing and establishing trust for custom enterprise apps on your device.",source:"@site/docs/testfairy/sdk/ios/custom-ent-apps.md",sourceDirName:"testfairy/sdk/ios",slug:"/testfairy/sdk/ios/custom-ent-apps",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/ios/custom-ent-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/ios/custom-ent-apps.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"custom-ent-apps",title:"Installing Custom Enterprise Apps",sidebar_label:"Installing Custom Apps"},sidebar:"docs",previous:{title:"Adding UDIDs",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/ios/adding-udids"},next:{title:"Uploading dSymps",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/ios/dsyms"}},l={},u=[{value:"Manually install and trust an enterprise app",id:"manually-install-and-trust-an-enterprise-app",level:2}];function c(e){const t={h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Enterprise apps provide specialized functionalities tailored to the needs of an organization. These apps may not be available on the official app store but can be manually installed on your device. However, when you install such apps, you might encounter a notification stating that the app developer is not trusted on your device. This documentation will guide you through the process of manually installing and establishing trust for custom enterprise apps on your device."}),"\n",(0,a.jsx)(t.h2,{id:"manually-install-and-trust-an-enterprise-app",children:"Manually install and trust an enterprise app"}),"\n",(0,a.jsx)(t.p,{children:"When you first open an enterprise app that you've manually installed, you see a notification that the developer of the app isn't trusted on your device. You can dismiss this message, but then you can't open the app. Follow these steps to manually install and trust an enterprise app on your device:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"To establish trust for the app developer tap Settings \u2192 General \u2192 Profiles or Profiles & Device Management."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Under the "Enterprise App" heading, you see a profile for the developer of the app you want to trust.'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Tap the name of the developer profile under the Enterprise App heading to establish trust for this developer."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You will get a prompt to confirm your choice."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Once you trust this profile, you can install and run any other apps from the same developer. This developer will remain trusted until you remove all apps of this developer."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),r=n(18215),s=n(23104),o=n(56347),i=n(205),l=n(57485),u=n(31682),c=n(89466);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,p]=f({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,s]),tabValues:s}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:p,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,y.jsx)(w,{...e,children:p(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);