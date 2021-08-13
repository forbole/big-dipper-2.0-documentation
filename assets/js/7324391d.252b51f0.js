"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[56],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],p={title:"Setup",sidebar_position:1},l=void 0,s={unversionedId:"cosmos-based/frontend/setup",id:"cosmos-based/frontend/setup",isDocsHomePage:!1,title:"Setup",description:"Setup the environment",source:"@site/docs/cosmos-based/frontend/setup.md",sourceDirName:"cosmos-based/frontend",slug:"/cosmos-based/frontend/setup",permalink:"/cosmos-based/frontend/setup",version:"current",lastUpdatedAt:1628845586,formattedLastUpdatedAt:"8/13/2021",sidebarPosition:1,frontMatter:{title:"Setup",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Config reference",permalink:"/cosmos-based/parser/config"},next:{title:"Customisation",permalink:"/cosmos-based/frontend/customisation"}},c=[{value:"Setup the environment",id:"setup-the-environment",children:[]},{value:"Create .env",id:"create-env",children:[]},{value:"Update chain_config.json",id:"update-chain_configjson",children:[]},{value:"Start Big Dipper",id:"start-big-dipper",children:[]},{value:"Available Scripts",id:"available-scripts",children:[]},{value:"Docker",id:"docker",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"setup-the-environment"},"Setup the environment"),(0,i.kt)("p",null,"Fork and clone and check out our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/forbole/big-dipper-2.0-cosmos/tags"},"tag releases")," for the most stable version. If you're feeling frisky feel free to use the master branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/<user>/big-dipper-2.0-cosmos.git\ngit checkout <tag>\nnpm ci\n")),(0,i.kt)("h2",{id:"create-env"},"Create .env"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NODE_ENV=development\nPORT=3000\nNEXT_PUBLIC_GRAPHQL_URL=\nNEXT_PUBLIC_GRAPHQL_WS=\nNEXT_PUBLIC_URL=\nNEXT_PUBLIC_WS_CHAIN_URL=\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"development")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"production")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PORT")," - the port to run the app on"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_GRAPHQL_URL")," - refers to the api hosted by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/forbole/bdjuno"},"BDJuno")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_GRAPHQL_WS")," - refers to the websocket hosted by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/forbole/bdjuno"},"BDJuno")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_URL")," - the api where you will be hosting the frontend of this explorer (make sure there is no ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," at the end ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://morpheus.desmos.network")," not ",(0,i.kt)("inlineCode",{parentName:"li"},"https://morpheus.desmos.network/"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_WS_CHAIN_URL")," - refers to the rpc websocket")),(0,i.kt)("h2",{id:"update-chain_configjson"},"Update chain_config.json"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configs/chain_config.json")," update the json to fit your needs."),(0,i.kt)("p",null,"For a better understanding of what each section and field refers to, please read the ",(0,i.kt)("a",{parentName:"p",href:"/cosmos-based/frontend/chain-config"},"config reference"),"."),(0,i.kt)("p",null,"If you have more than one native token please insert it as the following ",(0,i.kt)("inlineCode",{parentName:"p"},"the base token needs [x] exponents to display the following token unit")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"tokenUnits": {\n    "udaric": {\n      "display": "daric",\n      "exponent": 6\n    },\n    "upretz": {\n      "display": "pretz",\n      "exponent": 3\n    },\n    "ubar": {\n      "display": "pretz",\n      "exponent": 6\n    },\n  },\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Turn ",(0,i.kt)("inlineCode",{parentName:"p"},"desmosProfile")," on if you want to display desmos profile for users that have a link."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Turn ",(0,i.kt)("inlineCode",{parentName:"p"},"forboleX")," on if your chain uses Forbole X."))),(0,i.kt)("h2",{id:"start-big-dipper"},"Start Big Dipper"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,i.kt)("h2",{id:"available-scripts"},"Available Scripts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," - starts the app in development mode using nodemon"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," - builds the app for production"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run start")," - runs the build app in production mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run type-check")," - typescript check"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run lint")," - lint check"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," - jest"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run graphql:codegen")," - rebuilds gql types if anything in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/graphql")," folder has changed"),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"If you want to use this with docker update the following ENV Variables inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ENV NEXT_PUBLIC_GRAPHQL_URL <your_url>\nENV NEXT_PUBLIC_GRAPHQL_WS <your_url>\nENV NEXT_PUBLIC_URL <your_url>\nENV NEXT_PUBLIC_WS_CHAIN_URL <your_url>\nENV NODE_ENV production\nENV PORT 3000\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker build\n")))}u.isMDXComponent=!0}}]);