"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[17939],{85428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(74848),s=n(28453),r=n(86025);n(11470),n(19365);const i={id:"release-notes",title:"Managing Release Notes",sidebar_label:"Managing Release Notes"},l=void 0,o={id:"testfairy/app-distribution/release-notes",title:"Managing Release Notes",description:"Release notes provide important information about app updates or new builds to users and stakeholders. You can update release notes using various methods, depending on your preferred workflow and tools. Here are the available options:",source:"@site/docs/testfairy/app-distribution/release-notes.md",sourceDirName:"testfairy/app-distribution",slug:"/testfairy/app-distribution/release-notes",permalink:"/sauce-docs/pr-preview/pr-2903/testfairy/app-distribution/release-notes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/app-distribution/release-notes.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688688624e3,frontMatter:{id:"release-notes",title:"Managing Release Notes",sidebar_label:"Managing Release Notes"},sidebar:"docs",previous:{title:"Invalidating Apps",permalink:"/sauce-docs/pr-preview/pr-2903/testfairy/app-distribution/app-expiration"},next:{title:"Tags",permalink:"/sauce-docs/pr-preview/pr-2903/testfairy/app-distribution/tags"}},u={},d=[{value:"During Upload",id:"during-upload",level:2},{value:"In Build Settings",id:"in-build-settings",level:2},{value:"Via Upload API",id:"via-upload-api",level:2},{value:"Using Jenkins",id:"using-jenkins",level:2},{value:"Stylizing Release Notes",id:"stylizing-release-notes",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Release notes provide important information about app updates or new builds to users and stakeholders. You can update release notes using various methods, depending on your preferred workflow and tools. Here are the available options:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#during-upload",children:"During Upload"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#in-build-settings",children:"In Build Settings"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#via-upload-api",children:"Via Upload API"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#using-jenkins",children:"Using Jenkins"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#stylizing-release-notes",children:"Stylizing Release Notes"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"during-upload",children:"During Upload"}),"\n",(0,a.jsx)(t.p,{children:"When uploading a new app or version on the dashboard, enter the release notes on the last screen after the app is uploaded."}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/app-distribution/upload-release-notes.png"),alt:"Add release notes during upload"}),"\n",(0,a.jsx)(t.h2,{id:"in-build-settings",children:"In Build Settings"}),"\n",(0,a.jsxs)(t.p,{children:["After an app or new build is uploaded, open the build settings and modify the release notes under ",(0,a.jsx)(t.strong,{children:"App Distribution"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/app-distribution/settings-release-notes.png"),alt:"Release notes in build settings"}),"\n",(0,a.jsx)(t.h2,{id:"via-upload-api",children:"Via Upload API"}),"\n",(0,a.jsx)(t.p,{children:"The recommended method for uploading apps is through the upload API. (see Upload API /testfairy/api-reference/upload-api for more information)."}),"\n",(0,a.jsxs)(t.p,{children:["To add release notes, use the ",(0,a.jsx)(t.code,{children:"comment"})," field."]}),"\n",(0,a.jsx)(t.p,{children:"For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl https://upload.testfairy.com/api/upload \\\n    -F api_key='your_api_key' \\\n    -F file=@sample.apk \\\n    -F symbols_file=@sample_mapping.txt \\\n    -F testers_groups='friends,beta' \\\n    -F notify='on'\\\n    -F comment='Put Release Notes Here'\n"})}),"\n",(0,a.jsx)(t.h2,{id:"using-jenkins",children:"Using Jenkins"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the ",(0,a.jsx)(t.a,{href:"https://wiki.jenkins.io/display/JENKINS/TestFairy+Plugin",children:"Jenkins plugin"})," uses the comments included in every commit in a pretty standard way. To add your release notes, create a text file in the following location:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_ID/testfairy_change_log\n"})}),"\n",(0,a.jsx)(t.p,{children:"The content of this file overrides the default changelog."}),"\n",(0,a.jsx)(t.h2,{id:"stylizing-release-notes",children:"Stylizing Release Notes"}),"\n",(0,a.jsx)(t.p,{children:"You can use Markdown syntax to stylize the release notes and the app description. Markdown is supported in the release notes section, as well as in the app description displayed in email invitations, landing pages, and testers' dashboard tooltips."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),s=n(18215),r=n(23104),i=n(56347),l=n(205),o=n(57485),u=n(31682),d=n(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,c]=f({queryString:n,groupId:s}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),m=(()=>{const e=u??g;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var b=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==a&&(u(t),i(s))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:c,onClick:d,...r,className:(0,s.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);