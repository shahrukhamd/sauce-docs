"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15243],{58889:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=i(74848),c=i(28453);const t={id:"push",title:"saucectl docker push",sidebar_label:"push"},a=void 0,l={id:"dev/cli/saucectl/docker/push",title:"saucectl docker push",description:"Push a Docker image to the Sauce Labs Container Registry.",source:"@site/docs/dev/cli/saucectl/docker/push.md",sourceDirName:"dev/cli/saucectl/docker",slug:"/dev/cli/saucectl/docker/push",permalink:"/sauce-docs/pr-preview/pr-2903/dev/cli/saucectl/docker/push",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/docker/push.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:170845198e4,frontMatter:{id:"push",title:"saucectl docker push",sidebar_label:"push"},sidebar:"dev",previous:{title:"list",permalink:"/sauce-docs/pr-preview/pr-2903/dev/cli/saucectl/configure/list"},next:{title:"artifacts download",permalink:"/sauce-docs/pr-preview/pr-2903/dev/cli/saucectl/imagerunner/artifacts-download"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--timeout</span>',id:"--timeout",level:3},{value:'<span class="cli">--quiet</span>',id:"--quiet",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Push a Docker image to the Sauce Labs Container Registry."}),"\n",(0,n.jsxs)(s.p,{children:["Explore ",(0,n.jsx)(s.a,{href:"/sauce-docs/pr-preview/pr-2903/orchestrate/saucelabs-private-registry",children:"additional details"})," about the Sauce Labs Container Registry."]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ saucectl docker push image_name [flags]\n"})}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.p,{children:"Please make sure the Docker daemon is running when triggering this CLI."}),(0,n.jsx)(s.p,{children:"In order to join the Sauce Labs Container Registry, please contact SauceLabs customer support."})]}),"\n",(0,n.jsx)(s.h2,{id:"available-options",children:"Available Options"}),"\n",(0,n.jsxs)("table",{id:"table-cli",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{width:"30%",children:"Flag"}),(0,n.jsx)("th",{width:"10%",children:"Shorthand"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:(0,n.jsx)("a",{href:"#--timeout",children:"--timeout"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Configure the timeout duration for docker push. Default: 5 minutes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:(0,n.jsx)("a",{href:"#--quiet",children:"--quiet"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Run silently, suppressing output messages."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:(0,n.jsx)("a",{href:"#--region",children:"--region"})})}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"t-cli",children:"-r"})}),(0,n.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,n.jsx)("code",{children:"us-west-1"})," (default) and ",(0,n.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,n.jsx)(s.h3,{id:"--timeout",children:(0,n.jsx)("span",{className:"cli",children:"--timeout"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | DURATION |"})}),"Configure the timeout duration for docker push.",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"saucectl docker push my_image_name:tag --timeout 10m\n"})})]}),"\n",(0,n.jsx)(s.h3,{id:"--quiet",children:(0,n.jsx)("span",{className:"cli",children:"--quiet"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"Run silently, suppressing output messages.",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"saucectl docker push my_image_name:tag --quiet\n"})})]}),"\n",(0,n.jsx)(s.h3,{id:"--region",children:(0,n.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs authentication region. Options are ",(0,n.jsx)(s.code,{children:"us-west-1"})," (default) and ",(0,n.jsx)(s.code,{children:"eu-central-1"}),".",(0,n.jsx)(s.strong,{children:"Shorthand:"})," ",(0,n.jsx)(s.code,{children:"-r <region>"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"saucectl docker push my_image_name:tag --region us-west-1\n"})})]})]})}function u(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>l});var n=i(96540);const c={},t=n.createContext(c);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);