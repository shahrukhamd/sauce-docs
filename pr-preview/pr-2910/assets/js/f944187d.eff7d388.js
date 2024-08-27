"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[22494],{75204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(74848),s=t(28453),i=t(86025);const r={id:"load-agent-deployment",title:"Load Agent Deployment",sidebar_label:"Load Agent Deployment",keywords:["api-testing","how-to","load-agent"]},d=void 0,a={id:"api-testing/on-prem/how-to/load-agent-deployment",title:"Load Agent Deployment",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/load-agent-deployment.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/load-agent-deployment",permalink:"/sauce-docs/pr-preview/pr-2910/api-testing/on-prem/how-to/load-agent-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/load-agent-deployment.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"load-agent-deployment",title:"Load Agent Deployment",sidebar_label:"Load Agent Deployment",keywords:["api-testing","how-to","load-agent"]},sidebar:"apif",previous:{title:"Keystores for Downloader",permalink:"/sauce-docs/pr-preview/pr-2910/api-testing/on-prem/how-to/keystores-for-downloader"},next:{title:"Setup Notifications (Performance Alerts)",permalink:"/sauce-docs/pr-preview/pr-2910/api-testing/on-prem/how-to/setup-notifications-performance-alerts"}},l={},c=[{value:"Step 0 - Activate the Node Container",id:"step-0---activate-the-node-container",level:2},{value:"Step 1 - Unzip the provided file (<code>core-server.tgz</code>)",id:"step-1---unzip-the-provided-file-core-servertgz",level:2},{value:"Step 2 - Define the maximum users per Load Agent",id:"step-2---define-the-maximum-users-per-load-agent",level:2},{value:"Step 3 - Configure <code>config.yaml</code>",id:"step-3---configure-configyaml",level:2},{value:"Step 4 - Adding the Engine",id:"step-4---adding-the-engine",level:2},{value:"Step 5 - Deploy the Load Agent",id:"step-5---deploy-the-load-agent",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(n.p,{children:"A Load Agent is a server instance that provides the simulated users in a load test. Load Testing cannot function without at least one Load Agent."}),"\n",(0,o.jsx)(n.p,{children:"The provided files (contained in core-server.tgz) are all that you need in order to deploy a Load Agent. This tutorial will explain what changed need to be made to the files within in order to properly deploy the Load Agent."}),"\n",(0,o.jsx)(n.p,{children:"Before starting the process, there is a step that needs to be taken for clients who received their API Fortress containers before the introduction of Load Testing."}),"\n",(0,o.jsx)(n.h2,{id:"step-0---activate-the-node-container",children:"Step 0 - Activate the Node Container"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This step is not for all users"})}),"\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"docker-compose.yml"})," in the main API Fortress directory. It can be located at ",(0,o.jsx)(n.code,{children:"/core/bin/docker-compose.yml"})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Paste the following code snippet in after the #RABBITMQ section and before the #APIFORTRESS DASHBOARD section:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"#NODE\napifortress-node:\nimage: theirish81/uitools\nhostname: node.apifortress\nnetworks:\n- apifortress\ndomainname: node.apifortress\nlabels:\nio.rancher.container.pull_image: always\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"links"})," section of the #APIFORTRESS DASHBOARD configuration, add the following line:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"- apifortress-node:node.apifortress\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Save and close the ",(0,o.jsx)(n.code,{children:"docker-compose.yml"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"start_all.sh"})," file in a code editor. It is also located in ",(0,o.jsx)(n.code,{children:"/core/bin"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Copy and paste the following and overwrite the entire contents of the file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\nsudo docker-compose up -d apifortress-postgres\nsleep 5s\nsudo docker-compose up -d apifortress-mongo\nsleep 5s\nsudo docker-compose up -d apifortress-rabbit\nsudo docker-compose up -d apifortress-node\nsleep 30s\nsudo docker-compose up -d apifortress\nsleep 1m\nsudo docker-compose up -d apifortress-mailer\nsudo docker-compose up -d apifortress-scheduler\nsudo docker-compose up -d apifortress-connector\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Your API Fortress instance can now utilize the API Fortress Node Container which powers Load Testing."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"step-1---unzip-the-provided-file-core-servertgz",children:["Step 1 - Unzip the provided file (",(0,o.jsx)(n.code,{children:"core-server.tgz"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"First, unzip the provided file."}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/06/Screen-Shot-2018-06-05-at-11.44.28-AM.png"),alt:"screenshot"}),"\n",(0,o.jsx)(n.h2,{id:"step-2---define-the-maximum-users-per-load-agent",children:"Step 2 - Define the maximum users per Load Agent"}),"\n",(0,o.jsx)(n.p,{children:"Users per agent are the maximum number of virtual users that each Load Agent can provide."}),"\n",(0,o.jsx)(n.admonition,{title:"IMPORTANT!",type:"caution",children:(0,o.jsx)(n.p,{children:"Large numbers of simulated users will require large amounts of hardware resources. Contact your DevOps team to develop a strategy for resource allocation."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Locate and open the file named ",(0,o.jsx)(n.code,{children:"application.conf"}),". It is located in ",(0,o.jsx)(n.code,{children:"core-server/etc"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Line 14 of this file (",(0,o.jsx)(n.code,{children:"fixed-pool-size"}),") should have it's value adjusted to match the desired number of maximum users per agent."]}),"\n",(0,o.jsxs)(n.li,{children:["Line 48 of this file (",(0,o.jsx)(n.code,{children:"nr-of-instances"}),") should have it's value adjusted to match the desired number of maximum users per agent. These two values should match."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"step-3---configure-configyaml",children:["Step 3 - Configure ",(0,o.jsx)(n.code,{children:"config.yaml"})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Locate and open ",(0,o.jsx)(n.code,{children:"config.yaml"}),". It is located at ",(0,o.jsx)(n.code,{children:"core-server/etc"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["First, we have to configure the ",(0,o.jsx)(n.code,{children:"baseURL"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"baseURL"})," is located on line 3."]}),"\n",(0,o.jsx)(n.li,{children:"If the Load Agent and the API Fortress Dashboard are located on the same server, then you can replace the baseURL with the internal address and port of the Dashboard on the server."}),"\n",(0,o.jsx)(n.li,{children:"If the Load Agent and the API Fortress Dashboard are located on different servers, you can replace the baseURL with the actual URL of the Dashboard. That is to say, the URL you would use to access it via web browser."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Next, we need to provide the API Key and Secret.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Open the main API Fortress dashboard and click the gear icon in the upper right corner to access the settings menu"}),"\n",(0,o.jsxs)(n.li,{children:['Click the "',(0,o.jsx)(n.em,{children:"API Keys"}),'" option in the left sidebar.']}),"\n",(0,o.jsxs)(n.li,{children:['Click "',(0,o.jsx)(n.em,{children:'+API Key"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/06/CreateAPIKey-1024x640.gif"),alt:"CreateAPI.gif"}),"\n",(0,o.jsx)(n.p,{children:"(Click image for GIF of procedure)"}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Copy the ",(0,o.jsx)(n.em,{children:"API Key"})," to line 5 of ",(0,o.jsx)(n.code,{children:"config.yml"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Copy the ",(0,o.jsx)(n.em,{children:"Secret"})," to line 6 of ",(0,o.jsx)(n.code,{children:"config.yml"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-4---adding-the-engine",children:"Step 4 - Adding the Engine"}),"\n",(0,o.jsx)(n.p,{children:"The next step is to add the new Engine to API Fortress itself."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Log into API Fortress as an administrator."}),"\n",(0,o.jsxs)(n.li,{children:["Click the user icon in the upper right corner, and then click ",(0,o.jsx)(n.em,{children:'"Admin Panel"'})]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.em,{children:'"Engines"'})," on the left side of the screen."]}),"\n",(0,o.jsxs)(n.li,{children:['Click "',(0,o.jsx)(n.em,{children:'+Engine"'})]}),"\n",(0,o.jsx)(n.li,{children:"Enter the name and location of the Engine."}),"\n",(0,o.jsxs)(n.li,{children:["The CRN value defaults to a random string. You ",(0,o.jsx)(n.em,{children:"must"})," change it to something human-readable. This is the internal name of the engine."]}),"\n",(0,o.jsxs)(n.li,{children:["After modifying the CRN, copy the value to line 11 of ",(0,o.jsx)(n.code,{children:"config.yml"})]}),"\n",(0,o.jsxs)(n.li,{children:["Copy the secret to line 12 of ",(0,o.jsx)(n.code,{children:"config.yml"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select the Owning Company of the Engine. An Engine must be owned by a single company. The default value (Public Engine) should\xa0",(0,o.jsx)(n.em,{children:"not"})," be chosen."]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.em,{children:'"Yes"'}),' for "',(0,o.jsx)(n.em,{children:"Dedicated to Load Testing"}),'"']}),"\n",(0,o.jsx)(n.li,{children:"Click the green check to save the Engine settings."}),"\n"]}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/06/ezgif.com-gif-maker-1-1024x640.gif"),alt:"ezgif.com.gif"}),"\n",(0,o.jsx)(n.p,{children:"(Click image for GIF of procedure)"}),"\n",(0,o.jsx)(n.h2,{id:"step-5---deploy-the-load-agent",children:"Step 5 - Deploy the Load Agent"}),"\n",(0,o.jsxs)(n.p,{children:["At the desired server location, use the ",(0,o.jsx)(n.code,{children:"docker-compose up -d"})," command to deploy the Load Agent container. After the operation is complete, the Load Agent will be visible to your API Fortress Load Tests."]}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/06/Screen-Shot-2018-06-05-at-11.44.28-AM.png"),alt:"screenshot"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);