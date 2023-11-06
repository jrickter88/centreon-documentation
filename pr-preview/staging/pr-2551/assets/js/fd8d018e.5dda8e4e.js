"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[7007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"share-view",title:"Share a view"},p=void 0,s={unversionedId:"graph-views/share-view",id:"version-23.10/graph-views/share-view",title:"Share a view",description:"If you want to share a view to someone who may not know Centreon and/or",source:"@site/versioned_docs/version-23.10/graph-views/share-view.md",sourceDirName:"graph-views",slug:"/graph-views/share-view",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/graph-views/share-view",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/graph-views/share-view.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"share-view",title:"Share a view"},sidebar:"version-23.10/docs",previous:{title:"Display views",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/graph-views/display-view"},next:{title:"MAP (Legacy) known issues",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/graph-views/known-issues"}},l={},u=[],d={toc:u},m="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to share a view to someone who may not know Centreon and/or\ndoesn't want to have to connect to Centreon, but only wants to see a Centreon Map\nview, you can create a dedicated limited account and give access only to\nthe dedicated menu, actions and views."),(0,r.kt)("p",null,"How to create the URL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Have a dedicated limited account and copy its autologin key and user name (e.g.:\npartner-1 & ",(0,r.kt)("inlineCode",{parentName:"p"},"autologin key = 23d501aa0\\[\\...\\]8bf4fbc8a"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Know the direct link to go to your view (e.g.:\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://demo.centreon.com/centreon/main.php?p=288#renderGate/View1/xxxx/"),")."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},'You can retrieve the URL by using the "Copy to clipboard" shortcut next to\nthe breadcrumb.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Decide whether or not to hide the Centreon menu (ex: add ",(0,r.kt)("em",{parentName:"p"},"&min=1")," to the URL to minify\nthe menu)"))),(0,r.kt)("p",null,"Here is an example that uses our demo platform so the user (partner-1) directly\naccesses the view in full screen mode (no menu)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.centreon.com/centreon/main.php?autologin=1&min=1&useralias=partner-1&token=23d501aa07a2ebd7cd2d1480d782f898bf4fbc8a&p=288#renderGate/122355/122354/HILLMORE%20Insurance\n")))}f.isMDXComponent=!0}}]);