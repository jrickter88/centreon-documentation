"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[13768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67676:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),o=r(86010),c=r(30562),i=r(61596);const a={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var l=r(27692);function s({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",a.cardContainer)},t)}function u({href:e,title:t,description:r}){return n.createElement(s,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",a.cardTitle),title:t},t),r&&n.createElement("p",{className:(0,o.Z)("text--truncate",a.cardDescription),title:r},r))}function p({item:e}){const t=(0,c.Wl)(e);return t?n.createElement(u,{href:t,title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function d({item:e}){var t;const r=(0,c.xz)(null!==(t=e.docId)&&void 0!==t?t:void 0);return n.createElement(u,{href:e.href,title:e.label,description:null==r?void 0:r.description})}function m({item:e}){switch(e.type){case"link":return n.createElement(d,{item:e});case"category":return n.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f({className:e}){const t=(0,c.jA)();return n.createElement(y,{items:t.items,className:e})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},19889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905),o=r(67676);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={},s="Getting started",u={unversionedId:"getting-started/welcome",id:"version-23.10/getting-started/welcome",title:"Getting started",description:"Hello and welcome! We are excited to help you begin your Centreon journey.",source:"@site/versioned_docs/version-23.10/getting-started/welcome.md",sourceDirName:"getting-started",slug:"/getting-started/welcome",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/getting-started/welcome",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/welcome.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{},sidebar:"version-23.10/docs",next:{title:"Before you start",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/category/before-you-start"}},p={},d=[],m={toc:d},f="wrapper";function y(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"Hello and welcome! We are excited to help you begin your Centreon journey."),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);