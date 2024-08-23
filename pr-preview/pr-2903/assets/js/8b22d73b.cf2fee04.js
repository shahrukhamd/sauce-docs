"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[63065],{23136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(74848),r=n(28453),i=n(86025);const o={id:"io-components",title:"I/O Components",sidebar_label:"Overview",keywords:["api-testing","io-components","delete","get","post","put","patch"]},d=void 0,a={id:"api-testing/on-prem/io-components",title:"I/O Components",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/io-components.md",sourceDirName:"api-testing/on-prem",slug:"/api-testing/on-prem/io-components",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/io-components",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/io-components.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712352404e3,frontMatter:{id:"io-components",title:"I/O Components",sidebar_label:"Overview",keywords:["api-testing","io-components","delete","get","post","put","patch"]},sidebar:"apif",previous:{title:"Writing Tests in Code",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/how-to/writing-tests-in-code"},next:{title:"Databases \u2013 JDBC (direct)",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/io-components/jdbc"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Config",id:"config",level:2},{value:"Header",id:"header",level:2},{value:"Post Param/Put Param/Patch Param/Delete Param",id:"post-paramput-parampatch-paramdelete-param",level:2},{value:"Post Body/Put Body/Patch Body/Delete Body",id:"post-bodyput-bodypatch-bodydelete-body",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n","\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The I/O operations you can do are: ",(0,s.jsx)(t.code,{children:"GET"}),", ",(0,s.jsx)(t.code,{children:"POST"}),", ",(0,s.jsx)(t.code,{children:"PUT"}),", ",(0,s.jsx)(t.code,{children:"PATCH"}),", and ",(0,s.jsx)(t.code,{children:"DELETE"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"From the composer, choose 'Add Component' and then choose the type of operation you want to do."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/compsAvail.jpg"),alt:"compsAvail.jpg"}),"\n",(0,s.jsx)(t.p,{children:"Once done, you will have a form to fill up:"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/Request-1024x281.jpg"),alt:"Request-1024x281.jpg"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type/Value"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Url"}),(0,s.jsx)(t.td,{children:"Url"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Variable"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Expect"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mode"}),(0,s.jsx)(t.td,{children:"'json','xml', 'html','text'"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Params"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Url:"})," the url of the resource you want to test. It could be the full url of the resource or a string with variables using the $. (i.e. '",(0,s.jsx)(t.a,{href:"https://domain/resourcename",children:"https://domain/resourcename"}),"' or 'https://${domain}${endpoint}')"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Variable"}),": the name of the variable that contains the response. It will be the name you will refer during the test."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Expect"}),": it is an optional field and needs to be filled only if the expected behavior differs from a positive response (i.e. 404,500 vs. 200,201 etc.). ",(0,s.jsx)(t.em,{children:"This is useful when looking to test negative responses and validate error messages."})]}),"\n",(0,s.jsxs)(t.p,{children:["Possible values are ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"<statusCode>|VALID"})})," or ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"<statusCode>|INVALID"})}),". ",(0,s.jsx)(t.code,{children:"VALID"}),' means the payload type is the one selected in the "mode" field (JSON,XML), while ',(0,s.jsx)(t.code,{children:"INVALID"})," means the opposite. Some examples:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"404|VALID"})," : 404 is expected with valid payload"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"422|VALID"})," : 422 is expected with valid payload"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"500|INVALID"})," : 500 is expected with invalid payload"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Multiple status codes can be expected by adding them all (i.e. ",(0,s.jsx)(t.code,{children:"200|302|400|500|VALID"}),")"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mode"}),": it's the type of the response you want to test."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Params"}),": the optional list of params you want to add to the query string. To do so, tap on 'Add parameter'. The params can either be a String value (in that case, the value will always be the same for all the requests; to do so, just put the value in the related field and choose 'String value' from the drop down menu) or a Variable (in that case the value will be taken dynamically and could changed from time to time; to do so, put the name of the variable inside the field and choose 'Variable' from the drop down menu)."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/requestWithParams-1024x485.jpg"),alt:"requestWithParams-1024x485.jpg"}),"\n",(0,s.jsxs)(t.p,{children:["Using the above example: let's say that ",(0,s.jsx)(t.em,{children:"varName"})," is defined as a boolean value so it can be either 'true' or 'false', in that case, there will be two requests; the first one will be a ",(0,s.jsx)(t.code,{children:"GET"})," request to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",metastring:"request",children:"https://mydomain/endpoint?firstParam=paramValue&secondParam=true\n"})}),"\n",(0,s.jsxs)(t.p,{children:["parsing it as ",(0,s.jsx)(t.code,{children:"json"})," and saving it in the ",(0,s.jsx)(t.code,{children:"payload"})," variable; the second one, will be a ",(0,s.jsx)(t.code,{children:"GET"})," request to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",metastring:"request",children:"https://mydomain/endpoint?firstParam=paramValue&secondParam=false\n"})}),"\n",(0,s.jsx)(t.p,{children:"parsing it as 'json' and saving it in the 'payload' variable."}),"\n",(0,s.jsx)(t.p,{children:"When all things are set up, you can confirm it by tapping on the 'tick' icon in the top right corner. After that, if you need to add headers, params or a body to the request you can do it by selecting the request and then tapping on the 'Add component': all the available components for each operation will be visible."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/subComps.jpg"),alt:"subComps.jpg"}),"\n",(0,s.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/config-1024x152.jpg"),alt:"config-1024x152.jpg"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type/Value"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Value"}),(0,s.jsx)(t.td,{children:"String or Variable"}),(0,s.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/headerComponent-1024x150.jpg"),alt:"headerComponent-1024x150.jpg"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type/Value"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Value"}),(0,s.jsx)(t.td,{children:"String or Variable"}),(0,s.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"post-paramput-parampatch-paramdelete-param",children:"Post Param/Put Param/Patch Param/Delete Param"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/PostPutPatchParam-1024x140.jpg"),alt:"PostPutPatchParam-1024x140.jpg"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type/Value"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Value"}),(0,s.jsx)(t.td,{children:"String or Variable"}),(0,s.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"post-bodyput-bodypatch-bodydelete-body",children:"Post Body/Put Body/Patch Body/Delete Body"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/11/PostPutPatchBody-1024x205.jpg"),alt:"PostPutPatchBody-1024x205.jpg"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type/Value"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Content-Type"}),(0,s.jsx)(t.td,{children:"'application/json', 'text/plain', 'application/x-www-form-urlencoded','text/xml'"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Content"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);