"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[79187],{61580:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(74848),t=s(28453);s(86025),s(77510),s(11470),s(19365);const i={id:"migrating",title:"Migrating from Sauce Connect Proxy 4",sidebar_label:"Migrating"},o=void 0,c={id:"secure-connections/sauce-connect-5/migrating",title:"Migrating from Sauce Connect Proxy 4",description:"This topic describes how to migrate to the new Sauce Connect Proxy version 5 from a previous install of Sauce Connect Proxy version 4.",source:"@site/docs/secure-connections/sauce-connect-5/migrating.md",sourceDirName:"secure-connections/sauce-connect-5",slug:"/secure-connections/sauce-connect-5/migrating",permalink:"/sauce-docs/pr-preview/pr-2916/secure-connections/sauce-connect-5/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/migrating.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"migrating",title:"Migrating from Sauce Connect Proxy 4",sidebar_label:"Migrating"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2916/secure-connections/sauce-connect-5/quickstart"},next:{title:"Installation",permalink:"/sauce-docs/pr-preview/pr-2916/secure-connections/sauce-connect-5/installation"}},a={},l=[{value:"Installing and Upgrading Sauce Connect 5",id:"installing-and-upgrading-sauce-connect-5",level:2},{value:"Major Differences",id:"major-differences",level:2},{value:"Unsupported Features",id:"unsupported-features",level:2},{value:"Quick Start using <code>sc legacy</code>",id:"quick-start-using-sc-legacy",level:2},{value:"CLI Changes in Sauce Connect 5",id:"cli-changes-in-sauce-connect-5",level:2},{value:"Changed Flags",id:"changed-flags",level:3},{value:"Removed Flags",id:"removed-flags",level:3},{value:"New Behavior in Sauce Connect 5",id:"new-behavior-in-sauce-connect-5",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Domain Regexes",id:"domain-regexes",level:3},{value:"Alternatives to Deprecated Features",id:"alternatives-to-deprecated-features",level:2},{value:"Readiness Checks",id:"readiness-checks",level:3},{value:"PID Files",id:"pid-files",level:3},{value:"Log Rotation",id:"log-rotation",level:3},{value:"Proxy Updates",id:"proxy-updates",level:2},{value:"Transition Timeline",id:"transition-timeline",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This topic describes how to migrate to the new Sauce Connect Proxy version 5 from a previous install of Sauce Connect Proxy version 4."}),"\n",(0,r.jsx)(n.h2,{id:"installing-and-upgrading-sauce-connect-5",children:"Installing and Upgrading Sauce Connect 5"}),"\n",(0,r.jsxs)(n.p,{children:["You can now install or upgrade Sauce Connect version 5 with a package manager system such as Homebrew, Debian or RPM, and upgrading to the latest release is now much easier. If you prefer, there is still the option to download binary files as before. See ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/",children:"Sauce Connect 5 Install"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"major-differences",children:"Major Differences"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sc run"})," is now used to start a tunnel, as there are now other subcommands that can be used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--tunnel-name"})," is now required."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--region"})," is now required."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping",children:"SSL Certificate Bumping"})," is now ",(0,r.jsx)(n.strong,{children:"OFF"})," by default, and is called TLS Resigning."]}),"\n",(0,r.jsx)(n.li,{children:"Domain matching for deny/direct/tunnel domains now uses the standard regex format."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"unsupported-features",children:"Unsupported Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Selenium Relay has been removed."}),"\n",(0,r.jsx)(n.li,{children:"PID file has been removed."}),"\n",(0,r.jsx)(n.li,{children:"Readyfile has been removed."}),"\n",(0,r.jsx)(n.li,{children:"Log rotation has been removed."}),"\n",(0,r.jsx)(n.li,{children:"Proxy autodetection is not supported."}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"quick-start-using-sc-legacy",children:["Quick Start using ",(0,r.jsx)(n.code,{children:"sc legacy"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/legacy/",children:(0,r.jsx)(n.code,{children:"sc legacy"})})," command is used to translate SC4 configuration to SC5."]}),"\n",(0,r.jsx)(n.p,{children:"For a quick sanity check, you can start Sauce Connect with the legacy command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ sc5 legacy -c orig.yaml\n2024/01/31 21:57:42.194037 [control] [INFO] Sauce Connect Proxy version=5.0.0\n2024/01/31 21:57:42.194381 [control] [INFO] please wait for 'you may start your tests' to start your tests\n2024/01/31 21:57:42.194387 [control] [INFO] provisioning Sauce Connect region=us-west name=v4-tunnel\n2024/01/31 21:57:49.183799 [control] [INFO] Sauce Connect running id=b45cb99acace494eb7f5ea0de5384b78\n2024/01/31 21:57:49.183896 [tunnel] [INFO] waiting for Sauce Connect server to be reachable\n2024/01/31 21:57:49.394606 [tunnel] [INFO] connecting to address=maki1641.miso.saucelabs.com:443\n2024/01/31 21:57:50.027660 [tunnel] [INFO] connecting to address=maki1641.miso.saucelabs.com:443\n2024/01/31 21:57:50.027703 [tunnel] [INFO] established connection to Sauce Connect server active=1/2\n2024/01/31 21:57:50.396688 [control] [INFO] Sauce Connect is up, you may start your tests\n2024/01/31 21:57:50.500205 [tunnel] [INFO] established connection to Sauce Connect server active=2/2\n"})}),"\n",(0,r.jsx)(n.p,{children:"However, the legacy option will be removed in later versions of Sauce Connect, so we recommend using the legacy command to translate the config file to the new version. You can then use the new config file with the sc run command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ cat orig.yaml\napi-key: xxxx\nregion: us-west\ntunnel-name: v4-tunnel\nuser: saucebot\n$ sc5 legacy -c orig.yaml --output-config-file new.yaml\n$ cat new.yaml\naccess-key: xxxx\nregion: us-west\ntunnel-name: v4-tunnel\nusername: saucebot\n$ sc run -c new.yaml\n2024/01/31 21:57:42.194037 [control] [INFO] Sauce Connect Proxy version=5.0.0\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that there are some options that are removed in SC5, and will be dropped from the new config file."}),"\n",(0,r.jsx)(n.p,{children:"If there are any options that require manual intervention, the command will fail with an error message."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": The legacy command will use the config file, environment variables, and CLI flags to generate the SC5 configuration file. If you're using environment variables and CLI flags to dynamically generate Sauce Connect configuration, you should review the configuration file that is generated. Options that should be in environment variables or CLI flags should be extracted from the config file."]}),"\n",(0,r.jsx)(n.h2,{id:"cli-changes-in-sauce-connect-5",children:"CLI Changes in Sauce Connect 5"}),"\n",(0,r.jsxs)(n.p,{children:["The following flags have changed or been removed with Sauce Connect 5. In addition, to start a tunnel, you'll need to use ",(0,r.jsx)(n.code,{children:"sc run"})," (previously just ",(0,r.jsx)(n.code,{children:"sc"})," in version 4). Refer to the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect CLI"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"changed-flags",children:"Changed Flags"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version 4.x"}),(0,r.jsx)(n.th,{children:"Version 5.x"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--user"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--username"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--api-key"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--access-key"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--logfile"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--log-file"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--shared-tunnel"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--shared"})," (accepts values: all)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--dns"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--dns-server"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--cainfo"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--cacert-file"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--verbose"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--log-level"}),", ",(0,r.jsx)(n.code,{children:"--log-http"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--fast-fail-regexps"})," (URL regex)"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--deny-domains"})," (list of domain regexps)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--no-remove-colliding-tunnels"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--tunnel-pool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--no-ssl-bump-domains"})," (list of domain globs)"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--tls-passthrough-domains"})," (list of domain regexps)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--tunnel-domains"})," (list of domain globs)"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--tunnel-domains"})," (list of domain regexps)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--direct-domains"})," (list of domain globs)"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--direct-domains"})," (list of domain regexps)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--pac-auth"}),", ",(0,r.jsx)(n.code,{children:"--proxy-userpwd"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--auth"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--proxy-localhost"})," (flag, send localhost through proxy)"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--proxy-localhost"})," (configure localhost access: allow, direct, deny)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--proxy-tunnel"})," (proxy saucelabs tunnel connection)"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--proxy-sauce"})," (proxy any saucelabs.com connection)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--status-address"})," (status info only)"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--api-address"})," (several endpoints, including metrics)"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"removed-flags",children:"Removed Flags"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version 4.x"}),(0,r.jsx)(n.th,{children:"Version 5.x"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--autodetect"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--doctor"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--experimental"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--extra-info"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--log-stats"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--max-logsize"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--no-autodetect"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--ocsp"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--output-format"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--pidfile"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--readyfile"})}),(0,r.jsxs)(n.td,{children:["see ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/readiness-checks/",children:"Readiness Checks"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--se-port"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--tunnel-cainfo"})}),(0,r.jsx)(n.td,{children:"removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--vm-version"})}),(0,r.jsx)(n.td,{children:"removed"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"new-behavior-in-sauce-connect-5",children:"New Behavior in Sauce Connect 5"}),"\n",(0,r.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsxs)(n.p,{children:["Any credentials (proxy, sites under test) to be used have been consolidated into the ",(0,r.jsx)(n.code,{children:"--auth"})," flag which is in the ",(0,r.jsx)(n.code,{children:"<username[:password]@host:port>"})," format."]}),"\n",(0,r.jsx)(n.p,{children:"For example, if you have a parent proxy with authorization, but also have a SUT with authorization, you would use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"--proxy 1.2.3.4:3128 --auth foo:bar@1.2.3.4:3128 --auth test:testpass@10.0.0.100:8080\n"})}),"\n",(0,r.jsx)(n.h3,{id:"domain-regexes",children:"Domain Regexes"}),"\n",(0,r.jsx)(n.p,{children:"The following options now use standard regexes to control SC5 behavior:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"deny-domains"}),"\n",(0,r.jsx)(n.li,{children:"direct-domains"}),"\n",(0,r.jsx)(n.li,{children:"tls-passthrough-domains"}),"\n",(0,r.jsx)(n.li,{children:"tls-resign-domains"}),"\n",(0,r.jsx)(n.li,{children:"tunnel-domains"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example, to deny access to any google.com domain, you would use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"--deny-domains '^.*\\.google\\.com$'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also prefix the option with a ",(0,r.jsx)(n.code,{children:"-"})," character to remove it from the list, so to deny access to any google.com domain, but allow mail.google.com, you could use:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"--deny-domains '^.*\\.google\\.com$'  --deny-domains '-^mail\\.google\\.com$'\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://regex101.com/",children:"Regex 101"})," is an excellent site to troubleshoot regexes."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": Pay attention to shell wildcard rules if you're using CLI flags for these settings. The options should be wrapped with quotation marks to avoid issues. Using config files is recommended to avoid shell wildcard expansion issues."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": ",(0,r.jsx)(n.code,{children:"."})," is a wildcard, so if you're matching domains separated by periods, they should be escaped with backslashes."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": To ensure you're not matching any extra domains, use the ",(0,r.jsx)(n.code,{children:"^"})," and ",(0,r.jsx)(n.code,{children:"$"})," characters to mark the start and end of the domain to be matched."]}),"\n",(0,r.jsx)(n.h2,{id:"alternatives-to-deprecated-features",children:"Alternatives to Deprecated Features"}),"\n",(0,r.jsx)(n.h3,{id:"readiness-checks",children:"Readiness Checks"}),"\n",(0,r.jsxs)(n.p,{children:["SC5 has been designed to integrate with Kubernetes and other container management systems. The ",(0,r.jsx)(n.code,{children:"readyfile"})," and ",(0,r.jsx)(n.code,{children:"status-address"})," options have been replaced by the ",(0,r.jsx)(n.code,{children:"api-address"})," option. See ",(0,r.jsx)(n.a,{href:"https://docs.saucelabs.com/secure-connections/sauce-connect-5/operation/readiness-checks/",children:"Readiness Checks"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"pid-files",children:"PID Files"}),"\n",(0,r.jsx)(n.p,{children:"Tracking process state through a PID file is error-prone and no longer recommended, and the PID file option has been removed. If you need to track process health, we recommend running it as a system service (ie SystemD) or as a Docker container."}),"\n",(0,r.jsx)(n.h3,{id:"log-rotation",children:"Log Rotation"}),"\n",(0,r.jsx)(n.p,{children:"SC5 leaves log management to third party tools such as journald. It can log to stdout or a single file."}),"\n",(0,r.jsx)(n.h2,{id:"proxy-updates",children:"Proxy Updates"}),"\n",(0,r.jsxs)(n.p,{children:["Sauce Connect 5 no longer uses the ",(0,r.jsx)(n.code,{children:"HTTP(S)_PROXY"})," and ",(0,r.jsx)(n.code,{children:"NO_PROXY"})," environment variables."]}),"\n",(0,r.jsxs)(n.p,{children:["To send REST API (ie, starting or stopping a tunnel) traffic through the proxy, use the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--proxy-sauce",children:"--proxy-sauce"})," option."]}),"\n",(0,r.jsxs)(n.p,{children:["To send tunnel (site under test) traffic through a proxy, use the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--proxy",children:"--proxy"})," option."]}),"\n",(0,r.jsxs)(n.p,{children:["Most proxy combinations can be controlled with these two options.\nHowever, if you were using the ",(0,r.jsx)(n.code,{children:"NO_PROXY"})," option to exclude various sites under test from using a parent proxy, you will likely need to use a ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--pac",children:"PAC file"})," instead.\nThe endpoints listed in the ",(0,r.jsx)(n.code,{children:"NO_PROXY"})," option would use a 'DIRECT' mode in the PAC, and the default would be the proxy."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you wanted ",(0,r.jsx)(n.a,{href:"https://example.com",children:"https://example.com"})," to skip the proxy, and everything else to go through the proxy, you would use the following PAC file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function FindProxyForURL(url, host) {\n  if (dnsDomainIs(host, "example.com"))\n    return "DIRECT";\n\n\n  return "PROXY localhost:3128";\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"transition-timeline",children:"Transition Timeline"}),"\n",(0,r.jsx)(n.p,{children:"Sauce Connect version 5 was released January 16, 2024 and Sauce Connect version 4 is now in maintenance mode until its scheduled End of Life on December 31, 2024. During this period, other than security patches and bug fixes, all new features for Sauce Connect will be released on version 5 only."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var r=s(34164);const t={tabItem:"tabItem_Ymn6"};var i=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,o),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(96540),t=s(34164),i=s(23104),o=s(56347),c=s(205),a=s(57485),l=s(31682),d=s(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const t=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=u(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,h]=j({queryString:s,groupId:t}),[p,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),g=(()=>{const e=l??p;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{g&&a(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:r,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=a.indexOf(n),t=c[s].value;t!==r&&(l(n),o(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:i}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(b,{...e,children:h(e.children)},String(n))}},77510:(e,n,s)=>{var r=s(96540);s(74848);s(86425);r.Component}}]);