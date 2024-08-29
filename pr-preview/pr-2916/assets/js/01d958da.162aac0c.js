"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[24457],{29190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(74848),i=r(28453),s=(r(11470),r(19365),r(86025));const a={id:"http-submission",title:"HTTP Submission for Minidump",sidebar_label:"HTTP Submission",description:"Submit crash dumps directly over HTTP."},o=void 0,l={id:"error-reporting/platform-integrations/http-submission",title:"HTTP Submission for Minidump",description:"Submit crash dumps directly over HTTP.",source:"@site/docs/error-reporting/platform-integrations/http-submission.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/http-submission",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/http-submission",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/http-submission.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"http-submission",title:"HTTP Submission for Minidump",sidebar_label:"HTTP Submission",description:"Submit crash dumps directly over HTTP."},sidebar:"backtrace",previous:{title:"Breakpad",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/breakpad"},next:{title:"Source Maps",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/source-map"}},c={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Submit a Dump File",id:"submit-a-dump-file",level:2},{value:"Attaching Attributes",id:"attaching-attributes",level:2},{value:"Query String Parameter",id:"query-string-parameter",level:3},{value:"Multipart Form Data Parameter",id:"multipart-form-data-parameter",level:3},{value:"Attaching Files",id:"attaching-files",level:2},{value:"Multipart POST",id:"multipart-post",level:3},{value:"Attach a File to an Existing Crash Report",id:"attach-a-file-to-an-existing-crash-report",level:3},{value:"Listener Layer",id:"listener-layer",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"You may have a pre-existing crash reporting facility or generate dump files using MiniDumpWriteDump on Windows; this guide shows you how to submit these over HTTP or HTTPS. If you use a supported crash reporting library, use their preferred submission mechanisms."}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Backtrace account (",(0,n.jsx)(t.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,n.jsx)(t.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["A Backtrace project and a ",(0,n.jsx)(t.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"submit-a-dump-file",children:"Submit a Dump File"}),"\n",(0,n.jsxs)(t.p,{children:["For this example, let us assume that our submission token is ",(0,n.jsx)(t.code,{children:"abcdef0123456789"}),". An HTTP POST is used to submit a dump file. The example below shows a curl invocation."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["For large files, include the header flag ",(0,n.jsx)(t.code,{children:'-H "Expect:"'})," to override some default curl behavior which can cause issues when uploading to Backtrace."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -v --data-binary @example_minidump.dmp -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump"\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can do the same through HTTP multipart:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -v -F "upload_file_minidump=@example_minidump.dmp" -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"attaching-attributes",children:"Attaching Attributes"}),"\n",(0,n.jsx)(t.p,{children:"You can pass user-defined attributes as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"query string parameter"}),"\n",(0,n.jsx)(t.li,{children:"multipart form data parameter"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can mix them and use some in the query string and some in the multipart form data."}),"\n",(0,n.jsx)(t.h3,{id:"query-string-parameter",children:"Query String Parameter"}),"\n",(0,n.jsxs)(t.p,{children:["For example, let's say that we wanted to submit a minidump and set the ",(0,n.jsx)(t.code,{children:"version"})," attribute associated with it to ",(0,n.jsx)(t.code,{children:"1.0"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -v -F "upload_file_minidump=@example_minidump.dmp" -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump&version=1.0"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"multipart-form-data-parameter",children:"Multipart Form Data Parameter"}),"\n",(0,n.jsxs)(t.p,{children:["For example, let's say you wanted to submit a minidump and set the ",(0,n.jsx)(t.code,{children:"version"})," attribute associated with it to ",(0,n.jsx)(t.code,{children:"1.0"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -v -F "version=1.0" -F "upload_file_minidump=@example_minidump.dmp" -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For more information on attributes, see ",(0,n.jsx)(t.a,{href:"/error-reporting/project-setup/attributes/",children:"Indexing Attributes"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"attaching-files",children:"Attaching Files"}),"\n",(0,n.jsx)(t.h3,{id:"multipart-post",children:"Multipart POST"}),"\n",(0,n.jsxs)(t.p,{children:["A submission where the ",(0,n.jsx)(t.code,{children:"test.json"})," attachment is included with the initial crash submission. You will need to modify the following to submit to a project in your account successfully:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<Path_to_your_file>"}),": Location of file containing crash data to send"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<Path_to_your_attachment>"}),": Location of the file to be attached to the crash"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<universe>"}),": First part of the URL used to access your Backtrace account"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<error-token>"}),": An error token for the project you want to submit crash data to"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -v -F "upload_file=@<Path_to_your_file>/example_minidump.dmp" -H "Expect:" -F "attachment_test.json=@<Path_to_your_file>/test.json; type=application/json" "<backtrace submission url>"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"attach-a-file-to-an-existing-crash-report",children:"Attach a File to an Existing Crash Report"}),"\n",(0,n.jsxs)(t.p,{children:["This method requires the ",(0,n.jsx)(t.code,{children:"_rxid"})," value to be assigned to a submitted crash report. This value will be returned after submitting a properly formatted request. The first curl command is the submission of the crash report. The second is the attachment of a file to the first."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -d <Path_to_your_file>/example_minidump.dmp -H "Expect:" "<backtrace submission url>"\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<Path_to_your_file>"}),": Location of file containing crash data to send"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<universe>"}),": First part of the URL used to access your Backtrace account"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<error-token>"}),": An error token for the project you want to submit crash data to"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A properly formatted crash report submission should return a response like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{"response":"ok","_rxid":"56000000-8be7-5806-0000-000000000000"}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["To attach a file to this object, copy the ",(0,n.jsx)(t.code,{children:"_rxid"})," returned."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -v --data-binary "upload_file=@<your_file_path>/test.json" -H "Expect:" -H "Content-Type:application/json" "<backtrace submission url>?object=<\\_rxid>&attachment_name=<Path_to_your_attachment>"\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"&object=<_rxid> "}),": value returned from first http submission"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"&attachment_name=<Path_to_your_attachment>"}),": Location of the file to be attached to the crash"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A suitably formatted upload submission should return a response like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{"response":"ok","_rxid":"ce000000-0000-0000-0000-000000000000","attachment_name": "test.json","attachment_id": "28","object":"ce"}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The response should tell you that the file was attached to the specified object in your Backtrace project. You will still get the 200/ok response, but the ",(0,n.jsx)(t.code,{children:"_rxid"})," will look slightly different. As no crash was submitted, it will not send a new unique id. This time it sends the ",(0,n.jsx)(t.code,{children:"id"})," attribute/Error identifier in the debug view used to identify the specific crash report."]}),"\n",(0,n.jsx)(t.h2,{id:"listener-layer",children:"Listener Layer"}),"\n",(0,n.jsxs)(t.p,{children:["It is also possible to submit directly to the listener on your instance. The first step is ensuring a listener exists for submitting crash data. Look for listeners with the ",(0,n.jsx)(t.code,{children:"http/writerlabel"}),". You can find Listener settings under the ",(0,n.jsx)(t.strong,{children:"Configuration Organization"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("/img/error-reporting/minidump/listener_02.png"),alt:"listeners"}),"\n",(0,n.jsxs)(t.p,{children:["In the above example, if the server is hosted at ",(0,n.jsx)(t.code,{children:"testing.company.com"}),", then we can submit dump files to either ",(0,n.jsx)(t.code,{children:"http://testing.company.com:6097/post?format=minidump&token=<abcdef0123456789>"})," or ",(0,n.jsx)(t.code,{children:"https://testing.company.com:6098/post?format=minidump&token=<abcdef0123456789>"}),". They are the first two entries in the above screenshot, with the ",(0,n.jsx)(t.code,{children:"http/writer"})," labels."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,a),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),i=r(34164),s=r(23104),a=r(56347),o=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:i}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),x=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),i=o[r].value;i!==n&&(c(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function _(e){const t=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);