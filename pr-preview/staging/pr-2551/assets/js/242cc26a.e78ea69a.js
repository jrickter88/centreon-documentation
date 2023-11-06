"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37022],{51841:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"network-ruckus-smartzone-snmp",title:"Ruckus Smartzone"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",id:"integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",title:"Ruckus Smartzone",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp.md",tags:[],version:"current",frontMatter:{id:"network-ruckus-smartzone-snmp",title:"Ruckus Smartzone"},sidebar:"pp",previous:{title:"Ruckus SCG",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-ruckus-scg-snmp"},next:{title:"Ruckus Zonedirector",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-ruckus-zonedirector-snmp"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Ruckus device configuration",id:"ruckus-device-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I test my configuration through the CLI and what do the main parameters stand for ?",id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function f(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){i(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Ruckus SmartZone network controllers simplify the complexity of scaling and managing wired switches, and wireless access points through a common interface to support private-cloud network-as-a-service (NaaS) offerings in addition to general enterprise networks."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ruckus Access Point"),(0,a.kt)("li",{parentName:"ul"},"Ruckus Controllers")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Ruckus-Smartzone-SNMP-Ap-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover access point attached to your controller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Ruckus-Smartzone-SNMP-Disk-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover storage point attached to your controller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Ruckus-Smartzone-SNMP-Traffic-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover interfaces attached to your controller")))),(0,a.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Access-Point",label:"Access-Point",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connection_status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The connection status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"config_status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The registration status, which could either be pending, approved, rejected or swapped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"registration_status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The AP configuration status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"accesspoint.connection.client.devices.authorized.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of stations. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"accesspoint.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the access point. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"accesspoint.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the access point. Unit: bits/second"))))),(0,a.kt)(o.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization. Unit : %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"core.cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Per Core CPU utilization. Unit : %"))))),(0,a.kt)(o.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface. Units: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface. Units: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface. Units: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface. Units: %"))))),(0,a.kt)(o.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 1 minute-sample")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load5"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 5 minutes-sample")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load15"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System load 15 minutes-sample"))))),(0,a.kt)(o.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage on the device. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free memory on the device. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of Memory usage on the device. Unit : %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.buffer.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Buffered Memory allocation. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.cached.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cached Memory allocation. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.shared.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shared Memory allocation. Unit : Bytes"))))),(0,a.kt)(o.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"storage.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Used space on a disk partition. Unit: Bytes"))))),(0,a.kt)(o.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.connection.accesspoints.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of APs. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.connection.client.devices.authorized.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of associated clients. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the system. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the system. Unit: bits/second")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"ruckus-device-configuration"},"Ruckus device configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your Ruckus device. Ruckus provides an official documentation to achieve this: ",(0,a.kt)("a",{parentName:"p",href:"http://docs.ruckuswireless.com/smartzone/3.6.1/sz100-vsze-administrator-guide/GUID-F08BF334-2116-47A5-900C-B6AA4FC5E62A"},"http://docs.ruckuswireless.com/smartzone/3.6.1/sz100-vsze-administrator-guide/GUID-F08BF334-2116-47A5-900C-B6AA4FC5E62A")),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"Your centreon server must be able to reach the Ruckus device over UDP/161 SNMP port."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Ruckus Smartzone ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the 'Ruckus Smartzone' Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Ruckus Smartzone ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-ruckus-smartzone-snmp.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the 'Ruckus Smartzone' Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},"Apply the template \"Net-Ruckus-Smartzone-SNMP-custom\" and configure the 'SNMP Community' and 'SNMP Version' fields to match the device configuration.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-"},"How do I test my configuration through the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once the Centreon plugin installed, you can test it logging with the centreon-engine user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \\\n    --plugin=network::ruckus::smartzone::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=ruckus.int.centreon.com \\\n    --snmp-version='2c' \\\n    --snmp-community='ruckus_smartzone' \\\n  --verbose \n")),(0,a.kt)("p",null,"The command above checks the CPU utilization of your Ruckus box (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=cpu"),"). You must always define the IP address/FQDN of the device (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=ruckus.int.centreon.com"),") as well as the SNMP versions and community (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='ruckus_smartzone'"),") "),(0,a.kt)("p",null,"You can display all modes that come with the plugin with the command below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \\\n    --plugin=network::ruckus::smartzone::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("p",null,"You can display options of a specific mode by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag. Here is an example to display cpu mode parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \\\n    --plugin=network::ruckus::smartzone::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"This message generally means that you are not using the right SNMP version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This error message often refers to the following issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the Ruckus device doesn't support the MIB used by the plugin"),(0,a.kt)("li",{parentName:"ul"},"the targeted SNMP OID cannot be fetched because of insufficient privileges on the device. SNMP Agent must be capable of accessing to the enterprise branch Ruckus : .1.3.6.1.4.1.25053.")))}f.isMDXComponent=!0}}]);