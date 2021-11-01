"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[691],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,u=c["".concat(d,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"Chain Config Reference",sidebar_position:3},d=void 0,p={unversionedId:"cosmos-based/frontend/chain-config",id:"cosmos-based/frontend/chain-config",isDocsHomePage:!1,title:"Chain Config Reference",description:"This config file will help the explorer display each chain uniquely.",source:"@site/docs/cosmos-based/frontend/chain-config.md",sourceDirName:"cosmos-based/frontend",slug:"/cosmos-based/frontend/chain-config",permalink:"/cosmos-based/frontend/chain-config",version:"current",lastUpdatedAt:1635736592,formattedLastUpdatedAt:"11/1/2021",sidebarPosition:3,frontMatter:{title:"Chain Config Reference",sidebar_position:3},sidebar:"mySidebar",previous:{title:"Custom Tx Messages",permalink:"/cosmos-based/frontend/customisations/tx"},next:{title:"General Config Reference",permalink:"/cosmos-based/frontend/general-config"}},s=[{value:"Type",id:"type",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This config file will help the explorer display each chain uniquely."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"The default `/src/configs/chain_config.json` file should look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Desmos Block Explorer",\n  "network": "morpheus-apollo-2",\n  "icon": "https://raw.githubusercontent.com/forbole/big-dipper-assets/master/desmos/icon.svg?sanitize=true",\n  "logo": {\n    "default": "https://raw.githubusercontent.com/forbole/big-dipper-assets/master/desmos/logo.svg?sanitize=true"\n  },\n  "prefix": {\n    "consensus": "desmosvalcons",\n    "validator": "desmosvaloper",\n    "account": "desmos"\n  },\n  "genesis": {\n    "time": "2021-07-13T08:00:00",\n    "height": 1\n  },\n  "primaryTokenUnit": "udaric",\n  "tokenUnits": {\n    "udaric": {\n      "display": "daric",\n      "exponent": 6\n    }\n  },\n  "extra": {\n    "profile": true\n  }\n}\n'))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"title")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Title of your block explorer. Used for SEO purposes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"Desmos Block Explorer"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"network")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain ID"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"morpheus-apollo-2"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"icon")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The smaller chain icon that appears in the nav bar with a dropdown to the networks tab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"logo")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{default: string, [key: string]: string}")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Displays the logo on countdown, initial load, and home page by theme. Fallback to ",(0,i.kt)("inlineCode",{parentName:"td"},"logo.default")," if no logo for that theme is found"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"logo": { "default": <default logo>, "dark": <dark theme logo> }'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"prefix")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{consensus: string,  validator: string, account: string}")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Consist of prefixes by address role ",(0,i.kt)("inlineCode",{parentName:"td"},"consensus"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"validator"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"account")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"prefix": { "consensus": "desmosvalcons", "validator": "desmosvaloper", "account": "desmos" }'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"genesis")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{time: string, height: number}")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Checks if countdown component will be displayed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"primaryTokenUnit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This would most likely be the staking unit. Used for converting token in to the correct denom display."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"udaric"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenUnits")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{[key: string]: {display: string, exponent: number}}")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Used to display chain data and convert base denoms. When adding a new token unit please follow the logic ",(0,i.kt)("inlineCode",{parentName:"td"},"the base token needs [x] exponents to display the following token unit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"udaric": {  "display": "daric", "exponent": 6 }'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"extra.profile")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," we will be displaying desmos profiles with a fallback to use keybase and on-chain descriptions"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))))}c.isMDXComponent=!0}}]);