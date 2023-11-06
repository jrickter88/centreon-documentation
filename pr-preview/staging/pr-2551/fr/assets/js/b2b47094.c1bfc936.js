"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[31137],{85502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(51715),i=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-docker-restapi",title:"Docker"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-docker-restapi",id:"integrations/plugin-packs/procedures/applications-docker-restapi",title:"Docker",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-docker-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-docker-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-docker-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-docker-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-docker-restapi",title:"Docker"},sidebar:"pp",previous:{title:"Cloud Foundry",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-cloudfoundry-api"},next:{title:"Google CloudSQL MySQL",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Connexion \xe0 l&#39;Api Rest de Docker",id:"connexion-\xe0-lapi-rest-de-docker",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Je supervise mes nodes et containers Docker, les temps de contr\xf4le sont anormalement longs, est-ce normal ?",id:"je-supervise-mes-nodes-et-containers-docker-les-temps-de-contr\xf4le-sont-anormalement-longs-est-ce-normal-",level:4},{value:"Comment tester un contr\xf4le en ligne de commande et que signifient les options principales ?",id:"comment-tester-un-contr\xf4le-en-ligne-de-commande-et-que-signifient-les-options-principales-",level:4}],k={toc:m},g="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Docker permet d'embarquer une application dans un ou plusieurs containers logiciels qui pourront s'ex\xe9cuter sur n'importe quel syst\xe8me d'exploitation h\xf4te. Docker fonctionne sous Linux comme Windows Server. C'est une technologie qui a pour but de faciliter les d\xe9ploiements d'application et la gestion du dimensionnement de l'infrastructure sous-jacente."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nodes"),(0,r.kt)("li",{parentName:"ul"},"Containers")),(0,r.kt)("h2",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)("p",null,"Plus d'informations sur les m\xe9triques remont\xe9es sont disponibles sur la documentation officielle de l'Api Rest Docker: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/api/v1.30/"},"https://docs.docker.com/engine/api/v1.30/")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Container-Usage",label:"Container-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the container. Units: text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"State_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Real state of Container. Units: text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"read_io"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of bytes read from disk per second. Units: Bytes/Second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Write_io"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of bytes write from disk per second. Units: Bytes/Second Units: Bytes/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cpu_total_usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of CPU utilization. Units: Percent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cpu_system_usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average amount of time taken per disk I/O write operation. Units: Seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory_usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of Memory utilization. Units: Percent & Bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Traffic_in"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of Inbound Traffic utilization. Units: Percent & Bytes/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Traffic_out"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of Outbound Traffic utilization. Units: Percent & Bytes/s"))))),(0,r.kt)(i.Z,{value:"Nodes-Status",label:"Nodes-Status",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of node. Units: text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Containers-running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of Containers system running. Units: counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Containers-stopped"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of Containers system stopped. Units: counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Containers_paused"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Number of Containers system paused. Units: counter")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le Plugin n\xe9cessite une version de l'API Docker >= 1.21 (",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/api/v1.30/"},"https://docs.docker.com/engine/api/v1.30/"),").")),(0,r.kt)("h3",{id:"connexion-\xe0-lapi-rest-de-docker"},"Connexion \xe0 l'Api Rest de Docker"),(0,r.kt)("p",null,"Ouvrez votre terminal ssh pr\xe9f\xe9r\xe9 : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vi /lib/systemd/system/docker.service"),(0,r.kt)("li",{parentName:"ul"},"Trouver la ligne qui commence par Execstart et modifier les options suivantes : ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H=tcp://0.0.0.0:2375\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enregistrer les modifications"),(0,r.kt)("li",{parentName:"ul"},"Recharger les services du syst\xe8me : ",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl daemon-reload")),(0,r.kt)("li",{parentName:"ul"},"Red\xe9marrer Docker : ",(0,r.kt)("inlineCode",{parentName:"li"},"system docker restart"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Docker:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Docker-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Installer le connecteur de supervision "Docker" depuis la page ',(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," de l'interface Web de Centreon"))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs supervisant des ressources Docker:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Docker-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision contenant les mod\xe8les de supervision:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-docker-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'Installer le connecteur de supervision "Docker" depuis la page ',(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," de l'interface Web de Centreon")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Choisissez le mod\xe8le d'h\xf4te correspondant aux nodes ou containers \"App-Docker-Restapi-custom\". Une fois le mod\xe8le d'h\xf4te appliqu\xe9, il est possible de d\xe9finir l'ensemble des macros n\xe9cessaires au fonctionnement des contr\xf4les:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DOCKERENGINEPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Engine port application for monitoring containers api usages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"DOCKERENGINEEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra options for monitoring containers api usages")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h4",{id:"je-supervise-mes-nodes-et-containers-docker-les-temps-de-contr\xf4le-sont-anormalement-longs-est-ce-normal-"},"Je supervise mes nodes et containers Docker, les temps de contr\xf4le sont anormalement longs, est-ce normal ?"),(0,r.kt)("p",null,"L\u2019api webservice 'container stats' est relativement lente (entre 1s et 2s), les temps de r\xe9ponse peuvent donc \xeatre un peu longs."),(0,r.kt)("h4",{id:"comment-tester-un-contr\xf4le-en-ligne-de-commande-et-que-signifient-les-options-principales-"},"Comment tester un contr\xf4le en ligne de commande et que signifient les options principales ?"),(0,r.kt)("p",null,"A partir du moment ou la sonde est install\xe9e, vous pouvez tester directement depuis votre collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_docker_restapi.pl \\\n--plugin=cloud::docker::restapi::plugin \\\n--mode=node-status \\\n--hostname='192.168.0.50' \\\n--port='2375'   \\\n--warning-node-status='' \\\n--critical-node-status='%{status} !~ /ready/ || %{manager_status} !~ /reachable|-/' \\\n--verbose\n\nOK: Node '192.168.0.50' Containers Running : 7, Containers Stopped : 2, Containers Paused : 0 | 'containers_running'=7;;;0; 'containers_stopped'=2;;;0; 'containers_paused'=0;;;0;\nNode '192.168.0.50' Containers Running : 7, Containers Stopped : 2, Containers Paused : 0\n")),(0,r.kt)("p",null,"La commande ci-dessus requ\xeate un noeud Docker (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=node-status"),") sur le port 2375 (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='2375'"),') et fournit son \xe9tat (\'ready\' ou pas) ainsi que l\'\xe9tat de ses containers en \xe9tat "running","stopped" et "paused".'),(0,r.kt)("p",null,"Une alerte CRITICAL sera d\xe9clench\xe9e si l'\xe9tat du noeud n'est pas 'ready' ou que le statut du manager renvoie un autre \xe9tat que 'reachable' (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-node-status='%{status} !~ /ready/ || %{manager_status} !~ /reachable|-/'"),")"))}f.isMDXComponent=!0}}]);