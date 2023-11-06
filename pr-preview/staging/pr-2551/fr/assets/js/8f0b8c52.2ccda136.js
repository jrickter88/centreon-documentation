"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[85706],{71049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>d});r(67294);var n=r(3905),a=r(51715),o=r(7626);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"migrate-from-el-to-el",title:"Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus r\xe9cent)"},u=void 0,c={unversionedId:"migrate/migrate-from-el-to-el",id:"version-23.10/migrate/migrate-from-el-to-el",title:"Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus r\xe9cent)",description:"Pr\xe9requis",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/migrate-from-el-to-el.md",sourceDirName:"migrate",slug:"/migrate/migrate-from-el-to-el",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/migrate/migrate-from-el-to-el",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/migrate-from-el-to-el.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"migrate-from-el-to-el",title:"Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus r\xe9cent)"},sidebar:"version-23.10/docs",previous:{title:"Introduction \xe0 la migration",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/migrate/introduction"},next:{title:"Migrer depuis un OS de type EL vers Debian 11",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/migrate/migrate-from-el-to-debian"}},m={},d=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Migrer un serveur central",id:"migrer-un-serveur-central",level:2},{value:"\xc9tape 1 : Installer le nouveau serveur",id:"\xe9tape-1--installer-le-nouveau-serveur",level:3},{value:"\xc9tape 2 : Synchroniser les donn\xe9es",id:"\xe9tape-2--synchroniser-les-donn\xe9es",level:3},{value:"\xc9tape 3 : R\xe9cup\xe9rer les bases de donn\xe9es",id:"\xe9tape-3--r\xe9cup\xe9rer-les-bases-de-donn\xe9es",level:3},{value:"\xc9tape 4 : Synchroniser les plugins",id:"\xe9tape-4--synchroniser-les-plugins",level:3},{value:"\xc9tape 5 : Mont\xe9e de version de la solution Centreon",id:"\xe9tape-5--mont\xe9e-de-version-de-la-solution-centreon",level:3},{value:"\xc9tape 6 (anciennes versions uniquement): Migrer vers Gorgone",id:"\xe9tape-6-anciennes-versions-uniquement-migrer-vers-gorgone",level:3},{value:"\xc9tape 7: Mettre \xe0 jour les modules",id:"\xe9tape-7-mettre-\xe0-jour-les-modules",level:3},{value:"Migrer un serveur distant",id:"migrer-un-serveur-distant",level:2},{value:"Migrer un collecteur",id:"migrer-un-collecteur",level:2}],g={toc:d},v="wrapper";function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(v,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Cette proc\xe9dure ne s'applique que dans les conditions suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vous souhaitez migrer d'un OS de type EL 64-bits vers un autre OS de type EL 64-bits support\xe9. Par exemple, vous souhaitez migrer d'un CentOS 7 \xe0 un Alma 8 ou 9."),(0,n.kt)("li",{parentName:"ul"},"Votre version de Centreon est 18.10 ou plus r\xe9cente.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"En cas de migration d'une plateforme disposant du syst\xe8me de redondance\nCentreon, il est n\xe9cessaire de contacter le\n",(0,n.kt)("a",{parentName:"p",href:"https://support.centreon.com"},"support Centreon"),".")),(0,n.kt)("h2",{id:"migrer-un-serveur-central"},"Migrer un serveur central"),(0,n.kt)("h3",{id:"\xe9tape-1--installer-le-nouveau-serveur"},"\xc9tape 1 : Installer le nouveau serveur"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installez votre nouvel OS: voir la liste des ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/installation/compatibility#syst%C3%A8me-dexploitation"},"OS support\xe9s"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installez un nouveau serveur central Centreon \xe0 partir des ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/installation/installation-of-a-central-server/using-packages"},"paquets"),"\njusqu'\xe0 terminer le processus d'installation en vous connectant \xe0 l'interface web."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Pendant le processus d'installation web, utilisez le m\xeame mot de passe pour l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon")," que sur l'ancienne plateforme."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"R\xe9alisez les mises \xe0 jour logicielle et syst\xe8me :"))),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n"))),(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\n")))),(0,n.kt)("h3",{id:"\xe9tape-2--synchroniser-les-donn\xe9es"},"\xc9tape 2 : Synchroniser les donn\xe9es"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connectez-vous \xe0 votre ancien serveur Centreon.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"G\xe9n\xe9rez une paire de cl\xe9s ssh pour ",(0,n.kt)("strong",{parentName:"p"},"root")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen -t rsa\n")),(0,n.kt)("p",{parentName:"li"},"Par d\xe9faut, la paire de cl\xe9s g\xe9n\xe9r\xe9e sera ",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/id_rsa.pub")," et ",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/id_rsa"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copiez la cl\xe9 publique de ",(0,n.kt)("strong",{parentName:"p"},"root")," (",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/id_rsa.pub"),") dans le fichier ",(0,n.kt)("strong",{parentName:"p"},"/root/.ssh/authorized_keys")," du nouveau serveur. Si vous n'utilisez pas le compte ",(0,n.kt)("strong",{parentName:"p"},"root")," pour la synchronisation, assurez-vous que votre utilisateur dispose de droits d'\xe9criture sur le dossier cible.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Depuis l'ancien serveur, synchronisez les r\xe9pertoires suivants vers le nouveau serveur :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rsync -avz /etc/centreon root@<IP_NOUVEAU_CENTREON>:/etc\nrsync -avz /etc/centreon-broker root@<IP_NOUVEAU_CENTREON>:/etc\nrsync -avz /var/log/centreon-engine/archives/ root@<IP_NOUVEAU_CENTREON>:/var/log/centreon-engine\nrsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NOUVEAU_CENTREON>:/var/lib\nrsync -avz /usr/share/centreon/www/img/media root@<IP_NEW_CENTREON>:/usr/share/centreon/www/img\n")),(0,n.kt)("p",{parentName:"li"},"Si vous avez personnalis\xe9 le nom de votre fichier de cl\xe9 priv\xe9e, utilisez le format suivant (remplacez ",(0,n.kt)("strong",{parentName:"p"},"id_rsa_custom")," par le nom de votre fichier, et ",(0,n.kt)("inlineCode",{parentName:"p"},"<commande>")," par les commandes ci-dessus):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'rsync -avz -e "ssh -i /root/.ssh/id_rsa_custom" <commande>\n')),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,n.kt)("strong",{parentName:"p"},"\\<IP_NOUVEAU_CENTREON",">")," par l'adresse IP de votre nouveau serveur Centreon.")))),(0,n.kt)("h3",{id:"\xe9tape-3--r\xe9cup\xe9rer-les-bases-de-donn\xe9es"},"\xc9tape 3 : R\xe9cup\xe9rer les bases de donn\xe9es"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur l'ancien serveur, faitez un dump des bases de donn\xe9es :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldump -u root -p centreon > /tmp/centreon.sql\nmysqldump -u root -p centreon_storage > /tmp/centreon_storage.sql\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur l'ancien serveur, arr\xeatez MariaDB :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop mariadb\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Depuis l'ancien serveur, exportez les dumps vers le nouveau serveur de base de donn\xe9es (assurez-vous d'avoir assez d'espace):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rsync -avz /tmp/centreon.sql root@<IP_NOUVEAU_CENTREON>:/tmp/\nrsync -avz /tmp/centreon_storage.sql root@<IP_NOUVEAU_CENTREON>:/tmp/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le nouveau serveur de base de donn\xe9es, supprimez les bases de\ndonn\xe9es vierges et recr\xe9ez-les :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u root -p\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP DATABASE centreon;\nDROP DATABASE centreon_storage;\nCREATE DATABASE centreon;\nCREATE DATABASE centreon_storage;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le nouveau serveur de bases de donn\xe9es, importez dans la base les dumps pr\xe9c\xe9demment transf\xe9r\xe9s :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u root centreon -p </tmp/centreon.sql\nmysql -u root centreon_storage -p </tmp/centreon_storage.sql\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ex\xe9cutez l'upgrade des tables :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade\n")),(0,n.kt)("p",{parentName:"li"},"Si votre base de donn\xe9es est prot\xe9g\xe9e par mot de passe, entrez :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade -u <utilisateur_admin_bdd> -p\n")),(0,n.kt)("p",{parentName:"li"},"Exemple : si votre utilisateur_admin_bdd est ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),", entrez:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_upgrade -u root -p\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"D\xe9marrez le processus ",(0,n.kt)("strong",{parentName:"p"},"mariadb")," sur le nouveau serveur :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start mariadb\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,n.kt)("strong",{parentName:"p"},"\\<IP_NOUVEAU_CENTREON",">")," par l'adresse IP de votre nouveau serveur\nCentreon.")),(0,n.kt)("h3",{id:"\xe9tape-4--synchroniser-les-plugins"},"\xc9tape 4 : Synchroniser les plugins"),(0,n.kt)("p",null,"Si vous n'utilisez que des plugins Centreon, r\xe9installez-les sur le nouveau serveur:"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-\\*\n"))),(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-\\*\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-plugin-\\*\n")))),(0,n.kt)("p",null,"Si vous utilisez vos propres plugins personnalis\xe9s, synchronisez les r\xe9pertoires qui contiennent ceux-ci, ainsi que toutes \xe9ventuelles d\xe9pendances."),(0,n.kt)("h3",{id:"\xe9tape-5--mont\xe9e-de-version-de-la-solution-centreon"},"\xc9tape 5 : Mont\xe9e de version de la solution Centreon"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sur le nouveau serveur, forcez la mont\xe9e de version en d\xe9placant le contenu du r\xe9pertoire\n",(0,n.kt)("strong",{parentName:"p"},"/var/lib/centreon/installs/install-23.04.x-YYYYMMDD_HHMMSS")," dans le\nr\xe9pertoire ",(0,n.kt)("strong",{parentName:"p"},"/usr/share/centreon/www/install")," (",(0,n.kt)("strong",{parentName:"p"},"x")," est le num\xe9ro de version cible pour votre machine migr\xe9e):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd /var/lib/centreon/installs/\nmv install-23.04.x-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si vous utilisez la meme adresse IP ou le m\xeame nom DNS entre l'ancien serveur\nweb Centreon et le nouveau, videz compl\xe8tement le cache de votre navigateur pour\n\xe9viter des problemes de scripts JS.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connectez-vous \xe0 l'URL ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<IP_NEW_CENTREON>/centreon")," et suivez les \xe9tapes\nde la mise \xe0 jour.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si vous avez modifi\xe9 le mot de passe de l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon")," lors de\nl'installation de votre nouveau serveur Centreon pour acc\xe9der aux bases de\ndonn\xe9es, il sera n\xe9cessaire de r\xe9aliser les actions suivantes sur le nouveau\nserveur Centreon :"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Modifiez le fichier ",(0,n.kt)("strong",{parentName:"li"},"/etc/centreon/centreon.conf.php"),","),(0,n.kt)("li",{parentName:"ol"},"Modifiez le fichier ",(0,n.kt)("strong",{parentName:"li"},"/etc/centreon/conf.pm"),","),(0,n.kt)("li",{parentName:"ol"},"\xc9ditez la configuration du Centreon Broker central, via l'interface web\nCentreon et modifiez le mot de passe pour l'output ",(0,n.kt)("strong",{parentName:"li"},"unfied-sql"),","),(0,n.kt)("li",{parentName:"ol"},"Modifiez le fichier ",(0,n.kt)("strong",{parentName:"li"},"/etc/centreon/config.d/10-database.yaml"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si l'adresse IP de votre serveur Centreon a chang\xe9 :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\xc9ditez la configuration de l'ensemble des modules Broker de vos collecteurs et modifiez l'adresse IP de\nconnexion au serveur Centreon central (output IPv4). Consultez le chapitre\n",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/advanced-configuration#tcp-outputs"},"Configuration\navanc\xe9e"),"\npour plus d'information."),(0,n.kt)("li",{parentName:"ul"},"L'empreinte de votre plateforme a \xe9galement chang\xe9 : ",(0,n.kt)("a",{parentName:"li",href:"mailto:support@centreon.com"},"contactez Centreon")," pour obtenir une nouvelle licence."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration")," de tous vos serveurs de supervision (y compris celle du central).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Red\xe9marrez les processus suivants :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine\nsystemctl restart gorgoned\nsystemctl start snmptrapd centreontrapd\nsystemctl start snmpd\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si vous supervisiez votre ancienne machine Centreon, et que vous avez chang\xe9 le nom d'utilisateur/mot de passe de la base pendant la migration, mettez \xe0 jour la configuration des ressources concern\xe9es (h\xf4te, services d\xe9pendant de cet h\xf4te).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),", puis ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/pluginpacks#mettre-%C3%A0-jour-un-ou-plusieurs-packs"},"mettez \xe0 jour tous les connecteurs de supervision"),"."))),(0,n.kt)("h3",{id:"\xe9tape-6-anciennes-versions-uniquement-migrer-vers-gorgone"},"\xc9tape 6 (anciennes versions uniquement): Migrer vers Gorgone"),(0,n.kt)("p",null,"Si vous migrez depuis un Centreon 18.10, 19.04 ou 19.10, vous devez \xe9galement ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-gorgone-migrate-from-centcore"},"migrer de Centcore \xe0 Gorgone"),"."),(0,n.kt)("h3",{id:"\xe9tape-7-mettre-\xe0-jour-les-modules"},"\xc9tape 7: Mettre \xe0 jour les modules"),(0,n.kt)("p",null,"Pour mettre \xe0 jour les modules, allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire")," et cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Update all"),".\nSi vous avez un serveur MAP ou MBI, suivez les proc\xe9dures de migration correspondantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Proc\xe9dure de migration pour ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/graph-views/migrate"},"MAP"),","),(0,n.kt)("li",{parentName:"ul"},"Proc\xe9dure de migration pour ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/reporting/migrate"},"MBI"),".")),(0,n.kt)("h2",{id:"migrer-un-serveur-distant"},"Migrer un serveur distant"),(0,n.kt)("p",null,"Pour migrer un serveur distant :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Suivez la m\xeame proc\xe9dure que pour un serveur central."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/add-a-remote-server-to-configuration"},"Rattachez le nouveau serveur distant")," \xe0 votre serveur central.")),(0,n.kt)("h2",{id:"migrer-un-collecteur"},"Migrer un collecteur"),(0,n.kt)("p",null,"Pour migrer un collecteur :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Effectuez les \xe9tapes 1 et 4 de la proc\xe9dure de migration d'un serveur central (c'est-\xe0-dire ",(0,n.kt)("a",{parentName:"li",href:"#%C3%A9tape-1--installer-le-nouveau-serveur"},"installer le nouveau serveur")," et ",(0,n.kt)("a",{parentName:"li",href:"#%C3%A9tape-4--synchroniser-les-plugins"},"synchronisez les plugins"),")."),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur central, allez \xe0 la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Collecteurs"),". S\xe9lectionnez le collecteur migr\xe9 et mettez \xe0 jour son adresse IP (si celle-ci a chang\xe9)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration"),"."),(0,n.kt)("li",{parentName:"ol"},"Si votre collecteur rencontre des probl\xe8mes suite \xe0 la migration (impossible de d\xe9ployer la configuration, d'effectuer des actions de supervision...), mettez \xe0 jour l'empreinte du collecteur comme d\xe9crit dans ",(0,n.kt)("a",{parentName:"li",href:"https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177"},"cet article de base de connaissances"),".")))}k.isMDXComponent=!0}}]);