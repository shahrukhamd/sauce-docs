"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6017],{68055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(74848),a=r(28453),o=(r(11470),r(19365),r(86025));const i={id:"fogbugz",title:"FogBugz Integration with Backtrace",sidebar_label:"FogBugz",description:"Integrate Backtrace with FogBugz."},s=void 0,u={id:"error-reporting/workflow-integrations/issue-tracking/fogbugz",title:"FogBugz Integration with Backtrace",description:"Integrate Backtrace with FogBugz.",source:"@site/docs/error-reporting/workflow-integrations/issue-tracking/fogbugz.md",sourceDirName:"error-reporting/workflow-integrations/issue-tracking",slug:"/error-reporting/workflow-integrations/issue-tracking/fogbugz",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/workflow-integrations/issue-tracking/fogbugz",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/issue-tracking/fogbugz.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"fogbugz",title:"FogBugz Integration with Backtrace",sidebar_label:"FogBugz",description:"Integrate Backtrace with FogBugz."},sidebar:"backtrace",previous:{title:"Asana",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/workflow-integrations/issue-tracking/asana"},next:{title:"HackNPlan",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/workflow-integrations/issue-tracking/hack-n-plan"}},l={},c=[{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function g(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This guide goes through the steps necessary to integrate Backtrace with FogBugz. Setting up integration with the Fogbugz ticketing system requires a valid FogBugz server name and an API token (See: ",(0,n.jsx)(t.a,{href:"https://support.fogbugz.com/hc/en-us/articles/360011351813-Access-Tokens-and-Integration-Servers",children:"Fogbugz documentation"})," for instructions on how to get a token)."]}),"\n",(0,n.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,n.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,n.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Then click ",(0,n.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"FogBugz"})," and fill in the required settings (name, server, API token, and tags)."]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/error-reporting/workflow-integrations/fogbugz-settings.png"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["For more detailed information about these settings, see ",(0,n.jsx)(t.a,{href:"https://support.fogbugz.com/hc/en-us/articles/360011242374-FogBugz-API-Introduction",children:"The Fogbugz API Documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>I});var n=r(96540),a=r(34164),o=r(23104),i=r(56347),s=r(205),u=r(57485),l=r(31682),c=r(70679);function g(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return g(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,g]=h({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),m=(()=>{const e=l??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{m&&u(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),g(e),b(e)}),[g,b,o]),tabValues:o}}var b=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==n&&(l(t),i(a))},g=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:g,onClick:c,...o,className:(0,a.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,w.jsx)(v,{...t,...e}),(0,w.jsx)(k,{...t,...e})]})}function I(e){const t=(0,b.A)();return(0,w.jsx)(x,{...e,children:g(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);