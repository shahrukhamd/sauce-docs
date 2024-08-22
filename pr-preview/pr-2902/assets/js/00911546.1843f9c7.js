"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[75277],{12980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453),s=t(86025);const i={id:"xmatters",title:"Connectors: xMatters",sidebar_label:"xMatters",keywords:["api-testing","integrations","xmatters","connectors"]},a=void 0,c={id:"api-testing/on-prem/integrations/connectors/xmatters",title:"Connectors: xMatters",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/connectors/xmatters.md",sourceDirName:"api-testing/on-prem/integrations/connectors",slug:"/api-testing/on-prem/integrations/connectors/xmatters",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/integrations/connectors/xmatters",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/connectors/xmatters.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"xmatters",title:"Connectors: xMatters",sidebar_label:"xMatters",keywords:["api-testing","integrations","xmatters","connectors"]},sidebar:"apif",previous:{title:"Twilio",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/integrations/connectors/twilio"},next:{title:"Splunk",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/integrations/connectors/splunk"}},l={},d=[];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(n.p,{children:"This connection with xMatters allows you to notify on-call responders based on failures in your API Fortress tests. Send critical information on the failure as well as a link to the test report from the failed test."}),"\n",(0,o.jsx)(n.p,{children:"Below is a quick guide to setting up and using the xMatters connector."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/integrations/add-new-connector",children:"click here."})]})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Go to settings page"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/01/Cogwheel-1.png"),alt:"CogWheel"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click on \u201cAlert Groups\u201d"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/01/AlertGroup.png"),alt:"AlertGroup.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create a new group or add a connector to an existing alert group"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/xmatters_alertgroup.png"),alt:"xmatters_alertgroup.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add a new connector"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/xmatters_newconnector.png"),alt:"xmatters_newconnector.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Choose the xMatters connector"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/xmatters_connector.png"),alt:"xmatters_connector.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the connector"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/Screen-Shot-2020-02-28-at-11.28.38-AM.png"),alt:"screenshot"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"trigger_url"}),' is the url found in your "inbound integration" settings for your workflow:',"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/xmatters_trigger.png"),alt:"xmatters_trigger.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"recipients"})," are the users or groups you would like alert in your xMatters instance. (ex: ",(0,o.jsx)(n.code,{children:"userid1"}),",",(0,o.jsx)(n.code,{children:"userid2"})," or ",(0,o.jsx)(n.code,{children:"groupid"}),")"]}),"\n",(0,o.jsx)(n.li,{children:'The base URL for your API Fortress instance should be in the constant "API Fortress Base URL" this will be used to build the url for your test report link.'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Go into project settings for a project you would like xMatters alerts set up for"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/01/Settings.png"),alt:"Settings.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the alert group that contains your xMatters connector to this project"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/Screen-Shot-2020-02-28-at-11.31.17-AM.png"),alt:"screenshot.png"}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);