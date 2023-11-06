"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[83676],{45524:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"virtualization-hyperv-nscp-restapi",title:"Hyper-V NSCP Rest API"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",id:"integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",title:"Hyper-V NSCP Rest API",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi.md",tags:[],version:"current",frontMatter:{id:"virtualization-hyperv-nscp-restapi",title:"Hyper-V NSCP Rest API"},sidebar:"pp",previous:{title:"Hyper-V 2012 NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe"},next:{title:"Nutanix",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp"}},d={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"NSClient Configuration",id:"nsclient-configuration",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:c},g="wrapper";function N(t){var{components:e}=t,a=s(t,["components"]);return(0,n.kt)(g,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},k,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le Pack Centreon Hyper-V apporte 2 mod\xe8les d'h\xf4tes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Virt-Hyperv-Node-Nscp-Restapi-custom"),(0,n.kt)("li",{parentName:"ul"},"Virt-Hyperv-Scvmm-Nscp-Restapi-custom")),(0,n.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Integration-Service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Integration-Service-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Replication"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Replication-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Snapshot"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Snapshot-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Vm-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Vm-Status-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scvmm-Integration-Service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Scvmm-Integration-Service-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scvmm-Snapshot"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Scvmm-Snapshot-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scvmm-Vm-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Scvmm-Vm-Status-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Nscp-Restapi-HostDiscovery-Scvmm-Vm"),(0,n.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvrez vos machines virtuelles li\xe9es \xe0 un SCVMM")))))),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Node-Integration-Service",label:"Node-Integration-Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"global status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global status of virtual machines integration services"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"service status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Primary and secondary status of each virtual machines services"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Node-Replication",label:"Node-Replication",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Health replication status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Node-Snapshot",label:"Node-Snapshot",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm.snapshot.time.last.execution.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last snapshot execution time of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Node-Vm-Status",label:"Node-Vm-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Scvmm-Integration-Service",label:"Scvmm-Integration-Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Addition status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"osshutdown status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Operating system shutdown status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"timesync status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time synchronization status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dataexchange status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data exchange status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"heartbeat status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Heartbeat status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backup status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Scvmm-Snapshot",label:"Scvmm-Snapshot",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm.snapshot.time.last.execution.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last snapshot execution time of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Scvmm-Vm-Status",label:"Scvmm-Vm-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"nsclient-configuration"},"NSClient Configuration"),(0,n.kt)("p",null,"Pour superviser un ",(0,n.kt)("strong",{parentName:"p"},"Hyper-V")," via NRPE, installez la version packag\xe9e Centreon de l'agent NSClient++.\nSuivez notre ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"documentation officielle")),(0,n.kt)("p",null,"Veuillez t\xe9l\xe9charger et installer la derni\xe8re version en date de ",(0,n.kt)("strong",{parentName:"p"},"Centreon-NSClient-xxx.exe"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-nsclient-build/releases"},"https://github.com/centreon/centreon-nsclient-build/releases")),(0,n.kt)("p",null,"Par d\xe9faut, l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon")," avec le mot de passe ",(0,n.kt)("strong",{parentName:"p"},"centreon")," est utilis\xe9 pour se connecter \xe0 NSClient."),(0,n.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,n.kt)("p",null,"La communication doit \xeatre possible sur le port TCP 8443 depuis le collecteur\nCentreon vers l'\xe9quipement supervis\xe9."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Nrpe\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installez le Pack ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Nrpe\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installez le RPM du Pack ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-virtualization-hyperv-nscp-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installez le Pack ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," et ",(0,n.kt)("strong",{parentName:"li"},"IP Address / DNS")," correspondant \xe0 votre serveur ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez un des mod\xe8les d'h\xf4tes suivants :")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Virt-Hyperv-Node-Nscp-Restapi-custom",label:"Virt-Hyperv-Node-Nscp-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Protocol used (Default: https)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API legacy authentication password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --insecure)"))))),(0,n.kt)(l.Z,{value:"Virt-Hyperv-Scvmm-Nscp-Restapi-custom",label:"Virt-Hyperv-Scvmm-Nscp-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Protocol used (Default: https)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API legacy authentication password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --insecure)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM address (Default: localhost)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM port used (Default: 8001)")))))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester la bonne configuration NSClient directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_version\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"0.5.2.41 2018-04-26\n")),(0,n.kt)("p",null,"Vous pouvez maintenant tester le Plugin Hyper-V :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::microsoft::hyperv::2012::local::plugin' \\\n    --arg='node-vm-status' \\\n    --arg='--filter-vm=\"\" --verbose' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All virtual machines are ok \nVM 'vm1' status: Operating normally (state: Running, is clustered: 1)\nVM 'vm2' status: Operating normally (state: Running, is clustered: 0)\nVM 'vm3' status: Operating normally (state: Running, is clustered: 1)\n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::microsoft::hyperv::2012::local::plugin' \\\n    --arg='node-vm-status' \\\n    --arg='--help'\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::microsoft::hyperv::2012::local::plugin' \\\n    --arg='xxx' \\\n    --arg='--list-mode'\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des Plugins Centreon."))}N.isMDXComponent=!0}}]);