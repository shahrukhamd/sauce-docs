"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[85103],{34249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);n(86025),n(11470),n(19365);const a={id:"data-encryption",title:"End to End Data Encryption",sidebar_label:"Data Encryption"},s=void 0,o={id:"testfairy/sdk/security/data-encryption",title:"End to End Data Encryption",description:"End-to-End Data Encryption in TestFairy ensures that the logs and screenshots recorded from a mobile device are securely encrypted before being stored on the cloud. This encryption guarantees that only authorized team members with the private key can access and view the recorded data. To use this capability, you will need to create a public key and a private key. The public key initializes the TestFairy SDK in your app and the private key, which should not be shared with anybody, will be used by you when you log in to your TestFairy dashboard.",source:"@site/docs/testfairy/sdk/security/data-encryption.md",sourceDirName:"testfairy/sdk/security",slug:"/testfairy/sdk/security/data-encryption",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/security/data-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/security/data-encryption.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"data-encryption",title:"End to End Data Encryption",sidebar_label:"Data Encryption"},sidebar:"docs",previous:{title:"Trello",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/bug-tracking/trello"},next:{title:"Hiding Data",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/security/hiding-data"}},l={},c=[{value:"Generating Public/Private Key Pair",id:"generating-publicprivate-key-pair",level:2},{value:"Android Integration",id:"android-integration",level:2},{value:"iOS Integration",id:"ios-integration",level:2},{value:"Viewing Encrypted Sessions",id:"viewing-encrypted-sessions",level:2},{value:"Technical Details (How Does It Work?)",id:"technical-details-how-does-it-work",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"End-to-End Data Encryption in TestFairy ensures that the logs and screenshots recorded from a mobile device are securely encrypted before being stored on the cloud. This encryption guarantees that only authorized team members with the private key can access and view the recorded data. To use this capability, you will need to create a public key and a private key. The public key initializes the TestFairy SDK in your app and the private key, which should not be shared with anybody, will be used by you when you log in to your TestFairy dashboard."}),"\n",(0,r.jsx)(t.p,{children:"The encryption process involves using a randomly generated 256-bit AES key (this AES key is only used in a single session recording), which is further protected with an RSA public key."}),"\n",(0,r.jsx)(t.h2,{id:"generating-publicprivate-key-pair",children:"Generating Public/Private Key Pair"}),"\n",(0,r.jsxs)(t.p,{children:["To enable end-to-end data encryption, you need to generate a public/private key pair. The private key should be kept confidential and shared only with authorized team members. Follow the steps below to generate the key pair using the ",(0,r.jsx)(t.code,{children:"openssl"})," tool:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"openssl genrsa -out testfairy-private-key.pem 2048\nopenssl rsa -in testfairy-private-key.pem -outform DER -pubout | base64 - > testfairy-public-key.txt\n"})}),"\n",(0,r.jsxs)(t.p,{children:["It will create two files called ",(0,r.jsx)(t.code,{children:"testfairy-private-key.pem"})," and ",(0,r.jsx)(t.code,{children:"testfairy-public-key.txt"})," containing your private and public keys."]}),"\n",(0,r.jsxs)(t.p,{children:["The file ",(0,r.jsx)(t.code,{children:"testfairy-private-key.pem"})," is sensitive and should not be shared with anyone outside your team."]}),"\n",(0,r.jsxs)(t.p,{children:["The content of ",(0,r.jsx)(t.code,{children:"testfairy-public-key.txt"})," will be used to initialize the SDK. Paste this value into the first parameter of ",(0,r.jsx)(t.code,{children:"TestFairy.setPublicKey"})," method."]}),"\n",(0,r.jsx)(t.h2,{id:"android-integration",children:"Android Integration"}),"\n",(0,r.jsxs)(t.p,{children:["Enable end-to-end encryption for your Android apps by calling ",(0,r.jsx)(t.code,{children:"setPublicKey"})," before calling the ",(0,r.jsx)(t.code,{children:"begin"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'TestFairy.setPublicKey("<PUBLIC KEY>");\nTestFairy.begin("<APP TOKEN>");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"ios-integration",children:"iOS Integration"}),"\n",(0,r.jsxs)(t.p,{children:["Enable end-to-end encryption for your iOS apps by calling ",(0,r.jsx)(t.code,{children:"setPublicKey"})," before calling the ",(0,r.jsx)(t.code,{children:"begin"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'[TestFairy setPublicKey:@"<PUBLIC KEY>"];\n[TestFairy begin:@"<APP TOKEN>"];\n'})}),"\n",(0,r.jsx)(t.h2,{id:"viewing-encrypted-sessions",children:"Viewing Encrypted Sessions"}),"\n",(0,r.jsx)(t.p,{children:'Since the data is encrypted using RSA, viewing a session requires the private key. Visiting a recorded session will prompt a dialog for entry of the RSA Private Key. Paste the private key text and click "OK". Your private key is never sent to the server and is only retained within the browser session.'}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"It's crucial that you keep the private key safe.  If it is lost, encrypted sessions cannot be recovered, rendering the recorded data useless."})}),"\n",(0,r.jsx)(t.h2,{id:"technical-details-how-does-it-work",children:"Technical Details (How Does It Work?)"}),"\n",(0,r.jsx)(t.p,{children:"The end-to-end encryption process operates as follows:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"As a developer, you generate a private key and derive a public key from it."}),"\n",(0,r.jsx)(t.li,{children:"The public key is integrated into your app, allowing it to encrypt data but not decrypt it."}),"\n",(0,r.jsxs)(t.li,{children:["When a new session starts (calling ",(0,r.jsx)(t.code,{children:"TestFairy.begin"})," after ",(0,r.jsx)(t.code,{children:"TestFairy.setPublicKey"}),"), the SDK generates a random 128-bit AES key and encrypts it using the RSA public key you provided."]}),"\n",(0,r.jsx)(t.li,{children:"Each session has a unique AES key (in CBC mode) that is not shared between sessions, ensuring strong security."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The random key is encrypted by the public key by itself. It means that if a 3rd party wants to view the session, they must run 2^128 brute force combinations to find one session."})}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:["AES encryption is employed for data encryption as it is faster than RSA and not limited by the length of the ",(0,r.jsx)(t.code,{children:"cleartext"})," value."]}),"\n",(0,r.jsx)(t.li,{children:"The encrypted data includes logs and screenshots, and certain features, such as showing values entered in EditText fields or the text of a button clicked, are automatically disabled when encryption is enabled."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(34164),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=y({queryString:n,groupId:i}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),m=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);