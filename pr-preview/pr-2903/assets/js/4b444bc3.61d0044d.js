"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[63017],{8254:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>i});var s=n(74848),o=n(28453);const i=[];function r(e){const t={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Variable Name"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_USERNAME"})}),(0,s.jsx)(t.td,{children:"required"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Your Sauce Labs username. You can get this from the header of app.saucelabs.com"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})}),(0,s.jsx)(t.td,{children:"required"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Your Sauce Labs access key. You can get this from the header of app.saucelabs.com"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_REGION"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The region you'd like to run your Visual tests in. Defaults to ",(0,s.jsx)(t.code,{children:"us-west-1"})," if not supplied. Can be one of the following: ",(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"'eu-central-1'"}),", ",(0,s.jsx)(t.code,{children:"'us-west-1'"})," or ",(0,s.jsx)(t.code,{children:"'us-east-4'"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_VISUAL_BUILD_NAME"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The name you would like to appear in the Sauce Visual dashboard."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_VISUAL_BRANCH"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The branch name you would like to associate this build with. We recommend using your current VCS branch in CI."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_VISUAL_DEFAULT_BRANCH"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The main branch name you would like to associate this build with. Usually ",(0,s.jsx)(t.code,{children:"main"})," or ",(0,s.jsx)(t.code,{children:"master"})," or alternatively the branch name your current branch was derived from. ",(0,s.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2903/visual-testing/workflows/ci",children:"Follow me to learn more"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_VISUAL_PROJECT"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The label / project you would like to associate this build with."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_VISUAL_BUILD_ID"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["For advanced users, a user-supplied SauceLabs Visual build ID. Can be used to create builds in advance using the GraphQL API. This can be used to parallelize tests with multiple browsers, shard, or more. ",(0,s.jsx)("br",{})," By default, this is not set and we create / finish a build during setup / teardown."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SAUCE_VISUAL_CUSTOM_ID"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"For advanced users, a user-supplied custom ID to identify this build. Can be used in CI to identify / check / re-check the status of a single build. Usage suggestions: CI pipeline ID."})]})]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},12758:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>i});var s=n(74848),o=n(28453);const i=[];function r(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,s.jsx)(t.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective specific regions of the snapshot."})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=n(74848),o=n(28453),i=n(86025),r=n(8254);n(12758);const l={sidebar_label:"Storybook"},a="Storybook Integration",d={id:"visual-testing/integrations/storybook",title:"Storybook Integration",description:"An extension for Storybook's test-runner powered by Jest and Playwright to integrate effortless visual testing with Sauce Visual.",source:"@site/docs/visual-testing/integrations/storybook.md",sourceDirName:"visual-testing/integrations",slug:"/visual-testing/integrations/storybook",permalink:"/sauce-docs/pr-preview/pr-2903/visual-testing/integrations/storybook",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/integrations/storybook.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1719924784e3,frontMatter:{sidebar_label:"Storybook"},sidebar:"docs",previous:{title:"Nightwatch",permalink:"/sauce-docs/pr-preview/pr-2903/visual-testing/integrations/nightwatch"},next:{title:"WebdriverIO",permalink:"/sauce-docs/pr-preview/pr-2903/visual-testing/integrations/webdriverio"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Customizing Your Builds (Environment Variables)",id:"customizing-your-builds-environment-variables",level:2},...r.RM,{value:"Story / Global Configuration",id:"story--global-configuration",level:2},{value:"Different Browsers and Devices",id:"different-browsers-and-devices",level:2},{value:"Auto Testing Variations",id:"auto-testing-variations",level:2},{value:"Example",id:"example",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"storybook-integration",children:"Storybook Integration"}),"\n",(0,s.jsxs)(t.p,{children:["An extension for ",(0,s.jsx)(t.a,{href:"https://github.com/storybookjs/test-runner",children:"Storybook's test-runner"})," powered by ",(0,s.jsx)(t.a,{href:"https://jestjs.io/",children:"Jest"})," and ",(0,s.jsx)(t.a,{href:"https://playwright.dev/",children:"Playwright"})," to integrate effortless visual testing with Sauce Visual."]}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["This guide requires an existing Storybook setup.",(0,s.jsx)("br",{}),"\nYou can alternatively take a look to our ",(0,s.jsx)(t.a,{href:"#example",children:"example repository"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["All tests are run in a headless ",(0,s.jsx)(t.a,{href:"#different-browsers",children:"browser"})," on your local machine/in your pipeline, so you don't need to worry about setting up a browser driver."]}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["This package leverage's Storybook's test-runner and metadata generation system for enabling automatic testing of Storybook stories. We recommend running Storybook ",(0,s.jsx)(t.code,{children:"^7.0.0 || ^8.0.0"})," and an up-to-date version of the Storybook test-runner (",(0,s.jsx)(t.code,{children:">=0.17.0"})," at time of writing)."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Follow ",(0,s.jsx)(t.a,{href:"https://github.com/storybookjs/test-runner/blob/next/README.md#getting-started",children:"Storybook's instructions"})," for setting up, installing, and configuring the test-runner if you haven't done so already. If you have already used or enabled the test-runner, you can skip this step."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install this plugin in an existing project from the root:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm i --save-dev @saucelabs/visual-storybook\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"If you don't have Playwright as a dev dependency in your project, you'll need to install it as well:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm i --save-dev playwright\n"})})]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Eject your test-runner config and append the Sauce Visual storybook configuration:"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you already have a custom config file for the test-runner you can skip to the next step for appending our configuration bootstrap. If not see below or read through the ",(0,s.jsx)(t.a,{href:"https://github.com/storybookjs/test-runner#ejecting-configuration",children:"storybook-runner docs"})," to eject the default test configuration."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npx test-storybook --eject\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The above should have created a file in the root directory, ",(0,s.jsx)(t.code,{children:"test-runner-jest.config.js"}),". Edit this file and add an import for the sauce visual plugin:"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"const { getVisualTestConfig } = require('@saucelabs/visual-storybook');"}),","]}),"\n",(0,s.jsx)(t.p,{children:"then append"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"...getVisualTestConfig()"}),","]}),"\n",(0,s.jsx)(t.p,{children:"below the jest config spread. Your file should look similar to the example below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const { getJestConfig } = require('@storybook/test-runner');\nconst { getVisualTestConfig } = require('@saucelabs/visual-storybook');\n\n/**\n * @type {import('@jest/types').Config.InitialOptions}\n */\nmodule.exports = {\n  // The default configuration comes from @storybook/test-runner\n  ...getJestConfig(),\n  // The configuration for Sauce Lab's Visual Integration\n  ...getVisualTestConfig(),\n  /** Add your own overrides below\n   * @see https://jestjs.io/docs/configuration\n   * @see https://github.com/playwright-community/jest-playwright#configuration\n   */\n};\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Create a ",(0,s.jsx)(t.code,{children:"test-runner.js"})," file in your storybook configuration directory (",(0,s.jsx)(t.code,{children:"<root>/.storybook"})," by default) if you do not already have one, and append our ",(0,s.jsx)(t.code,{children:"postRender"})," hook into it. You can read more about this file in the ",(0,s.jsx)(t.a,{href:"https://github.com/storybookjs/test-runner#experimental-test-hook-api",children:"hook API"})," section. It should look something like below:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// .storybook/test-runner.js\nconst { postVisit } = require('@saucelabs/visual-storybook');\n\nmodule.exports = {\n  postVisit,\n};\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Sauce Visual relies on environment variables for authentications.",(0,s.jsx)("br",{}),"\nBoth ",(0,s.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,s.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," need to be set prior starting your Storybook Testrunner job."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Username and Access Key can be retrieved from ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"https://app.saucelabs.com/user-settings"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__\nexport SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["Run your Storybook instance (or point to a built one), set the required environment variables (",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/@saucelabs/visual-storybook#customizing-your-builds-environment-variables",children:"see here"})," for all available / required fields), and run the test-runner! We'll take snapshots of all known Storybook stories and upload them into Sauce Visual."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"# Spin up your storybook instance in a separate terminal window if you're not using a live /\n# hosted one\nnpm run storybook\n\n# Export your username and access key or set them in your CI variables. You can get these from\n# app.saucelabs.com\nexport SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__\nexport SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__\n\n# Run the storybook command! Note: if you're running against a non-standard port or URL, you'll\n# need to supply the --url parameter followed by the root url for your storybook instance. See the\n# test-runner docs for more details / examples of config parameters.\n# ex: --url http://localhost:6006\nnpx test-storybook\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:["Review your changes in the ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/visual/builds",children:"Sauce Visual Dashboard"}),"!"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"customizing-your-builds-environment-variables",children:"Customizing Your Builds (Environment Variables)"}),"\n",(0,s.jsx)(t.p,{children:"Below are the environment variables available in the visual-storybook plugin. Keep in mind that the variables defined in Storybook configuration have precedence over these."}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"story--global-configuration",children:"Story / Global Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["Additional configuration options are exposed via the ",(0,s.jsx)(t.code,{children:"sauceVisual"})," ",(0,s.jsx)(t.a,{href:"https://storybook.js.org/docs/writing-stories/parameters",children:"Storybook parameters"}),". You can use these to tweak settings on a global, component, or per-story basis -- see the Storybook docs for details on how to apply them to each."]}),"\n",(0,s.jsxs)(t.p,{children:["The below configuration options are also exported as the type ",(0,s.jsx)(t.code,{children:"SauceVisualParams"})," from ",(0,s.jsx)(t.code,{children:"@saucelabs/visual-storybook"})," if you'd like TypeScript types for them."]}),"\n",(0,s.jsxs)(t.p,{children:["Parameters key: ",(0,s.jsx)(t.code,{children:"sauceVisual"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"captureDom"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Toggles DOM snapshot capture."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"clip"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["If the story & layout supports it, will automatically clip to the ",(0,s.jsx)(t.code,{children:"clipSelector"})," to remove extraneous whitespace. Recommended to be used in conjunction with ",(0,s.jsxs)(t.a,{href:"https://storybook.js.org/docs/configure/story-layout#global-layout",children:[(0,s.jsx)(t.code,{children:"centered"})," layout"]}),". Currently defaults to ",(0,s.jsx)(t.code,{children:"false"}),", however, will default to ",(0,s.jsx)(t.code,{children:"true"})," in a future version."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"clipSelector"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"#storybook-root"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The selector to clip to when ",(0,s.jsx)(t.code,{children:"clip = true"}),". Defaults to Storybook's default root element, ",(0,s.jsx)(t.code,{children:"#storybook-root"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"delay"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"0"})," (no delay)"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A number, in ms, that we should delay the snapshot by. Useful if the beginning of the story has unavoidable / javascript animations."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ignoreRegions"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"(RegionIn | string)[]"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"[]"})," (empty)"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"An array of manually created ignore regions, or CSS selectors in string form to ignore.  See the snipped below for a commented out example."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Component-level Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"const meta = {\n  title: 'Example/Button',\n  component: Button,\n  parameters: {\n    // ... Your other Storybook parameters here\n    sauceVisual: {\n      // Add storybook visual configuration options here\n      clip: true,\n      // clipSelector: '#custom-root-element',\n      // delay: 200,\n      // ignoreRegions: ['.some-css-selector', '#another-css-selector', {x: 50, y: 50, width: 100, height: 100}],\n    },\n  },\n};\n\nexport default meta;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"different-browsers-and-devices",children:"Different Browsers and Devices"}),"\n",(0,s.jsxs)(t.p,{children:["By default, the tests are run on your local machine/in your pipeline with Chromium. You have the option to run them on different ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json",children:"browser and device configurations"})," preconfigured by playwright or define your own device, a combination or all of them. To do so, you need to add the following to your ",(0,s.jsx)(t.code,{children:"test-runner-jest.config.js"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const { getJestConfig } = require('@storybook/test-runner');\nconst { getVisualTestConfig } = require('@saucelabs/visual-storybook');\n\n/**\n * @type {import('@jest/types').Config.InitialOptions}\n */\nmodule.exports = {\n  // The default configuration comes from @storybook/test-runner\n  ...getJestConfig(),\n  // The configuration for Sauce Lab's Visual Integration\n  ...getVisualTestConfig(),\n  /** Add your own overrides below\n   * @see https://jestjs.io/docs/configuration\n   * @see https://github.com/playwright-community/jest-playwright#configuration\n   */\n\n  // Add this to your config\n  testEnvironmentOptions: {\n    'jest-playwright': {\n      // With this option tests will be run against the defaultBrowserType of the devices, otherwise\n      // they run in a matrix against the default browser(s) configured below (chromium, if omitted)\n      useDefaultBrowserType: true,\n      // we still need to specify the browsers used by the devices\n      browsers: ['chromium', 'webkit', 'firefox'],\n      // this is actually the important part, we need to specify the devices we want to test against\n      devices: [ 'Desktop Edge', 'Desktop Firefox', 'Desktop Chrome', 'Desktop Safari', 'Pixel 5', 'iPhone 14 Pro Max']\n  },\n};\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you'd like to configure your own devices, please follow the configuration steps inside the ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/emulation#devices",children:"playwright docs"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"auto-testing-variations",children:"Auto Testing Variations"}),"\n",(0,s.jsx)("div",{className:"text--center",children:(0,s.jsx)("img",{src:(0,i.A)("/img/sauce-visual/visual-variants.png"),alt:"Visual variant grid example"})}),"\n",(0,s.jsxs)(t.p,{children:["We have a separate Storybook plugin, ",(0,s.jsx)(t.code,{children:"@saucelabs/storybook-variants"}),", available for rendering all variants of a component in a grid to ease the testing and development process. Read the full ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/@saucelabs/storybook-variants",children:"README on NPM"})," for installation & usage."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["An example project is available ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/visual-examples/tree/main/storybook",children:"here"}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);