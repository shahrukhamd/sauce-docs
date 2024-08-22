"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[9712],{59138:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(74848),a=r(28453);r(11470),r(19365),r(86025);const i={id:"bcd",title:"BCD",sidebar_label:"BCD",description:"BCD is configured to use the Backtrace I/O tracers and database clients to allow for process snapshots to be directly submitted to the database."},s=void 0,o={id:"error-reporting/advanced/bcd",title:"BCD",description:"BCD is configured to use the Backtrace I/O tracers and database clients to allow for process snapshots to be directly submitted to the database.",source:"@site/docs/error-reporting/advanced/bcd.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/bcd",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/advanced/bcd",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/bcd.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1689328429e3,frontMatter:{id:"bcd",title:"BCD",sidebar_label:"BCD",description:"BCD is configured to use the Backtrace I/O tracers and database clients to allow for process snapshots to be directly submitted to the database."},sidebar:"backtrace",previous:{title:"Invariants",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/advanced/invariants"},next:{title:"Submission Buckets",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/advanced/submission-buckets"}},l={},c=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Download",id:"download",level:2},{value:"Build",id:"build",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Design",id:"design",level:3},{value:"Handling Crashes",id:"handling-crashes",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"BCD is a library for invoking out-of-process tools in response to program errors. By default, BCD is configured to use the Backtrace I/O tracers and database clients to allow process snapshots to be directly submitted to the database."}),"\n",(0,t.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,t.jsx)(n.p,{children:"BCD supports Linux. It supports GCC, Clang, and ICC. Although BCD must be built with a C compiler that supports GNU99, the BCD interface is C++ compatible."}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["For glibc versions before 2.17, ",(0,t.jsx)(n.code,{children:"librt"})," is required."]}),"\n",(0,t.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,t.jsxs)(n.p,{children:["You can download BCD from the ",(0,t.jsx)(n.a,{href:"https://github.com/backtrace-labs/bcd",children:"BCD GitHub"})," repository."]}),"\n",(0,t.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.p,{children:"To use BCD as a stand-alone library, follow these steps:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./configure\nmake\nmake install\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also use BCD in amalgamated mode by dropping in a header and source file in your source tree. To do this, follow these steps:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./configure\nmake amalgamated\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The source file is located at ",(0,t.jsx)(n.code,{children:"src/bcd-amalgamated.c"}),", and the header file is ",(0,t.jsx)(n.code,{children:"include/bcd.h"}),". Copy these files to your source tree."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["For a example, refer to ",(0,t.jsx)(n.code,{children:"regressions/broad.c"}),". For more detailed documentation, see ",(0,t.jsx)(n.code,{children:"include/bcd.h"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To initialize the library, call ",(0,t.jsx)(n.code,{children:"bcd_init"}),". This will initialize the library for use. If you want to emit non-fatal errors, you must also use ",(0,t.jsx)(n.code,{children:"bcd_attach"})," to initialize a ",(0,t.jsx)(n.code,{children:"bcd_t"})," object. Each thread must use a unique ",(0,t.jsx)(n.code,{children:"bcd_t"})," object. You can destroy these ",(0,t.jsx)(n.code,{children:"bcd_t"})," objects using ",(0,t.jsx)(n.code,{children:"bcd_detach"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"bcd_emit"})," to request a snapshot of a non-fatal error. The errors will be grouped according to the error message passed to ",(0,t.jsx)(n.code,{children:"bcd_emit"}),". For fatal errors, you can call ",(0,t.jsx)(n.code,{children:"bcd_fatal"}),". BCD will exit and deinitialize after a call to `bcd_fatal, so your program is expected to exit at that point."]}),"\n",(0,t.jsxs)(n.p,{children:["You can configure credentials, permissions, OOM killer interaction, and more using the ",(0,t.jsx)(n.code,{children:"bcd_config"})," data structure. Refer to ",(0,t.jsx)(n.code,{children:"bcd.h"})," for details."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <bcd.h>\n\nint main(void) {\n  struct bcd_config config;\n  bcd_error_t error;\n  bcd_t bcd;\n\n  /* Initialize BCD configuration. See bcd.h for options */\n  if (bcd_config_init(&config, &error) == -1)\n    goto fatal;\n\n  /* Initialize the library. */\n  if (bcd_init(&config, &error) == -1)\n    goto fatal;\n\n  /* Initialize a handle to BCD. This should be called by every thread interacting with BCD. */\n  if (bcd_attach(&bcd, &error) == -1)\n    goto fatal;\n\n  if (bcd_kv(&bcd, "application", "my_application", &error) == -1)\n    goto fatal;\n\n  if (bcd_kv(&bcd, "datacenter", "my data center", &error) == -1)\n    goto fatal;\n\n  /*\n   * Generate a snapshot of the calling thread and upload it to\n   * the Backtrace database. Key-value attributes will be included.\n   */\n  bcd_emit(&bcd, "This is a non-fatal error");\n\n  /*\n   * We generate a fatal error and exit immediately.\n   */\n  bcd_fatal("This is a fatal error. No recovery");\n  return 0;\n\nfatal:\n  fprintf(stderr, "error: %s\\n", bcd_error_message(&error));\n  exit(EXIT_FAILURE);\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.p,{children:["For ease of use, ",(0,t.jsx)(n.code,{children:"bcd_emit"})," and ",(0,t.jsx)(n.code,{children:"bcd_fatal"})," do not provide return values. Error callbacks are used, which are executed in the context of the BCD slave. If a developer wishes to terminate their process due to error logging failures, they may register their own callbacks. BCD itself will never terminate the calling process."]}),"\n",(0,t.jsxs)(n.p,{children:["BCD relies on a UNIX socket (by default, ",(0,t.jsx)(n.code,{children:"/tmp/bcd.*"}),") for thread communications and uses pipes for handling fatal errors and initial library configuration. If either of these facilities is closed erroneously, BCD generates a fatal error and exit. If this is a concern, it is recommended to install your own error handler to terminate the monitored process."]}),"\n",(0,t.jsx)(n.p,{children:"BCD allocates memory in a separate process on errors, which may not be suitable for systems that lack overcommit."}),"\n",(0,t.jsx)(n.h3,{id:"design",children:"Design"}),"\n",(0,t.jsxs)(n.p,{children:["During ",(0,t.jsx)(n.code,{children:"bcd_init"}),", BCD initializes a pipe and forks a process. The child process initializes a UNIX socket for per-thread communications. The pipe is used early in initialization to communicate configuration errors and for fatal error handling. The BCD child process forks and executes in response to trace requests."]}),"\n",(0,t.jsx)(n.p,{children:"All communication between the host application and BCD occurs synchronously to maintain global ordering of all BCD operations."}),"\n",(0,t.jsx)(n.h3,{id:"handling-crashes",children:"Handling Crashes"}),"\n",(0,t.jsxs)(n.p,{children:["By default, BCD does not set any signal handlers as complex runtimes may rely on signals for functionality. To handle crashes, ensure you install a signal handler. You can use ",(0,t.jsx)(n.code,{children:"bcd_emit"})," for recoverable crashes and ",(0,t.jsx)(n.code,{children:"bcd_fatal"})," for non-recoverable crashes. These functions are signal-safe and thread-safe."]}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example that uses ",(0,t.jsx)(n.code,{children:"signal"}),". For production use, it is recommended to use ",(0,t.jsx)(n.code,{children:"sigaction"})," with ",(0,t.jsx)(n.code,{children:"SA_SIGINFO"})," set to allow for additional data extraction at the time of the fault."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <signal.h>\n#include <bcd.h>\n\nstatic void signal_handler(int s) {\n  bcd_fatal("This is a fatal crash");\n  raise(s);\n  return;\n}\n\nint main(void) {\n  struct bcd_config config;\n  bcd_error_t error;\n  bcd_t bcd;\n\n  /* Initialize BCD configuration. See bcd.h for options */\n  if (bcd_config_init(&config, &error) == -1)\n    exit(EXIT_FAILURE);\n\n  /* Initialize the library. */\n  if (bcd_init(&config, &error) == -1)\n    exit(EXIT_FAILURE);\n\n  /* Initialize a handle to BCD. */\n  if (bcd_attach(&bcd, &error) == -1)\n    exit(EXIT_FAILURE);\n\n  if (signal(SIGSEGV, signal_handler) == SIG_ERR)\n    abort();\n\n  if (signal(SIGABRT, signal_handler) == SIG_ERR)\n    abort();\n\n  return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["If you are on Linux and ",(0,t.jsx)(n.code,{children:"yama"})," is enabled, you can change the ",(0,t.jsx)(n.code,{children:"ptrace"})," scope for your program using ",(0,t.jsx)(n.code,{children:"prctl"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#include\n\nprctl(PR_SET_PTRACER, PR_SET_PTRACER_ANY, 0, 0, 0);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["System-level controls are available in ",(0,t.jsx)(n.code,{children:"/proc/sys/kernel/yama"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, refer to the ",(0,t.jsx)(n.a,{href:"https://www.kernel.org/doc/Documentation/security/Yama.txt",children:"Yama documentation"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>_});var t=r(96540),a=r(18215),i=r(23104),s=r(56347),o=r(205),l=r(57485),c=r(31682),d=r(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=h(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=b({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function _(e){const n=(0,m.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);