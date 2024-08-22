"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[354],{9518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(74848),i=n(28453),o=(n(11470),n(19365),n(86025));const s={id:"stride",title:"Stride Integration with Backtrace",sidebar_label:"Stride",description:"Integrate Backtrace with Stride."},a=void 0,l={id:"error-reporting/workflow-integrations/messaging/stride",title:"Stride Integration with Backtrace",description:"Integrate Backtrace with Stride.",source:"@site/docs/error-reporting/workflow-integrations/messaging/stride.md",sourceDirName:"error-reporting/workflow-integrations/messaging",slug:"/error-reporting/workflow-integrations/messaging/stride",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/workflow-integrations/messaging/stride",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/messaging/stride.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690913171e3,frontMatter:{id:"stride",title:"Stride Integration with Backtrace",sidebar_label:"Stride",description:"Integrate Backtrace with Stride."},sidebar:"backtrace",previous:{title:"Amazon SNS",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/workflow-integrations/messaging/amazon-sns"},next:{title:"Discord",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/workflow-integrations/messaging/discord"}},c={},u=[{value:"Generate a Conversation Token",id:"generate-a-conversation-token",level:2},{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function d(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This guide goes through all the steps necessary to integrate Backtrace with Stride."}),"\n",(0,r.jsx)(t.p,{children:"The steps in this process are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Generate a conversation token"}),"\n",(0,r.jsx)(t.li,{children:"Set up the integration"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"generate-a-conversation-token",children:"Generate a Conversation Token"}),"\n",(0,r.jsx)(t.p,{children:"To set up integration with Stride an app token must be generated for each conversation that messages are going to be sent to."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Click on the Apps Icon located on the right hand section of the conversation window, this will open up the Apps window."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/stride-apps-icon.png"),alt:""}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Click the + icon at the top of the Apps window to add a new App."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/stride-add-app.png"),alt:""}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Click the 'Connect your app' link from the first box or click 'Add Custom App' from the top menu bar under the conversation name."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/stride-connect-app.png"),alt:""}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Ensure that 'API tokens' is selected not 'Installation URL', and give the application a name. This name will show up whenever Backtrace posts messages through this API. After giving the App a name click the create button."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/stride-name-token.png"),alt:""}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Copy the access token and the conversation URL."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/stride-copy-token.png"),alt:""}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,r.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,r.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Then click ",(0,r.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Select ",(0,r.jsx)(t.strong,{children:"Stride"})," and fill in the required settings:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The API endpoint: This is the part before /sites in the URL from the Generate Conversation Token section"}),"\n",(0,r.jsx)(t.li,{children:"One or more sites"}),"\n",(0,r.jsx)(t.li,{children:"One or more conversation per site"}),"\n",(0,r.jsx)(t.li,{children:"An API ID for each conversation: This is a hex string following the /site in the URL from the Generate App Token section"}),"\n",(0,r.jsx)(t.li,{children:"A conversation ID for each conversation: This follows the /conversation in the URL from the Generate App Token section."}),"\n",(0,r.jsx)(t.li,{children:"A conversation token for each conversation: This is the token generated from the Generate App Token section."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/stride-settings.png"),alt:""}),"s"]}),"\n",(0,r.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),i=n(18215),o=n(23104),s=n(56347),a=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=g({queryString:n,groupId:i}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),w=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{w&&l(w)}),[w]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=a[n].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,i.A)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",w.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(k,{...e,...t})]})}function j(e){const t=(0,m.A)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);