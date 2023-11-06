"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[2878],{89644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-antivirus-kaspersky-snmp",title:"Kaspersky"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",id:"integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",title:"Kaspersky",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp.md",tags:[],version:"current",frontMatter:{id:"applications-antivirus-kaspersky-snmp",title:"Kaspersky"},sidebar:"pp",previous:{title:"Kafka",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-kafka-jmx"},next:{title:"Keepalived SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-keepalived-snmp"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"El\xe9ment supervis\xe9s",id:"el\xe9ment-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration de l&#39;\xe9quipement",id:"configuration-de-l\xe9quipement",level:3},{value:"Flux r\xe9seaux",id:"flux-r\xe9seaux",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration de l&#39;H\xf4te",id:"configuration-de-lh\xf4te",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester mes configurations et le Plugin en ligne de commande ?",id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Kaspersky est une soci\xe9t\xe9 priv\xe9e qui fournit des solutions de cybers\xe9curit\xe9 et\nantivirus. Elle a \xe9t\xe9 fond\xe9e en 1997 par Eugene Kaspersky, Natalya Kaspersky et\nAlexey De-Monderik."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon Kaspersky permet de r\xe9cup\xe9rer, par l'interm\xe9diaire du\nprotocole SNMP, le statut du Serveur d'Administration et des applications\nadministr\xe9es."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"el\xe9ment-supervis\xe9s"},"El\xe9ment supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kaspersky Security Center")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Deployment",label:"Deployment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.antivirus.installed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of successful remote installations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.antivirus.install.failed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of failed remote installations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.expiring.licence.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with expiring licence")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.expired.licence.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with expired licence"))))),(0,a.kt)(i.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.critical.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of critical events"))))),(0,a.kt)(i.Z,{value:"Logical-Network",label:"Logical-Network",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.new.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of new hosts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"groups.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of groups on the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.notconnected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts that have not connected for a long time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.uncontrolled.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of uncontrolled hosts"))))),(0,a.kt)(i.Z,{value:"Protection",label:"Protection",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.antivirus.notrunning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts without a running antivirus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.realtime.notrunning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts without a running real time protection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.realtime.unacceptable.level.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with unacceptable protection level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.uncured.objects.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with uncured objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.2manythreats.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with too many threats"))))),(0,a.kt)(i.Z,{value:"Updates",label:"Updates",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"update.server.freshness.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Date of the last server update"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"update.hosts.outdated.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of outdated hosts"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(i.Z,{value:"Full-Scan",label:"Full-Scan",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.unscanned.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts not recently scanned")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-de-l\xe9quipement"},"Configuration de l'\xe9quipement"),(0,a.kt)("p",null,"Afin de superviser le serveur Kaspersky Security Center, le SNMP v2 ou v3 doit\n\xeatre configur\xe9 comme indiqu\xe9 sur la documentation officielle :\n",(0,a.kt)("a",{parentName:"p",href:"https://support.kaspersky.com/fr/12603#block3"},"https://support.kaspersky.com/fr/12603#block3")),(0,a.kt)("h3",{id:"flux-r\xe9seaux"},"Flux r\xe9seaux"),(0,a.kt)("p",null,"La communication doit \xeatre possible depuis le collecteur Centreon vers le port\nSNMP (UDP/161) du Kaspersky Security Center."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon Kaspersky sur l'ensemble des collecteurs Centreon supervisant des ressources Kaspersky Security Center :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision 'Kaspersky' depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," de l'interface Web Centreon"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon Kaspersky sur l'ensemble des collecteurs Centreon supervisant des ressources Kaspersky Security Center :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision contenant les Mod\xe8les de supervision sur le serveur Central Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-antivirus-kaspersky-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision 'Kaspersky' depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," de l'interface Web Centreon")))),(0,a.kt)("h2",{id:"configuration-de-lh\xf4te"},"Configuration de l'H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre serveur Kaspersky Security Center'),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"App-Antivirus-Kaspersky-SNMP-custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-"},"Comment tester mes configurations et le Plugin en ligne de commande ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin --mode=protection \\\n  --hostname=10.0.0.1 --snmp-version='2c' --snmp-community='kaseprsky_ro' \\\n  --warning-status='%{status} =~ /Warning/i' --critical-status='%{status} =~ /Critical/i'\n  --warning-no-antivirus='0' --critical-no-antivirus='' --warning-no-real-time='0' --critical-no-real-time='' \\\n  --warning-not-acceptable-level='0' --critical-not-acceptable-level='' \\\n  --warning-not-cured-objects='0' --critical-not-cured-objects='' \\\n  --warning-too-many-threats='0' --critical-too-many-threats='' \\\n  --warning-too-many-threats='0' --critical-too-many-threats='' \\\n  --use-new-perfdata\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"WARNING: 2 host(s) without running antivirus - 1 hosts(s) without running real time protection - 8 host(s) with not cured objects - 5 host(s) with too many threats | 'protection.hosts.antivirus.notrunning.count'=2;0:0;;0; 'protection.hosts.realtime.notrunning.count'=1;0:0;;0; 'protection.hosts.realtime.unacceptable.level.count'=0;0:0;;0; 'protection.hosts.uncured.objects.count'=8;0:0;;0; 'protection.hosts.toomanythreats.count'=5;0:0;;0;\n")),(0,a.kt)("p",null,"Dans cet exemple, le Plugin contr\xf4le le statut de la protection des \xe9l\xe9ments du parc\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::antivirus::kaspersky::snmp::plugin--mode=protection"),") indiqu\xe9 par\nle Kasperky Security Center \xe0 l'adresse 10.0.0.1 par l'interm\xe9diaire du\nprotocole SNMP\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='kaseprsky_ro'"),")."),(0,a.kt)("p",null,"Dans cet exemple, une alarme est d\xe9clench\xe9e si le statut global de la protection est diff\xe9rent de 'OK'\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} =~ /Warning/i'")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} =~ /Critical/i'"),")\nou alors que le nombre de PC sans protection ou avec une protection insuffisante est sup\xe9rieur \xe0 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-no-antivirus='0'"),")."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin \\\n  --mode=deployment \\\n  --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin \\\n  --list-mode\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient\npas \xe0 contacter le serveur Kaspersky Security Center sur le port 161 (firewall\nou autre \xe9quipement en coupure) ou que la communaut\xe9 SNMP configur\xe9e n'est pas\ncorrecte."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes pour\nfaire fonctionner le mode/plugin."))}N.isMDXComponent=!0}}]);