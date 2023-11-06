"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[65495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={id:"ot-servicenow",title:"ServiceNow"},c=void 0,s={unversionedId:"integrations/itsm/ot-servicenow",id:"version-23.10/integrations/itsm/ot-servicenow",title:"ServiceNow",description:"How it works",source:"@site/versioned_docs/version-23.10/integrations/itsm/ot-service-now.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-servicenow",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/integrations/itsm/ot-servicenow",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/itsm/ot-service-now.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"ot-servicenow",title:"ServiceNow"},sidebar:"version-23.10/docs",previous:{title:"Serena",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/integrations/itsm/ot-serena"},next:{title:"Notifications",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/integrations/notifications/notifications-overview"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],m={toc:u},d="wrapper";function f(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"ServiceNow open-tickets provider uses the ServiceNow REST API to get\nconfiguration data and open incidents about your monitoring alerts. Since it\ngathers a lot of configurations objects from ServiceNow, it puts them in cache. Loging\nout or waiting 10 hours will flush the cache."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(30809).Z,width:"552",height:"425"})),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"This integration is (at least) compatible with the following ServiceNow\nversions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Madrid"),(0,n.kt)("li",{parentName:"ul"},"London"),(0,n.kt)("li",{parentName:"ul"},"New York")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/docs/alerts-notifications/ticketing#advanced-configuration"},"centreon-open-ticket"),"\ninto your Centreon instance"),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Instance Name"),(0,n.kt)("td",{parentName:"tr",align:null},"MyCompany")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OAuth Client ID"),(0,n.kt)("td",{parentName:"tr",align:null},"xxxxxxxxx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OAuth Client Secret"),(0,n.kt)("td",{parentName:"tr",align:null},"yyyyyyyy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"centreon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"MyPassword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,n.kt)("td",{parentName:"tr",align:null},"https")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"60")))),(0,n.kt)("h2",{id:"possibilities"},"Possibilities"),(0,n.kt)("p",null,"As of now, the provider is able to retrieve the following objects from ServiceNow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Categories"),(0,n.kt)("li",{parentName:"ul"},"Subcategories"),(0,n.kt)("li",{parentName:"ul"},"Impact"),(0,n.kt)("li",{parentName:"ul"},"Urgency"),(0,n.kt)("li",{parentName:"ul"},"Severity"),(0,n.kt)("li",{parentName:"ul"},"Assignment Group"),(0,n.kt)("li",{parentName:"ul"},"Assignment")))}f.isMDXComponent=!0},30809:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ot-service-now-architecture-1ab37b7b9389de8da57329fd6a91009d.png"}}]);