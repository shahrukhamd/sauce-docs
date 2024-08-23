"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[57727],{27362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var s=t(74848),i=t(28453),o=t(86025);const r={id:"logger",title:"Using the Test Logger",sidebar_label:"Logger"},l=void 0,c={id:"api-testing/logger",title:"Using the Test Logger",description:"The Logger tool helps with API call recording by facilitating complete captures of HTTP requests and responses (including the request and response bodies). Once this data is captured, it is sent to the API Testing Logger section for further inspections.",source:"@site/docs/api-testing/logger.md",sourceDirName:"api-testing",slug:"/api-testing/logger",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/logger",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/logger.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691076016e3,frontMatter:{id:"logger",title:"Using the Test Logger",sidebar_label:"Logger"},sidebar:"docs",previous:{title:"API Contract Testing",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/contract-testing"},next:{title:"Project Settings",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/project-access"}},a={},g=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Running the Logger",id:"running-the-logger",level:2},{value:"Access Project",id:"access-project",level:3},{value:"Create Webhook",id:"create-webhook",level:3},{value:"Launch Piestry via CLI",id:"launch-piestry-via-cli",level:3},{value:"Review Results",id:"review-results",level:3},{value:"More Information",id:"more-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The Logger tool helps with API call recording by facilitating complete captures of HTTP requests and responses (including the request and response bodies). Once this data is captured, it is sent to the API Testing ",(0,s.jsx)(n.strong,{children:"Logger"})," section for further inspections."]}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,s.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-the-logger",children:"Running the Logger"}),"\n",(0,s.jsx)(n.h3,{id:"access-project",children:"Access Project"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Log in to Sauce Labs, then click ",(0,s.jsx)(n.strong,{children:"API Testing"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Go into a Project."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-webhook",children:"Create Webhook"}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Create a webhook for your Project by clicking ",(0,s.jsx)(n.strong,{children:"WebHooks"})," > ",(0,s.jsx)(n.strong,{children:"Create WebHook"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Enter a ",(0,s.jsx)(n.strong,{children:"Name"})," (",(0,s.jsx)(n.strong,{children:"Description"})," is optional), then click ",(0,s.jsx)(n.strong,{children:"Save"}),".",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/hookPopup.png"),alt:"sample webhook details",width:"450"})]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.strong,{children:"Hook URL"}),". Your Sauce Labs username, Sauce API Testing endpoint, and ",(0,s.jsx)(n.code,{children:"{hook_id}"})," will populate automatically. For security reasons, you'll need to input your own Sauce Labs access key. Then, add ",(0,s.jsx)(n.code,{children:"/logger"})," to the end of the URL, so that it looks like this:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/logger\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"launch-piestry-via-cli",children:"Launch Piestry via CLI"}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From your CLI, launch ",(0,s.jsx)(n.a,{href:"/api-testing/mocking",children:"Piestry, our API Mocking server tool"}),", by running the following code. The last line will be the ",(0,s.jsx)(n.code,{children:"--logger"})," switch, followed by the URL from the previous step:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run --pull always -v "$(pwd)/myspec:/specs" \\\n-p 5000:5000 quay.io/saucelabs/piestry \\\n-u /specs/myspec.yaml \\\n--logger https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/logger\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your CLI, make a call to any mocking endpoint (i.e., ",(0,s.jsx)(n.code,{children:"curl localhost:5000/api/v1/release-notes"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"review-results",children:"Review Results"}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["From Sauce Labs API Testing, open the ",(0,s.jsx)(n.strong,{children:"Logger"})," section.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/logger-tab.png"),alt:"Logger UI",width:"300"}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Inspect the data related to the captured request (e.g., Request and Response)."}),"\n",(0,s.jsxs)(n.li,{children:["From here, you can see the call in the HTTP Client by clicking the ",(0,s.jsx)(n.strong,{children:"Open"})," button. Optionally, you can generate a test here by clicking the ",(0,s.jsx)(n.strong,{children:"Generate Test"})," button."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/logger1.png"),alt:"Logger UI"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/logger2.png"),alt:"Logger UI"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-testing/logger3.png"),alt:"Logger UI"}),"\n",(0,s.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsx)(n.admonition,{title:"Coming Soon",type:"info",children:(0,s.jsx)(n.p,{children:"The Logger is the first tool in an upcoming larger suite of API debugging tools."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);