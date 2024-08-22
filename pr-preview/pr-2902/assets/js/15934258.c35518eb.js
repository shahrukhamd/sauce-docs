"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42572],{8313:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var n=o(74848),r=o(28453);const t={id:"on-premises-backing-up-your-data",title:"Backing Up your Data (Self-Hosted)",sidebar_label:"Backing Up your Data",keywords:["api","api-fortress","backup","selfhosted","onpremises"]},i=void 0,a={id:"api-testing/on-prem/self-hosted/on-premises-backing-up-your-data",title:"Backing Up your Data (Self-Hosted)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"on-premises-backing-up-your-data",title:"Backing Up your Data (Self-Hosted)",sidebar_label:"Backing Up your Data",keywords:["api","api-fortress","backup","selfhosted","onpremises"]},sidebar:"apif",previous:{title:"Updating an Instance",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/self-hosted/updating-an-on-premises-instance"},next:{title:"Deployment \u2013 Docker",permalink:"/sauce-docs/pr-preview/pr-2902/api-testing/on-prem/self-hosted/deployment-docker"}},c={},l=[{value:"Backup",id:"backup",level:2},{value:"Backup restore",id:"backup-restore",level:2}];function p(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Head:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"When running a self-hosted/on-premises installation, you will certainly want to run periodic backups of all your data."}),"\n",(0,n.jsxs)(s.p,{children:["In this article, we will provide you the scripts to perform a data dump of API Fortress. You will then need to wire them up in your scheduled operations system, such as ",(0,n.jsx)(s.code,{children:"cron"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["We will assume you have a ",(0,n.jsx)(s.strong,{children:"running API Fortress installation"}),", ability to ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"sudo"})})," to root privileges and a general idea of how Docker works."]}),"\n",(0,n.jsx)(s.h2,{id:"backup",children:"Backup"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["In the host server, create a directory that will host your backup. In this example, it's ",(0,n.jsx)(s.code,{children:"/var/local/backups"})," but it can be anything. Make sure the directory has read/write permissions docker can use,"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Run (change the directory according to your needs):"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo docker run --rm --net apifortress --link core_apifortress-mongo_1:mongo.apifortress -v /var/local/backups:/backup mongo:3.0.14 bash -c 'mongodump --out /backup --host mongo.apifortress'\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Run (change the directory according to your needs):"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo docker run --rm --net apifortress --link core_apifortress-postgres_1:postgres.apifortress -v /var/local/backups:/backup postgres:9.5.5 bash -c 'pg_dump --dbname postgresql://apipulse:jk5112@postgres.apifortress:5432/apipulse > /backup/postgres.sql'\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["Access the ",(0,n.jsx)(s.code,{children:"/var/local/backups"}),' directory. You will find both an "apipulse" directory and a "postgres.sql" file. This is all your backup. You can now zip it and copy it wherever your backup procedures require. At this point we suggest you to clear the directory used for backup to have it empty for the next backup iteration.']}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"backup-restore",children:"Backup restore"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["in the ",(0,n.jsx)(s.code,{children:"core/"})," directory, stop all services by issuing:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo docker-compose stop\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"Remove all data files from your persistent volume on the host machine."}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"Extreme Caution",type:"caution",children:(0,n.jsx)(s.p,{children:"This will erase all your current data. Make sure that the backup you are going to restore is available. If unsure, just MOVE the current data to another location."})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Activate MongoDB and PostgreSQL by issuing:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo docker-compose up -d apifortress-postgres\nsudo docker-compose up -d apifortress-mongo\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["We will assume your backup is located in ",(0,n.jsx)(s.code,{children:"/var/local/backups"}),". Run the following commands:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo docker run --rm --net apifortress --link core_apifortress-mongo_1:mongo.apifortress -v /var/local/backups:/backup mongo:3.0.14 bash -c 'mongorestore /backup --host mongo.apifortress'\n\nsudo docker run --rm --net apifortress --link core_apifortress-postgres_1:postgres.apifortress -v /var/local/backups:/backup postgres:9.5.5 bash -c 'psql -h postgres.apifortress --dbname postgresql://apipulse:jk5112@postgres.apifortress:5432/apipulse  < /backup/postgres.sql'\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"5",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Verify that files are now present in the persistent volume location of your host machine,"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["You can now start the platform by running the ",(0,n.jsx)(s.code,{children:"./start_all.sh"})," script."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>a});var n=o(96540);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);