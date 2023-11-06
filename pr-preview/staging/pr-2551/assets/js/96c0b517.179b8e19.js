"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[78588],{35200:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>g});a(67294);var r=a(3905),n=a(51715),l=a(7626);function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"hardware-storage-hp-3par-ssh",title:"HP 3PAR SSH"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh",id:"integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh",title:"HP 3PAR SSH",description:"Contenu du Pack",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-ssh.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-hp-3par-ssh",title:"HP 3PAR SSH"},sidebar:"pp",previous:{title:"Hitachi Standard",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-standard-snmp"},next:{title:"HP 3PAR 7000 (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-storage-hp-3par-7000-ssh"}},k={},g=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration de la connexion SSH",id:"configuration-de-la-connexion-ssh",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],u={toc:g},c="wrapper";function N(t){var{components:e}=t,a=s(t,["components"]);return(0,r.kt)(c,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){p(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le Pack Centreon ",(0,r.kt)("strong",{parentName:"p"},"HP 3PAR")," apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Storage-HP-3par-SSH-custom")),(0,r.kt)("p",null,"Il apporte les mod\xe8les de services suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de services"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Afc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Afc-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'adaptive flash cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Cages-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les cages"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Capacity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Capacity-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la capacit\xe9 des diff\xe9rents types de stockage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Components"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Components-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le mat\xe9riel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk-Usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Disk-Usage-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les disques"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Nodes-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les noeuds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Psu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Psu-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les alimentations"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Time-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la d\xe9rive de temps des noeuds"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Uptime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Uptime-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la dur\xe9e de fonctionnement des noeuds"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Volume-Usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-HP-3par-Volume-Usage-SSH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les volumes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Afc",label:"Afc",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"node adaptive flash cache status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id"),"#node.flashcache.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id"),"#node.flashcache.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id"),"#node.flashcache.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id"),"#node.flashcache.readhits.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.flashcache.readhits.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Cages",label:"Cages",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage board firmware status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage board self status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage board partner status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage power supply AC status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage power supply DC status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage power supply fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage drive status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage drive portA status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cage drive portB status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cage_id~drive_id"),"#battery.charge.remaining.percent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Capacity",label:"Capacity",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.unavailable.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.failed.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.compaction.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.deduplication.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.compression.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.data_reduction.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"storage_type"),"#storage.space.overprovisioning.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Components",label:"Components",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"battery power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"psu_id~battery_id"),"#hardware.battery.charge.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cim service state and status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk state"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"node state"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"port state"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply state"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~sensor_name"),"#hardware.sensor.current.ampere"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~sensor_name"),"#hardware.sensor.voltage.volt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~sensor_name"),"#hardware.sensor.power.watt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~sensor_name"),"#hardware.sensor.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~sensor_name"),"#hardware.sensor.current.speed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"wsapi service state and status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Disk-Usage",label:"Disk-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"disk_id"),"#disk.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"disk_id"),"#disk.space.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"disk_id"),"#disk.space.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Nodes",label:"Nodes",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"node status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~cpu_id"),"#core.cpu.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Psu",label:"Psu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply AC status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply DC status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply battery status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~psu_id"),"#battery.charge.remaining.percent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id~psu_id"),"#battery.charge.remaining.minutes"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Time",label:"Time",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id"),"#node.time.offset.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,r.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"node_id"),"#node.uptime..seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,r.kt)(l.Z,{value:"Volume-Usage",label:"Volume-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.space.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.space.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"configuration-de-la-connexion-ssh"},"Configuration de la connexion SSH"),(0,r.kt)("p",null,"Suivez la proc\xe9dure suivante sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"p"},"HP 3PAR")," :"),(0,r.kt)("p",null,"a. Se loguer avec l'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# su - centreon-engine\n")),(0,r.kt)("p",null,"b. G\xe9n\xe9rer les cl\xe9s SSH si n\xe9cessaire :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ssh-keygen\n")),(0,r.kt)("p",null,"c. R\xe9cup\xe9rer la cl\xe9 publique SSH :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ vi ~/.ssh/id_rsa.pub\n")),(0,r.kt)("p",null,"d. Se connecter \xe0 votre ressource ",(0,r.kt)("strong",{parentName:"p"},"HP 3PAR")," en SSH avec le compte administrateur et copier la cl\xe9 publique ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'3PAR01 cli% setsshkey\nPlease enter the SSH public key below.  When finished, press enter twice.\nThe key is usually long.  It\'s better to copy it from inside an editor\nand paste it here.  (Please make sure there are no extra blanks.)\nThe maximum number of characters used to represent the SSH key\n(including the "from" option, key type, and additional comments) is 4095.\n\nssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAydSr8dvdf+N5apCrij3eom6a6gMZUibiBp6GUurADktPtm1jBdbZ2GVhnwiaeUqiwgxsBSjiGCKRlpIN/zBzM59li4k+fbhyO7SzXfB3IV3ueSVKlrVljyHQL6GqUjj9opxCg8jyKerCx6iTyqUvIJ4zmhaJXQAzxQFE7YLiuaaNN9ylH1z9ebuMZZKUh0gpXNT3ID4Ea+In5CAoPopwF50EdAIZ4QkS1EibhI9Lar8GqXMyHTNR/ZapvZ/KpI3lhduLT5OJ2QMbBzVrQFKXiLbYnU2AASYyFsQQC+7YASFwIEQ6D3sp0Wg8G1Dw/jmM01CsqthTm7j1Mw070OuJSw== centreon-engine@myserver\n\nSSH public key successfully set.\n\n3PAR01 cli%\n')),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"HP 3PAR")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Pack ",(0,r.kt)("strong",{parentName:"li"},"HP 3PAR SSH")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"HP 3PAR")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installer le RPM du Pack ",(0,r.kt)("strong",{parentName:"li"},"HP 3PAR SSH")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-hp-3par-ssh\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Pack ",(0,r.kt)("strong",{parentName:"li"},"HP 3PAR SSH")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," et ",(0,r.kt)("strong",{parentName:"li"},"IP Address / DNS")," correspondant \xe0 votre \xe9quipement ",(0,r.kt)("strong",{parentName:"li"},"HP 3PAR"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"li"},"HW-Storage-HP-3par-SSH-custom"),"."),(0,r.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sshcli backend (par d\xe9faut)",label:"sshcli backend (par d\xe9faut)",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,r.kt)("strong",{parentName:"td"},"sshcli"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,r.kt)("strong",{parentName:"td"},"centengine")," de votre collecteur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,r.kt)("strong",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant (Macro SSHUSERNAME)."))),(0,r.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,r.kt)("strong",{parentName:"td"},"plink"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,r.kt)("strong",{parentName:"td"},"centengine")," de votre collecteur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,r.kt)("strong",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant (Macro SSHUSERNAME)."))),(0,r.kt)(l.Z,{value:"libssh backend",label:"libssh backend",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,r.kt)("strong",{parentName:"td"},"libssh"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,r.kt)("strong",{parentName:"td"},"centengine")," de votre collecteur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,r.kt)("strong",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avec ce backend, vous n'avez pas \xe0 valider manuellement le fingerprint du serveur cible.")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \\\n    --plugin=storage::hp::3par::ssh::plugin \\\n    --mode=capacity \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=libssh \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All storage capacities are ok | 'FC#storage.space.usage.bytes'=9980928000000B;;;0;20103168000000 'FC#storage.space.free.bytes'=10122240000000B;;;0;20103168000000 'FC#storage.space.usage.percentage'=49.65%;;;0;100 'FC#storage.space.unavailable.bytes'=0B;;;0; 'FC#storage.space.failed.bytes'=0B;;;0; 'FC#storage.space.compaction.ratio.count'=2.31;;;0; 'FC#storage.space.overprovisioning.ratio.count'=0.92;;;0; 'SSD#storage.space.usage.bytes'=1476608000000B;;;0;4546560000000 'SSD#storage.space.free.bytes'=3069952000000B;;;0;4546560000000 'SSD#storage.space.usage.percentage'=32.48%;;;0;100 'SSD#storage.space.unavailable.bytes'=0B;;;0; 'SSD#storage.space.failed.bytes'=0B;;;0; 'SSD#storage.space.compaction.ratio.count'=4.93;;;0; 'SSD#storage.space.deduplication.ratio.count'=1.20;;;0; 'SSD#storage.space.data_reduction.ratio.count'=1.20;;;0; 'SSD#storage.space.overprovisioning.ratio.count'=0.48;;;0; 'Total#storage.space.usage.bytes'=11457536000000B;;;0;24649728000000 'Total#storage.space.free.bytes'=13192192000000B;;;0;24649728000000 'Total#storage.space.usage.percentage'=46.48%;;;0;100 'Total#storage.space.unavailable.bytes'=0B;;;0; 'Total#storage.space.failed.bytes'=0B;;;0; 'Total#storage.space.compaction.ratio.count'=2.59;;;0; 'Total#storage.space.deduplication.ratio.count'=1.23;;;0; 'Total#storage.space.data_reduction.ratio.count'=1.23;;;0; 'Total#storage.space.overprovisioning.ratio.count'=0.92;;;0;\nchecking storage 'FC'\n    space usage total: 18.28 TB used: 9.08 TB (49.65%) free: 9.21 TB (50.35%), unavailable: 0.00 B, failed: 0.00 B\n    compaction: 2.31, overprovisioning: 0.92\nchecking storage 'SSD'\n    space usage total: 4.14 TB used: 1.34 TB (32.48%) free: 2.79 TB (67.52%), unavailable: 0.00 B, failed: 0.00 B\n    compaction: 4.93, deduplication: 1.20, data reduction: 1.20, overprovisioning: 0.48\nchecking storage 'Total'\n    space usage total: 22.42 TB used: 10.42 TB (46.48%) free: 12.00 TB (53.52%), unavailable: 0.00 B, failed: 0.00 B\n    compaction: 2.59, deduplication: 1.23, data reduction: 1.23, overprovisioning: 0.92\n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \\\n    --plugin=storage::hp::3par::ssh::plugin \\\n    --mode=capacity \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \\\n    --plugin=storage::hp::3par::ssh::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}N.isMDXComponent=!0}}]);