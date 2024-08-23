"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[85268],{68572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),o=t(28453);const i={id:"updating-the-api-fortress-license-key",title:"Updating the API Fortress License Key",sidebar_label:"Updating the API Fortress License Key",keywords:["api","api-fortress","licensekey"]},r=void 0,c={id:"api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key",title:"Updating the API Fortress License Key",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"updating-the-api-fortress-license-key",title:"Updating the API Fortress License Key",sidebar_label:"Updating the API Fortress License Key",keywords:["api","api-fortress","licensekey"]},sidebar:"apif",previous:{title:"Proxy Settings in Downloader",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/self-hosted/proxy-settings-in-downloader"},next:{title:"Using RDS and DocumentDB",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/self-hosted/using-rds-and-documentdb"}},a={},d=[{value:"For Docker Users",id:"for-docker-users",level:2},{value:"For Kubernetes Users",id:"for-kubernetes-users",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you need an updated API Fortress license please reach out to your account manager or ",(0,s.jsx)(n.a,{href:"mailto:sales@saucelabs.com",children:"sales@saucelabs.com"})]}),"\n",(0,s.jsx)(n.p,{children:"The below instructions will show you where to replace the license key in the configuration file:"}),"\n",(0,s.jsx)(n.h2,{id:"for-docker-users",children:"For Docker Users"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Find the ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," file located in the ",(0,s.jsx)(n.code,{children:"core"})," directory"]}),"\n",(0,s.jsx)(n.li,{children:"Locate the section labeled \u201cAPIFORTRESS DASHBOARD\u201d"}),"\n",(0,s.jsxs)(n.li,{children:["Towards the bottom of the section you will find the key ",(0,s.jsx)(n.code,{children:"license:"})]}),"\n",(0,s.jsxs)(n.li,{children:["Replace the string to the right of the ",(0,s.jsx)(n.code,{children:":"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Be mindful to keep the single quotes around the license key"})}),"\n",(0,s.jsx)(n.h2,{id:"for-kubernetes-users",children:"For Kubernetes Users"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Find the ",(0,s.jsx)(n.code,{children:"apifortress.yml"})," file located in the ",(0,s.jsx)(n.code,{children:"root"})," directory"]}),"\n",(0,s.jsx)(n.li,{children:"Locate the section labeled \u201cAPI Fortress Dashboard\u201d"}),"\n",(0,s.jsxs)(n.li,{children:["Towards the bottom of the section you will find ",(0,s.jsx)(n.code,{children:"- name: license"})]}),"\n",(0,s.jsxs)(n.li,{children:["Below that you will see \u201cvalue:\u201d replace the string to the right of the ",(0,s.jsx)(n.code,{children:":"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Be mindful to keep the single quotes around the license key"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);