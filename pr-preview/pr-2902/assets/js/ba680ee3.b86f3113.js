"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6175],{27043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=t(74848),a=t(28453),r=(t(86025),t(11470)),i=t(19365);const l={id:"continuous-integration",title:"Integrate Visual E2E Testing Into Your CI",sidebar_label:"Continuous Integration"},u=void 0,o={id:"visual/e2e-testing/integrations/continuous-integration",title:"Integrate Visual E2E Testing Into Your CI",description:"Get continuous visual test automation by integrating Visual E2E tests directly into your continuous integration (CI) build.",source:"@site/docs/visual/e2e-testing/integrations/continuous-integration.md",sourceDirName:"visual/e2e-testing/integrations",slug:"/visual/e2e-testing/integrations/continuous-integration",permalink:"/sauce-docs/pr-preview/pr-2902/visual/e2e-testing/integrations/continuous-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/integrations/continuous-integration.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"continuous-integration",title:"Integrate Visual E2E Testing Into Your CI",sidebar_label:"Continuous Integration"}},c={},d=[{value:"1. Return Visual results into your WebDriver test(s)",id:"1-return-visual-results-into-your-webdriver-tests",level:2},{value:"2. Integrate your CI Build",id:"2-integrate-your-ci-build",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Get continuous visual test automation by integrating Visual E2E tests directly into your continuous integration (CI) build."}),"\n",(0,s.jsx)(n.p,{children:"If your tests are already integrated into CI, get visual results returned into your tests and pass or fail your builds depending on visual regressions found."}),"\n",(0,s.jsx)(n.h2,{id:"1-return-visual-results-into-your-webdriver-tests",children:"1. Return Visual results into your WebDriver test(s)"}),"\n",(0,s.jsxs)(n.p,{children:["To get the test results, add the ",(0,s.jsxs)(n.a,{href:"/visual/e2e-testing/commands-options/#end-command",children:[(0,s.jsx)(n.code,{children:"@visual.end"})," command"]})," right before ending your test session. The returned result can then be asserted to pass or fail your test."]}),"\n",(0,s.jsxs)(r.A,{defaultValue:"JavaScript",values:[{label:"JavaScript",value:"JavaScript"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,s.jsxs)(i.A,{value:"JavaScript",children:["WebDriverIO Example:",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const result = driver.execute('/*@visual.end*/')\nassert.ok(result.passed, result.message)\n"})})]}),(0,s.jsx)(i.A,{value:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Map response = (Map)js.executeScript("/*@screener.end*/");\nAssert.assertTrue((Boolean)response.get("passed"), (String)response.get("message"));\n'})})}),(0,s.jsx)(i.A,{value:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"result = self.driver.execute_script('/*@visual.end*/')\nassert result['passed'] is True\n"})})}),(0,s.jsx)(i.A,{value:"Ruby",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rb",children:"result = driver.execute_script '/*@visual.end*/'\nexpect(result.passed).to eq(true)\n"})})}),(0,s.jsx)(i.A,{value:"C#",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'dynamic result = js.ExecuteScript("/*@visual.end*/");\nAssert.IsTrue(result.passed, result.message);\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["For more details on results returned, view the ",(0,s.jsx)(n.a,{href:"/visual/e2e-testing/commands-options",children:"Visual Commands"})," documentation."]}),"\n",(0,s.jsx)(n.h2,{id:"2-integrate-your-ci-build",children:"2. Integrate your CI Build"}),"\n",(0,s.jsx)(n.p,{children:"Associate your Visual tests with your CI build number by setting the build option in your capabilities."}),"\n",(0,s.jsx)(n.p,{children:"Below are build number environment variables for various CI tools:"}),"\n",(0,s.jsxs)(r.A,{defaultValue:"Jenkins",values:[{label:"Jenkins",value:"Jenkins"},{label:"CircleCI",value:"CircleCI"},{label:"TravisCI",value:"TravisCI"},{label:"GitLab",value:"GitLab"},{label:"Codeship",value:"Codeship"},{label:"Buildkite",value:"Buildkite"},{label:"Drone",value:"Drone"}],children:[(0,s.jsx)(i.A,{value:"Jenkins",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities: {\n  ...\n  'sauce:options': {\n    build: process.env.BUILD_NUMBER\n  }\n}\n"})})}),(0,s.jsx)(i.A,{value:"CircleCI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities: {\n  ...\n  'sauce:options': {\n    build: process.env.CIRCLE_BUILD_NUM\n  }\n}\n"})})}),(0,s.jsx)(i.A,{value:"TravisCI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities: {\n  ...\n  'sauce:options': {\n    build: process.env.TRAVIS_BUILD_NUMBER\n  }\n}\n"})})}),(0,s.jsx)(i.A,{value:"GitLab",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities: {\n  ...\n  'sauce:options': {\n    build: process.env.CI_PIPELINE_ID\n  }\n}\n"})})}),(0,s.jsx)(i.A,{value:"Codeship",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities: {\n  ...\n  'sauce:options': {\n    build: process.env.CI_BUILD_NUMBER\n  }\n}\n"})})}),(0,s.jsx)(i.A,{value:"Buildkite",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities: {\n  ...\n  'sauce:options': {\n    build: process.env.BUILDKITE_BUILD_NUMBER\n  }\n}\n"})})}),(0,s.jsx)(i.A,{value:"Drone",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"capabilities: {\n  ...\n  'sauce:options': {\n    build: process.env.DRONE_BUILD_NUMBER\n  }\n}\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/visual/acct-team-mgmt",children:"Invite users"})," to your project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/visual/e2e-testing/troubleshooting",children:"Troubleshooting"}),"."]}),"\n"]})]})}function v(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(18215);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),a=t(18215),r=t(23104),i=t(56347),l=t(205),u=t(57485),o=t(31682),c=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function v(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[i,u]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,d]=h({queryString:t,groupId:a}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),m=(()=>{const e=o??b;return v({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{m&&u(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!v({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function f(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==s&&(o(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function I(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,x.jsx)(f,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,g.A)();return(0,x.jsx)(I,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);