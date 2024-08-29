"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[11370],{24040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(74848),s=a(28453),n=a(86025);const r={id:"vault-variable",title:"Saving a Variable in Vault",sidebar_label:"Saving a Variable in Vault",description:"Create a variable in the vault to use across your tests"},o=void 0,l={id:"api-testing/use-cases/vault-variable",title:"Saving a Variable in Vault",description:"Create a variable in the vault to use across your tests",source:"@site/docs/api-testing/use-cases/vault-variable.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/vault-variable",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/use-cases/vault-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/vault-variable.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"vault-variable",title:"Saving a Variable in Vault",sidebar_label:"Saving a Variable in Vault",description:"Create a variable in the vault to use across your tests"},sidebar:"docs",previous:{title:"Improving Email Notifications using Fact",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/use-cases/fact"},next:{title:"Saving Token in K/V Store",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/use-cases/saving-token-kv"}},u={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Consider a scenario where a Request Header is required for all the endpoints in your test."}),"\n",(0,i.jsx)("img",{src:(0,n.Ay)("img/api-testing/vault-auth-header.png"),alt:"Request Header"}),"\n",(0,i.jsx)("img",{src:(0,n.Ay)("img/api-testing/requests-auth-header.webp"),alt:"Request Header in all endpoints"}),"\n",(0,i.jsxs)(t.p,{children:["While this is a perfectly valid request header, it can be hard to manage and update if you scale out your tests. Therefore, rather than continuously hard-coding this value into the ",(0,i.jsx)(t.strong,{children:"Request Header"})," field, a safer and more efficient approach is to export this value in to a variable."]}),"\n",(0,i.jsx)(t.p,{children:"The following is an example of how it might look in the project-specific Vault:"}),"\n",(0,i.jsx)("img",{src:(0,n.Ay)("img/api-testing/vault-header-var.png"),alt:"Request Header variable in the vault"}),"\n",(0,i.jsx)(t.admonition,{title:"Sentitive Data",type:"note",children:(0,i.jsxs)(t.p,{children:["When the variable contains sensitive data and you don't want leave it in plain text you can ",(0,i.jsx)(t.a,{href:"/api-testing/vault/#mark-variables-as-sensitive",children:"mark it as Sensitive"})," and it will be masked from everywhere it is used."]})}),"\n",(0,i.jsxs)(t.p,{children:["Now you can switch the ",(0,i.jsx)(t.strong,{children:"Request Header"})," field from a String value to a Variable and enter the variable name: ",(0,i.jsx)(t.code,{children:"header_key"})," (see the screenshot below). This allows you to have multiple tests in your project using the same header."]}),"\n",(0,i.jsx)("img",{src:(0,n.Ay)("img/api-testing/header-string-to-var.png"),alt:"Request Header with variable"}),"\n",(0,i.jsx)("img",{src:(0,n.Ay)("img/api-testing/request-with-variable.webp"),alt:"Request Header in all endpoints as variable"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var i=a(96540);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);