"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15097],{65822:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>k});a(67294);var r=a(3905),n=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const s={id:"hardware-storage-dell-me4-restapi",title:"Dell ME4 Rest API"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi",title:"Dell ME4 Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-dell-me4-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-dell-me4-restapi",title:"Dell ME4 Rest API"},sidebar:"pp",previous:{title:"Dell MD3000",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-storage-dell-md3000-smcli"},next:{title:"Dell ML6000",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/hardware-storage-dell-ml6000-snmp"}},c={},k=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:k},f="wrapper";function g(t){var{components:e}=t,a=p(t,["components"]);return(0,r.kt)(f,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){o(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,r.kt)("p",null,"The Pack Dell ME4 collects metrics for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Controllers"),(0,r.kt)("li",{parentName:"ul"},"Hardware"),(0,r.kt)("li",{parentName:"ul"},"Interfaces"),(0,r.kt)("li",{parentName:"ul"},"Volumes")),(0,r.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Dell-Me4-Restapi-Controller-Statistics-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover controllers and monitor statistics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Dell-Me4-Restapi-Volume-Statistics-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover volumes and monitor statistics")))))),(0,r.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Controller-statistics",label:"Controller-statistics",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.data.read.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of data read"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.data.written.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of data written"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.reads.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller whose host ports had I/O activity, the number of read operations"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.writes.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller whose host ports had I/O activity, the number of write operations"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.data.transfer.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data transfer rate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.iops.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Input/output operations per second"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.commands.forwarded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The current count of commands that are being forwarded or are queued to be forwarded to the partner controller for processing"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.cache.write.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of write cache in use"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.cache.write.hits.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block written to is found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.cache.write.misses.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block written to is not found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.cache.read.hits.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block to be read is found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.cache.read.misses.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block to be read is not found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"controller","_","id"),"#","controller.cpu.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of time the CPU is busy"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"controller status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status/health/redundancy of the controller"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status/health/state of the disk"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"disk","_","instance"),"#","hardware.disk.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Temperature of the disk"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status/health of the fan"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"fan","_","instance"),"#","hardware.fan.speed.rpm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Speed of the fan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fru status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the FRU"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"psu status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status/health of the power supply"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sensor status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sensor","_","instance"),"#","hardware.sensor.voltage.volt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Voltage of the sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sensor","_","instance"),"#","hardware.sensor.current.ampere"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current of the sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sensor","_","instance"),"#","hardware.sensor.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"temperature of the sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sensor","_","instance"),"#","hardware.sensor.capacity.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Charge capacity of the sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"volume status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the volume"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"port status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"port health status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"port","_","name"),"#","port.io.read.usage.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of read operations"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"port","_","name"),"#","port.io.write.usage.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of write operations"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"port","_","name"),"#","port.traffic.read.usage.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of data read"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"port","_","name"),"#","port.traffic.write.usage.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of data written"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"port","_","name"),"~",(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","port.interface.disparity.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of doublewords containing running disparity errors that have been received by the PHY, not including those received during Link Reset sequences"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"port","_","name"),"~",(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","port.interface.lost.dwords.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of times the PHY has lost doubleword synchronization and restarted the Link Reset sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"port","_","name"),"~",(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","port.interface.invalid.dwords.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of invalid doublewords that have been received by the PHY, not including those received during Link Reset sequences"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Volume-statistics",label:"Volume-statistics",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.data.read.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of data read"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.data.written.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of data written"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.reads.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of read operations"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.writes.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of write operations"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.data.transfer.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data transfer rate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.iops.ops"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Input/output operations per second"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.cache.write.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of cache used on behalf of this volume"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.cache.write.hits.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block written to is found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.cache.write.misses.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block written to is not found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.cache.read.hits.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block to be read is found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume","_","name"),"#","volume.cache.read.misses.persecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the controller that owns the volume, the number of times the block to be read is not found in cache"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To control your Dell ME4, the Rest API must be configured."),(0,r.kt)("p",null,"E.g: ",(0,r.kt)("a",{parentName:"p",href:"https://www.dell.com/support/manuals/fr-fr/powervault-me4024/me4_series_cli_pub/using-a-script-to-access-the-cli?guid=guid-9ae5ccd6-a207-42df-b2f3-1e02a487a354&lang=en-us"},"https://www.dell.com/support/manuals/fr-fr/powervault-me4024/me4_series_cli_pub/using-a-script-to-access-the-cli?guid=guid-9ae5ccd6-a207-42df-b2f3-1e02a487a354&lang=en-us")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Dell Me4 Rest API")," Pack"))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Pack from the RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-dell-me4-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Dell Me4 Rest API")," Pack")))),(0,r.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,r.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,r.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,r.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"HW-Storage-Dell-Me4-Restapi-custom")," Host Template")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command (Parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \\\n    --plugin=storage::dell::me4::restapi::plugin \\\n    --mode=interfaces \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-port-name='A0' \\\n    --verbose\n")),(0,r.kt)("p",null,"Expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: port 'A0' status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s - All interfaces are ok | 'A0#port.io.read.usage.iops'=94.52iops;;;0; 'A0#port.io.write.usage.iops'=161.11iops;;;0; 'A0#port.traffic.read.usage.bitspersecond'=1287234b/s;;;0; 'A0~0#port.interface.disparity.errors.count'=0;;;0; 'A0~0#port.interface.lost.dwords.count'=0;;;0; 'A0~0#port.interface.invalid.dwords.count'=0;;;0; 'A0~1#port.interface.disparity.errors.count'=0;;;0; 'A0~1#port.interface.lost.dwords.count'=0;;;0; 'A0~1#port.interface.invalid.dwords.count'=0;;;0; 'A0~2#port.interface.disparity.errors.count'=0;;;0; 'A0~2#port.interface.lost.dwords.count'=0;;;0; 'A0~2#port.interface.invalid.dwords.count'=0;;;0; 'A0~3#port.interface.disparity.errors.count'=0;;;0; 'A0~3#port.interface.lost.dwords.count'=0;;;0; 'A0~3#port.interface.invalid.dwords.count'=0;;;0;\nchecking port 'A0'\n    status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s\n    interface '0' disparity errors: 0, lost dwords: 0, invalid dwords: 0\n    interface '1' disparity errors: 0, lost dwords: 0, invalid dwords: 0\n    interface '2' disparity errors: 0, lost dwords: 0, invalid dwords: 0\n    interface '3' disparity errors: 0, lost dwords: 0, invalid dwords: 0\n")),(0,r.kt)("p",null,"The command above monitors interfaces statistics  (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=interfaces"),")."),(0,r.kt)("p",null,"It uses api-username (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,r.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 443 (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,r.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \\\n    --plugin=storage::dell::me4::restapi::plugin \\\n    --mode=interfaces \\\n    --help\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Troubleshooting plugins")))}g.isMDXComponent=!0}}]);