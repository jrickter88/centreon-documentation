"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[70125],{84070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>d,toc:()=>m});r(67294);var n=r(3905),a=r(51715),l=r(7626);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={id:"cloud-azure-network-virtualnetwork",title:"Azure Virtual Network"},p=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork",id:"integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork",title:"Azure Virtual Network",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-network-virtualnetwork",title:"Azure Virtual Network"},sidebar:"pp",previous:{title:"Azure Virtual Machine Scale Sets",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-vmscalesets"},next:{title:"Azure VPN Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway"}},c={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:m},g="wrapper";function N(e){var{components:t}=e,u=s(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},k,u),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Azure Virtual Network")," apporte un mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud-Azure-Network-VirtualNetwork-custom")),(0,n.kt)("p",null,"Il apporte le mod\xe8le de service suivant :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Peerings-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Network-VirtualNetwork-Peerings-Status-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'\xe9tat des pairs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Azure Virtual Network")," inclut un fournisseur de d\xe9couverte\nd'h\xf4tes nomm\xe9 ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Virtual Networks"),". Celui-ci permet de d\xe9couvrir l'ensemble des instances\nrattach\xe9es \xe0 une souscription Microsoft Azure donn\xe9e:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(70272).Z,width:"406",height:"126"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,n.kt)("strong",{parentName:"p"},"Azure Virtual Network")," n'est compatible qu'avec le mode ",(0,n.kt)("strong",{parentName:"p"},"api"),". Le mode ",(0,n.kt)("strong",{parentName:"p"},"azcli")," n'est pas support\xe9 dans le cadre\nde cette utilisation.")),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"documentation d\xe9di\xe9e"),"\npour en savoir plus sur la d\xe9couverte automatique d'h\xf4tes."),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Peerings-Status",label:"Peerings-Status",mdxType:"TabItem"},(0,n.kt)("p",null,"@TODO_MIGRATION_V2@"))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Network")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-VirtualNetwork-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Network")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Network")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-VirtualNetwork-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Network")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-network-virtualnetwork\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Network")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Remplissez le champ ",(0,n.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse ",(0,n.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Azure-Network-VirtualNetwork-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent \xeatre renseign\xe9es selon le ",(0,n.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Deux m\xe9thodes peuvent \xeatre utilis\xe9es lors de l'assignation des macros :")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Utilisation de l'ID complet de la ressource (de type ",(0,n.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>"),") dans la macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE"),"."),(0,n.kt)("li",{parentName:"ul"},"Utilisation du nom de la ressource dans la macro ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCE")," et du nom du groupe de ressources dans la macro ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCEGROUP"),"."))),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZUREAPICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,n.kt)("strong",{parentName:"td"},"api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure Virtual Network resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID"))))),(0,n.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,n.kt)("strong",{parentName:"td"},"azcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure Virtual Network resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")))))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_network_virtualnetwork_api.pl \\\n    --plugin=cloud::azure::network::virtualnetwork::plugin \\\n    --mode=peerings-status \\\n    --custommode='api' \\\n    --resource='VNET001A' \\\n    --resource-group='RSG1234' \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --proxyurl='' \\\n    --filter-name='' \\\n    --warning-status='' \\\n    --critical-status='%{peering_state} ne \"Connected\" || %{provisioning_state} ne \"Succeeded\"' \\\n    --use-new-perfdata\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: State '%s', Provisioning State '%s' [Peer: '%s'] | \n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_network_virtualnetwork_api.pl \\\n    --plugin=cloud::azure::network::virtualnetwork::plugin \\\n    --mode=peerings-status \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_network_virtualnetwork_api.pl \\\n    --plugin=cloud::azure::network::virtualnetwork::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0},70272:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);