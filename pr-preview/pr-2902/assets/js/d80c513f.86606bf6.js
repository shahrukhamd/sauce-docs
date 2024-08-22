"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49493],{46800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var a=s(74848),i=s(28453);const c={id:"configure",title:"saucectl configure",sidebar_label:"configure"},t=void 0,r={id:"dev/cli/saucectl/configure/configure/configure",title:"saucectl configure",description:"Generate a credentials file with your Sauce Labs Username and Access Key.",source:"@site/docs/dev/cli/saucectl/configure/configure/configure.md",sourceDirName:"dev/cli/saucectl/configure/configure",slug:"/dev/cli/saucectl/configure/configure/",permalink:"/sauce-docs/pr-preview/pr-2902/dev/cli/saucectl/configure/configure/",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/configure/configure/configure.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1721767327e3,frontMatter:{id:"configure",title:"saucectl configure",sidebar_label:"configure"},sidebar:"dev",previous:{title:"saucectl completion",permalink:"/sauce-docs/pr-preview/pr-2902/dev/cli/saucectl/completion"},next:{title:"list",permalink:"/sauce-docs/pr-preview/pr-2902/dev/cli/saucectl/configure/list"}},l={},o=[{value:"Usage",id:"usage",level:2},{value:"Extended Description",id:"extended-description",level:2},{value:"Environment Variables Prioritized",id:"environment-variables-prioritized",level:3},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--accessKey</span>',id:"--accesskey",level:3},{value:'<span class="cli">--username</span>',id:"--username",level:3},{value:"Examples",id:"examples",level:2},{value:"Interactive Example",id:"interactive-example",level:3},{value:"Inline Example",id:"inline-example",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Generate a credentials file with your Sauce Labs Username and Access Key."}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ saucectl configure [OPTIONS]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"extended-description",children:"Extended Description"}),"\n",(0,a.jsxs)(n.p,{children:["Your Sauce Labs ",(0,a.jsx)(n.code,{children:"username"})," and ",(0,a.jsx)(n.code,{children:"accessKey"})," are required to post your test results to the Sauce Labs platform. These values are available on your ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings"})," page."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"saucectl configure"})," command prompts you to provide your Sauce Labs credentials for the purpose of generating a ",(0,a.jsx)(n.code,{children:"credentials.yml"})," file that ",(0,a.jsx)(n.code,{children:"saucectl"})," can access to automatically authenticate commands without requiring manual authentication. The ",(0,a.jsx)(n.code,{children:"credentials.yml"})," file is created in a ",(0,a.jsx)(n.code,{children:"$HOME/.sauce"})," folder (or ",(0,a.jsx)(n.code,{children:"%USERPROFILE%\\.sauce"})," on Windows). If a user's home directory is not defined, the credentials are instead saved in your ",(0,a.jsx)(n.code,{children:"saucectl"})," project root."]}),"\n",(0,a.jsxs)(n.p,{children:["You can run the ",(0,a.jsx)(n.code,{children:"configure"})," command without flags, invoking it to prompt you for your credential values, or you can supply the values inline using the username and access key flags."]}),"\n",(0,a.jsx)(n.h3,{id:"environment-variables-prioritized",children:"Environment Variables Prioritized"}),"\n",(0,a.jsxs)(n.p,{children:["If you have set your credentials as ",(0,a.jsx)(n.a,{href:"/basics/environment-variables",children:"environment variables"}),", ",(0,a.jsx)(n.code,{children:"saucectl"})," will apply those values before it looks for the ",(0,a.jsx)(n.code,{children:"credentials.yml"})," file. This is important to note because, if you want to run tests under a different account, and you edit your credentials file, but not your environment variables, the authentication account will be unchanged."]}),"\n",(0,a.jsx)(n.admonition,{title:"Protect your Credentials",type:"warning",children:(0,a.jsxs)(n.p,{children:["Whether you are using environment variables or a credentials file, make sure your authentication data is protected. Use secrets or context variables to mask your environment variables, or add ",(0,a.jsx)(n.code,{children:"credentials.yml"})," to your ",(0,a.jsx)(n.code,{children:"gitignore"})," file to ensure your credentials are not exposed in your commits."]})}),"\n",(0,a.jsx)(n.h2,{id:"options-details",children:"Options Details"}),"\n",(0,a.jsx)(n.h3,{id:"--accesskey",children:(0,a.jsx)("span",{className:"cli",children:"--accessKey"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The authentication access key associated with the Sauce Labs user account making this request. If you have not set your authentication credentials as environment parameters or generated a ",(0,a.jsx)(n.code,{children:"credentials.yml"})," file, this value is required.",(0,a.jsx)(n.strong,{children:"Shorthand:"})," ",(0,a.jsx)(n.code,{children:"-a"})]}),"\n",(0,a.jsx)(n.h3,{id:"--username",children:(0,a.jsx)("span",{className:"cli",children:"--username"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"A valid Sauce Labs user account. If you have not set your authentication credentials as environment parameters or generated a ",(0,a.jsx)(n.code,{children:"credentials.yml"})," file, this value is required.",(0,a.jsx)(n.strong,{children:"Shorthand:"})," ",(0,a.jsx)(n.code,{children:"-u"})]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"interactive-example",children:"Interactive Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ saucectl configure\nDon't have an account? Signup here:\nhttps://bit.ly/saucectl-signup\n\nAlready have an account? Get your username and access key here:\nhttps://app.saucelabs.com/user-settings\n\n? SauceLabs username tester.ninja\n? SauceLabs access key 2a4a9x11-56b7-4d83-8f6o-b601bg67555e\n\nYou're all set!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"inline-example",children:"Inline Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ saucectl configure -u tester.ninja -a 2a4a9x11-56b7-4d83-8f6o-b601bg67555e\nYou're all set!\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var a=s(96540);const i={},c=a.createContext(i);function t(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);