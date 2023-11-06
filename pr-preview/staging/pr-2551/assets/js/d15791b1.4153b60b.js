"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[43669],{71014:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>m,metadata:()=>u,toc:()=>g});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const m={id:"network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP"},s=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",id:"integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp.md",tags:[],version:"current",frontMatter:{id:"network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP"},sidebar:"pp",previous:{title:"Ubiquiti AirFiber SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp"},next:{title:"Ubiquiti UniFi SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp"}},d={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:g},k="wrapper";function N(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(k,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector Ubiquiti Edge SNMP collects metrics for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cpu"),(0,a.kt)("li",{parentName:"ul"},"Hardware"),(0,a.kt)("li",{parentName:"ul"},"Interfaces"),(0,a.kt)("li",{parentName:"ul"},"Memory")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Ubiquiti-Edge-SNMP-Interface-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor bandwidth utilization")))))),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5s.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization during last 5 seconds."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.1m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization during last minute."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization during last 5 minutes."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the disk"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"raid.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the raid"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"fan.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the fan"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"temperature.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the temperature"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"voltage.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.fan.speed.rpm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Speed of fan"),(0,a.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"temperature of the different sensors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.voltage.millivolt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Voltage of the different sensors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"mV"))))),(0,a.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.in.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.in.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.out.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.out.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To monitor your Ubiquiti Edge, the SNMP must be configured.\nThe Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Ubiquiti Edge SNMP")," Pack"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-ubiquiti-edge-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Ubiquiti Edge SNMP")," Pack")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,a.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,a.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,a.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"Net-Ubiquiti-Edge-SNMP-Custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ubiquiti_edge__snmp.pl \\\n    --plugin=network::ubiquiti::edge::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='ubiquiti_ro' \\\n    --warning-1m='80' \\\n    --critical-1m='90' \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: CPU 53.59 % (5sec), 38.13 % (1m), 21.37 % (5min) | 'cpu.utilization.5s.percentage'=53.59%;;;0;100 'cpu.utilization.1m.percentage'=38.13%;0:80;0:90;0;100 'cpu.utilization.5m.percentage'=21.37%;;;0;100\n")),(0,a.kt)("p",null,"The command above monitors Ubiquiti Edge (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=network::ubiquiti::edge::snmp::plugin --mode=load"),") identified\nby the IP address ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,a.kt)("em",{parentName:"p"},"community")," and ",(0,a.kt)("em",{parentName:"p"},"version")," are specified (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='ubiquiti_ro'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization over 90% on the last minute\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-1m='90'"),") and a CRITICAL alarm over 95% on the last minute (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-1m='95'"),")."),(0,a.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ubiquiti_edge_snmp.pl \\\n    --plugin=network::ubiquiti::edge::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Troubleshooting plugins")))}N.isMDXComponent=!0}}]);