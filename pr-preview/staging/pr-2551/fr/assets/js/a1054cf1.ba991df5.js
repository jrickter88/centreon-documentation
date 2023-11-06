"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[77802],{15810:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/view_creation-40750b8dad6e40d6e628d82828222318.sql"},63711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905),a=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"install",title:"Installer l'extension Centreon BAM"},c=void 0,p={unversionedId:"service-mapping/install",id:"version-23.10/service-mapping/install",title:"Installer l'extension Centreon BAM",description:"Centreon BAM est une extension Centreon qui requiert une license",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/service-mapping/install.md",sourceDirName:"service-mapping",slug:"/service-mapping/install",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/service-mapping/install",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/service-mapping/install.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"install",title:"Installer l'extension Centreon BAM"},sidebar:"version-23.10/docs",previous:{title:"Widgets",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/service-mapping/widgets"},next:{title:"Mettre \xe0 jour l'extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/service-mapping/update"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Installation du paquet",id:"installation-du-paquet",level:3},{value:"Charger la licence",id:"charger-la-licence",level:3},{value:"Installation sur l&#39;interface",id:"installation-sur-linterface",level:3}],v={toc:m},g="wrapper";function f(e){var{components:t}=e,u=o(e,["components"]);return(0,r.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},v,u),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Centreon BAM est une ",(0,r.kt)("strong",{parentName:"p"},"extension")," Centreon qui requiert une license\nvalide. Pour plus d'information, contactez\n",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Voir les ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/installation/prerequisites#logiciels"},"pr\xe9requis logiciels"),"."),(0,r.kt)("p",null,"Installez BAM sur le serveur central.\nLe serveur central et Centreon BAM doivent \xeatre dans la m\xeame version majeure (c'est-\xe0-dire tous les deux en 23.04.x).\nSi vous voulez pouvoir voir les Activit\xe9s m\xe9tier supervis\xe9es par un serveur distant, installez BAM \xe9galement sur le serveur distant. Lorsque BAM est install\xe9 sur un serveur distant, les Activit\xe9s m\xe9tier n'incluent que les ressources supervis\xe9es par le serveur distant."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"installation-du-paquet"},"Installation du paquet"),(0,r.kt)("p",null,"Ajouter le d\xe9p\xf4t Centreon Business, vous pouvez le trouver sur le\n",(0,r.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts"},"portail support"),"."),(0,r.kt)("p",null,"Et installer le paquet en ex\xe9cutant la commande\xa0ci-dessous :"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-bam-server\n"))),(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-bam-server\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install centreon-bam-server\n")))),(0,r.kt)("h3",{id:"charger-la-licence"},"Charger la licence"),(0,r.kt)("p",null,'Le fichier de licence "bam.license" est fourni par Centreon, pour\nl\'installer, rendez vous dans ',(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire")," puis\nt\xe9l\xe9charger la via l'interface."),(0,r.kt)("h3",{id:"installation-sur-linterface"},"Installation sur l'interface"),(0,r.kt)("p",null,"Se rendre dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire")," et cliquez\nsur le bouton d'installation des modules suivantes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"License Manager (si celui-ci n'est pas d\xe9j\xe0 install\xe9)"),(0,r.kt)("li",{parentName:"ul"},"Business Activity Monitoring")),(0,r.kt)("p",null,"Une fois install\xe9 et la licence ajout\xe9e, le module aura un bandeau vert\nindiquant la date de fin de validit\xe9 de la licence :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(56981).Z,width:"613",height:"324"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez une r\xe9plication MariaDB pour vos bases de donn\xe9es de\n",(0,r.kt)("strong",{parentName:"p"},"monitoring"),", lors de l'installation de Centreon BAM, une vue est\ncr\xe9\xe9e. Il faut l'exclure de la r\xe9plication en rajoutant la ligne\nsuivante dans le fichier my.cnf du slave"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"replicate-ignore-table=centreon.mod_bam_view_kpi\n")),(0,r.kt)("p",{parentName:"blockquote"},"puis cr\xe9er les vues sur le slave ",(0,r.kt)("a",{target:"_blank",href:n(15810).Z},"avec le fichier suivant"),", en lan\xe7ant la commande:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"myqsl centreon < view_creation.sql\n"))))}f.isMDXComponent=!0},56981:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/install-web-step-2-2be4439b0f4191a8046df75a52b8a01a.png"}}]);