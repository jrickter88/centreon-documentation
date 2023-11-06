"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[99276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"deploying-a-configuration",title:"D\xe9ployer une configuration"},s=void 0,u={unversionedId:"monitoring/monitoring-servers/deploying-a-configuration",id:"version-23.10/monitoring/monitoring-servers/deploying-a-configuration",title:"D\xe9ployer une configuration",description:"Lorsque vous cr\xe9ez, supprimez ou modifiez des objets via le menu",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/deploying-a-configuration.md",sourceDirName:"monitoring/monitoring-servers",slug:"/monitoring/monitoring-servers/deploying-a-configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/deploying-a-configuration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/deploying-a-configuration.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"deploying-a-configuration",title:"D\xe9ployer une configuration"},sidebar:"version-23.10/docs",previous:{title:"Utiliser des connecteurs de supervision",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/pluginpacks"},next:{title:"Mettre un h\xf4te en supervision",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/basic-objects/hosts-create"}},c={},p=[{value:"Exporter la configuration",id:"exporter-la-configuration",level:2},{value:"Options d&#39;export",id:"options-dexport",level:2},{value:"Export instantan\xe9",id:"export-instantan\xe9",level:2},{value:"Dans quels cas utiliser la fonctionnalit\xe9?",id:"dans-quels-cas-utiliser-la-fonctionnalit\xe9",level:3},{value:"Activer la fonctionnalit\xe9",id:"activer-la-fonctionnalit\xe9",level:3},{value:"Exporter toutes les configurations",id:"exporter-toutes-les-configurations",level:3}],d={toc:p},m="wrapper";function f(e){var{components:t}=e,l=a(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Lorsque vous cr\xe9ez, supprimez ou modifiez des objets via le menu\n",(0,r.kt)("strong",{parentName:"p"},"Configuration"),", les changements effectu\xe9s ne sont pas appliqu\xe9s de mani\xe8re\nautomatique (ni sur le serveur central sur lequel vous avez cr\xe9\xe9, supprim\xe9 ou modifi\xe9 l'objet, ni sur aucun collecteur ou serveur distant qui en d\xe9pendrait). Pour que les modifications soient prises en compte, il est n\xe9cessaire d'exporter la configuration."),(0,r.kt)("p",null,"Tout changement de configuration doit se faire et s'exporter via l'interface utilisateur ou l'API du serveur central, quel que soit le collecteur concern\xe9 par le changement (serveur central, serveur distant, collecteur)."),(0,r.kt)("h2",{id:"exporter-la-configuration"},"Exporter la configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Collecteurs > Collecteurs"),". La page affiche l'\xe9tat de votre serveur central et de tous les collecteurs et serveurs distants qui y sont reli\xe9s : les changements sont signal\xe9s dans la colonne ",(0,r.kt)("strong",{parentName:"p"},"Changement de configuration"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez le serveur central, le serveur distant ou le collecteur dont la configuration a chang\xe9."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(73077).Z,width:"1327",height:"111"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Exporter la configuration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cochez les cases suivantes (voir la section ",(0,r.kt)("a",{parentName:"p",href:"#options-dexport"},(0,r.kt)("strong",{parentName:"a"},"Options d'export")),") :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"G\xe9n\xe9rer les fichiers de configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lancer le d\xe9bogage du moteur de supervision (-v)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"D\xe9placer les fichiers g\xe9n\xe9r\xe9s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Red\xe9marrer l'ordonnanceur"),". Utilisez la m\xe9thode : ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recharger")," : lorsque vous avez cr\xe9\xe9, supprim\xe9 ou modifi\xe9 des objets supervis\xe9s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Red\xe9marrer")," : lorsque vous avez apport\xe9 des changements \xe0 la communication entre un collecteur et le serveur central, ou \xe0 la configuration du moteur de collecte. Un red\xe9marrage prend plus de temps qu'un rechargement."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Exporter"),". Un log de l'export s'affiche."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(89956).Z,width:"990",height:"444"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dans le log, v\xe9rifiez que l'export a bien fonctionn\xe9 et qu'aucune erreur n'a \xe9t\xe9 remont\xe9e."))),(0,r.kt)("h2",{id:"options-dexport"},"Options d'export"),(0,r.kt)("p",null,"Les diff\xe9rentes options fonctionnent de la mani\xe8re suivante :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"G\xe9n\xe9rer les fichiers de configuration")," : G\xe9n\xe8re les fichiers de\nconfiguration du moteur de supervision dans un r\xe9pertoire temporaire. Cette\nconfiguration est g\xe9n\xe9r\xe9e \xe0 partir des objets configur\xe9s via l\u2019interface web."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lancer le d\xe9bogage du moteur de supervision (-v)")," : Effectue une v\xe9rification de l'int\xe9grit\xe9 des fichiers de configuration du moteur de supervision."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"D\xe9placer les fichiers g\xe9n\xe9r\xe9s")," : D\xe9place les fichiers g\xe9n\xe9r\xe9s d'un r\xe9pertoire temporaire vers le r\xe9pertoire de configuration du moteur de supervision"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Red\xe9marrer l'ordonnanceur")," : Red\xe9marre ou recharge le moteur de supervision afin d\u2019appliquer\nla nouvelle configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Commande ex\xe9cut\xe9e post-g\xe9n\xe9ration")," : Ex\xe9cute la commande post-g\xe9n\xe9ration\nparam\xe9tr\xe9e au niveau de la configuration du collecteur.")),(0,r.kt)("h2",{id:"export-instantan\xe9"},"Export instantan\xe9"),(0,r.kt)("p",null,"Les administrateurs et les utilisateur ",(0,r.kt)("a",{parentName:"p",href:"#activer-la-fonctionnalit%C3%A9"},"disposant des droits n\xe9cessaires")," peuvent activer un bouton qui leur permet d'exporter la configuration de TOUS les collecteurs d'un seul coup (c'est-\xe0-dire la configuration du serveur central, des serveurs distants et des collecteurs)."),(0,r.kt)("h3",{id:"dans-quels-cas-utiliser-la-fonctionnalit\xe9"},"Dans quels cas utiliser la fonctionnalit\xe9?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"N'utilisez PAS cette fonctionnalit\xe9 si vous avez un grand nombre de collecteurs. Cette fonctionnalit\xe9 n'est pas pertinente non plus si vous \xeates un MSP et que chaque collecteur correspond \xe0 un client diff\xe9rent.")),(0,r.kt)("h3",{id:"activer-la-fonctionnalit\xe9"},"Activer la fonctionnalit\xe9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pour les utilisateurs administrateurs, la fonctionnalit\xe9 est automatiquement activ\xe9e."),(0,r.kt)("li",{parentName:"ul"},"Pour rendre la fonctionnalit\xe9 accessible aux utilisateurs non administrateurs,donnez-leur le droit ",(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/administration/access-control-lists#actions-de-configuration-des-collecteurs--gestion-des-collecteurs"},(0,r.kt)("strong",{parentName:"a"},"D\xe9ployer la configuration")),", et le droit ",(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/administration/access-control-lists#acc%C3%A8s-aux-fonctionnalit%C3%A9s-globales"},(0,r.kt)("strong",{parentName:"a"},"Afficher les statistiques des collecteurs dans le bandeau")),".")),(0,r.kt)("h3",{id:"exporter-toutes-les-configurations"},"Exporter toutes les configurations"),(0,r.kt)("p",null,"Pour exporter rapidement la configuration de tous les collecteurs :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur le menu ",(0,r.kt)("strong",{parentName:"p"},"Collecteurs")," en haut \xe0 gauche de l'\xe9cran, puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Exporter la configuration"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(52667).Z,width:"601",height:"275"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dans la pop-up qui appara\xeet, confirmez l'export."))))}f.isMDXComponent=!0},52667:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/export_all_pollers_button-afd27d92e1a50154c3b01f37b41408fe.png"},73077:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/export_conf-b19ae6c0786ae8954833564e0302463c.png"},89956:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/export_conf_done-6b88e437975da2ff32814ed7522e0fe8.png"}}]);