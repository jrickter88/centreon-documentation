"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[75082],{29777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"network-fortinet-fortigate-restapi",title:"Fortinet Fortigate Rest API"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi",id:"integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi",title:"Fortinet Fortigate Rest API",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fortinet-fortigate-restapi.md",tags:[],version:"current",frontMatter:{id:"network-fortinet-fortigate-restapi",title:"Fortinet Fortigate Rest API"},sidebar:"pp",previous:{title:"Fortinet Fortigate",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/network-firewalls-fortinet-fortigate-snmp"},next:{title:"Fortinet FortiMail SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortimail-snmp"}},c={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le Pack Centreon ",(0,a.kt)("strong",{parentName:"p"},"Fortinet Fortigate")," apporte un mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Net-Fortinet-Fortigate-Restapi-custom")),(0,a.kt)("p",null,"Il apporte les mod\xe8les de services suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de services"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Ha"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortigate-Ha-Restapi"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation syst\xe8me des members du cluster (processeur, m\xe9moire, sessions)"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Health"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortigate-Health-Restapi"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'\xe9tat de sant\xe9 du firewall"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Licenses"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortigate-Licenses-Restapi"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le statut des licences"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"System"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortigate-System-Restapi"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation syst\xe8me des VDOM (processeur, m\xe9moire, sessions)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Ha",label:"Ha",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"members.detected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"member_name"),"#member.cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"member_name"),"#member.memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"member_name"),"#member.sessions.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(i.Z,{value:"Health",label:"Health",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"health status"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(i.Z,{value:"Licenses",label:"Licenses",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"license status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"license_name"),"#license.expires.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(i.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"vdom_name"),"#cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"vdom_name"),"#memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"vdom_name"),"#sessions.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement Fortinet Fortigate, l'API Rest doit \xeatre configur\xe9e (cf: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fortinet.com/document/fortigate/7.2.1/administration-guide/399023/rest-api-administrator"},"https://docs.fortinet.com/document/fortigate/7.2.1/administration-guide/399023/rest-api-administrator"),")."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"Fortinet Fortigate")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortigate-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Pack ",(0,a.kt)("strong",{parentName:"li"},"Fortinet Fortigate Rest API")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"Fortinet Fortigate")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortigate-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installer le RPM du Pack ",(0,a.kt)("strong",{parentName:"li"},"Fortinet Fortigate Rest API")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-fortinet-fortigate-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Pack ",(0,a.kt)("strong",{parentName:"li"},"Fortinet Fortigate Rest API")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("strong",{parentName:"li"},"Nom"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," et ",(0,a.kt)("strong",{parentName:"li"},"IP Address / DNS")," correspondant \xe0 votre \xe9quipement ",(0,a.kt)("strong",{parentName:"li"},"Fortinet Fortigate"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"Net-Fortinet-Fortigate-Restapi-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIACCESSTOKEN"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \\\n    --plugin=network::fortinet::fortigate::restapi::plugin \\\n    --mode=system \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-token='mytoken' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All vdom systems are ok | 'ABS#cpu.utilization.percentage'=0.00%;;;0;100 'ABS#memory.usage.percentage'=0.00%;;;0;100 'ABS#sessions.active.count'=155;;;0; 'ADV#cpu.utilization.percentage'=0.00%;;;0;100 'ADV#memory.usage.percentage'=1.00%;;;0;100 'ADV#sessions.active.count'=553;;;0; 'BGN#cpu.utilization.percentage'=0.00%;;;0;100 'BGN#memory.usage.percentage'=0.00%;;;0;100 'BGN#sessions.active.count'=244;;;0; 'LHE#cpu.utilization.percentage'=0.00%;;;0;100 'LHE#memory.usage.percentage'=0.00%;;;0;100 'LHE#sessions.active.count'=100;;;0; 'MED#cpu.utilization.percentage'=3.00%;;;0;100 'MED#memory.usage.percentage'=11.00%;;;0;100 'MED#sessions.active.count'=6280;;;0; 'MIC#cpu.utilization.percentage'=0.00%;;;0;100 'MIC#memory.usage.percentage'=5.00%;;;0;100 'MIC#sessions.active.count'=3244;;;0; 'MLC#cpu.utilization.percentage'=0.00%;;;0;100 'MLC#memory.usage.percentage'=0.00%;;;0;100 'MLC#sessions.active.count'=431;;;0; 'PRN#cpu.utilization.percentage'=0.00%;;;0;100 'PRN#memory.usage.percentage'=0.00%;;;0;100 'PRN#sessions.active.count'=0;;;0; 'SSTRN#cpu.utilization.percentage'=5.00%;;;0;100 'SSTRN#memory.usage.percentage'=12.00%;;;0;100 'SSTRN#sessions.active.count'=6559;;;0; 'root#cpu.utilization.percentage'=2.00%;;;0;100 'root#memory.usage.percentage'=4.00%;;;0;100 'root#sessions.active.count'=228;;;0;\nchecking vdom 'ABS'\n    cpu load: 0.00 %\n    memory used: 0.00 %\n    active sessions: 155\nchecking vdom 'ADV'\n    cpu load: 0.00 %\n    memory used: 1.00 %\n    active sessions: 553\nchecking vdom 'BGN'\n    cpu load: 0.00 %\n    memory used: 0.00 %\n    active sessions: 244\nchecking vdom 'LHE'\n    cpu load: 0.00 %\n    memory used: 0.00 %\n    active sessions: 100\nchecking vdom 'MED'\n    cpu load: 3.00 %\n    memory used: 11.00 %\n    active sessions: 6280\nchecking vdom 'MIC'\n    cpu load: 0.00 %\n    memory used: 5.00 %\n    active sessions: 3244\nchecking vdom 'MLC'\n    cpu load: 0.00 %\n    memory used: 0.00 %\n    active sessions: 431\nchecking vdom 'PRN'\n    cpu load: 0.00 %\n    memory used: 0.00 %\n    active sessions: 0\nchecking vdom 'SSTRN'\n    cpu load: 5.00 %\n    memory used: 12.00 %\n    active sessions: 6559\nchecking vdom 'root'\n    cpu load: 2.00 %\n    memory used: 4.00 %\n    active sessions: 228\n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \\\n    --plugin=network::fortinet::fortigate::restapi::plugin \\\n    --mode=system \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \\\n    --plugin=network::fortinet::fortigate::restapi::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}f.isMDXComponent=!0}}]);