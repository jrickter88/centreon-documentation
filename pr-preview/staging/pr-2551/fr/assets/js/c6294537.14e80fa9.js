"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[24507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=s(n),d=o,f=l["".concat(p,".").concat(d)]||l[d]||g[d]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"introduction",title:"Getting started - Plugin development"},p=void 0,s={unversionedId:"integrations/plugin-packs/dev-resources/introduction",id:"integrations/plugin-packs/dev-resources/introduction",title:"Getting started - Plugin development",description:"This section aims to give an overview of the centreon-plugins philosophy and how",source:"@site/pp/integrations/plugin-packs/dev-resources/introduction.md",sourceDirName:"integrations/plugin-packs/dev-resources",slug:"/integrations/plugin-packs/dev-resources/introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/dev-resources/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/dev-resources/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Getting started - Plugin development"},sidebar:"pp",previous:{title:"Release Notes",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/releases/release-notes"},next:{title:"Plugins development guidelines",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/dev-resources/plugins-guidelines"}},u={},l=[],g={toc:l},d="wrapper";function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section aims to give an overview of the centreon-plugins philosophy and how\nyou can leverage the centreon-plugins perl framework (or not) and create Packs on top\nof it."),(0,r.kt)("p",null,"The recommended path is the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/dev-resources/plugins-guidelines"},"Plugins guidelines")," - Understand the major\nconcepts and features you need to know before developing any plugins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/dev-resources/develop-with-centreon-plugins"},"Plugins quickstart guide")," - Get the\nbig picture and understand patterns that will enable you to code with our framework.")),(0,r.kt)("p",null,"Need some help? Unanswered questions? Smoggy concepts? Just reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"Slack")," or on our community platform\n",(0,r.kt)("a",{parentName:"p",href:"https://thewatch.centreon.com"},"The Watch"),". Feel free to submit an idea if you would like to see a specific topic covered within this section."))}f.isMDXComponent=!0}}]);