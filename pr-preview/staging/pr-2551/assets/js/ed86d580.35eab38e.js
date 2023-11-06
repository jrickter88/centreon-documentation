"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73927],{80243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>A,toc:()=>u});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"cloud-aws-cloudwatch-discover",title:"AWS Discover"},p=void 0,A={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover",id:"integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover",title:"AWS Discover",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch-discover.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-cloudwatch-discover",title:"AWS Discover"},sidebar:"pp",previous:{title:"AWS CloudTrail",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-cloudtrail"},next:{title:"AWS ELB",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-elb"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Pack Assets",id:"pack-assets",level:2},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Privileges",id:"aws-privileges",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Set up a discovery job",id:"set-up-a-discovery-job",level:2},{value:"Access parameters",id:"access-parameters",level:3},{value:"Discovery parameters",id:"discovery-parameters",level:3},{value:"Run the discovery job and display results",id:"run-the-discovery-job-and-display-results",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],m={toc:u},k="wrapper";function g(e){var{components:t}=e,c=s(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,c),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Centreon ",(0,r.kt)("strong",{parentName:"p"},"AWS Discover")," Monitoring Connector allows you to discover the following AWS resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API Gateway"),(0,r.kt)("li",{parentName:"ul"},"Backup Vault"),(0,r.kt)("li",{parentName:"ul"},"EBS"),(0,r.kt)("li",{parentName:"ul"},"EC2"),(0,r.kt)("li",{parentName:"ul"},"EFS"),(0,r.kt)("li",{parentName:"ul"},"FSx"),(0,r.kt)("li",{parentName:"ul"},"Kinesis"),(0,r.kt)("li",{parentName:"ul"},"Lamba"),(0,r.kt)("li",{parentName:"ul"},"RDS"),(0,r.kt)("li",{parentName:"ul"},"S3"),(0,r.kt)("li",{parentName:"ul"},"SNS"),(0,r.kt)("li",{parentName:"ul"},"SQS"),(0,r.kt)("li",{parentName:"ul"},"VPN")),(0,r.kt)("p",null,"This pack relies on the AWS API to retrieve AWS resources and on all the Centreon Monitoring Connectors for AWS to define\nappropriate monitoring models and indicators for each type of resource."),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Centreon Monitoring Connector ",(0,r.kt)("strong",{parentName:"p"},"AWS Discover")," is only a ",(0,r.kt)("em",{parentName:"p"},"discovery")," pack. It doesn't natively provide any templates nor\nindicators to monitor AWS resources")),(0,r.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,r.kt)("p",null,"The Centreon Monitoring Connector ",(0,r.kt)("strong",{parentName:"p"},"AWS Discover")," includes a Host Discovery ",(0,r.kt)("em",{parentName:"p"},"provider")," to automatically discover AWS resources\nThis provider is named ",(0,r.kt)("strong",{parentName:"p"},"Amazon AWS Discover"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(49691).Z,width:"605",height:"190"})),(0,r.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"aws-privileges"},"AWS Privileges"),(0,r.kt)("p",null,"Whether using a service account or a dedicated monitoring account to monitor Cloudwatch metrics, the following rights have to be granted to the IAM role (accesskey/secretkey or AssumeRole):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"apigateway:GetRestApis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"backup:ListBackupVaults")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeVolumes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeInstances")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeSpotFleetRequests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeVpnConnections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"efs:DescribeFileSystems")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"elb:DescribeLoadBalancers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"elbv2DdescribeLoadBalancers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fsx:DescribeFileSystems")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kinesis:ListStreams")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lambda:ListFunctions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rds:DescribeDBInstances")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"s3api:ListBuckets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sns:ListTopics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sqs:ListQueues")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:listMetrics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics")))),(0,r.kt)("h3",{id:"plugin-dependencies"},"Plugin dependencies"),(0,r.kt)("p",null,"To interact with Amazon APIs, you can use either use the ",(0,r.kt)("em",{parentName:"p"},"awscli")," binary provided by Amazon or ",(0,r.kt)("em",{parentName:"p"},"paws"),", a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For now, it is not possible to use ",(0,r.kt)("em",{parentName:"p"},"paws")," if you are using a proxy to reach AWS Cloudwatch APIs. ")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,r.kt)(o.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n')))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"AWS")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Cloudwatch-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"AWS Discover")," Centreon Monitoring Connector.\nYou'll be prompted to install several other AWS Monitoring Connectors as dependencies (they will be used to set the proper templates/indicators\non the discovered elements)."))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"AWS")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Cloudwatch-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install all the Centreon Monitoring Connector AWS RPM on the Centreon central server in order\nto make all the dependencies available:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws\\*\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"AWS Discover")," Centreon Monitoring Connector.\nYou'll be prompted to install several other AWS Monitoring Connectors as dependencies (they will be used to set the proper templates/indicators\non the discovered elements).")))),(0,r.kt)("h2",{id:"set-up-a-discovery-job"},"Set up a discovery job"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The general specifications and mechanics of the ",(0,r.kt)("em",{parentName:"p"},"Host Discovery")," feature is available ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"here"))),(0,r.kt)("h3",{id:"access-parameters"},"Access parameters"),(0,r.kt)("p",null,"Create a new discovery job and select ",(0,r.kt)("strong",{parentName:"p"},"AWS Discover")," as the provider. Click on ",(0,r.kt)("em",{parentName:"p"},"next")," and set the authentication parameters\nas well as optional access parameters if needed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(84902).Z,width:"890",height:"871"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Centreon Poller")," from where the discovery job will be launched"),(0,r.kt)("li",{parentName:"ul"},"If necessary, add an entreprise ",(0,r.kt)("strong",{parentName:"li"},"proxy URL and port")," to use to reach the AWS API"),(0,r.kt)("li",{parentName:"ul"},"If necessary, select the ",(0,r.kt)("strong",{parentName:"li"},"AWS credentials profile")," linked to the subscription to be used")),(0,r.kt)("p",null,"A new credentials profile has to be created the first time you need to use this authentification method. You can do so by clicking the '+' button and set the proper AWS\nauthentication parameters:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(26069).Z,width:"593",height:"288"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)("em",{parentName:"p"},"confirm")," then ",(0,r.kt)("em",{parentName:"p"},"next")," to go to the next step of the wizard and adjust the discovery parameters."),(0,r.kt)("h3",{id:"discovery-parameters"},"Discovery parameters"),(0,r.kt)("p",null,"Adjust the following settings:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(81568).Z,width:"885",height:"865"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All the fields of this form are optional")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS Region : Set the region name"),(0,r.kt)("li",{parentName:"ul"},"AWS Assume Role : Set arn of the role to be assumed if you are not using an ",(0,r.kt)("strong",{parentName:"li"},"AWS credentials profile"))),(0,r.kt)("h3",{id:"run-the-discovery-job-and-display-results"},"Run the discovery job and display results"),(0,r.kt)("p",null,"The step 4 of the wizard allows to adjust and set ",(0,r.kt)("strong",{parentName:"p"},"mappers")," if necessary; the Monitoring Connector comes along with predefined ",(0,r.kt)("strong",{parentName:"p"},"mappers")," that\ndon't typically need to be changed. If you have a specific need and want to edit the ",(0,r.kt)("strong",{parentName:"p"},"mappers")," section, refer to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery#how-to-use-the-mappers"},"this documentation")," to do so."),(0,r.kt)("p",null,"Final steps 5 & 6 will allow you to define a specific policy about the data modeling of the discovered results. Although the default configuration\nis usually enough to proceed, ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery#define-analysis-and-update-policies"},"this documentation"),"\nwill help you to customize it if needed. Coming to step 6, just click on ",(0,r.kt)("em",{parentName:"p"},"finish")," to launch the discovery job."),(0,r.kt)("p",null,"Once the discovery job complete, you can display the results by clicking on ",(0,r.kt)("em",{parentName:"p"},"job results"),". All the available Host Templates\ncorresponding to the discovered AWS resources will be automatically set, like in the example below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(50692).Z,width:"2490",height:"1189"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Some discovered elements may come up without any predefined Host Template; this is usually due to one or several ",(0,r.kt)("strong",{parentName:"p"},"mappers"),"\nconditions that cannot be applied")),(0,r.kt)("p",null,"Just select the elements you want to add to the Centreon configuration and click on ",(0,r.kt)("em",{parentName:"p"},"save"),". And... you're done !"),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation")," for Centreon Plugins typical issues."))}g.isMDXComponent=!0},84902:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-aws-cloudwatch-discover-accessparameters-45adf24b01a97903b52b260a3694a0f5.png"},26069:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},81568:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-aws-cloudwatch-discover-discoparameters-a7b5b145fb0ee4f79da30209968b0c91.png"},49691:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-aws-cloudwatch-discover-provider-bdec75393d26d77c97cbf7b7d2416bdc.png"},50692:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-aws-cloudwatch-discover-results-2e672d83c491dc189e4ce7ffceea81fd.png"}}]);