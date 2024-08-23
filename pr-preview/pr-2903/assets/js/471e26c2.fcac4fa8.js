"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49245],{62532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),a=t(28453),s=(t(86025),t(11470)),r=t(19365);const o={id:"specialized-environments",title:"Specialized Environment Setups",sidebar_label:"Specialized Environment Setups"},c=void 0,l={id:"secure-connections/sauce-connect/setup-configuration/specialized-environments",title:"Specialized Environment Setups",description:"What You'll Need",source:"@site/docs/secure-connections/sauce-connect/setup-configuration/specialized-environments.md",sourceDirName:"secure-connections/sauce-connect/setup-configuration",slug:"/secure-connections/sauce-connect/setup-configuration/specialized-environments",permalink:"/sauce-docs/pr-preview/pr-2903/secure-connections/sauce-connect/setup-configuration/specialized-environments",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/setup-configuration/specialized-environments.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:168364486e4,frontMatter:{id:"specialized-environments",title:"Specialized Environment Setups",sidebar_label:"Specialized Environment Setups"},sidebar:"docs",previous:{title:"Setup with Additional Proxies",permalink:"/sauce-docs/pr-preview/pr-2903/secure-connections/sauce-connect/setup-configuration/additional-proxies"},next:{title:"Docker",permalink:"/sauce-docs/pr-preview/pr-2903/secure-connections/sauce-connect/setup-configuration/docker"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Real Device Cloud Setup",id:"real-device-cloud-setup",level:2},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Restricting Tunnel Deployment to Organization Admins",id:"restricting-tunnel-deployment-to-organization-admins",level:4},{value:"Testing with Public Devices",id:"testing-with-public-devices",level:4},{value:"Testing Mobile Devices Against <code>localhost</code>",id:"testing-mobile-devices-against-localhost",level:4},{value:"SSL Bumping",id:"ssl-bumping",level:4},{value:"Selecting the Tunnel to Use",id:"selecting-the-tunnel-to-use",level:3},{value:"Selecting the Right Data Center Endpoint",id:"selecting-the-right-data-center-endpoint",level:3},{value:"OnDemand Endpoint Examples for Driver Setup",id:"ondemand-endpoint-examples-for-driver-setup",level:4},{value:"API Testing Setup",id:"api-testing-setup",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Sauce Labs account (",(0,i.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Your Sauce Labs ",(0,i.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We recommend setting these values as ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/environment-variables/",children:"environment variables"})," to protect your username and api key from exposure, and also for future convenience."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The name of your closest regional Sauce Labs Data Center (see the ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--region",children:"SC CLI"})," and ",(0,i.jsx)(n.a,{href:"/basics/data-center-endpoints/",children:"Data Center Endpoints"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For the Docker Setup, you'll need to have ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker installed and configured"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"real-device-cloud-setup",children:"Real Device Cloud Setup"}),"\n",(0,i.jsx)(n.p,{children:"Real Device Cloud on Sauce Labs offers public and private mobile devices for users looking to expedite automated and live testing for their mobile apps. You can run a high volume of tests across a broad range of real devices without compromising performance, quality, or reliability."}),"\n",(0,i.jsx)(n.p,{children:"With Sauce Connect Proxy, you\u2019ll have a secure tunnel for testing apps and websites on your local machine (or behind a firewall) against devices and browsers in the Sauce Labs Real Device Cloud."}),"\n",(0,i.jsx)(n.h3,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,i.jsx)(n.h4,{id:"restricting-tunnel-deployment-to-organization-admins",children:"Restricting Tunnel Deployment to Organization Admins"}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like to restrict Sauce Connect Proxy tunnel deployment to organization admins only, follow the steps in ",(0,i.jsx)(n.a,{href:"/basics/acct-team-mgmt/org-settings",children:"Security Settings"})," to only allow organization admins to start Sauce Connect Proxy tunnels."]}),"\n",(0,i.jsx)(n.h4,{id:"testing-with-public-devices",children:"Testing with Public Devices"}),"\n",(0,i.jsxs)(n.p,{children:["In order to begin running tests on public devices using Sauce Connect Proxy or IPSec VPN, your organization admin must enable this option in their settings. Follow the steps in ",(0,i.jsx)(n.a,{href:"/basics/acct-team-mgmt/org-settings",children:"Security Settings"})," to enable Sauce Connect Proxy/VPN for public cloud devices."]}),"\n",(0,i.jsx)(n.p,{children:"Once the setting is enabled, all users across your organization can run live and automated tests on public devices over Sauce Connect Proxy or IPSec VPN. Each time you initiate a test, you'll see a temporary pop-up alert window with a reminder that the utilization of a trusted Sauce Connect Proxy or IPSec VPN connection combined with RDC public real device tests may not be compliant with your organization's network policy."}),"\n",(0,i.jsxs)(n.h4,{id:"testing-mobile-devices-against-localhost",children:["Testing Mobile Devices Against ",(0,i.jsx)(n.code,{children:"localhost"})]}),"\n",(0,i.jsxs)(n.p,{children:["Testing with the address ",(0,i.jsx)(n.code,{children:"localhost"})," (or the IP address ",(0,i.jsx)(n.code,{children:"127.0.0.1"}),") is not supported with iOS or Android real devices in Sauce Connect Proxy."]}),"\n",(0,i.jsxs)(n.p,{children:["To work around this, you'll need to edit your ",(0,i.jsx)(n.code,{children:"hosts"})," file on the machine on which you are running Sauce Connect Proxy. Add an entry for a placeholder hostname (such as ",(0,i.jsx)(n.code,{children:"localtestsite"}),") and the IP address ",(0,i.jsx)(n.code,{children:"127.0.0.1"}),". Requests for ",(0,i.jsx)(n.code,{children:"localtestsite"})," in your tests will then be sent through your Sauce Connect Proxy tunnel to ",(0,i.jsx)(n.code,{children:"localhost"}),", which is the machine on which you are running Sauce Connect Proxy."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, adding ",(0,i.jsx)(n.code,{children:"127.0.0.1   mockserver"})," to your ",(0,i.jsx)(n.code,{children:"/etc/hosts"})," file, then starting a server on ",(0,i.jsx)(n.code,{children:"localhost:3333"})," will route mockserver:3333 HTTP calls to your local server. Mobile tests using Sauce Connect will then be able to find your local server regardless of the nature of your test."]}),"\n",(0,i.jsxs)(n.p,{children:["For tips on how to edit your ",(0,i.jsx)(n.code,{children:"hosts"})," file, see ",(0,i.jsx)(n.a,{href:"https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux",children:"How to Edit Hosts File in Linux, Windows, or Mac"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"ssl-bumping",children:"SSL Bumping"}),"\n",(0,i.jsxs)(n.p,{children:["While rare, there are some test cases that will require you to disable SSL Bumping when using Sauce Connect Proxy to avoid certificate issues. For more information, see ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication",children:"SSL Certificate Bumping"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"selecting-the-tunnel-to-use",children:"Selecting the Tunnel to Use"}),"\n",(0,i.jsxs)(n.p,{children:["Sauce Connect Proxy can have multiple tunnels running simultaneously, as described in ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability",children:"High Availability Setup"}),". You can select which tunnel to use in a real device test in the same way as you would any other type of automated test."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Start Sauce Command Proxy from the command line, using the ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--user",children:(0,i.jsx)(n.code,{children:"-u (--user)"})}),", ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--api-key",children:(0,i.jsx)(n.code,{children:"-k (--api-key)"})}),", ",(0,i.jsxs)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--region",children:[(0,i.jsx)(n.code,{children:"-r (--region"}),")"]}),", and ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--tunnel-name",children:(0,i.jsx)(n.code,{children:"--tunnel-name"})})," flags."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r $SAUCE_DATA_CENTER --tunnel-name $TUNNEL_NAME\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we'll ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/environment-variables/",children:"set our credentials (username/access key) as environment variables"}),", start a tunnel in US West Data Center and name the tunnel ",(0,i.jsx)(n.code,{children:"rdc-on-sauce-tunnel-us"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r us-west --tunnel-name rdc-on-sauce-tunnel-us\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Note for Android Devices",type:"note",children:[(0,i.jsxs)(n.p,{children:["If you set up the tunnel for Android Devices, you must start Sauce Connect Proxy with the ",(0,i.jsx)(n.code,{children:"-B all"})," flag:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r $SAUCE_DATA_CENTER --tunnel-name $TUNNEL_NAME -B all\n"})}),(0,i.jsx)(n.p,{children:"You need to include the -B all flag because, by default, traffic on Sauce Connect is re-encrypted using Sauce Labs' self-signed certificates. While this can be trusted on Sauce Labs Virtual Cloud and Sauce Labs iOS devices, due to security specifications by Google, the same can't be done on Android."}),(0,i.jsxs)(n.p,{children:["If you add ",(0,i.jsx)(n.code,{children:"-B"}),", Sauce Labs uses your server certificates, and if the certificate is self-signed, you face the same issue again. For native applications, the workaround is injecting your self-signed certificate into the app. You can learn more on ",(0,i.jsx)(n.a,{href:"https://developer.android.com/training/articles/security-config",children:"Network Security Configuration in the Android Developers documentation"}),"."]})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["In your device testing script, specify the tunnel name with ",(0,i.jsx)(n.code,{children:"tunnelName"})," in your capabilities, as shown in this Java example:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'final DesiredCapabilities capabilities = new DesiredCapabilities();\n    capabilities.setCapability("username", System.getenv("SAUCE_USERNAME"));\n    capabilities.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));\n    capabilities.setCapability("platformName", "Android");\n    capabilities.setCapability("platformVersion,"  "81.0");\n    capabilities.setCapability("deviceName", "Samsung_Galaxy_Note_5_real"); // Will only run on the specified device\n    capabilities.setCapability("tunnelName", "rdc-on-sauce-tunnel-us");\nfinal AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"selecting-the-right-data-center-endpoint",children:"Selecting the Right Data Center Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["By default, Sauce Labs will automatically connect you to the main US-West-1 Data Center. For information on Sauce Connect Proxy endpoints, see the ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#data-center-endpoints",children:"Sauce Connect Proxy CLI documentation"})," and ",(0,i.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"Data Center Endpoints"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"At present, real device testing is supported in the following data centers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["US West Data Center (",(0,i.jsx)(n.code,{children:"us-west"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["EU Central Data Center (",(0,i.jsx)(n.code,{children:"eu-central"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Once you establish a Sauce Connect Proxy tunnel for real device testing, you can also use it for virtual devices (and vice versa)."})}),"\n",(0,i.jsx)(n.h4,{id:"ondemand-endpoint-examples-for-driver-setup",children:"OnDemand Endpoint Examples for Driver Setup"}),"\n",(0,i.jsx)(n.p,{children:"To ensure you're testing against the correct data center, you'll need to add the correct OnDemand endpoint when you instantiate a MobileDriver in your automated test:"}),"\n",(0,i.jsxs)(s.A,{defaultValue:"US Data Center",values:[{label:"US Data Center",value:"US Data Center"},{label:"EU Data Center",value:"EU Data Center"}],children:[(0,i.jsxs)(r.A,{value:"US Data Center",children:["Driver Setup for US Data Center (Java)",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);\n'})})]}),(0,i.jsxs)(r.A,{value:"EU Data Center",children:["Driver Setup for EU Data Center (Java)",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.eu-central-1.saucelabs.com/wd/hub"), capabilities);\n'})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"api-testing-setup",children:"API Testing Setup"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/api-testing/sauce-connect/",children:"API Testing with Sauce Connect Proxy"})," to learn how to start a tunnel for API Testing."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var i=t(96540),a=t(18215),s=t(23104),r=t(56347),o=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[r,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[l,d]=m({queryString:t,groupId:a}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=l??v;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=o[t].value;a!==i&&(l(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function S(e){const n=v(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function j(e){const n=(0,f.A)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);