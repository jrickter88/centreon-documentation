"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[30008],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>c});t(67294);var r=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={id:"developer-broker-stream-connector",title:"Stream Connectors"},s=void 0,u={unversionedId:"developer/developer-broker-stream-connector",id:"version-23.10/developer/developer-broker-stream-connector",title:"Stream Connectors",description:"Centreon Broker fournit un Stream Connector. Si vous ne trouvez pas de connecteur appropri\xe9 parmi ceux propos\xe9s, ce Stream Connector r\xe9pondra certainement \xe0 vos besoins. Son principe est d\u2019exposer une partie de l\u2019API Centreon Broker par le biais de l\u2019interpr\xe9teur Lua et l\u2019utilisateur n\u2019a plus qu\u2019\xe0 la remplir selon ses besoins.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-broker-stream-connector.md",sourceDirName:"developer",slug:"/developer/developer-broker-stream-connector",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-broker-stream-connector",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-broker-stream-connector.md",tags:[],version:"23.10",lastUpdatedAt:1699282580,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"developer-broker-stream-connector",title:"Stream Connectors"},sidebar:"version-23.10/docs",previous:{title:"Comment \xe9crire un widget",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-widget"},next:{title:"Le protocole BBDO",permalink:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-broker-bbdo"}},p={},c=[{value:"Centreon Broker expos\xe9",id:"centreon-broker-expos\xe9",level:2},{value:"Le SDK Lua de Broker",id:"le-sdk-lua-de-broker",level:2},{value:"L\u2019objet <em>broker_log</em>",id:"lobjet-broker_log",level:3},{value:"Le socket TCP de Broker",id:"le-socket-tcp-de-broker",level:3},{value:"La table <em>broker</em>",id:"la-table-broker",level:3},{value:"L\u2019objet <em>broker_cache</em>",id:"lobjet-broker_cache",level:3},{value:"La fonction init()",id:"la-fonction-init",level:2},{value:"La fonction write()",id:"la-fonction-write",level:2},{value:"La fonction filter()",id:"la-fonction-filter",level:2},{value:"La fonction flush()",id:"la-fonction-flush",level:2}],d={toc:c},m="wrapper";function k(e){var{components:n}=e,l=i(e,["components"]);return(0,r.kt)(m,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},d,l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centreon Broker fournit un Stream Connector. Si vous ne trouvez pas de connecteur appropri\xe9 parmi ceux propos\xe9s, ce Stream Connector r\xe9pondra certainement \xe0 vos besoins. Son principe est d\u2019exposer une partie de l\u2019API Centreon Broker par le biais de l\u2019interpr\xe9teur Lua et l\u2019utilisateur n\u2019a plus qu\u2019\xe0 la remplir selon ses besoins."),(0,r.kt)("h2",{id:"centreon-broker-expos\xe9"},"Centreon Broker expos\xe9"),(0,r.kt)("p",null,"Voici le code Lua minimal acceptable pour fonctionner comme Stream Connector\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  function init(conf)\n  end\n\n  function write(d)\n    return true\n  end\n")),(0,r.kt)("p",null,"Nous recommandons de placer les scripts Lua dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/centreon-broker/lua"),". S\u2019il n\u2019existe pas, nous pouvons le cr\xe9er. Faites juste attention \xe0 ce que ce r\xe9pertoire soit accessible \xe0 l\u2019utilisateur centreon-broker. Si un Stream Connector est compos\xe9 de plusieurs fichiers (un script principal et un module par exemple), vous pouvez les placer dans ce r\xe9pertoire. Si une biblioth\xe8que dynamique (fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"\\*.so"),") est utilis\xe9e par un script Lua, placez-la dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/centreon-broker/lua/lib"),"."),(0,r.kt)("p",null,"Lorsque Centreon Broker d\xe9marre, il initialise tous les connecteurs configur\xe9s. Pour le Stream Connector, il charge le script Lua, contr\xf4le sa syntaxe et v\xe9rifie que les fonctions ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," existent."),(0,r.kt)("p",null,"Centreon Broker v\xe9rifie \xe9galement si une fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"filter(category, element)")," existe."),(0,r.kt)("p",null,"Examinons ces fonctions. La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," est appel\xe9e lorsque le connecteur est initialis\xe9. L\u2019argument fourni \xe0 cette fonction est une table Lua contenant les informations donn\xe9es par l\u2019utilisateur dans l\u2019interface de configuration de l'output de Broker. Par exemple, si une adresse IP est fournie avec le nom ",(0,r.kt)("em",{parentName:"p"},"address")," et la valeur ",(0,r.kt)("em",{parentName:"p"},"192.168.1.18"),", alors cette information sera accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},'conf["address"]'),"."),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," est appel\xe9e chaque fois qu\u2019un \xe9v\xe9nement est re\xe7u d\u2019un collecteur par le biais de Broker. Cet \xe9v\xe9nement est configur\xe9 pour \xeatre envoy\xe9 \xe0 ce connecteur. Cette fonction a besoin d\u2019un argument qui est l\u2019\xe9v\xe9nement traduit sous forme de table Lua."),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," doit retourner une valeur bool\xe9enne ",(0,r.kt)("strong",{parentName:"p"},"True")," si les \xe9v\xe9nements sont trait\xe9s et ",(0,r.kt)("strong",{parentName:"p"},"False")," dans le cas contraire."),(0,r.kt)("p",null,"Si cette fonction ne renvoie pas une valeur bool\xe9enne, Broker d\xe9clenche une erreur."),(0,r.kt)("h2",{id:"le-sdk-lua-de-broker"},"Le SDK Lua de Broker"),(0,r.kt)("p",null,"Pour simplifier la vie du d\xe9veloppeur Lua, plusieurs objets sont propos\xe9s et directement disponibles pour le script."),(0,r.kt)("h3",{id:"lobjet-broker_log"},"L\u2019objet ",(0,r.kt)("em",{parentName:"h3"},"broker","_","log")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:set_parameters(level, filename)")," permet \xe0 l\u2019utilisateur de d\xe9finir un niveau de journal et un nom de fichier. Le niveau est un nombre entier compris entre 1 et 3, du plus important au moins important. Le nom du fichier doit contenir le chemin d\u2019acc\xe8s complet. Et le fichier doit \xeatre accessible \xe0 centreon-broker. Si cette m\xe9thode n\u2019est pas appel\xe9e, les journaux seront \xe9crits dans les journaux de centreon Broker."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:info(level, content)")," \xe9crit une ",(0,r.kt)("em",{parentName:"li"},"information")," de journal si le niveau donn\xe9 est inf\xe9rieur ou \xe9gal \xe0 celui configur\xe9. Le contenu est le texte \xe0 \xe9crire dans les journaux."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:warning(level, content)")," fonctionne comme ",(0,r.kt)("inlineCode",{parentName:"li"},"log_info")," mais \xe9crit un ",(0,r.kt)("em",{parentName:"li"},"avertissement"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:error(level, content)")," fonctionne comme ",(0,r.kt)("inlineCode",{parentName:"li"},"log_info")," mais \xe9crit une ",(0,r.kt)("em",{parentName:"li"},"erreur"),".")),(0,r.kt)("p",null,"Voici un exemple\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  function init(conf)\n    -- Here, we allow all logs with level 3 and set the output to\n    -- /tmp/test.log.\n    broker_log:set_parameters(3, "/tmp/test.log")\n  end\n\n  function write(d)\n    -- For each entry, we write the key and the value.\n    for k,v in pairs(d) do\n      broker_log:info(3, k .. " => " .. tostring(v))\n    end\n    return true\n  end\n')),(0,r.kt)("p",null,"Ici, lorsque la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," est ex\xe9cut\xe9e, l\u2019objet ",(0,r.kt)("em",{parentName:"p"},"broker","_","log")," est param\xe9tr\xe9 avec un niveau max\xa03 et un fichier de sortie ",(0,r.kt)("em",{parentName:"p"},"/tmp/test.log"),"."),(0,r.kt)("p",null,"Ensuite, \xe0 chaque appel de ",(0,r.kt)("inlineCode",{parentName:"p"},"write()"),", les \xe9v\xe9nements re\xe7us sont enregistr\xe9s comme des informations. Nous obtenons un r\xe9sultat comme celui-ci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Fri Jan 26 08:31:49 2018: INFO: service_id => 21\n  Fri Jan 26 08:31:49 2018: INFO: type => 0\n  Fri Jan 26 08:31:49 2018: INFO: host_id => 13\n  Fri Jan 26 08:31:49 2018: INFO: element => 1\n  Fri Jan 26 08:31:49 2018: INFO: comment_data =>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pour utiliser une m\xe9thode en Lua, le s\xe9parateur entre l\u2019objet et la m\xe9thode est ",(0,r.kt)("inlineCode",{parentName:"p"},":"),"\xa0; ",(0,r.kt)("em",{parentName:"p"},"broker","_","log")," est un objet puisqu\u2019il contient des informations telles que le niveau maximum ou le fichier de destination.")),(0,r.kt)("h3",{id:"le-socket-tcp-de-broker"},"Le socket TCP de Broker"),(0,r.kt)("p",null,"Un socket TCP de base est disponible dans le SDK ",(0,r.kt)("em",{parentName:"p"},"Broker"),". Voici un exemple simple\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local socket = broker_tcp_socket.new()\n  socket:connect("10.40.1.2", 9002)\n  socket:write(message)\n  answer = socket:read()\n  socket:close()\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dans cet exemple, le premier appel est ",(0,r.kt)("em",{parentName:"li"},"broker","_","tcp","_","socket.new()"),". Il cr\xe9e un nouveau socket en appelant la fonction ",(0,r.kt)("em",{parentName:"li"},"new()")," stock\xe9e dans la table ",(0,r.kt)("em",{parentName:"li"},"broker","_","tcp","_","socket"),"."),(0,r.kt)("li",{parentName:"ol"},"L\u2019\xe9tape suivante est un appel \xe0 la m\xe9thode ",(0,r.kt)("em",{parentName:"li"},"connect")," qui n\xe9cessite deux arguments\xa0: une cha\xeene indiquant une adresse IP ou un nom d\u2019h\xf4te auquel se connecter et le port \xe0 utiliser."),(0,r.kt)("li",{parentName:"ol"},"L\u2019\xe9tape suivante est un appel \xe0 la m\xe9thode ",(0,r.kt)("em",{parentName:"li"},"write")," qui \xe9crit une cha\xeene dans le socket. L\u2019appel de la m\xe9thode est termin\xe9 lorsque l\u2019int\xe9gralit\xe9 du message est envoy\xe9e."),(0,r.kt)("li",{parentName:"ol"},"La m\xe9thode ",(0,r.kt)("em",{parentName:"li"},"read")," re\xe7oit une cha\xeene comme r\xe9sultat."),(0,r.kt)("li",{parentName:"ol"},"Lorsque l\u2019utilisateur a fini d\u2019utiliser le socket, il peut le fermer avec la m\xe9thode ",(0,r.kt)("em",{parentName:"li"},"close()"),".")),(0,r.kt)("p",null,"Cet objet socket fournit \xe9galement une m\xe9thode ",(0,r.kt)("em",{parentName:"p"},"get","_","state()")," qui renvoie une cha\xeene de caract\xe8res\xa0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"unconnected"),"\xa0: le socket n\u2019est pas connect\xe9"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"hostLookup"),": le socket effectue une recherche de nom d\u2019h\xf4te"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"connecting"),": le socket a commenc\xe9 \xe0 \xe9tablir une connexion"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"connected"),": une connexion est \xe9tablie"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"closing"),": le socket est sur le point de se fermer (des donn\xe9es peuvent encore \xeatre en attente d\u2019\xe9criture).")),(0,r.kt)("h3",{id:"la-table-broker"},"La table ",(0,r.kt)("em",{parentName:"h3"},"broker")),(0,r.kt)("p",null,"Plusieurs fonctions sont disponibles dans cette table. Ces fonctions ne sont pas des m\xe9thodes, ",(0,r.kt)("em",{parentName:"p"},"broker")," est juste une table qui les contient. On peut trouver ici\xa0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"json_encode(object)")," qui convertit un objet Lua en json. Le json est retourn\xe9 sous forme de cha\xeene par la fonction."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"json_decode(json)")," qui convertit une cha\xeene json en objet Lua. L\u2019objet est directement retourn\xe9 par la m\xe9thode. Une deuxi\xe8me valeur est \xe9galement retourn\xe9e. Elle n\u2019est d\xe9finie que lorsqu\u2019une erreur s\u2019est produite et contient une cha\xeene d\xe9crivant l\u2019erreur."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parse_perfdata(str)")," qui prend comme argument une cha\xeene contenant des perfdata. Un deuxi\xe8me argument bool\xe9en est disponible. Si sa valeur est ",(0,r.kt)("em",{parentName:"li"},"true"),", la table retourn\xe9e est plus grande et donne tous les d\xe9tails sur les m\xe9triques ainsi que les seuils \xab\xa0",(0,r.kt)("em",{parentName:"li"},"warning\xa0\xbb")," et ",(0,r.kt)("em",{parentName:"li"},"\xab\xa0critical\xa0\xbb"),". En cas de succ\xe8s, il retourne une table contenant les valeurs r\xe9cup\xe9r\xe9es \xe0 partir des perfdata. En cas d\u2019\xe9chec, il renvoie un objet nil et une cha\xeene de description de l\u2019erreur."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"url_encode(text)")," qui convertit le ",(0,r.kt)("em",{parentName:"li"},"texte")," de la cha\xeene de caract\xe8res en une cha\xeene encod\xe9e en URL."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"stat(filename)")," qui appelle la fonction ",(0,r.kt)("inlineCode",{parentName:"li"},"stat")," syst\xe8me sur le fichier. En cas de succ\xe8s, nous obtenons une table contenant diverses informations sur le fichier (voir l\u2019exemple ci-dessous). Sinon, cette table est ",(0,r.kt)("inlineCode",{parentName:"li"},"nil")," et une deuxi\xe8me valeur retourn\xe9e est donn\xe9e et contient un message d\u2019erreur."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"md5(str)")," qui calcule le MD5 de la cha\xeene ",(0,r.kt)("inlineCode",{parentName:"li"},"str")," et le renvoie sous forme de cha\xeene."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bbdo_version()")," qui renvoie la version BBDO configur\xe9e dans Centreon Broker.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  local obj = {\n    a = 1,\n    b = 2,\n    c = { 'aa', 'bb', 'cc' }\n  }\n  local json = broker.json_encode(obj)\n  print(json)\n")),(0,r.kt)("p",null,"qui renvoie"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},"  { \"a\": 1, \"b\": 2, \"c\": [ 'aa', 'bb', 'cc' ] }\n")),(0,r.kt)("p",null,"Un deuxi\xe8me exemple est le suivant\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local json = { "a": 1, "b": 2, "c": [ \'aa\', \'bb\', \'cc\' ] }\n  local obj, err = broker.json_decode(json)\n\n  for i,v in pairs(obj) do\n    print(i .. " => " .. tostring(v))\n  end\n')),(0,r.kt)("p",null,"devrait retourner quelque chose comme ceci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  a => 1\n  b => 2\n  c => table: 0x12ef67b5\n")),(0,r.kt)("p",null,"Dans ce cas (pas d\u2019erreur), ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," est ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,r.kt)("p",null,"Il est \xe9galement facile d\u2019acc\xe9der \xe0 chaque champ de l\u2019objet, par exemple\xa0: ",(0,r.kt)("inlineCode",{parentName:"p"},"obj['a']")," donne 1, ou ",(0,r.kt)("inlineCode",{parentName:"p"},"obj['c'][1]")," donne ",(0,r.kt)("em",{parentName:"p"},"aa"),", ou ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.b")," donne 2."),(0,r.kt)("p",null,"Voici un exemple montrant les possibilit\xe9s de la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"parse_perfdata"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local perf, err_str = broker.parse_perfdata(" \'one value\'=2s;3;5;0;9 \'a b c\'=3.14KB;0.8;1;0;10")\n\n  if perf then\n    for i,v in pairs(perf) do\n      print(i .. " => " .. tostring(v))\n    end\n  else\n    print("parse_perfdata error: " .. err_str)\n  end\n')),(0,r.kt)("p",null,"devrait retourner quelque chose comme ceci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  a b c => 3.14\n  one value => 2\n")),(0,r.kt)("p",null,"Si maintenant, nous appelons la m\xeame fonction avec ",(0,r.kt)("em",{parentName:"p"},"true")," comme deuxi\xe8me argument\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local perf, err_str = broker.parse_perfdata("pl=45%;40;80;0;100", true)\n\n  if perf then\n    print("Content of \'pl\'")\n    for i,v in pairs(perf[\'pl\']) do\n      print(i .. " => " .. tostring(v))\n    end\n  else\n    print("parse_perfdata error: " .. err_str)\n  end\n')),(0,r.kt)("p",null,"devrait retourner quelque chose comme ceci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Content of 'pl'\n  value => 45\n  uom => %\n  min => 0\n  max => 100\n  warning_low => 0\n  warning_high => 40\n  warning_mode => false\n  critical_low => 0\n  critical_high => 80\n  critical_mode => false\n")),(0,r.kt)("p",null,"Attention, les cl\xe9s ne sont pas tri\xe9es dans les tables de hachage, donc si vous cr\xe9ez un tel programme, les donn\xe9es ne seront probablement pas dans le m\xeame ordre."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local str = broker.url_encode("La le\xe7on du ch\xe2teau de l\'araign\xe9e")\n  print(str)\n')),(0,r.kt)("p",null,"devrait retourner quelque chose comme ceci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  La%20le%C3%A7on%20du%20ch%C3%A2teau%20de%20l%27araign%C3%A9e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local s, err = broker.stat("filename")\n  for i,v in pairs(perf[\'pl\']) do\n    print(i .. " => " .. tostring(v))\n  end\n')),(0,r.kt)("p",null,"devrait retourner quelque chose comme ceci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  uid=>1000\n  gif=>1000\n  size=>279\n  ctime=>1587641144\n  mtime=>1587641144\n  atime=>1587641144\n")),(0,r.kt)("p",null,"Si une erreur se produit, ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," est ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," tandis que ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," contient une cha\xeene de caract\xe8res contenant un message d\u2019erreur."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  local info = broker.md5('Hello World!')\n  print(info)\n")),(0,r.kt)("p",null,"doit retourner une cha\xeene de caract\xe8res de la forme\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  ed076287532e86365e841e92bfc50d8c\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  local v = broker.bbdo_version()\n  print(v)\n")),(0,r.kt)("p",null,"doit retourner une cha\xeene de caract\xe8res de la forme\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  2.0.0\n")),(0,r.kt)("h3",{id:"lobjet-broker_cache"},"L\u2019objet ",(0,r.kt)("em",{parentName:"h3"},"broker","_","cache")),(0,r.kt)("p",null,"Cet objet fournit plusieurs m\xe9thodes pour acc\xe9der au cache. Parmi les donn\xe9es, nous pouvons obtenir les noms d\u2019h\xf4tes, etc..."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Les fonctions d\xe9crites ici n\xe9cessitent que le cache soit rempli. Il est important pour cela d\u2019activer les \xe9v\xe9nements NEB, sinon ces fonctions ne feront que retourner ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),". ",(0,r.kt)("strong",{parentName:"p"},"Le cache est rempli lorsqu\u2019un moteur red\xe9marre."))),(0,r.kt)("p",null,"Les m\xe9thodes disponibles sont les suivantes\xa0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_ba(ba_id)")," qui obtient des informations ",(0,r.kt)("em",{parentName:"li"},"ba")," \xe0 partir de son ID. Cette fonction retourne une table le cas \xe9ch\xe9ant ou ",(0,r.kt)("em",{parentName:"li"},"nil")," autrement."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_bv(bv_id)")," qui r\xe9cup\xe8re les informations ",(0,r.kt)("em",{parentName:"li"},"bv")," \xe0 partir de son ID. Cette fonction retourne une table le cas \xe9ch\xe9ant ou ",(0,r.kt)("em",{parentName:"li"},"nil")," autrement."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_bvs(ba_id)")," qui r\xe9cup\xe8re tous les ",(0,r.kt)("em",{parentName:"li"},"bv")," contenant le ",(0,r.kt)("em",{parentName:"li"},"ba")," de l\u2019ID ",(0,r.kt)("em",{parentName:"li"},"ba","_","id"),". Cette fonction renvoie un tableau d\u2019ID ",(0,r.kt)("em",{parentName:"li"},"bv"),", potentiellement vide si aucune ",(0,r.kt)("em",{parentName:"li"},"bv")," n\u2019est trouv\xe9e."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_check_command(host_id[,service_id])")," qui retourne la commande de check configur\xe9e pour le host ou le service. Le ",(0,r.kt)("em",{parentName:"li"},"service","_","id")," est facultatif, s'il est fourni, nous voulons la commande de check d'un service, sinon  nous voulons celle d'un host. Si elle n'existe pas dans le cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," est retourn\xe9."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_hostgroup_name(id)")," qui r\xe9cup\xe8re dans le cache le nom du groupe d\u2019h\xf4tes de l\u2019ID donn\xe9. Cette fonction renvoie une cha\xeene ou ",(0,r.kt)("em",{parentName:"li"},"nil")," autrement."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_hostgroups(host_id)")," qui obtient la liste des groupes d\u2019h\xf4tes contenant l\u2019h\xf4te correspondant \xe0 ",(0,r.kt)("em",{parentName:"li"},"host","_","id"),". La valeur retourn\xe9e est un tableau d\u2019objets, chacun contenant deux champs, ",(0,r.kt)("em",{parentName:"li"},"group","_","id")," et ",(0,r.kt)("em",{parentName:"li"},"group","_","name"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_hostname(id)")," qui r\xe9cup\xe8re dans le cache le nom d\u2019h\xf4te correspondant \xe0 l\u2019ID d\u2019h\xf4te donn\xe9. Cette fonction retourne une cha\xeene avec le nom de l\u2019h\xf4te ou ",(0,r.kt)("em",{parentName:"li"},"nil")," autrement."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_index_mapping(index_id)")," qui r\xe9cup\xe8re du cache l\u2019objet de mapping d\u2019index de l\u2019ID d\u2019index donn\xe9. Le r\xe9sultat est un tableau contenant trois cl\xe9s, ",(0,r.kt)("inlineCode",{parentName:"li"},"index_id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"host_id")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"service_id"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_instance_name(instance_id)")," qui r\xe9cup\xe8re dans le cache le nom de l\u2019instance correspondant \xe0 l\u2019ID de l\u2019instance."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_metric_mapping(metric_id)")," qui r\xe9cup\xe8re dans le cache l\u2019objet de mapping de m\xe9triques de l\u2019ID de m\xe9trique donn\xe9. Le r\xe9sultat est un tableau contenant deux cl\xe9s, ",(0,r.kt)("inlineCode",{parentName:"li"},"metric_id")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"index_id"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_service_description(host_id,service_id)")," qui r\xe9cup\xe8re dans le cache la description du service pour la paire donn\xe9e host","_","id / service","_","id. Cette fonction renvoie une cha\xeene de caract\xe8res ou ",(0,r.kt)("em",{parentName:"li"},"nil")," autrement."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_servicegroup_name(id)")," qui r\xe9cup\xe8re dans le cache le nom du groupe de services de l\u2019ID donn\xe9. Cette fonction renvoie une cha\xeene ou ",(0,r.kt)("em",{parentName:"li"},"nil")," autrement."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_servicegroups(host_id, service_id)")," qui obtient la liste des groupes de services contenant le service correspondant \xe0 la paire ",(0,r.kt)("em",{parentName:"li"},"host","_","id")," / ",(0,r.kt)("em",{parentName:"li"},"service","_","id"),". La valeur retourn\xe9e est un tableau d\u2019objets, chacun contenant deux champs, ",(0,r.kt)("em",{parentName:"li"},"group","_","id")," et ",(0,r.kt)("em",{parentName:"li"},"group","_","name"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_notes(host_id[,service_id])")," qui r\xe9cup\xe8re les notes configur\xe9es dans l\u2019h\xf4te ou le service. Le ",(0,r.kt)("em",{parentName:"li"},"service","_","id")," est facultatif, s\u2019il est fourni, nous voulons des notes d\u2019un service, sinon nous voulons des notes d\u2019un h\xf4te. Si l\u2019objet n\u2019est pas trouv\xe9 dans le cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," est retourn\xe9."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_notes_url(host_id[, service_id])")," qui r\xe9cup\xe8re l\u2019URL des notes configur\xe9e dans l\u2019h\xf4te ou le service. Le ",(0,r.kt)("em",{parentName:"li"},"service","_","id")," est facultatif, s\u2019il est fourni, nous voulons que l\u2019",(0,r.kt)("em",{parentName:"li"},"URL des notes")," provienne d\u2019un service, sinon nous voulons qu\u2019elle provienne d\u2019un h\xf4te. Si l\u2019objet n\u2019est pas trouv\xe9 dans le cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," est retourn\xe9."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_action_url(host_id)")," qui obtient l\u2019URL d\u2019action configur\xe9e dans l\u2019h\xf4te ou le service. Le ",(0,r.kt)("em",{parentName:"li"},"service","_","id")," est facultatif, s\u2019il est fourni, nous voulons l\u2019",(0,r.kt)("em",{parentName:"li"},"URL d\u2019action")," d\u2019un service, sinon nous la voulons d\u2019un h\xf4te. Si l\u2019objet n\u2019est pas trouv\xe9 dans le cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," est retourn\xe9."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_severity(host_id[,service_id])")," qui obtient la s\xe9v\xe9rit\xe9 d\u2019un h\xf4te ou d\u2019un service. Si vous ne fournissez que l\u2019",(0,r.kt)("em",{parentName:"li"},"host","_","id"),", nous supposons que vous voulez obtenir une s\xe9v\xe9rit\xe9 d\u2019h\xf4te. Si un h\xf4te ou un service n\u2019a pas de s\xe9v\xe9rit\xe9, la fonction renvoie une valeur ",(0,r.kt)("em",{parentName:"li"},"nil"),".")),(0,r.kt)("h2",{id:"la-fonction-init"},"La fonction init()"),(0,r.kt)("p",null,"Cette fonction ne doit ",(0,r.kt)("strong",{parentName:"p"},"pas")," \xeatre d\xe9finie comme ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", sinon elle ne sera pas d\xe9tect\xe9e par centreon Broker."),(0,r.kt)("p",null,"Prenons l\u2019exemple de cette configuration\xa0:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(63283).Z,width:"1230",height:"483"})),(0,r.kt)("p",null,"avec deux entr\xe9es personnalis\xe9es\xa0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"une cha\xeene de caract\xe8res ",(0,r.kt)("em",{parentName:"li"},"elastic-address")," avec comme contenu ",(0,r.kt)("inlineCode",{parentName:"li"},"172.17.0.1"),"."),(0,r.kt)("li",{parentName:"ol"},"un num\xe9ro ",(0,r.kt)("em",{parentName:"li"},"elastic-port")," avec 9200 comme contenu.")),(0,r.kt)("p",null,"Ensuite, la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," y a acc\xe8s comme ceci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  function init(conf)\n    local my_address = conf['elastic-address']\n    local port = conf['elastic-port']\n  end\n")),(0,r.kt)("h2",{id:"la-fonction-write"},"La fonction write()"),(0,r.kt)("p",null,"Cette fonction ne doit ",(0,r.kt)("strong",{parentName:"p"},"pas")," \xeatre d\xe9finie comme ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", sinon elle ne sera pas vue par Broker."),(0,r.kt)("p",null,"Le seul argument donn\xe9 \xe0 la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," est un \xe9v\xe9nement. Il est donn\xe9 avec les m\xeames donn\xe9es que celles que nous pouvons voir dans Centreon Broker."),(0,r.kt)("p",null,"Pour classer l\u2019\xe9v\xe9nement, nous avons deux donn\xe9es qui sont ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),". Ces deux informations sont des nombres entiers. Si nous concat\xe9nons ces deux nombres, nous obtenons un entier plus long \xe9gal \xe0 l\u2019\xe9v\xe9nement ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \xe9galement disponible dans l\u2019\xe9v\xe9nement comme ",(0,r.kt)("inlineCode",{parentName:"p"},"_type"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"entier")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"court")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"court")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","type ="),(0,r.kt)("td",{parentName:"tr",align:null},"cat\xe9gorie"),(0,r.kt)("td",{parentName:"tr",align:null},"\xe9l\xe9m")))),(0,r.kt)("p",null,"Parfois, on peut vouloir le nom d\u2019h\xf4te correspondant \xe0 un \xe9v\xe9nement mais on ne re\xe7oit que le ",(0,r.kt)("inlineCode",{parentName:"p"},"host_id"),". Il est possible de l\u2019obtenir gr\xe2ce \xe0 la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"broker_cache:get_hostname(id)"),"."),(0,r.kt)("p",null,"Par exemple\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  function write(d)\n    if d.category == 3 and d.element == 1 then\n      local hostname = broker_cache:get_hostname(d.host_id)\n      if hostname then\n        broker_log:info("host name "\n            .. hostname .. " corresponds to host id " .. d.host_id)\n      else\n        -- Unable to get the name, we wait for the next time, wishing\n        -- the cache will contain the name. And so return 0\n        return true\n      end\n    end\n    -- Here, we can add the event processing...\n\n    return true\n  end\n')),(0,r.kt)("p",null,"La valeur retourn\xe9e par la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," est un bool\xe9en. Tant que cette valeur est ",(0,r.kt)("em",{parentName:"p"},"false"),", Broker garde les \xe9v\xe9nements envoy\xe9s en m\xe9moire et si n\xe9cessaire en r\xe9tention. Lorsque nous sommes s\xfbrs que tous les \xe9v\xe9nements ont \xe9t\xe9 trait\xe9s, l\u2019id\xe9e est que ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," retourne ",(0,r.kt)("em",{parentName:"p"},"true"),", puis Broker lib\xe8re la pile d\u2019\xe9v\xe9nements."),(0,r.kt)("p",null,"Gr\xe2ce \xe0 cela, il est possible d\u2019\xe9viter de r\xe9aliser les \xe9v\xe9nements un par un. La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," peut les stocker dans une pile et retourner la valeur ",(0,r.kt)("em",{parentName:"p"},"false"),", et lorsqu\u2019une limite donn\xe9e est atteinte, elle peut les envoyer tous \xe0 leur destination et retourner la valeur ",(0,r.kt)("em",{parentName:"p"},"true"),"."),(0,r.kt)("h2",{id:"la-fonction-filter"},"La fonction filter()"),(0,r.kt)("p",null,"La fonction ne doit ",(0,r.kt)("strong",{parentName:"p"},"pas")," \xeatre d\xe9finie comme ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", sinon elle ne sera pas d\xe9tect\xe9e par Centreon Broker."),(0,r.kt)("p",null,"Elle tient compte de deux param\xe8tres\xa0: ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," que nous avons d\xe9j\xe0 vu dans la section pr\xe9c\xe9dente. La cat\xe9gorie est un nombre entier de 1 \xe0 7, ou la valeur 65535. ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," donne des d\xe9tails sur l\u2019\xe9v\xe9nement, par exemple, pour la ",(0,r.kt)("em",{parentName:"p"},"cat\xe9gorie NEB"),", les ",(0,r.kt)("em",{parentName:"p"},"elements")," sont ",(0,r.kt)("em",{parentName:"p"},"Acknowledgement"),", ",(0,r.kt)("em",{parentName:"p"},"Comment"),", etc... donn\xe9s comme des entiers."),(0,r.kt)("h2",{id:"la-fonction-flush"},"La fonction flush()"),(0,r.kt)("p",null,"Lorsque la taille de la file d\u2019attente de Broker atteint la taille maximale autoris\xe9e, il continue \xe0 remplir cette file dans un fichier et n\u2019envoie plus d\u2019\xe9v\xe9nements aux flux. Tant que les \xe9v\xe9nements dans la file d\u2019attente ne sont pas acquitt\xe9s, les flux ne recevront plus d\u2019\xe9v\xe9nements."),(0,r.kt)("p",null,"Dans plusieurs cas, cela peut entra\xeener des probl\xe8mes. L\u2019id\xe9e est que le flux a gard\xe9 des \xe9v\xe9nements en m\xe9moire en attendant d\u2019autres \xe9v\xe9nements pour les envoyer \xe0 une base de donn\xe9es. Mais la file d\u2019attente de Broker est pleine et Broker n\u2019appelle plus la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," du flux puisqu\u2019il \xe9crit les \xe9v\xe9nements directement dans ses fichiers de r\xe9tention en attendant un accus\xe9 de r\xe9ception du flux qui n\u2019arrivera pas puisque la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," n\u2019est pas appel\xe9e."),(0,r.kt)("p",null,"La solution pour r\xe9soudre ce probl\xe8me dans Broker est une fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," appel\xe9e r\xe9guli\xe8rement par Broker qui demande simplement au flux de vider ses donn\xe9es. Cette fonction renvoie un bool\xe9en qui est True si le flux est arriv\xe9 pour vider sa file d\u2019attente. Une fois que le Broker re\xe7oit une information sur le succ\xe8s de la fonction flush, il peut \xe0 nouveau appeler la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," du flux."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  function write(d)\n    if d.category ~= 3 or d.element ~= 1 then\n      return false\n    end\n\n    -- We don't send data each time. We fill a queue and when it is full we\n    -- send its content with the flush() function.\n    queue[#queue + 1] = serialize(d)\n    local retval = false\n    if #queue > max_queue_size then\n      retval = flush()\n    end\n    -- Here, we return retval that is false except when flush has sent the\n    -- queue content.\n    return retval\n  end\n\n  function flush()\n    -- if the queue is empty, nothing to do and we can tell Broker to empty its\n    -- retention\n    if #queue == 0 then\n      return true\n    end\n  \n    -- Here, we should write some code to send events stored in the queue.\n    --\n    -- ...\n    if success then\n      return true\n    else\n      return false\n    end\n  end\n")),(0,r.kt)("p",null,"Pour plus de d\xe9tails sur les types, les cat\xe9gories et leurs identifiants, voir ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2551/fr/docs/developer/developer-broker-bbdo"},"Le protocole BBDO"),"."))}k.isMDXComponent=!0},63283:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/broker_config-4b0248e55bb7e9384619b9c9eaf0f2ea.png"}}]);