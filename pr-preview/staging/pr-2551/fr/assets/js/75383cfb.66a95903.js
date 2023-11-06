"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[33256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"monitoring-with-snmp-traps",title:"Monitoring SNMP Traps"},o=void 0,u={unversionedId:"monitoring/passive-monitoring/monitoring-with-snmp-traps",id:"version-23.10/monitoring/passive-monitoring/monitoring-with-snmp-traps",title:"Monitoring SNMP Traps",description:"Configuration de la supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/passive-monitoring/monitoring-with-snmp-traps.md",sourceDirName:"monitoring/passive-monitoring",slug:"/monitoring/passive-monitoring/monitoring-with-snmp-traps",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/passive-monitoring/monitoring-with-snmp-traps",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/passive-monitoring/monitoring-with-snmp-traps.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"monitoring-with-snmp-traps",title:"Monitoring SNMP Traps"},sidebar:"version-23.10/docs",previous:{title:"D\xe9finition des Traps SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/passive-monitoring/create-snmp-traps-definitions"},next:{title:"D\xe9boguer la gestion des traps SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/passive-monitoring/debug-snmp-traps-management"}},p={},m=[{value:"Configuration de la supervision",id:"configuration-de-la-supervision",level:2},{value:"Appliquer les changements",id:"appliquer-les-changements",level:2},{value:"Pour aller plus loin",id:"pour-aller-plus-loin",level:2},{value:"Modifier le message de sortie",id:"modifier-le-message-de-sortie",level:3},{value:"Utiliser l\u2019ensemble des arguments",id:"utiliser-lensemble-des-arguments",level:4},{value:"Effectuer un contr\xf4le actif suite \xe0 la reception d\u2019un trap",id:"effectuer-un-contr\xf4le-actif-suite-\xe0-la-reception-dun-trap",level:4},{value:"Executer une commande sp\xe9ciale",id:"executer-une-commande-sp\xe9ciale",level:4},{value:"Utiliser l\u2019ensemble des arguments (via les OID)",id:"utiliser-lensemble-des-arguments-via-les-oid",level:4},{value:"Utiliser une variable externe",id:"utiliser-une-variable-externe",level:4},{value:"Utiliser une expression r\xe9guli\xe8re",id:"utiliser-une-expression-r\xe9guli\xe8re",level:4},{value:"Route/Transfer SNMP traps",id:"routetransfer-snmp-traps",level:3},{value:"Ne pas soumettre le trap SNMP durant un downtime",id:"ne-pas-soumettre-le-trap-snmp-durant-un-downtime",level:3}],d={toc:m},c="wrapper";function g(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"configuration-de-la-supervision"},"Configuration de la supervision"),(0,r.kt)("p",null,"Rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host")," et cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Add"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"D\xe9finir une description du service"),(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'h\xf4te auquel attacher ce service"),(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez le mod\xe8le de service ",(0,r.kt)("strong",{parentName:"li"},"generic-passive-service-custom"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(77269).Z,width:"1580",height:"442"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rendez-vous dans l'onglet ",(0,r.kt)("strong",{parentName:"li"},"Relation")," et s\xe9lectionnez les traps SNMP")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(86474).Z,width:"1590",height:"456"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("h2",{id:"appliquer-les-changements"},"Appliquer les changements"),(0,r.kt)("p",null,"Pour pouvoir exporter les OID pr\xe9sents en base de donn\xe9es en fichier de configuration pour centreontrapd, suivez la\nproc\xe9dure suivante :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"li"},"Configuration > SNMP traps > Generate")),(0,r.kt)("li",{parentName:"ol"},"S\xe9lectionnez le collecteur vers lequel vous souhaitez exporter les fichiers de configuration"),(0,r.kt)("li",{parentName:"ol"},"Cochez ",(0,r.kt)("strong",{parentName:"li"},"Generate traps database")," et ",(0,r.kt)("strong",{parentName:"li"},"Apply configurations")),(0,r.kt)("li",{parentName:"ol"},"Dans la liste d\xe9roulante ",(0,r.kt)("strong",{parentName:"li"},"Send signal")," (pr\xe9f\xe9rez l\u2019option ",(0,r.kt)("strong",{parentName:"li"},"Reload"),")"),(0,r.kt)("li",{parentName:"ol"},"Cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"li"},"Generate")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Export the monitoring configuration")))),(0,r.kt)("h2",{id:"pour-aller-plus-loin"},"Pour aller plus loin"),(0,r.kt)("h3",{id:"modifier-le-message-de-sortie"},"Modifier le message de sortie"),(0,r.kt)("h4",{id:"utiliser-lensemble-des-arguments"},"Utiliser l\u2019ensemble des arguments"),(0,r.kt)("p",null,"Pour un trap SNMP, lors de la configuration du message de sortie, l\u2019argument ",(0,r.kt)("strong",{parentName:"p"},"$","*")," permet d\u2019afficher l\u2019ensemble des\ninformations (valeur des arguments) contenu au sein du trap SNMP. Cependant, il est possible d\u2019afficher uniquement\ncertaines informations contenues au sein du trap SNMP en appelant unitairement les arguments."),(0,r.kt)("p",null,"Exemple :\n",(0,r.kt)("img",{alt:"image",src:n(86474).Z,width:"1590",height:"456"})),(0,r.kt)("p",null,"Le message de sortie ",(0,r.kt)("strong",{parentName:"p"},"Link down on interface $2. State: $4."),"\u201d permet d\u2019afficher uniquement le nom de l\u2019interface et\nl\u2019\xe9tat de celle-ci (argument $2 et $4)."),(0,r.kt)("p",null,"O\xf9 trouver les arguments ?"),(0,r.kt)("p",null,"Les arguments se trouvent au sein de la documentation de la MIB de votre constructeur ou bien au sein du champ\n",(0,r.kt)("strong",{parentName:"p"},"Comments")," de votre trap SNMP."),(0,r.kt)("p",null,"Par exemple :\n",(0,r.kt)("img",{alt:"image",src:n(70025).Z,width:"1281",height:"195"})),(0,r.kt)("p",null,"Pour afficher :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L\u2019index du lien tomb\xe9, utilisez l\u2019argument $1"),(0,r.kt)("li",{parentName:"ul"},"Le nom de l\u2019interface tomb\xe9e, utilisez l\u2019argument $2"),(0,r.kt)("li",{parentName:"ul"},"L\u2019\xe9tat administratif de l\u2019interface, utilisez l\u2019argument $3"),(0,r.kt)("li",{parentName:"ul"},"L\u2019\xe9tat de l\u2019interface, utilisez l\u2019argument $4")),(0,r.kt)("p",null,"Par exemple, le message de sortie suivant permet d\u2019afficher l\u2019ensemble des arguments :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Link down on interface: $2 (index: $1). Operational state: $4, Administration state: $3\n")),(0,r.kt)("h4",{id:"effectuer-un-contr\xf4le-actif-suite-\xe0-la-reception-dun-trap"},"Effectuer un contr\xf4le actif suite \xe0 la reception d\u2019un trap"),(0,r.kt)("p",null,"Il est possible par l\u2019utilisation de l\u2019option ",(0,r.kt)("strong",{parentName:"p"},"Reschedule associated services")," de r\xe9aliser un contr\xf4le actif sur le\nservice suite \xe0 la r\xe9ception du trap SNMP."),(0,r.kt)("p",null,"Le contr\xf4le actif d\xe9fini au niveau du service est alors effectu\xe9."),(0,r.kt)("h4",{id:"executer-une-commande-sp\xe9ciale"},"Executer une commande sp\xe9ciale"),(0,r.kt)("p",null,"Centreontrapd peut \xe9xecuter une commande sp\xe9ciale suite \xe0 la r\xe9ception d\u2019un trap SNMP. Pour utiliser cela, il suffit de\ncocher l\u2019option ",(0,r.kt)("strong",{parentName:"p"},"Execute special command")," et d\u2019\xe9crire la commande voulue."),(0,r.kt)("h4",{id:"utiliser-lensemble-des-arguments-via-les-oid"},"Utiliser l\u2019ensemble des arguments (via les OID)"),(0,r.kt)("p",null,"Il est \xe9galement possible de r\xe9cup\xe9rer directement la valeur d\u2019un argument sans conna\xeetre son ordre d\u2019arriv\xe9e ($1, $2,\n$3, ...). Pour cela, utilisez l\u2019OID complet de l\u2019argument."),(0,r.kt)("p",null,"Voici un exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Link down on interface: @{.1.3.6.1.2.1.2.2.1.2} (index: @{.1.3.6.1.2.1.2.2.1.1}). Operational state: @{.1.3.6.1.2.1.2.2.1.8}, Administration state: @{.1.3.6.1.2.1.2.2.1.7}\n")),(0,r.kt)("h4",{id:"utiliser-une-variable-externe"},"Utiliser une variable externe"),(0,r.kt)("p",null,"Il est \xe9galement possible de modifier le message de sortie en r\xe9cup\xe9rant des informations via des scripts ou commandes\nexternes et de r\xe9cup\xe9rer le r\xe9sultat pour l\u2019ins\xe9rer au sein du message. Pour cela, au sein de la d\xe9finition de votre\ntrap SNMP, rendez-vous dans l\u2019onglet ",(0,r.kt)("strong",{parentName:"p"},"Advanced")," et ajoutez une (ou plusieurs) commande(s) PREEXEC."),(0,r.kt)("p",null,"Exemple :\n",(0,r.kt)("img",{alt:"image",src:n(38773).Z,width:"904",height:"86"})),(0,r.kt)("p",null,"La premi\xe8re commande est ",(0,r.kt)("strong",{parentName:"p"},"snmpget -v 2c -Ovq -c public @HOSTADDRESS@ ifAlias.$1")," et permet de r\xe9cup\xe9rer l\u2019alias de\nl\u2019interface. La variable \u201c$1\u201d correspond ici \xe0 la valeur associ\xe9e \xe0 l\u2019argument 1 des traps linkUp/linkDown, soit l\u2019index."),(0,r.kt)("p",null,"La seconde commande contient ",(0,r.kt)("strong",{parentName:"p"},"snmpget -v 2c -Ovq -c public @HOSTADDRESS@ ifSpeed.$1")," et permet de r\xe9cup\xe9rer la vitesse\nde l\u2019interface. La variable \u201c$1\u201d correspond ici \xe0 la valeur associ\xe9e \xe0 l\u2019argument 1 des traps linkUp/linkDown, soit l\u2019index."),(0,r.kt)("p",null,"Pour utiliser le r\xe9sultat de la premi\xe8re commande dans le message de sortie, utilisez l\u2019argument $p1 et pour utiliser le r\xe9sultat de la seconde commande dans le message de sortie, utilisez l\u2019argument $p2."),(0,r.kt)("p",null,"Par cons\xe9quent, nous pouvons d\xe9duire le message de sortie suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Link down on interface: $2 (index: $1). Operational state: $4, Administration state: $3, Alias : $p1, Speed : $p2\n")),(0,r.kt)("h4",{id:"utiliser-une-expression-r\xe9guli\xe8re"},"Utiliser une expression r\xe9guli\xe8re"),(0,r.kt)("p",null,"Il est \xe9galement possible de modifier le message de sortie en utilisant une expression r\xe9guli\xe8re par l\u2019interm\xe9diaire de\nl\u2019option ",(0,r.kt)("strong",{parentName:"p"},"Output Transform"),". Il suffit de renseigner une expression r\xe9guli\xe8re et elle sera \xe9x\xe9cut\xe9e \xe0 la r\xe9ception\nd\u2019un trap SNMP."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"s/\\|/-/g\n")),(0,r.kt)("p",null,"Will replace ",(0,r.kt)("strong",{parentName:"p"},"|")," in the output to ",(0,r.kt)("strong",{parentName:"p"},"-"),"."),(0,r.kt)("h3",{id:"routetransfer-snmp-traps"},"Route/Transfer SNMP traps"),(0,r.kt)("p",null,"Parfois, il existe un concentrateur de traps SNMP au sein d\u2019une soci\xe9t\xe9. Exemple : Oracle GRID. Oracle GRID est charg\xe9\nde f\xe9d\xe9rer les informations de tous les serveurs Oracle en cas de n\xe9cessit\xe9, c\u2019est le serveur Oracle GRID qui envoie un\ntrap SNMP au serveur de supervision."),(0,r.kt)("p",null,"Or, \xe0 partir d\u2019un trap SNMP re\xe7u par Oracle GRID, on souhaite pouvoir extraire l\u2019adresse IP de l\u2019h\xf4te concern\xe9 et\nafficher le message du trap dans un service appartenant non pas \xe0 Oracle Grid mais \xe0 l\u2019h\xf4te concern\xe9 par le trap (le\nv\xe9ritable \xe9metteur)."),(0,r.kt)("p",null,"Pour cela, ex\xe9cutez la proc\xe9dure suivante :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cr\xe9ez un trap g\xe9n\xe9rique, ayant les param\xe8tres suivants :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dans l'onglet ",(0,r.kt)("strong",{parentName:"li"},"Main")," :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributs"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trap Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Nom du trap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OID"),(0,r.kt)("td",{parentName:"tr",align:null},"OID du trap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Statut par d\xe9faut du trap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Message de sortie personnalis\xe9")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dans l'onglet ",(0,r.kt)("strong",{parentName:"li"},"Advanced"),":")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable routing"),(0,r.kt)("td",{parentName:"tr",align:null},"Cochez la case")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Route definition"),(0,r.kt)("td",{parentName:"tr",align:null},"$2 (ici on part du principe que l\u2019argument num\xe9ro 2 du trap contient l\u2019adresse IP de l\u2019h\xf4te concern\xe9 par le trap)")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Cr\xe9er une deuxi\xe8me d\xe9finition du trap avec :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dans l'onglet ",(0,r.kt)("strong",{parentName:"li"},"Main")," :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributs"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trap Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Nom du trap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OID"),(0,r.kt)("td",{parentName:"tr",align:null},"OID du trap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Statut par d\xe9faut du trap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Message de sortie personnalis\xe9")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Associer la premi\xe8re d\xe9finition \xe0 un service (par exemple PING) du serveur Oracle GRID"),(0,r.kt)("li",{parentName:"ol"},"Associer la deuxi\xe8me d\xe9finition \xe0 un service passif de l\u2019h\xf4te concern\xe9"),(0,r.kt)("li",{parentName:"ol"},"G\xe9n\xe9rer les d\xe9finitions de traps SNMP et red\xe9marrer centreontrapd")),(0,r.kt)("p",null,"Au sein du champ ",(0,r.kt)("strong",{parentName:"p"},"Route definition")," vous pouvez utiliser les arguments suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom de la variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@GETHOSTBYADDR($1)@"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9solution DNS inverse permettant de connaitre le nom DNS \xe0 partir de l\u2019adresse IP (127.0.0.1 -",">"," localhost)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@GETHOSTBYNAME($1)@"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9solution DNS permettant de connaitre l\u2019adresse IP \xe0 partir du nom DNS (localhost -",">"," 127.0.0.1)")))),(0,r.kt)("h3",{id:"ne-pas-soumettre-le-trap-snmp-durant-un-downtime"},"Ne pas soumettre le trap SNMP durant un downtime"),(0,r.kt)("p",null,"L\u2019option ",(0,r.kt)("strong",{parentName:"p"},"Check Downtime")," permet \xe0 centreontrapd de contr\xf4ler si le service n\u2019est pas dans un statut de downtime lors\nde la r\xe9ception du trap SNMP. Il est possible alors d\u2019annuler la soumission du trap."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ce mode de fonctionnement n\u2019est compatible qu\u2019avec Centreon Broker et des services supervis\xe9s depuis le central.")),(0,r.kt)("p",null,"Il est possible d\u2019adapter le comportement selon ces trois m\xe9thodes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None : Rien de sp\xe9cial, le trap SNMP est envoy\xe9 normalement"),(0,r.kt)("li",{parentName:"ul"},"Real-Time : Si un downtime est actif sur le service, il n\u2019est pas mis \xe0 jour."),(0,r.kt)("li",{parentName:"ul"},"History : Option utilis\xe9e pour ne pas prendre en compte un trap SNMP qui concerne un \xe9v\xe9nement pass\xe9 lors d\u2019un temps d\u2019arr\xeat.")))}g.isMDXComponent=!0},77269:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06createpassiveservice-bf0354367d640257a23adfe0e022548c.png"},86474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06servicetrapsrelation-56ee0bc26d89a7e24c34374433564597.png"},70025:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/klinkcomment-9419412625feb4d0af8b548bbfa802bc.png"},38773:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kpreexec-caf904abd76e438b759ee14498aec471.png"}}]);