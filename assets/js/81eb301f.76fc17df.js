"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[576],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2059:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],s={title:"2. Setup and run BDJuno",sidebar_position:3},l=void 0,u={unversionedId:"cosmos-based/parser/setup",id:"cosmos-based/parser/setup",isDocsHomePage:!1,title:"2. Setup and run BDJuno",description:"Prepare the environment",source:"@site/docs/cosmos-based/parser/setup.md",sourceDirName:"cosmos-based/parser",slug:"/cosmos-based/parser/setup",permalink:"/cosmos-based/parser/setup",version:"current",lastUpdatedAt:1658156907,formattedLastUpdatedAt:"7/18/2022",sidebarPosition:3,frontMatter:{title:"2. Setup and run BDJuno",sidebar_position:3},sidebar:"mySidebar",previous:{title:"1. Setup the database",permalink:"/cosmos-based/parser/database"},next:{title:"3. Setup and run Hasura",permalink:"/cosmos-based/parser/hasura"}},p=[{value:"Prepare the environment",id:"prepare-the-environment",children:[]},{value:"Installing BDJuno",id:"installing-bdjuno",children:[]},{value:"Initializing the configuration",id:"initializing-the-configuration",children:[]},{value:"Downloading the genesis file",id:"downloading-the-genesis-file",children:[]},{value:"Parsing genesis file",id:"parsing-genesis-file",children:[]},{value:"Running BDJuno",id:"running-bdjuno",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prepare-the-environment"},"Prepare the environment"),(0,o.kt)("p",null,"To properly install and set up BDJuno you need to first prepare the environment by updating/upgrading the system and installing the libraries that are needed to install the BDJuno binary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Update the system\n$ sudo apt-get update\n$ sudo apt-get upgrade\n\n# Install the libraries\n$ sudo apt install git build-essential ufw curl docker-ce docker-ce-cli containerd.io\n")),(0,o.kt)("p",null,"To verify if Docker is installed correctly run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker version\n")),(0,o.kt)("p",null,"It should return the Docker version and the output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Client: Docker Engine - Community\n Version:           20.10.12\n API version:       1.41\n Go version:        go1.16.12\n Git commit:        e91ed57\n Built:             Mon Dec 13 11:45:33 2021\n OS/Arch:           linux/amd64\n Context:           default\n Experimental:      true\n\nServer: Docker Engine - Community\n Engine:\n  Version:          20.10.12\n  API version:      1.41 (minimum version 1.12)\n  Go version:       go1.16.12\n  Git commit:       459d0df\n  Built:            Mon Dec 13 11:43:42 2021\n  OS/Arch:          linux/amd64\n  Experimental:     false\n containerd:\n  Version:          1.4.12\n  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d\n runc:\n  Version:          1.0.2\n  GitCommit:        v1.0.2-0-g52b36a2\n docker-init:\n  Version:          0.19.0\n  GitCommit:        de40ad0\n")),(0,o.kt)("p",null,"Next, you need to install ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go 1.17+")," and set up its environment variables, to do this run: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install go\n$ sudo snap install go --classic\n\n# Export environment variables\n$ echo 'export GOPATH=\"$HOME/go\"' >> ~/.profile\n$ echo 'export GOBIN=\"$GOPATH/bin\"' >> ~/.profile\n$ echo 'export PATH=\"$GOBIN:$PATH\"' >> ~/.profile\n$ source ~/.profile\n")),(0,o.kt)("p",null,"To verify if Go is installed correctly run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,o.kt)("p",null,"It should return Go version, the output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go version go1.18 linux/amd64\n")),(0,o.kt)("h2",{id:"installing-bdjuno"},"Installing BDJuno"),(0,o.kt)("p",null,"After you finish setting up the environment, the first thing to do is to clone the GitHub repository. To do this you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/forbole/bdjuno.git\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Select the correct branch  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to parse a chain that is ",(0,o.kt)("strong",{parentName:"p"},"not")," the Cosmos one, make sure you checkout the correct BDJuno branch before running ",(0,o.kt)("inlineCode",{parentName:"p"},"make install")," command."),(0,o.kt)("p",{parentName:"div"},"To view a list of all the available branches you can use"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git branch -r\n")),(0,o.kt)("p",{parentName:"div"},"Then, you can checkout the branch you prefer using the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkout")," command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git checkout -t origin/chains/<chain>\n\n# E.g.\n# git checkout -t origin/chains/osmosis\n")),(0,o.kt)("p",{parentName:"div"},"If you do not see a branch for the chain you would like to parse, please head to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/"},"BDJuno repository")," and open an issue asking for the integration. "))),(0,o.kt)("p",null,"Then, you need to install the binary. To do this, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ make install\n")),(0,o.kt)("p",null,"This will put the ",(0,o.kt)("inlineCode",{parentName:"p"},"bdjuno")," binary inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," folder. You should now be able to run ",(0,o.kt)("inlineCode",{parentName:"p"},"bdjuno")," to make sure it's installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ bdjuno\nA Cosmos chain data aggregator. It improves the chain\'s data accessibility\nby providing an indexed database exposing aggregated resources and models such as blocks, validators, pre-commits, \ntransactions, and various aspects of the governance module. \nbdjuno is meant to run with a GraphQL layer on top so that it even further eases the ability for developers and\ndownstream clients to answer queries such as "What is the average gas cost of a block?" while also allowing\nthem to compose more aggregate and complex queries.\n\nUsage:\n  bdjuno [command]\n\nAvailable Commands:\n  help        Help about any command\n  init        Initializes the configuration files\n  migrate     Perform the migrations from the current version to the specified one\n  parse       Parse some data without the need to re-syncing the whole database from scratch\n  start       Start parsing the blockchain data\n  version     Print the version information\n\nFlags:\n  -h, --help          help for bdjuno\n      --home string   Set the home folder of the application, where all files will be stored (default "/home/riccardo/.bdjuno")\n\nUse "bdjuno [command] --help" for more information about a command.\n')),(0,o.kt)("h2",{id:"initializing-the-configuration"},"Initializing the configuration"),(0,o.kt)("p",null,"In order to correctly parse and store the data based on your requirements, BDJuno allows you to customize its behavior via a YAML file called ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),". To create the first instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno init\n")),(0,o.kt)("p",null,"This will create such a file inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bdjuno")," folder.",(0,o.kt)("br",{parentName:"p"}),"\n","Note that if you want to change the folder used by BDJuno you can do this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno init --home /path/to/my/folder\n")),(0,o.kt)("p",null,"Once the file is created, you are required to edit it and change the different values. To do this you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ nano ~/.bdjuno/config.yaml\n")),(0,o.kt)("p",null,"For a better understanding of what each section and field refers to, please read the ",(0,o.kt)("a",{parentName:"p",href:"/cosmos-based/parser/config/config"},"config reference"),"."),(0,o.kt)("h2",{id:"downloading-the-genesis-file"},"Downloading the genesis file"),(0,o.kt)("p",null,"Download the genesis file and save it inside ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bdjuno")," directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl [URL of genesis.json file] > $HOME/.bdjuno/genesis.json\n")),(0,o.kt)("h2",{id:"parsing-genesis-file"},"Parsing genesis file"),(0,o.kt)("p",null,"You can parse the genesis file before starting parsing the node. BDJuno will read the genesis.json from the default path: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bdjuno/genesis.json"),".\nTo parse all registered genesis modules, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno parse genesis-file\n")),(0,o.kt)("p",null,"You can also specify the genesis file path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno parse genesis-file --genesis-file-path [/path/to/genesis.json]\n")),(0,o.kt)("h2",{id:"running-bdjuno"},"Running BDJuno"),(0,o.kt)("p",null,"Once the configuration file has been set up and the genesis file parsed, you can run BDJuno using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno start\n")),(0,o.kt)("p",null,"If you are using a custom folder for the configuration file, please specify it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno start --home /path/to/my/config/folder\n")),(0,o.kt)("p",null,"We highly suggest you run BDJuno as a system service so that it can be restarted automatically in the case it stops. To do this you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo tee /etc/systemd/system/bdjuno.service > /dev/null <<EOF\n[Unit]\nDescription=BDJuno parser\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOPATH/bin/bdjuno start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,o.kt)("p",null,"Then you need to enable and start the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl enable bdjuno\n$ sudo systemctl start bdjuno\n")))}d.isMDXComponent=!0}}]);