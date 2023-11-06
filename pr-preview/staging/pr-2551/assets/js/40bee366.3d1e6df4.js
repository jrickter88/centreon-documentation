"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[18043],{95864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>m});r(67294);var n=r(3905),a=r(51715),o=r(7626);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"migrate",title:"Migrate the extension"},s=void 0,u={unversionedId:"service-mapping/migrate",id:"version-23.10/service-mapping/migrate",title:"Migrate the extension",description:"If you are updating to a new major or minor version (i.e: A.B.x with A",source:"@site/versioned_docs/version-23.10/service-mapping/migrate.md",sourceDirName:"service-mapping",slug:"/service-mapping/migrate",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/service-mapping/migrate",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/service-mapping/migrate.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"migrate",title:"Migrate the extension"},sidebar:"version-23.10/docs",previous:{title:"Upgrade the extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/service-mapping/upgrade"},next:{title:"Install on a Remote Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/service-mapping/remote-server"}},d={},m=[{value:"Update the package",id:"update-the-package",level:2},{value:"Update through the interface",id:"update-through-the-interface",level:2}],g={toc:m},b="wrapper";function v(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(b,p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you are updating to a new major or minor version (i.e: A.B.x with A\nor B that changes), you need to contact our Support service to retrieve\nthe new repository.")),(0,n.kt)("h2",{id:"update-the-package"},"Update the package"),(0,n.kt)("p",null,"In order to update the Centreon BAM module using an RPM package, execute the\nfollowing command:"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon-bam-server\n"))),(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon-bam-server\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt upgrade centreon-bam-server\n")))),(0,n.kt)("h2",{id:"update-through-the-interface"},"Update through the interface"),(0,n.kt)("p",null,"Log on to the Centreon web interface and go to\n",(0,n.kt)("inlineCode",{parentName:"p"},"Administration > Extension > Manager"),"."),(0,n.kt)("p",null,"Click the orange button to update the module, and do the same for the widget."))}v.isMDXComponent=!0}}]);