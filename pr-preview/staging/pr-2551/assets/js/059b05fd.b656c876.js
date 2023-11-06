"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[11270],{32461:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>k});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"cloud-aws-cloudfront",title:"Amazon CloudFront"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-cloudfront",id:"integrations/plugin-packs/procedures/cloud-aws-cloudfront",title:"Amazon CloudFront",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-cloudfront.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-cloudfront",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-cloudfront",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-aws-cloudfront.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-cloudfront",title:"Amazon CloudFront"},sidebar:"pp",previous:{title:"Amazon Backup Vault",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-backup"},next:{title:"Amazon CloudWatch",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch"}},c={},k=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Configuration",id:"aws-configuration",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],m={toc:k},g="wrapper";function h(t){var{components:e}=t,s=p(t,["components"]);return(0,a.kt)(g,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},m,s),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("strong",{parentName:"p"},"Amazon CloudFront")," brings a host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud-Aws-CloudFront-custom")),(0,a.kt)("p",null,"It brings the following service templates:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloudfront-Errors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Cloudfront-Errors-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check pages access errors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloudfront-Requests"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Cloudfront-Requests-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check requests number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloudfront-Throughput"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Cloudfront-Throughput-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check upload and download throughputs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)("p",null,"The pack provides a discovery rule to automatically discover CloudFront resources:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(48105).Z,width:"417",height:"134"})),(0,a.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation: ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Cloudfront-Errors",label:"Cloudfront-Errors",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudfront.errorrate.4xx.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudfront.errorrate.5xx.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudfront.errorrate.total.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Cloudfront-Requests",label:"Cloudfront-Requests",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudfront.requests.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(l.Z,{value:"Cloudfront-Throughput",label:"Cloudfront-Throughput",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudfront.bytes.downloaded.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudfront.bytes.uploaded.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"aws-configuration"},"AWS Configuration"),(0,a.kt)("p",null,"Configure a service account (access/secret key combo) for which the following privileges have to be granted:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get metrics from the AWS/EC2 namespace on Cloudwatch.")))),(0,a.kt)("h3",{id:"plugin-dependencies"},"Plugin dependencies"),(0,a.kt)("p",null,"To interact with Amazon APIs, you can use either use the ",(0,a.kt)("em",{parentName:"p"},"awscli")," binary provided by Amazon or ",(0,a.kt)("em",{parentName:"p"},"paws"),", a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For now, it is not possible to use ",(0,a.kt)("em",{parentName:"p"},"paws")," if you are using a proxy to reach AWS Cloudwatch APIs.")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bashn"},"yum install perl-Paws\n"))),(0,a.kt)(l.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n')))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,a.kt)("p",null,"If the platform uses an ",(0,a.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,a.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,a.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,a.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-cloud-aws-cloudfront\n"))),(0,a.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-cloudfront\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-cloud-aws-cloudfront\n")))),(0,a.kt)("p",null,"Whatever the license type (",(0,a.kt)("em",{parentName:"p"},"online")," or ",(0,a.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,a.kt)("strong",{parentName:"p"},"Amazon CloudFront")," Pack through\nthe ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,a.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,a.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More information in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,a.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Cloud-Aws-Cloudfront-Api\n"))),(0,a.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Cloudfront-Api\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-cloud-aws-cloudfront-api\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("strong",{parentName:"li"},"CloudFront")," server settings."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("strong",{parentName:"li"},"Cloud-Aws-CloudFront-custom")," template to the host."),(0,a.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACCESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSASSUMEROLE"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: 'paws')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSINSTANCEID"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_cloudfront_api.pl \\\n    --plugin=cloud::aws::cloudfront::plugin \\\n    --mode=throughput \\\n    --custommode='paws' \\\n    --aws-secret-key='' \\\n    --aws-access-key='' \\\n    --aws-role-arn='' \\\n    --region='' \\\n    --id='' \\\n    --proxyurl='' \\\n    --filter-metric='' \\\n    --statistic='sum' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --warning-bytes-uploaded='' \\\n    --critical-bytes-uploaded='' \\\n    --warning-bytes-downloaded='' \\\n    --critical-bytes-downloaded='' \\\n    --per-sec \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Bytes Downloaded Bytes Uploaded | 'cloudfront.bytes.downloaded.bytes'=9000;;;; 'cloudfront.bytes.uploaded.bytes'=9000B;;;; \n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_cloudfront_api.pl \\\n    --plugin=cloud::aws::cloudfront::plugin \\\n    --mode=throughput \\\n    --help\n")),(0,a.kt)("p",null,"All available modes can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_cloudfront_api.pl \\\n    --plugin=cloud::aws::cloudfront::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}h.isMDXComponent=!0},48105:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"}}]);