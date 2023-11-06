"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[76903],{81171:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>k});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"virtualization-hyperv-nscp-restapi",title:"Hyper-V NSCP Rest API"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",id:"integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",title:"Hyper-V NSCP Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi.md",tags:[],version:"current",frontMatter:{id:"virtualization-hyperv-nscp-restapi",title:"Hyper-V NSCP Rest API"},sidebar:"pp",previous:{title:"Hyper-V 2012 NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe"},next:{title:"Nutanix",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp"}},d={},k=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NSClient Configuration",id:"nsclient-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:k},g="wrapper";function N(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(g,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Pack ",(0,n.kt)("strong",{parentName:"p"},"Hyper-V")," brings 2 host templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Virt-Hyperv-Node-Nscp-Restapi-custom"),(0,n.kt)("li",{parentName:"ul"},"Virt-Hyperv-Scvmm-Nscp-Restapi-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Integration-Service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Integration-Service-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Replication"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Replication-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Snapshot"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Snapshot-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Vm-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Node-Vm-Status-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scvmm-Integration-Service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Scvmm-Integration-Service-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scvmm-Snapshot"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Scvmm-Snapshot-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scvmm-Vm-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Scvmm-Vm-Status-Nscp-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Hyperv-Nscp-Restapi-HostDiscovery-Scvmm-Vm"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover the VMs bound to a SCVMM")))))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Node-Integration-Service",label:"Node-Integration-Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"global status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global status of virtual machines integration services"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"service status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Primary and secondary status of each virtual machines services"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Node-Replication",label:"Node-Replication",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Health replication status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Node-Snapshot",label:"Node-Snapshot",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm.snapshot.time.last.execution.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last snapshot execution time of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Node-Vm-Status",label:"Node-Vm-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Scvmm-Integration-Service",label:"Scvmm-Integration-Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Addition status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"osshutdown status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Operating system shutdown status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"timesync status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time synchronization status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dataexchange status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data exchange status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"heartbeat status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Heartbeat status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backup status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Scvmm-Snapshot",label:"Scvmm-Snapshot",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm.snapshot.time.last.execution.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last snapshot execution time of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Scvmm-Vm-Status",label:"Scvmm-Vm-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of each virtual machines"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"nsclient-configuration"},"NSClient Configuration"),(0,n.kt)("p",null,"To monitor ",(0,n.kt)("strong",{parentName:"p"},"Hyper-V")," through NRPE, install the Centreon packaged version of the NSClient++ agent.\nPlease follow our ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"."),(0,n.kt)("p",null,"Please download and install the last release of ",(0,n.kt)("strong",{parentName:"p"},"Centreon-NSClient-xxx.exe"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-nsclient-build/releases"},"https://github.com/centreon/centreon-nsclient-build/releases"),"."),(0,n.kt)("p",null,"By default, the username/password is ",(0,n.kt)("strong",{parentName:"p"},"centreon/centreon"),"."),(0,n.kt)("h3",{id:"network-flow"},"Network flow"),(0,n.kt)("p",null,"The target equipment must be reachable from the Centreon poller on the TCP/8443 port."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Nrpe\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Nrpe\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," Centreon Pack RPM on the Centreon central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-virtualization-hyperv-nscp-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Hyper-V NSCP API")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new host and apply one of following host templates")),(0,n.kt)("p",null,"Once the template is applied, some macros have to be configured."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Virt-Hyperv-Node-Nscp-Restapi-custom",label:"Virt-Hyperv-Node-Nscp-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Protocol used (Default: https)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API legacy authentication password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --insecure)"))))),(0,n.kt)(l.Z,{value:"Virt-Hyperv-Scvmm-Nscp-Restapi-custom",label:"Virt-Hyperv-Scvmm-Nscp-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Protocol used (Default: https)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSClient API legacy authentication password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --insecure)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM address (Default: localhost)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMMPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCVMM port used (Default: 8001)")))))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand to check NSClient configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_version\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"0.5.2.41 2018-04-26\n")),(0,n.kt)("p",null,"Check the Hyper-V Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::microsoft::hyperv::2012::local::plugin' \\\n    --arg='node-vm-status' \\\n    --arg='--filter-vm=\"\" --verbose' \\\n    --verbose\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All virtual machines are ok \nVM 'vm1' status: Operating normally (state: Running, is clustered: 1)\nVM 'vm2' status: Operating normally (state: Running, is clustered: 0)\nVM 'vm3' status: Operating normally (state: Running, is clustered: 1)\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::microsoft::hyperv::2012::local::plugin' \\\n    --arg='node-vm-status' \\\n    --arg='--help'\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \\\n    --plugin=apps::protocols::nrpe::plugin \\\n    --mode=query \\\n    --custommode=nsclient \\\n    --hostname='10.0.0.1' \\\n    --username=centreon \\\n    --password=centreon \\\n    --insecure \\\n    --http-backend=curl \\\n    --command=check_centreon_plugins \\\n    --arg='apps::microsoft::hyperv::2012::local::plugin' \\\n    --arg='xxx' \\\n    --arg='--list-mode'\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\non the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"dedicated page")))}N.isMDXComponent=!0}}]);