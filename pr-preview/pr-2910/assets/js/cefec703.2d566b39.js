"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[37753],{54894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(74848),a=n(28453);n(86025),n(11470),n(19365);const r={id:"sharing-test-results",title:"Sharing Test Results",sidebar_label:"Sharing Test Results"},i=void 0,l={id:"test-results/sharing-test-results",title:"Sharing Test Results",description:"The ability to share test results is currently only supported for virtual devices (VDC).",source:"@site/docs/test-results/sharing-test-results.md",sourceDirName:"test-results",slug:"/test-results/sharing-test-results",permalink:"/sauce-docs/pr-preview/pr-2910/test-results/sharing-test-results",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/test-results/sharing-test-results.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724791745e3,frontMatter:{id:"sharing-test-results",title:"Sharing Test Results",sidebar_label:"Sharing Test Results"},sidebar:"docs",previous:{title:"Viewing Test Results",permalink:"/sauce-docs/pr-preview/pr-2910/test-results/viewing-test-results"},next:{title:"Setting Test Statuses",permalink:"/sauce-docs/pr-preview/pr-2910/test-results/test-status"}},o={},c=[{value:"Building Sharable Links",id:"building-sharable-links",level:2},{value:"Linking to Tests that Require a Login to View",id:"linking-to-tests-that-require-a-login-to-view",level:3},{value:"Linking to Tests that Don&#39;t Require a Login to View",id:"linking-to-tests-that-dont-require-a-login-to-view",level:3},{value:"Example - Python",id:"example---python",level:4},{value:"Example - Java",id:"example---java",level:4},{value:"Example - Node.js",id:"example---nodejs",level:4},{value:"Example - C#",id:"example---c",level:4},{value:"Example - Ruby",id:"example---ruby",level:4},{value:"Support for Secondary Accounts",id:"support-for-secondary-accounts",level:2},{value:"Setting Your Test Links to Expire",id:"setting-your-test-links-to-expire",level:3},{value:"Embedding Test Results in HTML Pages",id:"embedding-test-results-in-html-pages",level:2},{value:"Authentication Required",id:"authentication-required",level:3},{value:"Embedding Pages for EU DC",id:"embedding-pages-for-eu-dc",level:3},{value:"Embedding Full Test Pages",id:"embedding-full-test-pages",level:3},{value:"Embedding the Video Player",id:"embedding-the-video-player",level:3},{value:"Optional Parameters",id:"optional-parameters",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"VDC Only",type:"note",children:(0,s.jsx)(t.p,{children:"The ability to share test results is currently only supported for virtual devices (VDC)."})}),"\n",(0,s.jsxs)(t.p,{children:["Once your test has run and generated a ",(0,s.jsx)(t.strong,{children:"Test Details"})," page, you have several options for sharing a link to that page with others."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["On Sauce Labs, in the left panel, click ",(0,s.jsx)(t.strong,{children:"Live"})," or ",(0,s.jsx)(t.strong,{children:"Automaed"}),", and then click ",(0,s.jsx)(t.strong,{children:"Test Results"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Test Results"})," page, click a test in the list to view the test details."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"Visibility"})," dropdown list, select a sharing option for the test results."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public"}),(0,s.jsx)(t.td,{children:"Everyone will be able to view the test results, and they may be listed on public web pages and indexed by search engines."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public Restricted"}),(0,s.jsx)(t.td,{children:"Everyone will be able to view the test results, but only you will have log access. By restricting access to the raw Selenium log and the job log, you can prevent sensitive information, such as passwords, from being visible to others."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Private"}),(0,s.jsx)(t.td,{children:"Only you will be able to view the test results."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Team"}),(0,s.jsx)(t.td,{children:"All members of your team will be able to view the test results."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Share"}),(0,s.jsx)(t.td,{children:"Only people who have the link to the test will be able to view the test results."})]})]})]}),"\n",(0,s.jsx)(t.admonition,{title:"Manually Share a Link",type:"tip",children:(0,s.jsx)(t.p,{children:"You can also manually build links to Test Results pages and set authentication for accessing them using the methods described in Building Sharable Links to Test Results. To manually share the test results, copy and send the URL of the Test Results page."})}),"\n",(0,s.jsx)(t.h2,{id:"building-sharable-links",children:"Building Sharable Links"}),"\n",(0,s.jsx)(t.p,{children:"You can generate a sharable link to your test results that limits who can view the results by requiring a login or authentication (auth) token. These links will allow recipients to view the results of that test, but they will not appear on their dashboard."}),"\n",(0,s.jsxs)(t.p,{children:["You can also change the visibility of a test (e.g., Public, Private, or Team) directly on the ",(0,s.jsx)(t.strong,{children:"Test Results"})," page."]}),"\n",(0,s.jsx)(t.p,{children:"When generating a shareable link, you'll need to know your specific data center. All examples on this page use the US West 1 data center endpoint, app.saucelabs.com. If you're using a different data center, such as EU Central 1, your link should be edited accordingly:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://app.eu-central-1.saucelabs.com/tests/YOUR_TEST_ID).\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This solution is not supported for RDC."})}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/basics/data-center-endpoints",children:"Data Center Endpoints"})," for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"linking-to-tests-that-require-a-login-to-view",children:"Linking to Tests that Require a Login to View"}),"\n",(0,s.jsx)(t.p,{children:"You can create links to your tests that will only work if you're logged in with the account that ran the test."}),"\n",(0,s.jsx)(t.p,{children:"In Selenium, when a client requests a new browser session, the server returns a session ID, which is used to identify that session throughout the test. The session ID is stored as a member variable of the instantiated Selenium object and named sessionId or session_id, depending on the client library. Sauce uses that session ID as the test ID for accessing test results."}),"\n",(0,s.jsxs)(t.p,{children:["To directly access a specific job, you will first need to note the session ID locally, usually by writing it to a log file. You can then use it to create a URL with the following format and replace ",(0,s.jsx)(t.code,{children:"YOUR_TEST_ID"})," with the session ID:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.saucelabs.com/tests/YOUR_TEST_ID\n"})}),"\n",(0,s.jsx)(t.p,{children:"As previously mentioned, all examples on this page use the US West 1 data center endpoint. If you're using a different data center, such as EU Central 1, your link should be edited accordingly:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.eu-central-1.saucelabs.com/tests/YOUR_TEST_ID\n"})}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/basics/data-center-endpoints",children:"Data Center Endpoints"})," for more info."]}),"\n",(0,s.jsx)(t.h3,{id:"linking-to-tests-that-dont-require-a-login-to-view",children:"Linking to Tests that Don't Require a Login to View"}),"\n",(0,s.jsx)(t.p,{children:"You can also create sharable links that are based on authentication (auth) tokens, meaning the recipient won't have to log in and use your credentials."}),"\n",(0,s.jsx)(t.p,{children:"Auth tokens are generated on a per-test basis and grant viewers access using an hmac-based algorithm. You can also find hmac implementations for different programming languages."}),"\n",(0,s.jsx)(t.p,{children:"The digest algorithm to use is MD5. The message and key used to generate the token should be the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Key: ",(0,s.jsx)(t.code,{children:"SAUCE_USERNAME"}),":",(0,s.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})]}),"\n",(0,s.jsxs)(t.li,{children:["Message: ",(0,s.jsx)(t.code,{children:"YOUR_TEST_ID"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example---python",children:"Example - Python"}),"\n",(0,s.jsxs)(t.p,{children:["The example below demonstrates how to generate the token in a Python interpreter for a test with the ",(0,s.jsx)(t.code,{children:"id"}),": ",(0,s.jsx)(t.code,{children:"5f9fef27854ca50a3c132ce331cb6034"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'>>> import hmac\n>>> from hashlib import md5\n>>> hmac.new(b"SAUCE_USERNAME:SAUCE_ACCESS_KEY", b"5f9fef27854ca50a3c132ce331cb6034", md5).hexdigest()\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Once the auth token has been obtained, you can use it to build a link in this format: ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/tests/YOUR_TEST_ID?auth=AUTH_TOKEN",children:"https://app.saucelabs.com/tests/YOUR_TEST_ID?auth=AUTH_TOKEN"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"example---java",children:"Example - Java"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'package com.saucelabs.demo;\n\nimport javax.crypto.Mac;\nimport javax.crypto.spec.SecretKeySpec;\n\nimport java.security.InvalidKeyException;\nimport java.security.NoSuchAlgorithmException;\n\nimport static java.nio.charset.StandardCharsets.US_ASCII;\n\npublic class SauceShareableLink {\n\n  private static final String SAUCE_USERNAME = System.getenv("SAUCE_USERNAME");\n  private static final String SAUCE_ACCESS_KEY = System.getenv("SAUCE_ACCESS_KEY");\n  private static final String KEY = String.format("%s:%s", SAUCE_USERNAME, SAUCE_ACCESS_KEY);\n  private static final String SAUCE_TESTS_URL = "https://app.eu-central-1.saucelabs.com/tests";\n\n  public static String getShareableLink(String sauceJobId) throws NoSuchAlgorithmException, InvalidKeyException {\n    SecretKeySpec sks = new SecretKeySpec(KEY.getBytes(US_ASCII), "HmacMD5");\n    Mac mac = Mac.getInstance("HmacMD5");\n    mac.init(sks);\n    byte[] result = mac.doFinal(sauceJobId.getBytes(US_ASCII));\n    StringBuilder hash = new StringBuilder();\n    for (byte b : result) {\n      String hex = Integer.toHexString(0xFF & b);\n      if (hex.length() == 1) {\n        hash.append(\'0\');\n      }\n      hash.append(hex);\n    }\n    String digest = hash.toString();\n    return String.format("%s/%s?auth=%s", SAUCE_TESTS_URL, sauceJobId, digest);\n  }\n\n  public static void main(String[] args) {\n    try {\n      String sauceJobId = "c5eb67f00e124ba0a46f2b7869bd418c";\n      String shareableLink = SauceShareableLink.getShareableLink(sauceJobId);\n      System.out.println(shareableLink);\n    } catch (NoSuchAlgorithmException | InvalidKeyException e) {\n      // Handle appropriately according to your use case\n      e.printStackTrace();\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example---nodejs",children:"Example - Node.js"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const crypto = require('crypto')\nconst sessionId = 'f65a1ee87a77410189aba40f48ac1223'\nconst addDate = process.argv.includes('addDate')\nconst date = new Date()\nconst addedDays = date.setDate(date.getDate())\nconst newDate = new Date(addedDays).toISOString().slice(0, 10)\nconst dateSecret = addDate ? `:${newDate}` : ''\nconst secret = `${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}${dateSecret}`\nconst token = crypto.createHmac('md5', secret).update(sessionId).digest('hex')\nconst usUrl = `https://app.saucelabs.com/tests/${sessionId}?auth=${token}`\nconst euUrl = `https://app.eu-central-1.saucelabs.com/tests/${sessionId}?auth=${token}`\nconsole.log('usUrl = ', usUrl)\nconsole.log('euUrl = ', euUrl)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"example---c",children:"Example - C#"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:'using System;\nusing System.Security.Cryptography;\nusing System.Text;\n\nnamespace SauceLabsShareableLink\n{\n    class Program\n    {\n        private static string SAUCE_USERNAME = Environment.GetEnvironmentVariable("SAUCE_USERNAME");\n        private static string SAUCE_ACCESS_KEY = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");\n        private static string KEY = string.Format("{0}:{1}", SAUCE_USERNAME, SAUCE_ACCESS_KEY);\n        private static string SAUCE_TESTS_URL = "https://app.eu-central-1.saucelabs.com/tests";\n\n        static void Main(string[] args)\n        {\n            string sauceJobId = "c5eb67f00e124ba0a46f2b7869bd418c";\n            string shareableLink = GetShareableLink(sauceJobId);\n\n            Console.WriteLine(shareableLink);\n            Console.ReadKey();\n        }\n\n        public static string GetShareableLink(string sauceJobId)\n        {\n            var data = Encoding.ASCII.GetBytes(sauceJobId);\n            var key = Encoding.ASCII.GetBytes(KEY);\n            var hmac = new HMACMD5(key);\n            var hashBytes = hmac.ComputeHash(data);\n\n            string digest = BitConverter.ToString(hashBytes).Replace("-", "").ToLower();\n            string link = string.Format("{0}/{1}?auth={2}", SAUCE_TESTS_URL, sauceJobId, digest);\n\n            return link;\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example---ruby",children:"Example - Ruby"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rb",children:"require 'openssl'\n\nkey = \"#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_ACCESS_KEY']}\"\njob_id = '1409ca8f0c2a4461a3d2c91f671f7bef'\nauth = OpenSSL::HMAC.hexdigest(\"md5\", key, job_id)\nurl = \"https://app.saucelabs.com/tests/#{job_id}?auth=#{auth}\"\n"})}),"\n",(0,s.jsx)(t.h2,{id:"support-for-secondary-accounts",children:"Support for Secondary Accounts"}),"\n",(0,s.jsx)(t.p,{children:"If you want to authenticate as another user, just prefix the auth token with your user name, followed by a colon."}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.saucelabs.com/tests/YOUR_TEST_ID?auth=SAUCE_USERNAME:AUTH_TOKEN\n"})}),"\n",(0,s.jsx)(t.h3,{id:"setting-your-test-links-to-expire",children:"Setting Your Test Links to Expire"}),"\n",(0,s.jsx)(t.p,{children:"You can extend the links generated with authentication tokens to make them work temporarily for one day (the day the URL is generated) or a specific hour during that day, based on the parameters that you set."}),"\n",(0,s.jsxs)(t.p,{children:["During the ",(0,s.jsx)(t.code,{children:"hmac"})," generation, set the key like this: ",(0,s.jsx)(t.code,{children:"SAUCE_USERNAME"}),":",(0,s.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"}),":",(0,s.jsx)(t.code,{children:"YOUR_DATE_RANGE"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The date range can take two formats: ",(0,s.jsx)(t.code,{children:"YYYY-MM-DD-HH"})," and ",(0,s.jsx)(t.code,{children:"YYYY-MM-DD"}),". These should be set in UTC time and will only work during the date or hour you set."]}),"\n",(0,s.jsx)(t.h2,{id:"embedding-test-results-in-html-pages",children:"Embedding Test Results in HTML Pages"}),"\n",(0,s.jsx)(t.h3,{id:"authentication-required",children:"Authentication Required"}),"\n",(0,s.jsxs)(t.p,{children:["Both of these configurations will only work for browsers logged in using your account, but you can use authentication tokens to make this work for anonymous viewers. For more information about creating authentication tokens, see ",(0,s.jsx)(t.a,{href:"/test-results/sharing-test-results#linking-to-tests-that-dont-require-a-login-to-view",children:"Linking to Tests that Don't Require a Login to View"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.saucelabs.com/video-embed/YOUR_JOB_ID.js?auth=AUTH_TOKEN\n"})}),"\n",(0,s.jsx)(t.h3,{id:"embedding-pages-for-eu-dc",children:"Embedding Pages for EU DC"}),"\n",(0,s.jsxs)(t.p,{children:["To embed the page for EU DC test, you need to use the ",(0,s.jsx)(t.code,{children:"app.eu-central-1.saucelabs.com"})," domain."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.[eu-central-1|us-east-1].saucelabs.com/video-embed/YOUR_JOB_ID.js?auth=AUTH_TOKEN\n"})}),"\n",(0,s.jsx)(t.h3,{id:"embedding-full-test-pages",children:"Embedding Full Test Pages"}),"\n",(0,s.jsx)(t.p,{children:"You can embed test pages in CI test results or other test reports. Using the following format, add the HTML to any page where you need to embed test results, replacing YOUR_JOB_ID with the ID of the job you want:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.saucelabs.com/job-embed/YOUR_JOB_ID.js\n"})}),"\n",(0,s.jsx)(t.h3,{id:"embedding-the-video-player",children:"Embedding the Video Player"}),"\n",(0,s.jsx)(t.p,{children:"You can also embed videos in CI test results or other test reports. Using the format below, add the HTML to any page where you want to embed job videos, replacing YOUR_JOB_ID with the ID of the job you want:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.saucelabs.com/video-embed/YOUR_JOB_ID.js\n"})}),"\n",(0,s.jsx)(t.h3,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(t.p,{children:'By default, an embedded test iframe has a width of 1024px and a height of 768px. If you want to change the iframe size, use the "width" and "height" query parameters.'}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"https://app.saucelabs.com/video-embed/YOUR_JOB_ID.js?width=100&height=100\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(18215);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var s=n(96540),a=n(18215),r=n(23104),i=n(56347),l=n(205),o=n(57485),c=n(31682),d=n(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=g({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function S(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==s&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(S,{...e,...t}),(0,j.jsx)(f,{...e,...t})]})}function v(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);