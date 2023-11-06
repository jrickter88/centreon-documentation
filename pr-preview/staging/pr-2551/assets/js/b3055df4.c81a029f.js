"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[98294],{63183:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"hardware-servers-cisco-ucs-snmp",title:"Cisco UCS"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",title:"Cisco UCS",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-servers-cisco-ucs-snmp",title:"Cisco UCS"},sidebar:"pp",previous:{title:"Cisco Telepresence System SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-devices-cisco-cts-snmp"},next:{title:"Dell CMC",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-servers-dell-cmc-snmp"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Device Configuration",id:"device-configuration",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test my plugin and what do the main parameters stand for ?",id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:d},k="wrapper";function f(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(k,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Cisco Unified Computing System (UCS) is a system of servers, a network, storage and a storage network in a single platform."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Cisco UCS")," relies on the SNMP protocol to query and collect status and metrics of the UCS server."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UCS Server Resources")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Audit-Logs",label:"Audit-Logs",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"audit.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of audit logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"audit.cleared.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of cleared audit logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"audit.info.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of info audit logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"audit.condition.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of condition audit logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"audit.warning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of warning audit logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"audit.minor.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of minor audit logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"audit.critical.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of critical audit logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(o.Z,{value:"Equipment",label:"Equipment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check Hardware status"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(o.Z,{value:"Faults",label:"Faults",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.problems.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of current faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.cleared.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of cleared faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.info.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of info faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.condition.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of conditions faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.warning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of warning faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.minor.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of minor faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.major.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of major faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faults.critical.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of critical faults"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(o.Z,{value:"Mgmt-Entities",label:"Mgmt-Entities",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"management_entities.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of management entities"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(o.Z,{value:"Service-Profile",label:"Service-Profile",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serviceprofiles.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of service profiles"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serviceprofiles.online.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of online service profiles"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serviceprofiles.offline.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of offline service profiles"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"device-configuration"},"Device Configuration"),(0,a.kt)("p",null,"The SNMP agent must be configured and running on the UCS server. Please refer to the manufacturer documentation to achieve this."),(0,a.kt)("h3",{id:"network-flows"},"Network flows"),(0,a.kt)("p",null,"The Centreon Poller must be able to reach the UDP/161 SNMP port of the UCS server."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor UCS servers:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Cisco UCS")," Monitoring Connector through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor UCS servers :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-servers-cisco-ucs-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Cisco UCS")," Monitoring Connector through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("p",null,"Create your Host and apply the ",(0,a.kt)("em",{parentName:"p"},"HW-Server-Cisco-Ucs-custom")," Host Template. You must set SNMP Community and Version in the dedicated fields of the Host Form. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for-"},"How to test my plugin and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once the plugin is installed, you can test it logging into the CLI with the centreon-engine user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \\\n    --plugin=hardware::server::cisco::ucs::plugin \\\n    --mode=faults \\ \n    --hostname=10.30.2.11 \\\n    --snmp-version='2c' \\\n    --snmp-community='cisco_ucs' \\ \n    --filter-severity='critical|major=critical' \\\n    --filter-severity='warning|minor=warning' \\\n    --verbose\n    \n")),(0,a.kt)("p",null,"The above command checks for faults on a UCS server (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=faults"),"). Mandatory options are the IP/FQDN of the device "),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.11"),") and the SNMP version you have set on your appliance (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='cisco_ucs'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if a problem with the severity WARNING or MINOR is detected on a UCS server resource  (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-severity='warning|minor=warning'"),") and"),(0,a.kt)("p",null,"a CRITICAL alarm if a problem is detected with the severity CRITICAL or MAJOR (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-severity='critical|major=critical'"),")."),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \\\n    --plugin=hardware::server::cisco::ucs::plugin \\\n    --mode=faults \\\n    --help\n")),(0,a.kt)("p",null,"All plugin modes can be listed with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \\\n    --plugin=hardware::server::cisco::ucs::plugin \\\n    --list-mode \n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this error, it may indicate that some flows are blocked between the Centreon Poller and the UCS server. "),(0,a.kt)("p",null,"It can also mean that the Centreon Host Configuration doesn't reflect the SNMP configuration on UCS side (version, community). "),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"You may get this error when SNMP privileges are not wide enough. You can check that the SNMP community used in your command line has enough rights to walk the Cisco UCS SNMP branch: .1.3.6.1.4.1.9.9.719 "),(0,a.kt)("p",null,"You can use the snmpwalk utilities which is provided through net-snmp package."))}f.isMDXComponent=!0}}]);