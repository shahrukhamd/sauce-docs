"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[12847],{31158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(74848),i=n(28453),o=n(86025);const r={id:"using-the-api",title:"Jenkins: Using the API",sidebar_label:"Using the API",keywords:["cicd","jenkins","api","api-fortress"]},a=void 0,c={id:"api-testing/on-prem/ci/jenkins/using-the-api",title:"Jenkins: Using the API",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/jenkins/using-the-api.md",sourceDirName:"api-testing/on-prem/ci/jenkins",slug:"/api-testing/on-prem/ci/jenkins/using-the-api",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/ci/jenkins/using-the-api",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/jenkins/using-the-api.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"using-the-api",title:"Jenkins: Using the API",sidebar_label:"Using the API",keywords:["cicd","jenkins","api","api-fortress"]},sidebar:"apif",previous:{title:"GitLab",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/ci/gitlab"},next:{title:"APIF-Auto",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/ci/jenkins/apif-auto"}},l={},p=[{value:"Step 1 - Install Jenkins HTTP Plugin",id:"step-1---install-jenkins-http-plugin",level:2},{value:"Step 2 - Generate an API Hook",id:"step-2---generate-an-api-hook",level:2},{value:"Step 3 - Execute HTTP Call from Jenkins",id:"step-3---execute-http-call-from-jenkins",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(t.h2,{id:"step-1---install-jenkins-http-plugin",children:"Step 1 - Install Jenkins HTTP Plugin"}),"\n",(0,s.jsxs)(t.p,{children:["Log in to your Jenkins account. First, click \u201c",(0,s.jsx)(t.em,{children:"Manage Jenkins,"}),"\u201d then click \u201c",(0,s.jsx)(t.em,{children:"Manage Plugins"}),".\u201d We\u2019re going to need the ",(0,s.jsx)(t.em,{children:"HTTP Request"})," plugin. To find the plugins, click the ",(0,s.jsx)(t.em,{children:"\u201cAvailable\u201d"})," tab in the Plugins menu and use the filter in the top right corner to search for it."]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/04/jenkinsAddons-1.gif"),alt:"Jenkins Add On 1"}),"\n",(0,s.jsx)(t.h2,{id:"step-2---generate-an-api-hook",children:"Step 2 - Generate an API Hook"}),"\n",(0,s.jsxs)(t.p,{children:["The first step to integrating API Fortress into your CI/CD process is to grab the generated API hook for the project in question. To do so, head to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the\xa0",(0,s.jsx)(t.em,{children:"Gear"}),"\xa0icon in the top right corner of the screen. Please note you need Manager access to generate a webhook. From Settings, click the API Hooks section and generate the hook for your project."]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/04/hook2.gif"),alt:"Jenkins Add On 2"}),"\n",(0,s.jsx)(t.p,{children:"The next step depends on what you\u2019re trying to test. The following steps are going to assume that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more about that please contact API Fortress."}),"\n",(0,s.jsx)(t.p,{children:"To import our data into Jenkins as JUnit, we\u2019ll export it in JUnit format using a query parameter. Since we already have our API hook, we just need to add the parameter to do so."}),"\n",(0,s.jsx)(t.p,{children:"As it stands, our API hook is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",metastring:"request",children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861**\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The normal command to run all of the tests in the project, per the API Fortress docs is\xa0",(0,s.jsx)(t.em,{children:"/tests/run-all"}),", so we append this on to the end of the API call. We also need to request JUnit output via query parameters. First, we need to set\xa0",(0,s.jsx)(t.em,{children:"sync"})," to\xa0",(0,s.jsx)(t.em,{children:"true"}),", and then we can set\xa0",(0,s.jsx)(t.em,{children:"format"}),"\xa0to\xa0",(0,s.jsx)(t.em,{children:"JUnit"}),". In short, we need to append\xa0",(0,s.jsx)(t.em,{children:"?sync=true&format=junit"}),". That gives us the final API call:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",metastring:"request",children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all?sync=true&format=junit**\n"})}),"\n",(0,s.jsx)(t.p,{children:"Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit. We\u2019re almost there."}),"\n",(0,s.jsx)(t.h2,{id:"step-3---execute-http-call-from-jenkins",children:"Step 3 - Execute HTTP Call from Jenkins"}),"\n",(0,s.jsxs)(t.p,{children:["From the Jenkins dashboard, let\u2019s create a New Item. Next, we\u2019re going to name and create a Freestyle Project. Click the\xa0",(0,s.jsx)(t.em,{children:"OK"}),"\xa0button to proceed."]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/04/jenkinsSetup.gif"),alt:"Jenkins Setup"}),"\n",(0,s.jsxs)(t.p,{children:["Scroll down the page until you see the \u201c",(0,s.jsx)(t.em,{children:"Add Build Step"}),"\u201d pulldown menu. Select \u201c",(0,s.jsx)(t.em,{children:"HTTP Request"}),".\u201d This option will only be available if you installed the\xa0",(0,s.jsx)(t.em,{children:"HTTP Request"})," plugin in the previous step. We\u2019re going to paste the API call we created above into the URL line. If we save this configuration, we can run the build and see Jenkins receive our JUnit test results in real time. These test results can then be passed along to platforms like qTest or Zephyr in a CI/CD pipeline."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);