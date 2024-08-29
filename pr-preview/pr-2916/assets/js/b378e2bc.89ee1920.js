"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[45591],{46367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(74848),s=t(28453),r=(t(86025),t(11470)),o=t(19365);const i={id:"examples",title:"Examples",sidebar_label:"Examples",description:"Examples for both CDP API and BiDi API usage"},l=void 0,c={id:"web-apps/automated-testing/cdp-bidi/examples",title:"Examples",description:"Examples for both CDP API and BiDi API usage",source:"@site/docs/web-apps/automated-testing/cdp-bidi/examples.md",sourceDirName:"web-apps/automated-testing/cdp-bidi",slug:"/web-apps/automated-testing/cdp-bidi/examples",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/cdp-bidi/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/cdp-bidi/examples.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"examples",title:"Examples",sidebar_label:"Examples",description:"Examples for both CDP API and BiDi API usage"},sidebar:"docs",previous:{title:"Using CDP / BiDi",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/cdp-bidi"},next:{title:"FAQ",permalink:"/sauce-docs/pr-preview/pr-2916/web-apps/automated-testing/web-automated-faq"}},d={},u=[{value:"CDP API",id:"cdp-api",level:2},{value:"Set Cookie",id:"set-cookie",level:3},{value:"Basic Auth",id:"basic-auth",level:3},{value:"BiDi API",id:"bidi-api",level:2},{value:"Console Logs",id:"console-logs",level:3},{value:"Network Interception",id:"network-interception",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The (Selenium) examples below are assuming that all prerequisites are met and you have successfully ",(0,a.jsx)(n.a,{href:"/web-apps/automated-testing/cdp-bidi/#1-using-selenium",children:"initiated the webdriver"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"cdp-api",children:"CDP API"}),"\n",(0,a.jsxs)(n.p,{children:["The CDP API provides automatically generated classes (based on CDP domains) and bindings to respective methods and events.\nBelow two examples, are listed. The full reference is available on the ",(0,a.jsx)(n.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools Protocol"})," website"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Selenium has stated in their reference that they will eventually move away from CDP, hence they suggest using the agnostic BiDi API, which abstracts away the implementation details of CDP."})}),"\n",(0,a.jsx)(n.h3,{id:"set-cookie",children:"Set Cookie"}),"\n",(0,a.jsx)(n.p,{children:"By setting cookies (e.g. for user preferences), you can test how your website behaves with different configurations."}),"\n",(0,a.jsxs)(r.A,{groupId:"lang-ex",defaultValue:"Python",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"WebdriverIO",value:"WebdriverIO"}],children:[(0,a.jsx)(o.A,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'devTools = ((HasDevTools) driver).getDevTools();\ndevTools.createSession();\n\ndevTools.send(\n    Network.setCookie(\n        "cheese",\n        "gouda",\n        Optional.empty(),\n        Optional.of("www.selenium.dev"),\n        Optional.empty(),\n        Optional.of(true),\n        Optional.empty(),\n        Optional.empty(),\n        Optional.empty(),\n        Optional.empty(),\n        Optional.empty(),\n        Optional.empty(),\n        Optional.empty(),\n        Optional.empty()));\n'})})}),(0,a.jsx)(o.A,{value:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'async with driver.bidi_connection() as connection:\n    execution = connection.devtools.network.set_cookie(\n        name="cheese",\n        value="gouda",\n        domain="www.selenium.dev",\n        secure=True\n    )\n\n    await connection.session.execute(execution)\n'})})}),(0,a.jsx)(o.A,{value:"WebdriverIO",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function setCookie() {\n  await browser.setCookies([\n    {\n      name: "cheese",\n      value: "gouda",\n      domain: "www.selenium.dev",\n      secure: true,\n    },\n  ]);\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["See also ",(0,a.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/cdp_api/#set-cookie",children:"alternative implementations"})]}),"\n",(0,a.jsx)(n.h3,{id:"basic-auth",children:"Basic Auth"}),"\n",(0,a.jsx)(n.p,{children:"Basic Auth allows you to test websites that have basic access authentication implemented."}),"\n",(0,a.jsxs)(r.A,{groupId:"lang-ex",defaultValue:"Python",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"WebdriverIO",value:"WebdriverIO"}],children:[(0,a.jsx)(o.A,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'devTools = ((HasDevTools) driver).getDevTools();\ndevTools.createSession();\ndevTools.send(Network.enable(Optional.of(100000), Optional.of(100000), Optional.of(100000)));\n\nString encodedAuth = Base64.getEncoder().encodeToString("admin:admin".getBytes());\nMap<String, Object> headers = ImmutableMap.of("Authorization", "Basic " + encodedAuth);\n\ndevTools.send(Network.setExtraHTTPHeaders(new Headers(headers)));\n'})})}),(0,a.jsx)(o.A,{value:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"async with driver.bidi_connection() as connection:\n    await connection.session.execute(connection.devtools.network.enable())\n\n    credentials = base64.b64encode(\"admin:admin\".encode()).decode()\n    auth = {'authorization': 'Basic ' + credentials}\n\n    await connection.session.execute(connection.devtools.network.set_extra_http_headers(Headers(auth)))\n"})})}),(0,a.jsx)(o.A,{value:"WebdriverIO",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function myTest() {\n  const encodedAuth = Buffer.from("admin:admin").toString("base64");\n  const headers = { Authorization: `Basic ${encodedAuth}` };\n\n  await browser.url("http://localhost:3000/api/endpoint?headers=" + JSON.stringify(headers));\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["See also ",(0,a.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/cdp_api/#basic-authentication",children:"alternative implementations"})]}),"\n",(0,a.jsx)(n.h2,{id:"bidi-api",children:"BiDi API"}),"\n",(0,a.jsxs)(n.p,{children:["While the BiDi API is currently implemented with CDP, the same bindings are compatible with the WebDriver-BiDi Protocol, which is being implemented on a feature basis. See the full reference on the ",(0,a.jsx)(n.a,{href:"https://w3c.github.io/webdriver-bidi",children:"WebDriver-BiDi Protocol"})," website"]}),"\n",(0,a.jsx)(n.h3,{id:"console-logs",children:"Console Logs"}),"\n",(0,a.jsx)(n.p,{children:"Listening to console events by type / level allows you to process them further."}),"\n",(0,a.jsxs)(r.A,{groupId:"lang-ex",defaultValue:"Python",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"WebdriverIO",value:"WebdriverIO"}],children:[(0,a.jsx)(o.A,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"CopyOnWriteArrayList<String> messages = new CopyOnWriteArrayList<>();\n((HasLogEvents) driver).onLogEvent(consoleEvent(e -> messages.add(e.getMessages().get(0))));\n"})})}),(0,a.jsx)(o.A,{value:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"async with driver.bidi_connection() as session:\n        log = Log(driver, session)\n\n        async with log.add_listener(Console.ALL) as messages:\n"})})}),(0,a.jsx)(o.A,{value:"WebdriverIO",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function captureConsoleLogs() {\n  const listenerFunction = function (message) {\n    console.log("Console Log:", message);\n  };\n\n  await browser.call(() => {\n    console.addListener("all", listenerFunction);\n  });\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["See also ",(0,a.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/bidi_api/#console-logs-and-errors",children:"alternative implementations"})]}),"\n",(0,a.jsx)(n.h3,{id:"network-interception",children:"Network Interception"}),"\n",(0,a.jsx)(n.p,{children:"Network events can be intercepted for both requests and responses in order to consume or transform them."}),"\n",(0,a.jsxs)(r.A,{groupId:"lang-ex",defaultValue:"Python",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"WebdriverIO",value:"WebdriverIO"}],children:[(0,a.jsx)(o.A,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'CopyOnWriteArrayList<String> contentType = new CopyOnWriteArrayList<>();\n\ntry (NetworkInterceptor ignored =\n    new NetworkInterceptor(\n        driver,\n        (Filter)\n            next ->\n                req -> {\n                    HttpResponse res = next.execute(req);\n                    contentType.add(res.getHeader("Content-Type"));\n                    return res;\n                })) {\n'})})}),(0,a.jsx)(o.A,{value:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'async with driver.bidi_connection() as connection:\n    await connection.session.execute(connection.devtools.network.enable())\n    listener = connection.session.listen(connection.devtools.network.ResponseReceived)\n\n    content_types = []\n    async with listener:\n        async for event in listener:\n            content_types.append(event.response.headers["content-type"])\n            if "text/html; charset=utf-8" in content_types:\n                break\n'})})}),(0,a.jsx)(o.A,{value:"WebdriverIO",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"async function captureContentTypes() {\n  const contentTypes = [];\n\n  const listener = async (event) => {\n    if (event.name === 'Network.responseReceived') {\n      const contentType = event.params.response.headers['Content-Type'];\n      contentTypes.push(contentType);\n\n      if (contentType === 'text/html; charset=utf-8') {\n        await browser.removeListener('Network.responseReceived', listener);\n      }\n    }\n  };\n\n  await browser.on('Network.responseReceived', listener);\n\n  console.log('Captured content types:', contentTypes);\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["See also ",(0,a.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/bidi_api/#response-information",children:"alternative implementations"})," or ",(0,a.jsx)(n.a,{href:"https://webdriver.io/docs/devtools-service/#chrome-devtools-access",children:"WebdriverIO reference on CDP"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),s=t(34164),r=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=v({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),g=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function w(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==a&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(w,{...n,...e}),(0,f.jsx)(x,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);