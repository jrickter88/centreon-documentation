"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[44235],{90113:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"applications-iis-wsman",title:"Microsoft IIS WSMAN"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-iis-wsman",id:"integrations/plugin-packs/procedures/applications-iis-wsman",title:"Microsoft IIS WSMAN",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-iis-wsman.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-iis-wsman",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-iis-wsman",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-iis-wsman.md",tags:[],version:"current",frontMatter:{id:"applications-iis-wsman",title:"Microsoft IIS WSMAN"},sidebar:"pp",previous:{title:"Microsoft IIS Server Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-webservers-iis-restapi"},next:{title:"Microsoft SCCM",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient"}},u={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:d},k="wrapper";function h(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Pack IIS brings a host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Iis-WSMAN-custom")),(0,a.kt)("p",null,"It brings the following service templates:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Application-Pools"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Iis-Application-Pools-WSMAN"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check application pools"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Service",label:"Service",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Iis-WSMAN-Application-Pool-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover application pools and monitor status")))),(0,a.kt)("p",null,"More information about discovering services automatically is available on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"dedicated page"),"\nand in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery/#discovery-rules"},"following chapter"),"."))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"metrics",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Dcdiag",label:"Dcdiag",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"domain controller status"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To monitor IIS, please follow our ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/windows-winrm-wsman-tutorial"},"official documentation")," and make sure that WinRM and all rights are properly configured."),(0,a.kt)("p",null,"On your Windows server, please install IIS WMI provider by installing the IIS Management Scripts and Tools component (compatibility IIS 6.0)."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Microsoft IIS Server WSMAN")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Iis-Wsman\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Microsoft IIS Server WSMAN")," Centreon Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Microsoft IIS Server WSMAN")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Iis-Wsman\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"Microsoft IIS Server WSMAN")," Centreon Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-iis-wsman\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Microsoft IIS Server WSMAN")," Centreon Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," and ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("strong",{parentName:"li"},"Microsoft IIS Server WSMAN")," server's settings."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("strong",{parentName:"li"},"App-Iis-WSMAN-custom")," template to the host."),(0,a.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"WSMANEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"WSMANPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"WSMANPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5985")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"WSMANPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"http")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"WSMANUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller's CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_iis_wsman.pl \\\n    --plugin=apps::microsoft::iis::wsman::plugin \\\n    --mode=application-pools \\\n    --hostname=10.0.0.1 \\\n    --wsman-scheme=http \\\n    --wsman-port=5985 \\\n    --wsman-username='' \\\n    --wsman-password=''\n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"All application pools are ok | 'pools.detected.count'=2;;;0;\nApplication pool 'test1' state: started [auto: on]\nApplication pool 'test2' state: stopped [auto: off]\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_iis_wsman.pl \\\n    --plugin=apps::microsoft::iis::wsman::plugin \\\n    --mode=application-pools \\\n    --help\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_iis_wsman.pl \\\n    --plugin=apps::microsoft::iis::wsman::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}h.isMDXComponent=!0}}]);