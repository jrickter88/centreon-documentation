"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[54861],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||l;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},44511:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var t=r(3905);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"developer-gorgone-pull-mode",title:"Configuring Gorgone in pull mode"},c=void 0,p={unversionedId:"developer/developer-gorgone-pull-mode",id:"version-23.10/developer/developer-gorgone-pull-mode",title:"Configuring Gorgone in pull mode",description:"This procedure describes how to configure Gorgone between a distant poller and a central server.",source:"@site/versioned_docs/version-23.10/developer/developer-gorgone-pull-mode.md",sourceDirName:"developer",slug:"/developer/developer-gorgone-pull-mode",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/developer/developer-gorgone-pull-mode",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/developer/developer-gorgone-pull-mode.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"developer-gorgone-pull-mode",title:"Configuring Gorgone in pull mode"},sidebar:"version-23.10/docs",previous:{title:"Managing client/server communication",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/developer/developer-gorgone-client-server-communication"},next:{title:"Configuring Gorgone in rebound mode",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/developer/developer-gorgone-rebound-mode"}},s={},u=[{value:"On the remote poller side",id:"on-the-remote-poller-side",level:2},{value:"Installation requirements",id:"installation-requirements",level:3},{value:"Configuration",id:"configuration",level:3},{value:"On the Central server side",id:"on-the-central-server-side",level:2},{value:"Installation requirements",id:"installation-requirements-1",level:3},{value:"Configuration",id:"configuration-1",level:3}],d={toc:u},g="wrapper";function m(e){var{components:n}=e,r=a(e,["components"]);return(0,t.kt)(g,l(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},d,r),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This procedure describes how to configure Gorgone between a distant poller and a central server."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pull mode allows the poller to act as a client and connect to the Central (which will be the server). ")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pull mode is relevant when firewalls are set on pollers and prevent incoming traffic.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pull mode is relevant when the Central is in the cloud and pollers are not reachable through the usual IP addresses. In that situation, the pull (or reverse) mode is used to make each poller initiate a connection to the public IP address of the Central. Learn more about this use case in ",(0,t.kt)("a",{parentName:"p",href:"https://thewatch.centreon.com/product-how-to-21/how-to-use-the-gorgone-pull-mode-374"},"this article"),"."))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Note: In our case, we have the configuration described below (you must adapt the procedure to your configuration).")),(0,t.kt)("p",null,"Central server:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"address: 10.30.2.203")),(0,t.kt)("p",null,"Distant Poller:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"id: 6 (configured in the Centreon interface as zmq. You can get this ID from the Centreon interface)."),(0,t.kt)("li",{parentName:"ul"},"address: 10.30.2.179"),(0,t.kt)("li",{parentName:"ul"},"rsa public key thumbprint: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s")),(0,t.kt)("h2",{id:"on-the-remote-poller-side"},"On the remote poller side"),(0,t.kt)("h3",{id:"installation-requirements"},"Installation requirements"),(0,t.kt)("p",null,"Ensure the remote poller and Gorgone are already installed."),(0,t.kt)("h3",{id:"configuration"},"Configuration"),(0,t.kt)("p",null,"Configure the file ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," as follows:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'name:  distant-server\ndescription: Configuration for distant server\ngorgone:\n  gorgonecore:\n    id: 6\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n    - name: pull\n      package: "gorgone::modules::core::pull::hooks"\n      enable: true\n      target_type: tcp\n      target_path: 10.30.2.203:5556\n      ping: 1\n')),(0,t.kt)("h2",{id:"on-the-central-server-side"},"On the Central server side"),(0,t.kt)("h3",{id:"installation-requirements-1"},"Installation requirements"),(0,t.kt)("p",null,"Ensure the Central server and Gorgone are already installed."),(0,t.kt)("h3",{id:"configuration-1"},"Configuration"),(0,t.kt)("p",null,"Configure the file ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," as follows:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'...\ngorgone:\n  gorgonecore:\n    ...\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s\n    ...\n  modules:\n    ...\n    - name: register\n      package: "gorgone::modules::core::register::hooks"\n      enable: true\n      config_file: /etc/centreon-gorgone/nodes-register-override.yml\n    ...\n')),(0,t.kt)("p",null,"We created the file ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/nodes-register-override.yml"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"nodes:\n  - id: 6\n    type: pull\n    prevail: 1\n")))}m.isMDXComponent=!0}}]);