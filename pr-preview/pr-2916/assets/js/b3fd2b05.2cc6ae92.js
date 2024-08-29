"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2993],{37504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(74848),i=n(28453),r=n(86025);const a={id:"contract-testing",title:"API Contract Testing",sidebar_label:"API Contract Testing"},o=void 0,c={id:"api-testing/contract-testing",title:"API Contract Testing",description:"An API conversation consists of:",source:"@site/docs/api-testing/contract-testing.md",sourceDirName:"api-testing",slug:"/api-testing/contract-testing",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/contract-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/contract-testing.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"contract-testing",title:"API Contract Testing",sidebar_label:"API Contract Testing"},sidebar:"docs",previous:{title:"API Load Testing",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/load-testing"},next:{title:"Logger",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/logger"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Testing the API Producer Side",id:"testing-the-api-producer-side",level:2},{value:"Testing the API Consumer Side",id:"testing-the-api-consumer-side",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"An API conversation consists of:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"API consumer (client side) performing a request"}),"\n",(0,s.jsx)(t.li,{children:"API producer (server side) responding to that request"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The conversation needs to follow specific rules that the API producer and API consumer must agree upon. The formal description of these rules is the contract, which is generally presented as a specification file such as ",(0,s.jsx)(t.a,{href:"https://swagger.io/docs/specification/about/",children:"OpenAPI"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("img/api-testing/contract-test/api-conversation.png"),alt:"API Conversation and Contract",width:"300"}),"\n",(0,s.jsxs)(t.p,{children:["If this contract is broken by either party, it can lead to bugs and malfunctions. ",(0,s.jsx)(t.em,{children:"API Contract Testing"})," is the act of validating that the API producer and the API consumer are respecting the contract."]}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (",(0,s.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,s.jsx)(t.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(t.p,{children:"Contract testing is a fast, lightweight form of API testing that strictly checks the content and format of requests and responses. This method is ideal for organizations that are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Testing APIs during the early stages of design and development"}),"\n",(0,s.jsx)(t.li,{children:"Creating APIs that are internal and/or have limited number of consumers"}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("img/api-testing/contract-test/api-consumer-contract.png"),alt:"API Conversation and Contract",width:"600"}),"\n",(0,s.jsx)(t.h2,{id:"testing-the-api-producer-side",children:"Testing the API Producer Side"}),"\n",(0,s.jsx)(t.p,{children:"Sauce Labs API Testing will validate the API producer (server) side by creating a contract test from your OpenAPI spec file."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("img/api-testing/contract-test/api-producer-contract.png"),alt:"API Conversation and Contract",width:"500"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"From an API Testing Project, go to the HTTP Client."}),"\n",(0,s.jsx)(t.li,{children:"Import an OpenAPI specification file (v3.0 or higher)."}),"\n",(0,s.jsxs)(t.li,{children:["From your list of ",(0,s.jsx)(t.strong,{children:"Snapshots"}),", choose the API call you'd like to test by clicking on it. The HTTP method, request URL, and anything else specified in the spec file will populate in the HTTP Client fields."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Send"})," to send your request."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Generate Test"}),"."]}),"\n"]}),"\n",(0,s.jsxs)("p",{children:["After you generate your test, you'll be taken to the ",(0,s.jsx)("strong",{children:"Compose"})," tool. This component, ",(0,s.jsx)("small",{children:(0,s.jsx)("strong",{children:"ASSERT VALID JSON SCHEMA"})}),", is what we use to store the contract test."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("img/api-testing/assertJSON.png"),alt:"API Conversation and Contract",width:"600"}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)("p",{children:["Double-click on the ",(0,s.jsx)("small",{children:(0,s.jsx)("strong",{children:"ASSERT VALID JSON SCHEMA"})})," component to expand and see the contract validation details."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("img/api-testing/assertJSON_expanded.webp"),alt:"API Conversation and Contract",width:"600"}),"\n",(0,s.jsxs)(t.p,{children:["Optionally, you can add further ",(0,s.jsx)(t.a,{href:"/api-testing/composer/",children:"assertions"})," here to your test, which will perform functional testing on top of your contract tests and fully validate the APIs are working as intended."]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"What is functional testing?"}),"\n",(0,s.jsx)("i",{children:"Functional testing"})," is a more robust, data-driven method that checks the API logic and consumer flows. If your organization is creating a large-scale API program that will have public APIs with third-party consumers, for example, functional testing is ideal. That's where adding functional testing to complement your contract testing strategy can give your development team insight into how accurately your APIs render, and ultimately bring products to market faster."]}),"\n",(0,s.jsxs)(t.p,{children:["After you've run your tests as part of a build (i.e., as part of your CI pipeline) or as a ",(0,s.jsx)(t.a,{href:"/api-testing/schedule-test/",children:"scheduled test"}),", you can view your contract test results and events on your ",(0,s.jsx)(t.a,{href:"/api-testing/project-dashboard/",children:"Project Dashboard"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"testing-the-api-consumer-side",children:"Testing the API Consumer Side"}),"\n",(0,s.jsx)(t.p,{children:"With Sauce Labs API Testing, you'll test the API consumer (client) side in a protected, static environment, where tests are run against mocked (not live) APIs. This allows contract tests to compare isolated API responses to the contract for immediate attention if something is wrong."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["You'll first need to ",(0,s.jsx)(t.a,{href:"/api-testing/integrations/apitesting-saucectl-integration/#step-1-create-a-webhook",children:"generate a webhook URL"})," for your API Testing Project, if you don't have one already."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["From a command-line terminal, start ",(0,s.jsx)(t.a,{href:"/api-testing/mocking/",children:"Piestry"}),", our API mocking server, by issuing the launch command below. The ",(0,s.jsx)(t.code,{children:"--logger"})," value will be the webhook URL you generated in the previous step, appended with ",(0,s.jsx)(t.code,{children:"/insights/events/_contract"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'docker run --pull always -v "$(pwd)/myspec:/specs" \\\n-p 5000:5000 quay.io/saucelabs/piestry \\\n-u /specs/myspec.yaml \\\n--logger https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/insights/events/_contract\n'})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Want to run Piestry as part of a build?"}),"Alternatively, you can run the command as a ",(0,s.jsx)(t.a,{href:"/api-testing/project-dashboard/#test-build-reports",children:"build"})," by issuing the following launch command instead of the above:",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'docker run --pull always -v "$(pwd)/myspec:/specs" \\\n-p 5000:5000 quay.io/saucelabs/piestry \\\n-u /specs/myspec.yaml \\\n--logger "https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/insights/events/_contract?buildId=build123"\n'})}),"Here, the URL is appended by the ",(0,s.jsx)(t.code,{children:"buildId"})," parameter."]}),"\n",(0,s.jsx)(t.p,{children:"Be sure to use the same OpenAPI spec used to test the API producer side. This will activate the contract testing functionality and bind a series of endpoints with a Sauce Labs API Testing project."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.a,{href:"/api-testing/mocking/#validate-request",children:(0,s.jsx)(t.code,{children:"--validate-request"})})," switch to ensure your requests are compliant with the schema."]})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"At this point, Piestry will have mocked all of the APIs described in the contract. You can now perform API calls to this mock server instead of the actual service. In a production scenario, you would likely run unit tests in your code that will trigger API calls, making sure that instead of the actual service, the mock is being used. As you do that, Piestry will validate the contract for the inbound API calls. Every validated call will produce an entry in the dashboard so you can review the outcome of the test."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["View the results for both the API Producer and API Consumer tests by checking your Project's ",(0,s.jsx)(t.a,{href:"/api-testing/project-dashboard/",children:(0,s.jsx)(t.strong,{children:"Dashboard"})}),", where you'll see a ",(0,s.jsx)(t.a,{href:"/api-testing/project-dashboard/#test-logs",children:"log"})," specific to contract testing. The report document for the contract test will detail how the request and response appear during the transaction and the nature of any test failures, if applicable."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Sauce Labs API Testing will validate that the API consumer side has complied with the contract specifications."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("img/api-testing/contract-test/api-testing-overview.png"),alt:"API Conversation and Contract",width:"600"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);