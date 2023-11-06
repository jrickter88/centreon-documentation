"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[89855],{94646:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>m});t(67294);var r=t(3905),a=t(51715),s=t(7626);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const u={id:"grafana",title:"Plugin Centreon pour Grafana"},p=void 0,d={unversionedId:"metrology/grafana",id:"version-23.10/metrology/grafana",title:"Plugin Centreon pour Grafana",description:"Le plugin Centreon pour Grafana permet de visualiser dans Grafana des donn\xe9es issues de Centreon. Si vous utilisez Grafana pour r\xe9cup\xe9rer des donn\xe9es d'autres platformes de supervision, vous pourrez ainsi mettre en parall\xe8le les donn\xe9es issues de Centreon avec celles-ci.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/metrology/grafana.md",sourceDirName:"metrology",slug:"/metrology/grafana",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/metrology/grafana",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/metrology/grafana.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"grafana",title:"Plugin Centreon pour Grafana"},sidebar:"version-23.10/docs",previous:{title:"M\xe9triques virtuelles",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/metrology/chart-virtual-metrics"},next:{title:"Introduction \xe0 Centreon BAM",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/service-mapping/introduction"}},c={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Donn\xe9es disponibles",id:"donn\xe9es-disponibles",level:2},{value:"O\xf9 obtenir le plugin?",id:"o\xf9-obtenir-le-plugin",level:2},{value:"Comment mettre en place le plugin?",id:"comment-mettre-en-place-le-plugin",level:2},{value:"Comparer des donn\xe9es dans un graphique",id:"comparer-des-donn\xe9es-dans-un-graphique",level:2},{value:"Filtrer avec des variables",id:"filtrer-avec-des-variables",level:2}],f={toc:m},g="wrapper";function v(e){var{components:n}=e,u=l(e,["components"]);return(0,r.kt)(g,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,u),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Le plugin Centreon pour Grafana permet de visualiser dans Grafana des donn\xe9es issues de Centreon. Si vous utilisez Grafana pour r\xe9cup\xe9rer des donn\xe9es d'autres platformes de supervision, vous pourrez ainsi mettre en parall\xe8le les donn\xe9es issues de Centreon avec celles-ci."),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Pour pouvoir utiliser le plugin Centreon pour Grafana, vous devez avoir une licence ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/reporting/introduction"},"MBI")," valide et le module doit \xeatre install\xe9."),(0,r.kt)("h2",{id:"donn\xe9es-disponibles"},"Donn\xe9es disponibles"),(0,r.kt)("p",null,"Une data source Centreon vous permet de visualiser des donn\xe9es de performance issues de Centreon dans vos tableaux de bord Grafana.\nPour s\xe9lectionner les donn\xe9es de performance \xe0 afficher, vous pouvez combiner des filtres sur divers types de ressources disponibles sur votre plateforme Centreon. Vous pouvez afficher des m\xe9triques, des m\xe9triques virtuelles et des m\xe9taservices en construisant des filtres sur les types de ressources suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hosts"),(0,r.kt)("li",{parentName:"ul"},"Host groups"),(0,r.kt)("li",{parentName:"ul"},"Service Groups"),(0,r.kt)("li",{parentName:"ul"},"Services"),(0,r.kt)("li",{parentName:"ul"},"Business Activities (si BAM est install\xe9 et que vous avez une licence valide)"),(0,r.kt)("li",{parentName:"ul"},"Anomaly Detection (si le module est install\xe9 et que vous avez une licence valide)")),(0,r.kt)("p",null,"Les donn\xe9es de performance sont disponibles, mais pas des donn\xe9es telles que les statuts des services ou des h\xf4tes, les acquittements ou les downtimes."),(0,r.kt)("h2",{id:"o\xf9-obtenir-le-plugin"},"O\xf9 obtenir le plugin?"),(0,r.kt)("p",null,"Le plugin Centreon pour Grafana est disponible sur ",(0,r.kt)("a",{parentName:"p",href:"https://download.centreon.com/"},"la page de t\xe9l\xe9chargement de Centreon"),"."),(0,r.kt)("h2",{id:"comment-mettre-en-place-le-plugin"},"Comment mettre en place le plugin?"),(0,r.kt)("p",null,"Vous pouvez utiliser la data source Centreon pour Grafana en tant que plugin non sign\xe9 avec votre propre installation Grafana. (Ce n'est pas possible avec une instance Cloud.)"),(0,r.kt)("p",null,"Pour utiliser la data source Centreon en tant que plugin non sign\xe9 :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assurez-vous que vous disposez des droits d'administration sur la machine sur laquelle Grafana s'ex\xe9cute.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"T\xe9l\xe9chargez le fichier zipp\xe9 contenant la data source depuis la ",(0,r.kt)("a",{parentName:"p",href:"https://download.centreon.com/"},"page de t\xe9l\xe9chargement de Centreon"),". La data source se situe dans la sous-section ",(0,r.kt)("strong",{parentName:"p"},"Grafana")," de la section ",(0,r.kt)("strong",{parentName:"p"},"Custom platform"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Si vous n'avez pas de fichier init personnalis\xe9, faites une copie du fichier ",(0,r.kt)("strong",{parentName:"p"},"grafana/conf/default.ini")," et renommez-le ",(0,r.kt)("strong",{parentName:"p"},"custom.ini"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extrayez la data source et placez-la dans le r\xe9pertoire ",(0,r.kt)("strong",{parentName:"p"},"plugins")," de votre installation Grafana. (L'emplacement de ce r\xe9pertoire est d\xe9fini dans la variable ",(0,r.kt)("strong",{parentName:"p"},"plugins")," de votre fichier ",(0,r.kt)("strong",{parentName:"p"},"grafana/conf/custom.ini"),".)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc9ditez le fichier ",(0,r.kt)("strong",{parentName:"p"},"custom.ini")," et ajoutez la data source Centreon \xe0 la liste des plugins non sign\xe9s autoris\xe9s :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"allow_loading_unsigned_plugins = centreon2-centreon-datasource\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Red\xe9marrez le service Grafana."))),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart grafana-server\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"Dans l'onglet ",(0,r.kt)("strong",{parentName:"p"},"Services")," du gestionnaire des t\xe2ches, faites un clic droit sur le service Grafana puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Red\xe9marrer"),"."))),(0,r.kt)("p",null,"La data source Centreon appara\xeet maintenant dans la liste des plugins disponibles, \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Plugins")," de l'interface Grafana."),(0,r.kt)("h2",{id:"comparer-des-donn\xe9es-dans-un-graphique"},"Comparer des donn\xe9es dans un graphique"),(0,r.kt)("p",null,"Utiliser le plugin Centreon pour Grafana permet d'avoir acc\xe8s \xe0 toutes vos donn\xe9es de performance dans Grafana et de pouvoir filtrer selon des groupements de donn\xe9es sp\xe9cifiques. Par exemple, dans un m\xeame graphique, vous pouvez comparer l'\xe9volution d'une m\xe9trique commune \xe0 diff\xe9rents h\xf4tes ou aux divers h\xf4tes d'un groupe d'h\xf4tes donn\xe9."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(86215).Z,width:"780",height:"333"})),(0,r.kt)("p",null,"Vous pouvez utiliser le caract\xe8re joker ",(0,r.kt)("strong",{parentName:"p"},"*")," pour filtrer sur plusieurs h\xf4tes en m\xeame temps. Utiliser des ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables")," au sein des filtres permet de cr\xe9er des contextes dynamiques."),(0,r.kt)("h2",{id:"filtrer-avec-des-variables"},"Filtrer avec des variables"),(0,r.kt)("p",null,"Un m\xeame tableau de bord Grafana peut contenir divers panneaux. Chaque panneau peut afficher des donn\xe9es provenant d'une source sp\xe9cifique. Ainsi, vous pouvez comparer des donn\xe9es concernant le m\xeame h\xf4te, mais provenant de diff\xe9rentes sources, par exemple, si vous supervisez des donn\xe9es diff\xe9rentes sur un m\xeame \xe9quipement avec divers outils."),(0,r.kt)("p",null,"Utilisez des ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables")," pour s\xe9lectionner une liste de ressources correspondant \xe0 des filtres (par exemple tous les h\xf4tes qui correspondent au groupe d'h\xf4tes ",(0,r.kt)("strong",{parentName:"p"},"Linux"),"). Dans le tableau de bord, des filtres vous proposeront automatiquement les variables correspondantes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(17058).Z,width:"794",height:"349"})),(0,r.kt)("p",null,"Vous pouvez personnaliser l'affichage des libell\xe9s des courbes : dans la section ",(0,r.kt)("strong",{parentName:"p"},"Time Series > Standard options"),", utilisez ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/configure-standard-options/#display-name"},"le champ ",(0,r.kt)("strong",{parentName:"a"},"Display name")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Par exemple, si vous entrez ",(0,r.kt)("strong",{parentName:"li"},"${__field.labels}"),", le libell\xe9 inclura toutes les options de personnalisation possibles (host, service, metric_name)."),(0,r.kt)("li",{parentName:"ul"},"Si vous entrez ",(0,r.kt)("strong",{parentName:"li"},"${",(0,r.kt)("strong",{parentName:"strong"},"field.labels.host}: ${"),"field.labels.metric_name}"),", le libell\xe9 d'une courbe sera affich\xe9 de cette mani\xe8re : ",(0,r.kt)("strong",{parentName:"li"},"10.11.12.13: total_cpu_avg"),".")))}v.isMDXComponent=!0},86215:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/grafana_compare-c7655cf9f996e7107ac660bc39a5692f.png"},17058:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/grafana_variables-a2a8a1f20f7011790c3a07c9c9213f7e.png"}}]);