"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[55947],{5425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(74848),c=t(28453),r=(t(86025),t(11470)),s=t(19365);const o={id:"windows",title:"Install Sauce Connect on Windows",sidebar_label:"Windows"},l=void 0,i={id:"secure-connections/sauce-connect-5/installation/windows",title:"Install Sauce Connect on Windows",description:"Unpack the zip file",source:"@site/docs/secure-connections/sauce-connect-5/installation/windows.md",sourceDirName:"secure-connections/sauce-connect-5/installation",slug:"/secure-connections/sauce-connect-5/installation/windows",permalink:"/sauce-docs/pr-preview/pr-2903/secure-connections/sauce-connect-5/installation/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/installation/windows.md",tags:[],version:"current",lastUpdatedBy:"Micha\u0142 Matczuk",lastUpdatedAt:1723645308e3,frontMatter:{id:"windows",title:"Install Sauce Connect on Windows",sidebar_label:"Windows"},sidebar:"docs",previous:{title:"macOS",permalink:"/sauce-docs/pr-preview/pr-2903/secure-connections/sauce-connect-5/installation/macos"},next:{title:"Docker",permalink:"/sauce-docs/pr-preview/pr-2903/secure-connections/sauce-connect-5/installation/docker"}},u={},d=[{value:"Unpack the zip file",id:"unpack-the-zip-file",level:3},{value:"Add the binary to PATH",id:"add-the-binary-to-path",level:3},{value:"Add completion",id:"add-completion",level:3},{value:"Edit config file",id:"edit-config-file",level:3},{value:"Start Sauce Connect",id:"start-sauce-connect",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"unpack-the-zip-file",children:"Unpack the zip file"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"ARM64",values:[{label:"ARM64",value:"ARM64"},{label:"x86-64",value:"x86-64"}],children:[(0,a.jsx)(s.A,{value:"ARM64",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir C:\\sauce-connect\nInvoke-WebRequest -Uri https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect-5.1.3_windows.aarch64.zip -OutFile sauce-connect.zip\nExpand-Archive -Path sauce-connect.zip -DestinationPath C:\\sauce-connect\n"})})}),(0,a.jsx)(s.A,{value:"x86-64",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir C:\\sauce-connect\nInvoke-WebRequest -Uri https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect-5.1.3_windows.x86_64.zip -OutFile sauce-connect.zip\nExpand-Archive -Path sauce-connect.zip -DestinationPath C:\\sauce-connect\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"add-the-binary-to-path",children:"Add the binary to PATH"}),"\n",(0,a.jsxs)(n.p,{children:["Add ",(0,a.jsx)(n.code,{children:"C:\\sauce-connect"})," to ",(0,a.jsx)(n.code,{children:"PATH"})," environment variable."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$currentPath = [System.Environment]::GetEnvironmentVariable('PATH', [System.EnvironmentVariableTarget]::Machine)\n$newPath = \"$currentPath;C:\\sauce-connect\"\n[System.Environment]::SetEnvironmentVariable('PATH', $newPath, [System.EnvironmentVariableTarget]::Machine)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"add-completion",children:"Add completion"}),"\n",(0,a.jsx)(n.p,{children:"Open PowerShell and check if you already have a profile."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Test-Path $PROFILE\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If the command returns ",(0,a.jsx)(n.code,{children:"False"}),", create a new profile."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"New-Item -ItemType File -Path $PROFILE -Force\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add PowerShell completion to the profile."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'Add-Content -Path $PROFILE -Value ". C:\\sauce-connect\\completions\\sc.ps1"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"edit-config-file",children:"Edit config file"}),"\n",(0,a.jsxs)(n.p,{children:["This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.\nSee ",(0,a.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"CLI reference"})," for more details."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"notepad C:\\sauce-connect\\sauce-connect.yaml\n"})}),"\n",(0,a.jsx)(n.h3,{id:"start-sauce-connect",children:"Start Sauce Connect"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sc.exe run --config-file C:\\sauce-connect\\sauce-connect.yaml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const c={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(c.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),c=t(18215),r=t(23104),s=t(56347),o=t(205),l=t(57485),i=t(31682),u=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:c}}=e;return{value:n,label:t,attributes:a,default:c}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const c=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(c.location.search);n.set(r,e),c.replace({...c.location,search:n.toString()})}),[r,c])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:c}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[i,d]=m({queryString:t,groupId:c}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,r]=(0,u.Dv)(t);return[c,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:c}),v=(()=>{const e=i??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),c=o[t].value;c!==a&&(i(n),s(c))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,c.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:c}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===c));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,c.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const c={},r=a.createContext(c);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);