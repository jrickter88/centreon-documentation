"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[47104],{61084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var r=n(3905),a=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"hardware-ups-cyberpower-snmp",title:"CyberPower Systems UPS SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp",id:"integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp",title:"CyberPower Systems UPS SNMP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-ups-cyberpower-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-ups-cyberpower-snmp",title:"CyberPower Systems UPS SNMP"},sidebar:"pp",previous:{title:"CyberPower Systems PDU SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-cyberpower-snmp"},next:{title:"Eaton ATS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-ats-eaton-snmp"}},c={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(k,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le Pack CyberPower UPS collecte les donn\xe9es pour:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Battery status"),(0,r.kt)("li",{parentName:"ul"},"Input lines"),(0,r.kt)("li",{parentName:"ul"},"Output lines")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Battery-status",label:"Battery-status",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Battery status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.percent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Battery capacity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"battery.voltage.volt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Battery voltage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"battery.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Battery temperature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,r.kt)(l.Z,{value:"Input-lines",label:"Input-lines",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Present status of the utility power supplied to the UPS"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines.input.frequence.hertz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current input line frequency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines.input.voltage.volt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current input line voltage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,r.kt)(l.Z,{value:"Output-lines",label:"Output-lines",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines.output.load.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current output load"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines.output.current.ampere"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current ampere level"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines.output.voltage.volt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current output voltage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines.output.power.watt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total output active power"),(0,r.kt)("td",{parentName:"tr",align:"left"},"W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines.output.frequence.hertz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current output frequency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hz")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement CyberPower UPS, le SNMP doit \xeatre configur\xe9. "),(0,r.kt)("p",null,"Le flux SNMP UDP/161 doit \xeatre ouvert entre le Collecteur et l'\xe9quipement."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Ups-Cyberpower-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("em",{parentName:"li"},"CyberPower Systems UPS SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Ups-Cyberpower-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-ups-cyberpower-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("em",{parentName:"li"},"CyberPower Systems UPS SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,r.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,r.kt)("em",{parentName:"li"},"Version SNMP")),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"HW-UPS-Cyberpower-SNMP-SNMP-custom"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ups_cyberpower_snmp.pl \\\n    --plugin=hardware::ups::cyberpower::snmp::plugin \\\n    --mode=battery-status \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='cps_ro' \\\n    --warning-charge-remaining='50:' \\\n    --critical-charge-remaining='20:' \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: battery status is normal - charge remaining: 100% (10 minutes remaining) | 'battery.charge.remaining.percent'=100%;50:;20:;0;100\n")),(0,r.kt)("p",null,"Cette commande contr\xf4le la batterie (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=battery-status"),") d'un \xe9quipement UPS CyberPower ayant pour adresse ",(0,r.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,r.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,r.kt)("em",{parentName:"p"},"cps_ro")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-community='cps_ro'"),")."),(0,r.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si la charge restante de la batterie est inf\xe9rieur \xe0 50% (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-charge-remaining='50:'"),")\net une alarme CRITICAL si inf\xe9rieur \xe0 20% (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-charge-remaining='20:'"),")."),(0,r.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ups_cyberpower_snmp.pl \\\n    --plugin=hardware::ups::cyberpower::snmp::plugin \\\n    --mode=battery-status \\\n    --help\n")),(0,r.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Diagnostique des plugins")))}N.isMDXComponent=!0}}]);