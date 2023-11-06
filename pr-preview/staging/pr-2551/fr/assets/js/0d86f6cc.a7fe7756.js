"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[61166],{51641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),o=n(51715),a=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"nagios-to-centreon",title:"Nagios Reader vers Centreon CLAPI"},p=void 0,u={unversionedId:"migrate/nagios-to-centreon",id:"version-23.10/migrate/nagios-to-centreon",title:"Nagios Reader vers Centreon CLAPI",description:"Nagios Reader to Centreon CLAPI est un projet libre et open source qui",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/nagios-to-centreon.md",sourceDirName:"migrate",slug:"/migrate/nagios-to-centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/migrate/nagios-to-centreon",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/migrate/nagios-to-centreon.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"nagios-to-centreon",title:"Nagios Reader vers Centreon CLAPI"},sidebar:"version-23.10/docs",previous:{title:"Migration depuis une plateforme Centreon 3.4",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/migrate/migrate-from-3-4"},next:{title:"Migration d'une plate-forme avec Poller Display",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/migrate/poller-display-to-remote-server"}},d={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Utilisation",id:"utilisation",level:2}],g={toc:m},f="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nagios Reader to Centreon CLAPI")," est un projet libre et open source qui\npermet d'analyser une configuration Nagios contenue dans les fichiers CFG et de\ntransformer celle-ci en commandes compatibles Centreon CALPI afin de pouvoir\nimporter les objets dans l'interface Centreon web."),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Avant toute chose vous devez avoir une plate-forme Centreon install\xe9e et pr\xeate \xe0\nl'emploi. Se r\xe9f\xe9rer \xe0 la documentation\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/installation/installation-of-a-central-server/using-packages"},"d'installation de Centreon"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Le script n\xe9cessite le module Perl-Nagios-Object pour lire les fichiers CFG.\nPour installer ce dernier, ex\xe9cutez les commandes suivantes sur votre serveur\nNagios(R) :"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install perl-Module-Build\n"))),(0,r.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install perl-Module-Build\n"))),(0,r.kt)(a.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install libmodule-build-perl\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp\nwget http://search.cpan.org/CPAN/authors/id/D/DU/DUNCS/Nagios-Object-0.21.20.tar.gz\ntar xzf Nagios-Object-0.21.20.tar.gz\ncd Nagios-Object-0.21.20\nperl Build.PL\n./Build\n./Build test\n./Build install\n")),(0,r.kt)("p",null,"Puis t\xe9l\xe9charger le script depuis GitHub sur votre serveur Nagios(R) :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp\ngit clone https://github.com/centreon/nagiosToCentreon.git\ncd nagiosToCentreon\n")),(0,r.kt)("h2",{id:"utilisation"},"Utilisation"),(0,r.kt)("p",null,'Sur une nouvelle installation de Centreon, le collecteur par d\xe9faut est appel\xe9\n"Central". Si le nom de ce dernier est diff\xe9rent, vous devez modifier le script\npour modifier le nom par d\xe9faut \xe0 la ligne 65 :'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my $default_poller = "Central";\n')),(0,r.kt)("p",null,"Pour afficher l'aide, ex\xe9cutez la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ perl nagios_reader_to_centreon_clapi.pl --help\n######################################################\n#    Copyright (c) 2005-2015 Centreon                #\n#    Bugs to http://github.com/nagiosToCentreon      #\n######################################################\n\nUsage: nagios_reader_to_centreon_clapi.pl\n    -V (--version) Show script version\n    -h (--help)    Usage help\n    -C (--config)  Path to nagios.cfg file\n")),(0,r.kt)("p",null,"Pour ex\xe9cuter le script lancer la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"perl nagios_reader_to_centreon_clapi.pl --config /usr/local/nagios/etc/ > /tmp/centreon_clapi_import_commands.txt\n")),(0,r.kt)("p",null,"Exportez le fichier ",(0,r.kt)("strong",{parentName:"p"},"/tmp/centreon","_","clapi","_","import","_","commands.txt")," sur votre\nserveur Centreon."),(0,r.kt)("p",null,"Enfin ex\xe9cutez la commande suivante pour importer les objets dans Centreon web :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/share/centreon/bin/centreon -u admin -p <PASSWORD> -i /tmp/centreon_clapi_import_commands.txt\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<PASSWORD>"))," par le mot de passe de l'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"admin")," de\nCentreon web.")))}b.isMDXComponent=!0}}]);