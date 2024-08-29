"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52992],{99106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=r(74848),n=r(28453),o=(r(11470),r(19365),r(86025));const i={id:"stability-metrics",title:"Stability Metrics",sidebar_label:"Stability Metrics",description:"Allow users to augment snapshot data with custom analysis, annotations, pretty-printed data."},a=void 0,l={id:"error-reporting/project-setup/stability-metrics",title:"Stability Metrics",description:"Allow users to augment snapshot data with custom analysis, annotations, pretty-printed data.",source:"@site/docs/error-reporting/project-setup/stability-metrics.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/stability-metrics",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/project-setup/stability-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/stability-metrics.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"stability-metrics",title:"Stability Metrics",sidebar_label:"Stability Metrics",description:"Allow users to augment snapshot data with custom analysis, annotations, pretty-printed data."},sidebar:"backtrace",previous:{title:"Importing Metrics and Generating Stability Scores",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/project-setup/metrics-stability-scores"},next:{title:"Metric Export and External Dashboards",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/project-setup/metric-export"}},c={},u=[{value:"How Does This Feature Help Me?",id:"how-does-this-feature-help-me",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Prioritizing Crash/Error Resolution",id:"prioritizing-crasherror-resolution",level:3},{value:"Advanced Use Cases and Customization",id:"advanced-use-cases-and-customization",level:2},{value:"SDK Support Links",id:"sdk-support-links",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Backtrace now allows you to track trends in your software's stability as observed by unique end users."}),"\n",(0,s.jsx)(t.p,{children:'This builds on the ability to compute error rates against metrics you provide/upload into our system. The functionality allows you to normalize your errors by useful metrics such as "number of sessions," "minutes played," or any other stability metric that you want to track in your app.'}),"\n",(0,s.jsxs)(t.p,{children:["For more information, see ",(0,s.jsx)(t.a,{href:"/error-reporting/project-setup/metrics-stability-scores/",children:"Importing Metrics and Generating Stability Scores"}),"."]}),"\n",(0,s.jsx)(t.p,{children:'Now, Backtrace\'s SDKs have built-in functionality to automatically generate these metrics. This means that you can see session and user stability metrics like "Error-free sessions" in the Backtrace Web Console out of the box. Our APIs also allow you to create your own events so you can track custom metrics and have them sent to your Backtrace instance as well.'}),"\n",(0,s.jsx)(t.h3,{id:"how-does-this-feature-help-me",children:"How Does This Feature Help Me?"}),"\n",(0,s.jsx)(t.p,{children:"Often, assessing an end user's experience by looking at crash/error data alone can be difficult. Stability metrics allow you as a developer, producer, or project manager to more easily monitor your project's health in those terms."}),"\n",(0,s.jsx)(t.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["By default, Backtrace's SDKs are configured to capture session and user metrics and use them to calculate and display the following on your project's ",(0,s.jsx)(t.a,{href:"/error-reporting/web-console/overview/",children:"Overview page"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Error-free sessions: The percentage of sessions that did not trigger any error reports. A great measure of your app's aggregate session stability."}),"\n",(0,s.jsx)(t.li,{children:"Error-free users: The percentage of unique users who have not experienced an error. Perfect for tracking user experiences."}),"\n",(0,s.jsx)(t.li,{children:"Error-free session % through time: A line chart showing the percentage of error-free sessions over time to help you closely monitor your app's stability evolution."}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/project-settings/EventAgg1.png"),alt:"metrics events"}),"\n",(0,s.jsx)(t.p,{children:"This functionality also works in conjunction with the Web Console's filtering. You can filter your data set to get a sense of these stability metrics in a more specific domain. For example, if you want to see the stability of a specific release or only view crashes, you can add that to the filter bar as shown below."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["For filtering with a specific attribute to work, that attribute must be properly configured to be associated with the metric group in question (in the case of Error-free users/sessions, the ",(0,s.jsx)(t.code,{children:"Application Launches"})," metric group). For more information on how to configure this, refer to ",(0,s.jsx)(t.a,{href:"/error-reporting/platform-integrations/unity/metrics/#web-console-metric-group--attribute-linking",children:"Web Console Metric Group / Attribute Linking"})," documentation."]})}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/project-settings/EventAgg2.png"),alt:"add to filter bar"}),"\n",(0,s.jsx)(t.p,{children:'Another common use case is to exclude non-fatal errors to see these metrics with regard to only fatal errors (Crashes, hangs). The exact filter you use to do this depends on the attributes you are indexing/SDK you are using (for example, errorType = "crash").'}),"\n",(0,s.jsx)(t.h3,{id:"prioritizing-crasherror-resolution",children:"Prioritizing Crash/Error Resolution"}),"\n",(0,s.jsx)(t.p,{children:"The Web Console's Triage and Explore views allow you to normalize your fingerprints against these metrics as well. This allows developers and tech leads to prioritize resolving crashes/errors that have the most impact on your app's stability."}),"\n",(0,s.jsx)(t.p,{children:"Once your SDK is sending these metrics, use the dropdown list at the top right of the Triage and/or Explore view to normalize your errors by the metric of your choice."}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/project-settings/EventAgg3.png"),alt:"dropdown list to normalize your errors"}),"\n",(0,s.jsx)(t.p,{children:'In this example, we have selected to normalize our errors by sessions. Now, in the "Errors by sessions" column, you can see the impact of each fingerprint relative to the number of sessions it occurred in. In the screenshot below, you can see that even though the fingerprint "8206af2" had the most occurrences, it only manifested in 0.0034% of sessions (1/29,220 total sessions in this time period). So it may make more sense for an engineer to investigate and resolve fingerprint "002e365" instead, which is present in a higher percentage of sessions.'}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/project-settings/EventAgg4.png"),alt:"errors by sessions"}),"\n",(0,s.jsx)(t.h2,{id:"advanced-use-cases-and-customization",children:"Advanced Use Cases and Customization"}),"\n",(0,s.jsx)(t.p,{children:"We understand that different applications are likely to require different metrics to properly monitor stability. While our SDKs provide session and unique user metrics out of the box, we have built this set of features to allow users to define custom metric events to suit the needs of their applications."}),"\n",(0,s.jsx)(t.p,{children:"For example, you can configure metrics to normalize for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"How many minutes of app usage were crash/error-free?"}),"\n",(0,s.jsx)(t.li,{children:'How many "levels" in your game had a crash/error occur?'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The configuration steps for this functionality vary by SDK. For more information about the required configuration steps, see the SDK-specific documentation below."}),"\n",(0,s.jsx)(t.h2,{id:"sdk-support-links",children:"SDK Support Links"}),"\n",(0,s.jsx)(t.p,{children:"As of August 2021, only our Unity SDK supports this functionality. Support for the Unreal Engine, native Android and iOS SDKs will be introduced in a future release."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/error-reporting/platform-integrations/unity/metrics/",children:"Unity SDK - Stability Metrics Configuration Documentation"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var s=r(96540),n=r(34164),o=r(23104),i=r(56347),a=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:r,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),n=a[r].value;n!==s&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(w,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(96540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);