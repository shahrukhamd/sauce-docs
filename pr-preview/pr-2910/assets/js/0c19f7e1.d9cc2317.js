"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[30005],{37544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(74848),n=r(28453);r(11470),r(19365),r(86025);const o={id:"common-questions",title:"Common Questions",sidebar_label:"Common Questions",description:"Answers commons questions about security and compliance."},s=void 0,i={id:"error-reporting/security-compliance/common-questions",title:"Common Questions",description:"Answers commons questions about security and compliance.",source:"@site/docs/error-reporting/security-compliance/common-questions.md",sourceDirName:"error-reporting/security-compliance",slug:"/error-reporting/security-compliance/common-questions",permalink:"/sauce-docs/pr-preview/pr-2910/error-reporting/security-compliance/common-questions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/security-compliance/common-questions.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"common-questions",title:"Common Questions",sidebar_label:"Common Questions",description:"Answers commons questions about security and compliance."},sidebar:"backtrace",previous:{title:"Audit Logs",permalink:"/sauce-docs/pr-preview/pr-2910/error-reporting/security-compliance/audit-logs"},next:{title:"Privacy Control",permalink:"/sauce-docs/pr-preview/pr-2910/error-reporting/security-compliance/privacy-control"}},c={},l=[{value:"General Questions",id:"general-questions",level:2},{value:"What Data is Ingested into the Backtrace Application and Why?",id:"what-data-is-ingested-into-the-backtrace-application-and-why",level:3},{value:"How is Data Protected?",id:"how-is-data-protected",level:3},{value:"What is the Security Review and Approval for the Development Process Prior to Release?",id:"what-is-the-security-review-and-approval-for-the-development-process-prior-to-release",level:3},{value:"Is a Security Incident Response Plan Formalized?",id:"is-a-security-incident-response-plan-formalized",level:3},{value:"Can Data be Modified to Obscure or Remove Protected Information from Minidumps?",id:"can-data-be-modified-to-obscure-or-remove-protected-information-from-minidumps",level:3},{value:"Can SSO or LDAP be Enabled?",id:"can-sso-or-ldap-be-enabled",level:3},{value:"Is Backtrace GDPR Compliant?",id:"is-backtrace-gdpr-compliant",level:3},{value:"Is Backtrace COPPA Compliant?",id:"is-backtrace-coppa-compliant",level:3},{value:"Questions about Backtrace&#39;s Hosted Service",id:"questions-about-backtraces-hosted-service",level:2},{value:"What Platform Does the Hosted Service Run On?",id:"what-platform-does-the-hosted-service-run-on",level:3},{value:"How Long Does Backtrace Store Data For?",id:"how-long-does-backtrace-store-data-for",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"general-questions",children:"General Questions"}),"\n",(0,a.jsx)(t.h3,{id:"what-data-is-ingested-into-the-backtrace-application-and-why",children:"What Data is Ingested into the Backtrace Application and Why?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Application Debug Symbols - This is required to classify and analyze incoming crash reports & data for the purposes of grouping and rendering them useful to developers."}),"\n",(0,a.jsx)(t.li,{children:"Application Crash Data - Backtrace captures crash data, minidumps, and structured error reports, so that engineers and support personnel can query against it and build workflows from that."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"how-is-data-protected",children:"How is Data Protected?"}),"\n",(0,a.jsx)(t.p,{children:"By default data is protected by using TLS protocols to ensure data security during transmission."}),"\n",(0,a.jsx)(t.p,{children:"Backtrace also offers encryption at rest using 256-bit AES. The private key is not accessible from user-space and the password is never stored in plain-text anywhere. Only key management personnel have access to the password, which is protected with PGP. This is an Enterprise feature."}),"\n",(0,a.jsx)(t.h3,{id:"what-is-the-security-review-and-approval-for-the-development-process-prior-to-release",children:"What is the Security Review and Approval for the Development Process Prior to Release?"}),"\n",(0,a.jsx)(t.p,{children:"All changes to the Backtrace code are reviewed by several team members and are scrutinized for correctness, performance, and security. These changes then go through regression and integration testing for validation before being published."}),"\n",(0,a.jsx)(t.h3,{id:"is-a-security-incident-response-plan-formalized",children:"Is a Security Incident Response Plan Formalized?"}),"\n",(0,a.jsxs)(t.p,{children:["We are in the process of documenting our internal security incident response plan following the guidelines of ",(0,a.jsx)(t.a,{href:"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf",children:"NIST 800-61, Revision 2"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"can-data-be-modified-to-obscure-or-remove-protected-information-from-minidumps",children:"Can Data be Modified to Obscure or Remove Protected Information from Minidumps?"}),"\n",(0,a.jsx)(t.p,{children:"Backtrace provides several facilities for scrubbing data of personally identifiable information (PII). There are mechanisms for both native UNIX core dump formats as well as the minidump format used by Windows, Breakpad and Crashpad."}),"\n",(0,a.jsx)(t.p,{children:"Data scrubbers provide administrators the ability to remove sensitive data from minidump files submitted to Backtrace before they are committed to disk. Data contained in the dump such as register values, memory and crash attributes is scanned for patterns that may be indicative of personally identifiable information. Note that the data scrubbers will not remove binary data."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"pmodules"})," allow you to use ",(0,a.jsx)(t.code,{children:"ptrace"})," to develop plug-ins that perform analysis and scrubbing of core dumps client-side before they are submitted to the Backtrace servers."]}),"\n",(0,a.jsx)(t.p,{children:"Administrators can also configure dump and metadata retention policies that will allow data to be removed after a defined period of time."}),"\n",(0,a.jsx)(t.p,{children:"Data scrubbing, pmodules, and configurable retention policies are Enterprise level features."}),"\n",(0,a.jsx)(t.h3,{id:"can-sso-or-ldap-be-enabled",children:"Can SSO or LDAP be Enabled?"}),"\n",(0,a.jsx)(t.p,{children:"Both SSO and LDAP integration are available as Enterprise features."}),"\n",(0,a.jsx)(t.h3,{id:"is-backtrace-gdpr-compliant",children:"Is Backtrace GDPR Compliant?"}),"\n",(0,a.jsxs)(t.p,{children:["Per ",(0,a.jsx)(t.a,{href:"https://gdpr-info.eu/art-28-gdpr/",children:"Article 28 of the GDPR"}),", Backtrace is a Data Processor. That is, a third party company receiving data from controllers of data, which are on the front lines collecting, managing and housing data."]}),"\n",(0,a.jsx)(t.p,{children:"As a Data Processor, Backtrace ensures end user data collected during the crash reporting process is protected, managed properly and destroyed appropriately throughout the chain of development. Backtrace customers have a host of controls to help ensure compliance with GDPR and corporate data protection policies."}),"\n",(0,a.jsxs)(t.p,{children:["Sauce Labs has provided a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/eea",children:"Supplemental EEA+ Privacy Notice"})," as part of the ",(0,a.jsx)(t.a,{href:"https://backtrace.io/privacy-policy",children:"Privacy Policy"})," and as an amendment of the ",(0,a.jsx)(t.a,{href:"https://backtrace.io/software-license-agreement",children:"Terms of Service"}),". The EEA+ Privacy Notice defines the agreement between Backtrace as the Data Processor and our users or customers as the Data Controller with regard to the processing of personal data."]}),"\n",(0,a.jsx)(t.h3,{id:"is-backtrace-coppa-compliant",children:"Is Backtrace COPPA Compliant?"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://www.ecfr.gov/current/title-16/part-312",children:"Children\u2019s Online Privacy Protection Act (COPPA)"})," is a Federal Trade Commission (FTC) regulation that imposes certain requirements on operators of online services directed to children under 13 years of age."]}),"\n",(0,a.jsx)(t.p,{children:"By default, the Backtrace system does not collect personal information such as names, address, SSN, telephone number, or other contact details. The system may collect data used to identify a specific device that is erroring, however, the data can be scrubbed as needed."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["As a crash and error reporting service, Backtrace provides support for the internal operations of your online service, which allows for the collection of such type of identifier, as per ",(0,a.jsx)(t.a,{href:"https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312#p-312.5(c)(7)",children:"16 CFR 312.5(c)(7)"}),"."]})}),"\n",(0,a.jsxs)(t.p,{children:["Backtrace provides privacy controls to ensure that you have full control over what data is collected with the crash or error reports, and to ensure that your use of Backtrace is compliant with the COPPA rule. For more information, see ",(0,a.jsx)(t.a,{href:"/error-reporting/security-compliance/privacy-control/",children:"Privacy Control"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you have questions regarding COPPA, see the ",(0,a.jsx)(t.a,{href:"https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions",children:"Complying with COPPA: Frequently Asked Questions"}),", and consult your legal advisor."]}),"\n",(0,a.jsx)(t.h2,{id:"questions-about-backtraces-hosted-service",children:"Questions about Backtrace's Hosted Service"}),"\n",(0,a.jsx)(t.h3,{id:"what-platform-does-the-hosted-service-run-on",children:"What Platform Does the Hosted Service Run On?"}),"\n",(0,a.jsx)(t.p,{children:"Hosted services run on Amazon Web Services. The web-based user interface has static assets such as Javascript files and images hosted on the Fastly CDN."}),"\n",(0,a.jsx)(t.h3,{id:"how-long-does-backtrace-store-data-for",children:"How Long Does Backtrace Store Data For?"}),"\n",(0,a.jsx)(t.p,{children:"Unless otherwise engaged in a non-standard contract Backtrace will hold crash data (e.g. minidumps) for 90 days and metadata for 365 days."})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>k});var a=r(96540),n=r(18215),o=r(23104),s=r(56347),i=r(205),c=r(57485),l=r(31682),d=r(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=l??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==a&&(l(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,n.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(x,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var a=r(96540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);