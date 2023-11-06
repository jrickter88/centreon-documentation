"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[45714],{37455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"applications-monitoring-speedtest",title:"Speedtest"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-speedtest",id:"integrations/plugin-packs/procedures/applications-monitoring-speedtest",title:"Speedtest",description:"Contenu du pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-speedtest.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-speedtest",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-speedtest",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-speedtest.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-speedtest",title:"Speedtest"},sidebar:"pp",previous:{title:"Solr",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-solr-jmx"},next:{title:"Splunk",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-splunk-api"}},u={},c=[{value:"Contenu du pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installer le connecteur de supervision",id:"installer-le-connecteur-de-supervision",level:2},{value:"Pack",id:"pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Utiliser le connecteur de supervision",id:"utiliser-le-connecteur-de-supervision",level:2},{value:"Utiliser un mod\xe8le d&#39;h\xf4te issu du connecteur",id:"utiliser-un-mod\xe8le-dh\xf4te-issu-du-connecteur",level:3},{value:"Utiliser un mod\xe8le de service issu du connecteur",id:"utiliser-un-mod\xe8le-de-service-issu-du-connecteur",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"Modes disponibles",id:"modes-disponibles",level:3},{value:"Options disponibles",id:"options-disponibles",level:3},{value:"Options des modes",id:"options-des-modes",level:4}],g={toc:c},k="wrapper";function f(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision ",(0,n.kt)("strong",{parentName:"p"},"Speedtest")," apporte un mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Speedtest-custom"))),(0,n.kt)("p",null,"Le connecteur apporte le mod\xe8le de service suivant\n(class\xe9s selon le mod\xe8le d'h\xf4te auquel ils sont rattach\xe9s) :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"App-Monitoring-Speedtest-custom",label:"App-Monitoring-Speedtest-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Internet-Bandwidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Speedtest-Internet-Bandwidth-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la bande passante internet")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les services list\xe9s ci-dessus sont cr\xe9\xe9s automatiquement lorsque le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"p"},"App-Monitoring-Speedtest-custom")," est utilis\xe9.")))),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)("p",null,"Voici le tableau des services pour ce connecteur, d\xe9taillant les m\xe9triques rattach\xe9es \xe0 chaque service."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Internet-Bandwidth",label:"Internet-Bandwidth",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ping.latency.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ping.jitter.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"internet.bandwidth.download.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"internet.bandwidth.upload.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installez la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"speedtest")," en suivant la proc\xe9dure du ",(0,n.kt)("a",{parentName:"p",href:"https://www.speedtest.net/apps/cli"},"site"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Validez la licence en ex\xe9cutant la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"speedtest")," en ligne de commande.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"La communication doit \xeatre possible avec ",(0,n.kt)("inlineCode",{parentName:"p"},"speedtest.net"),"."))),(0,n.kt)("h2",{id:"installer-le-connecteur-de-supervision"},"Installer le connecteur de supervision"),(0,n.kt)("h3",{id:"pack"},"Pack"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Si la plateforme est configur\xe9e avec une licence ",(0,n.kt)("em",{parentName:"li"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le connecteur dans le menu ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".\nAu contraire, si la plateforme utilise une licence ",(0,n.kt)("em",{parentName:"li"},"offline"),", installez le paquet\nsur le ",(0,n.kt)("strong",{parentName:"li"},"serveur central")," via la commande correspondant au gestionnaire de paquets\nassoci\xe9 \xe0 sa distribution :")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-speedtest\n")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Quel que soit le type de la licence (",(0,n.kt)("em",{parentName:"li"},"online")," ou ",(0,n.kt)("em",{parentName:"li"},"offline"),"), installez le connecteur ",(0,n.kt)("strong",{parentName:"li"},"Speedtest"),"\ndepuis l'interface web et le menu ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".")),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalit\xe9 est activ\xe9e, et\nque vous ne souhaitez pas d\xe9couvrir des \xe9l\xe9ments pour la premi\xe8re fois, alors cette\n\xe9tape n'est pas requise."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,n.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Monitoring-Speedtest\n"))),(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Monitoring-Speedtest\n"))),(0,n.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-monitoring-speedtest\n"))),(0,n.kt)(i.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Speedtest\n")))),(0,n.kt)("h2",{id:"utiliser-le-connecteur-de-supervision"},"Utiliser le connecteur de supervision"),(0,n.kt)("h3",{id:"utiliser-un-mod\xe8le-dh\xf4te-issu-du-connecteur"},"Utiliser un mod\xe8le d'h\xf4te issu du connecteur"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ol"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre ressource."),(0,n.kt)("li",{parentName:"ol"},"Appliquez le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Speedtest-custom"),". Une liste de macros appara\xeet. Les macros vous permettent de d\xe9finir comment le connecteur se connectera \xe0 la ressource, ainsi que de personnaliser le comportement du connecteur."),(0,n.kt)("li",{parentName:"ol"},"Renseignez les macros d\xe9sir\xe9es. Attention, certaines macros sont obligatoires.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Valeur par d\xe9faut"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SPEEDTESTEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont list\xe9es ",(0,n.kt)("a",{parentName:"td",href:"#options-disponibles"},"ici")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration"),". L'h\xf4te appara\xeet dans la liste des h\xf4tes supervis\xe9s, et dans la page ",(0,n.kt)("strong",{parentName:"li"},"Statut des ressources"),". La commande envoy\xe9e par le connecteur est indiqu\xe9e dans le panneau de d\xe9tails de l'h\xf4te : celle-ci montre les valeurs des macros.")),(0,n.kt)("h3",{id:"utiliser-un-mod\xe8le-de-service-issu-du-connecteur"},"Utiliser un mod\xe8le de service issu du connecteur"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Si vous avez utilis\xe9 un mod\xe8le d'h\xf4te et coch\xe9 la case ",(0,n.kt)("strong",{parentName:"li"},"Cr\xe9er aussi les services li\xe9s aux mod\xe8les"),", les services associ\xe9s au mod\xe8le ont \xe9t\xe9 cr\xe9\xe9s automatiquement, avec les mod\xe8les de services correspondants. Sinon, ",(0,n.kt)("a",{parentName:"li",href:"/docs/monitoring/basic-objects/services"},"cr\xe9ez les services d\xe9sir\xe9s manuellement")," et appliquez-leur un mod\xe8le de service."),(0,n.kt)("li",{parentName:"ol"},"Renseignez les macros d\xe9sir\xe9es (par exemple, ajustez les seuils d'alerte). Les macros indiqu\xe9es ci-dessous comme requises (",(0,n.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Internet-Bandwidth",label:"Internet-Bandwidth",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Valeur par d\xe9faut"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGBANDWIDTHDOWNLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALBANDWIDTHDOWNLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGBANDWIDTHUPLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALBANDWIDTHUPLOAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGPINGJITTER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALPINGJITTER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGPINGLATENCY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALPINGLATENCY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont list\xe9es ",(0,n.kt)("a",{parentName:"td",href:"#options-disponibles"},"ici")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration"),". Le service appara\xeet dans la liste des services supervis\xe9s, et dans la page ",(0,n.kt)("strong",{parentName:"li"},"Statut des ressources"),". La commande envoy\xe9e par le connecteur est indiqu\xe9e dans le panneau de d\xe9tails du service : celle-ci montre les valeurs des macros.")),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),"). Vous pouvez tester\nque le connecteur arrive bien \xe0 superviser la ressource en utilisant une commande\ntelle que celle-ci (remplacez les valeurs d'exemple par les v\xf4tres) :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \\\n    --plugin=apps::monitoring::speedtest::plugin \\\n    --mode=internet-bandwidth\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: ping latency: 1.208 ms, jitter: 0.011 - download: 4.87 Gb/s, upload: 1.83 Gb/s | 'ping.latency.milliseconds'=1.208ms;;;0; 'ping.jitter.milliseconds'=0.011;;;0; 'internet.bandwidth.download.bitspersecond'=4871581536b/s;;;0; 'internet.bandwidth.upload.bitspersecond'=1834082509b/s;;;0;\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."),(0,n.kt)("h3",{id:"modes-disponibles"},"Modes disponibles"),(0,n.kt)("p",null,"Dans la plupart des cas, un mode correspond \xe0 un mod\xe8le de service. Le mode est renseign\xe9 dans la commande d'ex\xe9cution\ndu connecteur. Dans l'interface de Centreon, il n'est pas n\xe9cessaire de les sp\xe9cifier explicitement, leur utilisation est\nimplicite d\xe8s lors que vous utilisez un mod\xe8le de service. En revanche, vous devrez sp\xe9cifier le mode correspondant \xe0 ce\nmod\xe8le si vous voulez tester la commande d'ex\xe9cution du connecteur dans votre terminal."),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \\\n    --plugin=apps::monitoring::speedtest::plugin \\\n    --list-mode\n")),(0,n.kt)("p",null,"Le plugin apporte les modes suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service associ\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"internet-bandwidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Speedtest-Internet-Bandwidth-custom")))),(0,n.kt)("h3",{id:"options-disponibles"},"Options disponibles"),(0,n.kt)("h4",{id:"options-des-modes"},"Options des modes"),(0,n.kt)("p",null,"Les options disponibles pour chaque mod\xe8le de services sont list\xe9es ci-dessous :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Internet-Bandwidth",label:"Internet-Bandwidth",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the mode in which you want the plugin to be executed (see--list-mode).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--dyn-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify a mode with the module's path (advanced).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--list-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List all available modes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode-version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check minimal version of mode. If not, unknown error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the version of the plugin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--custommode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--list-custommode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List all available custom modes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--multiple"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Multiple custom mode objects. This may be required by some specific modes (advanced).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--pass-manager"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--verbose"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display extended status information (long output).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--debug"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display debug messages.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata-adv"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv=\'not (%(value) == 0 and %(max) eq "")\' will remove all metrics whose value equals 0 and that don\'t have a maximum value.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--explode-perfdata-max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '","_","max' suffix). Eg: it will split 'used","_","prct'=26.93%;0:80;0:90;0;100 into 'used","_","prct'=26.93%;0:80;0:90;0;100 'used","_","prct","_","max'=100%;;;;")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-perfdata --extend-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target","[",",","[","newuom","]",",","[","min","]",",","[","m ax","]","]","  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic","_","in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic","_","in,,percent()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--extend-perfdata-group"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation","[",",","[","ne wuom","]",",","[","min","]",",","[","max","]","]"," regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets","_","wrong,sum(packets","_","(discard     ","|","error)","_","(in","|","out))'      Sum traffic by interface:     --extend-perfdata-group='traffic","_","in","_","(.*),traffic","_","$1,sum(traf     fic","_","(in","|","out)","_","$1)'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-short-output --change-long-output"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--range-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-uom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mask the units when they don't match the given regular expression.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--opt-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove all the metrics from the service. The service will still have a status and an output.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-label"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: \'OK: Ram Total:...\' will become \'Ram Total:...\'')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-xml"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the output in XML format (to send to an XML API).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-json"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the output in JSON format (to send to a JSON API).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-openmetrics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return the output in OpenMetrics format (to send to a tool expecting this format).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-file"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--float-precision"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the float precision for thresholds (default: 8).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--source-encoding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--hostname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hostname to query in ssh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timeout in seconds for the command (Default: 45). Default value can be override by the mode.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--command"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Command to get information. Used it you have output in a file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--command-path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Command path.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--command-options"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Command options.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sudo  sudo command"),(0,n.kt)("td",{parentName:"tr",align:"left"},".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-backend"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the backend you want to use. It can be: sshcli (default), plink and libssh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-username"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the user name to log in to the host.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-password"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the TCP port on which SSH is listening.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssh-priv-key"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the private key file to use for user authentication.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sshcli-command"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ssh command (default: 'ssh').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sshcli-path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ssh command path (default: none)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--sshcli-option"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--plink-command"),(0,n.kt)("td",{parentName:"tr",align:"left"},"plink command (default: 'plink').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--plink-path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"plink command path (default: none)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--plink-option"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify plink options (example: --plink-option='-T').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--libssh-strict-connect"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--warning-",(0,n.kt)("em",{parentName:"td"}," --critical-")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Thresholds. Can be: 'ping-jitter', 'ping-latency', 'bandwidth-download', 'bandwidth-upload'.")))))),(0,n.kt)("p",null,"Pour un mode, la liste de toutes les options disponibles et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \\\n    --plugin=apps::monitoring::speedtest::plugin \\\n    --mode=internet-bandwidth  \\\n    --help\n")))}f.isMDXComponent=!0}}]);