"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[93866],{73451:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=s(74848),o=s(28453);const n={id:"automated-testing",title:"Using Automated Mobile App Testing",sidebar_label:"Overview",description:"Overview of Sauce Labs automated testing methods and supported frameworks.",hide_table_of_contents:!0},a=void 0,r={id:"mobile-apps/automated-testing",title:"Using Automated Mobile App Testing",description:"Overview of Sauce Labs automated testing methods and supported frameworks.",source:"@site/docs/mobile-apps/automated-testing.md",sourceDirName:"mobile-apps",slug:"/mobile-apps/automated-testing",permalink:"/sauce-docs/pr-preview/pr-2902/mobile-apps/automated-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1708081246e3,frontMatter:{id:"automated-testing",title:"Using Automated Mobile App Testing",sidebar_label:"Overview",description:"Overview of Sauce Labs automated testing methods and supported frameworks.",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Set Up Error Reporting",permalink:"/sauce-docs/pr-preview/pr-2902/mobile-apps/live-testing/error-reporting"},next:{title:"Using Appium",permalink:"/sauce-docs/pr-preview/pr-2902/mobile-apps/automated-testing/appium"}},l={},c=[{value:"High Level Steps",id:"high-level-steps",level:2},{value:"1. Link to your Sauce Labs account.",id:"1-link-to-your-sauce-labs-account",level:3},{value:"2. Make the iOS and Android application files available to Sauce Labs.",id:"2-make-the-ios-and-android-application-files-available-to-sauce-labs",level:3},{value:"3. Configure your tests for Sauce Labs.",id:"3-configure-your-tests-for-sauce-labs",level:3},{value:"4. Run your Tests.",id:"4-run-your-tests",level:3},{value:"5. Debug your Tests and locator issues with Appium Inspector.",id:"5-debug-your-tests-and-locator-issues-with-appium-inspector",level:3},{value:"Mobile Automation Test Considerations",id:"mobile-automation-test-considerations",level:2},{value:"Real Device Automated Test Time Limits",id:"real-device-automated-test-time-limits",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Sauce Labs empowers you to run automation tests using the test instrumentation you prefer, so you can achieve total digital confidence in your app's behavior and performance on any mobile device."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'While "mobile testing" can also refer to testing web apps within a browser on a mobile device, the Sauce Labs mobile automated testing documentation is predominantly addressing concepts and practices related to testing a mobile app designed to be installed on a mobile device.'})}),"\n",(0,i.jsx)(t.h2,{id:"high-level-steps",children:"High Level Steps"}),"\n",(0,i.jsx)(t.p,{children:"Most automated mobile app testing strategies will follow the same basic process, regardless of the language in or protocol used for the test scripts and the operating system or type of device on which the app is being installed and tested. The essential steps in this process are:"}),"\n",(0,i.jsx)(t.h3,{id:"1-link-to-your-sauce-labs-account",children:"1. Link to your Sauce Labs account."}),"\n",(0,i.jsxs)(t.p,{children:["No matter which tool you are using to write and run your automation test scripts, you will need to provide your Sauce Labs credentials in order to access the devices on which you plan to test, and to view your test results and insights in the Sauce Labs app. The best and most secure way to provide your credentials is to ",(0,i.jsxs)(t.a,{href:"/basics/environment-variables",children:["set your ",(0,i.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,i.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," as environment variables"]}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"2-make-the-ios-and-android-application-files-available-to-sauce-labs",children:"2. Make the iOS and Android application files available to Sauce Labs."}),"\n",(0,i.jsx)(t.p,{children:"Sauce Labs supports several ways to do this, so the method that best suits your circumstances may vary depending on:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Whether you have the file locally or whether it is available through a remote URL"}),"\n",(0,i.jsx)(t.li,{children:"Whether you plan to test on virtual devices (Android Emulator or iOS Simulator) or real devices"}),"\n",(0,i.jsxs)(t.li,{children:["Whether you wish to use a graphical interface or a programmatic API request\nFor additional information about choosing your best method, see ",(0,i.jsx)(t.a,{href:"/mobile-apps/app-storage",children:"App Storage"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"3-configure-your-tests-for-sauce-labs",children:"3. Configure your tests for Sauce Labs."}),"\n",(0,i.jsx)(t.p,{children:"Whether you are using Appium, Espresso, or XCUITest to run your mobile automation test scripts, you will need to provide instructions for things like:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The test framework you are using and its version"}),"\n",(0,i.jsx)(t.li,{children:"Where your test scripts are located"}),"\n",(0,i.jsx)(t.li,{children:"Which tests to run"}),"\n",(0,i.jsx)(t.li,{children:"How to send test results to Sauce Labs if you're running locally"}),"\n",(0,i.jsx)(t.li,{children:"Whether you need a tunnel for secure access"}),"\n",(0,i.jsxs)(t.li,{children:["Whether your test have any dependencies that must also be installed on the test devices\nand many other settings. For ",(0,i.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium",children:"Appium"}),", these settings are configured through capability properties in your test scripts. For ",(0,i.jsx)(t.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest",children:"Espresso and XCUITest"}),", these settings are configured through YAML properties. Refer to the applicable configuration documentation for your test environment for details about supported configurations and syntax."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"4-run-your-tests",children:"4. Run your Tests."}),"\n",(0,i.jsxs)(t.p,{children:["Once you have connected to Sauce Labs, provided access to your apps, and configured your tests, you can run your tests from the environment of your choice. For example, if you are running Appium tests through IntelliJ, you can start the test from within the IntellliJ interface or execute the command ",(0,i.jsx)(t.code,{children:"mvn clean test"})," from a terminal. For espresso or XCUITests, you can use our ",(0,i.jsx)(t.code,{children:"saucectl"})," CLI command ",(0,i.jsx)(t.code,{children:"saucectl run"})," to kick off your tests."]}),"\n",(0,i.jsx)(t.h3,{id:"5-debug-your-tests-and-locator-issues-with-appium-inspector",children:"5. Debug your Tests and locator issues with Appium Inspector."}),"\n",(0,i.jsxs)(t.p,{children:["Once you have successfully run your tests on Sauce Labs, you will be able to utilize our integrated ",(0,i.jsx)(t.a,{href:"/mobile-apps/features/appium-inspector/",children:"Appium Inspector capability"})," to debug your tests faster. It doesn't require you to download and install any 3rd-party tools; instead, it is seamlessly integrated into the Live Testing experience. This enables you to identify locator issues within your application or test script."]}),"\n",(0,i.jsx)(t.h2,{id:"mobile-automation-test-considerations",children:"Mobile Automation Test Considerations"}),"\n",(0,i.jsx)(t.p,{children:"Within the high level process described above, there are many nuances that can affect the usefulness of your test results. Here we have tried to provide some of the most common."}),"\n",(0,i.jsx)(t.h3,{id:"real-device-automated-test-time-limits",children:"Real Device Automated Test Time Limits"}),"\n",(0,i.jsxs)(t.p,{children:["By default, automated tests that are running on real devices in the Sauce Labs data centers can run for up to ",(0,i.jsx)(t.strong,{children:"60 minutes"}),". However, that duration can be affected by other factors:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If the test is idle (not actively interacting with the device) for more than 60 seconds, the test will timeout and end the session, so consider writing tests that do not include waits that may trigger this timeout. For Appium tests, you have the option to increase the idle timeout value to a maximum of 90 seconds using the ",(0,i.jsx)(t.a,{href:"/dev/test-configuration-options/#newCommandTimeout",children:(0,i.jsx)(t.code,{children:"newCommandTimeout"})})," capability."]}),"\n",(0,i.jsxs)(t.li,{children:["If you are running multiple Appium tests concurrently on the same device, consider setting the ",(0,i.jsx)(t.a,{href:"/dev/test-configuration-options/#cacheId",children:"cache ID"})," to bypass the default device cleaning process and session exit between tests."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var i=s(96540);const o={},n=i.createContext(o);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);