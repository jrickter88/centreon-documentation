"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"chart-virtual-metrics",title:"Virtual metrics"},c=void 0,s={unversionedId:"metrology/chart-virtual-metrics",id:"version-23.10/metrology/chart-virtual-metrics",title:"Virtual metrics",description:"Definition",source:"@site/versioned_docs/version-23.10/metrology/chart_virtual_metrics.md",sourceDirName:"metrology",slug:"/metrology/chart-virtual-metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/metrology/chart-virtual-metrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/metrology/chart_virtual_metrics.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"chart-virtual-metrics",title:"Virtual metrics"},sidebar:"version-23.10/docs",previous:{title:"Curves",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/metrology/chart-curves"},next:{title:"Centreon plugin for Grafana",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/metrology/grafana"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"CDEF vs VDEF",id:"cdef-vs-vdef",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function f(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,'"Virtual metrics" means the display of curves resulting from the processing / aggregation of data from a set of data.\nThe set of data corresponds to various values of curves in the period covered by the graph.\nThe creation of virtual metrics is based on the RPN (Reverse Polish Notation) language.'),(0,n.kt)("p",null,"Two types of data set are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CDEF: this command creates a new set of points starting from one or more series of data. The aggregation is performed\non each point (data)."),(0,n.kt)("li",{parentName:"ul"},"VDEF: the result of each aggregation is a value and a time component. This result can also be used in the miscellaneous\ngraph and printing elements.")),(0,n.kt)("h3",{id:"cdef-vs-vdef"},"CDEF vs VDEF"),(0,n.kt)("p",null,"The CDEF type works on a set of points (data table). The result of the processing (e.g.: division by 8 to convert\nbits into bytes) will be a set of points. The VDEF type enables us to extract the maximum from a set of points."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information on RPN-type notation, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://oss.oetiker.ch/rrdtool/doc/rrdgraph_rpn.en.html"},"official RRD documentation"),".")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Monitoring ",">"," Performances ",">"," Virtual Metrics")," menu"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(18168).Z,width:"1063",height:"481"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Metric name")," field defines the name of the metric."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Host/Service Data Source")," list can be used to define the service from which to work on the metrics."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"DEF Type")," field defines the type of data set used to calculate the virtual curve."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"RPN (Reverse Polish Notation) Function")," field defines the formula to be used to calculate the virtual metric.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is not possible to add together the metrics of different services. However, it is possible to add virtual metrics\nfor the calculation of a new metric.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Metric Unit")," field defines the units of the metric."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Warning threshold")," field defines the alert threshold to be displayed on the graph."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Critical threshold")," field defines the critical threshold to be displayed on the graph."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Hidden Graph and Legend")," box is checked, the curve and the legend are hidden."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Comment")," field can be used comment on the metric.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Configuration:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(34554).Z,width:"2736",height:"639"})),(0,n.kt)("p",null,"Result:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(22123).Z,width:"2742",height:"718"})))}f.isMDXComponent=!0},18168:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02addvmetric-f2a5dc11795f3765deeed3d8a7e727ef.png"},34554:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02virtualmetric_conf-330000d821ea689bf969c2cb4180637a.png"},22123:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02virtualmetric_example-b3a3f18d02492c8a142f9e03ed6d7c70.png"}}]);