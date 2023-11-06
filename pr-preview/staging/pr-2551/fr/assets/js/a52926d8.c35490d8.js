"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[58079],{16347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>d});t(67294);var r=t(3905),o=t(51715),a=t(7626);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"communications",title:"Communications"},m=void 0,u={unversionedId:"monitoring/monitoring-servers/communications",id:"version-23.10/monitoring/monitoring-servers/communications",title:"Communications",description:"Modes de communication",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/communications.md",sourceDirName:"monitoring/monitoring-servers",slug:"/monitoring/monitoring-servers/communications",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/communications",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/communications.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"communications",title:"Communications"},sidebar:"version-23.10/docs",previous:{title:"Rattacher un serveur distant \xe0 un serveur central",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/add-a-remote-server-to-configuration"},next:{title:"Rattacher un collecteur \xe0 un serveur distant diff\xe9rent",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/monitoring/monitoring-servers/move-poller"}},p={},d=[{value:"Modes de communication",id:"modes-de-communication",level:2},{value:"Sans Remote Server",id:"sans-remote-server",level:3},{value:"Avec Remote Server",id:"avec-remote-server",level:3},{value:"Changer la communication de SSH \xe0 ZMQ",id:"changer-la-communication-de-ssh-\xe0-zmq",level:2},{value:"S\xe9lectionner le type de communication",id:"s\xe9lectionner-le-type-de-communication",level:4},{value:"Afficher la configuration de Gorgone",id:"afficher-la-configuration-de-gorgone",level:4},{value:"D\xe9marrer le daemon Gorgone",id:"d\xe9marrer-le-daemon-gorgone",level:4},{value:"S\xe9lectionner le type de communication",id:"s\xe9lectionner-le-type-de-communication-1",level:4},{value:"Afficher la configuration de Gorgone",id:"afficher-la-configuration-de-gorgone-1",level:4},{value:"Red\xe9marrer le daemon Gorgone",id:"red\xe9marrer-le-daemon-gorgone",level:4}],g={toc:d},k="wrapper";function b(e){var{components:n}=e,c=s(e,["components"]);return(0,r.kt)(k,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({},g,c),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modes-de-communication"},"Modes de communication"),(0,r.kt)("p",null,"M\xeame si Gorgone est install\xe9 sur les Pollers et les Remote Servers, il est\nautoris\xe9 de communiquer avec eux (depuis un Central, ou entre un Remote Server\net un Poller) en utilisant le protocole SSH."),(0,r.kt)("p",null,"Bien que la communication de type SSH soit autoris\xe9e, elle doit \xeatre utilis\xe9e\nen p\xe9riode de transition d'une ancienne plateforme qui utilisait Centcore vers\nune plateforme utilisant ZMQ."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Les Pollers ou Remote Servers qui n'utiliseraient pas ZMQ comme type de\ncommunication entre le Gorgogne du Central et le leur ne b\xe9n\xe9ficieront pas\nde toutes les \xe9volutions de Centreon et de ses extensions.")),(0,r.kt)("p",null,"Les modes de communication sont list\xe9s ci-apr\xe8s :"),(0,r.kt)("h3",{id:"sans-remote-server"},"Sans Remote Server"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Moderne (recommand\xe9)",label:"Moderne (recommand\xe9)",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Communications"),(0,r.kt)("th",{parentName:"tr",align:null},"Actions autoris\xe9es"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Central")," <-- ",(0,r.kt)("em",{parentName:"td"},"ZMQ")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Poller")),(0,r.kt)("td",{parentName:"tr",align:null},"Actions de supervision","*",", collecte des statistiques Engine/Broker, Host Discovery"))))),(0,r.kt)(a.Z,{value:"Legacy (ex-Centcore)",label:"Legacy (ex-Centcore)",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Communications"),(0,r.kt)("th",{parentName:"tr",align:null},"Actions autoris\xe9es"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Central")," <-- ",(0,r.kt)("em",{parentName:"td"},"SSH")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Poller")),(0,r.kt)("td",{parentName:"tr",align:null},"Actions de supervision","*",", collecte des statistiques Engine/Broker, Host Discovery")))))),(0,r.kt)("p",null,"*"," Les actions de supervision sont toutes les actions disponibles dans\nl'interface web comme ajouter des temps d'arr\xeat, des acquittements, etc et\nexporter la configuration."),(0,r.kt)("h3",{id:"avec-remote-server"},"Avec Remote Server"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Moderne (recommand\xe9)",label:"Moderne (recommand\xe9)",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Communications"),(0,r.kt)("th",{parentName:"tr",align:null},"Actions autoris\xe9es"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Central")," <-- ",(0,r.kt)("em",{parentName:"td"},"ZMQ")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Remote")," <-- ",(0,r.kt)("em",{parentName:"td"},"ZMQ")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Poller")),(0,r.kt)("td",{parentName:"tr",align:null},"Actions de supervision","*",", collecte des statistiques Engine/Broker, Host Discovery"))))),(0,r.kt)(a.Z,{value:"Mixed",label:"Mixed",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Communications"),(0,r.kt)("th",{parentName:"tr",align:null},"Actions autoris\xe9es"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Central")," <-- ",(0,r.kt)("em",{parentName:"td"},"ZMQ")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Remote")," <-- ",(0,r.kt)("em",{parentName:"td"},"SSH")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Poller")),(0,r.kt)("td",{parentName:"tr",align:null},"Actions de supervision","*",", collecte des statistiques Engine/Broker, Host Discovery"))))),(0,r.kt)(a.Z,{value:"Legacy (ex-Centcore)",label:"Legacy (ex-Centcore)",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Communications"),(0,r.kt)("th",{parentName:"tr",align:null},"Actions autoris\xe9es"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Central")," <-- ",(0,r.kt)("em",{parentName:"td"},"SSH")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Remote")," <-- ",(0,r.kt)("em",{parentName:"td"},"SSH")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Poller")),(0,r.kt)("td",{parentName:"tr",align:null},"Actions de supervision","*",", collecte des statistiques Engine/Broker (seulement Remote), Host Discovery (seulement Remote)"))))),(0,r.kt)(a.Z,{value:"Autre (non recommand\xe9)",label:"Autre (non recommand\xe9)",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Communications"),(0,r.kt)("th",{parentName:"tr",align:null},"Actions autoris\xe9es"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Central")," <-- ",(0,r.kt)("em",{parentName:"td"},"SSH")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Remote")," <-- ",(0,r.kt)("em",{parentName:"td"},"ZMQ")," --",">"," ",(0,r.kt)("strong",{parentName:"td"},"Poller")),(0,r.kt)("td",{parentName:"tr",align:null},"Actions de supervision","*")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ce mode ne permet pas de r\xe9cup\xe9rer l'empreinte du Remote et rend donc\nimpossible l'affichage de la configuration du Gorgone du Poller depuis\nl'interface web.")))),(0,r.kt)("p",null,"*"," Les actions de supervision sont toutes les actions disponibles dans\nl'interface web comme ajouter des temps d'arr\xeat, des acquittements, etc et\nexporter la configuration."),(0,r.kt)("h2",{id:"changer-la-communication-de-ssh-\xe0-zmq"},"Changer la communication de SSH \xe0 ZMQ"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Pour un Poller",label:"Pour un Poller",mdxType:"TabItem"},(0,r.kt)("h4",{id:"s\xe9lectionner-le-type-de-communication"},"S\xe9lectionner le type de communication"),(0,r.kt)("p",null,"Depuis le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Collecteurs"),", \xe9diter la configuration du Poller,\net s\xe9lectionner ",(0,r.kt)("strong",{parentName:"p"},"ZMQ")," comme ",(0,r.kt)("strong",{parentName:"p"},"Gorgone connection protocol"),"."),(0,r.kt)("p",null,"D\xe9finir le ",(0,r.kt)("strong",{parentName:"p"},"port")," ad\xe9quat (le port ",(0,r.kt)("strong",{parentName:"p"},"5556")," est recommand\xe9)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(43860).Z,width:"1345",height:"486"})),(0,r.kt)("p",null,"Cliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h4",{id:"afficher-la-configuration-de-gorgone"},"Afficher la configuration de Gorgone"),(0,r.kt)("p",null,"Depuis la liste des Pollers, cliquer sur l'icon d'action ",(0,r.kt)("strong",{parentName:"p"},"Gorgone\nconfiguration")," sur la ligne correspondant \xe0 votre Poller ",(0,r.kt)("img",{alt:"image",src:t(52942).Z+"#thumbnail2",width:"32",height:"32"})),(0,r.kt)("p",null,"Une pop-in affiche la configuration \xe0 copier dans le ",(0,r.kt)("strong",{parentName:"p"},"terminal du Poller"),".\nCliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Copy to clipboard"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(2445).Z,width:"1316",height:"441"})),(0,r.kt)("p",null,"Coller le contenu du presse-papier directement dans le ",(0,r.kt)("strong",{parentName:"p"},"terminal du Poller"),"\ncar celui-ci cr\xe9era le fichier de configuration attendu :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml\nname:  gorgoned-My Poller\ndescription: Configuration for poller My Poller\ngorgone:\n  gorgonecore:\n    id: 2\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\nEOF\n')),(0,r.kt)("p",null,"Appuyer sur la touche entr\xe9e pour que la commande soit appliqu\xe9e."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez copier la configuration en s\xe9lectionnant le contenu de la popin\npour la copier dans un fichier de configuration personnalis\xe9.")),(0,r.kt)("h4",{id:"d\xe9marrer-le-daemon-gorgone"},"D\xe9marrer le daemon Gorgone"),(0,r.kt)("p",null,"Depuis le Poller, ex\xe9cuter la commande suivante pour d\xe9marrer le service\nGorgone :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start gorgoned\n")),(0,r.kt)("p",null,"Assurez vous que le service est d\xe9marr\xe9 en ex\xe9cutant la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status gorgoned\n")),(0,r.kt)("p",null,"Le r\xe9sultat devrait \xeatre similaire :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u25cf gorgoned.service - Centreon Gorgone\n   Loaded: loaded (/etc/systemd/system/gorgoned.service; disabled; vendor preset: disabled)\n   Active: active (running) since Mon 2020-03-24 19:45:00 CET; 20h ago\n Main PID: 28583 (perl)\n   CGroup: /system.slice/gorgoned.service\n           \u251c\u250028583 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info\n           \u251c\u250028596 gorgone-dbcleaner\n           \u251c\u250028597 gorgone-engine\n           \u2514\u250028598 gorgone-action\n\nMar 24 19:45:00 localhost.localdomain systemd[1]: Started Centreon Gorgone.\n")),(0,r.kt)("p",null,"Enfin, activez le d\xe9marrage automatique du service avec la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable gorgoned\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"S'il y a un Remote Server entre le Central et ce Poller, assurez-vous\nd'exporter la configuration du Remote Server."),(0,r.kt)("p",{parentName:"blockquote"},"Depuis la liste des Pollers, s\xe9lectionner le Remote Server et cliquer sur\n",(0,r.kt)("strong",{parentName:"p"},"Export configuration"),"."),(0,r.kt)("p",{parentName:"blockquote"},"S\xe9lectionner ensuite les trois premi\xe8res cases puis cliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Export"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Enfin, red\xe9marrer le d\xe9mon Gorgone du Remote Server en ex\xe9cutant la commande\nsuivante :"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")))),(0,r.kt)(a.Z,{value:"Pour un Remote Server",label:"Pour un Remote Server",mdxType:"TabItem"},(0,r.kt)("h4",{id:"s\xe9lectionner-le-type-de-communication-1"},"S\xe9lectionner le type de communication"),(0,r.kt)("p",null,"Depuis le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Collecteurs"),", \xe9diter la configuration du Remote\nServer, et s\xe9lectionner ",(0,r.kt)("strong",{parentName:"p"},"ZMQ")," comme ",(0,r.kt)("strong",{parentName:"p"},"Gorgone connection protocol"),"."),(0,r.kt)("p",null,"D\xe9finir le ",(0,r.kt)("strong",{parentName:"p"},"port")," ad\xe9quat (le port ",(0,r.kt)("strong",{parentName:"p"},"5556")," est recommand\xe9)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(70690).Z,width:"1344",height:"545"})),(0,r.kt)("p",null,"Cliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h4",{id:"afficher-la-configuration-de-gorgone-1"},"Afficher la configuration de Gorgone"),(0,r.kt)("p",null,"Depuis la liste des Pollers, cliquer sur l'icon d'action ",(0,r.kt)("strong",{parentName:"p"},"Gorgone\nconfiguration")," sur la ligne correspondant \xe0 votre Remote Server ",(0,r.kt)("img",{alt:"image",src:t(52942).Z+"#thumbnail2",width:"32",height:"32"})),(0,r.kt)("p",null,"Une pop-in affiche la configuration \xe0 copier dans le ",(0,r.kt)("strong",{parentName:"p"},"terminal du Remote\nServer"),".\nCliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Copy to clipboard"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(42764).Z,width:"1320",height:"326"})),(0,r.kt)("p",null,"Coller le contenu du presse-papier directement dans le ",(0,r.kt)("strong",{parentName:"p"},"terminal du Remote\nServer")," car celui-ci cr\xe9era le fichier de configuration attendu :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml\nname: gorgoned-My Remote Server\ndescription: Configuration for remote server My Remote Server\ngorgone:\n  gorgonecore:\n    id: 3\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: cron\n      package: "gorgone::modules::core::cron::hooks"\n      enable: true\n      cron: !include cron.d/*.yaml\n\n    - name: nodes\n      package: gorgone::modules::centreon::nodes::hooks\n      enable: true\n\n    - name: proxy\n      package: gorgone::modules::core::proxy::hooks\n      enable: true\n\n    - name: legacycmd\n      package: gorgone::modules::centreon::legacycmd::hooks\n      enable: true\n      cmd_file: "/var/lib/centreon/centcore.cmd"\n      cache_dir: "/var/cache/centreon/"\n      cache_dir_trap: "/etc/snmp/centreon_traps/"\n      remote_dir: "/var/cache/centreon/config/remote-data/"\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n    - name: statistics\n      package: "gorgone::modules::centreon::statistics::hooks"\n      enable: true\n      broker_cache_dir: "/var/cache/centreon/broker-stats/"\n      cron:\n        - id: broker_stats\n          timespec: "*/5 * * * *"\n          action: BROKERSTATS\n          parameters:\n            timeout: 10\n        - id: engine_stats\n          timespec: "*/5 * * * *"\n          action: ENGINESTATS\n          parameters:\n            timeout: 10\n\nEOF\n')),(0,r.kt)("p",null,"Appuyer sur la touche entr\xe9e pour que la commande soit appliqu\xe9e."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez copier la configuration en s\xe9lectionnant le contenu de la popin\npour la copier dans un fichier de configuration personnalis\xe9.")),(0,r.kt)("h4",{id:"red\xe9marrer-le-daemon-gorgone"},"Red\xe9marrer le daemon Gorgone"),(0,r.kt)("p",null,"Depuis le Remote Server, ex\xe9cuter la commande suivante pour red\xe9marrer le\nservice Gorgone :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")),(0,r.kt)("p",null,"Assurez vous que le service est d\xe9marr\xe9 en ex\xe9cutant la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status gorgoned\n")),(0,r.kt)("p",null,"Le r\xe9sultat devrait \xeatre similaire :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u25cf gorgoned.service - Centreon Gorgone\n   Loaded: loaded (/etc/systemd/system/gorgoned.service; enabled; vendor preset: disabled)\n   Active: active (running) since Wed 2020-03-24 19:45:00 CET; 6s ago\n Main PID: 30902 (perl)\n   CGroup: /system.slice/gorgoned.service\n           \u251c\u250030902 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info\n           \u251c\u250030916 gorgone-nodes\n           \u251c\u250030917 gorgone-dbcleaner\n           \u251c\u250030924 gorgone-proxy\n           \u251c\u250030925 gorgone-proxy\n           \u251c\u250030938 gorgone-proxy\n           \u251c\u250030944 gorgone-proxy\n           \u251c\u250030946 gorgone-proxy\n           \u251c\u250030959 gorgone-engine\n           \u251c\u250030966 gorgone-action\n           \u2514\u250030967 gorgone-legacycmd\n\nMar 24 19:45:00 localhost.localdomain systemd[1]: Started Centreon Gorgone.\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pour forcer le Gorgone du Central \xe0 changer le mode de communication"),",\nred\xe9marrez le avec la commande suivante depuis le ",(0,r.kt)("strong",{parentName:"p"},"serveur Central")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")))}b.isMDXComponent=!0},52942:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzODE5OUMzODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzODE5OUM0ODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM4MTk5QzE4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM4MTk5QzI4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/QN5jAAADoUlEQVR42uxXW0iTURz/f3Nzm2O2uTTmZV6gHhStrOiiZaBBFkoSSJGg0UOlJIEPlq/R7SW0LKzAygp6KYqCKHroMiG76sOM1oVodjEv+9zaxd2+/mc7jem+uc0+8aUDP853Lv//+Z3/bWdMSUlpOgCcQpQhkkD49hLRotc/G+BbFCM6ETUwd60ccRVRxLcoQlTA3LfCSAvEAkzI+AnisUCHZiMaom0iBHwh45uIM/Gcgr7lnS8tXZ8XCwHRtLFGQLNnxbJJBPPc5p2AeIa1BMSaKHuIr0OH/RgTE0IRWEBiLM4LbUPcEYqADdGGkMahb0BIF0wijs82DYUgoEDcpn2sMdCEhN4KGYQbEIlx6FMJaQFLLP6fSxcQC6ygfawuMCAhi5Bp2Pc/DaMp6N1zXUs8QV9U3cylr+n+hV1ddtXnPlj4cxDUw+8B54VNQ6dCI/lUVK0FpzUVZMrwTJEpgc2v8APsZjJzFHEaMfzPaTiSswqMa+vxBakOzknlDJpMxIHDy4RpCuxro++DxtA4menX0IpIpcEYRG/dhVZj+cGA0kQUFzPQlJ8MltpMGK3RMlXZPO/aBOQkFXnxK51atTEWC3C0FgTznekxNYCXO0nGJ1aqwOYBOGKwQOfqQP3RSBm4XJICmiEH4L4pmjqXqxJ+e3xw6BVLZs5S3demW2AsEhsMolzsusj34aUqaC1MRmujZrcPQo4Cs8sXLuzjwIqHExkiSxshkSue5obtEZ9l1l+7QZkm3aJLgmPFyf4prTwgWvloFLrXqfFwDur0Y1Nv/zcmEwKhQWRfj7tcD012oqRnugvKKHiqAppOmTZlqhrJtKBJH5jskHHL6b8p3+EkBrZmyqcYNLik0+kKIv1pCG2pmM8/CjbBhwkvuDgGyrVSSJGKgMVb941MBg7n+GVbChbAzrxAcLa9scAVo5VkGHk5bSYEntJoz0B4aQEKg8Rln5TaWd+4rliiH3bCuJvzkyA3e2fxgMHs5j28Nk8BF9E9LiTY+JyFDkMwrutJHWM4jourdGIwNmPXQb6XpCRCO2ZDZYYM7poccOOLA/rZAJFlKgnsyJFDVZYc7n9zwt4XZqeJdcuomn2I83598RKgJGpoVcsk4xx1IntgscKXpRDL5GImycNxdoebsxkt7tH2j7Zk1urJoKJDiP2Ie0FdsyFASSzCrpkWlWgPEZL85/hK8awJhBAh1a0EsRGRT6sdad8Rg/S/Zi8dh7U/AgwAYk04ZraQjHUAAAAASUVORK5CYII="},43860:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/poller-edit-zmq-3bdf0b81ace574822de00b5600cf5a97.png"},2445:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/poller-gorgone-display-config-ac7632af3deb3baa1094b65fa668e36b.png"},70690:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/remote-edit-zmq-40834c7cdb7d7a2aa05a531348749a37.png"},42764:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/remote-gorgone-display-config-dbedb13a4b5bfb710aff0e220511293d.png"}}]);