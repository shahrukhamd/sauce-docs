"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98141],{88654:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(74848),i=s(28453);const o={id:"css-animations",title:"Disabling CSS Animations",sidebar_label:"CSS Animations"},a=void 0,r={id:"visual/css-animations",title:"Disabling CSS Animations",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/css-animations.md",sourceDirName:"visual",slug:"/visual/css-animations",permalink:"/sauce-docs/pr-preview/pr-2903/visual/css-animations",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/css-animations.md",tags:[],version:"current",lastUpdatedBy:"Marija Stupar",lastUpdatedAt:1710778599e3,frontMatter:{id:"css-animations",title:"Disabling CSS Animations",sidebar_label:"CSS Animations"}},c={},l=[{value:"CSS Animations",id:"css-animations",level:2},{value:"Animated GIFs",id:"animated-gifs",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,t.jsxs)(n.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,t.jsx)(n.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,t.jsx)(n.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,t.jsx)(n.h2,{id:"css-animations",children:"CSS Animations"}),"\n",(0,t.jsx)(n.p,{children:"Because CSS Animations may cause inconsistency in your screenshots and possible failure of your visual tests, we've automatically disabled CSS Animations to help ensure consistent results."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For Component Testing only"}),": To override this feature and have CSS Animations enabled, set the ",(0,t.jsx)(n.code,{children:"cssAnimations"})," option in your screener.config.js file to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  cssAnimations: true\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"animated-gifs",children:"Animated GIFs"}),"\n",(0,t.jsx)(n.p,{children:"Animated GIFs can cause inconsistency in your screenshots, resulting in failing visual tests. To alleviate this, Screener automatically freezes Animated GIFs to the first frame to help ensure consistent results."}),"\n",(0,t.jsx)(n.p,{children:"So nothing needs to be done to freeze Animated GIFs."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);