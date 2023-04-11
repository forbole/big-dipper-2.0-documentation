"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,f=s["".concat(p,".").concat(c)]||s[c]||k[c]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Chain Config Reference",sidebar_position:3},l=void 0,o={unversionedId:"cosmos-based/frontend/chain-config",id:"cosmos-based/frontend/chain-config",title:"Chain Config Reference",description:"This config file will help the explorer display each chain uniquely.",source:"@site/docs/cosmos-based/frontend/chain-config.md",sourceDirName:"cosmos-based/frontend",slug:"/cosmos-based/frontend/chain-config",permalink:"/cosmos-based/frontend/chain-config",draft:!1,tags:[],version:"current",lastUpdatedAt:1681203982,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:3,frontMatter:{title:"Chain Config Reference",sidebar_position:3},sidebar:"mySidebar",previous:{title:"Custom Tx Messages",permalink:"/cosmos-based/frontend/customisations/tx"},next:{title:"General Config Reference",permalink:"/cosmos-based/frontend/general-config"}},p={},d=[{value:"Type",id:"type",level:2},{value:"General",id:"general",level:3},{value:"Themes",id:"themes",level:3},{value:"Chains",id:"chains",level:3},{value:"Token Units",id:"token-units",level:3}],m={toc:d},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This config file will help the explorer display each chain uniquely."),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"chainName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Title of your block explorer. Used for SEO purposes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"examplenet"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Title of your block explorer. Used for SEO purposes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Examplenet Block Explorer"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"extra.profile")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," we will be displaying desmos profiles with a fallback to use keybase and on-chain descriptions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"themes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"See ",(0,r.kt)("a",{parentName:"td",href:"#themes"},"Themes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The configs for different themes, see below"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"chains")),(0,r.kt)("td",{parentName:"tr",align:"left"},"See ",(0,r.kt)("a",{parentName:"td",href:"#chains"},"Chains")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The configs for different chains(",(0,r.kt)("inlineCode",{parentName:"td"},"mainnet")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"testnet"),"), see below"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h3",{id:"themes"},"Themes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default theme used when user first accesses the explorer"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"light"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"themeList")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of themes that are available for the explorer."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'["light", "dark", "deuteranopia", "tritanopia"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"dark")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The hex color codes for ",(0,r.kt)("inlineCode",{parentName:"td"},"dark")," mode which can be modified according to your design"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"light")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The hex color codes for ",(0,r.kt)("inlineCode",{parentName:"td"},"light")," mode which can be modified according to your design"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("admonition",{title:"Default themes",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deuteranopia")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"tritanopia")," are the default themes whose colors are hard-coded in the codes. In case you want to modify them, check out the file ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/ui/src/styles/theme/deuteranopia.ts")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/ui/src/styles/theme/tritanopia.ts"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can refer to other chain's configs under ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/shared-utils/configs/chains/"),", pick the ",(0,r.kt)("inlineCode",{parentName:"p"},"dark")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"light")," theme you prefer, and copy-paste them in your own config file to apply them.")))),(0,r.kt)("h3",{id:"chains"},"Chains"),(0,r.kt)("p",null,"An array of objects that contains the chain configs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"network")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The chain ID of the blockchain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"chainType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mainnet or Testnet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"genesis")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{time: string, height: number}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Checks if countdown component will be displayed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"prefix")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{consensus: string,  validator: string, account: string}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Consist of prefixes by address role ",(0,r.kt)("inlineCode",{parentName:"td"},"consensus"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"validator"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"account")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"prefix": { "consensus": "examplenetvalcons", "validator": "examplenetvaloper", "account": "examplenet" }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"primaryTokenUnit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This would most likely be the staking unit. Used for converting token in to the correct denom display."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"excoin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"primaryTokenUnit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to display voting power correctly. If the VP is not the same as ",(0,r.kt)("inlineCode",{parentName:"td"},"primaryTokenUnit")," please create a new TokenUnit and place the name here"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"excoin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#tokenUnits"},(0,r.kt)("inlineCode",{parentName:"a"},"tokenUnits"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{[key: string]: {display: string, exponent: number}}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to display chain data and convert base denoms. When adding a new token unit please follow the logic ",(0,r.kt)("inlineCode",{parentName:"td"},"the base token needs [x] exponents to display the following token unit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"excoin": {  "display": "excoin", "exponent": 6 }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"endpoints.graphql")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The GraphQL endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"https://gql.examplenet.com/v1/graphql"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"endpoints.graphqlWebsocket")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The GraphQL web socket endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"wss://gql.examplenet.com/v1/graphql"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"endpoints.publicRpcWebsocket")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The public rpc web socket endpoint for consensus state"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"wss://rpc.examplenet.com/websocket"'))))),(0,r.kt)("h3",{id:"token-units"},"Token Units"),(0,r.kt)("p",null,"If you have trouble understanding ",(0,r.kt)("strong",{parentName:"p"},"tokenUnits")," please insert it as the following ",(0,r.kt)("inlineCode",{parentName:"p"},"the base token needs [x] exponents to display the following token unit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"tokenUnits": {\n    "excoin": {\n      "display": "excoin",\n      "exponent": 6\n    },\n    "upretz": {\n      "display": "pretz",\n      "exponent": 18\n    },\n    "ubar": {\n      "display": "pretz",\n      "exponent": 6\n    },\n  },\n')))}k.isMDXComponent=!0}}]);