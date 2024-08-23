"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[78451],{92973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),s=n(28453),r=n(86025);const o={id:"multiple-client-cert-downloader",title:"Multiple Client-Cert Downloader",sidebar_label:"Multiple Client-Cert Downloader",keywords:["api","api-fortress","certificates","certs"]},a=void 0,c={id:"api-testing/on-prem/self-hosted/multiple-client-cert-downloader",title:"Multiple Client-Cert Downloader",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/multiple-client-cert-downloader.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/multiple-client-cert-downloader",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/self-hosted/multiple-client-cert-downloader",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/multiple-client-cert-downloader.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"multiple-client-cert-downloader",title:"Multiple Client-Cert Downloader",sidebar_label:"Multiple Client-Cert Downloader",keywords:["api","api-fortress","certificates","certs"]},sidebar:"apif",previous:{title:"Local Downloader Setup (Self-Hosted)",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/self-hosted/local-downloader-setup"},next:{title:"Proxy Settings in Downloader",permalink:"/sauce-docs/pr-preview/pr-2903/api-testing/on-prem/self-hosted/proxy-settings-in-downloader"}},l={},d=[{value:"The Image",id:"the-image",level:2},{value:"Components",id:"components",level:2},{value:"How to Build the Client-Side Certificates",id:"how-to-build-the-client-side-certificates",level:3},{value:"Updating the Trust Store",id:"updating-the-trust-store",level:3},{value:"Technical Caveats",id:"technical-caveats",level:2},{value:"Test writing",id:"test-writing",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.p,{children:"This mechanism will allow, in on-prem deployments only, to use multiple client-side certificates for authentication, instead of the current implementation that assigns one certificate to a downloader."}),"\n",(0,i.jsx)(t.h2,{id:"the-image",children:"The Image"}),"\n",(0,i.jsx)(t.p,{children:"The updates focus on the downloader and it's currently available in the image or above:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"apifortress/remotedownloadagent:20.2.1\n"})}),"\n",(0,i.jsx)(t.p,{children:'If you are using the "latest" tag and updated you are all set.'}),"\n",(0,i.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,i.jsx)(t.p,{children:"The configuration of the downloader is made of two parts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"1. The client certificates"})}),"\n",(0,i.jsx)(t.p,{children:"The downloader will need to mount a volume for the certificates (we suggest /certs) which will contain the client-side certificates."}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"- ./certs:/certs\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"2. The trust store"})}),"\n",(0,i.jsx)(t.p,{children:"In case the certificates are issued by a non-trusted CA, it'll be necessary to update the internal trust store of the image. This operation can be done in multiple ways, such as creating a derivative image of the downloader or mounting the file.\nWe'll discuss the two options later."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"how-to-build-the-client-side-certificates",children:"How to Build the Client-Side Certificates"}),"\n",(0,i.jsx)(t.p,{children:"The certificates need to be in the Java Key Store (JKS) format. Each client-side certificate (key and cert) need to be in a separate store."}),"\n",(0,i.jsx)(t.p,{children:"If your certificates are not in this format already, you will be able to convert your .key .crt file by following these steps:"}),"\n",(0,i.jsx)(t.p,{children:"a) Convert the certificate to PKCS#12 format using openssl, as in:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:" openssl pkcs12 -export -in client.crt -inkey client.key -out client.p12\n"})}),"\n",(0,i.jsx)(t.p,{children:"b) Import the p12 to a\xa0JKS:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"keytool -importkeystore -srckeystore client.p12 \\\n     -srcstoretype PKCS12 \\\n     -destkeystore client.jks \\\n     -deststoretype JKS\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once you're done, you can copy the resulting artifact to the mounted volume."}),"\n",(0,i.jsx)(t.p,{children:"Iterate the operation for each certificate you need to covert, changing the destination file every time, so that at the end of the process you'll have a separate JKS file for each certificate."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Both commands are ",(0,i.jsx)(t.strong,{children:"interactive"})," but can be made non-interactive with appropriate switches, for automation purposes."]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"keytool is a program that is part of the default Java distribution. You will need at least a JRE to use it."})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["other tools, some of which visual, exist to perform this kind of operations, such as ",(0,i.jsx)(t.a,{href:"https://keystore-explorer.org/",children:"Keystore Explorer"})]})}),"\n",(0,i.jsx)(t.h3,{id:"updating-the-trust-store",children:"Updating the Trust Store"}),"\n",(0,i.jsx)(t.p,{children:"As previously said, we can tackle this in two different ways."}),"\n",(0,i.jsxs)(t.p,{children:["One is creating a ",(0,i.jsx)(t.strong,{children:"derivate image"})," with a Dockerfile similar to this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"FROM apifortress/remotedownloadagent:20.2.1\nCOPY ca.crt /ca.crt\nCOPY cert.crt /cert.crt\nRUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localca -import -file /ca.crt -noprompt\nRUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localcrt -import -file /cert.crt -noprompt\n"})}),"\n",(0,i.jsx)(t.p,{children:"If that's not practical for your automation and routines, you can:"}),"\n",(0,i.jsxs)(t.p,{children:["Copy the file located in ",(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.code,{children:"/usr/java/latest/jre/lib/security/cacerts"})," in the container"]}),", add the new certificate using the ",(0,i.jsx)(t.strong,{children:"keytool"})," java command similar to what's shown in the Dockerfile."]}),"\n",(0,i.jsx)(t.p,{children:"Assuming the cacerts file and the ca.crt file are in the current directory, you can update it by using:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"keytool -import -trustcacerts -keystore cacerts -storepass changeit -alias localca -import -file ca.crt -noprompt\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can eventually mount the file in the remotedownloadagent container, depending on your deployment method."}),"\n",(0,i.jsx)(t.p,{children:"In docker-compose, you can add a volume like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"- ./cacerts:/usr/java/latest/jre/lib/security/cacerts\n"})}),"\n",(0,i.jsx)(t.p,{children:"For Kubernetes, the most practical way since Kubernetes 1.10.0 is to create a config map from a binary file and then mount it accordingly."}),"\n",(0,i.jsx)(t.h2,{id:"technical-caveats",children:"Technical Caveats"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Whenever the ",(0,i.jsx)(t.strong,{children:"trust store"})," is altered, the service needs to be restarted for the change to be effective."]}),"\n",(0,i.jsx)(t.li,{children:"If a certificate is activated (see: Test writing) then the certificates involved need to be fully valid. It'll be, in other words, impossible to skip SSL validation"}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"disable_ssl_validation"})," must be set to false."]}),"\n",(0,i.jsx)(t.li,{children:"This feature is currently unavailable in load testing (but will be implemented once we receive sufficient feedback on this implementation)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"test-writing",children:"Test writing"}),"\n",(0,i.jsx)(t.p,{children:"The test writer is required to provide configuration (if necessary) on which certificate to use in each call. Here's an example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<get\nurl="[https://nginx.apifortress](https://nginx.apifortress/)"\nparams="[:]"\nvar="payload"\nmode="text"\n>\n<config\nname="client_cert_configuration"\nvalue=\'{"keystorePath":"/certs/client.jks","keystorePassword":"foobar"}\'\n/>\n</get>\n'})}),"\n",(0,i.jsx)(t.p,{children:"The unescaped value is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n"keystorePath": "/certs/client.jks",\n"keystorePassword": "foobar"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Each call can be configured to use a different certificate, or no certificate at all."}),"\n",(0,i.jsxs)(t.p,{children:["The value can also be parametrized as a template using the ",(0,i.jsx)(t.code,{children:"${...}"})," syntax"]}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/10/2020-10-15.png"),alt:"2020-10-15.png"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);