"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81444],{85828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905),a=r(51715),i=r(7626);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"infrastructure-active-directory-nrpe",title:"Microsoft Active Directory"},s=void 0,u={unversionedId:"integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe",id:"integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe",title:"Microsoft Active Directory",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe.md",tags:[],version:"current",frontMatter:{id:"infrastructure-active-directory-nrpe",title:"Microsoft Active Directory"},sidebar:"pp",previous:{title:"McAfee Web Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp"},next:{title:"Microsoft Active Directory NSClient++ API",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nsclient-05-restapi"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This Monitoring Connector monitors AD Domain Controller using local commands and the\nCentreon NSClient++ agent to trigger their executions remotely."),(0,n.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Active Directory domain controller, including: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Netdom connectivity"),(0,n.kt)("li",{parentName:"ul"},"dfsr backlog"),(0,n.kt)("li",{parentName:"ul"},"dcdiag ")))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Coming soon")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,n.kt)("p",null,"To monitor an ",(0,n.kt)("em",{parentName:"p"},"Active Directory")," domain controller through NRPE, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,n.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every Poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Active Directory"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,n.kt)("em",{parentName:"li"},"Active Directory"),"\nfrom the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Active Directory"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-infrastructure-active-directory-nrpe\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,n.kt)("em",{parentName:"li"},"Active Directory"),"\nfrom the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("em",{parentName:"li"},"Infra-ActiveDirectory-NRPE-custom")," template and configure all the mandatory Macros:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPE Port of the target server (Default: '5666')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timeout value (Default: '30')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))))}f.isMDXComponent=!0}}]);