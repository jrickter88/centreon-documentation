"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[88171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>c});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"azure-credential-configuration",title:"Pr\xe9requis pour la supervision Azure"},s=void 0,u={unversionedId:"integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",id:"integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",title:"Pr\xe9requis pour la supervision Azure",description:"Deux m\xe9thodes sont disponibles pour interroger les API d'Azure :",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration.md",sourceDirName:"integrations/plugin-packs/getting-started/how-to-guides",slug:"/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration.md",tags:[],version:"current",frontMatter:{id:"azure-credential-configuration",title:"Pr\xe9requis pour la supervision Azure"},sidebar:"pp",previous:{title:"Introduction aux connecteurs de supervision",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/introduction"},next:{title:"Centreon NSClient++",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"}},p={},c=[{value:"Configuration Azure API",id:"configuration-azure-api",level:2},{value:"Configuration Azure CLI",id:"configuration-azure-cli",level:2}],d={toc:c},m="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Deux m\xe9thodes sont disponibles pour interroger les API d'Azure :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure API ('api')."),(0,r.kt)("li",{parentName:"ul"},"Azure CLI ('azcli').")),(0,r.kt)("p",null,"Centreon recommande d'utiliser la m\xe9thode ",(0,r.kt)("strong",{parentName:"p"},"API")," plut\xf4t que Azure CLI pour les raisons suivantes :    "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L'API est plus efficiente car elle n'implique pas d'ex\xe9cution du programme azcli"),(0,r.kt)("li",{parentName:"ul"},"L'API supporte l'authentification via une Application tandis que azcli pas pour l'instant")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La d\xe9couverte d'h\xf4tes n'est disponible qu'en utilisant la m\xe9thode API.")),(0,r.kt)("p",null,"Pour plus d'information, rendez-vous sur la documentation Centreon :\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte d'h\xf4tes")),(0,r.kt)("h2",{id:"configuration-azure-api"},"Configuration Azure API"),(0,r.kt)("p",null,"4 tokens sont n\xe9cessaires pour se connecter \xe0 l'API Azure Monitor :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"subscription ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tenant ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client secret")," ")),(0,r.kt)("p",null,"Pour disposer de ces tokens, il faut cr\xe9er une Application dans Azure et lui assigner les droits suffisants. Les \xe9tapes ci-dessous d\xe9taillent la cr\xe9ation de cette Application et la configuration des droits n\xe9cessaire pour superviser les ressources Azure."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cr\xe9er une nouvelle ",(0,r.kt)("em",{parentName:"li"},"Application")," dans Azure Active Directory:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connectez-vous au Portail Azure."),(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,r.kt)("li",{parentName:"ul"},"Sur le menu de gauche, rendez-vous dans ",(0,r.kt)("strong",{parentName:"li"},"Inscriptions d'applications"),"."),(0,r.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"+ Nouvelle inscription"),", renseignez le nom de l'application et cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"S'inscrire"),"."))),(0,r.kt)("li",{parentName:"ul"},"Ajouter le r\xf4le ",(0,r.kt)("strong",{parentName:"li"},"Lecteur d'analyse")," \xe0 l'application qui vient d'\xeatre cr\xe9\xe9e:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rendez-vous dans ",(0,r.kt)("strong",{parentName:"li"},"Groupes de ressources"),"."),(0,r.kt)("li",{parentName:"ul"},"Cliquez sur le groupe de ressources contenant les ressources \xe0 superviser. "),(0,r.kt)("li",{parentName:"ul"},"Rendez-vous dans ",(0,r.kt)("strong",{parentName:"li"},"Contr\xf4le d'acc\xe8s (IAM)")," and ",(0,r.kt)("strong",{parentName:"li"},"+ Ajouter > Ajouter une attribution de r\xf4le"),"."),(0,r.kt)("li",{parentName:"ul"},"Recherchez le r\xf4le ",(0,r.kt)("strong",{parentName:"li"},"Lecteur d'analyse"),", s\xe9lectionnez-le et cliquez Suivant."),(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez votre application en tant que a membre en cliquant sur ",(0,r.kt)("strong",{parentName:"li"},"+ S\xe9lectionnez des membres"),"."),(0,r.kt)("li",{parentName:"ul"},"Cliquez ensuite sur ",(0,r.kt)("strong",{parentName:"li"},"V\xe9rifier + Attribuer"),".")))),(0,r.kt)("p",null,"Une fois que l'application cr\xe9\xe9e, voici comment r\xe9cup\xe9rer les 4 tokens : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Obtenir le ",(0,r.kt)("strong",{parentName:"li"},"subscription ID"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rendez-vous dans ",(0,r.kt)("strong",{parentName:"li"},"Abonnement")," dans le portail Azure. "),(0,r.kt)("li",{parentName:"ul"},"A c\xf4t\xe9 du nom de votre abonnement se trouve le ",(0,r.kt)("strong",{parentName:"li"},"Subscription ID"),"."))),(0,r.kt)("li",{parentName:"ul"},"Obtenir le ",(0,r.kt)("strong",{parentName:"li"},"Tenant ID"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rendez-vous dans ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,r.kt)("li",{parentName:"ul"},"Depuis ",(0,r.kt)("strong",{parentName:"li"},"Vue d'ensemble"),", dans ",(0,r.kt)("strong",{parentName:"li"},"Informations de base")," et en dessous du nom du r\xe9pertoire se trouve le ",(0,r.kt)("strong",{parentName:"li"},"Tenant ID"),", lab\xe9lis\xe9 en fran\xe7ais ",(0,r.kt)("strong",{parentName:"li"},"ID du client"),". Vous pouvez aussi trouver le Tenant ID dans ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory > Inscriptions d'applications > nom_de_votre_application")," et ID de l'annuaire (locataire)."))),(0,r.kt)("li",{parentName:"ul"},"Obtenir le ",(0,r.kt)("strong",{parentName:"li"},"Client ID"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allez dans ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,r.kt)("li",{parentName:"ul"},"Sur le menu de gauche, s\xe9lectionnez ",(0,r.kt)("strong",{parentName:"li"},"Inscriptions d'applications")," et cliquez sur le nom de votre application. "),(0,r.kt)("li",{parentName:"ul"},"Dans la section ",(0,r.kt)("strong",{parentName:"li"},"Vue d'ensemble")," vous allez trouver ",(0,r.kt)("strong",{parentName:"li"},"ID d'application (client)")," qui correspond au Client ID."))),(0,r.kt)("li",{parentName:"ul"},"Obtenir le ",(0,r.kt)("strong",{parentName:"li"},"Client secret"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Toujours dans ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory > Inscriptions d'applications"),", rendez-vous dans ",(0,r.kt)("strong",{parentName:"li"},"Certificats & secrets"),"."),(0,r.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"+ Nouveau secret client"),", remplissez la description ainsi que la date d'expiration puis cliquez sur Ajouter."),(0,r.kt)("li",{parentName:"ul"},"Gardez la ",(0,r.kt)("strong",{parentName:"li"},"valeur de la clef")," en lieu s\xfbr, il s'agit du ",(0,r.kt)("strong",{parentName:"li"},"client secret"),", une fois la page quitt\xe9e il vous sera impossible de retrouver la valeur de la clef secr\xe8te.")))),(0,r.kt)("p",null,"Ces 4 tokens seront requis lors de l'utilisation de la d\xe9couverte d'h\xf4tes ainsi que pour le fonctionnement des plugins Centreon Azure.\t"),(0,r.kt)("h2",{id:"configuration-azure-cli"},"Configuration Azure CLI"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ces \xe9tapes sont \xe0 ignorer si vous pouvez utiliser l'API d'Azure")," "),(0,r.kt)("p",null,"Installez Azure CLI :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc\nsudo echo -e "[azure-cli]\\nname=Azure CLI\\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo\nsudo yum install azure-cli-2.29.2-1.el7\n')),(0,r.kt)("p",null,"Ensuite, en \xe9tant connect\xe9 avec l'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine"),", obtenez un token :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - centreon-engine\naz login\n")),(0,r.kt)("p",null,"Le terminal devrait afficher un code permettant l'authentification :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"    *To sign in, use a web browser to open the page https://microsoft.com/devicelogin*\n    *and enter the code CWT4WQZAD to authenticate.*\n")),(0,r.kt)("p",null,"Rendez-vous sur ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.com/devicelogin"},"https://microsoft.com/devicelogin")," puis renseignez le code d'authentification, ensuite connectez-vous avec le compte de service de supervision d\xe9di\xe9e."),(0,r.kt)("p",null,"A la suite de la connexion, le terminal devrait afficher un message comme ci-dessous : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    [\n      {\n        "cloudName": "AzureCloud",\n        "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",\n        "isDefault": true,\n        "name": "N/A(tenant level account)",\n        "state": "Enabled",\n        "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",\n        "user": {\n          "name": "email@mycompany.onmicrosoft.com",\n          "type": "user"\n        }\n      }\n    ]\n')),(0,r.kt)("p",null,"Les cr\xe9dentiels sont d\xe9sormais stock\xe9s localement dans le fichier ",(0,r.kt)("strong",{parentName:"p"},"accessTokens.json"),", les plugins Centreon Azure pourront les utiliser lors des v\xe9rifications."))}g.isMDXComponent=!0}}]);