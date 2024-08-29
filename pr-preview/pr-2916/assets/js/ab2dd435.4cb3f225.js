"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[13976],{92899:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(74848),n=t(28453),s=(t(86025),t(11470)),l=t(19365);const i={id:"tf-crash-handler",title:"TestFairy Crash Handler",sidebar_label:"TestFairy Crash Handler"},o=void 0,u={id:"testfairy/sdk/tf-crash-handler",title:"TestFairy Crash Handler",description:"To use the TestFairy SDK as a crash handler without any other TestFairy feature, use the code example below.",source:"@site/docs/testfairy/sdk/tf-crash-handler.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/tf-crash-handler",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/tf-crash-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/tf-crash-handler.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"tf-crash-handler",title:"TestFairy Crash Handler",sidebar_label:"TestFairy Crash Handler"},sidebar:"docs",previous:{title:"Supported Platforms",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/supported-platforms"},next:{title:"Using Map Locations",permalink:"/sauce-docs/pr-preview/pr-2916/testfairy/sdk/map-locations"}},c={},d=[];function p(e){const a={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"To use the TestFairy SDK as a crash handler without any other TestFairy feature, use the code example below."}),"\n",(0,r.jsxs)(s.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS Objective C",value:"iosC"},{label:"iOS Swift",value:"iosS"}],children:[(0,r.jsxs)(l.A,{value:"android",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'TestFairy.installCrashHandler(this, "APP_TOKEN");\n'})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'import com.testfairy.TestFairy;\n\npublic class MyApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        TestFairy.installCrashHandler(this, "APP_TOKEN");\n    }\n}\n'})})]}),(0,r.jsxs)(l.A,{value:"iosC",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'[TestFairy installCrashHandler:@"APP_TOKEN"];\n'})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [TestFairy installCrashHandler:@"APP_TOKEN"];\n}\n'})})]}),(0,r.jsxs)(l.A,{value:"iosS",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'TestFairy.installCrashHandler("APP_TOKEN")\n'})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {\n        TestFairy.installCrashHandler("APP_TOKEN");\n    }\n\n}\n'})})]})]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>l});t(96540);var r=t(34164);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:a,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>j});var r=t(96540),n=t(34164),s=t(23104),l=t(56347),i=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}(t);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(n.location.search);a.set(s,e),n.replace({...n.location,search:a.toString()})}),[s,n])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,s=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[u,d]=f({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,s]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),v=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function g(e){let{className:a,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const a=e.currentTarget,t=o.indexOf(a),n=i[t].value;n!==r&&(u(a),l(n))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}a?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function T(e){const a=m(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...a,...e}),(0,y.jsx)(x,{...a,...e})]})}function j(e){const a=(0,b.A)();return(0,y.jsx)(T,{...e,children:d(e.children)},String(a))}},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>i});var r=t(96540);const n={},s=r.createContext(n);function l(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);