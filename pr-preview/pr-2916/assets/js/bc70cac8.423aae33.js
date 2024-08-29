"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[26462],{74324:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(74848),i=s(28453),o=s(86025);const a={id:"github-datasets",title:"How to use GitHub as a Data Source in Tests",sidebar_label:"Using GitHub as a Data Source",description:"How to use GitHub as a data source in your tests"},r=void 0,c={id:"api-testing/use-cases/github-datasets",title:"How to use GitHub as a Data Source in Tests",description:"How to use GitHub as a data source in your tests",source:"@site/docs/api-testing/use-cases/github-datasets.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/github-datasets",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/use-cases/github-datasets",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/github-datasets.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"github-datasets",title:"How to use GitHub as a Data Source in Tests",sidebar_label:"Using GitHub as a Data Source",description:"How to use GitHub as a data source in your tests"},sidebar:"docs",previous:{title:"Using Environments",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/use-cases/using-environments"},next:{title:"Working with the Headers",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/use-cases/working-with-headers"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Step 1: Setting Up GitHub",id:"step-1-setting-up-github",level:2},{value:"Step 2: Creating a Basic Test",id:"step-2-creating-a-basic-test",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["You can use CSV, JSON, or XML files that are stored in a GitHub repository as a data source in your tests. Follow this guide to learn how to use this ",(0,n.jsx)(t.a,{href:"https://github.com/LoryApiFortress/examples/blob/7f03771e2d728da4546fcbc218b31642c5d9265a/bypopulation.csv",children:"bypopulation.csv"})," file as a data source."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,n.jsx)(t.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-setting-up-github",children:"Step 1: Setting Up GitHub"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a new access token associated to your GitHub profile by accessing ",(0,n.jsx)(t.a,{href:"https://github.com/settings/tokens",children:"https://github.com/settings/tokens"}),". GitHub will show you the token only once, so make sure you\u2019re copying and pasting it somewhere safe and accessible."]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/api-testing/io-components/github-token.png"),alt:"GitHub token settings"}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["When creating the token, make sure to select the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"public_repo"})})," subcategory or the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"repo"})})," category based on which type of repository hosts your input data."]}),(0,n.jsx)("img",{src:(0,o.Ay)("img/api-testing/io-components/type.png"),alt:"Type of repository",width:"400"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create a repository to host your input data if one doesn't exist already."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Commit and push a data source file. It can be a CSV, JSON or XML file."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-creating-a-basic-test",children:"Step 2: Creating a Basic Test"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Go to Sauce Labs API Testing and create a new test."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add the ",(0,n.jsx)(t.strong,{children:"GitHub"})," component and configure it as follow:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Account"})," is your GitHub username."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Repository"})," is the name of the repository that your data file is pushed to."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Branch"})," is the repository branch that the desired version of the data file is in."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Token"})," is the access token you created in Step 1."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Path"})," is the name of the file in the repository."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Variable"})," is the variable to store the payload in."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Mode"})," is the filetype of the file in the repository."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/api-testing/io-components/github-component.webp"),alt:"GitHub component"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The system uses these component settings to retrieve the bypopulation.csv file, parse it as a CSV file, and assign it to the ",(0,n.jsx)(t.strong,{children:"inputData"})," variable."]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["(Optional) Verify the set up by adding a ",(0,n.jsx)(t.strong,{children:"Comment"})," component for printing the parsed data as shown:"]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/api-testing/io-components/github-comment.png"),alt:"comment"}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["(Optional) ",(0,n.jsx)(t.strong,{children:"Run"})," the test."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/api-testing/io-components/github-report.webp"),alt:"test report"}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["Next, iterate over a subset of this input set by adding an ",(0,n.jsx)(t.strong,{children:"Each"})," component."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("img/api-testing/io-components/github-each.png"),alt:"each component"}),"\n",(0,n.jsx)(t.p,{children:"This iterates over a subset of five randomly selected items."}),"\n",(0,n.jsx)(t.admonition,{title:"Suggestion",type:"tip",children:(0,n.jsxs)(t.p,{children:["To help you identify an item for debugging purposes, you can add a comment that prints out the current item in each iteration. (like ",(0,n.jsx)(t.code,{children:"ID: ${_1[0]}"}),")"]})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Use the data to perform your request. For example, in a ",(0,n.jsx)(t.strong,{children:"POST Body"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "id":${_1[0]},\n    "city":"${_1[1]}",\n    "state":"${_1[2]}",\n    "population":"${_1[3]}"\n}\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add the assertions required for testing purposes."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Run"})," the test."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);