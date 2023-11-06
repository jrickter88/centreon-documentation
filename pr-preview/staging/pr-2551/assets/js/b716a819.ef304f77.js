"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[27317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},41976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"analyze-resources-availability",title:"Analyze resources availability",description:"MBI tutorial"},l=void 0,c={unversionedId:"getting-started/analyze-resources-availability",id:"version-23.10/getting-started/analyze-resources-availability",title:"Analyze resources availability",description:"MBI tutorial",source:"@site/versioned_docs/version-23.10/getting-started/analyze-resources-availability.md",sourceDirName:"getting-started",slug:"/getting-started/analyze-resources-availability",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/getting-started/analyze-resources-availability",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/analyze-resources-availability.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"analyze-resources-availability",title:"Analyze resources availability",description:"MBI tutorial"},sidebar:"version-23.10/docs",previous:{title:"Model your IT services",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/getting-started/model-it-services"},next:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/installation/introduction"}},u={},p=[{value:"Define your requirement",id:"define-your-requirement",level:2},{value:"Select the report design",id:"select-the-report-design",level:2},{value:"Configure the report by &quot;adding a job&quot;",id:"configure-the-report-by-adding-a-job",level:2},{value:"Retrieve the generated report",id:"retrieve-the-generated-report",level:2}],d={toc:p},g="wrapper";function h(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This quick-start guide will show you how to use Centreon MBI to generate your first report!"),(0,n.kt)("p",null,"If you are using the Centreon MBI extension for the first time and you want to\ngenerate an insightful and effective statistical report, this tutorial\nwill help you get started."),(0,n.kt)("p",null,"Follow this simple procedure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Define your requirement."),(0,n.kt)("li",{parentName:"ul"},"Use the documentation to help you select the report design\n(template) that best suits your analysis."),(0,n.kt)("li",{parentName:"ul"},"Configure your report by adding a job."),(0,n.kt)("li",{parentName:"ul"},"Retrieve the report using the interface.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Centreon MBI is a Centreon ",(0,n.kt)("strong",{parentName:"p"},"extension")," that requires a valid license key. To\npurchase one and retrieve the necessary repositories, contact\n",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,n.kt)("h2",{id:"define-your-requirement"},"Define your requirement"),(0,n.kt)("p",null,"Here is an example based on a typical requirement for basic use of\nCentreon MBI: monitoring the availability of IT resources. In this\nscenario, the company's IT manager in charge of the European network\ntells us that the routers seem unreachable at times, and wants us to\nanalyze the problem. To respond, we must retrieve information on the\navailability of the routers located in Europe."),(0,n.kt)("p",null,"Now that the requirement has been identified, we can proceed to the next\nstep."),(0,n.kt)("h2",{id:"select-the-report-design"},"Select the report design"),(0,n.kt)("p",null,"Every report design meets a specific need. Ours is to analyze the\navailability of our routers in Europe. First, we will look at the\nlist of available report designs. We select\nHostgroup-Host-Availability-List. This design lists the availability of\ngroup hosts. In this case, the hosts being monitored happen to be our\nrouters."),(0,n.kt)("h2",{id:"configure-the-report-by-adding-a-job"},'Configure the report by "adding a job"'),(0,n.kt)("p",null,"In Centreon MBI, you configure a report by creating a scheduled job. Go\nto menu: Reporting \u2192 Business Intelligence \u2192 Configuration | Jobs / Add\n(for a new one):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(15071).Z,width:"1919",height:"948"})),(0,n.kt)("p",null,"The job creation form opens on the first tab:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(52841).Z,width:"1612",height:"814"})),(0,n.kt)("p",null,"First, under ",(0,n.kt)("em",{parentName:"p"},"Job Configuration"),", create a name for the job. This will\nbe the name of the report to be generated."),(0,n.kt)("p",null,"Note: In case of a large number of jobs, it is important to\ndefine naming rules."),(0,n.kt)("p",null,"Then specify the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Report design: Hostgroup-Host-Availability-List"),(0,n.kt)("li",{parentName:"ul"},"Language: English"),(0,n.kt)("li",{parentName:"ul"},"Output format: PDF")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(78535).Z,width:"387",height:"358"})),(0,n.kt)("p",null,"You must also link the job to a job group. This is mandatory for\nmanaging user rights and profiles. In the Scheduling parameters, choose\nthe scheduling mode. You have a choice between immediate execution and\nscheduled execution. Select immediate execution. In this configuration,\nthe report will be generated immediately, in English, in PDF format, and\nusing the last month's statistics:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(41849).Z,width:"1620",height:"808"})),(0,n.kt)("p",null,'Once the Configuration form is filled out correctly, we can proceed to\nthe "Report Parameters" tab, where we specify the conditions and scope\nof the report to be generated. We list the availability of hosts stored\nin the group "Routers" located in "Europe" (host category).'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(64024).Z,width:"1567",height:"698"})),(0,n.kt)("p",null,"Note: For most report designs, you can select a time period for the\nreport."),(0,n.kt)("p",null,'We want to analyze the availability of the routers over a 24\xd77 time\nperiod. To appear in the list, this time period must be predefined in\nCentreon and must be configured in Centreon MBI\'s general options, under\nthe "ETL Options" tab. Finally, we customize the report with our logo\n(new logos can be added to the "Logo" menu).'),(0,n.kt)("p",null,'Click "Save" to schedule the report according to the selected mode:\nimmediately.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(88678).Z,width:"1681",height:"395"})),(0,n.kt)("p",null,'If the job does not appear in the list, check that the filter applied to\nthe page is set to "All" to display all the jobs.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(99935).Z,width:"1685",height:"394"})),(0,n.kt)("h2",{id:"retrieve-the-generated-report"},"Retrieve the generated report"),(0,n.kt)("p",null,"Once the job is finished, go to ",(0,n.kt)("em",{parentName:"p"},"Report view"),', which contains the list of\nall reports generated. To view your report, simply download it by\nclicking the "Output format" icon; in this case, PDF.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(56783).Z,width:"1919",height:"947"})),(0,n.kt)("p",null,"You now have access to the requested report displaying the availability\nof the routers in Europe:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(55437).Z,width:"1355",height:"349"})),(0,n.kt)("p",null,"Congratulations! You have extracted some basic statistics from the\nreporting base."),(0,n.kt)("p",null,"Ready to generate some reports? Go back to the report list page, select\nthe design templates that suit your requirements, and you will be able\nto generate a new report."),(0,n.kt)("p",null,"We hope this tutorial has proven useful to you."))}h.isMDXComponent=!0},15071:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1_EN_createJob-558a4b84817dc66b680a1748c36075bf.png"},52841:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2_EN_createJob_FirstTab-b27b15c25c74024c4bdfba4cbc001695.png"},41849:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/3_EN_createJob_FirstTab_Filled-3111a7343fe3818233123f8d6ba66e32.png"},64024:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4_EN_createJob_Parameter-4495a7e4d19b3c8a1148b9894751df7f.png"},88678:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/5_EN_generateJob-109a1db4deece463176d1b52af728d3a.png"},99935:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/6_EN_generateJob_Filter-b1e71ccddb79728924bc8272224c8032.png"},56783:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/7_EN_reportView-6b69f0ebdf98b945c2ef0481c76e77c4.png"},55437:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/8_EN_availabilityReport-e9a14f99445c027447f1097626979547.png"},78535:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/createJob_ListReport-e9c4b6997bc6cf43e3164eb46c6dd2d6.png"}}]);