"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49234],{73051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(74848),n=r(28453);r(11470),r(19365),r(86025);const s={id:"authenticated-pulls",title:"Using Authenticated Pulls",sidebar_label:"Authenticated Pulls"},i=void 0,o={id:"orchestrate/authenticated-pulls",title:"Using Authenticated Pulls",description:"This document describes how to push a container image to an authenticated registry and then subsequently use that image in Sauce Orchestrate.",source:"@site/docs/orchestrate/authenticated-pulls.md",sourceDirName:"orchestrate",slug:"/orchestrate/authenticated-pulls",permalink:"/sauce-docs/pr-preview/pr-2910/orchestrate/authenticated-pulls",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/authenticated-pulls.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"authenticated-pulls",title:"Using Authenticated Pulls",sidebar_label:"Authenticated Pulls"},sidebar:"docs",previous:{title:"Building Images",permalink:"/sauce-docs/pr-preview/pr-2910/orchestrate/building-images"},next:{title:"Best Practices",permalink:"/sauce-docs/pr-preview/pr-2910/orchestrate/best-practices"}},u={},c=[{value:"Registry Token",id:"registry-token",level:2},{value:"Pushing Your Image",id:"pushing-your-image",level:2},{value:"Using Your Private Image",id:"using-your-private-image",level:2},{value:"Using SauceLabs Container Registry?",id:"using-saucelabs-container-registry",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This document describes how to push a container image to an authenticated registry and then subsequently use that image in Sauce Orchestrate."}),"\n",(0,a.jsx)(t.h2,{id:"registry-token",children:"Registry Token"}),"\n",(0,a.jsx)(t.p,{children:"The first thing you will need to do is create an authorization token from your registry. Instructions vary depending on your provider. For this example we will use DockerHub."}),"\n",(0,a.jsxs)(t.p,{children:["For more information, see ",(0,a.jsx)(t.a,{href:"https://docs.docker.com/docker-hub/access-tokens/",children:"Creating and Managing Access Tokens"})," in the Docker documentation."]}),"\n",(0,a.jsx)(t.p,{children:"It is highly recommended that you create a unique authorization token in your registry that can only access the images necessary for running your tests."}),"\n",(0,a.jsx)(t.h2,{id:"pushing-your-image",children:"Pushing Your Image"}),"\n",(0,a.jsx)(t.p,{children:"To make your image accessible for Sauce Orchestrate it must first be pushed to a remote registry."}),"\n",(0,a.jsx)(t.p,{children:"First you must login to docker hub"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"docker login\n"})}),"\n",(0,a.jsx)(t.p,{children:"You will be prompted for your username and access token that you created."}),"\n",(0,a.jsx)(t.p,{children:"Now that you are logged in you can push your image"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"docker push [docker_user]/demo-java-orchestrate-tutorial:0.0.1\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note - you will need to replace ",(0,a.jsx)(t.code,{children:"[docker_user]"})," with your registry username."]}),"\n",(0,a.jsx)(t.h2,{id:"using-your-private-image",children:"Using Your Private Image"}),"\n",(0,a.jsx)(t.p,{children:"To use your private image in Sauce Orchestrate, update your saucectl config file, specifying a username and access token, and Sauce Labs will attempt to access your image. If we are unable to access your image you will receive an error response explaining what happened."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: v1alpha\nkind: imagerunner\nsauce:\n  region: us-west-1\nsuites:\n  - name: Desktop Tests\n    workload: webdriver\n    image: [docker_user]/demo-java-orchestrate-tutorial:0.0.1\n    # your docker hub credentials go here\n    imagePullAuth:\n      user: $SAUCE_IMAGE_USER\n      token: $SAUCE_IMAGE_TOKEN\n    # the command to run your tests\n    entrypoint: mvn -o test -pl best-practice -Dtest=DesktopTests\n    artifacts:\n      - "/workdir/best-practice/target/surefire-reports/*"\n\nartifacts:\n  download:\n    when: always\n    match:\n      - "*"\n    directory: ./artifacts\n'})}),"\n",(0,a.jsx)(t.h2,{id:"using-saucelabs-container-registry",children:"Using SauceLabs Container Registry?"}),"\n",(0,a.jsxs)(t.p,{children:["We provide a dedicated solution for storing container images within our infrastructure. If you're already using it -\nfeel free to check out ",(0,a.jsx)(t.a,{href:"https://docs.saucelabs.com/orchestrate/saucelabs-private-registry/",children:"additional documentation about it"}),",\nif not - reach out to SauceLabs customer support to learn more."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(18215),s=r(23104),i=r(56347),o=r(205),u=r(57485),c=r(31682),l=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[i,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:n}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,l.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function v(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),l=e=>{const t=e.currentTarget,r=u.indexOf(t),n=o[r].value;n!==a&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:l,...s,className:(0,n.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);