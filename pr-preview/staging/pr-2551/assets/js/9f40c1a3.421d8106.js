"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[38493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"developer-module",title:"How to write a module"},s=void 0,u={unversionedId:"developer/developer-module",id:"version-23.10/developer/developer-module",title:"How to write a module",description:"Do you want to create a new module for Centreon or adapt an existing one? You're in the right place!",source:"@site/versioned_docs/version-23.10/developer/developer-module.md",sourceDirName:"developer",slug:"/developer/developer-module",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/developer/developer-module",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/developer/developer-module.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"developer-module",title:"How to write a module"},sidebar:"version-23.10/docs",previous:{title:"Developer resources",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/category/developer-resources"},next:{title:"How to write a Stream Connector",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/docs/developer/developer-stream-connector"}},p={},c=[{value:"Basis",id:"basis",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Connecting to the database",id:"connecting-to-the-database",level:3},{value:"Existing functions",id:"existing-functions",level:3}],d={toc:c},m="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Do you want to create a new module for Centreon or adapt an existing one? You're in the right place!"),(0,o.kt)("p",null,"An empty module template can be found inside ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-dummy"},"Centreon's repository")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))," Main documentation is directly stored in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-dummy/blob/master/README.md"},"dummy repository"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You should know that Centreon contains a page dedicated to the installation and uninstallation of modules\n(",(0,o.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager"),"). To make a module appear on this page, its directory must be placed inside\nCentreon's ",(0,o.kt)("inlineCode",{parentName:"p"},"modules/")," directory. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Shell"},"/usr/share/centreon/www/modules/dummy\n")),(0,o.kt)("h2",{id:"basis"},"Basis"),(0,o.kt)("p",null,"The essential elements your module's directory must contain are presented below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PHP"},"$module_conf['dummy'] = [\n    // Short module's name. Must be equal to your module's directory name\n    'name' => 'dummy',\n    // Full module's name\n    'rname' => 'Dummy Example Module',\n    // Module's version\n    'mod_release' => '23.04',\n    // Additional information\n    'infos' => 'This module is a skeleton',\n    // Allow your module to be uninstalled\n    'is_removeable' => '1',\n    // Module author's name\n    'author' => 'Centreon',\n    // Stability of module.\n    'stability' => 'stable',\n    // Last time module was updated.\n    'last_update' => '2020-12-01',\n    // Release notes link, if any.\n    'release_note' => 'https://docs.centreon.com/current/en/releases/centreon-os-extensions',\n    // Images associated with this module.\n    'images' => [\n        'images/centreon.png',\n    ],\n];\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[php > install.php]")),(0,o.kt)("p",null,"This PHP file is executed at module installation if it is configured\ninside the ",(0,o.kt)("em",{parentName:"p"},"conf.php")," file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[php > uninstall.php]")),(0,o.kt)("p",null,"This PHP file is executed at module uninstallation if it is configured\ninside the ",(0,o.kt)("em",{parentName:"p"},"conf.php")," file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[sql > install.sql]")),(0,o.kt)("p",null,"This SQL file is executed during module installation if it is configured inside the ",(0,o.kt)("em",{parentName:"p"},"conf.php")," file. If you want\nyour module to be available from Centreon menus, you must insert new entries into the ",(0,o.kt)("inlineCode",{parentName:"p"},"topology")," table of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"centreon")," database. An example is available inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dummy")," module."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[sql > uninstall.sql]")),(0,o.kt)("p",null,"This SQL file is executed during module uninstallation if it is configured inside the ",(0,o.kt)("em",{parentName:"p"},"conf.php")," file. It can also\nremove your module from Centreon menus."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[generate_files > ","*",".php]")),(0,o.kt)("p",null,"The PHP files contained inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"generate_files")," directory will be executed during the generation of monitoring engine\nconfiguration files (inside ",(0,o.kt)("strong",{parentName:"p"},"Configuration > Monitoring Engines"),"). Those files must generate configuration\nfiles."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[UPGRADE > dummy-x.x > sql > upgrade.sql]")),(0,o.kt)("p",null,"Centreon provides an upgrade system for modules. To use it, just add a directory under ",(0,o.kt)("inlineCode",{parentName:"p"},"UPGRADE")," named using the\nfollowing pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"<module name>-<version>"),". When you click the upgrade button, Centreon will search for scripts\nto execute, following the logical order of versions."),(0,o.kt)("p",null,"For example, if the version 1.0 of the dummy module is installed and the following directories exist:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Shell"},"ls UPGRADE\ndummy-1.1 dummy-1.2\n")),(0,o.kt)("p",null,"Centreon will execute the scripts in the following order: 1.1, 1.2. A configuration file in each upgrade directory is\npresent in order to allow (or not) the execution."),(0,o.kt)("p",null,"You are free to organize the remaining files (your module's content) as you like."),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"This section is deprecated; please refer to\nthe ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-dummy/blob/master/README.md"},"dummy repository documentation")))),(0,o.kt)("p",null,"That's great, you know how to install a module! Since an empty module is not really useful, put your imagination to work.\nKnowing that you can do almost anything, it should not be too complicated :-)."),(0,o.kt)("h3",{id:"connecting-to-the-database"},"Connecting to the database"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"centreon")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"centstorage")," databases by calling the following file:\n",(0,o.kt)("inlineCode",{parentName:"p"},"centreon/www/class/centreonDB.class.php"),"."),(0,o.kt)("p",null,"For example, execute requests like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PHP"},'$pearDB = new CentreonDB();\n$pearDB->query("SELECT * FROM host");\n')),(0,o.kt)("h3",{id:"existing-functions"},"Existing functions"),(0,o.kt)("p",null,"You can access most of the functions already developed within Centreon using ",(0,o.kt)("inlineCode",{parentName:"p"},"include()")," statements. They are generally\nstored in ",(0,o.kt)("inlineCode",{parentName:"p"},"centreon/www/class/"),"."),(0,o.kt)("p",null,"Before developing your own function, check the existing code. It could save you some time!"))}f.isMDXComponent=!0}}]);