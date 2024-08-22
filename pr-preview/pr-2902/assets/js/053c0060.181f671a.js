"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98366],{73693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453),o=t(86025);const r={id:"single-sign-on-with-saml-2-0-beta",title:"Single Sign On with SAML 2.0 (beta)",sidebar_label:"SSO / SAML 2.0 (beta)",keywords:["api-testing","integrations","sso","saml2.0","beta"]},l=void 0,a={id:"api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta",title:"Single Sign On with SAML 2.0 (beta)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta.md",sourceDirName:"api-testing/on-prem/integrations",slug:"/api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"single-sign-on-with-saml-2-0-beta",title:"Single Sign On with SAML 2.0 (beta)",sidebar_label:"SSO / SAML 2.0 (beta)",keywords:["api-testing","integrations","sso","saml2.0","beta"]},sidebar:"apif",previous:{title:"Jenkins: Tricentis qTest Integration",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/integrations/jenkins"},next:{title:"Downloader 101",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/learn-more/downloader-101"}},c={},d=[{value:"Step 1: Activate It",id:"step-1-activate-it",level:2},{value:"Step 2: Configure It",id:"step-2-configure-it",level:2},{value:"Step 3: Mount It",id:"step-3-mount-it",level:2},{value:"Step 4: Restart API Fortress",id:"step-4-restart-api-fortress",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This feature is self-hosted/on-premises only"})}),"\n",(0,s.jsx)(n.p,{children:"If you are using a self-hosted/on-premises deployment and would like to set up single sign-on (SAML 2,.0) follow the below instructions."}),"\n",(0,s.jsx)(n.h2,{id:"step-1-activate-it",children:"Step 1: Activate It"}),"\n",(0,s.jsx)(n.p,{children:"Whether you\u2019re using a docker-compose or a Kubernetes deployment, introduce the following environment variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Name: samlEnabled Value: 'true'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-configure-it",children:"Step 2: Configure It"}),"\n",(0,s.jsxs)(n.p,{children:["The provided ",(0,s.jsx)(n.code,{children:"saml/saml.properties"})," file contains all the configuration keys necessary to the SAML functionality."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onelogin.saml2.sp.entityid"}),": identifies the SP"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onelogin.saml2.sp.assertion_consumer_service.url"}),": where the response from idp is returned after an authentication request"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onelogin.saml2.sp.single_logout_service.url"}),": where the response from idp is returned after logout request"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onelogin.saml2.idp.single_sign_on_service.url"}),": where the SP will send the Authentication Request"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onelogin.saml2.idp.single_logout_service.url"}),": where the SP will send the logout request"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onelogin.saml2.idp.x509cert"}),": public ",(0,s.jsx)(n.code,{children:"x509"})," certificate of the IdP"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"onelogin.saml2.sp.entityid = apifortress\nonelogin.saml2.sp.assertion_consumer_service.url = http://apif.example.com:8080/app/web/login/acs\nonelogin.saml2.sp.single_logout_service.url = http://apif.example.com:8080/app/web/login/sls\nonelogin.saml2.idp.entityid = https://app.onelogin.com/saml/metadata/7037e41d-4ab4-417a-b0a2-c4e2f580faf2\nonelogin.saml2.idp.single_sign_on_service.url = https://apifortress.onelogin.com/trust/saml2/http-post/sso/917654\nonelogin.saml2.idp.single_logout_service.url = https://apifortress.onelogin.com/trust/saml2/http-redirect/slo/917654\nonelogin.saml2.idp.x509cert = -----BEGIN CERTIFICATE-----CERTIFICATE HASH-----END CERTIFICATE-----\n"})}),"\n",(0,s.jsx)(n.p,{children:"Further changes can be applied to the expected properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"apifortress.firstname=FIRSTNAME"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"apifortress.lastname=LASTNAME"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"apifortress.mail=MAIL"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In IDP one of MANAGER,DEVELOPER,ANALYST: ",(0,s.jsx)(n.code,{children:"apifortress.level=LEVEL"})]}),"\n",(0,s.jsxs)(n.p,{children:["By altering these configuration keys, you change the ",(0,s.jsx)(n.strong,{children:"name"})," of the property that\u2019s being sent by the IDP. As a default, the required properties are:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"FIRSTNAME,"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"LASTNAME,"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MAIL,"})," ",(0,s.jsx)(n.strong,{children:"and"})," ",(0,s.jsx)(n.strong,{children:"LEVEL"})," (which represents the level of the user within API Fortress and can be one of the following values: ",(0,s.jsx)(n.strong,{children:"MANAGER, DEVELOPER, or ANALYST."})," If the field is not provided, ",(0,s.jsx)(n.strong,{children:"MANAGER"})," is assumed."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"admin"})," status can only be set via the API Fortress configuration panel.)"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"There may be other configuration keys to be altered based on the IDP requirements."})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-mount-it",children:"Step 3: Mount It"}),"\n",(0,s.jsxs)(n.p,{children:['Mount the provided "saml" directory to the location: ',(0,s.jsx)(n.code,{children:"/usr/local/tomcat/webapps/app/WEB-INF/saml"})]}),"\n",(0,s.jsx)(n.p,{children:"If Kubernetes is being used, ConfigMaps will achieve the same result."}),"\n",(0,s.jsx)(n.h2,{id:"step-4-restart-api-fortress",children:"Step 4: Restart API Fortress"}),"\n",(0,s.jsx)(n.p,{children:"Restart the API Fortress dashboard(s)."}),"\n",(0,s.jsx)(n.p,{children:"The login screen will now look like this:"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/10/Screen-Shot-2019-10-14-at-10.18.44-AM.png"),alt:"screenshot"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);