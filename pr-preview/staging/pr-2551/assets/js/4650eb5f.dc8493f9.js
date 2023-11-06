"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[3296],{44190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905),o=n(51715),a=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"update-centreon-ha",title:"Updating Centreon-HA platform"},c=void 0,p={unversionedId:"update/update-centreon-ha",id:"version-23.10/update/update-centreon-ha",title:"Updating Centreon-HA platform",description:"This procedure is intended to be used to perform minor updates of Centreon when  Engine/Broker compatibility between the old version and the new version is assured. No service downtime is necessary in this case; only a short outage of the Web UI login screen.",source:"@site/versioned_docs/version-23.10/update/update-centreon-ha.md",sourceDirName:"update",slug:"/update/update-centreon-ha",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/update/update-centreon-ha",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/update/update-centreon-ha.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"update-centreon-ha",title:"Updating Centreon-HA platform"},sidebar:"version-23.10/docs",previous:{title:"Troubleshooting HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/administration/centreon-ha/troubleshooting-guide"},next:{title:"Upgrade Centreon HA from Centreon 21.04",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"}},d={},m=[{value:"Suspend cluster resource management",id:"suspend-cluster-resource-management",level:2},{value:"Update process from the WUI",id:"update-process-from-the-wui",level:2},{value:"Centreon-Web update",id:"centreon-web-update",level:3},{value:"Removing cron jobs",id:"removing-cron-jobs",level:3},{value:"Updating Centreon extensions",id:"updating-centreon-extensions",level:3},{value:"Updating the Monitoring Connectors",id:"updating-the-monitoring-connectors",level:3},{value:"Updating the pollers",id:"updating-the-pollers",level:3},{value:"Exporting Engine/Broker configuration",id:"exporting-enginebroker-configuration",level:3},{value:"Resuming cluster resource management",id:"resuming-cluster-resource-management",level:2},{value:"Verifying platform stability",id:"verifying-platform-stability",level:2}],g={toc:m},h="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This procedure is intended to be used to perform minor updates of Centreon when  Engine/Broker compatibility between the old version and the new version is assured. No service downtime is necessary in this case; only a short outage of the Web UI login screen."),(0,r.kt)("h2",{id:"suspend-cluster-resource-management"},"Suspend cluster resource management"),(0,r.kt)("p",null,"In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource unmanage centreon\npcs resource unmanage ms_mysql\n")),(0,r.kt)("h2",{id:"update-process-from-the-wui"},"Update process from the WUI"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure all users are logged out of the Centreon web interface\nbefore starting the upgrade procedure.")),(0,r.kt)("h3",{id:"centreon-web-update"},"Centreon-Web update"),(0,r.kt)("p",null,"Update your cluster by running the following command on each node:"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf update\n")))),(0,r.kt)("p",null,"And then you should be able to finalize the update ",(0,r.kt)("em",{parentName:"p"},"via")," the web UI. You might have to log off your session or refresh the login page to access the update process."),(0,r.kt)("p",null,'On the slave central node, just move the "install" dir to avoid getting the "update" screen in the WUI in the event of a further exchange of roles.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD\nsudo -u apache /usr/share/centreon/bin/console cache:clear\n")),(0,r.kt)("h3",{id:"removing-cron-jobs"},"Removing cron jobs"),(0,r.kt)("p",null,"The RPM upgrade puts the cron job back in place. Remove them to avoid concurrent executions: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm /etc/cron.d/centreon\nrm /etc/cron.d/centstorage\nrm /etc/cron.d/centreon-auto-disco\n")),(0,r.kt)("h3",{id:"updating-centreon-extensions"},"Updating Centreon extensions"),(0,r.kt)("p",null,"The Centreon extensions are also updated ",(0,r.kt)("em",{parentName:"p"},"via"),' the WUI, from the "Administration > Extensions > Manager" menu, by clicking the "Update all" button.'),(0,r.kt)("h3",{id:"updating-the-monitoring-connectors"},"Updating the Monitoring Connectors"),(0,r.kt)("p",null,"In order to maintain compatibility between the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/docs/monitoring/pluginpacks"},"Monitoring Connectors")," and the installed plugins (that have just been updated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"yum update")," command on the central server), the Monitoring Connectors must also be updated in the WUI from the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,r.kt)("h3",{id:"updating-the-pollers"},"Updating the pollers"),(0,r.kt)("p",null,"We recommend that you also update the pollers, ",(0,r.kt)("strong",{parentName:"p"},"especially if the ",(0,r.kt)("inlineCode",{parentName:"strong"},"centreon-engine")," and/or ",(0,r.kt)("inlineCode",{parentName:"strong"},"centreon-broker")," packages have been updated"),":"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf update\n")))),(0,r.kt)("h3",{id:"exporting-enginebroker-configuration"},"Exporting Engine/Broker configuration"),(0,r.kt)("p",null,'Generate and export new Engine/Broker configuration files for all pollers (central included) in "Configuration -> Pollers" with these options checked:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate Configuration Files"),(0,r.kt)("li",{parentName:"ul"},"Run monitoring engine debug (-v)"),(0,r.kt)("li",{parentName:"ul"},"Move Export Files")),(0,r.kt)("p",null,"Then restart them ",(0,r.kt)("strong",{parentName:"p"},"one at a time")," from the same menu and make sure to select the ",(0,r.kt)("strong",{parentName:"p"},'"restart" method, not "reload"'),", if the ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-engine")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-broker")," packages have been updated."),(0,r.kt)("p",null,"In addition, the ",(0,r.kt)("inlineCode",{parentName:"p"},"cbd-sql")," service must be restarted ",(0,r.kt)("strong",{parentName:"p"},"on the central master server"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"service cbd-sql restart\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cbd")," service must also be restarted on ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/docs/installation/architectures#description"},"Centreon Remote Servers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"service cbd restart\n")),(0,r.kt)("p",null,"At this point everything should be working properly."),(0,r.kt)("h2",{id:"resuming-cluster-resource-management"},"Resuming cluster resource management"),(0,r.kt)("p",null,"Now that the update is finished, the resources can be managed again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pcs resource manage centreon\npcs resource manage ms_mysql\n")),(0,r.kt)("h2",{id:"verifying-platform-stability"},"Verifying platform stability"),(0,r.kt)("p",null,"You should now check that everything works fine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to the web UI menus."),(0,r.kt)("li",{parentName:"ul"},"Poller configuration generation + reload and restart method."),(0,r.kt)("li",{parentName:"ul"},"Schedule an immediate check (Central + Pollers) and acknowledge, downtime etc."),(0,r.kt)("li",{parentName:"ul"},"Move resources or reboot the master server and check again that everything is fine.")))}k.isMDXComponent=!0}}]);