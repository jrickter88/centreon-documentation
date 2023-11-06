"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"knowledge-base",title:"Knowledge Base"},s=void 0,p={unversionedId:"administration/knowledge-base",id:"version-23.10/administration/knowledge-base",title:"Knowledge Base",description:"Introduction",source:"@site/versioned_docs/version-23.10/administration/knowledge-base.md",sourceDirName:"administration",slug:"/administration/knowledge-base",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/administration/knowledge-base",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/administration/knowledge-base.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"knowledge-base",title:"Knowledge Base"},sidebar:"version-23.10/docs",previous:{title:"Backup",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/administration/backup"},next:{title:"Logging configuration changes",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/administration/logging-configuration-changes"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure the access to the wiki",id:"configure-the-access-to-the-wiki",level:2},{value:"User guide",id:"user-guide",level:2},{value:"Definition",id:"definition",level:3},{value:"Displayed procedure: template and overload",id:"displayed-procedure-template-and-overload",level:3},{value:"Create / Update / Delete a procedure",id:"create--update--delete-a-procedure",level:3},{value:"Link from monitoring front end",id:"link-from-monitoring-front-end",level:3},{value:"Synchronization",id:"synchronization",level:3},{value:"Best practice for deployment",id:"best-practice-for-deployment",level:3}],u={toc:d},m="wrapper";function h(e){var{components:t}=e,l=o(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},u,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Since version 2.8.0, in the Centreon Open Source suite, the ",(0,r.kt)("strong",{parentName:"p"},"Knowledge Base")," module allows you"),(0,r.kt)("p",null,"to easily associate a wiki with Centreon Web."),(0,r.kt)("p",null,"It creates links between hosts and services and specific procedures on the wiki."),(0,r.kt)("p",null,"To make things more flexible, procedures can be associated with templates."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Knowledge Base")," is the solution to easily link a Wiki to Centreon."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Centreon Knowledge Base")," requires ",(0,r.kt)("strong",{parentName:"p"},"MediaWiki")," to be installed (version =\n1.31) on your system."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"http://www.mediawiki.org/wiki/MediaWiki"},"download MediaWiki\nhere")," and access the ",(0,r.kt)("a",{parentName:"p",href:"http://www.mediawiki.org/wiki/User_hub"},"documentation\nhere"),"."),(0,r.kt)("h2",{id:"configure-the-access-to-the-wiki"},"Configure the access to the wiki"),(0,r.kt)("p",null,"Before starting with ",(0,r.kt)("strong",{parentName:"p"},"Knowledge Base"),", you need to configure it to access the\nwiki database."),(0,r.kt)("p",null,"To do this, go to ",(0,r.kt)("strong",{parentName:"p"},"Administration > Parameters > Knowledge Base")," and complete\nthe form"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(58913).Z,width:"1361",height:"284"})),(0,r.kt)("h2",{id:"user-guide"},"User guide"),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A procedure is basically a technical document that tells operators\nwhat to do when an alert is raised in Centreon."),(0,r.kt)("p",null,"There are different types of procedure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Describe actions to solve a problem,"),(0,r.kt)("li",{parentName:"ul"},"Escalate the issue to another team,"),(0,r.kt)("li",{parentName:"ul"},"Open a support ticket,"),(0,r.kt)("li",{parentName:"ul"},"Warn users that a specific service is down.")),(0,r.kt)("p",null,"A procedure can be defined for a host or a service."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(93097).Z,width:"1858",height:"534"})),(0,r.kt)("h3",{id:"displayed-procedure-template-and-overload"},"Displayed procedure: template and overload"),(0,r.kt)("p",null,"To avoid a heavy workload caused by the deployment of the procedure, the functionality allows\nthe administrator to set up a single procedure for hosts/services."),(0,r.kt)("p",null,"This means that a procedure can be specified for a given host/service, but it can also be specified\nfor a host/service template."),(0,r.kt)("p",null,"If a procedure is defined at template level, all children of the template will\nhave the procedure attached as well, unless overloaded by a specific one. The\nmechanism is identical to the template system in Centreon with inheritance."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Knowledge Base")," function is designed to avoid manually adding or updating\nthe same procedure in the knowledge base several times."),(0,r.kt)("p",null,"When a user clicks a host procedure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if a specific procedure is defined for this host, its wiki page is displayed"),(0,r.kt)("li",{parentName:"ul"},"if no specific procedure is defined but the host template has a procedure,\nthe host template wiki page is displayed"),(0,r.kt)("li",{parentName:"ul"},"if the host template has no procedure defined, the parent template will be checked\nfor a defined procedure"),(0,r.kt)("li",{parentName:"ul"},"finally, if no procedure is defined in the template tree, a message will warn\nthat there is no procedure defined for this host")),(0,r.kt)("p",null,"The same applies to services."),(0,r.kt)("h3",{id:"create--update--delete-a-procedure"},"Create / Update / Delete a procedure"),(0,r.kt)("p",null,"Navigate in the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Knowledge Base")," sub-menus"),(0,r.kt)("p",null,"to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List Hosts / Services / Host Templates / Service Templates and attached\nprocedures"),(0,r.kt)("li",{parentName:"ul"},"Create / View / Edit / View history for a Host / Services / Host Templates /\nService Templates"),(0,r.kt)("li",{parentName:"ul"},"List Hosts / Services / Host Templates / Service Templates without defined\nprocedures")),(0,r.kt)("h3",{id:"link-from-monitoring-front-end"},"Link from monitoring front end"),(0,r.kt)("p",null,"The technical procedure is available in Centreon front-end through a link icon:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(21421).Z,width:"1674",height:"387"})),(0,r.kt)("p",null,"By clicking the link icon, the user is redirected to the corresponding procedure."),(0,r.kt)("p",null,"If the link icon is on the left of a host name, the wiki page containing the\nprocedure for the host will be displayed."),(0,r.kt)("p",null,"If the link icon is on the right of a service name, the wiki page containing the\nprocedure for the service will be displayed."),(0,r.kt)("h3",{id:"synchronization"},"Synchronization"),(0,r.kt)("p",null,"There is a cron job that updates hosts, services and hosts/services template\nconfigurations."),(0,r.kt)("p",null,"For example, if you create a page in the wiki using the usual pattern (e.g.:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Host:Centreon-Server")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Service:Centreon-Server Disk-/"),"), the cron will add\nthe link to the page in the ",(0,r.kt)("strong",{parentName:"p"},"URL")," field of object's extended information."),(0,r.kt)("h3",{id:"best-practice-for-deployment"},"Best practice for deployment"),(0,r.kt)("p",null,"To deploy procedures in the best way, we strongly advise you to use the multi\nlevel inheritance system."),(0,r.kt)("p",null,"The best practice is to define procedures at template level as much as you can."),(0,r.kt)("p",null,"Here is an example of a host template configuration tree:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux ",">"," Generic-hosts"),(0,r.kt)("li",{parentName:"ul"},"Windows ",">"," Generic-hosts"),(0,r.kt)("li",{parentName:"ul"},"RedHat ",">"," Linux"),(0,r.kt)("li",{parentName:"ul"},"Debian ",">"," Linux"),(0,r.kt)("li",{parentName:"ul"},"Active-Directory ",">"," Windows"),(0,r.kt)("li",{parentName:"ul"},"LDAP ",">"," Linux")),(0,r.kt)("p",null,"To set up procedures for the ",(0,r.kt)("em",{parentName:"p"},"RedHat")," host template, just proceed as indicated in\n",(0,r.kt)("a",{parentName:"p",href:"#link-from-monitoring-front-end"},"Link from monitoring front end"),"."),(0,r.kt)("p",null,"In the template tree, we see that the ",(0,r.kt)("strong",{parentName:"p"},"RedHat")," template inherits from two other\ntemplates: ",(0,r.kt)("strong",{parentName:"p"},"Linux")," and ",(0,r.kt)("strong",{parentName:"p"},"Generic-hosts"),". In this example, all hosts using the\n",(0,r.kt)("em",{parentName:"p"},"RedHat")," host template will have the new procedure defined attached."),(0,r.kt)("p",null,"We could set up a procedure at a higher level in the template tree, and it will\nimpact more hosts."),(0,r.kt)("p",null,"For example, if we define a procedure for a ",(0,r.kt)("strong",{parentName:"p"},"Linux")," host template, all hosts\nusing ",(0,r.kt)("strong",{parentName:"p"},"RedHat"),", ",(0,r.kt)("strong",{parentName:"p"},"Debian")," and ",(0,r.kt)("strong",{parentName:"p"},"LDAP")," host templates will have the procedure\nattached by inheritance. This is because ",(0,r.kt)("strong",{parentName:"p"},"Linux")," is the parent template."),(0,r.kt)("p",null,"Service templates behave in the same way."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To delete a procedure link for a specific host / service / template, edit the")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"object and empty the ",(0,r.kt)("strong",{parentName:"p"},"URL")," field on the ",(0,r.kt)("strong",{parentName:"p"},"Extended Information")," tab.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the object inherits of a procedure from any template, the empty value will\noverload and delete the procedure link.")))}h.isMDXComponent=!0},93097:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/parameters-wiki-article-400bcb8826bfb12975e854ae173abcc8.png"},21421:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/parameters-wiki-host-monitoring-d0e3c00fda35eced9a9325f16632c00a.png"},58913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/parameters-wiki-be037b25b5a937cd79dfc1fe2ecaafcb.png"}}]);