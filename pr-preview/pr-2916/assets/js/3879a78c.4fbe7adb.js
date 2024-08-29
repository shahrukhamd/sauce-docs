"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[19649],{1292:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var t=r(74848),i=r(28453),a=r(11470),o=r(19365),l=r(86025);const s={id:"setup",title:"Setting Up Backtrace for Unreal Engine",sidebar_label:"Setup",description:"Add Backtrace to your Unreal Engine project."},c=void 0,d={id:"error-reporting/platform-integrations/unreal/setup",title:"Setting Up Backtrace for Unreal Engine",description:"Add Backtrace to your Unreal Engine project.",source:"@site/docs/error-reporting/platform-integrations/unreal/setup.md",sourceDirName:"error-reporting/platform-integrations/unreal",slug:"/error-reporting/platform-integrations/unreal/setup",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/unreal/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/unreal/setup.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"setup",title:"Setting Up Backtrace for Unreal Engine",sidebar_label:"Setup",description:"Add Backtrace to your Unreal Engine project."},sidebar:"backtrace",previous:{title:"HelpShift SDK",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/unity/helpshift"},next:{title:"Attributes",permalink:"/sauce-docs/pr-preview/pr-2916/error-reporting/platform-integrations/unreal/attributes"}},h={},u=[{value:"Features",id:"features",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Initialize the Backtrace Client",id:"initialize-the-backtrace-client",level:2},{value:"For Crashes in the Editor",id:"for-crashes-in-the-editor",level:4},{value:"For Crashes in Packaged Builds",id:"for-crashes-in-packaged-builds",level:3},{value:"Enable the Crash Reporter",id:"enable-the-crash-reporter",level:4},{value:"Configure the Crash Reporter",id:"configure-the-crash-reporter",level:4},{value:"Upload Debug Symbols",id:"upload-debug-symbols",level:2},{value:"Verify the Setup",id:"verify-the-setup",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Add Backtrace to your Unreal Engine project to automatically detect and report native crashes that occur in your game."}),"\n",(0,t.jsx)(n.p,{children:"Backtrace supports Unreal Engine's Crash Reporter, therefore installation of a Backtrace SDK is not required to capture crashes."}),"\n","\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.p,{children:"The Backtrace Unreal plugin reports on the following types of errors:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Crashes - An end to the game play experience, where the game crashes or restarts."}),"\n",(0,t.jsx)(n.li,{children:"Hangs (mobile only) - Errors that occur when a game or an app is non-responsive."}),"\n",(0,t.jsx)(n.li,{children:"Out of memory crashes (mobile only) - Terminations of your game or app due to low memory conditions."}),"\n",(0,t.jsx)(n.li,{children:"Asserts - Used to detect and diagnose unexpected or invalid runtime conditions during development."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Supported Platforms"}),(0,t.jsx)(n.th,{children:"Supported Systems"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mobile"}),(0,t.jsx)(n.td,{children:"Android, iOS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PC"}),(0,t.jsx)(n.td,{children:"Windows, MacOS, Linux"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Game Consoles"}),(0,t.jsx)(n.td,{children:"PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Xbox Series S, Nintendo Switch, Steam Deck"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For on-premise (self-hosted) users, the integration for Unreal Engine requires specific packages. For more information, contact support."})}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Backtrace account (",(0,t.jsx)(n.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,t.jsx)(n.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,t.jsx)(n.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A Backtrace project and a ",(0,t.jsx)(n.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Unreal Engine version 4.16 to 5.2"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"initialize-the-backtrace-client",children:"Initialize the Backtrace Client"}),"\n",(0,t.jsxs)(a.A,{groupId:"platforms",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"},{label:"Game Consoles",value:"GameConsoles"},{label:"Steam Deck",value:"SteamDeck"}],children:[(0,t.jsxs)(o.A,{value:"windows",children:[(0,t.jsx)(n.h4,{id:"for-crashes-in-the-editor",children:"For Crashes in the Editor"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the root directory for your Unreal Engine project, open the Config folder."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the ",(0,t.jsx)(n.code,{children:"DefaultEngine.ini"})," file and paste it into the Engine > Config folder."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If the Engine folder doesn't exist at the root directory for your Unreal Engine project, create a new folder and name it Engine. Then in the Engine folder, create another folder and name it Config."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Rename the file to ",(0,t.jsx)(n.code,{children:"UserEngine.ini"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"UserEngine.ini"})," file and add the following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[CrashReportClient]\nCrashReportClientVersion=1.0\nDataRouterUrl="https://unreal.backtrace.io/post/{subdomain}/{submission-token}"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the ",(0,t.jsx)(n.code,{children:"DataRouterUrl"}),", provide the name of your ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/unreal/setup/#what-youll-need",children:"subdomain and a submission token"}),"."]}),"\n"]}),"\n"]}),"When your app or game crashes in the Unreal Editor, the Unreal Engine Crash Reporter dialog will appear and allow you to send the crash report to your Backtrace instance.",(0,t.jsx)(n.h3,{id:"for-crashes-in-packaged-builds",children:"For Crashes in Packaged Builds"}),(0,t.jsx)(n.h4,{id:"enable-the-crash-reporter",children:"Enable the Crash Reporter"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Unreal Editor, go to ",(0,t.jsx)(n.strong,{children:"Edit > Project Settings"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'In the Project Settings, search for "crash reporter".'}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Packaging"}),", enable ",(0,t.jsx)(n.strong,{children:"Include Crash Reporter"}),".","\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/error-reporting/unreal-enable-crashreporter.png"),alt:"Enable the Crash Reporter in the Unreal Editor."}),"\n"]}),"\n"]}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you're building from the command line, add the ",(0,t.jsx)(n.code,{children:"-crashreporter"})," flag."]})}),(0,t.jsx)(n.h4,{id:"configure-the-crash-reporter",children:"Configure the Crash Reporter"}),"You can configure the crash reporter to be the default for all packaged builds or for a single packaged build.","To configure the crash reporter as the default for all packaged builds:",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"In the root directory for your Unreal Engine project, open the Config folder."}),"\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.code,{children:"DefaultEngine.ini"})," file and paste it into the following directory:\n",(0,t.jsx)(n.code,{children:"[UNREAL_ENGINE]/UnrealEngine/Engine/Programs/CrashReportClient/Config"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The directory could also be under ",(0,t.jsx)(n.code,{children:"C:/Program Files/Epic Games/UE_[version]"}),". You can also search your system for 'CrashReportClient' to find it."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.code,{children:"DefaultEngine.ini"})," file and add the following lines:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[CrashReportClient]\nCrashReportClientVersion=1.0\nDataRouterUrl="https://unreal.backtrace.io/post/{subdomain}/{submission-token}"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["For the ",(0,t.jsx)(n.code,{children:"DataRouterUrl"}),", provide the name of your ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/unreal/setup/#what-youll-need",children:"subdomain and a submission token"}),"."]}),"\n"]}),"To configure the crash reporter for a packaged build:",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"In the root directory for your Unreal Engine project, open the Config folder."}),"\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.code,{children:"DefaultEngine.ini"})," file and paste it into the following directory:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For Unreal Engine 4.25 and earlier:\n",(0,t.jsx)(n.code,{children:"[BUILD_DIRECTORY]/WindowsNoEditor/Engine/Programs/CrashReportClient/Config/NoRedist"})]}),"\n",(0,t.jsxs)(n.li,{children:["For Unreal Engine 4.26 and higher:\n",(0,t.jsx)(n.code,{children:"[BUILD_DIRECTORY]/WindowsNoEditor/Engine/Restricted/NoRedist/Programs/CrashReportClient/Config"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Create the subdirectories if they do not exist."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.code,{children:"DefaultEngine.ini"})," file and add the following lines:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[CrashReportClient]\nCrashReportClientVersion=1.0\nDataRouterUrl="https://unreal.backtrace.io/post/{subdomain}/{submission-token}"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["For the ",(0,t.jsx)(n.code,{children:"DataRouterUrl"}),", provide the name of your ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/unreal/setup/#what-youll-need",children:"subdomain and a submission token"}),"."]}),"\n"]})]}),(0,t.jsxs)(o.A,{value:"android",children:["Integrate the ",(0,t.jsx)(n.a,{href:"https://github.com/backtrace-labs/backtrace-android",children:"backtrace-android"})," error reporting library with your Unreal Engine game for Android written in Java or Kotlin.",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download ",(0,t.jsx)(n.a,{href:"https://gist.github.com/ianrice07/36d8731f0d1af10af4803288c7c86c10",children:"BacktraceAndroid_UPL.xml"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"BacktraceAndroid_UPL.xml"})," file, provide the name of your ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/unreal/setup/#what-youll-need",children:"subdomain and a submission token"})," for ",(0,t.jsx)(n.code,{children:"BacktraceCredentials"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Java:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BacktraceCredentials credentials = new BacktraceCredentials("https://submit.backtrace.io/{subdomain}/{submission-token}/json");\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Kotlin:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'val backtraceCredentials = BacktraceCredentials("https://submit.backtrace.io/{subdomain}/{submission-token}/json")\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the directory for your Unreal Engine project, locate your app or game's ",(0,t.jsx)(n.code,{children:"Build.cs"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Place the ",(0,t.jsx)(n.code,{children:"BacktraceAndroid_UPL.xml"})," file in the same directory with the ",(0,t.jsx)(n.code,{children:"Build.cs"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Build.cs"})," file, add the following lines at the end of the ",(0,t.jsx)(n.code,{children:"ModuleRules"})," class constructor:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'if (Target.Platform == UnrealTargetPlatform.Android)\n{\n  string PluginPath = Utils.MakePathRelativeTo(ModuleDirectory, Target.RelativeEnginePath);\n  AdditionalPropertiesForReceipt.Add("AndroidPlugin", System.IO.Path.Combine(PluginPath, "BacktraceAndroid_UPL.xml"));\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://gist.github.com/lysannep/6c09a572baffede96cd250dbdf01279a#file-backtracewrapper-h",children:"BacktraceWrapper.h"})," header file and add it to your GameInstance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To initialize the Backtrace client, use ",(0,t.jsx)(n.code,{children:"BacktraceIO::FInitializeBacktraceClient"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It's recommended to initialize the client from the ",(0,t.jsx)(n.code,{children:"GameInstance::OnStart()"})," method. However, if the method is not available, you can initialize the client with any method you use to start your app or game process."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Optionally, you can specify custom attributes and file attachment paths to submit with your error reports. If you choose to specify file attachment paths, they must be specified as Android paths. For example, to specify a file attachment path for your ",(0,t.jsx)(n.code,{children:"ProjectSavedDir()"}),", use:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'if (Target.Platform == UnrealTargetPlatform.Android)\n#include "Misc/App.h"\n#if PLATFORM_ANDROID\nextern FString GFilePathBase;\nFString FileAttachmentPath = GFilePathBase + FString("/UE4Game/") + FApp::GetName() + TEXT("/") + FApp::GetName() + TEXT("/Saved") + TEXT("MyFileName.txt");\n#endif\n'})}),(0,t.jsxs)(n.p,{children:["For more details on how to convert your Unreal Engine paths to Android paths, see the conversion functions for ",(0,t.jsx)(n.code,{children:"FAndroidPlatformFile::PathToAndroidPaths"})," in the ",(0,t.jsx)(n.code,{children:"AndroidPlatformFile.cpp"})," file."]})]}),"\n"]}),"\n"]}),"To change the default configuration settings for the Backtrace client, you can change the settings in the ",(0,t.jsx)(n.code,{children:"BacktraceAndroid_UPL.xml"})," file. For more information, see ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/android/configuration/",children:"Configuring Backtrace for Android"})," for the backtrace-android library."]}),(0,t.jsxs)(o.A,{value:"ios",children:["Integrate the ",(0,t.jsx)(n.a,{href:"https://github.com/backtrace-labs/backtrace-cocoa",children:"backtrace-cocoa"})," error reporting library with your Unreal Engine game for iOS written in Swift or Objective-C.",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From ",(0,t.jsx)(n.a,{href:"https://github.com/backtrace-labs/backtrace-cocoa/releases/tag/1.7.0",children:"Assets"}),", download and extract the ",(0,t.jsx)(n.code,{children:"Backtrace.framework.zip"})," and the ",(0,t.jsx)(n.code,{children:"Backtrace_PLCrashReporter.framework.zip"})," files."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy and paste the ",(0,t.jsx)(n.code,{children:"Backtrace.framework.zip"})," and the ",(0,t.jsx)(n.code,{children:"Backtrace_PLCrashReporter.framework.zip"})," folders into the directory for your Unreal Engine project."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Locate your app or game's ",(0,t.jsx)(n.code,{children:"Build.cs"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Build.cs"})," file, add the following lines at the end of the ",(0,t.jsx)(n.code,{children:"ModuleRules"})," class constructor:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'if (Target.Platform == UnrealTargetPlatform.IOS)\n{\n  PublicAdditionalFrameworks.AddRange(\n    new Framework[]\n  {\n    new Framework("Backtrace", "/Library/Frameworks/Backtrace.framework", "", true),\n    new Framework("Backtrace_PLCrashReporter", "/Library/Frameworks/Backtrace_PLCrashReporter.framework", "", true)\n  }\n    );\n}\n'})}),"\n"]}),"\n"]}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Make sure to reflect the path to where you've placed both frameworks in your game project."})}),(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To initialize the Backtrace client, use the following to import ",(0,t.jsx)(n.code,{children:"Backtrace-Swift.h"})," from ",(0,t.jsx)(n.code,{children:"Backtrace.framework/Headers"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#if PLATFORM_IOS\n#import <Backtrace/Backtrace-Swift.h>\n#endif\n\nvoid UYourGameInstanceBase::OnStart()\n{\n#if PLATFORM_IOS\n\nBacktraceCredentials *credentials = [[BacktraceCredentials alloc]\n        initWithSubmissionUrl: [NSURL URLWithString: @"https://submit.backtrace.io/{subdomain}/{submission-token}/plcrash"]];\nBacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]\n                                                  initWithCredentials: credentials\n                                                  dbSettings: [[BacktraceDatabaseSettings alloc] init]\n                                                  reportsPerMin: 3\n                                                  allowsAttachingDebugger: NO\n                                                  detectOOM: TRUE];\nBacktraceClient.shared = [[BacktraceClient alloc] initWithConfiguration: configuration error: nil];\n#endif\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the ",(0,t.jsx)(n.code,{children:"initWithSubmissionUrl"}),", provide the name of your ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/unreal/setup/#what-youll-need",children:"subdomain and a submission token"}),"."]}),"\n"]}),"\n"]}),"For information on how to change the default configuration settings for the Backtrace client, see ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/ios/configuration/",children:"Configuring Backtrace for iOS"}),"."]}),(0,t.jsxs)(o.A,{value:"macos",children:["To integrate error reporting in your Unreal Engine game for macOS, see ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/plcrash-reporter/",children:"PLCrashReporter"}),"."]}),(0,t.jsxs)(o.A,{value:"linux",children:["To integrate error reporting in your Unreal Engine game for Linux, see the ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/crashpad/",children:"Crashpad Integration Guide"}),"."]}),(0,t.jsxs)(o.A,{value:"GameConsoles",children:["To integrate error reporting in your Unreal Engine game for game consoles, see the ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/overview",children:"Video Game Console Integration Guides"}),"."]}),(0,t.jsxs)(o.A,{value:"SteamDeck",children:["Follow the instructions for setting up crash reporting in Windows. The Steam Deck will not show the CrashReportClient after a crash, so there will be no option for users to click the send button. To enable sending, ",(0,t.jsx)(n.code,{children:"-Unattendded"})," can be added to the launch options for the game. This option sends crash reports without user intervention or knowledge, like the Windows client normally allows."]})]}),"\n",(0,t.jsx)(n.h2,{id:"upload-debug-symbols",children:"Upload Debug Symbols"}),"\n",(0,t.jsx)(n.p,{children:"You must now ensure your build environment has been configured to generate debug symbols, which can then be uploaded to your Backtrace instance, a connected Symbol Server, an Amazon S3 bucket, or a Google Cloud storage bucket."}),"\n",(0,t.jsxs)(n.p,{children:["For information on how to generate symbols, see ",(0,t.jsx)(n.a,{href:"/error-reporting/project-setup/symbolication/",children:"Symbolication"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"verify-the-setup",children:"Verify the Setup"}),"\n",(0,t.jsx)(n.p,{children:"At this point, you've installed and setup the Backtrace client to automatically capture crashes in your Unreal Engine game or app."}),"\n",(0,t.jsx)(n.p,{children:"To test the integration, send a crash report to your Backtrace instance."}),"\n",(0,t.jsxs)(a.A,{groupId:"platforms",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"},{label:"Game Consoles",value:"GameConsoles"},{label:"Steam Deck",value:"SteamDeck"}],children:[(0,t.jsxs)(o.A,{value:"windows",children:["To crash your game when it starts, create a class called MyActor and reference a blueprint. The blueprint can be attached to the BeginPlay event.","The header file (which has the .h extension) contains the class definitions and functions, while the implementation of the class is defined by the .cpp file. For example:",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MyActor.h"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'// Fill out your copyright notice in the Description page of Project Settings.\n\u200b\n#pragma once\n\u200b\n#include "CoreMinimal.h"\n#include "GameFramework/Actor.h"\n#include "GenericPlatform/GenericPlatformCrashContext.h"\n#include "MyActor.generated.h"\n\u200b\nUCLASS()\nclass BACKTRACE_API AMyActor : public AActor\n{\n\tGENERATED_BODY()\n\npublic:\n\t// Sets default values for this actor\'s properties\n\tAMyActor();\n\u200b\nprotected:\n\t// Called when the game starts or when spawned\n\tvirtual void BeginPlay() override;\n\u200b\npublic:\n\t// Called every frame\n\tvirtual void Tick(float DeltaTime) override;\n\u200b\n\tUFUNCTION(BlueprintCallable, Category = "Backtrace Tools")\n\t\tvoid DoCrashMe();\n\u200b\n};\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MyActor.cpp"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'// Fill out your copyright notice in the Description page of Project Settings.\n\u200b\n\u200b\n#include "MyActor.h"\n\u200b\n// Sets default values\nAMyActor::AMyActor()\n{\n \t// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don\'t need it.\n\tPrimaryActorTick.bCanEverTick = true;\n\u200b\n}\n\u200b\n// Called when the game starts or when spawned\nvoid AMyActor::BeginPlay()\n{\n\tSuper::BeginPlay();\n\t{\n\u200b\n\t\t\tFGenericCrashContext::SetGameData(TEXT("BluePrintCallStack"), TEXT("BluePrintCallStackValue"));\n\t}\n\n}\n\u200b\n// Called every frame\nvoid AMyActor::Tick(float DeltaTime)\n{\n\tSuper::Tick(DeltaTime);\n\u200b\n}\n\u200b\nvoid AMyActor::DoCrashMe()\n{\n\u200b\n\tUE_LOG(LogTemp, Fatal, TEXT("I crash and burn. Bye bye now"));\n\u200b\n}\n'})}),"\n"]}),"\n"]})]}),(0,t.jsx)(o.A,{value:"android",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Java:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"try {\n  // throw exception here\n}\ncatch (Exception exception) {\n  backtraceClient.send(new BacktraceReport(e));\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Kotlin:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"try {\n  // throw exception here\n}\ncatch (e: Exception) {\n  backtraceClient.send(BacktraceReport(e))\n}\n"})}),"\n"]}),"\n"]})}),(0,t.jsx)(o.A,{value:"ios",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Swift:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-objc",children:'import UIKit\nimport Backtrace\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  var window: UIWindow?\n\n  func application(_ application: UIApplication,\n                   didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n\n      let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!,\n                                                      token: "token")\n      BacktraceClient.shared = try? BacktraceClient(credentials: backtraceCredentials)\n\n      do {\n          try throwingFunc()\n      } catch {\n          BacktraceClient.shared?.send { (result) in\n              print(result)\n          }\n      }\n\n      return true\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Objective-C:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-objc",children:'#import "AppDelegate.h"\n@import Backtrace;\n\n@interface AppDelegate ()\n\n@end\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n\n  BacktraceCredentials *credentials = [[BacktraceCredentials alloc]\n                                       initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]\n                                       token: @"token"];\n  BacktraceClient.shared = [[BacktraceClient alloc] initWithCredentials: credentials error: nil];\n\n  // sending NSException\n  @try {\n      NSArray *array = @[];\n      NSObject *object = array[1]; // will throw exception\n  } @catch (NSException *exception) {\n      [[BacktraceClient shared] sendWithException: exception completion:^(BacktraceResult * _Nonnull result) {\n          NSLog(@"%@", result);\n      }];\n  } @finally {\n\n  }\n\n  return YES;\n}\n\n@end\n'})}),"\n"]}),"\n"]})}),(0,t.jsxs)(o.A,{value:"macos",children:["To send a crash report to your Backtrace instance for macOS, see ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/plcrash-reporter/",children:"PLCrashReporter"}),"."]}),(0,t.jsxs)(o.A,{value:"linux",children:["To send a crash report to your Backtrace instance for Linux, see the ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/crashpad/#send-crash-reports",children:"Crashpad Integration Guide"}),"."]}),(0,t.jsxs)(o.A,{value:"GameConsoles",children:["To send a crash report to your Backtrace instance for game consoles, see the ",(0,t.jsx)(n.a,{href:"/error-reporting/platform-integrations/overview",children:"Video Game Console Integration Guides"}),"."]}),(0,t.jsxs)(o.A,{value:"SteamDeck",children:["To crash your game when it starts, create a class called ",(0,t.jsx)(n.code,{children:"MyActor"})," and reference a blueprint. The blueprint can be attached to the ",(0,t.jsx)(n.code,{children:"BeginPlay"})," event.","The header file (with the .h extension) contains the class definitions and functions, while the .cpp file defines the class implementation. For example:",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MyActor.h"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'// Fill out your copyright notice in the Description page of Project Settings.\n\u200b\n#pragma once\n\u200b\n#include "CoreMinimal.h"\n#include "GameFramework/Actor.h"\n#include "GenericPlatform/GenericPlatformCrashContext.h"\n#include "MyActor.generated.h"\n\u200b\nUCLASS()\nclass BACKTRACE_API AMyActor : public AActor\n{\n\tGENERATED_BODY()\n\npublic:\n\t// Sets default values for this actor\'s properties\n\tAMyActor();\n\u200b\nprotected:\n\t// Called when the game starts or when spawned\n\tvirtual void BeginPlay() override;\n\u200b\npublic:\n\t// Called every frame\n\tvirtual void Tick(float DeltaTime) override;\n\u200b\n\tUFUNCTION(BlueprintCallable, Category = "Backtrace Tools")\n\t\tvoid DoCrashMe();\n\u200b\n};\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MyActor.cpp"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'// Fill out your copyright notice in the Description page of Project Settings.\n\u200b\n\u200b\n#include "MyActor.h"\n\u200b\n// Sets default values\nAMyActor::AMyActor()\n{\n \t// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don\'t need it.\n\tPrimaryActorTick.bCanEverTick = true;\n\u200b\n}\n\u200b\n// Called when the game starts or when spawned\nvoid AMyActor::BeginPlay()\n{\n\tSuper::BeginPlay();\n\t{\n\u200b\n\t\t\tFGenericCrashContext::SetGameData(TEXT("BluePrintCallStack"), TEXT("BluePrintCallStackValue"));\n\t}\n\n}\n\u200b\n// Called every frame\nvoid AMyActor::Tick(float DeltaTime)\n{\n\tSuper::Tick(DeltaTime);\n\u200b\n}\n\u200b\nvoid AMyActor::DoCrashMe()\n{\n\u200b\n\tUE_LOG(LogTemp, Fatal, TEXT("I crash and burn. Bye bye now"));\n\u200b\n}\n'})}),"\n"]}),"\n"]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>v});var t=r(96540),i=r(34164),a=r(23104),o=r(56347),l=r(205),s=r(57485),c=r(31682),d=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const i=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=u(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,h]=f({queryString:r,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=s.indexOf(n),i=l[r].value;i!==t&&(c(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:h,onClick:d,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);