"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[12971],{55633:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=l(74848),c=l(28453);const s={id:"legacy",title:"sc legacy"},d="Sc Legacy",r={id:"dev/cli/sauce-connect-5/legacy",title:"sc legacy",description:"Usage: sc legacy [flags]",source:"@site/docs/dev/cli/sauce-connect-5/sc_legacy.md",sourceDirName:"dev/cli/sauce-connect-5",slug:"/dev/cli/sauce-connect-5/legacy",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/sauce-connect-5/legacy",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/sauce-connect-5/sc_legacy.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1724918022e3,frontMatter:{id:"legacy",title:"sc legacy"},sidebar:"dev",previous:{title:"sc run",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/sauce-connect-5/run"},next:{title:"sc completion",permalink:"/sauce-docs/pr-preview/pr-2916/dev/cli/sauce-connect-5/completion"}},o={},a=[{value:"Required",id:"required",level:2},{value:"<code>-r, --region</code>",id:"region",level:3},{value:"<code>-i, --tunnel-name</code>",id:"tunnel-name",level:3},{value:"<code>-u, --user</code>",id:"user",level:3},{value:"Options",id:"options",level:2},{value:"<code>-s, --shared-tunnel</code>",id:"shared-tunnel",level:3},{value:"<code>--tunnel-pool</code>",id:"tunnel-pool",level:3},{value:"Tunnel traffic",id:"tunnel-traffic",level:2},{value:"<code>-D, --direct-domains</code>",id:"direct-domains",level:3},{value:"<code>-t, --tunnel-domains</code>",id:"tunnel-domains",level:3},{value:"Proxy",id:"proxy",level:2},{value:"<code>-a, --auth</code>",id:"auth",level:3},{value:"<code>-T, --proxy-tunnel</code>",id:"proxy-tunnel",level:3},{value:"DNS",id:"dns",level:2},{value:"<code>--dns</code>",id:"dns",level:3},{value:"API server",id:"api-server",level:2},{value:"<code>-k, --api-key</code>",id:"api-key",level:3},{value:"Logging",id:"logging",level:2},{value:"<code>-z, --log-stats</code>",id:"log-stats",level:3},{value:"Other",id:"other",level:2},{value:"<code>--autodetect</code>",id:"autodetect",level:3},{value:"<code>--cainfo</code>",id:"cainfo",level:3},{value:"<code>-c, --config-file</code>",id:"config-file",level:3},{value:"<code>--experimental</code>",id:"experimental",level:3},{value:"<code>--extra-info</code>",id:"extra-info",level:3},{value:"<code>-F, --fast-fail-regexps</code>",id:"fast-fail-regexps",level:3},{value:"<code>--no-autodetect</code>",id:"no-autodetect",level:3},{value:"<code>-B, --no-ssl-bump-domains</code>",id:"no-ssl-bump-domains",level:3},{value:"<code>--ocsp</code>",id:"ocsp",level:3},{value:"<code>--output-config-file</code>",id:"output-config-file",level:3},{value:"<code>-d, --pidfile</code>",id:"pidfile",level:3},{value:"<code>-f, --readyfile</code>",id:"readyfile",level:3},{value:"<code>-x, --rest-url</code>",id:"rest-url",level:3},{value:"<code>-P, --se-port</code>",id:"se-port",level:3},{value:"<code>--status-address</code>",id:"status-address",level:3},{value:"<code>--tunnel-cainfo</code>",id:"tunnel-cainfo",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sc-legacy",children:"Sc Legacy"})}),"\n",(0,i.jsxs)(n.p,{children:["Usage: ",(0,i.jsx)(n.code,{children:"sc legacy [flags]"})]}),"\n",(0,i.jsx)(n.p,{children:"Run Sauce Connect Proxy in compatibility mode with Sauce Connect 4.9.X"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," You can also specify the options as YAML, JSON or TOML file using ",(0,i.jsx)(n.code,{children:"--config-file"})," flag.\nYou can generate a config file by running ",(0,i.jsx)(n.code,{children:"sc legacy config-file"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"required",children:"Required"}),"\n",(0,i.jsx)(n.h3,{id:"region",children:(0,i.jsx)(n.code,{children:"-r, --region"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_REGION"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sauce Labs datacenter region.\nDefault: us-west."}),"\n",(0,i.jsx)(n.h3,{id:"tunnel-name",children:(0,i.jsx)(n.code,{children:"-i, --tunnel-name"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_TUNNEL_NAME"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tunnel name used for this tunnel or the tunnels in the same HA pool."}),"\n",(0,i.jsx)(n.h3,{id:"user",children:(0,i.jsx)(n.code,{children:"-u, --user"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_USER"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sauce Labs username."}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h3,{id:"shared-tunnel",children:(0,i.jsx)(n.code,{children:"-s, --shared-tunnel"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_SHARED_TUNNEL"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Share the tunnels within the same organization."}),"\n",(0,i.jsx)(n.h3,{id:"tunnel-pool",children:(0,i.jsx)(n.code,{children:"--tunnel-pool"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_TUNNEL_POOL"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Denotes a tunnel as part of a high availability tunnel pool."}),"\n",(0,i.jsx)(n.h2,{id:"tunnel-traffic",children:"Tunnel traffic"}),"\n",(0,i.jsx)(n.h3,{id:"direct-domains",children:(0,i.jsx)(n.code,{children:"-D, --direct-domains"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_DIRECT_DOMAINS"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<strings>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Domains that do not require tunneling."}),"\n",(0,i.jsx)(n.h3,{id:"tunnel-domains",children:(0,i.jsx)(n.code,{children:"-t, --tunnel-domains"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_TUNNEL_DOMAINS"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<strings>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Domains that require tunneling.\nInverse of '--direct-domains'."}),"\n",(0,i.jsx)(n.h2,{id:"proxy",children:"Proxy"}),"\n",(0,i.jsx)(n.h3,{id:"auth",children:(0,i.jsx)(n.code,{children:"-a, --auth"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_AUTH"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<strings>"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Basic authentication for URL in host:port:username",":password"," format."]}),"\n",(0,i.jsx)(n.h3,{id:"proxy-tunnel",children:(0,i.jsx)(n.code,{children:"-T, --proxy-tunnel"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_PROXY_TUNNEL"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Route all tunnel traffic through the external proxy specified in --proxy."}),"\n",(0,i.jsx)(n.h2,{id:"dns",children:"DNS"}),"\n",(0,i.jsx)(n.h3,{id:"dns",children:(0,i.jsx)(n.code,{children:"--dns"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_DNS"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<strings>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use the specified name server.\nExample: --dns 8.8.8.8,8.8.4.4:53"}),"\n",(0,i.jsx)(n.h2,{id:"api-server",children:"API server"}),"\n",(0,i.jsx)(n.h3,{id:"api-key",children:(0,i.jsx)(n.code,{children:"-k, --api-key"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_API_KEY"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sauce Labs API Access Key."}),"\n",(0,i.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,i.jsx)(n.h3,{id:"log-stats",children:(0,i.jsx)(n.code,{children:"-z, --log-stats"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_LOG_STATS"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<seconds>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["seconds Log statistics about HTTP traffic every ",(0,i.jsx)(n.code,{children:"<seconds>"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"other",children:"Other"}),"\n",(0,i.jsx)(n.h3,{id:"autodetect",children:(0,i.jsx)(n.code,{children:"--autodetect"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_AUTODETECT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Detect the system proxy settings.\nInverse of '--no-autodetect'.\nDefault: true."}),"\n",(0,i.jsx)(n.h3,{id:"cainfo",children:(0,i.jsx)(n.code,{children:"--cainfo"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_CAINFO"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"/etc/ssl/certs/ca-certificates.crt"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CA certificate for verifying REST API."}),"\n",(0,i.jsx)(n.h3,{id:"config-file",children:(0,i.jsx)(n.code,{children:"-c, --config-file"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_CONFIG_FILE"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Path to YAML config file."}),"\n",(0,i.jsx)(n.h3,{id:"experimental",children:(0,i.jsx)(n.code,{children:"--experimental"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_EXPERIMENTAL"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<strings>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Enable or disable experimental features."}),"\n",(0,i.jsx)(n.h3,{id:"extra-info",children:(0,i.jsx)(n.code,{children:"--extra-info"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_EXTRA_INFO"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"JSON string that contains an advanced tunnel configuration."}),"\n",(0,i.jsx)(n.h3,{id:"fast-fail-regexps",children:(0,i.jsx)(n.code,{children:"-F, --fast-fail-regexps"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_FAST_FAIL_REGEXPS"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<strings>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Deny-list URL patterns."}),"\n",(0,i.jsx)(n.h3,{id:"no-autodetect",children:(0,i.jsx)(n.code,{children:"--no-autodetect"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_NO_AUTODETECT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Disable detection of the system proxy settings.\nDefault: false."}),"\n",(0,i.jsx)(n.h3,{id:"no-ssl-bump-domains",children:(0,i.jsx)(n.code,{children:"-B, --no-ssl-bump-domains"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_NO_SSL_BUMP_DOMAINS"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<strings>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Domains that do not require SSL resigning."}),"\n",(0,i.jsx)(n.h3,{id:"ocsp",children:(0,i.jsx)(n.code,{children:"--ocsp"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_OCSP"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"log-only"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Cert revocation check.\nOne of: strict, log-only, disable.\nDefault: log-only."}),"\n",(0,i.jsx)(n.h3,{id:"output-config-file",children:(0,i.jsx)(n.code,{children:"--output-config-file"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_OUTPUT_CONFIG_FILE"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Write the new Sauce Connect 5 run command configuration to the specified file."}),"\n",(0,i.jsx)(n.p,{children:"If set the run command will not be executed."}),"\n",(0,i.jsx)(n.h3,{id:"pidfile",children:(0,i.jsx)(n.code,{children:"-d, --pidfile"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_PIDFILE"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"File containing the process ID (PID).\nDefault: temp file."}),"\n",(0,i.jsx)(n.h3,{id:"readyfile",children:(0,i.jsx)(n.code,{children:"-f, --readyfile"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_READYFILE"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"File containing JSON formatted metadata.\nCreated when the tunnel is ready."}),"\n",(0,i.jsx)(n.h3,{id:"rest-url",children:(0,i.jsx)(n.code,{children:"-x, --rest-url"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_REST_URL"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sauce REST API URL.\nAn alternative to the recommended flag '--region'."}),"\n",(0,i.jsx)(n.h3,{id:"se-port",children:(0,i.jsx)(n.code,{children:"-P, --se-port"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_SE_PORT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<int>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"-1"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Port on which Sauce Connect's Selenium relay will listen for requests."}),"\n",(0,i.jsx)(n.h3,{id:"status-address",children:(0,i.jsx)(n.code,{children:"--status-address"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_STATUS_ADDRESS"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Status server address in host",":port"," format.\nDefault: disabled."]}),"\n",(0,i.jsx)(n.h3,{id:"tunnel-cainfo",children:(0,i.jsx)(n.code,{children:"--tunnel-cainfo"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable: ",(0,i.jsx)(n.code,{children:"SAUCE_TUNNEL_CAINFO"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value Format: ",(0,i.jsx)(n.code,{children:"<value>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default value: ",(0,i.jsx)(n.code,{children:"/etc/ssl/certs/ca-certificates.crt"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CA certificate bundle to use for verifying tunnel connections."}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/",children:"Sauce Connect Proxy Basic Setup"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/migrating/",children:"Sauce Connect Proxy 5 Migration Guide"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy 4 CLI Reference"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>r});var i=l(96540);const c={},s=i.createContext(c);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);