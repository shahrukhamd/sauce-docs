"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99821],{18455:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var e=i(74848),o=i(28453),t=i(86025);const r={id:"configuring-sso-in-onelogin",title:"Configuring SSO in OneLogin",sidebar_label:"Configuring OneLogin"},c=void 0,a={id:"basics/sso/configuring-sso-in-onelogin",title:"Configuring SSO in OneLogin",description:"Enterprise Plans only",source:"@site/docs/basics/sso/configuring-sso-in-onelogin.md",sourceDirName:"basics/sso",slug:"/basics/sso/configuring-sso-in-onelogin",permalink:"/sauce-docs/pr-preview/pr-2910/basics/sso/configuring-sso-in-onelogin",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/configuring-sso-in-onelogin.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"configuring-sso-in-onelogin",title:"Configuring SSO in OneLogin",sidebar_label:"Configuring OneLogin"},sidebar:"docs",previous:{title:"Configuring Okta",permalink:"/sauce-docs/pr-preview/pr-2910/basics/sso/configuring-sso-in-okta"},next:{title:"Configuring PingOne",permalink:"/sauce-docs/pr-preview/pr-2910/basics/sso/configuring-sso-in-pingone"}},l={},d=[];function g(n){const s={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:(0,e.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,e.jsxs)(s.ol,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Log in to ",(0,e.jsx)(s.strong,{children:"OneLogin"})," administrator panel."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["In the ",(0,e.jsx)(s.strong,{children:"Applications"})," menu click ",(0,e.jsx)(s.strong,{children:"Applications"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.A)("img/basics/sso/idp-config/onelogin/apps.png"),alt:"Menu Applications",width:"350"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Click ",(0,e.jsx)(s.strong,{children:"Add App"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.A)("img/basics/sso/idp-config/onelogin/add-app.png"),alt:"Add App",width:"250"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Enter ",(0,e.jsx)(s.strong,{children:"Sauce Labs"})," in the search box and choose the app ",(0,e.jsx)(s.strong,{children:"Sauce Labs (New) - SAML 2.0"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.A)("img/basics/sso/idp-config/onelogin/search-app.png"),alt:"Search App",width:"800"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Click ",(0,e.jsx)(s.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["In the ",(0,e.jsx)(s.strong,{children:"More actions"})," menu, click ",(0,e.jsx)(s.strong,{children:"SAML Metadata"}),". You will download identity provider metadata."]}),"\n",(0,e.jsx)("img",{src:(0,t.A)("img/basics/sso/idp-config/onelogin/download-metadata.png"),alt:"Download Metadata",width:"250"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Use the metadata file from the previous step and set up the SSO integration at Sauce Labs in ",(0,e.jsx)(s.a,{href:"/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider",children:"Organization Management Panel"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Next, you assign users to the application in Auth0:"}),"\n",(0,e.jsxs)(s.ol,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["In the ",(0,e.jsx)(s.strong,{children:"Users"})," menu select ",(0,e.jsx)(s.strong,{children:"Users"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.A)("img/basics/sso/idp-config/onelogin/menu-users.png"),alt:"Menu Users",width:"300"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Choose a user from the list."}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Click ",(0,e.jsx)(s.strong,{children:"Applications"})," in the left menu and click the ",(0,e.jsx)(s.strong,{children:"+"})," icon."]}),"\n",(0,e.jsx)("img",{src:(0,t.A)("img/basics/sso/idp-config/onelogin/user-menu-apps.png"),alt:"Users - Menu Applications",width:"1000"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Select the Sauce Labs application from the list and click ",(0,e.jsx)(s.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["You can modify ",(0,e.jsx)(s.strong,{children:"Name ID"})," (it has to be an ",(0,e.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#name-id",children:"email address"}),"), first name, or last name, and then click ",(0,e.jsx)(s.strong,{children:"Save"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,t.A)("img/basics/sso/idp-config/onelogin/assign-user-to-app.png"),alt:"Assign User to App",width:"500"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Test the integration using the ",(0,e.jsx)(s.a,{href:"/basics/sso/logging-in-via-sso",children:"IdP-initiated and the SP-initiated login"}),"."]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:s}={...(0,o.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(g,{...n})}):g(n)}},28453:(n,s,i)=>{i.d(s,{R:()=>r,x:()=>c});var e=i(96540);const o={},t=e.createContext(o);function r(n){const s=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),e.createElement(t.Provider,{value:s},n.children)}}}]);