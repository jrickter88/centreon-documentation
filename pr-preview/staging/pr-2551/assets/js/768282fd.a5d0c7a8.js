"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42902],{82849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"cloud-aws-efs",title:"Amazon EFS"},p=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-efs",id:"integrations/plugin-packs/procedures/cloud-aws-efs",title:"Amazon EFS",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-efs.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-efs",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-efs",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-aws-efs.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-efs",title:"Amazon EFS"},sidebar:"pp",previous:{title:"Amazon EC2",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-ec2"},next:{title:"Amazon ElastiCache",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-elasticache"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery Rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Privileges",id:"aws-privileges",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following result <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:3}],k={toc:u},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filesystems")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery Rules"),(0,a.kt)("p",null,"This pack provides a host discovery rule:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Efs-Api-HostDiscovery"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover File Systems from your Cloudwatch endpoint"))))),(0,a.kt)(o.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("p",null,"No services discovery rule available on this pack"))),(0,a.kt)("h2",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)("p",null,"More information about collected metrics is available in the official Amazon documentation: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/efs/latest/ug/monitoring-cloudwatch"},"https://docs.aws.amazon.com/efs/latest/ug/monitoring-cloudwatch")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ClientConnections"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of client connections to a file system. Unit: Count"))))),(0,a.kt)(o.Z,{value:"Data Usage",label:"Data Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DataReadIOBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of bytes for each file system read operation. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DataWriteIOBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of bytes for each file write operation. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MetadataIOBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of bytes for each metadata operation. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TotalIOBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of bytes for each file system operation, including data read, data write, and metadata operations. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"BurstCreditBalance"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of burst credits that a file system has. Burst credits allow a file system to burst to throughput levels above a file system\u2019s baseline level for periods of time. Unit: Bytes")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"aws-privileges"},"AWS Privileges"),(0,a.kt)("p",null,"Whether using a service account or a dedicated monitoring account to monitor Cloudwatch metrics, the following rights have to be granted to the IAM role (accesskey/secretkey):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"elasticfilesystem:DescribeFileSystems"),(0,a.kt)("td",{parentName:"tr",align:"left"},"List all EFS Filesystems IDs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:listMetrics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"List all metrics from Cloudwatch AWS/EFS namespace")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get metrics values from Cloudwatch AWS/EFS namespace")))),(0,a.kt)("h3",{id:"plugin-dependencies"},"Plugin dependencies"),(0,a.kt)("p",null,"To interact with Amazon APIs, you can use either use awscli binary or paws, a perl AWS SDK (recommended). You must install it on every poller that will monitor AWS resources. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning")," At the moment it is not possible to use perl-Paws if you are using a proxy to talk with AWS Cloudwatch APIs. "),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(o.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring EFS ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Efs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),', install the "Amazon EFS" Monitoring Connector'))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring EFS ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Efs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-efs.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),', install the "Amazon EFS" Monitoring Connector:')))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,'Adding a host into Centreon, link it to the template named "Cloud-Aws-EFS-custom". Once the template applied, some macros have to be configured:'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSFILESYSTEMID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the FileSystem to be monitored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extraoptions you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your poller using the centreon-engine user account and test by running the following command (Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyurl"),"have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_efs_api.pl \\\n    --plugin=cloud::aws::efs::plugin \\\n    --mode=connections \\\n    --custommode='awscli' \\\n    --aws-secret-key='*******************' \\\n    --aws-access-key='**********' \\\n    --region='eu-west-1' \\\n    --name='fs-1234abcd' \\\n    --proxyurl='http://myproxy.mycompany.org:8080'\n    --filter-metric='' \\\n    --statistic='average' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --warning-client-connections='25' \\\n    --critical-client-connections='50' \\\n    --verbose\n\nOK: 'fs-1234abcd' Statistic 'Sum' Metrics ClientConnections: 19.00 | 'client-connections_sum'=19;;;;\nEFS FileSystemId'fs-1234abcd'\nStatistic 'Sum' Metrics ClientConnections: 19.00\n\n")),(0,a.kt)("p",null,"The command above gets the number of client connections (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=connections"),") on the ",(0,a.kt)("em",{parentName:"p"},"fs-1234abcd")," filesystem (",(0,a.kt)("inlineCode",{parentName:"p"},"--name='fs-1234abcd'"),"). This filesystem is hosted on the ",(0,a.kt)("em",{parentName:"p"},"eu-west-1")," AWS region cloud (",(0,a.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),"). The calculated metric is a sum of values (",(0,a.kt)("inlineCode",{parentName:"p"},"--statistic='sum'"),") on a 600 secondes / 10 min period (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),") with one sample per 60s / 1 minute (",(0,a.kt)("inlineCode",{parentName:"p"},"--period='60'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alert if the calculated value raises beyond 25 and a CRITICAL value beyond 50."),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/centreon/plugins//centreon_aws_efs_api.pl --plugin=cloud::aws::efs::plugin --mode=connections --help")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},"Why do I get the following result ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,a.kt)("p",null,"This command result means that Amazon Cloudwatch does not have any value for the requested period.\nThis result can be overriden by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric has been collected and will prevent the UNKNOWN error message"))}f.isMDXComponent=!0}}]);