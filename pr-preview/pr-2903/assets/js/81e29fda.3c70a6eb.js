"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[23183],{8128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(74848),s=r(28453),a=r(11470),o=r(19365);r(86025);const i={id:"submission-url",title:"Creating API Tokens and Submission URLs",sidebar_label:"API Tokens and Submission URLs",description:"Learn about creating API tokens and Submission URLs for Backtrace."},c=void 0,l={id:"error-reporting/project-setup/submission-url",title:"Creating API Tokens and Submission URLs",description:"Learn about creating API tokens and Submission URLs for Backtrace.",source:"@site/docs/error-reporting/project-setup/submission-url.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/submission-url",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/project-setup/submission-url",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/submission-url.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"submission-url",title:"Creating API Tokens and Submission URLs",sidebar_label:"API Tokens and Submission URLs",description:"Learn about creating API tokens and Submission URLs for Backtrace."},sidebar:"backtrace",previous:{title:"Source Code",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/project-setup/source-code"},next:{title:"Storage Management",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/project-setup/storage-management"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Creating API Tokens",id:"creating-api-tokens",level:2},{value:"Creating Submission URLs",id:"creating-submission-urls",level:2}];function b(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"API tokens are used for authenticating Backtrace API usage and in Submission URLs. Submission URLs are utilized by SDKs and tools to send data to Backtrace."}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Backtrace account (",(0,n.jsx)(t.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,n.jsx)(t.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,n.jsx)(t.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"creating-api-tokens",children:"Creating API Tokens"}),"\n",(0,n.jsx)(t.p,{children:"Tokens are granted specific capabilities that restrict their usage to designated purposes."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In the Backtrace Console, go to ",(0,n.jsx)(t.strong,{children:"Project settings > Project > API tokens"})," and select ",(0,n.jsx)(t.strong,{children:"New"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Provide a descriptive name, such as ",(0,n.jsx)(t.code,{children:"Symbol Token"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Choose one or more capabilities and then click ",(0,n.jsx)(t.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"creating-submission-urls",children:"Creating Submission URLs"}),"\n",(0,n.jsx)(t.p,{children:"The structure of a submission URL differs between hosted environments and on-premise installations."}),"\n",(0,n.jsxs)(a.A,{groupId:"instance-type",defaultValue:"hosted",values:[{label:"Hosted Instance",value:"hosted"},{label:"On-premise Instance",value:"onprem"}],children:[(0,n.jsxs)(o.A,{value:"hosted",children:["In a hosted environment, submission URLs follow this format: ",(0,n.jsx)(t.code,{children:"https://submit.backtrace.io/<subdomain>/<token>/<endpoint>"}),".",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"subdomain"}),(0,n.jsxs)("td",{children:["If your instance address is ",(0,n.jsx)(t.code,{children:"https://example.sp.backtrace.io"}),", your subdomain will be ",(0,n.jsx)(t.code,{children:"example"}),"."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"token"}),(0,n.jsx)("td",{children:"The API token generated earlier."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"endpoint"}),(0,n.jsx)("td",{children:"The endpoint corresponds to a specific operation."})]})]}),(0,n.jsx)(t.strong,{children:"Example"}),"To submit ",(0,n.jsx)(t.code,{children:"sourcemaps"})," for the subdomain ",(0,n.jsx)(t.code,{children:"example"})," using token ",(0,n.jsx)(t.code,{children:"bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7"}),", the URL would be ",(0,n.jsx)(t.code,{children:"https://submit.backtrace.io/example/bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7/sourcemap"}),"."]}),(0,n.jsxs)(o.A,{value:"onprem",children:["In an on-premise environment, submission URLs are structured as follows: ",(0,n.jsx)(t.code,{children:"<your address>:6098//post?format=<endpoint>&token=<token>"}),".",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"your address"}),(0,n.jsx)("td",{children:"The URL to your Backtrace services."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"token"}),(0,n.jsx)("td",{children:"The previously generated API token."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"endpoint"}),(0,n.jsx)("td",{children:"The endpoint corresponds to a specific operation."})]})]}),(0,n.jsx)(t.strong,{children:"Example"}),"To submit ",(0,n.jsx)(t.code,{children:"sourcemaps"})," to the address ",(0,n.jsx)(t.code,{children:"https://backtrace.example.com"})," using token ",(0,n.jsx)(t.code,{children:"bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7"}),", the URL would be ",(0,n.jsx)(t.code,{children:"https://backtrace.example.com:6098//post?format=sourcemap&token=bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7"}),"."]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>I});var n=r(96540),s=r(18215),a=r(23104),o=r(56347),i=r(205),c=r(57485),l=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=b(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,d]=h({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=i[r].value;s!==n&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function I(e){const t=(0,f.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);