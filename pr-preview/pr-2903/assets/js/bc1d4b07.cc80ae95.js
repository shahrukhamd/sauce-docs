"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[46196],{96530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(74848),a=t(28453);const i={id:"about",title:"About Sauce Performance",sidebar_label:"About",description:"Understand how Performance works, when and why you would use it, benefits you gain from it, requirements and restrictions."},s=void 0,o={id:"performance/about",title:"About Sauce Performance",description:"Understand how Performance works, when and why you would use it, benefits you gain from it, requirements and restrictions.",source:"@site/docs/performance/about.md",sourceDirName:"performance",slug:"/performance/about",permalink:"/sauce-docs/pr-preview/pr-2903/performance/about",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/performance/about.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1681234273e3,frontMatter:{id:"about",title:"About Sauce Performance",sidebar_label:"About",description:"Understand how Performance works, when and why you would use it, benefits you gain from it, requirements and restrictions."},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2903/performance"},next:{title:"Single Page Statistics",permalink:"/sauce-docs/pr-preview/pr-2903/performance/one-page"}},c={},u=[{value:"Why Use Sauce Performance?",id:"why-use-sauce-performance",level:2},{value:"Sauce Performance Requirements and Recommendations",id:"sauce-performance-requirements-and-recommendations",level:2},{value:"Chrome Browser Required",id:"chrome-browser-required",level:3},{value:"Separating Performance Scripts from Functional Scripts",id:"separating-performance-scripts-from-functional-scripts",level:3},{value:"Understanding Your Baselines",id:"understanding-your-baselines",level:3},{value:"Using Explicit Page Transitions",id:"using-explicit-page-transitions",level:3}];function l(e){const n={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Front-end performance testing complements your functional testing strategy by helping you gain insight into how quickly and accurately your app renders and becomes interactive, which has proven to have a statistical correlation to revenue."}),"\n",(0,r.jsx)(n.h2,{id:"why-use-sauce-performance",children:"Why Use Sauce Performance?"}),"\n",(0,r.jsx)(n.p,{children:"Sauce Performance is a pre-integrated tool within the Sauce portfolio that is available to all users. When incorporated into existing development workflows, front end performance testing allows you to continuously measure the speed and reliability of your app, thereby ensuring your customers enjoy an optimal experience every time, in every environment. Some specific advantages to using Sauce Performance include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Save time and money by testing your app's function and performance in a single testing platform."}),"\n",(0,r.jsx)(n.li,{children:"Leverage existing functional test scripts (that are validated and executing well) as a starting point to implement performance test scripts."}),"\n",(0,r.jsx)(n.li,{children:"Measure performance alongside your functional tests to identify related failure patterns."}),"\n",(0,r.jsx)(n.li,{children:"Test performance earlier in the development cycle, when it's easier to make adjustments that improve your user's experience."}),"\n",(0,r.jsx)(n.li,{children:"Eliminate duplication of effort across multiple 3rd party testing platforms."}),"\n",(0,r.jsx)(n.li,{children:"Leverage the Sauce Machine Learning algorithm that was trained on your scripts and pages, and was defined using millions of diverse test executions, to set trends, baselines and alerts to indicate a performance regression when you have many tests running continuously."}),"\n",(0,r.jsx)(n.li,{children:"Conduct script execution analysis in the same environment used by other team members, where you can share and contrast data to isolate issues."}),"\n",(0,r.jsx)(n.li,{children:"Realize faster root cause analysis by using all the metrics and artifacts offered by the Sauce Performance solution."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sauce-performance-requirements-and-recommendations",children:"Sauce Performance Requirements and Recommendations"}),"\n",(0,r.jsx)(n.p,{children:"Consider the following guidelines to optimize your performance testing implementation."}),"\n",(0,r.jsx)(n.h3,{id:"chrome-browser-required",children:"Chrome Browser Required"}),"\n",(0,r.jsx)(n.p,{children:"Sauce Performance works in conjunction with Google Lighthouse and must be run on one of the latest 3 versions of the Chrome desktop browser on Windows or macOS."}),"\n",(0,r.jsx)(n.h3,{id:"separating-performance-scripts-from-functional-scripts",children:"Separating Performance Scripts from Functional Scripts"}),"\n",(0,r.jsx)(n.p,{children:"Capturing all the individual metrics associated with page rendering is more time consuming than evaluating functional behavior. Therefore, we recommend that you keep your performance test suite separate from your functional test suite so the performance data collection process doesn't compromise the efficiency and accuracy of your functional tests."}),"\n",(0,r.jsx)(n.h3,{id:"understanding-your-baselines",children:"Understanding Your Baselines"}),"\n",(0,r.jsx)(n.p,{children:"Baselines are determined by calculating a confidence interval over multiple runs of the same test name for each URL rendered during the test. The confidence interval is calculated to estimate the range of values which are expected in future runs, based on past observed performance. Results outside of the baseline range are statistically unlikely to be observed in the absence of some fundamental change in the app\u2019s performance and should, therefore, be investigated as to root cause before resetting the baseline."}),"\n",(0,r.jsx)(n.h3,{id:"using-explicit-page-transitions",children:"Using Explicit Page Transitions"}),"\n",(0,r.jsx)(n.p,{children:"Performance metrics are captured for hard and soft page transitions, such as those that are triggered by a navigate command or a click, but some less explicit page transitions, such as programmatic responses, are not captured. For this reason, write your performance testing scripts to trigger hard or soft page transitions for any URL page for which you wish to capture performance metrics. Please file a support ticket if performance metrics for a specific page load in your test are not captured."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);