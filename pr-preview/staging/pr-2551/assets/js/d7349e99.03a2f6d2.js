"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52509],{96992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"hardware-pdu-cyberpower-snmp",title:"CyberPower Systems PDU SNMP"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp",id:"integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp",title:"CyberPower Systems PDU SNMP",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-pdu-cyberpower-snmp",title:"CyberPower Systems PDU SNMP"},sidebar:"pp",previous:{title:"Clever PDU",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-pdu-clever-snmp"},next:{title:"CyberPower Systems UPS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:d},k="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"CyberPower Basic Power Distribution Units (PDUs) provide reliable unfiltered power distribution\nfrom a UPS system, generator, or utility source to multiple devices"),(0,r.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PDUs Physical entities (outlets, bank, phases)")),(0,r.kt)("h2",{id:"collected-metrics"},"Collected metrics"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bank status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bank status, possible to set string-based alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bank.current.ampere"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current Bank Ampere level"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phase status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Phase status, possible to set string-based alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phase.current.ampere"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current Ampere level on a given Phase"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phase.power.watt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current Watt Power on a given Phase"),(0,r.kt)("td",{parentName:"tr",align:"left"},"W"))))),(0,r.kt)(o.Z,{value:"Outlets",label:"Outlets",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"outlet status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outlet status, possible to set string-based alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"outlet.current.ampere"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current Ampere on a given outlet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Le Service SNMP doit \xeatre activ\xe9 et configur\xe9 sur l'\xe9quipement CyberPower. "),(0,r.kt)("p",null,"Le Collecteur Centreon doit \xeatre en mesure d'atteindre le PDU CyberPower via le port\nUDP/161. "),(0,r.kt)("p",null,"Afin d'obtenir plus d'information sur la configuration SNMP, il est recommand\xe9 de se r\xe9f\xe9rer \xe0 la\ndocumentation officielle:\n",(0,r.kt)("a",{parentName:"p",href:"https://dl4jz3rbrsfum.cloudfront.net/documents/CyberPower_UM_IntelligentPDUUserGuide.pdf"},"https://dl4jz3rbrsfum.cloudfront.net/documents/CyberPower_UM_IntelligentPDUUserGuide.pdf"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("em",{parentName:"li"},"CyberPower Systems PDU SNMP"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Pdu-Cyberpower-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Monitoring Connector ",(0,r.kt)("em",{parentName:"li"},"CyberPower Systems PDU SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("em",{parentName:"li"},"CyberPower Systems PDU SNMP")," applications:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Pdu-Cyberpower-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM Centreon Monitoring Connector sur votre serveur Centreon Central:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-pdu-cyberpower-snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Monitoring Connector ",(0,r.kt)("em",{parentName:"li"},"CyberPower Systems PDU SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts". '),(0,r.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias", "IP Address / DNS", "Snmp Community" and "Snmp version" fields according to your device\'s configuration'),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("em",{parentName:"li"},"HW-Pdu-Cyberpower-SNMP"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,r.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser account and test the Plugin by running the following command (some of the parameters\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-community")," have to be adjusted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pdu_cyberpower_snmp.pl \\\n--plugin=hardware::pdu::cyberpower::snmp::plugin \\\n--mode=outlets \\\n--snmp-community=cps_pdu \\\n--hostname=10.31.2.1 \\\n--snmp-version=2c \\\n--verbose \n")),(0,r.kt)("p",null,"Expected command output is shown below: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Device 'PDU81005' outlets are ok | 'PDU81005~Outlet3 bank 1#outlet.current.ampere'=0.4A;;;0; 'PDU81005~Outlet7 bank 1#outlet.current.ampere'=0.4A;;;0; 'PDU81005~Outlet8 bank 1#outlet.current.ampere'=0.9A;;;0;checking device 'PDU81005'outlet 'Outlet1 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet2 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet3 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.4 Aoutlet 'Outlet4 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet5 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet6 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet7 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.4 Aoutlet 'Outlet8 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.9 A\n")),(0,r.kt)("p",null,"In this example, the Plugin gets the status and utilization metrics of the Outlets:\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--plugin=hardware::pdu::cyberpower::snmp::plugin --mode=outlets"),")"),(0,r.kt)("p",null,"All the available thresholds parameters can be displayed by adding the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pdu_cyberpower_snmp.pl \\\n--plugin=hardware::pdu::cyberpower::snmp::plugin \\\n--mode=outlets \\\n--help\n")),(0,r.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,r.kt)("p",null,"If you get this message, you're probably facing one of theses issues: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your SNMP isn't started or misconfigured on the CyberPower PDU System"),(0,r.kt)("li",{parentName:"ul"},"An external device is blocking your request (firewall, ...)")),(0,r.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,r.kt)("p",null,"This message generally means that SNMP privileges are not wide enough for the mode/plugin to work properly\nor that the polled device doesn't support required MIBs."))}h.isMDXComponent=!0}}]);