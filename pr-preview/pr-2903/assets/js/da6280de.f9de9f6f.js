"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[46915],{30755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);n(11470),n(19365),n(86025);const a={id:"building-images",title:"Building Docker Images",sidebar_label:"Building Images"},s=void 0,o={id:"orchestrate/building-images",title:"Building Docker Images",description:"Sauce Labs supports Docker images, providing you with a powerful way to orchestrate tests. In order to use Sauce Labs Orchestrate you will need to package your test code and all of its dependencies as a Docker image and publish it to a Docker container registry so that your tests can be run in the Sauce Labs infrastructure.",source:"@site/docs/orchestrate/building-images.md",sourceDirName:"orchestrate",slug:"/orchestrate/building-images",permalink:"/sauce-docs/pr-preview/pr-2903/orchestrate/building-images",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/building-images.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1683909726e3,frontMatter:{id:"building-images",title:"Building Docker Images",sidebar_label:"Building Images"},sidebar:"docs",previous:{title:"saucectl Configuration",permalink:"/sauce-docs/pr-preview/pr-2903/orchestrate/saucectl-configuration"},next:{title:"Authenticated Pulls",permalink:"/sauce-docs/pr-preview/pr-2903/orchestrate/authenticated-pulls"}},l={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Building and Pushing Images",id:"building-and-pushing-images",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a Dockerfile",id:"creating-a-dockerfile",level:3},{value:"Example",id:"example",level:4},{value:"Choosing and Setting a Base Image",id:"choosing-and-setting-a-base-image",level:3},{value:"Installing Additional Tools",id:"installing-additional-tools",level:3},{value:"Adding Other Files and Directories",id:"adding-other-files-and-directories",level:3},{value:"Build Image",id:"build-image",level:3},{value:"Pushing to a Registry",id:"pushing-to-a-registry",level:2},{value:"Preparing the Image for the Registry",id:"preparing-the-image-for-the-registry",level:3},{value:"Pushing the Image to the Registry",id:"pushing-the-image-to-the-registry",level:3},{value:"Using your Image in Sauce Labs",id:"using-your-image-in-sauce-labs",level:3},{value:"CI Integrations",id:"ci-integrations",level:2},{value:"GitHub Actions",id:"github-actions",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Sauce Labs supports Docker images, providing you with a powerful way to orchestrate tests. In order to use Sauce Labs Orchestrate you will need to package your test code and all of its dependencies as a Docker image and publish it to a Docker container registry so that your tests can be run in the Sauce Labs infrastructure."}),"\n",(0,r.jsx)(t.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsxs)(t.p,{children:["You can build and push images locally via Docker (",(0,r.jsx)(t.a,{href:"https://docs.docker.com/engine/install/#supported-platforms",children:"Installation Requirements"}),") or as part of your CI process. System requirements vary depending on your intention, so the following reference serves as a general guide."]}),"\n",(0,r.jsx)(t.h2,{id:"building-and-pushing-images",children:"Building and Pushing Images"}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A working Docker installation. For more information, see ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/get-started/",children:"Docker's Getting Started documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"creating-a-dockerfile",children:"Creating a Dockerfile"}),"\n",(0,r.jsx)(t.p,{children:"To create a custom image, you must create a Dockerfile, which is a text document containing commands that Docker uses to assemble an image."}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FROM python:3\nWORKDIR /demo-python\nCOPY test-requirements.txt /demo-python\nRUN pip install -r test-requirements.txt\nCOPY ./tests/ /demo-python/tests/\n"})}),"\n",(0,r.jsx)(t.h3,{id:"choosing-and-setting-a-base-image",children:"Choosing and Setting a Base Image"}),"\n",(0,r.jsx)(t.p,{children:"Before you create a custom image, you must choose another image from which to extend the custom image. Docker Hub has official, pre-built images for most popular languages and frameworks. Given a particular language or framework, there are many image variants from which to choose. These variants are specified by Docker tags."}),"\n",(0,r.jsxs)(t.p,{children:["For example, if you want to use version 3.5 of the official Alpine image, the full image name is ",(0,r.jsx)(t.code,{children:"alpine:3.5"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"In your Dockerfile, extend the base image by using the FROM instruction."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"FROM golang:1.8.0\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installing-additional-tools",children:"Installing Additional Tools"}),"\n",(0,r.jsx)(t.p,{children:"To install any additional tools or run other commands, use the RUN instruction."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"RUN apt-get update && apt-get install -y netcat\nRUN go get github.com/jstemmer/go-junit-report\n"})}),"\n",(0,r.jsx)(t.h3,{id:"adding-other-files-and-directories",children:"Adding Other Files and Directories"}),"\n",(0,r.jsx)(t.p,{children:"To add files and directories that are not present in package managers, use the ADD instruction."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"ADD ./workdir/contacts /usr/bin/contacts\nADD ./db/migrations /migrations\n"})}),"\n",(0,r.jsx)(t.h3,{id:"build-image",children:"Build Image"}),"\n",(0,r.jsx)(t.p,{children:"After all of the required tools are specified in the Dockerfile it is possible to build the image."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker build <path-to-dockerfile>\n"})}),"\n",(0,r.jsx)(t.p,{children:"You\u2019ll see how all commands specified in the Dockerfile are executed. If there are any errors they\u2019ll be displayed and you\u2019ll need to fix them before continuing. If the build is successful you\u2019ll have something like this at the very end:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"...\nSuccessfully built e32703162dd4\n"})}),"\n",(0,r.jsx)(t.p,{children:"Congratulations, you\u2019ve just built your first image. Now we need to store it somewhere to make it available for Sauce Labs."}),"\n",(0,r.jsx)(t.h2,{id:"pushing-to-a-registry",children:"Pushing to a Registry"}),"\n",(0,r.jsx)(t.p,{children:"To allow Sauce Labs to use your custom image, store it in a public Docker Registry. The easiest mechanism is to create an account on Docker Hub because Docker Hub allows you to store unlimited public images for free. If your organization is already using Docker Hub, you can use your existing account."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"To use an image with Sauce Labs Orchestrate you must have a public repository. If you want to keep your image private, refer to the Using Docker Authenticated Pulls document for instructions."})}),"\n",(0,r.jsx)(t.p,{children:"The example uses Docker Hub, but it is possible to use different registries, if you prefer. Adapt the example based on the registry you are using."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Docker Hub images, by default, are public; to keep images private, you need to use a private repository. For more information, see ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/docker-hub/repos/#creating-a-private-repository",children:"Creating a private repository"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"preparing-the-image-for-the-registry",children:"Preparing the Image for the Registry"}),"\n",(0,r.jsxs)(t.p,{children:["Log in to Docker Hub with your account and create a new repository on the ",(0,r.jsx)(t.strong,{children:"Add repository"})," page. It is best practice to use a pattern similar to ",(0,r.jsx)(t.code,{children:"<project-name>-<container-name>"})," for a repository name (for example, ",(0,r.jsx)(t.code,{children:"sl-demo-docker-primary"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"Next, rebuild your image using your account and repository name:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ docker build -t saucelabs/sl-demo-docker-primary:0.0.1 <path-to-dockerfile>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"-t"})," key specifies the name and tag of the new image:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"saucelabs - The account in Docker Hub"}),"\n",(0,r.jsx)(t.li,{children:"sl-demo-docker-primary - The repository name"}),"\n",(0,r.jsx)(t.li,{children:"0.0.1 - The tag (version) of the image. Always update the tag if you change something in a Dockerfile, or you might have unpredictable results."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"pushing-the-image-to-the-registry",children:"Pushing the Image to the Registry"}),"\n",(0,r.jsx)(t.p,{children:"To push the image to Docker Hub:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ docker login\n$ docker push saucelabs/sl-demo-docker-primary:0.0.1\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"First, we use docker login to authenticate in Docker Hub. If you use a registry other than Docker Hub, refer to the related documentation about how to push images to that registry."})}),"\n",(0,r.jsx)(t.h3,{id:"using-your-image-in-sauce-labs",children:"Using your Image in Sauce Labs"}),"\n",(0,r.jsxs)(t.p,{children:["After the image is successfully pushed, it is available for use in Sauce Orchestrate. Create a saucectl configuration like the one below. For more information, see ",(0,r.jsx)(t.a,{href:"/orchestrate/saucectl-configuration",children:"saucectl Configuration"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'apiVersion: v1alpha\nkind: imagerunner\nsauce:\n  region: us-west-1\nsuites:\n  - name: run sauce test\n    image: saucelabs/sl-demo-docker-primary:0.0.1\n    workload: webdriver\n    entrypoint: "mvn test"\n    files:\n      - src: "runsauce.json"\n        dst: "/workdir/runsauce.json"\n    artifacts:\n      - "/path/inside/container/file.log"\n    env:\n      KEY: value\n'})}),"\n",(0,r.jsx)(t.p,{children:"Then run the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  saucectl run\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This only works if the config name follows a specific pattern and resides in a subfolder, for example ",(0,r.jsx)(t.code,{children:".sauce/config.yml"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If the config name does not follow that pattern, you have to point to the config file explicitly, for example ",(0,r.jsx)(t.code,{children:"saucectl run -c myconfig.yml"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"ci-integrations",children:"CI Integrations"}),"\n",(0,r.jsx)(t.p,{children:"The recommended approach for building images is to integrate this as a step in your existing CI pipelines. Below are examples for various CI providers you can reference."}),"\n",(0,r.jsx)(t.h3,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,r.jsx)(t.p,{children:"The Sauce Labs demo repos contain GitHub Action code for building images."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-java",children:"Java"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-python",children:"Python"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-js",children:"JavaScript"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-ruby",children:"Ruby"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(18215),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:n,groupId:i}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),b=(()=>{const e=c??m;return g({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function k(e){const t=(0,f.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);