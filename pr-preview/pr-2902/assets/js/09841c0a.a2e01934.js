"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94807],{10430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(74848),n=a(28453),o=(a(11470),a(19365),a(86025));const s={id:"flame-graphs",title:"Flame Graphs",sidebar_label:"Flame Graphs",description:"Allows you visualize a large collection of stack traces in the Explore view."},l=void 0,i={id:"error-reporting/web-console/flame-graphs",title:"Flame Graphs",description:"Allows you visualize a large collection of stack traces in the Explore view.",source:"@site/docs/error-reporting/web-console/flame-graphs.md",sourceDirName:"error-reporting/web-console",slug:"/error-reporting/web-console/flame-graphs",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/web-console/flame-graphs",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/web-console/flame-graphs.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"flame-graphs",title:"Flame Graphs",sidebar_label:"Flame Graphs",description:"Allows you visualize a large collection of stack traces in the Explore view."},sidebar:"backtrace",previous:{title:"Explore",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/web-console/explore"},next:{title:"Debug",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/web-console/debug"}},c={},u=[{value:"Introduction",id:"introduction",level:2}];function p(e){const t={a:"a",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Flame graphs are a powerful visualization of a large collection of stack traces. Until flame graphs, sampling profilers offered only the ability to merge exactly identical stack trace sequences. For complex applications with divergent stack sequences, there may be tens of thousands of unique stack trace sequences. Unfortunately, this makes it difficult to identify common bottlenecks (sub-sequences) across the samples. Flame graphs merge common sub-sequences of many stack trace sequences, improving the ability of a practitioner to understand bottlenecks."}),"\n",(0,r.jsx)(t.p,{children:"Flame graphs are applicable to lots of other applications involving large collections of stack traces. One such application is visualizing instability if a centralized corpus of stack traces are available to you, as provided by Backtrace."}),"\n",(0,r.jsx)(t.p,{children:"Below is an example flame graph of real instability data of our object store from development, experimental and production release channels."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/console-views/explore-view-flame-graphs.png"),alt:"Shows an example flame graph of real instability data of our object store from development, experimental and production release channels."}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["This section provides a brief summary of the flame graph. If you are already familiar with flame graphs, you may skip this section. A deeper introduction to flame graphs is available at ",(0,r.jsx)(t.a,{href:"https://queue.acm.org/detail.cfm?id=2927301",children:"ACM Queue"}),", written by Brendan Gregg. We will demonstrate the flame graph by example."]}),"\n",(0,r.jsx)(t.p,{children:"Below is a flame graph for one stack trace a -> b -> c -> d, where a is the outer-most function. In other words, a calls into b calls into c calls into d."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/console-views/flame-graph-example1.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"From top to bottom, every rectangle represents a frame in the stack trace with the inner-most frame at the top and the outer-most frame second to bottom. The bottom-most rectangle is a common root for all stack traces. The colors of the rectangle do not encode anything useful in this variation of a flame graph and serve to make the graph easier to read."}),"\n",(0,r.jsx)(t.p,{children:"Let us introduce two more stack traces into the visualization now, a -> b -> c -> d and A -> B -> C -> D. Below is the result."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/console-views/flame-graph-example2.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"The X-axis is now divided by both stack traces. As there is one stack trace sample of a -> b -> c -> d and one stack trace sample of A -> B -> C -> D, the X-axis is evenly divided across the two sequences. Let us introduce two more samples of A -> B -> C -> D such that there are a total of three samples of A -> B -> C -> D and one sample with a -> b -> c -> d. The result is below:"}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/console-views/flame-graph-example3.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"Note, in the interactive version of the visualization, mousing over a rectangle tells you the sample count. In this case, 3 samples with that stack sequence involved a function call into A. Let us now introduce two more stack traces into the visualization, A -> B -> C -> D -> E and A -> B -> C -> D -> F."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/console-views/flame-graph-example4.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"The height of the visualization is bound to the deepest callstack in the data set and the width is bound to the number of unique sequences. This scales well even for many tens of thousands of fingerprints."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(96540),n=a(18215),o=a(23104),s=a(56347),l=a(205),i=a(57485),c=a(31682),u=a(89466);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,p]=m({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,o]),tabValues:o}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function w(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),n=l[a].value;n!==r&&(c(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:p,onClick:u,...o,className:(0,n.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:p(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>l});var r=a(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);