"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[34981],{54492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(74848),i=r(28453),c=r(86025);r(11470),r(19365);const s={id:"circleci",title:"saucectl with CircleCI",sidebar_label:"CircleCI"},a=void 0,l={id:"dev/cli/saucectl/usage/ci/circleci",title:"saucectl with CircleCI",description:"These examples can apply to virtually any CircleCI deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.",source:"@site/docs/dev/cli/saucectl/usage/ci/circleci.md",sourceDirName:"dev/cli/saucectl/usage/ci",slug:"/dev/cli/saucectl/usage/ci/circleci",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/usage/ci/circleci",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ci/circleci.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"circleci",title:"saucectl with CircleCI",sidebar_label:"CircleCI"},sidebar:"dev",previous:{title:"Use Cases",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/usage/use-cases"},next:{title:"GitHub Actions",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/saucectl/usage/ci/github-actions"}},o={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Add Project Environment Variables",id:"add-project-environment-variables",level:2},{value:"Modify the CircleCI Configuration",id:"modify-the-circleci-configuration",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"These examples can apply to virtually any CircleCI deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository."}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.a,{href:"https://circleci.com/signup/",children:"CircleCI Account"})]}),"\n",(0,n.jsx)(t.li,{children:"A git repository hosting service (GitHub or BitBucket)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"project-setup",children:"Project Setup"}),"\n",(0,n.jsx)(t.p,{children:"The first step is to ensure you have a CircleCI account, and to login with your git hosting provider username; the examples below use GitHub authentication."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Log in to CircleCI."}),"\n",(0,n.jsxs)(t.li,{children:["Choose the desired repo and click ",(0,n.jsx)(t.strong,{children:"Set Up Project"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Add Config"})," (or Use Existing Config). This creates a new branch in your project called ",(0,n.jsx)(t.code,{children:"circle-ci-project-setup"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Do not worry if your project fails to build. You'll need to modify the ",(0,n.jsx)(t.code,{children:"config.yml"})," manually anyway."]})}),"\n",(0,n.jsx)(t.h2,{id:"add-project-environment-variables",children:"Add Project Environment Variables"}),"\n",(0,n.jsx)(t.p,{children:"In order for CircleCI to communicate with Sauce Labs you need to authenticate with project environment variables."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In CircleCI, go to your ",(0,n.jsx)(t.strong,{children:"Project Settings"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,c.Ay)("img/stt/circleci-project-settings.png"),alt:"CircleCI Project Settings",width:"200"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"Environment Variables"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,c.Ay)("img/stt/circleci-add-variables.png"),alt:"Add Variables in CircleCI",width:"200"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add variables for your ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs account credentials"})," as ",(0,n.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,n.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"}),", respectively."]}),"\n",(0,n.jsx)("img",{src:(0,c.Ay)("img/stt/circleci-variables.png"),alt:"CircleCI Variables",width:"600"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"modify-the-circleci-configuration",children:"Modify the CircleCI Configuration"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the root of your project directory, create the ",(0,n.jsx)(t.code,{children:".circleci"})," directory if it doesn't already exist, and open/create ",(0,n.jsx)(t.code,{children:"config.yml"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You can easily execute saucectl on CircleCI through ",(0,n.jsx)(t.a,{href:"https://circleci.com/developer/orbs/orb/saucelabs/saucectl-run",children:"saucectl-run"})," orb. Add the orb to your current ",(0,n.jsx)(t.code,{children:"config.yml"})," using the following reference to use it:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:"reference",children:"https://github.com/saucelabs/saucectl-cypress-example/blob/master/.circleci/config.yml#L2-L3\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Now you can use the orb directly as a step of one of your jobs:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:"reference",children:"https://github.com/saucelabs/saucectl-cypress-example/blob/master/.circleci/config.yml#L13-L15\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can reference a complete ",(0,n.jsxs)(t.a,{href:"https://github.com/saucelabs/saucectl-cypress-example/blob/master/.circleci/config.yml",children:[(0,n.jsx)(t.code,{children:"config.yml"})," example"]})," for more detail."]})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Commit the updated ",(0,n.jsx)(t.code,{children:"config.yml"})," to your git hosting service provider."]}),"\n",(0,n.jsx)(t.li,{children:"Navigate back to the CircleCI dashboard to see your build pass."}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,c.Ay)("img/stt/circleci-output.png"),alt:"CircleCI Output"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var c=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(96540),i=r(34164),c=r(23104),s=r(56347),a=r(205),l=r(57485),o=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),c=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(c),(0,n.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(i.location.search);t.set(c,e),i.replace({...i.location,search:t.toString()})}),[c,i])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,c=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:c}))),[o,d]=m({queryString:r,groupId:i}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,c]=(0,u.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:i}),g=(()=>{const e=o??b;return p({value:e,tabValues:c})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,c]),tabValues:c}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),i=a[r].value;i!==n&&(o(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:c}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...c,className:(0,i.A)("tabs__item",g.tabItem,c?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:c}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===c));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==c})))})}function y(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function C(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const i={},c=n.createContext(i);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);