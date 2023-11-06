"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[41081],{86380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"cloud-azure-database-mysql",title:"Azure Database for MySQL"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-database-mysql",id:"integrations/plugin-packs/procedures/cloud-azure-database-mysql",title:"Azure Database for MySQL",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-database-mysql.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-database-mysql",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-database-mysql.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-database-mysql",title:"Azure Database for MySQL"},sidebar:"pp",previous:{title:"Azure Database for MariaDB",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb"},next:{title:"Azure Discover",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover"}},d={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus",id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus",level:4},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,p=s(e,["components"]);return(0,n.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,p),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Azure Database pour MySQL vous permet de configurer facilement des instances\nMySQL de haute disponibilit\xe9, s\xe9curis\xe9es et extensibles."),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," s'appuie sur les API Azure Monitor afin de r\xe9cuperer les m\xe9triques relatives au service\nAPI Management. Il est possible d'utiliser les 2 modes propos\xe9s par Microsoft: RestAPI ou Azure CLI."),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Instances Azure ",(0,n.kt)("em",{parentName:"li"},"Azure Database for MySQL"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Connections"),(0,n.kt)("li",{parentName:"ul"},"CPU"),(0,n.kt)("li",{parentName:"ul"},"IO consumption"),(0,n.kt)("li",{parentName:"ul"},"Memory"),(0,n.kt)("li",{parentName:"ul"},"Queries"),(0,n.kt)("li",{parentName:"ul"},"Replication"),(0,n.kt)("li",{parentName:"ul"},"Storage"),(0,n.kt)("li",{parentName:"ul"},"Traffic")))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," inclut un ",(0,n.kt)("em",{parentName:"p"},"provider")," de d\xe9couverte d'H\xf4tes nomm\xe9 ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Database for MySQL"),".\nCelui-ci permet de d\xe9couvrir l'ensemble des instances ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," rattach\xe9s \xe0 une ",(0,n.kt)("em",{parentName:"p"},"souscription")," Microsoft Azure donn\xe9e:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(14029).Z,width:"610",height:"193"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas support\xe9 dans le cadre\nde cette utilisation. ")),(0,n.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of failed Connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.aborted.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of aborted Connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of total Connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(l.Z,{value:"IO-Consumption",label:"IO-Consumption",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.ioconsumption.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IO consumption"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(l.Z,{value:"Queries",label:"Queries",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.queries.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of queries"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Replication",label:"Replication",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.replication.lag.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replication Lag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.replication.lag.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replication Lag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.limit.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.backup.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.serverlog.limit.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Log storage limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.serverlog.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Log storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.serverlog.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Log storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(l.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.traffic.out.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Out"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.traffic.in.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Network In"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Database for MySQL:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Azure Database for MySQL")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Database for MySQL:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,n.kt)("em",{parentName:"li"},"Azure Database for MySQL"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-database-mysql.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Azure Database for MySQL")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,n.kt)("em",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1\net appliquez-lui le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"Cloud-Azure-Database-MySQL-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("em",{parentName:"li"},"Mandatory"),")\ndoivent \xeatre renseign\xe9es selon le ",(0,n.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Deux m\xe9thodes peuvent \xeatre utilis\xe9es lors de l'assignation des Macros:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Utilisation de l'ID complet de la ressource (de type ",(0,n.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.Network/<resource_type>/<resource_name>"),")\ndans la Macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE")),(0,n.kt)("li",{parentName:"ul"},"Utilisation du nom de la ressource dans la Macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE")," associ\xe9e aux Macros ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCEGROUP")," et ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCETYPE")))),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the API Management resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCETYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Type if resource name is used"))))),(0,n.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the API Management resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCETYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Type if resource name is used")))))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \\\n    --plugin=cloud::azure::database::mysql::plugin \\\n    --mode=cpu \\\n    --custommode=api \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='SQL001ABCD' \\\n    --resource-group='RSG1234' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --aggregation='Average' \\\n    --warning-cpu-usage='80' \\\n    --critical-cpu-usage='90' \\\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'SQL001ABCD' Statistic 'average' Metrics CPU percent: 0.44 | 'SQL001ABCD~average#azmysql.cpu.utilization.percentage'=0.44;0:80;0:90;0;100\n")),(0,n.kt)("p",null,"La commande ci-dessus v\xe9rifie les statistiques l'utilisation du ",(0,n.kt)("em",{parentName:"p"},"processeur")," de l'instance ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," nomm\xe9e ",(0,n.kt)("em",{parentName:"p"},"SQL001ABCD"),"\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::database::mysql::plugin --mode=cpu --resource='SQL001ABCD'"),") et li\xe9e au ",(0,n.kt)("em",{parentName:"p"},"Resource Group")," ",(0,n.kt)("em",{parentName:"p"},"RSG1234"),"\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--resource-group='RSG1234'"),")."),(0,n.kt)("p",null,"Le mode de connexion utilis\xe9 est 'api' (",(0,n.kt)("inlineCode",{parentName:"p"},"--custommode=api"),"), les param\xe8tres d'authentification n\xe9cessaires \xe0 l'utilisation de ce mode\nsont donc renseign\xe9s en fonction (",(0,n.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,n.kt)("p",null,"Les statuts cacul\xe9s se baseront sur les valeurs totales d'un \xe9chantillon dans un intervalle de 15 minutes / 900 secondes  (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\navec un \xe9tat retourn\xe9 par tranche de 5 minutes (",(0,n.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,n.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si le pourcentage d'utilisation du processeur pendant l'intervalle donn\xe9\nest sup\xe9rieur \xe0 80 (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-cpu-usage='80'"),"); l'alarme sera de type CRITICAL au-del\xe0 de 90%.\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-cpu-usage='90'"),")."),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \\\n    --plugin=cloud::azure::database::mysql::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("h4",{id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus"},"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus"),(0,n.kt)("p",null,"Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas\nse r\xe9-authentifier \xe0 chaque appel. Si des informations sur le Tenant, la Souscription ou les\nClient ID / Secret changent, il est n\xe9cessaire de supprimer le fichier de cache du Plugin. "),(0,n.kt)("p",null,"Celui ci se trouve dans le r\xe9pertoire ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," avec le nom azure",(0,n.kt)("em",{parentName:"p"},"api"),(0,n.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,n.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,n.kt)("p",null,"Cela signifie que l'un des param\xe8tres utilis\xe9s pour authentifier la requ\xeate est incorrect. Le param\xe8tre\nen question est sp\xe9cifi\xe9 dans le message d'erreur en lieu et place de 'ERROR_DESC'. "),(0,n.kt)("p",null,"Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret\nn'est (ne sont) pas valide(s)."),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,n.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le\ncollecteur Centreon, il est n\xe9cessaire de le pr\xe9ciser dans la commande en\nutilisant l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."),(0,n.kt)("p",null,"Il est \xe9galement possible qu'un \xe9quipement tiers de type Pare-feu bloque la requ\xeate\neffectu\xe9e par le Plugin."),(0,n.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,n.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,n.kt)("p",null,"Cela signifie qu'Azure n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,n.kt)("p",null,"Vous pouvez ajouter ",(0,n.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro EXTRAOPTIONS du ",(0,n.kt)("strong",{parentName:"p"},"service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."))}N.isMDXComponent=!0},14029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-azure-database-mysql-provider-6aa8324a01747b5d00575f2583c27bf1.png"}}]);