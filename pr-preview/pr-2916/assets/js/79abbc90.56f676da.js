"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[81920],{37010:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=i(74848),s=i(28453),a=i(86025);i(11470),i(19365);const o={id:"app-files",title:"Creating Simulator .app Files for Appium and XCUITest",sidebar_label:"iOS Simulator .app Files"},r=void 0,l={id:"mobile-apps/automated-testing/app-files",title:"Creating Simulator .app Files for Appium and XCUITest",description:"Welcome to the documentation on creating Simulator .app files for Appium and XCUITest using Sauce Labs. This step-by-step documentation will walk you through the process of building, zipping, and uploading your application for testing on Sauce Labs Simulators.",source:"@site/docs/mobile-apps/automated-testing/app-files.md",sourceDirName:"mobile-apps/automated-testing",slug:"/mobile-apps/automated-testing/app-files",permalink:"/sauce-docs/pr-preview/pr-2916/mobile-apps/automated-testing/app-files",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/app-files.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"app-files",title:"Creating Simulator .app Files for Appium and XCUITest",sidebar_label:"iOS Simulator .app Files"},sidebar:"docs",previous:{title:"iOS Real Device .ipa Files",permalink:"/sauce-docs/pr-preview/pr-2916/mobile-apps/automated-testing/ipa-files"},next:{title:"MS App Center Alternative",permalink:"/sauce-docs/pr-preview/pr-2916/mobile-apps/ms-app-center"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Building apps with xcodebuild",id:"building-apps-with-xcodebuild",level:2},{value:"Navigating to the project directory",id:"navigating-to-the-project-directory",level:3},{value:"Building the app(s) for testing",id:"building-the-apps-for-testing",level:3},{value:"Breaking down the build commands",id:"breaking-down-the-build-commands",level:3},{value:"Zipping the App(s)",id:"zipping-the-apps",level:2},{value:"Navigating to the directory containing the built apps",id:"navigating-to-the-directory-containing-the-built-apps",level:3},{value:"Zipping the Apps",id:"zipping-the-apps-1",level:3},{value:"Uploading the App(s) to Sauce Storage",id:"uploading-the-apps-to-sauce-storage",level:2},{value:"Appium",id:"appium",level:3},{value:"XCUITest",id:"xcuitest",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Welcome to the documentation on creating Simulator .app files for Appium and XCUITest using Sauce Labs. This step-by-step documentation will walk you through the process of building, zipping, and uploading your application for testing on Sauce Labs Simulators."}),"\n",(0,n.jsxs)(t.admonition,{title:"Important",type:"caution",children:[(0,n.jsxs)(t.p,{children:["At the moment Sauce Labs Simulators only support apps that have been built with the ",(0,n.jsx)(t.code,{children:"x86_64"})," -architecture for Intel-based Macs. ",(0,n.jsx)(t.code,{children:"arm64"}),"-based applications, built for Apple Silicon Macs, are not yet supported and will result in the following error:"]}),(0,n.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/ios-simulator-arm-error.jpg"),alt:"iOS Simulators ARM64 error",width:"500"})]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Xcode:"})," You need to have Xcode installed, which is the IDE for developing iOS apps."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Command Line Tools:"})," You need to have the Xcode command line tools installed, which can be done by executing the command ",(0,n.jsx)(t.code,{children:"xcode-select --install"})," in the Terminal."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"App Source Code:"})," The source code of the application(s), which includes a project or workspace and a scheme"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"macOS:"})," Since Xcode is only available for macOS, you will need a Mac."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"building-apps-with-xcodebuild",children:"Building apps with xcodebuild"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"xcodebuild"})," is the command-line tool built into Xcode used for building apps. You can see its detailed documentation by running ",(0,n.jsx)(t.code,{children:"xcodebuild --help"})," or ",(0,n.jsx)(t.code,{children:"man xcodebuild"})," in the terminal."]}),"\n",(0,n.jsx)(t.p,{children:"The following steps can also be executed in a build pipeline, but for explanation and replication purposes, we use a terminal."}),"\n",(0,n.jsx)(t.h3,{id:"navigating-to-the-project-directory",children:"Navigating to the project directory"}),"\n",(0,n.jsx)(t.p,{children:"Open a terminal and navigate to the directory containing the Xcode workspace using the cd command."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd /path/to/your/project\n"})}),"\n",(0,n.jsx)(t.h3,{id:"building-the-apps-for-testing",children:"Building the app(s) for testing"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Build for Appium"})}),"\n",(0,n.jsxs)(t.p,{children:["Appium only needs the test app to be built, so you can create a new build using the ",(0,n.jsx)(t.code,{children:"build"})," command. The following command cleans and builds the project in one step."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"xcodebuild \\\n  ARCHS=x86_64 \\\n  clean build \\\n  -project testApp.xcodeproj \\\n  -scheme testApp \\\n  -derivedDataPath './customFolder' \\\n  -sdk iphonesimulator \\\n  -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=14.5' \\\n  -configuration Release \\\n  CODE_SIGN_IDENTITY=\"\" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Build for Appium workspace based projects"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"xcodebuild \\\n  ARCHS=x86_64 \\\n  clean build \\\n  -workspace testApp.xcworkspace \\\n  -scheme testApp \\\n  -derivedDataPath './customFolder' \\\n  -sdk iphonesimulator \\\n  -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=14.5' \\\n  -configuration Release \\\n  CODE_SIGN_IDENTITY=\"\" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Build for XCUITest"})}),"\n",(0,n.jsx)(t.p,{children:"XCUITest for Simulators is only supported for iOS 15 and up. It needs two apps, which are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The App that needs to be tested (testApp)"}),"\n",(0,n.jsx)(t.li,{children:"The App that holds the tests (testRunner)"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can create a new build using the ",(0,n.jsx)(t.code,{children:"build-for-testing"})," command. The following command cleans and builds the project in one step."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"xcodebuild \\\n  clean build-for-testing \\\n  -project testApp.xcodeproj \\\n  -scheme testApp \\\n  -derivedDataPath './customFolder' \\\n  -sdk iphonesimulator \\\n  -arch x86_64 \\\n  -configuration Debug \\\n  CODE_SIGN_IDENTITY=\"\" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Build for XCUITest workspace based projects"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"xcodebuild \\\n  clean build-for-testing \\\n  -workspace testApp.xcworkspace \\\n  -scheme testApp \\\n  -derivedDataPath './customFolder' \\\n  -sdk iphonesimulator \\\n  -arch x86_64 \\\n  -configuration Debug \\\n  CODE_SIGN_IDENTITY=\"\" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO\n"})}),"\n",(0,n.jsx)(t.h3,{id:"breaking-down-the-build-commands",children:"Breaking down the build commands"}),"\n",(0,n.jsx)(t.p,{children:"Here is a breakdown of the command arguments:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"clean build"})}),": This cleans any previous build files and then builds the project and is mostly used for Appium."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"clean build-for-testing"})}),": This cleans any previous build files and then builds the project to prepare it for testing and is mostly used for XCUItest."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"ARCHS=x86_64"})}),": This specifies the architecture to build for. Multiple values are possible but it needs to be ",(0,n.jsx)(t.code,{children:"x86_64"})," for the Sauce Labs Simulator cloud."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-project"})}),": This specifies the Xcode project file to use. Rename ",(0,n.jsx)(t.code,{children:"testApp.xcodeproj"})," with the name of your project. This is optional because if it\u2019s not provided it will automatically choose the first ",(0,n.jsx)(t.code,{children:"xcodeproj"}),"-file"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-workspace"})}),": This specifies the Xcode workspace file to use. Rename ",(0,n.jsx)(t.code,{children:"testApp.xcworkspace"})," with the name of your workspace."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-scheme"})}),": This specifies the scheme to build. Rename ",(0,n.jsx)(t.code,{children:"testApp"})," with the name of your scheme"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-derivedDataPath \u2018./customFolder\u2019"})}),": This option allows you to specify a custom location for Derived Data, which is where Xcode places all build-related files. It can be useful for separating build artifacts between different builds or for easier cleanup. Replace ",(0,n.jsx)(t.code,{children:"./customFolder"})," with the folder name you want to use."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-sdk iphonesimulator"})}),": This specifies that the build should target the iOS simulator, not an actual device."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=14.5'"})}),": By providing these details, you can ensure that ",(0,n.jsx)(t.code,{children:"xcodebuild"})," knows precisely for which simulator to build. Here is a breakdown of the command arguments:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"platform=iOS Simulator"})}),": This specifies that you're targeting the iOS Simulator platform."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name=iPhone 11 Pro Max"})}),': This specifies the exact type of simulator or device for consistency. This is important especially if you have multiple versions of the "iPhone 11 Pro Max" simulator installed.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"OS=14.5"})}),': This specifies the OS version of the simulator you\'re targeting. This is important especially if you have multiple versions of the "iPhone 11 Pro Max" simulator installed.']}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-arch"})}),": This specifies the architecture to build for. Multiple values are possible but it needs to be ",(0,n.jsx)(t.code,{children:"x86_64"})," for the Sauce Labs Simulator cloud."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-configuration Release|Debug"})}),": This sets the build configuration to ",(0,n.jsx)(t.code,{children:"Release"})," or ",(0,n.jsx)(t.code,{children:"Debug"}),". ",(0,n.jsx)(t.code,{children:"Debug"})," includes symbols for debugging and is usually used during development and testing with XCUITest."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:'CODE_SIGN_IDENTITY="", CODE_SIGNING_REQUIRED=NO, CODE_SIGNING_ALLOWED=NO'})}),": These disable code signing, which is typically not required when building for the simulator."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Do not specify ",(0,n.jsx)(t.code,{children:"-arch"})," explicitly with ",(0,n.jsx)(t.code,{children:"xcodebuild"})," when a ",(0,n.jsx)(t.code,{children:"-destination"})," is used, as this might cause conflicts. Use ",(0,n.jsx)(t.code,{children:"ARCHS"})," instead."]})}),"\n",(0,n.jsx)(t.h2,{id:"zipping-the-apps",children:"Zipping the App(s)"}),"\n",(0,n.jsx)(t.p,{children:"After the apps (testApp and testRunner) has/have been built, they need to be zipped. This can be done with the following steps."}),"\n",(0,n.jsx)(t.h3,{id:"navigating-to-the-directory-containing-the-built-apps",children:"Navigating to the directory containing the built apps"}),"\n",(0,n.jsxs)(t.p,{children:["After building, your apps (the .app directories) will be located in the ",(0,n.jsx)(t.code,{children:"Build/Products/Debug-iphonesimulator"})," directory in the Derived Data path. In the above example, we used ",(0,n.jsx)(t.code,{children:"./customFolder"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Open a terminal and navigate to this directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd /path/to/your/project/customFolder/Build/Products/Debug-iphonesimulator\n"})}),"\n",(0,n.jsx)(t.h3,{id:"zipping-the-apps-1",children:"Zipping the Apps"}),"\n",(0,n.jsx)(t.p,{children:"You can create a zip archive of each app using the zip command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"zip -r testApp.zip testApp.app\nzip -r testRunner.zip testRunner.app\n"})}),"\n",(0,n.jsx)(t.p,{children:"Here is a breakdown of the command arguments, which is the same for both lines:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"zip -r"})}),": This tells zip to include all the files and directories recursively in the directory being zipped."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"testApp.zip"})}),": This is the new name of the testApp-file and can be any name you want to give it."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"testApp.app"})}),": This is the name of the testApp-file that needs to be zipped."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"/path/to/your/project/"})," with the actual path to your project's directory and ",(0,n.jsx)(t.code,{children:"testApp.app"})," and ",(0,n.jsx)(t.code,{children:"testRunner.app"})," with the actual names of your app directories."]})}),"\n",(0,n.jsx)(t.h2,{id:"uploading-the-apps-to-sauce-storage",children:"Uploading the App(s) to Sauce Storage"}),"\n",(0,n.jsx)(t.h3,{id:"appium",children:"Appium"}),"\n",(0,n.jsxs)(t.p,{children:["For Appium, you can upload your mobile app programmatically using the ",(0,n.jsx)(t.a,{href:"/dev/api/storage",children:"File Storage API Methods"}),". For more information, see ",(0,n.jsx)(t.a,{href:"/mobile-apps/app-storage/#uploading-apps-via-rest-api",children:"Uploading Apps via Rest API"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"xcuitest",children:"XCUITest"}),"\n",(0,n.jsxs)(t.p,{children:["For XCUITest on Simulators, you can use ",(0,n.jsx)(t.code,{children:"saucectl"})," to run XCUITest for Simulators on Sauce Labs. It will handle the app uploading process to Sauce Storage for you. For more information, see ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/",children:"Espresso XCUITest documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>o});i(96540);var n=i(34164);const s={tabItem:"tabItem_Ymn6"};var a=i(74848);function o(e){let{children:t,hidden:i,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(96540),s=i(34164),a=i(23104),o=i(56347),r=i(205),l=i(57485),c=i(31682),d=i(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,a=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:i,groupId:s}),[x,g]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:s}),b=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(74848);function j(e){let{className:t,block:i,selectedValue:n,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),s=r[i].value;s!==n&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:r.map((e=>{let{value:t,label:i,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function v(e){let{lazy:t,children:i,selectedValue:a}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);