"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[83275],{30654:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>P,frontMatter:()=>m,metadata:()=>c,toc:()=>l});r(67294);var s=r(3905),t=r(51715),a=r(7626);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function p(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const m={id:"hardware-servers-supermicro-bmc-snmp",title:"Supermicro BMC SNMP"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp",title:"Supermicro BMC SNMP",description:"Contenu du Pack de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-supermicro-bmc-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-servers-supermicro-bmc-snmp",title:"Supermicro BMC SNMP"},sidebar:"pp",previous:{title:"Sun SFxxK",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-servers-sun-sfxxk-pssh"},next:{title:"Supermicro (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-snmp"}},d={},l=[{value:"Contenu du Pack de supervision",id:"contenu-du-pack-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],g={toc:l},M="wrapper";function P(e){var{components:n}=e,r=p(e,["components"]);return(0,s.kt)(M,o(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(n){i(e,n,r[n])}))}return e}({},g,r),{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"contenu-du-pack-de-supervision"},"Contenu du Pack de supervision"),(0,s.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,s.kt)("p",null,"Le Pack Supermicro collecte les donn\xe9es pour:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sensors")),(0,s.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,s.kt)(t.Z,{groupId:"sync",mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"Sensors",label:"Sensors",mdxType:"TabItem"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"sensor status"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Status of the sensor"),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"sensor","_","name"),"#","hardware.sensor.reading.count"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Sensor reading value"),(0,s.kt)("td",{parentName:"tr",align:"left"})))))),(0,s.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,s.kt)("p",null,"Afin de contr\xf4ler vos \xe9quipements Supermicro, le Baseboard Management Controller doit \xeatre configur\xe9.\nPour plus d'information, vous pouvez vous r\xe9f\xe9rer \xe0 la page officiel :\n",(0,s.kt)("a",{parentName:"p",href:"https://www.supermicro.com/en/solutions/management-software/bmc-resources"},"https://www.supermicro.com/en/solutions/management-software/bmc-resources")),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(t.Z,{groupId:"sync",mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Supermicro-Bmc-Snmp\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,s.kt)("em",{parentName:"li"},"Supermicro BMC SNMP")," depuis la page ",(0,s.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,s.kt)(a.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Supermicro-Bmc-Snmp\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-servers-supermicro-bmc-snmp\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,s.kt)("em",{parentName:"li"},"Supermicro BMC SNMP")," depuis la page ",(0,s.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,s.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,s.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,s.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,s.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,s.kt)("em",{parentName:"li"},"Version SNMP")),(0,s.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,s.kt)("em",{parentName:"li"},"HW-Server-Supermicro-Bmc-SNMP-custom"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,s.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,s.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,s.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,s.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_supermicro_bmc_snmp.pl\n    --plugin=hardware::server::supermicro::bmc::snmp::plugin\n    --mode=sensors\n    --hostname=10.30.2.114\n    --snmp-version='2c'\n    --snmp-community='supermicro_ro'\n    --verbose\n")),(0,s.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All 60 components are ok [60/60 sensors]. | 'CPU1 Temp#hardware.sensor.reading.count'=61;10:96;5:101;; 'CPU2 Temp#hardware.sensor.reading.count'=44;10:96;5:101;; 'PCH Temp#hardware.sensor.reading.count'=43;10:85;5:90;; 'System Temp#hardware.sensor.reading.count'=29;10:80;5:85;; 'Peripheral Temp#hardware.sensor.reading.count'=33;10:80;5:85;; 'VRMCpu1 Temp#hardware.sensor.reading.count'=39;10:95;5:100;; 'VRMCpu2 Temp#hardware.sensor.reading.count'=34;10:95;5:100;; 'VRMP1ABC Temp#hardware.sensor.reading.count'=36;10:95;5:100;; 'VRMP1DEF Temp#hardware.sensor.reading.count'=37;10:95;5:100;; 'VRMP2ABC Temp#hardware.sensor.reading.count'=37;10:95;5:100;; 'VRMP2DEF Temp#hardware.sensor.reading.count'=36;10:95;5:100;; 'FAN1#hardware.sensor.reading.count'=4700;700:25300;500:25400;; 'FAN2#hardware.sensor.reading.count'=4600;700:25300;500:25400;; 'FAN7#hardware.sensor.reading.count'=4700;700:25300;500:25400;; 'FAN8#hardware.sensor.reading.count'=4700;700:25300;500:25400;; 'P1-DIMMA1 Temp#hardware.sensor.reading.count'=52;10:80;5:85;; 'P1-DIMMA2 Temp#hardware.sensor.reading.count'=45;10:80;5:85;; 'P1-DIMMB1 Temp#hardware.sensor.reading.count'=58;10:80;5:85;; 'P1-DIMMB2 Temp#hardware.sensor.reading.count'=55;10:80;5:85;; 'P1-DIMMC1 Temp#hardware.sensor.reading.count'=51;10:80;5:85;; 'P1-DIMMC2 Temp#hardware.sensor.reading.count'=59;10:80;5:85;; 'P1-DIMMD1 Temp#hardware.sensor.reading.count'=49;10:80;5:85;; 'P1-DIMMD2 Temp#hardware.sensor.reading.count'=46;10:80;5:85;; 'P1-DIMME1 Temp#hardware.sensor.reading.count'=40;10:80;5:85;; 'P1-DIMME2 Temp#hardware.sensor.reading.count'=44;10:80;5:85;; 'P1-DIMMF1 Temp#hardware.sensor.reading.count'=40;10:80;5:85;; 'P1-DIMMF2 Temp#hardware.sensor.reading.count'=39;10:80;5:85;; 'P2-DIMMA1 Temp#hardware.sensor.reading.count'=45;10:80;5:85;; 'P2-DIMMA2 Temp#hardware.sensor.reading.count'=41;10:80;5:85;; 'P2-DIMMB1 Temp#hardware.sensor.reading.count'=44;10:80;5:85;; 'P2-DIMMB2 Temp#hardware.sensor.reading.count'=45;10:80;5:85;; 'P2-DIMMC1 Temp#hardware.sensor.reading.count'=43;10:80;5:85;; 'P2-DIMMC2 Temp#hardware.sensor.reading.count'=43;10:80;5:85;; 'P2-DIMMD1 Temp#hardware.sensor.reading.count'=48;10:80;5:85;; 'P2-DIMMD2 Temp#hardware.sensor.reading.count'=42;10:80;5:85;; 'P2-DIMME1 Temp#hardware.sensor.reading.count'=49;10:80;5:85;; 'P2-DIMME2 Temp#hardware.sensor.reading.count'=51;10:80;5:85;; 'P2-DIMMF1 Temp#hardware.sensor.reading.count'=38;10:80;5:85;; 'P2-DIMMF2 Temp#hardware.sensor.reading.count'=44;10:80;5:85;; '12V#hardware.sensor.reading.count'=12.366;10.780:12.915;10.536:13.281;; '5VCC#hardware.sensor.reading.count'=5.030;4.520:5.600;4.280:5.720;; '3.3VCC#hardware.sensor.reading.count'=3.401;2.976:3.707;2.823:3.775;; 'VBAT#hardware.sensor.reading.count'=4;;;; 'Vcpu1#hardware.sensor.reading.count'=1.800;1.395:2.097;1.260:2.304;; 'Vcpu2#hardware.sensor.reading.count'=1.800;1.395:2.097;1.260:2.304;; 'VDimmP1ABC#hardware.sensor.reading.count'=1.200;1.086:1.350;1.026:1.374;; 'VDimmP1DEF#hardware.sensor.reading.count'=1.194;1.086:1.350;1.026:1.374;; 'VDimmP2ABC#hardware.sensor.reading.count'=1.200;1.086:1.350;1.026:1.374;; 'VDimmP2DEF#hardware.sensor.reading.count'=1.200;1.086:1.350;1.026:1.374;; '12VSB#hardware.sensor.reading.count'=12.325;10.765:12.910;10.505:13.300;; '3.3VSB#hardware.sensor.reading.count'=3.443;2.979:3.699;2.819:3.763;; 'P1V8_PCH#hardware.sensor.reading.count'=1.737;1.629:2.025;1.539:2.061;; 'PVNN_PCH#hardware.sensor.reading.count'=1.006;0.904:1.120;0.856:1.144;; 'P1V05_PCH#hardware.sensor.reading.count'=1.050;0.948:1.176;0.900:1.200;; 'PS1 Status#hardware.sensor.reading.count'=1;;;; 'PS2 Status#hardware.sensor.reading.count'=1;;;; 'NVMe_SSD Temp#hardware.sensor.reading.count'=33;10:65;5:70;; 'AOC_SAS Temp#hardware.sensor.reading.count'=68;10:100;5:105;; 'HDD Temp#hardware.sensor.reading.count'=31;10:50;5:55;; 'HDD Status#hardware.sensor.reading.count'=1;;;; 'hardware.sensor.count'=60;;;;\nChecking sensors\nsensor 'CPU1 Temp' reading is '61' [instance: 1#CPU1 Temp]\nsensor 'CPU2 Temp' reading is '44' [instance: 2#CPU2 Temp]\nsensor 'PCH Temp' reading is '43' [instance: 3#PCH Temp]\nsensor 'System Temp' reading is '29' [instance: 4#System Temp]\nsensor 'Peripheral Temp' reading is '33' [instance: 5#Peripheral Temp]\nsensor 'VRMCpu1 Temp' reading is '39' [instance: 8#VRMCpu1 Temp]\nsensor 'VRMCpu2 Temp' reading is '34' [instance: 9#VRMCpu2 Temp]\nsensor 'VRMP1ABC Temp' reading is '36' [instance: 10#VRMP1ABC Temp]\nsensor 'VRMP1DEF Temp' reading is '37' [instance: 11#VRMP1DEF Temp]\nsensor 'VRMP2ABC Temp' reading is '37' [instance: 12#VRMP2ABC Temp]\nsensor 'VRMP2DEF Temp' reading is '36' [instance: 13#VRMP2DEF Temp]\nsensor 'FAN1' reading is '4700' [instance: 14#FAN1]\nsensor 'FAN2' reading is '4600' [instance: 15#FAN2]\nsensor 'FAN7' reading is '4700' [instance: 20#FAN7]\nsensor 'FAN8' reading is '4700' [instance: 21#FAN8]\nsensor 'P1-DIMMA1 Temp' reading is '52' [instance: 23#P1-DIMMA1 Temp]\nsensor 'P1-DIMMA2 Temp' reading is '45' [instance: 24#P1-DIMMA2 Temp]\nsensor 'P1-DIMMB1 Temp' reading is '58' [instance: 25#P1-DIMMB1 Temp]\nsensor 'P1-DIMMB2 Temp' reading is '55' [instance: 26#P1-DIMMB2 Temp]\nsensor 'P1-DIMMC1 Temp' reading is '51' [instance: 27#P1-DIMMC1 Temp]\nsensor 'P1-DIMMC2 Temp' reading is '59' [instance: 28#P1-DIMMC2 Temp]\nsensor 'P1-DIMMD1 Temp' reading is '49' [instance: 29#P1-DIMMD1 Temp]\nsensor 'P1-DIMMD2 Temp' reading is '46' [instance: 30#P1-DIMMD2 Temp]\nsensor 'P1-DIMME1 Temp' reading is '40' [instance: 31#P1-DIMME1 Temp]\nsensor 'P1-DIMME2 Temp' reading is '44' [instance: 32#P1-DIMME2 Temp]\nsensor 'P1-DIMMF1 Temp' reading is '40' [instance: 33#P1-DIMMF1 Temp]\nsensor 'P1-DIMMF2 Temp' reading is '39' [instance: 34#P1-DIMMF2 Temp]\nsensor 'P2-DIMMA1 Temp' reading is '45' [instance: 35#P2-DIMMA1 Temp]\nsensor 'P2-DIMMA2 Temp' reading is '41' [instance: 36#P2-DIMMA2 Temp]\nsensor 'P2-DIMMB1 Temp' reading is '44' [instance: 37#P2-DIMMB1 Temp]\nsensor 'P2-DIMMB2 Temp' reading is '45' [instance: 38#P2-DIMMB2 Temp]\nsensor 'P2-DIMMC1 Temp' reading is '43' [instance: 39#P2-DIMMC1 Temp]\nsensor 'P2-DIMMC2 Temp' reading is '43' [instance: 40#P2-DIMMC2 Temp]\nsensor 'P2-DIMMD1 Temp' reading is '48' [instance: 41#P2-DIMMD1 Temp]\nsensor 'P2-DIMMD2 Temp' reading is '42' [instance: 42#P2-DIMMD2 Temp]\nsensor 'P2-DIMME1 Temp' reading is '49' [instance: 43#P2-DIMME1 Temp]\nsensor 'P2-DIMME2 Temp' reading is '51' [instance: 44#P2-DIMME2 Temp]\nsensor 'P2-DIMMF1 Temp' reading is '38' [instance: 45#P2-DIMMF1 Temp]\nsensor 'P2-DIMMF2 Temp' reading is '44' [instance: 46#P2-DIMMF2 Temp]\nsensor '12V' reading is '12.366' [instance: 47#12V]\nsensor '5VCC' reading is '5.030' [instance: 48#5VCC]\nsensor '3.3VCC' reading is '3.401' [instance: 49#3.3VCC]\nsensor 'VBAT' reading is '4' [instance: 50#VBAT]\nsensor 'Vcpu1' reading is '1.800' [instance: 51#Vcpu1]\nsensor 'Vcpu2' reading is '1.800' [instance: 52#Vcpu2]\nsensor 'VDimmP1ABC' reading is '1.200' [instance: 53#VDimmP1ABC]\nsensor 'VDimmP1DEF' reading is '1.194' [instance: 54#VDimmP1DEF]\nsensor 'VDimmP2ABC' reading is '1.200' [instance: 55#VDimmP2ABC]\nsensor 'VDimmP2DEF' reading is '1.200' [instance: 56#VDimmP2DEF]\nsensor '12VSB' reading is '12.325' [instance: 57#12VSB]\nsensor '3.3VSB' reading is '3.443' [instance: 58#3.3VSB]\nsensor 'P1V8_PCH' reading is '1.737' [instance: 59#P1V8_PCH]\nsensor 'PVNN_PCH' reading is '1.006' [instance: 60#PVNN_PCH]\nsensor 'P1V05_PCH' reading is '1.050' [instance: 61#P1V05_PCH]\nsensor 'PS1 Status' reading is '1' [instance: 63#PS1 Status]\nsensor 'PS2 Status' reading is '1' [instance: 64#PS2 Status]\nsensor 'NVMe_SSD Temp' reading is '33' [instance: 65#NVMe_SSD Temp]\nsensor 'AOC_SAS Temp' reading is '68' [instance: 66#AOC_SAS Temp]\nsensor 'HDD Temp' reading is '31' [instance: 67#HDD Temp]\nsensor 'HDD Status' reading is '1' [instance: 68#HDD Status]\n")),(0,s.kt)("p",null,"Cette commande contr\xf4le le mat\xe9riel (",(0,s.kt)("inlineCode",{parentName:"p"},"--mode=sensors"),") d'un \xe9quipement Supermicro ayant pour adresse ",(0,s.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,s.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,s.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,s.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,s.kt)("em",{parentName:"p"},"supermicro_ro")," (",(0,s.kt)("inlineCode",{parentName:"p"},"--snmp-community='supermicro_ro'"),")."),(0,s.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,s.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_supermicro_bmc_snmp.pl\n    --plugin=hardware::server::supermicro::bmc::snmp::plugin\n    --mode=sensors\n    --help\n")),(0,s.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Diagnostique des plugins")))}P.isMDXComponent=!0}}]);