"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[21857],{3426:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const s={id:"network-fritzbox-upnp",title:"Fritz!Box UPnP"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-fritzbox-upnp",id:"integrations/plugin-packs/procedures/network-fritzbox-upnp",title:"Fritz!Box UPnP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-fritzbox-upnp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-fritzbox-upnp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-fritzbox-upnp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-fritzbox-upnp.md",tags:[],version:"current",frontMatter:{id:"network-fritzbox-upnp",title:"Fritz!Box UPnP"},sidebar:"pp",previous:{title:"Freebox RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-freebox-restapi"},next:{title:"Gorgy NTP Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-device-gorgy-ntpserver-snmp"}},m={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],k={toc:d},g="wrapper";function f(t){var{components:e}=t,n=p(t,["components"]);return(0,r.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,r.kt)("p",null,"The Pack Fritz!Box collects metrics for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System"),(0,r.kt)("li",{parentName:"ul"},"Traffic")),(0,r.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"connection status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Connection and physical link status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.uptime.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Elapsed time since the last reboot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,r.kt)(o.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.interface.wan.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the WAN interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.interface.wan.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the WAN interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To control your Fritz!Box, the UPnP must be configured."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fritzbox-Upnp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Fritz!Box UPnP")," Pack"))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fritzbox-Upnp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Pack from the RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-fritzbox-upnp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Fritz!Box UPnP")," Pack")))),(0,r.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,r.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,r.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,r.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"Net-Fritzbox-UPNP-custom")," Host Template")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UPNPPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 49000)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UPNPPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'http')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"UPNPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command (Parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \\\n    --plugin=network::fritzbox::upnp::plugin \\\n    --mode=traffic \\\n    --hostname='10.30.2.79' \\\n    --port='49000' \\\n    --proto='http'\n")),(0,r.kt)("p",null,"Expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Traffic In: 1.29 Mb/s, Traffic Out: 1.49 Mb/s | 'system.interface.wan.traffic.in.bitspersecond'=1287234b/s;;;0;10000000 'system.interface.wan.traffic.in.bitspersecond'=1487235b/s;;;0;10000000\n")),(0,r.kt)("p",null,"The command above monitors WAN interface traffic (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=traffic"),")."),(0,r.kt)("p",null,"It connects to the host ",(0,r.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") on the port 49000 (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='49000'"),") using http (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='http'"),")."),(0,r.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \\\n    --plugin=network::fritzbox::upnp::plugin \\\n    --mode=traffic \\\n    --help\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Troubleshooting plugins")))}f.isMDXComponent=!0}}]);