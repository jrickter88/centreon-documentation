"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94448],{95114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(51715),i=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-webservers-iis-restapi",title:"Microsoft IIS Server Restapi"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-webservers-iis-restapi",id:"integrations/plugin-packs/procedures/applications-webservers-iis-restapi",title:"Microsoft IIS Server Restapi",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-webservers-iis-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-webservers-iis-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-webservers-iis-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-webservers-iis-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-webservers-iis-restapi",title:"Microsoft IIS Server Restapi"},sidebar:"pp",previous:{title:"Microsoft IIS Server NSClient API (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-webservers-iis-nsclient-05-restapi"},next:{title:"Microsoft IIS WSMAN",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-iis-wsman"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Elements supervis\xe9s",id:"elements-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration IIS",id:"configuration-iis",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: Cannot load module &#39;Net::Curl::Easy&#39;</code>",id:"unknown-cannot-load-module-netcurleasy",level:4},{value:"<code>UNKNOWN: curl perform error : Couldn&#39;t connect to server</code>",id:"unknown-curl-perform-error--couldnt-connect-to-server",level:4}],k={toc:m},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Internet Information Services (IIS, anciennement Internet Information Server) est un serveur Web extensible cr\xe9\xe9 par Microsoft pour une utilisation sous Windows Server. IIS prend en charge HTTP, HTTP/2, HTTPS, FTP, FTPS, SMTP et NNTP."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"elements-supervis\xe9s"},"Elements supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ApplicationPools"),(0,r.kt)("li",{parentName:"ul"},"Websites")),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"App-IIS-Restapi-ApplicationPools-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover application pools hosted by your IIS server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"App-IIS-Restapi-Websites-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover websites hosted by your IIS server")))),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ApplicationPools",label:"ApplicationPools",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the application pool.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"applicationpool.requests.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of requests per second by application pools. Unit: requests/second"))))),(0,r.kt)(i.Z,{value:"Websites",label:"Websites",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"website.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the website. Unit: bits/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"website.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the website. Unit: bits/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"website.connections.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of current connections by website. Unit: count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"website.connections.total.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of total connections per second by website. Unit: requests/second")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"configuration-iis"},"Configuration IIS"),(0,r.kt)("p",null,"Pour utiliser ce connecteur de supervision, vous devez activer l'API Microsoft IIS Administration. Microsoft fournit une documentation officielle pour la mise en place : ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/iis-administration/"},"https://docs.microsoft.com/en-us/iis-administration/")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources IIS :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Webservers-Iis-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Dans l'interface Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Microsoft IIS Server Restapi")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources IIS :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Webservers-Iis-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-webservers-iis-restapi.noarch\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Dans l'interface Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Microsoft IIS Server Restapi")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Depuis l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,r.kt)("li",{parentName:"ul"},'Appliquez le mod\xe8le "App-Webserver-IIS-Restapi-custom" et configurez toutes les macros :')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IISAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 55539")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IISAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IISAPIUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Username to access to the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IISAPIPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Password to access to the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IISTOKENAPI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Token to access to the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"IISAPIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("p",null,"Par d\xe9faut ",(0,r.kt)("inlineCode",{parentName:"p"},"IISAPIEXTRAOPTIONS")," contient les options : ",(0,r.kt)("inlineCode",{parentName:"p"},'--http-backend=curl --curl-opt="CURLOPT_SSL_VERIFYPEER => 0"')," pour utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," et pour ne pas v\xe9rifier le certificat SSL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Il est recommand\xe9 d'utiliser le module de d\xe9couverte automatique des \xe9l\xe9ments pour d\xe9ployer la supervision des\n",(0,r.kt)("em",{parentName:"strong"},"application pools/websites"),". Pour ce faire, allez dans\n",(0,r.kt)("em",{parentName:"strong"},"Configuration > Services > D\xe9couverte Automatis\xe9e > Manuelle")," puis lancez une d\xe9couverte")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_iis_restapi.pl \\ \n    --plugin apps::iis::restapi::plugin \\\n    --mode websites \\\n    --hostname='www.int.centreon.com' \\\n    --port='55539' \\\n    --proto='https' \\\n    --api-username='John.Doe' \\\n    --api-password='6fbadZEJbsLG' \\\n    --api-token='ZHppZCWPzREgSb9SDYOegsY0_D4KJKgZ5q8QavEWBPmmi8fgt2-8Cw' \\\n    --http-backend='curl' \\\n    --curl-opt=\"CURLOPT_SSL_VERIFYPEER => 0\" \\\n    --filter-name='^www$' \\\n    --critical-status='%{status} !~ /starting|started/' \\\n    --verbose\n")),(0,r.kt)("p",null,"Cette commande supervise le statut et l'utilisation du site ",(0,r.kt)("em",{parentName:"p"},"www")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-name=^www$"),") h\xe9berg\xe9 sur le serveur IIS ",(0,r.kt)("inlineCode",{parentName:"p"},"www.int.centreon.com")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='www.int.centreon.com'"),")."),(0,r.kt)("p",null,"Un utilisateur (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-username='John.doe'"),"), un mot de passe (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-password='6fbadZEJbsLG'"),") et un token API (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-token='ZHppZCWPzREgSb9SDYOegsY0_D4KJKgZ5q8QavEWBPmmi8fgt2-8Cw'"),") g\xe9n\xe9r\xe9s depuis l'API ",(0,r.kt)("em",{parentName:"p"},"IIS Administration API")," sont utilis\xe9s pour se connecter."),(0,r.kt)("p",null,"Le backend ",(0,r.kt)("em",{parentName:"p"},"curl")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),") est utilis\xe9 par la commande et le certificat SSL du serveur cible n'est pas v\xe9rifi\xe9 (",(0,r.kt)("inlineCode",{parentName:"p"},'--curl-opt="CURLOPT_SSL_VERIFYPEER => 0"'),")."),(0,r.kt)("p",null,"Cette command d\xe9clenchera une alerte CRITIQUE si :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"le status du website est diff\xe9rent de ",(0,r.kt)("em",{parentName:"li"},"starting")," ou ",(0,r.kt)("em",{parentName:"li"},"started"),".")),(0,r.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Website 'www' traffic in: 5.41 Kb/s, traffic out: 59.74 Kb/s, current connections: 0, total connections: 8.05/s | 'www#website.traffic.in.bitspersecond'=5407.86206896552b/s;;;0; 'www#website.traffic.out.bitspersecond'=59744b/s;;;0; 'www#website.connections.current.count'=0;;;0; 'www#website.connections.total.persecond'=8.05/s;;;0;\nWebsite 'www' traffic in: 5.41 Kb/s, traffic out: 59.74 Kb/s, current connections: 0, total connections: 8.05/s\n")),(0,r.kt)("p",null,"Des seuils peuvent \xeatre positionn\xe9s \xe0 l'aide des options --warning-",(0,r.kt)("em",{parentName:"p"}," et --critical-")," sur les m\xe9triques."),(0,r.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option --help \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_iis_restapi.pl \\ \n    --plugin apps::iis::restapi::plugin \\\n    --mode websites \\\n        --help\n")),(0,r.kt)("p",null,"Vous pouvez afficher tous les modes disponibles \xe0 l'aide de la commande suivante :`"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_iis_restapi.pl \\\n    --plugin=apps::iis::restapi::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,r.kt)("h4",{id:"unknown-cannot-load-module-netcurleasy"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Cannot load module 'Net::Curl::Easy'")),(0,r.kt)("p",null,"Ce message d'erreur indique qu'une librairie Perl est manquante pour utiliser le backend ",(0,r.kt)("em",{parentName:"p"},"curl"),"."),(0,r.kt)("p",null,"Pour corriger ce probl\xe8me, installer la librairie Perl Net::Curl::Easy \xe0 l'aide de la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Net-Curl\n")),(0,r.kt)("h4",{id:"unknown-curl-perform-error--couldnt-connect-to-server"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: curl perform error : Couldn't connect to server")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: curl perform error : Couldn't connect to server |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API du serveur IIS.\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'API du serveur IIS en utilisant\nl'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."))}f.isMDXComponent=!0}}]);