"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[29354],{71438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(74848),i=r(28453);r(11470),r(19365),r(86025);const a={id:"javascript",title:"JavaScript Integration Guide",sidebar_label:"JavaScript",description:"Use JavaScript in your Backtrace project."},s=void 0,c={id:"error-reporting/language-integrations/javascript",title:"JavaScript Integration Guide",description:"Use JavaScript in your Backtrace project.",source:"@site/docs/error-reporting/language-integrations/javascript.md",sourceDirName:"error-reporting/language-integrations",slug:"/error-reporting/language-integrations/javascript",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/language-integrations/javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/language-integrations/javascript.md",tags:[],version:"current",lastUpdatedBy:"Rick Foster",lastUpdatedAt:1698853451e3,frontMatter:{id:"javascript",title:"JavaScript Integration Guide",sidebar_label:"JavaScript",description:"Use JavaScript in your Backtrace project."},sidebar:"backtrace",previous:{title:"Python",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/language-integrations/python"},next:{title:"React",permalink:"/sauce-docs/pr-preview/pr-2902/error-reporting/language-integrations/react"}},d={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Basic Integration",id:"basic-integration",level:2},{value:"Install the package",id:"install-the-package",level:3},{value:"Integrate the SDK",id:"integrate-the-sdk",level:3},{value:"Upload source maps",id:"upload-source-maps",level:3},{value:"Error Reporting Features",id:"error-reporting-features",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Attach attributes object to BacktraceClient",id:"attach-attributes-object-to-backtraceclient",level:4},{value:"Add attributes during application runtime",id:"add-attributes-during-application-runtime",level:4},{value:"Add attributes to an error report",id:"add-attributes-to-an-error-report",level:4},{value:"File Attachments",id:"file-attachments",level:3},{value:"Breadcrumbs",id:"breadcrumbs",level:3},{value:"Breadcrumbs Configuration",id:"breadcrumbs-configuration",level:4},{value:"Default Breadcrumbs",id:"default-breadcrumbs",level:4},{value:"Intercepting Breadcrumbs",id:"intercepting-breadcrumbs",level:4},{value:"Manual Breadcrumbs",id:"manual-breadcrumbs",level:4},{value:"Application Stability Metrics",id:"application-stability-metrics",level:3},{value:"Metrics Configuration",id:"metrics-configuration",level:4},{value:"Metrics Usage",id:"metrics-usage",level:4},{value:"Advanced SDK Features",id:"advanced-sdk-features",level:2},{value:"BacktraceClient",id:"backtraceclient",level:3},{value:"BacktraceClientOptions",id:"backtraceclientoptions",level:4},{value:"Manually send an error",id:"manually-send-an-error",level:3},{value:"Modify/skip error reports",id:"modifyskip-error-reports",level:3},{value:"SDK Method Overrides",id:"sdk-method-overrides",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://backtrace.io",children:"Backtrace"})," captures and reports handled and unhandled exceptions in your production software so\nyou can manage application quality through the complete product lifecycle."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"#",children:"@backtrace/browser"})," SDK connects your JavaScript application to Backtrace. The basic integration is quick\nand easy, after which you can explore the rich set of Backtrace features."]}),"\n",(0,n.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#basic-integration",children:"Basic Integration - Reporting your first errors"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#install-the-package",children:"Install the package"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#integrate-the-sdk",children:"Integrate the SDK"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#upload-source-maps",children:"Upload source maps"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#error-reporting-features",children:"Error Reporting Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#attributes",children:"Attributes"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#file-attachments",children:"File Attachments"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#breadcrumbs",children:"Breadcrumbs"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#application-stability-metrics",children:"Application Stability Metrics"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#metrics-configuration",children:"Metrics Configuration"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#metrics-usage",children:"Metrics Usage"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#advanced-sdk-features",children:"Advanced SDK Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#backtraceclient",children:"BacktraceClient options"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#manually-send-an-error",children:"Manually send an error"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#modifyskip-error-reports",children:"Modify/skip error reports"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#sdk-method-overrides",children:"SDK Method Overrides"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"basic-integration",children:"Basic Integration"}),"\n",(0,n.jsx)(t.h3,{id:"install-the-package",children:"Install the package"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ npm install @backtrace/browser\n"})}),"\n",(0,n.jsx)(t.h3,{id:"integrate-the-sdk",children:"Integrate the SDK"}),"\n",(0,n.jsx)(t.p,{children:"Add the following code to your application before all other scripts to report client-side errors to Backtrace."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// Import the BacktraceClient from @backtrace/browser with your favorite package manager.\nimport { BacktraceClient, BacktraceConfiguration } from '@backtrace/browser';\n\n// Configure client options\nconst options: BacktraceConfiguration = {\n    // Name of the website/application\n    name: 'MyWebPage',\n    // Version of the website\n    version: '1.2.3',\n    // Submission url\n    // <universe> is the subdomain of your Backtrace instance (<universe>.backtrace.io)\n    // <token> can be found in Project Settings/Submission tokens\n    url: 'https://submit.backtrace.io/<universe>/<token>/json',\n};\n\n// Initialize the client with the options\nconst client = BacktraceClient.initialize(options);\n\n// By default, Backtrace will send an error for Uncaught Exceptions and Unhandled Promise Rejections\n\n// Manually send an error\nclient.send(new Error('Something broke!'));\n"})}),"\n",(0,n.jsx)(t.h3,{id:"upload-source-maps",children:"Upload source maps"}),"\n",(0,n.jsx)(t.p,{children:"Client-side error reports are based on minified code. Upload source maps and source code to resolve minified code to\nyour original source identifiers."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/error-reporting/platform-integrations/source-map/",children:"(Source Map feature documentation)"})}),"\n",(0,n.jsx)(t.h2,{id:"error-reporting-features",children:"Error Reporting Features"}),"\n",(0,n.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(t.p,{children:["Custom attributes are key-value pairs that can be added to your error reports. They are used in report aggregation,\nsorting and filtering, can provide better contextual data for an error, and much more. They are foundational to many of\nthe advanced Backtrace features detailed in\n",(0,n.jsx)(t.a,{href:"/error-reporting/getting-started/",children:"Error Reporting documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"There are several places where attributes can be added, modified or deleted."}),"\n",(0,n.jsx)(t.h4,{id:"attach-attributes-object-to-backtraceclient",children:"Attach attributes object to BacktraceClient"}),"\n",(0,n.jsxs)(t.p,{children:["It is possible to include an attributes object during ",(0,n.jsx)(t.a,{href:"#backtraceclient",children:"BacktraceClient"})," initialization. This list of\nattributes will be included with every error report, referred to as global attributes."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// Create an attributes object that can be modified throughout runtime\nconst attributes: Record<string, unknown> = {\n    release: 'PROD',\n};\n\n// BacktraceClientOptions\nconst options: BacktraceConfiguration = {\n    name: 'MyWebPage',\n    version: '1.2.3',\n    url: 'https://submit.backtrace.io/<universe>/<token>/json',\n\n    // Attach the attributes object\n    userAttributes: attributes,\n};\n\n// Initialize the client\nconst client = BacktraceClient.initialize(options);\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can also include attributes that will be resolved when creating a report:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// BacktraceClientOptions\nconst options: BacktraceConfiguration = {\n    name: 'MyWebPage',\n    version: '1.2.3',\n    url: 'https://submit.backtrace.io/<universe>/<token>/json',\n\n    // Attach the attributes object\n    userAttributes: () => ({\n        user: getCurrentUser(),\n    }),\n};\n\n// Initialize the client\nconst client = BacktraceClient.initialize(options);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"add-attributes-during-application-runtime",children:"Add attributes during application runtime"}),"\n",(0,n.jsx)(t.p,{children:"Global attributes can be set during the runtime once specific data has be loaded (e.g. a user has logged in)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'const client = BacktraceClient.initialize(options);\n...\n\nclient.addAttribute({\n    "clientID": "de6faf4d-d5b5-486c-9789-318f58a14476"\n})\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can also add attributes that will be resolved when creating a report:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'const client = BacktraceClient.initialize(options);\n...\n\nclient.addAttribute(() => ({\n    "clientID": resolveCurrentClientId()\n}))\n'})}),"\n",(0,n.jsx)(t.h4,{id:"add-attributes-to-an-error-report",children:"Add attributes to an error report"}),"\n",(0,n.jsx)(t.p,{children:"The attributes list of a BacktraceReport object can be directly modified."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const report: BacktraceReport = new BacktraceReport('My error message', { myReportKey: 'myValue' });\nreport.attributes['myReportKey'] = 'New value';\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"file-attachments",children:"File Attachments"}),"\n",(0,n.jsx)(t.p,{children:"Files can be attached to error reports. This can be done when initalizing the BacktraceClient, updating the\nBacktraceClient, or dynamically for specific reports. When including attachments in BacktraceClient, all files will be\nuploaded with each report."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'// Import attachment types from @backtrace/browser\nimport { BacktraceStringAttachment, BacktraceUint8ArrayAttachment  } from "@backtrace/browser";\n\n// BacktraceStringAttachment should be used for text object like a log file, for example\nconst attachment1 = new BacktraceStringAttachment("logfile.txt", "This is the start of my log")\n\n// BacktraceUint8ArrayAttachment should be used for binary files\nconst attachment2 = new BacktraceUint8ArrayAttachment("connection_buffer", new Uint8Array(2));\n\n// Setup array of files to attach\nconst attachments = [attachment1];\n\n// BacktraceClientOptions\nconst options = {\n    name: "MyWebPage",\n    version: "1.2.3",\n    url: "https://submit.backtrace.io/<universe>/<token>/json",\n\n    // Attach the files to all reports\n    attachments,\n}\n\nconst client = BacktraceClient.initialize(options);\n\n// Later decide to add an attachment to all reports\nclient.addAttachment(attachment2)\n\n// After catching an exception and generating a report\ntry {\n    throw new Error("Caught exception!")\n} catch (error) {\n    const report = const report = new BacktraceReport(error, {}, [new BacktraceStringAttachment("CaughtErrorLog", "some error logging data here")])\n    client.send(report);\n}\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"breadcrumbs",children:"Breadcrumbs"}),"\n",(0,n.jsx)(t.p,{children:"Breadcrumbs are snippets of chronological data tracing runtime events. This SDK records a number of events by default,\nand manual breadcrumbs can also be added."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/error-reporting/web-console/debug/#breadcrumbs",children:"(Breadcrumbs feature documentation)"})}),"\n",(0,n.jsx)(t.h4,{id:"breadcrumbs-configuration",children:"Breadcrumbs Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Required?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"enable"})}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"Determines if the breadcrumbs support is enabled. By default the value is set to true."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"logLevel"})}),(0,n.jsx)(t.td,{children:"BreadcrumbLogLevel"}),(0,n.jsx)(t.td,{children:"Specifies which log level severity to include. By default all logs are included."}),(0,n.jsx)(t.td,{children:"All Logs"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"eventType"})}),(0,n.jsx)(t.td,{children:"BreadcrumbType"}),(0,n.jsx)(t.td,{children:"Specifies which breadcrumb type to include. By default all types are included."}),(0,n.jsx)(t.td,{children:"All Types"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"maximumBreadcrumbs"})}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"Specifies maximum number of breadcrumbs stored by the library. By default, only 100 breadcrumbs will be stored."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"100"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"intercept"})}),(0,n.jsx)(t.td,{children:"(breadcrumb: RawBreadcrumb) => RawBreadcrumb | undefined;"}),(0,n.jsx)(t.td,{children:"Inspects breadcrumb and allows to modify it. If the undefined value is being returned from the method, no breadcrumb will be added to the breadcrumb storage."}),(0,n.jsx)(t.td,{children:"All Breadcrumbs"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { BacktraceClient, BacktraceConfiguration } from '@backtrace/browser';\n\n// BacktraceClientOptions\nconst options: BacktraceConfiguration = {\n    // ignoring all but breadcrumbs config for simplicity\n    breadcrumbs: {\n        // breadcrumbs configuration\n    },\n};\n\n// Initialize the client\nconst client = BacktraceClient.initialize(options);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"default-breadcrumbs",children:"Default Breadcrumbs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"HTTP"}),(0,n.jsx)(t.td,{children:"Adds a breadcrumb with the url, request type, and reponse status for Fetch or XMLHttpRequests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"History"}),(0,n.jsx)(t.td,{children:"Adds breadcrumb on pushstate and popstate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Document/Window"}),(0,n.jsx)(t.td,{children:"Adds a breadcrumb for document.click, document.dblclick, document.drag, document.drop, window.load, window.unload, window.pagehide, window.pageshow, window.online, and window.offline."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Console"}),(0,n.jsx)(t.td,{children:"Adds a breadcrumb every time console log is being used by the developer."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"intercepting-breadcrumbs",children:"Intercepting Breadcrumbs"}),"\n",(0,n.jsx)(t.p,{children:"If PII or other information needs to be filtered from a breadcrumb, you can use the intercept function to skip or filter\nout the sensitive information. Any RawBreadcrumb returned will be used for the breadcrumb. If undefined is returned, no\nbreadcrumb will be added."}),"\n",(0,n.jsx)(t.h4,{id:"manual-breadcrumbs",children:"Manual Breadcrumbs"}),"\n",(0,n.jsx)(t.p,{children:"In addition to all of the default breadcrumbs that are automatically collected, you can also manually add breadcrumbs of\nyour own."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"client.breadcrumbs?.info('This is a manual breadcrumb.', {\n    customAttr: 'wow!',\n});\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"application-stability-metrics",children:"Application Stability Metrics"}),"\n",(0,n.jsx)(t.p,{children:"The Backtrace Browser SDK has the ability to send usage Metrics to be viewable in the Backtrace UI."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/error-reporting/project-setup/stability-metrics/",children:"(Stability Metrics feature documentation)"})}),"\n",(0,n.jsx)(t.h4,{id:"metrics-configuration",children:"Metrics Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Required?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"metricsSubmissionUrl"})}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsxs)(t.td,{children:["Metrics server hostname. By default the value is set to ",(0,n.jsx)(t.a,{href:"https://events.backtrace.io",children:"https://events.backtrace.io"}),"."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"https://events.backtrace.io"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"enable"})}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"Determines if the metrics support is enabled. By default the value is set to true."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"autoSendInterval"})}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"Indicates how often crash free metrics are sent to Backtrace. The interval is a value in ms. By default, session events are sent on application startup/finish, and every 30 minutes while the application is running. If the value is set to 0. The auto send mode is disabled. In this situation the application needs to maintain send mode manually."}),(0,n.jsx)(t.td,{children:"On application startup/finish"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"size"})}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"Indicates how many events the metrics storage can store before auto submission."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"50"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("input",{type:"checkbox",disabled:"true"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"metrics-usage",children:"Metrics Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// metrics will be undefined if not enabled\nclient.metrics?.send();\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"advanced-sdk-features",children:"Advanced SDK Features"}),"\n",(0,n.jsx)(t.h3,{id:"backtraceclient",children:"BacktraceClient"}),"\n",(0,n.jsx)(t.p,{children:"BacktraceClient is the main SDK class. Error monitoring starts when this singleton object is instantiated, and it will\ncompose and send reports for unhandled errors and unhandled promise rejections. It can also be used to manually send\nreports from exceptions and rejection handlers. Do not create more than one instance of this object."}),"\n",(0,n.jsx)(t.h4,{id:"backtraceclientoptions",children:"BacktraceClientOptions"}),"\n",(0,n.jsx)(t.p,{children:"The following options are available for the BacktraceClientOptions passed when initializing the BacktraceClient."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Required?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"url"})}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Submission URL to send errors to"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [x] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Your application name"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [x] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"version"})}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Your application version"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [x] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"token"})}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"The submission token for error injestion. This is required only if submitting directly to a Backtrace URL. (uncommon)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"userAttributes"})}),(0,n.jsx)(t.td,{children:"Dictionary"}),(0,n.jsx)(t.td,{children:"Additional attributes that can be filtered and aggregated against in the Backtrace UI."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"attachments"})}),(0,n.jsx)(t.td,{children:"BacktraceAttachment[]"}),(0,n.jsxs)(t.td,{children:["Additional files to be sent with error reports. See ",(0,n.jsx)(t.a,{href:"#file-attachments",children:"File Attachments"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"beforeSend"})}),(0,n.jsx)(t.td,{children:"(data: BacktraceData) => BacktraceData | undefined"}),(0,n.jsxs)(t.td,{children:["Triggers an event every time an exception in the managed environment occurs, which allows you to skip the report (by returning a null value) or to modify data that library collected before sending the report. You can use the BeforeSend event to extend attributes or JSON object data based on data the application has at the time of exception. See ",(0,n.jsx)(t.a,{href:"#modifyskip-error-reports",children:"Modify/skip error reports"}),")"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"skipReport"})}),(0,n.jsx)(t.td,{children:"(report: BacktraceReport) => boolean"}),(0,n.jsx)(t.td,{children:"If you want to ignore specific types of error reports, we recommend that you use the skipReport callback. By using it, based on the data generated in the report, you can decide to filter the report, or send it to Backtrace."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"captureUnhandledErrors"})}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"Enable unhandled errors"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"captureUnhandledPromiseRejections"})}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"Enable unhandled promise rejection"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"timeout"})}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"How long to wait in ms before timing out the connection"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"15000"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ignoreSslCertificate"})}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"Ignore SSL Certificate errors"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"rateLimit"})}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"Limits the number of reports the client will send per minute. If set to '0', there is no limit. If set to a value greater than '0' and the value is reached, the client will not send any reports until the next minute."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"0"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"metrics"})}),(0,n.jsx)(t.td,{children:"BacktraceMetricsOptions"}),(0,n.jsxs)(t.td,{children:["See ",(0,n.jsx)(t.a,{href:"#application-stability-metrics",children:"Backtrace Stability Metrics"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"breadcrumbs"})}),(0,n.jsx)(t.td,{children:"BacktraceBreadcrumbsSettings"}),(0,n.jsxs)(t.td,{children:["See ",(0,n.jsx)(t.a,{href:"#breadcrumbs",children:"Backtrace Breadcrumbs"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"- [ ] "})})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"manually-send-an-error",children:"Manually send an error"}),"\n",(0,n.jsx)(t.p,{children:"There are several ways to send an error to Backtrace:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// send as a string\nawait client.send('This is a string!');\n\n// send as an Error\nawait client.send(new Error('This is an Error!'));\n\n// as a BacktraceReport (string)\nawait client.send(new BacktraceReport('This is a report with a string!'));\n\n// as a BacktraceReport (Error)\nawait client.send(new BacktraceReport(new Error('This is a report with a string!')));\n"})}),"\n",(0,n.jsx)(t.h3,{id:"modifyskip-error-reports",children:"Modify/skip error reports"}),"\n",(0,n.jsx)(t.p,{children:"A BeforeSend event is triggered when an exception in the managed environment occurs to which you can attach a handler.\nYou can use the BeforeSend event to scrub PII, or extend attributes or JSON object data based on data your application\nhas at the time of exception. A report can be skipped sompletely by returning a null value."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const client = BacktraceClient.initialize({\n    url: SUBMISSION_URL,\n    name: '@backtrace/browser-example',\n    version: '0.0.1',\n    beforeSend: (data: BacktraceData) => {\n        // skip the report by returning a null from the callback\n        if (!shouldSendReportToBacktrace(data)) {\n            return undefined;\n        }\n        // apply custom attribute\n        data.attributes['new-attribute\"] = 'apply-data-in-callback';\n        return data;\n    },\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"sdk-method-overrides",children:"SDK Method Overrides"}),"\n",(0,n.jsx)(t.p,{children:"BacktraceClient.builder is used to override default BacktraceClient methods. File and http operation overrides, for\nexample, can be used to implement custom encryption for data at rest or in motion."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Do not use these operations to modify the data objects. See ",(0,n.jsx)(t.a,{href:"#modifyskip-error-reports",children:"Modify/skip error reports"})," for\nthe correct method to modify a report before sending it to Backtrace."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const client = BacktraceClient.builder(options)\n    .useRequestHandler(requestHandler)\n    .useBreadcrumbSubscriber(breadcrumbSubscriber)\n    .addAttributeProvider(attributeProvider)\n    .build();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(18215);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),i=r(18215),a=r(23104),s=r(56347),c=r(205),d=r(57485),l=r(31682),o=r(89466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,a=u(e),[s,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,h]=x({queryString:r,groupId:i}),[j,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,o.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),m=(()=>{const e=l??j;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{m&&d(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),o=e=>{const t=e.currentTarget,r=d.indexOf(t),i=c[r].value;i!==n&&(l(t),s(i))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:h,onClick:o,...a,className:(0,i.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function k(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function y(e){const t=(0,b.A)();return(0,f.jsx)(k,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);