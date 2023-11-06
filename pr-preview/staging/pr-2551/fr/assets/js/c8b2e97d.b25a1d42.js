"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[47816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"applications-lync-2013-mssql",title:"Lync 2013"},s=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-lync-2013-mssql",id:"integrations/plugin-packs/procedures/applications-lync-2013-mssql",title:"Lync 2013",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-lync-2013-mssql.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-lync-2013-mssql",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-lync-2013-mssql",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-lync-2013-mssql.md",tags:[],version:"current",frontMatter:{id:"applications-lync-2013-mssql",title:"Lync 2013"},sidebar:"pp",previous:{title:"Keepalived SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-keepalived-snmp"},next:{title:"Maltem Insight Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Username",id:"username",level:2},{value:"RPM",id:"rpm",level:3},{value:"Configuration of freetds.conf file",id:"configuration-of-freetdsconf-file",level:4},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new Lync MSSQL instance",id:"create-a-new-lync-mssql-instance",level:3},{value:"Host Macro Configuration",id:"host-macro-configuration",level:4}],u={toc:m},d="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Applications-Lync-2013-Mssql\n")),(0,r.kt)("h2",{id:"username"},"Username"),(0,r.kt)("p",null,"The username string should not be longer than 32 chararacters. Username must be\nin the following form: ","[","Servername|Domainname","]"," In order for the plugin to\noperate correctly, a database user with specific privileges is required. The\nmost simple way is to assign the Nagios-user the role \u201cserveradmin\u201d. As an\nalternative you can use the sa-User for the database connection. Alas, this\nopens a serious security hole, as the (cleartext) administrator password can be\nfound in the nagios configuration files Birk Bohne wrote the following script\nwhich allows the automated creation of a minimal, yet sufficient privileged\nmonitoring-user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"declare @dbname varchar(255)\ndeclare @check_mssql_health_USER varchar(255)\ndeclare @check_mssql_health_PASS varchar(255)\ndeclare @check_mssql_health_ROLE varchar(255)\ndeclare @source varchar(255)\ndeclare @options varchar(255)\ndeclare @backslash int\n\n/*******************************************************************/\nSET @check_mssql_health_USER = '\"[Servername|Domainname]\\Username\"'\nSET @check_mssql_health_PASS = 'Password'\nSET @check_mssql_health_ROLE = 'Rolename'\n/******************************************************************\n\nPLEASE CHANGE THE ABOVE VALUES ACCORDING TO YOUR REQUIREMENTS\n\n- Example for Windows authentication:\n  SET @check_mssql_health_USER = '\"[Servername|Domainname]\\Username\"'\n  SET @check_mssql_health_ROLE = 'Rolename'\n\n- Example for SQL Server authentication:\n  SET @check_mssql_health_USER = 'Username'\n  SET @check_mssql_health_PASS = 'Password'\n  SET @check_mssql_health_ROLE = 'Rolename'\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nIt is strongly recommended to use Windows authentication. Otherwise\nyou will get no reliable results for database usage.\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n*********** NO NEED TO CHANGE ANYTHING BELOW THIS LINE *************/\n\nSET @options = 'DEFAULT_DATABASE=MASTER, DEFAULT_LANGUAGE=English'\nSET @backslash = (SELECT CHARINDEX('\\', @check_mssql_health_USER))\nIF @backslash > 0\n  BEGIN\n    SET @source = ' FROM WINDOWS'\n    SET @options = ' WITH ' + @options\n  END\nELSE\n  BEGIN\n    SET @source = ''\n    SET @options = ' WITH PASSWORD=''' + @check_mssql_health_PASS + ''',' + @options\n  END\n\nPRINT 'create Nagios plugin user ' + @check_mssql_health_USER\nEXEC ('CREATE LOGIN ' + @check_mssql_health_USER + @source + @options)\nEXEC ('USE MASTER GRANT VIEW SERVER STATE TO ' + @check_mssql_health_USER)\nEXEC ('USE MASTER GRANT ALTER trace TO ' + @check_mssql_health_USER)\nEXEC ('USE MSDB GRANT SELECT ON sysjobhistory TO ' + @check_mssql_health_USER)\nEXEC ('USE MSDB GRANT SELECT ON sysjobschedules TO ' + @check_mssql_health_USER)\nEXEC ('USE MSDB GRANT SELECT ON sysjobs TO ' + @check_mssql_health_USER)\nPRINT 'User ' + @check_mssql_health_USER + ' created.'\nPRINT ''\n\ndeclare dblist cursor for\n  select name from sysdatabases WHERE name NOT IN ('master', 'tempdb', 'msdb') open dblist\n    fetch next from dblist into @dbname\n    while @@fetch_status = 0 begin\n      EXEC ('USE [' + @dbname + '] print ''Grant permissions in the db '' + ''\"'' + DB_NAME() + ''\"''')\n      EXEC ('USE [' + @dbname + '] CREATE ROLE ' + @check_mssql_health_ROLE)\n      EXEC ('USE [' + @dbname + '] GRANT EXECUTE TO ' + @check_mssql_health_ROLE)\n      EXEC ('USE [' + @dbname + '] GRANT VIEW DATABASE STATE TO ' + @check_mssql_health_ROLE)\n      EXEC ('USE [' + @dbname + '] GRANT VIEW DEFINITION TO ' + @check_mssql_health_ROLE)\n      EXEC ('USE [' + @dbname + '] CREATE USER ' + @check_mssql_health_USER + ' FOR LOGIN ' + @check_mssql_health_USER)\n      EXEC ('USE [' + @dbname + '] EXEC sp_addrolemember ' + @check_mssql_health_ROLE + ' , ' + @check_mssql_health_USER)\n      EXEC ('USE [' + @dbname + '] print ''Permissions in the db '' + ''\"'' + DB_NAME() + ''\" granted.''')\n      fetch next from dblist into @dbname\n    end\nclose dblist\ndeallocate dblist\n")),(0,r.kt)("p",null,"Please keep in mind that check","_","mssql","_","health\u2019s functionality is limited when\nusing SQL Server authentication. This method is strongly discouraged . Normally\nthere is already a Nagios-(Windows-)-user which can be used for the Windows\nauthentication method."),(0,r.kt)("h3",{id:"rpm"},"RPM"),(0,r.kt)("p",null,"In order to use this template, the following RPM are needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"freetds-0.82-6.el6.$ARCH"),(0,r.kt)("li",{parentName:"ul"},"perl-DBD-Sybase-1.10-1.el6.rf.$ARCH"),(0,r.kt)("li",{parentName:"ul"},"unixODBC-2.2.14-14.el6.$ARCH"),(0,r.kt)("li",{parentName:"ul"},"unixODBC-devel-2.2.14-14.el6.$ARCH")),(0,r.kt)("h4",{id:"configuration-of-freetdsconf-file"},"Configuration of freetds.conf file"),(0,r.kt)("p",null,"The /etc/freetds.conf file have to be modified in order to encrypt the password.\nTo do that :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vi /etc/freetds.conf\n")),(0,r.kt)("p",null,"Modify line tds 'version = 4.2' to 'tds version = 8.0'. Then remove comment\nsymbol at the beginning of this line."),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-a-new-lync-mssql-instance"},"Create a new Lync MSSQL instance"),(0,r.kt)("p",null,'Go to "Configuration ',">",' Hosts" and click "Add". Then, fill the form as shown by\nthe following table :'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Lync-2013-MSSQL-custom")))),(0,r.kt)("p",null,'Click "Save" button.'),(0,r.kt)("h4",{id:"host-macro-configuration"},"Host Macro Configuration"),(0,r.kt)("p",null,"The following macros must be configured on host:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MSSQLUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MSSQL username"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MSSQLPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MSSQL password"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MSSQLPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port Of the MSSQL instance (need to check in the SQL Studio if dynamic)"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}h.isMDXComponent=!0}}]);