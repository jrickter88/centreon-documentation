"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[30867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"import-into-map-web",title:"Passer de MAP (Legacy) \xe0 MAP"},p=void 0,l={unversionedId:"graph-views/import-into-map-web",id:"version-23.10/graph-views/import-into-map-web",title:"Passer de MAP (Legacy) \xe0 MAP",description:"Cette page d\xe9crit comment passer de Centreon MAP (Legacy) \xe0 Centreon MAP en important vos anciennes cartes dans le module MAP.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/import-into-map-web.md",sourceDirName:"graph-views",slug:"/graph-views/import-into-map-web",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/graph-views/import-into-map-web",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/import-into-map-web.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"import-into-map-web",title:"Passer de MAP (Legacy) \xe0 MAP"},sidebar:"version-23.10/docs",previous:{title:"Mettre \xe0 jour MAP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/graph-views/map-web-update"},next:{title:"G\xe9rer les droits d'acc\xe8s dans MAP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/graph-views/map-web-access"}},c={},u=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Importer les cartes Legacy dans MAP",id:"importer-les-cartes-legacy-dans-map",level:2},{value:"\xc9tape 1 : installer MAP",id:"\xe9tape-1--installer-map",level:3},{value:"\xc9tape 2 : migrer les images",id:"\xe9tape-2--migrer-les-images",level:3},{value:"\xc9tape 3 : mettre \xe0 jour MAP (Legacy)",id:"\xe9tape-3--mettre-\xe0-jour-map-legacy",level:3},{value:"\xc9tape 4 : migrer les cartes",id:"\xe9tape-4--migrer-les-cartes",level:3}],m={toc:u},d="wrapper";function g(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(d,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cette page d\xe9crit comment passer de Centreon MAP (Legacy) \xe0 Centreon MAP en important vos anciennes cartes dans le module MAP."),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Centreon MAP doit \xeatre install\xe9 dans votre environnement. Consultez la proc\xe9dure ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/graph-views/map-web-install"},"Installer MAP")," si besoin.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Avant de d\xe9marrer la proc\xe9dure pour importer les anciennes cartes dans MAP, vous devez basculer de MAP (Legacy) \xe0 MAP en ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/graph-views/map-web-install#%C3%A9tape-3--activer-le-module-map"},"activant le module MAP"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si vous souhaitez installer MAP sur le m\xeame serveur que MAP (Legacy), assurez-vous que l'espace disque disponible est au moins \xe9gal \xe0 l'espace utilis\xe9. En effet, apr\xe8s la migration, la nouvelle base de donn\xe9es coexistera avec l'ancienne (du Legacy)."))),(0,n.kt)("h2",{id:"importer-les-cartes-legacy-dans-map"},"Importer les cartes Legacy dans MAP"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Lorsque vous importez vos anciennes cartes, tout le contenu cr\xe9\xe9 dans MAP est supprim\xe9.")),(0,n.kt)("h3",{id:"\xe9tape-1--installer-map"},"\xc9tape 1 : installer MAP"),(0,n.kt)("p",null,"Vous devez d'abord installer Centreon MAP. Allez \xe0 cette ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/graph-views/map-web-install"},"page")," pour proc\xe9der \xe0 l'installation et basculer sur le serveur MAP Engine."),(0,n.kt)("h3",{id:"\xe9tape-2--migrer-les-images"},"\xc9tape 2 : migrer les images"),(0,n.kt)("p",null,"Si vous avez import\xe9 des images dans le client lourd (dans des dossiers personnalis\xe9s en dehors du dossier Centreon), et que vous les avez utilis\xe9es dans vos cartes, vous devez d'abord les migrer vers votre serveur central."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dans le client lourd MAP (Legacy), dans le panneau ",(0,n.kt)("strong",{parentName:"p"},"Media"),", s\xe9lectionnez toutes les images que vous souhaitez migrer depuis vos dossiers personnalis\xe9s, faites un clic-droit et s\xe9lectionnez ",(0,n.kt)("strong",{parentName:"p"},"Exporter"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sauvegardez les images sur votre machine.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le serveur central, allez dans ",(0,n.kt)("strong",{parentName:"p"},"Administration > Param\xe8tres > Images"),", puis t\xe9l\xe9chargez toutes les images de votre ordinateur dans le r\xe9pertoire ",(0,n.kt)("strong",{parentName:"p"},"centreon-map"),". Veillez \xe0 ne pas changer le nom de vos images au cours de ce processus."))),(0,n.kt)("h3",{id:"\xe9tape-3--mettre-\xe0-jour-map-legacy"},"\xc9tape 3 : mettre \xe0 jour MAP (Legacy)"),(0,n.kt)("p",null,"Pour que les ic\xf4nes s'affichent correctement apr\xe8s avoir migr\xe9 vos cartes, vous devez mettre \xe0 jour votre MAP (legacy) en ex\xe9cutant les commandes suivantes :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop centreon-map\nyum update centreon-map-server\nsystemctl daemon-reload\nsystemctl start centreon-map\n")),(0,n.kt)("h3",{id:"\xe9tape-4--migrer-les-cartes"},"\xc9tape 4 : migrer les cartes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pour importer vos anciennes cartes dans MAP, allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Supervision > Map"),", puis cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"p"},"Migrer"),". La fen\xeatre suivante appara\xeet :"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:r(97487).Z,width:"594",height:"223"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Migrate"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:r(25104).Z,width:"498",height:"601"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Lorsque la migration a r\xe9ussi, vous pouvez fermer la fen\xeatre."))),(0,n.kt)("p",null,"Vos anciennes cartes sont maintenant affich\xe9es dans la page ",(0,n.kt)("strong",{parentName:"p"},"Map"),"."))}g.isMDXComponent=!0},97487:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/map-migrate-1-50f769e9d8eef2b79f87a6221d93a39a.png"},25104:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/map-migrate-2-6fe4a2f1e7e242da2a5854be92fec25c.png"}}]);