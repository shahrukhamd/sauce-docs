"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[67944],{73646:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=r(74848),c=r(28453);r(11470),r(19365),r(86025);const a={id:"saucectl-configuration",title:"saucectl Configuration",sidebar_label:"saucectl Configuration"},i=void 0,l={id:"orchestrate/saucectl-configuration",title:"saucectl Configuration",description:"This page describes each saucectl configuration option and commands to use when interacting with Sauce Orchestrate. To get started with Sauce Orchestrate, see Getting Started.",source:"@site/docs/orchestrate/saucectl-configuration.md",sourceDirName:"orchestrate",slug:"/orchestrate/saucectl-configuration",permalink:"/sauce-docs/pr-preview/pr-2903/orchestrate/saucectl-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/saucectl-configuration.md",tags:[],version:"current",lastUpdatedBy:"Maciej Plonski",lastUpdatedAt:1716997595e3,frontMatter:{id:"saucectl-configuration",title:"saucectl Configuration",sidebar_label:"saucectl Configuration"},sidebar:"docs",previous:{title:"WebdriverIO Quickstart",permalink:"/sauce-docs/pr-preview/pr-2903/orchestrate/quickstart/webdriverio"},next:{title:"Building Images",permalink:"/sauce-docs/pr-preview/pr-2903/orchestrate/building-images"}},t={},o=[{value:"Configuration Options",id:"configuration-options",level:2},{value:"<code>apiVersion</code>",id:"apiversion",level:3},{value:"<code>kind</code>",id:"kind",level:3},{value:"<code>sauce</code>",id:"sauce",level:2},{value:"<code>region</code>",id:"region",level:3},{value:"<code>concurrency</code>",id:"concurrency",level:3},{value:"<code>tunnel</code>",id:"tunnel",level:3},{value:"<code>name</code>",id:"name",level:4},{value:"<code>owner</code>",id:"owner",level:4},{value:"<code>suites</code>",id:"suites",level:2},{value:"<code>name</code>",id:"name-1",level:3},{value:"<code>workload</code>",id:"workload",level:3},{value:"<code>resourceProfile</code>",id:"resourceprofile",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"<code>imagePullAuth</code>",id:"imagepullauth",level:3},{value:"<code>entrypoint</code>",id:"entrypoint",level:3},{value:"<code>files</code>",id:"files",level:3},{value:"<code>env</code>",id:"env",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>services</code>",id:"services",level:3},{value:"<code>artifacts</code>",id:"artifacts",level:2},{value:"<code>cleanup</code>",id:"cleanup",level:3},{value:"<code>download</code>",id:"download",level:3},{value:"<code>when</code>",id:"when",level:4},{value:"<code>match</code>",id:"match",level:4},{value:"<code>directory</code>",id:"directory",level:4},{value:"<code>reporters</code>",id:"reporters",level:2},{value:"<code>json</code>",id:"json",level:3},{value:"<code>enabled</code>",id:"enabled",level:4},{value:"<code>webhookURL</code>",id:"webhookurl",level:4},{value:"<code>filename</code>",id:"filename",level:4},{value:"saucectl Commands",id:"saucectl-commands",level:2},{value:"<code>saucectl run</code>",id:"saucectl-run",level:3},{value:"<code>saucectl imagerunner</code> Commands",id:"saucectl-imagerunner-commands",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This page describes each ",(0,s.jsx)(n.code,{children:"saucectl"})," configuration option and commands to use when interacting with Sauce Orchestrate. To get started with Sauce Orchestrate, see ",(0,s.jsx)(n.a,{href:"/orchestrate/getting-started/",children:"Getting Started"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Only the ",(0,s.jsx)(n.code,{children:"saucectl"})," configuration options for Sauce Orchestrate are listed below. For the full list of options, see ",(0,s.jsx)(n.a,{href:"/dev/cli/saucectl/",children:"Using the saucectl CLI"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"apiversion",children:(0,s.jsx)(n.code,{children:"apiVersion"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsxs)(n.p,{children:["Identifies the version of the underlying configuration schema. At this time, ",(0,s.jsx)(n.code,{children:"v1alpha"})," is the only supported value."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1alpha\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kind",children:(0,s.jsx)(n.code,{children:"kind"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsxs)(n.p,{children:["Tells ",(0,s.jsx)(n.code,{children:"saucectl"})," this is a Sauce Orchestrate configuration. ",(0,s.jsx)(n.code,{children:"imagerunner"})," is the required value for Sauce Orchestrate."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kind: imagerunner\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"sauce",children:(0,s.jsx)(n.code,{children:"sauce"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"The parent property containing all settings related to how tests are run and identified in the Sauce Labs platform."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you do not specify a region in your config file, you must set it when running your command with the ",(0,s.jsx)(n.code,{children:"--region"})," flag."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  region: eu-central-1\n  concurrency: 10\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"region",children:(0,s.jsx)(n.code,{children:"region"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING/ENUM |"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies through which Sauce Labs data center tests will run. Valid values are: ",(0,s.jsx)(n.code,{children:"us-west-1"})," or ",(0,s.jsx)(n.code,{children:"eu-central-1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  region: eu-central-1\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"concurrency",children:(0,s.jsx)(n.code,{children:"concurrency"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | INTEGER |"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the maximum number of suites to run at the same time. If the test defines more suites than the max, excess suites are queued and run in order as each suite completes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  concurrency: 3\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can override the file setting at runtime by setting the concurrency flag as an inline parameter of the ",(0,s.jsx)(n.code,{children:"saucectl run"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"saucectl run --ccy 5\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tunnel",children:(0,s.jsx)(n.code,{children:"tunnel"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"saucectl"})," supports using ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/",children:"Sauce Connect"})," to establish a secure connection with Sauce Labs. To do so, launch a tunnel; then provide the name and owner (if applicable) in this property."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n    owner: tunnel_owner_username\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"name",children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"Identifies an active Sauce Connect tunnel to use for secure connectivity to the Sauce Labs cloud."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This property replaces the former ",(0,s.jsx)(n.code,{children:"id"})," property, which is deprecated."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"owner",children:(0,s.jsx)(n.code,{children:"owner"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"Identifies the Sauce Labs user who created the specified tunnel, which is required if the user running the tests did not create the tunnel."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This property replaces the former ",(0,s.jsx)(n.code,{children:"parent"})," property, which is deprecated."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n    owner: tunnel_owner_username\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"suites",children:(0,s.jsx)(n.code,{children:"suites"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:["The set of properties providing details about the test suites to run. May contain multiple suite definitions. See the full ",(0,s.jsx)(n.a,{href:"#example-configuration",children:"example config"})," for an illustration of multiple suite definitions."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name-1",children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"The name of the test suite, which will be reflected in the results and related artifacts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"workload",children:(0,s.jsx)(n.code,{children:"workload"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsxs)(n.p,{children:["Tell Sauce Orchestrate what kind of entrypoint process you are running. ",(0,s.jsx)(n.code,{children:"workload"})," is important for security monitoring. Options are ",(0,s.jsx)(n.code,{children:"webdriver"})," or ",(0,s.jsx)(n.code,{children:"other"}),". For most configurations ",(0,s.jsx)(n.code,{children:"webdriver"})," is required."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    workload: webdriver\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"resourceprofile",children:(0,s.jsx)(n.code,{children:"resourceProfile"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets the CPU and memory limits for the container. The format for specifying the limits is as follows: ",(0,s.jsx)(n.code,{children:"<CPU><level><memory><level>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The larger the level value, the higher the allocated CPU and memory resources. Available options are: ",(0,s.jsx)(n.code,{children:"c1m1"}),", ",(0,s.jsx)(n.code,{children:"c2m2"}),", and ",(0,s.jsx)(n.code,{children:"c3m3"}),". The default value is set to ",(0,s.jsx)(n.code,{children:"c1m1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    resourceProfile: c2m2\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"image",children:(0,s.jsx)(n.code,{children:"image"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"The location of your container image. Takes the format [registry]/[image]:[tag]."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    image: saucelabs/sl-demo-docker-primary:0.0.1\n'})}),"\n",(0,s.jsx)(n.h3,{id:"imagepullauth",children:(0,s.jsx)(n.code,{children:"imagePullAuth"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:["The credentials needed to access an image hosted in a private registry. It is highly recommend to not hardcode credentials in your ",(0,s.jsx)(n.code,{children:"saucectl"})," config. Use environment variables instead."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    image: saucelabs/sl-demo-docker-primary:0.0.1\n    imagePullAuth:\n      user: $DOCKER_USERNAME\n      token: $DOCKER_PASSWORD\n'})}),"\n",(0,s.jsx)(n.h3,{id:"entrypoint",children:(0,s.jsx)(n.code,{children:"entrypoint"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"The command that is executed after the container is ready."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    image: saucelabs/sl-demo-docker-primary:0.0.1\n    entrypoint: mvn test\n'})}),"\n",(0,s.jsx)(n.h3,{id:"files",children:(0,s.jsx)(n.code,{children:"files"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | ARRAY |"})}),"\n",(0,s.jsx)(n.p,{children:"Files to be uploaded onto the container. Can be used for populating test data that your scripts access. src and dst must be an absolute path."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    image: saucelabs/sl-demo-docker-primary:0.0.1\n    files:\n      - src: "runsauce.json"\n        dst: "/workdir/runsauce.json"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"env",children:(0,s.jsx)(n.code,{children:"env"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"Environment variables to be injected into the container. Can be used for populating secrets used in your tests. These environment variables are not stored anywhere in Sauce Labs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    env:\n      KEY: value\n'})}),"\n",(0,s.jsx)(n.p,{children:"We provide a set of predefined environment variables for each suite. They include basic information about your account or\na SauceLabs region you use to run tests. However, if you specify those variables in your configuration, we won't inject\nthe default value into them."}),"\n",(0,s.jsxs)("table",{id:"table-cli",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Environment variable"}),(0,s.jsx)("th",{children:"Example value"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"SAUCE_USERNAME"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"awesome.saucer"})}),(0,s.jsx)("td",{children:"Username of the account triggering Sauce Orchestrate job"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"0039e1dc-c1bf-4006-bc99-ab5672fb2f8c"})}),(0,s.jsx)("td",{children:"Access key for the account triggering Sauce Orchestrate job"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"SAUCE_ONDEMAND_URL"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"https://ondemand.us-west-1.saucelabs.com/wd/hub"})}),(0,s.jsxs)("td",{children:["Url for the closest ",(0,s.jsx)("a",{href:"/basics/data-center-endpoints/",children:"OnDemand Data Center endpoint"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"SAUCE_REGION"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"us-west-1"})}),(0,s.jsxs)("td",{children:["Name of the ",(0,s.jsx)("a",{href:"/orchestrate/saucectl-configuration/#region",children:"closest SauceLabs region"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"SAUCE_REST_ENDPOINT"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"https://api.us-west-1.saucelabs.com/"})}),(0,s.jsxs)("td",{children:["Url for the closest ",(0,s.jsx)("a",{href:"/dev/api/",children:"SauceLabs REST API"})]})]})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Environment variables set with the saucectl ",(0,s.jsx)(n.code,{children:"--env"})," flag will overwrite those specified in the sauce config file.\nThe order of precedence is as follows:"]}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--env"})," flag"]}),"\n",(0,s.jsx)(n.li,{children:"root-level environment variables"}),"\n",(0,s.jsx)(n.li,{children:"suite-level environment variables"}),"\n",(0,s.jsx)(n.li,{children:"default environment variables"}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:(0,s.jsx)(n.code,{children:"metadata"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"This field's primary use case is for troubleshooting. Unless instructed by a\nSauce Labs employee, setting any random values here will serve you no purpose."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    metadata:\n      KEY: value\n'})}),"\n",(0,s.jsx)(n.h3,{id:"services",children:(0,s.jsx)(n.code,{children:"services"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | ARRAY |"})}),"\n",(0,s.jsx)(n.p,{children:"Define service containers that are required to run alongside the main container\nof the suite. The available configuration options for services are similar to\nthose of the main container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n    services:\n      - name: "a service"\n        image: your-org/your-service-image:0.0.1\n        imagePullAuth:\n          user: sauceuser\n          token: "123"\n        entrypoint: mvn test\n        files:\n          - src: "runsauce.json"\n            dst: "/workdir/runsauce.json"\n        env:\n          KEY: value\n        resourceProfile: c1m1\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"A service container may not be up and running by the time your main container\nstarts. Please take that into account when writing your tests."})}),"\n",(0,s.jsx)(n.h2,{id:"artifacts",children:(0,s.jsx)(n.code,{children:"artifacts"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | ARRAY |"})}),"\n",(0,s.jsxs)(n.p,{children:["In order for ",(0,s.jsx)(n.code,{children:"saucectl"})," to download files from the Sauce Orchestrate container two configurations are needed. The first is to tell Orchestrate which files to upload from the container once your entrypoint command finishes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# declared within your suites definition\nsuites:\n  ...\n  artifacts:\n    - "/workdir/best-practice/target/surefire-reports/*"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then you must tell ",(0,s.jsx)(n.code,{children:"saucectl"})," to download the artifacts to your machine."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# declared at the top level of your config.yml\nartifacts:\n  download:\n    when: always\n    match:\n      - "*"\n    directory: ./artifacts\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"The following limitations are in effect for artifact downloads. They do not apply to files uploaded:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Must specify an absolute path (starting at the root ",(0,s.jsx)(n.code,{children:"/"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Max requested volume for parent dir is 10M"}),"\n",(0,s.jsx)(n.li,{children:"You can only specify up to 10 paths"}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"cleanup",children:(0,s.jsx)(n.code,{children:"cleanup"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"\n",(0,s.jsxs)(n.p,{children:["When set to ",(0,s.jsx)(n.code,{children:"true"}),", all contents of the specified download directory are cleared before any new artifacts from the current test are downloaded."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  cleanup: true\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"download",children:(0,s.jsx)(n.code,{children:"download"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies the settings related to downloading artifacts from tests run by ",(0,s.jsx)(n.code,{children:"saucectl"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  download:\n    when: always\n    match:\n      - junit.xml\n    directory: ./artifacts/\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"when",children:(0,s.jsx)(n.code,{children:"when"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies when and under what circumstances to download artifacts. Valid values are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"always"}),": Always download artifacts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"never"}),": Never download artifacts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pass"}),": Download artifacts for passing suites only."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fail"}),": Download artifacts for failed suites only."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  download:\n    when: always\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"match",children:(0,s.jsx)(n.code,{children:"match"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING/ARRAY |"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character ",(0,s.jsx)(n.code,{children:"*"})," (use quotes for best parsing results with wildcard)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'artifacts:\n  download:\n    match:\n    - junit.xml\n    - "*.log"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"directory",children:(0,s.jsx)(n.code,{children:"directory"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded. The name of the subdirectory will match the suite name. If a directory with the same name already exists, the new one will be suffixed by a serial number."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  download:\n    directory: ./artifacts/\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"reporters",children:(0,s.jsx)(n.code,{children:"reporters"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:["Configures additional reporting capabilities provided by ",(0,s.jsx)(n.code,{children:"saucectl"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    enabled: true\n    filename: saucectl-report.json\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"json",children:(0,s.jsx)(n.code,{children:"json"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"The JSON reporter creates a single report of all executed saucectl suites."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    enabled: true\n    filename: saucectl-report.json\n    webhookURL: https://my-webhook-url\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"enabled",children:(0,s.jsx)(n.code,{children:"enabled"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"\n",(0,s.jsx)(n.p,{children:"Toggles the reporter on/off."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    enabled: true\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"webhookurl",children:(0,s.jsx)(n.code,{children:"webhookURL"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies the webhook URL. When saucectl test is finished, it'll send an HTTP POST with a JSON payload to the configured webhook URL."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    webhookURL: https://my-webhook-url\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"filename",children:(0,s.jsx)(n.code,{children:"filename"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:'Specifies the report filename. Defaults to "saucectl-report.json".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    filename: my-saucectl-report.json\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"saucectl-commands",children:"saucectl Commands"}),"\n",(0,s.jsxs)(n.p,{children:["The following are some common ",(0,s.jsx)(n.code,{children:"saucectl"})," commands for interacting with Sauce Orchestrate."]}),"\n",(0,s.jsx)(n.h3,{id:"saucectl-run",children:(0,s.jsx)(n.code,{children:"saucectl run"})}),"\n",(0,s.jsxs)(n.p,{children:["The main command to run a Sauce Orchestrate job. Must be executed at the root level of your project. Your project must contain a configuration file located in ",(0,s.jsx)(n.code,{children:".sauce/config.yml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"saucectl run\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"saucectl-imagerunner-commands",children:[(0,s.jsx)(n.code,{children:"saucectl imagerunner"})," Commands"]}),"\n",(0,s.jsx)(n.p,{children:"Supported commands:"}),"\n",(0,s.jsxs)("table",{id:"table-cli",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Operation"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/imagerunner/artifacts-download",children:"Get artifacts"})}),(0,s.jsx)("td",{children:"Get artifacts/files of the container from a Sauce Orchestrate run."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/imagerunner/list",children:"List containers"})}),(0,s.jsx)("td",{children:"Return the list of Sauce Orchestrate containers."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/imagerunner/logs",children:"Get logs"})}),(0,s.jsx)("td",{children:"Fetch the logs from an imagerunner run."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"/dev/cli/saucectl/imagerunner/stop",children:"Stop a container"})}),(0,s.jsx)("td",{children:"Stop a running Sauce Orchestrate container."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var s=r(18215);const c={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(c.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(96540),c=r(18215),a=r(23104),i=r(56347),l=r(205),t=r(57485),o=r(31682),d=r(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:c}}=e;return{value:n,label:r,attributes:s,default:c}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function j(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const c=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,t.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(c.location.search);n.set(a,e),c.replace({...c.location,search:n.toString()})}),[a,c])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:c}=e,a=u(e),[i,t]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,h]=x({queryString:r,groupId:c}),[m,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,a]=(0,d.Dv)(r);return[c,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:c}),f=(()=>{const e=o??m;return j({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&t(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);t(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const t=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=t.indexOf(n),c=l[r].value;c!==s&&(o(n),i(c))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=t.indexOf(e.currentTarget)+1;n=t[r]??t[0];break}case"ArrowLeft":{const r=t.indexOf(e.currentTarget)-1;n=t[r]??t[t.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>t.push(e),onKeyDown:h,onClick:d,...a,className:(0,c.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:c}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===c));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function b(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,c.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function w(e){const n=(0,p.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const c={},a=s.createContext(c);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);