"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37945],{73358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),s=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"hardware-servers-xfusion-ibmc-snmp",title:"xFusion iBMC SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp",title:"xFusion iBMC SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-servers-xfusion-ibmc-snmp",title:"xFusion iBMC SNMP"},sidebar:"pp",previous:{title:"Timelinkmicro Tms6001",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp"},next:{title:"3com Network",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/network-3com-snmp"}},c={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Pack ",(0,a.kt)("strong",{parentName:"p"},"xFusion iBMC SNMP")," brings a host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HW-Server-Xfusion-Ibmc-SNMP-custom")),(0,a.kt)("p",null,"It brings the following service template:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HW-Server-Xfusion-Ibmc-Hardware-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check components state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"component status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"fan_name"),"#hardware.fan.speed.rpm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hard disk status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"harddisk_name"),"#hardware.harddisk.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"logical drive status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pcie status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"power supply status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"powersupply_name"),"#hardware.powersupply.power.watt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"W")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"raid controller status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"temperature status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"temperature_object"),"#hardware.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your ",(0,a.kt)("strong",{parentName:"p"},"xFusion iBMC"),"\nserver."),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The target server must be reachable from the Centreon poller on the UDP/161\nSNMP port."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,a.kt)("p",null,"If the platform uses an ",(0,a.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,a.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,a.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,a.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-hardware-servers-xfusion-ibmc-snmp\n"))),(0,a.kt)(s.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-servers-xfusion-ibmc-snmp\n"))),(0,a.kt)(s.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-hardware-servers-xfusion-ibmc-snmp\n")))),(0,a.kt)("p",null,"Whatever the license type (",(0,a.kt)("em",{parentName:"p"},"online")," or ",(0,a.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,a.kt)("strong",{parentName:"p"},"xFusion iBMC SNMP")," Pack through\nthe ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,a.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,a.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More information in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,a.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Hardware-Servers-Xfusion-Ibmc-Snmp\n"))),(0,a.kt)(s.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Xfusion-Ibmc-Snmp\n"))),(0,a.kt)(s.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-hardware-servers-xfusion-ibmc-snmp\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("strong",{parentName:"li"},"xFusion iBMC")," server settings."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("strong",{parentName:"li"},"HW-Server-Xfusion-Ibmc-SNMP-custom")," template to the host.")),(0,a.kt)("p",null,"If you are using SNMP Version 3, use the ",(0,a.kt)("strong",{parentName:"p"},"SNMPEXTRAOPTIONS")," macro to configure"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \\\n    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \\\n    --mode=hardware \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --component='' \\\n    --verbose\n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All 44 components are ok [9/9 components, 2/2 cpu, 14/14 fans, 2/2 hard disks, 1/1 logical drives, 8/8 memorys, 2/2 pcie, 2/2 power supplies, 1/1 raidcontrollers, 3/3 temperatures]. | 'Disk0#hardware.harddisk.temperature.celsius'=34C;;;0; 'Disk1#hardware.harddisk.temperature.celsius'=34C;;;0; 'Fan1 Front#hardware.fan.speed.rpm'=9060rpm;;;0; 'Fan1 Rear#hardware.fan.speed.rpm'=8520rpm;;;0; 'Fan2 Front#hardware.fan.speed.rpm'=9180rpm;;;0; 'Fan2 Rear#hardware.fan.speed.rpm'=8400rpm;;;0; 'Fan3 Front#hardware.fan.speed.rpm'=9240rpm;;;0; 'Fan3 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'Fan4 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan4 Rear#hardware.fan.speed.rpm'=8340rpm;;;0; 'Fan5 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan5 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'Fan6 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan6 Rear#hardware.fan.speed.rpm'=8520rpm;;;0; 'Fan7 Front#hardware.fan.speed.rpm'=9240rpm;;;0; 'Fan7 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'PSU1#hardware.powersupply.power.watt'=128W;;;0;900 'PSU2#hardware.powersupply.power.watt'=112W;;;0;900 'Inlet#hardware.temperature.celsius'=25C;;;; 'CPU1#hardware.temperature.celsius'=37C;;;; 'CPU2#hardware.temperature.celsius'=41C;;;; 'hardware.component.count'=9;;;; 'hardware.cpu.count'=2;;;; 'hardware.fan.count'=14;;;; 'hardware.harddisk.count'=2;;;; 'hardware.logicaldrive.count'=1;;;; 'hardware.memory.count'=8;;;; 'hardware.pcie.count'=2;;;; 'hardware.psu.count'=2;;;; 'hardware.raidcontroller.count'=1;;;; 'hardware.temperature.count'=3;;;;\nChecking component\ncomponent 'SC332' of type 'unknown' status is 'ok' [instance: 5.83.67.51.51.50]\ncomponent 'SC382' of type 'unknown' status is 'ok' [instance: 5.83.67.51.56.50]\ncomponent 'SP331' of type 'unknown' status is 'ok' [instance: 5.83.80.51.51.49]\ncomponent 'SP382' of type 'unknown' status is 'ok' [instance: 5.83.80.51.56.50]\ncomponent 'BC11HBBD' of type 'hddBackPlane' status is 'ok' [instance: 8.66.67.49.49.72.66.66.68]\ncomponent 'BC82PRUU' of type 'unknown' status is 'ok' [instance: 8.66.67.56.50.80.82.85.85]\ncomponent 'BC82PRUV' of type 'unknown' status is 'ok' [instance: 8.66.67.56.50.80.82.85.86]\ncomponent 'Mainboard' of type 'baseBoard' status is 'ok' [instance: 9.77.97.105.110.98.111.97.114.100]\ncomponent 'Public Module' of type 'raidCard' status is 'ok' [instance: 13.80.117.98.108.105.99.32.77.111.100.117.108.101]\nChecking CPU\ncpu 'CPU1' status is 'ok' [instance: 1]\ncpu 'CPU2' status is 'ok' [instance: 2]\nChecking hard disks\nhard disk 'Disk0' status is 'ok' [instance: 1]\nhard disk 'Disk1' status is 'ok' [instance: 2]\nChecking fans\nfan 'Fan1 Front' status is 'ok' [instance: 1]\nfan 'Fan1 Rear' status is 'ok' [instance: 2]\nfan 'Fan2 Front' status is 'ok' [instance: 3]\nfan 'Fan2 Rear' status is 'ok' [instance: 4]\nfan 'Fan3 Front' status is 'ok' [instance: 5]\nfan 'Fan3 Rear' status is 'ok' [instance: 6]\nfan 'Fan4 Front' status is 'ok' [instance: 7]\nfan 'Fan4 Rear' status is 'ok' [instance: 8]\nfan 'Fan5 Front' status is 'ok' [instance: 9]\nfan 'Fan5 Rear' status is 'ok' [instance: 10]\nfan 'Fan6 Front' status is 'ok' [instance: 11]\nfan 'Fan6 Rear' status is 'ok' [instance: 12]\nfan 'Fan7 Front' status is 'ok' [instance: 13]\nfan 'Fan7 Rear' status is 'ok' [instance: 14]\nChecking logical drives\nlogical drive '1.1' status is 'optimal' [instance: 1.1]\nChecking memory\nmemory 'DIMM000' status is 'ok' [instance: 1]\nmemory 'DIMM020' status is 'ok' [instance: 5]\nmemory 'DIMM040' status is 'ok' [instance: 9]\nmemory 'DIMM060' status is 'ok' [instance: 13]\nmemory 'DIMM100' status is 'ok' [instance: 17]\nmemory 'DIMM120' status is 'ok' [instance: 21]\nmemory 'DIMM140' status is 'ok' [instance: 25]\nmemory 'DIMM160' status is 'ok' [instance: 29]\nChecking PCIe\nPCIe 'PCIe Card 1 (SP331)' status is 'ok' [instance: 1]\nPCIe 'PCIe Card 2 (SP382)' status is 'ok' [instance: 2]\nChecking power supplies\npower supply 'PSU1' status is 'ok' [instance: 1]\npower supply 'PSU2' status is 'ok' [instance: 2]\nChecking raid controllers\nraid controller 'RAID Card1' status is 'ok' [instance: 1]\nChecking temperatures\ntemperature of 'Inlet' is '25' celsius degrees [instance: 1]\ntemperature of 'CPU1' is '37' celsius degrees [instance: 2]\ntemperature of 'CPU2' is '41' celsius degrees [instance: 3]\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \\\n    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \\\n    --mode=hardware \\\n    --help\n")),(0,a.kt)("p",null,"All available modes can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \\\n    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}h.isMDXComponent=!0}}]);