"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[87326],{60063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(74848),i=t(28453),s=t(86025);t(11470),t(19365);const r={id:"landing-pages",title:"Landing Pages",sidebar_label:"Landing Pages"},o=void 0,l={id:"testfairy/app-distribution/landing-pages",title:"Landing Pages",description:"Landing pages provide a convenient location for testers to access apps. Each app has an automatically created landing page, which can be managed through the landing page settings page.",source:"@site/docs/testfairy/app-distribution/landing-pages.md",sourceDirName:"testfairy/app-distribution",slug:"/testfairy/app-distribution/landing-pages",permalink:"/sauce-docs/pr-preview/pr-2902/testfairy/app-distribution/landing-pages",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/app-distribution/landing-pages.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688687543e3,frontMatter:{id:"landing-pages",title:"Landing Pages",sidebar_label:"Landing Pages"},sidebar:"docs",previous:{title:"App Versioning",permalink:"/sauce-docs/pr-preview/pr-2902/testfairy/app-distribution/app-versioning"},next:{title:"Auto-Update",permalink:"/sauce-docs/pr-preview/pr-2902/testfairy/app-distribution/auto-update"}},c={},d=[{value:"Recruitment Pages",id:"recruitment-pages",level:2},{value:"Disabling a Landing Page",id:"disabling-a-landing-page",level:2},{value:"Landing Page Customization",id:"landing-page-customization",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Landing pages provide a convenient location for testers to access apps. Each app has an automatically created landing page, which can be managed through the landing page settings page."}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/landing-pages-on-off.png"),alt:"Disable landing page"}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/landing-page-fields.png"),alt:"Landing page settings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Landing page URL"})," - The URL is automatically generated for each landing page. The last token of the URL is configurable."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"App version"})," - The app version displayed on the landing page indicates which version of the app will be shown. You can choose to show the latest version, always display the auto-updated version, or freeze the landing page on a specific version."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Visibility"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Open Beta (Anyone can download) - In this mode, the landing page is visible to everyone. Anyone can access and download the app."}),"\n",(0,a.jsx)(n.li,{children:"Closed Beta (Testers required to login) - In closed beta mode, users must log in to see the landing page. This allows for a controlled testing environment."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"App Description"})," - The app description field is used to provide instructions or other information about the app. It supports Markdown formatting for enhanced presentation."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Add release notes"})," - Enabling this option automatically includes release notes on the landing page. These release notes can be managed separately (see Release Notes /testfairy/app-distribution/release-notes)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Add custom CSS"})," - When enabled, you can add custom CSS to the landing page, allowing you to customize its appearance and align it with your company or brand (see Landing Page Customization landing-page-customization)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Changes to settings will take effect once you save them. You can preview the changes by clicking ",(0,a.jsx)(n.strong,{children:"Preview landing page"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"recruitment-pages",children:"Recruitment Pages"}),"\n",(0,a.jsx)(n.p,{children:"Recruitment pages allow users to request to join your testing project."}),"\n",(0,a.jsx)(n.p,{children:'When users sign up, they will appear in your account as "Pending Approval," you will get an email prompting you to approve or reject them. If approved, they will get an email reminding them to download the app.'}),"\n",(0,a.jsxs)(n.p,{children:["For recruitment pages to work, visibility must be in ",(0,a.jsx)(n.code,{children:"Open Beta"})," mode."]}),"\n",(0,a.jsx)(n.p,{children:'Users who sign up and are approved will automatically be added to a testers\' group called "recruit".'}),"\n",(0,a.jsx)(n.p,{children:"If your app is an iOS app signed with an ad-hoc certificate, users will first get an email asking them to register their device, and only after they register will you get an email with their UDID."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Contact us to enable the option to automatically approve all users who sign up."})}),"\n",(0,a.jsx)(n.h2,{id:"disabling-a-landing-page",children:"Disabling a Landing Page"}),"\n",(0,a.jsx)(n.p,{children:"If you do not want a landing page, you can disable it on the landing page settings page for that specific app:"}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/landing-pages-on-off.png"),alt:"Disable landing page"}),"\n",(0,a.jsxs)(n.p,{children:["Disabling the page will not stop the distribution of the app since it still appears on the ",(0,a.jsx)(n.strong,{children:"testers' dashboard"})," and is still alive in the system."]}),"\n",(0,a.jsx)(n.h2,{id:"landing-page-customization",children:"Landing Page Customization"}),"\n",(0,a.jsx)(n.p,{children:"Landing pages created for app distribution can be customized to match your company or brand's look and feel."}),"\n",(0,a.jsx)(n.p,{children:"The default landing page that is automatically generated looks like this:"}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/landing-page-customization-areas.png"),alt:"Landing page"}),"\n",(0,a.jsxs)(n.p,{children:["By utilizing the ",(0,a.jsx)(n.strong,{children:"Add custom CSS"})," option in the landing page settings, you can modify the following elements:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Page title"})," - ",(0,a.jsx)(n.code,{children:".testfairy-app-name"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Release notes"})," - ",(0,a.jsx)(n.code,{children:".testfairy-description"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Feedback Instructions"})," - ",(0,a.jsx)(n.code,{children:".community-sub-title.dev"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Background"})," - ",(0,a.jsx)(n.code,{children:".testfairy-background"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here's an example of CSS code that you can use to customize your landing page:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:'\n.testfairy-background {background-image: url("https://www.testfairy.com/images/castle-cloud.jpg") !important;}\n.testfairy-app-name {color: green;}\n.testfairy-description {color: red;}\n.community-sub-title.dev {color: blue;}\n\n'})}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/landing-page-customization-css-place.png"),alt:"Css editing"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),i=t(18215),s=t(23104),r=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=p(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=h({queryString:t,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=c??m;return g({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);