"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[64097],{88520:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(74848),a=t(28453);t(11470),t(19365),t(86025);const o={id:"cryengine",title:"CryEngine Integration Guide",sidebar_label:"CryEngine",description:"Integrate your CryEngine game into Backtrace for crash reporting."},i=void 0,s={id:"error-reporting/platform-integrations/cryengine",title:"CryEngine Integration Guide",description:"Integrate your CryEngine game into Backtrace for crash reporting.",source:"@site/docs/error-reporting/platform-integrations/cryengine.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/cryengine",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/cryengine",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/cryengine.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1689285256e3,frontMatter:{id:"cryengine",title:"CryEngine Integration Guide",sidebar_label:"CryEngine",description:"Integrate your CryEngine game into Backtrace for crash reporting."},sidebar:"backtrace",previous:{title:"Troubleshooting",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/unreal/troubleshooting"},next:{title:"Nintendo Switch",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/nintendo"}},c={},l=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"How To Integrate",id:"how-to-integrate",level:2},{value:"Register for a Backtrace Instance",id:"register-for-a-backtrace-instance",level:3},{value:"Configuration File Edits",id:"configuration-file-edits",level:3},{value:"Debug Symbols",id:"debug-symbols",level:3}];function u(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This guide shows you how to integrate your CryEngine game with Backtrace for crash reporting."}),"\n",(0,n.jsx)(r.p,{children:"Backtrace provides first-class support for the native crash reporting format of CryEngine. The basic integration consists of modifying a configuration file to configure your game to use Backtrace as the crash reporting server. The system accepts crash reports from the game client, automatically extracts and indexes all the metadata provided by the client, and accepts any file attachments."}),"\n",(0,n.jsx)(r.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,n.jsxs)(r.p,{children:["Backtrace's integration with CryEngine supports games deployed on Windows. If you are deploying to game consoles (PS4, Xbox One), use ",(0,n.jsx)(r.a,{href:"/error-reporting/platform-integrations/overview",children:"Backtrace's Video Game Console Integrations"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"For On-Premise (self-hosted) users: CryEngine crash ingestion requires specific packages. Contact support for detailed instructions and information."}),"\n",(0,n.jsx)(r.h2,{id:"how-to-integrate",children:"How To Integrate"}),"\n",(0,n.jsx)(r.h3,{id:"register-for-a-backtrace-instance",children:"Register for a Backtrace Instance"}),"\n",(0,n.jsxs)(r.p,{children:["If you don't have one, register for a ",(0,n.jsx)(r.a,{href:"https://www.backtrace.io/",children:"Backtrace instance"}),". You can create projects and tokens to manage your incoming crashes."]}),"\n",(0,n.jsxs)(r.p,{children:["Your server instance has a domain in the following form: ",(0,n.jsx)(r.code,{children:"https://<AAAA>.sp.backtrace.io"})]}),"\n",(0,n.jsxs)(r.p,{children:["Your submission token is accessible under your ",(0,n.jsx)(r.a,{href:"https://backtrace.io/docs/token-configurations/",children:"project configuration menu"})," and looks like this: ",(0,n.jsx)(r.code,{children:"45e44f361045ae4343e4113e77e0ea3eee1043367342c3f03c3a273cb3e433ae"})]}),"\n",(0,n.jsx)(r.p,{children:"Integrating your game with Backtrace only takes a few minutes."}),"\n",(0,n.jsx)(r.h3,{id:"configuration-file-edits",children:"Configuration File Edits"}),"\n",(0,n.jsx)(r.p,{children:"The configuration file is located in different paths depending on the type of execution method."}),"\n",(0,n.jsxs)(r.p,{children:["For development, edit ",(0,n.jsx)(r.code,{children:"user.cfg"})," in the project directory.\nFor production, edit ",(0,n.jsx)(r.code,{children:"system.cfg"})," in the build directory."]}),"\n",(0,n.jsx)(r.p,{children:"The following console variables must be changed:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sys_crashrpt"}),": enable or disable the crash reporter"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sys_crashrpt_appname"}),": application name"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sys_crashrpt_appversion"}),": application version"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sys_crashrpt_email"}),": your companies support email address to display to the player"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sys_crashrpt_privacypolicy"}),": link to your companies privacy policy to display to the player"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sys_crashrpt_server"}),": Backtrace crash server, in the format described as follows ",(0,n.jsx)(r.a,{href:"https://cryengine.backtrace.io/post?universe=%5Buniverse%5D&token=%5Btoken",children:"https://cryengine.backtrace.io/post?universe=[universe]&token=[token"}),"]"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Example values:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'sys_crashrpt = "1"\nsys_crashrpt_appname = "My Game"\nsys_crashrpt_appversion = "0.8"\nsys_crashrpt_email = "support@gamingcompany.com"\nsys_crashrpt_privacypolicy = "https://gamingcompany.com/privacy"\nsys_crashrpt_server = "https://cryengine.backtrace.io/post?universe=gamingcompany&token=5ba5cd76ceac75975cc3c0e8237d65ba743abd0e4d85aa2f5e57e98a44643b4c"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"debug-symbols",children:"Debug Symbols"}),"\n",(0,n.jsxs)(r.p,{children:["When building your game, ensure that it is configured to generate debug symbols (.pdb files) that can be provided to Backtrace. This enables proper deduplication and grouping of minidumps and human-readable call stacks. For more information, refer to the ",(0,n.jsx)(r.a,{href:"/error-reporting/project-setup/symbolication/",children:"Symbolication Guide"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"You can now view incoming CryEngine crashes in your Backtrace instance. Check out the Debugger to see detailed information about your crashes."})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(18215);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),a=t(18215),o=t(23104),i=t(56347),s=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=p(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[l,d]=g({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=l??f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const r=e.currentTarget,t=c.indexOf(r),a=s[t].value;a!==n&&(l(r),i(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function x(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function j(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...e,...r}),(0,y.jsx)(x,{...e,...r})]})}function k(e){const r=(0,m.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(96540);const a={},o=n.createContext(a);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);