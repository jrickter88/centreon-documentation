"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[92090],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),a=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=a(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=a(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?t.createElement(g,i(i({ref:r},u),{},{components:n})):t.createElement(g,i({ref:r},u))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var a=2;a<l;a++)i[a]=n[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21618:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>p});n(67294);var t=n(3905);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"developer-gorgone-client-server-communication",title:"G\xe9rer la communication client/serveur"},s=void 0,a={unversionedId:"developer/developer-gorgone-client-server-communication",id:"version-23.10/developer/developer-gorgone-client-server-communication",title:"G\xe9rer la communication client/serveur",description:"Centreon Gorgone est le composant logiciel qui permet la communication du serveur central vers les collecteurs et les serveurs distants. Gorgone d\xe9ploie notamment la configuration des moteurs de supervision.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-gorgone-client-server-communication.md",sourceDirName:"developer",slug:"/developer/developer-gorgone-client-server-communication",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-gorgone-client-server-communication",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-gorgone-client-server-communication.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"developer-gorgone-client-server-communication",title:"G\xe9rer la communication client/serveur"},sidebar:"version-23.10/docs",previous:{title:"Mapping d\u2019\xe9v\xe8nements Centreon Broker",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-broker-mapping"},next:{title:"Configurer Gorgone en mode pull",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-gorgone-pull-mode"}},u={},p=[{value:"G\xe9n\xe9rer les cl\xe9s priv\xe9es et publiques",id:"g\xe9n\xe9rer-les-cl\xe9s-priv\xe9es-et-publiques",level:2},{value:"R\xe9cup\xe9rer l&#39;empreinte au format JWK",id:"r\xe9cup\xe9rer-lempreinte-au-format-jwk",level:2},{value:"D\xe9finir les configurations",id:"d\xe9finir-les-configurations",level:2},{value:"C\xf4t\xe9 serveur",id:"c\xf4t\xe9-serveur",level:3},{value:"C\xf4t\xe9 client",id:"c\xf4t\xe9-client",level:3}],d={toc:p},m="wrapper";function g(e){var{components:r}=e,n=i(e,["components"]);return(0,t.kt)(m,l(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},d,n),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Centreon Gorgone est le composant logiciel qui permet la communication du serveur central vers les collecteurs et les serveurs distants. Gorgone d\xe9ploie notamment la configuration des moteurs de supervision."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Gorgone remplace Centcore depuis la version Centreon 20.04.")),(0,t.kt)("p",null,"Centreon recommande d'utiliser le protocole ZMQ pour la communication entre deux processus ",(0,t.kt)("strong",{parentName:"p"},"gorgoned"),". Lors de l'utilisation du protocole ZMQ, toutes les communications sont chiffr\xe9es \xe0 l'aide d'une cl\xe9 de chiffrement sym\xe9trique bas\xe9 sur les cl\xe9s publiques/priv\xe9es du client et du serveur. Vous devez donc g\xe9n\xe9rer des cl\xe9s publiques/priv\xe9es pour d\xe9finir la configuration."),(0,t.kt)("p",null,"Dans un contexte Centreon :"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"le serveur central a un Gorgone en cours d'ex\xe9cution (par d\xe9faut) en tant que client et peut se connecter \xe0 des serveurs Gorgone fonctionnant sur des serveurs distants et des collecteurs."),(0,t.kt)("li",{parentName:"ul"},"Les serveurs distants disposent de Gorgone fonctionnant (par d\xe9faut) comme client et peuvent se connecter aux serveurs Gorgone fonctionnant sur les collecteurs.")),(0,t.kt)("p",null,"Suivez cette proc\xe9dure pour param\xe9trer la communication entre le client et le serveur."),(0,t.kt)("h2",{id:"g\xe9n\xe9rer-les-cl\xe9s-priv\xe9es-et-publiques"},"G\xe9n\xe9rer les cl\xe9s priv\xe9es et publiques"),(0,t.kt)("p",null,"\xc0 la fois c\xf4t\xe9 client et c\xf4t\xe9 serveur, g\xe9n\xe9rez des cl\xe9s priv\xe9es et publiques au format RSA (format pour le chiffrement des cl\xe9s) en utilisant l'utilisateur ",(0,t.kt)("strong",{parentName:"p"},"centreon"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p /var/spool/centreon/.gorgone/\n$ chmod 700 /var/spool/centreon/.gorgone\n$ openssl genrsa -out /var/spool/centreon/.gorgone/privkey.pem 4092\nGenerating RSA private key, 4092 bit long modulus\n...................................++\n...........................................................................................................................................................................++\ne is 65537 (0x10001)\n$ openssl rsa -in /var/spool/centreon/.gorgone/privkey.pem -out /var/spool/centreon/.gorgone/pubkey.pem -pubout -outform PEM\nwriting RSA key\n$ chmod 644 /var/spool/centreon/.gorgone/pubkey.pem\n$ chmod 600 /var/spool/centreon/.gorgone/privkey.pem\n")),(0,t.kt)("p",null,"Copiez la cl\xe9 publique du serveur dans un r\xe9pertoire sp\xe9cifique c\xf4t\xe9 client (par exemple ",(0,t.kt)("strong",{parentName:"p"},"/var/spool/centreon/.gorgone/<target_id>"),")."),(0,t.kt)("h2",{id:"r\xe9cup\xe9rer-lempreinte-au-format-jwk"},"R\xe9cup\xe9rer l'empreinte au format JWK"),(0,t.kt)("p",null,"C\xf4t\xe9 client, ex\xe9cutez la commande suivante :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"$ perl /usr/local/bin/gorgone_key_thumbprint.pl --key-path='/var/spool/centreon/.gorgone/pubkey.pem'\n2019-09-30 11:00:00 - INFO - File '/var/spool/centreon/.gorgone/pubkey.pem' JWK thumbprint: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4\n")),(0,t.kt)("h2",{id:"d\xe9finir-les-configurations"},"D\xe9finir les configurations"),(0,t.kt)("p",null,"Vous devez faire en sorte que les identifiants Gorgone correspondent aux identifiants des collecteurs Centreon pour b\xe9n\xe9ficier des actions du module de commandes legacy."),(0,t.kt)("h3",{id:"c\xf4t\xe9-serveur"},"C\xf4t\xe9 serveur"),(0,t.kt)("p",null,"Dans le fichier de configuration ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon/confid.d/20-gorgoned.yaml"),", ajoutez les directives suivantes sous la section ",(0,t.kt)("strong",{parentName:"p"},"gorgonecore")," :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"gorgone:\n  gorgonecore:\n    id: 1\n    privkey: /var/spool/centreon/.gorgone/privkey.pem\n    pubkey: /var/spool/centreon/.gorgone/pubkey.pem\n")),(0,t.kt)("p",null,"Ajoutez le module de registre et d\xe9finissez le chemin vers le fichier de configuration d\xe9di\xe9 :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'modules:\n  - name: register\n    package: "gorgone::modules::core::register::hooks"\n    enable: true\n    config_file: /etc/centreon/gorgone-targets.yml\n')),(0,t.kt)("p",null,"Cr\xe9ez le fichier ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon/gorgone-targets.yml")," et renseignez-le suivant cette configuration :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"  nodes:\n  - id: 2\n    type: push_zmq\n    address: 10.1.2.3\n    port: 5556\n")),(0,t.kt)("h3",{id:"c\xf4t\xe9-client"},"C\xf4t\xe9 client"),(0,t.kt)("p",null,"Dans le fichier ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon/config.d/20-gorgoned.yaml"),", ajoutez les directives suivantes :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'gorgone:\n  gorgonecore:\n    id: 2\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    privkey: /var/spool/centreon/.gorgone/privkey.pem\n    pubkey: /var/spool/centreon/.gorgone/pubkey.pem\n    authorized_clients:\n      - key: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4\n')),(0,t.kt)("p",null,"L'entr\xe9e ",(0,t.kt)("strong",{parentName:"p"},"authorized_clients")," vous permet de d\xe9finir l'empreinte de la cl\xe9 publique du client r\xe9cup\xe9r\xe9e pr\xe9c\xe9demment."))}g.isMDXComponent=!0}}]);