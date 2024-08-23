"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[61791],{95856:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(74848),t=r(28453),n=(r(11470),r(19365),r(86025));const o={id:"crashpad",title:"Integrating Crashpad",sidebar_label:"Integration Guide",description:"Integrate Crashpad in your Backtrace project."},s=void 0,d={id:"error-reporting/platform-integrations/crashpad",title:"Integrating Crashpad",description:"Integrate Crashpad in your Backtrace project.",source:"@site/docs/error-reporting/platform-integrations/crashpad.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/crashpad",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/crashpad",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/crashpad.md",tags:[],version:"current",lastUpdatedBy:"Rick Foster",lastUpdatedAt:1706726933e3,frontMatter:{id:"crashpad",title:"Integrating Crashpad",sidebar_label:"Integration Guide",description:"Integrate Crashpad in your Backtrace project."},sidebar:"backtrace",previous:{title:"Setup for FreeBSD",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/coresnap/setup"},next:{title:"Visual Studio",permalink:"/sauce-docs/pr-preview/pr-2903/error-reporting/platform-integrations/visual-studio"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Initial Integration",id:"initial-integration",level:2},{value:"Update Your Application",id:"update-your-application",level:3},{value:"Set the URL Parameter",id:"set-the-url-parameter",level:3},{value:"Optional Annotations",id:"optional-annotations",level:3},{value:"File Attachments",id:"file-attachments",level:3},{value:"Crash Handler Parameter",id:"crash-handler-parameter",level:3},{value:"Example Code",id:"example-code",level:3},{value:"Manage Symbols",id:"manage-symbols",level:2},{value:"Visual Studio",id:"visual-studio",level:2},{value:"Obtain Crashpad",id:"obtain-crashpad",level:3},{value:"Build From Source",id:"build-from-source",level:4},{value:"Download Built Libraries",id:"download-built-libraries",level:4},{value:"Integrate Crashpad",id:"integrate-crashpad",level:3},{value:"Integrate Into Your Build Process",id:"integrate-into-your-build-process",level:3},{value:"Add the Header Files",id:"add-the-header-files",level:3},{value:"Add the Libraries",id:"add-the-libraries",level:3},{value:"Static Linking",id:"static-linking",level:4},{value:"Dynamic Linking",id:"dynamic-linking",level:4},{value:"Verify Linker Settings",id:"verify-linker-settings",level:3},{value:"Static Linking",id:"static-linking-1",level:4},{value:"Dynamic Linking",id:"dynamic-linking-1",level:4},{value:"Debug Builds",id:"debug-builds",level:3},{value:"Ensure Symbol Generation",id:"ensure-symbol-generation",level:3},{value:"Send Crash Reports",id:"send-crash-reports",level:3},{value:"Finish",id:"finish",level:3},{value:"Additional Features of Backtrace Fork",id:"additional-features-of-backtrace-fork",level:3},{value:"Send Reports Using EXCEPTION_POINTERS in Windows",id:"send-reports-using-exception_pointers-in-windows",level:4},{value:"Windows 7, Windows Server 2008 R2, and Windows Server 2012 Support (Adding TLS 1.1/1.2 Support)",id:"windows-7-windows-server-2008-r2-and-windows-server-2012-support-adding-tls-1112-support",level:2},{value:"Additional Documentation",id:"additional-documentation",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Crashpad is an open source library initially developed by Google as a successor to the Google Breakpad library. It is used in popular software such as Google Chrome and by companies such as Slack and Spotify."}),"\n",(0,a.jsx)(i.p,{children:"For existing users of Crashpad, Backtrace has plug-and-play support. It has a robust architecture designed to allow for high customizability and stability even in the face of the most obscure software crashes."}),"\n",(0,a.jsx)(i.p,{children:"For new users, Backtrace has prepared an enhanced fork of Crashpad, allowing easier integration with the service and additional functionality (for example, HTTPS submissions on Android)."}),"\n",(0,a.jsx)(i.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["A Backtrace account (",(0,a.jsx)(i.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,a.jsx)(i.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(i.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,a.jsx)(i.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["A Backtrace project and a ",(0,a.jsx)(i.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"initial-integration",children:"Initial Integration"}),"\n",(0,a.jsxs)(i.p,{children:["If you are a Windows and Visual Studio user, review the ",(0,a.jsx)(i.a,{href:"/error-reporting/platform-integrations/visual-studio/",children:"Backtrace Visual Studio Extension Guide"})," to simplify the integration of Crashpad into your new application. If you are a Windows and Visual Studio user with an existing application, you can use manual instructions in the Visual Studio section of that guide for a step-by-step guide to integrating with Visual Studio."]}),"\n",(0,a.jsxs)(i.p,{children:["Advanced instructions are available at ",(0,a.jsx)(i.a,{href:"https://chromium.googlesource.com/crashpad/crashpad/+/HEAD/doc/developing.md",children:"the Crashpad home page"})," if you can't find what you're looking for or prefer to build Crashpad from the source. Backtrace's fork of Crashpad is available ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/tree/backtrace",children:"on Github"}),", which contains easy ",(0,a.jsx)(i.a,{href:"https://cmake.org/",children:"CMake"})," build instructions and also hosts ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/actions",children:"daily binary builds for Android, Linux, Windows, Mac and more"}),". If you would like additional assistance, don't hesitate to contact ",(0,a.jsx)(i.a,{href:"mailto:support@saucelabs.com",children:"support@saucelabs.com"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"update-your-application",children:"Update Your Application"}),"\n",(0,a.jsxs)(i.p,{children:["After Crashpad has been integrated into your application, using CMake or using prebuilt binaries, you'll need to specify the right options to ",(0,a.jsx)(i.code,{children:"StartHandler"})," to start it up, as you can see in the example app code for ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/windows/demo/demo.cpp",children:"Windows"}),", ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/macos/demo/demo.cpp",children:"MacOS"}),", ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/backtrace-android/blob/cf9d827bada51bf4332e2904b0ea06d39b99db8a/backtrace-library/src/main/cpp/backends/crashpad-backend.cpp#L124",children:"Android"})," and ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/linux/demo/demo.cpp",children:"Linux"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"set-the-url-parameter",children:"Set the URL Parameter"}),"\n",(0,a.jsxs)(i.p,{children:["Change the ",(0,a.jsx)(i.code,{children:"url"})," parameter to ",(0,a.jsx)(i.code,{children:"StartHandler"}),". Your Backtrace Project Setting > Integration Guide > Crashpad will suggest the URL to use. Generally, it will be similar to"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"https://submit.backtrace.io/<instanceSubdomain>/<submissionToken>/minidump\n"})}),"\n",(0,a.jsx)(i.h3,{id:"optional-annotations",children:"Optional Annotations"}),"\n",(0,a.jsxs)(i.p,{children:["You can use the ",(0,a.jsx)(i.code,{children:"annotations"})," map to set additional attributes. Attributes allow you to embed relevant context into each crash report and can be any data point you choose. Examples include ",(0,a.jsx)(i.code,{children:"version"}),", ",(0,a.jsx)(i.code,{children:"directx.version"}),", ",(0,a.jsx)(i.code,{children:"graphics.card"}),", etc. You can find more information on attributes in the product guide."]}),"\n",(0,a.jsx)(i.h3,{id:"file-attachments",children:"File Attachments"}),"\n",(0,a.jsxs)(i.p,{children:["You can attach files to crash data (that is, log files). To do so, add a string formatted as such to the ",(0,a.jsx)(i.code,{children:"arguments"})," parameter of the ",(0,a.jsx)(i.code,{children:"StartHandler"})," function:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:'std::vector<std::string> arguments;\narguments.push_back(\n "--attachment=FILE_PATH"\n);\n'})}),"\n",(0,a.jsx)(i.p,{children:"For example:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:'std::vector<std::string> arguments;\narguments.push_back(\n "--attachment=C:/my_app/app_2018-02-30.log"\n);\n'})}),"\n",(0,a.jsx)(i.h3,{id:"crash-handler-parameter",children:"Crash Handler Parameter"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"handler"})," is a path to an external program responsible for generating and uploading dumps; we recommend it for uploading crashes. Look for ",(0,a.jsx)(i.code,{children:"bin/crashpad_handler.exe"})," on Windows, which is suitable as a default crash handler. See below for a complete example."]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"handler"})," is executed after the application crashes, so it should be available under the specified path during its execution. That means the handler should be bundled with the application if delivered to the end-users, and its path should be relative or dynamically generated."]}),"\n",(0,a.jsx)(i.h3,{id:"example-code",children:"Example Code"}),"\n",(0,a.jsxs)(i.p,{children:["See ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/windows/demo/demo.cpp",children:"Windows"}),", ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/macos/demo/demo.cpp",children:"macOS"}),", ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/backtrace-android/blob/cf9d827bada51bf4332e2904b0ea06d39b99db8a/backtrace-library/src/main/cpp/backends/crashpad-backend.cpp#L124",children:"Android"})," and ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/linux/demo/demo.cpp",children:"Linux"})," for self-contained example code."]}),"\n",(0,a.jsx)(i.h2,{id:"manage-symbols",children:"Manage Symbols"}),"\n",(0,a.jsx)(i.p,{children:"Symbols are required to determine the source-code mapping of incoming crashes, including function name, source file, and line number. For Backtrace to effectively group and analyze your incoming crashes, you must upload application debug symbols."}),"\n",(0,a.jsxs)(i.p,{children:["To learn more about uploading and managing symbols with Backtrace, see ",(0,a.jsx)(i.a,{href:"/error-reporting/project-setup/symbolication/",children:"Symbolication"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"visual-studio",children:"Visual Studio"}),"\n",(0,a.jsxs)(i.p,{children:["If you are a Windows and Visual Studio user, review the ",(0,a.jsx)(i.a,{href:"/error-reporting/platform-integrations/visual-studio/",children:"Backtrace Visual Studio Extension Guide"})," to simplify the integration of Crashpad into your application."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"The instructions below are accurate, but consider the extension to minimize the chance of configuration errors."})}),"\n",(0,a.jsx)(i.h3,{id:"obtain-crashpad",children:"Obtain Crashpad"}),"\n",(0,a.jsx)(i.p,{children:"You can build Crashpad from the source or download Backtrace-provided library versions."}),"\n",(0,a.jsxs)(i.admonition,{title:"For Windows (x86)",type:"caution",children:[(0,a.jsxs)(i.p,{children:["The Visual C++ Redistributable for Visual Studio 2015 might be required if you have a new OS installation and don't have an IDE installed. Make sure to install the following runtime redistributable files for ",(0,a.jsx)(i.code,{children:"BacktraceCrashpadWindows.dll"}),":"]}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"  KERNEL32.dll\n    MSVCP140.dll\n    VCRUNTIME140.dll\n    api-ms-win-crt-runtime-l1-1-0.dll\n    api-ms-win-crt-string-l1-1-0.dll\n    api-ms-win-crt-heap-l1-1-0.dll\n    api-ms-win-crt-stdio-l1-1-0.dll\n    api-ms-win-crt-time-l1-1-0.dll\n    api-ms-win-crt-filesystem-l1-1-0.dll\n    ADVAPI32.dll\n"})})]}),"\n",(0,a.jsx)(i.h4,{id:"build-from-source",children:"Build From Source"}),"\n",(0,a.jsxs)(i.p,{children:["It is always possible to build Crashpad from the source. To do this, see the ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/README.md",children:"Backtrace fork build guide"}),". Backtrace added ",(0,a.jsx)(i.a,{href:"https://cmake.org/",children:"CMake"})," build scripts, making it easier to build than the original Google fork. If you want to build the Google fork regardless, you can check the ",(0,a.jsx)(i.a,{href:"https://chromium.googlesource.com/crashpad/crashpad/+/HEAD/doc/developing.md",children:"instructions"}),"."]}),"\n",(0,a.jsx)(i.h4,{id:"download-built-libraries",children:"Download Built Libraries"}),"\n",(0,a.jsxs)(i.p,{children:["Backtrace provides builds of Crashpad. We recommend using the stable version. The latest stable releases of Backtrace's Crashpad fork are available at ",(0,a.jsx)(i.a,{href:"http://get.backtrace.io/crashpad/builds/",children:"http://get.backtrace.io/crashpad/builds/"}),", and the Backtrace fork nightly builds can be found ",(0,a.jsx)(i.a,{href:"https://github.com/backtrace-labs/crashpad/actions",children:"on GitHub"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"integrate-crashpad",children:"Integrate Crashpad"}),"\n",(0,a.jsx)(i.p,{children:"After you have built Crashpad or downloaded the pre-built libraries, you must integrate the library into your application. The library is statically linked to your project, so you will not need to distribute additional projects."}),"\n",(0,a.jsxs)(i.p,{children:["There are two versions of ",(0,a.jsx)(i.code,{children:"Crashpad"})," provided in the Backtrace archive."]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"lib_mt"})," contains the Crashpad libraries built with the ",(0,a.jsx)(i.code,{children:"/MT"})," switch for static linking. ",(0,a.jsx)(i.code,{children:"lib_md"})," contains the Crashpad libraries built with the ",(0,a.jsx)(i.code,{children:"/MD"})," switch for dynamic linking."]}),"\n",(0,a.jsx)(i.p,{children:"Use the appropriate version for your application."}),"\n",(0,a.jsx)(i.h3,{id:"integrate-into-your-build-process",children:"Integrate Into Your Build Process"}),"\n",(0,a.jsxs)(i.p,{children:["This section outlines importing the ",(0,a.jsx)(i.code,{children:"Crashpad"})," library into your Visual Studio project."]}),"\n",(0,a.jsx)(i.h3,{id:"add-the-header-files",children:"Add the Header Files"}),"\n",(0,a.jsxs)(i.p,{children:["First, you'll need to add the Crashpad directory in the included path for your application. The header files for Crashpad in the provided ",(0,a.jsx)(i.code,{children:".zip"})," file are in the included directory."]}),"\n",(0,a.jsxs)(i.p,{children:["Go to the project configuration menu (Project > Properties > VC++ Directories) and set ",(0,a.jsx)(i.code,{children:"Include Directories"})," to point to the ",(0,a.jsx)(i.code,{children:"include"})," and ",(0,a.jsx)(i.code,{children:"include\\mini_chromium"})," folders of the extracted archive, as shown below."]}),"\n",(0,a.jsx)("img",{src:(0,n.A)("/img/error-reporting/minidump/include-directories.png"),alt:"set include directories"}),"\n",(0,a.jsx)(i.h3,{id:"add-the-libraries",children:"Add the Libraries"}),"\n",(0,a.jsx)(i.h4,{id:"static-linking",children:"Static Linking"}),"\n",(0,a.jsxs)(i.p,{children:["Next, you'll need to add the relevant release path (see the table above) to your ",(0,a.jsx)(i.code,{children:"Library Directories"}),"(Project > Properties > VC++ Directories). For example, if I am deploying a 64-bit Windows application, the ",(0,a.jsx)(i.code,{children:"lib_mt"}),"sub-directory is added to ",(0,a.jsx)(i.code,{children:"Library Directories"})," after downloading the appropriate Crashpad build."]}),"\n",(0,a.jsx)("img",{src:(0,n.A)("/img/error-reporting/minidump/library-static-linking.png"),alt:"library directories"}),"\n",(0,a.jsxs)(i.p,{children:["After that is done, you'll need to add the actual set of static libraries for ",(0,a.jsx)(i.code,{children:"Crashpad"}),". Navigate to your linker input settings (Project > Properties > Linker > Input), and add ",(0,a.jsx)(i.code,{children:"client.lib;util.lib;base.lib"})," as additional dependencies. See the screenshot below for an example."]}),"\n",(0,a.jsx)("img",{src:(0,n.A)("/img/error-reporting/minidump/additional-dependencies.png"),alt:"additional dependencies"}),"\n",(0,a.jsxs)(i.p,{children:["Remember to use the build of the ",(0,a.jsx)(i.code,{children:"Crashpad"})," library that corresponds with your build configuration. For example, if you are building a 32-bit Debug build, ensure that you reference the ",(0,a.jsx)(i.code,{children:".lib"})," files from the 32-bit debug build. If you encounter errors involving ",(0,a.jsx)(i.code,{children:"ITERATOR_DEBUG_LEVEL"}),", then there is likely a mismatch between your build configuration and the build of ",(0,a.jsx)(i.code,{children:"Crashpad"}),". To change the build settings, go to Build > Configuration Manager, then change your ",(0,a.jsx)(i.code,{children:"Active solution configuration"}),"."]}),"\n",(0,a.jsx)(i.h4,{id:"dynamic-linking",children:"Dynamic Linking"}),"\n",(0,a.jsxs)(i.p,{children:["If you use dynamic linking (the ",(0,a.jsx)(i.code,{children:"\\MD"})," flag), use the ",(0,a.jsx)(i.code,{children:"lib_md"})," sub-directory rather than ",(0,a.jsx)(i.code,{children:"lib_mt"}),". For example, ",(0,a.jsx)(i.code,{children:"crashpad\\lib_md"})," rather than ",(0,a.jsx)(i.code,{children:"crashpad\\lib_mt"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,n.A)("/img/error-reporting/minidump/dynamic-linking.png"),alt:"dynamic linking"}),"\n",(0,a.jsx)(i.h3,{id:"verify-linker-settings",children:"Verify Linker Settings"}),"\n",(0,a.jsx)(i.h4,{id:"static-linking-1",children:"Static Linking"}),"\n",(0,a.jsxs)(i.p,{children:["Lastly, ensure you have code generation runtime settings set to a mode compatible with static libraries, such as ",(0,a.jsx)(i.code,{children:"Multi-threaded (/MT)"}),". Go to Project > Properties > C/C++ > Code Generation and update the ",(0,a.jsx)(i.code,{children:"Runtime Library"})," setting."]}),"\n",(0,a.jsx)("img",{src:(0,n.A)("/img/error-reporting/minidump/runtime-library.png"),alt:"runtime library"}),"\n",(0,a.jsx)(i.h4,{id:"dynamic-linking-1",children:"Dynamic Linking"}),"\n",(0,a.jsxs)(i.p,{children:["If you are using dynamic linking, then ensure that you use the ",(0,a.jsx)(i.code,{children:"/MD"})," option instead of ",(0,a.jsx)(i.code,{children:"/MT"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"debug-builds",children:"Debug Builds"}),"\n",(0,a.jsxs)(i.p,{children:["If you are building in debug mode, ensure that you use the debug version of the linking compiler switches (",(0,a.jsx)(i.code,{children:"/MDd"})," and ",(0,a.jsx)(i.code,{children:"/MTd"}),"):"]}),"\n",(0,a.jsx)("img",{src:(0,n.A)("/img/error-reporting/minidump/debug-build.png"),alt:"debug mode"}),"\n",(0,a.jsx)(i.h3,{id:"ensure-symbol-generation",children:"Ensure Symbol Generation"}),"\n",(0,a.jsx)(i.p,{children:"It is required to upload symbols into Backtrace for intelligent deduplication and classification. This section explains how to enable debug symbols for your application."}),"\n",(0,a.jsxs)(i.p,{children:["Go to Project > Properties > Linker and update the ",(0,a.jsx)(i.code,{children:"Generate Debug Info"})," setting. You'll want to set it to ",(0,a.jsx)(i.code,{children:"Generate Debug Information (/DEBUG)"})," or ",(0,a.jsx)(i.code,{children:"Generate Debug Information optimized for sharing and publishing (/DEBUG:FULL)"}),". We recommend the ",(0,a.jsx)(i.code,{children:"/DEBUG"})," option if you would like to avoid the possibility of a performance impact."]}),"\n",(0,a.jsx)("img",{src:(0,n.A)("/img/error-reporting/minidump/general-debug-info.png"),alt:"debug mode"}),"\n",(0,a.jsxs)(i.p,{children:["This setting generates a ",(0,a.jsx)(i.code,{children:".pdb"})," file for your application in the build output directory. You can manually upload ",(0,a.jsx)(i.code,{children:".sym"}),", ",(0,a.jsx)(i.code,{children:".pdb"}),", and archive files containing ",(0,a.jsx)(i.code,{children:".pdb"})," or ",(0,a.jsx)(i.code,{children:".sym"})," files into Backtrace or through the command line. It is also possible to hook up Visual Studio to automatically upload symbols as they are generated. Now, you should be able to send crash reports. Ensure you've uploaded your symbols (click on ",(0,a.jsx)(i.strong,{children:"Symbols"})," under the Project Configuration page)."]}),"\n",(0,a.jsxs)(i.p,{children:["For more details, see ",(0,a.jsx)(i.a,{href:"/error-reporting/project-setup/symbolication/",children:"Symbolication"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"send-crash-reports",children:"Send Crash Reports"}),"\n",(0,a.jsxs)(i.p,{children:["Now you're ready to integrate Crashpad into your application. Add the code from the section ",(0,a.jsx)(i.a,{href:"#example-code",children:"Example code"})," above to do this."]}),"\n",(0,a.jsx)(i.h3,{id:"finish",children:"Finish"}),"\n",(0,a.jsx)(i.p,{children:"Crashes should be automatically submitted into Backtrace. As crashes generate, refresh the Project page of the associated project to see faults in real-time."}),"\n",(0,a.jsx)(i.h3,{id:"additional-features-of-backtrace-fork",children:"Additional Features of Backtrace Fork"}),"\n",(0,a.jsx)(i.h4,{id:"send-reports-using-exception_pointers-in-windows",children:"Send Reports Using EXCEPTION_POINTERS in Windows"}),"\n",(0,a.jsxs)(i.p,{children:["A new function has been added to the ",(0,a.jsx)(i.code,{children:"CrashpadClient"})," class. It's helpful, for example, when dealing with vectored exceptions. Additionally, it does not require the process to end (the exception may be handled)."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"static void DumpWithoutCrashWithException(EXCEPTION_POINTERS* pointer);\n"})}),"\n",(0,a.jsx)(i.h2,{id:"windows-7-windows-server-2008-r2-and-windows-server-2012-support-adding-tls-1112-support",children:"Windows 7, Windows Server 2008 R2, and Windows Server 2012 Support (Adding TLS 1.1/1.2 Support)"}),"\n",(0,a.jsx)(i.p,{children:"The default Crashpad crash handler binary uses WinHttp to upload crashes. On those systems, TLS 1.1 and TLS 1.2 are in the default protocol set, and only TLS 1.0 and SSL 3.0 are available by default, which Backtrace does not accept."}),"\n",(0,a.jsxs)(i.p,{children:["It should be fixed by ",(0,a.jsx)(i.a,{href:"https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392",children:"KB 3140245"}),", but you may want to add them to the default list manually via the registry. We suggest doing it in your application installer."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"Windows Registry Editor Version 5.00\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\WinHttp]\n"DefaultSecureProtocols"=dword:00000a00\n'})}),"\n",(0,a.jsx)(i.h2,{id:"additional-documentation",children:"Additional Documentation"}),"\n",(0,a.jsxs)(i.p,{children:["Additional documentation is available at the ",(0,a.jsx)(i.a,{href:"https://chromium.googlesource.com/crashpad/crashpad/",children:"Crashpad Website"}),". For more information on the ",(0,a.jsx)(i.code,{children:"crashpad_handler"}),", see ",(0,a.jsx)(i.a,{href:"https://chromium.googlesource.com/crashpad/crashpad/+/HEAD/handler/crashpad_handler.md",children:"crashpad_handler.md"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["If you're still encountering issues, contact us at ",(0,a.jsx)(i.a,{href:"mailto:support@saucelabs.com",children:"support@saucelabs.com"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,i,r)=>{r.d(i,{A:()=>o});r(96540);var a=r(18215);const t={tabItem:"tabItem_Ymn6"};var n=r(74848);function o(e){let{children:i,hidden:r,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,o),hidden:r,children:i})}},11470:(e,i,r)=>{r.d(i,{A:()=>k});var a=r(96540),t=r(18215),n=r(23104),o=r(56347),s=r(205),d=r(57485),l=r(31682),c=r(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:i,children:r}=e;return(0,a.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:r,attributes:a,default:t}}=e;return{value:i,label:r,attributes:a,default:t}}))}(r);return function(e){const i=(0,l.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,r])}function p(e){let{value:i,tabValues:r}=e;return r.some((e=>e.value===i))}function b(e){let{queryString:i=!1,groupId:r}=e;const t=(0,o.W6)(),n=function(e){let{queryString:i=!1,groupId:r}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:i,groupId:r});return[(0,d.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const i=new URLSearchParams(t.location.search);i.set(n,e),t.replace({...t.location,search:i.toString()})}),[n,t])]}function m(e){const{defaultValue:i,queryString:r=!1,groupId:t}=e,n=u(e),[o,d]=(0,a.useState)((()=>function(e){let{defaultValue:i,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:n}))),[l,h]=b({queryString:r,groupId:t}),[m,g]=function(e){let{groupId:i}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(i),[t,n]=(0,c.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:t}),f=(()=>{const e=l??m;return p({value:e,tabValues:n})?e:null})();(0,s.A)((()=>{f&&d(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),g(e)}),[h,g,n]),tabValues:n}}var g=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:i,block:r,selectedValue:a,selectValue:o,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,n.a_)(),c=e=>{const i=e.currentTarget,r=d.indexOf(i),t=s[r].value;t!==a&&(l(i),o(t))},h=e=>{let i=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;i=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;i=d[r]??d[d.length-1];break}}i?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},i),children:s.map((e=>{let{value:i,label:r,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===i?0:-1,"aria-selected":a===i,ref:e=>d.push(e),onKeyDown:h,onClick:c,...n,className:(0,t.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":a===i}),children:r??i},i)}))})}function y(e){let{lazy:i,children:r,selectedValue:t}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(i){const e=n.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,i)=>(0,a.cloneElement)(e,{key:i,hidden:e.props.value!==t})))})}function v(e){const i=m(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...i}),(0,x.jsx)(y,{...e,...i})]})}function k(e){const i=(0,g.A)();return(0,x.jsx)(v,{...e,children:h(e.children)},String(i))}},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>s});var a=r(96540);const t={},n=a.createContext(t);function o(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);