"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[89970],{36886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"cloud-aws-backup",title:"Amazon Backup Vault"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-backup",id:"integrations/plugin-packs/procedures/cloud-aws-backup",title:"Amazon Backup Vault",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-backup.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-backup",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-backup",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-aws-backup.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-backup",title:"Amazon Backup Vault"},sidebar:"pp",previous:{title:"Amazon API Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-apigateway"},next:{title:"Amazon CloudFront",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-cloudfront"}},m={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Configuration",id:"aws-configuration",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],k={toc:d},g="wrapper";function b(e){var{components:t}=e,s=p(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},k,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector Amazon Backup Vault brings a host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud-Aws-Backup-Vault-custom")),(0,n.kt)("p",null,"It brings the following Service Template:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup-Vault-Jobs-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Backup-Vault-Jobs-Status-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check AWS Backup Vault jobs status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The pack provides a discovery rule to automatically discover Backup vault resources:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(78960).Z,width:"709",height:"219"})),(0,n.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation: ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"metrics",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Backup-Vault-Jobs-Status",label:"Backup-Vault-Jobs-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backup.jobs.completed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Backup vault jobs completed for the specified timeframe. Default : last 24h.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backup.jobs.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Backup vault jobs failed for the specified timeframe. Default : last 24h.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backup.jobs.expired.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Backup vault jobs expired for the specified timeframe. Default : last 24h.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"copy.jobs.completed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Copy vault jobs completed for the specified timeframe. Default : last 24h.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"copy.jobs.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Copy vault jobs failed for the specified timeframe. Default : last 24h.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"recovery.jobs.expired.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Recovery vault jobs completed for the specified timeframe. Default : last 24h.")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"aws-configuration"},"AWS Configuration"),(0,n.kt)("p",null,"Configure a service account (access/secret key combo) for which the following privileges have to be granted:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backup:ListBackupVaults"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get Backup Vault Names.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get metrics from the AWS/EC2 namespace on Cloudwatch.")))),(0,n.kt)("h3",{id:"plugin-dependencies"},"Plugin dependencies"),(0,n.kt)("p",null,"To interact with Amazon APIs, you can use either use the ",(0,n.kt)("em",{parentName:"p"},"awscli")," binary provided by Amazon or ",(0,n.kt)("em",{parentName:"p"},"paws"),", a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For now, it is not possible to use ",(0,n.kt)("em",{parentName:"p"},"paws")," if you are using a proxy to reach AWS Cloudwatch APIs. ")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,n.kt)(l.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n')))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"setup",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"AWS Backup Vault")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Backup-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Amazon Backup Vault")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"AWS Backup Vault")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Backup-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Amazon Backup Vault")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-backup\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Amazon Backup Vault")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("em",{parentName:"li"},"AWS Backup Vault")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("em",{parentName:"li"},"Cloud-Aws-Backup-Vault-custom")," template to apply to the Host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"VAULTBACKUPNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup Vault name containing jobs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed.")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the Plugin by\nrunning the following command with the name of your backup vault:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \\\n    --plugin=cloud::aws::backup::plugin \\\n    --mode=jobstatus \\\n    --custommode='awscli' \\\n    --aws-secret-key='' \\\n    --aws-access-key='' \\\n    --region='' \\\n    --backup-vault-name='MY-VAULT' \\\n    --filter-metric='.*' \\\n    --proxyurl='' \\\n    --timeframe='86400' \\\n    --period='3600'  \\\n    --zeroed\\\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 'MY-VAULT' Statistic 'Sum' Metrics Number of backup jobs expired: 0.00 , Number of copy jobs completed: 0.00 , Number of backup jobs failed: 0.00 , Number of backup jobs completed: 4.00 , Number of recovery jobs expired: 0.00 , Number of copy jobs failed: 0.00  | 'MY-VAULT~sum#backup.jobs.expired.count'=0.00;;;0; 'MY-VAULT~sum#copy.jobs.completed.count'=0.00;;;0; 'MY-VAULT~sum#backup.jobs.failed.count'=0.00;;;0; 'MY-VAULT~sum#backup.jobs.completed.count'=4.00;;;0; 'MY-VAULT~sum#recovery.jobs.expired.count'=0.00;;;0; 'MY-VAULT~sum#copy.jobs.failed.count'=0.00;;;0;\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \\\n    --plugin=cloud::aws::backup::plugin \\\n    --mode=jobstatus \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \\\n    --plugin=cloud::aws::backup::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation")," for Centreon Plugins typical issues."))}b.isMDXComponent=!0},78960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-aws-backup-vault-provider-e097a8331eccee8a2072516f146139b2.png"}}]);