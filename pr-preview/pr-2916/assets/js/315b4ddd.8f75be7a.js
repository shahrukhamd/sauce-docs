"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[25958],{15134:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(74848),i=n(28453);const r={id:"assert-contains",title:"Assert Contains",sidebar_label:"Assert Contains",description:"This assertion is used to check if the element described by the expression contains a specific substring."},o=void 0,d={id:"api-testing/on-prem/assertion-components/assert-contains",title:"Assert Contains",description:"This assertion is used to check if the element described by the expression contains a specific substring.",source:"@site/docs/api-testing/on-prem/assertion-components/assert-contains.md",sourceDirName:"api-testing/on-prem/assertion-components",slug:"/api-testing/on-prem/assertion-components/assert-contains",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/assertion-components/assert-contains",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/assertion-components/assert-contains.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"assert-contains",title:"Assert Contains",sidebar_label:"Assert Contains",description:"This assertion is used to check if the element described by the expression contains a specific substring."},sidebar:"apif",previous:{title:"Assert Compares",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/assertion-components/assert-compares"},next:{title:"Assert Equals",permalink:"/sauce-docs/pr-preview/pr-2916/api-testing/on-prem/assertion-components/assert-equals"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Code View Examples",id:"code-view-examples",level:2}];function l(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["This assertion is used to check if the element described by the expression contains a specific substring. For example, to test the word ",(0,t.jsx)(s.em,{children:"Uber"})," is in Uber's product names (",(0,t.jsx)(s.em,{children:"UberX, UberBlack, UberPool"}),")."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Name"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Type/Value"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Required"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Expression"}),(0,t.jsx)(s.td,{children:"Expression"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Value"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Mode"}),(0,t.jsx)(s.td,{children:"'all' or 'one'"}),(0,t.jsx)(s.td,{children:"No"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Level"}),(0,t.jsx)(s.td,{children:"'error' or 'warning'"}),(0,t.jsx)(s.td,{children:"No"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifier"}),(0,t.jsx)(s.td,{children:"'not'"}),(0,t.jsx)(s.td,{children:"No"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Execute if item exists"}),(0,t.jsx)(s.td,{children:"'true' or 'false'"}),(0,t.jsx)(s.td,{children:"No"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Stop test if fails"}),(0,t.jsx)(s.td,{children:"'true' or 'false'"}),(0,t.jsx)(s.td,{children:"No"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Comment"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Expression"}),": The path to the element we want to operate on (e.g., ",(0,t.jsx)(s.code,{children:"payload.ProductID"}),"). See ",(0,t.jsx)(s.a,{href:"/api-testing/on-prem/reference/expression/",children:"Expression"})," for more details."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Value"}),": The value we want to compare the expression to."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Mode"}),": Specify if all the same elements in the payload should match the assertion (\u2018all\u2019) or if only one element (\u2018one\u2019) is enough."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Level"}),": Specifies, when the assertion fails, whether it should be considered an ",(0,t.jsx)(s.strong,{children:"error"})," or just a ",(0,t.jsx)(s.strong,{children:"warning"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Modifier"}),": The assertion is considered verified if it does not pass."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Execute if item exists"}),": The assertion is evaluated only if the element exists. This is useful when the element does not always exist."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Stop test if fails"}),": The test will be immediately stopped if the assertion fails."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Comment"}),": Add comment messages in the form of a string data type."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.strong,{children:"warning"})," will not trigger alerts (such as email or text messages)."]})}),"\n",(0,t.jsx)(s.h2,{id:"code-view-examples",children:"Code View Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<assert-contains expression="\u201ddata.url\u201d" value="\u201ddomain.com\u201d" />\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<assert-contains expression="\u201ddata.id\u201d" value="\u201d${id}\u201d" />\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);