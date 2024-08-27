"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[53674],{91294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var s=n(74848),a=n(28453),i=n(86025),l=n(11470),r=n(19365);const c={id:"apitesting-saucectl-integration",title:"CI/CD Platform Integration with saucectl",sidebar_label:"CI/CD Integration (saucectl)",description:"Using Sauce Labs API Testing or CLI, you can seamlessly integrate continuous API testing into your CI/CD pipeline."},o=void 0,u={id:"api-testing/integrations/apitesting-saucectl-integration",title:"CI/CD Platform Integration with saucectl",description:"Using Sauce Labs API Testing or CLI, you can seamlessly integrate continuous API testing into your CI/CD pipeline.",source:"@site/docs/api-testing/integrations/apitesting-saucectl-integration.md",sourceDirName:"api-testing/integrations",slug:"/api-testing/integrations/apitesting-saucectl-integration",permalink:"/sauce-docs/pr-preview/pr-2910/api-testing/integrations/apitesting-saucectl-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/integrations/apitesting-saucectl-integration.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"apitesting-saucectl-integration",title:"CI/CD Platform Integration with saucectl",sidebar_label:"CI/CD Integration (saucectl)",description:"Using Sauce Labs API Testing or CLI, you can seamlessly integrate continuous API testing into your CI/CD pipeline."},sidebar:"docs",previous:{title:"CI/CD Integration (apifctl)",permalink:"/sauce-docs/pr-preview/pr-2910/api-testing/integrations/apifctl-cicd-integration"},next:{title:"saucectl YAML Configuration",permalink:"/sauce-docs/pr-preview/pr-2910/api-testing/integrations/yaml"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Installing <code>saucectl</code>",id:"installing-saucectl",level:2},{value:"Step 1: Create a Webhook",id:"step-1-create-a-webhook",level:3},{value:"Step 2: Install <code>saucectl</code>",id:"step-2-install-saucectl",level:3},{value:"Step 3: Link Your Sauce Labs Account",id:"step-3-link-your-sauce-labs-account",level:3},{value:"(Optional) Step 4: Clone the API Testing Project",id:"optional-step-4-clone-the-api-testing-project",level:3},{value:"<code>saucectl</code> Commands",id:"saucectl-commands",level:2},{value:"Run",id:"run",level:3},{value:"Vault",id:"vault",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Using the ",(0,s.jsxs)(t.a,{href:"/dev/cli/saucectl",children:[(0,s.jsx)(t.code,{children:"saucectl"})," CLI"]}),", you can execute API tests and interact with Sauce Labs API Testing."]}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (",(0,s.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["Your Sauce Labs ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,s.jsx)(t.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"installing-saucectl",children:["Installing ",(0,s.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,s.jsx)(t.h3,{id:"step-1-create-a-webhook",children:"Step 1: Create a Webhook"}),"\n",(0,s.jsxs)(t.p,{children:["To utilize ",(0,s.jsx)(t.code,{children:"saucectl"})," functionalities, you'll need to generate a webhook for your API Testing Project. Once generated, you'll need only the name of your API Testing Project."]}),"\n",(0,s.jsx)(t.p,{children:"To generate a webhook:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Log in to Sauce Labs, then click ",(0,s.jsx)(t.strong,{children:"API Testing"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to your Project and select the ",(0,s.jsx)(t.strong,{children:"WebHooks"})," tab.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-testing/webhook_tab.png"),alt:"webhook screenshot",width:"200"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Create Hook"}),".",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:(0,i.A)("img/api-testing/createHook.png"),alt:"Create New WebHook",width:"300"})]}),"\n",(0,s.jsxs)(t.li,{children:["Enter a ",(0,s.jsx)(t.strong,{children:"Hook Name"})," for your webhook (",(0,s.jsx)(t.strong,{children:"Description"})," is optional), then click ",(0,s.jsx)(t.strong,{children:"Save"}),".",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-testing/sampleHook.png"),alt:"sample webhook details",width:"300"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["The generated ",(0,s.jsx)(t.strong,{children:"Hook URL"})," will then appear."]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"step-2-install-saucectl",children:["Step 2: Install ",(0,s.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,s.jsxs)(t.p,{children:["Run the install command from your chosen ",(0,s.jsx)(t.code,{children:"saucectl"})," home directory in a terminal shell."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Example with npm"',children:"npm install -g saucectl\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Check the ",(0,s.jsx)(t.a,{href:"/dev/cli/saucectl/#installing-saucectl",children:"complete list of available installation options"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"step-3-link-your-sauce-labs-account",children:"Step 3: Link Your Sauce Labs Account"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"saucectl"})," requires access to a valid Sauce Labs account."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Use Environment Variables",type:"tip",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"saucectl"})," detects your Sauce Labs credentials ",(0,s.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," and prioritizes them over values in the ",(0,s.jsx)(t.code,{children:"credentials.yml"})," file when both are present. ",(0,s.jsx)(t.strong,{children:"If you have set them, you may skip this step."})," Not sure if you have them set? Run the following command to check:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),(0,s.jsx)(t.p,{children:"If you get a value for both variables, they are set."})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.code,{children:"configure"})," command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"saucectl configure\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Enter your Sauce Labs Username and Access Key at the prompts."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"optional-step-4-clone-the-api-testing-project",children:"(Optional) Step 4: Clone the API Testing Project"}),"\n",(0,s.jsx)(t.p,{children:"If you want to try using existing tests, you can clone the GitHub repository, as shown below."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"https",values:[{label:"HTTPS",value:"https"},{label:"SSH",value:"ssh"}],children:[(0,s.jsx)(r.A,{value:"https",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/saucelabs/saucectl-apitest-example.git\n"})})}),(0,s.jsx)(r.A,{value:"ssh",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:saucelabs/saucectl-apitest-example.git\n"})})})]}),"\n",(0,s.jsxs)(t.h2,{id:"saucectl-commands",children:[(0,s.jsx)(t.code,{children:"saucectl"})," Commands"]}),"\n",(0,s.jsx)(t.h3,{id:"run",children:"Run"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"run"})," command to execute the tests. The console displays the executing tests, distinguishing which mode is running. The results are available immediately following test completion in your ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/api-testing/",children:"Sauce Labs account"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"saucectl run\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can refer to the ",(0,s.jsx)(t.a,{href:"/dev/cli/saucectl/run/",children:"Command Reference"})," for the complete list of options for the ",(0,s.jsx)(t.code,{children:"run"})," command and ",(0,s.jsx)(t.a,{href:"/api-testing/integrations/yaml",children:"saucectl YAML Configuration"})," for more configuration options."]}),"\n",(0,s.jsx)(t.h3,{id:"vault",children:"Vault"}),"\n",(0,s.jsxs)(t.p,{children:["Supported ",(0,s.jsx)(t.code,{children:"saucectl vault"})," commands:"]}),"\n",(0,s.jsxs)("table",{id:"table-cli",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Operation"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/get",children:"Get Vault"})}),(0,s.jsx)("td",{children:"Print vault's content in JSON format to the stdout."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/get-variable",children:"Get a Variable"})}),(0,s.jsx)("td",{children:"Get a variable value from a project's vault."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/set-variable",children:"Set a Variable"})}),(0,s.jsx)("td",{children:"Set/update a variable in a project's vault."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/get-snippet",children:"Get a Snippet"})}),(0,s.jsx)("td",{children:"Get a snippet from a project's vault."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/set-snippet",children:"Set a Snippet"})}),(0,s.jsx)("td",{children:"Set/update a snippet in a project's vault."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/list-files",children:"List Files"})}),(0,s.jsx)("td",{children:"List files stored in the project's vault drive."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/upload-file",children:"Upload a File"})}),(0,s.jsx)("td",{children:"Upload a file to a project's vault drive."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/download-file",children:"Download a File"})}),(0,s.jsx)("td",{children:"Download a file from a project's vault drive."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/apit/vault/delete-file",children:"Delete a File"})}),(0,s.jsx)("td",{children:"Remove a file from a project's vault drive."})]})]})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>I});var s=n(96540),a=n(18215),i=n(23104),l=n(56347),r=n(205),c=n(57485),o=n(31682),u=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[o,d]=g({queryString:n,groupId:a}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),m=(()=>{const e=o??x;return p({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function f(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=r[n].value;a!==s&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function I(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);