"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[41326],{8005:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=s(74848),t=s(28453),l=(s(86025),s(11470)),i=s(19365);const o={id:"debug",title:"Using Extended Debugging",sidebar_label:"Debugging",description:"Collect extended debugging data to help audit flaky test results."},d=void 0,a={id:"insights/debug",title:"Using Extended Debugging",description:"Collect extended debugging data to help audit flaky test results.",source:"@site/docs/insights/debug.md",sourceDirName:"insights",slug:"/insights/debug",permalink:"/sauce-docs/pr-preview/pr-2902/insights/debug",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/insights/debug.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"debug",title:"Using Extended Debugging",sidebar_label:"Debugging",description:"Collect extended debugging data to help audit flaky test results."},sidebar:"docs",previous:{title:"Failure Analysis",permalink:"/sauce-docs/pr-preview/pr-2902/insights/failure-analysis"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2902/performance"}},c={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Enabling Extended Debugging",id:"enabling-extended-debugging",level:2},{value:"Edit Your Firefox Profile",id:"edit-your-firefox-profile",level:3},{value:"Using the JavaScript Executor to Simulate Network Conditions",id:"using-the-javascript-executor-to-simulate-network-conditions",level:2},{value:"Intercept Network Requests",id:"intercept-network-requests",level:3},{value:"<code>sauce:intercept</code> + redirect",id:"sauceintercept--redirect",level:4},{value:"Command Parameters",id:"command-parameters",level:5},{value:"Examples",id:"examples",level:5},{value:"<code>sauce:intercept</code> + response",id:"sauceintercept--response",level:4},{value:"Command Parameters",id:"command-parameters-1",level:5},{value:"Examples",id:"examples-1",level:5},{value:"<code>sauce:intercept</code> + error",id:"sauceintercept--error",level:4},{value:"Command Parameters",id:"command-parameters-2",level:5},{value:"Examples",id:"examples-2",level:5},{value:"Throttle Conditions",id:"throttle-conditions",level:3},{value:"<code>sauce:throttleCPU</code>",id:"saucethrottlecpu",level:4},{value:"Command Parameters",id:"command-parameters-3",level:5},{value:"Examples",id:"examples-3",level:5},{value:"<code>sauce:throttleNetwork</code>",id:"saucethrottlenetwork",level:4},{value:"Command Parameters",id:"command-parameters-4",level:5},{value:"Examples",id:"examples-4",level:5},{value:"JavaScript (JS) Console Logs",id:"javascript-js-console-logs",level:2},{value:"Accessing Console Logs",id:"accessing-console-logs",level:3},{value:"HAR Files",id:"har-files",level:2},{value:"Viewing HAR Files",id:"viewing-har-files",level:3},{value:"Accessing HAR Files",id:"accessing-har-files",level:3},{value:"Network Logs",id:"network-logs",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Enable Extended Debugging in your Selenium test script to collect console logs and HTTP Archive (HAR) files generated during testing for use in diagnosing flaky tests or performance degradation."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Extended Debugging generates additional assets that impact test performance and is not intended for everyday testing."})}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Sauce Labs account (",(0,r.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Your Sauce Labs ",(0,r.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,r.jsxs)(n.li,{children:["Google Chrome (no older than 3 versions from latest) ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"or"})})," Firefox browser (versions 53 and above) as the test browser","\n",(0,r.jsx)(n.admonition,{title:"Multi-Window Limitation on Chrome Browser",type:"caution",children:(0,r.jsxs)(n.p,{children:["In rare instances, tests running in Chrome that launch multiple browser windows may result in a Chrome DevTools socket interruption that throws a ",(0,r.jsx)(n.code,{children:"408 Automation Server Error"}),". If this happens, discontinue extended debugging for tests that utilize multiple windows."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"enabling-extended-debugging",children:"Enabling Extended Debugging"}),"\n",(0,r.jsxs)(n.p,{children:["To generate the JS console logs and HAR files, add the ",(0,r.jsx)(n.code,{children:"extendedDebugging"})," capability to the capabilities of your test and set it to true. Here are some example scripts in both W3C WebDriver Protocol and legacy JSON Wire Protocol that show Extended Debugging enabled."]}),"\n",(0,r.jsxs)(l.A,{defaultValue:"w3c",values:[{label:"W3C",value:"w3c"},{label:"JSONWP",value:"jsonwp"}],children:[(0,r.jsx)(i.A,{value:"w3c",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"const capabilities: {\n  browserName: 'chrome',\n  browserVersion: 'latest',\n  platformName: 'Windows 10',\n  'sauce:options': {\n        extendedDebugging: true,\n  }\n}\n"})})}),(0,r.jsx)(i.A,{value:"jsonwp",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"const capabilities = {\n  browserName: 'chrome',\n  version: 'latest',\n  platform: 'Windows 10',\n  extendedDebugging: true,\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["For more information and additional examples, see our\n",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/extended-debugging",children:"Extended Debugging Example GitHub repo"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When a test with extended debugging enabled completes, you can access the logs and files through Sauce Labs or with the REST API."}),"\n",(0,r.jsx)(n.h3,{id:"edit-your-firefox-profile",children:"Edit Your Firefox Profile"}),"\n",(0,r.jsxs)(n.p,{children:["If you're testing on a Firefox browser, edit the Firefox ",(0,r.jsx)(n.code,{children:"about:config"})," file to configure your profile as follows to allow Extended Debugging:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"about:config Settings\n'mozz:firefoxOptions': {\n    'profile': '<CUSTOM_PROFILE_ID>',\n    'args': [\n        '-start-debugger-server',\n        '9222'\n    ],\n    prefs: {\n        'devtools.debugger.remote-enabled': true,\n        'devtools.debugger.prompt-connection': false,\n        'devtools.chrome.enabled': true\n    }\n},\n"})}),"\n",(0,r.jsx)(n.h2,{id:"using-the-javascript-executor-to-simulate-network-conditions",children:"Using the JavaScript Executor to Simulate Network Conditions"}),"\n",(0,r.jsxs)(n.p,{children:["Selenium's ",(0,r.jsx)(n.a,{href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/JavascriptExecutor.html",children:"JavascriptExecutor"})," lets you use JavaScript commands in your test scripts to perform actions in the browser, and Sauce Labs exposes a set of custom JavascriptExecutor methods for use with your tests. The commands defined on this page allow you to simulate various test environments for more effective debugging."]}),"\n",(0,r.jsx)(n.h3,{id:"intercept-network-requests",children:"Intercept Network Requests"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"sauce:intercept"})," JavascriptExecutor command to modify browser requests to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prohibit requests to 3rd party vendors"}),"\n",(0,r.jsx)(n.li,{children:"Modify requests to REST API (Mock REST API response)"}),"\n",(0,r.jsx)(n.li,{children:"Redirect certain parts of the app"}),"\n",(0,r.jsx)(n.li,{children:"Insert or change headers"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The following use cases are supported for the ",(0,r.jsx)(n.code,{children:"sauce:intercept"})," command."]}),"\n",(0,r.jsxs)(n.h4,{id:"sauceintercept--redirect",children:[(0,r.jsx)(n.code,{children:"sauce:intercept"})," + redirect"]}),"\n",(0,r.jsxs)(n.p,{children:["Configure ",(0,r.jsx)(n.code,{children:"sauce:intercept"})," to redirect an outgoing request to an alternate URL."]}),"\n",(0,r.jsx)(n.h5,{id:"command-parameters",children:"Command Parameters"}),"\n",(0,r.jsxs)("table",{id:"table-fw",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"url"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["An outgoing request URL. Wildcards are supported, for example ",(0,r.jsxs)("code",{children:[(0,r.jsx)(n.a,{href:"https://saucelabs.com/rest/v1/",children:"https://saucelabs.com/rest/v1/"}),"*"]})," would redirect any v1 rest API requests."]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"redirect"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["An absolute URL to where the original request is redirected. The code samples use ",(0,r.jsx)("code",{children:(0,r.jsx)(n.a,{href:"https://google.com",children:"https://google.com"})}),"."]})]})]})})]}),"\n",(0,r.jsx)(n.h5,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(l.A,{groupId:"lang",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"WebdriverIO",value:"wdio"}],children:[(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'driver.execute_script(\'sauce:intercept\', {\n    "url": "https://saucelabs.com",\n    "redirect": "https://google.com"\n})\n'})})}),(0,r.jsx)(i.A,{value:"wdio",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"browser.interceptRequest({\nurl: 'https://saucelabs.com/',\nredirect: 'https://google.com'\n})\n"})})})]}),"\n",(0,r.jsxs)(n.h4,{id:"sauceintercept--response",children:[(0,r.jsx)(n.code,{children:"sauce:intercept"})," + response"]}),"\n",(0,r.jsxs)(n.p,{children:["Configure ",(0,r.jsx)(n.code,{children:"sauce:intercept"})," to return the specified response."]}),"\n",(0,r.jsx)(n.h5,{id:"command-parameters-1",children:"Command Parameters"}),"\n",(0,r.jsxs)("table",{id:"table-fw",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"url"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["An outgoing request URL. Wildcards are supported, for example ",(0,r.jsxs)("code",{children:[(0,r.jsx)(n.a,{href:"https://saucelabs.com/rest/v1/",children:"https://saucelabs.com/rest/v1/"}),"*"]})," would redirect any v1 rest API requests."]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"response"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsx)("p",{children:"An object that defines the response to send when the requested URL is intercepted. Valid attributes of the response are:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"status"}),": HTTP response code representing the request status, such as ",(0,r.jsx)("code",{children:"200"}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"headers"}),": List of key/value pairs set as header variables, for example, ",(0,r.jsx)("code",{children:'Cookie: "foo=bar"'}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"body"}),": Actual response payload to return."]})]})]})]})})]}),"\n",(0,r.jsx)(n.h5,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsxs)(l.A,{groupId:"lang",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"WebdriverIO",value:"wdio"}],children:[(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'driver.execute_script("sauce:intercept", {\n    "url": "http://sampleapp.appspot.com/api/todos",\n        "response": {\n            "headers": {\n                "x-custom-header": "foobar"\n            },\n            "body": [{\n                "title": "Hello",\n                "order": 1,\n                "completed": false,\n                "url": "http://todo-backend-express.herokuapp.com/15727"\n            }]\n        }\n    })\n'})})}),(0,r.jsx)(i.A,{value:"wdio",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"browser.interceptRequest({\nurl: 'http://sampleapp.appspot.com/api/todos',\nresponse: {\nheaders: {\n'x-custom-header': 'foobar'\n},\nbody: [\n{\ntitle: 'Hello',\norder: 1,\ncompleted: false,\nurl: 'http://todo-backend-express.herokuapp.com/15727'\n}\n]\n}\n})\n"})})})]}),"\n",(0,r.jsxs)(n.h4,{id:"sauceintercept--error",children:[(0,r.jsx)(n.code,{children:"sauce:intercept"})," + error"]}),"\n",(0,r.jsxs)(n.p,{children:["Configure ",(0,r.jsx)(n.code,{children:"sauce:intercept"})," to return the specified error."]}),"\n",(0,r.jsx)(n.h5,{id:"command-parameters-2",children:"Command Parameters"}),"\n",(0,r.jsxs)("table",{id:"table-fw",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"url"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["An outgoing request URL. Wildcards are supported, for example ",(0,r.jsxs)("code",{children:[(0,r.jsx)(n.a,{href:"https://saucelabs.com/rest/v1/",children:"https://saucelabs.com/rest/v1/"}),"*"]})," would redirect any v1 rest API requests."]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"error"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsx)("p",{children:"A valid error status to return when the requested URL is intercepted. Valid values are:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"Failed"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"Aborted"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"TimedOut"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"AccessDenied"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"ConnectionClosed"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"ConnectionReset"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"ConnectionRefused"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"ConnectionAborted"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"ConnectionFailed"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"NameNotResolved"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"InternetDisconnected"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"AddressUnreachable"})})]})]})]})})]}),"\n",(0,r.jsx)(n.h5,{id:"examples-2",children:"Examples"}),"\n",(0,r.jsxs)(l.A,{groupId:"lang",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"WebdriverIO",value:"wdio"}],children:[(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'driver.execute_script("sauce:intercept", {\n    "url": "https://saucecon.com/wp-content/uploads/2017/07/SauceCon-hero-img-100-2.jpg",\n    "error": "Failed"})\n'})})}),(0,r.jsx)(i.A,{value:"wdio",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"browser.interceptRequest({\nurl:\n'https://saucecon.com/wp-content/uploads/2017/07/SauceCon-hero-img-100-2.jpg',\nerror: 'Failed'\n})\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"throttle-conditions",children:"Throttle Conditions"}),"\n",(0,r.jsx)(n.p,{children:"Use the JavascriptExecutor throttle commands to simulate different connectivity conditions that may affect the performance of your app."}),"\n",(0,r.jsx)(n.h4,{id:"saucethrottlecpu",children:(0,r.jsx)(n.code,{children:"sauce:throttleCPU"})}),"\n",(0,r.jsx)(n.p,{children:"Mobile devices have less CPU power than most desktops and laptops (or a VM's default configuration). Use CPU Throttling to simulate how your app will run on slower systems."}),"\n",(0,r.jsx)(n.h5,{id:"command-parameters-3",children:"Command Parameters"}),"\n",(0,r.jsx)("table",{id:"table-fw",children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"rate"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["A number defining the amount of slowdown (e.g., ",(0,r.jsx)("code",{children:"2"})," ~ 2x slowdown, your CPU will be 2 times slower than usual)."]})]})]})})}),"\n",(0,r.jsx)(n.h5,{id:"examples-3",children:"Examples"}),"\n",(0,r.jsxs)(l.A,{groupId:"lang",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"WebdriverIO",value:"wdio"}],children:[(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.execute_script('sauce:throttleCPU', {\n    \"rate\": 4\n})\n"})})}),(0,r.jsx)(i.A,{value:"wdio",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"browser.throttleCPU(4)\n"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"saucethrottlenetwork",children:(0,r.jsx)(n.code,{children:"sauce:throttleNetwork"})}),"\n",(0,r.jsx)(n.p,{children:"With network conditioning you can test your site on a variety of network connections, including Edge, 3G, and even offline. You can throttle the data throughput, including the maximum download and upload throughput, and use latency manipulation to enforce a minimum delay in connection round-trip time (RTT)."}),"\n",(0,r.jsx)(n.h5,{id:"command-parameters-4",children:"Command Parameters"}),"\n",(0,r.jsx)("table",{id:"table-fw",children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"condition"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsx)("p",{children:"A string or object representing browser network conditions. Sauce Labs supports the following predefined network profiles:"}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Profile"}),(0,r.jsx)("th",{children:"Download Speed (kb/s)"}),(0,r.jsx)("th",{children:"Upload Speed (kb/s)"}),(0,r.jsx)("th",{children:"Round Trip Time (ms)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"offline"})}),(0,r.jsx)("td",{children:"0"}),(0,r.jsx)("td",{children:"0"}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"GPRS"})}),(0,r.jsx)("td",{children:"50"}),(0,r.jsx)("td",{children:"20"}),(0,r.jsx)("td",{children:"500"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"Regular 2G"})}),(0,r.jsx)("td",{children:"250"}),(0,r.jsx)("td",{children:"50"}),(0,r.jsx)("td",{children:"300"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"Good 2G"})}),(0,r.jsx)("td",{children:"450"}),(0,r.jsx)("td",{children:"150"}),(0,r.jsx)("td",{children:"150"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"Regular 3G"})}),(0,r.jsx)("td",{children:"750"}),(0,r.jsx)("td",{children:"250"}),(0,r.jsx)("td",{children:"100"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"Good 3G"})}),(0,r.jsx)("td",{children:"1Mb/s"}),(0,r.jsx)("td",{children:"750"}),(0,r.jsx)("td",{children:"40"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"Regular 4G"})}),(0,r.jsx)("td",{children:"4Mb/s"}),(0,r.jsx)("td",{children:"3Mb/s"}),(0,r.jsx)("td",{children:"20"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"DSL"})}),(0,r.jsx)("td",{children:"2Mb/s"}),(0,r.jsx)("td",{children:"1Mb/s"}),(0,r.jsx)("td",{children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"WiFi"})}),(0,r.jsx)("td",{children:"30Mb/s"}),(0,r.jsx)("td",{children:"15Mb/s"}),(0,r.jsx)("td",{children:"2"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"online"})}),(0,r.jsx)("td",{children:"No Restrictions"}),(0,r.jsx)("td",{children:"No Restrictions"}),(0,r.jsx)("td",{children:"No Restrictions"})]})]}),(0,r.jsx)("p",{children:"Alternatively, you can define an object specifying individual parameters for each of the three network values, as shown in the code examples:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"download"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"upload"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"latency"})})]})]})]})})}),"\n",(0,r.jsx)(n.h5,{id:"examples-4",children:"Examples"}),"\n",(0,r.jsxs)(l.A,{groupId:"lang",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"WebdriverIO",value:"wdio"}],children:[(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'driver.execute_script(\'sauce:throttleNetwork\', {\n    "condition": "GPRS"\n})\n# or\ndriver.execute_script(\'sauce:throttleNetwork\', {\n    "condition": {\n        "download": 1000,\n        "upload": 500,\n        "latency": 40\n    }\n})\n'})})}),(0,r.jsx)(i.A,{value:"wdio",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"browser.throttleNetwork('GPRS')\n// or\nbrowser.throttleNetwork({\ndownload: 1000,\nupload: 500,\nlatency: 40\n})\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"javascript-js-console-logs",children:"JavaScript (JS) Console Logs"}),"\n",(0,r.jsxs)(n.p,{children:["The JS console collects security errors, warnings, and messages that are explicitly logged by the browser. You can use these logs to find out which components of your web app failed to load or ran into an error, what warnings were logged by the browser, and get more information about app performance. The console log information is associated with the URL where it occurred, and is composed of four types of information: ",(0,r.jsx)(n.strong,{children:"Log"}),", ",(0,r.jsx)(n.strong,{children:"Info"}),", ",(0,r.jsx)(n.strong,{children:"Warning"}),", and ",(0,r.jsx)(n.strong,{children:"Error"}),". In this example, you can see how an error was generated for the URL ",(0,r.jsx)(n.code,{children:"https://pbs.twimg.com/profile_images/477099293250052097/fMFjb8gu_400x400.jpeg"})," when a resource failed to load:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n   "http://webdriver.io/api/action/click.html":[\n      {\n         "level":"error",\n         "column":0,\n         "text":"Failed to load resource: the server responded with a status of 404 (OK)",\n         "source":"network",\n         "networkRequestId":"1543.182",\n         "url":"https://pbs.twimg.com/profile_images/477099293250052097/fMFjb8gu_400x400.jpeg",\n         "timestamp":1501197041.22091,\n         "line":0,\n         "type":"log"\n      }\n   ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"accessing-console-logs",children:"Accessing Console Logs"}),"\n",(0,r.jsxs)(n.p,{children:["Access the JS Console logs (",(0,r.jsx)(n.code,{children:"console.json"}),") under the ",(0,r.jsx)(n.strong,{children:"Logs"})," tab of the ",(0,r.jsx)(n.strong,{children:"Test Details"})," page, or through the REST API by calling the ",(0,r.jsx)(n.a,{href:"/dev/api/jobs#get-a-job-asset-file",children:"assets endpoint"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl --compressed -O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/eds/JOB_ID/console.json\n"})}),"\n",(0,r.jsx)(n.h2,{id:"har-files",children:"HAR Files"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/HAR_(file_format)",children:"HTTP Archive Format (HAR) files"})," collect all network requests and responses made and received by the browser during testing. HAR files offer useful debugging information, such as:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Identifying browser requests that time out"}),"\n",(0,r.jsx)(n.li,{children:"Pinpointing requests slowing down the loading process"}),"\n",(0,r.jsx)(n.li,{children:"Locating faulty API calls"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"viewing-har-files",children:"Viewing HAR Files"}),"\n",(0,r.jsxs)(n.p,{children:["You need a HAR viewer to read HAR files. Sauce Labs provides a ",(0,r.jsx)(n.a,{href:"https://opensource.saucelabs.com/network-viewer/",children:"React Network Viewer"})," HAR viewer for your convenience. For step-by-step usage instructions, see our ",(0,r.jsx)(n.a,{href:"https://opensource.saucelabs.com/blog/react_network_viewer/",children:"Visualize HAR Files with the New React Network Viewer"})," blog article."]}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, some other commonly used HAR viewers include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Chrome devtools builtin ",(0,r.jsx)(n.a,{href:"https://developer.chrome.com/blog/new-in-devtools-62/#har-imports",children:"HAR imports"})]}),"\n",(0,r.jsxs)(n.li,{children:["Google Admin Toolbox ",(0,r.jsx)(n.a,{href:"https://toolbox.googleapps.com/apps/har_analyzer/",children:"HAR Analyzer"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Software is Hard"})," blog ",(0,r.jsx)(n.a,{href:"http://www.softwareishard.com/har/viewer/",children:"HTTP Archive Viewer"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"accessing-har-files",children:"Accessing HAR Files"}),"\n",(0,r.jsx)(n.p,{children:"To download HAR files from Sauce Labs:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Live"})," > ",(0,r.jsx)(n.strong,{children:"Test Results"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Select the applicable test."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Metadata"})," tab."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can also download a HAR file programmatically using the following API request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:"curl --compressed -O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/eds/JOB_ID/network.har\n"})}),"\n",(0,r.jsx)(n.h2,{id:"network-logs",children:"Network Logs"}),"\n",(0,r.jsx)(n.p,{children:"Sauce Labs records all network requests made by the open page in the browser during the test. To generate the network logs in your test output, include the following JavaScript Executor command in your test script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"driver.execute('sauce:log', { type: 'sauce:network' }):\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var r=s(18215);const t={tabItem:"tabItem_Ymn6"};var l=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var r=s(96540),t=s(18215),l=s(23104),i=s(56347),o=s(205),d=s(57485),a=s(31682),c=s(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=u(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[a,h]=x({queryString:s,groupId:t}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),g=(()=>{const e=a??j;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function f(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),c=e=>{const n=e.currentTarget,s=d.indexOf(n),t=o[s].value;t!==r&&(a(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...l,className:(0,t.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);