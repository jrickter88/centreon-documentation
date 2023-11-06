"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35293],{32958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-monitoring-alyvix-restapi",title:"Alyvix Server"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",title:"Alyvix Server",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-alyvix-restapi",title:"Alyvix Server"},sidebar:"pp",previous:{title:"ActiveMQ JMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-activemq-jmx"},next:{title:"Ansible",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-ansible-cli"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant: <code>UNKNOWN: 500 Can&#39;t connect to 10.0.0.1:80 |</code>",id:"jobtiens-le-message-derreur-suivant-unknown-500-cant-connect-to-1000180-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant: <code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"jobtiens-le-message-derreur-suivant-unknown-501-protocol-scheme-connect-is-not-supported-",level:3}],k={toc:d},g="wrapper";function v(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Alyvix Server est un logiciel APM permettant une supervision visuelle et une ex\xe9cution automatis\xe9e de sc\xe9narios.\nLa solution permet de cr\xe9er des robots \xe9mulant le comportement d'utilisateurs finaux, en interagissant visuellement\navec n'importe quelle application Windows ou n'importe quel site ouvert depuis votre navigateur pr\xe9f\xe9r\xe9."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon Alyvix Server permet (par l'interrogation de l'API Rest) de r\xe9cup\xe9rer le statut et\nle temps d\u2019ex\xe9cution d'un ou de multiples sc\xe9narios (",(0,a.kt)("em",{parentName:"p"},"testcases"),") lanc\xe9s par Alyvix Server, ainsi que le d\xe9tail de chaque \xe9tape\n(",(0,a.kt)("em",{parentName:"p"},"transaction"),") du sc\xe9nario \xe9labor\xe9."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Le connecteur de supervision ",(0,a.kt)("em",{parentName:"p"},"Alyvix Server")," n'est ",(0,a.kt)("strong",{parentName:"p"},"pas")," compatible avec la version Open-Source d'Alyvix, la fonctionnalit\xe9 API Rest\n\xe9tant exclusive \xe0 la version commerciale de la solution. N'h\xe9sitez pas \xe0 contacter votre repr\xe9sentant Commercial afin de\npouvoir discuter des conditions d'acc\xe8s. ")),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Testcases")," et d\xe9tail des ",(0,a.kt)("em",{parentName:"li"},"transactions")," Alyvix Server")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Testcases",label:"Testcases",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Alyvix-Restapi-Testcase-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover all the testcases handled by Alyvix Server")))))),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Testcases-Global",label:"Testcases-Global",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Global (pour chaque ",(0,a.kt)("em",{parentName:"li"},"testcase"),")")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"testcase_alias"),"#testcase-state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the case job execution"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"testcase_alias"),"#testcase-duration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total time of the case job execution"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"testcase_alias"),"#testcase-freshness"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Last execution time of the case job"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par ",(0,a.kt)("em",{parentName:"li"},"testcase")," (pour chaque ",(0,a.kt)("em",{parentName:"li"},"transaction"),")")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"testcase_alias"),"~",(0,a.kt)("em",{parentName:"td"},"transaction_alias"),"#transaction-state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the the transaction job execution"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"testcase_alias"),"~",(0,a.kt)("em",{parentName:"td"},"transaction_alias"),"#transaction-duration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total time of the transaction job execution"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ms")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Pour int\xe9grer la solution ",(0,a.kt)("em",{parentName:"p"},"Alyvix Server")," avec Centreon, celle-ci doit \xeatre install\xe9e et configur\xe9e sur un serveur Windows d\xe9di\xe9.\nLe collecteur Centreon en charge de la supervision des ressources doit \xe9galement pouvoir joindre l'API Rest d'Alyvix Server sur\nle(s) port(s) TCP/80 ou TCP/443."),(0,a.kt)("p",null,"Pour plus d'informations sur la configuration d'Alyvix Server et l'impl\xe9mentation des ",(0,a.kt)("em",{parentName:"p"},"testcases"),", vous pouvez consulter la documentation\nofficielle: ",(0,a.kt)("a",{parentName:"p",href:"https://www.alyvix.com/learn/"},"https://www.alyvix.com/learn/"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser les ressources ",(0,a.kt)("em",{parentName:"li"},"Alyvix Server"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Alyvix-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Alyvix Server"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser les ressources ",(0,a.kt)("em",{parentName:"li"},"Alyvix Server"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Alyvix-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-alyvix-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Alyvix Server"),"\ndepuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre serveur Alyvix Server'),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"App-Monitoring-Alyvix-Restapi-custom"))),(0,a.kt)("p",null,"Les Macros d'H\xf4te ci-apr\xe8s doivent \xeatre renseign\xe9es le cas \xe9ch\xe9ant:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"RestAPI port of the Alyvix Server (Default: '80')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIPROTOCOL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used to reach the Alyvix Server (Default: 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"URL path of the API (Default: '/v0/')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Username to authenticate against the API (",(0,a.kt)("strong",{parentName:"td"},"not available yet"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password to authenticate against the API (",(0,a.kt)("strong",{parentName:"td"},"not available yet"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Par d\xe9faut, un Service de type "Global" sera d\xe9ploy\xe9, supervisant l\'ensemble des ',(0,a.kt)("em",{parentName:"p"},"testcases"),".\nUtilisez la fonctionnalit\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Service Discovery")," si vous souhaitez obtenir un Service par ",(0,a.kt)("em",{parentName:"p"},"testcase"),".")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \\\n    --plugin=apps::monitoring::alyvix::restapi::plugin \\\n    --mode=testcases \\\n    --hostname='10.0.0.1' \\\n    --proto='http' \\\n    --port='80' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --filter-testcase='case_app1|case_app2' \\\n    --critical-testcase-state='%{state} eq \"FAILED\"' \\\n    --critical-transaction-state='%{state} eq \"FAILED\"' \\\n    --warning-testcase-duration='40000' \\\n    --critical-testcase-duration='60000' \\\n    --critical-testcase-freshness='600' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All test cases are ok | 'case_app1#testcase.duration.milliseconds'=3883ms;;;0; 'case_app1~1_openapp1#transaction.duration.milliseconds'=77ms;;;0;\n'case_app2#testcase.duration.milliseconds'=30658ms;;;0; 'case_app2~1_open_app1#transaction.duration.milliseconds'=3ms;;;0;\n'case_app2~2_open_app2#transaction.duration.milliseconds'=4ms;;;0; 'case_app2~3_delay#transaction.duration.milliseconds'=76ms;;;0;\n'case_app2~4_open_app1_explorer#transaction.duration.milliseconds'=0ms;;;0; 'case_app2~5_open_file#transaction.duration.milliseconds'=10000ms;;;0;\n'case_app2~6_close_app1#transaction.duration.milliseconds'=104ms;;;0; 'case_app2~7_close_app2#transaction.duration.milliseconds'=0ms;;;0;\n'case_app2~8_check_picture#transaction.duration.milliseconds'=0ms;;;0;\nchecking test case 'case_app1'\n    duration: 3883 ms, state: OK, last execution: 2020-12-11T15:22:40 (1m 16s ago)\n    transaction '1_openapp1' state: OK, duration: 77 ms\nchecking test case 'case_app2'\n    duration: 30658 ms, state: OK, last execution: 2020-12-11T15:20:39 (3m 18s ago)\n    transaction '1_open_app1' state: OK, duration: 3 ms\n    transaction '2_open_app2' state: OK, duration: 4 ms\n    transaction '3_delay' state: OK, duration: 76 ms\n    transaction '4_open_app1_explorer' state: OK, duration: 0 ms\n    transaction '5_open_file' state: OK, duration: 10000 ms\n    transaction '6_close_app1' state: OK, duration: 104 ms\n    transaction '7_close_app2' state: OK, duration: 0 ms\n    transaction '8_check_picture' state: OK, duration: 0ms\n")),(0,a.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re les statuts et temps d'\xe9xecution des ",(0,a.kt)("em",{parentName:"p"},"testcases")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::monitoring::alyvix::restapi::plugin --mode=testcases"),")\ndu serveur Alyvix ayant l'adresse IP ",(0,a.kt)("em",{parentName:"p"},"10.0.0.1")," (--hostname='10.0.0.1'). On choisit ci-desus de n'afficher que les ",(0,a.kt)("em",{parentName:"p"},"testcases")," nomm\xe9s ",(0,a.kt)("em",{parentName:"p"},"case_app1")," et ",(0,a.kt)("em",{parentName:"p"},"case_app2"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-testcase='case_app1|case_app2'"),")."),(0,a.kt)("p",null,"Une alarme WARNING sera ainsi d\xe9clench\xe9e si la dur\xe9e d'\xe9xecution d'un ",(0,a.kt)("em",{parentName:"p"},"testcase")," est sup\xe9rieure \xe0 40s -40000ms- (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-testcase-duration='40000'"),")."),(0,a.kt)("p",null,"Une alarme CRITICAL sera quant \xe0 elle d\xe9clench\xe9e dans les cas suivants:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"la dur\xe9e d'\xe9xecution d'un ",(0,a.kt)("em",{parentName:"li"},"testcase")," est sup\xe9rieure \xe0 60s -60000ms- (",(0,a.kt)("inlineCode",{parentName:"li"},"--critical-testcase-duration='60000'"),")"),(0,a.kt)("li",{parentName:"ul"},"le statut g\xe9n\xe9ral d'un ",(0,a.kt)("em",{parentName:"li"},"testcase"),' ex\xe9cut\xe9 est renvoy\xe9 comme "FAILED" (',(0,a.kt)("inlineCode",{parentName:"li"},"--critical-testcase-state='%{state} eq \"FAILED\"'"),")"),(0,a.kt)("li",{parentName:"ul"},"le statut d'au moins une ",(0,a.kt)("em",{parentName:"li"},"transaction")," du ",(0,a.kt)("em",{parentName:"li"},"testcase"),' ex\xe9cut\xe9 est renvoy\xe9 comme "FAILED" (',(0,a.kt)("inlineCode",{parentName:"li"},"--critical-transaction-state='%{state} eq \"FAILED\"'"),")")),(0,a.kt)("p",null,"La liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \\\n    --plugin=apps::monitoring::alyvix::restapi::plugin \\\n    --mode=testcases \\\n    --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant-unknown-500-cant-connect-to-1000180-"},"J'obtiens le message d'erreur suivant: ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 500 Can't connect to 10.0.0.1:80 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant: ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to 10.0.0.1:80 |"),"."),(0,a.kt)("p",null,"Cette erreur signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API du serveur Alyvix Server.\nV\xe9rifiez que la requ\xeate n'est pas bloqu\xe9e par un outil externe\n(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans\nla Macro ",(0,a.kt)("em",{parentName:"p"},"EXTRAOPTIONS")," de l'H\xf4te ou directement dans la\ncommande avec l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl"),"."),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant-unknown-501-protocol-scheme-connect-is-not-supported-"},"J'obtiens le message d'erreur suivant: ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Dans certains cas, et plus sp\xe9cifiquement lors de l'usage d'un proxy\nd'entreprise, le protocole de connexion n'est pas support\xe9 par la libraire ",(0,a.kt)("em",{parentName:"p"},"lwp"),"\nutlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,a.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,a.kt)("em",{parentName:"p"},"curl"),".\nPour ce faire, ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," la Macro ",(0,a.kt)("em",{parentName:"p"},"EXTRAOPTIONS")," de l'H\xf4te ou directement \xe0 la commande."))}v.isMDXComponent=!0}}]);