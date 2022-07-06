"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[101],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return N}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),N=r,c=k["".concat(d,".").concat(N)]||k[N]||s[N]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={title:"Toml format (old)",sidebar_position:2},d=void 0,p={unversionedId:"cosmos-based/parser/config/config_old",id:"cosmos-based/parser/config/config_old",isDocsHomePage:!1,title:"Toml format (old)",description:"The default config.toml file should look like the following:",source:"@site/docs/cosmos-based/parser/config/config_old.md",sourceDirName:"cosmos-based/parser/config",slug:"/cosmos-based/parser/config/config_old",permalink:"/cosmos-based/parser/config/config_old",version:"current",lastUpdatedAt:1657100553,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:2,frontMatter:{title:"Toml format (old)",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Yaml format",permalink:"/cosmos-based/parser/config/config"},next:{title:"Custom chains",permalink:"/cosmos-based/parser/custom-chains"}},m=[{value:"<code>cosmos</code>",id:"cosmos",children:[{value:"Supported modules",id:"supported-modules",children:[]}]},{value:"<code>pricefeed</code>",id:"pricefeed",children:[]},{value:"<code>rpc</code>",id:"rpc",children:[]},{value:"<code>grpc</code>",id:"grpc",children:[]},{value:"<code>parsing</code>",id:"parsing",children:[]},{value:"<code>database</code>",id:"database",children:[]},{value:"<code>pruning</code>",id:"pruning",children:[]},{value:"<code>logging</code>",id:"logging",children:[]},{value:"<code>telemetry</code>",id:"telemetry",children:[]}],s={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," file should look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'\n[cosmos]\n  modules = []\n  prefix = "cosmos"\n\n[database]\n  host = "localhost"\n  max_idle_connections = 1\n  max_open_connections = 1\n  name = "database-name"\n  password = "password"\n  port = 5432\n  schema = "public"\n  ssl_mode = ""\n  user = "user"\n\n[grpc]\n  address = "localhost:9090"\n  insecure = true\n\n[logging]\n  format = "text"\n  level = "debug"\n\n[parsing]\n  fast_sync = false\n  genesis_file_path = ""\n  listen_new_blocks = true\n  parse_genesis = true\n  parse_old_blocks = true\n  start_height = 1\n  workers = 1\n\n[pruning]\n  interval = 10\n  keep_every = 500\n  keep_recent = 100\n\n[rpc]\n  address = "http://localhost:26657"\n  client_name = "juno"\n  max_connections = 20\n\n[telemetry]\n  enabled = false\n  port = 500\n\n')),(0,i.kt)("p",null,"Let's see what each section refers to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cosmos"},(0,i.kt)("inlineCode",{parentName:"a"},"cosmos"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pricefeed"},(0,i.kt)("inlineCode",{parentName:"a"},"pricefeed"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rpc"},(0,i.kt)("inlineCode",{parentName:"a"},"rpc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#grpc"},(0,i.kt)("inlineCode",{parentName:"a"},"grpc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#parsing"},(0,i.kt)("inlineCode",{parentName:"a"},"parsing"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#database"},(0,i.kt)("inlineCode",{parentName:"a"},"database"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pruning"},(0,i.kt)("inlineCode",{parentName:"a"},"pruning"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#logging"},(0,i.kt)("inlineCode",{parentName:"a"},"logging"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#telemetry"},(0,i.kt)("inlineCode",{parentName:"a"},"telemetry")))),(0,i.kt)("h2",{id:"cosmos"},(0,i.kt)("inlineCode",{parentName:"h2"},"cosmos")),(0,i.kt)("p",null,"This section contains the details of the chain configuration regarding the Cosmos SDK."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"modules")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of modules that should be enabled"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'[ "auth", "bank", "distribution" ]'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"prefix")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Bech 32 prefix of the addresses"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cosmos"))))),(0,i.kt)("h3",{id:"supported-modules"},"Supported modules"),(0,i.kt)("p",null,"Currently, we support the followings Cosmos modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auth")," to parse the ",(0,i.kt)("inlineCode",{parentName:"li"},"x/auth")," data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bank")," to parse the ",(0,i.kt)("inlineCode",{parentName:"li"},"x/bank")," data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consensus")," to parse the consensus data. This includes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the genesis details"),(0,i.kt)("li",{parentName:"ul"},"average block times (since genesis, in a day, in an hour, in a minute)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distribution")," to parse the ",(0,i.kt)("inlineCode",{parentName:"li"},"x/distribution")," data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gov")," to parse the ",(0,i.kt)("inlineCode",{parentName:"li"},"x/gox")," data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messages")," to parse the various messages inside a separate table"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mint")," to parse the ",(0,i.kt)("inlineCode",{parentName:"li"},"x/mint")," data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modules")," to get the list of enabled modules inside BDJuno"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pricefeed")," to get the token prices"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slashing")," to parse the ",(0,i.kt)("inlineCode",{parentName:"li"},"x/slashing")," data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking")," to parse the ",(0,i.kt)("inlineCode",{parentName:"li"},"x/staking")," data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"history")," to store historical data. This is currently limited to",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"historical price data, stored every time the price changes"),(0,i.kt)("li",{parentName:"ul"},"historical account balance, which includes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the available balance"),(0,i.kt)("li",{parentName:"ul"},"the delegated amount"),(0,i.kt)("li",{parentName:"ul"},"the delegation reward "),(0,i.kt)("li",{parentName:"ul"},"the validator commission reward")))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Module order  ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When listing the different modules to be used, please note that there is some order that must be respected. In particular: "),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modules")," should be listed before every other module"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messages")," should be listed after the ",(0,i.kt)("inlineCode",{parentName:"li"},"modules")," module and before every other module "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distribution")," must be listed ",(0,i.kt)("strong",{parentName:"li"},"after")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"staking")," module")))),(0,i.kt)("h2",{id:"pricefeed"},(0,i.kt)("inlineCode",{parentName:"h2"},"pricefeed")),(0,i.kt)("p",null,"This section contains the data used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"pricefeed")," to fetch the prices using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en"},"CoinGecko")," APIs."),(0,i.kt)("p",null,"The only field required in this section is the ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens")," field, which must be an array of objects, each one containing two fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," represents the human-readable name of the token "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"units")," contains a list of token units, each of them having the following attributes: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"denom")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exponent")),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"aliases")),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"price_id"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Provide a valid ",(0,i.kt)("inlineCode",{parentName:"h5"},"price_id"),"  ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When fetching the various prices of the token, we will try and search for prices based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"price_id")," of the units that you provide.\nFor this reason, you need to make sure that you provide at least a unit with a ",(0,i.kt)("inlineCode",{parentName:"p"},"price_id")," that is listed inside the ",(0,i.kt)("a",{parentName:"p",href:"https://api.coingecko.com/api/v3/coins/list"},"CoinGecko coins list API"),"."),(0,i.kt)("p",{parentName:"div"},"E.g.\nIf you have a token that is named ",(0,i.kt)("inlineCode",{parentName:"p"},"MyToken")," and is listed inside CoinGecko with the ticker ",(0,i.kt)("inlineCode",{parentName:"p"},"$MTKN")," and id ",(0,i.kt)("inlineCode",{parentName:"p"},"MyToken"),", make sure you specify a token unit having ",(0,i.kt)("inlineCode",{parentName:"p"},'denom = "mtkn"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'price_id = "mytoken"'),"  and ",(0,i.kt)("inlineCode",{parentName:"p"},"exponent = 6")," (or whatever amount of decimal places your token unit has inside your chain). This will make sure the price is always fetched correctly."))),(0,i.kt)("h2",{id:"rpc"},(0,i.kt)("inlineCode",{parentName:"h2"},"rpc")),(0,i.kt)("p",null,"This section contains the details of the chain RPC to which BDJuno will connect."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Address of the RPC endpoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"http://localhost:26657"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"client_name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Client name used when subscribing to the Tendermint websocket"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bdjuno"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"max_connections")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Max number of connections that can created towards the RPC node (any value less or equal to ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," means to use the default one instead)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"20"))))),(0,i.kt)("h2",{id:"grpc"},(0,i.kt)("inlineCode",{parentName:"h2"},"grpc")),(0,i.kt)("p",null,"This section contains the details of the gRPC endpoint that BDJuno will use to query the data."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Address of the gRPC endpoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"localhost:9090"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"insecure")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether the gRPC endpoint is insecure or not"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h2",{id:"parsing"},(0,i.kt)("inlineCode",{parentName:"h2"},"parsing")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"listen_new_blocks")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether BDJuno should parse new blocks as soon as they get created"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"parse_genesis")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether BDJuno needs to parse the genesis state or not"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"parse_old_blocks")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether BDJuno should parse old chain blocks or not"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"start_height")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Height at which BDJuno should start parsing old blocks"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"250000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"workers")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of works that will be used to fetch the data and store it inside the database"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5"))))),(0,i.kt)("h2",{id:"database"},(0,i.kt)("inlineCode",{parentName:"h2"},"database")),(0,i.kt)("p",null,"This section contains all the different configurations related to the PostgreSQL database where BDJuno will write the\ndata."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"host")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Host where the database is found"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"localhost"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"port")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Port to be used to connect to the PostgreSQL instance"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5432"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the database to which connect to"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bdjuno"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the user to use when connecting to the database. This user must have read/write access to all the database."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bdjuno"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Password to be used to connect to the database instance"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"password"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"schema")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Schema to be used inside the database (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"public"),")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"public"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ssl_mode")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.postgresql.org/docs/9.1/libpq-ssl.html"},"PostgreSQL SSL mode")," to be used when connecting to the database. If not set, ",(0,i.kt)("inlineCode",{parentName:"td"},"disable")," will be used."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"verify-ca"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"max_idle_connections")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Max number of idle connections that should be kept open (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"1"),")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"max_open_connections")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Max number of open connections at any time (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"1"),")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"15"))))),(0,i.kt)("h2",{id:"pruning"},(0,i.kt)("inlineCode",{parentName:"h2"},"pruning")),(0,i.kt)("p",null,"This section contains the configuration about the pruning options of the database. Note that this will have an effect only\nif you add the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pruning"')," entry to the ",(0,i.kt)("inlineCode",{parentName:"p"},"modules")," field of the ",(0,i.kt)("a",{parentName:"p",href:"#cosmos"},(0,i.kt)("inlineCode",{parentName:"a"},"cosmos")," config"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"interval")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of blocks that should pass between one pruning and the other (default: prune every ",(0,i.kt)("inlineCode",{parentName:"td"},"10")," blocks)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"keep_every")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Keep the state every ",(0,i.kt)("inlineCode",{parentName:"td"},"nth")," block, even if it should have been pruned"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"500"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"keep_recent")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Do not prune this amount of recent states"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"100"))))),(0,i.kt)("h2",{id:"logging"},(0,i.kt)("inlineCode",{parentName:"h2"},"logging")),(0,i.kt)("p",null,"This section allows to configure the logging details of BDJuno."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"format")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Format in which the logs should be output (either ",(0,i.kt)("inlineCode",{parentName:"td"},"json")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"text"),")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"level")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Level of the log (either ",(0,i.kt)("inlineCode",{parentName:"td"},"verbose"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"warn")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"error"),")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"error"))))),(0,i.kt)("h2",{id:"telemetry"},(0,i.kt)("inlineCode",{parentName:"h2"},"telemetry")),(0,i.kt)("p",null,"This section allows to configure the telemetry details of Juno."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"enabled")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether the telemetry should be enabled or not"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"port")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Port on which the telemetry server will listen"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"8000"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the telemetry server is enabled, a new endpoint at the provided port and path ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics")," will expose ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," data."))))}k.isMDXComponent=!0}}]);