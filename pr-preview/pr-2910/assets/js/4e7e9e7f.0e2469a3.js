"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42315],{71604:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(74848),s=i(28453),r=i(86025);i(11470),i(19365);const a={id:"hiding-webview",title:"Hiding Webview Elements from Video",sidebar_label:"Hiding Webview Elements"},o=void 0,l={id:"testfairy/sdk/ios/hiding-webview",title:"Hiding Webview Elements from Video",description:"TestFairy provides developers with the capability to conceal specific HTML elements within recorded videos displayed in UIWebView or WKWebView components within their application's user interface. This feature allows developers to enhance security and privacy by excluding sensitive information from video recordings.",source:"@site/docs/testfairy/sdk/ios/hiding-webview.md",sourceDirName:"testfairy/sdk/ios",slug:"/testfairy/sdk/ios/hiding-webview",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/ios/hiding-webview",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/ios/hiding-webview.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"hiding-webview",title:"Hiding Webview Elements from Video",sidebar_label:"Hiding Webview Elements"},sidebar:"docs",previous:{title:"Uploading dSymps",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/ios/dsyms"},next:{title:"Integrating iOS SDK",permalink:"/sauce-docs/pr-preview/pr-2910/testfairy/sdk/ios/integrating-ios"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}];function u(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["TestFairy provides developers with the capability to conceal specific HTML elements within recorded videos displayed in ",(0,n.jsx)(t.code,{children:"UIWebView"})," or ",(0,n.jsx)(t.code,{children:"WKWebView"})," components within their application's user interface. This feature allows developers to enhance security and privacy by excluding sensitive information from video recordings."]}),"\n",(0,n.jsxs)(t.p,{children:["In certain scenarios, developers might need to prevent some information, such as credit card details or other sensitive content, from being displayed in recorded video sessions. TestFairy's ",(0,n.jsx)(t.strong,{children:"Hide Webview Elements from Video"})," feature addresses this concern by allowing developers to selectively hide designated HTML elements from the video playback."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsxs)(t.p,{children:["The process of hiding a specific element from the recorded video involves utilizing the static instance method ",(0,n.jsx)(t.code,{children:"hideWebViewElements"})," within the ",(0,n.jsx)(t.code,{children:"TestFairy"})," class. This method requires a valid CSS selector as its parameter to target the desired HTML element for concealment:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:'[TestFairy hideWebViewElements:@"body"];\n[TestFairy hideWebViewElements:@"div#username,div#password"];\n[TestFairy hideWebViewElements:@".col-12,h1 .header"];\n'})}),"\n",(0,n.jsxs)(t.p,{children:["TestFairy finds any ",(0,n.jsx)(t.code,{children:"UIWebView"})," or ",(0,n.jsx)(t.code,{children:"WKWebView"})," in the view hierarchy and hides a given HTML element based on a valid CSS selector."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Suppose you have a demo video showcasing your application's user interface. On the left side of the screen is the regular app interface, while the right side displays a screenshot with the HTML elements hidden:"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("/img/testfairy/sdk/iphone-with-fields.png"),alt:"iphone no hidden HTML elements",width:"400"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("/img/testfairy/sdk/iphone-no-fields.png"),alt:"iphone hidden HTML elements",width:"400"}),"\n",(0,n.jsx)(t.p,{children:"This functionality provides a clear visual representation of how TestFairy's feature conceals elements within the video."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"TestFairy ensures that elements are hidden from screenshots before they are uploaded, thereby preserving the security and privacy of sensitive information."}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"hideWebViewElements"})," method supports the inclusion of multiple comma-separated CSS selectors. This capability allows you to hide multiple HTML elements simultaneously."]}),"\n",(0,n.jsxs)(t.li,{children:["You can extend the list of hidden elements at any time by making additional calls to the ",(0,n.jsx)(t.code,{children:"hideWebViewElements"})," method."]}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>a});i(96540);var n=i(18215);const s={tabItem:"tabItem_Ymn6"};var r=i(74848);function a(e){let{children:t,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>T});var n=i(96540),s=i(18215),r=i(23104),a=i(56347),o=i(205),l=i(57485),d=i(31682),c=i(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function p(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const s=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,r=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[d,u]=m({queryString:i,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,c.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),v=(()=>{const e=d??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=i(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=i(74848);function w(e){let{className:t,block:i,selectedValue:n,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const t=e.currentTarget,i=l.indexOf(t),s=o[i].value;s!==n&&(d(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function g(e){let{lazy:t,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,y.jsx)(w,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function T(e){const t=(0,b.A)();return(0,y.jsx)(x,{...e,children:u(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);