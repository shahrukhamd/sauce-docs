"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[34105],{38412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=n(74848),a=n(28453);n(11470),n(19365),n(86025);const s={id:"mobile-native-testing",title:"Mobile Native Testing (BETA)",sidebar_label:"Mobile Native Testing (BETA)"},r=void 0,l={id:"visual-testing/mobile-native-testing",title:"Mobile Native Testing (BETA)",description:"In addition to website testing, Sauce Visual also supports testing of native mobile apps for Android and iOS with Appium.",source:"@site/docs/visual-testing/mobile-native-testing.md",sourceDirName:"visual-testing",slug:"/visual-testing/mobile-native-testing",permalink:"/sauce-docs/pr-preview/pr-2916/visual-testing/mobile-native-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/mobile-native-testing.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"mobile-native-testing",title:"Mobile Native Testing (BETA)",sidebar_label:"Mobile Native Testing (BETA)"},sidebar:"docs",previous:{title:"Selective Diffing",permalink:"/sauce-docs/pr-preview/pr-2916/visual-testing/selective-diffing"},next:{title:"Diffing Engines",permalink:"/sauce-docs/pr-preview/pr-2916/visual-testing/diffing-engines"}},o={},u=[{value:"Best Practices",id:"best-practices",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const t={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In addition to website testing, Sauce Visual also supports testing of native mobile apps for Android and iOS with Appium."}),"\n",(0,i.jsx)(t.p,{children:"In principal, the process is the same as writing a visual test for a website, except that instead of a website, an app needs to be specified in the capabilities."}),"\n",(0,i.jsxs)(t.p,{children:["Check out ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/visual-examples/",children:"our examples"})," to see it in action."]}),"\n",(0,i.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(t.p,{children:"When writing a visual test for mobile apps, we recommend the following"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Explicitly control "dark mode" / "light mode" before taking visual snapshots, so snapshots are either always taken in dark or light mode, but not mixed.'}),"\n",(0,i.jsx)(t.li,{children:"Explicitly specify a single device and OS version for testing. You may run the same test suite on various devices, but don't use wildcards in device names (dynamic device allocation)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(t.p,{children:"The following features are not available for mobile app testing:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Full page screenshots"}),"\n",(0,i.jsx)(t.li,{children:"DOM capture and inspection"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2916/visual-testing/selective-diffing",children:"Selective diffing"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(96540),a=n(34164),s=n(23104),r=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??b;return f({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==i&&(u(t),r(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);