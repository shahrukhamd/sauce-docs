"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[20984],{41168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(74848),r=n(28453),o=n(86025);const i={id:"setup-connectors",title:"Set Up Connectors (For Notifications and Data)",sidebar_label:"Set Up Connectors",description:"Introduction Connectors are the way API Fortress integrates with other services and platforms to send data and/or notifications to them. A big benefit is how seamlessly API Fortress can be integrated into your day-to-day operations without disrupting workflows."},a=void 0,c={id:"api-testing/on-prem/quick-start/setup-connectors",title:"Set Up Connectors (For Notifications and Data)",description:"Introduction Connectors are the way API Fortress integrates with other services and platforms to send data and/or notifications to them. A big benefit is how seamlessly API Fortress can be integrated into your day-to-day operations without disrupting workflows.",source:"@site/docs/api-testing/on-prem/quick-start/setup-connectors.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/setup-connectors",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/quick-start/setup-connectors",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/setup-connectors.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"setup-connectors",title:"Set Up Connectors (For Notifications and Data)",sidebar_label:"Set Up Connectors",description:"Introduction Connectors are the way API Fortress integrates with other services and platforms to send data and/or notifications to them. A big benefit is how seamlessly API Fortress can be integrated into your day-to-day operations without disrupting workflows."},sidebar:"apif",previous:{title:"Environments, Vault, and Variable Overrides",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/quick-start/environments-vault-and-overrides-magic"},next:{title:"Using the Vault",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/quick-start/the-vault"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Currently Available Connectors",id:"currently-available-connectors",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Steps 1 &amp; 2 - Create an Alert Group, Add a Connector",id:"steps-1--2---create-an-alert-group-add-a-connector",level:3},{value:"Step 3 - Assign to a Project",id:"step-3---assign-to-a-project",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Connectors are the way API Fortress integrates with other services and platforms to send data and/or notifications to them. A big benefit is how seamlessly API Fortress can be integrated into your day-to-day operations without disrupting workflows."}),"\n",(0,s.jsx)(t.p,{children:"There are two levels of notification integrations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Failures Only"})," Sends a notification only when a test failure happens; this is typical for stateless services such as Slack."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Send All"})," Sends all events, including successes; this is very handy when the service needs to log everything or alter a state."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"currently-available-connectors",children:"Currently Available Connectors"}),"\n",(0,s.jsx)(t.p,{children:"API Fortress offers a full-featured API as well as webhooks for third-party integrations. Any platform with an API can be integrated with API Fortress. Find our current preconfigured connectors and connectors-in-progress in this list:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/setup-connectors-slack/",children:"Slack (click for\xa0a Slack specific\xa0walkthrough)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connector-bigpanda-io/",children:"BigPanda"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connector-hipchat/",children:"HipChat"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connectors-statuspage/",children:"StatusPage.io"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connectors-jira/",children:"JIRA"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connectors-twilio/",children:"Twilio"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/setup-connectors-datadog/",children:"DataDog"})}),"\n",(0,s.jsx)(t.li,{children:"New Relic"}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connectors-elastic-kibana/",children:"Elastic"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connector-pagerduty/",children:"PagerDuty"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connectors-xmatters/",children:"xMatters"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apifortress.com/doc/connectors-splunk/",children:"Splunk"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,s.jsx)(t.p,{children:"There are just three steps to the process:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Go to Company (Team) settings and create an Alert Group"}),"\n",(0,s.jsx)(t.li,{children:"Link a connector to that Alert Group"}),"\n",(0,s.jsx)(t.li,{children:"Connect that Alert Group to specific projects"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"steps-1--2---create-an-alert-group-add-a-connector",children:"Steps 1 & 2 - Create an Alert Group, Add a Connector"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Access the Company (Team) settings page by clicking the gear icon in the top right"}),"\n",(0,s.jsx)(t.li,{children:'Select "Alert groups" on the side menu'}),"\n",(0,s.jsx)(t.li,{children:"Create a new group of recipients if needed"}),"\n",(0,s.jsx)(t.li,{children:"Click on the connectors icon"}),"\n",(0,s.jsx)(t.li,{children:"Add a new Connector"}),"\n",(0,s.jsx)(t.li,{children:"Choose a service from the dropdown"}),"\n",(0,s.jsx)(t.li,{children:"Enter the required information"}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/01/notifications-alert-group-and-slack.gif"),alt:"Slack Connector Gif"}),"\n",(0,s.jsx)(t.h3,{id:"step-3---assign-to-a-project",children:"Step 3 - Assign to a Project"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Go back to the main dashboard"}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.em,{children:"Settings"})," on a project"]}),"\n",(0,s.jsxs)(t.li,{children:["Select Alert Group(s) in the ",(0,s.jsx)(t.em,{children:"Alert Distribution Group"})," field"]}),"\n",(0,s.jsx)(t.li,{children:"Click the green checkmark to save"}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2016/09/alert-group-set.gif"),alt:"Group Set Gif"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);