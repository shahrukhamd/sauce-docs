"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[3512],{91999:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(74848),o=i(28453);i(86025),i(11470),i(19365);const r={id:"ad-hoc-ipa",title:"Exporting Ad Hoc IPA",sidebar_label:"Exporting Ad Hoc IPA"},s=void 0,a={id:"testfairy/sdk/ios/ad-hoc-ipa",title:"Exporting Ad Hoc IPA",description:"An Ad Hoc provisioning profile allows your app to be installed on designated devices without the assistance of Xcode. This distribution method is particularly useful for testing your app on specific devices before it's released to the public.",source:"@site/docs/testfairy/sdk/ios/ad-hoc-ipa.md",sourceDirName:"testfairy/sdk/ios",slug:"/testfairy/sdk/ios/ad-hoc-ipa",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/ios/ad-hoc-ipa",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/ios/ad-hoc-ipa.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"ad-hoc-ipa",title:"Exporting Ad Hoc IPA",sidebar_label:"Exporting Ad Hoc IPA"},sidebar:"docs",previous:{title:"Integrating Android SDK",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/android/integrating-android"},next:{title:"Adding UDIDs",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/ios/adding-udids"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"About Ad Hoc Provisioning Profiles",id:"about-ad-hoc-provisioning-profiles",level:2},{value:"Exporting Your App to an IPA (Ad Hoc provisioning profile)",id:"exporting-your-app-to-an-ipa-ad-hoc-provisioning-profile",level:2},{value:"Installing Your App on Test Devices Using Xcode",id:"installing-your-app-on-test-devices-using-xcode",level:2},{value:"Accessing Logs from Xcode",id:"accessing-logs-from-xcode",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"An Ad Hoc provisioning profile allows your app to be installed on designated devices without the assistance of Xcode. This distribution method is particularly useful for testing your app on specific devices before it's released to the public."}),"\n",(0,n.jsxs)(t.p,{children:["Apple allows app distribution for testing on registered devices using an ",(0,n.jsx)(t.strong,{children:"Ad-Hoc"})," or ",(0,n.jsx)(t.strong,{children:"Enterprise"})," provisioning profile. The output file you create is an iOS App file (a file with an ",(0,n.jsx)(t.code,{children:".ipa"})," filename extension) that is then used to install your app on registered devices."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Before proceeding with the steps below, ensure that you have completed the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Register Test Devices"})," Register all the test devices on which you intend to install and test your app. You can follow the instructions in the ",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/testfairy/testers/reg-ios-device/",children:"Registering Your iOS Device UDID Number"})," to complete this step."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Create Ad Hoc Provisioning Profile"})," - Make sure you have created an Ad Hoc provisioning profile on the Apple Developer Portal. This provisioning profile should specify an App ID that matches your app, a list of test devices, and a single distribution certificate."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Archive Your App"})," - Create an archive of your app using Xcode. This archive will be used to generate the Ad Hoc IPA file."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"about-ad-hoc-provisioning-profiles",children:"About Ad Hoc Provisioning Profiles"}),"\n",(0,n.jsx)(t.p,{children:"An ad hoc provisioning profile is a distribution provisioning profile that allows your app to be installed on designated devices and to use app services without the assistance of Xcode."}),"\n",(0,n.jsx)(t.p,{children:"There are 4 types of distribution provisioning profiles you can create for apps:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"iOS App Store"})," - for distributing through the apple app store."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Ad Hoc"})," - for installing on ",(0,n.jsx)(t.strong,{children:"[designated devices]"})," see ",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/testfairy/sdk/ios/adding-udids/",children:"Adding UDIDs toiOS development profile"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Enterprise"})," - for distributing an app within your organization, see ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/programs/enterprise/",children:"this documentation"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Development"})," - For distributing within members of your team, see ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/support/certificates/",children:"this documentation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Make sure you have created an Ad Hoc provisioning profile specifying an ",(0,n.jsx)(t.code,{children:"App ID"})," that matches one or more of your apps, a set of ",(0,n.jsx)(t.strong,{children:"test devices"}),", and a single ",(0,n.jsx)(t.strong,{children:"distribution certificate"})," at the developer portal. For more information, see ",(0,n.jsx)(t.a,{href:"https://idmsa.apple.com/IDMSWebAuth/login?&appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2F%2Fmembercenter%2Findex.action",children:"this documentation"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We warmly recommend any company to apply to Apple's iOS Developer Enterprise Program. See ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/programs/enterprise/"}),", and sign iOS apps for internal use with an Enterprise certificate."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Please note that this document is not a legal resource, and for the most accurate and up-to-date information, refer to Apple's official documentation and terms of service."})}),"\n",(0,n.jsx)(t.h2,{id:"exporting-your-app-to-an-ipa-ad-hoc-provisioning-profile",children:"Exporting Your App to an IPA (Ad Hoc provisioning profile)"}),"\n",(0,n.jsx)(t.p,{children:"Follow these steps to export your app for testing using the Ad Hoc provisioning profile:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open your Xcode project."}),"\n",(0,n.jsxs)(t.li,{children:["In the Xcode project editor, select either ",(0,n.jsx)(t.code,{children:"Generic iOS Device"})," or the name of your connected device from the Scheme toolbar menu. Note that you cannot create an archive of a simulator build."]}),"\n",(0,n.jsxs)(t.li,{children:["Choose ",(0,n.jsx)(t.strong,{children:"Product"})," and then ",(0,n.jsx)(t.strong,{children:"Archive"})," from the top menu. The ",(0,n.jsx)(t.strong,{children:"Archives organizer"}),' will appear, displaying the new archive.\nXcode will perform preliminary validation tests on the archive. To proceed with creating the IPA file, click the "Distribute App" button.']}),"\n",(0,n.jsxs)(t.li,{children:["A dialog will appear with export options. Choose the ",(0,n.jsx)(t.code,{children:"Save for Ad Hoc Deployment"})," option. This ensures that the app will be code signed with the distribution certificate."]}),"\n",(0,n.jsx)(t.li,{children:'In the next dialog, select a signing method and click "Next."'}),"\n",(0,n.jsx)(t.li,{children:'On the distribution options screen, customize the settings as needed and click "Next."'}),"\n",(0,n.jsx)(t.li,{children:"Review the app details, entitlements, and provisioning profile in the appearing dialog."}),"\n",(0,n.jsxs)(t.li,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Export"})," button. The Finder will display the exported files. Save the exported IPA file to your desired location."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installing-your-app-on-test-devices-using-xcode",children:"Installing Your App on Test Devices Using Xcode"}),"\n",(0,n.jsx)(t.p,{children:"After exporting the Ad Hoc IPA file, you can install it on your registered test devices using Xcode:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Connect the test device to your Mac using a USB cable."}),"\n",(0,n.jsx)(t.li,{children:"Open Xcode on your Mac."}),"\n",(0,n.jsxs)(t.li,{children:["Choose ",(0,n.jsx)(t.strong,{children:"Window"})," and then ",(0,n.jsx)(t.strong,{children:"Devices"})," from the top menu."]}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"Devices"})," window, select the connected test device from the list."]}),"\n",(0,n.jsxs)(t.li,{children:["In the Installed Apps section, click the ",(0,n.jsx)(t.strong,{children:"+"})," button to add an app."]}),"\n",(0,n.jsx)(t.li,{children:'In the dialog that appears, select the exported iOS App file (IPA) and click "Open."'}),"\n",(0,n.jsx)(t.li,{children:"Xcode will install the app on the test device, and it will appear in the list of installed apps."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"accessing-logs-from-xcode",children:"Accessing Logs from Xcode"}),"\n",(0,n.jsx)(t.p,{children:"Accessing raw logs on an iOS device requires hooking up that device via a USB cable to a computer. System logs often help a lot in debugging vague problems around app installation."}),"\n",(0,n.jsx)(t.p,{children:"The error displayed on an iOS device screen is often too generic, but the system logs explain more thoroughly the reason for the problem. To get the logs, complete the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open Xcode."}),"\n",(0,n.jsx)(t.li,{children:"Open menu Window > Devices."}),"\n",(0,n.jsx)(t.li,{children:"Select the device which you want to inspect."}),"\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.strong,{children:"View Device Logs"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"A new window will open up with up-to-date logs from the device."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var n=i(34164);const o={tabItem:"tabItem_Ymn6"};var r=i(74848);function s(e){let{children:t,hidden:i,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>A});var n=i(96540),o=i(34164),r=i(23104),s=i(56347),a=i(205),l=i(57485),c=i(31682),d=i(70679);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:o}}=e;return{value:t,label:i,attributes:n,default:o}}))}(i);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:i}=e;const o=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function g(e){const{defaultValue:t,queryString:i=!1,groupId:o}=e,r=u(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,p]=f({queryString:i,groupId:o}),[g,v]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Dv)(i);return[o,(0,n.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:o}),m=(()=>{const e=c??g;return h({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),v(e)}),[p,v,r]),tabValues:r}}var v=i(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(74848);function b(e){let{className:t,block:i,selectedValue:n,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),o=a[i].value;o!==n&&(c(t),s(o))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":i},t),children:a.map((e=>{let{value:t,label:i,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:d,...r,className:(0,o.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function j(e){let{lazy:t,children:i,selectedValue:r}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function A(e){const t=(0,v.A)();return(0,x.jsx)(y,{...e,children:p(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);