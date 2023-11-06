"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[1661],{67100:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>g,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"applications-graylog-restapi",title:"Graylog"},c=void 0,g={unversionedId:"integrations/plugin-packs/procedures/applications-graylog-restapi",id:"integrations/plugin-packs/procedures/applications-graylog-restapi",title:"Graylog",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-graylog-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-graylog-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-graylog-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-graylog-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-graylog-restapi",title:"Graylog"},sidebar:"pp",previous:{title:"Gorgone Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-gorgone-restapi"},next:{title:"Haproxy SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-haproxy-snmp"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I test the Plugin in the CLI and what do the main parameters stand for ?",id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 403 Forbidden</code> ?",id:"unknown-403-forbidden-",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to ...:443</code>",id:"unknown-500-cant-connect-to-443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],m={toc:d},k="wrapper";function h(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){i(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Graylog is a leading centralized log management solution built to open standards\nfor capturing, storing, and enabling real-time analysis of terabytes of machine\ndata."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Graylog")," aims to collect the\nnumber of system notifications per severity and the number of query matches for\nspecific queries by requesting the dedicated built-in RestAPI."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lucene queries"),(0,a.kt)("li",{parentName:"ul"},"System notifications")),(0,a.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Query",label:"Query",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"graylog.query.match.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of query matches"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(o.Z,{value:"System-Notifications",label:"System-Notifications",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"graylog.system.notifications.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of system notifications"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"graylog.system.notifications.normal.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of system notifications (normal severity)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"graylog.system.notifications.urgent.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of system notifications (urgent severity)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,'A service account has to be created on the Graylog server:\nthe "Reader" role is sufficient to access system notifications\nbut an admin account is needed to perform the Lucene queries on the Graylog server.'),(0,a.kt)("p",null,"More information on the official Graylog site:\n",(0,a.kt)("a",{parentName:"p",href:"https://go2docs.graylog.org/5-1/setting_up_graylog/rest_api.html"},"https://go2docs.graylog.org/5-1/setting_up_graylog/rest_api.html"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor a Graylog server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Graylog-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"li"},"Graylog")," from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor a Graylog server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Graylog-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-graylog-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"li"},"Graylog")," from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"App-Graylog-Restapi-custom")," template and configure all the mandatory Macros :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"USERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Username for authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password for authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROTOCOL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol (default: 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API port (default: '9000)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag or any header)")))),(0,a.kt)("p",null,"Once the Host created, you can configure some Macros on the Services to filter\ninformation:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERNODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter by notification severity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERSEVERITY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter by node")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for-"},"How can I test the Plugin in the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once the Centreon Plugin installed, you can test it directly in the CLI of the\nCentreon poller by logging with the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \\\n  --plugin=apps::graylog::restapi::plugin \\\n  --mode=query \\\n  --hostname=10.0.0.1 \\\n  --username='username' \\\n  --password='password' \\\n  --query='centreon'\n")),(0,a.kt)("p",null,"Expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: current queue messages : 10 | 'graylog.query.match.count'=10;;;0;\n")),(0,a.kt)("p",null,"The available thresholds as well as all of the options that can be used with\nthis Plugin can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \\\n  --plugin=apps::graylog::restapi::plugin \\\n  --mode=query \\\n  --query='centreon'\n  --help\n")),(0,a.kt)("p",null,"You can display all of the modes that come with the Plugin with the command\nbelow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \\\n  --plugin=apps::graylog::restapi::plugin \\\n  --list-mode\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,a.kt)("h4",{id:"unknown-403-forbidden-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 403 Forbidden")," ?"),(0,a.kt)("p",null,"The account provided does not have sufficient permissions to perfom the required\nactions through the API."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to ...:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect\nto the Graylog RestAPI. Check that no third party device\n(such as a firewall) is blocking the request. A proxy connection may also be\nnecessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl"),"\noption in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"When using a proxy to connect to the Graylog RestAPI, this error\nmessage means that the Centreon Plugin library does not support the proxy\nconnection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the\nfollowing option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}h.isMDXComponent=!0}}]);