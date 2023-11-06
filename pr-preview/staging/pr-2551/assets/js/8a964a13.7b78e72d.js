"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[92079],{22185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-monitoring-centreon-ha",title:"Centreon-HA"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",id:"integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",title:"Centreon-HA",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-centreon-ha",title:"Centreon-HA"},sidebar:"pp",previous:{title:"Centreon SQL Metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics"},next:{title:"Amazon API Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/cloud-aws-apigateway"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Device Configuration",id:"device-configuration",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"SSH keys exchange",id:"ssh-keys-exchange",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"I get this error message. What does it mean?",id:"i-get-this-error-message-what-does-it-mean",level:3},{value:"The authenticity of host &#39;x.x.x.x (x.x.x.x)&#39; can&#39;t be established",id:"the-authenticity-of-host-xxxx-xxxx-cant-be-established",level:4},{value:"UNKNOWN: Command error: Permission denied, please try again",id:"unknown-command-error-permission-denied-please-try-again",level:4}],k={toc:d},h="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Centreon-HA is Centreon central server's high availability implementation. More information available ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/installation-of-centreon-ha/overview"},"here"),"."),(0,a.kt)("p",null,"This Monitoring Connector relies on two other Monitoring Connectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"},"Pacemaker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"Linux SNMP"))),(0,a.kt)("p",null,"It consequently uses both ",(0,a.kt)("strong",{parentName:"p"},"SNMP")," and ",(0,a.kt)("strong",{parentName:"p"},"SSH")," protocols to access a Centreon-HA cluster's nodes to get status and metrics related to the cluster's health."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Centreon-HA cluster nodes"),(0,a.kt)("li",{parentName:"ul"},"Centreon-HA cluster's active member ",(0,a.kt)("em",{parentName:"li"},"via")," the virtual IP address"),(0,a.kt)("li",{parentName:"ul"},"Third party server supporting the Quorum Device role (",(0,a.kt)("inlineCode",{parentName:"li"},"corosync-qnetd")," service)")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"PCS-Status",label:"PCS-Status",mdxType:"TabItem"},(0,a.kt)("p",null,"This template does not collect metrics, but provides the general state of the cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'presence of "failed actions"'),(0,a.kt)("li",{parentName:"ul"},"resources state:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"php")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cbd_rrd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gorgone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"centreon_central_sync")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cbd_central_broker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"centengine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"centreontrapd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"snmptrapd")))))),(0,a.kt)(o.Z,{value:"proc-corosync",label:"proc-corosync",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of processes matching the filter: ",(0,a.kt)("inlineCode",{parentName:"td"},"corosync")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(o.Z,{value:"proc-pacemakerd",label:"proc-pacemakerd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of processes matching the filter: ",(0,a.kt)("inlineCode",{parentName:"td"},"pacemakerd")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(o.Z,{value:"proc-pcsd",label:"proc-pcsd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of processes matching the filter: ",(0,a.kt)("inlineCode",{parentName:"td"},"pcsd")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"device-configuration"},"Device Configuration"),(0,a.kt)("p",null,"The configuration of SNMP on a Linux server is detailed in ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp#net-snmp-server-configuration"},"the ",(0,a.kt)("em",{parentName:"a"},"Linux SNMP")," Monitoring Connector's documentation page"),"."),(0,a.kt)("h3",{id:"network-flows"},"Network flows"),(0,a.kt)("p",null,"The Centreon Poller must be able to reach UDP/161 (SNMP) and TCP/22 (SSH) ports of the central nodes."),(0,a.kt)("h3",{id:"ssh-keys-exchange"},"SSH keys exchange"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NB : It is strongly recommended to monitor the cluster from an external poller rather than from the cluster's active node.")),(0,a.kt)("p",null,"Open a ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," command-line session on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the poller that will monitor the cluster"),(0,a.kt)("li",{parentName:"ul"},"both of the cluster nodes")),(0,a.kt)("p",null,"Then switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine"),"'s bash environment on both nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"su - centreon-engine\n")),(0,a.kt)("p",null,"Then run these commands on both nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519 -a 100\n")),(0,a.kt)("p",null,"We have generated a pair of keys on each server, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh")," directory. "),(0,a.kt)("p",null,"Run this command on the poller to display the user's public key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_ed25519.pub\n")),(0,a.kt)("p",null,"Once done, copy the content of the public key file displayed by ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," and paste it to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys")," (must be created) on both of the cluster's nodes and apply the correct file permissions (sill as ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chmod 600 ~/.ssh/authorized_keys\n")),(0,a.kt)("p",null,"The keys exchange must be validated by an initial connection from each node to the other in order to accept and register the peer node's SSH fingerprint (sill as ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh <cluster-node-ip-address>\n")),(0,a.kt)("p",null,"Then exit the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," session typing ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-D"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user is now able to log in ",(0,a.kt)("em",{parentName:"p"},"via")," SSH to both central nodes."),(0,a.kt)("p",null,"Now add the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user to the ",(0,a.kt)("inlineCode",{parentName:"p"},"haclient")," group to entitle it to run the cluster management commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -a -G haclient centreon-engine\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor the Centreon-HA cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Centreon-HA")," Monitoring Connector through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor the Centreon-HA cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-centreon-ha\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Centreon-HA")," Monitoring Connector through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"App-Monitoring-Centreon-HA-Cluster-Node-custom")," Host Template"),(0,a.kt)("li",{parentName:"ul"},"Fill the SNMP Version and Community fields according to the device's configuration")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the prerequisites have been met and the Plugin has been installed, the monitoring can be performed from the poller, using the command-line interface, running this command ",(0,a.kt)("strong",{parentName:"p"},"as user ",(0,a.kt)("inlineCode",{parentName:"strong"},"centreon-engine")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \\\n    --plugin=apps::pacemaker::local::plugin \\\n    --mode=crm \\\n    --hostname=10.0.0.1 \\\n    --command='pcs' \\\n    --command-options='status --full' \\\n    --verbose\n")),(0,a.kt)("p",null,"The output of this command should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"OK: Cluster is OK |\nResource 'php' is started on node 'central-primary'\nResource 'php' is started on node 'central-secondary'\nResource 'cbd_rrd' is started on node 'central-primary'\nResource 'cbd_rrd' is started on node 'central-secondary'\nResource 'vip' is started on node 'central-secondary'\nResource 'http' is started on node 'central-secondary'\nResource 'gorgone' is started on node 'central-secondary'\nResource 'centreon_central_sync' is started on node 'central-secondary'\nResource 'cbd_central_broker' is started on node 'central-secondary'\nResource 'centengine' is started on node 'central-secondary'\nResource 'centreontrapd' is started on node 'central-secondary'\nResource 'snmptrapd' is started on node 'central-secondary'\n")),(0,a.kt)("p",null,"In this example, the Plugin queries the node at ",(0,a.kt)("em",{parentName:"p"},"10.0.0.1")," to collect the overall state of the cluster and makes sure that all resources are started."),(0,a.kt)("p",null,"It will return a ",(0,a.kt)("em",{parentName:"p"},"WARNING")," state if ",(0,a.kt)("em",{parentName:"p"},"failed actions")," are displayed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcs status --full")," command. It will return a ",(0,a.kt)("em",{parentName:"p"},"CRITICAL")," state if one or more resources are stopped."),(0,a.kt)("p",null,"For each mode, all the available options can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl --plugin=apps::pacemaker::local::plugin --mode=crm --help\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--command='pcs'")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--command-options='status --full'")," overload the default command and options, using ",(0,a.kt)("inlineCode",{parentName:"p"},"pcs status --full")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"crm_mon -1 -r -f 2>&1"),"."),(0,a.kt)("h3",{id:"i-get-this-error-message-what-does-it-mean"},"I get this error message. What does it mean?"),(0,a.kt)("h4",{id:"the-authenticity-of-host-xxxx-xxxx-cant-be-established"},"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: all the SSH and monitoring commands must be executed as ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," on the poller.")),(0,a.kt)("p",null,"The full message looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.\nECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nAre you sure you want to continue connecting (yes/no)? UNKNOWN: Command too long to execute (timeout)...\n")),(0,a.kt)("p",null,"If you are getting this error message, this means that you have not yet accepted the server's fingerprint."),(0,a.kt)("p",null,"To fix that issue, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh x.x.x.x\n")),(0,a.kt)("p",null,"Then type 'yes' (without quotes) at this prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.\nECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nAre you sure you want to continue connecting (yes/no)?\n")),(0,a.kt)("h4",{id:"unknown-command-error-permission-denied-please-try-again"},"UNKNOWN: Command error: Permission denied, please try again"),(0,a.kt)("p",null,"The full message looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"UNKNOWN: Command error: Permission denied, please try again. - Permission denied, please try again. - Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).\n")),(0,a.kt)("p",null,"If the Plugin returns this message, it means that ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine"),"'s public key has not correctly been added to the list of authorized keys on the server that we are trying to monitor."),(0,a.kt)("p",null,"First we have to make sure that this key (stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon-engine/.ssh/id_ed25519.pub"),") is present in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon-engine/.ssh/authorized_keys"),"."),(0,a.kt)("p",null,"If the check point above is valid, then make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file and ",(0,a.kt)("inlineCode",{parentName:"p"},".ssh")," directory permissions are correct. You can check the permissions with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls -al /var/lib/centreon-engine/.ssh\n")),(0,a.kt)("p",null,"The permissions (first part of the line) should be the same as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"total 20\ndrwx------  2 centreon-engine centreon-engine 4096 Sep  4 14:44 .\ndrwxr-xr-x. 5 centreon-engine centreon-engine 4096 Sep  4 14:44 ..\n-rw-------  1 centreon-engine centreon-engine    0 Sep  4 14:44 authorized_keys\n")),(0,a.kt)("p",null,"To fix any read/write/execute permission difference, just run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 700 /var/lib/centreon-engine/.ssh\nchmod 600 /var/lib/centreon-engine/.ssh/authorized_keys\n")))}g.isMDXComponent=!0}}]);