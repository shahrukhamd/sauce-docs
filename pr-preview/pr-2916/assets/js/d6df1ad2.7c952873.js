"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42771],{38931:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(74848),n=a(28453),o=(a(11470),a(19365),a(86025));const s={id:"platform-overview",title:"Platform Overview",sidebar_label:"Platform Overview",description:"Overview of the Backtrace Debugging Platform and its components."},i=void 0,l={id:"error-reporting/advanced/platform-overview",title:"Platform Overview",description:"Overview of the Backtrace Debugging Platform and its components.",source:"@site/docs/error-reporting/advanced/platform-overview.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/platform-overview",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/advanced/platform-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/platform-overview.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"platform-overview",title:"Platform Overview",sidebar_label:"Platform Overview",description:"Overview of the Backtrace Debugging Platform and its components."},sidebar:"backtrace",previous:{title:"Privacy Control",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/security-compliance/privacy-control"},next:{title:"Package Installation",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/advanced/package-installation"}},c={},d=[{value:"Snapshot Generator",id:"snapshot-generator",level:2},{value:"Analysis Modules",id:"analysis-modules",level:2},{value:"Object Store",id:"object-store",level:2},{value:"Web UI",id:"web-ui",level:2},{value:"Terminal UI",id:"terminal-ui",level:2},{value:"Workflow Integrations",id:"workflow-integrations",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:'This document provides a brief overview of the Backtrace Debugging Platform and its components. If you want to start integrating the platform, refer to the "Getting Started" menu.'}),"\n",(0,r.jsx)(t.p,{children:"Backtrace is a post-mortem crash debugging platform that helps you triage and fix bugs more effectively in applications and operating systems. When your application fails, Backtrace takes a snapshot of the faulting component and surrounding environment at high speeds, analyzes it, and archives it in a centralized object store."}),"\n",(0,r.jsx)(t.p,{children:"At a high level, the Backtrace platform includes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"An incredibly fast and extensible snapshot generator that captures critical data on demand, even at the time of the fault."}),"\n",(0,r.jsx)(t.li,{children:"A set of analysis modules that extract and highlight anomalous behavior such as stack overflow, null deference, heap mismanagement issues, and more."}),"\n",(0,r.jsx)(t.li,{children:"An object store that aggregates and facilitates collaboration on captured data across your environments."}),"\n",(0,r.jsx)(t.li,{children:"Workflow integrations that integrate the rich dataset captured into workflow tools like Slack and JIRA."}),"\n",(0,r.jsx)(t.li,{children:"Web and Terminal interfaces to visualize and analyze the captured data."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Below is the architectural diagram of the Backtrace Platform:"}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cbae53c6.png"),alt:"Backtrace architectural diagram",width:"700"}),"\n",(0,r.jsx)(t.p,{children:"These components come together to provide a system that allows teams to easily track, prioritize, and act on incidents as they occur. Backtrace supports software whether it's provided as a service, shrink-wrapped and shipped, or bundled with hardware as an appliance."}),"\n",(0,r.jsx)(t.p,{children:"The following sections provide a deeper look into each of these components and how they work together."}),"\n",(0,r.jsx)(t.h2,{id:"snapshot-generator",children:"Snapshot Generator"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace's Snapshot Generator builds on top of our incredibly fast tracer to capture application state and the surrounding environments. The data is stored in a structured, self-contained format we call a snapshot. A snapshot contains:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The stack trace across all threads."}),"\n",(0,r.jsx)(t.li,{children:"Regions of memory backing reachable objects on the stack and heap."}),"\n",(0,r.jsx)(t.li,{children:"Requested global variables."}),"\n",(0,r.jsx)(t.li,{children:"Environmental information such as virtual memory stats, CPU stats, process state, and more."}),"\n",(0,r.jsx)(t.li,{children:"Any contextual metadata you choose. This includes things like data center, customer, version, and environment. Our snapshot format doesn't impose any restrictions on your metadata."}),"\n",(0,r.jsxs)(t.li,{children:["Annotations and classifiers added by analysis modules to highlight anomalous behavior. You can easily ship your own modules using our ",(0,r.jsx)(t.a,{href:"/error-reporting/advanced/ptrace/",children:"LUA"})," or C API."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The Backtrace Snapshot Generator works across a variety of environments and targets. It can attach to live processes for on-demand snapshots or generate a snapshot from a user space or kernel coredump (kernel coredumps are only supported on FreeBSD). The Backtrace Snapshot Generator runs on Linux, FreeBSD, and OmniOS."}),"\n",(0,r.jsx)(t.p,{children:"The chart below compares our snapshot generator to GDB and LLDB generating a stack trace from Chromium. During this test, GDB and LLDB are generating a stack trace, while the Backtrace Snapshot Generator is gathering all of the data listed above, performing automated analysis, and serializing this data to disk."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cbc0b23e.png"),alt:"comparison chart"}),"\n",(0,r.jsx)(t.h2,{id:"analysis-modules",children:"Analysis Modules"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace's Snapshot Generator takes advantage of our fast core libraries to run automated analysis to assist in root-cause investigation. Our snapshot generator comes with a set of analysis modules to pinpoint the cause of the crash and, in some cases, identify peripheral bugs that can cause crashes in the future. For example, our snapshot generator will automatically disambiguate the direction of the fault, highlight aliases of the faulting operands across all threads, check function constraint violations in commonly used code like memcpy and realloc, and annotate common heap mismanagement issues for popular memory allocators like jemalloc and ptmalloc."}),"\n",(0,r.jsxs)(t.p,{children:["We expose the same ",(0,r.jsx)(t.a,{href:"/error-reporting/advanced/ptrace/",children:"LUA"})," and C API our analysis modules use to all of our users. You can use this functionality to customize our snapshot generator for your software, incorporate common and expert debugging practices, and include application state crucial for incident response. Below are some example outputs from our analysis modules in the Hydra section below."]}),"\n",(0,r.jsx)(t.h2,{id:"object-store",children:"Object Store"}),"\n",(0,r.jsxs)(t.p,{children:["Snapshots are sent to and aggregated in Backtrace's object store, also known as ",(0,r.jsx)(t.code,{children:"coroner"}),". Coroner makes the wealth of information across your snapshots accessible with ease. You can issue queries to gain insights into the fault data across your entire system, such as which customers are being affected by certain types of faults, which versions are currently causing incidents, and even generate a histogram that shows how frequently certain functions appear in the faulted thread's stack trace."]}),"\n",(0,r.jsx)(t.h2,{id:"web-ui",children:"Web UI"}),"\n",(0,r.jsxs)(t.p,{children:["Console, our web-based user interface, provides a bird's-eye view of the data stored inside ",(0,r.jsx)(t.code,{children:"coroner"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cbd0852c.png"),alt:"console"}),"\n",(0,r.jsx)(t.p,{children:"When you log in, you will see an activity summary across all of your software projects. You can click on each software project to inspect the different types of faults affecting it."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cbe14c0b.webp"),alt:"activity summary"}),"\n",(0,r.jsx)(t.p,{children:"On the left, you find gathered metadata and automated analysis statistics, along with controls to define sorting order, filters, etc. On the right, you see the time range for each fault group, along with a color box indicating activity. Groups with darker colors have experienced more faults than those without."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cbf6efe5.webp"),alt:"activity summary details"}),"\n",(0,r.jsxs)(t.p,{children:["More detailed information about each group can be viewed by clicking on ",(0,r.jsx)(t.strong,{children:"View Details"}),". This page shows specific instances of the fault, with the option to graph these instances on a jitter plot, line graph (number of instances over time), or a time-based heat map."]}),"\n",(0,r.jsx)(t.p,{children:"The left pop-out menu shows metadata statistics associated with the group, and the right pop-out menu shows the first and last occurrence, added classifiers, and the faulted thread's stack trace (if available). Snapshot instances for each group are listed below the graph. You can notice a small icon on the right of each listing. Clicking on this icon, copy the command to download the corresponding snapshot."}),"\n",(0,r.jsx)(t.h2,{id:"terminal-ui",children:"Terminal UI"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace's Hydra allows you to view the internals of each snapshot in a powerful yet approachable terminal UI."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cbf6efe5.webp"),alt:"terminal UI"}),"\n",(0,r.jsx)(t.p,{children:"The initial view of Hydra immediately focuses on the faulting context. Hydra's main outline includes four panes (from top to bottom):"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Thread pane: list of threads in the captured process."}),"\n",(0,r.jsx)(t.li,{children:"Stack pane: stack trace for the selected thread."}),"\n",(0,r.jsx)(t.li,{children:"Variable pane: variables for the selected frame."}),"\n",(0,r.jsx)(t.li,{children:"Peripheral pane: displays various information based on a menu, including metadata and classifiers associated with the snapshot, kernel stack trace associated with the selected thread (Linux only), process memory map, registers, source code with integration into your favorite SCM, annotations from our automated analysis, system statistics, and much more."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Below are some examples of what viewing a snapshot in Hydra looks like. You can find a more in-depth walkthrough of ",(0,r.jsx)(t.a,{href:"/error-reporting/advanced/hydra/usage/",children:"Hydra"})," in the dedicated section."]}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cc24aa90.png"),alt:"Hydra snapshot views"}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cc3784ac.png"),alt:"Hydra snapshot views"}),"\n",(0,r.jsx)(t.h2,{id:"workflow-integrations",children:"Workflow Integrations"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace's Object Store integrates with your existing workflow tools such as Slack and JIRA. The rich dataset and automated analysis stored in the object store can be sent to these services every time a new fault or fault type is detected. Below is an example of our Slack integration:"}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/5e601cc536d9d.png"),alt:"slack integration example"}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace improves system availability and software quality by bringing automation to incident detection, response, and resolution. The Backtrace platform automatically snapshots faulting applications and their surrounding environments, then analyzes and archives them in a centralized object store. Our technology captures incidents in unprecedented detail and makes this data accessible, ensuring that bugs are not missed and are fixed faster."}),"\n",(0,r.jsxs)(t.p,{children:["If you have already signed up for a trial and received your license number, you can start by exploring our ",(0,r.jsx)(t.strong,{children:"Getting Started"})," menu. Otherwise, feel free to sign up for a trial on our website or reach out to us for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var r=a(96540),n=a(34164),o=a(23104),s=a(56347),i=a(205),l=a(57485),c=a(31682),d=a(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:a,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),v=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function y(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(c(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,n.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:o}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(w,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,b.jsx)(x,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var r=a(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);