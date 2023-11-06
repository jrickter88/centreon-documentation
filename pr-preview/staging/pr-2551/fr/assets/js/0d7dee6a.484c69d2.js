"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84601],{91017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>N,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-oracle-goldengate-ssh",title:"Oracle GoldenGate SSH"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",id:"integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",title:"Oracle GoldenGate SSH",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-oracle-goldengate-ssh",title:"Oracle GoldenGate SSH"},sidebar:"pp",previous:{title:"OpenWeatherMap",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-openweathermap-restapi"},next:{title:"Oracle UCP JMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx"}},d={},m=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;ai ce message d&#39;erreur : <code>UNKNOWN: Command error: Host key verification failed.</code>. Qu&#39;est-ce que cela signifie ?",id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-",level:3}],k={toc:m},g="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le connecteur de supervision inclue la supervision du statut et des lags des ",(0,a.kt)("em",{parentName:"p"},"Processes")," Oracle GG en\nutilisant la commande GGSCI. "),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Resources",label:"Resources",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"process status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Process status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"processname"),"#process.lag.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"processus lag at checkpoint"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"processname"),"#process.time.checkpoint.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"processus time since checkpoint"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de fonctionner, le Plugin n\xe9cessite une connexion SSH entre le Poller et le serveur executant Oracle GoldenGate. L'utilisateur distant\ndoit avoir assez de privil\xe8ges pour executer la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"ggsci"),". "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Oracle GoldenGate SSH")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-oracle-goldengate-ssh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Oracle GoldenGate SSH")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par application Oracle GoldenGate.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"App-Oracle-Goldengate-SSH-custom-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GGSHOME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Directory of ",(0,a.kt)("inlineCode",{parentName:"td"},"ggsci"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"ORACLEHOME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Oracle home directory")))),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,a.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"plink"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,a.kt)(l.Z,{value:"libssh backend (par d\xe9faut)",label:"libssh backend (par d\xe9faut)",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("p",null,"Avec ce backend, vous n'avez pas \xe0 valider manuellement le fingerprint du serveur cible. "))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \\\n    --plugin=apps::oracle::gg::local::plugin \\\n    --mode=processes \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=libssh \\\n    --filter-type=REPLICAT \\\n    --verbose\n")),(0,a.kt)("p",null,"Exemple de sortie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CRITICAL: Process 'REPLICAT:RP_TS02' status: ABENDED | 'REPLICAT:RP_TSO1#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TSO1#process.time.checkpoint.seconds'=4s;;;0; 'REPLICAT:RP_TS02#process.lag.seconds'=172472s;;;0; 'REPLICAT:RP_TS02#process.time.checkpoint.seconds'=1462s;;;0; 'REPLICAT:RP_TS03#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TS03#process.time.checkpoint.seconds'=4s;;;0;\nProcess 'REPLICAT:RP_TSO1' status: RUNNING, lag: 0, time since checkpoint: 4s\nProcess 'REPLICAT:RP_TS02' status: ABENDED, lag: 1d 23h 54m 32s, time since checkpoint: 24m 22s\nProcess 'REPLICAT:RP_TS03' status: RUNNING, lag: 0, time since checkpoint: 4s\n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le les processus de l'application Oracle GoldenGate (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=processes"),").\nLe Plugin utilise le Backend ",(0,a.kt)("em",{parentName:"p"},"libssh")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-backend='libssh'"),") avec l'utisateur ",(0,a.kt)("em",{parentName:"p"},"centreon")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon --api-password='centreon-password'"),")\net il se connecte \xe0 l'h\xf4te ",(0,a.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.81'"),")."),(0,a.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \\\n    --plugin=apps::oracle::gg::local::plugin \\\n    --mode=processes \\\n    --help\n")),(0,a.kt)("h3",{id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-"},"J'ai ce message d'erreur : ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error: Host key verification failed."),". Qu'est-ce que cela signifie ?"),(0,a.kt)("p",null,"Cela signifie que vous n'avez pas valid\xe9 manuellement la signature (fingerprint) du serveur cible avec ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"plink")," sur le Poller Centreon."))}N.isMDXComponent=!0}}]);