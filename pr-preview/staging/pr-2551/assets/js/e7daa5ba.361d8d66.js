"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[67538],{54566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"hardware-servers-lenovo-xcc-snmp",title:"Lenovo XCC SNMP"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp",title:"Lenovo XCC SNMP",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-servers-lenovo-xcc-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-servers-lenovo-xcc-snmp",title:"Lenovo XCC SNMP"},sidebar:"pp",previous:{title:"IBM IMM",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-servers-ibm-imm-snmp"},next:{title:"Masterclock NTP100GP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-devices-masterclock-ntp100gps-snmp"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:d},k="wrapper";function h(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Lenovo develops, manufactures and sells computer hardware and software."),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("strong",{parentName:"p"},"Lenovo XCC SNMP")," brings a host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HW-Server-Lenovo-Xcc-SNMP-custom")),(0,a.kt)("p",null,"It brings the following service template:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HW-Lenovo-Xcc-Hardware-Global-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check all sensors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"temperature.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of temperature"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"voltage.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"fan.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of fan"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"psu.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of psu"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of disk"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"raidvolume.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of raidvolume"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Temperature of the different sensors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Voltage of the different sensors"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.fan.speed.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Speed of fan"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your ",(0,a.kt)("strong",{parentName:"p"},"Lenovo XCC SNMP"),"\nserver. Please refer to the official documentation from Lenovo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.systems.management.xcc.doc%2FNN1ia_c_configuringSNMP.html"},"Lenovo XCC SNMP"))),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The target server must be reachable from the Centreon poller on the UDP/161\nSNMP port."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,a.kt)("p",null,"If the platform uses an ",(0,a.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,a.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,a.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,a.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-hardware-servers-lenovo-xcc-snmp\n"))),(0,a.kt)(o.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-servers-lenovo-xcc-snmp\n"))),(0,a.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-hardware-servers-lenovo-xcc-snmp\n")))),(0,a.kt)("p",null,"Whatever the license type (",(0,a.kt)("em",{parentName:"p"},"online")," or ",(0,a.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,a.kt)("strong",{parentName:"p"},"Lenovo XCC SNMP")," Pack through\nthe ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,a.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,a.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More information in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,a.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp\n"))),(0,a.kt)(o.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp\n"))),(0,a.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-hardware-servers-lenovo-xcc-snmp\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("strong",{parentName:"li"},"Lenovo XCC SNMP")," server settings."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("strong",{parentName:"li"},"HW-Server-Lenovo-Xcc-SNMP-custom")," template to the host.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \\\n    --plugin=hardware::server::lenovo::xcc::snmp::plugin \\\n    --mode=hardware \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --component='.*' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All 34 components are ok [2/2 disk, 14/14 fans, 2/2 psu, 1/1 raidvolume, 11/11 temperatures, 4/4 voltages]. | 'temp_CPU1 Temp'=30C;;;; 'temp_CPU1 DTS'=-51.0C;;0:-0.2;; 'temp_CPU2 Temp'=31C;;;; 'temp_CPU2 DTS'=-51.0C;;0:-0.2;; 'temp_DIMM 5 Temp'=27C;;;; 'temp_DIMM 8 Temp'=27C;;;; 'temp_DIMM 17 Temp'=27C;;;; 'temp_DIMM 20 Temp'=27C;;;; 'temp_PCH Temp'=43C;;;; 'temp_Ambient Temp'=27C;0:43;0:47;; 'temp_Exhaust Temp'=27C;;;; 'volt_CMOS Battery'=3.1850;2.3920:;2.2490:;; 'volt_SysBrd 3.3V'=3.3015;;2.9760:3.6270;; 'volt_SysBrd 5V'=5.0310;;4.4928:5.4990;; 'volt_SysBrd 12V'=12.096;;10.808:13.216;; 'fan_Fan 1A Tach'=41%;;;0;100 'fan_Fan 1B Tach'=33%;;;0;100 'fan_Fan 2A Tach'=33%;;;0;100 'fan_Fan 2B Tach'=33%;;;0;100 'fan_Fan 3A Tach'=33%;;;0;100 'fan_Fan 3B Tach'=33%;;;0;100 'fan_Fan 4A Tach'=33%;;;0;100 'fan_Fan 4B Tach'=33%;;;0;100 'fan_Fan 5A Tach'=33%;;;0;100 'fan_Fan 5B Tach'=33%;;;0;100 'fan_Fan 6A Tach'=33%;;;0;100 'fan_Fan 6B Tach'=33%;;;0;100 'fan_Fan 7A Tach'=33%;;;0;100 'fan_Fan 7B Tach'=33%;;;0;100 'count_disk'=2;;;; 'count_fan'=14;;;; 'count_psu'=2;;;; 'count_raidvolume'=1;;;; 'count_temperature'=11;;;; 'count_voltage'=4;;;;\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \\\n    --plugin=hardware::server::lenovo::xcc::snmp::plugin \\\n    --mode=hardware \\\n    --help\n")),(0,a.kt)("p",null,"All available modes can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \\\n    --plugin=hardware::server::lenovo::xcc::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}h.isMDXComponent=!0}}]);