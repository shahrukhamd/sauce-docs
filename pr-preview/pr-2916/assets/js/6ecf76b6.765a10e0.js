"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[54020],{61612:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>l});var a=s(74848),n=s(28453),i=s(86025);const c={id:"switching-active-team",title:"Switching active team",sidebar_label:"Switching active team"},r="User navigating between teams",m={id:"basics/acct-team-mgmt/switching-active-team",title:"Switching active team",description:"Enterprise Plans only Beta feature",source:"@site/docs/basics/acct-team-mgmt/switching-active-team.md",sourceDirName:"basics/acct-team-mgmt",slug:"/basics/acct-team-mgmt/switching-active-team",permalink:"/sauce-docs/pr-preview/pr-2916/basics/acct-team-mgmt/switching-active-team",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/acct-team-mgmt/switching-active-team.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"switching-active-team",title:"Switching active team",sidebar_label:"Switching active team"},sidebar:"docs",previous:{title:"Viewing and Exporting Usage Data",permalink:"/sauce-docs/pr-preview/pr-2916/basics/acct-team-mgmt/viewing-exporting-usage-data"},next:{title:"Managing Concurrency",permalink:"/sauce-docs/pr-preview/pr-2916/basics/acct-team-mgmt/concurrency/managing-concurrency"}},o={},l=[{value:"Batch assignment of users to multiple teams",id:"batch-assignment-of-users-to-multiple-teams",level:2},{value:"Assigning a single user to multiple teams",id:"assigning-a-single-user-to-multiple-teams",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})," ",(0,a.jsx)("span",{className:"sauceYellow",children:"Beta feature"})]}),"\n",(0,a.jsxs)(t.admonition,{type:"caution",children:[(0,a.jsxs)(t.p,{children:["This functionality ",(0,a.jsx)(t.em,{children:"affects"})," tests run via ",(0,a.jsx)(t.em,{children:"API"})," calls. It will result in tests being assigned to the currently active team."]}),(0,a.jsxs)(t.p,{children:["Please be cautious when using it. Currently, we ",(0,a.jsx)(t.em,{children:"recommend"})," using it mostly for UI-related work."]})]}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"user-navigating-between-teams",children:"User navigating between teams"})}),"\n",(0,a.jsx)(t.p,{children:"User can see the active and other teams you are assigned to in the navigation bar in the web application."}),"\n",(0,a.jsx)("img",{src:(0,i.Ay)("img/team-mgmt/active-team-dropdown.png"),alt:"Active team dropdown in Navigation bar",width:"400"}),"\n",(0,a.jsx)(t.p,{children:"The dropdown lists all the teams assigned to the user."}),"\n",(0,a.jsxs)(t.p,{children:["Additionally, the user can check what teams they are assigned to in ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"})," at ",(0,a.jsx)(t.code,{children:"My Account"})," section. The first team in the field ",(0,a.jsx)(t.code,{children:"Assigned Teams"})," refers to the currently active team."]}),"\n",(0,a.jsx)(t.p,{children:'User can be assigned to multiple teams but only one is the "active" team. This means that if a user runs a test, the test will be assigned to the team the user had active at the time of starting the test.'}),"\n",(0,a.jsx)(t.h1,{id:"assigning-users-to-multiple-teams",children:"Assigning users to multiple teams"}),"\n",(0,a.jsxs)(t.p,{children:["Users with role ",(0,a.jsx)(t.code,{children:"Organization Admin"})," can manage teams assignment to multiple users via ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/team-management/users",children:"User Management view"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"NOTE:"})," Users preserve their roles. For example, if a user has a role ",(0,a.jsx)(t.code,{children:"Team Admin"})," while being assigned to Team X and the ",(0,a.jsx)(t.code,{children:"Organization Admin"})," assigns them to Team Z, Team Y and Team A, that user will be ",(0,a.jsx)(t.code,{children:"Team Admin"})," in each of those teams."]}),"\n",(0,a.jsx)(t.p,{children:"Team assignment is persistent across all data regions."}),"\n",(0,a.jsx)(t.h2,{id:"batch-assignment-of-users-to-multiple-teams",children:"Batch assignment of users to multiple teams"}),"\n",(0,a.jsxs)(t.p,{children:["At ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/team-management/users",children:"User Management view"}),", select users. Click ",(0,a.jsx)(t.code,{children:"Team assignment"})," in the Actions dropdown."]}),"\n",(0,a.jsx)("img",{src:(0,i.Ay)("img/team-mgmt/team-assignment-option.png"),alt:"Team assignment option",width:"400"}),"\n",(0,a.jsx)(t.p,{children:"You will be presented with a modal with a list of selected users and multi select dropdown to pick the teams you would like to assign the users to."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"IMPORTANT:"})," Keep in mind, this assignment overwrites the list of previously assigned teams for the selected users. Selected users will be assigned only to the teams you select in the modal. Previous assignments are discarded."]}),"\n",(0,a.jsx)(t.h2,{id:"assigning-a-single-user-to-multiple-teams",children:"Assigning a single user to multiple teams"}),"\n",(0,a.jsxs)(t.p,{children:["Additionally, ",(0,a.jsx)(t.code,{children:"Organization Admin"})," can manage teams assignments for a single user. In ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/team-management/users",children:"User Management view"}),", click on the link to a specific user. In section ",(0,a.jsx)(t.code,{children:"Roles and Teams"})," there is a dropdown to add/remove assigned teams. Click ",(0,a.jsx)(t.code,{children:"Update"})," to save the assignment."]}),"\n",(0,a.jsx)("img",{src:(0,i.Ay)("img/team-mgmt/roles-teams-assignment.png"),alt:"Roles and Teams assignment section",width:"400"})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var a=s(96540);const n={},i=a.createContext(n);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);