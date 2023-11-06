"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[11520],{56651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>c});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"cloud-aws-ebs",title:"Amazon EBS"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-ebs",id:"integrations/plugin-packs/procedures/cloud-aws-ebs",title:"Amazon EBS",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-ebs.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-ebs",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-ebs",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-aws-ebs.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-ebs",title:"Amazon EBS"},sidebar:"pp",previous:{title:"Amazon Direct Connect",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-directconnect"},next:{title:"Amazon EC2",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-ec2"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Configuration",id:"aws-configuration",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following result:",id:"why-do-i-get-the-following-result",level:3},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code> ?",id:"unknown-command-error----an-error-occurred-authfailure--",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]</code>",id:"unknown-command-error----an-error-occurred-invalidparametervalue-",level:4}],k={toc:c},g="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Amazon Elastic Block Store (Amazon EBS) provides block level storage volumes for use with EC2 instances.\nEBS volumes behave like raw, unformatted block devices. You can mount these volumes as devices on your instances.\nYou can mount multiple volumes on the same instance, and you can mount a volume to multiple instances at a time.\nYou can create a file system on top of these volumes, or use them in any way you would use a block device (like a hard drive).\nYou can dynamically change the configuration of a volume attached to an instance."),(0,a.kt)("p",null,"The Amazon EBS Centreon Plugin uses the Amazon Cloudwatch API to collect the related EBS metrics."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EBS volumes: standard, gp2, st1, sc1 & io1")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Ebs-Api-HostDiscovery"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover EBS volumes"))))),(0,a.kt)(o.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("p",null,"No services discovery rule available on this pack"))),(0,a.kt)("h2",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)("p",null,"You can get more details on Amazon EBS Cloudwatch metrics in the official AWS documentation:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Ebs-Volume-Io",label:"Ebs-Volume-Io",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeReadBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Provides information on the read operations in a specified period of time. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeWriteBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Provides information on the write operations in a specified period of time. Unit: Bytes"))))),(0,a.kt)(o.Z,{value:"Ebs-Iops",label:"Ebs-Iops",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeReadOps"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of read operations in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeWriteOps"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of write operations in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeThroughputPercentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The percentage of I/O operations per second (IOPS) delivered of the total IOPS provisioned for an Amazon EBS volume. Unit: Percent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeConsumedReadWriteOps"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total amount of read and write operations (normalized to 256K capacity units) consumed in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeQueueLength"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of read and write operation requests waiting to be completed in a specified period of time. Unit: Count"))))),(0,a.kt)(o.Z,{value:"Ebs-Time",label:"Ebs-Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeTotalReadTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of seconds spent by all read operations that completed in a specified period of time. Unit: Seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeTotalWriteTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of seconds spent by all write operations that completed in a specified period of time. Unit: Seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeIdleTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of seconds in a specified period of time when no read or write operations were submitted. Unit: Seconds")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"aws-configuration"},"AWS Configuration"),(0,a.kt)("p",null,"Configure a service account (",(0,a.kt)("em",{parentName:"p"},"access/secret keys")," combo) for which the following privileges have to be granted:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeVolumes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Describes the specified EBS volumes or all of your EBS volumes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get metrics from the AWS/EBS namespace on Cloudwatch")))),(0,a.kt)("h3",{id:"plugin-dependencies"},"Plugin dependencies"),(0,a.kt)("p",null,"To interact with Amazon APIs, you can use either use the ",(0,a.kt)("em",{parentName:"p"},"awscli")," binary provided by Amazon or ",(0,a.kt)("em",{parentName:"p"},"paws"),", a Perl AWS SDK (recommended).\nYou must install it on every Centreon poller expected to monitor Amazon EBS resources: "),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(o.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For now, it is not possible to use ",(0,a.kt)("em",{parentName:"p"},"paws")," in the following situations:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"if you are using a proxy to reach AWS Cloudwatch APIs. "),(0,a.kt)("li",{parentName:"ul"},"to automatically add Hosts in Centreon using the ",(0,a.kt)("em",{parentName:"li"},"Host Discovery")," feature"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Amazon EBS ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ebs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the 'Amazon EBS' Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Amazon EBS resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ebs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-ec2.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the 'Amazon EBS' Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,'Log into Centreon and add a new Host through "Configuration > Hosts". Select the ',(0,a.kt)("em",{parentName:"p"},"Cloud-Aws-Ebs-custom")," template to apply to the Host."),(0,a.kt)("p",null,"Once the template applied, some Macros have to be configured:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSVOLUMEID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"EBS Volume ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin\nby running the following command (Some of the parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"volume-id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyurl")," have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_ebs_api.pl \\\n    --plugin=cloud::aws::ebs::plugin \\\n    --mode=volumeio \\\n    --custommode='awscli' \\\n    --aws-secret-key='***' \\\n    --aws-access-key='***' \\\n    --region='eu-west-1' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --volume-id='vol-1234abcd' \\\n    --statistic='average' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --warning-volume-write-bytes='60000000' \\\n    --critical-volume-write-bytes='90000000' \\\n    -- verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 'vol-1234abcd' Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB | \n'vol-1234abcd~average#ebs.volume.bytes.read.bytes'=29081.60B;;;; 'vol-1234abcd~average#ebs.volume.bytes.write.bytes'=57261465.60B;0:60000000;0:90000000;;\nAWS EBS Volume'vol-1234abcd'\n    Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB\n")),(0,a.kt)("p",null,"The command above monitors the Volume IOs  (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=volumeio"),") of the ",(0,a.kt)("em",{parentName:"p"},"vol-1234abcd")," EBS volume (",(0,a.kt)("inlineCode",{parentName:"p"},"--volume-id='vol-1234abcd'"),").\nThis volume is hosted within the AWS ",(0,a.kt)("em",{parentName:"p"},"eu-west-1")," region (",(0,a.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),").\nThe collected metrics will be parsed as average statistics (",(0,a.kt)("inlineCode",{parentName:"p"},"--statistic='average'"),") over a timeframe of 600 secondes (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),")\nwith a sample of 1 point per minute (",(0,a.kt)("inlineCode",{parentName:"p"},"--period='60'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alert if the average writing operations on the volume are higher than 60MB and a CRITICAL alert if they're higher than 90MB."),(0,a.kt)("p",null,"All the options that can be used with this Plugin can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl --plugin=cloud::aws::ebs::plugin --mode=volumeio --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-result"},"Why do I get the following result:"),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,a.kt)("p",null,"This command result means that Amazon Cloudwatch does not have any value for the requested period."),(0,a.kt)("p",null,"This result can be overriden by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message. "),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-authfailure--"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")," ?"),(0,a.kt)("p",null,"This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation."),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-invalidparametervalue-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]")),(0,a.kt)("p",null,"Most of the time, this command result highlights typo/mispelling in the Amazon Dimension name (",(0,a.kt)("inlineCode",{parentName:"p"},"--volume-id"),")."))}h.isMDXComponent=!0}}]);