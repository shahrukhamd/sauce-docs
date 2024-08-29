"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[55741],{11134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),i=t(28453);const r={id:"generating-a-jwt",title:"Generating a JSON Web Token",sidebar_label:"Generating a JSON Web Token",keywords:["api","api-fortress","jwt"]},s=void 0,a={id:"api-testing/on-prem/reference/generating-a-jwt",title:"Generating a JSON Web Token",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/reference/generating-a-jwt.md",sourceDirName:"api-testing/on-prem/reference",slug:"/api-testing/on-prem/reference/generating-a-jwt",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/reference/generating-a-jwt",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/reference/generating-a-jwt.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"generating-a-jwt",title:"Generating a JSON Web Token",sidebar_label:"Generating a JSON Web Token",keywords:["api","api-fortress","jwt"]},sidebar:"apif",previous:{title:"Flow (Pause or Stop a Test)",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/logical-components/flow"},next:{title:"GitHub: Use a File as a Datasource",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/reference/github"}},c={},l=[{value:"Creating a JWT",id:"creating-a-jwt",level:2},{value:"Additional Notes",id:"additional-notes",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In some occasions, you may be required to generate a JSON Web Token. While API Fortress does not currently have a specific component for it, this result can be achieved by using an helper class."}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-jwt",children:"Creating a JWT"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Create a SET component, with "Language" a variable mode.'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Introduce the following code Groovy in the component"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"def claims = ['foo':'bar','dot':'com']\n\ndef subject = 'my subject'\n\ndef secret = '52535d535c515d55555'\n\nreturn io.jsonwebtoken.Jwts.builder().setClaims(claims).setSubject(subject).signWith(io.jsonwebtoken.SignatureAlgorithm.HS512,secret).compact()\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The SET variable will now contain a valid JWT, built with the provided data"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"In this example we declare the claim, the subject and the secret right within the script. This is for demonstration purposes, all the three items may come from the scope of the test, the data sets or the vault."}),"\n",(0,o.jsx)(n.li,{children:"The scripts uses HS512 as signature algorithm. All the possible options are: NONE, HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512, PS256, PS384, PS512"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);