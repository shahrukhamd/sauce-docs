"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[37313],{5541:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var s=t(74848),i=t(28453);const r=[{value:"Environment Variable Expansion",id:"environment-variable-expansion",level:2},{value:"Predefined Environment Variables",id:"predefined-environment-variables",level:2},{value:"Tailoring Your Test File Bundle",id:"tailoring-your-test-file-bundle",level:2},{value:"Excluding Files from the Bundle",id:"excluding-files-from-the-bundle",level:3},{value:"Including Node Dependencies",id:"including-node-dependencies",level:3},{value:"Remove &quot;node_modules&quot; from <code>.sauceignore</code>",id:"remove-node_modules-from-sauceignore",level:3},{value:"Install &quot;devDependencies&quot; Only",id:"install-devdependencies-only",level:4},{value:"Uninstall Nonessential Dependencies",id:"uninstall-nonessential-dependencies",level:4},{value:"Install Essential Dependencies Individually",id:"install-essential-dependencies-individually",level:4},{value:"Set NPM Packages in <code>config.yml</code>",id:"set-npm-packages-in-configyml",level:3},{value:"Attaching Test Assets",id:"attaching-test-assets",level:2},{value:"Attaching entire directories",id:"attaching-entire-directories",level:3},{value:"Handling nested assets",id:"handling-nested-assets",level:3},{value:"Setting up a Proxy",id:"setting-up-a-proxy",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"environment-variable-expansion",children:"Environment Variable Expansion"}),"\n",(0,s.jsxs)(n.p,{children:["All values in your ",(0,s.jsx)(n.code,{children:"saucectl"})," configuration support environment variable expansion. ",(0,s.jsx)(n.code,{children:"$var"})," in ",(0,s.jsx)(n.code,{children:"config.yml"})," will be replaced according to your shell's environment variables. References to undefined variables will be replaced with an empty string."]}),"\n",(0,s.jsx)(n.h2,{id:"predefined-environment-variables",children:"Predefined Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"The following environment variables are available during test execution."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Environment Variable"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SAUCE_JOB_ID"}),(0,s.jsx)(n.td,{children:"Job ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SAUCE_SUITE_NAME"}),(0,s.jsx)(n.td,{children:"Suite Name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SAUCE_ARTIFACTS_DIRECTORY"}),(0,s.jsx)(n.td,{children:"Absolute path to the artifacts directory. Files placed in this folder are persisted with the Job."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"tailoring-your-test-file-bundle",children:"Tailoring Your Test File Bundle"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"saucectl"})," command line bundles your root directory (",(0,s.jsx)(n.code,{children:"rootDir"})," parameter of ",(0,s.jsx)(n.code,{children:"config.yml"}),") and transmits it to the Sauce Labs cloud, then unpacks the bundle and runs the tests. This functionality is partly what allows Sauce Control to operate in a framework-agnostic capacity. However, you can and should manage the inclusion and exclusion of files that get bundled to optimize performance and ensure security."]}),"\n",(0,s.jsx)(n.h3,{id:"excluding-files-from-the-bundle",children:"Excluding Files from the Bundle"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:".sauceignore"})," file allows you to designate certain files to be excluded from bundling."]}),"\n",(0,s.jsxs)(n.p,{children:["Add any files that are not direct test dependencies to ",(0,s.jsx)(n.code,{children:".sauceignore"})," to reduce the size of your bundle, improve test speed, and protect sensitive information."]}),"\n",(0,s.jsxs)(n.p,{children:["Examples of what can be included in ",(0,s.jsx)(n.code,{children:".sauceignore"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# .sauceignore\n\n# Ignore node_modules\nnode_modules/\n\n# Ignore all log files\n*.log\n\n# Ignore executables/binaries\n*.exe\n*.bin\n**/*/bin\n\n# Ignore media files\n*.png\n*.jpeg\n*.jpg\n*.mp4\n\n# Ignore documentation\n*.rst\n*.md\n\n# Ignore sensitive data\ncredentials.yml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sometimes it's easier to do the inverse: Including files for the bundle."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Ignore all files by default.\n/*\n\n# Re-include files we selectively want as part of the payload by prefixing the lines with '!'.\n!/node_modules\n!/cypress\n!cypress.config.js\n\n# Since the whole '/cypress' folder is now included, this would also include any\n# subdirectories that potentially contain auto-generated test artifacts from\n# the local dev environment.\n# It'd be wasteful to include them in the payload, so let's ignore those subfolders.\n/cypress/videos/\n/cypress/results/\n/cypress/screenshots/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"including-node-dependencies",children:"Including Node Dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["The default ",(0,s.jsx)(n.code,{children:".sauceignore"})," file lists ",(0,s.jsx)(n.code,{children:"node_modules/"})," so locally installed node dependencies are excluded from the bundle. If your tests require node dependencies to run, you can either:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.a,{href:"#remove-node_modules-from-sauceignore",children:["Include ",(0,s.jsx)(n.code,{children:"node_modules"})," with your bundle"]})," or"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#set-npm-packages-in-configyml",children:"Set NPM packages in config.yml"})}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"remove-node_modules-from-sauceignore",children:['Remove "node_modules" from ',(0,s.jsx)(n.code,{children:".sauceignore"})]}),"\n",(0,s.jsxs)(n.p,{children:["Delete or comment out ",(0,s.jsx)(n.code,{children:"node_modules/"})," in your ",(0,s.jsx)(n.code,{children:".sauceignore"})," file to bundle your node dependencies. For example,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Do NOT exclude node_modules from bundle\n# node_modules/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Node dependencies can increase your bundle by potentially hundreds of megabytes, so consider including only the required dependencies rather than the entire ",(0,s.jsx)(n.code,{children:"node_modules"})," directory. The following sections provide some methods for limiting the scope of dependencies you must include."]}),"\n",(0,s.jsx)(n.h4,{id:"install-devdependencies-only",children:'Install "devDependencies" Only'}),"\n",(0,s.jsxs)(n.p,{children:["Consider only installing NPM ",(0,s.jsx)(n.code,{children:"devDependencies"})," if your tests do not require all prod ",(0,s.jsx)(n.code,{children:"dependencies"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Only install dev dependencies\nnpm install --only=dev\n\nsaucectl run\n"})}),"\n",(0,s.jsx)(n.h4,{id:"uninstall-nonessential-dependencies",children:"Uninstall Nonessential Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"If your standard install includes dependencies that aren't needed to run your tests, uninstall them prior to bundling."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Install node dependencies\nnpm ci # or "npm install"\n\n# Remove unneeded dependencies\nnpm uninstall appium\nnpm uninstall express\n\nsaucectl run\n'})}),"\n",(0,s.jsx)(n.h4,{id:"install-essential-dependencies-individually",children:"Install Essential Dependencies Individually"}),"\n",(0,s.jsxs)(n.p,{children:["If you know that your tests require only specific dependencies, install them individually instead of running ",(0,s.jsx)(n.code,{children:"npm install"})," or ",(0,s.jsx)(n.code,{children:"npm ci"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Install individual dependencies\nnpm install playwright-xpath\n\nsaucectl run\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"set-npm-packages-in-configyml",children:["Set NPM Packages in ",(0,s.jsx)(n.code,{children:"config.yml"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can avoid installing or uninstalling dependencies prior to each bundling operation by defining a default set of NPM packages to install in your sauce configuration file using the ",(0,s.jsx)(n.code,{children:"npm"})," parameter, as shown in the following example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title= "config.yml npm example"',children:'npm:\n  registries:\n    - url: https://registry.npmjs.org\n  packages:\n    "lodash": "4.17.20"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can let ",(0,s.jsx)(n.code,{children:"saucectl"})," selectively include already installed dependencies from the ",(0,s.jsx)(n.code,{children:"node_modules"})," folder."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title= "config.yml npm dependencies"',children:"npm:\n  dependencies:\n    - lodash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"package.json"})," file is specified, ",(0,s.jsx)(n.code,{children:"saucectl"})," will automatically include all\nlocally installed ",(0,s.jsx)(n.code,{children:"dependencies"})," and ",(0,s.jsx)(n.code,{children:"devDependencies"})," listed in the\n",(0,s.jsx)(n.code,{children:"package.json"})," file. While this may seem convenient at first, it can lead to\nlong startup times if the ",(0,s.jsx)(n.code,{children:"package.json"})," file includes dependencies that are\nnot strictly required for the test run."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title= "config.yml npm dependencies from package.json"',children:'npm:\n  dependencies:\n    - "package.json"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This feature is highly experimental."})}),"\n",(0,s.jsx)(n.h2,{id:"attaching-test-assets",children:"Attaching Test Assets"}),"\n",(0,s.jsxs)(n.p,{children:["By default, any test assets created by your tests at runtime (such as logs, screenshots or reports) you wish to retain along with your test results must be placed in the ",(0,s.jsx)(n.code,{children:"__assets__"})," directory of your project root folder. On Sauce Labs VMs, this path is relative to the current working directory."]}),"\n",(0,s.jsx)(n.h3,{id:"attaching-entire-directories",children:"Attaching entire directories"}),"\n",(0,s.jsxs)(n.p,{children:["In situations where you want to preserve the file structure of your assets (e.g. a multi-page HTML report),\nyou can use the ",(0,s.jsx)(n.code,{children:"retain"})," feature to define a directory to archive and store as a test asset."]}),"\n",(0,s.jsx)(n.h3,{id:"handling-nested-assets",children:"Handling nested assets"}),"\n",(0,s.jsxs)(n.p,{children:["Nested assets are stored ",(0,s.jsx)(n.strong,{children:"flat"})," in Sauce Labs. A test asset like ",(0,s.jsx)(n.code,{children:"__assets__/mylogs/log.txt"})," would therefore be stored and available for download as ",(0,s.jsx)(n.code,{children:"log.txt"}),".\nPlease keep that in mind when creating custom assets, as examples like ",(0,s.jsx)(n.code,{children:"__assets__/mylogs/log.txt"})," and ",(0,s.jsx)(n.code,{children:"__assets__/myotherlogs/log.txt"})," would eventually collide when persisted."]}),"\n",(0,s.jsxs)(n.p,{children:["For Cypress and Playwright, there are cases where you may want to override this default behavior; e.g. your test framework generates\nan HTML report and you want to preserve the entire report directory and don't want the individual files to\nbe flattened and automatically attached as described above. In that case, you can set an environment variable\nin your saucectl config to opt out of the default behaviour. When set, the configured output directory\nfor the test run will be honoured; e.g. it won't be overridden to ",(0,s.jsx)(n.code,{children:"__assets__/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title= "example configuration"',children:'artifacts:\n  retain:\n    report-directory: archived-report.zip\n\nenv:\n  SAUCE_SYNC_WEB_ASSETS: "true"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When configured this way, the directory named ",(0,s.jsx)(n.code,{children:"report-directory"})," will be archived as ",(0,s.jsx)(n.code,{children:"archived-report.zip"}),".\nTo maintain backwards compatibility with our UI, some asset types (e.g. images, logs, etc.) in ",(0,s.jsx)(n.code,{children:"report-directory"})," will still be automatically copied over to ",(0,s.jsx)(n.code,{children:"__assets__/"})," and attached to the test results."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-a-proxy",children:"Setting up a Proxy"}),"\n",(0,s.jsx)(n.p,{children:"If you need to go through a proxy server, you can set it through the following variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTP_PROXY"}),": Proxy to use to access HTTP websites"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTPS_PROXY"}),": Proxy to use to access HTTPS websites"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},12424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=t(74848),i=t(28453),r=(t(11470),t(19365),t(86025),t(5541));function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"using-a-tunnel-with-cucumber-for-playwright",children:"Using a Tunnel With Cucumber for Playwright"}),"\n",(0,s.jsxs)(n.p,{children:["When using a tunnel with Cucumber for Playwright, you need to explicitly tell Playwright to use it.\nIts value is stored in the ",(0,s.jsx)(n.code,{children:"HTTP_PROXY"})," env var."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"reference",children:"https://github.com/saucelabs/saucectl-playwright-example/blob/main/examples/cucumber/features/support/steps.js#L5-L17\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}const o={id:"advanced",title:"Cucumber.js with Playwright Advanced Configuring",sidebar_label:"Advanced Configuration"},d=void 0,c={id:"web-apps/automated-testing/cucumberjs-playwright/advanced",title:"Cucumber.js with Playwright Advanced Configuring",description:"",source:"@site/docs/web-apps/automated-testing/cucumberjs-playwright/advanced.md",sourceDirName:"web-apps/automated-testing/cucumberjs-playwright",slug:"/web-apps/automated-testing/cucumberjs-playwright/advanced",permalink:"/sauce-docs/pr-preview/pr-2910/web-apps/automated-testing/cucumberjs-playwright/advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/cucumberjs-playwright/advanced.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"advanced",title:"Cucumber.js with Playwright Advanced Configuring",sidebar_label:"Advanced Configuration"},sidebar:"docs",previous:{title:"YAML Configuration",permalink:"/sauce-docs/pr-preview/pr-2910/web-apps/automated-testing/cucumberjs-playwright/yaml"},next:{title:"Limitations",permalink:"/sauce-docs/pr-preview/pr-2910/web-apps/automated-testing/cucumberjs-playwright/limitations"}},u={},h=[{value:"Using a Tunnel With Cucumber for Playwright",id:"using-a-tunnel-with-cucumber-for-playwright",level:2},...r.RM];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),"\n",(0,s.jsx)(r.Ay,{})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p()}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),i=t(18215),r=t(23104),a=t(56347),l=t(205),o=t(57485),d=t(31682),c=t(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),x=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==s&&(d(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,y.jsx)(b,{...e,...n}),(0,y.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);