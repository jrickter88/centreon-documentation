"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[85747],{92225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-smartermail-api",title:"Smartermail Server"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-smartermail-api",id:"integrations/plugin-packs/procedures/applications-smartermail-api",title:"Smartermail Server",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-smartermail-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-smartermail-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-smartermail-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-smartermail-api.md",tags:[],version:"current",frontMatter:{id:"applications-smartermail-api",title:"Smartermail Server"},sidebar:"pp",previous:{title:"Slack",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-slack-restapi"},next:{title:"Solr",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-solr-jmx"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Package installation",id:"package-installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I test the Plugin in the CLI and what do the main parameters stand for ?",id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"Why do I get the following error?",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to ...:443</code>",id:"unknown-500-cant-connect-to-443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],g={toc:d},h="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"SmarterMail is part of SmarterTool suite. "),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Smartermail Server")," uses the Rest API to get key metrics\ngiving insights about the health of the solution."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Licenses"),(0,a.kt)("li",{parentName:"ul"},"Spools"),(0,a.kt)("li",{parentName:"ul"},"Services ")),(0,a.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Licenses",label:"Licenses",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"license.upgrade.protection.expires.days.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of days before license expiration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(o.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("p",null,"No metrics available. The Plugin checks that the services are in a ",(0,a.kt)("em",{parentName:"p"},"running")," state. ")),(0,a.kt)(o.Z,{value:"Spools",label:"Spools",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"spool_name"),"#spool.messages.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of messages in the Spool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))),(0,a.kt)("p",null,"Filtering on the Spool name can be done with ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-spool")," option. "))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"A monitoring username has to be created on the SmarterMail server. More information available\nwithin the official documentation: ",(0,a.kt)("a",{parentName:"p",href:"https://mail.smartertools.com/Documentation/api#/topics/overview"},"https://mail.smartertools.com/Documentation/api#/topics/overview")," "),(0,a.kt)("p",null,"The Poller monitoring the Smartermail server should be able to reach it over the\nHTTPS protocol. "),(0,a.kt)("h2",{id:"package-installation"},"Package installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor a Smartermail server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Smartermail-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"li"},"Smartermail Server")," from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor a Graylog server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Smartermail-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-smartermail-api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"li"},"Smartermail Server")," from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"App-Smartermail-Api-custom")," template and configure all the mandatory Macros :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SMARTERMAILAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Username for authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SMARTERMAILAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password for authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SMARTERMAILAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol (default: 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SMARTERMAILAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API port (default: '443')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SMARTERMAILAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for-"},"How can I test the Plugin in the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once the Centreon Plugin installed, you can test it directly in the CLI of the\nCentreon poller by logging with the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_smartermail_api.pl \\\n  --plugin=apps::smartermail::restapi::plugin \\\n  --mode=spools \\\n  --hostname=10.0.0.1 \\\n  --proto='https' \\\n  --port='443' \\\n  --api-username='myusername' \\\n  --api-password='mypassword' \\\n  --warning-spool-messages='' \\\n  --critical-spool-messages=''\n")),(0,a.kt)("p",null,"Expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All spools are ok | 'default#spool.messages.count'=11;;;0; 'quarantine_limit#spool.messages.count'=5000;;;0; 'spam#spool.messages.count'=0;;;0; 'spool_limit#spool.messages.count'=50000;;;0; 'throttledDomains#spool.messages.count'=0;;;0; 'throttledMailingLists#spool.messages.count'=0;;;0; 'throttledUsers#spool.messages.count'=0;;;0; 'virus#spool.messages.count'=0;;;0; 'waiting#spool.messages.count'=3;;;0;\n")),(0,a.kt)("p",null,"The command above checks the message spools (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=spools"),") configured on the Smartmail Server. The API uses the HTTPS\nprotocol (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),") and listens over the port 443 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port=443"),"). "),(0,a.kt)("p",null,"The available thresholds as well as all of the options that can be used with\nthis Plugin can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_smartermail_api.pl \\\n  --plugin=apps::smartermail::restapi::plugin \\\n  --mode=spools \\\n  --help\n")),(0,a.kt)("p",null,"You can display all of the modes that come with the Plugin with the command\nbelow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_smartermail_api.pl \\\n  --plugin=apps::smartermail::restapi::plugin \\\n  --list-mode\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error?"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to ...:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect\nto the SmarterMail RestAPI. Check that no third party device\n(such as a firewall) is blocking the request. A proxy connection may also be\nnecessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl"),"\noption in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"When using a proxy to connect to the SmarterMail RestAPI, this error\nmessage means that the Centreon Plugin library does not support the proxy\nconnection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the\nfollowing option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}k.isMDXComponent=!0}}]);