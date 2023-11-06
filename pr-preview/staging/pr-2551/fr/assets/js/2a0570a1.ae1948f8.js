"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[79301],{93368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>d});r(67294);var n=r(3905),a=r(51715),o=r(7626);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"hardware-servers-supermicro-superdoctor-snmp",title:"Supermicro SuperDoctor SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp",title:"Supermicro SuperDoctor SNMP",description:"Contenu du Pack de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-servers-supermicro-superdoctor-snmp",title:"Supermicro SuperDoctor SNMP"},sidebar:"pp",previous:{title:"Supermicro (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-snmp"},next:{title:"Timelinkmicro Tms6001",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp"}},c={},d=[{value:"Contenu du Pack de supervision",id:"contenu-du-pack-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],k={toc:d},g="wrapper";function f(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack-de-supervision"},"Contenu du Pack de supervision"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("p",null,"Le Pack Supermicro SuperDoctor collecte les donn\xe9es pour:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardware")),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the disk"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the memory"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sensor status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the sensor"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"sensor","_","name"),"#","hardware.sensor.fan.rpm"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Speed of the fan"),(0,n.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"sensor","_","name"),"#","hardware.sensor.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"temperature of the sensor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"sensor","_","name"),"#","hardware.sensor.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Voltage of the sensor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"sensor","_","name"),"#","hardware.sensor.discrete.xxx"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discrete sensor"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Afin de contr\xf4ler vos \xe9quipements Supermicro, l'agent SuperDoctor SNMP doit \xeatre configur\xe9.\nPour plus d'information, vous pouvez vous r\xe9f\xe9rer \xe0 la page officiel :\n",(0,n.kt)("a",{parentName:"p",href:"https://www.supermicro.com/en/solutions/management-software/superdoctor"},"https://www.supermicro.com/en/solutions/management-software/superdoctor")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Supermicro-Superdoctor-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Supermicro SuperDoctor SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Supermicro-Superdoctor-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-servers-supermicro-superdoctor-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Supermicro SuperDoctor SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,n.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,n.kt)("em",{parentName:"li"},"Version SNMP")),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"HW-Server-Supermicro-Superdoctor-SNMP-custom"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_supermicro_superdoctor_snmp.pl\n    --plugin=hardware::server::supermicro::superdoctor::snmp::plugin\n    --mode=hardware\n    --hostname=10.30.2.114\n    --snmp-version='2c'\n    --snmp-community='supermicro_ro'\n    --verbose\n")),(0,n.kt)("p",null,"Cette commande contr\xf4le le mat\xe9riel (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=hardware"),") d'un \xe9quipement Supermicro ayant pour adresse ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,n.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,n.kt)("em",{parentName:"p"},"supermicro_ro")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-community='supermicro_ro'"),")."),(0,n.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_supermicro_superdoctor_snmp.pl\n    --plugin=hardware::server::supermicro::superdoctor::snmp::plugin\n    --mode=hardware\n    --help\n")),(0,n.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Diagnostique des plugins")))}f.isMDXComponent=!0}}]);