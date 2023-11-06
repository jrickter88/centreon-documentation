"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35509],{93655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>g});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"applications-exchange-nrpe",title:"Microsoft Exchange NSClient++ NRPE"},s=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-exchange-nrpe",id:"integrations/plugin-packs/procedures/applications-exchange-nrpe",title:"Microsoft Exchange NSClient++ NRPE",description:"Hello community! We're looking for a contributor to help us to translate the",source:"@site/pp/integrations/plugin-packs/procedures/applications-exchange-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-exchange-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-exchange-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-exchange-nrpe.md",tags:[],version:"current",frontMatter:{id:"applications-exchange-nrpe",title:"Microsoft Exchange NSClient++ NRPE"},sidebar:"pp",previous:{title:"Microsoft Dynamics365 NRPE 0.5",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe"},next:{title:"Microsoft Exchange 2010 NRPE (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-exchange-2010-nrpe"}},m={},g=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NSClient++",id:"nsclient",level:3},{value:"Powershell",id:"powershell",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"Important information",id:"important-information",level:2}],d={toc:g},k="wrapper";function h(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the\ncontent in french and provide a sample execution command. If it's you, let us\nknow and ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"slack"))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Monitoring Connector ",(0,r.kt)("em",{parentName:"p"},"Microsoft Exchange NRPE")," works with the Centreon NSClient++ monitoring\nagent to run Powershell code to check the health and performance of Microsoft Exchange\nServers"),(0,r.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From Exchange Server 2k10 to latest")),(0,r.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon ...")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"nsclient"},"NSClient++"),(0,r.kt)("p",null,"To monitor an ",(0,r.kt)("em",{parentName:"p"},"Exchange Server")," through NRPE, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,r.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct."),(0,r.kt)("h3",{id:"powershell"},"Powershell"),(0,r.kt)("p",null,"Powershell and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.Exchange.Management.PowerShell")," snap-in must be installed\non the target Server."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every poller expected to monitor ",(0,r.kt)("em",{parentName:"li"},"Microsoft Exchange servers"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,r.kt)("em",{parentName:"li"},"Exchange NRPE")," from the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor ",(0,r.kt)("em",{parentName:"li"},"Microsoft Exchange"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-exchange-nrpe\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,r.kt)("em",{parentName:"li"},"Exchange NRPE")," from the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,r.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"App-Exchange-NRPE-custom")," template and configure all the mandatory Macros :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPE Binary used to perform the check (default: 'check_centreon_nrpe)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used to reach the NRPE server (default: '5666')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timeout to connect to the NRPE Server (default: '10')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))),(0,r.kt)("h2",{id:"important-information"},"Important information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Queue")," monitoring Service only works on Exchange Server running with the\nhub/transport role. "),(0,r.kt)("li",{parentName:"ul"},"Use this format to define MAILBOX macro at the service level: ",(0,r.kt)("inlineCode",{parentName:"li"},"DOMAIN\\\\USER")),(0,r.kt)("li",{parentName:"ul"},"You cannot use the ",(0,r.kt)("inlineCode",{parentName:"li"},"|")," nor ",(0,r.kt)("inlineCode",{parentName:"li"},"!")," character in your Centreon Macro definitions. Prefer using NSClient++ API if you need this.")))}h.isMDXComponent=!0}}]);