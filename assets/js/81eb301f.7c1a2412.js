"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[576],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2059:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],s={title:"2. Setup and run BDJuno",sidebar_position:3},l=void 0,u={unversionedId:"cosmos-based/parser/setup",id:"cosmos-based/parser/setup",isDocsHomePage:!1,title:"2. Setup and run BDJuno",description:"Installing BDJuno",source:"@site/docs/cosmos-based/parser/setup.md",sourceDirName:"cosmos-based/parser",slug:"/cosmos-based/parser/setup",permalink:"/cosmos-based/parser/setup",version:"current",lastUpdatedAt:1644265362,formattedLastUpdatedAt:"2/7/2022",sidebarPosition:3,frontMatter:{title:"2. Setup and run BDJuno",sidebar_position:3},sidebar:"mySidebar",previous:{title:"1. Setup the database",permalink:"/cosmos-based/parser/database"},next:{title:"3. Run Hasura",permalink:"/cosmos-based/parser/hasura"}},p=[{value:"Installing BDJuno",id:"installing-bdjuno",children:[]},{value:"Initializing the configuration",id:"initializing-the-configuration",children:[]},{value:"Parsing the genesis file",id:"parsing-the-genesis-file",children:[]},{value:"Running BDJuno",id:"running-bdjuno",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-bdjuno"},"Installing BDJuno"),(0,o.kt)("p",null,"In order to install BDJuno you are required to have ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go 1.15+")," installed on your machine. Once you have it, the first thing to do is to clone the GitHub repository. To do this you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/forbole/bdjuno.git\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Select the correct branch  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to parse a chain that is ",(0,o.kt)("strong",{parentName:"p"},"not")," the Cosmos one, make sure you checkout the correct BDJuno branch before running the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," command."),(0,o.kt)("p",{parentName:"div"},"To view a list of all the available branches you can use"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -r\n")),(0,o.kt)("p",{parentName:"div"},"Then, you can checkout the branch you prefer using the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkout")," command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -t origin/v2/chains/<chain>\n\n# E.g.\n# git checkout -t origin/v2/chains/osmosis\n")),(0,o.kt)("p",{parentName:"div"},"If you do not see a branch for the chain you would like to parse, please head to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/"},"BDJuno repository")," and open an issue asking for an integration. "))),(0,o.kt)("p",null,"Then, you need to install the binary. To do this, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ make install\n")),(0,o.kt)("p",null,"This will put the ",(0,o.kt)("inlineCode",{parentName:"p"},"bdjuno")," binary inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," folder. You should now be able to run ",(0,o.kt)("inlineCode",{parentName:"p"},"bdjuno")," to make sure it's installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ bdjuno\nA Cosmos chain data aggregator. It improves the chain\'s data accessibility\nby providing an indexed database exposing aggregated resources and models such as blocks, validators, pre-commits, \ntransactions, and various aspects of the governance module. \nbdjuno is meant to run with a GraphQL layer on top so that it even further eases the ability for developers and\ndownstream clients to answer queries such as "What is the average gas cost of a block?" while also allowing\nthem to compose more aggregate and complex queries.\n\nUsage:\n  bdjuno [command]\n\nAvailable Commands:\n  help        Help about any command\n  init        Initializes the configuration files\n  parse       Start parsing the blockchain data\n  version     Print the version information\n\nFlags:\n  -h, --help          help for bdjuno\n      --home string   Set the home folder of the application, where all files will be stored (default "/home/riccardo/.bdjuno")\n\nUse "bdjuno [command] --help" for more information about a command.\n')),(0,o.kt)("h2",{id:"initializing-the-configuration"},"Initializing the configuration"),(0,o.kt)("p",null,"In order to correctly parse and store the data based on your requirements, BDJuno allows you to customize its behavior via a YAML file called ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),". In order to create the first instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno init\n")),(0,o.kt)("p",null,"This will create such file inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bdjuno")," folder.",(0,o.kt)("br",{parentName:"p"}),"\n","Note that if you want to change the folder used by BDJuno you can do this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno init --home /path/to/my/folder\n")),(0,o.kt)("p",null,"Once the file is created, you are required to edit it and change the different values. To do this you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ nano ~/.bdjuno/config.yaml\n")),(0,o.kt)("p",null,"For a better understanding of what each section and field refers to, please read the ",(0,o.kt)("a",{parentName:"p",href:"/cosmos-based/parser/config/config"},"config reference"),"."),(0,o.kt)("h2",{id:"parsing-the-genesis-file"},"Parsing the genesis file"),(0,o.kt)("p",null,"You may want to parse the genesis beofre start parsing the node. BDjuno will reads the genesis file from the node, or from the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis_file_path")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file when it's configured.\nTo parse all the registered genesis modules, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno parse-genesis\n")),(0,o.kt)("p",null,"You may also specify module name(s) to parse only certain modules, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno parse-genesis auth bank staking\n")),(0,o.kt)("h2",{id:"running-bdjuno"},"Running BDJuno"),(0,o.kt)("p",null,"Once the configuration file has been setup and genesis file parsed, you can run BDJuno using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno parse\n")),(0,o.kt)("p",null,"If you are using a custom folder for the configuration file, please specify it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno parse --home /path/to/my/config/folder\n")),(0,o.kt)("p",null,"We highly suggest you running BDJuno as a system service so that it can be restarted automatically in the case it stops. To do this you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo tee /etc/systemd/system/bdjuno.service > /dev/null <<EOF\n[Unit]\nDescription=BDJuno parser\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOPATH/bin/bdjuno parse\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,o.kt)("p",null,"Then you need to enable and start the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl enable bdjuno\n$ sudo systemctl start bdjuno\n")))}d.isMDXComponent=!0}}]);