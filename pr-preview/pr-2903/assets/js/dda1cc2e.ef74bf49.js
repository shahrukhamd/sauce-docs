"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49016],{8300:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=i(74848),n=i(28453),r=(i(86025),i(11470)),s=i(19365);const l={id:"appium-flutter-integration-driver",title:"Appium Flutter Integration Driver Testing on Sauce Labs",sidebar_label:"Appium Flutter Integration Testing",description:"Learn how to test Flutter apps with the Appium Flutter Integration Driver."},o=void 0,p={id:"mobile-apps/automated-testing/appium/appium-flutter-integration-driver",title:"Appium Flutter Integration Driver Testing on Sauce Labs",description:"Learn how to test Flutter apps with the Appium Flutter Integration Driver.",source:"@site/docs/mobile-apps/automated-testing/appium/appium-flutter-integration-driver.md",sourceDirName:"mobile-apps/automated-testing/appium",slug:"/mobile-apps/automated-testing/appium/appium-flutter-integration-driver",permalink:"/sauce-docs/pr-preview/pr-2903/mobile-apps/automated-testing/appium/appium-flutter-integration-driver",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/appium/appium-flutter-integration-driver.md",tags:[],version:"current",lastUpdatedBy:"bahrimootaz",lastUpdatedAt:1720706086e3,frontMatter:{id:"appium-flutter-integration-driver",title:"Appium Flutter Integration Driver Testing on Sauce Labs",sidebar_label:"Appium Flutter Integration Testing",description:"Learn how to test Flutter apps with the Appium Flutter Integration Driver."},sidebar:"docs",previous:{title:"Appium Flutter Testing",permalink:"/sauce-docs/pr-preview/pr-2903/mobile-apps/automated-testing/appium/appium-flutter"},next:{title:"Using Espresso and XCUITest",permalink:"/sauce-docs/pr-preview/pr-2903/mobile-apps/automated-testing/espresso-xcuitest"}},u={},d=[{value:"Native Flutter Integration Driver vs Appium Flutter Integration Driver",id:"native-flutter-integration-driver-vs-appium-flutter-integration-driver",level:2},{value:"Differences from Appium Flutter Driver",id:"differences-from-appium-flutter-driver",level:2},{value:"Why Use Appium Flutter Integration Driver?",id:"why-use-appium-flutter-integration-driver",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Use Sauce Labs <code>My Demo App Flutter</code>",id:"use-sauce-labs-my-demo-app-flutter",level:2},{value:"Prepare the app with Flutter Integration Server",id:"prepare-the-app-with-flutter-integration-server",level:2},{value:"Uploading your Flutter App to Sauce Labs",id:"uploading-your-flutter-app-to-sauce-labs",level:2},{value:"Configuring your Appium Capabilities",id:"configuring-your-appium-capabilities",level:2},{value:"Real Devices",id:"real-devices",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Sauce Labs supports testing Flutter apps on Android and iOS real devices with Appium by utilizing the ",(0,a.jsx)(t.a,{href:"https://github.com/AppiumTestDistribution/appium-flutter-integration-driver",children:"appium-flutter-integration-driver"}),".\nThe process to test Flutter apps with Appium involves an additional and crucial step: ",(0,a.jsx)(t.a,{href:"#prepare-the-app-with-flutter-integration-server",children:"Prepare the app with Flutter Integration Server"}),".\nThis step includes instructions on how to prepare and build your app for both Android and iOS platforms. After preparing your app,\nyou can ",(0,a.jsx)(t.a,{href:"#uploading-your-flutter-app-to-sauce-labs",children:"upload"})," it to Sauce Labs, ",(0,a.jsx)(t.a,{href:"#configuring-your-appium-capabilities",children:"Configure your Appium capabilities"}),", and run your tests."]}),"\n",(0,a.jsx)(t.h2,{id:"native-flutter-integration-driver-vs-appium-flutter-integration-driver",children:"Native Flutter Integration Driver vs Appium Flutter Integration Driver"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Use Cases"}),(0,a.jsx)(t.th,{children:"Native Flutter Driver"}),(0,a.jsx)(t.th,{children:"Appium Flutter Integration Driver"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Writing tests in languages other than Dart"}),(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Running integration tests for Flutter apps with embedded webview or native view, or existing native apps with embedded Flutter view"}),(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Running tests on multiple devices simultaneously"}),(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Running integration tests on device farms that offer Appium support"}),(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"App interactions beyond Flutter\u2019s contextuality (e.g., sending an OTP from a message application)"}),(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"\u2714\ufe0f"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"differences-from-appium-flutter-driver",children:"Differences from Appium Flutter Driver"}),"\n",(0,a.jsxs)(t.p,{children:["The current Appium Flutter Driver is built on top of the ",(0,a.jsx)(t.code,{children:"flutter_test"})," SDK, which is deprecated.\nThe potential deprecation (",(0,a.jsxs)(t.a,{href:"https://github.com/flutter/flutter/issues/139249",children:["Expand deprecation policy to package",":flutter_driver"]}),")\nmeans this driver may not work with future Flutter updates. It also does not handle all cases, such as permission dialog handling."]}),"\n",(0,a.jsx)(t.h2,{id:"why-use-appium-flutter-integration-driver",children:"Why Use Appium Flutter Integration Driver?"}),"\n",(0,a.jsxs)(t.p,{children:["This driver is built using ",(0,a.jsx)(t.a,{href:"https://docs.flutter.dev/cookbook/testing/integration/introduction",children:"Flutter Integration Test"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Strong Typing & Fluent APIs:"})})," Ensures robust and easy-to-use interfaces."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Element Handling"})}),": Automatically waits for elements to attach to the DOM before interacting."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Seamless Context Switching"})}),": No need to switch between contexts, such as Flutter and native; the driver handles it effortlessly."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Auto Wait for Render Cycles"})}),": Automatically waits for frame render cycles, including animations and screen transitions."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Simplified Powerful Gestures"})}),": Supports powerful yet simplified gestures like LongPress, ScrollToElement, DragAndDrop, and DoubleClick."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Element Chaining"})}),": Allows chaining of elements, enabling you to find child elements under a specific parent easily."]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Familiarity with creating, signing and building ",(0,a.jsx)(t.a,{href:"https://docs.flutter.dev/",children:"Flutter apps"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Familiarity writing and running ",(0,a.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/",children:"Appium tests"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"use-sauce-labs-my-demo-app-flutter",children:["Use Sauce Labs ",(0,a.jsx)(t.code,{children:"My Demo App Flutter"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-flutter",children:(0,a.jsx)(t.em,{children:"My Demo App Flutter"})})," is a mobile application developed using Flutter based\non ",(0,a.jsx)(t.a,{href:"https://github.com/felangel/bloc/tree/master/examples/flutter_counter",children:"Flutter Counter example application"}),".\nModified by the Sauce Labs team, this app is designed to demonstrate the robust capabilities of Sauce Labs\nmobile devices cloud, with a particular focus on our integration with the ",(0,a.jsx)(t.a,{href:"https://github.com/AppiumTestDistribution/appium-flutter-integration-driver",children:"Appium Flutter Integration Driver"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The apps can be found ",(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-flutter/releases/tag/v1.0.0",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["To download the demo app for Android please click ",(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-flutter/releases/download/v1.0.0/sl_my_demo_flutter_app.apk",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["To download the demo app for iOs please click ",(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-flutter/releases/download/v1.0.0/sl_my_demo_flutter_app.ipa",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"prepare-the-app-with-flutter-integration-server",children:"Prepare the app with Flutter Integration Server"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Open your Flutter project in your favorite IDE."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In your Flutter app's ",(0,a.jsx)(t.code,{children:"pubspec.yaml"}),", add the following dependencies:"]}),"\n",(0,a.jsxs)(t.p,{children:["Get the latest version from ",(0,a.jsx)(t.code,{children:"https://pub.dev/packages/appium_flutter_server/install"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"dev_dependencies:\n  appium_flutter_server: 0.0.14\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create a directory called ",(0,a.jsx)(t.code,{children:"integration_test"})," in the root of your Flutter project."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create a file called ",(0,a.jsx)(t.code,{children:"appium_test.dart"})," in the ",(0,a.jsx)(t.code,{children:"integration_test"})," directory."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add the following code to the ",(0,a.jsx)(t.code,{children:"appium_test.dart"})," file:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"import 'package:appium_flutter_server/appium_flutter_server.dart';\nimport 'package:appium_testing_app/main.dart';\n\nvoid main() {\n  initializeTest(app: const MyApp());\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"If you are in need to configure certain prerequists before the testing app is loaded, you can try the following code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"import 'package:appium_testing_app/main.dart'; as app;\nvoid main() {\n  initializeTest(\n    callback: (WidgetTester tester) async {\n       // Perform any prerequisite steps or intialise any dependencies required by the app\n       // and make sure to pump the app widget using below statement.\n       await tester.pumpWidget(const app.MyApp());\n    },\n  );\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Build the Android app:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./gradlew app:assembleDebug -Ptarget=`pwd`/../integration_test/appium_test.dart\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The APK file will be located in ",(0,a.jsx)(t.code,{children:"{project-root}/build/app/outputs/flutter-apk/"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Build the iOS app:\nFor Simulator - Debug mode"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"flutter build ios integration_test/appium_test.dart --simulator\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The app will be located in ",(0,a.jsx)(t.code,{children:"{project-root}/build/ios/iphonesimulator/"})]}),"\n",(0,a.jsx)(t.p,{children:"For Real Device - Release mode"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:" flutter build ipa --release integration_test/appium_test.dart\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The IPA file will be located in ",(0,a.jsx)(t.code,{children:"{project-root}/build/ios/ipa/"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Bingo! You are ready to run your tests using Appium Flutter Integration Driver."}),"\n",(0,a.jsx)(t.h2,{id:"uploading-your-flutter-app-to-sauce-labs",children:"Uploading your Flutter App to Sauce Labs"}),"\n",(0,a.jsxs)(t.p,{children:["You can now upload the built apps with our ",(0,a.jsx)(t.a,{href:"/dev/api/storage/#upload-file-to-app-storage",children:"REST API"}),", or manually upload them to the preferred Data Center. See ",(0,a.jsx)(t.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app",children:"Manually Uploading an App"})," for more information."]}),"\n",(0,a.jsx)(t.h2,{id:"configuring-your-appium-capabilities",children:"Configuring your Appium Capabilities"}),"\n",(0,a.jsxs)(t.p,{children:["More information on how to write Appium tests for Flutter apps can be found in the ",(0,a.jsx)(t.a,{href:"https://github.com/AppiumTestDistribution/appium-flutter-integration-driver",children:"appium-flutter-integration-driver"})," repository. You can also find a sample Flutter app and tests in the ",(0,a.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-js/tree/docs-1.3/webdriverio/appium-app/examples/appium-flutter-integration",children:"Demo JS - Appium Flutter Integration"}),"-repository."]}),"\n",(0,a.jsxs)(t.admonition,{title:"APPIUM FLUTTER INTEGRATION DRIVER SUPPORT :",type:"info",children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/AppiumTestDistribution/appium-flutter-integration-driver",children:"appium-flutter-integration-driver"}),". This driver will now be included by default with Appium version latest and all subsequent versions released after July 1st."]}),(0,a.jsxs)(t.p,{children:["More information regarding the available ",(0,a.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/appium-versions/#Real-Devices",children:"appium versions"})," we support at Sauce Sabs."]})]}),"\n",(0,a.jsx)(t.h3,{id:"real-devices",children:"Real Devices"}),"\n",(0,a.jsxs)(r.A,{groupId:"capability-ex",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"WDIO",value:"ts"}],children:[(0,a.jsx)(s.A,{value:"java",children:(0,a.jsxs)(r.A,{groupId:"capability-java",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,a.jsx)(s.A,{value:"android",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("platformName", "android");\n// W3C Protocol is mandatory for Appium 2\ncapabilities.setCapability("appium:platformVersion", "12");\ncapabilities.setCapability("appium:deviceName", "Google Pixel 6");\n// Mandatory for Appium 2\ncapabilities.setCapability("appium:automationName", "FlutterIntegration");\ncapabilities.setCapability("appium:app", "storage:filename=sl_my_demo_flutter_app.apk");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\n// appiumVersion is mandatory to use Appium 2 on Sauce Labs\nsauceOptions.put("appiumVersion", "appium-20240701");\nsauceOptions.put("username", System.getenv("SAUCE_USERNAME"));\nsauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})}),(0,a.jsx)(s.A,{value:"ios",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("platformName", "ios");\n// W3C Protocol is mandatory for Appium 2\ncapabilities.setCapability("appium:platformVersion", "16");\ncapabilities.setCapability("appium:deviceName", "iPhone 14");\n// Mandatory for Appium 2\ncapabilities.setCapability("appium:automationName", "FlutterIntegration");\ncapabilities.setCapability("appium:app", "storage:filename=sl_my_demo_flutter_app.ipa");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\n// appiumVersion is mandatory to use Appium 2 on Sauce Labs\nsauceOptions.put("appiumVersion", "appium-20240701");\nsauceOptions.put("username", System.getenv("SAUCE_USERNAME"));\nsauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})})]})}),(0,a.jsx)(s.A,{value:"ts",children:(0,a.jsxs)(r.A,{groupId:"capability-js",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,a.jsx)(s.A,{value:"android",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const capabilities = {\n    platformName: 'android',\n    // W3C Protocol is mandatory for Appium 2\n    'appium:platformVersion': '12',\n    'appium:deviceName': 'Google Pixel 6',\n    // Mandatory for Appium 2\n    'appium:automationName': 'FlutterIntegration',\n    'appium:app': 'storage:filename=sl_my_demo_flutter_app.apk',\n    'sauce:options': {\n        // appiumVersion is mandatory to use Appium 2 on Sauce Labs\n        appiumVersion: 'appium-20240701'\n    }\n}\n"})})}),(0,a.jsx)(s.A,{value:"ios",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const capabilities = {\n    platformName: 'ios',\n    // W3C Protocol is mandatory for Appium 2\n    'appium:platformVersion': '16',\n    'appium:deviceName': 'iPhone 14',\n    // Mandatory for Appium 2\n    'appium:automationName': 'FlutterIntegration',\n    'appium:app': 'storage:filename=sl_my_demo_flutter_app.ipa',\n    'sauce:options': {\n        // appiumVersion is mandatory to use Appium 2 on Sauce Labs\n        appiumVersion: 'appium-20240701'\n    }\n}\n"})})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var a=i(18215);const n={tabItem:"tabItem_Ymn6"};var r=i(74848);function s(e){let{children:t,hidden:i,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>A});var a=i(96540),n=i(18215),r=i(23104),s=i(56347),l=i(205),o=i(57485),p=i(31682),u=i(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:i}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:i,attributes:a,default:n}}=e;return{value:t,label:i,attributes:a,default:n}}))}(i);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const n=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:i=!1,groupId:n}=e,r=c(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=i.find((e=>e.default))??i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[p,d]=m({queryString:i,groupId:n}),[g,f]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(i);return[n,(0,a.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:n}),b=(()=>{const e=p??g;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(74848);function x(e){let{className:t,block:i,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.a_)(),u=e=>{const t=e.currentTarget,i=o.indexOf(t),n=l[i].value;n!==a&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;t=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;t=o[i]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":i},t),children:l.map((e=>{let{value:t,label:i,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===t}),children:i??t},t)}))})}function j(e){let{lazy:t,children:i,selectedValue:n}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function A(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var a=i(96540);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);