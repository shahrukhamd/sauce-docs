"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[41565],{61726:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(74848),t=n(28453),o=n(86025);const r={id:"logging-in-via-sso",title:"Logging In via SSO",sidebar_label:"Logging In via SSO"},a=void 0,l={id:"basics/sso/logging-in-via-sso",title:"Logging In via SSO",description:"Enterprise Plans only",source:"@site/docs/basics/sso/logging-in-via-sso.md",sourceDirName:"basics/sso",slug:"/basics/sso/logging-in-via-sso",permalink:"/sauce-docs/pr-preview/pr-2903/basics/sso/logging-in-via-sso",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/logging-in-via-sso.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1682459673e3,frontMatter:{id:"logging-in-via-sso",title:"Logging In via SSO",sidebar_label:"Logging In via SSO"},sidebar:"docs",previous:{title:"Configuring PingOne",permalink:"/sauce-docs/pr-preview/pr-2903/basics/sso/configuring-sso-in-pingone"},next:{title:"Troubleshooting SSO",permalink:"/sauce-docs/pr-preview/pr-2903/basics/sso/troubleshooting-sso"}},d={},c=[{value:"Service Provider (SP) initiated SSO",id:"service-provider-sp-initiated-sso",level:2},{value:"Deep linking",id:"deep-linking",level:3},{value:"Identity Provider (IdP) initiated SSO",id:"identity-provider-idp-initiated-sso",level:2}];function g(i){const e={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,s.jsxs)(e.p,{children:["When using SAML SSO, we have two methods for starting Single Sign-On (SSO): ",(0,s.jsx)(e.a,{href:"#service-provider-sp-initiated-sso",children:"SP-initiated"})," or ",(0,s.jsx)(e.a,{href:"#identity-provider-idp-initiated-sso",children:"IdP-initiated"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"service-provider-sp-initiated-sso",children:"Service Provider (SP) initiated SSO"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Go to ",(0,s.jsx)(e.a,{href:"https://accounts.saucelabs.com",children:"the Sauce Labs login page"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"SSO"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/basics/sso/login-sso-btn.png"),alt:"SSO Login Button",width:"500"}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsxs)(e.li,{children:["Enter your company email address and click ",(0,s.jsx)(e.strong,{children:"Log in"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/basics/sso/login-sso-input-email.png"),alt:"Input SSO Email",width:"500"}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"You will be redirected to your identity provider to authenticate with your company credentials."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"If you are already authenticated at your identity provider, you will be redirected to the Sauce Labs dashboard."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["If new users are not able to log in via the SP-initiated flow, make sure that your ",(0,s.jsx)(e.a,{href:"/basics/sso/setting-up-sso#email-domains",children:"company email domains were assigned to your organization"}),"."]})}),"\n",(0,s.jsx)(e.h3,{id:"deep-linking",children:"Deep linking"}),"\n",(0,s.jsx)(e.p,{children:"Copying and pasting links is the quickest way to share pages."}),"\n",(0,s.jsx)(e.p,{children:"If you paste a link to, for example, a test results page at Sauce Labs and you are not authenticated. You will be redirected to the Sauce Labs login page."}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/basics/sso/login-sso-btn.png"),alt:"Login Page",width:"500"}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Follow the steps from ",(0,s.jsx)(e.a,{href:"#service-provider-sp-initiated-sso",children:"the SP-initiated flow"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:"SSO"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Enter your company email address."}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:"Log in"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"And you will be redirected to the requested page."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"identity-provider-idp-initiated-sso",children:"Identity Provider (IdP) initiated SSO"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Log into your identity provider dashboard, for example Okta."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click the ",(0,s.jsx)(e.strong,{children:"Sauce Labs"})," tile in your applications catalog."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/basics/sso/login-sso-okta-dashboard.png"),alt:"Okta Dashboard",width:"500"}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"After successful authentication, you will be redirected to Sauce Labs dashboard."}),"\n"]})]})}function h(i={}){const{wrapper:e}={...(0,t.R)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(g,{...i})}):g(i)}},28453:(i,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function r(i){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:r(i.components),s.createElement(o.Provider,{value:e},i.children)}}}]);