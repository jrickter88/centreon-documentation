"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[48264],{64799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"network-fortinet-fortiauthenticator-snmp",title:"Fortinet FortiAuthenticator SNMP"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp",id:"integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp",title:"Fortinet FortiAuthenticator SNMP",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp.md",tags:[],version:"current",frontMatter:{id:"network-fortinet-fortiauthenticator-snmp",title:"Fortinet FortiAuthenticator SNMP"},sidebar:"pp",previous:{title:"Fortinet FortiADC SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp"},next:{title:"Fortinet Fortigate",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP de l&#39;\xe9quipement",id:"configuration-snmp-de-l\xe9quipement",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:4},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"FortiAuthenticator est une solution physique ou virtuelle de gestion d'identit\xe9s et d'authentification s\xe9curis\xe9e distribu\xe9e par\nla soci\xe9t\xe9 Fortinet."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon utilise le protocole SNMP pour se connecter et r\xe9cup\xe9rer les informations\net m\xe9triques relatives aux \xe9quipements FortiAuthenticator."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Appliances")," et machines virtuelles FortiAuthenticator")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Authenticator",label:"Authenticator",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.authentication.events.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of authentication events per second"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.authentication.failures.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of authentication failures per second"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.groups.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of user groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.groups.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of user groups usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.radius.nas.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of Radius NAS"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.radius.nas.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of Radius NAS usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.users.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of local users"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authenticator.users.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of users usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current CPU usage percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Disk-Log",label:"Disk-Log",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk.log.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of used space on the device's log disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Ha",label:"Ha",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ha-status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current status of the high-availability feature"))))),(0,a.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Per interface")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,a.kt)("em",{parentName:"td"},"in")," bandwidth usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,a.kt)("em",{parentName:"td"},"out")," bandwidth usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,a.kt)("p",null,"Vous pouvez restreindre ce contr\xf4le sur une interface donn\xe9e en sp\xe9cifiant le nom de l'interface \xe0 superviser\n(par exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$'"),") conjointement avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--name"),".")),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of memory usage on the device."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-snmp-de-l\xe9quipement"},"Configuration SNMP de l'\xe9quipement"),(0,a.kt)("p",null,"Sur l'\xe9quipement FortiAuthenticator, configurez et activez l'agent SNMP en suivant ces \xe9tapes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 l'interface Web d'administration de l'\xe9quipement"),(0,a.kt)("li",{parentName:"ul"},"Dans le menu, s\xe9lectionnez ",(0,a.kt)("em",{parentName:"li"},"System > Administration > SNMP")),(0,a.kt)("li",{parentName:"ul"},"Configurez les param\xe8tres SNMP en sp\xe9cifiant la version et la communaut\xe9 \xe0 utiliser")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements FortiAuthenticator:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortiauthenticator-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Fortinet Fortiauthenticator SNMP"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements FortiAuthenticator:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortiauthenticator-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-fortinet-fortiauthenticator-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Fortinet Fortiauthenticator SNMP"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,a.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,a.kt)("em",{parentName:"li"},"Version SNMP")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Net-Fortinet-Fortiauthenticator-SNMP-Custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fortinet_fortiauthenticator_snmp.pl \\\n    --plugin=network::fortinet::fortiauthenticator::snmp::plugin \\\n    --mode=authenticator \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='mysnmpcommunity' \\\n    --warning-users-usage-prct='80' \\\n    --critical-users-usage-prct='90' \\\n    --warning-authentication-failures='50' \\\n    --critical-authentication-failures='100' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Authenticator statistics are ok | 'authenticator.users.count'=9;;;0;10100 'authenticator.users.percentage'=0.09%;;;0;100\n'authenticator.groups.count'=1;;;0;1010 'authenticator.groups.percentage'=0.10%;;;0;100 'authenticator.radius.nas.count'=3;;;0;10100\n'authenticator.radius.nas.percentage'=0.03%;;;0;100 'authenticator.authentication.events.persecond'=0/s;;;0;\n'authenticator.authentication.failures.persecond'=0/s;;;0;\nchecking authenticator\n    users total: 10100 used: 9 (0.09%) free: 10091 (99.91%)\n    groups total: 1010 used: 1 (0.10%) free: 1009 (99.90%)\n    radius nas total: 10100 used: 3 (0.03%) free: 10097 (99.97%)\n    authentication events: 0/s, failures: 0/s\n")),(0,a.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re les statistiques d'authentification d'un \xe9quipement FortiAuthenticator (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=network::fortinet::fortiauthenticator::snmp::plugin\n--mode=authenticator"),") identifi\xe9 par l'adresse IP ",(0,a.kt)("em",{parentName:"p"},"10.0.0.1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.0.0.1"),"). Les param\xe8tres de communaut\xe9 et de version SNMP (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='mysnmpcommunity'"),")\ncorrespondants sont renseign\xe9s afin de pouvoir joindre l'\xe9quipement."),(0,a.kt)("p",null,"Une alarme WARNING sera ainsi d\xe9clench\xe9e si le nombre de sessions utilisateur en cours est sup\xe9rieur \xe0 80% (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-users-usage-prct='80'"),") des capacit\xe9s\nde l'\xe9quipement; l'alarme sera de type CRITICAL au del\xe0 de 90% de sessions utilis\xe9es (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-users-usage-prct='90'"),").\nDe la m\xeame mani\xe8re, des alarmes WARNING & CRITICAL seront d\xe9clench\xe9es en cas de d\xe9passement des seuils fix\xe9s du nombre d'authentifications erron\xe9es par seconde (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-authentication-failures='50'\n--critical-authentication-failures='100'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fortinet_fortiauthenticator_snmp.pl --plugin=network::fortinet::fortiauthenticator::snmp::plugin --mode=authenticator --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement FortiAuthenticator sur le port UDP/161,\nou que la communaut\xe9 SNMP configur\xe9e n'est pas correcte. Il est \xe9galement possible qu'un pare-feu bloque le flux."),(0,a.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Les causes de cette erreur peuvent \xeatre les suivantes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cet \xe9quipement ne supporte ou n'embarque pas la MIB utilis\xe9e par ce mode"),(0,a.kt)("li",{parentName:"ul"},"les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes.")))}f.isMDXComponent=!0}}]);