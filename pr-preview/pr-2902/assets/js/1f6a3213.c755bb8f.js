"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6142],{72582:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=a(74848),i=a(28453),t=a(86025),r=a(11470),l=a(19365);const c={id:"setup",title:"Visual E2E Testing Setup and Quickstart",sidebar_label:"Setup and Quickstart"},o=void 0,u={id:"visual/e2e-testing/setup",title:"Visual E2E Testing Setup and Quickstart",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/e2e-testing/setup.md",sourceDirName:"visual/e2e-testing",slug:"/visual/e2e-testing/setup",permalink:"/sauce-docs/pr-preview/pr-2902/visual/e2e-testing/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/setup.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"setup",title:"Visual E2E Testing Setup and Quickstart",sidebar_label:"Setup and Quickstart"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Integration with Existing WebDriver Tests",id:"integration-with-existing-webdriver-tests",level:2},{value:"Link Your Sauce Labs Account",id:"link-your-sauce-labs-account",level:3},{value:"Add Sauce Labs Test Code",id:"add-sauce-labs-test-code",level:3},{value:"Sauce Capabilities",id:"sauce-capabilities",level:4},{value:"Sauce Visual E2E Capabilities",id:"sauce-visual-e2e-capabilities",level:4},{value:"Sauce Visual Commands",id:"sauce-visual-commands",level:4},{value:"Run Test",id:"run-test",level:3},{value:"View Results",id:"view-results",level:3},{value:"Accept Baseline",id:"accept-baseline",level:3},{value:"Apply UI Changes",id:"apply-ui-changes",level:3},{value:"Quickstart with Sample WebDriver Tests",id:"quickstart-with-sample-webdriver-tests",level:2},{value:"Link Your Sauce Labs Account",id:"link-your-sauce-labs-account-1",level:3},{value:"Choose Sample Test",id:"choose-sample-test",level:3},{value:"Run Test",id:"run-test-1",level:3},{value:"View Results",id:"view-results-1",level:3},{value:"Accept Baseline",id:"accept-baseline-1",level:3},{value:"Apply UI Changes",id:"apply-ui-changes-1",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:2}];function p(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,n.jsxs)(s.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,n.jsx)(s.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,n.jsx)(s.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Screener Docs are Now Sauce Docs"}),(0,n.jsx)("br",{}),"\nAs part of our effort to bring you a unified documentation site, we've migrated all Visual Docs from Screener.io to Sauce Docs."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Sauce Labs Visual E2E Testing is an automated testing method that integrates with your Selenium WebDriver tests and code, enabling you to combine functional and visual regression UI testing across different browsers and resolutions in the same run. You can use any programming language that Selenium WebDriver supports without having to install additional libraries or SDKs."}),"\n",(0,n.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.a,{href:"https://saucelabs.com/pricing",children:"Sauce Labs self-serve or enterprise account"})," with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support. Visual Testing is not available for free-trial accounts."]}),"\n",(0,n.jsxs)(s.li,{children:["Your Sauce Labs ",(0,n.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Your Visual Testing ",(0,n.jsx)(s.a,{href:"https://screener.io/v2/account/api-key",children:"Screener API Key"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.a,{href:"https://github.com/",children:"GitHub account"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Have ",(0,n.jsx)(s.a,{href:"https://nodejs.org/en/download/",children:"Node.js installed"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"integration-with-existing-webdriver-tests",children:"Integration with Existing WebDriver Tests"}),"\n",(0,n.jsx)(s.p,{children:"Follow the steps below to add Visual E2E Testing functionality to your WebDriver tests."}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["New to WebDriver? See ",(0,n.jsx)(s.a,{href:"#quickstart-with-sample-webdriver-tests",children:"Quickstart with Sample WebDriver Tests"}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"link-your-sauce-labs-account",children:"Link Your Sauce Labs Account"}),"\n",(0,n.jsxs)(s.p,{children:["From your terminal or IDE, navigate to your WebDriver test location, then set your Sauce Labs username, Sauce Labs access key, and Visual Testing Screener API key as ",(0,n.jsx)(s.a,{href:"/basics/environment-variables",children:"environment variables"}),". This way, you won't have to enter them with each command and your credentials are protected from exposure in your tests."]}),"\n",(0,n.jsxs)(r.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows Powershell",value:"Windows Powershell"}],children:[(0,n.jsxs)(l.A,{value:"Mac/Linux",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export SAUCE_USERNAME="Replace with your Sauce Labs username"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export SAUCE_ACCESS_KEY="Replace with your Sauce Labs access key"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export SCREENER_API_KEY="Replace with your Screener API key"\n'})})]}),(0,n.jsxs)(l.A,{value:"Windows Powershell",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'$Env:SAUCE_USERNAME = "Replace with your Sauce Labs username"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'$Env:SAUCE_ACCESS_KEY = "Replace with your Sauce Labs access key"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:' $Env:SCREENER_API_KEY = "Replace with your Screener API key"\n'})})]})]}),"\n",(0,n.jsx)(s.h3,{id:"add-sauce-labs-test-code",children:"Add Sauce Labs Test Code"}),"\n",(0,n.jsx)(s.h4,{id:"sauce-capabilities",children:"Sauce Capabilities"}),"\n",(0,n.jsxs)(s.p,{children:["In your WebDriver test configuration section, add the ",(0,n.jsx)(s.a,{href:"/dev/test-configuration-options/",children:(0,n.jsx)(s.code,{children:"sauce:options"})})," capability with your Sauce Labs credentials (as environment variables) nested underneath. Here's what you'd write in JavaScript, for example:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript example"',children:"'sauce:options': {\n  username: process.env.SAUCE_USERNAME,\n  accessKey: process.env.SAUCE_ACCESS_KEY,\n},\n"})}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"/web-apps/automated-testing/selenium/",children:"Selenium on Sauce Labs"})," for examples in Java, Python, Ruby, and C#."]}),"\n",(0,n.jsx)(s.h4,{id:"sauce-visual-e2e-capabilities",children:"Sauce Visual E2E Capabilities"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["In your WebDriver capabilities, add the ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/commands-options/#saucevisual-capability-options",children:(0,n.jsx)(s.code,{children:"sauce:visual"})})," capability containing your desired project name and viewport size."]}),"\n"]}),"\n",(0,n.jsxs)(r.A,{defaultValue:"JS/WebdriverIO",values:[{label:"JS/WebdriverIO",value:"JS/WebdriverIO"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,n.jsx)(l.A,{value:"JS/WebdriverIO",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"var capabilities = {\n  ...\n   'sauce:visual': {\n     apiKey: process.env.SCREENER_API_KEY,\n     projectName: 'my-project',\n     viewportSize: '1280x1024'\n   }\n }\n"})})}),(0,n.jsx)(l.A,{value:"Java",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'DesiredCapabilities capabilities = new DesiredCapabilities();\nMutableCapabilities sauceVisual = new MutableCapabilities();\nsauceVisual.setCapability("apiKey", System.getenv("SCREENER_API_KEY"));\nsauceVisual.setCapability("projectName", "my-project");\nsauceVisual.setCapability("viewportSize", "1280x1024");\ncapabilities.setCapability("sauce:visual", sauceVisual);\n'})})}),(0,n.jsx)(l.A,{value:"Python",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:"capabilities = {\n  ...\n  'sauce:visual': {\n    'apiKey': os.environ.get('SCREENER_API_KEY'),\n    'projectName': 'my-project',\n    'viewportSize': '1280x1024'\n  }\n}\n"})})}),(0,n.jsx)(l.A,{value:"Ruby",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rb",children:"capabilities = {\n  ...\n  \"sauce:visual\" => {\n    apiKey: ENV[\"SCREENER_API_KEY\"],\n    projectName: 'my-project',\n    viewportSize: '1280x1024'\n  }\n}\n"})})}),(0,n.jsx)(l.A,{value:"C#",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'Dictionary sauceVisual = new Dictionary\n{\n    { "apiKey", Environment.GetEnvironmentVariable("SCREENER_API_KEY") },\n    { "projectName", "my-project" },\n    { "viewportSize", "1280x1024" }\n};\nbrowserOptions.AddAdditionalCapability("sauce:visual", sauceVisual, true);\n'})})})]}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["In your WebDriver capabilities, configure your test to connect to our remote hub, ",(0,n.jsx)(s.code,{children:"https://hub.screener.io"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.A,{defaultValue:"JS/WebdriverIO",values:[{label:"JS/WebdriverIO",value:"JS/WebdriverIO"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,n.jsx)(l.A,{value:"JS/WebdriverIO",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"exports.config = {\nhostname: 'hub.screener.io',\nport: 443,\nprotocol: 'https',\npath: '/wd/hub'\n}\n"})})}),(0,n.jsx)(l.A,{value:"Java",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'WebDriver driver = new RemoteWebDriver(\n   new URL("https://hub.screener.io:443/wd/hub"),\ncapabilities);\n'})})}),(0,n.jsx)(l.A,{value:"Python",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'host = "https://hub.screener.io:443/wd/hub"\nself.driver = webdriver.Remote(host, capabilities)\n'})})}),(0,n.jsx)(l.A,{value:"Ruby",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rb",children:'Selenium::WebDriver.for(:remote, url: "https://hub.screener.io:443/wd/hub", desired_capabilities: caps)\n'})})}),(0,n.jsx)(l.A,{value:"C#",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'driver = new RemoteWebDriver(new Uri("https://hub.screener.io:443/wd/hub"), capabilities);\n'})})})]}),"\n",(0,n.jsx)(s.h4,{id:"sauce-visual-commands",children:"Sauce Visual Commands"}),"\n",(0,n.jsx)(s.p,{children:"In your test script, add the below commands, in this order:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Add the ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/commands-options/#init-command",children:(0,n.jsx)(s.code,{children:"@visual.init"})})," command to initialize your Visual test and add a name for it."]}),"\n",(0,n.jsxs)(s.li,{children:["Add the ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/commands-options/#snapshot-command",children:(0,n.jsx)(s.code,{children:"@visual.snapshot"})})," command in the places where you want to capture a visual snapshot."]}),"\n"]}),"\n",(0,n.jsxs)(r.A,{defaultValue:"JS/WebdriverIO",values:[{label:"JS/WebdriverIO",value:"JS/WebdriverIO"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,n.jsx)(l.A,{value:"JS/WebdriverIO",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"it('should take snapshot', () => {\nbrowser.url('https://screener.io')\nbrowser.execute('/*@visual.init*/', 'My Visual Test')\nbrowser.execute('/*@visual.snapshot*/', 'Home')\n})\n"})})}),(0,n.jsx)(l.A,{value:"Java",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'public void simpleTest() {\n  WebDriver driver = this.getWebDriver();\n  driver.get("https://screener.io");\n  JavascriptExecutor js = (JavascriptExecutor) driver;\n  js.executeScript("/*@visual.init*/", "My Visual Test");\n  js.executeScript("/*@visual.snapshot*/", "Home");\n}\n'})})}),(0,n.jsx)(l.A,{value:"Python",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:"def test_take_snapshot(self):\n   self.driver.get('https://screener.io')\n   self.driver.execute_script('/*@visual.init*/', 'My Visual Test')\n   self.driver.execute_script('/*@visual.snapshot*/', 'Home')\n"})})}),(0,n.jsx)(l.A,{value:"Ruby",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rb",children:"it 'should take snapshot' do\n  driver.navigate.to('https://screener.io')\n  driver.execute_script('/*@visual.init*/', 'My Visual Test')\n  driver.execute_script('/*@visual.snapshot*/', 'Home')\nend\n"})})}),(0,n.jsx)(l.A,{value:"C#",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'static void test() {\n  driver.Navigate().GoToUrl("https://screener.io");\n  IJavaScriptExecutor js = (IJavaScriptExecutor)driver;\n  js.ExecuteScript("/*@visual.init*/", "My Visual Test");\n  js.ExecuteScript("/*@visual.snapshot*/", "Home");\n}\n'})})})]}),"\n",(0,n.jsx)(s.h3,{id:"run-test",children:"Run Test"}),"\n",(0,n.jsx)(s.p,{children:"From your terminal or IDE, run your test."}),"\n",(0,n.jsx)(s.h3,{id:"view-results",children:"View Results"}),"\n",(0,n.jsxs)(s.p,{children:["Go your Visual Testing Dashboard (Sauce Labs ",(0,n.jsx)(s.strong,{children:"Visual Testing"})," > ",(0,n.jsx)(s.strong,{children:"Log in to Visual"}),") to confirm that your test is running. It should take a few minutes to complete."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(a,{children:[(0,n.jsxs)("summary",{children:["Click ",(0,n.jsx)("strong",{children:"Show Logs"})," > ",(0,n.jsx)("strong",{children:"View Logs on Sauce Labs"})," to see your ",(0,n.jsx)("a",{href:"/test-results",children:"test results"})," on Sauce Labs."]}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-view-logs.png"),alt:"Visual E2E Quickstart accept state",width:"205"}),(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-view-on-sauce.png"),alt:"Visual E2E Quickstart accept state",width:"250"})]})}),"\n",(0,n.jsx)(s.h3,{id:"accept-baseline",children:"Accept Baseline"}),"\n",(0,n.jsxs)(s.p,{children:["This first test will be labeled as \"failed\" because there's no existing baseline to compare it against. To resolve this, you'll need to review and accept the new snapshots as your baseline. Go to the ",(0,n.jsx)(s.a,{href:"#accept-baseline-1",children:"Quickstart > Accept Baseline"})," to see an example of how to do this."]}),"\n",(0,n.jsx)(s.h3,{id:"apply-ui-changes",children:"Apply UI Changes"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"In your website development environment, apply a simple UI change, such as changing the font color or removing an image."}),"\n",(0,n.jsx)(s.li,{children:"From your IDE or terminal, run your test again."}),"\n",(0,n.jsxs)(s.li,{children:["Go to your Visual Testing Dashboard, then click the changed state and ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/workflow/change-details",children:"review the change details"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"quickstart-with-sample-webdriver-tests",children:"Quickstart with Sample WebDriver Tests"}),"\n",(0,n.jsxs)(s.p,{children:["Don't have WebDriver, but want to try? Follow the steps below to install our sample project and run your first WebDriver test with E2E Testing. In this example, you'll run a simple automated test on our demo website, ",(0,n.jsx)(s.a,{href:"http://saucedemo.com",children:"Swag Labs"}),"."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["From your terminal, navigate to your machine's ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Home_directory",children:"home directory"}),", then clone the ",(0,n.jsx)(s.a,{href:"https://github.com/luishernandezv/visual-e2e",children:"Visual E2E Quickstart repository"}),":"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git clone\xa0https://github.com/luishernandezv/visual-e2e\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"Navigate to your project directory:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd visual-e2e\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Install project dependencies:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,n.jsx)(s.h3,{id:"link-your-sauce-labs-account-1",children:"Link Your Sauce Labs Account"}),"\n",(0,n.jsxs)(s.p,{children:["Set your Sauce Labs username, Sauce Labs access key, and Visual Testing Screener API key as ",(0,n.jsx)(s.a,{href:"/basics/environment-variables",children:"environment variables"})," to avoid having to enter them with each command and to protect them from exposure in your tests."]}),"\n",(0,n.jsxs)(r.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows Powershell",value:"Windows Powershell"}],children:[(0,n.jsxs)(l.A,{value:"Mac/Linux",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export SAUCE_USERNAME="Replace with your Sauce Labs username"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export SAUCE_ACCESS_KEY="Replace with your Sauce Labs access key"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export SCREENER_API_KEY="Replace with your Screener API key"\n'})})]}),(0,n.jsxs)(l.A,{value:"Windows Powershell",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'$Env:SAUCE_USERNAME = "Replace with your Sauce Labs username"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'$Env:SAUCE_ACCESS_KEY = "Replace with your Sauce Labs access key"\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'$Env:SCREENER_API_KEY = "Replace with your Screener API key"\n'})})]})]}),"\n",(0,n.jsx)(s.h3,{id:"choose-sample-test",children:"Choose Sample Test"}),"\n",(0,n.jsx)(s.p,{children:"Choose which test in the project you'd like to run:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsxs)(s.a,{href:"https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js",children:[(0,n.jsx)(s.strong,{children:"simple-test.js"})," (WebdriverIO only)"]})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.a,{href:"https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js",children:[(0,n.jsx)(s.strong,{children:"simple-mocha-test.js"})," (WebdriverIO with Mocha)"]})," (",(0,n.jsx)(s.a,{href:"https://mochajs.org/",children:"Mocha"})," required)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.a,{href:"https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js",children:[(0,n.jsx)(s.strong,{children:"simple-mocha-test.js"})," (WebdriverIO with Jest)"]})," (",(0,n.jsx)(s.a,{href:"https://jestjs.io/",children:"Jest"})," required)"]}),"\n"]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"What's in the tests?"}),"To view a breakdown of what's happening in each test script, click on any of the WebDriver test links above and refer to the comments in the script. For example:",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"//Navigate to the test site\nawait browser.url('http://saucedemo.com')\n"})}),"At a high level, each test script:",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Adds your Sauce Labs credentials, test capabilities (e.g., project name), Visual E2E Testing commands."}),"\n",(0,n.jsxs)(s.li,{children:["Launches the ",(0,n.jsx)(s.a,{href:"http://saucedemo.com",children:"Sauce Labs demo website"})," in a browser and logs in."]}),"\n",(0,n.jsx)(s.li,{children:"Carries out a Visual E2E test session (i.e., taking UI snapshots)."}),"\n",(0,n.jsx)(s.li,{children:"Ends session."}),"\n"]})]}),"\n",(0,n.jsx)(s.h3,{id:"run-test-1",children:"Run Test"}),"\n",(0,n.jsx)(s.p,{children:"In your terminal, execute the run command corresponding to the test framework you chose in the previous step."}),"\n",(0,n.jsxs)(r.A,{defaultValue:"WebdriverIO",values:[{label:"WebdriverIO",value:"WebdriverIO"},{label:"WebdriverIO + Mocha",value:"WebdriverIO + Mocha"},{label:"WebdriverIO + Jest",value:"WebdriverIO + Jest"}],children:[(0,n.jsx)(l.A,{value:"WebdriverIO",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run webdriverio\n"})})}),(0,n.jsx)(l.A,{value:"WebdriverIO + Mocha",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run test:mocha\n"})})}),(0,n.jsx)(l.A,{value:"WebdriverIO + Jest",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run test:jest\n"})})})]}),"\n",(0,n.jsx)(s.h3,{id:"view-results-1",children:"View Results"}),"\n",(0,n.jsxs)(s.p,{children:["Go your Visual Testing Dashboard (Sauce Labs > ",(0,n.jsx)(s.strong,{children:"Visual Testing"})," > ",(0,n.jsx)(s.strong,{children:"Log in to Visual"}),") to confirm that your test is running."]}),"\n",(0,n.jsxs)(s.p,{children:["You'll see a new project under the name ",(0,n.jsx)(s.strong,{children:"sauce-demos/swag-labs"}),", plus a new ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/workflow/baseline-branch/",children:"branch"})," called ",(0,n.jsx)(s.strong,{children:"default"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-all-projects.png"),alt:"Visual E2E Quickstart running test",width:"300"})]}),"\n",(0,n.jsx)(s.p,{children:"The test should take a few minutes to complete."}),"\n",(0,n.jsx)(s.h3,{id:"accept-baseline-1",children:"Accept Baseline"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:'This first test will be labeled as "failed" because there\'s no existing baseline to compare it against. To resolve this, review and accept the new snapshots as your baseline:'}),"\n",(0,n.jsxs)(s.li,{children:["From your Dashboard, click ",(0,n.jsx)(s.strong,{children:"Review 2 New"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-review2New.png"),alt:"Visual E2E review new state",width:"400"})]}),"\n",(0,n.jsxs)(s.li,{children:["Click on the first snapshot, ",(0,n.jsx)(s.strong,{children:"Swag Labs: Login"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-changed-states.png"),alt:"Visual E2E Quickstart first state",width:"500"})]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"New"})," > ",(0,n.jsx)(s.strong,{children:"Accept"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-new-accept.png"),alt:"Visual E2E Quickstart running test",width:"500"})]}),"\n",(0,n.jsxs)(s.li,{children:["Click on the second snapshot (",(0,n.jsx)(s.strong,{children:"Swag Labs: Products"}),"), then ",(0,n.jsx)(s.strong,{children:"New"})," > ",(0,n.jsx)(s.strong,{children:"Accept"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Return to your Visual Testing Dashboard. The two states should now be labeled as ",(0,n.jsx)(s.strong,{children:"Accepted"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-accepted.png"),alt:"Visual E2E Quickstart accepted states",width:"450"})]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(a,{children:[(0,n.jsxs)("summary",{children:["Click ",(0,n.jsx)("strong",{children:"Show Logs"})," > ",(0,n.jsx)("strong",{children:"View Logs on Sauce Labs"})," to see your ",(0,n.jsx)("a",{href:"/test-results",children:"test results"})," on Sauce Labs."]}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-view-logs.png"),alt:"Visual E2E Quickstart accept state",width:"205"}),(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-view-on-sauce.png"),alt:"Visual E2E Quickstart accept state",width:"250"})]})}),"\n",(0,n.jsx)(s.h3,{id:"apply-ui-changes-1",children:"Apply UI Changes"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Next, we'll run a test containing a UI change to the Swag Labs website in which a button color changes from red to green. The change is pre-written into the test scripts and will activate once you execute the run command corresponding to the framework you used in the ",(0,n.jsx)(s.a,{href:"#run-test-1",children:"Run Test"})," step:"]}),"\n"]}),"\n",(0,n.jsxs)(r.A,{defaultValue:"WebdriverIO",values:[{label:"WebdriverIO",value:"WebdriverIO"},{label:"WebdriverIO + Mocha",value:"WebdriverIO + Mocha"},{label:"WebdriverIO + Jest",value:"WebdriverIO + Jest"}],children:[(0,n.jsx)(l.A,{value:"WebdriverIO",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run webdriverio-changes\n"})})}),(0,n.jsx)(l.A,{value:"WebdriverIO + Mocha",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run test:mocha-changes\n"})})}),(0,n.jsx)(l.A,{value:"WebdriverIO + Jest",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run test:jest-changes\n"})})})]}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:['On your Visual Testing Dashboard, you should see a new test running under the same project and branch. Because an element changed in one of your baseline snapshots, the test will be labeled as "failed". To resolve this, you\'ll need to review and accept them:',"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Review 1 Changed"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-changed-state.png"),alt:"Visual E2E Quickstart changed state",width:"500"})]}),"\n",(0,n.jsxs)(s.li,{children:["You'll see that the login button color has changed from red to green. Click ",(0,n.jsx)(s.strong,{children:"Changed"})," > ",(0,n.jsx)(s.strong,{children:"Accept"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,t.A)("img/visual/e2e-quickstart-accept.png"),alt:"Visual E2E Quickstart accept state",width:"450"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Return to your Visual Testing Dashboard. The two states should now be labeled as ",(0,n.jsx)(s.strong,{children:"Accepted"}),". If you run this test again using the ",(0,n.jsxs)(s.a,{href:"#apply-ui-changes",children:["run commands under ",(0,n.jsx)(s.strong,{children:"Apply UI Changes"})]}),", the result will be labeled ",(0,n.jsx)(s.strong,{children:"Success"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For each build, you should receive an ",(0,n.jsx)(s.a,{href:"/visual/notifications/",children:"email summary"})," indicating the pass/fail status, delivered to the address associated with your Sauce Labs account."]}),"\n",(0,n.jsx)(s.h2,{id:"optional-next-steps",children:"Optional Next Steps"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Learn more about the Visual E2E Testing ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/workflow/review-workflow/",children:"review workflow"})," and ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/commands-options",children:"commands"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["See ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/code-examples",children:"full test script examples"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Add more ",(0,n.jsx)(s.a,{href:"https://github.com/screener-io/screener-storybook#config-options",children:"test configuration options"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Set up continuous visual testing by ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/integrations/continuous-integration",children:"integrating Visual E2E Testing into your CI"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Confirm that your WebDriver test scripts use ",(0,n.jsx)(s.a,{href:"/dev/w3c-webdriver-capabilities/",children:"W3C WebDriver capabilities"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Confirm that the browsers in your tests are ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/supported-browsers",children:"supported by Sauce Labs"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Try out these useful WebDriver settings in your tests:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Timeouts"}),": If you're using several ",(0,n.jsx)(s.a,{href:"/visual/e2e-testing/commands-options/#visual-e2e-commands",children:"visual assertions"})," in your test, you may need to increase the ",(0,n.jsx)(s.code,{children:"timeout"})," value in your configuration to help with test stability. A single assertion can take up to 45 seconds. If you have a WebdriverIO test with three ",(0,n.jsxs)(s.a,{href:"/visual/e2e-testing/commands-options/#snapshot-command",children:["snapshots (",(0,n.jsx)(s.code,{children:"/*@visual.snapshot*/"}),")"]}),", for example, you'd need to ",(0,n.jsxs)(s.a,{href:"https://webdriver.io/docs/timeouts/#framework-related-timeouts",children:["set your ",(0,n.jsx)(s.code,{children:"timeout"})," value"]})," above 180000 milliseconds (3 mins) to prevent your test from failing."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Advanced Debugging"}),": To enable more granular debugging details, add ",(0,n.jsx)(s.a,{href:"/dev/test-configuration-options/#extendeddebugging",children:(0,n.jsx)(s.code,{children:"extendedDebugging"})})," to your test capabilities:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:"'sauce:options': {\n  username: process.env.SAUCE_USERNAME,\n  accessKey: process.env.SAUCE_ACCESS_KEY,\n  extendedDebugging: true,\n},\n"})}),"\n"]}),"\n"]})]})}function v(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,s,a)=>{a.d(s,{A:()=>r});a(96540);var n=a(18215);const i={tabItem:"tabItem_Ymn6"};var t=a(74848);function r(e){let{children:s,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:a,children:s})}},11470:(e,s,a)=>{a.d(s,{A:()=>f});var n=a(96540),i=a(18215),t=a(23104),r=a(56347),l=a(205),c=a(57485),o=a(31682),u=a(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:i}}=e;return{value:s,label:a,attributes:n,default:i}}))}(a);return function(e){const s=(0,o.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function p(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function v(e){let{queryString:s=!1,groupId:a}=e;const i=(0,r.W6)(),t=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,c.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(i.location.search);s.set(t,e),i.replace({...i.location,search:s.toString()})}),[t,i])]}function b(e){const{defaultValue:s,queryString:a=!1,groupId:i}=e,t=h(e),[r,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[o,d]=v({queryString:a,groupId:i}),[b,x]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[i,t]=(0,u.Dv)(a);return[i,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:i}),g=(()=>{const e=o??b;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,t]),tabValues:t}}var x=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function m(e){let{className:s,block:a,selectedValue:n,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),u=e=>{const s=e.currentTarget,a=c.indexOf(s),i=l[a].value;i!==n&&(o(s),r(i))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},s),children:l.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:d,onClick:u,...t,className:(0,i.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function y(e){let{lazy:s,children:a,selectedValue:i}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function w(e){const s=b(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(m,{...e,...s}),(0,j.jsx)(y,{...e,...s})]})}function f(e){const s=(0,x.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(s))}},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>l});var n=a(96540);const i={},t=n.createContext(i);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);